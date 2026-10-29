import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { basicTypes, buildIndex, cardsOf, classify, familyLabel, familyOf, filterEntries, KINDS, ROOMS, roomKindOf, sizeText, variantLabel, type LibraryEntry } from "./library-index.ts";
import { furnitureName } from "./furniture-names.ts";
import { translate } from "./i18n.ts";
import type { HomeAssistant } from "./types.ts";
import type { FurniturePack, PackItem } from "./packs.ts";

const part = { shape: "box" as const, x: 0, z: 0, w: 1, d: 1, y: 0, h: 1, color: "dark" };
const item = (id: string, en: string, de = en, extra: Partial<PackItem> = {}): PackItem => ({ id, name: { de, en }, size: [1, 0.5, 0.8], parts: [part], ...extra });

test("pack items are classified by their words, with the pack's room as the fallback", () => {
  assert.deepEqual(classify("home3d.living", item("sofa_3", "3-seater sofa")), { kind: "sofa", rooms: ["living"] });
  assert.deepEqual(classify("home3d.kitchen", item("base_60", "Base unit 60")), { kind: "kitchen", rooms: ["kitchen"] });
  assert.deepEqual(classify("home3d.kitchen", item("coffee_machine", "Bean-to-cup coffee machine")).kind, "appliance");
  assert.deepEqual(classify("home3d.pets", item("cat_tree", "Cat tree (large)")).kind, "pets");
  assert.deepEqual(classify("home3d.garden", item("tree_oak", "Oak")), { kind: "plant", rooms: ["garden"] });
  assert.deepEqual(classify("home3d.vehicles", item("campervan", "Campervan (pop-top)")), { kind: "vehicle", rooms: ["garage"] });
  assert.deepEqual(classify("home3d.kids", item("kids_desk", "Kids desk")).kind, "kids");
  assert.deepEqual(classify("home3d.bath", item("mirror_round", "Round mirror with light")).kind, "bath");
  assert.deepEqual(classify("home3d.smarthome", item("wallbox", "Wallbox")).kind, "energy");
  assert.deepEqual(classify("home3d.utility", item("gas_boiler", "Gas condensing boiler")).kind, "heating");
  assert.deepEqual(classify("home3d.cinema", item("tower_speaker", "Floor-standing speaker")), { kind: "media", rooms: ["living", "hobby"] });
  assert.deepEqual(classify("home3d.stairs", item("railing_glass", "Glass railing")).kind, "stairs");
  assert.deepEqual(classify("home3d.office", item("printer_3d", "3D printer")).kind, "tech");
  assert.deepEqual(classify("home3d.living", item("arc_lamp", "Arc floor lamp")).kind, "lamp");
  // a pack's own fields win
  assert.deepEqual(classify("home3d.living", item("thing", "Sofa", "Sofa", { group: "deco", room: ["hall"] })), { kind: "deco", rooms: ["hall"] });
  // unknown words fall back to deco in the pack's room
  assert.deepEqual(classify("home3d.bedroom", item("xyz", "Zorbulator")), { kind: "deco", rooms: ["bedroom"] });
});

test("a room's name tells which room kind it is, in several languages", () => {
  assert.equal(roomKindOf("Wohnzimmer"), "living");
  assert.equal(roomKindOf("Living room"), "living");
  assert.equal(roomKindOf("Küche"), "kitchen");
  assert.equal(roomKindOf("Cucina"), "kitchen");
  assert.equal(roomKindOf("Kinderzimmer Mia"), "kids");
  assert.equal(roomKindOf("Schlafzimmer"), "bedroom");
  assert.equal(roomKindOf("Bad"), "bath");
  assert.equal(roomKindOf("Gäste-WC"), "bath");
  assert.equal(roomKindOf("Büro"), "office");
  assert.equal(roomKindOf("Flur"), "hall");
  assert.equal(roomKindOf("HWR"), "utility");
  assert.equal(roomKindOf("Garage"), "garage");
  assert.equal(roomKindOf("Terrasse"), "garden");
  assert.equal(roomKindOf("Fitnessraum"), "hobby");
  assert.equal(roomKindOf("Raum 3"), null);
});

