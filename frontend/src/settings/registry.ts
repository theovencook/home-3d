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
import { isRainSource, weatherEntity } from "../weather.ts";
import { backdropImage } from "../backdrop.ts";
import { TABLET_IDLE_DEFAULT } from "../kiosk.ts";
import { fetchPackUpdates, getVoiceSettings, setPackUpdateSettings, setVoiceSentences, type SentenceMode } from "../api.ts";
import type { PackUpdateSettings, PackUpdateStatus } from "../pack-updates.ts";
import { SHOW_PRESENCE } from "../flags.ts";
import { released } from "../features.ts";
import { EFFECT_DEFAULTS } from "../room-effects.ts";
import { formatImperial, lengthUnit, parseLength, unitLabel, type LengthUnit } from "../units.ts";

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
      /** A length: stored in metres, shown and typed in the plan's unit (feet and inches when imperial, #117). */
      length?: boolean;
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
  | { kind: "embed"; topic: EmbedTopic }
  /** Only words: where something is set instead (the card options, the modules' settings). */
  | { kind: "note" };

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
      { id: "cards", title: "st_cards_title" },
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
    control: { kind: "number", step: 0.01, min: 0.01, max: 1, length: true },
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
    control: { kind: "number", step: 0.01, min: 0.02, max: 1, length: true },
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
    control: { kind: "number", step: 0.01, min: 0.02, max: 1, length: true },
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
    visible: (env) => released("fun_halloween") && easterEggsOn(env.building?.settings),
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
    visible: () => released("fun_pets"),
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
    visible: () => released("fun_pets"),
    read: (env) => env.building?.settings.pets?.list ?? [],
  },
];

type Backdrop = NonNullable<BuildingSettings["backdrop"]>;
const backdropOf = (env: SettingsEnv): Backdrop => env.building?.settings.backdrop ?? {};
const backdropColour = (id: string, key: "color" | "color2", label: TextKey, fallback: string, kinds: string[]): Setting<string | null> => ({
  id,
  section: "scene",
  card: "backdrop",
  scope: "house",
  permission: "editor",
  label,
  keywords: ["background", "colour", "color", "sky"],
  control: { kind: "colour", fallback },
  default: null,
  visible: (env) => kinds.includes(backdropOf(env).kind ?? ""),
  read: (env) => backdropOf(env)[key] ?? null,
  write: (env, v) => withPart(env.building!, "backdrop", { [key]: v }),
});

