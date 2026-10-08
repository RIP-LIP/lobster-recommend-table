# -*- coding: utf-8 -*-
"""
从 wiki_raw.json 抽取结构化字段，产出 wiki_data.json，供 build_site.py 合并。

原则（与 build_site.py 一致）：
  · 只提取，不推断原表/wiki 都没写的东西。
  · 语义不确定的字段一律保留原始值，不替它编标签。
  · 抓不到就是 None，不猜、不填默认值。
"""
import json
import os
import re

BASE = os.path.dirname(os.path.abspath(__file__))

# wiki 的 dmg_type 原始 token -> 直译（只换字面，不解释机制）
DMG_TYPE = {"red": "红", "white": "白", "black": "黑", "pale": "淡", "???": "未知"}
RESIST = ["red", "white", "black", "pale"]      # 异想体自身抗性，注意与原表护甲抗性是两回事
TRAITS = ["instinct", "insight", "attachment", "repression"]   # 本能/洞察/依恋/镇压
TRUTHY = {"1", "y", "yes", "true"}


# wiki 上并存多个 infobox 模板，必须逐个尝试：
#   Abn_Infobox    常规异想体，信息最全（伤害类型/计数器/心情/性格适配都在这）
#   Abn Infobox    工具型异想体专用，只有 img1 / level / tool 三个参数（注意中间是空格）
#   Root_Infocard / Legacy_Infocard  老版页面，无结构化参数
TEMPLATES = ("Abn_Infobox", "Abn Infobox")


def infobox(text):
    """取第一个命中的 infobox 模板参数表。返回 (dict|None, 模板名)。

    两个坑（实测踩过）：
      1. 不能用 `\\{\\{模板\\s*(.*?)\\n\\}\\}` 收尾——有的页面把收尾的 `}}`
         和最后一个参数写在同一行（如 O-01-73 绝望骑士）。改为按花括号配平截取。
      2. 不能按行解析——同一页把 20 个 `*_stat` 全挤在一行。改为全局正则切参数。
    """
    for tpl in TEMPLATES:
        i = text.find("{{" + tpl)
        while i >= 0:
            depth, j = 0, i
            while j < len(text):
                if text[j] == "{":
                    depth += 1
                elif text[j] == "}":
                    depth -= 1
                    if depth == 0:
                        break
                j += 1
            if depth == 0:
                body = text[i + len("{{") + len(tpl):j].rstrip("}").rstrip()
                out = {}
                for k, v in re.findall(
                        r"\|\s*([a-zA-Z0-9_]+)\s*=\s*(.*?)(?=\|\s*[a-zA-Z0-9_]+\s*=|\Z)",
                        body, re.S):
                    out[k] = v.strip()
                if out:
                    return out, tpl
            i = text.find("{{" + tpl, i + 1)
    return None, None


def num(v):
    if v is None:
        return None
    m = re.match(r"^-?\d+(?:\.\d+)?$", v.strip())
    return float(v) if m else None


def has_section(text, name):
    return bool(re.search(r"==\s*" + name + r"\s*==", text))


def section_text(text, name):
    """取 == 段名 == 到下一个 == 为止的正文，用于把 wiki 的镇压建议搬进镇压栏。"""
    m = re.search(r"==\s*" + name + r"\s*==\s*(.*?)(?=\n==[^=]|\Z)", text, re.S)
    if not m:
        return None
    body = m.group(1).strip()
    return clean_wiki_markup(body) or None


def clean_wiki_markup(s):
    """把 wikitext 压成可直接显示的纯文本。

    要处理的四层：{{模板}} 参数、[[链接|文字]]、<span style> 内联 HTML、重复空白。
    站点侧是转义输出的，不清的话这些标记会原样显示给用户。
    """
    if not s:
        return s
    s = re.sub(r"<gallery\b[^>]*>.*?</gallery>", "", s, flags=re.S | re.I)  # 去图集块
    s = re.sub(r"<(blockquote|div|p|br)\b[^>]*>", "\n", s, flags=re.I)    # 保留文字，标签换行
    s = re.sub(r"</(blockquote|div|p)>", "\n", s, flags=re.I)
    s = re.sub(r"<br\s*/?>", "\n", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)                      # 去内联 HTML/样式
    s = re.sub(r"\[File:[^\]]*\]", "", s, flags=re.I)  # 去文件引用
    prev = None
    while prev != s:                                    # 逐层剥 {{模板|参数}}
        prev = s
        s = re.sub(r"\{\{[^{}]*\}\}", " ", s)
    s = re.sub(r"\[\[[^\]|]*\|([^\]]*)\]\]", r"\1", s)  # 链接取显示文字
    s = re.sub(r"\[\[([^\]]*)\]\]", r"\1", s)          # 无参链接取标题
    s = s.replace("&nbsp;", " ").replace("&amp;", "&")
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r" *\n *", "\n", s)
    return s.strip()


