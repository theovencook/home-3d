// The item editor (#13): editors build their own furniture from the pack shapes on a live 3D picture, set colour
// roles, mark fixed parts and give it a name, a library section, rooms, search words and an IKEA name. Items are
// kept in Home Assistant (home_3d/items/save) and shared by the household; they export and import as item files.
// It lives in its own bundle (home-3d-items.js), loaded when an editor opens it; the picture is drawn by the 3D
// bundle (itemPicture), so nothing of this editor is in that bundle.

import { css, html, LitElement, nothing } from "lit";
import { removeCustomItem, saveCustomItem } from "../api.ts";
import {
  addPart,
  changePart,
  duplicatePart,
  freeId,
  itemFile,
  MAX_PARTS,
  newItem,
  PART_SHAPES,
  profileText,
  readItemFile,
  readProfile,
  removePart,
  setDetails,
  toggleFix,
  type CustomItem,
  type ItemDetails,
} from "../custom-items.ts";
import { LIGHTS, MOUNTS } from "../item-format.ts";
import { load3d } from "../load3d.ts";
import type { PackPart } from "../packs.ts";
import { askConfirm } from "../ask.ts";
import "../components/ask-dialog.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";
import { llmBrief } from "./llm-brief.ts";

export type Translate = (key: string, vars?: Record<string, string | number>) => string;

export interface ItemEditorOptions {
  hass: HomeAssistant;
  /** The current hass object (it is replaced while the editor is open). */
  hassSource?: () => HomeAssistant | undefined;
  /** The panel's texts; the editor's own come with this bundle (texts.ts). */
  t: Translate;
  /** The custom items as the backend lists them. */
  items: CustomItem[];
  /** The library's sections and rooms (library-index.ts) and the colour roles (colour-roles.ts). */
  kinds: readonly string[];
  rooms: readonly string[];
  roles: readonly string[];
  /** The custom items changed (saved, imported, removed): the panel loads the packs again. */
  changed: () => void;
  /** Open this item at once (or a new one: "new"). */
  open?: string;
}

const HEX = /^#[0-9a-f]{6}$/i;
/** Views to jump to: [yaw, pitch]. */
const VIEWS: [string, number, number][] = [
  ["ie_view_angle", 35, 25],
  ["ie_view_front", 0, 0],
  ["ie_view_side", 90, 0],
  ["ie_view_top", 0, 80],
];

