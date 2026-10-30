// The "Extensions" page of the panel: the built-in features, the fun extras and the installed furniture packs.
// It lives in the editor bundle (loaded with it) and is shown to admins only.

import { css, html, LitElement, nothing } from "lit";
import {
  checkPacks,
  fetchPackUpdates,
  importPack,
  importPackFolder,
  installPackFromUrl,
  pinPack,
  removePack,
  rollbackPack,
  setPackUpdateSettings,
  updatePlacedItems,
} from "../api.ts";
import { COLOUR_ROLES } from "../colour-roles.ts";
import { customItems } from "../custom-items.ts";
import { KINDS, ROOMS } from "../library-index.ts";
import { loadItems } from "../load-items.ts";
import { FEATURES, FUN, knownFeature, released, unlockedFeatures } from "../features.ts";
import { DOG_BREEDS, PET_EYES, PET_FURS_OF, PET_POSES, type Building, type Pet } from "../model.ts";
import { isStaticPet, petFloor, setPetStatic } from "../pet-place.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { askConfirm } from "../ask.ts";
import "./ask-dialog.ts";
import { planPackFolders } from "../pack-folder.ts";
import { askingFirst, nextCheck, updateSummary, type CheckFrequency, type ConfirmCode, type PackUpdateSettings, type PackUpdateStatus } from "../pack-updates.ts";
import { packName, packOrigin, type FurniturePack } from "../packs.ts";
import { controls, tokens } from "../styles.ts";
import type { HomeAssistant } from "../types.ts";

/** Where problems and ideas go. */
export const ISSUES_URL = "https://github.com/theovencook/home-3d/issues";