test("families: the size suffix of the id, the numbers of the name as the chip, the name without them as the label", () => {
  assert.equal(familyOf(item("sofa_3", "3-seater sofa")), "sofa");
  assert.equal(familyOf(item("cube_4x2", "Cube shelf 4 × 2")), "cube");
  assert.equal(familyOf(item("chesterfield", "Chesterfield sofa")), null);
  assert.equal(familyOf(item("x", "x", "x", { family: "fam" })), "fam");
  assert.equal(familyLabel("Dining table 160 × 90"), "Dining table");
  assert.equal(familyLabel("Esstisch 160 × 90"), "Esstisch");
  assert.equal(familyLabel("2-seater sofa"), "Sofa");
  assert.equal(familyLabel("Sofa 2-Sitzer"), "Sofa");
  assert.equal(familyLabel("3-door wardrobe"), "Wardrobe");
  assert.equal(familyLabel("Smart display 15″ (wall)"), "Smart display (wall)");
  assert.equal(variantLabel("Bed 160 × 200"), "160 × 200");
  assert.equal(variantLabel("2-seater sofa"), "2");
  assert.equal(variantLabel("Chesterfield sofa"), null);
});

test("the index lists built-in kinds and pack items, folds families into cards and filters by room, words and chips", () => {
  const pack: FurniturePack = {
    id: "home3d.living",
    name: "Wohnzimmer",
    publisher: "Home 3D",
    release: 4,
    items: [
      item("sofa_2", "2-seater sofa", "Sofa 2-Sitzer"),
      item("sofa_3", "3-seater sofa", "Sofa 3-Sitzer"),
      item("chesterfield", "Chesterfield sofa", "Chesterfield-Sofa"),
      item("arc_lamp", "Arc floor lamp", "Bogenleuchte", { light: "floor" }),
      item("tv_stand", "TV on a stand", "Fernseher auf Standfuß", { electric: true }),
    ],
  };
  const entries = buildIndex({
    packs: [pack],
    basics: basicTypes(),
    language: "de",
    basicName: (t) => `DE ${t}`,
    basicNameEn: (t) => `EN ${t}`,
    kindName: (k) => `kind ${k}`,
    size: () => [1, 1, 1],
  });
  assert.ok(entries.length > 70, "built-in kinds are in");
  const sofa2 = entries.find((e) => e.type === "pack:home3d.living:sofa_2")!;
  assert.equal(sofa2.label, "Sofa 2-Sitzer");
  assert.equal(sofa2.family, "sofa");
  assert.equal(sofa2.variant, "2");
  assert.equal(sofa2.packRelease, 4);
  assert.equal(entries.find((e) => e.type === "pack:home3d.living:arc_lamp")!.light, true);

  const sofas = cardsOf(entries, "sofa");
  const family = sofas.find((c) => c.key === "home3d.living:sofa")!;
  assert.equal(family.label, "Sofa");
  assert.equal(family.entries.length, 2);
  assert.ok(sofas.some((c) => c.key === "pack:home3d.living:chesterfield"), "a lone item is its own card");
  assert.ok(sofas.some((c) => c.key === "sofa"), "the built-in sofa is a card too");

  const none = { query: "", room: null, electric: false, light: false, outdoor: false };
  assert.equal(filterEntries(entries, { ...none, query: "chester" }).length, 1);
  assert.equal(filterEntries(entries, { ...none, query: "sofa sitzer" }).length, 2, "every word must match");
  assert.ok(filterEntries(entries, { ...none, query: "fernseher" }).some((e) => e.type === "pack:home3d.living:tv_stand"));
  assert.ok(filterEntries(entries, { ...none, query: "lampe" }).some((e) => e.type === "lamp_ceiling"), "everyday words find a kind");
  const kitchen = filterEntries(entries, { ...none, room: "kitchen" });
  assert.ok(kitchen.every((e) => !e.rooms.length || e.rooms.includes("kitchen")));
  assert.ok(!kitchen.some((e) => e.type === "pack:home3d.living:sofa_2"));
  assert.ok(kitchen.some((e) => e.type === "lamp_ceiling"), "items for any room fit every room");
  assert.ok(filterEntries(entries, { ...none, light: true }).every((e: LibraryEntry) => e.light));
  assert.ok(filterEntries(entries, { ...none, electric: true }).some((e) => e.type === "pack:home3d.living:tv_stand"));
});

