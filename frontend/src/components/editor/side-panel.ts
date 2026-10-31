// The side panel: pinned or folded, its grip and width, what it shows for the selection (renderSide), the items
// list, the help links and the Settings page topics.

import { html, nothing, type TemplateResult } from "lit";
import { unitLabel } from "../../units.ts";
import { itemsByRoom } from "../../item-list.ts";
import type { ItemRow } from "../item-list-view.ts";
import { SHOW_PRESENCE } from "../../flags.ts";
import { ISSUES_URL } from "../extensions.ts";
import { type Floor, type Furniture } from "../../model.ts";
import { furnitureName } from "../../furniture-names.ts";
import { type EditorTopic } from "./helpers.ts";
import type { Fp3dEditor } from "../editor.ts";

/** SidePanelPart: methods of `Fp3dEditor`, copied onto its prototype by editor.ts (see parts.ts). */
export class SidePanelPart {
  /** Where to report a problem and where to propose an idea. */
  renderHelpLinks(this: Fp3dEditor) {
    return html`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href=${ISSUES_URL} target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
      </div>
    </section>`;
  }

  /** A part of the editor on the Settings page (#139): drawn as in the editor, around it only its form. */
  renderTopic(this: Fp3dEditor, topic: EditorTopic): TemplateResult {
    const doc = this._doc;
    if (!doc) return html``;
    let body: unknown = nothing;
    if (topic === "director_triggers") {
      const placed = [...new Set(doc.floors.flatMap((f) => f.placements.map((p) => p.entity_id)))];
      body = this.renderDirectorTriggers(doc.settings.director ?? {}, placed);
    } else if (topic === "favorites") body = this.renderFavorites();
    else if (topic === "own_buttons") body = this.renderOwnButtons();
    else if (topic === "media_presets") body = this.renderMediaPresets();
    else if (topic === "editors") body = this.renderEditors();
    else if (topic === "tablet_users") {
      this.askEditors();
      body = this.editorsList ? html`<div class="fp3d-form">${this.renderTabletUsers(this.editorsList.users)}</div>` : html`<p class="fp3d-sub">${this.t("loading")}</p>`;
    } else if (topic === "backup") body = this.renderBackup();
    else if (topic === "energy_balance") body = this.renderEnergyBalance();
    else if (topic === "hologram") body = this.renderHologramSettings();
    else if (topic === "presence") body = this.renderPresenceSettings();
    return html`<div class="fp3d-embed">${body}</div>`;
  }

  setSidePinned(this: Fp3dEditor, pinned: boolean): void {
    this._sidePinned = pinned;
    this._sideOpen = false;
    try {
      localStorage.setItem("home3d.sidePinned", pinned ? "1" : "0");
    } catch {
      // no storage
    }
  }

  /** Fold the sidebar to its strip, or unfold it (beside the 3D pane: over the pane, while needed). */
  setSideFolded(this: Fp3dEditor, folded: boolean): void {
    if (this._split && !this._sidePinned) {
      this._sideOpen = !folded;
      return;
    }
    this._sideMin = folded;
    try {
      localStorage.setItem("home3d.sideMin", folded ? "1" : "0");
    } catch {
      // no storage
    }
  }

  /**
   * The sidebar: beside the plan, folded to a narrow strip on request (more room for the plan); next to the 3D pane
   * and not pinned, folded while idle and opened over the pane.
   */
  /** The grip at the side bar's left edge: drag it to make the bar wider or narrower (#620). */
  renderSideGrip(this: Fp3dEditor) {
    if (this.narrow) return nothing;
    const move = (e: PointerEvent) => {
      if (!this.sideDrag) return;
      this._sideWidth = Math.min(640, Math.max(280, Math.round(this.sideDrag.width + (this.sideDrag.x - e.clientX))));
    };
    const up = (e: PointerEvent) => {
      if (!this.sideDrag) return;
      this.sideDrag = null;
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      try {
        localStorage.setItem("home3d.sideWidth", String(this._sideWidth));
      } catch {
        // no storage: the width lasts for this visit
      }
    };
    return html`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${(e: PointerEvent) => {
        this.sideDrag = { x: e.clientX, width: this._sideWidth };
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        e.preventDefault();
      }}
      @pointermove=${move}
      @pointerup=${up}
      @pointercancel=${up}
    ></div>`;
  }

  renderAside(this: Fp3dEditor, floor: Floor | undefined) {
    const folding = this._split && !this._sidePinned && !this.narrow;
    const folded = !this.narrow && (folding ? !this._sideOpen : this._sideMin);
    if (folded) {
      return html`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${() => this.setSideFolded(false)}>‹</button>
        ${this._furnitureId || this._deviceId || this._openingId || this._roomId
          ? html`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${() => this.setSideFolded(false)}>⚙</button>`
          : nothing}
      </aside>`;
    }
    if (!folding) return html`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(floor)}</aside>`;
    // open over the 3D pane, so the pane keeps its size
    return html`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderSideGrip()}
        ${this.renderPinRow(true)}
        ${this.renderSide(floor)}
      </aside>`;
  }