export class Extensions extends LitElement {
  static properties = {
    hass: { attribute: false },
    canEdit: { attribute: false },
    packs: { attribute: false },
    building: { attribute: false },
    _packMsg: { state: true },
    _itemsError: { state: true },
    _open: { state: true },
    _packUrl: { state: true },
    _installing: { state: true },
    _updates: { state: true },
    _checking: { state: true },
    _updatesMsg: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  /** On the editors list (#7); unset: admins are (a backend before #7). */
  declare canEdit: boolean | undefined;
  declare packs: FurniturePack[] | undefined;
  /** The plan (the fun extras keep their settings in it, e.g. the pets). */
  declare building: Building | null | undefined;
  private declare _packMsg: { ok: boolean; text: string } | null;
  /** The item editor's bundle did not load. */
  private declare _itemsError: string | null;
  /** The GitHub URL typed into the install field, and whether Home Assistant is fetching it (#25). */
  private declare _packUrl: string;
  private declare _installing: boolean;
  /** Pack updates (#26): settings, pins, previous releases and the placed items with an update. */
  private declare _updates: PackUpdateStatus | null;
  private declare _checking: boolean;
  private declare _updatesMsg: { ok: boolean; text: string } | null;
  /** Long lists opened by the viewer (the installed packs); closed, a bar sums them up. */
  private declare _open: Set<string>;

  constructor() {
    super();
    this._packMsg = null;
    this._itemsError = null;
    this._packUrl = "";
    this._installing = false;
    this._updates = null;
    this._checking = false;
    this._updatesMsg = null;
    let open: string[] = [];
    try {
      open = JSON.parse(localStorage.getItem("home3d.ext.open") ?? "[]") as string[];
    } catch {
      // nothing remembered
    }
    this._open = new Set(open);
  }

  private toggleOpen(key: string): void {
    const next = new Set(this._open);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    this._open = next;
    try {
      localStorage.setItem("home3d.ext.open", JSON.stringify([...next]));
    } catch {
      // a private window: it stays open for this visit only
    }
  }

  /**
   * A list summed up in one bar: how many are there (installed), have an update, are still to get – the parts of the
   * bar in their colours, the numbers beside it, a tap opens the list.
   */
  private summaryBar(key: string, parts: { n: number; label: string; tone: "ok" | "update" | "missing" }[]) {
    const total = parts.reduce((s, p) => s + p.n, 0);
    const open = this._open.has(key);
    return html`<button class="fp3d-sum" aria-expanded=${open} @click=${() => this.toggleOpen(key)}>
      <span class="fp3d-sum-bar">
        ${parts.filter((p) => p.n > 0).map((p) => html`<i class="fp3d-sum-${p.tone}" style="flex:${p.n}"></i>`)}
      </span>
      <span class="fp3d-sum-text">
        ${parts.filter((p) => p.n > 0 || p.tone === "ok").map((p) => html`<b class="fp3d-sum-${p.tone}-text">${p.n}</b> ${p.label}`)}
        ${total ? nothing : html`<span class="fp3d-sub">–</span>`}
      </span>
      <span class="fp3d-sum-caret">${open ? "▾" : "▸"} ${this.t(open ? "ext_hide_list" : "ext_show_list")}</span>
    </button>`;
  }

  /** The update status is fetched when the page opens and again whenever the packs or the plan change. */
  protected updated(changed: Map<string, unknown>): void {
    const first = changed.has("hass") && !this._updates && !this.updatesLoading;
    if (this.hass && (first || changed.has("packs") || changed.has("building"))) void this.loadUpdates();
  }

  private updatesLoading = false;

  private async loadUpdates(): Promise<void> {
    if (!this.hass) return;
    this.updatesLoading = true;
    try {
      this._updates = await fetchPackUpdates(this.hass);
    } catch {
      // a backend before #26: no updates section
      this._updates = null;
    } finally {
      this.updatesLoading = false;
    }
  }

  /** Runs a change of the update state; its answer is the new status, a failure is shown in the section. */
  private async updatesCall(fn: (hass: HomeAssistant) => Promise<PackUpdateStatus | void>, packsChanged = false): Promise<void> {
    if (!this.hass) return;
    try {
      const status = await fn(this.hass);
      if (status) this._updates = status;
      if (packsChanged) this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    } catch (err) {
      this._updatesMsg = { ok: false, text: this.packError(err) };
    }
  }

  private setUpdateSettings(changes: Partial<PackUpdateSettings>): void {
    void this.updatesCall((hass) => setPackUpdateSettings(hass, changes));
  }

  private async checkNow(): Promise<void> {
    if (!this.hass || this._checking) return;
    this._checking = true;
    this._updatesMsg = null;
    try {
      const res = await checkPacks(this.hass);
      this._updates = res;
      this._updatesMsg = { ok: true, text: this.t("upd_checked", { n: res.installed.length }) };
      if (res.installed.length) this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    } catch (err) {
      this._updatesMsg = { ok: false, text: this.packError(err) };
    } finally {
      this._checking = false;
    }
  }

  private updateItems(types?: string[]): void {
    void this.updatesCall(async (hass) => {
      await updatePlacedItems(hass, types);
      // the plan changed in Home Assistant: the open views hear of the new revision and load it
      return fetchPackUpdates(hass);
    });
  }

  private time(seconds: number | Date | null | undefined): string {
    if (seconds == null) return "–";
    const date = seconds instanceof Date ? seconds : new Date(seconds * 1000);
    return date.toLocaleString(this.hass?.language, { dateStyle: "medium", timeStyle: "short" });
  }

  /** Pack updates (#26): how often packs are checked, auto-update, and the placed items with an update. */
  private renderUpdates() {
    const status = this._updates;
    if (!status) return nothing;
    const editor = this.isEditor;
    const settings = status.settings;
    const sum = updateSummary(status);
    const lang = this.hass?.language ?? "en";
    const open = status.items.filter((i) => !i.pinned);
    const next = nextCheck(settings);
    return html`<section class="fp3d-ext-card fp3d-updates">
      <h3>${this.t("upd_title")}</h3>
      <p class="fp3d-sub">${this.t("upd_intro")}</p>
      ${this.summaryBar("updates", [
        { n: sum.updates, label: this.t("upd_sum_updates"), tone: "update" },
        { n: sum.pinned, label: this.t("upd_sum_pinned"), tone: "missing" },
      ])}
      ${this._open.has("updates")
        ? html`${status.items.length
            ? status.items.map(
                (i) => html`<div class="fp3d-pack">
                  <div>
                    <b>${i.name[lang.split("-")[0]] ?? i.name.en ?? Object.values(i.name)[0] ?? i.item}</b>
                    <span class="fp3d-sub">${this.t("upd_item", { from: i.release, to: i.new_release, n: i.placed })}${i.pinned ? ` · ${this.t("upd_pinned")}` : ""}</span>
                  </div>
                  ${editor ? html`<button class="fp3d-btn" @click=${() => this.updateItems([i.type])}>${this.t("upd_update")}</button>` : nothing}
                </div>`,
              )
            : html`<p class="fp3d-sub">${this.t("upd_none")}</p>`}
          ${editor && open.length > 1 ? html`<button class="fp3d-btn fp3d-primary fp3d-pack-import" @click=${() => this.updateItems(open.map((i) => i.type))}>${this.t("upd_update_all", { n: open.length })}</button>` : nothing}`
        : nothing}
      <label class="fp3d-check">
        <input type="checkbox" .checked=${settings.auto_update} ?disabled=${!editor} @change=${(e: Event) => this.setUpdateSettings({ auto_update: (e.target as HTMLInputElement).checked })} />
        ${this.t("upd_auto")}
      </label>
      <div class="fp3d-upd-when">
        <label>
          ${this.t("upd_frequency")}
          <select ?disabled=${!editor} @change=${(e: Event) => this.setUpdateSettings({ frequency: (e.target as HTMLSelectElement).value as CheckFrequency })}>
            ${(["off", "daily", "weekly", "monthly"] as const).map((f) => html`<option value=${f} ?selected=${settings.frequency === f}>${this.t(`upd_freq_${f}`)}</option>`)}
          </select>
        </label>
        ${settings.frequency === "weekly"
          ? html`<label>
              ${this.t("upd_weekday")}
              <select ?disabled=${!editor} @change=${(e: Event) => this.setUpdateSettings({ weekday: Number((e.target as HTMLSelectElement).value) })}>
                ${[0, 1, 2, 3, 4, 5, 6].map((d) => html`<option value=${d} ?selected=${settings.weekday === d}>${this.t(`upd_day_${d}` as I18nKey)}</option>`)}
              </select>
            </label>`
          : nothing}
        ${settings.frequency !== "off"
          ? html`<label>
              ${this.t("upd_time")}
              <input type="time" .value=${settings.time} ?disabled=${!editor} @change=${(e: Event) => {
                const value = (e.target as HTMLInputElement).value;
                if (/^\d{2}:\d{2}$/.test(value)) this.setUpdateSettings({ time: value });
              }} />
            </label>`
          : nothing}
        ${editor
          ? html`<button class="fp3d-btn" ?disabled=${this._checking} @click=${() => this.checkNow()}>${this._checking ? this.t("upd_checking") : this.t("upd_check_now")}</button>`
          : nothing}
      </div>
      <p class="fp3d-sub">
        ${this.t("upd_last_check", { time: this.time(status.last_check) })}${next ? html` · ${this.t("upd_next_check", { time: this.time(next) })}` : nothing}
      </p>
      ${this._updatesMsg ? html`<p class="fp3d-sub ${this._updatesMsg.ok ? "fp3d-notice" : "fp3d-pack-error"}">${this._updatesMsg.text}</p>` : nothing}
    </section>`;
  }

  /** A pack's update state in the pack list: the last check, pin and roll back (#26). */
  private renderPackUpdate(pack: FurniturePack) {
    const state = this._updates?.packs.find((p) => p.id === pack.id);
    if (!state || pack.custom) return nothing;
    const name = packName(pack, this.hass?.language ?? "de");
    return html`${state.error
        ? html`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_check_error", { detail: state.error })}</span>`
        : state.latest_release != null
          ? html`<span class="fp3d-sub">${this.t("pack_latest", { release: state.latest_release })}</span>`
          : nothing}
      ${this.isEditor
        ? html`<span class="fp3d-pack-tools">
            <label class="fp3d-check">
              <input type="checkbox" .checked=${state.pinned} @change=${(e: Event) => {
                const pinned = (e.target as HTMLInputElement).checked;
                void this.updatesCall((hass) => pinPack(hass, pack.id, pinned));
              }} />
              ${this.t("pack_pin")}
            </label>
            ${state.previous_release != null
              ? html`<button
                  class="fp3d-btn"
                  @click=${async () => {
                    if (!(await this.ask(this.t("pack_rollback_confirm", { name, release: state.previous_release! }), this.t("ask_ok")))) return;
                    void this.updatesCall((hass) => rollbackPack(hass, pack.id), true);
                  }}
                >
                  ${this.t("pack_rollback", { release: state.previous_release })}
                </button>`
              : nothing}
          </span>`
        : nothing}`;
  }

  /** The question for an import the backend asks about first (an older release, a pinned pack). */
  private askConfirm = (code: ConfirmCode, message: string): Promise<boolean> => this.ask(this.t(`pack_confirm_${code}`, { detail: message }), this.t("ask_ok"));

  /** A yes / no question in the app's own dialog (#59); a warning when `ok` deletes or overwrites. */
  private ask(text: string, ok: string, danger = false): Promise<boolean> {
    return askConfirm(text, { ok, cancel: this.t("cancel"), danger });
  }

  private get isEditor(): boolean {
    return this.canEdit ?? this.hass?.user?.is_admin ?? false;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected render() {
    const unlocked = unlockedFeatures(this.packs ?? []);
    return html`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href=${ISSUES_URL} target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        </div>
      </header>
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${FEATURES.filter((f) => released(f)).map(
            (f) => html`<div class="fp3d-ext-feature ${unlocked.has(f) ? "fp3d-ext-on" : ""}">
              <b>${unlocked.has(f) ? "✓" : "–"} ${this.t(`pro_name_${f}` as I18nKey)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${f}` as I18nKey)}</span>
              ${unlocked.has(f) ? html`<span class="fp3d-ext-links"><span class="fp3d-ext-state">${this.t("ext_active")}</span></span>` : nothing}
            </div>`,
          )}
        </div>
      </section>
      ${this.renderFun(unlocked)} ${this.renderItems()} ${this.renderUpdates()} ${this.renderPacks()}
    </div>`;
  }

