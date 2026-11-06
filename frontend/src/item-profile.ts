/**
 * The item panel's kind profiles (#397, option A of the run 9 panel review): which sections and folds an item's panel
 * shows, decided once from its type, so the panel renders the profile instead of testing `isElectric`, `isLamp` and
 * similar predicates in many places.
 *
 * Fixed order: header, Position (always open), the kind's main section, then closed folds (Appearance, Size, and per
 * kind Occupancy sensor / Screen pictures / Energy, then Taps and visibility, More options). View only: no stored plan
 * key depends on it.
 */

import { hasScreen } from "./devices.ts";
import { isVehicleItem } from "./furniture-links.ts";
import { ENERGY_DEVICES, GANG_TYPES, isLamp, TECH_TYPES } from "./model.ts";
import { energyRole, isElectric, packInfo } from "./packs.ts";

/** What an item is, as far as its panel is concerned. */
export type ItemKind = "car" | "parking" | "lamp" | "screen" | "appliance" | "energy" | "bed" | "seating" | "household" | "switch" | "tech" | "stairs" | "furniture";

/** The kind's main section, open under Position (null: none, the folds follow Position). */
export type MainSection = "car" | "parking" | "lamp" | "device" | "household" | "switch" | "tech" | "stairs" | null;

/** A closed fold of the panel. "glow" is the occupancy sensor of a seat or bed, the glow link of other furniture. */
export type PanelFold = "appearance" | "size" | "glow" | "screen" | "energy" | "taps" | "more";

export interface ItemProfile {
  kind: ItemKind;
  main: MainSection;
  /** The folds, top to bottom. */
  folds: PanelFold[];
  /** The fold open the first time an item of this kind is chosen (the sofa opens Appearance). */
  openFirst: PanelFold | null;
  /** Mirror left-right (not lamps, not vehicles). */
  mirror: boolean;
  /** "Glow when this is on" (the state link): in the glow fold, or in More options for devices and cars. */
  glow: boolean;
  /** "Second state" for the other half: beds only. */
  secondState: boolean;
  /** A consumable or service (filters, rinse aid): appliances only. */
  consumable: boolean;
  /** "Ask before switching": items that switch something (not cars). */
  confirm: boolean;
}

/** Built-in types that link nothing that glows (no state link). */
const NO_GLOW = new Set(["parking", "stairwell", "rug", "grid_point", "waste_bin", "mailbox", "wall_switch", "wall_socket", "wifi_ap", "water_heater"]);
const SEATS = new Set(["sofa", "sofa_l", "sofa_u", "armchair", "stool", "chair", "bench", "corner_bench", "bar_stool", "office_chair"]);
const BEDS = new Set(["bed", "bunk_bed"]);
const STAIRS = new Set(["stairs", "stairs_u", "stairwell"]);

/** The words a pack item is known by: its family and its tags, lower case. */
function packWords(type: string): string[] {
  const info = packInfo(type);
  return info ? [info.family ?? "", ...(info.tags ?? [])].map((t) => t.toLowerCase()).filter(Boolean) : [];
}

/** A bed (built-in, or a pack item tagged "bed" or of a bed family), not a raised garden bed or a pet bed. */
export function isBedItem(type: string): boolean {
  if (BEDS.has(type)) return true;
  const words = packWords(type);
  if (words.some((w) => /raised|garden|flower|cat_|dog_|pet/.test(w))) return false;
  return words.some((w) => w === "bed" || w === "bunk bed" || /(^|_)(bed|bed_frame|daybed|loft_bed|bunk_bed|ottoman_bed)$/.test(w));
}

/** Something to sit on: a sofa, an armchair, a chair, a stool or a bench (not a TV bench or a workbench). */
export function isSeatItem(type: string): boolean {
  if (SEATS.has(type)) return true;
  return packWords(type).some((w) => !/tv_bench|tv bench|workbench/.test(w) && /(sofa|armchair|chair|stool|bench|couch|settee|loveseat|recliner)/.test(w));
}

function kindOf(type: string): ItemKind {
  if (type === "parking") return "parking";
  if (isVehicleItem(type)) return "car";
  if (type === "waste_bin" || type === "mailbox") return "household";
  if (GANG_TYPES.has(type)) return "switch";
  if (TECH_TYPES.has(type)) return "tech";
  if (STAIRS.has(type)) return "stairs";
  if (isLamp(type)) return "lamp";
  if ((ENERGY_DEVICES as readonly string[]).includes(type) || energyRole(type) !== null) return "energy";
  if (isElectric(type)) return hasScreen(type) ? "screen" : "appliance";
  if (isBedItem(type)) return "bed";
  if (isSeatItem(type)) return "seating";
  return "furniture";
}

const MAIN: Record<ItemKind, MainSection> = {
  car: "car",
  parking: "parking",
  lamp: "lamp",
  screen: "device",
  appliance: "device",
  energy: "device",
  bed: null,
  seating: null,
  household: "household",
  switch: "switch",
  tech: "tech",
  stairs: "stairs",
  furniture: null,
};

const FOLDS: Record<ItemKind, PanelFold[]> = {
  car: ["appearance", "size", "energy", "taps", "more"],
  parking: ["appearance", "size", "taps", "more"],
  lamp: ["appearance", "size", "taps", "more"],
  screen: ["appearance", "size", "screen", "energy", "taps", "more"],
  appliance: ["appearance", "size", "energy", "taps", "more"],
  // an energy device's power sensor is its main link: it stands in the main section
  energy: ["appearance", "size", "taps", "more"],
  bed: ["appearance", "size", "glow", "taps", "more"],
  seating: ["appearance", "size", "glow", "taps", "more"],
  household: ["appearance", "size", "taps", "more"],
  switch: ["appearance", "size", "taps", "more"],
  tech: ["appearance", "size", "taps", "more"],
  stairs: ["appearance", "size", "taps", "more"],
  furniture: ["appearance", "size", "glow", "taps", "more"],
};

const profiles = new Map<string, ItemProfile>();

/** The panel profile of an item type (kept per type; pack items are looked up once their pack is there). */
export function itemProfile(type: string): ItemProfile {
  const had = profiles.get(type);
  if (had && (had.kind !== "furniture" || !type.startsWith("pack:") || packInfo(type))) return had;
  const kind = kindOf(type);
  const furnitureLike = kind === "bed" || kind === "seating" || kind === "furniture";
  const profile: ItemProfile = {
    kind,
    main: MAIN[kind],
    folds: kind === "furniture" && NO_GLOW.has(type) ? FOLDS[kind].filter((f) => f !== "glow") : FOLDS[kind],
    openFirst: furnitureLike ? "appearance" : null,
    mirror: kind !== "lamp" && kind !== "car",
    glow: !NO_GLOW.has(type) && (furnitureLike || kind === "appliance" || kind === "car"),
    secondState: kind === "bed",
    consumable: kind === "appliance" || kind === "screen",
    confirm: kind !== "car" && kind !== "parking" && kind !== "household" && kind !== "stairs",
  };
  profiles.set(type, profile);
  return profile;
}
