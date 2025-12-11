
import { MODE, TITLES, ELEMENTS, lowerAlphabet, upperChars } from './constants.js';
import { addDiagramHover } from './diagram.js';

export let currentMode = MODE.LOWERCASE;

/**
 * 切换模式并渲染网格
 * @param {string} newMode - MODE.LOWERCASE 或 MODE.UPPERCASE
 */
export function switchMode(newMode) {
    if (currentMode === newMode) return;
    currentMode = newMode;
    renderGrid();
}

/**
 * 渲染字母网格并设置主题
 */
export function renderGrid() {
    ELEMENTS.GRID.innerHTML = "";
    ELEMENTS.DISPLAY.innerHTML = "";
    ELEMENTS.INPUT.value = "";
    ELEMENTS.CHAR_COUNTER.innerText = "0 / 100";
    ELEMENTS.SCROLL_ARROW.classList.add('visible');

    ELEMENTS.BODY.className = currentMode;
    ELEMENTS.TITLE.innerText = TITLES[currentMode];
    
    // Update nav buttons
    ELEMENTS.BTN_LOWER.classList.toggle("active", currentMode === MODE.LOWERCASE);
    ELEMENTS.BTN_UPPER.classList.toggle("active", currentMode === MODE.UPPERCASE);

    if (currentMode === MODE.LOWERCASE) {
        ELEMENTS.DISPLAY.className = "input-display lowercase-mode";
        Object.keys(lowerAlphabet).forEach((key, index) => {
            const card = document.createElement("div");
            card.className = "char-card";
            card.innerHTML = `<svg viewBox="0 0 100 100">${lowerAlphabet[key]}</svg>`;
            addDiagramHover(card, key, index, MODE.LOWERCASE); // Attach hover logic
            ELEMENTS.GRID.appendChild(card);
        });
    } else {
        ELEMENTS.DISPLAY.className = "input-display uppercase-mode";
        upperChars.forEach((char, index) => {
            const card = document.createElement("div");
            card.className = "char-card";
            card.innerHTML = `<span class="tech-char">${char}</span>`;
            addDiagramHover(card, char, index, MODE.UPPERCASE); // Attach hover logic
            ELEMENTS.GRID.appendChild(card);
        });
    }
}