  renderPinRow(this: Fp3dEditor, _overlay = false) {
    if (this.narrow) return nothing;
    const fold = html`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${() => this.setSideFolded(true)}>${this.t("side_close")} ›</button>`;
    if (!this._split) return html`<div class="fp3d-pin-row">${fold}</div>`;
    return html`<div class="fp3d-pin-row">
      ${fold}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${() => this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned ? "side_pinned" : "side_pin")}
      </button>
    </div>`;
  }

  renderSide(this: Fp3dEditor, floor: Floor | undefined) {
    const floors = this._doc?.floors ?? [];
    const room = this.room;
    const admin = this.isEditor;
    const areas = Object.values(this.hass?.areas ?? {}).sort((a, b) => a.name.localeCompare(b.name));
    if (this._tool === "roof") return this.renderRoofPanel();
    if (this._tool === "energy") return this.renderEnergyPanel();
    if (this._tool === "pool") return this.renderPoolPanel(floor);
    // furnishing: the library and the selected item come first
    if (this._tool === "furniture" && floor && admin) {
      // a way back to the library: the item panel takes its place while an item is chosen (#70)
      return html`${this.furnitureItem
          ? html`<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", this._roomId)}>‹ ${this.t("back_to_library")}</button>
              ${this.renderFurnitureForm(this.furnitureItem)}`
          : nothing}
        ${this.renderFurnitureLibrary()}`;
    }
    // a selected item shows only its own form, with a way back to the floor and room
    const item =
      this._tool === "measure"
        ? null
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.opening
            ? this.renderOpeningForm(this.opening)
            : this.device
              ? this.renderDeviceForm(this.device)
              : this.outdoorArea
                ? this.renderOutdoorForm(this.outdoorArea)
                : this.freeWall
                  ? this.renderFreeWallForm(this.freeWall)
                  : null;
    // Doors & windows mode: the kind the next tap adds, chosen up front (#63); it stays within reach while an
    // opening is selected, so choosing it never has to go through that opening's own chips (#159)
    const nextKind =
      this._tool === "opening" && admin && floor
        ? html`<section>
            <h3>${this.t("opening_next_kind")}</h3>
            ${this.renderOpeningKinds(this._openingPreset, (p) => this.pickOpeningKind(p))}
          </section>`
        : nothing;
    if (item) {
      return html`${nextKind}<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", this._roomId)}>‹ ${this.t(room ? "back_to_room" : "back_to_floor", { room: room?.name ?? "" })}</button>
        ${item}`;
    }
    if (room && this._tool !== "measure") {
      return html`${nextKind}<button class="fp3d-btn fp3d-back" @click=${() => this.selectItem("room", null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`;
    }
    return html`
      ${nextKind} ${admin ? nothing : html`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${floor ? this.t("floor_settings_of", { floor: floor.name }) : this.t("floors")}</h3>
        ${floors.length
          ? nothing
          : html`${admin ? html`<button class="fp3d-btn fp3d-primary" @click=${() => this.addFloor()}>${this.t("first_floor_add")}</button>` : nothing}
              <p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${admin && floor ? this.renderSettingsLink("general", "lock_plan", this._doc.settings.lock_plan ? "plan_locked" : "plan_lock", this._doc.settings.lock_plan ? "🔒" : "🔓") : nothing}
        ${floor
          ? html`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${floor.name} ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ name: (e.target as HTMLInputElement).value })}
              /></label>
              ${this.len(this.t("elevation"), floor.elevation, (v) => this.updateFloor({ elevation: v }))}
              ${admin
                ? html`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${unitLabel(this.t("floor_shift"), this.unit)}</span>
                    <input type=${this.unit === "imperial" ? "text" : "number"} step="0.05" .value=${this.lenValue(this._shiftX)} aria-label="X" @change=${(e: Event) => (this._shiftX = this.readLen((e.target as HTMLInputElement).value) ?? 0)} />
                    <input type=${this.unit === "imperial" ? "text" : "number"} step="0.05" .value=${this.lenValue(this._shiftZ)} aria-label="Z" @change=${(e: Event) => (this._shiftZ = this.readLen((e.target as HTMLInputElement).value) ?? 0)} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX && !this._shiftZ} @click=${() => this.shiftFloor(this._shiftX, this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${() => this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${() => this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${floor.start_view ? html`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${() => this.updateFloor({ start_view: null })}>↺</button>` : nothing}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${(ev: Event) => (this._shiftAll = (ev.target as HTMLInputElement).checked)} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`
                : nothing}
              ${this.len(this.t("height"), floor.height, (v) => this.updateFloor({ height: Math.max(1, v) }), 0.05, 1)}
              ${Object.keys(this.hass?.floors ?? {}).length
                ? html`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!admin} @change=${(e: Event) => this.updateFloor({ ha_floor: (e.target as HTMLSelectElement).value || null })}>
                      <option value="" ?selected=${!floor.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors ?? {})
                        .filter((f) => f.floor_id === floor.ha_floor || !floors.some((x) => x.ha_floor === f.floor_id))
                        .map((f) => html`<option value=${f.floor_id} ?selected=${f.floor_id === floor.ha_floor}>${f.name}</option>`)}
                    </select></label
                  >`
                : nothing}
              ${admin && this.unplacedAreas(floor).length
                ? html`<p class="fp3d-sub fp3d-wide fp3d-area-import">
                    ${this.t("area_rooms_label")}
                    <button class="fp3d-link" title=${this.t("area_rooms_hint")} @click=${() => this.addAreaRooms(floor)}>
                      ${this.t("area_rooms", { n: this.unplacedAreas(floor).length })}
                    </button>
                    ${this.homeName ? html`<br /><small class="fp3d-area-home">${this.t("area_rooms_note", { home: this.homeName })}</small>` : nothing}
                  </p>`
                : nothing}
              ${admin
                ? html`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${() => this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${() => this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteFloor()}>${this.t("delete_floor")}</button>
                    ${this.renderPasteButton()}
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${floor.rooms.length < 2} @click=${() => this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                    <button class="fp3d-btn" title=${this.t("straighten_hint")} ?disabled=${!floor.rooms.length} @click=${() => this.straightenFloor()}>
                      ${this.t("straighten")}
                    </button>
                  </div>
                  ${this._notice ? html`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>` : nothing}`
                : nothing}
            </div>`
          : nothing}
      </section>
      ${this._tool === "measure" && floor
        ? this.renderMeasureForm()
        : this.freeWall
        ? this.renderFreeWallForm(this.freeWall)
        : this.outdoorArea
        ? this.renderOutdoorForm(this.outdoorArea)
        : this.opening
        ? this.renderOpeningForm(this.opening)
        : this.furnitureItem
          ? this.renderFurnitureForm(this.furnitureItem)
          : this.device
            ? this.renderDeviceForm(this.device)
          : room
            ? html`${this.renderRoomForm(room, areas)} ${this.renderDeviceList(room)}`
            : floor
              ? html`${this.renderRoomList(floor)} ${this.renderItemsList(floor.furniture, true)} ${this.renderUnplaced()}`
              : nothing}
      ${this.renderHelpLinks()}
      ${admin && SHOW_PRESENCE ? this.renderPresenceSettings() : nothing}
      ${floor && admin ? this.renderBackgroundForm(floor) : nothing}
    `;
  }

  /**
   * The items of a floor (with their room) or of one room (#75): select one that is hard to hit in the plan,
   * hide it in the plan to reach what is under it, or delete it. The list draws only the rows in view.
   */
  renderItemsList(this: Fp3dEditor, items: Furniture[], withRoom: boolean) {
    const floor = this.floor;
    if (!floor || !items.length) return nothing;
    const names = withRoom ? new Map(floor.rooms.map((r) => [r.id, r.name])) : null;
    const byRoom = withRoom ? itemsByRoom(floor.rooms, items) : null;
    const roomOf = new Map<string, string>();
    if (byRoom && names) for (const [id, list] of byRoom) for (const f of list) roomOf.set(f.id, id ? (names.get(id) ?? "") : "");
    const set = this._furnitureId ? this.selection() : [];
    const rows: ItemRow[] = items.map((f) => ({
      id: f.id,
      name: f.name || furnitureName(this.hass, f.type),
      note: roomOf.get(f.id),
      hidden: this._hiddenItems.includes(f.id),
      selected: set.includes(f.id),
    }));
    return html`<details class="fp3d-points fp3d-items">
      <summary>${this.t("items_list")} (${items.length})</summary>
      <fp3d-item-list
        .rows=${rows}
        .texts=${{ hide: this.t("item_hide"), show: this.t("item_show"), remove: this.t("delete") }}
        ?editable=${this.isEditor}
        @item-select=${(e: CustomEvent<{ id: string }>) => this.selectFromList(e.detail.id)}
        @item-hide=${(e: CustomEvent<{ id: string }>) => this.toggleItemHidden(e.detail.id)}
        @item-delete=${(e: CustomEvent<{ id: string }>) => void this.deleteFromList(e.detail.id)}
      ></fp3d-item-list>
    </details>`;
  }
}
