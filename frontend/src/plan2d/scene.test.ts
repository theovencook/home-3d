import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Building, type Furniture, type Opening, type Room } from "../model.ts";
import type { DeviceMarker, FlowPiece } from "../viewer/viewer3d.ts";
import { fitView, floorPictures, flowLines, planItems, planMarkers, planOpenings, shownFloor, zoomView } from "./scene.ts";

const rect = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]] }) as Room;
const item = (id: string, type: string, extra: Partial<Furniture> = {}): Furniture => ({ id, type, x: 1, z: 1, rotation: 0, w: 1, d: 0.5, h: 1, variant: null, ...extra }) as Furniture;
const opening = (id: string, type: "door" | "window", extra: Partial<Opening> = {}): Opening =>
  ({ id, room_id: "a", edge: 0, offset: 2, width: 0.9, type, sill: 0, height: 2, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...extra }) as Opening;
const marker = (id: string, extra: Partial<DeviceMarker> = {}): DeviceMarker => ({ id, floorId: "g", roomId: null, x: 1, z: 1, y: 1, icon: "", name: id, text: "", active: false, unavailable: false, glow: null, ...extra });

function house(): Building {
  const b = emptyBuilding();
  const cellar = newFloor("c", "Cellar", -2.5);
  cellar.rooms = [rect("c1", 0, 0, 3, 3)];
  const ground = newFloor("g", "Ground", 0);
  ground.rooms = [rect("a", 0, 0, 4, 3)];
  const top = newFloor("t", "Top", 2.7);
  top.rooms = [rect("t1", 0, 0, 4, 3)];
  const empty = newFloor("e", "Empty", 0.1);
  b.floors = [cellar, top, empty, ground];
  return b;
}

test("the plan shows the chosen floor; in the house view the floor at ground level", () => {
  const b = house();
  assert.equal(shownFloor(b, "t")?.id, "t");
  // the house view has no single floor in 2D: the one at ground level with rooms stands for it
  assert.equal(shownFloor(b, null)?.id, "g");
  assert.equal(shownFloor(b, "gone")?.id, "g");
  assert.equal(shownFloor(emptyBuilding(), null), null);
});

test("an item is tapped as what it stands for in 3D, and shows that device's live state and its own colour", () => {
  const floor = newFloor("g", "Ground", 0);
  floor.furniture = [
    item("lamp", "lamp_floor"),
    item("sofa", "sofa", { colors: { fabric: "#3f6b4f" } }),
    item("plain", "table"),
  ];
  const targets = new Map([["lamp", "light.reading"], ["plain", "item:plain"]]);
  const devices = [marker("light.reading", { active: true, glow: { color: [1, 0.8, 0.5], level: 0.8 } })];
  const [lamp, sofa, plain] = planItems(floor, targets, devices);
  assert.deepEqual([lamp.pick, lamp.on, lamp.glow], ["light.reading", true, "rgb(255,204,128)"]);
  // a sofa's main colour is its fabric (#12): the plan fills it with the item's own colour
  assert.deepEqual([sofa.pick, sofa.on, sofa.tint], [null, false, "#3f6b4f"]);
  assert.deepEqual([plain.pick, plain.tint], ["item:plain", null]);
});

test("a lamp item is tapped as its light, as the 3D lamp is (it has no pick target of its own)", () => {
  const floor = newFloor("g", "Ground", 0);
  floor.furniture = [item("ceiling", "lamp_ceiling"), item("dead", "lamp_ceiling")];
  const devices = [marker("light.hall", { furnitureId: "ceiling", pickable: true, active: true }), marker("light.dead", { furnitureId: "dead", pickable: true, unavailable: true })];
  const [lamp, dead] = planItems(floor, new Map(), devices);
  assert.deepEqual([lamp.pick, lamp.on], ["light.hall", true]);
  assert.deepEqual([dead.pick, dead.on, dead.unavailable], ["light.dead", false, true]);
});

