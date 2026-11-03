// Roaming pets (#337): a pet's panel in the editor's side panel. Its daily routine (spots with a pose, a facing, a time
// window and days) and its triggers (an entity changing to a state, an event, a time of day; then a place, a pose and
// how many minutes), and which of them puts the pet where it is now (from the server, home_3d/pets/subscribe).
// Places are set by a tap in the plan: the panel asks with "pet-pick" {ref}, the editor sets it. Every change goes out
// as "pet-change" {pet}. Drawn in the editor's own styles (no shadow root). A lazy chunk of its own (editor/lazy.ts).

import { html, LitElement, nothing, type TemplateResult } from "lit";
import { defineElement } from "../define.ts";
import { PET_POSES, uid, type Pet, type PetPlace, type PetSpot, type PetTrigger } from "../model.ts";
import { petSpots, subscribePets, type PetLive } from "../pet-place.ts";
import type { HomeAssistant } from "../types.ts";

type Translate = (key: string, vars?: Record<string, string | number>) => string;
const TURNS = [0, 45, 90, 135, 180, 225, 270, 315];

export class PetPanel extends LitElement {
  static properties = {
    pet: { attribute: false },
    floors: { attribute: false },
    hass: { attribute: false },
    home: { attribute: false },
    readonly: { attribute: false },
    roamOff: { attribute: false },
    picking: { attribute: false },
    t: { attribute: false },
    _live: { state: true },
  };

  declare pet: Pet;
  declare floors: { id: string; name: string }[];
  declare hass: HomeAssistant | undefined;
  declare home: string | null | undefined;
  declare readonly: boolean;
  declare roamOff: boolean;
  /** The place the next tap in the plan sets ("spot:new", "spot:<id>", "trigger:<id>"). */
  declare picking: string | null;
  declare t: Translate;
  /** Where the server puts the pet now (null: nowhere, it wanders; undefined: no answer yet, or an older Home 3D). */
  private declare _live: PetLive | null | undefined;
  private unsub: Promise<() => Promise<void>> | null = null;

  constructor() {
    super();
    this.floors = [];
    this.readonly = false;
    this.roamOff = false;
    this.picking = null;
    this.t = (k) => k;
    this._live = undefined;
  }

  protected createRenderRoot() {
    return this;
  }

  connectedCallback(): void {
    super.connectedCallback();
    const conn = this.hass?.connection;
    if (!conn || this.unsub) return;
    this.unsub = subscribePets(conn, this.home, (pets) => (this._live = pets[this.pet?.id] ?? null));
    this.unsub.catch(() => (this.unsub = null));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    void this.unsub?.then((u) => u()).catch(() => undefined);
    this.unsub = null;
  }

  private emit(pet: Pet) {
    this.dispatchEvent(new CustomEvent("pet-change", { detail: { pet }, bubbles: true, composed: true }));
  }

  private pick(ref: string | null) {
    this.dispatchEvent(new CustomEvent("pet-pick", { detail: { ref }, bubbles: true, composed: true }));
  }

  private setSpot(id: string, patch: Partial<PetSpot>) {
    this.emit({ ...this.pet, spots: petSpots(this.pet).map((s) => (s.id === id ? { ...s, ...patch } : s)) });
  }

  private setTrigger(id: string, patch: Partial<PetTrigger>) {
    this.emit({ ...this.pet, triggers: (this.pet.triggers ?? []).map((x) => (x.id === id ? { ...x, ...patch } : x)) });
  }

  /** A time field: "HH:MM" or empty (null). */
  private time(label: string, value: string | null | undefined, set: (v: string | null) => void) {
    return html`<label class="fp3d-field">${label}<input type="time" .value=${value ?? ""} ?disabled=${this.readonly} @change=${(e: Event) => set((e.target as HTMLInputElement).value || null)} /></label>`;
  }

