// The packs that ship with Home 3D (custom_components/home_3d/bundled_packs): every item shows in the library under
// the category its folder names. The backend reads the same folders (packs.py load_bundled).

import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { buildIndex, cardsOf, filterEntries, KINDS } from "./library-index.ts";
import { packName, type FurniturePack, type PackItem } from "./packs.ts";

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

test("the core pack is split into themed packs (#111): none is left, each ships MIT with items", () => {
  assert.equal(packs.find((p) => p.pack.id === "theovencook.core"), undefined);
  for (const id of ["living", "bedroom", "kitchen-bath", "office", "it", "decor", "outdoor", "household"]) {
    const found = packs.find((p) => p.pack.id === `theovencook.${id}`);
    assert.ok(found, `bundled_packs/theovencook.${id}`);
    assert.equal(found.pack.licence, "MIT");
    assert.ok(found.pack.items.length >= 5, id);
  }
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

test("the bundled packs show off every part shape: at least one item draws with each", () => {
  const used = new Set(packs.flatMap((p) => p.pack.items).flatMap((item) => item.parts.map((part) => part.shape)));
  for (const shape of ["box", "cyl", "loft", "sphere", "lathe", "rbox"]) assert.ok(used.has(shape as never), `no bundled item uses a ${shape}`);
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

test("theovencook.devices has an item for every part of the energy flow, and each is electric (#22)", async () => {
  const { energyRole, setPacks, packType } = await import("./packs.ts");
  const core = packs.find((p) => p.pack.id === "theovencook.devices")!;
  setPacks([core.pack]);
  const roles = new Map<string, string[]>();
  for (const item of core.pack.items) {
    const role = energyRole(packType(core.pack.id, item.id));
    if (!role) continue;
    assert.ok(item.electric, `${item.id} links a power sensor`);
    roles.set(role, [...(roles.get(role) ?? []), item.id]);
  }
  for (const role of ["meter", "inverter", "home_battery", "wallbox", "solar"]) assert.ok(roles.get(role)?.length, `no devices item is a ${role}`);
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

test("theovencook.makers and theovencook.devices ship with Home 3D beside the others (#109)", () => {
  for (const [id, name] of [["theovencook.makers", "Makers"], ["theovencook.devices", "Smart-home devices"]] as const) {
    const bundled = packs.find((p) => p.pack.id === id);
    assert.ok(bundled, `bundled_packs/${id}`);
    assert.equal(bundled.pack.name, name);
    assert.equal(bundled.pack.licence, "MIT");
    assert.ok(bundled.pack.items.length >= 1, `${id} starts with an item`);
  }
});

test("every bundled pack stays under the item limit and shows under its own name in the library", () => {
  for (const { pack } of packs) {
    assert.ok(pack.items.length <= 1000, `${pack.id} has ${pack.items.length} items`);
    const entries = buildIndex({ packs: [pack], basics: [], language: "en", basicName: (t) => t, basicNameEn: (t) => t, kindName: (k) => k, size: () => [1, 1, 1] });
    const label = packName(pack as FurniturePack, "en");
    assert.ok(entries.length && entries.every((e) => e.packLabel === label), `${pack.id} entries carry the pack name`);
    // the pack name finds its items
    assert.equal(filterEntries(entries, { query: label.split(" ")[0], room: null, electric: false, light: false, outdoor: false }).length, entries.length, pack.id);
  }
});

test("the library can be narrowed to one pack (#109)", () => {
  const entries = packs.flatMap(({ pack }) => buildIndex({ packs: [pack], basics: [], language: "en", basicName: (t) => t, basicNameEn: (t) => t, kindName: (k) => k, size: () => [1, 1, 1] }));
  const none = { query: "", room: null, electric: false, light: false, outdoor: false };
  const makers = filterEntries(entries, { ...none, pack: "theovencook.makers" });
  assert.ok(makers.length >= 1 && makers.every((e) => e.pack === "theovencook.makers"));
  assert.equal(filterEntries(entries, { ...none, pack: null }).length, entries.length);
  assert.equal(filterEntries(entries, none).length, entries.length, "no pack filter: everything");
  // the query still applies inside the pack
  assert.ok(filterEntries(entries, { ...none, pack: "theovencook.makers", query: "sofa" }).length === 0);
});

test("smart-home models batch 2 (#80): radiators take a thermostat, speakers a media player, lamps and fires glow", async () => {
  const { setPacks, packType, isThermostatItem } = await import("./packs.ts");
  const { mainLinkAccepts } = await import("./furniture-links.ts");
  const devices = packs.find((p) => p.pack.id === "theovencook.devices")!;
  const living = packs.find((p) => p.pack.id === "theovencook.living")!;
  setPacks([devices.pack, living.pack]);
  const hass = { states: {} } as never;
  const byId = (pk: typeof devices, id: string) => pk.pack.items.find((i) => i.id === id)!;
  // radiators in common styles each link a climate entity and no light
  const styles = ["radiator_column", "radiator_vertical", "radiator_cast_iron", "towel_rail", "radiator_single_panel", "radiator_low", "radiator_flat_tube", "radiator_electric"];
  for (const family of styles) {
    const items = devices.pack.items.filter((i) => i.family === family);
    assert.ok(items.length >= 2, `${family} has two sizes`);
    for (const item of items) {
      const type = packType(devices.pack.id, item.id);
      assert.ok(isThermostatItem(type), `${item.id} is run by a thermostat`);
      assert.ok(mainLinkAccepts(hass, type, "climate.sample_room"), `${item.id} takes a climate entity`);
      assert.ok(!mainLinkAccepts(hass, type, "light.sample_room"), `${item.id} takes no light`);
    }
  }
  // speakers take a media player
  for (const id of ["google_home", "nest_audio", "echo_dot", "echo", "echo_studio", "echo_pop", "homepod", "homepod_mini"]) {
    const item = byId(devices, id);
    assert.equal(item.group ?? "media", "media");
    assert.ok(item.electric && item.parts.some((p) => p.glow), `${id} has a light ring`);
    assert.ok(mainLinkAccepts(hass, packType(devices.pack.id, id), "media_player.sample_speaker"), `${id} takes a media player`);
  }
  // about 30 new desk and table lamps, each with a light and glowing parts, and fires that glow
  const lamps = living.pack.items.filter((i) => (i.tags ?? []).includes("desk lamp") && i.light === "table");
  assert.ok(lamps.length >= 30, `${lamps.length} desk and table lamps`);
  assert.equal(new Set(lamps.map((l) => l.id)).size, lamps.length);
  const fires = living.pack.items.filter((i) => (i.tags ?? []).some((t) => /fire pit|ethanol fire|electric fire|chiminea|electric stove/.test(t)));
  assert.ok(fires.length >= 10, `${fires.length} fires`);
  for (const f of fires) assert.ok(f.light && f.parts.some((p) => p.glow), `${f.id} glows with its light or switch`);
  setPacks([]);
});
