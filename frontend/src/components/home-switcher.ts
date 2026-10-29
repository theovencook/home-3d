// The home switcher in the panel header (#53, editors only): pick the active home, add, rename, duplicate or
// delete one. The backend checks every change again; the panel follows the active home by its subscription.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { createHome, deleteHome, duplicateHome, listHomes, renameHome, setActiveHome, type HomeInfo, type HomesList } from "../api.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { HomeAssistant } from "../types.ts";

const ACTIONS = ["new", "rename", "duplicate", "delete"] as const;
type Action = (typeof ACTIONS)[number];

export class Fp3dHomeSwitcher extends LitElement {
  static properties = {
    hass: { attribute: false },
    home: { attribute: false },
    _homes: { state: true },
  };

  declare hass: HomeAssistant;
  /** The home the panel shows. */
  declare home: string | null;
  private declare _homes: HomeInfo[] | null;
  private loaded = false;

  constructor() {
    super();
    this.home = null;
    this._homes = null;
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected willUpdate(changed: PropertyValues): void {
    // loaded once, and again when the panel shows another home (switched here or elsewhere)
    if (this.hass && (!this.loaded || (changed.has("home") && changed.get("home") != null))) {
      this.loaded = true;
      listHomes(this.hass).then(
        (res) => (this._homes = res.homes),
        () => (this._homes = null), // a backend from before #53, or no longer an editor
      );
    }
  }

  private async run(change: () => Promise<HomesList>): Promise<void> {
    try {
      this._homes = (await change()).homes;
    } catch (err) {
      alert(this.t("home_failed", { error: String((err as { message?: string })?.message ?? err) }));
    }
  }

  private async act(action: Action): Promise<void> {
    const current = this._homes?.find((h) => h.id === this.home);
    if (action === "new") {
      const name = prompt(this.t("home_name_prompt"), this.t("home_new_name"))?.trim();
      if (name) await this.run(async () => setActiveHome(this.hass, (await createHome(this.hass, name)).home.id));
    } else if (!current) {
      return;
    } else if (action === "rename") {
      const name = prompt(this.t("home_name_prompt"), current.name)?.trim();
      if (name && name !== current.name) await this.run(() => renameHome(this.hass, current.id, name));
    } else if (action === "duplicate") {
      const name = prompt(this.t("home_name_prompt"), this.t("home_copy_name", { name: current.name }))?.trim();
      if (name) await this.run(async () => setActiveHome(this.hass, (await duplicateHome(this.hass, current.id, name)).home.id));
    } else if (confirm(this.t("home_delete_confirm", { name: current.name }))) {
      await this.run(() => deleteHome(this.hass, current.id));
    }
  }

  private chosen(e: Event): void {
    const select = e.target as HTMLSelectElement;
    const value = select.value;
    // the list shows the panel's home until the change arrives
    select.value = this.home ?? "";
    if ((ACTIONS as readonly string[]).includes(value)) void this.act(value as Action);
    else if (value && value !== this.home) void this.run(() => setActiveHome(this.hass, value));
  }

  protected render() {
    const homes = this._homes;
    if (!homes) return nothing;
    return html`<select aria-label=${this.t("home")} title=${this.t("home")} @change=${(e: Event) => this.chosen(e)}>
      ${homes.map((h) => html`<option value=${h.id} ?selected=${h.id === this.home}>${h.name}</option>`)}
      <option disabled>──────</option>
      ${ACTIONS.filter((a) => a !== "delete" || homes.length > 1).map((a) => html`<option value=${a}>${this.t(`home_${a}`)}</option>`)}
    </select>`;
  }

  static styles = css`
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
