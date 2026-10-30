import assert from "node:assert/strict";
import { test } from "node:test";
import { emptyBuilding, newFloor } from "../model.ts";

// the editor's bundle hashes are build-time constants: plain strings will do here
for (const k of ["VIEWER", "EDITOR", "LOCATE", "ITEMS", "LANG", "PLAN2D", "FUN", "VOICE", "TIMETRAVEL", "CARD_EDITOR"]) (globalThis as Record<string, unknown>)[`__FP3D_${k}_HASH__`] = "test";
(globalThis as Record<string, unknown>).__FP3D_VERSION__ = "test";
const { Fp3dEditor } = (await import("./editor.ts")) as unknown as { Fp3dEditor: new () => Record<string, any> };

type Item = { id: string; x: number; z: number; entity?: string; group?: string | null; locked?: boolean };

/** An editor on two floors: a lounge with a TV, a sofa and a two-part block downstairs, a study upstairs. */
function editor() {
  const b = emptyBuilding();
  const ground = newFloor("g", "Ground", 0);
  const first = newFloor("u", "First", 2.7);
  ground.rooms.push({ id: "lounge", name: "Lounge", area_id: null, points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "wood" } as never);
  first.rooms.push({ id: "study", name: "Study", area_id: null, points: [[0, 0], [5, 0], [5, 4], [0, 4]], floor_material: "wood" } as never);
  const item = (id: string, x: number, extra: Partial<Item> = {}) => ({ id, type: "sofa", x, z: 2, rotation: 0, w: 1, d: 1, h: 1, variant: null, ...extra }) as never;
  ground.furniture.push(item("tv", 1, { entity: "media_player.sample_tv" }), item("sofa", 3), item("k1", 2, { group: "kitchen" }), item("k2", 2.6, { group: "kitchen" }));
  b.floors.push(ground, first);
  const el = new Fp3dEditor();
  el._doc = b;
  el._floorId = "g";
  el.renderRoot = { activeElement: null };
  const ids = (floor: number) => (el._doc.floors[floor].furniture as Item[]).map((f) => f.id);
  return { el, ids };
}

test("the floor dropdown moves the item upstairs with its entity link, and the editor follows it there (#73)", () => {
  const { el, ids } = editor();
  el.selectItem("furniture", "tv");
  el.moveSelectionToFloor("u");
  assert.deepEqual(ids(0), ["sofa", "k1", "k2"]);
  assert.deepEqual(ids(1), ["tv"]);
  assert.equal((el._doc.floors[1].furniture[0] as Item).entity, "media_player.sample_tv");
  assert.equal(el._floorId, "u");
  assert.equal(el._furnitureId, "tv");
  assert.equal(el._roomId, "study");
});

test("a block moves as a whole, and one undo brings it back (#73)", () => {
  const { el, ids } = editor();
  el.selectItem("furniture", "k1");
  el.moveSelectionToFloor("u");
  assert.deepEqual(ids(1), ["k1", "k2"]);
  el.undo();
  assert.deepEqual(ids(0), ["tv", "sofa", "k1", "k2"]);
  assert.deepEqual(ids(1), []);
});

test("a fixed item stays on its floor (#73)", () => {
  const { el, ids } = editor();
  (el._doc.floors[0].furniture as Item[])[1].locked = true;
  el.selectItem("furniture", "sofa");
  el.moveSelectionToFloor("u");
  assert.deepEqual(ids(1), []);
  assert.equal(el._floorId, "g");
});
