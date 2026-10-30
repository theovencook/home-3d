import assert from "node:assert/strict";
import { test } from "node:test";
import { hintKey, type HintState } from "./editor-hint.ts";
import { translate } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";

const base: HintState = { tool: "select", hasFloor: true, rooms: 3, selected: null };
const en = { language: "en" } as unknown as HomeAssistant;

test("first run: no floor asks for a floor, an empty floor for the first room (#96)", () => {
  assert.equal(hintKey({ ...base, hasFloor: false, rooms: 0 }), "hint_empty");
  assert.equal(hintKey({ ...base, rooms: 0 }), "hint_first_room");
  // drawing tools say how they work even on an empty floor
  assert.equal(hintKey({ ...base, rooms: 0, tool: "rect" }), "hint_rect");
});

test("the hint follows the tool, one string per tool (#96)", () => {
  for (const tool of ["select", "rect", "polygon", "measure", "wall", "opening", "hole", "roof", "energy", "furniture", "outdoor", "pool"] as const) {
    const key = hintKey({ ...base, tool });
    assert.equal(key, `hint_${tool}`);
    assert.notEqual(translate(en, key), key, `${key} has an English text`);
  }
});

test("in Select, the hint explains what can be done with the selected thing (#96)", () => {
  assert.equal(hintKey({ ...base, selected: "furniture" }), "hint_sel_furniture");
  assert.equal(hintKey({ ...base, selected: "opening" }), "hint_sel_opening");
  assert.equal(hintKey({ ...base, selected: "device" }), "hint_sel_device");
  assert.equal(hintKey({ ...base, selected: "room" }), "hint_select");
  // the furniture tool keeps its own hint
  assert.equal(hintKey({ ...base, tool: "furniture", selected: "furniture" }), "hint_furniture");
});

test("temporary states win over the tool hint (#96)", () => {
  assert.equal(hintKey({ ...base, wallPick: true }), "hint_wall_pick");
  assert.equal(hintKey({ ...base, fixedHint: true, selected: "furniture" }), "fixed_drag_hint");
  assert.equal(hintKey({ ...base, tool: "outdoor", outdoorFree: true }), "hint_outdoor_free");
  assert.equal(hintKey({ ...base, tool: "pool", jointPlace: true }), "hint_joint_place");
  assert.equal(hintKey({ ...base, tool: "pool", pipeMode: true, poolArea: false }), "hint_pipe_pool");
  assert.equal(hintKey({ ...base, tool: "pool", pipeMode: true, poolArea: true }), "hint_pipe_start");
  assert.equal(hintKey({ ...base, tool: "pool", pipeMode: true, poolArea: true, pipeDraft: true }), "hint_pipe_next");
  assert.equal(hintKey({ ...base, tool: "pool", poolTech: true }), "hint_pool_tech");
});
