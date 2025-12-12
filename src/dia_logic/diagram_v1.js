import { ELEMENTS, lowerAlphabet } from './constants.js';
import { currentMode } from './theme.js';

/**
 * 为每个字符卡片添加悬停事件，用于显示结构图。
 * @param {HTMLElement} element - 字符卡片DOM元素。
 * @param {string} charData - 字符（如 'a' 或 'A'）。
 * @param {number} index - 字符在网格中的索引。
 * @param {string} type - 模式 ('lowercase' 或 'uppercase')。
 */
export function addDiagramHover(element, charData, index, type) {
    // 根据索引判断是左侧还是右侧图
    const colIndex = index % 6;
    const isLeft = colIndex < 3;

    element.addEventListener('mouseenter', () => {
        const targetContent = isLeft ? ELEMENTS.CONTENT_LEFT : ELEMENTS.CONTENT_RIGHT;
        
        if (type === 'lowercase') {
            targetContent.innerHTML = `<svg viewBox="0 0 100 100">${lowerAlphabet[charData]}</svg>`;
        } else {
            targetContent.innerHTML = `<span class="tech-char">${charData}</span>`;
        }

        // 切换激活状态
        if(isLeft) {
            ELEMENTS.DIAGRAM_LEFT.classList.add('active');
            ELEMENTS.DIAGRAM_RIGHT.classList.remove('active');
        } else {
            ELEMENTS.DIAGRAM_RIGHT.classList.add('active');
            ELEMENTS.DIAGRAM_LEFT.classList.remove('active');
        }
    });

    element.addEventListener('mouseleave', () => {
        // 移除所有图的激活状态
        ELEMENTS.DIAGRAM_LEFT.classList.remove('active');
        ELEMENTS.DIAGRAM_RIGHT.classList.remove('active');
    });
}
