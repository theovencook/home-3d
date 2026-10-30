// The "Edit rack" sheet (#113): a front elevation of one rack with its U positions numbered down both sides. Pick
// gear from the list and tap a U to put it there (its lowest U); tap gear to choose it, then move it a U up or down,
// tap "Move" and another U, rename or delete it. Where gear would overlap (or stick out, or not fit) the tap is
// refused and the U and the gear in the way turn red; while gear is picked, the U under the pointer shows a green or
// red ghost. The rules are rack.ts's. The sheet keeps no plan: every change goes out as "rack-change" {slots}, and
// "rack-close" asks to close it. Someone who can't edit sees the rack and nothing to change it with.
//
// Room for later tickets: front / rear toggle and U used / free / watts (#114), links per slot (#119) go in the
// chosen-gear panel and the head.

import { css, html, LitElement, nothing } from "lit";
import { addSlot, checkSlot, moveSlot, removeSlot, slotUnits, type GearOf, type RackRefusal, type RackSlot, type RackSpace } from "../rack.ts";
import { controls, tokens } from "../styles.ts";

type Translate = (key: string, vars?: Record<string, string | number>) => string;

/** A piece of gear the sheet offers. */
export interface RackGearChoice {
  type: string;
  name: string;
}

/** What is picked: new gear to add, or chosen gear to move to a tapped U. */
type Pick = { add: string } | { move: string };

/** The U the pointer is over with picked gear: where the gear would go and whether it may. */
export interface RackGhost {
  units: number[];
  ok: boolean;
  clash: string[];
}

/** A refused change: the U it wanted, what was in the way, why. */
export interface RackRefused {
  units: number[];
  clash: string[];
  why: RackRefusal;
}

/** Height of one U row in the elevation (px). */
const ROW = 24;

let counter = 0;
/** A slot id unique within its rack (the rack's other ids are checked too). */
function newSlotId(taken: readonly RackSlot[]): string {
  let id = "";
  do id = `g${Date.now().toString(36)}${(counter++).toString(36)}`;
  while (taken.some((s) => s.id === id));
  return id;
}

export class RackSheet extends LitElement {
  static properties = {
    heading: {},
    space: { attribute: false },
    labels: { attribute: false },
    slots: { attribute: false },
    gear: { attribute: false },
    gearOf: { attribute: false },
    nameOf: { attribute: false },
    editable: { type: Boolean },
    t: { attribute: false },
    selected: { state: true },
    pick: { state: true },
    ghost: { state: true },
    refused: { state: true },
  };

  declare heading: string;
  declare space: RackSpace;
  /** The number shown at each rail position, from the lowest up (rack-frame.ts rackLayout units' labels). */
  declare labels: number[];
  declare slots: RackSlot[];
  declare gear: RackGearChoice[];
  declare gearOf: GearOf;
  declare nameOf: (type: string) => string;
  declare editable: boolean;
  declare t: Translate;
  declare selected: string | null;
  declare pick: Pick | null;
  declare ghost: RackGhost | null;
  declare refused: RackRefused | null;

  constructor() {
    super();
    this.heading = "";
    this.labels = [];
    this.slots = [];
    this.gear = [];
    this.gearOf = () => null;
    this.nameOf = (type) => type;
    this.editable = false;
    this.t = (key) => key;
    this.selected = null;
    this.pick = null;
    this.ghost = null;
    this.refused = null;
  }

  // ---------------------------------------------------------------------------------------------- actions

  private send(slots: RackSlot[]): void {
    this.slots = slots;
    this.dispatchEvent(new CustomEvent("rack-change", { detail: { slots }, bubbles: true, composed: true }));
  }

  private refuse(r: { units: number[]; clash: string[]; why?: RackRefusal }): void {
    this.refused = { units: r.units, clash: r.clash, why: r.why ?? "overlap" };
  }

  /** Pick new gear: the next tap on a U puts it there (the same again drops it). */
  pickGear(type: string): void {
    if (!this.editable) return;
    this.refused = null;
    this.ghost = null;
    this.pick = this.pick && "add" in this.pick && this.pick.add === type ? null : { add: type };
  }

  /** Choose gear in the rack (again: let it go). */
  tapSlot(id: string): void {
    this.refused = null;
    this.ghost = null;
    this.pick = null;
    this.selected = this.selected === id ? null : id;
  }

  /** The chosen gear goes where the next tapped U is. */
  startMove(): void {
    if (!this.editable || !this.selected) return;
    this.refused = null;
    this.pick = { move: this.selected };
  }

