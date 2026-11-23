/* ------------------------------------------------------------  
  Weather Animations — CLOUDY  
  File: script.js  
  
  Intent  
  - Build a calm cloudy scene.  
  - Use three layers for depth.  
  - Place clouds across the screen using a 5×5 grid.  
  - Keep the code local-first.  
  - Rare accent tint via easterEgg().  
  
  Mouse interaction note  
  - Add pointer tracking inside boot() if needed.  
  - Set CSS vars on #stage (example: --mx, --my).  
  - Consume them in CSS transforms on .effect-cloudy or .layer.  
------------------------------------------------------------ */  
  
/* --- App palettes (given) --- */  
const PALETTES = {  
  landing: {  
    neon: "#fffffc",  
    dark: "#0e0e0b",  
    light: "#cecebe",  
    medium: "#737373",  
  },  
  findLink: {  
    neon: "#eb1224",  
    dark: "#2b0a0d",  
    light: "#e2bcca",  
    medium: "#893141",  
  },  
  logTicket: {  
    neon: "#132eff",  
    dark: "#070e27",  
    light: "#8facec",  
    medium: "#1f3584",  
  },  
  trackDay: {  
    neon: "#00ff44",  
    dark: "#072007",  
    light: "#afebb2",  
    medium: "#39853b",  
  },  
};  
  
/* --- Stage --- */  
const stage = document.getElementById("stage");  
  
/* --- Math helpers --- */  
function rand(min, max) {  
  return min + Math.random() * (max - min);  
}  
  
function pick(list) {  
  return list[Math.floor(Math.random() * list.length)];  
}  
  
/* ------------------------------------------------------------  
  Palette setup (grey-first)  
------------------------------------------------------------ */  
function applyBaseGrey() {  
  const p = PALETTES.landing;  
  
  document.documentElement.style.setProperty("--c-neon", p.neon);  
  document.documentElement.style.setProperty("--c-dark", p.dark);  
  document.documentElement.style.setProperty("--c-light", p.light);  
  document.documentElement.style.setProperty("--c-medium", p.medium);  
  
  document.documentElement.style.setProperty("--c-accent", p.medium);  
}  
  
/*  
  Easter egg:  
  - Rare accent tint in a grey scene.  
  - Manual interchange:  
    - reorder EGG_POOL to change which accent appears more often  
*/  
const EGG_POOL = ["findLink", "trackDay", "logTicket"]; // red, green, blue  
const EGG_CHECK_MS = 60_000; // once per minute  
const EGG_CHANCE = 0.08; // 8% chance per check  
const EGG_HOLD_MS = 12_000; // accent duration  
  
function easterEgg() {  
  const hit = Math.random() < EGG_CHANCE;  
  if (!hit) return;  
  
  const key = pick(EGG_POOL);  
  const palette = PALETTES[key];  
  
  document.documentElement.style.setProperty("--c-accent", palette.neon);  
  
  window.setTimeout(() => {  
    document.documentElement.style.setProperty("--c-accent", PALETTES.landing.medium);  
  }, EGG_HOLD_MS);  
}  
  
/* ------------------------------------------------------------  
  Grid placement  
  - 5×5 design  
  - 3 clouds per layer  
  - Each cloud occupies a unique cell within its own layer  
------------------------------------------------------------ */  
function pickUniqueCells(gridSize, count) {  
  const total = gridSize * gridSize;  
  const picked = new Set();  
  
  while (picked.size < Math.min(count, total)) {  
    picked.add(Math.floor(Math.random() * total));  
  }  
  
  return Array.from(picked).map((n) => {  
    const row = Math.floor(n / gridSize);  
    const col = n % gridSize;  
    return { row, col };  
  });  
}  
  
function cellPositionPercent(gridSize, row, col) {  
  const cellW = 100 / gridSize;  
  const cellH = 100 / gridSize;  
  
  /*  
    Padding inside each cell  
    This prevents clouds from hugging the cell borders.  
  */  
  const px = rand(0.18, 0.82);  
  const py = rand(0.18, 0.82);  
  
  const x = (col + px) * cellW;  
  const y = (row + py) * cellH;  
  
  return { x, y };  
}  
  
/* ------------------------------------------------------------  
  DOM build  
------------------------------------------------------------ */  
function createEffectRoot() {  
  const root = document.createElement("section");  
  root.className = "effect effect-cloudy";  
  root.setAttribute("aria-hidden", "true");  
  stage.appendChild(root);  
  return root;  
}  
  
function createLayer(root, className) {  
  const layer = document.createElement("div");  
  layer.className = `layer ${className}`;  
  root.appendChild(layer);  
  return layer;  
}  
  
