// The lists and limits of a pack item (docs/packs.md): the same ones the backend checks every item against
// (custom_components/home_3d/packs.py, where a test reads them to keep the two equal). The item editor and its brief
// for an LLM (#14) take them from here. Pure data, no DOM.

/** The shapes a part can have, in the order the editor offers them. */
export const PART_SHAPES = ["box", "cyl", "loft", "sphere", "lathe", "rbox"] as const;

/** The colour roles, in the order the item panel lists them (colour-roles.ts). */
export const COLOUR_ROLES = ["body", "fabric", "cushion", "wood", "white", "metal", "dark", "glass", "plant", "pot", "accent"] as const;

/** Where an item sits. */
export const MOUNTS = ["floor", "surface", "wall", "ceiling"] as const;

/** How a lamp's light spreads. */
export const LIGHTS = ["ceiling", "downlight", "spot", "panel", "pendant", "floor", "uplight", "table", "wall", "strip", "bollard", "garden"] as const;

/** Most parts an item may have. */
export const MAX_PARTS = 60;

/** Most points a lathe's profile may have. */
export const MAX_PROFILE_POINTS = 12;

export const ITEM_FORMAT = {
  shapes: PART_SHAPES,
  colourRoles: COLOUR_ROLES,
  mounts: MOUNTS,
  lights: LIGHTS,
  maxParts: MAX_PARTS,
  maxProfilePoints: MAX_PROFILE_POINTS,
  maxNameLength: 80,
  maxRooms: 12,
  maxTags: 12,
  maxTagLength: 30,
  /** An item's size in metres, each of width, depth and height. */
  metres: [0.01, 10],
  /** A part's centre across and in depth (x, z, and a loft's tx, tz), as a fraction of the item's size. */
  centre: [-0.5, 0.5],
  /** A part's width, depth and height (w, d, h, and a loft's tw, td). */
  extent: [0.001, 1],
  /** A part's bottom (y) and a lathe profile's radius and height. */
  level: [0, 1],
  /** A rounded box's rounding, as a fraction of its shortest side. */
  round: [0.01, 0.5],
  /** A wall item's bottom above the floor, in metres. */
  wallY: [0, 3],
  /** A part's turn around its own upright axis, in degrees. */
  rot: [-360, 360],
} as const;
