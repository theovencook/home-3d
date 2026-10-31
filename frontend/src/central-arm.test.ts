// The house-wide "Sure?" tap (#209): the armed row says what the next tap does, counts down and is announced; the
// second tap stays.
import assert from "node:assert/strict";
import { mock, test } from "node:test";
import { readFileSync } from "node:fs";
import { englishTable } from "./i18n.ts";

for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dView3d } = await import("./components/view3d.ts");

type View = { _armed: string | null; _armLeft: number; arm(key: string): void; disarm(): void };

test("arming counts the seconds down from 4 to 1 and then lets go after 3.5 s", () => {
  mock.timers.enable({ apis: ["setTimeout", "Date"] });
  try {
    const el = new Fp3dView3d() as unknown as View;
    el.arm("lights_off");
    assert.equal(el._armed, "lights_off");
    assert.equal(el._armLeft, 4);
    mock.timers.tick(600);
    assert.equal(el._armLeft, 3);
    mock.timers.tick(1000);
    assert.equal(el._armLeft, 2);
    mock.timers.tick(1000);
    assert.equal(el._armLeft, 1);
    mock.timers.tick(1000);
    assert.equal(el._armed, null, "the arming runs out after 3.5 s");
    assert.equal(el._armLeft, 0);
  } finally {
    mock.timers.reset();
  }
});

test("arming another action restarts the count; disarming stops it", () => {
  mock.timers.enable({ apis: ["setTimeout", "Date"] });
  try {
    const el = new Fp3dView3d() as unknown as View;
    el.arm("lights_off");
    mock.timers.tick(2000);
    el.arm("covers_close");
    assert.equal(el._armed, "covers_close");
    assert.equal(el._armLeft, 4);
    el.disarm();
    assert.equal(el._armed, null);
    mock.timers.tick(5000);
    assert.equal(el._armed, null);
  } finally {
    mock.timers.reset();
  }
});

test("every armable action has its own 'Tap again to ...' text, and the menu shows and announces it", () => {
  const en: Record<string, string> = englishTable();
  for (const key of ["lights_on", "lights_off", "covers_open", "covers_close"]) assert.match(en[`central_again_${key}`] ?? "", /^Tap again to /, key);
  assert.equal(en.central_again_lights_off, "Tap again to turn off all lights");
  const src = readFileSync(new URL("./components/view3d.ts", import.meta.url), "utf8");
  assert.ok(src.includes("fp3d-central-row-armed"), "the armed row is highlighted");
  assert.ok(src.includes('class="fp3d-central-ask"'), "the row shows the question and the seconds left");
  assert.ok(/role="status" aria-live="assertive"[^>]*>\$\{this\._armed \? t\(`central_again_/.test(src), "a screen reader hears it");
  assert.ok(/if \(house && this\._armed !== key\) \{\s*this\.arm\(key\);\s*return;\s*\}/.test(src), "the first house-wide tap only arms; the second runs");
});
