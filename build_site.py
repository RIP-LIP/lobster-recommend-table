# -*- coding: utf-8 -*-
"""
把 source.xlsx（脑叶公司异想体推荐表 & 加班计算器）转换成静态网站。

产出：site/index.html, site/styles.css, site/app.js, site/data.js

设计原则：不改写、不推断原表没有的数据。
  · 单元格原文全部保留在 *_raw 字段里，页面可展开查看。
  · 解析出来的结构化字段只做「提取」，不新增含义。
  · 原表公式在页面上以等价 JS 重新实现，系数表直接从单元格读出。
"""
import json
import os
import re

import openpyxl

BASE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(BASE, "source.xlsx")
OUT = os.path.join(BASE, "site")

DANGER = ["ZAYIN", "TETH", "HE", "WAW", "ALEPH"]
MGMT = ["论外", "高", "中", "低", "极低"]
W_GRADE = ["极优", "优", "良", "差", "极差"]
RANGES = ["极近", "近", "短", "一般", "远", "极远"]

# 站点显示名覆盖：只改站上显示的名称，不改写 source.xlsx。
# 原因：原表含 3 个批注部件、VML 批注框和内嵌图片，经 openpyxl 另存会丢失这些部件。
# 键必须是「异想体编号」而非名称——F-02-44 也叫「美女和野兽」，按名称改会误伤。
NAME_OVERRIDES = {
    "O-01-92": "今天也很害羞",
}

# 原表作者（B 站 UP 主）与原表出处，用于页脚署名
SOURCE = {
    "author": "掉落的银杏",
    "sheet": "https://docs.qq.com/sheet/DR0tDUnZmem5EeUdI?tab=BB08J2",
    "wiki": "https://lobotomycorp.fandom.com/zh/wiki/脑叶公司_Wiki",
}

WIKI_FILE = "wiki_data.json"



def lines(v):
    if v is None:
        return []
    return [s.strip() for s in str(v).split("\n") if s.strip()]


def scan_grades(text, order):
    """按出现顺序取出推荐度等级。

    必须用「最长优先」的正则交替，不能用 `g in text`：
    `极低` 里含 `低`、`极差` 里含 `差`、`极优` 里含 `优`，
    直接包含判断会把两级混为一谈。
    """
    if not text:
        return []
    alt = "|".join(sorted(order, key=len, reverse=True))
    return [m.group(0) for m in re.finditer(alt, text)]


def best_grade(cands, order):
    for g in order:
        if g in cands:
            return g
    return None


# ---------------------------------------------------------------- 推荐表
def parse_sheet(ws):
    legends = {}
    for col in ("D", "E", "F"):
        legends[col] = ws[col + "2"].value or ""

    records = []
    cur = None
    for r in range(3, ws.max_row + 1):
        a = ws.cell(r, 1).value
        b = ws.cell(r, 2).value
        c = ws.cell(r, 3).value
        is_head = a is not None and b is not None and str(c).strip() in DANGER
        if is_head:
            cur = {
                "row": r,
                "id": str(a).strip(),
                "name": str(b).strip(),
                "danger": str(c).strip(),
                "d": lines(ws.cell(r, 4).value),
                "e": lines(ws.cell(r, 5).value),
                "f": lines(ws.cell(r, 6).value),
                "g": lines(ws.cell(r, 7).value),
            }
            records.append(cur)
        elif cur is not None:
            for key, col in (("d", 4), ("e", 5), ("f", 6), ("g", 7)):
                cur[key] += lines(ws.cell(r, col).value)
    return legends, records


