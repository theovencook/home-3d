// Loads the building, follows changes made elsewhere and saves edits (debounced).

import type { ReactiveController, ReactiveControllerHost } from "lit";
import { fetchBuilding, fetchVersion, listPacks, saveBuilding, subscribeBuilding } from "./api.ts";
import { normalizeBuilding, type Building } from "./model.ts";
import { recipeHashes, setPacks, setPlanRecipes, type FurniturePack, type PlanRecipe } from "./packs.ts";
import type { HomeAssistant } from "./types.ts";

export type SaveState = "idle" | "saving" | "saved" | "error";

const SAVE_DELAY = 700;
/** Edits that could not be saved are kept here, so a reload does not lose them. */
const DRAFT_KEY = "home3d.unsaved";

/** Version of this frontend, set by the build (see build.mjs). */
declare const __FP3D_VERSION__: string;
export const FRONTEND_VERSION = typeof __FP3D_VERSION__ === "string" ? __FP3D_VERSION__ : "dev";
/** Which build of the frontend this is (#60): a hash of its sources, set by the build; the backend reports the build
 * whose files it serves now, so a page still running older JavaScript at the same version notices. */
declare const __FP3D_BUILD__: string;
export const FRONTEND_BUILD = typeof __FP3D_BUILD__ === "string" ? __FP3D_BUILD__ : "dev";

export interface Draft {
  building: Building;
  savedAt: number;
  /** The home the edits belong to (#53); offered only while that home is shown. */
  home?: string;
}

/** Unsaved edits of the earlier name (the browser may still hold them). */
const LEGACY_DRAFT_KEY = "floorplan-3d.unsaved";

function readDraft(): Draft | null {
  try {
    const raw = localStorage.getItem(DRAFT_KEY) ?? localStorage.getItem(LEGACY_DRAFT_KEY);
    return raw ? (JSON.parse(raw) as Draft) : null;
  } catch {
    return null;
  }
}

function writeDraft(draft: Draft | null): void {
  try {
    if (draft) localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    else {
      localStorage.removeItem(DRAFT_KEY);
      localStorage.removeItem(LEGACY_DRAFT_KEY);
    }
  } catch {
    // storage full or unavailable: the edit stays until the page is closed
  }
}

export class BuildingController implements ReactiveController {
  building: Building | null = null;
  error: string | null = null;
  saveState: SaveState = "idle";
  /** Why the last save failed (message from the backend). */
  saveError: string | null = null;
  /** Integration version the backend runs (differs from the frontend until Home Assistant restarts). */
  backendVersion: string | null = null;
  /** The frontend build the backend serves now (#60; null from a backend or build that does not say). */
  backendBuild: string | null = null;
  /** The frontend running in this page (the tests set another one). */
  frontend = { version: FRONTEND_VERSION, build: FRONTEND_BUILD };
  /** Unsaved edits from an earlier session, offered for restoring. */
  draft: Draft | null = null;
  /** The library (#44): the offered packs with an index of their items, loaded when an editor first needs it. */
  packs: FurniturePack[] = [];
  /** This user is on the editors list (#7): sees the Editor and Extensions and may change the plan. The backend
   * says so with the building; an older one that does not falls back to "admins edit". The backend refuses
   * changes from anyone else either way. */
  canEdit = false;
  /** The packs were fetched once (what is installed is known). */
  packsLoaded = false;
  /** The home to show (#53: a card's `home`); unset: the active home, followed when another one becomes active. */
  home: string | undefined = undefined;
  /** The home loaded (null before, or from a backend before #53): edits are saved back to it. */
  homeId: string | null = null;
  /** Its name, for the panel's home switcher. */
  homeName: string | null = null;
  private libraryLoading: Promise<void> | null = null;

