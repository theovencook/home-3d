// The plan drawing: grid, rooms, walls, corners, drafts, snap guides and the hint bar.
// Part of the editor's styles (fp3d-editor static styles, #202): the slices are applied in the order editor.ts lists them.

import { css } from "lit";

export const planStyles = css`
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-place-ghost {
        fill: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 5 4;
        pointer-events: none;
      }
      .fp3d-place-ghost-wall {
        stroke-dasharray: none;
        fill: color-mix(in srgb, var(--fp3d-accent) 30%, transparent);
      }
      .fp3d-place-label {
        font-size: 11px;
        fill: var(--fp3d-accent);
        paint-order: stroke;
        stroke: var(--fp3d-card, #fff);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-placing {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 8px 0;
        padding: 8px 10px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 10px;
      }
      .fp3d-placing span {
        flex: 1 1 100%;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-kerb line {
        stroke: var(--fp3d-accent, #37e0ff);
        stroke-width: 2;
        stroke-dasharray: 6 5;
      }
      .fp3d-kerb circle {
        fill: none;
        stroke: var(--fp3d-accent, #37e0ff);
        stroke-width: 2.5;
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      /* snap guides while placing or dragging (#143) */
      .fp3d-snapline {
        stroke: var(--fp3d-accent);
        stroke-width: 1;
        stroke-dasharray: 4 3;
      }
      .fp3d-snaplabel {
        fill: var(--fp3d-accent);
        font: 600 11px var(--fp3d-font);
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      /* the hint bar (#96): a readable strip on its own background, not a faint line on the grid */
      .fp3d-hint {
        position: absolute;
        left: 12px;
        bottom: 10px;
        max-width: calc(100% - 24px);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 8px 7px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        font-size: 14px;
        line-height: 1.35;
        color: var(--fp3d-text);
        pointer-events: none;
      }
      .fp3d-hint-first {
        border-color: var(--fp3d-accent);
        font-weight: 600;
      }
      .fp3d-hint-help {
        flex: none;
        pointer-events: auto;
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        color: var(--fp3d-muted);
        background: none;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 3px 10px;
        cursor: pointer;
      }
      .fp3d-hint-help:hover {
        color: var(--fp3d-text);
        border-color: var(--fp3d-accent);
      }
`;
