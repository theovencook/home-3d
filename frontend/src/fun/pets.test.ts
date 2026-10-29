import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import { createHash } from "node:crypto";
import * as THREE from "three";
import { emptyBuilding, newFloor, PET_EYES, PET_FURS, PET_FURS_OF, type Building, type Furniture, type Pet, type Room } from "../model.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { FloorMap } from "../viewer/walk.ts";
import { buildModel, startPets, type FunLib, type PetsController } from "./pets.ts";

// the pets draw their "z Z" on a canvas and step on animation frames: both stood in for here, frames run by hand
const g = globalThis as unknown as Record<string, unknown>;
const ctx2d = new Proxy({}, { get: () => () => undefined, set: () => true });
g.document ??= { createElement: () => ({ width: 0, height: 0, getContext: () => ctx2d }), hidden: false };
let frames: ((t: number) => void)[] = [];
g.requestAnimationFrame = (cb: (t: number) => void) => frames.push(cb);
g.cancelAnimationFrame = () => undefined;

const lib = { Group: THREE.Group, Mesh: THREE.Mesh, MeshBasicMaterial: THREE.MeshBasicMaterial, CanvasTexture: THREE.CanvasTexture, Color: THREE.Color, PlaneGeometry: THREE.PlaneGeometry, BufferGeometry: THREE.BufferGeometry, Float32BufferAttribute: THREE.Float32BufferAttribute, DoubleSide: THREE.DoubleSide } as unknown as FunLib;

const rect = (id: string, x0: number, z0: number, x1: number, z1: number): Room => ({ id, name: id, area_id: null, points: [[x0, z0], [x1, z0], [x1, z1], [x0, z1]], floor_material: "wood" });
const sofa = { id: "s", type: "sofa_3", x: 2, z: 1, w: 2, d: 0.9, h: 0.85, rotation: 0 } as Furniture;

function house(pets: Pet[]): { b: Building; group: THREE.Group; run: PetsController } {
  const floor = { ...newFloor("f", "Ground", 0), rooms: [rect("r", 0, 0, 6, 5)], furniture: [sofa] };
  const b = { ...emptyBuilding(), floors: [floor] };
  const group = new THREE.Group();
  const viewer = { floorMap: new Map([["f", { group, floor }]]), invalidate() {}, animate() {}, low: false, resting: false };
  const run = startPets({ lib, FloorMap, viewer, building: b, pets, night: () => false, base: () => 0 });
  return { b, group, run };
}

/** Runs the animation frames for some seconds of time, 0.1 s apart. */
function play(seconds: number): void {
  const t0 = performance.now();
  for (let t = 0; t <= seconds * 1000; t += 100) {
    const due = frames;
    frames = [];
    for (const f of due) f(t0 + t);
  }
}

/** How the model is posed: every part's place, turn and scale (the model's own parts, not where it stands). */
function poseOf(root: THREE.Object3D): string {
  const out: number[] = [];
  root.children[0].traverse((o) => out.push(...o.position.toArray(), o.rotation.x, o.rotation.y, o.rotation.z, ...o.scale.toArray(), o.visible ? 1 : 0));
  return out.map((v) => Math.round(v * 1000)).join(",");
}

let running: PetsController | null = null;
afterEach(() => {
  running?.dispose();
  running = null;
  frames = [];
});

const cat: Pet = { id: "p", kind: "cat", name: "", fur: "tabby" };

test("a static pet stays at its spot, up on the sofa it was put on, facing as set", () => {
  const { group, run } = house([{ ...cat, static: true, pose: "curl", x: 2.3, z: 1.1, rotation: 90 }]);
  running = run;
  const root = group.children[0];
  const at = () => [root.position.x, root.position.y, root.position.z].map((v) => Math.round(v * 1000) / 1000);
  assert.deepEqual(at(), [2.3, Math.round(0.85 * 0.58 * 1000) / 1000, 1.1]);
  assert.ok(Math.abs(root.rotation.y + Math.PI / 2) < 1e-9);
  const before = poseOf(root);
  play(20);
  assert.deepEqual(at(), [2.3, Math.round(0.85 * 0.58 * 1000) / 1000, 1.1]);
  // nothing of it moves: legs, head and tail hold the pose
  assert.equal(poseOf(root), before);
});

