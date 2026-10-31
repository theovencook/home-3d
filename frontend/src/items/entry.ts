// The item editor's bundle (#13): loaded only when an editor opens the item editor.

import { ItemEditor, type ItemEditorOptions } from "./item-editor.ts";

export type { ItemEditorOptions };

/** Open the item editor over the page; `t` is the panel's translate (the item editor's ie_ texts are in the main table and the language packs). */
export function openItemEditor(options: ItemEditorOptions): void {
  document.querySelector("fp3d-item-editor")?.remove();
  const el = document.createElement("fp3d-item-editor") as ItemEditor;
  el.options = options;
  document.body.append(el);
}