  private readonly host: ReactiveControllerHost;
  private hass: HomeAssistant | null = null;
  private revision = -1;
  /** The hashes of the plan's recipe copies as the backend last sent them (#45). */
  private recipeBases: Record<string, string> = {};
  private ownRevisions = new Set<number>();
  private unsubscribe: (() => Promise<void>) | null = null;
  /** The subscription being set up (#150): a home switch or a disconnect waits for it, so none is left running. */
  private subscribing: Promise<void> | null = null;
  private saveTimer: ReturnType<typeof setTimeout> | undefined;
  private pending: Building | null = null;
  /** The home the pending edit was made on (#150): it is saved there, also when another home is loaded meanwhile. */
  private pendingHome: string | undefined = undefined;
  /** Counts the edits, so a load that was on its way while one was made does not put the older plan back (#150). */
  private edits = 0;
  private saving: Promise<void> | null = null;
  private connected = false;
  /** The websocket whose reconnects this view follows (#60). */
  private watched: HomeAssistant["connection"] | null = null;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  /** Show another home (#53: a card's `home` changed); unset: the active home. */
  setHome(home: string | undefined): void {
    if (home === this.home) return;
    this.remembered = false;
    this.home = home;
    if (!this.hass || !this.connected) return;
    void this.flush().then(async () => {
      // a subscription still being set up is let go of too (#150): it would follow the old home besides the new one
      await this.subscribing;
      const unsubscribe = this.unsubscribe;
      this.unsubscribe = null;
      await unsubscribe?.();
      await this.start();
    });
  }

  /**
   * Start on a home this device remembers (#160), before the first load. Unlike a card's `home` it may be gone by
   * now (deleted elsewhere): then the view follows the active home and `onHomeGone` is told.
   */
  openRemembered(home: string): void {
    if (this.hass && this.connected) this.setHome(home);
    else this.home = home;
    this.remembered = true;
  }

  /** Called when a remembered home (#160) was not found and the view went back to the active home. */
  onHomeGone: (() => void) | null = null;
  private remembered = false;

  /** Load the shown home afresh (#57: it was picked again in the home switcher); pending edits are saved first. */
  async reopen(): Promise<void> {
    await this.flush();
    await this.reload();
  }

  /** Call whenever the host receives a new hass object. */
  setHass(hass: HomeAssistant): void {
    const first = this.hass === null;
    this.hass = hass;
    if (first && this.connected) void this.start();
  }

  hostConnected(): void {
    this.connected = true;
    if (this.hass) void this.start();
  }

  hostDisconnected(): void {
    this.connected = false;
    void this.flush();
    const unsubscribe = this.unsubscribe;
    this.unsubscribe = null;
    void unsubscribe?.();
    this.watched?.removeEventListener?.("ready", this.onReconnect);
    this.watched = null;
  }

  /**
   * The websocket is back (#60): Home Assistant restarted, often after an update, so the versions are asked for again.
   * This is the only re-check: no polling, a wall tablet that stays open learns of an update when HA comes back.
   */
  private readonly onReconnect = () => void this.checkVersion();

  /** Ask the backend which version and frontend build it has now. */
  async checkVersion(): Promise<void> {
    if (!this.hass) return;
    try {
      const res = await fetchVersion(this.hass);
      this.backendVersion = res.version ?? null;
      this.backendBuild = res.build ?? null;
      this.host.requestUpdate();
    } catch {
      // an older backend without the command: the versions come with the next load of the building
    }
  }

