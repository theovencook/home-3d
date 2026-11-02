import{a as X,f as tt,h as et}from"./home-3d-chunk-OJGIMUY6.js";import{c as P,g as Z,r as C}from"./home-3d-chunk-F2DZRDKA.js";import{b as it}from"./home-3d-chunk-X7PPVIGU.js";import{a as H,k as S,r as A}from"./home-3d-chunk-5C5Q7L2C.js";import{E as O,Q as R,a as F,c as g,e as _,g as z,h as W,i as x,k as U,l as V,o as q,q as b}from"./home-3d-chunk-2C46WKMK.js";import{e as J,f as Q}from"./home-3d-chunk-UYK4JSLF.js";import{e as Y,f as $}from"./home-3d-chunk-2WXCEISA.js";import{a as j,c as N,d as n,g as o,i as D}from"./home-3d-chunk-6SSTD3ZO.js";import"./home-3d-chunk-J6UR2RH3.js";import"./home-3d-chunk-2FYP2ESN.js";import"./home-3d-chunk-P2P4Y22L.js";var st=["lights","covers","climate","media","switches","cameras","sensors","scenes"],dt={light:"lights",cover:"covers",climate:"climate",media:"media",switch:"switches",fan:"switches",lock:"switches",camera:"cameras",sensor:"sensors",binary:"sensors",scene:"scenes",script:"scenes"};function nt(u){return u?dt[u]:null}function M(u){let t=(u?.groups??[]).filter(e=>st.includes(e));return[...new Set([...t,...st])]}function ct(u,t){if(!t?.length)return[...u];let e=new Map;return t.forEach((r,a)=>!e.has(r)&&e.set(r,a)),[...u.filter(r=>e.has(r)).sort((r,a)=>e.get(r)-e.get(a)),...u.filter(r=>!e.has(r))]}function L(u,t,e){let i=new Set(u.filter(s=>nt(t(s)))),r=[...new Set(e?.pinned??[])].filter(s=>i.has(s)),a=new Set(r),p=ct([...i].filter(s=>!a.has(s)),e?.order),d=M(e).map(s=>({group:s,ids:p.filter(f=>nt(t(f))===s)})).filter(s=>s.ids.length);return{pinned:r,groups:d}}var ht=3e3,ft=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],y=u=>n`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${H(u)} />
  </svg>`,k={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},B=u=>n`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${u} /></svg>`,I=class extends D{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},noLook:{type:Boolean},canEdit:{type:Boolean},_showAll:{state:!0},_editing:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this.canEdit=!1,this._editing=!1,this._showAll=!1,this._tick=0}resizer=new it(this,"room_size");onWindow=()=>this.resizer.apply();connectedCallback(){super.connectedCallback(),this.resizer.load(),window.addEventListener("resize",this.onWindow),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},ht)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.onWindow),clearInterval(this.cameraTimer)}t(t,e){return Y(this.hass,t,e)}call(t,e,i){this.readOnly||F(this.hass,t,e,i,r=>this.t("service_failed",{error:r}))}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(t){return q(this.hass,t,this.areaName)}nameButton(t){return n`<button class="fp3d-rp-name" title=${this.readOnly?o:this.t("details")} @click=${()=>!this.readOnly&&A(this,t)}>${this.name(t)}</button>`}async askFor(t){return!this.confirmEntities?.has(t)||await P(this.t("confirm_switch",{name:this.name(t)}),{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")})}async callAll(t,e,i){if(this.readOnly)return;await X(i,this.confirmEntities,a=>this.name(a),a=>P(this.t("confirm_switch",{name:a}),{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")}))&&this.call(t,e,{entity_id:i})}toggle(t,e,i){let r=async()=>{this.readOnly||await this.askFor(t.entity_id)&&i()};return n`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${e?"true":"false"}
      aria-label=${this.name(t.entity_id)}
      ?disabled=${b(t)}
      @click=${r}
    ></button>`}renderHere(t){if(!this.building||!Z("locate")||!tt(this.building))return o;let e=et(this.hass,this.building).filter(i=>i.roomId===t.id);return e.length?n`<p class="fp3d-rp-facts fp3d-rp-here">
      ${e.map((i,r)=>n`${r?", ":""}<span style="color:${i.color}">●</span> ${i.name}`)}
    </p>`:o}async focusHeading(){await this.updateComplete,this.renderRoot.querySelector(".fp3d-rp-head h2")?.focus()}render(){let t=this.room;if(!t||!this.hass)return o;let e=z(this.hass,t.area_id),i=this.memo,{shown:r,more:a}=i&&i.entities===this.hass.entities&&i.floor===this.floor&&i.building===this.building&&i.room===t?i:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:t,...this.floor?R(this.hass,this.floor,t,this.building?C(this.building,t.id):[]):{shown:e,more:[]}},p=O(this.hass,a).map(l=>l.primary),d=t.panel_layout,s=new Set(d?.pinned??[]),f=p.filter(l=>!s.has(l)).length,h=this._showAll?[...r,...p]:[...r,...p.filter(l=>s.has(l))],m=h.filter(l=>!!this.hass.states[l]),c=L(m,g,d),w=l=>m.filter(v=>l.includes(g(v))).map(v=>this.hass.states[v]),T=w(["light"]),rt=w(["cover"]),at=w(["climate"]);this.hasCameras=w(["camera"]).length>0;let K=this.facts(at),ot=T.filter(l=>l.state==="on"),G=this.canEdit&&!this.readOnly&&!!t.area_id,E=G&&this._editing;return n`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${t.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2 tabindex="-1">${t.name}</h2>
          ${K.length?n`<p class="fp3d-rp-facts">${K.join(" \xB7 ")}</p>`:o}
          ${this.renderHere(t)}
          ${this.readOnly?n`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:o}
          ${this.sheets?.length&&!this.readOnly?n`<div class="fp3d-rp-sheets">
                ${this.sheets.map(l=>n`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:l.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${l.icon}</span>${l.title}
                  </button>`)}
              </div>`:o}
          ${this.renderEditLinks(t)}
        </div>
        ${G?n`<button class="fp3d-btn fp3d-rp-small fp3d-rp-edit" aria-pressed=${E?"true":"false"} @click=${()=>this.toggleEdit()}>
              ${this.t(E?"done":"panel_edit_list")}
            </button>`:o}
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        <!-- time travel: one disabled fieldset greys out and disables every control inside it, with one tooltip (#210) -->
        <fieldset class="fp3d-rp-controls" ?disabled=${this.readOnly} title=${this.readOnly?this.t("tt_past_no"):o}>
        ${t.area_id?h.length?o:n`<p class="fp3d-rp-note">${this.t(this.canEdit?"panel_empty":"panel_empty_viewer")}</p>`:n`<p class="fp3d-rp-note">${this.t(this.canEdit?"panel_no_area":"panel_no_area_viewer")}</p>`}
        ${E?n`<fp3d-room-list-edit
              .hass=${this.hass}
              .roomId=${t.id}
              .arranged=${this.editList(t)}
              .hiddenIds=${t.hidden??[]}
              .layout=${d??null}
              .allGroups=${M(d)}
              .nameOf=${l=>this.name(l)}
              .iconOf=${l=>{let v=g(l);return v?H(v):null}}
              .t=${l=>this.t(l)}
            ></fp3d-room-list-edit>`:n`${c.pinned.length?this.section("panel_pinned",c.pinned.map(l=>this.rowOf(this.hass.states[l]))):o}
            ${c.groups.map(l=>this.groupSection(l.group,l.ids,T,ot,rt))}`}
        </fieldset>
        ${f?n`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:f})}
            </button>`:o}
      </div>
      ${["w","s","sw"].map(l=>this.renderEdge(l))}
    </section>`}renderEdge(t){return n`<div
      class="fp3d-rz fp3d-rz-${t}"
      role="separator"
      tabindex="0"
      aria-label=${this.t("room_resize_hint")}
      title=${this.t("room_resize_hint")}
      @pointerdown=${e=>this.resizer.begin(e,t)}
      @pointermove=${e=>this.resizer.move(e)}
      @pointerup=${()=>this.resizer.end()}
      @pointercancel=${()=>this.resizer.end()}
      @keydown=${e=>this.resizer.key(e,t)}
      @dblclick=${()=>this.resizer.reset()}
    ></div>`}toggleEdit(){if(this._editing){this._editing=!1;return}import("./home-3d-listedit-F4A6QJCI.js").then(()=>this._editing=!0)}editList(t){let e={...t,hidden:[]},{shown:i,more:r}=this.floor?R(this.hass,this.floor,e,this.building?C(this.building,t.id):[]):{shown:z(this.hass,t.area_id),more:[]},a=new Set([...t.hidden??[],...t.panel_layout?.pinned??[]]),p=O(this.hass,r).map(d=>d.primary).filter(d=>this._showAll||a.has(d));return L([...new Set([...i,...p])].filter(d=>!!this.hass.states[d]),g,t.panel_layout)}rowOf(t){let e=g(t.entity_id);return e==="light"?this.lightRow(t):e==="cover"?this.coverRow(t):e==="climate"?this.climateRow(t):e==="media"?this.mediaRow(t):e==="camera"?this.cameraTile(t):e==="sensor"||e==="binary"?this.sensorRow(t):e==="scene"||e==="script"?n`<div class="fp3d-rp-scenes">${this.sceneButton(t)}</div>`:this.switchRow(t)}sceneButton(t){return n`<button class="fp3d-btn" ?disabled=${b(t)} @click=${()=>this.call(g(t.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:t.entity_id})}>
      ${this.name(t.entity_id)}
    </button>`}groupSection(t,e,i,r,a){let p=e.map(s=>this.hass.states[s]);if(t==="lights")return this.section("panel_lights",p.map(s=>this.lightRow(s)),n`${r.length<i.length?n`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("light","turn_on",i.filter(s=>!b(s)).map(s=>s.entity_id))}>
              ${this.t("panel_all_on")}
            </button>`:o}${r.length?n`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("light","turn_off",r.map(s=>s.entity_id))}>
              ${this.t("panel_all_off")}
            </button>`:o}`);if(t==="covers")return this.section("panel_covers",p.map(s=>this.coverRow(s)),a.filter(s=>_(s).open||_(s).close).length>1?n`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("cover","open_cover",a.filter(s=>!b(s)&&_(s).open).map(s=>s.entity_id))}>
                ${this.t("panel_all_open")}</button
              ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("cover","close_cover",a.filter(s=>!b(s)&&_(s).close).map(s=>s.entity_id))}>
                ${this.t("panel_all_close")}
              </button>`:o);if(t==="scenes")return this.section("panel_scenes",[n`<div class="fp3d-rp-scenes">${p.map(s=>this.sceneButton(s))}</div>`]);let d={climate:"panel_climate",media:"panel_media",switches:"panel_switches",cameras:"panel_cameras",sensors:"panel_sensors"};return this.section(d[t],p.map(s=>this.rowOf(s)))}facts(t){let e=[],i=this.room,r=(s,f)=>{let h=V(this.hass,this.floor,i,s);if(h===null)return null;if(s==="temperature")return`${$(this.hass,U(this.hass,h),1)} ${x(this.hass)}`;let m=W(this.hass,this.floor,i,s)[0],c=this.hass.states[m]?.attributes.unit_of_measurement??f;return`${$(this.hass,h,1)} ${c}`},a=t.find(s=>typeof s.attributes.current_temperature=="number"),p=r("temperature","\xB0C");p?e.push(p):a&&i.climate?.temperature!=="none"&&e.push(`${$(this.hass,a.attributes.current_temperature,1)} ${x(this.hass)}`);let d=r("humidity","%");return d&&e.push(d),e}section(t,e,i=o){return n`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(t)}</h3>${i}</div>
      ${e}
    </div>`}lightRow(t){let e=t.attributes,i=t.state==="on",r=e.supported_color_modes??[],a=r.some(c=>c!=="onoff"),p=r.includes("color_temp"),d=r.some(c=>["hs","rgb","rgbw","rgbww","xy"].includes(c)),s=typeof e.brightness=="number"?Math.round(e.brightness/255*100):100,f=e.min_color_temp_kelvin??2200,h=e.max_color_temp_kelvin??6500,m=t.entity_id;return n`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${y("light")}</span>
      ${this.nameButton(m)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
      ${this.toggle(t,i,()=>this.call("light","toggle",{entity_id:m}))}
      ${i&&a?n`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(s)}
              @change=${c=>this.call("light","turn_on",{entity_id:m,brightness_pct:Number(c.target.value)})}
          /></label>`:o}
      ${i&&p?n`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${f}
              max=${h}
              step="50"
              .value=${String(e.color_temp_kelvin??f)}
              @change=${c=>this.call("light","turn_on",{entity_id:m,color_temp_kelvin:Number(c.target.value)})}
          /></label>`:o}
      ${i&&d?n`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${ft.map(c=>n`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${c.join(",")})"
                aria-label="rgb(${c.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:m,rgb_color:c})}
              ></button>`)}
          </div>`:o}
    </div>`}coverRow(t){let e=t.attributes,i=_(t),r=t.entity_id,a=b(t),p=(s,f,h=!1)=>n`<button class="fp3d-btn fp3d-rp-small" ?disabled=${a} @click=${async()=>(!h||await this.askFor(r))&&this.call("cover",f,{entity_id:r})}>${this.t(s)}</button>`,d=(s,f,h,m)=>n`<label class="fp3d-rp-slider"
        ><span>${this.t(s)}</span>
        <input
          type="range"
          min="0"
          max="100"
          ?disabled=${a}
          .value=${String(f)}
          @change=${c=>this.call("cover",h,{entity_id:r,[m]:Number(c.target.value)})}
      /></label>`;return n`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${y("cover")}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
      <div class="fp3d-rp-buttons">
        ${i.open?p("cover_open","open_cover",!0):o}${i.stop?p("cover_stop","stop_cover"):o}${i.close?p("cover_close","close_cover",!0):o}
      </div>
      ${i.position?d("position",e.current_position,"set_cover_position","position"):o}
      ${i.tiltOpen||i.tiltStop||i.tiltClose?n`<div class="fp3d-rp-buttons fp3d-rp-wide">
            ${i.tiltOpen?p("cover_tilt_open","open_cover_tilt"):o}${i.tiltStop?p("cover_stop","stop_cover_tilt"):o}${i.tiltClose?p("cover_tilt_close","close_cover_tilt"):o}
          </div>`:o}
      ${i.tiltPosition?d("cover_tilt",e.current_tilt_position,"set_cover_tilt_position","tilt_position"):o}
    </div>`}climateRow(t){let e=t.attributes,i=t.entity_id,r=typeof e.temperature=="number"?e.temperature:null,a=e.target_temp_step??.5,p=e.min_temp??5,d=e.max_temp??30,s=e.hvac_modes??[],f=h=>this.call("climate","set_temperature",{entity_id:i,temperature:Math.min(d,Math.max(p,Math.round(h/a)*a))});return n`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.hvac_action==="heating"?"fp3d-rp-on":""}">${y("climate")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
      ${r!==null?n`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>f(r-a)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${$(this.hass,r,1)} ${x(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>f(r+a)}>+</button>
          </div>`:o}
      ${s.length>1?n`<div class="fp3d-rp-chips">
            ${s.map(h=>n`<button
                class="fp3d-chip"
                aria-pressed=${t.state===h}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:i,hvac_mode:h})}
              >
                ${this.stateLabel(h)}
              </button>`)}
          </div>`:o}
    </div>`}stateOf(t,e=S(this.hass,t)){if(this.room?.no_state?.includes(t.entity_id))return"";let i=g(t.entity_id);return t.state==="unknown"&&i!=="sensor"&&i!=="binary"?"":e}stateLabel(t){let e=`state_${t}`,i=this.t(e);return i===e?t:i}mediaRow(t){let e=t.attributes,i=t.entity_id,r=b(t)||t.state==="off",a=[e.media_title,e.media_artist].filter(p=>typeof p=="string"&&p).join(" \xB7 ");return n`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.state==="playing"?"fp3d-rp-on":""}">${y("media")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(t,this.stateLabel(t.state))}</span>
      ${a?n`<p class="fp3d-rp-media fp3d-rp-wide">${a}</p>`:o}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:i})}>
          ${B(k.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${b(t)} @click=${()=>this.call("media_player",t.state==="playing"?"media_pause":"media_play",{entity_id:i})}>
          ${B(t.state==="playing"?k.pause:k.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:i})}>
          ${B(k.next)}
        </button>
      </div>
      ${typeof e.volume_level=="number"?n`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(e.volume_level*100))}
              @change=${p=>this.call("media_player","volume_set",{entity_id:i,volume_level:Number(p.target.value)/100})}
          /></label>`:o}
    </div>`}switchRow(t){let e=t.entity_id,i=g(e),r=e.slice(0,e.indexOf(".")),a=i==="lock"?t.state==="unlocked"||t.state==="open":t.state==="on",p=()=>i==="lock"?this.call("lock",a?"lock":"unlock",{entity_id:e}):this.call(r,"toggle",{entity_id:e});return n`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${a?"fp3d-rp-on":""}">${y(i)}</span>
      ${this.nameButton(e)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
      ${this.toggle(t,a,p)}
    </div>`}cameraTile(t){let e=t.attributes.entity_picture,i=e&&!b(t)?e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=this.floor?.placements.some(p=>p.entity_id===t.entity_id),a=n`${i?n`<img src=${i} alt=${this.name(t.entity_id)} loading="lazy" />`:n`<span class="fp3d-rp-note">${S(this.hass,t)}</span>`}
      <span class="fp3d-rp-camera-name">${this.name(t.entity_id)}</span>`;return n`<div class="fp3d-rp-camera-wrap">
      ${this.readOnly?n`<div class="fp3d-rp-camera fp3d-rp-camera-still">${a}</div>`:n`<button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>A(this,t.entity_id)}>${a}</button>`}
      ${r&&!this.noLook&&!this.readOnly?n`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:t.entity_id},bubbles:!0,composed:!0}))}
          >
            ${this.t("through_camera")}
          </button>`:o}
    </div>`}sensorRow(t){let e=g(t.entity_id),i=e==="binary"&&t.state==="on";return n`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${y(e)}</span>
      ${this.nameButton(t.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
    </div>`}renderEditLinks(t){if(!this.canEdit||this.readOnly)return o;let e=this.floor?.id??null,i=(r,a)=>this.dispatchEvent(new CustomEvent(r,{detail:a,bubbles:!0,composed:!0}));return n`<div class="fp3d-rp-links">
      <button class="fp3d-btn fp3d-rp-small fp3d-edit-room" @click=${()=>i("edit-room",{floorId:e,roomId:t.id})}>${this.t("edit_room")}</button>
      ${e?n`<button class="fp3d-btn fp3d-rp-small fp3d-edit-floor" @click=${()=>i("edit-floor",{floorId:e})}>${this.t("edit_floor")}</button>`:o}
    </div>`}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}static styles=[J,Q,N`
      :host {
        display: block;
      }
      /* a size set by dragging an edge (#267): the card fills the host's height */
      :host([sized]) .fp3d-rp {
        height: 100%;
      }
      .fp3d-rz {
        position: absolute;
        z-index: 2;
        touch-action: none;
      }
      .fp3d-rz-w {
        left: 0;
        top: 18px;
        bottom: 18px;
        width: 8px;
        cursor: ew-resize;
      }
      .fp3d-rz-s {
        left: 18px;
        right: 18px;
        bottom: 0;
        height: 8px;
        cursor: ns-resize;
      }
      .fp3d-rz-sw {
        left: 0;
        bottom: 0;
        width: 18px;
        height: 18px;
        cursor: nesw-resize;
      }
      .fp3d-rz:hover,
      .fp3d-rz:focus-visible {
        background: var(--fp3d-accent);
        opacity: 0.45;
      }
      /* a sheet (phones, portrait tablets) keeps its own size: no edges to drag */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-rz {
          display: none;
        }
      }
      .fp3d-rp {
        position: relative;
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      /* time travel: the controls are in a disabled fieldset, greyed out, with a tooltip (#210) */
      .fp3d-rp-controls {
        display: contents;
        border: 0;
        margin: 0;
        padding: 0;
        min-width: 0;
      }
      .fp3d-rp-ro .fp3d-rp-body :is(button, input, select):disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
      .fp3d-rp-camera-still {
        cursor: default;
      }
      .fp3d-rp-ro-note {
        color: #ffb020;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      .fp3d-rp-links {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-rp-sheets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-rp-sheet {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 32px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 12%, transparent);
        color: inherit;
        font: inherit;
        font-size: 13px;
        cursor: pointer;
      }
      .fp3d-rp-sheet:hover {
        border-color: var(--fp3d-accent, #37e0ff);
      }
      h2:focus:not(:focus-visible) {
        outline: none;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      /* last, so it wins over the sizes above (#181) */
      @media (pointer: coarse) {
        .fp3d-rp-close,
        .fp3d-rp-icon,
        .fp3d-rp-swatch {
          width: 44px;
          height: 44px;
        }
        .fp3d-rp-stepper .fp3d-btn {
          width: 44px;
        }
        /* the 44 px icon gets a column as wide, so it keeps clear of the name (#260, V07) */
        .fp3d-rp-row {
          grid-template-columns: 44px 1fr auto auto;
        }
        .fp3d-rp-small,
        .fp3d-rp-sheet,
        .fp3d-rp-chips .fp3d-chip {
          min-height: 44px;
        }
      }
    `]};j("fp3d-room-panel",I);export{I as Fp3dRoomPanel};