const SCENE: Setting[] = [
  houseSwitch("sun_shadow", "scene", "sun", "sun_shadow", true, "sun_shadow", "sun_shadow_hint", ["sun", "arc", "shadow"]),
  houseSwitch("sun_patches", "scene", "sun", "sun_patches", true, "sun_patches", "sun_patches_hint", ["sun", "floor", "light"]),
  houseSwitch("window_glow", "scene", "sun", "window_glow", true, "window_glow", "window_glow_hint", ["night", "glow", "light"]),
  houseEntity("weather_entity", "scene", "weather", "weather_entity", "weather_entity", "weather_entity_hint", (id) => id.startsWith("weather."), (env) => (env.hass ? weatherEntity(env.hass, null) : undefined), ["forecast", "rain", "snow"]),
  {
    id: "weather_effects",
    section: "scene",
    card: "weather",
    scope: "house",
    permission: "editor",
    label: "weather_effects",
    hint: "st_weather_effects_hint",
    keywords: ["rain", "snow", "fog", "clouds", "lightning", "moon"],
    control: { kind: "checks", options: WEATHER_EFFECTS.map((e) => ({ value: e, label: `weather_effect_${e}` })) },
    default: [...DEFAULT_WEATHER_EFFECTS],
    read: (env) => [...(settingsOf(env).weather_effects ?? DEFAULT_WEATHER_EFFECTS)],
    write: (env, v) => withSettings(env.building!, { weather_effects: WEATHER_EFFECTS.filter((e) => v.includes(e)) }),
  } as Setting<string[]>,
  {
    id: "backdrop.kind",
    section: "scene",
    card: "backdrop",
    scope: "house",
    permission: "editor",
    label: "backdrop_kind",
    hint: "backdrop_hint",
    keywords: ["background", "sky", "picture", "gradient", "wallpaper"],
    control: {
      kind: "segment",
      options: [
        { value: "", label: "backdrop_look" },
        { value: "color", label: "backdrop_color" },
        { value: "gradient", label: "backdrop_gradient" },
        { value: "image", label: "backdrop_image" },
      ],
    },
    default: "",
    read: (env) => backdropOf(env).kind ?? "",
    write: (env, v) => withPart(env.building!, "backdrop", { kind: (v || null) as Backdrop["kind"] }),
  } as Setting<string>,
  backdropColour("backdrop.color", "color", "backdrop_color", "#0b1426", ["color"]),
  backdropColour("backdrop.top", "color", "backdrop_top", "#0b1426", ["gradient"]),
  backdropColour("backdrop.bottom", "color2", "backdrop_bottom", "#03060c", ["gradient"]),
  {
    id: "backdrop.image",
    section: "scene",
    card: "backdrop",
    scope: "house",
    permission: "editor",
    label: "backdrop_image_url",
    keywords: ["background", "picture", "photo", "local"],
    control: { kind: "text", placeholder: "st_backdrop_placeholder", maxLength: 500 },
    default: "",
    visible: (env) => backdropOf(env).kind === "image",
    read: (env) => backdropOf(env).image ?? "",
    write: (env, v) => withPart(env.building!, "backdrop", { image: v.trim() ? (backdropImage(v) ?? v.trim()) : null }),
  } as Setting<string>,
  {
    id: "backdrop.dim",
    section: "scene",
    card: "backdrop",
    scope: "house",
    permission: "editor",
    label: "backdrop_dim",
    keywords: ["background", "darken", "picture"],
    control: { kind: "range", min: 0, max: 90, step: 5 },
    default: 45,
    visible: (env) => backdropOf(env).kind === "image",
    read: (env) => Math.round((backdropOf(env).dim ?? 0.45) * 100),
    write: (env, v) => withPart(env.building!, "backdrop", { dim: clamp(v, 0, 90) / 100 }),
  } as Setting<number>,
  {
    id: "terrain.level",
    section: "scene",
    card: "backdrop",
    scope: "house",
    permission: "editor",
    label: "terrain_level",
    hint: "terrain_hint",
    keywords: ["ground", "cellar", "basement", "hill"],
    control: { kind: "number", step: 0.05, min: -20, max: 20, unit: "m", clearable: true, length: true },
    default: -0.2,
    read: (env) => env.building?.settings.terrain?.level ?? null,
    write: (env, v) => withPart(env.building!, "terrain", { level: v === null ? null : clamp(v, -20, 20) }),
  } as Setting<number | null>,
  {
    id: "terrain.earth",
    section: "scene",
    card: "backdrop",
    scope: "house",
    permission: "editor",
    label: "terrain_earth",
    hint: "terrain_earth_hint",
    keywords: ["ground", "cellar", "basement", "earth"],
    control: { kind: "switch" },
    default: true,
    read: (env) => env.building?.settings.terrain?.earth !== false,
    write: (env, v) => withPart(env.building!, "terrain", { earth: v }),
  } as Setting<boolean>,
];

const householdOf = (env: SettingsEnv) => env.building?.settings.household ?? {};
/** An hour of the bins' glow (Household): 0–24 in half hours, for every bin. */
const binHour = (id: "bin_from" | "bin_until", label: TextKey, def: number, hint?: TextKey): Setting<number> => ({
  id: `household.${id}`,
  section: "household",
  card: "bins",
  scope: "house",
  permission: "editor",
  label,
  hint,
  keywords: ["bin", "waste", "rubbish", "glow", "pickup"],
  control: { kind: "number", step: 0.5, min: 0, max: 24, unit: "h" },
  default: def,
  read: (env) => householdOf(env)[id] ?? def,
  write: (env, v) => withPart(env.building!, "household", { [id]: clamp(v, 0, 24) }),
});

