// Selection: choosing items (plan, lists, 3D), multi selection and blocks, locking (fixed items), the context
// menu, copy and paste (#74), asking before deleting.

import { html, nothing, svg } from "lit";
import { firmHit, itemsAt, minHitPx } from "../../geometry/pick.ts";
import { itemsByRoom } from "../../item-list.ts";
import { furnitureFootprint } from "../../model.ts";
import { copyItems, pasteItems, withKeys, type ItemClip } from "../../clipboard.ts";
import { isFixed, uid, type Floor, type Vec2 } from "../../model.ts";
import { askConfirm, tell } from "../../ask.ts";
import { furnitureName } from "../../furniture-names.ts";
import { type FixKind, round } from "./helpers.ts";
import type { Fp3dEditor } from "../editor.ts";

/** The editor's item clipboard (#74): in memory, shared by every editor on the page, kept while the Editor tab is closed. */
let clipboard: ItemClip | null = null;

/** SelectionPart: methods of `Fp3dEditor`, copied onto its prototype by editor.ts (see parts.ts). */
export class SelectionPart {
  /** The item of a fixable kind on a floor. */
  fixItem(this: Fp3dEditor, floor: Floor | undefined, kind: FixKind, id: string): object | undefined {
    if (!floor) return undefined;
    switch (kind) {
      case "room":
        return floor.rooms.find((r) => r.id === id);
      case "opening":
        return floor.openings.find((o) => o.id === id);
      case "furniture":
        return floor.furniture.find((m) => m.id === id);
      case "device":
        return floor.placements.find((p) => p.entity_id === id);
      case "wall":
        return (floor.walls ?? []).find((w) => w.id === id);
      case "outdoor":
        return floor.outdoor.find((a) => a.id === id);
    }
  }

  /** Fixed by itself, or (rooms, walls, doors, windows, outdoor areas) by the plan lock. */
  isFixedItem(this: Fp3dEditor, kind: FixKind, id: string): boolean {
    return isFixed(this.fixItem(this.floor, kind, id), kind !== "furniture" && kind !== "device", this._doc.settings);
  }

  toggleFixed(this: Fp3dEditor, kind: FixKind, id: string): void {
    // rooms, walls, doors, windows and outdoor areas follow the plan lock alone
    if (!this.isEditor || (kind !== "furniture" && kind !== "device")) return;
    const next = !this.isFixedItem(kind, id);
    // released: the "fixed, release first" hint has done its job
    if (!next) this._fixedHint = false;
    this.change((_, floor) => {
      const item = this.fixItem(floor, kind, id) as { locked?: boolean | null } | undefined;
      if (item) item.locked = next;
    });
  }

  toggleLockPlan(this: Fp3dEditor): void {
    if (!this.isEditor) return;
    if (this._doc.settings.lock_plan) this._fixedHint = false;
    this.change((doc) => (doc.settings.lock_plan = !doc.settings.lock_plan));
  }

  /** A fixed item is only deleted after asking. */
  async confirmFixedDelete(this: Fp3dEditor, kind: FixKind, id: string): Promise<boolean> {
    return !this.isFixedItem(kind, id) || (await this.ask(this.t("fixed_delete_confirm")));
  }

  /** A yes / no question in the app's own dialog (#59); `ok` names what yes does, a warning unless `danger` is false. */
  ask(this: Fp3dEditor, text: string, ok: string = this.t("delete"), danger = true): Promise<boolean> {
    return askConfirm(text, { ok, cancel: this.t("cancel"), danger });
  }

  /** A message in the app's own dialog (#59). */
  tell(this: Fp3dEditor, text: string): Promise<void> {
    return tell(text, { ok: this.t("ask_ok") });
  }

  /** Select the item under a plan point and open its menu. */
  /**
   * The item a plan press lands on (#72): its drawn shape grown to a 24 px target (44 px on touch), smallest item
   * first. A press on a room corner or wall-end handle is never an item.
   */
  pickItem(this: Fp3dEditor, target: Element, world: Vec2, pointerType: string): string | null {
    if (!this.floor || target.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]")) return null;
    return this.itemHits(target, world, pointerType)[0] ?? target.closest("[data-furniture]")?.getAttribute("data-furniture") ?? null;
  }

