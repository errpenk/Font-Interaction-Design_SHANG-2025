// 统一数据结构
const CHAR_DATA = {
  a: { svg: '...', upper: 'A' },
  b: { svg: '...', upper: 'B' },
  // ...
};

// 渲染逻辑归一
Object.keys(CHAR_DATA).forEach(key => {
    const content = currentMode === 'lowercase' 
        ? `<svg...>${CHAR_DATA[key].svg}</svg>`
        : `<span...>${CHAR_DATA[key].upper}</span>`;
    // ...
});
