// Icon field with a picker (#327), a lazy chunk of the editor. Where Home Assistant's own <ha-icon-picker> is defined
// (it shows the icons and filters as you type) that is used; otherwise a text box with a button opens a grid of icons
// with a search filter (the full Material Design list from Home Assistant's frontend when it can be read, else a short
// list of common ones). A typed name is always accepted. Value: the name without "mdi:" (as the plan stores it).
// Fires "icon-change" {value: string | null}.

import { css, html, LitElement, nothing } from "lit";
import { defineElement } from "../../define.ts";
import { bareIconName, COMMON_ICONS, filterIcons, parseIconList, type IconEntry } from "../../icon-list.ts";

let fullList: Promise<IconEntry[]> | null = null;
const common = (): IconEntry[] => COMMON_ICONS.map((name) => ({ name, keywords: [] }));
/** The full list from Home Assistant's frontend once; the common icons when it cannot be read. */
function loadIcons(): Promise<IconEntry[]> {
  fullList ??= fetch("/static/mdi/iconList.json")
    .then((r) => (r.ok ? r.json() : []))
    .then((d) => {
      const list = parseIconList(d);
      return list.length ? list : common();
    })
    .catch(common);
  return fullList;
}

const safe = (n: string) => n.replace(/[^a-z0-9-]/gi, "");

export class IconPicker extends LitElement {
  static properties = {
    value: { attribute: false },
    hass: { attribute: false },
    disabled: { type: Boolean },
    label: { type: String },
    placeholder: { type: String },
    searchText: { type: String },
    noneText: { type: String },
    _open: { state: true },
    _q: { state: true },
    _list: { state: true },
  };
  declare value: string | null | undefined;
  declare hass: unknown;
  declare disabled: boolean;
  declare label: string;
  declare placeholder: string;
  declare searchText: string;
  declare noneText: string;
  private declare _open: boolean;
  private declare _q: string;
  private declare _list: IconEntry[] | null;

  constructor() {
    super();
    this.disabled = false;
    this.label = "";
    this.placeholder = "mdi:thermometer";
    this.searchText = "Search icons";
    this.noneText = "No icon of that name. You can still type it above.";
    this._open = false;
    this._q = "";
    this._list = null;
  }

  private emit(v: string | null) {
    this.dispatchEvent(new CustomEvent("icon-change", { detail: { value: bareIconName(v) }, bubbles: true, composed: true }));
  }

  private toggle() {
    this._open = !this._open;
    if (this._open && !this._list) void loadIcons().then((l) => (this._list = l));
  }

  render() {
    const name = bareIconName(this.value);
    // Home Assistant's own picker when it is there (it loads on demand in some versions, so check at every draw)
    if (customElements.get("ha-icon-picker")) {
      return html`<ha-icon-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${name ? `mdi:${name}` : ""}
        ?disabled=${this.disabled}
        @value-changed=${(e: CustomEvent<{ value?: string }>) => {
          e.stopPropagation();
          this.emit(e.detail.value || null);
        }}
      ></ha-icon-picker>`;
    }
    const hits = this._open && this._list ? filterIcons(this._list, this._q, 120) : [];
    return html`<span class="row">
        <input
          type="text"
          .value=${this.value ?? ""}
          placeholder=${this.placeholder}
          spellcheck="false"
          autocomplete="off"
          ?disabled=${this.disabled}
          @change=${(e: Event) => this.emit((e.target as HTMLInputElement).value)}
        />
        ${name ? html`<ha-icon .icon=${`mdi:${safe(name)}`}></ha-icon>` : nothing}
        <button type="button" class="pick" ?disabled=${this.disabled} aria-expanded=${this._open ? "true" : "false"} aria-label=${this.label || "Icons"} title=${this.label || "Icons"} @click=${() => this.toggle()}>▦</button>
      </span>
      ${this._open
        ? html`<div class="panel">
            <input
              type="search"
              class="search"
              .value=${this._q}
              placeholder=${this.searchText}
              aria-label=${this.searchText}
              spellcheck="false"
              autocomplete="off"
              @input=${(e: Event) => (this._q = (e.target as HTMLInputElement).value)}
            />
            ${this._list
              ? html`<div class="grid" role="listbox">
                  ${hits.map(
                    (i) => html`<button
                      type="button"
                      role="option"
                      class=${i.name === name ? "on" : ""}
                      title=${i.name}
                      aria-label=${i.name}
                      @click=${() => {
                        this._open = false;
                        this._q = "";
                        this.emit(i.name);
                      }}
                    >
                      <ha-icon .icon=${`mdi:${safe(i.name)}`}></ha-icon>
                    </button>`,
                  )}
                </div>`
              : html`<small>…</small>`}
            ${this._list && !hits.length ? html`<small>${this.noneText}</small>` : nothing}
          </div>`
        : nothing}`;
  }

  static styles = css`
    :host {
      display: block;
      min-width: 0;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .row input {
      flex: 1;
      min-width: 0;
      font: inherit;
    }
    ha-icon {
      --mdc-icon-size: 22px;
      color: var(--fp3d-accent, #37e0ff);
    }
    .pick {
      font: inherit;
      min-width: 36px;
      min-height: 32px;
      cursor: pointer;
    }
    .panel {
      margin-top: 6px;
      padding: 8px;
      border-radius: 10px;
      background: rgba(127, 127, 127, 0.12);
    }
    .search {
      width: 100%;
      box-sizing: border-box;
      font: inherit;
      margin-bottom: 6px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
      gap: 4px;
      max-height: 200px;
      overflow: auto;
    }
    .grid button {
      min-height: 40px;
      display: grid;
      place-items: center;
      border: 1px solid transparent;
      border-radius: 8px;
      background: transparent;
      color: inherit;
      cursor: pointer;
    }
    .grid button:hover,
    .grid button:focus-visible,
    .grid button.on {
      border-color: var(--fp3d-accent, #37e0ff);
    }
    small {
      opacity: 0.8;
    }
  `;
}

defineElement("fp3d-icon-picker", IconPicker);
