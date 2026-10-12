/* ============================================================
   i18n：中英切换。
   规则：
     · 界面文案、字段名、枚举取值 -> 全量双语
     · 异想体名称 -> 中文用原表名，英文用 wiki 英文名
     · 作者原始备注 / wiki 镇压建议 / 原表批注原文 -> 保持中文不动，
       这些是原始数据，没有权威英译，强行翻译会失真
   ============================================================ */

var I18N = {
  zh: {
    docTitle: '脑叶公司 · 异想体推荐表 & 加班计算器',
    docDesc: '异想体收录与工作推荐表，支持搜索与多维筛选；含员工工作属性加成估算器。',
    h1a: '异想体推荐表', h1amp: '&', h1b: '加班计算器',
    sub: '共 {n} 条收录 · 数据来自原表',
    tabList: '推荐表', tabCalc: '加班计算器', tabHelp: '表格说明',
    searchPh: '搜索编号、名称或任意备注文字（空格分隔多个关键词）',
    clearSearch: '清空搜索',
    sortK: '排序', sortMenu: '排序',
    viewTable: '表格', viewCard: '卡片',
    filterTitle: '筛选条件', filterOff: '未启用', filterOn: '已启用 {n} 项',
    dpsMinK: '武器 DPS 下限：', dpsHint: '只统计原表写了 DPS 的武器',
    clearAll: '清除全部筛选', statTail: ' 条',
    emptyT: '没有符合条件的异想体', emptyS: '试着放宽筛选，或清空搜索关键词。',
    notFilled: '原表未填',
    col: { id: '编号', name: '异想体', type: '类型', mgmt: '管理推荐度', wgrade: 'EGO 武器', range: '攻击距离', dps: '武器 DPS', agrade: 'EGO 防具', res: '抗性', supp: '镇压' },
    dMgmt: '管理推荐度备注', dWeapon: 'EGO 武器说明', dArmor: 'EGO 防具说明', dSupp: '镇压任务小评',
    wikiTitle: '官方 wiki 补充数据', wikiPage: 'wiki 页面 ↗',
    wkDmg: '伤害类型', wkLevel: '危险等级', wkStat: '攻击强度', wkCounter: '计数器',
    wkNoCounter: '（无计数器）', wkTool: '工具类别', wkToolText: '工具能力',
    wkMood: '心情值区间', wkPe: 'PE-BOX 上限', wkWork: '工作速度 / 冷却',
    wkResist: '异想体自身抗性', wkTrait: '员工性格适配',
    wkStruct: '该 wiki 页面不是结构化模板，无可提取字段',
    calcIn: '输入区', calcOut: '输出区',
    techK: '培训部科技', techSub: '「普及培训手册」',
    qualK: '员工品质', lvlK: '工作异想体等级', targetK: '想提升的属性点数',
    techOn: '已开启：培训部系数按 1.5 计算（原表公式 IF(B6=TRUE,1.5,1)）。',
    techOff: '未开启：培训部系数按 1 计算。',
    resPer: '单次工作期望属性加成',
    resCnt: '提升 {n} 点属性需要工作', resTimes: '次',
    mxTitle: '工作系数表',
    mxSub: '原表 加班计算器 工作表第 26–30 行，C–G 列；当前取值已高亮',
    mxNote: '原表用 INDIRECT(ADDRESS(品质序号+25, 等级序号+2)) 从这张表取「工作系数」，因此品质与等级都只取序号，轴向固定为：行＝员工品质 Ⅰ→Ⅴ，列＝异想体等级 ZAYIN→ALEPH。',
    mxHead: '品质 ＼ 等级',
    fxHealth: '期望健康输出值', fxTech: '培训部系数', fxCoef: '工作系数', fxPebox: '期望 PE-BOX 数',
    resPerShort: '单次期望加成',
    helpDoc: '字段说明', helpDocHead: ['页面字段', '原表位置', '说明'],
    helpLegend: '推荐度标准', helpLegendSub: '原表第 2 行三个单元格的批注原文',
    helpNotice: '加班计算器使用须知', helpNoticeSub: '原表 加班计算器 工作表 B2 原文',
    foot1: '内容为个人向整理，非官方数据。',
    foot2: '原表：异想体推荐表 / 加班计算器，共 {n} 条收录。',
    foot3: '原表作者：',
    footSheet: '原表链接',
    foot3b: '，补充数据取自',
    foot3b2: '（',
    footSep: '；',
    footWiki: 'Lobotomy Corp 中文 wiki',
    // 分组
    g: { type: '类型', mgmt: '管理推荐度', wgrade: 'EGO 武器推荐度', wtype: 'EGO 武器类型', range: '攻击距离', agrade: 'EGO 防具推荐度', atype: 'EGO 防具类型', supp: '镇压', dmg: '伤害类型', prefix: '编号前缀' },
    // 排序列
    s: { row: '原表顺序', type: '威胁程度（类型）', mgmt: '管理推荐度', wgrade: 'EGO 武器推荐度', agrade: 'EGO 防具推荐度', range: '攻击距离', dps: '武器 DPS', supp: '镇压', dmg: '伤害类型', prefix: '编号前缀', id: '编号' },
    // 枚举取值
    v: {
      '工具型': '工具型',
      '高': '高', '中': '中', '低': '低', '极低': '极低', '论外': '论外',
      '极优': '极优', '优': '优', '良': '良', '差': '差', '极差': '极差',
      '极近': '极近', '近': '近', '短': '短', '一般': '一般', '远': '远', '极远': '极远',
      '容易': '容易', '较难': '较难', '可镇压': '可镇压', '不会突破收容': '不会突破收容', '未填': '未填',
      '红': '红', '白': '白', '黑': '黑', '淡': '淡', '未知': '未知',
      'channel': '持续使用型', 'equip': '携带型', 'single': '单次使用型',
      本能: '本能', 洞察: '洞察', 沟通: '沟通', 压迫: '压迫',
      优: '优', 良: '良', 差: '差'
    },
    moodK: { '优': '优', '良': '良', '差': '差' },
    // 说明页字段表
    doc: [
      ['异想体编号', 'A 列', '原表编号，含单位代号前缀（F / O / T / D）。最后一条「秃头-真是-太棒啦!」是特例，没有标准编号格式。'],
      ['异想体名称', 'B 列', '直接取原表，未做任何替换。英文名取自 wiki，缺失时回落中文名。'],
      ['类型', 'C 列 + wiki', '共六类：ZAYIN / TETH / HE / WAW / ALEPH，以及与危险等级并列的「工具型」。17 条工具型取自 wiki 的分类:工具异想体，不参与等级筛选；它们各自的危险等级仍是真实数据，展开详情里能看到。'],
      ['工具类别（wiki）', 'wiki Abn Infobox', '工具型专有，标明使用方式：持续使用型（channel）／携带型（equip）／单次使用型（single）。工具型没有 EGO 武器与防具，所以武器、防具两列显示为 —。'],
      ['管理推荐度', 'D 列', '取该格出现的最高一档推荐度作为标签；像「有拟态前：低／有拟态后：中」这种分情况的，会同时归入低和中两个筛选项。'],
      ['EGO 武器推荐度', 'E 列', '标签为该格出现的最高档（极优 > 优 > 良 > 差 > 极差）；括号里的字母是武器等级，【】里是攻击距离与数值。'],
      ['攻击距离', 'E 列【】', '极近 / 近 / 短 / 一般 / 远 / 极远，同时保留括号中的数值用于排序。'],
      ['武器 DPS', 'E 列备注', '从「DPS：8.0(10.4)」这类备注里取第一个数 8.0 用于排序与筛选；括号内的数作为可达值一并显示。工具型异想体原表写「-」，此处不参与 DPS 筛选。'],
      ['EGO 防具推荐度', 'F 列', '同样取最高档标签，括号内字母为防具等级。像「收容白夜：极优(A)／不收容：良(A)」按极优归档。'],
      ['抗性', 'F 列备注', '原表备注里的四个数值，按原顺序展示，最大值加高亮。原表没有标注这四个数分别对应哪种抗性，只在文字里写了「单红抗甲」「紫抗甲」「蓝抗甲」之类的说法，因此本页不替它指定颜色顺序。'],
      ['镇压', 'G 列', '容易＝原表小评写「容易镇压」；较难＝写「不容易镇压」；可镇压＝原表留空，取自 wiki 镇压建议；不会突破收容＝原表留空，该异想体不会突破收容。镇压小评栏展示对应原文。']
    ]
  },

  en: {
    docTitle: 'Lobotomy Corporation · Abnormality Guide & Work Calculator',
    docDesc: 'Searchable, filterable abnormality containment and work guide, with a worker stat-gain calculator.',
    h1a: 'Abnormality Guide', h1amp: '&', h1b: 'Work Calculator',
    sub: '{n} entries · sourced from the original spreadsheet',
    tabList: 'Guide', tabCalc: 'Work Calculator', tabHelp: 'Field Notes',
    searchPh: 'Search code, name or any note text (space-separated keywords)',
    clearSearch: 'Clear search',
    sortK: 'Sort', sortMenu: 'Sort',
    viewTable: 'Table', viewCard: 'Cards',
    filterTitle: 'Filters', filterOff: 'none', filterOn: '{n} active',
    dpsMinK: 'Min weapon DPS: ', dpsHint: 'Only weapons with a DPS value in the original table',
    clearAll: 'Clear all filters', statTail: ' total',
    emptyT: 'No abnormality matches these filters',
    emptyS: 'Try relaxing a filter, or clear the search box.',
    notFilled: 'blank in source',
    col: { id: 'Code', name: 'Abnormality', type: 'Type', mgmt: 'Mgmt Rating', wgrade: 'E.G.O Weapon', range: 'Range', dps: 'Weapon DPS', agrade: 'E.G.O Armor', res: 'Resist.', supp: 'Suppression' },
    dMgmt: 'Mgmt note', dWeapon: 'Weapon note', dArmor: 'Armor note', dSupp: 'Suppression note',
    wikiTitle: 'Data from the official wiki', wikiPage: 'wiki page ↗',
    wkDmg: 'Damage type', wkLevel: 'Danger level', wkStat: 'Damage', wkCounter: 'Counter',
    wkNoCounter: '(no counter)', wkTool: 'Tool type', wkToolText: 'Tool ability',
    wkMood: 'Mood range', wkPe: 'Max PE-BOX', wkWork: 'Work speed / cooldown',
    wkResist: 'Own resistances', wkTrait: 'Employee stat fit',
    wkStruct: 'This wiki page has no structured template to parse',
    calcIn: 'Inputs', calcOut: 'Results',
    techK: 'Training Dept. tech', techSub: '"General Training Manual"',
    qualK: 'Employee quality', lvlK: 'Abnormality level', targetK: 'Stat points to gain',
    techOn: 'On: training coefficient is 1.5 (original formula IF(B6=TRUE,1.5,1)).',
    techOff: 'Off: training coefficient is 1.',
    resPer: 'Expected stat gain per work',
    resCnt: 'Works needed for {n} stat points', resTimes: 'works',
    mxTitle: 'Work coefficient table',
    mxSub: 'Original spreadsheet, sheet 加班计算器 rows 26–30, columns C–G; current cell highlighted',
    mxNote: 'The sheet reads the work coefficient with INDIRECT(ADDRESS(quality+25, level+2)), so both axes use indices only: rows = employee quality Ⅰ→Ⅴ, columns = abnormality level ZAYIN→ALEPH.',
    mxHead: 'Quality ＼ Level',
    fxHealth: 'Expected health output', fxTech: 'Training coeff.', fxCoef: 'Work coeff.', fxPebox: 'Expected PE-BOX',
    resPerShort: 'Expected gain',
    helpDoc: 'Field reference', helpDocHead: ['Field', 'Source cell', 'Notes'],
    helpLegend: 'Grading standards', helpLegendSub: 'English translation of the cell comments in row 2 of the original sheet',
    helpNotice: 'Calculator usage notes', helpNoticeSub: 'English translation of cell B2 of the original sheet 加班计算器',
    foot1: 'Personal compilation, not official data.',
    foot2: 'Original sheet: 异想体推荐表 / 加班计算器, {n} entries.',
    foot3: 'Original author: ',
    footSheet: 'source sheet',
    foot3b: '; extra data from',
    foot3b2: ' (',
    footSep: ' · ',
    footWiki: 'Lobotomy Corp Wiki (EN)',
    g: { type: 'Type', mgmt: 'Mgmt Rating', wgrade: 'E.G.O Weapon Rating', wtype: 'Weapon Class', range: 'Range', agrade: 'E.G.O Armor Rating', atype: 'Armor Class', supp: 'Suppression', dmg: 'Damage Type', prefix: 'Code prefix' },
    s: { row: 'Source order', type: 'Danger level (Type)', mgmt: 'Mgmt Rating', wgrade: 'E.G.O Weapon Rating', agrade: 'E.G.O Armor Rating', range: 'Range', dps: 'Weapon DPS', supp: 'Suppression', dmg: 'Damage Type', prefix: 'Code prefix', id: 'Code' },
    v: {
      '工具型': 'Tool',
      '高': 'High', '中': 'Mid', '低': 'Low', '极低': 'Very Low', '论外': 'Outlier',
      '极优': 'Excellent', '优': 'Good', '良': 'Fair', '差': 'Poor', '极差': 'Worst',
      '极近': 'Very Close', '近': 'Close', '短': 'Short', '一般': 'Medium', '远': 'Far', '极远': 'Very Far',
      '容易': 'Easy', '较难': 'Hard', '可镇压': 'Suppressible', '不会突破收容': 'Cannot breach', '未填': 'blank',
      '红': 'Red', '白': 'White', '黑': 'Black', '淡': 'Pale', '未知': 'Unknown',
      'channel': 'Channel', 'equip': 'Equip', 'single': 'Single-use',
      本能: 'Instinct', 洞察: 'Insight', 沟通: 'Comm.', 压迫: 'Repression',
      优: 'Good', 良: 'Fair', 差: 'Poor'
    },
    moodK: { '优': 'Good', '良': 'Fair', '差': 'Bad' },
    doc: [
      ['Code', 'Col A', 'Code from the original sheet, prefixed with the unit letter (F / O / T / D). The last row (秃头-真是-太棒啦!) is a special case with no standard code format.'],
      ['Name', 'Col B', 'Taken verbatim from the original sheet. English names come from the wiki and fall back to the Chinese name when absent.'],
      ['Type', 'Col C + wiki', 'Six classes: ZAYIN / TETH / HE / WAW / ALEPH, plus "Tool", which is a class of its own rather than a danger level. The 17 tool abnormalities come from the wiki category 分类:工具异想体 and are excluded from level filtering; their actual danger level is real data and is shown in the expanded detail.'],
      ['Tool type (wiki)', 'wiki Abn Infobox', 'Tool-specific: Channel / Equip / Single-use. Tools drop no E.G.O weapon or armor, so those two columns show —.'],
      ['Mgmt Rating', 'Col D', 'The highest grade present in the cell. Conditional cells like "低 before / 中 after" register under both values.'],
      ['E.G.O Weapon Rating', 'Col E', 'Highest grade present (Excellent > Good > Fair > Poor > Worst); the letter in parentheses is the weapon class, the 【】 holds attack range and value.'],
      ['Range', 'Col E 【】', 'Very Close / Close / Short / Medium / Far / Very Far; the numeric value is kept for sorting.'],
      ['Weapon DPS', 'Col E note', 'The first number of "DPS: 8.0(10.4)" is used for sorting and filtering; the parenthesised value is shown as reachable. Tools are "-" in the source and take no part in DPS filtering.'],
      ['E.G.O Armor Rating', 'Col F', 'Highest grade present; the letter is the armor class. "收容白夜：极优(A)／不收容：良(A)" is filed under the higher one.'],
      ['Resist.', 'Col F note', 'Four numbers shown in source order with the maximum highlighted. The sheet never says which colour each number is, only "single red-res armor" and similar, so no colour order is assumed here.'],
      ['Suppression', 'Col G', 'Easy / Hard come from the original note; Suppressible / Cannot breach are filled from the wiki where the sheet is blank. The note field shows the corresponding original text.']
    ]
  }
};

var state_lang = 'zh';

function T(key) {
  // 支持 "g.type" / "s.row" 这类点号路径
  function pick(lang) {
    var d = I18N[lang];
    if (!d) return undefined;
    var parts = String(key).split('.');
    for (var i = 0; i < parts.length; i++) {
      if (d === null || typeof d !== 'object') return undefined;
      d = d[parts[i]];
    }
    return d;
  }
  var v = pick(state_lang);
  if (v !== undefined) return v;
  v = pick('zh');
  return v !== undefined ? v : key;
}
/** 枚举取值：数据值本身可能是中文键，取当前语言的显示名 */
function TV(key) {
  var v = I18N[state_lang].v, f = I18N.zh.v;
  if (v && v[key] !== undefined) return v[key];
  return f && f[key] !== undefined ? f[key] : String(key);
}
function interp(s, vars) {
  return String(s).replace(/\{(\w+)\}/g, function (m, k) {
    return vars[k] !== undefined ? vars[k] : m;
  });
}
function itemName(it) {
  if (state_lang === 'en') return it.nameEn || it.name;
  return it.name;
}