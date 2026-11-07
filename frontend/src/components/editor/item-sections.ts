// The item panel's frame (#396, #397): the header (name, kind and room, live state, Lock position and the "⋯" menu),
// the Position section, the folds with their summaries and badges, the "i" help buttons, and the car's main section.
// The fields inside come from item-form.ts; which sections and folds an item gets comes from its kind profile
// (item-profile.ts).

import { html, nothing, svg, type TemplateResult } from "lit";
import { carEntities, carState, entityName, type CarEntities } from "../../devices.ts";
import { formatNumber, type I18nKey } from "../../i18n.ts";
import { stateText } from "../../markers.ts";
import { withKeys } from "../../clipboard.ts";
import { furnitureName } from "../../furniture-names.ts";
import { itemProfile, type ItemProfile, type PanelFold } from "../../item-profile.ts";
import { type CarLinks, type Furniture } from "../../model.ts";
import { numberish, binaryish } from "./helpers.ts";
import type { Fp3dEditor } from "../editor.ts";
import { stateChip, type PanelAction } from "./panel-head.ts";
import { madeFromPin } from "./from-pin.ts";
import { isVehicleItem } from "../../furniture-links.ts";
import { sideDrag, sideDragHandle, sideSnapBack } from "./side-drag.ts";

/** Small line icons of the item panel (24 x 24, stroke = currentColor), decorative: the buttons carry the names. */
const ICONS = {
  lock: svg`<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>`,
  unlock: svg`<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/>`,
  left: svg`<path d="M4 9a8 8 0 1 1 2 7"/><path d="M4 4v5h5"/>`,
  right: svg`<path d="M20 9a8 8 0 1 0-2 7"/><path d="M20 4v5h-5"/>`,
  more: svg`<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>`,
  chevron: svg`<path d="m9 6 6 6-6 6"/>`,
  collapse: svg`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M15 5v14M10 10l2 2-2 2"/>`,
};

export function panelIcon(name: keyof typeof ICONS): TemplateResult {
  return html`<svg class="fp3d-ui-icon" viewBox="0 0 24 24" width="1.15em" height="1.15em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name]}</svg>`;
}

/** The car's roles in the order the found list shows them, with their labels. */
export const CAR_ROLES: readonly { key: keyof CarEntities & keyof CarLinks; label: I18nKey }[] = [
  { key: "soc", label: "car_soc" },
  { key: "range", label: "car_range" },
  { key: "charging", label: "car_charging" },
  { key: "plugged", label: "car_plugged" },
  { key: "tracker", label: "car_tracker" },
  { key: "lock", label: "car_lock" },
  { key: "climate", label: "car_climate" },
];

// ------------------------------------------------------------------ fold state: Appearance per kind, the rest per selection

const FOLD_KEY = "home3d.itemFolds";
/**
 * The folds remembered per kind in this browser (#407, DEF-4): Appearance only (the main section is always open).
 * Size, the glow, Screen pictures, Energy, Taps and visibility and More options open for one selection: the next item
 * starts at its short first view again.
 */
export const REMEMBERED_FOLDS: ReadonlySet<PanelFold> = new Set<PanelFold>(["appearance"]);
let folds: Record<string, PanelFold[]> | null = null;

function foldTable(): Record<string, PanelFold[]> {
  if (folds) return folds;
  folds = {};
  try {
    const raw = JSON.parse(localStorage.getItem(FOLD_KEY) ?? "{}");
    // what an older version stored for the other folds is left out (#407)
    if (raw && typeof raw === "object") for (const [k, v] of Object.entries(raw)) if (Array.isArray(v)) folds[k] = v.filter((x): x is PanelFold => typeof x === "string" && REMEMBERED_FOLDS.has(x as PanelFold));
  } catch {
    // no storage, or rubbish in it: the profile's defaults
  }
  return folds;
}

/** The folds open for a kind: Appearance as it was left for the kind (else the profile's first fold), plus the folds opened for this selection. */
export function openFolds(p: ItemProfile, passing: ReadonlySet<PanelFold> = new Set()): PanelFold[] {
  const kept = foldTable()[p.kind] ?? (p.openFirst ? [p.openFirst] : []);
  return [...kept.filter((f) => REMEMBERED_FOLDS.has(f)), ...[...passing].filter((f) => !REMEMBERED_FOLDS.has(f))];
}

