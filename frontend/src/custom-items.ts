// Custom items (#13): the household's own items, made in the item editor. Each one is a plain pack v2 item
// (docs/packs.md), kept in Home Assistant (custom_components/home_3d/custom_items.py) and offered to the library as
// the pack "household.custom", so a placed custom item is the furniture type "pack:household.custom:<item id>".
// An exported item is an item file, which imports on another install as it is. Pure logic, no DOM.

import { MAX_PARTS, MAX_PROFILE_POINTS, PART_SHAPES } from "./item-format.ts";
import type { FurniturePack, PackItem, PackPart } from "./packs.ts";

/** The pack the backend offers the custom items as. */
export const CUSTOM_PACK_ID = "household.custom";

/** An item id: 1 to 40 characters, lower-case letters, digits, "_", "." and "-", starting with a letter or digit. */
const ID = /^[a-z0-9][a-z0-9_.-]{0,39}$/;

/** An id from a name ("Oak wall shelf" → "oak_wall_shelf"), "item" when nothing is left. */
export function idFromName(name: string): string {
  const slug = name
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 34)
    .replace(/_+$/, "");
  return slug || "item";
}

/** `id` itself when free, otherwise `id_2`, `id_3` … (cut so it stays a valid id). */
export function freeId(id: string, taken: Iterable<string>): string {
  const used = new Set(taken);
  const base = ID.test(id) ? id : idFromName(id);
  if (!used.has(base)) return base;
  for (let n = 2; ; n++) {
    const next = `${base.slice(0, 40 - String(n).length - 1)}_${n}`;
    if (!used.has(next)) return next;
  }
}

/** A new item to start from: one box filling its size, with an id no custom item uses yet. */
export function newItem(name: string, taken: Iterable<string>): PackItem {
  return {
    id: freeId(idFromName(name), taken),
    name: { en: name.trim() || "New item" },
    size: [0.6, 0.6, 0.75],
    parts: [{ shape: "box", x: 0, z: 0, w: 1, d: 1, y: 0, h: 0.5, color: "body" }],
  };
}

/** The shapes a part can have, the most parts an item may have, the most points of a lathe's profile. */
export { MAX_PARTS, MAX_PROFILE_POINTS, PART_SHAPES };
// the shapes the packs know are the shapes a part can have
PART_SHAPES satisfies readonly PackPart["shape"][];

/** A lathe to start from: a vase-like profile, bottom up the outside. */
const DEFAULT_PROFILE: [number, number][] = [
  [0, 0],
  [0.7, 0],
  [1, 0.4],
  [0.5, 1],
  [0, 1],
];

const clamp = (v: number, lo: number, hi: number, fallback: number): number => (Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : fallback);
const round3 = (v: number): number => Math.round(v * 1000) / 1000;

/** A part kept within what docs/packs.md allows, with only the fields its shape takes. */
function tidyPart(p: PackPart): PackPart {
  const out: PackPart = {
    ...p,
    x: round3(clamp(p.x, -0.5, 0.5, 0)),
    z: round3(clamp(p.z, -0.5, 0.5, 0)),
    w: round3(clamp(p.w, 0.001, 1, 1)),
    d: round3(clamp(p.d, 0.001, 1, 1)),
    y: round3(clamp(p.y, 0, 1, 0)),
    h: round3(clamp(p.h, 0.001, 1, 1)),
  };
  if (out.shape === "lathe") out.profile = out.profile?.length ? out.profile : DEFAULT_PROFILE.map((pt) => [...pt] as [number, number]);
  else delete out.profile;
  if (out.shape === "rbox") out.round = round3(clamp(out.round ?? 0.2, 0.01, 0.5, 0.2));
  else delete out.round;
  if (out.shape !== "loft") for (const k of ["tx", "tz", "tw", "td"] as const) delete out[k];
  if (out.shape !== "cyl") delete out.axis;
  return out;
}

/** The item with its parts replaced (a fresh object: the editor's undo keeps the old one). */
function withParts(item: PackItem, parts: PackPart[]): PackItem {
  return { ...item, parts };
}

/** A new part of a shape, half the item's width and depth, standing on top of the parts there are (so it is seen
 * at once), still inside the item. */
export function addPart(item: PackItem, shape: PackPart["shape"]): PackItem {
  if (item.parts.length >= MAX_PARTS) return item;
  const y = Math.min(0.75, Math.max(0, ...item.parts.map((p) => p.y + p.h)));
  const h = Math.max(0.25, Math.min(0.5, 1 - y));
  const part = tidyPart({ shape, x: 0, z: 0, w: 0.5, d: 0.5, y, h, color: shape === "lathe" || shape === "sphere" ? "accent" : "body" });
  return withParts(item, [...item.parts, part]);
}

/** Change a part's measures, colour or shape; numbers are kept within the part's ranges. */
export function changePart(item: PackItem, index: number, patch: Partial<PackPart>): PackItem {
  return withParts(
    item,
    item.parts.map((p, i) => (i === index ? tidyPart({ ...p, ...patch }) : p)),
  );
}

/** Mark a measure of a part as fixed when the item is resized, or free it again ("w", "d" or "h"). */
export function toggleFix(item: PackItem, index: number, axis: "w" | "d" | "h"): PackItem {
  return withParts(
    item,
    item.parts.map((p, i) => {
      if (i !== index) return p;
      const on = new Set(p.fix ?? "");
      if (on.has(axis)) on.delete(axis);
      else on.add(axis);
      const fix = ["w", "d", "h"].filter((a) => on.has(a)).join("");
      const { fix: _old, ...rest } = p;
      return fix ? { ...rest, fix } : rest;
    }),
  );
}

