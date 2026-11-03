// After an update the old hashed chunks are gone. A page that still runs the old entry (a proxy or browser kept it) then
// imports a file that is not there. Reload once so the new entry is fetched, instead of a broken panel (#340). The flag
// in sessionStorage stops a loop (a real outage reloads once, then shows the error); it is cleared after a quiet spell,
// so a later update can recover the same way.

import { IMPORT_FAILED } from "./guard-import.ts";

const KEY = "fp3d_chunk_reload";
const QUIET_MS = 30_000;

const CHUNK_ERROR = /dynamically imported module|importing a module script failed|ChunkLoadError|Loading chunk .* failed/i;

/** Whether an error is a failed dynamic import (404 or network): Chrome, Firefox and Safari word it differently. */
export function isChunkLoadError(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const { name, message } = err as { name?: unknown; message?: unknown };
  return name === "ChunkLoadError" || (typeof message === "string" && CHUNK_ERROR.test(message));
}

export interface ReloadEnv {
  storage?: Pick<Storage, "getItem" | "setItem" | "removeItem"> | null;
  reload?: () => void;
  later?: (fn: () => void, ms: number) => void;
}

function defaults(): Required<ReloadEnv> {
  let storage: Storage | null = null;
  try {
    storage = globalThis.sessionStorage ?? null;
  } catch {
    storage = null; // blocked storage: no reload, because nothing could stop a loop
  }
  return { storage, reload: () => globalThis.location?.reload(), later: (fn, ms) => {
      const timer = setTimeout(fn, ms) as unknown as { unref?: () => void };
      timer.unref?.(); // Node (tests) must not wait for it
    },
  };
}

/** Reloads the page once for a failed chunk import. Returns whether it reloaded. */
export function reloadOnceFor(err: unknown, env: ReloadEnv = {}): boolean {
  if (!isChunkLoadError(err)) return false;
  const { storage, reload } = { ...defaults(), ...env };
  if (!storage) return false;
  try {
    if (storage.getItem(KEY)) return false;
    storage.setItem(KEY, String(Date.now()));
  } catch {
    return false;
  }
  reload();
  return true;
}

/** Forgets the flag after a quiet spell without a failure, so a later update can reload once again. */
export function clearReloadFlagLater(env: ReloadEnv = {}): void {
  const { storage, later } = { ...defaults(), ...env };
  later(() => {
    try {
      storage?.removeItem(KEY);
    } catch {
      /* nothing to clear */
    }
  }, QUIET_MS);
}

/** Catches the imports nobody guarded (an import() in a module that is not routed through guardImport). */
export function installChunkReloadGuard(): void {
  // the lazy bundles (settings, editor …) hand a failed import to the main bundle's guard through guardImport
  (globalThis as { [IMPORT_FAILED]?: (err: unknown) => void })[IMPORT_FAILED] = (err) => void reloadOnceFor(err);
  if (typeof addEventListener !== "function") return;
  addEventListener("unhandledrejection", (event) => void reloadOnceFor((event as PromiseRejectionEvent).reason));
  clearReloadFlagLater();
}