/**
 * Opens or closes a fold: Appearance for every item of the kind (remembered in this browser), any other fold only for
 * this selection (`passing`, the panel's per-selection set; without it nothing is kept).
 */
export function setFoldOpen(p: ItemProfile, fold: PanelFold, open: boolean, passing?: Set<PanelFold>): void {
  if (!REMEMBERED_FOLDS.has(fold)) {
    if (open) passing?.add(fold);
    else passing?.delete(fold);
    return;
  }
  const now = openFolds(p).filter((f) => f !== fold);
  foldTable()[p.kind] = open ? [...now, fold] : now;
  try {
    localStorage.setItem(FOLD_KEY, JSON.stringify(foldTable()));
  } catch {
    // no storage: it lasts for this visit
  }
}

/** Forgets every remembered fold (tests). */
export function resetFolds(): void {
  folds = {};
}

// ------------------------------------------------------------------ per selection: the menu, the help, the car's pickers

interface PanelUi {
  id: string;
  menu: boolean;
  /** The folds opened for this selection (#407): all but Appearance start closed on each new selection. */
  folds: Set<PanelFold>;
  help: string | null;
  found: boolean;
  /** The colour rows show presets, materials and the active colour (the "Finishes and presets" link). */
  finishes: boolean;
}
const ui = new WeakMap<object, PanelUi>();

/** The panel's passing state for the chosen item; a new item starts closed. */
export function panelUi(ed: object, id: string): PanelUi {
  let s = ui.get(ed);
  if (!s || s.id !== id) ui.set(ed, (s = { id, menu: false, help: null, found: false, finishes: false, folds: new Set() }));
  return s;
}

/** A new selection (#407): the panel's passing state (open menu, help, the folds opened for the last one) is let go. */
export function forgetPanelUi(ed: object): void {
  ui.delete(ed);
}

/** ItemSectionsPart: methods of `Fp3dEditor`, copied onto its prototype by editor.ts (see parts.ts). */
export class ItemSectionsPart {
  /**
   * An "i" button that opens one help text under its field by click, tap or keyboard (#396): help is never only a
   * tooltip. `key` is the help text; `name` what it is about (its accessible name: "More about …").
   */
  infoButton(this: Fp3dEditor, key: I18nKey, name: string) {
    const f = this.furnitureItem;
    const s = panelUi(this, f?.id ?? "");
    const open = s.help === key;
    const id = `fp3d-help-${key}`;
    return html`<button type="button" class="fp3d-info" aria-expanded=${open ? "true" : "false"} aria-controls=${id} aria-label=${this.t("help_more", { field: name })} @click=${(e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        s.help = open ? null : key;
        this.requestUpdate();
      }}>i</button>${open ? html`<span class="fp3d-sub fp3d-help-text" id=${id} role="note">${this.t(key)}</span>` : nothing}`;
  }

  /** A field with its "i" help beside it (#396): the help opens under it. */
  withInfo(this: Fp3dEditor, field: unknown, key: I18nKey, name: string, wide = true) {
    return html`<div class="fp3d-with-info ${wide ? "fp3d-wide" : ""}">${field}${this.infoButton(key, name)}</div>`;
  }

  /** The item's name for its header: its own name, else its catalogue name. */
  itemTitle(this: Fp3dEditor, f: Furniture): string {
    return f.name || furnitureName(this.hass, f.type);
  }

