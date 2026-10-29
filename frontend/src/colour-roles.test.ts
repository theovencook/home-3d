import assert from "node:assert/strict";
import { test } from "node:test";
import { COLOUR_PRESETS, COLOUR_ROLES, itemColourRoles, setRoleColour } from "./colour-roles.ts";
import { setPacks, type FurniturePack } from "./packs.ts";

const pack: FurniturePack = {
  id: "demo.pack",
  name: "Demo",
  publisher: "Demo",
  items: [
    {
      id: "chair",
      name: { en: "Chair" },
      size: [0.5, 0.5, 0.9],
      parts: [
        { shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0.5, h: 0.1, color: "fabric", top: "cushion" },
        { shape: "box", x: 0, z: 0, w: 0.1, d: 0.1, y: 0, h: 0.5, color: "wood" },
        { shape: "box", x: 0, z: 0, w: 0.1, d: 0.1, y: 0, h: 0.5, color: "#c4500a" },
      ],
    },
  ],
};

test("the colour roles are the eleven of the plan, in the panel's order", () => {
  assert.deepEqual([...COLOUR_ROLES], ["body", "fabric", "cushion", "wood", "white", "metal", "dark", "glass", "plant", "pot", "accent"]);
});

test("an item's roles: a pack item's from its parts (fixed colours aside), a built-in's from its model (#12)", () => {
  setPacks([pack]);
  assert.deepEqual(itemColourRoles("pack:demo.pack:chair"), ["fabric", "cushion", "wood"]);
  assert.deepEqual(itemColourRoles("sofa"), ["fabric", "cushion", "wood"]);
  // built-in lamps are drawn by the light and have no roles; an unknown type is a plain body box
  assert.deepEqual(itemColourRoles("lamp_ceiling"), []);
  assert.deepEqual(itemColourRoles("pack:gone.pack:thing"), ["body"]);
  setPacks([]);
});

test("the named presets: oak, walnut, white gloss, grey fabric, rattan and brass, each a #rrggbb colour", () => {
  const ids = COLOUR_PRESETS.map((p) => p.id);
  for (const id of ["oak", "walnut", "white_gloss", "grey_fabric", "rattan", "brass"]) assert.ok(ids.includes(id), id);
  assert.equal(new Set(ids).size, ids.length, "unique ids");
  for (const p of COLOUR_PRESETS) assert.match(p.hex, /^#[0-9a-f]{6}$/, p.id);
});

test("IKEA finishes are presets too, so an IKEA UK item can take its colourway (#30)", () => {
  const ids = COLOUR_PRESETS.map((p) => p.id);
  for (const id of ["black_brown", "white_stained_oak", "birch", "pine", "acacia", "anthracite"]) assert.ok(ids.includes(id), id);
});

test("setting a role's colour keeps the others; clearing the last one leaves no override at all", () => {
  const one = setRoleColour(null, "wood", "#8B5A2B");
  assert.deepEqual(one, { wood: "#8b5a2b" });
  const two = setRoleColour(one, "fabric", "#808080");
  assert.deepEqual(two, { wood: "#8b5a2b", fabric: "#808080" });
  assert.deepEqual(one, { wood: "#8b5a2b" }, "the old value is not changed");
  assert.deepEqual(setRoleColour(two, "wood", null), { fabric: "#808080" });
  assert.equal(setRoleColour({ wood: "#8b5a2b" }, "wood", null), null);
  // not a colour: the role goes back to the theme
  assert.equal(setRoleColour({ wood: "#8b5a2b" }, "wood", "brown"), null);
});
