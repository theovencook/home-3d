// The editor's items list (#75): one row per item with select, hide and delete. Long lists (a floor with 110+
// items) draw only the rows in view (`listWindow`), and the scroll state lives here, so scrolling re-renders
// this list only, not the editor and its plan.

import { defineElement } from "../define.ts";
import { css, html, LitElement, nothing } from "lit";
import { listWindow } from "../item-list.ts";
import { tokens } from "../styles.ts";

export interface ItemRow {
  id: string;
  name: string;
  /** Muted text after the name (the room, on the floor list). */
  note?: string;
  hidden: boolean;
  selected: boolean;
}

export interface ItemListTexts {
  hide: string;
  show: string;
  remove: string;
}

const ROW_H = 32;
const MAX_ROWS = 9;

export class ItemListView extends LitElement {
  static properties = {
    rows: { attribute: false },
    texts: { attribute: false },
    editable: { type: Boolean },
    _scroll: { state: true },
  };

  declare rows: ItemRow[];
  declare texts: ItemListTexts;
  /** Delete buttons show only for editors. */
  declare editable: boolean;
  private declare _scroll: number;

  constructor() {
    super();
    this.rows = [];
    this.texts = { hide: "Hide", show: "Show", remove: "Delete" };
    this.editable = false;
    this._scroll = 0;
  }

  private send(name: string, id: string): void {
    this.dispatchEvent(new CustomEvent(name, { detail: { id }, bubbles: true, composed: true }));
  }

  private onScroll(e: Event): void {
    const top = (e.currentTarget as HTMLElement).scrollTop;
    // redraw only when another row reaches the top
    if (Math.floor(top / ROW_H) !== Math.floor(this._scroll / ROW_H)) this._scroll = top;
  }

  render() {
    const rows = this.rows;
    const height = Math.min(rows.length, MAX_ROWS) * ROW_H;
    const win = listWindow(rows.length, this._scroll, height, ROW_H);
    return html`<div class="box" style="height:${height}px" role="list" @scroll=${this.onScroll}>
      <div style="height:${win.before}px"></div>
      ${rows.slice(win.start, win.end).map(
        (r) => html`<div class=${`row${r.selected ? " sel" : ""}${r.hidden ? " off" : ""}`} role="listitem">
          <button class="name" aria-pressed=${r.selected} @click=${() => this.send("item-select", r.id)}>
            <span>${r.name}</span>${r.note ? html`<small>${r.note}</small>` : nothing}
          </button>
          <button class="icon" title=${r.hidden ? this.texts.show : this.texts.hide} aria-label=${r.hidden ? this.texts.show : this.texts.hide} aria-pressed=${r.hidden} @click=${() => this.send("item-hide", r.id)}>
            ${r.hidden ? "◌" : "◉"}
          </button>
          ${this.editable ? html`<button class="icon" title=${this.texts.remove} aria-label=${this.texts.remove} @click=${() => this.send("item-delete", r.id)}>✕</button>` : nothing}
        </div>`,
      )}
      <div style="height:${win.after}px"></div>
    </div>`;
  }

  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }
      .box {
        overflow-y: auto;
        overscroll-behavior: contain;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 2px;
        height: ${ROW_H}px;
        box-sizing: border-box;
      }
      button {
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        height: ${ROW_H - 4}px;
      }
      button:hover,
      button:focus-visible {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      .name {
        flex: 1;
        min-width: 0;
        display: flex;
        gap: 8px;
        align-items: baseline;
        text-align: left;
        padding: 0 8px;
      }
      .name span,
      .name small {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .name small {
        margin-left: auto;
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .sel .name {
        color: var(--fp3d-accent);
      }
      .off .name span {
        opacity: 0.5;
        text-decoration: line-through;
      }
      .icon {
        width: ${ROW_H}px;
        flex: none;
        color: var(--fp3d-muted);
      }
    `,
  ];
}

defineElement("fp3d-item-list", ItemListView);
