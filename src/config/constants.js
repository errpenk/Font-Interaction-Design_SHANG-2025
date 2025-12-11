// --- Character Data (SVG Paths for Lowercase) ---
export const lowerAlphabet = {
    a: '<path d="M20 45 H80 V90 H20 V65 H80" />',
    b: '<path d="M20 10 V90 H80 V55 H20" />',
    c: '<path d="M80 45 H20 V90 H80" />',
    d: '<path d="M80 10 V90 H20 V55 H80" />',
    e: '<path d="M80 90 H20 V45 H80 M20 68 H70" />',
    f: '<path d="M30 90 V10 H80 M20 45 H70" />',
    g: '<path d="M80 45 H20 V90 H80 V70 H60" />',
    h: '<path d="M20 10 V90 M20 55 H80 V90" />',
    i: '<path d="M50 45 V90 M50 15 V25" />',
    j: '<path d="M60 45 V80 L50 90 H40 M60 15 V25" />',
    k: '<path d="M20 10 V90 M80 45 L20 68 L80 90" />',
    l: '<path d="M30 10 V90 H80" />',
    m: '<path d="M20 90 V45 H50 V90 M50 45 H80 V90" />',
    n: '<path d="M20 45 V90 M20 45 H80 V90" />',
    o: '<path d="M20 45 H80 V90 H20 V45" />',
    p: '<path d="M20 90 V10 M20 25 H80 V55 H20" />',
    q: '<path d="M80 90 V10 M80 25 H20 V55 H80" />',
    r: '<path d="M20 45 V90 M20 55 H80" />',
    s: '<path d="M80 45 H20 V68 H80 V90 H20" />',
    t: '<path d="M50 10 V90 H80 M20 45 H80" />',
    u: '<path d="M20 45 V90 H80 V45" />',
    v: '<path d="M20 45 L50 90 L80 45" />',
    w: '<path d="M20 45 L35 90 L50 60 L65 90 L80 45" />',
    x: '<path d="M20 45 L80 90 M80 45 L20 90" />',
    y: '<path d="M20 45 V75 H80 V45 M50 75 V90" />',
    z: '<path d="M20 45 H80 L20 90 H80" />',
};

// --- Character Data (Uppercase) ---
export const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// --- Mode Constants ---
export const MODE = {
    LOWERCASE: "lowercase",
    UPPERCASE: "uppercase",
};

export const TITLES = {
    [MODE.LOWERCASE]: "lowercase lab | SHANG 2025",
    [MODE.UPPERCASE]: "UPPERCASE LAB | SHANG 2025",
};

// --- DOM Element IDs ---
export const ELEMENTS = {
    BODY: document.body,
    GRID: document.getElementById("grid"),
    INPUT: document.getElementById("texter"),
    DISPLAY: document.getElementById("display"),
    TITLE: document.getElementById("main-title"),
    BTN_LOWER: document.getElementById("btn-lower"),
    BTN_UPPER: document.getElementById("btn-upper"),
    TOOLTIP: document.getElementById("tooltip"),
    PLAYGROUND: document.getElementById("playground-area"),
    SCROLL_ARROW: document.getElementById("scroll-arrow"),
    CHAR_COUNTER: document.getElementById("char-counter"),
    DIAGRAM_LEFT: document.getElementById("diagram-left"),
    DIAGRAM_RIGHT: document.getElementById("diagram-right"),
    CONTENT_LEFT: document.getElementById("diagram-content-left"),
    CONTENT_RIGHT: document.getElementById("diagram-content-right"),
};
