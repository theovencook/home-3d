// The home switcher in the panel header (#53, editors only): open a home, add, rename, duplicate or delete one, or
// make the open home the one the displays show. The backend checks every change again.
// Since #58 opening, adding and duplicating a home only changes what this view shows ("home-open"; null: follow the
// active home again); only "Show on displays" changes the active home, so an experiment never blanks a wall tablet.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { createHome, deleteHome, duplicateHome, listHomes, renameHome, setActiveHome, type HomeInfo, type HomesList } from "../api.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { HomeAssistant } from "../types.ts";

const ACTIONS = ["show", "new", "rename", "duplicate", "delete"] as const;
type Action = (typeof ACTIONS)[number];

/** The menu's actions: "show" while the open home is not the active one (#58), "delete" while there are two homes. */
export function homeActions(homes: readonly HomeInfo[], active: string | null, shown: string | null): Action[] {
  return ACTIONS.filter((a) => (a !== "show" || (shown != null && shown !== active)) && (a !== "delete" || homes.length > 1));
}

/** The header chip (#57): the shown home's name and whether it is the home the displays show; null while unknown. */
export function homeChip(homes: readonly HomeInfo[], active: string | null, shown: string | null): { name: string; onDisplays: boolean } | null {
  const home = homes.find((h) => h.id === shown);
  return home ? { name: home.name, onDisplays: home.id === active } : null;
}

/** A home's line in the home menu: the active one carries the "Active on displays" badge (#57). */
export function homeOptionLabel(home: HomeInfo, active: string | null, t: (key: "home_active_badge") => string): string {
  return home.id === active ? `${home.name} · ${t("home_active_badge")}` : home.name;
}

export class Fp3dHomeSwitcher extends LitElement {
  static properties = {
    hass: { attribute: false },
    home: { attribute: false },
    _homes: { state: true },
    _active: { state: true },
  };

  declare hass: HomeAssistant;
  /** The home the panel shows. */
  declare home: string | null;
  private declare _homes: HomeInfo[] | null;
  /** The home the displays show (the active one). */
  private declare _active: string | null;
  private loaded = false;

  constructor() {
    super();
    this.home = null;
    this._homes = null;
    this._active = null;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected willUpdate(changed: PropertyValues): void {
    // loaded once, and again when the panel shows another home (switched here or elsewhere)
    if (this.hass && (!this.loaded || (changed.has("home") && changed.get("home") != null))) {
      this.loaded = true;
      listHomes(this.hass).then(
        (res) => this.listed(res),
        () => (this._homes = null), // a backend from before #53, or no longer an editor
      );
    }
  }

  private listed(res: HomesList): void {
    this._homes = res.homes;
    this._active = res.active ?? null;
  }

  protected updated(): void {
    // A picked option's selectedness no longer follows its `selected` attribute, so after a switch the list could
    // name another home than the one loaded (#57): set the value itself after every render.
    const select = this.renderRoot?.querySelector?.("select") as HTMLSelectElement | null;
    if (select && this.home && select.value !== this.home) select.value = this.home;
  }

  private async run<T extends HomesList>(change: () => Promise<T>): Promise<T | null> {
    try {
      const res = await change();
      this.listed(res);
      return res;
    } catch (err) {
      alert(this.t("home_failed", { error: String((err as { message?: string })?.message ?? err) }));
      return null;
    }
  }

  /** Show a home in this view only (#58); null: follow the active home again. */
  private open(home: string | null): void {
    this.dispatchEvent(new CustomEvent("home-open", { detail: { home }, bubbles: true, composed: true }));
  }

  private async act(action: Action): Promise<void> {
    const current = this._homes?.find((h) => h.id === this.home);
    if (action === "new") {
      const name = prompt(this.t("home_name_prompt"), this.t("home_new_name"))?.trim();
      const res = name ? await this.run(() => createHome(this.hass, name)) : null;
      if (res) this.open(res.home.id);
    } else if (!current) {
      return;
    } else if (action === "show") {
      // no confirmation (#58): the action says what it does and is undone the same way
      if (await this.run(() => setActiveHome(this.hass, current.id))) this.open(null);
    } else if (action === "rename") {
      const name = prompt(this.t("home_name_prompt"), current.name)?.trim();
      if (name && name !== current.name) await this.run(() => renameHome(this.hass, current.id, name));
    } else if (action === "duplicate") {
      const name = prompt(this.t("home_name_prompt"), this.t("home_copy_name", { name: current.name }))?.trim();
      const res = name ? await this.run(() => duplicateHome(this.hass, current.id, name)) : null;
      if (res) this.open(res.home.id);
    } else if (confirm(this.t("home_delete_confirm", { name: current.name }))) {
      // the open home is gone: show the active one (the backend picks another if it was the active one)
      if (await this.run(() => deleteHome(this.hass, current.id))) this.open(null);
    }
  }

  private chosen(e: Event): void {
    const select = e.target as HTMLSelectElement;
    const value = select.value;
    // the list shows the panel's home until the change arrives
    select.value = this.home ?? "";
    if ((ACTIONS as readonly string[]).includes(value)) void this.act(value as Action);
    else if (value && value === this.home) {
      // the shown home again: load it afresh (#57)
      this.dispatchEvent(new CustomEvent("home-reload", { detail: { home: value }, bubbles: true, composed: true }));
    } else if (value) this.open(value === this._active ? null : value);
  }

  protected render() {
    const homes = this._homes;
    if (!homes) return nothing;
    const chip = homeChip(homes, this._active, this.home);
    const t = (key: I18nKey) => this.t(key);
    return html`${chip
        ? html`<span class="chip ${chip.onDisplays ? "" : "off"}" title=${chip.onDisplays ? this.t("home_active_badge") : this.t("home_not_on_displays")}
            >${chip.name}${chip.onDisplays ? nothing : html`<small>${this.t("home_not_on_displays")}</small>`}</span
          >`
        : nothing}<select aria-label=${this.t("home")} title=${this.t("home")} .value=${this.home ?? ""} @change=${(e: Event) => this.chosen(e)}>
      ${homes.map((h) => html`<option value=${h.id} .selected=${h.id === this.home}>${homeOptionLabel(h, this._active, t)}</option>`)}
      <option disabled>──────</option>
      ${homeActions(homes, this._active, this.home).map((a) => html`<option value=${a}>${this.t(`home_${a}`)}</option>`)}
    </select>`;
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }
    .chip {
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
      padding: 3px 10px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 16em;
      font-weight: 600;
    }
    .chip.off {
      background: rgba(255, 170, 0, 0.18);
      border-color: rgba(255, 170, 0, 0.6);
    }
    .chip small {
      font-weight: 400;
      opacity: 0.85;
    }
    select {
      font: inherit;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      padding: 4px 6px;
      max-width: 14em;
    }
    option {
      color: var(--primary-text-color, #111);
      background: var(--card-background-color, #fff);
    }
  `;
}

if (!customElements.get("fp3d-home-switcher")) customElements.define("fp3d-home-switcher", Fp3dHomeSwitcher);
