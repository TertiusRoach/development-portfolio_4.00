/* Weather Animations — WINDY (script.js) */

document.addEventListener("DOMContentLoaded", () => {
  const stage = document.getElementById("stage");
  if (!stage) {
    console.error("WINDY: #stage not found");
    return;
  }

  // ---------- helpers ----------
  const rand = (min, max) => min + Math.random() * (max - min);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const PALETTES = {
    landing: { neon: "#fffffc", dark: "#0e0e0b", light: "#cecebe", medium: "#737373" },
    findLink: { neon: "#eb1224", dark: "#2b0a0d", light: "#e2bcca", medium: "#893141" },
    logTicket: { neon: "#132eff", dark: "#070e27", light: "#8facec", medium: "#1f3584" },
    trackDay: { neon: "#00ff44", dark: "#072007", light: "#afebb2", medium: "#39853b" },
  };

  const hexToRgbTriplet = (hex) => {
    const clean = hex.replace("#", "").trim();
    const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
    const n = parseInt(full, 16);
    const r = (n >> 16) & 255;
    const g = (n >> 8) & 255;
    const b = n & 255;
    return `${r} ${g} ${b}`;
  };

  const setAccent = (hex) => {
    document.documentElement.style.setProperty("--c-accent", hex);
    document.documentElement.style.setProperty("--accent-rgb", hexToRgbTriplet(hex));
  };

  const applyBaseGrey = () => {
    const p = PALETTES.landing;
    document.documentElement.style.setProperty("--c-neon", p.neon);
    document.documentElement.style.setProperty("--c-dark", p.dark);
    document.documentElement.style.setProperty("--c-light", p.light);
    document.documentElement.style.setProperty("--c-medium", p.medium);
    setAccent(p.medium);
  };

  // ---------- build DOM ----------
  stage.innerHTML = ""; // guarantee clean slate

  const root = document.createElement("section");
  root.className = "effect effect-windy";
  root.setAttribute("aria-hidden", "true");

  const gustLayer = document.createElement("div");
  gustLayer.className = "gust-layer";

  const debrisLayer = document.createElement("div");
  debrisLayer.className = "debris-layer";

  root.appendChild(gustLayer);
  root.appendChild(debrisLayer);
  stage.appendChild(root);

  // ---------- gusts ----------
  const makeGusts = (count) => {
    const rows = 6;
    const usedRows = new Set();

    for (let i = 0; i < count; i++) {
      const gust = document.createElement("div");
      gust.className = "gust";

      let row = Math.floor(Math.random() * rows);
      if (usedRows.size < rows) {
        while (usedRows.has(row)) row = Math.floor(Math.random() * rows);
        usedRows.add(row);
      }

      const yBandTop = 8 + row * 14;
      const y = rand(yBandTop, yBandTop + 10);

      const len = rand(220, 720);
      const th = rand(2, 6);
      const blur = rand(0.6, 2.2);
      const op = rand(0.10, 0.24);

      const dur = rand(7.5, 16);
      const delay = rand(-dur, 0);

      const rot = rand(-10, -3);
      const curve = `${rand(-2.4, 2.4)}vh`;

      gust.style.setProperty("--y", `${y}vh`);
      gust.style.setProperty("--len", `${len}px`);
      gust.style.setProperty("--th", `${th}px`);
      gust.style.setProperty("--blur", `${blur}px`);
      gust.style.setProperty("--op", `${op}`);

      gust.style.setProperty("--dur", `${dur}s`);
      gust.style.setProperty("--delay", `${delay}s`);

      gust.style.setProperty("--rot", `${rot}deg`);
      gust.style.setProperty("--curve", curve);

      gustLayer.appendChild(gust);
    }
  };

  // ---------- specks ----------
  const makeSpecks = (count) => {
    for (let i = 0; i < count; i++) {
      const s = document.createElement("div");
      s.className = "speck";

      const y = rand(10, 92);
      const size = rand(1.2, 3.6);
      const blur = rand(0.0, 1.2);
      const op = rand(0.06, 0.18);

      const dur = rand(10, 22);
      const delay = rand(-dur, 0);

      const dy = `${rand(-2.0, 2.0)}vh`;

      s.style.setProperty("--y", `${y}vh`);
      s.style.setProperty("--s", `${size}px`);
      s.style.setProperty("--blur", `${blur}px`);
      s.style.setProperty("--op", `${op}`);

      s.style.setProperty("--dur", `${dur}s`);
      s.style.setProperty("--delay", `${delay}s`);
      s.style.setProperty("--dy", dy);

      debrisLayer.appendChild(s);
    }
  };

  // ---------- easter egg ----------
  const EGG_POOL = ["findLink", "trackDay", "logTicket"];
  const EGG_CHECK_MS = 60_000;
  const EGG_CHANCE = 0.08;
  const EGG_HOLD_MS = 12_000;

  const easterEgg = () => {
    if (Math.random() >= EGG_CHANCE) return;
    const key = pick(EGG_POOL);
    setAccent(PALETTES[key].neon);
    window.setTimeout(() => setAccent(PALETTES.landing.medium), EGG_HOLD_MS);
  };

  // ---------- boot ----------
  applyBaseGrey();
  makeGusts(10);
  makeSpecks(22);
  window.setInterval(easterEgg, EGG_CHECK_MS);

  console.log("WINDY: boot OK", {
    gusts: document.querySelectorAll(".gust").length,
    specks: document.querySelectorAll(".speck").length,
  });
});