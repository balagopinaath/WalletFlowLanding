import "../css/style.css";
import googlePlay from "../assets/google-play.png";

(function () {
  "use strict";
  var reduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- icons ---------- */
  var IC = {
    bank: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 2 8.6h20L12 3zM4.5 10h2.6v7H4.5zM9.5 10h2.6v7H9.5zM14.4 10H17v7h-2.6zM19.4 10H22v7h-2.6zM2.5 19h19v2.4h-19z"/></svg>',
    card: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 9.5h19"/></svg>',
    trendup:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 16 9 10 13 14 21 6"/><polyline points="15 6 21 6 21 12"/></svg>',
    trenddown:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 8 9 14 13 10 21 18"/><polyline points="21 12 21 18 15 18"/></svg>',
    transfer:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13"/><path d="M14 5l3 3-3 3"/><path d="M20 16H7"/><path d="M10 13l-3 3 3 3"/></svg>',
    search:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21" stroke-linecap="round"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
    receipt:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21V3z"/><path d="M9 8h6M9 12h6" stroke-linecap="round"/></svg>',
    chart:
      '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="12" width="4" height="9" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="16" y="10" width="4" height="11" rx="1"/></svg>',
    walletnav:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="16.5" cy="13" r="1.6" fill="currentColor" stroke="none"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.65 2.5h4.7l.66 2.77c.5.19.97.44 1.4.73l2.7-.86 2.35 4.07-2.1 1.9a7 7 0 0 1 0 1.78l2.1 1.9-2.35 4.07-2.7-.86c-.43.29-.9.54-1.4.73l-.66 2.77h-4.7l-.66-2.77a6.6 6.6 0 0 1-1.4-.73l-2.7.86-2.35-4.07 2.1-1.9a7 7 0 0 1 0-1.78l-2.1-1.9 2.35-4.07 2.7.86c.43-.29.9-.54 1.4-.73zM12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/></svg>',
    qr: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/><rect x="18" y="14" width="2" height="2"/><rect x="14" y="18" width="2" height="2"/></svg>',
    contactless:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7 9a8 8 0 0 1 0 6"/><path d="M11 7a11 11 0 0 1 0 10"/><path d="M15 5a14 14 0 0 1 0 14"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M11 6l-6 6 6 6"/></svg>',
    caret:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>',
    pie: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9h-9V3z"/><path d="M14 2.2V10h7.8A9 9 0 0 0 14 2.2z" opacity=".55"/></svg>',
    bars: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="11" width="4" height="10" rx="1"/><rect x="10" y="5" width="4" height="16" rx="1"/><rect x="16" y="8" width="4" height="13" rx="1"/></svg>',
    heat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
    line: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 16 9 10 13 14 21 6"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9 12 4 2 9l10 5 10-5z"/><path d="M6 11.5V16c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4.5"/></svg>',
    film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M7 7V4M11 7V4M15 7V4M19 7V4"/><path d="M9.5 12.5l4 2-4 2z"/></svg>',
    fuel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15"/><path d="M3 21h12"/><path d="M15 10h2a2 2 0 0 1 2 2v3.5a1.5 1.5 0 0 0 3 0V9l-3-3"/><path d="M6 7h7"/></svg>',
    med: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3.5"/><path d="M12 8v8M8 12h8"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="3"/><path d="M11 18.5h2"/></svg>',
    wallet:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="3"/><circle cx="16.5" cy="12.5" r="1.5" fill="currentColor" stroke="none"/></svg>',
    cash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="2.5"/><circle cx="12" cy="12" r="2.6"/><path d="M5.5 9.5h.01M18.5 14.5h.01"/></svg>',
    coins:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><ellipse cx="12" cy="6.5" rx="7" ry="3"/><path d="M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/><path d="M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/></svg>',
    growth:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 15l4-6 3 3.5 3-4.5"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10" width="14" height="10" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  };

  /* ---------- play badge ---------- */
  var PLAY =
    '<img src="' +
    googlePlay +
    '" alt="" />' +
    '<span class="pt"><small>Get it on</small><strong>Google Play</strong></span>';
  document.querySelectorAll("[data-play-badge]").forEach(function (el) {
    el.innerHTML = PLAY;
  });

  /* ---------- INR from paise ---------- */
  function inr(p) {
    return (
      "₹" +
      (p / 100).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }

  /* ---------- faithful app screens ---------- */
  function bnav(active) {
    var items = [
      ["home", IC.grid, "Home"],
      ["activity", IC.receipt, "Activity"],
      ["reports", IC.chart, "Reports"],
      ["accounts", IC.walletnav, "Accounts"],
      ["settings", IC.gear, "Settings"],
    ];
    var h =
      '<div class="bnav">' +
      items
        .map(function (it) {
          var on = it[0] === active;
          return (
            '<div class="it' +
            (on ? " on" : "") +
            '"><span class="pillw">' +
            it[1] +
            "</span><span>" +
            it[2] +
            "</span></div>"
          );
        })
        .join("") +
      '</div><div class="gbar"></div>';
    return h;
  }
  function txnRow(icBg, icFg, icon, title, sub, amt, cls) {
    return (
      '<div class="txn"><span class="ic" style="background:' +
      icBg +
      ";color:" +
      icFg +
      '">' +
      icon +
      '</span><div><div class="t">' +
      title +
      '</div><div class="s">' +
      sub +
      '</div></div><div class="a ' +
      cls +
      '">' +
      amt +
      "</div></div>"
    );
  }

  var S = {};
  S.home =
    '<div class="sbar"><span>10:53</span><span>●●</span></div><div class="sbody">' +
    '<div class="scard teal"><div class="kick"><i></i>TOTAL ASSETS</div><div class="bigamt">₹40,740.00</div>' +
    '<div class="io"><div class="c"><div class="l">' +
    IC.trendup +
    'Income</div><div class="v">₹41,250.00</div></div><div class="sep"></div>' +
    '<div class="c"><div class="l">' +
    IC.trenddown +
    'Expense</div><div class="v">₹12,010.00</div></div></div></div>' +
    '<div class="tiles"><div class="scard stile"><i class="d" style="background:var(--green)"></i><div class="v">₹29,240.00</div><div class="l">Net savings</div></div>' +
    '<div class="scard stile"><i class="d" style="background:var(--blue)"></i><div class="v">2</div><div class="l">Accounts</div></div></div>' +
    '<div class="srow"><b>Accounts</b><a>See all</a></div>' +
    '<div class="accts"><div class="scard acct"><div class="top"><span class="ic" style="background:rgba(198,127,46,.25);color:#d98b3a">' +
    IC.bank +
    '</span><span class="ty">Bank</span></div><div class="nm">ICICI</div><div class="bl">₹39,290.00</div></div>' +
    '<div class="scard acct"><div class="top"><span class="ic" style="background:rgba(114,136,206,.25);color:#8fa4e0">' +
    IC.card +
    '</span><span class="ty">Wallet</span></div><div class="nm">Wallet</div><div class="bl">₹1,450.00</div></div></div>' +
    '<div class="scard bud"><div class="top"><b>Monthly budget</b><span class="pct">48%</span></div><div class="trk"><div class="fil"></div></div><div class="row"><span>₹12,010.00 spent</span><span>₹12,990.00 left</span></div></div>' +
    '<div class="srow"><b>Recent activity</b><a>See all</a></div>' +
    '<div class="scard">' +
    txnRow(
      "rgba(79,179,166,.18)",
      "#4fb3a6",
      IC.cap,
      "Udemy Purchase",
      "ICICI",
      "−₹650.00",
      "neg",
    ) +
    "</div>" +
    '</div><div class="fab">' +
    IC.plus +
    "</div>" +
    bnav("home");

  S.activity =
    '<div class="sbar"><span>10:54</span><span>●●</span></div><div class="sbody">' +
    '<div class="scard search">' +
    IC.search +
    "<span>Search amount, merchant, account…</span></div>" +
    '<div class="srow"><b>Today</b><span class="hm">−₹650.00</span></div>' +
    '<div class="scard">' +
    txnRow(
      "rgba(79,179,166,.18)",
      "#4fb3a6",
      IC.cap,
      "Udemy Purchase",
      "ICICI",
      "−₹650.00",
      "neg",
    ) +
    "</div>" +
    '<div class="srow"><b>This Week</b><span class="hm">−₹260.00</span></div>' +
    '<div class="scard stack">' +
    txnRow(
      "rgba(213,88,124,.18)",
      "#e07a9b",
      IC.film,
      "Spiderman Movie",
      "ICICI",
      "−₹360.00",
      "neg",
    ) +
    txnRow(
      "rgba(208,134,58,.18)",
      "#d0863a",
      IC.fuel,
      "Fuel",
      "ICICI",
      "−₹500.00",
      "neg",
    ) +
    txnRow(
      "rgba(238,149,144,.16)",
      "#ee9590",
      IC.med,
      "Medical",
      "Wallet",
      "−₹650.00",
      "neg",
    ) +
    txnRow(
      "rgba(127,214,160,.16)",
      "#7fd6a0",
      IC.trendup,
      "SIP Return",
      "ICICI",
      "+₹1,250.00",
      "pos",
    ) +
    "</div>" +
    '<div class="srow"><b>This Month</b><span class="hm">+₹29,240.00</span></div>' +
    '<div class="scard stack">' +
    txnRow(
      "rgba(147,169,221,.16)",
      "#93a9dd",
      IC.transfer,
      "ATM Withdrawal",
      "ICICI → Wallet",
      "₹1,200.00",
      "tr",
    ) +
    txnRow(
      "rgba(147,169,221,.16)",
      "#93a9dd",
      IC.phone,
      "Mobile Recharge",
      "ICICI",
      "−₹750.00",
      "neg",
    ) +
    "</div>" +
    '</div><div class="fab">' +
    IC.plus +
    "</div>" +
    bnav("activity");

  S.reports =
    '<div class="sbar"><span>10:54</span><span>●●</span></div><div class="sbody">' +
    '<div class="rpills"><span class="rpill on">This month</span><span class="rpill">Last 7 days</span><span class="rpill">Last month</span><span class="rpill">This FY</span></div>' +
    '<div class="fchips"><span class="fchip">Type: All ' +
    IC.caret +
    '</span><span class="fchip">Account: All ' +
    IC.caret +
    "</span></div>" +
    '<div class="io2"><div class="scard"><div class="l">Income</div><div class="v g">₹41,250.00</div></div><div class="scard"><div class="l">Expense</div><div class="v r">₹12,010.00</div></div></div>' +
    '<div class="scard ncf"><b>Net cash flow</b><span class="a pos">+₹29,240.00</span></div>' +
    '<div class="segrow"><b>Spending trend</b><span class="seg"><b class="on">' +
    IC.line +
    "Line</b><b>" +
    IC.bars +
    "Bar</b><b>" +
    IC.heat +
    "Heatmap</b></span></div>" +
    '<div class="scard chartcard"><div class="hint">Tap a point for details</div>' +
    '<div class="chart"><span class="ylab" style="top:0">₹8,500.00</span><span class="ylab" style="top:42%">₹4,250.00</span><span class="ylab" style="bottom:0">₹0.00</span>' +
    '<svg viewBox="0 0 260 100" preserveAspectRatio="none"><path d="M0,94 L40,94 L78,94 L96,12 L114,84 L133,78 L152,94 L171,94 L190,80 L209,87 L228,94 L250,78 L250,100 L0,100 Z" fill="rgba(60,58,52,.9)"/><path d="M0,94 L40,94 L78,94 L96,12 L114,84 L133,78 L152,94 L171,94 L190,80 L209,87 L228,94 L250,78" fill="none" stroke="var(--salmon)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/></svg></div>' +
    '<div class="xlab"><span>1</span><span>3</span><span>6</span><span>8</span><span>11</span><span>14</span></div>' +
    '<div class="strip"><div><b>₹12,010.00</b><span>Total</span></div><div><b>₹857.85</b><span>Daily avg</span></div><div><b>₹8,500.00</b><span>Highest day</span></div></div></div>' +
    '<div class="segrow"><b>Spending by category</b><span class="seg"><b class="on">' +
    IC.pie +
    "Pie</b><b>" +
    IC.bars +
    "Bars</b></span></div>" +
    '</div><div class="fab">' +
    IC.plus +
    "</div>" +
    bnav("reports");

  S.accounts =
    '<div class="sbar"><span>10:54</span><span>●●</span></div><div class="sbody">' +
    '<div class="scard teal"><div class="kick" style="letter-spacing:.02em;text-transform:none">Across all accounts</div><div class="bigamt">₹40,740.00</div></div>' +
    '<div class="srow"><b>Your accounts</b><span class="addpill">＋ Add</span></div>' +
    '<div class="bankcard orange"><div class="bcard-top"><span class="chipr"></span>' +
    IC.contactless +
    '</div><div class="dots">•••• &nbsp;•••• &nbsp;•••• &nbsp;••••</div><div class="bcard-bot"><div><div class="nm">ICICI</div><div class="ty">Bank</div></div><div class="bl">₹39,290.00</div></div><span class="wm">' +
    IC.bank +
    "</span></div>" +
    '<div class="bankcard blue"><div class="bcard-top"><span class="chipr"></span>' +
    IC.qr +
    '</div><div class="dots">•••• &nbsp;••••</div><div class="bcard-bot"><div><div class="nm">WALLET</div><div class="ty">Wallet</div></div><div class="bl">₹1,450.00</div></div><span class="wm">' +
    IC.card +
    "</span></div>" +
    '</div><div class="fab">' +
    IC.plus +
    "</div>" +
    bnav("accounts");

  S.newacct =
    '<div class="sbar"><span>10:55</span><span>●●</span></div><div class="sbody">' +
    '<div class="shead">' +
    IC.back +
    "<b>New account</b></div>" +
    '<div class="scard teal prev"><div class="dots">•••• &nbsp;•••• &nbsp;•••• &nbsp;••••</div><div class="nm">ACCOUNT NAME</div><div class="ty">Bank</div><span class="wm">' +
    IC.bank +
    "</span></div>" +
    '<div class="inp">Account name</div>' +
    '<div class="inp">Opening balance</div>' +
    '<div class="lblb">Account type</div>' +
    '<div class="tchips"><span class="tchip">Cash</span><span class="tchip on">Bank</span><span class="tchip">Savings</span><span class="tchip">Current</span><span class="tchip">Credit Ca…</span></div>' +
    '<div class="lblb">Icon</div>' +
    '<div class="iconrow"><span class="on">' +
    IC.bank +
    "</span><span>" +
    IC.cash +
    "</span><span>" +
    IC.wallet +
    "</span><span>" +
    IC.card +
    "</span><span>" +
    IC.coins +
    "</span><span>" +
    IC.growth +
    "</span></div>" +
    '<div class="lblb">Color</div>' +
    '<div class="colorrow"><i class="on" style="background:#15564b">✓</i><i style="background:#2e8b62"></i><i style="background:#4a7dbd"></i><i style="background:#a678e0"></i><i style="background:#d0863a"></i><i style="background:#c05a52"></i><i style="background:#d5587c"></i></div>' +
    '<div class="inp ta">Notes (optional)</div>' +
    '<div class="savebtn">Save account</div>' +
    '</div><div class="gbar"></div>';

  document.getElementById("heroDevice").innerHTML =
    '<div class="screen">' + S.home + "</div>";

  /* ---------- showcase rail ---------- */
  var frames = [
    ["home", "Home", "total assets · budget · activity"],
    ["activity", "Activity", "grouped history · search"],
    ["reports", "Reports", "line / bar / heatmap"],
    ["accounts", "Accounts", "realistic card art"],
    ["newacct", "New account", "live card preview"],
  ];
  var rail = document.getElementById("rail");
  rail.innerHTML = frames
    .map(function (f, i) {
      return (
        '<div class="frame" id="fr' +
        i +
        '"><div class="device"><div class="screen">' +
        S[f[0]] +
        '</div></div><div class="frame-cap"><b>' +
        f[1] +
        "</b><span>" +
        f[2] +
        "</span></div></div>"
      );
    })
    .join("");
  var tabs = document.getElementById("scrTabs");
  tabs.innerHTML = frames
    .map(function (f, i) {
      return '<button data-i="' + i + '">' + f[1] + "</button>";
    })
    .join("");
  tabs.querySelectorAll("button").forEach(function (b, i) {
    if (i === 0) b.classList.add("on");
    b.addEventListener("click", function () {
      tabs.querySelectorAll("button").forEach(function (x) {
        x.classList.remove("on");
      });
      b.classList.add("on");
      var fr = document.getElementById("fr" + b.getAttribute("data-i"));
      rail.scrollTo({
        left: fr.offsetLeft - rail.offsetWidth / 2 + fr.offsetWidth / 2,
        behavior: reduce ? "auto" : "smooth",
      });
    });
  });
  /* drag to scroll */
  var isDown = false,
    startX = 0,
    startL = 0;
  rail.addEventListener("pointerdown", function (e) {
    isDown = true;
    startX = e.clientX;
    startL = rail.scrollLeft;
    rail.classList.add("dragging");
  });
  window.addEventListener("pointermove", function (e) {
    if (!isDown) return;
    rail.scrollLeft = startL - (e.clientX - startX);
  });
  window.addEventListener("pointerup", function () {
    isDown = false;
    rail.classList.remove("dragging");
  });

  /* ---------- marquee ---------- */
  var pills = [
    "Offline-first",
    "No login",
    "SMS quick-add",
    "Paise-exact math",
    "Line · Bar · Heatmap reports",
    "Streak heatmap",
    "Resizable widget · 5 layouts",
    "Realistic card art",
    "Two-level categories",
    "~190 presets",
    "AMOLED black",
    "Glassmorphism",
    "Biometric lock",
    "CSV + .xlsx",
    "PDF statements",
    "Month-end-safe recurring",
  ];
  var track = document.getElementById("marquee");
  var mhtml = pills
    .map(function (p) {
      return '<span class="mpill"><span class="star">◆</span>' + p + "</span>";
    })
    .join("");
  track.innerHTML = mhtml + mhtml;

  /* ---------- nav / menu ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 12);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  var menuBtn = document.getElementById("menuBtn"),
    navLinks = document.getElementById("navLinks"),
    navOverlay = document.getElementById("navOverlay");
  function closeMenu() {
    navLinks.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    navOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }
  menuBtn.addEventListener("click", function () {
    var o = navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open", o);
    menuBtn.setAttribute("aria-expanded", o ? "true" : "false");
    navOverlay.classList.toggle("open", o);
    document.body.style.overflow = o ? "hidden" : "";
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeMenu();
  });
  navOverlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- reveal ---------- */
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.14 },
  );
  document.querySelectorAll(".reveal").forEach(function (el) {
    io.observe(el);
  });

  function tween(el, from, to, dur, fmt) {
    if (reduce) {
      el.innerHTML = fmt(to);
      return;
    }
    var st = null;
    function step(ts) {
      if (!st) st = ts;
      var t = Math.min((ts - st) / dur, 1),
        e = 1 - Math.pow(1 - t, 3);
      el.innerHTML = fmt(from + (to - from) * e);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* budget fills + stats */
  var fillIO = new IntersectionObserver(
    function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) {
          var f = en.target;
          f.style.width = f.getAttribute("data-fill") + "%";
          fillIO.unobserve(f);
        }
      });
    },
    { threshold: 0.5 },
  );
  document.querySelectorAll(".fill").forEach(function (f) {
    fillIO.observe(f);
  });
  var statIO = new IntersectionObserver(
    function (es) {
      es.forEach(function (en) {
        if (en.isIntersecting) {
          var el = en.target,
            t = parseInt(el.getAttribute("data-count"), 10),
            s = el.getAttribute("data-suffix") || "",
            fx = el.getAttribute("data-fixed");
          if (fx !== null) {
            el.innerHTML = fx + (s ? "<small>" + s + "</small>" : "");
          } else
            tween(el, 0, t, 1300, function (v) {
              return Math.round(v) + (s ? "<small>" + s + "</small>" : "");
            });
          statIO.unobserve(el);
        }
      });
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll(".stat .n").forEach(function (n) {
    statIO.observe(n);
  });

  /* ---------- bento interactivity ---------- */
  if (!reduce) {
    document.querySelectorAll(".tile").forEach(function (t) {
      t.addEventListener("pointermove", function (e) {
        var r = t.getBoundingClientRect();
        var nx = (e.clientX - r.left) / r.width;
        var ny = (e.clientY - r.top) / r.height;
        t.style.setProperty("--mx", (nx * 100).toFixed(1) + "%");
        t.style.setProperty("--my", (ny * 100).toFixed(1) + "%");
        t.style.setProperty("--ry", ((nx - 0.5) * 7).toFixed(2) + "deg");
        t.style.setProperty("--rx", ((0.5 - ny) * 7).toFixed(2) + "deg");
      });
      t.addEventListener("pointerleave", function () {
        t.style.setProperty("--rx", "0deg");
        t.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* reports chart switcher */
  var chartVals = [
      260, 210, 8500, 180, 340, 290, 410, 150, 380, 310, 460, 220, 170, 130,
    ],
    chartMax = 8500,
    chartType = "line",
    chartEl = document.getElementById("bentoChart"),
    seg = document.getElementById("bentoSeg");
  function chartSvg() {
    var W = 260,
      H = 90,
      PX = 8,
      PY = 10,
      n = chartVals.length,
      out = "";
    function y(v) {
      return (H - PY - (v / chartMax) * (H - 2 * PY)).toFixed(1);
    }
    if (chartType === "line") {
      var x = function (i) {
          return (PX + (i * (W - 2 * PX)) / (n - 1)).toFixed(1);
        },
        line = chartVals
          .map(function (v, i) {
            return (i ? "L" : "M") + x(i) + "," + y(v);
          })
          .join(" "),
        area = line + " L" + (W - PX) + "," + H + " L" + PX + "," + H + " Z";
      out =
        '<path d="' +
        area +
        '" fill="rgba(238,149,144,.14)"/><path d="' +
        line +
        '" fill="none" stroke="var(--salmon)" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>';
    } else if (chartType === "bar") {
      var slot = (W - 2 * PX) / n,
        bw = slot * 0.6;
      out = chartVals
        .map(function (v, i) {
          var top = parseFloat(y(v)),
            h = H - PY - top;
          return (
            '<rect x="' +
            (PX + i * slot + (slot - bw) / 2).toFixed(1) +
            '" y="' +
            top +
            '" width="' +
            bw.toFixed(1) +
            '" height="' +
            h.toFixed(1) +
            '" rx="3" fill="var(--salmon)"/>'
          );
        })
        .join("");
    } else {
      var cols = 7,
        rows = 2,
        gap = 4,
        cw = (W - 2 * PX - gap * (cols - 1)) / cols,
        ch = (H - 2 * PY - gap * (rows - 1)) / rows;
      out = "";
      for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
          var v = chartVals[r * cols + c] || 0,
            t = v / chartMax,
            fill =
              t > 0.4
                ? "var(--salmon)"
                : t > 0.18
                  ? "rgba(238,149,144,.75)"
                  : t > 0.05
                    ? "rgba(238,149,144,.45)"
                    : "rgba(238,149,144,.18)";
          out +=
            '<rect x="' +
            (PX + c * (cw + gap)).toFixed(1) +
            '" y="' +
            (PY + r * (ch + gap)).toFixed(1) +
            '" width="' +
            cw.toFixed(1) +
            '" height="' +
            ch.toFixed(1) +
            '" rx="4" fill="' +
            fill +
            '"/>';
        }
      }
    }
    chartEl.innerHTML =
      '<svg viewBox="0 0 260 90" preserveAspectRatio="none">' + out + "</svg>";
  }
  if (chartEl && seg) {
    chartSvg();
    seg.addEventListener("click", function (e) {
      var span = e.target.closest("span");
      if (!span || !span.getAttribute("data-type")) return;
      seg.querySelectorAll("span").forEach(function (s) {
        s.classList.remove("on");
      });
      span.classList.add("on");
      chartType = span.getAttribute("data-type");
      chartSvg();
      chartEl.classList.remove("swap");
      void chartEl.offsetWidth;
      chartEl.classList.add("swap");
    });
  }

  /* sms quick-add replay */
  var smsvis = document.getElementById("smsvis");
  function replaySms() {
    smsvis.classList.remove("playing");
    void smsvis.offsetWidth;
    smsvis.classList.add("playing");
  }
  if (smsvis) {
    smsvis.addEventListener("click", replaySms);
    smsvis.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") replaySms();
    });
  }

  /* widget size cycle */
  var wvis = document.getElementById("wvis"),
    wcap = document.getElementById("wcap"),
    wcaps = [
      "1×1 · corner tile",
      "2×1 · header + figure",
      "2×2+ · legend + donut",
    ];
  function cycleWidget() {
    var ws = wvis.querySelectorAll(".w"),
      cur = 0,
      next;
    ws.forEach(function (w, i) {
      if (w.classList.contains("on")) cur = i;
    });
    next = (cur + 1) % ws.length;
    ws.forEach(function (w) {
      w.classList.remove("on");
    });
    ws[next].classList.add("on");
    wcap.textContent = wcaps[next];
  }
  if (wvis) {
    wvis.addEventListener("click", cycleWidget);
    wvis.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") cycleWidget();
    });
  }

  /* appearance: accents + toggles */
  var appear = document.getElementById("tileAppear");
  if (appear) {
    var initAcc = appear.querySelector(".accents > i.on");
    if (initAcc)
      appear.style.setProperty("--acc", initAcc.getAttribute("data-color"));
    appear.querySelectorAll(".accents > i").forEach(function (c) {
      c.addEventListener("click", function () {
        appear.querySelectorAll(".accents > i").forEach(function (x) {
          x.classList.remove("on");
        });
        c.classList.add("on");
        appear.style.setProperty("--acc", c.getAttribute("data-color"));
        c.classList.remove("pop");
        void c.offsetWidth;
        c.classList.add("pop");
      });
    });
    appear.querySelectorAll(".tgl > span").forEach(function (label) {
      label.addEventListener("click", function () {
        var sw = label.querySelector("[data-tgl]"),
          k = sw.getAttribute("data-tgl");
        sw.classList.toggle("off");
        appear.classList.toggle(k, !sw.classList.contains("off"));
      });
    });
  }

  /* ---------- demo ---------- */
  var INIT = { bank: 2000000, wallet: 200000, inc: 0, exp: 0 },
    st = Object.assign({}, INIT);
  var vBank = document.getElementById("vBank"),
    vWallet = document.getElementById("vWallet"),
    vIn = document.getElementById("vIn"),
    vOut = document.getElementById("vOut"),
    ruleText = document.getElementById("ruleText"),
    amtInput = document.getElementById("amtInput");
  function setAmt(d) {
    var v = parseInt((amtInput.value || "0").replace(/[^0-9]/g, ""), 10) || 0;
    amtInput.value = Math.max(50, v + d);
  }
  document.getElementById("amtPlus").addEventListener("click", function () {
    setAmt(50);
  });
  document.getElementById("amtMinus").addEventListener("click", function () {
    setAmt(-50);
  });
  amtInput.addEventListener("input", function () {
    amtInput.value = (amtInput.value || "").replace(/[^0-9]/g, "");
  });
  function flash(id) {
    var el = document.getElementById(id);
    el.classList.remove("flash");
    void el.offsetWidth;
    el.classList.add("flash");
  }
  function render() {
    vBank.textContent = inr(st.bank);
    vWallet.textContent = inr(st.wallet);
    vIn.textContent = inr(st.inc);
    vOut.textContent = inr(st.exp);
  }
  render();
  document.querySelectorAll(".demo-btns button").forEach(function (b) {
    b.addEventListener("click", function () {
      var amt =
        (parseInt((amtInput.value || "0").replace(/[^0-9]/g, ""), 10) || 0) *
        100;
      if (amt <= 0) {
        ruleText.textContent = "Enter a valid amount first.";
        return;
      }
      var act = b.getAttribute("data-act");
      if (act === "in") {
        st.bank += amt;
        st.inc += amt;
        flash("acctBank");
        ruleText.innerHTML =
          "＋ Income of <b>" +
          inr(amt) +
          "</b> added to Bank. Balance and month income both rise.";
      } else if (act === "out") {
        if (amt > st.bank) {
          ruleText.textContent =
            "Not enough in Bank for " +
            inr(amt) +
            ". WalletFlow would warn you here.";
          return;
        }
        st.bank -= amt;
        st.exp += amt;
        flash("acctBank");
        ruleText.innerHTML =
          "－ Expense of <b>" +
          inr(amt) +
          "</b> left Bank. Balance drops; month expense rises.";
      } else {
        if (amt > st.bank) {
          ruleText.textContent =
            "Bank can't transfer more than it holds (" + inr(st.bank) + ").";
          return;
        }
        st.bank -= amt;
        st.wallet += amt;
        flash("acctBank");
        flash("acctWallet");
        ruleText.innerHTML =
          "⇄ Transfer of <b>" +
          inr(amt) +
          "</b>: Bank → Wallet. Income & expense stay <b>unchanged</b> — moving your own money isn't spending.";
      }
      render();
    });
  });
  document.getElementById("demoReset").addEventListener("click", function () {
    st = Object.assign({}, INIT);
    render();
    ruleText.textContent =
      "Ledger reset to Bank " +
      inr(INIT.bank) +
      " · Wallet " +
      inr(INIT.wallet) +
      ".";
  });

  /* ---------- FAQ ---------- */
  var faqs = [
    {
      q: "Does it really work with zero internet?",
      a: "Yes. Room and DataStore hold everything on the device. There is no cloud sync, no login and no network call anywhere in the app — use it on a flight or in a basement and nothing changes.",
    },
    {
      q: "How is my balance always exact?",
      a: "Money is stored as integer minor units (paise), so there is no floating-point rounding. Every transaction belongs to an account, and balances are derived by summing each transaction's signed effect in SQL — income and transfers-in add, expenses and transfers-out subtract — added to the opening balance and exposed as a live Flow.",
    },
    {
      q: "Can I add a transaction from a bank SMS?",
      a: "Long-press a bank or UPI message in your messaging app and share it to WalletFlow. The parser opens Add Transaction prefilled with a best-effort amount, direction, payee and date, keeping the original message in Notes. No SMS permission is involved — sharing is user-initiated, and every field stays editable.",
    },
    {
      q: "What happens to a transfer in reports?",
      a: 'A transfer moves money between two accounts and is never counted as income or expense. Try the interactive demo above — hit "Bank → Wallet" and watch the month totals stay put.',
    },
    {
      q: "How deep does categorization go?",
      a: "Two levels: top-level groups with optional subcategories (Income → Salary / Bonus / Interest, Subscription → Mobile / TV / Internet). A browsable catalog ships with 30+ groups and ~190 presets you can add in one tap, and everything — seeded, preset or custom — can be edited, regrouped or deleted.",
    },
    {
      q: "Can I back up and move to a new phone?",
      a: "Any time. Export every account, category and transaction to CSV or a real .xlsx built from scratch, and restore on another device — accounts and categories are matched by name, transactions added fresh. No subscription wall.",
    },
    {
      q: "Is the biometric lock secure?",
      a: "It uses Android's biometric gate over the whole app, re-engages whenever the app leaves the foreground, and the toggle refuses to turn on if no device credential is enrolled. Your data still never leaves the device.",
    },
  ];
  var faqList = document.getElementById("faqList");
  faqList.innerHTML = faqs
    .map(function (f, i) {
      return (
        '<div class="faq"><button type="button" aria-expanded="false" aria-controls="a' +
        i +
        '">' +
        f.q +
        '<span class="pm">+</span></button><div class="ans" id="a' +
        i +
        '"><p>' +
        f.a +
        "</p></div></div>"
      );
    })
    .join("");
  faqList.querySelectorAll(".faq button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.parentElement,
        ans = item.querySelector(".ans"),
        open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      ans.style.maxHeight = open ? ans.scrollHeight + "px" : "0";
    });
  });

  /* ---------- modal ---------- */
  var modalOverlay = document.getElementById("modalOverlay");
  var modalTitle = document.getElementById("modalTitle");
  var modalBody = document.getElementById("modalBody");
  var modalClose = document.getElementById("modalClose");

  var modalContent = {
    readme: {
      title: "Source & README",
      summary:
        "<h4>Summary</h4>" +
        "<p><strong>WalletFlow</strong> is an offline-first personal finance manager for Android. No account, no login, no network required — every rupee lives on the device, and every transaction belongs to a real account so balances are always exact.</p>" +
        "<p>Built with Kotlin, Jetpack Compose, Material 3, Room, Navigation Compose, DataStore, Glance (widget), and androidx.biometric (app lock).</p>" +
        "<ul>" +
        "<li>Every transaction belongs to an account — expense reduces, income increases, transfer moves between accounts.</li>" +
        "<li>Money stored as integer minor units (paise) — no floating-point drift.</li>" +
        "<li>Full architecture documented: ui/, domain/, data/, util/, notification/, widget/ layers.</li>" +
        "<li>Pure-domain logic passes a test suite covering the headline balance-engine scenario.</li>" +
        "</ul>",
      body:
        "<h2>WalletFlow</h2>" +
        "<p>An offline-first personal finance manager for Android. No account, no login, no network required — every rupee lives on the device, and every transaction belongs to a real account so your balances are always exact.</p>" +
        "<p>Built with <strong>Kotlin</strong>, <strong>Jetpack Compose</strong>, <strong>Material 3</strong>, <strong>Room</strong>, <strong>Navigation Compose</strong>, <strong>DataStore</strong>, <strong>Glance</strong> (for the home-screen widget), and <strong>androidx.biometric</strong> (for the app lock).</p>" +
        "<hr>" +
        "<h3>The core idea</h3>" +
        "<p>The flaw WalletFlow fixes: most simple expense trackers record what you spent but never subtract it from where the money actually came from, so they can't tell you how much you really have left.</p>" +
        "<p>In WalletFlow:</p>" +
        "<ul>" +
        "<li>Every transaction <strong>belongs to an account</strong>.</li>" +
        "<li>An <strong>expense</strong> reduces its account; <strong>income</strong> increases it.</li>" +
        "<li>A <strong>transfer</strong> moves money between two accounts and never counts as income or expense.</li>" +
        "<li>Balances are always <strong>derived from transactions</strong> — never edited by hand.</li>" +
        "</ul>" +
        "<p>Money is stored as integer <strong>minor units</strong> (paise/cents), so balances never drift from floating-point rounding.</p>" +
        "<hr>" +
        "<h3>Running it</h3>" +
        "<p>This project is a standard Gradle Android app. You need <strong>Android Studio</strong> (Koala / 2024.1+) or the Android command-line tools with an SDK for API 34.</p>" +
        "<pre><code>gradle wrapper --gradle-version 8.9\n./gradlew assembleDebug</code></pre>" +
        "<p>Or simply open the folder in Android Studio and let it sync — it will create the wrapper and download dependencies automatically. Then Run.</p>" +
        "<ul>" +
        "<li>Min SDK: 28 (Android 9.0)</li>" +
        "<li>Target/Compile SDK: 37</li>" +
        "<li>JDK: 17</li>" +
        "</ul>" +
        "<hr>" +
        "<h3>Architecture</h3>" +
        "<p>A small, explicit layering — no DI framework, since the app is light enough that manual wiring (<code>AppContainer</code>) is clearer and starts faster.</p>" +
        '<pre><code>ui/            Compose screens + WalletViewModel (StateFlow-driven)\n  dashboard/   Total-assets hero, account carousel, recent activity, budget\n  transactions/ Grouped history, search, add/edit form, trash\n  accounts/    Account list, detail, add/edit, archived accounts\n  reports/     Period presets, custom range, trend charts, category breakdown\n  settings/    Budgets, goals, categories, reminders, import/export, PDF\n  onboarding/  First-launch carousel + per-screen spotlight\n  navigation/  NavHost with slide/fade transitions, context-aware FAB\n  components/  Reusable cards, chips, charts, badges\n  theme/       "Ledger ink and gold" Material 3 theme + selectable accents\ndomain/\n  model/       Money (minor-unit math), enums, UI models\n  engine/      BalanceEngine, RecurrenceEngine, SmsTransactionParser\ndata/\n  entity/      Room tables: Account, Transaction, Category, Budget, Goal\n  dao/         Queries incl. live per-account balance aggregation\n  db/          Room database + first-run seeding + reconciliation\n  repository/  FinanceRepository, SettingsStore\n  backup/      CSV + .xlsx reader/writer\n  export/      StatementPdfWriter (Android\'s PdfDocument, no library)\nutil/          Date range helpers, AppHaptics, TagUtils, ReceiptStore\nnotification/  Daily reminder, recurring check, goal celebration\nwidget/        Glance home-screen widget — 5 size-aware layouts</code></pre>' +
        "<h3>Why the balance is always right</h3>" +
        "<p><code>TransactionDao.observeAccountDelta</code> sums every transaction's signed effect on an account directly in SQL — income and transfers-in add, expenses and transfers-out subtract. The repository adds that delta to the account's opening balance and exposes it as a <code>Flow</code>, so any change anywhere updates every balance reactively.</p>" +
        "<p><code>BalanceEngine</code> holds the same rules in pure Kotlin (no Android), validating transactions before they're saved and computing running balances for the history view.</p>" +
        "<hr>" +
        "<h3>What's implemented</h3>" +
        "<ul>" +
        "<li>Dashboard with total assets, monthly income/expense, budget, and a quick-stats tile</li>" +
        "<li>Accounts: create / edit / archive / delete, realistic card art, multi-currency</li>" +
        "<li>Transactions: expense / income / transfer, account-linked, categories, notes, search, grouped history, trash</li>" +
        "<li>Add from a shared message: long-press a bank/UPI SMS, share to WalletFlow — prefills amount, direction, payee, date</li>" +
        "<li>Recurring transactions: daily/weekly/monthly/yearly, month-end-safe date math, silent background posting</li>" +
        "<li>Tags: chip-based entry with autocomplete, filter Transactions and Reports</li>" +
        "<li>Receipt photos: attach via camera or gallery, thumbnail in transaction row, full-screen preview</li>" +
        "<li>Savings goals: target amount for an account, progress is live balance, celebratory notification</li>" +
        "<li>Trash: soft-delete with restore and delete-forever; auto-purge after 7 days</li>" +
        "<li>Budgets: overall monthly + per-category, group budgets roll up, 80/90/100% color alerts</li>" +
        "<li>Reports: period presets, custom range, trend charts (line/bar/heatmap), category breakdown, activity streak heatmap</li>" +
        "<li>Categories: two-level hierarchy, 30+ groups, ~190 presets, fully editable and deletable</li>" +
        "<li>Daily reminder: pick a time, notification deep-links to Add Transaction, survives reboots</li>" +
        "<li>Import & Export: CSV or .xlsx backup/restore, matched by name</li>" +
        "<li>Statement (PDF): polished, shareable PDF for account or category over any period</li>" +
        "<li>Home-screen widget (Glance): resizable, 5 layouts, refresh + quick-add</li>" +
        "<li>Biometric lock: fingerprint / face / screen-lock gate, re-engages off-foreground</li>" +
        "<li>Haptic feedback: optional tick on toggles, double pulse on saves</li>" +
        "<li>Personalization: light/dark/system, 6 accents, AMOLED, glassmorphism, currency picker</li>" +
        "<li>App-wide polish: two-stage splash, slide/fade transitions, list animations, context-aware FAB</li>" +
        "<li>First-launch tour: onboarding carousel + contextual spotlight + per-screen first-visit highlights</li>" +
        "<li>All persisted locally with Room + DataStore; fully offline</li>" +
        "</ul>" +
        "<hr>" +
        "<h3>Verified</h3>" +
        "<p>The pure-domain logic (money math, the balance engine, validation rules) compiles and <strong>passes a test suite</strong> covering the headline scenario — Bank ₹20,000 dropping to ₹19,151 after three expenses, transfers moving money without affecting income/expense totals, and validation rejecting bad input.</p>" +
        "<hr>" +
        "<h3>Roadmap</h3>" +
        "<p>Carry-forward month rollover, cloud sync, OCR receipt scanning, and a net-worth dashboard remain on the roadmap.</p>",
    },
    release: {
      title: "Release Notes",
      summary:
        "<h4>Summary</h4>" +
        "<p><strong>WalletFlow v1.0</strong> — the initial public release. A fully offline-first personal finance manager for Android with account-linked transactions, realistic card art, balance derivation, and zero network dependency.</p>" +
        "<ul>" +
        "<li>Core ledger: expense / income / transfer with account-linked balance derivation.</li>" +
        "<li>Accounts: realistic bank/wallet card UI, multi-currency, archive support.</li>" +
        "<li>Reports: line, bar, and heatmap trend charts; category breakdown; streak heatmap.</li>" +
        "<li>Widget: 5-size Glance widget with quick-add and refresh.</li>" +
        "<li>Security: optional biometric lock with auto-re-engagement.</li>" +
        "<li>Backup: CSV and .xlsx export/import; PDF statement generation.</li>" +
        "</ul>",
      body: "",
    },
  };

  function openModal(key) {
    var data = modalContent[key];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalBody.innerHTML =
      '<div class="modal-summary">' +
      data.summary +
      "</div>" +
      (data.body ? '<hr class="modal-divider">' + data.body : "");
    modalOverlay.classList.add("open");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", function (e) {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalOverlay.classList.contains("open"))
      closeModal();
  });

  document.querySelectorAll("[data-modal]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      openModal(el.getAttribute("data-modal"));
    });
  });
})();