  /** A changed plan goes to the panel, which saves it. */
  private editBuilding(fn: (b: Building) => void): void {
    if (!this.building) return;
    const next = structuredClone(this.building);
    fn(next);
    this.dispatchEvent(new CustomEvent("building-edit", { detail: next, bubbles: true, composed: true }));
  }

  /** Fun extras (built in): switched on and off here, the pets with their names, kinds and fur. */
  private renderFun(unlocked: Set<string>) {
    const shown = FUN.filter((f) => unlocked.has(f) || released(f));
    if (!shown.length) return nothing;
    const pets = this.building?.settings.pets ?? null;
    const list = pets?.list ?? [];
    const on = pets?.on !== false;
    // the floors to live on, lowest first (a pet without a floor lives on the lowest)
    const floors = (this.building?.floors ?? []).filter((f) => f.rooms.length).sort((a, b) => a.elevation - b.elevation);
    const set = (fn: (p: { on: boolean; list: Pet[] }) => void) =>
      this.editBuilding((b) => {
        const p = { on: b.settings.pets?.on !== false, list: [...(b.settings.pets?.list ?? [])] };
        fn(p);
        b.settings.pets = p;
      });
    const change = (id: string, patch: Partial<Pet>) => set((p) => (p.list = p.list.map((x) => (x.id === id ? { ...x, ...patch } : x))));
    return html`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${shown.map((f) =>
        f === "fun_halloween"
          ? this.renderHalloween(unlocked.has(f))
          : unlocked.has(f)
          ? html`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isEditor && this.building
                ? html`${this.settingsLink("pets.on", on ? "✓" : "–", this.t("pets_show"))}
                    ${list.map(
                      (pet) => html`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${(e: Event) => {
                            // another kind: a fur it comes in, a dog a breed
                            const kind = (e.target as HTMLSelectElement).value as Pet["kind"];
                            const furs = PET_FURS_OF[kind];
                            change(pet.id, { kind, fur: furs.includes(pet.fur) ? pet.fur : furs[0], breed: kind === "dog" ? (pet.breed ?? "labrador") : null });
                          }}
                        >
                          ${(["cat", "dog", "rabbit"] as const).map((k) => html`<option value=${k} ?selected=${pet.kind === k}>${this.t(`pet_kind_${k}`)}</option>`)}
                        </select>
                        ${pet.kind === "dog"
                          ? html`<select aria-label=${this.t("pet_breed")} @change=${(e: Event) => change(pet.id, { breed: (e.target as HTMLSelectElement).value })}>
                              ${DOG_BREEDS.map((r) => html`<option value=${r} ?selected=${(pet.breed ?? "labrador") === r}>${this.t(`pet_breed_${r}`)}</option>`)}
                            </select>`
                          : nothing}
                        <input type="text" maxlength="30" .value=${pet.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${(e: Event) => change(pet.id, { name: (e.target as HTMLInputElement).value.trim() })} />
                        <select aria-label=${this.t("pet_fur")} @change=${(e: Event) => change(pet.id, { fur: (e.target as HTMLSelectElement).value })}>
                          ${PET_FURS_OF[pet.kind].map((c) => html`<option value=${c} ?selected=${pet.fur === c}>${this.t(`pet_fur_${c}` as I18nKey)}</option>`)}
                        </select>
                        <select title=${this.t("pet_eyes")} aria-label=${this.t("pet_eyes")} @change=${(e: Event) => change(pet.id, { eyes: (e.target as HTMLSelectElement).value as Pet["eyes"] })}>
                          ${PET_EYES.map((c) => html`<option value=${c} ?selected=${(pet.eyes ?? "dark") === c}>${this.t(`pet_eyes_${c}`)}</option>`)}
                        </select>
                        ${floors.length > 1
                          ? html`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${(e: Event) => change(pet.id, { floor_id: (e.target as HTMLSelectElement).value || null })}>
                              ${floors.map((fl, i) => html`<option value=${i === 0 ? "" : fl.id} ?selected=${(pet.floor_id ?? floors[0].id) === fl.id}>🏠 ${fl.name}</option>`)}
                            </select>`
                          : nothing}
                        <select
                          title=${this.t("pet_mode")}
                          aria-label=${this.t("pet_mode")}
                          @change=${(e: Event) => {
                            const still = (e.target as HTMLSelectElement).value === "static";
                            const b = this.building!;
                            set((p) => (p.list = p.list.map((x) => (x.id === pet.id ? setPetStatic(x, still, petFloor(b, x)) : x))));
                          }}
                        >
                          <option value="roaming" ?selected=${!isStaticPet(pet)}>${this.t("pet_roaming")}</option>
                          <option value="static" ?selected=${isStaticPet(pet)}>${this.t("pet_static")}</option>
                        </select>
                        ${isStaticPet(pet)
                          ? html`<select title=${this.t("pet_pose")} aria-label=${this.t("pet_pose")} @change=${(e: Event) => change(pet.id, { pose: (e.target as HTMLSelectElement).value as Pet["pose"] })}>
                                ${PET_POSES.map((k) => html`<option value=${k} ?selected=${(pet.pose ?? "sit") === k}>${this.t(`pet_pose_${k}`)}</option>`)}
                              </select>
                              <select
                                title=${this.t("pet_turn")}
                                aria-label=${this.t("pet_turn")}
                                @change=${(e: Event) => {
                                  const v = (e.target as HTMLSelectElement).value;
                                  change(pet.id, { rotation: v === "" ? null : Number(v) });
                                }}
                              >
                                <option value="" ?selected=${pet.rotation == null}>${this.t("pet_turn_auto")}</option>
                                ${[0, 45, 90, 135, 180, 225, 270, 315].map((d) => html`<option value=${d} ?selected=${pet.rotation === d}>${d}°</option>`)}
                              </select>
                              <span class="fp3d-sub">${this.t("pet_static_hint")}</span>`
                          : nothing}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${() => set((p) => (p.list = p.list.filter((x) => x.id !== pet.id)))}>✕</button>
                      </div>`,
                    )}
                    ${list.length < 8
                      ? html`<button class="fp3d-btn" @click=${() =>
                          set((p) => p.list.push({ id: `pet_${Date.now().toString(36)}`, kind: "cat", name: "", fur: PET_FURS_OF.cat[p.list.length % PET_FURS_OF.cat.length] }))}>+ ${this.t("pet_add")}</button>`
                      : nothing}`
                : nothing}
            </div>`
          : nothing,
      )}
    </section>`;
  }

