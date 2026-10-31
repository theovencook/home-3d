import assert from "node:assert/strict";
import { test } from "node:test";
import { contrast, DARK, LIGHT, lightChrome } from "./scheme.ts";

test("contrast ratios follow WCAG: black on white 21, a colour on itself 1", () => {
  assert.equal(Math.round(contrast("#000000", "#ffffff") * 10) / 10, 21);
  assert.equal(contrast("#37e0ff", "#37e0ff"), 1);
  // the classic grey that just passes AA on white
  assert.ok(Math.abs(contrast("#767676", "#ffffff") - 4.54) < 0.01);
});

test("only the Day look gets light viewer chrome; neon, high contrast and realistic keep the dark one (#85)", () => {
  assert.equal(lightChrome("day"), true);
  assert.equal(lightChrome("neon"), false);
  assert.equal(lightChrome("blueprint"), false);
  assert.equal(lightChrome("realistic"), false);
});

for (const [name, s] of [
  ["dark", DARK],
  ["light", LIGHT],
] as const) {
  test(`the ${name} chrome's text passes AA on its backgrounds (#85, #88)`, () => {
    for (const bg of [s.bg, s.bg2, s.chromeSolid]) {
      assert.ok(contrast(s.text, bg) >= 7, `text on ${bg}`);
      assert.ok(contrast(s.muted, bg) >= 4.5, `muted on ${bg}`);
    }
    assert.ok(contrast(s.accentText, s.accent) >= 4.5, "text on the accent");
  });
}

// ---- High contrast chrome and room labels in every look (#216) ----
import { contrastChrome, HIGH } from "./scheme.ts";

test("only the High contrast look (stored as blueprint) gets the high contrast chrome (#216)", () => {
  assert.equal(contrastChrome("blueprint"), true);
  for (const t of ["neon", "day", "realistic"] as const) assert.equal(contrastChrome(t), false);
});

test("the high contrast chrome's text is 7:1 on its backgrounds, muted text too (#216)", () => {
  for (const bg of [HIGH.bg, HIGH.bg2, HIGH.chromeSolid]) {
    assert.ok(contrast(HIGH.text, bg) >= 7, `text on ${bg}`);
    assert.ok(contrast(HIGH.muted, bg) >= 7, `muted on ${bg}`);
  }
  assert.ok(contrast(HIGH.accentText, HIGH.accent) >= 7, "text on the accent");
  assert.ok(contrast(HIGH.accent, HIGH.chromeSolid) >= 7, "the accent as text or an outline");
});

/** "rgba(r, g, b, a)" over a "#rrggbb" backdrop, as "#rrggbb": the glass a room label sits on. */
function over(glass: string, backdrop: string): string {
  const m = /rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/.exec(glass);
  if (!m) return glass;
  const a = Number(m[4]);
  const b = parseInt(backdrop.slice(1), 16);
  const ch = [Number(m[1]), Number(m[2]), Number(m[3])].map((v, i) => Math.round(v * a + ((b >> (16 - 8 * i)) & 255) * (1 - a)));
  return `#${ch.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

for (const [name, s] of [
  ["dark", DARK],
  ["light", LIGHT],
  ["high contrast", HIGH],
] as const) {
  test(`room labels (pins) read in the ${name} chrome over the lightest and the darkest view behind them (#216)`, () => {
    for (const backdrop of ["#000000", "#ffffff", "#2a68b0"]) {
      const glass = over(s.chrome, backdrop);
      assert.ok(contrast(s.text, glass) >= 7, `label text on glass over ${backdrop}: ${contrast(s.text, glass).toFixed(2)}`);
    }
    // the open room's label: the accent with its own text
    assert.ok(contrast(s.accentText, s.accent) >= (name === "high contrast" ? 7 : 4.5));
  });
}
