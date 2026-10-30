import assert from "node:assert/strict";
import { test } from "node:test";
import type { LibraryEntry } from "../library-index.ts";

const { FurnitureLibrary } = await import("./library.ts");

const stool = { key: "stool", type: "stool", label: "Stool", kind: "seating", rooms: ["kitchen"], electric: false, light: false, outdoor: false, search: "stool", size: [0.4, 0.4, 0.6] } as unknown as LibraryEntry;

/** A library opened in a kitchen, with every filter switched on. */
function filtered() {
  const lib = new FurnitureLibrary() as unknown as Record<string, any>;
  lib.entries = [stool];
  lib.roomHint = "kitchen";
  lib.willUpdate(new Map([["roomHint", null], ["entries", null]]));
  lib.setRoom("bath");
  lib._electric = lib._light = lib._outdoor = true;
  lib._query = "stool";
  return lib;
}

test("Clear filters switches every chip off and shows all rooms, the typed words stay (#77)", () => {
  const lib = filtered();
  assert.equal(lib.activeFilters.length, 4);
  lib.clearFilters();
  assert.deepEqual(lib.filter, { query: "stool", room: null, electric: false, light: false, outdoor: false });
  assert.deepEqual(lib.activeFilters, []);
});

test("placing an item resets the filters: chips off, the room chip back on the open room (#77)", () => {
  const lib = filtered();
  const added: unknown[] = [];
  lib.addEventListener("library-add", (e: Event) => added.push((e as CustomEvent).detail));
  lib.pick(stool);
  assert.deepEqual(added, [{ type: "stool", mirror: false }]);
  assert.deepEqual(lib.filter, { query: "stool", room: "kitchen", electric: false, light: false, outdoor: false });
  // the preset follows the open room again
  lib.roomHint = "bath";
  lib.willUpdate(new Map([["roomHint", "kitchen"]]));
  assert.equal(lib.filter.room, "bath");
});