const HOUSEHOLD: Setting[] = [
  binHour("bin_from", "st_bin_from", 14, "bin_hint"),
  binHour("bin_until", "st_bin_until", 12),
  {
    id: "household.bin_next_only",
    section: "household",
    card: "bins",
    scope: "house",
    permission: "editor",
    label: "bin_next_only",
    keywords: ["bin", "tag", "label", "pickup"],
    control: { kind: "switch" },
    default: false,
    read: (env) => !!householdOf(env).bin_next_only,
    write: (env, v) => withPart(env.building!, "household", { bin_next_only: v || null }),
  } as Setting<boolean>,
  {
    id: "household.bin_days",
    section: "household",
    card: "bins",
    scope: "house",
    permission: "editor",
    label: "bin_days",
    hint: "bin_tags_hint",
    keywords: ["bin", "tag", "days", "before"],
    control: { kind: "number", step: 1, min: 0, max: 60, clearable: true },
    default: null,
    read: (env) => householdOf(env).bin_days ?? null,
    write: (env, v) => withPart(env.building!, "household", { bin_days: v === null ? null : clamp(Math.round(v), 0, 60) }),
  } as Setting<number | null>,
  {
    id: "household.kerb",
    section: "household",
    card: "bins",
    scope: "house",
    permission: "editor",
    label: "bin_kerb",
    hint: "st_kerb_note",
    keywords: ["bin", "kerb", "street", "calendar"],
    control: { kind: "action", button: "st_open_editor", action: "editor" },
    default: null,
    read: () => null,
  },
  {
    id: "household.notes",
    section: "household",
    card: "pinboard",
    scope: "house",
    permission: "editor",
    label: "hh_notes",
    hint: "hh_notes_hint",
    keywords: ["pinboard", "notes", "text", "household"],
    control: { kind: "entity", filter: (id) => /^(input_text|text|sensor)\./.test(id) },
    default: null,
    read: (env) => env.building?.settings.household?.notes ?? null,
    write: (env, v) => withPart(env.building!, "household", { notes: v }),
  } as Setting<string | null>,
];

/** A list the editor draws (its own logic), shown as one row. */
const embedded = (id: string, section: SectionId, card: string, topic: EmbedTopic, label: TextKey, hint: TextKey | undefined, keywords: string[], permission: Permission = "editor", read: (env: SettingsEnv) => unknown = () => null): Setting => ({
  id,
  section,
  card,
  scope: "house",
  permission,
  label,
  hint,
  keywords,
  control: { kind: "embed", topic },
  default: null,
  read,
});

const FAVOURITES: Setting[] = [
  embedded("favorites", "favourites", "favourites", "favorites", "favorites", undefined, ["star", "scene", "script", "central menu"], "editor", (env) => env.building?.settings.favorites ?? []),
  embedded("buttons", "favourites", "buttons", "own_buttons", "own_buttons", "own_buttons_hint", ["button", "navigate", "dashboard", "popup", "browser_mod"], "editor", (env) => env.building?.settings.buttons ?? []),
  embedded("media_presets", "favourites", "presets", "media_presets", "presets", "presets_hint", ["radio", "spotify", "playlist", "speaker", "station"], "editor", (env) => env.building?.settings.media_presets ?? []),
];

/** Assist's pipelines, for this device's choice (loaded when the Voice section opens). */
interface Pipelines {
  pipelines?: { id: string; name: string; stt_engine: string | null }[];
}

