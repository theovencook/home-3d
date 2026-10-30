// Rack contents (#113): rack-mount gear (pack items with a `rack` spec) fitted into whole-U positions of a placed rack
// (a pack item with a `rack_frame`, rack-frame.ts). The contents are saved on the placed rack as `rack.slots`; their
// recipes are copied into the plan like any placed item's (#2). These are the placement rules, pure (no DOM, no
// three.js); the backend refuses saves that break them (custom_components/home_3d/racks.py, same rules).
//
// Room for later tickets: a slot's `col` (half / third width, #114), `face` (front / rear, #114) and links (#119) are
// optional fields on RackSlot; every rule here treats a slot as taking the full width on both faces until then.

import type { PackItem } from "./packs.ts";
import { RACK_MAX_U, RACK_WIDTHS, type RackLayout, type RackProblem, type RackWidth } from "./rack-frame.ts";

/** How much of the rack's width the gear takes: all of it, or half / a third on a shared U (#114). */
export const RACK_GEAR_WIDTHS = ["full", "half", "third"] as const;
/** Half-depth gear sits on the front rails; full-depth gear blocks the rear face too (#114). */
export const RACK_GEAR_DEPTHS = ["half", "full"] as const;
/** At most this many pieces of gear in one rack. */
export const RACK_MAX_SLOTS = 60;

export type RackGearWidth = (typeof RACK_GEAR_WIDTHS)[number];
export type RackGearDepth = (typeof RACK_GEAR_DEPTHS)[number];

/** The spec as a pack writes it (`rack` of an item): what makes an item rack-mount gear. */
export interface RackGearSpec {
  /** Height in rack units (1 to 60; 0 = a vertical PDU in the side lane, #114). */
  u: number;
  width?: RackGearWidth;
  depth?: RackGearDepth;
  /** The rack standard it is made for: 19 (default) or 10 inch. */
  inch?: RackWidth;
}

/** A checked gear spec with its defaults. */
export interface RackGear {
  u: number;
  width: RackGearWidth;
  depth: RackGearDepth;
  inch: RackWidth;
}

/** One piece of gear in a rack (on the placed rack's `rack.slots`). */
export interface RackSlot {
  /** Unique within the rack. */
  id: string;
  /** The gear's pack item type ("pack:<pack>:<item>"). */
  type: string;
  /** Its lowest rail position, counted from the bottom (1 = the lowest U), whatever the rack's numbering. */
  u: number;
  /** Its own name ("Core switch"); none = the item's name. */
  name?: string | null;
}

/** What a placed rack carries (Furniture.rack). */
export interface RackContents {
  slots: RackSlot[];
}

/** The room a rack offers gear: its U count, its width and how deep gear may be (rack-frame.ts rackLayout). */
export interface RackSpace {
  u: number;
  width: RackWidth;
  mountDepth: number;
}

/** The gear spec and the depth (metres) of a slot's type; null when the type is no rack-mount gear. */
export type GearOf = (type: string) => { gear: RackGear; depth: number } | null;

/** Why gear can't go where it was put. */
export type RackRefusal = "overlap" | "outside" | "too_deep" | "wrong_width" | "not_gear" | "full" | "missing";

export interface RackResult {
  ok: boolean;
  /** The rack's slots afterwards (the same array when refused). */
  slots: RackSlot[];
  why?: RackRefusal;
  /** The slots it would overlap. */
  clash: string[];
  /** The rail positions it would take (1 = the lowest), for the sheet's green or red highlight. */
  units: number[];
}

/** Measures may round to the millimetre. */
const SLACK = 0.001;
const FIELDS = new Set(["u", "width", "depth", "inch"]);

/** The rules of a gear spec (the backend's RACK_GEAR_SCHEMA); none for an item without one. */
export function rackGearProblems(item: Pick<PackItem, "rack">): RackProblem[] {
  const raw = item.rack as unknown;
  if (raw === undefined) return [];
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return [{ field: "rack", why: "rack gear is an object" }];
  const g = raw as Record<string, unknown>;
  const out: RackProblem[] = [];
  for (const key of Object.keys(g)) if (!FIELDS.has(key)) out.push({ field: key, why: "not a rack gear field" });
  if (typeof g.u !== "number" || !Number.isInteger(g.u) || g.u < 0 || g.u > RACK_MAX_U) out.push({ field: "u", why: `a whole number of U, 0 to ${RACK_MAX_U}` });
  if (g.width !== undefined && !(RACK_GEAR_WIDTHS as readonly unknown[]).includes(g.width)) out.push({ field: "width", why: `one of ${RACK_GEAR_WIDTHS.join(", ")}` });
  if (g.depth !== undefined && !(RACK_GEAR_DEPTHS as readonly unknown[]).includes(g.depth)) out.push({ field: "depth", why: `one of ${RACK_GEAR_DEPTHS.join(", ")}` });
  if (g.inch !== undefined && !(RACK_WIDTHS as readonly unknown[]).includes(g.inch)) out.push({ field: "inch", why: "19 or 10 (inches)" });
  return out;
}

