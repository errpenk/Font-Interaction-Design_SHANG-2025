/*


import { LOWER_ALPHABET, UPPER_CHARS } from '../data/glyphs.js';
import { appState } from '../core/state.js';

export class Grid {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.init();
  }

  init() {
    // 监听状态变化
    appState.on('modeChange', (mode) => this.render(mode));
    // 初始渲染
    this.render(appState.getMode());
    // 绑定事件委托 (性能优化点)
    this.bindHoverEvents();
  }

  render(mode) {
    this.container.innerHTML = '';
    if (mode === 'lowercase') {
      Object.keys(LOWER_ALPHABET).forEach(key => {
        this.createCard(key, LOWER_ALPHABET[key], true);
      });
    } else {
      UPPER_CHARS.forEach(char => {
        this.createCard(char, char, false);
      });
    }
  }

  createCard(key, content, isSvg) {
    const card = document.createElement('div');
    card.className = 'char-card';
    card.dataset.char = key; // 用于事件委托
    
    if (isSvg) {
      card.innerHTML = `<svg viewBox="0 0 100 100">${content}</svg>`;
    } else {
      card.innerHTML = `<span class="tech-char">${content}</span>`;
    }
    this.container.appendChild(card);
  }

  bindHoverEvents() {
    this.container.addEventListener('mouseover', (e) => {
      const card = e.target.closest('.char-card');
      if (card) {
        // 通知 Diagram 模块更新，而不是直接操作 Diagram DOM
        // 模块解耦
        const char = card.dataset.char;
        const index = Array.from(this.container.children).indexOf(card);
        // 发送自定义事件，或者调用全局 EventBus
        document.dispatchEvent(new CustomEvent('grid:hover', { 
            detail: { char, index } 
        }));
      }
    });
  }
}

*/
