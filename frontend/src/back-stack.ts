// Android's back gesture (and the browser's Back) closes what is open over the page before it leaves the page (#250,
// the menus redesign #219): the editor's details sheet, a menu, the View panel. Each open layer adds one history entry
// (same address); Back pops it and the layer closes. A layer closed by its own button takes its entry back out again.
// The stack lives on globalThis: the main bundle and the editor bundle each carry a copy of this module, and both must
// share one stack, as there is one history.

interface Layer {
  id: number;
  close: () => void;
}

interface Stack {
  layers: Layer[];
  next: number;
  /** history.back() calls of our own whose popstate is not a Back press. */
  skip: number;
  listening: boolean;
}

const KEY = "__fp3dBackStack";

function stack(): Stack {
  const g = globalThis as Record<string, unknown>;
  return (g[KEY] ??= { layers: [], next: 1, skip: 0, listening: false }) as Stack;
}

/** Whether this page can keep a back stack (not in tests or a page without history). */
function usable(): boolean {
  return typeof window !== "undefined" && typeof window.addEventListener === "function" && typeof history !== "undefined" && typeof history.pushState === "function";
}

/** Which of our entries the history now stands on (0: none of ours). */
function entryOf(state: unknown): number {
  const id = (state as { fp3dBack?: unknown } | null)?.fp3dBack;
  return typeof id === "number" ? id : 0;
}

function listen(s: Stack): void {
  if (s.listening) return;
  s.listening = true;
  window.addEventListener("popstate", (e: PopStateEvent) => {
    if (s.skip > 0) {
      s.skip--;
      return;
    }
    // every layer opened after the entry the history went back to closes, the newest first
    const at = entryOf(e.state);
    for (let i = s.layers.length - 1; i >= 0; i--) {
      const layer = s.layers[i]!;
      if (layer.id <= at) break;
      s.layers.splice(i, 1);
      layer.close();
    }
  });
}

/**
 * A layer opens: Back will call `close` (once). Returns the release to call when the layer closes some other way (its
 * Close button, Escape, a tap outside): its history entry goes again, so Back is not used up on something already shut.
 */
export function openBackLayer(close: () => void): () => void {
  if (!usable()) return () => undefined;
  const s = stack();
  listen(s);
  const id = s.next++;
  s.layers.push({ id, close });
  try {
    // keep what Home Assistant keeps in the entry; never copy its open dialog
    const { dialog: _dialog, ...rest } = (history.state ?? {}) as Record<string, unknown>;
    history.pushState({ ...rest, fp3dBack: id }, "");
  } catch {
    // a sandboxed frame without history: the layer simply has no Back
  }
  let done = false;
  return () => {
    if (done) return;
    done = true;
    const i = s.layers.findIndex((l) => l.id === id);
    if (i < 0) return;
    s.layers.splice(i, 1);
    // its entry is the one the history stands on: step back over it (that popstate is ours, not a Back press)
    if (entryOf(history.state) === id) {
      s.skip++;
      history.back();
    }
  };
}

/**
 * One layer per named thing that is open or shut, kept in step on every render: `sync("sheet", open, close)` opens the
 * layer when `open` turns true and releases it when it turns false. `closeAll` releases every layer (the element left).
 */
export class BackLayers {
  private readonly open = new Map<string, () => void>();

  sync(name: string, isOpen: boolean, close: () => void): void {
    const release = this.open.get(name);
    if (isOpen && !release) {
      this.open.set(
        name,
        openBackLayer(() => {
          this.open.delete(name);
          close();
        }),
      );
    } else if (!isOpen && release) {
      this.open.delete(name);
      release();
    }
  }

  closeAll(): void {
    for (const release of [...this.open.values()].reverse()) release();
    this.open.clear();
  }
}