/** An item's gear spec with its defaults, or null when it has none or it breaks the rules. */
export function readRackGear(item: Pick<PackItem, "rack"> | undefined): RackGear | null {
  const g = item?.rack;
  if (!g || rackGearProblems(item).length) return null;
  return { u: g.u, width: g.width ?? "full", depth: g.depth ?? "half", inch: g.inch ?? 19 };
}

/** The rail positions gear of `u` units takes from position `at` up. */
function span(at: number, u: number): number[] {
  return Array.from({ length: Math.max(1, u) }, (_, i) => at + i);
}

/** The positions a slot takes (a slot whose type is unknown keeps its one U, so it blocks no more than that). */
export function slotUnits(s: RackSlot, gearOf: GearOf): number[] {
  return span(s.u, gearOf(s.type)?.gear.u ?? 1);
}

/** Can `s` go into the rack beside `others` (its own old place not counted)? */
export function checkSlot(space: RackSpace, others: readonly RackSlot[], s: RackSlot, gearOf: GearOf): Omit<RackResult, "slots"> {
  const of = gearOf(s.type);
  const units = span(s.u, of?.gear.u ?? 1);
  const no = (why: RackRefusal, clash: string[] = []) => ({ ok: false, why, clash, units });
  if (!of || of.gear.u < 1) return no("not_gear");
  if (of.gear.inch !== space.width) return no("wrong_width");
  if (!Number.isInteger(s.u) || s.u < 1 || s.u + of.gear.u - 1 > space.u) return no("outside");
  if (of.depth > space.mountDepth + SLACK) return no("too_deep");
  const taken = new Set(units);
  const clash = others.filter((o) => o.id !== s.id && slotUnits(o, gearOf).some((u) => taken.has(u))).map((o) => o.id);
  if (clash.length) return no("overlap", clash);
  return { ok: true, clash: [], units };
}

const byU = (a: RackSlot, b: RackSlot): number => a.u - b.u;

/** Put new gear into the rack (refused when it breaks a rule). */
export function addSlot(space: RackSpace, slots: RackSlot[], s: RackSlot, gearOf: GearOf): RackResult {
  if (slots.length >= RACK_MAX_SLOTS) return { ok: false, why: "full", clash: [], units: [], slots };
  const check = checkSlot(space, slots, s, gearOf);
  return check.ok ? { ...check, slots: [...slots.filter((o) => o.id !== s.id), s].sort(byU) } : { ...check, slots };
}

/** Move gear to another lowest position (refused when it breaks a rule there). */
export function moveSlot(space: RackSpace, slots: RackSlot[], id: string, u: number, gearOf: GearOf): RackResult {
  const old = slots.find((s) => s.id === id);
  if (!old) return { ok: false, why: "missing", clash: [], units: [], slots };
  const moved = { ...old, u };
  const check = checkSlot(space, slots, moved, gearOf);
  return check.ok ? { ...check, slots: slots.map((s) => (s.id === id ? moved : s)).sort(byU) } : { ...check, slots };
}

/** Take gear out of the rack. */
export function removeSlot(slots: RackSlot[], id: string): RackSlot[] {
  return slots.filter((s) => s.id !== id);
}

/** The room a laid-out rack offers gear. */
export function rackSpace(frame: { u: number; width: RackWidth }, at: Pick<RackLayout, "mountDepth">): RackSpace {
  return { u: frame.u, width: frame.width, mountDepth: at.mountDepth };
}

/** The gear lookup over pack items (`itemOf` = packItem in the app): a type is gear when its item has a valid `rack` spec. */
export function packGearOf(itemOf: (type: string) => Pick<PackItem, "rack" | "size"> | undefined): GearOf {
  return (type) => {
    const item = itemOf(type);
    const gear = readRackGear(item);
    return item && gear ? { gear, depth: item.size[1] } : null;
  };
}

/** How far a gear's front panel stands in front of the rails' face (its ears). */
const PANEL_PROUD = 0.003;

/** A piece of gear where the rack shows it: its box in the rack's own coordinates (rack-frame.ts rackLayout). */
export interface RackPiece {
  slot: RackSlot;
  item: PackItem;
  /** Centre across and front to back; `y` is its bottom above the rack's bottom. */
  x: number;
  z: number;
  y: number;
  w: number;
  d: number;
  h: number;
}

/**
 * Where a rack's gear is drawn: each slot's item on the front rails at its U, centred in its U space, no wider than
 * the panels and no deeper than the rails allow. Slots whose type is no gear (its recipe missing) or that no longer
 * fit the rack are left out (#114 warns about them).
 */
export function rackContents(at: RackLayout, slots: readonly RackSlot[], itemOf: (type: string) => PackItem | undefined): RackPiece[] {
  const out: RackPiece[] = [];
  for (const slot of slots) {
    const item = itemOf(slot.type);
    const gear = readRackGear(item);
    if (!item || !gear || gear.u < 1) continue;
    const low = at.units[slot.u - 1];
    if (!low || !at.units[slot.u + gear.u - 2]) continue;
    const room = gear.u * at.unit;
    const h = Math.min(item.size[2], room);
    const d = Math.min(item.size[1], at.mountDepth + PANEL_PROUD);
    out.push({ slot, item, x: 0, z: at.front + PANEL_PROUD - d / 2, y: low.y0 + (room - h) / 2, w: Math.min(item.size[0], at.panel), d, h });
  }
  return out;
}