  /** What the item reports now, for the header (#397, from option C): "Charging 3.6 kW · 78 %", a lamp's "On", a power sensor's watts. */
  itemLiveState(this: Fp3dEditor, f: Furniture, p: ItemProfile = itemProfile(f.type)): string[] {
    const hass = this.hass;
    if (!hass?.states) return [];
    const ref = (v: unknown) => (typeof v === "string" && v && v !== "none" ? v : null);
    if (p.kind === "car" || (p.kind === "parking" && f.car)) {
      const c = carState(hass, f);
      const out: string[] = [];
      const kw = c.chargingW !== null ? `${formatNumber(hass, c.chargingW / 1000, 1)} kW` : "";
      if (c.charging) out.push(kw ? this.t("live_charging", { power: kw }) : this.t("live_charging", { power: "" }).trim());
      else if (c.plugged) out.push(this.t("live_plugged"));
      if (c.soc !== null) out.push(`${formatNumber(hass, c.soc, 0)} %`);
      if (c.away !== null) out.push(c.away || this.t("car_away"));
      else if (c.entities.tracker && hass.states[c.entities.tracker]) out.push(this.t("live_home"));
      return out;
    }
    const out: string[] = [];
    const main = ref(f.entity);
    const st = main ? hass.states[main] : undefined;
    // Home Assistant's translated state, in sentence case (#409, WORD-8: "online" read as a raw state)
    if (st) out.push(stateChip(hass, st));
    const power = ref(f.power);
    const pw = power ? hass.states[power] : undefined;
    if (pw) out.push(stateText(hass, pw));
    return out.filter(Boolean);
  }

  /** "Lock position": one constant name, aria-pressed for the state, a lock icon (#396); the shared header lock (#409). */
  lockPositionButton(this: Fp3dEditor, f: Furniture) {
    return this.lockButton(this.fixLock("furniture", f.id));
  }

  /** The item's "⋯" actions (#396): rename, duplicate, copy, the wall view and delete, with their keys. */
  itemMenuActions(this: Fp3dEditor, f: Furniture, p: ItemProfile): PanelAction[] {
    return [
      { label: this.t("item_rename"), run: () => this.renameItem(f, p) },
      { label: this.t("duplicate"), keys: ["Ctrl+D"], run: () => this.duplicateFurniture() },
      { label: this.t("copy_items"), keys: ["Ctrl+C"], run: () => this.copySelection() },
      { label: this.t("wall_view"), run: () => this.openWallViewFor(f) },
      // the kind's own changes (#408, WORD-11): back to the pin only for an item made from one; a car becomes a spot
      this.isEditor && madeFromPin(f.id) && !!f.entity && f.entity !== "none" && f.type !== "parking" ? { label: this.t("as_device"), run: () => this.furnitureToDevice(f) } : null,
      this.isEditor && isVehicleItem(f.type) && f.type.startsWith("pack:") ? { label: this.t("vehicle_to_spot"), run: () => this.vehicleToSpot(f) } : null,
      { label: this.t("delete"), keys: ["Del"], danger: true, run: () => void this.deleteFurniture() },
    ].filter((a): a is PanelAction => !!a);
  }

  /** The header's "⋯" menu of an item (the shared panel menu, #409). */
  itemMenu(this: Fp3dEditor, f: Furniture, p: ItemProfile) {
    return this.panelMenu(f.id, this.itemMenuActions(f, p));
  }

  /** Rename: More options opens with the name box focused. */
  renameItem(this: Fp3dEditor, f: Furniture, p: ItemProfile): void {
    setFoldOpen(p, "more", true, panelUi(this, f.id).folds);
    this.requestUpdate();
    void this.updateComplete.then(() => (this.renderRoot.querySelector?.(".fp3d-item-name") as HTMLInputElement | null)?.focus());
  }

  /** The header (#396, #397, #409): the item's name as the heading, its kind and room, its live state, Lock position and "⋯". */
  renderItemHeader(this: Fp3dEditor, f: Furniture, p: ItemProfile) {
    const roomId = this.roomAt([f.x, f.z]);
    const room = roomId ? this.floor?.rooms.find((r) => r.id === roomId)?.name : null;
    return this.renderPanelHeader({
      id: f.id,
      title: this.itemTitle(f),
      kind: this.t(`item_kind_${p.kind}` as I18nKey),
      where: room || this.floor?.name || "",
      live: this.itemLiveState(f, p),
      lock: this.fixLock("furniture", f.id),
      menu: this.itemMenuActions(f, p),
    });
  }

