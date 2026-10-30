// Every setting of Home 3D, registered once (#139): its section and card, whether it belongs to the house (saved in the
// plan, every screen sees it) or to this device (this browser only), who may change it, its control, its default and
// how it is read and written. The Settings page, its search and its deep links all come from this list, so a new
// setting is one entry here. Pure data and functions: no Lit, no texts table (labels are text keys), so tests run it
// and the page's own bundle stays small.

import type { Building, BuildingSettings, StartView } from "../model.ts";
import { DEFAULT_WEATHER_EFFECTS, WEATHER_EFFECTS } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { fromCelsius, tempUnit, toCelsius } from "../devices.ts";
import { doorbellCamera, doorbellEntities, HOLD_DEFAULT, HOLD_MAX, HOLD_MIN } from "../director.ts";
import { isRainSource } from "../weather.ts";
import { hasFeature, released } from "../features.ts";
import { EFFECT_DEFAULTS } from "../room-effects.ts";

export type Scope = "house" | "device";
/** Who may change it: anyone (device rows), editors (house rows), Home Assistant admins. */
export type Permission = "everyone" | "editor" | "ha_admin";
export type GroupId = "house" | "live" | "device" | "system";
export type SectionId =
  | "general"
  | "scene"
  | "energy"
  | "fun"
  | "warnings"
  | "effects"
  | "cameras"
  | "household"
  | "favourites"
  | "look"
  | "voice"
  | "access"
  | "packs"
  | "backup"
  | "advanced";

/** A text key: the page's own ("st_…") or a main one (i18n.ts). */
export type TextKey = string;

export interface Card {
  id: string;
  title: TextKey;
}

export interface Section {
  id: SectionId;
  group: GroupId;
  icon: string;
  title: TextKey;
  hint: TextKey;
  cards: Card[];
}

/** This device's preferences ("home3d.<key>" in localStorage). */
export interface DevicePrefs {
  get(key: string): string | null;
  /** null removes the key (back to the default). */
  set(key: string, value: string | null): void;
}

/** What a setting is read from and written to. */
export interface SettingsEnv {
  building: Building | null;
  hass: HomeAssistant | undefined;
  prefs: DevicePrefs;
  /** The 3D view as it was last shown on this device (the start view takes it), null before it was shown. */
  lastView?: StartView | null;
  /** Answers of settings kept outside the plan (pack updates, voice sentences …), by loader id; filled by the page. */
  remote?: Record<string, unknown>;
}

export interface Option {
  value: string;
  /** A text key, or the text itself with `raw`. */
  label: TextKey;
  raw?: boolean;
}

export type Control =
  | { kind: "switch" }
  | {
      kind: "number";
      step: number;
      min?: number;
      max?: number;
      /** Shown after the field (a text key or a unit like "s"). */
      unit?: string | ((env: SettingsEnv) => string);
      /** An empty field is allowed and means the default (null). */
      clearable?: boolean;
    }
  | { kind: "segment"; options: Option[] | ((env: SettingsEnv) => Option[]) }
  | { kind: "select"; options: (env: SettingsEnv) => Option[] }
  | {
      kind: "entity";
      filter: (id: string, env: SettingsEnv) => boolean;
      /** What "automatic" picks now (undefined: no automatic choice, only "none"). */
      auto?: (env: SettingsEnv) => string | null | undefined;
    }
  | { kind: "text"; placeholder?: TextKey; maxLength?: number }
  | { kind: "time" }
  | { kind: "colour"; fallback: string; clearable?: boolean }
  | { kind: "range"; min: number; max: number; step: number }
  | { kind: "checks"; options: Option[] }
  /** A button; `action` names what the page does (it may also write, see Setting.write). */
  | { kind: "action"; button: TextKey; action: string }
  /** A list the page draws itself (the warnings dismissed for good). */
  | { kind: "list"; list: "alert_ignored" }
  /** A block the editor bundle draws (lists with their own logic: favourites, own buttons, backup …). */
  | { kind: "embed"; topic: EmbedTopic };

