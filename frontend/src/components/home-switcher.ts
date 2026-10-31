// The home switcher in the panel header (#53, editors only): open a home, add, rename, duplicate or delete one, or
// make the open home the one the displays show. The backend checks every change again.
// Since #58 opening, adding and duplicating a home only changes what this view shows ("home-open"; null: follow the
// active home again); only "Show on displays" changes the active home, so an experiment never blanks a wall tablet.
// Since #132 it is a menu button of its own, not a native <select>: a closed select switched home on every arrow key
// press (Chrome and Edge on Windows), so the actions below the homes could not be reached from the keyboard.

import { css, html, LitElement, nothing, type PropertyValues } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { askText, tell } from "../ask.ts";
import { createHome, deleteHome, duplicateHome, listHomes, loadSampleHome, renameHome, setActiveHome, type HomeInfo, type HomesList } from "../api.ts";
import { translate, type I18nKey } from "../i18n.ts";
import type { HomeAssistant } from "../types.ts";
import "./ask-dialog.ts";

const ACTIONS = ["show", "new", "sample", "rename", "duplicate", "delete"] as const;
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

/** A line of the home menu: a home, a separator, an action, or the destructive action set apart (#160). */
export interface MenuRow {
  value: string;
  label: string;
  kind: "home" | "sep" | "action" | "danger";
}

/**
 * The home menu's lines (#132): the homes (the active one badged), a separator, then the actions; Delete comes last
 * in a block of its own below another separator (#160), away from Rename and Duplicate.
 */
export function menuRows(homes: readonly HomeInfo[], active: string | null, shown: string | null, t: (key: I18nKey) => string): MenuRow[] {
  const actions = homeActions(homes, active, shown);
  const sep = { value: "", label: "", kind: "sep" as const };
  return [
    ...homes.map((h) => ({ value: h.id, label: homeOptionLabel(h, active, t), kind: "home" as const })),
    sep,
    ...actions.filter((a) => a !== "delete").map((a) => ({ value: a, label: t(`home_${a}`), kind: "action" as const })),
    ...(actions.includes("delete") ? [sep, { value: "delete", label: t("home_delete"), kind: "danger" as const }] : []),
  ];
}

/** The typed answer names the home to delete (#160): spaces around it and letter case do not matter. */
export function namesHome(typed: string | null, name: string): boolean {
  return typed != null && typed.trim().toLocaleLowerCase() === name.trim().toLocaleLowerCase();
}

/**
 * A key on the home menu's button (#132): Down / Up / Enter / Space open it, arrows (Home, End) move the highlight
 * over the separator, Enter or Space picks the highlighted line, Esc or Tab closes it. Null: not the menu's key.
 */
export function menuKey(state: { open: boolean; cursor: number }, rows: readonly MenuRow[], key: string): { open: boolean; cursor: number; pick?: string } | null {
  const { open, cursor } = state;
  const usable = rows.map((r, i) => (r.kind === "sep" ? -1 : i)).filter((i) => i >= 0);
  const step = (dir: number) => usable[Math.max(0, Math.min(usable.length - 1, usable.indexOf(cursor) + dir))] ?? cursor;
  if (!open) return ["ArrowDown", "ArrowUp", "Enter", " "].includes(key) ? { open: true, cursor } : null;
  if (key === "ArrowDown") return { open, cursor: step(1) };
  if (key === "ArrowUp") return { open, cursor: step(-1) };
  if (key === "Home") return { open, cursor: usable[0] ?? cursor };
  if (key === "End") return { open, cursor: usable[usable.length - 1] ?? cursor };
  if (key === "Enter" || key === " ") return rows[cursor] && rows[cursor].kind !== "sep" ? { open: false, cursor, pick: rows[cursor].value } : { open: false, cursor };
  if (key === "Escape" || key === "Tab") return { open: false, cursor };
  return null;
}