  /**
   * A switch that moved to the Settings page (#139: the ghost and the pets sit under "Easter eggs & fun" there, beside
   * the house-wide easter eggs switch): its state, and a link that opens it there.
   */
  private settingsLink(id: string, state: string, label: string) {
    return html`<button
      class="fp3d-link fp3d-ext-setting"
      @click=${() => this.dispatchEvent(new CustomEvent("open-settings", { detail: { section: "fun", id }, bubbles: true, composed: true }))}
    >
      ${state} ${label} · ⚙ ${this.t("settings")} ›
    </button>`;
  }

  /** Fun pack "Halloween": decorations in the furniture library, and the ghost (switched in Settings). */
  private renderHalloween(unlocked: boolean) {
    const ghost = this.building?.settings.halloween?.ghost !== false;
    if (!unlocked) return nothing;
    return html`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isEditor && this.building ? this.settingsLink("halloween.ghost", ghost && this.building.settings.easter_eggs !== false ? "✓" : "–", this.t("halloween_ghost")) : nothing}
      <span class="fp3d-sub">${this.t("halloween_deco_hint")}</span>
    </div>`;
  }

  /** The household's own items (#13): made, imported and exported in the item editor, editors only. */
  private renderItems() {
    if (!this.isEditor) return nothing;
    const n = customItems(this.packs).length;
    return html`<section class="fp3d-ext-card">
      <h3>${this.t("own_items_title")}</h3>
      <p class="fp3d-sub">${this.t("own_items_hint", { n })}</p>
      <button class="fp3d-btn fp3d-primary fp3d-pack-import" @click=${() => this.openItemEditor()}>${this.t("own_items_open")}</button>
      ${this._itemsError ? html`<p class="fp3d-sub fp3d-pack-error">${this._itemsError}</p>` : nothing}
    </section>`;
  }

