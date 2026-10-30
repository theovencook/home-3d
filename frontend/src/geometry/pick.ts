/**
 * Picking furniture in the editor's 2D plan (#72, #75): which items lie under a plan point, with a minimum
 * on-screen target so tiny items (a 9 x 3 cm thermostat) can still be pressed at any zoom.
 */
import type { Furniture, Vec2 } from "../model.ts";

/** Smallest press target for an item, in screen pixels: 24 px for a mouse or pen, 44 px for a finger. */
export function minHitPx(pointerType: string): number {
  return pointerType === "touch" ? 44 : 24;
}

/**
 * Ids of the items under `p` (plan metres), best first. An item counts when `p` lies in its footprint grown to
 * at least `minPx` screen pixels in each direction (`scale` = pixels per metre). Items whose drawn shape holds
 * the point come first, smallest first (a thermostat on a sideboard wins); items only hit through their grown
 * target follow, nearest first. `skip` leaves items out (hidden ones).
 */
export function itemsAt(items: readonly Furniture[], p: Vec2, scale: number, minPx: number, skip?: (f: Furniture) => boolean): string[] {
  const pad = minPx / 2 / Math.max(scale, 1e-6);
  const real: { id: string; area: number }[] = [];
  const near: { id: string; dist: number }[] = [];
  for (const f of items) {
    if (skip?.(f)) continue;
    const a = (f.rotation * Math.PI) / 180;
    const c = Math.cos(a);
    const s = Math.sin(a);
    const dx = p[0] - f.x;
    const dz = p[1] - f.z;
    // into the item's own axes (the inverse of furnitureFootprint's turn)
    const lx = Math.abs(dx * c + dz * s);
    const lz = Math.abs(-dx * s + dz * c);
    const hw = f.w / 2;
    const hd = f.d / 2;
    if (lx <= hw && lz <= hd) real.push({ id: f.id, area: f.w * f.d });
    else if (lx <= Math.max(hw, pad) && lz <= Math.max(hd, pad)) near.push({ id: f.id, dist: Math.hypot(dx, dz) });
  }
  real.sort((x, y) => x.area - y.area);
  near.sort((x, y) => x.dist - y.dist);
  return [...real.map((x) => x.id), ...near.map((x) => x.id)];
}

/**
 * Pick-through (#75): the hit after `current` in `hits` (round again after the last), else the first hit.
 * Also Tab cycling through a list of items, `step` -1 going backwards.
 */
export function nextPick(hits: readonly string[], current: string | null, step = 1): string | null {
  if (!hits.length) return null;
  const i = current ? hits.indexOf(current) : -1;
  if (i < 0) return step < 0 ? hits[hits.length - 1] : hits[0];
  return hits[(i + step + hits.length) % hits.length];
}

/**
 * A press with Alt held on a stack of items (#125). Alt also means "move freely" while dragging, so a press that
 * lands on the selected item `grab`s it (a drag moves it, unsnapped); only a click without moving goes on to `next`,
 * the item under it (#75). With nothing of the stack selected the top item is grabbed, as without Alt.
 */
export function altPick(hits: readonly string[], selected: readonly string[], current: string | null): { grab: string | null; next: string | null } {
  const held = current && hits.includes(current) ? current : hits.find((id) => selected.includes(id));
  if (!held) return { grab: hits[0] ?? null, next: null };
  const next = nextPick(hits, held);
  return { grab: held, next: next !== held ? next : null };
}