  /** Position (#397): always open, never sticky; X, Y, Turn with the 90° buttons beside it, and the plan hint (from option D). */
  renderItemPosition(this: Fp3dEditor, f: Furniture) {
    const admin = this.isEditor;
    return html`<section class="fp3d-item-pos" aria-labelledby="fp3d-pos-h">
      <h3 id="fp3d-pos-h">${this.t("item_position")}</h3>
      <div class="fp3d-form fp3d-pos-row">
        ${this.furnitureField(f, "x")} ${this.furnitureField(f, "z")}
        <div class="fp3d-turn">
          ${this.num(this.t("item_turn"), f.rotation, (v) => this.updateFurniture({ rotation: ((v % 360) + 360) % 360 }), 1)}
          ${admin
            ? html`<button type="button" class="fp3d-btn fp3d-icon-btn" aria-label=${this.t("turn_left_90")} title=${withKeys(this.t("turn_left_90"), ["Shift+R"])} @click=${() => this.rotateFurniture(-90)}>${panelIcon("left")}</button>
                <button type="button" class="fp3d-btn fp3d-icon-btn" aria-label=${this.t("turn_right_90")} title=${withKeys(this.t("turn_right_90"), ["R"])} @click=${() => this.rotateFurniture(90)}>${panelIcon("right")}</button>`
            : nothing}
        </div>
      </div>
      ${admin ? html`<p class="fp3d-sub fp3d-plan-hint">${this.t("item_plan_hint")}</p>` : nothing}
    </section>`;
  }

  /**
   * A fold (#396 rule 13, #397) of the item panel: open as openFolds says (Appearance per kind, the rest per selection,
   * #407). A closed fold renders nothing of its body.
   */
  renderFold(this: Fp3dEditor, p: ItemProfile, fold: PanelFold, title: string, summary: string, set: number, body: () => unknown) {
    const passing = panelUi(this, this.furnitureItem?.id ?? "").folds;
    const open = openFolds(p, passing).includes(fold);
    return this.foldRow(fold, open, () => setFoldOpen(p, fold, !open, passing), title, summary, set, body);
  }

  /**
   * The one fold of the side panel (#396 rule 13, #397): a heading with a button (aria-expanded, 44 px row, focus
   * ring) that shows the set values in its summary and an "N set" badge while it is closed. A closed fold renders
   * nothing of its body. `key` names it (data-fold, the body's id); `toggle` opens or closes it.
   */
  foldRow(this: Fp3dEditor, key: string, open: boolean, toggle: () => void, title: string, summary: string, set: number, body: () => unknown) {
    const id = `fp3d-fold-${key}`;
    return html`<section class="fp3d-fold" data-fold=${key} ?data-open=${open}>
      <h3 class="fp3d-fold-h">
        <button type="button" class="fp3d-fold-btn" aria-expanded=${open ? "true" : "false"} aria-controls=${id} @click=${() => {
          toggle();
          this.requestUpdate();
        }}>
          <span class="fp3d-fold-top"><span class="fp3d-fold-title">${title}</span>${set ? html`<span class="fp3d-fold-badge">${this.t("fold_set", { n: set })}</span>` : nothing}</span>
          ${summary && !open ? html`<span class="fp3d-fold-sum">${summary}</span>` : nothing}
          <span class="fp3d-fold-chev" aria-hidden="true">${panelIcon("chevron")}</span>
        </button>
      </h3>
      ${open ? html`<div class="fp3d-fold-body" id=${id}>${body()}</div>` : nothing}
    </section>`;
  }

  /** An entity's friendly name for a summary line, or "" for none. */
  linkName(this: Fp3dEditor, ref: unknown): string {
    if (typeof ref !== "string" || !ref || ref === "none" || !this.hass) return "";
    return entityName(this.hass, ref);
  }

