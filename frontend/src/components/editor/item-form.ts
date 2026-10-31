// The item panel: the furniture form and its fields, floor, actions, show-when, state links, colours and paint,
// household, awning, motion, tech, gangs, main links, parking, car and picture rules.

import { html, nothing } from "lit";
import { storeImage } from "../../api.ts";
import { errorText } from "../../failure.ts";
import { carEntities, type CarEntities, furnitureEntities, hasScreen, isMediaFurniture, pictureRuleMatches } from "../../devices.ts";
import { clipConvex } from "../../geometry/area.ts";
import { holeInRoom } from "../../geometry/holes.ts";
import { BIN_SHAPES, BIN_SIZE, binColors, binShape, householdCountry, isPackBin, isPackPlant, MAILBOX_SHAPES, MAILBOX_SIZE, mailboxShape, WASTE_KINDS, wasteColors } from "../../household.ts";
import { robotRoomSensor } from "../../devices.ts";
import { ACTION_TYPES, GESTURES, actionTypeChoosable, parseActionData, performActionLocked, withGesture, type ActionType, type Gesture, type ItemAction, type ItemActions } from "../../item-actions.ts";
import { type CarLinks, furnitureFootprint } from "../../model.ts";
import { formatNumber, type I18nKey } from "../../i18n.ts";
import { furniturePanel, type FurnitureField } from "../../item-panel.ts";
import { withKeys } from "../../clipboard.ts";
import { gangPlateWidth, gangsOf, splitAliases, GANG_TYPES, MAX_GANGS, TECH_SIZE, TECH_TYPES, type Gang, canLift, isLamp, pointInPolygon, polygonArea, uid, type Furniture, type ShowInterval, type ShowWhen, type ScreenPicture, clearFirstState } from "../../model.ts";
import { COLOUR_PRESETS, PAINT_COLOURS, itemColourRoles, parseHex, roleColour, setRoleColour, type ColourRole } from "../../colour-roles.ts";
import { MATERIALS, ownMaterial, setRoleMaterial, usualMaterial, type Material } from "../../role-materials.ts";
import { furnitureName } from "../../furniture-names.ts";
import { itemTempSource, shadeKind } from "../../room-effects.ts";
import { energyRole, isElectric, isRobotVacuum, mountBase, packInfo, packItemName, packMotion, packName, packType } from "../../packs.ts";
import { isThermostatItem, linkField, linkFilter } from "../../furniture-links.ts";
import { setIntervalPart } from "../../show-when.ts";
import { MAX_MOUNT_Y, round, NO_STATE_TYPES, isEnergyDevice, volumeMeter, numberish, binaryish } from "./helpers.ts";
import type { Fp3dEditor } from "../editor.ts";

/** ItemFormPart: methods of `Fp3dEditor`, copied onto its prototype by editor.ts (see parts.ts). */
export class ItemFormPart {
  /** How strongly a lamp glows in 3D, in percent (#181): many bright LED strips need not outshine the room. */
  glowScaleField(this: Fp3dEditor, value: number | null | undefined, set: (v: number | null) => void) {
    return html`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((value ?? 1) * 100))}
        ?disabled=${!this.isEditor}
        @change=${(e: Event) => {
          const v = Math.min(150, Math.max(10, Number((e.target as HTMLInputElement).value) || 100)) / 100;
          set(Math.abs(v - 1) < 0.001 ? null : v);
        }}
    /></label>`;
  }