test("an item for one side gets a mirrored twin for the other, explicit pairs become a family", () => {
  const pack: FurniturePack = {
    id: "home3d.living",
    name: "Wohnzimmer",
    publisher: "Home 3D",
    items: [item("sofa_chaise", "Sofa with chaise (left)", "Sofa mit Récamiere links"), item("corner_left", "Corner sofa (left)", "Ecksofa links"), item("corner_right", "Corner sofa (right)", "Ecksofa rechts")],
  };
  const entries = buildIndex({ packs: [pack], basics: [], language: "de", basicName: (t) => t, basicNameEn: (t) => t, kindName: (k) => k, size: () => [1, 1, 1] });
  const twin = entries.find((e) => e.key === "pack:home3d.living:sofa_chaise#m")!;
  assert.ok(twin, "a twin exists");
  assert.equal(twin.mirror, true);
  assert.equal(twin.type, "pack:home3d.living:sofa_chaise");
  assert.equal(twin.label, "Sofa mit Récamiere rechts");
  assert.ok(!entries.some((e) => e.key.endsWith("corner_left#m")), "an explicit pair needs no twin");
  const cards = cardsOf(entries, "sofa");
  const chaise = cards.find((c) => c.key === "home3d.living:pack:home3d.living:sofa_chaise")!;
  assert.equal(chaise.entries.length, 2);
  assert.deepEqual(chaise.entries.map((e) => e.variant), ["links", "rechts"]);
  const corner = cards.find((c) => c.key === "home3d.living:corner")!;
  assert.equal(corner.entries.length, 2, "corner_left and corner_right fold into one card");
});

test("sizes read as centimetres, big things as metres", () => {
  assert.equal(sizeText([2.1, 0.92, 0.85], "de"), "210 × 92 cm");
  assert.equal(sizeText([12, 3.5, 2], "de"), "12 × 3,5 m");
  assert.equal(sizeText([12, 3.5, 2], "en"), "12 × 3.5 m");
});

test("the items of a v2 pack (a folder with a licence) show in the library under their pack", () => {
  const pack: FurniturePack = {
    format: "home3d-pack",
    version: 2,
    id: "theovencook.core",
    name: "Home 3D core",
    publisher: "theovencook",
    licence: "MIT",
    release: 2,
    items: [item("stool", "Bar stool", "Barhocker", { group: "seating" }), item("side_table", "Side table", "Beistelltisch", { group: "table" })],
  };
  const entries = buildIndex({ packs: [pack], basics: [], language: "en", basicName: (t) => t, basicNameEn: (t) => t, kindName: (k) => k, size: () => [1, 1, 1] });
  assert.deepEqual(
    entries.map((e) => [e.type, e.label, e.kind, e.packLabel]),
    [
      ["pack:theovencook.core:stool", "Bar stool", "seating", "Home 3D core"],
      ["pack:theovencook.core:side_table", "Side table", "table", "Home 3D core"],
    ],
  );
});

// #5: the vocabulary packs use (rooms, kinds, UK words, IKEA names)
const EN = { language: "en" } as HomeAssistant;
const basicEnglish = (type: string) => furnitureName(EN, type);
const indexOf = (packs: FurniturePack[], basics: string[] = basicTypes(), language = "en") =>
  buildIndex({ packs, basics, language, basicName: (t) => basicEnglish(t), basicNameEn: (t) => basicEnglish(t), kindName: (k) => k, size: () => [1, 1, 1] });
const none = { query: "", room: null, electric: false, light: false, outdoor: false };

test("conservatory and loft are rooms the library filters by, and room names find them", () => {
  assert.ok(ROOMS.includes("conservatory"));
  assert.ok(ROOMS.includes("loft"));
  assert.equal(translate(EN, "lib_room_conservatory"), "Conservatory");
  assert.equal(translate(EN, "lib_room_loft"), "Loft");
  assert.equal(roomKindOf("Conservatory"), "conservatory");
  assert.equal(roomKindOf("Wintergarten"), "conservatory");
  assert.equal(roomKindOf("Orangery"), "conservatory");
  assert.equal(roomKindOf("Loft"), "loft");
  assert.equal(roomKindOf("Attic"), "loft");
  assert.equal(roomKindOf("Dachboden"), "loft");
  const loft = filterEntries(indexOf([]), { ...none, room: "loft" });
  assert.ok(loft.some((e) => e.type === "loft_ladder"), "the loft ladder is loft furniture");
  assert.ok(!loft.some((e) => e.type === "sofa"));
  const conservatory = filterEntries(indexOf([]), { ...none, room: "conservatory" });
  assert.ok(conservatory.some((e) => e.type === "armchair"));
  assert.ok(!conservatory.some((e) => e.type === "wc"));
  // a pack may name them
  const pack: FurniturePack = { id: "acme.misc", name: "Misc", publisher: "Acme", items: [item("rattan_chair", "Rattan chair", "Rattanstuhl", { room: ["conservatory"] })] };
  assert.deepEqual(classify(pack.id, pack.items[0]).rooms, ["conservatory"]);
});

