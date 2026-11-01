import { css, unsafeCSS } from "lit";
import { colourResetCss } from "./colour-reset.ts";
import { DARK, HIGH, LIGHT, schemeVars, type Scheme } from "./scheme.ts";

/**
 * Design tokens shared by panel, card and editor. Each colour reads an inherited `--fp3d-s-*` scheme variable with the
 * dark neon value as fallback; a host with the `light` attribute (the viewer under the Day look, #85) sets the light
 * scheme, and every Home 3D part nested in it inherits that.
 */
const key = (k: string) => k.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
const TOKENS = (Object.keys(DARK) as (keyof Scheme)[])
  .filter((k) => k !== "colorScheme")
  .map((k) => `--fp3d-${key(k)}: var(--fp3d-s-${key(k)}, ${DARK[k]});`)
  .join("\n");

export const tokens = css`
  :host {
    ${unsafeCSS(TOKENS)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${unsafeCSS(schemeVars(LIGHT))}
  }
  :host([contrast]) {
    ${unsafeCSS(schemeVars(HIGH))}
  }
`;

/** Segmented buttons, chips and form controls. */
export const controls = css`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  /* a link or a file label drawn as a button centres its text like a real button does (#236) */
  a.fp3d-btn,
  label.fp3d-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-decoration: none;
    line-height: 1.2;
  }
  /* buttons under a hint line or a form get room above them (#236) */
  .fp3d-sub + .fp3d-actions,
  .fp3d-sub + .fp3d-ext-actions {
    margin-top: 12px;
  }
  .fp3d-form + .fp3d-actions {
    margin-top: 12px;
  }
  .fp3d-help .fp3d-btn,
  .fp3d-ext-actions .fp3d-btn {
    padding: 8px 16px;
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  /* a colour picker shows its colour as a full swatch, not a line inside the text field's padding */
  .fp3d-field input[type="color"] {
    padding: 3px;
    height: 36px;
    width: 100%;
    cursor: pointer;
  }
  /* colour per role (#12): a swatch beside the presets; a role following the look shows a faded swatch */
  .fp3d-paint {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
  }
  .fp3d-swatch {
    width: 26px;
    height: 26px;
    padding: 0;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.35);
    cursor: pointer;
  }
  .fp3d-swatch[aria-pressed="true"] {
    border-color: var(--fp3d-accent, #37e0ff);
    box-shadow: 0 0 0 2px var(--fp3d-accent, #37e0ff);
  }
  .fp3d-paint-hex {
    width: 5.5em;
  }
  .fp3d-colour-pick {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 6px;
  }
  .fp3d-colour-swatch {
    display: grid;
    grid-template-columns: 44px auto;
    align-items: center;
  }
  /* a picker with its reset (#230) on a line of its own: the swatch takes the width */
  .fp3d-colour-row {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .fp3d-colour-row input[type="color"] {
    flex: 1;
  }
  /* its material (#40) on a line of its own under the colour */
  .fp3d-colour-pick .fp3d-material {
    grid-column: 1 / -1;
  }
  .fp3d-field input[type="color"].fp3d-colour-unset {
    opacity: 0.35;
  }
  .fp3d-field select option,
  select option {
    /* the opened list keeps the dark look (else light text on the browser's white list) */
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-text);
  }
  /* a list to edit line by line (a module's sentences): ✕ per line, a field to add one */
  .fp3d-lines {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-lines-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 4px 4px 9px;
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    font-size: 14px;
    color: var(--fp3d-text);
  }
  .fp3d-lines-row span {
    flex: 1;
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .fp3d-lines-row button {
    border: 0;
    background: none;
    color: var(--fp3d-muted);
    font: inherit;
    cursor: pointer;
    padding: 2px 8px;
    border-radius: 6px;
  }
  .fp3d-lines-row button:hover:not(:disabled) {
    color: var(--fp3d-danger);
  }
  .fp3d-lines-add {
    display: flex;
    gap: 6px;
  }
  .fp3d-lines-add input {
    flex: 1;
    min-width: 0;
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
  }
  /* fingers need 44 px (#181): buttons, chips, fields and swatches */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn,
    .fp3d-field select,
    .fp3d-field input:not([type="checkbox"]):not([type="radio"]):not([type="range"]) {
      min-height: 44px;
    }
    .fp3d-seg button,
    .fp3d-btn {
      min-width: 44px;
    }
    .fp3d-swatch {
      width: 44px;
      height: 44px;
    }
  }
  ${colourResetCss}
`;