const VOICE: Setting[] = [
  deviceSwitch("voice_here", "voice", "voice", "voice", false, "st_voice_here", "voice_hint", ["microphone", "speak", "assist"]),
  {
    id: "screen_name",
    section: "voice",
    card: "voice",
    scope: "device",
    permission: "everyone",
    label: "screen_name",
    hint: "screen_name_hint",
    keywords: ["assist", "screen", "name", "home_3d.ask"],
    control: { kind: "text", placeholder: "screen_name_placeholder", maxLength: 60 },
    default: "",
    prefKeys: ["screen"],
    read: (env) => env.prefs.get("screen") ?? "",
    write: (env, v) => env.prefs.set("screen", v.trim() || null),
  } as Setting<string>,
  {
    id: "voice_pipeline",
    section: "voice",
    card: "voice",
    scope: "device",
    permission: "everyone",
    label: "voice_pipeline",
    keywords: ["assist", "pipeline", "speech to text"],
    loader: "voice_pipelines",
    control: {
      kind: "select",
      options: (env) => [
        { value: "", label: "voice_pipeline_preferred" },
        ...((env.remote?.voice_pipelines as Pipelines | undefined)?.pipelines ?? []).map((p) => ({ value: p.id, label: p.name, raw: true })),
        // a choice whose pipeline is gone still shows, so the select doesn't jump
        ...(env.prefs.get("voicePipeline") && !((env.remote?.voice_pipelines as Pipelines | undefined)?.pipelines ?? []).some((p) => p.id === env.prefs.get("voicePipeline"))
          ? [{ value: env.prefs.get("voicePipeline")!, label: env.prefs.get("voicePipeline")!, raw: true }]
          : []),
      ],
    },
    default: "",
    prefKeys: ["voicePipeline"],
    read: (env) => env.prefs.get("voicePipeline") ?? "",
    write: (env, v) => env.prefs.set("voicePipeline", v || null),
  } as Setting<string>,
  {
    id: "voice_sentences",
    section: "voice",
    card: "voice",
    scope: "house",
    permission: "ha_admin",
    label: "voice_sentences",
    hint: "voice_sentences_hint",
    keywords: ["assist", "sentences", "custom_sentences"],
    loader: "voice_sentences",
    control: {
      kind: "select",
      options: () => (["off", "distinct", "all"] as const).map((m) => ({ value: m, label: `voice_sentences_${m}` })),
    },
    default: "off",
    read: (env) => (env.remote?.voice_sentences as { sentences?: SentenceMode } | undefined)?.sentences ?? "off",
    // kept by Home Assistant (a sentence file), not in the plan
    write: (env, v) => (env.hass ? setVoiceSentences(env.hass, v as SentenceMode) : undefined),
  } as Setting<string>,
  {
    id: "mic_test",
    section: "voice",
    card: "voice",
    scope: "device",
    permission: "everyone",
    label: "st_mic_test",
    hint: "director_mic_hint",
    keywords: ["microphone", "test", "https"],
    control: { kind: "action", button: "director_mic_test", action: "mic_probe" },
    default: null,
    read: () => null,
  },
];

/** What the page loads for the settings kept outside the plan (by a setting's `loader`). */
export const LOADERS: Record<string, (hass: HomeAssistant) => Promise<unknown>> = {
  voice_sentences: (hass) => getVoiceSettings(hass),
  voice_pipelines: (hass) => hass.callWS<Pipelines>({ type: "assist_pipeline/pipeline/list" }),
  pack_updates: (hass) => fetchPackUpdates(hass),
};

/** The pack update schedule (#26) as the backend last sent it (its defaults until then). */
const UPDATE_DEFAULTS: PackUpdateSettings = { auto_update: false, frequency: "daily", time: "04:00", weekday: 0 };
const updatesOf = (env: SettingsEnv): PackUpdateSettings => ({ ...UPDATE_DEFAULTS, ...((env.remote?.pack_updates as PackUpdateStatus | undefined)?.settings ?? {}) });
/** One value of the schedule; kept by Home Assistant (.storage), not in the plan. */
const updateSetting = <K extends keyof PackUpdateSettings>(key: K, extra: Omit<Setting<PackUpdateSettings[K]>, "id" | "section" | "card" | "scope" | "permission" | "default" | "read" | "write" | "loader">): Setting<PackUpdateSettings[K]> => ({
  id: `pack_updates.${key}`,
  section: "packs",
  card: "updates",
  scope: "house",
  permission: "editor",
  default: UPDATE_DEFAULTS[key],
  loader: "pack_updates",
  read: (env) => updatesOf(env)[key],
  write: (env, v) => (env.hass ? setPackUpdateSettings(env.hass, { [key]: v }) : undefined),
  ...extra,
});