test("decor comes in sub-kinds and network gear has its own kind, each a library section", () => {
  const sections: [string, string][] = [
    ["tray", "Trays"],
    ["frame", "Frames & pictures"],
    ["vase", "Vases"],
    ["cushion", "Cushions"],
    ["throw", "Throws"],
    ["candle", "Candles"],
    ["network", "Network"],
  ];
  for (const [kind, title] of sections) {
    assert.ok((KINDS as readonly string[]).includes(kind), kind);
    assert.equal(translate(EN, `lib_kind_${kind}` as Parameters<typeof translate>[1]), title);
  }
  // the decor sub-kinds stand right after decoration
  assert.deepEqual(KINDS.slice(KINDS.indexOf("deco"), KINDS.indexOf("deco") + 7), ["deco", "tray", "frame", "vase", "cushion", "throw", "candle"]);
  // words sort old packs' items into them
  const kindOf = (id: string, en: string) => classify("acme.living", item(id, en)).kind;
  assert.equal(kindOf("serving_tray", "Serving tray"), "tray");
  assert.equal(kindOf("photo_frame", "Photo frame 13 × 18"), "frame");
  assert.equal(kindOf("painting_large", "Large painting"), "frame");
  assert.equal(kindOf("vase_tall", "Tall vase"), "vase");
  assert.equal(kindOf("scatter_cushion", "Scatter cushion"), "cushion");
  assert.equal(kindOf("sofa_throw", "Sofa throw"), "throw");
  assert.equal(kindOf("pillar_candle", "Pillar candle"), "candle");
  assert.equal(kindOf("router", "Wi-Fi router"), "network");
  assert.equal(kindOf("network_switch", "Network switch 8-port"), "network");
  assert.equal(kindOf("nas", "NAS (2 bays)"), "network");
  assert.equal(kindOf("bed_frame", "Bed frame 160 × 200"), "bed", "a bed frame is a bed");
  assert.equal(kindOf("wall_switch", "Light switch"), "tech", "a light switch is no network gear");
  assert.equal(kindOf("mirror", "Round mirror"), "deco");
  assert.equal(kindOf("bench_cushions", "Bench with cushions"), "seating", "what it comes with does not make it decor");
  assert.equal(kindOf("sofa_cushions", "Sofa with scatter cushions"), "sofa");
  assert.equal(kindOf("sideboard_deco", "Sideboard with vase and frames"), "storage");
  // a pack may say it, and the section holds it
  const pack: FurniturePack = { id: "acme.deco", name: "Deco", publisher: "Acme", items: [item("thing", "Thing", "Ding", { group: "throw" })] };
  const entries = indexOf([pack]);
  assert.equal(cardsOf(entries, "throw").length, 1);
  // the built-in access point is network gear, and "decor" finds the sub-kinds
  assert.equal(entries.find((e) => e.type === "wifi_ap")!.kind, "network");
  assert.ok(filterEntries(entries, { ...none, query: "decor" }).some((e) => e.type === "pack:acme.deco:thing"));
});

