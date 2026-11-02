import{B as P,D as pe,E as ut,F as ft,G as mt,H as Ct,I as ue,J as Lt,K as Rt,M as fe,N as Pt,P as me,R as ge,T as At,a as W,b as I,c as E,d as D,e as ce,f as ct,h as pt,v as Tt}from"./home-3d-chunk-GRAO6DFS.js";import{d as le,e as he}from"./home-3d-chunk-F2DZRDKA.js";import{a as St,b as Yt,c as Jt,d as Xt,h as Qt,j as Zt,k as te}from"./home-3d-chunk-JWOVMJRG.js";import{a as et,f as Gt,g as M,h as dt,i as ht}from"./home-3d-chunk-4KVEQELK.js";import{A as re,B as ae,K as st,c as it,o as ne}from"./home-3d-chunk-RXHBVTGT.js";import{c as ot,d as nt,e as rt,f as at}from"./home-3d-chunk-46T3S4P4.js";import{a as de,b as R,c as j,d as lt,e as H}from"./home-3d-chunk-MXFG7YVG.js";import{a as Q,b as z,c as Z,d as a,g as p,i as tt}from"./home-3d-chunk-RODTF4JQ.js";import"./home-3d-chunk-J6UR2RH3.js";import{F as oe,P as It,b as ee,d as q,e as Ht,m as K,r as ie,u as se,y as S}from"./home-3d-chunk-2FYP2ESN.js";import{a as w,b as y}from"./home-3d-chunk-IXKPQR33.js";Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(t){let e=Math.trunc(t)||0;return this[e<0?this.length+e:e]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var we=new URL(import.meta.url),ve=we.searchParams.get("v"),be=o=>new URL(`./fonts/${o}${ve?`?v=${ve}`:""}`,we).href,_e="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function ye(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${be("figtree.woff2")}) format("woff2");unicode-range:${_e}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${be("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${_e}}`,document.head.append(o)}function gt(o,t){return t==="metric"||t==="imperial"?t:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function Ue(o,t){return String(Number(o.toFixed(t)))}function Mt(o,t=2){let e=o<0?"-":"",i=Math.round(Math.abs(o)/.0254*(t>=2?10:1))/(t>=2?10:1),s=Math.floor(i/12+1e-9),n=i-s*12,r=Ue(n,t>=2?1:0);return s?n<.05?`${e}${s}'`:`${e}${s}' ${r}"`:`${e}${r}"`}function Dt(o,t){let e=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let i=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,s=0,n=!1,r=!1,h=e;for(let d of e.matchAll(i)){let m=Number(d[1]);if(!Number.isFinite(m))return null;let c=d[2];n=!0,h=h.replace(d[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(s+=m*.3048,r=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?s+=m*.0254:c==="mm"?s+=m/1e3:c==="cm"?s+=m/100:c==="m"?s+=m:s+=t==="imperial"?m*(r?.0254:.3048):m}return!n||/[^\s+]/.test(h)?null:s}function G(o,t){return t==="imperial"?o.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):o}var ze=["home-3d.js","home-3d-loader.js"],We="/api/home_3d/static/";function qe(o){let t=new Set;for(let e of[new URL(".",o),new URL(We,o)])for(let i of ze)t.add(new URL(i,e).href);return[...t]}async function Ft(o=(i,s)=>fetch(i,s),t=import.meta.url,e=5e3){let i;try{i=qe(t)}catch{return}let s=Promise.allSettled(i.map(r=>o(r,{cache:"reload",credentials:"same-origin"}).then(h=>h.blob()))),n;await Promise.race([s,new Promise(r=>n=setTimeout(r,e))]),clearTimeout(n)}async function $e(o=()=>location.reload(),t=Ft){await t().catch(()=>{}),o()}function xe(o,t){if(t.opening_links_saved||!Object.keys(o.states??{}).length)return 0;let e=ae(o,t.floors),i=0;for(let s of t.floors)for(let n of s.openings){if(n.contact!=null||n.sensor==="handle")continue;let r=e.get(n.id);r&&(n.contact=r,i++)}return t.opening_links_saved=!0,i}var Ke=700,Ot="home3d.unsaved",je="0.1.0",Ge="e496efbd9e91",Ye=3,Se="floorplan-3d.unsaved";function ke(){try{let o=localStorage.getItem(Ot)??localStorage.getItem(Se);return o?JSON.parse(o):null}catch{return null}}function Y(o){try{o?localStorage.setItem(Ot,JSON.stringify(o)):(localStorage.removeItem(Ot),localStorage.removeItem(Se))}catch{}}var F=class{building=null;error=null;backendProtocol=null;planProblem=null;saveState="idle";saveError=null;backendVersion=null;backendBuild=null;frontend={version:je,build:Ge};refreshBundles=Ft;refreshed=!1;draft=null;conflict=!1;packs=[];canEdit=!1;packsLoaded=!1;home=void 0;homeId=null;homeName=null;libraryLoading=null;host;hass=null;revision=-1;recipeBases={};ownRevisions=new Set;unsubscribe=null;subscribing=null;saveTimer;pending=null;pendingHome=void 0;edits=0;changes=[];remoteRevision=-1;saving=null;connected=!1;watched=null;constructor(t){this.host=t,t.addController(this)}get shown(){return this.homeId??this.home}setHome(t){t!==this.home&&(this.remembered=!1,this.home=t,!(!this.hass||!this.connected)&&this.flush().then(async()=>{await this.subscribing;let e=this.unsubscribe;this.unsubscribe=null,await e?.(),await this.start()}))}openRemembered(t){this.hass&&this.connected?this.setHome(t):this.home=t,this.remembered=!0}onHomeGone=null;remembered=!1;async reopen(){await this.flush(),await this.reload()}setHass(t){let e=this.hass===null;this.hass=t,e&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush();let t=this.unsubscribe;this.unsubscribe=null,t?.(),this.watched?.removeEventListener?.("ready",this.onReconnect),this.watched=null}onReconnect=()=>{this.checkVersion()};async checkVersion(){if(this.hass)try{let t=await Yt(this.hass);this.backendVersion=t.version??null,this.backendProtocol=t.protocol??0,this.backendBuild=t.build??null,this.refreshOnGap(),this.host.requestUpdate()}catch{}}edit(t){this.building=t,q(t.recipes),this.pending=t,this.pendingHome=this.shown,this.edits++,this.changes=null,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Ke),this.host.requestUpdate()}update(t){if(!this.building)return;let e=this.pending?this.changes:[],i=structuredClone(this.building);t(i),this.edit(i),this.changes=e?[...e,t]:null,this.flush()}speaks(t){return(this.backendProtocol??0)>=t}get frontendVersion(){return this.frontend.version}get versionGap(){let t=this.frontend;return!this.backendVersion||t.version==="dev"?null:this.backendVersion===t.version?this.backendBuild&&t.build!=="dev"&&this.backendBuild!==t.build?"frontend":null:Qe(this.backendVersion,t.version)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&this.frontend.version!=="dev"&&this.backendVersion!==this.frontend.version}get updateNotice(){return this.versionGap!=="frontend"?null:this.saveState==="error"?"unsaved":this.pending||this.saving?"saving":"ready"}async reloadWhenSaved(t=()=>location.reload()){return await this.flush(),this.pending||this.saveState==="error"?!1:(await $e(t,this.refreshBundles),!0)}refreshOnGap(){this.refreshed||this.versionGap!=="frontend"||(this.refreshed=!0,this.refreshBundles().catch(()=>{}))}async restoreDraft(){let t=this.draft,e=this.conflict;if(this.draft=null,this.conflict=!1,!t||!this.draftFits(t)){this.host.requestUpdate();return}if(e&&this.hass){try{await Qt(this.hass,this.shown)}catch{}if(!this.draftFits(t)){this.host.requestUpdate();return}}this.edit(It(t.building))}draftFits(t){return t.home?t.home===this.homeId:this.home===void 0}discardDraft(){this.draft=null,this.conflict=!1,Y(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let t=this.pending;if(!t||!this.hass)return;let e=this.pendingHome,i=this.changes;this.pending=null,this.changes=[];for(let s of t.floors)for(let n of s.furniture)n.mount_y!=null&&n.mount_y>10&&(n.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{await this.save(t,i,e)}catch(s){this.saveState="error",this.saveError=Bt(s),Y({building:t,savedAt:Date.now(),...e?{home:e}:{}})}this.host.requestUpdate()})(),await this.saving,this.saving=null,!this.pending&&this.remoteRevision>this.revision&&this.reload()}async save(t,e,i){for(let s=1;;s++){let n=i===this.shown,r=n?this.recipeBases:{},h;try{let l=n&&this.revision>=0?this.revision:void 0,{revision:b,recipes:x}=await Jt(this.hass,t,r,i,l);x&&Ee(t,x,r),i===this.shown&&(x&&(this.building&&this.building!==t&&Ee(this.building,x,r),this.building&&q(this.building.recipes),this.recipeBases=Ht(x)),this.ownRevisions.add(b),this.revision=b),this.saveState=this.pending?"saving":"saved",this.saveError=null,this.forgetDraft(i);return}catch(l){if(!Xe(l))throw l;h=l}if(i!==this.shown){Y({building:t,savedAt:Date.now(),...i?{home:i}:{},conflict:!0}),this.saveState="error",this.saveError=Bt(h);return}let d=await this.loadTheirs(i),m=this.pending??t,c=this.pending?e&&this.changes?[...e,...this.changes]:null:e;if(clearTimeout(this.saveTimer),this.pending=null,this.changes=[],d&&this.building&&Je(m,this.building)){this.saveState="saved";return}if(!d||!c||s>=Ye||!this.building){let l={building:m,savedAt:Date.now(),...i?{home:i}:{},conflict:!0};Y(l),this.draftFits(l)&&(this.conflict=!0,this.draft=l),this.saveState="error",this.saveError=null;return}t=structuredClone(this.building);for(let l of c)l(t);e=c,this.building=t,q(t.recipes),this.host.requestUpdate()}}async loadTheirs(t){let e;try{e=await St(this.hass,t)}catch{return!1}return t!==this.shown||(e.home_id??null)!==this.homeId?!1:(this.show(e,!0),this.error=null,!0)}forgetDraft(t){if(this.conflict)return;let e=ke();e?.home&&e.home!==t||Y(null)}async start(){this.hass&&(await this.reload(),!this.watched&&this.connected&&this.hass.connection.addEventListener&&(this.watched=this.hass.connection,this.watched.addEventListener("ready",this.onReconnect)),!this.unsubscribe&&!this.subscribing&&this.connected&&(this.subscribing=this.subscribe(this.hass),await this.subscribing,this.subscribing=null))}async subscribe(t){let e=this.home;try{let i=await Xt(t,(s,n)=>{if(n&&this.homeId&&n!==this.homeId){this.flush().then(()=>this.reload());return}this.ownRevisions.has(s)||s===this.revision||(this.remoteRevision=Math.max(this.remoteRevision,s),!(this.pending||this.saving)&&this.reload())},e);!this.connected||e!==this.home||this.unsubscribe?await i():this.unsubscribe=i}catch{}}loadLibrary(){return this.packsLoaded?Promise.resolve():(this.libraryLoading??=this.reloadPacks().finally(()=>this.libraryLoading=null),this.libraryLoading)}async reloadPacks(){if(this.hass){try{this.packs=await te(this.hass)}catch{this.packs=[]}ee(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(!this.hass)return!1;let t=this.home,e=this.edits;try{let i=await St(this.hass,t);if(t!==this.home)return!1;let n=(i.home_id??null)!==this.homeId;if(n){for(;this.pending;)await this.flush();if(t!==this.home)return!1;this.ownRevisions.clear(),this.remoteRevision=-1,this.draft=null,this.conflict=!1}if(this.show(i,n||!this.pending&&!this.saving&&this.edits===e),this.draft===null&&!this.pending){let r=ke();this.draft=r&&this.draftFits(r)?r:null,this.conflict=!!this.draft?.conflict}this.error=null}catch(i){return t!==this.home?!1:this.remembered&&t!==void 0&&i?.code==="home_not_found"?(this.remembered=!1,this.home=void 0,this.onHomeGone?.(),this.reload()):(this.error=Bt(i),this.host.requestUpdate(),!1)}return this.host.requestUpdate(),!0}show(t,e){this.homeId=t.home_id??null,this.homeName=t.home_name??null,this.backendVersion=t.version??null,this.backendProtocol=t.protocol??0,this.backendBuild=t.build??null,this.refreshOnGap(),this.canEdit=t.can_edit??!!this.hass?.user?.is_admin,this.planProblem=t.problem??null,e&&(this.building=It(t.building),q(this.building.recipes),this.recipeBases=Ht(this.building.recipes),this.revision=t.revision,this.hass&&!this.building.opening_links_saved&&(xe(this.hass,this.building),this.building.opening_links_saved&&this.canEdit&&this.edit(this.building)))}};function Ee(o,t,e){let i=o.recipes??{},s=Object.entries(i).filter(([n,r])=>!(n in t)||r.hash!==e[n]);o.recipes={...t,...Object.fromEntries(s)}}function Je(o,t){return JSON.stringify({...o,recipes:void 0})===JSON.stringify({...t,recipes:void 0})}function Xe(o){return!!o&&typeof o=="object"&&o.code==="conflict"}function Bt(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function Qe(o,t){let e=o.split(/[.-]/).map(s=>Number.parseInt(s,10)||0),i=t.split(/[.-]/).map(s=>Number.parseInt(s,10)||0);for(let s=0;s<Math.max(e.length,i.length);s++){let n=(e[s]??0)-(i[s]??0);if(n)return n}return 0}var B=I("home-3d-editor",()=>"8280f41bb916",()=>w),He=()=>B().then(o=>o.loadExtensions());var Ie=I("home-3d-settings",()=>"bbd17d62a480",()=>y);var vt=I("home-3d-locate",()=>"a2c739d1bb60");function Ze(){let o=()=>E(D);typeof requestIdleCallback=="function"?requestIdleCallback(o,{timeout:3e3}):setTimeout(o,1e3)}var Vt;function bt(){return Vt??=import("./home-3d-view3d-CMJZHJR3.js").then(()=>Ze(),o=>{throw Vt=void 0,o}),Vt}function _t(o){return customElements.get("fp3d-view3d")?o?.querySelector("fp3d-view3d")??null:null}var ti=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function Te(o){let t=document.createElement("style");t.textContent=ti;let e=document.createElement("div");e.className="fp3d-loclab",document.body.append(t,e);let i=null,s="",n=!0,r=async(m,c={})=>{let l=o().hass;if(l){try{i=await l.callWS({type:"home_3d/locate/rec",action:m,...c}),s=""}catch(b){s=b.message??String(b)}h()}},h=()=>{let m=o().building,c=i,l=c?.mark?.room??null,b=`<h4 data-a="toggle"><span>\u{1F4E1} Ortung \xB7 Aufnahme (Labor)</span><span>${n?"\u25BE":"\u25B8"}</span></h4>`;if(!n){e.innerHTML=b;return}let x=(c?.devices??[]).map(u=>{let g=u.t?Math.round(Date.now()/1e3-u.t):null;return`<div>\u231A ${T(u.title)}: ${g===null?"<small>noch nicht geh\xF6rt</small>":`${u.rssi} dBm \xB7 ${T(u.scanner??"")} <small>vor ${g} s</small>`}</div>`}).join(""),k=(m?.floors??[]).map(u=>`<div class="fl">${T(u.name)}</div>`+u.rooms.map(g=>`<button data-room="${T(g.id)}" data-name="${T(g.name)}" class="${l===g.id?"on":""}">${T(g.name)}</button>`).join("")).join("");e.innerHTML=`${b}
      <div><button data-a="setup">\u2699 Ortung einrichten</button></div>
      <div>${c?.running?`<button class="rec" data-a="stop">\u25A0 Stopp</button> <small>${Math.floor(c.seconds/60)}:${String(c.seconds%60).padStart(2,"0")} \xB7 ${c.lines} Zeilen</small>`:'<button data-a="start">\u25CF Aufnahme starten</button>'}</div>
      ${s?`<div style="color:#ff8fa3">${T(s)}</div>`:""}
      ${x||(c?"<div><small>Keine iPhone/Watch-Schl\xFCssel (Private BLE Device) in HA \u2013 alles wird trotzdem aufgezeichnet.</small></div>":"")}
      ${c?.mark?`<div style="margin-top:6px">\u23F1 seit <b>${ei(Date.now()/1e3-c.mark.t)}</b> in <b>${T(c.mark.name)}</b> ${Date.now()/1e3-c.mark.t>=120?"\u2713 2 Min. geschafft":""}</div>`:""}
      <div class="fl">Ich bin jetzt in \u2026</div>
      <button data-room="" class="${l?"":"on"}">\u{1F6B6} unterwegs / nirgends</button>
      ${k}`};e.addEventListener("click",m=>{let c=m.target.closest("button,h4");if(!c)return;let l=c.dataset.a;if(l==="toggle")n=!n,h();else if(l==="start")r("start",{note:"lab walk"});else if(l==="stop")r("stop");else if(l==="setup"){let{hass:b,building:x}=o();b&&x&&vt().then(k=>k.openLocateSetup(b,x,()=>o().hass))}else c.dataset.room!==void 0&&r("mark",c.dataset.room?{room:c.dataset.room,name:c.dataset.name}:{room:null})}),r("status");let d=window.setInterval(()=>{r("status")},1e3);return()=>{window.clearInterval(d),e.remove(),t.remove()}}function ei(o){let t=Math.max(0,Math.round(o));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}function T(o){return o.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}var ii=I("home-3d-timetravel",()=>"54a1b553e4ed"),O=class{session=null;starting=!1;host;constructor(t){this.host=t}get active(){return this.starting||!!this.session}start(t){this.active||(this.starting=!0,this.host.requestUpdate(),ii().then(e=>{this.starting&&(this.starting=!1,this.session=e.startTimeTravel({...t,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},e=>{this.starting=!1,console.error("Home 3D: time travel failed to load",e),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(t){return this.session?.hass??t}};function J(o,t,e=new Date){if(!o||o==="off")return!1;if(o==="sun")return t?.states["sun.sun"]?.state==="below_horizon";let i=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!i)return!1;let s=Number(i[1])*60+Number(i[2]),n=Number(i[3])*60+Number(i[4]),r=e.getHours()*60+e.getMinutes();return s<=n?r>=s&&r<n:r>=s||r<n}var si=new Set(["0","off","false","no"]);function Nt(o,t,e){let i=new URLSearchParams(o).get("tablet");return i!==null?!si.has(i.trim().toLowerCase()):!!t&&!!e?.includes(t)}var oi=120;function Ce(o,t){let e=n=>typeof n=="number"&&Number.isFinite(n)&&n>=0,i=new URLSearchParams(o).get("idle"),s=i!==null&&i.trim()!==""?Number(i):null;return e(s)?s:e(t)?t:oi}var wt=class{timer;seconds=0;onIdle;constructor(t){this.onIdle=t}arm(t){this.seconds=t>0?t:0,this.touch()}touch(){clearTimeout(this.timer),this.timer=this.seconds>0?setTimeout(this.onIdle,this.seconds*1e3):void 0}stop(){clearTimeout(this.timer),this.timer=void 0}};var yt=class{past=[];future=[];pool=new Map;chars=0;home=void 0;doc=null;run=null;now;maxSteps;maxChars;constructor(t={}){this.now=t.now??Date.now,this.maxSteps=t.maxSteps??100,this.maxChars=t.maxChars??25e6}get size(){return this.chars}get steps(){return this.past.length}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}adopt(t,e){let i=e===this.home&&t===this.doc;return i||this.clear(),this.home=e,this.doc=t,i}record(t,e,i,s=null){this.adopt(t,i),this.push(t,s),this.track(e)}track(t){this.doc=t}push(t,e=null,i=500){let s=this.now(),n=e!==null&&this.run?.key===e&&s-this.run.at<=i&&this.past.length>0;this.run=e===null?null:{key:e,at:s};for(let r of this.future)this.release(r);this.future=[],!n&&(this.past.push(this.store(t)),this.trim())}undo(t){let e=this.past.pop();return e?(this.run=null,this.future.push(this.store(t)),this.release(e),this.doc=this.load(e)):null}redo(t){let e=this.future.pop();return e?(this.run=null,this.past.push(this.store(t)),this.release(e),this.trim(),this.doc=this.load(e)):null}clear(){this.past=[],this.future=[],this.pool.clear(),this.chars=0,this.run=null}trim(){for(;this.past.length>this.maxSteps||this.chars>this.maxChars&&this.past.length>1;)this.release(this.past.shift())}store(t){let e=[];for(let[i,s]of Object.entries(t))if(i==="floors"&&Array.isArray(s))e.push([i,s.map(n=>this.keep(JSON.stringify(n)))]);else{let n=JSON.stringify(s);n!==void 0&&e.push([i,this.keep(n)])}return e}load(t){let e={};for(let[i,s]of t)e[i]=Array.isArray(s)?s.map(n=>JSON.parse(n)):JSON.parse(s);return e}keep(t){let e=this.pool.get(t);return e?(e.n++,e.s):(this.pool.set(t,{s:t,n:1}),this.chars+=t.length,t)}release(t){for(let[,e]of t)for(let i of Array.isArray(e)?e:[e]){let s=this.pool.get(i);s&&--s.n===0&&(this.pool.delete(i),this.chars-=i.length)}}};var A={solar:3600,batteryCharge:1200,house:2e3},C={soc:72,room:20.5,target:21,tariff:.245,car:78},_=o=>!!o&&o!=="none"&&o.includes("."),ni=o=>o.slice(0,o.indexOf(".")),ri=[[/hob|oven|cooker|kettle/,1500],[/wallbox|charger|zappi/,1400],[/washing|washer|dishwasher/,450],[/fridge|freezer|kitchen_tall/,110],[/tv|monitor|screen/,95],[/pc|computer|desk/,120],[/boiler|heat_pump/,90],[/router|network/,15]],Pe=o=>ri.find(([t])=>t.test(o))?.[1]??60,ai={device_class:"power",unit_of_measurement:"W",state_class:"measurement"},Ut={device_class:"battery",unit_of_measurement:"%"},Ae={device_class:"temperature",unit_of_measurement:"\xB0C"};function li(o){let t=o.slice(o.indexOf(".")+1).replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}var zt=class{out=new Map;lights=0;media=0;put(t,e,i={}){this.out.has(t)||this.out.set(t,{entity_id:t,state:String(e),attributes:{friendly_name:li(t),...i}})}watts(t,e){this.put(t,Math.round(e),ai)}main(t,e){let i=e??"";switch(ni(t)){case"light":{let s=this.lights++%3!==2;this.put(t,s?"on":"off",{supported_color_modes:["color_temp"],...s?{brightness:200,color_mode:"color_temp",color_temp_kelvin:2700}:{}});return}case"climate":case"water_heater":this.put(t,"heat",{hvac_modes:["off","heat"],hvac_action:"heating",current_temperature:C.room,temperature:C.target,min_temp:5,max_temp:30});return;case"media_player":{let s=/tv/.test(i),n=s||this.media++===0;this.put(t,n?"playing":"idle",{device_class:s?"tv":"speaker",...n?{media_title:"Demo",volume_level:.3}:{}});return}case"switch":case"input_boolean":case"fan":this.put(t,"on");return;case"binary_sensor":this.put(t,"off",/smoke/.test(i)?{device_class:"smoke"}:/water|leak/.test(i)?{device_class:"moisture"}:{});return;case"cover":this.put(t,"open",{current_position:100});return;case"lock":this.put(t,"locked");return;case"camera":this.put(t,"idle");return;case"vacuum":this.put(t,"docked");return;case"sensor":this.sensor(t,i);return}}sensor(t,e){/power|_w$/.test(t)?this.watts(t,Pe(e||t)):/temp/.test(t)||e&&ie(e)?this.put(t,C.room,Ae):/humid/.test(t)?this.put(t,50,{device_class:"humidity",unit_of_measurement:"%"}):/battery|soc|level/.test(t)||/car|leaf|vehicle/.test(e)?this.put(t,C.car,Ut):this.put(t,"ok")}energy(t,e,i){let s=K(t.type);s==="meter"?_(t.export)?(this.watts(t.export,Math.max(0,-e.grid)),_(t.power)&&this.watts(t.power,Math.max(0,e.grid))):_(t.power)&&this.watts(t.power,i.energy.grid_invert?-e.grid:e.grid):s==="inverter"||s==="solar"?_(t.power)&&this.watts(t.power,e.solar):s==="home_battery"&&(_(t.charge)?(this.watts(t.charge,-e.battery),_(t.power)&&this.watts(t.power,0)):_(t.power)&&this.watts(t.power,i.energy.battery_invert?-e.battery:e.battery))}},Le=new WeakMap;function di(o){let t=Le.get(o);if(t)return t;let e=new zt,i=o.energy,s=o.floors.flatMap(l=>l.furniture),r=_(i.battery)||s.some(l=>K(l.type)==="home_battery"&&(_(l.power)||_(l.charge)))?-A.batteryCharge:0,h=A.house-A.solar-r;_(i.grid)&&e.watts(i.grid,i.grid_invert?-h:h),_(i.solar)&&e.watts(i.solar,A.solar),_(i.battery)&&e.watts(i.battery,i.battery_invert?-r:r),_(i.battery_soc)&&e.put(i.battery_soc,C.soc,Ut),_(i.consumption)&&e.watts(i.consumption,A.house),_(i.tariff)&&e.put(i.tariff,C.tariff,{unit_of_measurement:"GBP/kWh"});let d=s.filter(l=>(K(l.type)==="inverter"||K(l.type)==="solar")&&_(l.power)).length;for(let l of s)e.energy(l,{grid:h,battery:r,solar:A.solar/Math.max(1,d)},o);let m=(o.settings.roof?.solar??[]).filter(l=>_(l.entity)),c=m.reduce((l,b)=>l+Tt(b),0)||1;for(let l of m)e.watts(l.entity,A.solar*Tt(l)/c);for(let l of s){_(l.entity)&&e.main(l.entity,l.type),_(l.power)&&e.watts(l.power,Pe(l.type));for(let b of[l.state_entity,l.state_entity2,l.extra])_(b)&&e.main(b,l.type);_(l.heat_sensor)&&e.put(l.heat_sensor,"on",{device_class:"heat"}),_(l.soc)&&e.put(l.soc,C.soc,Ut),_(l.room_sensor)&&e.put(l.room_sensor,C.room,Ae)}for(let l of o.floors)for(let b of l.placements)_(b.entity_id)&&e.main(b.entity_id,null);return Le.set(o,e.out),e.out}var Re=new WeakMap,Wt=new WeakMap;function hi(o,t){let e=Wt.get(o);return!!e&&o.states[t]===e.get(t)}function X(o){return!!o&&Wt.has(o)}function $t(o,t){if(!t?.settings?.demo)return o;let e=Re.get(o);if(e?.building===t)return e.out;let i=di(t),s=o.states;for(let[r,h]of i){let d=o.states[r];d&&d.state!=="unavailable"&&d.state!=="unknown"||(s===o.states&&(s={...o.states}),s[r]=h)}let n=o;return s!==o.states&&(n={...o,states:s},n.callService=(r,h,d)=>ci(n,d)?Promise.resolve(void 0):o.callService(r,h,d),Wt.set(n,i)),Re.set(o,{building:t,out:n}),n}function ci(o,t){let e=t?.entity_id,i=typeof e=="string"?[e]:Array.isArray(e)?e.filter(s=>typeof s=="string"):[];return i.length>0&&i.every(s=>hi(o,s))}var pi="fp3d-announce",ui="position:fixed;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0;",V=globalThis.__fp3dAnnounce??={region:null,timer:null};function fi(o){let t=o.fullscreenElement??null;for(;t?.shadowRoot?.fullscreenElement;)t=t.shadowRoot.fullscreenElement;return t??o.body}function xt(o,t=typeof document>"u"?void 0:document){if(!t||!o)return;let e=fi(t);if(!e)return;let i=V.region;i||(i=t.createElement("div"),i.id=pi,i.setAttribute("role","status"),i.setAttribute("aria-live","polite"),i.setAttribute("aria-atomic","true"),i.setAttribute("style",ui),V.region=i),i.parentNode!==e&&e.appendChild(i),i.textContent="",V.timer&&clearTimeout(V.timer),V.timer=setTimeout(()=>{V.timer=null,i.textContent=o},60)}function Me(o,t){return o?o.home!==t.home?"home":o.floor!==t.floor?"floor":null:null}function De(o,t,e){let i=[e("announce_look",{look:e(`theme_${t}`)})];return o!==t&&o==="theme"&&i.push(e("announce_follow_ha_off")),o!==t&&o==="auto"&&i.push(e("announce_follow_sun_off")),i.join(". ")}var mi="__fp3dBackStack";function gi(){let o=globalThis;return o[mi]??={layers:[],next:1,skip:0,listening:!1}}function vi(){return typeof window<"u"&&typeof window.addEventListener=="function"&&typeof history<"u"&&typeof history.pushState=="function"}function Fe(o){let t=o?.fp3dBack;return typeof t=="number"?t:0}function bi(o){o.listening||(o.listening=!0,window.addEventListener("popstate",t=>{if(o.skip>0){o.skip--;return}let e=Fe(t.state);for(let i=o.layers.length-1;i>=0;i--){let s=o.layers[i];if(s.id<=e)break;o.layers.splice(i,1),s.close()}}))}function _i(o){if(!vi())return()=>{};let t=gi();bi(t);let e=t.next++;t.layers.push({id:e,close:o});try{let{dialog:s,...n}=history.state??{};history.pushState({...n,fp3dBack:e},"")}catch{}let i=!1;return()=>{if(i)return;i=!0;let s=t.layers.findIndex(n=>n.id===e);s<0||(t.layers.splice(s,1),Fe(history.state)===e&&(t.skip++,history.back()))}}var kt=class{open=new Map;sync(t,e,i){let s=this.open.get(t);e&&!s?this.open.set(t,_i(()=>{this.open.delete(t),i()})):!e&&s&&(this.open.delete(t),s())}closeAll(){for(let t of[...this.open.values()].reverse())t();this.open.clear()}};function Be(o){let t=/^#settings(?:\/([a-z0-9_]+))?(?:\/([^/?#]+))?\/?$/.exec(o);return t?{section:t[1]??null,id:t[2]?decodeURIComponent(t[2]):null}:null}var wi=(o,t,e)=>({start:o>1,end:o+e<t-1}),yi=800,$i=(o,t)=>t-o<yi,xi=["pointerdown","keydown","wheel"],v={get(o){try{return localStorage.getItem(`home3d.${o}`)}catch{return null}},set(o,t){try{localStorage.setItem(`home3d.${o}`,t)}catch{}}},qt=class extends tt{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_viewOpen:{state:!0},_editorReady:{state:!0},_editorError:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_plan2d:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_clockLook:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_pulse:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_floorPics:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_roomsOpen:{state:!0},_noticesHidden:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0},_tablet:{state:!0},_settingsReady:{state:!0},_settingsError:{state:!0},_settingsAt:{state:!0}};rawHass;hassWatch=new ut({entityLists:!1});shownHass;get hass(){let t=this.rawHass;return t&&this.hassWatch.recording?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}settingsFrom="view";lastView=null;data=new F(this);undoHistory=new yt;locateLab=null;tt=new O(this);ttLinked=!1;idle=new wt(()=>this.returnHome());onTouch=()=>this.idle.touch();idleSeconds=0;touchesHeard=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._viewOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._editorError=null,this._floorId=null,this._roomId=null,this.readPrefs(),this._furnish=!1,this._selFurniture=null,this._selDevice=null,this._cameraWall=!1,this._micProbe=!1,this._tablet=!1,this._roomsOpen=!1,this._noticesHidden="",this._settingsReady=!!customElements.get("fp3d-settings-page"),this._settingsError=null;let t=Be(location.hash);this._settingsAt=t??{section:null,id:null},t&&(this._mode="settings")}readPrefs(){this._wallMode=v.get("walls")==="cut"?"cut":"auto",this._explode=v.get("explode")!=="0";let t=new URLSearchParams(location.search).get("view");this._plan2d=t==="2d"||t!=="3d"&&v.get("plan2d")==="1",this._keepRoof=v.get("roof")==="1";let e=v.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=v.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let i=v.get("markers");this._markers=i==="none"||i==="all"||i==="room"?i:"important";let s=v.get("pinSize");this._pinSize=s==="small"||s==="large"?s:"normal";let n=v.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"||n==="values"?n:"none",this._theme=P(v.get("theme"));let r=v.get("clock");this._clockLook=ge(m=>v.get(m)),this._clock=r==="tl"||r==="tr"||r==="bl"||r==="br"?r:"off";let h=v.get("accent");this._accent=h&&/^#[0-9a-f]{6}$/i.test(h)?h:null;let d=v.get("floor_stack");this._floorStack=d==="stacked"||d==="single"?d:"dim",this._roomNames=v.get("room_names")!=="0",this._pulse=v.get("pulse")!=="0",this._controlsRight=v.get("controls")==="right",this._keepView=v.get("keep_view")==="1",this._floorPics=v.get("floor_pictures")==="1",this._angleLock=v.get("angle_lock")==="1",this._trail=v.get("trail")==="1",this._clean=v.get("clean")==="1",this._weather=v.get("weather")!=="0",this._director=At(),this._voiceHere=Lt(),this._screen=Rt(),de(v.get("language")),this.hass&&!R(this.hass.language)&&j(this.hass.language,this.hass).then(()=>this.requestUpdate())}t(t,e){return H(this.hass,t,e)}shouldUpdate(t){let e=t.get("hass"),i=this.rawHass;if(t.size!==1||!t.has("hass")||!e||!i||this.tt.active||this.hassWatch.matters(e,i))return!0;this.takeHass(i);let s=this.shownHass,n=s&&this.viewHass(i,this.data.building);return s&&n&&X(s)!==X(n)?!0:(mt(this.renderRoot,ft["panel.ts"],[[e,i],[s,n]]),this.shownHass=n,!1)}update(t){this.hassWatch.begin();try{super.update(t)}finally{this.hassWatch.end()}}takeHass(t){this.homeRestored||this.restoreHome(),this.data.setHass(t),this.tt.session?.setLive(t)}viewHass(t,e){return $t(this.tt.hass(t),e)}willUpdate(t){t.has("hass")&&this.rawHass&&this.takeHass(this.rawHass),t.has("hass")&&this.hass&&!R(this.hass.language)&&j(this.hass.language,this.hass).then(()=>this.requestUpdate());let e=this.data.building;this.followTablet(e),e&&!this.data.canEdit&&this.data.home!==void 0&&this.openHome(void 0),e!==this.seenBuilding&&this.dropStaleSelection(e)}homeRestored=!1;get homeKey(){return`home.${this.hass?.user?.id??""}`}restoreHome(){this.homeRestored=!0;let t=v.get(this.homeKey);!t||Nt(location.search,this.hass?.user?.id,void 0)||(this.data.onHomeGone=()=>v.set(this.homeKey,""),this.data.openRemembered(t))}openHome(t){v.set(this.homeKey,t??""),this.data.setHome(t)}seenBuilding=null;seenHome=null;dropStaleSelection(t){if(this.seenBuilding=t,!t)return;let e=this.data.homeId;this.seenHome!==null&&e!==this.seenHome&&(this._floorId=null,this._roomId=null,this._selFurniture=null,this._selDevice=null),this.seenHome=e,this._floorId&&!t.floors.some(i=>i.id===this._floorId)&&(this._floorId=null,this._roomId=null),this._roomId&&!t.floors.some(i=>S(i).some(s=>s.id===this._roomId))&&(this._roomId=null),this._selFurniture&&!t.floors.some(i=>i.furniture.some(s=>s.id===this._selFurniture))&&(this._selFurniture=null)}followTablet(t){let e=location.search,i=Nt(e,this.hass?.user?.id,t?.settings.tablet_users);i&&this._mode!=="view"&&this.setMode("view"),i&&this.data.home!==void 0&&this.data.setHome(void 0),i!==this._tablet&&(this._tablet=i,this._viewOpen=!1);let s=i?Ce(e,t?.settings.tablet_idle):0;(s!==this.idleSeconds||i!==this.touchesHeard)&&(this.listenTouches(i),this.idleSeconds=s,this.idle.arm(s))}listenTouches(t){if(t!==this.touchesHeard){this.touchesHeard=t;for(let e of xi)t?window.addEventListener(e,this.onTouch,{capture:!0,passive:!0}):window.removeEventListener(e,this.onTouch,{capture:!0});t||(this.idle.stop(),this.idleSeconds=0)}}returnHome(){this.tt.stop(),this._roomId=null,this._floorId=null,this._viewOpen=!1,this._cameraWall=!1,this.view3d()?.resetView()}get canEdit(){return this.data.canEdit}async loadSample(){try{let t=await Zt(this.hass);this.openHome(t.home.id)}catch(t){await le(this.t("home_failed",{error:String(t?.message??t)}),{ok:this.t("ask_ok")})}}setMode(t){t===this._mode||this._tablet&&t!=="view"||(this._mode==="view"&&(this.lastView=this.view3d()?.currentView()??this.lastView),this.tt.stop(),this._editorError=null,this._viewOpen=!1,t==="view"&&this.data.flush(),this._mode==="settings"&&t!=="settings"&&this.setAddress(""),t==="settings"&&this.setAddress(this.settingsLink(this._settingsAt.section,this._settingsAt.id)),t==="settings"&&(this.settingsFrom=this._mode),this._mode=t)}settingsLink(t,e){return`#settings${t?`/${t}${e?`/${encodeURIComponent(e)}`:""}`:""}`}setAddress(t){try{location.hash!==t&&history.replaceState(history.state,"",`${location.pathname}${location.search}${t}`)}catch{}}openSettings(t=null,e=null){this._tablet||(this._settingsAt={section:t,id:e},this._mode==="settings"?this.setAddress(this.settingsLink(t,e)):this.setMode("settings"))}onOpenSettings=t=>{let e=t.detail??{};t.stopPropagation(),t.preventDefault(),this.openSettings(e.section??null,e.id??null)};onOpenExtensions=t=>{t.stopPropagation(),t.preventDefault(),this.canEdit&&this.setMode("extensions")};onHash=()=>{let t=Be(location.hash);t&&this.openSettings(t.section,t.id)};settingsAction(t){let{action:e}=t.detail;if(e==="extensions")this.setMode("extensions");else if(e==="editor")this.setMode("editor");else if(e==="kerb")this.openBinKerb();else if(e==="mic_probe")Ct().then(()=>this._micProbe=!0).catch(()=>{});else if(e==="locate"&&this.hass&&this.data.building){let i=this.data.building;vt().then(s=>s.openLocateSetup(this.hass,i,()=>this.hass,n=>{let r=this.data.building;r&&this.editPlan({...r,settings:{...r.settings,person_look:n==="figure"?null:n}})}))}}openBinKerb(){let t=this.data.building?.floors.flatMap(e=>e.furniture).find(e=>e.type==="waste_bin");this.setMode("editor"),t&&B().then(async()=>{this._editorReady=!0,await this.updateComplete;let e=this.renderRoot.querySelector("fp3d-editor");await e?.updateComplete,e?.goToFurniture(t.id)},()=>{})}onPlanChange(t){t.preventDefault(),this.data.update(t.detail.change)}onRoomTap(t){let{floorId:e,roomId:i}=t.detail;if((this.data.building?.floors.length??0)>1&&e&&this._floorId!==e){this._floorId=e,this._roomId=null;return}i&&(this._roomId=i===this._roomId?null:i)}setPlan2d(t){this._plan2d=t,v.set("plan2d",t?"1":"0")}onViewChange(t){let e=this._theme;this.readPrefs(),t.detail?.id==="theme"&&e!==this._theme&&xt(De(e,this._theme,(i,s)=>this.t(i,s)))}setViewOpen(t,e=!1){this._viewOpen=t,!t&&e&&this.updateComplete.then(()=>this.renderRoot?.querySelector(".fp3d-view-btn")?.focus())}hasCameras(t){return t.floors.some(e=>e.placements.some(i=>it(i.entity_id)==="camera"))}viewContext(t){return{floors:t.floors.length,floorOpen:!!this._floorId,roof:t.settings.roof.type!=="none",plan2d:this._plan2d,kiosk:this._tablet}}editPlan(t,e=null){let i=this.data.building;i&&this.undoHistory.record(i,t,this.data.homeId,e),this.data.edit(t)}editFurniture(t,e,i=null){let s=this.data.building;if(!s)return;let n=structuredClone(s);for(let r of n.floors){let h=r.furniture.find(d=>d.id===t);h&&e(h,r)}this.editPlan(n,i)}editDevice(t,e,i=null){let s=this.data.building;if(!s)return;let n=structuredClone(s);for(let r of n.floors){let h=r.placements.find(d=>d.entity_id===t);h&&e(h,r)}this.editPlan(n,i)}moveDevice(t){let{id:e,x:i,z:s}=t.detail;this.editDevice(e,(n,r)=>{let[h,d]=Pt(r,n.x,n.z,i,s);Object.assign(n,{x:h,z:d})},`move:${e}`)}turnStep(){return it(this._selDevice??"")==="camera"?15:45}turnDevice(t){this._selDevice&&this.editDevice(this._selDevice,e=>e.rotation=(((e.rotation??0)+t)%360+360)%360)}deleteDevice(){let t=this._selDevice,e=this.data.building;if(!t||!e)return;let i=structuredClone(e);for(let s of i.floors)s.placements=s.placements.filter(n=>n.entity_id!==t);this.editPlan(i),this._selDevice=null}renderDeviceFields(t){let i=this.data.building?.floors.find(u=>u.placements.some(g=>g.entity_id===t)),s=i?.placements.find(u=>u.entity_id===t);if(!i||!s)return p;let n=it(t),r=n==="light",h=n==="camera",d=s.mount==="ceiling",m=n?re(n,i.height,r||h?s.mount??(h?"wall":"ceiling"):null):1,c=gt(this.hass,this.data.building?.settings.units),l=c==="imperial",b=u=>l?Mt(u):String(Math.round(u*100)/100),x=u=>l?Dt(u,"imperial"):parseFloat(u.replace(",",".")),k=(u,g,$,N,f,L,U=!1)=>a`<label class="fp3d-size" title=${U?G(u,c):u}
        >${U?G(u,c):u}
        <input
          type=${U&&l?"text":"number"}
          inputmode="decimal"
          step=${$}
          min=${N}
          max=${f}
          .value=${U?b(g):String(Math.round(g*100)/100)}
          @change=${jt=>{let Et=U?x(jt.target.value):parseFloat(jt.target.value.replace(",","."));Et!==null&&Number.isFinite(Et)&&L(Math.min(f,Math.max(N,Et)))}}
        />
      </label>`;return a`${r?a`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(t,g=>Object.assign(g,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>a`<option value=${u} ?selected=${u===(s.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:p}
      ${h?a`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(t,g=>Object.assign(g,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!d}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${d}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${k(this.t("camera_fov_short"),s.fov??(d?360:90),5,10,360,u=>this.editDevice(t,g=>g.fov=u))}
            ${k(this.t("camera_reach_short"),s.reach??(d?3:4.5),.5,.5,50,u=>this.editDevice(t,g=>g.reach=u),!0)}
            ${k(this.t("camera_tilt_short"),s.tilt??(d?65:20),5,0,90,u=>this.editDevice(t,g=>g.tilt=u))}`:p}
      <label class="fp3d-size" title=${G(this.t("marker_height"),c)}
        >${this.t("size_short_h")}
        <input
          type=${l?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${b(s.y??m)}
          @change=${u=>{let g=x(u.target.value);g!==null&&Number.isFinite(g)&&g>=0&&this.editDevice(t,$=>$.y=Math.round(g*1e3)/1e3)}}
        />
      </label>
      ${s.y!==null?a`<button class="fp3d-chip" @click=${()=>this.editDevice(t,u=>u.y=null)}>${this.t("height_auto")}</button>`:p}`}furnitureName(t){let e=this.data.building?.floors.flatMap(i=>i.furniture).find(i=>i.id===t);return e?pe(this.hass,e.type):""}moveFurniture(t){let{id:e,x:i,z:s}=t.detail,n=this.data.building?.settings.wall_interior??.12;this.editFurniture(e,(r,h)=>{let[d,m]=Pt(h,r.x,r.z,i,s);Object.assign(r,{x:d,z:m});let c=me(h,r,n);c&&Object.assign(r,c)},`move:${e}`)}renderSizeFields(t){let e=this.data.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===t);if(!e)return p;let i=gt(this.hass,this.data.building?.settings.units)==="imperial",s=d=>i?Mt(d):String(Math.round(d*100)/100),n=d=>i?Dt(d,"imperial"):parseFloat(d.replace(",",".")),r=(d,m)=>a`<label class="fp3d-size" title=${this.t(`size_${d}`)}
      >${m}
      <input
        type=${i?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${s(e[d])}
        @change=${c=>{let l=n(c.target.value)??NaN;Number.isFinite(l)&&l>0&&this.editFurniture(t,b=>b[d]=Math.round(l*1e3)/1e3)}}
    /></label>`,h=this.data.building?.floors.find(d=>d.furniture.some(m=>m.id===t));return a`${r("w",this.t("size_short_w"))}${r("d",this.t("size_short_d"))}${r("h",this.t("size_short_h"))}
    ${h&&oe(e)?a`<label class="fp3d-size" title=${G(this.t("mount_height"),gt(this.hass,this.data.building?.settings.units))}
            >↕
            <input
              type=${i?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${s(e.mount_y??se(h,e))}
              @change=${d=>{let m=n(d.target.value)??NaN;Number.isFinite(m)&&m>=0&&this.editFurniture(t,c=>c.mount_y=Math.round(m*1e3)/1e3)}}
          /></label>
          ${e.mount_y!=null?a`<button class="fp3d-chip" @click=${()=>this.editFurniture(t,d=>d.mount_y=null)}>${this.t("height_auto")}</button>`:p}`:p}`}turnFurniture(t){this._selFurniture&&this.editFurniture(this._selFurniture,e=>e.rotation=((e.rotation+t)%360+360)%360)}deleteFurniture(){let t=this._selFurniture,e=this.data.building;if(!t||!e)return;let i=structuredClone(e);for(let s of i.floors)s.furniture=s.furniture.filter(n=>n.id!==t);this.editPlan(i),this._selFurniture=null}view3d(){return _t(this.renderRoot)}toggleTimeTravel(t=null){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),i=this.data.building;!e||!i||!this.hass||(this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:i,spec:e.historyEntities(),quality:this._quality,at:t,t:(s,n)=>H(this.hass,s,n)}))}announcedView=null;announceView(){let t=this.data.building;if(!t)return;let e={home:this.data.homeId,floor:this._floorId},i=Me(this.announcedView,e);this.announcedView=e,i==="home"?xt(this.t("announce_home",{name:this.data.homeName??"Home 3D"})):i==="floor"&&xt(e.floor?this.t("announce_floor",{name:t.floors.find(s=>s.id===e.floor)?.name??""}):this.t("all_floors"))}backLayers=new kt;updated(t){if(this.announceView(),t.has("_viewOpen")&&this.backLayers.sync("view",this._viewOpen&&this._mode==="view",()=>this.setViewOpen(!1,!0)),t.has("_floorId")||t.has("_roomId")){let s=this.renderRoot.querySelector(".fp3d-floors [aria-pressed='true']"),n=s?.parentElement;s&&n&&n.scrollWidth>n.clientWidth&&s.scrollIntoView?.({block:"nearest",inline:"nearest"})}this.markNavEdges();let e=lt(this.hass);if(this.getAttribute("lang")!==e&&this.setAttribute("lang",e),this.toggleAttribute("light",this._mode==="view"&&ot(M(this._theme,this.hass))),this.toggleAttribute("contrast",this._mode==="view"&&nt(M(this._theme,this.hass))),!this.locateLab&&this.hass?.user?.is_admin&&this.data.building&&he()&&(this.locateLab=Te(()=>({hass:this.hass,building:this.data.building}))),this.ttLinked||!this.data.building||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let i=new URLSearchParams(location.search).get("tt");i!==null&&this.toggleTimeTravel(i)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=t=>{t.key!=="Escape"||this._mode!=="view"||(this._viewOpen?this.setViewOpen(!1,!0):this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),bt().then(()=>this.requestUpdate(),t=>console.error("Home 3D: the 3D view failed to load",t)),window.addEventListener("keydown",this.onKey),window.addEventListener("hashchange",this.onHash),window.addEventListener("location-changed",this.onHash),this.addEventListener("open-settings",this.onOpenSettings),this.addEventListener("open-extensions",this.onOpenExtensions)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("hashchange",this.onHash),window.removeEventListener("location-changed",this.onHash),this.removeEventListener("open-settings",this.onOpenSettings),this.removeEventListener("open-extensions",this.onOpenExtensions),this.listenTouches(!1),this.backLayers.closeAll(),this.tt.stop(),this.locateLab?.(),this.locateLab=null}render(){if(this.hass&&!R(this.hass.language))return p;let t=this.data.building;this.canEdit&&this.hass&&E(ce);let e=this.noticeList(this._clean&&this._mode==="view");return this.noticeKey=e.map(i=>i.key).join("|"),a`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this.accentStyle()}>
        ${this._micProbe&&this.hass?a`<fp3d-mic-probe .hass=${this.rawHass} .building=${t} @close=${()=>(this._micProbe=!1,fe())}></fp3d-mic-probe>`:p}
        ${this._clean&&this._mode==="view"?p:this._tablet?this.renderTabletHeader():this.renderHeader(e.length)}
        ${this.renderNotices(e)}
        ${this.data.error&&!t?a`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:p}
        ${!t&&!this.data.error?a`<p class="fp3d-message">${this.t("loading")}</p>`:p}
        ${t?this._mode==="editor"&&this.canEdit?this.renderEditor(t):this._mode==="extensions"&&this.canEdit?this.renderExtensions():this._mode==="settings"&&!this._tablet?this.renderSettings(t):this.renderView(t):p}
      </div>
    `}renderTabletHeader(){return a`<header class="fp3d-header fp3d-tablet-head"><h1>${this.data.homeName||"Home 3D"}</h1></header>`}shownAccent(){return dt(this._theme,this._accent,this.hass,t=>getComputedStyle(this).getPropertyValue(t))}accentStyle(){return ht(this.shownAccent())}renderHeader(t){let e=(i,s,n,r,h,d)=>a`<button class="fp3d-tab ${s}" aria-current=${this._mode===i?"page":p} aria-label=${r} title=${h===null?r:p} @click=${d}>
        ${W(n)}<span class="fp3d-tab-word">${r}</span>${h?a`<span class="fp3d-tab-short" aria-hidden="true">${h}</span>`:p}
      </button>`;return a`<header class="fp3d-header">
      <ha-menu-button .hass=${this.rawHass} .narrow=${this.narrow}></ha-menu-button>
      <h1>Home 3D</h1>
      ${this.canEdit&&this.hass?a`<fp3d-home-switcher
            .hass=${this.rawHass}
            .home=${this.data.homeId}
            @home-settings=${()=>this.openSettings("homes","homes")}
          ></fp3d-home-switcher>`:p}
      <nav class="fp3d-tabs" aria-label=${this.t("modes")}>
        ${e("view","fp3d-tab-view","cube",this.t("view"),"",()=>this.setMode("view"))}
        ${this.canEdit?a`${e("editor","fp3d-tab-editor","pencil",this.t("editor"),this.t("editor_short"),()=>this.setMode("editor"))}
            ${e("extensions","fp3d-tab-ext","puzzle",this.t("ext_tab"),null,()=>this.setMode("extensions"))}`:p}
        ${e("settings","fp3d-tab-settings","gear",this.t("settings"),null,()=>this.openSettings())}
      </nav>
      <span class="fp3d-grow"></span>
      ${this.renderSaveLine(t)}
    </header>`}renderSaveLine(t){let e=this.data.saveState,i=e==="idle"||this._mode==="settings"?"":this.t(e==="saving"?"saving":e==="saved"?"st_saved_home":"save_error"),s=t>0&&this._noticesHidden!==this.noticeKey;return a`<span class="fp3d-save fp3d-save-${i?e:"idle"}" role="status" aria-live="polite">
        ${i?a`<span class="fp3d-save-dot" aria-hidden="true"></span><span class="fp3d-save-text">${i}</span>`:p}
      </span>
      ${t?a`<button
            class="fp3d-note-badge"
            aria-expanded=${s?"true":"false"}
            aria-label=${this.t("notices_badge",{n:t})}
            title=${this.t("notices_badge",{n:t})}
            @click=${()=>this._noticesHidden=s?this.noticeKey:""}
          >
            <span>${t}</span>
          </button>`:p}`}noticeKey="";noticeList(t){let e=this.data,i=[],s=this.renderUpdateNotice();if(s&&i.push({key:`update:${e.updateNotice}`,body:s}),t)return i;e.needsRestart&&e.versionGap!=="frontend"&&i.push({key:"restart",body:a`<div class="fp3d-notice fp3d-notice-warn"><span>${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</span></div>`});let n=e.planProblem;if(n&&!this._tablet){let r=n.code==="plan_repaired"?this.t("plan_repaired",{parts:(n.dropped??[]).length}):n.code==="plan_too_new"?this.t("plan_too_new"):this.t("plan_invalid",{error:n.message});i.push({key:`plan:${n.code}`,body:a`<div class="fp3d-notice fp3d-notice-${n.code==="plan_repaired"?"warn":"error"}" role="status"><span>${r}</span></div>`})}if(e.saveState==="error"&&e.saveError&&i.push({key:"save",body:a`<div class="fp3d-notice fp3d-notice-error"><span>${this.t("save_failed_detail",{error:e.saveError})}</span></div>`}),e.draft&&this.canEdit&&!this._tablet){let r=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);i.push({key:`draft:${e.draft.savedAt}`,body:a`<div class="fp3d-notice">
          <span>${e.conflict?this.t("save_conflict"):this.t(e.draft.home?"draft_found":"draft_found_old",{time:r})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>{e.restoreDraft()}}>${this.t(e.conflict?"draft_restore_conflict":"draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`})}return i}noticeShownAt=0;noticeShownKey="";renderNotices(t){return!t.length||this._noticesHidden===this.noticeKey?(this.noticeShownKey="",p):(this.noticeShownKey!==this.noticeKey&&(this.noticeShownKey=this.noticeKey,this.noticeShownAt=performance.now()),a`<div class="fp3d-notices" role="region" aria-label=${this.t("notices")} @click=${{handleEvent:e=>this.guardNoticeTap(e),capture:!0}}>
      <div class="fp3d-notices-list">${t.map(e=>e.body)}</div>
      <button class="fp3d-btn fp3d-notices-hide" @click=${()=>this._noticesHidden=this.noticeKey}>${this.t("notices_hide")}</button>
    </div>`)}guardNoticeTap(t){$i(this.noticeShownAt,performance.now())&&(t.stopPropagation(),t.preventDefault())}renderUpdateNotice(){let t=this.data,e=t.updateNotice;if(!e)return null;let i=t.backendVersion!==t.frontendVersion?this.t("needs_reload",{frontend:t.frontendVersion,backend:t.backendVersion??"?"}):this.t("update_ready");return a`<div class="fp3d-notice fp3d-notice-warn fp3d-notice-update" role="status">
      <span>${i}${e==="ready"?p:a` ${this.t(e==="saving"?"update_saving":"update_unsaved")}`}</span>
      <button class="fp3d-btn" ?disabled=${e==="unsaved"} @click=${()=>{t.reloadWhenSaved()}}>${this.t("reload_page")}</button>
    </div>`}editorPending(){return this._editorReady?null:this._editorError?a`<div class="fp3d-empty"><p>${this.t("load_error")}: ${this._editorError}</p></div>`:(B().then(()=>this._editorReady=!0,t=>this._editorError=String(t)),a`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderExtensions(){this.data.loadLibrary();let t=this.editorPending();return t||(customElements.get("fp3d-extensions")?a`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.rawHass}
      .canEdit=${this.data.canEdit}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.editPlan(e.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`:(He().then(()=>this.requestUpdate(),e=>console.error("Home 3D: the Extensions page failed to load",e)),a`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`))}renderSettings(t){return this._settingsReady?a`<fp3d-settings-page
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
      .homeId=${this.data.homeId}
      .lastView=${this.lastView}
      .loadEditor=${B}
      .backTo=${this.settingsFrom==="settings"?"view":this.settingsFrom}
      .version=${this.versions()}
      @settings-back=${()=>this.setMode(this.settingsFrom==="settings"?"view":this.settingsFrom)}
      @settings-edit=${e=>this.editPlan(e.detail.building,e.detail.key)}
      @device-change=${()=>(this.readPrefs(),this.requestUpdate())}
      @settings-action=${this.settingsAction}
      @home-reload=${()=>{this.data.reopen()}}
      @home-open=${e=>this.openHome(e.detail.home??void 0)}
      @settings-nav=${e=>this.setAddress(this.settingsLink(e.detail.section,e.detail.id))}
    ></fp3d-settings-page>`:this._settingsError?a`<div class="fp3d-empty"><p>${this.t("load_error")}: ${this._settingsError}</p></div>`:(Ie().then(()=>this._settingsReady=!0,e=>this._settingsError=String(e)),a`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}versionsMemo;versions(){let t=String(this.data.frontendVersion),e=this.data.backendVersion??null;return(this.versionsMemo?.frontend!==t||this.versionsMemo.backend!==e)&&(this.versionsMemo={frontend:t,backend:e}),this.versionsMemo}translator=(t,e)=>H(this.hass,t,e);renderEditor(t){this.data.loadLibrary();let e=this.editorPending();return e||a`<fp3d-editor
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
      @director-here=${()=>this._director=At()}
      @voice-here=${()=>{this._voiceHere=Lt(),this._screen=Rt()}}
      @mic-probe=${()=>Ct().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @load-sample=${()=>{this.loadSample()}}
      @building-changed=${i=>this.data.edit(i.detail.building)}
    ></fp3d-editor>`}async focusRoomPanel(){await this.updateComplete,await customElements.whenDefined("fp3d-room-panel"),await this.renderRoot.querySelector("fp3d-room-panel")?.focusHeading?.()}markNavEdges=()=>{let t=this.renderRoot?.querySelector(".fp3d-floors");if(!t)return;let e=wi(t.scrollLeft,t.scrollWidth,t.clientWidth);t.toggleAttribute("data-more-start",e.start),t.toggleAttribute("data-more-end",e.end)};onNavWheel=t=>{if(!t.deltaY||t.deltaX)return;let e=t.currentTarget;e.scrollWidth<=e.clientWidth||(e.scrollLeft+=t.deltaY,t.preventDefault())};renderFloorBar(t,e){let i=t.floors.length>1,s=r=>{this._floorId=r,this._roomId=null,this._roomsOpen=!1},n=this._roomId?t.floors.flatMap(r=>S(r)).find(r=>r.id===this._roomId):void 0;return a`<nav class="fp3d-nav" aria-label=${this.t("floors")}>
      ${i?a`<div class="fp3d-seg fp3d-floors" role="group" aria-label=${this.t("floors")} @wheel=${this.onNavWheel} @scroll=${this.markNavEdges}>
            <button aria-pressed=${this._floorId===null} @click=${()=>s(null)}>${this.t("all_floors")}</button>
            ${[...t.floors].reverse().map(r=>a`<button aria-pressed=${r.id===this._floorId} @click=${()=>s(r.id)}>${r.name}</button>`)}
          </div>`:p}
      ${this._tablet?p:a`${i?a`<span class="fp3d-sep"></span>`:p}
            <div class="fp3d-rooms">
              <button
                class="fp3d-chip fp3d-rooms-btn ${n?"fp3d-rooms-on":""}"
                aria-haspopup="dialog"
                aria-expanded=${this._roomsOpen}
                aria-label=${n?this.t("rooms_open",{room:n.name}):this.t("rooms")}
                @pointerenter=${()=>E(pt)}
                @focus=${()=>E(pt)}
                @click=${()=>this._roomsOpen=!this._roomsOpen}
              >
                ${n?.name??this.t("rooms")} ${W("down")}
              </button>
              ${this._roomsOpen?(E(pt),a`<fp3d-rooms-picker
                    .groups=${this.roomGroups(t,e)}
                    .selected=${this._roomId}
                    .t=${this.translator}
                    .editFloor=${e&&this.canEdit?e.id:null}
                    @room-pick=${r=>{i&&(this._floorId=r.detail.floorId),this._roomId=r.detail.roomId,this._roomsOpen=!1,this.focusRoomPanel()}}
                    @edit-floor=${r=>this.openInEditor(r.detail.floorId,null)}
                    @picker-close=${r=>this.closeRooms(!!r.detail?.focus)}
                  ></fp3d-rooms-picker>`):p}
            </div>`}
    </nav>`}roomGroupsMemo=null;roomGroups(t,e){let i=this.roomGroupsMemo;if(i&&i.b===t&&i.floor===e)return i.groups;let n=(e?[e]:[...t.floors].reverse()).map(r=>({id:r.id,name:r.name,rooms:S(r).filter((h,d,m)=>h.name.trim()&&!(h.outdoor&&m.findIndex(c=>c.outdoor&&c.area_id===h.area_id&&c.name===h.name)<d)).map(h=>({id:h.id,name:h.name}))})).filter(r=>r.rooms.length);return this.roomGroupsMemo={b:t,floor:e,groups:n},n}closeRooms(t){this._roomsOpen=!1,t&&this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-rooms-btn")?.focus())}openInEditor(t,e){!this.canEdit||this._tablet||(this._roomsOpen=!1,this.setMode("editor"),B().then(async()=>{this._editorReady=!0,await this.updateComplete;let i=this.renderRoot.querySelector("fp3d-editor");await i?.updateComplete,i?.goToRoom(t,e)},()=>{}))}renderView(t){if(!t.floors.length||!t.floors.some(r=>r.rooms.length))return a`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?a`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <button class="fp3d-btn" @click=${()=>{this.loadSample()}}>${this.t("home_sample")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:p}
      </div>`;let e=t.floors.find(r=>r.id===this._floorId),i=this.tt.active,s=this.viewHass(this.rawHass,t);this.shownHass=s;let n=a`<div class="fp3d-seg" role="group" aria-label=${this.t("plan_view")}>
      <button aria-pressed=${!this._plan2d} @click=${()=>this.setPlan2d(!1)}>${this.t("view_3d")}</button>
      <button aria-pressed=${this._plan2d} @click=${()=>this.setPlan2d(!0)}>${this.t("view_2d")}</button>
    </div>`;return a`
      ${this._clean||this._tablet&&t.floors.length<2?p:this.renderFloorBar(t,e)}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${i?"fp3d-tt":""}">
        <!-- the floor bar picks the floor: the floor pictures beside the 3D view are a second picker, shown when Settings
             › Screen and controls says so (#249, #250; the card keeps its own switch) -->
        <fp3d-view3d
          class="fp3d-body"
          .canEdit=${this.data.canEdit&&!this._tablet}
          .noSettings=${this._tablet}
          .home=${this.data.homeId}
          .hass=${s}
          .replay=${this.tt.session?.replay??null}
          .building=${t}
          .packs=${this.data.packs}
          .plan2d=${this._plan2d}
          .floorThumbs=${this._floorPics}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .pulse=${this._pulse}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          .angleLock=${this._angleLock}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!i}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,v.set("clean",this._clean?"1":"0")}}
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
          .clockLook=${this._clockLook}
          .accent=${this.shownAccent()}
          ?furnish=${this._furnish&&!i}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${r=>this._selFurniture=r.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${r=>this._selDevice=r.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${r=>{this._floorId=r.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
          @plan-change=${this.onPlanChange}
        ></fp3d-view3d>
        ${this._roomId?(E(D),a`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${r=>this.view3d()?.lookThrough(r.detail.entity)}
              .hass=${s}
              ?readOnly=${i}
              ?noLook=${this._plan2d}
              ?canEdit=${this.canEdit&&!this._tablet}
              @plan-change=${this.onPlanChange}
              .room=${t.floors.flatMap(r=>S(r)).find(r=>r.id===this._roomId)??null}
              .floor=${t.floors.find(r=>S(r).some(h=>h.id===this._roomId))??null}
              .building=${t}
              .confirmEntities=${st(this.hass,t.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${r=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,r.detail.id)}
              @close=${()=>this._roomId=null}
              @edit-room=${r=>this.openInEditor(r.detail.floorId,r.detail.roomId)}
              @edit-floor=${r=>this.openInEditor(r.detail.floorId,null)}
            ></fp3d-room-panel>`):p}
        ${this.tt.session?a`<fp3d-time-bar .session=${this.tt.session} ?demo=${X(s)}></fp3d-time-bar>`:p}
        ${X(s)&&!this.tt.session?a`<div class="fp3d-demo-chip" title=${this.t("demo_hint")}>${this.t("demo_chip")}</div>`:p}
        ${this._clean?p:a`<div class="fp3d-overlay">
          ${this._tablet?p:n}
          <button
            class="fp3d-chip fp3d-view-btn"
            aria-haspopup="dialog"
            aria-expanded=${this._viewOpen}
            aria-controls="fp3d-view-panel"
            @pointerenter=${()=>E(ct)}
            @focus=${()=>E(ct)}
            @click=${()=>this.setViewOpen(!this._viewOpen)}
          >
            ${this.t("view_btn")} <span class="fp3d-caret" aria-hidden="true">${this._viewOpen?"\u25B4":"\u25BE"}</span>
          </button>
          ${!i&&this.hasCameras(t)?a`<button class="fp3d-chip fp3d-cam-btn" aria-pressed=${this._cameraWall} title=${this.t("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${this.t("cameras_short")}</button>`:p}
          ${this._tablet?p:a`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${i} title=${this.t("tt_hint")} aria-label=${this.t("tt_chip")} @click=${()=>this.toggleTimeTravel()}>
            ⏪ <span class="fp3d-tt-label">${this.t("tt_chip")}</span>
          </button>`}
          ${this._roomId||this._floorId&&t.floors.length>1?a`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:p}
        </div>`}
        ${this._viewOpen&&!this._clean?(E(ct),a`<fp3d-view-panel
              id="fp3d-view-panel"
              .hass=${this.rawHass}
              .context=${this.viewContext(t)}
              @view-change=${this.onViewChange}
              @view-close=${r=>this.setViewOpen(!1,!r.detail?.outside)}
              >${this._tablet?n:p}</fp3d-view-panel
            >`):p}
        ${this._furnish?a`<div class="fp3d-furnish-bar">
              ${this._selFurniture?a`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,r=>r.mirror=!r.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?a`<span>${ne(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:a`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:p}
      </div>
    `}static styles=[rt,at,Z`
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
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      /* one header row (#249): 56 px, nothing wraps; the tabs reach its foot for their underline */
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 12px 0 4px;
        height: 56px;
        box-sizing: border-box;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex: none;
        min-width: 0;
      }
      .fp3d-tablet-head {
        padding-left: 14px;
      }
      fp3d-home-switcher {
        flex: 0 1 auto;
        min-width: 0;
      }
      /* the tabs are navigation (aria-current), so they are underlined, not filled like a choice (#219) */
      .fp3d-tabs {
        display: flex;
        align-self: stretch;
        gap: 2px;
        flex: none;
      }
      .fp3d-tab {
        font: inherit;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 3px 12px 0;
        min-width: 44px;
        justify-content: center;
        border: none;
        border-bottom: 3px solid transparent;
        background: none;
        color: var(--fp3d-muted);
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;
      }
      .fp3d-tab:hover {
        color: var(--fp3d-text);
      }
      .fp3d-tab[aria-current="page"] {
        color: var(--fp3d-text);
        border-bottom-color: var(--fp3d-accent);
      }
      .fp3d-tab[aria-current="page"] .fp3d-ui-icon {
        color: var(--fp3d-accent);
      }
      .fp3d-tab:focus-visible {
        outline-offset: -2px;
      }
      .fp3d-tab-short {
        display: none;
      }
      /* the save line (#249): who it saved for, a dot before it; a notice is a badge beside it */
      .fp3d-save {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        white-space: nowrap;
        min-width: 0;
      }
      .fp3d-save-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--fp3d-ok, #4ade80);
        flex: none;
      }
      .fp3d-save-saving .fp3d-save-dot {
        background: var(--fp3d-muted);
      }
      .fp3d-save-error .fp3d-save-dot {
        background: var(--fp3d-danger);
      }
      .fp3d-note-badge {
        font: inherit;
        flex: none;
        display: inline-grid;
        place-items: center;
        min-width: 32px;
        height: 32px;
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
      }
      .fp3d-note-badge span {
        min-width: 22px;
        height: 22px;
        padding: 0 6px;
        box-sizing: border-box;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1204;
        font-size: 12px;
        font-weight: 800;
        line-height: 22px;
        text-align: center;
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
      /* notices in a strip of their own under the header (#258, were pop-ups over the page, #249): they cover no
         control; the plan and the 3D view below only get shorter */
      .fp3d-notices {
        flex: none;
        display: flex;
        align-items: flex-start;
        gap: 8px;
        padding: 6px 12px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
      }
      .fp3d-notices-list {
        flex: 1;
        min-width: 0;
        display: grid;
        gap: 6px;
      }
      .fp3d-notices-hide {
        flex: none;
      }
      /* inside the strip a notice is a line of text and its buttons: the strip is its frame */
      .fp3d-notices .fp3d-notice {
        flex-wrap: nowrap;
        padding: 0 0 0 10px;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        border-radius: 0;
        background: none;
      }
      .fp3d-notices .fp3d-notice span {
        min-width: 0;
      }
      .fp3d-notices .fp3d-notice-warn {
        border-left-color: rgba(255, 181, 71, 0.8);
      }
      .fp3d-notices .fp3d-notice-error {
        border-left-color: rgba(255, 107, 139, 0.8);
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
        background: var(--fp3d-primary);
        color: var(--fp3d-primary-text);
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
      /* compact (#246 size classes): no title, the home's name alone, a short save line */
      @media (max-width: ${z(String(Gt))}px) {
        .fp3d-header {
          gap: 8px;
          padding-right: 8px;
        }
        .fp3d-header h1 {
          display: none;
        }
        .fp3d-tab {
          padding-left: 9px;
          padding-right: 9px;
        }
        .fp3d-tab .fp3d-ui-icon {
          display: none;
        }
        .fp3d-save-text {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      /* phones (#249): one 52 px row: "3D" and "Edit" as words, Extensions and Settings as named icons (the open one
         shows its word), the save line a dot */
      @media ${z(et)} {
        .fp3d-header {
          height: 52px;
          gap: 2px;
          padding: 0 4px 0 0;
        }
        .fp3d-tab {
          padding-left: 8px;
          padding-right: 8px;
          gap: 5px;
        }
        .fp3d-tab .fp3d-ui-icon {
          display: inline;
        }
        .fp3d-tab-view .fp3d-ui-icon,
        .fp3d-tab-editor .fp3d-ui-icon,
        .fp3d-tab-editor .fp3d-tab-word,
        .fp3d-tab-ext:not([aria-current]) .fp3d-tab-word,
        .fp3d-tab-settings:not([aria-current]) .fp3d-tab-word {
          display: none;
        }
        .fp3d-tab-editor .fp3d-tab-short {
          display: inline;
        }
        .fp3d-save-text {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }
        .fp3d-notices {
          padding: 6px 8px;
        }
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the floor bar (#249): the floors in one row that scrolls sideways, then the Rooms picker; it never wraps */
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        min-height: 50px;
        box-sizing: border-box;
        flex: none;
        min-width: 0;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
      }
      .fp3d-floors {
        flex: 0 1 auto;
        min-width: 0;
        overflow-x: auto;
        scrollbar-width: none;
        box-shadow: none;
      }
      .fp3d-floors:hover {
        scrollbar-width: thin;
      }
      /* more chips past an edge: that edge fades out; the chosen chip scrolls clear of the fade (#259) */
      .fp3d-floors {
        scroll-padding-inline: 28px;
      }
      .fp3d-floors[data-more-end] {
        mask-image: linear-gradient(to right, #000 calc(100% - 28px), transparent);
      }
      .fp3d-floors[data-more-start] {
        mask-image: linear-gradient(to left, #000 calc(100% - 28px), transparent);
      }
      .fp3d-floors[data-more-start][data-more-end] {
        mask-image: linear-gradient(to right, transparent, #000 28px, #000 calc(100% - 28px), transparent);
      }
      .fp3d-floors > button {
        flex: none;
      }
      .fp3d-rooms {
        position: relative;
        flex: none;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-rooms-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        max-width: 14em;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rooms-on,
      .fp3d-rooms-btn[aria-expanded="true"] {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent) !important;
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
        .fp3d-room-open .fp3d-overlay,
        .fp3d-room-open fp3d-view-panel {
          display: none;
        }
        /* the view's own buttons (search, eye) step up above the sheet */
        .fp3d-room-open fp3d-view3d {
          --fp3d-bottom-inset: calc(55% + 8px);
        }
        /* phones: the time bar takes two rows (its height here, the safe area included); the switches, the time
           travel chip among them, stay on the screen above it (#257) */
        .fp3d-tt > * {
          --fp3d-tt-h: calc(120px + env(safe-area-inset-bottom, 0px));
        }
        @media (pointer: coarse) {
          .fp3d-tt > * {
            --fp3d-tt-h: calc(138px + env(safe-area-inset-bottom, 0px));
          }
        }
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
      }
      /* an open room panel and the View panel side by side where the stage is not wide enough to centre it (#247) */
      @container fp3d (max-width: 1180px) {
        .fp3d-room-open fp3d-view-panel {
          left: 12px;
          transform: none;
        }
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
      /* the View button opens the View panel (#247, components/view-panel.ts) above the bar; an open View panel marks it */
      .fp3d-cam-btn[aria-pressed="true"] {
        color: var(--fp3d-accent);
        box-shadow: inset 0 0 0 1px var(--fp3d-accent), var(--fp3d-shadow);
      }
      .fp3d-view-btn[aria-expanded="true"] {
        color: var(--fp3d-accent);
        box-shadow: inset 0 0 0 1px var(--fp3d-accent), var(--fp3d-shadow);
      }
      /* the time bar is under the bar: the panel goes up with it */
      .fp3d-tt fp3d-view-panel {
        bottom: calc(var(--fp3d-tt-h) + 64px);
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
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
      /* phones (#93): the bottom bar keeps one row (time travel as its symbol); touch targets 44 px */
      @media ${z(et)} {
        .fp3d-header {
          position: relative;
        }
        .fp3d-tt-label {
          display: none;
        }
        .fp3d-nav {
          position: relative;
          padding: 4px 8px;
        }
        /* the Rooms picker opens from the bar's left edge, so it stays on the screen */
        .fp3d-rooms {
          position: static;
        }
        fp3d-rooms-picker {
          left: 8px;
        }
        .fp3d-tab,
        .fp3d-overlay .fp3d-chip,
        .fp3d-overlay .fp3d-seg button,
        fp3d-view-panel .fp3d-seg button,
        .fp3d-nav .fp3d-chip {
          min-height: 44px;
        }
        .fp3d-overlay .fp3d-tt-chip {
          min-width: 44px;
          justify-content: center;
        }
      }
      /* touch screens, a tablet as much as a phone (#181): 44 px, and room for three rows of floor chips */
      @media (pointer: coarse), ${z(et)} {
        .fp3d-view-btn,
        .fp3d-rooms-btn,
        .fp3d-note-badge {
          min-width: 44px;
        }
        .fp3d-note-badge {
          height: 44px;
        }
        .fp3d-tab,
        .fp3d-floors button,
        .fp3d-overlay .fp3d-chip,
        .fp3d-overlay .fp3d-seg button,
        fp3d-view-panel .fp3d-seg button,
        .fp3d-nav .fp3d-chip {
          min-height: 44px;
        }
      }
    `]};Q("home-3d-panel",qt);function Oe(o,t){return t??o?.view==="2d"}var Ve=I("home-3d-card-editor",()=>"b9f15785b74a");function Ne(){try{let o=localStorage.getItem("home3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var Kt=class extends tt{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_plan2d:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};rawHass;hassWatch=new ut({entityLists:!1});shownHass;get hass(){let t=this.rawHass;return t&&this.hassWatch.recording?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new F(this);tt=new O(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=Ne(),this._heat=null,this._explode=null,this._plan2d=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(t=!1){clearTimeout(this.cleanTimer);let e=this._config?.controls_hide_after??0;e>0&&(t&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,e*1e3))}armIdle(){clearTimeout(this.idleTimer);let t=this._config?.idle_return??0;t>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),t*1e3))}view3d(){return _t(this.shadowRoot)}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),e=this.data.building;if(!t||!e||!this.hass)return;this._cameraWall=!1;let i=this._config;this.tt.start({live:this.hass,building:e,spec:t.historyEntities(),quality:i?.quality??"auto",speed:i?.time_travel_speed??null,range:i?.time_travel_range??null,t:(s,n)=>H(this.hass,s,n)})}onKey=t=>{t.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this._config?.room??null,this._floorId=void 0,this._plan2d=null,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let t=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(t-this._vh)>1&&(this._vh=t),this._config?.fill&&!this._fullscreen){let e=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(e-this._top)>1)&&(this._top=e)}};viewportTimer;connectedCallback(){super.connectedCallback(),bt().then(()=>this.requestUpdate(),t=>console.error("Home 3D: the 3D view failed to load",t)),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),this.viewportTimer=setTimeout(this.onViewport,600),this.armIdle(),this.armClean(),this.nightTimer=setInterval(()=>this._night=J(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.viewportTimer),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let t=this.shadowRoot?.querySelector("ha-card"),e=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};t?.requestFullscreen?t.requestFullscreen().catch(e):e()}static async getConfigElement(){return await Ve(),document.createElement("home-3d-card-editor")}static getStubConfig(){return{type:"custom:home-3d-card"}}setWalls(t){this._walls=t;try{localStorage.setItem("home3d.card_walls",t)}catch{}}setConfig(t){if(t.height!==void 0&&!(t.height>100))throw new Error("height must be a number of pixels above 100");this._config&&((this._config.home||void 0)!==(t.home||void 0)||this._config.room!==t.room)&&(this._roomId=null,this.roomApplied=!1),this._config=t,this.data.setHome(t.home||void 0),this._floorId=void 0,this._walls=Ne(),this._heat=null,this._explode=null,this._plan2d=null,this._orbit=!1,this._night=J(t.night,this.hass),this._clean=t.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}shouldUpdate(t){let e=t.get("hass"),i=this.rawHass;if(t.size!==1||!t.has("hass")||!e||!i||this.tt.active||this.hassWatch.matters(e,i)||J(this._config?.night,i)!==this._night)return!0;this.takeHass(i);let s=this.shownHass,n=s&&this.viewHass(i,this.data.building);return mt(this.renderRoot,ft["card.ts"],[[e,i],[s,n]]),this.shownHass=n,!1}update(t){this.hassWatch.begin();try{super.update(t)}finally{this.hassWatch.end()}}takeHass(t){this.data.setHass(t),this.tt.session?.setLive(t);let e=J(this._config?.night,t);e!==this._night&&(this._night=e)}viewHass(t,e){return $t(this.tt.hass(t),e)}willUpdate(t){t.has("hass")&&this.rawHass&&(this.takeHass(this.rawHass),R(this.rawHass.language)||j(this.rawHass.language,this.rawHass).then(()=>this.requestUpdate()));let e=this.data.building;e!==this.seenBuilding&&(this.seenBuilding=e,e&&this._roomId&&!e.floors.some(i=>S(i).some(s=>s.id===this._roomId))&&(this._roomId=null))}seenBuilding=null;updated(){this.toggleAttribute("light",ot(M(P(this._config?.theme),this.hass))),this.toggleAttribute("contrast",nt(M(P(this._config?.theme),this.hass)));let t=lt(this.hass);this.getAttribute("lang")!==t&&this.setAttribute("lang",t)}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}currentFloor(){let t=this.data.building,e=this._floorId===void 0?this._config?.floor??null:this._floorId;return t&&t.floors.length===1?t.floors[0].id:t?.floors.some(i=>i.id===e)?e:null}onPlanChange(t){t.preventDefault(),this.data.update(t.detail.change)}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!R(this.hass.language))return p;let t=this.data.building,e=this._config?.height??420,i=this._config;!this.roomApplied&&t&&i?.room&&(this.roomApplied=!0,t.floors.some(f=>S(f).some(L=>L.id===i.room))&&(this._roomId=i.room));let s=this.currentFloor(),n=!!this._roomId&&i?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!s&&(t?.floors.length??0)>1,r=f=>i?.controls===!0||Array.isArray(i?.controls)&&i.controls.includes(f),h=["temperature","humidity","co2"].filter(f=>r(f)),d=this._walls??i?.walls??"auto",m=this._heat??i?.heatmap??"none",c=this._explode??i?.explode??!0,l=Oe(i,this._plan2d),b=this._fullscreen?"100%":i?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${e}px`,x=!!t&&!this._clean&&(n||(!!i?.controls||!!i?.time_travel)&&!(this._roomId&&i.room_panel!==!1)),k=this.tt.active,u=this.viewHass(this.rawHass,t);this.shownHass=u;let g=i?.controls_hidden!==void 0||(i?.controls_hide_after??0)>0,$=f=>H(this.hass,f),N=dt(P(i?.theme),i?.accent,this.hass,f=>getComputedStyle(this).getPropertyValue(f));return a`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${ht(N)} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${k?"fp3d-tt":""}" style="height:${b}">
        ${t&&t.floors.some(f=>f.rooms.length)?a`<fp3d-view3d
              .hass=${u}
              .canEdit=${this.data.canEdit}
              .home=${this.data.homeId}
              .replay=${this.tt.session?.replay??null}
              .building=${t}
              .packs=${this.data.packs}
              .plan2d=${l}
              .floorId=${s}
              .roomId=${this._roomId}
              .wallMode=${d}
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
              .buttons=${this._config?.buttons?.map((f,L)=>({id:`card_${L}`,...f}))??null}
              .heatMode=${m}
              .theme=${P(this._config?.theme)}
              .clock=${this._config?.clock??null}
              .accent=${N}
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
              .cameraWall=${this._cameraWall&&!k}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${g}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${i?.weather!==!1}
              .weatherEntityId=${i?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${i?.start_view??null}
              style=${k?`--fp3d-bottom-inset: ${x?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:x?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${f=>{if(this.canSwitch&&(t?.floors.length??0)>1&&f.detail.floorId&&this.currentFloor()!==f.detail.floorId){this._floorId=f.detail.floorId,this._roomId=null;return}f.detail.roomId&&(this._roomId=f.detail.roomId===this._roomId?null:f.detail.roomId)}}
              @floor-tap=${f=>{this._floorId=f.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
              @plan-change=${this.onPlanChange}
            ></fp3d-view3d>`:a`<p class="fp3d-card-msg">${this.data.error??(t?H(this.hass,"no_building"):H(this.hass,"loading"))}</p>`}
        ${this._roomId&&t&&this._config?.room_panel!==!1?(E(D),a`<fp3d-room-panel
              @camera-look=${f=>this.view3d()?.lookThrough(f.detail.entity)}
              class="fp3d-card-panel"
              .hass=${u}
              ?readOnly=${k}
              ?noLook=${l}
              ?canEdit=${this.data.canEdit}
              @plan-change=${this.onPlanChange}
              .room=${t.floors.flatMap(f=>S(f)).find(f=>f.id===this._roomId)??null}
              .floor=${t.floors.find(f=>S(f).some(L=>L.id===this._roomId))??null}
              .building=${t}
              .confirmEntities=${st(this.hass,t.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${f=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,f.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`):p}
        ${x&&t?a`<div class="fp3d-card-controls">
              ${n?a`<button class="fp3d-chip" @click=${()=>this.back()}>${$("back")}</button>`:p}
              ${i?.time_travel?a`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${k} title=${$("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ⏪ ${$("tt_chip")}
                  </button>`:p}
              ${i?.camera_wall?a`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${$("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${$("cameras_short")}</button>`:p}
              ${r("view")?a`<div class="fp3d-seg" role="group" aria-label=${$("plan_view")}>
                    <button aria-pressed=${!l} @click=${()=>this._plan2d=!1}>${$("view_3d")}</button>
                    <button aria-pressed=${l} @click=${()=>this._plan2d=!0}>${$("view_2d")}</button>
                  </div>`:p}
              ${r("walls")&&!l?a`<div class="fp3d-seg">
                    <button aria-pressed=${d==="auto"} @click=${()=>this.setWalls("auto")}>${$("walls_auto")}</button>
                    <button aria-pressed=${d==="cut"} @click=${()=>this.setWalls("cut")}>${$("walls_cut")}</button>
                  </div>`:p}
              ${r("floors")&&!l&&t.floors.length>1&&!s?a`<div class="fp3d-seg">
                    <button aria-pressed=${c} @click=${()=>this._explode=!0}>${$("floors_apart")}</button>
                    <button aria-pressed=${!c} @click=${()=>this._explode=!1}>${$("floors_stacked")}</button>
                  </div>`:p}
              ${h.length?a`<div class="fp3d-seg" role="group" aria-label=${$("heatmap")}>
                    ${["none",...h].map(f=>a`<button aria-pressed=${m===f} @click=${()=>this._heat=f}>
                          ${$(f==="none"?"heat_off":`heat_short_${f}`)}
                        </button>`)}
                  </div>`:p}
            </div>`:p}
        ${this.tt.session?a`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:p}
        ${i?.fullscreen_button&&!this._clean&&!(this._roomId&&i.room_panel!==!1)?a`<button class="fp3d-card-full" title=${$(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${$(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":W("expand")}
            </button>`:p}
        ${i?.dashboard&&!this._clean&&!(this._roomId&&i.room_panel!==!1)?a`<button class="fp3d-card-full fp3d-card-dash ${i.fullscreen_button?"fp3d-card-dash-2":""}" title=${i.dashboard_label||i.dashboard} aria-label=${i.dashboard_label||i.dashboard} @click=${()=>this.openDashboard(i.dashboard)}>
              ${i.dashboard_label?a`<span>${i.dashboard_label}</span>`:"\u2302"}
            </button>`:p}
      </div>
    </ha-card>`}static styles=[rt,at,Z`
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
        /* the time bar takes two rows here (#257) */
        .fp3d-tt > * {
          --fp3d-tt-h: calc(120px + env(safe-area-inset-bottom, 0px));
        }
        @media (pointer: coarse) {
          .fp3d-tt > * {
            --fp3d-tt-h: calc(138px + env(safe-area-inset-bottom, 0px));
          }
        }
      }
    `]};if(Q("home-3d-card",Kt)){let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"home-3d-card",name:H(void 0,"card_name"),description:H(void 0,"card_description"),preview:!1})}ye();ue();