test("the poses look different: sitting upright, lying, curled up asleep", () => {
  const looks = (["sit", "lie", "curl"] as const).map((pose) => {
    const { group, run } = house([{ ...cat, static: true, pose, x: 4, z: 4 }]);
    const s = poseOf(group.children[0]);
    run.dispose();
    return s;
  });
  assert.equal(new Set(looks).size, 3);
});

test("roaming pets still walk through the house", () => {
  const random = Math.random;
  let seed = 7;
  Math.random = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  try {
    const { group, run } = house([cat, { ...cat, id: "q", static: false, x: 1, z: 1 }]);
    running = run;
    const start = group.children.map((c) => c.position.clone());
    play(6);
    group.children.forEach((c, i) => assert.ok(c.position.distanceTo(start[i]) > 0.1, `pet ${i} walked`));
  } finally {
    Math.random = random;
  }
});

// Coats and eye colours (#42)

/** A model's whole look: every part's kind, place, turn, scale and colour, hashed. */
function lookOf(root: THREE.Object3D): string {
  const parts: string[] = [];
  root.traverse((o) => {
    const mat = (o as THREE.Mesh).material as THREE.MeshBasicMaterial | undefined;
    parts.push([o.type, ...o.position.toArray(), o.rotation.x, o.rotation.y, o.rotation.z, ...o.scale.toArray()].map((v) => (typeof v === "number" ? Math.round(v * 1e4) : v)).join(","), mat?.color ? mat.color.getHexString() : "");
  });
  return createHash("sha256").update(parts.join("|")).digest("hex").slice(0, 16);
}

/** The colours drawn in a part of a model (plain colours, not the "z Z" card). */
function coloursOf(o: THREE.Object3D): Set<string> {
  const out = new Set<string>();
  o.traverse((m) => {
    const mat = (m as THREE.Mesh).material as THREE.MeshBasicMaterial | undefined;
    if (mat?.color && !mat.map) out.add(mat.color.getHexString());
  });
  return out;
}

const hsl = (hex: string) => new THREE.Color(`#${hex}`).getHSL({ h: 0, s: 0, l: 0 }, THREE.SRGBColorSpace);
const hue = (hex: string) => hsl(hex).h * 360;

test("existing pets look exactly as before: their coats with dark eyes", () => {
  // taken from the models before #42
  const before: Record<string, string> = {"cat/orange":"78929069612408ba","cat/tabby":"14487aad92c30c29","cat/black":"e1f4aa050b0aec0a","cat/white":"67d643e06f65ad0c","cat/grey":"98771efa9424aa8d","cat/calico":"f51756cdbebdc4dc","cat/cream":"3671e3254659afaa","dog/golden":"6c13ae4f5e741e64","dog/cream":"4b2acb8f4b47f42f","dog/brown":"0573094005d72750","dog/black":"cfd0a841ca608dae","dog/white":"7716d8f4cdcb0095","dog/grey":"b30a589e13c44437","rabbit/white":"54f8cd29812c26de","rabbit/grey":"5ef19b293bef0bf5","rabbit/brown":"7f93677706959033","rabbit/black":"384d4362d97e0d1c","rabbit/cream":"27d77c039d88b7bf"};
  for (const [key, look] of Object.entries(before)) {
    const [kind, fur] = key.split("/") as [Pet["kind"], string];
    assert.equal(lookOf(buildModel(lib, { id: "p", kind, name: "", fur }).root), look, key);
    assert.equal(lookOf(buildModel(lib, { id: "p", kind, name: "", fur, eyes: "dark" }).root), look, `${key} dark eyes`);
  }
});

test("a pet's eyes can be copper, green, yellow or blue round a dark pupil", () => {
  const want: Record<string, [number, number]> = { copper: [12, 35], yellow: [42, 62], green: [80, 160], blue: [190, 235] };
  for (const [eyes, [lo, hi]] of Object.entries(want)) {
    const model = buildModel(lib, { ...cat, eyes: eyes as Pet["eyes"] });
    for (const e of model.eyes) {
      const cs = [...coloursOf(e)];
      assert.ok(cs.some((c) => hsl(c).s > 0.35 && hue(c) >= lo && hue(c) <= hi), `${eyes}: ${cs}`);
      assert.ok(cs.some((c) => hsl(c).l < 0.15), `${eyes} pupil: ${cs}`);
    }
  }
});

