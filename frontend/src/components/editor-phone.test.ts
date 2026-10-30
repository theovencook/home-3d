import assert from "node:assert/strict";
import { test } from "node:test";
import { PHONE_MEDIA } from "../phone.ts";

// the editor's bundle hashes are build-time constants: plain strings will do here
for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dEditor } = (await import("./editor.ts")) as unknown as { Fp3dEditor: { styles: { cssText: string }[] } };

/** The rules inside the editor's phone media blocks (#94), whitespace squeezed. */
function phoneRules(): string {
  const text = Fp3dEditor.styles.map((s) => s.cssText).join("\n");
  const out: string[] = [];
  let at = text.indexOf(`@media ${PHONE_MEDIA}`);
  while (at >= 0) {
    // the block runs to its matching brace
    let depth = 0;
    let i = text.indexOf("{", at);
    const start = i;
    for (; i < text.length; i++) {
      if (text[i] === "{") depth++;
      else if (text[i] === "}" && --depth === 0) break;
    }
    out.push(text.slice(start, i));
    at = text.indexOf(`@media ${PHONE_MEDIA}`, i);
  }
  return out.join("\n").replace(/\s+/g, " ");
}

/** The declarations of `selector` inside the phone blocks. */
function rule(selector: string): string {
  const css = phoneRules();
  // the selector alone or first in a list
  const i = Math.max(css.indexOf(`${selector} {`), css.indexOf(`${selector}, `));
  assert.ok(i >= 0, `${selector} has a phone rule`);
  return css.slice(i, css.indexOf("}", i));
}

test("on a phone the plan keeps a usable height however many rows the toolbar takes (#94)", () => {
  assert.match(rule(".fp3d-narrow .fp3d-canvas-wrap"), /min-height: max\(\d+px, \d+vh\)/);
});

test("on a phone the toolbar is slimmer: tighter gaps and smaller buttons (#94)", () => {
  assert.match(rule(".fp3d-toolbar"), /gap: [0-6]px/);
  assert.match(rule(".fp3d-toolbar .fp3d-seg > button"), /padding/);
});

test("the 'works best on a PC or tablet' banner stays on phones (#94)", () => {
  assert.match(rule(".fp3d-phone-hint"), /display: flex/);
});

test("on a phone the floor menu and ⚙ share the first toolbar row, the tools follow (#94)", () => {
  assert.match(rule(".fp3d-toolbar > *"), /order: 2/);
  assert.match(rule(".fp3d-toolbar > .fp3d-seg-floor"), /order: 0/);
  assert.match(rule(".fp3d-toolbar > .fp3d-seg-settings"), /order: 1/);
});
