import assert from "node:assert/strict";
import { test } from "node:test";
import { BuildingController, compareVersions } from "./building-controller.ts";
import type { HomeAssistant } from "./types.ts";

test("versions compare numerically, so 1.10.1 is newer than 1.9.2", () => {
  assert.ok(compareVersions("1.10.1", "1.9.2") > 0);
  assert.ok(compareVersions("1.9.2", "1.10.0") < 0);
  assert.equal(compareVersions("1.10.0", "1.10.0"), 0);
  assert.ok(compareVersions("2.0.0", "1.99.99") > 0);
});

/** A controller on a fake host, loaded from a backend that answers `home_3d/building/get` with `extra`. */
async function loaded(isAdmin: boolean, extra: Record<string, unknown>): Promise<BuildingController> {
  const host = { addController() {}, removeController() {}, requestUpdate() {}, updateComplete: Promise.resolve(true) };
  const c = new BuildingController(host);
  const hass = {
    user: { is_admin: isAdmin },
    callWS: async (msg: { type: string }) => {
      if (msg.type === "home_3d/building/get") return { building: { version: 1, settings: {}, floors: [] }, revision: 3, ...extra };
      if (msg.type === "home_3d/packs/list") return { packs: [] };
      throw new Error(`unexpected ${msg.type}`);
    },
    connection: { subscribeMessage: async () => async () => undefined },
  } as unknown as HomeAssistant;
  c.setHass(hass);
  c.hostConnected();
  await new Promise((r) => setTimeout(r, 0));
  c.hostDisconnected();
  return c;
}

test("the backend's editors list decides who edits, not the admin flag", async () => {
  assert.equal((await loaded(false, { can_edit: true })).canEdit, true);
  assert.equal((await loaded(true, { can_edit: false })).canEdit, false);
});

test("an older backend without the editors list lets admins edit, as before", async () => {
  assert.equal((await loaded(true, {})).canEdit, true);
  assert.equal((await loaded(false, {})).canEdit, false);
});

test("nobody edits before the building is loaded", () => {
  const host = { addController() {}, removeController() {}, requestUpdate() {}, updateComplete: Promise.resolve(true) };
  assert.equal(new BuildingController(host).canEdit, false);
});
