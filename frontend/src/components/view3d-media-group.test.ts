// A TV reached through several integrations has several media players placed on it: one card for the group (#356).

import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Furniture } from "../model.ts";
import { GROUP_RADIUS, hostAt, losers } from "../media-groups.ts";

for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
// (syncDevices sets timers for the next minute and for the grace time: they must not keep the test process alive)
const realTimeout = globalThis.setTimeout;
globalThis.setTimeout = ((...a: Parameters<typeof setTimeout>) => realTimeout(...a).unref()) as typeof setTimeout;
const { Fp3dView3d } = (await import("./view3d.ts")) as unknown as { Fp3dView3d: { new (): Record<string, any> } };

const IDS = ["media_player.sample_lounge_tv", "media_player.sample_lounge_tv_cast", "media_player.sample_lounge_tv_android", "media_player.sample_lounge_tv_native"];
const state = (entity_id: string, state: string, attributes: Record<string, unknown> = {}) => ({ entity_id, state, attributes: { device_class: "tv", ...attributes }, last_changed: new Date().toISOString() });

/** A lounge with a TV on a unit and the given players placed 20 cm apart on it; returns the media cards. */
function cards(states: Record<string, [string, Record<string, unknown>?]>, opts: { onItem?: boolean; spread?: number } = {}): { id: string; title: string }[] {
  const el = new Fp3dView3d();
  const b = emptyBuilding();
  const floor = newFloor("g", "Ground", 0);
  if (opts.onItem !== false) floor.furniture = [{ id: "tv_unit", type: "tv", name: "TV", x: 2, z: 2, rotation: 0, w: 1.4, d: 0.4, h: 0.6, variant: null } as Furniture];
  const ids = Object.keys(states);
  floor.placements = ids.map((entity_id, i) => ({ entity_id, x: 1.7 + i * (opts.spread ?? 0.2), z: 2, y: 1, marker: "never" }) as never);
  b.floors = [floor];
  el.building = b;
  el.hass = {
    language: "en",
    locale: { language: "en", number_format: "language" },
    config: { unit_system: {} },
    entities: {},
    states: Object.fromEntries(ids.map((id) => [id, state(id, states[id][0], states[id][1])])),
  };
  const noop: any = new Proxy(() => undefined, { get: (_t, k) => (k === "then" ? undefined : noop), apply: () => undefined });
  el.viewer = noop;
  try {
    el.syncDevices(true);
  } catch {
    /* only the cards are looked at */
  }
  return (el._holos ?? el.holos ?? []).filter((c: { kind: string }) => c.kind === "media").map((c: { media: { id: string; title: string } }) => c.media);
}

test("four players on one TV, one playing: one card, for the playing one (#356)", () => {
  const got = cards({ [IDS[0]]: ["off"], [IDS[1]]: ["playing", { media_title: "Sample Film" }], [IDS[2]]: ["unavailable"], [IDS[3]]: ["off"] });
  assert.deepEqual(got.map((c) => c.id), [IDS[1]]);
  assert.equal(got[0].title, "Sample Film");
});

test("all off or unavailable: at most one card (#356)", () => {
  assert.equal(cards({ [IDS[0]]: ["off"], [IDS[1]]: ["off"], [IDS[2]]: ["unavailable"], [IDS[3]]: ["standby"] }).length, 1);
  assert.equal(cards({ [IDS[0]]: ["unavailable"], [IDS[1]]: ["unavailable"] }).length, 0);
});

test("a paused player with a title beats an idle one; players far apart off any item keep their own cards (#356)", () => {
  assert.deepEqual(cards({ [IDS[0]]: ["off"], [IDS[1]]: ["paused", { media_title: "Sample Show" }] }).map((c) => c.id), [IDS[1]]);
  assert.equal(cards({ [IDS[0]]: ["playing"], [IDS[1]]: ["playing"] }, { onItem: false, spread: 2 }).length, 2);
  assert.equal(cards({ [IDS[0]]: ["playing"], [IDS[1]]: ["playing"] }, { onItem: false, spread: 0.2 }).length, 1);
});

test("a single player behaves as before (#356)", () => {
  assert.deepEqual(cards({ [IDS[0]]: ["off"] }).map((c) => c.id), [IDS[0]]);
  assert.deepEqual(cards({ [IDS[0]]: ["playing", { media_title: "Sample" }] }).map((c) => c.id), [IDS[0]]);
});

test("grouping rule: same item or within half a metre on one floor; the best rank keeps the card (#356)", () => {
  assert.equal(GROUP_RADIUS, 0.5);
  const c = (id: string, x: number, rank: number, extra: object = {}) => ({ id, floorId: "g", x, z: 0, rank, ...extra });
  assert.deepEqual([...losers([c("a", 0, 1), c("b", 0.4, 5), c("c", 3, 1)])], ["a"]);
  assert.deepEqual([...losers([c("a", 0, 1), c("b", 0.4, 1)])], ["b"]);
  assert.deepEqual([...losers([c("a", 0, 1, { hostId: "f" }), c("b", 5, 4, { hostId: "f" })])], ["a"]);
  assert.equal(losers([c("a", 0, 1), { ...c("b", 0.1, 5), floorId: "u" }]).size, 0);
  assert.equal(hostAt([{ id: "f", x: 2, z: 2, w: 1.4, d: 0.4 }], 2.6, 2.1), "f");
  assert.equal(hostAt([{ id: "f", x: 2, z: 2, w: 1.4, d: 0.4 }], 2.6, 2.4), undefined);
  assert.equal(hostAt([{ id: "f", x: 2, z: 2, w: 1.4, d: 0.4, rotation: 90 }], 2.1, 2.6), "f");
});