  /** The shown items under a plan press, best first (#72); none on a room corner or wall-end handle. */
  itemHits(this: Fp3dEditor, target: Element, world: Vec2, pointerType: string): string[] {
    if (!this.floor || target.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]")) return [];
    const hidden = this._hiddenItems;
    return itemsAt(this.floor.furniture, world, this._view.scale, minHitPx(pointerType), hidden.length ? (f) => hidden.includes(f.id) : undefined);
  }

  /** Whether a shown item is pressed on its shape (a thin one's grown depth included, #132). */
  firmItemAt(this: Fp3dEditor, world: Vec2, pointerType: string): boolean {
    const hidden = this._hiddenItems;
    return (this.floor?.furniture ?? []).some((f) => !hidden.includes(f.id) && firmHit(f, world, this._view.scale, minHitPx(pointerType)));
  }

  /** Hide an item in this editor's plan, or show it again (#75); a hidden selected item is let go. */
  toggleItemHidden(this: Fp3dEditor, id: string): void {
    const hidden = this._hiddenItems;
    this._hiddenItems = hidden.includes(id) ? hidden.filter((x) => x !== id) : [...hidden, id];
    if (this._hiddenItems.includes(id) && this.selection().includes(id)) this.selectItem("room", this._roomId);
  }

  /** The items Tab cycles through (#75): the shown ones in the selected item's room, else on the floor. */
  tabItems(this: Fp3dEditor): string[] {
    const floor = this.floor;
    const f = this.furnitureItem;
    if (!floor || !f) return [];
    const shown = floor.furniture.filter((m) => !this._hiddenItems.includes(m.id));
    const groups = itemsByRoom(floor.rooms, shown);
    for (const list of groups.values()) if (list.some((m) => m.id === f.id)) return list.map((m) => m.id);
    return shown.map((m) => m.id);
  }

  /** An item chosen in the items list (#75): selected, and brought into view only if it is out of view. */
  selectFromList(this: Fp3dEditor, id: string): void {
    const f = this.floor?.furniture.find((m) => m.id === id);
    if (!f) return;
    this.selectItem("furniture", id);
    this._single = !!f.group;
    this.showPoint(f.x, f.z);
  }

  /** Delete one item from the items list (#75): that row only, even when it is part of a block. */
  async deleteFromList(this: Fp3dEditor, id: string): Promise<void> {
    if (!this.floor?.furniture.some((m) => m.id === id)) return;
    this.selectItem("furniture", id);
    this._single = true;
    // asks first for a fixed item, in the app's own dialog (#59)
    await this.deleteFurniture();
  }

  openContext(this: Fp3dEditor, target: Element, local: [number, number], pointerType = "mouse"): void {
    if (!this.isEditor || !this.floor) return;
    const world = this.toWorld(...local);
    const attr = (sel: string) => target.closest(`[${sel}]`)?.getAttribute(sel) ?? null;
    let hit: [FixKind, string] | null = null;
    const device = attr("data-device");
    const opening = attr("data-opening");
    const furniture = this.pickItem(target, world, pointerType);
    const wall = attr("data-free-wall");
    const outdoor = attr("data-outdoor") ? (this.outdoorAt(world) ?? attr("data-outdoor")) : null;
    const room = attr("data-room") ?? this.roomAt(world);
    if (device) hit = ["device", device];
    else if (opening) hit = ["opening", opening];
    else if (furniture) hit = ["furniture", furniture];
    else if (wall) hit = ["wall", wall];
    else if (outdoor && !room) hit = ["outdoor", outdoor];
    else if (room) hit = ["room", room];
    if (!hit) {
      this._ctx = null;
      return;
    }
    const [kind, id] = hit;
    this.selectItem(kind, id);
    if (kind === "opening" || kind === "furniture") this._roomId = this._roomId ?? room;
    this._ctx = { x: local[0], y: local[1], kind, id };
  }

  async deleteItem(this: Fp3dEditor, kind: FixKind, id: string): Promise<void> {
    if (kind === "device") {
      if (!(await this.confirmFixedDelete(kind, id))) return;
      this.removeDevice(id);
      this._deviceId = null;
      return;
    }
    // the delete methods ask themselves for fixed items
    if (kind === "room") this.deleteRoom();
    else if (kind === "opening") this.deleteOpening();
    else if (kind === "furniture") this.deleteFurniture();
    else if (kind === "wall") this.deleteFreeWall();
    else this.deleteOutdoor();
  }

