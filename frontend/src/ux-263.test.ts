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