const PACKS: Setting[] = [
  updateSetting("frequency", {
    label: "upd_frequency",
    keywords: ["packs", "updates", "github", "release", "schedule"],
    control: { kind: "segment", options: (["off", "daily", "weekly", "monthly"] as const).map((f) => ({ value: f, label: `upd_freq_${f}` })) },
  }) as Setting,
  {
    id: "pack_updates.weekday",
    section: "packs",
    card: "updates",
    scope: "house",
    permission: "editor",
    label: "upd_weekday",
    hint: "st_upd_weekday_hint",
    keywords: ["packs", "updates", "day"],
    loader: "pack_updates",
    control: { kind: "select", options: () => [0, 1, 2, 3, 4, 5, 6].map((d) => ({ value: String(d), label: `upd_day_${d}` })) },
    default: "0",
    visible: (env) => updatesOf(env).frequency === "weekly",
    read: (env) => String(updatesOf(env).weekday),
    write: (env, v) => (env.hass ? setPackUpdateSettings(env.hass, { weekday: Number(v) }) : undefined),
  } as Setting<string>,
  updateSetting("time", {
    label: "upd_time",
    keywords: ["packs", "updates", "time", "night"],
    control: { kind: "time" },
    visible: (env) => updatesOf(env).frequency !== "off",
  }) as Setting,
  updateSetting("auto_update", { label: "upd_auto", keywords: ["packs", "updates", "automatic", "placed items"], control: { kind: "switch" } }) as Setting,
  {
    id: "pack_updates.open",
    section: "packs",
    card: "updates",
    scope: "house",
    permission: "editor",
    label: "upd_title",
    hint: "st_upd_open",
    keywords: ["packs", "install", "github", "pin", "roll back"],
    control: { kind: "action", button: "st_upd_open_btn", action: "extensions" },
    default: null,
    read: () => null,
  },
];

const ACCESS: Setting[] = [
  embedded("editors", "access", "editors", "editors", "editors_title", undefined, ["edit", "permission", "users", "admin"], "ha_admin"),
  embedded("tablet_users", "access", "tablets", "tablet_users", "tablet_users", "st_tablet_users_hint", ["kiosk", "wall", "locked", "tablet"], "ha_admin", (env) => env.building?.settings.tablet_users ?? []),
  {
    id: "tablet_idle",
    section: "access",
    card: "tablets",
    scope: "house",
    permission: "editor",
    label: "tablet_idle",
    keywords: ["kiosk", "idle", "return", "whole house"],
    control: { kind: "number", step: 10, min: 0, max: 86400, unit: "s", clearable: true },
    default: TABLET_IDLE_DEFAULT,
    read: (env) => settingsOf(env).tablet_idle ?? null,
    write: (env, v) => withSettings(env.building!, { tablet_idle: v === null ? null : clamp(Math.round(v), 0, 86400) }),
  } as Setting<number | null>,
];

const ENERGY: Setting[] = [
  embedded("energy.balance", "energy", "meters", "energy_balance", "energy_balance", "energy_balance_hint", ["grid", "solar", "battery", "tariff", "cheap rate", "off-peak", "gas", "water", "meter", "sensor", "import"], "editor", (env) => env.building?.energy ?? null),
  {
    ...embedded("hologram", "energy", "hologram", "hologram", "holo_settings", "holo_settings_hint", ["hologram", "solar", "cards", "energy pro"], "editor", (env) => env.building?.settings.roof.hologram ?? null),
  },
];

const BACKUP: Setting[] = [embedded("backup", "backup", "backup", "backup", "backup", undefined, ["restore", "export", "import", "file", "history"])];

const opts = (pairs: [string, TextKey][]): Option[] => pairs.map(([value, label]) => ({ value, label }));

