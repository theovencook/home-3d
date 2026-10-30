// The live room effects' settings (#10), shared by the ⚙ menu over the 3D view and the editor's house settings:
// how long motion lights a room and the temperatures radiators and cylinders shade between (°C stored, shown in
// Home Assistant's unit). Only editors change them.

import { html } from "lit";
import { fromCelsius, tempUnit, toCelsius } from "../devices.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { EffectSettings } from "../model.ts";
import { EFFECT_DEFAULTS } from "../room-effects.ts";
import type { HomeAssistant } from "../types.ts";

type Key = keyof typeof EFFECT_DEFAULTS;

const TEMPS: [Key, I18nKey][] = [
  ["radiator_cold", "effects_radiator_cold"],
  ["radiator_hot", "effects_radiator_hot"],
  ["tank_cold", "effects_tank_cold"],
  ["tank_hot", "effects_tank_hot"],
];

/** The effect settings as fields; `set` gets the whole new effects object (null when all are at their defaults). */
export function effectFields(hass: HomeAssistant, effects: EffectSettings | null | undefined, disabled: boolean, set: (next: EffectSettings | null) => void, cls = "fp3d-set-field") {
  const own = effects ?? {};
  const change = (key: Key, v: number | null) => {
    const next: EffectSettings = { ...own, [key]: v };
    for (const k of Object.keys(next) as Key[]) if (next[k] === null || next[k] === undefined) delete next[k];
    set(Object.keys(next).length ? next : null);
  };
  const unit = tempUnit(hass);
  const num = (key: Key, label: string, shown: (v: number) => number, stored: (v: number) => number, step: number) =>
    html`<label class=${cls}
      >${label}
      <input
        type="number"
        step=${step}
        placeholder=${String(Math.round(shown(EFFECT_DEFAULTS[key])))}
        .value=${typeof own[key] === "number" ? String(Math.round(shown(own[key] as number) * 10) / 10) : ""}
        ?disabled=${disabled}
        @change=${(e: Event) => {
          const raw = (e.target as HTMLInputElement).value.trim();
          const v = Number(raw);
          change(key, raw === "" || !Number.isFinite(v) ? null : stored(v));
        }}
    /></label>`;
  const same = (v: number) => v;
  return html`${num("motion_seconds", translate(hass, "effects_motion_seconds"), same, (v) => Math.max(0, Math.min(3600, Math.round(v))), 5)}
  ${num("camera_seconds", translate(hass, "effects_camera_seconds"), same, (v) => Math.max(0, Math.min(3600, Math.round(v))), 5)}
  ${TEMPS.map(([key, label]) => num(key, `${translate(hass, label)} (${unit})`, (v) => fromCelsius(hass, v), (v) => Math.max(-20, Math.min(100, toCelsius(v, unit))), 1))}`;
}