  /** The picked gear under the pointer at rail position `u` (null: the pointer left). */
  hoverUnit(u: number | null): void {
    if (u === null || !this.pick) {
      this.ghost = null;
      return;
    }
    const s = this.candidate(u);
    if (!s) return;
    const c = checkSlot(this.space, this.slots, s, this.gearOf);
    this.ghost = { units: c.units, ok: c.ok, clash: c.clash };
  }

  /** A tap on rail position `u`: places the picked gear there, else lets the chosen gear go. */
  tapUnit(u: number): void {
    const pick = this.pick;
    if (!pick || !this.editable) {
      this.selected = null;
      this.refused = null;
      return;
    }
    const r = "add" in pick ? addSlot(this.space, this.slots, { id: newSlotId(this.slots), type: pick.add, u }, this.gearOf) : moveSlot(this.space, this.slots, pick.move, u, this.gearOf);
    if (!r.ok) return this.refuse(r);
    this.refused = null;
    this.ghost = null;
    this.pick = null;
    this.selected = "add" in pick ? (r.slots.find((s) => !this.slots.some((o) => o.id === s.id))?.id ?? null) : pick.move;
    this.send(r.slots);
  }

  /** Move the chosen gear `by` U up (negative: down). */
  nudge(by: number): void {
    const s = this.slots.find((o) => o.id === this.selected);
    if (!this.editable || !s) return;
    const r = moveSlot(this.space, this.slots, s.id, s.u + by, this.gearOf);
    if (!r.ok) return this.refuse(r);
    this.refused = null;
    this.send(r.slots);
  }

  rename(name: string): void {
    if (!this.editable || !this.selected) return;
    const clean = name.trim().slice(0, 60);
    this.send(this.slots.map((s) => (s.id === this.selected ? { ...s, name: clean || null } : s)));
  }

  deleteSelected(): void {
    if (!this.editable || !this.selected) return;
    const id = this.selected;
    this.selected = null;
    this.pick = null;
    this.refused = null;
    this.send(removeSlot(this.slots, id));
  }

  close(): void {
    this.dispatchEvent(new CustomEvent("rack-close", { bubbles: true, composed: true }));
  }

  /** The slot the picked gear would be at rail position `u`. */
  private candidate(u: number): RackSlot | null {
    const pick = this.pick;
    if (!pick) return null;
    if ("add" in pick) return { id: "\u0000new", type: pick.add, u };
    const s = this.slots.find((o) => o.id === pick.move);
    return s ? { ...s, u } : null;
  }

  private onKey = (e: KeyboardEvent): void => {
    if ((e.target as HTMLElement | null)?.tagName === "INPUT") return;
    if (e.key === "Escape") {
      e.stopPropagation();
      if (this.pick || this.refused) {
        this.pick = null;
        this.ghost = null;
        this.refused = null;
      } else this.close();
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      e.stopPropagation();
      this.nudge(e.key === "ArrowUp" ? 1 : -1);
    } else if (e.key === "Delete") {
      e.stopPropagation();
      this.deleteSelected();
    }
  };

  // ---------------------------------------------------------------------------------------------- render

  /** The grid row (1 = top) where gear from rail position `u` up `n` U starts. */
  private row(u: number, n: number): string {
    return `${this.space.u - (u + n - 1) + 1} / span ${n}`;
  }

