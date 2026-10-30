// The home switcher (#57): its list names the home the view has actually loaded, the header chip says whether that
// home is the one on the displays, and picking the shown home again reloads it.

import assert from "node:assert/strict";
import { test } from "node:test";
import type { HomeAssistant } from "../types.ts";
import { Fp3dHomeSwitcher, homeChip, homeOptionLabel } from "./home-switcher.ts";

const HOMES = [
  { id: "home", name: "Home", revision: 1, floors: 1, rooms: 3, furniture: 10 },
  { id: "flat", name: "Flat", revision: 1, floors: 1, rooms: 0, furniture: 0 },
];

function backend() {
  const state = { active: "home", sent: [] as Record<string, unknown>[] };
  const hass = {
    language: "en",
    callWS: async (msg: Record<string, unknown> & { type: string }) => {
      state.sent.push(msg);
      if (msg.type === "home_3d/homes/set_active") state.active = msg.home_id as string;
      return { homes: HOMES, active: state.active };
    },
  } as unknown as HomeAssistant;
  return { hass, state };
}

const tick = () => new Promise((r) => setTimeout(r, 0));

/** A switcher showing `home`, with its list loaded and a stand-in for its <select>. */
async function switcher(hass: HomeAssistant, home: string) {
  const el = new Fp3dHomeSwitcher() as unknown as Record<string, any>;
  el.hass = hass;
  el.home = home;
  el.willUpdate(new Map());
  await tick();
  const select = { value: home };
  Object.defineProperty(el, "renderRoot", { value: { querySelector: () => select } });
  return { el, select };
}

test("after a switch the list names the home the view loaded, not the one picked before (#57)", async () => {
  const { hass } = backend();
  const { el, select } = await switcher(hass, "home");
  select.value = "flat";
  el.chosen({ target: select });
  await tick();
  // the view is still loading: the list keeps naming the loaded home
  el.updated(new Map());
  assert.equal(select.value, "home");
  // the view has loaded the other home
  el.home = "flat";
  el.updated(new Map([["home", "home"]]));
  assert.equal(select.value, "flat");
});

test("picking the home that is already shown reloads it (#57)", async () => {
  const { hass, state } = backend();
  const { el, select } = await switcher(hass, "home");
  const asked: unknown[] = [];
  (el as unknown as EventTarget).addEventListener("home-reload", (e) => asked.push((e as CustomEvent).detail));
  select.value = "home";
  el.chosen({ target: select });
  await tick();
  assert.deepEqual(asked, [{ home: "home" }]);
  assert.equal(state.sent.filter((m) => m.type === "home_3d/homes/set_active").length, 0);
});

test("the chip names the shown home and says when it is not the one on the displays (#57)", () => {
  assert.deepEqual(homeChip(HOMES, "home", "home"), { name: "Home", onDisplays: true });
  assert.deepEqual(homeChip(HOMES, "home", "flat"), { name: "Flat", onDisplays: false });
  assert.equal(homeChip(HOMES, "home", "gone"), null);
});

test("the active home is badged in the home menu (#57)", () => {
  const t = (key: string) => (key === "home_active_badge" ? "Active on displays" : key);
  assert.equal(homeOptionLabel(HOMES[0], "home", t), "Home · Active on displays");
  assert.equal(homeOptionLabel(HOMES[1], "home", t), "Flat");
});
