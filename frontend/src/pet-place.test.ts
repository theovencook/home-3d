import assert from "node:assert/strict";
import { test } from "node:test";
import type { Building, Floor, Furniture, Pet } from "./model.ts";
import { isStaticPet, movePet, setPetStatic, staticPetsOn, staticPlace } from "./pet-place.ts";

const cat: Pet = { id: "p1", kind: "cat", name: "", fur: "orange" };
const item = (type: string, x: number, z: number, w: number, d: number, h: number, rotation = 0): Furniture => ({ id: type, type, x, z, w, d, h, rotation }) as Furniture;
const floorWith = (...furniture: Furniture[]): Floor => ({ id: "f1", furniture }) as unknown as Floor;

test("a pet roams unless it is switched to static", () => {
  assert.equal(isStaticPet(cat), false);
  assert.equal(isStaticPet({ ...cat, static: false }), false);
  assert.equal(isStaticPet({ ...cat, static: true }), true);
});

test("a static pet on the floor sits at its spot, turned as set", () => {
  const p = staticPlace(floorWith(), { ...cat, static: true, x: 2, z: 3, rotation: 90 });
  assert.deepEqual(p?.pos, [2, 3]);
  assert.equal(p?.y, 0);
  assert.equal(p?.pose, "sit");
  assert.ok(Math.abs(p!.heading - -Math.PI / 2) < 1e-9);
});

test("a static pet keeps its pose", () => {
  for (const pose of ["sit", "lie", "curl"] as const) assert.equal(staticPlace(floorWith(), { ...cat, static: true, x: 0, z: 0, pose })?.pose, pose);
});

test("a static pet without a spot yet has no place (the 3D view finds it one)", () => {
  assert.equal(staticPlace(floorWith(), { ...cat, static: true }), null);
  assert.equal(staticPlace(floorWith(), { ...cat, static: true, x: 1, z: null }), null);
});

test("a static pet on a sofa or bed lies on its top, facing the furniture's front unless turned", () => {
  const sofa = item("sofa_3", 0, 0, 2, 0.9, 0.85, 180);
  const onSofa = staticPlace(floorWith(sofa), { ...cat, static: true, x: 0.3, z: 0.1, pose: "curl" })!;
  assert.ok(Math.abs(onSofa.y - 0.85 * 0.58) < 1e-9);
  assert.ok(Math.abs(Math.cos(onSofa.heading) - Math.cos(-Math.PI)) < 1e-9);
  const bed = item("pack:theovencook.bedroom:bed_double", 5, 5, 1.6, 2, 0.6);
  assert.ok(Math.abs(staticPlace(floorWith(bed), { ...cat, static: true, x: 5, z: 5 })!.y - 0.6 * 0.64) < 1e-9);
  // a pet beside the sofa stays on the floor
  assert.equal(staticPlace(floorWith(sofa), { ...cat, static: true, x: 3, z: 0 })!.y, 0);
});

test("a static pet on a desk or table stands on its top (the plan's surfaces)", () => {
  const surface = (_: Floor, x: number) => (x < 1 ? 0.74 : 0);
  assert.equal(staticPlace(floorWith(), { ...cat, static: true, x: 0.5, z: 0 }, surface)!.y, 0.74);
  assert.equal(staticPlace(floorWith(), { ...cat, static: true, x: 2, z: 0 }, surface)!.y, 0);
});

test("switched to static, a pet without a spot sits in the middle of its floor's biggest room; back to roaming it keeps the spot for next time", () => {
  const floor = { id: "f1", furniture: [], rooms: [
    { id: "small", points: [[0, 0], [1, 0], [1, 1], [0, 1]] },
    { id: "big", points: [[2, 0], [6, 0], [6, 4], [2, 4]] },
  ] } as unknown as Floor;
  const still = setPetStatic(cat, true, floor);
  assert.equal(still.static, true);
  assert.deepEqual([still.x, still.z], [4, 2]);
  assert.equal(still.pose, "sit");
  const moved = { ...still, x: 5, z: 1, pose: "curl" as const };
  const roaming = setPetStatic(moved, false, floor);
  assert.equal(isStaticPet(roaming), false);
  const again = setPetStatic(roaming, true, floor);
  assert.deepEqual([again.x, again.z, again.pose], [5, 1, "curl"]);
});

const room = [[0, 0], [4, 0], [4, 4], [0, 4]];
const house = (pets: Pet[]): Building =>
  ({
    floors: [
      { id: "up", elevation: 2.7, rooms: [{ id: "r2", points: room }], furniture: [] },
      { id: "ground", elevation: 0, rooms: [{ id: "r1", points: room }], furniture: [] },
      { id: "loft", elevation: 5.4, rooms: [], furniture: [] },
    ],
    settings: { pets: { on: true, list: pets } },
  }) as unknown as Building;

test("the plan of a floor shows the static pets living on it (no floor set: the ground floor), not the roaming ones", () => {
  const still = { ...cat, id: "a", static: true, x: 1, z: 1 };
  const b = house([still, { ...still, id: "b", floor_id: "up" }, { ...cat, id: "c", x: 2, z: 2 }, { ...still, id: "d", floor_id: "gone" }]);
  assert.deepEqual(staticPetsOn(b, "ground").map((p) => p.id), ["a", "d"]);
  assert.deepEqual(staticPetsOn(b, "up").map((p) => p.id), ["b"]);
  assert.deepEqual(staticPetsOn(b, "loft"), []);
});

test("dragging a static pet in the editor moves its spot, on the grid; the other pets stay", () => {
  const b = house([{ ...cat, id: "a", static: true, x: 1, z: 1 }, { ...cat, id: "b", static: true, x: 3, z: 3 }]);
  movePet(b, "a", 2.43, 0.58, 0.05);
  const [a, other] = b.settings.pets!.list;
  assert.deepEqual([a.x, a.z], [2.45, 0.6]);
  assert.deepEqual([other.x, other.z], [3, 3]);
  // a roaming pet has no spot to drag
  const r = house([{ ...cat, id: "a" }]);
  movePet(r, "a", 2, 2, 0.05);
  assert.equal(r.settings.pets!.list[0].x, undefined);
});