def extract(code, title, text):
    rec = {"id": code, "title": title,
           "url": "https://lobotomycorp.fandom.com/zh/wiki/" + urllib_quote(title) if title else None}

    t, tpl_name = infobox(text)
    rec["tpl"] = tpl_name or "prose"
    rec["hasEscapeSec"] = has_section(text, "出逃信息")
    rec["suppressText"] = section_text(text, "镇压建议")
    rec["toolText"] = section_text(text, "工具能力")

    if t is None:
        rec["ok"] = False
        return rec
    rec["ok"] = True

    def g(k):
        return t.get(k)

    lvl = (g("level") or "").strip().upper()
    rec["level"] = lvl if lvl in ("ZAYIN", "TETH", "HE", "WAW", "ALEPH") else None
    # 工具型专有：tool 标明使用方式，channel=持续使用型 / equip=携带型 等
    rec["tool"] = g("tool") or None
    rec["dmgType"] = DMG_TYPE.get((g("dmg_type") or "").strip().lower())
    rec["dmgTypeRaw"] = g("dmg_type") or None
    rec["dmgStat"] = g("dmg_stat") or None
    rec["counter"] = g("counter") or None
    rec["maxPeBox"] = num(g("max_pe"))
    rec["mood"] = {"优": g("good"), "良": g("normal"), "差": g("bad")}
    rec["workSpeed"] = num(g("work_speed"))
    rec["workCd"] = num(g("work_cd"))
    rec["fearDamage"] = g("horrordamage") or None

    ne = g("no_escape")
    rec["noEscape"] = (ne or "").strip().lower() in TRUTHY if ne is not None else None

    # 异想体自身抗性：与原表「推荐护甲的抗性」是不同对象，务必分开
    rec["resist"] = {c: num(g(c + "_rsst_stat")) for c in RESIST}
    rec["resistWord"] = {c: g(c + "_rsst") for c in RESIST}

    # 本能/洞察/依恋/镇压 × I–V。wiki 未说明 I–V 的确切含义，此处只按字段名原样转出
    traits, stats = {}, {}
    for a in TRAITS:
        grades = [g("%s_%d" % (a, i)) for i in range(1, 6)]
        pct = [g("%s_%d_stat" % (a, i)) for i in range(1, 6)]
        if any(grades):
            traits[a] = grades
        if any(pct):
            stats[a] = pct
    rec["traits"] = traits
    rec["traitStats"] = stats
    return rec


def urllib_quote(s):
    from urllib.parse import quote
    return quote(s.replace(" ", "_"))


def suppress_reason(it, wk):
    """已移除：不再对「留空原因」建模。镇压栏缺什么就在 build_site.py 里直接补什么。"""
    return None


def main():
    mapping = json.load(open(os.path.join(BASE, "wiki_map.json"), encoding="utf-8"))
    raw = json.load(open(os.path.join(BASE, "wiki_raw.json"), encoding="utf-8"))
    src = open(os.path.join(BASE, "site", "data.js"), encoding="utf-8").read()
    items = json.loads(src[src.index("{"):src.rindex("}") + 1])["items"]

    # 工具型是与危险等级并列的第六类，权威依据取 wiki 的「分类:工具异想体」
    cat_path = os.path.join(BASE, "wiki_toolcategory.json")
    tool_pages = set(json.load(open(cat_path, encoding="utf-8"))) if os.path.exists(cat_path) else set()

    out = {}
    for it in items:
        title = mapping.get(it["id"])
        text = raw.get(title, "") if title else ""
        wk = extract(it["id"], title, text)
        wk["isTool"] = bool(title and title in tool_pages)
        out[it["id"]] = wk

    json.dump(out, open(os.path.join(BASE, "wiki_data.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)

    from collections import Counter
    tools = [k for k, v in out.items() if v["isTool"]]
    # 自检：wiki 分类 vs 模板 tool 参数，两条独立依据必须一致
    by_param = [k for k, v in out.items() if v.get("tool")]
    L = ["抽取条目 %d / %d" % (len(out), len(items)),
         "模板：%s" % dict(Counter(v["tpl"] for v in out.values())),
         "工具型（wiki 分类:工具异想体）%d 条；模板 tool 参数 %d 条；两者差异 %s"
         % (len(tools), len(by_param), sorted(set(tools) ^ set(by_param)) or "无"),
         "no_escape 标注真 %d；抽到镇压建议正文 %d；抽到工具能力正文 %d"
         % (sum(1 for v in out.values() if v.get("noEscape") is True),
            sum(1 for v in out.values() if v.get("suppressText")),
            sum(1 for v in out.values() if v.get("toolText"))),
         "", "=== 17 条工具型（分类里移出危险等级，单列为第六类）==="]
    for k in sorted(tools):
        v = out[k]
        L.append("  %-9s %-14s 危险等级=%-6s tool=%-8s 类别=%s" % (
            k, v["title"], v.get("level"), v.get("tool"),
            "持续使用型" if v.get("tool") == "channel" else
            "携带型" if v.get("tool") == "equip" else
            "单次使用型" if v.get("tool") == "single" else "—"))
    open(os.path.join(BASE, "_wiki_report.txt"), "w", encoding="utf-8").write("\n".join(L))


if __name__ == "__main__":
    main()
