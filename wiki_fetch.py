# -*- coding: utf-8 -*-
"""
从 Lobotomy Corp 中文 wiki 抓取 84 条异想体的结构化数据。

产出（均可重复生成，不必手改）：
  wiki_pages.json  全站页面清单
  wiki_map.json    原表异想体编号 -> wiki 页面标题
  wiki_raw.json    每个页面的原始 wikitext

取数通道：直连 fandom 不通，必须显式走本机代理
（PowerShell `-Proxy "http://127.0.0.1:7897"`，Python 用 ProxyHandler）。
详见记忆 network-proxy 主题。

用法：python wiki_fetch.py
"""
import json
import os
import re
import time
import urllib.parse
import urllib.request

BASE = os.path.dirname(os.path.abspath(__file__))
PROXY = "http://127.0.0.1:7897"
API = "https://lobotomycorp.fandom.com/zh/api.php"
UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
_opener = urllib.request.build_opener(
    urllib.request.ProxyHandler({"https": PROXY, "http": PROXY}))


def api(params, tries=3):
    last = None
    for _ in range(tries):
        try:
            url = API + "?" + urllib.parse.urlencode(params)
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with _opener.open(req, timeout=60) as r:
                return json.loads(r.read().decode("utf-8"))
        except Exception as e:                      # noqa: BLE001
            last = e
            time.sleep(2)
    raise last


def load_items():
    """从已生成的 data.js 里取异想体列表，避免重复解析 xlsx。"""
    src = open(os.path.join(BASE, "site", "data.js"), encoding="utf-8").read()
    return json.loads(src[src.index("{"):src.rindex("}") + 1])["items"]


def fetch_all_pages():
    pages, cont = [], None
    while True:
        p = {"action": "query", "list": "allpages", "aplimit": 500, "format": "json"}
        if cont:
            p["apcontinue"] = cont
        d = api(p)
        pages += d["query"]["allpages"]
        cont = d.get("continue", {}).get("apcontinue")
        if not cont:
            break
    titles = sorted(x["title"] for x in pages)
    json.dump({"count": len(titles), "titles": titles},
              open(os.path.join(BASE, "wiki_pages.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=0)
    return titles


def resolve_titles(items, allpages):
    """页面标题三种形态并存，按优先级挑：
       ① 「编号 名称」完全匹配  ② 「编号 名称」同名  ③ 「编号-等级缩写 名称」  ④ 裸名称
    编号形如 O-01-92；缩写是危险等级首字母（T/H/W/Z/A），例如 O-01-04-W 憎恶女王。
    """
    mapping = {}
    for it in items:
        code, name = it["id"], it["name"]
        title = None
        if re.fullmatch(r"[A-Z]-\d{2}-\d{2,3}", code):
            grp = [t for t in allpages if t.startswith(code + " ")]
            exact = code + " " + name
            if exact in grp:
                title = exact
            else:
                same = [t for t in grp
                        if len(t.split(" ", 1)[1]) == len(name)]
                title = sorted(same or grp, key=len)[0] if (same or grp) else None
        if not title and name in allpages:
            title = name
        mapping[code] = title
    json.dump(mapping, open(os.path.join(BASE, "wiki_map.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    return mapping


def fetch_raw(mapping):
    titles = sorted({v for v in mapping.values() if v})
    raw = {}
    for i in range(0, len(titles), 25):             # 一次 25 条，别贪多
        d = api({"action": "query", "prop": "revisions", "rvprop": "content",
                 "rvslots": "main", "redirects": "1", "format": "json",
                 "titles": "|".join(titles[i:i + 25])})
        alias = {}
        for key in ("normalized", "redirects"):
            for a in d["query"].get(key, []):
                alias[a["to"]] = a["from"]
        for _pid, pg in d["query"]["pages"].items():
            t = alias.get(pg.get("title", ""), pg.get("title", ""))
            raw[t] = "" if "missing" in pg else pg["revisions"][0]["slots"]["main"]["*"]
        time.sleep(0.4)
    json.dump(raw, open(os.path.join(BASE, "wiki_raw.json"), "w", encoding="utf-8"),
              ensure_ascii=False)
    return raw


def fetch_tool_category():
    """抓 wiki 的「分类:工具异想体」成员。

    工具型是与危险等级**并列**的第六类，不是等级的一种，所以权威依据用 wiki 分类，
    而不是靠「没有 EGO 武器」或编号含 09 去猜。
    """
    out, cont = [], None
    while True:
        p = {"action": "query", "list": "categorymembers",
             "cmtitle": "分类:工具异想体", "cmlimit": 500, "format": "json"}
        if cont:
            p["cmcontinue"] = cont
        d = api(p)
        out += [m["title"] for m in d["query"]["categorymembers"]]
        cont = d.get("continue", {}).get("cmcontinue")
        if not cont:
            break
    json.dump(sorted(out), open(os.path.join(BASE, "wiki_toolcategory.json"), "w",
                                 encoding="utf-8"), ensure_ascii=False, indent=1)
    return out


def main():
    items = load_items()
    print("原表条目 %d" % len(items))
    pages = fetch_all_pages()
    print("wiki 页面 %d" % len(pages))
    mapping = resolve_titles(items, pages)
    missing = [k for k, v in mapping.items() if not v]
    print("解析到页面 %d / %d%s" % (len(mapping) - len(missing), len(mapping),
                                   ("  未解析: " + ", ".join(missing)) if missing else ""))
    raw = fetch_raw(mapping)
    print("已抓正文 %d 份（空 %d）" % (len(raw), sum(1 for v in raw.values() if not v)))
    tool = fetch_tool_category()
    print("分类:工具异想体 %d 条" % len(tool))


if __name__ == "__main__":
    main()
