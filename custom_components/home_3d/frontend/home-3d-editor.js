import{$ as Kn,Aa as Yl,Ca as Xl,Da as Ql,E as Sl,Ea as Jl,F as Fl,Fa as Zl,Ha as td,K as Pl,L as Il,M as Rl,N as zl,O as Ho,Oa as sd,P as is,Q as Bn,R as ss,Sa as od,Ta as rd,Ua as ad,Va as Vo,Wa as ld,X as Ol,Xa as Co,Y as os,Z as Al,_ as Tl,aa as Ll,b as ul,ba as Hl,c as hl,ca as Vl,da as Cl,e as fl,f as ml,g as ee,ga as Dl,h as Rt,ha as Wl,i as gl,ia as Nl,j as bl,ja as jl,k as zt,ka as Bl,l as Lo,la as Kl,m as _l,ma as Ve,n as yl,na as rs,o as vl,oa as Ul,pa as Gl,q as $l,qa as Un,r as xl,ra as hi,s as Nn,t as es,u as ns,v as jn,va as ql,w as wl,x as kl,y as Ml,z as El}from"./home-3d-editor-chunk-VYDSTFCK.js";import{$ as Ca,A as Lt,Aa as il,B as qi,Ba as sl,C as Ht,Ca as ol,D as Ma,Da as rl,E as Ea,Ea as al,F as Sa,Fa as Pe,G as Fa,Ga as ll,H as ci,Ha as Ji,I as Pa,Ia as dl,Ja as cl,Ka as Zi,La as ui,Ma as ts,N as Yi,Na as j,O as Xi,Oa as Vt,P as Ia,Pa as yt,Q as zo,Qa as jt,R as Qi,Ra as Le,S as Ra,Sa as ft,T as za,Ta as Wt,U as Oo,Ua as K,V as Oa,Va as He,W as Aa,Wa as To,X as Ta,Xa as Dn,Y as La,Ya as Wn,Z as Ha,Za as pl,_ as Va,a as Ue,aa as Ln,ab as ed,ba as Da,bb as nd,c as ba,ca as Wa,cb as id,d as _a,da as Na,ea as ja,f as ya,fa as Ba,g as Po,ga as Ka,h as Io,ha as Ua,i as va,ia as Ga,j as Ro,ja as qa,k as Zt,ka as pi,l as $e,la as Ya,m as Se,ma as Ft,n as $a,na as Xa,o as xa,oa as Hn,p as te,pa as de,q as Gi,qa as Qa,r as bt,ra as Ja,s as wa,sa as Za,t as ka,ta as tl,u as Bt,ua as xt,v as Tt,va as Ao,w as _t,wa as Vn,x as qe,xa as el,y as Fe,ya as Cn,z as Ye,za as nl}from"./home-3d-editor-chunk-UCKHY45X.js";import{b as $t,c as m,d as I,e as Ui,f as v,h as Ge}from"./home-3d-editor-chunk-EUFTLNYS.js";var dd=$t`
      :host {
        display: block;
        height: 100%;
      }
      /* a house-wide setting's way to the Settings page (#139), in a tool panel or an item form */
      .fp3d-settings-link {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 4px 10px;
        width: 100%;
        min-height: 40px;
        margin: 6px 0;
        padding: 8px 12px;
        border: 1px dashed var(--fp3d-line);
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        font: inherit;
        font-size: 13px;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-settings-link b {
        color: var(--fp3d-accent);
        font-weight: 600;
        white-space: nowrap;
      }
      .fp3d-settings-link:hover {
        border-color: var(--fp3d-accent);
      }
      /* a part on the Settings page (#139): its row already names it */
      .fp3d-embed summary,
      .fp3d-embed > .fp3d-wide > h4.fp3d-lib-head:first-child,
      .fp3d-embed > .fp3d-wide > h4.fp3d-lib-head:first-child + .fp3d-sub,
      .fp3d-embed > section > h3:first-child,
      .fp3d-embed > section > h3:first-child + .fp3d-sub,
      .fp3d-embed > h4:first-child,
      .fp3d-embed > h4:first-child + .fp3d-sub {
        display: none;
      }
      .fp3d-embed details.fp3d-section {
        border: 0;
        padding: 0;
        margin: 0;
        background: none;
      }
      /* the toolbar is one row across the plan and the sidebar (#249); the plan and the sidebar share the row below */
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr var(--fp3d-side-w, 320px);
        grid-template-rows: auto minmax(0, 1fr);
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor > .fp3d-toolbar {
        grid-column: 1 / -1;
      }
      .fp3d-editor:has(> .fp3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .fp3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .fp3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .fp3d-strip-hot {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(var(--fp3d-side-w, 340px), 60%);
        /* open over the 3D pane, under the toolbar row (#249: More and Fit stay in reach) */
        top: var(--fp3d-toolbar-h, 52px);
        z-index: 30;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .fp3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .fp3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-3d-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: auto minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        /* nothing of the plan column reaches over the sidebar (its menus still hang down) */
        overflow-x: clip;
        display: grid;
        grid-template-rows: minmax(0, 1fr);
        /* the column never grows with a wide toolbar (that would push the plan under the sidebar) */
        grid-template-columns: minmax(0, 1fr);
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        position: relative;
        /* its menus open over the plan below */
        z-index: 20;
        display: flex;
        /* one row; only a long tool name on a compact screen may push the end onto a second */
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        min-width: 0;
        min-height: var(--fp3d-toolbar-h, 52px);
        box-sizing: border-box;
        padding: 6px 12px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
      }
      /* the drawn toolbar (#249): flat buttons with an icon and a label, hairlines between the groups; the tool in use
         has a light tint, not a fill; Fit, 3D beside and More are outlined at the end of the row */
      .fp3d-toolbar > .fp3d-seg {
        background: none;
        box-shadow: none;
        padding: 0;
        flex: none;
      }
      .fp3d-toolbar > .fp3d-seg > button,
      .fp3d-toolbar .fp3d-menu-wrap > button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border-radius: var(--fp3d-radius-control, 6px);
        color: var(--fp3d-text);
        font-weight: 600;
        padding: 6px 10px;
      }
      .fp3d-toolbar > .fp3d-seg > button[aria-pressed="true"],
      .fp3d-toolbar .fp3d-menu-wrap > button[aria-pressed="true"] {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        color: var(--fp3d-accent);
      }
      .fp3d-toolbar > .fp3d-seg > button:hover:not(:disabled),
      .fp3d-toolbar .fp3d-menu-wrap > button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 8%, transparent);
      }
      .fp3d-seg-views > button,
      .fp3d-seg-more .fp3d-menu-wrap > button,
      .fp3d-seg-floor .fp3d-menu-wrap > button {
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-seg-more .fp3d-menu-wrap > button[aria-expanded="true"] {
        border-color: var(--fp3d-accent);
      }
      .fp3d-seg-views {
        gap: 6px;
      }
      .fp3d-tb-sep {
        flex: none;
        width: 1px;
        height: 26px;
        background: var(--fp3d-line);
      }
      .fp3d-tb-grow {
        flex: 1 1 0;
      }
      /* 3D beside: in the row on wide screens, in More below that (#249) */
      .fp3d-more-split {
        display: none !important;
      }
      @media (max-width: 1024px) {
        .fp3d-toolbar {
          gap: 3px;
          padding: 6px 6px;
        }
        .fp3d-toolbar > .fp3d-seg > button,
        .fp3d-toolbar .fp3d-menu-wrap > button {
          padding: 5px 8px;
          font-size: 13px;
        }
        .fp3d-seg-undo .fp3d-tool-word,
        .fp3d-toolbar .fp3d-menu-label,
        .fp3d-tb-sep {
          display: none;
        }
        .fp3d-split-btn {
          display: none !important;
        }
        .fp3d-more-split {
          display: flex !important;
        }
      }
      /* the toolbar row, while it is drawn below the compact width, scrolls rather than pushing the page wider */
      @media (min-width: 601px) and (max-width: 1024px) {
        .fp3d-toolbar .fp3d-seg-tools > button .fp3d-ui-icon,
        .fp3d-toolbar .fp3d-seg-tools .fp3d-menu-wrap > button .fp3d-ui-icon {
          display: none;
        }
      }
      /* "Settings for this home" on the floor's page (#249): the old ⚙ menu's places, each a link */
      .fp3d-home-link-list {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
      }
      .fp3d-home-link {
        min-height: 32px;
      }
      .fp3d-pick-tip {
        position: absolute;
        z-index: 5;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 8px 12px;
        border-radius: 10px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
        font-size: 13px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.45), 0 0 16px rgba(55, 224, 255, 0.45);
        cursor: pointer;
        animation: fp3d-tip-in 0.18s ease-out;
      }
      .fp3d-pick-tip::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -6px;
        margin-left: -6px;
        border: 6px solid transparent;
        border-top: 0;
        border-bottom-color: var(--fp3d-accent);
      }
      @keyframes fp3d-tip-in {
        from {
          opacity: 0;
          transform: translate(-50%, -4px);
        }
      }
      /* the tool row scrolls sideways when it is wider than the plan (it must never push into the sidebar) */
      .fp3d-toolbar > .fp3d-seg {
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .fp3d-toolbar > .fp3d-seg::-webkit-scrollbar {
        display: none;
      }
      .fp3d-toolbar > .fp3d-seg > button {
        flex: none;
      }
      .fp3d-warn {
        color: var(--fp3d-warm);
        font-size: 12.5px;
      }
      .fp3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-picture-group > select {
        min-width: 0;
      }
      .fp3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--fp3d-line) 40%, transparent);
      }
      .fp3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .fp3d-picture-row > .fp3d-sub,
      .fp3d-picture-row > .fp3d-picture-camera {
        grid-column: 1 / -1;
      }
      .fp3d-picture-row.fp3d-rule-hit {
        outline: 1px solid var(--fp3d-accent);
      }
      .fp3d-rule-now {
        grid-column: 1 / -1;
      }
      .fp3d-rule-hit {
        color: var(--fp3d-accent);
      }
      .fp3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        cursor: pointer;
      }
      .fp3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .fp3d-picture-reuse-btn:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .fp3d-picture-pick {
        justify-self: start;
      }
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .fp3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-stage-pair > .fp3d-canvas-wrap {
        flex: 1 1 var(--fp3d-split, 55%);
        min-width: 0;
      }
      .fp3d-split > .fp3d-canvas-wrap {
        flex: 0 0 var(--fp3d-split, 55%);
      }
      .fp3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--fp3d-line);
        touch-action: none;
      }
      .fp3d-split-handle:hover {
        background: var(--fp3d-accent);
      }
      .fp3d-editor-3d {
        position: relative;
        overflow: hidden;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--fp3d-line);
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-editor-3d fp3d-view3d {
        display: block;
        height: 100%;
      }
      /* folds the 3D pane away (the choice is remembered like the toolbar's "3D beside", #91) */
      .fp3d-3d-fold {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 3;
        min-height: 32px;
        padding: 4px 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: var(--fp3d-chrome);
        color: inherit;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }
      .fp3d-3d-fold:hover,
      .fp3d-3d-fold:focus-visible {
        border-color: var(--fp3d-accent);
      }
      .fp3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .fp3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger, #ff6b7a);
      }
      .fp3d-narrow .fp3d-stage-pair.fp3d-split {
        flex-direction: column;
      }
      .fp3d-narrow .fp3d-split > .fp3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .fp3d-narrow .fp3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
`;var cd=$t`
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
      /* empty plan can be dragged to pan it (#233) */
      svg.fp3d-tool-select,
      svg.fp3d-tool-furniture,
      svg.fp3d-tool-roof,
      svg.fp3d-tool-energy {
        cursor: grab;
      }
      svg.fp3d-plan.fp3d-panning,
      svg.fp3d-plan.fp3d-panning * {
        cursor: grabbing !important;
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
      /* zoom and fit buttons on the plan (#234): right edge, half way down, clear of the hint bar */
      .fp3d-nav {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        display: flex;
        flex-direction: column;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      .fp3d-nav-btn {
        display: grid;
        place-items: center;
        width: 44px;
        height: 44px;
        padding: 0;
        border: 0;
        border-bottom: 1px solid var(--fp3d-line);
        background: none;
        color: var(--fp3d-text);
        font: 600 20px/1 var(--fp3d-font);
        cursor: pointer;
        touch-action: manipulation;
      }
      .fp3d-nav-btn:last-child {
        border-bottom: 0;
      }
      .fp3d-nav-btn:hover,
      .fp3d-nav-btn:focus-visible {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
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
      /* the empty home's checklist (#193): where the hint pill sits, bigger, with the next step as the main button */
      .fp3d-start {
        position: absolute;
        left: 12px;
        bottom: 10px;
        max-width: min(420px, calc(100% - 24px));
        box-sizing: border-box;
        padding: 14px 16px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        color: var(--fp3d-text);
      }
      .fp3d-start h3 {
        margin: 0 0 8px;
        font-size: 15px;
      }
      .fp3d-start ol {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
      }
      .fp3d-start li {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
      }
      .fp3d-start-text {
        flex: 1;
      }
      .fp3d-start-mark {
        flex: none;
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        border: 1.5px solid var(--fp3d-line);
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-size: 12px;
        line-height: 1;
      }
      .fp3d-start-done .fp3d-start-mark {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-on-accent, #fff);
      }
      .fp3d-start-done .fp3d-start-text {
        color: var(--fp3d-muted);
        text-decoration: line-through;
      }
      .fp3d-start-or {
        margin: 12px 0 6px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-start-alt {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
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
`;var pd=$t`
      .fp3d-side-grip {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 8px;
        cursor: col-resize;
        touch-action: none;
        z-index: 2;
      }
      .fp3d-side-grip:hover {
        background: linear-gradient(90deg, rgba(55, 224, 255, 0.35), transparent);
      }
      .fp3d-side {
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      /* the grip's containing block; the overlay keeps its absolute position (#658: "position: relative" on
         every side bar made the unpinned bar a third grid cell, which pushed the plan and the 3D pane aside) */
      .fp3d-side:not(.fp3d-side-overlay) {
        position: relative;
        z-index: 7;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      /* align and distribute buttons of the multi-selection panel (#235) */
      .fp3d-align {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-align-head {
        flex: 0 0 100%;
        font-size: 12px;
        font-weight: 600;
        opacity: 0.75;
      }
      .fp3d-align-txt {
        display: none;
      }
      .fp3d-align-btn {
        display: grid;
        place-items: center;
        min-width: 40px;
        min-height: 40px;
        padding: 0;
      }
      @media (pointer: coarse) {
        .fp3d-align-btn {
          flex: 1 1 45%;
          grid-auto-flow: column;
          justify-content: start;
          gap: 8px;
          padding: 0 10px;
          text-align: left;
          font-size: 13px;
        }
        .fp3d-align-txt {
          display: inline;
        }
      }
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check.fp3d-indent {
        padding-left: 22px;
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      /* the background picture while it is edited: a dashed frame and a corner handle */
      .fp3d-bg-frame {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-bg-handle {
        fill: var(--fp3d-accent);
        stroke: #041018;
        stroke-width: 2;
        cursor: nwse-resize;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rack-elev summary {
        cursor: pointer;
        font-size: 13px;
        color: var(--fp3d-muted, #9aa6ba);
        margin: 6px 0;
      }
      /* the rack card's values (#120): one group per device, the value's kind, its entity and state */
      .fp3d-rack-card-group {
        border: 0;
        margin: 4px 0 8px;
        padding: 0;
        display: grid;
        gap: 4px;
      }
      .fp3d-rack-card-group legend {
        padding: 0;
        margin-bottom: 2px;
        font-size: 12px;
        font-weight: 600;
        color: var(--fp3d-text, #e6edf7);
      }
      .fp3d-rack-card-group small {
        opacity: 0.75;
      }
      .fp3d-rack-elev-box {
        max-height: 60vh;
        overflow: auto;
        border-radius: 8px;
      }
      .fp3d-rack-elev-pic {
        position: relative;
        width: fit-content;
        max-width: 100%;
        margin: 0 auto;
      }
      .fp3d-rack-elev-img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      .fp3d-rack-elev-tip {
        position: absolute;
      }
      .fp3d-furn-sym .fp3d-sym-swing {
        stroke-dasharray: 4 3;
        opacity: 0.8;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-wild polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-free-wall {
        cursor: grab;
      }
      .fp3d-vertex-no {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
`;var ud=$t`
      /* the opt-in reports: the exact JSON they send */
      /* the wall view: a room's wall from the front, furniture on it to slide along and up */
      .fp3d-wv-veil {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(3, 6, 12, 0.6);
      }
      .fp3d-wv {
        width: min(1100px, 100%);
        max-height: calc(100vh - 32px);
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        gap: 10px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-wv-head,
      .fp3d-wv-foot {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .fp3d-wv-foot .fp3d-field {
        width: 170px;
      }
      .fp3d-wv-grow {
        flex: 1;
      }
      .fp3d-pipe-end circle:not(.fp3d-hit) {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pipe-end {
        cursor: pointer;
      }
      .fp3d-pool-joint {
        fill: #8a929c;
        stroke: var(--fp3d-bg, #0b1220);
        stroke-width: 1.5;
        pointer-events: none;
      }
      .fp3d-wv-node circle {
        fill: rgba(55, 224, 255, 0.12);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-node text {
        fill: var(--fp3d-accent);
        font-size: 0.055px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-wv-hole-mark circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-dasharray: none;
        stroke-width: 0.02;
      }
      .fp3d-wv-hole-mark text {
        fill: var(--fp3d-warm);
      }
      .fp3d-pc-veil {
        z-index: 70;
      }
      .fp3d-pc {
        width: min(760px, 100%);
        max-height: calc(100vh - 32px);
        overflow: auto;
        display: grid;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-pc-title {
        font-size: 17px;
      }
      .fp3d-pc-name {
        font: inherit;
        font-size: 17px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        min-width: 0;
        flex: 1;
        max-width: 320px;
      }
      .fp3d-pc-body {
        display: grid;
        grid-template-columns: 220px minmax(0, 1fr);
        gap: 14px;
        align-items: start;
      }
      @media (max-width: 640px) {
        .fp3d-pc-body {
          grid-template-columns: 1fr;
        }
      }
      .fp3d-pc-draw {
        width: 100%;
        border-radius: 12px;
        background: rgba(120, 170, 255, 0.05);
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-body-shape {
        fill: #2a313a;
        stroke: #8a929c;
        stroke-width: 2;
      }
      .fp3d-pc-fan {
        fill: none;
        stroke: #8a929c;
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-wall {
        fill: rgba(120, 170, 255, 0.18);
        stroke: var(--fp3d-line);
      }
      .fp3d-pc-side {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
      }
      .fp3d-pc-stub line {
        stroke: #8a929c;
        stroke-width: 10;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-stub circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pc-stub {
        cursor: pointer;
      }
      .fp3d-pc-stub.fp3d-on line {
        stroke: #8a929c;
        stroke-dasharray: none;
      }
      .fp3d-pc-stub.fp3d-on circle {
        fill: var(--fp3d-accent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      .fp3d-pc-label {
        fill: var(--fp3d-text, #dfe7f5);
        font-size: 11px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-pc-rows {
        display: grid;
        gap: 8px;
      }
      .fp3d-pc-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px dashed var(--fp3d-line);
      }
      .fp3d-pc-row.fp3d-on {
        border-style: solid;
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-conns,
      .fp3d-pc-join {
        display: grid;
        gap: 6px;
      }
      .fp3d-pc-conn {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-tools {
        display: inline-flex;
        gap: 6px;
        margin-left: auto;
      }
      .fp3d-pc-chain {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-arrow {
        color: var(--fp3d-accent);
        font-weight: 800;
      }
      .fp3d-pc-tile {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.05);
        color: var(--fp3d-text);
      }
      button.fp3d-pc-tile {
        cursor: pointer;
      }
      .fp3d-pc-tile i {
        font-style: normal;
        opacity: 0.6;
        margin-left: 4px;
      }
      .fp3d-pc-start {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-pc-stop {
        border-color: #2f8cff;
      }
      .fp3d-pc-end {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-next {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-steps {
        display: grid;
        gap: 6px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-target {
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-join {
        padding: 10px;
        border-radius: 10px;
        background: rgba(120, 170, 255, 0.05);
      }
      .fp3d-pc-step {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-top: 4px;
      }
      .fp3d-pc-group {
        display: grid;
        gap: 4px;
      }
      .fp3d-pc-glabel {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-picks {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-pc-pick {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-pc-pick:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pc-pick.fp3d-on {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-hole {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        font-size: 13px;
      }
      .fp3d-pc-hole > span {
        min-width: 120px;
      }
      .fp3d-pc-via {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-open {
        border-style: dashed;
      }
      .fp3d-joint-name {
        flex: 1;
        min-width: 90px;
        font: inherit;
        font-size: 13px;
        padding: 3px 6px;
        border-radius: 6px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
      }
      .fp3d-ports {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 3px;
      }
      .fp3d-ports i {
        font-style: normal;
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-line);
        color: var(--fp3d-muted);
      }
      .fp3d-ports i.fp3d-on {
        border-style: solid;
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 4px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        padding: 3px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-accent);
        background: transparent;
        color: var(--fp3d-accent);
        cursor: pointer;
      }
      .fp3d-wv-node {
        pointer-events: none;
      }
      .fp3d-wv-joint {
        pointer-events: auto;
        cursor: move;
      }
      .fp3d-wv-run line {
        stroke: #8a929c;
        stroke-width: 0.05;
        stroke-linecap: round;
        cursor: pointer;
      }
      .fp3d-wv-run line.fp3d-wv-under {
        stroke: #5a616b;
        stroke-dasharray: 0.06 0.05;
      }
      .fp3d-wv-run-sel line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-runpt {
        fill: var(--fp3d-bg, #0b1220);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        cursor: move;
      }
      .fp3d-wv-runpt.fp3d-on {
        fill: var(--fp3d-accent);
      }
      .fp3d-wv-fitmode .fp3d-wv-run line {
        cursor: copy;
        stroke-width: 0.05 !important;
      }
      .fp3d-wv-fitmode .fp3d-wv-run line:hover {
        stroke: #ffb547 !important;
      }
      .fp3d-tech-step {
        border: 1px solid #ffb547;
        background: rgba(255, 181, 71, 0.1);
        border-radius: 10px;
        padding: 8px 10px;
        font-size: 12.5px;
        line-height: 1.35;
      }
      .fp3d-tech-step b {
        display: block;
        color: #ffb547;
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 2px;
      }
      .fp3d-tech-step.fp3d-done {
        border-color: #4dff9a;
        background: rgba(77, 255, 154, 0.08);
      }
      .fp3d-tech-step.fp3d-done b {
        color: #4dff9a;
      }
      .fp3d-wv-dry line {
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-erase {
        cursor: not-allowed;
      }
      .fp3d-wv-erase .fp3d-wv-run:hover line,
      .fp3d-wv-erase .fp3d-wv-valve:hover circle,
      .fp3d-wv-erase .fp3d-wv-sight:hover,
      .fp3d-wv-erase .fp3d-wv-joint:hover circle {
        stroke: #ff4d6d;
      }
      .fp3d-tech-step.fp3d-tech-erasing {
        border-color: #ff4d6d;
        background: rgba(255, 77, 109, 0.12);
      }
      .fp3d-tech-undo {
        justify-self: start;
      }
      .fp3d-tech-kit .fp3d-tech-pen {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .fp3d-tech-kit .fp3d-tech-pen button {
        display: grid;
        justify-items: center;
        gap: 2px;
        padding: 6px 2px;
        font-size: 0.82em;
        white-space: nowrap;
      }
      .fp3d-tech-feed {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .fp3d-tech-feed i {
        font-style: normal;
      }
      .fp3d-tech-feed small {
        margin-left: auto;
        color: #4dff9a;
      }
      .fp3d-tech-feed.fp3d-on {
        opacity: 0.75;
      }
      .fp3d-tech-ok {
        color: #4dff9a;
        font-weight: 600;
      }
      .fp3d-tech-issues {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-wv-end {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.02 0.015;
      }
      .fp3d-wv-valve circle {
        fill: #3c4148;
        stroke: #2f8cff;
        stroke-width: 0.012;
        cursor: grab;
      }
      .fp3d-wv-valve line {
        stroke: #2f8cff;
        stroke-width: 0.025;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fp3d-wv-shut circle {
        stroke: #ff5a6e;
      }
      .fp3d-wv-sight {
        fill: rgba(140, 220, 255, 0.55);
        stroke: #4a4f56;
        stroke-width: 0.012;
        cursor: pointer;
      }
      .fp3d-wv-stroke {
        stroke-dasharray: 0.08 0.05;
        opacity: 0.55;
      }
      .fp3d-tech-ask {
        display: grid;
        gap: 4px;
        padding: 8px;
        margin-bottom: 6px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
        background: rgba(91, 124, 255, 0.08);
      }
      .fp3d-tech-ask b {
        font-size: 12.5px;
      }
      .fp3d-wv-draft {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.05;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-wv-rubber {
        stroke-dasharray: 0.05 0.04;
        opacity: 0.5;
      }
      .fp3d-wv-drawing {
        cursor: crosshair;
      }
      .fp3d-wv-drawing .fp3d-wv-item {
        pointer-events: none;
      }
      .fp3d-wv-svg {
        width: 100%;
        height: min(62vh, 560px);
        touch-action: none;
        user-select: none;
        font-family: var(--fp3d-font);
      }
      .fp3d-wv-wall {
        fill: rgba(120, 170, 255, 0.06);
        stroke: var(--fp3d-soft);
        stroke-width: 0.015;
      }
      .fp3d-wv-grid {
        stroke: var(--fp3d-line);
        stroke-width: 0.006;
      }
      .fp3d-wv-scale {
        fill: var(--fp3d-muted);
        font-size: 0.09px;
        text-anchor: end;
      }
      .fp3d-wv-floor {
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-hole {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-muted);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-window {
        fill: rgba(55, 224, 255, 0.12);
      }
      .fp3d-wv-item {
        cursor: grab;
      }
      .fp3d-wv-item rect {
        fill: rgba(91, 124, 255, 0.28);
        stroke: var(--fp3d-soft);
        stroke-width: 0.012;
      }
      .fp3d-wv-item text {
        fill: var(--fp3d-text);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-open {
        width: 100%;
        justify-content: center;
        margin: 2px 0 10px;
      }
      .fp3d-wv-turn {
        display: inline-flex;
        align-items: end;
        gap: 6px;
      }
      .fp3d-wv-turn .fp3d-field {
        width: 76px;
      }
      .fp3d-wv-lift {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        margin: -46px 0 0 -22px;
        display: grid;
        justify-items: center;
        gap: 2px;
        cursor: ns-resize;
        touch-action: none;
        user-select: none;
      }
      .fp3d-wv-lift[hidden] {
        display: none;
      }
      .fp3d-wv-lift span {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 24px;
        font-weight: 800;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.55);
      }
      .fp3d-wv-lift b {
        font-size: 12px;
        color: var(--fp3d-warm);
        background: rgba(7, 11, 20, 0.85);
        padding: 1px 6px;
        border-radius: 8px;
      }
      .fp3d-wv-3d {
        display: block;
        width: 100%;
        height: min(62vh, 560px);
        border-radius: 12px;
        overflow: hidden;
      }
      .fp3d-wv-pic rect {
        fill: transparent;
        stroke: transparent;
      }
      .fp3d-wv-pic:hover rect {
        stroke: var(--fp3d-soft);
      }
      .fp3d-wv-body {
        display: flex;
        gap: 8px;
        min-height: 0;
      }
      .fp3d-wv-kit {
        flex: none;
        width: 236px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        overflow-y: auto;
        max-height: min(62vh, 560px);
      }
      .fp3d-wv-kit h4 {
        margin: 4px 0 0;
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-kit .fp3d-btn {
        justify-content: flex-start;
        text-align: left;
      }
      .fp3d-wv-cats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
      }
      .fp3d-wv-cat {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        line-height: 1.15;
      }
      .fp3d-wv-cat span {
        font-size: 15px;
        width: 18px;
        text-align: center;
        flex: none;
      }
      .fp3d-wv-cat.fp3d-on {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.14);
        color: #fff;
      }
      .fp3d-wv-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-wv-tile {
        display: grid;
        grid-template-rows: auto auto auto;
        justify-items: center;
        gap: 2px;
        padding: 6px 4px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        cursor: pointer;
        text-align: center;
      }
      .fp3d-wv-tile:hover {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.08);
      }
      .fp3d-wv-tile-pic {
        width: 72px;
        height: 60px;
        display: grid;
        place-items: center;
      }
      .fp3d-wv-tile-pic img {
        max-width: 72px;
        max-height: 60px;
      }
      .fp3d-wv-tile-pic i {
        width: 36px;
        height: 28px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-muted);
        opacity: 0.4;
      }
      .fp3d-wv-tile-name {
        font-size: 11.5px;
        font-weight: 600;
        line-height: 1.15;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .fp3d-wv-tile small {
        font-size: 10.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-tile small.fp3d-wv-fit {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-kit .fp3d-search {
        width: 100%;
        box-sizing: border-box;
      }
      .fp3d-wv-kit .fp3d-wv-pick {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        height: auto;
        min-height: 32px;
        line-height: 1.2;
        font-size: 12.5px;
      }
      .fp3d-wv-pick small {
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-wv-gapnote {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-setframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.05 0.03;
        pointer-events: none;
      }
      .fp3d-wv-setblock rect {
        stroke: #ffb547;
      }
      .fp3d-wv-setframe text {
        fill: var(--fp3d-accent);
        pointer-events: none;
      }
      .fp3d-wv-setblock text {
        fill: #ffb547;
      }
      .fp3d-wv-gap rect {
        fill: rgba(55, 224, 255, 0.1);
        stroke: var(--fp3d-accent);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
        pointer-events: none;
      }
      .fp3d-wv-gap text {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-handle {
        fill: var(--fp3d-accent);
        stroke: #06101c;
        stroke-width: 0.006;
        cursor: ew-resize;
      }
      .fp3d-wv-handle.fp3d-wv-ns {
        cursor: ns-resize;
      }
      .fp3d-wv-size {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-wv-fixnote {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-pool-depth {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pool-depth input {
        width: 58px;
        padding: 3px 5px;
      }
      .fp3d-wv-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 0.008;
        stroke-dasharray: 0.03 0.02;
        pointer-events: none;
      }
      @media (max-width: 700px) {
        .fp3d-wv-body {
          flex-direction: column;
        }
        .fp3d-wv-kit {
          width: auto;
          flex-direction: row;
          flex-wrap: wrap;
          max-height: none;
        }
      }
      .fp3d-wv-stage {
        flex: 1;
        min-width: 0;
        position: relative;
        min-height: 0;
        padding: 0 60px;
      }
`;var hd=$t`
      /* a group with a menu lets it hang out below (the others scroll sideways on a narrow screen) */
      .fp3d-seg.fp3d-seg-menu {
        overflow: visible;
        /* too narrow for a group: its buttons wrap (they never reach over the sidebar) */
        flex-wrap: wrap;
        max-width: 100%;
      }
      .fp3d-seg > button.fp3d-undo .fp3d-ui-icon {
        font-size: 18px;
      }
      .fp3d-menu-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-voice-list {
        margin: 0 0 8px;
        padding-left: 18px;
        font-size: 13px;
        color: var(--fp3d-muted);
        columns: 2;
        column-gap: 18px;
      }
      .fp3d-voice-list li {
        break-inside: avoid;
        margin: 2px 0;
      }
      .fp3d-menu-right {
        right: 0;
        left: auto;
      }
      .fp3d-help-overlay h4 {
        margin: 14px 0 6px;
        font-size: 13px;
        color: var(--fp3d-muted);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .fp3d-help-keys {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 6px 14px;
        margin: 0;
        align-items: baseline;
      }
      .fp3d-help-keys dt {
        white-space: nowrap;
        color: var(--fp3d-muted);
      }
      .fp3d-help-keys dd {
        margin: 0;
      }
      .fp3d-help-overlay kbd {
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        color: var(--fp3d-text);
        padding: 1px 6px;
        border: 1px solid var(--fp3d-line);
        border-bottom-width: 2px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-help-legend {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
      }
      .fp3d-help-legend li {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .fp3d-help-mark {
        flex: none;
        width: 26px;
        height: 26px;
        fill: none;
        stroke-width: 1.6;
      }
      .fp3d-help-swing,
      .fp3d-help-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-help-sel {
        fill: rgba(55, 224, 255, 0.25);
        stroke: var(--fp3d-accent);
      }
      .fp3d-dialog-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-dialog {
        width: min(640px, 100%);
        max-height: calc(100% - 16px);
        overflow: auto;
        padding: 14px 18px 18px;
        border-radius: 18px;
        border: 1px solid var(--fp3d-accent, #22d3ee);
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(34, 211, 238, 0.2);
        outline: none;
      }
      .fp3d-dialog-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 6px;
      }
      .fp3d-dialog-head h3 {
        margin: 0;
      }
      .fp3d-dialog details.fp3d-section > summary {
        display: none;
      }
      .fp3d-dialog details.fp3d-section {
        border: 0;
        padding: 0;
        margin: 0;
      }
      .fp3d-narrow .fp3d-dialog-veil {
        padding: 0;
      }
      .fp3d-narrow .fp3d-dialog {
        width: 100%;
        max-height: 100%;
        border-radius: 0;
      }
      .fp3d-menu-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        z-index: 30;
        min-width: 230px;
        max-height: 70vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid, #0d1628);
        box-shadow: var(--fp3d-shadow);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-right {
        left: auto;
        right: 0;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        padding: 9px 12px;
        border-radius: 10px;
        color: var(--fp3d-text);
        background: none;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item:hover {
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-on {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-menu-icon {
        width: 22px;
        text-align: center;
      }
      .fp3d-menu-more {
        margin-left: auto;
        color: var(--fp3d-muted);
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-menu-label {
        color: var(--fp3d-muted);
        font-weight: 500;
      }
      .fp3d-menu-sep {
        height: 1px;
        margin: 4px 6px;
        background: var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-sub {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 2px 8px 8px 16px;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-chip {
        min-height: 30px;
        padding: 5px 11px;
        font-size: 0.92em;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-menu-on {
        background: var(--fp3d-primary);
        color: var(--fp3d-primary-text);
      }
`;var fd=$t`
      .fp3d-wv-zoom {
        position: absolute;
        right: 64px;
        bottom: 6px;
        z-index: 1;
        display: flex;
        gap: 4px;
      }
      .fp3d-wv-zoom .fp3d-btn {
        min-width: 34px;
        padding: 4px 8px;
      }
      .fp3d-wv-side {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        display: grid;
        justify-items: center;
        gap: 2px;
        width: 54px;
        padding: 10px 0;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: rgba(14, 21, 38, 0.82);
        color: var(--fp3d-accent);
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
      }
      .fp3d-wv-side small {
        font-size: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-side:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-wv-left {
        left: 0;
      }
      .fp3d-wv-right {
        right: 0;
      }
      .fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.3);
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-pic.fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-dims line {
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-dims text {
        fill: var(--fp3d-warm);
        font-size: 0.11px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.035px;
      }
      .fp3d-wv-item text,
      .fp3d-wv-hole-label {
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.025px;
      }
      .fp3d-wv-hole-label {
        fill: var(--fp3d-muted);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-dims text.fp3d-wv-up {
        text-anchor: start;
      }
      .fp3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--fp3d-accent) 6%, transparent);
      }
      .fp3d-roof-floors {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 0 0 10px;
      }
      .fp3d-edge-box > summary {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 4px 10px;
        cursor: pointer;
      }
      .fp3d-edge-box > summary h4 {
        display: inline;
      }
      .fp3d-edge-box[open] > summary {
        margin-bottom: 6px;
      }
      .fp3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--fp3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
         a split point gets a line of its own below */
      .fp3d-edge-height {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-height > span:first-child {
        flex: 1 1 84px;
        min-width: 84px;
      }
      .fp3d-edge-height > .fp3d-field {
        flex: 1 1 90px;
        min-width: 0;
      }
      .fp3d-edge-height > .fp3d-muted {
        flex: 1 1 90px;
        align-self: center;
      }
      .fp3d-edge-height > .fp3d-btn {
        flex: 0 0 auto;
        white-space: nowrap;
        padding-left: 10px;
        padding-right: 10px;
      }
      .fp3d-edge-height > .fp3d-split-row {
        flex: 1 1 100%;
        display: flex;
        gap: 6px;
        align-items: end;
      }
      .fp3d-edge-height > .fp3d-split-row > .fp3d-field {
        flex: 1;
      }
      .fp3d-edge-on {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
      }
      .fp3d-edge-low b {
        color: var(--fp3d-accent);
      }
      .fp3d-wall-low {
        opacity: 0.55;
      }
      .fp3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .fp3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .fp3d-place-all {
        margin: 10px 0 0;
      }
      .fp3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .fp3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .fp3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .fp3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .fp3d-tool-energy .fp3d-roof-layer {
        opacity: 0.45;
      }
      .fp3d-tool-energy .fp3d-energy-item {
        pointer-events: auto;
      }
      /* the cables in the energy tool: faint automatic ways, solid laid ones */
      .fp3d-cable line {
        stroke: #ffd75a;
        stroke-width: 2;
        stroke-dasharray: 5 4;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-cable-bat line {
        stroke: #5dffb0;
      }
      .fp3d-cable-grid line {
        stroke: #4ff6ff;
      }
      .fp3d-cable-hit line {
        stroke-width: 12;
        opacity: 0;
        pointer-events: stroke;
        cursor: pointer;
      }
      .fp3d-cable-laid line {
        stroke-dasharray: none;
        opacity: 0.9;
      }
      .fp3d-cable-sel line {
        stroke-width: 2.5;
        opacity: 1;
        filter: drop-shadow(0 0 4px currentColor);
      }
      .fp3d-cable-sel .fp3d-cable-piece {
        stroke-width: 14;
        opacity: 0;
        pointer-events: stroke;
        cursor: copy;
      }
      .fp3d-cable .fp3d-vertex circle {
        pointer-events: auto;
      }
      .fp3d-energy-marker {
        cursor: move;
      }
      .fp3d-checklist .fp3d-chk {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 2px 0;
        padding: 6px 8px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
      }
      .fp3d-checklist .fp3d-chk:hover {
        background: rgba(127, 127, 127, 0.12);
      }
      .fp3d-checklist .fp3d-chk span {
        width: 18px;
        text-align: center;
        font-weight: 700;
      }
      .fp3d-chk-ok span {
        color: #59ff8c;
      }
      .fp3d-chk-todo span {
        color: #ffc633;
      }
      .fp3d-chk-opt {
        opacity: 0.75;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .fp3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-holo-pt circle {
        stroke: #c9a4ff;
        cursor: grab;
      }
      .fp3d-holo-pt .fp3d-energy-name {
        fill: #c9a4ff;
      }
      .fp3d-energy-marker-sel circle {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--fp3d-accent) 25%, #0b1426);
      }
      .fp3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-energy-icon {
        font-size: 17px;
      }
      .fp3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .fp3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      /* roof fields over the floor plan (#89): an outline only, so the rooms under them stay readable */
      .fp3d-solar-dim polygon {
        fill: color-mix(in srgb, #1b3a8f 18%, transparent);
        stroke: color-mix(in srgb, #9fb8ff 45%, transparent);
        stroke-width: 1;
      }
      .fp3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-solar polygon.fp3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .fp3d-solar-pick polygon {
        cursor: pointer;
      }
      .fp3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .fp3d-roof-sel .fp3d-roof-ridge line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-tool-energy .fp3d-room,
      .fp3d-tool-energy [data-furniture],
      .fp3d-tool-energy [data-device],
      .fp3d-tool-energy [data-opening],
      .fp3d-tool-energy [data-free-wall],
      .fp3d-tool-energy [data-outdoor],
      .fp3d-tool-energy .fp3d-roof-layer,
      .fp3d-tool-roof .fp3d-room,
      .fp3d-tool-roof [data-furniture],
      .fp3d-tool-roof [data-device],
      .fp3d-tool-roof [data-opening],
      .fp3d-tool-roof [data-free-wall],
      .fp3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
`;var md=$t`
      .fp3d-dev-area {
        margin: 10px 0 2px;
        color: var(--fp3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* the item's title and position fields stay at the top while the panel scrolls (#71); -12px = the side
         bar's top padding, so nothing shows above it */
      .fp3d-pos-head {
        position: sticky;
        top: -12px;
        z-index: 3;
        background: var(--fp3d-chrome-solid);
        padding: 4px 0 10px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pos-head h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
      }
      .fp3d-link-block {
        margin: 10px 0 4px;
        padding-bottom: 6px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-link-title {
        margin: 0 0 6px;
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-h3row h3 {
        margin-bottom: 0;
      }
      .fp3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .fp3d-pipe,
      .fp3d-pipe-hit {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-pipe {
        stroke: #37a8ff;
        stroke-width: 3;
        opacity: 0.85;
        pointer-events: none;
      }
      .fp3d-pipe-sel {
        stroke-width: 5;
        opacity: 1;
        filter: drop-shadow(0 0 4px #37a8ff);
      }
      .fp3d-pipe-draft {
        stroke-dasharray: 6 5;
      }
      .fp3d-pipe-hit {
        stroke: transparent;
        stroke-width: 16;
        cursor: pointer;
      }
      .fp3d-pipe-seg {
        stroke: transparent;
        stroke-width: 14;
        cursor: copy;
      }
      .fp3d-pipe-arrow {
        fill: #37a8ff;
        pointer-events: none;
      }
      .fp3d-pool-node {
        cursor: grab;
      }
      .fp3d-pool-node circle:not(.fp3d-hit) {
        fill: #0b1a2e;
        stroke: #37e0ff;
        stroke-width: 2;
      }
      .fp3d-pool-node.fp3d-pool-dev circle:not(.fp3d-hit) {
        stroke: #5b7cff;
      }
      .fp3d-pool-node.fp3d-pool-closed circle:not(.fp3d-hit) {
        stroke: #ff4d40;
      }
      .fp3d-pool-node text {
        fill: #e6f6ff;
        font-size: 10px;
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
      }
      .fp3d-conn {
        grid-template-columns: 1fr;
      }
      .fp3d-conn select {
        width: 100%;
      }
      .fp3d-pool-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        margin: 4px 0;
        font-size: 13px;
      }
      .fp3d-pool-row > span,
      .fp3d-pool-row > .fp3d-link {
        flex: 1;
        text-align: left;
      }
      .fp3d-pool-row-sel {
        background: rgba(55, 224, 255, 0.1);
        border-radius: 8px;
        box-shadow: inset 3px 0 0 var(--fp3d-accent);
        padding-left: 6px;
      }
      .fp3d-outdoor-type {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-outdoor-type select {
        min-height: 34px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line, rgba(160, 200, 255, 0.25));
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
      }
      .fp3d-fix[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-hint-fixed {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
      }
      .fp3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .fp3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-ctx-danger {
        color: var(--fp3d-danger, #ff6b7a) !important;
      }
      .fp3d-edge-hi {
        stroke: var(--fp3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--fp3d-accent));
      }
      .fp3d-room-id code {
        user-select: all;
        cursor: copy;
      }
      .fp3d-open .fp3d-open-hit {
        stroke: transparent;
        stroke-width: 26;
      }
      .fp3d-free-wall .fp3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .fp3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .fp3d-free-wall-sel .fp3d-free-wall-line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-draft-wall {
        stroke-width: 4;
      }
      .fp3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .fp3d-ext-teaser {
        display: grid;
        gap: 6px;
        margin: 12px 0;
        padding: 12px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(55, 224, 255, 0.08), rgba(91, 124, 255, 0.08));
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        min-width: 36px;
        min-height: 36px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-dev-legend {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
        margin: 0 0 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-dev-legend span {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        /* a fixed grid: the chips keep their places whichever kind is picked (#63) */
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-presets .fp3d-chip {
        min-height: 40px;
        padding: 3px 4px;
        line-height: 1.2;
        overflow-wrap: anywhere;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-code {
        display: block;
        font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
        padding: 6px 8px;
        border-radius: 8px;
        background: rgba(127, 127, 127, 0.12);
        user-select: all;
        word-break: break-all;
      }
      .fp3d-shift {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .fp3d-shift > span {
        flex: 1 0 100%;
        font-size: 13px;
        font-weight: 600;
      }
      /* X and Z side by side on one row, the Shift button after them (#236) */
      .fp3d-shift-xz {
        flex: 1 0 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-shift-xz input {
        width: 100%;
        min-width: 0;
        box-sizing: border-box;
      }
      .fp3d-headroom {
        stroke: rgba(255, 214, 90, 0.55);
        stroke-width: 1;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-headroom-label {
        font-size: 10px;
        fill: rgba(255, 214, 90, 0.75);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-split-mark {
        stroke: rgba(55, 224, 255, 0.9);
        stroke-width: 2;
        pointer-events: none;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
        max-width: 100%;
        box-sizing: border-box;
      }
      .fp3d-icon-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-icon-row input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-icon-row ha-icon {
        --mdc-icon-size: 22px;
        color: var(--fp3d-accent);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
        width: 100%;
        min-width: 0;
        white-space: normal;
        overflow-wrap: anywhere;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-lib-toggle:hover {
        color: var(--fp3d-text);
      }
      .fp3d-lib-caret {
        width: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      /* furniture blocks and multi selections: a dashed frame with its name, the frame being drawn */
      .fp3d-selframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-selframe-block rect {
        stroke: #ffb547;
      }
      .fp3d-selframe text {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-selframe-block text {
        fill: #ffb547;
      }
      .fp3d-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        pointer-events: none;
      }
      .fp3d-block-parts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 6px 0 10px;
      }
      .fp3d-block-note {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
      }
      .fp3d-multi-toggle {
        margin-top: 8px;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open .fp3d-open-swing {
        pointer-events: stroke;
      }
      .fp3d-open-door line.fp3d-open-leaf {
        stroke-width: 2;
      }
      .fp3d-open-front line.fp3d-open-leaf {
        stroke-width: 3;
      }
      .fp3d-open-front path,
      .fp3d-open-door line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .fp3d-open-door line.fp3d-open-pane {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.35);
      }
      .fp3d-open-ring {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 5 3;
        pointer-events: none;
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-bg-rotate {
        cursor: grab;
      }
      .fp3d-bg-ruler line {
        stroke: #ffb020;
        stroke-width: 2.5;
        stroke-dasharray: 6 4;
      }
      .fp3d-bg-ruler circle {
        fill: #ffb020;
        stroke: #1a1000;
        stroke-width: 1.5;
      }
      .fp3d-own-button {
        padding: 10px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-own-button textarea {
        font: 12px/1.4 ui-monospace, monospace;
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: var(--fp3d-chrome-solid);
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        /* opaque: the rows scrolling under it must not show through (#262) */
        background: linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 0 0 6px;
        box-shadow: 0 -8px 0 var(--fp3d-chrome-solid), 0 6px 0 var(--fp3d-chrome-solid);
      }
      .fp3d-dev-all {
        display: block;
        padding: 2px 26px 6px;
        font-size: 12px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-hidden .fp3d-dev-name {
        opacity: 0.45;
        text-decoration: line-through;
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-resize-note {
        margin: 0 0 10px;
        padding: 6px 10px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
      }
      .fp3d-resize-note p {
        margin: 4px 0;
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      /* an unplaced entity is dragged onto the plan (#83) */
      .fp3d-unplaced-row {
        cursor: grab;
      }
      .fp3d-unplaced-row .fp3d-dev-name {
        flex: 1;
        min-width: 0;
      }
      .fp3d-room-btn {
        flex: 1;
        min-width: 0;
        border-bottom: none;
        padding: 0;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
      /* phones: the phone editor (#250) has its own layout, styles/phone.ts */

      /* touch screens (#181): the editor's small buttons and selects reach 44 px */
      @media (pointer: coarse) {
        .fp3d-fix,
        .fp3d-3d-fold,
        .fp3d-wv-kit .fp3d-wv-pick,
        .fp3d-outdoor-type select,
        .fp3d-point .fp3d-btn,
        .fp3d-seg .fp3d-menu-sub .fp3d-chip,
        .fp3d-presets .fp3d-chip,
        .fp3d-settings-link {
          min-height: 44px;
        }
        .fp3d-pin {
          min-width: 44px;
          min-height: 44px;
        }
        .fp3d-more-btn,
        .fp3d-wv-zoom .fp3d-btn,
        .fp3d-strip-btn {
          min-width: 44px;
          min-height: 44px;
        }
      }
`;var gd=$t`
      /* the bar is 60 px plus the safe area under it, at least 16 px (the Home Assistant app on Android often reports
         0); the panel already ends above Home Assistant's own inset, so only what is left of the screen's is added */
      .fp3d-editor.fp3d-phone {
        --fp3d-bar-h: 76px;
        --fp3d-bar-h: calc(60px + max(16px, env(safe-area-inset-bottom, 0px) - var(--safe-area-inset-bottom, 0px)));
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: minmax(0, 1fr) auto;
        height: 100%;
        overflow: hidden;
      }
      /* the keyboard is up: the bar steps aside, the sheet sits on the keyboard */
      .fp3d-editor.fp3d-phone.fp3d-typing {
        --fp3d-bar-h: 0px;
      }
      .fp3d-phone.fp3d-typing > fp3d-phone-bar {
        display: none;
      }
      .fp3d-phone > fp3d-phone-bar {
        grid-row: 2;
        min-height: var(--fp3d-bar-h);
        transition: transform 0.2s ease;
      }
      /* something is being moved on the plan: the bar slides away (its room stays, so the plan does not resize) */
      :host([data-dragging]) .fp3d-phone > fp3d-phone-bar {
        transform: translateY(100%);
        visibility: hidden;
      }
      .fp3d-phone > .fp3d-main {
        grid-row: 1;
      }
      .fp3d-editor.fp3d-sheeted .fp3d-canvas-wrap {
        min-height: 0;
      }
      /* a tablet held upright keeps its toolbar row; the plan fills the rest and the sheet comes up over it */
      .fp3d-editor.fp3d-sheeted:not(.fp3d-phone) {
        --fp3d-bar-h: 0px;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto minmax(0, 1fr);
        height: 100%;
        overflow: hidden;
      }
      /* the toolbar row is not drawn: its floor menu floats as a chip, its Build and Outside menus open above the bar */
      .fp3d-phone > .fp3d-toolbar,
      .fp3d-phone .fp3d-seg-tools,
      .fp3d-phone .fp3d-seg-tools > .fp3d-menu-wrap {
        display: contents;
      }
      .fp3d-phone > .fp3d-toolbar > :not(.fp3d-seg-floor):not(.fp3d-seg-tools):not(.fp3d-warn):not(.fp3d-pick-tip),
      .fp3d-phone .fp3d-seg-tools > button,
      .fp3d-phone .fp3d-seg-tools > .fp3d-menu-wrap > button {
        display: none;
      }
      /* the floor chip: top left, clear of the 16 px edge strip left for the system's swipes */
      .fp3d-phone .fp3d-seg-floor {
        position: absolute;
        top: 8px;
        left: 16px;
        z-index: 22;
        max-width: calc(100% - 96px);
      }
      .fp3d-phone .fp3d-seg-floor .fp3d-menu-wrap > button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 44px;
        max-width: 100%;
        padding: 0 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: var(--fp3d-radius-control, 6px);
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
      }
      .fp3d-phone .fp3d-seg-floor .fp3d-menu-label {
        display: none;
      }
      .fp3d-phone .fp3d-warn {
        position: absolute;
        top: 60px;
        left: 16px;
        z-index: 22;
        padding: 4px 10px;
        border-radius: 8px;
        background: var(--fp3d-chrome-solid);
      }
      .fp3d-phone .fp3d-pick-tip {
        left: 50% !important;
        top: auto !important;
        bottom: calc(var(--fp3d-bar-h) + 12px);
        white-space: normal;
        max-width: calc(100% - 32px);
      }
      .fp3d-phone .fp3d-pick-tip::before {
        display: none;
      }
      .fp3d-phone .fp3d-tool-note {
        top: 60px;
      }
      /* Build and Outside: a sheet above the bar */
      .fp3d-phone .fp3d-seg-tools .fp3d-menu {
        top: auto;
        left: 0;
        right: 0;
        bottom: var(--fp3d-bar-h);
        z-index: 31;
        min-width: 0;
        max-height: 70%;
        padding: 8px 8px 12px;
        border-width: 1px 0 0;
        border-radius: 14px 14px 0 0;
        box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
      }
      .fp3d-phone .fp3d-seg-tools .fp3d-menu-veil {
        background: rgba(2, 6, 14, 0.45);
      }
      .fp3d-phone .fp3d-menu .fp3d-menu-item,
      .fp3d-phone .fp3d-menu .fp3d-chip {
        min-height: 44px;
      }
      /* the zoom buttons: top right, out of the sheet's way */
      .fp3d-sheeted .fp3d-nav {
        top: 8px;
        right: 16px;
        transform: none;
      }
      /* the hint: one line, only while nothing is chosen (editor/toolbar.ts renderHint) */
      .fp3d-phone .fp3d-hint {
        left: 16px;
        right: 16px;
        bottom: 8px;
        max-width: none;
        font-size: 13px;
        padding: 4px 4px 4px 12px;
      }
      .fp3d-phone .fp3d-hint-text {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-phone .fp3d-hint-hide {
        display: grid;
        place-items: center;
        width: 36px;
        height: 36px;
        padding: 0;
        border: 0;
      }
      .fp3d-phone .fp3d-start {
        left: 16px;
        right: 16px;
        bottom: 8px;
        max-width: none;
      }
      /* the details sheet: a named region with peek, half and full heights over the plan, above the bar */
      .fp3d-editor.fp3d-sheeted > .fp3d-sheet {
        position: absolute;
        left: 0;
        right: 0;
        bottom: var(--fp3d-bar-h);
        z-index: 25;
        display: flex;
        flex-direction: column;
        gap: 0;
        padding: 0;
        overflow: hidden;
        max-height: calc(100% - var(--fp3d-bar-h) - 8px);
        border: 0;
        border-top: 1px solid var(--fp3d-line);
        border-radius: 14px 14px 0 0;
        box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
        transition: height 0.2s ease;
      }
      .fp3d-sheeted > .fp3d-sheet[data-sheet="half"] {
        height: 50%;
      }
      .fp3d-sheeted > .fp3d-sheet[data-sheet="full"] {
        height: calc(100% - var(--fp3d-bar-h) - 8px);
      }
      /* under a toolbar row (a tablet held upright, a phone held sideways) the full sheet stops below it */
      .fp3d-editor.fp3d-sheeted:not(.fp3d-phone) > .fp3d-sheet {
        max-height: calc(100% - var(--fp3d-toolbar-h, 52px) - 16px);
      }
      .fp3d-sheeted:not(.fp3d-phone) > .fp3d-sheet[data-sheet="full"] {
        height: calc(100% - var(--fp3d-toolbar-h, 52px) - 16px);
      }
      .fp3d-sheet-head {
        flex: none;
        touch-action: none;
      }
      .fp3d-sheet-grab {
        width: 40px;
        height: 4px;
        margin: 8px auto 4px;
        border-radius: 2px;
        background: #475569;
        cursor: pointer;
      }
      .fp3d-sheet-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 2px 14px 10px;
      }
      .fp3d-sheet-title {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-sheet-title b {
        font-size: 15px;
      }
      .fp3d-phone .fp3d-sheet-hint {
        display: block;
        overflow: visible;
        text-overflow: clip;
        white-space: normal;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-sheet-size,
      .fp3d-sheet-close {
        flex: none;
        min-height: 44px;
      }
      .fp3d-sheet-close {
        min-width: 44px;
        display: grid;
        place-items: center;
      }
      .fp3d-sheet-body {
        flex: 1;
        min-height: 0;
        overflow-y: auto;
        overscroll-behavior: contain;
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding: 4px 14px 24px;
      }
      /* "Back to the floor" is a small link here, so the name and area come first (#262) */
      .fp3d-sheet-body > .fp3d-back {
        align-self: flex-start;
        min-height: 32px;
        margin-bottom: -10px;
        padding: 2px 10px;
        font-size: 13px;
      }
      .fp3d-sheet[data-sheet="peek"] > .fp3d-sheet-body {
        display: none;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-editor.fp3d-sheeted > .fp3d-sheet,
        .fp3d-phone > fp3d-phone-bar {
          transition: none;
        }
      }
`;function bd(a,t){return t==="metric"||t==="imperial"?t:a?.config?.unit_system?.length==="mi"?"imperial":"metric"}function _d(a,t){return String(Number(a.toFixed(t)))}function ln(a,t=2){let e=a<0?"-":"",n=Math.round(Math.abs(a)/.0254*(t>=2?10:1))/(t>=2?10:1),i=Math.floor(n/12+1e-9),s=n-i*12,o=_d(s,t>=2?1:0);return i?s<.05?`${e}${i}'`:`${e}${i}' ${o}"`:`${e}${o}"`}function Do(a,t){let e=a.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,s=!1,o=!1,r=e;for(let l of e.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];s=!0,r=r.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(i+=d*.3048,o=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?i+=d*.0254:c==="mm"?i+=d/1e3:c==="cm"?i+=d/100:c==="m"?i+=d:i+=t==="imperial"?d*(o?.0254:.3048):d}return!s||/[^\s+]/.test(r)?null:i}function yd(a,t,e){return t==="imperial"?ln(a):`${e(a)} m`}function vd(a,t,e){return t==="imperial"?`${_d(a/(.3048*.3048),1)} ft\xB2`:`${e(a)} m\xB2`}function Gt(a,t){return t==="imperial"?a.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):a}function Wo(a){return a==="touch"?44:24}function $d(a,t,e,n,i){let s=[],o=[];for(let r of a){if(i?.(r))continue;let l=xd(r,t,e,n);l==="firm"?s.push({id:r.id,area:r.w*r.d}):l==="pad"&&o.push({id:r.id,dist:Math.hypot(t[0]-r.x,t[1]-r.z)})}return s.sort((r,l)=>r.area-l.area),o.sort((r,l)=>r.dist-l.dist),[...s.map(r=>r.id),...o.map(r=>r.id)]}function xd(a,t,e,n){let i=n/2/Math.max(e,1e-6),s=a.rotation*Math.PI/180,o=Math.cos(s),r=Math.sin(s),l=t[0]-a.x,d=t[1]-a.z,c=Math.abs(l*o+d*r),p=Math.abs(-l*r+d*o),h=a.w/2,u=a.d/2;if(c<=h&&p<=u)return"firm";if(!(c<=Math.max(h,i)&&p<=Math.max(u,i)))return null;let f=(g,b)=>g<i&&b>=i/2&&b>=4*g;return f(u,h)&&c<=h||f(h,u)&&p<=u?"firm":"pad"}function wd(a,t,e,n){return xd(a,t,e,n)==="firm"}function No(a,t,e=1){if(!a.length)return null;let n=t?a.indexOf(t):-1;return n<0?e<0?a[a.length-1]:a[0]:a[(n+e+a.length)%a.length]}function kd(a,t,e){let n=e&&a.includes(e)?e:a.find(s=>t.includes(s));if(!n)return{grab:a[0]??null,next:null};let i=No(a,n);return{grab:n,next:i!==n?i:null}}function Gn(a,t){let e=[...a].sort((i,s)=>yt(i.points)-yt(s.points)),n=new Map;for(let i of t){let s=e.find(r=>K([i.x,i.z],r.points))?.id??null,o=n.get(s);o?o.push(i):n.set(s,[i])}return n}function Md(a,t,e,n,i=4){let s=Math.ceil(e/n),o=Math.max(0,Math.min(Math.floor(t/n),a-s)),r=Math.max(0,o-i),l=Math.min(a,o+s+i);return{start:r,end:l,before:r*n,after:(a-l)*n}}var dn=32,Ph=9,jo=class extends Ge{static properties={rows:{attribute:!1},texts:{attribute:!1},editable:{type:Boolean},_scroll:{state:!0}};constructor(){super(),this.rows=[],this.texts={hide:"Hide",show:"Show",remove:"Delete"},this.editable=!1,this._scroll=0}send(t,e){this.dispatchEvent(new CustomEvent(t,{detail:{id:e},bubbles:!0,composed:!0}))}onScroll(t){let e=t.currentTarget.scrollTop;Math.floor(e/dn)!==Math.floor(this._scroll/dn)&&(this._scroll=e)}render(){let t=this.rows,e=Math.min(t.length,Ph)*dn,n=Md(t.length,this._scroll,e,dn);return m`<div class="box" style="height:${e}px" role="list" @scroll=${this.onScroll}>
      <div style="height:${n.before}px"></div>
      ${t.slice(n.start,n.end).map(i=>m`<div class=${`row${i.selected?" sel":""}${i.hidden?" off":""}`} role="listitem">
          <button class="name" aria-pressed=${i.selected} @click=${()=>this.send("item-select",i.id)}>
            <span>${i.name}</span>${i.note?m`<small>${i.note}</small>`:v}
          </button>
          <button class="icon" title=${i.hidden?this.texts.show:this.texts.hide} aria-label=${i.hidden?this.texts.show:this.texts.hide} aria-pressed=${i.hidden} @click=${()=>this.send("item-hide",i.id)}>
            ${i.hidden?"\u25CC":"\u25C9"}
          </button>
          ${this.editable?m`<button class="icon" title=${this.texts.remove} aria-label=${this.texts.remove} @click=${()=>this.send("item-delete",i.id)}>✕</button>`:v}
        </div>`)}
      <div style="height:${n.after}px"></div>
    </div>`}static styles=[Wn,$t`
      :host {
        display: block;
      }
      .box {
        overflow-y: auto;
        overscroll-behavior: contain;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 2px;
        height: ${dn}px;
        box-sizing: border-box;
      }
      button {
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        height: ${dn-4}px;
      }
      button:hover,
      button:focus-visible {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      .name {
        flex: 1;
        min-width: 0;
        display: flex;
        gap: 8px;
        align-items: baseline;
        text-align: left;
        padding: 0 8px;
      }
      .name span,
      .name small {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .name small {
        margin-left: auto;
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .sel .name {
        color: var(--fp3d-accent);
      }
      .off .name span {
        opacity: 0.5;
        text-decoration: line-through;
      }
      .icon {
        width: ${dn}px;
        flex: none;
        color: var(--fp3d-muted);
      }
    `]};Ue("fp3d-item-list",jo);var Pt=(a,t)=>[a[0]-t[0],a[1]-t[1]],Xe=(a,t)=>[a[0]+t[0],a[1]+t[1]],Ce=(a,t)=>[a[0]*t,a[1]*t],pn=(a,t)=>a[0]*t[0]+a[1]*t[1],cn=(a,t)=>a[0]*t[1]-a[1]*t[0],fi=a=>Math.hypot(a[0],a[1]),ce=a=>{let t=fi(a)||1;return[a[0]/t,a[1]/t]},Ed=a=>[-a[1],a[0]],Sd=a=>[a[1],-a[0]];function wt(a,t,e=[]){let n=t.eps??.005,i=[],s=e.filter(P=>Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1])>.05),o=[],r=P=>{for(let A=0;A<o.length;A++)if(Math.abs(o[A][0]-P[0])<=n&&Math.abs(o[A][1]-P[1])<=n)return A;return o.push([P[0],P[1]]),o.length-1},l=[];for(let P of a){let A=P.points;if(A.length<3||Math.abs(Vt(A))<1e-6)continue;let V=Vt(A)>0,S=A.map(r);for(let z=0;z<A.length;z++){let H=S[z],D=S[(z+1)%A.length];H!==D&&l.push(V?{u:H,v:D,room:P.id,edge:z,forward:!0}:{u:D,v:H,room:P.id,edge:z,forward:!1})}}let d=s.map(P=>[r(P.a),r(P.b)]),c=new Set;for(let P of a){let A=P.points;A.length<3||(P.wall_splits??[]).forEach((V,S)=>{if(!V||S>=A.length)return;let z=A[S],H=Pt(A[(S+1)%A.length],z),D=fi(H);for(let C of V)C>n&&C<D-n&&c.add(r(Xe(z,Ce(H,C/D))))})}let p=[];for(let P of l){let A=o[P.u],V=o[P.v],S=Pt(V,A),z=fi(S),H=Ce(S,1/z),D=[];for(let W=0;W<o.length;W++){if(W===P.u||W===P.v)continue;let G=Pt(o[W],A),Y=pn(G,H);Y<=n||Y>=z-n||Math.abs(cn(H,G))<=n&&D.push({t:Y,id:W})}D.sort((W,G)=>W.t-G.t);let C=[{t:0,id:P.u},...D,{t:z,id:P.v}];for(let W=0;W+1<C.length;W++){let G=C[W],Y=C[W+1],X=P.forward?G.t:z-Y.t,it=P.forward?Y.t:z-G.t;p.push({u:G.id,v:Y.id,room:P.room,edge:P.edge,t0:X,t1:it})}}let h=new Map;for(let P of p){let A=P.u<P.v?`${P.u}-${P.v}`:`${P.v}-${P.u}`,V=h.get(A);V||h.set(A,V=[]),V.push(P)}let u=P=>({room_id:P.room,edge:P.edge,t0:P.t0,t1:P.t1}),f=new Map;for(let P of p){let A=`${P.room}:${P.edge}`;f.set(A,[...f.get(A)??[],P.t0].sort((V,S)=>V-S))}let g=P=>{let A=a.find(S=>S.id===P.room)?.wall_heights?.[P.edge];if(!Array.isArray(A))return A;let V=f.get(`${P.room}:${P.edge}`)??[];return A[V.indexOf(P.t0)]??null},b=P=>{let A=P.map(g).filter(S=>typeof S=="number"&&S>0);if(A.length)return Math.min(...A);let V=P.map(S=>a.find(z=>z.id===S.room)?.ceiling_height);return V.every(S=>typeof S=="number"&&S>0)?Math.max(...V):void 0},_=P=>{let A=P.map(V=>a.find(S=>S.id===V.room)?.wall_thickness?.[V.edge]).filter(V=>typeof V=="number"&&V>0);return A.length?Math.max(...A):void 0},y=P=>{for(let A of P){let V=a.find(D=>D.id===A.room),S=V?.wall_slopes?.[A.edge];if(!V||!S)continue;let z=V.points[A.edge],H=V.points[(A.edge+1)%V.points.length];return{p:[z[0],z[1]],q:[H[0],H[1]],h0:Math.max(.05,S[0]),h1:Math.max(.05,S[1])}}},$=P=>P.some(A=>g(A)===0),w=P=>{let A=y(P);return A?{height:Math.max(A.h0,A.h1),slope:A}:{height:b(P)}},E=[],x=[];for(let P of h.values()){let A=P[0],V=P.find(S=>S!==A&&S.u===A.v&&S.v===A.u&&S.room!==A.room);for(let S of P)S!==A&&S!==V&&S.room!==A.room&&i.push(`overlap:${A.room}:${S.room}`);if($(V?[A,V]:[A])){V&&E.push([A.room,V.room]);continue}if(V){let S=_([A,V])??t.interior;x.push({a:A.u,b:A.v,left:S/2,right:S/2,exterior:!1,roomLeft:A.room,roomRight:V.room,sources:[u(A),u(V)],...w([A,V])})}else x.push({a:A.u,b:A.v,left:0,right:_([A])??t.exterior,exterior:!0,roomLeft:A.room,roomRight:null,sources:[u(A)],...w([A])})}let M=P=>ce(Pt(o[P.b],o[P.a])),R=new Set;for(let P of x){if(P.exterior||P.free)continue;let A=new Set;for(let S of[P.a,P.b])for(let z of x)!z.exterior||z.free||z.a!==S&&z.b!==S||Math.abs(cn(M(P),M(z)))>1e-6||(z.roomLeft===P.roomLeft?A.add("left"):z.roomLeft===P.roomRight&&A.add("right"));if(A.size!==1)continue;let V=P.left+P.right;A.has("left")?(P.left=0,P.right=V):(P.left=V,P.right=0),R.add(P)}for(let P of[...R]){let A=[P];for(;A.length;){let V=A.pop();for(let S of[V.a,V.b])for(let z of x){if(z===V||z.exterior||z.free||R.has(z)||z.a!==S&&z.b!==S||Math.abs(cn(M(V),M(z)))>1e-6)continue;let H=z.left+z.right,D=V.right===0==pn(M(V),M(z))>0;z.left=D?H:0,z.right=D?0:H,R.add(z),A.push(z)}}}s.forEach((P,A)=>{let[V,S]=d[A];if(V===S)return;let z=[(P.a[0]+P.b[0])/2,(P.a[1]+P.b[1])/2],H=a.find(W=>W.points.length>=3&&K(z,W.points))?.id??null,D=(P.thickness??t.interior)/2,C=typeof P.height=="number"&&P.height>0?P.height:void 0;x.push({free:P.id,a:V,b:S,left:D,right:D,exterior:!1,roomLeft:H,roomRight:H,sources:[],height:C})}),x=Rh(x,o,c);let T=Oh(x,o);return{walls:x.map((P,A)=>{let V=o[P.a],S=o[P.b],z=T.get(`${A}:a`),H=T.get(`${A}:b`),D=Ah([z.right,H.left,S,H.right,z.left,V],1e-6);return{id:Ih(V,S),a:[V[0],V[1]],b:[S[0],S[1]],left:P.left,right:P.right,exterior:P.exterior,roomLeft:P.roomLeft,roomRight:P.roomRight,sources:P.sources,footprint:D,...P.free?{free:P.free}:{},...P.height!==void 0?{height:P.height}:{},...P.slope?{slope:P.slope}:{}}}),warnings:[...new Set(i)],open:E,parts:f}}function Ih(a,t){let e=s=>Math.round(s*100),[n,i]=a[0]<t[0]||a[0]===t[0]&&a[1]<=t[1]?[a,t]:[t,a];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function Fd(a){return{...a,a:a.b,b:a.a,left:a.right,right:a.left,roomLeft:a.roomRight,roomRight:a.roomLeft}}function Rh(a,t,e=new Set){let n=a.slice(),i=!0;for(;i;){i=!1;let s=new Map;n.forEach((o,r)=>{for(let l of[o.a,o.b]){let d=s.get(l);d||s.set(l,d=[]),d.push(r)}});for(let[o,r]of s){if(r.length!==2||e.has(o))continue;let l=n[r[0]],d=n[r[1]];if(l.b!==o&&(l=Fd(l)),d.a!==o&&(d=Fd(d)),l.a===d.b)continue;let c=ce(Pt(t[l.b],t[l.a])),p=ce(Pt(t[d.b],t[d.a]));if(Math.abs(cn(c,p))>1e-6||pn(c,p)<=0||l.free||d.free||l.height!==d.height||l.slope||d.slope||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let h={...l,b:d.b,sources:zh(l.sources,d.sources)},u=n.filter((f,g)=>g!==r[0]&&g!==r[1]);u.push(h),n.length=0,n.push(...u),i=!0;break}}return n}function zh(a,t){let e=a.map(n=>({...n}));for(let n of t){let i=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function Oh(a,t){let e=new Map;a.forEach((i,s)=>{let o=ce(Pt(t[i.b],t[i.a])),r=[[i.a,{key:`${s}:a`,d:o,left:i.left,right:i.right,angle:Math.atan2(o[1],o[0])}],[i.b,{key:`${s}:b`,d:Ce(o,-1),left:i.right,right:i.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,d]of r){let c=e.get(l);c||e.set(l,c=[]),c.push(d)}});let n=new Map;for(let[i,s]of e){let o=t[i];s.sort((d,c)=>d.angle-c.angle);let r=d=>({left:Xe(o,Ce(Ed(d.d),d.left)),right:Xe(o,Ce(Sd(d.d),d.right))});for(let d of s)n.set(d.key,r(d));if(s.length<2)continue;let l=4*Math.max(...s.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<s.length;d++){let c=s[d],p=s[(d+1)%s.length],h=Xe(o,Ce(Ed(c.d),c.left)),u=Xe(o,Ce(Sd(p.d),p.right)),f=cn(c.d,p.d);if(Math.abs(f)<1e-4)continue;let g=cn(Pt(u,h),p.d)/f,b=Xe(h,Ce(c.d,g));fi(Pt(b,o))>l||(n.get(c.key).left=b,n.get(p.key).right=b)}}return n}function Ah(a,t){let e=a.filter((i,s)=>fi(Pt(i,a[(s+1)%a.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let s=e[(i+e.length-1)%e.length],o=e[i],r=e[(i+1)%e.length],l=Pt(o,s),d=Pt(r,o);if(Math.abs(cn(ce(l),ce(d)))<1e-7&&pn(l,d)>0){e=e.filter((c,p)=>p!==i),n=!0;break}}}return e}function ne(a,t,e){let n=a.points[t],i=a.points[(t+1)%a.points.length],s=ce(Pt(i,n));return Xe(n,Ce(s,e))}function qt(a,t,e){if(a.wall){let i=e.find(r=>r.id===a.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let s=ce(Pt(i.b,i.a));return{room:{id:a.room_id,name:"",area_id:null,points:[i.a,i.b,Xe(i.a,[-s[1],s[0]])]},edge:0}}let n=t.find(i=>i.id===a.room_id);return n&&a.edge<n.points.length?{room:n,edge:a.edge}:null}function mi(a,t,e){if(!t.wall)return Id(a,e.room,e.edge,t.offset);let n=a.find(s=>s.free===t.wall);if(!n)return null;let i=ne(e.room,0,t.offset);return{wall:n,s:pn(Pt(i,n.a),ce(Pt(n.b,n.a)))}}function Th(a,t,e){if(t.free)return null;let n=e?t.b:t.a,i=ce(Pt(t.b,t.a)),s=r=>Math.hypot(r[0]-n[0],r[1]-n[1])<.001,o=null;for(let r of a)if(!(r===t||!(s(r.a)||s(r.b)))){if(o||r.exterior!==t.exterior||r.free||!s(e?r.a:r.b)||pn(ce(Pt(r.b,r.a)),i)<.9999||Math.abs(r.left-t.left)>.001||Math.abs(r.right-t.right)>.001)return null;o=r}return o}function Pd(a,t,e){return[0,Math.hypot(t.points[(e+1)%t.points.length][0]-t.points[e][0],t.points[(e+1)%t.points.length][1]-t.points[e][1])].map(i=>{let s=Id(a,t,e,i);if(!s)return 0;let o=Math.hypot(s.wall.b[0]-s.wall.a[0],s.wall.b[1]-s.wall.a[1]),r=s.s>o/2;if(Math.abs(s.s-(r?o:0))>.001)return 0;let l=Th(a,s.wall,r);return l?Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]):0})}function Id(a,t,e,n){for(let i of a){if(!i.sources.find(r=>r.room_id===t.id&&r.edge===e&&n>=r.t0-1e-6&&n<=r.t1+1e-6))continue;let o=ne(t,e,n);return{wall:i,s:pn(Pt(o,i.a),ce(Pt(i.b,i.a)))}}return null}var Rd=new Set(["_floorId","_roomId","_openingId","_furnitureId","_deviceId","_outdoorId","_wallId","_multi"]),Lh=new Set(["INPUT","SELECT","TEXTAREA"]);function as(a){let t=a?.activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function ls(a){return!!a&&(Lh.has(a.tagName??"")||!!a.isContentEditable)}function Ko(a){let t=as(a);return!ls(t)||!t?.blur?!1:(t.blur(),!0)}var Bo=new WeakSet;function zd(a,t){return Array.isArray(a)&&Array.isArray(t)?a.length===t.length&&a.every((e,n)=>e===t[n]):a===t}function Od(a,t){for(let[e,n]of a)if(typeof e=="string"&&Rd.has(e)&&!zd(n,t[e]))return!0;return!1}function Ad(a,t,e,n){if(!Rd.has(t)||Bo.has(a))return;let i=a,s=i[t];if(!(zd(s,e)||!ls(as(n)))){Bo.add(a);try{i[t]=e,Ko(n)}finally{i[t]=s,Bo.delete(a)}}}var Hh={set:(a,t)=>setTimeout(a,t),clear:a=>clearTimeout(a)},ds=class{boxes=new WeakMap;delay;timers;runs=0;constructor(t={}){this.delay=t.delay??600,this.timers=t.timers??Hh}state(t){let e=this.boxes.get(t);return e||this.boxes.set(t,e={dirty:!1,saved:null,timer:null,run:++this.runs}),e}stop(t){t.timer!==null&&this.timers.clear(t.timer),t.timer=null}save(t,e,n){this.stop(t),t.saved!==e&&(t.saved=e,n(e,t.run))}focus(t){let e=this.state(t);this.stop(e),e.dirty=!1,e.saved=null,e.run=++this.runs}input(t,e,n){let i=this.state(t);i.dirty=!0,this.stop(i),i.timer=this.timers.set(()=>{i.timer=null,i.dirty&&this.save(i,e,n)},this.delay)}enter(t,e,n){let i=this.state(t);this.save(i,e,n),i.dirty=!1,i.run=++this.runs}change(t,e,n){this.save(this.state(t),e,n)}blur(t){let e=this.state(t);this.stop(e),e.dirty=!1,e.run=++this.runs}typing(t){return this.boxes.get(t)?.dirty??!1}};var Vh={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Ch=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),Dh=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),Wh=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),cs=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Dd=new Set(["light","switch","fan"]);function Wd(a){return a.slice(0,a.indexOf("."))}function nt(a){return Vh[Wd(a)]??null}function Ie(a){return a!==null&&a!=="scene"&&a!=="script"}function pe(a,t){let e=a.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&a.devices?.[e.device_id]?.area_id||null:null}function qn(a,t){let e=a.entities?.[t];return!!e&&(!!e.hidden||!!e.hidden_by||!!e.disabled_by)}function Td(a,t){let e=nt(t);if(!e)return!1;let n=a.entities?.[t];if(qn(a,t)||n?.entity_category)return!1;let i=a.states[t];if(!i)return!1;let s=i.attributes.device_class,o=String(i.attributes.unit_of_measurement??"");return e==="sensor"?s?Ch.has(s)||s==="voltage"&&o==="mV":Dh.has(o):e==="binary"?s?Wh.has(s):!!n?.area_id:!0}var Nh=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Ld(a,t){if(nt(t)!=="sensor")return!1;let e=a.entities?.[t];if(qn(a,t)||e?.entity_category)return!1;let n=a.states[t];return!n||!n.attributes.unit_of_measurement||Nh.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||gi(n)}var Uo=null;function un(a){let t=Uo;if(t&&t.entities===a.entities&&t.devices===a.devices&&(t.states===a.states||(t.states=a.states,Object.keys(a.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],s=new Map,o=new Map;for(let l of Object.keys(a.entities??{})){let d=a.entities[l],c=d.device_id;c&&d.area_id&&(o.get(c)??o.set(c,new Set).get(c)).add(d.area_id),c&&er(a,l)&&(n.get(c)??n.set(c,[]).get(c)).push(l),c&&!qn(a,l)&&!d.entity_category&&(s.get(c)??s.set(c,new Set).get(c)).add(Wd(l));let p=Td(a,l),h=pe(a,l);if(!h){(p||Ld(a,l))&&Ie(nt(l))&&i.push(l);continue}p&&(e.get(h)??e.set(h,[]).get(h)).push(l)}if(a.entities)for(let l of Object.keys(a.states))a.entities[l]||(Td(a,l)||Ld(a,l))&&Ie(nt(l))&&i.push(l);i.sort((l,d)=>cs.indexOf(nt(l))-cs.indexOf(nt(d))||et(a,l).localeCompare(et(a,d)));for(let[l,d]of e){let c=a.areas?.[l]?.name;d.sort((p,h)=>{let u=cs.indexOf(nt(p)),f=cs.indexOf(nt(h));return u-f||et(a,p,c).localeCompare(et(a,h,c))})}let r=new Set([...o].filter(([,l])=>l.size>1).map(([l])=>l));return Uo={entities:a.entities,devices:a.devices,states:a.states,stateCount:Object.keys(a.states).length,areas:e,power:n,unassigned:i,domains:s,hubs:r},Uo}function Yt(a,t){return!t||!a.entities?[]:un(a).areas.get(t)??[]}function Nd(a,t){return a.entities?[...un(a).areas].filter(([e])=>e!==t).map(([e,n])=>({areaId:e,name:a.areas?.[e]?.name??e,ids:n.filter(i=>Ie(nt(i)))})).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function jd(a){return a.entities?un(a).unassigned:[]}var qo={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},jh=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Bh=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Yo(a,t){let e=a.entities?.[t]?.device_id,n=e&&!un(a).hubs.has(e)?un(a).domains.get(e):void 0;return n&&[...n].some(i=>jh.has(i))?!1:!Bh.test(`${t} ${a.states[t]?.attributes.friendly_name??""}`)}function Bd(a,t,e,n){let i=e.climate?.[n];if(i==="none")return[];if(i)return a.states[i]?[i]:[];let s=qo[n],o=(u,f)=>K([u,f],e.points),r=t?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],l=r.filter(u=>o(u.x,u.z)).map(u=>u.entity_id),d=new Set(r.filter(u=>!o(u.x,u.z)).map(u=>u.entity_id)),c=[...new Set([...Yt(a,e.area_id).filter(u=>!d.has(u)),...l])],p=c.filter(u=>u.startsWith("sensor.")&&a.states[u]?.attributes.device_class===s&&(e.outdoor||Yo(a,u)));if(p.length)return p;let h=Xo[n];return h?c.filter(u=>u.startsWith("climate.")&&typeof a.states[u]?.attributes[h]=="number"):[]}var Xo={temperature:"current_temperature",humidity:"current_humidity"};function Qo(a){return a.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Kd(a,t){return!!a.entities&&un(a).hubs.has(t)}function Jo(a,t){return a.entities?un(a).power.get(t)??[]:[]}function et(a,t,e){let i=a.states[t]?.attributes.friendly_name??a.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let s=i.slice(e.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return i}function gi(a){return!a||a.state==="unavailable"||a.state==="unknown"}function Zo(a){return!!a&&a.entity_id.startsWith("sensor.")&&a.attributes.device_class==="enum"}function bi(a,t,e=null){if(a==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(a==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(a){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Kh(a,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],s=t[(n+1)%t.length],o=s[0]-i[0],r=s[1]-i[1],l=o*o+r*r||1,d=Math.min(1,Math.max(0,((a[0]-i[0])*o+(a[1]-i[1])*r)/l));e=Math.min(e,Math.hypot(a[0]-i[0]-o*d,a[1]-i[1]-r*d))}return e}function Ud(a,t,e=[]){if(a.points.length<3||!t.length)return[];let n=a.points,i=n.map(y=>y[0]),s=n.map(y=>y[1]),o=Math.min(...i),r=Math.min(...s),l=Math.max(...i),d=Math.max(...s),c=Math.min(l-o,d-r),p=Math.max(.1,Math.min(.25,c/8)),h=Math.min(.35,c/5),u=jt(n),f=[];for(let y=o+p/2;y<l;y+=p)for(let $=r+p/2;$<d;$+=p){let w=[y,$];if(!K(w,n))continue;let E=Kh(w,n);E<h||f.push({p:w,wall:E})}f.length||f.push({p:u,wall:0});let g=[...e],b=[],_=Math.min(.7,c/4);for(let y of t){let $=nt(y)==="light",w=f[0].p,E=-1/0;for(let{p:M,wall:R}of f){let T=g.length?Math.min(...g.map(A=>Math.hypot(M[0]-A[0],M[1]-A[1]))):3,L=Math.hypot(M[0]-u[0],M[1]-u[1]),P=Math.min(T,3)*2;L<_&&!$&&(P-=10),P-=$?L*.35:R*1.2,P>E+1e-9&&(E=P,w=M)}let x=[Math.round(w[0]*100)/100,Math.round(w[1]*100)/100];g.push(x),b.push({entity_id:y,x:x[0],z:x[1],y:null,mount:null})}return b}var Uh=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Gh=new Set(["garage","gate"]);function Hd(a,t,e=!1){let n=new Map;return t.length&&a.forEach((i,s)=>{let o=e&&t.length===1?t[0]:t[s];o&&n.set(i.id,o)}),n}function Gd(a,t){let e=new Map,n=(s,o)=>s==="none"?null:s??o??null,i=(s,o)=>{let r=n(s.cover,o);return{cover:r,contact:n(s.contact,void 0),tilt:s.tilt==="none"?null:s.tilt,contact2:s.leaves===2&&s.contact2&&s.contact2!=="none"?s.contact2:null,lock:(s.type==="door"||s.type==="window"&&s.sill<=.01)&&s.lock&&s.lock!=="none"?s.lock:null,tilt2:s.leaves===2&&s.tilt2&&s.tilt2!=="none"?s.tilt2:null,position:r&&nt(r)==="cover"&&s.position&&s.position!=="none"?s.position:null,positionInverted:!!s.position_inverted,tiltAngle:s.tilt_angle&&s.tilt_angle!=="none"?s.tilt_angle:null,tiltMax:s.tilt_max??null,tiltOffset:s.tilt_offset??null,tiltInvert:!!s.tilt_invert,shut:!!s.shut,...s.contact_invert?{contactInvert:!0}:{}}};for(let s of t){for(let o of s.rooms){let r=s.openings.filter(g=>g.room_id===o.id).sort((g,b)=>g.edge-b.edge||g.offset-b.offset);if(!r.length)continue;let l=Yt(a,o.area_id),d=g=>a.states[g]?.attributes.device_class,c=l.filter(g=>nt(g)==="cover"&&Uh.has(d(g))),p=r.filter(g=>g.type==="window"),h=r.filter(g=>g.type==="garage"),u=Hd(p,c,!0),f=Hd(h,l.filter(g=>nt(g)==="cover"&&Gh.has(d(g)??"")));for(let g of r){let b=g.type==="window"?u:g.type==="garage"?f:null;e.set(g.id,i(g,b?.get(g.id)))}}for(let o of s.openings)e.has(o.id)||e.set(o.id,i(o))}return e}var qh=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function tr(a){if(!a||gi(a))return null;let t=a.attributes.window_state;for(let e of[typeof t=="string"?t:null,a.state]){if(!e)continue;let n=qh.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}function _i(a){return!!a&&/^(switch|button|input_button)\./.test(a)}function hn(a,t){let e=new Map,n=[];for(let o of t){let r=nt(o)==="camera"?`camera:${o}`:a.entities?.[o]?.device_id??`entity:${o}`,l=e.get(r);l||(e.set(r,l=[]),n.push(r)),l.push(o)}let i=n.map(o=>{let r=e.get(o),l=r.find(d=>!a.entities?.[d]?.name)??r[0];return{primary:l,others:r.filter(d=>d!==l)}}),s=new Map(t.map((o,r)=>[o,r]));return i.sort((o,r)=>s.get(o.primary)-s.get(r.primary))}function Yh(a,t){return hn(a,t).map(e=>e.primary)}var Go={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Xh=/(cam|doorbell|klingel|tür|door|entry|cctv)/i,qd=new Set(["tv_board","tv_wall"]);function Yd(a,t){let e=a.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),s=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===s||s.length>=3&&i.includes(s)}function Yn(a){return qd.has(a)||!!wa(a)}function yi(a){return Yn(a)||a==="desk"||a==="fridge_smart"}var Vd={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function er(a,t){return t.startsWith("sensor.")&&a.states[t]?.attributes.device_class==="power"}function Qh(a,t){if(er(a,t))return t;let e=a.entities?.[t]?.device_id;return e?Jo(a,e).find(n=>n!==t)??null:null}function Re(a,t){let e=new Map;for(let n of t){let i=new Set([...n.furniture.flatMap(s=>[s.entity,s.power]),...n.placements.map(s=>s.entity_id)].filter(s=>!!s&&s!=="none"));for(let s of n.furniture){let o=s.type in Vd,r=Fe(s.type),l=Ye(s.type),d=o?Vd[s.type]:Go[s.type]??(te(s.type)?Go.robot_vacuum:r?Go.radiator:l?Xh:void 0);if(!d&&s.entity==null&&s.power==null)continue;let c=n.rooms.find(g=>g.points.length>=3&&K([s.x,s.z],g.points))??(s.type==="awning"?Qi(n).find(g=>K([s.x,s.z],g.points)):void 0),p=c?Yh(a,Yt(a,c.area_id)):[],h=g=>`${g} ${et(a,g)}`,u=s.entity==="none"?null:s.entity??null;if(s.entity==null){let g=p.filter(b=>!i.has(b));if(o){let b=g.filter(_=>nt(_)==="light");u=b.find(_=>d.test(h(_)))??b[0]??null}else if(te(s.type)){let b=c?.area_id??null;u=Object.keys(a.entities??{}).find(_=>_.startsWith("vacuum.")&&!i.has(_)&&!qn(a,_)&&pe(a,_)===b)??null}else if(l){let b=g.filter(_=>nt(_)==="camera");u=b.find(_=>d.test(h(_)))??(b.length===1?b[0]:null)}else if(r||s.type==="ac_unit"){let b=g.filter(_=>nt(_)==="climate");u=b.find(_=>d.test(h(_)))??b[0]??null}else if(Yn(s.type)){let b=g.filter(_=>nt(_)==="media");u=b.find(_=>a.states[_]?.attributes.device_class==="tv")??b.find(_=>d?.test(h(_)))??(qd.has(s.type)?b[0]??null:null)}else s.type==="awning"?u=g.find(b=>b.startsWith("cover.")&&(d?.test(h(b))||a.states[b]?.attributes.device_class==="awning"))??null:d&&(u=g.find(b=>["switch","media","fan"].includes(nt(b)??"")&&d.test(h(b)))??null);u&&i.add(u)}let f=s.power==="none"?null:s.power??null;s.power==null&&(f=u?Qh(a,u):null,!f&&d&&c&&!o&&(f=Yt(a,c.area_id).find(b=>er(a,b)&&!i.has(b)&&d.test(h(b)))??null),f&&i.add(f)),(u||f)&&e.set(s.id,{entity:u,power:f})}}return e}var Cd=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Jh={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Xd(a,t){let e=t.car??{},n=p=>p&&p!=="none"?p:null,i=n(e.device)??n(t.entity),s=i?a.entities?.[i]?.device_id:null,o=s&&a.entities?Object.values(a.entities).filter(p=>p.device_id===s).map(p=>p.entity_id):[],r=p=>`${p} ${a.states[p]?.attributes.friendly_name??""} ${a.entities?.[p]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(p,h,u)=>o.find(f=>h.includes(f.split(".")[0])&&Jh[p].test(r(f))&&(!u||u(f)))??null,d=p=>String(a.states[p]?.attributes.unit_of_measurement??""),c=p=>String(a.states[p]?.attributes.device_class??"");return{soc:n(e.soc)??o.find(p=>p.startsWith("sensor.")&&c(p)==="battery")??l("soc",["sensor"],p=>d(p)==="%"),range:n(e.range)??l("range",["sensor"],p=>/km|mi/.test(d(p)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],p=>/^k?W$/.test(d(p)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??o.find(p=>p.startsWith("binary_sensor.")&&c(p)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??o.find(p=>p.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??o.find(p=>p.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??o.find(p=>p.startsWith("device_tracker."))??null}}function Qd(a,t,e){if(e==="none")return null;if(e)return e;let n=t?a.entities?.[t]?.device_id:null;if(!n||!a.entities)return null;for(let i of Object.values(a.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(Cd.test(i.translation_key??"")||Cd.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function Jd(a,t){let e=t.domains??[];if(!t.area&&!e.length)return a;let n=i=>{let s=e.indexOf(i.id.slice(0,i.id.indexOf(".")));return(t.area&&i.area===t.area?2:0)+(s<0?0:1/(s+1))};return a.map((i,s)=>({o:i,i:s,s:n(i)})).sort((i,s)=>s.s-i.s||i.i-s.i).map(i=>i.o)}function Zh(a,t){if(!a)return[];let e=n=>{let i=a.entities?.[n];return i?.area_id??(i?.device_id?a.devices?.[i.device_id]?.area_id:null)??null};return Object.keys(a.states??{}).filter(t).map(n=>{let i=e(n),s=i?a.areas?.[i]?.name:void 0;return{id:n,label:`${et(a,n,s)}${s?` \xB7 ${s}`:""}`,...i?{area:i}:{}}}).sort((n,i)=>n.label.localeCompare(i.label))}var ps=class{byKey=new Map;byFilter=new WeakMap;snapshot=null;get(t,e,n){this.check(t);let i=typeof e=="string"?this.byKey.get(e):this.byFilter.get(e);if(i)return i;let s=Zh(t,n);return typeof e=="string"?this.byKey.set(e,s):this.byFilter.set(e,s),s}check(t){let e=this.snapshot,n=Object.keys(t?.states??{}).length;e&&e.entities===t?.entities&&e.devices===t?.devices&&e.areas===t?.areas&&e.count===n||(this.snapshot={entities:t?.entities,devices:t?.devices,areas:t?.areas,count:n},this.byKey.clear(),this.byFilter=new WeakMap)}};var Zd=40,nr=class extends Ge{static formAssociated=!0;static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},prefer:{attribute:!1},groups:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};partition=null;blurTimer;ranked=null;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this.prefer={},this.groups=null,this._query="",this._open=!1,this._cursor=0,this.addEventListener("click",t=>{t.composedPath()[0]===this&&this.renderRoot?.querySelector?.("input")?.focus()})}get open(){return this._open}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=r=>{let l=`${r.label} ${r.id}`.toLowerCase();return e.every(d=>l.includes(d))},i=this.fixed.filter(r=>!t||n(r)),s=this.grouped(this.rankedOptions()),o=t?s.filter(n):s;return[...i,...o.slice(0,Zd)]}fits(t){return(this.prefer.domains??[]).includes(t.id.slice(0,t.id.indexOf(".")))}grouped(t){if(!this.groups||!this.prefer.domains?.length)return t;let e=t;if(this.partition?.from===e&&this.partition.domains===this.prefer.domains)return this.partition.list;let n=[...t.filter(i=>this.fits(i)),...t.filter(i=>!this.fits(i))];return this.partition={from:e,domains:this.prefer.domains,list:n},n}headings(t){let e=t.map(()=>null);if(!this.groups||!this.prefer.domains?.length)return e;let n=t.filter(s=>s.id.includes(".")),i=n.filter(s=>this.fits(s)).length;return!i||i===n.length||(e[t.indexOf(n[0])]=this.groups.likely,e[t.indexOf(n[i])]=this.groups.other),e}rankedOptions(){let t=`${this.prefer.area??""}|${(this.prefer.domains??[]).join(",")}`,e=this.ranked;if(e&&e.options===this.options&&e.prefer===t)return e.list;let n=Jd(this.options,this.prefer);return this.ranked={options:this.options,prefer:t,list:n},n}onQuery(){let t=this.hits,e=this._query.trim()?t.findIndex(n=>n.id.includes(".")):-1;this._cursor=Math.max(0,e)}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(i=>e.every(s=>`${i.label} ${i.id}`.toLowerCase().includes(s))).length:this.options.length;return Math.max(0,n-Zd)}openList(){clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}updated(t){this._open&&t.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[],n=this.headings(e),i=this.value&&this.value.includes(".")?this.value:null;return m`<div class="wrap" @mousedown=${s=>s.target?.localName!=="input"&&s.preventDefault()}>
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${t?t.label:this.placeholder}
        .value=${this._open?this._query:t?.label??""}
        @focus=${()=>this.openList()}
        @click=${()=>{this._open||this.openList()}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${s=>{this._query=s.target.value,this._open=!0,this.onQuery()}}
        @keydown=${this.onKey}
      />
      ${this._open?m`<ul class="list" role="listbox">
            ${e.length?v:m`<li class="empty">–</li>`}
            ${e.map((s,o)=>m`${n[o]?m`<li class="group" role="presentation">${n[o]}</li>`:v}<li
                role="option"
                aria-selected=${s.id===this.value}
                class="${o===this._cursor?"cursor":""} ${s.id===this.value?"chosen":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.choose(s.id)}
              >
                <span>${s.label}</span>${s.id.includes(".")?m`<small>${s.id}</small>`:v}
              </li>`)}
            ${this.leftOut>0?m`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:v}
          </ul>`:v}
      ${i?m`<small class="picked" title=${i}>${i}</small>`:v}
    </div>`}static styles=[Wn,$t`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--fp3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--fp3d-muted);
      }
      input:focus {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--fp3d-accent);
      }
      .picked {
        display: block;
        margin-top: 2px;
        color: var(--fp3d-muted);
        font-size: 11px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      li.group {
        color: var(--fp3d-muted);
        cursor: default;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        padding: 6px 8px 2px;
      }
      li.group:hover {
        background: none;
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `]};Ue("fp3d-entity-picker",nr);var tf=new URL(import.meta.url),ef=new URL("./home-3d-3d.js?v=6f605c5b3474",tf).href,tc;function ze(){return tc??=import(ef),tc}var nf="home3d-recipes",vi="packs",us=null;function nc(){return us||(us=new Promise(a=>{try{if(typeof indexedDB>"u")return a(null);let t=indexedDB.open(nf,1);t.onupgradeneeded=()=>t.result.createObjectStore(vi),t.onsuccess=()=>a(t.result),t.onerror=()=>a(null),t.onblocked=()=>a(null)}catch{a(null)}}),us)}async function ec(a){let t=await nc();return t?new Promise(e=>{try{let n=t.transaction(vi,"readonly").objectStore(vi).get(a);n.onsuccess=()=>e(n.result&&typeof n.result.hash=="string"?n.result:null),n.onerror=()=>e(null)}catch{e(null)}}):null}var ic={async read(a,t){let e=await ec(a);return e&&e.hash===t?e.items:{}},async write(a,t,e){let n=await nc();if(!n)return;let i=await ec(a),s=i&&i.hash===t?i.items:{},o={hash:t,items:{...s,...Object.fromEntries(e.map(r=>[r.id,r]))}};try{n.transaction(vi,"readwrite").objectStore(vi).put(o,a)}catch{}}};var sc=ic;async function sf(a,t){let e=Io().find(n=>n.id===a)?.hash;if(!e)return t;try{let n=await sc.read(a,e),i=t.filter(s=>n[s]).map(s=>n[s]);return i.length&&Po(a,e,i),t.filter(s=>!n[s])}catch{return t}}var of=15,fn=null,ir=new Map;async function ue(a,t){let e=[];for(let[n,i]of ya(t))for(let s of i){let o=`${n}/${s}`,r=ir.get(o);r||(r=rf(a,n,s).finally(()=>ir.delete(o)),ir.set(o,r)),e.push(r)}await Promise.all(e)}function rf(a,t,e){if(!fn){let n={hass:a,wanted:new Map,done:Promise.resolve()};n.done=new Promise(i=>setTimeout(i,of)).then(()=>af(n)),fn=n}return fn.wanted.set(t,(fn.wanted.get(t)??new Set).add(e)),fn.done}async function af(a){fn===a&&(fn=null),await Promise.all([...a.wanted].map(async([t,e])=>{try{let n=await sf(t,[...e]);if(!n.length)return;let i=await El(a.hass,t,n);Po(t,i.hash,i.items),i.hash&&await sc.write(t,i.hash,i.items).catch(()=>{})}catch{}}))}function oc(a){let t=new Set;for(let e of a.floors)for(let n of e.furniture)for(let i of[n.type,n.vehicle,...(n.types??[]).map(s=>s.vehicle),...(n.rack?.slots??[]).map(s=>s.type)])i&&$e(i)&&t.add(i);return[...t]}function rc(a){if(!a.hasFloor)return"hint_empty";if(a.placing)return"hint_place";if(a.wallPick)return"hint_wall_pick";if(a.kerbPick)return"hint_kerb_pick";if(a.fixedHint)return"fixed_drag_hint";if(a.tool==="outdoor"&&a.outdoorFree)return"hint_outdoor_free";if(a.tool==="pool")return a.jointPlace?"hint_joint_place":a.pipeMode?a.poolArea?a.pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool":a.poolTech?"hint_pool_tech":"hint_pool";if(a.tool==="select"){if(!a.rooms)return"hint_first_room";if(a.selected==="furniture")return"hint_sel_furniture";if(a.selected==="opening")return"hint_sel_opening";if(a.selected==="device")return"hint_sel_device"}return`hint_${a.tool}`}function Oe(a=typeof matchMedia=="function"?t=>matchMedia(t):void 0){return a?a("(any-pointer: coarse)").matches&&!a("(any-pointer: fine)").matches:!1}var lf={hint_place:"hint_place_touch",hint_polygon:"hint_polygon_touch",hint_outdoor_free:"hint_outdoor_free_touch",hint_wall_pick:"hint_wall_pick_touch",hint_kerb_pick:"hint_kerb_pick_touch",fixed_drag_hint:"fixed_drag_hint_touch",multi_hint:"multi_hint_touch",hint_furniture:"hint_furniture_touch",hint_opening:"hint_opening_touch"};function Xn(a,t,e,n){if(!a)return e(t,n);let i=lf[t];return i?e(i,n):cf(e(t,n))}var df=/\b(?:Shift|Ctrl|Strg|Alt|Esc|Enter|Del|Entf|Supr|Backspace)\b|arrow keys|Pfeiltasten|^[RL]\s/;function cf(a){let t=a.split(" \xB7 "),e=t.filter(n=>!df.test(n.trim()));return e.length&&e.length<t.length?e.join(" \xB7 "):a}var pf="security camera";function hs(a){return!!a.tags?.includes(pf)}function ac(a){return a.toLowerCase().replace(/\s+/g," ").trim().replace(/^uvc /,"")}function uf(a,t){let e=ac(a??"");if(!e)return null;let n=null;for(let i of t)for(let s of i.items)if(hs(s))for(let o of s.tags??[]){let r=ac(o);!(/\d/.test(r)||/^ai \S/.test(r))||!(e===r||e.startsWith(`${r} `))||(!n||r.length>n.len)&&(n={type:Zt(i.id,s.id),len:r.length})}return n?.type??null}function mn(a,t,e){let n=a.entities?.[t]?.device_id;return n?uf(a.devices?.[n]?.model,e):null}function Qe(a,t,e){let n=a.placements.find(c=>c.entity_id===t);if(a.furniture=a.furniture.filter(c=>c.look_of!==t),!n||!e)return;let[i,s,o]=_t(e),r=Tt(e),l={id:j("furniture"),type:e,x:n.x,z:n.z,rotation:n.rotation??0,w:i,d:s,h:o,variant:null,entity:"none",look_of:t,name:n.name??null,...n.locked?{locked:!0}:{}};if(a.furniture.push(l),!r||!hs(r))return;let d=r.mount==="ceiling";if(d!==(n.mount==="ceiling")){let c=n.mount==="ceiling";n.fov??=c?360:90,n.reach??=c?3:4.5,n.tilt??=c?65:20}d?(n.mount="ceiling",n.y=null):(n.mount="wall",n.y=Math.round(((r.wall_y??1)+o/2)*1e3)/1e3)}var fs=class{past=[];future=[];pool=new Map;chars=0;home=void 0;doc=null;run=null;now;maxSteps;maxChars;constructor(t={}){this.now=t.now??Date.now,this.maxSteps=t.maxSteps??100,this.maxChars=t.maxChars??25e6}get size(){return this.chars}get steps(){return this.past.length}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}adopt(t,e){let n=e===this.home&&t===this.doc;return n||this.clear(),this.home=e,this.doc=t,n}record(t,e,n,i=null){this.adopt(t,n),this.push(t,i),this.track(e)}track(t){this.doc=t}push(t,e=null,n=500){let i=this.now(),s=e!==null&&this.run?.key===e&&i-this.run.at<=n&&this.past.length>0;this.run=e===null?null:{key:e,at:i};for(let o of this.future)this.release(o);this.future=[],!s&&(this.past.push(this.store(t)),this.trim())}undo(t){let e=this.past.pop();return e?(this.run=null,this.future.push(this.store(t)),this.release(e),this.doc=this.load(e)):null}redo(t){let e=this.future.pop();return e?(this.run=null,this.past.push(this.store(t)),this.release(e),this.trim(),this.doc=this.load(e)):null}clear(){this.past=[],this.future=[],this.pool.clear(),this.chars=0,this.run=null}trim(){for(;this.past.length>this.maxSteps||this.chars>this.maxChars&&this.past.length>1;)this.release(this.past.shift())}store(t){let e=[];for(let[n,i]of Object.entries(t))if(n==="floors"&&Array.isArray(i))e.push([n,i.map(s=>this.keep(JSON.stringify(s)))]);else{let s=JSON.stringify(i);s!==void 0&&e.push([n,this.keep(s)])}return e}load(t){let e={};for(let[n,i]of t)e[n]=Array.isArray(i)?i.map(s=>JSON.parse(s)):JSON.parse(i);return e}keep(t){let e=this.pool.get(t);return e?(e.n++,e.s):(this.pool.set(t,{s:t,n:1}),this.chars+=t.length,t)}release(t){for(let[,e]of t)for(let n of Array.isArray(e)?e:[e]){let i=this.pool.get(n);i&&--i.n===0&&(this.pool.delete(n),this.chars-=n.length)}}};var gs=new WeakMap;function ms(a){let t=a;for(let e=gs.get(t);e;e=gs.get(t))t=e;return t}var lc=new WeakMap;function dc(a){if(!a)return 0;let t=lc.get(a);return t===void 0&&lc.set(a,t=Object.keys(a).length),t}var bs=class{watched=new Set;all=!0;active=!1;paused=0;wrapped=new WeakMap;entityLists;constructor(t={}){this.entityLists=t.entityLists??!0}begin(t=!1){t||(this.watched.clear(),this.all=!1),this.active=!0}end(){this.active=!1}pause(t){this.paused++;try{return t()}finally{this.paused--}}get rendering(){return this.active}get recording(){return this.active&&!this.paused}wrap(t){let e=this.wrapped.get(t);if(e)return e;let n=this.watchStates(t.states),i=new Proxy(t,{get:(s,o,r)=>o==="states"?n:Reflect.get(s,o,r)});return this.wrapped.set(t,i),gs.set(i,t),i}watchStates(t){if(!t)return t;let e=new Proxy(t,{get:(n,i,s)=>(typeof i=="string"&&this.recording&&this.watched.add(i),Reflect.get(n,i,s)),has:(n,i)=>(typeof i=="string"&&this.recording&&this.watched.add(i),Reflect.has(n,i)),ownKeys:n=>(this.recording&&(this.all=!0),Reflect.ownKeys(n))});return gs.set(e,t),e}matters(t,e){if(!t||!e||this.all)return!0;t=ms(t),e=ms(e);let n=t,i=e;for(let r of new Set([...Object.keys(n),...Object.keys(i)]))if(r!=="states"&&n[r]!==i[r]&&!(typeof n[r]=="function"&&typeof i[r]=="function"))return!0;let s=ms(t.states??{}),o=ms(e.states??{});if(s===o)return!1;if(this.entityLists&&dc(s)!==dc(o))return!0;for(let r of this.watched)if(s[r]!==o[r])return!0;if(this.entityLists){for(let r in o)if(!(r in s))return!0}return!1}};function De(a,t){let e=a.points,n=e[t],i=e[(t+1)%e.length],s=Math.hypot(i[0]-n[0],i[1]-n[1])||1,o=[(i[0]-n[0])/s,(i[1]-n[1])/s],r=[-o[1],o[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];K([l[0]+r[0]*.02,l[1]+r[1]*.02],e)||(r=[-r[0],-r[1]]);let d=[r[1],-r[0]];return{a:n,b:i,u:o,n:r,length:s,rightward:o[0]*d[0]+o[1]*d[1]>0}}function mt(a,t){let e=t[0]-a.a[0],n=t[1]-a.a[1];return{s:e*a.u[0]+n*a.u[1],d:e*a.n[0]+n*a.n[1]}}function ie(a,t,e){return[a.a[0]+a.u[0]*t+a.n[0]*e,a.a[1]+a.u[1]*t+a.n[1]*e]}var hf=.45;function gn(a,t){let e=[];for(let n of t.openings){if(n.wall)continue;let i=t.rooms.find(r=>r.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s,d:o}=mt(a,ne(i,n.edge,n.offset));Math.abs(o)>.4||s<-.05||s>a.length+.05||e.push(ff(n,s))}return e}function ff(a,t){return{kind:"opening",id:a.id,s0:t-a.width/2,s1:t+a.width/2,y0:a.sill,y1:a.sill+a.height,d:0}}function We(a,t,e,n=hf){let i=[];for(let s of t.furniture){if(s.type==="stairwell"||s.type==="parking")continue;let o=K([s.x,s.z],e.points),r=Wt(s).map(u=>mt(a,u)),l=Math.min(...r.map(u=>u.d)),d=Math.min(...r.map(u=>u.s)),c=Math.max(...r.map(u=>u.s)),p=mt(a,[s.x,s.z]);if(!o&&p.d<=0||p.d<=0||l>n||l<-.3||c<.02||d>a.length-.02)continue;let h=Ht(t,s);i.push({kind:"furniture",id:s.id,s0:d,s1:c,y0:h,y1:h+s.h,d:l})}return i}function _s(a,t,e){let n=i=>Math.round(i*1e3)/1e3;return{x:n(t.x+a.u[0]*e),z:n(t.z+a.u[1]*e)}}var sr=.3;function Xt(a,t){let e=a.from?t(a.from):null,n=a.to?t(a.to):null,i=a.height??sr,s=[];if(a.heights)e&&s.push([e.x,e.y,e.z]),a.points.forEach(([o,r],l)=>s.push([o,a.heights?.[l]??i,r])),n&&s.push([n.x,n.y,n.z]);else{if(!e||!n)return[];s.push([e.x,e.y,e.z],[e.x,i,e.z]);for(let[o,r]of a.points)s.push([o,i,r]);s.push([n.x,i,n.z],[n.x,n.y,n.z])}return s.filter((o,r)=>r===0||ys(o,s[r-1])>.001)}function ys(a,t){return Math.hypot(t[0]-a[0],t[1]-a[1],t[2]-a[2])}function or(a){let t=0;for(let e=1;e<a.length;e++)t+=ys(a[e-1],a[e]);return t}function cc(a,t){if(a.length<2)return null;let e=Math.max(0,t);for(let n=1;n<a.length;n++){let[i,s]=[a[n-1],a[n]],o=ys(i,s);if(!(o<1e-6)){if(e<=o||n===a.length-1){let r=Math.min(1,e/o),l=[(s[0]-i[0])/o,(s[1]-i[1])/o,(s[2]-i[2])/o];return{p:[i[0]+(s[0]-i[0])*r,i[1]+(s[1]-i[1])*r,i[2]+(s[2]-i[2])*r],dir:l,seg:n-1}}e-=o}}return null}function Qn(a,t){let e=null,n=0;for(let i=1;i<a.length;i++){let[s,o]=[a[i-1],a[i]],r=[o[0]-s[0],o[1]-s[1],o[2]-s[2]],l=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],d=l>0?Math.max(0,Math.min(1,((t[0]-s[0])*r[0]+(t[1]-s[1])*r[1]+(t[2]-s[2])*r[2])/l)):0,c=[s[0]+r[0]*d,s[1]+r[1]*d,s[2]+r[2]*d],p=ys(c,t);(!e||p<e.d)&&(e={at:n+Math.sqrt(l)*d,d:p,seg:i-1,p:c}),n+=Math.sqrt(l)}return e}function he(a,t,e,n){let[i,s]=ie(a,t,n);return[i,e,s]}function pc(a,t,e,n){let i=ie(a,0,t),s=ie(e,0,n),o=a.u[0]*-e.u[1]-a.u[1]*-e.u[0];if(Math.abs(o)<1e-6)return null;let r=s[0]-i[0],l=s[1]-i[1],d=(r*-e.u[1]-l*-e.u[0])/o;return[i[0]+a.u[0]*d,i[1]+a.u[1]*d]}var $i="application/x-home3d-entity",Ne=10,uc="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10",mf={vertex:!0,room:!0,device:!0,pet:!0,opening:!0,furniture:!0,furnset:!0,rotate:!0,resize:!0,outdoor:!0,roofmove:!0,roofcorner:!0,roofvertex:!0,outvertex:!0,outbox:!0,pipept:!0,poolport:!0,pooldev:!0,pooljoint:!0,solarmove:!0,solarturn:!0,cablept:!0,holopt:!0,bgmove:!0,bgscale:!0,bgrotate:!0,wallmove:!0},rr=new Set(Object.keys(mf));function $s(a,t){let e=[];for(let n of a.openings){if(n.id===t.id)continue;(t.wall?n.wall===t.wall:!n.wall&&n.room_id===t.room_id&&n.edge===t.edge)&&e.push({offset:n.offset,width:n.width})}return e}var ar=(a,t)=>{let e=((a+t)%360+360)%360;return e>180?e-360:e},xs={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table"],switches:["wall_switch","wall_socket","wifi_ap","water_heater"]},hc=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),xi=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),fc={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},bn=10,k=a=>Math.round(a*1e3)/1e3,wi=.06;function Kt(a,t){a&&Object.assign(a,t)}function vs(a,t){if(a.length<3)return a.slice(1);let e=a[0],n=a[a.length-1],i=0,s=-1,o=Math.hypot(n.s-e.s,n.y-e.y)||1;for(let r=1;r<a.length-1;r++){let l=a[r],d=Math.abs((n.s-e.s)*(e.y-l.y)-(e.s-l.s)*(n.y-e.y))/o;d>i&&([i,s]=[d,r])}return i<=t||s<0?[]:[...vs(a.slice(0,s+1),t),a[s],...vs(a.slice(s),t)]}function mc(a){if(a.length<2)return a;let t=o=>Math.round(o*20)/20,e=[{s:a[0].s,y:a[0].y}];for(let o=1;o<a.length;o++){let r=e[e.length-1],l=a[o],c=Math.abs(l.s-r.s)>=Math.abs(l.y-r.y)?{s:t(l.s),y:r.y}:{s:r.s,y:t(l.y)},p=e.length>1?e[e.length-2]:null;p&&(p.y===r.y&&c.y===r.y||p.s===r.s&&c.s===r.s)&&e.pop(),!(Math.hypot(c.s-e[e.length-1].s,c.y-e[e.length-1].y)<.08&&o<a.length-1)&&e.push(c)}let n=a[a.length-1],i=e[e.length-1];e.pop();let s=e[e.length-1];return s&&Math.abs(n.s-s.s)>=.08&&Math.abs(n.y-s.y)>=.08&&e.push(s.y===i.y||e.length<2?{s:t(n.s),y:s.y}:{s:s.s,y:t(n.y)}),e.push({s:n.s,y:n.y}),e}function Je(a,t,e){let[n,,i]=he(a,t,0,e);return[k(n),k(i)]}function ki(a,t){let e=Xt(a,t),n=0;for(let i=1;i<e.length;i++)n+=Math.hypot(e[i][0]-e[i-1][0],e[i][1]-e[i-1][1],e[i][2]-e[i-1][2]);return n}var lr={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Ze=a=>Bt(a)??Tt(a),gc=new Set(["parking","stairwell","rug","grid_point","waste_bin","mailbox","wall_switch","wall_socket","wifi_ap","water_heater"]);function xe(a){return Hn.includes(a)||bt(a)!==null}function ws(a){let t=Tt(a);return t?.family==="meter"&&(t.tags??[]).some(e=>/^(gas|water|wasser)$/i.test(e))}function bc(a,t,e){let n=e[0]-t[0],i=e[1]-t[1],s=n*n+i*i||1,o=Math.min(1,Math.max(0,((a[0]-t[0])*n+(a[1]-t[1])*i)/s));return Math.hypot(a[0]-t[0]-n*o,a[1]-t[1]-i*o)}function dr(a){return a.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Mi={language:"en"};function Et(a){return/^(sensor|input_number|number)\./.test(a)}function Ei(a){return/^(binary_sensor|input_boolean)\./.test(a)}function ks(a){let t=a.floors.some(e=>e.rooms.length>0);return{show:!t,steps:[{step:"floor",done:a.floors.length>0},{step:"room",done:t},{step:"furniture",done:a.floors.some(e=>e.furniture.length>0)}]}}function _c(a,t){return t&&ks(a).show}function yc(a,t){for(let e of t)for(let[n,i]of Object.entries(Object.getOwnPropertyDescriptors(e.prototype)))if(n!=="constructor"){if(Object.prototype.hasOwnProperty.call(a.prototype,n))throw new Error(`editor part ${e.name}: ${n} is defined twice`);Object.defineProperty(a.prototype,n,i)}}var vc=.25,Ms=a=>Math.round(a*1e3)/1e3;function cr(a,t,e,n,i){let s=a.rooms.find(o=>o.points.length>=3&&K([t,e],o.points));return!s||K([n,i],s.points)?[n,i]:K([n,e],s.points)?[n,e]:K([t,i],s.points)?[t,i]:[t,e]}function se(a,t,e,n){let i=Math.hypot(n[0]-e[0],n[1]-e[1]);if(i<.01)return!1;let s=[(n[0]-e[0])/i,(n[1]-e[1])/i],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),r=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return a.rooms.some(l=>l.id!==t&&l.points.some((d,c)=>{let p=l.points[(c+1)%l.points.length];return o(d)>.02||o(p)>.02?!1:Math.min(i,Math.max(r(d),r(p)))-Math.max(0,Math.min(r(d),r(p)))>.05}))}function Es(a,t,e,n,i,s=.05){let o=a.rooms.find(h=>h.points.length>=3&&K([t.x,t.z],h.points));if(!o)return[e,n];let r=o.points,l=Vt(r)>=0?1:-1,d=Wt({...t}),c=e,p=n;for(let h=0;h<2;h++){let u=Wt({...t,x:c,z:p});for(let f=0;f<r.length;f++){let g=r[f],b=r[(f+1)%r.length],_=Math.hypot(b[0]-g[0],b[1]-g[1]);if(_<.05)continue;let y=[(b[0]-g[0])/_,(b[1]-g[1])/_],$=[-y[1]*l,y[0]*l],w=se(a,o.id,g,b)?i/2:0,E=0;u.forEach((x,M)=>{let R=(x[0]-g[0])*y[0]+(x[1]-g[1])*y[1];if(R<-.01||R>_+.01)return;let T=(x[0]-g[0])*$[0]+(x[1]-g[1])*$[1]-w,L=d[M];(L[0]-g[0])*$[0]+(L[1]-g[1])*$[1]-w<-s||T<E&&(E=T)}),E<-1e-4&&(c-=$[0]*E,p-=$[1]*E)}}return[Ms(c),Ms(p)]}function _n(a,t,e,n=vc){let i=pr(a,t,e,n);return i?{x:i.x,z:i.z,rotation:i.rotation}:null}function pr(a,t,e,n=vc,i={}){let s=i.roomId?a.rooms.find(c=>c.id===i.roomId&&c.points.length>=3):a.rooms.find(c=>c.points.length>=3&&K([t.x,t.z],c.points));if(!s)return null;let o=s.points,r=Vt(o)>=0?1:-1,l=e/2,d=null;for(let c=0;c<o.length;c++){let p=o[c],h=o[(c+1)%o.length],u=Math.hypot(h[0]-p[0],h[1]-p[1]);if(u<.3)continue;let f=[(h[0]-p[0])/u,(h[1]-p[1])/u],g=[-f[1]*r,f[0]*r],b=(t.x-p[0])*f[0]+(t.z-p[1])*f[1];if(b<0||b>u)continue;let y=se(a,s.id,p,h)?l:0,$=(t.x-p[0])*g[0]+(t.z-p[1])*g[1]-y,w=Math.atan2(-g[0],g[1])*180/Math.PI,E=T=>Math.abs((t.rotation-T+540)%360-180),x=[{rotation:w,extent:t.d/2},{rotation:w+90,extent:t.w/2},{rotation:w-90,extent:t.w/2}],M=i.turn?x[0]:x.reduce((T,L)=>E(L.rotation)<E(T.rotation)?L:T);if(!i.turn&&E(M.rotation)>50)continue;let R=$-M.extent;Math.abs(R)>n||d&&Math.abs(R)>=Math.abs(d.gap)||(d={x:Ms(t.x-g[0]*R),z:Ms(t.z-g[1]*R),rotation:(Math.round(M.rotation)%360+360)%360,roomId:s.id,edge:c,gap:R})}return d?{x:d.x,z:d.z,rotation:d.rotation,roomId:d.roomId,edge:d.edge}:null}var oe=Math.PI/180;function yn(a){let t=a.rotation??0;if(!t||a.points&&a.points.length>=3)return null;let e=t*oe;return{p:a.pivot??[(a.x0+a.x1)/2,(a.z0+a.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Jn(a,t,e=!1){if(!a)return t;let n=t[0]-a.p[0],i=t[1]-a.p[1],s=e?-a.s:a.s;return[a.p[0]+n*a.c-i*s,a.p[1]+n*s+i*a.c]}function re(a){let t=Math.min(a.x0,a.x1),e=Math.max(a.x0,a.x1),n=Math.min(a.z0,a.z1),i=Math.max(a.z0,a.z1),s=yn(a),o=a.axis==="x"?(l,d)=>[l,a.flip?i-d:n+d]:(l,d)=>[a.flip?e-d:t+d,l],r=s?(l,d)=>Jn(s,o(l,d)):o;return a.axis==="x"?{u0:t,u1:e,w:i-n,at:r}:{u0:n,u1:i,w:e-t,at:r}}function gf(a,t,e,n=1e-6){let[i,s]=Fc(a,t,e),o=re({...a,rotation:0});return i>=o.u0-n&&i<=o.u1+n&&s>=-n&&s<=o.w+n}function Ae(a){let t=re(a).w,e=a.eave_a,n=a.eave_b,i=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*oe),s=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*oe);if(a.shape==="flat"||a.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(a.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};if(a.shape==="mansard"){let l=Ec(t,e,n,i,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=i+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(i+s))):t/2,r=e+o*i;return{vr:o,rh:r,y:l=>l<=o?e+l*i:n+(t-l)*s}}function ur(a){let t=a.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var xc=.14;function wc(a,t){return!a.open&&Math.min(a.base,a.eave_a,a.eave_b)<t-.05}function kc(a,t){return Ae(a).rh-xc>t+.01}function Mc(a,t,e){let n=[];for(let i of ur(a)){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let s=re(i),o=Ae(i),r=t+e+xc,l=[],d=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*oe),c=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*oe);d>1e-6&&l.push((r-i.eave_a)/d),i.shape==="gable"&&c>1e-6&&l.push(s.w-(r-i.eave_b)/c);for(let p of l)p<=.01||p>=s.w-.01||i.shape==="gable"&&Math.abs(o.y(p)-r)>1e-6||n.push([s.at(s.u0,p),s.at(s.u1,p)])}return n}function bf(a,t){let e=a.length;if(e<3||Math.abs(t)<1e-9)return a.map(s=>[s[0],s[1]]);let n=yt(a)>=0?1:-1,i=[];for(let s=0;s<e;s++){let o=a[(s+e-1)%e],r=a[s],l=a[(s+1)%e],d=$c([r[0]-o[0],r[1]-o[1]]),c=$c([l[0]-r[0],l[1]-r[1]]),p=[d[1]*n,-d[0]*n],h=[c[1]*n,-c[0]*n],u=p[0]+h[0],f=p[1]+h[1],g=Math.hypot(u,f);if(g<1e-6){i.push([r[0]+p[0]*t,r[1]+p[1]*t]);continue}let b=(u*p[0]+f*p[1])/g,_=Math.min(4,1/Math.max(.25,b));i.push([r[0]+u/g*t*_,r[1]+f/g*t*_])}return i}function $c(a){let t=Math.hypot(a[0],a[1])||1;return[a[0]/t,a[1]/t]}function Fi(a){let t=a.map(n=>n[0]),e=a.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function Ss(a,t,e,n){let i=wt(a,{exterior:e,interior:n},t).walls.filter(p=>p.exterior&&!p.free);if(!i.length)return null;let s=p=>`${Math.round(p[0]*1e3)}:${Math.round(p[1]*1e3)}`,o=new Map,r=i.map(p=>({a:p.a,b:p.b}));for(let p of r)for(let h of[p.a,p.b])o.set(s(h),[...o.get(s(h))??[],p]);let l=new Set,d=null;for(let p of r){if(l.has(p))continue;l.add(p);let h=[p.a,p.b],u=p.b;for(;;){let f=(o.get(s(u))??[]).find(g=>!l.has(g));if(!f||(l.add(f),u=s(f.a)===s(u)?f.b:f.a,s(u)===s(h[0])))break;h.push(u)}h.length>=3&&s(u)===s(h[0])&&(!d||Math.abs(yt(h))>Math.abs(yt(d)))&&(d=h)}if(!d)return null;let c=[];for(let p=0;p<d.length;p++){let h=d[(p+d.length-1)%d.length],u=d[p],f=d[(p+1)%d.length],g=(u[0]-h[0])*(f[1]-u[1])-(u[1]-h[1])*(f[0]-u[0]);Math.abs(g)>1e-6&&c.push(u)}return c.length>=3?bf(c,e):null}var Si=Math.tan(30*oe);function Ec(a,t,e,n,i){let s=Math.min(a*.3,n>1e-6?2.4/n:a*.3),o=Math.min(a*.3,i>1e-6?2.4/i:a*.3),r=t+s*n,l=e+o*i,d=Math.min(a-o,Math.max(s,(l-r+Si*(a-o+s))/(2*Si))),c=r+(d-s)*Si;return{vla:s,vlb:o,yla:r,ylb:l,vr:d,rh:c,y:h=>h<=s?t+h*n:h<=d?r+(h-s)*Si:h<=a-o?l+(a-o-h)*Si:e+(a-h)*i}}function hr(a,t){let e=re(a),n=Ae(a),i=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),d=(C,W)=>[C,W,n.y(W)],c=d(r,-s),p=d(l,-s),h=d(l,i+o),u=d(r,i+o),f=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*oe),g=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*oe);if(a.shape==="pent"){let C=[c,p,h,u],W=[[0,n.y(0)],[i,n.y(i)]];return{faces:[C],rim:C,ridges:[[h,u]],gable:W,gables:[W,W]}}if(a.shape==="pyramid"){let C=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[c,p,C],[p,h,C],[h,u,C],[u,c,C]],rim:[c,p,h,u],ridges:[[c,C],[u,C],[p,C],[h,C]],gable:null,gables:[null,null]}}if(a.shape==="mansard"){let C=Ec(i,a.eave_a,a.eave_b,f,g),W=[[0,n.y(0)],[C.vla,C.yla],[C.vr,C.rh],[i-C.vlb,C.ylb],[i,n.y(i)]],G=[r,C.vla,C.yla],Y=[l,C.vla,C.yla],X=[r,i-C.vlb,C.ylb],it=[l,i-C.vlb,C.ylb],U=[r,C.vr,C.rh],Z=[l,C.vr,C.rh];return{faces:[[c,p,Y,G],[G,Y,Z,U],[U,Z,it,X],[X,it,h,u]],rim:[c,p,Y,Z,it,h,u,X,U,G],ridges:[[U,Z],[G,Y],[X,it]],gable:W,gables:[W,W]}}let[b,_]=fr(a)??["gable","gable"],y=mr(a,[b,_]),$=b==="gable"?[r,n.vr,n.rh]:[e.u0+y.d0,n.vr,n.rh],w=_==="gable"?[l,n.vr,n.rh]:[e.u1-y.d1,n.vr,n.rh],E=[r,y.vah,y.yh],x=[r,y.vbh,y.yh],M=[l,y.vah,y.yh],R=[l,y.vbh,y.yh],T=b==="halfhip",L=_==="halfhip",P=[[c,p,...L?[M]:[],w,$,...T?[E]:[]],[$,w,...L?[R]:[],h,u,...T?[x]:[]]];b==="hip"&&P.push([u,c,$]),T&&P.push([x,E,$]),_==="hip"&&P.push([p,h,w]),L&&P.push([M,R,w]);let A=[c,p,..._==="gable"?[w]:L?[M,R]:[],h,u,...b==="gable"?[$]:T?[x,E]:[]],V=[[$,w]];b==="hip"&&V.push([c,$],[u,$]),T&&V.push([E,$],[x,$]),_==="hip"&&V.push([p,w],[h,w]),L&&V.push([M,w],[R,w]);let S=[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]],z=[[0,n.y(0)],[y.vah,y.yh],[y.vbh,y.yh],[i,n.y(i)]],H=C=>C==="gable"?S:C==="halfhip"?z:null,D=[H(b),H(_)];return{faces:P,rim:A,ridges:V,gable:D[0]??D[1],gables:D}}function fr(a){if(a.shape!=="gable"&&a.shape!=="hip"&&a.shape!=="halfhip")return null;let t=a.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(a.end_u0),e(a.end_u1)]}function mr(a,t){let e=re(a),n=Ae(a),i=e.w,s=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*oe),o=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*oe),r=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?r/2:r,d=Math.min(n.y(0),n.y(i)),c=d+(n.rh-d)*.55,p=s>1e-6?Math.min(n.vr,(c-a.eave_a)/s):n.vr,h=o>1e-6?Math.max(n.vr,i-(c-a.eave_b)/o):n.vr,u=Math.min(l,Math.min(n.vr,i-n.vr)||i/2),f=Math.min(l-.1,(n.rh-c)/Math.max(.2,s)),g=b=>b==="hip"?u:b==="halfhip"?f:0;return{d0:g(t[0]),d1:g(t[1]),yh:c,vah:p,vbh:h}}function _f(a,t,e){let n=null;for(let i of a.faces){if(!K([t,e],i.map(y=>[y[0],y[1]])))continue;let[s,o]=i,r=i.slice(2).find(y=>Math.abs((o[0]-s[0])*(y[1]-s[1])-(o[1]-s[1])*(y[0]-s[0]))>1e-9);if(!r)continue;let l=o[0]-s[0],d=o[2]-s[2],c=o[1]-s[1],p=r[0]-s[0],h=r[2]-s[2],u=r[1]-s[1],f=d*u-c*h,g=c*p-l*u,b=l*h-d*p;if(Math.abs(g)<1e-9)continue;let _=s[2]-(f*(t-s[0])+b*(e-s[1]))/g;n=n===null?_:Math.min(n,_)}return n}function Sc(a,t,e){let n=t*oe,i={p:e,c:Math.cos(n),s:Math.sin(n)};if(a.points&&a.points.length>=3)return{...a,points:a.points.map(c=>Jn(i,c)),...Fi(a.points.map(c=>Jn(i,c)))};let s=a.pivot??[(a.x0+a.x1)/2,(a.z0+a.z1)/2],o=Jn(i,s),r=o[0]-s[0],l=o[1]-s[1],d=(((a.rotation??0)+t)%360+360)%360;return d>180&&(d-=360),{...a,x0:a.x0+r,x1:a.x1+r,z0:a.z0+l,z1:a.z1+l,pivot:o,rotation:Math.abs(d)<1e-9?0:d}}function Fc(a,t,e){let[n,i]=Jn(yn(a),[t,e],!0),s=Math.min(a.x0,a.x1),o=Math.max(a.x0,a.x1),r=Math.min(a.z0,a.z1),l=Math.max(a.z0,a.z1);return a.axis==="x"?[n,a.flip?l-i:i-r]:[i,a.flip?o-n:n-s]}function gr(a,t){let[e,n]=Jn(yn(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),i=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of a)o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||i(o)<i(t)*1.5||gf(o,e,n)&&(!s||i(o)<i(s))&&(s=o);return s}function Pc(a,t,e,n){let i=yn(a),s=re({...a,rotation:0}),o=Ae(a),r=2,l=Math.max(s.u0+.3,Math.min(s.u1-r-.3,(n??(s.u0+s.u1)/2)-r/2)),d=t==="a"?a.eave_a:a.eave_b,c=t==="a"?a.pitch_a:a.pitch_b,p=d+1.4,h=r/2*Math.tan(35*oe),u=p+h,f=Math.max(.8,Math.min(s.w/2-.2,(u-d)/Math.max(.15,Math.tan(Math.min(80,c)*oe)))),g=t==="a"?0:s.w-f,b=t==="a"?f:s.w,_=s.at(l,g),y=s.at(l+r,b);return{id:e,x0:Math.round(Math.min(_[0],y[0])*100)/100,z0:Math.round(Math.min(_[1],y[1])*100)/100,x1:Math.round(Math.max(_[0],y[0])*100)/100,z1:Math.round(Math.max(_[1],y[1])*100)/100,shape:"gable",axis:a.axis==="x"?"z":"x",eave_a:Math.round(p*100)/100,eave_b:Math.round(p*100)/100,pitch_a:35,pitch_b:35,base:Math.round(o.y(t==="a"?0:s.w)*100)/100,overhang:.15,dormer:!0,...i?{rotation:a.rotation,pivot:i.p}:{}}}function Ic(a,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=re(t),n=Ae(t).rh,i=hr(a,{u0:0,u1:0,a:0,b:0}),s=Ae(a),o=g=>{let[b,_]=e.at(g,e.w/2),[y,$]=Fc(a,b,_);return _f(i,y,$)??s.y($)},r=o(e.u0)<=o(e.u1),l=r?e.u0:e.u1,d=r?e.u1:e.u0,c=r?1:-1,p=Math.abs(d-l),h=d;for(let g=.5;g<p;g+=.05)if(o(l+c*g)>=n-.02){h=l+c*g;break}if(Math.abs(h-d)<.05)return t;let u=yn(t),f={...t,...u?{pivot:u.p}:{}};return t.axis==="x"?d===e.u1?f.x1=h:f.x0=h:d===e.u1?f.z1=h:f.z0=h,f}function Rc(a,t,e){let n=re(t),i=a.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>t.base+.05)),s=d=>d.some(c=>i.some(p=>K(c,p.points))),o=.35,r=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:s(r.map(d=>n.at(d,-o)))?0:e,b:s(r.map(d=>n.at(d,n.w+o)))?0:e,u0:s(l.map(d=>n.at(n.u0-o,d)))?0:e,u1:s(l.map(d=>n.at(n.u1+o,d)))?0:e}}function zc(a,t,e,n,i){let s=[];for(let r of[.2,.5,.8])for(let l of[.2,.5,.8])s.push([t+(n-t)*r,e+(i-e)*l]);let o=a.floors.filter(r=>r.rooms.some(l=>l.points.length>=3&&s.some(d=>K(d,l.points)))).map(r=>r.elevation+r.height);return o.length?Math.max(...o):null}function Oc(a,t){let e=a.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Fs(a){return Ae(a).rh}function Ac(a,t=e=>`roof_${e+1}`){let e=a.settings.roof?.pitch??35,n=a.settings.wall_exterior,i=a.floors.filter(l=>l.rooms.some(d=>d.points.length>=3)).sort((l,d)=>d.elevation-l.elevation),s=[],o=[],r=l=>Math.round(l*1e3)/1e3;for(let l of i){let d=l.rooms.filter($=>$.points.length>=3),c=[...new Set(d.flatMap($=>$.points.map(w=>r(w[0]))))].sort(($,w)=>$-w),p=[...new Set(d.flatMap($=>$.points.map(w=>r(w[1]))))].sort(($,w)=>$-w),h=c.length-1,u=p.length-1,f=($,w)=>$.some(E=>K(w,E.points)),g=[];for(let $=0;$<u;$++){g.push([]);for(let w=0;w<h;w++){let E=[(c[w]+c[w+1])/2,(p[$]+p[$+1])/2];g[$].push(f(d,E)&&!f(o,E))}}let b=g.map($=>$.map(()=>!1)),_=($,w)=>g[w][$]&&!b[w][$],y=l.elevation+l.height;for(let $=0;$<u;$++)for(let w=0;w<h;w++){if(!_(w,$))continue;let E=w;for(;E+1<h&&_(E+1,$);)E++;let x=$;for(;x+1<u&&Array.from({length:E-w+1},(P,A)=>_(w+A,x+1)).every(Boolean);)x++;for(let P=$;P<=x;P++)for(let A=w;A<=E;A++)b[P][A]=!0;let M=c[w]-n,R=c[E+1]+n,T=p[$]-n,L=p[x+1]+n;Math.min(R-M,L-T)<.8||s.push({id:t(s.length),x0:r(M),z0:r(T),x1:r(R),z1:r(L),shape:"gable",axis:R-M>=L-T?"x":"z",eave_a:r(y),eave_b:r(y),pitch_a:e,pitch_b:e,base:r(y),overhang:null})}o.push(...d)}return s}var xn=Math.PI/180,Tc=1.13,br=1.72,fe=.025,vn=.07,Lc=.25;function Qt(a,t){let e=[];for(let n of a.floors){if(t&&n.id!==t)continue;let{walls:i}=wt(n.rooms,{exterior:a.settings.wall_exterior,interior:a.settings.wall_interior},n.walls??[]);for(let s of i){if(!s.exterior&&!s.free)continue;let o=s.b[0]-s.a[0],r=s.b[1]-s.a[1],l=Math.hypot(o,r);if(l<.5)continue;let d=r/l,c=-o/l,p=Math.min(n.height,s.height??n.height),h=s.sources.find(g=>g.room_id===s.roomLeft)?.edge??null,u={floorId:n.id,room:s.roomLeft,edge:h,free:!!s.free},f=(g,b,_,y)=>e.push({key:g,section:null,side:"top",flat:!1,o:b,eu:_,es:[0,1,0],n:y,lu:l,ls:p,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:u});f(`wall:${n.id}:${s.id}`,[s.a[0]+d*s.right,n.elevation,s.a[1]+c*s.right],[o/l,0,r/l],[d,0,c]),s.free&&f(`wall:${n.id}:${s.id}:back`,[s.b[0]-d*s.left,n.elevation,s.b[1]-c*s.left],[-o/l,0,-r/l],[-d,0,-c])}}return e}var we="ground";function yr(a){let t=[...a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??a.floors[0]??null}function Is(a,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],s=yr(a),o=n[0]*t.u+i[0]*t.v,r=n[2]*t.u+i[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Oa(s,o,r)):t.base??0;return{key:we,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Ct(a,t,e=pt(a)){return t.face===we?Is(a,t):t.face.startsWith("wall:")?Qt(a,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function Hc(a,t,e){let n=Qt(a,e),i=a.settings.north??0,s=l=>{let d=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((d-180)*Math.PI/180))},o=[...n].sort((l,d)=>s(d)-s(l))[0];if(!o)return null;let r={...Rs(o,t),portrait:!1,rows:1};return r.cols=Math.max(1,Math.floor((o.lu-.8+fe)/(br+fe))),r.u=Math.round((o.lu-(r.cols*br+(r.cols-1)*fe))/2*100)/100,r.v=Math.round(Math.max(0,o.ls-Tc-.3)*100)/100,r}function vr(a,t){let e=a.floors.flatMap(s=>s.rooms.flatMap(o=>o.points)),n=e.length?Math.max(...e.map(s=>s[0]))+3:0,i=e.length?Math.min(...e.map(s=>s[1])):0;return{id:t,face:we,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(a.settings.north??0)||0,look:"black",entity:null}}function Ii(a){return a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function pt(a){let t=a.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(y=>yf(y,Rc(a,y,y.overhang??t.overhang)));let e=Ii(a);if(!e)return[];let n=e.rooms.flatMap(y=>y.points.map($=>$[0])),i=e.rooms.flatMap(y=>y.points.map($=>$[1])),s=a.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,r=Math.max(...n)+s,l=Math.min(...i)-s,d=Math.max(...i)+s,c=e.elevation+e.height;if(t.type==="flat")return[Vc("main",null,o,l,r,d,c+Lc)];let p=r-o>=d-l,h=t.ridge==="short"?!p:p,u=(h?d-l:r-o)/2,f=u*Math.tan(t.pitch*xn),g=(y,$,w)=>h?[y,c+w,(l+d)/2+$]:[(o+r)/2+$,c+w,y],[b,_]=h?[o,r]:[l,d];return[-1,1].map(y=>Ps(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",g(b,y*u,0),g(_,y*u,0),g(b,0,f),t.pitch,()=>[0,_-b]))}function yf(a,t){let e=re(a),n=Ae(a),i=($,w,E)=>{let[x,M]=e.at($,w);return[x,E,M]},s=Math.max(0,t.a),o=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),d=l-r;if(a.shape==="flat"||a.shape==="parapet"){let $=e.at(r,-s),w=e.at(l,e.w+o);return[Vc(a.id,a.id,Math.min($[0],w[0]),Math.min($[1],w[1]),Math.max($[0],w[0]),Math.max($[1],w[1]),a.eave_a+Lc)]}if(a.shape==="pent")return[Ps(`${a.id}:a`,a.id,"a",i(r,-s,n.y(-s)),i(l,-s,n.y(-s)),i(r,e.w+o,n.y(e.w+o)),a.pitch_a,()=>[0,d])];let c=fr(a),p=c?mr(a,c):null,h=a.shape==="pyramid"||c?.[0]==="hip",u=a.shape==="pyramid"||c?.[1]==="hip",f=a.shape==="pyramid"?(e.u1-e.u0)/2:h?p.d0:0,g=a.shape==="pyramid"?(e.u1-e.u0)/2:u?p.d1:0,b=h?e.u0+f-r:0,_=u?l-(e.u1-g):0,y=[];if(n.vr>.3){let $=Math.hypot(n.vr+s,n.rh-n.y(-s));y.push(Ps(`${a.id}:a`,a.id,"a",i(r,-s,n.y(-s)),i(l,-s,n.y(-s)),i(r,n.vr,n.rh),a.pitch_a,w=>[b*(w/$),d-_*(w/$)]))}if(e.w-n.vr>.3){let $=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));y.push(Ps(`${a.id}:b`,a.id,"b",i(l,e.w+o,n.y(e.w+o)),i(r,e.w+o,n.y(e.w+o)),i(l,n.vr,n.rh),a.pitch_b,w=>[_*(w/$),d-b*(w/$)]))}if(h||u){let $=n.y(-s),w=n.y(e.w+o),E=[];h&&E.push([`${a.id}:c`,"c",i(r,e.w+o,w),i(r,-s,$),i(e.u0+f,n.vr,n.rh)]),u&&E.push([`${a.id}:d`,"d",i(l,-s,$),i(l,e.w+o,w),i(e.u1-g,n.vr,n.rh)]);for(let[x,M,R,T,L]of E){let P=vf(x,a.id,M,R,T,L);P&&y.push(P)}}return y}function vf(a,t,e,n,i,s){let o=Pi($n(i,n));if(o<.3)return null;let r=tn($n(i,n)),l=$n(s,n),d=l[0]*r[0]+l[1]*r[1]+l[2]*r[2],c=[l[0]-r[0]*d,l[1]-r[1]*d,l[2]-r[2]*d],p=Pi(c);if(p<.3)return null;let h=tn(c),u=tn(Dc(r,h));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=tn([-h[0],0,-h[2]]),g=Math.atan2(h[1],Math.hypot(h[0],h[2]))/xn;return{key:a,section:t,side:e,flat:!1,o:n,eu:r,es:h,n:u,lu:o,ls:p,pitch:g,span:_=>{let y=Math.min(1,Math.max(0,_/p));return[d*y,o-(o-d)*y]},facing:[f[0],f[2]]}}function Ps(a,t,e,n,i,s,o,r){let l=tn($n(i,n)),d=tn($n(s,n)),c=tn(Dc(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let p=tn([-d[0],0,-d[2]]);return{key:a,section:t,side:e,flat:!1,o:n,eu:l,es:d,n:c,lu:Pi($n(i,n)),ls:Pi($n(s,n)),pitch:o,span:r,facing:[p[0],p[2]]}}function Vc(a,t,e,n,i,s,o){let r=i-e>=s-n,l=r?i-e:s-n,d=r?s-n:i-e;return{key:`${a}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:r?[1,0,0]:[0,0,1],es:r?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:r?[0,1]:[1,0]}}function Zn(a){let t=a.module_w||Tc,e=a.module_h||br;return a.portrait===!1?[e,t]:[t,e]}function wn(a){return a.layout?.length?a.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,a.rows)},()=>Math.max(1,a.cols))}function $r(a,t){return a.flat?Math.min(45,Math.max(0,t.tilt??15))*xn:a.wall?Math.min(90,Math.max(0,t.tilt??0))*xn:0}function en(a,t){let[e,n]=Zn(t),i=wn(t),s=Math.max(1,...i),r=(i.length-1)*xr(a,t)+n*Math.cos($r(a,t));return[s*e+(s-1)*fe,r]}function xr(a,t){let[,e]=Zn(t),n=$r(a,t);return a.wall?e*Math.cos(n)+fe:a.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+fe}function ke(a,t,e=!1){let[n,i]=Zn(t),s=[],o=$r(a,t),r=i*Math.cos(o),l=xr(a,t),d=wn(t),c=Math.max(1,...d),p=new Set(t.skip??[]),h=!!a.wall&&n>a.lu+1e-6,u=(g,b,_)=>[a.o[0]+a.eu[0]*g+a.es[0]*b+a.n[0]*_,a.o[1]+a.eu[1]*g+a.es[1]*b+a.n[1]*_,a.o[2]+a.eu[2]*g+a.es[2]*b+a.n[2]*_],f=(g,b)=>{if(a.unbounded)return!0;if(b<-1e-6||b>a.ls+1e-6)return!1;let[_,y]=a.span(b);return g>=_-1e-6&&g<=y+1e-6};return d.forEach((g,b)=>{let _=t.align==="right"?c-g:t.align==="center"?(c-g)/2:0;for(let y=0;y<g;y++){let $=`${b}:${y}`,w=p.has($);if(w&&!e)continue;let E=t.u+(y+_)*(n+fe),x=t.v+b*l,M=E+n,R=x+(a.flat||a.wall?r:i);if(h){if(!(f((E+M)/2,x)&&f((E+M)/2,R)))continue}else if(![[E,x],[M,x],[M,R],[E,R]].every(([S,z])=>f(S,z)))continue;if(a.wall&&o>.001){let S=vn+i*Math.sin(o),[z,H]=t.flip?[S,vn]:[vn,S],D=[u(E,x,z),u(M,x,z),u(M,R,H),u(E,R,H)],C=t.flip?x:R,W=[E+.05,M-.05].map(G=>[u(G,C,0),u(G,C,S)]);s.push({corners:D,posts:W,cell:$,skipped:w});continue}if(!a.flat){s.push({corners:[u(E,x,vn),u(M,x,vn),u(M,R,vn),u(E,R,vn)],posts:[],cell:$,skipped:w});continue}let T=.15,L=T+i*Math.sin(o),[P,A]=t.flip?[R,x]:[x,R],V=[u(E,P,T),u(M,P,T),u(M,A,L),u(E,A,L)];s.push({corners:V,posts:[E+.05,M-.05].flatMap(S=>[[u(S,P,0),u(S,P,T)],[u(S,A,0),u(S,A,L)]]),cell:$,skipped:w})}}),s}function Ri(a,t){let e=[a.eu[0],a.eu[2]],n=[a.es[0],a.es[2]],i=[t[0]-a.o[0],t[1]-a.o[2]],s=e[0]*n[1]-e[1]*n[0];if(Math.abs(s)<1e-9)return null;let o=(i[0]*n[1]-i[1]*n[0])/s,r=(e[0]*i[1]-e[1]*i[0])/s;if(r<0||r>a.ls)return null;let[l,d]=a.span(r);return o>=l&&o<=d?{u:o,s:r}:null}function Cc(a,t){let e=null;for(let n of a){if(n.wall){let o=[t[0]-n.o[0],t[1]-n.o[2]],r=o[0]*n.eu[0]+o[1]*n.eu[2],l=o[0]*n.n[0]+o[1]*n.n[2];if(r>=0&&r<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:r,s:Number.NaN};r>=0&&r<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:r,s:Number.NaN,y:-1/0});continue}let i=Ri(n,t);if(!i)continue;let s=n.o[1]+n.es[1]*i.s;(!e||s>e.y)&&(e={face:n,...i,y:s})}return e?{face:e.face,u:e.u,s:e.s}:null}function je(a,t){if(a.unbounded)return{u:t.u,v:t.v};let[e,n]=en(a,t),i=o=>Math.floor(o*100+1e-6)/100;return{u:a.wall&&e>a.lu?Math.round((a.lu-e)/2*100)/100:i(Math.min(Math.max(0,t.u),Math.max(0,a.lu-e))),v:i(Math.min(Math.max(0,t.v),Math.max(0,a.ls-n)))}}function Rs(a,t){let e={id:t,face:a.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:a.flat?15:null,flip:!1,entity:null,look:"black"},[n]=Zn(e),i=.4,s=xr(a,e),[o,r]=a.span(a.ls/2);for(e.cols=Math.max(1,Math.floor((r-o-2*i+fe)/(n+fe))),e.rows=Math.max(1,Math.min(4,Math.floor((a.ls-2*i)/s)));e.cols>1&&ke(a,{...e,u:_r(a,e),v:i}).length<e.rows*e.cols;)e.cols--;return e.u=_r(a,e),e.v=i,e}function wr(a,t){let e={...t,face:a.key,tilt:a.flat?t.tilt??15:null,rotation:null,flip:!1};return a.wall&&Object.assign(e,$f(a,e)),e.u=_r(a,e),e.v=.4,{...e,...je(a,e)}}function $f(a,t){let e=i=>Math.floor((a.lu+fe+1e-6)/(Zn({...t,portrait:i})[0]+fe)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...wn(t)),e(n!==!1))),layout:void 0,skip:void 0}}function _r(a,t){let[e]=Zn(t),n=t.cols*e+(t.cols-1)*fe;return Math.round((a.lu-n)/2*100)/100}function kr(a,t){let e=(Math.atan2(a.facing[0],-a.facing[1])/xn-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function zi(a,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/xn-t+720)%360,s=Math.cos((i-180)*xn);return n.lu*n.ls*(1.2+s)};return[...a].sort((n,i)=>e(i)-e(n))[0]??null}function $n(a,t){return[a[0]-t[0],a[1]-t[1],a[2]-t[2]]}function Pi(a){return Math.hypot(a[0],a[1],a[2])}function tn(a){let t=Pi(a)||1;return[a[0]/t,a[1]/t,a[2]/t]}function Dc(a,t){return[a[1]*t[2]-a[2]*t[1],a[2]*t[0]-a[0]*t[2],a[0]*t[1]-a[1]*t[0]]}var Wc=.78,Nc=1.18;function Te(a){return{id:a.id,face:a.face,u:a.u,v:a.v,rows:1,cols:1,portrait:!0,module_w:a.w||Wc,module_h:a.h||Nc}}function jc(a,t){let e=ke(a,Te(t))[0];if(!e)return null;let n=i=>[i[0]-a.n[0]*.05,i[1]-a.n[1]*.05,i[2]-a.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Mr(a,t){let e=Wc,n=Nc,[i,s]=a.span(a.ls/2);return{id:t,face:a.key,u:Math.round((i+s-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(a.ls-n,a.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function ti(a,t,e){let n=Is(a,t),[i,s]=en(n,t),o=n.eu[0]*(t.u+i/2)+n.es[0]*(t.v+s/2),r=n.eu[2]*(t.u+i/2)+n.es[2]*(t.v+s/2),l=e*Math.PI/180,d=[Math.cos(l),Math.sin(l)],c=[-Math.sin(l),Math.cos(l)],p=o*d[0]+r*d[1]-i/2,h=o*c[0]+r*c[1]-s/2,u=f=>Math.round(f*100)/100;return{u:u(p),v:u(h),rotation:(Math.round(e)%360+360)%360}}function ei(a,t){let[e,n]=en(a,t);return[a.o[0]+a.eu[0]*(t.u+e/2)+a.es[0]*(t.v+n/2),a.o[2]+a.eu[2]*(t.u+e/2)+a.es[2]*(t.v+n/2)]}function Er(a,t,e){let n=e[0]*a.n[0]+e[1]*a.n[1]+e[2]*a.n[2];if(Math.abs(n)<1e-6)return null;let i=((a.o[0]-t[0])*a.n[0]+(a.o[1]-t[1])*a.n[1]+(a.o[2]-t[2])*a.n[2])/n;if(i<=0)return null;let s=[t[0]+e[0]*i-a.o[0],t[1]+e[1]*i-a.o[1],t[2]+e[2]*i-a.o[2]],o=s[0]*a.eu[0]+s[1]*a.eu[1]+s[2]*a.eu[2],r=s[0]*a.es[0]+s[1]*a.es[1]+s[2]*a.es[2];return{t:i,u:o,s:r}}function Bc(a,t,e){if(a.unbounded)return!0;if(e<0||e>a.ls)return!1;let[n,i]=a.span(e);return t>=n&&t<=i}function Kc(a,t,e,n){for(let i of ke(a,t)){let s=i.corners.map(c=>{let p=[c[0]-a.o[0],c[1]-a.o[1],c[2]-a.o[2]];return[p[0]*a.eu[0]+p[1]*a.eu[1]+p[2]*a.eu[2],p[0]*a.es[0]+p[1]*a.es[1]+p[2]*a.es[2]]}),[o,r]=[Math.min(...s.map(c=>c[0])),Math.max(...s.map(c=>c[0]))],[l,d]=[Math.min(...s.map(c=>c[1])),Math.max(...s.map(c=>c[1]))];if(e>=o-.05&&e<=r+.05&&n>=l-.05&&n<=d+.05)return!0}return!1}function lt(a,t){if(!$e(t))return ee(a,`furn_${t}`);let e=Tt(t);return e?Lt(e,a?.language??navigator.language):ee(a,"pack_missing_item")}var zs=class{queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let i=e.getBoundingClientRect(),s=r=>{this._splitRatio=Math.min(.8,Math.max(.2,(r.clientX-i.left)/i.width))},o=()=>{n.removeEventListener("pointermove",s),n.removeEventListener("pointerup",o),n.removeEventListener("pointercancel",o);try{localStorage.setItem("home3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",s),n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("home3d.editor3d",this._split?"1":"0")}catch{}}onPlanChange3d(t){t.preventDefault(),this.change(e=>t.detail.change(e))}onFurnitureMoved3d(t){let{id:e,x:n,z:i}=t.detail,s=this._doc.settings.wall_interior,o=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],r=o.includes(e)&&o.length>1?o:[];if(r.length){let l=this.floor?.furniture.find(h=>h.id===e);if(!l||r.some(h=>this.isFixedItem("furniture",h)))return;let d=k(n-l.x),c=k(i-l.z),p=new Set(r);this.change((h,u)=>{for(let f of u.furniture)p.has(f.id)&&Object.assign(f,{x:k(f.x+d),z:k(f.z+c)})});return}this.change(l=>{for(let d of l.floors){let c=d.furniture.find(y=>y.id===e);if(!c)continue;let[p,h]=cr(d,c.x,c.z,n,i),[u,f]=Es(d,c,p,h,s),g=_n(d,c,s),b=g?Math.hypot(g.x-c.x,g.z-c.z):1/0;Object.assign(c,{x:u,z:f});let _=_n(d,c,s);_&&Math.hypot(_.x-u,_.z-f)<=b+.01&&Object.assign(c,_)}})}onDeviceMoved3d(t){let{id:e,x:n,z:i}=t.detail;this.change(s=>{for(let o of s.floors){let r=o.placements.find(c=>c.entity_id===e);if(!r)continue;let[l,d]=cr(o,r.x,r.z,n,i);Object.assign(r,{x:l,z:d})}})}render3dBar(){if(!this.isEditor)return v;let t=this.furnitureItem,e=this.device;if(t){let n=de(t),i=(s,o,r=.05)=>m`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${o}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${r}
          .value=${this.unit==="imperial"?ln(t[s]):String(Math.round(t[s]*100)/100)}
          @change=${l=>{let d=this.readLen(l.target.value);d!==null&&d>=r&&this.updateFurniture({[s]:Math.round(d*1e3)/1e3})}}
        />
      </label>`;return m`<div class="fp3d-3d-bar">
        <span>${lt(this.hass,t.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?m`<label class="fp3d-3d-size" title=${Gt(this.t("mount_height"),this.unit)}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?ln(t.mount_y??Ht(this.floor,t)):String(Math.round((t.mount_y??Ht(this.floor,t))*100)/100)}
                @change=${s=>{let o=this.readLen(s.target.value);o!==null&&o>=0&&this.updateFurniture({mount_y:Math.round(Math.min(Ne,o)*1e3)/1e3})}}
              />
            </label>`:v}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let n=nt(e.entity_id),i=n==="light",s=n?bi(n,this.floor?.height??2.5,i?e.mount??"ceiling":null):1;return m`<div class="fp3d-3d-bar">
        <span>${et(this.hass,e.entity_id)}</span>
        ${i?m`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${o=>this.updateDevice({mount:o.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(o=>m`<option value=${o} ?selected=${o===(e.mount??"ceiling")}>${this.t(`lamp_${o}`)}</option>`)}
            </select>`:v}
        <label class="fp3d-3d-size" title=${Gt(this.t("marker_height"),this.unit)}
          >${this.t("size_short_h")}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${this.lenValue(e.y??s)}
            @change=${o=>{let r=this.readLen(o.target.value);r!==null&&r>=0&&this.updateDevice({y:Math.round(r*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((e.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((e.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",e.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",e.entity_id)}>${this.t("delete")}</button>
      </div>`}return v}grab3dStart(t){let e=this._doc,n=pt(e),i=null,s=(r,l,d,c,p=!1)=>{if(!d||p)return;let h=Er(d,t.o,t.d);!h||!Kc(d,c,h.u,h.s)||i&&i.t<=h.t||(i={id:r,win:l,t:h.t,du:h.u-c.u,ds:h.s-c.v})};if(this._tool==="energy")for(let r of e.settings.roof.solar??[])s(r.id,!1,Ct(e,r,n),r,!!r.locked);if(this._tool==="roof")for(let r of e.settings.roof.windows??[])s(r.id,!0,n.find(l=>l.key===r.face)??null,Te(r),!!r.locked);if(!i)return!1;let o=i;return this.grab3d={id:o.id,win:o.win,du:o.du,ds:o.ds,base:e,moved:!1},o.win?this._roofWinId=o.id:this.selectSolar(o.id),!0}grab3dMove(t){let e=this.grab3d;if(!e)return;let n=e.base,i=e.win?n.settings.roof.windows?.find(u=>u.id===e.id):void 0,s=e.win?i?Te(i):void 0:n.settings.roof.solar?.find(u=>u.id===e.id);if(!s)return;let o=Ct(n,s),r=o?.unbounded?[o]:e.win?pt(n):[...pt(n),...Qt(n)],l=null;for(let u of r){let f=Er(u,t.o,t.d);f&&Bc(u,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:u,...f})}if(!l)return;let d=l.face,c=.05,p=u=>k(Math.round(u/c)*c),h=je(d,{...s,face:d.key,u:p(l.u-e.du),v:p(l.s-e.ds),tilt:d.flat?s.tilt??15:s.tilt});e.moved=!0,this.change(u=>{if(e.win){let g=u.settings.roof.windows?.find(b=>b.id===e.id);g&&Object.assign(g,{face:d.key,...h});return}let f=u.settings.roof.solar?.find(g=>g.id===e.id);f&&Object.assign(f,{face:d.key,...h},d.flat&&f.tilt==null?{tilt:15}:{})},e.base,!1)}render3d(){return m`<div class="fp3d-editor-3d">
      ${this.houseTool?v:m`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this.setWall3d("cut")}>${this.t("walls_cut")}</button>
          </div>`}
      <button class="fp3d-3d-fold" title=${this.t("split_fold_hint")} aria-label=${this.t("split_fold_hint")} @click=${()=>this.toggleSplit()}>✕ 3D</button>
      ${this.render3dBar()}
      <fp3d-view3d
              .walkable=${!1}
        .pivotMark=${!0}
        .hass=${this.rawHass}
        .home=${this.home}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isEditor}
        .surfaceGrab=${this.isEditor&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?Hn:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${t=>{t.detail.id?this.selectFrom3d("furniture",t.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @plan-change=${this.onPlanChange3d}
        @device-select=${t=>{t.detail.id?this.selectFrom3d("device",t.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${t=>{t.detail.floorId&&(this._floorId=t.detail.floorId),this._sideOpen=!1}}
        @room-tap=${t=>{t.detail.floorId&&(this._floorId=t.detail.floorId),t.detail.roomId?this.selectFrom3d("room",t.detail.roomId):this._sideOpen=!1}}
      ></fp3d-view3d>
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("home3d.walls3d",t)}catch{}}};var xf=8,wf=[.1,.5,1],qc=4;function ni(a,t=xf){return t/Math.max(1e-6,a)}var Uc={mid:0,equal:1,end:2,corner:3};function Yc(a,t,e,n,i,s=wf){let o=t/2,r=o-1e-6,l=e-o+1e-6,d=null,c=i,p=(h,u,f,g,b)=>{if(h<r||h>l)return;let _=Math.abs(h-a);_>c+1e-9||d&&Math.abs(_-c)<=1e-9&&Uc[d.kind]<=Uc[u]||(c=_,d={offset:h,kind:u,spans:f,tick:g,...b!==void 0?{value:b}:{}})};p(e/2,"mid",[],e/2),p(o,"end",[],0),p(e-o,"end",[],e);for(let h of s)p(h+o,"corner",[[0,h]],null,h),p(e-h-o,"corner",[[e-h,e]],null,h);if(n.length){let h=n.map(y=>[y.offset-y.width/2,y.offset+y.width/2]).sort((y,$)=>y[0]-$[0]),u=0;for(;u<h.length&&h[u][0]+h[u][1]<2*a;)u++;let f=u>0?h[u-1]:null,g=u<h.length?h[u]:null,b=f?f[1]:0,_=g?g[0]:e;if(f||g){let y=(_-b-t)/2,$=(b+_)/2;y>.01&&p($,"equal",[[b,$-o],[$+o,_]],null,y)}if(f){let y=u>1?h[u-2][1]:0,$=f[0]-y,w=f[1]+$+o;$>.01&&w+o<=_+1e-6&&p(w,"equal",[[y,f[0]],[f[1],w-o]],null,$)}if(g){let y=u+1<h.length?h[u+1][0]:e,$=y-g[1],w=g[0]-$-o;$>.01&&w-o>=b-1e-6&&p(w,"equal",[[w+o,g[0]],[g[1],y]],null,$)}}return d}function Xc(a,t,e,n){let i=Math.hypot(t[0]-a[0],t[1]-a[1])||1,s=[(t[0]-a[0])/i,(t[1]-a[1])/i],o=[-s[1],s[0]],r=(d,c)=>[a[0]+s[0]*d+o[0]*c,a[1]+s[1]*d+o[1]*c],l=e.spans.map(([d,c])=>({a:r(d,n),b:r(c,n),kind:e.kind,axis:"wall",...e.value!==void 0?{value:e.value}:{}}));return e.tick!==null&&l.push({a:r(e.tick,-n*1.5),b:r(e.tick,n*1.5),kind:e.kind,axis:"wall"}),l}function Sr(a){let t=Wt(a),e=1/0,n=-1/0,i=1/0,s=-1/0;for(let[o,r]of t)o<e&&(e=o),o>n&&(n=o),r<i&&(i=r),r>s&&(s=r);return{x0:e,x1:n,z0:i,z1:s}}function Qc(a){let t=Sr(a);return[(t.x1-t.x0)/2,(t.z1-t.z0)/2]}function Jc(a,t){let e=[],n=[];for(let i of a){let s=(i.x0+i.x1)/2,o=(i.z0+i.z1)/2;e.push({v:s,kind:"centre",from:i.z0,to:i.z1},{v:i.x0,kind:"edge",from:i.z0,to:i.z1},{v:i.x1,kind:"edge",from:i.z0,to:i.z1}),n.push({v:o,kind:"centre",from:i.x0,to:i.x1},{v:i.z0,kind:"edge",from:i.x0,to:i.x1},{v:i.z1,kind:"edge",from:i.x0,to:i.x1})}for(let i of t){if(i.points.length<3)continue;let s=1/0,o=-1/0,r=1/0,l=-1/0;for(let[d,c]of i.points)d<s&&(s=d),d>o&&(o=d),c<r&&(r=c),c>l&&(l=c);e.push({v:(s+o)/2,kind:"room",from:r,to:l}),n.push({v:(r+l)/2,kind:"room",from:s,to:o})}return{xs:e,zs:n}}function Gc(a,t,e,n,i,s,o=qc){let r=null,l=0,d=s,c=2;for(let p=0;p<i.length;p++){let h=i[p];if(h.from-n>o||e-h.to>o)continue;let u=h.kind==="room"?0:1;if(u>c||u===0&&((e+n)/2<h.from||(e+n)/2>h.to))continue;let f,g;if(h.kind==="edge"){let b=Math.abs(a-t-h.v),_=Math.abs(a+t-h.v);f=b<=_?h.v+t:h.v-t,g=Math.min(b,_)}else f=h.v,g=Math.abs(a-h.v);g>s||u===c&&g>=d||(r=h,l=f,d=g,c=u)}return r?{v:l,line:r}:null}var kf=[];function Os(a,t,e,n,i=qc){let[s,o]=t,r=Gc(a[0],s,a[1]-o,a[1]+o,e.xs,n,i),l=Gc(a[1],o,a[0]-s,a[0]+s,e.zs,n,i);if(!r&&!l)return{p:a,x:!1,z:!1,guides:kf};let d=r?r.v:a[0],c=l?l.v:a[1],p=[];if(r){let h=r.line.kind==="edge"?r.line.v:d;p.push({a:[h,Math.min(r.line.from,c-o)],b:[h,Math.max(r.line.to,c+o)],kind:r.line.kind,axis:"x"})}if(l){let h=l.line.kind==="edge"?l.line.v:c;p.push({a:[Math.min(l.line.from,d-s),h],b:[Math.max(l.line.to,d+s),h],kind:l.line.kind,axis:"z"})}return{p:[d,c],x:!!r,z:!!l,guides:p}}var Mf={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function kn(a){return Mf[a]}var Ef={leak:new Set(["moisture"]),motion:new Set(["motion","occupancy","presence"])};function Zc(a,t,e,n){let i=e.live?.[n];if(i==="none")return[];if(i)return a.states[i]?[i]:[];let s=Ef[n],o=p=>p.startsWith("binary_sensor.")&&s.has(String(a.states[p]?.attributes.device_class??"")),r=(p,h)=>e.points.length>=3&&K([p,h],e.points),l=t?.placements.filter(p=>o(p.entity_id))??[],d=l.filter(p=>r(p.x,p.z)).map(p=>p.entity_id),c=new Set(l.filter(p=>!r(p.x,p.z)).map(p=>p.entity_id));return[...new Set([...Yt(a,e.area_id).filter(p=>o(p)&&!c.has(p)),...d])]}function Fr(a){return a==="radiator"||/^pack:.*:(radiator|trv|(heated_|electric_)?towel_rail)(_[a-z0-9_]+)?$/.test(a)?"radiator":Gi(a)?"tank":null}var tp=(a,t)=>!!t&&t!=="none"&&t.startsWith("sensor.")&&a.states[t]?.attributes.device_class==="temperature",Sf=/(tank|cylinder|dhw|hot.?water|speicher|boiler)/i;function Ff(a,t,e){let n=t&&t!=="none"?a.entities?.[t]?.device_id:null;if(!n||!a.entities)return null;let i=Object.values(a.entities).filter(s=>s.device_id===n&&tp(a,s.entity_id)).map(s=>s.entity_id);return e==="tank"?i.find(s=>Sf.test(`${s} ${a.states[s]?.attributes.friendly_name??""}`))??(i.length===1?i[0]:null):i.length===1?i[0]:null}function ep(a,t){let e=Fr(t.type);return!e||t.temp_sensor==="none"?null:t.temp_sensor?t.temp_sensor:tp(a,t.extra)?t.extra:e==="tank"&&t.entity?.startsWith("water_heater.")?t.entity:Ff(a,t.entity,e)}var nn=(a,t)=>ee(a,t);function np(a,t){if(!t||gi(t))return nn(a,"state_unavailable");let e=t.attributes;switch(nt(t.entity_id)){case"light":return t.state!=="on"?nn(a,"state_off"):typeof e.brightness=="number"?`${Math.round(e.brightness/255*100)} %`:nn(a,"state_on");case"switch":case"fan":return nn(a,t.state==="on"?"state_on":"state_off");case"cover":return typeof e.current_position=="number"&&t.state!=="opening"&&t.state!=="closing"?`${e.current_position} %`:As(a,t.state);case"climate":{let n=typeof e.current_temperature=="number"?`${Rt(a,e.current_temperature,1)} ${a?Qo(a):"\xB0C"}`:null;return t.state==="off"?n?`${n} \xB7 ${nn(a,"state_off")}`:nn(a,"state_off"):n??As(a,t.state)}case"media":{let n=t.state==="playing"||t.state==="paused"||t.state==="on"||t.state==="idle",i=[e.app_name,e.media_title,e.source].find(s=>typeof s=="string"&&s);return n&&i?i:As(a,t.state)}case"lock":case"camera":return As(a,t.state);case"binary":return["door","window","opening","garage_door"].includes(e.device_class)?nn(a,t.state==="on"?"state_open":"state_closed"):nn(a,t.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(t.state),i=e.unit_of_measurement??"",s=a?.entities?.[t.entity_id]?.display_precision??1;return Number.isFinite(n)?`${Rt(a,n,s)}${i?` ${i}`:""}`:t.state}default:return""}}function As(a,t){let e=`state_${t}`,n=ee(a,e);return n===e?t:n}function ip(a,t){let e=`${t} ${String(a.states[t]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}var sp=new Map;function op(a){sp=new Map(a?.floors.flatMap(t=>t.placements.filter(e=>Array.isArray(e.detect_sensors)).map(e=>[e.entity_id,e.detect_sensors]))??[])}function rp(a,t){return sp.get(t)??Pr(a,t)}function Pr(a,t){let e=a.entities?.[t]?.device_id;return e?Object.values(a.entities??{}).filter(n=>n.device_id===e&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(a.states[n]?.attributes.device_class))):[]}var If="fp3d-announce",Rf="position:fixed;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0;",ii=globalThis.__fp3dAnnounce??={region:null,timer:null};function zf(a){let t=a.fullscreenElement??null;for(;t?.shadowRoot?.fullscreenElement;)t=t.shadowRoot.fullscreenElement;return t??a.body}function Ir(a,t=typeof document>"u"?void 0:document){if(!t||!a)return;let e=zf(t);if(!e)return;let n=ii.region;n||(n=t.createElement("div"),n.id=If,n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),n.setAttribute("aria-atomic","true"),n.setAttribute("style",Rf),ii.region=n),n.parentNode!==e&&e.appendChild(n),n.textContent="",ii.timer&&clearTimeout(ii.timer),ii.timer=setTimeout(()=>{ii.timer=null,n.textContent=a},60)}var Ts=class{setDoc(t,e=this._doc){e&&this.history.push(e,this.mergeKey,this.mergeWithin),this.history.track(t),this._doc=t,op(t),this.showHistory(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),s=i.floors.find(o=>o.id===this._floorId);!s&&this._floorId||(t(i,s),To(i,e),this.setDoc(i,n?e:null))}changeFloor(t,e){let n=e.floors.findIndex(o=>o.id===this._floorId);if(n<0)return;let i=structuredClone(e.floors[n]);t(i);let s=e.floors.slice();s[n]=i,To({...e,floors:[i]},e),this.setDoc({...e,floors:s},null)}undo(){let t=this.history.undo(this._doc);t&&(this.restore(t),Ir(this.t("announce_undo")))}redo(){let t=this.history.redo(this._doc);t&&(this.restore(t),Ir(this.t("announce_redo")))}showHistory(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this.showHistory(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:s}=this._view;return[(t-i)/n,(e-s)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg.fp3d-plan").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(t=!1){let e=this.floor?.rooms.flatMap(l=>l.points)??[];if(t||this._tool==="outdoor"||this._tool==="pool")for(let l of this.floor?.outdoor??[])e.push(...l.points);if(t){for(let l of this.floor?.furniture??[]){let d=Math.max(l.w,l.d)/2;e.push([l.x-d,l.z-d],[l.x+d,l.z+d])}for(let l of this.floor?.placements??[])e.push([l.x,l.z])}if(this.fittedAll=t,this._tool==="roof")for(let l of this._doc.settings.roof.sections??[])e.push([l.x0,l.z0],[l.x1,l.z1]);let n=e.length?ft(e):{x0:0,z0:0,x1:10,z1:8},i=1.5,s=n.x1-n.x0+2*i,o=n.z1-n.z0+2*i,r=Math.max(8,Math.min(400,Math.min(this._size.w/s,this._size.h/o)));this._view={scale:r,ox:this._size.w/2-(n.x0+n.x1)/2*r,oy:this._size.h/2-(n.z0+n.z1)/2*r},this.fittedView=this._view}showPoint(t,e){let[n,i]=this.toScreen([t,e]),s=32;if(n>=s&&i>=s&&n<=this._size.w-s&&i<=this._size.h-s)return;let o=Math.max(this._view.scale,70);this._view={scale:o,ox:this._size.w/2-t*o,oy:this._size.h/2-e*o}}zoomAt(t,e,n){let{scale:i,ox:s,oy:o}=this._view,r=Math.max(8,Math.min(600,i*t)),l=r/i;this._view={scale:r,ox:e-(e-s)*l,oy:n-(n-o)*l}}zoomBy(t){this.zoomAt(t,this._size.w/2,this._size.h/2)}panBy(t,e){this._view={...this._view,ox:this._view.ox+t,oy:this._view.oy+e}}renderNav(){let t=(e,n,i)=>m`<button class="fp3d-nav-btn" title=${this.t(n)} aria-label=${this.t(n)} @click=${i}>${e}</button>`;return m`<div class="fp3d-nav" role="group" aria-label=${this.t("nav_label")}>
      ${t("+","nav_zoom_in",()=>this.zoomBy(1.4))}${t("\u2212","nav_zoom_out",()=>this.zoomBy(1/1.4))}${t("\u2922","fit_hint",()=>this.fit(this.fittedAll))}
    </div>`}snap(t,e,n=!1){if(this._guides={},n)return t;let i=bn/this._view.scale,s=this.floor?.rooms??[],o=[];for(let f of s)f.points.forEach((g,b)=>{e&&f.id===e.roomId&&(e.index===void 0||e.index===b)||o.push(g)});let r=null,l=i;for(let f of o){let g=Math.hypot(f[0]-t[0],f[1]-t[1]);g<l&&(l=g,r=f)}if(r)return this._guides={point:r},[r[0],r[1]];for(let f of s)if(!(e&&f.id===e.roomId))for(let g=0;g<f.points.length;g++){let b=f.points[g],_=f.points[(g+1)%f.points.length],y=_[0]-b[0],$=_[1]-b[1],w=y*y+$*$;if(w<1e-9)continue;let E=((t[0]-b[0])*y+(t[1]-b[1])*$)/w;if(E<=0||E>=1)continue;let x=[b[0]+E*y,b[1]+E*$],M=Math.hypot(x[0]-t[0],x[1]-t[1]),R=this._doc.settings.grid;Math.abs($)<1e-9&&(x[0]=Math.min(Math.max(Math.round(x[0]/R)*R,Math.min(b[0],_[0])),Math.max(b[0],_[0]))),Math.abs(y)<1e-9&&(x[1]=Math.min(Math.max(Math.round(x[1]/R)*R,Math.min(b[1],_[1])),Math.max(b[1],_[1]))),M<l&&(l=M,r=x)}if(r)return this._guides={point:r},[k(r[0]),k(r[1])];let d=this._doc.settings.grid,c=[k(Math.round(t[0]/d)*d),k(Math.round(t[1]/d)*d)],p=i,h=i,u={};for(let f of o)Math.abs(f[0]-t[0])<p&&(p=Math.abs(f[0]-t[0]),c[0]=f[0],u.x=f[0]),Math.abs(f[1]-t[1])<h&&(h=Math.abs(f[1]-t[1]),c[1]=f[1],u.z=f[1]);return this._guides=u,c}pushHistory(t){this.history.push(t),this.showHistory()}restoreLive(t){this._doc=t,this.history.track(t),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}alignLinesFor(t,e){let n=[];for(let i of t.furniture)i.id!==e&&n.push(Sr(i));return Jc(n,t.rooms)}showGuides(t){if(!t.length){this._guides.lines&&(this._guides={});return}this._guides={lines:t.map(e=>({a:e.a,b:e.b,label:this.t(`snap_${e.kind}`,e.value!==void 0?{d:this.m(e.value)}:void 0)}))}}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,s=t>=20?1:5,[o,r]=this.toWorld(0,0),[l,d]=this.toWorld(e,n),c=[],p=(f,g)=>{for(let b=Math.ceil(o/f)*f;b<=l;b+=f){let _=this.toScreen([b,0])[0];c.push(I`<line class=${g} x1=${_} y1="0" x2=${_} y2=${n} />`)}for(let b=Math.ceil(r/f)*f;b<=d;b+=f){let _=this.toScreen([0,b])[1];c.push(I`<line class=${g} x1="0" y1=${_} x2=${e} y2=${_} />`)}};i<s&&p(i,"fp3d-grid-minor"),p(s,"fp3d-grid-major");let[h,u]=this.toScreen([0,0]);return c.push(I`<circle class="fp3d-origin" cx=${h} cy=${u} r="3" />`),I`<g pointer-events="none">${c}</g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return I`<g pointer-events="none">
      ${t.x!==void 0?I`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:v}
      ${t.z!==void 0?I`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:v}
      ${t.point?I`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:v}
      ${t.lines?this.renderSnapLines(t.lines):v}
    </g>`}renderSnapLines(t){return t.map((e,n)=>{let[i,s]=this.toScreen(e.a),[o,r]=this.toScreen(e.b),l=e.label&&(t.findIndex(d=>d.label===e.label)===n||e.label.startsWith("="));return I`<line class="fp3d-snapline" x1=${i} y1=${s} x2=${o} y2=${r} />${l?I`<text class="fp3d-snaplabel" x=${(i+o)/2+6} y=${(s+r)/2-6}>${e.label}</text>`:v}`})}};var ap=["top6","side6","four"];function Be(a){return a==="pool_pump"?["suction","pressure"]:a==="pool_filter"?["pump","return","waste"]:a==="pool_heat_pump"?["in","out"]:[]}function Mn(a){return a==="wall"||a==="floor"?["inside","outside"]:["in","out1","out2"]}function dt(a){let[t="",e="",n]=a.split(":");return{kind:t,id:e,port:n||null}}function me(a){let{kind:t,id:e}=dt(a);return t&&e?`${t}:${e}`:a}function Of(a,t){let{w:e,d:n,h:i}=a;if(a.type==="pool_pump")return t==="suction"?[e*.5,i*.55,0]:t==="pressure"?[e*.05,i*.9,0]:null;if(a.type==="pool_filter"){let s=Math.min(e,n)/2;if(a.variant==="side6"){let l=s+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let o=i*.89,r=s*.45+.04;return t==="pump"?[-r,o,0]:t==="return"?[r,o,0]:t==="waste"?[0,o,-r]:null}if(a.type==="pool_heat_pump"){let s=a.variant==="left"||a.variant==="back"?a.variant:"right";if(t!=="in"&&t!=="out")return null;let o=t==="in"?i*.25:i*.45;return s==="back"?[t==="in"?-e*.15:e*.15,o,-n/2-.04]:[(s==="left"?-1:1)*(e/2+.04),o,-n*.2]}return null}function lp(a,t){let e=Of(a,t);if(!e)return null;let n=a.rotation*Math.PI/180,[i,s]=[Math.cos(n),Math.sin(n)];return{x:a.x+e[0]*i-e[2]*s,y:e[1],z:a.z+e[0]*s+e[2]*i}}function sn(a,t){if(t==="outside"){if(a.kind==="floor")return{x:a.x,y:a.y-.3,z:a.z};if(a.kind==="wall"){let e=(a.depth??.3)+.05;return{x:a.x-(a.nx??0)*e,y:a.y,z:a.z-(a.nz??0)*e}}}return{x:a.x,y:a.y,z:a.z}}function dp(a){return a==="pressure"||a==="return"||a==="waste"||a==="out"?"source":a==="suction"||a==="pump"||a==="in"?"sink":null}function Ls(a){return a==="skimmer"||a==="drain"?"source":"sink"}function Oi(a,t){let e=a[0]??t,n=1/0;for(let i=0;i<a.length;i++){let s=a[i],o=a[(i+1)%a.length],r=o[0]-s[0],l=o[1]-s[1],d=r*r+l*l,c=d>0?Math.max(0,Math.min(1,((t[0]-s[0])*r+(t[1]-s[1])*l)/d)):0,p=[s[0]+r*c,s[1]+l*c],h=Math.hypot(p[0]-t[0],p[1]-t[1]);h<n&&([e,n]=[p,h])}return e}function ut(a,t,e){let n=e.pool??{},i=Va(t,e);return s=>{let{kind:o,id:r,port:l}=dt(s);if(o==="port"){let d=n.ports?.find(p=>p.id===r);if(!d)return null;let c=d.kind==="skimmer"?i-(d.depth??0):d.kind==="drain"?Ha(t,e)+.03:d.kind==="inlet"?i-(d.depth??.3):.02;return{x:d.x,z:d.z,y:c}}if(o==="joint"){let d=n.joints?.find(c=>c.id===r);return d?sn(d,l):null}if(o!=="dev")return null;for(let d of a.floors){let c=d.furniture.find(f=>f.id===r);if(!c||!Ft.includes(c.type))continue;let p=l?lp(c,l):null,h=d.elevation-t.elevation;if(p)return{...p,y:p.y+Ht(d,c)+h};let u=c.type==="pool_filter"?c.h*.88:c.type==="pool_dosing"?.95:c.type==="pool_valve"?Xa:c.type==="pool_pump"?.2:.3;return{x:c.x,z:c.z,y:u+Ht(d,c)+h}}return null}}function Jt(a,t){if(a.heights)return a;let e=a.height??sr,n=t(a.from),i=t(a.to),s=[...n?[[n.x,n.z]]:[],...a.points,...i?[[i.x,i.z]]:[]];return{...a,points:s,heights:s.map(()=>e)}}var kt=a=>Math.round(a*1e3)/1e3;function Ai(a,t,e,n,i){let s=Jt(a,t),o=Xt(s,t),r=Qn(o,e);if(!r)return null;let l={id:n,x:kt(r.p[0]),z:kt(r.p[2]),y:kt(r.p[1])},d=Ti(s,t),c=Math.max(0,Math.min(s.points.length,r.seg+1-d)),p=s.heights??[],h=s.fittings??[],u={...s,to:`joint:${n}:in`,points:s.points.slice(0,c),heights:p.slice(0,c),fittings:h.filter(g=>g.at<=r.at)},f={...s,id:i,from:`joint:${n}:out1`,points:s.points.slice(c),heights:p.slice(c),fittings:h.filter(g=>g.at>r.at).map(g=>({...g,at:kt(g.at-r.at)}))};return{joint:l,first:u,second:f}}function Ti(a,t){return a.from&&t(a.from)?1:0}var Af=1.6;function pp(a,t,e){let n=[],i=s=>{let o=mt(a,[s[0],s[2]]);return o.d>-.35&&o.d<Af&&o.s>-.3&&o.s<a.length+.3?o:null};for(let s of t){let o=Jt(s,e),r=Xt(o,e);if(r.length<2)continue;let l={id:s.id,pieces:[],points:[],fittings:[],ends:[]};for(let p=1;p<r.length;p++){let h=i(r[p-1]),u=i(r[p]);h&&u&&l.pieces.push({k:p-1,s0:h.s,y0:r[p-1][1],d0:h.d,s1:u.s,y1:r[p][1],d1:u.d})}if(!l.pieces.length)continue;let d=Ti(o,e);o.points.forEach((p,h)=>{let u=r[h+d],f=u&&i(u);f&&l.points.push({i:h,s:f.s,y:u[1]})});let c=or(r);for(let p of s.fittings??[]){let h=Math.min(c,p.at),u=cc(r,h)?.p,f=u&&i(u);u&&f&&l.fittings.push({id:p.id,kind:p.kind,open:p.open!==!1,s:f.s,y:u[1]})}for(let[p,h]of[["from",r[0]],["to",r[r.length-1]]]){let u=(p==="from"?!s.from:!s.to)?i(h):null;u&&l.ends.push({end:p,s:u.s,y:h[1]})}n.push(l)}return n}var up=-.3;function En(a,t,e,n,i){let s=[],o=[],r=b=>t(b),l=[],d=a.from,c=[];for(let b of a.vias){if(b.kind!=="hole"){c.push(b.kind);continue}let _=e.find(x=>x.id===b.joint),y=r(d);if(!_||!y)continue;let $=r(`joint:${_.id}:inside`),w=r(`joint:${_.id}:outside`),E=b.dir?b.dir==="out":Math.hypot(y.x-$.x,y.z-$.z)<=Math.hypot(y.x-w.x,y.z-w.z);l.push({a:d,b:`joint:${_.id}:${E?"inside":"outside"}`,fits:c}),c=[],d=`joint:${_.id}:${E?"outside":"inside"}`}let p=a.to;if(p.length>1){let b=r(d),_=p.map(r).filter(y=>!!y);if(b&&_.length===p.length){let y=_.reduce((R,T)=>R+T.x,0)/_.length,$=_.reduce((R,T)=>R+T.z,0)/_.length,w=Math.hypot(b.x-y,b.z-$)||1,E=Math.min(1,w/2)/w,x=b.y<0||_.some(R=>R.y<0),M={id:i("joint"),kind:"tee",x:kt(y+(b.x-y)*E),z:kt($+(b.z-$)*E),y:x?up:kt(b.y)};o.push(M),l.push({a:d,b:`joint:${M.id}:in`,fits:c}),c=[],p.forEach((R,T)=>l.push({a:`joint:${M.id}:out${T+1}`,b:R,fits:[]})),p=[]}}p.length&&l.push({a:d,b:p[0],fits:c});let h=b=>{let{kind:_,id:y,port:$}=dt(b),w=_==="joint"?o.find(E=>E.id===y):void 0;return w?sn(w,$):r(b)},u=b=>n(b)==="source",f=b=>n(b)==="sink",g=a.to.some(u)&&!u(a.from)||f(a.from)&&!a.to.some(f);for(let b of l){let _=h(b.a),y=h(b.b);if(!_||!y)continue;let $=Tf(_,y,cp(b.a,e),cp(b.b,e)),w={id:i("pipe"),from:b.a,to:b.b,floor_id:a.floorId,points:$.map(x=>[x[0],x[2]]),heights:$.map(x=>x[1])},E=or(Xt(w,h));w.fittings=b.fits.map((x,M)=>({id:i("fit"),kind:x,at:kt(Math.min(E/2,.4+M*.25)),...x==="valve"?{open:!0}:{}})),g&&(w={...w,from:w.to,to:w.from,points:[...w.points].reverse(),heights:[...w.heights??[]].reverse(),fittings:w.fittings?.map(x=>({...x,at:kt(Math.max(0,E-x.at))}))}),s.push(w)}return{pipes:s,joints:o}}function cp(a,t){let{kind:e,id:n,port:i}=dt(a),s=e==="joint"&&i==="outside"?t.find(o=>o.id===n):void 0;return s?.kind==="wall"?[-(s.nx??0),-(s.nz??0)]:null}function Tf(a,t,e=null,n=null){let i=a.y<0||t.y<0?up:kt(Math.max(a.y,t.y)),s=[],[o,r]=[a.x,a.z];e&&([o,r]=[kt(o+e[0]*.5),kt(r+e[1]*.5)],s.push([o,kt(a.y),r]));let[l,d]=[t.x,t.z],c=[];return n&&([l,d]=[kt(l+n[0]*.5),kt(d+n[1]*.5)],c.push([l,kt(t.y),d])),s.push([kt(o),i,kt(r)]),Math.abs(l-o)>.01&&s.push([kt(l),i,kt(r)]),Math.abs(d-r)>.01&&s.push([kt(l),i,kt(d)]),s.push(...c),s.filter((p,h)=>h===0||Math.hypot(p[0]-s[h-1][0],p[1]-s[h-1][1],p[2]-s[h-1][2])>.001)}function hp(a,t,e){let n=s=>{let{kind:o,id:r,port:l}=dt(s),d=o==="joint"&&(l==="inside"||l==="outside")?t.find(c=>c.id===r):void 0;return d&&(d.kind==="wall"||d.kind==="floor")?{id:r,port:l}:null},i=[];for(let s of a.filter(o=>o.from===e||o.to===e)){let o={start:e,other:"",pipes:[],holes:[],fittings:[]},r=s,l=e,d=new Set;for(;r&&!d.has(r.id);){d.add(r.id),o.pipes.push(r.id),o.fittings.push(...(r.fittings??[]).map(u=>u.kind));let c=r.from===l?r.to:r.from,p=c?n(c):null;if(!p){o.other=c;break}o.holes.push({joint:p.id,dir:p.port==="inside"?"out":"in"}),l=`joint:${p.id}:${p.port==="inside"?"outside":"inside"}`;let h=r;r=a.find(u=>u!==h&&(u.from===l||u.to===l)),r||(o.other=l)}i.push(o)}return i}var Fn=.001,Sn=a=>Math.round(a*1e3)/1e3,Ke=(a,t)=>Math.hypot(t[0]-a[0],t[1]-a[1]);function zr(a){let{parts:t}=wt(a.rooms,{exterior:.24,interior:.12},a.walls??[]);return new Map([...t].map(([e,n])=>[e,[...new Set(n.map(Sn))]]))}function Rr(a,t,e){if(!Array.isArray(a))return a??null;let n=t?.length?t:[0],i=0;for(let s=0;s<n.length;s++)n[s]<=e+Fn&&(i=s);return a[i]??null}function mp(a,t,e,n,i){let s=zr(a);for(let o of a.rooms){let r=e.get(o.id);if(!r)continue;let l=o.id===n;!l&&!r.some(d=>Array.isArray(d))||(o.wall_heights=o.points.map((d,c)=>{let h=(s.get(`${o.id}:${c}`)??[0]).map(u=>{let[f,g]=l?i(c,u):[c,u];return Rr(r[f],t.get(`${o.id}:${f}`),g)});return h.every(u=>u===h[0])?h[0]:h}))}}function gp(a){let t=a.map(e=>e&&e.length?e:null);return t.some(e=>e)?t:void 0}function bp(a,t,e,n){let i=a.rooms.find(h=>h.id===t);if(!i)return;let s=i.points.length,o=i.points[e],r=i.points[(e+1)%s],l=Ke(o,n),d=Ke(o,r)||1,c=zr(a),p=new Map(a.rooms.map(h=>[h.id,h.wall_heights?structuredClone(h.wall_heights):void 0]));if(i.points.splice(e+1,0,n),i.wall_thickness&&i.wall_thickness.splice(e+1,0,i.wall_thickness[e]??null),i.wall_slopes){let h=i.wall_slopes[e]??null,u=h?Sn(h[0]+(h[1]-h[0])*l/d):0;h&&(i.wall_slopes[e]=[h[0],u]),i.wall_slopes.splice(e+1,0,h?[u,h[1]]:null)}if(i.wall_splits){let h=i.wall_splits[e]??[],u=i.wall_splits.slice(0,s);for(;u.length<s;)u.push(null);u[e]=h.filter(f=>f<l-Fn),u.splice(e+1,0,h.filter(f=>f>l+Fn).map(f=>Sn(f-l))),i.wall_splits=gp(u)}for(let h of a.openings)h.room_id!==t||h.wall||(h.edge>e?h.edge+=1:h.edge===e&&h.offset>l&&(h.edge=e+1,h.offset=Sn(h.offset-l)));mp(a,c,p,t,(h,u)=>h<=e?[h,u]:h===e+1?[e,u+l]:[h-1,u])}var fp=(a,t)=>JSON.stringify(a??null)===JSON.stringify(t??null);function _p(a,t,e){let n=a.rooms.find(g=>g.id===t);if(!n||n.points.length<=3)return null;let i=n.points.length,s=(e-1+i)%i,o=n.points,r=(e+1)%i,l=Ke(o[s],o[e]),d=l+Ke(o[e],o[r])-Ke(o[s],o[r])<.005;if(d)return{inLine:d,openings:[],fit:[],height:!1,thickness:!1};let c=g=>a.openings.filter(b=>b.room_id===t&&!b.wall&&b.edge===g).sort((b,_)=>b.offset-_.offset),p=[...c(s),...c(e)],h=Ke(o[s],o[r]),u=[],f=0;for(let g of p){let b=g.edge===e?g.offset+l:g.offset;b-g.width/2<f-Fn||b+g.width/2>h+Fn||(u.push(g),f=b+g.width/2)}return{inLine:d,openings:p,fit:u,height:!fp(n.wall_heights?.[s],n.wall_heights?.[e]),thickness:!fp(n.wall_thickness?.[s],n.wall_thickness?.[e])}}function yp(a,t,e,n=[]){let i=a.rooms.find(_=>_.id===t);if(!i||i.points.length<=3)return;let s=i.points.length,o=(e-1+s)%s,r=i.points,l=Ke(r[o],r[e]),d=Ke(r[e],r[(e+1)%s]),c=l+d-Ke(r[o],r[(e+1)%s])<.005,p=zr(a),h=new Map(a.rooms.map(_=>[_.id,_.wall_heights?structuredClone(_.wall_heights):void 0])),u=h.get(t),f=c&&!!u&&Rr(u[o],p.get(`${t}:${o}`),l-Fn)!==Rr(u[e],p.get(`${t}:${e}`),0);if(i.wall_splits||f){let _=(i.wall_splits??[]).slice(0,s);for(;_.length<s;)_.push(null);let y=[..._[o]??[],...c?(_[e]??[]).map($=>Sn($+l)):[],...f?[Sn(l)]:[]];_[o]=[...new Set(y)].sort(($,w)=>$-w),_.splice(e,1),i.wall_splits=gp(_)}i.points.splice(e,1);let g=i.points.length,b=(e-1+g)%g;i.wall_thickness&&i.wall_thickness.splice(e,1),i.wall_slopes&&(i.wall_slopes.splice(e,1),i.wall_slopes[b]=null,i.wall_slopes.every(_=>!_)&&(i.wall_slopes=void 0)),a.openings=a.openings.filter(_=>_.room_id!==t||_.wall||c||_.edge!==e&&_.edge!==o||n.includes(_.id)).map(_=>_.room_id!==t||_.wall?_:_.edge===e?{..._,edge:b,offset:Sn(_.offset+l)}:_.edge>e?{..._,edge:_.edge-1}:_),mp(a,p,h,t,(_,y)=>_===b?c&&y>=l-Fn?[e,y-l]:[o,Math.min(y,l)]:[_>=e?_+1:_,y])}var Hs=class{onPointerDown(t){this._ctx=null,this._fixedHint=!1,this.fixedPan=!1;let e=!!this._placing;if(this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&!e&&(this._tool==="select"||this._tool==="furniture")){let n=this.localPoint(t),i=t.target;this.pressStart=n,this.pressTimer=window.setTimeout(()=>{let s=this.drag;s&&"moved"in s&&s.moved||(this.drag=null,this.openContext(i,n,"touch"))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="furnset"?n=["furniture",e.ids.find(i=>this.isFixedItem("furniture",i))??e.ids[0]]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&rr.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){t.button===2&&(this.rightPress={at:n,target:t.target,moved:!1}),this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),s=t.target;if(this._wallPick){this.pickWall(i);return}if(this._kerbPick){this.setKerb(i);return}if(this._bgLevel&&this.isEditor&&this.floor?.background){let x=[...this._bgLevel,i];x.length<2?this._bgLevel=x:this.applyBgLevel(x[0],x[1]);return}if(this.bgHandles()&&this.floor.background&&s.closest("[data-bg-rotate]")){let x=this.floor.background,M=this._images[x.image_id],R=x.width*(M?.aspect??1),T=[x.x+x.width/2,x.z+R/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-T[1],i[0]-T[0]),rot:x.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isEditor&&this.floor?.background){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(s.closest("[data-bg-handle]")||s.closest("[data-bg]"))){let x=this.floor.background;this.drag=s.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:x.x,bz:x.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isEditor&&this.floor?.background){let x=this.floor.background;if(s.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(s.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:x.x,bz:x.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let x=this.snap(i,void 0,t.altKey);this.drag={kind:"freewall",start:x,end:x};return}if(this._tool==="pool"&&this.poolDown(t,s,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let x=s.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),M=s.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),R=s.closest("[data-roof]")?.getAttribute("data-roof"),T=this._tool==="energy"?s.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(T){this._solarId=null,this.selectItem("furniture",T),this.drag=this.isEditor?{kind:"furniture",id:T,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&s.closest("[data-holo-pt]")){this.drag=this.isEditor?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let S=s.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),z=C=>!!this._doc.settings.roof.cables?.find(W=>W.id===C)?.locked;if(S&&this.isEditor&&!z(S.slice(0,S.lastIndexOf(":")))){let C=S.lastIndexOf(":"),W=S.slice(0,C),G=Number(S.slice(C+1));if(this.doubleTap(t,`cable:${S}`)){this.change(Y=>{let X=Y.settings.roof.cables?.find(it=>it.id===W);X&&X.points.length>1&&X.points.splice(G,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:W,index:G,base:this._doc,moved:!1};return}let H=s.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(H&&this.isEditor&&!z(H)){let C=Number(s.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),W=this._doc;this.change(G=>{let Y=G.settings.roof.cables?.find(X=>X.id===H);Y&&Y.points.splice(C,0,[k(i[0]),k(i[1])])}),this.drag={kind:"cablept",id:H,index:C,base:W,moved:!0};return}let D=s.closest("[data-cable]")?.getAttribute("data-cable");if(D){if(this._cableId=D,this.isEditor&&this._floorId&&!this._doc.settings.roof.cables?.some(C=>C.id===D)){let C=this._doc;this.layCable(D);let W=this._doc.settings.roof.cables?.find(Y=>Y.id===D),G=this.cableSegments().filter(Y=>Y.key===D);if(W&&G.length){let Y=[[G[0].a[0],G[0].a[2]],...W.points,[G[G.length-1].b[0],G[G.length-1].b[2]]],X=0,it=1/0;for(let U=0;U+1<Y.length;U++){let Z=bc(i,Y[U],Y[U+1]);Z<it&&(it=Z,X=U)}this.change(U=>{let Z=U.settings.roof.cables?.find(It=>It.id===D);Z&&Z.points.splice(X,0,[k(i[0]),k(i[1])])}),this.drag={kind:"cablept",id:D,index:X,base:C,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let L=this._tool==="energy"?s.closest("[data-solar]")?.getAttribute("data-solar"):null,P=this._tool==="energy"?s.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(P&&this.isEditor){this.drag={kind:"solarturn",id:P,base:this._doc,moved:!1};return}if(L){let S=s.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&L===this._solarId&&S&&this.isEditor){this.toggleSolarCell(S),this.drag={kind:"pan",last:n};return}L!==this._solarId&&(this._solarPick=!1),this._solarId=L,this._roofId=null;let z=this._doc.settings.roof.solar?.find(W=>W.id===L),H=z?Ct(this._doc,z)??void 0:void 0,D=H?this.faceHit(H,i):null,C=z&&D?{du:D.u-z.u,ds:Number.isNaN(D.s)?0:D.s-z.v}:null;this.drag=this.isEditor&&!z?.locked?{kind:"solarmove",id:L,start:i,startScreen:n,base:this._doc,moved:!1,grab:C}:{kind:"pan",last:n};return}let A=this._tool==="roof"?s.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(A){this._roofWinId=A,this._roofId=null;let S=this._doc.settings.roof.windows?.find(C=>C.id===A),z=S?pt(this._doc).find(C=>C.key===S.face):void 0,H=z?Ri(z,i):null,D=S&&H?{du:H.u-S.u,ds:H.s-S.v}:null;this.drag=this.isEditor&&!S?.locked?{kind:"solarmove",id:A,start:i,startScreen:n,base:this._doc,moved:!1,grab:D,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let V=this._tool==="energy"?s.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(V){this._solarId=null,this.selectItem("furniture",V),this.drag=this.isEditor?{kind:"furniture",id:V,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(M&&this.isEditor){let[S,z]=M.split(":");this.drag={kind:"roofvertex",id:S,index:Number(z),base:this._doc,moved:!1}}else if(x&&this.isEditor){let[S,z,H]=x.split(":");this.drag={kind:"roofcorner",id:S,corner:[z==="1"?1:0,H==="1"?1:0],base:this._doc,moved:!1}}else if(R){let S=this.roofFixed(this._doc.settings.roof.sections?.find(z=>z.id===R));S&&this._roofId===R&&(this._fixedHint=!0),this._roofId=R,this.drag=this.isEditor&&!S?{kind:"roofmove",id:R,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isEditor){this._roofId=null;let S=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:S,end:S,roof:!0}}else this.drag={kind:"pan",last:n};return}let o=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||o)&&!this._outdoorFree||this._tool==="hole"){let x=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:x,end:x,outdoor:this._tool==="outdoor"||o,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||o)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this._openingNote=null;let x=s.closest("[data-opening]");x?this.pressOpening(x.getAttribute("data-opening"),n):this.placeOpening(this._openingPreset,n,this.snapOff(t))||(this.drag={kind:"pan",last:n});return}if(this._placing&&this.isEditor&&(this._tool==="select"||this._tool==="furniture")){this.placeArmed(this.placeTarget(i,this.snapOff(t)),t.ctrlKey||t.metaKey),this.drag=null;return}if(this.isEditor&&(this._tool==="select"||this._tool==="furniture")&&(t.shiftKey||this._multiMode)){let x=s.closest("[data-furniture]");x?(this.toggleMulti(x.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let r=s.closest("[data-pet]");if(r&&this.isEditor){this.drag={kind:"pet",id:r.getAttribute("data-pet"),start:i,startScreen:n,base:this._doc,moved:!1};return}let l=s.closest("[data-device]");if(l&&this.isEditor){this.drag={kind:"device",entityId:l.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let d=s.closest("[data-opening]");if(d&&!(s.getAttribute("class")==="fp3d-open-hit"&&this.firmItemAt(i,t.pointerType))){this.pressOpening(d.getAttribute("data-opening"),n);return}let c=s.closest("[data-resize]");if(c&&this.isEditor){let[x,M,R]=c.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:x,corner:[M==="1"?1:-1,R==="1"?1:-1],base:this._doc,moved:!1};return}let p=s.closest("[data-rotate]");if(p&&this.isEditor){this.drag={kind:"rotate",id:p.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let h=t.altKey?kd(this.itemHits(s,i,t.pointerType),this.selection(),this._furnitureId):null,u=h?h.grab??this.pickItem(s,i,t.pointerType):this.pickItem(s,i,t.pointerType);if(u){let x=u,M=Date.now(),R=this.lastFurnTap?.id===x&&M-this.lastFurnTap.t<400;this.lastFurnTap={id:x,t:M};let T=this.floor.furniture.find(P=>P.id===x);R&&T?.group?(this.selectItem("furniture",x),this._single=!0):(!this.selection().includes(x)||this._single)&&this.selectItem("furniture",x);let L=this.selection();this.drag=this.isEditor?L.length>1?{kind:"furnset",ids:L,start:i,startScreen:n,base:this._doc,moved:!1,pick:h?.next}:{kind:"furniture",id:x,start:i,startScreen:n,base:this._doc,moved:!1,pick:h?.next}:{kind:"pan",last:n};return}let f=s.closest("[data-vertex]"),g=s.closest("[data-mid]");if(f&&this.room&&this.isEditor){this._vertex=Number(f.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(g&&this.room&&this.isEditor){let x=Number(g.getAttribute("data-mid")),M=this.room.points,R=M[x],T=M[(x+1)%M.length],L=[k((R[0]+T[0])/2),k((R[1]+T[1])/2)],P=this._doc,A=this.room.id;this.change((V,S)=>{bp(S,A,x,L)},P,!1),this._vertex=x+1,this.drag={kind:"vertex",roomId:A,index:x+1,base:P,moved:!0};return}let b=s.closest("[data-wall-end]");if(b&&this.isEditor){let[x,M]=b.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:x,end:M,start:i,startScreen:n,base:this._doc,moved:!1};return}let _=s.closest("[data-free-wall]");if(_){let x=_.getAttribute("data-free-wall");this.selectItem("wall",x),this.drag=this.isEditor?{kind:"wallmove",id:x,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let y=s.closest("[data-out-box]");if(y&&this.isEditor){let[x,M]=y.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:x,corner:Number(M),base:this._doc,moved:!1};return}let $=s.closest("[data-out-vertex]");if($&&this.isEditor){let[x,M]=$.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:x,index:Number(M),base:this._doc,moved:!1};return}let w=s.closest("[data-outdoor]");if(w&&!s.closest("[data-room]")&&!this.roomAt(i)){let x=this.outdoorAt(i)??w.getAttribute("data-outdoor");this.selectItem("outdoor",x),this.drag=this.isEditor?{kind:"outdoor",id:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let E=s.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(E){E!==this._roomId&&(this._vertex=null);let x=E===this._roomId&&!this._furnitureId&&!this._openingId&&!this._deviceId&&!this._outdoorId&&!this._wallId&&!this._multi.length;this.selectItem("room",E),this.drag=this.isEditor&&this._tool!=="furniture"&&x?{kind:"room",roomId:E,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){if(this.rightPress&&!this.rightPress.moved){let s=this.localPoint(t);Math.hypot(s[0]-this.rightPress.at[0],s[1]-this.rightPress.at[1])>5&&(this.rightPress.moved=!0)}if(this.pressStart){let s=this.localPoint(t);Math.hypot(s[0]-this.pressStart[0],s[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let s=this.pinchState();s&&(this.zoomAt(s.dist/Math.max(1,this.pinch.dist),...s.mid),this._view={...this._view,ox:this._view.ox+s.mid[0]-this.pinch.mid[0],oy:this._view.oy+s.mid[1]-this.pinch.mid[1]},this.pinch=s);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._placing&&(this._placeAt=this.placeTarget(n,this.snapOff(t))),this._tool!=="select"&&this._tool!=="furniture"&&this._tool!=="opening"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey)),this._tool==="opening"&&t.pointerType!=="touch"&&this.hoverOpening(t.target,e,this.snapOff(t));return}switch(i.kind){case"pan":this.panCursor(!0),this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this.panCursor(!0),this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let s=this.snap(n,void 0,t.altKey);t.shiftKey&&(s=Math.abs(s[0]-i.start[0])>Math.abs(s[1]-i.start[1])?[s[0],i.start[1]]:[i.start[0],s[1]]),i.end=s,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=(i.base.floors.find(r=>r.id===this._floorId)?.walls??[]).find(r=>r.id===i.id);if(!s)return;let o;if(i.end){let r=this.snap(n,void 0,t.altKey);o=i.end==="a"?{a:r,b:s.b}:{a:s.a,b:r}}else{let r=t.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/r)*r,d=Math.round((n[1]-i.start[1])/r)*r;o={a:[k(s.a[0]+l),k(s.a[1]+d)],b:[k(s.b[0]+l),k(s.b[1]+d)]}}this.changeFloor(r=>Object.assign((r.walls??[]).find(l=>l.id===i.id),o),i.base);break}case"vertex":{let s=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((o,r)=>{r.rooms.find(l=>l.id===i.roomId).points[i.index]=s},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===i.roomId);if(!s)return;let o=this.roomDelta(s,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),r=i.base.floors.find(d=>d.id===this._floorId),l=new Set(r.placements.filter(d=>K([d.x,d.z],s.points)).map(d=>d.entity_id));this.change((d,c)=>{let p=c.rooms.find(h=>h.id===i.roomId);p.points=s.points.map(([h,u])=>[k(h+o[0]),k(u+o[1])]),c.placements=r.placements.map(h=>l.has(h.entity_id)?{...h,x:k(h.x+o[0]),z:k(h.z+o[1])}:h)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=t.altKey?.01:this._doc.settings.grid,o=k(Math.round((n[0]-i.start[0])/s)*s),r=k(Math.round((n[1]-i.start[1])/s)*s),l=i.base.settings.roof.sections?.find(d=>d.id===i.id);if(!l)return;this.change(d=>{let c=d.settings.roof.sections?.find(p=>p.id===i.id);c&&(Object.assign(c,{x0:k(l.x0+o),x1:k(l.x1+o),z0:k(l.z0+r),z1:k(l.z1+r)}),l.pivot&&(c.pivot=[k(l.pivot[0]+o),k(l.pivot[1]+r)]),l.points&&(c.points=l.points.map(([p,h])=>[k(p+o),k(h+r)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let s=i.base.settings.roof.solar?.find(h=>h.id===i.id),o=s?Ct(i.base,s):null;if(!s||!o)return;let[r,l]=ei(o,s),d=Math.atan2(n[0]-r,-(n[1]-l))*180/Math.PI,c=t.altKey?1:15;d=Math.round(d/c)*c;let p=ti(i.base,s,d);this.change(h=>{let u=h.settings.roof.solar?.find(f=>f.id===i.id);u&&Object.assign(u,p)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.win?i.base.settings.roof.windows?.find(b=>b.id===i.id):void 0,o=i.win?s?Te(s):void 0:i.base.settings.roof.solar?.find(b=>b.id===i.id),r=i.win?pt(i.base):[...pt(i.base),...this._floorId?Qt(i.base,this._floorId):[]],l=o?Ct(i.base,o,r):null;if(!o||!l)return;let d=t.altKey?.01:.05,c=b=>k(Math.round(b/d)*d),p=l.unbounded?null:Cc(r,n),h=l,u,f;if(p&&i.grab)h=p.face,u=c(p.u-i.grab.du),f=Number.isNaN(p.s)?p.face.key===o.face?o.v:Math.max(0,p.face.ls-1.5):c(p.s-i.grab.ds);else{let b=n[0]-i.start[0],_=n[1]-i.start[1],y=[l.es[0],l.es[2]],$=y[0]*y[0]+y[1]*y[1]||1;u=c(o.u+b*l.eu[0]+_*l.eu[2]),f=c(o.v+(b*y[0]+_*y[1])/$)}let g=je(h,{...o,face:h.key,u,v:f,tilt:h.flat?o.tilt??15:o.tilt});this.change(b=>{if(i.win){let y=b.settings.roof.windows?.find($=>$.id===i.id);y&&Object.assign(y,{face:h.key,...g});return}let _=b.settings.roof.solar?.find(y=>y.id===i.id);_&&Object.assign(_,{face:h.key,...g},h.flat&&_.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let s=this.snap(n,void 0,t.altKey),o=i.base.floors.find(_=>_.id===this._floorId)?.outdoor.find(_=>_.id===i.id);if(!o?.pool_shape)return;let r=ft(o.points),d=[[r.x0,r.z0],[r.x1,r.z0],[r.x1,r.z1],[r.x0,r.z1]][(i.corner+2)%4],c=s[0]-d[0],p=s[1]-d[1];if(o.pool_shape==="round"){let _=Math.max(Math.abs(c),Math.abs(p),.5);c=Math.sign(c||1)*_,p=Math.sign(p||1)*_}else c=Math.sign(c||1)*Math.max(Math.abs(c),.5),p=Math.sign(p||1)*Math.max(Math.abs(p),.5);let h=Math.min(d[0],d[0]+c),u=Math.max(d[0],d[0]+c),f=Math.min(d[1],d[1]+p),g=Math.max(d[1],d[1]+p),b=o.pool_shape;this.change((_,y)=>{let $=y.outdoor.find(w=>w.id===i.id);$&&($.points=Ln(b,k(h),k(f),k(u),k(g)))},i.base,!1);break}case"pipept":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change((o,r)=>{let l=r.outdoor.find(d=>d.id===i.pool)?.pool?.pipes?.find(d=>d.id===i.pipe);l&&(l.points[i.index]=[k(s[0]),k(s[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change((o,r)=>{let l=r.outdoor.find(h=>h.id===i.pool),d=l?.pool?.ports?.find(h=>h.id===i.id);if(!l||!d)return;let[c,p]=d.kind==="skimmer"||d.kind==="inlet"?Oi(l.points,s):s;d.x=k(c),d.z=k(p)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let s=i.base.floors.flatMap(r=>r.outdoor).find(r=>r.id===i.pool)?.pool?.joints?.find(r=>r.id===i.id);if(!s)break;let o=this.snap([s.x+n[0]-i.start[0],s.z+n[1]-i.start[1]],void 0,t.altKey);if(s.kind==="wall"){let r=[-(s.nz??0),s.nx??0],l=(o[0]-s.x)*r[0]+(o[1]-s.z)*r[1];o=[s.x+r[0]*l,s.z+r[1]*l]}this.change(r=>{let l=r.floors.flatMap(d=>d.outdoor).find(d=>d.id===i.pool)?.pool?.joints?.find(d=>d.id===i.id);l&&([l.x,l.z]=[k(o[0]),k(o[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let s=i.base.floors.flatMap(r=>r.furniture).find(r=>r.id===i.id);if(!s)break;let o=this.snap([s.x+n[0]-i.start[0],s.z+n[1]-i.start[1]],void 0,t.altKey);this.change(r=>{let l=r.floors.flatMap(d=>d.furniture).find(d=>d.id===i.id);l&&([l.x,l.z]=[k(o[0]),k(o[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let s=this.snap(n,void 0,t.altKey),o=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!o)return;let r=Le(o.points);this.change((l,d)=>{let c=d.outdoor.find(f=>f.id===i.id);if(!c)return;let p=o.points.map(f=>[...f]),h=i.index,u=o.points[h];p[h]=[k(s[0]),k(s[1])],r&&o.points.forEach((f,g)=>{g!==h&&(Math.abs(f[0]-u[0])<1e-6&&(p[g][0]=k(s[0])),Math.abs(f[1]-u[1])<1e-6&&(p[g][1]=k(s[1])))}),c.points=p},i.base,!1);break}case"cablept":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change(o=>{let r=o.settings.roof.cables?.find(l=>l.id===i.id);r&&r.points[i.index]&&(r.points[i.index]=[k(s[0]),k(s[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change(o=>o.settings.roof.hologram={...o.settings.roof.hologram??ci,place:"free",x:k(s[0]),z:k(s[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let s=n[0]-i.start[0],o=n[1]-i.start[1];this.change((r,l)=>{l.background&&(l.background.x=k(i.bx+s),l.background.z=k(i.bz+o))},i.base,!1);break}case"bgrotate":{i.moved=!0;let s=this.floor?.background,o=s?this._images[s.image_id]:void 0;if(!s||!o)break;let r=s.width*o.aspect,l=[s.x+s.width/2,s.z+r/2],d=Math.atan2(n[1]-l[1],n[0]-l[0]),c=i.rot+(d-i.start)*180/Math.PI;c=t.shiftKey?Math.round(c/15)*15:Math.round(c*10)/10,c=((c+180)%360+360)%360-180,this.change((p,h)=>{h.background&&(h.background.rotation=c)},i.base,!1);break}case"bgscale":{i.moved=!0;let s=this.floor?.background,o=s?this._images[s.image_id]:void 0;if(!s||!o)break;let[r]=this.bgLocal(s,n,o.aspect),l=Math.max(.5,k(r));this.change((d,c)=>{c.background&&(c.background.width=l)},i.base,!1);break}case"roofvertex":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change(o=>{let r=o.settings.roof.sections?.find(l=>l.id===i.id);!r?.points||i.index>=r.points.length||(r.points[i.index]=[k(s[0]),k(s[1])],Object.assign(r,Fi(r.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change(o=>{let r=o.settings.roof.sections?.find(l=>l.id===i.id);r&&(i.corner[0]?r.x1=k(s[0]):r.x0=k(s[0]),i.corner[1]?r.z1=k(s[1]):r.z0=k(s[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId),o=s?.openings.find(d=>d.id===i.id),r=o&&s?qt(o,s.rooms,s.walls??[]):null;if(!o||!r)return;i.peers??=$s(s,o);let l=this.snapOnEdge(r.room,r.edge,n,o.width,i.peers,this.snapOff(t));this.changeFloor(d=>Kt(d.openings.find(c=>c.id===i.id),{offset:l}),i.base);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(b=>b.id===this._floorId),o=s?.furniture.find(b=>b.id===i.id);if(!s||!o)return;let r=this.snapOff(t),l=r?.01:this._doc.settings.grid,d=o.x+n[0]-i.start[0],c=o.z+n[1]-i.start[1],p=r?null:Os([d,c],Qc(o),i.lines??=this.alignLinesFor(s,o.id),ni(this._view.scale)),h=p?.x?k(p.p[0]):k(Math.round(d/l)*l),u=p?.z?k(p.p[1]):k(Math.round(c/l)*l),f=o.rotation,g=r?null:this.snapToWall({...o,x:h,z:u});g&&({x:h,z:u,rotation:f}=g),this.showGuides(p?.guides.length?p.guides.filter(b=>Math.abs(b.axis==="x"?h-p.p[0]:u-p.p[1])<.002):[]),this.changeFloor(b=>Kt(b.furniture.find(_=>_.id===i.id),{x:h,z:u,rotation:f}),i.base);break}case"furnset":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=t.altKey?.01:this._doc.settings.grid,o=k(Math.round((n[0]-i.start[0])/s)*s),r=k(Math.round((n[1]-i.start[1])/s)*s),l=new Set(i.ids);this.changeFloor(d=>{for(let c of d.furniture)l.has(c.id)&&Object.assign(c,{x:k(c.x+o),z:k(c.z+r)})},i.base);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.outdoor.find(d=>d.id===i.id);if(!s)return;let o=t.altKey?.01:this._doc.settings.grid,r=Math.round((n[0]-i.start[0])/o)*o,l=Math.round((n[1]-i.start[1])/o)*o;this.change((d,c)=>{let p=c.outdoor.find(h=>h.id===i.id);p.points=s.points.map(([h,u])=>[k(h+r),k(u+l)]),p.pool?.ports&&s.pool?.ports&&(p.pool.ports=s.pool.ports.map(h=>({...h,x:k(h.x+r),z:k(h.z+l)})))},i.base,!1);break}case"resize":{i.moved=!0;let s=i.base.floors.find(r=>r.id===this._floorId)?.furniture.find(r=>r.id===i.id);if(!s)return;let o=qa(s,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.changeFloor(r=>Kt(r.furniture.find(l=>l.id===i.id),o),i.base);break}case"rotate":{i.moved=!0;let s=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!s)return;let o=Math.atan2(-(n[0]-s.x),n[1]-s.z)*180/Math.PI,r=t.altKey?1:15;o=(Math.round(o/r)*r%360+360)%360,this.changeFloor(l=>Kt(l.furniture.find(d=>d.id===i.id),{rotation:o}),i.base);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(d=>d.id===this._floorId)?.placements.find(d=>d.entity_id===i.entityId);if(!s)return;let o=t.altKey?.01:this._doc.settings.grid,r=k(Math.round((s.x+n[0]-i.start[0])/o)*o),l=k(Math.round((s.z+n[1]-i.start[1])/o)*o);this.changeFloor(d=>Kt(d.placements.find(c=>c.entity_id===i.entityId),{x:r,z:l}),i.base);break}case"pet":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.settings.pets?.list.find(l=>l.id===i.id);if(s?.x==null||s.z==null)return;let[o,r]=[s.x,s.z];this.change(l=>Nl(l,i.id,o+n[0]-i.start[0],r+n[1]-i.start[1],t.altKey?.01:this._doc.settings.grid),i.base,!1);break}}}onPointerUp(t){let e=this.rightPress;if(this.rightPress=null,e&&t.button===2&&(this.rightUp=performance.now(),!e.moved&&t.type!=="pointercancel"&&(this._tool==="select"||this._tool==="furniture")&&this.openContext(e.target,e.at)),clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,this.panCursor(!1),(n?.kind==="opening"||n?.kind==="furniture")&&(this._guides={}),!n||t.type==="pointercancel"){n&&rr.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let i=this.localPoint(t);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[s,o]=n.start,[r,l]=n.end;if(Math.abs(r-s)>=.2&&Math.abs(l-o)>=.2){let d=[Math.min(s,r),Math.min(o,l)],c=[Math.max(s,r),Math.max(o,l)],p=[d,[c[0],d[1]],c,[d[0],c[1]]];n.outdoor?this.addOutdoor(p):n.hole?this.addHole(d,c):n.roof?this.addRoofSection(d,c):this.addRoom(p)}this._guides={};break}case"tap":if(n.panning)break;if(this._tool==="measure"&&!this._draft.length)this._draft=[this.snap(this.toWorld(...i),void 0,t.altKey)];else if(this._tool==="measure"){let s=this.pulledPoint(this.snap(this.toWorld(...i),void 0,t.altKey)),o=this._measureLen>0;this.addDraftPoint(s,i),o&&(this._measureLen=0)}else this.addDraftPoint(this.snap(this.toWorld(...i),void 0,t.altKey),i);break;case"marquee":{let[s,o]=[Math.min(n.start[0],n.end[0]),Math.max(n.start[0],n.end[0])],[r,l]=[Math.min(n.start[1],n.end[1]),Math.max(n.start[1],n.end[1])],d=(this.floor?.furniture??[]).filter(c=>c.x>=s&&c.x<=o&&c.z>=r&&c.z<=l).map(c=>c.id);d.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(d)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":n.moved?this.pushHistory(n.base):(n.kind==="furniture"||n.kind==="furnset")&&n.pick?this.selectItem("furniture",n.pick):(n.kind==="poolport"||n.kind==="pooljoint")&&this.openCard(n.pool,`${n.kind==="poolport"?"port":"joint"}:${n.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"pooldev":{n.moved?this.pushHistory(n.base):this._doc.floors.flatMap(s=>s.furniture).find(s=>s.id===n.id)?.type==="pool_valve"?this.togglePoolValve(n.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${n.id}`);break}case"pet":n.moved&&this.pushHistory(n.base);break;case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),n.moved&&n.kind==="vertex"&&this.noteResize(n.roomId,n.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}roomDelta(t,e,n){if(n)return e;let i=this._doc.settings.grid,s=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],r=bn/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let d of l.points)for(let c of t.points){let p=Math.hypot(c[0]+e[0]-d[0],c[1]+e[1]-d[1]);p<r&&(r=p,s=[d[0]-c[0],d[1]-c[1]],this._guides={point:d})}return s}roomAt(t){return(this.floor?.rooms??[]).filter(i=>K(t,i.points)).sort((i,s)=>yt(i.points)-yt(s.points))[0]?.id??null}outdoorAt(t){return(this.floor?.outdoor??[]).filter(i=>i.points.length>=3&&K(t,i.points)).sort((i,s)=>yt(i.points)-yt(s.points))[0]?.id??null}panCursor(t){this.renderRoot?.querySelector?.("svg.fp3d-plan")?.classList?.toggle("fp3d-panning",t)}onContextMenu(t){t.preventDefault(),!(this.rightPress||performance.now()-this.rightUp<600)&&(this._tool!=="select"&&this._tool!=="furniture"||(this.drag=null,this.openContext(t.target,this.localPoint(t))))}doubleTap(t,e){let n=performance.now(),i=t.detail>=2||this.lastTap?.key===e&&n-this.lastTap.at<450;return this.lastTap=i?null:{key:e,at:n},i}};function vp(a){return a.typing?"release":a.menu?"close_menu":a.placing?"cancel_place":a.pipeDraft?"cancel_pipe":a.pipeMode?"end_pipe_mode":a.drawing?"clear_draft":a.item?"deselect_item":a.tool!=="select"?"select_tool":"deselect"}var Vs=class{pickerOpen(){return[...this.renderRoot?.querySelectorAll?.("fp3d-entity-picker")??[]].some(e=>e.open)}escape(){if(this._kerbPick){this._kerbPick=!1;return}let t=vp({typing:ls(as(this.renderRoot)),menu:!!this._ctx,placing:!!this._placing,pipeDraft:!!this._pipeDraft,pipeMode:this._pipeMode,drawing:this._draft.length>0,item:!!(this._furnitureId||this._openingId||this._deviceId||this._outdoorId||this._wallId),tool:this._tool,room:!!this._roomId});t==="release"?Ko(this.renderRoot):t==="close_menu"?this._ctx=null:t==="cancel_place"?this.cancelPlacing():t==="cancel_pipe"?this._pipeDraft=null:t==="end_pipe_mode"?this._pipeMode=!1:(t==="clear_draft"?this._draft=[]:t==="deselect_item"?this.selectItem("room",this._roomId):t==="select_tool"?this._tool="select":this.selectItem("room",null),this._cursor=null)}keysFree(t){let e=t[0];return!e||e===this||typeof document<"u"&&(e===document.body||e===document.documentElement)?!0:typeof SVGElement<"u"&&e instanceof SVGElement}nudge(t,e){let n=["nudge",this._furnitureId?this.selection().join(","):"",this._deviceId,this._openingId,this._wallId,this._outdoorId,this._roomId,this._vertex].join("|");this.mergeKey=n;try{return this.nudgeBy(t,e)}finally{this.mergeKey=null}}nudgeBy(t,e){let n=this.floor;if(!n||!this.isEditor)return!1;let i=this.selectedFix,s=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||s.some(r=>this.isFixedItem("furniture",r)))return this._fixedHint=!0,!0;let o=r=>[k(r[0]+t),k(r[1]+e)];if(s.length>1){let r=new Set(s);return this.change((l,d)=>{for(let c of d.furniture)r.has(c.id)&&([c.x,c.z]=o([c.x,c.z]))}),!0}if(this._deviceId){let r=this._deviceId;if(!n.placements.some(l=>l.entity_id===r))return!1;this.change((l,d)=>{let c=d.placements.find(p=>p.entity_id===r);[c.x,c.z]=o([c.x,c.z])})}else if(this._furnitureId){let r=this._furnitureId;this.change((l,d)=>{let c=d.furniture.find(p=>p.id===r);c&&([c.x,c.z]=o([c.x,c.z]))})}else if(this._openingId){let r=this.opening,l=r?qt(r,n.rooms,n.walls??[]):null;if(!r||!l)return!1;let d=l.room.points[l.edge],c=l.room.points[(l.edge+1)%l.room.points.length],p=Math.hypot(c[0]-d[0],c[1]-d[1])||1,h=(t*(c[0]-d[0])+e*(c[1]-d[1]))/p;if(Math.abs(h)<1e-9)return!0;this.updateOpening({offset:this.clampOffset(l.room,l.edge,r.width,r.offset+h)})}else if(this._wallId){let r=this._wallId;this.change((l,d)=>{let c=(d.walls??[]).find(p=>p.id===r);c&&([c.a,c.b]=[o(c.a),o(c.b)])})}else if(this._outdoorId){let r=this._outdoorId;this.change((l,d)=>{let c=d.outdoor.find(p=>p.id===r);c&&(c.points=c.points.map(o))})}else if(this._roomId){let r=this._roomId,l=this._vertex,d=n.rooms.find(p=>p.id===r);if(!d)return!1;let c=new Set(n.placements.filter(p=>K([p.x,p.z],d.points)).map(p=>p.entity_id));this.change((p,h)=>{let u=h.rooms.find(f=>f.id===r);if(l!==null&&l<u.points.length){u.points[l]=o(u.points[l]);return}u.points=u.points.map(o);for(let f of h.placements)c.has(f.entity_id)&&([f.x,f.z]=o([f.x,f.z]))})}else return!1;return!0}};function Or(a,t){let e=Vt(t)>0?1:-1,n=[...a];for(let i=0;i<t.length&&n.length;i++){let s=t[i],o=t[(i+1)%t.length],r=d=>e*((o[0]-s[0])*(d[1]-s[1])-(o[1]-s[1])*(d[0]-s[0])),l=n;n=[];for(let d=0;d<l.length;d++){let c=l[d],p=l[(d+1)%l.length],h=r(c),u=r(p);if(h>=0&&n.push(c),h>=0!=u>=0){let f=h/(h-u);n.push([c[0]+(p[0]-c[0])*f,c[1]+(p[1]-c[1])*f])}}}return n}var $p=a=>a.length>=3?Math.abs(yt(a)):0;function Lf(a,t){return a.exterior?0:a.roomLeft===t?a.left:a.roomRight===t?a.right:0}function xp(a,t,e){let n=$p(a.points);if(a.points.length<3)return n;let{walls:i}=wt(t.rooms,e,t.walls??[]),s=n,o=i.filter(r=>!r.free&&(r.roomLeft===a.id||r.roomRight===a.id));for(let r of i){let l=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2];if((r.free?!K(l,a.points):!o.includes(r))||(s-=$p(Or(a.points,r.footprint)),!r.free))continue;let d=Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1]);if(d<.2)continue;let c=[(r.b[0]-r.a[0])/d,(r.b[1]-r.a[1])/d],p=null;for(let h of o){let u=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1]);if(u<.2)continue;let f=[(h.b[0]-h.a[0])/u,(h.b[1]-h.a[1])/u];if(Math.abs(c[0]*f[1]-c[1]*f[0])>.05)continue;let g=Math.abs((l[0]-h.a[0])*f[1]-(l[1]-h.a[1])*f[0]),b=(r.a[0]-h.a[0])*f[0]+(r.a[1]-h.a[1])*f[1],_=(r.b[0]-h.a[0])*f[0]+(r.b[1]-h.a[1])*f[1],y=Math.min(u,Math.max(b,_))-Math.max(0,Math.min(b,_)),$=g-(r.left+r.right)/2-Lf(h,a.id);y>.1&&$>0&&g<1&&(!p||$<p.gap)&&(p={gap:$,overlap:y})}p&&(s-=p.gap*p.overlap)}return Math.max(0,s)}var kp=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Hf={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Vf={back:0,right:90,front:180,left:270};function Mp(a,t,e){let n=ft(a.points),i=n.x1-n.x0,s=n.z1-n.z0,o=Hf[t],r=[],l=(c,p,h,u,f)=>{let[g,b,_]=f??Pe[c];r.push({id:e(),type:c,x:wp(p),z:wp(h),rotation:u,w:g,d:b,h:_,variant:null,entity:null,power:null})},d=.02;for(let c of o.rows){let p=c.items.map(b=>({type:b.type,size:b.size??Pe[b.type]})),h=c.wall==="back"||c.wall==="front"?i:s,u=[],f=0;for(let b of p){if(f+b.size[0]>h-.1)break;u.push(b),f+=b.size[0]}let g=c.align==="start"?.05:c.align==="end"?h-f-.05:(h-f)/2;for(let b of u){let[_,y]=b.size,$=g+_/2,w=y/2+d;c.wall==="back"?l(b.type,n.x0+$,n.z0+w,0,b.size):c.wall==="front"?l(b.type,n.x1-$,n.z1-w,180,b.size):c.wall==="right"?l(b.type,n.x1-w,n.z0+$,90,b.size):l(b.type,n.x0+w,n.z1-$,Vf.left,b.size),g+=_}}for(let c of o.free){let[p,h]=c.size??Pe[c.type],u=Math.min(n.x1-p/2-.05,Math.max(n.x0+p/2+.05,n.x0+i*c.at[0])),f=Math.min(n.z1-h/2-.05,Math.max(n.z0+h/2+.05,n.z0+s*c.at[1]));l(c.type,u,f,c.rotation,c.size)}return r}var wp=a=>Math.round(a*1e3)/1e3;var Ep=a=>a.trim().toLocaleLowerCase();function Sp(a,t,e,n){let i=a.trim();if(!i)return{name:n,area_id:null};let s=t.find(o=>Ep(o.name)===Ep(i)&&!e.has(o.area_id));return s?{name:s.name,area_id:s.area_id}:{name:i,area_id:null}}function Fp(a,t,e){return a.filter(n=>!t.has(n.area_id)).sort((n,i)=>+(i.floor_id===e&&!!e)-+(n.floor_id===e&&!!e)||n.name.localeCompare(i.name)).map(n=>n.name)}function Ip(a,t,e){let n=i=>K(i,t)&&!K(i,e);return{furniture:a.furniture.filter(i=>n([i.x,i.z])).map(i=>i.id),devices:a.placements.filter(i=>n([i.x,i.z])).map(i=>i.entity_id)}}var ae=1e-6,Pp=a=>Math.round(a*1e3)/1e3;function Rp(a,t,e){let n=a.rooms.find(p=>p.id===t);if(!n||!Le(n.points)||!Le(e))return null;let i=ft(n.points),s=ft(e),o=p=>p[0]>=i.x0-ae&&p[0]<=i.x1+ae&&p[1]>=i.z0-ae&&p[1]<=i.z1+ae,r=[{lo:i.x0,hi:i.x1,dlo:s.x0-i.x0,dhi:s.x1-i.x1,span:[i.z0,i.z1]},{lo:i.z0,hi:i.z1,dlo:s.z0-i.z0,dhi:s.z1-i.z1,span:[i.x0,i.x1]}],l=p=>r.map((h,u)=>Pp(p[u]+(Math.abs(h.dlo-h.dhi)<ae||p[u]-h.lo<=h.hi-p[u]?h.dlo:h.dhi))),d={furniture:0,devices:0,walls:0};for(let p of a.furniture){if(p.locked||!o([p.x,p.z]))continue;let[h,u]=l([p.x,p.z]);h===p.x&&u===p.z||(Object.assign(p,{x:h,z:u}),d.furniture++)}for(let p of a.placements){if(p.locked||!o([p.x,p.z]))continue;let[h,u]=l([p.x,p.z]);h===p.x&&u===p.z||(Object.assign(p,{x:h,z:u}),d.devices++)}let c=p=>{for(let h=0;h<2;h++){let u=r[h];if(Math.abs(u.dlo-u.dhi)<ae)continue;let f=p[1-h];if(!(f<u.span[0]-ae||f>u.span[1]+ae))for(let[g,b]of[[u.lo,u.dlo],[u.hi,u.dhi]]){if(Math.abs(b)<ae||Math.abs(p[h]-g)>ae)continue;let _=[...p];return _[h]=Pp(p[h]+b),_}}return null};for(let p of a.rooms){if(p.id===t)continue;let h=p.points.map(f=>[...f]),u=!1;p.points.forEach((f,g)=>{let b=p.points[(g+1)%p.points.length],[_,y]=[c(f),c(b)];!_||!y||Math.hypot(f[0]-b[0],f[1]-b[1])<ae||Math.abs(_[0]-f[0]-(y[0]-b[0]))>ae||Math.abs(_[1]-f[1]-(y[1]-b[1]))>ae||(h[g]=_,h[(g+1)%p.points.length]=y,u=!0)}),u&&(p.points=h,d.walls++)}for(let p of a.walls??[]){let h=c(p.a),u=c(p.b);h&&(p.a=h),u&&(p.b=u),(h||u)&&d.walls++}return n.points=e.map(p=>[...p]),d}var Cf=["aliases","climate","live","start_view","panel","hidden","no_state","mods"],Cs=class{addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[s,o]=this.toScreen(n[0]);if(Math.hypot(s-e[0],o-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(yt(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}pulledPoint(t){let e=this._draft[this._draft.length-1];if(!t||this._tool!=="measure"||!e||!(this._measureLen>0))return t;let n=Math.hypot(t[0]-e[0],t[1]-e[1]);return n<1e-6?t:[k(e[0]+(t[0]-e[0])/n*this._measureLen),k(e[1]+(t[1]-e[1])/n*this._measureLen)]}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=Vn(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;if(!(e>=.1&&n>=.1)){this._notice=this.t("rect_too_small",{min:this.m(.1)});return}this._notice=null;let i=this.floor,s=this.t("new_room",{n:(i?.rooms.length??0)+1}),o=Sp(this._rectName,Object.values(this.hass?.areas??{}),this.usedAreas(),s);this.addRoom([t,Vn(t,e,"right"),Vn(Vn(t,e,"right"),n,"down"),Vn(t,n,"down")],o),this._draft=[],this._rectName=""}setRectStart(t,e){if(!Number.isFinite(e))return;let n=this._draft[0]??[0,0],i=k(e-n[t]),s=o=>t===0?[k(o[0]+i),o[1]]:[o[0],k(o[1]+i)];this._draft=this._draft.length?this._draft.map(s):[s(n)]}usedAreas(){return new Set(this._doc.floors.flatMap(t=>[...t.rooms.map(e=>e.area_id),...(t.outdoor??[]).map(e=>e.area_id??null)]))}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,s=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],o=r=>Rt(this.hass,r,2);return m`<section>
      <h3>${this.t("measure")}</h3>
      ${e?m`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${Gt(this.t("measure_length"),this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit==="imperial"?"text":"number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  placeholder=${this.t("measure_pull")}
                  .value=${this._measureLen>0?this.lenValue(this._measureLen):""}
                  @input=${r=>this._measureLen=this.readLen(r.target.value)??0}
                  @keydown=${r=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[r.key];l?(r.preventDefault(),this.measureStep(l)):r.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${s.map(([r,l])=>m`<button class="fp3d-btn fp3d-arrow-${r}" title=${this.t(`dir_${r}`)} @click=${()=>this.measureStep(r)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?m`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((r,l)=>m`<li>${this.m(Math.hypot(r[0]-t[l][0],r[1]-t[l][1]))}</li>`)}
                </ol>`:v}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?m`<p class="fp3d-sub">${this.t("measure_gap",{gap:o(i)})}</p>`:v}`:m`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      ${this._notice?m`<p class="fp3d-sub fp3d-notice">${this._notice}</p>`:v}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input
            list="fp3d-room-names"
            .value=${this._rectName}
            placeholder=${this.t("new_room",{n:(this.floor?.rooms.length??0)+1})}
            @change=${r=>this._rectName=r.target.value}
            @keydown=${r=>{r.key==="Enter"&&(this._rectName=r.target.value,this.rectBySize())}}
          /><datalist id="fp3d-room-names">
            ${Fp(Object.values(this.hass?.areas??{}),this.usedAreas(),this.floor?.ha_floor??null).map(r=>m`<option value=${r}></option>`)}
          </datalist></label
        >
        ${this.len(this.t("x"),e?.[0]??0,r=>this.setRectStart(0,r))} ${this.len(this.t("z"),e?.[1]??0,r=>this.setRectStart(1,r))}
        ${this.len(this.t("width"),this._rectSize[0],r=>this._rectSize=[Math.max(.1,r),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],r=>this._rectSize=[this._rectSize[0],Math.max(.1,r)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:j("hole"),type:"stairwell",x:k((t[0]+e[0])/2),z:k((t[1]+e[1])/2),w:k(e[0]-t[0]),d:k(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((i,s)=>s.furniture.push(n)),this.selectItem("furniture",n.id)}addRoom(t,e){if(!this.floor)return;let n=j("room"),i=this.floor.rooms.length+1,{name:s,area_id:o}=e??{name:this.t("new_room",{n:i}),area_id:null};this.change((r,l)=>l.rooms.push({id:n,name:s,area_id:o,points:t.map(([d,c])=>[k(d),k(c)]),floor_material:"wood"})),this._roomId=n,this._vertex=null}async deleteRoom(){let t=this._roomId;!t||!this.isEditor||!await this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let i=n.rooms.find(s=>s.id===t);n.rooms=n.rooms.filter(s=>s.id!==t),n.openings=n.openings.filter(s=>s.room_id!==t||s.wall),i&&(n.placements=n.placements.filter(s=>!K([s.x,s.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isEditor)return;let e=j("room"),n={...structuredClone(t),id:e,name:this.t("home_copy_name",{name:t.name}),area_id:null,points:t.points.map(([i,s])=>[k(i+.5),k(s+.5)])};for(let i of Cf)delete n[i];this.change((i,s)=>s.rooms.push(n)),this._roomId=e}async deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=this.floor?_p(this.floor,e.id,t):null,i=[];if(n&&(n.openings.length||n.height||n.thickness)){let o=e.points.length,r=[this.t("corner_joins",{a:(t-1+o)%o+1,b:t+1,c:(t+1)%o+1}),...n.openings.length?[this.t("corner_loses_openings",{n:n.openings.length})]:[],...n.height?[this.t("corner_loses_height")]:[],...n.thickness?[this.t("corner_loses_thickness")]:[]];if(!await this.ask(r.join(" "),this.t("delete_point"))||(n.fit.length&&await os(this.t("corner_keep_openings",{k:n.fit.length,n:n.openings.length}),{ok:this.t("corner_keep"),cancel:this.t("corner_drop"),danger:!1})&&(i=n.fit.map(l=>l.id)),this.room?.id!==e.id||this.room.points.length!==o))return}let s=this._doc;this.change((o,r)=>yp(r,e.id,t,i)),this.noteResize(e.id,s),this._vertex=null}updateRoom(t){let e=this._roomId;this.change((n,i)=>Kt(i.rooms.find(s=>s.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(s=>s.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=ft(n.points),{x0:s,z0:o,x1:r,z1:l}=i;t==="x"&&([s,r]=[e,e+(r-s)]),t==="z"&&([o,l]=[e,e+(l-o)]),t==="w"&&e>.05&&(r=s+e),t==="d"&&e>.05&&(l=o+e);let d=[[k(s),k(o)],[k(r),k(o)],[k(r),k(l)],[k(s),k(l)]],c=this._doc,p=this._floorId,h=structuredClone(c),u=h.floors.find(g=>g.id===p)?.rooms.find(g=>g.id===n.id);u&&(u.points=d);let f=null;this.change((g,b)=>{f=Rp(b,n.id,d),f||(b.rooms.find(_=>_.id===n.id).points=d)}),this.noteResize(n.id,c,f,h)}resizeNote(){let t=this._resize;return t&&t.doc===this._doc?t:null}noteResize(t,e,n=null,i=null){let s=this._resize?.doc===e?this._resize:null,o=this.floor,r=o?.rooms.find(d=>d.id===t),l=s?.roomId===t?s.before:e.floors.find(d=>d.id===this._floorId)?.rooms.find(d=>d.id===t)?.points;this._resize=o&&r&&l?{roomId:t,before:l,doc:this._doc,base:e,carried:n,outline:i,stranded:Ip(o,l,r.points)}:null}outlineOnly(){let t=this.resizeNote();t?.outline&&(this.setDoc(structuredClone(t.outline),null),this.noteResize(t.roomId,t.base))}selectStranded(){let t=this.resizeNote();if(!t)return;let e=t.stranded.furniture.filter(n=>this.floor?.furniture.some(i=>i.id===n));e.length?this.setMulti(e):t.stranded.devices.length&&this.selectItem("device",t.stranded.devices[0])}renderResizeNote(t){let e=this.resizeNote();if(!e||e.roomId!==t.id||!this.isEditor)return v;let n=e.carried,i=e.outline&&n?n.furniture+n.devices+n.walls:0,s=e.stranded.furniture.length+e.stranded.devices.length;return!i&&!s?v:m`<div class="fp3d-resize-note" role="status">
      ${i&&n?m`<p class="fp3d-sub">${this.t("resize_carried",{n:n.furniture+n.devices,w:n.walls})}</p>
            <div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("resize_outline_only_hint")} @click=${()=>this.outlineOnly()}>${this.t("resize_outline_only")}</button>
              <button class="fp3d-btn" @click=${()=>this.undo()}>${this.t("undo")}</button>
            </div>`:v}
      ${s?m`<p class="fp3d-sub">${s===1?this.t("resize_outside_one"):this.t("resize_outside",{n:s})}</p>
            <div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>this.selectStranded()}>${this.t("resize_select")}</button></div>`:v}
    </div>`}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let s=i.points.map(r=>[...r]);s[t][e]=k(n);let o=this._doc;this.updateRoom({points:s}),this.noteResize(i.id,o)}renderRooms(t){return I`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return I`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(jt(e.points));return I`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(yt(e.points))}</text>`})}</g>
    `}renderHandles(t){let e=t.points,n=e.length,i=e.map((o,r)=>{let l=e[(r+1)%n],[d,c]=this.toScreen(o),[p,h]=this.toScreen(l),u=Math.hypot(l[0]-o[0],l[1]-o[1]),f=(d+p)/2,g=(c+h)/2,[b,_]=this.toScreen(jt(e)),y=-(h-c),$=p-d,w=Math.hypot(y,$)||1;y/=w,$/=w,y*(f-b)+$*(g-_)<0&&(y=-y,$=-$);let E=Math.hypot(p-d,h-c);return I`
        ${E>50?Math.abs(y)>Math.abs($)?I`<text class="fp3d-dim" style="text-anchor:${y>0?"start":"end"}" x=${f+y*13} y=${g+$*13+4}>${this.m(u,2)}</text>`:I`<text class="fp3d-dim" x=${f+y*16} y=${g+$*16+4}>${this.m(u,2)}</text>`:v}
        ${E>36?I`<g data-mid=${r} class="fp3d-mid"><circle cx=${f} cy=${g} r="14" class="fp3d-hit" /><circle cx=${f} cy=${g} r="6" /><path d="M${f-3} ${g}h6M${f} ${g-3}v6" /></g>`:v}
      `}),s=e.map((o,r)=>{let[l,d]=this.toScreen(o);return I`<g data-vertex=${r} class=${r===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${d-9}>${r+1}</text>`});return I`<g>${i}${s}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="freewall"){let[s,o]=this.toScreen(t.start),[r,l]=this.toScreen(t.end),d=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return I`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${s} y1=${o} x2=${r} y2=${l} />
        <text class="fp3d-dim" x=${(s+r)/2} y=${(o+l)/2-10}>${this.m(d,2)}</text>
      </g>`}if(t?.kind==="rect"){let[s,o]=this.toScreen(t.start),[r,l]=this.toScreen(t.end),d=Math.abs(t.end[0]-t.start[0]),c=Math.abs(t.end[1]-t.start[1]);return I`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(s,r)} y=${Math.min(o,l)} width=${Math.abs(r-s)} height=${Math.abs(l-o)} />
        <text class="fp3d-dim" x=${(s+r)/2} y=${Math.min(o,l)-8}>${this.m(d,2)} × ${this.m(c,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return v;let e=this.pulledPoint(this._cursor),n=[...this._draft,...e&&this._draft.length?[e]:[]],i=n.map(s=>this.toScreen(s));return I`<g pointer-events="none">
      ${i.length>1?I`<polyline class="fp3d-draft" points=${i.map(s=>s.join(",")).join(" ")} />`:v}
      ${i.slice(1).map((s,o)=>{let r=i[o];return Math.hypot(s[0]-r[0],s[1]-r[1])<30?v:I`<text class="fp3d-dim" x=${(r[0]+s[0])/2} y=${(r[1]+s[1])/2-6}>${this.m(Math.hypot(n[o+1][0]-n[o][0],n[o+1][1]-n[o][1]),2)}</text>`})}
      ${this._draft.map((s,o)=>{let[r,l]=this.toScreen(s);return I`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${r} cy=${l} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${e?I`<circle class="fp3d-cursor" cx=${this.toScreen(e)[0]} cy=${this.toScreen(e)[1]} r="4" />`:v}
    </g>`}moveRoom(t,e){this.change((n,i)=>{let s=i.rooms.findIndex(l=>l.id===t),o=s+e;if(s<0||o<0||o>=i.rooms.length)return;let[r]=i.rooms.splice(s,1);i.rooms.splice(o,0,r)})}renderRoomList(t){return t.rooms.length?m`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map((e,n)=>m`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${()=>this.selectItem("room",e.id)}>
              <span>${e.name}</span><span class="fp3d-muted">${this.area(yt(e.points))}</span>
            </button>
            ${this.isEditor&&t.rooms.length>1?m`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${n===0} @click=${()=>this.moveRoom(e.id,-1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${n===t.rooms.length-1} @click=${()=>this.moveRoom(e.id,1)}>↓</button>`:v}
          </div>`)}
      </div>
    </section>`:v}renderRoomForm(t,e){let n=this.isEditor,i=Le(t.points),s=ft(t.points);return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",t.id)}</div>
      ${this.renderResizeNote(t)}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${o=>this.updateRoom({name:o.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${o=>this.setArea(o.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(o=>m`<option value=${o.area_id} ?selected=${o.area_id===t.area_id}>${o.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${o=>this.updateRoom({aliases:Cn(o.target.value)})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${o=>this.updateRoom({floor_material:o.target.value})}>
            ${ja.map(o=>m`<option value=${o} ?selected=${o===t.floor_material}>${this.t(`mat_${o}`)}</option>`)}
          </select></label
        >
        ${i?m`${this.len(this.t("x"),s.x0,o=>this.setRect("x",o))} ${this.len(this.t("z"),s.z0,o=>this.setRect("z",o))}
            ${this.len(this.t("width"),s.x1-s.x0,o=>this.setRect("w",o),.01,.05)}
            ${this.len(this.t("depth"),s.z1-s.z0,o=>this.setRect("d",o),.01,.05)}`:v}
      </div>
    </section>
    ${this.renderDeviceList(t)}
    <section>
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(t)}>▦ ${this.t("wall_view_room")}</button>
      ${this.renderEdgeHeights(t)}
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${Gt(this.t("room_ceiling"),this.unit)}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            step="0.05"
            min="1"
            placeholder=${this.floor?this.lenValue(this.floor.height):""}
            .value=${t.ceiling_height!=null?this.lenValue(t.ceiling_height):""}
            ?disabled=${!n}
            @change=${o=>{let r=o.target.value.trim(),l=r===""?null:this.readLen(r);this.updateRoom({ceiling_height:l===null||l<=0?null:Math.min(30,Math.max(1,l))})}}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${t.start_view?m`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:v}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(yt(t.points)),n:this.area(xp(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{navigator.clipboard?.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderRoomClimate(t)} ${this.renderRoomLive(t)} ${this.renderRoomOpenings(t)}
      ${this.renderItemsList(this.floor?Gn(this.floor.rooms,this.floor.furniture).get(t.id)??[]:[],!1)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((o,r)=>m`<div class="fp3d-point ${r===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${r+1}</span>
            ${this.len(this.t("x"),o[0],l=>this.setPoint(r,0,l))} ${this.len(this.t("z"),o[1],l=>this.setPoint(r,1,l))}
            ${n?m`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>{this.deleteVertex(r)}}>
                  ×
                </button>`:v}
          </div>`)}
      </details>
      ${n?m`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" title=${zt(this.t("duplicate"),["Ctrl+D"])} @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            ${this.renderPasteButton()}
            <button class="fp3d-btn fp3d-danger" title=${zt(this.t("delete"),["Del"])} @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:v}
      ${this.renderModuleRoomFields(t)}
      ${this._spots?this.renderSpotForm(t):v}
      ${this._packages?m`<div class="fp3d-packages">
            ${kp.map(o=>m`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,o)}>
                <b>${this.t(`pkg_${o}`)}</b><span>${this.t(`pkg_${o}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:v}
    </section>`}applyPackage(t,e){if(!this.isEditor)return;let n=Mp(t,e,()=>j("furniture"));this.change((i,s)=>s.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=ft(t.points),n=this.hass?Yt(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isEditor)return;let[n,i,s]=Pe[e.type],o=Ao(t,e.rows,e.cols).map(([r,l])=>({id:j("furniture"),type:e.type,x:r,z:l,rotation:0,w:n,d:i,h:s,variant:null,entity:e.entity??"none",power:null}));this.change((r,l)=>l.furniture.push(...o)),this._spots=null,this._notice=this.t("spots_placed",{n:o.length})}renderSpotForm(t){let e=this._spots,n=Ao(t,e.rows,e.cols).length,i=this.entityOptions(o=>/^(light|switch|input_boolean)\./.test(o)),s=o=>this._spots={...e,...o};return m`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${o=>s({type:o.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(o=>m`<option value=${o} ?selected=${o===e.type}>${this.t(`furn_${o}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),e.cols,o=>s({cols:Math.max(1,Math.min(12,Math.round(o)))}),1,1)}
      ${this.num(this.t("spots_rows"),e.rows,o=>s({rows:Math.max(1,Math.min(12,Math.round(o)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),e.entity,void 0,i,o=>s({entity:o==="none"?null:o}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(t)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}renderRoomLive(t){let e=this.hass;if(!e)return v;let n=(o,r)=>{let l={...t.live??{},[o]:r},d=Object.values(l).every(c=>c==null);this.updateRoom({live:d?null:l})},i=!!t.live&&Object.values(t.live).some(o=>o!=null),s=(o,r)=>{let l=Zc(e,this.floor??null,{...t,live:null},o),d=o==="leak"?["moisture"]:["motion","occupancy","presence"],c=this.entityOptions(p=>p.startsWith("binary_sensor.")&&d.includes(String(e.states[p]?.attributes.device_class??"")),d.join(",")).map(p=>({...p,rank:pe(e,p.id)===t.area_id?0:1})).sort((p,h)=>p.rank-h.rank).map(({id:p,label:h})=>({id:p,label:h}));return this.entitySelect(r,t.live?.[o]??null,l[0]??null,c,p=>n(o,p))};return m`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("room_live")}</summary>
      <div class="fp3d-form">${s("leak",this.t("room_live_leak"))} ${s("motion",this.t("room_live_motion"))}</div>
      <p class="fp3d-sub">${this.t("room_live_hint")}</p>
    </details>`}renderRoomClimate(t){let e=this.hass;if(!e)return v;let n=(o,r)=>{let l={...t.climate??{},[o]:r},d=Object.values(l).every(c=>c==null);this.updateRoom({climate:d?null:l})},i=!!t.climate&&Object.values(t.climate).some(o=>o!=null),s=(o,r)=>{let l=qo[o],d=Bd(e,this.floor??null,{...t,climate:null},o),c=Xo[o],p=this.entityOptions(h=>Et(h)&&e.states[h]?.attributes.device_class===l||!!c&&h.startsWith("climate.")&&typeof e.states[h]?.attributes[c]=="number",l,c).map(h=>({...h,rank:(pe(e,h.id)===t.area_id?0:1)+(Yo(e,h.id)?0:2)})).sort((h,u)=>h.rank-u.rank).map(({id:h,label:u})=>({id:h,label:u}));return this.entitySelect(r,t.climate?.[o]??null,d[0]??null,p,h=>n(o,h))};return m`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${s("temperature",this.t("climate_temperature"))} ${s("humidity",this.t("climate_humidity"))} ${s("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}};function zp(a){let t=a.points.length,e=0,n=0;for(let i=0;i<t;i++){let s=a.wall_heights?.[i]??null;(Array.isArray(s)?s.some(o=>o===0):s===0)&&e++,a.wall_slopes?.[i]&&n++}return{walls:t,open:e,sloping:n}}var Ds=class{addFreeWall(t,e){if(!this.floor)return;let n={id:j("wall"),a:[k(t[0]),k(t[1])],b:[k(e[0]),k(e[1])],thickness:null};this.change((i,s)=>s.walls=[...s.walls??[],n]),this.selectItem("wall",n.id)}updateFreeWall(t){let e=this._wallId;e&&this.change((n,i)=>Object.assign((i.walls??[]).find(s=>s.id===e),t))}async deleteFreeWall(){let t=this._wallId;!t||!this.isEditor||!await this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return I`<g>${(t.walls??[]).map(e=>{let[n,i]=this.toScreen(e.a),[s,o]=this.toScreen(e.b),r=e.id===this._wallId;return I`<g data-free-wall=${e.id} class=${`fp3d-free-wall${r?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${s} y2=${o} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${s} y2=${o} />
      </g>
      ${r&&this.isEditor&&!Yi(e,!0,this._doc.settings)?I`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${s} cy=${o} r="16" class="fp3d-hit" /><circle cx=${s} cy=${o} r="6" /></g>`:v}`})}</g>`}renderFreeWallForm(t){let e=this.isEditor,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),i=r=>{let d=Math.max(.1,r)/(n||1);this.updateFreeWall({b:[k(t.a[0]+(t.b[0]-t.a[0])*d),k(t.a[1]+(t.b[1]-t.a[1])*d)]})},s=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],o=(r,l)=>{let d=l-s[r],c=p=>r===0?[k(p[0]+d),p[1]]:[p[0],k(p[1]+d)];this.updateFreeWall({a:c(t.a),b:c(t.b)})};return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),s[0],r=>o(0,r))} ${this.len(this.t("z"),s[1],r=>o(1,r))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,r=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,r))}),.01,.02)}
        ${this.len(this.t("wall_height"),t.height??this.floor?.height??2.5,r=>this.updateFreeWall({height:r>=(this.floor?.height??2.5)-.005?null:Math.max(.05,r)}),.05,.05)}
      </div>
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:v}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}renderWalls(t){let e=this.floor?.height??2.5;return I`<g pointer-events="none">${t.map(n=>{let i=n.height!==void 0&&n.height<e-.01,s=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return I`<polygon class=${s} points=${n.footprint.map(o=>this.toScreen(o).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let i=wt(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).parts.get(`${t.id}:${e}`)??[];return i.length?[...new Set(i)].sort((s,o)=>s-o):[0]}setEdgeSlope(t,e,n){this.isEditor&&this.change((i,s)=>{let o=s.rooms.find(l=>l.id===t.id);if(!o)return;let r=(o.wall_slopes??[]).slice(0,o.points.length);for(;r.length<o.points.length;)r.push(null);r[e]=n?[Math.round(Math.max(.05,n[0])*1e3)/1e3,Math.round(Math.max(.05,n[1])*1e3)/1e3]:null,o.wall_slopes=r.every(l=>!l)?void 0:r})}setEdgeHeight(t,e,n,i){let s=this.floor;if(!s||!this.isEditor)return;if(i!==void 0){let l=this.edgeParts(t,e).length;this.change((d,c)=>{let p=c.rooms.find(g=>g.id===t.id);if(!p)return;let h=(p.wall_heights??[]).slice(0,p.points.length);for(;h.length<p.points.length;)h.push(null);let u=h[e],f=Array.isArray(u)?[...u]:new Array(l).fill(typeof u=="number"?u:null);for(;f.length<l;)f.push(null);f[i]=n,h[e]=f.every(g=>g===f[0])?f[0]:f,p.wall_heights=h.every(g=>g===null)?void 0:h});return}let r=wt(s.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},s.walls??[]).walls.filter(l=>l.sources.some(d=>d.room_id===t.id&&d.edge===e)).flatMap(l=>l.sources);r.some(l=>l.room_id===t.id&&l.edge===e)||r.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,d)=>{for(let c of r){let p=d.rooms.find(u=>u.id===c.room_id);if(!p)continue;let h=(p.wall_heights??[]).slice(0,p.points.length);for(;h.length<p.points.length;)h.push(null);h[c.edge]=n,p.wall_heights=h.every(u=>u===null)?void 0:h}})}splitEdge(t,e,n){if(!this.isEditor)return;let i=t.points,s=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),o=this.edgeParts(t,e),r=n===void 0?0:o[n],l=n===void 0?s:o[n+1]??s;if(l-r<.4)return;let d=Math.round((r+l)/2*100)/100;this.change((c,p)=>{let h=p.rooms.find(g=>g.id===t.id);if(!h)return;let u=(h.wall_splits??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);u[e]=[...u[e]??[],d].sort((g,b)=>g-b),h.wall_splits=u;let f=h.wall_heights?.[e];if(Array.isArray(f)){let g=n??0;f.splice(g+1,0,f[g]??null)}})}moveSplit(t,e,n,i){let s=t.points,o=Math.hypot(s[(e+1)%s.length][0]-s[e][0],s[(e+1)%s.length][1]-s[e][1]),r=this.edgeParts(t,e).filter(d=>Math.abs(d-n)>.001&&d>0),l=Math.max(.1,Math.min(o-.1,Math.round(i*100)/100));r.some(d=>Math.abs(d-l)<.1)&&(l=n),this.change((d,c)=>{let h=c.rooms.find(f=>f.id===t.id)?.wall_splits?.[e];if(!h)return;let u=h.findIndex(f=>Math.abs(f-n)<.001);u>=0&&(h[u]=l),h.sort((f,g)=>f-g)})}joinSplit(t,e,n,i){this.change((s,o)=>{let r=o.rooms.find(c=>c.id===t.id);if(!r?.wall_splits?.[e])return;let l=r.wall_splits[e].filter(c=>Math.abs(c-n)>.001);r.wall_splits[e]=l.length?l:null,r.wall_splits.every(c=>!c)&&(r.wall_splits=void 0);let d=r.wall_heights?.[e];Array.isArray(d)&&(d.splice(i,1),d.every(c=>c===d[0])&&(r.wall_heights[e]=d[0]??null))})}renderSplitMarks(t){let e=t.points;return I`${(t.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=e.length)return[];let s=e[i],o=e[(i+1)%e.length],r=Math.hypot(o[0]-s[0],o[1]-s[1])||1,l=(o[0]-s[0])/r,d=(o[1]-s[1])/r;return n.map(c=>{let[p,h]=this.toScreen([s[0]+l*c,s[1]+d*c]);return I`<line class="fp3d-split-mark" x1=${p-d*7} y1=${h+l*7} x2=${p+d*7} y2=${h-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,i=this._doc.settings,s=new Set;for(let d of wt(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(d.exterior)for(let c of d.sources)c.room_id===t.id&&s.add(c.edge);let o=(d,c)=>this.change((p,h)=>{let u=h.rooms.find(g=>g.id===t.id);if(!u)return;let f=(u.wall_thickness??[]).slice(0,u.points.length);for(;f.length<u.points.length;)f.push(null);f[d]=c,u.wall_thickness=f.every(g=>g===null)?void 0:f}),r=zp(t),l=[r.open?this.t("walls_open_n",{n:r.open}):"",r.sloping?this.t("walls_sloping_n",{n:r.sloping}):""].filter(Boolean).join(", ");return m`<details class="fp3d-edge-box" ?open=${this._wallsOpen} @toggle=${d=>this.setWallsOpen(d.target.open)}>
      <summary>
        <h4>${this.t("walls_section",{n:r.walls})}</h4>
        ${l?m`<span class="fp3d-sub">${l}</span>`:v}
      </summary>
      ${t.points.flatMap((d,c)=>{let p=t.points[(c+1)%n],h=Math.hypot(p[0]-d[0],p[1]-d[1]),u=t.wall_heights?.[c]??null,f=t.wall_slopes?.[c]??null,g=()=>this._edgeHi=c,b=()=>this._edgeHi=null,_=this.edgeParts(t,c);return(_.length>1?_.map(($,w)=>w):[void 0]).map($=>{let w=$===void 0?Array.isArray(u)?u[0]??null:u:Array.isArray(u)?u[$]??null:u,E=$===void 0?h:(_[$+1]??h)-_[$],x=M=>this.setEdgeHeight(t,c,M,$);return m`<div
            class="fp3d-edge-height${c===this._edgeHi?" fp3d-edge-on":""}${w!==null?" fp3d-edge-low":""}"
            @mouseenter=${g}
            @mouseleave=${b}
            @focusin=${g}
            @focusout=${b}
          >
            <span
              ><b>${this.t("wall_n",{a:c+1,b:(c+1)%n+1})}${$===void 0?"":` \xB7 ${this.t("wall_part",{n:$+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(E,2)}</span
              ></span
            >
            ${w===0?m`<span class="fp3d-muted">${this.t("wall_none")}</span>`:f&&$===void 0?m`${this.len(this.t("wall_slope_start",{n:c+1}),f[0],M=>this.setEdgeSlope(t,c,[M,f[1]]),.05,.05)}
                  ${this.len(this.t("wall_slope_end",{n:(c+1)%n+1}),f[1],M=>this.setEdgeSlope(t,c,[f[0],M]),.05,.05)}`:this.len(this.t("wall_height"),w??e,M=>x(M>=e-.005?null:Math.max(.05,M)),.05,.05)}
            ${this.isEditor&&$===void 0&&w!==0?m`<button class="fp3d-btn" aria-pressed=${!!f} title=${this.t("wall_slope_hint")} @click=${()=>this.setEdgeSlope(t,c,f?null:[w??e,w??e])}>◢ ${this.t("wall_slope")}</button>`:v}
            ${this.isEditor&&w!==null?m`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>x(null)}>↥</button>`:v}
            ${this.isEditor&&w!==0?m`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>x(0)}>${this.t("wall_none")}</button>`:v}
            ${this.isEditor&&E>=.4?m`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,c,$)}>✂</button>`:v}
            ${($===void 0||$===0)&&w!==0?m`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,c)}>▦</button>`:v}
            ${($===void 0||$===0)&&w!==0?m`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),t.wall_thickness?.[c]??(s.has(c)?i.wall_exterior:i.wall_interior),M=>{let R=s.has(c)?i.wall_exterior:i.wall_interior,T=Math.min(1.5,Math.max(.02,Math.round(M*1e3)/1e3));o(c,Math.abs(T-R)<5e-4?null:T)},.01,.02)}
                  ${this.isEditor&&t.wall_thickness?.[c]!=null?m`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>o(c,null)}>↺</button>`:v}</span
                >`:v}
            ${$!==void 0&&$>0&&(t.wall_splits?.[c]??[]).some(M=>Math.abs(M-_[$])<.001)?m`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),_[$],M=>this.moveSplit(t,c,_[$],M),.05,.1)}
                  ${this.isEditor?m`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,c,_[$],$)}>⨉</button>`:v}</span
                >`:v}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </details>`}setWallsOpen(t){if(this._wallsOpen!==t){this._wallsOpen=t;try{localStorage.setItem("home3d.wallsOpen",t?"1":"0")}catch{}}}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return v;let[n,i]=this.toScreen(t.points[e]),[s,o]=this.toScreen(t.points[(e+1)%t.points.length]);return I`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${s} y2=${o} />`}};var Ws=class{addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:j("outdoor"),type:e,points:t.map(([s,o])=>[k(s),k(o)])},i=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let s=ft(n.points);n.points=Ln(i,s.x0,s.z0,s.x1,s.z1),n.pool_shape=i}e==="pool"&&this.pipeRules&&(n.pool={}),this.change((s,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id)}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>Kt(i.outdoor.find(s=>s.id===e),t))}async deleteOutdoor(){let t=this._outdoorId;if(!t||!this.isEditor||!await this.confirmFixedDelete("outdoor",t))return;let e=this.floor?.outdoor.find(i=>i.id===t),n=e?.pool?.pipes?.length??0;e?.type==="pool"&&n&&!await this.ask(this.t("pool_delete_confirm",{n}))||(this.change((i,s)=>s.outdoor=s.outdoor.filter(o=>o.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isEditor)return;let e={...t,id:j("outdoor"),area_id:null,points:t.points.map(([n,i])=>[k(n+.5),k(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}setKerb(t){this._kerbPick=!1,this.isEditor&&this.updateFurniture({bin_kerb:{x:Math.round(t[0]*100)/100,z:Math.round(t[1]*100)/100}})}renderKerb(t){let e=this._furnitureId?t.furniture.find(l=>l.id===this._furnitureId):void 0,n=e?.type==="waste_bin"?e.bin_kerb:null;if(!e||!n)return v;let[i,s]=this.toScreen([e.x,e.z]),[o,r]=this.toScreen([n.x,n.z]);return I`<g pointer-events="none" class="fp3d-kerb">
      <line x1=${i} y1=${s} x2=${o} y2=${r} />
      <circle cx=${o} cy=${r} r="8" />
    </g>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isEditor||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return v;if(e.pool_shape){let n=ft(e.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return I`${i.map((s,o)=>{let[r,l]=this.toScreen(s);return I`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${o}`}><circle cx=${r} cy=${l} r="16" class="fp3d-hit" /><rect x=${r-5} y=${l-5} width="10" height="10" /></g>`})}`}return I`${e.points.map((n,i)=>{let[s,o]=this.toScreen(n);return I`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${i}`}><circle cx=${s} cy=${o} r="16" class="fp3d-hit" /><circle cx=${s} cy=${o} r="6" /></g>`})}`}renderOutdoor(t){return I`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,s]=this.toScreen(jt(e.points)),o=ft(e.points),r=Math.min(o.x1-o.x0,o.z1-o.z0)*this._view.scale>40;return I`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${r?I`<text x=${i} y=${s+4}>${this.t(`out_${e.type}`)}</text>`:v}
      </g>`})}</g>`}renderOutdoorZone(t){let e=this.isEditor,n=Object.values(this.hass?.areas??{}).sort((i,s)=>i.name.localeCompare(s.name));return m`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!e}
          @change=${i=>{let s=i.target.value||null,o=(t.name??"").trim()||(s?this.hass?.areas?.[s]?.name??null:null);this.updateOutdoor({area_id:s,name:s?o:t.name??null})}}
        >
          <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
          ${n.map(i=>m`<option value=${i.area_id} ?selected=${i.area_id===t.area_id}>${i.name}</option>`)}
        </select></label
      >
      ${t.area_id?m`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${t.name??""} ?disabled=${!e} @change=${i=>this.updateOutdoor({name:i.target.value.trim()||null})}
          /></label>`:v}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${t.area_id?this.renderOutdoorDevices(t):v}`}renderOutdoorDevices(t){let e=this.hass,n=this.floor,i=n?Qi(n).find(u=>u.id===t.id):void 0;if(!e||!n||!i)return v;let s=i.area_id?e.areas?.[i.area_id]?.name:void 0,o=hn(e,Yt(e,i.area_id).filter(u=>Ie(nt(u)))),r=new Set([...n.placements.filter(u=>K([u.x,u.z],i.points)).map(u=>u.entity_id),...n.furniture.filter(u=>xt(u.type)&&u.entity&&K([u.x,u.z],i.points)).map(u=>u.entity)]),l=o.map(u=>u.primary).filter(u=>!r.has(u)),d=new Set(t.panel??[]),c=new Set(t.hidden??[]),p=new Set(t.no_state??[]),h=(u,f)=>u.has(f)?[...u].filter(g=>g!==f):[...u,f];return o.length?m`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${o.map(u=>m`<div class="fp3d-row fp3d-dev-row ${c.has(u.primary)?"fp3d-dev-hidden":""}">
          <button class="fp3d-dev-name ${r.has(u.primary)?"":"fp3d-muted"}" ?disabled=${!r.has(u.primary)} @click=${()=>this.selectItem("device",u.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${kn(nt(u.primary))} />
            </svg>
            <span>${et(e,u.primary,s)}</span>
          </button>
          ${this.isEditor?m`<button
                  class="fp3d-pin ${c.has(u.primary)?"fp3d-pin-on":""}"
                  aria-pressed=${c.has(u.primary)}
                  title=${this.t(c.has(u.primary)?"panel_unhide":"panel_hide")}
                  @click=${()=>this.updateOutdoor({hidden:h(c,u.primary)})}
                >
                  ${c.has(u.primary)?"\u{1F648}":"\u{1F441}"}
                </button>
                ${c.has(u.primary)?v:m`<button
                      class="fp3d-pin ${p.has(u.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${p.has(u.primary)}
                      title=${this.t(p.has(u.primary)?"panel_state_show":"panel_state_hide")}
                      @click=${()=>this.updateOutdoor({no_state:h(p,u.primary)})}
                    >
                      ${p.has(u.primary)?"\u2205":"Aa"}
                    </button>`}
                ${r.has(u.primary)?v:m`<button
                      class="fp3d-pin ${d.has(u.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${d.has(u.primary)}
                      title=${this.t(d.has(u.primary)?"panel_unpin":"panel_pin")}
                      @click=${()=>this.updateOutdoor({panel:h(d,u.primary)})}
                    >
                      ${d.has(u.primary)?"\u2605":"\u2606"}
                    </button>`}`:v}
          ${this.isEditor?r.has(u.primary)?m`<button class="fp3d-link" @click=${()=>this.removeDevice(u.primary)}>${this.t("devices_remove")}</button>`:m`<button class="fp3d-link" @click=${()=>this.placeDevices([u.primary],i)}>${this.t("devices_place")}</button>`:v}
        </div>`)}
      ${this.isEditor&&l.length>1?m`<button class="fp3d-link fp3d-place-all" @click=${()=>this.placeDevices(l,i)}>${this.t("devices_place_all_n",{n:l.length})}</button>`:v}
    </div>`:m`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`}renderOutdoorForm(t){let e=this.isEditor,n=Le(t.points),i=ft(t.points),s=(o,r)=>{let{x0:l,z0:d,x1:c,z1:p}=i;o==="x"&&([l,c]=[r,r+(c-l)]),o==="z"&&([d,p]=[r,r+(p-d)]),o==="w"&&(c=l+Math.max(.1,r)),o==="d"&&(p=d+Math.max(.1,r)),this.updateOutdoor({points:[[l,d],[c,d],[c,p],[l,p]].map(([h,u])=>[k(h),k(u)])})};return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${o=>this.updateOutdoor({type:o.target.value})}>
            ${Xi.map(o=>m`<option value=${o} ?selected=${o===t.type}>${this.t(`out_${o}`)}</option>`)}
          </select></label
        >
        ${zo(t.type)?v:this.renderOutdoorZone(t)}
        ${n?m`${this.len(this.t("x"),i.x0,o=>s("x",o))} ${this.len(this.t("z"),i.z0,o=>s("z",o))}
            ${this.len(this.t("width"),i.x1-i.x0,o=>s("w",o),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,o=>s("d",o),.01,.1)}`:v}
        ${zo(t.type)?this.len(this.t("outdoor_height"),t.height??Ia[t.type],o=>this.updateOutdoor({height:Math.min(6,Math.max(.1,k(o)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,o=>this.updateOutdoor({height:Math.min(2,Math.max(.4,k(o)))}),.05,.4):v}
        ${this.len(this.t("outdoor_offset"),t.offset??0,o=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,k(o)))||null}),.05)}
        ${t.type!=="pool"?m`${this.len(this.t("outdoor_slope"),t.slope??0,o=>this.updateOutdoor({slope:Math.min(20,Math.max(0,k(o)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${o=>this.updateOutdoor({slope_dir:o.target.value})}>
                  ${Ra.map(o=>m`<option value=${o} ?selected=${o===(t.slope_dir??"x")}>${this.t(`slope_${o.replace("-","n")}`)}</option>`)}
                </select></label
              >`:v}
        ${t.type==="pool"?this.renderPoolShape(t):v}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${t.outline!==!1} ?disabled=${!e} @change=${o=>this.updateOutdoor({outline:o.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${t.type==="fence"||t.type==="pergola"?m`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${o=>this.updateOutdoor({open:o.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:v}
        ${t.type==="pergola"?m`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.bracing} ?disabled=${!e} @change=${o=>this.updateOutdoor({bracing:o.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:v}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!t.cut} ?disabled=${!e} @change=${o=>this.updateOutdoor({cut:o.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${t.slope?m`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:v}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${this.renderModuleFields(t)}
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:v}
    </section>`}};var Df=.05,Wf=.2,Nf=.12;function jf(a){let t=[];return a.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let s=Vt(i)>=0;for(let o=0;o<i.length;o++){let r=i[o],l=i[(o+1)%i.length],d=l[0]-r[0],c=l[1]-r[1],p=Math.hypot(d,c);if(p<.05)continue;let h=[d/p,c/p],u=s?[h[1],-h[0]]:[-h[1],h[0]];(h[1]<-1e-9||Math.abs(h[1])<=1e-9&&h[0]<0)&&(h=[-h[0],-h[1]]);let f=[-h[1],h[0]],g=r[0]*h[0]+r[1]*h[1],b=l[0]*h[0]+l[1]*h[1];t.push({room:n,index:o,dir:h,normal:f,offset:r[0]*f[0]+r[1]*f[1],outside:u[0]*f[0]+u[1]*f[1]>0?1:-1,t0:Math.min(g,b),t1:Math.max(g,b)})}}),t}function Op(a,t=.6){let e=jf(a),n=e.map((c,p)=>p),i=c=>n[c]===c?c:n[c]=i(n[c]),s=[];for(let c=0;c<e.length;c++)for(let p=c+1;p<e.length;p++){let h=e[c],u=e[p];if(h.room===u.room||Math.abs(h.dir[0]*u.dir[1]-h.dir[1]*u.dir[0])>Df||h.outside===u.outside)continue;let f=(u.offset-h.offset)*h.outside;f>t||f<-Nf||Math.abs(f)<1e-4||Math.min(h.t1,u.t1)-Math.max(h.t0,u.t0)<Wf||(s.push(Math.round(f*1e3)/1e3),n[i(c)]=i(p))}if(!s.length)return{rooms:a.map(c=>({...c,points:c.points.map(p=>[p[0],p[1]])})),gaps:s};let o=new Map;e.forEach((c,p)=>{let h=i(p);if(h===p&&!e.some((f,g)=>g!==p&&i(g)===p))return;let u=o.get(h)??[];u.push(p),o.set(h,u)});let r=a.map(c=>c.points.map(()=>new Map));for(let[c,p]of o){let h=p.reduce((u,f)=>u+e[f].offset,0)/p.length;for(let u of p){let f=e[u],g=h-f.offset,b=[f.normal[0]*g,f.normal[1]*g],_=a[f.room].points.length;r[f.room][f.index].set(c,b),r[f.room][(f.index+1)%_].set(c,b)}}let l=c=>Math.round(c*1e3)/1e3;return{rooms:a.map((c,p)=>({...c,points:c.points.map((h,u)=>{let f=h[0],g=h[1];for(let[b,_]of r[p][u].values())f+=b,g+=_;return[l(f),l(g)]})})),gaps:s}}function Ap(a){let t=a.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function Tp(a,t=.05,e=.5){let n=a.map(s=>({...s,points:s.points.map(o=>[o[0],o[1]])})),i=0;for(let s=0;s<4;s++){let o=(l,d)=>n.reduce((c,p)=>c+p.points.filter(h=>Math.abs(h[l]-d)<1e-6).length,0),r=!1;for(let l of n)for(let d=0;d<l.points.length;d++){let c=l.points[d],p=l.points[(d+1)%l.points.length],h=Math.abs(p[0]-c[0]),u=Math.abs(p[1]-c[1]),f=u>1e-6&&u<=t&&h>=e?1:h>1e-6&&h<=t&&u>=e?0:null;if(f===null)continue;let[g,b]=o(f,c[f])>=o(f,p[f])?[c[f],p[f]]:[p[f],c[f]];for(let _ of n)for(let y of _.points)Math.abs(y[f]-b)<1e-6&&(y[f]=g);i++,r=!0}if(!r)break}return{rooms:n,fixed:i}}var on=a=>Math.round(a*1e3)/1e3;function Lp(a,t){return{point:e=>[on(e[0]+a),on(e[1]+t)],quarter:0}}function Hp(a,t){return{point:e=>[on(a-(e[1]-t)),on(t+(e[0]-a))],quarter:1}}function Vp(a,t){return a.quarter?[-t[1],t[0]]:t}function si(a,t){return(t+90*a.quarter)%360}var Bf={x:"z",z:"-x","-x":"-z","-z":"x"};function Ar(a,t){t&&(t.target&&([t.target.x,t.target.z]=a.point([t.target.x,t.target.z])),a.quarter&&(t.theta-=Math.PI/2,t.theta<=-Math.PI&&(t.theta+=2*Math.PI)))}function Kf(a,t){t.points=t.points.map(a.point),a.quarter&&(t.slope_dir||t.slope)&&(t.slope_dir=Bf[t.slope_dir??"x"]);let e=t.pool;if(e){for(let n of e.ports??[])[n.x,n.z]=a.point([n.x,n.z]);for(let n of e.joints??[])[n.x,n.z]=a.point([n.x,n.z]),n.nx!=null&&n.nz!=null&&([n.nx,n.nz]=Vp(a,[n.nx,n.nz]))}}function Uf(a,t){for(let e of t.rooms)e.points=e.points.map(a.point),Ar(a,e.start_view);for(let e of t.furniture)[e.x,e.z]=a.point([e.x,e.z]),a.quarter&&(e.rotation=si(a,e.rotation)),e.bin_kerb&&([e.bin_kerb.x,e.bin_kerb.z]=a.point([e.bin_kerb.x,e.bin_kerb.z]));for(let e of t.placements)[e.x,e.z]=a.point([e.x,e.z]),a.quarter&&(e.rotation=si(a,e.rotation??0));for(let e of t.outdoor)Kf(a,e);for(let e of t.walls??[])e.a=a.point(e.a),e.b=a.point(e.b);t.background&&([t.background.x,t.background.z]=a.point([t.background.x,t.background.z]),a.quarter&&(t.background.rotation=si(a,t.background.rotation??0))),Ar(a,t.start_view)}function Gf(a,t){let[e,n]=a.point([t.x0,t.z0]),[i,s]=a.point([t.x1,t.z1]);if(t.x0=Math.min(e,i),t.x1=Math.max(e,i),t.z0=Math.min(n,s),t.z1=Math.max(n,s),t.points&&(t.points=t.points.map(a.point)),t.pivot&&(t.pivot=a.point(t.pivot)),!!a.quarter)if(t.axis==="x")t.axis="z",t.flip=!t.flip;else{t.axis="x";let[o,r]=[t.end_u0,t.end_u1];(o!==void 0||r!==void 0)&&(t.end_u0=r??null,t.end_u1=o??null)}}var ge=(a,t)=>a[0]*t[0]+a[1]*t[1]+a[2]*t[2],Pn=(a,t)=>[a[0]-t[0],a[1]-t[1],a[2]-t[2]];function qf(a,t){let e=(n,i)=>Math.abs(n[0]-i[0])+Math.abs(n[1]-i[1])+Math.abs(n[2]-i[2])<1e-6;return e(a.o,t.o)&&e(a.eu,t.eu)&&e(a.es,t.es)&&Math.abs(a.lu-t.lu)<1e-6&&Math.abs(a.ls-t.ls)<1e-6}function Yf(a,t,e){let n=_=>{let[y,$]=a.point([_[0],_[2]]);return[y,_[1],$]},i=_=>{let[y,$]=Vp(a,[_[0],_[2]]);return[y,_[1],$]},{face:s,field:o}=t,[r,l]=en(s,o),d=(_,y)=>{let $=[s.o[0]+s.eu[0]*_+s.es[0]*y,s.o[1]+s.eu[1]*_+s.es[1]*y,s.o[2]+s.eu[2]*_+s.es[2]*y];return n($)},c=d(o.u,o.v),p=d(o.u+r,o.v+l),h=ke(s,o,!0).flatMap(_=>_.corners),u=h.length?n([0,1,2].map(_=>h.reduce((y,$)=>y+$[_],0)/h.length)):c,f=i(s.eu),g=i(s.es),b=i(s.n);for(let _ of e){if(ge(_.n,b)<.999||Math.abs(ge(_.eu,f))<.999||Math.abs(ge(_.es,g))<.999||Math.abs(ge(Pn(c,_.o),_.n))>.02)continue;let y=ge(Pn(u,_.o),_.eu),$=ge(Pn(u,_.o),_.es);if(y<-.02||y>_.lu+.02||$<-.02||$>_.ls+.02)continue;let w=ge(Pn(c,_.o),_.eu),E=ge(Pn(p,_.o),_.eu),x=ge(Pn(c,_.o),_.es),M=ge(Pn(p,_.o),_.es),R=t.item;return R.face=_.key,R.u=on(Math.min(w,E)),R.v=on(Math.min(x,M)),"rows"in R&&Xf(R,ge(_.eu,f)<0,ge(_.es,g)<0),!0}return!1}function Xf(a,t,e){if(!t&&!e)return;let n=wn(a),i=n.length-1;t&&a.align&&a.align!=="center"?a.align=a.align==="left"?"right":"left":t&&!a.align&&n.some(s=>s!==n[0])&&(a.align="right"),a.skip?.length&&(a.skip=a.skip.map(s=>{let[o,r]=s.split(":").map(Number),l=t?n[o]-1-r:r;return`${e?i-o:o}:${l}`})),e&&(a.layout?.length&&(a.layout=[...a.layout].reverse()),a.flip=!a.flip)}function Tr(a,t,e){let n=t==null,i=new Set(n?a.floors.map(u=>u.id):t),s=a.settings.roof,o=n||s.type!=="custom"&&s.type!=="none"&&i.has(Ii(a)?.id??""),r=pt(a),l=[],d=(u,f)=>{if(u.face===we||(u.face.startsWith("wall:")?!i.has(u.face.split(":")[1]):!o))return;let b=Ct(a,f,r);b&&l.push({item:u,field:f,face:b})};for(let u of s.solar??[])d(u,u);for(let u of s.windows??[])d(u,Te(u));let c=yr(a)?.id,p=(a.settings.pets?.list??[]).filter(u=>u.x!=null&&u.z!=null&&i.has(Dl(a,u)?.id??""));for(let u of a.floors)i.has(u.id)&&Uf(e,u);for(let u of a.floors)for(let f of u.outdoor)for(let g of f.pool?.pipes??[])i.has(g.floor_id)&&(g.points=g.points.map(e.point));for(let u of s.cables??[])i.has(u.floor_id)&&(u.points=u.points.map(e.point));let h=a.energy.meter;h&&i.has(h.floor_id)&&([h.x,h.z]=e.point([h.x,h.z]));for(let u of p)[u.x,u.z]=e.point([u.x,u.z]),e.quarter&&u.rotation!=null&&(u.rotation=si(e,u.rotation));if(c&&i.has(c))for(let u of s.solar??[]){if(u.face!==we)continue;let f=Is(a,u),[g,b]=e.point([f.eu[0]*u.u+f.es[0]*u.v,f.eu[2]*u.u+f.es[2]*u.v]);e.quarter&&(u.rotation=si(e,u.rotation??0));let _=(u.rotation??0)*Math.PI/180;u.u=on(g*Math.cos(_)+b*Math.sin(_)),u.v=on(-g*Math.sin(_)+b*Math.cos(_))}if(n){for(let f of s.sections??[])Gf(e,f);let u=s.hologram;u&&u.place==="free"&&u.x!=null&&u.z!=null&&([u.x,u.z]=e.point([u.x,u.z])),Ar(e,a.settings.start_view),e.quarter&&(a.settings.north=si(e,a.settings.north??0))}if(l.length){let u=pt(a),f=new Map;for(let g of l){let b=g.item.face.startsWith("wall:")?g.item.face.split(":")[1]:null;b&&!f.has(b)&&f.set(b,Qt(a,b));let _=b?f.get(b):u,y=_.find($=>$.key===g.item.face);y&&qf(y,g.face)||Yf(e,g,_)}}}var Ns=class{unplacedAreas(t){return Ua(this._doc,t,this.hass?.areas)}addFloor(t=null){let e=this._doc.floors,n=j("floor"),i=t?.name??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),s={...Ba(n,i,Ka(e,t?.level)),ha_floor:t?.floor_id??null},o=structuredClone(this._doc),r=o.floors.findIndex(l=>l.elevation>s.elevation);o.floors.splice(r<0?o.floors.length:r,0,s),this.setDoc(o),this._floorId=n,this._roomId=null,this._floorMenu=!1,this._tool!=="select"&&this.setTool("select"),this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=Ga(t,e,()=>j("room"));this.change((i,s)=>s.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(s=>s.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}async deleteFloor(){let t=this.floor;if(!t||!await this.ask(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}straightenFloor(){let t=this.floor;if(!t||!this.isEditor)return;let{rooms:e,fixed:n}=Tp(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,s)=>s.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isEditor)return;let{rooms:e,gaps:n}=Op(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Ap(n);this.change((s,o)=>{o.rooms=e,i&&(s.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:Rt(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}shiftFloor(t,e){if(!this.isEditor||!t&&!e)return;let n=this._shiftAll;this.change((i,s)=>Tr(i,n?null:[s.id],Lp(t,e))),this._shiftX=0,this._shiftZ=0}turnFloor(){let t=this.floor;if(!t||!this.isEditor)return;let e=this._shiftAll,n=(e?this._doc.floors:[t]).flatMap(l=>l.rooms.flatMap(d=>d.points));if(!n.length)return;let i=n.map(l=>l[0]),s=n.map(l=>l[1]),o=(Math.min(...i)+Math.max(...i))/2,r=(Math.min(...s)+Math.max(...s))/2;this.change((l,d)=>Tr(l,e?null:[d.id],Hp(o,r)))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}async loadImage(t){this.loadingImages.add(t);try{let e=await ns(this.hass,t,this.home),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!!n)try{await this.storeBackground(n)}catch(i){await this.tell(this.t("picture_failed",{error:Nn(i)}))}}async storeBackground(t){let e=await createImageBitmap(t),n=Math.min(1,2048/Math.max(e.width,e.height)),i=document.createElement("canvas");i.width=Math.round(e.width*n),i.height=Math.round(e.height*n),i.getContext("2d").drawImage(e,0,0,i.width,i.height);let s=i.toDataURL("image/jpeg",.85),o=j("img");await jn(this.hass,o,s,this.home),this._images={...this._images,[o]:{url:s,aspect:i.height/i.width}};let r=this.floor?.rooms.length?ft(this.floor.rooms.flatMap(l=>l.points)):null;this.updateFloor({background:{image_id:o,x:r?r.x0:0,z:r?r.z0:0,width:r?Math.max(4,k(r.x1-r.x0)):12,opacity:.5}})}selectFloor(t){this._floorId=t,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}goToRoom(t,e){let n=this._doc.floors,i=n.find(s=>s.id===t)??n.find(s=>!!e&&(s.rooms.some(o=>o.id===e)||s.outdoor.some(o=>o.id===e)));return i?(this._toolMenu=null,this.setTool("select"),this.selectFloor(i.id),e&&i.rooms.some(s=>s.id===e)?this.selectItem("room",e):e&&i.outdoor.some(s=>s.id===e)?this.selectItem("outdoor",e):this.selectItem("room",null),this._sideOpen=!0,this.setSideFolded(!1),!e||this._roomId===e||this._outdoorId===e):!1}renderFloorMenu(){let t=this._doc.floors,e=this.floor,n=this.isEditor,i=this._toolMenu==="floor",s=()=>(this._toolMenu=null,this._floorMenu=!1);return m`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-floor">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${i} @click=${()=>this.openToolMenu(i?null:"floor")}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${e?.name??this.t(t.length?"floors":"floor_none")} <span class="fp3d-caret">▾</span>
        </button>
        ${i?m`<div class="fp3d-menu-veil" @click=${s}></div>
              <div class="fp3d-menu" role="menu" @keydown=${o=>this.menuKeys(o)}>
                ${[...t].reverse().map(o=>m`<button role="menuitem" class="fp3d-menu-item ${o.id===this._floorId?"fp3d-menu-on":""}" @click=${()=>(s(),this.selectFloor(o.id))}>
                    ${o.name}<span class="fp3d-menu-more">${o.id===this._floorId?"\u2713":""}</span>
                  </button>`)}
                ${n?m`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length?this._floorMenu:v}
                        @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:(s(),this.addFloor())}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length?m`<span class="fp3d-menu-more">${this._floorMenu?"\u25BE":"\u25B8"}</span>`:v}
                      </button>
                      ${this._floorMenu?m`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map(o=>m`<button class="fp3d-chip" @click=${()=>(s(),this.addFloor(o))}>${o.name}</button>`)}
                            <button class="fp3d-chip" @click=${()=>(s(),this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`:v}
                      ${e?m`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${()=>{s(),this.setTool("select"),this.selectItem("room",null),this._sideOpen=!0,this.showSheet("half")}}
                          >
                            ${this.t("floor_settings")}
                          </button>`:v}`:v}
              </div>`:v}
      </div>
    </div>`}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return v;let[i,s]=this.toScreen([e.x,e.z]),o=e.width*this._view.scale,r=o*n.aspect,l=e.rotation??0,d=this.bgHandles();return I`<g transform="rotate(${l} ${i+o/2} ${s+r/2})">
      <image href=${n.url} x=${i} y=${s} width=${o} height=${r} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${d?"auto":"none"} data-bg="1" style=${d?"cursor:move":""} />
      ${d?I`<rect class="fp3d-bg-frame" x=${i} y=${s} width=${o} height=${r} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+o} cy=${s+r} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+o/2} y1=${s} x2=${i+o/2} y2=${s-30} />
            <circle cx=${i+o/2} cy=${s-30} r="16" class="fp3d-hit" />
            <circle cx=${i+o/2} cy=${s-30} r="8" />
            <path d="M${i+o/2-4} ${s-31}a4 4 0 1 1 2 3.5" />
          </g>`:v}
    </g>${this.renderBgRuler()}`}bgHandles(){return!!this.floor?.background&&this.isEditor&&this._tool==="select"&&this._bgEdit}renderBgRuler(){let t=this._bgLevel?.length?this._bgLevel:this._bgRuler;if(!t?.length)return v;let e=t.map(n=>this.toScreen(n));return I`<g class="fp3d-bg-ruler">
      ${e.length===2?I`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:v}
      ${e.map(([n,i])=>I`<circle cx=${n} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(t,e){let n=this.floor?.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let s=Math.atan2(e[1]-t[1],e[0]-t[0]),o=Math.round(s/(Math.PI/2))*(Math.PI/2)-s;if(Math.abs(o)<1e-4)return;let r=n.width*i.aspect,l=[n.x+n.width/2,n.z+r/2],d=l[0]-t[0],c=l[1]-t[1],p=[t[0]+d*Math.cos(o)-c*Math.sin(o),t[1]+d*Math.sin(o)+c*Math.cos(o)],h=(n.rotation??0)+o*180/Math.PI;h=Math.round((((h+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:h,x:k(p[0]-n.width/2),z:k(p[1]-r/2)}})}applyBgRuler(t){let n=this.floor?.background,i=this._bgRuler,s=n?this._images[n.image_id]:void 0;if(!n||!s||!i||i.length<2||!(t>0))return;let o=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(o<1e-4)return;let r=t/o,l=n.width*s.aspect,d=[n.x+n.width/2,n.z+l/2],c=i[0],p=[c[0]+r*(d[0]-c[0]),c[1]+r*(d[1]-c[1])],h=n.width*r,u=l*r;this.updateFloor({background:{...n,width:k(h),x:k(p[0]-h/2),z:k(p[1]-u/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let i=t.width*n,s=t.x+t.width/2,o=t.z+i/2,r=-(t.rotation??0)*Math.PI/180,l=e[0]-s,d=e[1]-o;return[s+l*Math.cos(r)-d*Math.sin(r)-t.x,o+l*Math.sin(r)+d*Math.cos(r)-t.z]}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?I`<g pointer-events="none">${e.rooms.map(n=>I`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:v}renderHeadroom(t){let e=t.elevation+t.height;if(!ur(this._doc).some(s=>wc(s,e)&&kc(s,t.elevation)))return v;let i={settings:this._doc.settings};return I`${[1.5,2].map(s=>Mc(i,t.elevation,s).map(([o,r])=>{let[l,d]=this.toScreen(o),[c,p]=this.toScreen(r);return I`<line class="fp3d-headroom" x1=${l} y1=${d} x2=${c} y2=${p} />
          <text class="fp3d-headroom-label" x=${(l+c)/2} y=${(d+p)/2-4}>${this.m(s,1)}</text>`}))}`}renderBackgroundForm(t){let e=t.background;return m`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?m`${this.len(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
              ${this.len(this.t("z"),e.z,n=>this.updateFloor({background:{...e,z:n}}))}
              ${this.len(this.t("background_width"),e.width,n=>this.updateFloor({background:{...e,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),e.rotation??0,n=>this.updateFloor({background:{...e,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isEditor?m`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?m`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:v}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?m`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:m`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${Gt(this.t("bg_ruler_length"),this.unit)}
                            <input type=${this.unit==="imperial"?"text":"number"} min="0.01" step="0.01" .value=${this._bgRulerLen?this.lenValue(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=this.readLen(n.target.value)??0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:v}`:v}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(e.opacity)}
                  @change=${n=>this.updateFloor({background:{...e,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:v}
      </div>
    </details>`}};var js=class{roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?v:m`<div class="fp3d-roof-floors" title=${this.t("roof_floor_pick_hint")}>
      <span class="fp3d-sub">${this.t("roof_floor_pick")}</span>
      <div class="fp3d-seg fp3d-dev-source">
        ${t.map(e=>m`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
      </div>
    </div>`}async useRoofSections(t=!1){if(!this.isEditor)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!await this.ask(this.t("roof_regen_confirm"),this.t("ask_ok"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=Ac(n,()=>j("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isEditor)return;let n=zc(this._doc,t[0],t[1],e[0],e[1]),i=Math.min(...this._doc.floors.map(d=>d.elevation)),s=n===null,o=k(n??i+2.4),r=s?6:this._doc.settings.roof.pitch||35,l={id:j("roof"),x0:k(t[0]),z0:k(t[1]),x1:k(e[0]),z1:k(e[1]),shape:s?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:o,eave_b:o,pitch_a:r,pitch_b:r,base:o,overhang:s?.15:null,...s?{open:!0}:{}};this.change(d=>{d.settings.roof.type="custom",d.settings.roof.sections=[...d.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isEditor)return;let n=Ss(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([s,o])=>[k(s),k(o)]);this.updateRoofSection({shape:"flat",points:i,...Fi(i)})}addDormer(t){let e=this.roofSection;if(!e||!this.isEditor)return;let n=Pc(e,t,j("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isEditor||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.sections?.find(s=>s.id===e);i&&Object.assign(i,t)}))}turnRoofSection(t){let e=this._roofId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof.sections??[],s=i.find(d=>d.id===e);if(!s||s.points&&s.points.length>=3)return;let o=t-(s.rotation??0);if(!o)return;let r=s.pivot??[k((s.x0+s.x1)/2),k((s.z0+s.z1)/2)],l=new Set(i.filter(d=>d!==s&&gr(i,d)===s).map(d=>d.id));n.settings.roof.sections=i.map(d=>{if(d!==s&&!l.has(d.id))return d;let c=Sc(d,o,r);return{...c,x0:k(c.x0),x1:k(c.x1),z0:k(c.z0),z1:k(c.z1),pivot:c.pivot&&[k(c.pivot[0]),k(c.pivot[1])],rotation:k(c.rotation??0)}})})}deleteRoofSection(){let t=this._roofId;!t||!this.isEditor||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isEditor)return;let e={...structuredClone(t),id:j("roof"),x0:k(t.x0+1),x1:k(t.x1+1),z0:k(t.z0+1),z1:k(t.z1+1)};t.pivot&&(e.pivot=[k(t.pivot[0]+1),k(t.pivot[1]+1)]),this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return I`<g class="fp3d-roof-layer">${e.map((n,i)=>{let s=n.id===this._roofId,o=re(n),r=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=gr(e,n),d=l?re(Ic(l,n)):o,c=(r??[d.at(d.u0,0),d.at(d.u1,0),d.at(d.u1,d.w),d.at(d.u0,d.w)]).map(_=>this.toScreen(_)),p=(_,y)=>{let[$,w]=this.toScreen(_),[E,x]=this.toScreen(y);return I`<line x1=${$} y1=${w} x2=${E} y2=${x} />`},h=n.shape==="flat"||n.shape==="parapet"?null:hr(n,{u0:0,u1:0,a:0,b:0}),u=h?I`${h.ridges.map(([_,y])=>p(o.at(_[0],_[1]),o.at(y[0],y[1])))}`:v,[f,g]=this.toScreen(o.at((o.u0+o.u1)/2,o.w/2)),b=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(Fs(n),1)}`;return I`<g data-roof=${n.id} class=${`fp3d-roof-sec${s?" fp3d-roof-sel":""}`}>
          <polygon points=${c.map(_=>_.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${u}</g>
          <text x=${f} y=${g-14}>${b}</text>
        </g>
        ${s&&this.isEditor&&!this.roofFixed(n)&&r?r.map((_,y)=>{let[$,w]=this.toScreen(_);return I`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${y}`}><circle cx=${$} cy=${w} r="16" class="fp3d-hit" /><circle cx=${$} cy=${w} r="6" /></g>`}):v}
        ${s&&this.isEditor&&!this.roofFixed(n)&&!r&&!yn(n)?[[0,0],[1,0],[1,1],[0,1]].map(([_,y])=>{let[$,w]=this.toScreen([_?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),y?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return I`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${_}:${y}`}><circle cx=${$} cy=${w} r="16" class="fp3d-hit" /><circle cx=${$} cy=${w} r="6" /></g>`}):v}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:Ri(t,e)}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return v;let e=new Map(pt(this._doc).map(n=>[n.key,n]));return I`<g class="fp3d-roofwin-layer">${t.map(n=>{let i=e.get(n.face),s=i?jc(i,n):null;return s?I`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${s.map(o=>this.toScreen([o[0],o[2]]).join(",")).join(" ")} /></g>`:v})}</g>`}addRoofWindow(){if(!this.isEditor)return;let t=pt(this._doc).filter(i=>!i.flat),e=zi(t,this._doc.settings.north??0)??pt(this._doc)[0];if(!e)return;let n=Mr(e,j("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof.windows?.find(o=>o.id===e);if(!i)return;Object.assign(i,t);let s=pt(n).find(o=>o.key===i.face);s&&Object.assign(i,je(s,Te(i)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isEditor||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(pt(this._doc).map(n=>[n.key,n]));return m`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?m`<div class="fp3d-room-list">
            ${t.map((n,i)=>{let s=e.get(n.face);return m`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${s?this.faceLabel(s):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:v}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isEditor||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isEditor,n=pt(this._doc),i=l=>this.updateRoofWindow(l),s=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,o=this.entityOptions(l=>l.startsWith("cover.")),r=this.entityOptions(l=>Ei(l)||Et(l));return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${s}</h3>
          ${e?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:v}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let d=n.find(c=>c.key===l.target.value);d&&i({...Mr(d,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name,float:t.float})}}>
              ${n.map(l=>m`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),t.w??.78,l=>i({w:Math.max(.3,Math.min(4,k(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),t.h??1.18,l=>i({h:Math.max(.3,Math.min(4,k(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),t.u,l=>i({u:k(l)}),.05)}
          ${this.len(this.t("solar_v"),t.v,l=>i({v:k(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),t.cover??null,void 0,o,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),t.contact??null,void 0,r,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),t.tilt??null,void 0,r,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),t.window??null,void 0,o,l=>i({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${t.name??""} ?disabled=${!e} maxlength="64" @change=${l=>i({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <label class="fp3d-check"
          ><input type="checkbox" ?disabled=${!e} .checked=${!!t.float} @change=${l=>i({float:l.target.checked||void 0})} />
          ${this.t("roof_window_float")}</label
        >
        <p class="fp3d-sub">${this.t("roof_window_float_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${e?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:v}
      </section>`}renderRoofPanel(){let t=this._doc.settings.roof,e=this.isEditor,n=t.type==="custom"?this.roofSection:void 0,i=this._roofWinId?t.windows?.find(o=>o.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let s=t.type==="custom"?t.sections??[]:[];return m`${this.renderRoofBasics()}
    <section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:m`<div class="fp3d-room-list">
              ${s.map((o,r)=>m`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=o.id}>
                    <span>${r+1} · ${o.dormer?this.t("roof_dormer"):this.t(`roof_shape_${o.shape}`)} · ${this.m(Math.abs(o.x1-o.x0),1)} × ${this.m(Math.abs(o.z1-o.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(Fs(o),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(o=>o.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderRoofSectionForm(t){let e=this.isEditor,n=u=>this.updateRoofSection(u),i=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[s,o]=t.flip?[i[1],i[0]]:i,r=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",d=u=>u.findIndex(f=>f.id===t.id)+1,c=(u,f,g,b=.05,_=0)=>this.len(u,f,y=>g(Math.max(_,k(y))),b,_),p=(u,f,g)=>this.num(u,f,b=>g(Math.max(0,k(b))),1,0),h=!!this._doc.settings.lock_plan;return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${t.dormer?this.t("roof_dormer"):this.t("roof_section")} ${d(this._doc.settings.roof.sections??[])}</h3>
          ${e?h?m`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:v}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!e} @change=${u=>n({shape:u.target.value})}>
            ${Sa.map(u=>m`<option value=${u} ?selected=${t.shape===u}>${this.t(`roof_shape_${u}`)}</option>`)}
          </select>
        </label>
        ${r?v:m`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        ${t.points||t.dormer?v:m`<div class="fp3d-form" title=${this.t("roof_turn_hint")}>
              ${this.num(`${this.t("roof_turn")} (\xB0)`,t.rotation??0,u=>this.turnRoofSection(Math.max(-180,Math.min(180,k(u)))),1)}
              ${e&&!this.roofFixed(t)?m`<div class="fp3d-actions">
                    <button class="fp3d-btn" @click=${()=>this.turnRoofSection(ar(t.rotation??0,-15))}>↺ 15°</button>
                    <button class="fp3d-btn" @click=${()=>this.turnRoofSection(ar(t.rotation??0,15))}>↻ 15°</button>
                  </div>`:v}
            </div>`}
        ${t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip"?m`<div class="fp3d-form" title=${this.t("roof_end_hint")}>
              ${[0,1].map(u=>{let f=this.t(t.axis==="x"?u===0?"roof_side_left":"roof_side_right":u===0?"roof_side_top":"roof_side_bottom"),g=(u===0?t.end_u0:t.end_u1)??"";return m`<label class="fp3d-field"
                  >${this.t("roof_end")} ${f}
                  <select
                    ?disabled=${!e}
                    @change=${b=>{let _=b.target.value||null;n(u===0?{end_u0:_}:{end_u1:_})}}
                  >
                    <option value="" ?selected=${g===""}>${this.t("roof_end_auto")}</option>
                    ${Fa.map(b=>m`<option value=${b} ?selected=${g===b}>${this.t(b==="gable"?"roof_end_gable":`roof_shape_${b}`)}</option>`)}
                  </select></label
                >`})}
            </div>`:v}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${u=>n({open:u.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${r?c(this.t("roof_height"),t.eave_a,u=>n({eave_a:u,eave_b:u})):m`${c(`${this.t("roof_eave")} ${l?"":s}`,t.eave_a,u=>n({eave_a:u}))}
              ${l?v:c(`${this.t("roof_eave")} ${o}`,t.eave_b,u=>n({eave_b:u}))}
              ${p(`${this.t("roof_pitch_short")} ${l?"":s}`,t.pitch_a,u=>n({pitch_a:Math.min(75,u)}))}
              ${l?v:p(`${this.t("roof_pitch_short")} ${o}`,t.pitch_b,u=>n({pitch_b:Math.min(75,u)}))}`}
          ${c(this.t("roof_base"),t.base,u=>n({base:u}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${u=>{let f=this._doc.floors.find(_=>_.id===u.target.value);if(!f)return;let g=k(f.elevation+f.height),b=g-t.base;n({base:g,eave_a:k(t.eave_a+b),eave_b:k(t.eave_b+b)})}}
            >
              ${[...this._doc.floors].filter(u=>u.rooms.length).sort((u,f)=>f.elevation-u.elevation).map(u=>m`<option value=${u.id} ?selected=${Oc(this._doc,t)?.id===u.id}>${u.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${c(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,u=>n({overhang:Math.min(2,u)}),.05,0)}
        </div>
        ${r&&e?m`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?m`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:v}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:v}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(Fs(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?m`<div class="fp3d-actions">
              ${r?v:m`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!r&&!t.dormer&&!t.open?m`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${s}</button>
                  ${l?v:m`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${o}</button>`}`:v}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:v}
      </section>`}renderRoofBasics(){let t=this._doc.settings,e=n=>this.setSettings(n);return m`<section>
      <h3>${this.t("roof_whole")}</h3>
      <p class="fp3d-sub">${this.t("roof_whole_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_basics")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):e({roof:{...t.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>m`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?m`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>e({roof:{...t.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${t.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${t.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:v}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):v}
        ${t.roof.type!=="none"?this.len(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):v}
      </div>
    </section>`}};var Bs=class{setSolarDim(t){this._solarDim=t;try{localStorage.setItem("home3d.solarDim",t?"on":"off")}catch{}}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return v;let e=pt(this._doc);return I`<g class="fp3d-solar-layer">${t.map(n=>{let i=Ct(this._doc,n,e);if(!i||i.wall&&i.wall.floorId!==this._floorId)return v;let s=n.id===this._solarId,o=this._solarDim&&!s&&!i.wall&&!i.unbounded,r=v;if(s&&i.unbounded&&this.isEditor&&!n.locked){let[l,d]=ei(i,n),c=(n.rotation??0)*Math.PI/180,p=.9+Math.max(...ke(i,n,!0).flatMap(b=>b.corners.map(_=>Math.hypot(_[0]-l,_[2]-d))))*.5,[h,u]=this.toScreen([l,d]),[f,g]=this.toScreen([l+Math.sin(c)*p,d-Math.cos(c)*p]);r=I`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${h} y1=${u} x2=${f} y2=${g} />
          <circle cx=${f} cy=${g} r="16" class="fp3d-hit" />
          <circle cx=${f} cy=${g} r="8" />
          <path d="M${f-4} ${g-1}a4 4 0 1 1 2 3.5" />
        </g>`}return I`<g data-solar=${n.id} class=${`fp3d-solar${s?" fp3d-solar-sel":""}${o?" fp3d-solar-dim":""}${s&&this._solarPick?" fp3d-solar-pick":""}`}>${ke(i,n,s).map(l=>{let d=i.wall?Math.max(.3,...l.corners.map(p=>(p[0]-i.o[0])*i.n[0]+(p[2]-i.o[2])*i.n[2])):0,c=i.wall?[l.corners[0],l.corners[1]].flatMap((p,h)=>{let u=[p[0],p[2]],f=[p[0]+i.n[0]*d,p[2]+i.n[2]*d];return h===0?[u,f]:[f,u]}):l.corners.map(p=>[p[0],p[2]]);return I`<polygon data-cell=${l.cell} class=${l.skipped?"fp3d-solar-off":""} points=${c.map(p=>this.toScreen(p).join(",")).join(" ")} />`})}</g>${r}`})}</g>`}faceLabel(t){if(t.key===we)return this.t("solar_ground");if(t.wall){let{floorId:s,room:o,edge:r,free:l}=t.wall,d=this._doc.floors.find(h=>h.id===s),c=d?.rooms.find(h=>h.id===o),p=l?this.t("solar_wall_free"):c?`${c.name}${r!=null?` ${r+1}\u2013${(r+1)%c.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${d?.name??""} \xB7 ${p?`${p} \xB7 `:""}${this.t(`compass_${kr(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(s=>s.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${kr(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${i}`}addSolarField(){if(!this.isEditor)return;let t=pt(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(o=>o.face)),n=this._doc.settings.north??0,i=zi(t.filter(o=>!e.has(o.key)),n)??zi(t,n);if(!i)return;let s=Rs(i,j("pv"));this.change(o=>o.settings.roof.solar=[...o.settings.roof.solar??[],s]),this._solarId=s.id,this._roofId=null}selectSolar(t){this._solarId=t,this._roofId=null;let e=this._doc.settings.roof.solar?.find(n=>n.id===t);e?.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){if(!this.isEditor)return;let t=this._floorId??this._doc.floors[0]?.id,e=t?Hc(this._doc,j("pv"),t):null;e&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isEditor)return;let t=vr(this._doc,j("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isEditor||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===e);if(!i)return;Object.assign(i,t);let s=Ct(n,i);s&&Object.assign(i,je(s,i))}))}setSolarString(t){let e=this._solarId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof,s=i.solar?.find(r=>r.id===e);if(!s)return;if(t==="new"){let r=i.strings??[],l={id:j("str"),name:this.t("solar_string_n",{n:r.length+1}),entity:s.entity??null,inverter:null};i.strings=[...r,l],s.string=l.id}else s.string=t;let o=new Set((i.solar??[]).map(r=>r.string).filter(Boolean));i.strings=(i.strings??[]).filter(r=>o.has(r.id))})}updateSolarString(t){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isEditor||this.change(i=>{let s=i.settings.roof.strings?.find(o=>o.id===n);s&&Object.assign(s,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===e);i&&t(i)})}deleteSolar(){let t=this._solarId;!t||!this.isEditor||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(s=>s.id!==t);let i=new Set(n.solar.map(s=>s.string).filter(Boolean));n.strings=(n.strings??[]).filter(s=>i.has(s.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=pt(this._doc),n=new Map(t.map(s=>[s.id,Ct(this._doc,s,e)])),i=this.isEditor;return m`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?m`<label class="fp3d-check fp3d-solar-dim-toggle"
            ><input type="checkbox" .checked=${this._solarDim} @change=${s=>this.setSolarDim(s.target.checked)} />
            ${this.t("solar_dim")}</label
          >`:v}
      ${t.length?m`<div class="fp3d-room-list">
            ${t.map((s,o)=>{let r=n.get(s.id),l=r?ke(r,s).length:0;return m`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(s.id)}
                >
                  <span>${s.name||`${this.t("solar_field")} ${o+1}`} · ${r?this.faceLabel(r):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Rt(this.hass,l*(s.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:v}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?m`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(s=>{let o=t.filter(c=>c.string===s.id),r=o.map(c=>n.get(c.id)?ke(n.get(c.id),c).length:0),l=r.reduce((c,p)=>c+p,0),d=o.reduce((c,p,h)=>c+r[h]*(p.wp??400)/1e3,0);return m`<p class="fp3d-sub">🔗 <b>${s.name}</b> · ${this.t("solar_string_sum",{fields:o.length,n:l,kwp:Rt(this.hass,d,1)})}</p>`})}`:v}
    </section>`}renderSolarForm(t){let e=this.isEditor,n=pt(this._doc),i=Qt(this._doc),s=Ct(this._doc,t,n),o=t.face===we,r=s?ke(s,t).length:0,l=wn(t),d=l.reduce((u,f)=>u+f,0)-(t.skip?.length??0),c=this.entityOptions(u=>this.isPowerSensor(u)),p=u=>this.updateSolar(u),h=(this._doc.settings.roof.solar??[]).findIndex(u=>u.id===t.id)+1;return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${h}`}</h3>
          ${e?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:v}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!e}
              .value=${t.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${u=>p({name:u.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${u=>{let f=u.target.value,g={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};f===we&&p({...vr(this._doc,t.id),...g,rows:t.rows,cols:t.cols});let b=n.find(y=>y.key===f);b&&p(wr(b,{...t,...g}));let _=i.find(y=>y.key===f);_&&p(wr(_,{...t,...g,rows:1}))}}
            >
              ${s?v:m`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(u=>m`<option value=${u.key} ?selected=${u.key===t.face}>${this.faceLabel(u)}</option>`)}
              <option value=${we} ?selected=${o}>${this.t("solar_ground")}</option>
              ${i.map(u=>m`<option value=${u.key} ?selected=${u.key===t.face}>${this.faceLabel(u)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,u=>{let f=Math.max(1,Math.min(40,Math.round(u)));p(t.layout?.length?{layout:Array.from({length:f},(g,b)=>t.layout[b]??t.layout[t.layout.length-1]),rows:f}:{rows:f})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${t.layout?.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${u=>{let f=u.target.value.split(/[,;\s]+/).map(g=>parseInt(g,10)).filter(g=>Number.isFinite(g)&&g>=0);f.length&&(f.length===1?p({cols:Math.max(1,Math.min(60,f[0])),layout:null,skip:null}):p({layout:f.slice(0,40).map(g=>Math.min(60,g)),rows:Math.min(40,f.length),cols:Math.max(1,...f),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${s&&!s.unbounded?m`${this.t("solar_face_size",{w:Rt(this.hass,s.lu,1),h:Rt(this.hass,s.ls,1)})} · `:v}${this.t("solar_cols_hint")}
        </p>
        ${t.layout?.length&&new Set(t.layout).size>1?m`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(u=>m`<button aria-pressed=${(t.align??"left")===u} ?disabled=${!e} @click=${()=>p({align:u})}>${this.t(`solar_align_${u}`)}</button>`)}
            </div>`:v}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.portrait!==!1} ?disabled=${!e} @click=${()=>p({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${t.portrait===!1} ?disabled=${!e} @click=${()=>p({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.look!=="blue"} ?disabled=${!e} @click=${()=>p({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${t.look==="blue"} ?disabled=${!e} @click=${()=>p({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,u=>p({module_w:Math.max(.3,Math.min(3,k(u)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,u=>p({module_h:Math.max(.3,Math.min(3,k(u)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,u=>p({wp:Math.max(50,Math.min(1500,Math.round(u)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${t.skip?.length?m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>p({skip:null})}>${this.t("solar_pick_all")}</button>`:v}
        </div>
        ${this._solarPick?m`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:v}
        <div class="fp3d-form">
          ${o?m`${this.len(this.t("solar_base"),t.base??0,u=>p({base:u>.001?Math.min(60,k(u)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,u=>p(ti(this._doc,t,u)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>p(ti(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>p(ti(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:m`${this.len(this.t("solar_u"),t.u,u=>p({u:k(u)}),.05)} ${this.num(this.t(s?.wall?"solar_v_wall":"solar_v"),t.v,u=>p({v:k(u)}),.05)}`}
          ${s?.wall?m`${this.num(this.t("solar_tilt_wall"),t.tilt??0,u=>p({tilt:Math.max(0,Math.min(90,Math.round(u)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${u=>p({flip:u.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:v}
          ${s?.flat?m`${this.num(this.t("solar_tilt"),t.tilt??15,u=>p({tilt:Math.max(0,Math.min(45,Math.round(u)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${u=>p({flip:u.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:v}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:r,kwp:Rt(this.hass,r*(t.wp??400)/1e3,1)})}${r<d?m` · <b>${this.t("solar_partial",{n:r,total:d})}</b>`:v}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${u=>{let f=u.target.value;this.setSolarString(f===""?null:f)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(u=>m`<option value=${u.id} ?selected=${u.id===t.string}>${u.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let u=this._doc.settings.roof.strings?.find(_=>_.id===t.string);if(!u)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,c,_=>p({entity:_==="none"?null:_}));let f=this.hass?Re(this.hass,this._doc.floors):null,g=_=>this._doc.floors.flatMap(y=>y.furniture.filter($=>bt($.type)===_).map($=>({m:$,fl:y}))).map(({m:y,fl:$},w)=>{let E=f?.get(y.id)?.entity,x=y.name?.trim()||(E&&this.hass?et(this.hass,E):"");return{id:y.id,label:`${x||`${this.t(`furn_${_}`)} ${w+1}`} \xB7 ${$.name}`}}),b=[...g("inverter"),...g("home_battery")];return m`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${u.name} @change=${_=>this.updateSolarString({name:_.target.value.trim()||u.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),u.entity??null,void 0,c,_=>this.updateSolarString({entity:_==="none"?null:_}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${_=>this.updateSolarString({inverter:_.target.value||null})}>
                  <option value="" ?selected=${!u.inverter}>${this.t(b.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${b.map(_=>m`<option value=${_.id} ?selected=${_.id===u.inverter}>${_.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?m`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!s} @click=${()=>s&&p({...Rs(s,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:v}
      </section>`}};function Lr(a,t){return a===null?t:t===null?a:a+t}function Qf(a,t){return(t.systems??[]).map(e=>{let n=e.battery_soc?Number(a.states[e.battery_soc]?.state):NaN,i=e.solar?be(a.states[e.solar]):null;return{id:e.id,name:e.name,inverter:e.inverter??null,grid:e.grid?be(a.states[e.grid],e.grid_invert):null,solar:i===null?null:Math.max(0,i),battery:e.battery?be(a.states[e.battery],e.battery_invert):null,soc:Number.isFinite(n)?n:null}})}function Bp(a){let t=new Map,e=new Set(a.map(n=>n.powerEntity));for(let n of a)n.circuit&&n.circuit!==n.powerEntity&&e.has(n.circuit)&&t.set(n.circuit,(t.get(n.circuit)??0)+n.power);return a.map(n=>Math.max(0,n.power-(t.get(n.powerEntity)??0)))}var _e=.03,Ks=a=>a&&a!=="none"?a:null;function Vr(a,t=e=>Ks(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of a.floors)for(let i of n.furniture){let s=t(i),o=bt(i.type);if(o==="meter")e.grid??=s,e.gridExport??=Ks(i.export);else if((o==="inverter"||o==="solar")&&s&&!e.solar.includes(s))e.solar.push(s);else if(o==="home_battery"){s&&!e.battery.includes(s)&&e.battery.push(s);let r=Ks(i.charge);r&&!e.charge.includes(r)&&e.charge.push(r),(s||r)&&e.batteries.push({power:s,charge:r});let l=Ks(i.soc);l&&!e.soc.includes(l)&&e.soc.push(l)}}return e}function Cr(a){for(let t of a.floors){let e=t.furniture.find(n=>bt(n.type)==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return a.energy.meter}function Kp(a){let t=n=>a.energy_sources?.find(i=>i.type===n)?.stat_energy_from??null,e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function Us(a,t,e="power"){if(!t)return null;let n=a.entities?.[t]?.device_id;if(!n)return null;let i=Object.keys(a.states).filter(r=>r.startsWith("sensor.")&&a.entities?.[r]?.device_id===n&&a.states[r]?.attributes.device_class===e);if(i.length<=1)return i[0]??null;let s=i.filter(r=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(r)),o=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return s.find(r=>o&&r.includes(o))??s[0]??i[0]}function Up(a,t){let e={};for(let n of t.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,s=Us(a,i);s&&!e.grid&&(e.grid=s)}else if(n.type==="solar"){let i=Us(a,n.stat_energy_from);i&&!e.solar&&(e.solar=i)}else if(n.type==="battery"){let i=Us(a,n.stat_energy_from??n.stat_energy_to);i&&!e.battery&&(e.battery=i);let s=Us(a,n.stat_energy_from??n.stat_energy_to,"battery");s&&!e.battery_soc&&(e.battery_soc=s)}return e}var Gp=.07;function be(a,t=!1){if(!a)return null;let e=Number(a.state);if(!Number.isFinite(e))return null;let n=e*Jf(a.attributes.unit_of_measurement);return t?-n:n}function Jf(a){switch(typeof a=="string"?a.trim():""){case"mW":return .001;case"kW":return 1e3;case"MW":return 1e6;case"GW":return 1e9;case"TW":return 1e12;default:return 1}}function Zf(a,t){return t.startsWith("sensor.")&&a.states[t]?.attributes.device_class==="power"}function ri(a,t){if(Zf(a,t))return t;let e=a.entities?.[t]?.device_id;if(!e)return null;let n=Kd(a,e),i=pe(a,t),s=Jo(a,e).filter(l=>l!==t),o=`sensor.${t.slice(t.indexOf(".")+1)}_power`;if(s.includes(o))return o;let r=s.find(l=>i!==null&&pe(a,l)===i);return r||n?r??null:s.find(l=>i===null||pe(a,l)===null||pe(a,l)===i)??null}function qp(a,t,e,n=Vr(t)){let i=t.energy,s=i.grid??n.grid,o=s?be(a.states[s],i.grid_invert):null;if(!i.grid&&n.gridExport){let b=Math.max(0,be(a.states[n.gridExport])??0);o=Math.max(0,o??0)-b}let r=i.solar?be(a.states[i.solar]):null;if(!i.solar&&n.solar.length){let b=n.solar.map(_=>be(a.states[_])).filter(_=>_!==null);r=b.length?b.reduce((_,y)=>_+y,0):null}let l=i.battery?be(a.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let b=n.batteries.map(_=>{if(_.charge){let y=_.power?Math.max(0,be(a.states[_.power])??0):0,$=Math.max(0,be(a.states[_.charge])??0);return y-$}return _.power?be(a.states[_.power],i.battery_invert):null}).filter(_=>_!==null);l=b.length?b.reduce((_,y)=>_+y,0):null}let c=(i.battery_soc?[i.battery_soc]:n.soc).map(b=>Number(a.states[b]?.state)).filter(b=>Number.isFinite(b)),p=Qf(a,i);for(let b of p)o=Lr(o,b.grid),r=Lr(r,b.solar),l=Lr(l,b.battery),b.soc!==null&&c.push(b.soc);let h=c.length?c.reduce((b,_)=>b+_,0)/c.length:NaN,u=i.tariff?a.states[i.tariff]:void 0,f=Number(u?.state),g=i.consumption?be(a.states[i.consumption]):null;return g!==null?g=Math.max(0,g):o!==null||r!==null||l!==null?g=Math.max(0,(o??0)+Math.max(0,r??0)+(l??0)):e.length&&(g=Bp(e).reduce((b,_)=>b+_,0)),{grid:o,solar:r===null?null:Math.max(0,r),battery:l,soc:Number.isFinite(h)?h:null,tariff:u&&Number.isFinite(f)?{value:f,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:g,...p.length?{systems:p}:{}}}function In(a,t){return a.pos.push(t),a.adj.push([]),a.pos.length-1}function rn(a,t,e){let n=Math.hypot(a.pos[t][0]-a.pos[e][0],a.pos[t][1]-a.pos[e][1]);a.adj[t].push({to:e,w:n}),a.adj[e].push({to:t,w:n})}function tm(a,t){let e=a.length,n=a.map((i,s)=>{let o=a[(s+1)%e],r=o[0]-i[0],l=o[1]-i[1],d=Math.hypot(r,l)||1,c=-l/d,p=r/d;return{p:[i[0]+c*t[s],i[1]+p*t[s]],d:[r/d,l/d],n:[c,p]}});return a.map((i,s)=>{let o=n[(s-1+e)%e],r=n[s],l=o.d[0]*r.d[1]-o.d[1]*r.d[0];if(Math.abs(l)<1e-6)return[i[0]+r.n[0]*t[s],i[1]+r.n[1]*t[s]];let d=((r.p[0]-o.p[0])*r.d[1]-(r.p[1]-o.p[1])*r.d[0])/l;return[o.p[0]+o.d[0]*d,o.p[1]+o.d[1]*d]})}function em(a){return Vt(a.points)>=0?{pts:a.points,flipped:!1}:{pts:[...a.points].reverse(),flipped:!0}}function Dr(a,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=wt(a.rooms,{exterior:t,interior:e},a.walls??[]);for(let s of a.rooms){if(s.points.length<3)continue;let{pts:o,flipped:r}=em(s),l=o.length,d=o.map((h,u)=>{let f=r?(l-2-u+l)%l:u,g=i.some(b=>!b.exterior&&b.sources.some(_=>_.room_id===s.id&&_.edge===f));return Gp+(g?e/2:0)}),c=tm(o,d).map(h=>In(n,h)),p=c.map((h,u)=>[h,c[(u+1)%l]]);for(let[h,u]of p)rn(n,h,u);n.rings.set(s.id,p)}for(let s of i){if(s.exterior||!s.roomLeft||!s.roomRight)continue;let o=[(s.a[0]+s.b[0])/2,(s.a[1]+s.b[1])/2],r=Hi(n,s.roomLeft,o),l=Hi(n,s.roomRight,o);r!==null&&l!==null&&rn(n,r,l)}return im(n),n}var nm=1;function im(a){let t=[...a.rings.entries()];for(;;){let e=new Array(a.pos.length).fill(-1),n=0;for(let o=0;o<a.pos.length;o++){if(e[o]>=0)continue;let r=[o];for(e[o]=n;r.length;)for(let{to:l}of a.adj[r.pop()])e[l]<0&&(r.push(l),e[l]=n);n++}if(n<2)return;let i=null;for(let[,o]of t)for(let r of new Set(o.flat()))for(let[l,d]of t)if(e[d[0][0]]!==e[r])for(let[c,p]of d){let h=a.pos[r],u=a.pos[c],f=a.pos[p],g=f[0]-u[0],b=f[1]-u[1],_=Math.min(1,Math.max(0,((h[0]-u[0])*g+(h[1]-u[1])*b)/(g*g+b*b||1))),y=Math.hypot(h[0]-u[0]-g*_,h[1]-u[1]-b*_);(!i||y<i.d)&&(i={a:r,room:l,d:y})}if(!i||i.d>nm+2*Gp)return;let s=Hi(a,i.room,a.pos[i.a]);if(s===null)return;rn(a,i.a,s)}}function Hi(a,t,e){let n=a.rings.get(t);if(!n)return null;let i=null;for(let o of n){let r=a.pos[o[0]],l=a.pos[o[1]],d=l[0]-r[0],c=l[1]-r[1],p=d*d+c*c||1,h=Math.min(1,Math.max(0,((e[0]-r[0])*d+(e[1]-r[1])*c)/p)),u=[r[0]+d*h,r[1]+c*h],f=Math.hypot(e[0]-u[0],e[1]-u[1]);(!i||f<i.d)&&(i={seg:o,q:u,d:f})}if(!i)return null;let s=In(a,i.q);return rn(a,s,i.seg[0]),rn(a,s,i.seg[1]),s}function qs(a,t,e){let n=a.pos[e],i=Hi(a,t.id,n);if(i===null)return!1;let s=a.pos[i],o=a.pos[a.adj[i][0].to],r=a.pos[a.adj[i][1].to],l=Math.hypot(r[0]-o[0],r[1]-o[1])||1,d=[(r[0]-o[0])/l,(r[1]-o[1])/l],c=(n[0]-s[0])*d[0]+(n[1]-s[1])*d[1],p=(n[1]-s[1])*d[0]-(n[0]-s[0])*d[1];if(Math.abs(c)<.01||Math.abs(p)<.01)return rn(a,e,i),!0;let h=[s[0]+d[0]*c,s[1]+d[1]*c],u=[s[0]-d[1]*p,s[1]+d[0]*p],f=In(a,K(u,t.points)||!K(h,t.points)?u:h);return rn(a,i,f),rn(a,f,e),!0}function Vi(a,t){let e=a.rooms.filter(s=>s.points.length>=3),n=e.find(s=>K(t,s.points));if(n)return n;let i=null;for(let s of e)for(let o of s.points){let r=Math.hypot(t[0]-o[0],t[1]-o[1]);(!i||r<i.d)&&(i={room:s,d:r})}return i?.room??null}function Yp(a,t){let e=a.pos.map(()=>1/0),n=a.pos.map(()=>-1),i=a.pos.map(()=>!1);for(e[t]=0;;){let s=-1;for(let o=0;o<e.length;o++)!i[o]&&e[o]<1/0&&(s<0||e[o]<e[s])&&(s=o);if(s<0)break;i[s]=!0;for(let{to:o,w:r}of a.adj[s])e[s]+r<e[o]-1e-9&&(e[o]=e[s]+r,n[o]=s)}return{dist:e,prev:n}}function Cp(a,t){return a.every(e=>t[e].kind==="battery")?"battery":a.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var Dp=new WeakMap;function sm(a,t){let e=Cr(a),n=a.floors.find(c=>c.id===e.floor_id),i=[],{wall_exterior:s,wall_interior:o}=a.settings,r=new Map,l=new Map;t.forEach((c,p)=>l.set(c.floorId,[...l.get(c.floorId)??[],p]));let d=a.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let p=c.elevation>n.elevation,h=l.get(c.id),u=Cp(h,t);i.push({floorId:n.id,a:[e.x,_e,e.z],b:[e.x,p?n.height:-.2,e.z],dist:0,members:h,kind:u});let f=Math.abs(c.elevation-n.elevation);i.push({floorId:c.id,a:[e.x,p?-.2:c.height,e.z],b:[e.x,_e,e.z],dist:f,members:h,kind:u}),r.set(c.id,f+.25)}for(let c of d){let p=Dr(c,s,o),h=Vi(c,[e.x,e.z]);if(!h)continue;let u=In(p,[e.x,e.z]);if(!qs(p,h,u))continue;let f=[];for(let $ of l.get(c.id)){let w=t[$],E=Vi(c,[w.x,w.z]);if(!E)continue;let x=In(p,[w.x,w.z]);qs(p,E,x)&&f.push({node:x,member:$})}let{dist:g,prev:b}=Yp(p,u),_=new Map;for(let $ of f)if(Number.isFinite(g[$.node]))for(let w=$.node;b[w]>=0;w=b[w]){let E=b[w],x=`${E}>${w}`,M=_.get(x)??{a:E,b:w,members:[]};M.members.push($.member),_.set(x,M)}let y=r.get(c.id)??0;for(let{a:$,b:w,members:E}of _.values()){let x=p.pos[$],M=p.pos[w],R=Cp(E,t);i.push({floorId:c.id,a:[x[0],_e,x[1]],b:[M[0],_e,M[1]],dist:y+g[$],members:E,kind:R})}}return i}function Xp({building:a,consumers:t,summary:e,battery:n,fieldPower:i,devicePower:s}){let o=Cr(a);if(!o)return[];let r=a.floors.find(S=>S.id===o.floor_id);if(!r)return[];let l=S=>s?.get(S),d=Gs(a,"inverter"),c=Gs(a,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let p=S=>{let z=null;for(let H of d)H.floorId===S.floorId&&(!z||Math.hypot(H.x-S.x,H.z-S.z)<Math.hypot(z.x-S.x,z.z-S.z))&&(z=H);return z},h=(S,z)=>S.reduce((H,D)=>!H||Math.hypot(D.x-z.x,D.z-z.z)<Math.hypot(H.x-z.x,H.z-z.z)?D:H,null),u=S=>e.systems?.find(z=>z.inverter===S),f=S=>{let z=g.get(S.id)?u(g.get(S.id).id):void 0;return z&&z.battery!==null&&l(S.id)===void 0?z.battery/Math.max(1,c.filter(H=>g.get(H.id)===g.get(S.id)).length):l(S.id)??(c.length===1?e.battery??0:0)},g=new Map;for(let S of c){let z=p(S);z&&g.set(S.id,z)}let b=Bp(t),_=t.map((S,z)=>({floorId:S.floorId,x:S.x,z:S.z,kind:S.wallbox?"wallbox":"consumer",power:b[z],load:b[z]}));for(let S of c){if(g.has(S.id)||e.battery===null)continue;let z=f(S);_.push({floorId:S.floorId,x:S.x,z:S.z,kind:"battery",power:Math.abs(z),load:-z})}let y=`${o.floor_id}:${o.x},${o.z}|${_.map(S=>`${S.floorId}:${S.x},${S.z}:${S.kind}`).join(";")}`,$=Dp.get(a);$||Dp.set(a,$=new Map);let w=$.get(y);w||(w=sm(a,_),$.clear(),$.set(y,w));let E=w.map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.kind==="battery"?S.members.reduce((z,H)=>z+_[H].power,0):Math.max(0,S.members.reduce((z,H)=>z+_[H].load,0)),kind:S.kind})),x=e.grid!==null?Wr(a):null,M=a.settings.roof.cables??[],R=S=>M.find(z=>z.id===S),T=(S,z)=>S.map(H=>({...H,key:z}));if(x){let S=e.grid>=0,z=R("grid"),H=z?Li(a,z,[x.end[0],r.elevation+Math.max(_e,x.height),x.end[1]],[o.x,r.elevation+.4+1.1,o.z]):[...x.height>.05?[[x.end[0],x.height,x.end[1]]]:[],[x.end[0],_e,x.end[1]],[x.wall[0],_e,x.wall[1]],[o.x,_e,o.z]],D=z?oi(a,S?H:[...H].reverse(),Math.abs(e.grid),S?"grid":"export",r):Jp(r.id,S?H:[...H].reverse(),Math.abs(e.grid),S?"grid":"export",0);E.push(...T(D,"grid"))}if(e.battery!==null&&e.battery>0)for(let S of E)S.kind==="battery"&&([S.a,S.b]=[S.b,S.a]);let L=a.settings.roof.solar??[],P=a.settings.roof.strings??[],A=new Map;if(i&&L.length){let S=[...pt(a),...Qt(a)];for(let z of L){let H=i.get(z.id)??0,D=z.string?P.find(Z=>Z.id===z.string)?.inverter:null,C=D?c.find(Z=>Z.id===D)??null:null,W=D&&!C?d.find(Z=>Z.id===D)??null:null;if(C){let Z=g.get(C.id);Z&&A.set(Z.id,(A.get(Z.id)??0)+H);let It=C.variant==="wall"?.5+C.h:.9,Nt=R(`solar:${z.id}`),ht=Nt?Np(a,z):null,ye=a.floors.find(Q=>Q.id===C.floorId);Nt&&ht&&ye?E.push(...T(oi(a,Li(a,Nt,ht,[C.x,ye.elevation+It,C.z]),H,"solar",ye),`solar:${z.id}`)):E.push(...T(jp(a,z,H,C,It),`solar:${z.id}`));continue}if(!W&&d.length){let Z=Ct(a,z,S),It=Z?ei(Z,z):[z.u,z.v];W=d.reduce((Nt,ht)=>!Nt||Math.hypot(ht.x-It[0],ht.z-It[1])<Math.hypot(Nt.x-It[0],Nt.z-It[1])?ht:Nt,null)}W&&A.set(W.id,(A.get(W.id)??0)+H);let G=W??{floorId:o.floor_id,x:o.x,z:o.z},Y=W?1.1+W.h:1.5,X=R(`solar:${z.id}`),it=X?Np(a,z):null,U=a.floors.find(Z=>Z.id===G.floorId);X&&it&&U?E.push(...T(oi(a,Li(a,X,it,[G.x,U.elevation+Y,G.z]),H,"solar",U),`solar:${z.id}`)):E.push(...T(jp(a,z,H,G,Y),`solar:${z.id}`))}}let V=Gs(a,"solar");for(let S of V){let z=Math.max(0,l(S.id)??(L.length?0:(e.solar??0)/V.length)),H=p(S),D=H?null:h(c.filter(G=>G.floorId===S.floorId),S);if(H)A.set(H.id,(A.get(H.id)??0)+z);else if(D&&g.get(D.id)){let G=g.get(D.id);A.set(G.id,(A.get(G.id)??0)+z)}let C=H??D??{floorId:o.floor_id,x:o.x,z:o.z,h:0,variant:null},W=H?1.1+H.h:D?D.variant==="wall"?.5+D.h:.9:1.5;E.push(...T(Hr(a,S,Math.min(.3,S.h),C,W,z,"solar",0),`solar:${S.id}`))}!(i&&L.length)&&e.solar!==null&&!d.length&&!V.length&&E.push({floorId:r.id,a:[o.x+.08,r.height+.6,o.z+.08],b:[o.x+.08,_e,o.z+.08],dist:0,power:e.solar,kind:"solar"});for(let S of d){let z=1.1+S.h,H=c.filter(W=>g.get(W.id)===S),D=l(S.id);if(D===void 0){D=A.get(S.id)??u(S.id)?.solar??(d.length===1?e.solar??0:0);for(let W of H)D+=f(W)}let C=a.floors.find(W=>W.id===S.floorId);if(e.solar!==null||e.battery!==null){let W=R(`inv:${S.id}`),G=W&&C?oi(a,Li(a,W,[S.x,C.elevation+z,S.z],[o.x,r.elevation+1.5,o.z]),Math.max(0,D),"inverter",C):Hr(a,S,z,{floorId:o.floor_id,x:o.x,z:o.z},1.5,Math.max(0,D),"inverter",0);E.push(...T(G,`inv:${S.id}`))}for(let W of H){let G=f(W);if(e.battery===null&&l(W.id)===void 0)continue;let Y=W.variant==="wall"?.5+W.h:.9,X=R(`bat:${W.id}`),it=X&&C?oi(a,Li(a,X,[S.x,C.elevation+z-.1,S.z],[W.x,C.elevation+Y,W.z]),Math.abs(G),"battery",C):Hr(a,S,z-.1,W,Y,Math.abs(G),"battery",0);E.push(...T(G<=0?it:it.map(U=>({...U,a:U.b,b:U.a})).reverse(),`bat:${W.id}`))}}return E}function Wr(a){let t=Cr(a),e=t?a.floors.find(u=>u.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:i}=a.settings,{walls:s}=wt(e.rooms,{exterior:n,interior:i},e.walls??[]),o=Gs(a,"grid_point")[0],r=s.filter(u=>u.exterior);if(o){let u=null;for(let b of r){let _=b.b[0]-b.a[0],y=b.b[1]-b.a[1],$=o.x-t.x,w=o.z-t.z,E=$*y-w*_;if(Math.abs(E)<1e-9)continue;let x=((b.a[0]-t.x)*y-(b.a[1]-t.z)*_)/E,M=((b.a[0]-t.x)*w-(b.a[1]-t.z)*$)/E;if(x<=0||x>1||M<0||M>1||u&&x>=u.t)continue;let R=Math.hypot(_,y)||1;u={q:[t.x+$*x,t.z+w*x],out:[y/R,-_/R],t:x}}let f=u?[u.q[0]+u.out[0]*(n/2+.05),u.q[1]+u.out[1]*(n/2+.05)]:[t.x,t.z],g=a.floors.flatMap(b=>b.furniture).find(b=>b.id===o.id)?.mount_y??0;return{floorId:e.id,wall:f,end:[o.x,o.z],height:Math.max(0,g)}}let l=null;for(let u of r){let f=u.b[0]-u.a[0],g=u.b[1]-u.a[1],b=f*f+g*g||1,_=Math.min(1,Math.max(0,((t.x-u.a[0])*f+(t.z-u.a[1])*g)/b)),y=[u.a[0]+f*_,u.a[1]+g*_],$=Math.hypot(t.x-y[0],t.z-y[1]),w=Math.sqrt(b);(!l||$<l.d)&&(l={q:y,out:[g/w,-f/w],d:$})}if(!l)return null;let{q:d,out:c}=l,p=0;for(let u of a.floors)for(let f of u.outdoor??[]){let g=f.points.length;for(let b=0;b<g;b++){let _=f.points[b],y=f.points[(b+1)%g],$=y[0]-_[0],w=y[1]-_[1],E=c[0]*w-c[1]*$;if(Math.abs(E)<1e-9)continue;let x=((_[0]-d[0])*w-(_[1]-d[1])*$)/E,M=((_[0]-d[0])*c[1]-(_[1]-d[1])*c[0])/E;x>0&&M>=0&&M<=1&&(p=Math.max(p,Math.min(15,x)))}}let h=p>n+1?p:n+2.5;return{floorId:e.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*h,d[1]+c[1]*h],height:0}}function Gs(a,t){let e=[];for(let n of a.floors)for(let i of n.furniture)(bt(i.type)??i.type)===t&&e.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return e}var Wp=new WeakMap;function Qp(a,t,e,n){let i=`${t.id}:${e.join(",")}>${n.join(",")}`,s=Wp.get(a);s||Wp.set(a,s=new Map);let o=s.get(i);if(o)return o;let{wall_exterior:r,wall_interior:l}=a.settings,d=Dr(t,r,l),c=[e,n],p=Vi(t,e),h=Vi(t,n);if(p&&h){let u=In(d,e),f=In(d,n);if(qs(d,p,u)&&qs(d,h,f)){let{dist:g,prev:b}=Yp(d,u);if(Number.isFinite(g[f])){c.length=0;for(let _=f;_>=0;_=b[_])c.unshift(d.pos[_])}}}return s.set(i,c),c}function Hr(a,t,e,n,i,s,o,r){let l=a.floors.find(p=>p.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let d=Qp(a,l,[t.x,t.z],[n.x,n.z]),c=[[t.x,e,t.z],...d.map(p=>[p[0],_e,p[1]]),[n.x,i,n.z]];return Jp(l.id,c,s,o,r)}function Jp(a,t,e,n,i){let s=[];for(let o=0;o+1<t.length;o++){let r=t[o],l=t[o+1],d=Math.hypot(l[0]-r[0],l[1]-r[1],l[2]-r[2]);d<1e-4||(s.push({floorId:a,a:r,b:l,dist:i,power:e,kind:n}),i+=d)}return s}function Li(a,t,e,n){let s=(a.floors.find(o=>o.id===t.floor_id)?.elevation??0)+Math.max(_e,t.height);return[e,...t.points.map(o=>[o[0],s,o[1]]),n]}function Np(a,t){let e=Ct(a,t,[...pt(a),...Qt(a)]);if(!e)return null;let[n,i]=en(e,t),s=t.u+n/2,o=e.unbounded?t.v+i/2:t.v;return[e.o[0]+e.eu[0]*s+e.es[0]*o,e.o[1]+e.eu[1]*s+e.es[1]*o,e.o[2]+e.eu[2]*s+e.es[2]*o]}function om(a,t,e){let{wall_exterior:n,wall_interior:i}=a.settings,s=Dr(t,n,i),o=Vi(t,e),r=o?Hi(s,o.id,e):null;return r===null?e:s.pos[r]}function oi(a,t,e,n,i){let s=[...a.floors].sort((d,c)=>d.elevation-c.elevation),o=d=>{let c=i;for(let p of s)d>=p.elevation-.01&&(c=p);return c},r=[],l=0;for(let d=0;d+1<t.length;d++){let c=t[d],p=t[d+1];if(Math.hypot(p[0]-c[0],p[1]-c[1],p[2]-c[2])<1e-4)continue;let u=[];if(Math.abs(p[1]-c[1])>.01){let f=Math.min(c[1],p[1]),g=Math.max(c[1],p[1]);for(let b of s)b.elevation>f+.01&&b.elevation<g-.01&&u.push(b.elevation);p[1]<c[1]&&u.reverse()}for(let f of[...u,p[1]]){let g=(f-c[1])/(p[1]-c[1]||1),b=Math.abs(p[1]-c[1])>.01?[c[0]+(p[0]-c[0])*g,f,c[2]+(p[2]-c[2])*g]:p,_=o((c[1]+b[1])/2),y=Math.hypot(b[0]-c[0],b[1]-c[1],b[2]-c[2]);y>1e-4&&r.push({floorId:_.id,a:[c[0],c[1]-_.elevation,c[2]],b:[b[0],b[1]-_.elevation,b[2]],dist:l,power:e,kind:n}),l+=y,c=b}}return r}function jp(a,t,e,n,i){let s=[...pt(a),...Qt(a)],o=Ct(a,t,s),r=a.floors.find(b=>b.id===n.floorId);if(!o||!r)return[];let[l,d]=en(o,t),c=(b,_)=>[o.o[0]+o.eu[0]*b+o.es[0]*_,o.o[1]+o.eu[1]*b+o.es[1]*_,o.o[2]+o.eu[2]*b+o.es[2]*_],p=t.u+l/2,h=r.elevation+_e,u=[],f;if(o.unbounded){let b=c(p,t.v+d/2);f=[b[0],h,b[2]],u.push(f)}else if(o.wall){let b=c(p,t.v);f=[b[0],h,b[2]],u.push(b,f)}else{let b=c(p,t.v),_=Ii(a)??r,y=Math.max(r.elevation+.5,Math.min(b[1]-.25,_.elevation+_.height-.12));f=[b[0],y,b[2]],u.push(b)}let g=om(a,r,[f[0],f[2]]);u.push([g[0],f[1],g[1]]),Math.abs(f[1]-h)>.05&&u.push([g[0],h,g[1]]);for(let b of Qp(a,r,g,[n.x,n.z]).slice(1))u.push([b[0],h,b[1]]);return u.push([n.x,r.elevation+i,n.z]),oi(a,u,e,"solar",r)}var Zp=(a,t)=>t.startsWith("sensor.")&&a.states[t]?.attributes.device_class==="energy";function tu(a,t,e){if(e==="none")return null;if(e)return e;let n=t.replace(/^sensor\./,"").replace(/_?power$/,""),i=`sensor.${n}_energy`;if(Zp(a,i))return i;let s=a.entities?.[t]?.device_id;if(!s)return null;let o=Object.keys(a.states).filter(r=>Zp(a,r)&&a.entities?.[r]?.device_id===s);return o.length===1?o[0]:o.find(r=>r.startsWith(`sensor.${n}_`))??null}var Ys=class{cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(s=>[s.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=Xp({building:t,consumers:[],summary:n,fieldPower:e}).filter(s=>s.key)}catch{i=[]}return this.cableCache={doc:t,segs:i},i}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,i)=>e(n)-e(i)||n.localeCompare(i))}cableLabel(t){let e=r=>{let l=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===r);return l?l.name||this.typeName(l.type):"?"},n=this._doc.floors.flatMap(r=>r.furniture).find(r=>bt(r.type)==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[s,o]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(s==="solar"){let r=this._doc.settings.roof.solar??[],l=r.findIndex(c=>c.id===o);return l<0&&this._doc.floors.some(c=>c.furniture.some(p=>p.id===o))?`${e(o)} \u2192 ${this.t("furn_inverter")}`:`${r[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return s==="inv"?`${e(o)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${e(o)}`}layCable(t){if(!this.isEditor||!this._floorId)return;let e=[];for(let s of this.cableSegments().filter(o=>o.key===t))for(let o of[s.a,s.b]){let r=[k(o[0]),k(o[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-r[0],l[1]-r[1])>.05)&&e.push(r)}let n=e.length>2?e.slice(1,-1):e,i=this._floorId;this.change(s=>{s.settings.roof.cables=[...(s.settings.roof.cables??[]).filter(o=>o.id!==t),{id:t,floor_id:i,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){let t=this.cableSegments();if(!t.length)return v;let e=t.filter(o=>o.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,s=[...new Set(t.map(o=>o.key))];return I`<g class="fp3d-cable-layer">${s.map(o=>{let r=n.find(b=>b.id===o),l=`fp3d-cable fp3d-cable-${o.split(":")[0]}${r?" fp3d-cable-laid":""}${o===i?" fp3d-cable-sel":""}`,d=t.filter(b=>b.key===o),c=e.filter(b=>b.key===o).map(b=>{let _=this.toScreen([b.a[0],b.a[2]]),y=this.toScreen([b.b[0],b.b[2]]);return I`<line x1=${_[0]} y1=${_[1]} x2=${y[0]} y2=${y[1]} />`});if(!(r&&o===i&&r.floor_id===this._floorId&&!r.locked))return c.length?I`<g class=${l} data-cable=${o}><g class="fp3d-cable-hit">${c}</g>${c}</g>`:v;let p=d[0],h=d[d.length-1],u=[this.toScreen([p.a[0],p.a[2]]),...r.points.map(b=>this.toScreen(b)),this.toScreen([h.b[0],h.b[2]])],f=u.slice(0,-1).map((b,_)=>I`<line class="fp3d-cable-piece" data-cable-line=${o} data-cable-seg=${_} x1=${b[0]} y1=${b[1]} x2=${u[_+1][0]} y2=${u[_+1][1]} />`),g=r.points.map((b,_)=>{let y=this.toScreen(b);return I`<g class="fp3d-vertex" data-cable-pt=${`${o}:${_}`}><circle cx=${y[0]} cy=${y[1]} r="16" class="fp3d-hit" /><circle cx=${y[0]} cy=${y[1]} r="6" /></g>`});return I`<g class=${l} data-cable=${o}>${c}${f}${g}</g>`})}</g>`}renderCableSettings(){let t=this.cableKeys();if(!t.length)return v;let e=this.isEditor,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(s=>s.id===this._cableId):void 0;return m`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(s=>m`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${s===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=s===this._cableId?null:s;let o=n.find(r=>r.id===s);this._cableId&&o&&this._doc.floors.some(r=>r.id===o.floor_id)&&(this._floorId=o.floor_id)}}
            >
              <span>${this.cableLabel(s)}${n.some(o=>o.id===s)?m` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:v}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?m`<div class="fp3d-actions">
              ${i?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(s=>{let o=s.settings.roof.cables?.find(r=>r.id===i.id);o&&(o.locked=!o.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.cables=(s.settings.roof.cables??[]).filter(o=>o.id!==this._cableId))}>${this.t("cable_auto")}</button>`:m`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?m`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,s=>this.change(o=>{let r=o.settings.roof.cables?.find(l=>l.id===i.id);r&&(r.height=Math.min(30,Math.max(0,k(s))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(s=>s.id===i.floor_id)?.name??""})}</p>`:v}`:v}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return v;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}",solar:"\u2600"},n=this._doc.settings.roof.hologram,i=n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return I`<g class="fp3d-energy-markers">${i?I`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:v}${t.furniture.filter(s=>xe(s.type)).map(s=>{let[o,r]=this.toScreen([s.x,s.z]),l=s.id===this._furnitureId;return I`<g data-energy-device=${s.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${o} cy=${r} r="17" />
          <text x=${o} y=${r+6} class="fp3d-energy-icon">${e[bt(s.type)??s.type]??"\u26A1"}</text>
          ${l?I`<text x=${o} y=${r+32} class="fp3d-energy-name">${this.typeName(s.type)}</text>`:v}
          <title>${this.typeName(s.type)}</title>
        </g>`})}</g>`}renderEnergyPanel(){let t=this._solarId?this._doc.settings.roof.solar?.find(n=>n.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?this.floor?.furniture.find(n=>n.id===this._furnitureId&&xe(n.type)):void 0;return e?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`:m`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderCableSettings()}
      ${this.renderSettingsLink("energy",null,"settings_moved_energy")}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isEditor,n=this._doc.settings.roof.hologram??ci,i=n.place==="free",s=l=>this.change(d=>d.settings.roof.hologram={...d.settings.roof.hologram??ci,...l}),o=(l,d)=>l.name||`${this.t("solar_field")} ${d+1}`,r=()=>{let l=-1/0,d=1/0,c=-1/0;for(let h of this._doc.floors)for(let u of h.rooms)for(let[f,g]of u.points)l=Math.max(l,f),d=Math.min(d,g),c=Math.max(c,g);let p=Number.isFinite(l);s({place:"free",x:n.x??(p?k(l+2):0),z:n.z??(p?k((d+c)/2):0),height:n.height??3})};return m`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!e} @change=${l=>l.target.value==="free"?r():s({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?m`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>s({x:k(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>s({z:k(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>s({height:Math.min(60,Math.max(0,k(l)))}),.25,0)}`:t.length?m`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>s({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,d)=>m`<option value=${l.id} ?selected=${l.id===n.field}>${o(l,d)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>s({right:Math.min(30,Math.max(-30,k(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>s({up:Math.min(30,Math.max(-30,k(l)))}),.25)}`:m`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>s({size:Math.min(3,Math.max(.3,k(l)))}),.1,.3)}
        ${this.num(this.t("holo_device_min_w"),n.device_min_w??0,l=>s({device_min_w:Math.max(0,Math.round(l))}),1,0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${n.device_house!==!1} ?disabled=${!e} @change=${l=>s({device_house:l.target.checked?void 0:!1})} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!n.device_room} ?disabled=${!e} @change=${l=>s({device_room:l.target.checked||void 0})} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!n.plant_floor} ?disabled=${!e} @change=${l=>s({plant_floor:l.target.checked||void 0})} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${n.mirror!==!1} ?disabled=${!e} @change=${l=>s({mirror:l.target.checked?void 0:!1})} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`}isPowerSensor(t){if(!Et(t))return!1;let e=this.hass?.states[t]?.attributes;return e?.device_class==="power"||e?.unit_of_measurement==="W"||e?.unit_of_measurement==="kW"}typeName(t){let e=Tt(t);return e?Lt(e,this.hass?.language??"en"):this.t(`furn_${t}`)}devicePower(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}renderEnergyChecklist(){let t=this._doc,e=this.hass?Re(this.hass,t.floors):new Map,n=t.floors.flatMap(b=>b.furniture.map(_=>({m:_,fl:b}))),i=b=>n.filter(_=>(bt(_.m.type)??_.m.type)===b),s=b=>{this._floorId=b.fl.id,this._solarId=null,this.selectItem("furniture",b.m.id),this.showPoint(b.m.x,b.m.z)},o=t.settings.roof.solar??[],r=i("meter"),l=i("inverter"),d=i("home_battery"),c=i("grid_point"),p=!!t.energy.grid||r.some(b=>this.devicePower(b.m,e)),h=!!t.energy.solar||l.length>0&&l.every(b=>this.devicePower(b.m,e)),u=d.every(b=>this.devicePower(b.m,e)&&b.m.soc&&b.m.soc!=="none")||!!t.energy.battery,f=[{state:o.length?"ok":"todo",label:this.t(o.length?"chk_solar":"chk_solar_add"),action:o.length?()=>this._solarId=o[0].id:()=>this.addSolarField()},r.length?{state:p?"ok":"todo",label:this.t(p?"chk_meter":"chk_meter_sensor"),action:()=>s(r[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:h?"ok":"todo",label:this.t(h?"chk_inverter":"chk_inverter_sensor"),action:()=>s(l.find(b=>!this.devicePower(b.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},d.length?{state:u?"ok":"todo",label:this.t(u?"chk_battery":"chk_battery_sensor"),action:()=>s(d[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},c.length?{state:"ok",label:this.t("chk_grid"),action:()=>s(c[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")}],g=f.filter(b=>b.state==="ok").length;return m`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${g}/${f.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${f.map(b=>b.href?m`<a class="fp3d-chk fp3d-chk-${b.state}" href=${b.href} target="_blank" rel="noopener"><span>${b.state==="ok"?"\u2713":b.state==="todo"?"\u25CB":"\xB7"}</span>${b.label}</a>`:m`<button class="fp3d-chk fp3d-chk-${b.state}" ?disabled=${!this.isEditor&&!!b.action&&b.state!=="ok"} @click=${b.action}><span>${b.state==="ok"?"\u2713":b.state==="todo"?"\u25CB":"\xB7"}</span>${b.label}</button>`)}
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isEditor)return;if(t==="grid_point"){let y=Wr(this._doc),[$,w,E]=_t(t),[x,M]=y?y.end:this.toWorld(this._size.w/2,this._size.h/2),R={id:j("furniture"),type:t,x:k(x),z:k(M),rotation:0,w:$,d:w,h:E,variant:null};this.change((T,L)=>L.furniture.push(R)),this.selectItem("furniture",R.id),this.showPoint(R.x,R.z);return}let n=y=>`${y.name} ${y.area_id&&this.hass?.areas?.[y.area_id]?.name||""} ${y.area_id??""}`.toLowerCase(),i=e.rooms.filter(y=>y.points.length>=3),s=y=>i.find($=>y.test(n($))),o=i.find(y=>e.furniture.some($=>$.type==="parking"&&K([$.x,$.z],y.points))),r=s(/garage|carport/)??o,l=s(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),d=s(/flur|diele|eingang|hall|entr|lobby/),c=(t==="wallbox"?r:t==="meter"?l??d??r:l??r)??this.room??i.sort((y,$)=>Math.abs(Vt($.points))-Math.abs(Vt(y.points)))[0],[p,h,u]=_t(t),[f,g]=c?jt(c.points):this.toWorld(this._size.w/2,this._size.h/2);if(c){let[y,$]=jt(c.points),w=null,E=new Set(e.openings.filter(R=>R.room_id===c.id).map(R=>R.edge)),x=c.points.some((R,T)=>!E.has(T));c.points.forEach((R,T)=>{if(x&&E.has(T))return;let L=c.points[(T+1)%c.points.length],P=Math.hypot(L[0]-R[0],L[1]-R[1]);if(w&&P<=w.l)return;let A=(R[0]+L[0])/2,V=(R[1]+L[1])/2,S=-(L[1]-R[1])/P,z=(L[0]-R[0])/P;(y-A)*S+($-V)*z<0&&([S,z]=[-S,-z]),w={mx:A,mz:V,nx:S,nz:z,l:P}});let M=w;M&&([f,g]=[M.mx+M.nx*(h/2+.25),M.mz+M.nz*(h/2+.25)])}let b={id:j("furniture"),type:t,x:k(f),z:k(g),rotation:0,w:p,d:h,h:u,variant:null},_=c?_n({...e,furniture:[...e.furniture,b]},b,this._doc.settings.wall_interior):null;_&&Object.assign(b,{x:k(_.x),z:k(_.z),rotation:_.rotation}),this.change((y,$)=>$.furniture.push(b)),this.selectItem("furniture",b.id),this.showPoint(b.x,b.z)}renderEnergyDevices(){let t=this.isEditor,e=this._doc.floors.flatMap(n=>n.furniture.filter(i=>xe(i.type)).map(i=>({fl:n,m:i})));return m`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${e.length?m`<div class="fp3d-room-list">
            ${e.map(({fl:n,m:i})=>m`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.typeName(i.type)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:v}
      <div class="fp3d-actions">
        ${Hn.map(n=>m`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return v;let[n,i]=this.toScreen([e.x,e.z]);return I`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}circuitSelect(t,e,n){let i=this.entityOptions(s=>this.isPowerSensor(s)).filter(s=>s.id!==e);return m`${this.entitySelect(this.t("energy_circuit"),t??"none",void 0,i,s=>n(s&&s!=="none"?s:null))}
      <p class="fp3d-sub fp3d-wide">${this.t("energy_circuit_hint")}</p>
      ${t?v:m`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("energy_circuit_unset")}</p>`}`}wireEnergySelect(t,e,n){let i=this.entityOptions(o=>o.startsWith("sensor.")&&this.hass?.states[o]?.attributes.device_class==="energy"),s=this.hass?tu(this.hass,e):null;return m`${this.entitySelect(this.t("energy_wire_sensor"),t,s,i,n)}
      <p class="fp3d-sub fp3d-wide">${this.t("energy_wire_sensor_hint")}</p>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=Up(this.hass,t),n=0,i=r=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===r),s=(r,l,d)=>{if(!d)return;let c=i(r);if(!c&&this.floor&&(this.addEnergyDevice(r),c=i(r)),!c||c[l]&&c[l]!=="none")return;let p=c.id;this.change(h=>{let u=h.floors.flatMap(f=>f.furniture).find(f=>f.id===p);u&&(u[l]=d)}),n++};s("meter","power",e.grid),s("inverter","power",e.solar),s("home_battery","power",e.battery),s("home_battery","soc",e.battery_soc);let o=Kp(t);for(let r of["gas","water"])o[r]&&!this._doc.energy[r]&&(this.setEnergy({[r]:o[r]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergySystems(t,e){let n=this._doc.energy.systems??[],i=this.isEditor,s=(l,d)=>this.setEnergy({systems:n.map(c=>c.id===l?{...c,...d}:c)}),o=this._doc.floors.flatMap(l=>l.furniture.filter(d=>bt(d.type)==="inverter")),r=(l,d)=>c=>s(l,{[d]:c==="none"?null:c});return m`<div class="fp3d-wide">
      <h4>${this.t("energy_systems_title")}</h4>
      <p class="fp3d-sub">${this.t("energy_systems_hint")}</p>
      ${n.map((l,d)=>m`<div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            ><span>${this.t("energy_system_name")}</span>
            <input type="text" .value=${l.name} placeholder=${this.t("energy_system_n",{n:d+2})} ?disabled=${!i} @change=${c=>s(l.id,{name:c.target.value})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            ><span>${this.t("energy_system_inverter")}</span>
            <select ?disabled=${!i} @change=${c=>s(l.id,{inverter:c.target.value||null})}>
              <option value="" ?selected=${!l.inverter}>${this.t("energy_system_inverter_none")}</option>
              ${o.map((c,p)=>m`<option value=${c.id} ?selected=${c.id===l.inverter}>${c.name?.trim()||`${this.t("furn_inverter")} ${p+1}`}</option>`)}
            </select></label
          >
          ${this.entitySelect(this.t("energy_grid"),l.grid,void 0,t,r(l.id,"grid"))}
          <label class="fp3d-check fp3d-wide"
            ><input type="checkbox" .checked=${l.grid_invert} ?disabled=${!i} @change=${c=>s(l.id,{grid_invert:c.target.checked})} />
            ${this.t("energy_invert")}</label
          >
          ${this.entitySelect(this.t("energy_solar_sensor"),l.solar,void 0,t,r(l.id,"solar"))}
          ${this.entitySelect(this.t("energy_battery_sensor"),l.battery,void 0,t,r(l.id,"battery"))}
          <label class="fp3d-check fp3d-wide"
            ><input type="checkbox" .checked=${l.battery_invert} ?disabled=${!i} @change=${c=>s(l.id,{battery_invert:c.target.checked})} />
            ${this.t("energy_invert")}</label
          >
          ${this.entitySelect(this.t("energy_battery_soc"),l.battery_soc,void 0,e,r(l.id,"battery_soc"))}
          <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.setEnergy({systems:n.filter(c=>c.id!==l.id)})}>${this.t("energy_system_remove")}</button>
        </div>`)}
      <button
        class="fp3d-btn"
        ?disabled=${!i||n.length>=Da}
        @click=${()=>this.setEnergy({systems:[...n,{id:j("sys"),name:"",inverter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null}]})}
      >
        ${this.t("energy_system_add")}
      </button>
    </div>`}renderEnergyBalance(){let t=this._doc.energy,e=this.isEditor,n=(b,_)=>this.hass?.states[b]?.attributes[_],i=this.entityOptions(b=>this.isPowerSensor(b)),s=this.entityOptions(b=>Et(b)&&n(b,"device_class")==="battery"),o=this.entityOptions(b=>Et(b)&&(n(b,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(b,"unit_of_measurement")??""))),r=this.entityOptions(b=>/^(binary_sensor|schedule|input_boolean|switch)\./.test(b)),l=b=>_=>this.setEnergy({[b]:_==="none"?null:_}),d=b=>this.entityOptions(_=>Et(_)&&(n(_,"device_class")===b||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??"")),b),c=this.hass?Re(this.hass,this._doc.floors):new Map,p=Vr(this._doc,b=>this.devicePower(b,c)),h=this.hass?qp(this.hass,this._doc,[],p):null,u=!!h&&(h.solar??0)<20,f=u&&h.grid!==null&&h.grid<-50,g=u&&h.battery!==null&&h.battery<-50&&(h.grid??0)<=0;return m`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${f?m`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:v}
      ${g?m`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:v}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,p.grid,i,l("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${b=>this.setEnergy({grid_invert:b.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,p.solar[0]??null,i,l("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,p.battery[0]??null,i,l("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${b=>this.setEnergy({battery_invert:b.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,p.soc[0]??null,s,l("battery_soc"))}
        ${this.renderEnergySystems(i,s)}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,i,l("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,o,l("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),t.gas??null,void 0,d("gas"),b=>this.setEnergy({gas:b==="none"?null:b}))}
        ${this.entitySelect(this.t("energy_water_meter"),t.water??null,void 0,d("water"),b=>this.setEnergy({water:b==="none"?null:b}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_cheap_rate"),t.cheap_rate??null,void 0,r,b=>this.setEnergy({cheap_rate:b==="none"?null:b}))}
        <div class="fp3d-field">
          <span>${this.t("energy_cheap_from")}</span>
          ${this.timeField(this.t("energy_cheap_from"),t.cheap_from??"",!e,b=>this.setEnergy({cheap_from:b||null}))}
        </div>
        <div class="fp3d-field">
          <span>${this.t("energy_cheap_to")}</span>
          ${this.timeField(this.t("energy_cheap_to"),t.cheap_to??"",!e,b=>this.setEnergy({cheap_to:b||null}))}
        </div>
      </div>
      <p class="fp3d-sub">${this.t("energy_cheap_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!e||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?m`<p class="fp3d-sub">${this._energyNote}</p>`:v}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}};var eu=jl("home-3d-align",()=>"27fea62d5e89");var Rn=null,Xs=class{fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(i=>i.id===n);case"opening":return t.openings.find(i=>i.id===n);case"furniture":return t.furniture.find(i=>i.id===n);case"device":return t.placements.find(i=>i.entity_id===n);case"wall":return(t.walls??[]).find(i=>i.id===n);case"outdoor":return t.outdoor.find(i=>i.id===n)}}isFixedItem(t,e){return Yi(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isEditor||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((i,s)=>{let o=this.fixItem(s,t,e);o&&(o.locked=n)})}toggleLockPlan(){this.isEditor&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}async confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||await this.ask(this.t("fixed_delete_confirm"))}ask(t,e=this.t("delete"),n=!0){return os(t,{ok:e,cancel:this.t("cancel"),danger:n})}tell(t){return Al(t,{ok:this.t("ask_ok")})}pickItem(t,e,n){return!this.floor||t.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]")?null:this.itemHits(t,e,n)[0]??t.closest("[data-furniture]")?.getAttribute("data-furniture")??null}itemHits(t,e,n){if(!this.floor||t.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]"))return[];let i=this._hiddenItems;return $d(this.floor.furniture,e,this._view.scale,Wo(n),i.length?s=>i.includes(s.id):void 0)}firmItemAt(t,e){let n=this._hiddenItems;return(this.floor?.furniture??[]).some(i=>!n.includes(i.id)&&wd(i,t,this._view.scale,Wo(e)))}toggleItemHidden(t){let e=this._hiddenItems;this._hiddenItems=e.includes(t)?e.filter(n=>n!==t):[...e,t],this._hiddenItems.includes(t)&&this.selection().includes(t)&&this.selectItem("room",this._roomId)}tabItems(){let t=this.floor,e=this.furnitureItem;if(!t||!e)return[];let n=t.furniture.filter(s=>!this._hiddenItems.includes(s.id)),i=Gn(t.rooms,n);for(let s of i.values())if(s.some(o=>o.id===e.id))return s.map(o=>o.id);return n.map(s=>s.id)}selectFromList(t){let e=this.floor?.furniture.find(n=>n.id===t);e&&(this.selectItem("furniture",t),this._single=!!e.group,this.showPoint(e.x,e.z))}async deleteFromList(t){this.floor?.furniture.some(e=>e.id===t)&&(this.selectItem("furniture",t),this._single=!0,await this.deleteFurniture())}openContext(t,e,n="mouse"){if(!this.isEditor||!this.floor)return;let i=this.toWorld(...e),s=g=>t.closest(`[${g}]`)?.getAttribute(g)??null,o=null,r=s("data-device"),l=s("data-opening"),d=this.pickItem(t,i,n),c=s("data-free-wall"),p=s("data-outdoor")?this.outdoorAt(i)??s("data-outdoor"):null,h=s("data-room")??this.roomAt(i);if(r?o=["device",r]:l?o=["opening",l]:d?o=["furniture",d]:c?o=["wall",c]:p&&!h?o=["outdoor",p]:h&&(o=["room",h]),!o){this._ctx=null;return}let[u,f]=o;this.selectItem(u,f),(u==="opening"||u==="furniture")&&(this._roomId=this._roomId??h),this._ctx={x:e[0],y:e[1],kind:u,id:f}}async deleteItem(t,e){if(t==="device"){if(!await this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return v;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(t.x,(n?.clientWidth??800)-190)),s=Math.max(4,Math.min(t.y,(n?.clientHeight??600)-190)),o=r=>()=>{this._ctx=null,r()};return m`<div class="fp3d-ctx" style=${`left:${i}px;top:${s}px`} @pointerdown=${r=>r.stopPropagation()} @contextmenu=${r=>r.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${o(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${o(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?m`<button @click=${o(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:v}
      ${t.kind==="room"&&Rn?m`<button title=${zt(this.t("paste_items"),["Ctrl+V"])} @click=${o(()=>this.pasteClipboard())}>⎘ ${this.t("paste_items_n",{n:Rn.items.length})}</button>`:v}
      ${t.kind==="furniture"?m`<button title=${zt(this.t("duplicate"),["Ctrl+D"])} @click=${o(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button title=${zt(this.t("copy_items"),["Ctrl+C"])} @click=${o(()=>this.copySelection())}>⎘ ${this.t("copy_items")}</button>
            <button ?disabled=${e} title=${zt(this.t("ctx_rotate"),["R"])} @click=${o(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${o(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${o(()=>{let r=this.floor?.furniture.find(l=>l.id===t.id);r&&this.openWallViewFor(r)})}>▦ ${this.t("wall_view")}</button>`:v}
      <button class="fp3d-ctx-danger" @click=${o(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isEditor)return v;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?m`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:v;let n=this.isFixedItem(t,e);return m`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){if(this._notice=null,this._kerbPick=!1,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._multi=[],this._single=!1,this._deviceId=t==="device"?e:null,t==="device"&&e){let n=this.floor?.placements.find(i=>i.entity_id===e);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}goToFurniture(t){let e=this._doc.floors.find(i=>i.furniture.some(s=>s.id===t)),n=e?.furniture.find(i=>i.id===t);return!e||!n?!1:(this._floorId=e.id,this.selectItem("furniture",t),this.showPoint(n.x,n.z),!0)}copySelection(){let t=this.floor,e=t&&this._furnitureId?gl(t,this.selection()):null;return e?(Rn=e,this.requestUpdate(),!0):!1}pasteClipboard(){let t=this.floor;if(!Rn||!t||!this.isEditor)return!1;let e=bl(Rn,t.id,j);this.change((i,s)=>s.furniture.push(...e)),this.setMulti(e.map(i=>i.id));let n=this.furnitureItem;return n&&(this._roomId=this.roomAt([n.x,n.z])??this._roomId),!0}selectAll(){let t=this.floor?.furniture??[];return t.length?(this.setMulti(t.map(e=>e.id)),!0):!1}renderClipButtons(){return m`<button class="fp3d-btn" title=${zt(this.t("duplicate"),["Ctrl+D"])} @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
      <button class="fp3d-btn" title=${zt(this.t("help_key_copy"),["Ctrl+C"])} @click=${()=>this.copySelection()}>${this.t("copy_items")}</button>
      ${this.renderPasteButton()}`}renderPasteButton(){return!Rn||!this.isEditor?v:m`<button class="fp3d-btn" title=${zt(this.t("help_key_paste"),["Ctrl+V"])} @click=${()=>this.pasteClipboard()}>${this.t("paste_items_n",{n:Rn.items.length})}</button>`}selection(){if(this._multi.length)return this._multi;let t=this.furnitureItem;return t?t.group&&!this._single?(this.floor?.furniture??[]).filter(e=>e.group===t.group).map(e=>e.id):[t.id]:[]}withGroups(t){let e=new Set((this.floor?.furniture??[]).filter(n=>t.includes(n.id)&&n.group).map(n=>n.group));return[...new Set([...t,...(this.floor?.furniture??[]).filter(n=>n.group&&e.has(n.group)).map(n=>n.id)])]}setMulti(t){if(!t.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",t[0]);let e=this.selection();t.length>1&&!(t.length===e.length&&t.every(n=>e.includes(n)))&&(this._multi=t)}toggleMulti(t){let e=this._furnitureId?this.selection():[],n=this.withGroups([t]),i=e.includes(t)?e.filter(s=>!n.includes(s)):[...new Set([...e,...n])];this.setMulti(i)}selectionCentre(t){let e=(this.floor?.furniture??[]).filter(s=>t.includes(s.id)),n=e.map(s=>s.x),i=e.map(s=>s.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(t){let e=this.selection();if(e.some(d=>this.isFixedItem("furniture",d))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(e),s=t*Math.PI/180,o=Math.round(Math.cos(s)*1e6)/1e6,r=Math.round(Math.sin(s)*1e6)/1e6,l=new Set(e);this.change((d,c)=>{for(let p of c.furniture){if(!l.has(p.id))continue;let h=p.x-n,u=p.z-i;Object.assign(p,{x:k(n+h*o-u*r),z:k(i+h*r+u*o),rotation:((p.rotation+t)%360+360)%360})}})}groupSelection(){let t=new Set(this.selection());if(t.size<2)return;let e=j("block");this.change((n,i)=>{for(let s of i.furniture)t.has(s.id)&&(s.group=e)}),this._multi=[],this._single=!1}ungroupSelection(){let t=this.selection(),e=new Set(t);this.change((n,i)=>{for(let s of i.furniture)e.has(s.id)&&(s.group=null)}),t.length>1&&(this._multi=t)}lockSelection(t){let e=new Set(this.selection());this.change((n,i)=>{for(let s of i.furniture)e.has(s.id)&&(s.locked=t||null)})}deleteSelected(){this._roofWinId&&this._tool==="roof"?this.deleteRoofWindow():this._solarId&&this.houseTool?this.deleteSolar():this._roofId&&this._tool==="roof"?this.deleteRoofSection():this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null&&!this.houseTool?this.deleteVertex(this._vertex):(this._tool==="select"||this._tool==="furniture")&&this.deleteRoom()}clearToolSelection(){this._openingId=null,this._furnitureId=null,this._deviceId=null,this._outdoorId=null,this._wallId=null,this._vertex=null,this._multi=[],this._single=!1,this._roofId=null,this._solarId=null,this._roofWinId=null,this._cableId=null,this._solarPick=!1,this._edgeHi=null}renderSelectionFrame(t,e){let n=this.drag,i=n?.kind==="marquee"?I`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(p=>this.toScreen(p)[0]))} y=${Math.min(...[n.start,n.end].map(p=>this.toScreen(p)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:v;if(e.length<2)return i;let s=t.furniture.filter(p=>e.includes(p.id)).flatMap(p=>Wt(p));if(!s.length)return i;let[o,r]=this.toScreen([Math.min(...s.map(p=>p[0])),Math.min(...s.map(p=>p[1]))]),[l,d]=this.toScreen([Math.max(...s.map(p=>p[0])),Math.max(...s.map(p=>p[1]))]),c=!this._multi.length;return I`${i}<g class=${`fp3d-selframe${c?" fp3d-selframe-block":""}`}>
      <rect x=${o-6} y=${r-6} width=${l-o+12} height=${d-r+12} rx="6" />
      <text x=${o-4} y=${r-12}>${c?`\u25A3 ${this.t("block_title")} \xB7 ${e.length}`:this.t("multi_title",{n:e.length})}</text>
    </g>`}renderBlockForm(){let t=this.selection(),e=(this.floor?.furniture??[]).filter(o=>t.includes(o.id)),n=!this._multi.length&&!!e[0]?.group,i=e.every(o=>this.isFixedItem("furniture",o.id)),s=!i&&e.some(o=>this.isFixedItem("furniture",o.id));return m`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</h3></div>
      <p class="fp3d-sub">${Oe()&&!n&&this._multiMode?this.t("multi_hint_on_touch"):Xn(Oe(),n?"block_hint":"multi_hint",(o,r)=>this.t(o,r))}</p>
      ${s?m`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:v}
      <div class="fp3d-block-parts">
        ${e.map(o=>m`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",o.id),this._single=!!o.group}}>${o.name||lt(this.hass,o.type)}</button>`)}
      </div>
      ${this._doc.floors.length>1?m`<div class="fp3d-form">${this.renderItemFloor()}</div>`:v}
      <div class="fp3d-actions">
        ${n?m`<button class="fp3d-btn" @click=${()=>this.ungroupSelection()}>${this.t("block_break")}</button>`:m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" title=${zt(this.t("rotate_left"),["Shift+R"])} @click=${()=>this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" title=${zt(this.t("rotate_right"),["R"])} @click=${()=>this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        ${this.renderClipButtons()}
        <button class="fp3d-btn ${s?"fp3d-primary":""}" title=${zt(this.t(i||s?"unfix":"fix"),["L"])} @click=${()=>this.lockSelection(!i&&!s)}>${i?`\u{1F513} ${this.t("unfix")}`:s?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" title=${zt(this.t("delete"),["Del"])} @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${n?v:this.renderAlignTools(e.length,i||s)}
      ${this.renderMultiToggle()}
    </section>`}renderAlignTools(t,e){return eu(),m`<fp3d-align .host=${this} .count=${t} .fixed=${e}></fp3d-align>`}renderMultiToggle(){return m`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${t=>this._multiMode=t.target.checked} /> ${this.t("multi_mode")}</label>`}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}};var Nr=.3,nu=.01;function iu(a,t,e){let n=qt(a,t,e);return n?[ne(n.room,n.edge,a.offset-a.width/2),ne(n.room,n.edge,a.offset+a.width/2)]:null}function jr(a,t){let[e,n]=a,i=Math.hypot(n[0]-e[0],n[1]-e[1])||1,s=(n[0]-e[0])/i,o=(n[1]-e[1])/i,r=t[0]-e[0],l=t[1]-e[1];return{s:r*s+l*o,d:Math.abs(r*-o+l*s),len:i}}function rm(a,t,e,n){for(let i of t){let s=iu(i,e,n);if(!s)continue;let o=jr(a,s[0]),r=jr(a,s[1]);if(o.d>Nr||r.d>Nr)continue;let l=Math.min(o.s,r.s),d=Math.max(o.s,r.s);if(l<o.len-nu&&d>nu)return i}return null}function su(a,t,e,n,i){let s=rm(t,e,n,i);if(!s)return null;let o=iu(s,n,i),r=jr(o,a);return r.s>=0&&r.s<=r.len&&r.d<=Nr?{select:s}:{blocked:s}}function ou(a,t,e){let n=a.points[t],i=a.points[(t+1)%a.points.length],s=(Math.atan2(n[0]-i[0],-(n[1]-i[1]))*180/Math.PI-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(s/45)%8]}function am(a,t){return t.rooms.some(e=>e.points.length>=3)?Ss(t.rooms,t.walls??[],a.settings.wall_exterior,a.settings.wall_interior):null}function lm(a,t){if(a.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=am(a,t);return!!e&&e.some(([n,i])=>Oo(n,i)-t.elevation>-.15)}function dm(a,t,e,n,i){return!e||!lm(a,t)?!1:n<Math.min(t.height,Oo(i[0],i[1])-t.elevation)-.05}function ru(a,t,e){if(e.type!=="window")return!1;let n=qt(e,t.rooms,t.walls??[]);if(!n)return!1;let i=wt(t.rooms,{exterior:a.settings.wall_exterior,interior:a.settings.wall_interior},t.walls??[]).walls,s=mi(i,e,n);if(!s)return!1;let{wall:o,s:r}=s,l=Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1]),d=l>1e-9?[(o.b[0]-o.a[0])/l,(o.b[1]-o.a[1])/l]:[1,0],c=Math.min(Math.min(t.height,o.height??t.height)-.02,e.sill+e.height),p=Math.max(0,Math.min(e.sill,c-.1));return dm(a,t,o.exterior,p,[o.a[0]+d[0]*r,o.a[1]+d[1]*r])}var Qs=class{offsetOnEdge(t,e,n,i,s){let o=t.points[e],r=t.points[(e+1)%t.points.length],l=Math.hypot(r[0]-o[0],r[1]-o[1])||1,d=((n[0]-o[0])*(r[0]-o[0])+(n[1]-o[1])*(r[1]-o[1]))/l,c=s?.01:this._doc.settings.grid;return this.clampOffset(t,e,i,Math.round(d/c)*c)}clampOffset(t,e,n,i){let s=t.points[e],o=t.points[(e+1)%t.points.length],r=Math.hypot(o[0]-s[0],o[1]-s[1])||1,l=this.floor,d=this._doc.settings,[c,p]=l?Pd(wt(l.rooms,{exterior:d.wall_exterior,interior:d.wall_interior},l.walls??[]).walls,t,e):[0,0],h=Math.min(n,r+c+p)/2;return k(Math.min(r,r+p-h,Math.max(0,h-c,i)))}pressOpening(t,e){this.selectItem("opening",t),this.drag=this.isEditor?{kind:"opening",id:t,startScreen:e,base:this._doc,moved:!1}:{kind:"pan",last:e}}planOpening(t,e,n=!1){let i=this.floor;if(!i||!this.isEditor)return null;let s=null;for(let w of i.walls??[]){let E=qt({room_id:"",edge:0,wall:w.id},i.rooms,i.walls??[]);if(!E)continue;let[x,M]=this.toScreen(w.a),[R,T]=this.toScreen(w.b),L=(R-x)**2+(T-M)**2||1,P=Math.min(1,Math.max(0,((e[0]-x)*(R-x)+(e[1]-M)*(T-M))/L)),A=Math.hypot(e[0]-x-(R-x)*P,e[1]-M-(T-M)*P),V=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],S=i.rooms.find(z=>z.points.length>=3&&K(V,z.points));A<bn*2.2&&(!s||A-1<s.d)&&(s={room:E.room,edge:0,d:A-1,wall:w.id,roomId:S?.id??w.id})}for(let w of i.rooms)for(let E=0;E<w.points.length;E++){let[x,M]=this.toScreen(w.points[E]),[R,T]=this.toScreen(w.points[(E+1)%w.points.length]),L=(R-x)**2+(T-M)**2||1,P=Math.min(1,Math.max(0,((e[0]-x)*(R-x)+(e[1]-M)*(T-M))/L)),A=Math.hypot(e[0]-x-(R-x)*P,e[1]-M-(T-M)*P),V=A-(w.id===this._roomId?.5:0);A<bn*2.2&&(!s||V<s.d)&&(s={room:w,edge:E,d:V})}if(!s)return null;let{room:o,edge:r,wall:l}=s,d=o.points[r],c=o.points[(r+1)%o.points.length],p=Math.hypot(c[0]-d[0],c[1]-d[1]),h=Zi[t],u=h.type,f=k(Math.min(h.width,Math.max(.3,p-.1))),g=this.toWorld(...e),b=this.snapOnEdge(o,r,g,f,$s(i,{id:"",room_id:s.roomId??o.id,edge:r,wall:l}),n),_=[ne(o,r,b-f/2),ne(o,r,b+f/2)],y=su(g,_,i.openings,i.rooms,i.walls??[]);return y||{add:{id:j("opening"),room_id:s.roomId??o.id,edge:r,...l?{wall:l}:{},offset:b,width:f,type:u,sill:h.sill,height:h.height,..."style"in h&&t!=="door"?{style:h.style}:{},hinge:"left",leaves:h.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null}}}hoverOpening(t,e,n=!1){let i=t?.closest?.("[data-opening]")?.getAttribute("data-opening"),s=i?this.floor?.openings.find(l=>l.id===i):void 0,o=s?{select:s}:this.planOpening(this._openingPreset,e,n);(!o||!("add"in o))&&this.showGuides([]);let r=o?this.openingHint(o):null;r!==this._openingHover&&(this._openingHover=r)}placeOpening(t,e,n=!1){let i=this.planOpening(t,e,n);if(this.showGuides([]),!i)return!1;if("select"in i)this.pressOpening(i.select.id,e);else if("blocked"in i)this._openingNote=this.openingHint(i);else{let s=i.add;this.change((o,r)=>r.openings.push(s)),this.selectItem("opening",s.id)}return!0}openingHint(t){let e=n=>this.t(`preset_${ui(n)}`);return"add"in t?this.t("hint_opening_add",{kind:e(t.add)}):"select"in t?this.t("hint_opening_select",{kind:e(t.select)}):this.t("opening_overlap",{kind:e(t.blocked)})}setOpeningPreset(t,e){let n=Zi[e],i=ui(t)===e,s="style"in n?n.style:null,o=this.floor,r=o?qt(t,o.rooms,o.walls??[]):null,l={};if(!i){let d=n.width;if(r){let c=r.room.points[r.edge],p=r.room.points[(r.edge+1)%r.room.points.length];d=k(Math.min(n.width,Math.max(.3,Math.hypot(p[0]-c[0],p[1]-c[1])-.1)))}l={width:d,...r?{offset:this.clampOffset(r.room,r.edge,d,t.offset)}:{}}}this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:s,...l})}updateOpening(t){let e=this._openingId;this.change((n,i)=>Kt(i.openings.find(s=>s.id===e),t))}async deleteOpening(){let t=this._openingId;!t||!this.isEditor||!await this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}snapOnEdge(t,e,n,i,s,o){if(!o){let r=t.points[e],l=t.points[(e+1)%t.points.length],d=Math.hypot(l[0]-r[0],l[1]-r[1])||1,c=((n[0]-r[0])*(l[0]-r[0])+(n[1]-r[1])*(l[1]-r[1]))/d,p=Yc(c,i,d,s,ni(this._view.scale));if(p){let h=this.clampOffset(t,e,i,k(p.offset));if(Math.abs(h-p.offset)<.002)return this.showGuides(Xc(r,l,p,14/this._view.scale)),h}}return this.showGuides([]),this.offsetOnEdge(t,e,n,i,o)}renderOpenings(t,e){return I`<g>${t.openings.map(n=>{let i=qt(n,t.rooms,t.walls??[]);if(!i)return v;let{room:s,edge:o}=i,r=mi(e,n,i),l=ne(s,o,n.offset-n.width/2),d=ne(s,o,n.offset+n.width/2),c=(d[0]-l[0])/(n.width||1),p=(d[1]-l[1])/(n.width||1),h=Vt(s.points)>=0?1:-1,u=[-p*h,c*h],f=[.06,.06];r&&(f=r.wall.free||r.wall.roomLeft===s.id?[r.wall.left,r.wall.right]:[r.wall.right,r.wall.left]);let g=(T,L)=>this.toScreen([T[0]+u[0]*L,T[1]+u[1]*L]),b=[g(l,f[0]+.01),g(d,f[0]+.01),g(d,-f[1]-.01),g(l,-f[1]-.01)],_=n.id===this._openingId,y=Ji(n,r?.wall.exterior??!1),$=n.type==="door"&&cl(y),w=`fp3d-open fp3d-open-${n.type}${$?" fp3d-open-front":""}${_?" fp3d-open-sel":""}`,E;if(n.type==="garage"){let T=g(l,f[0]-.04),L=g(d,f[0]-.04),P=g(l,f[0]+Math.min(2,n.height)),A=g(d,f[0]+Math.min(2,n.height));E=I`<line x1=${T[0]} y1=${T[1]} x2=${L[0]} y2=${L[1]} />
          ${_?I`<path class="fp3d-open-track" d="M${T[0]} ${T[1]}L${P[0]} ${P[1]}M${L[0]} ${L[1]}L${A[0]} ${A[1]}"><title>${this.t("help_legend_track")}</title></path>`:v}`}else if(n.type==="door"){let T=n.swing==="out",L=T?-f[1]:f[0],P=n.hinge==="left"==h>0,A=n.leaves===2,V=l,S=d,z=[],H=dl(n.width,y,P,n);if(H){let X=it=>it<=.02?l:it>=n.width-.02?d:ne(s,o,n.offset-n.width/2+it);V=X(H.x0),S=X(H.x1),z=H.panels.map(([it,U])=>[X(it),X(U)])}let D=[(V[0]+S[0])/2,(V[1]+S[1])/2],C=(A?.5:1)*Math.hypot(S[0]-V[0],S[1]-V[1]),W=(f[0]-f[1])/2,G=z.map(([X,it])=>{let U=g(X,W+.035),Z=g(it,W+.035),It=g(X,W-.035),Nt=g(it,W-.035);return I`<line class="fp3d-open-pane" x1=${U[0]} y1=${U[1]} x2=${Z[0]} y2=${Z[1]} /><line class="fp3d-open-pane" x1=${It[0]} y1=${It[1]} x2=${Nt[0]} y2=${Nt[1]} />`}),Y=(X,it)=>{let[U,Z]=g(X,L),[It,Nt]=g(it,L),ht=g(X,L+(T?-C:C)),ye=C*this._view.scale,Q=(ht[0]-U)*(Nt-Z)-(ht[1]-Z)*(It-U);return I`<line class="fp3d-open-leaf" x1=${U} y1=${Z} x2=${ht[0]} y2=${ht[1]} />${_?I`<path class="fp3d-open-swing" d="M${ht[0]} ${ht[1]}A${ye} ${ye} 0 0 ${Q>0?1:0} ${It} ${Nt}"><title>${this.t("help_legend_swing")}</title></path>`:v}`};E=I`${G}${y==="passage"?I`<line class="fp3d-open-passage" x1=${g(l,W)[0]} y1=${g(l,W)[1]} x2=${g(d,W)[0]} y2=${g(d,W)[1]} />`:y==="sliding"?I`<line x1=${g(V,L)[0]} y1=${g(V,L)[1]} x2=${g(S,L)[0]} y2=${g(S,L)[1]} />`:A?I`${Y(V,D)}${Y(S,D)}`:Y(P?V:S,P?S:V)}`}else{let T=(f[0]-f[1])/2,L=g(l,T+.035),P=g(d,T+.035),A=g(l,T-.035),V=g(d,T-.035),S=[(l[0]+d[0])/2,(l[1]+d[1])/2],z=g(S,f[0]),H=g(S,-f[1]);E=I`<line x1=${L[0]} y1=${L[1]} x2=${P[0]} y2=${P[1]} /><line x1=${A[0]} y1=${A[1]} x2=${V[0]} y2=${V[1]} />${n.leaves===2?I`<line x1=${z[0]} y1=${z[1]} x2=${H[0]} y2=${H[1]} />`:v}`}let x=g(l,(f[0]-f[1])/2),M=g(d,(f[0]-f[1])/2),R=v;if(_){let T=[l[0]-c*.08,l[1]-p*.08],L=[d[0]+c*.08,d[1]+p*.08],P=[g(T,f[0]+.1),g(L,f[0]+.1),g(L,-f[1]-.1),g(T,-f[1]-.1)];R=I`<polygon class="fp3d-open-ring" points=${P.map(A=>A.join(",")).join(" ")} />`}return I`<g data-opening=${n.id} class=${w}>
        <line class="fp3d-open-hit" x1=${x[0]} y1=${x[1]} x2=${M[0]} y2=${M[1]} />
        <polygon class="fp3d-open-gap" points=${b.map(T=>T.join(",")).join(" ")} />
        ${E} ${R}
      </g>`})}</g>`}renderRoomOpenings(t){let e=(this.floor?.openings??[]).filter(n=>n.room_id===t.id);return e.length?m`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${e.length})</summary>
      <div class="fp3d-room-list">
        ${e.map(n=>m`<button class="fp3d-row" @click=${()=>(this.selectItem("opening",n.id),this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0,0))}>
            <span>${this.t(`preset_${ui(n)}`)}</span><span class="fp3d-muted">${this.m(n.width,2)}</span>
          </button>`)}
      </div>
    </details>`:v}openingIsExterior(t){let e=this.floor,n=e?qt(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let i=wt(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return mi(i.walls,t,n)?.wall.exterior??!1}renderSidelightFields(t){if(t.type!=="door")return v;let e=Ji(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return v;let n=this.isEditor,i=(s,o)=>m`<label class="fp3d-field"
      >${this.t(o)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${t[s]==null?"":String(t[s])}
        ?disabled=${!n}
        @change=${r=>{let l=Number(r.target.value);this.updateOpening({[s]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return e==="sidelight"?m`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!t.sidelight_hinge} ?disabled=${!n} @change=${s=>this.updateOpening({sidelight_hinge:s.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:m`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=ll(t.type),n=Ji({type:t.type,style:null},this.openingIsExterior(t)),i=t.style&&e.includes(t.style)?t.style:"";return m`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isEditor} @change=${s=>this.updateOpening({style:s.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(s=>m`<option value=${s} ?selected=${s===i}>${this.t(`style_${s}`)}</option>`)}
      </select></label
    >`}renderOpeningKinds(t,e){return m`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
      ${Object.keys(Zi).map(n=>m`<button class="fp3d-chip" aria-pressed=${n===t} @click=${i=>e(n,i)}>${this.t(`preset_${n}`)}</button>`)}
    </div>`}pickOpeningKind(t){this._openingPreset=t}openingPositionLabel(t){let e=this.floor,n=e?qt(t,e.rooms,e.walls??[]):null;if(!n)return this.t("opening_position");let i=ou(n.room,n.edge,this._doc.settings.north??0);return this.t("opening_position_from",{corner:this.t(`compass_${i}`)})}renderOpeningForm(t){let e=this.isEditor,n=t.type==="window",i=t.type==="garage",s=y=>this.keptForPlan(`opening|${t.id}|${y}`,()=>{if(!this.hass)return null;let $=structuredClone(this._doc.floors);for(let w of $)for(let E of w.openings)E.id===t.id&&(E[y]=null);return Gd(this.hass,$).get(t.id)?.[y]??null}),o=y=>this.hass?.states[y]?.attributes.device_class,r=this.entityOptions(y=>y.startsWith("cover.")),l=i?this.entityOptions(y=>y.startsWith("cover.")||_i(y)):r,d=this.entityOptions(y=>/^(sensor|number|input_number)\./.test(y)&&Number.isFinite(Number(this.hass?.states[y]?.state))),c=y=>y.startsWith("binary_sensor.")&&["door","window","opening","garage_door",""].includes(o(y)??""),p=this.entityOptions(y=>c(y)||Et(y)&&tr(this.hass?.states[y])!==null||i&&/^(switch|input_boolean)\./.test(y),i),h=this.entityOptions(y=>{let $=this.hass?.states[y];return y.startsWith("binary_sensor.")?typeof $?.attributes.window_state=="string":Et(y)&&(tr($)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${y} ${et(this.hass,y)}`))}),u=this.entityOptions(c),f=y=>{let $=y===1,w=$?t.tilt:t.tilt2??null,E=$?t.contact:t.contact2,x=($?t.sensor:t.sensor2)??(w&&w!=="none"?"contact_tilt":"contact"),M=R=>this.updateOpening($?{contact:R}:{contact2:R==="none"?null:R});return m`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${R=>{let T=R.target.value,L=T==="contact_tilt"?{}:$?{tilt:null}:{tilt2:null};this.updateOpening({...$?{sensor:T}:{sensor2:T},...L})}}
          >
            ${["contact","handle","contact_tilt"].map(R=>m`<option value=${R} ?selected=${R===x}>${this.t(`sensor_kind_${R}`)}</option>`)}
          </select></label
        >
        ${x==="handle"?this.entitySelect(this.t("handle_entity"),E,void 0,h,R=>M(R==="none"?$?"none":null:R)):this.entitySelect(this.t("contact_entity"),E,$?s("contact"):void 0,u,M)}
        ${x==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),w,void 0,p,R=>this.updateOpening($?{tilt:R==="none"?null:R}:{tilt2:R==="none"?null:R})):v}
        ${$?m`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(R=>Et(R)),R=>this.updateOpening({tilt_angle:R==="none"?null:R}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?m`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,R=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,R))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,R=>this.updateOpening({tilt_offset:R}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${R=>this.updateOpening({tilt_invert:R.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:v}`:v}`},g=ui(t),b=t.type==="door",_=this.openingFormMin?.id===t.id?this.openingFormMin.h:0;return m`<section style=${_?`min-height:${Math.round(_)}px`:""}>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${g}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?m`<p class="fp3d-sub">${this.t("opening_change_to")}</p>`:v}
      ${e?this.renderOpeningKinds(g,(y,$)=>{let E=$.currentTarget?.closest?.("section")?.getBoundingClientRect().height??0,x=this.openingFormMin?.id===t.id?this.openingFormMin.h:0;this.openingFormMin={id:t.id,h:Math.max(x,E)},this.setOpeningPreset(t,y)}):v}
      ${e&&!i?m`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${b||n&&t.sill<.1?m`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:v}
          </div>`:v}
      <div class="fp3d-form">
        ${this.len(this.t("width"),t.width,y=>this.updateOpening({width:Math.max(.3,y)}),.01,.3)}
        ${this.len(this.openingPositionLabel(t),t.offset,y=>this.updateOpening({offset:Math.max(0,y)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,y=>this.updateOpening({sill:Math.max(0,y)}),.01,0):v}
        ${this.len(this.t("opening_height"),t.height,y=>this.updateOpening({height:Math.max(.3,y)}),.01,.3)}
        ${n&&this.isEditor?m`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${()=>{let y=this.floor?.height??2.5;this.updateOpening({width:1,height:.5,sill:Math.max(0,Math.round((y-.75)*100)/100)})}}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`:v}
        ${this.renderStyleSelect(t)}
        ${n?m`<label class="fp3d-field fp3d-wide" title=${this.t("sill_board_hint")}
              >${this.t("sill_board")}
              <select ?disabled=${!e} @change=${y=>this.updateOpening({sill_board:y.target.value||"auto"})}>
                ${Ma.map(y=>m`<option value=${y} ?selected=${(t.sill_board??"auto")===y}>${this.t(`sill_board_${y}`)}</option>`)}
              </select></label
            >`:v}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isEditor} @change=${y=>this.updateOpening({mark:y.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?v:m`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${y=>this.updateOpening({hinge:y.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||b?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,s("cover"),i?l:r,y=>this.updateOpening({cover:y})):v}
        ${i&&_i(t.cover)?m`<p class="fp3d-sub fp3d-wide">${this.t("garage_pulse_hint")}</p>`:v}
        ${(n||i||b)&&t.cover!=="none"&&(t.cover||s("cover"))?m`${_i(t.cover)?v:this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,d,y=>this.updateOpening({position:y==="none"?null:y}))}
              ${t.position&&!_i(t.cover)?m`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${y=>this.updateOpening({position_inverted:y.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:v}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${y=>this.updateOpening({confirm:y.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:v}
        ${n?m`${t.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:v}
              ${f(1)} ${t.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${f(2)}`:v}
              ${t.sill<=.01?m`${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(y=>y.startsWith("lock.")),y=>this.updateOpening({lock:y==="none"?null:y}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:v}`:m`${this.entitySelect(this.t(t.leaves===2?"contact_main":"contact_entity"),t.contact,s("contact"),p,y=>this.updateOpening({contact:y}))}
              ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,p,y=>this.updateOpening({contact2:y==="none"?null:y})):v}
              ${b?m`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${y=>this.updateOpening({shut:y.target.checked})} />
                    ${this.t("door_shut")}</label
                  >
                  <label class="fp3d-field" title=${this.t("door_angle_hint")}
                    >${this.t("door_angle")}
                    <select
                      ?disabled=${!e}
                      @change=${y=>{let $=Number(y.target.value);this.updateOpening({open_angle:$>0?$:null})}}
                    >
                      <option value="0" ?selected=${!t.open_angle}>${this.t("door_angle_default")}</option>
                      ${[15,30,45,60,90].map(y=>m`<option value=${y} ?selected=${t.open_angle===y}>${y}°</option>`)}
                      ${t.open_angle&&![15,30,45,60,90].includes(t.open_angle)?m`<option value=${t.open_angle} selected>${t.open_angle}°</option>`:v}
                    </select></label
                  >
                  ${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(y=>y.startsWith("lock.")),y=>this.updateOpening({lock:y==="none"?null:y}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:v}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||s("contact"))?m`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${y=>this.updateOpening({contact_invert:y.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:v}
        ${this.floor&&ru(this._doc,this.floor,t)?m`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${t.well!==!1} ?disabled=${!e} @change=${y=>this.updateOpening({well:y.target.checked?void 0:!1})} />
                ${this.t("well")}</label
              >
              ${t.well!==!1?this.len(this.t("well_rim"),t.well_rim??0,y=>this.updateOpening({well_rim:Math.max(-.3,Math.min(1,y))||null}),.01,-.3):v}`:v}
        ${t.type==="window"?m`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${y=>this.updateOpening({rain_ignore:y.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:v}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:v}
    </section>`}};var Ci=a=>Math.round(a*1e4)/1e4+0;function cu(a,t,e){if(a.door==="none"||!Bl.includes(a.form))return null;let n=Ci(-t/2),i=Ci(e/2),s=Ci(e/2+t),o=Ci(t);return{leaf:[[n,i],[n,s]],arc:`M${n} ${s}A${o} ${o} 0 0 0 ${Ci(t/2)} ${i}`}}var cm=24,pm=220,Br=8,Js=30,Di=14,um=9,au=7,Kr=13,pu=7.6,hm="system-ui, -apple-system, Segoe UI, Roboto, sans-serif",Gr={body:"#3a4457",fabric:"#4a5468",cushion:"#56617a",wood:"#7a5a3c",white:"#e6e9ee",metal:"#9aa3b2",dark:"#2a303c",glass:"#5b7fa0",plant:"#3f7a4f",pot:"#6b5a4a",accent:"#2bb3e0",paint:"#4a6ea8"},Ur="#0d1017",fm="#161a22",mm="#07090d",lu="#7d8696",to="#3a4150",gm="#f2f5fa",du="#a7b2c5",Wi=a=>a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Mt=a=>Math.round(a*10)/10+0,bm=a=>a&&/^#[0-9a-f]{3,8}$/i.test(a)?a:Gr[a??"body"]??Gr.body,_m=(a,t)=>{let e=Math.max(3,Math.floor(t/pu));return a.length<=e?a:`${a.slice(0,e-1).trimEnd()}\u2026`},ym=(a,t)=>!a.slot.on&&hi(a.item)?.depth==="full"||a.back===(t==="rear");function uu(a){let{frame:t,slots:e,itemOf:n,nameOf:i}=a,s=a.face??"front",o=Math.max(.05,a.size[0]),r=Math.max(.005,a.size[2]),l=rs(t,o,Math.max(.05,a.size[1]),r),d=Math.max(cm/Kl,pm/l.panel),c=Math.round(o*d+2*Js),p=Math.round(r*d+2*Br),h=M=>Mt(Js+(M+o/2)*d),u=M=>Mt(Br+(r-M)*d),f=(M,R,T,L,P,A,V="")=>`<rect class="${M}" x="${h(R)}" y="${u(P)}" width="${Mt((L-R)*d)}" height="${Mt((P-T)*d)}" fill="${A}"${V}/>`,g=[`<rect x="0" y="0" width="${c}" height="${p}" rx="8" fill="${Ur}"/>`];g.push(f("fp3d-el-rack",-o/2,0,o/2,r,fm,` stroke="${to}"`));let b=l.opening/2,_=l.panel/2;g.push(f("fp3d-el-opening",-b,l.bottom,b,l.top,mm)),g.push(f("fp3d-el-rail",-_,l.bottom,-b,l.top,lu),f("fp3d-el-rail",b,l.bottom,_,l.top,lu));for(let M of l.units){M.index>0&&g.push(`<line x1="${h(-b)}" y1="${u(M.y0)}" x2="${h(b)}" y2="${u(M.y0)}" stroke="${to}"/>`);let R=Mt(u((M.y0+M.y1)/2)+Kr*.35);g.push(`<text class="fp3d-el-u fp3d-el-u-l" x="${Js-6}" y="${R}" font-size="${Kr}" text-anchor="end" fill="${du}">${M.label}</text>`),g.push(`<text class="fp3d-el-u fp3d-el-u-r" x="${c-Js+6}" y="${R}" font-size="${Kr}" fill="${du}">${M.label}</text>`)}let y=Jl(l,e,n).filter(M=>ym(M,s)),$=0,w=[];for(let M of y){$+=hi(M.item)?.u??0;let R=M.x-M.w/2,T=M.w*d,L=M.h*d,A=[...M.item.parts].sort((Y,X)=>s==="front"?Zs(Y)-Zs(X):Zs(X)-Zs(Y)).map(Y=>vm(Y,M,h,u,d,s)).join(""),V=i(M.slot,M.item),S=a.statusOf?.(M.slot)??null,z=Math.min(um,L-4,T/4),H=!!S&&z>=3,D=_m(V,T-20-(H?au+z+4:0)),C=Mt(u(M.y+M.h/2)+Di*.36),W=L>=Di+4?`<rect class="fp3d-el-tag" x="${Mt(h(R)+6)}" y="${Mt(C-Di)}" width="${Mt(Math.min(T-12,D.length*pu+8))}" height="${Di+5}" rx="3" fill="${Ur}" fill-opacity="0.75"/><text x="${Mt(h(R)+10)}" y="${C}" font-size="${Di}" fill="${gm}">${Wi(D)}</text>`:"",G=S&&H?`<rect class="fp3d-el-led fp3d-el-led-${S}" data-slot="${Wi(M.slot.id)}" x="${Mt(h(R)+T-au-z)}" y="${Mt(u(M.y+M.h/2)-z/2)}" width="${Mt(z)}" height="${Mt(z)}" rx="2" fill="${Ul[S]}" stroke="${Ur}"/>`:"";w.push({slot:M.slot.id,title:V,x:h(R),y:u(M.y+M.h),w:Mt(T),h:Mt(L)}),g.push(`<g class="fp3d-el-gear" data-slot="${Wi(M.slot.id)}"><rect class="fp3d-el-face" x="${h(R)}" y="${u(M.y+M.h)}" width="${Mt(T)}" height="${Mt(L)}" fill="${Gr.dark}" stroke="${to}"/>${A}${W}${G}<title>${Wi(V)}</title></g>`)}let E=a.title??"Rack";return{svg:`<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${Wi(E)}" class="fp3d-elevation" viewBox="0 0 ${c} ${p}" width="${c}" height="${p}" font-family="${hm}">${g.join("")}</svg>`,width:c,height:p,scale:d,pad:Br,label:E,gear:w,pieces:y.length,used:$,u:t.u}}var Zs=a=>a.z+a.d/2;function vm(a,t,e,n,i,s){let o=t.x+(s==="front"?a.x:-a.x)*t.w,r=t.y+(a.y+a.h/2)*t.h,l=a.w*t.w/2,d=a.h*t.h/2,c=bm(a.color),p=a.edges==="faint"?` stroke="${to}"`:"";return a.shape==="sphere"||a.shape==="cyl"&&a.axis==="z"?`<ellipse class="fp3d-el-part" cx="${e(o)}" cy="${n(r)}" rx="${Mt(l*i)}" ry="${Mt(d*i)}" fill="${c}"${p}/>`:`<rect class="fp3d-el-part" x="${e(o-l)}" y="${n(r+d)}" width="${Mt(2*l*i)}" height="${Mt(2*d*i)}" fill="${c}"${p}/>`}var at=(a,t,e,n,i="")=>I`<rect class=${i} x=${Math.min(a,e)} y=${Math.min(t,n)} width=${Math.abs(e-a)} height=${Math.abs(n-t)} />`,J=(a,t,e,n,i="")=>I`<line class=${i} x1=${a} y1=${t} x2=${e} y2=${n} />`,vt=(a,t,e,n="")=>I`<circle class=${n} cx=${a} cy=${t} r=${e} />`,ai=(a,t,e,n,i="")=>I`<ellipse class=${i} cx=${a} cy=${t} rx=${e} ry=${n} />`,$m=(a,t,e,n,i,s="")=>I`<rect class=${s} x=${Math.min(a,e)} y=${Math.min(t,n)} width=${Math.abs(e-a)} height=${Math.abs(n-t)} rx=${i} />`;function qr(a,t,e){let n=[];for(let i=1;i<e;i++){let s=-a/2+a/e*i;n.push(J(s,t/2,s,t/2-Math.min(.12,t*.3)))}return n}function hu(a,t,e,n){let i=Math.min(.24,t*.28),s=n?Math.min(.2,a*.12):0,o=[at(-a/2,-t/2,a/2,-t/2+i,"fp3d-sym-fill")];n&&o.push(at(-a/2,-t/2,-a/2+s,t/2,"fp3d-sym-fill"),at(a/2-s,-t/2,a/2,t/2,"fp3d-sym-fill"));let r=a-2*s;for(let l=1;l<e;l++){let d=-a/2+s+r/e*l;o.push(J(d,-t/2+i,d,t/2-.02))}return o}function fu(a,t,e){let n=-a/2,i=a/2,s=-t/2,o=t/2,r=Math.max(.3,Math.min(.95,t*.5,a*(e?.34:.45))),l=Math.min(.24,r*.28),d=Math.min(.2,r*.24),c=[at(n,s,i,s+l,"fp3d-sym-fill"),at(n,s+l,n+l,o,"fp3d-sym-fill"),at(n+l,o-d,n+r,o,"fp3d-sym-fill")];e?c.push(at(i-l,s+l,i,o,"fp3d-sym-fill"),at(i-r,o-d,i-l,o,"fp3d-sym-fill")):c.push(at(i-d,s+l,i,s+r,"fp3d-sym-fill"));let p=e?i-r:i-d;c.push(J(n+r,o-d,n+r,s+r),J(n+r,s+r,p,s+r)),e&&c.push(J(i-r,s+r,i-r,o-d));let h=n+l,u=e?i-l:i-d,f=Math.max(1,Math.round((u-h)/.62));for(let y=1;y<f;y++)c.push(J(h+(u-h)/f*y,s+l,h+(u-h)/f*y,s+r));let g=s+r,b=o-d,_=b-g<.2?0:Math.max(1,Math.round((b-g)/.62));for(let y=0;y<_;y++){let $=g+(b-g)/_*y;c.push(J(n+l,$,n+r,$)),e&&c.push(J(i-r,$,i-l,$))}return c}function mu(a,t,e){switch(a){case"sofa":return hu(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return hu(t,e,1,!0);case"sofa_l":return fu(t,e,!1);case"sofa_u":return fu(t,e,!0);case"bench":return[at(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[at(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),at(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),J(-t/2+n,-e/2+n,t/2,-e/2+n),J(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[at(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[vt(0,.03,Math.min(t,e)*.36),at(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[vt(0,0,Math.min(t,e)*.42)];case"stool":return[at(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[at(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return a==="desk"&&n.push(J(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,s=[at(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),J(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let o=0;o<n;o++)s.push(at(-t/2+.13+i*o,-e/2+.12,-t/2+.07+i*(o+1),-e/2+.12+Math.min(.4,e*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return qr(t,e,a==="nightstand"||a==="tall_cabinet"||a==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[at(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...qr(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[J(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[J(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[vt(-t*.22,-e*.2,n),vt(t*.22,-e*.2,n*.8),vt(-t*.22,e*.2,n*.8),vt(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[at(-n/2,-e/2+.1,n/2,e/2-.08),vt(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[J(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[vt(0,.05,Math.min(t,e)*.3),J(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[at(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),vt(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[J(-t/2,-e/2,t/2,e/2),J(t/2,-e/2,-t/2,e/2),vt(0,0,.04)];case"wc":return[at(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),ai(0,e*.1,t*.36,e*.3)];case"washbasin":return[ai(0,.03,t*.34,e*.3)];case"tv_board":return[J(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...qr(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[J(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[vt(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),vt(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[vt(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),vt(0,0,Math.min(t,e)*1.6)];case"parking":return[at(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),J(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),J(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[at(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),vt(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let s=1;s<i;s++)n.push(J(-t/2+t/i*s,-e/2,-t/2+t/i*s,e/2));return n}case"lamp_fan":{let n=Math.min(t,e)/2,i=[vt(0,0,.12,"fp3d-sym-fill"),vt(0,0,n)];for(let s=0;s<4;s++){let o=s/4*Math.PI*2+Math.PI/4;i.push(J(Math.cos(o)*.13,Math.sin(o)*.13,Math.cos(o)*n*.95,Math.sin(o)*n*.95,"fp3d-sym-strong"))}return i}case"lamp_panel":return[at(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[vt(0,0,n*.9,"fp3d-sym-fill"),vt(0,0,n*.3)];if(a==="lamp_ceiling"||a==="lamp_pendant")for(let s=0;s<8;s++){let o=s/8*Math.PI*2;i.push(J(Math.cos(o)*n*1.05,Math.sin(o)*n*1.05,Math.cos(o)*n*1.35,Math.sin(o)*n*1.35))}return i}case"lamp_wall":return[at(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),ai(0,.01,t*.4,e*.4)];case"led_strip":return[J(-t/2,0,t/2,0,"fp3d-sym-strong")];case"wall_switch":case"wall_socket":return[at(-t/2,-e/2,t/2,e/2,"fp3d-sym-fill"),ai(0,e/2,t/2+.06,.09)];case"plant":return[vt(0,0,Math.min(t,e)*.46),vt(0,0,Math.min(t,e)*.25)];case"rug":return[at(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let s=1;s<n;s++)i.push(J(-t/2,e/2-e/n*s,t/2,e/2-e/n*s));return i.push(J(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),J(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),J(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:s,landing:o,run:r}=tl(t,e,2.75),l=-e/2+o,d=-t/2+s,c=t/2-s,p=[J(-t/2,l,d,l),J(d,l,d,e/2),J(c,l,c,e/2)];for(let b=1;b<n;b++)p.push(J(-t/2,e/2-r*b,d,e/2-r*b));for(let b=1;b<=i;b++)p.push(J(c,l+r*b,t/2,l+r*b));let h=(-t/2+d)/2,u=(c+t/2)/2,f=-e/2+o/2,g=e/2-.15;return p.push(J(h,e/2-.1,h,f,"fp3d-sym-strong"),J(h,f,u,f,"fp3d-sym-strong"),J(u,f,u,g,"fp3d-sym-strong"),J(u-.15,g-.2,u,g,"fp3d-sym-strong"),J(u+.15,g-.2,u,g,"fp3d-sym-strong")),p}default:{let n=Bt(a);return n?xm(n,t,e):v}}}function xm(a,t,e){let n=wm(a,t,e),i=a.rack_frame?Ve(a):null,s=i&&cu(i,t,e);if(!s)return n;let[[o,r],[l,d]]=s.leaf;return[...n,J(o,r,l,d,"fp3d-sym-swing"),I`<path class="fp3d-sym-swing" d=${s.arc} />`]}function wm(a,t,e){return a.symbol?.length?a.symbol.map(n=>n.shape==="rect"?at((n.x-n.w/2)*t,(n.z-n.d/2)*e,(n.x+n.w/2)*t,(n.z+n.d/2)*e,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?vt(n.x*t,n.z*e,n.r*Math.min(t,e)):J(n.x1*t,n.z1*e,n.x2*t,n.z2*e)):a.parts.filter(n=>n.w<.98||n.d<.98).map(n=>km(n,t,e,a.size[2]))}function km(a,t,e,n){let i=(a.x-a.w/2)*t,s=(a.x+a.w/2)*t,o=(a.z-a.d/2)*e,r=(a.z+a.d/2)*e;switch(a.shape){case"cyl":return(a.axis??"y")==="y"?vt(a.x*t,a.z*e,Math.min(a.w*t,a.d*e)/2):at(i,o,s,r);case"sphere":return ai(a.x*t,a.z*e,a.w*t/2,a.d*e/2);case"lathe":{let l=Math.max(0,...(a.profile??[[1,0]]).map(([d])=>d));return ai(a.x*t,a.z*e,l*a.w*t/2,l*a.d*e/2)}case"rbox":return $m(i,o,s,r,(a.round??.2)*Math.min(a.w*t,a.d*e,a.h*n));default:return at(i,o,s,r)}}var Mm=["x","z","rotation","w","d","h","mount","mirror","strip","name","show_name","aliases","type","floor"],gu=["x","z","rotation"];function bu(a){let t=Em(a);return{head:t.filter(e=>gu.includes(e)),body:t.filter(e=>!gu.includes(e))}}function Em(a){return Mm.filter(t=>t==="mirror"?a.mirror:t==="strip"?a.strip:t==="mount"?a.lift:t==="floor"?!!a.floors:!0)}function _u(a,t){let e=t.split("-")[0],n=d=>d?d[e]??d.en??Object.values(d)[0]??"":"",i=a.map(d=>n(d.name)||d.id),s=a.map((d,c)=>`${i[c]}|${n(d.variant)}`),o=d=>d.reduce((c,p)=>c.set(p,(c.get(p)??0)+1),new Map),r=o(i),l=o(s);return a.map((d,c)=>{if(r.get(i[c])<2)return i[c];let p=n(d.variant);return p&&l.get(s[c])<2?`${i[c]} \xB7 ${p}`:`${i[c]} \xB7 ${d.size.map(h=>Math.round(h*100)).join(" \xD7 ")} cm`})}function Sm(a){let[t,e,n]=_t(a.type);return Math.abs(a.w-t)<.005&&Math.abs(a.d-e)<.005&&Math.abs(a.h-n)<.005}function yu(a,t){if(t===a.type||!Sm(a))return{type:t};let[e,n,i]=_t(t);return{type:t,w:e,d:n,h:i}}function vu(a,t,e,n){let i=a.floors.find(l=>l.id===t),s=a.floors.find(l=>l.id===n);if(!i||!s||i===s)return[];let o=new Set(e),r=i.furniture.filter(l=>o.has(l.id));return r.length?(i.furniture=i.furniture.filter(l=>!o.has(l.id)),s.furniture.push(...r),r.map(l=>l.id)):[]}function eo(a){let t;return()=>t??=a().then(()=>{},e=>{throw t=void 0,e})}function le(a){a().catch(t=>console.error("Home 3D: a part of the page failed to load",t))}var Fm={"split-off":I`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 5v14"/>`,"split-on":I`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M12 5v14"/><path d="M12 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7z" fill="currentColor" stroke="none" opacity=".45"/>`,"panel-left":I`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 5v14"/><path d="M5 5h5v14H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" fill="currentColor" stroke="none" opacity=".45"/>`,"panel-right":I`<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M14 5v14"/><path d="M14 5h5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5z" fill="currentColor" stroke="none" opacity=".45"/>`,holo:I`<rect x="5" y="3" width="14" height="12" rx="2"/><path d="M8 7h8M8 11h5M3 19h18M7 21.5h10"/>`,flow:I`<path d="M13 2 5 13h6l-1 9 8-11h-6z"/>`,undo:I`<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>`,redo:I`<path d="m15 14 5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h3"/>`,expand:I`<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>`,cube:I`<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/>`,pencil:I`<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>`,puzzle:I`<path d="M9 3h4v3a2 2 0 1 0 4 0V3h4v6h-3a2 2 0 1 0 0 4h3v8h-6v-3a2 2 0 1 0-4 0v3H3v-6h3a2 2 0 1 0 0-4H3V3z"/>`,gear:I`<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>`,pointer:I`<path d="m5 3 14 7-6 2-2 6z"/>`,wall:I`<rect x="3" y="5" width="18" height="14"/><path d="M3 12h18M9 5v7M15 12v7"/>`,tree:I`<path d="M12 3 6 11h3l-4 6h14l-4-6h3z"/><path d="M12 17v4"/>`,sofa:I`<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2z"/>`,bolt:I`<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>`,more:I`<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>`,help:I`<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.4V14M12 17.5v.01"/>`,down:I`<path d="m6 9 6 6 6-6"/>`,x:I`<path d="M6 6l12 12M18 6 6 18"/>`,right:I`<path d="m9 6 6 6-6 6"/>`};function Dt(a){return I`<svg class="fp3d-ui-icon" viewBox="0 0 24 24" width="1.15em" height="1.15em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" style="vertical-align:-0.2em">${Fm[a]}</svg>`}var li=eo(()=>import("./home-3d-editor-lazy-parts-LOK4SUMZ.js")),$u=li,xu=li,wu=li,ku=li,Pm=li,Mu=eo(()=>import("./home-3d-editor-item-picker-3K4GFHWK.js")),Eu=eo(()=>import("./home-3d-editor-phone-bar-YDWQRJDV.js").then(a=>a.definePhoneBar({LitElement:Ge,html:m,css:$t,nothing:v,uiIcon:Dt,defineElement:Ue}))),Yr=!1;function Su(){if(Yr)return;Yr=!0;let a=()=>{li().catch(()=>Yr=!1)};typeof requestIdleCallback=="function"?requestIdleCallback(a,{timeout:3e3}):setTimeout(a,1e3)}var no=class{typeLabels(t){let e=this.hass?.language??"en",n=this.typeLabelMemo.get(t);if(n&&n.lang===e)return n.labels;let i=_u(t.items,e);return this.typeLabelMemo.set(t,{lang:e,labels:i}),i}typeChoices(t){let e=new Set(Object.values(Ya).flat());return e.add("fridge_smart"),pi.filter(n=>e.has(n)||n===t)}furnitureFor(t){let e=nt(t),n=this.hass?.language??"en",i=[...pi.map(r=>({type:r,label:this.t(`furn_${r}`)})),...(this.packs??[]).flatMap(r=>r.items.map(l=>({type:Zt(r.id,l.id),label:`${Lt(l,n)} \xB7 ${qi(r,n)}`})))],s=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,o=r=>e==="light"?xt(r):e==="climate"?r==="radiator"||r==="ac_unit":t.startsWith("vacuum.")?te(r):e==="media"?yi(r)||qe(r)&&s.test(r):qe(r)&&!xt(r);return i.filter(r=>o(r.type)).sort((r,l)=>r.label.localeCompare(l.label))}vehicleToSpot(t){if(!this.isEditor)return;let[e,n,i]=_t("parking"),s={id:j("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,k(t.w+.5)),d:Math.max(n,k(t.d+.4)),h:i,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((o,r)=>{r.furniture=r.furniture.filter(l=>l.id!==t.id),r.furniture.push(s)}),this.selectItem("furniture",s.id)}deviceToFurniture(t,e){if(!this.isEditor)return;if(t.entity_id.startsWith("camera.")){this.change((r,l)=>Qe(l,t.entity_id,e));return}let[n,i,s]=_t(e),o={id:j("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:i,h:s,variant:null,entity:t.entity_id,name:t.name??null,...t.locked?{locked:!0}:{},...t.actions?{actions:t.actions}:{}};this.change((r,l)=>{l.placements=l.placements.filter(d=>d.entity_id!==t.entity_id),l.furniture.push(o)}),this._deviceId=null,this.selectItem("furniture",o.id)}furnitureToDevice(t){let e=t.entity;if(!this.isEditor||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{},...t.actions?{actions:t.actions}:{}};this.change((i,s)=>{s.furniture=s.furniture.filter(o=>o.id!==t.id),s.placements.some(o=>o.entity_id===e)||s.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderAsFurniture(t){if(!this.isEditor)return v;let e=this.furnitureFor(t.entity_id);if(!e.length)return v;let n=t.entity_id.startsWith("camera.")?this.floor?.furniture.find(i=>i.look_of===t.entity_id):void 0;return m`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${i=>{let s=i.target.value;s==="__builtin"?this.change((o,r)=>r.furniture=r.furniture.filter(l=>l.look_of!==t.entity_id)):s&&this.deviceToFurniture(t,s)}}
      >
        <option value="" selected>${n?lt(this.hass,n.type):this.t("as_furniture_pick")}</option>
        ${n?m`<option value="__builtin">${this.t("camera_look_builtin")}</option>`:v}
        ${e.map(i=>m`<option value=${i.type}>${i.label}</option>`)}
      </select></label
    >`}addFurniture(t,e=!1){!this.hass||!this.isEditor||(this._placing={type:t,mirror:e},this._placeAt=null,ue(this.hass,[t]))}placeArmed(t,e=!1){let n=this._placing;!n||!this.hass||(e||(this._placing=null,this._placeAt=null),this.showGuides([]),ue(this.hass,[n.type]).then(()=>this.placeFurniture(n.type,n.mirror,t)))}placeArmedInMiddle(){this.placeArmed(null)}cancelPlacing(){this._placing=null,this._placeAt=null,this.showGuides([])}snapOff(t){return t.shiftKey||t.altKey||!this._snapOn}setSnapOn(t){this._snapOn=t,t||this.showGuides([]);try{localStorage.setItem("home3d.snap",t?"1":"0")}catch{}}placeTarget(t,e){let n=this._doc.settings.grid,i=y=>e||!n?k(y):k(Math.round(y/n)*n),s=this._placing,o=this.floor,r=this.roomAt(t);if(e||!s||!o)return this.showGuides([]),{at:[i(t[0]),i(t[1])],rotation:0,roomId:r,wall:null};let[l,d,c]=_t(s.type);this.placeLines?.floor!==o&&(this.placeLines={floor:o,lines:this.alignLinesFor(o,null)});let p=Os(t,[l/2,d/2],this.placeLines.lines,ni(this._view.scale)),h=p.x?k(p.p[0]):i(t[0]),u=p.z?k(p.p[1]):i(t[1]),f=0,g=null,b={id:"",type:s.type,x:h,z:u,rotation:0,w:l,d,h:c,variant:null},_=r?pr(o,b,this._doc.settings.wall_interior,void 0,{turn:!0,roomId:r}):null;return _&&({x:h,z:u,rotation:f}=_,g={roomId:_.roomId,edge:_.edge}),this.showGuides(p.guides.length?p.guides.filter(y=>Math.abs(y.axis==="x"?h-p.p[0]:u-p.p[1])<.002):[]),{at:[h,u],rotation:f,roomId:r,wall:g}}placeFurniture(t,e,n=null){let i=this.floor;if(!i||!this.isEditor)return;let s=n?.at??null;n&&(this._roomId=n.roomId??this._roomId);let[o,r,l]=_t(t),d=this._doc.floors.filter(b=>b.elevation>i.elevation).sort((b,_)=>b.elevation-_.elevation)[0],c=Qa.has(t)?k(d?d.elevation-i.elevation:i.height+.25):l,p=this.room,[h,u]=s??(p?jt(p.points):this.toWorld(this._size.w/2,this._size.h/2)),f=n?.wall?n.rotation:0;if(t==="parking"&&p&&!n?.wall){let b=i.openings.find(w=>w.room_id===p.id&&w.type==="garage"),_=b?p.points[b.edge]:null,y=b?p.points[(b.edge+1)%p.points.length]:null,$=ft(p.points);f=(_&&y?Math.abs(y[1]-_[1])>Math.abs(y[0]-_[0]):$.x1-$.x0>$.z1-$.z0)?90:0}let g={id:j("furniture"),type:t,x:k(h),z:k(u),rotation:f,w:o,d:r,h:c,variant:null,...e?{mirror:!0}:{}};this.change((b,_)=>_.furniture.push(g)),this.selectItem("furniture",g.id),this.showPoint(g.x,g.z)}snapToWall(t){return this.floor?_n(this.floor,t,this._doc.settings.wall_interior):null}renderStairOptions(t){let e=this.isEditor,n=Ja(t),i=s=>this.updateFurniture(Za(t,s));return m`<div class="fp3d-form">
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${!!t.stair_open} ?disabled=${!e} @change=${s=>i({stair_open:s.target.checked})} />
        ${this.t("stair_open")}</label
      >
      <label class="fp3d-field fp3d-wide" title=${this.t("stair_turn_hint")}
        >${this.t("stair_turn")}
        <select ?disabled=${!e||!n.canTurn} @change=${s=>i({stair_turn:s.target.value||null})}>
          ${["","left","right"].map(s=>m`<option value=${s} ?selected=${(t.stair_turn??"")===s}>${this.t(`stair_turn_${s||"none"}`)}</option>`)}
        </select></label
      >
      <span title=${this.t("stair_landing_hint")}>${this.num(this.t("stair_landing"),t.stair_landing??0,s=>i({stair_landing:s}),1,0)}</span>
      <span title=${this.t("stair_top_hint")}>${this.len(this.t("stair_top"),t.stair_top??0,s=>i({stair_top:s}),.05,0)}</span>
      ${this.len(this.t("stair_start"),t.mount_y??0,s=>this.updateFurniture({mount_y:Math.round(Math.min(Ne,Math.max(0,s))*1e3)/1e3||null}),.05,0)}
    </div>`}updateFurniture(t){let e=this._furnitureId;!e||!this.floor?.furniture.some(n=>n.id===e)||this.change((n,i)=>{let s=i.furniture.find(o=>o.id===e);s&&Object.assign(s,t)})}retypeFurniture(t){let e=this.furnitureItem;e&&this.updateFurniture(yu(e,t))}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isEditor||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;if(!e||!this.isEditor)return;if(this.selection().length>1)return this.rotateSelection(t);this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}async deleteFurniture(){let t=this._furnitureId;if(!t||!this.isEditor)return;let e=this.selection();if(e.length>1){let n=e.some(s=>this.isFixedItem("furniture",s));if(!await this.ask(this.t(n?"block_delete_fixed":"block_delete",{n:e.length})))return;let i=new Set(e);this.change((s,o)=>o.furniture=o.furniture.filter(r=>!i.has(r.id))),this.selectItem("room",this._roomId);return}await this.confirmFixedDelete("furniture",t)&&(this.change((n,i)=>i.furniture=i.furniture.filter(s=>s.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isEditor)return;let e=this.selection();if(e.length>1){let i=this.floor.furniture.filter(r=>e.includes(r.id)),s=new Map,o=i.map(r=>({...structuredClone(r),id:j("furniture"),x:k(r.x+.3),z:k(r.z+.3),group:r.group?s.get(r.group)??s.set(r.group,j("block")).get(r.group):null,locked:null}));this.change((r,l)=>l.furniture.push(...o)),this.setMulti(o.map(r=>r.id));return}let n={...structuredClone(t),id:j("furniture"),x:k(t.x+.3),z:k(t.z+.3),group:this._single?t.group:null};this.change((i,s)=>s.furniture.push(n)),this.selectItem("furniture",n.id)}moveSelectionToFloor(t){let e=this._floorId,n=this._furnitureId?this.selection():[];if(!e||t===e||!n.length||!this.isEditor)return;if(n.some(d=>this.isFixedItem("furniture",d))){this._fixedHint=!0;return}let[i,s,o]=[this._furnitureId,this._multi.length>1,this._single],r=[];if(this.change(d=>r=vu(d,e,n,t)),!r.length)return;this._floorId=t,this._vertex=null,this._draft=[],s?this.setMulti(r):this.selectItem("furniture",i),this._single=o;let l=this.furnitureItem;this._roomId=l?this.roomAt([l.x,l.z]):null}renderPlaceGhost(){let t=this._placing,e=this._placeAt;if(!t||!e)return v;let[n,i]=_t(t.type),s=this._view.scale,[o,r]=this.toScreen(e.at),l=e.roomId?this.floor?.rooms.find(p=>p.id===e.roomId):null,d=l?.points.length??0,c=l?e.wall?`${l.name} \xB7 ${this.t("wall_n",{a:e.wall.edge+1,b:(e.wall.edge+1)%d+1})}`:l.name:this.t("place_no_room");return I`<g class="fp3d-place-ghost-g">
      <rect class=${`fp3d-place-ghost${e.wall?" fp3d-place-ghost-wall":""}`} x=${-(n*s)/2} y=${-(i*s)/2} width=${n*s} height=${i*s} transform="translate(${o} ${r}) rotate(${e.rotation})" />
      <text class="fp3d-place-label" x=${o} y=${r-Math.max(n,i)*s/2-6} text-anchor="middle">${c}</text>
    </g>`}renderFurniture(t){let e=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1,s=this._hiddenItems,o=s.length?t.furniture.filter(r=>!s.includes(r.id)):t.furniture;return I`<g>${this.renderSelectionFrame(t,n)}${o.map(r=>{let l=n.includes(r.id),d=r.id===this._furnitureId&&!i,[c,p]=this.toScreen([r.x,r.z]),h=Math.min(r.w,r.d)*e>44,u=r.rotation*Math.PI/180,f=r.d/2+Math.max(.3,26/e),[g,b]=this.toScreen([r.x-Math.sin(u)*f,r.z+Math.cos(u)*f]),[_,y]=this.toScreen([r.x-Math.sin(u)*(r.d/2),r.z+Math.cos(u)*(r.d/2)]),$=xt(r.type)&&!!r.entity&&r.entity!=="none"&&this.hass?.states[r.entity]?.state==="on";return I`<g data-furniture=${r.id} class=${`fp3d-furn${d||l?" fp3d-furn-sel":""}${$?" fp3d-furn-lit":""}${xe(r.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${c} ${p}) rotate(${r.rotation}) scale(${r.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-r.w/2} y=${-r.d/2} width=${r.w} height=${r.d} />
          <g class="fp3d-furn-sym">${mu(r.type,r.w,r.d)}</g>
          <line class="fp3d-furn-front" x1=${-r.w/2} y1=${r.d/2} x2=${r.w/2} y2=${r.d/2} />
        </g>
        ${h?I`<text x=${c} y=${p+4}>${lt(this.hass,r.type)}</text>`:v}
      </g>
      ${d&&this.isEditor&&!r.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([w,E])=>{let[x,M]=this.toScreen([r.x+w*r.w*Math.cos(u)/2-E*r.d*Math.sin(u)/2,r.z+w*r.w*Math.sin(u)/2+E*r.d*Math.cos(u)/2]);return I`<g class="fp3d-resize" data-resize=${`${r.id}:${w}:${E}`}>
              <circle cx=${x} cy=${M} r="14" class="fp3d-hit" />
              <rect x=${x-5} y=${M-5} width="10" height="10" rx="2" />
            </g>`}):v}
      ${d?(()=>{let[w,E]=this.toScreen([r.x+Math.sin(u)*(r.d/2+18/e),r.z-Math.cos(u)*(r.d/2+18/e)]);return I`<text class="fp3d-dim" x=${w} y=${E+4}>${this.m(r.w,2)} × ${this.m(r.d,2)}</text>`})():v}
      ${d&&r.locked?I`<text class="fp3d-lock" x=${g} y=${b+5}>🔒</text>`:v}
      ${d&&this.isEditor&&!r.locked?I`<g class="fp3d-rotate" data-rotate=${r.id}>
            <line x1=${_} y1=${y} x2=${g} y2=${b} />
            <circle cx=${g} cy=${b} r="16" class="fp3d-hit" />
            <circle cx=${g} cy=${b} r="8" />
            <path d="M${g-4} ${b-1}a4 4 0 1 1 2 3.5" />
          </g>`:v}`})}</g>`}libraryEntries(t){let e=["fridge_smart"],n=`${t}|${Ro()}|${this.packs?.length??0}|${e.length}`;if(this.libIndex?.key===n)return this.libIndex.entries;let i=id({packs:this.packs??[],basics:ed(e),language:t,basicName:s=>this.t(`furn_${s}`),basicNameEn:s=>ee(Mi,`furn_${s}`),kindName:s=>this.t(`lib_kind_${s}`),size:_t});return this.libIndex={key:n,entries:i},i}refreshLibUpdates(){if(this.hass){if(this.libUpdatesAsking){this.libUpdatesAsked=!0;return}this.libUpdatesAsking=!0,Sl(this.hass).then(t=>this._libUpdates=td(t)).catch(()=>this._libUpdates=new Set).finally(()=>{this.libUpdatesAsking=!1,this.libUpdatesAsked&&(this.libUpdatesAsked=!1,this.refreshLibUpdates())})}}async updateFromLibrary(t){if(this.hass){try{await Fl(this.hass,t)}catch(e){this._notice=String(e?.message??e)}this.refreshLibUpdates()}}renderFurnitureLibrary(){let t=this.room,e=this.hass?.language??"en";return le($u),m`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${t?this.t("furniture_into",{room:t.name}):this.t("furniture_pick_room")}</p>
      ${this._placing?m`<div class="fp3d-placing" role="status">
            <span>${this.t("place_armed",{name:lt(this.hass,this._placing.type)})}</span>
            <label class="fp3d-check" title=${this.t("snap_toggle_hint")}
              ><input type="checkbox" .checked=${this._snapOn} @change=${n=>this.setSnapOn(n.target.checked)} />
              ${this.t("snap_toggle")}</label
            >
            <button class="fp3d-btn fp3d-primary" @click=${()=>this.placeArmedInMiddle()}>${t?this.t("place_middle_room",{room:t.name}):this.t("place_middle")}</button>
            <button class="fp3d-btn" @click=${()=>this.cancelPlacing()}>${this.t("cancel")}</button>
          </div>`:v}
      <fp3d-library
        .entries=${this.libraryEntries(e)}
        .language=${e}
        .roomHint=${t?nd(t.name):null}
        .admin=${this.isEditor}
        .t=${(n,i)=>this.t(n,i)}
        .thumb=${this.libraryThumb}
        .updates=${this._libUpdates}
        @library-update=${n=>{this.updateFromLibrary(n.detail.types)}}
        @library-add=${n=>this.addFurniture(n.detail.type,!!n.detail.mirror)}
        @library-preview=${n=>{n.detail.type&&n.detail.element?this.showPreview(n.detail.type,n.detail.element):this._preview=null}}
      ></fp3d-library>
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}async showPreview(t,e){let n=e.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...i};try{let[s]=await Promise.all([ze(),this.hass?ue(this.hass,[t]):void 0]),[o,r,l]=_t(t),d=s.furniturePreview({type:t,w:o,d:r,h:l,variant:null,lamp:He[t]??null},180,this.packs??[]);this._preview?.type===t&&(this._preview={type:t,url:d,...i})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?m`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?m`<img src=${t.url} alt="" />`:m`<span class="fp3d-preview-wait"></span>`}
      <b>${lt(this.hass,t.type)}</b>
    </div>`:v}};function Im(a,t,e){let n=e[0]-t[0],i=e[1]-t[1],s=n*n+i*i,o=s?Math.max(0,Math.min(1,((a[0]-t[0])*n+(a[1]-t[1])*i)/s)):0;return Math.hypot(a[0]-t[0]-n*o,a[1]-t[1]-i*o)}function Fu(a,t,e=.03){return a.every(n=>K(n,t)||t.some((i,s)=>Im(n,i,t[(s+1)%t.length])<=e))}function Iu(a){let t=Bt(a);if(!t)return!1;if(Rm.test([t.id,...t.tags??[],...Object.values(t.name??{})].join(" ")))return!t.light||/plant|pflanz/i.test(t.id);if(t.light)return!1;let e=t.parts.filter(n=>n.color==="plant").length;return e>0&&e+t.parts.filter(n=>n.color==="pot").length>=t.parts.length/2}function Ru(a){return!!Bt(a)?.tags?.includes("bin")}var Rm=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i,Xr=["bin120","bin240","bin1100","multi","bag","caddy","underground"],zu=["rest","bio","paper","plastic","glass","garden","recycling","other"],Qr=["wall","pole","pillar","parcel","bank"],Ou={bin120:[.48,.55,.93],bin240:[.58,.73,1.07],bin1100:[1.37,1.07,1.45],multi:[.6,.75,1.07],bag:[.42,.32,.62],caddy:[.3,.26,.32],underground:[1,1,1.15]},Au={wall:[.38,.14,.34],pole:[.24,.5,1.15],pillar:[.42,.36,1.3],parcel:[.6,.55,1.1],bank:[.95,.3,.7]};function Tu(a){return Xr.includes(a.variant??"")?a.variant:"bin240"}function Lu(a){return Qr.includes(a.variant??"")?a.variant:"wall"}var St=["#3a3f47","#3a3f47"],zn=["#23262b","#23262b"],Me=["#5a3b25","#5a3b25"],gt=["#1f4fa8","#1f4fa8"],an=["#e3b616","#e3b616"],st=["#2f7d3b","#2f7d3b"],Pu={default:{rest:St,bio:Me,paper:gt,plastic:an,glass:st,garden:st,recycling:an,other:St},DE:{rest:zn,bio:Me,paper:gt,plastic:an,glass:st,garden:st,recycling:an},AT:{rest:St,bio:Me,paper:[St[0],"#c0262d"],plastic:an,glass:st,garden:st},CH:{rest:["#d8d8d8","#d8d8d8"],bio:st,paper:gt,plastic:St,glass:st,garden:st},NL:{rest:St,bio:st,paper:gt,plastic:["#3a3f47","#e57a1f"],glass:st,garden:st},BE:{rest:St,bio:st,paper:gt,plastic:gt,glass:st,garden:st},GB:{rest:zn,bio:["#3a3f47","#5a3b25"],paper:gt,plastic:gt,glass:zn,garden:Me,recycling:gt},US:{rest:zn,bio:st,paper:gt,plastic:gt,glass:gt,garden:st,recycling:gt},CA:{rest:zn,bio:st,paper:gt,plastic:gt,glass:gt,garden:st,recycling:gt},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:St,bio:Me,paper:[St[0],"#e3b616"],plastic:[St[0],"#e3b616"],recycling:[St[0],"#e3b616"],glass:st,garden:st},IT:{rest:St,bio:Me,paper:gt,plastic:an,glass:st,garden:st},ES:{rest:St,bio:Me,paper:gt,plastic:an,glass:st,garden:st},PT:{rest:St,bio:Me,paper:gt,plastic:an,glass:st,garden:st},DK:{rest:zn,bio:st,paper:gt,plastic:St,glass:st,garden:st},SE:{rest:zn,bio:Me,paper:gt,plastic:St,glass:st,garden:st},NO:{rest:St,bio:Me,paper:gt,plastic:St,glass:st,garden:st},FI:{rest:St,bio:Me,paper:gt,plastic:St,glass:st,garden:st}},Hu="DE";function Vu(){return Hu}function Jr(a,t){return Pu[t]?.[a]??Pu.default[a]??St}function io(a,t=Hu){let e=Jr(a.bin_kind??"rest",t),n=a.bin_color||e[0];return[n,a.bin_lid||(a.bin_color?n:e[1])]}var Cu=["default","none","toggle","more_info","camera","navigate","url","perform_action"];function Du(a,t,e){return a!=="perform_action"||e||t?.action==="perform_action"}function Wu(a,t){return a?.action==="perform_action"&&!t}var Zr=["tap","hold","double_tap"];function zm(a){return!!a&&Zr.some(t=>!!a[t]&&a[t].action!=="default")}function Nu(a,t,e){let n={...a??{}};return e&&e.action!=="default"?n[t]=e:delete n[t],zm(n)?n:null}function ju(a){if(!a.trim())return null;let t=JSON.parse(a);if(!t||typeof t!="object"||Array.isArray(t))throw new TypeError("not an object");return t}var ta=["matt","gloss","fabric","glass","metal","rattan"],Om={fabric:"fabric",cushion:"fabric",metal:"metal",glass:"glass",white:"gloss",paint:"gloss"},Bu=a=>typeof a=="string"&&ta.includes(a);function Ku(a){return Om[a]??"matt"}function Uu(a,t){let e=a?.[t];return Bu(e)?e:null}function Gu(a,t,e){let n={...a};return Bu(e)?n[t]=e:delete n[t],Object.keys(n).length?n:null}function qu(a){return $e(a)&&/:(?:[a-z0-9_.-]*_)?3d_printer(?:_[a-z0-9_.-]*)?$/.test(a)}var Am=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);function Yu(a){let t=Tt(a);return t?[...t.tags??[],t.family??""].map(e=>e.toLowerCase()):[]}var Tm=/^(boiler|gas boiler|oil boiler|combi|combi boiler|system boiler|water heater|hot water cylinder|heat pump)$/,Lm=/^(smoke alarm|smoke detector|co alarm|co detector|carbon monoxide|heat alarm|water meter|gas meter|leak sensor|leak detector|water leak sensor|motion sensor|door sensor|contact sensor|sensor)$/;function ea(a){return Gi(a)||Yu(a).some(t=>Tm.test(t))}function na(a){return xa(a)||Yu(a).some(t=>Lm.test(t))}function so(a){return!!Tt(a)?.vehicle}function Hm(a){return a==="ac_unit"||Fe(a)||ea(a)||Ye(a)||na(a)||so(a)}function oo(a){return Yn(a)&&(!$e(a)||ka(a))&&!Hm(a)}function Xu(a){return xt(a)?{label:"furn_entity_light",domains:["light","switch","input_boolean"]}:Se(a)?{label:"motor_cover",domains:["cover","switch"]}:a==="ac_unit"||Fe(a)?{label:"furn_entity_climate",domains:["climate"]}:ea(a)?{label:"furn_entity_heater",domains:["climate","water_heater","switch"]}:te(a)?{label:"furn_entity_vacuum",domains:["vacuum"]}:Ye(a)?{label:"furn_entity_camera",domains:["camera"]}:na(a)?{label:"furn_entity_sensor",domains:["sensor","binary_sensor"]}:so(a)?{label:"furn_entity_car",domains:["device_tracker","binary_sensor","sensor"]}:oo(a)?{label:"furn_entity_tv",domains:["media_player","switch"]}:a==="awning"?{label:"awning_cover",domains:["cover"]}:{label:"furn_entity",domains:["switch"]}}function ia(a,t,e){if($a(t))return!0;if(xt(t))return/^(light|switch|input_boolean)\./.test(e);if(t==="ac_unit"||Fe(t))return e.startsWith("climate.");if(oo(t))return/^(media_player|switch|input_boolean|light)\./.test(e)||Se(t)==="screen"&&e.startsWith("cover.");if(t==="awning")return e.startsWith("cover.");let n=Se(t);return n==="curtain"||n==="blind"?/^(cover|switch|input_boolean)\./.test(e):te(t)?e.startsWith("vacuum."):Ye(t)&&e.startsWith("camera.")||/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(e)||ea(t)&&e.startsWith("water_heater.")||(na(t)||qu(t)||so(t))&&/^(binary_sensor|sensor)\./.test(e)||so(t)&&e.startsWith("device_tracker.")||Zo(a.states[e])||e.startsWith("binary_sensor.")&&(t.endsWith("smoke_detector")||Am.has(String(a.states[e]?.attributes.device_class??"")))}function Qu(a,t){return e=>ia(a,t,e)}function Ju(a,t){let e={...a,...t};for(let[n,i,s]of[["from","to",null],["start","end","00:00"]]){let o=n in t?n:i in t?i:null;if(!o)continue;let r=o===n?i:n;e[o]?e[r]||(e[r]=s??e[o]):(e[n]=null,e[i]=null)}return e}var sa="#ffd400",ro=class{glowScaleField(t,e){return m`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isEditor}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(i-1)<.001?null:i)}}
    /></label>`}renderFurnitureForm(t){if(this.selection().length>1)return this.renderBlockForm();let e=this.isEditor,n=bu({mirror:!xt(t.type),strip:t.type==="led_strip",lift:de(t)&&!!this.floor,floors:this._doc.floors.length>1});return m`<section>
      <div class="fp3d-pos-head">
        <div class="fp3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
        <div class="fp3d-form">${n.head.map(i=>this.furnitureField(t,i))}</div>
      </div>
      ${t.type==="waste_bin"?this.renderBinKerb(t):v}
      ${this.renderLinkBlock(t)}
      ${t.group?m`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:v}
      <div class="fp3d-form">${n.body.map(i=>this.furnitureField(t,i))}</div>
      ${this.renderColourRoles(t)}
      ${t.type==="stairs"?m`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:v}
      ${t.type==="stairs"?this.renderStairOptions(t):v}
      ${t.type==="stairs_u"?m`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:v}
      ${t.type==="stairwell"?m`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(i=>i.points.length>=3&&(Fu(Wt(t),i.points)||yt(Or(i.points,Wt(t)))>.01))?m`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:v}`:v}
      ${t.type==="inverter"||t.type==="home_battery"?m`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!e} @change=${i=>this.updateFurniture({variant:i.target.value||null})}>
                ${(t.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(i=>m`<option value=${i} ?selected=${(t.variant??"")===i}>${this.t(`${t.type==="inverter"?"inverter":"battery"}_${i||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:v}
      ${t.type==="lamp_pendant"?m`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${i=>this.updateFurniture({variant:i.target.value||null})}>
                ${["","globe","cone","drum"].map(i=>m`<option value=${i} ?selected=${(t.variant??"")===i}>${this.t(`pendant_${i||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:v}
      ${nl.has(t.type)?this.renderGangsForm(t):v} ${rl.has(t.type)?this.renderTechForm(t):v} ${t.type==="parking"?this.renderParkingForm(t):v} ${t.type==="waste_bin"||t.type==="mailbox"?this.renderHouseholdForm(t):this.renderHouseholdExtras(t)}
      ${this.renderModuleFurnitureFields(t)}
      ${this.renderShowWhen(t)}
      ${this.renderItemActions(t.actions,t.entity&&t.entity!=="none"?t.entity:null,i=>this.updateFurniture({actions:i}))}
      ${/^pack:[^:]+\.vehicles:/.test(t.type)&&this.isEditor?m`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(t)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:v}
      ${this.rackOf(t)?this.renderRackFrameForm(t):v}
      ${this.renderRackElevation(t)}
      ${this.renderRackCardForm(t)}
      ${!e&&this.rackOf(t)?m`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>this.openRackSheet()}>▤ ${this.t("rack_edit")}</button></div>`:v}
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${zt(this.t("rotate_left"),["Shift+R"])} @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" title=${zt(this.t("rotate_right"),["R"])} @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(t)}>▦ ${this.t("wall_view")}</button>
            ${this.rackOf(t)?m`<button class="fp3d-btn" @click=${()=>this.openRackSheet()}>▤ ${this.t("rack_edit")}</button>`:v}
            ${t.entity&&t.entity!=="none"&&t.type!=="parking"?m`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(t)}>${this.t("as_device")}</button>`:v}
            ${this.renderClipButtons()}
            <button class="fp3d-btn fp3d-danger" title=${zt(this.t("delete"),["Del"])} @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`:v}
    </section>`}renderLinkBlock(t){let e=qe(t.type)?this.renderFurnitureLinks(t):gc.has(t.type)?v:m`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`;return e===v?v:m`<div class="fp3d-link-block"><h4 class="fp3d-link-title">${this.t("link_device")}</h4>${e}</div>`}furnitureField(t,e){let n=this.isEditor;switch(e){case"x":return this.len(this.t("x"),t.x,i=>this.updateFurniture({x:i}));case"z":return this.len(this.t("z"),t.z,i=>this.updateFurniture({z:i}));case"rotation":return this.num(this.t("rotation"),t.rotation,i=>this.updateFurniture({rotation:(i%360+360)%360}),1);case"w":return this.len(this.t("width"),t.w,i=>this.updateFurniture({w:Math.max(.01,i)}),.01,.01);case"d":return this.len(this.t("depth"),t.d,i=>this.updateFurniture({d:Math.max(.01,i)}),.01,.01);case"h":return this.len(this.t("height_m"),t.h,i=>this.updateFurniture({h:Math.max(.005,i)}),.01,0);case"mount":return m`${this.len(this.t("mount_height"),t.mount_y??Ht(this.floor,t),i=>this.updateFurniture({mount_y:Math.min(Ne,Math.max(0,i))}),.01,0)}
          ${t.mount_y!=null?m`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!n} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:v}`;case"mirror":return m`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
          ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!n} @change=${i=>this.updateFurniture({mirror:i.target.checked})} />
          ${this.t("furn_mirror")}</label
        >`;case"strip":return m`${this.num(this.t("strip_tilt"),t.tilt??0,i=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(i)))}),5)}
          ${t.upright?v:m`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"),t.rise??0,i=>this.updateFurniture({rise:Math.max(-80,Math.min(80,Math.round(i)))||void 0}),5)}</span>`}
          <label class="fp3d-check" title=${this.t("strip_upright_hint")}
            ><input type="checkbox" .checked=${!!t.upright} ?disabled=${!n} @change=${i=>this.updateFurniture({upright:i.target.checked})} />
            ${this.t("strip_upright")}</label
          >`;case"name":return m`<label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${t.name??""} ?disabled=${!n} placeholder=${this.t(`furn_${t.type}`)===`furn_${t.type}`?"":this.t(`furn_${t.type}`)} @change=${i=>this.updateFurniture({name:i.target.value.trim()||null})} />
        </label>`;case"show_name":return m`<label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${!!t.show_name&&!!t.name} ?disabled=${!n||!t.name} @change=${i=>this.updateFurniture({show_name:i.target.checked||void 0})} />
          ${this.t("show_name")}</label
        >`;case"aliases":return m`<label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${i=>this.updateFurniture({aliases:Cn(i.target.value)})}
        /></label>`;case"type":return le(Mu),m`<div class="fp3d-field fp3d-wide">
          ${this.t("furniture_type")}
          <button class="fp3d-btn fp3d-item-pick" ?disabled=${!n} aria-haspopup="dialog" title=${this.t("item_picker_open")} @click=${()=>this._itemPicker=!0}>${lt(this.hass,t.type)} ▾</button>
          ${this._itemPicker?m`<fp3d-item-picker
                .entries=${this.libraryEntries(this.hass?.language??"en")}
                .current=${t.type}
                .language=${this.hass?.language??"en"}
                .t=${(i,s)=>this.t(i,s)}
                .thumb=${this.libraryThumb}
                .picture=${this.libraryPicture}
                @pick=${i=>{this._itemPicker=!1,this.retypeFurniture(i.detail.type)}}
                @close=${()=>this._itemPicker=!1}
              ></fp3d-item-picker>`:v}
        </div>`;case"floor":return this.renderItemFloor()}}renderItemFloor(){return m`<label class="fp3d-field fp3d-wide" title=${this.t("item_floor_hint")}
      >${this.t("floor")}
      <select ?disabled=${!this.isEditor} @change=${t=>this.moveSelectionToFloor(t.target.value)}>
        ${[...this._doc.floors].reverse().map(t=>m`<option value=${t.id} ?selected=${t.id===this._floorId}>${t.name}</option>`)}
      </select></label
    >`}renderItemActions(t,e,n){let i=this.isEditor,s=(r,l)=>{let d=t?.[r];n(Nu(t,r,l===null?null:{...d??{action:"default"},...l}))},o=r=>r==="navigate"?"/lovelace/garden":r==="url"?"https://":r==="perform_action"?"script.turn_on":e??"light.kitchen";return m`<h4>${this.t("item_actions")}</h4>
      <p class="fp3d-sub">${this.t("item_actions_hint")}</p>
      ${i&&!this.isHaAdmin?m`<p class="fp3d-sub">${this.t("item_action_perform_admin")}</p>`:v}
      ${Zr.map(r=>{let l=t?.[r]??null,d=l?.action??"default",c=d!=="default"&&d!=="none",p=!i||Wu(l,this.isHaAdmin);return m`<div class="fp3d-form fp3d-item-action" data-gesture=${r}>
          <label class="fp3d-field fp3d-wide"
            >${this.t(`item_gesture_${r}`)}
            <select ?disabled=${!i} @change=${h=>{let u=h.target.value;s(r,u==="default"?null:{action:u,target:null,data:null})}}>
              ${Cu.map(h=>m`<option value=${h} ?selected=${h===d} ?disabled=${!Du(h,l,this.isHaAdmin)}>${this.t(`item_action_${h}`)}</option>`)}
            </select></label
          >
          ${c?m`<label class="fp3d-field fp3d-wide"
                >${this.t(`item_target_${d}`)}
                <input type="text" maxlength="2000" .value=${l?.target??""} ?disabled=${p} placeholder=${o(d)} @change=${h=>s(r,{target:h.target.value.trim()||null})}
              /></label>`:v}
          ${d==="perform_action"?m`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="3"
                  spellcheck="false"
                  ?disabled=${p}
                  placeholder='{"entity_id": "script.movie_night"}'
                  .value=${l?.data?JSON.stringify(l.data,null,1):""}
                  @change=${h=>{let u=h.target;u.setCustomValidity("");try{s(r,{data:ju(u.value)})}catch{u.setCustomValidity(this.t("own_data_bad")),u.reportValidity()}}}
                ></textarea></label
              >`:v}
          ${c?m`<label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!l?.confirm} ?disabled=${p} @change=${h=>s(r,{confirm:h.target.checked||void 0})} />
                  ${this.t("item_action_confirm")}</label
                >
                ${l?.confirm?m`<label class="fp3d-field fp3d-wide"
                      >${this.t("item_action_confirm_text")}
                      <input type="text" maxlength="300" .value=${l.confirm_text??""} ?disabled=${p} placeholder=${this.t("item_action_confirm_placeholder")} @change=${h=>s(r,{confirm_text:h.target.value.trim()||null})}
                    /></label>`:v}`:v}
        </div>`})}`}renderShowWhen(t){let e=t.show_when??{},n=e.intervals??[],i=!this.isEditor,s=l=>{let d={...e,...l};this.updateFurniture({show_when:d.entity&&d.entity!=="none"||d.intervals?.length?d:null})},o=(l,d)=>s({intervals:n.map((c,p)=>p===l?Ju(c,d):c)}),r=(l,d,c,p)=>m`<label class="fp3d-field"
        >${l}
        <input type=${d} ?disabled=${i} .value=${c?d==="date"?`2028-${c}`:c:""} @change=${h=>{let u=h.target.value;p(u?d==="date"?u.slice(5):u:null)}}
      /></label>`;return m`<details class="fp3d-section" ?open=${!!t.show_when}>
      <summary>${this.t("show_when")}</summary>
      <div class="fp3d-form">
        ${this.entitySelect(this.t("show_when_entity"),e.entity??null,void 0,this.entityOptions(()=>!0),l=>s({entity:l==="none"?null:l}))}
        ${n.map((l,d)=>m`${r(this.t("show_from"),"date",l.from,c=>o(d,{from:c}))} ${r(this.t("show_to"),"date",l.to,c=>o(d,{to:c}))}
            ${r(this.t("show_start"),"time",l.start,c=>o(d,{start:c}))} ${r(this.t("show_end"),"time",l.end,c=>o(d,{end:c}))}
            <button class="fp3d-pin" title=${this.t("delete")} ?disabled=${i} @click=${()=>s({intervals:n.filter((c,p)=>p!==d)})}>✕</button>`)}
      </div>
      ${i||n.length>=12?v:m`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>s({intervals:[...n,{}]})}>+ ${this.t("show_add_interval")}</button></div>`}
      <p class="fp3d-sub">${this.t("show_when_hint")}</p>
    </details>`}renderStateLinks(t){return m`${this.entitySelect(this.t("furn_state_entity"),t.state_entity??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture(el(t,e)))}
              ${t.state_entity&&t.state_entity!=="none"?m`${this.entitySelect(this.t("furn_state_entity2"),t.state_entity2??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture({state_entity2:e==="none"?null:e}))}
                    ${t.state_entity2&&t.state_entity2!=="none"?m`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isEditor} @change=${e=>this.updateFurniture({state_split:e.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${t.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${t.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:v}`:v}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderColourRoles(t){let e=ld(t.type);if(!e.length)return v;let n=this.isEditor,i=(r,l)=>this.updateFurniture({colors:Co(t.colors,r,l)}),s=(r,l)=>this.updateFurniture({materials:Gu(t.materials,r,l||null)}),o=r=>this.t(`material_${r}`);return m`<div class="fp3d-form">
      <h4 class="fp3d-lib-head fp3d-wide">${this.t("colours")}</h4>
      ${e.map(r=>{let l=ad(t.colors,r);if(r==="paint")return this.renderPaint(t,l);let d=l?Vo.find(p=>p.hex===l):void 0,c=Uu(t.materials,r);return m`<div class="fp3d-field fp3d-colour-role">
          <span>${this.t(`colour_role_${r}`)}</span>
          <span class="fp3d-colour-pick">
            <span class="fp3d-colour-swatch">
              <input type="color" class=${l?"":"fp3d-colour-unset"} aria-label=${this.t(`colour_role_${r}`)} .value=${l??"#808080"} ?disabled=${!n}
                @change=${p=>i(r,p.target.value)} />
              ${Dn({value:l,fallback:null,label:this.t("colour_theme"),disabled:!n,onReset:()=>i(r,null)})}
            </span>
            <select ?disabled=${!n} @change=${p=>i(r,p.target.value||null)}>
              <option value="" ?selected=${!l}>${this.t("colour_theme")}</option>
              ${l&&!d?m`<option value=${l} selected>${this.t("colour_own")}</option>`:v}
              ${Vo.map(p=>m`<option value=${p.hex} ?selected=${p===d}>${this.t(`colour_preset_${p.id}`)}</option>`)}
            </select>
            <select class="fp3d-material" aria-label=${this.t("material_of",{role:this.t(`colour_role_${r}`)})} ?disabled=${!n}
              @change=${p=>s(r,p.target.value)}>
              <option value="" ?selected=${!c}>${this.t("material_usual",{material:o(Ku(r))})}</option>
              ${ta.map(p=>m`<option value=${p} ?selected=${p===c}>${o(p)}</option>`)}
            </select>
          </span>
        </div>`})}
      <p class="fp3d-sub fp3d-wide">${this.t("colours_hint")}</p>
    </div>`}renderPaint(t,e){let n=this.isEditor,i=this.t("colour_role_paint");return m`<div class="fp3d-field fp3d-colour-role fp3d-wide">
      <span>${i}</span>
      <span class="fp3d-paint">
        ${od.map(s=>{let o=this.t(`paint_${s.id}`);return m`<button type="button" class="fp3d-swatch" style=${`background:${s.hex}`} title=${o} aria-label=${o} aria-pressed=${e===s.hex?"true":"false"}
            ?disabled=${!n} @click=${()=>this.setPaint(t,s.hex)}></button>`})}
        <input type="text" class="fp3d-paint-hex" maxlength="7" placeholder="#rrggbb" aria-label=${this.t("paint_hex")} .value=${e??""} ?disabled=${!n}
          @change=${s=>this.setPaint(t,s.target.value)} />
        <input type="color" class=${e?"":"fp3d-colour-unset"} aria-label=${this.t("paint_hex")} .value=${e??"#808080"} ?disabled=${!n}
          @change=${s=>this.setPaint(t,s.target.value)} />
        ${Dn({value:e,fallback:null,label:this.t("colour_theme"),disabled:!n,onReset:()=>this.setPaint(t,"")})}
      </span>
    </div>`}setPaint(t,e){let n=rd(e);e.trim()&&!n||this.updateFurniture({colors:Co(t.colors,"paint",n)})}renderBinKerb(t){let e=this.isEditor;return m`<div class="fp3d-form fp3d-links fp3d-bin-kerb">
      <div class="fp3d-field fp3d-wide">
        <span>${this.t("bin_kerb")}</span>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._kerbPick} ?disabled=${!e} @click=${()=>this._kerbPick=!this._kerbPick}>
            ${this._kerbPick?"\u2713 ":""}${this.t(t.bin_kerb?"bin_kerb_move":"bin_kerb_set")}
          </button>
          ${t.bin_kerb?m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({bin_kerb:null})}>${this.t("bin_kerb_clear")}</button>`:v}
        </div>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t(this._kerbPick?"hint_kerb_pick":"bin_kerb_hint")}</p>
    </div>`}renderHouseholdForm(t){let e=this.isEditor,n=(r,l,d,c,p)=>m`<label class="fp3d-field fp3d-wide"
        >${r}
        <select ?disabled=${!e} @change=${h=>p(h.target.value)}>
          ${d.map(h=>m`<option value=${h} ?selected=${h===l}>${this.t(c(h))}</option>`)}
        </select></label
      >`;if(t.type==="waste_bin"){let r=Tu(t),l=t.bin_kind??"rest",[d,c]=io(t),p=this.entityOptions(h=>h.startsWith("calendar.")||h.startsWith("sensor."));return m`<div class="fp3d-form fp3d-links">
        ${n(this.t("bin_shape"),r,Xr,h=>`bin_shape_${h}`,h=>{let[u,f,g]=Ou[h];this.updateFurniture({variant:h==="bin240"?null:h,w:u,d:f,h:g})})}
        ${n(this.t("bin_kind"),l,zu,h=>`bin_kind_${h}`,h=>{let[u,f]=Jr(h,Vu());this.updateFurniture({bin_kind:h,bin_color:u,bin_lid:f===u?null:f})})}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <span class="fp3d-colour-row"
            ><input type="color" .value=${d} ?disabled=${!e} @change=${h=>this.updateFurniture({bin_color:h.target.value})} />
            ${Dn({value:d,fallback:io({...t,bin_color:null})[0],label:this.t("colour_reset"),disabled:!e,onReset:()=>this.updateFurniture({bin_color:null})})}</span
          ></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <span class="fp3d-colour-row"
            ><input type="color" .value=${c} ?disabled=${!e} @change=${h=>this.updateFurniture({bin_lid:h.target.value})} />
            ${Dn({value:c,fallback:io({...t,bin_lid:null})[1],label:this.t("colour_reset"),disabled:!e,onReset:()=>this.updateFurniture({bin_lid:null})})}</span
          ></label>
        ${m`${this.entitySelect(this.t("bin_source"),t.bin_source??null,void 0,p,h=>this.updateFurniture({bin_source:h==="none"?null:h}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${t.bin_match??""} placeholder=${this.t(`bin_kind_${l}`)} ?disabled=${!e}
                  @change=${h=>this.updateFurniture({bin_match:h.target.value.trim()||null})} /></label>
              ${this.entitySelect(this.t("bin_out"),t.bin_out??null,void 0,this.entityOptions(h=>/^(input_boolean|switch|binary_sensor)\./.test(h)),h=>this.updateFurniture({bin_out:h==="none"?null:h}))}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_out_hint")}</p>
              ${this.renderSettingsLink("household","household.bin_from","settings_moved_bins")}`}
      </div>`}let i=Lu(t),s=this.entityOptions(r=>["binary_sensor.","input_boolean.","sensor.","counter.","input_number."].some(l=>r.startsWith(l))),o=this.entityOptions(r=>r.startsWith("binary_sensor."));return m`<div class="fp3d-form fp3d-links">
      ${n(this.t("mailbox_shape"),i,Qr,r=>`mailbox_shape_${r}`,r=>{let[l,d,c]=Au[r];this.updateFurniture({variant:r==="wall"?null:r,w:l,d,h:c})})}
      ${m`${this.entitySelect(this.t("mailbox_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,s,r=>this.updateFurniture({entity:r??"none"}))}
            ${this.entitySelect(this.t("mailbox_door"),t.mailbox_door??null,void 0,o,r=>this.updateFurniture({mailbox_door:r==="none"?null:r}))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`}
    </div>`}renderHouseholdExtras(t){let e=t.type==="plant"||Iu(t.type),n=t.type==="washer"||t.type==="dryer"||t.type==="dishwasher",i=t.type==="fridge"||t.type==="fridge_smart",s=qe(t.type);if(!e&&!s&&Ru(t.type))return m`<p class="fp3d-sub fp3d-wide">${this.t("bin_model_hint")}</p>`;if(!e&&!s)return v;let o=this.entityOptions(c=>c.startsWith("sensor.")),r=this.entityOptions(c=>c.startsWith("binary_sensor.")),l=this.entityOptions(c=>["sensor.","binary_sensor.","input_boolean.","input_datetime.","input_number."].some(p=>c.startsWith(p))),d=c=>c==="none"?null:c;return m`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("section_household")}</b></p>
      ${e?m`${this.entitySelect(this.t("hh_moisture"),t.moisture??null,void 0,this.entityOptions(c=>c.startsWith("plant.")||c.startsWith("sensor.")),c=>this.updateFurniture({moisture:d(c)}))}
            ${this.num(this.t("hh_moisture_min"),t.moisture_min??20,c=>this.updateFurniture({moisture_min:Math.max(0,Math.min(100,Math.round(c)))}),1)}`:v}
      ${n?m`${this.entitySelect(this.t("hh_remaining"),t.remaining??null,void 0,o,c=>this.updateFurniture({remaining:d(c)}))}
            ${this.entitySelect(this.t("hh_door"),t.door_left??null,void 0,r,c=>this.updateFurniture({door_left:d(c)}))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`:v}
      ${i?m`${t.type==="fridge"?this.entitySelect(this.t("hh_fridge_door"),t.door_left??null,void 0,r,c=>this.updateFurniture({door_left:d(c)})):v}
            ${this.num(this.t("hh_door_alarm"),t.door_alarm??2,c=>this.updateFurniture({door_alarm:Math.max(.5,Math.min(120,c))}),.5)}`:v}
      ${s?m`${this.entitySelect(this.t("hh_service_entity"),t.service??null,void 0,l,c=>this.updateFurniture({service:d(c)}))}
            ${t.service&&t.service!=="none"?this.num(this.t("hh_service_min"),t.service_min??10,c=>this.updateFurniture({service_min:Math.max(0,c)}),1):v}
            ${t.service&&t.service!=="none"||t.service2&&t.service2!=="none"?this.entitySelect(this.t("hh_service2_entity"),t.service2??null,void 0,l,c=>this.updateFurniture({service2:d(c)})):v}
            ${t.service2&&t.service2!=="none"?this.num(this.t("hh_service2_min"),t.service2_min??10,c=>this.updateFurniture({service2_min:Math.max(0,c)}),1):v}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`:v}
    </div>`}renderAwningFields(t){let e=this.isEditor,n=this.entityOptions(o=>o.startsWith("sensor.")||o.startsWith("input_number.")||o.startsWith("number.")),i={arm:{w:3,d:2.5,y:2.3,pitch:null},drop:{w:2.4,d:1.2,y:2.3,pitch:20},vertical:{w:2,d:.2,y:2.3,pitch:null},pergola:{w:4,d:3.5,y:2.6,pitch:6},side:{w:3,d:.2,y:1.8,pitch:null}},s=t.variant??"arm";return m`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!e}
          @change=${o=>{let r=o.target.value,l=i[r];this.updateFurniture({variant:r==="arm"?null:r,w:l.w,d:l.d,mount_y:l.y,awning_pitch:l.pitch})}}
        >
          ${Object.keys(i).map(o=>m`<option value=${o} ?selected=${s===o}>${this.t(`awning_kind_${o}`)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t(`awning_kind_${s}_hint`)}</p>
      ${s==="vertical"||s==="side"?v:this.num(this.t("awning_pitch"),t.awning_pitch??12,o=>this.updateFurniture({awning_pitch:Math.max(0,Math.min(80,Math.round(o)))}),1)}
      ${this.num(this.t("awning_time"),t.awning_time??20,o=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(o)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,o=>this.updateFurniture({awning_position:o==="none"?null:o}))}
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${t.awning_valance!==!1} ?disabled=${!e} @change=${o=>this.updateFurniture({awning_valance:o.target.checked})} />
        ${this.t("awning_valance")}</label
      >
      <label class="fp3d-check fp3d-wide" title=${this.t("awning_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${o=>this.updateFurniture({awning_invert:o.target.checked})} />
        ${this.t("awning_invert")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`}renderMotionFields(t){let e=this.isEditor,n=this.entityOptions(s=>s.startsWith("sensor.")||s.startsWith("input_number.")||s.startsWith("number.")),i=t.variant==="left"||t.variant==="right"?t.variant:"both";return m`${Se(t.type)==="curtain"?m`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!e} @change=${s=>{let o=s.target.value;this.updateFurniture({variant:o==="both"?null:o})}}>
              ${["both","left","right"].map(s=>m`<option value=${s} ?selected=${i===s}>${this.t(`curtain_side_${s}`)}</option>`)}
            </select></label
          >`:v}
      ${this.num(this.t("motor_time"),t.awning_time??20,s=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(s)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,s=>this.updateFurniture({awning_position:s==="none"?null:s}))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${s=>this.updateFurniture({awning_invert:s.target.checked})} />
        ${this.t("awning_invert")}</label
      >`}renderTechForm(t){if(!this.hass)return v;let e=this.isEditor,n=t.type==="wifi_ap",i=["","wall"],s=l=>{let[d,c,p]=al[`${t.type}:${l}`];this.updateFurniture({variant:l||null,w:d,d:c,h:p,mount_y:null})},o=this.entityOptions(l=>l.startsWith("sensor.")),r=this.entityOptions(l=>(n?/^(binary_sensor|sensor|device_tracker|switch|button|update)\./:/^(water_heater|climate|switch|input_boolean|sensor)\./).test(l),n);return m`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t("tech_mount")}
        <select ?disabled=${!e} @change=${l=>s(l.target.value)}>
          ${i.map(l=>m`<option value=${l} ?selected=${(t.variant??"")===l}>${this.t(`${t.type}_${l||"std"}`)}</option>`)}
        </select></label
      >
      ${this.entitySelect(this.t(n?"ap_status":"heater_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,r,l=>this.updateFurniture({entity:l&&l!=="none"?l:"none"}))}
      ${n?this.entitySelect(this.t("ap_clients_sensor"),t.clients??null,void 0,o,l=>this.updateFurniture({clients:l&&l!=="none"?l:null})):m`${this.entitySelect(this.t("heater_temp"),t.water_temp??null,void 0,o,l=>this.updateFurniture({water_temp:l&&l!=="none"?l:null}))}
            ${this.entitySelect(this.t("furn_power"),typeof t.power=="string"&&t.power!=="none"?t.power:null,void 0,this.entityOptions(l=>this.isPowerSensor(l)),l=>this.updateFurniture({power:l&&l!=="none"?l:"none"}))}`}
      <p class="fp3d-sub fp3d-wide">${this.t(n?"ap_hint":"heater_hint")}</p>
      <div class="fp3d-form">${this.markerSelect(t.marker??null,l=>this.updateFurniture({marker:l}))}${this.iconInput(t.icon,l=>this.updateFurniture({icon:l}))}</div>
    </div>`}renderGangsForm(t){if(!this.hass)return v;let e=this.isEditor,n=sl(t),i=t.type==="wall_socket",s=this.entityOptions(c=>/^(light|switch|input_boolean|fan)\./.test(c)),o=this.entityOptions(c=>this.isPowerSensor(c)),r=c=>this.updateFurniture({gangs:c.length>1||c[0]?.entity||c[0]?.power?c:null}),l=(c,p)=>r(n.map((h,u)=>u===c?{...h,...p}:h)),d=c=>{let p=Array.from({length:c},(h,u)=>n[u]??{entity:null});this.updateFurniture({gangs:c>1||p[0].entity||p[0].power?p:null,w:ol(c)})};return m`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t(i?"gang_count_socket":"gang_count_switch")}
        <select ?disabled=${!e} @change=${c=>d(Number(c.target.value))}>
          ${Array.from({length:il},(c,p)=>p+1).map(c=>m`<option value=${c} ?selected=${n.length===c}>${c}</option>`)}
        </select></label
      >
      ${i?m`<label class="fp3d-field"
            >${this.t("socket_kind")}
            <select ?disabled=${!e} @change=${c=>this.updateFurniture({variant:c.target.value||null})}>
              ${["","outdoor"].map(c=>m`<option value=${c} ?selected=${(t.variant??"")===c}>${this.t(c?"socket_outdoor":"socket_indoor")}</option>`)}
            </select></label
          >`:v}
      ${n.map((c,p)=>m`${this.entitySelect(`${this.t(i?"gang_socket":"gang_switch")}${n.length>1?` ${p+1}`:""}`,c.entity,void 0,s,h=>l(p,{entity:h&&h!=="none"?h:null}))}
        ${i?this.entitySelect(`${this.t("furn_power")}${n.length>1?` ${p+1}`:""}`,c.power??null,void 0,o,h=>l(p,{power:h&&h!=="none"?h:null})):v}`)}
      <p class="fp3d-sub fp3d-wide">${this.t(i?"gang_socket_hint":"gang_switch_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${c=>this.updateFurniture({confirm:c.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <div class="fp3d-form">${this.markerSelect(t.marker??null,c=>this.updateFurniture({marker:c}))}${this.iconInput(t.icon,c=>this.updateFurniture({icon:c}))}</div>
    </div>`}renderFurnitureLinks(t){if(!this.hass)return v;let e=this.hass,n=p=>this.keptForPlan(`furniture|${t.id}|${p}`,()=>{let h=structuredClone(this._doc.floors);for(let u of h)for(let f of u.furniture)f.id===t.id&&(f[p]=null);return Re(e,h).get(t.id)?.[p]??null}),i=Yn(t.type),s=xt(t.type),o=Fe(t.type),r=Xu(t.type),l=this.entityOptions(Qu(e,t.type),t.type),d=this.entityOptions(p=>this.isPowerSensor(p)),c=t.type==="fridge_smart"?this.entityOptions(p=>p.startsWith("binary_sensor.")):[];return m`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?m`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(r.label),t.entity??null,n("entity"),l,p=>this.updateFurniture({entity:p}),r.domains)}
        ${t.type==="lamp_fan"?m`${this.entitySelect(this.t("fan_entity"),t.fan??null,void 0,this.entityOptions(p=>p.startsWith("fan.")),p=>this.updateFurniture({fan:p&&p!=="none"?p:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("fan_hint")}</p>`:v}
        ${o?m`${this.entitySelect(this.t("heat_sensor"),t.heat_sensor??null,void 0,this.entityOptions(p=>/^(binary_sensor|sensor|switch|input_boolean|number)\./.test(p)),p=>this.updateFurniture({heat_sensor:p&&p!=="none"?p:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`:v}
        ${Fr(t.type)?m`${this.entitySelect(this.t("temp_sensor"),t.temp_sensor??null,ep(e,{...t,temp_sensor:null}),this.entityOptions(p=>p.startsWith("sensor.")&&e.states[p]?.attributes.device_class==="temperature"||/^(climate|water_heater)\./.test(p)),p=>this.updateFurniture({temp_sensor:p}))}
              <p class="fp3d-sub fp3d-wide">${this.t("temp_sensor_hint")}</p>`:v}
        ${t.type==="awning"?this.renderAwningFields(t):Se(t.type)?this.renderMotionFields(t):v}
        ${!s&&!xe(t.type)&&!yi(t.type)?this.renderStateLinks(t):v}
        ${s&&t.entity&&t.entity!=="none"?m`${this.entitySelect(this.t("furn_color_entity"),t.color_entity??null,void 0,this.entityOptions(p=>p.startsWith("light.")&&p!==t.entity,t.entity),p=>this.updateFurniture({color_entity:p==="none"?null:p}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:v}
        ${s?this.glowScaleField(t.glow_scale,p=>this.updateFurniture({glow_scale:p})):v}
        ${s&&t.entity&&t.entity!=="none"?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!t.only_color} ?disabled=${!this.isEditor} @change=${p=>this.updateFurniture({only_color:p.target.checked?sa:null})} />
                ${this.t("furn_only_color")}</label
              >
              ${t.only_color?m`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <span class="fp3d-colour-row"
                        ><input type="color" .value=${t.only_color} ?disabled=${!this.isEditor} @change=${p=>this.updateFurniture({only_color:p.target.value})} />
                        ${Dn({value:t.only_color,fallback:sa,label:this.t("colour_reset"),disabled:!this.isEditor,onReset:()=>this.updateFurniture({only_color:sa})})}</span
                      ></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:v}`:v}
        ${ws(t.type)?m`${this.entitySelect(this.t("furn_meter_reading"),t.extra??null,void 0,this.entityOptions(p=>p.startsWith("sensor.")&&(["gas","water","volume"].includes(String(e.states[p]?.attributes.device_class??""))||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(String(e.states[p]?.attributes.unit_of_measurement??"")))),p=>this.updateFurniture({extra:p==="none"?null:p}))}`:v}
        ${s||t.type==="grid_point"||ws(t.type)?v:this.entitySelect(this.t(bt(t.type)==="meter"?"energy_grid":bt(t.type)==="inverter"?"energy_solar_sensor":bt(t.type)==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,n("power"),d,p=>this.updateFurniture({power:p}))}
        ${!s&&t.power&&t.power!=="none"&&!xe(t.type)?m`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${t.run_w?String(t.run_w):""}
                ?disabled=${!this.isEditor}
                @change=${p=>{let h=Number(p.target.value);this.updateFurniture({run_w:h>0?Math.min(5e3,Math.round(h)):null})}}
            /></label>`:v}
        ${!s&&t.power&&t.power!=="none"&&!xe(t.type)?this.circuitSelect(t.circuit??null,t.power,p=>this.updateFurniture({circuit:p})):v}
        ${!s&&t.power&&t.power!=="none"&&!xe(t.type)?this.wireEnergySelect(t.energy??null,t.power,p=>this.updateFurniture({energy:p})):v}
        ${!s&&!["grid_point","meter","inverter","home_battery"].includes(bt(t.type)??t.type)?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!this.isEditor} @change=${p=>this.updateFurniture({holo:p.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:bt(t.type)==="inverter"?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${t.plant_card!==!1} ?disabled=${!this.isEditor} @change=${p=>this.updateFurniture({plant_card:p.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${t.plant_card!==!1?m`${this.len(this.t("holo_right"),t.plant_right??0,p=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,k(p)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,p=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,k(p)))||void 0}),.25)}`:v}`:v}
      </div>
      ${bt(t.type)==="meter"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,d,p=>this.updateFurniture({export:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:v}
      ${bt(t.type)==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let p=(this._doc.settings.roof.strings??[]).filter(h=>h.inverter===t.id).map(h=>h.name);return m`<p class="fp3d-sub fp3d-wide">${p.length?this.t("inverter_strings",{names:p.join(", ")}):this.t("inverter_strings_none")}</p>`})():v}
      ${bt(t.type)==="home_battery"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(p=>Et(p)&&(e.states[p]?.attributes.device_class==="battery"||e.states[p]?.attributes.unit_of_measurement==="%")),p=>this.updateFurniture({soc:p==="none"?null:p}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,d,p=>this.updateFurniture({charge:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:v}
      ${bt(t.type)==="wallbox"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(p=>Ei(p)||Et(p)),p=>this.updateFurniture({status:p==="none"?null:p}))}
          </div>`:v}
      ${!s&&!ws(t.type)?this.entitySelect(this.t("furn_extra"),t.extra??null,void 0,this.entityOptions(p=>p.startsWith("sensor.")),p=>this.updateFurniture({extra:p==="none"?null:p})):v}
      ${!s||t.entity?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isEditor} @change=${p=>this.updateFurniture({confirm:p.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,p=>this.updateFurniture({marker:p}))}${this.iconInput(t.icon,p=>this.updateFurniture({icon:p}))}</div>`:v}
      ${te(t.type)?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,Qd(e,Re(e,this._doc.floors).get(t.id)?.entity??null,null),this.entityOptions(p=>Et(p)),p=>this.updateFurniture({room_sensor:p}))}
          </div>`:v}
      ${t.type==="fridge_smart"?m`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,c,p=>this.updateFurniture({door_left:p}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,c,p=>this.updateFurniture({door_right:p}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:v}
      ${yi(t.type)?this.renderPictureRules(t):v}
      <p class="fp3d-sub">${this.t(s?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":te(t.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){let e=this.isEditor,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(y=>y.items.filter($=>$.vehicle).map($=>({id:Zt(y.id,$.id),label:`${Lt($,n)} \xB7 ${qi(y,n)}`}))),s=y=>y.startsWith("device_tracker.")?this.hass?.states[y]?.attributes.source_type==="router"?2:0:1,o=[...this.entityOptions(y=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(y))].sort((y,$)=>s(y.id)-s($.id)),r=this.entityOptions(y=>/^(sensor|input_select|select|input_text)\./.test(y)),l=t.type_entity?this.hass?.states[t.type_entity]:void 0,d=Array.isArray(l?.attributes.options)?l.attributes.options:[],c=t.types??[],p=y=>this.updateFurniture({types:y}),h=(y,$)=>m`<select ?disabled=${!e} @change=${w=>$(w.target.value||null)}>
        <option value="" ?selected=${!y}>${this.t("parking_vehicle_none")}</option>
        ${i.map(w=>m`<option value=${w.id} ?selected=${w.id===y}>${w.label}</option>`)}
      </select>`,u=this.floor,f=u?.rooms.find(y=>y.points.length>=3&&K([t.x,t.z],y.points)),g=t.vehicle?Tt(t.vehicle):void 0,b=g?g.size[2]*(t.scale??1):0,_=!!f&&!!u&&b>u.height+1e-6;return m`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,o,y=>this.updateFurniture({entity:y==="none"?null:y}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${h(t.vehicle??null,y=>this.updateFurniture({vehicle:y}))}</label>
        ${i.length?v:m`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),y=>this.updateFurniture({scale:Math.min(150,Math.max(30,y))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,r,y=>this.updateFurniture({type_entity:y==="none"?null:y}))}
        ${t.type_entity?m`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((y,$)=>m`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${y.state}
                    ?disabled=${!e}
                    @change=${w=>p(c.map((E,x)=>x===$?{...E,state:w.target.value}:E))}
                  />
                  ${h(y.vehicle,w=>p(c.map((E,x)=>x===$?{...E,vehicle:w??""}:E)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>p(c.filter((w,E)=>E!==$))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${d.map(y=>m`<option value=${y}></option>`)}</datalist>
              ${e?m`<button class="fp3d-btn" @click=${()=>p([...c,{state:d[c.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:v}
            </div>`:v}
      </div>
      ${_?m`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Rt(this.hass,b,2),room:Rt(this.hass,u.height,2)})}</p>`:v}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){if(!this.hass)return v;let e=this.hass,n=t.car??{},i=Xd(e,{entity:t.entity,car:{device:n.device}}),s=l=>this.updateFurniture({car:{...n,...l}}),o=this.entityOptions(l=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(l)),r=(l,d,c)=>this.entitySelect(this.t(d),n[l]??null,i[l],c,p=>s({[l]:p==="none"?"none":p}));return m`<section>
      <h3>🚗 ${this.t("section_car")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),n.device??null,void 0,o,l=>s({device:l==="none"?null:l}))}
        ${r("soc","car_soc",this.entityOptions(l=>Et(l)))}
        ${r("range","car_range",this.entityOptions(l=>Et(l)))}
        ${r("charging","car_charging",this.entityOptions(l=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(l)))}
        ${r("plugged","car_plugged",this.entityOptions(l=>Ei(l)))}
        ${r("lock","car_lock",this.entityOptions(l=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(l)))}
        ${r("climate","car_climate",this.entityOptions(l=>/^(climate|switch|binary_sensor|input_boolean)\./.test(l)))}
        ${r("tracker","car_tracker",this.entityOptions(l=>l.startsWith("device_tracker.")))}
      </div>
    </section>`}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!t.includes(i.image)&&t.push(i.image);return t}renderPictureRules(t){let e=this.isEditor,n=t.pictures??[],i=_=>this.updateFurniture({pictures:_}),s=this.entityOptions(()=>!0),o=_=>["string","number","boolean"].includes(typeof _),r=_=>Object.entries(this.hass?.states[_]?.attributes??{}).filter(([y,$])=>o($)&&y!=="friendly_name"&&y!=="icon").map(([y])=>y),l=(_,y)=>{let $=this.hass?.states[_];return $?String((y?$.attributes[y]:$.state)??""):""},d=(_,y)=>{let $=this.hass?.states[_],w=!y&&Array.isArray($?.attributes.options)?$.attributes.options:[];return w.length?w:[l(_,y)]},c=_=>`${_.entity}\0${_.attribute??""}`,p=[];n.forEach((_,y)=>{let $=p.find(w=>c(w)===c(_));$?$.rows.push(y):p.push({entity:_.entity,attribute:_.attribute??null,rows:[y]})});let h=(_,y)=>i(n.map(($,w)=>_.rows.includes(w)?{...$,...y}:$)),u=(_,y)=>i(n.map(($,w)=>w===_?{...$,...y}:$)),f=this.storedPictures(),g=this.entityOptions(_=>_.startsWith("camera.")),b=_=>_.image.startsWith("camera:")?_.image.slice(7):null;return m`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?m`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${_=>this.updateFurniture({screen_bg:_.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:v}
      ${p.map(_=>m`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${s}
            .value=${_.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${y=>{y.stopPropagation(),h(_,{entity:y.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${y=>{let $=y.target.value||null,w=l(_.entity,$);i(n.map((E,x)=>_.rows.includes(x)?{...E,attribute:$,state:_.rows[0]===x?w:E.state}:E))}}
          >
            <option value="" ?selected=${!_.attribute}>${this.t("picture_state_of")}</option>
            ${r(_.entity).map(y=>m`<option value=${y} ?selected=${y===_.attribute}>${y}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(_.entity,_.attribute)||"\u2013"})}</span>
          ${_.rows.map(y=>{let $=n[y],w=!!this.hass&&Yd(this.hass,$);return m`<div class="fp3d-picture-row ${w?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${y}"
                placeholder=${this.t("picture_state")}
                .value=${$.state}
                ?disabled=${!e}
                @change=${E=>u(y,{state:E.target.value})}
              />
              <datalist id="fp3d-picture-states-${y}"><option value="*"></option>${d(_.entity,_.attribute).map(E=>m`<option value=${E}></option>`)}</datalist>
              ${this._images[$.image]?m`<img class="fp3d-picture-thumb" src=${this._images[$.image].url} alt="" /> `:v}
              ${b($)&&this.hass?.states[b($)]?.attributes.entity_picture?m`<img class="fp3d-picture-thumb" src=${String(this.hass.states[b($)].attributes.entity_picture)} alt="" />`:v}
              <label class="fp3d-btn fp3d-picture-pick">
                ${$.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${E=>{this.uploadPicture(E,t,y)}} />
              </label>
              ${f.filter(E=>E!==$.image).length?m`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(E=>E!==$.image&&this._images[E]).map(E=>m`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>u(y,{image:E})}><img src=${this._images[E].url} alt="" /></button>`)}
                  </div>`:v}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test($.image)?$.image:""}
                ?disabled=${!e}
                @change=${E=>{let x=E.target.value.trim();x&&u(y,{image:x})}}
              />
              ${g.length?m`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${g}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${b($)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${E=>{E.stopPropagation(),E.detail.value!=="none"?u(y,{image:`camera:${E.detail.value}`}):b($)&&u(y,{image:""})}}
                  ></fp3d-entity-picker>`:v}
              <span class="fp3d-sub">${w?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>i(n.filter((E,x)=>x!==y))}>✕</button>
            </div>`})}
          ${e?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:_.entity,attribute:_.attribute,state:l(_.entity,_.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:v}
        </div>`)}
      ${e?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:s[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:v}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){let i=t.target,s=i.files?.[0];if(i.value="",!!s)try{await this.storePicture(s,e,n)}catch(o){await this.tell(this.t("picture_failed",{error:Nn(o)}))}}async storePicture(t,e,n){let i=await createImageBitmap(t),s=Math.min(1,512/Math.max(i.width,i.height)),o=document.createElement("canvas");o.width=Math.round(i.width*s),o.height=Math.round(i.height*s),o.getContext("2d").drawImage(i,0,0,o.width,o.height);let r=o.toDataURL(t.type==="image/png"?"image/png":"image/jpeg",.85),l=j("pic");await jn(this.hass,l,r,this.home),this._images={...this._images,[l]:{url:r,aspect:o.height/o.width}};let d=this.furnitureItem?.id===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:d.map((c,p)=>p===n?{...c,image:l}:c)})}};var Vm="planPinZoom";function Cm(a){if(a==null||a.trim()==="")return 40;let t=Number(a);return Number.isFinite(t)&&t>=0?Math.min(400,t):40}function oa(){try{return Cm(localStorage.getItem(`home3d.${Vm}`))}catch{return 40}}function ra(a,t){return t<=0||a>=t}var Dm=/^[a-z_]+\.[a-z0-9_]+$/;function ao(a,t){if(typeof a=="string")Dm.test(a)&&t.add(a);else if(Array.isArray(a))for(let e of a)ao(e,t);else if(a&&typeof a=="object")for(let e of Object.values(a))ao(e,t)}function Wm(a,t=[]){let e=new Set(t);for(let n of a.floors){for(let i of n.placements)e.add(i.entity_id);ao(n.furniture,e),ao(n.openings,e)}return e}function th(a,t,e={}){let n=Wm(t,e.linked),i=new Set(e.hidden??t.settings.unplaced_hidden??[]),s=d=>a.entities?.[d]?.device_id??null,o=new Set([...n].map(s).filter(d=>!!d)),r=new Map;for(let d of t.floors)for(let c of d.rooms)c.area_id&&!r.has(c.area_id)&&r.set(c.area_id,{floorId:d.id,roomId:c.id});let l=[];for(let d of Object.keys(a.areas??{})){let c=Yt(a,d).filter(u=>Ie(nt(u))),p=hn(a,c).filter(u=>![u.primary,...u.others].some(f=>n.has(f)||o.has(s(f)??""))).map(u=>u.primary).filter(u=>!i.has(u));if(!p.length)continue;let h=r.get(d);l.push({areaId:d,name:a.areas?.[d]?.name??d,floorId:h?.floorId??null,roomId:h?.roomId??null,ids:p})}return l.sort((d,c)=>d.name.localeCompare(c.name))}function Nm(a){if(xt(a))return"light";if(a==="ac_unit"||Fe(a))return"climate";if(Ye(a))return"camera";if(oo(a))return"media_player";if(te(a))return"vacuum";let t=Se(a);return a==="awning"||t==="curtain"||t==="blind"?"cover":null}function Zu(a){return new Set(a.toLowerCase().split(/[^a-z0-9äöüß]+/).filter(t=>t.length>=3))}function eh(a,t,e,n=new Map){let i=[];for(let r of e){let l=t.floors.flatMap(d=>d.rooms.filter(c=>c.area_id===r.areaId&&c.points.length>=3).flatMap(c=>d.furniture.filter(p=>K([p.x,p.z],c.points)).map(p=>({floorId:d.id,f:p}))));for(let{floorId:d,f:c}of l){if(c.entity!=null||n.get(c.id)?.entity||!qe(c.type))continue;let p=Zu(`${c.name??""} ${c.type.split(":").pop().replace(/_/g," ")}`),h=Nm(c.type);for(let u of r.ids){if(!ia(a,c.type,u))continue;let f=[...Zu(`${et(a,u)} ${u.split(".")[1].replace(/_/g," ")}`)].filter(b=>p.has(b)).length,g=(h&&u.startsWith(`${h}.`)?2:0)+f;g>=2&&i.push({entity:u,floorId:d,f:c,score:g})}}}i.sort((r,l)=>l.score-r.score);let s=new Map,o=new Set;for(let r of i)s.has(r.entity)||o.has(r.f.id)||(o.add(r.f.id),s.set(r.entity,{floorId:r.floorId,furnitureId:r.f.id}));return s}function nh(a,t,e){let n=(a.unplaced_hidden??[]).filter(i=>i!==t);return e?[...n,t]:n}function ih(a,t){return(t.settings.unplaced_hidden??[]).filter(e=>!!a.states[e]).map(e=>{let n=pe(a,e);return{id:e,area:n?a.areas?.[n]?.name??n:null}}).sort((e,n)=>et(a,e.id).localeCompare(et(a,n.id)))}var On={eye:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z",slash:"M4 4l16 16",text:"M4 7h16M4 12h10M4 17h13",star:"M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"},di=(a,t=!1,e=!1)=>I`<svg viewBox="0 0 24 24" width="18" height="18" fill=${e?"currentColor":"none"} stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${a} />${t?I`<path d=${On.slash} />`:v}</svg>`,lo=class{placeDevices(t,e,n){let i=e??this.room;if(!i||!t.length||!this.isEditor)return;let s=new Set(t);this.change((o,r)=>{let l=n&&o.floors.find(c=>c.id===n)||r;for(let c of o.floors)c.placements=c.placements.filter(p=>!s.has(p.entity_id)),c.furniture=c.furniture.filter(p=>!(xt(p.type)&&p.entity&&s.has(p.entity)));let d=[...l.placements.map(c=>[c.x,c.z]),...l.furniture.filter(c=>xt(c.type)).map(c=>[c.x,c.z])];for(let c of Ud(i,t,d)){if(!c.entity_id.startsWith("light.")||i.outdoor){l.placements.push(c);let f=c.entity_id.startsWith("camera.")&&this.hass?mn(this.hass,c.entity_id,this.packs??[]):null;f&&Qe(l,c.entity_id,f);continue}let[p,h,u]=Pe.lamp_ceiling;l.furniture.push({id:j("furniture"),type:"lamp_ceiling",x:c.x,z:c.z,rotation:0,w:p,d:h,h:u,variant:null,entity:c.entity_id,power:null})}})}acceptLink(t,e){this.change(n=>{let i=n.floors.find(s=>s.id===e.floorId)?.furniture.find(s=>s.id===e.furnitureId);i&&(i.entity=t)})}setUnplacedHidden(t,e){this.change(n=>{n.settings.unplaced_hidden=nh(n.settings,t,e)})}renderUnplaced(){let t=this.hass;if(!t||!this.isEditor||!t.areas)return v;let e=this._doc,n=this._unplacedOpen,i=(e.settings.unplaced_hidden??[]).length,s=r=>m`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${kn(nt(r)??"sensor")} /></svg>`,o=()=>{if(this._unplacedHiddenView){let b=ih(t,e);return m`<button class="fp3d-link" @click=${()=>this._unplacedHiddenView=!1}>← ${this.t("unplaced_back")}</button>
          ${b.length?m`<div class="fp3d-room-list">
                ${b.map(_=>m`<div class="fp3d-row fp3d-dev-row">
                    <span class="fp3d-dev-name">${s(_.id)}<span>${et(t,_.id)}${_.area?m`<small class="fp3d-muted"> · ${_.area}</small>`:v}</span></span>
                    <button class="fp3d-link" @click=${()=>this.setUnplacedHidden(_.id,!1)}>${this.t("unplaced_unhide")}</button>
                  </div>`)}
              </div>`:m`<p class="fp3d-sub">${this.t("unplaced_hidden_none")}</p>`}`}let r=Re(t,e.floors),l=[...r.values()].flatMap(b=>[b.entity,b.power]).filter(b=>!!b),d=this._floorId,c=th(t,e,{linked:l}).sort((b,_)=>+(_.floorId===d)-+(b.floorId===d)),p=eh(t,e,c,r),h=b=>{let _=e.floors.find(y=>y.id===b.floorId)?.furniture.find(y=>y.id===b.furnitureId);return _?_.name||lt(t,_.type):""},u=80,f=0,g=c.reduce((b,_)=>b+_.ids.length,0);return m`<p class="fp3d-sub">${this.t("unplaced_hint")}</p>
        ${c.length?m`<div class="fp3d-room-list">
                ${c.map(b=>{let _=b.ids.slice(0,Math.max(0,u-f));if(f+=_.length,!_.length)return v;let y=e.floors.find(w=>w.id===b.floorId),$=y?.rooms.find(w=>w.id===b.roomId);return m`<div class="fp3d-dev-area">${b.name}${$?v:m`<small class="fp3d-muted"> · ${this.t("unplaced_no_room")}</small>`}</div>
                    ${_.map(w=>{let E=p.get(w);return m`<div
                        class="fp3d-row fp3d-dev-row fp3d-unplaced-row"
                        draggable="true"
                        title=${this.t("unplaced_drag")}
                        @dragstart=${x=>{x.dataTransfer?.setData($i,w),x.dataTransfer&&(x.dataTransfer.effectAllowed="copy")}}
                      >
                        <span class="fp3d-dev-name">${s(w)}<span>${et(t,w,b.name)}</span></span>
                        ${E?m`<button class="fp3d-link fp3d-suggest" @click=${()=>this.acceptLink(w,E)}>${this.t("unplaced_link",{name:h(E)})}</button>`:v}
                        ${$&&y?m`<button class="fp3d-link" @click=${()=>this.placeDevices([w],$,y.id)}>${this.t("devices_place")}</button>`:v}
                        <button class="fp3d-pin" title=${this.t("unplaced_hide")} aria-label=${this.t("unplaced_hide")} @click=${()=>this.setUnplacedHidden(w,!0)}>🙈</button>
                      </div>`})}`})}
              </div>
              ${g>f?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:g-f})}</p>`:v}`:m`<p class="fp3d-sub">${this.t("unplaced_none")}</p>`}
        ${i?m`<button class="fp3d-link" @click=${()=>this._unplacedHiddenView=!0}>${this.t("unplaced_hidden",{n:i})}</button>`:v}`};return m`<section>
      <details class="fp3d-points fp3d-unplaced" ?open=${n} @toggle=${r=>this._unplacedOpen=r.target.open}>
        <summary>${this.t("unplaced")}</summary>
        ${n?o():v}
      </details>
    </section>`}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Kt(i.placements.find(s=>s.entity_id===e),t))}centreDevice(){let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=this.floor?.rooms.find(o=>o.id===e);if(!t||!n)return;let[i,s]=jt(n.points);this.updateDevice({x:k(i),z:k(s)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(p=>nt(p.entity_id)==="light"&&(p.mount??"ceiling")==="ceiling"&&K([p.x,p.z],t.points));if(n.length<2)return;let i=ft(t.points),s=i.x1-i.x0,o=i.z1-i.z0,r=Math.max(1,Math.round(Math.sqrt(n.length*s/Math.max(.1,o)))),l=Math.ceil(n.length/r),d=n.map((p,h)=>{let u=Math.floor(h/r),f=u===l-1?n.length-r*(l-1):r,g=h-u*r;return[k(i.x0+s/f*(g+.5)),k(i.z0+o/l*(u+.5))]}),c=n.map(p=>p.entity_id);this.change((p,h)=>{c.forEach((u,f)=>Kt(h.placements.find(g=>g.entity_id===u),{x:d[f][0],z:d[f][1]}))})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(xt(i.type)&&i.entity===t))})}renderPets(t){if(this._doc.settings.pets?.on===!1)return v;let e=!ra(this._view.scale,oa());return I`<g>${Wl(this._doc,t.id).map(n=>{if(e&&!(this.room&&K([n.x,n.z],this.room.points)))return v;let[i,s]=this.toScreen([n.x,n.z]);return I`<g data-pet=${n.id} class="fp3d-device fp3d-pet" transform="translate(${i} ${s})">
        <title>${n.name||this.t(`pet_kind_${n.kind}`)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${uc} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderDevices(t){let e=!ra(this._view.scale,oa()),n=e?this.room:void 0,i=this.drag&&"id"in this.drag?this.drag.id:null;return I`<g>${t.placements.map(s=>{let o=nt(s.entity_id);if(!o)return v;if(e&&s.entity_id!==this._deviceId&&s.entity_id!==i&&!(n&&K([s.x,s.z],n.points)))return v;let[r,l]=this.toScreen([s.x,s.z]),d=this.hass?.states[s.entity_id]?.state==="on",c=s.entity_id===this._deviceId,p=`fp3d-device${d?" fp3d-device-on":""}${c?" fp3d-device-sel":""}`;return I`<g data-device=${s.entity_id} class=${p} transform="translate(${r} ${l})">
        <title>${et(this.hass,s.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${kn(o)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${c&&s.locked?I`<text class="fp3d-lock" x=${r+16} y=${l-12}>🔒</text>`:v}`})}</g>`}renderDeviceForm(t){let e=this.isEditor,n=nt(t.entity_id),i=n==="light",s=t.mount??"ceiling",o=n?bi(n,this.floor?.height??2.5,i?s:null):1;return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?kn(n):""} />
        </svg>
        ${et(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?m`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(r=>m`<option value=${r} ?selected=${r===s}>${this.t(`lamp_${r}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(t.glow_scale,r=>this.updateDevice({glow_scale:r}))}`:n==="camera"?m`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >${this.renderCameraModel(t)}`:v}
        ${this.len(this.t("x"),t.x,r=>this.updateDevice({x:r}))} ${this.len(this.t("z"),t.z,r=>this.updateDevice({z:r}))}
        ${this.len(this.t("marker_height"),t.y??o,r=>this.updateDevice({y:Math.max(0,r)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,r=>this.updateDevice({rotation:(r%360+360)%360}),1)}
        ${n==="camera"?m`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),r=>this.updateDevice({fov:Math.min(360,Math.max(10,r))}),5,10)}
            ${this.len(this.t("camera_reach"),t.reach??(t.mount==="ceiling"?3:4.5),r=>this.updateDevice({reach:Math.min(50,Math.max(.5,r))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),t.tilt??(t.mount==="ceiling"?65:20),r=>this.updateDevice({tilt:Math.min(90,Math.max(0,r))}),5,0)}
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${t.detect_pins!==!1} ?disabled=${!e} @change=${r=>this.updateDevice({detect_pins:r.target.checked?null:!1})} />
              ${this.t("camera_detect_pins")}</label
            >
            ${this.renderCameraDetections(t.entity_id)}`:v}
        ${n&&Dd.has(n)?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${r=>this.updateDevice({confirm:r.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:v}
        ${ri(this.hass,t.entity_id)?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!e} @change=${r=>this.updateDevice({holo:r.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:v}
        ${ri(this.hass,t.entity_id)?this.circuitSelect(t.circuit??null,ri(this.hass,t.entity_id),r=>this.updateDevice({circuit:r})):v}
        ${ri(this.hass,t.entity_id)?this.wireEnergySelect(t.energy??null,ri(this.hass,t.entity_id),r=>this.updateDevice({energy:r})):v}
        ${this.markerSelect(t.marker??null,r=>this.updateDevice({marker:r}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${t.name??""} ?disabled=${!e} maxlength="60" placeholder=${et(this.hass,t.entity_id)} @change=${r=>this.updateDevice({name:r.target.value.trim()||null})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!e} placeholder=${this.t("aliases_placeholder")} @change=${r=>this.updateDevice({aliases:Cn(r.target.value)})}
        /></label>
        ${t.name?m`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${r=>this.updateDevice({show_name:r.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:v}
        ${this.iconInput(t.icon,r=>this.updateDevice({icon:r}))}
      </div>
      ${this.renderItemActions(t.actions,t.entity_id,r=>this.updateDevice({actions:r}))}
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?m`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:v}
            ${this.renderAsFurniture(t)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:v}
    </section>`}renderDeviceList(t){let e=this.isEditor,n=this.hass,i=t.area_id?n?.areas?.[t.area_id]?.name:void 0,s=n?Yt(n,t.area_id).filter(x=>Ie(nt(x))):[],o=new Set([...this.floor?.placements.filter(x=>K([x.x,x.z],t.points)).map(x=>x.entity_id)??[],...this.floor?.furniture.filter(x=>xt(x.type)&&x.entity&&K([x.x,x.z],t.points)).map(x=>x.entity)??[]]),r=n?[...s,...[...o].filter(x=>!s.includes(x)&&qn(n,x)&&Ie(nt(x)))]:s,l=n?hn(n,r):[],d=l.map(x=>x.primary).filter(x=>!o.has(x)),c=this._deviceQuery.trim().toLowerCase(),p=x=>!c||et(n,x,i).toLowerCase().includes(c)||x.includes(c),h=this.floor?.placements.filter(x=>nt(x.entity_id)==="light"&&(x.mount??"ceiling")==="ceiling"&&K([x.x,x.z],t.points)).length,u=new Set(t.panel??[]),f=new Set(t.hidden??[]),g=new Set(t.no_state??[]),b=new Map;for(let x of this._doc.floors)for(let M of[...x.placements.map(R=>[R.entity_id,R.x,R.z]),...x.furniture.filter(R=>xt(R.type)&&R.entity).map(R=>[R.entity,R.x,R.z])]){let R=x.rooms.find(T=>K([M[1],M[2]],T.points));R&&R.id!==t.id&&b.set(M[0],R.name)}let _=(x,M=!1,R=i,T=!1)=>{let L=o.has(x),P=L?void 0:b.get(x);return m`<div class="fp3d-row fp3d-dev-row ${M||T?"fp3d-dev-extra":""} ${f.has(x)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${L?"":"fp3d-muted"}" ?disabled=${!L} @click=${()=>this.selectItem("device",x)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${kn(nt(x))} />
          </svg>
          <span>${et(n,x,R)}${P?m`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:P})}</small>`:v}</span>
        </button>
        ${e&&!M?m`<button
              class="fp3d-pin ${f.has(x)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(x)}
              title=${this.t(f.has(x)?"panel_unhide":"panel_hide")}
              aria-label=${this.t(f.has(x)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:f.has(x)?[...f].filter(A=>A!==x):[...f,x]})}
            >
              ${di(On.eye,f.has(x))}
            </button>`:v}
        ${e&&!M&&!f.has(x)?m`<button
              class="fp3d-pin ${g.has(x)?"fp3d-pin-on":""}"
              aria-pressed=${g.has(x)}
              title=${this.t(g.has(x)?"panel_state_show":"panel_state_hide")}
              aria-label=${this.t(g.has(x)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:g.has(x)?[...g].filter(A=>A!==x):[...g,x]})}
            >
              ${di(On.text,g.has(x))}
            </button>`:v}
        ${e&&!L?m`<button
              class="fp3d-pin ${u.has(x)?"fp3d-pin-on":""}"
              aria-pressed=${u.has(x)}
              title=${this.t(u.has(x)?"panel_unpin":"panel_pin")}
              aria-label=${this.t(u.has(x)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:u.has(x)?[...u].filter(A=>A!==x):[...u,x]})}
            >
              ${di(On.star,!1,u.has(x))}
            </button>`:v}
        ${e?L?m`<button class="fp3d-link" @click=${()=>this.removeDevice(x)}>${this.t("devices_remove")}</button>`:m`<button class="fp3d-link" @click=${()=>this.placeDevices([x])}>${this.t("devices_place")}</button>`:v}
      </div>`},y=e?this._devSource:"area",$=x=>{this._devSource=x,this._deviceQuery=""},w=m`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${x=>this._deviceQuery=x.target.value}
    />`,E=async()=>{await this.ask(this.t("devices_place_all_confirm",{n:d.length}),this.t("ask_ok"),!1)&&this.placeDevices(d)};return m`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e&&y==="area"&&r.length?m`<p class="fp3d-dev-legend">
            <span>${di(On.eye)}${this.t("devices_legend_hide")}</span>
            <span>${di(On.text)}${this.t("devices_legend_state")}</span>
            <span>${di(On.star)}${this.t("devices_legend_pin")}</span>
          </p>`:v}
      ${e?m`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${y==="area"} @click=${()=>$("area")}>${this.t("devices_src_area")}${r.length?` (${l.length})`:""}</button>
            <button aria-pressed=${y==="other"} @click=${()=>$("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${y==="none"} @click=${()=>$("none")}>${this.t("devices_src_none")}</button>
          </div>`:v}
      ${y!=="area"?m`${w}${this.renderDeviceExtras(t,_,y)}`:t.area_id?r.length?m`${e&&(h??0)>=2?m`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:v}
              ${r.length>8?w:v}
              <div class="fp3d-room-list">
                ${l.map(x=>{let M=x.others.filter(p),R=this._expanded.has(x.primary)||!!c&&M.length>0;return!p(x.primary)&&!M.length?v:m`${_(x.primary)}
                  ${x.others.length?m`<button
                        class="fp3d-more"
                        @click=${()=>{let T=new Set(this._expanded);T.has(x.primary)?T.delete(x.primary):T.add(x.primary),this._expanded=T}}
                      >
                        ${R?this.t("devices_less"):this.t("devices_more",{n:x.others.length})}
                      </button>`:v}
                  ${R?this.renderDeviceOthers(c?M:x.others,T=>_(T,!1,i,!0),f,e):v}`})}
              </div>
              ${e&&d.length>1?m`<button class="fp3d-link fp3d-place-all" @click=${E}>${this.t("devices_place_all_n",{n:d.length})}</button>`:v}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceOthers(t,e,n,i){let o=t.every(l=>n.has(l)),r=()=>{let l=new Set(n);for(let d of t)o?l.delete(d):l.add(d);this.updateRoom({hidden:[...l]})};return m`${i&&t.length>=5?m`<button class="fp3d-link fp3d-dev-all" @click=${r}>
            ${this.t(o?"devices_show_all":"devices_hide_all",{n:t.length})}
          </button>`:v}
      ${t.slice(0,40).map(e)}
      ${t.length>40?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:t.length-40})}</p>`:v}`}renderDeviceExtras(t,e,n){let i=this.hass;if(!i)return v;let s=50,o=this._deviceQuery.trim().toLowerCase(),r=(c,p)=>!o||`${et(i,c,p)} ${c} ${p??""}`.toLowerCase().includes(o),l=c=>c>0?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:c})}</p>`:v;if(n==="other"){let c=0,p=0,h=Nd(i,t.area_id).map(u=>{let f=u.ids.filter(b=>r(b,u.name)),g=f.slice(0,Math.max(0,s-c));return c+=g.length,p+=f.length-g.length,g.length?m`<div class="fp3d-dev-area">${u.name}</div>${g.map(b=>e(b,!1,u.name))}`:v});return c?m`<div class="fp3d-room-list">${h}</div>${l(p)}`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let d=jd(i).filter(c=>r(c));return d.length?m`<div class="fp3d-room-list">${d.slice(0,s).map(c=>e(c))}</div>${l(d.length-Math.min(d.length,s))}`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`}};var co=class{renderCameraModel(t){let e=this.hass?.language??"en",n=this.packs??[],i=n.flatMap(r=>r.items.filter(hs).map(l=>({type:Zt(r.id,l.id),label:Lt(l,e)}))).sort((r,l)=>r.label.localeCompare(l.label));if(!i.length)return v;let s=this.floor?.furniture.find(r=>r.look_of===t.entity_id)?.type??"",o=this.hass?mn(this.hass,t.entity_id,n):null;return m`<label class="fp3d-field fp3d-wide" title=${this.t("camera_model_hint")}
      >${this.t("camera_model")}
      <select
        ?disabled=${!this.isEditor}
        @change=${r=>{let l=r.target.value;this.change((d,c)=>Qe(c,t.entity_id,l||null))}}
      >
        <option value="" ?selected=${!s}>${this.t("camera_look_builtin")}</option>
        ${s&&!i.some(r=>r.type===s)?m`<option value=${s} selected>${lt(this.hass,s)}</option>`:v}
        ${i.map(r=>m`<option value=${r.type} ?selected=${r.type===s}>${r.type===o?this.t("camera_model_found",{name:r.label}):r.label}</option>`)}
      </select></label
    >`}renderCameraDetections(t){if(!this.hass)return v;let e=this.hass,n=this.floor?.placements.find(h=>h.entity_id===t),i=Array.isArray(n?.detect_sensors)?n.detect_sensors:null,s=Pr(e,t),o=rp(e,t),r=[...new Set(o.map(h=>ip(e,h)))],l=this.isEditor,d=h=>this.updateDevice({detect_sensors:h}),c=h=>h.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(e.states[h]?.attributes.device_class)),p=[...new Set([...s,...i??[]])];return m`<p class="fp3d-sub fp3d-wide">
        ${o.length?m`${this.t("camera_detect_found",{kinds:r.map(h=>this.t(`detect_${h}`)).join(", "),n:o.length})}`:this.t("camera_detect_none")}
      </p>
      <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_choose_hint")}
        ><input type="checkbox" .checked=${i!==null} ?disabled=${!l} @change=${h=>d(h.target.checked?[...s]:null)} />
        ${this.t("camera_detect_choose")}</label
      >
      ${i!==null?m`${p.map(h=>m`<label class="fp3d-check fp3d-wide fp3d-indent"
                  ><input type="checkbox" .checked=${i.includes(h)} ?disabled=${!l} @change=${u=>d(u.target.checked?[...i,h]:i.filter(f=>f!==h))} />
                  ${et(e,h)} <span class="fp3d-sub">${h}</span></label
                >`)}
            ${this.entitySelect(this.t("camera_detect_add"),null,void 0,this.entityOptionsFor(this.detectFilter(c,p)),h=>{h&&h!=="none"&&d([...i,h])})}`:v}`}detectFilter(t,e){let n=e.join(",");return this._detectFilter?.key!==n&&(this._detectFilter={key:n,fn:i=>t(i)&&!e.includes(i)}),this._detectFilter.fn}};var po=class{hintText(){let t=this.drag?this._guides.lines?.[0]?.label:void 0,e=(i,s)=>Xn(Oe(),i,(o,r)=>this.t(o,r),s);if(t)return e("hint_snapped",{what:t});let n=this.hintKeyNow();return n==="hint_place"&&this._placing?e("hint_place",{name:lt(this.hass,this._placing.type)}):n==="hint_opening"?this._openingNote??this._openingHover??e("hint_opening",{kind:this.t(`preset_${this._openingPreset}`)}):e(n)}hintKeyNow(){let t=this.floor;return rc({tool:this._tool,hasFloor:!!t,rooms:t?.rooms.length??0,placing:!!this._placing,selected:this._deviceId?"device":this._furnitureId?"furniture":this._openingId?"opening":this._roomId?"room":null,wallPick:this._wallPick,kerbPick:this._kerbPick,fixedHint:this._fixedHint,outdoorFree:!!this._outdoorFree,jointPlace:!!this._jointPlace,pipeMode:!!this._pipeMode,poolArea:!!this.poolArea,pipeDraft:!!this._pipeDraft,poolTech:hl("pool")})}setTool(t){let e=this.floor;if(t!==this._tool&&(this.clearToolSelection(),(t==="roof"||t==="energy")&&(this._roomId=null)),this._tool=t,t!=="select"&&t!=="furniture"&&this.cancelPlacing(),this._draft=[],this._cursor=null,this._notice=null,this._rectName="",this._openingNote=null,this.openingHoverText=null,this._pipeMode=!1,this._pipeDraft=null,t==="pool"&&this.outdoorArea?.type!=="pool"){let n=e?.outdoor.find(i=>i.type==="pool");n&&this.selectItem("outdoor",n.id)}this.setSideFolded(!1)}renderToolBar(t,e=v){let n=this.isEditor,i=!t||!n,s=Xi.filter(g=>g!=="pool"),o={tool:"rect",label:this.t("tool_room"),choices:()=>[{label:this.t("tool_rect"),on:this._tool==="rect",pick:()=>this.setTool("rect")},{label:this.t("tool_polygon"),on:this._tool==="polygon",pick:()=>this.setTool("polygon")},{label:this.t("tool_measure"),on:this._tool==="measure",pick:()=>this.setTool("measure")}]},r={tool:"outdoor",label:this.t("tool_outdoor"),choices:()=>[...s.map(g=>({label:this.t(`out_${g}`),on:this._tool==="outdoor"&&(this._outdoorType??"lawn")===g,pick:()=>{this.setTool("outdoor"),this._outdoorType=g}})),{label:this.t("outdoor_shape_rect"),on:this._tool==="outdoor"&&!this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!1)},{label:this.t("outdoor_shape_free"),on:this._tool==="outdoor"&&this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!0)}]},l={tool:"pool",label:this.t("tool_pool"),choices:()=>[...["rect","round","oval","free"].map(g=>({label:this.t(`pool_shape_${g}`),on:this._tool==="pool"&&!this._pipeMode&&(this._poolShape??"rect")===g,pick:()=>{this.setTool("pool"),this._poolShape=g,this._outdoorFree=g==="free"}})),...this.pipeRules?[{label:this.t("pool_pipe_draw"),on:this._tool==="pool"&&!!this._pipeMode,pick:()=>(this.setTool("pool"),this._pipeMode=!0)}]:[]]},d=[{id:"build",label:this.t("tool_group_build"),entries:[o,{tool:"wall",label:this.t("tool_wall")},{tool:"opening",label:this.t("tool_opening")},{tool:"hole",label:this.t("tool_hole")},{tool:"roof",label:this.t("tool_roof")}]},{id:"outside",label:this.t("tool_group_outside"),entries:[r,l]}],c=g=>g.tool===this._tool||g===o&&(this._tool==="polygon"||this._tool==="measure"),p=g=>g===l?this._pipeMode?this.t("pool_pipe_draw"):this.t(`pool_shape_${this._poolShape??"rect"}`):g===r?this.t(`out_${this._outdoorType??"lawn"}`):g===o?this.t(`tool_${this._tool}`):"",h=()=>(this._toolMenu=null,this._toolOpen=null),u=(g,b,_)=>m`<button aria-pressed=${this._tool===g} ?disabled=${i} @click=${()=>(h(),this.setTool(g))}>${Dt(_)} ${b}</button>`,f={build:"wall",outside:"tree"};return m`<span class="fp3d-tb-sep"></span>
      <div class="fp3d-seg fp3d-seg-menu fp3d-seg-tools" role="group" aria-label=${this.t("tools")}>
        <button aria-pressed=${this._tool==="select"} ?disabled=${!t} @click=${()=>(h(),this.setTool("select"))}>${Dt("pointer")} ${this.t("tool_select")}</button>
        ${d.map(g=>{let b=g.entries.find(c),_=this._toolMenu===g.id,y=b?`${b.label}${p(b)?`: ${p(b)}`:""}`:g.label;return m`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!b} aria-haspopup="menu" aria-expanded=${_} ?disabled=${i} @click=${()=>this.openToolMenu(_?null:g.id)}>
              ${Dt(f[g.id]??"wall")} ${y} <span class="fp3d-caret">▾</span>
            </button>
            ${_?m`<div class="fp3d-menu-veil" @click=${h}></div>
                  <div class="fp3d-menu" role="menu" @keydown=${$=>this.menuKeys($)}>
                    ${g.entries.map($=>{let w=$.choices?.()??[],E=this._toolOpen===$.tool;return m`<button
                          role="menuitem"
                          class="fp3d-menu-item ${c($)?"fp3d-menu-on":""}"
                          aria-expanded=${w.length?E:v}
                          @click=${()=>{w.length?this._toolOpen=E?null:$.tool:(this.setTool($.tool),h())}}
                        >
                          ${$.label}${w.length?m`<span class="fp3d-menu-more">${E?"\u25BE":"\u25B8"}</span>`:v}
                        </button>
                        ${E?m`<div class="fp3d-menu-sub">
                              ${w.map(x=>m`<button
                                    class="fp3d-chip ${x.on?"fp3d-menu-on":""}"
                                    @click=${()=>{x.pick(),this._draft=[],h()}}
                                  >
                                    ${x.label}
                                  </button>`)}
                            </div>`:v}`})}
                  </div>`:v}
          </div>`})}
        ${u("furniture",this.t("tool_furniture"),"sofa")} ${u("energy",this.t("tool_energy"),"bolt")}
      </div>
      <span class="fp3d-tb-sep"></span>
      <!-- Wall view is a mode: beside the tools, kept away from the view buttons by undo / redo (#91) -->
      <div class="fp3d-seg fp3d-seg-menu">
        <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${g=>(h(),this.toggleWallPick(g.currentTarget))}>${this.t("wall_view")}</button>
      </div>
      <span class="fp3d-tb-sep"></span>
      <div class="fp3d-seg fp3d-seg-menu fp3d-seg-undo">
        <button class="fp3d-undo" ?disabled=${!this._canUndo} @click=${()=>this.undo()} title=${`${this.t("undo")} (Ctrl+Z)`} aria-label=${this.t("undo")}>${Dt("undo")}<span class="fp3d-tool-word">${this.t("undo")}</span></button>
        <button class="fp3d-undo" ?disabled=${!this._canRedo} @click=${()=>this.redo()} title=${`${this.t("redo")} (Ctrl+Y)`} aria-label=${this.t("redo")}>${Dt("redo")}<span class="fp3d-tool-word">${this.t("redo")}</span></button>
      </div>
      ${e}
      <span class="fp3d-tb-grow"></span>
      <div class="fp3d-seg fp3d-seg-menu fp3d-seg-views">
        <button class="fp3d-fit-btn" title=${this.t("fit_hint")} @click=${()=>(h(),this.fit())}>${Dt("expand")} ${this.t("fit")}</button>
        <button class="fp3d-split-btn" aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>(h(),this.toggleSplit())}>${Dt(this._split?"split-on":"split-off")} ${this.t("split_3d")}</button>
      </div>
      ${this.renderMoreMenu(h)}`}openToolMenu(t){this._toolMenu=t,this._toolOpen=null,this._floorMenu=!1,this._viewMenu=!1,t&&this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-toolbar .fp3d-menu [role^='menuitem']")?.focus())}menuKeys(t){let e=t.currentTarget,n=[...e.querySelectorAll("[role^='menuitem']")],i=e.getRootNode(),s=n.indexOf(i.activeElement),o=t.key==="ArrowDown"?(s+1)%n.length:t.key==="ArrowUp"?(s-1+n.length)%n.length:t.key==="Home"?0:t.key==="End"?n.length-1:-1;if(o>=0&&n.length)t.preventDefault(),n[o].focus();else if(t.key==="Escape"){t.preventDefault(),t.stopPropagation();let r=e.closest(".fp3d-menu-wrap")?.querySelector(":scope > button");this._toolMenu=null,this._toolOpen=null,this._floorMenu=!1,r?.focus()}}hasOutside(t){if(!t)return!1;if(t.outdoor.length)return!0;let e=t.rooms.flatMap(c=>c.points);if(!e.length)return t.furniture.length>0||t.placements.length>0;let n=e.map(c=>c[0]),i=e.map(c=>c[1]),[s,o,r,l]=[Math.min(...n),Math.max(...n),Math.min(...i),Math.max(...i)],d=(c,p)=>c<s||c>o||p<r||p>l;return t.furniture.some(c=>d(c.x,c.z))||t.placements.some(c=>d(c.x,c.z))}renderMoreMenu(t){let e=this._toolMenu==="more",n=(i,s,o,r,l="")=>m`<button role="menuitem" class="fp3d-menu-item ${l}" @click=${()=>(t(),r())}>${Dt(i)} ${s}<span class="fp3d-menu-more">${o}</span></button>`;return m`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-more">
      <div class="fp3d-menu-wrap">
        <button class="fp3d-more-btn" aria-haspopup="menu" aria-expanded=${e} @click=${()=>this.openToolMenu(e?null:"more")}>
          ${Dt("more")} <span class="fp3d-tool-word">${this.t("more")}</span> <span class="fp3d-caret">${e?"\u25B4":"\u25BE"}</span>
        </button>
        ${e?m`<div class="fp3d-menu-veil" @click=${t}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu" @keydown=${i=>this.menuKeys(i)}>
                ${this.hasOutside(this.floor)?n("tree",this.t("fit_all"),"",()=>this.fit(!0)):v}
                <button role="menuitemcheckbox" aria-checked=${this._split?"true":"false"} class="fp3d-menu-item fp3d-more-split" @click=${()=>(t(),this.toggleSplit())}>
                  ${Dt(this._split?"split-on":"split-off")} ${this.t("split_3d")}<span class="fp3d-menu-more">${this._split?"\u2713":""}</span>
                </button>
                ${n("help",this.t("help_and_shortcuts"),Oe()?"":"?",()=>this._help=!0)}
                <div class="fp3d-menu-sep" role="separator"></div>
                ${n("gear",this.t("settings_home"),"\u203A",()=>this.openSettings("general"))}
              </div>`:v}
      </div>
    </div>`}renderSettingsLink(t,e,n,i="\u2699"){return m`<button class="fp3d-settings-link fp3d-wide" @click=${()=>this.openSettings(t,e)}>
      <span>${i} ${this.t(n)}</span><b>${this.t("settings")} ›</b>
    </button>`}renderHomeLinks(){let t=this.isEditor,e=[{section:"general",id:null,label:"st_sec_general",show:t},{section:"scene",id:"weather_entity",label:"settings_weather",show:t},{section:"cameras",id:"director.doorbell",label:"card_director",show:t},{section:"voice",id:null,label:"voice",show:!0},{section:"people",id:"locate",label:"st_sec_people",show:t&&this.isHaAdmin},{section:"favourites",id:null,label:"favorites",show:t},{section:"scene",id:"backdrop.kind",label:"backdrop",show:t},{section:"scene",id:"terrain.level",label:"terrain",show:t},{section:"backup",id:null,label:"backup",show:t},{section:"access",id:null,label:"editors_title",show:t&&this.isHaAdmin}];return m`<section class="fp3d-home-links">
      <h3>${this.t("settings_home")}</h3>
      <div class="fp3d-home-link-list">
        ${e.filter(n=>n.show).map(n=>m`<button class="fp3d-link fp3d-home-link" @click=${()=>this.openSettings(n.section,n.id)}>${this.t(n.label)} ›</button>`)}
      </div>
    </section>`}openSettings(t,e=null){this.dispatchEvent(new CustomEvent("open-settings",{detail:{section:t,id:e},bubbles:!0,composed:!0}))}startAreas(){let t=this.floor;if(!t||!this.unplacedAreas(t).length){let e=this.freeHaFloors[0];if(!e)return;t&&!t.rooms.length&&!t.ha_floor?this.change((n,i)=>{i.ha_floor=e.floor_id,i.name=e.name}):this.addFloor(e),t=this.floor}t&&this.addAreaRooms(t)}hasStartAreas(){let t=this.floor;return this.freeHaFloors.length>0||!!t&&this.unplacedAreas(t).length>0}startShowing(){return this.isEditor&&this._tool==="select"&&!this._placing&&ks(this._doc).show}renderStart(){if(!this.startShowing())return null;let t=ks(this._doc),e=this.t.bind(this),n=this._doc.floors.length>0,i=()=>{this.floor||this.addFloor(),this.setTool("rect")},s={floor:n?v:m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.addFloor()}>${e("start_floor_btn")}</button>`,room:m`<button class="fp3d-btn ${n?"fp3d-primary":""}" @click=${i}>${e("start_room_btn")}</button>`,furniture:v};return m`<section class="fp3d-start" aria-label=${e("start_title")}>
      <h3>${e("start_title")}</h3>
      <ol>
        ${t.steps.map(o=>m`<li class=${o.done?"fp3d-start-done":""}>
              ${o.done?m`<span class="fp3d-start-mark" role="img" aria-label=${e("start_done")}>✓</span>`:m`<span class="fp3d-start-mark" aria-hidden="true"></span>`}
              <span class="fp3d-start-text">${e(`start_${o.step}`)}</span>
              ${o.done?v:s[o.step]}
            </li>`)}
      </ol>
      <p class="fp3d-start-or">${e("start_or")}</p>
      <div class="fp3d-start-alt">
        ${this.hasStartAreas()?m`<button class="fp3d-btn" @click=${()=>this.startAreas()}>${e("start_areas")}</button>`:v}
        <button class="fp3d-btn" @click=${()=>this.dispatchEvent(new CustomEvent("load-sample",{bubbles:!0,composed:!0}))}>${e("home_sample")}</button>
      </div>
    </section>`}renderHint(){let t=this.renderStart();if(t)return t;if(this._phone&&!this.showsPhoneHint())return v;let e=this.hintKeyNow(),n=e==="hint_empty"||e==="hint_first_room",i=this._fixedHint||this._tool==="opening"&&!!this._openingNote;return m`<div class="fp3d-hint ${i?"fp3d-hint-fixed":""} ${n?"fp3d-hint-first":""}" role="status" aria-live="polite" title=${Oe()?v:this.t("snap_off_tip")}>
      <span class="fp3d-hint-text" .textContent=${Ol(this.hintText())}></span>
      ${this._phone?m`<button class="fp3d-hint-help fp3d-hint-hide" aria-label=${this.t("hint_hide")} title=${this.t("hint_hide")} @click=${()=>this.setHintOff(!0)}>${Dt("x")}</button>`:m`<button class="fp3d-hint-help" title=${this.t("help_open")} @click=${()=>this._help=!0}>? ${this.t("hint_help")}</button>`}
    </div>`}renderHelp(){if(!this._help)return v;let t=()=>this._help=!1,e=n=>{let i=n==="swing"?I`<path class="fp3d-help-swing" d="M4 22L4 4A18 18 0 0 1 22 22" />`:n==="track"?I`<path class="fp3d-help-track" d="M4 20L4 4M22 20L22 4" />`:n==="guide"?I`<line class="fp3d-guide" x1="2" y1="13" x2="24" y2="13" />`:n==="snap"?I`<circle class="fp3d-snap" cx="13" cy="13" r="8" />`:n==="ghost"?I`<rect class="fp3d-ghost" x="3" y="5" width="20" height="16" />`:I`<rect class="fp3d-help-sel" x="3" y="5" width="20" height="16" rx="2" />`;return m`<svg class="fp3d-help-mark" viewBox="0 0 26 26" aria-hidden="true">${i}</svg>`};return m`<div class="fp3d-dialog-veil" @click=${n=>n.target===n.currentTarget&&t()}>
      <div class="fp3d-dialog fp3d-help-overlay" role="dialog" aria-modal="true" aria-label=${this.t("help_overlay_title")} tabindex="-1" ${Kn()}>
        <div class="fp3d-dialog-head">
          <h3>${this.t("help_overlay_title")}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${t}>✕</button>
        </div>
        <div class="fp3d-dialog-body">
          ${Oe()?v:m`<h4>${this.t("help_shortcuts")}</h4>
                <dl class="fp3d-help-keys">
                  ${Hl.map(n=>m`<dt>${n.keys.map((i,s)=>m`${s?" / ":""}<kbd>${i}</kbd>`)}</dt><dd>${this.t(n.text)}</dd>`)}
                </dl>`}
          <h4>${this.t("help_legend")}</h4>
          <ul class="fp3d-help-legend">
            ${Vl.map(n=>m`<li>${e(n.mark)}<span>${this.t(n.text)}</span></li>`)}
          </ul>
        </div>
      </div>
    </div>`}};var uo=class{renderHelpLinks(){return m`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href=${Ll} target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
      </div>
    </section>`}renderTopic(t){let e=this._doc;if(!e)return m``;let n=v;if(t==="director_triggers"){let i=[...new Set(e.floors.flatMap(s=>s.placements.map(o=>o.entity_id)))];n=this.renderDirectorTriggers(e.settings.director??{},i)}else t==="favorites"?n=this.renderFavorites():t==="own_buttons"?n=this.renderOwnButtons():t==="media_presets"?n=this.renderMediaPresets():t==="editors"?n=this.renderEditors():t==="tablet_users"?(this.askEditors(),n=this.editorsList?m`<div class="fp3d-form">${this.renderTabletUsers(this.editorsList.users)}</div>`:m`<p class="fp3d-sub">${this.t("loading")}</p>`):t==="backup"?n=this.renderBackup():t==="energy_balance"?n=this.renderEnergyBalance():t==="hologram"?n=this.renderHologramSettings():t==="presence"?n=this.renderPresenceSettings():t.startsWith("module:")&&(n=this.renderFields(this.memoFields(e,()=>$l(t.slice(7),this.editorHost()))));return m`<div class="fp3d-embed">${n}</div>`}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("home3d.sidePinned",t?"1":"0")}catch{}}setSideFolded(t){if(this._split&&!this._sidePinned){this._sideOpen=!t;return}this._sideMin=t;try{localStorage.setItem("home3d.sideMin",t?"1":"0")}catch{}}renderSideGrip(){if(this.narrow)return v;let t=n=>{this.sideDrag&&(this._sideWidth=Math.min(640,Math.max(280,Math.round(this.sideDrag.width+(this.sideDrag.x-n.clientX)))))},e=n=>{if(this.sideDrag){this.sideDrag=null,n.currentTarget.releasePointerCapture(n.pointerId);try{localStorage.setItem("home3d.sideWidth",String(this._sideWidth))}catch{}}};return m`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${n=>{this.sideDrag={x:n.clientX,width:this._sideWidth},n.currentTarget.setPointerCapture(n.pointerId),n.preventDefault()}}
      @pointermove=${t}
      @pointerup=${e}
      @pointercancel=${e}
    ></div>`}renderAside(t){let e=this._split&&!this._sidePinned&&!this.narrow;return!this.narrow&&(e?!this._sideOpen:this._sideMin)?m`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this.setSideFolded(!1)}>‹</button>
        ${this._furnitureId||this._deviceId||this._openingId||this._roomId?m`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this.setSideFolded(!1)}>⚙</button>`:v}
      </aside>`:e?m`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderSideGrip()}
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:m`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){if(this.narrow)return v;let e=m`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${()=>this.setSideFolded(!0)}>${this.t("side_close")} ›</button>`;return this._split?m`<div class="fp3d-pin-row">
      ${e}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`:m`<div class="fp3d-pin-row">${e}</div>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,i=this.isEditor,s=Object.values(this.hass?.areas??{}).sort((d,c)=>d.name.localeCompare(c.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&i)return m`${this.furnitureItem?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t("back_to_library")}</button>
              ${this.renderFurnitureForm(this.furnitureItem)}`:v}
        ${this.renderFurnitureLibrary()}`;let o=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null,r=this._tool==="opening"&&i&&t?m`<section>
            <h3>${this.t("opening_next_kind")}</h3>
            ${this.renderOpeningKinds(this._openingPreset,d=>this.pickOpeningKind(d))}
          </section>`:v;if(o)return m`${r}<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${o}`;if(n&&this._tool!=="measure")return m`${r}<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,s)}`;let l=i&&t&&this.unplacedAreas(t).length?m`<p class="fp3d-sub fp3d-wide fp3d-area-import">
            ${this.t("area_rooms_label")}
            <button class="fp3d-link" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
              ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
            </button>
            ${this.homeName?m`<br /><small class="fp3d-area-home">${this.t("area_rooms_note",{home:this.homeName})}</small>`:v}
          </p>`:v;return m`
      ${r} ${i?v:m`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${t?this.t("floor_settings_of",{floor:t.name}):this.t("floors")}</h3>
        ${e.length?v:this.startShowing()?v:m`${i?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.addFloor()}>${this.t("first_floor_add")}</button>`:v}
              <p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${t&&!t.rooms.length?l:v}
        ${i&&t?this.renderSettingsLink("general","lock_plan",this._doc.settings.lock_plan?"plan_locked":"plan_lock",this._doc.settings.lock_plan?"\u{1F512}":"\u{1F513}"):v}
        ${t?m`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${d=>this.updateFloor({name:d.target.value})}
              /></label>
              ${this.len(this.t("elevation"),t.elevation,d=>this.updateFloor({elevation:d}))}
              ${i?m`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${Gt(this.t("floor_shift"),this.unit)}</span>
                    <div class="fp3d-shift-xz">
                      <input type=${this.unit==="imperial"?"text":"number"} step="0.05" .value=${this.lenValue(this._shiftX)} aria-label="X" placeholder="X" @change=${d=>this._shiftX=this.readLen(d.target.value)??0} />
                      <input type=${this.unit==="imperial"?"text":"number"} step="0.05" .value=${this.lenValue(this._shiftZ)} aria-label="Z" placeholder="Z" @change=${d=>this._shiftZ=this.readLen(d.target.value)??0} />
                    </div>
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${t.start_view?m`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:v}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${d=>this._shiftAll=d.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:v}
              ${this.len(this.t("height"),t.height,d=>this.updateFloor({height:Math.max(1,d)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?m`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${d=>this.updateFloor({ha_floor:d.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(d=>d.floor_id===t.ha_floor||!e.some(c=>c.ha_floor===d.floor_id)).map(d=>m`<option value=${d.floor_id} ?selected=${d.floor_id===t.ha_floor}>${d.name}</option>`)}
                    </select></label
                  >`:v}
              ${t.rooms.length?l:v}
              ${i?m`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                    ${this.renderPasteButton()}
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${t.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                    <button class="fp3d-btn" title=${this.t("straighten_hint")} ?disabled=${!t.rooms.length} @click=${()=>this.straightenFloor()}>
                      ${this.t("straighten")}
                    </button>
                  </div>
                  ${this._notice?m`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:v}`:v}
            </div>`:v}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?m`${this.renderRoomForm(n,s)}`:t?m`${this.renderRoomList(t)} ${this.renderItemsList(t.furniture,!0)} ${this.renderUnplaced()} ${this.renderHomeLinks()}`:v}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():v}
      ${t&&i?this.renderBackgroundForm(t):v}
    `}renderItemsList(t,e){let n=this.floor;if(!n||!t.length)return v;let i=e?new Map(n.rooms.map(d=>[d.id,d.name])):null,s=e?Gn(n.rooms,t):null,o=new Map;if(s&&i)for(let[d,c]of s)for(let p of c)o.set(p.id,d?i.get(d)??"":"");let r=this._furnitureId?this.selection():[],l=t.map(d=>({id:d.id,name:d.name||lt(this.hass,d.type),note:o.get(d.id),hidden:this._hiddenItems.includes(d.id),selected:r.includes(d.id)}));return m`<details class="fp3d-points fp3d-items">
      <summary>${this.t("items_list")} (${t.length})</summary>
      <fp3d-item-list
        .rows=${l}
        .texts=${{hide:this.t("item_hide"),show:this.t("item_show"),remove:this.t("delete")}}
        ?editable=${this.isEditor}
        @item-select=${d=>this.selectFromList(d.detail.id)}
        @item-hide=${d=>this.toggleItemHidden(d.detail.id)}
        @item-delete=${d=>{this.deleteFromList(d.detail.id)}}
      ></fp3d-item-list>
    </details>`}};var ho=["status","load","battery","runtime","power","temperature","cpu","memory","disk","throughput","uptime","other","update","switch","button"],Bm=new Set(["unifi","nut","apcupsd","systemmonitor","glances","synology_dsm","qnap","qnap_qsw","proxmoxve","esphome","snmp","tplink_omada","netgear","fritz","mikrotik","opnsense","pfsense","truenas","unraid","unifiprotect","zha","upnp","hassio"]),sh=8,aa=/_(port|outlet|lan|eth)_?\d+/,Km=a=>ho.indexOf(a);function Ni(a,t){let e=t.slice(0,t.indexOf(".")),n=a.states[t],i=String(n?.attributes?.device_class??""),s=String(n?.attributes?.unit_of_measurement??""),o=`${t.slice(e.length+1)} ${a.entities?.[t]?.translation_key??""}`.toLowerCase();return e==="update"?"update":e==="button"?"button":e==="switch"?"switch":e==="device_tracker"?"status":e==="binary_sensor"?["connectivity","running","plug","power","problem"].includes(i)||/status|state|online|connected|running/.test(o)?"status":"other":e!=="sensor"?"other":/runtime/.test(o)||i==="duration"&&/battery/.test(o)?"runtime":i==="battery"||/battery|charge/.test(o)&&s==="%"?"battery":i==="temperature"?"temperature":i==="power"||s==="W"||s==="kW"?"power":i==="data_rate"||/\/s$/.test(s)||/throughput|bandwidth|download|upload|\b(rx|tx)\b|_(rx|tx)(_|$)|network_(in|out)|packets/.test(o)?"throughput":/uptime|last_boot|boot_time/.test(o)||i==="timestamp"&&/up|boot/.test(o)?"uptime":/cpu|processor/.test(o)?"cpu":/memory|\bram\b|swap/.test(o)?"memory":/disk|volume|storage|drive|pool|\bfs\b|used_space|free_space/.test(o)?"disk":/load/.test(o)?"load":/status|state/.test(o)||i==="enum"?"status":"other"}var Um=(a,t)=>a.entities?.[t]?.device_id??null;function oh(a,t){return Object.values(a.entities??{}).filter(e=>e.device_id===t&&!!a.states[e.entity_id]).map(e=>e.entity_id)}function rh(a,t){let e=n=>Km(Ni(a,n))+(aa.test(n)?100:0);return t.map((n,i)=>({id:n,i,s:e(n)})).sort((n,i)=>n.s-i.s||n.i-i.i).map(n=>n.id)}function Gm(a,t){let e=i=>{if(Ni(a,i)!=="status"||aa.test(i))return 99;let s=String(a.states[i]?.attributes?.device_class??"");return i.startsWith("binary_sensor.")&&(s==="connectivity"||s==="running")?0:i.startsWith("sensor.")?1:i.startsWith("device_tracker.")?2:3};return t.map(i=>({id:i,p:e(i)})).filter(i=>i.p<99).sort((i,s)=>i.p-s.p)[0]?.id??null}var qm=(a,t)=>{let e=Ni(a,t);return e!=="button"&&e!=="switch"&&e!=="update"&&!aa.test(t)};function ah(a,t){let e=oh(a,t),n=Gm(a,e),i=rh(a,e.filter(o=>o!==n&&qm(a,o))).slice(0,sh),s=a.devices?.[t];return{entity:n,links:i,name:s?.name_by_user||s?.name||null}}function lh(a,t,e=sh){let n=new Set([t.entity,...t.links??[]].filter(o=>!!o)),s=[...new Set([...n].map(o=>Um(a,o)).filter(o=>!!o))].flatMap(o=>oh(a,o)).filter(o=>!n.has(o));return rh(a,s).slice(0,e)}function dh(a){let t=new Map;for(let e of Object.values(a.entities??{})){if(!e.device_id||!a.states[e.entity_id])continue;let n=t.get(e.device_id)??new Set;e.platform&&n.add(e.platform),t.set(e.device_id,n)}return[...t].map(([e,n])=>{let i=a.devices?.[e],s=i?.name_by_user||i?.name||e,o=[i?.manufacturer,i?.model].filter(Boolean).join(" ");return{id:e,label:o?`${s} \xB7 ${o}`:s,rack:[...n].some(r=>Bm.has(r))}}).sort((e,n)=>Number(n.rack)-Number(e.rack)||e.label.localeCompare(n.label)).map(({id:e,label:n})=>({id:e,label:n}))}var ji=8,fo="@hottest",mo="@online";function ch(a,t){let e=new Set,n=[];for(let i of t)for(let s of Gl(i))e.has(s)||(e.add(s),n.push({id:s,kind:Ni(a,s),slot:i}));return n}var Ym=(a,t)=>String(a.states[t]?.attributes?.unit_of_measurement??""),la=(a,t)=>Ym(a,t)==="%",Xm=(a,t)=>a.some(e=>e.slot===t&&(e.kind==="battery"||e.kind==="runtime"));function da(a,t,e=ji){let n=ch(a,t),i=l=>n.filter(d=>d.kind===l),s=l=>Xm(n,l.slot),o=(l,...d)=>{for(let c of d){let p=l.find(c);if(p)return p.id}return null};return[o(i("load"),l=>s(l)&&la(a,l.id),l=>la(a,l.id)),o(i("battery"),s,()=>!0),o(i("runtime"),()=>!0),o(i("power"),l=>/poe/.test(l.id),s),i("temperature").length?fo:null,t.some(l=>Un(a,l)!==null)?mo:null,o(i("disk"),l=>la(a,l.id)&&!/free/.test(l.id)),o(i("throughput"),l=>/wan|uplink|internet|external/.test(l.id),()=>!0)].filter(l=>!!l).slice(0,e)}var Qm=new Set(["update","switch","button"]),Jm=(a,t)=>ho.indexOf(a.kind)-ho.indexOf(t.kind);function ph(a,t,e){let n=ch(a,t),i=[];t.some(o=>Un(a,o)!==null)&&i.push({key:mo,kind:"status"}),n.some(o=>o.kind==="temperature")&&i.push({key:fo,kind:"temperature"});let s=i.length?[{slot:null,name:null,options:i}]:[];for(let o of t){let r=n.filter(l=>l.slot===o&&!Qm.has(l.kind)).map(({id:l,kind:d})=>({key:l,kind:d}));r.length&&s.push({slot:o.id??null,name:e(o),options:r.sort(Jm)})}return s}function uh(a,t,e,n=ji){let i=[...a??t];return i.includes(e)?i.filter(s=>s!==e):i.length>=n?i:[...i,e]}var go=class{rackOf(t){let e=Ve(Ze(t.type));return e?{frame:e,at:rs(e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h))}:null}rackElevationOf(t){let e=Ve(Ze(t.type));if(!e)return null;let n=this.hass?.language??"en",i=t.rack?.slots??[],s=this.hass,o=i.map(d=>s?Un(s,d):null),r=JSON.stringify([t.type,t.w,t.d,t.h,t.name??"",n,i,i.map(d=>!!Bt(d.type)),o]);if(this.elevationMemo?.key===r)return this.elevationMemo.el;let l=uu({frame:e,size:[t.w,t.d,t.h],slots:i,itemOf:Bt,nameOf:(d,c)=>d.name||Lt(c,n),title:t.name||lt(this.hass,t.type),statusOf:d=>o[i.indexOf(d)]??null});return this.elevationMemo={key:r,el:l},l}renderRackElevation(t){let e=this.rackElevationOf(t);if(!e||!e.pieces)return v;let n=Ve(Ze(t.type));return m`<details class="fp3d-rack-elev" open>
      <summary>${this.t("rack_front_view")} · ${this.t("rack_used",{used:e.used,u:n?.u??0})}</summary>
      <div class="fp3d-rack-elev-box">${this.rackElevationPicture(e)}</div>
    </details>`}rackElevationPicture(t){let e=(n,i)=>`${Math.round(n/i*1e4)/100}%`;return m`<div class="fp3d-rack-elev-pic">
      <img class="fp3d-rack-elev-img" src=${`data:image/svg+xml;charset=utf-8,${encodeURIComponent(t.svg)}`} width=${t.width} height=${t.height} alt=${t.label} />
      ${t.gear.map(n=>m`<span class="fp3d-rack-elev-tip" title=${n.title} style="left:${e(n.x,t.width)};top:${e(n.y,t.height)};width:${e(n.w,t.width)};height:${e(n.h,t.height)}"></span>`)}
    </div>`}openRackSheet(){let t=this.furnitureItem;t&&this.rackOf(t)&&(this._rackSheet=t.id)}rackRules(t){let e=this.rackOf(t);return e?{rack:e,space:Yl(e.frame,e.at),gearOf:Xl(Ze),looseOf:Ql(Ze)}:null}rackSheetProps(){let t=this._rackSheet?this.floor?.furniture.find(p=>p.id===this._rackSheet):void 0,e=t&&this.rackRules(t);if(!t||!e)return null;let{rack:n,space:i,gearOf:s,looseOf:o}=e,r=this.hass?.language??"en",l=[],d=[],c=n.at.opening;for(let p of this.packs??[])for(let h of p.items){let u=hi(h),f=Zt(p.id,h.id);u&&u.inch===i.width&&ql(i,h.size[1])?l.push({type:f,name:Lt(h,r)}):!u&&!h.rack_frame&&h.electric&&(h.group==="network"||h.group==="tech")&&h.mount!=="ceiling"&&h.size[0]<=c&&h.size[1]<=i.mountDepth&&h.size[2]<=.3&&d.push({type:f,name:Lt(h,r)})}return l.sort((p,h)=>p.name.localeCompare(h.name)),d.sort((p,h)=>p.name.localeCompare(h.name)),{heading:t.name||lt(this.hass,t.type),space:i,labels:n.at.units.map(p=>p.label),slots:t.rack?.slots??[],gear:l,loose:d,gearOf:s,looseOf:o,nameOf:p=>lt(this.hass,p),editable:this.isEditor,linker:this.rackLinker()}}rackLinker(){let t=this.hass;if(!t)return null;let e=Object.keys(t.states).length,n=this.rackDevicesMemo;return(!n||n.entities!==t.entities||n.devices!==t.devices||n.count!==e)&&(this.rackDevicesMemo={entities:t.entities,devices:t.devices,count:e,options:dh(t)}),{entities:this.entityOptions(this.anyEntity),devices:this.rackDevicesMemo.options,fromDevice:i=>ah(t,i),suggest:i=>lh(t,i),label:i=>et(t,i),status:i=>Un(t,i)}}rackFrameChoices(t){let e=this.hass?.language??"en",n=Ze(t.type)?.mount==="wall",i=[];for(let s of this.packs??[])for(let o of s.items)Ve(o)&&o.mount==="wall"===n&&i.push({type:Zt(s.id,o.id),name:Lt(o,e)});return i.sort((s,o)=>s.name.localeCompare(o.name,void 0,{numeric:!0}))}changeRackFrame(t){let e=this.furnitureItem,n=Ze(t);if(!e||!this.isEditor||!n||!Ve(n)||!this.rackOf(e))return;let[i,s,o]=n.size;this.updateFurniture({type:t,w:i,d:s,h:o})}renderRackFrameForm(t){let e=this.rackRules(t);if(!e)return v;let n=Zl(e.space,t.rack?.slots??[],e.gearOf,e.looseOf),i=this.rackFrameChoices(t);return m`${this.isEditor&&i.length>1?m`<div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("rack_frame_pick")}
            <select @change=${s=>this.changeRackFrame(s.target.value)}>
              ${i.map(s=>m`<option value=${s.type} ?selected=${s.type===t.type}>${s.name}</option>`)}
            </select></label
          >
        </div>`:v}
    ${n.length?m`<p class="fp3d-sub fp3d-pack-error" role="alert">
          ${this.t("rack_misfits",{n:n.length})}
          ${n.map(s=>{let o=t.rack.slots.find(r=>r.id===s.id);return m`<br />${o.name||lt(this.hass,o.type)}: ${this.t(`rack_${s.why}`)}`})}
        </p>`:v}`}rackCardPicked(t){return t.rack?.card?.metrics??da(this.hass,t.rack?.slots??[])}toggleRackCardMetric(t){let e=this.furnitureItem;if(!e?.rack||!this.isEditor)return;let n=uh(e.rack.card?.metrics,da(this.hass,e.rack.slots),t);this.change((i,s)=>{let o=s.furniture.find(r=>r.id===e.id);o?.rack&&(o.rack={...o.rack,card:{...o.rack.card,metrics:n}})})}resetRackCard(){let t=this.furnitureItem;!t?.rack?.card||!this.isEditor||this.change((e,n)=>{let i=n.furniture.find(s=>s.id===t.id);if(i?.rack){let{card:s,...o}=i.rack;i.rack=o}})}renderRackCardForm(t){let e=this.hass,n=t.rack?.slots??[];if(!e||!n.length)return v;let i=ph(e,n,d=>d.name||lt(e,d.type??""));if(!i.length)return v;let s=this.rackCardPicked(t),o=s.length>=ji,r=!this.isEditor,l=(d,c)=>d===fo?this.t("rack_card_hottest"):d===mo?this.t("rack_card_online"):c==="other"?et(e,d):this.t(`rack_kind_${c}`);return m`<details class="fp3d-rack-elev fp3d-rack-card-pick">
      <summary>${this.t("rack_card_values",{n:s.length,max:ji})}</summary>
      <p class="fp3d-sub">${this.t("rack_card_values_hint")}</p>
      ${i.map(d=>m`<fieldset class="fp3d-rack-card-group">
          <legend>${d.name??this.t("rack_card_rack")}</legend>
          ${d.options.map(c=>{let p=s.includes(c.key);return m`<label class="fp3d-check"
              ><input type="checkbox" .checked=${p} ?disabled=${r||!p&&o} @change=${()=>this.toggleRackCardMetric(c.key)} />
              <span>${l(c.key,c.kind)}${c.key.startsWith("@")?v:m` <small>${c.kind==="other"?"":et(e,c.key)} · ${np(e,e.states[c.key])}</small>`}</span></label
            >`})}
        </fieldset>`)}
      ${t.rack?.card&&!r?m`<button class="fp3d-btn" @click=${()=>this.resetRackCard()}>${this.t("rack_card_default")}</button>`:v}
    </details>`}onRackChange(t){let e=this._rackSheet,n=t.detail.slots;!e||!this.isEditor||this.change((i,s)=>{let o=s.furniture.find(r=>r.id===e);o&&(o.rack={...o.rack,slots:n})})}renderRackSheet(){let t=this.rackSheetProps();return t?(le(xu),m`<fp3d-rack-sheet
      .heading=${t.heading}
      .space=${t.space}
      .labels=${t.labels}
      .slots=${t.slots}
      .gear=${t.gear}
      .loose=${t.loose}
      .gearOf=${t.gearOf}
      .looseOf=${t.looseOf}
      .nameOf=${t.nameOf}
      .editable=${t.editable}
      .linker=${t.linker}
      .t=${(e,n)=>this.t(e,n)}
      @rack-change=${e=>this.onRackChange(e)}
      @rack-close=${()=>this._rackSheet=null}
    ></fp3d-rack-sheet>`):v}};var ca=new WeakMap,hh=Bn(class extends Tl{render(a){return v}update(a,[t]){let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=a.options?.host,this.rt(this.ct=a.element)),v}rt(a){if(this.G!==void 0)if(this.isConnected||(a=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=ca.get(t);e===void 0&&(e=new WeakMap,ca.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,a),a!==void 0&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){return typeof this.G=="function"?ca.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var bo=class{openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){if(this._wallMulti.length)return this._wallMulti;let t=this._wallSel?this.floor?.furniture.find(e=>e.id===this._wallSel):void 0;return t?t.group&&!this._wallSingle?(this.floor?.furniture??[]).filter(e=>e.group===t.group).map(e=>e.id):[t.id]:[]}wallToggle(t){let e=this.wallSelection(),n=this.withGroups([t]),i=e.includes(t)?e.filter(s=>!n.includes(s)):[...new Set([...e,...n])];this.wallChoose(i,t)}wallChoose(t,e=t[0]??null){this._wallSingle=!1,this._wallSel=t.length?e&&t.includes(e)?e:t[0]:null,this._wallMulti=[];let n=this.wallSelection();t.length>1&&!(t.length===n.length&&t.every(i=>n.includes(i)))&&(this._wallMulti=t),this._wallGap=null}moveSetOnWall(t,e,n,i,s=this._doc,o=!0){let r=new Set(e);this.change((l,d)=>{for(let c of d.furniture)r.has(c.id)&&(Object.assign(c,_s(t,c,n)),i!==null&&de(c)&&(c.mount_y=Math.round(Math.min(Ne,Math.max(0,Ht(d,c)+i))*1e3)/1e3))},s,o)}wallGapAt(t,e,n,i,s){let o=s<1.2,r=t.length,l=[...We(t,e,n).filter(p=>o?p.y0<1:p.y1>1.2).map(p=>[p.s0,p.s1]),...gn(t,e).filter(p=>o?p.y0<.9:p.y1>1.2).map(p=>[p.s0,p.s1])];if(l.some(([p,h])=>i>p&&i<h))return null;let d=Math.max(0,...l.filter(([,p])=>p<=i).map(([,p])=>p)),c=Math.min(r,...l.filter(([p])=>p>=i).map(([p])=>p));return c-d>=.1?{s0:Math.round(d*1e3)/1e3,s1:Math.round(c*1e3)/1e3,low:o}:null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(o=>o.points.length>=3&&K([t.x,t.z],o.points));if(!n)return;let i=-1,s=1/0;n.points.forEach((o,r)=>{let l=n.points[(r+1)%n.points.length],d=Math.hypot(l[0]-o[0],l[1]-o[1])||1,c=Math.max(0,Math.min(1,((t.x-o[0])*(l[0]-o[0])+(t.z-o[1])*(l[1]-o[1]))/(d*d))),p=Math.hypot(t.x-(o[0]+(l[0]-o[0])*c),t.z-(o[1]+(l[1]-o[1])*c));p<s&&(s=p,i=r)}),i>=0&&this.openWallView(n.id,i,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,i=-1;t.points.forEach((s,o)=>{let r=We(De(t,o),e,t).length;r>i&&(i=r,n=o)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("home3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let i=`${e.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===t)return;let s=this.wall3dEl!==t;this.wall3dKey=i,this.wall3dEl=t,s&&t.addEventListener("pointerdown",o=>this.runDown3d(o),{capture:!0}),(async()=>{let o;for(let u=0;u<120&&!(o=t.viewer);u++)await new Promise(f=>setTimeout(f,50));s&&await new Promise(u=>setTimeout(u,250));let r=this.floor;if(!o||!r||this.wall3dKey!==i)return;if(!o.__npWall){o.__npWall=!0,o.updateWalls=function(){for(let f of this.floors)f.mask.standing.value=65535,f.mask.glass.value=0},o.labels.style.display="none";let u=new CSSStyleSheet;u.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,u]),o.camera.fov=58,o.camera.updateProjectionMatrix(),o.controls.minRadius=.6,o.controls.leftDragTurns=!1}let l=De(e,n),d=Math.max(1.5,...e.points.map(u=>mt(l,u).d)),c=ie(l,l.length/2,0),p=r.elevation+(o.floorMap.get(r.id)?.y??0)+1.15;o.controls.maxRadius=Math.max(1.4,d-.25);let h=o.getView();h.target.set(c[0],p,c[1]),o.flyTo({...h,radius:Math.max(1.2,Math.min(d*.8,d-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},s?0:650),o.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!e?.isConnected||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let i=this.floor,s=this._wallSel?i?.furniture.find(u=>u.id===this._wallSel):void 0,o=e.viewer;if(!s||!i||!o||!de(s)||s.locked){n.hidden=!0;return}let r=Ht(i,s),l=i.elevation+(o.floorMap.get(i.id)?.y??0)+r+s.h,d=o.camera.position.clone().set(s.x,l+.12,s.z).project(o.camera);if(d.z>1){n.hidden=!0;return}n.hidden=!1;let c=e.getBoundingClientRect(),p=n.offsetParent?.getBoundingClientRect()??c;n.style.transform=`translate(${c.left-p.left+(d.x+1)/2*c.width}px, ${c.top-p.top+(1-d.y)/2*c.height}px)`;let h=n.querySelector("b");h&&(h.textContent=this.m(Math.round(r*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e?.furniture.find(c=>c.id===this._wallSel):void 0,s=this.wall3dEl?.viewer;if(!e||!n||!s||!this.isEditor)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let o=Math.hypot(s.camera.position.x-n.x,s.camera.position.z-n.z)||1,r=this.wall3dEl.clientHeight||1,l=e.rooms.find(c=>c.points.length>=3&&K([n.x,n.z],c.points)),d=Math.max(e.height,l?.ceiling_height??0);this.lift={id:n.id,y:Ht(e,n),startY:t.clientY,perPx:2*o*Math.tan(s.camera.fov*Math.PI/360)/r,base:this._doc,top:Math.max(0,d-n.h),moved:!1}}liftMove(t){let e=this.lift,n=this._wallView?this.floor?.rooms.find(o=>o.id===this._wallView.roomId):void 0;if(!e||!n)return;let i=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let s=Math.min(e.top,Math.max(0,Math.round((e.y+i)*100)/100));this.moveOnWall(De(n,this._wallView.edge),e.id,0,s,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t?.moved&&this.pushHistory(t.base)}toggleWallPick(t){let e=t.closest(".fp3d-toolbar")?.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let i of e.rooms){if(i.points.length<3)continue;let s=K(t,i.points)?-.25:0;i.points.forEach((o,r)=>{let l=i.points[(r+1)%i.points.length],d=(l[0]-o[0])**2+(l[1]-o[1])**2||1,c=Math.max(0,Math.min(1,((t[0]-o[0])*(l[0]-o[0])+(t[1]-o[1])*(l[1]-o[1]))/d)),p=Math.hypot(t[0]-(o[0]+(l[0]-o[0])*c),t[1]-(o[1]+(l[1]-o[1])*c));p<.6&&(!n||p+s<n.d)&&(n={room:i,edge:r,d:p+s})})}if(!n){let i=e.rooms.find(s=>s.points.length>=3&&K(t,s.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((i,s)=>{let o=s.furniture.find(d=>d.id===t);if(!o)return;o.rotation=Math.round((e%360+360)%360);let[r,l]=Es(s,o,o.x,o.z,n,.6);Object.assign(o,{x:r,z:l})})}moveFromWall(t,e,n){this.change((i,s)=>{let o=s.furniture.find(r=>r.id===e);o&&(o.x=Math.round((o.x+t.n[0]*n)*1e3)/1e3,o.z=Math.round((o.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,i,s=this._doc,o=!0){this.change((r,l)=>{let d=l.furniture.find(c=>c.id===e);d&&(Object.assign(d,_s(t,d,n)),i!==null&&(d.mount_y=Math.round(Math.min(Ne,Math.max(0,i))*1e3)/1e3))},s,o)}alongAxis(t,e){let n=this.wallTurn(t,e)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(t,e,n,i,s,o,r=this._doc,l=!0){this.change((d,c)=>{let p=c.furniture.find(u=>u.id===e);if(!p)return;let h=this.alongAxis(t,p);if(n!==null&&i!==null&&h&&i-n>=.05){let u=Wt(p).map(g=>mt(t,g).s),f=(Math.min(...u)+Math.max(...u))/2;p[h]=k(i-n),Object.assign(p,_s(t,p,(n+i)/2-f))}if(s!==null||o!==null){let u=Ht(c,p),f=s??u,g=o??u+p.h;if(g-f<.03)return;p.h=k(g-f),s!==null&&de(p)&&(p.mount_y=k(Math.max(0,f)))}},r,l)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(t,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(t,i));try{let[i]=await Promise.all([ze(),this.hass?ue(this.hass,n.map(s=>s.type)):void 0]);for(let s of n){let o=i.furnitureFront({type:s.type,w:s.w,d:s.d,h:s.h,variant:s.variant,lamp:He[s.type]??null},this.wallTurn(t,s),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,s),o)}}catch{}this._wallPicTick++}}renderWallView(){let t=this._wallView,e=this.floor,n=t?e?.rooms.find(F=>F.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return v;let i=n.points.length,s=De(n,t.edge),o=s.length,r=Math.max(e.height,n.ceiling_height??0),l=this._techMode?We(s,e,n,1.6).filter(F=>Ft.includes(e.furniture.find(O=>O.id===F.id)?.type??"")):We(s,e,n),d=gn(s,e),c=F=>s.rightward?F:o-F,p=(F,O)=>[Math.min(c(F),c(O)),Math.abs(O-F)],h=F=>r-F,u=this.isEditor,f=this._wallSel?e.furniture.find(F=>F.id===this._wallSel):void 0,g=f?l.find(F=>F.id===f.id)??(()=>{let F=Wt(f).map(N=>mt(s,N)),O=Ht(e,f);return{kind:"furniture",id:f.id,s0:Math.min(...F.map(N=>N.s)),s1:Math.max(...F.map(N=>N.s)),y0:O,y1:O+f.h,d:Math.min(...F.map(N=>N.d))}})():null,b=!!f&&de(f),_=this.wallSelection(),y=_.length>1,$=l.filter(F=>_.includes(F.id)),w=$.length?{s0:Math.min(...$.map(F=>F.s0)),s1:Math.max(...$.map(F=>F.s1)),y0:Math.min(...$.map(F=>F.y0)),y1:Math.max(...$.map(F=>F.y1))}:null,E=F=>this.m(F,2),x=F=>{let O=F.currentTarget.closest("svg"),N=O.createSVGPoint();return N.x=F.clientX,N.y=F.clientY,N.matrixTransform(O.getScreenCTM().inverse())},M=F=>[0,o,...l.filter(O=>!F.includes(O.id)).flatMap(O=>[O.s0,O.s1]),...d.flatMap(O=>[O.s0,O.s1])],R=(F,O)=>{if(!u)return;if(Q&&this._runMode){this.techPress=Q.pt(F),this.runDown(F,Q);return}if(F.stopPropagation(),this._runSel=null,F.shiftKey||this._multiMode){this.wallToggle(O);return}(!this.wallSelection().includes(O)||this._wallSingle)&&this.wallChoose([O]);let N=this.wallSelection(),B=x(F);F.currentTarget.closest("svg").setPointerCapture(F.pointerId);let q=l.filter(tt=>N.includes(tt.id));if(N.length>1&&N.some(tt=>this.isFixedItem("furniture",tt)))return;if(N.length>1&&q.length){let tt=Math.min(...q.map(rt=>rt.s0));this.wallDrag={id:O,ids:N,w:Math.max(...q.map(rt=>rt.s1))-tt,x:B.x,y:B.y,base:this._doc,s0:tt,y0:0,lift:q.every(rt=>{let Ot=e.furniture.find(ve=>ve.id===rt.id);return!!Ot&&de(Ot)}),moved:!1};return}let ct=l.find(tt=>tt.id===O),ot=e.furniture.find(tt=>tt.id===O);this.wallDrag={id:O,x:B.x,y:B.y,base:this._doc,s0:ct.s0,y0:ct.y0,lift:!!ot&&de(ot),moved:!1}},T=F=>{if(!u||this._runMode)return;let O=x(F);if(F.shiftKey||this._multiMode){F.currentTarget.closest("svg").setPointerCapture(F.pointerId),this._wallFrame={x0:O.x,y0:O.y,x1:O.x,y1:O.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let N=s.rightward?O.x:o-O.x;this._wallGap=N>=0&&N<=o&&O.y>=0&&O.y<=r?this.wallGapAt(s,e,n,N,r-O.y):null},L=F=>{let O=this.wallResize;if(O){let At=x(F);O.moved=!0;let An=M([O.id]).map(Ut=>c(Ut)),Ki=Ut=>{if(Ut=Math.round(Ut*100)/100,!F.altKey){for(let Ee of An)if(Math.abs(Ut-Ee)<.04)return Ee}return Ut};if(O.side==="l"||O.side==="r"){let Ut=O.side==="l"?Math.min(Ki(At.x),O.x1-.1):O.x0,Ee=O.side==="r"?Math.max(Ki(At.x),O.x0+.1):O.x1,[Tn,Fo]=s.rightward?[Ut,Ee]:[o-Ee,o-Ut];this.resizeOnWall(s,O.id,Tn,Fo,null,null,O.base,!1)}else{let Ut=Math.round((r-At.y)*100)/100;O.side==="t"?this.resizeOnWall(s,O.id,null,null,null,Math.max(O.y0+.05,Math.min(r,Ut)),O.base,!1):this.resizeOnWall(s,O.id,null,null,Math.max(0,Math.min(O.y1-.05,Ut)),null,O.base,!1)}return}let N=this._wallFrame;if(N){let At=x(F);this._wallFrame={...N,x1:At.x,y1:At.y};return}let B=this.wallDrag;if(!B)return;let q=x(F),ct=q.x-B.x,ot=B.y-q.y;if(!B.moved&&Math.hypot(ct,ot)<.02)return;B.moved=!0;let tt=l.find(At=>At.id===B.id),rt=B.ids?B.w??0:tt?tt.s1-tt.s0:0,Ot=B.s0+(s.rightward?ct:-ct);if(Ot=Math.round(Ot*100)/100,!F.altKey)for(let At of M(B.ids??[B.id]))Math.abs(Ot-At)<.04?Ot=At:Math.abs(Ot+rt-At)<.04&&(Ot=At-rt);if(B.ids){this.moveSetOnWall(s,B.ids,Ot-B.s0,B.lift?Math.round(ot*100)/100:null,B.base,!1);return}let ve=B.lift?Math.round((B.y0+ot)*100)/100:null;this.moveOnWall(s,B.id,Ot-B.s0,ve,B.base,!1)},P=()=>{let F=this.wallResize;if(F){this.wallResize=null,F.moved&&this.pushHistory(F.base);return}let O=this._wallFrame;if(O){this._wallFrame=null;let[B,q]=[Math.min(O.x0,O.x1),Math.max(O.x0,O.x1)],[ct,ot]=[Math.min(O.y0,O.y1),Math.max(O.y0,O.y1)],tt=l.filter(rt=>{let[Ot,ve]=p(rt.s0,rt.s1),At=Ot+ve/2,An=h((rt.y0+rt.y1)/2);return At>=B&&At<=q&&An>=ct&&An<=ot}).map(rt=>rt.id);tt.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(tt)])]);return}let N=this.wallDrag;this.wallDrag=null,N?.moved&&this.pushHistory(N.base)},A=F=>{if(this._runMode&&(F.key==="Escape"||F.key==="Enter")){F.preventDefault(),F.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(F.key==="Escape"){this._wallView=null;return}if((F.key==="Delete"||F.key==="Backspace")&&u&&Q&&this._runSel&&!_.length&&!F.target.closest("input, select, textarea")){F.preventDefault();let ct=this._runSel.pipe;this.changePool(Q.pool.id,ot=>ot.pipes=(ot.pipes??[]).filter(tt=>tt.id!==ct)),this._runSel=null;return}if((F.key==="Delete"||F.key==="Backspace")&&u&&_.length&&!F.target.closest("input, select, textarea")){F.preventDefault(),this.deleteOnWall(_);return}if(!g&&(F.key==="ArrowLeft"||F.key==="ArrowRight")){F.preventDefault(),C(F.key==="ArrowLeft"?H:z);return}if(!g||!u||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(F.key)||F.target.closest("input, select, textarea"))return;F.preventDefault();let O=F.shiftKey?.1:.01,N=F.key==="ArrowRight"?O:F.key==="ArrowLeft"?-O:0,B=s.rightward?N:-N,q=F.key==="ArrowUp"?O:F.key==="ArrowDown"?-O:0;if(y)return this.moveSetOnWall(s,_,B,q||null);this.moveOnWall(s,g.id,B,b&&q?g.y0+q:null)},V=y&&w?w:g,S=V?(()=>{let F=V,[O,N]=p(F.s0,F.s1),B=h(F.y0),q=Math.min(r+.25,h(0)+.25);return I`<g class="fp3d-wv-dims">
            ${O>.03?I`<line x1="0" y1=${q} x2=${O} y2=${q} /><text x=${O/2} y=${q-.05}>${E(O)}</text>`:v}
            ${o-O-N>.03?I`<line x1=${O+N} y1=${q} x2=${o} y2=${q} /><text x=${O+N+(o-O-N)/2} y=${q-.05}>${E(o-O-N)}</text>`:v}
            ${F.y0>.03?I`<line x1=${O+N/2} y1=${B} x2=${O+N/2} y2=${r} /><text x=${O+N/2+.05} y=${(B+r)/2} class="fp3d-wv-up">${E(F.y0)}</text>`:v}
          </g>`})():v,z=(t.edge+(s.rightward?1:-1)+i)%i,H=(t.edge+(s.rightward?-1:1)+i)%i,D=F=>this.t("wall_n",{a:F+1,b:(F+1)%i+1}),C=F=>this.openWallView(n.id,F);this._wallPicTick,this.askWallPics(s,l.map(F=>e.furniture.find(O=>O.id===F.id)).filter(F=>!!F));let W=`${n.id}:${t.edge}`,G=this.wvZoom?.key===W?this.wvZoom:null,Y=o+1,X=r+.9,it=(F,O,N)=>{let B=Math.min(8,Math.max(1,F)),q=Y/B,ct=X/B;return{k:B,w:q,h:ct,x0:Math.min(-.5+Y-q,Math.max(-.5,O)),y0:Math.min(-.35+X-ct,Math.max(-.35,N))}},U=it(G?.k??1,G?.x0??-.5,G?.y0??-.35),Z=(F,O,N)=>{let B=it(F,O,N);this.wvZoom=B.k<=1.001?null:{key:W,k:B.k,x0:B.x0,y0:B.y0},this.requestUpdate()},It=(F,O,N)=>{let B=Math.min(8,Math.max(1,N));Z(B,F-(F-U.x0)*U.k/B,O-(O-U.y0)*U.k/B)},Nt=F=>{let O=this.wvPinch,[N,B]=[...this.wvTouch.values()],q=Math.hypot(N.x-B.x,N.y-B.y),ct=(N.x+B.x)/2,ot=(N.y+B.y)/2,tt=F.getBoundingClientRect(),rt=Y/O.k,Ot=X/O.k,ve=Math.min(tt.width/rt,tt.height/Ot),At=tt.left+(tt.width-rt*ve)/2,An=tt.top+(tt.height-Ot*ve)/2,Ki=O.x0+(O.mx-At)/ve,Ut=O.y0+(O.my-An)/ve,Ee=Math.min(8,Math.max(1,O.k*q/Math.max(1,O.d))),Tn=ve*(Ee/O.k),Fo=tt.left+(tt.width-Y/Ee*Tn)/2,Fh=tt.top+(tt.height-X/Ee*Tn)/2;Z(Ee,Ki-(ct-Fo)/Tn,Ut-(ot-Fh)/Tn)};this.wvScale=1/Math.sqrt(U.k);let ht=Math.max(.09,Math.min(.16,o/40))*this.wvScale,ye=this.canLayRuns?this.runPool:void 0,Q=this.runCtx3d=ye?{frame:s,floor:e,room:n,key:`${n.id}|${t.edge}`,L:o,H:r,gap:(se(e,n.id,s.a,s.b)?this._doc.settings.wall_interior/2:0)+wi,runs:pp(s,(ye.pool?.pipes??[]).filter(F=>F.floor_id===e.id),ut(this._doc,e,ye)),pool:ye,pt:F=>{let O=x(F);return{s:s.rightward?O.x:o-O.x,y:r-O.y}}}:null;return m`<div class="fp3d-wv-veil" @click=${F=>F.target===F.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-modal="true" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${A} ${Kn()}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${D(H)}`} @click=${()=>C(H)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%i+1})} · ${this.m(o,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${D(z)}`} @click=${()=>C(z)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${u&&this.pipeRules&&this.runPool?m`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:v}
          ${Q&&u&&!this._techMode?m`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:v}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(s,n,Q)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${D(H)}`} @click=${()=>C(H)}>‹<small>${D(H)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${D(z)}`} @click=${()=>C(z)}>›<small>${D(z)}</small></button>
          ${this._wallView3d?v:m`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>It(U.x0+U.w/2,U.y0+U.h/2,U.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${U.k<=1.001} @click=${()=>It(U.x0+U.w/2,U.y0+U.h/2,U.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${U.k<=1.001} @click=${()=>Z(1,-.5,-.35)}>⤢</button>
                ${U.k>1.001?m`<button class="fp3d-btn" aria-label="←" @click=${()=>Z(U.k,U.x0-U.w*.3,U.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>Z(U.k,U.x0+U.w*.3,U.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>Z(U.k,U.x0,U.y0-U.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>Z(U.k,U.x0,U.y0+U.h*.3)}>↓</button>`:v}
              </div>`}
        ${this._wallView3d?m`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${hh(F=>F&&this.setupWall3d(F,n,t.edge))}
              .hass=${this.rawHass}
              .home=${this.home}
              .building=${this._techMode?this.techDoc3d():this._doc3d}
              .floorId=${this._floorId}
              .roomId=${null}
              .wallMode=${"auto"}
              .explode=${!1}
              .markerMode=${"none"}
              .heatMode=${"none"}
              .theme=${"neon"}
              .packs=${this.packs}
              .showEnergy=${!1}
              .holograms=${!1}
              .flows=${!1}
              ?furnish=${u}
              .furnishTypes=${null}
              .selectedFurniture=${this._wallSel}
              .selectedSet=${_}
              .quality=${"auto"}
              .floorThumbs=${!1}
              .roomLabels=${!1}
              .floorStack=${"single"}
              .panelOpen=${!1}
              .alerts=${!1}
              .scenes=${!1}
              .central=${!1}
              @furniture-select=${F=>{let O=F.detail.id;O&&(this.shiftHeld||this._multiMode)?this.wallToggle(O):O?!this.wallSelection().includes(O)||this._wallSingle?this.wallChoose([O]):this._wallSel=O:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
              @plan-change=${this.onPlanChange3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${F=>this.liftDown(F)} @pointermove=${F=>this.liftMove(F)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:m`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${U.x0} ${U.y0} ${U.w} ${U.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${F=>{F.preventDefault();let O=F.currentTarget,N=O.createSVGPoint();N.x=F.clientX,N.y=F.clientY;let B=N.matrixTransform(O.getScreenCTM().inverse());It(B.x,B.y,U.k*Math.exp(-F.deltaY*.0015))}}
          @pointerdown=${F=>{if(F.pointerType==="touch"){if(this.wvTouch.set(F.pointerId,{x:F.clientX,y:F.clientY}),this.wvTouch.size===2){let[O,N]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(O.x-N.x,O.y-N.y),mx:(O.x+N.x)/2,my:(O.y+N.y)/2,k:U.k,x0:U.x0,y0:U.y0},this.wvTap=null,this.techPress=null,P(),this.runPointUp(),this.endJointDrags();return}if(this.wvPinch)return;if(Q&&this._runMode&&this.isEditor){F.stopPropagation();let O=Q.pt(F);this.wvTap=O,this.techPress=O;return}}Q&&this._runMode?(this.techPress=Q.pt(F),this.runDown(F,Q)):this._runSel?this._runSel=null:T(F)}}
          @pointermove=${F=>{if(this.wvTouch.has(F.pointerId)&&this.wvTouch.set(F.pointerId,{x:F.clientX,y:F.clientY}),this.wvPinch){this.wvTouch.size===2&&Nt(F.currentTarget);return}if(L(F),Q&&this.jointDrag)this.jointMove(F,Q);else if(Q&&this.fitDrag)this.fittingMove(F,Q);else if(Q&&this.runDrag)this.runPointMove(F,Q);else if(Q&&this._runMode==="draw"&&this.techPress&&this.isEditor&&(F.buttons&1||F.pointerType==="touch")){let O=Q.pt(F),N=this.techPress;if(!this._runDraft&&!this.techStroke&&Math.hypot(O.s-N.s,O.y-N.y)>.02&&(this.wvTap=null,this.runAt(Q,N.s,N.y,!1,1,null)),this._runDraft&&!this.wvTap){let B=this.techStroke??=[this.techPress],q=B[B.length-1];Math.hypot(O.s-q.s,O.y-q.y)>.02&&B.push(O),this.runHover=[O.s,O.y],this.requestUpdate()}}else if(Q&&this._runMode==="draw"&&this._runDraft){let O=Q.pt(F);this.runHover=[O.s,O.y],this.requestUpdate()}}}
          @pointerup=${F=>{if(this.wvTouch.delete(F.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let O=this.wvTap;this.wvTap=null;let N=this.techStroke;this.techStroke=null;let B=N?N.reduce((ot,tt,rt)=>rt?ot+Math.hypot(tt.s-N[rt-1].s,tt.y-N[rt-1].y):0,0):0,q=Q&&this._techMode&&this._runMode==="draw";if(N&&B>.12&&Q&&this._runMode==="draw"&&this._runDraft)this.techPress=null,this.runHover=null,this.endStroke(Q,N,Q.pt(F));else if(q){let ot=this.techPress;if(this.techPress=null,this._runDraft=null,this.runHover=null,ot){let tt=this.runPick(Q,ot.s,ot.y,!0);this._runSel=tt.pipe?{pipe:tt.pipe.id,pt:null}:null}}else O&&Q&&this._runMode&&this.runAt(Q,O.s,O.y,!1,1,null),this.techPress=null;P(),this.runPointUp(),this.fittingUp(Q);let ct=this.jointDrag;this.jointDrag=null,ct?.moved?this.pushHistory(ct.base):ct&&Q&&this.openCard(Q.pool.id,`joint:${ct.id}`)}}
          @pointercancel=${F=>{this.wvTouch.delete(F.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,this.techStroke=null,P(),this.runPointUp(),this.endJointDrags()}}
          style="--fs:${ht}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${o} height=${r} />
          ${Array.from({length:Math.floor(r/.5)},(F,O)=>I`<line class="fp3d-wv-grid" x1="0" x2=${o} y1=${h((O+1)*.5)} y2=${h((O+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${h((O+1)*.5)+.03}>${((O+1)*.5).toFixed(1)}</text>`)}
          ${d.map(F=>{let[O,N]=p(F.s0,F.s1),B=e.openings.find(ct=>ct.id===F.id),q=B?.type==="window"?this.t("opening_window"):B?.type==="garage"?this.t("opening_garage"):this.t("opening_door");return I`<rect class="fp3d-wv-hole ${B?.type==="window"?"fp3d-wv-window":""}" x=${O} y=${h(F.y1)} width=${N} height=${F.y1-F.y0} />
              ${N>ht*3.5?I`<text class="fp3d-wv-hole-label" x=${O+N/2} y=${h(F.y1)+ht*1.3} style="font-size:${ht*.85}px">${q}</text>`:v}`})}
          ${l.map(F=>{let[O,N]=p(F.s0,F.s1),B=e.furniture.find(rt=>rt.id===F.id),q=B.name||lt(this.hass,B.type),ct=F.y1-F.y0,ot=this.wallPics.get(this.wallPicKey(s,B)),tt=c(mt(s,[B.x,B.z]).s);return I`<g class="fp3d-wv-item ${ot?"fp3d-wv-pic":""} ${F.id===this._wallSel||_.includes(F.id)?"fp3d-wv-sel":""}" @pointerdown=${rt=>R(rt,F.id)} @dblclick=${()=>{if(e.furniture.find(Ot=>Ot.id===F.id)?.group&&!this._wallSingle){this.wallChoose([F.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",F.id)}}>
              ${ot?I`<image href=${ot.url} x=${tt+ot.x0} y=${h(F.y0+ot.y1)} width=${ot.x1-ot.x0} height=${ot.y1-ot.y0} preserveAspectRatio="none" />`:v}
              <rect x=${O} y=${h(F.y1)} width=${N} height=${Math.max(.02,ct)}><title>${q}</title></rect>
              ${!ot&&N>ht*3&&ct>ht*1.4?I`<text x=${O+N/2} y=${h(F.y1)+Math.min(ct/2,ht*1.6)+ht*.35} style="font-size:${ht}px">${q}</text>`:v}
            </g>`})}
          ${S}
          ${g&&f&&!y&&u&&!f.locked&&l.some(F=>F.id===g.id)?(()=>{let[F,O]=p(g.s0,g.s1),N=h(g.y1),B=h(g.y0),q=ht*.75,ct=this.alongAxis(s,f),ot=tt=>rt=>{rt.stopPropagation(),rt.currentTarget.closest("svg").setPointerCapture(rt.pointerId),this.wallResize={id:g.id,side:tt,x0:F,x1:F+O,y0:g.y0,y1:g.y1,base:this._doc,moved:!1}};return I`<g class="fp3d-wv-handles">
                  ${ct?I`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${F-q/2} y=${(N+B)/2-q} width=${q} height=${q*2} rx=${q/3} @pointerdown=${ot("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${F+O-q/2} y=${(N+B)/2-q} width=${q} height=${q*2} rx=${q/3} @pointerdown=${ot("r")} />`:v}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${F+O/2-q} y=${N-q/2} width=${q*2} height=${q} rx=${q/3} @pointerdown=${ot("t")} />
                  ${g.y0>.05&&de(f)?I`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${F+O/2-q} y=${B-q/2} width=${q*2} height=${q} rx=${q/3} @pointerdown=${ot("b")} />`:v}
                  <text class="fp3d-wv-size" x=${F+O/2} y=${N-q*.9} style="font-size:${ht*.85}px">${E(g.s1-g.s0)} × ${E(g.y1-g.y0)}</text>
                </g>`})():v}
          ${y&&w?(()=>{let[F,O]=p(w.s0,w.s1),N=!this._wallMulti.length;return I`<g class=${`fp3d-wv-setframe${N?" fp3d-wv-setblock":""}`}><rect x=${F-.03} y=${h(w.y1)-.03} width=${O+.06} height=${w.y1-w.y0+.06} /><text x=${F} y=${h(w.y1)-.07} style="font-size:${ht*.85}px">${N?`\u25A3 ${this.t("block_title")} \xB7 ${_.length}`:this.t("multi_title",{n:_.length})}</text></g>`})():v}
          ${this._wallGap?(()=>{let F=this._wallGap,[O,N]=p(F.s0,F.s1),B=F.low?Math.min(r,.9):Math.min(r,2.2),q=F.low?0:1.3;return I`<g class="fp3d-wv-gap"><rect x=${O} y=${h(B)} width=${N} height=${B-q} /><text x=${O+N/2} y=${h((B+q)/2)} style="font-size:${ht}px">${E(N)}</text></g>`})():v}
          ${this._wallFrame?I`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:v}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${o+.3} y1=${r} y2=${r} />
          ${Q?this.renderRuns(Q,c,h):v}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${Q&&this._techMode&&!this._runDraft&&!this._runSel&&!g&&(this._runMode==="draw"||this._runMode==="feed")?m`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(Q)}`:Q&&(this._runMode||this._runSel&&!g)?this.renderRunFoot(Q):y&&u?this.renderWallSetFoot(s,_,w,p):g&&f?m`<b>${f.name||lt(this.hass,f.type)}</b>
                ${this.fixButton("furniture",g.id)}
                ${f.group&&u?m`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:v}
                ${Q&&Ft.includes(f.type)?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(Q.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:v}
                ${f.locked&&u?m`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:v}
                ${this.len(this.t("wall_view_left"),Math.round(p(g.s0,g.s1)[0]*1e3)/1e3,F=>{let O=F-p(g.s0,g.s1)[0];this.moveOnWall(s,g.id,s.rightward?O:-O,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,g.d)*1e3)/1e3,F=>this.moveFromWall(s,g.id,F-g.d),.01,0)}
                ${u&&!f.locked&&this.alongAxis(s,f)?this.len(this.t("width"),Math.round((g.s1-g.s0)*1e3)/1e3,F=>{let O=Math.max(.05,F);s.rightward?this.resizeOnWall(s,g.id,g.s0,g.s0+O,null,null):this.resizeOnWall(s,g.id,g.s1-O,g.s1,null,null)},.01,.05):v}
                ${u&&!f.locked?this.len(this.t("height_m"),Math.round((g.y1-g.y0)*1e3)/1e3,F=>this.resizeOnWall(s,g.id,null,null,null,g.y0+Math.max(.03,F)),.01,.03):v}
                ${b?this.len(this.t("mount_height"),Math.round(g.y0*1e3)/1e3,F=>this.moveOnWall(s,g.id,0,F),.01,0):m`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${u&&!f.locked?m`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,F=>this.turnOnWall(f.id,F),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:v}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",g.id)}}>${this.t("wall_view_form")}</button>
                ${u?m`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([g.id])}>${this.t("delete")}</button>`:v}`:m`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${u&&!this._techMode?this.renderMultiToggle():v}
        </div>
      </div>
    </div>`}renderWallSetFoot(t,e,n,i){let s=!this._wallMulti.length,o=e.every(l=>this.isFixedItem("furniture",l)),r=!o&&e.some(l=>this.isFixedItem("furniture",l));return m`<b>${s?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</b>
      ${r?m`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:v}
      ${s?m`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let l=this._wallSel;this._wallMulti=e,this.ungroupSelectionOf(e),this._wallSel=l}}>${this.t("block_break")}</button>`:m`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(e),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,l=>{let d=l-i(n.s0,n.s1)[0];this.moveSetOnWall(t,e,t.rightward?d:-d,null)},.01,0):v}
      <button class="fp3d-btn ${r?"fp3d-primary":""}" @click=${()=>{let l=new Set(e),d=!o&&!r;this.change((c,p)=>{for(let h of p.furniture)l.has(h.id)&&(h.locked=d||null)})}}>${o?`\u{1F513} ${this.t("unfix")}`:r?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(e)}>${this.t("delete")}</button>`}async deleteOnWall(t){if(!t.length||!this.isEditor)return;if(t.length>1){if(!await this.ask(this.t(t.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:t.length})))return}else if(!await this.confirmFixedDelete("furniture",t[0]))return;let e=new Set(t);this.change((n,i)=>i.furniture=i.furniture.filter(s=>!e.has(s.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(t){let e=new Set(t),n=j("block");this.change((i,s)=>{for(let o of s.furniture)e.has(o.id)&&(o.group=n)})}ungroupSelectionOf(t){let e=new Set(t);this.change((n,i)=>{for(let s of i.furniture)e.has(s.id)&&(s.group=null)})}};var _o=class{addOnWall(t,e,n){let i=this.floor;if(!i||!this.isEditor)return;this.rememberWallType(t);let s=this._wallGap;if(s)return this.addIntoGap(t,e,n,s);let[o,r,l]=_t(t),d=[...We(e,i,n).map(b=>[b.s0,b.s1]),...gn(e,i).filter(b=>b.y0<.05).map(b=>[b.s0,b.s1])],c=Math.max(0,e.length/2-o/2);for(let b=.1;b+o<=e.length-.05;b+=.05)if(!d.some(([_,y])=>b<y+.05&&b+o>_-.05)){c=b;break}let p=se(i,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[h,u]=ie(e,c+o/2,p+r/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),g={id:j("furniture"),type:t,x:k(h),z:k(u),rotation:f,w:o,d:r,h:l,variant:null};this.change((b,_)=>_.furniture.push(g)),this._runSel=null,this._runMode=null,this._wallSel=g.id}addIntoGap(t,e,n,i){let s=this.floor,o=i.s1-i.s0,[r,l,d]=_t(t);xi.has(t)&&(r>o+.005||o-r<.1)&&(r=Math.round(o*1e3)/1e3);let c=se(s,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,p=i.s0+Math.min(r,o)/2,[h,u]=ie(e,p,c+l/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),g={id:j("furniture"),type:t,x:k(h),z:k(u),rotation:f,w:r,d:l,h:d,variant:null};this.change((b,_)=>_.furniture.push(g)),this._wallGap=null,this._wallSel=g.id,this._wallMulti=[]}rememberWallType(t){try{let e=JSON.parse(localStorage.getItem("home3d.wallRecent")??"[]");localStorage.setItem("home3d.wallRecent",JSON.stringify([t,...e.filter(n=>n!==t)].slice(0,6)))}catch{}}wallRecent(){try{let t=JSON.parse(localStorage.getItem("home3d.wallRecent")??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"&&(pi.includes(e)||!!Tt(e))):[]}catch{return[]}}renderWallFurniture(t,e){let n=this.hass?.language??"en",i=this._wallGap,s=i?i.s1-i.s0:0,o=dr(this._wallQuery.trim()),r=this._wallCat,l=(this.packs??[]).flatMap(_=>_.items.filter(y=>!y.light&&!y.vehicle&&!y.hole&&y.mount!=="ceiling").map(y=>({type:Zt(_.id,y.id),label:Lt(y,n),search:`${Object.values(y.name).join(" ")} ${_.name}`,wall:y.mount==="wall"}))),d=_=>this.t(`furn_${_}`),c=[];r==="pack"?c=l:r==="energy"?c=["meter","inverter","home_battery","wallbox"].map(_=>({type:_,label:d(_),search:""})):r?c=(xs[r]??[]).map(_=>({type:_,label:d(_),search:ee(Mi,`furn_${_}`)})):o||i?c=[...Object.values(xs).flat().filter((_,y,$)=>$.indexOf(_)===y).map(_=>({type:_,label:d(_),search:ee(Mi,`furn_${_}`)})),...l]:this.wallRecent().length||(c=xs.base.map(_=>({type:_,label:d(_),search:""})));let p=o.split(/\s+/).filter(Boolean),h=p.length?c.filter(_=>p.every(y=>dr(`${_.label} ${_.search} ${_.type.replace(/[_:.]/g," ")}`).includes(y))):c;if(i){let _=(y,$)=>$||hc.has(y);h=h.filter(y=>_(y.type,y.wall)===!i.low).filter(y=>_t(y.type)[0]<=s+.01||xi.has(y.type)&&s>=(fc[y.type]??.2)).sort((y,$)=>{let w=E=>xi.has(E)?1:Math.min(1,_t(E)[0]/s);return w($.type)-w(y.type)||Number(y.type.startsWith("pack:"))-Number($.type.startsWith("pack:"))})}let u=!r&&!o&&!i?this.wallRecent():[],f=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],["switches","\u{1F50C}"],...(this.packs??[]).some(_=>_.items.length)?[["pack","\u{1F9E9}"]]:[],["energy","\u26A1"]],g=[...u,...h.slice(0,40).map(_=>_.type)];this.askKitPics(g),this._wallPicTick;let b=(_,y)=>{let $=_t(_)[0],w=i&&xi.has(_)&&($>s+.005||s-$<.1),E=this.kitPics.get(_);return m`<button class="fp3d-wv-tile" title=${y} @click=${()=>this.addOnWall(_,t,e)}>
        <span class="fp3d-wv-tile-pic">${E?m`<img src=${E} alt="" />`:m`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${y}</span>
        <small class=${w?"fp3d-wv-fit":""}>${w?`\u2194 ${this.m(s,2)}`:this.m($,2)}</small>
      </button>`};return m`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${f.map(([_,y])=>m`<button class="fp3d-wv-cat ${r===_?"fp3d-on":""}" title=${this.t(`wv_cat_${_}`)} @click=${()=>this._wallCat=r===_?null:_}><span>${y}</span>${this.t(`wv_cat_${_}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${_=>this._wallQuery=_.target.value} />
      ${i?m`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(s,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!r&&!o?m`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:v}
      ${r?m`<h4>${this.t(`wv_cat_${r}`)}</h4>`:v}
      ${u.length?m`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${u.map(_=>b(_,Tt(_)?Lt(Tt(_),n):d(_)))}</div>`:v}
      ${(r||o||i)&&!h.length?m`<p class="fp3d-sub">${this.t(i?"wv_none_fits":"furniture_search_none")}</p>`:v}
      <div class="fp3d-wv-tiles">${h.slice(0,40).map(_=>b(_.type,_.label))}</div>
    </aside>`}async askKitPics(t){let e=t.filter(n=>!this.kitPicsAsked.has(n));if(e.length){for(let n of e)this.kitPicsAsked.add(n);try{let[n]=await Promise.all([ze(),this.hass?ue(this.hass,e):void 0]);for(let i of e){let[s,o,r]=_t(i);this.kitPics.set(i,n.furniturePreview({type:i,w:s,d:o,h:r,variant:null,lamp:He[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(t,e,n){let i=!!n;if(!i)return this.isEditor?this.renderWallFurniture(t,e):v;if(this._techMode&&n)return this.renderTechKit(t,e,n);if(!this.isEditor)return v;let s=r=>m`<button class="fp3d-btn" @click=${()=>this.addOnWall(r,t,e)}>+ ${this.t(`furn_${r}`)}</button>`,o=(r,l)=>m`<button class="fp3d-btn ${this._runMode===r?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,r)}>+ ${this.t(l)}</button>`;return m`<aside class="fp3d-wv-kit">
      ${i?m`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${o("valve","wall_run_valve")} ${o("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(r=>m`<button class="fp3d-btn ${this._runMode===r?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===r?null:r}}>+ ${this.t(`wall_kit_${r}`)}</button>`)}`:v}
      ${m`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`}
    </aside>`}};var yo=class{techDoc3d(){let t=this._doc3d;if(this.techDocCache?.src===t)return this.techDocCache.doc;let e={...t,floors:t.floors.map(n=>({...n,furniture:n.furniture.filter(i=>Ft.includes(i.type))}))};return this.techDocCache={src:t,doc:e},e}enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}runFrame(t){let[e,n]=t.split("|"),i=this.floor?.rooms.find(s=>s.id===e);return i&&Number(n)<i.points.length?De(i,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(r=>r.outdoor.some(l=>l.id===t.pool)),s=i?.outdoor.find(r=>r.id===t.pool);if(!i||!s)return this._doc;s.pool??={};let o={id:"__draft",from:t.from,to:"",floor_id:i.id,points:e.map(r=>[r[0],r[2]]),heights:e.map(r=>r[1])};return s.pool.pipes=[...s.pool.pipes??[],o],n}runLast(t,e){if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=ut(this._doc,e.floor,e.pool);if(t.extend){let s=e.pool.pool?.pipes?.find(r=>r.id===t.extend.pipe),o=s?Xt(s,n):[];return(t.extend.end==="to"?o[o.length-1]:o[0])??null}let i=n(t.from);return i?[i.x,i.y,i.z]:null}runPick(t,e,n,i=!1){if(!i){for(let l of t.runs)for(let d of l.ends)if(Math.hypot(d.s-e,d.y-n)<.12)return{end:{pipe:l.id,end:d.end}}}let s=ut(this._doc,t.floor,t.pool),o=null,r=[...t.floor.furniture.filter(l=>Ft.includes(l.type)).flatMap(l=>Be(l.type).length?Be(l.type).map(d=>`dev:${l.id}:${d}`):[`dev:${l.id}`]),...(t.pool.pool?.joints??[]).map(l=>l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`)];for(let l of i?[]:r){let d=s(l);if(!d)continue;let c=mt(t.frame,[d.x,d.z]);if(c.d<-.3||c.d>1.6)continue;let p=Math.hypot(c.s-e,d.y-n);p<.12&&(!o||p<o.d)&&(o={node:l,d:p})}if(o)return{node:o.node};if(this._techMode&&!i){let l=t.floor.furniture.find(d=>{if(!Ft.includes(d.type)||d.type==="pool_valve")return!1;let c=Wt(d).map(h=>mt(t.frame,h));if(Math.min(...c.map(h=>h.d))>1.6||Math.max(...c.map(h=>h.d))<-.3)return!1;let p=Ht(t.floor,d);return Math.min(...c.map(h=>h.s))-.03<=e&&e<=Math.max(...c.map(h=>h.s))+.03&&p-.03<=n&&n<=p+d.h+.03});if(l)return{node:`dev:${l.id}`}}for(let l of t.runs)for(let d of l.pieces){let[c,p]=[d.s1-d.s0,d.y1-d.y0],h=c*c+p*p,u=h>0?Math.max(0,Math.min(1,((e-d.s0)*c+(n-d.y0)*p)/h)):0,[f,g]=[d.s0+c*u,d.y0+p*u];if(Math.hypot(f-e,g-n)<(i?.24:.07))return{pipe:{id:l.id,p:he(t.frame,f,g,d.d0+(d.d1-d.d0)*u)}}}return{}}eraseAt(t,e,n){let i=(l,d,c)=>Math.hypot(l-e,d-n)<c;for(let l of t.runs)for(let d of l.fittings)if(i(d.s,d.y,.1*Math.max(1,this.wvScale))){this.changePool(t.pool.id,c=>{let p=c.pipes?.find(h=>h.id===l.id);p&&(p.fittings=(p.fittings??[]).filter(h=>h.id!==d.id))});return}let s=ut(this._doc,t.floor,t.pool),o=(t.pool.pool?.joints??[]).find(l=>{let d=l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`,c=s(d);if(!c)return!1;let p=mt(t.frame,[c.x,c.z]);return p.d>-.3&&p.d<1.6&&i(p.s,c.y,.1)});if(o){let l=`joint:${o.id}`;this.changePool(t.pool.id,d=>{d.joints=(d.joints??[]).filter(c=>c.id!==o.id),d.pipes=(d.pipes??[]).filter(c=>me(c.from)!==l&&me(c.to)!==l)}),this._runSel=null;return}let r=this.runPick(t,e,n,!0);if(r.pipe){let l=r.pipe.id;this.changePool(t.pool.id,d=>d.pipes=(d.pipes??[]).filter(c=>c.id!==l)),this._runSel=null}}runDown(t,e){if(!this._runMode||!this.isEditor||(t.stopPropagation(),this._techAsk=null,this._techMode&&this._runMode==="draw"))return;let{s:n,y:i}=e.pt(t);this.runAt(e,n,i,t.altKey,t.detail,null)}runDown3d(t){let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isEditor||!this._wallView3d)return;let n=this.wall3dEl?.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[s,o]=[t.clientX-i.left,t.clientY-i.top],r=n.furnitureIdAt(s,o),l=r?e.floor.furniture.find(y=>y.id===r&&Ft.includes(y.type)):void 0,d=n.pointerRay(s,o),c=ie(e.frame,0,e.gap),p=e.frame.n,h=d.d[0]*p[0]+d.d[2]*p[1];if(Math.abs(h)<1e-6)return;let u=((c[0]-d.o[0])*p[0]+(c[1]-d.o[2])*p[1])/h;if(u<=0&&!l)return;let f=[d.o[0]+d.d[0]*u,d.o[1]+d.d[1]*u,d.o[2]+d.d[2]*u],g=e.floor.elevation+(n.floorMap.get(e.floor.id)?.y??0),b=ut(this._doc,e.floor,e.pool),_=()=>{let y=Be(l.type);if(!y.length)return`dev:${l.id}`;let $=w=>{let E=b(w),x=[E.x-d.o[0],E.y+g-d.o[1],E.z-d.o[2]],M=x[0]*d.d[0]+x[1]*d.d[1]+x[2]*d.d[2];return Math.hypot(x[0]-d.d[0]*M,x[1]-d.d[1]*M,x[2]-d.d[2]*M)};return y.map(w=>`dev:${l.id}:${w}`).sort((w,E)=>$(w)-$(E))[0]};this.runAt(e,mt(e.frame,[f[0],f[2]]).s,f[1]-g,t.altKey,t.detail,l&&this._runMode==="draw"?_():null)}runAt(t,e,n,i,s,o){let r=this._runMode;if(!r)return;if(r==="tee"&&this._techMode){let c=this.runPick(t,e,n,!0);c.pipe&&this.teeOnPipe(t,c.pipe.id,c.pipe.p);return}if(r==="hole_wall"||r==="hole_floor"||r==="tee"||r==="y")return this.placeJoint(t,r,e,n);if(r==="feed")return this.placeFeed(t,e,n);if(r==="erase")return this.eraseAt(t,e,n);let l=o?{node:o}:this.runPick(t,e,n,r!=="draw");if(r!=="draw"){if(!l.pipe&&this._techMode)return;l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,r),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let d=this._runDraft;if(d&&this._techMode&&!this.techStroke&&((d.pts.length>=2||(d.extend||d.fromT||d.from)&&d.pts.length)&&this.finishRun("",null),this._runDraft=null,d=null),!d){let c={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},p;l.end?p={...c,extend:l.end}:l.node?p={...c,from:l.node}:l.pipe?p={...c,fromT:l.pipe.p}:p={...c,pts:[he(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...p,anchor:this.runLast({...p,pts:[]},t)};return}if(s>=2)return void this.finishRun("",null);if(l.node&&l.node!==d.from)return void this.finishRun(l.node,null);if(l.pipe)return void this.finishRun("",l.pipe.p);this._runDraft={...d,pts:[...d.pts,...this.runStep(d,t,e,n,i)],wall:t.key,d:t.gap}}runStep(t,e,n,i,s){let o=Math.round(n*20)/20,r=Math.round(i*20)/20,l=[],d=this.runLast(t,e);if(d&&t.wall!==e.key){let c=this.runFrame(t.wall),p=c&&pc(c,t.d,e.frame,e.gap);p&&(d=[k(p[0]),d[1],k(p[1])],l.push(d))}if(d&&!s){let c=mt(e.frame,[d[0],d[2]]);c.d>-.35&&c.d<.6&&(Math.abs(o-c.s)<Math.abs(r-d[1])?o=c.s:r=d[1])}return l.push(he(e.frame,o,r,e.gap)),l.map(c=>[k(c[0]),k(c[1]),k(c[2])])}finishRun(t,e,n=[],i){let s=this._runDraft,o=this.floor,r=this.pipeRules;if(this._runDraft=null,!s||!o||!r)return null;let l=[...s.pts,...n],d=this._techMode?this.runFrame(s.wall):null,c=this._techMode?this.floor?.outdoor.find(h=>h.id===s.pool):void 0;if(d&&c&&!n.length&&(t||e)){let h=l.length?l[l.length-1]:(()=>{let f=s.from?ut(this._doc,o,c)(s.from):null;return f?[f.x,f.y,f.z]:s.fromT})(),u=e?{x:e[0],y:e[1],z:e[2]}:ut(this._doc,o,c)(t);if(h&&u){let f=mt(d,[h[0],h[2]]),g=mt(d,[u.x,u.z]);Math.abs(f.s-g.s)>.03&&Math.abs(h[1]-u.y)>.03&&l.push(he(d,g.s,h[1],s.d))}}if(!l.length&&!e&&(!t||t===s.from)&&!s.fromT)return null;let p=null;return this.changePool(s.pool,(h,u)=>{let f=h.joints??=[],g=h.pipes??=[],b=ut(this._doc,o,u),_=z=>{let H=z.startsWith("joint:")?f.find(D=>`joint:${D.id}`===z):void 0;return H?{x:H.x,z:H.z,y:H.y}:b(z)},y=z=>{let H=null;for(let C of g){let W=Qn(Xt(C,_),z);W&&W.d<.12&&(!H||W.d<H.d)&&(H={pipe:C,d:W.d})}let D=H&&Ai(H.pipe,_,z,j("joint"),j("pipe"));return!H||!D?"":(f.push(D.joint),g.splice(g.indexOf(H.pipe),1,D.first,D.second),`joint:${D.joint.id}:out2`)},$=(z,H=[])=>{let{kind:D,id:C,port:W}=dt(z),G=D==="joint"&&!W?f.find(it=>it.id===C):void 0;if(!G||!G.kind)return z;if(G.kind==="wall"||G.kind==="floor")return`joint:${C}:inside`;let Y=new Set([...g.flatMap(it=>[it.from,it.to]),...H]),X=Mn(G.kind).find(it=>!Y.has(`joint:${C}:${it}`));return X?`joint:${C}:${X}`:z},w=s.fromT?y(s.fromT):$(s.from),E=e?y(e):$(t,[w]),x=o.furniture.filter(z=>Ft.includes(z.type)).map(z=>({id:z.id,type:z.type})),M=z=>g.flatMap(H=>[H.from,H.to]).filter(H=>me(H)===z).map(H=>dt(H).port).filter(H=>!!H),R=z=>{let{kind:H,id:D}=dt(z);return H==="port"?u.pool?.ports?.find(C=>C.id===D)?.kind==="waste":H==="joint"&&/kanal|waste|abwasser|backwash/i.test(f.find(C=>C.id===D)?.name??"")},T=(z,H)=>{let{kind:D,id:C,port:W}=dt(z);if(D!=="dev"||W)return z;let G=o.furniture.find(X=>X.id===C)?.type??"",Y=r.autoPort(G,H?r.nodeFlow(H,u,x):null,R(H),M(`dev:${C}`));return Y?`dev:${C}:${Y}`:z};w=T(w,E),E=T(E,w);let L=l.map(z=>[k(z[0]),k(z[2])]),P=l.map(z=>k(z[1])),A=s.extend,V=A&&g.find(z=>z.id===A.pipe);if(A&&V){Object.assign(V,Jt(V,_)),A.end==="to"?(V.points=[...V.points,...L],V.heights=[...V.heights??[],...P],V.to=E):(V.points=[...L.reverse(),...V.points],V.heights=[...P.reverse(),...V.heights??[]],V.from=E),i!==void 0&&(V.height=i),p=V.id;return}let S={id:j("pipe"),from:w,to:E,floor_id:o.id,points:L,heights:P,height:i??P[P.length-1]??null};S=r.orientPipe(S,w?r.nodeFlow(w,u,x):null,E?r.nodeFlow(E,u,x):null),g.push(S),p=S.id}),p&&!this._techMode&&(this._runSel={pipe:p,pt:null}),this._runMode=this._techMode?"draw":null,p}teeOnPipe(t,e,n){let i=ut(this._doc,t.floor,t.pool);this.changePool(t.pool.id,s=>{let o=[...s.pipes??[]],r=o.findIndex(d=>d.id===e);if(r<0)return;let l=Ai(o[r],i,n,j("joint"),j("pipe"));l&&(s.joints=[...s.joints??[],l.joint],o.splice(r,1,l.first,l.second),s.pipes=o)}),this._runMode="draw"}placeFeed(t,e,n){let i=this._feedKind;this._feedKind=null,this._runMode="draw",i&&this.feedAt(t,i,e,n)}feedAt(t,e,n,i){let s=this.floor;if(!s)return null;let o=Math.round(n*20)/20,r=i<.25,l=t.gap-wi,d=se(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c=this.t(`feed_${e}`),[p,h]=Je(t.frame,o,r?t.gap:l),u=r?{id:j("joint"),kind:"floor",x:p,z:h,y:0,name:c}:{id:j("joint"),kind:"wall",x:p,z:h,y:Math.round(i*20)/20,nx:k(t.frame.n[0]),nz:k(t.frame.n[1]),depth:k(d),name:c};return this.changePool(t.pool.id,(f,g)=>{f.joints=[...f.joints??[],u];let b=(f.ports??[]).filter(E=>E.kind===e);if(e==="waste"&&!b.length){let E=sn(u,"outside"),x={id:j("port"),kind:"waste",x:k(E.x-t.frame.n[0]*1),z:k(E.z-t.frame.n[1]*1)};f.ports=[...f.ports??[],x],b=[x]}if(!b.length)return;let _=ut(this._doc,s,g),y=E=>{let{kind:x,id:M,port:R}=dt(E),T=x==="joint"?(f.joints??[]).find(P=>P.id===M):void 0;if(T)return sn(T,R);let L=x==="port"?(f.ports??[]).find(P=>P.id===M):void 0;return L?_(E)??{x:L.x,y:.02,z:L.z}:_(E)},$=E=>{let{kind:x,id:M}=dt(E);if(x==="port"){let R=(f.ports??[]).find(T=>T.id===M);return R?Ls(R.kind):null}return null},w=En({from:`joint:${u.id}:outside`,vias:[],to:b.map(E=>`port:${E.id}`),floorId:s.id},y,f.joints??[],$,E=>j(E));f.joints=[...f.joints??[],...w.joints],f.pipes=[...f.pipes??[],...w.pipes]}),u}endStroke(t,e,n){let i=this._runDraft;if(!i)return;let s=this.runLast(i,t),o=s?mt(t.frame,[s[0],s[2]]):null,r=o&&o.d>-.35&&o.d<.6?{s:o.s,y:s[1]}:e[0],l=mc([r,...vs(e,.08),n]),d=l.slice(1,-1).map(f=>{let g=he(t.frame,f.s,f.y,t.gap);return[k(g[0]),k(g[1]),k(g[2])]}),c=this.runPick(t,n.s,n.y);if(this._techAsk=null,c.node&&c.node!==i.from){this.finishRun(c.node,null,d);return}if(c.pipe){this.finishRun("",c.pipe.p,d);return}let p=l[l.length-1],h=he(t.frame,Math.round(p.s*20)/20,Math.round(p.y*20)/20,t.gap),u=this.finishRun("",null,[...d,[k(h[0]),k(h[1]),k(h[2])]]);u&&(this._techAsk={s:p.s,y:p.y,pipe:u})}answerAsk(t,e){let n=this._techAsk;if(this._techAsk=null,!n)return;if(e==="cancel"){this.changePool(t.pool.id,s=>s.pipes=(s.pipes??[]).filter(o=>o.id!==n.pipe));return}if(!e)return;let i=this.feedAt(t,e,n.s,n.y);i&&this.changePool(t.pool.id,s=>{let o=s.pipes?.find(r=>r.id===n.pipe);o&&(o.to?o.from||(o.from=`joint:${i.id}:inside`):o.to=`joint:${i.id}:inside`)})}renderTechKit(t,e,n){let i=n.pool,s=this.pipeRules;if(!s)return v;let o=c=>m`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(c,t,e)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(c)?m`<img src=${this.kitPics.get(c)} alt="" />`:m`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${c}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let r=["skimmer","drain","inlet","waste"].filter(c=>c==="waste"||(i.pool?.ports??[]).some(p=>p.kind===c)),l=(c,p)=>m`<button class="fp3d-btn ${this._runMode===c?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===c?"draw":c}}>+ ${this.t(p)}</button>`,d=this._techAsk;return m`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${d?m`<div class="fp3d-tech-ask">
            <b>${this.t("tech_ask")}</b>
            ${["skimmer","drain","inlet","waste"].map(c=>m`<button class="fp3d-btn fp3d-tech-feed" @click=${()=>this.answerAsk(n,c)}><i>${c==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${c}`)}</button>`)}
            <button class="fp3d-btn" @click=${()=>this.answerAsk(n,null)}>${this.t("tech_ask_loose")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.answerAsk(n,"cancel")}>${this.t("delete")}</button>
          </div>`:this.renderTechStep(n)}
      <div class="fp3d-seg fp3d-tech-pen" role="group">
        <button aria-pressed=${this._runMode==="draw"} @click=${()=>{this._runMode="draw",this._runSel=null}}><span>✏</span>${this.t("tech_draw")}</button>
        <button aria-pressed=${this._runMode!=="draw"&&this._runMode!=="feed"&&this._runMode!=="erase"} @click=${()=>{this._runDraft=null,this._runMode=null}}><span>✋</span>${this.t("tech_pick")}</button>
        <button aria-pressed=${this._runMode==="erase"} title=${this.t("tech_erase_hint")} @click=${()=>{this._runDraft=null,this._runSel=null,this._feedKind=null,this._runMode=this._runMode==="erase"?"draw":"erase"}}><span>🧽</span>${this.t("tech_erase")}</button>
      </div>
      <button class="fp3d-btn fp3d-tech-undo" ?disabled=${!this._canUndo} title="Ctrl+Z" @click=${()=>{this._runDraft=null,this.undo()}}>${Dt("undo")} ${this.t("undo")}</button>
      <h4>${this.t("tech_feeds")}</h4>
      ${r.map(c=>{let p=s.feedDone(i,c);return m`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===c?"fp3d-primary":""} ${p?"fp3d-on":""}" ?disabled=${p} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===c?null:c,this._runMode=this._feedKind?"feed":"draw"}}><i>${c==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${c}`)}${p?m`<small>✓</small>`:v}</button>`})}
      ${(i.pool?.ports??[]).some(c=>c.kind!=="waste")?v:m`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(o)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${l("valve","wall_run_valve")} ${l("sight","wall_run_sight")}
      <button class="fp3d-btn ${this._runMode==="tee"?"fp3d-primary":""}" title=${this.t("tech_step_tee")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode==="tee"?"draw":"tee"}}>+ ${this.t("joint_add_tee")}</button>
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(t){let e=t.pool,n=this.pipeRules;if(!n)return v;let i=e.pool?.ports??[],s=t.floor.furniture.filter(u=>Ft.includes(u.type)),o=(u,f)=>m`<div class="fp3d-tech-step ${u===null?"fp3d-done":""}"><b>${u===null?"\u2713":this.t("tech_step",{n:u})}</b>${f}</div>`;if(this._runMode==="feed")return o(1,this.t("tech_feed_place"));if(this._runMode==="erase")return m`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return o(4,this.t("tech_step_fit"));if(this._runMode==="tee")return o(4,this.t("tech_step_tee"));if(this._runDraft)return o(3,this.t("tech_step_drawing"));if(!i.some(u=>u.kind!=="waste"))return o(1,this.t("tech_no_ports"));let r=["skimmer","drain","inlet"].find(u=>i.some(f=>f.kind===u)&&!n.feedDone(e,u));if(r)return o(1,this.t("tech_step_feed",{name:this.t(`feed_${r}`)}));let l=s.find(u=>u.type==="pool_pump"),d=s.find(u=>u.type==="pool_filter");if(!l||!d)return o(2,this.t("tech_step_devices"));let c=n.issues(e,s.map(u=>({id:u.id,type:u.type}))),p=u=>this.poolNodeLabel(e,u),h=c.find(u=>u.kind==="port");if(h){let{port:u}=dt(h.node),f={suction:this.t("feed_skimmer"),pressure:p(`dev:${d.id}:pump`),pump:p(`dev:${l.id}:pressure`),return:s.some(g=>g.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:p(`dev:${d.id}:return`),out:this.t("feed_inlet")};return o(3,this.t("tech_step_line",{a:u?f[u]??"\u2026":"\u2026",b:p(h.node)}))}return c.some(u=>u.kind==="loose")?o(3,this.t("tech_step_loose")):o(null,this.t("tech_ok"))}renderTechIssues(t){let e=t.floor.furniture.filter(r=>Ft.includes(r.type)).map(r=>({id:r.id,type:r.type})),n=this.pipeRules;if(!n)return v;let i=n.issues(t.pool,e);if(!i.length)return m`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let s=i.filter(r=>r.kind==="loose").length,o=[...s?[this.t("tech_issue_loose",{n:s})]:[],...i.filter(r=>r.kind==="port").map(r=>this.t("tech_issue_port",{name:this.poolNodeLabel(t.pool,r.node)})),...i.filter(r=>r.kind==="feed").map(r=>this.t("tech_issue_feed",{name:this.t(`feed_${r.node}`)}))];return m`<span class="fp3d-tech-issues">⚠ ${o.slice(0,4).join(" \xB7 ")}${o.length>4?" \u2026":""}</span>`}placeJoint(t,e,n,i){let s=t.gap-wi,o=Math.round(n*100)/100,r=Math.round(i*100)/100,l=se(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d;if(e==="hole_wall"){let[c,p]=Je(t.frame,o,s);d={id:j("joint"),kind:"wall",x:c,z:p,y:Math.max(.05,r),nx:k(t.frame.n[0]),nz:k(t.frame.n[1]),depth:k(l)}}else if(e==="hole_floor"){let[c,p]=Je(t.frame,o,t.gap);d={id:j("joint"),kind:"floor",x:c,z:p,y:0}}else{let[c,p]=Je(t.frame,o,t.gap);d={id:j("joint"),kind:e,x:c,z:p,y:r}}this.changePool(t.pool.id,c=>c.joints=[...c.joints??[],d]),this._runMode=null}runOut(t,e){let n=this._runDraft,i=n&&this.runLast(n,t);if(!n||!i)return;if(e==="down")return void this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let s=mt(t.frame,[i[0],i[2]]),o=se(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,r=he(t.frame,s.s,i[1],-(o+.15));this.finishRun("",null,[[k(r[0]),i[1],k(r[2])]],i[1])}addFitting(t,e,n,i){let s=ut(this._doc,t.floor,t.pool);this.changePool(t.pool.id,o=>{let r=o.pipes?.find(d=>d.id===e),l=r&&Qn(Xt(r,s),n);!r||!l||(r.fittings=[...r.fittings??[],{id:j("fit"),kind:i,at:k(l.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,i){if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,this._runSel?.pipe!==n.id||!this.isEditor){this._runSel={pipe:n.id,pt:null};return}let{s,y:o}=e.pt(t),r=n.pieces.find(u=>u.k===i),l=Math.hypot(r.s1-r.s0,r.y1-r.y0)>0?Math.hypot(s-r.s0,o-r.y0)/Math.hypot(r.s1-r.s0,r.y1-r.y0):0,d=r.d0+(r.d1-r.d0)*Math.min(1,l),c=this._doc,p=ut(c,e.floor,e.pool),h=-1;this.changePool(e.pool.id,u=>{let f=u.pipes?.find(g=>g.id===n.id);f&&(Object.assign(f,Jt(f,p)),h=Math.max(0,Math.min(f.points.length,i+1-Ti(f,p))),f.points.splice(h,0,Je(e.frame,s,d)),f.heights.splice(h,0,k(o)))}),!(h<0)&&(this._runSel={pipe:n.id,pt:h},this.runDrag={pipe:n.id,i:h,d,base:c,moved:!0},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}runPointDown(t,e,n,i){if(this._runMode||!this.isEditor)return;t.stopPropagation();let s=ut(this._doc,e.floor,e.pool);if(this.doubleTap(t,`runpt:${n}:${i}`)){this.changePool(e.pool.id,d=>{let c=d.pipes?.find(p=>p.id===n);c&&(Object.assign(c,Jt(c,s)),c.points.splice(i,1),c.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let o=e.pool.pool?.pipes?.find(d=>d.id===n),l=(o&&Jt(o,s))?.points[i];l&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:mt(e.frame,l).d,base:this._doc,moved:!1},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}runPointMove(t,e){let n=this.runDrag;if(!n)return;let{s:i,y:s}=e.pt(t);i=Math.round(i*100)/100,s=Math.round(s*100)/100;let o=ut(n.base,e.floor,e.pool),l=n.base.floors.flatMap(c=>c.outdoor).find(c=>c.id===e.pool.id)?.pool?.pipes?.find(c=>c.id===n.pipe);if(!l)return;let d=Jt(l,o);if(!t.altKey){let c=Xt(d,o),p=Ti(d,o);for(let h of[c[n.i+p-1],c[n.i+p+1]]){if(!h)continue;let u=mt(e.frame,[h[0],h[2]]);Math.abs(u.s-i)<.04&&(i=k(u.s)),Math.abs(h[1]-s)<.04&&(s=k(h[1]))}}n.moved=!0,this.change((c,p)=>{let h=p.outdoor.find(u=>u.id===e.pool.id)?.pool?.pipes?.find(u=>u.id===n.pipe);h&&(Object.assign(h,Jt(h,o)),h.points[n.i]=Je(e.frame,i,n.d),h.heights[n.i]=s)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t?.moved&&this.pushHistory(t.base)}endJointDrags(){for(let t of[this.fitDrag,this.jointDrag])t?.moved&&this.pushHistory(t.base);this.fitDrag=null,this.jointDrag=null}fittingDown(t,e,n,i){if(!(this._runMode||!this.isEditor)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},this.doubleTap(t,`fitting:${i}`)){this.changePool(e.pool.id,s=>{let o=s.pipes?.find(r=>r.id===n);o?.fittings&&(o.fittings=o.fittings.filter(r=>r.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId)}}jointDown(t,e,n){this._runMode||!this.isEditor||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:s}=e.pt(t),o=t.altKey?i:Math.round(i*100)/100,r=t.altKey?s:Math.round(s*100)/100;this.change((l,d)=>{let c=d.outdoor.find(p=>p.id===e.pool.id)?.pool?.joints?.find(p=>p.id===n.id);c&&([c.x,c.z]=Je(e.frame,o,n.d),c.kind!=="floor"&&(c.y=Math.max(c.kind==="wall"?.05:-1,k(r))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:s}=e.pt(t),o=e.runs.find(c=>c.id===n.pipe);if(!o)return;let r=null;for(let c of o.pieces){let[p,h]=[c.s1-c.s0,c.y1-c.y0],u=p*p+h*h,f=u>0?Math.max(0,Math.min(1,((i-c.s0)*p+(s-c.y0)*h)/u)):0,[g,b]=[c.s0+p*f,c.y0+h*f],_=Math.hypot(g-i,b-s);(!r||_<r.d)&&(r={p:he(e.frame,g,b,c.d0+(c.d1-c.d0)*f),d:_})}if(!r)return;let l=ut(n.base,e.floor,e.pool),d=r.p;this.change((c,p)=>{let h=p.outdoor.find(g=>g.id===e.pool.id)?.pool?.pipes?.find(g=>g.id===n.pipe),u=h?.fittings?.find(g=>g.id===n.id),f=h&&Qn(Xt(h,l),d);u&&f&&(u.at=k(f.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{let i=n.pipes?.find(s=>s.id===e.pipe)?.fittings?.find(s=>s.id===e.id);i?.kind==="valve"&&(i.open=i.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(s=>s.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let i=[...n.pieces].sort((s,o)=>Math.hypot(o.s1-o.s0,o.y1-o.y0)-Math.hypot(s.s1-s.s0,s.y1-s.y0))[0];this.addFitting(t,n.id,he(t.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),e),this._runMode=null}renderRuns(t,e,n){let i=this._runSel?.pipe,s=y=>{let $=mt(t.frame,[y[0],y[2]]);return`${e($.s)},${n(y[1])}`},o=this._runDraft,r=o&&this.runLast(o,t),l=o?[...o.fromT||o.extend||o.from?[this.runLast({...o,pts:[]},t)]:[],...o.pts].filter(y=>!!y):[],d=this.runHover,c=ut(this._doc,t.floor,t.pool),p={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},h=[],u=(y,$,w="",E)=>{let x=c(y),M=x&&mt(t.frame,[x.x,x.z]);if(!(x&&M&&M.d>-.6&&M.d<1.6&&M.s>-.2&&M.s<t.L+.2))return[];let R=h.filter(L=>Math.hypot(L.s-M.s,L.y-x.y)<.3*this.wvScale).length;h.push({s:M.s,y:x.y});let T=R&&this.wvScale>.5?"":$;return[I`<g class="fp3d-wv-node ${w} ${E?"fp3d-wv-joint":""}" transform="translate(${e(M.s)} ${n(x.y)}) scale(${this.wvScale})" @pointerdown=${L=>E&&this.jointDown(L,E,M.d)}>
            <circle r="0.05" /><text y=${.11+R*.07}>${T}</text><title>${this.poolNodeLabel(t.pool,y)}</title>
          </g>`]},f=[...t.floor.furniture.flatMap(y=>{if(p[y.type]===void 0)return[];let $=Be(y.type);return $.length?$.flatMap(w=>u(`dev:${y.id}:${w}`,this.t(`port_${w}`))):u(`dev:${y.id}`,p[y.type])}),...(t.pool.pool?.joints??[]).flatMap(y=>y.kind==="wall"||y.kind==="floor"?u(`joint:${y.id}:inside`,this.jointLabel(t.pool,y.id),"fp3d-wv-hole-mark",y.id):u(`joint:${y.id}`,this.jointLabel(t.pool,y.id),"",y.id))],g=this.pipeRules,b=this._techMode&&g?g.flow({pipes:t.pool.pool?.pipes??[],ports:t.pool.pool?.ports??[],devices:this._doc.floors.flatMap(y=>y.furniture).filter(y=>Ft.includes(y.type)).map(y=>({id:y.id,type:y.type,open:y.valve_open!==!1,valve:y.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,_=y=>{let $=b?.get(y);if(!$?.active||!g)return"";let[w,E,x]=g.waterColor($).map(M=>Math.round(M*255));return`stroke: rgb(${w}, ${E}, ${x}); stroke-opacity: 0.95`};return I`<g class="fp3d-wv-runs">
      ${f}
      ${t.runs.map(y=>I`<g class="fp3d-wv-run ${y.id===i?"fp3d-wv-run-sel":""} ${b&&!b.get(y.id)?.active?"fp3d-wv-dry":""}">
          ${y.pieces.map($=>I`<line class=${$.y0<-.01&&$.y1<-.01?"fp3d-wv-under":""} style=${_(y.id)} x1=${e($.s0)} y1=${n($.y0)} x2=${e($.s1)} y2=${n($.y1)} @pointerdown=${w=>this.runPieceDown(w,t,y,$.k)} />`)}
          ${y.ends.map($=>I`<circle class="fp3d-wv-end" cx=${e($.s)} cy=${n($.y)} r="0.035" />`)}
          ${y.fittings.map($=>$.kind==="valve"?I`<g class="fp3d-wv-valve ${$.open?"":"fp3d-wv-shut"}" transform="translate(${e($.s)} ${n($.y)}) scale(${this.wvScale})" @pointerdown=${w=>this.fittingDown(w,t,y.id,$.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${$.open?.11:0} y2=${$.open?0:-.11} />
                </g>`:I`<rect class="fp3d-wv-sight" x=${e($.s)-.06} y=${n($.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${w=>this.fittingDown(w,t,y.id,$.id)} />`)}
          ${y.id===i?y.points.map($=>I`<circle class="fp3d-wv-runpt ${this._runSel?.pt===$.i?"fp3d-on":""}" cx=${e($.s)} cy=${n($.y)} r="0.04" @pointerdown=${w=>this.runPointDown(w,t,y.id,$.i)} />`):v}
        </g>`)}
      ${l.length?I`<polyline class="fp3d-wv-draft" points=${l.map(s).join(" ")} />`:v}
      ${this.techStroke&&this.techStroke.length>1?I`<polyline class="fp3d-wv-draft fp3d-wv-stroke" points=${this.techStroke.map(y=>`${e(y.s)},${n(y.y)}`).join(" ")} />`:v}
      ${r&&d?I`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${s(r).split(",")[0]} y1=${s(r).split(",")[1]} x2=${e(d[0])} y2=${n(d[1])} />`:v}
    </g>`}renderRunFoot(t){let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return m`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return m`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return m`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?m`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:v}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,s=i&&t.pool.pool?.pipes?.find(p=>p.id===i.pipe);if(!i||!s)return v;let o=ut(this._doc,t.floor,t.pool),r=Jt(s,o),l=i.pt,d=this.isEditor,c=s.to?s.from?null:"from":"to";return m`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&r.heights?.[l]!==void 0?this.len(this.t("wall_run_pt"),r.heights[l]??0,p=>this.changePool(t.pool.id,h=>{let u=h.pipes?.find(f=>f.id===s.id);u&&(Object.assign(u,Jt(u,o)),u.heights[l]=Math.min(10,Math.max(-5,k(p))))}),.01):v}
      ${d?m`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${c?m`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let p={pool:t.pool.id,from:"",fromT:null,extend:{pipe:s.id,end:c},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...p,anchor:this.runLast(p,t)}}}>${this.t("wall_run_more")}</button>`:v}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,p=>{let h=p.pipes?.find(u=>u.id===s.id);h&&(Object.assign(h,Jt(h,o)),[h.from,h.to,h.points,h.heights]=[h.to,h.from,[...h.points].reverse(),[...h.heights??[]].reverse()],h.fittings=h.fittings?.map(u=>({...u,at:k(Math.max(0,ki(h,o)-u.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,p=>p.pipes=(p.pipes??[]).filter(h=>h.id!==s.id)),this._runSel=null}}>${this.t("delete")}</button>`:v}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}};var vo=class{poolDown(t,e,n,i){let s=this.floor;if(!s)return!1;let o=this.poolArea,r=e.closest("[data-pool-node]")?.getAttribute("data-pool-node")??null;if(this._jointPlace&&o)return this.isEditor&&this.placeJointPlan(o,this._jointPlace,n,e.closest("[data-pipe]")?.getAttribute("data-pipe")??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isEditor)return!0;if(!o){let h=s.outdoor.find(u=>u.type==="pool"&&u.points.length>=3&&K(n,u.points));return h&&(this.selectItem("outdoor",h.id),this._tool="pool",this._pipeMode=!0),!0}let p=e.closest("[data-pipe-end]")?.getAttribute("data-pipe-end");if(p&&!this._pipeDraft){let[h,u]=p.split("|"),f=o.pool?.pipes?.find(b=>b.id===h),g=f&&(u==="to"?f.points[f.points.length-1]:f.points[0]);g&&(this._pipeDraft={from:"",points:[],extend:{pipe:h,end:u,at:g}})}else if(r){let h=this._pipeDraft;h?h.extend?(this.extendPipe(o,h.extend,r,h.points),this._pipeDraft=null):r!==h.from&&(this.addPipe(o.id,h.from,r,h.points),this._pipeDraft=null):this._pipeDraft={from:r,points:[]}}else if(this._pipeDraft){let h=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[k(h[0]),k(h[1])]]}}return!0}let l=p=>[p.slice(0,p.lastIndexOf(":")),Number(p.slice(p.lastIndexOf(":")+1))];if(o&&this.isEditor){let p=e.closest("[data-pipe-pt]")?.getAttribute("data-pipe-pt");if(p){let[u,f]=l(p);return this.doubleTap(t,`pipept:${p}`)?this.change((g,b)=>{let _=b.outdoor.find(y=>y.id===o.id)?.pool?.pipes?.find(y=>y.id===u);_?.points.splice(f,1),_?.heights?.splice(f,1)}):this.drag={kind:"pipept",pool:o.id,pipe:u,index:f,base:this._doc,moved:!1},!0}let h=e.closest("[data-pipe-seg]")?.getAttribute("data-pipe-seg");if(h){let[u,f]=l(h),g=this.snap(n,void 0,t.altKey);return this.change((b,_)=>{let y=_.outdoor.find($=>$.id===o.id)?.pool?.pipes?.find($=>$.id===u);y?.points.splice(f,0,[k(g[0]),k(g[1])]),y?.heights?.splice(f,0,y.heights[f-1]??y.heights[f]??null)}),this._pipeId=u,this.drag={kind:"pipept",pool:o.id,pipe:u,index:f,base:this._doc,moved:!1},!0}}let d=e.closest("[data-pipe]")?.getAttribute("data-pipe");if(d)return this._pipeId=d,!0;if(r&&o&&this.isEditor)return r.startsWith("port:")?this.drag={kind:"poolport",pool:o.id,id:r.slice(5),base:this._doc,moved:!1}:r.startsWith("joint:")?this.drag={kind:"pooljoint",pool:o.id,id:dt(r).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:r.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isEditor){let p=e.closest("[data-out-box]")?.getAttribute("data-out-box");if(p){let[u,f]=l(p);return this.drag={kind:"outbox",id:u,corner:f,base:this._doc,moved:!1},!0}let h=e.closest("[data-out-vertex]")?.getAttribute("data-out-vertex");if(h){let[u,f]=l(h);return this.drag={kind:"outvertex",id:u,index:f,base:this._doc,moved:!1},!0}}let c=e.closest("[data-outdoor]")?this.outdoorAt(n)??e.closest("[data-outdoor]").getAttribute("data-outdoor"):null;return c&&s.outdoor.some(p=>p.id===c&&p.type==="pool")?(this.selectItem("outdoor",c),this._pipeId=null,this.isEditor&&(this.drag={kind:"outdoor",id:c,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,i)=>{let s=i.outdoor.find(o=>o.id===t);s&&(s.pool??={},e(s.pool,s))})}extendPipe(t,e,n,i){let s=this.floor;if(!s)return;let o=ut(this._doc,s,t);n=this.jointEnd(t,n,i[i.length-1]),this.changePool(t.id,r=>{let l=r.pipes?.find(c=>c.id===e.pipe);if(!l)return;Object.assign(l,Jt(l,o));let d=l.heights??[];if(e.end==="to"){let c=d[d.length-1]??l.height??null;l.points=[...l.points,...i],l.heights=[...d,...i.map(()=>c)],l.to=n}else{let c=ki(l,o),p=d[0]??l.height??null;l.points=[...[...i].reverse(),...l.points],l.heights=[...i.map(()=>p),...d],l.from=n;let h=ki(l,o)-c;l.fittings=l.fittings?.map(u=>({...u,at:k(u.at+h)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,i=[]){let{kind:s,id:o,port:r}=dt(e),l=s==="joint"&&!r?t.pool?.joints?.find(p=>p.id===o):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let p=this._doc.floors.find(g=>g.outdoor.some(b=>b.id===t.id)),h=p&&ut(this._doc,p,t),[u,f]=[h?.(`joint:${o}:inside`),h?.(`joint:${o}:outside`)];return!n||!u||!f?`joint:${o}:inside`:`joint:${o}:${Math.hypot(n[0]-u.x,n[1]-u.z)<=Math.hypot(n[0]-f.x,n[1]-f.z)?"inside":"outside"}`}let d=new Set([...(t.pool?.pipes??[]).flatMap(p=>[p.from,p.to]),...i]),c=Mn(l.kind).find(p=>!d.has(`joint:${o}:${p}`));return c?`joint:${o}:${c}`:e}addPipe(t,e,n,i){let s=this.floor;if(!s)return;let o=s.outdoor.find(l=>l.id===t);o&&(e=this.jointEnd(o,e,i[0]),n=this.jointEnd(o,n,i[i.length-1],[e]));let r={id:j("pipe"),from:e,to:n,floor_id:s.id,points:i};this.changePool(t,l=>l.pipes=[...l.pipes??[],r]),this._pipeId=r.id}addPoolPort(t){let e=this.poolArea;if(!e||!this.isEditor)return;let n=e.pool?.ports??[],i=e.points.length,s=h=>{let u=e.points[h%i],f=e.points[(h+1)%i];return[(u[0]+f[0])/2,(u[1]+f[1])/2]},[o,r]=jt(e.points),l=this._doc.floors.flatMap(h=>h.furniture).find(h=>h.type==="pool_filter"||h.type==="pool_pump"),d=n.filter(h=>h.kind==="inlet").length,c=t==="skimmer"?Oi(e.points,s(0)):t==="inlet"?Oi(e.points,s(Math.floor(i/2)+d*Math.max(1,Math.floor(i/8)))):t==="drain"?[o,r]:l?[l.x+.8,l.z]:[o,r+3],p={id:j("port"),kind:t,x:k(c[0]),z:k(c[1])};this.changePool(e.id,h=>h.ports=[...n,p])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{for(let n of e.floors){n.furniture=n.furniture.filter(i=>i.id!==t);for(let i of n.outdoor)i.pool?.pipes&&(i.pool.pipes=i.pool.pipes.filter(s=>s.from!==`dev:${t}`&&s.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==e),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${e}`&&i.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isEditor||this.change(n=>{let i=n.floors.flatMap(s=>s.furniture).find(s=>s.id===t);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let i=n.floors.flatMap(s=>s.furniture).find(s=>s.id===t);i&&Object.assign(i,e)})}portText(t){let{kind:e,port:n}=dt(t),i={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){let{kind:n,id:i}=dt(e);if(n==="joint"){let s=t.pool?.joints?.find(o=>o.id===i);return s?Mn(s.kind).map(o=>`${e}:${o}`):[]}if(n==="dev"){let s=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.id===i),o=s?Be(s.type):[];return o.length?o.map(r=>`${e}:${r}`):[e]}return[e]}partStatus(t,e){let n=t.pool?.pipes??[],i=this.partPorts(t,e);return[i.filter(s=>n.some(o=>o.from===s||o.to===s)).length,i.length]}cardConnect(t,e,n,i){let s=this._doc.floors.find(p=>p.outdoor.some(h=>h.id===t.id));if(!s||!n)return;let o=ut(this._doc,s,t),r=t.pool?.ports??[],l=p=>{let{kind:h,id:u,port:f}=dt(p);return h==="port"?Ls(r.find(g=>g.id===u)?.kind??"inlet"):h==="dev"?dp(f):null},d=this.jointEnd(t,n,void 0,[e]),c=En({from:e,vias:i,to:[d],floorId:s.id},o,t.pool?.joints??[],l,p=>j(p));this.changePool(t.id,p=>{p.joints=[...p.joints??[],...c.joints],p.pipes=[...p.pipes??[],...c.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(i=>!e.pipes.includes(i.id)))}cardReroute(t,e){let n=t.pool?.pipes??[],i=n.find(f=>f.id===e.pipes[0]);if(!i||!e.other)return;let s=i.from===e.start,o=[...e.holes.map(f=>({kind:"hole",joint:f.joint,dir:f.dir})),...e.fittings.map(f=>({kind:f}))],r=this._doc.floors.find(f=>f.outdoor.some(g=>g.id===t.id));if(!r)return;let l={...t,pool:{...t.pool,pipes:n.filter(f=>!e.pipes.includes(f.id))}},d=ut(this._doc,r,l),c=s?e.start:e.other,p=s?e.other:e.start,h=s?o:[...e.holes].reverse().map(f=>({kind:"hole",joint:f.joint,dir:f.dir==="in"?"out":"in"})).concat(e.fittings.map(f=>({kind:f}))),u=En({from:c,vias:h,to:[p],floorId:r.id},d,t.pool?.joints??[],()=>null,f=>j(f));this.changePool(t.id,f=>{f.pipes=[...(f.pipes??[]).filter(g=>!e.pipes.includes(g.id)),...u.pipes]})}renderPartCard(){let t=this._card,e=t?this._doc.floors.flatMap(M=>M.outdoor).find(M=>M.id===t.pool):void 0;if(!t||!e)return v;let n=this.isEditor,{kind:i,id:s}=dt(t.part),o=i==="joint"?e.pool?.joints?.find(M=>M.id===s):void 0,r=i==="dev"?this._doc.floors.flatMap(M=>M.furniture).find(M=>M.id===s):void 0,l=i==="port"?e.pool?.ports?.find(M=>M.id===s):void 0;if(!o&&!r&&!l)return v;let d=e.pool?.pipes??[],c=e.pool?.joints??[],p=this.partPorts(e,t.part),h=this.poolEnds(e).filter(M=>me(M.node)!==t.part&&!M.used),u=c.filter(M=>M.kind==="wall"||M.kind==="floor"),f=M=>this.poolNodeLabel(e,M),g=M=>dt(M).port?this.portText(M):this.t("card_port"),b=M=>M.kind==="hole"?this.t(M.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,M.joint)}):this.t(M.kind==="valve"?"wall_run_valve":"wall_run_sight"),_=()=>{this._card=null,this._cardJoin=null},y=()=>o?[o.x,o.z]:r?[r.x,r.z]:l?[l.x,l.z]:null,$=p.map(M=>{let R=hp(d,c,M),T=this._cardJoin?.port===M?this._cardJoin:null;return m`<div class="fp3d-pc-row ${R.length?"fp3d-on":""}">
        <b>${g(M)}</b>
        <div class="fp3d-pc-conns">
          ${R.map(L=>m`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...L.holes.map(P=>b({kind:"hole",joint:P.joint,dir:P.dir})),...L.fittings.map(P=>b({kind:P}))].map(P=>m`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${P}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${L.other?m`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,me(L.other))}>${f(L.other)}</button>`:m`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?m`<span class="fp3d-pc-tools">
                    ${L.other?m`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,L)}>${this.t("card_reroute")}</button>`:v}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,L)}>${this.t("card_disconnect")}</button>
                  </span>`:v}
            </div>`)}
          ${n&&(!R.length||p.length===1)?T?this.renderJoinPicker(e,M,T,h,u,b):m`<button class="fp3d-btn ${R.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:M,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:v}
        </div>
      </div>`}),[w,E]=this.partStatus(e,t.part),x=y();return m`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${M=>M.target===M.currentTarget&&_()}>
      <div class="fp3d-pc" role="dialog" aria-modal="true" tabindex="0" ${Kn()} @keydown=${M=>M.key==="Escape"&&_()}>
        <div class="fp3d-wv-head">
          ${o&&n?m`<input
                class="fp3d-pc-name"
                .value=${o.name??""}
                placeholder=${this.jointLabel(e,o.id)}
                title=${this.t("joint_name")}
                @change=${M=>{let R=M.target.value.trim().slice(0,60);this.changePool(e.id,T=>{let L=T.joints?.find(P=>P.id===o.id);L&&(L.name=R||null)})}}
              />`:m`<b class="fp3d-pc-title">${f(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:w,b:E})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${_}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,p)}
          <div class="fp3d-pc-rows">${$}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${x?m`<button class="fp3d-btn" @click=${()=>{_(),this._wallView=null,this._tool="pool",this.showPoint(x[0],x[1])}}>${this.t("card_show_plan")}</button>`:v}
          ${x&&!l?m`<button class="fp3d-btn" @click=${()=>{_(),this.pickWall(x)}}>▦ ${this.t("card_show_wall")}</button>`:v}
          <span class="fp3d-wv-grow"></span>
          ${n?m`<button class="fp3d-btn fp3d-danger" @click=${()=>{_(),r?this.deletePoolDevice(r.id):l?this.deletePoolPort(e.id,l.id):o&&this.changePool(e.id,M=>{M.joints=(M.joints??[]).filter(R=>R.id!==o.id),M.pipes=(M.pipes??[]).filter(R=>me(R.from)!==t.part&&me(R.to)!==t.part)})}}>${this.t("delete")}</button>`:v}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,i,s,o){let r=h=>{let{kind:u,id:f}=dt(h);if(u==="port")return"pool";if(u==="dev")return"tech";let g=t.pool?.joints?.find(b=>b.id===f);return g?.kind==="wall"||g?.kind==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(h=>({g:h,items:i.filter(u=>r(u.node)===h)})).filter(h=>h.items.length),d=h=>this._cardJoin={...n,...h},c=h=>d({vias:[...n.vias,h]}),p=new Set(n.vias.flatMap(h=>h.kind==="hole"?[h.joint]:[]));return m`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((h,u)=>m`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>d({vias:n.vias.filter((f,g)=>g!==u)})}>${o(h)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?m`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>d({to:""})}>${this.poolNodeLabel(t,n.to)} <i>✕</i></button>`:m`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?v:m`<div class="fp3d-pc-steps">
            ${s.some(h=>!p.has(h.id))?m`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${s.filter(h=>!p.has(h.id)).map(h=>m`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(t,h.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:h.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:h.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:v}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:h,items:u})=>m`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${h}`)}</span>
                <div class="fp3d-pc-picks">${u.map(f=>m`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>d({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){let i=t.pool?.pipes??[],s=f=>i.some(g=>g.from===f||g.to===f),{kind:o,id:r}=dt(e),l=o==="joint"?t.pool?.joints?.find(f=>f.id===r):void 0,d=o==="dev"?this._doc.floors.flatMap(f=>f.furniture).find(f=>f.id===r):void 0,c={},p=v,h=l?.kind??(d?d.type:"port");h==="tee"?(Object.assign(c,{in:[20,60],out1:[180,60],out2:[100,130]}),p=I`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):h==="y"?(Object.assign(c,{in:[20,70],out1:[180,25],out2:[180,115]}),p=I`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):h==="wall"||h==="floor"?(Object.assign(c,{outside:[20,70],inside:[180,70]}),p=I`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):h==="pool_pump"?(Object.assign(c,{suction:[20,95],pressure:[110,10]}),p=I`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):h==="pool_filter"?(Object.assign(c,{pump:[20,40],return:[180,40],waste:[100,4]}),p=I`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):h==="pool_heat_pump"?(Object.assign(c,{in:[180,95],out:[180,45]}),p=I`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(c[""]=[180,70],p=I`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let u=h==="pool_filter"?[100,41]:h==="pool_pump"?[100,85]:[100,70];return m`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(f=>{let g=dt(f).port??"",b=c[g]??c[""]??[180,70],_=s(f);return I`<g class="fp3d-pc-stub ${_?"fp3d-on":""}" @click=${()=>this.isEditor&&!_&&(this._cardJoin={port:f,to:"",vias:[]})}>
          <line x1=${u[0]} y1=${u[1]} x2=${b[0]} y2=${b[1]} />
          <circle cx=${b[0]} cy=${b[1]} r="7" />
          <title>${g?this.portText(f):""}</title>
        </g>`})}
      ${p}
      ${n.map(f=>{let g=dt(f).port,b=c[g??""]??[180,70];return g?I`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,b[0]))} y=${b[1]<70?b[1]+20:b[1]-12}>${this.portText(f)}</text>`:v})}
    </svg>`}jointLabel(t,e){let n=t.pool?.joints??[],i=n.find(r=>r.id===e);if(!i)return this.t("pool_loose_end");let s=r=>r==="wall"||r==="floor"?"hole":r??"tee";if(i.name?.trim())return i.name.trim();let o=n.filter(r=>s(r.kind)===s(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:o.indexOf(i)+1})}`}poolEnds(t){let e=t.pool?.pipes??[],n=s=>e.some(o=>o.from===s||o.to===s),i=[];for(let s of t.pool?.ports??[])i.push({node:`port:${s.id}`,label:this.poolNodeLabel(t,`port:${s.id}`),used:!1});for(let s of this._doc.floors.flatMap(o=>o.furniture).filter(o=>Ft.includes(o.type)&&o.type!=="pool_valve")){let o=Be(s.type);for(let r of o.length?o.map(l=>`dev:${s.id}:${l}`):[`dev:${s.id}`])i.push({node:r,label:this.poolNodeLabel(t,r),used:o.length>0&&n(r)})}for(let s of t.pool?.joints??[])for(let o of Mn(s.kind)){let r=`joint:${s.id}:${o}`;i.push({node:r,label:this.poolNodeLabel(t,r),used:n(r)})}return i}placeJointPlan(t,e,n,i){let s=this.floor;if(!s)return;let o=ut(this._doc,s,t),r=i?t.pool?.pipes?.find(c=>c.id===i):void 0;if(r){let c=Xt(r,o),p=null;for(let u=1;u<c.length;u++){let[f,g]=[c[u-1],c[u]],[b,_]=[g[0]-f[0],g[2]-f[2]],y=b*b+_*_,$=y>0?Math.max(0,Math.min(1,((n[0]-f[0])*b+(n[1]-f[2])*_)/y)):0,w=[f[0]+b*$,f[1]+(g[1]-f[1])*$,f[2]+_*$],E=Math.hypot(w[0]-n[0],w[2]-n[1]);(!p||E<p.d)&&(p={p:w,d:E})}let h=p&&Ai(r,o,p.p,j("joint"),j("pipe"));if(h){this.changePool(t.id,u=>{u.joints=[...u.joints??[],{...h.joint,kind:e}],u.pipes=(u.pipes??[]).flatMap(f=>f.id===r.id?[{...h.first,to:`joint:${h.joint.id}:in`},{...h.second,from:`joint:${h.joint.id}:out1`}]:[f])});return}}let l=s.rooms.some(c=>c.points.length>=3&&K(n,c.points)),d=this.snap(n);this.changePool(t.id,c=>c.joints=[...c.joints??[],{id:j("joint"),kind:e,x:k(d[0]),z:k(d[1]),y:l?.5:-.3}])}poolNodePos(t,e){if(!e)return null;let n=this._doc.floors.find(s=>s.outdoor.some(o=>o.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let s=n&&ut(this._doc,n,t)(e);return s?[s.x,s.z]:null}if(e.startsWith("port:")){let s=t.pool?.ports?.find(o=>o.id===e.slice(5));return s?[s.x,s.z]:null}let i=this._doc.floors.flatMap(s=>s.furniture).find(s=>s.id===e.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(t,e){let{kind:n,id:i,port:s}=dt(e);if(!e)return this.t("pool_loose_end");if(s||n==="joint"){let d=n==="joint"?this.jointLabel(t,i):this.poolNodeLabel(t,`${n}:${i}`);return s?`${d} \xB7 ${this.portText(e)}`:d}if(e.startsWith("port:")){let d=t.pool?.ports??[],c=d.find(h=>h.id===e.slice(5));if(!c)return"?";let p=d.filter(h=>h.kind===c.kind);return`${this.t(`pool_port_${c.kind}`)}${p.length>1?` ${p.indexOf(c)+1}`:""}`}let o=this._doc.floors.flatMap(d=>d.furniture).filter(d=>Ft.includes(d.type)),r=o.find(d=>d.id===e.slice(4));if(!r)return"?";let l=o.filter(d=>d.type===r.type);return`${r.name||this.t(`furn_${r.type}`)}${l.length>1&&!r.name?` ${l.indexOf(r)+1}`:""}`}renderPoolPlan(t){let e=this.poolArea,n=t.furniture.filter(u=>Ft.includes(u.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},s=e?(e.pool?.pipes??[]).filter(u=>u.floor_id===t.id):[],o=s.map(u=>{let f=this.poolNodePos(e,u.from),g=this.poolNodePos(e,u.to);if((!f||!g)&&!u.heights)return v;let b=f?1:0,_=[...f?[f]:[],...u.points,...g?[g]:[]].map(L=>this.toScreen(L));if(_.length<2)return v;let y=u.id===this._pipeId,$=0;for(let L=1;L<_.length-1;L++)Math.hypot(_[L+1][0]-_[L][0],_[L+1][1]-_[L][1])>Math.hypot(_[$+1][0]-_[$][0],_[$+1][1]-_[$][1])&&($=L);let[w,E]=_[$],[x,M]=_[$+1],R=Math.atan2(M-E,x-w)*180/Math.PI,T=_.map(L=>L.join(",")).join(" ");return I`<g data-pipe=${u.id}>
        <polyline class="fp3d-pipe-hit" points=${T} />
        <polyline class="fp3d-pipe ${y?"fp3d-pipe-sel":""}" points=${T} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(w+x)/2} ${(E+M)/2}) rotate(${R})`} />
        ${y&&this.isEditor?I`${_.slice(0,-1).map((L,P)=>I`<line class="fp3d-pipe-seg" data-pipe-seg=${`${u.id}:${P+1-b}`} x1=${L[0]} y1=${L[1]} x2=${_[P+1][0]} y2=${_[P+1][1]} />`)}
              ${u.points.map((L,P)=>{let[A,V]=this.toScreen(L);return I`<g class="fp3d-vertex" data-pipe-pt=${`${u.id}:${P}`}><circle cx=${A} cy=${V} r="14" class="fp3d-hit" /><circle cx=${A} cy=${V} r="5" /></g>`})}`:v}
      </g>`}),r=(u,f,g,b,_)=>{let[y,$]=this.toScreen(f);return I`<g class="fp3d-pool-node ${b}" data-pool-node=${u}><title>${_}</title><circle cx=${y} cy=${$} r="16" class="fp3d-hit" /><circle cx=${y} cy=${$} r="10" /><text x=${y} y=${$}>${g}</text></g>`},l=e?(e.pool?.ports??[]).map(u=>r(`port:${u.id}`,[u.x,u.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[u.kind],`fp3d-pool-port-${u.kind}`,this.poolNodeLabel(e,`port:${u.id}`))):[],d=n.map(u=>r(`dev:${u.id}`,[u.x,u.z],u.type==="pool_valve"?u.valve_open===!1?"\u2715":"":i[u.type],`fp3d-pool-dev ${u.type==="pool_valve"&&u.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${u.id}`):u.type)),c=v;if(e&&this._pipeDraft){let u=this._pipeDraft.extend?.at??this.poolNodePos(e,this._pipeDraft.from);if(u){let f=[u,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(g=>this.toScreen(g).join(",")).join(" ");c=I`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${f} />`}}let p=e?(e.pool?.joints??[]).map(u=>r(`joint:${u.id}`,[u.x,u.z],u.kind==="wall"||u.kind==="floor"?"\u25CE":u.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,u.id))):[],h=s.flatMap(u=>u.heights&&u.points.length?["from","to"].filter(f=>!u[f]).map(f=>{let[g,b]=this.toScreen(f==="to"?u.points[u.points.length-1]:u.points[0]);return I`<g class="fp3d-pipe-end" data-pipe-end=${`${u.id}|${f}`}><circle cx=${g} cy=${b} r="14" class="fp3d-hit" /><circle cx=${g} cy=${b} r="6" /></g>`}):[]);return I`<g class="fp3d-pool-plan">${o}${c}${p}${h}${l}${d}</g>`}renderPoolPanel(t){let e=t?.outdoor.filter(i=>i.type==="pool")??[],n=this.poolArea;return n?m`${e.length>1?m`<section>
            <div class="fp3d-seg">${e.map((i,s)=>m`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${s+1}</button>`)}</div>
          </section>`:v}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:m`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?m`<div class="fp3d-actions">${e.map((i,s)=>m`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${e.length>1?s+1:""}</button>`)}</div>`:v}
      </section>`}renderPoolTech(t){if(!this.pipeRules)return v;let e=this.isEditor,n=t.pool?.ports??[],i=t.pool?.pipes??[],s=this._doc.floors.flatMap(r=>r.furniture).filter(r=>Ft.includes(r.type)),o=i.find(r=>r.id===this._pipeId);return m`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!e} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(r=>m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolPort(r)}>+ ${this.t(`pool_port_${r}`)}</button>`)}
        </div>
        ${n.map(r=>m`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`port:${r.id}`)}>${this.poolNodeLabel(t,`port:${r.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(t,`port:${r.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${r.kind==="inlet"||r.kind==="skimmer"?m`<label class="fp3d-pool-depth" title=${Gt(this.t("pool_port_depth_hint"),this.unit)}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(r.depth??(r.kind==="inlet"?.3:0))} ?disabled=${!e} @change=${l=>{let d=Number(l.target.value.replace(",","."));Number.isFinite(d)&&this.change((c,p)=>{let h=p.outdoor.find(u=>u.id===t.id)?.pool?.ports?.find(u=>u.id===r.id);h&&(h.depth=Math.min(3,Math.max(0,k(d))))})}} />m</label
                >`:v}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolPort(t.id,r.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${Ft.filter(r=>r!=="pool_valve").map(r=>m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolDevice(r)}>+ ${this.t(`furn_${r}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${s.map(r=>m`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`dev:${r.id}`)}>${this.poolNodeLabel(t,`dev:${r.id}`)}</button>
            <span class="fp3d-ports">${Be(r.type).map(l=>m`<i class=${i.some(d=>d.from===`dev:${r.id}:${l}`||d.to===`dev:${r.id}:${l}`)?"fp3d-on":""}>${this.t(`port_${l}`)}</i>`)}</span>
            ${r.type==="pool_filter"?m`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${l=>this.setPoolDevice(r.id,{variant:l.target.value==="top6"?null:l.target.value})}>
                    ${ap.map(l=>m`<option value=${l} ?selected=${(r.variant??"top6")===l}>${this.t(`valve_${l}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${l=>this.setPoolDevice(r.id,{valve_position:l.target.value})}>
                  ${Aa.map(l=>m`<option value=${l} ?selected=${(r.valve_position??"filter")===l}>${this.t(`valve_${l}`)}</option>`)}
                </select>`:r.type==="pool_heat_pump"?m`<select ?disabled=${!e} title=${this.t("hp_ports")} @change=${l=>this.setPoolDevice(r.id,{variant:l.target.value==="right"?null:l.target.value})}>
                    ${["right","left","back"].map(l=>m`<option value=${l} ?selected=${(r.variant??"right")===l}>${this.t("hp_ports")}: ${this.t(`hp_side_${l}`)}</option>`)}
                  </select>`:r.type==="pool_valve"?m`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${r.valve_open!==!1} ?disabled=${!e} @change=${l=>this.setPoolDevice(r.id,{valve_open:l.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:v}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(r.id)}>✕</button>
          </div>`)}
        ${(t.pool?.joints??[]).map(r=>m`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${r.id}`)}>${this.jointLabel(t,r.id)}</button>
            <span class="fp3d-ports">${Mn(r.kind).map(l=>{let d=`joint:${r.id}:${l}`,c=i.some(p=>p.from===d||p.to===d||(r.kind??"tee")!=="wall"&&(r.kind??"tee")!=="floor"&&me(p.from)===`joint:${r.id}`&&!dt(p.from).port&&l==="in");return m`<i class=${c?"fp3d-on":""} title=${this.portText(d)}>${this.portText(d)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,l=>{l.joints=(l.joints??[]).filter(d=>d.id!==r.id),l.pipes=(l.pipes??[]).filter(d=>me(d.from)!==`joint:${r.id}`&&me(d.to)!==`joint:${r.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!e} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(r=>m`<div class="fp3d-pool-row ${r.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=r.id}>${this.poolNodeLabel(t,r.from)} → ${this.poolNodeLabel(t,r.to)}</button>
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,l=>{let d=l.pipes?.find(c=>c.id===r.id);d&&([d.from,d.to,d.points]=[d.to,d.from,[...d.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,l=>l.pipes=(l.pipes??[]).filter(d=>d.id!==r.id))}>✕</button>
          </div>`)}
        ${o?m`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),o.height??.3,r=>this.changePool(t.id,l=>{let d=l.pipes?.find(c=>c.id===o.id);d&&(d.height=Math.min(10,Math.max(-5,k(r))))}),.05)}
            </div>`:v}
      </section>`}renderPoolShape(t){let e=this.isEditor,n=ft(t.points),i=t.pool_shape,s=(l,d,c,p)=>i&&this.updateOutdoor({points:Ln(i,l,d,c,p)}),o=(n.x0+n.x1)/2,r=(n.z0+n.z1)/2;return m`${i==="round"?m`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let d=Math.max(.5,l)/2;s(o-d,r-d,o+d,r+d)},.01,1)}`:i==="oval"?m`${this.len(this.t("width"),n.x1-n.x0,l=>s(o-Math.max(1,l)/2,n.z0,o+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>s(n.x0,r-Math.max(1,l)/2,n.x1,r+Math.max(1,l)/2),.01,1)}`:v}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),Ca(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,k(l)))}),.05,.4):v}
      ${this.len(this.t("pool_depth"),Ta(t),l=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,k(l)))}),.05,.3)}
      ${t.above?v:this.len(this.t("pool_rim"),t.rim??.06,l=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,k(l)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!t.above&&this.floor&&!La(this.floor,t)?m`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:v}`}};function fh(a,t,e,n,i=!1){let s=o=>{let r=o?.value.trim();!o||!r||(o.value="",n([...a,r]))};return m`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${e.label}>
    ${e.label}
    ${a.map((o,r)=>m`<div class="fp3d-lines-row">
        <span>${o}</span>
        <button type="button" title=${e.remove} aria-label=${`${e.remove}: ${o}`} ?disabled=${t} @click=${()=>n(a.filter((l,d)=>d!==r))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${e.placeholder}
        aria-label=${e.placeholder}
        ?disabled=${t}
        @keydown=${o=>{o.key==="Enter"&&(o.preventDefault(),s(o.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${t} @click=${o=>s(o.currentTarget.previousElementSibling)}>
        ${e.add}
      </button>
    </div>
  </div>`}var Bi=class extends ss{constructor(t){if(super(t),this.it=v,t.type!==is.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this._t=void 0,this.it=t;if(t===Ui)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Bi.directiveName="unsafeHTML",Bi.resultType=1;var mh=Bn(Bi);var pa=class extends ss{constructor(t){if(super(t),t.type!==is.PROPERTY)throw new Error("typedValue() belongs on .value")}render(t,e){return e}update(t,[e,n]){let i=t.element;return!e.typing(i)&&i.value!==n&&(i.value=n),Ui}},ua=Bn(pa);function Zm(a){return{a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,rightward:!0}}var ha={walls(a,t,e){let n=a.floors.find(s=>s.id===t),i=n?.rooms.find(s=>s.id===e);return!n||!i||i.points.length<3?[]:i.points.map((s,o)=>{let r=De(i,o),l=se(n,i.id,r.a,r.b),d=[...We(r,n,i).map(c=>[c.s0,c.s1]),...gn(r,n).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:i.id,edge:o,a:r.a,b:r.b,u:r.u,n:r.n,length:r.length,shared:l,thickness:l?a.settings.wall_interior:a.settings.wall_exterior,taken:d}})},onWall(a,t,e){return ie(Zm(a),t,e)},freeSpot(a,t,e=.1){let n=s=>s>=e&&s+t<=a.length-e&&!a.taken.some(([o,r])=>s<r+.05&&s+t>o-.05),i=a.length/2-t/2;for(let s=0;s<=a.length;s+=.05){if(n(i-s))return Math.round((i-s)*100)/100;if(n(i+s))return Math.round((i+s)*100)/100}return null},nodeAt(a,t,e){let n=a.floors.find(r=>r.id===t),i=n?.outdoor.find(r=>r.id===e);if(!n||!i)return()=>null;let s=ut(a,n,i),o=i.pool??{};return r=>{let{kind:l,id:d,port:c}=dt(r),p=l==="joint"?(o.joints??[]).find(u=>u.id===d):void 0;if(p)return sn(p,c);let h=l==="port"?(o.ports??[]).find(u=>u.id===d):void 0;return h?s(r)??{x:h.x,y:.02,z:h.z}:s(r)}},connect(a,t,e,n,i,s){let o=a.floors.find(l=>l.id===t),r=o?.outdoor.find(l=>l.id===e);return!o||!r?{pipes:[],joints:[]}:En({...n,floorId:t},ha.nodeAt(a,t,e),r.pool?.joints??[],i,s)}};var $o=class{editorHost(){let t=this.hass;return{api:1,hass:()=>t,building:()=>this._doc,language:()=>t.language||"en",devices:()=>[],findDevice:()=>null,openings:()=>[],energy:()=>null,consumers:()=>[],canEdit:()=>this.isEditor,updateBuilding:e=>this.change(n=>e(n)),callService:(e,n,i)=>(es(t,e,n,i??{},s=>this.t("service_failed",{error:s})),Promise.resolve()),newId:e=>j(e),refresh:()=>{this._moduleFieldMemo=null,this.requestUpdate()},plan:ha}}memoFields(t,e){let n=this._moduleFieldMemo,i=this.hass;if(n&&n.item===t&&n.doc===this._doc&&n.entities===i.entities&&n.lang===i.language)return n.fields;let s=e();return this._moduleFieldMemo={item:t,doc:this._doc,entities:i.entities,lang:i.language,fields:s},s}renderModuleFields(t){return this.hass?this.renderFields(this.memoFields(t,()=>_l(this.editorHost(),t))):v}renderModuleRoomFields(t){let e=this.floor;return!this.hass||!e?v:this.renderFields(this.memoFields(t,()=>vl(this.editorHost(),t,e)),!1)}renderModuleFurnitureFields(t){return this.hass?this.renderFields(this.memoFields(t,()=>yl(this.editorHost(),t))):v}renderFields(t,e=!0){if(!t.length)return v;let n=this.isEditor,i=s=>{switch(s.kind){case"heading":return m`<h3>${s.text}</h3>`;case"text":return m`<p class="fp3d-sub fp3d-wide">${s.text}</p>`;case"entity":return this.entitySelect(s.label,s.value,s.auto,this.entityOptionsFor(s.filter),o=>s.set(o));case"select":return m`<label class="fp3d-field fp3d-wide"
            >${s.label}
            <select ?disabled=${!n} @change=${o=>s.set(o.target.value)}>
              ${s.options.map(o=>m`<option value=${o.id} ?selected=${o.id===s.value}>${o.label}</option>`)}
            </select></label
          >`;case"check":return m`<label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${s.value} ?disabled=${!n} @change=${o=>s.set(o.target.checked)} /> ${s.label}</label>`;case"button":return m`<button class="fp3d-btn ${s.primary?"fp3d-primary":""} fp3d-wide" ?disabled=${!n} title=${s.title??""} @click=${()=>s.onTap()}>${s.label}</button>`;case"lines":return fh(s.value,!n,{label:s.label,placeholder:s.placeholder??this.t("lines_new"),add:this.t("lines_add"),remove:this.t("delete")},o=>s.set(o),!0)}};return e?m`<section>
      <div class="fp3d-form fp3d-links">${t.map(i)}</div>
    </section>`:t.map(i)}m(t,e=2){return yd(t,this.unit,n=>Rt(this.hass,n,e))}area(t){return vd(Math.abs(t),this.unit,e=>Rt(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?ln(t):String(k(t))}readLen(t){if(this.unit==="imperial")return Do(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,i=.01,s){if(this.unit!=="imperial")return this.num(t,e,n,i,s);let o=this.typedEvents(r=>{let l=Do(r,"imperial");l!==null&&Math.abs(l-e)>1e-9&&n(s!==void 0?Math.max(s,l):l)});return m`<label class="fp3d-field"
      >${Gt(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        placeholder="8' 2&quot;"
        title=${this.t("units_formats")}
        .value=${ua(this.typed,ln(e))}
        ?disabled=${!this.isEditor}
        @focus=${o.focus}
        @input=${o.input}
        @change=${o.change}
        @keydown=${o.keydown}
        @blur=${o.blur}
    /></label>`}typedEvents(t){let e=i=>i.target,n=(i,s)=>{let o=[this._furnitureId?this.selection().join(","):"",this._deviceId,this._openingId,this._wallId,this._outdoorId,this._roomId,this._vertex];this.mergeKey=["typed",s,...o].join("|"),this.mergeWithin=1/0;try{t(i)}finally{this.mergeKey=null,this.mergeWithin=void 0}};return{focus:i=>this.typed.focus(e(i)),input:i=>this.typed.input(e(i),e(i).value,n),change:i=>this.typed.change(e(i),e(i).value,n),keydown:i=>{i.key==="Enter"&&(this.typed.enter(e(i),e(i).value,n),this.requestUpdate())},blur:i=>{this.typed.blur(e(i)),this.requestUpdate()}}}num(t,e,n,i=.01,s){let o=this.typedEvents(r=>{let l=parseFloat(r.replace(",","."));Number.isFinite(l)&&l!==k(e)&&n(l)});return m`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${s??v}
        .value=${ua(this.typed,String(k(e)))}
        ?disabled=${!this.isEditor}
        @focus=${o.focus}
        @input=${o.input}
        @change=${o.change}
        @keydown=${o.keydown}
        @blur=${o.blur}
    /></label>`}iconInput(t,e){let n=t?t.startsWith("mdi:")?t:`mdi:${t}`:"";return m`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${t??""} ?disabled=${!this.isEditor} @change=${i=>e(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?mh(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):v}
      </span></label
    >`}markerSelect(t,e){return m`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isEditor} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${Ea.map(n=>m`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t,...e){let n=e.length?`${t}|${e.map(String).join("|")}`:String(t);return this.hassWatch.pause(()=>this.optionCache.get(this.rawHass,n,t))}keptForPlan(t,e){let n=this.rawHass,i=Object.keys(n?.states??{}).length,s=this.planMemo;if((!s||s.doc!==this._doc||s.entities!==n?.entities||s.devices!==n?.devices||s.areas!==n?.areas||s.count!==i)&&(s=this.planMemo={doc:this._doc,entities:n?.entities,devices:n?.devices,areas:n?.areas,count:i,kept:new Map}),s.kept.has(t))return s.kept.get(t);let o=this.hassWatch.pause(e);return s.kept.set(t,o),o}entityOptionsFor(t){return this.hassWatch.pause(()=>this.optionCache.get(this.rawHass,t,t))}pickerArea(){let t=this.furnitureItem,e=t?this.roomAt([t.x,t.z])??this._roomId:this._roomId;return e&&this.floor?.rooms.find(n=>n.id===e)?.area_id||null}timeField(t,e,n,i){return le(ku),m`<fp3d-time-field
      .value=${e}
      .hour12=${sd(this.hass?.locale,this.hass?.language)}
      .clearable=${!0}
      .label=${t}
      .hourLabel=${this.t("time_hour")}
      .minuteLabel=${this.t("time_minute")}
      ?disabled=${n}
      @change=${s=>i(s.detail.value)}
    ></fp3d-time-field>`}entitySelect(t,e,n,i,s,o=[]){let r=n===void 0?null:n?this.t("entity_auto",{name:et(this.hass,n)}):this.t("entity_auto_none"),l=[...r!==null?[{id:"__auto",label:r}]:[],{id:"none",label:this.t("entity_none")}];return m`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${l}
        .value=${e===null?r!==null?"__auto":"none":e}
        .prefer=${{area:this.pickerArea(),domains:o}}
        .groups=${o.length?{likely:this.t("picker_likely"),other:this.t("picker_other")}:null}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isEditor}
        @change=${c=>{c.stopPropagation(),s(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}};function gh(a,t){let e=a.filter(n=>n.is_admin&&n.editor);return e.length===1&&e[0].id===t}function bh(a,t,e){let n=(a??[]).filter(i=>i!==t);return e?[...n,t]:n}function _h(a){let t=new Set;for(let[e,n]of Object.entries(a??{})){let i=e.startsWith("person.")?n?.attributes?.user_id:null;typeof i=="string"&&i&&t.add(i)}return t}function yh(a,t,e="admin"){let n=a.some(s=>t.has(s.id)),i=s=>s.name||s.id;return a.map(s=>({u:s,secondary:n&&!t.has(s.id)})).sort((s,o)=>Number(s.secondary)-Number(o.secondary)||Number(o.u.is_admin)-Number(s.u.is_admin)||i(s.u).localeCompare(i(o.u))).map(({u:s,secondary:o})=>({id:s.id,label:i(s),note:s.is_admin?e:void 0,secondary:o}))}var xo=class{renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(o=>e.includes(o.split(".")[0])&&!t.includes(o),t.join(",")),i=o=>this.change(r=>r.settings.favorites=o.length?o:void 0),s=(o,r)=>{let l=[...t],[d]=l.splice(o,1);l.splice(Math.max(0,Math.min(l.length,o+r)),0,d),i(l)};return m`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?m` <span class="fp3d-lib-count">${t.length}</span>`:v}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((o,r)=>m`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${et(this.hass,o)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${r===0} @click=${()=>s(r,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${r===t.length-1} @click=${()=>s(r,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(t.filter(l=>l!==o))}>✕</button>
        </div>`)}
      ${t.length<40?m`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,o=>{o&&o!=="none"&&!t.includes(o)&&i([...t,o])})}
          </div>`:v}
    </details>`}renderMediaPresets(){let t=this._doc.settings.media_presets??[],e=i=>this.change(s=>s.settings.media_presets=i.length?i:void 0),n=(i,s)=>e(t.map((o,r)=>r===i?{...o,...s}:o));return m`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>m`<option value=${i}></option>`)}
      </datalist>
      ${t.map((i,s)=>m`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${o=>n(s,{label:o.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${i.type} @change=${o=>n(s,{type:o.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${i.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${o=>n(s,{content:o.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((o,r)=>r!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<30?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:j("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:v}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=r=>this.change(l=>l.settings.buttons=r.length?r:void 0),n=(r,l)=>e(t.map((d,c)=>c===r?{...d,...l}:d)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},s=r=>r==="service"||r==="fire_dom_event",o=r=>!this.isHaAdmin&&s(r.action);return m`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${this.isHaAdmin?v:m`<p class="fp3d-sub">${this.t("own_button_admin")}</p>`}
      ${t.map((r,l)=>m`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${r.label} @change=${d=>n(l,{label:d.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select ?disabled=${o(r)} @change=${d=>n(l,{action:d.target.value})}>
              ${Pa.filter(d=>this.isHaAdmin||!s(d)||d===r.action).map(d=>m`<option value=${d} ?selected=${d===r.action}>${this.t(`own_action_${d}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(r.icon??null,d=>n(l,{icon:d}))}
          ${r.action!=="fire_dom_event"?m`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${r.action}`)}
                <input type="text" ?disabled=${o(r)} .value=${r.target??""} placeholder=${i[r.action]} @change=${d=>n(l,{target:d.target.value.trim()||null})}
              /></label>`:v}
          ${r.action==="service"||r.action==="fire_dom_event"?m`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  ?disabled=${o(r)}
                  placeholder=${r.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${r.data?JSON.stringify(r.data,null,1):""}
                  @change=${d=>{d.target.setCustomValidity("");let c=d.target.value.trim();if(!c)return n(l,{data:null});try{let p=JSON.parse(c);p&&typeof p=="object"&&!Array.isArray(p)&&n(l,{data:p})}catch{d.target.setCustomValidity(this.t("own_data_bad")),d.target.reportValidity()}}}
                ></textarea></label
              >`:v}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${l===0} @click=${()=>e([...t.slice(0,l-1),r,t[l-1],...t.slice(l+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((d,c)=>c!==l))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:j("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:v}`}paneView(){let e=this.renderRoot.querySelector("fp3d-view3d")?.currentView();if(!e)return null;let n=e.target;return{theta:k(e.theta),phi:k(e.phi),radius:k(e.radius),...n?{target:{x:k(n.x),y:k(n.y),z:k(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){this.tell(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){this.tell(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderDirectorTriggers(t,e){if(!this.hass)return v;let i=t.triggers??[],s=o=>this.change(r=>r.settings.director={...r.settings.director??{},triggers:o.length?o:null});return m`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${i.map((o,r)=>m`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"),o.entity||null,void 0,this.entityOptions(l=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(l)),l=>s(i.map((d,c)=>c===r?{...d,entity:l&&l!=="none"?l:""}:d).filter(d=>d.entity)))}
          ${this.entitySelect(this.t("director_doorbell_camera"),o.camera,void 0,this.entityOptions(l=>l.startsWith("camera.")&&e.includes(l),e.join(",")),l=>s(i.map((d,c)=>c===r?{...d,camera:l&&l!=="none"?l:null}:d)))}
          <button class="fp3d-btn" @click=${()=>s(i.filter((l,d)=>d!==r))}>✕ ${this.t("delete")}</button>
        </div>`)}
      ${i.length<20?m`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"),null,void 0,this.entityOptions(o=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(o)),o=>{o&&o!=="none"&&s([...i,{entity:o,camera:null}])})}
          </div>`:v}
    </div>`}renderEditors(){let t=this.hass;if(!t)return v;let e=i=>i.then(s=>{this.editorsList=s,this.editorsMsg=null}).catch(s=>{let o=s?.code;this.editorsMsg=this.t(o==="no_admin"?"editors_no_admin":"editors_failed")}).finally(()=>this.requestUpdate());this.askEditors(e);let n=this.editorsList;return m`<div class="fp3d-form">
      <p class="fp3d-sub fp3d-wide">${this.t("editors_hint")}</p>
      ${n?this.userSelect(n.users,n.users.filter(i=>i.editor).map(i=>i.id),n.users.filter(i=>i.editor&&gh(n.users,i.id)).map(i=>i.id),this.t("editors_title"),i=>{e(Ho(t,i))}):m`<p class="fp3d-sub fp3d-wide">${this.t("loading")}</p>`}
      ${this.editorsMsg?m`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.editorsMsg}</p>`:v}
      ${n?.custom?m`<div class="fp3d-actions fp3d-wide"><button class="fp3d-btn" @click=${()=>{e(Ho(t,null))}}>${this.t("editors_reset")}</button></div>`:v}
    </div>`}askEditors(t){let e=this.hass;if(this.editorsAsked||!e)return;this.editorsAsked=!0;let n=zl(e);t?t(n):n.then(i=>this.editorsList=i).catch(()=>{}).finally(()=>this.requestUpdate())}userSelect(t,e,n,i,s,o){return le(wu),m`<fp3d-multi-select
      class="fp3d-wide"
      .options=${yh(t,_h(this.hass?.states),this.t("editors_admin"))}
      .value=${e}
      .locked=${n}
      .label=${i}
      .placeholder=${o??""}
      .searchLabel=${this.t("multi_search")}
      .emptyText=${this.t("multi_none")}
      .secondaryLabel=${this.t("users_show_service")}
      .removeLabel=${this.t("multi_remove")}
      @change=${r=>s(r.detail.value)}
    ></fp3d-multi-select>`}renderTabletUsers(t){return this.userSelect(t,this._doc.settings.tablet_users??[],[],this.t("tablet_users"),e=>this.change(n=>n.settings.tablet_users=e),this.t("tablet_users_none"))}setTabletUser(t,e){this.change(n=>n.settings.tablet_users=bh(n.settings.tablet_users,t,e))}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let s=i.slice(7),o=this.entityOptions(l=>Et(l)),r=l=>l.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...o.filter(l=>r(l.id)),...o.filter(l=>!r(l.id))]},n=(i,s)=>{let o=structuredClone(this._doc);o.presence=o.presence.filter(r=>r.person!==i),s&&s!=="none"&&o.presence.push({person:i,sensor:s}),this.setDoc(o)};return m`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(i=>this.entitySelect(`${et(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(s=>s.person===i)?.sensor??null,void 0,e(i),s=>n(i,s))):m`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}setSettings(t){let e=structuredClone(this._doc);Object.assign(e.settings,t),this.setDoc(e)}};var vh="home3d",tg=["ai_task","alarm_control_panel","assist_satellite","automation","binary_sensor","button","calendar","camera","climate","conversation","counter","cover","date","datetime","device_tracker","event","fan","group","humidifier","image","input_boolean","input_button","input_datetime","input_number","input_select","input_text","lawn_mower","light","lock","media_player","notify","number","person","plant","remote","scene","schedule","script","select","sensor","siren","stt","sun","switch","text","time","timer","todo","tts","update","vacuum","valve","water_heater","weather","zone"],eg=new RegExp(`^(?:${tg.join("|")})\\.[a-z0-9_]+$`);function fa(a){return typeof a=="string"&&eg.test(a)}var ng=new Set(["area_id","ha_floor"]),ig=new Set(["mods","car","buttons"]),sg=new Set(["triggers","alert_snoozed","alert_ignored","pictures"]);function ma(a,t=""){if(Array.isArray(a)){for(let n=a.length-1;n>=0;n--){let i=a[n];fa(i)||sg.has(t)&&i&&typeof i=="object"&&Object.values(i).some(fa)?a.splice(n,1):ma(i,t)}return}if(!a||typeof a!="object")return;let e=a;for(let[n,i]of Object.entries(e))ig.has(n)?delete e[n]:ng.has(n)||fa(i)?e[n]=null:ma(i,n)}function og(a){let t=structuredClone(a);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null,...t.energy.systems?{systems:t.energy.systems.map(e=>({...e,grid:null,solar:null,battery:null,battery_soc:null,inverter:null}))}:{}},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return ma(t),t}function $h(a,t){return{format:vh,version:1,exported_at:new Date().toISOString(),building:t?og(a):structuredClone(a)}}function xh(a){let t;try{t=JSON.parse(a)}catch{throw new Error("not_json")}let e=t,n=e?.format===vh?e.building:t;if(!n||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");if(Number.isInteger(n.version)&&n.version>Wa)throw new Error("plan_too_new");if(!Na(n.version))throw new Error("not_plan");for(let i of n.floors)i.background=null;return ts(n)}function wh(a){let t=new Set;for(let e of a.floors){e.background?.image_id&&t.add(e.background.image_id);for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&t.add(i.image)}return[...t]}function ga(a,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=a,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}function rg(a,t){let e=a<1024?[a,"B"]:a<1048576?[a/1024,"KB"]:[a/1024/1024,"MB"],n=e[0];return`${new Intl.NumberFormat(t,{maximumFractionDigits:n<10&&e[1]!=="B"?1:0}).format(n)} ${e[1]}`}var wo=class{async loadHistory(){if(this.hass)try{this._history=await wl(this.hass,this.home)}catch{this._history=[]}}async restoreFromHistory(t){let e=t.missing_pictures?` ${this.t("backup_restore_missing",{n:t.missing_pictures})}`:"";if(!this.hass||!await this.ask(this.t("backup_restore_confirm",{time:this.snapshotTime(t)})+e,this.t("backup_restore")))return;let n;try{n=await Ml(this.hass,t.id,this.home)}catch(i){await this.tell(this.t("restore_failed",{error:Nn(i)}));return}this._notice=n.missing_pictures?this.t("backup_restored_missing",{n:n.missing_pictures}):this.t("backup_restored"),await this.loadHistory()}async storedImages(t,e){let n={};for(let i of wh(t))try{n[i]=await ns(this.hass,i,e)}catch{}return n}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await Pl(this.hass),e=await this.storedImages(t.building,t.active),n=[];for(let o of t.homes??[])n.push(o.id===t.active?o:{...o,images:await this.storedImages(o.building,o.id)});let i=new Date().toISOString().slice(0,10),s={...t,...t.homes?{homes:n}:{},exported_at:new Date().toISOString(),images:e};ga(`home-3d-${this.t("export_name_full")}-${i}.json`,JSON.stringify(s))}catch(t){await this.tell(this.t("backup_import_error",{error:String(t?.message??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{await this.tell(this.t("import_error_not_json"));return}if(i?.format!=="home3d-backup"||!i.building){await this.tell(this.t("backup_full_not_backup"));return}if(await this.ask(this.t("backup_full_confirm"),this.t("backup_restore"))){this._backupBusy=!0;try{let s=i.homes?.length?i.homes:null,o=s?s.map(h=>({home:h,images:h.images??(h.id===i.active?i.images??{}:{})})):[{images:i.images??{}}],r=(h,u)=>{let f=u===o.length-1,g=h.home?{homes:[{id:h.home.id,name:h.home.name,building:h.home.building}],...f&&i.active?{active:i.active}:{}}:void 0;return[h.home?null:i.building,f?i.packs:void 0,f?i.items:void 0,g,h.home?void 0:this.home]};for(let[h,u]of o.entries())await Rl(this.hass,...r(u,h));let l=null,d=0,c=[];for(let[h,u]of o.entries()){try{l=await Il(this.hass,...r(u,h))}catch(f){if(!c.length)throw f;let g=f??{};await this.tell(this.t("backup_import_partial",{home:u.home?.name??"",done:c.join(", "),error:String(g.message??f)}));return}u.home&&c.push(u.home.name);for(let[f,g]of Object.entries(u.images))try{await jn(this.hass,f,g,u.home?.id??l.home_id??this.home),d++}catch{}}if(!l)return;(!l.home_id||!this.home||l.home_id===this.home)&&(this.setDoc(ts(l.building)),this._floorId=l.building.floors[0]?.id??null,this.selectItem("room",null),this.fit()),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let p=l.skipped.length?` ${this.t("backup_full_skipped",{packs:l.skipped.map(h=>h.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:l.packs,pictures:d})+p}catch(s){let o=s??{};await this.tell(this.t("backup_import_error",{error:String(o.message??o.error?.message??o.code??o.error?.code??s)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);ga(`home-3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify($h(this._doc,t),null,2))}async importPlan(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=_a(xh(await n.text()))}catch(s){let o=s.message;await this.tell(o==="not_json"?this.t("import_error_not_json"):o==="not_plan"?this.t("import_error_not_plan"):o==="plan_too_new"?this.t("import_error_too_new"):this.t("backup_import_error",{error:o}));return}await this.ask(this.t("backup_import_confirm"),this.t("ask_ok"))&&(await kl(this.hass,this.home).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){return new Date(t.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return m`<details
      class="fp3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?m`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?m`<div class="fp3d-room-list">
              ${this._history.map(t=>m`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}${t.size?` \xB7 ${rg(t.size,this.hass?.language)}`:""}</span></span>
                  <button class="fp3d-link" ?disabled=${!this.isHaAdmin} title=${this.isHaAdmin?"":this.t("backup_admin_only")} @click=${()=>this.restoreFromHistory(t)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:m`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        ${this.isHaAdmin?m`<label class="fp3d-btn fp3d-upload"
              >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
            /></label>`:m`<button class="fp3d-btn" disabled title=${this.t("backup_admin_only")}>${this.t("backup_full_import")}</button>`}
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
      ${this.isHaAdmin?v:m`<p class="fp3d-sub">${this.t("backup_admin_only")}</p>`}
    </details>`}};var kh="(max-width: 600px)";var ag=480,Xx=`(max-width: ${ag}px)`,ko=1024,lg=500,Mh=`(min-width: 601px) and (max-width: ${ko}px)`,Qx=`(min-width: ${ko+1}px)`,Eh=`(max-height: ${lg}px)`;var dg={closed:"peek",peek:"half",half:"full",full:"peek"},cg=/^(?:text|search|number|email|url|tel|password|)$/,Mo=class{watchPhone(t){let e=this.phoneWatch;if(!t){if(!e)return;for(let r of e.media)r?.removeEventListener?.("change",e.onMedia);this.removeEventListener("focusin",e.onFocus),this.removeEventListener("focusout",e.onFocus),this.removeEventListener("pointermove",e.onPointer),this.removeEventListener("pointerup",e.onPointer),this.removeEventListener("pointercancel",e.onPointer),this.phoneWatch=null,this.backLayers.closeAll();return}if(e)return;let n=typeof matchMedia=="function"?[matchMedia(kh),matchMedia(`${Mh} and (orientation: portrait)`),matchMedia(`(max-width: ${ko}px) and ${Eh}`)]:[],i=()=>{this._phone=!!n[0]?.matches,this._sheeted=n.some(r=>r.matches)},s=r=>{let l=r.type==="focusin"?r.composedPath()[0]:void 0;this._typing=!!l&&(l.tagName==="TEXTAREA"||l.isContentEditable||l.tagName==="INPUT"&&cg.test(l.type))},o=r=>{let l=this.drag,d=r.type==="pointermove"&&!!l&&l.kind!=="pan"&&(!("moved"in l)||l.moved);d!==this.hasAttribute("data-dragging")&&this.toggleAttribute("data-dragging",d)};for(let r of n)r.addEventListener?.("change",i);this.addEventListener("focusin",s),this.addEventListener("focusout",s),this.addEventListener("pointermove",o),this.addEventListener("pointerup",o),this.addEventListener("pointercancel",o),this.phoneWatch={media:n,onMedia:i,onFocus:s,onPointer:o},i()}sheetSelection(){return this._furnitureId??this._openingId??this._deviceId??this._outdoorId??this._wallId??this._roomId??this._roofId??this._solarId??this._roofWinId??this._pipeId??this._cableId??null}sheetKey(){let t=this.sheetSelection();return this._tool==="select"&&!t?null:`${this._tool}|${t??""}`}syncSheet(){if(!this._sheeted)return;let t=this.sheetKey();if(t===this.sheetFor)return;let e=this.sheetFor;if(this.sheetFor=t,!t){this.floorSheet||(this._sheet="closed");return}if(this.floorSheet=!1,this._sheet!=="closed")return;let n=this.sheetSelection(),i=e?.split("|")[0]===t.split("|")[0];!n&&i||(this._sheet="peek")}showSheet(t){this.sheetKey()||(this.floorSheet=!0),this._sheet=t}closeSheet(){this._sheet="closed",this.floorSheet=!1,this.clearToolSelection(),this._pipeId=null,this._roomId=null}phoneTool(t){this.openToolMenu(null),this.setTool(t),this._sheet==="closed"&&t!=="select"&&this.showSheet("peek")}sheetHead(t){let e=this.furnitureItem,n=this.room,i=this.selection().length;if(i>1&&e)return{title:this._multi.length?this.t("multi_title",{n:i}):`\u25A3 ${this.t("block_title")}`,kind:this._multi.length?"":String(i),sub:""};if(e)return{title:lt(this.hass,e.type),kind:this.t("furniture"),sub:""};if(this._tool==="furniture"&&!e)return{title:this.t("tool_furniture"),kind:n?.name??"",sub:this.hintText()};if(this.opening)return{title:this.t("sheet_opening"),kind:"",sub:""};if(this.device){let o=this.device.entity_id;return{title:String(this.hass?.states?.[o]?.attributes?.friendly_name??o),kind:this.t("device"),sub:""}}let s=this.outdoorArea;return s?{title:s.name||this.t(`out_${s.type}`),kind:this.t("sheet_outdoor"),sub:""}:this.freeWall?{title:this.t("free_wall"),kind:"",sub:""}:this._tool!=="select"?{title:this.t(`tool_${this._tool}`),kind:n?.name??"",sub:this.hintText()}:n?{title:n.name,kind:this.t("room"),sub:n.points.length>=3?this.area(yt(n.points)):""}:{title:t?.name??this.t("floors"),kind:this.t("floor"),sub:""}}renderSheet(t){let e=this._sheet;if(e==="closed")return v;let n=this.sheetHead(t),i=()=>this._sheet=dg[e],s=e==="peek"?"details":e==="half"?"sheet_taller":"sheet_smaller",o=l=>this.sheetSwipe=l.clientY,r=l=>{let d=this.sheetSwipe;if(this.sheetSwipe=null,d===null)return;let c=l.clientY-d;c<-40?this._sheet=e==="peek"?"half":"full":c>40&&(this._sheet=e==="full"?"half":"peek")};return m`<aside class="fp3d-side fp3d-sheet" data-sheet=${e} role="region" aria-label=${n.title}>
      <div class="fp3d-sheet-head" @pointerdown=${o} @pointerup=${r} @pointercancel=${()=>this.sheetSwipe=null}>
        <div class="fp3d-sheet-grab" aria-hidden="true" @click=${i}></div>
        <div class="fp3d-sheet-row">
          <div class="fp3d-sheet-title">
            <b>${n.title}</b>${n.kind?m` <span class="fp3d-sub">· ${n.kind}</span>`:v}${n.sub&&this._tool==="select"?m` <span class="fp3d-sub">· ${n.sub}</span>`:v}
            ${n.sub&&this._tool!=="select"?m`<span class="fp3d-sheet-hint fp3d-hint-text">${n.sub}</span>`:v}
          </div>
          <button class="fp3d-btn fp3d-sheet-size" aria-expanded=${e==="peek"?"false":"true"} @click=${i}>${this.t(s)}</button>
          <button class="fp3d-btn fp3d-sheet-close" aria-label=${this.t("close")} title=${this.t("close")} @click=${()=>this.closeSheet()}>${Dt("x")}</button>
        </div>
      </div>
      <div class="fp3d-sheet-body">${this.renderSide(t)}</div>
    </aside>`}renderPhoneBar(t){le(Eu);let e=this._toolMenu==="phone-more";return m`<fp3d-phone-bar
      .ed=${this}
      .tool=${this._tool}
      .menu=${this._toolMenu}
      .canUndo=${this._canUndo}
      .canRedo=${this._canRedo}
      .split=${this._split}
      .wallPick=${this._wallPick}
      .hasFloor=${!!t}
      .editable=${this.isEditor}
      .outside=${e&&this.hasOutside(t)}
      .lang=${this.hass?.language??"en"}
    ></fp3d-phone-bar>`}showsPhoneHint(){return!this._hintOff&&this._sheet==="closed"&&!this.sheetSelection()}setHintOff(t){this._hintOff=t;try{localStorage.setItem("home3d.hintOff",t?"1":"0")}catch{}}selectionPoint(){let t=this.furnitureItem;if(t)return[t.x,t.z];let e=this.device;if(e)return[e.x,e.z];let n=this.outdoorArea?.points??this.room?.points;return n?.length?[n.reduce((i,s)=>i+s[0],0)/n.length,n.reduce((i,s)=>i+s[1],0)/n.length]:null}afterPhoneRender(t){let e=this._sheeted;if(this.backLayers.sync("sheet",e&&this._sheet!=="closed",()=>this.closeSheet()),this.backLayers.sync("menu",e&&!!this._toolMenu,()=>{this._toolMenu=null,this._toolOpen=null,this._floorMenu=!1}),this.backLayers.sync("help",e&&this._help,()=>this._help=!1),this.backLayers.sync("ctx",e&&!!this._ctx,()=>this._ctx=null),this.backLayers.sync("wall",e&&!!this._wallView,()=>this._wallView=null),this.backLayers.sync("rack",e&&!!this._rackSheet,()=>this._rackSheet=null),!e||this._sheet==="closed"||!(t.has("_sheet")||t.has("_roomId")||t.has("_furnitureId")||t.has("_deviceId")||t.has("_outdoorId")))return;let i=this.renderRoot.querySelector(".fp3d-sheet"),s=i?.querySelector(".fp3d-sheet-body");s&&!t.has("_sheet")&&(s.scrollTop=0);let o=this.selectionPoint();if(!i||!o)return;let r=this._size.h-i.offsetHeight,[,l]=this.toScreen(o);r>80&&(l>r-24||l<56)&&this.panBy(0,r/2-l)}};var pg="__fp3dBackStack";function ug(){let a=globalThis;return a[pg]??={layers:[],next:1,skip:0,listening:!1}}function hg(){return typeof window<"u"&&typeof window.addEventListener=="function"&&typeof history<"u"&&typeof history.pushState=="function"}function Sh(a){let t=a?.fp3dBack;return typeof t=="number"?t:0}function fg(a){a.listening||(a.listening=!0,window.addEventListener("popstate",t=>{if(a.skip>0){a.skip--;return}let e=Sh(t.state);for(let n=a.layers.length-1;n>=0;n--){let i=a.layers[n];if(i.id<=e)break;a.layers.splice(n,1),i.close()}}))}function mg(a){if(!hg())return()=>{};let t=ug();fg(t);let e=t.next++;t.layers.push({id:e,close:a});try{let{dialog:i,...s}=history.state??{};history.pushState({...s,fp3dBack:e},"")}catch{}let n=!1;return()=>{if(n)return;n=!0;let i=t.layers.findIndex(s=>s.id===e);i<0||(t.layers.splice(i,1),Sh(history.state)===e&&(t.skip++,history.back()))}}var Eo=class{open=new Map;sync(t,e,n){let i=this.open.get(t);e&&!i?this.open.set(t,mg(()=>{this.open.delete(t),n()})):!e&&i&&(this.open.delete(t),i())}closeAll(){for(let t of[...this.open.values()].reverse())t();this.open.clear()}};var So=class extends Ge{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_libUpdates:{state:!0},_itemPicker:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_solarDim:{state:!0},_sidePinned:{state:!0},_sideMin:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_hiddenItems:{state:!0},_placing:{state:!0},_placeAt:{state:!0},_snapOn:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_unplacedOpen:{state:!0},_unplacedHiddenView:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_expanded:{state:!0},_notice:{state:!0},_resize:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_kerbPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_techAsk:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingNote:{state:!0},_help:{state:!0},_rackSheet:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_rectName:{state:!0},_wallsOpen:{state:!0},_tool:{state:!0},_toolMenu:{state:!0},_sideWidth:{state:!0},_toolOpen:{state:!0},_viewMenu:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0,hasChanged:(t,e)=>JSON.stringify(t)!==JSON.stringify(e)},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0},canEdit:{attribute:!1},home:{attribute:!1},homeName:{attribute:!1},history:{attribute:!1},topic:{attribute:!1},_phone:{state:!0},_sheeted:{state:!0},_sheet:{state:!0},_typing:{state:!0},_hintOff:{state:!0}};rawHass;hassWatch=new bs;optionCache=new ps;get hass(){let t=this.rawHass;return t&&this.hassWatch.rendering?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}doc3dTimer;placeLines=null;lastFurnTap=null;shiftHeld=!1;onShift=t=>this.shiftHeld=t.shiftKey;kitPics=new Map;kitPicsAsked=new Set;cableCache=null;techPress=null;techStroke=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;openingHoverText=null;get _openingHover(){return this.openingHoverText}set _openingHover(t){if(t===this.openingHoverText)return;this.openingHoverText=t;let e=this.renderRoot?.querySelector?.(".fp3d-hint-text");e&&(e.textContent=this.hintText())}openingFormMin=null;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;sideDrag=null;phoneWatch=null;sheetFor=null;floorSheet=!1;sheetSwipe=null;backLayers=new Eo;drag=null;mergeKey=null;mergeWithin=void 0;pointers=new Map;pinch=null;fitted=!1;fittedView=null;fittedAll=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._hiddenItems=[],this._placing=null,this._placeAt=null,this._snapOn=(()=>{try{return localStorage.getItem("home3d.snap")!=="0"}catch{return!0}})(),this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._unplacedOpen=!1,this._unplacedHiddenView=!1,this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._expanded=new Set,this._notice=null,this._openingNote=null,this._openingHover=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._techAsk=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._kerbPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("home3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phone=!1,this._sheeted=!1,this._sheet="closed",this._typing=!1,this._hintOff=!1;try{this._hintOff=localStorage.getItem("home3d.hintOff")==="1"}catch{}let t=!1;try{t=localStorage.getItem("home3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let s=Number(localStorage.getItem("home3d.editorSplit"));s>=20&&s<=80&&(this._splitRatio=s/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._wallsOpen=!1;try{localStorage.getItem("home3d.walls3d")==="auto"&&(this._wall3d="auto"),this._wallsOpen=localStorage.getItem("home3d.wallsOpen")==="1"}catch{}this._solarDim=!0;try{localStorage.getItem("home3d.solarDim")==="off"&&(this._solarDim=!1)}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("home3d.sidePinned")!=="0"}catch{}this._sidePinned=e;let n=!1;try{n=localStorage.getItem("home3d.sideMin")==="1"}catch{}this._sideMin=n,this._preview=null,this._libUpdates=new Set,this._itemPicker=!1,this._measureLen=0,this._packages=!1,this._rectSize=[4,3],this._rectName="",this._tool="select",this._toolMenu=null;let i=320;try{i=Number(localStorage.getItem("home3d.sideWidth"))||320}catch{}this._sideWidth=Math.min(640,Math.max(280,i)),this._toolOpen=null,this._viewMenu=!1,this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._help=!1,this._rackSheet=null,this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1,this.history=new fs,this.topic=null}t(t,e){return ee(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift),this.topic||this.watchPhone(!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),this.watchPhone(!1),this.resizeObserver?.disconnect(),ze().then(t=>t.releasePreviewRenderer())}requestUpdate(t,e,...n){typeof t=="string"&&Ad(this,t,e,this.renderRoot),super.requestUpdate(t,e,...n)}shouldUpdate(t){if(t.size===1&&t.has("hass")&&!this.hassWatch.matters(t.get("hass"),this.rawHass)){for(let e of this.renderRoot?.querySelectorAll?.("fp3d-view3d")??[])e.hass=this.rawHass;return!1}return!0}update(t){this.hassWatch.begin();try{super.update(t)}finally{this.hassWatch.end()}}willUpdate(t){if(t.has("packs")&&ba(this.packs??[]),t.has("_doc")&&za(this._doc),t.has("hass")&&this.hass&&!fl(this.hass.language)&&ml(this.hass.language,this.hass).then(()=>this.requestUpdate()),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),this._placing&&(t.has("home")||t.has("_floorId")&&t.get("_floorId")!==void 0)&&this.cancelPlacing(),t.has("home")&&t.get("home")!=null&&(this.selectItem("room",null),this._floorId=null),t.has("building")&&this.building!==this._doc){this.history.adopt(this.building,this.home),this.showHistory(),this._doc=this.building,this._doc3d=this.building;let e=this._doc.settings.editor_floor;this._floorId===null&&e&&this._doc.floors.some(n=>n.id===e)&&(this._floorId=e),this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this._roomId)||(this._roomId=null),!this.startChecked&&this._doc&&(this.startChecked=!0,_c(this._doc,this._split)&&(this._split=!1))}va(this._doc?.recipes),(t.has("_doc")||t.has("packs"))&&this.fetchPlacedRecipes(),(t.has("building")||t.has("packs"))&&this.isEditor&&!this.topic&&this.refreshLibUpdates(),this.syncSheet()}recipesAsked=new Set;startChecked=!1;fetchPlacedRecipes(){if(!this.hass||!this._doc||!this.packs?.length)return;let t=oc(this._doc).filter(e=>!Bt(e)&&!this.recipesAsked.has(e));if(t.length){for(let e of t)this.recipesAsked.add(e);ue(this.hass,t).then(()=>{t.some(e=>Bt(e))&&((this._split||this._wallView)&&(this._doc3d={...this.docWithDraft()}),this.requestUpdate())})}}firstUpdated(){Su();let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");t&&(this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit(this.fittedAll))}),this.resizeObserver.observe(t))}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t?.moved&&this.pushHistory(t.base)}};get houseTool(){return this._tool==="roof"||this._tool==="energy"}updated(t){if(this.afterPhoneRender(t),Od(t,this)||t.has("_tool"))for(let i of this.renderRoot.querySelectorAll(".fp3d-side"))i.scrollTop=0;if(this.topic)for(let i of this.renderRoot.querySelectorAll(".fp3d-embed details"))i.open||(i.open=!0);let e=this._preview?this.renderRoot.querySelector(".fp3d-preview"):null;if(e&&this._preview){let i=e.getBoundingClientRect(),s=i.left-this._preview.left,o=i.top-this._preview.top;(Math.abs(s)>1||Math.abs(o)>1)&&(e.style.left=`${parseFloat(e.style.left)-s}px`,e.style.top=`${parseFloat(e.style.top)-o}px`)}for(let i of this.renderRoot.querySelectorAll("select option[selected]"))i.selected||(i.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let n=this.floor?.background;if(n&&!this._images[n.image_id]&&!this.loadingImages.has(n.image_id)&&this.loadImage(n.image_id),this.furnitureItem?.pictures)for(let i of this.storedPictures())!this._images[i]&&!this.loadingImages.has(i)&&this.loadImage(i)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isEditor(){return this.canEdit??this.hass?.user?.is_admin??!0}get isHaAdmin(){return this.hass?.user?.is_admin??!1}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(t=>t.id===this._wallId):void 0}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(t=>t.id===this._outdoorId):void 0}onKey=t=>{if(this.topic)return;this.shiftHeld=t.shiftKey;let e=t.composedPath();if(e.some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)){t.key==="Escape"&&e.includes(this)&&this.escape();return}if(!this.isConnected||!this.offsetParent||this.pickerOpen())return;if(Cl(t)){t.preventDefault(),this._help=!this._help;return}if(this._help){t.key==="Escape"&&(this._help=!1);return}if(this._rackSheet){t.key==="Escape"&&(this._rackSheet=null);return}let n=t.ctrlKey||t.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(t.key.toLowerCase()))))if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(Lo(t)){let i=Lo(t);(i==="copy"?this.copySelection():i==="paste"?this.pasteClipboard():this.selectAll())&&t.preventDefault()}else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.deleteSelected();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.prototype.hasOwnProperty.call(lr,t.key)&&!n){let i=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[s,o]=lr[t.key];if((this._tool==="select"||this._tool==="furniture")&&this.nudge(s*i,o*i))t.preventDefault();else if(!this.selectedFix){let r=t.shiftKey?240:60;this.panBy(-s*r,-o*r),t.preventDefault()}}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Tab"&&!n&&!t.altKey&&this._furnitureId&&(this._tool==="select"||this._tool==="furniture")&&this.keysFree(e)){let i=No(this.tabItems(),this._furnitureId,t.shiftKey?-1:1);i&&(t.preventDefault(),this.selectFromList(i))}else t.key==="Backspace"&&this.drawingPoints?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this.drawingPoints?this.closeDraft():t.key==="Escape"&&this.escape()};get freeHaFloors(){let t=new Set(this._doc.floors.map(e=>e.ha_floor));return Object.values(this.hass?.floors??{}).filter(e=>!t.has(e.floor_id)).sort((e,n)=>(e.level??99)-(n.level??99)||e.name.localeCompare(n.name))}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(t=>t.id===this._roofId):void 0}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}typeLabelMemo=new WeakMap;onPlanDragOver=t=>{this.isEditor&&this.floor&&t.dataTransfer?.types.includes($i)&&(t.preventDefault(),t.dataTransfer.dropEffect="copy")};onPlanDrop=t=>{let e=t.dataTransfer?.getData($i),n=this.renderRoot.querySelector("svg.fp3d-plan");if(!e||!n||!this.isEditor||!this.floor)return;t.preventDefault();let i=n.getBoundingClientRect(),[s,o]=this.toWorld(t.clientX-i.left,t.clientY-i.top),r=this.roomAt([s,o]),l=this.floor.rooms.find(d=>d.id===r);this.change((d,c)=>{for(let u of d.floors)u.placements=u.placements.filter(f=>f.entity_id!==e),u.furniture=u.furniture.filter(f=>!(xt(f.type)&&f.entity===e));let p={x:k(s),z:k(o)};if(e.startsWith("light.")&&l&&!l.outdoor){let[u,f,g]=Pe.lamp_ceiling;c.furniture.push({id:j("furniture"),type:"lamp_ceiling",...p,rotation:0,w:u,d:f,h:g,variant:null,entity:e,power:null});return}c.placements.push({entity_id:e,...p,y:null,mount:null});let h=e.startsWith("camera.")&&this.hass?mn(this.hass,e,this.packs??[]):null;h&&Qe(c,e,h)})};get device(){return this._deviceId?this.floor?.placements.find(t=>t.entity_id===this._deviceId):void 0}elevationMemo=null;anyEntity=()=>!0;rackDevicesMemo=null;render(){if(this.topic)return this.renderTopic(this.topic);let t=this.floor,e=t?wt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return m`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderHelp()} ${this.renderRackSheet()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""} ${this._phone?"fp3d-phone":""} ${this._sheeted?"fp3d-sheeted":""} ${this._sheeted&&this._typing?"fp3d-typing":""}" style=${`--fp3d-side-w:${this._sideWidth}px`}>
        <!-- one toolbar row across the plan and the sidebar (#249) -->
        <div class="fp3d-toolbar">
          ${this._wallPick&&!(this._phone&&this.showsPhoneHint())?m`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${Xn(Oe(),"hint_wall_pick",(n,i)=>this.t(n,i))}</div>`:v}
          ${this.renderFloorMenu()} ${this.renderToolBar(t,e?.warnings.length?m`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:v)}
        </div>
        <div class="fp3d-main">
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this.houseTool?m`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:v}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null),this._openingHover=null}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
              @dragover=${this.onPlanDragOver}
              @drop=${this.onPlanDrop}
            >
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):v}
              ${t?this.renderOutdoor(t):v} ${t?this.renderRooms(t):v} ${t?this.renderFurniture(t):v} ${this.renderPlaceGhost()}
              ${t?this.renderFreeWalls(t):v}
              ${t&&e?this.renderOpenings(t,e.walls):v} ${t?this.renderMeter(t):v}
              ${t&&this._tool==="select"?this.renderDevices(t):v}
              ${t&&this._tool==="select"?this.renderPets(t):v}
              ${this.room&&this.isEditor&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):v}
              ${t?this.renderOutdoorHandles(t):v}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):v}
              ${t?this.renderHeadroom(t):v}
              ${this._tool==="roof"?I`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?I`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&this.pipeRules?this.renderPoolPlan(t):v} ${this.renderDraft()} ${this.renderGuides()}
              ${t?this.renderKerb(t):v}
            </svg>
            ${this.renderContext()}
            ${this.renderNav()}
            ${this.renderHint()}
          </div>
          ${this._split&&!this.narrow?m`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:v}
          ${this._split?this.render3d():v}
          </div>
        </div>
        ${this._sheeted?this.renderSheet(t):this.renderAside(t)} ${this._phone?this.renderPhoneBar(t):v}
      </div>
    `}_detectFilter=null;wallPickTip=[0,0];techDocCache=null;get runPool(){return this.poolArea??this.floor?.outdoor.find(t=>t.type==="pool"&&t.points.length>=3)}get canLayRuns(){return(ul()||this._techMode)&&!!this.runPool}get poolArea(){let t=this.outdoorArea;if(t?.type==="pool")return t;let e=this.floor?.outdoor.filter(n=>n.type==="pool")??[];return e.length===1?e[0]:void 0}get pipeRules(){return xl()}_moduleFieldMemo=null;get unit(){return bd(this.hass,this._doc.settings.units)}typed=new ds;rightPress=null;rightUp=-1e9;lastTap=null;planMemo=null;editorsList=null;editorsAsked=!1;editorsMsg=null;libIndex=null;libraryThumb=async t=>{let[e]=await Promise.all([ze(),this.hass?ue(this.hass,[t.type]):void 0]);if($e(t.type)&&!Bt(t.type))return null;let[n,i,s]=t.size;return e.furniturePreview({type:t.type,w:n,d:i,h:s,variant:null,lamp:He[t.type]??null},96,this.packs??[])};libraryPicture=async(t,e)=>{let[n]=await Promise.all([ze(),this.hass?ue(this.hass,[t.type]):void 0]);if($e(t.type)&&!Bt(t.type))return null;let[i,s,o]=t.size;return n.furniturePreview({type:t.type,w:i,d:s,h:o,variant:null,lamp:He[t.type]??null},e,this.packs??[])};libUpdatesAsked=!1;libUpdatesAsking=!1;static styles=[Wn,pl,dd,cd,pd,ud,hd,fd,md,gd]};yc(So,[zs,Ts,Hs,Vs,Cs,Ds,Ws,Ns,js,Bs,Ys,Xs,Qs,no,ro,lo,co,po,uo,go,bo,_o,yo,vo,$o,xo,wo,Mo]);Ue("fp3d-editor",So);export{So as Fp3dEditor,Pm as loadExtensions};
