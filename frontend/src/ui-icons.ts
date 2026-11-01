// Toolbar icons drawn as inline SVG (24 x 24, stroke = currentColor), so they look the same on every device. A font
// glyph such as a hollow square or a half-filled box shows as a plain box where the device's fonts lack it (#221).

import { svg, type TemplateResult } from "lit";

export type UiIcon = "split-off" | "split-on" | "panel-left" | "panel-right" | "holo" | "flow" | "undo" | "redo" | "expand";

const PATHS: Record<UiIcon, TemplateResult> = {
  // a plan with a second pane beside it: outline, divider, the 3D pane filled when it is open
  "split-off": svg`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 5v14"/>`,
  "split-on": svg`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 5v14"/><path d="M12 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7z" fill="currentColor" stroke="none" opacity=".45"/>`,
  "panel-left": svg`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 5v14"/><path d="M5 5h5v14H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" fill="currentColor" stroke="none" opacity=".45"/>`,
  "panel-right": svg`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M14 5v14"/><path d="M14 5h5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5z" fill="currentColor" stroke="none" opacity=".45"/>`,
  // a hologram card: a card with a base line under it
  holo: svg`<rect x="5" y="3" width="14" height="12" rx="2"/><path d="M8 7h8M8 11h5M3 19h18M7 21.5h10"/>`,
  flow: svg`<path d="M13 2 5 13h6l-1 9 8-11h-6z"/>`,
  undo: svg`<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>`,
  redo: svg`<path d="m15 14 5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h3"/>`,
  expand: svg`<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`,
};

/** A toolbar icon: sized by the font (1.15em), decorative (the button carries the label). */
export function uiIcon(name: UiIcon): TemplateResult {
  return svg`<svg class="fp3d-ui-icon" viewBox="0 0 24 24" width="1.15em" height="1.15em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" style="vertical-align:-0.2em">${PATHS[name]}</svg>`;
}