test("device markers of the floor show when they carry a pin", () => {
  const list = [marker("light.a", { pin: true }), marker("light.b", { pin: false }), marker("sensor.c", { pin: true, floorId: "t" }), marker("switch.d")];
  assert.deepEqual(planMarkers(list, "g").map((m) => m.id), ["light.a", "switch.d"]);
});

test("doors swing on their hinge into the room, open ones and ones with a target are marked", () => {
  const floor = newFloor("g", "Ground", 0);
  floor.rooms = [rect("a", 0, 0, 4, 3)];
  floor.openings = [opening("d", "door"), opening("w", "window", { offset: 1, width: 1.2, leaves: 2 })];
  floor.openings.push(opening("guess", "door", { offset: 3.3, width: 0.8 }));
  const [door, win, guess] = planOpenings(
    floor,
    { exterior: 0.3, interior: 0.1 },
    new Map([["d", "binary_sensor.door"]]),
    new Map([
      ["d", { open: 0.8, tilt: 0, cover: null, sensed: true }],
      // a door without a sensor stands open in 3D as a guess: the plan does not call it open
      ["guess", { open: 1, tilt: 0, cover: null }],
    ]),
  );
  assert.equal(guess.open, false);
  assert.equal(door.pick, "binary_sensor.door");
  assert.equal(door.open, true);
  // one leaf as wide as the door, swinging through a quarter circle
  assert.equal(door.arcs.length, 1);
  assert.ok(Math.abs(door.arcs[0].r - 0.9) < 1e-9, JSON.stringify(door.arcs[0]));
  assert.equal(win.pick, null);
  assert.equal(win.open, false);
  assert.equal(win.arcs.length, 0);
  // two panes along the wall and a post between the leaves of a double window
  assert.equal(win.lines.length, 3);
});

test("energy flows of the floor shown lie on the plan; house-only pieces stay away", () => {
  const piece = (floorId: string, extra: Partial<FlowPiece> = {}): FlowPiece => ({ floorId, a: [0, 0.2, 0], b: [2, 0.2, 1], dist: 0, power: 500, color: [1, 0.7, 0], ...extra });
  const lines = flowLines([piece("g"), piece("t"), piece("g", { house: true }), piece("g", { power: 0 })], "g");
  assert.deepEqual(lines.map((l) => [l.x1, l.z1, l.x2, l.z2, l.color, l.moving]), [
    [0, 0, 2, 1, "rgb(255,179,0)", true],
    [0, 0, 2, 1, "rgb(255,179,0)", false],
  ]);
});

test("the plan fits the floor into the view and zooms around a point", () => {
  const v = fitView({ x0: 0, z0: 0, x1: 10, z1: 5 }, 600, 400, 50);
  // 500 × 300 pixels left: 50 px per metre across, centred
  assert.deepEqual(v, { k: 50, tx: 50, ty: 75 });
  const z = zoomView(v, 2, 300, 200);
  // the point under (300, 200) stays put
  assert.equal(z.k, 100);
  assert.equal((300 - z.tx) / z.k, (300 - v.tx) / v.k);
  assert.equal((200 - z.ty) / z.k, (200 - v.ty) / v.k);
  // not closer than a few pixels per centimetre, not further than a dot
  assert.equal(zoomView(v, 1000, 0, 0).k, 2000);
  assert.equal(zoomView(v, 0.0001, 0, 0).k, 2);
});

test("every floor with rooms gets a small picture of its rooms to switch floors by", () => {
  const pics = floorPictures(house(), 150, 112);
  assert.deepEqual(pics.map((p) => p.floorId), ["c", "t", "g"]);
  const svgText = decodeURIComponent(pics[2].url.replace("data:image/svg+xml,", ""));
  assert.match(svgText, /^<svg [^>]*viewBox="0 0 150 112"/);
  // the one room of the ground floor as an outline
  assert.equal((svgText.match(/<polygon /g) ?? []).length, 1);
});
