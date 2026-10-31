// Loads the building, follows changes made elsewhere and saves edits (debounced).

import type { ReactiveController, ReactiveControllerHost } from "lit";
import { fetchBuilding, fetchVersion, listPacks, saveBuilding, subscribeBuilding, takeSnapshot, type PlanProblem } from "./api.ts";
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

/** A change to the plan that can be made again on a newer plan (#149): the 3D view's settings and its modules. */
export type PlanChange = (building: Building) => void;

/** How often a refused save is made again on the newer plan before the edits are kept as a draft instead (#149). */
const REPLAYS = 3;

export interface Draft {
  building: Building;
  savedAt: number;
  /** The home the edits belong to (#53); offered only while that home is shown. */
  home?: string;
  /** Kept from a save refused because someone else changed the plan meanwhile (#149). */
  conflict?: boolean;
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
  /** The websocket protocol the backend speaks (#166): 0 for one from before protocols, null before it answered. */
  backendProtocol: number | null = null;
  /** What is wrong with the loaded home's stored plan (#165); a plan the backend cannot read comes with can_edit off. */
  planProblem: PlanProblem | null = null;
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
  /** The last save was refused because someone else changed the plan meanwhile (#149): the plan now shows their
   * version, and `draft` holds the edits made here (restoring it keeps theirs as a restore point). */
  conflict = false;
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
  /** How `pending` came from the plan shown before it, when only `update()` changes made it (#149); null: edits. */
  private changes: PlanChange[] | null = [];
  /** The newest revision another save announced while this view had edits on their way (#149). */
  private remoteRevision = -1;
  private saving: Promise<void> | null = null;
  private connected = false;
  /** The websocket whose reconnects this view follows (#60). */
  private watched: HomeAssistant["connection"] | null = null;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  /** The home on screen, the one an edit made now belongs to (#150). */
  private get shown(): string | undefined {
    return this.homeId ?? this.home;
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
      this.backendProtocol = res.protocol ?? 0;
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
    this.pendingHome = this.shown;
    this.edits++;
    this.changes = null;
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => void this.flush(), SAVE_DELAY);
    this.host.requestUpdate();
  }

  /** A change from the 3D view (#149: its settings, a module): shown and saved at once. When someone else changed the
   * plan meanwhile, it is made again on their plan, so neither change is lost. */
  update(change: PlanChange): void {
    if (!this.building) return;
    const before = this.pending ? this.changes : [];
    const next = structuredClone(this.building);
    change(next);
    this.edit(next);
    this.changes = before ? [...before, change] : null;
    void this.flush();
  }

  /** Whether the backend understands the commands of `protocol` (#166, api.ts PROTOCOL): the one place to gate a newer
   * command on, instead of trying it and falling back. */
  speaks(protocol: number): boolean {
    return (this.backendProtocol ?? 0) >= protocol;
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

  /**
   * Take over the unsaved edits of an earlier session (they are saved right away), only onto their own home (#150).
   * After a refused save (#149) the plan someone else saved is kept as a restore point first, as these edits replace
   * it.
   */
  async restoreDraft(): Promise<void> {
    const draft = this.draft;
    const conflict = this.conflict;
    this.draft = null;
    this.conflict = false;
    if (!draft || !this.draftFits(draft)) {
      this.host.requestUpdate();
      return;
    }
    if (conflict && this.hass) {
      try {
        await takeSnapshot(this.hass, this.shown);
      } catch {
        // an older backend or a lost connection: the edits are still saved, as the button says
      }
      // another home was loaded meanwhile: the draft stays stored for its own home, where it is offered again
      if (!this.draftFits(draft)) {
        this.host.requestUpdate();
        return;
      }
    }
    this.edit(normalizeBuilding(draft.building));
  }

  /**
   * Whether a draft belongs to the home loaded now (#150): one that names its home only there; one from before homes
   * had ids (#53) only while this view follows the active home, the one such a session edited. A draft kept from a
   * refused save (#149) is no different.
   */
  draftFits(draft: Draft): boolean {
    return draft.home ? draft.home === this.homeId : this.home === undefined;
  }

  discardDraft(): void {
    this.draft = null;
    this.conflict = false;
    writeDraft(null);
    this.host.requestUpdate();
  }

  async flush(): Promise<void> {
    clearTimeout(this.saveTimer);
    if (this.saving) await this.saving;
    const building = this.pending;
    if (!building || !this.hass) return;
    const home = this.pendingHome;
    const changes = this.changes;
    this.pending = null;
    this.changes = [];
    // a mount height above what the backend accepts (10 m – "40" typed as centimetres) would refuse every save,
    // also of an edit kept from earlier: it is brought into range here
    for (const f of building.floors) for (const m of f.furniture) if (m.mount_y != null && m.mount_y > 10) m.mount_y = 10;
    this.saveState = "saving";
    this.host.requestUpdate();
    this.saving = (async () => {
      try {
        await this.save(building, changes, home);
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
    // another save landed while this one was on its way: shown now, unless more edits follow (they meet it as a
    // refused save, #149)
    if (!this.pending && this.remoteRevision > this.revision) void this.reload();
  }

  /**
   * Save `building`, an edit of `home`, from the plan at `revision` (#149). When the backend refuses it because someone
   * else changed the plan meanwhile, their plan is loaded; edits made only by `update()` changes are made again on it
   * and saved, any other edits stay as `draft` with `conflict` set, so nothing is lost and nothing of theirs is
   * overwritten unasked. The revision, the recipe bases and the plan shown are those of the home loaded, so while
   * `home` is not that one any more (#150) a refused save is only kept as that home's draft.
   */
  private async save(building: Building, changes: PlanChange[] | null, home: string | undefined): Promise<void> {
    for (let attempt = 1; ; attempt++) {
      const here = home === this.shown;
      // the recipe hashes belong to the home loaded; an edit of a home no longer loaded sends none (#150)
      const bases = here ? this.recipeBases : {};
      let refused: unknown;
      try {
        const base = here && this.revision >= 0 ? this.revision : undefined;
        const { revision, recipes } = await saveBuilding(this.hass!, building, bases, home, base);
        // the copies the backend made for items placed now: the plan keeps them, also when their pack goes (#2);
        // and the ones it changed meanwhile (an update, a rollback, #45) replace the copies this plan started from
        if (recipes) adoptRecipes(building, recipes, bases);
        // the screen and the revisions follow only while the saved home is still the one loaded (#150)
        if (home === this.shown) {
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
        this.forgetDraft(home);
        return;
      } catch (err) {
        if (!isConflict(err)) throw err;
        refused = err;
      }
      // another home is loaded now (#150): their plan of `home` is not on screen to merge into, nor are edits made
      // since (they belong to the home shown), so the refused edit is kept for its own home, offered there again
      if (home !== this.shown) {
        writeDraft({ building, savedAt: Date.now(), ...(home ? { home } : {}), conflict: true });
        this.saveState = "error";
        this.saveError = errorText(refused);
        return;
      }
      const loaded = await this.loadTheirs(home);
      // edits made while their plan was loading belong to the refused ones (they were made on the older plan)
      const local = this.pending ?? building;
      const all = this.pending ? (changes && this.changes ? [...changes, ...this.changes] : null) : changes;
      clearTimeout(this.saveTimer);
      this.pending = null;
      this.changes = [];
      // the newer plan is what was to be saved (an editor showing a restored backup again): nothing to keep
      if (loaded && this.building && samePlan(local, this.building)) {
        this.saveState = "saved";
        return;
      }
      if (!loaded || !all || attempt >= REPLAYS || !this.building) {
        const draft: Draft = { building: local, savedAt: Date.now(), ...(home ? { home } : {}), conflict: true };
        writeDraft(draft);
        if (this.draftFits(draft)) {
          this.conflict = true;
          this.draft = draft;
        }
        this.saveState = "error";
        this.saveError = null;
        return;
      }
      building = structuredClone(this.building);
      for (const change of all) change(building);
      changes = all;
      this.building = building;
      setPlanRecipes(building.recipes);
      this.host.requestUpdate();
    }
  }

  /**
   * After a refused save (#149): load the plan `home` has now and show it with its revision and recipe bases, the
   * ones the edits are made again on. Not `reload()`: that asks for the home wanted next (#150), which may be another
   * one by now, and waits for this very save before it shows another home. Whether the plan came and is shown.
   */
  private async loadTheirs(home: string | undefined): Promise<boolean> {
    let res: Awaited<ReturnType<typeof fetchBuilding>>;
    try {
      res = await fetchBuilding(this.hass!, home);
    } catch {
      return false;
    }
    // the home on screen changed while it came: kept as a draft instead
    if (home !== this.shown || (res.home_id ?? null) !== this.homeId) return false;
    this.show(res, true);
    this.error = null;
    return true;
  }

  /** Forget the kept edits once `home` saved (#150: not another home's), unless they are on offer after a refused
   * save (#149). */
  private forgetDraft(home: string | undefined): void {
    if (this.conflict) return;
    const kept = readDraft();
    if (kept?.home && kept.home !== home) return;
    writeDraft(null);
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
          this.remoteRevision = Math.max(this.remoteRevision, revision);
          // shown once the edits on their way are saved; a save from the older plan is refused by the backend
          // and handled there (#149)
          if (this.pending || this.saving) return;
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

  /** Load the shown home's plan; whether it came (false also when another home was asked for meanwhile). */
  private async reload(): Promise<boolean> {
    if (!this.hass) return false;
    const asked = this.home;
    const edits = this.edits;
    try {
      const res = await fetchBuilding(this.hass, asked);
      // another home was asked for meanwhile (#150): its own load shows, not this one
      if (asked !== this.home) return false;
      const id = res.home_id ?? null;
      const moved = id !== this.homeId;
      if (moved) {
        // edits still waiting were made on the home shown until now: saved to it before the other one shows (#150)
        while (this.pending) await this.flush();
        if (asked !== this.home) return false;
        this.ownRevisions.clear();
        this.remoteRevision = -1;
        // a draft on offer belongs to the home it was found for (#150), a refused save's too (#149)
        this.draft = null;
        this.conflict = false;
      }
      // an edit made while this load was on its way (or still being saved) wins over the plan it brings (#150): put
      // back, the edit would vanish from the screen and the next one would be built without it
      this.show(res, moved || (!this.pending && !this.saving && this.edits === edits));
      if (this.draft === null && !this.pending) {
        const draft = readDraft();
        this.draft = draft && this.draftFits(draft) ? draft : null;
        // edits kept from a refused save (#149) are offered as such, also after a page reload or a home switch
        this.conflict = !!this.draft?.conflict;
      }
      this.error = null;
    } catch (err) {
      if (asked !== this.home) return false;
      if (this.remembered && asked !== undefined && (err as { code?: string } | null)?.code === "home_not_found") {
        // the home this device remembered is gone (#160): the active home instead
        this.remembered = false;
        this.home = undefined;
        this.onHomeGone?.();
        return this.reload();
      }
      this.error = errorText(err);
      this.host.requestUpdate();
      return false;
    }
    this.host.requestUpdate();
    return true;
  }

  /** Take over a loaded home: its name, the versions and rights it reports, and, with `plan`, its plan, revision and
   * recipe bases. */
  private show(res: Awaited<ReturnType<typeof fetchBuilding>>, plan: boolean): void {
    this.homeId = res.home_id ?? null;
    this.homeName = res.home_name ?? null;
    this.backendVersion = res.version ?? null;
    this.backendProtocol = res.protocol ?? 0;
    this.backendBuild = res.build ?? null;
    this.canEdit = res.can_edit ?? !!this.hass?.user?.is_admin;
    this.planProblem = res.problem ?? null;
    if (!plan) return;
    this.building = normalizeBuilding(res.building);
    setPlanRecipes(this.building.recipes);
    this.recipeBases = recipeHashes(this.building.recipes);
    this.revision = res.revision;
  }
}

/** Add the recipe copies a plan lacks and take the backend's copy where the plan still has the one it started from
 * (`bases`); a copy changed in the plan since stays. */
function adoptRecipes(building: Building, recipes: Record<string, PlanRecipe>, bases: Record<string, string>): void {
  const own = building.recipes ?? {};
  const kept = Object.entries(own).filter(([type, copy]) => !(type in recipes) || copy.hash !== bases[type]);
  building.recipes = { ...recipes, ...Object.fromEntries(kept) };
}


/** Two plans alike but for their recipe copies (the server's own copies are taken over on load anyway). */
function samePlan(a: Building, b: Building): boolean {
  return JSON.stringify({ ...a, recipes: undefined }) === JSON.stringify({ ...b, recipes: undefined });
}

/** The backend refused a save from a plan someone else changed since (#149). */
function isConflict(err: unknown): boolean {
  return !!err && typeof err === "object" && (err as { code?: unknown }).code === "conflict";
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