  render() {
    const t = this.t;
    const u = this.space?.u ?? 0;
    const tops = Array.from({ length: u }, (_, i) => u - i);
    const bad = new Set(this.refused?.units ?? []);
    const clash = new Set([...(this.refused?.clash ?? []), ...(this.ghost && !this.ghost.ok ? this.ghost.clash : [])]);
    const chosen = this.slots.find((s) => s.id === this.selected) ?? null;
    const label = (p: number) => this.labels[p - 1] ?? p;
    return html`<div class="fp3d-rack-veil" @click=${(e: Event) => e.target === e.currentTarget && this.close()} @keydown=${this.onKey}>
      <div class="fp3d-rack-sheet" role="dialog" aria-label=${t("rack_edit")} tabindex="-1">
        <div class="fp3d-rack-head">
          <h3>${this.heading || t("rack_edit")}</h3>
          <button class="fp3d-btn" aria-label=${t("close")} @click=${() => this.close()}>✕</button>
        </div>
        <div class="fp3d-rack-body">
          <div class="fp3d-rack-elev" style="grid-template-rows: repeat(${u}, ${ROW}px)" @pointerleave=${() => this.hoverUnit(null)}>
            ${tops.map(
              (p) => html`<span class="fp3d-rack-num fp3d-rack-left" style="grid-row: ${this.row(p, 1)}">${label(p)}</span>
                <button
                  class="fp3d-rack-cell ${bad.has(p) ? "fp3d-rack-bad" : ""}"
                  style="grid-row: ${this.row(p, 1)}"
                  data-u=${p}
                  aria-label=${t("rack_unit", { n: label(p) })}
                  @pointerenter=${() => this.hoverUnit(p)}
                  @click=${() => this.tapUnit(p)}
                ></button>
                <span class="fp3d-rack-num fp3d-rack-right" style="grid-row: ${this.row(p, 1)}">${label(p)}</span>`,
            )}
            ${this.slots.map((s) => {
              const n = slotUnits(s, this.gearOf).length;
              if (s.u < 1 || s.u + n - 1 > u) return nothing;
              const cls = ["fp3d-rack-gear", s.id === this.selected ? "fp3d-rack-chosen" : "", clash.has(s.id) ? "fp3d-rack-bad" : "", this.pick && "move" in this.pick && this.pick.move === s.id ? "fp3d-rack-moving" : ""].join(" ");
              return html`<button class=${cls} style="grid-row: ${this.row(s.u, n)}" data-slot=${s.id} aria-pressed=${s.id === this.selected} @click=${() => this.tapSlot(s.id)}>
                <span>${s.name || this.nameOf(s.type)}</span>${n > 1 ? html`<small>${n}U</small>` : nothing}
              </button>`;
            })}
            ${this.ghost?.units.length
              ? html`<div class="fp3d-rack-ghost ${this.ghost.ok ? "fp3d-rack-ok" : "fp3d-rack-bad"}" style="grid-row: ${this.row(Math.max(1, this.ghost.units[0]), Math.min(this.ghost.units.length, u - Math.max(1, this.ghost.units[0]) + 1))}"></div>`
              : nothing}
          </div>
          <div class="fp3d-rack-side">
            ${this.refused ? html`<p class="fp3d-rack-why" role="alert">${t(`rack_${this.refused.why}`)}</p>` : nothing}
            ${chosen ? this.renderChosen(chosen) : nothing}
            ${this.editable ? this.renderGear() : html`<p class="fp3d-sub">${t("rack_read_only")}</p>`}
          </div>
        </div>
      </div>
    </div>`;
  }

