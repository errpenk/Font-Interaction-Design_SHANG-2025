import { EventEmitter } from './EventEmitter';

class StateManager extends EventEmitter {
  constructor() {
    super();
    this.mode = 'lowercase'; // 'lowercase' | 'uppercase'
  }

  setMode(mode) {
    if (this.mode === mode) return;
    this.mode = mode;
    this.emit('modeChanged', mode);
  }

  getMode() {
    return this.mode;
  }
}

export const appState = new StateManager();
