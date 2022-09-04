// ==UserScript==
// @name         BT之家
// @namespace    ziggy chen
// @version      1.0
// @description  try to take over the world!
// @author       Ziggy chen
// @match        https://www.btbtt15.com/*
// @icon         https://www.btbtt15.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let arr = document.querySelectorAll("div.width");
  console.log("arr", arr.length);
  let last = arr[arr.length - 1];
  if (last) {
    last.style.width = "auto";
    last.style.maxWidth = "1500px";
  }
})();
