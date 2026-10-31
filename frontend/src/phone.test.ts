import assert from "node:assert/strict";
import { test } from "node:test";
import { isPhoneWidth, PHONE_MAX_PX, thumbsCompact } from "./phone.ts";

test("a phone is a screen up to about 600 px wide (#93)", () => {
  assert.equal(PHONE_MAX_PX, 600);
  assert.equal(isPhoneWidth(375), true);
  assert.equal(isPhoneWidth(600), true);
  assert.equal(isPhoneWidth(601), false);
  assert.equal(isPhoneWidth(1280), false);
});

test("on a phone the floor pictures start folded to plain buttons; the user's own choice wins (#93)", () => {
  assert.equal(thumbsCompact(null, true), true);
  assert.equal(thumbsCompact(null, false), false);
  assert.equal(thumbsCompact("0", true), false);
  assert.equal(thumbsCompact("1", false), true);
});

test("the narrow-phone rule is 480 px and the View menu folds after a pick only where it floats (#216)", async () => {
  const { PHONE_NARROW_MAX_PX, PHONE_NARROW_MEDIA, closesViewMenuAfterPick } = await import("./phone.ts");
  assert.equal(PHONE_NARROW_MAX_PX, 480);
  assert.equal(PHONE_NARROW_MEDIA, "(max-width: 480px)");
  assert.equal(closesViewMenuAfterPick(390), true);
  assert.equal(closesViewMenuAfterPick(1024), false);
});