/** This device's look and what its 3D view shows (the ⚙ View menu and the Show chip keep the quick ones). */
const LOOK: Setting[] = [
  deviceChoice("theme", "look", "look", "theme", ["theme", "neon", "blueprint", "day", "realistic", "auto"], "theme", "theme", opts([["theme", "theme_theme"], ["neon", "theme_neon"], ["blueprint", "theme_blueprint"], ["day", "theme_day"], ["realistic", "theme_realistic"], ["auto", "theme_auto"]]), undefined, ["dark", "light", "day", "night", "neon", "theme", "colour scheme"], "select"),
  {
    id: "accent",
    section: "look",
    card: "look",
    scope: "device",
    permission: "everyone",
    label: "accent",
    hint: "accent_hint",
    keywords: ["colour", "color", "cyan", "highlight"],
    control: { kind: "colour", fallback: "#37e0ff", clearable: true },
    default: null,
    prefKeys: ["accent"],
    read: (env) => {
      const v = env.prefs.get("accent");
      return v && /^#[0-9a-f]{6}$/i.test(v) ? v : null;
    },
    write: (env, v) => env.prefs.set("accent", v),
  } as Setting<string | null>,
  deviceChoice("quality", "look", "look", "quality", ["auto", "low", "high"], "auto", "quality", opts([["auto", "quality_auto"], ["low", "quality_low"], ["high", "quality_high"]]), undefined, ["performance", "tablet", "speed", "graphics"]),
  deviceChoice("clock", "look", "look", "clock", ["off", "tl", "tr", "bl", "br"], "off", "st_clock", opts([["off", "st_clock_off"], ["tl", "st_clock_tl"], ["tr", "st_clock_tr"], ["bl", "st_clock_bl"], ["br", "st_clock_br"]]), undefined, ["time", "clock", "corner"], "select"),
  deviceChoice("markers", "look", "markers", "markers", ["none", "room", "important", "all"], "important", "markers", opts([["none", "markers_none"], ["room", "markers_room"], ["important", "markers_important"], ["all", "markers_all"]]), undefined, ["pins", "icons", "symbols", "devices"]),
  deviceChoice("pinSize", "look", "markers", "pinSize", ["small", "normal", "large"], "normal", "pin_size", opts([["small", "pin_size_small"], ["normal", "pin_size_normal"], ["large", "pin_size_large"]]), undefined, ["pins", "icons", "symbols", "size"]),
  deviceChoice("controls", "look", "markers", "controls", ["left", "right"], "left", "controls_side", opts([["left", "st_controls_left"], ["right", "st_controls_right"]]), undefined, ["left", "right", "star", "search"]),
  deviceSwitch("keep_view", "look", "markers", "keep_view", false, "keep_view", "keep_view_hint", ["camera", "floor"]),
  deviceSwitch("angle_lock", "look", "markers", "angle_lock", false, "angle_lock", "angle_lock_hint", ["lock", "turn", "rotate"]),
  deviceSwitch("nav_wrap", "look", "markers", "nav_wrap", false, "st_nav_wrap", undefined, ["floors", "rooms", "bar", "chips"]),
  deviceSwitch("plan2d", "look", "show", "plan2d", false, "st_view_2d", undefined, ["2d", "plan", "flat"]),
  deviceChoice("walls", "look", "show", "walls", ["auto", "cut"], "auto", "st_walls", opts([["auto", "walls_auto"], ["cut", "walls_cut"]]), undefined, ["walls", "cut", "tall"]),
  deviceChoice("explode", "look", "show", "explode", ["1", "0"], "1", "st_floors", opts([["1", "floors_apart"], ["0", "floors_stacked"]]), undefined, ["floors", "apart", "stacked", "explode"]),
  deviceChoice("floor_stack", "look", "show", "floor_stack", ["dim", "stacked", "single"], "dim", "st_floor_stack", opts([["dim", "floor_stack_short_dim"], ["stacked", "floor_stack_short_stacked"], ["single", "floor_stack_short_single"]]), undefined, ["floors", "below", "dimmed"]),
  deviceSwitch("roof", "look", "show", "roof", false, "st_keep_roof", "roof_keep_hint", ["roof", "zoom"]),
  deviceChoice("heat", "look", "show", "heat", ["none", "temperature", "humidity", "co2", "values"], "none", "st_heat", opts([["none", "heat_off"], ["temperature", "heat_short_temperature"], ["humidity", "heat_short_humidity"], ["co2", "heat_short_co2"], ["values", "heat_short_values"]]), undefined, ["heatmap", "temperature", "humidity", "co2"]),
  deviceSwitch("room_names", "look", "show", "room_names", true, "st_room_names", undefined, ["labels", "names", "rooms"]),
  deviceSwitch("trail", "look", "show", "trail", false, "st_trail", "trail_hint", ["motion", "trail", "history"]),
  deviceSwitch("weather", "look", "show", "weather", true, "st_weather", "weather_hint", ["rain", "snow", "weather"]),
];

