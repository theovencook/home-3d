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
