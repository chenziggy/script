// ==UserScript==
// @name         syntax.fm
// @namespace    ziggy chen
// @license MIT
// @version      0.1
// @description  syntax 控制
// @author       Ziggy chen
// @match        *://syntax.fm/*
// @icon         https://syntax.fm/favicon.png
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  'use strict';
  // 创建控制按钮
  const btn = document.createElement('button');
  btn.id = 'speedControlBtn';
  btn.style.cssText = `
      position: fixed;
      bottom: 110px;
      right: 20px;
      z-index: 9999;
      padding: 4x 8px 4px 8px !important;
      background-color: #4CAF50;
      color: white;
      border: none;
      font-size: 12px;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  `;
  // 状态管理
  let isActive = false;
  let intervalId = null;

  // 更新按钮状态
  function updateButtonState() {
      btn.textContent = isActive ? '0.8x': '1x';
      btn.style.backgroundColor = isActive ? '#4CAF50' : '#f44336';
  }
  // 主控制函数
  function toggleSpeedControl() {
      isActive = !isActive;

      if (isActive) {
          // 创建定时器
          intervalId = setInterval(() => {
              const audio = document.querySelector('audio');
              if (audio && audio.playbackRate !== 0.8) {
                  audio.playbackRate = 0.8;
              }
          }, 1000);
      } else {
          // 清除定时器
          if (intervalId) {
              clearInterval(intervalId);
               const audio = document.querySelector('audio');
              if (audio && audio.playbackRate === 0.8) {
                  audio.playbackRate = 1;
              }
              intervalId = null;
          }
      }

      updateButtonState();
  }
  // 初始化
  btn.addEventListener('click', toggleSpeedControl);
  updateButtonState();
  document.body.appendChild(btn);
  // 自动检测新添加的audio元素
  new MutationObserver(() => {
      if (isActive) {
          const audio = document.querySelector('audio');
          if (audio && audio.playbackRate !== 0.8) {
              audio.playbackRate = 0.8;
          }
      }
  }).observe(document.body, {
      childList: true,
      subtree: true
  });
})();