import{a as _,g as T}from"./home-3d-chunk-4KVEQELK.js";import{a as M}from"./home-3d-chunk-X7PPVIGU.js";import{a as O,b as P,e as E,f as z}from"./home-3d-chunk-UYK4JSLF.js";import{e as L}from"./home-3d-chunk-2WXCEISA.js";import{a as y,b as x,c as $,d as s,g as l,i as S}from"./home-3d-chunk-6SSTD3ZO.js";import"./home-3d-chunk-P2P4Y22L.js";var b="planPinZoom";function N(r){if(r==null||r.trim()==="")return 40;let e=Number(r);return Number.isFinite(e)&&e>=0?Math.min(400,e):40}var Z=(r,e,t)=>Math.min(t,Math.max(e,r));function u(r,e,t,o,n,a,p,c){return{id:r,section:e,card:t,scope:"device",permission:"everyone",label:a,hint:p,keywords:c,control:{kind:"switch"},default:n,prefKeys:[o],read:m=>{let i=m.prefs.get(o);return i===null?n:i==="1"},write:(m,i)=>m.prefs.set(o,i?"1":"0")}}function d(r,e,t,o,n,a,p,c,m,i,v="segment"){return{id:r,section:e,card:t,scope:"device",permission:"everyone",label:p,hint:m,keywords:i,control:v==="segment"?{kind:"segment",options:c}:{kind:"select",options:()=>c},default:a,prefKeys:[o],read:f=>{let g=f.prefs.get(o);return g!==null&&n.includes(g)?g:a},write:(f,g)=>f.prefs.set(o,g)}}var h=r=>r.map(([e,t])=>({value:e,label:t}));function H(r){let e=(o,n)=>({value:o,label:n,group:"theme_group_auto",now:`theme_${T(o,r.hass)}`}),t=o=>({value:o,label:`theme_${o}`,group:"theme_group_fixed"});return[e("theme","follow_ha"),e("auto","follow_sun"),...["neon","blueprint","day","realistic"].map(t)]}function q(r,e){let t=r.raw?r.label:e(r.label);return r.now?`${t} (${e("follow_now",{look:e(r.now)})})`:t}function K(r){let e=[];for(let t of r){let o=t.group??null,n=e[e.length-1];n&&n.group===o?n.options.push(t):e.push({group:o,options:[t]})}return e}var D=[{...d("theme","look","look","theme",["theme","neon","blueprint","day","realistic","auto"],"theme","theme",[],"theme_hint",["dark","light","day","night","neon","theme","colour scheme","sun","automatic"],"select"),control:{kind:"select",options:H}},{id:"accent",section:"look",card:"look",scope:"device",permission:"everyone",label:"accent",hint:"accent_hint",keywords:["colour","color","cyan","highlight"],control:{kind:"colour",fallback:O,clearable:!0},default:null,prefKeys:["accent"],read:r=>{let e=r.prefs.get("accent");return e&&/^#[0-9a-f]{6}$/i.test(e)?e:null},write:(r,e)=>r.prefs.set("accent",e)},d("clock","look","clock","clock",["off","tl","tr","bl","br"],"off","st_clock",h([["off","st_clock_off"],["tl","st_clock_tl"],["tr","st_clock_tr"],["bl","st_clock_bl"],["br","st_clock_br"]]),void 0,["time","clock","corner"],"select"),...[d("clock_hours","look","clock","clock_hours",["auto","12","24"],"auto","st_clock_hours",h([["auto","clock_hours_auto"],["12","clock_hours_12"],["24","clock_hours_24"]]),void 0,["time","clock","12","24","am","pm"]),d("clock_style","look","clock","clock_style",["digital","analogue"],"digital","st_clock_face",h([["digital","clock_digital"],["analogue","clock_analogue"]]),void 0,["time","clock","dial","hands","face"]),u("clock_seconds","look","clock","clock_seconds",!1,"st_clock_seconds",void 0,["time","clock","seconds"]),u("clock_date","look","clock","clock_date",!0,"st_clock_date",void 0,["time","clock","date","day"])].map(r=>({...r,visible:e=>["tl","tr","bl","br"].includes(e.prefs.get("clock")??"")})),d("markers","view3d","markers","markers",["none","room","important","all"],"important","markers",h([["none","markers_none"],["room","markers_room"],["important","markers_important"],["all","markers_all"]]),"markers_important_hint",["pins","icons","symbols","devices","markers"],"select"),d("pinSize","view3d","markers","pinSize",["small","normal","large"],"normal","pin_size",h([["small","pin_size_small"],["normal","pin_size_normal"],["large","pin_size_large"]]),void 0,["pins","icons","symbols","size"]),{id:"plan_pin_zoom",section:"view3d",card:"markers",scope:"device",permission:"everyone",label:"st_plan_pin_zoom",hint:"st_plan_pin_zoom_hint",keywords:["markers","pins","zoom","phone","plan","overlap","hide"],control:{kind:"number",step:5,min:0,max:400,unit:"px/m",clearable:!0},default:40,prefKeys:[b],read:r=>N(r.prefs.get(b)),write:(r,e)=>r.prefs.set(b,e===null?null:String(Math.round(Z(e,0,400))))},u("plan2d","view3d","show","plan2d",!1,"st_view_2d",void 0,["2d","plan","flat"]),d("walls","view3d","show","walls",["auto","cut"],"auto","st_walls",h([["auto","walls_auto"],["cut","walls_cut"]]),void 0,["walls","cut","tall"]),d("explode","view3d","show","explode",["1","0"],"1","st_floors",h([["1","floors_apart"],["0","floors_stacked"]]),void 0,["floors","apart","stacked","explode"]),d("floor_stack","view3d","show","floor_stack",["dim","stacked","single"],"dim","st_floor_stack",h([["dim","floor_stack_short_dim"],["stacked","floor_stack_short_stacked"],["single","floor_stack_short_single"]]),void 0,["floors","below","dimmed"]),u("roof","view3d","show","roof",!1,"st_keep_roof","roof_keep_hint",["roof","zoom"]),d("heat","view3d","show","heat",["none","temperature","humidity","co2","values"],"none","st_heat",h([["none","heat_nothing"],["temperature","heat_temperature"],["humidity","heat_humidity"],["co2","heat_co2"],["values","heat_values"]]),void 0,["heatmap","temperature","humidity","co2","colour"],"select"),u("room_names","view3d","show","room_names",!0,"st_room_names",void 0,["labels","names","rooms"]),u("trail","view3d","show","trail",!1,"st_trail","trail_hint",["motion","trail","history"]),u("weather","view3d","show","weather",!0,"st_weather","st_weather_hint",["rain","snow","weather"])],U=[d("quality","look","look","quality",["auto","low","high"],"auto","quality",h([["auto","quality_auto"],["low","st_quality_low"],["high","quality_high"]]),"card_quality_hint",["performance","tablet","speed","graphics","slow"]),u("stats","screen","screen","stats",!1,"st_fps","fps_title",["fps","performance","frames","speed"]),d("controls","screen","controls","controls",["left","right"],"left","controls_side",h([["left","st_controls_left"],["right","st_controls_right"]]),"st_controls_side_hint",["left","right","star","search","eye","buttons"]),u("keep_view","screen","controls","keep_view",!1,"keep_view","keep_view_hint",["camera","floor"]),u("angle_lock","screen","controls","angle_lock",!1,"angle_lock","angle_lock_hint",["lock","turn","rotate","angle"]),u("floor_pictures","screen","controls","floor_pictures",!1,"st_floor_pictures","st_floor_pictures_hint",["floor","pictures","thumbnails"])];function V(r){let e=r.floors>1,t=[];r.plan2d||t.push({id:"walls"}),e&&!r.plan2d&&t.push({id:"explode",disabled:r.floorOpen}),e&&r.floorOpen&&!r.plan2d&&t.push({id:"floor_stack"}),t.push({id:"heat"},{id:"room_names"}),r.roof&&!r.plan2d&&t.push({id:"roof",disabled:r.floorOpen}),t.push({id:"trail"},{id:"weather"});let o={id:"show",title:"st_card_show",rows:t,hint:t.some(n=>n.disabled)?"pick_all_floors":void 0,openOnPhone:!1};return r.kiosk?[{...o,openOnPhone:!0}]:[{id:"look",title:"theme",rows:[{id:"theme"},{id:"accent"}],openOnPhone:!0},o,{id:"markers",title:"markers",rows:[{id:"markers"},{id:"pinSize"}],hint:"markers_important_hint",openOnPhone:!0},{id:"clock",title:"st_clock",rows:[{id:"clock"}],openOnPhone:!1}]}function w(r){return D.find(e=>e.id===r)??U.find(e=>e.id===r)}var F={get(r){try{return localStorage.getItem(`home3d.${r}`)}catch{return null}},set(r,e){try{e===null?localStorage.removeItem(`home3d.${r}`):localStorage.setItem(`home3d.${r}`,e)}catch{}}},Q=s`<svg class="vp-tick" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>`,B=(r,e,t)=>r+e<t-1,k=class extends S{static properties={hass:{attribute:!1},context:{attribute:!1},_phone:{state:!0}};phoneQuery=null;onPhone=()=>this._phone=!!this.phoneQuery?.matches;constructor(){super(),this.context={floors:1,floorOpen:!1,roof:!1,plan2d:!1,kiosk:!1},this._phone=!1}connectedCallback(){super.connectedCallback(),this.phoneQuery=typeof matchMedia=="function"?matchMedia(_):null,this.phoneQuery?.addEventListener?.("change",this.onPhone),this.onPhone(),window.addEventListener("pointerdown",this.onOutside,!0),window.addEventListener("resize",this.onResize)}drag=new M(this,"view",()=>this.requestUpdate());onResize=()=>this.drag.settle();onOutside=e=>{let t=e.composedPath();t.includes(this)||t.some(o=>o.classList?.contains("fp3d-view-btn"))||this.emit("view-close",{outside:!0})};disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("pointerdown",this.onOutside,!0),window.removeEventListener("resize",this.onResize),this.phoneQuery?.removeEventListener?.("change",this.onPhone),this.sizer?.disconnect(),this.sizer=null}firstUpdated(e){super.firstUpdated(e),this.drag.load(),this.renderRoot.querySelector(".vp")?.focus({preventScroll:!0});let t=this.renderRoot.querySelector(".vp-body");t&&typeof ResizeObserver=="function"&&(this.sizer=new ResizeObserver(this.markMore),this.sizer.observe(t))}updated(e){super.updated(e),this.markMore()}sizer=null;markMore=()=>{let e=this.renderRoot?.querySelector(".vp-body");e?.toggleAttribute("data-more",B(e.scrollTop,e.clientHeight,e.scrollHeight))};t(e,t){return L(this.hass,e,t)}get env(){return{building:null,hass:this.hass,prefs:F}}options(e){let t=e.control;return t.kind==="select"?t.options(this.env):t.kind==="segment"?typeof t.options=="function"?t.options(this.env):t.options:[]}text(e){return q(e,(t,o)=>this.t(t,o))}write(e,t){e.write?.(this.env,t),this.emit("view-change",{id:e.id}),this.requestUpdate()}emit(e,t=null){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}openSettings(e,t=null){this.emit("open-settings",{section:e,id:t})}renderSelect(e,t){let o=e.read(this.env);return s`<select class="vp-select" aria-label=${t} @change=${n=>this.write(e,n.target.value)}>
      ${K(this.options(e)).map(({group:n,options:a})=>{let p=a.map(c=>s`<option value=${c.value} ?selected=${o===c.value}>${this.text(c)}</option>`);return n?s`<optgroup label=${this.t(n)}>${p}</optgroup>`:p})}
    </select>`}renderSegment(e,t,o){let n=e.read(this.env),a=this.options(e),p=a.findIndex(i=>i.value===n),c=i=>{let v=a[(i+a.length)%a.length];v&&v.value!==n&&this.write(e,v.value),this.updateComplete.then(()=>this.renderRoot.querySelector(`[data-seg="${e.id}"] [aria-checked="true"]`)?.focus())},m=i=>{let v=Math.max(0,p),f=i.key==="ArrowRight"||i.key==="ArrowDown"?v+1:i.key==="ArrowLeft"||i.key==="ArrowUp"?v-1:i.key==="Home"?0:i.key==="End"?a.length-1:null;f===null||o||(i.preventDefault(),c(f))};return s`<div class="vp-seg" role="radiogroup" aria-label=${t} aria-disabled=${o?"true":l} data-seg=${e.id} @keydown=${m}>
      ${a.map((i,v)=>{let f=i.value===n;return s`<button type="button" role="radio" aria-checked=${f} tabindex=${f||p<0&&v===0?0:-1} ?disabled=${o} @click=${()=>this.write(e,i.value)}>
          ${f?Q:l}${this.text(i)}
        </button>`})}
    </div>`}renderSwitch(e,t,o,n){return s`<button type="button" class="vp-row vp-switch" role="switch" aria-checked=${t} title=${n??l} @click=${o}>
      <span>${e}</span><i class="vp-sw" aria-hidden="true"></i>
    </button>`}renderAccent(e){let t=e.read(this.env),o=e.control.kind==="colour"?e.control.fallback:"#48cdeb";return s`<span class="vp-accent" title=${this.t("accent_hint")}>
      <input type="color" .value=${t??o} aria-label=${this.t("accent")} @input=${n=>this.write(e,n.target.value)} />
      ${P({value:t,fallback:o,label:this.t("accent_reset"),onReset:()=>this.write(e,null)})}
    </span>`}renderRow(e){let t=w(e.id);if(!t)return l;let o=this.t(t.label),n=t.hint?this.t(t.hint):void 0;switch(t.control.kind){case"switch":return this.renderSwitch(o,!!t.read(this.env),()=>this.write(t,!t.read(this.env)),n);case"segment":return s`<div class="vp-row vp-seg-row" title=${n??l}><span class="vp-label">${o}</span>${this.renderSegment(t,o,!!e.disabled)}</div>`;case"colour":return this.renderAccent(t);case"select":return s`<div class="vp-row"><span class="vp-label">${o}</span>${this.renderSelect(t,o)}</div>`;default:return l}}summary(e){let t=[];for(let o of e.rows){let n=w(o.id);if(!n)continue;let a=n.read(this.env);if(n.control.kind==="switch")a&&t.push(this.t(n.label));else if(n.control.kind==="select"||n.control.kind==="segment"){let p=this.options(n).find(c=>c.value===a);p&&(a!==n.default||e.id!=="show"||o.id==="walls")&&t.push(this.text(p))}}return t.join(" \xB7 ")}renderBody(e){let t=e.rows.map(o=>[o,w(o.id)]);if(e.id==="look"){let[o,n]=t.map(([,a])=>a);return s`<div class="vp-line">${o?this.renderSelect(o,this.t("theme")):l}${n?this.renderAccent(n):l}</div>`}if(e.id==="markers"){let[o,n]=t.map(([,a])=>a);return s`<div class="vp-line">
          ${o?this.renderSelect(o,this.t("markers")):l}
          ${n?this.renderSegment(n,this.t(n.label),!1):l}
        </div>
        ${e.hint?s`<p class="vp-help">${this.t(e.hint)}</p>`:l}`}if(e.id==="clock"){let[o]=t.map(([,n])=>n);return s`<div class="vp-line">
        ${o?this.renderSelect(o,this.t(o.label)):l}
        <button type="button" class="vp-link" @click=${()=>this.openSettings("look","clock_hours")}>${this.t("view_clock_style")} ›</button>
      </div>`}return s`${t.map(([o])=>this.renderRow(o))}${e.hint?s`<p class="vp-help">${this.t(e.hint)}</p>`:l}`}renderSection(e){let t=this.t(e.title);return this._phone?s`<details class="vp-sec vp-${e.id}" ?open=${e.openOnPhone}>
        <summary><span class="vp-h">${t}</span><small class="vp-sum">${this.summary(e)}</small></summary>
        <div class="vp-rows">${this.renderBody(e)}</div>
      </details>`:s`<section class="vp-sec vp-${e.id}" aria-label=${t}>
      <h3 class="vp-h">${t}</h3>
      <div class="vp-rows">${this.renderBody(e)}</div>
    </section>`}renderFooter(){let e=w("quality")?.read(this.env)??"auto";return s`<footer class="vp-foot">
      <div class="vp-line">
        <button type="button" class="vp-quiet" title=${this.t("st_sec_look")} @click=${()=>this.openSettings("look","quality")}>${this.t("view_quality_line",{quality:this.t(`quality_${String(e)}`)})}</button>
        <button type="button" class="vp-link" @click=${()=>this.openSettings("view3d")}>${this.t("view_more_settings")} ›</button>
      </div>
      <div class="vp-line">
        <span class="vp-help">${this.t("view_home_settings")}</span>
        <button type="button" class="vp-link" @click=${()=>this.openSettings("scene")}>${this.t("st_open")} ›</button>
      </div>
    </footer>`}render(){let e=V(this.context);return s`<div class="vp" role="dialog" aria-modal="false" aria-labelledby="vp-title" tabindex="-1">
      <header
        class="vp-head"
        title=${this._phone?l:this.t("float_drag_hint")}
        @pointerdown=${t=>!this._phone&&this.drag.begin(t)}
        @pointermove=${t=>this.drag.move(t)}
        @pointerup=${()=>this.drag.end()}
        @pointercancel=${()=>this.drag.end()}
        @dblclick=${()=>this.drag.reset()}
      >
        <span class="vp-grab" aria-hidden="true"></span>
        <h2 id="vp-title">${this.t("view_btn")}</h2>
        <span class="vp-scope">${this.t("view_scope")}</span>
        ${this.drag.offset&&!this._phone?s`<button type="button" class="vp-snap" title=${this.t("float_snap_back")} aria-label=${this.t("float_snap_back")} @click=${()=>this.drag.reset()}>⤒</button>`:l}
        <button type="button" class="vp-close" title=${this.t("close")} aria-label=${this.t("close")} @click=${()=>this.emit("view-close")}>✕</button>
      </header>
      <div class="vp-body" @scroll=${this.markMore}>
        <slot></slot>
        ${e.map(t=>this.renderSection(t))}
        ${this.context.kiosk?l:this.renderFooter()}
      </div>
    </div>`}static styles=[E,z,$`
      :host {
        position: absolute;
        z-index: 30;
        bottom: 64px;
        left: 50%;
        transform: translateX(-50%);
        width: min(400px, calc(100% - 24px));
        max-height: calc(100% - 84px);
        display: flex;
        flex-direction: column;
        font-size: var(--fp3d-type-body);
      }
      .vp {
        display: flex;
        flex-direction: column;
        min-height: 0;
        max-height: 100%;
        background: var(--fp3d-panel, var(--fp3d-chrome-solid));
        border: 1px solid var(--fp3d-line);
        border-radius: var(--fp3d-radius-card);
        box-shadow: var(--fp3d-shadow);
        color: var(--fp3d-text);
        outline: none;
      }
      .vp-head {
        display: flex;
        align-items: baseline;
        gap: var(--fp3d-space-3);
        padding: var(--fp3d-space-3) var(--fp3d-space-4) var(--fp3d-space-2);
        border-bottom: 1px solid var(--fp3d-line);
      }
      .vp-head h2 {
        margin: 0;
        font-family: var(--fp3d-title-font);
        font-size: var(--fp3d-type-card);
        font-weight: 600;
      }
      .vp-scope {
        flex: 1;
        font-size: var(--fp3d-type-hint);
        color: var(--fp3d-muted);
      }
      .vp-grab {
        display: none;
      }
      /* the header moves the panel (#265): a grab cursor, no text selection while dragging */
      .vp-head {
        cursor: grab;
        user-select: none;
        touch-action: none;
      }
      .vp-head:active {
        cursor: grabbing;
      }
      .vp-close,
      .vp-snap {
        color: var(--fp3d-text);
        cursor: pointer;
        font-size: 16px;
        line-height: 1;
      }
      .vp-body {
        overflow-x: hidden;
        overflow-y: auto;
        overscroll-behavior: contain;
        padding: 0 var(--fp3d-space-4) var(--fp3d-space-2);
        /* a panel taller than the screen shows that it scrolls (#259, V17): a visible scroll bar, and the foot fades
           out while there is more below */
        scrollbar-width: thin;
        scrollbar-color: var(--fp3d-muted) transparent;
      }
      .vp-body[data-more]::after {
        content: "";
        position: sticky;
        bottom: calc(-1 * var(--fp3d-space-2));
        display: block;
        height: 40px;
        margin-top: -40px;
        background: linear-gradient(transparent, var(--fp3d-panel, var(--fp3d-chrome-solid)) 85%);
        pointer-events: none;
      }
      .vp-sec {
        padding: var(--fp3d-space-3) 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .vp-h {
        display: block;
        margin: 0 0 var(--fp3d-space-2);
        font-size: var(--fp3d-type-label);
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .vp-rows {
        display: grid;
        gap: var(--fp3d-space-1);
      }
      .vp-row,
      .vp-line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--fp3d-space-3);
        min-height: 36px;
      }
      .vp-line {
        flex-wrap: wrap;
        row-gap: var(--fp3d-space-1);
      }
      .vp-line > .vp-select {
        flex: 1 1 140px;
        min-width: 0;
      }
      .vp-line > .vp-seg {
        margin-left: auto;
      }
      .vp-label {
        color: var(--fp3d-text);
      }
      .vp-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: var(--fp3d-radius-control);
        padding: 6px 8px;
        min-height: 36px;
        max-width: 100%;
      }
      .vp-row .vp-select {
        min-width: 150px;
      }
      /* a choice that does not fit beside its label goes under it as a whole, never broken over two lines */
      .vp-seg-row {
        flex-wrap: wrap;
        row-gap: var(--fp3d-space-1);
      }
      .vp-seg-row .vp-seg {
        margin-left: auto;
      }
      .vp-seg {
        display: inline-flex;
        flex: none;
        flex-wrap: nowrap;
        gap: 2px;
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: var(--fp3d-radius-control);
      }
      .vp-seg button {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font: inherit;
        border: 0;
        border-radius: 4px;
        background: none;
        color: var(--fp3d-muted);
        padding: 4px 10px;
        min-height: 30px;
        cursor: pointer;
      }
      .vp-seg button[aria-checked="true"] {
        background: var(--fp3d-primary);
        color: var(--fp3d-primary-text);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
      }
      .vp-seg button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .vp-switch {
        width: 100%;
        font: inherit;
        color: inherit;
        text-align: left;
        border: 0;
        background: none;
        padding: 0;
        cursor: pointer;
      }
      .vp-sw {
        position: relative;
        flex: none;
        width: 40px;
        height: 24px;
        border-radius: 999px;
        background: var(--fp3d-line);
      }
      .vp-sw::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--fp3d-muted);
        transition: transform 0.15s, background 0.15s;
      }
      .vp-switch[aria-checked="true"] .vp-sw {
        background: var(--fp3d-primary);
      }
      .vp-switch[aria-checked="true"] .vp-sw::after {
        transform: translateX(16px);
        background: var(--fp3d-primary-text);
      }
      .vp-accent {
        display: inline-flex;
        align-items: center;
        gap: 2px;
      }
      .vp-accent input[type="color"] {
        width: 30px;
        height: 30px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .vp-accent input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .vp-accent input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .vp-help {
        margin: var(--fp3d-space-1) 0 0;
        font-size: var(--fp3d-type-hint);
        color: var(--fp3d-muted);
      }
      .vp-line .vp-help {
        margin: 0;
      }
      .vp-link,
      .vp-quiet,
      .vp-close,
      .vp-snap {
        flex: none;
        font: inherit;
        border: 0;
        background: none;
        padding: 0 var(--fp3d-space-1);
        min-height: 32px;
        color: var(--fp3d-accent);
        cursor: pointer;
        white-space: nowrap;
      }
      .vp-quiet {
        color: var(--fp3d-muted);
        font-size: var(--fp3d-type-hint);
        padding-left: 0;
      }
      .vp-quiet:hover {
        color: var(--fp3d-text);
        text-decoration: underline;
      }
      .vp-foot {
        display: grid;
        gap: var(--fp3d-space-1);
        padding: var(--fp3d-space-2) 0 var(--fp3d-space-1);
      }
      ::slotted(*) {
        margin-top: var(--fp3d-space-3);
      }
      /* touch screens: every control at least 44 px */
      @media (pointer: coarse) {
        .vp-select,
        .vp-seg button,
        .vp-row,
        .vp-line,
        .vp-link,
        .vp-quiet,
        .vp-close,
        .vp-snap {
          min-height: var(--fp3d-touch, 44px);
        }
        .vp-seg button {
          min-width: var(--fp3d-touch, 44px);
          justify-content: center;
        }
      }
      /* phones: a bottom sheet over the view, sections fold */
      @media ${x(_)} {
        :host {
          left: 0;
          right: 0;
          bottom: 0;
          transform: none;
          width: auto;
          max-height: 78%;
          z-index: 40;
        }
        .vp {
          border-radius: 14px 14px 0 0;
          border-bottom: 0;
          padding-bottom: max(env(safe-area-inset-bottom, 0px), 16px);
          animation: vp-up 0.18s ease-out;
        }
        .vp-head {
          position: relative;
          align-items: center;
          padding-top: var(--fp3d-space-4);
        }
        .vp-grab {
          display: block;
          position: absolute;
          top: 6px;
          left: 50%;
          width: 36px;
          height: 4px;
          margin-left: -18px;
          border-radius: 2px;
          background: var(--fp3d-line);
        }
        .vp-scope {
          display: none;
        }
        .vp-head h2 {
          flex: 1;
          font-size: 16px;
        }
        .vp-head {
          cursor: default;
          touch-action: auto;
        }
        .vp-close {
          border: 1px solid var(--fp3d-line);
          border-radius: var(--fp3d-radius-control);
          min-width: var(--fp3d-touch);
        }
        .vp-sec summary {
          display: flex;
          align-items: baseline;
          gap: var(--fp3d-space-2);
          min-height: var(--fp3d-touch);
          align-items: center;
          cursor: pointer;
          list-style: none;
        }
        .vp-sec summary::-webkit-details-marker {
          display: none;
        }
        .vp-sec summary::after {
          content: "";
          margin-left: auto;
          width: 8px;
          height: 8px;
          border-right: 2px solid var(--fp3d-muted);
          border-bottom: 2px solid var(--fp3d-muted);
          transform: rotate(-45deg);
          flex: none;
        }
        .vp-sec[open] summary::after {
          transform: rotate(45deg);
        }
        .vp-sec summary .vp-h {
          margin: 0;
        }
        .vp-sum {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: var(--fp3d-muted);
          font-size: var(--fp3d-type-hint);
        }
        .vp-sec[open] .vp-sum {
          display: none;
        }
      }
      @keyframes vp-up {
        from {
          transform: translateY(24px);
          opacity: 0;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .vp {
          animation: none;
        }
        .vp-sw::after {
          transition: none;
        }
      }
    `]};y("fp3d-view-panel",k);export{k as Fp3dViewPanel,B as moreBelow};
