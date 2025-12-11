//responsible for switching themes and titles
//not involved in specific grid logic

import { appState } from '../core/StateManager';

export class ThemeController {
  constructor() {
    this.btns = document.querySelectorAll('.nav-btn');
    this.title = document.getElementById('main-title');
    this.init();
  }

  init() {
    // 监听按钮点击
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        appState.setMode(btn.dataset.mode);
      });
    });

    // 监听状态改变
    appState.on('modeChanged', (mode) => this.updateTheme(mode));
  }

  updateTheme(mode) {
    document.body.className = mode;
    this.title.innerText = mode === 'lowercase' 
      ? 'lowercase lab | SHANG 2025' 
      : 'UPPERCASE LAB | SHANG 2025';
    
    this.btns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });
  }
}