def build_item(rec):
    d, e, f, g = rec["d"], rec["e"], rec["f"], rec["g"]
    d_txt = "\n".join(d)
    e_txt = "\n".join(e)
    f_txt = "\n".join(f)
    g_txt = "\n".join(g)

    it = {
        "row": rec["row"],
        "id": rec["id"],
        "name": NAME_OVERRIDES.get(rec["id"], rec["name"]),
        "danger": rec["danger"],
        "prefix": re.match(r"^([A-Z])-", rec["id"]).group(1)
        if re.match(r"^([A-Z])-", rec["id"])
        else "?",
    }

    # 管理推荐度 -------------------------------------------------------
    mg = scan_grades(d_txt, MGMT)
    it["mgmtGrades"] = mg
    it["mgmtGrade"] = best_grade(mg, MGMT)
    it["mgmtNote"] = "\n".join(d[1:]) if d and d[0] in MGMT else d_txt

    # EGO 武器 ---------------------------------------------------------
    head_e = e[0] if e else ""
    it["weaponText"] = e_txt
    wg = scan_grades(e_txt, W_GRADE)
    it["weaponGrades"] = wg
    it["weaponGrade"] = best_grade(wg, W_GRADE)
    wt = sorted({m for m in re.findall(r"\(([A-ZWHTAZ])\)", head_e)} |
                {m for m in re.findall(r"\(([A-ZWHTAZ])\)", e_txt)})
    it["weaponTypes"] = wt
    it["weaponType"] = wt[0] if wt else None
    rm = re.search(r"【\s*(极近|近|短|一般|远|极远)\s*\(?\s*(\d+)", e_txt)
    if rm:
        it["rangeLabel"] = rm.group(1)
        it["rangeValue"] = int(rm.group(2))
    else:
        rm2 = re.search(r"【\s*(极近|近|短|一般|远|极远)", e_txt)
        it["rangeLabel"] = rm2.group(1) if rm2 else None
        it["rangeValue"] = None
    # 尾部补充说明，例如「（实际为3，可用于镇压绿午夜）」
    tail = re.sub(r"^.*?】", "", head_e).strip() if rm or "】" in head_e else ""
    it["weaponTail"] = tail.strip("（）() ") if tail else ""

    dps = re.search(r"DPS[：:]\s*(\d+(?:\.\d+)?)", e_txt)
    it["weaponDps"] = float(dps.group(1)) if dps else None
    dmax = re.search(r"DPS[：:]\s*\d+(?:\.\d+)?\s*[（(]\s*([\d.]+)", e_txt)
    it["weaponDpsMax"] = float(dmax.group(1)) if dmax else None
    # 范围上的备注（如「极近前期不推荐」），原样保留
    it["weaponNote"] = "\n".join(e[1:]) if e else ""

    # EGO 防具 ---------------------------------------------------------
    it["armorText"] = f_txt
    ag = scan_grades(f_txt, W_GRADE)
    it["armorGrades"] = ag
    it["armorGrade"] = best_grade(ag, W_GRADE)
    at = sorted(set(re.findall(r"\(([A-ZWHTAZ])\)", f_txt)))
    it["armorTypes"] = at
    it["armorType"] = at[0] if at else None
    res = re.search(r"(\d(?:\.\d+)?)\s+(\d(?:\.\d+)?)\s+(\d(?:\.\d+)?)\s+(\d(?:\.\d+)?)", f_txt)
    it["armorResist"] = [float(x) for x in res.groups()] if res else None
    it["armorNote"] = "\n".join(f[1:]) if f and re.fullmatch(r"[极优优良差极差]*\([A-ZWHTAZ]\)", f[0]) else f_txt

    # 镇压小评 ---------------------------------------------------------
    it["suppressText"] = g_txt
    it["canSuppress"] = "可镇压" in g_txt
    if "不容易镇压" in g_txt:
        it["suppressGrade"] = "较难"
    elif "容易镇压" in g_txt:
        it["suppressGrade"] = "容易"
    else:
        it["suppressGrade"] = "未填"
    it["suppressNote"] = "\n".join(g[1:]) if g and g[0] == "可镇压" else g_txt

    # 全文检索用
    it["search"] = " ".join(
        [it["id"], it["name"], it["danger"], d_txt, e_txt, f_txt, g_txt]
    ).lower()
    return it


def merge_wiki(items):
    """并入 wiki 抽取结果。wiki_data.json 不存在时静默跳过，站点照常可用。

    镇压栏原表留空的，缺什么就补什么——不额外建「留空原因」这类元数据维度：
      · wiki 标注不会突破收容，或页面根本没有出逃机制 -> 镇压栏写「不会突破收容」
      · wiki 载有镇压建议 -> 直接把该段正文搬进镇压小评
    """
    path = os.path.join(BASE, WIKI_FILE)
    if not os.path.exists(path):
        print("  (无 %s，跳过 wiki 补充；先跑 python wiki_fetch.py && python wiki_extract.py)" % WIKI_FILE)
        return
    wd = json.load(open(path, encoding="utf-8"))
    hit = filled = 0
    for it in items:
        wk = wd.get(it["id"])
        if not wk:
            continue
        hit += 1
        it["wiki"] = wk
        it["dmgType"] = wk.get("dmgType")
        it["counter"] = wk.get("counter")
        it["search"] += " " + " ".join(
            x for x in [wk.get("dmgType"), wk.get("dmgTypeRaw"), wk.get("counter"),
                        it["suppressGrade"], it["suppressText"]] if x).lower()

        if it["suppressGrade"] == "未填":
            if wk.get("suppressText"):
                it["suppressGrade"] = "可镇压"
                it["canSuppress"] = True
                it["suppressText"] = wk["suppressText"]
                it["suppressNote"] = ""
            elif wk.get("noEscape") is True or not wk.get("hasEscapeSec"):
                it["suppressGrade"] = "不会突破收容"
                it["suppressText"] = ""
                it["suppressNote"] = ""
            else:
                it["suppressText"] = ""
                it["suppressNote"] = ""
            filled += 1
    print("  wiki 补充并入 %d / %d 条；镇压栏由空补值 %d 条" % (hit, len(items), filled))


