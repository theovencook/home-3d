/**
 * The order of the fields in the item panel (#70, #71).
 *
 * Position first: the next click after choosing an item goes to X, Y or the rotation, so they sit at the top, and
 * the Name box no longer sits where the library's search box was (a search typed there renamed the item).
 */

export type FurnitureField = "x" | "z" | "w" | "d" | "h" | "rotation" | "mirror" | "strip" | "mount" | "name" | "show_name" | "aliases" | "type" | "floor";

export interface FurnitureFieldNeeds {
  /** It can be mirrored (lamps can't). */
  mirror: boolean;
  /** An LED strip: tilt, rise and upright. */
  strip: boolean;
  /** It can hang higher up (a height above the floor). */
  lift: boolean;
  /** The home has more than one floor: a dropdown moves the item to another one (#73). */
  floors?: boolean;
}

const ORDER: readonly FurnitureField[] = ["x", "z", "rotation", "w", "d", "h", "mount", "mirror", "strip", "name", "show_name", "aliases", "type", "floor"];

/** The position fields, pinned in a header at the top of the panel while it scrolls (#71). */
export const FURNITURE_HEAD: readonly FurnitureField[] = ["x", "z", "rotation"];

/**
 * The item panel of an item: the pinned header and the fields below it. Every kind of item keeps the same order
 * (only fields it hasn't got are left out) and the show-name row is always there, so the rows never move (#71).
 */
export function furniturePanel(needs: FurnitureFieldNeeds): { head: FurnitureField[]; body: FurnitureField[] } {
  const all = furnitureFields(needs);
  return { head: all.filter((f) => FURNITURE_HEAD.includes(f)), body: all.filter((f) => !FURNITURE_HEAD.includes(f)) };
}

/** The item panel's fields for an item, top to bottom. */
export function furnitureFields(needs: FurnitureFieldNeeds): FurnitureField[] {
  return ORDER.filter((f) => (f === "mirror" ? needs.mirror : f === "strip" ? needs.strip : f === "mount" ? needs.lift : f === "floor" ? !!needs.floors : true));
}
