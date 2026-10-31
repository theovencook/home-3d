// The toolbar: tools, the settings menu and its links to the Settings page, the hint bar and the help sheet.

import { html, nothing, svg } from "lit";
import { live } from "lit/directives/live.js";
import { modalFocus } from "../../dialog-focus.ts";
import { released } from "../../features.ts";
import { loadLocate } from "../../load-locate.ts";
import type { I18nKey } from "../../i18n.ts";
import { OUTDOOR_TYPES, type Floor } from "../../model.ts";
import { LEGEND, SHORTCUTS } from "../../help.ts";
import { hintKey, type Tool } from "../../editor-hint.ts";
import { startChecklist, type StartStep } from "../../start-checklist.ts";
import { furnitureName } from "../../furniture-names.ts";
import type { Fp3dEditor } from "../editor.ts";

/** ToolbarPart: methods of `Fp3dEditor`, copied onto its prototype by editor.ts (see parts.ts). */
export class ToolbarPart {
  /** The hint bar under the plan (#96, #62): what the current tool does, what can be done with the selection, on a new
   *  plan the next step, and in Doors & windows mode what a tap will do right now. */
  hintText(this: Fp3dEditor): string {
    // while a guide holds what is placed or dragged, the bar says which and how to get free of it (#143)
    // (placing and Doors & windows keep their own sentence: it already says what a click does there)
    const snapped = this.drag ? this._guides.lines?.[0]?.label : undefined;
    if (snapped) return this.t("hint_snapped", { what: snapped });
    const key = this.hintKeyNow();
    // the kind the next tap adds is always named: it is never inherited silently (#63)
    if (key === "hint_place" && this._placing) return this.t("hint_place", { name: furnitureName(this.hass, this._placing.type) });
    if (key === "hint_opening") return this._openingNote ?? this._openingHover ?? this.t("hint_opening", { kind: this.t(`preset_${this._openingPreset}` as I18nKey) });
    return this.t(key);
  }

  /** Which hint string shows now (editor-hint.ts hintKey, #96). */
  hintKeyNow(this: Fp3dEditor): I18nKey {
    const floor = this.floor;
    return hintKey({
      tool: this._tool,
      hasFloor: !!floor,
      rooms: floor?.rooms.length ?? 0,
      placing: !!this._placing,
      selected: this._deviceId ? "device" : this._furnitureId ? "furniture" : this._openingId ? "opening" : this._roomId ? "room" : null,
      wallPick: this._wallPick,
      kerbPick: this._kerbPick,
      fixedHint: this._fixedHint,
      outdoorFree: !!this._outdoorFree,
      jointPlace: !!this._jointPlace,
      pipeMode: !!this._pipeMode,
      poolArea: !!this.poolArea,
      pipeDraft: !!this._pipeDraft,
      poolTech: released("pool"),
    });
  }

  /** Switch to a tool (from the tool menu): a fresh drawing, the sidebar for it. */
  setTool(this: Fp3dEditor, tool: Tool): void {
    const floor = this.floor;
    if (tool !== this._tool) {
      this.clearToolSelection();
      if (tool === "roof" || tool === "energy") this._roomId = null;
    }
    this._tool = tool;
    if (tool !== "select" && tool !== "furniture") this.cancelPlacing();
    this._draft = [];
    this._cursor = null;
    this._notice = null;
    this._rectName = "";
    this._openingNote = null;
    this.openingHoverText = null;
    this._pipeMode = false;
    this._pipeDraft = null;
    // the pool tool works on a pool: the selected one, else the first of the floor
    if (tool === "pool" && this.outdoorArea?.type !== "pool") {
      const first = floor?.outdoor.find((x) => x.type === "pool");
      if (first) this.selectItem("outdoor", first.id);
    }
    // another tool: its sidebar (library, presets, details) unfolds again, even if it was collapsed for the last one
    this.setSideFolded(false);
  }

