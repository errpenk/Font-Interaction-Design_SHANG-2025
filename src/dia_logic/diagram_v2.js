import { ELEMENTS, lowerAlphabet } from './constants.js';

/**
 * 渲染图表内容
 * @param {HTMLElement} container - 容器元素
 * @param {string} content - HTML字符串
 */
const renderContent = (container, content) => {
    // 简单的 diff 检测，如果内容没变就不重绘，减少 DOM 操作
    if (container.innerHTML !== content) {
        container.innerHTML = content;
    }
};

/**
 * 清除所有图表的激活状态
 */
const resetDiagrams = () => {
    ELEMENTS.DIAGRAM_LEFT.classList.remove('active');
    ELEMENTS.DIAGRAM_RIGHT.classList.remove('active');
};

/**
 * 核心逻辑：绑定悬停事件
 * 优化点：不再依赖 index，而是依赖视口位置
 */
export function attachDiagramEvents(card, charData, type) {
    
    const handleEnter = () => {
        // 1. 动态计算位置（响应式优化）
        // 获取卡片在视口中的中心点
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const windowCenterX = window.innerWidth / 2;

        // 如果卡片在屏幕左侧，展示右侧图表；反之亦然
        // 这样无论 CSS 是一行 2 个、4 个还是 6 个，逻辑永远正确
        const showRightDiagram = cardCenterX < windowCenterX;

        // 2. 准备内容
        const htmlContent = type === 'lowercase' 
            ? `<svg viewBox="0 0 100 100">${lowerAlphabet[charData]}</svg>`
            : `<span class="tech-char">${charData}</span>`;

        // 3. 渲染与激活
        if (showRightDiagram) {
            renderContent(ELEMENTS.CONTENT_RIGHT, htmlContent);
            ELEMENTS.DIAGRAM_RIGHT.classList.add('active');
            ELEMENTS.DIAGRAM_LEFT.classList.remove('active'); // 互斥清理
        } else {
            renderContent(ELEMENTS.CONTENT_LEFT, htmlContent);
            ELEMENTS.DIAGRAM_LEFT.classList.add('active');
            ELEMENTS.DIAGRAM_RIGHT.classList.remove('ac
