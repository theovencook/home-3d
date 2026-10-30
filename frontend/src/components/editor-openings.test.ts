import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor, type Opening } from "../model.ts";

// the editor's bundle hashes are build-time constants: plain strings will do here
for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dEditor } = (await import("./editor.ts")) as unknown as { Fp3dEditor: new () => Record<string, any> };

const SCALE = 50; // px per metre: the plan's (0, 0) sits at screen (100, 100)

function door(id: string, offset: number, extra: Partial<Opening> = {}): Opening {
  return { id, room_id: "r", edge: 0, offset, width: 0.9, type: "door", sill: 0, height: 2.05, hinge: "left", leaves: 1, swing: "in", cover: null, contact: null, contact2: null, tilt: null, ...extra } as Opening;
}

/** An editor on one 6 x 4 m room whose south wall (edge 0, from (0,0) to (6,0)) has a door centred 1.5 m along it. */
function editor() {
  const b = emptyBuilding();
  const floor = newFloor("f", "Ground", 0);
  floor.rooms.push({ id: "r", name: "Hall", area_id: null, points: [[0, 0], [6, 0], [6, 4], [0, 4]], floor_material: "wood" } as never);
  floor.openings.push(door("d1", 1.5));
  b.floors.push(floor);
  const el = new Fp3dEditor();
  el._doc = b;
  el._floorId = "f";
  el.canEdit = true;
  el._view = { scale: SCALE, ox: 100, oy: 100 };
  el.renderRoot = { activeElement: null, querySelector: () => ({ getBoundingClientRect: () => ({ left: 0, top: 0 }) }) };
  el._tool = "opening";
  return el;
}

/** A press on the plan at a world point; `on` names the opening whose drawn shape is under the pointer. */
function press(el: Record<string, any>, at: [number, number], on: string | null = null) {
  const target = { closest: (sel: string) => (on && sel === "[data-opening]" ? { getAttribute: () => on } : null) };
  const e = { pointerId: 1, button: 0, clientX: at[0] * SCALE + 100, clientY: at[1] * SCALE + 100, target, currentTarget: { setPointerCapture() {} }, shiftKey: false, altKey: false };
  el.pointerDown(e);
  el.pointers.clear();
}

/** The mouse resting over the plan at a world point (no button down). */
function hover(el: Record<string, any>, at: [number, number], on: string | null = null) {
  const target = { closest: (sel: string) => (on && sel === "[data-opening]" ? { getAttribute: () => on } : null) };
  el.onPointerMove({ pointerId: 1, pointerType: "mouse", clientX: at[0] * SCALE + 100, clientY: at[1] * SCALE + 100, target, altKey: false });
}

const openings = (el: Record<string, any>) => el._doc.floors[0].openings as Opening[];

test("in Doors & windows mode a tap on an existing door selects it and adds nothing (#62)", () => {
  const el = editor();
  press(el, [1.5, 0], "d1");
  assert.equal(openings(el).length, 1);
  assert.equal(el._openingId, "d1");
  // and the press can drag it along the wall
  assert.equal(el.drag?.kind, "opening");
});

test("a tap on the wall inside an existing door's width (beside its thin drawing) selects that door too (#62)", () => {
  const el = editor();
  press(el, [1.8, 0.1]);
  assert.equal(openings(el).length, 1);
  assert.equal(el._openingId, "d1");
});

test("a tap on a free stretch of wall adds a new opening of the active kind (#62)", () => {
  const el = editor();
  press(el, [4.5, 0]);
  assert.equal(openings(el).length, 2);
  const added = openings(el)[1];
  assert.equal(added.offset, 4.5);
  assert.equal(el._openingId, added.id);
});

test("a tap whose new door would overlap an existing one adds nothing and says why (#62)", () => {
  const el = editor();
  // 2.3 m along: a 0.9 m door there would run from 1.85 to 2.75, into the door at 1.05-1.95
  press(el, [2.3, 0]);
  assert.equal(openings(el).length, 1);
  assert.equal(el._openingId, null);
  assert.match(String(el._openingNote), /overlap/i);
  // the next press clears the message
  press(el, [4.5, 0]);
  assert.equal(el._openingNote, null);
});

test("the hint bar says what a tap will do where the mouse rests: add, select or nothing (#62)", () => {
  const el = editor();
  hover(el, [4.5, 0]);
  assert.match(el.hintText(), /add here: door/i);
  hover(el, [1.5, 0], "d1");
  assert.match(el.hintText(), /select: door/i);
  hover(el, [1.7, 0.05]);
  assert.match(el.hintText(), /select: door/i);
  hover(el, [2.3, 0]);
  assert.match(el.hintText(), /overlap/i);
  // away from any wall: the general hint
  hover(el, [3, 2]);
  assert.equal(el.hintText(), el.t("hint_opening"));
});

test("the overlap message shows in the hint bar until the next press (#62)", () => {
  const el = editor();
  press(el, [2.3, 0]);
  assert.match(el.hintText(), /overlap/i);
});
