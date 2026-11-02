import{a as M,b as R,c as P,d as C,e as I,f as q,g as N}from"./home-3d-settings-chunk-AZLGU35S.js";import{a as m,b as f,c as a,e as u,f as r,g as L,h as v,k as b,l as x}from"./home-3d-settings-chunk-UBHQG3QB.js";import{a as D,b as B,d as A,e as w}from"./home-3d-settings-chunk-BXXCJ5GB.js";var l={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c=s=>(...e)=>({_$litDirective$:s,values:e}),d=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:oe}=L;var g=s=>s.strings===void 0;var V={},U=(s,e=V)=>s._$AH=e;var S=c(class extends d{constructor(s){if(super(s),s.type!==l.PROPERTY&&s.type!==l.ATTRIBUTE&&s.type!==l.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!g(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[e]){if(e===u||e===r)return e;let t=s.element,i=s.name;if(s.type===l.PROPERTY){if(e===t[i])return u}else if(s.type===l.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(i))return u}else if(s.type===l.ATTRIBUTE&&t.getAttribute(i)===e+"")return u;return U(s),e}});var p=(s,e)=>{let t=s._$AN;if(t===void 0)return!1;for(let i of t)i._$AO?.(e,!1),p(i,e);return!0},y=s=>{let e,t;do{if((e=s._$AM)===void 0)break;t=e._$AN,t.delete(s),s=e}while(t?.size===0)},F=s=>{for(let e;e=s._$AM;s=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(s))break;t.add(s),Y(e)}};function j(s){this._$AN!==void 0?(y(this),this._$AM=s,F(this)):this._$AM=s}function Q(s,e=!1,t=0){let i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let o=t;o<i.length;o++)p(i[o],!1),y(i[o]);else i!=null&&(p(i,!1),y(i));else p(this,s)}var Y=s=>{s.type==l.CHILD&&(s._$AP??=Q,s._$AQ??=j)},_=class extends d{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),F(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(p(this,e),y(this))}setValue(e){if(g(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var G='a[href], button, input, select, textarea, summary, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';function J(s,e,t,i){if(!s.length)return null;let n=s[0],o=s[s.length-1],$=e===null?-1:s.indexOf(e);return $<0?i?null:t?o:n:t&&$===0?o:!t&&$===s.length-1?n:null}function O(s){return[...s.querySelectorAll(G)].filter(e=>!e.disabled&&e.tabIndex>=0&&e.getClientRects().length>0&&!e.closest("[inert]"))}function K(s){return s.getRootNode().activeElement??null}function T(s,e){if(s.key!=="Tab"||s.altKey||s.ctrlKey||s.metaKey)return;let t=O(e),i=K(e),n=!!i&&i!==e&&e.contains(i),o=t.length?J(t,n?i:null,s.shiftKey,n):e;o&&(s.preventDefault(),o.focus())}function W(s=document){let e=s.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function X(s){return s.hasAttribute("tabindex")?s:O(s)[0]??null}var E=class extends _{box=null;back=null;onKey=e=>{this.box&&T(e,this.box)};constructor(e){if(super(e),e.type!==l.ELEMENT)throw new Error("modalFocus() goes on the dialog element")}render(){return r}update(e){let t=e.element;return t!==this.box&&(this.release(!1),this.box=t,this.back=W(),t.addEventListener("keydown",this.onKey),requestAnimationFrame(()=>{if(this.box!==t||!t.isConnected)return;let i=K(t);(!i||i===t||!t.contains(i))&&X(t)?.focus()})),r}release(e){this.box?.removeEventListener("keydown",this.onKey);let t=this.back;this.box=null,this.back=null,e&&t?.isConnected&&t.focus()}disconnected(){this.release(!0)}reconnected(){}},$e=c(E);var z="fp3d-ask-dialog";function Z(){let s=document.activeElement;for(;s?.shadowRoot?.activeElement;)s=s.shadowRoot.activeElement;return s}function ee(){let s=document.fullscreenElement;for(;s?.shadowRoot?.fullscreenElement;)s=s.shadowRoot.fullscreenElement;return s??document.body}var k=class extends v{queue=new D;typed="";shown=null;returnFocus=null;constructor(){super(),this.queue.onChange=()=>this.requestUpdate()}ask(e){return this.queue.ask(e)}answer(e){let t=this.queue.current;t&&this.queue.answer(e||t.cancel===void 0,t.input!==void 0?this.typed:"")}key(e){e.stopPropagation(),e.key==="Escape"?(e.preventDefault(),this.answer(!1)):e.key==="Enter"&&e.target.tagName==="INPUT"?(e.preventDefault(),this.answer(!0)):T(e,e.currentTarget)}willUpdate(){let e=this.queue.current;e!==this.shown&&(e&&!this.shown&&(this.returnFocus=Z()),this.typed=e?.input??"",this.toggleAttribute("open",!!e))}updated(){let e=this.queue.current;if(e===this.shown)return;if(this.shown=e,!e){this.returnFocus?.focus?.(),this.returnFocus=null;return}let t=this.renderRoot.querySelector("input");t?(t.focus(),t.select()):this.renderRoot.querySelector(e.danger&&e.cancel!==void 0?".ask-cancel":".ask-ok")?.focus()}render(){let e=this.queue.current;return e?a`<div class="backdrop" @click=${()=>this.answer(!1)}></div>
      <div class="box ${e.detail!==void 0?"wide":""}" role=${e.cancel===void 0?"dialog":"alertdialog"} aria-modal="true" aria-describedby="ask-text" @keydown=${t=>this.key(t)}>
        <p id="ask-text" class="text">${e.text}</p>
        ${e.detail!==void 0?a`<textarea class="detail" readonly rows="14" spellcheck="false" aria-labelledby="ask-text" .value=${e.detail}></textarea>`:r}
        ${e.input!==void 0?a`<label class="fp3d-field"><input type="text" aria-labelledby="ask-text" .value=${S(this.typed)} @input=${t=>this.typed=t.target.value} /></label>`:r}
        <div class="buttons">
          ${e.cancel!==void 0?a`<button class="fp3d-btn ask-cancel" @click=${()=>this.answer(!1)}>${e.cancel}</button>`:r}
          <button class="fp3d-btn ask-ok ${e.danger?"ask-danger":"fp3d-primary"}" @click=${()=>this.answer(!0)}>${e.ok}</button>
        </div>
      </div>`:r}static styles=[b,x,f`
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
    `]};m(z,k);var h=null;B(()=>typeof document>"u"?null:{ask(s){h??=document.createElement(z);let e=ee();return h.parentNode!==e&&!h.queue?.current&&e.appendChild(h),h.ask(s)}});function te(s,e,t,i){let n=[];return s.id!==i&&n.push("open"),s.id!==t&&n.push("show"),n.push("rename","duplicate"),e.length>1&&n.push("delete"),n}function se(s,e){return s!=null&&s.trim().toLocaleLowerCase()===e.trim().toLocaleLowerCase()}var H=class extends v{static properties={hass:{attribute:!1},home:{attribute:!1},t:{attribute:!1},_homes:{state:!0},_active:{state:!0}};loaded=!1;constructor(){super(),this.home=null,this.t=e=>e,this._homes=null,this._active=null}willUpdate(e){this.hass&&(!this.loaded||e.has("home")&&e.get("home")!==void 0)&&(this.loaded=!0,M(this.hass).then(t=>this.listed(t),()=>this._homes=null))}listed(e){this._homes=e.homes,this._active=e.active??null,this.dispatchEvent(new CustomEvent("fp3d-homes-changed",{bubbles:!0,composed:!0}))}async run(e){try{let t=await e();return this.listed(t),t}catch(t){return await w(this.t("home_failed",{error:String(t?.message??t)}),{ok:this.t("ask_ok")}),null}}open(e){this.dispatchEvent(new CustomEvent("home-open",{detail:{home:e},bubbles:!0,composed:!0}))}named(e){return A(this.t("home_name_prompt"),e,{ok:this.t("ask_ok"),cancel:this.t("cancel")})}async create(){let e=this.hass,t=await this.named(this.t("home_new_name")),i=t&&e?await this.run(()=>R(e,t)):null;i&&this.open(i.home.id)}async sample(){let e=this.hass,t=e?await this.run(()=>P(e)):null;t&&this.open(t.home.id)}async act(e,t){let i=this.hass;if(i)if(e==="open")this.open(t.id===this._active?null:t.id);else if(e==="show")await this.run(()=>N(i,t.id))&&t.id===this.home&&this.open(null);else if(e==="rename"){let n=await this.named(t.name);n&&n!==t.name&&await this.run(()=>C(i,t.id,n))}else if(e==="duplicate"){let n=await this.named(this.t("home_copy_name",{name:t.name})),o=n?await this.run(()=>I(i,t.id,n)):null;o&&this.open(o.home.id)}else{let n=await A(this.t("home_delete_type",{name:t.name}),"",{ok:this.t("delete"),cancel:this.t("cancel"),danger:!0});if(n===null)return;if(!se(n,t.name)){await w(this.t("home_delete_mismatch",{name:t.name}),{ok:this.t("ask_ok")});return}await this.run(()=>q(i,t.id))&&t.id===this.home&&this.open(null)}}render(){let e=this._homes;return e?a`<div class="bar">
        <button class="fp3d-btn" @click=${()=>{this.create()}}>${this.t("st_homes_new")}</button>
        <button class="fp3d-btn" @click=${()=>{this.sample()}}>${this.t("home_sample")}</button>
      </div>
      <ul>
        ${e.map(t=>a`<li class=${t.id===this.home?"shown":""}>
            <div class="what">
              <b>${t.name}</b>
              <span class="badges"
                >${t.id===this._active?a`<i class="live">${this.t("home_active_badge")}</i>`:r}${t.id===this.home?a`<i>${this.t("st_homes_shown")}</i>`:r}</span
              >
              <span class="sub">${this.t("st_homes_counts",{floors:t.floors,rooms:t.rooms,furniture:t.furniture})}</span>
            </div>
            <div class="acts">
              ${te(t,e,this._active,this.home).map(i=>a`<button class="fp3d-btn ${i==="delete"?"fp3d-danger":""}" @click=${()=>{this.act(i,t)}}>${this.t(`st_homes_${i}`)}</button>`)}
            </div>
          </li>`)}
      </ul>`:a`<p class="sub">${this.t("st_homes_none")}</p>`}static styles=[b,x,f`:host{display:block}.bar{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px}ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}li{display:grid;gap:8px;padding:10px 12px;border:1px solid var(--fp3d-line,rgba(127,127,127,0.4));border-radius:10px}li.shown{border-color:var(--fp3d-accent,#03a9f4)}.what{display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px}.badges i{font-style:normal;font-size:12px;margin-right:6px;padding:1px 8px;border-radius:999px;border:1px solid var(--fp3d-line,rgba(127,127,127,0.4))}.badges i.live{border-color:#ff5d6c}.sub{color:var(--fp3d-muted,#94a3b8);font-size:12.5px}.acts{display:flex;flex-wrap:wrap;gap:6px}button{min-height:36px}@media (pointer:coarse){button{min-height:44px}}`]};m("fp3d-homes-page",H);export{H as Fp3dHomesPage,se as namesHome,te as rowActions};
