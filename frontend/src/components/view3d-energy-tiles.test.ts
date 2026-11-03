import assert from "node:assert/strict";
import { test } from "node:test";

for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dView3d } = (await import("./view3d.ts")) as unknown as { Fp3dView3d: { new (): Record<string, any>; styles: unknown } };

/** Every string and value of a lit template, flattened into one text. */
function flat(v: unknown): string {
  if (v == null || typeof v === "symbol" || typeof v === "function") return "";
  if (Array.isArray(v)) return v.map(flat).join("");
  if (typeof v === "object" && "strings" in (v as object)) {
    const t = v as { strings: readonly string[]; values: unknown[] };
    return t.strings.map((s, i) => s + (i < t.values.length ? flat(t.values[i]) : "")).join("");
  }
  return String(v);
}

const css = (() => {
  const s = Fp3dView3d.styles as { cssText?: string } | { cssText?: string }[];
  return (Array.isArray(s) ? s : [s]).map((x) => x.cssText ?? "").join("\n");
})();

/** A viewer showing grid, solar and battery tiles. */
function viewer(): Record<string, any> {
  const el = new Fp3dView3d();
  el.hass = { language: "en", locale: { language: "en", number_format: "language" }, states: {}, config: { unit_system: {} } };
  el._energy = { consumption: 800, grid: -1200, solar: 2000, battery: null, soc: null, tariff: null };
  el.flows = false;
  el.holograms = false;
  return el;
}

/** The class list of the tile of kind `cls` (solar, export ...). */
function tileClass(el: Record<string, any>, cls: string): string {
  const m = flat(el.renderEnergy()).match(new RegExp(`class="(fp3d-energy-item fp3d-energy-tile fp3d-energy-${cls}[^"]*)"`));
  assert.ok(m, `no ${cls} tile`);
  return m[1];
}

test("energy tiles are plain read-outs: no button, no enlarging (#316)", () => {
  const el = viewer();
  const out = flat(el.renderEnergy());
  assert.match(out, /<div class="fp3d-energy-item fp3d-energy-tile fp3d-energy-solar">/);
  assert.doesNotMatch(out, /<button type="button" class="fp3d-energy-item fp3d-energy-tile/);
  assert.doesNotMatch(out, /fp3d-energy-big|aria-pressed/);
  assert.equal(typeof el.toggleEnergyTile, "undefined");
  assert.doesNotMatch(tileClass(el, "solar"), /fp3d-energy-big/);
});

test("a hovered tile only lifts a hair and smoothly; reduced motion drops the animation (#316)", () => {
  assert.match(css, /@media \(hover: hover\)[^@]*\.fp3d-energy-tile:hover\s*\{\s*transform: translateY\(-1px\)/);
  assert.doesNotMatch(css, /fp3d-energy-tile:hover\s*\{[^}]*scale\(/);
  assert.doesNotMatch(css, /fp3d-energy-big|fp3d-energy-tile:focus-visible/);
  assert.match(css, /\.fp3d-energy-tile\s*\{[^}]*transition: transform/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)\s*\{[^@]*\.fp3d-energy-tile\s*\{\s*transition: none/);
});

test("the energy tiles stay while the glass cards are shown (#309)", () => {
  const el = viewer();
  el.holograms = null;
  el._holoShow = true;
  el._holos = [{ kind: "main", name: "", w: null, dayIds: [], battery: null }];
  el._holoOn = true; // the main card is on screen (it used to hide the tiles)
  const out = flat(el.renderEnergy());
  assert.match(out, /fp3d-energy-tile fp3d-energy-solar/);
  assert.match(out, /fp3d-energy-tile fp3d-energy-total/);
});

test("the heat legend is a button that folds to a slim bar and back (#310)", () => {
  const el = viewer();
  el.heatMode = "temperature";
  el.heatValues = new Map([["r", 20]]);
  el._legendMin = false;
  let out = flat(el.renderLegend());
  assert.match(out, /<button type="button" class="fp3d-legend" aria-expanded=true/);
  el.toggleLegend();
  out = flat(el.renderLegend());
  assert.match(out, /class="fp3d-legend fp3d-legend-min" aria-expanded=false/);
  assert.match(out, /class=fp3d-sr-only>Temperature/);
  el.toggleLegend();
  assert.equal(el._legendMin, false);
});

test("with existing sensors today's cost shows as a tile of its own; net when earnings are taken off (#323)", () => {
  const el = viewer();
  assert.doesNotMatch(flat(el.renderEnergy()), /fp3d-energy-cost/, "no cost sensors: no tile");
  el._costs = { net: false, value: "£1.20" };
  assert.match(flat(el.renderEnergy()), /fp3d-energy-tile fp3d-energy-cost[^>]*>\s*<span>Cost today<\/span><b>£1.20<\/b>/);
  el._costs = { net: true, value: "£0.80" };
  assert.match(flat(el.renderEnergy()), /<span>Net cost today<\/span><b>£0.80<\/b>/);
});
