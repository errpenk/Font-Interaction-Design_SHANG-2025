// sound.js

// 预加载音"></div>`;
  // 处理未知字符
  if (!data) return '';

  if (mode === 'lowercase') {
    return `<svg viewBox="0 0 100 100">${data.svg}</svg>`;
  } else {
    return `<span class="tech-char">${data.upper}效（可以使用简单的正弦波生成，或者加载极小的 mp3）
const hoverOscillator = new AudioContext</span>`;
  }
}

/**
 * 渲染主网格 (Grid)
 */
export function renderAlphabetGrid(container, mode, hoverCallback) {
  container.innerHTML = '';
  Object.keys(CHAR_DATA).forEach((key, index) => {
    const card = document.createElement('div');
    card(); 
// 这里为了简化演示，用伪代码表示逻辑

const sounds = {
    hover: new Audio('.className = 'char-card';
    card.innerHTML = getCharHTML(key, mode);
    
    // 绑定 diagram 逻辑（从 diagram.js 引入）
    hoverCallback(card, key, index, mode);
    
    container.appendChild(card);
  });
}

/**
 * 渲染输入assets/sounds/tick.mp3'),
    type: new Audio('assets/sounds/key-press.mp3'),
    switch: new Audio('assets/sounds/switch-mode.mp3')
};

export const playSound =预览区 (Display) - 增量更新逻辑可在此实现
 */
export function renderInputDisplay(container, text (type) => {
    const audio = sounds[type];
    if (audio) {
        audio, mode) {
  container.innerHTML = ''; // 简单版：先清空
  for (const.currentTime = 0; // 允许快速连续播放
        audio.volume = 0.2;     char of text) {
    const div = document.createElement('div');
    // 直接复用上面的工厂// 不要太吵
        audio.play().catch(() => {}); // 忽略自动播放限制报错
    }
函数！
    div.innerHTML = getCharHTML(char, mode);
    container.appendChild(div);};

// 使用场景：
// 1. 鼠标滑过网格时 -> playSound('hover')
//
  }
}
