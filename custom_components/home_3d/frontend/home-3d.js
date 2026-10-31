import{$ as ke,$b as ht,A as de,Aa as It,Ab as Oe,B as he,Ba as Tt,C as pe,Ca as G,D as ce,Da as Ie,E as ue,Ea as Te,F as _e,Fa as Ae,Ga as Ce,H as A,Ha as nt,I as be,Ia as ot,Ja as B,K as we,Ka as z,L as $e,La as V,M as et,Ma as rt,Na as at,Nb as Rt,O as ye,Oa as k,P as xe,Pa as Y,Q as it,Qa as Re,S as I,Sa as Le,Tb as Fe,Ua as Me,Ub as D,Wa as Pe,Wb as O,Xb as Be,Yb as lt,Za as De,Zb as dt,_b as ze,a as C,aa as Ee,ac as pt,b as Z,bc as ct,c as R,cc as Lt,d as r,dc as Ve,ea as He,ec as Mt,f as te,fc as Pt,g as l,h as L,hc as Ne,i as kt,ia as st,ib as At,ic as Dt,kc as We,lc as Ot,n as ee,o as ie,p as Et,pa as Se,pb as Ct,q as se,r as ne,s as oe,w as re,x as ae,y as le,z as tt,za as T}from"./home-3d-chunk-P6O3PJ4Z.js";import{G as ve,Q as St,b as fe,d as j,e as Ht,m as K,r as me,v as ge,z as H}from"./home-3d-chunk-A24XFX3G.js";Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(t){let e=Math.trunc(t)||0;return this[e<0?this.length+e:e]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Ke=new URL(import.meta.url),Ue=Ke.searchParams.get("v"),qe=o=>new URL(`./fonts/${o}${Ue?`?v=${Ue}`:""}`,Ke).href,je="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Ge(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${qe("figtree.woff2")}) format("woff2");unicode-range:${je}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${qe("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${je}}`,document.head.append(o)}function ut(o,t){return t==="metric"||t==="imperial"?t:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function mi(o,t){return String(Number(o.toFixed(t)))}function Ft(o,t=2){let e=o<0?"-":"",i=Math.round(Math.abs(o)/.0254*(t>=2?10:1))/(t>=2?10:1),s=Math.floor(i/12+1e-9),n=i-s*12,a=mi(n,t>=2?1:0);return s?n<.05?`${e}${s}'`:`${e}${s}' ${a}"`:`${e}${a}"`}function Bt(o,t){let e=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let i=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,s=0,n=!1,a=!1,d=e;for(let p of e.matchAll(i)){let u=Number(p[1]);if(!Number.isFinite(u))return null;let c=p[2];n=!0,d=d.replace(p[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(s+=u*.3048,a=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?s+=u*.0254:c==="mm"?s+=u/1e3:c==="cm"?s+=u/100:c==="m"?s+=u:s+=t==="imperial"?u*(a?.0254:.3048):u}return!n||/[^\s+]/.test(d)?null:s}function J(o,t){return t==="imperial"?o.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):o}function Ye(o,t){if(t.opening_links_saved||!Object.keys(o.states??{}).length)return 0;let e=Ee(o,t.floors),i=0;for(let s of t.floors)for(let n of s.openings){if(n.contact!=null||n.sensor==="handle")continue;let a=e.get(n.id);a&&(n.contact=a,i++)}return t.opening_links_saved=!0,i}var gi=700,Vt="home3d.unsaved",vi="0.1.0",_i="e15c35db2d26",bi=3,Xe="floorplan-3d.unsaved";function Je(){try{let o=localStorage.getItem(Vt)??localStorage.getItem(Xe);return o?JSON.parse(o):null}catch{return null}}function Q(o){try{o?localStorage.setItem(Vt,JSON.stringify(o)):(localStorage.removeItem(Vt),localStorage.removeItem(Xe))}catch{}}var N=class{building=null;error=null;backendProtocol=null;planProblem=null;saveState="idle";saveError=null;backendVersion=null;backendBuild=null;frontend={version:vi,build:_i};draft=null;conflict=!1;packs=[];canEdit=!1;packsLoaded=!1;home=void 0;homeId=null;homeName=null;libraryLoading=null;host;hass=null;revision=-1;recipeBases={};ownRevisions=new Set;unsubscribe=null;subscribing=null;saveTimer;pending=null;pendingHome=void 0;edits=0;changes=[];remoteRevision=-1;saving=null;connected=!1;watched=null;constructor(t){this.host=t,t.addController(this)}get shown(){return this.homeId??this.home}setHome(t){t!==this.home&&(this.remembered=!1,this.home=t,!(!this.hass||!this.connected)&&this.flush().then(async()=>{await this.subscribing;let e=this.unsubscribe;this.unsubscribe=null,await e?.(),await this.start()}))}openRemembered(t){this.hass&&this.connected?this.setHome(t):this.home=t,this.remembered=!0}onHomeGone=null;remembered=!1;async reopen(){await this.flush(),await this.reload()}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush();let t=this.unsubscribe;this.unsubscribe=null,t?.(),this.watched?.removeEventListener?.("ready",this.onReconnect),this.watched=null}onReconnect=()=>{this.checkVersion()};async checkVersion(){if(this.hass)try{let t=await se(this.hass);this.backendVersion=t.version??null,this.backendProtocol=t.protocol??0,this.backendBuild=t.build??null,this.host.requestUpdate()}catch{}}edit(t){this.building=t,j(t.recipes),this.pending=t,this.pendingHome=this.shown,this.edits++,this.changes=null,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},gi),this.host.requestUpdate()}update(t){if(!this.building)return;let e=this.pending?this.changes:[],i=structuredClone(this.building);t(i),this.edit(i),this.changes=e?[...e,t]:null,this.flush()}speaks(t){return(this.backendProtocol??0)>=t}get frontendVersion(){return this.frontend.version}get versionGap(){let t=this.frontend;return!this.backendVersion||t.version==="dev"?null:this.backendVersion===t.version?this.backendBuild&&t.build!=="dev"&&this.backendBuild!==t.build?"frontend":null:yi(this.backendVersion,t.version)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&this.frontend.version!=="dev"&&this.backendVersion!==this.frontend.version}get updateNotice(){return this.versionGap!=="frontend"?null:this.saveState==="error"?"unsaved":this.pending||this.saving?"saving":"ready"}async reloadWhenSaved(t=()=>location.reload()){return await this.flush(),this.pending||this.saveState==="error"?!1:(t(),!0)}async restoreDraft(){let t=this.draft,e=this.conflict;if(this.draft=null,this.conflict=!1,!t||!this.draftFits(t)){this.host.requestUpdate();return}if(e&&this.hass){try{await re(this.hass,this.shown)}catch{}if(!this.draftFits(t)){this.host.requestUpdate();return}}this.edit(St(t.building))}draftFits(t){return t.home?t.home===this.homeId:this.home===void 0}discardDraft(){this.draft=null,this.conflict=!1,Q(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;if(!t||!this.hass)return;let e=this.pendingHome,i=this.changes;this.pending=null,this.changes=[];for(let s of t.floors)for(let n of s.furniture)n.mount_y!=null&&n.mount_y>10&&(n.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{await this.save(t,i,e)}catch(s){this.saveState="error",this.saveError=zt(s),Q({building:t,savedAt:Date.now(),...e?{home:e}:{}})}this.host.requestUpdate()})(),await this.saving,this.saving=null,!this.pending&&this.remoteRevision>this.revision&&this.reload()}async save(t,e,i){for(let s=1;;s++){let n=i===this.shown,a=n?this.recipeBases:{},d;try{let h=n&&this.revision>=0?this.revision:void 0,{revision:v,recipes:y}=await ne(this.hass,t,a,i,h);y&&Qe(t,y,a),i===this.shown&&(y&&(this.building&&this.building!==t&&Qe(this.building,y,a),this.building&&j(this.building.recipes),this.recipeBases=Ht(y)),this.ownRevisions.add(v),this.revision=v),this.saveState=this.pending?"saving":"saved",this.saveError=null,this.forgetDraft(i);return}catch(h){if(!$i(h))throw h;d=h}if(i!==this.shown){Q({building:t,savedAt:Date.now(),...i?{home:i}:{},conflict:!0}),this.saveState="error",this.saveError=zt(d);return}let p=await this.loadTheirs(i),u=this.pending??t,c=this.pending?e&&this.changes?[...e,...this.changes]:null:e;if(clearTimeout(this.saveTimer),this.pending=null,this.changes=[],p&&this.building&&wi(u,this.building)){this.saveState="saved";return}if(!p||!c||s>=bi||!this.building){let h={building:u,savedAt:Date.now(),...i?{home:i}:{},conflict:!0};Q(h),this.draftFits(h)&&(this.conflict=!0,this.draft=h),this.saveState="error",this.saveError=null;return}t=structuredClone(this.building);for(let h of c)h(t);e=c,this.building=t,j(t.recipes),this.host.requestUpdate()}}async loadTheirs(t){let e;try{e=await Et(this.hass,t)}catch{return!1}return t!==this.shown||(e.home_id??null)!==this.homeId?!1:(this.show(e,!0),this.error=null,!0)}forgetDraft(t){if(this.conflict)return;let e=Je();e?.home&&e.home!==t||Q(null)}async start(){this.hass&&(await this.reload(),!this.watched&&this.connected&&this.hass.connection.addEventListener&&(this.watched=this.hass.connection,this.watched.addEventListener("ready",this.onReconnect)),!this.unsubscribe&&!this.subscribing&&this.connected&&(this.subscribing=this.subscribe(this.hass),await this.subscribing,this.subscribing=null))}async subscribe(t){let e=this.home;try{let i=await oe(t,(s,n)=>{if(n&&this.homeId&&n!==this.homeId){this.flush().then(()=>this.reload());return}this.ownRevisions.has(s)||s===this.revision||(this.remoteRevision=Math.max(this.remoteRevision,s),!(this.pending||this.saving)&&this.reload())},e);!this.connected||e!==this.home||this.unsubscribe?await i():this.unsubscribe=i}catch{}}loadLibrary(){return this.packsLoaded?Promise.resolve():(this.libraryLoading??=this.reloadPacks().finally(()=>this.libraryLoading=null),this.libraryLoading)}async reloadPacks(){if(this.hass){try{this.packs=await ue(this.hass)}catch{this.packs=[]}fe(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(!this.hass)return!1;let t=this.home,e=this.edits;try{let i=await Et(this.hass,t);if(t!==this.home)return!1;let n=(i.home_id??null)!==this.homeId;if(n){for(;this.pending;)await this.flush();if(t!==this.home)return!1;this.ownRevisions.clear(),this.remoteRevision=-1,this.draft=null,this.conflict=!1}if(this.show(i,n||!this.pending&&!this.saving&&this.edits===e),this.draft===null&&!this.pending){let a=Je();this.draft=a&&this.draftFits(a)?a:null,this.conflict=!!this.draft?.conflict}this.error=null}catch(i){return t!==this.home?!1:this.remembered&&t!==void 0&&i?.code==="home_not_found"?(this.remembered=!1,this.home=void 0,this.onHomeGone?.(),this.reload()):(this.error=zt(i),this.host.requestUpdate(),!1)}return this.host.requestUpdate(),!0}show(t,e){this.homeId=t.home_id??null,this.homeName=t.home_name??null,this.backendVersion=t.version??null,this.backendProtocol=t.protocol??0,this.backendBuild=t.build??null,this.canEdit=t.can_edit??!!this.hass?.user?.is_admin,this.planProblem=t.problem??null,e&&(this.building=St(t.building),j(this.building.recipes),this.recipeBases=Ht(this.building.recipes),this.revision=t.revision,this.hass&&!this.building.opening_links_saved&&(Ye(this.hass,this.building),this.building.opening_links_saved&&this.canEdit&&this.edit(this.building)))}};function Qe(o,t,e){let i=o.recipes??{},s=Object.entries(i).filter(([n,a])=>!(n in t)||a.hash!==e[n]);o.recipes={...t,...Object.fromEntries(s)}}function wi(o,t){return JSON.stringify({...o,recipes:void 0})===JSON.stringify({...t,recipes:void 0})}function $i(o){return!!o&&typeof o=="object"&&o.code==="conflict"}function zt(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function yi(o,t){let e=o.split(/[.-]/).map(s=>Number.parseInt(s,10)||0),i=t.split(/[.-]/).map(s=>Number.parseInt(s,10)||0);for(let s=0;s<Math.max(e.length,i.length);s++){let n=(e[s]??0)-(i[s]??0);if(n)return n}return 0}var Nt=T("home-3d-editor",()=>"055f880ae0c2");var Ze=T("home-3d-settings",()=>"069f73659b45");var ft=T("home-3d-locate",()=>"945074ec0667");var xi=4,ki=3e3,Ei=8,Hi=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],W=o=>r`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${De(o)} />
  </svg>`,mt={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Wt=o=>r`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,Ut=class extends L{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},noLook:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},ki)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(t,e){return k(this.hass,t,e)}call(t,e,i){this.readOnly||_e(this.hass,t,e,i,s=>this.t("service_failed",{error:s}))}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(t){return it(this.hass,t,this.areaName)}nameButton(t){return r`<button class="fp3d-rp-name" title=${this.readOnly?l:this.t("details")} @click=${()=>!this.readOnly&&Ct(this,t)}>${this.name(t)}</button>`}async askFor(t){return!this.confirmEntities?.has(t)||await It(this.t("confirm_switch",{name:this.name(t)}),{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")})}async callAll(t,e,i){if(this.readOnly)return;await Ie(i,this.confirmEntities,n=>this.name(n),n=>It(this.t("confirm_switch",{name:n}),{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")}))&&this.call(t,e,{entity_id:i})}toggle(t,e,i){let s=async()=>{this.readOnly||await this.askFor(t.entity_id)&&i()};return r`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${e?"true":"false"}
      aria-label=${this.name(t.entity_id)}
      ?disabled=${I(t)}
      @click=${s}
    ></button>`}renderHere(t){if(!this.building||!Le("locate")||!Me(this.building))return l;let e=Pe(this.hass,this.building).filter(i=>i.roomId===t.id);return e.length?r`<p class="fp3d-rp-facts fp3d-rp-here">
      ${e.map((i,s)=>r`${s?", ":""}<span style="color:${i.color}">●</span> ${i.name}`)}
    </p>`:l}render(){let t=this.room;if(!t||!this.hass)return l;let e=we(this.hass,t.area_id),i=this.memo,{shown:s,more:n}=i&&i.entities===this.hass.entities&&i.floor===this.floor&&i.building===this.building&&i.room===t?i:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:t,...this.floor?Se(this.hass,this.floor,t,this.building?Oe(this.building,t.id):[]):{shown:e,more:[]}},a=He(this.hass,n).map(f=>f.primary),d=a.length,p=this._showAll?[...s,...a]:s,u=f=>p.filter(E=>f.includes(A(E))).map(E=>this.hass.states[E]).filter(E=>!!E),c=u(["light"]),h=u(["cover"]),v=u(["climate"]),y=u(["media"]),x=u(["switch","fan","lock"]),m=u(["sensor","binary"]),b=u(["camera"]);this.hasCameras=b.length>0;let $=u(["scene","script"]),S=this.facts(v),_=c.filter(f=>f.state==="on");return r`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${t.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${t.name}</h2>
          ${S.length?r`<p class="fp3d-rp-facts">${S.join(" \xB7 ")}</p>`:l}
          ${this.renderHere(t)}
          ${this.readOnly?r`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:l}
          ${this.sheets?.length&&!this.readOnly?r`<div class="fp3d-rp-sheets">
                ${this.sheets.map(f=>r`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:f.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${f.icon}</span>${f.title}
                  </button>`)}
              </div>`:l}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        <!-- time travel: one disabled fieldset greys out and disables every control inside it, with one tooltip (#210) -->
        <fieldset class="fp3d-rp-controls" ?disabled=${this.readOnly} title=${this.readOnly?this.t("tt_past_no"):l}>
        ${t.area_id?p.length?l:r`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:r`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map(f=>this.lightRow(f)),r`${_.length<c.length?r`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("light","turn_on",c.filter(f=>!I(f)).map(f=>f.entity_id))}>
                    ${this.t("panel_all_on")}
                  </button>`:l}${_.length?r`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("light","turn_off",_.map(f=>f.entity_id))}>
                    ${this.t("panel_all_off")}
                  </button>`:l}`):l}
        ${h.length?this.section("panel_covers",h.map(f=>this.coverRow(f)),h.length>1?r`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("cover","open_cover",h.filter(f=>!I(f)).map(f=>f.entity_id))}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("cover","close_cover",h.filter(f=>!I(f)).map(f=>f.entity_id))}>
                      ${this.t("panel_all_close")}
                    </button>`:l):l}
        ${v.length?this.section("panel_climate",v.map(f=>this.climateRow(f))):l}
        ${y.length?this.section("panel_media",y.map(f=>this.mediaRow(f))):l}
        ${x.length?this.section("panel_switches",x.map(f=>this.switchRow(f))):l}
        ${b.length?this.section("panel_cameras",b.map(f=>this.cameraTile(f))):l}
        ${m.length?this.section("panel_sensors",m.map(f=>this.sensorRow(f))):l}
        ${$.length?this.section("panel_scenes",[r`<div class="fp3d-rp-scenes">
                  ${$.map(f=>r`<button
                      class="fp3d-btn"
                      ?disabled=${I(f)}
                      @click=${()=>this.call(A(f.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:f.entity_id})}
                    >
                      ${this.name(f.entity_id)}
                    </button>`)}
                </div>`]):l}
        </fieldset>
        ${d?r`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:d})}
            </button>`:l}
      </div>
    </section>`}facts(t){let e=[],i=this.room,s=(p,u)=>{let c=xe(this.hass,this.floor,i,p);if(c===null)return null;if(p==="temperature")return`${Y(this.hass,ye(this.hass,c),1)} ${et(this.hass)}`;let h=$e(this.hass,this.floor,i,p)[0],v=this.hass.states[h]?.attributes.unit_of_measurement??u;return`${Y(this.hass,c,1)} ${v}`},n=t.find(p=>typeof p.attributes.current_temperature=="number"),a=s("temperature","\xB0C");a?e.push(a):n&&i.climate?.temperature!=="none"&&e.push(`${Y(this.hass,n.attributes.current_temperature,1)} ${et(this.hass)}`);let d=s("humidity","%");return d&&e.push(d),e}section(t,e,i=l){return r`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(t)}</h3>${i}</div>
      ${e}
    </div>`}lightRow(t){let e=t.attributes,i=t.state==="on",s=e.supported_color_modes??[],n=s.some(v=>v!=="onoff"),a=s.includes("color_temp"),d=s.some(v=>["hs","rgb","rgbw","rgbww","xy"].includes(v)),p=typeof e.brightness=="number"?Math.round(e.brightness/255*100):100,u=e.min_color_temp_kelvin??2200,c=e.max_color_temp_kelvin??6500,h=t.entity_id;return r`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${W("light")}</span>
      ${this.nameButton(h)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
      ${this.toggle(t,i,()=>this.call("light","toggle",{entity_id:h}))}
      ${i&&n?r`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(p)}
              @change=${v=>this.call("light","turn_on",{entity_id:h,brightness_pct:Number(v.target.value)})}
          /></label>`:l}
      ${i&&a?r`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${u}
              max=${c}
              step="50"
              .value=${String(e.color_temp_kelvin??u)}
              @change=${v=>this.call("light","turn_on",{entity_id:h,color_temp_kelvin:Number(v.target.value)})}
          /></label>`:l}
      ${i&&d?r`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${Hi.map(v=>r`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${v.join(",")})"
                aria-label="rgb(${v.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:h,rgb_color:v})}
              ></button>`)}
          </div>`:l}
    </div>`}coverRow(t){let e=t.attributes,i=e.supported_features??0,s=t.entity_id,n=I(t);return r`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${W("cover")}</span>
      ${this.nameButton(s)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${n} @click=${async()=>await this.askFor(s)&&this.call("cover","open_cover",{entity_id:s})}>${this.t("cover_open")}</button>
        ${i&Ei?r`<button class="fp3d-btn fp3d-rp-small" ?disabled=${n} @click=${()=>this.call("cover","stop_cover",{entity_id:s})}>${this.t("cover_stop")}</button>`:l}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${n} @click=${async()=>await this.askFor(s)&&this.call("cover","close_cover",{entity_id:s})}>${this.t("cover_close")}</button>
      </div>
      ${i&xi&&typeof e.current_position=="number"?r`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${n}
              .value=${String(e.current_position)}
              @change=${a=>this.call("cover","set_cover_position",{entity_id:s,position:Number(a.target.value)})}
          /></label>`:l}
      ${i&128&&typeof e.current_tilt_position=="number"?r`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${n}
              .value=${String(e.current_tilt_position)}
              @change=${a=>this.call("cover","set_cover_tilt_position",{entity_id:s,tilt_position:Number(a.target.value)})}
          /></label>`:be(this.hass?.states[s])?r`<div class="fp3d-rp-buttons">
              ${i&16?r`<button class="fp3d-btn fp3d-rp-small" ?disabled=${n} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:s})}>${this.t("cover_tilt_open")}</button>`:l}
              ${i&32?r`<button class="fp3d-btn fp3d-rp-small" ?disabled=${n} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:s})}>${this.t("cover_tilt_close")}</button>`:l}
            </div>`:l}
    </div>`}climateRow(t){let e=t.attributes,i=t.entity_id,s=typeof e.temperature=="number"?e.temperature:null,n=e.target_temp_step??.5,a=e.min_temp??5,d=e.max_temp??30,p=e.hvac_modes??[],u=c=>this.call("climate","set_temperature",{entity_id:i,temperature:Math.min(d,Math.max(a,Math.round(c/n)*n))});return r`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.hvac_action==="heating"?"fp3d-rp-on":""}">${W("climate")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
      ${s!==null?r`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>u(s-n)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${Y(this.hass,s,1)} ${et(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>u(s+n)}>+</button>
          </div>`:l}
      ${p.length>1?r`<div class="fp3d-rp-chips">
            ${p.map(c=>r`<button
                class="fp3d-chip"
                aria-pressed=${t.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:i,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:l}
    </div>`}stateOf(t,e=At(this.hass,t)){if(this.room?.no_state?.includes(t.entity_id))return"";let i=A(t.entity_id);return t.state==="unknown"&&i!=="sensor"&&i!=="binary"?"":e}stateLabel(t){let e=`state_${t}`,i=this.t(e);return i===e?t:i}mediaRow(t){let e=t.attributes,i=t.entity_id,s=I(t)||t.state==="off",n=[e.media_title,e.media_artist].filter(a=>typeof a=="string"&&a).join(" \xB7 ");return r`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.state==="playing"?"fp3d-rp-on":""}">${W("media")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(t,this.stateLabel(t.state))}</span>
      ${n?r`<p class="fp3d-rp-media fp3d-rp-wide">${n}</p>`:l}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${s} @click=${()=>this.call("media_player","media_previous_track",{entity_id:i})}>
          ${Wt(mt.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${I(t)} @click=${()=>this.call("media_player",t.state==="playing"?"media_pause":"media_play",{entity_id:i})}>
          ${Wt(t.state==="playing"?mt.pause:mt.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${s} @click=${()=>this.call("media_player","media_next_track",{entity_id:i})}>
          ${Wt(mt.next)}
        </button>
      </div>
      ${typeof e.volume_level=="number"?r`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(e.volume_level*100))}
              @change=${a=>this.call("media_player","volume_set",{entity_id:i,volume_level:Number(a.target.value)/100})}
          /></label>`:l}
    </div>`}switchRow(t){let e=t.entity_id,i=A(e),s=e.slice(0,e.indexOf(".")),n=i==="lock"?t.state==="unlocked"||t.state==="open":t.state==="on",a=()=>i==="lock"?this.call("lock",n?"lock":"unlock",{entity_id:e}):this.call(s,"toggle",{entity_id:e});return r`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${W(i)}</span>
      ${this.nameButton(e)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
      ${this.toggle(t,n,a)}
    </div>`}cameraTile(t){let e=t.attributes.entity_picture,i=e&&!I(t)?e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}fp3d=${this._tick}`:null,s=this.floor?.placements.some(a=>a.entity_id===t.entity_id),n=r`${i?r`<img src=${i} alt=${this.name(t.entity_id)} loading="lazy" />`:r`<span class="fp3d-rp-note">${At(this.hass,t)}</span>`}
      <span class="fp3d-rp-camera-name">${this.name(t.entity_id)}</span>`;return r`<div class="fp3d-rp-camera-wrap">
      ${this.readOnly?r`<div class="fp3d-rp-camera fp3d-rp-camera-still">${n}</div>`:r`<button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>Ct(this,t.entity_id)}>${n}</button>`}
      ${s&&!this.noLook&&!this.readOnly?r`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:t.entity_id},bubbles:!0,composed:!0}))}
          >
            ${this.t("through_camera")}
          </button>`:l}
    </div>`}sensorRow(t){let e=A(t.entity_id),i=e==="binary"&&t.state==="on";return r`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${W(e)}</span>
      ${this.nameButton(t.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(t)}</span>
    </div>`}fire(t){this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}static styles=[B,z,R`
      :host {
        display: block;
      }
      .fp3d-rp {
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
        .fp3d-rp-small,
        .fp3d-rp-sheet,
        .fp3d-rp-chips .fp3d-chip {
          min-height: 44px;
        }
      }
    `]};C("fp3d-room-panel",Ut);var qt;function gt(){return qt??=import("./home-3d-view3d-EVJAONXF.js").then(()=>{},o=>{throw qt=void 0,o}),qt}function vt(o){return customElements.get("fp3d-view3d")?o?.querySelector("fp3d-view3d")??null:null}var ti=Ae(class extends Ce{constructor(o){if(super(o),o.type!==Te.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let e=o.element.classList;for(let i of this.st)i in t||(e.remove(i),this.st.delete(i));for(let i in t){let s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return te}});var ei=["show","new","sample","rename","duplicate","delete"];function Si(o,t,e){return ei.filter(i=>(i!=="show"||e!=null&&e!==t)&&(i!=="delete"||o.length>1))}function Ii(o,t,e){let i=o.find(s=>s.id===e);return i?{name:i.name,onDisplays:i.id===t}:null}function ii(o,t,e){return o.id===t?`${o.name} \xB7 ${e("home_active_badge")}`:o.name}function Ti(o,t,e,i){let s=Si(o,t,e),n={value:"",label:"",kind:"sep"};return[...o.map(a=>({value:a.id,label:ii(a,t,i),kind:"home"})),n,...s.filter(a=>a!=="delete").map(a=>({value:a,label:i(`home_${a}`),kind:"action"})),...s.includes("delete")?[n,{value:"delete",label:i("home_delete"),kind:"danger"}]:[]]}function Ai(o,t){return o!=null&&o.trim().toLocaleLowerCase()===t.trim().toLocaleLowerCase()}function Ci(o,t,e){let{open:i,cursor:s}=o,n=t.map((d,p)=>d.kind==="sep"?-1:p).filter(d=>d>=0),a=d=>n[Math.max(0,Math.min(n.length-1,n.indexOf(s)+d))]??s;return i?e==="ArrowDown"?{open:i,cursor:a(1)}:e==="ArrowUp"?{open:i,cursor:a(-1)}:e==="Home"?{open:i,cursor:n[0]??s}:e==="End"?{open:i,cursor:n[n.length-1]??s}:e==="Enter"||e===" "?t[s]&&t[s].kind!=="sep"?{open:!1,cursor:s,pick:t[s].value}:{open:!1,cursor:s}:e==="Escape"||e==="Tab"?{open:!1,cursor:s}:null:["ArrowDown","ArrowUp","Enter"," "].includes(e)?{open:!0,cursor:s}:null}var jt=class extends L{static properties={hass:{attribute:!1},home:{attribute:!1},_homes:{state:!0},_active:{state:!0},_open:{state:!0},_cursor:{state:!0}};loaded=!1;blurTimer;constructor(){super(),this.home=null,this._homes=null,this._active=null,this._open=!1,this._cursor=0}t(t,e){return k(this.hass,t,e)}willUpdate(t){this.hass&&(!this.loaded||t.has("home")&&t.get("home")!=null)&&(this.loaded=!0,ae(this.hass).then(e=>this.listed(e),()=>this._homes=null))}listed(t){this._homes=t.homes,this._active=t.active??null}rows(){return this._homes?Ti(this._homes,this._active,this.home,t=>this.t(t)):[]}openMenu(){clearTimeout(this.blurTimer),this._cursor=Math.max(0,this.rows().findIndex(t=>t.value===this.home)),this._open=!0}onKey(t){if(!this._open&&["ArrowDown","ArrowUp","Enter"," "].includes(t.key)){t.preventDefault(),this.openMenu();return}let e=Ci({open:this._open,cursor:this._cursor},this.rows(),t.key);e&&(t.key!=="Tab"&&t.preventDefault(),this._open=e.open,this._cursor=e.cursor,e.pick!==void 0&&this.pick(e.pick))}updated(t){this._open&&t.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}async run(t){try{let e=await t();return this.listed(e),e}catch(e){return await G(this.t("home_failed",{error:String(e?.message??e)}),{ok:this.t("ask_ok")}),null}}open(t){this.dispatchEvent(new CustomEvent("home-open",{detail:{home:t},bubbles:!0,composed:!0}))}async act(t){let e=this._homes?.find(s=>s.id===this.home),i=s=>Tt(this.t("home_name_prompt"),s,{ok:this.t("ask_ok"),cancel:this.t("cancel")});if(t==="new"){let s=await i(this.t("home_new_name")),n=s?await this.run(()=>le(this.hass,s)):null;n&&this.open(n.home.id)}else if(t==="sample"){let s=await this.run(()=>tt(this.hass));s&&this.open(s.home.id)}else if(e)if(t==="show")await this.run(()=>ce(this.hass,e.id))&&this.open(null);else if(t==="rename"){let s=await i(e.name);s&&s!==e.name&&await this.run(()=>de(this.hass,e.id,s))}else if(t==="duplicate"){let s=await i(this.t("home_copy_name",{name:e.name})),n=s?await this.run(()=>he(this.hass,e.id,s)):null;n&&this.open(n.home.id)}else{let s=await Tt(this.t("home_delete_type",{name:e.name}),"",{ok:this.t("delete"),cancel:this.t("cancel"),danger:!0});if(s===null)return;if(!Ai(s,e.name)){await G(this.t("home_delete_mismatch",{name:e.name}),{ok:this.t("ask_ok")});return}await this.run(()=>pe(this.hass,e.id))&&this.open(null)}else return}pick(t){this._open=!1,ei.includes(t)?this.act(t):t&&t===this.home?this.dispatchEvent(new CustomEvent("home-reload",{detail:{home:t},bubbles:!0,composed:!0})):t&&this.open(t===this._active?null:t)}render(){let t=this._homes;if(!t)return l;let e=Ii(t,this._active,this.home),i=t.find(n=>n.id===this.home),s=n=>this.t(n);return r`${e?r`<span class="chip ${e.onDisplays?"live":"off"}" title=${e.onDisplays?this.t("home_active_badge"):this.t("home_not_on_displays")}
            >${e.onDisplays?r`<b class="live" aria-hidden="true"></b>`:l}${e.name}<small>${e.onDisplays?this.t("home_live"):this.t("home_not_on_displays")}</small></span
          >`:l}<span class="menu"
        ><button
          class="pick"
          aria-haspopup="listbox"
          aria-expanded=${this._open}
          aria-label=${this.t("home")}
          title=${this.t("home")}
          @click=${()=>this._open?this._open=!1:this.openMenu()}
          @keydown=${n=>this.onKey(n)}
          @blur=${()=>this.blurTimer=setTimeout(()=>this._open=!1,150)}
        >
          ${i?ii(i,this._active,s):this.t("home")}<span class="caret" aria-hidden="true">▾</span></button
        >${this._open?r`<ul role="listbox" aria-label=${this.t("home")} @mousedown=${n=>n.preventDefault()}>
              ${this.rows().map((n,a)=>n.kind==="sep"?r`<li role="separator" class="sep"></li>`:r`<li
                      role="option"
                      aria-selected=${n.value===this.home}
                      class=${ti({cursor:a===this._cursor,action:n.kind==="action",danger:n.kind==="danger",chosen:n.value===this.home})}
                      @mouseenter=${()=>this._cursor=a}
                      @click=${()=>this.pick(n.value)}
                    >
                      ${n.label}
                    </li>`)}
            </ul>`:l}</span
      >`}static styles=R`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }
    .chip {
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
      padding: 3px 10px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 16em;
      font-weight: 600;
    }
    .chip.off {
      background: rgba(255, 170, 0, 0.18);
      border-color: rgba(255, 170, 0, 0.6);
    }
    .chip small {
      font-weight: 400;
      opacity: 0.85;
    }
    /* the open home is the one on the displays (#160): a steady marker while it is edited */
    .chip.live {
      border-color: rgba(229, 57, 53, 0.7);
    }
    .chip .live {
      align-self: center;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #e53935;
      flex: none;
    }
    .menu {
      position: relative;
      display: inline-block;
      min-width: 0;
    }
    .pick {
      font: inherit;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      padding: 4px 6px;
      max-width: 14em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
    .pick:focus-visible {
      outline: 2px solid var(--fp3d-accent, #03a9f4);
      outline-offset: 1px;
    }
    .caret {
      margin-left: 6px;
      opacity: 0.7;
    }
    ul {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 60;
      min-width: 100%;
      max-width: 22em;
      max-height: 60vh;
      overflow-y: auto;
      margin: 0;
      padding: 4px;
      list-style: none;
      color: var(--primary-text-color, #111);
      background: var(--card-background-color, #fff);
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      border-radius: 10px;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
    }
    li {
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      white-space: nowrap;
    }
    li.cursor {
      background: color-mix(in srgb, var(--fp3d-accent, #03a9f4) 22%, transparent);
    }
    li.chosen {
      font-weight: 600;
    }
    li.danger {
      color: var(--error-color, #db4437);
    }
    li.sep {
      height: 1px;
      padding: 0;
      margin: 4px 6px;
      background: var(--fp3d-line, rgba(127, 127, 127, 0.4));
      cursor: default;
    }
  `};C("fp3d-home-switcher",jt);var Ri=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function si(o){let t=document.createElement("style");t.textContent=Ri;let e=document.createElement("div");e.className="fp3d-loclab",document.body.append(t,e);let i=null,s="",n=!0,a=async(u,c={})=>{let h=o().hass;if(h){try{i=await h.callWS({type:"home_3d/locate/rec",action:u,...c}),s=""}catch(v){s=v.message??String(v)}d()}},d=()=>{let u=o().building,c=i,h=c?.mark?.room??null,v=`<h4 data-a="toggle"><span>\u{1F4E1} Ortung \xB7 Aufnahme (Labor)</span><span>${n?"\u25BE":"\u25B8"}</span></h4>`;if(!n){e.innerHTML=v;return}let y=(c?.devices??[]).map(m=>{let b=m.t?Math.round(Date.now()/1e3-m.t):null;return`<div>\u231A ${M(m.title)}: ${b===null?"<small>noch nicht geh\xF6rt</small>":`${m.rssi} dBm \xB7 ${M(m.scanner??"")} <small>vor ${b} s</small>`}</div>`}).join(""),x=(u?.floors??[]).map(m=>`<div class="fl">${M(m.name)}</div>`+m.rooms.map(b=>`<button data-room="${M(b.id)}" data-name="${M(b.name)}" class="${h===b.id?"on":""}">${M(b.name)}</button>`).join("")).join("");e.innerHTML=`${v}
      <div><button data-a="setup">\u2699 Ortung einrichten</button></div>
      <div>${c?.running?`<button class="rec" data-a="stop">\u25A0 Stopp</button> <small>${Math.floor(c.seconds/60)}:${String(c.seconds%60).padStart(2,"0")} \xB7 ${c.lines} Zeilen</small>`:'<button data-a="start">\u25CF Aufnahme starten</button>'}</div>
      ${s?`<div style="color:#ff8fa3">${M(s)}</div>`:""}
      ${y||(c?"<div><small>Keine iPhone/Watch-Schl\xFCssel (Private BLE Device) in HA \u2013 alles wird trotzdem aufgezeichnet.</small></div>":"")}
      ${c?.mark?`<div style="margin-top:6px">\u23F1 seit <b>${Li(Date.now()/1e3-c.mark.t)}</b> in <b>${M(c.mark.name)}</b> ${Date.now()/1e3-c.mark.t>=120?"\u2713 2 Min. geschafft":""}</div>`:""}
      <div class="fl">Ich bin jetzt in \u2026</div>
      <button data-room="" class="${h?"":"on"}">\u{1F6B6} unterwegs / nirgends</button>
      ${x}`};e.addEventListener("click",u=>{let c=u.target.closest("button,h4");if(!c)return;let h=c.dataset.a;if(h==="toggle")n=!n,d();else if(h==="start")a("start",{note:"lab walk"});else if(h==="stop")a("stop");else if(h==="setup"){let{hass:v,building:y}=o();v&&y&&ft().then(x=>x.openLocateSetup(v,y,()=>o().hass))}else c.dataset.room!==void 0&&a("mark",c.dataset.room?{room:c.dataset.room,name:c.dataset.name}:{room:null})}),a("status");let p=window.setInterval(()=>{a("status")},1e3);return()=>{window.clearInterval(p),e.remove(),t.remove()}}function Li(o){let t=Math.max(0,Math.round(o));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function M(o){return o.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}var Mi=T("home-3d-timetravel",()=>"0d11edd7feab"),U=class{session=null;starting=!1;host;constructor(t){this.host=t}get active(){return this.starting||!!this.session}start(t){this.active||(this.starting=!0,this.host.requestUpdate(),Mi().then(e=>{this.starting&&(this.starting=!1,this.session=e.startTimeTravel({...t,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},e=>{this.starting=!1,console.error("Home 3D: time travel failed to load",e),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(t){return this.session?.hass??t}};function X(o,t,e=new Date){if(!o||o==="off")return!1;if(o==="sun")return t?.states["sun.sun"]?.state==="below_horizon";let i=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!i)return!1;let s=Number(i[1])*60+Number(i[2]),n=Number(i[3])*60+Number(i[4]),a=e.getHours()*60+e.getMinutes();return s<=n?a>=s&&a<n:a>=s||a<n}var Pi=new Set(["0","off","false","no"]);function Kt(o,t,e){let i=new URLSearchParams(o).get("tablet");return i!==null?!Pi.has(i.trim().toLowerCase()):!!t&&!!e?.includes(t)}var Di=120;function ni(o,t){let e=n=>typeof n=="number"&&Number.isFinite(n)&&n>=0,i=new URLSearchParams(o).get("idle"),s=i!==null&&i.trim()!==""?Number(i):null;return e(s)?s:e(t)?t:Di}var _t=class{timer;seconds=0;onIdle;constructor(t){this.onIdle=t}arm(t){this.seconds=t>0?t:0,this.touch()}touch(){clearTimeout(this.timer),this.timer=this.seconds>0?setTimeout(this.onIdle,this.seconds*1e3):void 0}stop(){clearTimeout(this.timer),this.timer=void 0}};var bt=class{past=[];future=[];pool=new Map;chars=0;home=void 0;doc=null;run=null;now;maxSteps;maxChars;constructor(t={}){this.now=t.now??Date.now,this.maxSteps=t.maxSteps??100,this.maxChars=t.maxChars??25e6}get size(){return this.chars}get steps(){return this.past.length}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}adopt(t,e){let i=e===this.home&&t===this.doc;return i||this.clear(),this.home=e,this.doc=t,i}record(t,e,i,s=null){this.adopt(t,i),this.push(t,s),this.track(e)}track(t){this.doc=t}push(t,e=null,i=500){let s=this.now(),n=e!==null&&this.run?.key===e&&s-this.run.at<=i&&this.past.length>0;this.run=e===null?null:{key:e,at:s};for(let a of this.future)this.release(a);this.future=[],!n&&(this.past.push(this.store(t)),this.trim())}undo(t){let e=this.past.pop();return e?(this.run=null,this.future.push(this.store(t)),this.release(e),this.doc=this.load(e)):null}redo(t){let e=this.future.pop();return e?(this.run=null,this.past.push(this.store(t)),this.release(e),this.trim(),this.doc=this.load(e)):null}clear(){this.past=[],this.future=[],this.pool.clear(),this.chars=0,this.run=null}trim(){for(;this.past.length>this.maxSteps||this.chars>this.maxChars&&this.past.length>1;)this.release(this.past.shift())}store(t){let e=[];for(let[i,s]of Object.entries(t))if(i==="floors"&&Array.isArray(s))e.push([i,s.map(n=>this.keep(JSON.stringify(n)))]);else{let n=JSON.stringify(s);n!==void 0&&e.push([i,this.keep(n)])}return e}load(t){let e={};for(let[i,s]of t)e[i]=Array.isArray(s)?s.map(n=>JSON.parse(n)):JSON.parse(s);return e}keep(t){let e=this.pool.get(t);return e?(e.n++,e.s):(this.pool.set(t,{s:t,n:1}),this.chars+=t.length,t)}release(t){for(let[,e]of t)for(let i of Array.isArray(e)?e:[e]){let s=this.pool.get(i);s&&--s.n===0&&(this.pool.delete(i),this.chars-=i.length)}}};var F={solar:3600,batteryCharge:1200,house:2e3},P={soc:72,room:20.5,target:21,tariff:.245,car:78},w=o=>!!o&&o!=="none"&&o.includes("."),Oi=o=>o.slice(0,o.indexOf(".")),Fi=[[/hob|oven|cooker|kettle/,1500],[/wallbox|charger|zappi/,1400],[/washing|washer|dishwasher/,450],[/fridge|freezer|kitchen_tall/,110],[/tv|monitor|screen/,95],[/pc|computer|desk/,120],[/boiler|heat_pump/,90],[/router|network/,15]],ai=o=>Fi.find(([t])=>t.test(o))?.[1]??60,Bi={device_class:"power",unit_of_measurement:"W",state_class:"measurement"},Gt={device_class:"battery",unit_of_measurement:"%"},li={device_class:"temperature",unit_of_measurement:"\xB0C"};function zi(o){let t=o.slice(o.indexOf(".")+1).replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}var Yt=class{out=new Map;lights=0;media=0;put(t,e,i={}){this.out.has(t)||this.out.set(t,{entity_id:t,state:String(e),attributes:{friendly_name:zi(t),...i}})}watts(t,e){this.put(t,Math.round(e),Bi)}main(t,e){let i=e??"";switch(Oi(t)){case"light":{let s=this.lights++%3!==2;this.put(t,s?"on":"off",{supported_color_modes:["color_temp"],...s?{brightness:200,color_mode:"color_temp",color_temp_kelvin:2700}:{}});return}case"climate":case"water_heater":this.put(t,"heat",{hvac_modes:["off","heat"],hvac_action:"heating",current_temperature:P.room,temperature:P.target,min_temp:5,max_temp:30});return;case"media_player":{let s=/tv/.test(i),n=s||this.media++===0;this.put(t,n?"playing":"idle",{device_class:s?"tv":"speaker",...n?{media_title:"Demo",volume_level:.3}:{}});return}case"switch":case"input_boolean":case"fan":this.put(t,"on");return;case"binary_sensor":this.put(t,"off",/smoke/.test(i)?{device_class:"smoke"}:/water|leak/.test(i)?{device_class:"moisture"}:{});return;case"cover":this.put(t,"open",{current_position:100});return;case"lock":this.put(t,"locked");return;case"camera":this.put(t,"idle");return;case"vacuum":this.put(t,"docked");return;case"sensor":this.sensor(t,i);return}}sensor(t,e){/power|_w$/.test(t)?this.watts(t,ai(e||t)):/temp/.test(t)||e&&me(e)?this.put(t,P.room,li):/humid/.test(t)?this.put(t,50,{device_class:"humidity",unit_of_measurement:"%"}):/battery|soc|level/.test(t)||/car|leaf|vehicle/.test(e)?this.put(t,P.car,Gt):this.put(t,"ok")}energy(t,e,i){let s=K(t.type);s==="meter"?w(t.export)?(this.watts(t.export,Math.max(0,-e.grid)),w(t.power)&&this.watts(t.power,Math.max(0,e.grid))):w(t.power)&&this.watts(t.power,i.energy.grid_invert?-e.grid:e.grid):s==="inverter"||s==="solar"?w(t.power)&&this.watts(t.power,e.solar):s==="home_battery"&&(w(t.charge)?(this.watts(t.charge,-e.battery),w(t.power)&&this.watts(t.power,0)):w(t.power)&&this.watts(t.power,i.energy.battery_invert?-e.battery:e.battery))}},oi=new WeakMap;function Vi(o){let t=oi.get(o);if(t)return t;let e=new Yt,i=o.energy,s=o.floors.flatMap(h=>h.furniture),a=w(i.battery)||s.some(h=>K(h.type)==="home_battery"&&(w(h.power)||w(h.charge)))?-F.batteryCharge:0,d=F.house-F.solar-a;w(i.grid)&&e.watts(i.grid,i.grid_invert?-d:d),w(i.solar)&&e.watts(i.solar,F.solar),w(i.battery)&&e.watts(i.battery,i.battery_invert?-a:a),w(i.battery_soc)&&e.put(i.battery_soc,P.soc,Gt),w(i.consumption)&&e.watts(i.consumption,F.house),w(i.tariff)&&e.put(i.tariff,P.tariff,{unit_of_measurement:"GBP/kWh"});let p=s.filter(h=>(K(h.type)==="inverter"||K(h.type)==="solar")&&w(h.power)).length;for(let h of s)e.energy(h,{grid:d,battery:a,solar:F.solar/Math.max(1,p)},o);let u=(o.settings.roof?.solar??[]).filter(h=>w(h.entity)),c=u.reduce((h,v)=>h+Rt(v),0)||1;for(let h of u)e.watts(h.entity,F.solar*Rt(h)/c);for(let h of s){w(h.entity)&&e.main(h.entity,h.type),w(h.power)&&e.watts(h.power,ai(h.type));for(let v of[h.state_entity,h.state_entity2,h.extra])w(v)&&e.main(v,h.type);w(h.heat_sensor)&&e.put(h.heat_sensor,"on",{device_class:"heat"}),w(h.soc)&&e.put(h.soc,P.soc,Gt),w(h.room_sensor)&&e.put(h.room_sensor,P.room,li)}for(let h of o.floors)for(let v of h.placements)w(v.entity_id)&&e.main(v.entity_id,null);return oi.set(o,e.out),e.out}var ri=new WeakMap,Jt=new WeakMap;function Ni(o,t){let e=Jt.get(o);return!!e&&o.states[t]===e.get(t)}function wt(o){return!!o&&Jt.has(o)}function $t(o,t){if(!t?.settings?.demo)return o;let e=ri.get(o);if(e?.building===t)return e.out;let i=Vi(t),s=o.states;for(let[a,d]of i){let p=o.states[a];p&&p.state!=="unavailable"&&p.state!=="unknown"||(s===o.states&&(s={...o.states}),s[a]=d)}let n=o;return s!==o.states&&(n={...o,states:s},n.callService=(a,d,p)=>Wi(n,p)?Promise.resolve(void 0):o.callService(a,d,p),Jt.set(n,i)),ri.set(o,{building:t,out:n}),n}function Wi(o,t){let e=t?.entity_id,i=typeof e=="string"?[e]:Array.isArray(e)?e.filter(s=>typeof s=="string"):[];return i.length>0&&i.every(s=>Ni(o,s))}var Ui="fp3d-announce",qi="position:fixed;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0;",q=globalThis.__fp3dAnnounce??={region:null,timer:null};function ji(o){let t=o.fullscreenElement??null;for(;t?.shadowRoot?.fullscreenElement;)t=t.shadowRoot.fullscreenElement;return t??o.body}function yt(o,t=typeof document>"u"?void 0:document){if(!t||!o)return;let e=ji(t);if(!e)return;let i=q.region;i||(i=t.createElement("div"),i.id=Ui,i.setAttribute("role","status"),i.setAttribute("aria-live","polite"),i.setAttribute("aria-atomic","true"),i.setAttribute("style",qi),q.region=i),i.parentNode!==e&&e.appendChild(i),i.textContent="",q.timer&&clearTimeout(q.timer),q.timer=setTimeout(()=>{q.timer=null,i.textContent=o},60)}function di(o,t){return o?o.home!==t.home?"home":o.floor!==t.floor?"floor":null:null}function hi(o,t,e){let i=[e("announce_look",{look:e(`theme_${t}`)})];return o!==t&&o==="theme"&&i.push(e("announce_follow_ha_off")),o!==t&&o==="auto"&&i.push(e("announce_follow_sun_off")),i.join(". ")}var Ki={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"};function pi(o){let t=/^#settings(?:\/([a-z_]+))?(?:\/([^/?#]+))?\/?$/.exec(o);return t?{section:t[1]??null,id:t[2]?decodeURIComponent(t[2]):null}:null}var Gi=["pointerdown","keydown","wheel"],g={get(o){try{return localStorage.getItem(`home3d.${o}`)}catch{return null}},set(o,t){try{localStorage.setItem(`home3d.${o}`,t)}catch{}}},Qt=class extends L{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_editorError:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_plan2d:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0},_tablet:{state:!0},_settingsReady:{state:!0},_settingsError:{state:!0},_settingsAt:{state:!0}};rawHass;hassWatch=new ht({entityLists:!1});shownHass;get hass(){let t=this.rawHass;return t&&this.hassWatch.recording?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}lastView=null;data=new N(this);undoHistory=new bt;locateLab=null;tt=new U(this);ttLinked=!1;idle=new _t(()=>this.returnHome());onTouch=()=>this.idle.touch();idleSeconds=0;touchesHeard=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._editorError=null,this._floorId=null,this._roomId=null,this.readPrefs(),this._furnish=!1,this._selFurniture=null,this._selDevice=null,this._cameraWall=!1,this._optsOpen=!1,this._pinHover=!1,this._micProbe=!1,this._tablet=!1,this._settingsReady=!!customElements.get("fp3d-settings-page"),this._settingsError=null;let t=pi(location.hash);this._settingsAt=t??{section:null,id:null},t&&(this._mode="settings")}readPrefs(){this._wallMode=g.get("walls")==="cut"?"cut":"auto",this._explode=g.get("explode")!=="0";let t=new URLSearchParams(location.search).get("view");this._plan2d=t==="2d"||t!=="3d"&&g.get("plan2d")==="1",this._keepRoof=g.get("roof")==="1";let e=g.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=g.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let i=g.get("markers");this._markers=i==="none"||i==="all"||i==="room"?i:"important";let s=g.get("pinSize");this._pinSize=s==="small"||s==="large"?s:"normal";let n=g.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"||n==="values"?n:"none",this._theme=D(g.get("theme"));let a=g.get("clock");this._clock=a==="tl"||a==="tr"||a==="bl"||a==="br"?a:"off";let d=g.get("accent");this._accent=d&&/^#[0-9a-f]{6}$/i.test(d)?d:null;let p=g.get("floor_stack");this._floorStack=p==="stacked"||p==="single"?p:"dim",this._roomNames=g.get("room_names")!=="0",this._controlsRight=g.get("controls")==="right",this._keepView=g.get("keep_view")==="1",this._angleLock=g.get("angle_lock")==="1",this._trail=g.get("trail")==="1",this._clean=g.get("clean")==="1",this._navWrap=g.get("nav_wrap")==="1",this._weather=g.get("weather")!=="0",this._director=Ot(),this._voiceHere=Mt(),this._screen=Pt()}t(t,e){return k(this.hass,t,e)}shouldUpdate(t){let e=t.get("hass"),i=this.rawHass;if(t.size!==1||!t.has("hass")||!e||!i||this.tt.active||this.hassWatch.matters(e,i))return!0;this.takeHass(i);let s=this.shownHass,n=s&&this.viewHass(i,this.data.building);return s&&n&&wt(s)!==wt(n)?!0:(ct(this.renderRoot,pt["panel.ts"],[[e,i],[s,n]]),this.shownHass=n,!1)}update(t){this.hassWatch.begin();try{super.update(t)}finally{this.hassWatch.end()}}takeHass(t){this.homeRestored||this.restoreHome(),this.data.setHass(t),this.tt.session?.setLive(t)}viewHass(t,e){return $t(this.tt.hass(t),e)}willUpdate(t){t.has("hass")&&this.rawHass&&this.takeHass(this.rawHass),t.has("hass")&&this.hass&&!V(this.hass.language)&&rt(this.hass.language,this.hass).then(()=>this.requestUpdate());let e=this.data.building;this.followTablet(e),e&&!this.data.canEdit&&this.data.home!==void 0&&this.openHome(void 0),e!==this.seenBuilding&&this.dropStaleSelection(e)}homeRestored=!1;get homeKey(){return`home.${this.hass?.user?.id??""}`}restoreHome(){this.homeRestored=!0;let t=g.get(this.homeKey);!t||Kt(location.search,this.hass?.user?.id,void 0)||(this.data.onHomeGone=()=>g.set(this.homeKey,""),this.data.openRemembered(t))}openHome(t){g.set(this.homeKey,t??""),this.data.setHome(t)}seenBuilding=null;seenHome=null;dropStaleSelection(t){if(this.seenBuilding=t,!t)return;let e=this.data.homeId;this.seenHome!==null&&e!==this.seenHome&&(this._floorId=null,this._roomId=null,this._selFurniture=null,this._selDevice=null),this.seenHome=e,this._floorId&&!t.floors.some(i=>i.id===this._floorId)&&(this._floorId=null,this._roomId=null),this._roomId&&!t.floors.some(i=>H(i).some(s=>s.id===this._roomId))&&(this._roomId=null),this._selFurniture&&!t.floors.some(i=>i.furniture.some(s=>s.id===this._selFurniture))&&(this._selFurniture=null)}followTablet(t){let e=location.search,i=Kt(e,this.hass?.user?.id,t?.settings.tablet_users);i&&this._mode!=="view"&&this.setMode("view"),i&&this.data.home!==void 0&&this.data.setHome(void 0),i!==this._tablet&&(this._tablet=i,this._optsOpen=!1);let s=i?ni(e,t?.settings.tablet_idle):0;(s!==this.idleSeconds||i!==this.touchesHeard)&&(this.listenTouches(i),this.idleSeconds=s,this.idle.arm(s))}listenTouches(t){if(t!==this.touchesHeard){this.touchesHeard=t;for(let e of Gi)t?window.addEventListener(e,this.onTouch,{capture:!0,passive:!0}):window.removeEventListener(e,this.onTouch,{capture:!0});t||(this.idle.stop(),this.idleSeconds=0)}}returnHome(){this.tt.stop(),this._roomId=null,this._floorId=null,this._showOpen=!1,this._optsOpen=!1,this._cameraWall=!1,this.view3d()?.resetView()}get canEdit(){return this.data.canEdit}async loadSample(){try{let t=await tt(this.hass);this.openHome(t.home.id)}catch(t){await G(this.t("home_failed",{error:String(t?.message??t)}),{ok:this.t("ask_ok")})}}setMode(t){t===this._mode||this._tablet&&t!=="view"||(this._mode==="view"&&(this.lastView=this.view3d()?.currentView()??this.lastView),this.tt.stop(),this._editorError=null,this._optsOpen=!1,this._showOpen=!1,t==="view"&&this.data.flush(),this._mode==="settings"&&t!=="settings"&&this.setAddress(""),t==="settings"&&this.setAddress(this.settingsLink(this._settingsAt.section,this._settingsAt.id)),this._mode=t)}settingsLink(t,e){return`#settings${t?`/${t}${e?`/${encodeURIComponent(e)}`:""}`:""}`}setAddress(t){try{location.hash!==t&&history.replaceState(history.state,"",`${location.pathname}${location.search}${t}`)}catch{}}openSettings(t=null,e=null){this._tablet||(this._settingsAt={section:t,id:e},this._mode==="settings"?this.setAddress(this.settingsLink(t,e)):this.setMode("settings"))}onOpenSettings=t=>{let e=t.detail??{};t.stopPropagation(),t.preventDefault(),this.openSettings(e.section??null,e.id??null)};onHash=()=>{let t=pi(location.hash);t&&this.openSettings(t.section,t.id)};settingsAction(t){let{action:e}=t.detail;if(e==="extensions")this.setMode("extensions");else if(e==="editor")this.setMode("editor");else if(e==="mic_probe")Lt().then(()=>this._micProbe=!0).catch(()=>{});else if(e==="locate"&&this.hass&&this.data.building){let i=this.data.building;ft().then(s=>s.openLocateSetup(this.hass,i,()=>this.hass,n=>{let a=this.data.building;a&&this.editPlan({...a,settings:{...a.settings,person_look:n==="figure"?null:n}})}))}}onPlanChange(t){t.preventDefault(),this.data.update(t.detail.change)}onRoomTap(t){let{floorId:e,roomId:i}=t.detail;if((this.data.building?.floors.length??0)>1&&e&&this._floorId!==e){this._floorId=e,this._roomId=null;return}i&&(this._roomId=i===this._roomId?null:i)}setWallMode(t){this._wallMode=t,g.set("walls",t)}setKeepRoof(t){this._keepRoof=t,g.set("roof",t?"1":"0")}setPlan2d(t){this._plan2d=t,g.set("plan2d",t?"1":"0")}setExplode(t){this._explode=t,g.set("explode",t?"1":"0")}setQuality(t){this._quality=t,g.set("quality",t),this.picked()}setLook(t){yt(hi(this._theme,t,(e,i)=>this.t(e,i))),this._theme=t,g.set("theme",t),this.picked()}picked(){ie(window.innerWidth)&&(this._optsOpen=!1)}editPlan(t,e=null){let i=this.data.building;i&&this.undoHistory.record(i,t,this.data.homeId,e),this.data.edit(t)}editFurniture(t,e,i=null){let s=this.data.building;if(!s)return;let n=structuredClone(s);for(let a of n.floors){let d=a.furniture.find(p=>p.id===t);d&&e(d,a)}this.editPlan(n,i)}editDevice(t,e,i=null){let s=this.data.building;if(!s)return;let n=structuredClone(s);for(let a of n.floors){let d=a.placements.find(p=>p.entity_id===t);d&&e(d,a)}this.editPlan(n,i)}moveDevice(t){let{id:e,x:i,z:s}=t.detail;this.editDevice(e,(n,a)=>{let[d,p]=Dt(a,n.x,n.z,i,s);Object.assign(n,{x:d,z:p})},`move:${e}`)}turnStep(){return A(this._selDevice??"")==="camera"?15:45}turnDevice(t){this._selDevice&&this.editDevice(this._selDevice,e=>e.rotation=(((e.rotation??0)+t)%360+360)%360)}deleteDevice(){let t=this._selDevice,e=this.data.building;if(!t||!e)return;let i=structuredClone(e);for(let s of i.floors)s.placements=s.placements.filter(n=>n.entity_id!==t);this.editPlan(i),this._selDevice=null}renderDeviceFields(t){let i=this.data.building?.floors.find(m=>m.placements.some(b=>b.entity_id===t)),s=i?.placements.find(m=>m.entity_id===t);if(!i||!s)return l;let n=A(t),a=n==="light",d=n==="camera",p=s.mount==="ceiling",u=n?ke(n,i.height,a||d?s.mount??(d?"wall":"ceiling"):null):1,c=ut(this.hass,this.data.building?.settings.units),h=c==="imperial",v=m=>h?Ft(m):String(Math.round(m*100)/100),y=m=>h?Bt(m,"imperial"):parseFloat(m.replace(",",".")),x=(m,b,$,S,_,f,E=!1)=>r`<label class="fp3d-size" title=${E?J(m,c):m}
        >${E?J(m,c):m}
        <input
          type=${E&&h?"text":"number"}
          inputmode="decimal"
          step=${$}
          min=${S}
          max=${_}
          .value=${E?v(b):String(Math.round(b*100)/100)}
          @change=${Zt=>{let xt=E?y(Zt.target.value):parseFloat(Zt.target.value.replace(",","."));xt!==null&&Number.isFinite(xt)&&f(Math.min(_,Math.max(S,xt)))}}
        />
      </label>`;return r`${a?r`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${m=>this.editDevice(t,b=>Object.assign(b,{mount:m.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(m=>r`<option value=${m} ?selected=${m===(s.mount??"ceiling")}>${this.t(`lamp_${m}`)}</option>`)}
          </select>`:l}
      ${d?r`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${m=>this.editDevice(t,b=>Object.assign(b,{mount:m.target.value,y:null}))}>
              <option value="wall" ?selected=${!p}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${p}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${x(this.t("camera_fov_short"),s.fov??(p?360:90),5,10,360,m=>this.editDevice(t,b=>b.fov=m))}
            ${x(this.t("camera_reach_short"),s.reach??(p?3:4.5),.5,.5,50,m=>this.editDevice(t,b=>b.reach=m),!0)}
            ${x(this.t("camera_tilt_short"),s.tilt??(p?65:20),5,0,90,m=>this.editDevice(t,b=>b.tilt=m))}`:l}
      <label class="fp3d-size" title=${J(this.t("marker_height"),c)}
        >${this.t("size_short_h")}
        <input
          type=${h?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${v(s.y??u)}
          @change=${m=>{let b=y(m.target.value);b!==null&&Number.isFinite(b)&&b>=0&&this.editDevice(t,$=>$.y=Math.round(b*1e3)/1e3)}}
        />
      </label>
      ${s.y!==null?r`<button class="fp3d-chip" @click=${()=>this.editDevice(t,m=>m.y=null)}>${this.t("height_auto")}</button>`:l}`}furnitureName(t){let e=this.data.building?.floors.flatMap(i=>i.furniture).find(i=>i.id===t);return e?ze(this.hass,e.type):""}moveFurniture(t){let{id:e,x:i,z:s}=t.detail,n=this.data.building?.settings.wall_interior??.12;this.editFurniture(e,(a,d)=>{let[p,u]=Dt(d,a.x,a.z,i,s);Object.assign(a,{x:p,z:u});let c=We(d,a,n);c&&Object.assign(a,c)},`move:${e}`)}renderSizeFields(t){let e=this.data.building?.floors.flatMap(p=>p.furniture).find(p=>p.id===t);if(!e)return l;let i=ut(this.hass,this.data.building?.settings.units)==="imperial",s=p=>i?Ft(p):String(Math.round(p*100)/100),n=p=>i?Bt(p,"imperial"):parseFloat(p.replace(",",".")),a=(p,u)=>r`<label class="fp3d-size" title=${this.t(`size_${p}`)}
      >${u}
      <input
        type=${i?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${s(e[p])}
        @change=${c=>{let h=n(c.target.value)??NaN;Number.isFinite(h)&&h>0&&this.editFurniture(t,v=>v[p]=Math.round(h*1e3)/1e3)}}
    /></label>`,d=this.data.building?.floors.find(p=>p.furniture.some(u=>u.id===t));return r`${a("w",this.t("size_short_w"))}${a("d",this.t("size_short_d"))}${a("h",this.t("size_short_h"))}
    ${d&&ve(e)?r`<label class="fp3d-size" title=${J(this.t("mount_height"),ut(this.hass,this.data.building?.settings.units))}
            >↕
            <input
              type=${i?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${s(e.mount_y??ge(d,e))}
              @change=${p=>{let u=n(p.target.value)??NaN;Number.isFinite(u)&&u>=0&&this.editFurniture(t,c=>c.mount_y=Math.round(u*1e3)/1e3)}}
          /></label>
          ${e.mount_y!=null?r`<button class="fp3d-chip" @click=${()=>this.editFurniture(t,p=>p.mount_y=null)}>${this.t("height_auto")}</button>`:l}`:l}`}turnFurniture(t){this._selFurniture&&this.editFurniture(this._selFurniture,e=>e.rotation=((e.rotation+t)%360+360)%360)}deleteFurniture(){let t=this._selFurniture,e=this.data.building;if(!t||!e)return;let i=structuredClone(e);for(let s of i.floors)s.furniture=s.furniture.filter(n=>n.id!==t);this.editPlan(i),this._selFurniture=null}rememberStartView(t=!1){let e=this.data.building;if(!e)return;let i=t?null:this.view3d()?.currentView();!t&&!i||this.editPlan({...e,settings:{...e.settings,start_view:i??null}})}view3d(){return vt(this.renderRoot)}renderFollow(t,e){let i=this._theme===t,s=this.t(`theme_${O(t,this.hass)}`);return r`<button
      class="fp3d-chip fp3d-follow"
      role="switch"
      aria-checked=${i}
      @click=${()=>{this._theme=Be(this._theme,t,!i,this.hass),g.set("theme",this._theme)}}
    >
      <span class="fp3d-follow-box" aria-hidden="true">${i?"\u2713":""}</span>${this.t(e)}
      <small>${this.t("follow_now",{look:s})}</small>
    </button>`}toggleTimeTravel(t=null){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),i=this.data.building;!e||!i||!this.hass||(this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:i,spec:e.historyEntities(),quality:this._quality,at:t,t:(s,n)=>k(this.hass,s,n)}))}announcedView=null;announceView(){let t=this.data.building;if(!t)return;let e={home:this.data.homeId,floor:this._floorId},i=di(this.announcedView,e);this.announcedView=e,i==="home"?yt(this.t("announce_home",{name:this.data.homeName??"Home 3D"})):i==="floor"&&yt(e.floor?this.t("announce_floor",{name:t.floors.find(s=>s.id===e.floor)?.name??""}):this.t("all_floors"))}updated(){this.announceView();let t=at(this.hass);if(this.getAttribute("lang")!==t&&this.setAttribute("lang",t),this.toggleAttribute("light",this._mode==="view"&&nt(O(this._theme,this.hass))),this.toggleAttribute("contrast",this._mode==="view"&&ot(O(this._theme,this.hass))),!this.locateLab&&this.hass?.user?.is_admin&&this.data.building&&Re()&&(this.locateLab=si(()=>({hass:this.hass,building:this.data.building}))),this.ttLinked||!this.data.building||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&this.toggleTimeTravel(e)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=t=>{t.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),gt().then(()=>this.requestUpdate(),t=>console.error("Home 3D: the 3D view failed to load",t)),window.addEventListener("keydown",this.onKey),window.addEventListener("hashchange",this.onHash),window.addEventListener("location-changed",this.onHash),this.addEventListener("open-settings",this.onOpenSettings)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("hashchange",this.onHash),window.removeEventListener("location-changed",this.onHash),this.removeEventListener("open-settings",this.onOpenSettings),this.listenTouches(!1),this.tt.stop(),this.locateLab?.(),this.locateLab=null}render(){if(this.hass&&!V(this.hass.language))return l;let t=this.data.building,e=this.data.saveState;return r`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this.accentStyle()}>
        ${this._micProbe&&this.hass?r`<fp3d-mic-probe .hass=${this.rawHass} .building=${t} @close=${()=>(this._micProbe=!1,Ne())}></fp3d-mic-probe>`:l}
        ${this._clean&&this._mode==="view"?l:this._tablet?this.renderTabletHeader():r`<header class="fp3d-header">
          <ha-menu-button .hass=${this.rawHass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Home 3D</h1>
          ${this.canEdit&&this.hass?r`<fp3d-home-switcher
                .hass=${this.rawHass}
                .home=${this.data.homeId}
                @home-reload=${()=>{this.data.reopen()}}
                @home-open=${i=>this.openHome(i.detail.home??void 0)}
              ></fp3d-home-switcher>`:l}
          <div class="fp3d-seg" role="group" aria-label=${this.t("modes")}>
            <button aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
            ${this.canEdit?r`<button aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                  <button class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} aria-label=${this.t("ext_tab")} title=${this.t("ext_tab")} @click=${()=>this.setMode("extensions")}>
                    ✦ <span class="fp3d-tab-ext-word">${this.t("ext_tab")}</span>
                  </button>`:l}
            <button class="fp3d-tab-settings" aria-pressed=${this._mode==="settings"} aria-label=${this.t("settings")} title=${this.t("settings")} @click=${()=>this.openSettings()}>
              ⚙ <span class="fp3d-tab-word">${this.t("settings")}</span>
            </button>
          </div>
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&t?.floors.some(i=>i.rooms.length)?r`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙ <span class="fp3d-opts-label">${this.t("view_btn")}</span>
                </button>
                ${this._optsOpen?r`<div class="fp3d-opts-veil" @click=${()=>this._optsOpen=!1}></div>`:l}
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <section class="fp3d-opt-group">
                <h3>${this.t("quality")}</h3>
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(i=>r`<button aria-pressed=${this._quality===i} @click=${()=>this.setQuality(i)}>${this.t(`quality_${i}`)}</button>`)}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("theme")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${Fe.map(i=>r`<button
                      aria-pressed=${this._theme===i}
                      @click=${()=>this.setLook(i)}
                    >
                      ${this.t(`theme_${i}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${i=>{this._accent=i.target.value,g.set("accent",this._accent)}}
                  />
                  ${this._accent?r`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,g.set("accent","")}}
                      >
                        ↺
                      </button>`:l}
                </label>
              </div>
              ${this.renderFollow("theme","follow_ha")}
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("view_group_lighting")}</h3>
              ${this.renderFollow("auto","follow_sun")}
              <button class="fp3d-chip fp3d-opt-more" @click=${()=>{this._optsOpen=!1,this.view3d()?.openSettings()}}>${this.t("sun_and_lights")}</button>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("clock")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(i=>r`<button aria-pressed=${this._clock===i} title=${this.t(`clock_${i}`)} aria-label=${this.t(`clock_${i}`)} @click=${()=>{this._clock=i,g.set("clock",i),this.picked()}}>
                      ${i==="off"?this.t("clock_off"):Ki[i]}
                    </button>`)}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("markers")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(i=>r`<button
                      aria-pressed=${this._markers===i}
                      title=${this.t("markers")}
                      aria-label=${`${this.t("markers")}: ${this.t(`markers_${i}`)}`}
                      @click=${()=>{this._markers=i,g.set("markers",i),this.picked()}}
                    >
                      ${this.t(`markers_${i}`)}
                    </button>`)}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("view_group_size")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(i=>r`<button
                      aria-pressed=${this._pinSize===i}
                      @click=${()=>{this._pinSize=i,g.set("pinSize",i),this.picked()}}
                    >
                      ${this.t(`pin_size_${i}`)}
                    </button>`)}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("view_group_controls")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(i=>r`<button
                      aria-pressed=${this._controlsRight===i}
                      title=${this.t(i?"controls_right":"controls_left")}
                      aria-label=${this.t(i?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=i,g.set("controls",i?"right":"left")}}
                    >
                      ${i?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.canEdit?r`<button
                        title=${`${this.t("start_view")}: ${this.t("start_view_set")}`}
                        aria-label=${this.t("start_view_set")}
                        @click=${()=>this.rememberStartView()}
                        @mouseenter=${()=>this._pinHover=!0}
                        @mouseleave=${()=>this._pinHover=!1}
                        @focus=${()=>this._pinHover=!0}
                        @blur=${()=>this._pinHover=!1}
                      >
                        📌
                      </button>
                      ${this.data.building?.settings.start_view?r`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:l}`:l}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,g.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,g.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,g.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </section>
              ${this.renderAllSettings("look")}
              </div>`:l}
          ${this._mode==="editor"&&e!=="idle"?r`<span class="fp3d-save fp3d-save-${e}">${this.t(e==="saving"?"saving":e==="saved"?"saved":"save_error")}</span>`:l}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?this.renderCleanNotice():this.renderNotices()}
        ${this.data.error&&!t?r`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:l}
        ${!t&&!this.data.error?r`<p class="fp3d-message">${this.t("loading")}</p>`:l}
        ${t?this._mode==="editor"&&this.canEdit?this.renderEditor(t):this._mode==="extensions"&&this.canEdit?this.renderExtensions():this._mode==="settings"&&!this._tablet?this.renderSettings(t):this.renderView(t):l}
      </div>
    `}renderTabletHeader(){return r`<header class="fp3d-header fp3d-tablet-head"><h1>${this.data.homeName||"Home 3D"}</h1></header>`}shownAccent(){return dt(this._theme,this._accent,this.hass,t=>getComputedStyle(this).getPropertyValue(t))}accentStyle(){let t=this.shownAccent();return t?`--fp3d-accent:${t};--fp3d-accent-text:${lt(t)}`:""}renderNotices(){let t=this.data,e=[],i=this.renderUpdateNotice();i&&e.push(i),t.needsRestart&&t.versionGap!=="frontend"&&e.push(r`<div class="fp3d-notice fp3d-notice-warn">${t.backendVersion?this.t("needs_restart",{version:t.backendVersion,frontend:t.frontendVersion}):this.t("needs_restart_old")}</div>`);let s=t.planProblem;if(s&&!this._tablet){let n=s.code==="plan_repaired"?this.t("plan_repaired",{parts:(s.dropped??[]).length}):s.code==="plan_too_new"?this.t("plan_too_new"):this.t("plan_invalid",{error:s.message});e.push(r`<div class="fp3d-notice fp3d-notice-${s.code==="plan_repaired"?"warn":"error"}" role="status">${n}</div>`)}if(t.saveState==="error"&&t.saveError&&e.push(r`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:t.saveError})}</div>`),t.draft&&this.canEdit&&!this._tablet){let n=new Date(t.draft.savedAt).toLocaleString(this.hass?.language);e.push(r`<div class="fp3d-notice">
          <span>${t.conflict?this.t("save_conflict"):this.t(t.draft.home?"draft_found":"draft_found_old",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>{t.restoreDraft()}}>${this.t(t.conflict?"draft_restore_conflict":"draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>t.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return e.length?r`<div class="fp3d-notices">${e}</div>`:l}renderCleanNotice(){let t=this.renderUpdateNotice();return t?r`<div class="fp3d-notices">${t}</div>`:l}renderUpdateNotice(){let t=this.data,e=t.updateNotice;if(!e)return null;let i=t.backendVersion!==t.frontendVersion?this.t("needs_reload",{frontend:t.frontendVersion,backend:t.backendVersion??"?"}):this.t("update_ready");return r`<div class="fp3d-notice fp3d-notice-warn fp3d-notice-update" role="status">
      <span>${i}${e==="ready"?l:r` ${this.t(e==="saving"?"update_saving":"update_unsaved")}`}</span>
      <button class="fp3d-btn" ?disabled=${e==="unsaved"} @click=${()=>{t.reloadWhenSaved()}}>${this.t("reload_page")}</button>
    </div>`}editorPending(){return this._editorReady?null:this._editorError?r`<div class="fp3d-empty"><p>${this.t("load_error")}: ${this._editorError}</p></div>`:(Nt().then(()=>this._editorReady=!0,t=>this._editorError=String(t)),r`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderExtensions(){this.data.loadLibrary();let t=this.editorPending();return t||r`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.rawHass}
      .canEdit=${this.data.canEdit}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.editPlan(e.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`}renderAllSettings(t,e=null){return r`<button class="fp3d-chip fp3d-all-settings" @click=${()=>this.openSettings(t,e)}>⚙ ${this.t("all_settings")} ›</button>`}renderSettings(t){return this._settingsReady?r`<fp3d-settings-page
      class="fp3d-body"
      .hass=${this.rawHass}
      .building=${t}
      .canEdit=${this.data.canEdit}
      .packs=${this.data.packs}
      .t=${this.translator}
      .section=${this._settingsAt.section}
      .focusId=${this._settingsAt.id}
      .saveState=${this.data.saveState}
      .homeName=${this.data.homeName??""}
      .lastView=${this.lastView}
      .loadEditor=${Nt}
      @settings-edit=${e=>this.editPlan(e.detail.building,e.detail.key)}
      @device-change=${()=>this.readPrefs()}
      @settings-action=${this.settingsAction}
      @settings-nav=${e=>this.setAddress(this.settingsLink(e.detail.section,e.detail.id))}
    ></fp3d-settings-page>`:this._settingsError?r`<div class="fp3d-empty"><p>${this.t("load_error")}: ${this._settingsError}</p></div>`:(Ze().then(()=>this._settingsReady=!0,e=>this._settingsError=String(e)),r`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}translator=(t,e)=>k(this.hass,t,e);renderEditor(t){this.data.loadLibrary();let e=this.editorPending();return e||r`<fp3d-editor
      class="fp3d-body"
      .hass=${this.rawHass}
      .canEdit=${this.data.canEdit}
      .home=${this.data.homeId}
      .homeName=${this.data.homeName}
      .history=${this.undoHistory}
      .building=${t}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=Ot()}
      @voice-here=${()=>{this._voiceHere=Mt(),this._screen=Pt()}}
      @mic-probe=${()=>Lt().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @load-sample=${()=>{this.loadSample()}}
      @building-changed=${i=>this.data.edit(i.detail.building)}
    ></fp3d-editor>`}onNavWheel=t=>{if(this._navWrap||!t.deltaY||t.deltaX)return;let e=t.currentTarget;e.scrollWidth<=e.clientWidth||(e.scrollLeft+=t.deltaY,t.preventDefault())};renderView(t){if(!t.floors.length||!t.floors.some(d=>d.rooms.length))return r`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?r`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <button class="fp3d-btn" @click=${()=>{this.loadSample()}}>${this.t("home_sample")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:l}
      </div>`;let e=t.floors.find(d=>d.id===this._floorId),i=e?[e]:t.floors,s=this.tt.active,n=this.viewHass(this.rawHass,t);this.shownHass=n;let a=r`<div class="fp3d-seg" role="group" aria-label=${this.t("plan_view")}>
      <button aria-pressed=${!this._plan2d} @click=${()=>this.setPlan2d(!1)}>${this.t("view_3d")}</button>
      <button aria-pressed=${this._plan2d} @click=${()=>this.setPlan2d(!0)}>${this.t("view_2d")}</button>
    </div>`;return r`
      ${this._clean||this._tablet&&t.floors.length<2?l:r`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${t.floors.length>1?r`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...t.floors].reverse().map(d=>r`<button
                  class="fp3d-chip"
                  aria-pressed=${d.id===this._floorId}
                  @click=${()=>{this._floorId=d.id,this._roomId=null}}
                >
                  ${d.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:l}
        ${(this._tablet?[]:i).flatMap(d=>[i.length>1&&H(d).some(p=>p.name.trim())?r`<span class="fp3d-nav-floor">${d.name}</span>`:l,...H(d).filter((p,u,c)=>p.name.trim()&&!(p.outdoor&&c.findIndex(h=>h.outdoor&&h.area_id===p.area_id&&h.name===p.name)<u)).map(p=>r`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${p.id===this._roomId}
              @click=${()=>{t.floors.length>1&&(this._floorId=d.id),this._roomId=p.id===this._roomId?null:p.id}}
            >
              ${p.name}
            </button>`)])}
        ${this._tablet?l:r`<button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,g.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>`}
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${s?"fp3d-tt":""}">
        <fp3d-view3d
          class="fp3d-body"
          .canEdit=${this.data.canEdit&&!this._tablet}
          .noSettings=${this._tablet}
          .home=${this.data.homeId}
          .pivotMark=${this._pinHover}
          .hass=${n}
          .replay=${this.tt.session?.replay??null}
          .building=${t}
          .packs=${this.data.packs}
          .plan2d=${this._plan2d}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          .angleLock=${this._angleLock}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!s}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,g.set("clean",this._clean?"1":"0")}}
          .weather=${this._weather}
          .director=${this._director}
          .voice=${this._voiceHere}
          .screen=${this._screen||null}
          .panelOpen=${!!this._roomId}
          .floorId=${t.floors.length>1?this._floorId:t.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .pinSize=${this._pinSize}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .clock=${this._clock}
          .accent=${this.shownAccent()}
          ?furnish=${this._furnish&&!s}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${d=>this._selFurniture=d.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${d=>this._selDevice=d.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${d=>{this._floorId=d.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
          @plan-change=${this.onPlanChange}
        ></fp3d-view3d>
        ${this._roomId?r`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${d=>this.view3d()?.lookThrough(d.detail.entity)}
              .hass=${n}
              ?readOnly=${s}
              ?noLook=${this._plan2d}
              .room=${t.floors.flatMap(d=>H(d)).find(d=>d.id===this._roomId)??null}
              .floor=${t.floors.find(d=>H(d).some(p=>p.id===this._roomId))??null}
              .building=${t}
              .confirmEntities=${st(this.hass,t.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${d=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,d.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:l}
        ${this.tt.session?r`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:l}
        ${wt(n)?r`<div class="fp3d-demo-chip" title=${this.t("demo_hint")}>${this.t("demo_chip")}</div>`:l}
        ${this._clean?l:r`<div class="fp3d-overlay">
          ${this._tablet?l:a}
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t(this._tablet?"view":"show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?r`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          ${this._tablet?a:l}
          ${this._plan2d?l:r`<div class="fp3d-seg">
                <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
                <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
              </div>`}
          ${t.floors.length>1&&!this._plan2d?r`<div class="fp3d-seg" role="group" aria-label=${this.t("floors_apart")} title=${this._floorId?this.t("pick_all_floors"):l}>
                <button aria-pressed=${this._explode} ?disabled=${!!this._floorId} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} ?disabled=${!!this._floorId} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:l}
          ${!this._plan2d&&t.settings.roof.type!=="none"?r`<div class="fp3d-seg" title=${this._floorId?this.t("pick_all_floors"):l}>
                <button aria-pressed=${this._keepRoof} ?disabled=${!!this._floorId} title=${this._floorId?this.t("pick_all_floors"):this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:l}
          ${this._floorId&&!this._plan2d&&(t.floors.length>1||t.settings.roof.type!=="none")?r`<small class="fp3d-show-hint">${this.t("pick_all_floors")}</small>`:l}
          ${t.floors.length>1&&this._floorId&&!this._plan2d?r`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(d=>r`<button
                      aria-pressed=${this._floorStack===d}
                      @click=${()=>{this._floorStack=d,g.set("floor_stack",d)}}
                    >
                      ${this.t(`floor_stack_short_${d}`)}
                    </button>`)}
              </div>`:l}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(d=>r`<button
                  aria-pressed=${this._heat===d}
                  @click=${()=>{this._heat=d,g.set("heat",d)}}
                >
                  ${this.t(d==="none"?"heat_off":`heat_short_${d}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,g.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,g.set("trail",this._trail?"1":"0")}}
          >
            ${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,g.set("weather",this._weather?"1":"0")}}
          >
            ${this.t("weather_short")}
          </button>
          ${this._tablet?l:this.renderAllSettings("look","walls")}
                  </div>`:l}
          </div>
          ${this._tablet?l:r`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${s} title=${this.t("tt_hint")} aria-label=${this.t("tt_chip")} @click=${()=>this.toggleTimeTravel()}>
            ⏪ <span class="fp3d-tt-label">${this.t("tt_chip")}</span>
          </button>`}
          ${this._roomId||this._floorId&&t.floors.length>1?r`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:l}
        </div>`}
        ${this._furnish?r`<div class="fp3d-furnish-bar">
              ${this._selFurniture?r`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,d=>d.mirror=!d.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?r`<span>${it(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:r`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:l}
      </div>
    `}static styles=[B,z,R`
      .fp3d-all-settings {
        justify-self: start;
        align-self: flex-start;
        color: var(--fp3d-accent);
        box-shadow: none;
        background: none;
        padding-left: 4px;
      }
      .fp3d-badge {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1204;
        font-size: 0.78em;
        font-weight: 700;
        line-height: 1.5;
        box-shadow: 0 0 10px rgba(255, 181, 71, 0.7);
        vertical-align: middle;
        white-space: nowrap;
        animation: fp3d-badge-in 1.6s ease-out 2;
      }
      @keyframes fp3d-badge-in {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 181, 71, 0.9);
        }
        100% {
          box-shadow: 0 0 0 10px rgba(255, 181, 71, 0);
        }
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. The parent may pad itself by the
           screen's safe areas (notches; some themes set them on every screen): those are taken off, or the panel is
           taller than the window and its bottom is cut off (#529). */
        height: calc(100vh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        background: var(--fp3d-bg);
      }
      /* dvh only where the browser knows it: a line with var() is not dropped while it is read, so a WebView without
         dvh (Chrome before 108, the Fire 7) lost the height altogether and the 3D view stayed empty (idea: CasaNeon) */
      @supports (height: 100dvh) {
        :host {
          height: calc(100dvh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        }
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      /* the view options (quality, look, symbols, side) fold behind ⚙ on every screen: a tidy header */
      .fp3d-opts-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        order: 3;
        height: 36px;
        padding: 0 12px;
        font: inherit;
        font-weight: 600;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-opts-label {
        font-size: 13.5px;
      }
      .fp3d-opts-btn[aria-expanded="true"] {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
      }
      .fp3d-view-opts {
        display: none;
      }
      .fp3d-view-opts.fp3d-opts-open {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 16px;
        order: 5;
        width: 100%;
        align-items: flex-start;
      }
      /* one labelled group per kind of setting (#87) */
      .fp3d-opt-group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        position: relative;
        padding-top: 16px;
      }
      .fp3d-opt-group h3 {
        position: absolute;
        top: 0;
        left: 4px;
        margin: 0;
        font-size: 10.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-follow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-follow small {
        color: var(--fp3d-muted);
        font-size: 11.5px;
      }
      .fp3d-follow-box {
        display: inline-grid;
        place-items: center;
        width: 16px;
        height: 16px;
        border-radius: 5px;
        border: 1.5px solid var(--fp3d-muted);
        font-size: 11px;
        line-height: 1;
      }
      .fp3d-follow[aria-checked="true"] .fp3d-follow-box {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      /* phones: version and grow move with it; the Settings tab keeps only its gear */
      @media (max-width: 700px) {
        .fp3d-tab-word {
          display: none;
        }
        .fp3d-version {
          order: 4;
        }
        .fp3d-header .fp3d-grow {
          display: none;
        }
      }
      /* narrow phones (#216): a slim header, one row where it fits: no title (the page is named by HA's own bar), no
         version, the Extensions tab as its symbol, tighter gaps */
      @media ${Z(ee)} {
        .fp3d-header {
          gap: 4px;
          padding: 2px 8px 2px 0;
          min-height: 44px;
        }
        .fp3d-header h1,
        .fp3d-header .fp3d-version,
        .fp3d-tab-ext-word {
          display: none;
        }
        .fp3d-header .fp3d-seg button {
          padding-left: 9px;
          padding-right: 9px;
        }
      }
      /* the installed version, at the far right of the header */
      .fp3d-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .fp3d-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .fp3d-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .fp3d-accent-reset {
        border: none;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .fp3d-nav:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .fp3d-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .fp3d-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-left: 6px;
      }
      .fp3d-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-demo-chip {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        padding: 2px 10px;
        border-radius: 999px;
        font-size: 11px;
        letter-spacing: 0.04em;
        color: var(--fp3d-s-text, #e8f4ff);
        background: var(--fp3d-s-chrome, rgba(10, 20, 35, 0.72));
        border: 1px solid var(--fp3d-s-line, rgba(120, 200, 255, 0.35));
        pointer-events: auto;
        cursor: help;
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-clean fp3d-view3d {
        --fp3d-bottom-inset: 0px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* time travel: its bar at the bottom; the switches, the buttons of the view and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt fp3d-view3d {
        --fp3d-bottom-inset: calc(52px + var(--fp3d-tt-h));
      }
      .fp3d-tt .fp3d-overlay {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt .fp3d-room-panel {
        bottom: calc(var(--fp3d-tt-h) + 6px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
        /* the view's own buttons (search, eye) step up above the sheet */
        .fp3d-room-open fp3d-view3d {
          --fp3d-bottom-inset: calc(55% + 8px);
        }
        /* phones: the time bar takes two rows; the switches make way for it */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
        .fp3d-tt .fp3d-overlay {
          display: none;
        }
        .fp3d-tt fp3d-view3d {
          --fp3d-bottom-inset: var(--fp3d-tt-h);
        }
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
      }
      /* an open room panel keeps the switches beside it, not over its last rows */
      .fp3d-room-open .fp3d-overlay {
        right: calc(min(360px, 100% - 28px) + 26px);
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      /* the view's switches in one "Show" menu that opens upwards */
      .fp3d-show-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-show-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-show-hint {
        flex-basis: 100%;
        font-size: 12px;
        opacity: 0.75;
      }
      .fp3d-show-panel {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: min(470px, 92vw);
        padding: 10px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid, #0d1628);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-show-panel > .fp3d-seg {
        flex-wrap: wrap;
      }
      .fp3d-show-panel > .fp3d-chip {
        box-shadow: none;
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-seg-label {
        display: inline-flex;
        align-items: center;
        padding: 0 4px 0 8px;
        opacity: 0.75;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-phone-only {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-only {
          display: block;
        }
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
      .fp3d-opts-veil {
        display: none;
      }
      /* phones (#93): the opened view settings float over the view instead of pushing it down, a tap beside them
         folds them; the bottom bar keeps one row (time travel as its symbol); touch targets 44 px */
      @media ${Z(kt)} {
        .fp3d-header {
          position: relative;
        }
        .fp3d-view-opts.fp3d-opts-open {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 40;
          max-height: 60vh;
          overflow-x: hidden;
          overflow-y: auto;
          box-sizing: border-box;
          padding: 10px 12px 14px;
          background: var(--fp3d-chrome-solid);
          border-bottom: 1px solid var(--fp3d-line);
          box-shadow: var(--fp3d-shadow);
        }
        .fp3d-view-opts .fp3d-seg {
          flex-wrap: wrap;
        }
        .fp3d-opts-veil {
          display: block;
          position: fixed;
          inset: 0;
          z-index: 39;
        }
        .fp3d-opts-btn {
          min-width: 44px;
          height: 44px;
        }
        .fp3d-tt-label {
          display: none;
        }
        .fp3d-quality button {
          min-width: 44px;
        }
        .fp3d-nav .fp3d-nav-toggle {
          min-width: 44px;
        }
        .fp3d-header .fp3d-seg button,
        .fp3d-quality button,
        .fp3d-overlay .fp3d-chip,
        .fp3d-overlay .fp3d-seg button,
        .fp3d-show-panel button,
        .fp3d-nav .fp3d-chip {
          min-height: 44px;
        }
        .fp3d-overlay .fp3d-tt-chip {
          min-width: 44px;
          justify-content: center;
        }
      }
      /* touch screens, a tablet as much as a phone (#181): 44 px, and room for three rows of floor chips */
      @media (pointer: coarse), ${Z(kt)} {
        .fp3d-opts-btn,
        .fp3d-quality button,
        .fp3d-nav .fp3d-nav-toggle {
          min-width: 44px;
        }
        .fp3d-opts-btn {
          height: 44px;
        }
        .fp3d-header .fp3d-seg button,
        .fp3d-quality button,
        .fp3d-overlay .fp3d-chip,
        .fp3d-overlay .fp3d-seg button,
        .fp3d-show-panel button,
        .fp3d-nav .fp3d-chip {
          min-height: 44px;
        }
        .fp3d-nav-wrap {
          max-height: 176px;
        }
      }
    `]};C("home-3d-panel",Qt);function ci(o,t){return t??o?.view==="2d"}var ui=T("home-3d-card-editor",()=>"00c8232945d4");function fi(){try{let o=localStorage.getItem("home3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var Xt=class extends L{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_plan2d:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};rawHass;hassWatch=new ht({entityLists:!1});shownHass;get hass(){let t=this.rawHass;return t&&this.hassWatch.recording?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new N(this);tt=new U(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=fi(),this._heat=null,this._explode=null,this._plan2d=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(t=!1){clearTimeout(this.cleanTimer);let e=this._config?.controls_hide_after??0;e>0&&(t&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,e*1e3))}armIdle(){clearTimeout(this.idleTimer);let t=this._config?.idle_return??0;t>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),t*1e3))}view3d(){return vt(this.shadowRoot)}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),e=this.data.building;if(!t||!e||!this.hass)return;this._cameraWall=!1;let i=this._config;this.tt.start({live:this.hass,building:e,spec:t.historyEntities(),quality:i?.quality??"auto",speed:i?.time_travel_speed??null,range:i?.time_travel_range??null,t:(s,n)=>k(this.hass,s,n)})}onKey=t=>{t.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this._config?.room??null,this._floorId=void 0,this._plan2d=null,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let t=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(t-this._vh)>1&&(this._vh=t),this._config?.fill&&!this._fullscreen){let e=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(e-this._top)>1)&&(this._top=e)}};viewportTimer;connectedCallback(){super.connectedCallback(),gt().then(()=>this.requestUpdate(),t=>console.error("Home 3D: the 3D view failed to load",t)),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),this.viewportTimer=setTimeout(this.onViewport,600),this.armIdle(),this.armClean(),this.nightTimer=setInterval(()=>this._night=X(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.viewportTimer),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let t=this.shadowRoot?.querySelector("ha-card"),e=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};t?.requestFullscreen?t.requestFullscreen().catch(e):e()}static async getConfigElement(){return await ui(),document.createElement("home-3d-card-editor")}static getStubConfig(){return{type:"custom:home-3d-card"}}setWalls(t){this._walls=t;try{localStorage.setItem("home3d.card_walls",t)}catch{}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config&&((this._config.home||void 0)!==(t.home||void 0)||this._config.room!==t.room)&&(this._roomId=null,this.roomApplied=!1),this._config=t,this.data.setHome(t.home||void 0),this._floorId=void 0,this._walls=fi(),this._heat=null,this._explode=null,this._plan2d=null,this._orbit=!1,this._night=X(t.night,this.hass),this._clean=t.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}shouldUpdate(t){let e=t.get("hass"),i=this.rawHass;if(t.size!==1||!t.has("hass")||!e||!i||this.tt.active||this.hassWatch.matters(e,i)||X(this._config?.night,i)!==this._night)return!0;this.takeHass(i);let s=this.shownHass,n=s&&this.viewHass(i,this.data.building);return ct(this.renderRoot,pt["card.ts"],[[e,i],[s,n]]),this.shownHass=n,!1}update(t){this.hassWatch.begin();try{super.update(t)}finally{this.hassWatch.end()}}takeHass(t){this.data.setHass(t),this.tt.session?.setLive(t);let e=X(this._config?.night,t);e!==this._night&&(this._night=e)}viewHass(t,e){return $t(this.tt.hass(t),e)}willUpdate(t){t.has("hass")&&this.rawHass&&(this.takeHass(this.rawHass),V(this.rawHass.language)||rt(this.rawHass.language,this.rawHass).then(()=>this.requestUpdate()));let e=this.data.building;e!==this.seenBuilding&&(this.seenBuilding=e,e&&this._roomId&&!e.floors.some(i=>H(i).some(s=>s.id===this._roomId))&&(this._roomId=null))}seenBuilding=null;updated(){this.toggleAttribute("light",nt(O(D(this._config?.theme),this.hass))),this.toggleAttribute("contrast",ot(O(D(this._config?.theme),this.hass)));let t=at(this.hass);this.getAttribute("lang")!==t&&this.setAttribute("lang",t)}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}currentFloor(){let t=this.data.building,e=this._floorId===void 0?this._config?.floor??null:this._floorId;return t&&t.floors.length===1?t.floors[0].id:t?.floors.some(i=>i.id===e)?e:null}onPlanChange(t){t.preventDefault(),this.data.update(t.detail.change)}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!V(this.hass.language))return l;let t=this.data.building,e=this._config?.height??420,i=this._config;!this.roomApplied&&t&&i?.room&&(this.roomApplied=!0,t.floors.some(_=>H(_).some(f=>f.id===i.room))&&(this._roomId=i.room));let s=this.currentFloor(),n=!!this._roomId&&i?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!s&&(t?.floors.length??0)>1,a=_=>i?.controls===!0||Array.isArray(i?.controls)&&i.controls.includes(_),d=["temperature","humidity","co2"].filter(_=>a(_)),p=this._walls??i?.walls??"auto",u=this._heat??i?.heatmap??"none",c=this._explode??i?.explode??!0,h=ci(i,this._plan2d),v=this._fullscreen?"100%":i?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${e}px`,y=!!t&&!this._clean&&(n||(!!i?.controls||!!i?.time_travel)&&!(this._roomId&&i.room_panel!==!1)),x=this.tt.active,m=this.viewHass(this.rawHass,t);this.shownHass=m;let b=i?.controls_hidden!==void 0||(i?.controls_hide_after??0)>0,$=_=>k(this.hass,_),S=dt(D(i?.theme),i?.accent,this.hass,_=>getComputedStyle(this).getPropertyValue(_));return r`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${S?`--fp3d-accent:${S};--fp3d-accent-text:${lt(S)}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${x?"fp3d-tt":""}" style="height:${v}">
        ${t&&t.floors.some(_=>_.rooms.length)?r`<fp3d-view3d
              .hass=${m}
              .canEdit=${this.data.canEdit}
              .home=${this.data.homeId}
              .replay=${this.tt.session?.replay??null}
              .building=${t}
              .packs=${this.data.packs}
              .plan2d=${h}
              .floorId=${s}
              .roomId=${this._roomId}
              .wallMode=${p}
              .explode=${c}
              .keepRoof=${i?.roof_fade===!1}
              .hideRoof=${i?.roof===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .pinSize=${this._config?.marker_size??"normal"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .walkable=${this._config?.walk!==!1}
              .petsOn=${this._config?.pets!==!1}
              .ghostOn=${this._config?.ghost!==!1}
              .buttons=${this._config?.buttons?.map((_,f)=>({id:`card_${f}`,..._}))??null}
              .heatMode=${u}
              .theme=${D(this._config?.theme)}
              .clock=${this._config?.clock??null}
              .accent=${S}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${i?.room_names!==!1}
              .controlsRight=${i?.controls_side==="right"}
              .keepView=${i?.keep_view===!0}
              .angleLock=${i?.angle_lock===!0}
              .floorStack=${i?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&i?.room_panel!==!1}
              .alerts=${i?.alerts!==!1}
              .householdCard=${i?.household_card!==!1}
              .rackCards=${i?.rack_cards!==!1}
              .alertJump=${!!i?.alert_jump}
              .director=${!!i?.director}
              .voice=${!!i?.voice}
              .screen=${i?.screen?.trim()||null}
              .scenes=${i?.scenes!==!1}
              ?trail=${!!i?.motion_trail}
              .cameraWall=${this._cameraWall&&!x}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${b}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${i?.weather!==!1}
              .weatherEntityId=${i?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${i?.start_view??null}
              style=${x?`--fp3d-bottom-inset: ${y?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:y?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${_=>{if(this.canSwitch&&(t?.floors.length??0)>1&&_.detail.floorId&&this.currentFloor()!==_.detail.floorId){this._floorId=_.detail.floorId,this._roomId=null;return}_.detail.roomId&&(this._roomId=_.detail.roomId===this._roomId?null:_.detail.roomId)}}
              @floor-tap=${_=>{this._floorId=_.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
              @plan-change=${this.onPlanChange}
            ></fp3d-view3d>`:r`<p class="fp3d-card-msg">${this.data.error??(t?k(this.hass,"no_building"):k(this.hass,"loading"))}</p>`}
        ${this._roomId&&t&&this._config?.room_panel!==!1?r`<fp3d-room-panel
              @camera-look=${_=>this.view3d()?.lookThrough(_.detail.entity)}
              class="fp3d-card-panel"
              .hass=${m}
              ?readOnly=${x}
              ?noLook=${h}
              .room=${t.floors.flatMap(_=>H(_)).find(_=>_.id===this._roomId)??null}
              .floor=${t.floors.find(_=>H(_).some(f=>f.id===this._roomId))??null}
              .building=${t}
              .confirmEntities=${st(this.hass,t.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${_=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,_.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:l}
        ${y&&t?r`<div class="fp3d-card-controls">
              ${n?r`<button class="fp3d-chip" @click=${()=>this.back()}>${$("back")}</button>`:l}
              ${i?.time_travel?r`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${x} title=${$("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ⏪ ${$("tt_chip")}
                  </button>`:l}
              ${i?.camera_wall?r`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${$("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${$("cameras_short")}</button>`:l}
              ${a("view")?r`<div class="fp3d-seg" role="group" aria-label=${$("plan_view")}>
                    <button aria-pressed=${!h} @click=${()=>this._plan2d=!1}>${$("view_3d")}</button>
                    <button aria-pressed=${h} @click=${()=>this._plan2d=!0}>${$("view_2d")}</button>
                  </div>`:l}
              ${a("walls")&&!h?r`<div class="fp3d-seg">
                    <button aria-pressed=${p==="auto"} @click=${()=>this.setWalls("auto")}>${$("walls_auto")}</button>
                    <button aria-pressed=${p==="cut"} @click=${()=>this.setWalls("cut")}>${$("walls_cut")}</button>
                  </div>`:l}
              ${a("floors")&&!h&&t.floors.length>1&&!s?r`<div class="fp3d-seg">
                    <button aria-pressed=${c} @click=${()=>this._explode=!0}>${$("floors_apart")}</button>
                    <button aria-pressed=${!c} @click=${()=>this._explode=!1}>${$("floors_stacked")}</button>
                  </div>`:l}
              ${d.length?r`<div class="fp3d-seg" role="group" aria-label=${$("heatmap")}>
                    ${["none",...d].map(_=>r`<button aria-pressed=${u===_} @click=${()=>this._heat=_}>
                          ${$(_==="none"?"heat_off":`heat_short_${_}`)}
                        </button>`)}
                  </div>`:l}
            </div>`:l}
        ${this.tt.session?r`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:l}
        ${i?.fullscreen_button&&!this._clean&&!(this._roomId&&i.room_panel!==!1)?r`<button class="fp3d-card-full" title=${$(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${$(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:l}
        ${i?.dashboard&&!this._clean&&!(this._roomId&&i.room_panel!==!1)?r`<button class="fp3d-card-full fp3d-card-dash ${i.fullscreen_button?"fp3d-card-dash-2":""}" title=${i.dashboard_label||i.dashboard} aria-label=${i.dashboard_label||i.dashboard} @click=${()=>this.openDashboard(i.dashboard)}>
              ${i.dashboard_label?r`<span>${i.dashboard_label}</span>`:"\u2302"}
            </button>`:l}
      </div>
    </ha-card>`}static styles=[B,z,R`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      /* time travel: its bar at the bottom, the switches and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt .fp3d-card-controls {
        bottom: calc(var(--fp3d-tt-h) + 2px);
      }
      .fp3d-tt .fp3d-card-panel {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      .fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-dash-2 {
        right: 56px;
      }
      /* the view's walk button steps aside for the card's own buttons at the top right */
      fp3d-view3d {
        --fp3d-walk-right: 104px;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      /* full screen made by the card itself (iPad, the app on iOS): over the whole page */
      ha-card.fp3d-pseudo-full {
        position: fixed;
        inset: 0;
        z-index: 9999;
        height: 100vh !important;
        max-height: none !important;
        border-radius: 0;
      }
      @supports (height: 100dvh) {
        ha-card.fp3d-pseudo-full {
          height: 100dvh !important;
        }
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      ha-card:fullscreen {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: 0;
      }
      ha-card:fullscreen .fp3d-card-body {
        flex: 1 1 auto;
        min-height: 0;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        /* the time bar takes two rows here */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
      }
    `]};if(C("home-3d-card",Xt)){let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"home-3d-card",name:k(void 0,"card_name"),description:k(void 0,"card_description"),preview:!1})}Ge();Ve();
