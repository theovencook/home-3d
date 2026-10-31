// Sidebar page: 3D view and editor.

import { formatImperial, lengthUnit, parseLength, unitLabel } from "./units.ts";
import { css, html, LitElement, nothing, unsafeCSS, type PropertyValues } from "lit";
import { PHONE_MEDIA } from "./phone.ts";
import { BuildingController, type PlanChange } from "./building-controller.ts";
import { loadEditor } from "./load-editor.ts";
import { loadSettings } from "./load-settings.ts";
import { loadLocate } from "./load-locate.ts";
import "./components/room-panel.ts";
import "./components/view3d.ts";
import "./components/home-switcher.ts";
import { languageReady, loadLanguage, translate, type I18nKey } from "./i18n.ts";
import type { Building, StartView } from "./model.ts";
import { controls, tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";
import type { MarkerMode } from "./components/view3d.ts";
import type { HeatMode } from "./heatmap.ts";
import { lookOf, THEMES, type Look } from "./themes.ts";
import { lightChrome } from "./scheme.ts";
import { followLook, shownAccent, shownLook, textOn } from "./ha-theme.ts";
import { keepInRoom, snapToWall } from "./geometry/snap.ts";
import { furnitureName } from "./furniture-names.ts";
import { confirmEntities, defaultHeight, entityName, kindOf } from "./devices.ts";
import { canLift, zonesOf, type LampMount } from "./model.ts";
import { mountBase } from "./packs.ts";
import { labOn } from "./features.ts";
import { mountLocateLab } from "./locate-lab.ts";
import { directorOnHere } from "./director.ts";
import { loadVoice, micProbeDone, screenName, voiceOnHere } from "./load-voice.ts";
import type { ClockPos } from "./card-config.ts";
import { TimeTravel } from "./load-timetravel.ts";
import { IdleClock, tabletIdleSeconds, tabletMode } from "./kiosk.ts";
import type { HistorySpec } from "./timetravel/types.ts";
import type { FloorStack, Quality, WallMode } from "./viewer/viewer3d.ts";
import { UndoHistory } from "./undo-history.ts";
import { showsDemo, withDemo } from "./demo.ts";
import { loadSampleHome } from "./api.ts";
import { tell } from "./ask.ts";

/** The corners of the clock, as arrows in the view menu (the full name is the button's title). */
const CLOCK_ARROW: Record<Exclude<ClockPos, "off">, string> = { tl: "↖", tr: "↗", bl: "↙", br: "↘" };

type Mode = "view" | "editor" | "extensions" | "settings";

/** "#settings/<section>/<id>" (#139): the Settings page's own address; the page checks the names. */
function settingsAddress(hash: string): { section: string | null; id: string | null } | null {
  const m = /^#settings(?:\/([a-z_]+))?(?:\/([^/?#]+))?\/?$/.exec(hash);
  return m ? { section: m[1] ?? null, id: m[2] ? decodeURIComponent(m[2]) : null } : null;
}

/** What counts as someone using a wall tablet: its idle return waits again (#92). */
const TOUCHES = ["pointerdown", "keydown", "wheel"] as const;

/** View preferences belong to the device (a wall tablet wants other settings than a desktop). */
const prefs = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(`home3d.${key}`);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      localStorage.setItem(`home3d.${key}`, value);
    } catch {
      // storage unavailable (private mode): the choice just is not remembered
    }
  },
};

