// Loads the editor bundle only when the editor is opened (it defines <fp3d-editor>).
import { lazyBundle } from "./lazy-bundle.ts";

/** Content hash of the editor bundle, set by the build (see build.mjs). */
declare const __FP3D_EDITOR_HASH__: string;

export const loadEditor = lazyBundle("home-3d-editor", () => __FP3D_EDITOR_HASH__);
