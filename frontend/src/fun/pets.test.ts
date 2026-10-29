import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import * as THREE from "three";
import { emptyBuilding, newFloor, type Building, type Furniture, type Pet, type Room } from "../model.ts";
import { FloorMap } from "../viewer/walk.ts";
import { startPets, type FunLib, type PetsController } from "./pets.ts";

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
