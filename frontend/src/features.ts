/**
 * Features: every feature whose code is in this repository is on (BUILT_IN); there is no tier and no licence.
 * A pack may still list feature names (older pack files do), which is harmless.
 */
import { getPacks } from "./packs.ts";

export type Feature = "camera_cockpit" | "weather" | "screens" | "energy_pro" | "sound" | "auto_pro" | "time_travel" | "pool" | "household" | "fridge_smart" | "fun_pets" | "fun_halloween";

/** The features listed on the extensions page. */
export const FEATURES: readonly Feature[] = ["camera_cockpit", "weather", "screens", "energy_pro", "sound", "auto_pro", "time_travel", "pool", "household"];
/** Fun extras (pets, Halloween): shown in their own section of the extensions page and switched on and off there. */
export const FUN: readonly Feature[] = ["fun_pets", "fun_halloween"];
/** Free features that are always on (they can still be listed in UNRELEASED to hide them). */
export type FreeFeature = "diagnostics" | "locate";
export type Gated = Feature | FreeFeature;

/**
 * Features whose logic is not in this repository: they show nowhere unless a pack lists them or the lab switch is on
 * (localStorage "home3d.lab" = "1").
 */
export const UNRELEASED: readonly Gated[] = ["pool"];

export function labOn(): boolean {
  try {
    // "?fp3d_lab=1" in the address bar switches it on (and "=0" off) – easier than the browser console on a tablet
    const flag = new URLSearchParams(location.search).get("fp3d_lab");
    if (flag === "1") localStorage.setItem("home3d.lab", "1");
    else if (flag === "0") localStorage.removeItem("home3d.lab");
    return localStorage.getItem("home3d.lab") === "1";
  } catch {
    return false;
  }
}

/** The parked camera projection prototype: only with its own switch ("?fp3d_projection=1", "=0" off), off by default. */
export function projectionOn(): boolean {
  try {
    const flag = new URLSearchParams(location.search).get("fp3d_projection");
    if (flag === "1") localStorage.setItem("home3d.projection", "1");
    else if (flag === "0") localStorage.removeItem("home3d.projection");
    return localStorage.getItem("home3d.projection") === "1";
  } catch {
    return false;
  }
}

/** Whether an add-on may be shown and advertised: released, or unlocked, or the lab switch is on. */
export function released(feature: Gated): boolean {
  return !UNRELEASED.includes(feature) || (feature !== "diagnostics" && feature !== "locate" && hasFeature(feature)) || labOn();
}

/** Features unlocked by a pack but not listed anywhere (exclusive items). */
const HIDDEN: readonly Feature[] = ["fridge_smart"];

/** Whether this frontend knows a feature key at all (an older bundle does not know newer Pro add-ons). */
export function knownFeature(key: string): boolean {
  return (FEATURES as readonly string[]).includes(key) || (HIDDEN as readonly string[]).includes(key) || (FUN as readonly string[]).includes(key);
}

/** Every feature whose code is in this repository: on without any pack. */
export const BUILT_IN: readonly Feature[] = ["camera_cockpit", "weather", "screens", "energy_pro", "sound", "auto_pro", "time_travel", "household", "fridge_smart", "fun_pets", "fun_halloween"];

export function unlockedFeatures(packs: readonly { features?: string[] }[] = getPacks()): Set<Feature> {
  const out = new Set<Feature>(BUILT_IN);
  for (const p of packs) for (const f of p.features ?? []) if (knownFeature(f)) out.add(f as Feature);
  return out;
}

export function hasFeature(feature: Feature, packs?: readonly { features?: string[] }[]): boolean {
  return unlockedFeatures(packs).has(feature);
}