  private renderChosen(s: RackSlot) {
    const t = this.t;
    const units = slotUnits(s, this.gearOf);
    const label = (p: number) => this.labels[p - 1] ?? p;
    const where = units.length > 1 ? `${label(units[0])}-${label(units.at(-1)!)}` : `${label(units[0])}`;
    return html`<section class="fp3d-rack-chosen-box">
      <h4>${s.name || this.nameOf(s.type)}</h4>
      <p class="fp3d-sub">${t("rack_at", { u: where })}</p>
      ${this.editable
        ? html`<label class="fp3d-field"
              >${t("furn_name")}
              <input type="text" maxlength="60" .value=${s.name ?? ""} placeholder=${this.nameOf(s.type)} @change=${(e: Event) => this.rename((e.target as HTMLInputElement).value)}
            /></label>
            <div class="fp3d-rack-actions">
              <button class="fp3d-btn" title=${t("rack_up")} @click=${() => this.nudge(1)}>▲</button>
              <button class="fp3d-btn" title=${t("rack_down")} @click=${() => this.nudge(-1)}>▼</button>
              <button class="fp3d-btn" aria-pressed=${!!this.pick && "move" in this.pick} @click=${() => this.startMove()}>${t("rack_move")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${() => this.deleteSelected()}>${t("delete")}</button>
            </div>
            ${this.pick && "move" in this.pick ? html`<p class="fp3d-sub">${t("rack_move_hint")}</p>` : nothing}`
        : nothing}
    </section>`;
  }

  private renderGear() {
    const t = this.t;
    const picked = this.pick && "add" in this.pick ? this.pick.add : null;
    return html`<section>
      <h4>${t("rack_add")}</h4>
      ${this.gear.length
        ? html`<div class="fp3d-rack-list">
            ${this.gear.map((g) => {
              const n = this.gearOf(g.type)?.gear.u ?? 1;
              return html`<button class="fp3d-btn fp3d-rack-choice" aria-pressed=${picked === g.type} @click=${() => this.pickGear(g.type)}>${g.name}<small>${n}U</small></button>`;
            })}
          </div>`
        : html`<p class="fp3d-sub">${t("rack_no_gear")}</p>`}
      ${picked ? html`<p class="fp3d-sub">${t("rack_add_hint")}</p>` : nothing}
    </section>`;
  }

  static styles = [
    tokens,
    controls,
    css`
      .fp3d-rack-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: flex;
        align-items: center;
        /* at the left, so the editor's 3D pane on the right shows the rack as it changes */
        justify-content: flex-start;
        background: rgba(0, 0, 0, 0.25);
        padding: 16px;
      }
      .fp3d-rack-sheet {
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        box-shadow: var(--fp3d-shadow);
        width: min(720px, 100%);
        max-height: calc(100% - 16px);
        display: flex;
        flex-direction: column;
        outline: none;
      }
      .fp3d-rack-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 10px 14px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rack-head h3 {
        margin: 0;
        font-size: 16px;
      }
      .fp3d-rack-body {
        display: flex;
        gap: 16px;
        padding: 14px;
        overflow: auto;
      }
      .fp3d-rack-elev {
        display: grid;
        grid-template-columns: 28px minmax(180px, 280px) 28px;
        flex: none;
        align-self: flex-start;
        border-radius: 6px;
        background: var(--fp3d-bg);
        padding: 6px 0;
      }
      .fp3d-rack-num {
        font-size: 11px;
        color: var(--fp3d-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        font-variant-numeric: tabular-nums;
        border-bottom: 1px dotted var(--fp3d-line);
      }
      .fp3d-rack-left {
        grid-column: 1;
      }
      .fp3d-rack-right {
        grid-column: 3;
      }
      .fp3d-rack-cell,
      .fp3d-rack-gear,
      .fp3d-rack-ghost {
        grid-column: 2;
      }
      .fp3d-rack-cell {
        border: 0;
        border-bottom: 1px dotted var(--fp3d-line);
        background: transparent;
        padding: 0;
        cursor: pointer;
        font: inherit;
      }
      .fp3d-rack-cell:hover {
        background: rgba(120, 170, 255, 0.08);
      }
      .fp3d-rack-gear {
        z-index: 1;
        margin: 1px 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 3px;
        background: var(--fp3d-bg2);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        padding: 0 8px;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .fp3d-rack-gear small {
        color: var(--fp3d-muted);
      }
      .fp3d-rack-gear.fp3d-rack-chosen {
        border-color: var(--fp3d-accent);
        box-shadow: inset 0 0 0 1px var(--fp3d-accent);
      }
      .fp3d-rack-gear.fp3d-rack-moving {
        opacity: 0.55;
      }
      .fp3d-rack-ghost {
        z-index: 2;
        pointer-events: none;
        margin: 1px 2px;
        border-radius: 3px;
        border: 2px dashed var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.16);
      }
      .fp3d-rack-ghost.fp3d-rack-bad,
      .fp3d-rack-cell.fp3d-rack-bad,
      .fp3d-rack-gear.fp3d-rack-bad {
        border: 2px solid var(--fp3d-danger);
        background: rgba(255, 107, 139, 0.22);
      }
      .fp3d-rack-side {
        position: sticky;
        top: 0;
        align-self: flex-start;
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fp3d-rack-side h4 {
        margin: 0 0 6px;
        font-size: 13px;
      }
      .fp3d-rack-why {
        margin: 0;
        padding: 8px 10px;
        border-radius: 6px;
        color: var(--fp3d-danger);
        border: 1px solid var(--fp3d-danger);
      }
      .fp3d-rack-list,
      .fp3d-rack-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rack-choice {
        display: flex;
        gap: 6px;
        align-items: baseline;
      }
      .fp3d-rack-choice small {
        color: var(--fp3d-muted);
      }
      .fp3d-rack-choice[aria-pressed="true"],
      .fp3d-rack-actions [aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
        margin-bottom: 8px;
      }
      @media (max-width: 600px) {
        .fp3d-rack-veil {
          padding: 0;
          align-items: stretch;
        }
        .fp3d-rack-sheet {
          border-radius: 0;
          max-height: none;
        }
        .fp3d-rack-body {
          flex-direction: column;
        }
        .fp3d-rack-side {
          position: static;
          align-self: stretch;
        }
        .fp3d-rack-elev {
          align-self: stretch;
          grid-template-columns: 28px 1fr 28px;
        }
      }
    `,
  ];
}

if (!customElements.get("fp3d-rack-sheet")) customElements.define("fp3d-rack-sheet", RackSheet);