  /** Pose, facing and where it is in the plan: shared by spots and triggers. */
  private place(ref: string, p: PetPlace, set: (patch: Partial<PetPlace>) => void) {
    const floor = this.floors.find((f) => f.id === p.floor_id);
    const placed = p.x != null && p.z != null;
    return html`<label class="fp3d-field"
        >${this.t("pet_pose")}
        <select ?disabled=${this.readonly} @change=${(e: Event) => set({ pose: (e.target as HTMLSelectElement).value as PetPlace["pose"] })}>
          ${PET_POSES.map((k) => html`<option value=${k} ?selected=${(p.pose ?? "sit") === k}>${this.t(`pet_pose_${k}`)}</option>`)}
        </select></label
      >
      <label class="fp3d-field"
        >${this.t("pet_turn")}
        <select ?disabled=${this.readonly} @change=${(e: Event) => set({ rotation: (e.target as HTMLSelectElement).value === "" ? null : Number((e.target as HTMLSelectElement).value) })}>
          <option value="" ?selected=${p.rotation == null}>${this.t("pet_turn_auto")}</option>
          ${TURNS.map((d) => html`<option value=${d} ?selected=${p.rotation === d}>${d}°</option>`)}
        </select></label
      >
      ${this.readonly
        ? nothing
        : html`<button class="fp3d-btn" aria-pressed=${this.picking === ref} @click=${() => this.pick(this.picking === ref ? null : ref)}>
            📍 ${this.picking === ref ? this.t("pet_place_picking") : this.t("pet_place_pick")}
          </button>`}
      <span class="fp3d-sub">${placed ? (floor?.name ?? "") : this.t("pet_place_none")}</span>`;
  }

  private days(s: PetSpot) {
    const lang = this.hass?.language ?? "en";
    const fmt = new Intl.DateTimeFormat(lang, { weekday: "short" });
    const on = (d: number) => !s.days?.length || s.days.includes(d);
    const toggle = (d: number) => {
      const next = [0, 1, 2, 3, 4, 5, 6].filter((x) => (x === d ? !on(x) : on(x)));
      this.setSpot(s.id, { days: next.length === 7 || !next.length ? null : next });
    };
    // 1 Jan 2024 was a Monday (day 0)
    return html`<div class="fp3d-pet-days" role="group" aria-label=${this.t("pet_days")}>
      ${[0, 1, 2, 3, 4, 5, 6].map((d) => html`<button class="fp3d-btn" aria-pressed=${on(d)} ?disabled=${this.readonly} @click=${() => toggle(d)}>${fmt.format(new Date(2024, 0, 1 + d))}</button>`)}
    </div>`;
  }

  private drop(kind: "spots" | "triggers", id: string) {
    const list = kind === "spots" ? petSpots(this.pet) : (this.pet.triggers ?? []);
    this.emit({ ...this.pet, [kind]: list.filter((x) => x.id !== id) });
  }

  private spotRow(s: PetSpot, i: number, list: PetSpot[]): TemplateResult {
    const now = this._live?.spot === s.id && !this._live.trigger;
    const move = (by: number) => {
      const next = [...list];
      next.splice(i, 1);
      next.splice(i + by, 0, s);
      this.emit({ ...this.pet, spots: next });
    };
    return html`<div class="fp3d-pet-row">
      <b class=${now ? "fp3d-pet-on" : ""}>${this.t("pet_spot_n", { n: i + 1 })}${now ? ` · ${this.t("pet_active")}` : ""}</b>
      ${this.place(`spot:${s.id}`, s, (patch) => this.setSpot(s.id, patch))}
      ${this.time(this.t("pet_from"), s.from, (v) => this.setSpot(s.id, { from: v }))} ${this.time(this.t("pet_to"), s.to, (v) => this.setSpot(s.id, { to: v }))} ${this.days(s)}
      ${this.readonly
        ? nothing
        : html`<button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${!i} @click=${() => move(-1)}>↑</button>
            <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${i === list.length - 1} @click=${() => move(1)}>↓</button>
            <button class="fp3d-btn fp3d-danger" @click=${() => this.drop("spots", s.id)}>${this.t("delete")}</button>`}
    </div>`;
  }

