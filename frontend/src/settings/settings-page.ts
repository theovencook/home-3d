// The Settings page (#139): every setting of Home 3D in one place. A sidebar of sections in four groups (House, Live,
// This device, System) with search on top, the section's settings on the right in cards. Each row says whether it
// belongs to the house (saved in the plan, every screen sees it) or to this device, house rows are locked for viewers
// who aren't editors, and Home Assistant admin rows carry a badge. Changes save as they are made. Under 760 px the
// sidebar is a list that drills into a section. It is a bundle of its own (home-3d-settings.js), loaded when someone
// opens the Settings tab; it brings no texts table of its own beyond its few new texts (the panel lends `t`).

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import "../components/entity-picker.ts";
import { entityOptionList } from "../entity-options.ts";
import { entityName } from "../devices.ts";
import type { Building, StartView } from "../model.ts";
import type { FurniturePack } from "../packs.ts";
import type { HomeAssistant } from "../types.ts";
import { controls, tokens } from "../styles.ts";
import {
  GROUPS,
  LOADERS,
  liveSections,
  mayChange,
  searchSettings,
  sectionOf,
  settingsIn,
  type Control,
  type DevicePrefs,
  type Option,
  type Section,
  type SectionId,
  type Setting,
  type SettingsEnv,
  type TextKey,
  type Viewer,
  type WriteResult,
} from "./registry.ts";
import { settingsTexts } from "./texts.ts";

/** This browser's preferences, as the panel keeps them ("home3d.<key>"). */
export const localPrefs: DevicePrefs = {
  get(key) {
    try {
      return localStorage.getItem(`home3d.${key}`);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      if (value === null) localStorage.removeItem(`home3d.${key}`);
      else localStorage.setItem(`home3d.${key}`, value);
    } catch {
      // storage unavailable (a private window): not remembered
    }
  },
};

/** Settings kept outside the plan: fetched when their section opens (by the setting's `loader`). */
export type Loaders = Record<string, (hass: HomeAssistant) => Promise<unknown>>;

/** Phone layout: the sidebar becomes a list that drills into a section. */
const NARROW_PX = 760;

