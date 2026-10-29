// Loads the building, follows changes made elsewhere and saves edits (debounced).

import type { ReactiveController, ReactiveControllerHost } from "lit";
import { fetchBuilding, listPacks, saveBuilding, subscribeBuilding } from "./api.ts";
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
  private saveTimer: ReturnType<typeof setTimeout> | undefined;
  private pending: Building | null = null;
  private saving: Promise<void> | null = null;
  private connected = false;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    host.addController(this);
  }

  /** Show another home (#53: a card's `home` changed); unset: the active home. */
  setHome(home: string | undefined): void {
    if (home === this.home) return;
    this.home = home;
    if (!this.hass || !this.connected) return;
    void this.flush().then(async () => {
      await this.unsubscribe?.();
      this.unsubscribe = null;
      await this.start();
    });
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
    void this.unsubscribe?.();
    this.unsubscribe = null;
  }

  /** Local edit: shown immediately, saved after a short pause. */
  edit(building: Building): void {
    this.building = building;
    setPlanRecipes(building.recipes);
    this.pending = building;
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => void this.flush(), SAVE_DELAY);
    this.host.requestUpdate();
  }

  /** This frontend's version, for notices. */
  get frontendVersion(): string {
    return FRONTEND_VERSION;
  }

  /**
   * Which side is behind when the versions differ: "backend" when Home Assistant still runs the old
   * integration (restart helps), "frontend" when the browser or the companion app still holds an old
   * bundle (a reload helps, not a restart); null when they match or one is unknown.
   */
  get versionGap(): "backend" | "frontend" | null {
    if (!this.backendVersion || FRONTEND_VERSION === "dev" || this.backendVersion === FRONTEND_VERSION) return null;
    return compareVersions(this.backendVersion, FRONTEND_VERSION) > 0 ? "frontend" : "backend";
  }

  /** The backend runs another version than this frontend: Home Assistant has to restart. */
  get needsRestart(): boolean {
    // an older backend that does not report its version yet rejects the new fields ("extra keys")
    if (this.saveError && /extra keys not allowed/i.test(this.saveError)) return true;
    return !!this.backendVersion && FRONTEND_VERSION !== "dev" && this.backendVersion !== FRONTEND_VERSION;
  }

  /** Take over the unsaved edits of an earlier session (they are saved right away). */
  restoreDraft(): void {
    const draft = this.draft;
    this.draft = null;
    if (draft) this.edit(normalizeBuilding(draft.building));
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
    this.pending = null;
    // a mount height above what the backend accepts (10 m – "40" typed as centimetres) would refuse every save,
    // also of an edit kept from earlier: it is brought into range here
    for (const f of building.floors) for (const m of f.furniture) if (m.mount_y != null && m.mount_y > 10) m.mount_y = 10;
    this.saveState = "saving";
    this.host.requestUpdate();
    this.saving = (async () => {
      try {
        const bases = this.recipeBases;
        const { revision, recipes } = await saveBuilding(this.hass!, building, bases, this.homeId ?? this.home);
        // the copies the backend made for items placed now: the plan keeps them, also when their pack goes (#2);
        // and the ones it changed meanwhile (an update, a rollback, #45) replace the copies this plan started from
        if (recipes) {
          adoptRecipes(building, recipes, bases);
          if (this.building && this.building !== building) adoptRecipes(this.building, recipes, bases);
          if (this.building) setPlanRecipes(this.building.recipes);
          this.recipeBases = recipeHashes(recipes);
        }
        this.ownRevisions.add(revision);
        this.revision = revision;
        this.saveState = this.pending ? "saving" : "saved";
        this.saveError = null;
        writeDraft(null);
      } catch (err) {
        this.saveState = "error";
        this.saveError = errorText(err);
        // keep the edit: after a restart it can be restored and saved
        writeDraft({ building, savedAt: Date.now(), ...(this.homeId ? { home: this.homeId } : {}) });
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
    if (!this.unsubscribe && this.connected) {
      try {
        this.unsubscribe = await subscribeBuilding(
          this.hass,
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
          this.home,
        );
      } catch {
        // older backend or connection loss: changes from elsewhere show after a reload
      }
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
    try {
      const res = await fetchBuilding(this.hass, this.home);
      if ((res.home_id ?? null) !== this.homeId) this.ownRevisions.clear();
      this.homeId = res.home_id ?? null;
      this.homeName = res.home_name ?? null;
      this.building = normalizeBuilding(res.building);
      setPlanRecipes(this.building.recipes);
      this.recipeBases = recipeHashes(this.building.recipes);
      this.backendVersion = res.version ?? null;
      this.canEdit = res.can_edit ?? !!this.hass.user?.is_admin;
      if (this.draft === null && !this.pending) {
        const draft = readDraft();
        this.draft = draft && (!draft.home || draft.home === this.homeId) ? draft : null;
      }
      this.revision = res.revision;
      this.error = null;
    } catch (err) {
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
