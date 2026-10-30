// The wall-tablet ticks in the editor's "Who may edit" section (#92): saved in the plan's settings, undoable.

import assert from "node:assert/strict";
import { test } from "node:test";
import type { Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";

for (const name of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${name}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dEditor } = await import("./editor.ts");

test("ticking a user as a wall tablet and setting its idle return land in the plan's settings and undo (#92)", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const el = new Fp3dEditor() as any;
  el.hass = { language: "en", user: { is_admin: true }, states: {}, areas: {} } as unknown as HomeAssistant;
  el._doc = { version: 1, settings: { roof: {} }, floors: [] } as unknown as Building;
  el._floorId = null;
  el.setTabletUser("wall", true);
  assert.deepEqual(el._doc.settings.tablet_users, ["wall"]);
  el.setTabletIdle(45);
  assert.equal(el._doc.settings.tablet_idle, 45);
  el.setTabletUser("wall", false);
  assert.deepEqual(el._doc.settings.tablet_users, []);
  el.undo();
  el.undo();
  assert.deepEqual(el._doc.settings.tablet_users, ["wall"]);
  assert.equal(el._doc.settings.tablet_idle, undefined);
});