export class SettingsPage extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    canEdit: { attribute: false },
    packs: { attribute: false },
    t: { attribute: false },
    section: { attribute: false },
    focusId: { attribute: false },
    saveState: { attribute: false },
    homeName: { attribute: false },
    lastView: { attribute: false },
    loadEditor: { attribute: false },
    loaders: { attribute: false },
    _section: { state: true },
    _query: { state: true },
    _drill: { state: true },
    _flash: { state: true },
    _remote: { state: true },
    _embedState: { state: true },
    _note: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null;
  /** On the editors list (#7): may change house settings. */
  declare canEdit: boolean | undefined;
  declare packs: FurniturePack[] | undefined;
  /** The main texts (the panel's translate). */
  declare t: (key: string, vars?: Record<string, string | number>) => string;
  /** The section to open (from a deep link or another part of the UI) and the setting to bring into view. */
  declare section: SectionId | null;
  declare focusId: string | null;
  declare saveState: "idle" | "saving" | "saved" | "error";
  declare homeName: string;
  declare lastView: StartView | null;
  /** Loads the editor bundle (it draws the embedded parts: favourites, backup …). */
  declare loadEditor: (() => Promise<unknown>) | undefined;
  declare loaders: Loaders | undefined;
  private declare _section: SectionId;
  private declare _query: string;
  /** Phones: a section is open (else the list of sections). */
  private declare _drill: boolean;
  /** The row a deep link points at, highlighted for a moment. */
  private declare _flash: string | null;
  private declare _remote: Record<string, unknown>;
  private declare _embedState: "idle" | "loading" | "ready" | string;
  /** A short message under the section (a reset done, a failed call). */
  private declare _note: string | null;
  private remoteAsked = new Set<string>();
  private flashTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    super();
    this.building = null;
    this.section = null;
    this.focusId = null;
    this.saveState = "idle";
    this.homeName = "";
    this.lastView = null;
    this.t = (key) => key;
    this._section = "general";
    this._query = "";
    this._drill = false;
    this._flash = null;
    this._remote = {};
    this._embedState = customElements.get("fp3d-editor") ? "ready" : "idle";
    this._note = null;
  }

  /** The page's text: its own first, else the main texts. */
  private tr(key: TextKey, vars?: Record<string, string | number>): string {
    return settingsTexts(this.t, () => this.hass?.language ?? navigator.language)(key, vars);
  }

  /** The loaders in use: the registry's, unless a test hands in its own. */
  private get loadersNow(): Loaders {
    return this.loaders ?? LOADERS;
  }

  private get env(): SettingsEnv {
    return { building: this.building, hass: this.hass, prefs: localPrefs, lastView: this.lastView, remote: this._remote };
  }

  private get viewer(): Viewer {
    return { editor: this.canEdit ?? this.hass?.user?.is_admin ?? false, haAdmin: this.hass?.user?.is_admin ?? false };
  }

  /** A new `hass` every state change: only the first one renders (labels and lists don't need every state). */
  protected shouldUpdate(changed: PropertyValues): boolean {
    return !(changed.size === 1 && changed.has("hass") && changed.get("hass"));
  }

  protected willUpdate(changed: PropertyValues): void {
    if ((changed.has("section") || changed.has("focusId")) && (this.section || this.focusId)) {
      const id = this.section ?? this._section;
      if (sectionOf(id)) this._section = id;
      this._query = "";
      this._drill = true;
      if (this.focusId) this.flash(this.focusId);
    }
    const sections = liveSections(this.env);
    if (sections.length && !sections.some((s) => s.id === this._section)) this._section = sections[0].id;
    this.askRemote();
  }

  protected updated(): void {
    if (!this._flash) return;
    const row = this.renderRoot.querySelector(`[data-id="${CSS.escape(this._flash)}"]`);
    if (row && !row.hasAttribute("data-seen")) {
      row.setAttribute("data-seen", "");
      row.scrollIntoView({ block: "center" });
    }
  }

  private flash(id: string): void {
    this._flash = id;
    clearTimeout(this.flashTimer);
    this.flashTimer = setTimeout(() => (this._flash = null), 2500);
  }

  /** Fetch what the open section's settings keep outside the plan (once per opening of the page). */
  private askRemote(): void {
    const hass = this.hass;
    if (!hass) return;
    const wanted = new Set((this._query ? searchSettings(this._query, this.env, (k) => this.tr(k)) : settingsIn(this._section, this.env)).map((s) => s.loader).filter((l): l is string => !!l));
    for (const id of wanted) {
      if (this.remoteAsked.has(id) || !this.loadersNow[id]) continue;
      this.remoteAsked.add(id);
      void this.reload(id);
    }
  }

  private async reload(id: string): Promise<void> {
    const hass = this.hass;
    const load = this.loadersNow[id];
    if (!hass || !load) return;
    try {
      this._remote = { ...this._remote, [id]: await load(hass) };
    } catch (err) {
      this._remote = { ...this._remote, [id]: { error: String((err as { message?: string })?.message ?? err) } };
    }
  }

  // ------------------------------------------------------------------------------------------------ writing

  private write<V>(s: Setting<V>, value: V): void {
    if (!s.write || !mayChange(s, this.viewer)) return;
    if (s.scope === "house" && !this.building) return;
    let result: WriteResult;
    try {
      result = s.write(this.env, value);
    } catch (err) {
      this._note = String(err);
      return;
    }
    this.apply(s, result);
  }

  private apply(s: Setting, result: WriteResult): void {
    if (result && typeof (result as Promise<unknown>).then === "function") {
      void (result as Promise<unknown>)
        .then(() => (s.loader ? this.reload(s.loader) : undefined))
        .catch((err: unknown) => (this._note = this.tr("st_failed", { error: String((err as { message?: string })?.message ?? err) })));
      return;
    }
    if (result && typeof result === "object" && "floors" in result) {
      this.dispatchEvent(new CustomEvent("settings-edit", { detail: { building: result, key: `settings:${s.id}` }, bubbles: true, composed: true }));
      return;
    }
    // a device preference: the panel reads its preferences again
    this.dispatchEvent(new CustomEvent("device-change", { detail: { id: s.id }, bubbles: true, composed: true }));
    this.requestUpdate();
  }

  /** A button row: what it does (some write too). */
  private act(s: Setting, action: string): void {
    if (action === "start_view") {
      if (this.lastView) this.write(s, this.lastView as never);
      return;
    }
    this.dispatchEvent(new CustomEvent("settings-action", { detail: { action, id: s.id }, bubbles: true, composed: true }));
  }

  private open(section: SectionId): void {
    this._section = section;
    this._query = "";
    this._drill = true;
    this._note = null;
    this.dispatchEvent(new CustomEvent("settings-nav", { detail: { section, id: null }, bubbles: true, composed: true }));
    this.renderRoot.querySelector(".st-main")?.scrollTo?.({ top: 0 });
  }

  // ------------------------------------------------------------------------------------------------ render

  protected render() {
    const env = this.env;
    const sections = liveSections(env);
    const query = this._query.trim();
    const hits = query ? searchSettings(query, env, (k) => this.tr(k)) : null;
    return html`<div class="st ${this._drill || query ? "st-drill" : ""}">
      <nav class="st-nav" aria-label=${this.tr("st_title")}>
        <label class="st-search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            .value=${this._query}
            placeholder=${this.tr("st_search")}
            aria-label=${this.tr("st_search")}
            @input=${(e: Event) => (this._query = (e.target as HTMLInputElement).value)}
            @keydown=${(e: KeyboardEvent) => e.key === "Escape" && (this._query = "")}
          />
        </label>
        ${GROUPS.map((g) => {
          const list = sections.filter((s) => s.group === g.id);
          return list.length
            ? html`<div class="st-group">${this.tr(g.title)}</div>
                ${list.map(
                  (s) => html`<button class="st-nav-btn" aria-current=${!query && s.id === this._section ? "page" : "false"} @click=${() => this.open(s.id)}>
                    <span class="st-ic" aria-hidden="true">${s.icon}</span><span>${this.tr(s.title)}</span><span class="st-chev" aria-hidden="true">›</span>
                  </button>`,
                )}`
            : nothing;
        })}
      </nav>
      <main class="st-main">
        ${hits ? this.renderResults(query, hits) : this.renderSection(sectionOf(this._section)!)}
        <footer class="st-foot">
          <span>${this.homeName ? this.tr("st_home", { name: this.homeName }) : ""}</span>
          <span class="st-save st-save-${this.saveState}" role="status">
            ${this.saveState === "saving" ? this.tr("st_saving") : this.saveState === "error" ? this.tr("st_save_error") : this.tr("st_saved")}
          </span>
        </footer>
      </main>
    </div>`;
  }

  private renderResults(query: string, hits: Setting[]) {
    const bySection = new Map<SectionId, Setting[]>();
    for (const s of hits) bySection.set(s.section, [...(bySection.get(s.section) ?? []), s]);
    return html`<button class="st-back" @click=${() => (this._query = "")}>‹ ${this.tr("st_back")}</button>
      <div class="st-title"><h2>${hits.length ? this.tr("st_results", { n: hits.length, q: query }) : this.tr("st_search_none", { q: query })}</h2></div>
      ${[...bySection].map(([id, list]) => {
        const sec = sectionOf(id)!;
        return html`<section class="st-card">
          <h3><button class="st-link" @click=${() => this.open(id)}>${sec.icon} ${this.tr(sec.title)} ›</button></h3>
          ${list.map((s) => this.renderRow(s, true))}
        </section>`;
      })}`;
  }

  private renderSection(sec: Section) {
    const list = settingsIn(sec.id, this.env);
    const who = this.viewer;
    const houseLocked = list.some((s) => s.scope === "house" && s.permission === "editor") && !who.editor;
    const adminOnly = list.length > 0 && list.every((s) => s.permission === "ha_admin") && !who.haAdmin;
    return html`<button class="st-back" @click=${() => (this._drill = false)}>‹ ${this.tr("st_back")}</button>
      <div class="st-title">
        <h2>${this.tr(sec.title)}</h2>
        <p>${this.tr(sec.hint)}</p>
      </div>
      ${adminOnly ? html`<p class="st-lock">🔒 ${this.tr("st_admin_locked")}</p>` : houseLocked ? html`<p class="st-lock">🔒 ${this.tr("st_locked")}</p>` : nothing}
      ${this._note ? html`<p class="st-note" role="status">${this._note}</p>` : nothing}
      ${sec.cards.map((card) => {
        const rows = list.filter((s) => s.card === card.id);
        return rows.length
          ? html`<section class="st-card">
              <h3>${this.tr(card.title)}</h3>
              ${rows.map((s) => this.renderRow(s, false))}
            </section>`
          : nothing;
      })}`;
  }

  private renderRow(s: Setting, hit: boolean) {
    const may = mayChange(s, this.viewer);
    const wide = s.control.kind === "embed" || s.control.kind === "list" || s.control.kind === "checks" || s.control.kind === "entity";
    return html`<div class="st-row st-k-${s.control.kind} ${s.hint ? "" : "st-nohint"} ${wide ? "st-row-wide" : ""} ${hit || this._flash === s.id ? "st-hit" : ""}" data-id=${s.id}>
      <div class="st-lbl">
        <span class="st-name">${this.tr(s.label)}</span>
        <span class="st-scope st-scope-${s.scope}" title=${this.tr(s.scope === "house" ? "st_scope_house_hint" : "st_scope_device_hint")}>${this.tr(s.scope === "house" ? "st_scope_house" : "st_scope_device")}</span>
        ${s.permission === "ha_admin" ? html`<span class="st-scope st-scope-admin" title=${this.tr("st_admin_hint")}>${this.tr("st_admin")}</span>` : nothing}
      </div>
      ${s.hint ? html`<p class="st-hint">${this.tr(s.hint)}</p>` : nothing}
      <div class="st-ctl">${this.renderControl(s, s.control, !may)}</div>
    </div>`;
  }

  private options(c: { options: Option[] | ((env: SettingsEnv) => Option[]) }): Option[] {
    return typeof c.options === "function" ? c.options(this.env) : c.options;
  }

  private label(o: Option): string {
    return o.raw ? o.label : this.tr(o.label);
  }

  private renderControl(s: Setting, c: Control, disabled: boolean) {
    const env = this.env;
    const value = s.read(env);
    const aria = this.tr(s.label);
    switch (c.kind) {
      case "switch":
        return html`<button class="st-sw" role="switch" aria-checked=${!!value} aria-label=${aria} ?disabled=${disabled} @click=${() => this.write(s as Setting<boolean>, !value)}></button>`;
      case "number": {
        const unit = typeof c.unit === "function" ? c.unit(env) : c.unit;
        const shown = typeof value === "number" ? String(Math.round(value * 1000) / 1000) : "";
        return html`<span class="st-num">
          <input
            type="number"
            inputmode="decimal"
            step=${c.step}
            min=${c.min ?? ""}
            max=${c.max ?? ""}
            .value=${shown}
            placeholder=${c.clearable ? String(s.default ?? "") : ""}
            aria-label=${aria}
            ?disabled=${disabled}
            @change=${(e: Event) => {
              const raw = (e.target as HTMLInputElement).value.trim().replace(",", ".");
              if (raw === "") {
                if (c.clearable) this.write(s as Setting<number | null>, null);
                return;
              }
              const v = Number(raw);
              if (Number.isFinite(v)) this.write(s as Setting<number | null>, v);
            }}
          />${unit ? html`<i>${unit.startsWith("st_") ? this.tr(unit) : unit}</i>` : nothing}
        </span>`;
      }
      case "segment":
        return html`<div class="fp3d-seg st-seg" role="group" aria-label=${aria}>
          ${this.options(c).map(
            (o) => html`<button aria-pressed=${value === o.value} ?disabled=${disabled} @click=${() => this.write(s as Setting<string>, o.value)}>${this.label(o)}</button>`,
          )}
        </div>`;
      case "select":
        return html`<select class="st-select" aria-label=${aria} ?disabled=${disabled} @change=${(e: Event) => this.write(s as Setting<string>, (e.target as HTMLSelectElement).value)}>
          ${c.options(env).map((o) => html`<option value=${o.value} ?selected=${value === o.value}>${this.label(o)}</option>`)}
        </select>`;
      case "entity":
        return this.renderEntity(s as Setting<string | null>, c, disabled);
      case "text":
        return html`<input
          class="st-text"
          type="text"
          maxlength=${c.maxLength ?? 255}
          .value=${String(value ?? "")}
          placeholder=${c.placeholder ? this.tr(c.placeholder) : ""}
          aria-label=${aria}
          ?disabled=${disabled}
          @change=${(e: Event) => this.write(s as Setting<string>, (e.target as HTMLInputElement).value.trim())}
        />`;
      case "time":
        return html`<input
          class="st-text st-time"
          type="time"
          .value=${String(value ?? "")}
          aria-label=${aria}
          ?disabled=${disabled}
          @change=${(e: Event) => this.write(s as Setting<string | null>, (e.target as HTMLInputElement).value || null)}
        />`;
      case "colour":
        return html`<span class="st-colour">
          <input type="color" .value=${String(value ?? c.fallback)} aria-label=${aria} ?disabled=${disabled} @input=${(e: Event) => this.write(s as Setting<string | null>, (e.target as HTMLInputElement).value)} />
          ${c.clearable && value ? html`<button class="fp3d-btn" ?disabled=${disabled} title=${this.tr("st_accent_default")} @click=${() => this.write(s as Setting<string | null>, null)}>↺</button>` : nothing}
        </span>`;
      case "range":
        return html`<span class="st-num">
          <input type="range" min=${c.min} max=${c.max} step=${c.step} .value=${String(value ?? s.default)} aria-label=${aria} ?disabled=${disabled} @change=${(e: Event) => this.write(s as Setting<number>, Number((e.target as HTMLInputElement).value))} />
          <i>${String(value ?? s.default)}</i>
        </span>`;
      case "checks": {
        const on = new Set((value as string[] | null) ?? []);
        return html`<div class="st-checks">
          ${c.options.map(
            (o) => html`<label class="st-check"
              ><input
                type="checkbox"
                .checked=${on.has(o.value)}
                ?disabled=${disabled}
                @change=${(e: Event) => {
                  const next = new Set(on);
                  if ((e.target as HTMLInputElement).checked) next.add(o.value);
                  else next.delete(o.value);
                  this.write(s as Setting<string[]>, c.options.map((x) => x.value).filter((v) => next.has(v)));
                }}
              />
              ${this.label(o)}</label
            >`,
          )}
        </div>`;
      }
      case "action":
        return this.renderAction(s, c, disabled);
      case "list":
        return this.renderIgnored(s, disabled);
      case "embed":
        return this.renderEmbed(s, c.topic);
    }
  }

  private renderEntity(s: Setting<string | null>, c: Extract<Control, { kind: "entity" }>, disabled: boolean) {
    const env = this.env;
    const value = s.read(env);
    const auto = c.auto?.(env);
    const autoLabel = auto === undefined ? null : auto ? this.t("entity_auto", { name: this.hass ? entityName(this.hass, auto) : auto }) : this.t("entity_auto_none");
    const fixed = [...(autoLabel !== null ? [{ id: "__auto", label: autoLabel }] : []), { id: "none", label: this.t("entity_none") }];
    const options = entityOptionList(this.hass, (id) => c.filter(id, env));
    return html`<fp3d-entity-picker
      .options=${options}
      .fixed=${fixed}
      .value=${value ?? (autoLabel !== null ? "__auto" : "none")}
      .placeholder=${this.t("entity_search")}
      aria-label=${this.tr(s.label)}
      ?disabled=${disabled}
      @change=${(e: CustomEvent<{ value: string }>) => {
        e.stopPropagation();
        const v = e.detail.value;
        this.write(s, v === "__auto" || v === "none" ? null : v);
      }}
    ></fp3d-entity-picker>`;
  }

  private renderAction(s: Setting, c: Extract<Control, { kind: "action" }>, disabled: boolean) {
    if (c.action === "start_view") {
      const set = s.read(this.env);
      return html`<div class="st-actions">
        <button class="fp3d-btn" ?disabled=${disabled || !this.lastView} title=${this.lastView ? "" : this.tr("st_start_view_none")} @click=${() => this.act(s, "start_view")}>📌 ${this.tr(c.button)}</button>
        ${set ? html`<button class="fp3d-btn" ?disabled=${disabled} @click=${() => this.write(s, null)}>${this.t("start_view_reset")}</button>` : nothing}
        <span class="st-sub">${this.tr(set ? "st_start_view_set" : "st_start_view_default")}</span>
      </div>`;
    }
    const n = Array.isArray(s.read(this.env)) ? (s.read(this.env) as unknown[]).length : 0;
    return html`<button class="fp3d-btn" ?disabled=${disabled} @click=${() => this.act(s, c.action)}>${this.tr(c.button, { n })}</button>`;
  }

  /** The warnings dismissed for good (#138), each with its way back; never a safety warning. */
  private renderIgnored(s: Setting, disabled: boolean) {
    const list = (s.read(this.env) as { kind: string; entity: string }[]) ?? [];
    if (!list.length) return html`<p class="st-sub">${this.tr("st_ignored_none")}</p>`;
    return html`<div class="st-list">
      ${list.map((a) => {
        const key = `alert_short_${a.kind}`;
        const kind = this.t(key);
        return html`<div class="st-list-row">
          <span title=${a.entity}>${kind === key ? a.kind : kind} · ${this.hass ? entityName(this.hass, a.entity) : a.entity}</span>
          <button class="fp3d-btn" ?disabled=${disabled} @click=${() => this.write(s, list.filter((x) => !(x.kind === a.kind && x.entity === a.entity)))}>${this.t("alert_restore")}</button>
        </div>`;
      })}
    </div>`;
  }

  /** A part the editor draws (its bundle loads the first time one is shown). */
  private renderEmbed(s: Setting, topic: string) {
    if (!this.viewer.editor && s.permission !== "everyone") return html`<p class="st-sub">🔒</p>`;
    if (this._embedState !== "ready") {
      if (this._embedState === "idle" && this.loadEditor) {
        this._embedState = "loading";
        this.loadEditor().then(
          () => (this._embedState = "ready"),
          (err: unknown) => (this._embedState = String(err)),
        );
      }
      return html`<p class="st-sub">${this._embedState === "loading" || this._embedState === "idle" ? this.tr("st_embed_loading") : this.tr("st_embed_failed", { error: this._embedState })}</p>`;
    }
    return html`<fp3d-editor
      class="st-embed"
      .topic=${topic}
      .hass=${this.hass}
      .building=${this.building}
      .canEdit=${this.canEdit}
      .packs=${this.packs}
      .narrow=${true}
      @building-changed=${(e: CustomEvent<{ building: Building }>) => {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent("settings-edit", { detail: { building: e.detail.building, key: null }, bubbles: true, composed: true }));
      }}
    ></fp3d-editor>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      :host {
        display: block;
        min-height: 0;
        overflow: hidden;
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      .st {
        display: grid;
        grid-template-columns: 248px 1fr;
        height: 100%;
        min-height: 0;
      }
      .st-nav {
        border-right: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        padding: 12px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .st-search {
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 0 10px;
        margin-bottom: 8px;
        background: var(--fp3d-bg2);
        color: var(--fp3d-muted);
      }
      .st-search input {
        flex: 1;
        min-width: 0;
        min-height: 38px;
        border: 0;
        background: none;
        color: var(--fp3d-text);
        font: inherit;
        font-size: 14px;
      }
      .st-search input:focus {
        outline: none;
      }
      .st-search:focus-within {
        border-color: var(--fp3d-accent);
      }
      .st-group {
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        padding: 12px 8px 4px;
      }
      .st-nav-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        min-height: 38px;
        padding: 0 8px;
        border: 0;
        border-radius: 8px;
        background: none;
        color: var(--fp3d-text);
        font: inherit;
        font-size: 14px;
        text-align: left;
        cursor: pointer;
      }
      .st-nav-btn:hover {
        background: var(--fp3d-bg2);
      }
      .st-nav-btn[aria-current="page"] {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        color: var(--fp3d-accent);
      }
      .st-ic {
        width: 18px;
        text-align: center;
        opacity: 0.85;
      }
      .st-chev {
        margin-left: auto;
        color: var(--fp3d-muted);
        display: none;
      }
      .st-main {
        overflow: auto;
        padding: 20px 24px 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 0;
      }
      .st-main > * {
        max-width: 860px;
        width: 100%;
      }
      .st-back {
        display: none;
      }
      .st-title h2 {
        margin: 0;
        font-family: var(--fp3d-title-font);
        font-size: 22px;
      }
      .st-title p {
        margin: 4px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      .st-lock,
      .st-note {
        margin: 0;
        padding: 9px 12px;
        border-radius: 10px;
        font-size: 13px;
        color: var(--fp3d-warm);
        border: 1px solid color-mix(in srgb, var(--fp3d-warm) 35%, transparent);
        background: color-mix(in srgb, var(--fp3d-warm) 8%, transparent);
      }
      .st-note {
        color: var(--fp3d-text);
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2);
      }
      .st-card {
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .st-card h3 {
        margin: 0;
        padding: 12px 16px 4px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .st-link {
        border: 0;
        background: none;
        padding: 0;
        color: var(--fp3d-accent);
        font: inherit;
        letter-spacing: inherit;
        text-transform: inherit;
        cursor: pointer;
        min-height: 36px;
      }
      .st-row {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 4px 18px;
        align-items: center;
        padding: 11px 16px;
        border-top: 1px solid var(--fp3d-line);
        transition: background 0.4s;
      }
      .st-card h3 + .st-row {
        border-top: 0;
      }
      .st-row.st-hit {
        background: color-mix(in srgb, var(--fp3d-accent) 8%, transparent);
      }
      .st-lbl {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        grid-column: 1;
      }
      .st-hint {
        grid-column: 1;
        margin: 0;
        font-size: 12.5px;
        line-height: 1.45;
        color: var(--fp3d-muted);
      }
      .st-ctl {
        grid-column: 2;
        grid-row: 1 / span 2;
        justify-self: end;
        min-width: 0;
      }
      .st-nohint .st-ctl {
        grid-row: 1;
      }
      .st-row-wide .st-ctl {
        grid-column: 1 / -1;
        grid-row: auto;
        justify-self: stretch;
      }
      .st-scope {
        font-size: 10.5px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        padding: 1px 6px;
        border-radius: 4px;
      }
      .st-scope-house {
        color: var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 12%, transparent);
      }
      .st-scope-device {
        color: var(--fp3d-soft);
        background: color-mix(in srgb, var(--fp3d-soft) 14%, transparent);
      }
      .st-scope-admin {
        color: var(--fp3d-warm);
        background: color-mix(in srgb, var(--fp3d-warm) 12%, transparent);
      }
      .st-sw {
        position: relative;
        width: 46px;
        height: 28px;
        border: 0;
        padding: 0;
        border-radius: 999px;
        background: var(--fp3d-line);
        cursor: pointer;
        /* the tap target is the whole 46 × 36 px box around the track */
        margin: 4px 0;
      }
      .st-sw::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--fp3d-muted);
        transition: transform 0.15s, background 0.15s;
      }
      .st-sw[aria-checked="true"] {
        background: color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .st-sw[aria-checked="true"]::after {
        transform: translateX(18px);
        background: var(--fp3d-accent);
      }
      .st-sw:disabled,
      .st-seg button:disabled,
      .st-ctl :disabled {
        opacity: 0.5;
        cursor: default;
      }
      .st-num {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .st-num i {
        font-style: normal;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      .st-num input[type="number"],
      .st-text,
      .st-select {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: var(--fp3d-bg2);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 0 9px;
        min-height: 36px;
        min-width: 0;
      }
      .st-num input[type="number"] {
        width: 90px;
        font-variant-numeric: tabular-nums;
      }
      .st-text {
        width: min(280px, 100%);
      }
      .st-time {
        width: auto;
      }
      .st-select {
        max-width: 280px;
      }
      .st-seg {
        flex-wrap: wrap;
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .st-seg button {
        min-height: 32px;
        padding: 5px 11px;
        font-size: 13px;
      }
      .st-colour {
        display: inline-flex;
        gap: 6px;
        align-items: center;
      }
      .st-colour input {
        width: 52px;
        height: 36px;
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-bg2);
      }
      .st-checks {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 16px;
      }
      .st-check {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 36px;
        font-size: 13.5px;
      }
      .st-check input {
        width: 18px;
        height: 18px;
        accent-color: var(--fp3d-accent);
      }
      .st-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        justify-content: flex-end;
      }
      .st-sub {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .st-list {
        display: grid;
        gap: 6px;
      }
      .st-list-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 4px 4px 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-bg2);
        font-size: 13px;
      }
      .st-list-row span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      fp3d-entity-picker {
        display: block;
        max-width: 420px;
      }
      .st-embed {
        display: block;
        height: auto;
      }
      .fp3d-btn {
        min-height: 36px;
      }
      .st-foot {
        position: sticky;
        bottom: 0;
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        padding: 10px 2px 14px;
        font-size: 12.5px;
        color: var(--fp3d-muted);
        background: linear-gradient(to bottom, transparent, var(--fp3d-bg) 40%);
      }
      .st-save-saved,
      .st-save-idle {
        color: #34d399;
      }
      .st-save-error {
        color: var(--fp3d-danger);
      }
      @media (max-width: ${NARROW_PX}px) {
        .st {
          grid-template-columns: 1fr;
        }
        .st-nav {
          border-right: 0;
        }
        .st-drill .st-nav {
          display: none;
        }
        .st:not(.st-drill) .st-main {
          display: none;
        }
        .st-chev {
          display: inline;
        }
        .st-nav-btn {
          min-height: 44px;
        }
        .st-back {
          display: inline-flex;
          align-self: flex-start;
          width: auto;
          border: 0;
          background: none;
          color: var(--fp3d-accent);
          font: inherit;
          font-size: 14px;
          min-height: 36px;
          padding: 0;
          cursor: pointer;
        }
        .st-main {
          padding: 12px 16px 0;
        }
        /* a switch or a number stays at the right; wider controls go under their label */
        .st-row:not(.st-k-switch):not(.st-k-number) {
          grid-template-columns: 1fr;
        }
        .st-row:not(.st-k-switch):not(.st-k-number) .st-ctl {
          grid-column: 1;
          grid-row: auto;
          justify-self: start;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .st-sw::after,
        .st-row {
          transition: none;
        }
      }
    `,
  ];
}

if (!customElements.get("fp3d-settings-page")) customElements.define("fp3d-settings-page", SettingsPage);
