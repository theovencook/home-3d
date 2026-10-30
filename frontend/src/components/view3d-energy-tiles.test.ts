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

test("energy tiles can be reached by pointer and keyboard so they can grow (#90)", () => {
  const out = flat(viewer().renderEnergy());
  assert.match(out, /fp3d-energy-solar[^>]*tabindex="0"/);
});

test("tapping an energy tile enlarges it; tapping it again shrinks it back (#90)", () => {
  const el = viewer();
  assert.doesNotMatch(tileClass(el, "solar"), /fp3d-energy-big/);
  el.toggleEnergyTile("solar");
  assert.match(tileClass(el, "solar"), /fp3d-energy-big/);
  assert.doesNotMatch(tileClass(el, "export"), /fp3d-energy-big/);
  el.toggleEnergyTile("solar");
  assert.doesNotMatch(tileClass(el, "solar"), /fp3d-energy-big/);
});

test("tapping another tile moves the enlargement to it (#90)", () => {
  const el = viewer();
  el.toggleEnergyTile("solar");
  el.toggleEnergyTile("export");
  assert.doesNotMatch(tileClass(el, "solar"), /fp3d-energy-big/);
  assert.match(tileClass(el, "export"), /fp3d-energy-big/);
});

test("a hovered or focused tile grows smoothly with a mouse; reduced motion makes it grow without the animation (#90)", () => {
  assert.match(css, /@media \(hover: hover\)[^@]*\.fp3d-energy-tile:hover/);
  assert.match(css, /\.fp3d-energy-tile:focus-visible/);
  assert.match(css, /\.fp3d-energy-tile\s*\{[^}]*transition: transform/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)\s*\{[^@]*\.fp3d-energy-tile\s*\{\s*transition: none/);
});