/** Remove a part; an item keeps at least one. */
export function removePart(item: PackItem, index: number): PackItem {
  if (item.parts.length <= 1) return item;
  return withParts(
    item,
    item.parts.filter((_, i) => i !== index),
  );
}

/** A copy of a part right after it. */
export function duplicatePart(item: PackItem, index: number): PackItem {
  if (item.parts.length >= MAX_PARTS || !item.parts[index]) return item;
  const copy = structuredClone(item.parts[index]);
  return withParts(item, [...item.parts.slice(0, index + 1), copy, ...item.parts.slice(index + 1)]);
}

/**
 * A custom item: a pack item, with the IKEA product name the library vocabulary (#5) adds to the pack format.
 * The editor only writes `ikea` when one is typed in.
 */
export type CustomItem = PackItem & { ikea?: string };

/** The library details the editor's form sets. */
export interface ItemDetails {
  name?: string;
  /** A library section ("storage", "lamp", …); empty: none. */
  group?: string;
  /** Rooms the item is meant for; empty: any room. */
  room?: string[];
  /** Search words, separated by commas. */
  tags?: string;
  ikea?: string;
}

/**
 * Set the item's name and library details. A saved item keeps its id, so placed copies keep their item; a new item
 * not saved yet passes the ids in use as `unsavedTaken`, and its id follows its name.
 */
export function setDetails(item: CustomItem, details: ItemDetails, unsavedTaken?: Iterable<string>): CustomItem {
  const out: CustomItem = { ...item };
  const name = details.name?.trim().slice(0, 80);
  if (name) {
    out.name = { ...item.name, en: name };
    if (unsavedTaken) out.id = freeId(idFromName(name), unsavedTaken);
  }
  if (details.group !== undefined) {
    if (details.group) out.group = details.group;
    else delete out.group;
  }
  if (details.room !== undefined) {
    if (details.room.length) out.room = [...new Set(details.room)].slice(0, 12);
    else delete out.room;
  }
  if (details.tags !== undefined) {
    const tags = [...new Set(details.tags.split(",").map((t) => t.trim().slice(0, 30)).filter(Boolean))].slice(0, 12);
    if (tags.length) out.tags = tags;
    else delete out.tags;
  }
  if (details.ikea !== undefined) {
    const ikea = details.ikea.trim().slice(0, 40);
    if (ikea) out.ikea = ikea;
    else delete out.ikea;
  }
  return out;
}

/** Item fields whose default the backend fills in: an exported file leaves them out when they have it. */
const ITEM_DEFAULTS: Record<string, unknown> = { electric: false, mount: "floor", surface: false, vehicle: false, hole: false };
const PART_DEFAULTS: Record<string, unknown> = { edges: false, glow: false, screen: false };

function withoutDefaults<T extends object>(obj: T, defaults: Record<string, unknown>): T {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== undefined && defaults[k] !== v)) as T;
}

/** The item as an item file: what a pack folder holds as `<id>.json`, so it imports on any install. */
export function itemFile(item: CustomItem): { name: string; text: string } {
  const out = withoutDefaults(item, ITEM_DEFAULTS) as CustomItem;
  if (out.mount !== "wall") delete out.wall_y;
  out.parts = item.parts.map((p) => withoutDefaults(p, PART_DEFAULTS));
  return { name: `${item.id}.json`, text: `${JSON.stringify(out, null, 2)}\n` };
}

/** Why a file did not import: not JSON, not an item, or the pack.json of a pack folder. */
export type ItemFileError = "not_json" | "not_an_item" | "pack_file";

/**
 * An item file read for import, its id made free when a custom item already has it (the backend checks the rest,
 * with the same schema as a pack's items).
 */
export function readItemFile(text: string, taken: Iterable<string>): { item: CustomItem } | { error: ItemFileError } {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    // an LLM's answer pasted as it came: the object inside a code fence or a line of chat
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    try {
      data = JSON.parse(text.slice(start, end + 1));
    } catch {
      return { error: "not_json" };
    }
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) return { error: "not_an_item" };
  const obj = data as Record<string, unknown>;
  if (obj.format === "home3d-pack" || obj.format === "fp3dpack") return { error: "pack_file" };
  if (typeof obj.id !== "string" || !Array.isArray(obj.parts)) return { error: "not_an_item" };
  const item = obj as unknown as CustomItem;
  return { item: { ...item, id: freeId(item.id, taken) } };
}

/** The custom items as the backend offers them: one pack (custom_items.py custom_pack). */
export function customPack(items: CustomItem[]): FurniturePack {
  return { format: "home3d-pack", version: 2, id: CUSTOM_PACK_ID, name: "Your own items", publisher: "This home", licence: "NOASSERTION", release: 1, custom: true, items };
}

/** The custom items among the packs the backend lists (none while there are none). */
export function customItems(packs: readonly FurniturePack[] | undefined): CustomItem[] {
  return packs?.find((p) => p.id === CUSTOM_PACK_ID)?.items ?? [];
}

/** A lathe's profile as the editor's field shows it: "radius height" pairs separated by commas. */
export function profileText(profile: [number, number][] | undefined): string {
  return (profile ?? []).map(([r, y]) => `${r} ${y}`).join(", ");
}

/** The profile typed into the field (pairs separated by commas or semicolons), each value cut to 0..1; null when
 * it is not 2 to 12 pairs of numbers. */
export function readProfile(text: string): [number, number][] | null {
  const pairs = text
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.split(/\s+/).map(Number));
  if (pairs.length < 2 || pairs.length > MAX_PROFILE_POINTS) return null;
  if (pairs.some((p) => p.length !== 2 || p.some((v) => !Number.isFinite(v)))) return null;
  return pairs.map(([r, y]) => [round3(clamp(r, 0, 1, 0)), round3(clamp(y, 0, 1, 0))]);
}