  renderContext(this: Fp3dEditor) {
    const c = this._ctx;
    if (!c) return nothing;
    const fixed = this.isFixedItem(c.kind, c.id);
    const wrap = this.renderRoot.querySelector(".fp3d-canvas-wrap") as HTMLElement | null;
    // keep the menu inside the plan
    const x = Math.max(4, Math.min(c.x, (wrap?.clientWidth ?? 800) - 190));
    const y = Math.max(4, Math.min(c.y, (wrap?.clientHeight ?? 600) - 190));
    const run = (fn: () => void) => () => {
      this._ctx = null;
      fn();
    };
    return html`<div class="fp3d-ctx" style=${`left:${x}px;top:${y}px`} @pointerdown=${(e: Event) => e.stopPropagation()} @contextmenu=${(e: Event) => e.preventDefault()}>
      ${c.kind === "furniture" || c.kind === "device"
        ? html`<button title=${this.t("fix_hint")} @click=${run(() => this.toggleFixed(c.kind, c.id))}>${fixed ? `🔓 ${this.t("unfix")}` : `🔒 ${this.t("fix")}`}</button>`
        : html`<button title=${this.t("lock_plan_hint")} @click=${run(() => this.toggleLockPlan())}>${this._doc.settings.lock_plan ? `🔓 ${this.t("plan_unlock")}` : `🔒 ${this.t("plan_lock")}`}</button>`}
      ${c.kind === "room" ? html`<button @click=${run(() => this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>` : nothing}
      ${c.kind === "room" && clipboard ? html`<button title=${withKeys(this.t("paste_items"), ["Ctrl+V"])} @click=${run(() => this.pasteClipboard())}>⎘ ${this.t("paste_items_n", { n: clipboard.items.length })}</button>` : nothing}
      ${c.kind === "furniture"
        ? html`<button title=${withKeys(this.t("duplicate"), ["Ctrl+D"])} @click=${run(() => this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button title=${withKeys(this.t("copy_items"), ["Ctrl+C"])} @click=${run(() => this.copySelection())}>⎘ ${this.t("copy_items")}</button>
            <button ?disabled=${fixed} title=${withKeys(this.t("ctx_rotate"), ["R"])} @click=${run(() => this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${fixed} @click=${run(() => this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${run(() => {
              const f = this.floor?.furniture.find((m) => m.id === c.id);
              if (f) this.openWallViewFor(f);
            })}>▦ ${this.t("wall_view")}</button>`
        : nothing}
      <button class="fp3d-ctx-danger" @click=${run(() => this.deleteItem(c.kind, c.id))}>✕ ${this.t("delete")}</button>
    </div>`;
  }

  /** Lock button in the form of an item. */
  fixButton(this: Fp3dEditor, kind: FixKind, id: string) {
    if (!this.isEditor) return nothing;
    if (kind !== "furniture" && kind !== "device") {
      // part of the floor plan: shows the plan lock, a click releases it
      return this._doc.settings.lock_plan
        ? html`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${() => this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`
        : nothing;
    }
    const fixed = this.isFixedItem(kind, id);
    return html`<button class="fp3d-btn fp3d-fix" aria-pressed=${fixed} title=${this.t("fix_hint")} @click=${() => this.toggleFixed(kind, id)}>
      ${fixed ? `🔒 ${this.t("unfix")}` : `🔓 ${this.t("fix")}`}
    </button>`;
  }

  /** Select a room, an opening or a furniture item (only one at a time). */
  selectItem(this: Fp3dEditor, kind: "room" | "opening" | "furniture" | "device" | "outdoor" | "wall", id: string | null): void {
    this._notice = null;
    this._kerbPick = false;
    // a selection made in the plan (or by a tool) opens the folded sidebar
    if (id) this._sideOpen = true;
    this._outdoorId = kind === "outdoor" ? id : null;
    this._wallId = kind === "wall" ? id : null;
    this._edgeHi = null;
    if (kind === "outdoor" || kind === "wall") this._roomId = null;
    if (kind !== "room" || id !== this._roomId) this._vertex = null;
    this._roomId = kind === "room" ? id : this._roomId;
    this._openingId = kind === "opening" ? id : null;
    this._furnitureId = kind === "furniture" ? id : null;
    this._multi = [];
    this._single = false;
    this._deviceId = kind === "device" ? id : null;
    if (kind === "device" && id) {
      const pl = this.floor?.placements.find((x) => x.entity_id === id);
      this._roomId = (pl && this.roomAt([pl.x, pl.z])) ?? this._roomId;
    }
    if (kind === "opening" && id) this._roomId = this.floor?.openings.find((o) => o.id === id)?.room_id ?? this._roomId;
  }

  /** Ctrl+C (#74): the chosen items (block, multi selection) go to the editor's clipboard; false when none is chosen. */
  copySelection(this: Fp3dEditor): boolean {
    const floor = this.floor;
    const clip = floor && this._furnitureId ? copyItems(floor, this.selection()) : null;
    if (!clip) return false;
    clipboard = clip;
    this.requestUpdate();
    return true;
  }

  /** Ctrl+V (#74): copies of the clipboard's items on the floor being edited, chosen; false with nothing to paste. */
  pasteClipboard(this: Fp3dEditor): boolean {
    const floor = this.floor;
    if (!clipboard || !floor || !this.isEditor) return false;
    const copies = pasteItems(clipboard, floor.id, uid);
    this.change((_, f) => f.furniture.push(...copies));
    this.setMulti(copies.map((c) => c.id));
    const first = this.furnitureItem;
    if (first) this._roomId = this.roomAt([first.x, first.z]) ?? this._roomId;
    return true;
  }

  /** Ctrl+A (#74): every item on the floor; false when it has none. */
  selectAll(this: Fp3dEditor): boolean {
    const items = this.floor?.furniture ?? [];
    if (!items.length) return false;
    this.setMulti(items.map((m) => m.id));
    return true;
  }

  /** Duplicate, copy and (with something copied) paste, each with its shortcut in the tooltip (#74). */
  renderClipButtons(this: Fp3dEditor) {
    return html`<button class="fp3d-btn" title=${withKeys(this.t("duplicate"), ["Ctrl+D"])} @click=${() => this.duplicateFurniture()}>${this.t("duplicate")}</button>
      <button class="fp3d-btn" title=${withKeys(this.t("help_key_copy"), ["Ctrl+C"])} @click=${() => this.copySelection()}>${this.t("copy_items")}</button>
      ${this.renderPasteButton()}`;
  }

  /** "Paste (n)" while the clipboard holds items (#74): pastes them on this floor. */
  renderPasteButton(this: Fp3dEditor) {
    if (!clipboard || !this.isEditor) return nothing;
    return html`<button class="fp3d-btn" title=${withKeys(this.t("help_key_paste"), ["Ctrl+V"])} @click=${() => this.pasteClipboard()}>${this.t("paste_items_n", { n: clipboard.items.length })}</button>`;
  }

  // ------------------------------------------------------------------ furniture blocks and multi selection

  /** The furniture moved together: the multi selection, else the selected item's block (unless one part is edited alone), else the item. */
  selection(this: Fp3dEditor): string[] {
    if (this._multi.length) return this._multi;
    const f = this.furnitureItem;
    if (!f) return [];
    if (f.group && !this._single) return (this.floor?.furniture ?? []).filter((m) => m.group === f.group).map((m) => m.id);
    return [f.id];
  }

  /** Ids with every other part of their blocks. */
  withGroups(this: Fp3dEditor, ids: string[]): string[] {
    const groups = new Set((this.floor?.furniture ?? []).filter((m) => ids.includes(m.id) && m.group).map((m) => m.group));
    return [...new Set([...ids, ...(this.floor?.furniture ?? []).filter((m) => m.group && groups.has(m.group)).map((m) => m.id)])];
  }

  setMulti(this: Fp3dEditor, ids: string[]): void {
    if (!ids.length) return this.selectItem("room", this._roomId);
    this.selectItem("furniture", ids[0]);
    // one item (or exactly one block) needs no multi selection
    const block = this.selection();
    if (ids.length > 1 && !(ids.length === block.length && ids.every((id) => block.includes(id)))) this._multi = ids;
  }

  /** Shift-click: an item (with its block) joins the selection or leaves it. */
  toggleMulti(this: Fp3dEditor, id: string): void {
    const cur = this._furnitureId ? this.selection() : [];
    const part = this.withGroups([id]);
    const next = cur.includes(id) ? cur.filter((x) => !part.includes(x)) : [...new Set([...cur, ...part])];
    this.setMulti(next);
  }

  /** The selection's centre (middle of its items' extent). */
  selectionCentre(this: Fp3dEditor, ids: string[]): Vec2 {
    const items = (this.floor?.furniture ?? []).filter((m) => ids.includes(m.id));
    const xs = items.map((m) => m.x);
    const zs = items.map((m) => m.z);
    return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...zs) + Math.max(...zs)) / 2];
  }

  /** Turns the whole selection about its centre (positions and each item's own turn). */
  rotateSelection(this: Fp3dEditor, delta: number): void {
    const set = this.selection();
    if (set.some((id) => this.isFixedItem("furniture", id))) {
      this._fixedHint = true;
      return;
    }
    const [cx, cz] = this.selectionCentre(set);
    const a = (delta * Math.PI) / 180;
    const c = Math.round(Math.cos(a) * 1e6) / 1e6;
    const s = Math.round(Math.sin(a) * 1e6) / 1e6;
    const ids = new Set(set);
    this.change((_, floor) => {
      for (const m of floor.furniture) {
        if (!ids.has(m.id)) continue;
        const dx = m.x - cx;
        const dz = m.z - cz;
        // the plan turns clockwise for a positive angle (x right, z down)
        Object.assign(m, { x: round(cx + dx * c - dz * s), z: round(cz + dx * s + dz * c), rotation: (((m.rotation + delta) % 360) + 360) % 360 });
      }
    });
  }

  /** "Als Block zusammenfassen": the selection becomes one block. */
  groupSelection(this: Fp3dEditor): void {
    const ids = new Set(this.selection());
    if (ids.size < 2) return;
    const gid = uid("block");
    this.change((_, floor) => {
      for (const m of floor.furniture) if (ids.has(m.id)) m.group = gid;
    });
    this._multi = [];
    this._single = false;
  }

  /** "Block auflösen": every part on its own again (the parts stay selected). */
  ungroupSelection(this: Fp3dEditor): void {
    const set = this.selection();
    const ids = new Set(set);
    this.change((_, floor) => {
      for (const m of floor.furniture) if (ids.has(m.id)) m.group = null;
    });
    if (set.length > 1) this._multi = set;
  }

  lockSelection(this: Fp3dEditor, on: boolean): void {
    const ids = new Set(this.selection());
    this.change((_, floor) => {
      for (const m of floor.furniture) if (ids.has(m.id)) m.locked = on || null;
    });
  }

  /**
   * What the Delete key removes: only what the active tool has selected (#158). The roof and energy tools own a roof
   * window, solar field or roof section; nothing else, least of all a room drawn earlier, goes with their Delete.
   * The room is the fallback in the select and furniture tools only.
   */
  deleteSelected(this: Fp3dEditor): void {
    if (this._roofWinId && this._tool === "roof") this.deleteRoofWindow();
    else if (this._solarId && this.houseTool) this.deleteSolar();
    else if (this._roofId && this._tool === "roof") this.deleteRoofSection();
    else if (this._deviceId) this.deleteItem("device", this._deviceId);
    else if (this._outdoorId) this.deleteOutdoor();
    else if (this._wallId) this.deleteFreeWall();
    else if (this._openingId) this.deleteOpening();
    else if (this._furnitureId) this.deleteFurniture();
    else if (this._vertex !== null && !this.houseTool) this.deleteVertex(this._vertex);
    else if (this._tool === "select" || this._tool === "furniture") this.deleteRoom();
  }

  /** Let go of everything the last tool had selected (#158); the room stays, except for the roof and energy tools. */
  clearToolSelection(this: Fp3dEditor): void {
    this._openingId = null;
    this._furnitureId = null;
    this._deviceId = null;
    this._outdoorId = null;
    this._wallId = null;
    this._vertex = null;
    this._multi = [];
    this._single = false;
    this._roofId = null;
    this._solarId = null;
    this._roofWinId = null;
    this._cableId = null;
    this._solarPick = false;
    this._edgeHi = null;
  }

  /** A dashed frame around several selected items (a block or a multi selection), and the frame being drawn. */
  renderSelectionFrame(this: Fp3dEditor, floor: Floor, set: string[]) {
    const d = this.drag;
    const drawing = d?.kind === "marquee" ? svg`<rect class="fp3d-marquee" x=${Math.min(...[d.start, d.end].map((p) => this.toScreen(p)[0]))} y=${Math.min(...[d.start, d.end].map((p) => this.toScreen(p)[1]))} width=${Math.abs(this.toScreen(d.end)[0] - this.toScreen(d.start)[0])} height=${Math.abs(this.toScreen(d.end)[1] - this.toScreen(d.start)[1])} />` : nothing;
    if (set.length < 2) return drawing;
    const pts = floor.furniture.filter((m) => set.includes(m.id)).flatMap((m) => furnitureFootprint(m));
    if (!pts.length) return drawing;
    const [x0, y0] = this.toScreen([Math.min(...pts.map((p) => p[0])), Math.min(...pts.map((p) => p[1]))]);
    const [x1, y1] = this.toScreen([Math.max(...pts.map((p) => p[0])), Math.max(...pts.map((p) => p[1]))]);
    const block = !this._multi.length;
    return svg`${drawing}<g class=${`fp3d-selframe${block ? " fp3d-selframe-block" : ""}`}>
      <rect x=${x0 - 6} y=${y0 - 6} width=${x1 - x0 + 12} height=${y1 - y0 + 12} rx="6" />
      <text x=${x0 - 4} y=${y0 - 12}>${block ? `▣ ${this.t("block_title")} · ${set.length}` : this.t("multi_title", { n: set.length })}</text>
    </g>`;
  }

  /** Side panel for several items: a block (or a multi selection that can become one). */
  renderBlockForm(this: Fp3dEditor) {
    const set = this.selection();
    const items = (this.floor?.furniture ?? []).filter((m) => set.includes(m.id));
    const block = !this._multi.length && !!items[0]?.group;
    const fixed = items.every((m) => this.isFixedItem("furniture", m.id));
    const some = !fixed && items.some((m) => this.isFixedItem("furniture", m.id));
    return html`<section>
      <div class="fp3d-h3row"><h3>${block ? `▣ ${this.t("block_title")}` : this.t("multi_title", { n: items.length })}</h3></div>
      <p class="fp3d-sub">${this.t(block ? "block_hint" : "multi_hint")}</p>
      ${some ? html`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>` : nothing}
      <div class="fp3d-block-parts">
        ${items.map(
          (m) => html`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${() => {
            this.selectItem("furniture", m.id);
            this._single = !!m.group;
          }}>${m.name || furnitureName(this.hass, m.type)}</button>`,
        )}
      </div>
      ${this._doc.floors.length > 1 ? html`<div class="fp3d-form">${this.renderItemFloor()}</div>` : nothing}
      <div class="fp3d-actions">
        ${block
          ? html`<button class="fp3d-btn" @click=${() => this.ungroupSelection()}>${this.t("block_break")}</button>`
          : html`<button class="fp3d-btn fp3d-primary" @click=${() => this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" title=${withKeys(this.t("rotate_left"), ["Shift+R"])} @click=${() => this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" title=${withKeys(this.t("rotate_right"), ["R"])} @click=${() => this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        ${this.renderClipButtons()}
        <button class="fp3d-btn ${some ? "fp3d-primary" : ""}" title=${withKeys(this.t(fixed || some ? "unfix" : "fix"), ["L"])} @click=${() => this.lockSelection(!fixed && !some)}>${fixed ? `🔓 ${this.t("unfix")}` : some ? `🔓 ${this.t("unfix_all")}` : `🔒 ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" title=${withKeys(this.t("delete"), ["Del"])} @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`;
  }

  /** Touch has no shift key: this switch makes taps add items and a drag on empty ground draw a frame. */
  renderMultiToggle(this: Fp3dEditor) {
    return html`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${(e: Event) => (this._multiMode = (e.target as HTMLInputElement).checked)} /> ${this.t("multi_mode")}</label>`;
  }

  /** A tap in the 3D pane: select there, and fold the sidebar away (the bar under the pane has the essentials). */
  selectFrom3d(this: Fp3dEditor, kind: "room" | "furniture" | "device", id: string | null): void {
    this.selectItem(kind, id);
    this._sideOpen = false;
  }
}