  /**
   * The toolbar, tidied up: "Select" stays a button; the drawing tools sit in menus by what they are for – "Build"
   * (room, wall, door & window, floor opening, roof), "Outside" (areas, pool) – with "Furniture" and "Energy" as
   * buttons of their own. Tools with choices (room, outdoor, pool) unfold them in the menu; a group's button names the
   * tool in use. Undo and redo stay, the view switches (fit, 3D beside, wall view, lock) are in a view menu.
   */
  renderToolBar(this: Fp3dEditor, floor: Floor | undefined) {
    const admin = this.isEditor;
    const off = !floor || !admin;
    type Choice = { label: string; on: boolean; pick: () => void };
    type Entry = { tool: Tool; label: string; choices?: () => Choice[] };
    const outdoorTypes = OUTDOOR_TYPES.filter((t) => t !== "pool");
    const room: Entry = {
      tool: "rect",
      label: this.t("tool_room"),
      choices: () => [
        { label: this.t("tool_rect"), on: this._tool === "rect", pick: () => this.setTool("rect") },
        { label: this.t("tool_polygon"), on: this._tool === "polygon", pick: () => this.setTool("polygon") },
        { label: this.t("tool_measure"), on: this._tool === "measure", pick: () => this.setTool("measure") },
      ],
    };
    const outdoor: Entry = {
      tool: "outdoor",
      label: this.t("tool_outdoor"),
      choices: () => [
        ...outdoorTypes.map((t) => ({
          label: this.t(`out_${t}` as I18nKey),
          on: this._tool === "outdoor" && (this._outdoorType ?? "lawn") === t,
          pick: () => {
            this.setTool("outdoor");
            this._outdoorType = t;
          },
        })),
        { label: this.t("outdoor_shape_rect"), on: this._tool === "outdoor" && !this._outdoorFree, pick: () => (this.setTool("outdoor"), (this._outdoorFree = false)) },
        { label: this.t("outdoor_shape_free"), on: this._tool === "outdoor" && this._outdoorFree, pick: () => (this.setTool("outdoor"), (this._outdoorFree = true)) },
      ],
    };
    const pool: Entry = {
      tool: "pool",
      label: this.t("tool_pool"),
      choices: () => [
        ...(["rect", "round", "oval", "free"] as const).map((k) => ({
          label: this.t(`pool_shape_${k}` as I18nKey),
          on: this._tool === "pool" && !this._pipeMode && (this._poolShape ?? "rect") === k,
          pick: () => {
            this.setTool("pool");
            this._poolShape = k;
            this._outdoorFree = k === "free";
          },
        })),
        ...(this.pipeRules ? [{ label: this.t("pool_pipe_draw"), on: this._tool === "pool" && !!this._pipeMode, pick: () => (this.setTool("pool"), (this._pipeMode = true)) }] : []),
      ],
    };
    const groups: { id: string; label: string; entries: Entry[] }[] = [
      {
        id: "build",
        label: this.t("tool_group_build"),
        entries: [room, { tool: "wall", label: this.t("tool_wall") }, { tool: "opening", label: this.t("tool_opening") }, { tool: "hole", label: this.t("tool_hole") }, { tool: "roof", label: this.t("tool_roof") }],
      },
      { id: "outside", label: this.t("tool_group_outside"), entries: [outdoor, pool] },
    ];
    const inEntry = (e: Entry) => e.tool === this._tool || (e === room && (this._tool === "polygon" || this._tool === "measure"));
    // what a group's button says while one of its tools is in use: the tool, and its shape or kind
    const detail = (e: Entry) =>
      e === pool ? (this._pipeMode ? this.t("pool_pipe_draw") : this.t(`pool_shape_${this._poolShape ?? "rect"}` as I18nKey)) : e === outdoor ? this.t(`out_${this._outdoorType ?? "lawn"}` as I18nKey) : e === room ? this.t(`tool_${this._tool}` as I18nKey) : "";
    const close = () => ((this._toolMenu = null), (this._toolOpen = null));
    const plain = (tool: Tool, label: string) =>
      html`<button aria-pressed=${this._tool === tool} ?disabled=${off} @click=${() => (close(), this.setTool(tool))}>${label}</button>`;
    return html`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool === "select"} ?disabled=${!floor} @click=${() => (close(), this.setTool("select"))}>${this.t("tool_select")}</button>
        ${groups.map((g) => {
          const active = g.entries.find(inEntry);
          const open = this._toolMenu === g.id;
          const text = active ? `${active.label}${detail(active) ? `: ${detail(active)}` : ""}` : g.label;
          return html`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!active} aria-haspopup="menu" aria-expanded=${open} ?disabled=${off} @click=${() => ((this._toolMenu = open ? null : g.id), (this._toolOpen = null), (this._viewMenu = false))}>
              ${text} <span class="fp3d-caret">▾</span>
            </button>
            ${open
              ? html`<div class="fp3d-menu-veil" @click=${close}></div>
                  <div class="fp3d-menu" role="menu">
                    ${g.entries.map((x) => {
                      const choices = x.choices?.() ?? [];
                      const unfolded = this._toolOpen === x.tool;
                      return html`<button
                          role="menuitem"
                          class="fp3d-menu-item ${inEntry(x) ? "fp3d-menu-on" : ""}"
                          aria-expanded=${choices.length ? unfolded : nothing}
                          @click=${() => {
                            if (choices.length) this._toolOpen = unfolded ? null : x.tool;
                            else {
                              this.setTool(x.tool);
                              close();
                            }
                          }}
                        >
                          ${x.label}${choices.length ? html`<span class="fp3d-menu-more">${unfolded ? "▾" : "▸"}</span>` : nothing}
                        </button>
                        ${unfolded
                          ? html`<div class="fp3d-menu-sub">
                              ${choices.map(
                                (c) =>
                                  html`<button
                                    class="fp3d-chip ${c.on ? "fp3d-menu-on" : ""}"
                                    @click=${() => {
                                      c.pick();
                                      this._draft = [];
                                      close();
                                    }}
                                  >
                                    ${c.label}
                                  </button>`,
                              )}
                            </div>`
                          : nothing}`;
                    })}
                  </div>`
              : nothing}
          </div>`;
        })}
        ${plain("furniture", this.t("tool_furniture"))} ${plain("energy", this.t("tool_energy"))}
      </div>
      <!-- Wall view is a mode: beside the tools, kept away from the view buttons by undo / redo (#91) -->
      <div class="fp3d-seg fp3d-seg-menu">
        <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${(e: Event) => (close(), this.toggleWallPick(e.currentTarget as HTMLElement))}>${this.t("wall_view")}</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button class="fp3d-undo" ?disabled=${!this._canUndo} @click=${() => this.undo()} title=${`${this.t("undo")} (Ctrl+Z)`} aria-label=${this.t("undo")}>↶</button>
        <button class="fp3d-undo" ?disabled=${!this._canRedo} @click=${() => this.redo()} title=${`${this.t("redo")} (Ctrl+Y)`} aria-label=${this.t("redo")}>↷</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu fp3d-seg-views">
        <button class="fp3d-split-btn" aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${() => (close(), this.toggleSplit())}>${this._split ? "◧ " : "▢ "}${this.t("split_3d")}</button>
        <button title=${this.t("fit_hint")} @click=${() => (close(), this.fit())}>${this.t("fit")}</button>
        <button title=${this.t("fit_all_hint")} @click=${() => (close(), this.fit(true))}>${this.t("fit_all")}</button>
        <button class="fp3d-help-btn" aria-pressed=${this._help} aria-label=${this.t("help_open")} title=${this.t("help_open")} @click=${() => (close(), (this._help = !this._help))}>?</button>
      </div>
      ${this.renderSettingsMenu(close)}`;
  }

  /**
   * ⚙ Settings: everything that belongs to the whole plan, not to a floor, a room or an item. Each topic opens the
   * Settings page (#139) at its section; locating keeps its own assistant (a bundle of its own).
   */
  renderSettingsMenu(this: Fp3dEditor, closeTools: () => void) {
    const admin = this.isEditor;
    const open = this._settingsMenu;
    const all: { key: string; section: string | null; id?: string; icon: string; label: string; admin: boolean }[] = [
      { key: "all", section: null, icon: "⚙", label: this.t("all_settings"), admin: false },
      { key: "house", section: "general", icon: "🏠", label: this.t("settings_house"), admin: true },
      { key: "weather", section: "scene", id: "weather_entity", icon: "🌦", label: this.t("settings_weather"), admin: true },
      { key: "director", section: "cameras", id: "director.doorbell", icon: "🎬", label: this.t("card_director"), admin: true },
      { key: "voice", section: "voice", icon: "🎙", label: this.t("voice"), admin: false },
      ...(released("locate") && this.isHaAdmin ? [{ key: "locate", section: null, icon: "📡", label: this.t("locate"), admin: true }] : []),
      { key: "favorites", section: "favourites", icon: "⭐", label: this.t("favorites"), admin: true },
      { key: "backdrop", section: "scene", id: "backdrop.kind", icon: "🖼", label: this.t("backdrop"), admin: true },
      { key: "terrain", section: "scene", id: "terrain.level", icon: "⛰", label: this.t("terrain"), admin: true },
      { key: "backup", section: "backup", icon: "💾", label: this.t("backup"), admin: true },
      ...(this.isHaAdmin ? [{ key: "editors", section: "access", icon: "👥", label: this.t("editors_title"), admin: true }] : []),
    ];
    const topics = all.filter((t) => admin || !t.admin);
    const toggle = () => {
      closeTools();
      this._settingsMenu = !open;
    };
    return html`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-settings">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${open} title=${this.t("settings")} @click=${toggle}>
          ⚙ <span class="fp3d-settings-word">${this.t("settings")}</span> <span class="fp3d-caret">▾</span>
        </button>
        ${open
          ? html`<div class="fp3d-menu-veil" @click=${() => (this._settingsMenu = false)}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu">
                ${topics.map(
                  (t) => html`<button
                    role="menuitem"
                    class="fp3d-menu-item"
                    @click=${() => {
                      this._settingsMenu = false;
                      if (t.key === "locate") {
                        if (this.hass) void loadLocate().then((m) => m.openLocateSetup(this.hass!, this._doc, () => this.hass, (look) => this.setSettings({ person_look: look === "figure" ? null : look })));
                        return;
                      }
                      this.openSettings(t.section, t.id ?? null);
                    }}
                  >
                    ${t.icon} ${t.label}
                  </button>`,
                )}
              </div>`
          : nothing}
      </div>
    </div>`;
  }

  /**
   * Where a house-wide setting went (#139): a line in a tool panel or item form that opens the Settings page at it.
   * `text` says what is there; `icon` leads it (a lock's state).
   */
  renderSettingsLink(this: Fp3dEditor, section: string, id: string | null, text: I18nKey, icon = "⚙") {
    return html`<button class="fp3d-settings-link fp3d-wide" @click=${() => this.openSettings(section, id)}>
      <span>${icon} ${this.t(text)}</span><b>${this.t("settings")} ›</b>
    </button>`;
  }

  /** Opens the Settings page (#139) at a section and setting; the panel listens. */
  openSettings(this: Fp3dEditor, section: string | null, id: string | null = null): void {
    this.dispatchEvent(new CustomEvent("open-settings", { detail: { section, id }, bubbles: true, composed: true }));
  }

  /** Rooms for the Home Assistant areas of the first free HA floor, from the empty-home checklist (#193). */
  startAreas(this: Fp3dEditor): void {
    let floor = this.floor;
    if (!floor || !this.unplacedAreas(floor).length) {
      const ha = this.freeHaFloors[0];
      if (!ha) return;
      if (floor && !floor.rooms.length && !floor.ha_floor) {
        // the empty floor the person started with becomes that HA floor
        this.change((_, f) => {
          f.ha_floor = ha.floor_id;
          f.name = ha.name;
        });
      } else this.addFloor(ha);
      floor = this.floor;
    }
    if (floor) this.addAreaRooms(floor);
  }

  /** Is there something for "Add rooms from Home Assistant areas" to add? */
  hasStartAreas(this: Fp3dEditor): boolean {
    const floor = this.floor;
    return this.freeHaFloors.length > 0 || (!!floor && this.unplacedAreas(floor).length > 0);
  }

  /** The empty home's checklist (#193): replaces the hint pill until the first room exists. */
  renderStart(this: Fp3dEditor) {
    if (!this.isEditor || this._tool !== "select" || this._placing) return null;
    const list = startChecklist(this._doc);
    if (!list.show) return null;
    const t = this.t.bind(this);
    const hasFloor = this._doc.floors.length > 0;
    const drawRoom = () => {
      if (!this.floor) this.addFloor();
      this.setTool("rect");
    };
    const action: Record<StartStep, ReturnType<typeof html> | typeof nothing> = {
      floor: hasFloor ? nothing : html`<button class="fp3d-btn fp3d-primary" @click=${() => this.addFloor()}>${t("start_floor_btn")}</button>`,
      room: html`<button class="fp3d-btn ${hasFloor ? "fp3d-primary" : ""}" @click=${drawRoom}>${t("start_room_btn")}</button>`,
      furniture: nothing,
    };
    return html`<section class="fp3d-start" aria-label=${t("start_title")}>
      <h3>${t("start_title")}</h3>
      <ol>
        ${list.steps
          .map(
            (s) => html`<li class=${s.done ? "fp3d-start-done" : ""}>
              ${s.done ? html`<span class="fp3d-start-mark" role="img" aria-label=${t("start_done")}>✓</span>` : html`<span class="fp3d-start-mark" aria-hidden="true"></span>`}
              <span class="fp3d-start-text">${t(`start_${s.step}` as I18nKey)}</span>
              ${s.done ? nothing : action[s.step]}
            </li>`,
          )}
      </ol>
      <p class="fp3d-start-or">${t("start_or")}</p>
      <div class="fp3d-start-alt">
        ${this.hasStartAreas() ? html`<button class="fp3d-btn" @click=${() => this.startAreas()}>${t("start_areas")}</button>` : nothing}
        <button class="fp3d-btn" @click=${() => this.dispatchEvent(new CustomEvent("load-sample", { bubbles: true, composed: true }))}>${t("home_sample")}</button>
      </div>
    </section>`;
  }

  /** The hint bar under the plan (#96): the current tool, the selection, or on a new plan the next step. */
  renderHint(this: Fp3dEditor) {
    const start = this.renderStart();
    if (start) return start;
    const key = this.hintKeyNow();
    const first = key === "hint_empty" || key === "hint_first_room";
    const warn = this._fixedHint || (this._tool === "opening" && !!this._openingNote);
    // the tooltip names the key that turns snapping off while dragging (#143)
    return html`<div class="fp3d-hint ${warn ? "fp3d-hint-fixed" : ""} ${first ? "fp3d-hint-first" : ""}" role="status" aria-live="polite" title=${this.t("snap_off_tip")}>
      <span class="fp3d-hint-text" .textContent=${live(this.hintText())}></span>
      <button class="fp3d-hint-help" title=${this.t("help_open")} @click=${() => (this._help = true)}>? ${this.t("hint_help")}</button>
    </div>`;
  }

  /** The '?' help (#95): the shortcuts and the plan's marks, both from the tables in help.ts. */
  renderHelp(this: Fp3dEditor) {
    if (!this._help) return nothing;
    const close = () => (this._help = false);
    const mark = (m: (typeof LEGEND)[number]["mark"]) => {
      const shape =
        m === "swing"
          ? svg`<path class="fp3d-help-swing" d="M4 22L4 4A18 18 0 0 1 22 22" />`
          : m === "track"
            ? svg`<path class="fp3d-help-track" d="M4 20L4 4M22 20L22 4" />`
            : m === "guide"
              ? svg`<line class="fp3d-guide" x1="2" y1="13" x2="24" y2="13" />`
              : m === "snap"
                ? svg`<circle class="fp3d-snap" cx="13" cy="13" r="8" />`
                : m === "ghost"
                  ? svg`<rect class="fp3d-ghost" x="3" y="5" width="20" height="16" />`
                  : svg`<rect class="fp3d-help-sel" x="3" y="5" width="20" height="16" rx="2" />`;
      return html`<svg class="fp3d-help-mark" viewBox="0 0 26 26" aria-hidden="true">${shape}</svg>`;
    };
    return html`<div class="fp3d-dialog-veil" @click=${(e: Event) => e.target === e.currentTarget && close()}>
      <div class="fp3d-dialog fp3d-help-overlay" role="dialog" aria-modal="true" aria-label=${this.t("help_overlay_title")} tabindex="-1" ${modalFocus()}>
        <div class="fp3d-dialog-head">
          <h3>${this.t("help_overlay_title")}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${close}>✕</button>
        </div>
        <div class="fp3d-dialog-body">
          <h4>${this.t("help_shortcuts")}</h4>
          <dl class="fp3d-help-keys">
            ${SHORTCUTS.map((k) => html`<dt>${k.keys.map((key, i) => html`${i ? " / " : ""}<kbd>${key}</kbd>`)}</dt><dd>${this.t(k.text)}</dd>`)}
          </dl>
          <h4>${this.t("help_legend")}</h4>
          <ul class="fp3d-help-legend">
            ${LEGEND.map((l) => html`<li>${mark(l.mark)}<span>${this.t(l.text)}</span></li>`)}
          </ul>
        </div>
      </div>
    </div>`;
  }
}