  /**
   * The car's main section (#396 win 1, #397): one picker for any entity of the car, then a read-only list of what
   * was found beside it (charge, range, charging, cable, location, lock, climate); "Change what was found" opens the
   * role pickers in place. `seed` is the picker of a vehicle item (its main link); a parking spot passes none (its
   * presence sensor is its main link, the car is chosen with car_device).
   */
  renderCarMain(this: Fp3dEditor, f: Furniture, vehicle: boolean) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    const car = f.car ?? {};
    const s = panelUi(this, f.id);
    const auto = carEntities(hass, { entity: f.entity, car: { device: car.device } });
    const now = carEntities(hass, f);
    const set = (patch: Partial<CarLinks>) => this.updateFurniture({ car: { ...car, ...patch } });
    const any = this.entityOptions((id) => /^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(id));
    const found = CAR_ROLES.filter((r) => now[r.key]).length;
    const options: Record<string, (id: string) => boolean> = {
      soc: (id) => numberish(id),
      range: (id) => numberish(id),
      charging: (id) => /^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(id),
      plugged: (id) => binaryish(id),
      lock: (id) => /^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(id),
      climate: (id) => /^(climate|switch|binary_sensor|input_boolean)\./.test(id),
      tracker: (id) => id.startsWith("device_tracker."),
    };
    const value = (id: string | null) => {
      const st = id ? hass.states[id] : undefined;
      return st ? stateText(hass, st) || st.state : "";
    };
    return html`<section class="fp3d-link-block fp3d-car-main" aria-labelledby="fp3d-car-h">
      <div class="fp3d-h3row"><h3 id="fp3d-car-h">${this.t("section_car")}</h3><span class="fp3d-fold-badge">${this.t("car_found", { n: found, total: CAR_ROLES.length })}</span></div>
      <div class="fp3d-form fp3d-links">
        ${this.withInfo(
          vehicle
            ? this.entitySelect(this.t("car_device"), f.entity ?? null, undefined, any, (v) => this.updateFurniture({ entity: v }), ["sensor", "device_tracker", "binary_sensor"])
            : this.entitySelect(this.t("car_device"), car.device ?? null, undefined, any, (v) => set({ device: v === "none" ? null : v })),
          "car_hint",
          this.t("car_device"),
        )}
      </div>
      <dl class="fp3d-found">
        ${CAR_ROLES.map((r) => {
          const id = now[r.key];
          return html`<div class="fp3d-found-row" ?data-missing=${!id}><dt>${this.t(r.label)}</dt><dd title=${id ?? ""}>${id ? value(id) || entityName(hass, id) : this.t("car_not_found")}</dd></div>`;
        })}
      </dl>
      ${this.isEditor
        ? html`<button type="button" class="fp3d-link fp3d-found-toggle" aria-expanded=${s.found ? "true" : "false"} @click=${() => {
            s.found = !s.found;
            this.requestUpdate();
          }}>${this.t(s.found ? "car_found_done" : "car_change_found")}</button>`
        : nothing}
      ${s.found
        ? html`<div class="fp3d-form fp3d-links">
            ${vehicle ? this.entitySelect(this.t("car_device_other"), car.device ?? null, undefined, any, (v) => set({ device: v === "none" ? null : v })) : nothing}
            ${CAR_ROLES.map((r) => this.entitySelect(this.t(r.label), car[r.key] ?? null, auto[r.key], this.entityOptions(options[r.key], r.key), (v) => set({ [r.key]: v === "none" ? "none" : v })))}
          </div>`
        : nothing}
    </section>`;
  }

  /** The one slim navigation row (#396 win 3): "‹ <room or floor>" back to it, and a small icon that folds the bar. */
  renderNavRow(this: Fp3dEditor, back: { label: string; name: string; go: () => void } | null, fold: boolean) {
    // the side bar's row (fold = true) is also a handle to move the panel, with the snap-back button while moved (#421)
    const drag = fold ? sideDragHandle(this) : null;
    return html`<div
      class="fp3d-pin-row fp3d-nav-row ${drag && sideDrag(this) ? "fp3d-drag-handle" : ""}"
      @pointerdown=${drag?.down ?? nothing}
      @pointermove=${drag?.move ?? nothing}
      @pointerup=${drag?.up ?? nothing}
      @pointercancel=${drag?.up ?? nothing}
      @dblclick=${drag?.dblclick ?? nothing}
    >
      ${back ? html`<button type="button" class="fp3d-link fp3d-back fp3d-crumb" aria-label=${back.label} @click=${back.go}>‹ ${back.name}</button>` : nothing}
      ${fold ? sideSnapBack(this) : nothing}
      ${fold ? html`<button type="button" class="fp3d-btn fp3d-icon-btn fp3d-side-fold" aria-label=${this.t("side_fold_hint")} title=${this.t("side_fold_hint")} @click=${() => this.setSideFolded(true)}>${panelIcon("collapse")}</button>` : nothing}
    </div>`;
  }
}
