import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Furniture } from "./model.ts";
import { hasTimedRules, hiddenItems, itemShown, shownBuilding } from "./show-when.ts";
import type { HassEntity } from "./types.ts";

const item = (extra: Partial<Furniture> = {}): Furniture => ({ id: "tree", type: "plant", x: 0, z: 0, rotation: 0, w: 1, d: 1, h: 2, variant: null, ...extra });
const states: Record<string, HassEntity> = {};
// a local date and time (the rules are about the house's own calendar and clock)
const at = (iso: string) => new Date(iso);

test("an item with no rule always shows", () => {
  assert.equal(itemShown(item(), states, at("2026-07-14T03:00")), true);
  assert.equal(itemShown(item({ show_when: null }), states, at("2026-12-24T18:00")), true);
  assert.equal(itemShown(item({ show_when: { entity: null, intervals: [] } }), states, at("2026-01-01T00:00")), true);
});

test("an item that follows an entity hides while the entity is unavailable (or gone) and shows in any other state", () => {
  const st = (state: string): HassEntity => ({ entity_id: "light.garden", state, attributes: {} }) as HassEntity;
  const f = item({ show_when: { entity: "light.garden" } });
  const now = at("2026-07-14T20:00");
  assert.equal(itemShown(f, { "light.garden": st("off") }, now), true);
  assert.equal(itemShown(f, { "light.garden": st("on") }, now), true);
  assert.equal(itemShown(f, { "light.garden": st("unavailable") }, now), false);
  assert.equal(itemShown(f, {}, now), false);
  // "none" is no entity at all
  assert.equal(itemShown(item({ show_when: { entity: "none" } }), {}, now), true);
});

test("an item with date intervals shows only inside them, both days included", () => {
  const f = item({ show_when: { intervals: [{ from: "12-01", to: "12-31" }, { from: "04-10", to: "04-12" }] } });
  assert.equal(itemShown(f, states, at("2026-11-30T23:59")), false);
  assert.equal(itemShown(f, states, at("2026-12-01T00:00")), true);
  assert.equal(itemShown(f, states, at("2026-12-31T23:59")), true);
  assert.equal(itemShown(f, states, at("2027-01-01T00:00")), false);
  assert.equal(itemShown(f, states, at("2027-04-11T12:00")), true);
  assert.equal(itemShown(f, states, at("2027-04-13T00:00")), false);
});

test("a date interval runs over the new year when its first day comes after its last", () => {
  const f = item({ show_when: { intervals: [{ from: "12-15", to: "01-06" }] } });
  assert.equal(itemShown(f, states, at("2026-12-14T12:00")), false);
  assert.equal(itemShown(f, states, at("2026-12-20T12:00")), true);
  assert.equal(itemShown(f, states, at("2027-01-01T00:30")), true);
  assert.equal(itemShown(f, states, at("2027-01-06T23:00")), true);
  assert.equal(itemShown(f, states, at("2027-01-07T00:00")), false);
  assert.equal(itemShown(f, states, at("2027-07-01T12:00")), false);
});

test("a time-of-day interval on its own shows every day from its start up to its end, over midnight too", () => {
  const evening = item({ show_when: { intervals: [{ start: "18:00", end: "23:00" }] } });
  assert.equal(itemShown(evening, states, at("2026-03-02T17:59")), false);
  assert.equal(itemShown(evening, states, at("2026-03-02T18:00")), true);
  assert.equal(itemShown(evening, states, at("2026-09-20T22:59")), true);
  assert.equal(itemShown(evening, states, at("2026-09-20T23:00")), false);
  const night = item({ show_when: { intervals: [{ start: "22:00", end: "06:00" }] } });
  assert.equal(itemShown(night, states, at("2026-03-02T23:30")), true);
  assert.equal(itemShown(night, states, at("2026-03-03T05:59")), true);
  assert.equal(itemShown(night, states, at("2026-03-03T06:00")), false);
  assert.equal(itemShown(night, states, at("2026-03-03T12:00")), false);
});

test("dates and times together: garden lights only on summer evenings", () => {
  const f = item({ show_when: { intervals: [{ from: "06-01", to: "08-31", start: "19:30", end: "23:30" }] } });
  assert.equal(itemShown(f, states, at("2026-07-14T20:00")), true);
  assert.equal(itemShown(f, states, at("2026-07-14T12:00")), false);
  assert.equal(itemShown(f, states, at("2026-12-14T20:00")), false);
});

test("an entity and intervals together: both must allow it", () => {
  const st = (state: string): HassEntity => ({ entity_id: "switch.tree", state, attributes: {} }) as HassEntity;
  const f = item({ show_when: { entity: "switch.tree", intervals: [{ from: "12-01", to: "01-06" }] } });
  assert.equal(itemShown(f, { "switch.tree": st("on") }, at("2026-12-24T18:00")), true);
  assert.equal(itemShown(f, { "switch.tree": st("unavailable") }, at("2026-12-24T18:00")), false);
  assert.equal(itemShown(f, { "switch.tree": st("on") }, at("2026-07-24T18:00")), false);
});

function house() {
  const b = emptyBuilding();
  const floor = newFloor("gf", "Ground", 0);
  floor.furniture = [item({ id: "sofa" }), item({ id: "tree", show_when: { intervals: [{ from: "12-01", to: "12-31" }] } })];
  b.floors = [floor];
  return b;
}

test("the 3D view gets the plan without the items hidden now; the plan itself keeps them", () => {
  const b = house();
  const december = shownBuilding(b, states, at("2026-12-10T10:00"));
  assert.equal(december, b, "nothing hidden: the very same plan, so the 3D view does not rebuild");
  const july = shownBuilding(b, states, at("2026-07-10T10:00"));
  assert.deepEqual(july.floors[0].furniture.map((f) => f.id), ["sofa"]);
  assert.deepEqual(b.floors[0].furniture.map((f) => f.id), ["sofa", "tree"]);
  assert.deepEqual(hiddenItems(b, states, at("2026-07-10T10:00")), ["tree"]);
  assert.deepEqual(hiddenItems(b, states, at("2026-12-10T10:00")), []);
});

test("only plans with intervals need the clock", () => {
  const b = house();
  assert.equal(hasTimedRules(b), true);
  b.floors[0].furniture[1].show_when = { entity: "switch.tree" };
  assert.equal(hasTimedRules(b), false);
});