/** The editor parts the page shows as they are (`<fp3d-editor topic=…>`, see editor.ts renderTopic). */
export type EmbedTopic =
  | "favorites"
  | "own_buttons"
  | "media_presets"
  | "director_triggers"
  | "editors"
  | "tablet_users"
  | "backup"
  | "backdrop_picture"
  | "energy_balance"
  | "hologram"
  | "presence";

/** What a write did: a new plan to save, a promise (a setting kept elsewhere), or nothing more (a device pref). */
export type WriteResult = Building | Promise<unknown> | void;

export interface Setting<V = unknown> {
  /** Unique; the deep link's last part (#settings/<section>/<id>). */
  id: string;
  section: SectionId;
  card: string;
  scope: Scope;
  permission: Permission;
  label: TextKey;
  hint?: TextKey;
  /** Extra words search finds it by ("dark" finds the look). */
  keywords?: string[];
  control: Control;
  default: V;
  read(env: SettingsEnv): V;
  write?(env: SettingsEnv, value: V): WriteResult;
  /** Shown only when this says so (feature flags, released(), other settings). */
  visible?(env: SettingsEnv): boolean;
  /** Device prefs this row keeps (reset with "Reset this device's preferences"). */
  prefKeys?: string[];
  /** Loader (see LOADERS in the page) whose answer `read` takes from env.remote. */
  loader?: string;
}

// ---------------------------------------------------------------------------------------------------- sections

export const GROUPS: { id: GroupId; title: TextKey }[] = [
  { id: "house", title: "st_group_house" },
  { id: "live", title: "st_group_live" },
  { id: "device", title: "st_group_device" },
  { id: "system", title: "st_group_system" },
];

export const SECTIONS: Section[] = [
  {
    id: "general",
    group: "house",
    icon: "⌂",
    title: "st_sec_general",
    hint: "st_sec_general_hint",
    cards: [
      { id: "plan", title: "st_card_plan" },
      { id: "opening", title: "st_card_opening" },
    ],
  },
  {
    id: "scene",
    group: "house",
    icon: "◐",
    title: "st_sec_scene",
    hint: "st_sec_scene_hint",
    cards: [
      { id: "sun", title: "st_card_sun" },
      { id: "weather", title: "st_card_weather" },
      { id: "backdrop", title: "st_card_backdrop" },
    ],
  },
  {
    id: "energy",
    group: "house",
    icon: "ϟ",
    title: "st_sec_energy",
    hint: "st_sec_energy_hint",
    cards: [
      { id: "meters", title: "st_card_meters" },
      { id: "hologram", title: "st_card_hologram" },
    ],
  },
  {
    id: "fun",
    group: "house",
    icon: "✦",
    title: "st_sec_fun",
    hint: "st_sec_fun_hint",
    cards: [
      { id: "eggs", title: "st_card_eggs" },
      { id: "pets", title: "st_card_pets" },
    ],
  },
  {
    id: "warnings",
    group: "live",
    icon: "⚠",
    title: "st_sec_warnings",
    hint: "st_sec_warnings_hint",
    cards: [
      { id: "warnings", title: "st_card_warnings" },
      { id: "dismissed", title: "st_card_dismissed" },
    ],
  },
  { id: "effects", group: "live", icon: "≋", title: "st_sec_effects", hint: "st_sec_effects_hint", cards: [{ id: "motion", title: "st_card_motion" }] },
  {
    id: "cameras",
    group: "live",
    icon: "◉",
    title: "st_sec_cameras",
    hint: "st_sec_cameras_hint",
    cards: [
      { id: "cameras", title: "st_card_cameras" },
      { id: "director", title: "st_card_director" },
    ],
  },
  {
    id: "household",
    group: "live",
    icon: "♻",
    title: "st_sec_household",
    hint: "st_sec_household_hint",
    cards: [
      { id: "bins", title: "st_card_bins" },
      { id: "pinboard", title: "st_card_pinboard" },
    ],
  },
  {
    id: "favourites",
    group: "live",
    icon: "★",
    title: "st_sec_favourites",
    hint: "st_sec_favourites_hint",
    cards: [
      { id: "favourites", title: "st_card_favourites" },
      { id: "buttons", title: "st_card_buttons" },
      { id: "presets", title: "st_card_presets" },
    ],
  },
  {
    id: "look",
    group: "device",
    icon: "◑",
    title: "st_sec_look",
    hint: "st_sec_look_hint",
    cards: [
      { id: "look", title: "st_card_look" },
      { id: "markers", title: "st_card_markers" },
      { id: "show", title: "st_card_show" },
    ],
  },
  { id: "voice", group: "device", icon: "◖", title: "st_sec_voice", hint: "st_sec_voice_hint", cards: [{ id: "voice", title: "st_card_voice" }] },
  {
    id: "access",
    group: "system",
    icon: "⛨",
    title: "st_sec_access",
    hint: "st_sec_access_hint",
    cards: [
      { id: "editors", title: "st_card_editors" },
      { id: "tablets", title: "st_card_tablets" },
    ],
  },
  { id: "packs", group: "system", icon: "▦", title: "st_sec_packs", hint: "st_sec_packs_hint", cards: [{ id: "updates", title: "st_card_updates" }] },
  { id: "backup", group: "system", icon: "⟲", title: "st_sec_backup", hint: "st_sec_backup_hint", cards: [{ id: "backup", title: "st_card_backup" }] },
  {
    id: "advanced",
    group: "system",
    icon: "⚙",
    title: "st_sec_advanced",
    hint: "st_sec_advanced_hint",
    cards: [
      { id: "advanced", title: "st_card_advanced" },
      { id: "people", title: "st_card_people" },
    ],
  },
];

