// The item editor's bundle (#13): loaded only when an editor opens the item editor.

import type { HomeAssistant } from "../types.ts";
import { ItemEditor, type ItemEditorOptions, type Translate } from "./item-editor.ts";
import { itemTexts } from "./texts.ts";

export type { ItemEditorOptions };

/** Open the item editor over the page; `t` is the panel's translate (the editor adds its own texts). */
export function openItemEditor(options: ItemEditorOptions): void {
  document.querySelector("fp3d-item-editor")?.remove();
  const el = document.createElement("fp3d-item-editor") as ItemEditor;
  const hass = (): HomeAssistant => options.hassSource?.() ?? options.hass;
  const t: Translate = itemTexts(options.t, () => hass().language);
  el.options = { ...options, t };
  document.body.append(el);
}
