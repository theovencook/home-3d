// The owner's UX decisions (#263): the run 6 defaults, one block per numbered item.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const src = (p: string) => readFileSync(new URL(p, import.meta.url), "utf8");

// 1. Settings, Extensions, the editor and New home follow the chosen look

test("the panel's light and high contrast schemes apply on every page, not only the 3D view (#263)", () => {
  const panel = src("./panel.ts");
  assert.match(panel, /this\.toggleAttribute\("light", lightChrome\(shownLook\(this\._theme, this\.hass\)\)\)/);
  assert.match(panel, /this\.toggleAttribute\("contrast", contrastChrome\(shownLook\(this\._theme, this\.hass\)\)\)/);
});

test("the ask dialog takes the look of the part that asked, found along the focus (#263)", async () => {
  const { focusScheme } = await import("./components/ask-dialog.ts");
  const el = (attrs: string[], inner: unknown = null) =>
    ({ hasAttribute: (a: string) => attrs.includes(a), shadowRoot: inner ? { activeElement: inner } : null }) as unknown as Element;
  assert.equal(focusScheme(null), null);
  assert.equal(focusScheme(el([], el([], el([])))), null);
  // the panel under the Day look, focus on a button deep inside Settings
  assert.equal(focusScheme(el([], el(["light"], el([], el([]))))), "light");
  assert.equal(focusScheme(el(["contrast"], el([]))), "contrast");
  // the innermost scheme wins (a card on a dark page)
  assert.equal(focusScheme(el(["light"], el(["contrast"]))), "contrast");
});

// 2. The phone View sheet opens at half height

test("the phone View sheet opens at half height and its handle shows all of it (#263)", async () => {
  const { sheetStep } = await import("./components/view-panel.ts");
  assert.equal(sheetStep(false, -60), "full");
  assert.equal(sheetStep(true, 60), "half");
  assert.equal(sheetStep(false, 60), "close");
  assert.equal(sheetStep(false, 8), null, "a short move is a tap");
  const vp = src("./components/view-panel.ts");
  const phone = vp.slice(vp.indexOf("/* phones: a bottom sheet"));
  assert.match(phone, /max-height: 50%;/);
  assert.match(phone, /:host\(\[full\]\) \{\s*max-height: calc\(100% - 12px\);/);
  assert.match(vp, /class="vp-grab" aria-expanded=/);
});

// 3. Colliding room names: the smaller room's gives way

test("room names that would overlap: the larger room's shows, the smaller one's comes back when there is room (#263)", async () => {
  const { clearLabels, pinSize, roomRank } = await import("./viewer/label-clear.ts");
  const box = (x: number, y: number, rank: number) => ({ x, y, w: 80, h: 27, rank });
  // two names on top of each other: the larger room wins, wherever it is in the list
  assert.deepEqual(clearLabels([box(100, 100, 5), box(110, 105, 20)]), [false, true]);
  // zoomed in, the same rooms are far apart on screen: both show
  assert.deepEqual(clearLabels([box(100, 100, 5), box(300, 105, 20)]), [true, true]);
  // a hidden name does not hide others: a chain keeps every other one
  assert.deepEqual(clearLabels([box(0, 0, 30), box(70, 0, 20), box(140, 0, 10)]), [true, false, true]);
  // a longer name is a wider box; a values line makes it taller
  assert.ok(pinSize("Kitchen-diner").w > pinSize("WC").w);
  assert.ok(pinSize("WC", "21.5 °C").h > pinSize("WC").h);
  // a lawn never hides a room's name, however big it is
  const room = { id: "r", name: "WC", points: [[0, 0], [1, 0], [1, 1], [0, 1]] } as never;
  const lawn = { id: "l", name: "Lawn", outdoor: true, points: [[0, 0], [30, 0], [30, 30], [0, 30]] } as never;
  assert.ok(roomRank(room) > roomRank(lawn));
  // the viewer places room names through it
  assert.match(src("./viewer/viewer3d.ts"), /const keep = clearLabels\(names\.map\(\(n\) => n\.box\)\);/);
});
