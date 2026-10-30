/**
 * The order of the fields in the item panel (#70, #71).
 *
 * Position first: the next click after choosing an item goes to X, Y or the rotation, so they sit at the top, and
 * the Name box no longer sits where the library's search box was (a search typed there renamed the item).
 */

export type FurnitureField = "x" | "z" | "w" | "d" | "h" | "rotation" | "mirror" | "strip" | "mount" | "name" | "show_name" | "aliases" | "type";

export interface FurnitureFieldNeeds {
  /** It can be mirrored (lamps can't). */
  mirror: boolean;
  /** An LED strip: tilt, rise and upright. */
  strip: boolean;
  /** It can hang higher up (a height above the floor). */
  lift: boolean;
}

const ORDER: readonly FurnitureField[] = ["x", "z", "rotation", "w", "d", "h", "mount", "mirror", "strip", "name", "show_name", "aliases", "type"];

/** The item panel's fields for an item, top to bottom. */
export function furnitureFields(needs: FurnitureFieldNeeds): FurnitureField[] {
  return ORDER.filter((f) => (f === "mirror" ? needs.mirror : f === "strip" ? needs.strip : f === "mount" ? needs.lift : true));
}