export function sectionOf(id: string): Section | undefined {
  return SECTIONS.find((s) => s.id === id);
}

// ---------------------------------------------------------------------------------------------------- helpers

/** A copy of the plan with some settings changed (the plan itself is never changed in place). */
export function withSettings(b: Building, patch: Partial<BuildingSettings>): Building {
  const next = structuredClone(b);
  Object.assign(next.settings, patch);
  return next;
}

/** A copy of the plan with one part of the settings (director, household …) merged. */
function withPart<K extends "director" | "household" | "halloween" | "terrain" | "backdrop">(b: Building, key: K, patch: Partial<NonNullable<BuildingSettings[K]>>): Building {
  const next = structuredClone(b);
  next.settings[key] = { ...((next.settings[key] ?? {}) as object), ...patch } as BuildingSettings[K];
  return next;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const settingsOf = (env: SettingsEnv): Partial<BuildingSettings> => env.building?.settings ?? {};

/** A plain on / off house setting stored as `key` (missing = `def`). */
function houseSwitch(id: string, section: SectionId, card: string, key: keyof BuildingSettings, def: boolean, label: TextKey, hint?: TextKey, keywords?: string[]): Setting<boolean> {
  return {
    id,
    section,
    card,
    scope: "house",
    permission: "editor",
    label,
    hint,
    keywords,
    control: { kind: "switch" },
    default: def,
    read: (env) => {
      const v = settingsOf(env)[key];
      return typeof v === "boolean" ? v : def;
    },
    write: (env, v) => withSettings(env.building!, { [key]: v }),
  };
}

/** A house entity choice stored as `key` (null: none / automatic). */
function houseEntity(id: string, section: SectionId, card: string, key: keyof BuildingSettings, label: TextKey, hint: TextKey | undefined, filter: (id: string, env: SettingsEnv) => boolean, auto?: (env: SettingsEnv) => string | null | undefined, keywords?: string[]): Setting<string | null> {
  return {
    id,
    section,
    card,
    scope: "house",
    permission: "editor",
    label,
    hint,
    keywords,
    control: { kind: "entity", filter, auto },
    default: null,
    read: (env) => (settingsOf(env)[key] as string | null | undefined) ?? null,
    write: (env, v) => withSettings(env.building!, { [key]: v }),
  };
}

/** A device switch kept as "home3d.<key>" = "1" / "0". */
export function deviceSwitch(id: string, section: SectionId, card: string, key: string, def: boolean, label: TextKey, hint?: TextKey, keywords?: string[]): Setting<boolean> {
  return {
    id,
    section,
    card,
    scope: "device",
    permission: "everyone",
    label,
    hint,
    keywords,
    control: { kind: "switch" },
    default: def,
    prefKeys: [key],
    read: (env) => {
      const v = env.prefs.get(key);
      return v === null ? def : v === "1";
    },
    write: (env, v) => env.prefs.set(key, v ? "1" : "0"),
  };
}

/** A device choice of a few values kept as "home3d.<key>" (anything else reads as the default). */
export function deviceChoice(id: string, section: SectionId, card: string, key: string, values: readonly string[], def: string, label: TextKey, options: Option[], hint?: TextKey, keywords?: string[], kind: "segment" | "select" = "segment"): Setting<string> {
  return {
    id,
    section,
    card,
    scope: "device",
    permission: "everyone",
    label,
    hint,
    keywords,
    control: kind === "segment" ? { kind: "segment", options } : { kind: "select", options: () => options },
    default: def,
    prefKeys: [key],
    read: (env) => {
      const v = env.prefs.get(key);
      return v !== null && values.includes(v) ? v : def;
    },
    write: (env, v) => env.prefs.set(key, v),
  };
}

type EffectKey = keyof typeof EFFECT_DEFAULTS;

/** One live-effect value (#10): stored in °C (temperatures) or seconds, shown in Home Assistant's unit; empty = default. */
function effect(id: EffectKey, section: SectionId, card: string, label: TextKey, temperature: boolean, keywords: string[], hint?: TextKey): Setting<number | null> {
  const toShown = (env: SettingsEnv, v: number) => (temperature && env.hass ? Math.round(fromCelsius(env.hass, v) * 10) / 10 : v);
  return {
    id: `effects.${id}`,
    section,
    card,
    scope: "house",
    permission: "editor",
    label,
    hint,
    keywords,
    control: { kind: "number", step: temperature ? 1 : 5, min: temperature ? -20 : 0, max: temperature ? 212 : 3600, clearable: true, unit: (env) => (temperature ? (env.hass ? tempUnit(env.hass) : "°C") : "s") },
    default: toShownDefault(id),
    read: (env) => {
      const v = env.building?.settings.effects?.[id];
      return typeof v === "number" ? toShown(env, v) : null;
    },
    write: (env, v) => {
      const stored = v === null || !Number.isFinite(v) ? null : temperature ? clamp(toCelsius(v, env.hass ? tempUnit(env.hass) : "°C"), -20, 100) : clamp(Math.round(v), 0, 3600);
      const next: NonNullable<BuildingSettings["effects"]> = { ...(env.building!.settings.effects ?? {}), [id]: stored };
      for (const k of Object.keys(next) as EffectKey[]) if (next[k] === null || next[k] === undefined) delete next[k];
      return withSettings(env.building!, { effects: Object.keys(next).length ? next : null });
    },
  };
}

function toShownDefault(id: EffectKey): number {
  return EFFECT_DEFAULTS[id];
}

/** "Automatic (…)" / "None" are added by the page for entity controls. */
const domain = (id: string) => id.split(".")[0];

// ---------------------------------------------------------------------------------------------------- the settings

const GENERAL: Setting[] = [
  {
    id: "units",
    section: "general",
    card: "plan",
    scope: "house",
    permission: "editor",
    label: "units",
    hint: "units_hint",
    keywords: ["feet", "inches", "metres", "meters", "imperial", "metric"],
    control: {
      kind: "segment",
      options: [
        { value: "auto", label: "quality_auto" },
        { value: "metric", label: "units_metric" },
        { value: "imperial", label: "units_imperial" },
      ],
    },
    default: "auto",
    read: (env) => settingsOf(env).units ?? "auto",
    write: (env, v) => withSettings(env.building!, { units: v === "metric" || v === "imperial" ? v : null }),
  } as Setting<string>,
  {
    id: "grid",
    section: "general",
    card: "plan",
    scope: "house",
    permission: "editor",
    label: "grid",
    keywords: ["snap", "step"],
    control: { kind: "number", step: 0.01, min: 0.01, max: 1 },
    default: 0.05,
    read: (env) => settingsOf(env).grid ?? 0.05,
    write: (env, v) => withSettings(env.building!, { grid: clamp(v, 0.01, 1) }),
  } as Setting<number>,
  {
    id: "wall_exterior",
    section: "general",
    card: "plan",
    scope: "house",
    permission: "editor",
    label: "wall_exterior",
    keywords: ["thickness", "outer"],
    control: { kind: "number", step: 0.01, min: 0.02, max: 1 },
    default: 0.24,
    read: (env) => settingsOf(env).wall_exterior ?? 0.24,
    write: (env, v) => withSettings(env.building!, { wall_exterior: clamp(v, 0.02, 1) }),
  } as Setting<number>,
  {
    id: "wall_interior",
    section: "general",
    card: "plan",
    scope: "house",
    permission: "editor",
    label: "wall_interior",
    keywords: ["thickness", "inner"],
    control: { kind: "number", step: 0.01, min: 0.02, max: 1 },
    default: 0.12,
    read: (env) => settingsOf(env).wall_interior ?? 0.12,
    write: (env, v) => withSettings(env.building!, { wall_interior: clamp(v, 0.02, 1) }),
  } as Setting<number>,
  {
    id: "north",
    section: "general",
    card: "plan",
    scope: "house",
    permission: "editor",
    label: "north",
    hint: "north_hint",
    keywords: ["compass", "sun", "orientation"],
    control: { kind: "number", step: 1, min: 0, max: 359, unit: "°" },
    default: 0,
    read: (env) => settingsOf(env).north ?? 0,
    write: (env, v) => withSettings(env.building!, { north: ((Math.round(v) % 360) + 360) % 360 }),
  } as Setting<number>,
  houseSwitch("lock_plan", "general", "plan", "lock_plan", false, "plan_lock", "st_lock_plan_hint", ["lock", "fixed", "accident"]),
  {
    id: "start_view",
    section: "general",
    card: "opening",
    scope: "house",
    permission: "editor",
    label: "start_view",
    hint: "st_start_view_hint",
    keywords: ["camera", "angle", "opens"],
    control: { kind: "action", button: "st_start_view_use", action: "start_view" },
    default: null,
    read: (env) => settingsOf(env).start_view ?? null,
    // the action takes the last 3D view; null (the page's "Default" button) goes back to the fitted view
    write: (env, v) => withSettings(env.building!, { start_view: (v as StartView | null) ?? null }),
  } as Setting<StartView | null>,
  {
    id: "editor_floor",
    section: "general",
    card: "opening",
    scope: "house",
    permission: "editor",
    label: "editor_floor",
    hint: "editor_floor_hint",
    control: {
      kind: "select",
      options: (env) => [{ value: "", label: "editor_floor_auto" }, ...(env.building?.floors ?? []).map((f) => ({ value: f.id, label: f.name, raw: true }))],
    },
    default: "",
    read: (env) => settingsOf(env).editor_floor ?? "",
    write: (env, v) => withSettings(env.building!, { editor_floor: v || null }),
  } as Setting<string>,
];

const WARNINGS: Setting[] = [
  houseSwitch("rain_warning", "warnings", "warnings", "rain_warning", true, "rain_warning", undefined, ["window", "rain"]),
  houseEntity("rain_entity", "warnings", "warnings", "rain_entity", "rain_entity", "rain_entity_hint", (id, env) => !!env.hass && isRainSource(env.hass, id), undefined, ["weather station", "rain sensor"]),
  houseSwitch("alert_names", "warnings", "warnings", "alert_names", true, "alert_names", "alert_names_hint", ["device", "names", "banner"]),
  houseSwitch("alert_unavailable", "warnings", "warnings", "alert_unavailable", false, "alert_unavailable", "alert_unavailable_hint", ["battery", "contact", "offline"]),
  houseEntity("outage_entity", "warnings", "warnings", "outage_entity", "outage_entity", "outage_entity_hint", (id) => /^(binary_sensor|sensor|input_boolean|switch)\./.test(id), undefined, ["power", "grid", "ups", "blackout"]),
  {
    id: "alert_ignored",
    section: "warnings",
    card: "dismissed",
    scope: "house",
    permission: "editor",
    label: "alert_ignored",
    hint: "alert_ignored_hint",
    keywords: ["dismissed", "ignored", "restore", "banner"],
    control: { kind: "list", list: "alert_ignored" },
    default: [],
    read: (env) => settingsOf(env).alert_ignored ?? [],
    write: (env, v) => withSettings(env.building!, { alert_ignored: v as BuildingSettings["alert_ignored"] }),
  },
];

const EFFECTS: Setting[] = [
  effect("motion_seconds", "effects", "motion", "effects_motion_seconds", false, ["motion", "light up", "presence"], "effects_hint"),
  effect("radiator_cold", "effects", "motion", "effects_radiator_cold", true, ["radiator", "heating", "blue"]),
  effect("radiator_hot", "effects", "motion", "effects_radiator_hot", true, ["radiator", "heating", "red"]),
  effect("tank_cold", "effects", "motion", "effects_tank_cold", true, ["cylinder", "hot water", "tank"]),
  effect("tank_hot", "effects", "motion", "effects_tank_hot", true, ["cylinder", "hot water", "tank"]),
];

/** The live director's events (house) and its switch on this device; Camera Cockpit. */
const directorPart = (env: SettingsEnv) => env.building?.settings.director ?? {};
const directorSwitch = (id: "doorbell" | "appliances" | "alerts" | "live", label: TextKey, hint?: TextKey, keywords?: string[]): Setting<boolean> => ({
  id: `director.${id}`,
  section: "cameras",
  card: "director",
  scope: "house",
  permission: "editor",
  label,
  hint,
  keywords,
  control: { kind: "switch" },
  default: false,
  read: (env) => !!directorPart(env)[id],
  write: (env, v) => withPart(env.building!, "director", { [id]: v }),
});
const placedCameras = (env: SettingsEnv) => new Set((env.building?.floors ?? []).flatMap((f) => f.placements.map((p) => p.entity_id)).filter((id) => id.startsWith("camera.")));

const CAMERAS: Setting[] = [
  effect("camera_seconds", "cameras", "cameras", "effects_camera_seconds", false, ["camera", "red", "motion", "hold"]),
  // the live director on this device: the same key the panel reads (director.ts directorOnHere, "home3d.director")
  deviceSwitch("director_here", "cameras", "director", "director", false, "director_here", "st_director_here_hint", ["director", "tablet", "move by itself"]),
  directorSwitch("doorbell", "director_doorbell", undefined, ["doorbell", "ring", "door"]),
  {
    id: "director.doorbell_entity",
    section: "cameras",
    card: "director",
    scope: "house",
    permission: "editor",
    label: "director_doorbell_entity",
    keywords: ["doorbell"],
    control: { kind: "entity", filter: (id) => id.startsWith("event.") || id.startsWith("binary_sensor."), auto: (env) => (env.hass ? (doorbellEntities(env.hass)[0] ?? null) : undefined) },
    default: null,
    visible: (env) => !!directorPart(env).doorbell,
    read: (env) => directorPart(env).doorbell_entity ?? null,
    write: (env, v) => withPart(env.building!, "director", { doorbell_entity: v }),
  } as Setting<string | null>,
  {
    id: "director.doorbell_camera",
    section: "cameras",
    card: "director",
    scope: "house",
    permission: "editor",
    label: "director_doorbell_camera",
    keywords: ["doorbell", "camera"],
    control: {
      kind: "entity",
      filter: (id, env) => placedCameras(env).has(id),
      // the doorbell's own camera, found on its device, unless one is chosen
      auto: (env) => {
        const bell = env.hass ? (directorPart(env).doorbell_entity ?? doorbellEntities(env.hass)[0] ?? null) : null;
        return env.hass && bell ? doorbellCamera(env.hass, bell, [...placedCameras(env)]) : null;
      },
    },
    default: null,
    visible: (env) => !!directorPart(env).doorbell,
    read: (env) => directorPart(env).doorbell_camera ?? null,
    write: (env, v) => withPart(env.building!, "director", { doorbell_camera: v }),
  } as Setting<string | null>,
  {
    id: "director.motion",
    section: "cameras",
    card: "director",
    scope: "house",
    permission: "editor",
    label: "director_motion",
    keywords: ["person", "people", "motion"],
    control: {
      kind: "segment",
      options: [
        { value: "off", label: "director_motion_off" },
        { value: "person", label: "director_motion_person" },
        { value: "all", label: "director_motion_all" },
      ],
    },
    default: "off",
    read: (env) => directorPart(env).motion ?? "off",
    write: (env, v) => withPart(env.building!, "director", { motion: v as "off" | "person" | "all" }),
  } as Setting<string>,
  directorSwitch("appliances", "director_appliances", undefined, ["washer", "dryer", "dishwasher"]),
  directorSwitch("alerts", "director_alerts", undefined, ["warning", "smoke"]),
  directorSwitch("live", "director_live", "director_live_hint", ["stream", "video"]),
  {
    id: "director.hold",
    section: "cameras",
    card: "director",
    scope: "house",
    permission: "editor",
    label: "director_hold",
    hint: "director_back_hint",
    keywords: ["back", "return", "seconds"],
    control: { kind: "number", step: 5, min: HOLD_MIN, max: HOLD_MAX, unit: "s" },
    default: HOLD_DEFAULT,
    read: (env) => directorPart(env).hold ?? HOLD_DEFAULT,
    write: (env, v) => withPart(env.building!, "director", { hold: clamp(Math.round(v), HOLD_MIN, HOLD_MAX) }),
  } as Setting<number>,
  {
    id: "director.triggers",
    section: "cameras",
    card: "director",
    scope: "house",
    permission: "editor",
    label: "director_triggers",
    hint: "director_triggers_hint",
    keywords: ["garage", "gate", "trigger"],
    control: { kind: "embed", topic: "director_triggers" },
    default: [],
    read: (env) => directorPart(env).triggers ?? [],
  },
];

/** Whether the house shows easter eggs at all (#139): on unless switched off. */
export function easterEggsOn(settings: Pick<BuildingSettings, "easter_eggs"> | null | undefined): boolean {
  return settings?.easter_eggs !== false;
}

const FUN: Setting[] = [
  houseSwitch("easter_eggs", "fun", "eggs", "easter_eggs", true, "st_easter_eggs", "st_easter_eggs_hint", ["surprise", "halloween", "ghost", "fun", "egg"]),
  {
    id: "halloween.ghost",
    section: "fun",
    card: "eggs",
    scope: "house",
    permission: "editor",
    label: "halloween_ghost",
    hint: "st_ghost_hint",
    keywords: ["halloween", "ghost", "spooky"],
    control: { kind: "switch" },
    default: true,
    visible: (env) => hasFeature("fun_halloween") && released("fun_halloween") && easterEggsOn(env.building?.settings),
    read: (env) => env.building?.settings.halloween?.ghost !== false,
    write: (env, v) => withPart(env.building!, "halloween", { ghost: v }),
  } as Setting<boolean>,
  {
    id: "pets.on",
    section: "fun",
    card: "pets",
    scope: "house",
    permission: "editor",
    label: "pets_show",
    keywords: ["cat", "dog", "rabbit", "animals"],
    control: { kind: "switch" },
    default: true,
    visible: () => hasFeature("fun_pets") && released("fun_pets"),
    read: (env) => env.building?.settings.pets?.on !== false,
    write: (env, v) => {
      const next = structuredClone(env.building!);
      next.settings.pets = { on: v, list: [...(next.settings.pets?.list ?? [])] };
      return next;
    },
  } as Setting<boolean>,
  {
    id: "pets.list",
    section: "fun",
    card: "pets",
    scope: "house",
    permission: "editor",
    label: "fun_name_pets",
    hint: "st_pets_edit_hint",
    keywords: ["cat", "dog", "rabbit", "fur", "name"],
    control: { kind: "action", button: "st_pets_edit", action: "extensions" },
    default: [],
    visible: () => hasFeature("fun_pets") && released("fun_pets"),
    read: (env) => env.building?.settings.pets?.list ?? [],
  },
];

/** Every setting, in the order the page shows them. */
export const SETTINGS: Setting[] = [...GENERAL, ...FUN, ...WARNINGS, ...EFFECTS, ...CAMERAS] as Setting[];

// ---------------------------------------------------------------------------------------------------- queries

export function settingById(id: string): Setting | undefined {
  return SETTINGS.find((s) => s.id === id);
}

/** Whether a setting shows (its own visible-when). */
export function shown(s: Setting, env: SettingsEnv): boolean {
  try {
    return s.visible ? s.visible(env) : true;
  } catch {
    return false;
  }
}

/** The settings of a section, in order. */
export function settingsIn(section: SectionId, env: SettingsEnv): Setting[] {
  return SETTINGS.filter((s) => s.section === section && shown(s, env));
}

/** Sections that have at least one setting shown (a section with none yet, or all hidden, is left out). */
export function liveSections(env: SettingsEnv): Section[] {
  return SECTIONS.filter((sec) => settingsIn(sec.id, env).length > 0);
}

/** Who the viewer is: what they may change. */
export interface Viewer {
  editor: boolean;
  haAdmin: boolean;
}

export function mayChange(s: Pick<Setting, "permission">, who: Viewer): boolean {
  if (s.permission === "everyone") return true;
  if (s.permission === "ha_admin") return who.haAdmin;
  return who.editor;
}

/** Folds case and accents ("Hinzufügen" finds "hinzufugen"). */
export function fold(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/**
 * Search over labels, hints, keywords and the section's name, across every section: every word typed must be found
 * somewhere in the setting's texts. `text` turns a text key into its words in the viewer's language.
 */
export function searchSettings(query: string, env: SettingsEnv, text: (key: TextKey) => string): Setting[] {
  const words = fold(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return SETTINGS.filter((s) => {
    if (!shown(s, env)) return false;
    const sec = sectionOf(s.section);
    const card = sec?.cards.find((c) => c.id === s.card);
    const hay = fold([text(s.label), s.hint ? text(s.hint) : "", ...(s.keywords ?? []), sec ? text(sec.title) : "", card ? text(card.title) : "", s.id].join(" "));
    return words.every((w) => hay.includes(w));
  });
}

// ---------------------------------------------------------------------------------------------------- deep links

/** "#settings/<section>/<id>" (the page's address part); without a section: the page's start. */
export function settingsHash(section?: string | null, id?: string | null): string {
  return `#settings${section ? `/${section}${id ? `/${encodeURIComponent(id)}` : ""}` : ""}`;
}

/** The section and setting a "#settings/…" address opens (null: not a settings address). */
export function parseSettingsHash(hash: string): { section: SectionId | null; id: string | null } | null {
  const m = /^#settings(?:\/([a-z_]+))?(?:\/([^/?#]+))?\/?$/.exec(hash);
  if (!m) return null;
  const section = m[1] && sectionOf(m[1]) ? (m[1] as SectionId) : null;
  let id = m[2] ? decodeURIComponent(m[2]) : null;
  if (id && !settingById(id)) id = null;
  // a setting's link alone (#settings/x/<id> with an unknown section) still finds its section
  return { section: section ?? (id ? (settingById(id)?.section ?? null) : null), id };
}

// for the page: entity options lists and the weather effects' choices
export const WEATHER_OPTIONS: Option[] = WEATHER_EFFECTS.map((e) => ({ value: e, label: `weather_effect_${e}` }));
export { DEFAULT_WEATHER_EFFECTS, domain };
