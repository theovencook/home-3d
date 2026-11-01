// This device's look and screen rows of the settings list (#139), and the one View panel on the 3D view that shows the
// quick ones (#247, the menus redesign #219). The rows are registry.ts's own (SETTINGS takes LOOK and SCREEN from
// here), so the View panel and the Settings page read and write the very same entries and can never show different
// values. A file of its own so the View panel's lazy chunk carries these rows without the whole registry. No Lit, no
// texts table: labels are text keys.

import { ACCENT_DEFAULT } from "../colour-reset.ts";
import { shownLook } from "../ha-theme.ts";
import { parsePinZoom, PLAN_PIN_ZOOM_DEFAULT, PLAN_PIN_ZOOM_KEY, PLAN_PIN_ZOOM_MAX } from "../plan-pins.ts";
import type { Option, SectionId, Setting, SettingsEnv, TextKey } from "./registry.ts";

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

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

const opts = (pairs: [string, TextKey][]): Option[] => pairs.map(([value, label]) => ({ value, label }));

/**
 * Appearance as one grouped drop-down (#247): Automatic (follow Home Assistant's theme, follow the sun, each naming the
 * look it shows now) and Fixed (the four looks). The stored values are the old ones ("theme", "auto", "neon" …).
 */
export function appearanceOptions(env: Pick<SettingsEnv, "hass">): Option[] {
  const auto = (value: "theme" | "auto", label: TextKey): Option => ({ value, label, group: "theme_group_auto", now: `theme_${shownLook(value, env.hass)}` });
  const fixed = (value: string): Option => ({ value, label: `theme_${value}`, group: "theme_group_fixed" });
  return [auto("theme", "follow_ha"), auto("auto", "follow_sun"), ...["neon", "blueprint", "day", "realistic"].map(fixed)];
}

/** What a choice reads: its label, and the look it shows now for a "follow" choice. */
export function optionText(o: Option, t: (key: TextKey, vars?: Record<string, string | number>) => string): string {
  const label = o.raw ? o.label : t(o.label);
  return o.now ? `${label} (${t("follow_now", { look: t(o.now) })})` : label;
}

/** A drop-down's choices by group heading, in order (one untitled group when no choice has a heading). */
export function optionGroups(options: Option[]): { group: TextKey | null; options: Option[] }[] {
  const out: { group: TextKey | null; options: Option[] }[] = [];
  for (const o of options) {
    const group = o.group ?? null;
    const last = out[out.length - 1];
    if (last && last.group === group) last.options.push(o);
    else out.push({ group, options: [o] });
  }
  return out;
}

