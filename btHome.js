// ==UserScript==
// @name         BT之家
// @namespace    ziggy chen
// @license MIT
// @version      1.0
// @description  try to take over the world!
// @author       Ziggy chen
// @match        *://*.btbtt11.com/*
// @match        *://*.btbtt12.com/*
// @match        *://*.btbtt13.com/*
// @match        *://*.btbtt14.com/*
// @match        *://*.btbtt15.com/*
// @match        *://*.btbtt16.com/*
// @match        *://*.btbtt17.com/*
// @match        *://*.btbtt18.com/*
// @match        *://*.btbtt19.com/*
// @match        *://*.btbtt20.com/*
// @icon         https://www.btbtt15.com/favicon.ico
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";
  // 增加宽度
  GM_addStyle(".width {max-width:1500px !important; width:auto !important;}");

  // 删除左右两侧无法点击的遮罩
  document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
      document
        .querySelectorAll(".wrapper_bg_c.hidden-xs")
        .forEach((el) => el.remove());
    }
  };
})();
