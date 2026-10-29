// The packs that ship with Home 3D (custom_components/home_3d/bundled_packs): every item shows in the library under
// the category its folder names. The backend reads the same folders (packs.py load_bundled).

import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { buildIndex, cardsOf, KINDS } from "./library-index.ts";
import type { FurniturePack, PackItem } from "./packs.ts";

const BUNDLED = fileURLToPath(new URL("../../custom_components/home_3d/bundled_packs", import.meta.url));

function filesIn(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? filesIn(path) : [path];
  });
}

/** A bundled pack as the backend sends it, with the category folder of each item. */
function readPack(folder: string): { pack: FurniturePack; folders: Map<string, string> } {
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