  /** Local edit: shown immediately, saved after a short pause. */
  edit(building: Building): void {
    this.building = building;
    setPlanRecipes(building.recipes);
    this.pending = building;
    // the home on screen is the one this edit was made on (#150)
    this.pendingHome = this.homeId ?? this.home;
    this.edits++;
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => void this.flush(), SAVE_DELAY);
    this.host.requestUpdate();
  }

  /** This frontend's version, for notices. */
  get frontendVersion(): string {
    return this.frontend.version;
  }

  /**
   * Which side is behind when the versions differ: "backend" when Home Assistant still runs the old
   * integration (restart helps), "frontend" when the browser or the companion app still holds an old
   * bundle (a reload helps, not a restart); null when they match or one is unknown.
   */
  get versionGap(): "backend" | "frontend" | null {
    const own = this.frontend;
    if (!this.backendVersion || own.version === "dev") return null;
    // the same version rebuilt (a deploy without a version bump): the files served are newer than this page (#60)
    if (this.backendVersion === own.version) return this.backendBuild && own.build !== "dev" && this.backendBuild !== own.build ? "frontend" : null;
    return compareVersions(this.backendVersion, own.version) > 0 ? "frontend" : "backend";
  }

  /** The backend runs another version than this frontend: Home Assistant has to restart. */
  get needsRestart(): boolean {
    // an older backend that does not report its version yet rejects the new fields ("extra keys")
    if (this.saveError && /extra keys not allowed/i.test(this.saveError)) return true;
    return !!this.backendVersion && this.frontend.version !== "dev" && this.backendVersion !== this.frontend.version;
  }

  /**
   * The "updated, tap to reload" notice (#60): null without a newer frontend; "ready" when a reload loses nothing;
   * "saving" while edits are on their way (the reload waits for them); "unsaved" when the last save failed, so a
   * reload now would drop the edits. The page never reloads by itself.
   */
  get updateNotice(): "ready" | "saving" | "unsaved" | null {
    if (this.versionGap !== "frontend") return null;
    if (this.saveState === "error") return "unsaved";
    return this.pending || this.saving ? "saving" : "ready";
  }

  /** Reload the page once the edits are saved (the notice's button); false when they could not be: no reload then. */
  async reloadWhenSaved(reload: () => void = () => location.reload()): Promise<boolean> {
    await this.flush();
    if (this.pending || this.saveState === "error") return false;
    reload();
    return true;
  }

  /** Take over the unsaved edits of an earlier session (they are saved right away), only onto their own home (#150). */
  restoreDraft(): void {
    const draft = this.draft;
    this.draft = null;
    if (draft && this.draftFits(draft)) this.edit(normalizeBuilding(draft.building));
    else this.host.requestUpdate();
  }

  /**
   * Whether a draft belongs to the home loaded now (#150): one that names its home only there; one from before homes
   * had ids (#53) only while this view follows the active home, the one such a session edited.
   */
  draftFits(draft: Draft): boolean {
    return draft.home ? draft.home === this.homeId : this.home === undefined;
  }

  discardDraft(): void {
    this.draft = null;
    writeDraft(null);
    this.host.requestUpdate();
  }

  async flush(): Promise<void> {
    clearTimeout(this.saveTimer);
    if (this.saving) await this.saving;
    const building = this.pending;
    if (!building || !this.hass) return;
    const home = this.pendingHome;
    this.pending = null;
    // a mount height above what the backend accepts (10 m – "40" typed as centimetres) would refuse every save,
    // also of an edit kept from earlier: it is brought into range here
    for (const f of building.floors) for (const m of f.furniture) if (m.mount_y != null && m.mount_y > 10) m.mount_y = 10;
    this.saveState = "saving";
    this.host.requestUpdate();
    this.saving = (async () => {
      try {
        // the recipe hashes belong to the home loaded; an edit of a home no longer loaded sends none
        const bases = home === (this.homeId ?? this.home) ? this.recipeBases : {};
        const { revision, recipes } = await saveBuilding(this.hass!, building, bases, home);
        // the copies the backend made for items placed now: the plan keeps them, also when their pack goes (#2);
        // and the ones it changed meanwhile (an update, a rollback, #45) replace the copies this plan started from
        if (recipes) adoptRecipes(building, recipes, bases);
        // the screen and the revisions follow only while the saved home is still the one loaded (#150)
        if (home === (this.homeId ?? this.home)) {
          if (recipes) {
            if (this.building && this.building !== building) adoptRecipes(this.building, recipes, bases);
            if (this.building) setPlanRecipes(this.building.recipes);
            this.recipeBases = recipeHashes(recipes);
          }
          this.ownRevisions.add(revision);
          this.revision = revision;
        }
        this.saveState = this.pending ? "saving" : "saved";
        this.saveError = null;
        writeDraft(null);
      } catch (err) {
        this.saveState = "error";
        this.saveError = errorText(err);
        // keep the edit: after a restart it can be restored and saved
        writeDraft({ building, savedAt: Date.now(), ...(home ? { home } : {}) });
      }
      this.host.requestUpdate();
    })();
    await this.saving;
    this.saving = null;
  }

  private async start(): Promise<void> {
    if (!this.hass) return;
    // the library is not loaded here: placed items draw from the plan's recipe copies (#2), so a view that only
    // shows the plan (a wall tablet) never fetches it; the editor and the extensions page ask for it (#44)
    await this.reload();
    if (!this.watched && this.connected && this.hass.connection.addEventListener) {
      this.watched = this.hass.connection;
      this.watched.addEventListener!("ready", this.onReconnect);
    }
    if (!this.unsubscribe && !this.subscribing && this.connected) {
      this.subscribing = this.subscribe(this.hass);
      await this.subscribing;
      this.subscribing = null;
    }
  }

  /** Follow the changes made elsewhere to the home asked for (#150: one subscription, kept only while still wanted). */
  private async subscribe(hass: HomeAssistant): Promise<void> {
    const asked = this.home;
    try {
      const unsubscribe = await subscribeBuilding(
        hass,
        (revision, home) => {
          // another home became active (#53): shown once this view's own edits are saved to the home they belong to
          if (home && this.homeId && home !== this.homeId) {
            void this.flush().then(() => this.reload());
            return;
          }
          if (this.ownRevisions.has(revision) || revision === this.revision) return;
          if (this.pending || this.saving) return; // our own edits win; they are saved next
          void this.reload();
        },
        asked,
      );
      // the view went away, or shows another home now, while this was set up: let go of it at once
      if (!this.connected || asked !== this.home || this.unsubscribe) await unsubscribe();
      else this.unsubscribe = unsubscribe;
    } catch {
      // older backend or connection loss: changes from elsewhere show after a reload
    }
  }

  /** Load the library unless it is loaded or loading (the editor and the extensions page call it when they open). */
  loadLibrary(): Promise<void> {
    if (this.packsLoaded) return Promise.resolve();
    this.libraryLoading ??= this.reloadPacks().finally(() => (this.libraryLoading = null));
    return this.libraryLoading;
  }

  /** Load the furniture packs again (after an import or removal). */
  async reloadPacks(): Promise<void> {
    if (!this.hass) return;
    try {
      this.packs = await listPacks(this.hass);
    } catch {
      // backend without packs (before a restart): no pack furniture
      this.packs = [];
    }
    setPacks(this.packs);
    this.packsLoaded = true;
    this.host.requestUpdate();
  }

  private async reload(): Promise<void> {
    if (!this.hass) return;
    const asked = this.home;
    const edits = this.edits;
    try {
      const res = await fetchBuilding(this.hass, asked);
      // another home was asked for meanwhile (#150): its own load shows, not this one
      if (asked !== this.home) return;
      const id = res.home_id ?? null;
      const moved = id !== this.homeId;
      if (moved) {
        // edits still waiting were made on the home shown until now: saved to it before the other one shows (#150)
        while (this.pending) await this.flush();
        if (asked !== this.home) return;
        this.ownRevisions.clear();
        // a draft on offer belongs to the home it was found for (#150)
        this.draft = null;
      }
      this.homeId = id;
      this.homeName = res.home_name ?? null;
      this.backendVersion = res.version ?? null;
      this.backendBuild = res.build ?? null;
      this.canEdit = res.can_edit ?? !!this.hass.user?.is_admin;
      // an edit made while this load was on its way (or still being saved) wins over the plan it brings (#150): put
      // back, the edit would vanish from the screen and the next one would be built without it
      if (moved || (!this.pending && !this.saving && this.edits === edits)) {
        this.building = normalizeBuilding(res.building);
        setPlanRecipes(this.building.recipes);
        this.recipeBases = recipeHashes(this.building.recipes);
        this.revision = res.revision;
      }
      if (this.draft === null && !this.pending) {
        const draft = readDraft();
        this.draft = draft && this.draftFits(draft) ? draft : null;
      }
      this.error = null;
    } catch (err) {
      if (asked !== this.home) return;
      if (this.remembered && asked !== undefined && (err as { code?: string } | null)?.code === "home_not_found") {
        // the home this device remembered is gone (#160): the active home instead
        this.remembered = false;
        this.home = undefined;
        this.onHomeGone?.();
        return this.reload();
      }
      this.error = errorText(err);
    }
    this.host.requestUpdate();
  }
}

/** Add the recipe copies a plan lacks and take the backend's copy where the plan still has the one it started from
 * (`bases`); a copy changed in the plan since stays. */
function adoptRecipes(building: Building, recipes: Record<string, PlanRecipe>, bases: Record<string, string>): void {
  const own = building.recipes ?? {};
  const kept = Object.entries(own).filter(([type, copy]) => !(type in recipes) || copy.hash !== bases[type]);
  building.recipes = { ...recipes, ...Object.fromEntries(kept) };
}


function errorText(err: unknown): string {
  if (err && typeof err === "object" && "message" in err) return String((err as { message: unknown }).message);
  return String(err);
}

/** Numeric comparison of "1.10.1"-style versions: negative when a < b, positive when a > b. */
export function compareVersions(a: string, b: string): number {
  const pa = a.split(/[.-]/).map((x) => Number.parseInt(x, 10) || 0);
  const pb = b.split(/[.-]/).map((x) => Number.parseInt(x, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d) return d;
  }
  return 0;
}