/** The colours of a model's fur: everything but its eyes, nose and inner ears (pink) and the "z Z" card. */
function furOf(model: ReturnType<typeof buildModel>): Set<string> {
  const eyes = new Set<THREE.Object3D>();
  for (const e of model.eyes) e.traverse((o) => eyes.add(o));
  const out = new Set<string>();
  model.body.traverse((o) => {
    const mat = (o as THREE.Mesh).material as THREE.MeshBasicMaterial | undefined;
    if (mat?.color && !eyes.has(o)) out.add(mat.color.getHexString());
  });
  out.delete("f08aa0");
  return out;
}

test("a cat can be dilute calico: white with grey and cream patches on its body and head", () => {
  const model = buildModel(lib, { ...cat, fur: "dilute_calico" });
  const fur = [...furOf(model)].map(hsl);
  assert.ok(fur.some((c) => c.l > 0.88 && c.s < 0.35), "white");
  assert.ok(fur.some((c) => c.l > 0.35 && c.l < 0.75 && c.s < 0.15), "grey");
  assert.ok(fur.some((c) => c.l > 0.7 && c.l < 0.9 && c.s > 0.3 && c.h * 360 > 25 && c.h * 360 < 50), "cream");
  // patches on the head too, not just the body
  const head = new Set<string>();
  model.head.children.forEach((o) => { if (!model.eyes.includes(o as THREE.Group)) head.add(((o as THREE.Mesh).material as THREE.MeshBasicMaterial)?.color?.getHexString() ?? ""); });
  assert.ok([...head].filter((c) => c && c !== "f08aa0").length >= 3, `head ${[...head]}`);
  assert.ok(PET_FURS_OF.cat.includes("dilute_calico"));
});

test("a cat can be solid blue-grey, without the lighter chest the grey coat has", () => {
  const solid = [...furOf(buildModel(lib, { ...cat, fur: "blue_grey" }))];
  assert.equal(solid.length, 1, `${solid}`);
  const c = hsl(solid[0]);
  assert.ok(c.h * 360 > 195 && c.h * 360 < 240 && c.s > 0.05 && c.s < 0.3 && c.l > 0.4 && c.l < 0.7, solid[0]);
  assert.ok(furOf(buildModel(lib, { ...cat, fur: "grey" })).size > 1);
  assert.ok(PET_FURS_OF.cat.includes("blue_grey"));
});

test("roaming and static pets show their coat and eye colour in the house", () => {
  const still: Pet = { ...cat, id: "a", fur: "dilute_calico", eyes: "copper", static: true, pose: "lie", x: 4, z: 4 };
  const roaming: Pet = { ...cat, id: "b", fur: "blue_grey", eyes: "blue" };
  const { group, run } = house([still, roaming]);
  running = run;
  play(3);
  const [a, b] = group.children.map(coloursOf);
  for (const [pet, cs] of [[still, a], [roaming, b]] as const) {
    const model = buildModel(lib, pet);
    for (const c of coloursOf(model.root)) assert.ok(cs.has(c), `${pet.id} ${c}`);
    assert.ok([...coloursOf(model.eyes[0])].every((c) => cs.has(c)));
  }
  assert.ok([...a].some((c) => hsl(c).s > 0.35 && hue(c) >= 12 && hue(c) <= 35), "copper eyes");
  assert.ok([...b].some((c) => hsl(c).s > 0.35 && hue(c) >= 190 && hue(c) <= 235), "blue eyes");
});

test("every coat and eye colour has a name in English and German for the pet list", () => {
  for (const language of ["en", "de"]) {
    const hass = { language } as Parameters<typeof translate>[0];
    for (const key of [...PET_FURS.map((f) => `pet_fur_${f}`), "pet_eyes", ...PET_EYES.map((e) => `pet_eyes_${e}`)]) assert.notEqual(translate(hass, key as I18nKey), key, `${language} ${key}`);
  }
});

test("a pet set to other eyes or another coat in settings is redrawn with them", () => {
  const { b, group, run } = house([cat]);
  running = run;
  run.update(b, [{ ...cat, fur: "blue_grey", eyes: "green" }]);
  const cs = coloursOf(group.children[0]);
  assert.ok([...cs].some((c) => hue(c) > 195 && hue(c) < 240 && hsl(c).s < 0.3 && hsl(c).l > 0.4 && hsl(c).l < 0.7), "blue-grey coat");
  assert.ok([...cs].some((c) => hsl(c).s > 0.35 && hue(c) >= 80 && hue(c) <= 160), "green eyes");
});