test("names are English first with the UK words, and the other words for a thing find it too", () => {
  // the built-in kinds' English names use the UK words
  assert.equal(basicEnglish("stove"), "Cooker");
  assert.equal(basicEnglish("worktop"), "Worktop");
  assert.equal(basicEnglish("wardrobe"), "Wardrobe");
  assert.equal(basicEnglish("nightstand"), "Bedside table");
  assert.equal(basicEnglish("tv_board"), "TV unit");
  assert.equal(basicEnglish("kitchen_wall"), "Wall unit");
  assert.equal(basicEnglish("mailbox"), "Letterbox");
  assert.equal(basicEnglish("dryer"), "Tumble dryer");
  const pack: FurniturePack = {
    id: "acme.kitchen",
    name: "Kitchen",
    publisher: "Acme",
    items: [
      item("cooktop_induction", "Induction cooktop 80", "Induktionskochfeld 80"),
      item("range_cooker", "Range cooker 90", "Standherd 90"),
      item("countertop_oak", "Oak countertop 240", "Arbeitsplatte Eiche 240", { group: "kitchen" }),
      item("closet_2", "2-door closet", "Kleiderschrank 2-türig"),
      item("hood", "Range hood", "Dunstabzugshaube"),
      item("wood_stove", "Wood stove", "Kaminofen"),
      item("hobby_bench", "Hobby workbench", "Hobby-Werkbank"),
    ],
  };
  const entries = indexOf([pack]);
  const find = (query: string) => filterEntries(entries, { ...none, query }).map((e) => e.type);
  const hob = find("hob");
  for (const t of ["stove", "pack:acme.kitchen:cooktop_induction", "pack:acme.kitchen:range_cooker"]) assert.ok(hob.includes(t), `hob finds ${t}`);
  for (const t of ["pack:acme.kitchen:wood_stove", "pack:acme.kitchen:hood", "pack:acme.kitchen:hobby_bench"]) assert.ok(!hob.includes(t), `hob does not find ${t}`);
  const worktop = find("worktop");
  for (const t of ["worktop", "pack:acme.kitchen:countertop_oak"]) assert.ok(worktop.includes(t), `worktop finds ${t}`);
  assert.ok(!worktop.includes("pack:acme.kitchen:cooktop_induction"));
  assert.ok(find("wardrobe").includes("pack:acme.kitchen:closet_2"), "the UK word finds the US name");
  assert.ok(find("closet").includes("wardrobe"), "the US word finds the UK name");
  assert.ok(find("cooktop").includes("stove"));
  assert.ok(find("nightstand").includes("nightstand"));
  assert.ok(!find("cooker").includes("pack:acme.kitchen:cooktop_induction"), "a hob alone is no cooker");
  // long words still match inside German compounds
  assert.ok(find("lampe").includes("lamp_ceiling"));
  assert.ok(find("kochfeld").includes("pack:acme.kitchen:cooktop_induction"));
});

test("an item's IKEA name finds it alongside its readable name", () => {
  const pack: FurniturePack = {
    id: "acme.flatpack",
    name: "Flat-pack",
    publisher: "Acme",
    items: [item("cube_shelf_4x4", "Cube shelving unit 4 × 4", "Würfelregal 4 × 4", { group: "storage", ikea: "KALLAX" }), item("side_table", "Side table", "Beistelltisch", { ikea: "LACK" })],
  };
  const entries = indexOf([pack], []);
  const kallax = entries.find((e) => e.type === "pack:acme.flatpack:cube_shelf_4x4")!;
  assert.equal(kallax.label, "Cube shelving unit 4 × 4", "the readable name stays the label");
  assert.equal(kallax.ikea, "KALLAX");
  const find = (query: string) => filterEntries(entries, { ...none, query }).map((e) => e.type);
  assert.deepEqual(find("kallax"), ["pack:acme.flatpack:cube_shelf_4x4"]);
  assert.deepEqual(find("Kallax 4"), ["pack:acme.flatpack:cube_shelf_4x4"], "with the readable name's words too");
  assert.ok(find("cube shelving").includes("pack:acme.flatpack:cube_shelf_4x4"));
  assert.deepEqual(find("lack"), ["pack:acme.flatpack:side_table"]);
  assert.equal(indexOf([{ ...pack, items: [item("plain", "Plain stool")] }], []).find((e) => e.type === "pack:acme.flatpack:plain")!.ikea, null);
});

test("docs/packs.md lists every kind and room id the library knows, for pack authors", () => {
  const docs = readFileSync(new URL("../../docs/packs.md", import.meta.url), "utf8");
  const listed = (field: string) => {
    const para = docs.split(`- \`${field}\`:`)[1].split(/\n\s*- `/)[0];
    return [...para.matchAll(/`([a-z_]+)`/g)].map((m) => m[1]);
  };
  assert.deepEqual(listed("group"), [...KINDS]);
  assert.deepEqual(listed("room"), [...ROOMS]);
  assert.ok(docs.includes("`ikea`"), "the IKEA name field is documented");
});
