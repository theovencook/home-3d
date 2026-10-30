import type { Building } from "./model.ts";

/** Undo steps kept; older ones drop off. */
export const HISTORY_STEPS = 100;
/** Changes with the same merge key this close together (ms) are one step: a run of arrow nudges (#66). */
export const MERGE_MS = 500;

/**
 * The editor's undo history (#66), kept by the panel rather than by the editor element: panel.ts removes the editor
 * when another tab opens, and the history used to go with it.
 *
 * It belongs to one home and to the plan as this panel last left it (`doc`). A plan that arrives from anywhere else
 * (another home, a reload from the server, someone else's edit, a restored draft) starts a fresh history: an old step
 * would otherwise jump back over a change that is not in it.
 */
export class UndoHistory {
  private past: string[] = [];
  private future: string[] = [];
  /** The home the steps belong to. */
  private home: string | null | undefined = undefined;
  /** The plan the steps lead up to: the last one this history handed out or was told about. */
  private doc: Building | null = null;
  /** The merge key of the last step and when a change last joined it. */
  private run: { key: string; at: number } | null = null;
  private readonly now: () => number;

  constructor(opts: { now?: () => number } = {}) {
    this.now = opts.now ?? Date.now;
  }

  get canUndo(): boolean {
    return this.past.length > 0;
  }

  get canRedo(): boolean {
    return this.future.length > 0;
  }

  /**
   * A plan is shown (an editor opened, or a new plan came from the panel): the steps stay when it is the plan they
   * lead up to and the same home, else they are dropped. True when they were kept.
   */
  adopt(building: Building, home: string | null | undefined): boolean {
    const keep = home === this.home && building === this.doc;
    if (!keep) this.clear();
    this.home = home;
    this.doc = building;
    return keep;
  }

  /**
   * A change made outside the editor (the 3D view's furnishing, the start view, the Extensions page): one more step,
   * so the editor opened next keeps the history. `base` is the plan it was made on.
   */
  record(base: Building, next: Building, home: string | null | undefined, key: string | null = null): void {
    this.adopt(base, home);
    this.push(base, key);
    this.track(next);
  }

  /** The plan is now `doc` without a new step (a drag on the move; the step comes when it ends). */
  track(doc: Building): void {
    this.doc = doc;
  }

  /**
   * A change was made: `base` (the plan before it) becomes a step. With a `key` (the same for, say, nudges of one
   * item), a change that follows the last one of that key within MERGE_MS joins its step instead: one undo takes
   * back the whole run.
   */
  push(base: Building, key: string | null = null): void {
    const at = this.now();
    const joins = key !== null && this.run?.key === key && at - this.run.at <= MERGE_MS && this.past.length > 0;
    this.run = key === null ? null : { key, at };
    this.future = [];
    if (joins) return;
    this.past.push(JSON.stringify(base));
    if (this.past.length > HISTORY_STEPS) this.past.shift();
  }

  /** One step back from `current`; null when there is none. The caller shows the returned plan. */
  undo(current: Building): Building | null {
    const prev = this.past.pop();
    if (!prev) return null;
    this.run = null;
    this.future.push(JSON.stringify(current));
    return (this.doc = JSON.parse(prev) as Building);
  }

  /** One step forward again; null when there is none. */
  redo(current: Building): Building | null {
    const next = this.future.pop();
    if (!next) return null;
    this.run = null;
    this.past.push(JSON.stringify(current));
    return (this.doc = JSON.parse(next) as Building);
  }

  clear(): void {
    this.past = [];
    this.future = [];
    this.run = null;
  }
}