  renderFurnitureForm(this: Fp3dEditor, f: Furniture) {
    if (this.selection().length > 1) return this.renderBlockForm();
    const admin = this.isEditor;
    const panel = furniturePanel({ mirror: !isLamp(f.type), strip: f.type === "led_strip", lift: canLift(f) && !!this.floor, floors: this._doc.floors.length > 1 });
    return html`<section>
      <div class="fp3d-pos-head">
        <div class="fp3d-h3row"><h3>${f.name || this.t("furniture")}</h3>${this.fixButton("furniture", f.id)}</div>
        <div class="fp3d-form">${panel.head.map((field) => this.furnitureField(f, field))}</div>
      </div>
      ${this.renderLinkBlock(f)}
      ${f.group
        ? html`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${() => {
            this._single = false;
            this.requestUpdate();
          }}>${this.t("block_select")}</button></p>`
        : nothing}
      <div class="fp3d-form">${panel.body.map((field) => this.furnitureField(f, field))}</div>
      ${this.renderColourRoles(f)}
      ${f.type === "stairs" ? html`<p class="fp3d-sub">${this.t("stairs_hint")}</p>` : nothing}
      ${f.type === "stairs" ? this.renderStairOptions(f) : nothing}
      ${f.type === "stairs_u" ? html`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>` : nothing}
      ${f.type === "stairwell"
        ? html`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor && !this.floor.rooms.some((r) => r.points.length >= 3 && (holeInRoom(furnitureFootprint(f), r.points) || polygonArea(clipConvex(r.points, furnitureFootprint(f))) > 0.01))
              ? html`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`
              : nothing}`
        : nothing}
      ${f.type === "inverter" || f.type === "home_battery"
        ? html`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
                ${(f.type === "inverter" ? (["", "slim", "hybrid"] as const) : (["", "wall", "cube"] as const)).map(
                  (v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`${f.type === "inverter" ? "inverter" : "battery"}_${v || "std"}` as I18nKey)}</option>`,
                )}
              </select></label
            >
          </div>`
        : nothing}
      ${f.type === "lamp_pendant"
        ? html`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
                ${(["", "globe", "cone", "drum"] as const).map(
                  (v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`pendant_${v || "shade"}` as I18nKey)}</option>`,
                )}
              </select></label
            >
          </div>`
        : nothing}
      ${GANG_TYPES.has(f.type) ? this.renderGangsForm(f) : nothing} ${TECH_TYPES.has(f.type) ? this.renderTechForm(f) : nothing} ${f.type === "parking" ? this.renderParkingForm(f) : nothing} ${f.type === "waste_bin" || f.type === "mailbox" ? this.renderHouseholdForm(f) : this.renderHouseholdExtras(f)}
      ${this.renderModuleFurnitureFields(f)}
      ${this.renderShowWhen(f)}
      ${this.renderItemActions(f.actions, f.entity && f.entity !== "none" ? f.entity : null, (a) => this.updateFurniture({ actions: a }))}
      ${/^pack:[^:]+\.vehicles:/.test(f.type) && this.isEditor
        ? html`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${() => this.vehicleToSpot(f)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`
        : nothing}
      ${this.rackOf(f) ? this.renderRackFrameForm(f) : nothing}
      ${this.renderRackElevation(f)}
      ${this.renderRackCardForm(f)}
      ${!admin && this.rackOf(f) ? html`<div class="fp3d-actions"><button class="fp3d-btn" @click=${() => this.openRackSheet()}>▤ ${this.t("rack_edit")}</button></div>` : nothing}
      ${admin
        ? html`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${withKeys(this.t("rotate_left"), ["Shift+R"])} @click=${() => this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" title=${withKeys(this.t("rotate_right"), ["R"])} @click=${() => this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${() => this.openWallViewFor(f)}>▦ ${this.t("wall_view")}</button>
            ${this.rackOf(f) ? html`<button class="fp3d-btn" @click=${() => this.openRackSheet()}>▤ ${this.t("rack_edit")}</button>` : nothing}
            ${f.entity && f.entity !== "none" && f.type !== "parking" ? html`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${() => this.furnitureToDevice(f)}>${this.t("as_device")}</button>` : nothing}
            ${this.renderClipButtons()}
            <button class="fp3d-btn fp3d-danger" title=${withKeys(this.t("delete"), ["Del"])} @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`
        : nothing}
    </section>`;
  }

  /**
   * The one "Link a device" block of the item panel (#172), directly under X / Z / rotation so it is never a scroll
   * away: the item's main link and the other links of its kind, or its state sensors.
   */
  renderLinkBlock(this: Fp3dEditor, f: Furniture) {
    const body = isElectric(f.type) ? this.renderFurnitureLinks(f) : !NO_STATE_TYPES.has(f.type) ? html`<div class="fp3d-form fp3d-links">${this.renderStateLinks(f)}</div>` : nothing;
    if (body === nothing) return nothing;
    return html`<div class="fp3d-link-block"><h4 class="fp3d-link-title">${this.t("link_device")}</h4>${body}</div>`;
  }

  /** One field (or a few that belong together) of the item panel, in the order of furnitureFields (#70). */
  furnitureField(this: Fp3dEditor, f: Furniture, field: FurnitureField) {
    const admin = this.isEditor;
    switch (field) {
      case "x":
        return this.len(this.t("x"), f.x, (v) => this.updateFurniture({ x: v }));
      case "z":
        return this.len(this.t("z"), f.z, (v) => this.updateFurniture({ z: v }));
      case "rotation":
        return this.num(this.t("rotation"), f.rotation, (v) => this.updateFurniture({ rotation: ((v % 360) + 360) % 360 }), 1);
      case "w":
        return this.len(this.t("width"), f.w, (v) => this.updateFurniture({ w: Math.max(0.01, v) }), 0.01, 0.01);
      case "d":
        return this.len(this.t("depth"), f.d, (v) => this.updateFurniture({ d: Math.max(0.01, v) }), 0.01, 0.01);
      case "h":
        return this.len(this.t("height_m"), f.h, (v) => this.updateFurniture({ h: Math.max(0.005, v) }), 0.01, 0);
      case "mount":
        return html`${this.len(this.t("mount_height"), f.mount_y ?? mountBase(this.floor!, f), (v) => this.updateFurniture({ mount_y: Math.min(MAX_MOUNT_Y, Math.max(0, v)) }), 0.01, 0)}
          ${f.mount_y != null ? html`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!admin} @click=${() => this.updateFurniture({ mount_y: null })}>${this.t("height_auto")}</button>` : nothing}`;
      case "mirror":
        return html`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
          ><input type="checkbox" .checked=${!!f.mirror} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ mirror: (ev.target as HTMLInputElement).checked })} />
          ${this.t("furn_mirror")}</label
        >`;
      case "strip":
        return html`${this.num(this.t("strip_tilt"), f.tilt ?? 0, (v) => this.updateFurniture({ tilt: Math.max(-90, Math.min(90, Math.round(v))) }), 5)}
          ${f.upright ? nothing : html`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"), f.rise ?? 0, (v) => this.updateFurniture({ rise: Math.max(-80, Math.min(80, Math.round(v))) || undefined }), 5)}</span>`}
          <label class="fp3d-check" title=${this.t("strip_upright_hint")}
            ><input type="checkbox" .checked=${!!f.upright} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ upright: (ev.target as HTMLInputElement).checked })} />
            ${this.t("strip_upright")}</label
          >`;
      case "name":
        return html`<label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${f.name ?? ""} ?disabled=${!admin} placeholder=${this.t(`furn_${f.type}` as I18nKey) === `furn_${f.type}` ? "" : this.t(`furn_${f.type}` as I18nKey)} @change=${(e: Event) => this.updateFurniture({ name: (e.target as HTMLInputElement).value.trim() || null })} />
        </label>`;
      case "show_name":
        // always there (greyed out until the item has a name), so naming an item moves no row (#71)
        return html`<label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${!!f.show_name && !!f.name} ?disabled=${!admin || !f.name} @change=${(ev: Event) => this.updateFurniture({ show_name: (ev.target as HTMLInputElement).checked || undefined })} />
          ${this.t("show_name")}</label
        >`;
      case "aliases":
        return html`<label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(f.aliases ?? []).join(", ")} ?disabled=${!admin} placeholder=${this.t("aliases_placeholder")} @change=${(e: Event) => this.updateFurniture({ aliases: splitAliases((e.target as HTMLInputElement).value) })}
        /></label>`;
      case "type":
        return html`<label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!admin} @change=${(e: Event) => this.retypeFurniture((e.target as HTMLSelectElement).value)}>
            ${this.typeChoices(f.type).map((t) => html`<option value=${t} ?selected=${t === f.type}>${this.t(`furn_${t}` as I18nKey)}</option>`)}
            ${(this.packs ?? [])
              .filter((pack) => pack.items.length)
              .map(
                (pack) => html`<optgroup label=${packName(pack, this.hass?.language ?? "de")}>
                  ${this.typeLabels(pack).map((label, i) => {
                    const t = packType(pack.id, pack.items[i].id);
                    return html`<option value=${t} ?selected=${t === f.type}>${label}</option>`;
                  })}
                </optgroup>`,
              )}
            ${f.type.startsWith("pack:") && !(this.packs ?? []).some((p) => f.type.startsWith(`pack:${p.id}:`))
              ? html`<option value=${f.type} selected>${furnitureName(this.hass, f.type)}</option>`
              : nothing}
          </select></label
        >`;
      case "floor":
        return this.renderItemFloor();
    }
  }

  /** The floor the chosen item (block, multi selection) stands on: picking another moves it there (#73). */
  renderItemFloor(this: Fp3dEditor) {
    return html`<label class="fp3d-field fp3d-wide" title=${this.t("item_floor_hint")}
      >${this.t("floor")}
      <select ?disabled=${!this.isEditor} @change=${(e: Event) => this.moveSelectionToFloor((e.target as HTMLSelectElement).value)}>
        ${[...this._doc.floors].reverse().map((fl) => html`<option value=${fl.id} ?selected=${fl.id === this._floorId}>${fl.name}</option>`)}
      </select></label
    >`;
  }

  /**
   * Own tap, hold and double-tap actions of a device or item (#6). Only editors change them; everyone who can
   * see the view can use them.
   */
  renderItemActions(this: Fp3dEditor, actions: ItemActions | null | undefined, ownEntity: string | null, onChange: (next: ItemActions | null) => void) {
    const admin = this.isEditor;
    const set = (g: Gesture, patch: Partial<ItemAction> | null) => {
      const cur = actions?.[g];
      onChange(withGesture(actions, g, patch === null ? null : ({ ...(cur ?? { action: "default" }), ...patch } as ItemAction)));
    };
    const placeholder = (type: ActionType) =>
      type === "navigate" ? "/lovelace/garden" : type === "url" ? "https://" : type === "perform_action" ? "script.turn_on" : (ownEntity ?? "light.kitchen");
    return html`<h4>${this.t("item_actions")}</h4>
      <p class="fp3d-sub">${this.t("item_actions_hint")}</p>
      ${admin && !this.isHaAdmin ? html`<p class="fp3d-sub">${this.t("item_action_perform_admin")}</p>` : nothing}
      ${GESTURES.map((g) => {
        const a = actions?.[g] ?? null;
        const type: ActionType = a?.action ?? "default";
        const runs = type !== "default" && type !== "none";
        // a perform_action only an admin changes (#51): an editor may replace it, not edit it
        const locked = !admin || performActionLocked(a, this.isHaAdmin);
        return html`<div class="fp3d-form fp3d-item-action" data-gesture=${g}>
          <label class="fp3d-field fp3d-wide"
            >${this.t(`item_gesture_${g}` as I18nKey)}
            <select ?disabled=${!admin} @change=${(e: Event) => {
              const v = (e.target as HTMLSelectElement).value as ActionType;
              set(g, v === "default" ? null : { action: v, target: null, data: null });
            }}>
              ${ACTION_TYPES.map((t) => html`<option value=${t} ?selected=${t === type} ?disabled=${!actionTypeChoosable(t, a, this.isHaAdmin)}>${this.t(`item_action_${t}` as I18nKey)}</option>`)}
            </select></label
          >
          ${runs
            ? html`<label class="fp3d-field fp3d-wide"
                >${this.t(`item_target_${type}` as I18nKey)}
                <input type="text" maxlength="2000" .value=${a?.target ?? ""} ?disabled=${locked} placeholder=${placeholder(type)} @change=${(e: Event) => set(g, { target: (e.target as HTMLInputElement).value.trim() || null })}
              /></label>`
            : nothing}
          ${type === "perform_action"
            ? html`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="3"
                  spellcheck="false"
                  ?disabled=${locked}
                  placeholder='{"entity_id": "script.movie_night"}'
                  .value=${a?.data ? JSON.stringify(a.data, null, 1) : ""}
                  @change=${(e: Event) => {
                    const el = e.target as HTMLTextAreaElement;
                    el.setCustomValidity("");
                    try {
                      set(g, { data: parseActionData(el.value) });
                    } catch {
                      el.setCustomValidity(this.t("own_data_bad"));
                      el.reportValidity();
                    }
                  }}
                ></textarea></label
              >`
            : nothing}
          ${runs
            ? html`<label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!a?.confirm} ?disabled=${locked} @change=${(ev: Event) => set(g, { confirm: (ev.target as HTMLInputElement).checked || undefined })} />
                  ${this.t("item_action_confirm")}</label
                >
                ${a?.confirm
                  ? html`<label class="fp3d-field fp3d-wide"
                      >${this.t("item_action_confirm_text")}
                      <input type="text" maxlength="300" .value=${a.confirm_text ?? ""} ?disabled=${locked} placeholder=${this.t("item_action_confirm_placeholder")} @change=${(e: Event) => set(g, { confirm_text: (e.target as HTMLInputElement).value.trim() || null })}
                    /></label>`
                  : nothing}`
            : nothing}
        </div>`;
      })}`;
  }

  /** When the item shows (#15): while an entity is available and/or inside intervals of days and times of day (editors only). */
  renderShowWhen(this: Fp3dEditor, f: Furniture) {
    const rule: ShowWhen = f.show_when ?? {};
    const list = rule.intervals ?? [];
    const off = !this.isEditor;
    const set = (patch: ShowWhen) => {
      const next = { ...rule, ...patch };
      this.updateFurniture({ show_when: (next.entity && next.entity !== "none") || next.intervals?.length ? next : null });
    };
    // never half-open (#46): picking one end fills the other, clearing one clears both
    const setAt = (i: number, patch: ShowInterval) => set({ intervals: list.map((iv, j) => (j === i ? setIntervalPart(iv, patch) : iv)) });
    // days are kept without a year ("MM-DD"); the picker shows a leap year so 29 February can be picked
    const field = (label: string, kind: "date" | "time", v: string | null | undefined, on: (v: string | null) => void) =>
      html`<label class="fp3d-field"
        >${label}
        <input type=${kind} ?disabled=${off} .value=${v ? (kind === "date" ? `2028-${v}` : v) : ""} @change=${(e: Event) => {
          const raw = (e.target as HTMLInputElement).value;
          on(raw ? (kind === "date" ? raw.slice(5) : raw) : null);
        }}
      /></label>`;
    return html`<details class="fp3d-section" ?open=${!!f.show_when}>
      <summary>${this.t("show_when")}</summary>
      <div class="fp3d-form">
        ${this.entitySelect(this.t("show_when_entity"), rule.entity ?? null, undefined, this.entityOptions(() => true), (v) => set({ entity: v === "none" ? null : v }))}
        ${list.map(
          (iv, i) => html`${field(this.t("show_from"), "date", iv.from, (v) => setAt(i, { from: v }))} ${field(this.t("show_to"), "date", iv.to, (v) => setAt(i, { to: v }))}
            ${field(this.t("show_start"), "time", iv.start, (v) => setAt(i, { start: v }))} ${field(this.t("show_end"), "time", iv.end, (v) => setAt(i, { end: v }))}
            <button class="fp3d-pin" title=${this.t("delete")} ?disabled=${off} @click=${() => set({ intervals: list.filter((_, j) => j !== i) })}>✕</button>`,
        )}
      </div>
      ${off || list.length >= 12 ? nothing : html`<div class="fp3d-actions"><button class="fp3d-btn" @click=${() => set({ intervals: [...list, {}] })}>+ ${this.t("show_add_interval")}</button></div>`}
      <p class="fp3d-sub">${this.t("show_when_hint")}</p>
    </details>`;
  }

  /** "State from": an entity lights the item's top (two light its halves) – any furniture, a bed with occupancy mats too (#116). */
  renderStateLinks(this: Fp3dEditor, f: Furniture) {
    return html`${this.entitySelect(this.t("furn_state_entity"), f.state_entity ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(id)), (v) => this.updateFurniture(clearFirstState(f, v)))}
              ${f.state_entity && f.state_entity !== "none"
                ? html`${this.entitySelect(this.t("furn_state_entity2"), f.state_entity2 ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(id)), (v) => this.updateFurniture({ state_entity2: v === "none" ? null : v }))}
                    ${f.state_entity2 && f.state_entity2 !== "none"
                      ? html`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isEditor} @change=${(e: Event) => this.updateFurniture({ state_split: (e.target as HTMLSelectElement).value === "top_bottom" ? "top_bottom" : "left_right" })}>
                            <option value="left_right" ?selected=${f.state_split !== "top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${f.state_split === "top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`
                      : nothing}`
                : nothing}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`;
  }

  /**
   * Colour and material per role (#12, #40): each role the item is drawn in, with a colour picker, the named presets and
   * its material. A role without a colour of its own follows the look; "From the look" clears it. A role without a
   * material of its own takes its usual one; materials show in the realistic look. Only editors change them.
   */
  renderColourRoles(this: Fp3dEditor, f: Furniture) {
    const roles = itemColourRoles(f.type);
    if (!roles.length) return nothing;
    const admin = this.isEditor;
    const set = (role: ColourRole, hex: string | null) => this.updateFurniture({ colors: setRoleColour(f.colors, role, hex) });
    const setMaterial = (role: ColourRole, m: string) => this.updateFurniture({ materials: setRoleMaterial(f.materials, role, (m || null) as Material | null) });
    const materialName = (m: Material) => this.t(`material_${m}` as I18nKey);
    return html`<div class="fp3d-form">
      <h4 class="fp3d-lib-head fp3d-wide">${this.t("colours")}</h4>
      ${roles.map((role) => {
        const own = roleColour(f.colors, role);
        if (role === "paint") return this.renderPaint(f, own);
        const preset = own ? COLOUR_PRESETS.find((p) => p.hex === own) : undefined;
        const mat = ownMaterial(f.materials, role);
        return html`<div class="fp3d-field fp3d-colour-role">
          <span>${this.t(`colour_role_${role}` as I18nKey)}</span>
          <span class="fp3d-colour-pick">
            <input type="color" class=${own ? "" : "fp3d-colour-unset"} aria-label=${this.t(`colour_role_${role}` as I18nKey)} .value=${own ?? "#808080"} ?disabled=${!admin}
              @change=${(e: Event) => set(role, (e.target as HTMLInputElement).value)} />
            <select ?disabled=${!admin} @change=${(e: Event) => set(role, (e.target as HTMLSelectElement).value || null)}>
              <option value="" ?selected=${!own}>${this.t("colour_theme")}</option>
              ${own && !preset ? html`<option value=${own} selected>${this.t("colour_own")}</option>` : nothing}
              ${COLOUR_PRESETS.map((p) => html`<option value=${p.hex} ?selected=${p === preset}>${this.t(`colour_preset_${p.id}` as I18nKey)}</option>`)}
            </select>
            <select class="fp3d-material" aria-label=${this.t("material_of", { role: this.t(`colour_role_${role}` as I18nKey) })} ?disabled=${!admin}
              @change=${(e: Event) => setMaterial(role, (e.target as HTMLSelectElement).value)}>
              <option value="" ?selected=${!mat}>${this.t("material_usual", { material: materialName(usualMaterial(role)) })}</option>
              ${MATERIALS.map((m) => html`<option value=${m} ?selected=${m === mat}>${materialName(m)}</option>`)}
            </select>
          </span>
        </div>`;
      })}
      <p class="fp3d-sub fp3d-wide">${this.t("colours_hint")}</p>
    </div>`;
  }

  /** A vehicle's paint (#129): ten base colours as swatches plus a hex field, saved in the item's `paint` colour role. */
  renderPaint(this: Fp3dEditor, f: Furniture, own: string | null) {
    const admin = this.isEditor;
    const name = this.t("colour_role_paint");
    return html`<div class="fp3d-field fp3d-colour-role fp3d-wide">
      <span>${name}</span>
      <span class="fp3d-paint">
        ${PAINT_COLOURS.map((c) => {
          const label = this.t(`paint_${c.id}` as I18nKey);
          return html`<button type="button" class="fp3d-swatch" style=${`background:${c.hex}`} title=${label} aria-label=${label} aria-pressed=${own === c.hex ? "true" : "false"}
            ?disabled=${!admin} @click=${() => this.setPaint(f, c.hex)}></button>`;
        })}
        <input type="text" class="fp3d-paint-hex" maxlength="7" placeholder="#rrggbb" aria-label=${this.t("paint_hex")} .value=${own ?? ""} ?disabled=${!admin}
          @change=${(e: Event) => this.setPaint(f, (e.target as HTMLInputElement).value)} />
        <input type="color" class=${own ? "" : "fp3d-colour-unset"} aria-label=${this.t("paint_hex")} .value=${own ?? "#808080"} ?disabled=${!admin}
          @change=${(e: Event) => this.setPaint(f, (e.target as HTMLInputElement).value)} />
        ${own ? html`<button type="button" ?disabled=${!admin} @click=${() => this.setPaint(f, "")}>${this.t("colour_theme")}</button>` : nothing}
      </span>
    </div>`;
  }

  /** Sets the paint of an item from a swatch or typed text: a colour is saved, empty goes back to the look, anything else is ignored. */
  setPaint(this: Fp3dEditor, f: Furniture, text: string): void {
    const hex = parseHex(text);
    if (text.trim() && !hex) return;
    this.updateFurniture({ colors: setRoleColour(f.colors, "paint", hex) });
  }

  /**
   * Waste bin and mailbox: shape and colours for everyone; the waste calendar and the post sensors with Haushalt Pro
   * (a teaser while it is locked).
   */
  renderHouseholdForm(this: Fp3dEditor, f: Furniture) {
    const admin = this.isEditor;
    const select = <T extends string>(label: string, value: T, options: readonly T[], key: (o: T) => I18nKey, onChange: (v: T) => void) =>
      html`<label class="fp3d-field fp3d-wide"
        >${label}
        <select ?disabled=${!admin} @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value as T)}>
          ${options.map((o) => html`<option value=${o} ?selected=${o === value}>${this.t(key(o))}</option>`)}
        </select></label
      >`;
    if (f.type === "waste_bin") {
      const shape = binShape(f);
      const kind = f.bin_kind ?? "rest";
      const [body, lid] = binColors(f);
      const sources = this.entityOptions((id) => id.startsWith("calendar.") || id.startsWith("sensor."));
      return html`<div class="fp3d-form fp3d-links">
        ${select(this.t("bin_shape"), shape, BIN_SHAPES, (o) => `bin_shape_${o}` as I18nKey, (v) => {
          const [w, d, h] = BIN_SIZE[v];
          this.updateFurniture({ variant: v === "bin240" ? null : v, w, d, h });
        })}
        ${select(this.t("bin_kind"), kind, WASTE_KINDS, (o) => `bin_kind_${o}` as I18nKey, (v) => {
          // a new kind starts from its usual colours in this country
          const [b, l] = wasteColors(v, householdCountry());
          this.updateFurniture({ bin_kind: v, bin_color: b, bin_lid: l === b ? null : l });
        })}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${body} ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ bin_color: (e.target as HTMLInputElement).value })}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${lid} ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ bin_lid: (e.target as HTMLInputElement).value })}
        /></label>
        ${html`${this.entitySelect(this.t("bin_source"), f.bin_source ?? null, undefined, sources, (v) => this.updateFurniture({ bin_source: v === "none" ? null : v }))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${f.bin_match ?? ""} placeholder=${this.t(`bin_kind_${kind}` as I18nKey)} ?disabled=${!admin}
                  @change=${(e: Event) => this.updateFurniture({ bin_match: (e.target as HTMLInputElement).value.trim() || null })} /></label>
              ${this.entitySelect(this.t("bin_out"), f.bin_out ?? null, undefined, this.entityOptions((id) => /^(input_boolean|switch|binary_sensor)\./.test(id)), (v) => this.updateFurniture({ bin_out: v === "none" ? null : v }))}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_out_hint")}</p>
              <div class="fp3d-field fp3d-wide">
                <span>${this.t("bin_kerb")}</span>
                <div class="fp3d-actions">
                  <button class="fp3d-btn" aria-pressed=${this._kerbPick} ?disabled=${!admin} @click=${() => (this._kerbPick = !this._kerbPick)}>
                    ${this._kerbPick ? "✓ " : ""}${this.t(f.bin_kerb ? "bin_kerb_move" : "bin_kerb_set")}
                  </button>
                  ${f.bin_kerb ? html`<button class="fp3d-btn" ?disabled=${!admin} @click=${() => this.updateFurniture({ bin_kerb: null })}>${this.t("bin_kerb_clear")}</button>` : nothing}
                </div>
              </div>
              <p class="fp3d-sub fp3d-wide">${this.t(this._kerbPick ? "hint_kerb_pick" : "bin_kerb_hint")}</p>
              ${this.renderSettingsLink("household", "household.bin_from", "settings_moved_bins")}`}
      </div>`;
    }
    const shape = mailboxShape(f);
    const flags = this.entityOptions((id) => ["binary_sensor.", "input_boolean.", "sensor.", "counter.", "input_number."].some((d) => id.startsWith(d)));
    const doors = this.entityOptions((id) => id.startsWith("binary_sensor."));
    return html`<div class="fp3d-form fp3d-links">
      ${select(this.t("mailbox_shape"), shape, MAILBOX_SHAPES, (o) => `mailbox_shape_${o}` as I18nKey, (v) => {
        const [w, d, h] = MAILBOX_SIZE[v];
        this.updateFurniture({ variant: v === "wall" ? null : v, w, d, h });
      })}
      ${html`${this.entitySelect(this.t("mailbox_entity"), typeof f.entity === "string" && f.entity !== "none" ? f.entity : null, undefined, flags, (v) => this.updateFurniture({ entity: v ?? "none" }))}
            ${this.entitySelect(this.t("mailbox_door"), f.mailbox_door ?? null, undefined, doors, (v) => this.updateFurniture({ mailbox_door: v === "none" ? null : v }))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`}
    </div>`;
  }

  /**
   * Haushalt Pro on other items: a plant's moisture, a washer's time left and door, a fridge's door warning, and a
   * consumable or service for every electric item. A teaser on plants, appliances and fridges while it is locked.
   */
  renderHouseholdExtras(this: Fp3dEditor, f: Furniture) {
    const plant = f.type === "plant" || isPackPlant(f.type);
    const appliance = f.type === "washer" || f.type === "dryer" || f.type === "dishwasher";
    const fridge = f.type === "fridge" || f.type === "fridge_smart";
    const electric = isElectric(f.type);
    // a bin from a pack is only a model: say where the kerb spot and the calendar are (#170)
    if (!plant && !electric && isPackBin(f.type)) return html`<p class="fp3d-sub fp3d-wide">${this.t("bin_model_hint")}</p>`;
    if (!plant && !electric) return nothing;
    const sensors = this.entityOptions((id) => id.startsWith("sensor."));
    const doors = this.entityOptions((id) => id.startsWith("binary_sensor."));
    const services = this.entityOptions((id) => ["sensor.", "binary_sensor.", "input_boolean.", "input_datetime.", "input_number."].some((d) => id.startsWith(d)));
    const ref = (v: string | null) => (v === "none" ? null : v);
    return html`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("section_household")}</b></p>
      ${plant
        ? html`${this.entitySelect(this.t("hh_moisture"), f.moisture ?? null, undefined, this.entityOptions((id) => id.startsWith("plant.") || id.startsWith("sensor.")), (v) => this.updateFurniture({ moisture: ref(v) }))}
            ${this.num(this.t("hh_moisture_min"), f.moisture_min ?? 20, (v) => this.updateFurniture({ moisture_min: Math.max(0, Math.min(100, Math.round(v))) }), 1)}`
        : nothing}
      ${appliance
        ? html`${this.entitySelect(this.t("hh_remaining"), f.remaining ?? null, undefined, sensors, (v) => this.updateFurniture({ remaining: ref(v) }))}
            ${this.entitySelect(this.t("hh_door"), f.door_left ?? null, undefined, doors, (v) => this.updateFurniture({ door_left: ref(v) }))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`
        : nothing}
      ${fridge
        ? html`${f.type === "fridge" ? this.entitySelect(this.t("hh_fridge_door"), f.door_left ?? null, undefined, doors, (v) => this.updateFurniture({ door_left: ref(v) })) : nothing}
            ${this.num(this.t("hh_door_alarm"), f.door_alarm ?? 2, (v) => this.updateFurniture({ door_alarm: Math.max(0.5, Math.min(120, v)) }), 0.5)}`
        : nothing}
      ${electric
        ? html`${this.entitySelect(this.t("hh_service_entity"), f.service ?? null, undefined, services, (v) => this.updateFurniture({ service: ref(v) }))}
            ${f.service && f.service !== "none" ? this.num(this.t("hh_service_min"), f.service_min ?? 10, (v) => this.updateFurniture({ service_min: Math.max(0, v) }), 1) : nothing}
            ${(f.service && f.service !== "none") || (f.service2 && f.service2 !== "none")
              ? this.entitySelect(this.t("hh_service2_entity"), f.service2 ?? null, undefined, services, (v) => this.updateFurniture({ service2: ref(v) }))
              : nothing}
            ${f.service2 && f.service2 !== "none" ? this.num(this.t("hh_service2_min"), f.service2_min ?? 10, (v) => this.updateFurniture({ service2_min: Math.max(0, v) }), 1) : nothing}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`
        : nothing}
    </div>`;
  }

  /** Awning: its fall, the valance, a position sensor, its run time and the other direction (with the cover above). */
  renderAwningFields(this: Fp3dEditor, f: Furniture) {
    const admin = this.isEditor;
    const sensors = this.entityOptions((id) => id.startsWith("sensor.") || id.startsWith("input_number.") || id.startsWith("number."));
    // each kind with the sizes it usually has: width, projection (depth), height above the floor, fall
    const KINDS: Record<string, { w: number; d: number; y: number; pitch: number | null }> = {
      arm: { w: 3, d: 2.5, y: 2.3, pitch: null },
      drop: { w: 2.4, d: 1.2, y: 2.3, pitch: 20 },
      vertical: { w: 2, d: 0.2, y: 2.3, pitch: null },
      pergola: { w: 4, d: 3.5, y: 2.6, pitch: 6 },
      side: { w: 3, d: 0.2, y: 1.8, pitch: null },
    };
    const kind = f.variant ?? "arm";
    return html`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!admin}
          @change=${(e: Event) => {
            const k = (e.target as HTMLSelectElement).value;
            const d = KINDS[k];
            this.updateFurniture({ variant: k === "arm" ? null : k, w: d.w, d: d.d, mount_y: d.y, awning_pitch: d.pitch });
          }}
        >
          ${Object.keys(KINDS).map((k) => html`<option value=${k} ?selected=${kind === k}>${this.t(`awning_kind_${k}` as I18nKey)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t(`awning_kind_${kind}_hint` as I18nKey)}</p>
      ${kind === "vertical" || kind === "side" ? nothing : this.num(this.t("awning_pitch"), f.awning_pitch ?? 12, (v) => this.updateFurniture({ awning_pitch: Math.max(0, Math.min(80, Math.round(v))) }), 1)}
      ${this.num(this.t("awning_time"), f.awning_time ?? 20, (v) => this.updateFurniture({ awning_time: Math.max(2, Math.min(300, Math.round(v))) }), 1)}
      ${this.entitySelect(this.t("awning_position"), f.awning_position ?? null, undefined, sensors, (v) => this.updateFurniture({ awning_position: v === "none" ? null : v }))}
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${f.awning_valance !== false} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ awning_valance: (ev.target as HTMLInputElement).checked })} />
        ${this.t("awning_valance")}</label
      >
      <label class="fp3d-check fp3d-wide" title=${this.t("awning_invert_hint")}
        ><input type="checkbox" .checked=${!!f.awning_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ awning_invert: (ev.target as HTMLInputElement).checked })} />
        ${this.t("awning_invert")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`;
  }

  /** A motorised curtain or roll-down screen from a pack (#511): run time, a live position sensor, the other direction. */
  renderMotionFields(this: Fp3dEditor, f: Furniture) {
    const admin = this.isEditor;
    const sensors = this.entityOptions((id) => id.startsWith("sensor.") || id.startsWith("input_number.") || id.startsWith("number."));
    const side = f.variant === "left" || f.variant === "right" ? f.variant : "both";
    return html`${packMotion(f.type) === "curtain"
        ? html`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!admin} @change=${(e: Event) => {
              const v = (e.target as HTMLSelectElement).value;
              this.updateFurniture({ variant: v === "both" ? null : v });
            }}>
              ${(["both", "left", "right"] as const).map((k) => html`<option value=${k} ?selected=${side === k}>${this.t(`curtain_side_${k}`)}</option>`)}
            </select></label
          >`
        : nothing}
      ${this.num(this.t("motor_time"), f.awning_time ?? 20, (v) => this.updateFurniture({ awning_time: Math.max(2, Math.min(300, Math.round(v))) }), 1)}
      ${this.entitySelect(this.t("awning_position"), f.awning_position ?? null, undefined, sensors, (v) => this.updateFurniture({ awning_position: v === "none" ? null : v }))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!f.awning_invert} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ awning_invert: (ev.target as HTMLInputElement).checked })} />
        ${this.t("awning_invert")}</label
      >`;
  }

  /** Wi-Fi access point (D582) and water heater: how it is mounted and its entities. */
  renderTechForm(this: Fp3dEditor, f: Furniture) {
    if (!this.hass) return nothing;
    const admin = this.isEditor;
    const ap = f.type === "wifi_ap";
    const mounts = ["", "wall"] as const;
    const setMount = (v: string) => {
      const [w, d, h] = TECH_SIZE[`${f.type}:${v}`];
      this.updateFurniture({ variant: v || null, w, d, h, mount_y: null });
    };
    const sensors = this.entityOptions((id) => id.startsWith("sensor."));
    // an access point's entities are often diagnostic (UniFi): every entity of the kinds that tell a state is offered
    const main = this.entityOptions((id) => (ap ? /^(binary_sensor|sensor|device_tracker|switch|button|update)\./ : /^(water_heater|climate|switch|input_boolean|sensor)\./).test(id), ap);
    return html`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t("tech_mount")}
        <select ?disabled=${!admin} @change=${(e: Event) => setMount((e.target as HTMLSelectElement).value)}>
          ${mounts.map((v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(`${f.type}_${v || "std"}` as I18nKey)}</option>`)}
        </select></label
      >
      ${this.entitySelect(this.t(ap ? "ap_status" : "heater_entity"), typeof f.entity === "string" && f.entity !== "none" ? f.entity : null, undefined, main, (v) => this.updateFurniture({ entity: v && v !== "none" ? v : "none" }))}
      ${ap
        ? this.entitySelect(this.t("ap_clients_sensor"), f.clients ?? null, undefined, sensors, (v) => this.updateFurniture({ clients: v && v !== "none" ? v : null }))
        : html`${this.entitySelect(this.t("heater_temp"), f.water_temp ?? null, undefined, sensors, (v) => this.updateFurniture({ water_temp: v && v !== "none" ? v : null }))}
            ${this.entitySelect(this.t("furn_power"), typeof f.power === "string" && f.power !== "none" ? f.power : null, undefined, this.entityOptions((id) => this.isPowerSensor(id)), (v) => this.updateFurniture({ power: v && v !== "none" ? v : "none" }))}`}
      <p class="fp3d-sub fp3d-wide">${this.t(ap ? "ap_hint" : "heater_hint")}</p>
      <div class="fp3d-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>
    </div>`;
  }

  /** Wall switch or socket (D523, #593): its gangs, and per gang what it switches (a socket also its power sensor). */
  renderGangsForm(this: Fp3dEditor, f: Furniture) {
    if (!this.hass) return nothing;
    const admin = this.isEditor;
    const gangs = gangsOf(f);
    const socket = f.type === "wall_socket";
    const switches = this.entityOptions((id) => /^(light|switch|input_boolean|fan)\./.test(id));
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const save = (next: Gang[]) => this.updateFurniture({ gangs: next.length > 1 || next[0]?.entity || next[0]?.power ? next : null });
    const setGang = (i: number, patch: Partial<Gang>) => save(gangs.map((g, k) => (k === i ? { ...g, ...patch } : g)));
    // more gangs make the frame wider (a frame turned by hand keeps its own size otherwise)
    const count = (n: number) => {
      const next = Array.from({ length: n }, (_, i) => gangs[i] ?? { entity: null });
      this.updateFurniture({ gangs: n > 1 || next[0].entity || next[0].power ? next : null, w: gangPlateWidth(n) });
    };
    return html`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t(socket ? "gang_count_socket" : "gang_count_switch")}
        <select ?disabled=${!admin} @change=${(e: Event) => count(Number((e.target as HTMLSelectElement).value))}>
          ${Array.from({ length: MAX_GANGS }, (_, i) => i + 1).map((n) => html`<option value=${n} ?selected=${gangs.length === n}>${n}</option>`)}
        </select></label
      >
      ${socket
        ? html`<label class="fp3d-field"
            >${this.t("socket_kind")}
            <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ variant: (e.target as HTMLSelectElement).value || null })}>
              ${(["", "outdoor"] as const).map((v) => html`<option value=${v} ?selected=${(f.variant ?? "") === v}>${this.t(v ? "socket_outdoor" : "socket_indoor")}</option>`)}
            </select></label
          >`
        : nothing}
      ${gangs.map(
        (g, i) => html`${this.entitySelect(`${this.t(socket ? "gang_socket" : "gang_switch")}${gangs.length > 1 ? ` ${i + 1}` : ""}`, g.entity, undefined, switches, (v) => setGang(i, { entity: v && v !== "none" ? v : null }))}
        ${socket ? this.entitySelect(`${this.t("furn_power")}${gangs.length > 1 ? ` ${i + 1}` : ""}`, g.power ?? null, undefined, power, (v) => setGang(i, { power: v && v !== "none" ? v : null })) : nothing}`,
      )}
      <p class="fp3d-sub fp3d-wide">${this.t(socket ? "gang_socket_hint" : "gang_switch_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!f.confirm} ?disabled=${!admin} @change=${(ev: Event) => this.updateFurniture({ confirm: (ev.target as HTMLInputElement).checked })} />
        ${this.t("device_confirm")}</label
      >
      <div class="fp3d-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>
    </div>`;
  }

  renderFurnitureLinks(this: Fp3dEditor, f: Furniture) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    // what "automatic" would choose: resolve with this item's own links cleared
    const autoPick = (key: "entity" | "power") =>
      this.keptForPlan(`furniture|${f.id}|${key}`, () => {
        const probe = structuredClone(this._doc.floors);
        for (const fl of probe) for (const x of fl.furniture) if (x.id === f.id) x[key] = null;
        return furnitureEntities(hass, probe).get(f.id)?.[key] ?? null;
      });
    const media = isMediaFurniture(f.type);
    const lamp = isLamp(f.type);
    const heating = isThermostatItem(f.type);
    // the field's label and likely domains from the item's kind, family and tags (#132)
    const field = linkField(f.type);
    const entities = this.entityOptions(linkFilter(hass, f.type), f.type);
    const power = this.entityOptions((id) => this.isPowerSensor(id));
    const doorSensors = f.type === "fridge_smart" ? this.entityOptions((id) => id.startsWith("binary_sensor.")) : [];
    return html`<div class="fp3d-form fp3d-links">
        ${f.type === "grid_point"
          ? html`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`
          : this.entitySelect(this.t(field.label), f.entity ?? null, autoPick("entity"), entities, (v) => this.updateFurniture({ entity: v }), field.domains)}
        ${f.type === "lamp_fan"
          ? html`${this.entitySelect(this.t("fan_entity"), f.fan ?? null, undefined, this.entityOptions((id) => id.startsWith("fan.")), (v) => this.updateFurniture({ fan: v && v !== "none" ? v : null }))}
              <p class="fp3d-sub fp3d-wide">${this.t("fan_hint")}</p>`
          : nothing}
        ${heating
          ? html`${this.entitySelect(this.t("heat_sensor"), f.heat_sensor ?? null, undefined, this.entityOptions((id) => /^(binary_sensor|sensor|switch|input_boolean|number)\./.test(id)), (v) => this.updateFurniture({ heat_sensor: v && v !== "none" ? v : null }))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`
          : nothing}
        ${shadeKind(f.type)
          ? html`${this.entitySelect(
                this.t("temp_sensor"),
                f.temp_sensor ?? null,
                itemTempSource(hass, { ...f, temp_sensor: null }),
                this.entityOptions((id) => (id.startsWith("sensor.") && hass.states[id]?.attributes.device_class === "temperature") || /^(climate|water_heater)\./.test(id)),
                (v) => this.updateFurniture({ temp_sensor: v }),
              )}
              <p class="fp3d-sub fp3d-wide">${this.t("temp_sensor_hint")}</p>`
          : nothing}
        ${f.type === "awning" ? this.renderAwningFields(f) : packMotion(f.type) ? this.renderMotionFields(f) : nothing}
        ${!lamp && !isEnergyDevice(f.type) && !hasScreen(f.type) ? this.renderStateLinks(f) : nothing}
        ${lamp && f.entity && f.entity !== "none"
          ? html`${this.entitySelect(this.t("furn_color_entity"), f.color_entity ?? null, undefined, this.entityOptions((id) => id.startsWith("light.") && id !== f.entity, f.entity), (v) => this.updateFurniture({ color_entity: v === "none" ? null : v }))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`
          : nothing}
        ${lamp ? this.glowScaleField(f.glow_scale, (v) => this.updateFurniture({ glow_scale: v })) : nothing}
        ${lamp && f.entity && f.entity !== "none"
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!f.only_color} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ only_color: (ev.target as HTMLInputElement).checked ? "#ffd400" : null })} />
                ${this.t("furn_only_color")}</label
              >
              ${f.only_color
                ? html`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${f.only_color} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ only_color: (ev.target as HTMLInputElement).value })} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`
                : nothing}`
          : nothing}
        ${volumeMeter(f.type)
          ? // a gas or water meter (#730): its reading in m³ or litres stands at the symbol, it draws no power
            html`${this.entitySelect(
                this.t("furn_meter_reading"),
                f.extra ?? null,
                undefined,
                this.entityOptions(
                  (id) =>
                    id.startsWith("sensor.") &&
                    (["gas", "water", "volume"].includes(String(hass.states[id]?.attributes.device_class ?? "")) || /^(m³|m3|L|l|ft³|gal|CCF)$/.test(String(hass.states[id]?.attributes.unit_of_measurement ?? ""))),
                ),
                (v) => this.updateFurniture({ extra: v === "none" ? null : v }),
              )}`
          : nothing}
        ${lamp || f.type === "grid_point" || volumeMeter(f.type)
          ? nothing
          : this.entitySelect(
              this.t(energyRole(f.type) === "meter" ? "energy_grid" : energyRole(f.type) === "inverter" ? "energy_solar_sensor" : energyRole(f.type) === "home_battery" ? "energy_battery_sensor" : "furn_power"),
              f.power ?? null,
              autoPick("power"),
              power,
              (v) => this.updateFurniture({ power: v }),
            )}
        ${!lamp && f.power && f.power !== "none" && !isEnergyDevice(f.type)
          ? html`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${f.run_w ? String(f.run_w) : ""}
                ?disabled=${!this.isEditor}
                @change=${(ev: Event) => {
                  const v = Number((ev.target as HTMLInputElement).value);
                  this.updateFurniture({ run_w: v > 0 ? Math.min(5000, Math.round(v)) : null });
                }}
            /></label>`
          : nothing}
        ${!lamp && f.power && f.power !== "none" && !isEnergyDevice(f.type) ? this.circuitSelect(f.circuit ?? null, f.power, (v) => this.updateFurniture({ circuit: v })) : nothing}
        ${!lamp && f.power && f.power !== "none" && !isEnergyDevice(f.type) ? this.wireEnergySelect(f.energy ?? null, f.power, (v) => this.updateFurniture({ energy: v })) : nothing}
        ${!lamp && !["grid_point", "meter", "inverter", "home_battery"].includes(energyRole(f.type) ?? f.type)
          ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!f.holo} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ holo: (ev.target as HTMLInputElement).checked })} />
              ${this.t("furn_holo")}</label
            >`
          : energyRole(f.type) === "inverter"
            ? html`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${f.plant_card !== false} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ plant_card: (ev.target as HTMLInputElement).checked ? undefined : false })} />
                ${this.t("furn_plant_card")}</label
              >
              ${f.plant_card !== false
                ? html`${this.len(this.t("holo_right"), f.plant_right ?? 0, (v) => this.updateFurniture({ plant_right: Math.min(30, Math.max(-30, round(v))) || undefined }), 0.25)}
                  ${this.len(this.t("holo_up"), f.plant_up ?? 0, (v) => this.updateFurniture({ plant_up: Math.min(30, Math.max(-30, round(v))) || undefined }), 0.25)}`
                : nothing}`
            : nothing}
      </div>
      ${energyRole(f.type) === "meter"
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"), f.export ?? null, undefined, power, (v) => this.updateFurniture({ export: v === "none" ? null : v }))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`
        : nothing}
      ${energyRole(f.type) === "inverter" && (this._doc.settings.roof.solar ?? []).length
        ? (() => {
            // which strings feed this inverter, so it can be told apart from the others (#213)
            const strings = (this._doc.settings.roof.strings ?? []).filter((st) => st.inverter === f.id).map((st) => st.name);
            return html`<p class="fp3d-sub fp3d-wide">${strings.length ? this.t("inverter_strings", { names: strings.join(", ") }) : this.t("inverter_strings_none")}</p>`;
          })()
        : nothing}
      ${energyRole(f.type) === "home_battery"
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(
              this.t("furn_soc"),
              f.soc ?? null,
              undefined,
              this.entityOptions((id) => numberish(id) && (hass.states[id]?.attributes.device_class === "battery" || hass.states[id]?.attributes.unit_of_measurement === "%")),
              (v) => this.updateFurniture({ soc: v === "none" ? null : v }),
            )}
            ${this.entitySelect(this.t("furn_charge"), f.charge ?? null, undefined, power, (v) => this.updateFurniture({ charge: v === "none" ? null : v }))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`
        : nothing}
      ${energyRole(f.type) === "wallbox"
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(
              this.t("furn_wallbox_status"),
              f.status ?? null,
              undefined,
              this.entityOptions((id) => binaryish(id) || numberish(id)),
              (v) => this.updateFurniture({ status: v === "none" ? null : v }),
            )}
          </div>`
        : nothing}
      ${!lamp && !volumeMeter(f.type)
        ? this.entitySelect(this.t("furn_extra"), f.extra ?? null, undefined, this.entityOptions((id) => id.startsWith("sensor.")), (v) => this.updateFurniture({ extra: v === "none" ? null : v }))
        : nothing}
      ${!lamp || f.entity
        ? html`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!f.confirm} ?disabled=${!this.isEditor} @change=${(ev: Event) => this.updateFurniture({ confirm: (ev.target as HTMLInputElement).checked })} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(f.marker ?? null, (v) => this.updateFurniture({ marker: v }))}${this.iconInput(f.icon, (v) => this.updateFurniture({ icon: v }))}</div>`
        : nothing}
      ${isRobotVacuum(f.type)
        ? html`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(
              this.t("furn_robot_room"),
              f.room_sensor ?? null,
              robotRoomSensor(hass, furnitureEntities(hass, this._doc.floors).get(f.id)?.entity ?? null, null),
              this.entityOptions((id) => numberish(id)),
              (v) => this.updateFurniture({ room_sensor: v }),
            )}
          </div>`
        : nothing}
      ${f.type === "fridge_smart"
        ? html`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"), f.door_left ?? null, undefined, doorSensors, (v) => this.updateFurniture({ door_left: v }))}
              ${this.entitySelect(this.t("furn_door_right"), f.door_right ?? null, undefined, doorSensors, (v) => this.updateFurniture({ door_right: v }))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`
        : nothing}
      ${hasScreen(f.type) ? this.renderPictureRules(f) : nothing}
      <p class="fp3d-sub">${this.t(lamp ? (f.type === "lamp_pendant" ? "lamp_hint_pendant" : "lamp_hint") : media ? "furn_links_hint_tv" : isRobotVacuum(f.type) ? "robot_hint" : "furn_links_hint")}</p>`;
  }

  /** Parking spot: presence sensor, the vehicle shown, its size, and an optional vehicle type sensor. */
  renderParkingForm(this: Fp3dEditor, f: Furniture) {
    const admin = this.isEditor;
    const lang = this.hass?.language ?? "en";
    const vehicles = (this.packs ?? []).flatMap((p) => p.items.filter((it) => it.vehicle).map((it) => ({ id: packType(p.id, it.id), label: `${packItemName(it, lang)} · ${packName(p, lang)}` })));
    // presence: GPS trackers (a car's own integration, a phone) before the many network trackers of a router (#227)
    const rank = (id: string) => {
      if (!id.startsWith("device_tracker.")) return 1;
      return this.hass?.states[id]?.attributes.source_type === "router" ? 2 : 0;
    };
    const presence = [...this.entityOptions((id) => /^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(id))].sort((a, b) => rank(a.id) - rank(b.id));
    const typeSensors = this.entityOptions((id) => /^(sensor|input_select|select|input_text)\./.test(id));
    const typeState = f.type_entity ? this.hass?.states[f.type_entity] : undefined;
    const options = Array.isArray(typeState?.attributes.options) ? (typeState.attributes.options as string[]) : [];
    const types = f.types ?? [];
    const setTypes = (next: { state: string; vehicle: string }[]) => this.updateFurniture({ types: next });
    const vehicleSelect = (value: string | null, onChange: (v: string | null) => void) =>
      html`<select ?disabled=${!admin} @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value || null)}>
        <option value="" ?selected=${!value}>${this.t("parking_vehicle_none")}</option>
        ${vehicles.map((v) => html`<option value=${v.id} ?selected=${v.id === value}>${v.label}</option>`)}
      </select>`;
    // the room's height against the vehicle's: a hint when it would not fit
    const floor = this.floor;
    const room = floor?.rooms.find((r) => r.points.length >= 3 && pointInPolygon([f.x, f.z], r.points));
    const item = f.vehicle ? packInfo(f.vehicle) : undefined;
    const carH = item ? item.size[2] * (f.scale ?? 1) : 0;
    const tooTall = !!room && !!floor && carH > floor.height + 1e-6;
    return html`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"), f.entity ?? null, undefined, presence, (v) => this.updateFurniture({ entity: v === "none" ? null : v }))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${vehicleSelect(f.vehicle ?? null, (v) => this.updateFurniture({ vehicle: v }))}</label>
        ${vehicles.length ? nothing : html`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"), Math.round((f.scale ?? 1) * 100), (v) => this.updateFurniture({ scale: Math.min(150, Math.max(30, v)) / 100 }), 5, 30)}
        ${this.entitySelect(this.t("parking_type_entity"), f.type_entity ?? null, undefined, typeSensors, (v) => this.updateFurniture({ type_entity: v === "none" ? null : v }))}
        ${f.type_entity
          ? html`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${types.map(
                (t, i) => html`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${t.state}
                    ?disabled=${!admin}
                    @change=${(e: Event) => setTypes(types.map((x, j) => (j === i ? { ...x, state: (e.target as HTMLInputElement).value } : x)))}
                  />
                  ${vehicleSelect(t.vehicle, (v) => setTypes(types.map((x, j) => (j === i ? { ...x, vehicle: v ?? "" } : x))))}
                  <button class="fp3d-btn" ?disabled=${!admin} title=${this.t("delete")} @click=${() => setTypes(types.filter((_, j) => j !== i))}>✕</button>
                </div>`,
              )}
              <datalist id="fp3d-parking-states">${options.map((o) => html`<option value=${o}></option>`)}</datalist>
              ${admin
                ? html`<button class="fp3d-btn" @click=${() => setTypes([...types, { state: options[types.length] ?? "", vehicle: vehicles[0]?.id ?? "" }])}>${this.t("parking_add_type")}</button>`
                : nothing}
            </div>`
          : nothing}
      </div>
      ${tooTall ? html`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall", { car: formatNumber(this.hass, carH, 2), room: formatNumber(this.hass, floor!.height, 2) })}</p>` : nothing}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(f)}`;
  }

  /** Auto Pro: the car's entities – one entity of the car's device is enough, the roles are found beside it. */
  renderCarForm(this: Fp3dEditor, f: Furniture) {
    if (!this.hass) return nothing;
    const hass = this.hass;
    const car = f.car ?? {};
    const auto = carEntities(hass, { entity: f.entity, car: { device: car.device } });
    const set = (patch: Partial<CarLinks>) => this.updateFurniture({ car: { ...car, ...patch } });
    const any = this.entityOptions((id) => /^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(id));
    const role = (key: keyof CarLinks & keyof CarEntities, label: I18nKey, options: { id: string; label: string }[]) =>
      this.entitySelect(this.t(label), car[key] ?? null, auto[key], options, (v) => set({ [key]: v === "none" ? "none" : v }));
    return html`<section>
      <h3>🚗 ${this.t("section_car")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"), car.device ?? null, undefined, any, (v) => set({ device: v === "none" ? null : v }))}
        ${role("soc", "car_soc", this.entityOptions((id) => numberish(id)))}
        ${role("range", "car_range", this.entityOptions((id) => numberish(id)))}
        ${role("charging", "car_charging", this.entityOptions((id) => /^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(id)))}
        ${role("plugged", "car_plugged", this.entityOptions((id) => binaryish(id)))}
        ${role("lock", "car_lock", this.entityOptions((id) => /^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(id)))}
        ${role("climate", "car_climate", this.entityOptions((id) => /^(climate|switch|binary_sensor|input_boolean)\./.test(id)))}
        ${role("tracker", "car_tracker", this.entityOptions((id) => id.startsWith("device_tracker.")))}
      </div>
    </section>`;
  }

  /** Ids of the stored pictures any screen of the plan uses (in order of first use). */
  storedPictures(this: Fp3dEditor): string[] {
    const ids: string[] = [];
    for (const floor of this._doc.floors) {
      for (const m of floor.furniture) {
        for (const r of m.pictures ?? []) if (r.image && !/^https?:\/\//.test(r.image) && !r.image.startsWith("camera:") && !ids.includes(r.image)) ids.push(r.image);
      }
    }
    return ids;
  }

  /**
   * Pictures a screen shows by an entity's state: the rules are grouped by entity (and attribute), each
   * group lists its values with a picture; in order, the first matching rule wins.
   */
  renderPictureRules(this: Fp3dEditor, f: Furniture) {
    const admin = this.isEditor;
    const rules = f.pictures ?? [];
    const set = (next: ScreenPicture[]) => this.updateFurniture({ pictures: next });
    const entities = this.entityOptions(() => true);
    const scalar = (v: unknown) => ["string", "number", "boolean"].includes(typeof v);
    const attributes = (id: string) =>
      Object.entries(this.hass?.states[id]?.attributes ?? {})
        .filter(([k, v]) => scalar(v) && k !== "friendly_name" && k !== "icon")
        .map(([k]) => k);
    const current = (entity: string, attribute: string | null) => {
      const st = this.hass?.states[entity];
      if (!st) return "";
      return String((attribute ? st.attributes[attribute] : st.state) ?? "");
    };
    const suggestions = (entity: string, attribute: string | null) => {
      const st = this.hass?.states[entity];
      const options = !attribute && Array.isArray(st?.attributes.options) ? (st.attributes.options as string[]) : [];
      return options.length ? options : [current(entity, attribute)];
    };
    // groups in order of first appearance: one per entity + attribute
    const keyOf = (r: { entity: string; attribute?: string | null }) => `${r.entity}\u0000${r.attribute ?? ""}`;
    const groups: { entity: string; attribute: string | null; rows: number[] }[] = [];
    rules.forEach((r, i) => {
      const g = groups.find((x) => keyOf(x) === keyOf(r));
      if (g) g.rows.push(i);
      else groups.push({ entity: r.entity, attribute: r.attribute ?? null, rows: [i] });
    });
    const patchGroup = (g: (typeof groups)[number], change: Partial<ScreenPicture>) => set(rules.map((x, i) => (g.rows.includes(i) ? { ...x, ...change } : x)));
    const patchRow = (i: number, change: Partial<ScreenPicture>) => set(rules.map((x, j) => (j === i ? { ...x, ...change } : x)));
    const stored = this.storedPictures();
    const cameras = this.entityOptions((id) => id.startsWith("camera."));
    const cameraOf = (r: ScreenPicture) => (r.image.startsWith("camera:") ? r.image.slice(7) : null);
    return html`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${rules.length
        ? html`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!admin} @change=${(e: Event) => this.updateFurniture({ screen_bg: (e.target as HTMLSelectElement).value as "black" | "white" })}>
              <option value="black" ?selected=${(f.screen_bg ?? "black") === "black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${f.screen_bg === "white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`
        : nothing}
      ${groups.map(
        (g) => html`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${entities}
            .value=${g.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!admin}
            @change=${(e: CustomEvent<{ value: string }>) => {
              e.stopPropagation();
              patchGroup(g, { entity: e.detail.value });
            }}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!admin}
            title=${this.t("picture_attribute")}
            @change=${(e: Event) => {
              const attribute = (e.target as HTMLSelectElement).value || null;
              // the values of the group start over with what the entity reports now
              const now = current(g.entity, attribute);
              set(rules.map((x, i) => (g.rows.includes(i) ? { ...x, attribute, state: g.rows[0] === i ? now : x.state } : x)));
            }}
          >
            <option value="" ?selected=${!g.attribute}>${this.t("picture_state_of")}</option>
            ${attributes(g.entity).map((a) => html`<option value=${a} ?selected=${a === g.attribute}>${a}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current", { value: current(g.entity, g.attribute) || "–" })}</span>
          ${g.rows.map((i) => {
            const r = rules[i];
            const hit = !!this.hass && pictureRuleMatches(this.hass, r);
            return html`<div class="fp3d-picture-row ${hit ? "fp3d-rule-hit" : ""}">
              <input
                type="text"
                list="fp3d-picture-states-${i}"
                placeholder=${this.t("picture_state")}
                .value=${r.state}
                ?disabled=${!admin}
                @change=${(e: Event) => patchRow(i, { state: (e.target as HTMLInputElement).value })}
              />
              <datalist id="fp3d-picture-states-${i}"><option value="*"></option>${suggestions(g.entity, g.attribute).map((v) => html`<option value=${v}></option>`)}</datalist>
              ${this._images[r.image] ? html`<img class="fp3d-picture-thumb" src=${this._images[r.image].url} alt="" /> ` : nothing}
              ${cameraOf(r) && this.hass?.states[cameraOf(r)!]?.attributes.entity_picture
                ? html`<img class="fp3d-picture-thumb" src=${String(this.hass.states[cameraOf(r)!].attributes.entity_picture)} alt="" />`
                : nothing}
              <label class="fp3d-btn fp3d-picture-pick">
                ${r.image ? this.t("picture_change") : this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!admin} @change=${(e: Event) => void this.uploadPicture(e, f, i)} />
              </label>
              ${stored.filter((id) => id !== r.image).length
                ? html`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${stored
                      .filter((id) => id !== r.image && this._images[id])
                      .map((id) => html`<button class="fp3d-picture-reuse-btn" ?disabled=${!admin} @click=${() => patchRow(i, { image: id })}><img src=${this._images[id].url} alt="" /></button>`)}
                  </div>`
                : nothing}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(r.image) ? r.image : ""}
                ?disabled=${!admin}
                @change=${(e: Event) => {
                  const v = (e.target as HTMLInputElement).value.trim();
                  if (v) patchRow(i, { image: v });
                }}
              />
              ${cameras.length
                ? html`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${cameras}
                    .fixed=${[{ id: "none", label: this.t("picture_camera_none") }]}
                    .value=${cameraOf(r) ?? "none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!admin}
                    @change=${(e: CustomEvent<{ value: string }>) => {
                      e.stopPropagation();
                      if (e.detail.value !== "none") patchRow(i, { image: `camera:${e.detail.value}` });
                      else if (cameraOf(r)) patchRow(i, { image: "" });
                    }}
                  ></fp3d-entity-picker>`
                : nothing}
              <span class="fp3d-sub">${hit ? this.t("picture_matches") : ""}</span>
              <button class="fp3d-btn" ?disabled=${!admin} title=${this.t("delete")} @click=${() => set(rules.filter((_, j) => j !== i))}>✕</button>
            </div>`;
          })}
          ${admin
            ? html`<button class="fp3d-btn" @click=${() => set([...rules, { entity: g.entity, attribute: g.attribute, state: current(g.entity, g.attribute), image: "" }])}>
                ${this.t("picture_add_value")}
              </button>`
            : nothing}
        </div>`,
      )}
      ${admin
        ? html`<button class="fp3d-btn" @click=${() => set([...rules, { entity: entities[0]?.id ?? "", attribute: null, state: "on", image: "" }])}>${this.t("picture_add_entity")}</button>`
        : nothing}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`;
  }

  /** Stores a picture for a rule, scaled down to what a screen in 3D needs. */
  async uploadPicture(this: Fp3dEditor, e: Event, f: Furniture, index: number): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = "";
    if (!file) return;
    try {
      await this.storePicture(file, f, index);
    } catch (err) {
      await this.tell(this.t("picture_failed", { error: errorText(err) }));
    }
  }

  async storePicture(this: Fp3dEditor, file: File, f: Furniture, index: number): Promise<void> {
    const bitmap = await createImageBitmap(file);
    const k = Math.min(1, 512 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * k);
    canvas.height = Math.round(bitmap.height * k);
    canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL(file.type === "image/png" ? "image/png" : "image/jpeg", 0.85);
    const imageId = uid("pic");
    await storeImage(this.hass, imageId, data, this.home);
    this._images = { ...this._images, [imageId]: { url: data, aspect: canvas.height / canvas.width } };
    const rules = this.furnitureItem?.id === f.id ? (this.furnitureItem.pictures ?? []) : (f.pictures ?? []);
    this.updateFurniture({ pictures: rules.map((x, j) => (j === index ? { ...x, image: imageId } : x)) });
  }
}
