// The packs that ship with Home 3D (custom_components/home_3d/bundled_packs): every item shows in the library under
// the category its folder names. The backend reads the same folders (packs.py load_bundled).

import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { buildIndex, cardsOf, filterEntries, KINDS } from "./library-index.ts";
import type { FurniturePack, PackItem } from "./packs.ts";

const BUNDLED = fileURLToPath(new URL("../../custom_components/home_3d/bundled_packs", import.meta.url));

function filesIn(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? filesIn(path) : [path];
  });
}

/** A bundled pack as the backend sends it, with the category folder of each item. */
function readPack(folder: string): { pack: Omit<FurniturePack, "items"> & { items: PackItem[] }; folders: Map<string, string> } {
  const meta = JSON.parse(readFileSync(join(folder, "pack.json"), "utf8"));
  const folders = new Map<string, string>();
  const items: PackItem[] = [];
  for (const path of filesIn(folder)) {
    const rel = relative(folder, path).split(sep);
    if (rel.length < 2 || !path.endsWith(".json")) continue;
    const item = JSON.parse(readFileSync(path, "utf8")) as PackItem;
    items.push(item);
    folders.set(item.id, rel[0]);
  }
  return { pack: { ...meta, bundled: true, items }, folders };
}

const packs = readdirSync(BUNDLED)
  .map((name) => join(BUNDLED, name))
  .filter((dir) => statSync(dir).isDirectory())
  .map(readPack);

test("theovencook.core ships with Home 3D", () => {
  const core = packs.find((p) => p.pack.id === "theovencook.core");
  assert.ok(core, "bundled_packs/theovencook.core");
  assert.equal(core.pack.licence, "MIT");
  assert.ok(core.pack.items.length >= 5);
});

test("every bundled item shows in the library under the category its folder names", () => {
  for (const { pack, folders } of packs) {
    const entries = buildIndex({ packs: [pack], basics: [], language: "en", basicName: (t) => t, basicNameEn: (t) => t, kindName: (k) => k, size: () => [1, 1, 1] });
    for (const item of pack.items) {
      const folder = folders.get(item.id)!;
      assert.ok((KINDS as readonly string[]).includes(folder), `${pack.id}/${folder}: a category folder is named after a library section`);
      const entry = entries.find((e) => e.type === `pack:${pack.id}:${item.id}`);
      assert.ok(entry, `${pack.id}/${item.id} is in the library`);
      assert.equal(entry.kind, folder, `${pack.id}/${item.id} shows under "${folder}"`);
      assert.equal(entry.label, item.name.en);
      assert.ok(cardsOf(entries, entry.kind).some((c) => c.entries.includes(entry)), `${item.id} has a card in its section`);
    }
  }
});

test("theovencook.core shows off every part shape: at least one item draws with each", () => {
  const core = packs.find((p) => p.pack.id === "theovencook.core")!;
  const used = new Set(core.pack.items.flatMap((item) => item.parts.map((part) => part.shape)));
  for (const shape of ["box", "cyl", "loft", "sphere", "lathe", "rbox"]) assert.ok(used.has(shape as never), `no core item uses a ${shape}`);
});

test("every bundled lamp is linked as a light and has parts that glow with it", () => {
  for (const { pack, folders } of packs) {
    for (const item of pack.items) {
      if (folders.get(item.id) !== "lamp") continue;
      assert.ok(item.light, `${pack.id}/${item.id} says how it lights the room`);
      assert.ok(item.parts.some((p) => p.glow), `${pack.id}/${item.id} has glowing parts`);
    }
  }
});

test("theovencook.core has an item for every part of the energy flow, and each is electric (#22)", async () => {
  const { energyRole, setPacks, packType } = await import("./packs.ts");
  const core = packs.find((p) => p.pack.id === "theovencook.core")!;
  setPacks([core.pack]);
  const roles = new Map<string, string[]>();
  for (const item of core.pack.items) {
    const role = energyRole(packType(core.pack.id, item.id));
    if (!role) continue;
    assert.ok(item.electric, `${item.id} links a power sensor`);
    roles.set(role, [...(roles.get(role) ?? []), item.id]);
  }
  for (const role of ["meter", "inverter", "home_battery", "wallbox", "solar"]) assert.ok(roles.get(role)?.length, `no core item is a ${role}`);
  setPacks([]);
});

test("theovencook.ikea-uk ships with Home 3D: every item has its IKEA name, and both names find it (#30)", () => {
  const ikea = packs.find((p) => p.pack.id === "theovencook.ikea-uk");
  assert.ok(ikea, "bundled_packs/theovencook.ikea-uk");
  assert.equal(ikea.pack.licence, "MIT");
  const entries = buildIndex({ packs: [ikea.pack], basics: [], language: "en", basicName: (t) => t, basicNameEn: (t) => t, kindName: (k) => k, size: () => [1, 1, 1] });
  const find = (query: string) => filterEntries(entries, { query, room: null, electric: false, light: false, outdoor: false }).map((e) => e.type);
  for (const item of ikea.pack.items) {
    assert.ok(item.ikea, `${item.id} carries its IKEA product name`);
    assert.notEqual(item.name.en.toUpperCase(), item.ikea, `${item.id}: the readable name is not the product name`);
    const typeId: string = `pack:${ikea.pack.id}:${item.id}`;
    assert.ok(find(item.ikea).includes(typeId), `"${item.ikea}" finds ${item.id}`);
    assert.ok(find(item.name.en).includes(typeId), `"${item.name.en}" finds ${item.id}`);
  }
  // a known pair: the cube shelving unit is found as KALLAX and as a shelving unit
  assert.ok(find("kallax").some((t) => t.startsWith("pack:theovencook.ikea-uk:")));
  // colourways are search words: an IKEA name with its colour finds the item
  assert.ok(find("kallax black-brown").some((t) => t.startsWith("pack:theovencook.ikea-uk:kallax_")));
});