/** This device's look and what its 3D view shows (the View panel shows the quick ones, #247). */
export const LOOK: Setting[] = [
  {
    ...deviceChoice("theme", "look", "look", "theme", ["theme", "neon", "blueprint", "day", "realistic", "auto"], "theme", "theme", [], "theme_hint", ["dark", "light", "day", "night", "neon", "theme", "colour scheme", "sun", "automatic"], "select"),
    control: { kind: "select", options: appearanceOptions },
  },
  {
    id: "accent",
    section: "look",
    card: "look",
    scope: "device",
    permission: "everyone",
    label: "accent",
    hint: "accent_hint",
    keywords: ["colour", "color", "cyan", "highlight"],
    control: { kind: "colour", fallback: ACCENT_DEFAULT, clearable: true },
    default: null,
    prefKeys: ["accent"],
    read: (env) => {
      const v = env.prefs.get("accent");
      return v && /^#[0-9a-f]{6}$/i.test(v) ? v : null;
    },
    write: (env, v) => env.prefs.set("accent", v),
  } as Setting<string | null>,
  deviceChoice("clock", "look", "look", "clock", ["off", "tl", "tr", "bl", "br"], "off", "st_clock", opts([["off", "st_clock_off"], ["tl", "st_clock_tl"], ["tr", "st_clock_tr"], ["bl", "st_clock_bl"], ["br", "st_clock_br"]]), undefined, ["time", "clock", "corner"], "select"),
  deviceChoice("clock_hours", "look", "look", "clock_hours", ["auto", "12", "24"], "auto", "st_clock_hours", opts([["auto", "clock_hours_auto"], ["12", "clock_hours_12"], ["24", "clock_hours_24"]]), undefined, ["time", "clock", "12", "24", "am", "pm"]),
  deviceChoice("clock_style", "look", "look", "clock_style", ["digital", "analogue"], "digital", "st_clock_face", opts([["digital", "clock_digital"], ["analogue", "clock_analogue"]]), undefined, ["time", "clock", "dial", "hands", "face"]),
  deviceSwitch("clock_seconds", "look", "look", "clock_seconds", false, "st_clock_seconds", undefined, ["time", "clock", "seconds"]),
  deviceSwitch("clock_date", "look", "look", "clock_date", true, "st_clock_date", undefined, ["time", "clock", "date", "day"]),
  deviceChoice("markers", "look", "markers", "markers", ["none", "room", "important", "all"], "important", "markers", opts([["none", "markers_none"], ["room", "markers_room"], ["important", "markers_important"], ["all", "markers_all"]]), "markers_important_hint", ["pins", "icons", "symbols", "devices", "markers"], "select"),
  deviceChoice("pinSize", "look", "markers", "pinSize", ["small", "normal", "large"], "normal", "pin_size", opts([["small", "pin_size_small"], ["normal", "pin_size_normal"], ["large", "pin_size_large"]]), undefined, ["pins", "icons", "symbols", "size"]),
  {
    id: "plan_pin_zoom",
    section: "look",
    card: "markers",
    scope: "device",
    permission: "everyone",
    label: "st_plan_pin_zoom",
    hint: "st_plan_pin_zoom_hint",
    keywords: ["markers", "pins", "zoom", "phone", "plan", "overlap", "hide"],
    control: { kind: "number", step: 5, min: 0, max: PLAN_PIN_ZOOM_MAX, unit: "px/m", clearable: true },
    default: PLAN_PIN_ZOOM_DEFAULT,
    prefKeys: [PLAN_PIN_ZOOM_KEY],
    read: (env) => parsePinZoom(env.prefs.get(PLAN_PIN_ZOOM_KEY)),
    write: (env, v) => env.prefs.set(PLAN_PIN_ZOOM_KEY, v === null ? null : String(Math.round(clamp(v, 0, PLAN_PIN_ZOOM_MAX)))),
  } as Setting<number | null>,
  deviceSwitch("plan2d", "look", "show", "plan2d", false, "st_view_2d", undefined, ["2d", "plan", "flat"]),
  deviceChoice("walls", "look", "show", "walls", ["auto", "cut"], "auto", "st_walls", opts([["auto", "walls_auto"], ["cut", "walls_cut"]]), undefined, ["walls", "cut", "tall"]),
  deviceChoice("explode", "look", "show", "explode", ["1", "0"], "1", "st_floors", opts([["1", "floors_apart"], ["0", "floors_stacked"]]), undefined, ["floors", "apart", "stacked", "explode"]),
  deviceChoice("floor_stack", "look", "show", "floor_stack", ["dim", "stacked", "single"], "dim", "st_floor_stack", opts([["dim", "floor_stack_short_dim"], ["stacked", "floor_stack_short_stacked"], ["single", "floor_stack_short_single"]]), undefined, ["floors", "below", "dimmed"]),
  deviceSwitch("roof", "look", "show", "roof", false, "st_keep_roof", "roof_keep_hint", ["roof", "zoom"]),
  deviceChoice("heat", "look", "show", "heat", ["none", "temperature", "humidity", "co2", "values"], "none", "st_heat", opts([["none", "heat_nothing"], ["temperature", "heat_temperature"], ["humidity", "heat_humidity"], ["co2", "heat_co2"], ["values", "heat_values"]]), undefined, ["heatmap", "temperature", "humidity", "co2", "colour"], "select"),
  deviceSwitch("room_names", "look", "show", "room_names", true, "st_room_names", undefined, ["labels", "names", "rooms"]),
  deviceSwitch("trail", "look", "show", "trail", false, "st_trail", "trail_hint", ["motion", "trail", "history"]),
  deviceSwitch("weather", "look", "show", "weather", true, "st_weather", "weather_hint", ["rain", "snow", "weather"]),
];

/**
 * Screen and controls (#246): what the old View menu's unlabelled Controls row (◧ ◨ ⌖ 🔒 FPS), Quality and the floor
 * bar's wrap toggle set, each with its full name. Same stored keys as before, so nobody loses a choice.
 */
