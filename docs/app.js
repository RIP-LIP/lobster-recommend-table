/* 异想体推荐表 & 加班计算器 —— 前端逻辑
   数据全部来自 data.js（由 build_site.py 从 source.xlsx 生成），本文件不硬编码任何条目。 */
(function () {
  'use strict';

  var D = window.LOBO;
  var ITEMS = D.items;
  var C = D.constants;
  var CALC = D.calc;

  var SRC = D.meta.source || {};

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

  /* ====================================================== 排序
     单一入口：sortVal 取值 + cmp 比较，方向由 state.dir 控制（asc / desc）。
     任何一列都能排，不需要为升降序各做一个控件。 */
  var MGMT_RANK = { '论外': 0, '高': 1, '中': 2, '低': 3, '极低': 4 };
  var WG_RANK = { '极优': 0, '优': 1, '良': 2, '差': 3, '极差': 4 };
  var TYPE_RANK = { '工具型': 0, 'ZAYIN': 1, 'TETH': 2, 'HE': 3, 'WAW': 4, 'ALEPH': 5 };
  var SUP_RANK = { '容易': 0, '较难': 1, '可镇压': 2, '不会突破收容': 3, '未填': 9 };
  var DMG_RANK = { '红': 0, '白': 1, '黑': 2, '淡': 3, '未知': 9 };

  // 可排序列：下拉项 + 表头点击都走这张表
  var SORT_FIELDS = [
    { v: 'row', label: 's.row' },
    { v: 'type', label: 's.type' },
    { v: 'mgmt', label: 's.mgmt' },
    { v: 'wgrade', label: 's.wgrade' },
    { v: 'agrade', label: 's.agrade' },
    { v: 'range', label: 's.range' },
    { v: 'dps', label: 's.dps' },
    { v: 'supp', label: 's.supp' },
    { v: 'dmg', label: 's.dmg' },
    { v: 'prefix', label: 's.prefix' },
    { v: 'id', label: 's.id' }
  ];
  // 表头列序 -> 排序键
  var COL_SORT = ['id', 'id', 'type', 'mgmt', 'wgrade', 'range', 'dps', 'agrade', 'row', 'supp'];

  function rankOf(map, v) { var r = map[v]; return r === undefined ? 99 : r; }

  function sortVal(it, key) {
    switch (key) {
      case 'id': return String(it.id);
      case 'prefix': return String(it.prefix);
      case 'type': return rankOf(TYPE_RANK, it.type || it.danger);
      case 'mgmt': return rankOf(MGMT_RANK, it.mgmtGrade);
      case 'wgrade': return rankOf(WG_RANK, it.weaponGrade);
      case 'agrade': return rankOf(WG_RANK, it.armorGrade);
      case 'supp': return rankOf(SUP_RANK, it.suppressGrade);
      case 'dmg': return rankOf(DMG_RANK, it.dmgType);
      case 'range': return it.rangeValue === null || it.rangeValue === undefined ? -1 : it.rangeValue;
      case 'dps': return it.weaponDps === null || it.weaponDps === undefined ? -1 : it.weaponDps;
      default: return it.row;
    }
  }

  function sortedList(list) {
    var key = state.sort, dir = state.dir;
    if (key === 'row' && dir === 'asc') return list.slice();
    return list.slice().sort(function (a, b) {
      var x = sortVal(a, key), y = sortVal(b, key);
      var r = (typeof x === 'string' || typeof y === 'string')
        ? String(x).localeCompare(String(y), 'zh') : x - y;
      if (r === 0) return a.row - b.row;         // 同值保持原表顺序，升降序都稳定
      return dir === 'desc' ? -r : r;
    });
  }

  /* ====================================================== 筛选维度 */
  var GROUPS = [
    { key: 'type', label: 'g.type', opts: C.type || ['ZAYIN', 'TETH', 'HE', 'WAW', 'ALEPH', '工具型'], get: function (i) { return [i.type || i.danger]; }, cls: function (v) { return v === '工具型' ? 't-tool' : 'd-' + v; } },
    { key: 'mgmt', label: 'g.mgmt', opts: ['论外', '高', '中', '低', '极低'], get: function (i) { return i.mgmtGrades || []; }, cls: function (v) { return 'm-' + v; } },
    { key: 'wgrade', label: 'g.wgrade', opts: C.grade, get: function (i) { return i.weaponGrades || []; }, cls: function (v) { return 'w-' + v; } },
    { key: 'wtype', label: 'g.wtype', opts: ['A', 'W', 'H', 'T', 'Z'], get: function (i) { return i.weaponTypes || []; }, cls: function (v) { return 'd-' + (v === 'A' ? 'ALEPH' : v === 'W' ? 'WAW' : v === 'H' ? 'HE' : v === 'T' ? 'TETH' : 'ZAYIN'); } },
    { key: 'range', label: 'g.range', opts: ['极近', '近', '短', '一般', '远', '极远'], get: function (i) { return i.rangeLabel ? [i.rangeLabel] : []; }, cls: function () { return ''; } },
    { key: 'agrade', label: 'g.agrade', opts: C.grade, get: function (i) { return i.armorGrades || []; }, cls: function (v) { return 'w-' + v; } },
    { key: 'atype', label: 'g.atype', opts: ['A', 'W', 'H', 'T', 'Z'], get: function (i) { return i.armorTypes || []; }, cls: function (v) { return 'd-' + (v === 'A' ? 'ALEPH' : v === 'W' ? 'WAW' : v === 'H' ? 'HE' : v === 'T' ? 'TETH' : 'ZAYIN'); } },
    { key: 'supp', label: 'g.supp', opts: C.suppressGrade || ['容易', '较难', '可镇压', '不会突破收容'], get: function (i) { return [i.suppressGrade]; }, cls: function (v) { return v === '不会突破收容' ? 's-未填' : v === '可镇压' ? 's-未填' : 's-' + v; } },
    { key: 'dmg', label: 'g.dmg', opts: C.dmgType || [], get: function (i) { return i.dmgType ? [i.dmgType] : []; }, cls: function () { return ''; } },
    { key: 'prefix', label: 'g.prefix', opts: ['F', 'O', 'T', 'D'], get: function (i) { return [i.prefix]; }, cls: function () { return ''; } }
  ];

  var state = {
    q: '',
    sort: 'row',
    dir: 'asc',
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
          (n === 0 ? ' style="opacity:.35"' : '') + '>' + esc(TV(v)) +
          '<span class="n">' + n + '</span></button>';
      }).join('');
      return '<div class="fg"><div class="fg-t">' + esc(T(g.label)) + '</div><div class="chips">' + chips + '</div></div>';
    }).join('');
    $('#fGrid').innerHTML = html;
  }

  function renderChips() {
    var af = activeFilters();
    var h = af.map(function (f) {
      return '<span class="tag"><b>' + esc(T(f.label)) + '</b>' + esc(TV(f.val)) +
        '<button type="button" data-g="' + f.key + '" data-v="' + esc(f.val) + '" aria-label="移除">&times;</button></span>';
    });
    if (state.dpsMin > 0) {
      h.push('<span class="tag"><b>Weapon DPS</b>≥ ' + state.dpsMin +
        '<button type="button" data-g="dps" data-v="0" aria-label="移除">&times;</button></span>');
    }
    if (state.q.trim()) {
      h.push('<span class="tag"><b>Search</b>' + esc(state.q.trim()) +
        '<button type="button" data-g="q" data-v="" aria-label="移除">&times;</button></span>');
    }
    $('#chips').innerHTML = h.join('');

    var n = af.length + (state.dpsMin > 0 ? 1 : 0) + (state.q.trim() ? 1 : 0);
    var fc = $('#fCount');
    fc.textContent = n === 0 ? T('filterOff') : interp(T('filterOn'), { n: n });
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

  function bdg(cls, txt) { return '<span class="bdg ' + cls + '">' + esc(TV(txt)) + '</span>'; }

  function typeBadge(it) {
    var tp = it.type || it.danger;
    return bdg(tp === '工具型' ? 't-tool' : 'd-' + tp, tp);
  }

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

  var TRAIT_CN = { instinct: '本能', insight: '洞察', attachment: '沟通', repression: '压迫' };
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
    kv(T('wkDmg'), it.dmgType ? esc(TV(it.dmgType)) + ' <span class="dim">(wiki: ' + esc(w.dmgTypeRaw) + ')</span>' : '');
    kv(T('wkLevel'), it.isTool && w.level ? esc(w.level) : '');
    kv(T('wkStat'), esc(w.dmgStat));
    kv(T('wkCounter'), esc(w.counter) + (w.counter === 'X' ? ' <span class="dim">' + esc(T('wkNoCounter')) + '</span>' : ''));
    kv(T('wkTool'), w.tool ? esc(TV(TOOL_CN[w.tool] || w.tool)) + ' <span class="dim">(wiki: ' + esc(w.tool) + ')</span>' : '');
    if (w.toolText) {
      rows.push('<div class="wk-kv wk-wide"><span class="wk-k">' + esc(T('wkToolText')) + '</span>' +
        '<span class="wk-v wk-pre">' + esc(w.toolText) + '</span></div>');
    }
    if (w.mood) {
      var md = [];
      if (w.mood['优']) md.push(TV('优') + ' ' + esc(w.mood['优']));
      if (w.mood['良']) md.push(TV('良') + ' ' + esc(w.mood['良']));
      if (w.mood['差']) md.push(TV('差') + ' ' + esc(w.mood['差']));
      kv(T('wkMood'), md.join(' / ') || '');
    }
    kv(T('wkPe'), w.maxPeBox === null || w.maxPeBox === undefined ? '' : esc(w.maxPeBox));
    if (w.workSpeed !== null && w.workSpeed !== undefined && w.workSpeed !== '') {
      kv(T('wkWork'), esc(w.workSpeed) + ' / ' +
        (w.workCd === null || w.workCd === undefined ? '—' : esc(w.workCd)));
    }

    if (w.resist && Object.keys(w.resist).length) {
      var r = [];
      for (var c in w.resist) {
        if (w.resist[c] === null || w.resist[c] === undefined) continue;
        r.push('<span>' + esc(TV(RESIST_CN[c])) + ' <b>' + esc(w.resist[c]) + '</b></span>');
      }
      if (r.length) {
        rows.push('<div class="wk-kv"><span class="wk-k">' + esc(T('wkResist')) + '</span><span class="wk-v">' +
          '<span class="res4">' + r.join('') + '</span></span></div>');
      }
    }

    if (w.traits && Object.keys(w.traits).length) {
      var body = '';
      for (var a in TRAIT_CN) {
        if (!w.traits[a]) continue;
        var st = w.traitStats && w.traitStats[a] ? w.traitStats[a] : [];
        var lbl = esc(TV(TRAIT_CN[a]));
        var tds = '';
        for (var i = 0; i < w.traits[a].length; i++) {
          tds += '<td>' + esc(TV(w.traits[a][i] || '—')) +
            (st[i] ? '<em>' + esc(st[i]) + '</em>' : '') + '</td>';
        }
        body += '<tr><th>' + lbl + '</th>' + tds + '</tr>';
      }
      rows.push('<div class="wk-kv wk-wide"><span class="wk-k">' + esc(T('wkTrait')) + '</span>' +
        '<span class="wk-v"><table class="wk-traits"><thead><tr><th></th>' +
        '<th>Ⅰ</th><th>Ⅱ</th><th>Ⅲ</th><th>Ⅳ</th><th>Ⅴ</th></tr></thead><tbody>' + body + '</tbody></table>' +
        '</span></div>');
    }

    if (!rows.length) {
      rows.push('<div class="wk-kv"><span class="wk-v dim">' + esc(T('wkStruct')) + '</span></div>');
    }

    var link = w.url ? '<a class="wk-link" href="' + esc(w.url) + '" target="_blank" rel="noopener">' + esc(T('wikiPage')) + '</a>' : '';
    return '<div class="dwiki"><div class="dwiki-h">' + esc(T('wikiTitle')) + link + '</div>' +
      '<div class="dwiki-b">' + out.join('') + rows.join('') + '</div></div>';
  }

  function detailHTML(it, terms) {
    function cell(k, v) {
      return '<div class="dcell"><div class="dk">' + esc(T(k)) + '</div><div class="dv">' +
        (v ? hi(v, terms) : '<span class="dnone">' + esc(T('notFilled')) + '</span>') + '</div></div>';
    }
    return '<tr class="detail" data-row="' + it.row + '"><td colspan="10"><div class="dwrap">' +
      cell('dMgmt', it.mgmtNote) +
      cell('dWeapon', it.weaponText) +
      cell('dArmor', it.armorText) +
      cell('dSupp', it.suppressText) +
      '</div>' + wikiBlock(it) + '</td></tr>';
  }

  function renderTable(list, terms) {
    var sorted = sortedList(list);
    var c = T('col');
    var head = [c.id, c.name, c.type, c.mgmt, c.wgrade, c.range, c.dps, c.agrade, c.res, c.supp];
    var rows = sorted.map(function (it) {
      var open = !!state.open[it.row];
      return '<tr class="row' + (open ? ' open' : '') + '" data-row="' + it.row + '" tabindex="0">' +
        '<td class="c-id"><span class="caret">▶</span>' + hi(it.id, terms) + '</td>' +
        '<td class="c-name">' + hi(itemName(it), terms) + '</td>' +
        '<td>' + typeBadge(it) + '</td>' +
        '<td>' + (it.mgmtGrade ? bdg('m-' + it.mgmtGrade, it.mgmtGrade) : '<span class="dim">—</span>') + '</td>' +
        '<td>' + weaponCell(it) + (it.weaponType ? ' <span class="rng">' + esc(it.weaponType) + '</span>' : '') + '</td>' +
        '<td>' + (it.rangeLabel ? '<span class="rng">' + esc(TV(it.rangeLabel)) + (it.rangeValue !== null ? '(' + it.rangeValue + ')' : '') + '</span>' : '<span class="dim">—</span>') + '</td>' +
        '<td class="c-dps">' + dpsCell(it) + '</td>' +
        '<td>' + armorCell(it) + '</td>' +
        '<td class="c-res">' + resistCell(it) + '</td>' +
        '<td>' + suppBadge(it) + '</td>' +
        '</tr>' + (open ? detailHTML(it, terms) : '');
    }).join('');

    return '<div class="tbl-wrap"><table class="grid"><thead><tr>' +
      head.map(function (h, i) {
        var key = COL_SORT[i];
        var on = state.sort === key && key !== 'row';
        return '<th data-col="' + i + '"' + (on ? ' class="sorted"' : '') + '>' + esc(h) +
          (on ? '<span class="th-arrow">' + (state.dir === 'desc' ? '▼' : '▲') + '</span>' : '') + '</th>';
      }).join('') + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
  }

  function suppBadge(it) {
    var s = it.suppressGrade;
    return bdg('s-' + (s === '不会突破收容' || s === '可镇压' ? '未填' : s), s);
  }

  function renderCards(list, terms) {
    return '<div class="cards">' + list.map(function (it) {
      function row(k, v, cls) {
        return '<div class="crow"><div class="ck">' + esc(k) + '</div><div class="cv' + (cls ? ' ' + cls : '') + '">' +
          (v || '<span class="dim">—</span>') + '</div></div>';
      }
      return '<div class="card" data-row="' + it.row + '">' +
        '<div class="card-h"><span class="cid">' + hi(it.id, terms) + '</span><h3>' + hi(itemName(it), terms) + '</h3>' +
        typeBadge(it) + '</div>' +
        '<div class="card-tags">' +
        (it.mgmtGrade ? bdg('m-' + it.mgmtGrade, 'Mgmt ' + TV(it.mgmtGrade)) : '') +
        weaponCell(it) + (it.weaponType ? ' <span class="rng">' + esc(it.weaponType) + '</span>' : '') +
        (it.rangeLabel ? '<span class="rng">' + esc(TV(it.rangeLabel)) + (it.rangeValue !== null ? '(' + it.rangeValue + ')' : '') + '</span>' : '') +
        armorCell(it) + suppBadge(it) +
        (it.dmgType ? '<span class="rng">' + esc(TV('伤')) + ' ' + esc(TV(it.dmgType)) + '</span>' : '') +
        '</div>' +
        '<div class="card-rows">' +
        row('DPS', it.weaponDps === null ? '' : '<b>' + num(it.weaponDps) + '</b>' +
          (it.weaponDpsMax !== null ? ' <span class="dim">(max ' + num(it.weaponDpsMax) + ')</span>' : '') +
          (it.weaponTail ? ' <span class="dim">' + esc(it.weaponTail) + '</span>' : '')) +
        row(T('dMgmt'), it.mgmtNote ? hi(it.mgmtNote, terms) : '') +
        row(T('dWeapon'), it.weaponText ? hi(it.weaponText, terms) : '', 'notes') +
        row(T('dArmor'), it.armorText ? hi(it.armorText, terms) : '', 'notes') +
        row(T('dSupp'), it.suppressText ? hi(it.suppressText, terms) : '', 'notes') +
        '</div>' + wikiBlock(it) + '</div>';
    }).join('') + '</div>';
  }

  /* ====================================================== 主渲染 */
  function render() {
    var terms = state.q.split(/\s+/).filter(Boolean);
    var list = ITEMS.filter(match);
    $('#stat').innerHTML = '<b>' + list.length + '</b> / ' + ITEMS.length +
      '<span class="dim"> ' + esc(T('statTail')) + '</span>';
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

  /* 排序：同一个控件既选字段也切方向。
     选新字段 -> 默认升序；再点同一项 -> 降序；不额外加按钮。 */
  function setSort(key) {
    if (state.sort === key) state.dir = state.dir === 'asc' ? 'desc' : 'asc';
    else { state.sort = key; state.dir = 'asc'; }
    syncSortUI();
    render();
  }

  function syncSortUI() {
    var cur = null;
    for (var i = 0; i < SORT_FIELDS.length; i++) if (SORT_FIELDS[i].v === state.sort) cur = SORT_FIELDS[i];
    $('#srtVal').textContent = cur ? T(cur.label) : T('s.row');
    $('#srtArrow').textContent = state.dir === 'desc' ? '▼' : '▲';
    $('#srtArrow').classList.toggle('desc', state.dir === 'desc');
    $$('#srtMenu .srt-i').forEach(function (b) {
      b.classList.toggle('on', b.dataset.v === state.sort);
      b.dataset.dir = state.sort === b.dataset.v ? state.dir : '';
    });
    $('#srtBtn').setAttribute('aria-expanded', $('#srtMenu').hidden ? 'false' : 'true');
  }

  function renderSortMenu() {
    $('#srtMenu').innerHTML = SORT_FIELDS.map(function (f) {
      return '<button type="button" class="srt-i" role="option" data-v="' + f.v + '">' +
        esc(T(f.label)) + '<span class="srt-i-a"></span></button>';
    }).join('');
  }

  function closeSort() { $('#srtMenu').hidden = true; syncSortUI(); }

  $('#srtBtn').addEventListener('click', function (e) {
    e.stopPropagation();
    var m = $('#srtMenu');
    m.hidden = !m.hidden;
    syncSortUI();
  });
  $('#srtMenu').addEventListener('click', function (e) {
    var b = e.target.closest('.srt-i');
    if (!b) return;
    setSort(b.dataset.v);
    closeSort();
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#srt') && !$('#srtMenu').hidden) closeSort();
  });

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

  /* 表头点击 = 选中该列；再点同一列 = 切方向 */
  $('#result').addEventListener('click', function (e) {
    var th = e.target.closest('thead th');
    if (!th) return;
    var key = COL_SORT[+th.dataset.col];
    if (!key || key === 'row') return;
    setSort(key);
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
      { k: T('fxHealth'), v: num(CALC.healthOut) },
      { k: T('fxTech'), v: num(techK) },
      { k: T('fxCoef'), v: num(coef) },
      { k: T('fxPebox'), v: pebox }
    ];
    $('#formula').innerHTML = fx.map(function (f, i) {
      return (i ? '<div class="fx-op">×</div>' : '') +
        '<div class="fx"><div class="fx-k">' + esc(f.k) + '</div><div class="fx-v">' + esc(f.v) + '</div></div>';
    }).join('') + '<div class="fx-op">=</div>' +
      '<div class="fx" style="flex:1 1 120px;border-color:rgba(224,164,74,.35);background:rgba(224,164,74,.08)">' +
      '<div class="fx-k">' + esc(T('resPerShort')) + '</div><div class="fx-v" style="color:#e5b85c">' + num(per, 3) + '</div></div>';

    $('#rPer').textContent = num(per, 3);
    $('#rCntK').textContent = interp(T('resCnt'), { n: target });
    $('#rCnt').textContent = isNaN(times) ? '—' : num(times, 2);
    $('#calcNote').innerHTML = state_lang === 'en'
      ? 'Coefficient ' + num(coef) + ' comes from the "' + esc(QUALS.indexOf(qual) + 1) +
        ' quality × ' + esc(lvl) + '" cell above; PE-BOX count is ' + pebox +
        ' by abnormality level (ZAYIN 7 / TETH 8 / HE 12 / WAW 16 / ALEPH 23).<br>' +
        'This uses expected values, so a single work will vary. Use it for order-of-magnitude planning only.'
      : '工作系数 ' + num(coef) + ' 来自上表「' + esc(QUALS.indexOf(qual) + 1) + ' 级品质 × ' + esc(lvl) +
        '」交叉格；PE-BOX 数按异想体等级取 ' + pebox + '（ZAYIN 7 / TETH 8 / HE 12 / WAW 16 / ALEPH 23）。<br>' +
        '本估算用的是期望值，实际单次工作会有偏差，只适合做加班量的量级参考。';

    var mx = '<thead><tr><th>' + esc(T('mxHead')) + '</th>' +
      C.danger.map(function (d) { return '<th>' + esc(d) + '</th>'; }).join('') + '</tr></thead><tbody>';
    QUALS.forEach(function (q) {
      mx += '<tr><th>' + esc(q) + '</th>' + C.danger.map(function (d) {
        var on = (q === qual && d === lvl);
        return '<td class="' + (on ? 'on' : '') + '">' + num(CALC.grid[q][d]) + '</td>';
      }).join('') + '</tr>';
    });
    $('#mx').innerHTML = mx + '</tbody>';

    $('#techNote').innerHTML = tech
      ? interp(T('techOn'), {}) : T('techOff');
  }

  /* ====================================================== 说明页 */
  function renderHelp() {
    var doc = I18N[state_lang].doc || I18N.zh.doc;
    $('#docHead').innerHTML = T('helpDocHead')
      .map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('');
    $('#docBody').innerHTML = doc.map(function (r) {
      return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>';
    }).join('');

    var lg = D.meta.legends || {};
    var names = { D: T('g.mgmt'), E: T('g.wgrade'), F: T('g.agrade') };
    $('#legend').innerHTML = ['D', 'E', 'F'].map(function (k) {
      return '<div class="lg"><h4>' + esc(names[k]) + '</h4><p>' + nl(lg[k] || '') + '</p></div>';
    }).join('');

    $('#notice').innerHTML = nl(CALC.notice);
  }

  /* ====================================================== 语言切换 */
  function applyLang(lang) {
    state_lang = (lang === 'en') ? 'en' : 'zh';
    try { localStorage.setItem('lobo-lang', state_lang); } catch (e) { /* 无痕模式忽略 */ }

    document.documentElement.lang = state_lang === 'en' ? 'en' : 'zh-CN';
    document.title = T('docTitle');
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', T('docDesc'));

    $$('[data-i18n]').forEach(function (el) { el.textContent = T(el.dataset.i18n); });
    $$('[data-i18n-ph]').forEach(function (el) { el.placeholder = T(el.dataset.i18nPh); });
    $$('[data-i18n-attr]').forEach(function (el) {
      var parts = el.dataset.i18nAttr.split(':');
      el.setAttribute(parts[0], T(parts[1]));
    });
    $$('.lang-b').forEach(function (b) {
      b.classList.toggle('is-on', b.dataset.lang === state_lang);
    });

    $('#brandSub').innerHTML = esc(interp(T('sub'), { n: ITEMS.length })) +
      ' <code>' + esc(state_lang === 'en' ? '异想体推荐表' : '异想体推荐表') + '</code>';
    // 页脚：直接拼 HTML，避免「先转义再替换标签」把标签当文本输出
    $('#foot2').innerHTML = esc(T('foot2').split('{n}')[0]) +
      '<b>' + ITEMS.length + '</b>' + esc(T('foot2').split('{n}')[1] || '');
    $('#foot3').innerHTML =
      esc(T('foot3')) + '<b>' + esc(SRC.author || '—') + '</b>' +
      esc(T('foot3b2')) +
      ' <a id="footSheet" href="' + esc(SRC.sheet || '#') + '" target="_blank" rel="noopener">' +
      esc(T('footSheet')) + '</a>' + esc(T('footSep')) +
      ' <a id="footWiki" href="' + esc(SRC.wiki || '#') + '" target="_blank" rel="noopener">' +
      esc(T('footWiki')) + '</a>.';

    renderSortMenu();
    syncSortUI();
    renderFilters();
    render();
    renderCalc();
    renderHelp();
  }

  /* ====================================================== 启动 */
  function init() {
    fillSelect($('#qual'), QUALS, 'Ⅳ');
    fillSelect($('#lvl'), C.danger, 'ALEPH');
    fillSelect($('#target'), CALC.targets, String(CALC.targetDefault));

    ['#tech', '#qual', '#lvl', '#target'].forEach(function (s) {
      $(s).addEventListener('change', renderCalc);
    });
    $$('.lang-b').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.dataset.lang !== state_lang) applyLang(b.dataset.lang);
      });
    });

    var saved = 'zh';
    try { saved = localStorage.getItem('lobo-lang') || 'zh'; } catch (e) { /* 忽略 */ }
    applyLang(saved);
  }

  init();
})();