const ADVANCED: Setting[] = [
  deviceSwitch("stats", "advanced", "advanced", "stats", false, "st_fps", "fps_title", ["fps", "performance", "frames", "speed"]),
  {
    id: "reset_device",
    section: "advanced",
    card: "advanced",
    scope: "device",
    permission: "everyone",
    label: "st_reset_device",
    hint: "st_reset_device_hint",
    keywords: ["reset", "defaults", "preferences", "browser"],
    control: { kind: "action", button: "st_reset", action: "reset_device" },
    default: null,
    read: () => null,
  },
  houseSwitch("demo", "advanced", "advanced", "demo", false, "demo_states", "st_demo_hint", ["sample", "screenshot", "fake"]),
  {
    id: "modules",
    section: "advanced",
    card: "advanced",
    scope: "house",
    permission: "editor",
    label: "st_modules",
    hint: "st_modules_note",
    keywords: ["module", "pack", "plugin", "sentences", "speakers"],
    control: { kind: "note" },
    default: null,
    read: () => null,
  },
  {
    id: "locate",
    section: "advanced",
    card: "people",
    scope: "house",
    permission: "ha_admin",
    label: "st_locate",
    hint: "st_locate_hint",
    keywords: ["locating", "people", "presence", "bluetooth", "position"],
    control: { kind: "action", button: "st_open", action: "locate" },
    default: null,
    visible: () => released("locate"),
    read: () => null,
  },
  {
    id: "person_look",
    section: "advanced",
    card: "people",
    scope: "house",
    permission: "editor",
    label: "st_person_look",
    keywords: ["people", "person", "figure", "pin", "located"],
    control: {
      kind: "segment",
      options: [
        { value: "figure", label: "st_person_figure" },
        { value: "pin", label: "st_person_pin" },
        { value: "off", label: "st_person_off" },
      ],
    },
    default: "figure",
    read: (env) => settingsOf(env).person_look ?? "figure",
    write: (env, v) => withSettings(env.building!, { person_look: v === "pin" || v === "off" ? v : null }),
  } as Setting<string>,
  // presence sensors per person: built, not released yet (flags.ts SHOW_PRESENCE)
  { ...embedded("presence", "advanced", "people", "presence", "presence", "presence_hint", ["presence", "espresense", "bermuda", "room sensor"]), visible: () => SHOW_PRESENCE },
];

/** Where the dashboard cards' options are (they stay in each card's editor, as decided on #139). */
const CARDS: Setting[] = [
  {
    id: "dashboard_cards",
    section: "look",
    card: "cards",
    scope: "device",
    permission: "everyone",
    label: "st_cards_title",
    hint: "st_cards_note",
    keywords: ["card", "dashboard", "lovelace", "options"],
    control: { kind: "note" },
    default: null,
    read: () => null,
  },
];

/** Every setting, in the order the page shows them. */
export const SETTINGS: Setting[] = [...GENERAL, ...SCENE, ...ENERGY, ...FUN, ...WARNINGS, ...EFFECTS, ...CAMERAS, ...HOUSEHOLD, ...FAVOURITES, ...LOOK, ...CARDS, ...VOICE, ...ACCESS, ...PACKS, ...BACKUP, ...ADVANCED] as Setting[];

// ---------------------------------------------------------------------------------------------------- lengths

/** The unit the plan's lengths show in: its own setting, else Home Assistant's unit system (#117). */
export function planUnit(env: SettingsEnv): LengthUnit {
  return lengthUnit(env.hass, env.building?.settings.units);
}

/** A stored length (metres) as its field shows it: feet and inches when imperial, else the plain number. */
export function shownLength(env: SettingsEnv, metres: number): string {
  return planUnit(env) === "imperial" ? formatImperial(metres) : String(Math.round(metres * 1000) / 1000);
}

/** What was typed into a length field, in metres (8' 2", 98in, 2.5m …; null: not a length). */
export function typedLength(env: SettingsEnv, text: string): number | null {
  return parseLength(text, planUnit(env));
}

/** A length row's label in the unit shown ("Grid (m)" becomes "Grid (ft)"). */
export function lengthLabel(env: SettingsEnv, label: string): string {
  return unitLabel(label, planUnit(env));
}

// ---------------------------------------------------------------------------------------------------- queries

/**
 * Every preference this device keeps (`home3d.<key>`): the device rows' keys, and the view's own toggles that have no
 * row (the eye's clean view). "Reset this device's preferences" removes them.
 */
export function deviceKeys(): string[] {
  return [...new Set([...SETTINGS.flatMap((s) => s.prefKeys ?? []), "clean"])];
}

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
