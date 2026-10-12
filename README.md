# 异想体推荐表 & 加班计算器

把一份《脑叶公司异想体推荐表 & 加班计算器》Excel 转换成带搜索和多维筛选的静态网站，
并用 [Lobotomy Corp 中文 wiki](https://lobotomycorp.fandom.com/zh/wiki/%E8%84%91%E5%8F%B6%E5%85%AC%E5%8F%B8_Wiki)
的结构化数据补齐原表留空的字段。

线上站点：<https://RIP-LIP.github.io/lobster-recommend-table/>

## 数据来源

- `source.xlsx` —— 原始表格，含「异想体推荐表」和「加班计算器」两个工作表。
  原表作者：[掉落的银杏](https://docs.qq.com/sheet/DR0tDUnZmem5EeUdI?tab=BB08J2)
- [Lobotomy Corp 中文 wiki](https://lobotomycorp.fandom.com/zh/wiki/%E8%84%91%E5%8F%B6%E5%85%AC%E5%8F%B8_Wiki)
  —— 用于补充伤害类型、计数器、心情值区间、PE-BOX 上限、工作速度与冷却、
  员工性格适配、异想体自身抗性，以及原表留空的镇压栏。

## 目录结构

```
source.xlsx          原表（唯一的人工输入源）
python build_site.py        xlsx + wiki 数据  ->  docs/data.js
wiki_fetch.py        wiki  ->  wiki_pages.json / wiki_map.json / wiki_raw.json
wiki_extract.py      wiki_raw.json  ->  wiki_data.json
docs/                站点本体（GitHub Pages 从这里发布；无构建步骤、无外部依赖）
```

## 生成流程

三个脚本按顺序跑，产物是 `docs/`：

```powershell
python wiki_fetch.py      # 1. 抓 wiki（需要代理，见下）
python wiki_extract.py    # 2. 从 wikitext 抽结构化字段
python build_site.py      # 3. 合并 xlsx + wiki 数据，生成 docs/data.js
```

只想改原表、不动 wiki 数据时，跳过前两步直接跑 `python build_site.py` 即可；
此时若 `wiki_data.json` 不存在，脚本会打印提示并跳过 wiki 补充，站点照常可用。

改完 `docs/` 后本地预览：

```powershell
cd docs
python -m http.server 8000
```

## 环境要求

- Python 3.9+，依赖 `openpyxl`（`pip install openpyxl`）
- `wiki_fetch.py` 需要能访问 Fandom。若本机开了代理，该脚本**不会**自动读取
  Windows 系统代理，需要在 `wiki_fetch.py` 顶部的 `PROXY` 常量里填上地址
  （本机为 `http://127.0.0.1:7897`）。直连可用的环境把 `PROXY` 置空即可。

## 英文模式

站右上角可切换中/英。界面文案、字段名、枚举取值与 84 个异想体英文名（取自英文 wiki）
都会随之切换，语言选择存在浏览器本地。作者原始备注、wiki 镇压建议正文、原表批注与
使用须知属于原始数据，保持中文不译。

## 已知的数据口径

- **异想体自身抗性 ≠ 推荐护甲的抗性。** 原表「EGO 防具推荐度」备注里那四个数字说的是
  推荐穿哪件护甲、那件护甲的抗性如何；wiki 页面上的 `*_rsst` 是异想体自己的抗性。
  实测 33 条可对比项无一吻合，两组数据在站点上分开展示，不做合并。
- **员工性格适配的 Ⅰ–Ⅴ** 按 wiki 字段 `instinct/insight/attachment/repression`
  原样转出，wiki 未说明 Ⅰ–Ⅴ 的确切含义，因此不做解释。
- **六类分类**：ZAYIN / TETH / HE / WAW / ALEPH，加上与危险等级并列的「工具型」。
  工具型的判定依据是 wiki 的 `分类:工具异想体`（17 条），与页面模板 `|tool|` 参数
  交叉验证完全一致；工具型不参与危险等级筛选。
- 危险等级已与 wiki 逐条交叉校验：84 条可比对，一致 84 条，冲突 0 条。

## 内容声明

内容为个人向整理，非官方数据。游戏本体版权归 Project Moon 所有。