export class Fp3dHomeSwitcher extends LitElement {
  static properties = {
    hass: { attribute: false },
    home: { attribute: false },
    _homes: { state: true },
    _active: { state: true },
    _open: { state: true },
    _cursor: { state: true },
  };

  declare hass: HomeAssistant;
  /** The home the panel shows. */
  declare home: string | null;
  private declare _homes: HomeInfo[] | null;
  /** The home the displays show (the active one). */
  private declare _active: string | null;
  private declare _open: boolean;
  private declare _cursor: number;
  private loaded = false;
  private blurTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    super();
    this.home = null;
    this._homes = null;
    this._active = null;
    this._open = false;
    this._cursor = 0;
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

  /** The menu's lines. */
  private rows(): MenuRow[] {
    return this._homes ? menuRows(this._homes, this._active, this.home, (key) => this.t(key)) : [];
  }

  /** Open the menu on the shown home. */
  private openMenu(): void {
    clearTimeout(this.blurTimer);
    this._cursor = Math.max(0, this.rows().findIndex((r) => r.value === this.home));
    this._open = true;
  }

  private onKey(e: KeyboardEvent): void {
    if (!this._open && ["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
      e.preventDefault();
      this.openMenu();
      return;
    }
    const next = menuKey({ open: this._open, cursor: this._cursor }, this.rows(), e.key);
    if (!next) return;
    if (e.key !== "Tab") e.preventDefault();
    this._open = next.open;
    this._cursor = next.cursor;
    if (next.pick !== undefined) this.pick(next.pick);
  }

  protected updated(changed: PropertyValues): void {
    // the highlighted line stays in view while the arrows move it
    if (this._open && changed.has("_cursor")) (this.renderRoot?.querySelector?.("li.cursor") as HTMLElement | null)?.scrollIntoView?.({ block: "nearest" });
  }

  private async run<T extends HomesList>(change: () => Promise<T>): Promise<T | null> {
    try {
      const res = await change();
      this.listed(res);
      return res;
    } catch (err) {
      await tell(this.t("home_failed", { error: String((err as { message?: string })?.message ?? err) }), { ok: this.t("ask_ok") });
      return null;
    }
  }

  /** Show a home in this view only (#58); null: follow the active home again. */
  private open(home: string | null): void {
    this.dispatchEvent(new CustomEvent("home-open", { detail: { home }, bubbles: true, composed: true }));
  }

  private async act(action: Action): Promise<void> {
    const current = this._homes?.find((h) => h.id === this.home);
    const named = (value: string) => askText(this.t("home_name_prompt"), value, { ok: this.t("ask_ok"), cancel: this.t("cancel") });
    if (action === "new") {
      const name = await named(this.t("home_new_name"));
      const res = name ? await this.run(() => createHome(this.hass, name)) : null;
      if (res) this.open(res.home.id);
    } else if (action === "sample") {
      // a new home of its own (#54), opened in this view only like any new home (#58)
      const res = await this.run(() => loadSampleHome(this.hass));
      if (res) this.open(res.home.id);
    } else if (!current) {
      return;
    } else if (action === "show") {
      // no confirmation (#58): the action says what it does and is undone the same way
      if (await this.run(() => setActiveHome(this.hass, current.id))) this.open(null);
    } else if (action === "rename") {
      const name = await named(current.name);
      if (name && name !== current.name) await this.run(() => renameHome(this.hass, current.id, name));
    } else if (action === "duplicate") {
      const name = await named(this.t("home_copy_name", { name: current.name }));
      const res = name ? await this.run(() => duplicateHome(this.hass, current.id, name)) : null;
      if (res) this.open(res.home.id);
    } else {
      // deleting needs the home's name typed (#160): a slip in the menu cannot take the real house with it
      const typed = await askText(this.t("home_delete_type", { name: current.name }), "", { ok: this.t("delete"), cancel: this.t("cancel"), danger: true });
      if (typed === null) return;
      if (!namesHome(typed, current.name)) {
        await tell(this.t("home_delete_mismatch", { name: current.name }), { ok: this.t("ask_ok") });
        return;
      }
      // the open home is gone: show the active one (the backend picks another if it was the active one)
      if (await this.run(() => deleteHome(this.hass, current.id))) this.open(null);
    }
  }

  /** A line of the menu picked: a home opens in this view, an action runs. The button names the loaded home. */
  private pick(value: string): void {
    this._open = false;
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
    const shown = homes.find((h) => h.id === this.home);
    const t = (key: I18nKey) => this.t(key);
    return html`${chip
        ? html`<span class="chip ${chip.onDisplays ? "live" : "off"}" title=${chip.onDisplays ? this.t("home_active_badge") : this.t("home_not_on_displays")}
            >${chip.onDisplays ? html`<b class="live" aria-hidden="true"></b>` : nothing}${chip.name}<small>${chip.onDisplays ? this.t("home_live") : this.t("home_not_on_displays")}</small></span
          >`
        : nothing}<span class="menu"
        ><button
          class="pick"
          aria-haspopup="listbox"
          aria-expanded=${this._open}
          aria-label=${this.t("home")}
          title=${this.t("home")}
          @click=${() => (this._open ? (this._open = false) : this.openMenu())}
          @keydown=${(e: KeyboardEvent) => this.onKey(e)}
          @blur=${() => (this.blurTimer = setTimeout(() => (this._open = false), 150))}
        >
          ${shown ? homeOptionLabel(shown, this._active, t) : this.t("home")}<span class="caret" aria-hidden="true">▾</span></button
        >${this._open
          ? html`<ul role="listbox" aria-label=${this.t("home")} @mousedown=${(e: Event) => e.preventDefault()}>
              ${this.rows().map((r, i) =>
                r.kind === "sep"
                  ? html`<li role="separator" class="sep"></li>`
                  : html`<li
                      role="option"
                      aria-selected=${r.value === this.home}
                      class=${classMap({ cursor: i === this._cursor, action: r.kind === "action", danger: r.kind === "danger", chosen: r.value === this.home })}
                      @mouseenter=${() => (this._cursor = i)}
                      @click=${() => this.pick(r.value)}
                    >
                      ${r.label}
                    </li>`,
              )}
            </ul>`
          : nothing}</span
      >`;
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
    /* the open home is the one on the displays (#160): a steady marker while it is edited */
    .chip.live {
      border-color: rgba(229, 57, 53, 0.7);
    }
    .chip .live {
      align-self: center;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #e53935;
      flex: none;
    }
    .menu {
      position: relative;
      display: inline-block;
      min-width: 0;
    }
    .pick {
      font: inherit;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      padding: 4px 6px;
      max-width: 14em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
    .pick:focus-visible {
      outline: 2px solid var(--fp3d-accent, #03a9f4);
      outline-offset: 1px;
    }
    .caret {
      margin-left: 6px;
      opacity: 0.7;
    }
    ul {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 60;
      min-width: 100%;
      max-width: 22em;
      max-height: 60vh;
      overflow-y: auto;
      margin: 0;
      padding: 4px;
      list-style: none;
      color: var(--primary-text-color, #111);
      background: var(--card-background-color, #fff);
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      border-radius: 10px;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
    }
    li {
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      white-space: nowrap;
    }
    li.cursor {
      background: color-mix(in srgb, var(--fp3d-accent, #03a9f4) 22%, transparent);
    }
    li.chosen {
      font-weight: 600;
    }
    li.danger {
      color: var(--error-color, #db4437);
    }
    li.sep {
      height: 1px;
      padding: 0;
      margin: 4px 6px;
      background: var(--fp3d-line, rgba(127, 127, 127, 0.4));
      cursor: default;
    }
  `;
}

if (!customElements.get("fp3d-home-switcher")) customElements.define("fp3d-home-switcher", Fp3dHomeSwitcher);