export const SCREEN: Setting[] = [
  deviceChoice("quality", "screen", "screen", "quality", ["auto", "low", "high"], "auto", "quality", opts([["auto", "quality_auto"], ["low", "st_quality_low"], ["high", "quality_high"]]), "card_quality_hint", ["performance", "tablet", "speed", "graphics", "slow"]),
  deviceSwitch("stats", "screen", "screen", "stats", false, "st_fps", "fps_title", ["fps", "performance", "frames", "speed"]),
  deviceChoice("controls", "screen", "controls", "controls", ["left", "right"], "left", "controls_side", opts([["left", "st_controls_left"], ["right", "st_controls_right"]]), "st_controls_side_hint", ["left", "right", "star", "search", "eye", "buttons"]),
  deviceSwitch("keep_view", "screen", "controls", "keep_view", false, "keep_view", "keep_view_hint", ["camera", "floor"]),
  deviceSwitch("angle_lock", "screen", "controls", "angle_lock", false, "angle_lock", "angle_lock_hint", ["lock", "turn", "rotate", "angle"]),
  deviceSwitch("nav_wrap", "screen", "controls", "nav_wrap", false, "st_nav_wrap", undefined, ["floors", "rooms", "bar", "chips"]),
];

// ---------------------------------------------------------------------------------------------------- the View panel

/** Where the 3D view is: what the View panel offers depends on it (as the old Show menu did). */
export interface ViewContext {
  /** Floors with rooms. */
  floors: number;
  /** One floor is open (not the whole house). */
  floorOpen: boolean;
  /** The house has a roof. */
  roof: boolean;
  /** The 2D plan shows instead of the 3D view. */
  plan2d: boolean;
  /** A locked wall tablet (#92): only what the 3D shows (and 3D or 2D) is offered, as before. */
  kiosk: boolean;
}

/** A row of the View panel: a setting of LOOK by its id, or the camera wall (a switch of the view, not a stored choice). */
export interface ViewRow {
  id: string;
  /** Shown but not usable here (a whole-house row while one floor is open). */
  disabled?: boolean;
}

export type ViewSectionId = "look" | "show" | "markers" | "clock";

export interface ViewSection {
  id: ViewSectionId;
  title: TextKey;
  rows: ViewRow[];
  /** A sentence under the rows. */
  hint?: TextKey;
  /** Open when the panel opens as a phone's bottom sheet; the others start folded with a one-line summary. */
  openOnPhone: boolean;
}

/** The camera wall row: a switch of the 3D view itself (it opens the camera wall), not a stored setting. */
export const CAMERA_WALL = "camera_wall";

/** The View panel's sections and rows for where the 3D view is (#247). */
export function viewSections(ctx: ViewContext): ViewSection[] {
  const several = ctx.floors > 1;
  const show: ViewRow[] = [];
  if (!ctx.plan2d) show.push({ id: "walls" });
  if (several && !ctx.plan2d) show.push({ id: "explode", disabled: ctx.floorOpen });
  if (several && ctx.floorOpen && !ctx.plan2d) show.push({ id: "floor_stack" });
  show.push({ id: "heat" }, { id: "room_names" });
  if (ctx.roof && !ctx.plan2d) show.push({ id: "roof", disabled: ctx.floorOpen });
  show.push({ id: "trail" }, { id: "weather" }, { id: CAMERA_WALL });
  const shows: ViewSection = { id: "show", title: "st_card_show", rows: show, hint: show.some((r) => r.disabled) ? "pick_all_floors" : undefined, openOnPhone: false };
  if (ctx.kiosk) return [{ ...shows, openOnPhone: true }];
  return [
    { id: "look", title: "theme", rows: [{ id: "theme" }, { id: "accent" }], openOnPhone: true },
    shows,
    { id: "markers", title: "markers", rows: [{ id: "markers" }, { id: "pinSize" }], hint: "markers_important_hint", openOnPhone: true },
    { id: "clock", title: "st_clock", rows: [{ id: "clock" }], openOnPhone: false },
  ];
}

/** A LOOK or SCREEN row by its id. */
export function viewSetting(id: string): Setting | undefined {
  return LOOK.find((s) => s.id === id) ?? SCREEN.find((s) => s.id === id);
}
