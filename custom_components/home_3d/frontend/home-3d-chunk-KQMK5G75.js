import{a as X,b as ee}from"./home-3d-chunk-F2DZRDKA.js";import{E as z,G as J,c as B,g as Z}from"./home-3d-chunk-RXHBVTGT.js";import{e as te,f as ne}from"./home-3d-chunk-46T3S4P4.js";import{e as k}from"./home-3d-chunk-MXFG7YVG.js";import{a as V,c as G,d as R,f as L,g as E,h as Q,i as W}from"./home-3d-chunk-RODTF4JQ.js";import{S as O,U as Y}from"./home-3d-chunk-2FYP2ESN.js";async function Re(t,e,n,o){let l=e?t.filter(r=>e.has(r)):[];return l.length?o(l.map(n).join(", ")):!0}var A={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},P=t=>(...e)=>({_$litDirective$:t,values:e}),M=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,o){this._$Ct=e,this._$AM=n,this._$Ci=o}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var{I:Se}=Q;var F=t=>t.strings===void 0;var pe={},oe=(t,e=pe)=>t._$AH=e;var se=P(class extends M{constructor(t){if(super(t),t.type!==A.PROPERTY&&t.type!==A.ATTRIBUTE&&t.type!==A.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!F(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===L||e===E)return e;let n=t.element,o=t.name;if(t.type===A.PROPERTY){if(e===n[o])return L}else if(t.type===A.BOOLEAN_ATTRIBUTE){if(!!e===n.hasAttribute(o))return L}else if(t.type===A.ATTRIBUTE&&n.getAttribute(o)===e+"")return L;return oe(t),e}});var H=(t,e)=>{let n=t._$AN;if(n===void 0)return!1;for(let o of n)o._$AO?.(e,!1),H(o,e);return!0},N=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},re=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),he(e)}};function fe(t){this._$AN!==void 0?(N(this),this._$AM=t,re(this)):this._$AM=t}function me(t,e=!1,n=0){let o=this._$AH,l=this._$AN;if(l!==void 0&&l.size!==0)if(e)if(Array.isArray(o))for(let r=n;r<o.length;r++)H(o[r],!1),N(o[r]);else o!=null&&(H(o,!1),N(o));else H(this,t)}var he=t=>{t.type==A.CHILD&&(t._$AP??=me,t._$AQ??=fe)},S=class extends M{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,o){super._$AT(e,n,o),re(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(H(this,e),N(this))}setValue(e){if(F(this._$Ct))this._$Ct._$AI(e,this);else{let n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};var ge='a[href], button, input, select, textarea, summary, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';function be(t,e,n,o){if(!t.length)return null;let l=t[0],r=t[t.length-1],i=e===null?-1:t.indexOf(e);return i<0?o?null:n?r:l:n&&i===0?r:!n&&i===t.length-1?l:null}function ie(t){return[...t.querySelectorAll(ge)].filter(e=>!e.disabled&&e.tabIndex>=0&&e.getClientRects().length>0&&!e.closest("[inert]"))}function ae(t){return t.getRootNode().activeElement??null}function q(t,e){if(t.key!=="Tab"||t.altKey||t.ctrlKey||t.metaKey)return;let n=ie(e),o=ae(e),l=!!o&&o!==e&&e.contains(o),r=n.length?be(n,l?o:null,t.shiftKey,l):e;r&&(t.preventDefault(),r.focus())}function ye(t=document){let e=t.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function xe(t){return t.hasAttribute("tabindex")?t:ie(t)[0]??null}var D=class extends S{box=null;back=null;onKey=e=>{this.box&&q(e,this.box)};constructor(e){if(super(e),e.type!==A.ELEMENT)throw new Error("modalFocus() goes on the dialog element")}render(){return E}update(e){let n=e.element;return n!==this.box&&(this.release(!1),this.box=n,this.back=ye(),n.addEventListener("keydown",this.onKey),requestAnimationFrame(()=>{if(this.box!==n||!n.isConnected)return;let o=ae(n);(!o||o===n||!n.contains(o))&&xe(n)?.focus()})),E}release(e){this.box?.removeEventListener("keydown",this.onKey);let n=this.back;this.box=null,this.back=null,e&&n?.isConnected&&n.focus()}disconnected(){this.release(!0)}reconnected(){}},dt=P(D);var le="fp3d-ask-dialog";function _e(){let t=document.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function ve(){let t=document.fullscreenElement;for(;t?.shadowRoot?.fullscreenElement;)t=t.shadowRoot.fullscreenElement;return t??document.body}var U=class extends W{queue=new X;typed="";shown=null;returnFocus=null;constructor(){super(),this.queue.onChange=()=>this.requestUpdate()}ask(e){return this.queue.ask(e)}answer(e){let n=this.queue.current;n&&this.queue.answer(e||n.cancel===void 0,n.input!==void 0?this.typed:"")}key(e){e.stopPropagation(),e.key==="Escape"?(e.preventDefault(),this.answer(!1)):e.key==="Enter"&&e.target.tagName==="INPUT"?(e.preventDefault(),this.answer(!0)):q(e,e.currentTarget)}willUpdate(){let e=this.queue.current;e!==this.shown&&(e&&!this.shown&&(this.returnFocus=_e()),this.typed=e?.input??"",this.toggleAttribute("open",!!e))}updated(){let e=this.queue.current;if(e===this.shown)return;if(this.shown=e,!e){this.returnFocus?.focus?.(),this.returnFocus=null;return}let n=this.renderRoot.querySelector("input");n?(n.focus(),n.select()):this.renderRoot.querySelector(e.danger&&e.cancel!==void 0?".ask-cancel":".ask-ok")?.focus()}render(){let e=this.queue.current;return e?R`<div class="backdrop" @click=${()=>this.answer(!1)}></div>
      <div class="box ${e.detail!==void 0?"wide":""}" role=${e.cancel===void 0?"dialog":"alertdialog"} aria-modal="true" aria-describedby="ask-text" @keydown=${n=>this.key(n)}>
        <p id="ask-text" class="text">${e.text}</p>
        ${e.detail!==void 0?R`<textarea class="detail" readonly rows="14" spellcheck="false" aria-labelledby="ask-text" .value=${e.detail}></textarea>`:E}
        ${e.input!==void 0?R`<label class="fp3d-field"><input type="text" aria-labelledby="ask-text" .value=${se(this.typed)} @input=${n=>this.typed=n.target.value} /></label>`:E}
        <div class="buttons">
          ${e.cancel!==void 0?R`<button class="fp3d-btn ask-cancel" @click=${()=>this.answer(!1)}>${e.cancel}</button>`:E}
          <button class="fp3d-btn ask-ok ${e.danger?"ask-danger":"fp3d-primary"}" @click=${()=>this.answer(!0)}>${e.ok}</button>
        </div>
      </div>`:E}static styles=[te,ne,G`
      :host {
        position: fixed;
        inset: 0;
        z-index: 10000;
        display: none;
      }
      :host([open]) {
        display: block;
      }
      .backdrop {
        position: absolute;
        inset: 0;
        background: rgba(4, 8, 16, 0.55);
      }
      .box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(400px, calc(100% - 32px));
        max-height: calc(100% - 40px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 18px 18px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
      }
      .box.wide {
        width: min(720px, calc(100% - 32px));
      }
      .detail {
        font: 12px/1.45 ui-monospace, monospace;
        color: var(--fp3d-text);
        background: rgba(127, 127, 127, 0.08);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
        min-height: 160px;
        max-height: 55vh;
        resize: vertical;
      }
      .text {
        margin: 0;
        font-size: 1rem;
        line-height: 1.45;
        white-space: pre-line;
        overflow-wrap: anywhere;
      }
      .fp3d-field input {
        font-size: 16px; /* 16 px: phones do not zoom into the field */
        padding: 9px 10px;
      }
      .buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;
      }
      .buttons .fp3d-btn {
        min-height: 40px;
        min-width: 88px;
      }
      .ask-danger {
        background: var(--fp3d-danger);
        color: #1a0208;
        border-color: transparent;
      }
      button:focus-visible,
      textarea:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};V(le,U);var C=null;ee(()=>typeof document>"u"?null:{ask(t){C??=document.createElement(le);let e=ve();return C.parentNode!==e&&!C.queue?.current&&e.appendChild(C),C.ask(t)}});function Ae(t){return t?.settings.person_look??"figure"}function kt(t){return Ae(t)!=="off"}var ce=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function K(t){let e=0;for(let n of t)e=e*31+n.charCodeAt(0)>>>0;return ce[e%ce.length]}var ue=t=>t.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Ee(t,e,n){let o=ue(n);if(!o||o==="unknown"||o==="unavailable"||o==="not home"||o==="away")return null;for(let l of e.floors)for(let r of l.rooms)if([r.name,r.area_id??"",r.area_id?t.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(ue).includes(o))return{floorId:l.id,room:r};return null}function de(t){let e=t.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function we(t){return!["home","on","unknown","unavailable",""].includes(t)}function Mt(t,e){let n=[],o=new Map;for(let l of e.presence){let r=t.states[l.person];if(!r||!l.sensor||r.state!=="home"&&r.state!=="on")continue;let i=t.states[l.sensor];if(!i)continue;let u=Ee(t,e,i.state);if(!u)continue;let p=o.get(u.room.id)??0;o.set(u.room.id,p+1);let[a,f]=O(u.room.points),s=-Math.PI/2+.9+p*1.15,d=.75,c=r.attributes.friendly_name??l.person;n.push({id:l.person,name:c,initials:de(c),picture:r.attributes.entity_picture??null,floorId:u.floorId,roomId:u.room.id,x:a+Math.cos(s)*d,z:f+Math.sin(s)*d})}return n}function It(t,e,n=new Set,o=Date.now()){let l=[];for(let[s,d]of Object.entries(t.states)){let c=d.attributes;if(!s.startsWith("sensor.")||c.home3d_locate!==!0||typeof c.room_id!="string")continue;let g=null;for(let x of e.floors){let b=x.rooms.find(y=>y.id===c.room_id);b&&(g={floorId:x.id,room:b})}if(!g)continue;let _=typeof c.last_seen=="string"?Date.parse(c.last_seen):NaN,m=typeof c.since=="string"?Date.parse(c.since):NaN;l.push({entityId:s,name:typeof c.device_name=="string"?c.device_name:s,person:typeof c.person=="string"?c.person:null,floorId:g.floorId,room:g.room,seen:Number.isFinite(_)?_:0,since:Number.isFinite(m)?m:0,probability:typeof c.probability=="number"?c.probability:0,worn:c.wearable===!0})}let r=[],i=new Map,u=new Map,p=(s,d)=>{let c=i.get(s.room.id)??0;if(i.set(s.room.id,c+1),!d.thing){let x=u.get(s.room.id);x||u.set(s.room.id,x=Ie(t,e,s.floorId,s.room));let b=x.shift();if(b){r.push({...d,floorId:s.floorId,roomId:s.room.id,x:b[0],z:b[1]});return}}let[g,_]=O(s.room.points),m=-Math.PI/2+.9+c*1.15;r.push({...d,floorId:s.floorId,roomId:s.room.id,x:g+Math.cos(m)*.75,z:_+Math.sin(m)*.75})},a=(s,d)=>p(s,{id:s.entityId,name:s.name,initials:s.name.slice(0,1).toUpperCase(),picture:null,color:d,entity:s.entityId,tag:s.name,thing:!0}),f=new Map;for(let s of l)s.person?f.set(s.person,[...f.get(s.person)??[],s]):a(s,K(s.entityId));for(let[s,d]of f){if(n.has(s))continue;let c=t.states[s];if(c&&we(c.state))continue;let g=h=>h.reduce((v,w)=>w.seen>v.seen?w:v),_=d.filter(h=>h.worn&&o-h.seen<12e4),m=g(_.length?_:d),x=h=>o-h.seen<3e4&&o-m.seen<3e4&&h.since>=m.since-12e4,b=null;if(m.worn){let h=d.filter(w=>!w.worn&&w.room.id!==m.room.id&&x(w)),v=h.length?h.reduce((w,j)=>j.probability>w.probability?j:w):null;v&&o-m.since>=6e5&&v.since>m.since+12e4?(b=m,m=v):v&&v.probability>m.probability+.15&&(m=v)}let y=c?.attributes.friendly_name??m.name;p(m,{id:s,name:y,initials:de(y),picture:c?.attributes.entity_picture??null,color:K(s),entity:m.entityId,tag:y.split(/\s+/)[0]});for(let h of d)h===m||h.room.id===m.room.id||h!==b&&(h.worn&&o-h.seen<12e4||x(h))||a(h,K(s))}return r}var $e=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],Te=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function ke(t,e){let n=[],[o,l]=O(e.points),r=(i,u)=>i.points.some((p,a)=>{let f=i.points[(a+1)%i.points.length],[s,d]=[f[0]-p[0],f[1]-p[1]],c=s*s+d*d||1,g=Math.max(0,Math.min(1,((u[0]-p[0])*s+(u[1]-p[1])*d)/c));return Math.hypot(p[0]+g*s-u[0],p[1]+g*d-u[1])<.3});for(let i of t.openings){if(i.wall||i.type==="window"&&i.sill>.3||i.type==="garage")continue;let u=t.rooms.find(g=>g.id===i.room_id);if(!u)continue;let p=u.points[i.edge],a=u.points[(i.edge+1)%u.points.length];if(!p||!a)continue;let f=Math.hypot(a[0]-p[0],a[1]-p[1])||1,s=[p[0]+(a[0]-p[0])*i.offset/f,p[1]+(a[1]-p[1])*i.offset/f];if(!r(e,s))continue;let d=t.rooms.find(g=>g.id!==e.id&&r(g,s)),c=.6/(Math.hypot(o-s[0],l-s[1])||1);n.push({to:d?I(d.name):null,spot:[s[0]+(o-s[0])*c,s[1]+(l-s[1])*c]})}return n}var Me=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],I=t=>t.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function Ie(t,e,n,o){let l=e.floors.find(a=>a.id===n);if(!l||!o.area_id)return[];let r=l.furniture.filter(a=>Y([a.x,a.z],o.points)),i=ke(l,o),u=[],p=new Set([...I(o.name),...I(t.areas?.[o.area_id]?.name??""),...I(o.area_id),...Me]);for(let[a,f]of Object.entries(t.states)){if(!a.startsWith("binary_sensor.")||f.state!=="on")continue;let s=f.attributes.device_class;if(s!=="occupancy"&&s!=="presence")continue;let d=t.entities?.[a];if((d?.area_id??(d?.device_id?t.devices?.[d.device_id]?.area_id:null))!==o.area_id)continue;let g=new Set(I(String(f.attributes.friendly_name??a.slice(14))).filter(b=>!p.has(b))),_=r.find(b=>b.name&&I(b.name).some(y=>g.has(y))||$e.some(([y,h])=>y.test(b.type.split(":").pop()??"")&&h.some(v=>g.has(v)))),m=_?null:i.find(b=>b.to?b.to.some(y=>g.has(y)):[...g].some(y=>Te.some(h=>y.includes(h)))),x=_?[_.x,_.z]:m?m.spot:null;x&&!u.some(([b,y])=>b===x[0]&&y===x[1])&&u.push(x)}return u}function Rt(t,e,n,o){let l=new Map,r=i=>!!i&&t.states[i]?.state==="on";for(let i of e.floors){let u=new Set;for(let a of i.rooms)for(let f of J(t,Z(t,a.area_id)))B(f)==="light"&&u.add(f);for(let a of i.placements)B(a.entity_id)==="light"&&u.add(a.entity_id);let p=i.openings.filter(a=>{let f=n.get(a.id);if(!f)return!1;if(a.type==="garage")return(z(t,f,"garage").cover??1)<.95;if(a.type==="door")return r(f.contact)||r(f.contact2??null);let s=z(t,f,"window");return s.open>.5||s.tilt>.5||s.open2>.5||s.tilt2>.5}).length;l.set(i.id,{rooms:i.rooms.length,lightsOn:[...u].filter(a=>t.states[a]?.state==="on").length,open:p,persons:o.filter(a=>a.floorId===i.id).length})}return l}function Lt(t,e){let n=[e.rooms===1?k(t,"floor_rooms_one"):k(t,"floor_rooms",{n:e.rooms})];return e.lightsOn&&n.push(k(t,"floor_lights",{n:e.lightsOn})),e.open&&n.push(k(t,"floor_open",{n:e.open})),e.persons&&n.push(k(t,"floor_persons",{n:e.persons})),n.join(" \xB7 ")}export{Re as a,A as b,P as c,M as d,Ae as e,kt as f,Mt as g,It as h,Rt as i,Lt as j};
