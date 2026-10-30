/**
 * The editor's own clipboard for items (#74): Ctrl+C copies the chosen items, Ctrl+V pastes them on the floor being
 * edited, so items go to another floor as copies (the item panel's floor dropdown, #73, moves them). It lives in
 * memory only, never in the system clipboard, and keeps the items as they were when copied.
 */

import type { I18nKey } from "./i18n.ts";
import type { Floor, Furniture } from "./model.ts";

export interface ItemClip {
  /** The floor the items were copied from. */
  floor: string;
  items: Furniture[];
  /** Pastes so far per floor: each one sits a step further off. */
  pastes: Record<string, number>;
}

/** How far (m, along x and z) each paste sits from the one before. */
export const PASTE_STEP = 0.3;

/** The items `ids` of a floor, copied; null when none of them is there. */
export function copyItems(floor: Floor, ids: readonly string[]): ItemClip | null {
  const set = new Set(ids);
  const items = floor.furniture.filter((m) => set.has(m.id)).map((m) => structuredClone(m));
  return items.length ? { floor: floor.id, items, pastes: {} } : null;
}

/**
 * Copies of the clipboard's items for floor `floorId`, with new ids (`newId("furniture")`, blocks `newId("block")`):
 * on another floor they first land right above or below the originals, on the same floor a step off, and every
 * further paste a step more. A copied block is a block of its own; copies are never fixed. Links stay, as for Ctrl+D.
 */
export function pasteItems(clip: ItemClip, floorId: string, newId: (prefix: string) => string): Furniture[] {
  const done = clip.pastes[floorId] ?? 0;
  clip.pastes[floorId] = done + 1;
  const off = (done + (floorId === clip.floor ? 1 : 0)) * PASTE_STEP;
  const blocks = new Map<string, string>();
  const block = (g: string) => blocks.get(g) ?? blocks.set(g, newId("block")).get(g)!;
  return clip.items.map((m) => ({
    ...structuredClone(m),
    id: newId("furniture"),
    x: round(m.x + off),
    z: round(m.z + off),
    group: m.group ? block(m.group) : null,
    locked: null,
  }));
}

const round = (v: number) => Math.round(v * 1000) / 1000;

export interface ClipboardShortcut {
  keys: string[];
  text: I18nKey;
}

/** Rows for the '?' help overlay's shortcut table (help.ts SHORTCUTS, #95): same shape, add them as they are. */
export const CLIPBOARD_SHORTCUTS: ClipboardShortcut[] = [
  { keys: ["Ctrl+C"], text: "help_key_copy" },
  { keys: ["Ctrl+V"], text: "help_key_paste" },
  { keys: ["Ctrl+A"], text: "help_key_select_all" },
];

/** A button's tooltip with its shortcut: "Copy (Ctrl+C)". */
export function withKeys(text: string, keys: readonly string[]): string {
  return `${text} (${keys.join(", ")})`;
}

export type ClipboardAction = "copy" | "paste" | "select_all";

/** Ctrl (Cmd on a Mac) with C, V or A, without Shift or Alt; anything else is not a clipboard key. */
export function clipboardKey(e: Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey" | "shiftKey" | "altKey">): ClipboardAction | null {
  if (!(e.ctrlKey || e.metaKey) || e.shiftKey || e.altKey) return null;
  const k = e.key.toLowerCase();
  return k === "c" ? "copy" : k === "v" ? "paste" : k === "a" ? "select_all" : null;
}