function seedClouds(layer, config) {  
  const {  
    count,  
    gridSize,  
  
    wMinPx,  
    wMaxPx,  
    hMinPx,  
    hMaxPx,  
  
    scaleMin,  
    scaleMax,  
  
    blurMinPx,  
    blurMaxPx,  
  
    opMin,  
    opMax,  
  
    durMinS,  
    durMaxS,  
  } = config;  
  
  const cells = pickUniqueCells(gridSize, count);  
  
  for (let i = 0; i < cells.length; i++) {  
    const cloud = document.createElement("div");  
    cloud.className = "cloud";  
  
    const { x, y } = cellPositionPercent(gridSize, cells[i].row, cells[i].col);  
  
    const w = rand(wMinPx, wMaxPx);  
    const h = rand(hMinPx, hMaxPx);  
  
    const scale = rand(scaleMin, scaleMax);  
    const blur = rand(blurMinPx, blurMaxPx);  
    const op = rand(opMin, opMax);  
  
    const dur = rand(durMinS, durMaxS);  
    const delay = rand(-dur, 0);  
  
    /*  
      Drift vectors  
      Keep movement small.  
      This keeps the scene calm.  
    */  
    const dx = rand(-2.8, 2.8); // vw  
    const dy = rand(-1.2, 1.2); // vh  
  
    cloud.style.setProperty("--x", `${x}%`);  
    cloud.style.setProperty("--y", `${y}%`);  
  
    cloud.style.setProperty("--w", `${w}px`);  
    cloud.style.setProperty("--h", `${h}px`);  
  
    cloud.style.setProperty("--scale", `${scale}`);  
    cloud.style.setProperty("--blur", `${blur}px`);  
    cloud.style.setProperty("--op", `${op}`);  
  
    cloud.style.setProperty("--dur", `${dur}s`);  
    cloud.style.setProperty("--delay", `${delay}s`);  
  
    cloud.style.setProperty("--dx", `${dx}vw`);  
    cloud.style.setProperty("--dy", `${dy}vh`);  
  
    layer.appendChild(cloud);  
  }  
}  
  
/* ------------------------------------------------------------  
  Boot  
------------------------------------------------------------ */  
(function boot() {  
  applyBaseGrey();  
  
  const GRID_SIZE = 5;  
  const CLOUDS_PER_LAYER = 3;  
  
  const root = createEffectRoot();  
  
  const layerBack = createLayer(root, "layer-back");  
  const layerMid = createLayer(root, "layer-mid");  
  const layerFront = createLayer(root, "layer-front");  
  
  seedClouds(layerBack, {  
    count: CLOUDS_PER_LAYER,  
    gridSize: GRID_SIZE,  
  
    wMinPx: 220,  
    wMaxPx: 420,  
    hMinPx: 90,  
    hMaxPx: 170,  
  
    scaleMin: 0.72,  
    scaleMax: 0.95,  
  
    blurMinPx: 3.2,  
    blurMaxPx: 6.4,  
  
    opMin: 0.18,  
    opMax: 0.28,  
  
    durMinS: 160,  
    durMaxS: 240,  
  });  
  
  seedClouds(layerMid, {  
    count: CLOUDS_PER_LAYER,  
    gridSize: GRID_SIZE,  
  
    wMinPx: 260,  
    wMaxPx: 520,  
    hMinPx: 110,  
    hMaxPx: 190,  
  
    scaleMin: 0.85,  
    scaleMax: 1.08,  
  
    blurMinPx: 2.2,  
    blurMaxPx: 4.8,  
  
    opMin: 0.22,  
    opMax: 0.34,  
  
    durMinS: 130,  
    durMaxS: 210,  
  });  
  
  seedClouds(layerFront, {  
    count: CLOUDS_PER_LAYER,  
    gridSize: GRID_SIZE,  
  
    wMinPx: 300,  
    wMaxPx: 600,  
    hMinPx: 120,  
    hMaxPx: 210,  
  
    scaleMin: 1.00,  
    scaleMax: 1.22,  
  
    blurMinPx: 1.2,  
    blurMaxPx: 3.6,  
  
    opMin: 0.26,  
    opMax: 0.40,  
  
    durMinS: 110,  
    durMaxS: 180,  
  });  
  
  window.setInterval(easterEgg, EGG_CHECK_MS);  
  
  /*  
    Mouse interaction note:  
    Add here if needed.  
  
    window.addEventListener("pointermove", (e) => {  
      const mx = e.clientX / window.innerWidth;  
      const my = e.clientY / window.innerHeight;  
      stage.style.setProperty("--mx", mx.toFixed(4));  
      stage.style.setProperty("--my", my.toFixed(4));  
    });  
  */  
})();