  private triggerRow(x: PetTrigger, i: number): TemplateResult {
    const kind = x.kind ?? "state";
    const now = this._live?.trigger === x.id;
    const until = now && this._live?.until ? new Date(this._live.until).toLocaleTimeString(this.hass?.language, { hour: "2-digit", minute: "2-digit" }) : "";
    const text = (label: string, value: string | null | undefined, set: (v: string | null) => void, list?: string) =>
      html`<label class="fp3d-field">${label}<input type="text" list=${list ?? nothing} .value=${value ?? ""} ?disabled=${this.readonly} @change=${(e: Event) => set((e.target as HTMLInputElement).value.trim() || null)} /></label>`;
    return html`<div class="fp3d-pet-row">
      <b class=${now ? "fp3d-pet-on" : ""}>⚡ ${i + 1}${now ? ` · ${this.t("pet_active_until", { time: until })}` : ""}</b>
      <label class="fp3d-field"
        >${this.t("pet_trigger_kind")}
        <select ?disabled=${this.readonly} @change=${(e: Event) => this.setTrigger(x.id, { kind: (e.target as HTMLSelectElement).value as PetTrigger["kind"] })}>
          ${(["state", "event", "time"] as const).map((k) => html`<option value=${k} ?selected=${kind === k}>${this.t(`pet_trigger_${k}`)}</option>`)}
        </select></label
      >
      ${kind === "time"
        ? this.time(this.t("pet_trigger_at"), x.at, (v) => this.setTrigger(x.id, { at: v }))
        : kind === "event"
          ? html`${text(this.t("pet_trigger_event_type"), x.event, (v) => this.setTrigger(x.id, { event: v }))} ${text(this.t("pet_trigger_event_entity"), x.entity, (v) => this.setTrigger(x.id, { entity: v }), "fp3d-pet-entities")}`
          : html`${text(this.t("pet_trigger_entity"), x.entity, (v) => this.setTrigger(x.id, { entity: v }), "fp3d-pet-entities")} ${text(this.t("pet_trigger_to"), x.to, (v) => this.setTrigger(x.id, { to: v }))}`}
      ${this.place(`trigger:${x.id}`, x, (patch) => this.setTrigger(x.id, patch))}
      <label class="fp3d-field"
        >${this.t("pet_trigger_minutes")}
        <input type="number" min="0.5" max="1440" step="1" .value=${String(x.minutes ?? 10)} ?disabled=${this.readonly} @change=${(e: Event) => this.setTrigger(x.id, { minutes: Math.min(1440, Math.max(0.5, Number((e.target as HTMLInputElement).value) || 10)) })}
      /></label>
      ${this.readonly ? nothing : html`<button class="fp3d-btn fp3d-danger" @click=${() => this.drop("triggers", x.id)}>${this.t("delete")}</button>`}
    </div>`;
  }

  render() {
    const pet = this.pet;
    if (!pet) return nothing;
    const spots = petSpots(pet);
    const triggers = pet.triggers ?? [];
    const live = this._live;
    const at = live?.trigger ? triggers.findIndex((x) => x.id === live.trigger) : spots.findIndex((s) => s.id === live?.spot);
    const now = live === undefined ? "" : !live ? this.t("pet_now_free") : live.trigger ? this.t("pet_now_trigger", { n: at + 1 }) : this.t("pet_now_spot", { n: at + 1 });
    const entities = triggers.some((x) => (x.kind ?? "state") !== "time") ? Object.keys(this.hass?.states ?? {}).sort() : [];
    return html`<section>
        <h3>🐾 ${pet.name || this.t(`pet_kind_${pet.kind}`)}</h3>
        ${this.roamOff ? html`<p class="fp3d-note">${this.t("pet_roam_off")}</p>` : now ? html`<p class="fp3d-sub">${now}</p>` : nothing}
      </section>
      <section>
        <h3>${this.t("pet_routine")}</h3>
        <p class="fp3d-sub">${this.t("pet_routine_hint")}</p>
        ${spots.map((s, i) => this.spotRow(s, i, spots))}
        ${this.readonly ? nothing : html`<button class="fp3d-btn" aria-pressed=${this.picking === "spot:new"} @click=${() => this.pick(this.picking === "spot:new" ? null : "spot:new")}>${this.picking === "spot:new" ? `📍 ${this.t("pet_place_picking")}` : `+ ${this.t("pet_spot_add")}`}</button>`}
      </section>
      <section>
        <h3>${this.t("pet_triggers")}</h3>
        <p class="fp3d-sub">${this.t("pet_triggers_hint")}</p>
        ${triggers.map((x, i) => this.triggerRow(x, i))}
        ${this.readonly ? nothing : html`<button class="fp3d-btn" @click=${() => this.emit({ ...pet, triggers: [...triggers, { id: uid("trigger"), kind: "state", entity: null, to: null, event: null, at: null, floor_id: null, x: null, z: null, pose: "sit", rotation: null, minutes: 10 }] })}>+ ${this.t("pet_trigger_add")}</button>`}
        ${entities.length ? html`<datalist id="fp3d-pet-entities">${entities.map((e) => html`<option value=${e}></option>`)}</datalist>` : nothing}
      </section>`;
  }
}

defineElement("fp3d-pet-panel", PetPanel);
