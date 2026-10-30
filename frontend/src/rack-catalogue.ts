// The empty racks of the bundled IT & network pack (`theovencook.it`, #112): each entry is the rack's spec, its
// external size and its library words; rackItem() turns one into the pack item with its frame drawn by
// rackFrameParts(). tools/rack-frames.ts writes the files, and a test keeps the files and this list the same. The
// rack frames catalogue (#116) grows this list. Sizes in metres (W x D x H, external).

import type { PackItem } from "./packs.ts";
import { rackFrameParts, readRackFrame, type RackFrameSpec } from "./rack-frame.ts";

export interface RackEntry {
  id: string;
  name: string;
  size: [number, number, number];
  mount: "floor" | "surface" | "wall";
  wall_y?: number;
  rack_frame: RackFrameSpec;
  family: string;
  variant: string;
  room: string[];
  tags: string[];
}

export const RACKS: RackEntry[] = [
  {
    // a 10" desktop mini rack (DeskPi RackMate class: 280 x 200 footprint)
    id: "rack_mini_10in_6u",
    name: "Mini rack 10-inch 6U",
    size: [0.28, 0.2, 0.32],
    mount: "surface",
    rack_frame: { u: 6, form: "frame4", width: 10 },
    family: "rack_mini",
    variant: "6U",
    room: ["office", "hobby", "loft"],
    tags: ["10 inch", "mini rack", "homelab", "desktop rack", "server rack", "rack"],
  },
  {
    // a 19" 9U wall cabinet, 600 x 450, glass door (9U = 400 mm of rails in a 500 mm cabinet)
    id: "rack_wall_cabinet_9u",
    name: "Wall cabinet 19-inch 9U",
    size: [0.6, 0.45, 0.5],
    mount: "wall",
    wall_y: 1.2,
    rack_frame: { u: 9, form: "wall_cabinet", door: "glass" },
    family: "rack_wall_cabinet",
    variant: "9U",
    room: ["office", "garage", "utility", "loft", "hall"],
    tags: ["19 inch", "data cabinet", "comms cabinet", "wall rack", "server rack", "rack"],
  },
  {
    // a 19" 42U floor cabinet, 600 x 1000 x 2050 (42U = 1867 mm of rails), mesh door, on a 100 mm plinth
    id: "rack_floor_cabinet_42u",
    name: "Floor cabinet 19-inch 42U",
    size: [0.6, 1.0, 2.05],
    mount: "floor",
    rack_frame: { u: 42, form: "cabinet", door: "mesh", bottom: 0.1 },
    family: "rack_floor_cabinet",
    variant: "42U",
    room: ["office", "garage", "utility", "loft"],
    tags: ["19 inch", "server cabinet", "data cabinet", "server rack", "42u", "rack"],
  },
];

/** The pack item of a catalogue entry, its frame drawn from its spec. */
export function rackItem(entry: RackEntry): PackItem {
  const base = { size: entry.size, mount: entry.mount, rack_frame: entry.rack_frame };
  const frame = readRackFrame(base);
  if (!frame) throw new Error(`${entry.id}: the rack frame breaks the rules`);
  const { parts, symbol } = rackFrameParts(frame, entry.size);
  return {
    id: entry.id,
    name: { en: entry.name },
    size: entry.size,
    group: "network",
    room: entry.room,
    tags: entry.tags,
    family: entry.family,
    variant: { en: entry.variant },
    mount: entry.mount,
    ...(entry.wall_y !== undefined ? { wall_y: entry.wall_y } : {}),
    rack_frame: entry.rack_frame,
    parts,
    symbol,
  };
}

/** An item file in the bundled packs' style: one field per line, one part or symbol shape per line. */
export function rackItemFile(item: PackItem): string {
  const lines = Object.entries(item).map(([key, value]) => {
    if (Array.isArray(value) && value.length && typeof value[0] === "object") {
      return `  ${JSON.stringify(key)}: [\n${value.map((v) => `    ${JSON.stringify(v).replace(/,"/g, ', "').replace(/":/g, '": ')}`).join(",\n")}\n  ]`;
    }
    const text = Array.isArray(value) ? `[${value.map((v) => JSON.stringify(v)).join(", ")}]` : JSON.stringify(value);
    return `  ${JSON.stringify(key)}: ${text.replace(/,"/g, ', "').replace(/":/g, '": ')}`;
  });
  return `{\n${lines.join(",\n")}\n}\n`;
}
