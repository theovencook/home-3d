// What a floor's 3D drawing is made from (#131): the viewer keeps a floor whose key stayed when a new plan arrives
// (an edit in the editor's 3D beside moves one item on one floor) and rebuilds only the others.

import { STAIR_TYPES, type Building } from "../model.ts";

/** Furniture on one floor that changes the drawing of others: stairs and stairwells cut the slab above. */
const SHARED = new Set([...STAIR_TYPES, "stairwell"]);

/**
 * Per floor id: a key of everything its drawing depends on – the floor itself and what the other floors and the
 * building lend it (settings, rooms, walls, openings, outdoor areas, heights, stairs). `extra`: what the viewer adds
 * (packs, parked vehicles, the look); a change there changes every key.
 */
export function floorKeys(b: Building, extra: string): Map<string, string> {
  const shared = JSON.stringify({
    extra,
    settings: b.settings,
    floors: b.floors.map((f) => ({ ...f, furniture: f.furniture.filter((m) => SHARED.has(m.type)), placements: undefined })),
  });
  return new Map(b.floors.map((f) => [f.id, `${shared}\n${JSON.stringify(f)}`]));
}
