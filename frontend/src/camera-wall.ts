// Layout of the camera wall (Kamera-Cockpit).

/**
 * The camera wall's grid (#217): the column count that gives the largest 16:9 tiles inside the wall, so
 * every camera fits without overlapping; below a usable size the tiles keep that size and the wall scrolls.
 */
export function wallLayout(n: number, width: number, height: number, gap = 12, min = 180): { cols: number; tile: number } {
  const w = Math.max(min, width);
  const h = Math.max(min * 0.5625, height);
  let best = { cols: 1, tile: Math.min(w, (h * 16) / 9) };
  for (let cols = 1; cols <= Math.max(1, n); cols++) {
    const rows = Math.ceil(n / cols);
    const byWidth = (w - gap * (cols - 1)) / cols;
    const byHeight = (((h - gap * (rows - 1)) / rows) * 16) / 9;
    const tile = Math.min(byWidth, byHeight);
    if (tile > best.tile || cols === 1) best = { cols, tile };
  }
  if (best.tile < min) {
    // too many to fit: as many columns of the smallest tile as the width takes, the wall scrolls
    const cols = Math.max(1, Math.floor((w + gap) / (min + gap)));
    return { cols: Math.min(cols, Math.max(1, n)), tile: min };
  }
  return { cols: best.cols, tile: Math.floor(best.tile) };
}

/** The four edges of the 3D view the camera wall docks to (#266). */
export const WALL_DOCKS = ["top", "bottom", "left", "right"] as const;
export type WallDock = (typeof WALL_DOCKS)[number];
export const DEFAULT_WALL_DOCK: WallDock = "bottom";
export const WALL_DOCK_KEY = "home3d.camera_wall_dock";

/** A stored dock, or the default when it is missing or not one of the four. */
export const parseDock = (v: string | null | undefined): WallDock => (WALL_DOCKS as readonly string[]).includes(v ?? "") ? (v as WallDock) : DEFAULT_WALL_DOCK;

/**
 * The edge nearest to a point inside a box of the given size (where a dragged wall was let go): the distance to each
 * edge, as a share of the box so a wide view does not favour the sides.
 */
export function dockFromPoint(x: number, y: number, width: number, height: number): WallDock {
  const w = Math.max(1, width);
  const h = Math.max(1, height);
  const d: [WallDock, number][] = [
    ["top", y / h],
    ["bottom", (h - y) / h],
    ["left", x / w],
    ["right", (w - x) / w],
  ];
  return d.reduce((a, b) => (b[1] < a[1] ? b : a))[0];
}
