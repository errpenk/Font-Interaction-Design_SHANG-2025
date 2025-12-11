/*

import { EventEmitter } from './events.js';

class StateManager extends EventEmitter {
  constructor() {
    super();
    this.mode = 'lowercase'; // default
  }

  setMode(newMode) {
    if (this.mode === newMode) return;
    this.mode = newMode;
    document.body.className = newMode; // 切换 body class
    this.emit('modeChange', newMode);
  }

  getMode() {
    return this.mode;
  }
}

export const appState = new StateManager();

*/