export class Floorplan3dPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    narrow: { type: Boolean },
    route: { attribute: false },
    panel: { attribute: false },
    _mode: { state: true },
    _showOpen: { state: true },
    _editorReady: { state: true },
    _editorError: { state: true },
    _floorId: { state: true },
    _roomId: { state: true },
    _wallMode: { state: true },
    _explode: { state: true },
    _plan2d: { state: true },
    _keepRoof: { state: true },
    _quality: { state: true },
    _stats: { state: true },
    _markers: { state: true },
    _pinSize: { state: true },
    _heat: { state: true },
    _theme: { state: true },
    _clock: { state: true },
    _furnish: { state: true },
    _selFurniture: { state: true },
    _selDevice: { state: true },
    _floorStack: { state: true },
    _roomNames: { state: true },
    _controlsRight: { state: true },
    _keepView: { state: true },
    _angleLock: { state: true },
    _trail: { state: true },
    _cameraWall: { state: true },
    _clean: { state: true },
    _navWrap: { state: true },
    _optsOpen: { state: true },
    _pinHover: { state: true },
    _accent: { state: true },
    _weather: { state: true },
    _director: { state: true },
    _micProbe: { state: true },
    _voiceHere: { state: true },
    _screen: { state: true },
    _tablet: { state: true },
    _settingsReady: { state: true },
    _settingsError: { state: true },
    _settingsAt: { state: true },
  };

  declare hass: HomeAssistant;
  declare narrow: boolean;
  declare route: unknown;
  declare panel: unknown;
  private declare _mode: Mode;
  /** The view's "Show" menu (walls, floors, heat map, names, trail, cameras, weather) is open. */
  private declare _showOpen: boolean;
  /** The editor bundle is loaded (it is fetched the first time the editor opens). */
  private declare _editorReady: boolean;
  /** Why the editor bundle failed to load (shown on its tabs instead of "Loading …"; opening a tab again retries). */
  private declare _editorError: string | null;
  private declare _floorId: string | null;
  private declare _roomId: string | null;
  private declare _wallMode: WallMode;
  private declare _explode: boolean;
  /** The read-only 2D plan (#41) instead of the 3D view; remembered per browser, "?view=2d" in the address opens it. */
  private declare _plan2d: boolean;
  private declare _keepRoof: boolean;
  private declare _quality: Quality;
  /** Performance display (per device; also switched on by ?fp3d_stats in the URL). */
  private declare _stats: boolean;
  private declare _markers: MarkerMode;
  /** How large the device symbols are (this device). */
  private declare _pinSize: "small" | "normal" | "large";
  private declare _heat: HeatMode;
  private declare _theme: Look;
  private declare _clock: ClockPos;
  private declare _furnish: boolean;
  private declare _selFurniture: string | null;
  private declare _selDevice: string | null;
  /** Floors below an opened floor, and whether room names show (both kept per device). */
  private declare _floorStack: FloorStack;
  private declare _roomNames: boolean;
  private declare _controlsRight: boolean;
  private declare _keepView: boolean;
  /** 3D lock on this device: the angle stays fixed. */
  private declare _angleLock: boolean;
  /** Motion trail of the last half hour in 3D. */
  private declare _trail: boolean;
  private declare _cameraWall: boolean;
  /** Clean view (the eye): only the stage, remembered on this device. */
  private declare _clean: boolean;
  /** The floor and room bar wraps onto several lines instead of scrolling sideways (remembered on this device). */
  private declare _navWrap: boolean;
  /** Phones: the view options (quality, look, markers, FPS) folded behind ⚙ (#131). */
  private declare _optsOpen: boolean;
  /** The pointer is on 📌: the 3D view marks the point it turns about, the middle of a saved start view (#733). */
  private declare _pinHover: boolean;
  /** Accent colour of the user's choice ("#rrggbb"), null for the stock cyan; remembered on this device. */
  private declare _accent: string | null;
  /** Weather outside the house in 3D. */
  private declare _weather: boolean;
  /** Kamera-Cockpit: the live director works on this device (its own switch, default off). */
  private declare _director: boolean;
  /** The microphone probe opened from the editor (the live director's section). */
  private declare _micProbe: boolean;
  /** Voice control (the microphone button) on this device. */
  private declare _voiceHere: boolean;
  private declare _screen: string;
  /**
   * Locked tablet mode (#92, wall displays): only the home name, the floors and the View menu; no Editor, no view
   * settings, and back to the whole house after a quiet spell. "?tablet" in the address or a tick for this HA user.
   */
  private declare _tablet: boolean;
  /** The Settings page's bundle is loaded (#139), or why it failed. */
  private declare _settingsReady: boolean;
  private declare _settingsError: string | null;
  /** The section and setting the Settings page opens at (a deep link, a "Settings" link elsewhere). */
  private declare _settingsAt: { section: string | null; id: string | null };
  /** The 3D view as it was when the view tab was left: the Settings page's "start view" takes it. */
  private lastView: StartView | null = null;

  private readonly data = new BuildingController(this);
  /** The editor's undo history (#66): kept here, as the editor element goes whenever another tab opens. */
  private readonly undoHistory = new UndoHistory();
  private locateLab: (() => void) | null = null;
  /** Time travel (Pro): the last 24 hours replayed, read-only. */
  private readonly tt = new TimeTravel(this);
  /** A ?tt= link was looked at (it starts the time travel once). */
  private ttLinked = false;
  /** The tablet's return to the whole house after no one touched it for a while (#92). */
  private readonly idle = new IdleClock(() => this.returnHome());
  private readonly onTouch = () => this.idle.touch();
  private idleSeconds = 0;
  private touchesHeard = false;


  constructor() {
    super();
    this.narrow = false;
    this._mode = "view";
    this._showOpen = false;
    this._editorReady = !!customElements.get("fp3d-editor");
    this._editorError = null;
    this._floorId = null;
    this._roomId = null;
    this.readPrefs();
    this._furnish = false;
    this._selFurniture = null;
    this._selDevice = null;
    this._cameraWall = false;
    this._optsOpen = false;
    this._pinHover = false;
    this._micProbe = false;
    this._tablet = false;
    this._settingsReady = !!customElements.get("fp3d-settings-page");
    this._settingsError = null;
    const address = settingsAddress(location.hash);
    this._settingsAt = address ?? { section: null, id: null };
    if (address) this._mode = "settings";
  }

  /**
   * This device's view preferences (`home3d.<key>`), read when the panel starts and again after the Settings page
   * changed one or reset them (#139).
   */
  private readPrefs(): void {
    // the wall view stays as it was last set on this device (#309)
    this._wallMode = prefs.get("walls") === "cut" ? "cut" : "auto";
    this._explode = prefs.get("explode") !== "0";
    const asked = new URLSearchParams(location.search).get("view");
    this._plan2d = asked === "2d" || (asked !== "3d" && prefs.get("plan2d") === "1");
    this._keepRoof = prefs.get("roof") === "1";
    const quality = prefs.get("quality");
    this._quality = quality === "low" || quality === "high" ? quality : "auto";
    this._stats = prefs.get("stats") === "1" || new URLSearchParams(location.search).has("fp3d_stats");
    const markers = prefs.get("markers");
    this._markers = markers === "none" || markers === "all" || markers === "room" ? markers : "important";
    const pinSize = prefs.get("pinSize");
    this._pinSize = pinSize === "small" || pinSize === "large" ? pinSize : "normal";
    const heat = prefs.get("heat");
    this._heat = heat === "temperature" || heat === "humidity" || heat === "co2" || heat === "values" ? heat : "none";
    this._theme = lookOf(prefs.get("theme"));
    const clock = prefs.get("clock");
    this._clock = clock === "tl" || clock === "tr" || clock === "bl" || clock === "br" ? clock : "off";
    const accent = prefs.get("accent");
    this._accent = accent && /^#[0-9a-f]{6}$/i.test(accent) ? accent : null;
    const stack = prefs.get("floor_stack");
    this._floorStack = stack === "stacked" || stack === "single" ? stack : "dim";
    this._roomNames = prefs.get("room_names") !== "0";
    this._controlsRight = prefs.get("controls") === "right";
    this._keepView = prefs.get("keep_view") === "1";
    this._angleLock = prefs.get("angle_lock") === "1";
    this._trail = prefs.get("trail") === "1";
    this._clean = prefs.get("clean") === "1";
    this._navWrap = prefs.get("nav_wrap") === "1";
    this._weather = prefs.get("weather") !== "0";
    this._director = directorOnHere();
    this._voiceHere = voiceOnHere();
    this._screen = screenName();
  }

  private t(key: I18nKey, vars?: Record<string, string | number>): string {
    return translate(this.hass, key, vars);
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass) {
      if (!this.homeRestored) this.restoreHome();
      this.data.setHass(this.hass);
      this.tt.session?.setLive(this.hass);
    }
    // a language beyond German and English: its texts are fetched first, then everything renders
    if (changed.has("hass") && this.hass && !languageReady(this.hass.language)) void loadLanguage(this.hass.language).then(() => this.requestUpdate());
    const b = this.data.building;
    this.followTablet(b);
    // someone not (or no longer) on the editors list has no home switcher to leave a remembered home with (#160)
    if (b && !this.data.canEdit && this.data.home !== undefined) this.openHome(undefined);
    if (b !== this.seenBuilding) this.dropStaleSelection(b);
  }

  /** The home this device remembers was looked up (once, when the panel first gets hass). */
  private homeRestored = false;

  /** Where this device keeps the home its user had open last (#160): per user, so another login starts on the active home. */
  private get homeKey(): string {
    return `home.${this.hass?.user?.id ?? ""}`;
  }

  /**
   * A reload opens the home this device and user had open last (#160), not the one on the displays: someone trying
   * things in a test home is not dropped back into the real house. A tablet shows the active home whatever was open.
   */
  private restoreHome(): void {
    this.homeRestored = true;
    const home = prefs.get(this.homeKey);
    if (!home || tabletMode(location.search, this.hass?.user?.id, undefined)) return;
    this.data.onHomeGone = () => prefs.set(this.homeKey, "");
    this.data.openRemembered(home);
  }

  /** Show a home in this view (the home switcher, the sample) and remember it on this device (#160); unset: the active home. */
  private openHome(home: string | undefined): void {
    prefs.set(this.homeKey, home ?? "");
    this.data.setHome(home);
  }

  /** The plan the selection was last checked against (a new one comes with every edit and every load). */
  private seenBuilding: Building | null = null;
  /** The home that plan belongs to. */
  private seenHome: string | null = null;

  /**
   * Nothing of the selection outlives its home (#150): another home starts with no floor, room, item or device chosen;
   * in the same home a floor, room or item that is gone is let go of (a single-floor home has no floor to miss).
   * Runs only when the plan object changes, not on every hass update.
   */
  private dropStaleSelection(b: Building | null): void {
    this.seenBuilding = b;
    if (!b) return;
    const home = this.data.homeId;
    if (this.seenHome !== null && home !== this.seenHome) {
      this._floorId = null;
      this._roomId = null;
      this._selFurniture = null;
      this._selDevice = null;
    }
    this.seenHome = home;
    if (this._floorId && !b.floors.some((f) => f.id === this._floorId)) {
      this._floorId = null;
      this._roomId = null;
    }
    if (this._roomId && !b.floors.some((f) => zonesOf(f).some((r) => r.id === this._roomId))) this._roomId = null;
    if (this._selFurniture && !b.floors.some((f) => f.furniture.some((m) => m.id === this._selFurniture))) this._selFurniture = null;
  }

  /** Tablet mode on or off as the address and this user's tick say; on, the view is all there is (#92). */
  private followTablet(b: Building | null): void {
    const search = location.search;
    const on = tabletMode(search, this.hass?.user?.id, b?.settings.tablet_users);
    if (on && this._mode !== "view") this.setMode("view");
    // a tablet shows the home on the displays (#160), also when this device remembered another one
    if (on && this.data.home !== undefined) this.data.setHome(undefined);
    if (on !== this._tablet) {
      this._tablet = on;
      this._optsOpen = false;
    }
    // armed again only when the spell changes: every hass update renders, and must not restart the wait
    const seconds = on ? tabletIdleSeconds(search, b?.settings.tablet_idle) : 0;
    if (seconds !== this.idleSeconds || on !== this.touchesHeard) {
      this.listenTouches(on);
      this.idleSeconds = seconds;
      this.idle.arm(seconds);
    }
  }

  /** Touches, keys and the wheel restart the tablet's wait; heard only while tablet mode is on. */
  private listenTouches(on: boolean): void {
    if (on === this.touchesHeard) return;
    this.touchesHeard = on;
    for (const type of TOUCHES) {
      if (on) window.addEventListener(type, this.onTouch, { capture: true, passive: true });
      else window.removeEventListener(type, this.onTouch, { capture: true });
    }
    if (!on) {
      this.idle.stop();
      this.idleSeconds = 0;
    }
  }

  /** The tablet after its quiet spell: the whole house again, menus shut, the camera at the start view (#92). */
  private returnHome(): void {
    this.tt.stop();
    this._roomId = null;
    this._floorId = null;
    this._showOpen = false;
    this._optsOpen = false;
    this._cameraWall = false;
    this.view3d()?.resetView();
  }

  /** On the editors list (#7): sees the Editor and Extensions tabs. Everyone else views and controls devices. */
  private get canEdit(): boolean {
    return this.data.canEdit;
  }

  /** First run (#54): add the sample home as a home of its own and open it here; the displays keep their home (#58). */
  private async loadSample(): Promise<void> {
    try {
      const res = await loadSampleHome(this.hass);
      this.openHome(res.home.id);
    } catch (err) {
      await tell(this.t("home_failed", { error: String((err as { message?: string })?.message ?? err) }), { ok: this.t("ask_ok") });
    }
  }

  private setMode(mode: Mode): void {
    if (mode === this._mode || (this._tablet && mode !== "view")) return;
    // the view as it stands is what the Settings page's "start view" takes (#139)
    if (this._mode === "view") this.lastView = this.view3d()?.currentView() ?? this.lastView;
    this.tt.stop();
    this._editorError = null;
    this._optsOpen = false;
    this._showOpen = false;
    if (mode === "view") void this.data.flush();
    // the Settings page keeps its address (#settings/…); leaving it clears it
    if (this._mode === "settings" && mode !== "settings") this.setAddress("");
    if (mode === "settings") this.setAddress(this.settingsLink(this._settingsAt.section, this._settingsAt.id));
    this._mode = mode;
  }

  private settingsLink(section: string | null, id: string | null): string {
    return `#settings${section ? `/${section}${id ? `/${encodeURIComponent(id)}` : ""}` : ""}`;
  }

  /** The page's address part, without a new history entry (the back button leaves the panel as before). */
  private setAddress(hash: string): void {
    try {
      if (location.hash !== hash) history.replaceState(history.state, "", `${location.pathname}${location.search}${hash}`);
    } catch {
      // a sandboxed frame: the address just doesn't follow
    }
  }

  /**
   * Opens the Settings page at a section and setting (#139): the editor's ⚙ menu, the view's popovers, the tool panels
   * and the Extensions page link here. Not in locked tablet mode.
   */
  private openSettings(section: string | null = null, id: string | null = null): void {
    if (this._tablet) return;
    this._settingsAt = { section, id };
    if (this._mode === "settings") this.setAddress(this.settingsLink(section, id));
    else this.setMode("settings");
  }

  private readonly onOpenSettings = (e: Event) => {
    const d = (e as CustomEvent<{ section?: string | null; id?: string | null }>).detail ?? {};
    e.stopPropagation();
    e.preventDefault();
    this.openSettings(d.section ?? null, d.id ?? null);
  };

  /** A link to #settings/… typed or clicked while the panel is open. */
  private readonly onHash = () => {
    const at = settingsAddress(location.hash);
    if (at) this.openSettings(at.section, at.id);
  };

  /** A button on the Settings page that leaves it or opens something of the panel's. */
  private settingsAction(e: CustomEvent<{ action: string }>): void {
    const { action } = e.detail;
    if (action === "extensions") this.setMode("extensions");
    else if (action === "editor") this.setMode("editor");
    else if (action === "mic_probe") void loadVoice().then(() => (this._micProbe = true)).catch(() => undefined);
    else if (action === "locate" && this.hass && this.data.building) {
      const b = this.data.building;
      void loadLocate().then((m) =>
        m.openLocateSetup(this.hass, b, () => this.hass, (look) => {
          const cur = this.data.building;
          if (cur) this.editPlan({ ...cur, settings: { ...cur.settings, person_look: look === "figure" ? null : look } });
        }),
      );
    }
  }

  /** A change from the 3D view's settings or a module (#149): saved by the controller, which makes it again on a newer
   * plan when someone else saved meanwhile. */
  private onPlanChange(e: CustomEvent<{ change: PlanChange }>): void {
    e.preventDefault();
    this.data.update(e.detail.change);
  }

  private onRoomTap(e: CustomEvent<{ floorId: string; roomId: string | null }>): void {
    const { floorId, roomId } = e.detail;
    // in the house view (or on another floor) a tap first opens the whole floor; rooms come next
    if ((this.data.building?.floors.length ?? 0) > 1 && floorId && this._floorId !== floorId) {
      this._floorId = floorId;
      this._roomId = null;
      return;
    }
    if (!roomId) return;
    this._roomId = roomId === this._roomId ? null : roomId;
  }

  private setWallMode(mode: WallMode): void {
    this._wallMode = mode;
    prefs.set("walls", mode);
  }

  private setKeepRoof(on: boolean): void {
    this._keepRoof = on;
    prefs.set("roof", on ? "1" : "0");
  }

  private setPlan2d(on: boolean): void {
    this._plan2d = on;
    prefs.set("plan2d", on ? "1" : "0");
  }

  private setExplode(explode: boolean): void {
    this._explode = explode;
    prefs.set("explode", explode ? "1" : "0");
  }

  private setQuality(quality: Quality): void {
    this._quality = quality;
    prefs.set("quality", quality);
  }

  /** A change made here or on the Extensions page: saved, and one more step of the editor's undo history (#66). */
  private editPlan(next: Building, mergeKey: string | null = null): void {
    const b = this.data.building;
    if (b) this.undoHistory.record(b, next, this.data.homeId, mergeKey);
    this.data.edit(next);
  }

  /** Change one furniture item of the building (furnishing in 3D) and save; `mergeKey` joins a run of moves. */
  private editFurniture(id: string, change: (f: Building["floors"][number]["furniture"][number], floor: Building["floors"][number]) => void, mergeKey: string | null = null): void {
    const b = this.data.building;
    if (!b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) {
      const f = floor.furniture.find((m) => m.id === id);
      if (f) change(f, floor);
    }
    this.editPlan(next, mergeKey);
  }

  /** Change one placed device (furnishing in 3D) and save. */
  private editDevice(entityId: string, change: (p: Building["floors"][number]["placements"][number], floor: Building["floors"][number]) => void, mergeKey: string | null = null): void {
    const b = this.data.building;
    if (!b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) {
      const p = floor.placements.find((x) => x.entity_id === entityId);
      if (p) change(p, floor);
    }
    this.editPlan(next, mergeKey);
  }

  private moveDevice(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    // a device stays in its room (no dragging through walls)
    this.editDevice(id, (p, floor) => {
      const [nx, nz] = keepInRoom(floor, p.x, p.z, x, z);
      Object.assign(p, { x: nx, z: nz });
    }, `move:${id}`);
  }

  /** Cameras turn in finer steps than lamps (the rotation field sets where they look). */
  private turnStep(): number {
    return kindOf(this._selDevice ?? "") === "camera" ? 15 : 45;
  }

  private turnDevice(delta: number): void {
    if (!this._selDevice) return;
    this.editDevice(this._selDevice, (p) => (p.rotation = ((((p.rotation ?? 0) + delta) % 360) + 360) % 360));
  }

  private deleteDevice(): void {
    const id = this._selDevice;
    const b = this.data.building;
    if (!id || !b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) floor.placements = floor.placements.filter((p) => p.entity_id !== id);
    this.editPlan(next);
    this._selDevice = null;
  }

  /** Height and, for lights, the mount of the selected device, editable in the furnish bar. */
  private renderDeviceFields(id: string) {
    const b = this.data.building;
    const floor = b?.floors.find((fl) => fl.placements.some((p) => p.entity_id === id));
    const p = floor?.placements.find((x) => x.entity_id === id);
    if (!floor || !p) return nothing;
    const kind = kindOf(id);
    const light = kind === "light";
    const camera = kind === "camera";
    const dome = p.mount === "ceiling";
    const auto = kind ? defaultHeight(kind, floor.height, light || camera ? (p.mount ?? (camera ? "wall" : "ceiling")) : null) : 1;
    // feet and inches where the plan or Home Assistant says so (#117); a length field (metres) follows it (#170)
    const unit = lengthUnit(this.hass, this.data.building?.settings.units);
    const imperial = unit === "imperial";
    const showLen = (v: number) => (imperial ? formatImperial(v) : String(Math.round(v * 100) / 100));
    const readLen = (text: string) => (imperial ? parseLength(text, "imperial") : parseFloat(text.replace(",", ".")));
    const numField = (label: string, value: number, step: number, min: number, max: number, set: (v: number) => void, length = false) =>
      html`<label class="fp3d-size" title=${length ? unitLabel(label, unit) : label}
        >${length ? unitLabel(label, unit) : label}
        <input
          type=${length && imperial ? "text" : "number"}
          inputmode="decimal"
          step=${step}
          min=${min}
          max=${max}
          .value=${length ? showLen(value) : String(Math.round(value * 100) / 100)}
          @change=${(e: Event) => {
            const v = length ? readLen((e.target as HTMLInputElement).value) : parseFloat((e.target as HTMLInputElement).value.replace(",", "."));
            if (v !== null && Number.isFinite(v)) set(Math.min(max, Math.max(min, v)));
          }}
        />
      </label>`;
    return html`${light
        ? html`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${(e: Event) => this.editDevice(id, (d) => Object.assign(d, { mount: (e.target as HTMLSelectElement).value as LampMount, y: null }))}>
            ${(["ceiling", "floor", "table", "wall"] as const).map((m) => html`<option value=${m} ?selected=${m === (p.mount ?? "ceiling")}>${this.t(`lamp_${m}`)}</option>`)}
          </select>`
        : nothing}
      ${camera
        ? html`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${(e: Event) => this.editDevice(id, (d) => Object.assign(d, { mount: (e.target as HTMLSelectElement).value as LampMount, y: null }))}>
              <option value="wall" ?selected=${!dome}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${dome}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${numField(this.t("camera_fov_short"), p.fov ?? (dome ? 360 : 90), 5, 10, 360, (v) => this.editDevice(id, (d) => (d.fov = v)))}
            ${numField(this.t("camera_reach_short"), p.reach ?? (dome ? 3 : 4.5), 0.5, 0.5, 50, (v) => this.editDevice(id, (d) => (d.reach = v)), true)}
            ${numField(this.t("camera_tilt_short"), p.tilt ?? (dome ? 65 : 20), 5, 0, 90, (v) => this.editDevice(id, (d) => (d.tilt = v)))}`
        : nothing}
      <label class="fp3d-size" title=${unitLabel(this.t("marker_height"), unit)}
        >${this.t("size_short_h")}
        <input
          type=${imperial ? "text" : "number"}
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${showLen(p.y ?? auto)}
          @change=${(e: Event) => {
            const v = readLen((e.target as HTMLInputElement).value);
            if (v !== null && Number.isFinite(v) && v >= 0) this.editDevice(id, (d) => (d.y = Math.round(v * 1000) / 1000));
          }}
        />
      </label>
      ${p.y !== null ? html`<button class="fp3d-chip" @click=${() => this.editDevice(id, (d) => (d.y = null))}>${this.t("height_auto")}</button>` : nothing}`;
  }

  private furnitureName(id: string): string {
    const f = this.data.building?.floors.flatMap((fl) => fl.furniture).find((m) => m.id === id);
    return f ? furnitureName(this.hass, f.type) : "";
  }

  private moveFurniture(e: CustomEvent<{ id: string; x: number; z: number }>): void {
    const { id, x, z } = e.detail;
    const wall = this.data.building?.settings.wall_interior ?? 0.12;
    this.editFurniture(id, (f, floor) => {
      // the item stays in its room (no dragging through walls) …
      const [nx, nz] = keepInRoom(floor, f.x, f.z, x, z);
      Object.assign(f, { x: nx, z: nz });
      // … and near a wall it turns its back to it and sits flush, as in the editor
      const snap = snapToWall(floor, f, wall);
      if (snap) Object.assign(f, snap);
    }, `move:${id}`);
  }

  /** Width, depth and height of the selected item, editable in the furnish bar. */
  private renderSizeFields(id: string) {
    const f = this.data.building?.floors.flatMap((fl) => fl.furniture).find((m) => m.id === id);
    if (!f) return nothing;
    // feet and inches where the plan or Home Assistant says so (#117)
    const imperial = lengthUnit(this.hass, this.data.building?.settings.units) === "imperial";
    const show = (v: number) => (imperial ? formatImperial(v) : String(Math.round(v * 100) / 100));
    const read = (text: string) => (imperial ? parseLength(text, "imperial") : parseFloat(text.replace(",", ".")));
    const field = (key: "w" | "d" | "h", label: string) => html`<label class="fp3d-size" title=${this.t(`size_${key}` as I18nKey)}
      >${label}
      <input
        type=${imperial ? "text" : "number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${show(f[key])}
        @change=${(e: Event) => {
          const v = read((e.target as HTMLInputElement).value) ?? NaN;
          if (Number.isFinite(v) && v > 0) this.editFurniture(id, (m) => (m[key] = Math.round(v * 1000) / 1000));
        }}
    /></label>`;
    const floor = this.data.building?.floors.find((fl) => fl.furniture.some((m) => m.id === id));
    return html`${field("w", this.t("size_short_w"))}${field("d", this.t("size_short_d"))}${field("h", this.t("size_short_h"))}
    ${floor && canLift(f)
      ? html`<label class="fp3d-size" title=${unitLabel(this.t("mount_height"), lengthUnit(this.hass, this.data.building?.settings.units))}
            >↕
            <input
              type=${imperial ? "text" : "number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${show(f.mount_y ?? mountBase(floor, f))}
              @change=${(e: Event) => {
                const v = read((e.target as HTMLInputElement).value) ?? NaN;
                if (Number.isFinite(v) && v >= 0) this.editFurniture(id, (m) => (m.mount_y = Math.round(v * 1000) / 1000));
              }}
          /></label>
          ${f.mount_y != null ? html`<button class="fp3d-chip" @click=${() => this.editFurniture(id, (m) => (m.mount_y = null))}>${this.t("height_auto")}</button>` : nothing}`
      : nothing}`;
  }

  private turnFurniture(delta: number): void {
    if (!this._selFurniture) return;
    this.editFurniture(this._selFurniture, (f) => (f.rotation = (((f.rotation + delta) % 360) + 360) % 360));
  }

  private deleteFurniture(): void {
    const id = this._selFurniture;
    const b = this.data.building;
    if (!id || !b) return;
    const next = structuredClone(b);
    for (const floor of next.floors) floor.furniture = floor.furniture.filter((m) => m.id !== id);
    this.editPlan(next);
    this._selFurniture = null;
  }

  /** The view as it stands now becomes the start view of the house (null: back to the default); saved in the plan. */
  private rememberStartView(reset = false): void {
    const b = this.data.building;
    if (!b) return;
    const view = reset ? null : this.view3d()?.currentView();
    if (!reset && !view) return;
    this.editPlan({ ...b, settings: { ...b.settings, start_view: view ?? null } });
  }

  private view3d() {
    return this.renderRoot?.querySelector("fp3d-view3d") as (HTMLElement & { resetView(): void; lookThrough(entityId: string): void; historyEntities(): HistorySpec; currentView(): StartView | null; roomSheets(roomId: string): { id: string; icon: string; title: string }[]; openRoomSheet(roomId: string, id: string): void; openSettings(): void }) | null;
  }

  /** A follow toggle in the view settings (#87): Home Assistant's theme or the sun; it names the look it shows now. */
  private renderFollow(follow: "theme" | "auto", label: "follow_ha" | "follow_sun") {
    const on = this._theme === follow;
    const now = this.t(`theme_${shownLook(follow, this.hass)}`);
    return html`<button
      class="fp3d-chip fp3d-follow"
      role="switch"
      aria-checked=${on}
      @click=${() => {
        this._theme = followLook(this._theme, follow, !on, this.hass);
        prefs.set("theme", this._theme);
      }}
    >
      <span class="fp3d-follow-box" aria-hidden="true">${on ? "✓" : ""}</span>${this.t(label)}
      <small>${this.t("follow_now", { look: now })}</small>
    </button>`;
  }

  /** Time travel on or off; without the Pro add-on its hint shows. `at`: a start moment from a link. */
  private toggleTimeTravel(at: string | null = null): void {
    if (this.tt.active) {
      this.tt.stop();
      return;
    }
    const view = this.view3d();
    const b = this.data.building;
    if (!view || !b || !this.hass) return;
    this._furnish = false;
    this._cameraWall = false;
    this.tt.start({ live: this.hass, building: b, spec: view.historyEntities(), quality: this._quality, at, t: (k, vars) => translate(this.hass, k as I18nKey, vars) });
  }

  protected updated(): void {
    // the viewer's chrome goes light with the Day look (#85); the editor and the extensions page stay dark (deferred)
    this.toggleAttribute("light", this._mode === "view" && lightChrome(shownLook(this._theme, this.hass)));
    // lab: the locating recorder box for admins (feasibility test, not a feature yet)
    if (!this.locateLab && this.hass?.user?.is_admin && this.data.building && labOn()) {
      this.locateLab = mountLocateLab(() => ({ hass: this.hass, building: this.data.building }));
    }
    // a link with ?tt=07:42 or ?tt=-3h opens the time travel there, once the plan is loaded (it brings the recipes of
    // its items; the view needs no library, #44)
    if (this.ttLinked || !this.data.building || this._mode !== "view" || !this.view3d()) return;
    this.ttLinked = true;
    const at = new URLSearchParams(location.search).get("tt");
    if (at !== null) this.toggleTimeTravel(at);
  }

  private back(): void {
    if (this._roomId) this._roomId = null;
    else if (this._floorId && (this.data.building?.floors.length ?? 0) > 1) this._floorId = null;
    else this.view3d()?.resetView();
  }

  private readonly onKey = (e: KeyboardEvent) => {
    if (e.key !== "Escape" || this._mode !== "view") return;
    // Esc first leaves the time travel, then goes up a level
    if (this.tt.active) this.tt.stop();
    else this.back();
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("hashchange", this.onHash);
    window.addEventListener("location-changed", this.onHash);
    this.addEventListener("open-settings", this.onOpenSettings);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("hashchange", this.onHash);
    window.removeEventListener("location-changed", this.onHash);
    this.removeEventListener("open-settings", this.onOpenSettings);
    this.listenTouches(false);
    this.tt.stop();
    this.locateLab?.();
    this.locateLab = null;
  }

  protected render() {
    if (this.hass && !languageReady(this.hass.language)) return nothing;
    const b = this.data.building;
    const saveState = this.data.saveState;
    return html`
      <div class="fp3d-app ${this._clean && this._mode === "view" ? "fp3d-clean" : ""}" style=${this.accentStyle()}>
        ${this._micProbe && this.hass ? html`<fp3d-mic-probe .hass=${this.hass} .building=${b} @close=${() => ((this._micProbe = false), micProbeDone())}></fp3d-mic-probe>` : nothing}
        ${this._clean && this._mode === "view" ? nothing : this._tablet ? this.renderTabletHeader() : html`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Home 3D</h1>
          ${this.canEdit && this.hass ? html`<fp3d-home-switcher
                .hass=${this.hass}
                .home=${this.data.homeId}
                @home-reload=${() => void this.data.reopen()}
                @home-open=${(e: CustomEvent<{ home: string | null }>) => this.openHome(e.detail.home ?? undefined)}
              ></fp3d-home-switcher>` : nothing}
          <div class="fp3d-seg" role="group" aria-label=${this.t("modes")}>
            <button aria-pressed=${this._mode === "view"} @click=${() => this.setMode("view")}>${this.t("view")}</button>
            ${this.canEdit
              ? html`<button aria-pressed=${this._mode === "editor"} @click=${() => this.setMode("editor")}>${this.t("editor")}</button>
                  <button class="fp3d-tab-ext" aria-pressed=${this._mode === "extensions"} @click=${() => this.setMode("extensions")}>
                    ✦ ${this.t("ext_tab")}
                  </button>`
              : nothing}
            <button class="fp3d-tab-settings" aria-pressed=${this._mode === "settings"} aria-label=${this.t("settings")} title=${this.t("settings")} @click=${() => this.openSettings()}>
              ⚙ <span class="fp3d-tab-word">${this.t("settings")}</span>
            </button>
          </div>
          <span class="fp3d-grow"></span>
          ${this._mode === "view" && b?.floors.some((f) => f.rooms.length)
            ? html`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${() => (this._optsOpen = !this._optsOpen)}
                >
                  ⚙ <span class="fp3d-opts-label">${this.t("view_btn")}</span>
                </button>
                ${this._optsOpen ? html`<div class="fp3d-opts-veil" @click=${() => (this._optsOpen = false)}></div>` : nothing}
                <div class="fp3d-view-opts ${this._optsOpen ? "fp3d-opts-open" : ""}">
                <section class="fp3d-opt-group">
                <h3>${this.t("quality")}</h3>
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${(["auto", "low", "high"] as Quality[]).map(
                  (q) => html`<button aria-pressed=${this._quality === q} @click=${() => this.setQuality(q)}>${this.t(`quality_${q}`)}</button>`,
                )}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("theme")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${THEMES.map(
                  (t) =>
                    html`<button
                      aria-pressed=${this._theme === t}
                      @click=${() => {
                        this._theme = t;
                        prefs.set("theme", t);
                      }}
                    >
                      ${this.t(`theme_${t}`)}
                    </button>`,
                )}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent ?? "#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${(e: Event) => {
                      this._accent = (e.target as HTMLInputElement).value;
                      prefs.set("accent", this._accent);
                    }}
                  />
                  ${this._accent
                    ? html`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${() => {
                          this._accent = null;
                          prefs.set("accent", "");
                        }}
                      >
                        ↺
                      </button>`
                    : nothing}
                </label>
              </div>
              ${this.renderFollow("theme", "follow_ha")}
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("view_group_lighting")}</h3>
              ${this.renderFollow("auto", "follow_sun")}
              <button class="fp3d-chip fp3d-opt-more" @click=${() => this.view3d()?.openSettings()}>${this.t("sun_and_lights")}</button>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("clock")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${(["off", "tl", "tr", "bl", "br"] as ClockPos[]).map(
                  (p) =>
                    html`<button aria-pressed=${this._clock === p} title=${this.t(`clock_${p}`)} aria-label=${this.t(`clock_${p}`)} @click=${() => {
                      this._clock = p;
                      prefs.set("clock", p);
                    }}>
                      ${p === "off" ? this.t("clock_off") : CLOCK_ARROW[p]}
                    </button>`,
                )}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("markers")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${(["none", "room", "important", "all"] as MarkerMode[]).map(
                  (m) =>
                    html`<button
                      aria-pressed=${this._markers === m}
                      title=${this.t("markers")}
                      @click=${() => {
                        this._markers = m;
                        prefs.set("markers", m);
                      }}
                    >
                      ${this.t(`markers_${m}`)}
                    </button>`,
                )}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("view_group_size")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${(["small", "normal", "large"] as const).map(
                  (k) =>
                    html`<button
                      aria-pressed=${this._pinSize === k}
                      @click=${() => {
                        this._pinSize = k;
                        prefs.set("pinSize", k);
                      }}
                    >
                      ${this.t(`pin_size_${k}`)}
                    </button>`,
                )}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("view_group_controls")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${([false, true] as const).map(
                  (right) =>
                    html`<button
                      aria-pressed=${this._controlsRight === right}
                      title=${this.t(right ? "controls_right" : "controls_left")}
                      aria-label=${this.t(right ? "controls_right" : "controls_left")}
                      @click=${() => {
                        this._controlsRight = right;
                        prefs.set("controls", right ? "right" : "left");
                      }}
                    >
                      ${right ? "◨" : "◧"}
                    </button>`,
                )}
                ${this.canEdit
                  ? html`<button
                        title=${`${this.t("start_view")}: ${this.t("start_view_set")}`}
                        aria-label=${this.t("start_view_set")}
                        @click=${() => this.rememberStartView()}
                        @mouseenter=${() => (this._pinHover = true)}
                        @mouseleave=${() => (this._pinHover = false)}
                        @focus=${() => (this._pinHover = true)}
                        @blur=${() => (this._pinHover = false)}
                      >
                        📌
                      </button>
                      ${this.data.building?.settings.start_view
                        ? html`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${() => this.rememberStartView(true)}>📌✕</button>`
                        : nothing}`
                  : nothing}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${() => {
                    this._keepView = !this._keepView;
                    prefs.set("keep_view", this._keepView ? "1" : "0");
                  }}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${() => {
                    this._angleLock = !this._angleLock;
                    prefs.set("angle_lock", this._angleLock ? "1" : "0");
                  }}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${() => {
                    this._stats = !this._stats;
                    prefs.set("stats", this._stats ? "1" : "0");
                  }}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </section>
              ${this.renderAllSettings("look")}
              </div>`
            : nothing}
          ${this._mode === "editor" && saveState !== "idle"
            ? html`<span class="fp3d-save fp3d-save-${saveState}">${this.t(saveState === "saving" ? "saving" : saveState === "saved" ? "saved" : "save_error")}</span>`
            : nothing}
          <span class="fp3d-version" title=${this.t("version_hint", { backend: this.data.backendVersion ?? "?" })}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean && this._mode === "view" ? this.renderCleanNotice() : this.renderNotices()}
        ${this.data.error && !b ? html`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>` : nothing}
        ${!b && !this.data.error ? html`<p class="fp3d-message">${this.t("loading")}</p>` : nothing}
        ${b
          ? this._mode === "editor" && this.canEdit
            ? this.renderEditor(b)
            : this._mode === "extensions" && this.canEdit
              ? this.renderExtensions()
              : this._mode === "settings" && !this._tablet
                ? this.renderSettings(b)
                : this.renderView(b)
          : nothing}
      </div>
    `;
  }

  /** Tablet mode (#92): the home's name and nothing to mis-tap (no menu, switcher, tabs, view settings, version). */
  private renderTabletHeader() {
    return html`<header class="fp3d-header fp3d-tablet-head"><h1>${this.data.homeName || "Home 3D"}</h1></header>`;
  }

  /** Restart hint, save errors and unsaved edits from an earlier session. */
  /** This device's accent: the one picked here, else the HA theme's while the look follows it (#38). */
  private shownAccent(): string | null {
    return shownAccent(this._theme, this._accent, this.hass, (n) => getComputedStyle(this).getPropertyValue(n));
  }

  private accentStyle(): string {
    const accent = this.shownAccent();
    return accent ? `--fp3d-accent:${accent};--fp3d-accent-text:${textOn(accent)}` : "";
  }

  private renderNotices() {
    const d = this.data;
    const notices = [];
    // an old bundle in the browser or the companion app: a reload helps, a restart does not
    const update = this.renderUpdateNotice();
    if (update) notices.push(update);
    if (d.needsRestart && d.versionGap !== "frontend") {
      notices.push(html`<div class="fp3d-notice fp3d-notice-warn">${d.backendVersion ? this.t("needs_restart", { version: d.backendVersion, frontend: d.frontendVersion }) : this.t("needs_restart_old")}</div>`);
    }
    if (d.saveState === "error" && d.saveError) {
      notices.push(html`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail", { error: d.saveError })}</div>`);
    }
    if (d.draft && this.canEdit && !this._tablet) {
      const at = new Date(d.draft.savedAt).toLocaleString(this.hass?.language);
      notices.push(
        html`<div class="fp3d-notice">
          <span>${d.conflict ? this.t("save_conflict") : this.t(d.draft.home ? "draft_found" : "draft_found_old", { time: at })}</span>
          <button class="fp3d-btn fp3d-primary" @click=${() => void d.restoreDraft()}>${this.t(d.conflict ? "draft_restore_conflict" : "draft_restore")}</button>
          <button class="fp3d-btn" @click=${() => d.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`,
      );
    }
    return notices.length ? html`<div class="fp3d-notices">${notices}</div>` : nothing;
  }

  /** The clean view shows only the update notice (#60). */
  private renderCleanNotice() {
    const update = this.renderUpdateNotice();
    return update ? html`<div class="fp3d-notices">${update}</div>` : nothing;
  }

  /**
   * "Updated, tap to reload" (#60): this page runs older JavaScript than Home Assistant serves now (a new version, or
   * the same one rebuilt). It never reloads by itself; the button waits for edits still being saved and does nothing
   * while the last save failed, so no edit is lost. Shown in the clean view too: wall tablets are never reloaded.
   */
  private renderUpdateNotice() {
    const d = this.data;
    const state = d.updateNotice;
    if (!state) return null;
    // a new version names both (with the companion-app hint); the same version rebuilt just says it was updated
    const text = d.backendVersion !== d.frontendVersion ? this.t("needs_reload", { frontend: d.frontendVersion, backend: d.backendVersion ?? "?" }) : this.t("update_ready");
    return html`<div class="fp3d-notice fp3d-notice-warn fp3d-notice-update" role="status">
      <span>${text}${state === "ready" ? nothing : html` ${this.t(state === "saving" ? "update_saving" : "update_unsaved")}`}</span>
      <button class="fp3d-btn" ?disabled=${state === "unsaved"} @click=${() => void d.reloadWhenSaved()}>${this.t("reload_page")}</button>
    </div>`;
  }

  /**
   * "Loading …" while the editor bundle (editor and extensions page) is fetched, or why it failed (#52: a failure used
   * to leave "Loading …" up for good); nothing once it is there.
   */
  private editorPending() {
    if (this._editorReady) return null;
    if (this._editorError) return html`<div class="fp3d-empty"><p>${this.t("load_error")}: ${this._editorError}</p></div>`;
    loadEditor().then(
      () => (this._editorReady = true),
      (err: unknown) => (this._editorError = String(err)),
    );
    return html`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`;
  }

  /** The extensions page (built-in features, fun extras, packs); it comes with the editor bundle. */
  private renderExtensions() {
    void this.data.loadLibrary();
    const pending = this.editorPending();
    if (pending) return pending;
    return html`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .canEdit=${this.data.canEdit}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${(e: CustomEvent<Building>) => this.editPlan(e.detail)}
      @packs-changed=${() => void this.data.reloadPacks()}
    ></fp3d-extensions>`;
  }

  /** "All settings" at the foot of a quick menu (#139): opens the Settings page at that section. */
  private renderAllSettings(section: string, id: string | null = null) {
    return html`<button class="fp3d-chip fp3d-all-settings" @click=${() => this.openSettings(section, id)}>⚙ ${this.t("all_settings")} ›</button>`;
  }

  /** The Settings page (#139): its own bundle, loaded the first time the tab opens. */
  private renderSettings(b: Building) {
    if (!this._settingsReady) {
      if (this._settingsError) return html`<div class="fp3d-empty"><p>${this.t("load_error")}: ${this._settingsError}</p></div>`;
      loadSettings().then(
        () => (this._settingsReady = true),
        (err: unknown) => (this._settingsError = String(err)),
      );
      return html`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`;
    }
    return html`<fp3d-settings-page
      class="fp3d-body"
      .hass=${this.hass}
      .building=${b}
      .canEdit=${this.data.canEdit}
      .packs=${this.data.packs}
      .t=${this.translator}
      .section=${this._settingsAt.section}
      .focusId=${this._settingsAt.id}
      .saveState=${this.data.saveState}
      .homeName=${this.data.homeName ?? ""}
      .lastView=${this.lastView}
      .loadEditor=${loadEditor}
      @settings-edit=${(e: CustomEvent<{ building: Building; key: string | null }>) => this.editPlan(e.detail.building, e.detail.key)}
      @device-change=${() => this.readPrefs()}
      @settings-action=${this.settingsAction}
      @settings-nav=${(e: CustomEvent<{ section: string; id: string | null }>) => this.setAddress(this.settingsLink(e.detail.section, e.detail.id))}
    ></fp3d-settings-page>`;
  }

  /** The main texts for the Settings page's bundle (it has no table of its own beyond its new texts). */
  private readonly translator = (key: string, vars?: Record<string, string | number>) => translate(this.hass, key as I18nKey, vars);

  private renderEditor(b: Building) {
    // the library (#44) is only loaded for the editor and the extensions page
    void this.data.loadLibrary();
    const pending = this.editorPending();
    if (pending) return pending;
    return html`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .canEdit=${this.data.canEdit}
      .home=${this.data.homeId}
      .homeName=${this.data.homeName}
      .history=${this.undoHistory}
      .building=${b}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${() => void this.data.reloadPacks()}
      @director-here=${() => (this._director = directorOnHere())}
      @voice-here=${() => {
        this._voiceHere = voiceOnHere();
        this._screen = screenName();
      }}
      @mic-probe=${() => loadVoice().then(() => (this._micProbe = true)).catch(() => undefined)}
      @open-extensions=${() => this.setMode("extensions")}
      @building-changed=${(e: CustomEvent<{ building: Building }>) => this.data.edit(e.detail.building)}
    ></fp3d-editor>`;
  }

  /** A single-row bar scrolls sideways with the mouse wheel (a desktop has no swipe). */
  private readonly onNavWheel = (e: WheelEvent) => {
    if (this._navWrap || !e.deltaY || e.deltaX) return;
    const nav = e.currentTarget as HTMLElement;
    if (nav.scrollWidth <= nav.clientWidth) return;
    nav.scrollLeft += e.deltaY;
    e.preventDefault();
  };

  private renderView(b: Building) {
    if (!b.floors.length || !b.floors.some((f) => f.rooms.length)) {
      return html`<div class="fp3d-empty">
        <p>${this.t(this.canEdit ? "no_building_admin" : "no_building")}</p>
        ${this.canEdit
          ? html`<button class="fp3d-btn fp3d-primary" @click=${() => this.setMode("editor")}>${this.t("open_editor")}</button>
              <button class="fp3d-btn" @click=${() => void this.loadSample()}>${this.t("home_sample")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`
          : nothing}
      </div>`;
    }
    const floor = b.floors.find((f) => f.id === this._floorId);
    const roomFloors = floor ? [floor] : b.floors;
    const tt = this.tt.active;
    // a sample / demo home: devices this Home Assistant lacks show fixed demo states (#100)
    const hass = withDemo(this.tt.hass(this.hass), b);
    // 3D or the 2D plan: beside the View menu, inside it on a tablet (#92)
    const planView = html`<div class="fp3d-seg" role="group" aria-label=${this.t("plan_view")}>
      <button aria-pressed=${!this._plan2d} @click=${() => this.setPlan2d(false)}>${this.t("view_3d")}</button>
      <button aria-pressed=${this._plan2d} @click=${() => this.setPlan2d(true)}>${this.t("view_2d")}</button>
    </div>`;
    return html`
      ${this._clean || (this._tablet && b.floors.length < 2) ? nothing : html`<nav class="fp3d-nav ${this._navWrap ? "fp3d-nav-wrap" : ""}" @wheel=${this.onNavWheel}>
        ${b.floors.length > 1
          ? html`<button class="fp3d-chip" aria-pressed=${this._floorId === null} @click=${() => {
                this._floorId = null;
                this._roomId = null;
              }}>
                ${this.t("all_floors")}
              </button>
              ${[...b.floors].reverse().map(
                (f) => html`<button
                  class="fp3d-chip"
                  aria-pressed=${f.id === this._floorId}
                  @click=${() => {
                    this._floorId = f.id;
                    this._roomId = null;
                  }}
                >
                  ${f.name}
                </button>`,
              )}
              <span class="fp3d-sep"></span>`
          : nothing}
        ${(this._tablet ? [] : roomFloors).flatMap((f) => [
          // in the house view the rooms of every floor follow a small floor label; a room without a name has
          // no button (an empty chip would only take space, #370)
          roomFloors.length > 1 && zonesOf(f).some((r) => r.name.trim()) ? html`<span class="fp3d-nav-floor">${f.name}</span>` : nothing,
          // the rooms, then the outdoor areas acting as rooms (garden, terrace – #100)
          // several areas of one garden (front and back lawn with the same area and name) share one chip
          ...zonesOf(f)
            .filter((r, i, all) => r.name.trim() && !(r.outdoor && all.findIndex((x) => x.outdoor && x.area_id === r.area_id && x.name === r.name) < i))
            .map(
            (r) => html`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${r.id === this._roomId}
              @click=${() => {
                if (b.floors.length > 1) this._floorId = f.id;
                this._roomId = r.id === this._roomId ? null : r.id;
              }}
            >
              ${r.name}
            </button>`,
          ),
        ])}
        ${this._tablet ? nothing : html`<button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap ? "nav_row" : "nav_wrap")}
          aria-label=${this.t(this._navWrap ? "nav_row" : "nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${() => {
            this._navWrap = !this._navWrap;
            prefs.set("nav_wrap", this._navWrap ? "1" : "0");
          }}
        >
          ${this._navWrap ? "\u2194" : "\u2261"}
        </button>`}
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId ? "fp3d-room-open" : ""} ${this._controlsRight ? "fp3d-side-right" : ""} ${tt ? "fp3d-tt" : ""}">
        <fp3d-view3d
          class="fp3d-body"
          .canEdit=${this.data.canEdit && !this._tablet}
          .noSettings=${this._tablet}
          .home=${this.data.homeId}
          .pivotMark=${this._pinHover}
          .hass=${hass}
          .replay=${this.tt.session?.replay ?? null}
          .building=${b}
          .packs=${this.data.packs}
          .plan2d=${this._plan2d}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          .angleLock=${this._angleLock}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall && !tt}
          @camera-wall-close=${() => (this._cameraWall = false)}
          @camera-wall-open=${() => (this._cameraWall = true)}
          .clean=${this._clean}
          .cleanButton=${true}
          @clean-toggle=${() => {
            this._clean = !this._clean;
            prefs.set("clean", this._clean ? "1" : "0");
          }}
          .weather=${this._weather}
          .director=${this._director}
          .voice=${this._voiceHere}
          .screen=${this._screen || null}
          .panelOpen=${!!this._roomId}
          .floorId=${b.floors.length > 1 ? this._floorId : (b.floors[0]?.id ?? null)}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .pinSize=${this._pinSize}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .clock=${this._clock}
          .accent=${this.shownAccent()}
          ?furnish=${this._furnish && !tt}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${(e: CustomEvent<{ id: string | null }>) => (this._selFurniture = e.detail.id)}
          @furniture-move=${this.moveFurniture}
          @device-select=${(e: CustomEvent<{ id: string | null }>) => (this._selDevice = e.detail.id)}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${() => this.setMode("extensions")}
          @floor-tap=${(e: CustomEvent<{ floorId: string | null }>) => {
            this._floorId = e.detail.floorId;
            this._roomId = null;
          }}
          @back=${() => this.back()}
          @plan-change=${this.onPlanChange}
        ></fp3d-view3d>
        ${this._roomId
          ? html`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${(e: CustomEvent<{ entity: string }>) => this.view3d()?.lookThrough(e.detail.entity)}
              .hass=${hass}
              ?readOnly=${tt}
              ?noLook=${this._plan2d}
              .room=${b.floors.flatMap((f) => zonesOf(f)).find((r) => r.id === this._roomId) ?? null}
              .floor=${b.floors.find((f) => zonesOf(f).some((r) => r.id === this._roomId)) ?? null}
              .building=${b}
              .confirmEntities=${confirmEntities(this.hass, b.floors)}
              .sheets=${this._roomId ? (this.view3d()?.roomSheets(this._roomId) ?? null) : null}
              @sheet-open=${(e: CustomEvent<{ id: string }>) => this._roomId && this.view3d()?.openRoomSheet(this._roomId, e.detail.id)}
              @close=${() => (this._roomId = null)}
            ></fp3d-room-panel>`
          : nothing}
        ${this.tt.session ? html`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>` : nothing}
        ${showsDemo(hass) ? html`<div class="fp3d-demo-chip" title=${this.t("demo_hint")}>${this.t("demo_chip")}</div>` : nothing}
        ${this._clean ? nothing : html`<div class="fp3d-overlay">
          ${this._tablet ? nothing : planView}
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${() => (this._showOpen = !this._showOpen)}>${this.t(this._tablet ? "view" : "show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen
              ? html`<div class="fp3d-show-veil" @click=${() => (this._showOpen = false)}></div>
                  <div class="fp3d-show-panel">
          ${this._tablet ? planView : nothing}
          ${this._plan2d
            ? nothing
            : html`<div class="fp3d-seg">
                <button aria-pressed=${this._wallMode === "auto"} @click=${() => this.setWallMode("auto")}>${this.t("walls_auto")}</button>
                <button aria-pressed=${this._wallMode === "cut"} @click=${() => this.setWallMode("cut")}>${this.t("walls_cut")}</button>
              </div>`}
          ${b.floors.length > 1 && !this._floorId && !this._plan2d
            ? html`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${() => this.setExplode(true)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${() => this.setExplode(false)}>${this.t("floors_stacked")}</button>
              </div>`
            : nothing}
          ${!this._floorId && !this._plan2d && b.settings.roof.type !== "none"
            ? html`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${() => this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`
            : nothing}
          ${b.floors.length > 1 && this._floorId && !this._plan2d
            ? html`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${(["dim", "stacked", "single"] as FloorStack[]).map(
                  (m) =>
                    html`<button
                      aria-pressed=${this._floorStack === m}
                      @click=${() => {
                        this._floorStack = m;
                        prefs.set("floor_stack", m);
                      }}
                    >
                      ${this.t(`floor_stack_short_${m}` as I18nKey)}
                    </button>`,
                )}
              </div>`
            : nothing}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${(["none", "temperature", "humidity", "co2", "values"] as HeatMode[]).map(
              (m) =>
                html`<button
                  aria-pressed=${this._heat === m}
                  @click=${() => {
                    this._heat = m;
                    prefs.set("heat", m);
                  }}
                >
                  ${this.t(m === "none" ? "heat_off" : (`heat_short_${m}` as I18nKey))}
                </button>`,
            )}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${() => {
              this._roomNames = !this._roomNames;
              prefs.set("room_names", this._roomNames ? "1" : "0");
            }}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${() => {
              this._trail = !this._trail;
              prefs.set("trail", this._trail ? "1" : "0");
            }}
          >
            ${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${() => (this._cameraWall = !this._cameraWall)}
          >
            ${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${() => {
              this._weather = !this._weather;
              prefs.set("weather", this._weather ? "1" : "0");
            }}
          >
            ${this.t("weather_short")}
          </button>
          ${this._tablet ? nothing : this.renderAllSettings("look", "walls")}
                  </div>`
              : nothing}
          </div>
          ${this._tablet ? nothing : html`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${tt} title=${this.t("tt_hint")} aria-label=${this.t("tt_chip")} @click=${() => this.toggleTimeTravel()}>
            ⏪ <span class="fp3d-tt-label">${this.t("tt_chip")}</span>
          </button>`}
          ${this._roomId || (this._floorId && b.floors.length > 1)
            ? html`<button class="fp3d-chip" @click=${() => this.back()}>${this.t("back")}</button>`
            : nothing}
        </div>`}
        ${this._furnish
          ? html`<div class="fp3d-furnish-bar">
              ${this._selFurniture
                ? html`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${() => this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${() => this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${() => this.editFurniture(this._selFurniture!, (f) => (f.mirror = !f.mirror))}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${() => this.deleteFurniture()}>${this.t("delete")}</button>`
                : this._selDevice
                  ? html`<span>${entityName(this.hass, this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${() => this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${() => this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${() => this.deleteDevice()}>${this.t("delete")}</button>`
                  : html`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${() => ((this._furnish = false), (this._selFurniture = null), (this._selDevice = null))}>${this.t("done")}</button>
            </div>`
          : nothing}
      </div>
    `;
  }

  static styles = [
    tokens,
    controls,
    css`
      .fp3d-all-settings {
        justify-self: start;
        align-self: flex-start;
        color: var(--fp3d-accent);
        box-shadow: none;
        background: none;
        padding-left: 4px;
      }
      .fp3d-badge {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1204;
        font-size: 0.78em;
        font-weight: 700;
        line-height: 1.5;
        box-shadow: 0 0 10px rgba(255, 181, 71, 0.7);
        vertical-align: middle;
        white-space: nowrap;
        animation: fp3d-badge-in 1.6s ease-out 2;
      }
      @keyframes fp3d-badge-in {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 181, 71, 0.9);
        }
        100% {
          box-shadow: 0 0 0 10px rgba(255, 181, 71, 0);
        }
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. The parent may pad itself by the
           screen's safe areas (notches; some themes set them on every screen): those are taken off, or the panel is
           taller than the window and its bottom is cut off (#529). */
        height: calc(100vh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        background: var(--fp3d-bg);
      }
      /* dvh only where the browser knows it: a line with var() is not dropped while it is read, so a WebView without
         dvh (Chrome before 108, the Fire 7) lost the height altogether and the 3D view stayed empty (idea: CasaNeon) */
      @supports (height: 100dvh) {
        :host {
          height: calc(100dvh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        }
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      /* the view options (quality, look, symbols, side) fold behind ⚙ on every screen: a tidy header */
      .fp3d-opts-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        order: 3;
        height: 36px;
        padding: 0 12px;
        font: inherit;
        font-weight: 600;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-opts-label {
        font-size: 13.5px;
      }
      .fp3d-opts-btn[aria-expanded="true"] {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
      }
      .fp3d-view-opts {
        display: none;
      }
      .fp3d-view-opts.fp3d-opts-open {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 16px;
        order: 5;
        width: 100%;
        align-items: flex-start;
      }
      /* one labelled group per kind of setting (#87) */
      .fp3d-opt-group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        position: relative;
        padding-top: 16px;
      }
      .fp3d-opt-group h3 {
        position: absolute;
        top: 0;
        left: 4px;
        margin: 0;
        font-size: 10.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-follow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-follow small {
        color: var(--fp3d-muted);
        font-size: 11.5px;
      }
      .fp3d-follow-box {
        display: inline-grid;
        place-items: center;
        width: 16px;
        height: 16px;
        border-radius: 5px;
        border: 1.5px solid var(--fp3d-muted);
        font-size: 11px;
        line-height: 1;
      }
      .fp3d-follow[aria-checked="true"] .fp3d-follow-box {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      /* phones: version and grow move with it; the Settings tab keeps only its gear */
      @media (max-width: 700px) {
        .fp3d-tab-word {
          display: none;
        }
        .fp3d-version {
          order: 4;
        }
        .fp3d-header .fp3d-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .fp3d-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .fp3d-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .fp3d-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .fp3d-accent-reset {
        border: none;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .fp3d-nav:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .fp3d-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .fp3d-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-left: 6px;
      }
      .fp3d-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-demo-chip {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        padding: 2px 10px;
        border-radius: 999px;
        font-size: 11px;
        letter-spacing: 0.04em;
        color: var(--fp3d-s-text, #e8f4ff);
        background: var(--fp3d-s-chrome, rgba(10, 20, 35, 0.72));
        border: 1px solid var(--fp3d-s-line, rgba(120, 200, 255, 0.35));
        pointer-events: auto;
        cursor: help;
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-clean fp3d-view3d {
        --fp3d-bottom-inset: 0px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* time travel: its bar at the bottom; the switches, the buttons of the view and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt fp3d-view3d {
        --fp3d-bottom-inset: calc(52px + var(--fp3d-tt-h));
      }
      .fp3d-tt .fp3d-overlay {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt .fp3d-room-panel {
        bottom: calc(var(--fp3d-tt-h) + 6px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
        /* the view's own buttons (search, eye) step up above the sheet */
        .fp3d-room-open fp3d-view3d {
          --fp3d-bottom-inset: calc(55% + 8px);
        }
        /* phones: the time bar takes two rows; the switches make way for it */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
        .fp3d-tt .fp3d-overlay {
          display: none;
        }
        .fp3d-tt fp3d-view3d {
          --fp3d-bottom-inset: var(--fp3d-tt-h);
        }
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
      }
      /* an open room panel keeps the switches beside it, not over its last rows */
      .fp3d-room-open .fp3d-overlay {
        right: calc(min(360px, 100% - 28px) + 26px);
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      /* the view's switches in one "Show" menu that opens upwards */
      .fp3d-show-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-show-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-show-panel {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: min(470px, 92vw);
        padding: 10px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid, #0d1628);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-show-panel > .fp3d-seg {
        flex-wrap: wrap;
      }
      .fp3d-show-panel > .fp3d-chip {
        box-shadow: none;
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-seg-label {
        display: inline-flex;
        align-items: center;
        padding: 0 4px 0 8px;
        opacity: 0.75;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-phone-only {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-only {
          display: block;
        }
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
      .fp3d-opts-veil {
        display: none;
      }
      /* phones (#93): the opened view settings float over the view instead of pushing it down, a tap beside them
         folds them; the bottom bar keeps one row (time travel as its symbol); touch targets 44 px */
      @media ${unsafeCSS(PHONE_MEDIA)} {
        .fp3d-header {
          position: relative;
        }
        .fp3d-view-opts.fp3d-opts-open {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 40;
          max-height: 60vh;
          overflow-x: hidden;
          overflow-y: auto;
          box-sizing: border-box;
          padding: 10px 12px 14px;
          background: var(--fp3d-chrome-solid);
          border-bottom: 1px solid var(--fp3d-line);
          box-shadow: var(--fp3d-shadow);
        }
        .fp3d-view-opts .fp3d-seg {
          flex-wrap: wrap;
        }
        .fp3d-opts-veil {
          display: block;
          position: fixed;
          inset: 0;
          z-index: 39;
        }
        .fp3d-opts-btn {
          min-width: 44px;
          height: 44px;
        }
        .fp3d-tt-label {
          display: none;
        }
        .fp3d-quality button {
          min-width: 44px;
        }
        .fp3d-nav .fp3d-nav-toggle {
          min-width: 44px;
        }
        .fp3d-header .fp3d-seg button,
        .fp3d-quality button,
        .fp3d-overlay .fp3d-chip,
        .fp3d-overlay .fp3d-seg button,
        .fp3d-show-panel button,
        .fp3d-nav .fp3d-chip {
          min-height: 44px;
        }
        .fp3d-overlay .fp3d-tt-chip {
          min-width: 44px;
          justify-content: center;
        }
      }
      /* touch screens, a tablet as much as a phone (#181): 44 px, and room for three rows of floor chips */
      @media (pointer: coarse), ${unsafeCSS(PHONE_MEDIA)} {
        .fp3d-opts-btn,
        .fp3d-quality button,
        .fp3d-nav .fp3d-nav-toggle {
          min-width: 44px;
        }
        .fp3d-opts-btn {
          height: 44px;
        }
        .fp3d-header .fp3d-seg button,
        .fp3d-quality button,
        .fp3d-overlay .fp3d-chip,
        .fp3d-overlay .fp3d-seg button,
        .fp3d-show-panel button,
        .fp3d-nav .fp3d-chip {
          min-height: 44px;
        }
        .fp3d-nav-wrap {
          max-height: 176px;
        }
      }
    `,
  ];
}

if (!customElements.get("home-3d-panel")) customElements.define("home-3d-panel", Floorplan3dPanel);
