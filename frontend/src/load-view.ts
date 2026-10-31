// The 3D view element (fp3d-view3d) loads where the panel or a card shows (#179). Home Assistant loads the main bundle
// on every page, so that the card is known on any dashboard; the view is the biggest part of it and is a chunk of its
// own (build.mjs), which shares the main bundle's modules. The panel and the card draw <fp3d-view3d> at once: the
// element takes the properties it was given when its code arrives.

let loading: Promise<void> | undefined;

/** Loads the view once; a failed download is forgotten, so the next call tries again. */
export function loadView(): Promise<void> {
  loading ??= import("./components/view3d.ts").then(
    () => undefined,
    (err: unknown) => {
      loading = undefined;
      throw err;
    },
  );
  return loading;
}

/** The view element in `root` once its code is there (its methods exist only then), else null. */
export function readyView<T extends HTMLElement>(root: ParentNode | null | undefined): T | null {
  if (!customElements.get("fp3d-view3d")) return null;
  return (root?.querySelector("fp3d-view3d") as T | null) ?? null;
}
