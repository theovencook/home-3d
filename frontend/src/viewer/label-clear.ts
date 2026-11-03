// Room names that would sit on each other (#263, V15): on a whole-floor view the smaller room's name gives way to the
// larger one's, and comes back as soon as there is room for it (zooming in spreads the names out until all show).
// Pure: boxes in, a show/hide answer out. No layout is read: a name's box is estimated from its text, so placing the
// labels costs no forced layout per frame.

import { polygonArea, type Room } from "../model.ts";

/** A room name on the screen: its centre (px), size (px) and rank (the larger rank wins a clash). */
export interface LabelBox {
  x: number;
  y: number;
  w: number;
  h: number;
  rank: number;
}

/** The space kept around a name so two names never touch (px). */
const GAP = 2;

/** Which names show: from the highest rank down, a name shows when it overlaps none already shown. */
export function clearLabels(boxes: readonly LabelBox[]): boolean[] {
  const order = boxes.map((_, i) => i).sort((a, b) => boxes[b]!.rank - boxes[a]!.rank || a - b);
  const shown: LabelBox[] = [];
  const out = boxes.map(() => false);
  for (const i of order) {
    const b = boxes[i]!;
    const hit = shown.some((s) => Math.abs(s.x - b.x) * 2 < s.w + b.w + GAP * 2 && Math.abs(s.y - b.y) * 2 < s.h + b.h + GAP * 2);
    if (hit) continue;
    shown.push(b);
    out[i] = true;
  }
  return out;
}

/**
 * A room name's box, estimated from its text (the pin's 12.5 px semibold title font, 10 px padding each side, the
 * values line in 11 px below it when there is one).
 */
export function pinSize(text: string, info?: string | null): { w: number; h: number } {
  const w = Math.max(text.length * 7.2, (info?.length ?? 0) * 6.3) + 22;
  return { w, h: info ? 41 : 27 };
}

const ranks = new WeakMap<Room, number>();

/** A room's rank: its floor area; an outdoor area (a lawn, a drive) ranks below every room. */
export function roomRank(room: Room): number {
  let r = ranks.get(room);
  if (r === undefined) {
    r = Math.abs(polygonArea(room.points)) + (room.outdoor ? 0 : 1e6);
    ranks.set(room, r);
  }
  return r;
}
