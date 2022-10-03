// ==UserScript==
// @name         vue.js
// @namespace    ziggy chen
// @license MIT
// @version      1.2
// @description  vue.org script
// @author       Ziggy chen
// @match        *://*.vuejs.org/*
// @icon         https://v2.cn.vuejs.org/images/logo.svg
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";
  // banner 高度  0
  GM_addStyle("html:not(.banner-dismissed) {--vt-banner-height: 0px}");

  // 删除 banner 报错  使用 adguard 过滤banner广告
  // document.onreadystatechange = function () {
  //   if (document.readyState === "interactive") {
  //     const banner = document.querySelectorAll(".banner");
  //     banner.forEach((el) => {
  //       if (el && el.parentNode) {
  //         el.parentNode.repalce(el);
  //       }
  //     });
  //   }
  // };
})();
