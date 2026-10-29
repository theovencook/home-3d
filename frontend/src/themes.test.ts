import assert from "node:assert/strict";
import { test } from "node:test";
import { lookOf, THEMES } from "./themes.ts";

test("realistic is a look beside neon, chosen per card and in the panel", () => {
  assert.ok(THEMES.includes("realistic"));
  assert.equal(lookOf("realistic"), "realistic");
  assert.equal(lookOf("auto"), "auto");
  assert.equal(lookOf("neon"), "neon");
  // a look this version does not know, or none, is neon
  assert.equal(lookOf("cartoon"), "neon");
  assert.equal(lookOf(null), "neon");
  assert.equal(lookOf(undefined), "neon");
});
