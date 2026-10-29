// The item editor (#13): its bundle loads only when an editor opens it.

import type * as ItemsBundle from "./items/entry.ts";

/** Content hash of the item editor's bundle, set by the build (see build.mjs). */
declare const __FP3D_ITEMS_HASH__: string;

let loading: Promise<typeof ItemsBundle> | undefined;

export function loadItems(): Promise<typeof ItemsBundle> {
  const url = new URL(`./home-3d-items.js?v=${__FP3D_ITEMS_HASH__}`, new URL(import.meta.url)).href;
  loading ??= (import(/* @vite-ignore */ url) as Promise<typeof ItemsBundle>).catch((err) => {
    loading = undefined;
    throw err;
  });
  return loading;
}
