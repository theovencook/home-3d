// An open panel keeps its old JavaScript after an update; it notices and offers a reload, never mid-edit (#60).

import assert from "node:assert/strict";
import { test } from "node:test";
import { BuildingController } from "./building-controller.ts";
import type { HomeAssistant } from "./types.ts";

const tick = () => new Promise((r) => setTimeout(r, 0));

/** A controller running bundle `build` of version 1.2.0, on a backend whose answers the test changes. */
async function running(build: string, backend: { version: string; build: string | null; saveFails?: boolean }) {
  const host = { addController() {}, removeController() {}, requestUpdate() {}, updateComplete: Promise.resolve(true) };
  const c = new BuildingController(host);
  c.frontend = { version: "1.2.0", build };
  const asked: string[] = [];
  const ready = new Set<() => void>();
  const hass = {
    user: { is_admin: true },
    callWS: async (msg: { type: string }) => {
      asked.push(msg.type);
      const versions = { version: backend.version, ...(backend.build ? { build: backend.build } : {}) };
      if (msg.type === "home_3d/building/get") return { building: { version: 1, settings: {}, floors: [] }, revision: 3, can_edit: true, ...versions };
      if (msg.type === "home_3d/version") return versions;
      if (msg.type === "home_3d/building/save") {
        if (backend.saveFails) throw new Error("connection lost");
        return { revision: 4 };
      }
      throw new Error(`unexpected ${msg.type}`);
    },
    connection: {
      subscribeMessage: async () => async () => undefined,
      addEventListener: (event: string, cb: () => void) => event === "ready" && ready.add(cb),
      removeEventListener: (event: string, cb: () => void) => event === "ready" && ready.delete(cb),
    },
  } as unknown as HomeAssistant;
  c.setHass(hass);
  c.hostConnected();
  await tick();
  /** The websocket came back (Home Assistant restarted after an update). */
  const reconnect = async () => {
    for (const cb of ready) cb();
    await tick();
  };
  return { c, asked, reconnect, listeners: ready };
}

test("a rebuilt frontend at the same version counts as an update the open page lacks", async () => {
  const { c } = await running("aaa", { version: "1.2.0", build: "bbb" });
  assert.equal(c.versionGap, "frontend");
  assert.equal(c.needsRestart, false);
  c.hostDisconnected();
});

test("the same build, or a backend that does not report one, shows nothing", async () => {
  assert.equal((await running("aaa", { version: "1.2.0", build: "aaa" })).c.versionGap, null);
  assert.equal((await running("aaa", { version: "1.2.0", build: null })).c.versionGap, null);
});

test("a reconnect asks the backend for its versions again, without polling in between", async () => {
  const backend = { version: "1.2.0", build: "aaa" as string | null };
  const { c, asked, reconnect } = await running("aaa", backend);
  assert.equal(c.versionGap, null);
  await tick();
  assert.deepEqual(asked, ["home_3d/building/get"]);
  // Home Assistant was updated and restarted: the websocket comes back
  backend.build = "bbb";
  await reconnect();
  assert.deepEqual(asked, ["home_3d/building/get", "home_3d/version"]);
  assert.equal(c.versionGap, "frontend");
  c.hostDisconnected();
});

test("a closed view stops listening for reconnects", async () => {
  const { c, listeners } = await running("aaa", { version: "1.2.0", build: "aaa" });
  assert.equal(listeners.size, 1);
  c.hostDisconnected();
  assert.equal(listeners.size, 0);
});

const edited = (c: BuildingController) => c.edit({ ...structuredClone(c.building!), settings: { lock_plan: true } } as never);

test("the update notice offers a reload when nothing is unsaved", async () => {
  const { c } = await running("aaa", { version: "1.2.0", build: "bbb" });
  assert.equal(c.updateNotice, "ready");
  assert.equal((await running("aaa", { version: "1.2.0", build: "aaa" })).c.updateNotice, null);
  c.hostDisconnected();
});

test("with edits still being saved the notice says so, and nothing reloads by itself", async () => {
  const { c } = await running("aaa", { version: "1.2.0", build: "bbb" });
  let reloads = 0;
  edited(c);
  assert.equal(c.updateNotice, "saving");
  await new Promise((r) => setTimeout(r, 900)); // the debounced save lands
  assert.equal(c.updateNotice, "ready");
  assert.equal(reloads, 0);
  c.hostDisconnected();
});

test("reloading waits for the edits to be saved first", async () => {
  const { c, asked } = await running("aaa", { version: "1.2.0", build: "bbb" });
  const order: string[] = [];
  edited(c);
  const done = await c.reloadWhenSaved(() => order.push(`reload after ${asked.filter((t) => t === "home_3d/building/save").length} save`));
  assert.equal(done, true);
  assert.deepEqual(order, ["reload after 1 save"]);
  c.hostDisconnected();
});

test("edits that cannot be saved block the reload, so they are not lost", async () => {
  const { c } = await running("aaa", { version: "1.2.0", build: "bbb", saveFails: true });
  let reloads = 0;
  edited(c);
  assert.equal(await c.reloadWhenSaved(() => reloads++), false);
  assert.equal(reloads, 0);
  assert.equal(c.updateNotice, "unsaved");
  c.hostDisconnected();
});