# ---------------------------------------------------------------- 计算器
def parse_calc(ws):
    """按原表公式把系数表读出来，不手抄。"""
    qi = {c: ws[c + "25"].value for c in "CE"}          # 品质/等级 → 行、列索引
    q_index = ws["C25"].value   # Ⅴ
    l_index = ws["E25"].value   # 5
    # INDIRECT(ADDRESS(C25+25, E25+2)) → 行 = 品质索引+25，列 = 等级索引+2
    grid = {}
    for qi_row, q in zip(range(1, 6), ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"]):
        grid[q] = {}
        for li, lv in zip(range(1, 6), DANGER):
            col = chr(ord("C") + li - 1)               # C..G
            cell = ws["%s%d" % (col, qi_row + 25)]
            grid[q][lv] = cell.value
    return {
        "healthOut": ws["C11"].value,                  # 期望健康输出值 0.5
        "pebox": {"ZAYIN": 7, "TETH": 8, "HE": 12, "WAW": 16, "ALEPH": 23},
        "techOn": 1.5,
        "techOff": 1,
        "targetDefault": ws["D13"].value,
        "targets": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        "grid": grid,
        "notice": ws["B2"].value or "",
        "qualityIndex": q_index,
        "levelIndex": l_index,
        "labels": {
            "healthOut": ws["C10"].value,
            "tech": ws["E10"].value,
            "coef": ws["G10"].value,
            "pebox": ws["I10"].value,
        },
    }


def main():
    wb = openpyxl.load_workbook(SRC, data_only=True)
    ws = wb["异想体推荐表"]
    legends, records = parse_sheet(ws)
    items = [build_item(x) for x in records]
    calc = parse_calc(wb["加班计算器"])
    merge_wiki(items)

    data = {
        "meta": {
            "sourceSheets": wb.sheetnames,
            "count": len(items),
            "builtAt": "",
            "legends": legends,
            "header": [ws.cell(1, i).value for i in range(1, 8)],
            "source": SOURCE,
        },
        "items": items,
        "calc": calc,
        "constants": {
            "danger": DANGER,
            "mgmt": MGMT,
            "grade": W_GRADE,
            "ranges": RANGES,
            "dmgType": ["红", "白", "黑", "淡", "未知"],
            "suppressGrade": ["容易", "较难", "可镇压", "不会突破收容"],
        },
    }

    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, "data.js"), "w", encoding="utf-8") as fh:
        fh.write("// 由 build_site.py 从 source.xlsx 自动生成，请勿手改\n")
        fh.write("window.LOBO = ")
        json.dump(data, fh, ensure_ascii=False, indent=1)
        fh.write(";\n")

    # 解析自检报告
    rep = ["条目数: %d" % len(items)]
    for k in ("danger", "mgmtGrade", "weaponGrade", "weaponType",
              "rangeLabel", "armorGrade", "armorType", "suppressGrade"):
        vals = {}
        for it in items:
            v = it.get(k)
            if v:
                vals[v] = vals.get(v, 0) + 1
        rep.append("%-14s %s" % (k, sorted(vals.items(), key=lambda x: -x[1])))
    rep.append("武器DPS缺失: " + str([it["name"] for it in items if it["weaponDps"] is None]))
    rep.append("防具抗性缺失: " + str([it["name"] for it in items if it["armorResist"] is None][:40]))
    for k in ("dmgType", "suppressGrade"):
        vals = {}
        for it in items:
            v = it.get(k)
            if v:
                vals[v] = vals.get(v, 0) + 1
        rep.append("%-14s %s" % (k, sorted(vals.items(), key=lambda x: -x[1])))
    rep.append("镇压栏仍为空: " + str([it["name"] for it in items if it["suppressGrade"] == "未填"]))
    rep.append("grid: " + json.dumps(calc["grid"], ensure_ascii=False))
    with open(os.path.join(BASE, "_parse_report.txt"), "w", encoding="utf-8") as fh:
        fh.write("\n".join(rep))
    print("\n".join(rep))


if __name__ == "__main__":
    main()
