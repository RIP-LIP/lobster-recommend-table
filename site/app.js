/* 异想体推荐表 & 加班计算器 —— 前端逻辑
   数据全部来自 data.js（由 build_site.py 从 source.xlsx 生成），本文件不硬编码任何条目。 */
(function () {
  'use strict';

  var D = window.LOBO;
  var ITEMS = D.items;
  var C = D.constants;
  var CALC = D.calc;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  function nl(s) { return esc(s).replace(/\n/g, '<br>'); }
  function dash(v) { return v === null || v === undefined || v === '' ? '<span class="dim">—</span>' : esc(v); }
  function num(v, d) {
    if (v === null || v === undefined) return '—';
    var n = Number(v);
    return (d === undefined ? n : Number(n.toFixed(d))) + '';
  }

  /* ====================================================== 排序权重 */
  var MGMT_RANK = { '论外': 0, '高': 1, '中': 2, '低': 3, '极低': 4 };
  var WG_RANK = { '极优': 0, '优': 1, '良': 2, '差': 3, '极差': 4 };
  var RANGE_RANK = { '极近': 0, '近': 1, '短': 2, '一般': 3, '远': 4, '极远': 5 };
  var TYPE_RANK = { '工具型': 0, 'ZAYIN': 1, 'TETH': 2, 'HE': 3, 'WAW': 4, 'ALEPH': 5 };

  var SORTERS = {
    row: function (a, b) { return a.row - b.row; },
    id: function (a, b) { return String(a.id).localeCompare(String(b.id), 'zh'); },
    type: function (a, b) {
      var ta = a.type || a.danger, tb = b.type || b.danger;
      return (TYPE_RANK[ta] === undefined ? 9 : TYPE_RANK[ta]) -
        (TYPE_RANK[tb] === undefined ? 9 : TYPE_RANK[tb]) || a.row - b.row;
    },
    mgmt: function (a, b) {
      var x = MGMT_RANK[a.mgmtGrade], y = MGMT_RANK[b.mgmtGrade];
      return (x === undefined ? 9 : x) - (y === undefined ? 9 : y) || a.row - b.row;
    },
    wgrade: function (a, b) {
      var x = WG_RANK[a.weaponGrade], y = WG_RANK[b.weaponGrade];
      return (x === undefined ? 9 : x) - (y === undefined ? 9 : y) || a.row - b.row;
    },
    dps: function (a, b) {
      if (a.weaponDps === null && b.weaponDps === null) return a.row - b.row;
      if (a.weaponDps === null) return 1;
      if (b.weaponDps === null) return -1;
      return b.weaponDps - a.weaponDps || a.row - b.row;
    },
    range: function (a, b) {
      if (a.rangeLabel === null && b.rangeLabel === null) return a.row - b.row;
      if (a.rangeLabel === null) return 1;
      if (b.rangeLabel === null) return -1;
      return RANGE_RANK[b.rangeLabel] - RANGE_RANK[a.rangeLabel] || (b.rangeValue || 0) - (a.rangeValue || 0) || a.row - b.row;
    }
  };

  /* ====================================================== 筛选维度 */
  var GROUPS = [
    { key: 'type', label: '类型', opts: C.type || ['ZAYIN', 'TETH', 'HE', 'WAW', 'ALEPH', '工具型'], get: function (i) { return [i.type || i.danger]; }, cls: function (v) { return v === '工具型' ? 't-tool' : 'd-' + v; } },
    { key: 'mgmt', label: '管理推荐度', opts: ['论外', '高', '中', '低', '极低'], get: function (i) { return i.mgmtGrades || []; }, cls: function (v) { return 'm-' + v; } },
    { key: 'wgrade', label: 'EGO 武器推荐度', opts: C.grade, get: function (i) { return i.weaponGrades || []; }, cls: function (v) { return 'w-' + v; } },
    { key: 'wtype', label: 'EGO 武器类型', opts: ['A', 'W', 'H', 'T', 'Z'], get: function (i) { return i.weaponTypes || []; }, cls: function (v) { return 'd-' + (v === 'A' ? 'ALEPH' : v === 'W' ? 'WAW' : v === 'H' ? 'HE' : v === 'T' ? 'TETH' : 'ZAYIN'); } },
    { key: 'range', label: '攻击距离', opts: ['极近', '近', '短', '一般', '远', '极远'], get: function (i) { return i.rangeLabel ? [i.rangeLabel] : []; }, cls: function () { return ''; } },
    { key: 'agrade', label: 'EGO 防具推荐度', opts: C.grade, get: function (i) { return i.armorGrades || []; }, cls: function (v) { return 'w-' + v; } },
    { key: 'atype', label: 'EGO 防具类型', opts: ['A', 'W', 'H', 'T', 'Z'], get: function (i) { return i.armorTypes || []; }, cls: function (v) { return 'd-' + (v === 'A' ? 'ALEPH' : v === 'W' ? 'WAW' : v === 'H' ? 'HE' : v === 'T' ? 'TETH' : 'ZAYIN'); } },
    { key: 'supp', label: '镇压', opts: C.suppressGrade || ['容易', '较难', '可镇压', '不会突破收容'], get: function (i) { return [i.suppressGrade]; }, cls: function (v) { return v === '不会突破收容' ? 's-未填' : v === '可镇压' ? 's-未填' : 's-' + v; } },
    { key: 'dmg', label: '伤害类型', opts: C.dmgType || [], get: function (i) { return i.dmgType ? [i.dmgType] : []; }, cls: function () { return ''; } },
    { key: 'prefix', label: '编号前缀', opts: ['F', 'O', 'T', 'D'], get: function (i) { return [i.prefix]; }, cls: function () { return ''; } }
  ];

  var state = {
    q: '',
    sort: 'row',
    mode: 'table',
    open: {},
    dpsMin: 0,
    sel: {}
  };
  GROUPS.forEach(function (g) { state.sel[g.key] = {}; });

  /* ====================================================== 计数（不随筛选变化） */
  var TOTALS = {};
  ITEMS.forEach(function (i) {
    GROUPS.forEach(function (g) {
      g.get(i).forEach(function (v) {
        TOTALS[g.key + '\u0000' + v] = (TOTALS[g.key + '\u0000' + v] || 0) + 1;
      });
    });
  });

  /* ====================================================== 匹配 */
  function match(it) {
    var terms = state.q.split(/\s+/).filter(Boolean);
    for (var t = 0; t < terms.length; t++) {
      if (it.search.indexOf(terms[t]) === -1) return false;
    }
    for (var k in state.sel) {
      if (!state.sel[k]) continue;
      var picked = Object.keys(state.sel[k]).filter(function (x) { return state.sel[k][x]; });
      if (!picked.length) continue;
      var g = null;
      for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].key === k) g = GROUPS[i];
      var vals = g.get(it);
      var ok = picked.some(function (p) { return vals.indexOf(p) !== -1; });
      if (!ok) return false;
    }
    if (state.dpsMin > 0) {
      if (it.weaponDps === null || it.weaponDps < state.dpsMin) return false;
    }
    return true;
  }

  function activeFilters() {
    var out = [];
    GROUPS.forEach(function (g) {
      Object.keys(state.sel[g.key]).forEach(function (v) {
        if (state.sel[g.key][v]) out.push({ key: g.key, label: g.label, val: v, cls: g.cls(v) });
      });
    });
    return out;
  }

  /* ====================================================== 渲染：筛选面板 */
  function renderFilters() {
    var html = GROUPS.map(function (g) {
      var chips = g.opts.map(function (v) {
        var n = TOTALS[g.key + '\u0000' + v] || 0;
        var on = state.sel[g.key][v] ? ' on' : '';
        return '<button class="chip' + on + '" data-g="' + g.key + '" data-v="' + esc(v) + '"' +
          (n === 0 ? ' style="opacity:.35"' : '') + '>' + esc(v) +
          '<span class="n">' + n + '</span></button>';
      }).join('');
      return '<div class="fg"><div class="fg-t">' + esc(g.label) + '</div><div class="chips">' + chips + '</div></div>';
    }).join('');
    $('#fGrid').innerHTML = html;
  }

  function renderChips() {
    var af = activeFilters();
    var h = af.map(function (f) {
      return '<span class="tag"><b>' + esc(f.label) + '</b>' + esc(f.val) +
        '<button type="button" data-g="' + f.key + '" data-v="' + esc(f.val) + '" aria-label="移除">&times;</button></span>';
    });
    if (state.dpsMin > 0) {
      h.push('<span class="tag"><b>武器 DPS</b>≥ ' + state.dpsMin +
        '<button type="button" data-g="dps" data-v="0" aria-label="移除">&times;</button></span>');
    }
    if (state.q.trim()) {
      h.push('<span class="tag"><b>搜索</b>' + esc(state.q.trim()) +
        '<button type="button" data-g="q" data-v="" aria-label="移除">&times;</button></span>');
    }
    $('#chips').innerHTML = h.join('');

    var n = af.length + (state.dpsMin > 0 ? 1 : 0) + (state.q.trim() ? 1 : 0);
    var fc = $('#fCount');
    fc.textContent = n === 0 ? '未启用' : '已启用 ' + n + ' 项';
    fc.className = 'f-count' + (n ? ' on' : '');
  }

  /* ====================================================== 渲染：条目 */
  function hi(text, terms) {
    var s = esc(text);
    if (!terms || !terms.length) return s;
    var out = s;
    terms.forEach(function (t) {
      if (!t) return;
      var re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
      out = out.replace(re, '<span class="mark">$1</span>');
    });
    return out;
  }

  function bdg(cls, txt) { return '<span class="bdg ' + cls + '">' + esc(txt) + '</span>'; }

  function weaponCell(it) {
    if (!it.weaponGrade) return '<span class="dim">—</span>';
    return bdg('w-' + it.weaponGrade, it.weaponGrade);
  }

  function armorCell(it) {
    if (!it.armorGrade) return '<span class="dim">—</span>';
    return bdg('w-' + it.armorGrade, it.armorGrade) +
      (it.armorType ? ' <span class="rng">' + esc(it.armorType) + '</span>' : '');
  }

  function resistCell(it) {
    if (!it.armorResist) return '<span class="dim">—</span>';
    var max = Math.max.apply(null, it.armorResist);
    return '<span class="res4">' + it.armorResist.map(function (v) {
      return '<span' + (v === max ? ' class="max"' : '') + '>' + v + '</span>';
    }).join('') + '</span>';
  }

  function dpsCell(it) {
    if (it.weaponDps === null) return '<span class="dim">—</span>';
    return '<b>' + num(it.weaponDps) + '</b>' +
      (it.weaponDpsMax !== null ? '<span class="dim"> → ' + num(it.weaponDpsMax) + '</span>' : '');
  }

  var TRAIT_CN = { instinct: '本能', insight: '洞察', attachment: '依恋', repression: '镇压' };
  var RESIST_CN = { red: '红', white: '白', black: '黑', pale: '淡' };
  // 工具型专用：tool 参数的三个取值，对照同页正文「持续使用型 / 携带型 / 单次使用型」
  var TOOL_CN = { channel: '持续使用型', equip: '携带型', single: '单次使用型' };

  function wikiBlock(it) {
    var w = it.wiki;
    if (!w) return '';
    var out = [];

    var rows = [];
    function kv(k, v) {
      if (v === null || v === undefined || v === '' || (Array.isArray(v) && !v.length)) return;
      rows.push('<div class="wk-kv"><span class="wk-k">' + esc(k) + '</span><span class="wk-v">' + v + '</span></div>');
    }
    kv('伤害类型', it.dmgType ? esc(it.dmgType) + ' <span class="dim">(wiki: ' + esc(w.dmgTypeRaw) + ')</span>' : '');
    kv('危险等级', it.isTool && w.level ? esc(w.level) : '');
    kv('攻击强度', esc(w.dmgStat));
    kv('计数器', esc(w.counter) + (w.counter === 'X' ? ' <span class="dim">(无计数器)</span>' : ''));
    kv('工具类别', w.tool ? esc(TOOL_CN[w.tool] || w.tool) + ' <span class="dim">(wiki: ' + esc(w.tool) + ')</span>' : '');
    if (w.toolText) {
      rows.push('<div class="wk-kv wk-wide"><span class="wk-k">工具能力</span>' +
        '<span class="wk-v wk-pre">' + esc(w.toolText) + '</span></div>');
    }
    if (w.mood) {
      var md = [];
      if (w.mood['优']) md.push('优 ' + esc(w.mood['优']));
      if (w.mood['良']) md.push('良 ' + esc(w.mood['良']));
      if (w.mood['差']) md.push('差 ' + esc(w.mood['差']));
      kv('心情值区间', md.join(' / ') || '');
    }
    kv('PE-BOX 上限', w.maxPeBox === null || w.maxPeBox === undefined ? '' : esc(w.maxPeBox));
    if (w.workSpeed !== null && w.workSpeed !== undefined && w.workSpeed !== '') {
      kv('工作速度 / 冷却', esc(w.workSpeed) + ' / ' +
        (w.workCd === null || w.workCd === undefined ? '—' : esc(w.workCd)));
    }

    if (w.resist && Object.keys(w.resist).length) {
      var r = [];
      for (var c in w.resist) {
        if (w.resist[c] === null || w.resist[c] === undefined) continue;
        r.push('<span>' + RESIST_CN[c] + ' <b>' + esc(w.resist[c]) + '</b></span>');
      }
      if (r.length) {
        rows.push('<div class="wk-kv"><span class="wk-k">异想体自身抗性</span><span class="wk-v">' +
          '<span class="res4">' + r.join('') + '</span></span></div>');
      }
    }

    if (w.traits && Object.keys(w.traits).length) {
      var head = '', body = '';
      for (var a in TRAIT_CN) {
        if (!w.traits[a]) continue;
        var st = w.traitStats && w.traitStats[a] ? w.traitStats[a] : [];
        head += '<th>' + TRAIT_CN[a] + '</th>';
        var tds = '';
        for (var i = 0; i < w.traits[a].length; i++) {
          tds += '<td>' + esc(w.traits[a][i] || '—') +
            (st[i] ? '<em>' + esc(st[i]) + '</em>' : '') + '</td>';
        }
        body += '<tr><th>' + TRAIT_CN[a] + '</th>' + tds + '</tr>';
      }
      rows.push('<div class="wk-kv wk-wide"><span class="wk-k">员工性格适配</span>' +
        '<span class="wk-v"><table class="wk-traits"><thead><tr><th></th>' +
        '<th>Ⅰ</th><th>Ⅱ</th><th>Ⅲ</th><th>Ⅳ</th><th>Ⅴ</th></tr></thead><tbody>' + body + '</tbody></table>' +
        '</span></div>');
    }

    if (!rows.length) {
      rows.push('<div class="wk-kv"><span class="wk-v dim">该 wiki 页面不是结构化模板，无可提取字段</span></div>');
    }

    var link = w.url ? '<a class="wk-link" href="' + esc(w.url) + '" target="_blank" rel="noopener">wiki 页面 ↗</a>' : '';
    return '<div class="dwiki"><div class="dwiki-h">官方 wiki 补充数据' + link + '</div>' +
      '<div class="dwiki-b">' + out.join('') + rows.join('') + '</div></div>';
  }

  function detailHTML(it, terms) {
    function cell(k, v) {
      return '<div class="dcell"><div class="dk">' + esc(k) + '</div><div class="dv">' +
        (v ? hi(v, terms) : '<span class="dnone">原表未填</span>') + '</div></div>';
    }
    return '<tr class="detail" data-row="' + it.row + '"><td colspan="10"><div class="dwrap">' +
      cell('管理推荐度备注', it.mgmtNote) +
      cell('EGO 武器说明', it.weaponText) +
      cell('EGO 防具说明', it.armorText) +
      cell('镇压任务小评', it.suppressText) +
      '</div>' + wikiBlock(it) + '</td></tr>';
  }

  function renderTable(list, terms) {
    var sortKey = state.sort;
    var sorted = list.slice().sort(SORTERS[sortKey] || SORTERS.row);
    var head = ['编号', '异想体', '类型', '管理推荐度', 'EGO 武器', '攻击距离', '武器 DPS', 'EGO 防具', '抗性', '镇压'];
    var rows = sorted.map(function (it) {
      var open = !!state.open[it.row];
      var tp = it.type || it.danger;
      return '<tr class="row' + (open ? ' open' : '') + '" data-row="' + it.row + '" tabindex="0">' +
        '<td class="c-id"><span class="caret">▶</span>' + hi(it.id, terms) + '</td>' +
        '<td class="c-name">' + hi(it.name, terms) + '</td>' +
        '<td>' + bdg(tp === '工具型' ? 't-tool' : 'd-' + tp, tp) + '</td>' +
        '<td>' + (it.mgmtGrade ? bdg('m-' + it.mgmtGrade, it.mgmtGrade) : '<span class="dim">—</span>') + '</td>' +
        '<td>' + weaponCell(it) + (it.weaponType ? ' <span class="rng">' + esc(it.weaponType) + '</span>' : '') + '</td>' +
        '<td>' + (it.rangeLabel ? '<span class="rng">' + esc(it.rangeLabel) + (it.rangeValue !== null ? '(' + it.rangeValue + ')' : '') + '</span>' : '<span class="dim">—</span>') + '</td>' +
        '<td class="c-dps">' + dpsCell(it) + '</td>' +
        '<td>' + armorCell(it) + '</td>' +
        '<td class="c-res">' + resistCell(it) + '</td>' +
        '<td>' + bdg('s-' + (it.suppressGrade === '不会突破收容' || it.suppressGrade === '可镇压' ? '未填' : it.suppressGrade),
          it.suppressGrade) + '</td>' +
        '</tr>' + (open ? detailHTML(it, terms) : '');
    }).join('');

    return '<div class="tbl-wrap"><table class="grid"><thead><tr>' +
      head.map(function (h, i) {
        return '<th data-col="' + i + '">' + esc(h) + '</th>';
      }).join('') + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
  }

  function renderCards(list, terms) {
    return '<div class="cards">' + list.map(function (it) {
      function row(k, v, cls) {
        return '<div class="crow"><div class="ck">' + esc(k) + '</div><div class="cv' + (cls ? ' ' + cls : '') + '">' +
          (v || '<span class="dim">—</span>') + '</div></div>';
      }
      var tp = it.type || it.danger;
      return '<div class="card" data-row="' + it.row + '">' +
        '<div class="card-h"><span class="cid">' + hi(it.id, terms) + '</span><h3>' + hi(it.name, terms) + '</h3>' +
        bdg(tp === '工具型' ? 't-tool' : 'd-' + tp, tp) + '</div>' +
        '<div class="card-tags">' +
        (it.mgmtGrade ? bdg('m-' + it.mgmtGrade, '管理 ' + it.mgmtGrade) : '') +
        weaponCell(it) + (it.weaponType ? ' <span class="rng">' + esc(it.weaponType) + '</span>' : '') +
        (it.rangeLabel ? '<span class="rng">' + esc(it.rangeLabel) + (it.rangeValue !== null ? '(' + it.rangeValue + ')' : '') + '</span>' : '') +
        armorCell(it) + bdg('s-' + (it.suppressGrade === '不会突破收容' || it.suppressGrade === '可镇压' ? '未填' : it.suppressGrade), '镇压 ' + it.suppressGrade) +
        (it.dmgType ? '<span class="rng">伤 ' + esc(it.dmgType) + '</span>' : '') +
        '</div>' +
        '<div class="card-rows">' +
        row('DPS', it.weaponDps === null ? '' : '<b>' + num(it.weaponDps) + '</b>' +
          (it.weaponDpsMax !== null ? ' <span class="dim">(可达 ' + num(it.weaponDpsMax) + ')</span>' : '') +
          (it.weaponTail ? ' <span class="dim">' + esc(it.weaponTail) + '</span>' : '')) +
        row('管理备注', it.mgmtNote ? hi(it.mgmtNote, terms) : '') +
        row('武器说明', it.weaponText ? hi(it.weaponText, terms) : '', 'notes') +
        row('防具说明', it.armorText ? hi(it.armorText, terms) : '', 'notes') +
        row('镇压小评', it.suppressText ? hi(it.suppressText, terms) : '', 'notes') +
        '</div>' + wikiBlock(it) + '</div>';
    }).join('') + '</div>';
  }

  /* ====================================================== 主渲染 */
  function render() {
    var terms = state.q.split(/\s+/).filter(Boolean);
    var list = ITEMS.filter(match);
    $('#stat').innerHTML = '<b>' + list.length + '</b> / ' + ITEMS.length + ' 条';
    $('#empty').hidden = list.length > 0;
    $('#result').innerHTML = list.length
      ? (state.mode === 'table' ? renderTable(list, terms) : renderCards(list, terms))
      : '';
    renderChips();
  }

  /* ====================================================== 事件 */
  function toggleRow(row) {
    state.open[row] = !state.open[row];
    render();
  }

  $('#fGrid').addEventListener('click', function (e) {
    var b = e.target.closest('.chip');
    if (!b) return;
    var g = b.dataset.g, v = b.dataset.v;
    state.sel[g][v] = !state.sel[g][v];
    renderFilters();
    render();
  });

  $('#chips').addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.g === 'dps') state.dpsMin = 0, $('#dpsMin').value = 0, $('#dpsMinVal').textContent = '0';
    else if (b.dataset.g === 'q') { state.q = ''; $('#q').value = ''; $('#qClear').hidden = true; }
    else state.sel[b.dataset.g][b.dataset.v] = false;
    renderFilters();
    render();
  });

  $('#clearAll').addEventListener('click', function () {
    GROUPS.forEach(function (g) { state.sel[g.key] = {}; });
    state.dpsMin = 0;
    state.q = '';
    $('#dpsMin').value = 0;
    $('#dpsMinVal').textContent = '0';
    $('#q').value = '';
    $('#qClear').hidden = true;
    renderFilters();
    render();
  });

  var qt;
  $('#q').addEventListener('input', function () {
    state.q = this.value;
    $('#qClear').hidden = !this.value;
    clearTimeout(qt);
    qt = setTimeout(render, 110);
  });
  $('#qClear').addEventListener('click', function () {
    state.q = ''; this.hidden = true;
    $('#q').value = ''; $('#q').focus(); render();
  });

  $('#sort').addEventListener('change', function () { state.sort = this.value; render(); });

  $('#dpsMin').addEventListener('input', function () {
    state.dpsMin = +this.value;
    $('#dpsMinVal').textContent = this.value;
    render();
  });

  $$('.seg-b').forEach(function (b) {
    b.addEventListener('click', function () {
      state.mode = b.dataset.viewMode;
      $$('.seg-b').forEach(function (x) { x.classList.toggle('is-on', x === b); });
      render();
    });
  });

  $('#result').addEventListener('click', function (e) {
    if (e.target.closest('thead')) return;
    var r = e.target.closest('.row, .detail');
    if (r) toggleRow(+r.dataset.row);
  });
  $('#result').addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var r = e.target.closest('.row');
    if (r) { e.preventDefault(); toggleRow(+r.dataset.row); }
  });

  /* 表头点击 → 按列排序 */
  $('#result').addEventListener('click', function (e) {
    var th = e.target.closest('thead th');
    if (!th) return;
    var map = { '0': 'id', '1': 'id', '2': 'type', '3': 'mgmt', '4': 'wgrade', '5': 'range', '6': 'dps', '7': 'row', '8': 'row', '9': 'row' };
    var v = map[th.dataset.col];
    if (!v) return;
    state.sort = v;
    $('#sort').value = v;
    render();
  });

  $$('.tab').forEach(function (t) {
    t.addEventListener('click', function () {
      $$('.tab').forEach(function (x) { x.classList.toggle('is-on', x === t); });
      $$('.view').forEach(function (v) { v.classList.toggle('is-on', v.id === 'view-' + t.dataset.view); });
      if (t.dataset.view === 'calc') renderCalc();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  /* ====================================================== 计算器 */
  var QUALS = ['Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ'];

  function fillSelect(sel, list, val) {
    sel.innerHTML = list.map(function (v) {
      return '<option value="' + esc(v) + '">' + esc(v) + '</option>';
    }).join('');
    sel.value = val;
  }

  function renderCalc() {
    var tech = $('#tech').checked;
    var qual = $('#qual').value;
    var lvl = $('#lvl').value;
    var target = +$('#target').value;

    var techK = tech ? CALC.techOn : CALC.techOff;
    var coef = CALC.grid[qual][lvl];
    var pebox = CALC.pebox[lvl];
    var per = CALC.healthOut * techK * coef * pebox;
    var times = per > 0 ? target / per : NaN;

    var fx = [
      { k: CALC.labels.healthOut || '期望健康输出值', v: num(CALC.healthOut) },
      { k: CALC.labels.tech || '培训部系数', v: num(techK) },
      { k: CALC.labels.coef || '工作系数', v: num(coef) },
      { k: CALC.labels.pebox || '期望 PE-BOX 数', v: pebox }
    ];
    $('#formula').innerHTML = fx.map(function (f, i) {
      return (i ? '<div class="fx-op">×</div>' : '') +
        '<div class="fx"><div class="fx-k">' + esc(f.k) + '</div><div class="fx-v">' + esc(f.v) + '</div></div>';
    }).join('') + '<div class="fx-op">=</div>' +
      '<div class="fx" style="flex:1 1 120px;border-color:rgba(224,164,74,.35);background:rgba(224,164,74,.08)">' +
      '<div class="fx-k">单次期望加成</div><div class="fx-v" style="color:#e5b85c">' + num(per, 3) + '</div></div>';

    $('#rPer').textContent = num(per, 3);
    $('#rCntK').textContent = '提升 ' + target + ' 点属性需要工作';
    $('#rCnt').textContent = isNaN(times) ? '—' : num(times, 2);
    $('#calcNote').innerHTML =
      '工作系数 ' + num(coef) + ' 来自上表「' + esc(QUALS.indexOf(qual) + 1) + ' 级品质 × ' + esc(lvl) +
      '」交叉格；PE-BOX 数按异想体等级取 ' + pebox + '（ZAYIN 7 / TETH 8 / HE 12 / WAW 16 / ALEPH 23）。<br>' +
      '本估算用的是期望值，实际单次工作会有偏差，只适合做加班量的量级参考。';

    var mx = '<thead><tr><th>品质 ＼ 等级</th>' +
      C.danger.map(function (d) { return '<th>' + esc(d) + '</th>'; }).join('') + '</tr></thead><tbody>';
    QUALS.forEach(function (q) {
      mx += '<tr><th>' + esc(q) + '</th>' + C.danger.map(function (d) {
        var on = (q === qual && d === lvl);
        return '<td class="' + (on ? 'on' : '') + '">' + num(CALC.grid[q][d]) + '</td>';
      }).join('') + '</tr>';
    });
    $('#mx').innerHTML = mx + '</tbody>';

    $('#techNote').innerHTML = tech
      ? '已开启：培训部系数按 <code>1.5</code> 计算（原表公式 <code>IF(B6=TRUE,1.5,1)</code>）。'
      : '未开启：培训部系数按 <code>1</code> 计算。';
  }

  /* ====================================================== 说明页 */
  function renderHelp() {
    var doc = [
      ['异想体编号', 'A 列', '原表编号，含单位代号前缀（F / O / T / D）。最后一条「秃头-真是-太棒啦!」是特例，没有标准编号格式。'],
      ['异想体名称', 'B 列', '直接取原表，未做任何替换。'],
      ['类型', 'C 列 + wiki', '共六类：ZAYIN / TETH / HE / WAW / ALEPH，以及与危险等级并列的「工具型」。17 条工具型取自 wiki 的分类:工具异想体，不参与等级筛选；它们各自的危险等级仍是真实数据，展开详情里能看到。'],
      ['工具类别（wiki）', 'wiki Abn Infobox', '工具型专有，标明使用方式：持续使用型（channel）／携带型（equip）／单次使用型（single）。工具型没有 EGO 武器与防具，所以武器、防具两列显示为 —。'],
      ['管理推荐度', 'D 列', '取该格出现的最高一档推荐度作为标签；像「有拟态前：低／有拟态后：中」这种分情况的，会同时归入低和中两个筛选项。'],
      ['EGO 武器推荐度', 'E 列', '标签为该格出现的最高档（极优 > 优 > 良 > 差 > 极差）；括号里的字母是武器等级，【】里是攻击距离与数值。'],
      ['攻击距离', 'E 列【】', '极近 / 近 / 短 / 一般 / 远 / 极远，同时保留括号中的数值用于排序。'],
      ['武器 DPS', 'E 列备注', '从「DPS：8.0(10.4)」这类备注里取第一个数 8.0 用于排序与筛选；括号内的数作为可达值一并显示。工具型异想体原表写「-」，此处不参与 DPS 筛选。'],
      ['EGO 防具推荐度', 'F 列', '同样取最高档标签，括号内字母为防具等级。像「收容白夜：极优(A)／不收容：良(A)」按极优归档。'],
      ['抗性', 'F 列备注', '原表备注里的四个数值，按原顺序展示，最大值加高亮。原表没有标注这四个数分别对应哪种抗性，只在文字里写了「单红抗甲」「紫抗甲」「蓝抗甲」之类的说法，因此本页不替它指定颜色顺序。'],
      ['镇压', 'G 列', '容易＝原表小评写「容易镇压」；较难＝写「不容易镇压」；可镇压＝原表留空，取自 wiki 镇压建议；不会突破收容＝原表留空，该异想体不会突破收容。镇压小评栏展示对应原文。']
    ];
    $('#docBody').innerHTML = doc.map(function (r) {
      return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>';
    }).join('');

    var lg = D.meta.legends || {};
    var names = { D: '管理推荐度', E: 'EGO 武器推荐度', F: 'EGO 防具推荐度' };
    $('#legend').innerHTML = ['D', 'E', 'F'].map(function (k) {
      return '<div class="lg"><h4>' + esc(names[k]) + '</h4><p>' + nl(lg[k] || '') + '</p></div>';
    }).join('');

    $('#notice').innerHTML = nl(CALC.notice);
  }

  /* ====================================================== 启动 */
  function init() {
    $('#brandSub').innerHTML = '共 <b>' + ITEMS.length + '</b> 条收录 · 数据来自原表 <code>异想体推荐表</code>';
    $('#footCount').textContent = ITEMS.length;
    var src = D.meta.source || {};
    $('#footAuthor').textContent = src.author || '未署名';
    if (src.sheet) { $('#footSheet').href = src.sheet; $('#footSheet').textContent = '原表链接'; }
    if (src.wiki) { $('#footWiki').href = src.wiki; $('#footWiki').textContent = 'Lobotomy Corp 中文 wiki'; }

    fillSelect($('#qual'), QUALS, 'Ⅳ');
    fillSelect($('#lvl'), C.danger, 'ALEPH');
    fillSelect($('#target'), CALC.targets, String(CALC.targetDefault));

    ['#tech', '#qual', '#lvl', '#target'].forEach(function (s) {
      $(s).addEventListener('change', renderCalc);
    });

    renderFilters();
    render();
    renderCalc();
    renderHelp();
  }

  init();
})();
