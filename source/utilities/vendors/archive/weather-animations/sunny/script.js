/* ------------------------------------------------------------  
  Weather Utility: Sunny  
  - Offline-first  
  - Swap-ready architecture (Sunny now; Rainy/Cloudy/Windy later)  
  - Grey-first palette, rare easter egg accent colors  
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
  
/* --- Helpers (math as a tool, not a stunt) --- */  
function rand(min, max) {  
  return min + Math.random() * (max - min);  
}  
  
function pick(list) {  
  return list[Math.floor(Math.random() * list.length)];  
}  
  
/* Biased random toward center: calm composition */  
function randCentered(min, max) {  
  // average of two uniforms biases toward the middle  
  const t = (Math.random() + Math.random()) / 2;  
  return min + (max - min) * t;  
}  
  
/* --- Palette wiring (grey-first default, accent can change) --- */  
function applyBaseGrey() {  
  const p = PALETTES.landing;  
  
  document.documentElement.style.setProperty("--c-neon", p.neon);  
  document.documentElement.style.setProperty("--c-dark", p.dark);  
  document.documentElement.style.setProperty("--c-light", p.light);  
  document.documentElement.style.setProperty("--c-medium", p.medium);  
  
  // Grey accent by default  
  document.documentElement.style.setProperty("--c-accent", p.medium);  
}  
  
/*  
  Easter egg:  
  - Rare, time-based, reversible  
  - Accent only; base greys remain the stage  
  - Manual override is one variable: EGG_POOL order controls red/green/blue rate  
*/  
const EGG_POOL = ["findLink", "trackDay", "logTicket"]; // red, green, blue  
const EGG_CHECK_MS = 60_000; // schedule unit  
const EGG_CHANCE = 0.08; // 8% per check  
const EGG_HOLD_MS = 12_000; // accent duration  
  
function easterEgg() {  
  // One job: set --c-accent, then revert.  
  const hit = Math.random() < EGG_CHANCE;  
  if (!hit) return;  
  
  const key = pick(EGG_POOL);  
  const palette = PALETTES[key];  
  
  document.documentElement.style.setProperty("--c-accent", palette.neon);  
  
  window.setTimeout(() => {  
    // revert to grey accent  
    document.documentElement.style.setProperty("--c-accent", PALETTES.landing.medium);  
  }, EGG_HOLD_MS);  
}  
  
/* --- State semantics (offline-first) --- */  
function getQueryState() {  
  const url = new URL(window.location.href);  
  return url.searchParams.get("state");  
}  
  
/*  
  Replace this later with an API call.  
  Keep the return semantics small.  
*/  
async function loadWeatherState() {  
  const forced = getQueryState();  
  if (forced) return forced;  
  
  // Offline default  
  return "sunny";  
}  
  
/* --- Effect base --- */  
class Effect {  
  constructor(name) {  
    this.name = name;  
    this.el = null;  
  }  
  
  mount(root) {  
    const el = document.createElement("section");  
    el.className = `effect effect-${this.name}`;  
    el.setAttribute("aria-hidden", "true");  
    root.appendChild(el);  
    this.el = el;  
  }  
  
  unmount() {  
    if (!this.el) return;  
  
    const el = this.el;  
    el.classList.add("is-exiting");  
  
    const fadeMs = 420; // keep in sync with CSS var --fx-fade  
    window.setTimeout(() => {  
      el.remove();  
    }, fadeMs);  
  
    this.el = null;  
  }  
}  
  
/* --- SUNNY effect --- */  
class SunnyEffect extends Effect {  
  constructor() {  
    super("sunny");  
    this.hazeCount = 22; // calm density  
  }  
  
  mount(root) {  
    super.mount(root);  
  
    const sun = document.createElement("div");  
    sun.className = "sun";  
    this.el.appendChild(sun);  
  
    const hazeLayer = document.createElement("div");  
    hazeLayer.className = "haze-layer";  
    this.el.appendChild(hazeLayer);  
  
    this.buildHaze(hazeLayer);  
  
    /*  
      Mouse interaction note:  
      - Add pointer tracking here if needed.  
      - Example approach:  
        window.addEventListener("pointermove", (e) => { ...set CSS vars... })  
      - Then consume vars in CSS transforms for parallax.  
    */  
  }  
  
  buildHaze(layer) {  
    // Composition: most ribbons near center, few near edges  
    for (let i = 0; i < this.hazeCount; i++) {  
      const ribbon = document.createElement("i");  
      ribbon.className = "haze";  
  
      const x = randCentered(5, 95);      // percent  
      const w = rand(2.0, 6.0);           // px  
      const h = rand(80, 220);            // px  
      const dur = rand(14, 24);           // seconds  
      const delay = rand(-dur, 0);        // stagger start  
      const blur = rand(0.8, 2.8);        // px  
      const op = rand(0.08, 0.18);        // calm alpha  
      const drift = rand(-24, 24);        // vw drift  
      const rot = rand(-6, 6);            // deg  
  
      ribbon.style.setProperty("--x", `${x}vw`);  
      ribbon.style.setProperty("--w", `${w}px`);  
      ribbon.style.setProperty("--h", `${h}px`);  
      ribbon.style.setProperty("--dur", `${dur}s`);  
      ribbon.style.setProperty("--delay", `${delay}s`);  
      ribbon.style.setProperty("--blur", `${blur}px`);  
      ribbon.style.setProperty("--op", `${op}`);  
      ribbon.style.setProperty("--drift", `${drift}vw`);  
      ribbon.style.setProperty("--rot", `${rot}deg`);  
  
      layer.appendChild(ribbon);  
    }  
  }  
}  
  
/* --- Swap controller (one page, multiple effects) --- */  
let activeEffect = null;  
  
function setEffect(name) {  
  if (activeEffect) activeEffect.unmount();  
  
  if (name === "sunny") activeEffect = new SunnyEffect();  
  else activeEffect = new SunnyEffect(); // placeholder until you add others  
  
  activeEffect.mount(stage);  
}  
  
/* --- Boot --- */  
(async function boot() {  
  applyBaseGrey();  
  
  const state = await loadWeatherState();  
  setEffect(state);  
  
  // Easter egg scheduler (rare)  
  window.setInterval(easterEgg, EGG_CHECK_MS);  
})();