  private async openItemEditor(): Promise<void> {
    const hass = this.hass;
    if (!hass) return;
    try {
      const bundle = await loadItems();
      bundle.openItemEditor({
        hass,
        hassSource: () => this.hass,
        t: (key, vars) => translate(this.hass, key as I18nKey, vars),
        items: customItems(this.packs),
        kinds: KINDS,
        rooms: ROOMS,
        roles: COLOUR_ROLES,
        changed: () => this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true })),
      });
      this._itemsError = null;
    } catch (err) {
      this._itemsError = String((err as Error)?.message ?? err);
    }
  }

  private renderPacks() {
    const packs = (this.packs ?? []).filter((p) => !p.custom);
    const items = packs.reduce((s, p) => s + p.items.length, 0);
    return html`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${this.summaryBar("packs", [{ n: packs.length, label: this.t("ext_sum_packs", { items }), tone: "ok" }])}
      ${(this._open.has("packs") ? packs : []).map(
        (p) => html`<div class="fp3d-pack">
          <div>
            <b>${packName(p, this.hass?.language ?? "de")}</b>
            <span class="fp3d-sub">${p.features?.length ? this.t("pack_features", { publisher: p.publisher, n: p.features.length }) : this.t("pack_by", { publisher: p.publisher, n: p.items.length })}</span>
            ${p.licence || (p.release && p.release > 1) ? html`<span class="fp3d-sub">${[p.licence ? this.t("pack_licence", { licence: p.licence }) : "", p.release && p.release > 1 ? `v${p.release}` : ""].filter(Boolean).join(" · ")}</span>` : nothing}
            ${this.renderOrigin(p)} ${this.renderPackUpdate(p)}
            ${(p.features ?? []).some((f) => !knownFeature(f)) ? html`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>` : nothing}
          </div>
          ${p.bundled
            ? html`<span class="fp3d-sub">${this.t("pack_bundled")}</span>`
            : html`<button class="fp3d-btn fp3d-danger" @click=${() => this.deletePack(p)}>${this.t("pack_remove")}</button>`}
        </div>`,
      )}

      <label class="fp3d-btn fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${(e: Event) => this.importPackFile(e)} />
      </label>
      <label class="fp3d-btn fp3d-pack-import">
        ${this.t("pack_import_folder")}
        <input type="file" webkitdirectory multiple hidden @change=${(e: Event) => this.importPackFolder(e)} />
      </label>
      ${this.isEditor
        ? html`<form class="fp3d-pack-url" @submit=${(e: Event) => this.installFromUrl(e)}>
            <input
              type="url"
              inputmode="url"
              .value=${this._packUrl}
              placeholder="https://github.com/owner/repo/tree/main/publisher.pack"
              aria-label=${this.t("pack_install_url")}
              ?disabled=${this._installing}
              @input=${(e: Event) => (this._packUrl = (e.target as HTMLInputElement).value)}
            />
            <button class="fp3d-btn" type="submit" ?disabled=${this._installing || !this._packUrl.trim()}>
              ${this._installing ? this.t("pack_installing") : this.t("pack_install_url")}
            </button>
          </form>`
        : nothing}
      ${this._packMsg ? html`<p class="fp3d-sub ${this._packMsg.ok ? "fp3d-notice" : "fp3d-pack-error"}">${this._packMsg.text}</p>` : nothing}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`;
  }

  /** Where a pack installed from GitHub came from, as a link (#25). */
  private renderOrigin(pack: FurniturePack) {
    const origin = packOrigin(pack);
    if (!origin) return nothing;
    return html`<span class="fp3d-sub">${this.t("pack_from")} <a href=${origin.url} target="_blank" rel="noreferrer noopener">${origin.label}</a></span>`;
  }

  /** Installs the pack at a GitHub URL: Home Assistant fetches and checks it, the browser only sends the URL (#25). */
  private async installFromUrl(e: Event): Promise<void> {
    e.preventDefault();
    const url = this._packUrl.trim();
    if (!url || !this.hass || this._installing) return;
    this._installing = true;
    try {
      const hass = this.hass;
      const res = await askingFirst((confirm) => installPackFromUrl(hass, url, confirm), this.askConfirm);
      if (!res) return;
      this._packUrl = "";
      this._packMsg = { ok: true, text: this.t("pack_imported", { name: res.name, publisher: res.publisher, n: res.items }) };
      this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    } catch (err) {
      this._packMsg = { ok: false, text: this.packError(err) };
    } finally {
      this._installing = false;
    }
  }

  /** Imports one or several pack files at once. */
  private async importPackFile(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const files = [...(input.files ?? [])];
    input.value = "";
    if (!files.length || !this.hass) return;
    const done: string[] = [];
    const failed: string[] = [];
    for (const file of files) {
      try {
        const hass = this.hass;
        const text = await file.text();
        const res = await askingFirst((confirm) => importPack(hass, text, confirm), this.askConfirm);
        if (!res) continue;
        done.push(this.t("pack_imported", { name: res.name, publisher: res.publisher, n: res.items }));
      } catch (err) {
        failed.push(`${file.name}: ${this.packError(err)}`);
      }
    }
    if (done.length) this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    const summary = files.length > 1 ? [this.t("packs_imported_n", { n: done.length, total: files.length })] : [];
    this._packMsg = { ok: failed.length === 0, text: [...summary, ...done, ...failed].join(" · ") };
  }

  /** Imports the packs in a picked folder: the folder itself, or a repository with a folder per pack. */
  private async importPackFolder(e: Event): Promise<void> {
    const input = e.target as HTMLInputElement;
    const picked = [...(input.files ?? [])];
    input.value = "";
    if (!picked.length || !this.hass) return;
    const byPath = new Map(picked.map((f) => [f.webkitRelativePath || f.name, f]));
    const plans = planPackFolders([...byPath.keys()]);
    if (!plans.length) {
      this._packMsg = { ok: false, text: this.t("pack_error_no_pack") };
      return;
    }
    const done: string[] = [];
    const failed: string[] = [];
    for (const plan of plans) {
      const label = plan.root || picked[0].webkitRelativePath.split("/")[0] || "pack";
      if (plan.refused.length) {
        failed.push(`${label}: ${this.t("pack_error_not_data", { detail: plan.refused.join(", ") })}`);
        continue;
      }
      try {
        const files: Record<string, string> = {};
        for (const [rel, path] of plan.files) files[rel] = await byPath.get(path)!.text();
        const hass = this.hass;
        const res = await askingFirst((confirm) => importPackFolder(hass, files, confirm), this.askConfirm);
        if (!res) continue;
        done.push(this.t("pack_imported", { name: res.name, publisher: res.publisher, n: res.items }));
      } catch (err) {
        failed.push(`${label}: ${this.packError(err)}`);
      }
    }
    if (done.length) this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
    const summary = plans.length > 1 ? [this.t("packs_imported_n", { n: done.length, total: plans.length })] : [];
    this._packMsg = { ok: failed.length === 0, text: [...summary, ...done, ...failed].join(" · ") };
  }

  /** A refused import in words: the backend's code picks the text, its message names the file and the fault. */
  private packError(err: unknown): string {
    const { code, message } = (err ?? {}) as { code?: string; message?: string };
    const key = `pack_error_${code}` as I18nKey;
    const text = this.t(key, { detail: message ?? String(err) });
    return text === key ? this.t("pack_error_other", { detail: message ?? String(err) }) : text;
  }

  private async deletePack(pack: FurniturePack): Promise<void> {
    if (!this.hass || !(await this.ask(this.t("pack_remove_confirm", { name: packName(pack, this.hass?.language ?? "de") }), this.t("delete"), true))) return;
    await removePack(this.hass, pack.id);
    this._packMsg = null;
    this.dispatchEvent(new CustomEvent("packs-changed", { bubbles: true, composed: true }));
  }

  static styles = [
    tokens,
    controls,
    css`
      .fp3d-sum {
        display: grid;
        gap: 6px;
        width: 100%;
        margin: 4px 0 8px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        background: rgba(4, 8, 18, 0.35);
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-sum-bar {
        display: flex;
        gap: 2px;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-sum-bar i {
        display: block;
      }
      .fp3d-sum-ok {
        background: #34d399;
      }
      .fp3d-sum-update {
        background: #fbbf24;
      }
      .fp3d-sum-missing {
        background: #60a5fa;
      }
      .fp3d-sum-text {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
        font-size: 0.92em;
      }
      .fp3d-sum-ok-text {
        color: #34d399;
      }
      .fp3d-sum-update-text {
        color: #fbbf24;
      }
      .fp3d-sum-missing-text {
        color: #60a5fa;
      }
      .fp3d-sum-caret {
        color: var(--fp3d-muted, #8ea3c4);
        font-size: 0.85em;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      /* headings and body copy in light, neutral tones: blue on navy read poorly (#88) */
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-text);
      }
      .fp3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .fp3d-ext-setting {
        justify-self: start;
        min-height: 36px;
        padding: 0;
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-pet-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pet-row input[type="text"],
      .fp3d-pet-row select {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pet-row input[type="text"] {
        flex: 1;
        min-width: 110px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      /* an active feature is marked by its tick and "active", not a cyan frame on every card (#88) */
      .fp3d-ext-on {
        border-color: var(--fp3d-line);
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-muted);
        font-size: 13px;
        line-height: 1.45;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-tools,
      .fp3d-upd-when {
        display: flex;
        flex-wrap: wrap;
        gap: 8px 14px;
        align-items: center;
      }
      .fp3d-upd-when {
        margin: 8px 0;
      }
      .fp3d-upd-when label {
        display: flex;
        gap: 6px;
        align-items: center;
      }
      .fp3d-upd-when select,
      .fp3d-upd-when input {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pack-url {
        display: flex;
        gap: 8px;
        margin-top: 10px;
      }
      .fp3d-pack-url input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `,
  ];
}

if (!customElements.get("fp3d-extensions")) customElements.define("fp3d-extensions", Extensions);
