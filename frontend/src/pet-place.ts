// Static pets (#17): a pet that stays at a fixed spot in a pose instead of roaming. Where it is, how high (on a sofa,
// a bed or a desk) and which way it faces. Shared by the 3D pets (fun bundle), the plan editor and the extensions
// page, so it brings no code of its own dependencies (only types): the plan's surfaces are handed in.

import type { Building, Floor, Furniture, Pet, PetPose, Vec2 } from "./model.ts";

/** The item's own name: a pack item's id after the pack ("pack:home3d.pets:cat_bed" → "cat_bed"). */
export const itemOf = (type: string) => type.slice(type.lastIndexOf(":") + 1).toLowerCase();
export const SOFA = /^(sofa|armchair|chesterfield|corner_(left|right|sofa))|sofa/;
export const BED = /^bed(_|$)/;

/** Whether a pet stays at its spot (a pet roams unless switched to static). */
export const isStaticPet = (pet: Pet): boolean => pet.static === true;

export interface StaticPlace {
  pos: Vec2;
  /** Height above its floor: the seat of a sofa, the top of a bed or desk, else 0. */
  y: number;
  /** Turn round the vertical axis (the 3D model's rotation.y). */
  heading: number;
  pose: PetPose;
}

/** Whether a point lies on an item (its turned rectangle). */
function onItem(f: Furniture, p: Vec2): boolean {
  const a = (f.rotation * Math.PI) / 180;
  const dx = p[0] - f.x;
  const dz = p[1] - f.z;
  const u = dx * Math.cos(a) + dz * Math.sin(a);
  const v = -dx * Math.sin(a) + dz * Math.cos(a);
  return Math.abs(u) <= f.w / 2 && Math.abs(v) <= f.d / 2;
}

/**
 * Where a static pet is shown on its floor: at its spot, up on the sofa, bed or desk under it, facing as set (else
 * the front of what it lies on). Null while it has no spot yet (the 3D view then finds it one of its places).
 */
export function staticPlace(floor: Floor, pet: Pet, surface?: (floor: Floor, x: number, z: number) => number): StaticPlace | null {
  if (pet.x == null || pet.z == null || !Number.isFinite(pet.x) || !Number.isFinite(pet.z)) return null;
  const pos: Vec2 = [pet.x, pet.z];
  let y = surface?.(floor, pos[0], pos[1]) ?? 0;
  let under: Furniture | null = null;
  for (const f of floor.furniture) {
    const t = itemOf(f.type);
    if (t.startsWith("dog") || t.startsWith("cat") || t.includes("bunk") || !onItem(f, pos)) continue;
    const bed = BED.test(t) || t === "sofa_bed";
    if (!bed && !SOFA.test(t)) continue;
    // on the seat, not in it (the same heights as a roaming cat's places)
    const top = bed ? Math.min(0.58, f.h * 0.64) : Math.min(0.5, f.h * 0.58);
    if (top >= y) {
      y = top;
      under = f;
    }
  }
  const heading = pet.rotation != null ? (-pet.rotation * Math.PI) / 180 : under ? (-under.rotation * Math.PI) / 180 : 0;
  return { pos, y, heading, pose: pet.pose ?? "sit" };
}

/** A polygon's area (absolute) and its centre of area. */
function areaCentre(points: readonly Vec2[]): { area: number; c: Vec2 } {
  let a = 0;
  let cx = 0;
  let cz = 0;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const cross = points[j][0] * points[i][1] - points[i][0] * points[j][1];
    a += cross;
    cx += (points[j][0] + points[i][0]) * cross;
    cz += (points[j][1] + points[i][1]) * cross;
  }
  if (Math.abs(a) < 1e-9) return { area: 0, c: points[0] ?? [0, 0] };
  return { area: Math.abs(a / 2), c: [cx / (3 * a), cz / (3 * a)] };
}

/**
 * Switch a pet between roaming and static. Switched on for the first time it sits in the middle of its floor's
 * biggest room (drag it in the editor from there); back to roaming it keeps its spot and pose for the next time.
 */
export function setPetStatic(pet: Pet, on: boolean, floor: Floor | undefined): Pet {
  if (!on) return { ...pet, static: false };
  const out: Pet = { ...pet, static: true, pose: pet.pose ?? "sit" };
  if (out.x == null || out.z == null) {
    const rooms = (floor?.rooms ?? []).filter((r) => r.points.length >= 3).map((r) => areaCentre(r.points));
    const best = rooms.sort((p, q) => q.area - p.area)[0];
    const [x, z] = best?.c ?? [0, 0];
    out.x = Math.round(x * 100) / 100;
    out.z = Math.round(z * 100) / 100;
  }
  return out;
}

/** The floor a pet lives on: its own, else (none set, or gone) the floor nearest the ground that has rooms. */
export function petFloor(b: Building, pet: Pet): Floor | undefined {
  const withRooms = b.floors.filter((f) => f.rooms.some((r) => r.points.length >= 3));
  return withRooms.find((f) => f.id === pet.floor_id) ?? [...withRooms].sort((x, y) => Math.abs(x.elevation) - Math.abs(y.elevation))[0];
}

/** The static pets with a spot that live on a floor (shown and dragged in its plan). */
export function staticPetsOn(b: Building, floorId: string): Pet[] {
  return (b.settings.pets?.list ?? []).filter((p) => isStaticPet(p) && p.x != null && p.z != null && petFloor(b, p)?.id === floorId);
}

/** The editor drags a static pet: its spot moves to the point, on the grid (a roaming pet has no spot). */
export function movePet(b: Building, id: string, x: number, z: number, grid: number): void {
  const pet = b.settings.pets?.list.find((p) => p.id === id);
  if (!pet || !isStaticPet(pet)) return;
  const snap = (v: number) => Math.round(Math.round(v / grid) * grid * 1000) / 1000;
  pet.x = snap(x);
  pet.z = snap(z);
}