/** Text onto the clipboard; the old way (a selected text area) where the Clipboard API is missing or refused. */
async function copyText(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch (err) {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.append(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    if (!ok) throw err;
  }
}

function download(name: string, text: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export class ItemEditor extends LitElement {
  static properties = {
    options: { attribute: false },
    _items: { state: true },
    _draft: { state: true },
    _savedId: { state: true },
    _dirty: { state: true },
    _picture: { state: true },
    _msg: { state: true },
    _busy: { state: true },
    _yaw: { state: true },
    _pitch: { state: true },
    _addShape: { state: true },
    _paste: { state: true },
    _note: { state: true },
  };

  declare options: ItemEditorOptions;
  private declare _items: CustomItem[];
  /** The item being edited (null: none picked). */
  private declare _draft: CustomItem | null;
  /** The id the draft is saved under (null: a new item, not saved yet). */
  private declare _savedId: string | null;
  private declare _dirty: boolean;
  private declare _picture: string | null;
  private declare _msg: { ok: boolean; text: string } | null;
  private declare _busy: boolean;
  private declare _yaw: number;
  private declare _pitch: number;
  private declare _addShape: PackPart["shape"];
  /** The paste box's text (null: closed). */
  private declare _paste: string | null;
  /** What happened to the brief for an LLM (or an import with no item open), shown in the list. */
  private declare _note: { ok: boolean; text: string } | null;
  private drawn = "";
  private drawing = false;
  private drag: { x: number; y: number; yaw: number; pitch: number } | null = null;

  constructor() {
    super();
    this._items = [];
    this._draft = null;
    this._savedId = null;
    this._dirty = false;
    this._picture = null;
    this._msg = null;
    this._busy = false;
    this._yaw = 35;
    this._pitch = 25;
    this._addShape = "box";
    this._paste = null;
    this._note = null;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._items = [...(this.options?.items ?? [])];
    const open = this.options?.open;
    if (open === "new") this.startNew();
    else if (open) this.pick(this._items.find((i) => i.id === open) ?? null);
    else if (this._items.length) this.pick(this._items[0]);
  }

  private get hass(): HomeAssistant {
    return this.options.hassSource?.() ?? this.options.hass;
  }

  private t(key: string, vars?: Record<string, string | number>): string {
    return this.options.t(key, vars);
  }

  private itemName(item: CustomItem): string {
    const lang = (this.hass.language ?? "en").split("-")[0];
    return item.name[lang] ?? item.name.en ?? Object.values(item.name)[0] ?? item.id;
  }

  /** Leave the current draft: asks first when it has changes. */
  private async leave(): Promise<boolean> {
    return !this._dirty || !this._draft || (await this.ask(this.t("ie_discard", { name: this.itemName(this._draft) }), this.t("ie_discard_ok"), true));
  }

  /** A yes / no question in the app's own dialog (#59). */
  private ask(text: string, ok: string, danger: boolean, cancel = this.t("ie_cancel")): Promise<boolean> {
    return askConfirm(text, { ok, cancel, danger });
  }

  private pick(item: CustomItem | null): void {
    this._draft = item ? structuredClone(item) : null;
    this._savedId = item?.id ?? null;
    this._dirty = false;
    this._msg = null;
  }

  private startNew(): void {
    this._draft = newItem(this.t("ie_new_name"), this._items.map((i) => i.id));
    this._savedId = null;
    this._dirty = true;
    this._msg = null;
  }

  private edit(next: CustomItem): void {
    this._draft = next;
    this._dirty = true;
    this._msg = null;
  }

  private async close(): Promise<void> {
    if (!(await this.leave())) return;
    this.remove();
  }

  // ------------------------------------------------------------------ the live picture

  protected updated(): void {
    const key = JSON.stringify([this._draft, Math.round(this._yaw), Math.round(this._pitch)]);
    if (!this._draft || key === this.drawn || this.drawing) return;
    this.drawing = true;
    requestAnimationFrame(() => void this.draw(key));
  }

  private async draw(key: string): Promise<void> {
    try {
      const mod = await load3d();
      const draft = this._draft;
      if (draft) this._picture = mod.itemPicture(draft, 420, this._yaw, this._pitch);
      this.drawn = key;
    } catch (err) {
      this._msg = { ok: false, text: String((err as Error)?.message ?? err) };
      this.drawn = key;
    } finally {
      this.drawing = false;
    }
    // something changed while drawing: draw again
    this.requestUpdate();
  }

  private pointerDown(e: PointerEvent): void {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    this.drag = { x: e.clientX, y: e.clientY, yaw: this._yaw, pitch: this._pitch };
  }

  private pointerMove(e: PointerEvent): void {
    if (!this.drag) return;
    this._yaw = this.drag.yaw - (e.clientX - this.drag.x) * 0.6;
    this._pitch = Math.max(-10, Math.min(80, this.drag.pitch + (e.clientY - this.drag.y) * 0.4));
  }

  // ------------------------------------------------------------------ saving, export, import

  private async save(): Promise<void> {
    const draft = this._draft;
    if (!draft || this._busy) return;
    this._busy = true;
    try {
      const saved = await saveCustomItem(this.hass, draft);
      const known = this._items.some((i) => i.id === saved.id);
      this._items = known ? this._items.map((i) => (i.id === saved.id ? saved : i)) : [...this._items, saved];
      this._draft = structuredClone(saved);
      this._savedId = saved.id;
      this._dirty = false;
      this._msg = { ok: true, text: this.t("ie_saved") };
      this.options.changed();
    } catch (err) {
      const e = (err ?? {}) as { message?: string; code?: string };
      this._msg = { ok: false, text: this.t("ie_save_failed", { why: e.message ?? e.code ?? String(err) }) };
    } finally {
      this._busy = false;
    }
  }

  private exportItem(): void {
    if (!this._draft) return;
    const file = itemFile(this._draft);
    download(file.name, file.text);
  }

  private async deleteItem(): Promise<void> {
    const draft = this._draft;
    if (!draft) return;
    if (this._savedId === null) {
      this.pick(this._items[0] ?? null);
      return;
    }
    if (!(await this.ask(this.t("ie_delete_confirm", { name: this.itemName(draft) }), this.t("ie_delete"), true))) return;
    try {
      await removeCustomItem(this.hass, this._savedId);
      this._items = this._items.filter((i) => i.id !== this._savedId);
      this.pick(this._items[0] ?? null);
      this.options.changed();
    } catch (err) {
      this._msg = { ok: false, text: String((err as Error)?.message ?? err) };
    }
  }

  /** The brief for an LLM (#14) onto the clipboard. */
  private async copyBrief(): Promise<void> {
    try {
      await copyText(llmBrief({ kinds: this.options.kinds, rooms: this.options.rooms }));
      this._note = { ok: true, text: this.t("ie_brief_copied") };
    } catch (err) {
      this._note = { ok: false, text: this.t("ie_brief_failed", { why: String((err as Error)?.message ?? err) }) };
    }
  }

  /** Item files (exported here or written by hand or by an LLM) become custom items; the backend checks each. */
  private async importFiles(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const files = [...(input.files ?? [])];
    input.value = "";
    if (!files.length || !(await this.leave())) return;
    await this.importTexts(await Promise.all(files.map(async (f) => ({ name: f.name, text: await f.text() }))));
  }

  /** An item pasted in (an LLM's answer as it came); the box closes once it is imported. */
  private async importPasted(): Promise<void> {
    const text = this._paste?.trim();
    if (!text || this._busy || !(await this.leave())) return;
    this._busy = true;
    try {
      if (await this.importTexts([{ name: this.t("ie_paste"), text }])) this._paste = null;
    } finally {
      this._busy = false;
    }
  }

  /** Item texts (files or a paste) become custom items; true when every one was imported. */
  private async importTexts(files: { name: string; text: string }[]): Promise<boolean> {
    const done: CustomItem[] = [];
    const failed: string[] = [];
    for (const file of files) {
      const text = file.text;
      const first = readItemFile(text, []);
      if ("error" in first) {
        failed.push(this.t("ie_import_failed", { file: file.name, why: this.t(`ie_err_${first.error}`) }));
        continue;
      }
      let item = first.item;
      const clash = this._items.find((i) => i.id === item.id);
      // the same id: replace it (an updated copy of the same item) or keep both under a free id
      if (clash && !(await this.ask(this.t("ie_import_replace", { name: this.itemName(clash) }), this.t("ie_replace"), true, this.t("ie_keep_both")))) {
        item = { ...item, id: freeId(item.id, this._items.map((i) => i.id)) };
      }
      try {
        const saved = await saveCustomItem(this.hass, item);
        this._items = this._items.some((i) => i.id === saved.id) ? this._items.map((i) => (i.id === saved.id ? saved : i)) : [...this._items, saved];
        done.push(saved);
      } catch (err) {
        const why = (err as { message?: string })?.message ?? String(err);
        failed.push(this.t("ie_import_failed", { file: file.name, why }));
      }
    }
    if (done.length) {
      this.pick(done[done.length - 1]);
      this.options.changed();
    }
    const ok = done.length ? [this.t("ie_imported", { names: done.map((i) => this.itemName(i)).join(", ") })] : [];
    this._msg = { ok: failed.length === 0, text: [...ok, ...failed].join(" · ") };
    // no item open to show the message under: the list shows it
    this._note = this._draft ? null : this._msg;
    return failed.length === 0;
  }

  // ------------------------------------------------------------------ rendering

  protected render() {
    return html`<div class="ie-backdrop" @click=${(e: Event) => e.target === e.currentTarget && this.close()}>
      <div class="ie" role="dialog" aria-modal="true" aria-label=${this.t("ie_title")}>
        <header class="ie-head">
          <h2>${this.t("ie_title")}</h2>
          <button class="fp3d-btn" @click=${() => this.close()}>${this.t("ie_close")}</button>
        </header>
        <div class="ie-body">
          ${this.renderList()}
          ${this._draft ? this.renderDraft(this._draft) : html`<p class="ie-sub ie-empty">${this.t("ie_intro")}</p>`}
        </div>
      </div>
    </div>`;
  }

  private renderList() {
    return html`<nav class="ie-list">
      <p class="ie-sub">${this.t("ie_intro")}</p>
      <button class="fp3d-btn fp3d-primary" @click=${async () => (await this.leave()) && this.startNew()}>+ ${this.t("ie_new")}</button>
      <label class="fp3d-btn ie-file">
        ${this.t("ie_import")}
        <input type="file" accept=".json,application/json" multiple hidden @change=${(e: Event) => this.importFiles(e)} />
      </label>
      <button class="fp3d-btn ie-paste-open" aria-expanded=${this._paste !== null} @click=${() => (this._paste = this._paste === null ? "" : null)}>${this.t("ie_paste")}</button>
      ${this._paste !== null
        ? html`<label class="fp3d-field ie-paste"
              >${this.t("ie_paste_label")}<textarea rows="6" spellcheck="false" .value=${this._paste} @input=${(e: Event) => (this._paste = (e.target as HTMLTextAreaElement).value)}></textarea
            ></label>
            <button class="fp3d-btn fp3d-primary ie-paste-import" ?disabled=${!this._paste.trim() || this._busy} @click=${() => this.importPasted()}>${this.t("ie_paste_import")}</button>`
        : nothing}
      <button class="fp3d-btn ie-brief" title=${this.t("ie_brief_hint")} @click=${() => this.copyBrief()}>${this.t("ie_brief")}</button>
      ${this._note ? html`<p class="ie-msg ${this._note.ok ? "ok" : "bad"}" role="status">${this._note.text}</p>` : nothing}
      ${this._items.length ? nothing : html`<p class="ie-sub">${this.t("ie_none")}</p>`}
      <ul>
        ${this._items.map(
          (item) => html`<li>
            <button class="ie-pick ${item.id === this._savedId ? "on" : ""}" @click=${async () => item.id !== this._savedId && (await this.leave()) && this.pick(item)}>
              ${this.itemName(item)}
            </button>
          </li>`,
        )}
      </ul>
    </nav>`;
  }

  private renderDraft(draft: CustomItem) {
    return html`<section class="ie-stage">
        <div class="ie-picture" @pointerdown=${(e: PointerEvent) => this.pointerDown(e)} @pointermove=${(e: PointerEvent) => this.pointerMove(e)} @pointerup=${() => (this.drag = null)} @pointercancel=${() => (this.drag = null)}>
          ${this._picture ? html`<img src=${this._picture} alt=${this.itemName(draft)} draggable="false" />` : nothing}
        </div>
        <div class="ie-views">
          ${VIEWS.map(
            ([key, yaw, pitch]) => html`<button
              class="fp3d-btn"
              @click=${() => {
                this._yaw = yaw;
                this._pitch = pitch;
              }}
            >
              ${this.t(key)}
            </button>`,
          )}
        </div>
        <p class="ie-sub">${this.t("ie_turn_hint")}</p>
        <div class="ie-actions">
          <button class="fp3d-btn fp3d-primary" ?disabled=${this._busy} @click=${() => this.save()}>${this.t("ie_save")}</button>
          <button class="fp3d-btn" @click=${() => this.exportItem()}>${this.t("ie_export")}</button>
          <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteItem()}>${this.t("ie_delete")}</button>
          ${this._dirty ? html`<span class="ie-sub">${this.t("ie_unsaved")}</span>` : nothing}
        </div>
        ${this._msg ? html`<p class="ie-msg ${this._msg.ok ? "ok" : "bad"}" role="status">${this._msg.text}</p>` : nothing}
      </section>
      <section class="ie-form">${this.renderDetails(draft)} ${this.renderParts(draft)}</section>`;
  }

  private renderDetails(draft: CustomItem) {
    const set = (d: ItemDetails) => this.edit(setDetails(draft, d, this._savedId === null ? this._items.map((i) => i.id) : undefined));
    const setItem = (patch: Partial<CustomItem>) => {
      const next: CustomItem = { ...draft, ...patch };
      for (const [k, v] of Object.entries(patch)) if (v === undefined || v === false) delete (next as unknown as Record<string, unknown>)[k];
      this.edit(next);
    };
    const value = (e: Event) => (e.target as HTMLInputElement).value;
    const rooms = new Set(draft.room ?? []);
    const mount = draft.mount ?? "floor";
    return html`<h3>${this.t("ie_details")}</h3>
      <label class="fp3d-field">${this.t("ie_name")}<input type="text" maxlength="80" .value=${draft.name.en ?? this.itemName(draft)} @change=${(e: Event) => set({ name: value(e) })} /></label>
      <label class="fp3d-field"
        >${this.t("ie_section")}
        <select @change=${(e: Event) => set({ group: value(e) })}>
          <option value="" ?selected=${!draft.group}>${this.t("ie_section_none")}</option>
          ${this.options.kinds.map((k) => html`<option value=${k} ?selected=${draft.group === k}>${this.t(`lib_kind_${k}`)}</option>`)}
        </select>
      </label>
      <div class="fp3d-field">
        ${this.t("ie_rooms")}
        <div class="ie-chips">
          ${this.options.rooms.map(
            (r) => html`<button
              class="ie-chip ${rooms.has(r) ? "on" : ""}"
              aria-pressed=${rooms.has(r)}
              @click=${() => set({ room: rooms.has(r) ? [...rooms].filter((x) => x !== r) : [...rooms, r] })}
            >
              ${this.t(`lib_room_${r}`)}
            </button>`,
          )}
        </div>
      </div>
      <label class="fp3d-field">${this.t("ie_tags")}<input type="text" .value=${(draft.tags ?? []).join(", ")} @change=${(e: Event) => set({ tags: value(e) })} /></label>
      <label class="fp3d-field">${this.t("ie_ikea")}<input type="text" maxlength="40" .value=${draft.ikea ?? ""} @change=${(e: Event) => set({ ikea: value(e) })} /></label>
      <div class="fp3d-field">
        ${this.t("ie_size")}
        <div class="ie-row3">
          ${[0, 1, 2].map(
            (i) => html`<input
              type="number"
              min="0.01"
              max="10"
              step="0.01"
              .value=${String(draft.size[i])}
              @change=${(e: Event) => {
                const size = [...draft.size] as [number, number, number];
                const v = Number(value(e));
                size[i] = Number.isFinite(v) ? Math.min(10, Math.max(0.01, Math.round(v * 1000) / 1000)) : size[i];
                setItem({ size });
              }}
            />`,
          )}
        </div>
      </div>
      <label class="fp3d-field"
        >${this.t("ie_mount")}
        <select @change=${(e: Event) => setItem({ mount: value(e) === "floor" ? undefined : (value(e) as CustomItem["mount"]) })}>
          ${MOUNTS.map((m) => html`<option value=${m} ?selected=${mount === m}>${this.t(`ie_mount_${m}`)}</option>`)}
        </select>
      </label>
      ${mount === "wall"
        ? html`<label class="fp3d-field"
            >${this.t("ie_wall_y")}<input
              type="number"
              min="0"
              max="3"
              step="0.05"
              .value=${String(draft.wall_y ?? 1)}
              @change=${(e: Event) => setItem({ wall_y: Math.min(3, Math.max(0, Number(value(e)) || 0)) })}
          /></label>`
        : nothing}
      <div class="ie-flags">
        <label class="fp3d-check"><input type="checkbox" .checked=${!!draft.surface} @change=${(e: Event) => setItem({ surface: (e.target as HTMLInputElement).checked })} /> ${this.t("ie_flag_surface")}</label>
        <label class="fp3d-check"><input type="checkbox" .checked=${!!draft.electric} @change=${(e: Event) => setItem({ electric: (e.target as HTMLInputElement).checked })} /> ${this.t("ie_flag_electric")}</label>
        <label class="fp3d-field"
          >${this.t("ie_flag_light")}
          <select @change=${(e: Event) => setItem({ light: (value(e) || undefined) as CustomItem["light"] })}>
            <option value="" ?selected=${!draft.light}>–</option>
            ${LIGHTS.map((l) => html`<option value=${l} ?selected=${draft.light === l}>${l}</option>`)}
          </select>
        </label>
      </div>`;
  }

  private renderParts(draft: CustomItem) {
    return html`<h3>${this.t("ie_parts", { n: draft.parts.length, max: MAX_PARTS })}</h3>
      <p class="ie-sub">${this.t("ie_parts_hint")}</p>
      <div class="ie-add">
        <select aria-label=${this.t("ie_add")} @change=${(e: Event) => (this._addShape = (e.target as HTMLSelectElement).value as PackPart["shape"])}>
          ${PART_SHAPES.map((s) => html`<option value=${s} ?selected=${this._addShape === s}>${this.t(`ie_shape_${s}`)}</option>`)}
        </select>
        <button class="fp3d-btn" ?disabled=${draft.parts.length >= MAX_PARTS} @click=${() => this.edit(addPart(draft, this._addShape))}>+ ${this.t("ie_add")}</button>
      </div>
      ${draft.parts.map((p, i) => this.renderPart(draft, p, i))}`;
  }

  private renderPart(draft: CustomItem, p: PackPart, i: number) {
    const change = (patch: Partial<PackPart>) => this.edit(changePart(draft, i, patch));
    const num = (key: "x" | "z" | "w" | "d" | "y" | "h" | "round", min: number, max: number) =>
      html`<label class="ie-num"
        >${key === "round" ? this.t("ie_round") : key}<input
          type="number"
          min=${min}
          max=${max}
          step="0.01"
          .value=${String(p[key] ?? 0.2)}
          @change=${(e: Event) => change({ [key]: Number((e.target as HTMLInputElement).value) })}
      /></label>`;
    const own = HEX.test(p.color);
    return html`<fieldset class="ie-part">
      <legend>${this.t("ie_part", { n: i + 1 })}</legend>
      <div class="ie-part-top">
        <select aria-label=${this.t("ie_add")} @change=${(e: Event) => change({ shape: (e.target as HTMLSelectElement).value as PackPart["shape"] })}>
          ${PART_SHAPES.map((s) => html`<option value=${s} ?selected=${p.shape === s}>${this.t(`ie_shape_${s}`)}</option>`)}
        </select>
        <select
          aria-label=${this.t("ie_colour")}
          @change=${(e: Event) => {
            const v = (e.target as HTMLSelectElement).value;
            change({ color: v === "own" ? "#888888" : v });
          }}
        >
          ${this.options.roles.map((r) => html`<option value=${r} ?selected=${p.color === r}>${this.t(`colour_role_${r}`)}</option>`)}
          <option value="own" ?selected=${own}>${this.t("ie_colour_own")}</option>
        </select>
        ${own ? html`<input type="color" aria-label=${this.t("ie_colour_own")} .value=${p.color} @change=${(e: Event) => change({ color: (e.target as HTMLInputElement).value })} />` : nothing}
        <button class="fp3d-btn" ?disabled=${draft.parts.length >= MAX_PARTS} @click=${() => this.edit(duplicatePart(draft, i))}>${this.t("ie_duplicate")}</button>
        <button class="fp3d-btn fp3d-danger" title=${this.t("ie_remove_part")} aria-label=${this.t("ie_remove_part")} ?disabled=${draft.parts.length <= 1} @click=${() => this.edit(removePart(draft, i))}>✕</button>
      </div>
      <div class="ie-nums">${num("x", -0.5, 0.5)} ${num("z", -0.5, 0.5)} ${num("w", 0.001, 1)} ${num("d", 0.001, 1)} ${num("y", 0, 1)} ${num("h", 0.001, 1)} ${p.shape === "rbox" ? num("round", 0.01, 0.5) : nothing}</div>
      ${p.shape === "lathe"
        ? html`<label class="fp3d-field"
            >profile<input
              type="text"
              .value=${profileText(p.profile)}
              @change=${(e: Event) => {
                const input = e.target as HTMLInputElement;
                const profile = readProfile(input.value);
                if (profile) change({ profile });
                else input.value = profileText(p.profile);
              }}
          /></label>`
        : nothing}
      <div class="ie-fix" title=${this.t("ie_fixed_hint")}>
        <span class="ie-sub">${this.t("ie_fixed")}</span>
        ${(["w", "d", "h"] as const).map(
          (a) => html`<button class="ie-chip ${p.fix?.includes(a) ? "on" : ""}" aria-pressed=${!!p.fix?.includes(a)} @click=${() => this.edit(toggleFix(draft, i, a))}>${a}</button>`,
        )}
      </div>
    </fieldset>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        position: fixed;
        inset: 0;
        z-index: 20;
      }
      .ie-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(2, 4, 10, 0.6);
        display: grid;
        place-items: center;
        padding: 12px;
      }
      .ie {
        width: min(1240px, 100%);
        max-height: 100%;
        overflow: auto;
        background: var(--fp3d-chrome-solid, #0d1424);
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        padding: 14px 16px;
        box-sizing: border-box;
      }
      .ie-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .ie-head h2 {
        margin: 0;
        font-size: 20px;
      }
      .ie-body {
        display: grid;
        grid-template-columns: 220px minmax(280px, 1fr) minmax(320px, 1.1fr);
        gap: 16px;
        margin-top: 12px;
      }
      @media (max-width: 960px) {
        .ie-body {
          grid-template-columns: 1fr;
        }
      }
      .ie-list {
        display: grid;
        gap: 8px;
        align-content: start;
      }
      .ie-list ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 4px;
      }
      .ie-pick {
        width: 100%;
        text-align: left;
        font: inherit;
        color: inherit;
        background: none;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 6px 8px;
        cursor: pointer;
      }
      .ie-pick.on,
      .ie-pick:hover {
        border-color: var(--fp3d-accent);
      }
      .ie-file {
        text-align: center;
        cursor: pointer;
      }
      .ie-sub {
        color: var(--fp3d-soft);
        font-size: 13px;
        margin: 0;
      }
      .ie-stage {
        display: grid;
        gap: 8px;
        align-content: start;
      }
      .ie-picture {
        aspect-ratio: 1;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: radial-gradient(circle at 50% 60%, rgba(55, 224, 255, 0.08), transparent 70%);
        display: grid;
        place-items: center;
        cursor: grab;
        touch-action: none;
        user-select: none;
      }
      .ie-picture img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        pointer-events: none;
      }
      .ie-views,
      .ie-actions,
      .ie-add,
      .ie-part-top,
      .ie-flags,
      .ie-fix,
      .ie-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
      }
      .ie-msg {
        margin: 0;
        font-size: 13px;
      }
      .ie-msg.ok {
        color: var(--fp3d-accent);
      }
      .ie-msg.bad {
        color: var(--fp3d-danger);
      }
      .ie-form {
        display: grid;
        gap: 10px;
        align-content: start;
      }
      .ie-form h3 {
        margin: 6px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .ie-row3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
      }
      .ie-chip {
        font: inherit;
        font-size: 13px;
        color: inherit;
        background: none;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
        cursor: pointer;
      }
      .ie-chip.on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
      }
      .ie-part {
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        padding: 8px 10px;
        display: grid;
        gap: 8px;
        margin: 0;
      }
      .ie-part legend {
        font-size: 12px;
        color: var(--fp3d-soft);
        padding: 0 4px;
      }
      .ie-nums {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(78px, 1fr));
        gap: 6px;
      }
      .ie-num {
        display: grid;
        gap: 2px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      input,
      select,
      textarea {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 6px 8px;
        min-width: 0;
      }
      textarea {
        font-family: ui-monospace, monospace;
        font-size: 12px;
        resize: vertical;
      }
      input[type="color"] {
        padding: 2px;
        width: 44px;
        height: 34px;
      }
      input[type="checkbox"] {
        width: auto;
      }
      .fp3d-check {
        display: flex;
        gap: 6px;
        align-items: center;
        font-size: 13px;
      }
    `,
  ];
}

if (!customElements.get("fp3d-item-editor")) customElements.define("fp3d-item-editor", ItemEditor);
