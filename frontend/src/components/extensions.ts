// The "Extensions" page of the panel: the built-in features, the fun extras and the installed furniture packs.
// It lives in the editor bundle (loaded with it) and is shown to admins only.

import { css, html, LitElement, nothing } from "lit";
import { importPack, importPackFolder, removePack } from "../api.ts";
import { FEATURES, FUN, knownFeature, released, unlockedFeatures } from "../features.ts";
import { DOG_BREEDS, PET_EYES, PET_FURS_OF, PET_POSES, type Building, type Pet } from "../model.ts";
import { isStaticPet, petFloor, setPetStatic } from "../pet-place.ts";
import { translate, type I18nKey } from "../i18n.ts";
import { planPackFolders } from "../pack-folder.ts";
import { packName, type FurniturePack } from "../packs.ts";
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
    _open: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  /** On the editors list (#7); unset: admins are (a backend before #7). */
  declare canEdit: boolean | undefined;
  declare packs: FurniturePack[] | undefined;
  /** The plan (the fun extras keep their settings in it, e.g. the pets). */
  declare building: Building | null | undefined;
  private declare _packMsg: { ok: boolean; text: string } | null;
  /** Long lists opened by the viewer (the installed packs); closed, a bar sums them up. */
  private declare _open: Set<string>;

  constructor() {
    super();
    this._packMsg = null;
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
      ${this.renderFun(unlocked)} ${this.renderPacks()}
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
                ? html`<label class="fp3d-check"><input type="checkbox" .checked=${on} @change=${(e: Event) => set((p) => (p.on = (e.target as HTMLInputElement).checked))} /> ${this.t("pets_show")}</label>
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

  /** Fun pack "Halloween": decorations in the furniture library, and the ghost to switch on and off. */
  private renderHalloween(unlocked: boolean) {
    const ghost = this.building?.settings.halloween?.ghost !== false;
    if (!unlocked) return nothing;
    return html`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isEditor && this.building
        ? html`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${ghost}
              @change=${(e: Event) => this.editBuilding((b) => (b.settings.halloween = { ...(b.settings.halloween ?? {}), ghost: (e.target as HTMLInputElement).checked }))}
            />
            ${this.t("halloween_ghost")}</label
          >`
        : nothing}
      <span class="fp3d-sub">${this.t("halloween_deco_hint")}</span>
    </div>`;
  }

  private renderPacks() {
    const packs = this.packs ?? [];
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
            ${(p.features ?? []).some((f) => !knownFeature(f)) ? html`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>` : nothing}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${() => this.deletePack(p)}>${this.t("pack_remove")}</button>
        </div>`,
      )}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${(e: Event) => this.importPackFile(e)} />
      </label>
      <label class="fp3d-btn fp3d-pack-import">
        ${this.t("pack_import_folder")}
        <input type="file" webkitdirectory multiple hidden @change=${(e: Event) => this.importPackFolder(e)} />
      </label>
      ${this._packMsg ? html`<p class="fp3d-sub ${this._packMsg.ok ? "fp3d-notice" : "fp3d-pack-error"}">${this._packMsg.text}</p>` : nothing}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`;
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
        const res = await importPack(this.hass, await file.text());
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
        const res = await importPackFolder(this.hass, files);
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
    if (!this.hass || !confirm(this.t("pack_remove_confirm", { name: packName(pack, this.hass?.language ?? "de") }))) return;
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
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .fp3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
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
      .fp3d-ext-on {
        border-color: var(--fp3d-accent);
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
        color: var(--fp3d-soft);
        font-size: 13px;
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
