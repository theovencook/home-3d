var bb=Symbol.for("home-3d.custom-elements");function Ac(){let o=globalThis;return o[bb]??={defined:new Map,watching:!1}}function Ic(){let o=globalThis.customElements;if(o){for(let[t,e]of Ac().defined)if(e.registry!==o&&(e.registry=o,!o.get(t)))try{o.define(t,e.cls)}catch(n){console.warn(`Home 3D: could not define ${t} in the page's element registry`,n)}}}function Xt(o,t){Ic();let e=globalThis.customElements;if(e.get(o))return!1;e.define(o,t);let n=Ac();return n.defined.set(o,{cls:t,registry:e}),n.watching||(n.watching=!0,e.whenDefined("home-assistant").then(Ic)),!0}var jo=globalThis,Bo=jo.ShadowRoot&&(jo.ShadyCSS===void 0||jo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qr=Symbol(),zc=new WeakMap,Li=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Bo&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=zc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&zc.set(e,t))}return t}toString(){return this.cssText}},We=o=>new Li(typeof o=="string"?o:o+"",void 0,Qr),lt=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,i,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new Li(e,o,Qr)},Oc=(o,t)=>{if(Bo)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=jo.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,o.appendChild(n)}},Jr=Bo?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return We(e)})(o):o;var{is:_b,defineProperty:yb,getOwnPropertyDescriptor:vb,getOwnPropertyNames:xb,getOwnPropertySymbols:wb,getPrototypeOf:kb}=Object,Ko=globalThis,Tc=Ko.trustedTypes,$b=Tc?Tc.emptyScript:"",Mb=Ko.reactiveElementPolyfillSupport,Ci=(o,t)=>o,Xr={toAttribute(o,t){switch(t){case Boolean:o=o?$b:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Cc=(o,t)=>!_b(o,t),Lc={attribute:!0,type:String,converter:Xr,reflect:!1,useDefault:!1,hasChanged:Cc};Symbol.metadata??=Symbol("metadata"),Ko.litPropertyMetadata??=new WeakMap;var Ne=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Lc){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&yb(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:s}=vb(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){let a=i?.call(this);s?.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Lc}static _$Ei(){if(this.hasOwnProperty(Ci("elementProperties")))return;let t=kb(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ci("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ci("properties"))){let e=this.properties,n=[...xb(e),...wb(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Jr(i))}else t!==void 0&&e.push(Jr(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Oc(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:Xr).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let s=n.getPropertyOptions(i),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Xr;this._$Em=i;let a=r.fromAttribute(e,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,s){if(t!==void 0){let r=this.constructor;if(i===!1&&(s=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??Cc)(s,e)||n.useDefault&&n.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:s},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,s]of n){let{wrapped:r}=s,a=this[i];r!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Ne.elementStyles=[],Ne.shadowRootOptions={mode:"open"},Ne[Ci("elementProperties")]=new Map,Ne[Ci("finalized")]=new Map,Mb?.({ReactiveElement:Ne}),(Ko.reactiveElementVersions??=[]).push("2.1.2");var ta=globalThis,Hc=o=>o,Uo=ta.trustedTypes,Dc=Uo?Uo.createPolicy("lit-html",{createHTML:o=>o}):void 0,ea="$lit$",je=`lit$${Math.random().toFixed(9).slice(2)}$`,na="?"+je,Eb=`<${na}>`,$n=document,Di=()=>$n.createComment(""),Vi=o=>o===null||typeof o!="object"&&typeof o!="function",ia=Array.isArray,Kc=o=>ia(o)||typeof o?.[Symbol.iterator]=="function",Zr=`[ 	
\f\r]`,Hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vc=/-->/g,Wc=/>/g,wn=RegExp(`>|${Zr}(?:([^\\s"'>=/]+)(${Zr}*=${Zr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nc=/'/g,jc=/"/g,Uc=/^(?:script|style|textarea|title)$/i,oa=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),m=oa(1),A=oa(2),Cv=oa(3),Nt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Bc=new WeakMap,kn=$n.createTreeWalker($n,129);function Gc(o,t){if(!ia(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dc!==void 0?Dc.createHTML(t):t}var qc=(o,t)=>{let e=o.length-1,n=[],i,s=t===2?"<svg>":t===3?"<math>":"",r=Hi;for(let a=0;a<e;a++){let l=o[a],c,d,u=-1,h=0;for(;h<l.length&&(r.lastIndex=h,d=r.exec(l),d!==null);)h=r.lastIndex,r===Hi?d[1]==="!--"?r=Vc:d[1]!==void 0?r=Wc:d[2]!==void 0?(Uc.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=wn):d[3]!==void 0&&(r=wn):r===wn?d[0]===">"?(r=i??Hi,u=-1):d[1]===void 0?u=-2:(u=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?wn:d[3]==='"'?jc:Nc):r===jc||r===Nc?r=wn:r===Vc||r===Wc?r=Hi:(r=wn,i=void 0);let p=r===wn&&o[a+1].startsWith("/>")?" ":"";s+=r===Hi?l+Eb:u>=0?(n.push(c),l.slice(0,u)+ea+l.slice(u)+je+p):l+je+(u===-2?a:p)}return[Gc(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Wi=class o{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let s=0,r=0,a=t.length-1,l=this.parts,[c,d]=qc(t,e);if(this.el=o.createElement(c,n),kn.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=kn.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(ea)){let h=d[r++],p=i.getAttribute(u).split(je),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?qo:f[1]==="?"?Yo:f[1]==="@"?Qo:En}),i.removeAttribute(u)}else u.startsWith(je)&&(l.push({type:6,index:s}),i.removeAttribute(u));if(Uc.test(i.tagName)){let u=i.textContent.split(je),h=u.length-1;if(h>0){i.textContent=Uo?Uo.emptyScript:"";for(let p=0;p<h;p++)i.append(u[p],Di()),kn.nextNode(),l.push({type:2,index:++s});i.append(u[h],Di())}}}else if(i.nodeType===8)if(i.data===na)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(je,u+1))!==-1;)l.push({type:7,index:s}),u+=je.length-1}s++}}static createElement(t,e){let n=$n.createElement("template");return n.innerHTML=t,n}};function Mn(o,t,e=o,n){if(t===Nt)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,s=Vi(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=Mn(o,i._$AS(o,t.values),i,n)),t}var Go=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??$n).importNode(e,!0);kn.currentNode=i;let s=kn.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new oi(s,s.nextSibling,this,t):l.type===1?c=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(c=new Jo(s,this,t)),this._$AV.push(c),l=n[++a]}r!==l?.index&&(s=kn.nextNode(),r++)}return kn.currentNode=$n,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},oi=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Mn(this,t,e),Vi(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==Nt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kc(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&Vi(this._$AH)?this._$AA.nextSibling.data=t:this.T($n.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Wi.createElement(Gc(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let s=new Go(i,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Bc.get(t.strings);return e===void 0&&Bc.set(t.strings,e=new Wi(t)),e}k(t){ia(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let s of t)i===e.length?e.push(n=new o(this.O(Di()),this.O(Di()),this,this.options)):n=e[i],n._$AI(s),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Hc(t).nextSibling;Hc(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},En=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(t,e=this,n,i){let s=this.strings,r=!1;if(s===void 0)t=Mn(this,t,e,0),r=!Vi(t)||t!==this._$AH&&t!==Nt,r&&(this._$AH=t);else{let a=t,l,c;for(t=s[0],l=0;l<s.length-1;l++)c=Mn(this,a[n+l],e,l),c===Nt&&(c=this._$AH[l]),r||=!Vi(c)||c!==this._$AH[l],c===y?t=y:t!==y&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}r&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},qo=class extends En{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},Yo=class extends En{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},Qo=class extends En{constructor(t,e,n,i,s){super(t,e,n,i,s),this.type=5}_$AI(t,e=this){if((t=Mn(this,t,e,0)??y)===Nt)return;let n=this._$AH,i=t===y&&n!==y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Jo=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Mn(this,t)}},Yc={M:ea,P:je,A:na,C:1,L:qc,R:Go,D:Kc,V:Mn,I:oi,H:En,N:Yo,U:Qo,B:qo,F:Jo},Sb=ta.litHtmlPolyfillSupport;Sb?.(Wi,oi),(ta.litHtmlVersions??=[]).push("3.3.3");var Qc=(o,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let s=e?.renderBefore??null;n._$litPart$=i=new oi(t.insertBefore(Di(),s),s,void 0,e??{})}return i._$AI(o),i};var sa=globalThis,zt=class extends Ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Qc(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Nt}};zt._$litElement$=!0,zt.finalized=!0,sa.litElementHydrateSupport?.({LitElement:zt});var Pb=sa.litElementPolyfillSupport;Pb?.({LitElement:zt});(sa.litElementVersions??=[]).push("4.2.2");var Jc=lt`
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
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr var(--fp3d-side-w, 320px);
        height: 100%;
        min-height: 0;
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
        /* open over the 3D pane: above the toolbar too, so its buttons never sit on the sidebar's */
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
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        /* nothing of the plan column reaches over the sidebar (its menus still hang down) */
        overflow-x: clip;
        display: grid;
        grid-template-rows: auto 1fr;
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
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
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
`;var Xc=lt`
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
`;var Zc=lt`
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
`;var td=lt`
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
`;var ed=lt`
      /* a group with a menu lets it hang out below (the others scroll sideways on a narrow screen) */
      .fp3d-seg.fp3d-seg-menu {
        overflow: visible;
        /* too narrow for a group: its buttons wrap (they never reach over the sidebar) */
        flex-wrap: wrap;
        max-width: 100%;
      }
      .fp3d-seg > button.fp3d-undo {
        font-size: 20px;
        line-height: 1;
        padding-inline: 12px;
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
      .fp3d-seg-settings {
        margin-left: auto;
      }
      .fp3d-menu-right {
        right: 0;
        left: auto;
      }
      .fp3d-narrow .fp3d-settings-word {
        display: none;
      }
      .fp3d-help-btn {
        min-width: 34px;
        font-weight: 700;
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
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
`;var Xo="(max-width: 600px)";var nd=lt`
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
      .fp3d-phone-hint {
        display: none;
      }
      @media ${We(Xo)} {
        .fp3d-phone-hint {
          position: absolute;
          top: 8px;
          left: 8px;
          /* the plan may be wider than the phone: stay on the screen */
          width: calc(min(100%, 100vw) - 16px);
          box-sizing: border-box;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 6px 6px 12px;
          border-radius: 12px;
          background: var(--fp3d-chrome-solid);
          border: 1px solid var(--fp3d-accent);
          font-size: 13px;
        }
      }
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
`;var id=lt`
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
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
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
      .fp3d-shift input {
        width: 5.5em;
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
        background-color: var(--fp3d-panel, #0d1424);
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
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
      /* phones (#94): drawing is for a PC or tablet (the banner says so), but the plan keeps a usable height
         whatever the toolbar wraps to, and the toolbar packs tighter */
      @media ${We(Xo)} {
        .fp3d-editor.fp3d-narrow {
          grid-template-rows: auto auto;
        }
        .fp3d-narrow .fp3d-canvas-wrap {
          min-height: max(320px, 52vh);
        }
        .fp3d-toolbar {
          gap: 4px 6px;
          padding: 6px 8px;
        }
        .fp3d-toolbar .fp3d-seg > button,
        .fp3d-toolbar .fp3d-menu-wrap > button {
          padding: 6px 10px;
          font-size: 13.5px;
        }
        /* the floor menu and ⚙ share the first row; the tools, undo and the view buttons follow */
        .fp3d-toolbar > * {
          order: 2;
        }
        .fp3d-toolbar > .fp3d-seg-floor {
          order: 0;
        }
        .fp3d-toolbar > .fp3d-seg-settings {
          order: 1;
        }
      }

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
        .fp3d-help-btn,
        .fp3d-wv-zoom .fp3d-btn,
        .fp3d-strip-btn {
          min-width: 44px;
          min-height: 44px;
        }
      }
`;function od(o,t){return t==="metric"||t==="imperial"?t:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function sd(o,t){return String(Number(o.toFixed(t)))}function Sn(o,t=2){let e=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(t>=2?10:1))/(t>=2?10:1),i=Math.floor(n/12+1e-9),s=n-i*12,r=sd(s,t>=2?1:0);return i?s<.05?`${e}${i}'`:`${e}${i}' ${r}"`:`${e}${r}"`}function ra(o,t){let e=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,s=!1,r=!1,a=e;for(let l of e.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];s=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=c*.3048,r=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=c*.0254:d==="mm"?i+=c/1e3:d==="cm"?i+=c/100:d==="m"?i+=c:i+=t==="imperial"?c*(r?.0254:.3048):c}return!s||/[^\s+]/.test(a)?null:i}function rd(o,t,e){return t==="imperial"?Sn(o):`${e(o)} m`}function ad(o,t,e){return t==="imperial"?`${sd(o/(.3048*.3048),1)} ft\xB2`:`${e(o)} m\xB2`}function Zt(o,t){return t==="imperial"?o.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):o}function aa(o){return o==="touch"?44:24}function ld(o,t,e,n,i){let s=[],r=[];for(let a of o){if(i?.(a))continue;let l=cd(a,t,e,n);l==="firm"?s.push({id:a.id,area:a.w*a.d}):l==="pad"&&r.push({id:a.id,dist:Math.hypot(t[0]-a.x,t[1]-a.z)})}return s.sort((a,l)=>a.area-l.area),r.sort((a,l)=>a.dist-l.dist),[...s.map(a=>a.id),...r.map(a=>a.id)]}function cd(o,t,e,n){let i=n/2/Math.max(e,1e-6),s=o.rotation*Math.PI/180,r=Math.cos(s),a=Math.sin(s),l=t[0]-o.x,c=t[1]-o.z,d=Math.abs(l*r+c*a),u=Math.abs(-l*a+c*r),h=o.w/2,p=o.d/2;if(d<=h&&u<=p)return"firm";if(!(d<=Math.max(h,i)&&u<=Math.max(p,i)))return null;let f=(b,g)=>b<i&&g>=i/2&&g>=4*b;return f(p,h)&&d<=h||f(h,p)&&u<=p?"firm":"pad"}function dd(o,t,e,n){return cd(o,t,e,n)==="firm"}function la(o,t,e=1){if(!o.length)return null;let n=t?o.indexOf(t):-1;return n<0?e<0?o[o.length-1]:o[0]:o[(n+e+o.length)%o.length]}function ud(o,t,e){let n=e&&o.includes(e)?e:o.find(s=>t.includes(s));if(!n)return{grab:o[0]??null,next:null};let i=la(o,n);return{grab:n,next:i!==n?i:null}}function md(o){let t=o.source?.origin;if(t?.type!=="github")return null;let e=[t.owner,t.repo,t.folder].filter(Boolean).join("/"),n=t.commit?` \xB7 ${t.commit.slice(0,7)}`:"";return{label:`${t.default_branch?e:`${e} @ ${t.ref}`}${n}`,url:t.url}}var Ni=[],ze=new Map,si=new Map,da=new Map,pd,hd="",ua=0;function gd(o,t=!1){for(let e of o){let n=e.hash?Ni.find(i=>i.id===e.id&&i.hash===e.hash):void 0;if(!(!n||n===e))for(let i of e.items){let s=Pn(i)?void 0:ze.get(St(e.id,i.id));s&&Pn(s)&&_d(i,s)}}Ni=o,ze=new Map(o.flatMap(e=>e.items.map(n=>[St(e.id,n.id),n]))),si=new Map(o.flatMap(e=>Object.entries(e.aliases??{}).map(([n,i])=>[n,St(e.id,i)])));for(let[e,n]of si){let i=ze.get(n);i&&!ze.has(e)&&ze.set(e,i)}t||ua++}function fd(o){return si.get(o)??o}function bd(o){if(!si.size)return o;let t=c=>!!c&&si.has(c),e=c=>t(c.type)||t(c.vehicle)||(c.types??[]).some(d=>t(d.vehicle))||(c.rack?.slots??[]).some(d=>t(d.type)),n=o.floors.some(c=>c.furniture.some(e)),i=o.recipes??{},s=Object.keys(i).some(t);if(!n&&!s)return o;let r=c=>si.get(c)??c,a=o.floors.map(c=>({...c,furniture:c.furniture.map(d=>e(d)?{...d,type:r(d.type),...d.vehicle?{vehicle:r(d.vehicle)}:{},...d.types?{types:d.types.map(u=>({...u,vehicle:r(u.vehicle)}))}:{},...d.rack?{rack:{...d.rack,slots:d.rack.slots.map(u=>t(u.type)?{...u,type:r(u.type)}:u)}}:{}}:d)})),l={};for(let[c,d]of Object.entries(i)){let u=r(c);if(u===c){l[c]??=d;continue}if(i[u])continue;let[,h,p]=u.split(":");l[u]={...d,pack:h,item:p,release:1,recipe:{...d.recipe,id:p}}}return{...o,floors:a,...o.recipes?{recipes:l}:{}}}function Pn(o){return Array.isArray(o.parts)}function _d(o,t){o.parts=t.parts,t.symbol&&(o.symbol=t.symbol)}function yd(o){let t=new Map;for(let e of new Set(o)){let n=ze.get(e);if(!n||Pn(n))continue;let i=ze.get(fd(e))===n?fd(e):e,s=Ni.find(r=>i===St(r.id,n.id));s&&t.set(s.id,[...t.get(s.id)??[],n.id])}return t}function pa(o,t,e){let n=Ni.find(i=>i.id===o);if(!(!n||n.hash&&t&&n.hash!==t))for(let i of e){let s=ze.get(St(o,i.id));s&&!Pn(s)&&Array.isArray(i.parts)&&_d(s,i)}}function vd(){return Ni}function xd(o){if(o===pd)return;pd=o;let t=Object.entries(o??{}),e=t.map(([n,i])=>`${n}=${i.hash}`).sort().join("|");e!==hd&&(hd=e,da=new Map(t.map(([n,i])=>[n,i.recipe])),ua++)}function wd(){return ua}function St(o,t){return`pack:${o}:${t}`}function Pt(o){return o.startsWith("pack:")}function Oe(o){return Pt(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":/:roof_window[\w.-]*_blind$/.test(o)?"blind":null:null}var Fb=new Set(["sensor","water_meter","smoke_alarm"]);function kd(o){return Pt(o)&&mt(o)?.family==="entity_marker"}function $d(o){return Pt(o)?Fb.has(mt(o)?.family??"")||/:(\w+_sensor|door_contact|presence_mmwave)$/.test(o):!1}function re(o){return o==="robot_vacuum"||Pt(o)&&o.endsWith(":robot_vacuum")}function Zo(o){return Pt(o)&&/:(heat_pump_indoor|gas_boiler|combi_boiler(?:_[a-z0-9_]+)?|buffer_tank|water_heater|hot_water_cylinder(?:_[a-z0-9_]+)?)$/.test(o)}var Rb={meter:"meter",consumer_unit:"meter",energy_monitor:"meter",inverter:"inverter",home_battery:"home_battery",power_station:"home_battery",ev_charger:"wallbox",solar_panel:"solar"};function xt(o){if(o==="meter"||o==="inverter"||o==="home_battery"||o==="wallbox")return o;let t=mt(o),e=t?.family?Rb[t.family]??null:null;return e==="meter"&&(t.tags??[]).some(n=>/^(gas|water|wasser)$/i.test(n))?null:e}function Md(o){return wt(o)?.parts.find(t=>t.screen)}function Ed(o){let t=wt(o);if(!t)return!1;let[e,n,i]=t.size;return t.parts.some(s=>{if(!s.screen)return!1;let[r,a]=[s.w*e,s.d*n,s.h*i].sort((l,c)=>c-l);return r>=.06&&a>=.06})}function wt(o){if(!Pt(o))return;let t=ze.get(o);return da.get(o)??(t&&Pn(t)?t:void 0)}function mt(o){if(Pt(o))return da.get(o)??ze.get(o)}function yt(o){return ae[o]??mt(o)?.size??[.6,.6,.8]}function Te(o){let t=mt(o);return zd.has(o)||!!t?.electric||!!t?.light||Ee(o)}var Ib=new Set(["radiator_trv","radiator_valve","thermostat"]);function Ee(o){if(o==="radiator")return!0;let t=Pt(o)?mt(o):void 0;return t?Ib.has(t.family??"")||(t.tags??[]).some(e=>/^(trv|smart trv|thermostat)$/i.test(e)):!1}function on(o){let t=Pt(o)?mt(o):void 0;return t?/camera$/.test(t.family??"")||(t.tags??[]).some(e=>/^(camera|security camera|cctv|doorbell|video doorbell|doorbell camera)$/i.test(e)):!1}function Ot(o,t){let e=t.split("-")[0];return o.name[e]??o.name.en??Object.values(o.name)[0]??o.id}function me(o,t){return o.name}function jt(o,t){let e=mt(t.type);if(t.mount_y!=null)return t.mount_y;let n=Ad(t,o.height);if(n!==null)return n;if(t.type==="lamp_wall")return Sd;if(Pd.has(t.type))return Math.max(0,o.height-Fd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return ca(o,t)+Id(o,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,o.height-t.h);default:return e?ca(o,t):Rd(t)||ca(o,t)}}function ca(o,t){let e=o.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>U([t.x,t.z],n.points))?0:ts(o,t.x,t.z)}var Td=["auto","none","inside","outside"],Ld=["always","no_power","never"],Cd=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Hd=["gable","hip","halfhip"],ji={field:null,size:1,right:0,up:0},Dd=["navigate","more_info","service","fire_dom_event"],Vd=["sit","lie","curl"];var Bi={cat:["orange","tabby","black","white","grey","calico","cream","dilute_calico","blue_grey"],dog:["golden","cream","brown","black","white","grey"],rabbit:["white","grey","brown","black","cream"]},Wd=["dark","copper","green","yellow","blue"],Nd=["dachshund","pug","terrier","labrador","shepherd"];function ns(o,t,e){return o?t?!!e.lock_plan:!!o.locked:!1}var is=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],ha={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function ai(o){return o==="hedge"||o==="fence"||o==="pergola"}function os(o){return(o.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!ai(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}var jd=["x","-x","z","-z"];function Ab(o,t,e){let n=o.slope??0;if(!n||o.type==="pool")return 0;let i=o.slope_dir??"x",s=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,r=1/0,a=-1/0;for(let[c,d]of o.points){let u=s(c,d);r=Math.min(r,u),a=Math.max(a,u)}if(a-r<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-r)/(a-r)));return n*l}function zb(o,t,e,n){return Ud(o,t)+ha[t.type]-Ob(o,t,e,n)}var fa=-.2,es={set:!1,level:fa};function Bd(o){let t=o?.settings.terrain??null;es={set:t?.level!=null,level:t?.level??fa}}function ma(o,t){return es.level}function Kd(o){return o.elevation>.3?0:es.set?es.level-o.elevation:fa}function Ud(o,t){return Kd(o)+(t.offset??0)}function Ob(o,t,e,n){return t.type==="pool"?0:Ab(t,e,n)}function ts(o,t,e){let n=(o.outdoor??[]).filter(s=>!ai(s.type)&&s.type!=="pool"&&U([t,e],s.points)),i=[...n].reverse().find(s=>s.cut)??n[0];return i?zb(o,i,t,e):Kd(o)}var Gd=["filter","backwash","rinse","waste","recirculate","closed"];function qd(o,t){return Ud(o,t)+(t.above?ss(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function ga(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?ss(o):1.5}function ba(o,t){return t.above?!1:(o.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!ai(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>U(n,e.points)))}function Yd(o,t){return!t.above&&!ba(o,t)?_a(o,t)-.05:qd(o,t)-ga(t)}function _a(o,t){return qd(o,t)-.15}function ss(o){return o.height&&o.height>.3?o.height:1.2}function li(o,t,e,n,i){let s=g=>Math.round(g*1e3)/1e3,r=n-t,a=i-e,l=(t+n)/2,c=(e+i)/2;if(o==="rect")return[[t,e],[n,e],[n,i],[t,i]];let d=40;if(o==="round"){let g=Math.min(r,a)/2;return Array.from({length:d},(_,v)=>[s(l+g*Math.cos(v/d*Math.PI*2)),s(c+g*Math.sin(v/d*Math.PI*2))])}let u=r>=a,h=(u?a:r)/2,p=Math.max(0,(u?r:a)/2-h),f=[],b=d/2;for(let g=0;g<2;g++){let _=g===0?1:-1;for(let v=0;v<=b;v++){let x=-Math.PI/2+v/b*Math.PI+(g===0?0:Math.PI),w=_*p+h*Math.cos(x),E=h*Math.sin(x);f.push(u?[s(l+w),s(c+E)]:[s(l+E),s(c+w)])}}return f}var ya=2;function Qd(o){return Number.isInteger(o)&&o>=1&&o<=ya}var Tb={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Jd=["wood","oak","tiles","carpet","stone","concrete"],Xd={type:"none",pitch:35,overhang:.4},Lb={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Xd}};function Zd(o,t,e){return{id:o,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Cb=2.75;function tu(o,t){if(t!=null&&Number.isFinite(t))return Math.round(t*Cb*100)/100;let e=o.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function eu(o,t,e){if(o.settings.area_import===!1||!t.ha_floor)return[];let n=new Set(o.floors.flatMap(i=>[...i.rooms.map(s=>s.area_id),...(i.outdoor??[]).map(s=>s.area_id??null)]));return Object.values(e??{}).filter(i=>i.floor_id===t.ha_floor&&!n.has(i.area_id)).sort((i,s)=>i.name.localeCompare(s.name))}function nu(o,t,e){let n=o.rooms.flatMap(a=>a.points.map(l=>l[0])),i=o.rooms.flatMap(a=>a.points.map(l=>l[1])),s=n.length?Math.ceil(Math.max(...n))+1:0,r=i.length?Math.floor(Math.min(...i)):0;return t.map((a,l)=>{let c=s+l%3*4.5,d=r+Math.floor(l/3)*3.5;return{id:e(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function iu(o,t,e,n){let i=o.rotation*Math.PI/180,s=Math.cos(i),r=Math.sin(i),[a,l]=t,c=o.x-a*(o.w/2)*s+l*(o.d/2)*r,d=o.z-a*(o.w/2)*r-l*(o.d/2)*s,u=e[0]-c,h=e[1]-d,p=_=>Math.max(.1,Math.round(_/n)*n),f=p((u*s+h*r)*a),b=p((-u*r+h*s)*l),g=_=>Math.round(_*1e3)/1e3;return{x:g(c+a*(f/2)*s-l*(b/2)*r),z:g(d+a*(f/2)*r+l*(b/2)*s),w:g(f),d:g(b)}}var Ki=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","ac_unit","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell","loft_ladder","awning","waste_bin","mailbox","wall_switch","wall_socket","lamp_fan","wifi_ap","water_heater"],rs={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","ac_unit","stairs","stairs_u","loft_ladder","robot_vacuum"],vehicles:["parking"],outdoor:["awning"],household:["waste_bin","mailbox"],switches:["wall_switch","wall_socket","wifi_ap","water_heater"]},Tt=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],ou=.3,ci=["meter","inverter","home_battery","wallbox","grid_point"],as=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Sd=1.75;function ge(o){if(["lamp_pendant","lamp_fan","stairwell","loft_ladder","parking"].includes(o.type)||va.has(o.type))return!1;let t=wt(o.type);return!(t?.mount==="ceiling"&&t.light&&t.light!=="panel")}var Pd=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Fd(o,t){return o==="lamp_spot"?Math.max(.06,t)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,t)+.005:.02}var va=new Set(["stairs","stairs_u"]),Hb=3,Db=.18,Vb=.2;function Wb(o){let t=Math.max(3,Math.round(o.h/Db)),e=o.d>o.w+.3,n=e&&(o.stair_landing??0)>0?Math.min(o.stair_landing??0,t-1):0,i=!n&&o.stair_turn&&e?Hb:0;return{n:t,fits:e,flat:n,winders:i,skip:n||i}}function ri(o){let{n:t,fits:e,skip:n}=Wb(o);return{canTurn:e,maxLanding:e?t-1:0,maxTop:Math.max(0,Math.round((o.d-Vb*(t-n))*1e3)/1e3)}}function su(o,t){let e={};t.stair_open!==void 0&&(e.stair_open=t.stair_open?!0:null);let n={...o};if(t.stair_turn!==void 0&&(e.stair_turn=t.stair_turn&&ri(o).canTurn?t.stair_turn:null,n.stair_turn=e.stair_turn,e.stair_turn&&o.stair_landing&&(e.stair_landing=null,n.stair_landing=null)),t.stair_landing!==void 0){let s=Math.max(0,Math.min(Math.round(t.stair_landing),ri(o).maxLanding));e.stair_landing=s||null,n.stair_landing=s,s&&(e.stair_turn=null,n.stair_turn=null)}let i=t.stair_top??o.stair_top??0;if(t.stair_top!==void 0||o.stair_top&&ri(n).maxTop<o.stair_top){let s=Math.max(0,Math.min(Math.round(i*100)/100,ri(n).maxTop));e.stair_top=s||null}return e}function ru(o,t,e){let n=Math.max(4,Math.round(e/.18)),i=Math.floor(n/2)+1,s=i-1,r=n-i,a=Math.min(.12,o*.06),l=(o-a)/2,c=Math.min(l,t*.45),d=(t-c)/s;return{n,k:i,steps1:s,steps2:r,gap:a,fw:l,landing:c,run:d,rise:e/n}}function kt(o){return as.has(o)||!!wt(o)?.light}var Nb=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function xa(o,t,e,n=0){let i=ft(o.points),s=i.x1-i.x0-2*n,r=i.z1-i.z0-2*n,a=[];for(let l=0;l<t;l++)for(let c=0;c<e;c++){let d=[Math.round((i.x0+n+s/e*(c+.5))*1e3)/1e3,Math.round((i.z0+n+r/t*(l+.5))*1e3)/1e3];U(d,o.points)&&a.push(d)}return a}function di(o,t,e){let n=r=>Math.round(r*1e3)/1e3,[i,s]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(o[0]+i*t),n(o[1]+s*t)]}function au(o,t){return t&&t!=="none"?{state_entity:t}:{state_entity:o.state_entity2&&o.state_entity2!=="none"?o.state_entity2:null,state_entity2:null}}function Rd(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return o.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Od=.04,jb=1.2;function Id(o,t,e,n=0){let i=0;for(let s of o.furniture)!(Nb.has(s.type)||wt(s.type)?.surface)||!U([t,e],Bt(s))||s.type==="worktop"&&n>0&&s.h-Od>=jb&&n<=s.h-Od-.02||(i=Math.max(i,s.h));return i}function ui(o){let t=o.split(/[,;\n]/).map(e=>e.trim()).filter(Boolean).slice(0,12);return t.length?t:void 0}var lu=new Set(["wall_switch","wall_socket"]),ls=4;function cu(o){let t=(o.gangs??[]).slice(0,ls);return t.length?t:[{entity:null}]}function du(o){return Math.round((.085+.071*(Math.max(1,Math.min(ls,o))-1))*1e3)/1e3}var uu=new Set(["wifi_ap","water_heater"]),pu={"wifi_ap:":[.2,.2,.04],"wifi_ap:wall":[.16,.04,.16],"water_heater:":[.56,.56,1.5],"water_heater:wall":[.5,.27,.8]};function Ad(o,t){return o.type==="wifi_ap"?o.variant==="wall"?2.1:Math.max(0,t-o.h):o.type==="water_heater"?o.variant==="wall"?1.1:0:null}var zd=new Set([...as,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),ae={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],loft_ladder:[.6,1.1,2.5],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var hu=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],fu=["standard","bars","glass_wall"],mu=["sectional","up_and_over"];function gu(o){return o==="door"?hu:o==="garage"?mu:fu}function cs(o,t){return o.type==="garage"?o.style&&mu.includes(o.style)?o.style:"sectional":o.type==="door"?o.style&&hu.includes(o.style)?o.style:t?"front":"interior":o.style&&fu.includes(o.style)?o.style:"standard"}function bu(o,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let i=t==="sidelights",s=o-.04,r=Math.min(1.05,Math.max(.6,s-(i?.6:.3))),a=(s-r)/(i?2:1),l=n.sidelight_width??a,c=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=s-.5;if(l+c>d){let h=Math.max(0,d)/(l+c);l*=h,c*=h}return i?{panels:[[.02,.02+l],[o-.02-c,o-.02]],x0:.02+l,x1:o-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function wa(o){return o==="front"||o==="front_glass"||o==="sidelight"||o==="sidelights"}var ds={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Ui(o){if(o.type==="garage")return"garage";if(o.type==="window"&&o.style==="glass_wall")return"glass_wall";let t=o.leaves===2;return o.type==="door"?!t&&o.style&&wa(o.style)?"front":t?"door_double":"door":o.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function us(o){o.energy={...Tb,...o.energy??{}},o.presence=o.presence??[],o.settings={...Lb,...o.settings,roof:{...Xd,...o.settings?.roof??{}}};for(let t of o.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(n=>({...n,panel:n.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),t.furniture=t.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let e=t.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(e.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of e){let s=n[i.mount??"ceiling"],[r,a,l]=ae[s];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:i.x,z:i.z,rotation:0,w:r,d:a,h:l,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}t.openings=t.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function N(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function Lt(o){let t=0;for(let e=0;e<o.length;e++){let[n,i]=o[e],[s,r]=o[(e+1)%o.length];t+=n*r-s*i}return t/2}function Ft(o){return Math.abs(Lt(o))}function Gt(o){let t=Lt(o);if(Math.abs(t)<1e-9){let i=o.length||1;return[o.reduce((s,r)=>s+r[0],0)/i,o.reduce((s,r)=>s+r[1],0)/i]}let e=0,n=0;for(let i=0;i<o.length;i++){let[s,r]=o[i],[a,l]=o[(i+1)%o.length],c=s*l-a*r;e+=(s+a)*c,n+=(r+l)*c}return[e/(6*t),n/(6*t)]}function Be(o){if(o.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=o[t],[i,s]=o[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function ft(o){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[s,r]of o)t=Math.min(t,s),e=Math.min(e,r),n=Math.max(n,s),i=Math.max(i,r);return{x0:t,z0:e,x1:n,z1:i}}function Bt(o){let t=o.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=o.w/2,s=o.d/2;return[[-i,-s],[i,-s],[i,s],[-i,s]].map(([r,a])=>[o.x+r*e-a*n,o.z+r*n+a*e])}function U(o,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[s,r]=t[n],[a,l]=t[i];r>o[1]!=l>o[1]&&o[0]<(a-s)*(o[1]-r)/(l-r)+s&&(e=!e)}return e}var sn={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};function ka(o,t){for(let e of o.floors){let n=t.floors.find(i=>i.id===e.id);e.furniture=e.furniture.filter(i=>{if(!i.look_of)return!0;let s=e.placements.find(d=>d.entity_id===i.look_of);if(!s)return!1;let r=n?.placements.find(d=>d.entity_id===i.look_of),a=n?.furniture.find(d=>d.id===i.id),l=!r||r.x!==s.x||r.z!==s.z||(r.rotation??0)!==(s.rotation??0);return!!a&&(a.x!==i.x||a.z!==i.z||a.rotation!==i.rotation)&&!l?(s.x=i.x,s.z=i.z,s.rotation=i.rotation):(i.x=s.x,i.z=s.z,i.rotation=s.rotation??0),!0})}}function pi(o,t){let e=[...o].sort((i,s)=>Ft(i.points)-Ft(s.points)),n=new Map;for(let i of t){let s=e.find(a=>U([i.x,i.z],a.points))?.id??null,r=n.get(s);r?r.push(i):n.set(s,[i])}return n}function _u(o,t,e,n,i=4){let s=Math.ceil(e/n),r=Math.max(0,Math.min(Math.floor(t/n),o-s)),a=Math.max(0,r-i),l=Math.min(o,r+s+i);return{start:a,end:l,before:a*n,after:(o-l)*n}}var $a={bg:"#070b14",bg2:"#0d1424",chrome:"rgba(14, 21, 38, 0.86)",chromeSolid:"#0f1729",line:"rgba(120, 170, 255, 0.16)",text:"#e6eefc",muted:"#8a9bb8",accent:"#37e0ff",accentText:"#041018",soft:"#5b7cff",warm:"#ffb547",danger:"#ff6b8b",shadow:"0 8px 30px rgba(0, 0, 0, 0.5)",colorScheme:"dark"},yu={bg:"#eef2f8",bg2:"#e3e9f2",chrome:"rgba(255, 255, 255, 0.88)",chromeSolid:"#ffffff",line:"rgba(30, 60, 110, 0.18)",text:"#132036",muted:"#4a5a74",accent:"#0b7a99",accentText:"#ffffff",soft:"#3d5bd9",warm:"#a35f00",danger:"#c4224a",shadow:"0 6px 22px rgba(20, 40, 80, 0.16)",colorScheme:"light"};function vu(o){let t=e=>e.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`);return Object.entries(o).map(([e,n])=>`--fp3d-s-${t(e)}: ${n};`).join(`
`)}var xu=o=>o.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),Bb=Object.keys($a).filter(o=>o!=="colorScheme").map(o=>`--fp3d-${xu(o)}: var(--fp3d-s-${xu(o)}, ${$a[o]});`).join(`
`),te=lt`
  :host {
    ${We(Bb)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${We(vu(yu))}
  }
`,rn=lt`
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
    grid-template-columns: 44px 1fr;
    gap: 6px;
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
`;var Fn=32,Kb=9,Ma=class extends zt{static properties={rows:{attribute:!1},texts:{attribute:!1},editable:{type:Boolean},_scroll:{state:!0}};constructor(){super(),this.rows=[],this.texts={hide:"Hide",show:"Show",remove:"Delete"},this.editable=!1,this._scroll=0}send(t,e){this.dispatchEvent(new CustomEvent(t,{detail:{id:e},bubbles:!0,composed:!0}))}onScroll(t){let e=t.currentTarget.scrollTop;Math.floor(e/Fn)!==Math.floor(this._scroll/Fn)&&(this._scroll=e)}render(){let t=this.rows,e=Math.min(t.length,Kb)*Fn,n=_u(t.length,this._scroll,e,Fn);return m`<div class="box" style="height:${e}px" role="list" @scroll=${this.onScroll}>
      <div style="height:${n.before}px"></div>
      ${t.slice(n.start,n.end).map(i=>m`<div class=${`row${i.selected?" sel":""}${i.hidden?" off":""}`} role="listitem">
          <button class="name" aria-pressed=${i.selected} @click=${()=>this.send("item-select",i.id)}>
            <span>${i.name}</span>${i.note?m`<small>${i.note}</small>`:y}
          </button>
          <button class="icon" title=${i.hidden?this.texts.show:this.texts.hide} aria-label=${i.hidden?this.texts.show:this.texts.hide} aria-pressed=${i.hidden} @click=${()=>this.send("item-hide",i.id)}>
            ${i.hidden?"\u25CC":"\u25C9"}
          </button>
          ${this.editable?m`<button class="icon" title=${this.texts.remove} aria-label=${this.texts.remove} @click=${()=>this.send("item-delete",i.id)}>✕</button>`:y}
        </div>`)}
      <div style="height:${n.after}px"></div>
    </div>`}static styles=[te,lt`
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
        height: ${Fn}px;
        box-sizing: border-box;
      }
      button {
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        height: ${Fn-4}px;
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
        width: ${Fn}px;
        flex: none;
        color: var(--fp3d-muted);
      }
    `]};Xt("fp3d-item-list",Ma);var wu=["fun_pets","fun_halloween"],Ub=["pool"];function Ea(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("home3d.lab","1"):o==="0"&&localStorage.removeItem("home3d.lab"),localStorage.getItem("home3d.lab")==="1"}catch{return!1}}function Gi(o){return!Ub.includes(o)||Ea()}var Ct=(o,t)=>[o[0]-t[0],o[1]-t[1]],an=(o,t)=>[o[0]+t[0],o[1]+t[1]],Ke=(o,t)=>[o[0]*t,o[1]*t],In=(o,t)=>o[0]*t[0]+o[1]*t[1],Rn=(o,t)=>o[0]*t[1]-o[1]*t[0],qi=o=>Math.hypot(o[0],o[1]),be=o=>{let t=qi(o)||1;return[o[0]/t,o[1]/t]},ku=o=>[-o[1],o[0]],$u=o=>[o[1],-o[0]];function $t(o,t,e=[]){let n=t.eps??.005,i=[],s=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),r=[],a=S=>{for(let T=0;T<r.length;T++)if(Math.abs(r[T][0]-S[0])<=n&&Math.abs(r[T][1]-S[1])<=n)return T;return r.push([S[0],S[1]]),r.length-1},l=[];for(let S of o){let T=S.points;if(T.length<3||Math.abs(Lt(T))<1e-6)continue;let R=Lt(T)>0,I=T.map(a);for(let z=0;z<T.length;z++){let D=I[z],W=I[(z+1)%T.length];D!==W&&l.push(R?{u:D,v:W,room:S.id,edge:z,forward:!0}:{u:W,v:D,room:S.id,edge:z,forward:!1})}}let c=s.map(S=>[a(S.a),a(S.b)]),d=new Set;for(let S of o){let T=S.points;T.length<3||(S.wall_splits??[]).forEach((R,I)=>{if(!R||I>=T.length)return;let z=T[I],D=Ct(T[(I+1)%T.length],z),W=qi(D);for(let H of R)H>n&&H<W-n&&d.add(a(an(z,Ke(D,H/W))))})}let u=[];for(let S of l){let T=r[S.u],R=r[S.v],I=Ct(R,T),z=qi(I),D=Ke(I,1/z),W=[];for(let j=0;j<r.length;j++){if(j===S.u||j===S.v)continue;let q=Ct(r[j],T),Y=In(q,D);Y<=n||Y>=z-n||Math.abs(Rn(D,q))<=n&&W.push({t:Y,id:j})}W.sort((j,q)=>j.t-q.t);let H=[{t:0,id:S.u},...W,{t:z,id:S.v}];for(let j=0;j+1<H.length;j++){let q=H[j],Y=H[j+1],Q=S.forward?q.t:z-Y.t,Z=S.forward?Y.t:z-q.t;u.push({u:q.id,v:Y.id,room:S.room,edge:S.edge,t0:Q,t1:Z})}}let h=new Map;for(let S of u){let T=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,R=h.get(T);R||h.set(T,R=[]),R.push(S)}let p=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),f=new Map;for(let S of u){let T=`${S.room}:${S.edge}`;f.set(T,[...f.get(T)??[],S.t0].sort((R,I)=>R-I))}let b=S=>{let T=o.find(I=>I.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(T))return T;let R=f.get(`${S.room}:${S.edge}`)??[];return T[R.indexOf(S.t0)]??null},g=S=>{let T=S.map(b).filter(I=>typeof I=="number"&&I>0);if(T.length)return Math.min(...T);let R=S.map(I=>o.find(z=>z.id===I.room)?.ceiling_height);return R.every(I=>typeof I=="number"&&I>0)?Math.max(...R):void 0},_=S=>{let T=S.map(R=>o.find(I=>I.id===R.room)?.wall_thickness?.[R.edge]).filter(R=>typeof R=="number"&&R>0);return T.length?Math.max(...T):void 0},v=S=>{for(let T of S){let R=o.find(W=>W.id===T.room),I=R?.wall_slopes?.[T.edge];if(!R||!I)continue;let z=R.points[T.edge],D=R.points[(T.edge+1)%R.points.length];return{p:[z[0],z[1]],q:[D[0],D[1]],h0:Math.max(.05,I[0]),h1:Math.max(.05,I[1])}}},x=S=>S.some(T=>b(T)===0),w=S=>{let T=v(S);return T?{height:Math.max(T.h0,T.h1),slope:T}:{height:g(S)}},E=[],k=[];for(let S of h.values()){let T=S[0],R=S.find(I=>I!==T&&I.u===T.v&&I.v===T.u&&I.room!==T.room);for(let I of S)I!==T&&I!==R&&I.room!==T.room&&i.push(`overlap:${T.room}:${I.room}`);if(x(R?[T,R]:[T])){R&&E.push([T.room,R.room]);continue}if(R){let I=_([T,R])??t.interior;k.push({a:T.u,b:T.v,left:I/2,right:I/2,exterior:!1,roomLeft:T.room,roomRight:R.room,sources:[p(T),p(R)],...w([T,R])})}else k.push({a:T.u,b:T.v,left:0,right:_([T])??t.exterior,exterior:!0,roomLeft:T.room,roomRight:null,sources:[p(T)],...w([T])})}let M=S=>be(Ct(r[S.b],r[S.a])),F=new Set;for(let S of k){if(S.exterior||S.free)continue;let T=new Set;for(let I of[S.a,S.b])for(let z of k)!z.exterior||z.free||z.a!==I&&z.b!==I||Math.abs(Rn(M(S),M(z)))>1e-6||(z.roomLeft===S.roomLeft?T.add("left"):z.roomLeft===S.roomRight&&T.add("right"));if(T.size!==1)continue;let R=S.left+S.right;T.has("left")?(S.left=0,S.right=R):(S.left=R,S.right=0),F.add(S)}for(let S of[...F]){let T=[S];for(;T.length;){let R=T.pop();for(let I of[R.a,R.b])for(let z of k){if(z===R||z.exterior||z.free||F.has(z)||z.a!==I&&z.b!==I||Math.abs(Rn(M(R),M(z)))>1e-6)continue;let D=z.left+z.right,W=R.right===0==In(M(R),M(z))>0;z.left=W?D:0,z.right=W?0:D,F.add(z),T.push(z)}}}s.forEach((S,T)=>{let[R,I]=c[T];if(R===I)return;let z=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],D=o.find(j=>j.points.length>=3&&U(z,j.points))?.id??null,W=(S.thickness??t.interior)/2,H=typeof S.height=="number"&&S.height>0?S.height:void 0;k.push({free:S.id,a:R,b:I,left:W,right:W,exterior:!1,roomLeft:D,roomRight:D,sources:[],height:H})}),k=qb(k,r,d);let L=Qb(k,r);return{walls:k.map((S,T)=>{let R=r[S.a],I=r[S.b],z=L.get(`${T}:a`),D=L.get(`${T}:b`),W=Jb([z.right,D.left,I,D.right,z.left,R],1e-6);return{id:Gb(R,I),a:[R[0],R[1]],b:[I[0],I[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:W,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(i)],open:E,parts:f}}function Gb(o,t){let e=s=>Math.round(s*100),[n,i]=o[0]<t[0]||o[0]===t[0]&&o[1]<=t[1]?[o,t]:[t,o];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function Mu(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function qb(o,t,e=new Set){let n=o.slice(),i=!0;for(;i;){i=!1;let s=new Map;n.forEach((r,a)=>{for(let l of[r.a,r.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[r,a]of s){if(a.length!==2||e.has(r))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==r&&(l=Mu(l)),c.a!==r&&(c=Mu(c)),l.a===c.b)continue;let d=be(Ct(t[l.b],t[l.a])),u=be(Ct(t[c.b],t[c.a]));if(Math.abs(Rn(d,u))>1e-6||In(d,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:Yb(l.sources,c.sources)},p=n.filter((f,b)=>b!==a[0]&&b!==a[1]);p.push(h),n.length=0,n.push(...p),i=!0;break}}return n}function Yb(o,t){let e=o.map(n=>({...n}));for(let n of t){let i=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function Qb(o,t){let e=new Map;o.forEach((i,s)=>{let r=be(Ct(t[i.b],t[i.a])),a=[[i.a,{key:`${s}:a`,d:r,left:i.left,right:i.right,angle:Math.atan2(r[1],r[0])}],[i.b,{key:`${s}:b`,d:Ke(r,-1),left:i.right,right:i.left,angle:Math.atan2(-r[1],-r[0])}]];for(let[l,c]of a){let d=e.get(l);d||e.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,s]of e){let r=t[i];s.sort((c,d)=>c.angle-d.angle);let a=c=>({left:an(r,Ke(ku(c.d),c.left)),right:an(r,Ke($u(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let d=s[c],u=s[(c+1)%s.length],h=an(r,Ke(ku(d.d),d.left)),p=an(r,Ke($u(u.d),u.right)),f=Rn(d.d,u.d);if(Math.abs(f)<1e-4)continue;let b=Rn(Ct(p,h),u.d)/f,g=an(h,Ke(d.d,b));qi(Ct(g,r))>l||(n.get(d.key).left=g,n.get(u.key).right=g)}}return n}function Jb(o,t){let e=o.filter((i,s)=>qi(Ct(i,o[(s+1)%o.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let s=e[(i+e.length-1)%e.length],r=e[i],a=e[(i+1)%e.length],l=Ct(r,s),c=Ct(a,r);if(Math.abs(Rn(be(l),be(c)))<1e-7&&In(l,c)>0){e=e.filter((d,u)=>u!==i),n=!0;break}}}return e}function le(o,t,e){let n=o.points[t],i=o.points[(t+1)%o.points.length],s=be(Ct(i,n));return an(n,Ke(s,e))}function ee(o,t,e){if(o.wall){let i=e.find(a=>a.id===o.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let s=be(Ct(i.b,i.a));return{room:{id:o.room_id,name:"",area_id:null,points:[i.a,i.b,an(i.a,[-s[1],s[0]])]},edge:0}}let n=t.find(i=>i.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function Yi(o,t,e){if(!t.wall)return Su(o,e.room,e.edge,t.offset);let n=o.find(s=>s.free===t.wall);if(!n)return null;let i=le(e.room,0,t.offset);return{wall:n,s:In(Ct(i,n.a),be(Ct(n.b,n.a)))}}function Xb(o,t,e){if(t.free)return null;let n=e?t.b:t.a,i=be(Ct(t.b,t.a)),s=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,r=null;for(let a of o)if(!(a===t||!(s(a.a)||s(a.b)))){if(r||a.exterior!==t.exterior||a.free||!s(e?a.a:a.b)||In(be(Ct(a.b,a.a)),i)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;r=a}return r}function Eu(o,t,e){return[0,Math.hypot(t.points[(e+1)%t.points.length][0]-t.points[e][0],t.points[(e+1)%t.points.length][1]-t.points[e][1])].map(i=>{let s=Su(o,t,e,i);if(!s)return 0;let r=Math.hypot(s.wall.b[0]-s.wall.a[0],s.wall.b[1]-s.wall.a[1]),a=s.s>r/2;if(Math.abs(s.s-(a?r:0))>.001)return 0;let l=Xb(o,s.wall,a);return l?Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]):0})}function Su(o,t,e,n){for(let i of o){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let r=le(t,e,n);return{wall:i,s:In(Ct(r,i.a),be(Ct(i.b,i.a)))}}return null}var Zb=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],Pu=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:ps,pending:Sa}=Pu;function hi(o){let t=(o??navigator.language??"en").toLowerCase(),e=t.startsWith("no")?"nb":t.split(/[-_]/)[0];return e==="en"||!/^[a-z]{2,3}$/.test(e)?null:e}function Fu(o){let t=hi(o);return!t||ps.has(t)}var Pa="home3d.lang.";function t_(o){try{let t=JSON.parse(localStorage.getItem(Pa+o)??"null");return t&&typeof t.hash=="string"&&t.strings&&typeof t.strings=="object"?t:null}catch{return null}}function e_(o,t,e){try{Object.keys(e).length?localStorage.setItem(Pa+o,JSON.stringify({hash:t,strings:e})):localStorage.removeItem(Pa+o)}catch{}}async function n_(o,t){if(!t?.callWS)return{};let e=t_(o);try{let n=await t.callWS({type:"home_3d/languages/get",language:o,...e?{hash:e.hash}:{}});return n.strings&&typeof n.strings=="object"?(e_(o,n.hash,n.strings),n.strings):e&&n.hash===e.hash?e.strings:{}}catch{return e?.strings??{}}}async function i_(o){if(!Zb.includes(o))return{};try{let t=new URL(`./lang/${o}.json?v=3cbdae1b426c`,import.meta.url).href,e=await fetch(t),n=e.ok?await e.json():{};return n&&typeof n=="object"?n:{}}catch{return{}}}function hs(o,t,e=!1){let n=hi(o);if(!n||ps.has(n)&&!e)return Promise.resolve();let i=Sa.get(n);return i||(i=Promise.all([i_(n),n_(n,t)]).then(([s,r])=>{ps.set(n,{...s,...r})}).finally(()=>Sa.delete(n)),Sa.set(n,i)),i}function qt(o,t,e={}){let n=hi(o?.language??navigator.language),s=(n?ps.get(n):void 0)?.[t]??Pu.en?.[t]??t;for(let[r,a]of Object.entries(e))s=s.replace(`{${r}}`,String(a));return s}function Ht(o,t,e=2){return t.toLocaleString(o?.language??void 0,{maximumFractionDigits:e})}var Ru=new Set(["_floorId","_roomId","_openingId","_furnitureId","_deviceId","_outdoorId","_wallId","_multi"]),o_=new Set(["INPUT","SELECT","TEXTAREA"]);function fs(o){let t=o?.activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function ms(o){return!!o&&(o_.has(o.tagName??"")||!!o.isContentEditable)}function Ra(o){let t=fs(o);return!ms(t)||!t?.blur?!1:(t.blur(),!0)}var Fa=new WeakSet;function Iu(o,t){return Array.isArray(o)&&Array.isArray(t)?o.length===t.length&&o.every((e,n)=>e===t[n]):o===t}function Au(o,t){for(let[e,n]of o)if(typeof e=="string"&&Ru.has(e)&&!Iu(n,t[e]))return!0;return!1}function zu(o,t,e,n){if(!Ru.has(t)||Fa.has(o))return;let i=o,s=i[t];if(!(Iu(s,e)||!ms(fs(n)))){Fa.add(o);try{i[t]=e,Ra(n)}finally{i[t]=s,Fa.delete(o)}}}function Tu(o,t){let e=new Set(t),n=o.furniture.filter(i=>e.has(i.id)).map(i=>structuredClone(i));return n.length?{floor:o.id,items:n,pastes:{}}:null}function Lu(o,t,e){let n=o.pastes[t]??0;o.pastes[t]=n+1;let i=(n+(t===o.floor?1:0))*.3,s=new Map,r=a=>s.get(a)??s.set(a,e("block")).get(a);return o.items.map(a=>({...structuredClone(a),id:e("furniture"),x:Ou(a.x+i),z:Ou(a.z+i),group:a.group?r(a.group):null,locked:null}))}var Ou=o=>Math.round(o*1e3)/1e3,Cu=[{keys:["Ctrl+C"],text:"help_key_copy"},{keys:["Ctrl+V"],text:"help_key_paste"},{keys:["Ctrl+A"],text:"help_key_select_all"}];function Dt(o,t){return`${o} (${t.join(", ")})`}function Ia(o){if(!(o.ctrlKey||o.metaKey)||o.shiftKey||o.altKey)return null;let t=o.key.toLowerCase();return t==="c"?"copy":t==="v"?"paste":t==="a"?"select_all":null}var s_={set:(o,t)=>setTimeout(o,t),clear:o=>clearTimeout(o)},gs=class{boxes=new WeakMap;delay;timers;runs=0;constructor(t={}){this.delay=t.delay??600,this.timers=t.timers??s_}state(t){let e=this.boxes.get(t);return e||this.boxes.set(t,e={dirty:!1,saved:null,timer:null,run:++this.runs}),e}stop(t){t.timer!==null&&this.timers.clear(t.timer),t.timer=null}save(t,e,n){this.stop(t),t.saved!==e&&(t.saved=e,n(e,t.run))}focus(t){let e=this.state(t);this.stop(e),e.dirty=!1,e.saved=null,e.run=++this.runs}input(t,e,n){let i=this.state(t);i.dirty=!0,this.stop(i),i.timer=this.timers.set(()=>{i.timer=null,i.dirty&&this.save(i,e,n)},this.delay)}enter(t,e,n){let i=this.state(t);this.save(i,e,n),i.dirty=!1,i.run=++this.runs}change(t,e,n){this.save(this.state(t),e,n)}blur(t){let e=this.state(t);this.stop(e),e.dirty=!1,e.run=++this.runs}typing(t){return this.boxes.get(t)?.dirty??!1}};var Hu=new Map;function Du(o,t){return Aa(e=>e.areaFields?.(o,t))}function Vu(o,t){return Aa(e=>e.furnitureFields?.(o,t))}function Wu(o,t,e){return Aa(n=>n.roomFields?.(o,t,e))}function Nu(){for(let o of Hu.values())if(o.module.pipes)return o.module.pipes;return null}function Aa(o){let t=[];for(let e of Hu.values())try{t.push(...o(e.module)??[])}catch(n){console.warn(`Home 3D: module ${e.id} failed`,n)}return t}var ju=globalThis;function Ue(o){let t=o??{};return String(t.message??t.error?.message??t.code??o)}var Bu;function r_(o){if(ju.__fp3dFailureSink)return ju.__fp3dFailureSink(o);if(typeof document>"u")return;let t=document.fullscreenElement;for(;t?.shadowRoot?.fullscreenElement;)t=t.shadowRoot.fullscreenElement;let e=t??document.body,n=e.querySelector(":scope > .fp3d-failure");n||(n=document.createElement("div"),n.className="fp3d-failure",n.setAttribute("role","alert"),n.style.cssText="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483000;max-width:min(92vw,520px);padding:12px 16px;border-radius:12px;background:#8a1f1f;color:#fff;font:14px/1.35 system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.45);",e.appendChild(n)),n.textContent=o,clearTimeout(Bu),Bu=setTimeout(()=>n.remove(),6e3)}function bs(o,t,e,n,i){let s=r=>r_(i(Ue(r)));try{Promise.resolve(o.callService(t,e,n)).catch(s)}catch(r){s(r)}}var a_={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},l_=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),c_=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),d_=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),_s=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Qu=new Set(["light","switch","fan"]);function Ju(o){return o.slice(0,o.indexOf("."))}function nt(o){return a_[Ju(o)]??null}function Le(o){return o!==null&&o!=="scene"&&o!=="script"}function _e(o,t){let e=o.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&o.devices?.[e.device_id]?.area_id||null:null}function fi(o,t){let e=o.entities?.[t];return!!e&&(!!e.hidden||!!e.hidden_by||!!e.disabled_by)}function Ku(o,t){let e=nt(t);if(!e)return!1;let n=o.entities?.[t];if(fi(o,t)||n?.entity_category)return!1;let i=o.states[t];if(!i)return!1;let s=i.attributes.device_class,r=String(i.attributes.unit_of_measurement??"");return e==="sensor"?s?l_.has(s)||s==="voltage"&&r==="mV":c_.has(r):e==="binary"?s?d_.has(s):!!n?.area_id:!0}var u_=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Uu(o,t){if(nt(t)!=="sensor")return!1;let e=o.entities?.[t];if(fi(o,t)||e?.entity_category)return!1;let n=o.states[t];return!n||!n.attributes.unit_of_measurement||u_.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Qi(n)}var za=null;function An(o){let t=za;if(t&&t.entities===o.entities&&t.devices===o.devices&&(t.states===o.states||(t.states=o.states,Object.keys(o.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],s=new Map,r=new Map;for(let l of Object.keys(o.entities??{})){let c=o.entities[l],d=c.device_id;d&&c.area_id&&(r.get(d)??r.set(d,new Set).get(d)).add(c.area_id),d&&Na(o,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!fi(o,l)&&!c.entity_category&&(s.get(d)??s.set(d,new Set).get(d)).add(Ju(l));let u=Ku(o,l),h=_e(o,l);if(!h){(u||Uu(o,l))&&Le(nt(l))&&i.push(l);continue}u&&(e.get(h)??e.set(h,[]).get(h)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(Ku(o,l)||Uu(o,l))&&Le(nt(l))&&i.push(l);i.sort((l,c)=>_s.indexOf(nt(l))-_s.indexOf(nt(c))||et(o,l).localeCompare(et(o,c)));for(let[l,c]of e){let d=o.areas?.[l]?.name;c.sort((u,h)=>{let p=_s.indexOf(nt(u)),f=_s.indexOf(nt(h));return p-f||et(o,u,d).localeCompare(et(o,h,d))})}let a=new Set([...r].filter(([,l])=>l.size>1).map(([l])=>l));return za={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:e,power:n,unassigned:i,domains:s,hubs:a},za}function ne(o,t){return!t||!o.entities?[]:An(o).areas.get(t)??[]}function Xu(o,t){return o.entities?[...An(o).areas].filter(([e])=>e!==t).map(([e,n])=>({areaId:e,name:o.areas?.[e]?.name??e,ids:n.filter(i=>Le(nt(i)))})).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function Zu(o){return o.entities?An(o).unassigned:[]}var Ta={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},p_=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),h_=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function La(o,t){let e=o.entities?.[t]?.device_id,n=e&&!An(o).hubs.has(e)?An(o).domains.get(e):void 0;return n&&[...n].some(i=>p_.has(i))?!1:!h_.test(`${t} ${o.states[t]?.attributes.friendly_name??""}`)}function tp(o,t,e,n){let i=e.climate?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let s=Ta[n],r=(p,f)=>U([p,f],e.points),a=t?.placements.filter(p=>p.entity_id.startsWith("sensor."))??[],l=a.filter(p=>r(p.x,p.z)).map(p=>p.entity_id),c=new Set(a.filter(p=>!r(p.x,p.z)).map(p=>p.entity_id)),d=[...new Set([...ne(o,e.area_id).filter(p=>!c.has(p)),...l])],u=d.filter(p=>p.startsWith("sensor.")&&o.states[p]?.attributes.device_class===s&&(e.outdoor||La(o,p)));if(u.length)return u;let h=Ca[n];return h?d.filter(p=>p.startsWith("climate.")&&typeof o.states[p]?.attributes[h]=="number"):[]}var Ca={temperature:"current_temperature",humidity:"current_humidity"};function Ha(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function ep(o,t){return!!o.entities&&An(o).hubs.has(t)}function Da(o,t){return o.entities?An(o).power.get(t)??[]:[]}function et(o,t,e){let i=o.states[t]?.attributes.friendly_name??o.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let s=i.slice(e.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return i}function Qi(o){return!o||o.state==="unavailable"||o.state==="unknown"}function Va(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Ji(o,t,e=null){if(o==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(o==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(o){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function f_(o,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],s=t[(n+1)%t.length],r=s[0]-i[0],a=s[1]-i[1],l=r*r+a*a||1,c=Math.min(1,Math.max(0,((o[0]-i[0])*r+(o[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(o[0]-i[0]-r*c,o[1]-i[1]-a*c))}return e}function np(o,t,e=[]){if(o.points.length<3||!t.length)return[];let n=o.points,i=n.map(v=>v[0]),s=n.map(v=>v[1]),r=Math.min(...i),a=Math.min(...s),l=Math.max(...i),c=Math.max(...s),d=Math.min(l-r,c-a),u=Math.max(.1,Math.min(.25,d/8)),h=Math.min(.35,d/5),p=Gt(n),f=[];for(let v=r+u/2;v<l;v+=u)for(let x=a+u/2;x<c;x+=u){let w=[v,x];if(!U(w,n))continue;let E=f_(w,n);E<h||f.push({p:w,wall:E})}f.length||f.push({p,wall:0});let b=[...e],g=[],_=Math.min(.7,d/4);for(let v of t){let x=nt(v)==="light",w=f[0].p,E=-1/0;for(let{p:M,wall:F}of f){let L=b.length?Math.min(...b.map(T=>Math.hypot(M[0]-T[0],M[1]-T[1]))):3,C=Math.hypot(M[0]-p[0],M[1]-p[1]),S=Math.min(L,3)*2;C<_&&!x&&(S-=10),S-=x?C*.35:F*1.2,S>E+1e-9&&(E=S,w=M)}let k=[Math.round(w[0]*100)/100,Math.round(w[1]*100)/100];b.push(k),g.push({entity_id:v,x:k[0],z:k[1],y:null,mount:null})}return g}var m_=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),g_=new Set(["garage","gate"]);function Gu(o,t,e=!1){let n=new Map;return t.length&&o.forEach((i,s)=>{let r=e&&t.length===1?t[0]:t[s];r&&n.set(i.id,r)}),n}function ip(o,t){let e=new Map,n=(s,r)=>s==="none"?null:s??r??null,i=(s,r)=>{let a=n(s.cover,r);return{cover:a,contact:n(s.contact,void 0),tilt:s.tilt==="none"?null:s.tilt,contact2:s.leaves===2&&s.contact2&&s.contact2!=="none"?s.contact2:null,lock:(s.type==="door"||s.type==="window"&&s.sill<=.01)&&s.lock&&s.lock!=="none"?s.lock:null,tilt2:s.leaves===2&&s.tilt2&&s.tilt2!=="none"?s.tilt2:null,position:a&&nt(a)==="cover"&&s.position&&s.position!=="none"?s.position:null,positionInverted:!!s.position_inverted,tiltAngle:s.tilt_angle&&s.tilt_angle!=="none"?s.tilt_angle:null,tiltMax:s.tilt_max??null,tiltOffset:s.tilt_offset??null,tiltInvert:!!s.tilt_invert,shut:!!s.shut,...s.contact_invert?{contactInvert:!0}:{}}};for(let s of t){for(let r of s.rooms){let a=s.openings.filter(b=>b.room_id===r.id).sort((b,g)=>b.edge-g.edge||b.offset-g.offset);if(!a.length)continue;let l=ne(o,r.area_id),c=b=>o.states[b]?.attributes.device_class,d=l.filter(b=>nt(b)==="cover"&&m_.has(c(b))),u=a.filter(b=>b.type==="window"),h=a.filter(b=>b.type==="garage"),p=Gu(u,d,!0),f=Gu(h,l.filter(b=>nt(b)==="cover"&&g_.has(c(b)??"")));for(let b of a){let g=b.type==="window"?p:b.type==="garage"?f:null;e.set(b.id,i(b,g?.get(b.id)))}}for(let r of s.openings)e.has(r.id)||e.set(r.id,i(r))}return e}var b_=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Wa(o){if(!o||Qi(o))return null;let t=o.attributes.window_state;for(let e of[typeof t=="string"?t:null,o.state]){if(!e)continue;let n=b_.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}function Xi(o){return!!o&&/^(switch|button|input_button)\./.test(o)}function zn(o,t){let e=new Map,n=[];for(let r of t){let a=nt(r)==="camera"?`camera:${r}`:o.entities?.[r]?.device_id??`entity:${r}`,l=e.get(a);l||(e.set(a,l=[]),n.push(a)),l.push(r)}let i=n.map(r=>{let a=e.get(r),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),s=new Map(t.map((r,a)=>[r,a]));return i.sort((r,a)=>s.get(r.primary)-s.get(a.primary))}function __(o,t){return zn(o,t).map(e=>e.primary)}var Oa={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},y_=/(cam|doorbell|klingel|tür|door|entry|cctv)/i,op=new Set(["tv_board","tv_wall"]);function sp(o,t){let e=o.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),s=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===s||s.length>=3&&i.includes(s)}function mi(o){return op.has(o)||!!Md(o)}function Zi(o){return mi(o)||o==="desk"||o==="fridge_smart"}var qu={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Na(o,t){return t.startsWith("sensor.")&&o.states[t]?.attributes.device_class==="power"}function v_(o,t){if(Na(o,t))return t;let e=o.entities?.[t]?.device_id;return e?Da(o,e).find(n=>n!==t)??null:null}function Ce(o,t){let e=new Map;for(let n of t){let i=new Set([...n.furniture.flatMap(s=>[s.entity,s.power]),...n.placements.map(s=>s.entity_id)].filter(s=>!!s&&s!=="none"));for(let s of n.furniture){let r=s.type in qu,a=Ee(s.type),l=on(s.type),c=r?qu[s.type]:Oa[s.type]??(re(s.type)?Oa.robot_vacuum:a?Oa.radiator:l?y_:void 0);if(!c&&s.entity==null&&s.power==null)continue;let d=n.rooms.find(b=>b.points.length>=3&&U([s.x,s.z],b.points))??(s.type==="awning"?os(n).find(b=>U([s.x,s.z],b.points)):void 0),u=d?__(o,ne(o,d.area_id)):[],h=b=>`${b} ${et(o,b)}`,p=s.entity==="none"?null:s.entity??null;if(s.entity==null){let b=u.filter(g=>!i.has(g));if(r){let g=b.filter(_=>nt(_)==="light");p=g.find(_=>c.test(h(_)))??g[0]??null}else if(re(s.type)){let g=d?.area_id??null;p=Object.keys(o.entities??{}).find(_=>_.startsWith("vacuum.")&&!i.has(_)&&!fi(o,_)&&_e(o,_)===g)??null}else if(l){let g=b.filter(_=>nt(_)==="camera");p=g.find(_=>c.test(h(_)))??(g.length===1?g[0]:null)}else if(a||s.type==="ac_unit"){let g=b.filter(_=>nt(_)==="climate");p=g.find(_=>c.test(h(_)))??g[0]??null}else if(mi(s.type)){let g=b.filter(_=>nt(_)==="media");p=g.find(_=>o.states[_]?.attributes.device_class==="tv")??g.find(_=>c?.test(h(_)))??(op.has(s.type)?g[0]??null:null)}else s.type==="awning"?p=b.find(g=>g.startsWith("cover.")&&(c?.test(h(g))||o.states[g]?.attributes.device_class==="awning"))??null:c&&(p=b.find(g=>["switch","media","fan"].includes(nt(g)??"")&&c.test(h(g)))??null);p&&i.add(p)}let f=s.power==="none"?null:s.power??null;s.power==null&&(f=p?v_(o,p):null,!f&&c&&d&&!r&&(f=ne(o,d.area_id).find(g=>Na(o,g)&&!i.has(g)&&c.test(h(g)))??null),f&&i.add(f)),(p||f)&&e.set(s.id,{entity:p,power:f})}}return e}var Yu=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,x_={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function rp(o,t){let e=t.car??{},n=u=>u&&u!=="none"?u:null,i=n(e.device)??n(t.entity),s=i?o.entities?.[i]?.device_id:null,r=s&&o.entities?Object.values(o.entities).filter(u=>u.device_id===s).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,h,p)=>r.find(f=>h.includes(f.split(".")[0])&&x_[u].test(a(f))&&(!p||p(f)))??null,c=u=>String(o.states[u]?.attributes.unit_of_measurement??""),d=u=>String(o.states[u]?.attributes.device_class??"");return{soc:n(e.soc)??r.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:n(e.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??r.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??r.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??r.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??r.find(u=>u.startsWith("device_tracker."))??null}}function ap(o,t,e){if(e==="none")return null;if(e)return e;let n=t?o.entities?.[t]?.device_id:null;if(!n||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(Yu.test(i.translation_key??"")||Yu.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function lp(o,t){let e=t.domains??[];if(!t.area&&!e.length)return o;let n=i=>{let s=e.indexOf(i.id.slice(0,i.id.indexOf(".")));return(t.area&&i.area===t.area?2:0)+(s<0?0:1/(s+1))};return o.map((i,s)=>({o:i,i:s,s:n(i)})).sort((i,s)=>s.s-i.s||i.i-s.i).map(i=>i.o)}function w_(o,t){if(!o)return[];let e=n=>{let i=o.entities?.[n];return i?.area_id??(i?.device_id?o.devices?.[i.device_id]?.area_id:null)??null};return Object.keys(o.states??{}).filter(t).map(n=>{let i=e(n),s=i?o.areas?.[i]?.name:void 0;return{id:n,label:`${et(o,n,s)}${s?` \xB7 ${s}`:""}`,...i?{area:i}:{}}}).sort((n,i)=>n.label.localeCompare(i.label))}var ys=class{byKey=new Map;byFilter=new WeakMap;snapshot=null;get(t,e,n){this.check(t);let i=typeof e=="string"?this.byKey.get(e):this.byFilter.get(e);if(i)return i;let s=w_(t,n);return typeof e=="string"?this.byKey.set(e,s):this.byFilter.set(e,s),s}check(t){let e=this.snapshot,n=Object.keys(t?.states??{}).length;e&&e.entities===t?.entities&&e.devices===t?.devices&&e.areas===t?.areas&&e.count===n||(this.snapshot={entities:t?.entities,devices:t?.devices,areas:t?.areas,count:n},this.byKey.clear(),this.byFilter=new WeakMap)}};var cp=40,ja=class extends zt{static formAssociated=!0;static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},prefer:{attribute:!1},groups:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};partition=null;blurTimer;ranked=null;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this.prefer={},this.groups=null,this._query="",this._open=!1,this._cursor=0,this.addEventListener("click",t=>{t.composedPath()[0]===this&&this.renderRoot?.querySelector?.("input")?.focus()})}get open(){return this._open}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=a=>{let l=`${a.label} ${a.id}`.toLowerCase();return e.every(c=>l.includes(c))},i=this.fixed.filter(a=>!t||n(a)),s=this.grouped(this.rankedOptions()),r=t?s.filter(n):s;return[...i,...r.slice(0,cp)]}fits(t){return(this.prefer.domains??[]).includes(t.id.slice(0,t.id.indexOf(".")))}grouped(t){if(!this.groups||!this.prefer.domains?.length)return t;let e=t;if(this.partition?.from===e&&this.partition.domains===this.prefer.domains)return this.partition.list;let n=[...t.filter(i=>this.fits(i)),...t.filter(i=>!this.fits(i))];return this.partition={from:e,domains:this.prefer.domains,list:n},n}headings(t){let e=t.map(()=>null);if(!this.groups||!this.prefer.domains?.length)return e;let n=t.filter(s=>s.id.includes(".")),i=n.filter(s=>this.fits(s)).length;return!i||i===n.length||(e[t.indexOf(n[0])]=this.groups.likely,e[t.indexOf(n[i])]=this.groups.other),e}rankedOptions(){let t=`${this.prefer.area??""}|${(this.prefer.domains??[]).join(",")}`,e=this.ranked;if(e&&e.options===this.options&&e.prefer===t)return e.list;let n=lp(this.options,this.prefer);return this.ranked={options:this.options,prefer:t,list:n},n}onQuery(){let t=this.hits,e=this._query.trim()?t.findIndex(n=>n.id.includes(".")):-1;this._cursor=Math.max(0,e)}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(i=>e.every(s=>`${i.label} ${i.id}`.toLowerCase().includes(s))).length:this.options.length;return Math.max(0,n-cp)}openList(){clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}updated(t){this._open&&t.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[],n=this.headings(e),i=this.value&&this.value.includes(".")?this.value:null;return m`<div class="wrap" @mousedown=${s=>s.target?.localName!=="input"&&s.preventDefault()}>
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
            ${e.length?y:m`<li class="empty">–</li>`}
            ${e.map((s,r)=>m`${n[r]?m`<li class="group" role="presentation">${n[r]}</li>`:y}<li
                role="option"
                aria-selected=${s.id===this.value}
                class="${r===this._cursor?"cursor":""} ${s.id===this.value?"chosen":""}"
                @mousedown=${a=>a.preventDefault()}
                @click=${()=>this.choose(s.id)}
              >
                <span>${s.label}</span>${s.id.includes(".")?m`<small>${s.id}</small>`:y}
              </li>`)}
            ${this.leftOut>0?m`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:y}
          </ul>`:y}
      ${i?m`<small class="picked" title=${i}>${i}</small>`:y}
    </div>`}static styles=[te,lt`
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
    `]};Xt("fp3d-entity-picker",ja);var k_=new URL(import.meta.url),$_=new URL("./home-3d-3d.js?v=19ca3007fb94",k_).href,dp;function Ge(){return dp??=import($_),dp}var On=o=>o?{home_id:o}:{};async function vs(o,t,e){return(await o.callWS({type:"home_3d/image/get",...On(e),image_id:t})).data}async function gi(o,t,e,n){await o.callWS({type:"home_3d/image/set",...On(n),image_id:t,data:e})}async function up(o,t){return(await o.callWS({type:"home_3d/history/list",...On(t)})).snapshots}async function pp(o,t){await o.callWS({type:"home_3d/history/snapshot",...On(t)})}async function hp(o,t,e){return o.callWS({type:"home_3d/history/restore",...On(e),snapshot_id:t})}async function fp(o,t,e){return o.callWS({type:"home_3d/packs/items",pack_id:t,items:e})}async function mp(o,t,e=!1){return o.callWS({type:"home_3d/packs/import",pack:t,...e?{confirm:e}:{}})}async function gp(o,t,e=!1){return o.callWS({type:"home_3d/packs/import",files:t,...e?{confirm:e}:{}})}async function bp(o,t,e=!1,n){return o.callWS({type:"home_3d/packs/install_url",url:t,...e?{confirm:e}:{},...n?{commit:n}:{}})}function _p(o,t){return o.callWS({type:"home_3d/packs/preview_url",url:t})}function to(o){return o.callWS({type:"home_3d/packs/updates"})}function xs(o,t){return o.callWS({type:"home_3d/packs/update_items",...t?{types:t}:{}})}function yp(o){return o.callWS({type:"home_3d/packs/check"})}function vp(o,t,e){return o.callWS({type:"home_3d/packs/pin",pack_id:t,pinned:e})}function xp(o,t){return o.callWS({type:"home_3d/packs/rollback",pack_id:t})}async function wp(o,t){await o.callWS({type:"home_3d/packs/remove",pack_id:t})}function kp(o){return o.callWS({type:"home_3d/backup/export"})}function $p(o,t,e,n,i,s){return o.callWS({type:"home_3d/backup/import",...On(s),...t?{building:t}:{},...e?{packs:e}:{},...n?{items:n}:{},...i??{}})}function Mp(o,t,e,n,i,s){return o.callWS({type:"home_3d/backup/import",check_only:!0,...On(s),...t?{building:t}:{},...e?{packs:e}:{},...n?{items:n}:{},...i??{}})}function Ep(o){return o.callWS({type:"home_3d/editors/get"})}function Ba(o,t){return o.callWS({type:"home_3d/editors/set",editors:t})}var M_="home3d-recipes",eo="packs",ws=null;function Pp(){return ws||(ws=new Promise(o=>{try{if(typeof indexedDB>"u")return o(null);let t=indexedDB.open(M_,1);t.onupgradeneeded=()=>t.result.createObjectStore(eo),t.onsuccess=()=>o(t.result),t.onerror=()=>o(null),t.onblocked=()=>o(null)}catch{o(null)}}),ws)}async function Sp(o){let t=await Pp();return t?new Promise(e=>{try{let n=t.transaction(eo,"readonly").objectStore(eo).get(o);n.onsuccess=()=>e(n.result&&typeof n.result.hash=="string"?n.result:null),n.onerror=()=>e(null)}catch{e(null)}}):null}var Fp={async read(o,t){let e=await Sp(o);return e&&e.hash===t?e.items:{}},async write(o,t,e){let n=await Pp();if(!n)return;let i=await Sp(o),s=i&&i.hash===t?i.items:{},r={hash:t,items:{...s,...Object.fromEntries(e.map(a=>[a.id,a]))}};try{n.transaction(eo,"readwrite").objectStore(eo).put(r,o)}catch{}}};var Rp=Fp;async function E_(o,t){let e=vd().find(n=>n.id===o)?.hash;if(!e)return t;try{let n=await Rp.read(o,e),i=t.filter(s=>n[s]).map(s=>n[s]);return i.length&&pa(o,e,i),t.filter(s=>!n[s])}catch{return t}}var S_=15,Tn=null,Ka=new Map;async function Se(o,t){let e=[];for(let[n,i]of yd(t))for(let s of i){let r=`${n}/${s}`,a=Ka.get(r);a||(a=P_(o,n,s).finally(()=>Ka.delete(r)),Ka.set(r,a)),e.push(a)}await Promise.all(e)}function P_(o,t,e){if(!Tn){let n={hass:o,wanted:new Map,done:Promise.resolve()};n.done=new Promise(i=>setTimeout(i,S_)).then(()=>F_(n)),Tn=n}return Tn.wanted.set(t,(Tn.wanted.get(t)??new Set).add(e)),Tn.done}async function F_(o){Tn===o&&(Tn=null),await Promise.all([...o.wanted].map(async([t,e])=>{try{let n=await E_(t,[...e]);if(!n.length)return;let i=await fp(o.hass,t,n);pa(t,i.hash,i.items),i.hash&&await Rp.write(t,i.hash,i.items).catch(()=>{})}catch{}}))}function Ip(o){let t=new Set;for(let e of o.floors)for(let n of e.furniture)for(let i of[n.type,n.vehicle,...(n.types??[]).map(s=>s.vehicle),...(n.rack?.slots??[]).map(s=>s.type)])i&&Pt(i)&&t.add(i);return[...t]}var Ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ce=o=>(...t)=>({_$litDirective$:o,values:t}),ye=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:R_}=Yc,Ap=o=>o;var ks=o=>o.strings===void 0,zp=()=>document.createComment(""),bi=(o,t,e)=>{let n=o._$AA.parentNode,i=t===void 0?o._$AB:t._$AA;if(e===void 0){let s=n.insertBefore(zp(),i),r=n.insertBefore(zp(),i);e=new R_(s,r,o,o.options)}else{let s=e._$AB.nextSibling,r=e._$AM,a=r!==o;if(a){let l;e._$AQ?.(o),e._$AM=o,e._$AP!==void 0&&(l=o._$AU)!==r._$AU&&e._$AP(l)}if(s!==i||a){let l=e._$AA;for(;l!==s;){let c=Ap(l).nextSibling;Ap(n).insertBefore(l,i),l=c}}}return e},ln=(o,t,e=o)=>(o._$AI(t,e),o),I_={},$s=(o,t=I_)=>o._$AH=t,Op=o=>o._$AH,Ms=o=>{o._$AR(),o._$AA.remove()};var Es=ce(class extends ye{constructor(o){if(super(o),o.type!==Ut.PROPERTY&&o.type!==Ut.ATTRIBUTE&&o.type!==Ut.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ks(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[t]){if(t===Nt||t===y)return t;let e=o.element,n=o.name;if(o.type===Ut.PROPERTY){if(t===e[n])return Nt}else if(o.type===Ut.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(n))return Nt}else if(o.type===Ut.ATTRIBUTE&&e.getAttribute(n)===t+"")return Nt;return $s(o),t}});var Ss=class{waiting=[];onChange=null;get current(){return this.waiting[0]?.req??null}ask(t){return new Promise(e=>{this.waiting.push({req:t,resolve:e}),this.waiting.length===1&&this.onChange?.()})}answer(t,e=""){let n=this.waiting.shift();n&&(n.resolve({ok:t,value:e}),this.onChange?.())}},Ps=globalThis;function Tp(o){Ps.__fp3dAskFactory||(Ps.__fp3dAskFactory=o)}function A_(){return Ps.__fp3dAskHost??Ps.__fp3dAskFactory?.()??null}var z_={ok:!1,value:""};function Lp(o){let t=A_();return t?t.ask(o):Promise.resolve(z_)}async function _i(o,t){return(await Lp({text:o,...t})).ok}async function Cp(o,t){await Lp({text:o,ok:t.ok})}var no=(o,t)=>{let e=o._$AN;if(e===void 0)return!1;for(let n of e)n._$AO?.(t,!1),no(n,t);return!0},Fs=o=>{let t,e;do{if((t=o._$AM)===void 0)break;e=t._$AN,e.delete(o),o=t}while(e?.size===0)},Hp=o=>{for(let t;t=o._$AM;o=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(o))break;e.add(o),L_(t)}};function O_(o){this._$AN!==void 0?(Fs(this),this._$AM=o,Hp(this)):this._$AM=o}function T_(o,t=!1,e=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let s=e;s<n.length;s++)no(n[s],!1),Fs(n[s]);else n!=null&&(no(n,!1),Fs(n));else no(this,o)}var L_=o=>{o.type==Ut.CHILD&&(o._$AP??=T_,o._$AQ??=O_)},yi=class extends ye{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),Hp(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(no(this,t),Fs(this))}setValue(t){if(ks(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var C_='a[href], button, input, select, textarea, summary, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';function H_(o,t,e,n){if(!o.length)return null;let i=o[0],s=o[o.length-1],r=t===null?-1:o.indexOf(t);return r<0?n?null:e?s:i:e&&r===0?s:!e&&r===o.length-1?i:null}function Dp(o){return[...o.querySelectorAll(C_)].filter(t=>!t.disabled&&t.tabIndex>=0&&t.getClientRects().length>0&&!t.closest("[inert]"))}function Vp(o){return o.getRootNode().activeElement??null}function Ga(o,t){if(o.key!=="Tab"||o.altKey||o.ctrlKey||o.metaKey)return;let e=Dp(t),n=Vp(t),i=!!n&&n!==t&&t.contains(n),s=e.length?H_(e,i?n:null,o.shiftKey,i):t;s&&(o.preventDefault(),s.focus())}function D_(o=document){let t=o.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function V_(o){return o.hasAttribute("tabindex")?o:Dp(o)[0]??null}var Ua=class extends yi{box=null;back=null;onKey=t=>{this.box&&Ga(t,this.box)};constructor(t){if(super(t),t.type!==Ut.ELEMENT)throw new Error("modalFocus() goes on the dialog element")}render(){return y}update(t){let e=t.element;return e!==this.box&&(this.release(!1),this.box=e,this.back=D_(),e.addEventListener("keydown",this.onKey),requestAnimationFrame(()=>{if(this.box!==e||!e.isConnected)return;let n=Vp(e);(!n||n===e||!e.contains(n))&&V_(e)?.focus()})),y}release(t){this.box?.removeEventListener("keydown",this.onKey);let e=this.back;this.box=null,this.back=null,t&&e?.isConnected&&e.focus()}disconnected(){this.release(!0)}reconnected(){}},cn=ce(Ua);var Wp="fp3d-ask-dialog";function W_(){let o=document.activeElement;for(;o?.shadowRoot?.activeElement;)o=o.shadowRoot.activeElement;return o}function N_(){let o=document.fullscreenElement;for(;o?.shadowRoot?.fullscreenElement;)o=o.shadowRoot.fullscreenElement;return o??document.body}var qa=class extends zt{queue=new Ss;typed="";shown=null;returnFocus=null;constructor(){super(),this.queue.onChange=()=>this.requestUpdate()}ask(t){return this.queue.ask(t)}answer(t){let e=this.queue.current;e&&this.queue.answer(t||e.cancel===void 0,e.input!==void 0?this.typed:"")}key(t){t.stopPropagation(),t.key==="Escape"?(t.preventDefault(),this.answer(!1)):t.key==="Enter"&&t.target.tagName==="INPUT"?(t.preventDefault(),this.answer(!0)):Ga(t,t.currentTarget)}willUpdate(){let t=this.queue.current;t!==this.shown&&(t&&!this.shown&&(this.returnFocus=W_()),this.typed=t?.input??"",this.toggleAttribute("open",!!t))}updated(){let t=this.queue.current;if(t===this.shown)return;if(this.shown=t,!t){this.returnFocus?.focus?.(),this.returnFocus=null;return}let e=this.renderRoot.querySelector("input");e?(e.focus(),e.select()):this.renderRoot.querySelector(t.danger&&t.cancel!==void 0?".ask-cancel":".ask-ok")?.focus()}render(){let t=this.queue.current;return t?m`<div class="backdrop" @click=${()=>this.answer(!1)}></div>
      <div class="box ${t.detail!==void 0?"wide":""}" role=${t.cancel===void 0?"dialog":"alertdialog"} aria-modal="true" aria-describedby="ask-text" @keydown=${e=>this.key(e)}>
        <p id="ask-text" class="text">${t.text}</p>
        ${t.detail!==void 0?m`<textarea class="detail" readonly rows="14" spellcheck="false" aria-labelledby="ask-text" .value=${t.detail}></textarea>`:y}
        ${t.input!==void 0?m`<label class="fp3d-field"><input type="text" aria-labelledby="ask-text" .value=${Es(this.typed)} @input=${e=>this.typed=e.target.value} /></label>`:y}
        <div class="buttons">
          ${t.cancel!==void 0?m`<button class="fp3d-btn ask-cancel" @click=${()=>this.answer(!1)}>${t.cancel}</button>`:y}
          <button class="fp3d-btn ask-ok ${t.danger?"ask-danger":"fp3d-primary"}" @click=${()=>this.answer(!0)}>${t.ok}</button>
        </div>
      </div>`:y}static styles=[te,rn,lt`
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
    `]};Xt(Wp,qa);var io=null;Tp(()=>typeof document>"u"?null:{ask(o){io??=document.createElement(Wp);let t=N_();return io.parentNode!==t&&!io.queue?.current&&t.appendChild(io),io.ask(o)}});var Np=[{keys:["Ctrl+Z"],text:"help_key_undo"},{keys:["Ctrl+Y","Ctrl+Shift+Z"],text:"help_key_redo"},{keys:["Ctrl+D"],text:"help_key_duplicate"},...Cu,{keys:["Del","Backspace"],text:"help_key_delete"},{keys:["\u2190\u2191\u2192\u2193"],text:"help_key_nudge"},{keys:["R","Shift+R"],text:"help_key_rotate"},{keys:["L"],text:"help_key_lock"},{keys:["Shift+click"],text:"help_key_multi"},{keys:["Alt+click"],text:"help_key_pick_through"},{keys:["Enter"],text:"help_key_close_shape"},{keys:["Esc"],text:"help_key_escape"},{keys:["Shift","Alt"],text:"help_key_snap"},{keys:["?"],text:"help_key_help"}],jp=[{mark:"swing",text:"help_legend_swing"},{mark:"track",text:"help_legend_track"},{mark:"guide",text:"help_legend_guide"},{mark:"snap",text:"help_legend_snap"},{mark:"ghost",text:"help_legend_ghost"},{mark:"selected",text:"help_legend_selected"}];function Bp(o){return o.key==="?"&&!o.ctrlKey&&!o.metaKey&&!o.altKey}var Kp=(o,t,e)=>{let n=new Map;for(let i=t;i<=e;i++)n.set(o[i],i);return n},Up=ce(class extends ye{constructor(o){if(super(o),o.type!==Ut.CHILD)throw Error("repeat() can only be used in text expressions")}dt(o,t,e){let n;e===void 0?e=t:t!==void 0&&(n=t);let i=[],s=[],r=0;for(let a of o)i[r]=n?n(a,r):r,s[r]=e(a,r),r++;return{values:s,keys:i}}render(o,t,e){return this.dt(o,t,e).values}update(o,[t,e,n]){let i=Op(o),{values:s,keys:r}=this.dt(t,e,n);if(!Array.isArray(i))return this.ut=r,s;let a=this.ut??=[],l=[],c,d,u=0,h=i.length-1,p=0,f=s.length-1;for(;u<=h&&p<=f;)if(i[u]===null)u++;else if(i[h]===null)h--;else if(a[u]===r[p])l[p]=ln(i[u],s[p]),u++,p++;else if(a[h]===r[f])l[f]=ln(i[h],s[f]),h--,f--;else if(a[u]===r[f])l[f]=ln(i[u],s[f]),bi(o,l[f+1],i[u]),u++,f--;else if(a[h]===r[p])l[p]=ln(i[h],s[p]),bi(o,i[u],i[h]),h--,p++;else if(c===void 0&&(c=Kp(r,p,f),d=Kp(a,u,h)),c.has(a[u]))if(c.has(a[h])){let b=d.get(r[p]),g=b!==void 0?i[b]:null;if(g===null){let _=bi(o,i[u]);ln(_,s[p]),l[p]=_}else l[p]=ln(g,s[p]),bi(o,i[u],g),i[b]=null;p++}else Ms(i[h]),h--;else Ms(i[u]),u++;for(;p<=f;){let b=bi(o,l[f+1]);ln(b,s[p]),l[p++]=b}for(;u<=h;){let b=i[u++];b!==null&&Ms(b)}return this.ut=r,$s(o,l),Nt}});function Gp(o,t){if(o===t)return 0;let e=o.length,n=t.length;if(!e)return n;if(!n)return e;let i=[],s=Array.from({length:n+1},(r,a)=>a);for(let r=1;r<=e;r++){let a=[r];for(let l=1;l<=n;l++){let c=o[r-1]===t[l-1]?0:1,d=Math.min(s[l]+1,a[l-1]+1,s[l-1]+c);r>1&&l>1&&o[r-1]===t[l-2]&&o[r-2]===t[l-1]&&(d=Math.min(d,i[l-2]+1)),a.push(d)}i=s,s=a}return s[n]}function j_(o){return o.length<4?0:o.length<9?1:2}function Ya(o,t){let e=j_(o);return!e||o===t||o[0]!==t[0]||Math.abs(o.length-t.length)>e?!1:o.length===4?t.length===4&&[...o].sort().join("")===[...t].sort().join("")&&Gp(o,t)===1:Gp(o,t)<=e}var Cn=["sofa","seating","table","storage","bed","kitchen","appliance","bath","lamp","media","office","tech","network","heating","energy","household","deco","tray","frame","vase","cushion","throw","candle","plant","outdoor","kids","sport","pets","vehicle","stairs","architecture"],vi=["living","dining","kitchen","bedroom","kids","bath","office","hall","utility","garage","garden","hobby","conservatory","loft"],Ln="deko dekoration decor decoration",Ja={sofa:"sofa couch",seating:"stuhl sessel hocker bank sitz chair stool bench seat",table:"tisch table",storage:"schrank regal kommode vitrine cabinet shelf dresser wardrobe",bed:"bett bed",kitchen:"k\xFCche kitchen",appliance:"ger\xE4t ger\xE4te appliance",bath:"bad bath",lamp:"lampe lampen leuchte licht lamp light",media:"tv fernseher lautsprecher audio speaker",office:"b\xFCro schreibtisch desk office",tech:"technik smart home sensor",network:"netzwerk router wlan lan wifi wi-fi ethernet network",heating:"heizung heizk\xF6rper klima heating climate",energy:"energie strom solar energy power",household:"haushalt household",deco:Ln,tray:`tablett tray ${Ln}`,frame:`bild bilder rahmen bilderrahmen frame picture photo poster art ${Ln}`,vase:`vase vasen ${Ln}`,cushion:`kissen cushion pillow ${Ln}`,throw:`decke plaid \xFCberwurf throw blanket ${Ln}`,candle:`kerze kerzen candle ${Ln}`,plant:"pflanze pflanzen baum plant tree",outdoor:"garten au\xDFen drau\xDFen garden outdoor",kids:"kinder kids",sport:"fitness sport",pets:"haustier tier pet",vehicle:"auto fahrzeug car vehicle",stairs:"treppe gel\xE4nder stairs railing",architecture:"architektur architecture"},Qa=["kitchen","appliance"],qp=[{words:["hob","cooktop","stovetop","hotplate","cooking plate"],kinds:Qa},{words:["cooker","stove","range cooker","freestanding cooker"],also:["hob","oven"],kinds:Qa},{words:["cooker hood","extractor","extractor hood","range hood","hood"],kinds:Qa},{words:["worktop","countertop","counter top","benchtop","work surface"],kinds:["kitchen"]},{words:["splashback","backsplash"],kinds:["kitchen"]},{words:["kitchen unit","base unit","base cabinet","lower cabinet"],kinds:["kitchen"]},{words:["wall unit","wall cabinet","upper cabinet"],kinds:["kitchen"]},{words:["tall unit","tall cabinet","larder","pantry cabinet"],kinds:["kitchen","storage"]},{words:["tap","faucet","mixer tap"],kinds:["kitchen","bath"]},{words:["fridge","refrigerator"]},{words:["washing machine","washer"],kinds:["appliance"]},{words:["tumble dryer","dryer","clothes dryer"],kinds:["appliance"]},{words:["hoover","vacuum","vacuum cleaner"]},{words:["wardrobe","closet","armoire"],kinds:["storage"]},{words:["cupboard","cabinet"],kinds:["storage","kitchen","bath","office"]},{words:["chest of drawers","dresser","drawers"],kinds:["storage"]},{words:["bedside table","nightstand","night stand","bedside cabinet"]},{words:["sofa","couch","settee"],kinds:["sofa"]},{words:["sofa bed","sleeper sofa"]},{words:["pouffe","pouf","ottoman","footstool"]},{words:["tv unit","tv stand","tv board","tv bench","media unit","lowboard"]},{words:["toilet","wc","loo","lavatory"],kinds:["bath"]},{words:["basin","washbasin","wash basin","vanity basin"],kinds:["bath"]},{words:["bath","bathtub","tub"],kinds:["bath"]},{words:["bin","rubbish bin","dustbin","waste bin","trash can","garbage can"]},{words:["letterbox","mailbox","postbox"]},{words:["socket","plug socket","power point","outlet"],kinds:["tech"]},{words:["torch","flashlight"]},{words:["fairy lights","string lights"]},{words:["curtains","drapes"]},{words:["duvet","comforter"]},{words:["loft ladder","attic ladder"]},{words:["cushion","pillow"]},{words:["throw","blanket","plaid"]},{words:["photo frame","picture frame"]},{words:["candle","tealight","tea light"]},{words:["access point","wi-fi","wifi"],kinds:["network"]},{words:["network switch","ethernet switch"],kinds:["network"]},{words:["trolley","cart"]},{words:["single bed","twin bed","one person bed"],kinds:["bed","kids"]},{words:["double bed","queen bed","king bed"],kinds:["bed"]},{words:["car","automobile","motor car"],kinds:["vehicle"]},{words:["bicycle","bike","cycle","push bike"],kinds:["vehicle"]},{words:["tv","television","telly"],kinds:["media"]},{words:["plant","houseplant","house plant","pot plant","indoor plant"],kinds:["plant"]},{words:["raspberry pi","pi","rpi","raspi"],kinds:["tech","network"]},{words:["zigbee stick","zigbee dongle","zigbee usb stick","zigbee coordinator","zigbee adapter","coordinator","usb stick"],kinds:["tech","network"]},{words:["mini pc","nuc","micro pc","small form factor pc"],kinds:["tech","network"]},{words:["smoke detector","smoke alarm","smoke sensor","fire alarm","fire detector"],kinds:["tech"]}];function oo(o){return o.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss")}var B_=o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),K_=qp.map(o=>({...o,re:new RegExp(`(?:^|[^\\p{L}\\p{N}])(?:${o.words.map(t=>B_(oo(t))).join("|")})(?=$|[^\\p{L}\\p{N}])`,"u")}));function so(o,t){let e=K_.filter(a=>!a.kinds||a.kinds.includes(t)),n=oo(o),i=e.filter(a=>a.re.test(n)),s=oo(i.flatMap(a=>a.also??[]).join(" ")),r=s?e.filter(a=>!i.includes(a)&&a.re.test(s)):[];return[...i.flatMap(a=>[...a.words,...a.also??[]]),...r.flatMap(a=>a.words)].join(" ")}var U_=new Set(qp.flatMap(o=>[...o.words,...o.also??[]]).map(oo));function Rs(o){return U_.has(oo(o))}var Zp={lamp_ceiling:["lamp",[]],lamp_downlight:["lamp",[]],lamp_spot:["lamp",[]],lamp_panel:["lamp",[]],lamp_pendant:["lamp",[]],lamp_fan:["lamp",[]],lamp_floor:["lamp",["living","bedroom","office","conservatory"]],lamp_uplight:["lamp",["living","bedroom","office"]],lamp_table:["lamp",["living","bedroom","office","conservatory"]],lamp_wall:["lamp",[]],led_strip:["lamp",[]],lamp_bollard:["lamp",["garden"]],lamp_garden:["lamp",["garden"]],radiator:["heating",[]],ac_unit:["heating",[]],sofa:["sofa",["living","conservatory"]],sofa_l:["sofa",["living"]],sofa_u:["sofa",["living"]],armchair:["seating",["living","bedroom","office","conservatory"]],stool:["seating",["living","bath","kids"]],coffee_table:["table",["living","conservatory"]],tv_board:["media",["living","bedroom"]],tv_wall:["media",["living","bedroom"]],sideboard:["storage",["living","dining","hall"]],shelf:["storage",["living","office","kids","utility","garage","loft"]],plant:["plant",[]],rug:["deco",["living","bedroom","kids","hall","conservatory"]],table:["table",["dining","kitchen","living","conservatory"]],table_round:["table",["dining","kitchen","living","conservatory"]],chair:["seating",["dining","kitchen","living","conservatory"]],bench:["seating",["dining","kitchen","hall","garden"]],corner_bench:["seating",["dining","kitchen"]],bar_stool:["seating",["kitchen","dining"]],kitchen:["kitchen",["kitchen"]],kitchen_wall:["kitchen",["kitchen"]],kitchen_tall:["kitchen",["kitchen"]],island:["kitchen",["kitchen"]],worktop:["kitchen",["kitchen","utility","garage"]],sink:["kitchen",["kitchen","utility"]],stove:["appliance",["kitchen"]],dishwasher:["appliance",["kitchen"]],fridge:["appliance",["kitchen","utility"]],fridge_smart:["appliance",["kitchen"]],bed:["bed",["bedroom","kids"]],bunk_bed:["bed",["kids","bedroom"]],nightstand:["storage",["bedroom","kids"]],wardrobe:["storage",["bedroom","kids","hall"]],dresser:["storage",["bedroom","kids","hall"]],bathtub:["bath",["bath"]],shower:["bath",["bath"]],wc:["bath",["bath"]],washbasin:["bath",["bath"]],washer:["appliance",["bath","utility"]],dryer:["appliance",["bath","utility"]],desk:["office",["office","kids","bedroom"]],office_chair:["office",["office","kids"]],tall_cabinet:["storage",["office","hall","utility","bath","loft"]],coat_rack:["household",["hall"]],stairs:["stairs",["hall","living"]],stairs_u:["stairs",["hall","living"]],stairwell:["stairs",["hall","living"]],loft_ladder:["stairs",["garage","hall","loft"]],robot_vacuum:["appliance",[]],inverter:["energy",["utility","garage"]],home_battery:["energy",["utility","garage"]],wallbox:["energy",["garage"]],meter:["energy",["utility","garage"]],grid_point:["energy",["utility"]],pool_pump:["outdoor",["utility","garage","garden"]],pool_filter:["outdoor",["utility","garage","garden"]],pool_heat_pump:["outdoor",["garden","utility"]],pool_dosing:["outdoor",["utility","garage"]],pool_valve:["outdoor",["utility","garage"]],parking:["vehicle",["garage"]],awning:["outdoor",["garden"]],waste_bin:["household",["garden","garage","utility"]],mailbox:["household",["garden","hall"]],wall_switch:["tech",[]],wall_socket:["tech",[]],wifi_ap:["network",[]],water_heater:["heating",["utility","bath","garage","loft"]]};function th(o=[]){let t=new Set(Object.values(rs).flat());for(let e of o)t.add(e);return[...t].filter(e=>e in Zp)}var G_={living:["living"],kitchen:["kitchen"],bedroom:["bedroom"],bath:["bath"],kids:["kids"],office:["office"],garage:["garage"],garden:["garden"],utility:["utility"],cinema:["living","hobby"],fitness:["hobby"],conservatory:["conservatory"],loft:["loft"],stairs:["hall"],vehicles:["garage"],pets:[],smarthome:[],architecture:[],fun_halloween:[],fun_pets:[]},q_=[[/\b(van|estate|suv|compact car|sedan|coup|cabrio|convertible|city ev|minibus|transporter|panel van|pickup|campervan|motorhome|caravan|trailer|motorcycle|electric car|e-bike|bike stand|bike holder|bike rack)\b/,"vehicle",["garage"]],[/\b(cat|dog|pet|pets|litter|hamster|rabbit|bird cage|aquarium|terrarium|bowls|scratch|animal|cage)\b/,"pets",[]],[/\b(stairs?|stair|winder|landing|railing|spiral|space-saver|outdoor steps)\b/,"stairs",["hall"]],[/\b(treadmill|power rack|rower|rowing|spin bike|dumbbell|punching|yoga|elliptical|cross trainer|gym|wall bars|fitness|smart trainer|kettlebell|massage chair|water cooler|exercise)\b/,"sport",["hobby"]],[/\b(kids|loft bed|teepee|tipi|play kitchen|play mat|play tower|toy|toys|rocking horse|cuddle|cosy corner|ball pit|house bed|baby|crib|cot|changing table|children)\b/,"kids",["kids"]],[/\b(lamp|lamps|lantern|torch|lights|spotlight|downlight|pendant|light cove|led niche|light pillar|ceiling panel|wall light|workshop light|under-cabinet light|night light|star projector|star ceiling|garden spots|up and down|candelabra)\b/,"lamp",null],[new RegExp("(?<!drip |ice |baking |oven )\\btrays?\\b"),"tray",null,!0],[new RegExp("(?<!bed |door |window |climbing )\\b(picture frames?|photo frames?|frames?|pictures?|paintings?|posters?|wall art|canvas|art print)\\b"),"frame",null,!0],[/\b(vase|vases)\b/,"vase",null,!0],[/\b(cushion|cushions|pillow|pillows|bolster)\b/,"cushion",null,!0],[/\b(throw|throws|blanket|plaid)\b/,"throw",null,!0],[/\b(candle|candles|tealight|tea light|candlestick)\b/,"candle",null,!0],[/\b(herb garden|tree|shrub|brush|plant|plants|monstera|flower|pots|pampas)\b/,"plant",null],[/\b(server|network|nas|router|modem|mesh|access point|wi-fi|wifi|patch panel|ethernet|poe)\b/,"network",null],[/\b(tv|television|projector|projection screen|screen|speaker|subwoofer|soundbar|receiver|turntable|record shelf|game console|hi-fi|cinema seat|cinema|acoustic|bass trap|smart display|media wall|arcade|monitor|sim racing|piano)\b/,"media",null],[/\b(fridge|freezer|oven|hob|cooktop|stovetop|hotplate|cooker|extractor|refrigerator|dishwasher|microwave|coffee|kettle|toaster|mixer|hood|washer|washing machine|dryer|vacuum|ironing|wine|range|popcorn)\b/,"appliance",null],[/\b(wallbox|home battery|inverter|solar|balcony|fuse box|meter cabinet|grid)\b/,"energy",null],[/\b(heat pump|boiler|buffer tank|manifold|ventilation|radiator|fan|air purifier|humidifier|dehumidifier|thermostat|water softener|water pump|hot water|patio heater|fireplace|wood stove|chimney|stove)\b/,"heating",null],[/\b(printer|filament|siren|smoke detector|camera|baby monitor|phone booth|smart home|sensor|leak|switch|socket|compressor|door opener|alarm clock|clock)\b/,"tech",null],[/\b(hot tub|outdoor|garden|patio|pergola|parasol|grill|greenhouse|raised bed|shed|trampoline|sprinkler|irrigation|rain barrel|rotary|awning|mower|fire bowl|hammock|lounger)\b/,"outdoor",["garden"]],[/\b(base unit|drawer unit|sink unit|wall unit|corner base|corner wall|pantry|kitchen|island|breakfast bar|spice rack|trolley|worktop|countertop|work surface|splashback|larder|sink)\b/,"kitchen",["kitchen"]],[/\b(bathtub|tub|shower|toilet|wc|bidet|bathroom|washbasin|basin|sauna|whirlpool)\b/,"bath",["bath"]],[/\b(bed|beds|boxspring|box-spring|futon|canopy)\b/,"bed",["bedroom"]],[/\b(wardrobe|closet|clothes|dresser|chest of|nightstand|bedside)\b/,"storage",["bedroom"]],[/\b(desk|office|whiteboard|filing|file cabinet)\b/,"office",["office"]],[/\b(sofa|chesterfield|chaise|r[ée]camière|recamiere|lounge set)\b/,"sofa",["living"]],[/\b(table|tables|workbench|vanity)\b/,"table",null],[/\b(armchair|chair|chairs|stool|stools|bench|recliner|bean bag|pouf|seat|rocking)\b/,"seating",null],[/\b(waste|bin|mailbox|drying rack|basket|coat|laundry|hooks)\b/,"household",null],[/\b(shelf|shelves|cabinet|sideboard|lowboard|highboard|vitrine|display cabinet|cube|rack|bookcase|tool wall|shoe|console table)\b/,"storage",null],[/\b(column|beam|beams|partition|sliding wall|divider|podium|platform|gallery|curtain|niche|built-in)\b/,"architecture",[]],[/\b(rug|mirror|pumpkin|cobweb|garland|gravestone|grave|skeleton|cauldron|ghost|broom|deco|decor)\b/,"deco",null]],Y_=/\b(mirror|towel|laundry|washer|cabinet|shelf|plant|fan|rain shower)\b/;function Q_(o){return`${o.id.replace(/_/g," ")} ${o.name.en??""}`.toLowerCase()}function J_(o){return(o.name.en??o.id.replace(/_/g," ")).toLowerCase().replace(/\s+(with|mit|and|und|plus|incl\.?|including)\b.*$/,"").replace(/\s*\(.*$/,"")}function X_(o,t){let e=t.group&&Cn.includes(t.group)?t.group:null,n=t.room?.filter(l=>vi.includes(l)),i=o.replace(/^[a-z0-9_-]+\./,""),s=G_[i]??[];if(e)return{kind:e,rooms:n??s};let r=Q_(t),a=J_(t);if(i==="bath"&&Y_.test(r)&&!/\b(washing machine cabinet|fan)\b/.test(r))return{kind:"bath",rooms:n??["bath"]};for(let[l,c,d,u]of q_)if(l.test(u?a:r))return{kind:c,rooms:n??(d&&d.length?[...new Set([...d,...s])]:s)};return{kind:"deco",rooms:n??s}}function eh(o){let t=o.toLowerCase(),e=[[/kinder|kids|child|niñ|bambin|enfant|dziec|děts|barn|lapsi|gyerek|copi|otro|儿童|kinderkamer/,"kids"],[/schlaf|bedroom|dormit|camera da letto|chambre|slaapkamer|sypial|ložnic|sover|makuu|háló|dormitor|spaln|卧室|soveværelse/,"bedroom"],[/wohn|living|lounge|salon|soggiorno|sala de estar|woonkamer|obývací|stue|olohuone|nappali|sufrag|dnevn|客厅/,"living"],[/\bess|dining|comedor|pranzo|salle à manger|eetkamer|jadal|jídel|spise|ruokailu|étkez|jedil|餐厅/,"dining"],[/küche|kueche|kitchen|cocina|cucina|cuisine|keuken|kuchn|kuchyn|kjøkken|køkken|keittiö|konyha|bucăt|kuhinj|厨房/,"kitchen"],[/\bbad\b|bath|baño|bagno|salle de bain|badkamer|łazienk|koupeln|baderom|badevær|kylpy|fürdő|baie|kopaln|wc|toilet|gäste|guest|浴室|dusch|shower/,"bath"],[/büro|buero|office|arbeit|studio|bureau|kantoor|biuro|pracovn|kontor|työhuone|iroda|birou|pisarn|gaming|办公/,"office"],[/flur|diele|hall|corridor|entrance|eingang|ingresso|gang|hal\b|przedpok|chodba|entré|eteinen|előszoba|hol\b|hodnik|treppe|stair|walk/,"hall"],[/conservatory|orangery|sun ?room|wintergarten|v[ée]randa|jard[ií]n de invierno|giardino d.inverno|vinterhave|uterum|talvipuutarha|ogr[óo]d zimowy|zimn[íi] zahrada/,"conservatory"],[/\bloft\b|attic|dachboden|spitzboden|speicher|grenier|zolder|soffitta|desv[áa]n|strych|p[ůu]da|loftet|ullakko|padl[áa]s|mansard|podstre[šs]|阁楼/,"loft"],[/hauswirtschaft|hwr|utility|technik|keller|wasch|laundry|lavander|buanderie|berging|bijkeuken|pralni|prádeln|vaskerom|kodinhoito|mosó|tehnic|pralnic|cellar|basement|abstell|storage|vorrat|pantry|heizung|boiler/,"utility"],[/garage|carport|werkstatt|workshop|garaje|garaż|garáž|verkstad|autotalli|garázs|garaj|garaž|车库/,"garage"],[/garten|garden|terrasse|terrace|balkon|balcony|jardin|giardino|tuin|ogród|zahrad|hage|have|puutarha|kert|grădin|vrt|pool|yard|patio|einfahrt|driveway|花园/,"garden"],[/fitness|gym|sport|hobby|kino|cinema|heimkino|home theater|spiel|play|party|bar\b|sauna|wellness/,"hobby"]];for(let[n,i]of e)if(n.test(t))return i;return null}var Z_=/\s*\(?\b\d+(?:[.,]\d+)?\s*(?:[×x]\s*\d+(?:[.,]\d+)?)*\s*(?:cm|m|l|u|″|"|-seater|-sitzer|-door|-türig|-drawer|-teilig|-piece|seats|parts)?\)?/gi;function t0(o){let t=o.replace(Z_," ").replace(/\s+(mit|with|avec|con)\s*$/i,"").replace(/\s{2,}/g," ").replace(/^[\s,–-]+|[\s,–-]+$/g,"").trim();return t?t[0].toUpperCase()+t.slice(1):o}function Yp(o){let t=[...o.matchAll(/\d+(?:[.,]\d+)?(?:\s*[×x]\s*\d+(?:[.,]\d+)?)*/g)].map(n=>n[0].replace(/\s*[×x]\s*/g," \xD7 "));if(t.length)return t.join(" \xB7 ");let e=o.match(/\b(links|rechts|left|right)\b/i);return e?e[1].toLowerCase():null}function e0(o){return/\b(links|left)\b/i.test(o)?"left":/\b(rechts|right)\b/i.test(o)?"right":null}function n0(o){return o.replace(/\b(links|rechts|left|right)\b/i,t=>{let n={links:"rechts",rechts:"links",left:"right",right:"left"}[t.toLowerCase()]??t;return t[0]===t[0].toUpperCase()?n[0].toUpperCase()+n.slice(1):n})}function i0(o){if(o.family)return o.family;let t=o.id.match(/^(.*?)_(\d+(?:x\d+)?|left|right|links|rechts)$/);return t?t[1]:null}var Qp=new Set(["garden"]);function nh(o){let t=[];for(let n of o.basics){let i=Zp[n];if(!i)continue;let[s,r]=i,a=o.basicName(n),l=`${a} ${o.basicNameEn(n)} ${n.replace(/_/g," ")}`;t.push({type:n,key:n,label:a,search:`${l} ${so(l,s)} ${o.kindName(s)} ${Ja[s]}`,tags:`${l} ${so(l,s)}`,kind:s,rooms:r,electric:Te(n),light:as.has(n),outdoor:r.length>0&&r.every(c=>Qp.has(c)),size:o.size(n),pack:null,packLabel:null,packRelease:0,family:null,variant:null,ikea:null})}for(let n of o.packs){if(!n.items.length)continue;let i=me(n,o.language);for(let s of n.items){let{kind:r,rooms:a}=X_(n.id,s),l=St(n.id,s.id),c=Ot(s,o.language),d=`${Object.values(s.name).join(" ")} ${s.id.replace(/_/g," ")} ${(s.tags??[]).join(" ")} ${s.ikea??""}`;t.push({type:l,key:l,label:c,search:`${d} ${so(d,r)} ${i} ${me(n,"en")} ${o.kindName(r)} ${Ja[r]}`,tags:`${d} ${so(d,r)}`,kind:r,rooms:a,electric:!!s.electric||!!s.light,light:!!s.light,outdoor:a.length>0&&a.every(u=>Qp.has(u)),size:s.size,pack:n.id,packLabel:i,packRelease:n.release??1,family:i0(s),ikea:s.ikea??null,variant:s.variant?s.variant[o.language.split("-")[0]]??s.variant.en??Object.values(s.variant)[0]??null:Yp(c)})}}let e=new Map(t.map(n=>[n.type,n]));for(let n of[...t]){if(!e0(n.label)||n.mirror)continue;let s=n.type.replace(/(_|\b)(left|right|links|rechts)(?=$|[_\s)])/i,(a,l,c)=>l+({left:"right",right:"left",links:"rechts",rechts:"links"}[c.toLowerCase()]??c));if(s!==n.type&&e.has(s))continue;let r=n0(n.label);t.push({...n,key:`${n.type}#m`,mirror:!0,label:r,search:`${n.search} ${r}`,tags:`${n.tags} ${r}`,family:n.family??n.type,variant:Yp(r)}),n.family||(n.family=n.type)}return t}function ro(o){return o.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss")}function o0(o){if(o.length>3)return n=>n.includes(o);let t=Rs(o)?"(?=$|[^\\p{L}\\p{N}])":"",e=new RegExp(`(?:^|[^\\p{L}\\p{N}])${o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}${t}`,"u");return n=>e.test(n)}function ao(o,t){return!t||!o.rooms.length||o.rooms.includes(t)}function ih(o,t){return(!t.pack||o.pack===t.pack)&&(!t.electric||o.electric)&&(!t.light||o.light)&&(!t.outdoor||o.outdoor)}var Jp=/[^\p{L}\p{N}]+/u,Xa=new WeakMap;function oh(o){let t=Xa.get(o);if(!t||t.search!==o.search){let e=ro(o.label),n=ro(o.tags??"");t={search:o.search,label:e,labelWords:e.split(Jp).filter(Boolean),tags:n,tagWords:new Set(n.split(Jp).filter(Boolean)),hay:ro(o.search)},Xa.set(o,t)}return t}var sh=2,Xp=40;function s0(o){let t=ro(o).trim();return t.length>0&&t.length<=sh&&!/\s/.test(t)&&!Rs(t)}function rh(o){let t=0;for(let e of o){let n=Xa.get(e);n&&n.search===e.search||(oh(e),t++)}return t}function r0(o,t,e){if(t(e.label)||t(e.hay)){let n=o.length<=3&&Rs(o);return e.labelWords.includes(o)?o.length<=sh&&!n?6:7:!n&&e.labelWords.some(i=>i.startsWith(o))?6:o.length>3&&e.label.includes(o)?5:e.tagWords.has(o)?4:t(e.tags)?3:2}if(o.length<4)return 0;for(let n of e.labelWords)if(Ya(o,n))return 1;for(let n of e.tagWords)if(Ya(o,n))return 1;return 0}function Za(o){let t=ro(o).split(/\s+/).filter(Boolean);if(!t.length)return null;let e=t.map(i=>({w:i,match:o0(i)})),n=t.join(" ");return i=>{let s=oh(i),r=7,a=0;for(let{w:d,match:u}of e){let h=r0(d,u,s);if(!h)return null;r=Math.min(r,h),a+=h}let l=s.labelWords.join(" "),c=l===n?300:l.startsWith(n)?200:r>1&&` ${l} `.includes(` ${n} `)?100:0;return r*1e3+a*10+c-Math.min(l.length,90)/100}}function a0(o,t){let e=Za(t.query);return o.filter(n=>ih(n,t)&&(e?e(n)!==null:ao(n,t.room)))}function l0(o,t){let e=Za(t.query),n=[...o];if(e){let s=new Map(n.map(r=>[r,e(r)??0]));n.sort((r,a)=>s.get(a)-s.get(r))}if(!t.room)return n;let i=t.room;return[...n.filter(s=>ao(s,i)),...n.filter(s=>!ao(s,i))]}function tl(o){let t=[];return o.room&&t.push("room"),o.pack&&t.push("pack"),o.electric&&t.push("electric"),o.light&&t.push("light"),o.outdoor&&t.push("outdoor"),t}function ah(o,t){let e=l0(a0(o,t),t),i=s0(t.query)&&e.length>Xp?e.slice(0,Xp):e,s=i.filter(l=>ao(l,t.room)),r=Za(t.query),a=r?o.filter(l=>!ih(l,t)&&r(l)!==null).length:0;return{hits:i,cut:e.length-i.length,inRoom:s,otherRooms:i.filter(l=>!ao(l,t.room)),hiddenByChips:a}}function el(o,t){let e=o.filter(r=>r.kind===t),n=new Map;for(let r of e){if(!r.family)continue;let a=`${r.pack??"basic"}:${r.family}`;n.set(a,[...n.get(a)??[],r])}let i=[],s=new Set;for(let r of e){if(s.has(r.key))continue;let a=r.family?`${r.pack??"basic"}:${r.family}`:null,l=a?n.get(a):void 0;if(a&&l&&l.length>1){for(let d of l)s.add(d.key);let c=[...new Set(l.flatMap(d=>d.rooms))];i.push({key:a,label:t0(r.label),kind:t,rooms:c,entries:l})}else s.add(r.key),i.push({key:r.key,label:r.label,kind:t,rooms:r.rooms,entries:[r]})}return i}function nl(o,t){let[e,n]=o,i=r=>Math.round(r*100),s=t.startsWith("de")||t.startsWith("fr")||t.startsWith("it")||t.startsWith("es")||t.startsWith("nl")?",":".";return e>=10||n>=10?`${(Math.round(e*10)/10).toString().replace(".",s)} \xD7 ${(Math.round(n*10)/10).toString().replace(".",s)} m`:`${i(e)} \xD7 ${i(n)} cm`}var c0=["older_release","pinned"];async function Is(o,t){try{return await o(!1)}catch(e){let{code:n,message:i}=e??{};if(!c0.includes(n))throw e;return await t(n,i??"")?o(!0):null}}function lh(o){return new Set((o?.items??[]).filter(t=>!t.pinned).map(t=>t.type))}function ch(o,t,e){return e?o.filter(n=>t.has(n)):[]}function dh(o){let t=o.items.filter(e=>!e.pinned);return{updates:t.length,pinned:o.items.length-t.length,placed:t.reduce((e,n)=>e+n.placed,0)}}function uh(o,t=new Date){if(o.frequency==="off")return null;let[e,n]=o.time.split(":").map(Number);for(let i=0;i<=62;i++){let s=new Date(t.getFullYear(),t.getMonth(),t.getDate()+i,e,n);if(!(s<=t)&&!(o.frequency==="weekly"&&(s.getDay()+6)%7!==o.weekday)&&!(o.frequency==="monthly"&&s.getDate()!==1))return s}return null}function As(o){return o?o.slice(0,7):""}function ph(o,t){return o.name[t.split("-")[0]]??o.name.en??Object.values(o.name)[0]??o.id}function hh(o){let t=o.changes;return!t.added.length&&!t.changed.length&&!t.removed.length}var d0="home3d-thumbs",lo="thumbs",il=new Map,zs=null;function fh(){return zs||(zs=new Promise(o=>{try{if(typeof indexedDB>"u")return o(null);let t=indexedDB.open(d0,1);t.onupgradeneeded=()=>t.result.createObjectStore(lo),t.onsuccess=()=>o(t.result),t.onerror=()=>o(null),t.onblocked=()=>o(null)}catch{o(null)}}),zs)}async function u0(o){let t=await fh();return t?new Promise(e=>{try{let n=t.transaction(lo,"readonly").objectStore(lo).get(o);n.onsuccess=()=>e(typeof n.result=="string"?n.result:null),n.onerror=()=>e(null)}catch{e(null)}}):null}async function p0(o,t){let e=await fh();if(e)try{e.transaction(lo,"readwrite").objectStore(lo).put(t,o)}catch{}}async function mh(o,t){let e=il.get(o);if(e)return e;let n=await u0(o);if(n)return il.set(o,n),n;let i=await t();return i&&(il.set(o,i),p0(o,i)),i}var h0=10,gh=24,f0=96,bh="home3d.lib.open",_h="home3d.lib.fav",yh="home3d.lib.recent",vh="home3d.lib.recent.shut",xh="home3d.lib.shut",wh=new Set(["fav","other-rooms"]),m0=["sofa","lamp"],dn=o=>`${o.type}|${o.packRelease}`;function co(o,t){try{let e=localStorage.getItem(o);return e?JSON.parse(e):t}catch{return t}}function uo(o,t){try{localStorage.setItem(o,JSON.stringify(t))}catch{}}var ol=class extends zt{static properties={entries:{attribute:!1},language:{attribute:!1},roomHint:{attribute:!1},admin:{type:Boolean},lite:{type:Boolean},t:{attribute:!1},thumb:{attribute:!1},updates:{attribute:!1},_query:{state:!0},_room:{state:!0},_electric:{state:!0},_light:{state:!0},_outdoor:{state:!0},_pack:{state:!0},_open:{state:!0},_shut:{state:!0},_searchShut:{state:!0},_fav:{state:!0},_recent:{state:!0},_recentShut:{state:!0},_thumbs:{state:!0},_shown:{state:!0},_limits:{state:!0}};defaultOpen=new Set;roomTouched=!1;observer=null;observed=new WeakSet;wanted=new Set;drawing=0;warmTimer;queue=[];constructor(){super(),this.entries=[],this.language="en",this.roomHint=null,this.admin=!0,this.lite=(navigator.hardwareConcurrency??4)<=2||(navigator.deviceMemory??4)<=2,this.t=e=>e,this.thumb=null,this.updates=new Set,this._query="",this._room=null,this._electric=!1,this._light=!1,this._outdoor=!1,this._pack=null;let t=co(bh,null);this._open=Array.isArray(t)?new Set(t):null,this._shut=new Set(co(xh,[])),this._searchShut=new Set,this._fav=co(_h,[]),this._recent=co(yh,[]),this._recentShut=co(vh,!1)===!0,this._thumbs=new Map,this._shown=new Map,this._limits=new Map}willUpdate(t){if(t.has("roomHint")&&!this.roomTouched&&(this._room=this.roomHint),t.has("entries")){clearTimeout(this.warmTimer);let e=this.entries,n=s=>{let r=Math.min(e.length,s+200);rh(e.slice(s,r)),r<e.length&&(this.warmTimer=setTimeout(()=>n(r),0))};this.warmTimer=setTimeout(()=>n(0),300),this._pack&&!this.entries.some(s=>s.pack===this._pack)&&(this._pack=null);let i=new Set(this.entries.map(s=>s.key));this._fav=this._fav.filter(s=>i.has(s)),this._recent=this._recent.filter(s=>i.has(s)),this.queue=[],this.resetPictures(this.entries)}}resetPictures(t){let e=new Set(t.map(dn));this._thumbs=new Map([...this._thumbs].filter(([n])=>e.has(n))),this.wanted=new Set([...this.wanted].filter(n=>this._thumbs.has(n)))}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.warmTimer),this.observer?.disconnect(),this.observer=null}updated(){if(this.lite||!this.thumb)return;this.observer??=new IntersectionObserver(e=>{for(let n of e){if(!n.isIntersecting)continue;let i=this.byKey.get(n.target.dataset.key??"");i&&this.want(i)}},{root:null,rootMargin:"200px"});let t=this.byKey;for(let e of this.renderRoot.querySelectorAll(".fp3d-lc-pic[data-key]")){if(!this.observed.has(e)){this.observed.add(e),this.observer.observe(e);continue}let n=t.get(e.dataset.key??"");!n||this._thumbs.has(dn(n))||this.wanted.has(dn(n))||(this.observer.unobserve(e),this.observer.observe(e))}}get byKey(){return new Map(this.entries.map(t=>[t.key,t]))}showVariant(t,e,n){if(this.lite||!this.thumb){this.preview(e?.type??null,n);return}let i=new Map(this._shown);e?i.set(t,e.key):i.delete(t),this._shown=i,e&&this.want(e)}want(t){let e=dn(t);this._thumbs.has(e)||this.wanted.has(e)||(this.wanted.add(e),this.queue.push(t),this.drain())}drain(){for(;this.drawing<2&&this.queue.length;){let t=this.queue.shift();this.drawing++;let e=dn(t),n=`${e}|${f0}|1`;mh(n,()=>this.thumb?this.thumb(t):Promise.resolve(null)).then(i=>{if(i){let s=new Map(this._thumbs);s.set(e,i),this._thumbs=s}else this.wanted.delete(e)}).catch(()=>this.wanted.delete(e)).finally(()=>{this.drawing--,this.drain()})}}pick(t){this.admin&&(this._recent=[t.key,...this._recent.filter(e=>e!==t.key)].slice(0,h0),uo(yh,this._recent),this.resetFilters(),this.dispatchEvent(new CustomEvent("library-add",{detail:{type:t.type,mirror:!!t.mirror},bubbles:!0,composed:!0})))}preview(t,e){this.lite&&this.dispatchEvent(new CustomEvent("library-preview",{detail:{type:t,element:e},bubbles:!0,composed:!0}))}toggleFav(t){this._fav=this._fav.includes(t)?this._fav.filter(e=>e!==t):[...this._fav,t],uo(_h,this._fav)}toggleRecent(){this._recentShut=!this._recentShut,uo(vh,this._recentShut)}isOpen(t,e){return t==="recent"?!this._recentShut:e?!this._searchShut.has(t):wh.has(t)?!this._shut.has(t):(this._open??this.defaultOpen).has(t)}toggleOpen(t,e){if(t==="recent")return this.toggleRecent();let n=i=>{let s=new Set(i);return s.has(t)?s.delete(t):s.add(t),s};e?this._searchShut=n(this._searchShut):wh.has(t)?(this._shut=n(this._shut),uo(xh,[...this._shut])):(this._open=n(this._open??this.defaultOpen),uo(bh,[...this._open]))}setQuery(t){!!this._query.trim()!=!!t.trim()&&(this._searchShut=new Set),this._query=t}setRoom(t){this.roomTouched=!0,this._room=t}get filter(){return{query:this._query,room:this._room,electric:this._electric,light:this._light,outdoor:this._outdoor,pack:this._pack}}get activeFilters(){return tl(this.filter)}clearFilters(){this.roomTouched=!0,this._room=null,this._pack=null,this._electric=this._light=this._outdoor=!1}resetFilters(){this.roomTouched=!1,this._room=this.roomHint,this._pack=null,this._electric=this._light=this._outdoor=!1}render(){let t=this.t,e=this.filter,n=ah(this.entries,e),i=n.hits,s=this._query.trim().length>0,r=this.byKey,a=new Set(i.map(g=>g.key)),l=g=>({key:g.key,label:g.label,kind:g.kind,rooms:g.rooms,entries:[g]}),c=this._recent.map(g=>r.get(g)).filter(g=>!!g&&a.has(g.key)),d=this._fav.map(g=>r.get(g)).filter(g=>!!g&&a.has(g.key)),u=Cn.map(g=>({kind:g,cards:el(n.inRoom,g)})).filter(g=>g.cards.length),h=n.otherRooms.length?Cn.flatMap(g=>el(n.otherRooms,g)):[],p=u.filter(g=>m0.includes(g.kind)).map(g=>g.kind);this.defaultOpen=new Set(p.length?p:u.length?[u[0].kind]:[]);let f=tl(e),b=g=>g==="room"?t(`lib_room_${this._room}`):g==="pack"?this.entries.find(_=>_.pack===this._pack)?.packLabel??this._pack??"":t(`lib_chip_${g}`);return m`<input
        class="fp3d-search"
        type="search"
        placeholder=${t("furniture_search")}
        .value=${this._query}
        @input=${g=>this.setQuery(g.target.value)}
        @keydown=${g=>{g.key==="Escape"&&this.setQuery("")}}
      />
      <div class="fp3d-lib-rooms" role="group">
        <button class="fp3d-chip ${this._room===null?"on":""}" @click=${()=>this.setRoom(null)}>${t("lib_room_all")}</button>
        ${vi.map(g=>m`<button class="fp3d-chip ${this._room===g?"on":""}" @click=${()=>this.setRoom(g)}>${t(`lib_room_${g}`)}</button>`)}
      </div>
      ${this.packChips()}
      <div class="fp3d-lib-chips">
        <button class="fp3d-chip fp3d-chip-f ${this._electric?"on":""}" @click=${()=>this._electric=!this._electric}>⚡ ${t("lib_chip_electric")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._light?"on":""}" @click=${()=>this._light=!this._light}>💡 ${t("lib_chip_light")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._outdoor?"on":""}" @click=${()=>this._outdoor=!this._outdoor}>🌳 ${t("lib_chip_outdoor")}</button>
      </div>
      ${f.length?m`<div class="fp3d-lib-active" role="status">
            <span>${t("lib_filters")} ${f.map(b).join(" \xB7 ")}${n.hiddenByChips?m` <span class="fp3d-lib-hidden">(${t("lib_hidden_by_filters",{n:n.hiddenByChips})})</span>`:y}</span>
            <button class="fp3d-lib-clear" @click=${()=>this.clearFilters()}>${t("lib_clear_filters")}</button>
          </div>`:y}
      ${!s&&this.roomHint&&this._room===this.roomHint&&!this.roomTouched?m`<p class="fp3d-lib-hint">${t("lib_hint_room")}</p>`:y}
      ${i.length?y:m`<p class="fp3d-lib-hint">${t("furniture_search_none")}</p>`}
      ${n.cut?m`<p class="fp3d-lib-hint" role="status">${t("lib_keep_typing",{n:n.cut})}</p>`:y}
      ${c.length&&!s?this.section("recent",`\u{1F558} ${t("lib_recent")}`,c.map(l),s):y}
      ${d.length?this.section("fav",`\u2605 ${t("lib_favorites")}`,d.map(l),s):y}
      ${u.map(g=>this.section(g.kind,t(`lib_kind_${g.kind}`),g.cards,s))}
      ${h.length?this.section("other-rooms",t("lib_other_rooms",{n:n.otherRooms.length}),h,s):y}`}packChips(){let t=new Map;for(let e of this.entries)e.pack&&e.packLabel&&t.set(e.pack,e.packLabel);return t.size<2?y:m`<div class="fp3d-lib-chips" role="group" aria-label=${this.t("lib_pack_all")}>
      <button class="fp3d-chip ${this._pack===null?"on":""}" @click=${()=>this._pack=null}>${this.t("lib_pack_all")}</button>
      ${[...t].map(([e,n])=>m`<button class="fp3d-chip ${this._pack===e?"on":""}" @click=${()=>this._pack=e}>${n}</button>`)}
    </div>`}section(t,e,n,i){let s=t==="recent",r=this.isOpen(t,i),a=this._limits.get(t)??gh,l=n.slice(0,a),c=n.reduce((d,u)=>d+u.entries.length,0);return m`<button class="fp3d-lib-head fp3d-lib-toggle ${s?"fp3d-lib-recent":""}" aria-expanded=${r} @click=${()=>this.toggleOpen(t,i)}>
        <span class="fp3d-lib-caret">${r?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${c}</span>
      </button>
      ${r?m`<div class="fp3d-lib-grid ${s?"fp3d-lib-recent-grid":""}">${Up(l,d=>d.key,d=>this.card(d))}</div>
            ${n.length>a?m`<button class="fp3d-lib-more" @click=${()=>{let d=new Map(this._limits);d.set(t,a+gh*2),this._limits=d}}>${this.t("lib_more",{n:n.length-a})}</button>`:y}`:y}`}card(t){let e=this.t,n=t.entries[0],i=t.entries.length>1,s=this._fav.includes(n.key),r=this._shown.get(n.key),a=r&&t.entries.find(u=>u.key===r)||n,l=this._thumbs.get(dn(a))??this._thumbs.get(dn(n)),c=n.light?"\u{1F4A1}":n.electric?"\u26A1":"",d=ch(t.entries.map(u=>u.type),this.updates,this.admin);return m`<div class="fp3d-lc ${i?"fp3d-lc-family":""}" title=${a.ikea?`${a.label} (IKEA ${a.ikea})`:a.label} @mouseleave=${()=>i&&this.showVariant(n.key,null,null)}>
      <button
        class="fp3d-lc-main"
        ?disabled=${!this.admin}
        @click=${()=>this.pick(n)}
        @mouseenter=${u=>this.preview(n.type,u.currentTarget)}
        @focus=${u=>this.preview(n.type,u.currentTarget)}
        @mouseleave=${()=>this.preview(null,null)}
        @blur=${()=>this.preview(null,null)}
      >
        ${this.lite?y:m`<span class="fp3d-lc-pic" data-key=${n.key}>${l?m`<img src=${l} alt="" loading="lazy" class=${(this._thumbs.has(dn(a))?a:n).mirror?"fp3d-lc-mirrored":""} />`:m`<span class="fp3d-lc-wait"></span>`}</span>`}
        <span class="fp3d-lc-label">${t.label}${c?m` <span class="fp3d-lc-badge">${c}</span>`:y}</span>
        <span class="fp3d-lc-sub">${i?e("lib_sizes",{n:t.entries.length}):nl(n.size,this.language)}${n.packLabel?m` · ${n.packLabel}`:m` · ${e("lib_basic")}`}</span>
      </button>
      ${i?m`<div class="fp3d-lc-chips">
            ${t.entries.map(u=>m`<button
                title="${u.label} · ${nl(u.size,this.language)}"
                ?disabled=${!this.admin}
                class="fp3d-lc-chip ${a.key===u.key&&i&&r?"on":""}"
                @click=${()=>this.pick(u)}
                @mouseenter=${h=>this.showVariant(n.key,u,h.currentTarget)}
                @focus=${h=>this.showVariant(n.key,u,h.currentTarget)}
                @mouseleave=${()=>this.preview(null,null)}
                @blur=${()=>this.preview(null,null)}
              >${u.variant??u.label}</button>`)}
          </div>`:y}
      ${d.length?m`<button
            class="fp3d-lc-update"
            title=${e("lib_update_title")}
            @click=${()=>this.dispatchEvent(new CustomEvent("library-update",{detail:{types:d},bubbles:!0,composed:!0}))}
          >
            ⟳ ${e("upd_update")}
          </button>`:y}
      <button class="fp3d-lc-fav ${s?"on":""}" title=${e(s?"lib_fav_remove":"lib_fav_add")} aria-label=${e(s?"lib_fav_remove":"lib_fav_add")} @click=${()=>this.toggleFav(n.key)}>${s?"\u2605":"\u2606"}</button>
    </div>`}static styles=[te,lt`
      :host {
        display: block;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: var(--fp3d-panel, #0d1424);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 8px 10px;
        margin: 6px 0 8px;
      }
      .fp3d-lib-rooms,
      .fp3d-lib-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 6px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 3px 9px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-chip.on {
        background: var(--fp3d-accent);
        color: #041018;
        border-color: var(--fp3d-accent);
        font-weight: 600;
      }
      .fp3d-chip-f {
        font-size: 11px;
      }
      .fp3d-lib-hint {
        margin: 2px 0 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-active {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 4px 8px;
        margin: 0 0 8px;
        padding: 5px 8px;
        font-size: 12px;
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
        background: rgba(80, 200, 255, 0.08);
      }
      .fp3d-lib-hidden {
        color: var(--fp3d-muted);
      }
      .fp3d-lib-clear {
        margin-left: auto;
        padding: 2px 8px;
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: 1px solid var(--fp3d-accent);
        border-radius: 999px;
        cursor: pointer;
      }
      .fp3d-lib-head {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        margin: 10px 0 4px;
        padding: 4px 0;
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        border-bottom: 1px solid var(--fp3d-line);
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lib-recent {
        padding-left: 8px;
        border-left: 3px solid var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 10%, transparent);
      }
      .fp3d-lib-recent-grid {
        padding: 6px 0 6px 8px;
        border-left: 3px solid var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 5%, transparent);
      }
      .fp3d-lib-caret {
        width: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-lib-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
        gap: 6px;
      }
      .fp3d-lc {
        position: relative;
        display: flex;
        flex-direction: column;
        /* cards out of view are not laid out or painted: a first letter typed shows hundreds of them (#131) */
        content-visibility: auto;
        contain-intrinsic-size: auto 220px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        overflow: hidden;
      }
      .fp3d-lc:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-lc-main {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 2px;
        padding: 6px 6px 5px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lc-main:disabled {
        cursor: default;
        opacity: 0.6;
      }
      .fp3d-lc-pic {
        display: block;
        height: 64px;
        border-radius: 6px;
        background: radial-gradient(ellipse at 50% 70%, rgba(80, 200, 255, 0.12), transparent 70%);
      }
      .fp3d-lc-pic img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .fp3d-lc-pic img.fp3d-lc-mirrored {
        transform: scaleX(-1);
      }
      .fp3d-lc-wait {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.03);
      }
      .fp3d-lc-label {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.25;
        padding-right: 16px;
      }
      .fp3d-lc-badge {
        font-size: 10px;
      }
      .fp3d-lc-sub {
        font-size: 10.5px;
        color: var(--fp3d-muted);
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-lc-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        padding: 0 6px 6px;
      }
      .fp3d-lc-chip {
        font: inherit;
        font-size: 11px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        padding: 2px 6px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-lc-chip:hover,
      .fp3d-lc-chip.on {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lc-fav {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 22px;
        height: 22px;
        padding: 0;
        font-size: 14px;
        line-height: 22px;
        color: var(--fp3d-muted);
        background: rgba(4, 16, 24, 0.55);
        border: 0;
        border-radius: 50%;
        cursor: pointer;
      }
      .fp3d-lc-fav.on,
      .fp3d-lc-fav:hover {
        color: #ffd166;
      }
      .fp3d-lc-update {
        position: absolute;
        top: 4px;
        left: 4px;
        padding: 2px 7px;
        font: inherit;
        font-size: 10.5px;
        font-weight: 600;
        color: #04101a;
        background: #ffd166;
        border: 0;
        border-radius: 999px;
        cursor: pointer;
      }
      .fp3d-lib-more {
        display: block;
        width: 100%;
        margin: 6px 0 2px;
        padding: 6px;
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-accent);
        background: none;
        border: 1px dashed var(--fp3d-line);
        border-radius: 8px;
        cursor: pointer;
      }
    `]};Xt("fp3d-library",ol);var kh=["frame2","frame4","cabinet","wall_frame","wall_cabinet"],g0=["wall_frame","wall_cabinet"],ll=["cabinet","wall_cabinet"],$h=["none","glass","mesh","solid"],cl=[19,10],qe=.04445,al={19:.4826,10:.254},po=60,b0=[1,100],_0=[.05,1.5],y0=[0,2],sl=.001,v0=new Set(["u","form","width","door","start_u","desc","mount_depth","bottom"]),Mh=(o,[t,e])=>typeof o=="number"&&Number.isInteger(o)&&o>=t&&o<=e,Eh=(o,[t,e])=>typeof o=="number"&&Number.isFinite(o)&&o>=t&&o<=e,x0=o=>g0.includes(o);function w0(o){let t=o.rack_frame;if(t===void 0)return[];if(!t||typeof t!="object"||Array.isArray(t))return[{field:"rack_frame",why:"a rack frame is an object"}];let e=t,n=[],i=(p,f)=>{n.push({field:p,why:f})};for(let p of Object.keys(e))v0.has(p)||i(p,"not a rack frame field");if(Mh(e.u,[1,po])||i("u",`a whole number of U, 1 to ${po}`),kh.includes(e.form)||i("form",`one of ${kh.join(", ")}`),e.width!==void 0&&!cl.includes(e.width)&&i("width","19 or 10 (inches)"),e.door!==void 0&&!$h.includes(e.door)&&i("door",`one of ${$h.join(", ")}`),e.start_u!==void 0&&!Mh(e.start_u,b0)&&i("start_u","a whole number, 1 to 100"),e.desc!==void 0&&typeof e.desc!="boolean"&&i("desc","true or false"),e.mount_depth!==void 0&&!Eh(e.mount_depth,_0)&&i("mount_depth","0.05 to 1.5 metres"),e.bottom!==void 0&&!Eh(e.bottom,y0)&&i("bottom","0 to 2 metres"),n.length)return n;let[s,r,a]=o.size,l=e.form,c=e.width??19;al[c]>s+sl&&i("width","the rack's panels are wider than the item"),(e.mount_depth??0)>r+sl&&i("mount_depth","deeper than the item");let d=e.u*qe;(e.bottom??Math.max(0,(a-d)/2))+d>a+sl&&i("u",`${e.u}U do not fit in the item's height`);let h=o.mount??"floor";return(x0(l)!==(h==="wall")||h==="ceiling")&&i("mount",'a wall rack has "mount": "wall", any other stands on the floor or a desk'),(e.door??"none")!=="none"&&!ll.includes(l)&&i("door","only a cabinet has a door"),n}function Ye(o){let t=o?.rack_frame;return!t||w0(o).length?null:{u:t.u,form:t.form,width:t.width??19,door:t.door??"none",startU:t.start_u??1,desc:t.desc??!1,mountDepth:t.mount_depth??null,bottom:t.bottom??null}}var dl={19:.45085,10:.22225},rl={frame2:0,frame4:0,cabinet:.08,wall_frame:.02,wall_cabinet:.06},k0={frame2:0,frame4:.02,cabinet:.05,wall_frame:.01,wall_cabinet:.04},$0=.075;function Os(o,t,e,n){let i=o.u*qe,s=Math.min(Math.max(0,o.bottom??(n-i)/2),Math.max(0,n-i)),r=Math.min(qe,(n-s)/o.u),a=Array.from({length:o.u},(h,p)=>({index:p,label:o.desc?o.startU+o.u-1-p:o.startU+p,y0:s+p*r,y1:s+(p+1)*r})),l=o.form==="frame2",c=l?$0/2:e/2-rl[o.form],d=l?e:Math.max(.01,e-rl[o.form]-k0[o.form]),u=Math.min(o.mountDepth??d,l?e:e-rl[o.form]);return{unit:r,units:a,bottom:s,top:s+o.u*r,panel:Math.min(t,al[o.width]),opening:Math.min(t,dl[o.width]),front:c,rear:l?null:c-u,mountDepth:u,lane:Math.max(0,(t-Math.min(t,al[o.width]))/2)}}var Sh=["full","half","third"],Ph=["half","full"],M0=60;var mo=()=>null,ho=.001,E0=new Set(["u","width","depth","inch","shelf"]);function S0(o){let t=o.rack;if(t===void 0)return[];if(!t||typeof t!="object"||Array.isArray(t))return[{field:"rack",why:"rack gear is an object"}];let e=t,n=[];for(let i of Object.keys(e))E0.has(i)||n.push({field:i,why:"not a rack gear field"});return(typeof e.u!="number"||!Number.isInteger(e.u)||e.u<0||e.u>po)&&n.push({field:"u",why:`a whole number of U, 0 to ${po}`}),e.width!==void 0&&!Sh.includes(e.width)&&n.push({field:"width",why:`one of ${Sh.join(", ")}`}),e.depth!==void 0&&!Ph.includes(e.depth)&&n.push({field:"depth",why:`one of ${Ph.join(", ")}`}),e.inch!==void 0&&!cl.includes(e.inch)&&n.push({field:"inch",why:"19 or 10 (inches)"}),e.shelf!==void 0&&typeof e.shelf!="boolean"?n.push({field:"shelf",why:"true or false"}):e.shelf&&e.u===0&&n.push({field:"shelf",why:"a shelf takes at least 1U"}),n}function Hn(o){let t=o?.rack;return!t||S0(o).length?null:{u:t.u,width:t.width??"full",depth:t.depth??"half",inch:t.inch??19,shelf:t.shelf??!1}}function Rh(o,t){return Array.from({length:Math.max(1,t)},(e,n)=>o+n)}function P0(o){return Math.max(1,Math.ceil(o/qe-.02))}function Ih(o){return o.gear.u>=1?o.gear.u:P0(o.size?.[2]??qe)}function xi(o,t){let e=t(o.type);return Rh(o.u,e?Ih(e):1)}var un={full:1,half:2,third:3},F0=2;function Fh(o,t){let e=un[o];return[t/e,(t+1)/e]}function R0(o,t,e,n){if(o.u<1)return t===n;let[i,s]=Fh(o.width,t),[r,a]=Fh(e.width,n);return i<a-1e-9&&r<s-1e-9}function fo(o,t){return t.depth==="full"?["front","rear"]:[o.face==="rear"?"rear":"front"]}function hl(o,t){return t<=o.mountDepth+ho}function go(o,t,e,n,i=mo){if(e.on)return A0(o,t,e,n,i);let s=n(e.type),r=s?Ih(s):1,a=Rh(e.u,r),l=(g,_=[])=>({ok:!1,why:g,clash:_,units:a});if(!s)return l("not_gear");let c=s.gear,d=c.u<1;if(c.inch!==o.width)return l("wrong_width");let u=e.col??0;if(!Number.isInteger(e.u)||e.u<1||e.u+r-1>o.u||!Number.isInteger(u)||u<0||u>=(d?F0:un[c.width]))return l("outside");if(e.face==="rear"&&o.rear===!1)return l("no_rear");if(d&&(s.size?.[0]??0)>(o.lane??1/0)+ho)return l("no_lane");if(!hl(o,s.depth))return l("too_deep");let h=new Set(a),p=fo(e,c),f=g=>{if(g.on)return!1;let _=n(g.type);if(_){if(_.gear.u<1!==d||!R0(c,u,_.gear,g.col??0)||!fo(g,_.gear).some(v=>p.includes(v)))return!1}else if(d)return!1;return xi(g,n).some(v=>h.has(v))},b=t.filter(g=>g.id!==e.id&&f(g)).map(g=>g.id);return b.length?l("overlap",b):{ok:!0,clash:[],units:a}}var pl=.004;function I0(o,t){return{w:dl[o.width]/un[t.gear.width],d:t.depth,h:t.gear.u*qe-pl}}function A0(o,t,e,n,i){let s=t.find(p=>p.id===e.on&&!p.on),r=s&&n(s.type),a=s?xi(s,n):[e.u],l=(p,f=[])=>({ok:!1,why:p,clash:f,units:a});if(!s||!r?.gear.shelf)return l("no_shelf");let c=i(e.type);if(!c)return l("not_loose");let d=I0(o,r);if(c.size[2]>d.h+ho)return l("too_tall");if(c.size[1]>d.d+ho)return l("too_deep");let u=t.filter(p=>p.on===s.id&&p.id!==e.id);return u.reduce((p,f)=>p+(i(f.type)?.size[0]??0),0)+c.size[0]>d.w+ho?l("shelf_full",u.map(p=>p.id)):{ok:!0,clash:[],units:a}}var Ah=(o,t)=>o.u-t.u;function Ts(o,t,e,n,i=mo){if(!t.some(l=>l.id===e.id)&&t.length>=M0)return{ok:!1,why:"full",clash:[],units:[],slots:t};let r=go(o,t,e,n,i);if(!r.ok)return{...r,slots:t};let a=e.on?{...e,u:t.find(l=>l.id===e.on).u}:e;return{...r,slots:[...t.filter(l=>l.id!==e.id),a].sort(Ah)}}function zh(o,t,e,n,i,s=mo){let r=t.find(c=>c.id===e);if(!r)return{ok:!1,why:"missing",clash:[],units:[],slots:t};if(r.on)return{ok:!0,clash:[],units:[r.u],slots:t};let a={...r,u:n},l=go(o,t,a,i,s);return l.ok?{...l,slots:t.map(c=>c.id===e?a:c.on===e?{...c,u:n}:c).sort(Ah)}:{...l,slots:t}}function Oh(o,t){return o.filter(e=>e.id!==t&&e.on!==t)}function Th(o,t){return{u:o.u,width:o.width,mountDepth:t.mountDepth,rear:t.rear!==null,lane:t.lane}}function Lh(o,t,e,n=mo){let i=new Set,s=new Set,r=0,a=0;for(let c of t){let d=c.on?n(c.type):e(c.type);if(!d||(typeof d.watts=="number"?r+=d.watts:d.electric&&a++,c.on||!("gear"in d)||d.gear.u<1))continue;let u=fo(c,d.gear);for(let h of xi(c,e))h<1||h>o.u||(u.includes("front")&&i.add(h),u.includes("rear")&&s.add(h))}let l=new Set([...i,...s]).size;return{used:l,free:Math.max(0,o.u-l),front:i.size,rear:s.size,watts:Math.round(r),unknown:a}}function Ch(o){return typeof o.watts=="number"&&o.watts>=0?o.watts:null}function Hh(o){return t=>{let e=o(t),n=Hn(e);return e&&n?{gear:n,depth:e.size[1],size:e.size,watts:Ch(e),electric:!!e.electric}:null}}function Dh(o){return t=>{let e=o(t);return e&&!e.rack_frame?{size:e.size,watts:Ch(e),electric:!!e.electric}:null}}var ul=.003;function Vh(o,t,e){let n=[],i=new Map;for(let s of t){if(s.on)continue;let r=e(s.type),a=Hn(r);if(!r||!a)continue;let l=s.face==="rear"&&a.depth!=="full";if(l&&o.rear===null)continue;let c=o.units[s.u-1];if(!c)continue;let d=s.col??0;if(a.u<1){if(d>1)continue;let v=Math.min(r.size[0],o.lane),x=Math.min(r.size[2],o.top-c.y0),w=Math.min(r.size[1],o.mountDepth),E=s.face==="rear"?(o.rear??o.front-o.mountDepth)+w/2:o.front-w/2;n.push({slot:s,item:r,x:(d===0?-1:1)*(o.panel/2+o.lane/2),z:E,y:c.y0,w:v,d:w,h:x,back:s.face==="rear"});continue}if(!o.units[s.u+a.u-2])continue;let u=un[a.width];if(d>=u)continue;let h=a.u*o.unit,p=Math.min(r.size[2],h),f=Math.min(r.size[1],o.mountDepth+ul),b=l?o.rear-ul+f/2:o.front+ul-f/2,g=-o.panel/2+(d+.5)*o.panel/u,_={slot:s,item:r,x:g,z:b,y:a.shelf?c.y0:c.y0+(h-p)/2,w:Math.min(r.size[0],o.panel/u),d:f,h:p,back:l};if(n.push(_),a.shelf){let v=o.opening/u/2;i.set(s.id,{piece:_,x0:g-v,x1:g+v,top:c.y0+h})}}for(let s of t){let r=s.on?i.get(s.on):void 0,a=r&&e(s.type);if(!r||!a||a.rack_frame)continue;let l=r.piece,c=Math.min(a.size[0],r.x1-r.x0),d=Math.min(a.size[1],l.d),u=Math.min(a.size[2],Math.max(0,r.top-l.y-pl)),h=l.back?l.z-l.d/2+d/2:l.z+l.d/2-d/2;n.push({slot:s,item:a,x:r.x0+c/2,z:h,y:l.y+pl,w:c,d,h:u,back:l.back}),r.x0+=c}return n}function Ls(o,t,e,n=mo){let i=[];for(let s of t){if(!(s.on?n(s.type):e(s.type)))continue;let r=go(o,t,s,e,n);r.ok||i.push({id:s.id,why:r.why,clash:r.clash})}return i}var Cs={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"},z0=new Set(["problem","safety","smoke","gas","carbon_monoxide","heat","moisture","tamper","battery"]),O0=/\b(ob|lb|on battery|low battery|discharg\w*|overload\w*|replace|error|fault\w*|degraded|warning|alarm|update)\b/,Wh=/\b(off|offline|disconnected|down|stopped|not_home|away|unreachable|dead|lost|shutdown|halted|failed)\b/,T0=/\b(ol|on|online|connected|up|running|home|ok|normal|idle|healthy|active|charging|charged|ready)\b/;function jh(o){let t=[];for(let e of[o.entity,...o.links??[]])e&&!t.includes(e)&&t.push(e);return t}function Nh(o){if(!o)return null;let t=String(o.state??"").toLowerCase();if(t==="unavailable")return"offline";if(t==="unknown"||t==="")return"warning";let e=o.entity_id.slice(0,o.entity_id.indexOf("."));if(e==="binary_sensor"){let i=z0.has(String(o.attributes?.device_class??""));return t==="on"?i?"warning":"online":i?"online":"offline"}if(e==="update")return t==="on"?"warning":"online";if(e==="device_tracker"||e==="person")return t==="home"?"online":"offline";if(e==="switch"||e==="input_boolean"||e==="light"||e==="fan")return t==="on"?"online":"offline";if(Number.isFinite(Number(t)))return"online";let n=t.replace(/[_-]+/g," ");return O0.test(n)?"warning":Wh.test(n)||Wh.test(t)?"offline":(T0.test(n),"online")}function wi(o,t){let n=(t.links??[]).filter(r=>r&&r!==t.entity).map(r=>o.states[r]).filter(r=>!!r),i=n.filter(r=>r.state==="unavailable").length,s=n.some(r=>r.state!=="unavailable"&&Nh(r)==="warning");if(t.entity){let r=Nh(o.states[t.entity])??"offline";return r==="online"&&(i||s)?"warning":r}return n.length?i===n.length?"offline":i||s?"warning":"online":null}var L0=24,Uh=6,Gh=3,fl=[2,Gh+Uh],C0=0;function Bh(o){let t="";do t=`g${Date.now().toString(36)}${(C0++).toString(36)}`;while(o.some(e=>e.id===t));return t}function Kh(o){let e=o.currentTarget?.clientWidth||1;return Math.min(.999,Math.max(0,o.offsetX/e))}var ml=class extends zt{static properties={heading:{},space:{attribute:!1},labels:{attribute:!1},slots:{attribute:!1},gear:{attribute:!1},loose:{attribute:!1},gearOf:{attribute:!1},looseOf:{attribute:!1},nameOf:{attribute:!1},editable:{type:Boolean},linker:{attribute:!1},t:{attribute:!1},selected:{state:!0},pick:{state:!0},ghost:{state:!0},refused:{state:!0},face:{state:!0}};constructor(){super(),this.heading="",this.labels=[],this.slots=[],this.gear=[],this.loose=[],this.gearOf=()=>null,this.looseOf=()=>null,this.nameOf=t=>t,this.editable=!1,this.linker=null,this.t=t=>t,this.selected=null,this.pick=null,this.ghost=null,this.refused=null,this.face="front"}get hasRear(){return this.space?.rear!==!1}get shownFace(){return this.hasRear?this.face:"front"}send(t){this.slots=t,this.dispatchEvent(new CustomEvent("rack-change",{detail:{slots:t},bubbles:!0,composed:!0}))}refuse(t){this.refused={units:t.units,clash:t.clash,why:t.why??"overlap"}}setFace(t){this.face=t,this.ghost=null,this.refused=null}pickGear(t){this.editable&&(this.refused=null,this.ghost=null,this.pick=this.pick&&"add"in this.pick&&this.pick.add===t?null:{add:t})}tapSlot(t){this.refused=null,this.ghost=null,this.pick=null,this.selected=this.selected===t?null:t}startMove(){let t=this.slots.find(e=>e.id===this.selected);!this.editable||!t||t.on||(this.refused=null,this.pick={move:t.id})}hoverUnit(t,e=0){if(t===null||!this.pick){this.ghost=null;return}let n=this.candidate(t,e,null);!n||this.isLane(n)||this.showGhost(n)}hoverLane(t,e){let n=this.pick?this.candidate(t,0,e):null;!n||!this.isLane(n)||this.showGhost(n)}showGhost(t){let e=go(this.space,this.slots,t,this.gearOf,this.looseOf);this.ghost={units:e.units,ok:e.ok,clash:e.clash,...t.col?{col:t.col}:{}}}tapUnit(t,e=0){let n=this.pick&&this.candidate(t,e,null);if(!n||this.isLane(n)){(!this.pick||!this.editable)&&(this.selected=null,this.refused=null);return}this.place(n)}tapLane(t,e){let n=this.pick&&this.candidate(t,0,e);n&&this.isLane(n)&&this.place(n)}place(t){if(!this.pick||!this.editable)return;let n=Ts(this.space,this.slots,t,this.gearOf,this.looseOf);if(!n.ok)return this.refuse(n);this.refused=null,this.ghost=null,this.pick=null,this.selected=t.id,this.send(n.slots)}nudge(t){let e=this.slots.find(i=>i.id===this.selected);if(!this.editable||!e||e.on)return;let n=zh(this.space,this.slots,e.id,e.u+t,this.gearOf,this.looseOf);if(!n.ok)return this.refuse(n);this.refused=null,this.send(n.slots)}nudgeCol(t){let e=this.slots.find(n=>n.id===this.selected);!e||e.on||this.replace({...e,col:(e.col??0)+t})}flipFace(){let t=this.slots.find(i=>i.id===this.selected);if(!t||t.on)return;let{face:e,...n}=t;this.replace(t.face==="rear"?n:{...n,face:"rear"})}putOnShelf(t){let e=this.slots.find(s=>s.id===this.selected);if(!this.editable||!e||e.on||!this.gearOf(e.type)?.gear.shelf)return;let n={id:Bh(this.slots),type:t,u:e.u,on:e.id},i=Ts(this.space,this.slots,n,this.gearOf,this.looseOf);if(!i.ok)return this.refuse(i);this.refused=null,this.send(i.slots)}replace(t){if(!this.editable)return;let e=Ts(this.space,this.slots,t,this.gearOf,this.looseOf);if(!e.ok)return this.refuse(e);this.refused=null,this.send(e.slots)}rename(t){if(!this.editable||!this.selected)return;let e=t.trim().slice(0,60);this.send(this.slots.map(n=>n.id===this.selected?{...n,name:e||null}:n))}relink(t){!this.editable||!this.selected||this.send(this.slots.map(e=>e.id===this.selected?{...e,...t(e)}:e))}linkDevice(t){if(!this.editable||!this.linker||!t)return;let e=this.linker.fromDevice(t);this.relink(n=>({entity:e.entity,links:e.links.slice(0,16),...!n.name&&e.name?{name:e.name.slice(0,60)}:{}}))}setStatusEntity(t){this.relink(e=>({entity:t||null,links:(e.links??[]).filter(n=>n!==t)}))}addLink(t){let e=this.slots.find(i=>i.id===this.selected),n=e?.links??[];!e||!t||t===e.entity||n.includes(t)||n.length>=16||this.relink(()=>({links:[...n,t]}))}removeLink(t){this.relink(e=>({links:(e.links??[]).filter(n=>n!==t)}))}deleteSelected(){if(!this.editable||!this.selected)return;let t=this.selected;this.selected=null,this.pick=null,this.refused=null,this.send(Oh(this.slots,t))}close(){this.dispatchEvent(new CustomEvent("rack-close",{bubbles:!0,composed:!0}))}isLane(t){let e=this.gearOf(t.type);return!!e&&e.gear.u<1}candidate(t,e,n){let i=this.pick;if(!i)return null;let s="add"in i?{id:Bh(this.slots),type:i.add,u:t}:this.slots.find(p=>p.id===i.move);if(!s)return null;let r=this.gearOf(s.type),{col:a,face:l,...c}={...s,u:t},d=c,u=n??(r&&r.gear.u>=1?Math.floor(e*un[r.gear.width]):0);return u&&(d.col=u),("add"in i?this.shownFace:s.face??"front")==="rear"&&r?.gear.depth!=="full"&&(d.face="rear"),d}onKey=t=>{t.target?.tagName!=="INPUT"&&(t.key==="Escape"?(t.stopPropagation(),this.pick||this.refused?(this.pick=null,this.ghost=null,this.refused=null):this.close()):t.key==="ArrowUp"||t.key==="ArrowDown"?(t.preventDefault(),t.stopPropagation(),this.nudge(t.key==="ArrowUp"?1:-1)):t.key==="ArrowLeft"||t.key==="ArrowRight"?(t.preventDefault(),t.stopPropagation(),this.nudgeCol(t.key==="ArrowRight"?1:-1)):t.key==="Delete"&&(t.stopPropagation(),this.deleteSelected()))};row(t,e){return`${this.space.u-(t+e-1)+1} / span ${e}`}column(t,e){let n=this.gearOf(t);if(n&&n.gear.u<1)return`${fl[e]??fl[0]} / span 1`;let i=n?un[n.gear.width]:1,s=Uh/i;return`${Gh+Math.min(e,i-1)*s} / span ${s}`}onFace(t){let e=this.gearOf(t.type);return e?fo(t,e.gear).includes(this.shownFace):this.shownFace==="front"}render(){let t=this.t,e=this.space?.u??0,n=Array.from({length:e},(u,h)=>e-h),i=this.space?Ls(this.space,this.slots,this.gearOf,this.looseOf):[],s=new Set(this.refused?.units??[]),r=new Set([...this.refused?.clash??[],...this.ghost&&!this.ghost.ok?this.ghost.clash:[],...i.map(u=>u.id)]),a=this.slots.find(u=>u.id===this.selected)??null,l=u=>this.labels[u-1]??u,c=this.slots.filter(u=>!u.on&&this.onFace(u)),d=this.pick?"add"in this.pick?this.pick.add:this.slots.find(u=>this.pick&&"move"in this.pick&&u.id===this.pick.move)?.type:void 0;return m`<div class="fp3d-rack-veil" @click=${u=>u.target===u.currentTarget&&this.close()} @keydown=${this.onKey}>
      <div class="fp3d-rack-sheet" role="dialog" aria-modal="true" aria-label=${t("rack_edit")} tabindex="-1" ${cn()}>
        <div class="fp3d-rack-head">
          <h3>${this.heading||t("rack_edit")}</h3>
          ${this.renderTotals()}
          ${this.hasRear?m`<div class="fp3d-rack-faces" role="group">
                ${["front","rear"].map(u=>m`<button class="fp3d-btn" aria-pressed=${this.shownFace===u} @click=${()=>this.setFace(u)}>${t(`rack_face_${u}`)}</button>`)}
              </div>`:y}
          <button class="fp3d-btn" aria-label=${t("close")} @click=${()=>this.close()}>✕</button>
        </div>
        <div class="fp3d-rack-body">
          <div class="fp3d-rack-elev" style="grid-template-rows: repeat(${e}, ${L0}px)" @pointerleave=${()=>this.hoverUnit(null)}>
            ${n.map(u=>m`<span class="fp3d-rack-num fp3d-rack-left" style="grid-row: ${this.row(u,1)}">${l(u)}</span>
                ${fl.map((h,p)=>m`<button
                      class="fp3d-rack-lane"
                      style="grid-row: ${this.row(u,1)}; grid-column: ${h}"
                      aria-label=${`${p?"\u25B6":"\u25C0"} ${t("rack_unit",{n:l(u)})}`}
                      @pointerenter=${()=>this.hoverLane(u,p)}
                      @click=${()=>this.tapLane(u,p)}
                    ></button>`)}
                <button
                  class="fp3d-rack-cell ${s.has(u)?"fp3d-rack-bad":""}"
                  style="grid-row: ${this.row(u,1)}"
                  data-u=${u}
                  aria-label=${t("rack_unit",{n:l(u)})}
                  @pointermove=${h=>this.hoverUnit(u,Kh(h))}
                  @click=${h=>this.tapUnit(u,Kh(h))}
                ></button>
                <span class="fp3d-rack-num fp3d-rack-right" style="grid-row: ${this.row(u,1)}">${l(u)}</span>`)}
            ${c.map(u=>this.renderSlot(u,r))}
            ${this.ghost?.units.length&&d?m`<div
                  class="fp3d-rack-ghost ${this.ghost.ok?"fp3d-rack-ok":"fp3d-rack-bad"}"
                  style="grid-row: ${this.row(Math.max(1,this.ghost.units[0]),Math.min(this.ghost.units.length,e-Math.max(1,this.ghost.units[0])+1))}; grid-column: ${this.column(d,this.ghost.col??0)}"
                ></div>`:y}
          </div>
          <div class="fp3d-rack-side">
            ${this.refused?m`<p class="fp3d-rack-why" role="alert">${t(`rack_${this.refused.why}`)}</p>`:y}
            ${i.length?m`<section class="fp3d-rack-misfits">
                  <p class="fp3d-rack-why" role="alert">${t("rack_misfits",{n:i.length})}</p>
                  <ul>
                    ${i.map(u=>{let h=this.slots.find(p=>p.id===u.id);return m`<li><button class="fp3d-link" @click=${()=>this.tapSlot(h.id)}>${h.name||this.nameOf(h.type)}: ${t(`rack_${u.why}`)}</button></li>`})}
                  </ul>
                </section>`:y}
            ${a?this.renderChosen(a):y}
            ${this.editable?this.renderGear():m`<p class="fp3d-sub">${t("rack_read_only")}</p>`}
          </div>
        </div>
      </div>
    </div>`}renderTotals(){if(!this.space)return y;let t=this.t,e=Lh(this.space,this.slots,this.gearOf,this.looseOf);return m`<p class="fp3d-rack-totals">
      <span>${t("rack_totals",{used:e.used,free:e.free})}</span>
      <span>${e.unknown?t("rack_watts_about",{w:e.watts}):`${e.watts} W`}</span>
    </p>`}renderSlot(t,e){let n=this.space.u,i=xi(t,this.gearOf).length;if(t.u<1||t.u+i-1>n)return y;let s=this.gearOf(t.type),r=p=>["fp3d-rack-gear",p===this.selected?"fp3d-rack-chosen":"",e.has(p)?"fp3d-rack-bad":"",this.pick&&"move"in this.pick&&this.pick.move===p?"fp3d-rack-moving":""].join(" "),a=`grid-row: ${this.row(t.u,i)}; grid-column: ${this.column(t.type,t.col??0)}`,l=t.name||this.nameOf(t.type);if(s&&s.gear.u<1)return m`<button class="${r(t.id)} fp3d-rack-pdu" style=${a} data-slot=${t.id} title=${l} aria-label=${l} aria-pressed=${t.id===this.selected} @click=${()=>this.tapSlot(t.id)}></button>`;let c=this.linker?.status(t)??null,d=c?m`<i class="fp3d-rack-led fp3d-rack-led-${c}" style="background:${Cs[c]}"></i>`:y,u=m`<span>${l}</span>${i>1?m`<small>${i}U</small>`:y}${d}`;if(!s?.gear.shelf)return m`<button class=${r(t.id)} style=${a} data-slot=${t.id} aria-pressed=${t.id===this.selected} @click=${()=>this.tapSlot(t.id)}>${u}</button>`;let h=this.slots.filter(p=>p.on===t.id);return m`<div class="fp3d-rack-shelf" style=${a}>
      <button class="${r(t.id)} fp3d-rack-shelf-tray" data-slot=${t.id} aria-pressed=${t.id===this.selected} @click=${()=>this.tapSlot(t.id)}>${u}</button>
      ${h.map(p=>m`<button class="${r(p.id)} fp3d-rack-loose" data-slot=${p.id} aria-pressed=${p.id===this.selected} @click=${()=>this.tapSlot(p.id)}>${p.name||this.nameOf(p.type)}</button>`)}
    </div>`}renderChosen(t){let e=this.t,n=xi(t,this.gearOf),i=c=>this.labels[c-1]??c,s=n.length>1?`${i(n[0])}-${i(n.at(-1))}`:`${i(n[0])}`,r=t.on?null:this.gearOf(t.type),a=r?r.gear.u<1?2:un[r.gear.width]:1,l=t.on?this.slots.find(c=>c.id===t.on):null;return m`<section class="fp3d-rack-chosen-box">
      <h4>${t.name||this.nameOf(t.type)}</h4>
      <p class="fp3d-sub">${l?`\u2912 ${l.name||this.nameOf(l.type)}`:e("rack_at",{u:s})}${r&&r.gear.depth==="full"?m` · ${e("rack_full_depth")}`:t.face==="rear"&&this.hasRear?m` · ${e("rack_face_rear")}`:y}</p>
      ${this.editable?m`<label class="fp3d-field"
              >${e("furn_name")}
              <input type="text" maxlength="60" .value=${t.name??""} placeholder=${this.nameOf(t.type)} @change=${c=>this.rename(c.target.value)}
            /></label>
            <div class="fp3d-rack-actions">
              ${t.on?y:m`<button class="fp3d-btn" title=${e("rack_up")} @click=${()=>this.nudge(1)}>▲</button>
                    <button class="fp3d-btn" title=${e("rack_down")} @click=${()=>this.nudge(-1)}>▼</button>
                    ${a>1?m`<button class="fp3d-btn" ?disabled=${(t.col??0)<=0} @click=${()=>this.nudgeCol(-1)}>◀</button>
                          <button class="fp3d-btn" ?disabled=${(t.col??0)>=a-1} @click=${()=>this.nudgeCol(1)}>▶</button>`:y}
                    ${this.hasRear&&r&&r.gear.depth!=="full"?m`<button class="fp3d-btn" @click=${()=>this.flipFace()}>⇄ ${e(t.face==="rear"?"rack_face_front":"rack_face_rear")}</button>`:y}
                    <button class="fp3d-btn" aria-pressed=${!!this.pick&&"move"in this.pick} @click=${()=>this.startMove()}>${e("rack_move")}</button>`}
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSelected()}>${e("delete")}</button>
            </div>
            ${this.pick&&"move"in this.pick?m`<p class="fp3d-sub">${e("rack_move_hint")}</p>`:y}
            ${r?.gear.shelf?this.renderShelf():y}`:y}
      ${this.renderLinks(t)}
    </section>`}renderLinks(t){let e=this.linker;if(!e)return y;let n=this.t,i=t.links??[],s=(l,c,d,u)=>m`<fp3d-entity-picker
        .options=${l}
        .fixed=${d}
        .value=${c}
        .placeholder=${n("entity_search")}
        @change=${h=>{h.stopPropagation(),u(h.detail.value)}}
      ></fp3d-entity-picker>`,r={id:"none",label:n("entity_none")};if(!this.editable)return t.entity||i.length?m`<h4>${n("rack_links")}</h4>
            <ul class="fp3d-rack-links">
              ${[t.entity,...i].filter(l=>!!l).map(l=>m`<li>${e.label(l)}</li>`)}
            </ul>`:y;let a=e.suggest(t).filter(l=>l!==t.entity&&!i.includes(l));return m`<h4>${n("rack_links")}</h4>
      <label class="fp3d-field">${n("rack_ha_device")} ${s(e.devices,null,[],l=>this.linkDevice(l))}</label>
      <label class="fp3d-field">${n("rack_status_from")} ${s(e.entities,t.entity??"none",[r],l=>this.setStatusEntity(l==="none"?null:l))}</label>
      ${i.length?m`<ul class="fp3d-rack-links">
            ${i.map(l=>m`<li><span>${e.label(l)}</span><button class="fp3d-btn" aria-label=${n("delete")} @click=${()=>this.removeLink(l)}>✕</button></li>`)}
          </ul>`:y}
      ${i.length<16?m`<label class="fp3d-field">${n("rack_link_add")} ${s(e.entities,null,[],l=>this.addLink(l))}</label>`:y}
      ${a.length&&i.length<16?m`<p class="fp3d-sub">${n("rack_suggested")}</p>
            <div class="fp3d-rack-list">${a.map(l=>m`<button class="fp3d-btn fp3d-rack-choice" @click=${()=>this.addLink(l)}>+ ${e.label(l)}</button>`)}</div>`:y}`}renderShelf(){let t=this.t;return m`<h4>${t("rack_on_shelf")}</h4>
      ${this.loose.length?m`<div class="fp3d-rack-list">${this.loose.map(e=>m`<button class="fp3d-btn fp3d-rack-choice" @click=${()=>this.putOnShelf(e.type)}>${e.name}</button>`)}</div>`:m`<p class="fp3d-sub">${t("rack_no_loose")}</p>`}`}renderGear(){let t=this.t,e=this.pick&&"add"in this.pick?this.pick.add:null,n=e?(this.gearOf(e)?.gear.u??1)<1:!1;return m`<section>
      <h4>${t("rack_add")}</h4>
      ${this.gear.length?m`<div class="fp3d-rack-list">
            ${this.gear.map(i=>{let s=this.gearOf(i.type)?.gear,a=`${s?.u??1}U${s&&s.width!=="full"?` ${t(`rack_width_${s.width}`)}`:""}`;return m`<button class="fp3d-btn fp3d-rack-choice" aria-pressed=${e===i.type} @click=${()=>this.pickGear(i.type)}>${i.name}<small>${a}</small></button>`})}
          </div>`:m`<p class="fp3d-sub">${t("rack_no_gear")}</p>`}
      ${e?m`<p class="fp3d-sub">${t(n?"rack_lane_hint":"rack_add_hint")}</p>`:y}
    </section>`}static styles=[te,rn,lt`
      .fp3d-rack-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: flex;
        align-items: center;
        /* at the left, so the editor's 3D pane on the right shows the rack as it changes */
        justify-content: flex-start;
        background: rgba(0, 0, 0, 0.25);
        padding: 16px;
      }
      .fp3d-rack-sheet {
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        box-shadow: var(--fp3d-shadow);
        width: min(720px, 100%);
        max-height: calc(100% - 16px);
        display: flex;
        flex-direction: column;
        outline: none;
      }
      .fp3d-rack-head {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 10px 14px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rack-head h3 {
        margin: 0;
        font-size: 16px;
      }
      .fp3d-rack-body {
        display: flex;
        gap: 16px;
        padding: 14px;
        overflow: auto;
      }
      .fp3d-rack-elev {
        display: grid;
        /* U numbers, the left 0U lane, the U space in 6 (halves take 3, thirds 2), the right lane, U numbers */
        grid-template-columns: 28px 14px repeat(6, minmax(30px, 47px)) 14px 28px;
        flex: none;
        align-self: flex-start;
        border-radius: 6px;
        background: var(--fp3d-bg);
        padding: 6px 0;
      }
      .fp3d-rack-num {
        font-size: 11px;
        color: var(--fp3d-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        font-variant-numeric: tabular-nums;
        border-bottom: 1px dotted var(--fp3d-line);
      }
      .fp3d-rack-left {
        grid-column: 1;
      }
      .fp3d-rack-right {
        grid-column: 10;
      }
      .fp3d-rack-cell,
      .fp3d-rack-gear,
      .fp3d-rack-ghost {
        grid-column: 3 / span 6;
      }
      .fp3d-rack-lane {
        border: 0;
        border-bottom: 1px dotted var(--fp3d-line);
        background: rgba(120, 170, 255, 0.04);
        padding: 0;
        cursor: pointer;
      }
      .fp3d-rack-lane:hover {
        background: rgba(120, 170, 255, 0.14);
      }
      .fp3d-rack-gear.fp3d-rack-pdu {
        margin: 1px 1px;
        padding: 0;
        background: repeating-linear-gradient(180deg, var(--fp3d-bg2) 0 6px, var(--fp3d-line) 6px 8px);
      }
      .fp3d-rack-shelf {
        z-index: 1;
        display: flex;
        align-items: stretch;
        gap: 2px;
        margin: 1px 2px;
        border-bottom: 3px solid var(--fp3d-muted);
        min-width: 0;
      }
      .fp3d-rack-shelf .fp3d-rack-gear {
        margin: 0;
      }
      .fp3d-rack-shelf-tray {
        flex: 0 0 auto;
        max-width: 45%;
        background: transparent;
        border-style: dashed;
      }
      .fp3d-rack-loose {
        flex: 1 1 0;
        min-width: 0;
        align-self: flex-end;
        height: 75%;
      }
      .fp3d-rack-totals {
        margin: 0 0 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        font-size: 12px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rack-faces {
        display: flex;
        gap: 4px;
      }
      .fp3d-rack-faces [aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-rack-misfits ul {
        margin: 6px 0 0;
        padding-left: 18px;
        font-size: 12px;
      }
      .fp3d-link {
        background: none;
        border: 0;
        padding: 0;
        color: inherit;
        font: inherit;
        text-decoration: underline;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-rack-cell {
        border: 0;
        border-bottom: 1px dotted var(--fp3d-line);
        background: transparent;
        padding: 0;
        cursor: pointer;
        font: inherit;
      }
      .fp3d-rack-cell:hover {
        background: rgba(120, 170, 255, 0.08);
      }
      .fp3d-rack-gear {
        z-index: 1;
        margin: 1px 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 3px;
        background: var(--fp3d-bg2);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        padding: 0 8px;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .fp3d-rack-gear small {
        color: var(--fp3d-muted);
      }
      .fp3d-rack-led {
        display: inline-block;
        flex: none;
        width: 8px;
        height: 8px;
        margin-left: auto;
        border-radius: 2px;
      }
      .fp3d-rack-links {
        list-style: none;
        margin: 0 0 6px;
        padding: 0;
        display: grid;
        gap: 4px;
      }
      .fp3d-rack-links li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
      }
      .fp3d-rack-gear.fp3d-rack-chosen {
        border-color: var(--fp3d-accent);
        box-shadow: inset 0 0 0 1px var(--fp3d-accent);
      }
      .fp3d-rack-gear.fp3d-rack-moving {
        opacity: 0.55;
      }
      .fp3d-rack-ghost {
        z-index: 2;
        pointer-events: none;
        margin: 1px 2px;
        border-radius: 3px;
        border: 2px dashed var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.16);
      }
      .fp3d-rack-ghost.fp3d-rack-bad,
      .fp3d-rack-cell.fp3d-rack-bad,
      .fp3d-rack-gear.fp3d-rack-bad {
        border: 2px solid var(--fp3d-danger);
        background: rgba(255, 107, 139, 0.22);
      }
      .fp3d-rack-side {
        position: sticky;
        top: 0;
        align-self: flex-start;
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fp3d-rack-side h4 {
        margin: 0 0 6px;
        font-size: 13px;
      }
      .fp3d-rack-why {
        margin: 0;
        padding: 8px 10px;
        border-radius: 6px;
        color: var(--fp3d-danger);
        border: 1px solid var(--fp3d-danger);
      }
      .fp3d-rack-list,
      .fp3d-rack-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rack-choice {
        display: flex;
        gap: 6px;
        align-items: baseline;
      }
      .fp3d-rack-choice small {
        color: var(--fp3d-muted);
      }
      .fp3d-rack-choice[aria-pressed="true"],
      .fp3d-rack-actions [aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
        margin-bottom: 8px;
      }
      @media (max-width: 600px) {
        .fp3d-rack-veil {
          padding: 0;
          align-items: stretch;
        }
        .fp3d-rack-sheet {
          border-radius: 0;
          max-height: none;
        }
        .fp3d-rack-body {
          flex-direction: column;
        }
        .fp3d-rack-side {
          position: static;
          align-self: stretch;
        }
        .fp3d-rack-elev {
          align-self: stretch;
          grid-template-columns: 28px 14px repeat(6, 1fr) 14px 28px;
        }
      }
    `]};Xt("fp3d-rack-sheet",ml);var H0="security camera";function Ds(o){return!!o.tags?.includes(H0)}function qh(o){return o.toLowerCase().replace(/\s+/g," ").trim().replace(/^uvc /,"")}function D0(o,t){let e=qh(o??"");if(!e)return null;let n=null;for(let i of t)for(let s of i.items)if(Ds(s))for(let r of s.tags??[]){let a=qh(r);!(/\d/.test(a)||/^ai \S/.test(a))||!(e===a||e.startsWith(`${a} `))||(!n||a.length>n.len)&&(n={type:St(i.id,s.id),len:a.length})}return n?.type??null}function ki(o,t,e){let n=o.entities?.[t]?.device_id;return n?D0(o.devices?.[n]?.model,e):null}function pn(o,t,e){let n=o.placements.find(d=>d.entity_id===t);if(o.furniture=o.furniture.filter(d=>d.look_of!==t),!n||!e)return;let[i,s,r]=yt(e),a=mt(e),l={id:N("furniture"),type:e,x:n.x,z:n.z,rotation:n.rotation??0,w:i,d:s,h:r,variant:null,entity:"none",look_of:t,name:n.name??null,...n.locked?{locked:!0}:{}};if(o.furniture.push(l),!a||!Ds(a))return;let c=a.mount==="ceiling";if(c!==(n.mount==="ceiling")){let d=n.mount==="ceiling";n.fov??=d?360:90,n.reach??=d?3:4.5,n.tilt??=d?65:20}c?(n.mount="ceiling",n.y=null):(n.mount="wall",n.y=Math.round(((a.wall_y??1)+r/2)*1e3)/1e3)}var Vs=class{past=[];future=[];pool=new Map;chars=0;home=void 0;doc=null;run=null;now;maxSteps;maxChars;constructor(t={}){this.now=t.now??Date.now,this.maxSteps=t.maxSteps??100,this.maxChars=t.maxChars??25e6}get size(){return this.chars}get steps(){return this.past.length}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}adopt(t,e){let n=e===this.home&&t===this.doc;return n||this.clear(),this.home=e,this.doc=t,n}record(t,e,n,i=null){this.adopt(t,n),this.push(t,i),this.track(e)}track(t){this.doc=t}push(t,e=null,n=500){let i=this.now(),s=e!==null&&this.run?.key===e&&i-this.run.at<=n&&this.past.length>0;this.run=e===null?null:{key:e,at:i};for(let r of this.future)this.release(r);this.future=[],!s&&(this.past.push(this.store(t)),this.trim())}undo(t){let e=this.past.pop();return e?(this.run=null,this.future.push(this.store(t)),this.release(e),this.doc=this.load(e)):null}redo(t){let e=this.future.pop();return e?(this.run=null,this.past.push(this.store(t)),this.release(e),this.trim(),this.doc=this.load(e)):null}clear(){this.past=[],this.future=[],this.pool.clear(),this.chars=0,this.run=null}trim(){for(;this.past.length>this.maxSteps||this.chars>this.maxChars&&this.past.length>1;)this.release(this.past.shift())}store(t){let e=[];for(let[n,i]of Object.entries(t))if(n==="floors"&&Array.isArray(i))e.push([n,i.map(s=>this.keep(JSON.stringify(s)))]);else{let s=JSON.stringify(i);s!==void 0&&e.push([n,this.keep(s)])}return e}load(t){let e={};for(let[n,i]of t)e[n]=Array.isArray(i)?i.map(s=>JSON.parse(s)):JSON.parse(i);return e}keep(t){let e=this.pool.get(t);return e?(e.n++,e.s):(this.pool.set(t,{s:t,n:1}),this.chars+=t.length,t)}release(t){for(let[,e]of t)for(let n of Array.isArray(e)?e:[e]){let i=this.pool.get(n);i&&--i.n===0&&(this.pool.delete(n),this.chars-=n.length)}}};var Ns=new WeakMap;function Ws(o){let t=o;for(let e=Ns.get(t);e;e=Ns.get(t))t=e;return t}var Yh=new WeakMap;function Qh(o){if(!o)return 0;let t=Yh.get(o);return t===void 0&&Yh.set(o,t=Object.keys(o).length),t}var js=class{watched=new Set;all=!0;active=!1;paused=0;wrapped=new WeakMap;entityLists;constructor(t={}){this.entityLists=t.entityLists??!0}begin(t=!1){t||(this.watched.clear(),this.all=!1),this.active=!0}end(){this.active=!1}pause(t){this.paused++;try{return t()}finally{this.paused--}}get rendering(){return this.active}get recording(){return this.active&&!this.paused}wrap(t){let e=this.wrapped.get(t);if(e)return e;let n=this.watchStates(t.states),i=new Proxy(t,{get:(s,r,a)=>r==="states"?n:Reflect.get(s,r,a)});return this.wrapped.set(t,i),Ns.set(i,t),i}watchStates(t){if(!t)return t;let e=new Proxy(t,{get:(n,i,s)=>(typeof i=="string"&&this.recording&&this.watched.add(i),Reflect.get(n,i,s)),has:(n,i)=>(typeof i=="string"&&this.recording&&this.watched.add(i),Reflect.has(n,i)),ownKeys:n=>(this.recording&&(this.all=!0),Reflect.ownKeys(n))});return Ns.set(e,t),e}matters(t,e){if(!t||!e||this.all)return!0;t=Ws(t),e=Ws(e);let n=t,i=e;for(let a of new Set([...Object.keys(n),...Object.keys(i)]))if(a!=="states"&&n[a]!==i[a]&&!(typeof n[a]=="function"&&typeof i[a]=="function"))return!0;let s=Ws(t.states??{}),r=Ws(e.states??{});if(s===r)return!1;if(this.entityLists&&Qh(s)!==Qh(r))return!0;for(let a of this.watched)if(s[a]!==r[a])return!0;if(this.entityLists){for(let a in r)if(!(a in s))return!0}return!1}};function Qe(o,t){let e=o.points,n=e[t],i=e[(t+1)%e.length],s=Math.hypot(i[0]-n[0],i[1]-n[1])||1,r=[(i[0]-n[0])/s,(i[1]-n[1])/s],a=[-r[1],r[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];U([l[0]+a[0]*.02,l[1]+a[1]*.02],e)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:n,b:i,u:r,n:a,length:s,rightward:r[0]*c[0]+r[1]*c[1]>0}}function bt(o,t){let e=t[0]-o.a[0],n=t[1]-o.a[1];return{s:e*o.u[0]+n*o.u[1],d:e*o.n[0]+n*o.n[1]}}function de(o,t,e){return[o.a[0]+o.u[0]*t+o.n[0]*e,o.a[1]+o.u[1]*t+o.n[1]*e]}var V0=.45;function Dn(o,t){let e=[];for(let n of t.openings){if(n.wall)continue;let i=t.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s,d:r}=bt(o,le(i,n.edge,n.offset));Math.abs(r)>.4||s<-.05||s>o.length+.05||e.push(W0(n,s))}return e}function W0(o,t){return{kind:"opening",id:o.id,s0:t-o.width/2,s1:t+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function Je(o,t,e,n=V0){let i=[];for(let s of t.furniture){if(s.type==="stairwell"||s.type==="parking")continue;let r=U([s.x,s.z],e.points),a=Bt(s).map(p=>bt(o,p)),l=Math.min(...a.map(p=>p.d)),c=Math.min(...a.map(p=>p.s)),d=Math.max(...a.map(p=>p.s)),u=bt(o,[s.x,s.z]);if(!r&&u.d<=0||u.d<=0||l>n||l<-.3||d<.02||c>o.length-.02)continue;let h=jt(t,s);i.push({kind:"furniture",id:s.id,s0:c,s1:d,y0:h,y1:h+s.h,d:l})}return i}function Bs(o,t,e){let n=i=>Math.round(i*1e3)/1e3;return{x:n(t.x+o.u[0]*e),z:n(t.z+o.u[1]*e)}}var gl=.3;function ie(o,t){let e=o.from?t(o.from):null,n=o.to?t(o.to):null,i=o.height??gl,s=[];if(o.heights)e&&s.push([e.x,e.y,e.z]),o.points.forEach(([r,a],l)=>s.push([r,o.heights?.[l]??i,a])),n&&s.push([n.x,n.y,n.z]);else{if(!e||!n)return[];s.push([e.x,e.y,e.z],[e.x,i,e.z]);for(let[r,a]of o.points)s.push([r,i,a]);s.push([n.x,i,n.z],[n.x,n.y,n.z])}return s.filter((r,a)=>a===0||Ks(r,s[a-1])>.001)}function Ks(o,t){return Math.hypot(t[0]-o[0],t[1]-o[1],t[2]-o[2])}function bl(o){let t=0;for(let e=1;e<o.length;e++)t+=Ks(o[e-1],o[e]);return t}function Jh(o,t){if(o.length<2)return null;let e=Math.max(0,t);for(let n=1;n<o.length;n++){let[i,s]=[o[n-1],o[n]],r=Ks(i,s);if(!(r<1e-6)){if(e<=r||n===o.length-1){let a=Math.min(1,e/r),l=[(s[0]-i[0])/r,(s[1]-i[1])/r,(s[2]-i[2])/r];return{p:[i[0]+(s[0]-i[0])*a,i[1]+(s[1]-i[1])*a,i[2]+(s[2]-i[2])*a],dir:l,seg:n-1}}e-=r}}return null}function $i(o,t){let e=null,n=0;for(let i=1;i<o.length;i++){let[s,r]=[o[i-1],o[i]],a=[r[0]-s[0],r[1]-s[1],r[2]-s[2]],l=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],c=l>0?Math.max(0,Math.min(1,((t[0]-s[0])*a[0]+(t[1]-s[1])*a[1]+(t[2]-s[2])*a[2])/l)):0,d=[s[0]+a[0]*c,s[1]+a[1]*c,s[2]+a[2]*c],u=Ks(d,t);(!e||u<e.d)&&(e={at:n+Math.sqrt(l)*c,d:u,seg:i-1,p:d}),n+=Math.sqrt(l)}return e}function ve(o,t,e,n){let[i,s]=de(o,t,n);return[i,e,s]}function Xh(o,t,e,n){let i=de(o,0,t),s=de(e,0,n),r=o.u[0]*-e.u[1]-o.u[1]*-e.u[0];if(Math.abs(r)<1e-6)return null;let a=s[0]-i[0],l=s[1]-i[1],c=(a*-e.u[1]-l*-e.u[0])/r;return[i[0]+o.u[0]*c,i[1]+o.u[1]*c]}var bo="application/x-home3d-entity",Xe=10,Zh="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10",N0={vertex:!0,room:!0,device:!0,pet:!0,opening:!0,furniture:!0,furnset:!0,rotate:!0,resize:!0,outdoor:!0,roofmove:!0,roofcorner:!0,roofvertex:!0,outvertex:!0,outbox:!0,pipept:!0,poolport:!0,pooldev:!0,pooljoint:!0,solarmove:!0,solarturn:!0,cablept:!0,holopt:!0,bgmove:!0,bgscale:!0,bgrotate:!0,wallmove:!0},_l=new Set(Object.keys(N0));function Gs(o,t){let e=[];for(let n of o.openings){if(n.id===t.id)continue;(t.wall?n.wall===t.wall:!n.wall&&n.room_id===t.room_id&&n.edge===t.edge)&&e.push({offset:n.offset,width:n.width})}return e}var yl=(o,t)=>{let e=((o+t)%360+360)%360;return e>180?e-360:e},qs={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table"],switches:["wall_switch","wall_socket","wifi_ap","water_heater"]},tf=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),_o=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),ef={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},Vn=10,$=o=>Math.round(o*1e3)/1e3,yo=.06;function Yt(o,t){o&&Object.assign(o,t)}function Us(o,t){if(o.length<3)return o.slice(1);let e=o[0],n=o[o.length-1],i=0,s=-1,r=Math.hypot(n.s-e.s,n.y-e.y)||1;for(let a=1;a<o.length-1;a++){let l=o[a],c=Math.abs((n.s-e.s)*(e.y-l.y)-(e.s-l.s)*(n.y-e.y))/r;c>i&&([i,s]=[c,a])}return i<=t||s<0?[]:[...Us(o.slice(0,s+1),t),o[s],...Us(o.slice(s),t)]}function nf(o){if(o.length<2)return o;let t=r=>Math.round(r*20)/20,e=[{s:o[0].s,y:o[0].y}];for(let r=1;r<o.length;r++){let a=e[e.length-1],l=o[r],d=Math.abs(l.s-a.s)>=Math.abs(l.y-a.y)?{s:t(l.s),y:a.y}:{s:a.s,y:t(l.y)},u=e.length>1?e[e.length-2]:null;u&&(u.y===a.y&&d.y===a.y||u.s===a.s&&d.s===a.s)&&e.pop(),!(Math.hypot(d.s-e[e.length-1].s,d.y-e[e.length-1].y)<.08&&r<o.length-1)&&e.push(d)}let n=o[o.length-1],i=e[e.length-1];e.pop();let s=e[e.length-1];return s&&Math.abs(n.s-s.s)>=.08&&Math.abs(n.y-s.y)>=.08&&e.push(s.y===i.y||e.length<2?{s:t(n.s),y:s.y}:{s:s.s,y:t(n.y)}),e.push({s:n.s,y:n.y}),e}function hn(o,t,e){let[n,,i]=ve(o,t,0,e);return[$(n),$(i)]}function vo(o,t){let e=ie(o,t),n=0;for(let i=1;i<e.length;i++)n+=Math.hypot(e[i][0]-e[i-1][0],e[i][1]-e[i-1][1],e[i][2]-e[i-1][2]);return n}var vl={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},fn=o=>wt(o)??mt(o),of=new Set(["parking","stairwell","rug","grid_point","waste_bin","mailbox","wall_switch","wall_socket","wifi_ap","water_heater"]);function Pe(o){return ci.includes(o)||xt(o)!==null}function Ys(o){let t=mt(o);return t?.family==="meter"&&(t.tags??[]).some(e=>/^(gas|water|wasser)$/i.test(e))}function sf(o,t,e){let n=e[0]-t[0],i=e[1]-t[1],s=n*n+i*i||1,r=Math.min(1,Math.max(0,((o[0]-t[0])*n+(o[1]-t[1])*i)/s));return Math.hypot(o[0]-t[0]-n*r,o[1]-t[1]-i*r)}function xl(o){return o.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var xo={language:"en"};function Rt(o){return/^(sensor|input_number|number)\./.test(o)}function wo(o){return/^(binary_sensor|input_boolean)\./.test(o)}function wl(o){let t=o.floors.some(e=>e.rooms.length>0);return{show:!t,steps:[{step:"floor",done:o.floors.length>0},{step:"room",done:t},{step:"furniture",done:o.floors.some(e=>e.furniture.length>0)}]}}function rf(o,t){return t&&wl(o).show}function af(o,t){for(let e of t)for(let[n,i]of Object.entries(Object.getOwnPropertyDescriptors(e.prototype)))if(n!=="constructor"){if(Object.prototype.hasOwnProperty.call(o.prototype,n))throw new Error(`editor part ${e.name}: ${n} is defined twice`);Object.defineProperty(o.prototype,n,i)}}var lf=.25,Qs=o=>Math.round(o*1e3)/1e3;function kl(o,t,e,n,i){let s=o.rooms.find(r=>r.points.length>=3&&U([t,e],r.points));return!s||U([n,i],s.points)?[n,i]:U([n,e],s.points)?[n,e]:U([t,i],s.points)?[t,i]:[t,e]}function ue(o,t,e,n){let i=Math.hypot(n[0]-e[0],n[1]-e[1]);if(i<.01)return!1;let s=[(n[0]-e[0])/i,(n[1]-e[1])/i],r=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return o.rooms.some(l=>l.id!==t&&l.points.some((c,d)=>{let u=l.points[(d+1)%l.points.length];return r(c)>.02||r(u)>.02?!1:Math.min(i,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Js(o,t,e,n,i,s=.05){let r=o.rooms.find(h=>h.points.length>=3&&U([t.x,t.z],h.points));if(!r)return[e,n];let a=r.points,l=Lt(a)>=0?1:-1,c=Bt({...t}),d=e,u=n;for(let h=0;h<2;h++){let p=Bt({...t,x:d,z:u});for(let f=0;f<a.length;f++){let b=a[f],g=a[(f+1)%a.length],_=Math.hypot(g[0]-b[0],g[1]-b[1]);if(_<.05)continue;let v=[(g[0]-b[0])/_,(g[1]-b[1])/_],x=[-v[1]*l,v[0]*l],w=ue(o,r.id,b,g)?i/2:0,E=0;p.forEach((k,M)=>{let F=(k[0]-b[0])*v[0]+(k[1]-b[1])*v[1];if(F<-.01||F>_+.01)return;let L=(k[0]-b[0])*x[0]+(k[1]-b[1])*x[1]-w,C=c[M];(C[0]-b[0])*x[0]+(C[1]-b[1])*x[1]-w<-s||L<E&&(E=L)}),E<-1e-4&&(d-=x[0]*E,u-=x[1]*E)}}return[Qs(d),Qs(u)]}function Wn(o,t,e,n=lf){let i=$l(o,t,e,n);return i?{x:i.x,z:i.z,rotation:i.rotation}:null}function $l(o,t,e,n=lf,i={}){let s=i.roomId?o.rooms.find(d=>d.id===i.roomId&&d.points.length>=3):o.rooms.find(d=>d.points.length>=3&&U([t.x,t.z],d.points));if(!s)return null;let r=s.points,a=Lt(r)>=0?1:-1,l=e/2,c=null;for(let d=0;d<r.length;d++){let u=r[d],h=r[(d+1)%r.length],p=Math.hypot(h[0]-u[0],h[1]-u[1]);if(p<.3)continue;let f=[(h[0]-u[0])/p,(h[1]-u[1])/p],b=[-f[1]*a,f[0]*a],g=(t.x-u[0])*f[0]+(t.z-u[1])*f[1];if(g<0||g>p)continue;let v=ue(o,s.id,u,h)?l:0,x=(t.x-u[0])*b[0]+(t.z-u[1])*b[1]-v,w=Math.atan2(-b[0],b[1])*180/Math.PI,E=L=>Math.abs((t.rotation-L+540)%360-180),k=[{rotation:w,extent:t.d/2},{rotation:w+90,extent:t.w/2},{rotation:w-90,extent:t.w/2}],M=i.turn?k[0]:k.reduce((L,C)=>E(C.rotation)<E(L.rotation)?C:L);if(!i.turn&&E(M.rotation)>50)continue;let F=x-M.extent;Math.abs(F)>n||c&&Math.abs(F)>=Math.abs(c.gap)||(c={x:Qs(t.x-b[0]*F),z:Qs(t.z-b[1]*F),rotation:(Math.round(M.rotation)%360+360)%360,roomId:s.id,edge:d,gap:F})}return c?{x:c.x,z:c.z,rotation:c.rotation,roomId:c.roomId,edge:c.edge}:null}var pe=Math.PI/180;function Nn(o){let t=o.rotation??0;if(!t||o.points&&o.points.length>=3)return null;let e=t*pe;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Mi(o,t,e=!1){if(!o)return t;let n=t[0]-o.p[0],i=t[1]-o.p[1],s=e?-o.s:o.s;return[o.p[0]+n*o.c-i*s,o.p[1]+n*s+i*o.c]}function he(o){let t=Math.min(o.x0,o.x1),e=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1),s=Nn(o),r=o.axis==="x"?(l,c)=>[l,o.flip?i-c:n+c]:(l,c)=>[o.flip?e-c:t+c,l],a=s?(l,c)=>Mi(s,r(l,c)):r;return o.axis==="x"?{u0:t,u1:e,w:i-n,at:a}:{u0:n,u1:i,w:e-t,at:a}}function j0(o,t,e,n=1e-6){let[i,s]=gf(o,t,e),r=he({...o,rotation:0});return i>=r.u0-n&&i<=r.u1+n&&s>=-n&&s<=r.w+n}function He(o){let t=he(o).w,e=o.eave_a,n=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*pe),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*pe);if(o.shape==="flat"||o.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(o.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};if(o.shape==="mansard"){let l=ff(t,e,n,i,s);return{vr:l.vr,rh:l.rh,y:l.y}}let r=i+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(i+s))):t/2,a=e+r*i;return{vr:r,rh:a,y:l=>l<=r?e+l*i:n+(t-l)*s}}function Ml(o){let t=o.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var df=.14;function uf(o,t){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<t-.05}function pf(o,t){return He(o).rh-df>t+.01}function hf(o,t,e){let n=[];for(let i of Ml(o)){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let s=he(i),r=He(i),a=t+e+df,l=[],c=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*pe),d=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*pe);c>1e-6&&l.push((a-i.eave_a)/c),i.shape==="gable"&&d>1e-6&&l.push(s.w-(a-i.eave_b)/d);for(let u of l)u<=.01||u>=s.w-.01||i.shape==="gable"&&Math.abs(r.y(u)-a)>1e-6||n.push([s.at(s.u0,u),s.at(s.u1,u)])}return n}function B0(o,t){let e=o.length;if(e<3||Math.abs(t)<1e-9)return o.map(s=>[s[0],s[1]]);let n=Ft(o)>=0?1:-1,i=[];for(let s=0;s<e;s++){let r=o[(s+e-1)%e],a=o[s],l=o[(s+1)%e],c=cf([a[0]-r[0],a[1]-r[1]]),d=cf([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],h=[d[1]*n,-d[0]*n],p=u[0]+h[0],f=u[1]+h[1],b=Math.hypot(p,f);if(b<1e-6){i.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(p*u[0]+f*u[1])/b,_=Math.min(4,1/Math.max(.25,g));i.push([a[0]+p/b*t*_,a[1]+f/b*t*_])}return i}function cf(o){let t=Math.hypot(o[0],o[1])||1;return[o[0]/t,o[1]/t]}function $o(o){let t=o.map(n=>n[0]),e=o.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function Xs(o,t,e,n){let i=$t(o,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!i.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,r=new Map,a=i.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let h of[u.a,u.b])r.set(s(h),[...r.get(s(h))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let h=[u.a,u.b],p=u.b;for(;;){let f=(r.get(s(p))??[]).find(b=>!l.has(b));if(!f||(l.add(f),p=s(f.a)===s(p)?f.b:f.a,s(p)===s(h[0])))break;h.push(p)}h.length>=3&&s(p)===s(h[0])&&(!c||Math.abs(Ft(h))>Math.abs(Ft(c)))&&(c=h)}if(!c)return null;let d=[];for(let u=0;u<c.length;u++){let h=c[(u+c.length-1)%c.length],p=c[u],f=c[(u+1)%c.length],b=(p[0]-h[0])*(f[1]-p[1])-(p[1]-h[1])*(f[0]-p[0]);Math.abs(b)>1e-6&&d.push(p)}return d.length>=3?B0(d,e):null}var ko=Math.tan(30*pe);function ff(o,t,e,n,i){let s=Math.min(o*.3,n>1e-6?2.4/n:o*.3),r=Math.min(o*.3,i>1e-6?2.4/i:o*.3),a=t+s*n,l=e+r*i,c=Math.min(o-r,Math.max(s,(l-a+ko*(o-r+s))/(2*ko))),d=a+(c-s)*ko;return{vla:s,vlb:r,yla:a,ylb:l,vr:c,rh:d,y:h=>h<=s?t+h*n:h<=c?a+(h-s)*ko:h<=o-r?l+(o-r-h)*ko:e+(o-h)*i}}function El(o,t){let e=he(o),n=He(o),i=e.w,s=Math.max(0,t.a),r=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(H,j)=>[H,j,n.y(j)],d=c(a,-s),u=c(l,-s),h=c(l,i+r),p=c(a,i+r),f=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*pe),b=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*pe);if(o.shape==="pent"){let H=[d,u,h,p],j=[[0,n.y(0)],[i,n.y(i)]];return{faces:[H],rim:H,ridges:[[h,p]],gable:j,gables:[j,j]}}if(o.shape==="pyramid"){let H=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[d,u,H],[u,h,H],[h,p,H],[p,d,H]],rim:[d,u,h,p],ridges:[[d,H],[p,H],[u,H],[h,H]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let H=ff(i,o.eave_a,o.eave_b,f,b),j=[[0,n.y(0)],[H.vla,H.yla],[H.vr,H.rh],[i-H.vlb,H.ylb],[i,n.y(i)]],q=[a,H.vla,H.yla],Y=[l,H.vla,H.yla],Q=[a,i-H.vlb,H.ylb],Z=[l,i-H.vlb,H.ylb],B=[a,H.vr,H.rh],st=[l,H.vr,H.rh];return{faces:[[d,u,Y,q],[q,Y,st,B],[B,st,Z,Q],[Q,Z,h,p]],rim:[d,u,Y,st,Z,h,p,Q,B,q],ridges:[[B,st],[q,Y],[Q,Z]],gable:j,gables:[j,j]}}let[g,_]=Sl(o)??["gable","gable"],v=Pl(o,[g,_]),x=g==="gable"?[a,n.vr,n.rh]:[e.u0+v.d0,n.vr,n.rh],w=_==="gable"?[l,n.vr,n.rh]:[e.u1-v.d1,n.vr,n.rh],E=[a,v.vah,v.yh],k=[a,v.vbh,v.yh],M=[l,v.vah,v.yh],F=[l,v.vbh,v.yh],L=g==="halfhip",C=_==="halfhip",S=[[d,u,...C?[M]:[],w,x,...L?[E]:[]],[x,w,...C?[F]:[],h,p,...L?[k]:[]]];g==="hip"&&S.push([p,d,x]),L&&S.push([k,E,x]),_==="hip"&&S.push([u,h,w]),C&&S.push([M,F,w]);let T=[d,u,..._==="gable"?[w]:C?[M,F]:[],h,p,...g==="gable"?[x]:L?[k,E]:[]],R=[[x,w]];g==="hip"&&R.push([d,x],[p,x]),L&&R.push([E,x],[k,x]),_==="hip"&&R.push([u,w],[h,w]),C&&R.push([M,w],[F,w]);let I=[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]],z=[[0,n.y(0)],[v.vah,v.yh],[v.vbh,v.yh],[i,n.y(i)]],D=H=>H==="gable"?I:H==="halfhip"?z:null,W=[D(g),D(_)];return{faces:S,rim:T,ridges:R,gable:W[0]??W[1],gables:W}}function Sl(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let t=o.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(o.end_u0),e(o.end_u1)]}function Pl(o,t){let e=he(o),n=He(o),i=e.w,s=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*pe),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*pe),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(i)),d=c+(n.rh-c)*.55,u=s>1e-6?Math.min(n.vr,(d-o.eave_a)/s):n.vr,h=r>1e-6?Math.max(n.vr,i-(d-o.eave_b)/r):n.vr,p=Math.min(l,Math.min(n.vr,i-n.vr)||i/2),f=Math.min(l-.1,(n.rh-d)/Math.max(.2,s)),b=g=>g==="hip"?p:g==="halfhip"?f:0;return{d0:b(t[0]),d1:b(t[1]),yh:d,vah:u,vbh:h}}function K0(o,t,e){let n=null;for(let i of o.faces){if(!U([t,e],i.map(v=>[v[0],v[1]])))continue;let[s,r]=i,a=i.slice(2).find(v=>Math.abs((r[0]-s[0])*(v[1]-s[1])-(r[1]-s[1])*(v[0]-s[0]))>1e-9);if(!a)continue;let l=r[0]-s[0],c=r[2]-s[2],d=r[1]-s[1],u=a[0]-s[0],h=a[2]-s[2],p=a[1]-s[1],f=c*p-d*h,b=d*u-l*p,g=l*h-c*u;if(Math.abs(b)<1e-9)continue;let _=s[2]-(f*(t-s[0])+g*(e-s[1]))/b;n=n===null?_:Math.min(n,_)}return n}function mf(o,t,e){let n=t*pe,i={p:e,c:Math.cos(n),s:Math.sin(n)};if(o.points&&o.points.length>=3)return{...o,points:o.points.map(d=>Mi(i,d)),...$o(o.points.map(d=>Mi(i,d)))};let s=o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],r=Mi(i,s),a=r[0]-s[0],l=r[1]-s[1],c=(((o.rotation??0)+t)%360+360)%360;return c>180&&(c-=360),{...o,x0:o.x0+a,x1:o.x1+a,z0:o.z0+l,z1:o.z1+l,pivot:r,rotation:Math.abs(c)<1e-9?0:c}}function gf(o,t,e){let[n,i]=Mi(Nn(o),[t,e],!0),s=Math.min(o.x0,o.x1),r=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[n,o.flip?l-i:i-a]:[i,o.flip?r-n:n-s]}function Fl(o,t){let[e,n]=Mi(Nn(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),i=r=>Math.abs((r.x1-r.x0)*(r.z1-r.z0)),s=null;for(let r of o)r===t||r.dormer||r.open||r.shape==="flat"||r.shape==="parapet"||i(r)<i(t)*1.5||j0(r,e,n)&&(!s||i(r)<i(s))&&(s=r);return s}function bf(o,t,e,n){let i=Nn(o),s=he({...o,rotation:0}),r=He(o),a=2,l=Math.max(s.u0+.3,Math.min(s.u1-a-.3,(n??(s.u0+s.u1)/2)-a/2)),c=t==="a"?o.eave_a:o.eave_b,d=t==="a"?o.pitch_a:o.pitch_b,u=c+1.4,h=a/2*Math.tan(35*pe),p=u+h,f=Math.max(.8,Math.min(s.w/2-.2,(p-c)/Math.max(.15,Math.tan(Math.min(80,d)*pe)))),b=t==="a"?0:s.w-f,g=t==="a"?f:s.w,_=s.at(l,b),v=s.at(l+a,g);return{id:e,x0:Math.round(Math.min(_[0],v[0])*100)/100,z0:Math.round(Math.min(_[1],v[1])*100)/100,x1:Math.round(Math.max(_[0],v[0])*100)/100,z1:Math.round(Math.max(_[1],v[1])*100)/100,shape:"gable",axis:o.axis==="x"?"z":"x",eave_a:Math.round(u*100)/100,eave_b:Math.round(u*100)/100,pitch_a:35,pitch_b:35,base:Math.round(r.y(t==="a"?0:s.w)*100)/100,overhang:.15,dormer:!0,...i?{rotation:o.rotation,pivot:i.p}:{}}}function _f(o,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=he(t),n=He(t).rh,i=El(o,{u0:0,u1:0,a:0,b:0}),s=He(o),r=b=>{let[g,_]=e.at(b,e.w/2),[v,x]=gf(o,g,_);return K0(i,v,x)??s.y(x)},a=r(e.u0)<=r(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,d=a?1:-1,u=Math.abs(c-l),h=c;for(let b=.5;b<u;b+=.05)if(r(l+d*b)>=n-.02){h=l+d*b;break}if(Math.abs(h-c)<.05)return t;let p=Nn(t),f={...t,...p?{pivot:p.p}:{}};return t.axis==="x"?c===e.u1?f.x1=h:f.x0=h:c===e.u1?f.z1=h:f.z0=h,f}function yf(o,t,e){let n=he(t),i=o.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(d=>i.some(u=>U(d,u.points))),r=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-r)))?0:e,b:s(a.map(c=>n.at(c,n.w+r)))?0:e,u0:s(l.map(c=>n.at(n.u0-r,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+r,c)))?0:e}}function vf(o,t,e,n,i){let s=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])s.push([t+(n-t)*a,e+(i-e)*l]);let r=o.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&s.some(c=>U(c,l.points)))).map(a=>a.elevation+a.height);return r.length?Math.max(...r):null}function xf(o,t){let e=o.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Zs(o){return He(o).rh}function wf(o,t=e=>`roof_${e+1}`){let e=o.settings.roof?.pitch??35,n=o.settings.wall_exterior,i=o.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),s=[],r=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(x=>x.points.length>=3),d=[...new Set(c.flatMap(x=>x.points.map(w=>a(w[0]))))].sort((x,w)=>x-w),u=[...new Set(c.flatMap(x=>x.points.map(w=>a(w[1]))))].sort((x,w)=>x-w),h=d.length-1,p=u.length-1,f=(x,w)=>x.some(E=>U(w,E.points)),b=[];for(let x=0;x<p;x++){b.push([]);for(let w=0;w<h;w++){let E=[(d[w]+d[w+1])/2,(u[x]+u[x+1])/2];b[x].push(f(c,E)&&!f(r,E))}}let g=b.map(x=>x.map(()=>!1)),_=(x,w)=>b[w][x]&&!g[w][x],v=l.elevation+l.height;for(let x=0;x<p;x++)for(let w=0;w<h;w++){if(!_(w,x))continue;let E=w;for(;E+1<h&&_(E+1,x);)E++;let k=x;for(;k+1<p&&Array.from({length:E-w+1},(S,T)=>_(w+T,k+1)).every(Boolean);)k++;for(let S=x;S<=k;S++)for(let T=w;T<=E;T++)g[S][T]=!0;let M=d[w]-n,F=d[E+1]+n,L=u[x]-n,C=u[k+1]+n;Math.min(F-M,C-L)<.8||s.push({id:t(s.length),x0:a(M),z0:a(L),x1:a(F),z1:a(C),shape:"gable",axis:F-M>=C-L?"x":"z",eave_a:a(v),eave_b:a(v),pitch_a:e,pitch_b:e,base:a(v),overhang:null})}r.push(...c)}return s}var Kn=Math.PI/180,kf=1.13,Rl=1.72,xe=.025,jn=.07,$f=.25;function oe(o,t){let e=[];for(let n of o.floors){if(t&&n.id!==t)continue;let{walls:i}=$t(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let s of i){if(!s.exterior&&!s.free)continue;let r=s.b[0]-s.a[0],a=s.b[1]-s.a[1],l=Math.hypot(r,a);if(l<.5)continue;let c=a/l,d=-r/l,u=Math.min(n.height,s.height??n.height),h=s.sources.find(b=>b.room_id===s.roomLeft)?.edge??null,p={floorId:n.id,room:s.roomLeft,edge:h,free:!!s.free},f=(b,g,_,v)=>e.push({key:b,section:null,side:"top",flat:!1,o:g,eu:_,es:[0,1,0],n:v,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[v[0],v[2]],wall:p});f(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+d*s.right],[r/l,0,a/l],[c,0,d]),s.free&&f(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-d*s.left],[-r/l,0,-a/l],[-c,0,-d])}}return e}var Fe="ground";function Al(o){let t=[...o.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??o.floors[0]??null}function er(o,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],s=Al(o),r=n[0]*t.u+i[0]*t.v,a=n[2]*t.u+i[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:ts(s,r,a)):t.base??0;return{key:Fe,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Kt(o,t,e=ut(o)){return t.face===Fe?er(o,t):t.face.startsWith("wall:")?oe(o,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function Mf(o,t,e){let n=oe(o,e),i=o.settings.north??0,s=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},r=[...n].sort((l,c)=>s(c)-s(l))[0];if(!r)return null;let a={...nr(r,t),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((r.lu-.8+xe)/(Rl+xe))),a.u=Math.round((r.lu-(a.cols*Rl+(a.cols-1)*xe))/2*100)/100,a.v=Math.round(Math.max(0,r.ls-kf-.3)*100)/100,a}function zl(o,t){let e=o.floors.flatMap(s=>s.rooms.flatMap(r=>r.points)),n=e.length?Math.max(...e.map(s=>s[0]))+3:0,i=e.length?Math.min(...e.map(s=>s[1])):0;return{id:t,face:Fe,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(o.settings.north??0)||0,look:"black",entity:null}}function Eo(o){return o.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function ut(o){let t=o.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>U0(v,yf(o,v,v.overhang??t.overhang)));let e=Eo(o);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map(x=>x[0])),i=e.rooms.flatMap(v=>v.points.map(x=>x[1])),s=o.settings.wall_exterior+t.overhang,r=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...i)-s,c=Math.max(...i)+s,d=e.elevation+e.height;if(t.type==="flat")return[Ef("main",null,r,l,a,c,d+$f)];let u=a-r>=c-l,h=t.ridge==="short"?!u:u,p=(h?c-l:a-r)/2,f=p*Math.tan(t.pitch*Kn),b=(v,x,w)=>h?[v,d+w,(l+c)/2+x]:[(r+a)/2+x,d+w,v],[g,_]=h?[r,a]:[l,c];return[-1,1].map(v=>tr(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",b(g,v*p,0),b(_,v*p,0),b(g,0,f),t.pitch,()=>[0,_-g]))}function U0(o,t){let e=he(o),n=He(o),i=(x,w,E)=>{let[k,M]=e.at(x,w);return[k,E,M]},s=Math.max(0,t.a),r=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(o.shape==="flat"||o.shape==="parapet"){let x=e.at(a,-s),w=e.at(l,e.w+r);return[Ef(o.id,o.id,Math.min(x[0],w[0]),Math.min(x[1],w[1]),Math.max(x[0],w[0]),Math.max(x[1],w[1]),o.eave_a+$f)]}if(o.shape==="pent")return[tr(`${o.id}:a`,o.id,"a",i(a,-s,n.y(-s)),i(l,-s,n.y(-s)),i(a,e.w+r,n.y(e.w+r)),o.pitch_a,()=>[0,c])];let d=Sl(o),u=d?Pl(o,d):null,h=o.shape==="pyramid"||d?.[0]==="hip",p=o.shape==="pyramid"||d?.[1]==="hip",f=o.shape==="pyramid"?(e.u1-e.u0)/2:h?u.d0:0,b=o.shape==="pyramid"?(e.u1-e.u0)/2:p?u.d1:0,g=h?e.u0+f-a:0,_=p?l-(e.u1-b):0,v=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));v.push(tr(`${o.id}:a`,o.id,"a",i(a,-s,n.y(-s)),i(l,-s,n.y(-s)),i(a,n.vr,n.rh),o.pitch_a,w=>[g*(w/x),c-_*(w/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+r-n.vr,n.rh-n.y(e.w+r));v.push(tr(`${o.id}:b`,o.id,"b",i(l,e.w+r,n.y(e.w+r)),i(a,e.w+r,n.y(e.w+r)),i(l,n.vr,n.rh),o.pitch_b,w=>[_*(w/x),c-g*(w/x)]))}if(h||p){let x=n.y(-s),w=n.y(e.w+r),E=[];h&&E.push([`${o.id}:c`,"c",i(a,e.w+r,w),i(a,-s,x),i(e.u0+f,n.vr,n.rh)]),p&&E.push([`${o.id}:d`,"d",i(l,-s,x),i(l,e.w+r,w),i(e.u1-b,n.vr,n.rh)]);for(let[k,M,F,L,C]of E){let S=G0(k,o.id,M,F,L,C);S&&v.push(S)}}return v}function G0(o,t,e,n,i,s){let r=Mo(Bn(i,n));if(r<.3)return null;let a=mn(Bn(i,n)),l=Bn(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Mo(d);if(u<.3)return null;let h=mn(d),p=mn(Pf(a,h));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let f=mn([-h[0],0,-h[2]]),b=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Kn;return{key:o,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:p,lu:r,ls:u,pitch:b,span:_=>{let v=Math.min(1,Math.max(0,_/u));return[c*v,r-(r-c)*v]},facing:[f[0],f[2]]}}function tr(o,t,e,n,i,s,r,a){let l=mn(Bn(i,n)),c=mn(Bn(s,n)),d=mn(Pf(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=mn([-c[0],0,-c[2]]);return{key:o,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:d,lu:Mo(Bn(i,n)),ls:Mo(Bn(s,n)),pitch:r,span:a,facing:[u[0],u[2]]}}function Ef(o,t,e,n,i,s,r){let a=i-e>=s-n,l=a?i-e:s-n,c=a?s-n:i-e;return{key:`${o}:top`,section:t,side:"top",flat:!0,o:[e,r,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Ei(o){let t=o.module_w||kf,e=o.module_h||Rl;return o.portrait===!1?[e,t]:[t,e]}function Un(o){return o.layout?.length?o.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function Ol(o,t){return o.flat?Math.min(45,Math.max(0,t.tilt??15))*Kn:o.wall?Math.min(90,Math.max(0,t.tilt??0))*Kn:0}function gn(o,t){let[e,n]=Ei(t),i=Un(t),s=Math.max(1,...i),a=(i.length-1)*Tl(o,t)+n*Math.cos(Ol(o,t));return[s*e+(s-1)*xe,a]}function Tl(o,t){let[,e]=Ei(t),n=Ol(o,t);return o.wall?e*Math.cos(n)+xe:o.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+xe}function Re(o,t,e=!1){let[n,i]=Ei(t),s=[],r=Ol(o,t),a=i*Math.cos(r),l=Tl(o,t),c=Un(t),d=Math.max(1,...c),u=new Set(t.skip??[]),h=!!o.wall&&n>o.lu+1e-6,p=(b,g,_)=>[o.o[0]+o.eu[0]*b+o.es[0]*g+o.n[0]*_,o.o[1]+o.eu[1]*b+o.es[1]*g+o.n[1]*_,o.o[2]+o.eu[2]*b+o.es[2]*g+o.n[2]*_],f=(b,g)=>{if(o.unbounded)return!0;if(g<-1e-6||g>o.ls+1e-6)return!1;let[_,v]=o.span(g);return b>=_-1e-6&&b<=v+1e-6};return c.forEach((b,g)=>{let _=t.align==="right"?d-b:t.align==="center"?(d-b)/2:0;for(let v=0;v<b;v++){let x=`${g}:${v}`,w=u.has(x);if(w&&!e)continue;let E=t.u+(v+_)*(n+xe),k=t.v+g*l,M=E+n,F=k+(o.flat||o.wall?a:i);if(h){if(!(f((E+M)/2,k)&&f((E+M)/2,F)))continue}else if(![[E,k],[M,k],[M,F],[E,F]].every(([I,z])=>f(I,z)))continue;if(o.wall&&r>.001){let I=jn+i*Math.sin(r),[z,D]=t.flip?[I,jn]:[jn,I],W=[p(E,k,z),p(M,k,z),p(M,F,D),p(E,F,D)],H=t.flip?k:F,j=[E+.05,M-.05].map(q=>[p(q,H,0),p(q,H,I)]);s.push({corners:W,posts:j,cell:x,skipped:w});continue}if(!o.flat){s.push({corners:[p(E,k,jn),p(M,k,jn),p(M,F,jn),p(E,F,jn)],posts:[],cell:x,skipped:w});continue}let L=.15,C=L+i*Math.sin(r),[S,T]=t.flip?[F,k]:[k,F],R=[p(E,S,L),p(M,S,L),p(M,T,C),p(E,T,C)];s.push({corners:R,posts:[E+.05,M-.05].flatMap(I=>[[p(I,S,0),p(I,S,L)],[p(I,T,0),p(I,T,C)]]),cell:x,skipped:w})}}),s}function So(o,t){let e=[o.eu[0],o.eu[2]],n=[o.es[0],o.es[2]],i=[t[0]-o.o[0],t[1]-o.o[2]],s=e[0]*n[1]-e[1]*n[0];if(Math.abs(s)<1e-9)return null;let r=(i[0]*n[1]-i[1]*n[0])/s,a=(e[0]*i[1]-e[1]*i[0])/s;if(a<0||a>o.ls)return null;let[l,c]=o.span(a);return r>=l&&r<=c?{u:r,s:a}:null}function Sf(o,t){let e=null;for(let n of o){if(n.wall){let r=[t[0]-n.o[0],t[1]-n.o[2]],a=r[0]*n.eu[0]+r[1]*n.eu[2],l=r[0]*n.n[0]+r[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=So(n,t);if(!i)continue;let s=n.o[1]+n.es[1]*i.s;(!e||s>e.y)&&(e={face:n,...i,y:s})}return e?{face:e.face,u:e.u,s:e.s}:null}function Ze(o,t){if(o.unbounded)return{u:t.u,v:t.v};let[e,n]=gn(o,t),i=r=>Math.floor(r*100+1e-6)/100;return{u:o.wall&&e>o.lu?Math.round((o.lu-e)/2*100)/100:i(Math.min(Math.max(0,t.u),Math.max(0,o.lu-e))),v:i(Math.min(Math.max(0,t.v),Math.max(0,o.ls-n)))}}function nr(o,t){let e={id:t,face:o.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:o.flat?15:null,flip:!1,entity:null,look:"black"},[n]=Ei(e),i=.4,s=Tl(o,e),[r,a]=o.span(o.ls/2);for(e.cols=Math.max(1,Math.floor((a-r-2*i+xe)/(n+xe))),e.rows=Math.max(1,Math.min(4,Math.floor((o.ls-2*i)/s)));e.cols>1&&Re(o,{...e,u:Il(o,e),v:i}).length<e.rows*e.cols;)e.cols--;return e.u=Il(o,e),e.v=i,e}function Ll(o,t){let e={...t,face:o.key,tilt:o.flat?t.tilt??15:null,rotation:null,flip:!1};return o.wall&&Object.assign(e,q0(o,e)),e.u=Il(o,e),e.v=.4,{...e,...Ze(o,e)}}function q0(o,t){let e=i=>Math.floor((o.lu+xe+1e-6)/(Ei({...t,portrait:i})[0]+xe)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...Un(t)),e(n!==!1))),layout:void 0,skip:void 0}}function Il(o,t){let[e]=Ei(t),n=t.cols*e+(t.cols-1)*xe;return Math.round((o.lu-n)/2*100)/100}function Cl(o,t){let e=(Math.atan2(o.facing[0],-o.facing[1])/Kn-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function Po(o,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Kn-t+720)%360,s=Math.cos((i-180)*Kn);return n.lu*n.ls*(1.2+s)};return[...o].sort((n,i)=>e(i)-e(n))[0]??null}function Bn(o,t){return[o[0]-t[0],o[1]-t[1],o[2]-t[2]]}function Mo(o){return Math.hypot(o[0],o[1],o[2])}function mn(o){let t=Mo(o)||1;return[o[0]/t,o[1]/t,o[2]/t]}function Pf(o,t){return[o[1]*t[2]-o[2]*t[1],o[2]*t[0]-o[0]*t[2],o[0]*t[1]-o[1]*t[0]]}var Ff=.78,Rf=1.18;function De(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||Ff,module_h:o.h||Rf}}function If(o,t){let e=Re(o,De(t))[0];if(!e)return null;let n=i=>[i[0]-o.n[0]*.05,i[1]-o.n[1]*.05,i[2]-o.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Hl(o,t){let e=Ff,n=Rf,[i,s]=o.span(o.ls/2);return{id:t,face:o.key,u:Math.round((i+s-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(o.ls-n,o.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Si(o,t,e){let n=er(o,t),[i,s]=gn(n,t),r=n.eu[0]*(t.u+i/2)+n.es[0]*(t.v+s/2),a=n.eu[2]*(t.u+i/2)+n.es[2]*(t.v+s/2),l=e*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],u=r*c[0]+a*c[1]-i/2,h=r*d[0]+a*d[1]-s/2,p=f=>Math.round(f*100)/100;return{u:p(u),v:p(h),rotation:(Math.round(e)%360+360)%360}}function Pi(o,t){let[e,n]=gn(o,t);return[o.o[0]+o.eu[0]*(t.u+e/2)+o.es[0]*(t.v+n/2),o.o[2]+o.eu[2]*(t.u+e/2)+o.es[2]*(t.v+n/2)]}function Dl(o,t,e){let n=e[0]*o.n[0]+e[1]*o.n[1]+e[2]*o.n[2];if(Math.abs(n)<1e-6)return null;let i=((o.o[0]-t[0])*o.n[0]+(o.o[1]-t[1])*o.n[1]+(o.o[2]-t[2])*o.n[2])/n;if(i<=0)return null;let s=[t[0]+e[0]*i-o.o[0],t[1]+e[1]*i-o.o[1],t[2]+e[2]*i-o.o[2]],r=s[0]*o.eu[0]+s[1]*o.eu[1]+s[2]*o.eu[2],a=s[0]*o.es[0]+s[1]*o.es[1]+s[2]*o.es[2];return{t:i,u:r,s:a}}function Af(o,t,e){if(o.unbounded)return!0;if(e<0||e>o.ls)return!1;let[n,i]=o.span(e);return t>=n&&t<=i}function zf(o,t,e,n){for(let i of Re(o,t)){let s=i.corners.map(d=>{let u=[d[0]-o.o[0],d[1]-o.o[1],d[2]-o.o[2]];return[u[0]*o.eu[0]+u[1]*o.eu[1]+u[2]*o.eu[2],u[0]*o.es[0]+u[1]*o.es[1]+u[2]*o.es[2]]}),[r,a]=[Math.min(...s.map(d=>d[0])),Math.max(...s.map(d=>d[0]))],[l,c]=[Math.min(...s.map(d=>d[1])),Math.max(...s.map(d=>d[1]))];if(e>=r-.05&&e<=a+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}function pt(o,t){if(!Pt(t))return qt(o,`furn_${t}`);let e=mt(t);return e?Ot(e,o?.language??navigator.language):qt(o,"pack_missing_item")}var ir=class{queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let i=e.getBoundingClientRect(),s=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},r=()=>{n.removeEventListener("pointermove",s),n.removeEventListener("pointerup",r),n.removeEventListener("pointercancel",r);try{localStorage.setItem("home3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("home3d.editor3d",this._split?"1":"0")}catch{}}onPlanChange3d(t){t.preventDefault(),this.change(e=>t.detail.change(e))}onFurnitureMoved3d(t){let{id:e,x:n,z:i}=t.detail,s=this._doc.settings.wall_interior,r=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],a=r.includes(e)&&r.length>1?r:[];if(a.length){let l=this.floor?.furniture.find(h=>h.id===e);if(!l||a.some(h=>this.isFixedItem("furniture",h)))return;let c=$(n-l.x),d=$(i-l.z),u=new Set(a);this.change((h,p)=>{for(let f of p.furniture)u.has(f.id)&&Object.assign(f,{x:$(f.x+c),z:$(f.z+d)})});return}this.change(l=>{for(let c of l.floors){let d=c.furniture.find(v=>v.id===e);if(!d)continue;let[u,h]=kl(c,d.x,d.z,n,i),[p,f]=Js(c,d,u,h,s),b=Wn(c,d,s),g=b?Math.hypot(b.x-d.x,b.z-d.z):1/0;Object.assign(d,{x:p,z:f});let _=Wn(c,d,s);_&&Math.hypot(_.x-p,_.z-f)<=g+.01&&Object.assign(d,_)}})}onDeviceMoved3d(t){let{id:e,x:n,z:i}=t.detail;this.change(s=>{for(let r of s.floors){let a=r.placements.find(d=>d.entity_id===e);if(!a)continue;let[l,c]=kl(r,a.x,a.z,n,i);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isEditor)return y;let t=this.furnitureItem,e=this.device;if(t){let n=ge(t),i=(s,r,a=.05)=>m`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${r}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${this.unit==="imperial"?Sn(t[s]):String(Math.round(t[s]*100)/100)}
          @change=${l=>{let c=this.readLen(l.target.value);c!==null&&c>=a&&this.updateFurniture({[s]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return m`<div class="fp3d-3d-bar">
        <span>${pt(this.hass,t.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?m`<label class="fp3d-3d-size" title=${Zt(this.t("mount_height"),this.unit)}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?Sn(t.mount_y??jt(this.floor,t)):String(Math.round((t.mount_y??jt(this.floor,t))*100)/100)}
                @change=${s=>{let r=this.readLen(s.target.value);r!==null&&r>=0&&this.updateFurniture({mount_y:Math.round(Math.min(Xe,r)*1e3)/1e3})}}
              />
            </label>`:y}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let n=nt(e.entity_id),i=n==="light",s=n?Ji(n,this.floor?.height??2.5,i?e.mount??"ceiling":null):1;return m`<div class="fp3d-3d-bar">
        <span>${et(this.hass,e.entity_id)}</span>
        ${i?m`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(r=>m`<option value=${r} ?selected=${r===(e.mount??"ceiling")}>${this.t(`lamp_${r}`)}</option>`)}
            </select>`:y}
        <label class="fp3d-3d-size" title=${Zt(this.t("marker_height"),this.unit)}
          >${this.t("size_short_h")}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${this.lenValue(e.y??s)}
            @change=${r=>{let a=this.readLen(r.target.value);a!==null&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((e.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((e.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",e.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",e.entity_id)}>${this.t("delete")}</button>
      </div>`}return y}grab3dStart(t){let e=this._doc,n=ut(e),i=null,s=(a,l,c,d,u=!1)=>{if(!c||u)return;let h=Dl(c,t.o,t.d);!h||!zf(c,d,h.u,h.s)||i&&i.t<=h.t||(i={id:a,win:l,t:h.t,du:h.u-d.u,ds:h.s-d.v})};if(this._tool==="energy")for(let a of e.settings.roof.solar??[])s(a.id,!1,Kt(e,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of e.settings.roof.windows??[])s(a.id,!0,n.find(l=>l.key===a.face)??null,De(a),!!a.locked);if(!i)return!1;let r=i;return this.grab3d={id:r.id,win:r.win,du:r.du,ds:r.ds,base:e,moved:!1},r.win?this._roofWinId=r.id:this.selectSolar(r.id),!0}grab3dMove(t){let e=this.grab3d;if(!e)return;let n=e.base,i=e.win?n.settings.roof.windows?.find(p=>p.id===e.id):void 0,s=e.win?i?De(i):void 0:n.settings.roof.solar?.find(p=>p.id===e.id);if(!s)return;let r=Kt(n,s),a=r?.unbounded?[r]:e.win?ut(n):[...ut(n),...oe(n)],l=null;for(let p of a){let f=Dl(p,t.o,t.d);f&&Af(p,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:p,...f})}if(!l)return;let c=l.face,d=.05,u=p=>$(Math.round(p/d)*d),h=Ze(c,{...s,face:c.key,u:u(l.u-e.du),v:u(l.s-e.ds),tilt:c.flat?s.tilt??15:s.tilt});e.moved=!0,this.change(p=>{if(e.win){let b=p.settings.roof.windows?.find(g=>g.id===e.id);b&&Object.assign(b,{face:c.key,...h});return}let f=p.settings.roof.solar?.find(b=>b.id===e.id);f&&Object.assign(f,{face:c.key,...h},c.flat&&f.tilt==null?{tilt:15}:{})},e.base,!1)}render3d(){return m`<div class="fp3d-editor-3d">
      ${this.houseTool?y:m`<div class="fp3d-seg fp3d-3d-walls">
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
        .furnishTypes=${this._tool==="energy"?ci:this._tool==="roof"?[]:null}
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
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("home3d.walls3d",t)}catch{}}};var Y0=8,Q0=[.1,.5,1],Lf=4;function Fi(o,t=Y0){return t/Math.max(1e-6,o)}var Of={mid:0,equal:1,end:2,corner:3};function Cf(o,t,e,n,i,s=Q0){let r=t/2,a=r-1e-6,l=e-r+1e-6,c=null,d=i,u=(h,p,f,b,g)=>{if(h<a||h>l)return;let _=Math.abs(h-o);_>d+1e-9||c&&Math.abs(_-d)<=1e-9&&Of[c.kind]<=Of[p]||(d=_,c={offset:h,kind:p,spans:f,tick:b,...g!==void 0?{value:g}:{}})};u(e/2,"mid",[],e/2),u(r,"end",[],0),u(e-r,"end",[],e);for(let h of s)u(h+r,"corner",[[0,h]],null,h),u(e-h-r,"corner",[[e-h,e]],null,h);if(n.length){let h=n.map(v=>[v.offset-v.width/2,v.offset+v.width/2]).sort((v,x)=>v[0]-x[0]),p=0;for(;p<h.length&&h[p][0]+h[p][1]<2*o;)p++;let f=p>0?h[p-1]:null,b=p<h.length?h[p]:null,g=f?f[1]:0,_=b?b[0]:e;if(f||b){let v=(_-g-t)/2,x=(g+_)/2;v>.01&&u(x,"equal",[[g,x-r],[x+r,_]],null,v)}if(f){let v=p>1?h[p-2][1]:0,x=f[0]-v,w=f[1]+x+r;x>.01&&w+r<=_+1e-6&&u(w,"equal",[[v,f[0]],[f[1],w-r]],null,x)}if(b){let v=p+1<h.length?h[p+1][0]:e,x=v-b[1],w=b[0]-x-r;x>.01&&w-r>=g-1e-6&&u(w,"equal",[[w+r,b[0]],[b[1],v]],null,x)}}return c}function Hf(o,t,e,n){let i=Math.hypot(t[0]-o[0],t[1]-o[1])||1,s=[(t[0]-o[0])/i,(t[1]-o[1])/i],r=[-s[1],s[0]],a=(c,d)=>[o[0]+s[0]*c+r[0]*d,o[1]+s[1]*c+r[1]*d],l=e.spans.map(([c,d])=>({a:a(c,n),b:a(d,n),kind:e.kind,axis:"wall",...e.value!==void 0?{value:e.value}:{}}));return e.tick!==null&&l.push({a:a(e.tick,-n*1.5),b:a(e.tick,n*1.5),kind:e.kind,axis:"wall"}),l}function Vl(o){let t=Bt(o),e=1/0,n=-1/0,i=1/0,s=-1/0;for(let[r,a]of t)r<e&&(e=r),r>n&&(n=r),a<i&&(i=a),a>s&&(s=a);return{x0:e,x1:n,z0:i,z1:s}}function Df(o){let t=Vl(o);return[(t.x1-t.x0)/2,(t.z1-t.z0)/2]}function Vf(o,t){let e=[],n=[];for(let i of o){let s=(i.x0+i.x1)/2,r=(i.z0+i.z1)/2;e.push({v:s,kind:"centre",from:i.z0,to:i.z1},{v:i.x0,kind:"edge",from:i.z0,to:i.z1},{v:i.x1,kind:"edge",from:i.z0,to:i.z1}),n.push({v:r,kind:"centre",from:i.x0,to:i.x1},{v:i.z0,kind:"edge",from:i.x0,to:i.x1},{v:i.z1,kind:"edge",from:i.x0,to:i.x1})}for(let i of t){if(i.points.length<3)continue;let s=1/0,r=-1/0,a=1/0,l=-1/0;for(let[c,d]of i.points)c<s&&(s=c),c>r&&(r=c),d<a&&(a=d),d>l&&(l=d);e.push({v:(s+r)/2,kind:"room",from:a,to:l}),n.push({v:(a+l)/2,kind:"room",from:s,to:r})}return{xs:e,zs:n}}function Tf(o,t,e,n,i,s,r=Lf){let a=null,l=0,c=s,d=2;for(let u=0;u<i.length;u++){let h=i[u];if(h.from-n>r||e-h.to>r)continue;let p=h.kind==="room"?0:1;if(p>d||p===0&&((e+n)/2<h.from||(e+n)/2>h.to))continue;let f,b;if(h.kind==="edge"){let g=Math.abs(o-t-h.v),_=Math.abs(o+t-h.v);f=g<=_?h.v+t:h.v-t,b=Math.min(g,_)}else f=h.v,b=Math.abs(o-h.v);b>s||p===d&&b>=c||(a=h,l=f,c=b,d=p)}return a?{v:l,line:a}:null}var J0=[];function or(o,t,e,n,i=Lf){let[s,r]=t,a=Tf(o[0],s,o[1]-r,o[1]+r,e.xs,n,i),l=Tf(o[1],r,o[0]-s,o[0]+s,e.zs,n,i);if(!a&&!l)return{p:o,x:!1,z:!1,guides:J0};let c=a?a.v:o[0],d=l?l.v:o[1],u=[];if(a){let h=a.line.kind==="edge"?a.line.v:c;u.push({a:[h,Math.min(a.line.from,d-r)],b:[h,Math.max(a.line.to,d+r)],kind:a.line.kind,axis:"x"})}if(l){let h=l.line.kind==="edge"?l.line.v:d;u.push({a:[Math.min(l.line.from,c-s),h],b:[Math.max(l.line.to,c+s),h],kind:l.line.kind,axis:"z"})}return{p:[c,d],x:!!a,z:!!l,guides:u}}var X0={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Gn(o){return X0[o]}var Z0={leak:new Set(["moisture"]),motion:new Set(["motion","occupancy","presence"])};function Wf(o,t,e,n){let i=e.live?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let s=Z0[n],r=u=>u.startsWith("binary_sensor.")&&s.has(String(o.states[u]?.attributes.device_class??"")),a=(u,h)=>e.points.length>=3&&U([u,h],e.points),l=t?.placements.filter(u=>r(u.entity_id))??[],c=l.filter(u=>a(u.x,u.z)).map(u=>u.entity_id),d=new Set(l.filter(u=>!a(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...ne(o,e.area_id).filter(u=>r(u)&&!d.has(u)),...c])]}function Wl(o){return o==="radiator"||/^pack:.*:(radiator|trv|(heated_|electric_)?towel_rail)(_[a-z0-9_]+)?$/.test(o)?"radiator":Zo(o)?"tank":null}var Nf=(o,t)=>!!t&&t!=="none"&&t.startsWith("sensor.")&&o.states[t]?.attributes.device_class==="temperature",ty=/(tank|cylinder|dhw|hot.?water|speicher|boiler)/i;function ey(o,t,e){let n=t&&t!=="none"?o.entities?.[t]?.device_id:null;if(!n||!o.entities)return null;let i=Object.values(o.entities).filter(s=>s.device_id===n&&Nf(o,s.entity_id)).map(s=>s.entity_id);return e==="tank"?i.find(s=>ty.test(`${s} ${o.states[s]?.attributes.friendly_name??""}`))??(i.length===1?i[0]:null):i.length===1?i[0]:null}function jf(o,t){let e=Wl(t.type);return!e||t.temp_sensor==="none"?null:t.temp_sensor?t.temp_sensor:Nf(o,t.extra)?t.extra:e==="tank"&&t.entity?.startsWith("water_heater.")?t.entity:ey(o,t.entity,e)}var bn=(o,t)=>qt(o,t);function Bf(o,t){if(!t||Qi(t))return bn(o,"state_unavailable");let e=t.attributes;switch(nt(t.entity_id)){case"light":return t.state!=="on"?bn(o,"state_off"):typeof e.brightness=="number"?`${Math.round(e.brightness/255*100)} %`:bn(o,"state_on");case"switch":case"fan":return bn(o,t.state==="on"?"state_on":"state_off");case"cover":return typeof e.current_position=="number"&&t.state!=="opening"&&t.state!=="closing"?`${e.current_position} %`:sr(o,t.state);case"climate":{let n=typeof e.current_temperature=="number"?`${Ht(o,e.current_temperature,1)} ${o?Ha(o):"\xB0C"}`:null;return t.state==="off"?n?`${n} \xB7 ${bn(o,"state_off")}`:bn(o,"state_off"):n??sr(o,t.state)}case"media":{let n=t.state==="playing"||t.state==="paused"||t.state==="on"||t.state==="idle",i=[e.app_name,e.media_title,e.source].find(s=>typeof s=="string"&&s);return n&&i?i:sr(o,t.state)}case"lock":case"camera":return sr(o,t.state);case"binary":return["door","window","opening","garage_door"].includes(e.device_class)?bn(o,t.state==="on"?"state_open":"state_closed"):bn(o,t.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(t.state),i=e.unit_of_measurement??"",s=o?.entities?.[t.entity_id]?.display_precision??1;return Number.isFinite(n)?`${Ht(o,n,s)}${i?` ${i}`:""}`:t.state}default:return""}}function sr(o,t){let e=`state_${t}`,n=qt(o,e);return n===e?t:n}function Kf(o,t){let e=`${t} ${String(o.states[t]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}var Uf=new Map;function Gf(o){Uf=new Map(o?.floors.flatMap(t=>t.placements.filter(e=>Array.isArray(e.detect_sensors)).map(e=>[e.entity_id,e.detect_sensors]))??[])}function qf(o,t){return Uf.get(t)??Nl(o,t)}function Nl(o,t){let e=o.entities?.[t]?.device_id;return e?Object.values(o.entities??{}).filter(n=>n.device_id===e&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}var iy="fp3d-announce",oy="position:fixed;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0;",Ri=globalThis.__fp3dAnnounce??={region:null,timer:null};function sy(o){let t=o.fullscreenElement??null;for(;t?.shadowRoot?.fullscreenElement;)t=t.shadowRoot.fullscreenElement;return t??o.body}function jl(o,t=typeof document>"u"?void 0:document){if(!t||!o)return;let e=sy(t);if(!e)return;let n=Ri.region;n||(n=t.createElement("div"),n.id=iy,n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),n.setAttribute("aria-atomic","true"),n.setAttribute("style",oy),Ri.region=n),n.parentNode!==e&&e.appendChild(n),n.textContent="",Ri.timer&&clearTimeout(Ri.timer),Ri.timer=setTimeout(()=>{Ri.timer=null,n.textContent=o},60)}var rr=class{setDoc(t,e=this._doc){e&&this.history.push(e,this.mergeKey,this.mergeWithin),this.history.track(t),this._doc=t,Gf(t),this.showHistory(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),s=i.floors.find(r=>r.id===this._floorId);!s&&this._floorId||(t(i,s),ka(i,e),this.setDoc(i,n?e:null))}changeFloor(t,e){let n=e.floors.findIndex(r=>r.id===this._floorId);if(n<0)return;let i=structuredClone(e.floors[n]);t(i);let s=e.floors.slice();s[n]=i,ka({...e,floors:[i]},e),this.setDoc({...e,floors:s},null)}undo(){let t=this.history.undo(this._doc);t&&(this.restore(t),jl(this.t("announce_undo")))}redo(){let t=this.history.redo(this._doc);t&&(this.restore(t),jl(this.t("announce_redo")))}showHistory(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this.showHistory(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:s}=this._view;return[(t-i)/n,(e-s)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(t=!1){let e=this.floor?.rooms.flatMap(l=>l.points)??[];if(t||this._tool==="outdoor"||this._tool==="pool")for(let l of this.floor?.outdoor??[])e.push(...l.points);if(t){for(let l of this.floor?.furniture??[]){let c=Math.max(l.w,l.d)/2;e.push([l.x-c,l.z-c],[l.x+c,l.z+c])}for(let l of this.floor?.placements??[])e.push([l.x,l.z])}if(this.fittedAll=t,this._tool==="roof")for(let l of this._doc.settings.roof.sections??[])e.push([l.x0,l.z0],[l.x1,l.z1]);let n=e.length?ft(e):{x0:0,z0:0,x1:10,z1:8},i=1.5,s=n.x1-n.x0+2*i,r=n.z1-n.z0+2*i,a=Math.max(8,Math.min(400,Math.min(this._size.w/s,this._size.h/r)));this._view={scale:a,ox:this._size.w/2-(n.x0+n.x1)/2*a,oy:this._size.h/2-(n.z0+n.z1)/2*a},this.fittedView=this._view}showPoint(t,e){let[n,i]=this.toScreen([t,e]),s=32;if(n>=s&&i>=s&&n<=this._size.w-s&&i<=this._size.h-s)return;let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-t*r,oy:this._size.h/2-e*r}}zoomAt(t,e,n){let{scale:i,ox:s,oy:r}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-s)*l,oy:n-(n-r)*l}}snap(t,e,n=!1){if(this._guides={},n)return t;let i=Vn/this._view.scale,s=this.floor?.rooms??[],r=[];for(let f of s)f.points.forEach((b,g)=>{e&&f.id===e.roomId&&(e.index===void 0||e.index===g)||r.push(b)});let a=null,l=i;for(let f of r){let b=Math.hypot(f[0]-t[0],f[1]-t[1]);b<l&&(l=b,a=f)}if(a)return this._guides={point:a},[a[0],a[1]];for(let f of s)if(!(e&&f.id===e.roomId))for(let b=0;b<f.points.length;b++){let g=f.points[b],_=f.points[(b+1)%f.points.length],v=_[0]-g[0],x=_[1]-g[1],w=v*v+x*x;if(w<1e-9)continue;let E=((t[0]-g[0])*v+(t[1]-g[1])*x)/w;if(E<=0||E>=1)continue;let k=[g[0]+E*v,g[1]+E*x],M=Math.hypot(k[0]-t[0],k[1]-t[1]),F=this._doc.settings.grid;Math.abs(x)<1e-9&&(k[0]=Math.min(Math.max(Math.round(k[0]/F)*F,Math.min(g[0],_[0])),Math.max(g[0],_[0]))),Math.abs(v)<1e-9&&(k[1]=Math.min(Math.max(Math.round(k[1]/F)*F,Math.min(g[1],_[1])),Math.max(g[1],_[1]))),M<l&&(l=M,a=k)}if(a)return this._guides={point:a},[$(a[0]),$(a[1])];let c=this._doc.settings.grid,d=[$(Math.round(t[0]/c)*c),$(Math.round(t[1]/c)*c)],u=i,h=i,p={};for(let f of r)Math.abs(f[0]-t[0])<u&&(u=Math.abs(f[0]-t[0]),d[0]=f[0],p.x=f[0]),Math.abs(f[1]-t[1])<h&&(h=Math.abs(f[1]-t[1]),d[1]=f[1],p.z=f[1]);return this._guides=p,d}pushHistory(t){this.history.push(t),this.showHistory()}restoreLive(t){this._doc=t,this.history.track(t),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}alignLinesFor(t,e){let n=[];for(let i of t.furniture)i.id!==e&&n.push(Vl(i));return Vf(n,t.rooms)}showGuides(t){if(!t.length){this._guides.lines&&(this._guides={});return}this._guides={lines:t.map(e=>({a:e.a,b:e.b,label:this.t(`snap_${e.kind}`,e.value!==void 0?{d:this.m(e.value)}:void 0)}))}}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,s=t>=20?1:5,[r,a]=this.toWorld(0,0),[l,c]=this.toWorld(e,n),d=[],u=(f,b)=>{for(let g=Math.ceil(r/f)*f;g<=l;g+=f){let _=this.toScreen([g,0])[0];d.push(A`<line class=${b} x1=${_} y1="0" x2=${_} y2=${n} />`)}for(let g=Math.ceil(a/f)*f;g<=c;g+=f){let _=this.toScreen([0,g])[1];d.push(A`<line class=${b} x1="0" y1=${_} x2=${e} y2=${_} />`)}};i<s&&u(i,"fp3d-grid-minor"),u(s,"fp3d-grid-major");let[h,p]=this.toScreen([0,0]);return d.push(A`<circle class="fp3d-origin" cx=${h} cy=${p} r="3" />`),A`<g pointer-events="none">${d}</g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return A`<g pointer-events="none">
      ${t.x!==void 0?A`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:y}
      ${t.z!==void 0?A`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:y}
      ${t.point?A`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:y}
      ${t.lines?this.renderSnapLines(t.lines):y}
    </g>`}renderSnapLines(t){return t.map((e,n)=>{let[i,s]=this.toScreen(e.a),[r,a]=this.toScreen(e.b),l=e.label&&(t.findIndex(c=>c.label===e.label)===n||e.label.startsWith("="));return A`<line class="fp3d-snapline" x1=${i} y1=${s} x2=${r} y2=${a} />${l?A`<text class="fp3d-snaplabel" x=${(i+r)/2+6} y=${(s+a)/2-6}>${e.label}</text>`:y}`})}};var Yf=["top6","side6","four"];function tn(o){return o==="pool_pump"?["suction","pressure"]:o==="pool_filter"?["pump","return","waste"]:o==="pool_heat_pump"?["in","out"]:[]}function qn(o){return o==="wall"||o==="floor"?["inside","outside"]:["in","out1","out2"]}function ct(o){let[t="",e="",n]=o.split(":");return{kind:t,id:e,port:n||null}}function we(o){let{kind:t,id:e}=ct(o);return t&&e?`${t}:${e}`:o}function ry(o,t){let{w:e,d:n,h:i}=o;if(o.type==="pool_pump")return t==="suction"?[e*.5,i*.55,0]:t==="pressure"?[e*.05,i*.9,0]:null;if(o.type==="pool_filter"){let s=Math.min(e,n)/2;if(o.variant==="side6"){let l=s+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let r=i*.89,a=s*.45+.04;return t==="pump"?[-a,r,0]:t==="return"?[a,r,0]:t==="waste"?[0,r,-a]:null}if(o.type==="pool_heat_pump"){let s=o.variant==="left"||o.variant==="back"?o.variant:"right";if(t!=="in"&&t!=="out")return null;let r=t==="in"?i*.25:i*.45;return s==="back"?[t==="in"?-e*.15:e*.15,r,-n/2-.04]:[(s==="left"?-1:1)*(e/2+.04),r,-n*.2]}return null}function Qf(o,t){let e=ry(o,t);if(!e)return null;let n=o.rotation*Math.PI/180,[i,s]=[Math.cos(n),Math.sin(n)];return{x:o.x+e[0]*i-e[2]*s,y:e[1],z:o.z+e[0]*s+e[2]*i}}function _n(o,t){if(t==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let e=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*e,y:o.y,z:o.z-(o.nz??0)*e}}}return{x:o.x,y:o.y,z:o.z}}function Jf(o){return o==="pressure"||o==="return"||o==="waste"||o==="out"?"source":o==="suction"||o==="pump"||o==="in"?"sink":null}function ar(o){return o==="skimmer"||o==="drain"?"source":"sink"}function Fo(o,t){let e=o[0]??t,n=1/0;for(let i=0;i<o.length;i++){let s=o[i],r=o[(i+1)%o.length],a=r[0]-s[0],l=r[1]-s[1],c=a*a+l*l,d=c>0?Math.max(0,Math.min(1,((t[0]-s[0])*a+(t[1]-s[1])*l)/c)):0,u=[s[0]+a*d,s[1]+l*d],h=Math.hypot(u[0]-t[0],u[1]-t[1]);h<n&&([e,n]=[u,h])}return e}function ht(o,t,e){let n=e.pool??{},i=_a(t,e);return s=>{let{kind:r,id:a,port:l}=ct(s);if(r==="port"){let c=n.ports?.find(u=>u.id===a);if(!c)return null;let d=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?Yd(t,e)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(r==="joint"){let c=n.joints?.find(d=>d.id===a);return c?_n(c,l):null}if(r!=="dev")return null;for(let c of o.floors){let d=c.furniture.find(f=>f.id===a);if(!d||!Tt.includes(d.type))continue;let u=l?Qf(d,l):null,h=c.elevation-t.elevation;if(u)return{...u,y:u.y+jt(c,d)+h};let p=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?ou:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:p+jt(c,d)+h}}return null}}function se(o,t){if(o.heights)return o;let e=o.height??gl,n=t(o.from),i=t(o.to),s=[...n?[[n.x,n.z]]:[],...o.points,...i?[[i.x,i.z]]:[]];return{...o,points:s,heights:s.map(()=>e)}}var Mt=o=>Math.round(o*1e3)/1e3;function Ro(o,t,e,n,i){let s=se(o,t),r=ie(s,t),a=$i(r,e);if(!a)return null;let l={id:n,x:Mt(a.p[0]),z:Mt(a.p[2]),y:Mt(a.p[1])},c=Io(s,t),d=Math.max(0,Math.min(s.points.length,a.seg+1-c)),u=s.heights??[],h=s.fittings??[],p={...s,to:`joint:${n}:in`,points:s.points.slice(0,d),heights:u.slice(0,d),fittings:h.filter(b=>b.at<=a.at)},f={...s,id:i,from:`joint:${n}:out1`,points:s.points.slice(d),heights:u.slice(d),fittings:h.filter(b=>b.at>a.at).map(b=>({...b,at:Mt(b.at-a.at)}))};return{joint:l,first:p,second:f}}function Io(o,t){return o.from&&t(o.from)?1:0}var ay=1.6;function Zf(o,t,e){let n=[],i=s=>{let r=bt(o,[s[0],s[2]]);return r.d>-.35&&r.d<ay&&r.s>-.3&&r.s<o.length+.3?r:null};for(let s of t){let r=se(s,e),a=ie(r,e);if(a.length<2)continue;let l={id:s.id,pieces:[],points:[],fittings:[],ends:[]};for(let u=1;u<a.length;u++){let h=i(a[u-1]),p=i(a[u]);h&&p&&l.pieces.push({k:u-1,s0:h.s,y0:a[u-1][1],d0:h.d,s1:p.s,y1:a[u][1],d1:p.d})}if(!l.pieces.length)continue;let c=Io(r,e);r.points.forEach((u,h)=>{let p=a[h+c],f=p&&i(p);f&&l.points.push({i:h,s:f.s,y:p[1]})});let d=bl(a);for(let u of s.fittings??[]){let h=Math.min(d,u.at),p=Jh(a,h)?.p,f=p&&i(p);p&&f&&l.fittings.push({id:u.id,kind:u.kind,open:u.open!==!1,s:f.s,y:p[1]})}for(let[u,h]of[["from",a[0]],["to",a[a.length-1]]]){let p=(u==="from"?!s.from:!s.to)?i(h):null;p&&l.ends.push({end:u,s:p.s,y:h[1]})}n.push(l)}return n}var tm=-.3;function Yn(o,t,e,n,i){let s=[],r=[],a=g=>t(g),l=[],c=o.from,d=[];for(let g of o.vias){if(g.kind!=="hole"){d.push(g.kind);continue}let _=e.find(k=>k.id===g.joint),v=a(c);if(!_||!v)continue;let x=a(`joint:${_.id}:inside`),w=a(`joint:${_.id}:outside`),E=g.dir?g.dir==="out":Math.hypot(v.x-x.x,v.z-x.z)<=Math.hypot(v.x-w.x,v.z-w.z);l.push({a:c,b:`joint:${_.id}:${E?"inside":"outside"}`,fits:d}),d=[],c=`joint:${_.id}:${E?"outside":"inside"}`}let u=o.to;if(u.length>1){let g=a(c),_=u.map(a).filter(v=>!!v);if(g&&_.length===u.length){let v=_.reduce((F,L)=>F+L.x,0)/_.length,x=_.reduce((F,L)=>F+L.z,0)/_.length,w=Math.hypot(g.x-v,g.z-x)||1,E=Math.min(1,w/2)/w,k=g.y<0||_.some(F=>F.y<0),M={id:i("joint"),kind:"tee",x:Mt(v+(g.x-v)*E),z:Mt(x+(g.z-x)*E),y:k?tm:Mt(g.y)};r.push(M),l.push({a:c,b:`joint:${M.id}:in`,fits:d}),d=[],u.forEach((F,L)=>l.push({a:`joint:${M.id}:out${L+1}`,b:F,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let h=g=>{let{kind:_,id:v,port:x}=ct(g),w=_==="joint"?r.find(E=>E.id===v):void 0;return w?_n(w,x):a(g)},p=g=>n(g)==="source",f=g=>n(g)==="sink",b=o.to.some(p)&&!p(o.from)||f(o.from)&&!o.to.some(f);for(let g of l){let _=h(g.a),v=h(g.b);if(!_||!v)continue;let x=ly(_,v,Xf(g.a,e),Xf(g.b,e)),w={id:i("pipe"),from:g.a,to:g.b,floor_id:o.floorId,points:x.map(k=>[k[0],k[2]]),heights:x.map(k=>k[1])},E=bl(ie(w,h));w.fittings=g.fits.map((k,M)=>({id:i("fit"),kind:k,at:Mt(Math.min(E/2,.4+M*.25)),...k==="valve"?{open:!0}:{}})),b&&(w={...w,from:w.to,to:w.from,points:[...w.points].reverse(),heights:[...w.heights??[]].reverse(),fittings:w.fittings?.map(k=>({...k,at:Mt(Math.max(0,E-k.at))}))}),s.push(w)}return{pipes:s,joints:r}}function Xf(o,t){let{kind:e,id:n,port:i}=ct(o),s=e==="joint"&&i==="outside"?t.find(r=>r.id===n):void 0;return s?.kind==="wall"?[-(s.nx??0),-(s.nz??0)]:null}function ly(o,t,e=null,n=null){let i=o.y<0||t.y<0?tm:Mt(Math.max(o.y,t.y)),s=[],[r,a]=[o.x,o.z];e&&([r,a]=[Mt(r+e[0]*.5),Mt(a+e[1]*.5)],s.push([r,Mt(o.y),a]));let[l,c]=[t.x,t.z],d=[];return n&&([l,c]=[Mt(l+n[0]*.5),Mt(c+n[1]*.5)],d.push([l,Mt(t.y),c])),s.push([Mt(r),i,Mt(a)]),Math.abs(l-r)>.01&&s.push([Mt(l),i,Mt(a)]),Math.abs(c-a)>.01&&s.push([Mt(l),i,Mt(c)]),s.push(...d),s.filter((u,h)=>h===0||Math.hypot(u[0]-s[h-1][0],u[1]-s[h-1][1],u[2]-s[h-1][2])>.001)}function em(o,t,e){let n=s=>{let{kind:r,id:a,port:l}=ct(s),c=r==="joint"&&(l==="inside"||l==="outside")?t.find(d=>d.id===a):void 0;return c&&(c.kind==="wall"||c.kind==="floor")?{id:a,port:l}:null},i=[];for(let s of o.filter(r=>r.from===e||r.to===e)){let r={start:e,other:"",pipes:[],holes:[],fittings:[]},a=s,l=e,c=new Set;for(;a&&!c.has(a.id);){c.add(a.id),r.pipes.push(a.id),r.fittings.push(...(a.fittings??[]).map(p=>p.kind));let d=a.from===l?a.to:a.from,u=d?n(d):null;if(!u){r.other=d;break}r.holes.push({joint:u.id,dir:u.port==="inside"?"out":"in"}),l=`joint:${u.id}:${u.port==="inside"?"outside":"inside"}`;let h=a;a=o.find(p=>p!==h&&(p.from===l||p.to===l)),a||(r.other=l)}i.push(r)}return i}var Ii=o=>o.static===!0;function cy(o){let t=0,e=0,n=0;for(let i=0,s=o.length-1;i<o.length;s=i++){let r=o[s][0]*o[i][1]-o[i][0]*o[s][1];t+=r,e+=(o[s][0]+o[i][0])*r,n+=(o[s][1]+o[i][1])*r}return Math.abs(t)<1e-9?{area:0,c:o[0]??[0,0]}:{area:Math.abs(t/2),c:[e/(3*t),n/(3*t)]}}function nm(o,t,e){if(!t)return{...o,static:!1};let n={...o,static:!0,pose:o.pose??"sit"};if(n.x==null||n.z==null){let s=(e?.rooms??[]).filter(l=>l.points.length>=3).map(l=>cy(l.points)).sort((l,c)=>c.area-l.area)[0],[r,a]=s?.c??[0,0];n.x=Math.round(r*100)/100,n.z=Math.round(a*100)/100}return n}function Ao(o,t){let e=o.floors.filter(n=>n.rooms.some(i=>i.points.length>=3));return e.find(n=>n.id===t.floor_id)??[...e].sort((n,i)=>Math.abs(n.elevation)-Math.abs(i.elevation))[0]}function im(o,t){return(o.settings.pets?.list??[]).filter(e=>Ii(e)&&e.x!=null&&e.z!=null&&Ao(o,e)?.id===t)}function om(o,t,e,n,i){let s=o.settings.pets?.list.find(a=>a.id===t);if(!s||!Ii(s))return;let r=a=>Math.round(Math.round(a/i)*i*1e3)/1e3;s.x=r(e),s.z=r(n)}var Jn=.001,Qn=o=>Math.round(o*1e3)/1e3,en=(o,t)=>Math.hypot(t[0]-o[0],t[1]-o[1]);function Kl(o){let{parts:t}=$t(o.rooms,{exterior:.24,interior:.12},o.walls??[]);return new Map([...t].map(([e,n])=>[e,[...new Set(n.map(Qn))]]))}function Bl(o,t,e){if(!Array.isArray(o))return o??null;let n=t?.length?t:[0],i=0;for(let s=0;s<n.length;s++)n[s]<=e+Jn&&(i=s);return o[i]??null}function rm(o,t,e,n,i){let s=Kl(o);for(let r of o.rooms){let a=e.get(r.id);if(!a)continue;let l=r.id===n;!l&&!a.some(c=>Array.isArray(c))||(r.wall_heights=r.points.map((c,d)=>{let h=(s.get(`${r.id}:${d}`)??[0]).map(p=>{let[f,b]=l?i(d,p):[d,p];return Bl(a[f],t.get(`${r.id}:${f}`),b)});return h.every(p=>p===h[0])?h[0]:h}))}}function am(o){let t=o.map(e=>e&&e.length?e:null);return t.some(e=>e)?t:void 0}function lm(o,t,e,n){let i=o.rooms.find(h=>h.id===t);if(!i)return;let s=i.points.length,r=i.points[e],a=i.points[(e+1)%s],l=en(r,n),c=en(r,a)||1,d=Kl(o),u=new Map(o.rooms.map(h=>[h.id,h.wall_heights?structuredClone(h.wall_heights):void 0]));if(i.points.splice(e+1,0,n),i.wall_thickness&&i.wall_thickness.splice(e+1,0,i.wall_thickness[e]??null),i.wall_slopes){let h=i.wall_slopes[e]??null,p=h?Qn(h[0]+(h[1]-h[0])*l/c):0;h&&(i.wall_slopes[e]=[h[0],p]),i.wall_slopes.splice(e+1,0,h?[p,h[1]]:null)}if(i.wall_splits){let h=i.wall_splits[e]??[],p=i.wall_splits.slice(0,s);for(;p.length<s;)p.push(null);p[e]=h.filter(f=>f<l-Jn),p.splice(e+1,0,h.filter(f=>f>l+Jn).map(f=>Qn(f-l))),i.wall_splits=am(p)}for(let h of o.openings)h.room_id!==t||h.wall||(h.edge>e?h.edge+=1:h.edge===e&&h.offset>l&&(h.edge=e+1,h.offset=Qn(h.offset-l)));rm(o,d,u,t,(h,p)=>h<=e?[h,p]:h===e+1?[e,p+l]:[h-1,p])}var sm=(o,t)=>JSON.stringify(o??null)===JSON.stringify(t??null);function cm(o,t,e){let n=o.rooms.find(b=>b.id===t);if(!n||n.points.length<=3)return null;let i=n.points.length,s=(e-1+i)%i,r=n.points,a=(e+1)%i,l=en(r[s],r[e]),c=l+en(r[e],r[a])-en(r[s],r[a])<.005;if(c)return{inLine:c,openings:[],fit:[],height:!1,thickness:!1};let d=b=>o.openings.filter(g=>g.room_id===t&&!g.wall&&g.edge===b).sort((g,_)=>g.offset-_.offset),u=[...d(s),...d(e)],h=en(r[s],r[a]),p=[],f=0;for(let b of u){let g=b.edge===e?b.offset+l:b.offset;g-b.width/2<f-Jn||g+b.width/2>h+Jn||(p.push(b),f=g+b.width/2)}return{inLine:c,openings:u,fit:p,height:!sm(n.wall_heights?.[s],n.wall_heights?.[e]),thickness:!sm(n.wall_thickness?.[s],n.wall_thickness?.[e])}}function dm(o,t,e,n=[]){let i=o.rooms.find(_=>_.id===t);if(!i||i.points.length<=3)return;let s=i.points.length,r=(e-1+s)%s,a=i.points,l=en(a[r],a[e]),c=en(a[e],a[(e+1)%s]),d=l+c-en(a[r],a[(e+1)%s])<.005,u=Kl(o),h=new Map(o.rooms.map(_=>[_.id,_.wall_heights?structuredClone(_.wall_heights):void 0])),p=h.get(t),f=d&&!!p&&Bl(p[r],u.get(`${t}:${r}`),l-Jn)!==Bl(p[e],u.get(`${t}:${e}`),0);if(i.wall_splits||f){let _=(i.wall_splits??[]).slice(0,s);for(;_.length<s;)_.push(null);let v=[..._[r]??[],...d?(_[e]??[]).map(x=>Qn(x+l)):[],...f?[Qn(l)]:[]];_[r]=[...new Set(v)].sort((x,w)=>x-w),_.splice(e,1),i.wall_splits=am(_)}i.points.splice(e,1);let b=i.points.length,g=(e-1+b)%b;i.wall_thickness&&i.wall_thickness.splice(e,1),i.wall_slopes&&(i.wall_slopes.splice(e,1),i.wall_slopes[g]=null,i.wall_slopes.every(_=>!_)&&(i.wall_slopes=void 0)),o.openings=o.openings.filter(_=>_.room_id!==t||_.wall||d||_.edge!==e&&_.edge!==r||n.includes(_.id)).map(_=>_.room_id!==t||_.wall?_:_.edge===e?{..._,edge:g,offset:Qn(_.offset+l)}:_.edge>e?{..._,edge:_.edge-1}:_),rm(o,u,h,t,(_,v)=>_===g?d&&v>=l-Jn?[e,v-l]:[r,Math.min(v,l)]:[_>=e?_+1:_,v])}var lr=class{onPointerDown(t){this._ctx=null,this._fixedHint=!1,this.fixedPan=!1;let e=!!this._placing;if(this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&!e&&(this._tool==="select"||this._tool==="furniture")){let n=this.localPoint(t),i=t.target;this.pressStart=n,this.pressTimer=window.setTimeout(()=>{let s=this.drag;s&&"moved"in s&&s.moved||(this.drag=null,this.openContext(i,n,"touch"))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="furnset"?n=["furniture",e.ids.find(i=>this.isFixedItem("furniture",i))??e.ids[0]]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&_l.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){t.button===2&&(this.rightPress={at:n,target:t.target,moved:!1}),this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),s=t.target;if(this._wallPick){this.pickWall(i);return}if(this._kerbPick){this.setKerb(i);return}if(this._bgLevel&&this.isEditor&&this.floor?.background){let k=[...this._bgLevel,i];k.length<2?this._bgLevel=k:this.applyBgLevel(k[0],k[1]);return}if(this.bgHandles()&&this.floor.background&&s.closest("[data-bg-rotate]")){let k=this.floor.background,M=this._images[k.image_id],F=k.width*(M?.aspect??1),L=[k.x+k.width/2,k.z+F/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-L[1],i[0]-L[0]),rot:k.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isEditor&&this.floor?.background){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(s.closest("[data-bg-handle]")||s.closest("[data-bg]"))){let k=this.floor.background;this.drag=s.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:k.x,bz:k.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isEditor&&this.floor?.background){let k=this.floor.background;if(s.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(s.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:k.x,bz:k.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let k=this.snap(i,void 0,t.altKey);this.drag={kind:"freewall",start:k,end:k};return}if(this._tool==="pool"&&this.poolDown(t,s,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let k=s.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),M=s.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),F=s.closest("[data-roof]")?.getAttribute("data-roof"),L=this._tool==="energy"?s.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(L){this._solarId=null,this.selectItem("furniture",L),this.drag=this.isEditor?{kind:"furniture",id:L,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&s.closest("[data-holo-pt]")){this.drag=this.isEditor?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let I=s.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),z=H=>!!this._doc.settings.roof.cables?.find(j=>j.id===H)?.locked;if(I&&this.isEditor&&!z(I.slice(0,I.lastIndexOf(":")))){let H=I.lastIndexOf(":"),j=I.slice(0,H),q=Number(I.slice(H+1));if(this.doubleTap(t,`cable:${I}`)){this.change(Y=>{let Q=Y.settings.roof.cables?.find(Z=>Z.id===j);Q&&Q.points.length>1&&Q.points.splice(q,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:j,index:q,base:this._doc,moved:!1};return}let D=s.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(D&&this.isEditor&&!z(D)){let H=Number(s.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),j=this._doc;this.change(q=>{let Y=q.settings.roof.cables?.find(Q=>Q.id===D);Y&&Y.points.splice(H,0,[$(i[0]),$(i[1])])}),this.drag={kind:"cablept",id:D,index:H,base:j,moved:!0};return}let W=s.closest("[data-cable]")?.getAttribute("data-cable");if(W){if(this._cableId=W,this.isEditor&&this._floorId&&!this._doc.settings.roof.cables?.some(H=>H.id===W)){let H=this._doc;this.layCable(W);let j=this._doc.settings.roof.cables?.find(Y=>Y.id===W),q=this.cableSegments().filter(Y=>Y.key===W);if(j&&q.length){let Y=[[q[0].a[0],q[0].a[2]],...j.points,[q[q.length-1].b[0],q[q.length-1].b[2]]],Q=0,Z=1/0;for(let B=0;B+1<Y.length;B++){let st=sf(i,Y[B],Y[B+1]);st<Z&&(Z=st,Q=B)}this.change(B=>{let st=B.settings.roof.cables?.find(At=>At.id===W);st&&st.points.splice(Q,0,[$(i[0]),$(i[1])])}),this.drag={kind:"cablept",id:W,index:Q,base:H,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let C=this._tool==="energy"?s.closest("[data-solar]")?.getAttribute("data-solar"):null,S=this._tool==="energy"?s.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(S&&this.isEditor){this.drag={kind:"solarturn",id:S,base:this._doc,moved:!1};return}if(C){let I=s.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&C===this._solarId&&I&&this.isEditor){this.toggleSolarCell(I),this.drag={kind:"pan",last:n};return}C!==this._solarId&&(this._solarPick=!1),this._solarId=C,this._roofId=null;let z=this._doc.settings.roof.solar?.find(j=>j.id===C),D=z?Kt(this._doc,z)??void 0:void 0,W=D?this.faceHit(D,i):null,H=z&&W?{du:W.u-z.u,ds:Number.isNaN(W.s)?0:W.s-z.v}:null;this.drag=this.isEditor&&!z?.locked?{kind:"solarmove",id:C,start:i,startScreen:n,base:this._doc,moved:!1,grab:H}:{kind:"pan",last:n};return}let T=this._tool==="roof"?s.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(T){this._roofWinId=T,this._roofId=null;let I=this._doc.settings.roof.windows?.find(H=>H.id===T),z=I?ut(this._doc).find(H=>H.key===I.face):void 0,D=z?So(z,i):null,W=I&&D?{du:D.u-I.u,ds:D.s-I.v}:null;this.drag=this.isEditor&&!I?.locked?{kind:"solarmove",id:T,start:i,startScreen:n,base:this._doc,moved:!1,grab:W,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let R=this._tool==="energy"?s.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(R){this._solarId=null,this.selectItem("furniture",R),this.drag=this.isEditor?{kind:"furniture",id:R,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(M&&this.isEditor){let[I,z]=M.split(":");this.drag={kind:"roofvertex",id:I,index:Number(z),base:this._doc,moved:!1}}else if(k&&this.isEditor){let[I,z,D]=k.split(":");this.drag={kind:"roofcorner",id:I,corner:[z==="1"?1:0,D==="1"?1:0],base:this._doc,moved:!1}}else if(F){let I=this.roofFixed(this._doc.settings.roof.sections?.find(z=>z.id===F));I&&this._roofId===F&&(this._fixedHint=!0),this._roofId=F,this.drag=this.isEditor&&!I?{kind:"roofmove",id:F,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isEditor){this._roofId=null;let I=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:I,end:I,roof:!0}}else this.drag={kind:"pan",last:n};return}let r=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||r)&&!this._outdoorFree||this._tool==="hole"){let k=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:k,end:k,outdoor:this._tool==="outdoor"||r,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||r)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this._openingNote=null;let k=s.closest("[data-opening]");k?this.pressOpening(k.getAttribute("data-opening"),n):this.placeOpening(this._openingPreset,n,this.snapOff(t))||(this.drag={kind:"pan",last:n});return}if(this._placing&&this.isEditor&&(this._tool==="select"||this._tool==="furniture")){this.placeArmed(this.placeTarget(i,this.snapOff(t)),t.ctrlKey||t.metaKey),this.drag=null;return}if(this.isEditor&&(this._tool==="select"||this._tool==="furniture")&&(t.shiftKey||this._multiMode)){let k=s.closest("[data-furniture]");k?(this.toggleMulti(k.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let a=s.closest("[data-pet]");if(a&&this.isEditor){this.drag={kind:"pet",id:a.getAttribute("data-pet"),start:i,startScreen:n,base:this._doc,moved:!1};return}let l=s.closest("[data-device]");if(l&&this.isEditor){this.drag={kind:"device",entityId:l.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let c=s.closest("[data-opening]");if(c&&!(s.getAttribute("class")==="fp3d-open-hit"&&this.firmItemAt(i,t.pointerType))){this.pressOpening(c.getAttribute("data-opening"),n);return}let d=s.closest("[data-resize]");if(d&&this.isEditor){let[k,M,F]=d.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:k,corner:[M==="1"?1:-1,F==="1"?1:-1],base:this._doc,moved:!1};return}let u=s.closest("[data-rotate]");if(u&&this.isEditor){this.drag={kind:"rotate",id:u.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let h=t.altKey?ud(this.itemHits(s,i,t.pointerType),this.selection(),this._furnitureId):null,p=h?h.grab??this.pickItem(s,i,t.pointerType):this.pickItem(s,i,t.pointerType);if(p){let k=p,M=Date.now(),F=this.lastFurnTap?.id===k&&M-this.lastFurnTap.t<400;this.lastFurnTap={id:k,t:M};let L=this.floor.furniture.find(S=>S.id===k);F&&L?.group?(this.selectItem("furniture",k),this._single=!0):(!this.selection().includes(k)||this._single)&&this.selectItem("furniture",k);let C=this.selection();this.drag=this.isEditor?C.length>1?{kind:"furnset",ids:C,start:i,startScreen:n,base:this._doc,moved:!1,pick:h?.next}:{kind:"furniture",id:k,start:i,startScreen:n,base:this._doc,moved:!1,pick:h?.next}:{kind:"pan",last:n};return}let f=s.closest("[data-vertex]"),b=s.closest("[data-mid]");if(f&&this.room&&this.isEditor){this._vertex=Number(f.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(b&&this.room&&this.isEditor){let k=Number(b.getAttribute("data-mid")),M=this.room.points,F=M[k],L=M[(k+1)%M.length],C=[$((F[0]+L[0])/2),$((F[1]+L[1])/2)],S=this._doc,T=this.room.id;this.change((R,I)=>{lm(I,T,k,C)},S,!1),this._vertex=k+1,this.drag={kind:"vertex",roomId:T,index:k+1,base:S,moved:!0};return}let g=s.closest("[data-wall-end]");if(g&&this.isEditor){let[k,M]=g.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:k,end:M,start:i,startScreen:n,base:this._doc,moved:!1};return}let _=s.closest("[data-free-wall]");if(_){let k=_.getAttribute("data-free-wall");this.selectItem("wall",k),this.drag=this.isEditor?{kind:"wallmove",id:k,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let v=s.closest("[data-out-box]");if(v&&this.isEditor){let[k,M]=v.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:k,corner:Number(M),base:this._doc,moved:!1};return}let x=s.closest("[data-out-vertex]");if(x&&this.isEditor){let[k,M]=x.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:k,index:Number(M),base:this._doc,moved:!1};return}let w=s.closest("[data-outdoor]");if(w&&!s.closest("[data-room]")&&!this.roomAt(i)){let k=this.outdoorAt(i)??w.getAttribute("data-outdoor");this.selectItem("outdoor",k),this.drag=this.isEditor?{kind:"outdoor",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let E=s.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(E){E!==this._roomId&&(this._vertex=null);let k=E===this._roomId&&!this._furnitureId&&!this._openingId&&!this._deviceId&&!this._outdoorId&&!this._wallId&&!this._multi.length;this.selectItem("room",E),this.drag=this.isEditor&&this._tool!=="furniture"&&k?{kind:"room",roomId:E,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){if(this.rightPress&&!this.rightPress.moved){let s=this.localPoint(t);Math.hypot(s[0]-this.rightPress.at[0],s[1]-this.rightPress.at[1])>5&&(this.rightPress.moved=!0)}if(this.pressStart){let s=this.localPoint(t);Math.hypot(s[0]-this.pressStart[0],s[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let s=this.pinchState();s&&(this.zoomAt(s.dist/Math.max(1,this.pinch.dist),...s.mid),this._view={...this._view,ox:this._view.ox+s.mid[0]-this.pinch.mid[0],oy:this._view.oy+s.mid[1]-this.pinch.mid[1]},this.pinch=s);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._placing&&(this._placeAt=this.placeTarget(n,this.snapOff(t))),this._tool!=="select"&&this._tool!=="furniture"&&this._tool!=="opening"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey)),this._tool==="opening"&&t.pointerType!=="touch"&&this.hoverOpening(t.target,e,this.snapOff(t));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let s=this.snap(n,void 0,t.altKey);t.shiftKey&&(s=Math.abs(s[0]-i.start[0])>Math.abs(s[1]-i.start[1])?[s[0],i.start[1]]:[i.start[0],s[1]]),i.end=s,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!s)return;let r;if(i.end){let a=this.snap(n,void 0,t.altKey);r=i.end==="a"?{a,b:s.b}:{a:s.a,b:a}}else{let a=t.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,c=Math.round((n[1]-i.start[1])/a)*a;r={a:[$(s.a[0]+l),$(s.a[1]+c)],b:[$(s.b[0]+l),$(s.b[1]+c)]}}this.changeFloor(a=>Object.assign((a.walls??[]).find(l=>l.id===i.id),r),i.base);break}case"vertex":{let s=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((r,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=s},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!s)return;let r=this.roomDelta(s,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>U([c.x,c.z],s.points)).map(c=>c.entity_id));this.change((c,d)=>{let u=d.rooms.find(h=>h.id===i.roomId);u.points=s.points.map(([h,p])=>[$(h+r[0]),$(p+r[1])]),d.placements=a.placements.map(h=>l.has(h.entity_id)?{...h,x:$(h.x+r[0]),z:$(h.z+r[1])}:h)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=t.altKey?.01:this._doc.settings.grid,r=$(Math.round((n[0]-i.start[0])/s)*s),a=$(Math.round((n[1]-i.start[1])/s)*s),l=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(u=>u.id===i.id);d&&(Object.assign(d,{x0:$(l.x0+r),x1:$(l.x1+r),z0:$(l.z0+a),z1:$(l.z1+a)}),l.pivot&&(d.pivot=[$(l.pivot[0]+r),$(l.pivot[1]+a)]),l.points&&(d.points=l.points.map(([u,h])=>[$(u+r),$(h+a)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let s=i.base.settings.roof.solar?.find(h=>h.id===i.id),r=s?Kt(i.base,s):null;if(!s||!r)return;let[a,l]=Pi(r,s),c=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,d=t.altKey?1:15;c=Math.round(c/d)*d;let u=Si(i.base,s,c);this.change(h=>{let p=h.settings.roof.solar?.find(f=>f.id===i.id);p&&Object.assign(p,u)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.win?i.base.settings.roof.windows?.find(g=>g.id===i.id):void 0,r=i.win?s?De(s):void 0:i.base.settings.roof.solar?.find(g=>g.id===i.id),a=i.win?ut(i.base):[...ut(i.base),...this._floorId?oe(i.base,this._floorId):[]],l=r?Kt(i.base,r,a):null;if(!r||!l)return;let c=t.altKey?.01:.05,d=g=>$(Math.round(g/c)*c),u=l.unbounded?null:Sf(a,n),h=l,p,f;if(u&&i.grab)h=u.face,p=d(u.u-i.grab.du),f=Number.isNaN(u.s)?u.face.key===r.face?r.v:Math.max(0,u.face.ls-1.5):d(u.s-i.grab.ds);else{let g=n[0]-i.start[0],_=n[1]-i.start[1],v=[l.es[0],l.es[2]],x=v[0]*v[0]+v[1]*v[1]||1;p=d(r.u+g*l.eu[0]+_*l.eu[2]),f=d(r.v+(g*v[0]+_*v[1])/x)}let b=Ze(h,{...r,face:h.key,u:p,v:f,tilt:h.flat?r.tilt??15:r.tilt});this.change(g=>{if(i.win){let v=g.settings.roof.windows?.find(x=>x.id===i.id);v&&Object.assign(v,{face:h.key,...b});return}let _=g.settings.roof.solar?.find(v=>v.id===i.id);_&&Object.assign(_,{face:h.key,...b},h.flat&&_.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let s=this.snap(n,void 0,t.altKey),r=i.base.floors.find(_=>_.id===this._floorId)?.outdoor.find(_=>_.id===i.id);if(!r?.pool_shape)return;let a=ft(r.points),c=[[a.x0,a.z0],[a.x1,a.z0],[a.x1,a.z1],[a.x0,a.z1]][(i.corner+2)%4],d=s[0]-c[0],u=s[1]-c[1];if(r.pool_shape==="round"){let _=Math.max(Math.abs(d),Math.abs(u),.5);d=Math.sign(d||1)*_,u=Math.sign(u||1)*_}else d=Math.sign(d||1)*Math.max(Math.abs(d),.5),u=Math.sign(u||1)*Math.max(Math.abs(u),.5);let h=Math.min(c[0],c[0]+d),p=Math.max(c[0],c[0]+d),f=Math.min(c[1],c[1]+u),b=Math.max(c[1],c[1]+u),g=r.pool_shape;this.change((_,v)=>{let x=v.outdoor.find(w=>w.id===i.id);x&&(x.points=li(g,$(h),$(f),$(p),$(b)))},i.base,!1);break}case"pipept":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change((r,a)=>{let l=a.outdoor.find(c=>c.id===i.pool)?.pool?.pipes?.find(c=>c.id===i.pipe);l&&(l.points[i.index]=[$(s[0]),$(s[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change((r,a)=>{let l=a.outdoor.find(h=>h.id===i.pool),c=l?.pool?.ports?.find(h=>h.id===i.id);if(!l||!c)return;let[d,u]=c.kind==="skimmer"||c.kind==="inlet"?Fo(l.points,s):s;c.x=$(d),c.z=$(u)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let s=i.base.floors.flatMap(a=>a.outdoor).find(a=>a.id===i.pool)?.pool?.joints?.find(a=>a.id===i.id);if(!s)break;let r=this.snap([s.x+n[0]-i.start[0],s.z+n[1]-i.start[1]],void 0,t.altKey);if(s.kind==="wall"){let a=[-(s.nz??0),s.nx??0],l=(r[0]-s.x)*a[0]+(r[1]-s.z)*a[1];r=[s.x+a[0]*l,s.z+a[1]*l]}this.change(a=>{let l=a.floors.flatMap(c=>c.outdoor).find(c=>c.id===i.pool)?.pool?.joints?.find(c=>c.id===i.id);l&&([l.x,l.z]=[$(r[0]),$(r[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let s=i.base.floors.flatMap(a=>a.furniture).find(a=>a.id===i.id);if(!s)break;let r=this.snap([s.x+n[0]-i.start[0],s.z+n[1]-i.start[1]],void 0,t.altKey);this.change(a=>{let l=a.floors.flatMap(c=>c.furniture).find(c=>c.id===i.id);l&&([l.x,l.z]=[$(r[0]),$(r[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let s=this.snap(n,void 0,t.altKey),r=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!r)return;let a=Be(r.points);this.change((l,c)=>{let d=c.outdoor.find(f=>f.id===i.id);if(!d)return;let u=r.points.map(f=>[...f]),h=i.index,p=r.points[h];u[h]=[$(s[0]),$(s[1])],a&&r.points.forEach((f,b)=>{b!==h&&(Math.abs(f[0]-p[0])<1e-6&&(u[b][0]=$(s[0])),Math.abs(f[1]-p[1])<1e-6&&(u[b][1]=$(s[1])))}),d.points=u},i.base,!1);break}case"cablept":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change(r=>{let a=r.settings.roof.cables?.find(l=>l.id===i.id);a&&a.points[i.index]&&(a.points[i.index]=[$(s[0]),$(s[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change(r=>r.settings.roof.hologram={...r.settings.roof.hologram??ji,place:"free",x:$(s[0]),z:$(s[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let s=n[0]-i.start[0],r=n[1]-i.start[1];this.change((a,l)=>{l.background&&(l.background.x=$(i.bx+s),l.background.z=$(i.bz+r))},i.base,!1);break}case"bgrotate":{i.moved=!0;let s=this.floor?.background,r=s?this._images[s.image_id]:void 0;if(!s||!r)break;let a=s.width*r.aspect,l=[s.x+s.width/2,s.z+a/2],c=Math.atan2(n[1]-l[1],n[0]-l[0]),d=i.rot+(c-i.start)*180/Math.PI;d=t.shiftKey?Math.round(d/15)*15:Math.round(d*10)/10,d=((d+180)%360+360)%360-180,this.change((u,h)=>{h.background&&(h.background.rotation=d)},i.base,!1);break}case"bgscale":{i.moved=!0;let s=this.floor?.background,r=s?this._images[s.image_id]:void 0;if(!s||!r)break;let[a]=this.bgLocal(s,n,r.aspect),l=Math.max(.5,$(a));this.change((c,d)=>{d.background&&(d.background.width=l)},i.base,!1);break}case"roofvertex":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change(r=>{let a=r.settings.roof.sections?.find(l=>l.id===i.id);!a?.points||i.index>=a.points.length||(a.points[i.index]=[$(s[0]),$(s[1])],Object.assign(a,$o(a.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let s=this.snap(n,void 0,t.altKey);this.change(r=>{let a=r.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=$(s[0]):a.x0=$(s[0]),i.corner[1]?a.z1=$(s[1]):a.z0=$(s[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId),r=s?.openings.find(c=>c.id===i.id),a=r&&s?ee(r,s.rooms,s.walls??[]):null;if(!r||!a)return;i.peers??=Gs(s,r);let l=this.snapOnEdge(a.room,a.edge,n,r.width,i.peers,this.snapOff(t));this.changeFloor(c=>Yt(c.openings.find(d=>d.id===i.id),{offset:l}),i.base);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(g=>g.id===this._floorId),r=s?.furniture.find(g=>g.id===i.id);if(!s||!r)return;let a=this.snapOff(t),l=a?.01:this._doc.settings.grid,c=r.x+n[0]-i.start[0],d=r.z+n[1]-i.start[1],u=a?null:or([c,d],Df(r),i.lines??=this.alignLinesFor(s,r.id),Fi(this._view.scale)),h=u?.x?$(u.p[0]):$(Math.round(c/l)*l),p=u?.z?$(u.p[1]):$(Math.round(d/l)*l),f=r.rotation,b=a?null:this.snapToWall({...r,x:h,z:p});b&&({x:h,z:p,rotation:f}=b),this.showGuides(u?.guides.length?u.guides.filter(g=>Math.abs(g.axis==="x"?h-u.p[0]:p-u.p[1])<.002):[]),this.changeFloor(g=>Yt(g.furniture.find(_=>_.id===i.id),{x:h,z:p,rotation:f}),i.base);break}case"furnset":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=t.altKey?.01:this._doc.settings.grid,r=$(Math.round((n[0]-i.start[0])/s)*s),a=$(Math.round((n[1]-i.start[1])/s)*s),l=new Set(i.ids);this.changeFloor(c=>{for(let d of c.furniture)l.has(d.id)&&Object.assign(d,{x:$(d.x+r),z:$(d.z+a)})},i.base);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!s)return;let r=t.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/r)*r,l=Math.round((n[1]-i.start[1])/r)*r;this.change((c,d)=>{let u=d.outdoor.find(h=>h.id===i.id);u.points=s.points.map(([h,p])=>[$(h+a),$(p+l)]),u.pool?.ports&&s.pool?.ports&&(u.pool.ports=s.pool.ports.map(h=>({...h,x:$(h.x+a),z:$(h.z+l)})))},i.base,!1);break}case"resize":{i.moved=!0;let s=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!s)return;let r=iu(s,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.changeFloor(a=>Yt(a.furniture.find(l=>l.id===i.id),r),i.base);break}case"rotate":{i.moved=!0;let s=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!s)return;let r=Math.atan2(-(n[0]-s.x),n[1]-s.z)*180/Math.PI,a=t.altKey?1:15;r=(Math.round(r/a)*a%360+360)%360,this.changeFloor(l=>Yt(l.furniture.find(c=>c.id===i.id),{rotation:r}),i.base);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!s)return;let r=t.altKey?.01:this._doc.settings.grid,a=$(Math.round((s.x+n[0]-i.start[0])/r)*r),l=$(Math.round((s.z+n[1]-i.start[1])/r)*r);this.changeFloor(c=>Yt(c.placements.find(d=>d.entity_id===i.entityId),{x:a,z:l}),i.base);break}case"pet":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let s=i.base.settings.pets?.list.find(l=>l.id===i.id);if(s?.x==null||s.z==null)return;let[r,a]=[s.x,s.z];this.change(l=>om(l,i.id,r+n[0]-i.start[0],a+n[1]-i.start[1],t.altKey?.01:this._doc.settings.grid),i.base,!1);break}}}onPointerUp(t){let e=this.rightPress;if(this.rightPress=null,e&&t.button===2&&(this.rightUp=performance.now(),!e.moved&&t.type!=="pointercancel"&&(this._tool==="select"||this._tool==="furniture")&&this.openContext(e.target,e.at)),clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,(n?.kind==="opening"||n?.kind==="furniture")&&(this._guides={}),!n||t.type==="pointercancel"){n&&_l.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let i=this.localPoint(t);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[s,r]=n.start,[a,l]=n.end;if(Math.abs(a-s)>=.2&&Math.abs(l-r)>=.2){let c=[Math.min(s,a),Math.min(r,l)],d=[Math.max(s,a),Math.max(r,l)],u=[c,[d[0],c[1]],d,[c[0],d[1]]];n.outdoor?this.addOutdoor(u):n.hole?this.addHole(c,d):n.roof?this.addRoofSection(c,d):this.addRoom(u)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...i),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...i),void 0,t.altKey),i);break;case"marquee":{let[s,r]=[Math.min(n.start[0],n.end[0]),Math.max(n.start[0],n.end[0])],[a,l]=[Math.min(n.start[1],n.end[1]),Math.max(n.start[1],n.end[1])],c=(this.floor?.furniture??[]).filter(d=>d.x>=s&&d.x<=r&&d.z>=a&&d.z<=l).map(d=>d.id);c.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(c)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":n.moved?this.pushHistory(n.base):(n.kind==="furniture"||n.kind==="furnset")&&n.pick?this.selectItem("furniture",n.pick):(n.kind==="poolport"||n.kind==="pooljoint")&&this.openCard(n.pool,`${n.kind==="poolport"?"port":"joint"}:${n.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"pooldev":{n.moved?this.pushHistory(n.base):this._doc.floors.flatMap(s=>s.furniture).find(s=>s.id===n.id)?.type==="pool_valve"?this.togglePoolValve(n.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${n.id}`);break}case"pet":n.moved&&this.pushHistory(n.base);break;case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),n.moved&&n.kind==="vertex"&&this.noteResize(n.roomId,n.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}roomDelta(t,e,n){if(n)return e;let i=this._doc.settings.grid,s=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=Vn/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let c of l.points)for(let d of t.points){let u=Math.hypot(d[0]+e[0]-c[0],d[1]+e[1]-c[1]);u<a&&(a=u,s=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return s}roomAt(t){return(this.floor?.rooms??[]).filter(i=>U(t,i.points)).sort((i,s)=>Ft(i.points)-Ft(s.points))[0]?.id??null}outdoorAt(t){return(this.floor?.outdoor??[]).filter(i=>i.points.length>=3&&U(t,i.points)).sort((i,s)=>Ft(i.points)-Ft(s.points))[0]?.id??null}onContextMenu(t){t.preventDefault(),!(this.rightPress||performance.now()-this.rightUp<600)&&(this._tool!=="select"&&this._tool!=="furniture"||(this.drag=null,this.openContext(t.target,this.localPoint(t))))}doubleTap(t,e){let n=performance.now(),i=t.detail>=2||this.lastTap?.key===e&&n-this.lastTap.at<450;return this.lastTap=i?null:{key:e,at:n},i}};function um(o){return o.typing?"release":o.menu?"close_menu":o.placing?"cancel_place":o.pipeDraft?"cancel_pipe":o.pipeMode?"end_pipe_mode":o.drawing?"clear_draft":o.item?"deselect_item":o.tool!=="select"?"select_tool":"deselect"}var cr=class{pickerOpen(){return[...this.renderRoot?.querySelectorAll?.("fp3d-entity-picker")??[]].some(e=>e.open)}escape(){if(this._kerbPick){this._kerbPick=!1;return}let t=um({typing:ms(fs(this.renderRoot)),menu:!!this._ctx,placing:!!this._placing,pipeDraft:!!this._pipeDraft,pipeMode:this._pipeMode,drawing:this._draft.length>0,item:!!(this._furnitureId||this._openingId||this._deviceId||this._outdoorId||this._wallId),tool:this._tool,room:!!this._roomId});t==="release"?Ra(this.renderRoot):t==="close_menu"?this._ctx=null:t==="cancel_place"?this.cancelPlacing():t==="cancel_pipe"?this._pipeDraft=null:t==="end_pipe_mode"?this._pipeMode=!1:(t==="clear_draft"?this._draft=[]:t==="deselect_item"?this.selectItem("room",this._roomId):t==="select_tool"?this._tool="select":this.selectItem("room",null),this._cursor=null)}keysFree(t){let e=t[0];return!e||e===this||typeof document<"u"&&(e===document.body||e===document.documentElement)?!0:typeof SVGElement<"u"&&e instanceof SVGElement}nudge(t,e){let n=["nudge",this._furnitureId?this.selection().join(","):"",this._deviceId,this._openingId,this._wallId,this._outdoorId,this._roomId,this._vertex].join("|");this.mergeKey=n;try{return this.nudgeBy(t,e)}finally{this.mergeKey=null}}nudgeBy(t,e){let n=this.floor;if(!n||!this.isEditor)return!1;let i=this.selectedFix,s=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||s.some(a=>this.isFixedItem("furniture",a)))return this._fixedHint=!0,!0;let r=a=>[$(a[0]+t),$(a[1]+e)];if(s.length>1){let a=new Set(s);return this.change((l,c)=>{for(let d of c.furniture)a.has(d.id)&&([d.x,d.z]=r([d.x,d.z]))}),!0}if(this._deviceId){let a=this._deviceId;if(!n.placements.some(l=>l.entity_id===a))return!1;this.change((l,c)=>{let d=c.placements.find(u=>u.entity_id===a);[d.x,d.z]=r([d.x,d.z])})}else if(this._furnitureId){let a=this._furnitureId;this.change((l,c)=>{let d=c.furniture.find(u=>u.id===a);d&&([d.x,d.z]=r([d.x,d.z]))})}else if(this._openingId){let a=this.opening,l=a?ee(a,n.rooms,n.walls??[]):null;if(!a||!l)return!1;let c=l.room.points[l.edge],d=l.room.points[(l.edge+1)%l.room.points.length],u=Math.hypot(d[0]-c[0],d[1]-c[1])||1,h=(t*(d[0]-c[0])+e*(d[1]-c[1]))/u;if(Math.abs(h)<1e-9)return!0;this.updateOpening({offset:this.clampOffset(l.room,l.edge,a.width,a.offset+h)})}else if(this._wallId){let a=this._wallId;this.change((l,c)=>{let d=(c.walls??[]).find(u=>u.id===a);d&&([d.a,d.b]=[r(d.a),r(d.b)])})}else if(this._outdoorId){let a=this._outdoorId;this.change((l,c)=>{let d=c.outdoor.find(u=>u.id===a);d&&(d.points=d.points.map(r))})}else if(this._roomId){let a=this._roomId,l=this._vertex,c=n.rooms.find(u=>u.id===a);if(!c)return!1;let d=new Set(n.placements.filter(u=>U([u.x,u.z],c.points)).map(u=>u.entity_id));this.change((u,h)=>{let p=h.rooms.find(f=>f.id===a);if(l!==null&&l<p.points.length){p.points[l]=r(p.points[l]);return}p.points=p.points.map(r);for(let f of h.placements)d.has(f.entity_id)&&([f.x,f.z]=r([f.x,f.z]))})}else return!1;return!0}};function Ul(o,t){let e=Lt(t)>0?1:-1,n=[...o];for(let i=0;i<t.length&&n.length;i++){let s=t[i],r=t[(i+1)%t.length],a=c=>e*((r[0]-s[0])*(c[1]-s[1])-(r[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let d=l[c],u=l[(c+1)%l.length],h=a(d),p=a(u);if(h>=0&&n.push(d),h>=0!=p>=0){let f=h/(h-p);n.push([d[0]+(u[0]-d[0])*f,d[1]+(u[1]-d[1])*f])}}}return n}var pm=o=>o.length>=3?Math.abs(Ft(o)):0;function dy(o,t){return o.exterior?0:o.roomLeft===t?o.left:o.roomRight===t?o.right:0}function hm(o,t,e){let n=pm(o.points);if(o.points.length<3)return n;let{walls:i}=$t(t.rooms,e,t.walls??[]),s=n,r=i.filter(a=>!a.free&&(a.roomLeft===o.id||a.roomRight===o.id));for(let a of i){let l=[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2];if((a.free?!U(l,o.points):!r.includes(a))||(s-=pm(Ul(o.points,a.footprint)),!a.free))continue;let c=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(c<.2)continue;let d=[(a.b[0]-a.a[0])/c,(a.b[1]-a.a[1])/c],u=null;for(let h of r){let p=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1]);if(p<.2)continue;let f=[(h.b[0]-h.a[0])/p,(h.b[1]-h.a[1])/p];if(Math.abs(d[0]*f[1]-d[1]*f[0])>.05)continue;let b=Math.abs((l[0]-h.a[0])*f[1]-(l[1]-h.a[1])*f[0]),g=(a.a[0]-h.a[0])*f[0]+(a.a[1]-h.a[1])*f[1],_=(a.b[0]-h.a[0])*f[0]+(a.b[1]-h.a[1])*f[1],v=Math.min(p,Math.max(g,_))-Math.max(0,Math.min(g,_)),x=b-(a.left+a.right)/2-dy(h,o.id);v>.1&&x>0&&b<1&&(!u||x<u.gap)&&(u={gap:x,overlap:v})}u&&(s-=u.gap*u.overlap)}return Math.max(0,s)}var mm=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],uy={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},py={back:0,right:90,front:180,left:270};function gm(o,t,e){let n=ft(o.points),i=n.x1-n.x0,s=n.z1-n.z0,r=uy[t],a=[],l=(d,u,h,p,f)=>{let[b,g,_]=f??ae[d];a.push({id:e(),type:d,x:fm(u),z:fm(h),rotation:p,w:b,d:g,h:_,variant:null,entity:null,power:null})},c=.02;for(let d of r.rows){let u=d.items.map(g=>({type:g.type,size:g.size??ae[g.type]})),h=d.wall==="back"||d.wall==="front"?i:s,p=[],f=0;for(let g of u){if(f+g.size[0]>h-.1)break;p.push(g),f+=g.size[0]}let b=d.align==="start"?.05:d.align==="end"?h-f-.05:(h-f)/2;for(let g of p){let[_,v]=g.size,x=b+_/2,w=v/2+c;d.wall==="back"?l(g.type,n.x0+x,n.z0+w,0,g.size):d.wall==="front"?l(g.type,n.x1-x,n.z1-w,180,g.size):d.wall==="right"?l(g.type,n.x1-w,n.z0+x,90,g.size):l(g.type,n.x0+w,n.z1-x,py.left,g.size),b+=_}}for(let d of r.free){let[u,h]=d.size??ae[d.type],p=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*d.at[0])),f=Math.min(n.z1-h/2-.05,Math.max(n.z0+h/2+.05,n.z0+s*d.at[1]));l(d.type,p,f,d.rotation,d.size)}return a}var fm=o=>Math.round(o*1e3)/1e3;var bm=o=>o.trim().toLocaleLowerCase();function _m(o,t,e,n){let i=o.trim();if(!i)return{name:n,area_id:null};let s=t.find(r=>bm(r.name)===bm(i)&&!e.has(r.area_id));return s?{name:s.name,area_id:s.area_id}:{name:i,area_id:null}}function ym(o,t,e){return o.filter(n=>!t.has(n.area_id)).sort((n,i)=>+(i.floor_id===e&&!!e)-+(n.floor_id===e&&!!e)||n.name.localeCompare(i.name)).map(n=>n.name)}function xm(o,t,e){let n=i=>U(i,t)&&!U(i,e);return{furniture:o.furniture.filter(i=>n([i.x,i.z])).map(i=>i.id),devices:o.placements.filter(i=>n([i.x,i.z])).map(i=>i.entity_id)}}var fe=1e-6,vm=o=>Math.round(o*1e3)/1e3;function wm(o,t,e){let n=o.rooms.find(u=>u.id===t);if(!n||!Be(n.points)||!Be(e))return null;let i=ft(n.points),s=ft(e),r=u=>u[0]>=i.x0-fe&&u[0]<=i.x1+fe&&u[1]>=i.z0-fe&&u[1]<=i.z1+fe,a=[{lo:i.x0,hi:i.x1,dlo:s.x0-i.x0,dhi:s.x1-i.x1,span:[i.z0,i.z1]},{lo:i.z0,hi:i.z1,dlo:s.z0-i.z0,dhi:s.z1-i.z1,span:[i.x0,i.x1]}],l=u=>a.map((h,p)=>vm(u[p]+(Math.abs(h.dlo-h.dhi)<fe||u[p]-h.lo<=h.hi-u[p]?h.dlo:h.dhi))),c={furniture:0,devices:0,walls:0};for(let u of o.furniture){if(u.locked||!r([u.x,u.z]))continue;let[h,p]=l([u.x,u.z]);h===u.x&&p===u.z||(Object.assign(u,{x:h,z:p}),c.furniture++)}for(let u of o.placements){if(u.locked||!r([u.x,u.z]))continue;let[h,p]=l([u.x,u.z]);h===u.x&&p===u.z||(Object.assign(u,{x:h,z:p}),c.devices++)}let d=u=>{for(let h=0;h<2;h++){let p=a[h];if(Math.abs(p.dlo-p.dhi)<fe)continue;let f=u[1-h];if(!(f<p.span[0]-fe||f>p.span[1]+fe))for(let[b,g]of[[p.lo,p.dlo],[p.hi,p.dhi]]){if(Math.abs(g)<fe||Math.abs(u[h]-b)>fe)continue;let _=[...u];return _[h]=vm(u[h]+g),_}}return null};for(let u of o.rooms){if(u.id===t)continue;let h=u.points.map(f=>[...f]),p=!1;u.points.forEach((f,b)=>{let g=u.points[(b+1)%u.points.length],[_,v]=[d(f),d(g)];!_||!v||Math.hypot(f[0]-g[0],f[1]-g[1])<fe||Math.abs(_[0]-f[0]-(v[0]-g[0]))>fe||Math.abs(_[1]-f[1]-(v[1]-g[1]))>fe||(h[b]=_,h[(b+1)%u.points.length]=v,p=!0)}),p&&(u.points=h,c.walls++)}for(let u of o.walls??[]){let h=d(u.a),p=d(u.b);h&&(u.a=h),p&&(u.b=p),(h||p)&&c.walls++}return n.points=e.map(u=>[...u]),c}var hy=["aliases","climate","live","start_view","panel","hidden","no_state","mods"],dr=class{addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[s,r]=this.toScreen(n[0]);if(Math.hypot(s-e[0],r-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(Ft(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=di(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;if(!(e>=.1&&n>=.1)){this._notice=this.t("rect_too_small",{min:this.m(.1)});return}this._notice=null;let i=this.floor,s=this.t("new_room",{n:(i?.rooms.length??0)+1}),r=_m(this._rectName,Object.values(this.hass?.areas??{}),this.usedAreas(),s);this.addRoom([t,di(t,e,"right"),di(di(t,e,"right"),n,"down"),di(t,n,"down")],r),this._draft=[],this._rectName=""}setRectStart(t,e){if(!Number.isFinite(e))return;let n=this._draft[0]??[0,0],i=$(e-n[t]),s=r=>t===0?[$(r[0]+i),r[1]]:[r[0],$(r[1]+i)];this._draft=this._draft.length?this._draft.map(s):[s(n)]}usedAreas(){return new Set(this._doc.floors.flatMap(t=>[...t.rooms.map(e=>e.area_id),...(t.outdoor??[]).map(e=>e.area_id??null)]))}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,s=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],r=a=>Ht(this.hass,a,2);return m`<section>
      <h3>${this.t("measure")}</h3>
      ${e?m`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${Zt(this.t("measure_length"),this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit==="imperial"?"text":"number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${a=>this._measureLen=this.readLen(a.target.value)??0}
                  @keydown=${a=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[a.key];l?(a.preventDefault(),this.measureStep(l)):a.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${s.map(([a,l])=>m`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?m`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((a,l)=>m`<li>${this.m(Math.hypot(a[0]-t[l][0],a[1]-t[l][1]))}</li>`)}
                </ol>`:y}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?m`<p class="fp3d-sub">${this.t("measure_gap",{gap:r(i)})}</p>`:y}`:m`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      ${this._notice?m`<p class="fp3d-sub fp3d-notice">${this._notice}</p>`:y}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input
            list="fp3d-room-names"
            .value=${this._rectName}
            placeholder=${this.t("new_room",{n:(this.floor?.rooms.length??0)+1})}
            @change=${a=>this._rectName=a.target.value}
            @keydown=${a=>{a.key==="Enter"&&(this._rectName=a.target.value,this.rectBySize())}}
          /><datalist id="fp3d-room-names">
            ${ym(Object.values(this.hass?.areas??{}),this.usedAreas(),this.floor?.ha_floor??null).map(a=>m`<option value=${a}></option>`)}
          </datalist></label
        >
        ${this.len(this.t("x"),e?.[0]??0,a=>this.setRectStart(0,a))} ${this.len(this.t("z"),e?.[1]??0,a=>this.setRectStart(1,a))}
        ${this.len(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:N("hole"),type:"stairwell",x:$((t[0]+e[0])/2),z:$((t[1]+e[1])/2),w:$(e[0]-t[0]),d:$(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((i,s)=>s.furniture.push(n)),this.selectItem("furniture",n.id)}addRoom(t,e){if(!this.floor)return;let n=N("room"),i=this.floor.rooms.length+1,{name:s,area_id:r}=e??{name:this.t("new_room",{n:i}),area_id:null};this.change((a,l)=>l.rooms.push({id:n,name:s,area_id:r,points:t.map(([c,d])=>[$(c),$(d)]),floor_material:"wood"})),this._roomId=n,this._vertex=null}async deleteRoom(){let t=this._roomId;!t||!this.isEditor||!await this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let i=n.rooms.find(s=>s.id===t);n.rooms=n.rooms.filter(s=>s.id!==t),n.openings=n.openings.filter(s=>s.room_id!==t||s.wall),i&&(n.placements=n.placements.filter(s=>!U([s.x,s.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isEditor)return;let e=N("room"),n={...structuredClone(t),id:e,name:this.t("home_copy_name",{name:t.name}),area_id:null,points:t.points.map(([i,s])=>[$(i+.5),$(s+.5)])};for(let i of hy)delete n[i];this.change((i,s)=>s.rooms.push(n)),this._roomId=e}async deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=this.floor?cm(this.floor,e.id,t):null,i=[];if(n&&(n.openings.length||n.height||n.thickness)){let r=e.points.length,a=[this.t("corner_joins",{a:(t-1+r)%r+1,b:t+1,c:(t+1)%r+1}),...n.openings.length?[this.t("corner_loses_openings",{n:n.openings.length})]:[],...n.height?[this.t("corner_loses_height")]:[],...n.thickness?[this.t("corner_loses_thickness")]:[]];if(!await this.ask(a.join(" "),this.t("delete_point"))||(n.fit.length&&await _i(this.t("corner_keep_openings",{k:n.fit.length,n:n.openings.length}),{ok:this.t("corner_keep"),cancel:this.t("corner_drop"),danger:!1})&&(i=n.fit.map(l=>l.id)),this.room?.id!==e.id||this.room.points.length!==r))return}let s=this._doc;this.change((r,a)=>dm(a,e.id,t,i)),this.noteResize(e.id,s),this._vertex=null}updateRoom(t){let e=this._roomId;this.change((n,i)=>Yt(i.rooms.find(s=>s.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(s=>s.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=ft(n.points),{x0:s,z0:r,x1:a,z1:l}=i;t==="x"&&([s,a]=[e,e+(a-s)]),t==="z"&&([r,l]=[e,e+(l-r)]),t==="w"&&e>.05&&(a=s+e),t==="d"&&e>.05&&(l=r+e);let c=[[$(s),$(r)],[$(a),$(r)],[$(a),$(l)],[$(s),$(l)]],d=this._doc,u=this._floorId,h=structuredClone(d),p=h.floors.find(b=>b.id===u)?.rooms.find(b=>b.id===n.id);p&&(p.points=c);let f=null;this.change((b,g)=>{f=wm(g,n.id,c),f||(g.rooms.find(_=>_.id===n.id).points=c)}),this.noteResize(n.id,d,f,h)}resizeNote(){let t=this._resize;return t&&t.doc===this._doc?t:null}noteResize(t,e,n=null,i=null){let s=this._resize?.doc===e?this._resize:null,r=this.floor,a=r?.rooms.find(c=>c.id===t),l=s?.roomId===t?s.before:e.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===t)?.points;this._resize=r&&a&&l?{roomId:t,before:l,doc:this._doc,base:e,carried:n,outline:i,stranded:xm(r,l,a.points)}:null}outlineOnly(){let t=this.resizeNote();t?.outline&&(this.setDoc(structuredClone(t.outline),null),this.noteResize(t.roomId,t.base))}selectStranded(){let t=this.resizeNote();if(!t)return;let e=t.stranded.furniture.filter(n=>this.floor?.furniture.some(i=>i.id===n));e.length?this.setMulti(e):t.stranded.devices.length&&this.selectItem("device",t.stranded.devices[0])}renderResizeNote(t){let e=this.resizeNote();if(!e||e.roomId!==t.id||!this.isEditor)return y;let n=e.carried,i=e.outline&&n?n.furniture+n.devices+n.walls:0,s=e.stranded.furniture.length+e.stranded.devices.length;return!i&&!s?y:m`<div class="fp3d-resize-note" role="status">
      ${i&&n?m`<p class="fp3d-sub">${this.t("resize_carried",{n:n.furniture+n.devices,w:n.walls})}</p>
            <div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("resize_outline_only_hint")} @click=${()=>this.outlineOnly()}>${this.t("resize_outline_only")}</button>
              <button class="fp3d-btn" @click=${()=>this.undo()}>${this.t("undo")}</button>
            </div>`:y}
      ${s?m`<p class="fp3d-sub">${s===1?this.t("resize_outside_one"):this.t("resize_outside",{n:s})}</p>
            <div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>this.selectStranded()}>${this.t("resize_select")}</button></div>`:y}
    </div>`}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let s=i.points.map(a=>[...a]);s[t][e]=$(n);let r=this._doc;this.updateRoom({points:s}),this.noteResize(i.id,r)}renderRooms(t){return A`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return A`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(Gt(e.points));return A`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(Ft(e.points))}</text>`})}</g>
    `}renderHandles(t){let e=t.points,n=e.length,i=e.map((r,a)=>{let l=e[(a+1)%n],[c,d]=this.toScreen(r),[u,h]=this.toScreen(l),p=Math.hypot(l[0]-r[0],l[1]-r[1]),f=(c+u)/2,b=(d+h)/2,[g,_]=this.toScreen(Gt(e)),v=-(h-d),x=u-c,w=Math.hypot(v,x)||1;v/=w,x/=w,v*(f-g)+x*(b-_)<0&&(v=-v,x=-x);let E=Math.hypot(u-c,h-d);return A`
        ${E>50?Math.abs(v)>Math.abs(x)?A`<text class="fp3d-dim" style="text-anchor:${v>0?"start":"end"}" x=${f+v*13} y=${b+x*13+4}>${this.m(p,2)}</text>`:A`<text class="fp3d-dim" x=${f+v*16} y=${b+x*16+4}>${this.m(p,2)}</text>`:y}
        ${E>36?A`<g data-mid=${a} class="fp3d-mid"><circle cx=${f} cy=${b} r="14" class="fp3d-hit" /><circle cx=${f} cy=${b} r="6" /><path d="M${f-3} ${b}h6M${f} ${b-3}v6" /></g>`:y}
      `}),s=e.map((r,a)=>{let[l,c]=this.toScreen(r);return A`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return A`<g>${i}${s}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="freewall"){let[i,s]=this.toScreen(t.start),[r,a]=this.toScreen(t.end),l=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return A`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${s} x2=${r} y2=${a} />
        <text class="fp3d-dim" x=${(i+r)/2} y=${(s+a)/2-10}>${this.m(l,2)}</text>
      </g>`}if(t?.kind==="rect"){let[i,s]=this.toScreen(t.start),[r,a]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),c=Math.abs(t.end[1]-t.start[1]);return A`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,r)} y=${Math.min(s,a)} width=${Math.abs(r-i)} height=${Math.abs(a-s)} />
        <text class="fp3d-dim" x=${(i+r)/2} y=${Math.min(s,a)-8}>${this.m(l,2)} × ${this.m(c,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return y;let e=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=e.map(i=>this.toScreen(i));return A`<g pointer-events="none">
      ${n.length>1?A`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:y}
      ${n.slice(1).map((i,s)=>{let r=n[s];return Math.hypot(i[0]-r[0],i[1]-r[1])<30?y:A`<text class="fp3d-dim" x=${(r[0]+i[0])/2} y=${(r[1]+i[1])/2-6}>${this.m(Math.hypot(e[s+1][0]-e[s][0],e[s+1][1]-e[s][1]),2)}</text>`})}
      ${this._draft.map((i,s)=>{let[r,a]=this.toScreen(i);return A`<circle class=${s===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${r} cy=${a} r=${s===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?A`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:y}
    </g>`}moveRoom(t,e){this.change((n,i)=>{let s=i.rooms.findIndex(l=>l.id===t),r=s+e;if(s<0||r<0||r>=i.rooms.length)return;let[a]=i.rooms.splice(s,1);i.rooms.splice(r,0,a)})}renderRoomList(t){return t.rooms.length?m`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map((e,n)=>m`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${()=>this.selectItem("room",e.id)}>
              <span>${e.name}</span><span class="fp3d-muted">${this.area(Ft(e.points))}</span>
            </button>
            ${this.isEditor&&t.rooms.length>1?m`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${n===0} @click=${()=>this.moveRoom(e.id,-1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${n===t.rooms.length-1} @click=${()=>this.moveRoom(e.id,1)}>↓</button>`:y}
          </div>`)}
      </div>
    </section>`:y}renderRoomForm(t,e){let n=this.isEditor,i=Be(t.points),s=ft(t.points);return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",t.id)}</div>
      ${this.renderResizeNote(t)}
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(t)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${r=>this.updateRoom({name:r.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${r=>this.updateRoom({aliases:ui(r.target.value)})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${r=>this.setArea(r.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(r=>m`<option value=${r.area_id} ?selected=${r.area_id===t.area_id}>${r.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${r=>this.updateRoom({floor_material:r.target.value})}>
            ${Jd.map(r=>m`<option value=${r} ?selected=${r===t.floor_material}>${this.t(`mat_${r}`)}</option>`)}
          </select></label
        >
        ${i?m`${this.len(this.t("x"),s.x0,r=>this.setRect("x",r))} ${this.len(this.t("z"),s.z0,r=>this.setRect("z",r))}
            ${this.len(this.t("width"),s.x1-s.x0,r=>this.setRect("w",r),.01,.05)}
            ${this.len(this.t("depth"),s.z1-s.z0,r=>this.setRect("d",r),.01,.05)}`:y}
      </div>
      ${this.renderEdgeHeights(t)}
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${Zt(this.t("room_ceiling"),this.unit)}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            step="0.05"
            min="1"
            placeholder=${this.floor?this.lenValue(this.floor.height):""}
            .value=${t.ceiling_height!=null?this.lenValue(t.ceiling_height):""}
            ?disabled=${!n}
            @change=${r=>{let a=r.target.value.trim(),l=a===""?null:this.readLen(a);this.updateRoom({ceiling_height:l===null||l<=0?null:Math.min(30,Math.max(1,l))})}}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${t.start_view?m`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:y}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(Ft(t.points)),n:this.area(hm(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{navigator.clipboard?.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderRoomClimate(t)} ${this.renderRoomLive(t)} ${this.renderRoomOpenings(t)}
      ${this.renderItemsList(this.floor?pi(this.floor.rooms,this.floor.furniture).get(t.id)??[]:[],!1)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((r,a)=>m`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.len(this.t("x"),r[0],l=>this.setPoint(a,0,l))} ${this.len(this.t("z"),r[1],l=>this.setPoint(a,1,l))}
            ${n?m`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>{this.deleteVertex(a)}}>
                  ×
                </button>`:y}
          </div>`)}
      </details>
      ${n?m`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" title=${Dt(this.t("duplicate"),["Ctrl+D"])} @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            ${this.renderPasteButton()}
            <button class="fp3d-btn fp3d-danger" title=${Dt(this.t("delete"),["Del"])} @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:y}
      ${this.renderModuleRoomFields(t)}
      ${this._spots?this.renderSpotForm(t):y}
      ${this._packages?m`<div class="fp3d-packages">
            ${mm.map(r=>m`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,r)}>
                <b>${this.t(`pkg_${r}`)}</b><span>${this.t(`pkg_${r}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:y}
    </section>`}applyPackage(t,e){if(!this.isEditor)return;let n=gm(t,e,()=>N("furniture"));this.change((i,s)=>s.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=ft(t.points),n=this.hass?ne(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isEditor)return;let[n,i,s]=ae[e.type],r=xa(t,e.rows,e.cols).map(([a,l])=>({id:N("furniture"),type:e.type,x:a,z:l,rotation:0,w:n,d:i,h:s,variant:null,entity:e.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...r)),this._spots=null,this._notice=this.t("spots_placed",{n:r.length})}renderSpotForm(t){let e=this._spots,n=xa(t,e.rows,e.cols).length,i=this.entityOptions(r=>/^(light|switch|input_boolean)\./.test(r)),s=r=>this._spots={...e,...r};return m`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${r=>s({type:r.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(r=>m`<option value=${r} ?selected=${r===e.type}>${this.t(`furn_${r}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),e.cols,r=>s({cols:Math.max(1,Math.min(12,Math.round(r)))}),1,1)}
      ${this.num(this.t("spots_rows"),e.rows,r=>s({rows:Math.max(1,Math.min(12,Math.round(r)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),e.entity,void 0,i,r=>s({entity:r==="none"?null:r}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(t)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}renderRoomLive(t){let e=this.hass;if(!e)return y;let n=(r,a)=>{let l={...t.live??{},[r]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({live:c?null:l})},i=!!t.live&&Object.values(t.live).some(r=>r!=null),s=(r,a)=>{let l=Wf(e,this.floor??null,{...t,live:null},r),c=r==="leak"?["moisture"]:["motion","occupancy","presence"],d=this.entityOptions(u=>u.startsWith("binary_sensor.")&&c.includes(String(e.states[u]?.attributes.device_class??"")),c.join(",")).map(u=>({...u,rank:_e(e,u.id)===t.area_id?0:1})).sort((u,h)=>u.rank-h.rank).map(({id:u,label:h})=>({id:u,label:h}));return this.entitySelect(a,t.live?.[r]??null,l[0]??null,d,u=>n(r,u))};return m`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("room_live")}</summary>
      <div class="fp3d-form">${s("leak",this.t("room_live_leak"))} ${s("motion",this.t("room_live_motion"))}</div>
      <p class="fp3d-sub">${this.t("room_live_hint")}</p>
    </details>`}renderRoomClimate(t){let e=this.hass;if(!e)return y;let n=(r,a)=>{let l={...t.climate??{},[r]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!t.climate&&Object.values(t.climate).some(r=>r!=null),s=(r,a)=>{let l=Ta[r],c=tp(e,this.floor??null,{...t,climate:null},r),d=Ca[r],u=this.entityOptions(h=>Rt(h)&&e.states[h]?.attributes.device_class===l||!!d&&h.startsWith("climate.")&&typeof e.states[h]?.attributes[d]=="number",l,d).map(h=>({...h,rank:(_e(e,h.id)===t.area_id?0:1)+(La(e,h.id)?0:2)})).sort((h,p)=>h.rank-p.rank).map(({id:h,label:p})=>({id:h,label:p}));return this.entitySelect(a,t.climate?.[r]??null,c[0]??null,u,h=>n(r,h))};return m`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${s("temperature",this.t("climate_temperature"))} ${s("humidity",this.t("climate_humidity"))} ${s("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}};function km(o){let t=o.points.length,e=0,n=0;for(let i=0;i<t;i++){let s=o.wall_heights?.[i]??null;(Array.isArray(s)?s.some(r=>r===0):s===0)&&e++,o.wall_slopes?.[i]&&n++}return{walls:t,open:e,sloping:n}}var ur=class{addFreeWall(t,e){if(!this.floor)return;let n={id:N("wall"),a:[$(t[0]),$(t[1])],b:[$(e[0]),$(e[1])],thickness:null};this.change((i,s)=>s.walls=[...s.walls??[],n]),this.selectItem("wall",n.id)}updateFreeWall(t){let e=this._wallId;e&&this.change((n,i)=>Object.assign((i.walls??[]).find(s=>s.id===e),t))}async deleteFreeWall(){let t=this._wallId;!t||!this.isEditor||!await this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return A`<g>${(t.walls??[]).map(e=>{let[n,i]=this.toScreen(e.a),[s,r]=this.toScreen(e.b),a=e.id===this._wallId;return A`<g data-free-wall=${e.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${s} y2=${r} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${s} y2=${r} />
      </g>
      ${a&&this.isEditor&&!ns(e,!0,this._doc.settings)?A`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${s} cy=${r} r="16" class="fp3d-hit" /><circle cx=${s} cy=${r} r="6" /></g>`:y}`})}</g>`}renderFreeWallForm(t){let e=this.isEditor,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),i=a=>{let c=Math.max(.1,a)/(n||1);this.updateFreeWall({b:[$(t.a[0]+(t.b[0]-t.a[0])*c),$(t.a[1]+(t.b[1]-t.a[1])*c)]})},s=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],r=(a,l)=>{let c=l-s[a],d=u=>a===0?[$(u[0]+c),u[1]]:[u[0],$(u[1]+c)];this.updateFreeWall({a:d(t.a),b:d(t.b)})};return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),s[0],a=>r(0,a))} ${this.len(this.t("z"),s[1],a=>r(1,a))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,a=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,a))}),.01,.02)}
        ${this.len(this.t("wall_height"),t.height??this.floor?.height??2.5,a=>this.updateFreeWall({height:a>=(this.floor?.height??2.5)-.005?null:Math.max(.05,a)}),.05,.05)}
      </div>
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:y}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}renderWalls(t){let e=this.floor?.height??2.5;return A`<g pointer-events="none">${t.map(n=>{let i=n.height!==void 0&&n.height<e-.01,s=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return A`<polygon class=${s} points=${n.footprint.map(r=>this.toScreen(r).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let i=$t(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).parts.get(`${t.id}:${e}`)??[];return i.length?[...new Set(i)].sort((s,r)=>s-r):[0]}setEdgeSlope(t,e,n){this.isEditor&&this.change((i,s)=>{let r=s.rooms.find(l=>l.id===t.id);if(!r)return;let a=(r.wall_slopes??[]).slice(0,r.points.length);for(;a.length<r.points.length;)a.push(null);a[e]=n?[Math.round(Math.max(.05,n[0])*1e3)/1e3,Math.round(Math.max(.05,n[1])*1e3)/1e3]:null,r.wall_slopes=a.every(l=>!l)?void 0:a})}setEdgeHeight(t,e,n,i){let s=this.floor;if(!s||!this.isEditor)return;if(i!==void 0){let l=this.edgeParts(t,e).length;this.change((c,d)=>{let u=d.rooms.find(b=>b.id===t.id);if(!u)return;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);let p=h[e],f=Array.isArray(p)?[...p]:new Array(l).fill(typeof p=="number"?p:null);for(;f.length<l;)f.push(null);f[i]=n,h[e]=f.every(b=>b===f[0])?f[0]:f,u.wall_heights=h.every(b=>b===null)?void 0:h});return}let a=$t(s.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},s.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===t.id&&c.edge===e)).flatMap(l=>l.sources);a.some(l=>l.room_id===t.id&&l.edge===e)||a.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,c)=>{for(let d of a){let u=c.rooms.find(p=>p.id===d.room_id);if(!u)continue;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);h[d.edge]=n,u.wall_heights=h.every(p=>p===null)?void 0:h}})}splitEdge(t,e,n){if(!this.isEditor)return;let i=t.points,s=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),r=this.edgeParts(t,e),a=n===void 0?0:r[n],l=n===void 0?s:r[n+1]??s;if(l-a<.4)return;let c=Math.round((a+l)/2*100)/100;this.change((d,u)=>{let h=u.rooms.find(b=>b.id===t.id);if(!h)return;let p=(h.wall_splits??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);p[e]=[...p[e]??[],c].sort((b,g)=>b-g),h.wall_splits=p;let f=h.wall_heights?.[e];if(Array.isArray(f)){let b=n??0;f.splice(b+1,0,f[b]??null)}})}moveSplit(t,e,n,i){let s=t.points,r=Math.hypot(s[(e+1)%s.length][0]-s[e][0],s[(e+1)%s.length][1]-s[e][1]),a=this.edgeParts(t,e).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(r-.1,Math.round(i*100)/100));a.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{let h=d.rooms.find(f=>f.id===t.id)?.wall_splits?.[e];if(!h)return;let p=h.findIndex(f=>Math.abs(f-n)<.001);p>=0&&(h[p]=l),h.sort((f,b)=>f-b)})}joinSplit(t,e,n,i){this.change((s,r)=>{let a=r.rooms.find(d=>d.id===t.id);if(!a?.wall_splits?.[e])return;let l=a.wall_splits[e].filter(d=>Math.abs(d-n)>.001);a.wall_splits[e]=l.length?l:null,a.wall_splits.every(d=>!d)&&(a.wall_splits=void 0);let c=a.wall_heights?.[e];Array.isArray(c)&&(c.splice(i,1),c.every(d=>d===c[0])&&(a.wall_heights[e]=c[0]??null))})}renderSplitMarks(t){let e=t.points;return A`${(t.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=e.length)return[];let s=e[i],r=e[(i+1)%e.length],a=Math.hypot(r[0]-s[0],r[1]-s[1])||1,l=(r[0]-s[0])/a,c=(r[1]-s[1])/a;return n.map(d=>{let[u,h]=this.toScreen([s[0]+l*d,s[1]+c*d]);return A`<line class="fp3d-split-mark" x1=${u-c*7} y1=${h+l*7} x2=${u+c*7} y2=${h-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,i=this._doc.settings,s=new Set;for(let c of $t(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(c.exterior)for(let d of c.sources)d.room_id===t.id&&s.add(d.edge);let r=(c,d)=>this.change((u,h)=>{let p=h.rooms.find(b=>b.id===t.id);if(!p)return;let f=(p.wall_thickness??[]).slice(0,p.points.length);for(;f.length<p.points.length;)f.push(null);f[c]=d,p.wall_thickness=f.every(b=>b===null)?void 0:f}),a=km(t),l=[a.open?this.t("walls_open_n",{n:a.open}):"",a.sloping?this.t("walls_sloping_n",{n:a.sloping}):""].filter(Boolean).join(", ");return m`<details class="fp3d-edge-box" ?open=${this._wallsOpen} @toggle=${c=>this.setWallsOpen(c.target.open)}>
      <summary>
        <h4>${this.t("walls_section",{n:a.walls})}</h4>
        ${l?m`<span class="fp3d-sub">${l}</span>`:y}
      </summary>
      ${t.points.flatMap((c,d)=>{let u=t.points[(d+1)%n],h=Math.hypot(u[0]-c[0],u[1]-c[1]),p=t.wall_heights?.[d]??null,f=t.wall_slopes?.[d]??null,b=()=>this._edgeHi=d,g=()=>this._edgeHi=null,_=this.edgeParts(t,d);return(_.length>1?_.map((x,w)=>w):[void 0]).map(x=>{let w=x===void 0?Array.isArray(p)?p[0]??null:p:Array.isArray(p)?p[x]??null:p,E=x===void 0?h:(_[x+1]??h)-_[x],k=M=>this.setEdgeHeight(t,d,M,x);return m`<div
            class="fp3d-edge-height${d===this._edgeHi?" fp3d-edge-on":""}${w!==null?" fp3d-edge-low":""}"
            @mouseenter=${b}
            @mouseleave=${g}
            @focusin=${b}
            @focusout=${g}
          >
            <span
              ><b>${this.t("wall_n",{a:d+1,b:(d+1)%n+1})}${x===void 0?"":` \xB7 ${this.t("wall_part",{n:x+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(E,2)}</span
              ></span
            >
            ${w===0?m`<span class="fp3d-muted">${this.t("wall_none")}</span>`:f&&x===void 0?m`${this.len(this.t("wall_slope_start",{n:d+1}),f[0],M=>this.setEdgeSlope(t,d,[M,f[1]]),.05,.05)}
                  ${this.len(this.t("wall_slope_end",{n:(d+1)%n+1}),f[1],M=>this.setEdgeSlope(t,d,[f[0],M]),.05,.05)}`:this.len(this.t("wall_height"),w??e,M=>k(M>=e-.005?null:Math.max(.05,M)),.05,.05)}
            ${this.isEditor&&x===void 0&&w!==0?m`<button class="fp3d-btn" aria-pressed=${!!f} title=${this.t("wall_slope_hint")} @click=${()=>this.setEdgeSlope(t,d,f?null:[w??e,w??e])}>◢ ${this.t("wall_slope")}</button>`:y}
            ${this.isEditor&&w!==null?m`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>k(null)}>↥</button>`:y}
            ${this.isEditor&&w!==0?m`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>k(0)}>${this.t("wall_none")}</button>`:y}
            ${this.isEditor&&E>=.4?m`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,d,x)}>✂</button>`:y}
            ${(x===void 0||x===0)&&w!==0?m`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,d)}>▦</button>`:y}
            ${(x===void 0||x===0)&&w!==0?m`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),t.wall_thickness?.[d]??(s.has(d)?i.wall_exterior:i.wall_interior),M=>{let F=s.has(d)?i.wall_exterior:i.wall_interior,L=Math.min(1.5,Math.max(.02,Math.round(M*1e3)/1e3));r(d,Math.abs(L-F)<5e-4?null:L)},.01,.02)}
                  ${this.isEditor&&t.wall_thickness?.[d]!=null?m`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>r(d,null)}>↺</button>`:y}</span
                >`:y}
            ${x!==void 0&&x>0&&(t.wall_splits?.[d]??[]).some(M=>Math.abs(M-_[x])<.001)?m`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),_[x],M=>this.moveSplit(t,d,_[x],M),.05,.1)}
                  ${this.isEditor?m`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,d,_[x],x)}>⨉</button>`:y}</span
                >`:y}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </details>`}setWallsOpen(t){if(this._wallsOpen!==t){this._wallsOpen=t;try{localStorage.setItem("home3d.wallsOpen",t?"1":"0")}catch{}}}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return y;let[n,i]=this.toScreen(t.points[e]),[s,r]=this.toScreen(t.points[(e+1)%t.points.length]);return A`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${s} y2=${r} />`}};var pr=class{addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:N("outdoor"),type:e,points:t.map(([s,r])=>[$(s),$(r)])},i=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let s=ft(n.points);n.points=li(i,s.x0,s.z0,s.x1,s.z1),n.pool_shape=i}e==="pool"&&this.pipeRules&&(n.pool={}),this.change((s,r)=>r.outdoor.push(n)),this.selectItem("outdoor",n.id)}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>Yt(i.outdoor.find(s=>s.id===e),t))}async deleteOutdoor(){let t=this._outdoorId;if(!t||!this.isEditor||!await this.confirmFixedDelete("outdoor",t))return;let e=this.floor?.outdoor.find(i=>i.id===t),n=e?.pool?.pipes?.length??0;e?.type==="pool"&&n&&!await this.ask(this.t("pool_delete_confirm",{n}))||(this.change((i,s)=>s.outdoor=s.outdoor.filter(r=>r.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isEditor)return;let e={...t,id:N("outdoor"),area_id:null,points:t.points.map(([n,i])=>[$(n+.5),$(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}setKerb(t){this._kerbPick=!1,this.isEditor&&this.updateFurniture({bin_kerb:{x:Math.round(t[0]*100)/100,z:Math.round(t[1]*100)/100}})}renderKerb(t){let e=this._furnitureId?t.furniture.find(l=>l.id===this._furnitureId):void 0,n=e?.type==="waste_bin"?e.bin_kerb:null;if(!e||!n)return y;let[i,s]=this.toScreen([e.x,e.z]),[r,a]=this.toScreen([n.x,n.z]);return A`<g pointer-events="none" class="fp3d-kerb">
      <line x1=${i} y1=${s} x2=${r} y2=${a} />
      <circle cx=${r} cy=${a} r="8" />
    </g>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isEditor||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return y;if(e.pool_shape){let n=ft(e.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return A`${i.map((s,r)=>{let[a,l]=this.toScreen(s);return A`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${r}`}><circle cx=${a} cy=${l} r="16" class="fp3d-hit" /><rect x=${a-5} y=${l-5} width="10" height="10" /></g>`})}`}return A`${e.points.map((n,i)=>{let[s,r]=this.toScreen(n);return A`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${i}`}><circle cx=${s} cy=${r} r="16" class="fp3d-hit" /><circle cx=${s} cy=${r} r="6" /></g>`})}`}renderOutdoor(t){return A`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,s]=this.toScreen(Gt(e.points)),r=ft(e.points),a=Math.min(r.x1-r.x0,r.z1-r.z0)*this._view.scale>40;return A`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?A`<text x=${i} y=${s+4}>${this.t(`out_${e.type}`)}</text>`:y}
      </g>`})}</g>`}renderOutdoorZone(t){let e=this.isEditor,n=Object.values(this.hass?.areas??{}).sort((i,s)=>i.name.localeCompare(s.name));return m`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!e}
          @change=${i=>{let s=i.target.value||null,r=(t.name??"").trim()||(s?this.hass?.areas?.[s]?.name??null:null);this.updateOutdoor({area_id:s,name:s?r:t.name??null})}}
        >
          <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
          ${n.map(i=>m`<option value=${i.area_id} ?selected=${i.area_id===t.area_id}>${i.name}</option>`)}
        </select></label
      >
      ${t.area_id?m`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${t.name??""} ?disabled=${!e} @change=${i=>this.updateOutdoor({name:i.target.value.trim()||null})}
          /></label>`:y}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${t.area_id?this.renderOutdoorDevices(t):y}`}renderOutdoorDevices(t){let e=this.hass,n=this.floor,i=n?os(n).find(p=>p.id===t.id):void 0;if(!e||!n||!i)return y;let s=i.area_id?e.areas?.[i.area_id]?.name:void 0,r=zn(e,ne(e,i.area_id).filter(p=>Le(nt(p)))),a=new Set([...n.placements.filter(p=>U([p.x,p.z],i.points)).map(p=>p.entity_id),...n.furniture.filter(p=>kt(p.type)&&p.entity&&U([p.x,p.z],i.points)).map(p=>p.entity)]),l=r.map(p=>p.primary).filter(p=>!a.has(p)),c=new Set(t.panel??[]),d=new Set(t.hidden??[]),u=new Set(t.no_state??[]),h=(p,f)=>p.has(f)?[...p].filter(b=>b!==f):[...p,f];return r.length?m`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${r.map(p=>m`<div class="fp3d-row fp3d-dev-row ${d.has(p.primary)?"fp3d-dev-hidden":""}">
          <button class="fp3d-dev-name ${a.has(p.primary)?"":"fp3d-muted"}" ?disabled=${!a.has(p.primary)} @click=${()=>this.selectItem("device",p.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${Gn(nt(p.primary))} />
            </svg>
            <span>${et(e,p.primary,s)}</span>
          </button>
          ${this.isEditor?m`<button
                  class="fp3d-pin ${d.has(p.primary)?"fp3d-pin-on":""}"
                  aria-pressed=${d.has(p.primary)}
                  title=${this.t(d.has(p.primary)?"panel_unhide":"panel_hide")}
                  @click=${()=>this.updateOutdoor({hidden:h(d,p.primary)})}
                >
                  ${d.has(p.primary)?"\u{1F648}":"\u{1F441}"}
                </button>
                ${d.has(p.primary)?y:m`<button
                      class="fp3d-pin ${u.has(p.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${u.has(p.primary)}
                      title=${this.t(u.has(p.primary)?"panel_state_show":"panel_state_hide")}
                      @click=${()=>this.updateOutdoor({no_state:h(u,p.primary)})}
                    >
                      ${u.has(p.primary)?"\u2205":"Aa"}
                    </button>`}
                ${a.has(p.primary)?y:m`<button
                      class="fp3d-pin ${c.has(p.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${c.has(p.primary)}
                      title=${this.t(c.has(p.primary)?"panel_unpin":"panel_pin")}
                      @click=${()=>this.updateOutdoor({panel:h(c,p.primary)})}
                    >
                      ${c.has(p.primary)?"\u2605":"\u2606"}
                    </button>`}`:y}
          ${this.isEditor?a.has(p.primary)?m`<button class="fp3d-link" @click=${()=>this.removeDevice(p.primary)}>${this.t("devices_remove")}</button>`:m`<button class="fp3d-link" @click=${()=>this.placeDevices([p.primary],i)}>${this.t("devices_place")}</button>`:y}
        </div>`)}
      ${this.isEditor&&l.length>1?m`<button class="fp3d-link fp3d-place-all" @click=${()=>this.placeDevices(l,i)}>${this.t("devices_place_all_n",{n:l.length})}</button>`:y}
    </div>`:m`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`}renderOutdoorForm(t){let e=this.isEditor,n=Be(t.points),i=ft(t.points),s=(r,a)=>{let{x0:l,z0:c,x1:d,z1:u}=i;r==="x"&&([l,d]=[a,a+(d-l)]),r==="z"&&([c,u]=[a,a+(u-c)]),r==="w"&&(d=l+Math.max(.1,a)),r==="d"&&(u=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,u],[l,u]].map(([h,p])=>[$(h),$(p)])})};return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${r=>this.updateOutdoor({type:r.target.value})}>
            ${is.map(r=>m`<option value=${r} ?selected=${r===t.type}>${this.t(`out_${r}`)}</option>`)}
          </select></label
        >
        ${ai(t.type)?y:this.renderOutdoorZone(t)}
        ${n?m`${this.len(this.t("x"),i.x0,r=>s("x",r))} ${this.len(this.t("z"),i.z0,r=>s("z",r))}
            ${this.len(this.t("width"),i.x1-i.x0,r=>s("w",r),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,r=>s("d",r),.01,.1)}`:y}
        ${ai(t.type)?this.len(this.t("outdoor_height"),t.height??ha[t.type],r=>this.updateOutdoor({height:Math.min(6,Math.max(.1,$(r)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,r=>this.updateOutdoor({height:Math.min(2,Math.max(.4,$(r)))}),.05,.4):y}
        ${this.len(this.t("outdoor_offset"),t.offset??0,r=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,$(r)))||null}),.05)}
        ${t.type!=="pool"?m`${this.len(this.t("outdoor_slope"),t.slope??0,r=>this.updateOutdoor({slope:Math.min(20,Math.max(0,$(r)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${r=>this.updateOutdoor({slope_dir:r.target.value})}>
                  ${jd.map(r=>m`<option value=${r} ?selected=${r===(t.slope_dir??"x")}>${this.t(`slope_${r.replace("-","n")}`)}</option>`)}
                </select></label
              >`:y}
        ${t.type==="pool"?this.renderPoolShape(t):y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${t.outline!==!1} ?disabled=${!e} @change=${r=>this.updateOutdoor({outline:r.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${t.type==="fence"||t.type==="pergola"?m`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${r=>this.updateOutdoor({open:r.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:y}
        ${t.type==="pergola"?m`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.bracing} ?disabled=${!e} @change=${r=>this.updateOutdoor({bracing:r.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!t.cut} ?disabled=${!e} @change=${r=>this.updateOutdoor({cut:r.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${t.slope?m`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:y}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${this.renderModuleFields(t)}
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}};var fy=.05,my=.2,gy=.12;function by(o){let t=[];return o.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let s=Lt(i)>=0;for(let r=0;r<i.length;r++){let a=i[r],l=i[(r+1)%i.length],c=l[0]-a[0],d=l[1]-a[1],u=Math.hypot(c,d);if(u<.05)continue;let h=[c/u,d/u],p=s?[h[1],-h[0]]:[-h[1],h[0]];(h[1]<-1e-9||Math.abs(h[1])<=1e-9&&h[0]<0)&&(h=[-h[0],-h[1]]);let f=[-h[1],h[0]],b=a[0]*h[0]+a[1]*h[1],g=l[0]*h[0]+l[1]*h[1];t.push({room:n,index:r,dir:h,normal:f,offset:a[0]*f[0]+a[1]*f[1],outside:p[0]*f[0]+p[1]*f[1]>0?1:-1,t0:Math.min(b,g),t1:Math.max(b,g)})}}),t}function $m(o,t=.6){let e=by(o),n=e.map((d,u)=>u),i=d=>n[d]===d?d:n[d]=i(n[d]),s=[];for(let d=0;d<e.length;d++)for(let u=d+1;u<e.length;u++){let h=e[d],p=e[u];if(h.room===p.room||Math.abs(h.dir[0]*p.dir[1]-h.dir[1]*p.dir[0])>fy||h.outside===p.outside)continue;let f=(p.offset-h.offset)*h.outside;f>t||f<-gy||Math.abs(f)<1e-4||Math.min(h.t1,p.t1)-Math.max(h.t0,p.t0)<my||(s.push(Math.round(f*1e3)/1e3),n[i(d)]=i(u))}if(!s.length)return{rooms:o.map(d=>({...d,points:d.points.map(u=>[u[0],u[1]])})),gaps:s};let r=new Map;e.forEach((d,u)=>{let h=i(u);if(h===u&&!e.some((f,b)=>b!==u&&i(b)===u))return;let p=r.get(h)??[];p.push(u),r.set(h,p)});let a=o.map(d=>d.points.map(()=>new Map));for(let[d,u]of r){let h=u.reduce((p,f)=>p+e[f].offset,0)/u.length;for(let p of u){let f=e[p],b=h-f.offset,g=[f.normal[0]*b,f.normal[1]*b],_=o[f.room].points.length;a[f.room][f.index].set(d,g),a[f.room][(f.index+1)%_].set(d,g)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:o.map((d,u)=>({...d,points:d.points.map((h,p)=>{let f=h[0],b=h[1];for(let[g,_]of a[u][p].values())f+=g,b+=_;return[l(f),l(b)]})})),gaps:s}}function Mm(o){let t=o.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function Em(o,t=.05,e=.5){let n=o.map(s=>({...s,points:s.points.map(r=>[r[0],r[1]])})),i=0;for(let s=0;s<4;s++){let r=(l,c)=>n.reduce((d,u)=>d+u.points.filter(h=>Math.abs(h[l]-c)<1e-6).length,0),a=!1;for(let l of n)for(let c=0;c<l.points.length;c++){let d=l.points[c],u=l.points[(c+1)%l.points.length],h=Math.abs(u[0]-d[0]),p=Math.abs(u[1]-d[1]),f=p>1e-6&&p<=t&&h>=e?1:h>1e-6&&h<=t&&p>=e?0:null;if(f===null)continue;let[b,g]=r(f,d[f])>=r(f,u[f])?[d[f],u[f]]:[u[f],d[f]];for(let _ of n)for(let v of _.points)Math.abs(v[f]-g)<1e-6&&(v[f]=b);i++,a=!0}if(!a)break}return{rooms:n,fixed:i}}var yn=o=>Math.round(o*1e3)/1e3;function Sm(o,t){return{point:e=>[yn(e[0]+o),yn(e[1]+t)],quarter:0}}function Pm(o,t){return{point:e=>[yn(o-(e[1]-t)),yn(t+(e[0]-o))],quarter:1}}function Fm(o,t){return o.quarter?[-t[1],t[0]]:t}function Ai(o,t){return(t+90*o.quarter)%360}var _y={x:"z",z:"-x","-x":"-z","-z":"x"};function Gl(o,t){t&&(t.target&&([t.target.x,t.target.z]=o.point([t.target.x,t.target.z])),o.quarter&&(t.theta-=Math.PI/2,t.theta<=-Math.PI&&(t.theta+=2*Math.PI)))}function yy(o,t){t.points=t.points.map(o.point),o.quarter&&(t.slope_dir||t.slope)&&(t.slope_dir=_y[t.slope_dir??"x"]);let e=t.pool;if(e){for(let n of e.ports??[])[n.x,n.z]=o.point([n.x,n.z]);for(let n of e.joints??[])[n.x,n.z]=o.point([n.x,n.z]),n.nx!=null&&n.nz!=null&&([n.nx,n.nz]=Fm(o,[n.nx,n.nz]))}}function vy(o,t){for(let e of t.rooms)e.points=e.points.map(o.point),Gl(o,e.start_view);for(let e of t.furniture)[e.x,e.z]=o.point([e.x,e.z]),o.quarter&&(e.rotation=Ai(o,e.rotation)),e.bin_kerb&&([e.bin_kerb.x,e.bin_kerb.z]=o.point([e.bin_kerb.x,e.bin_kerb.z]));for(let e of t.placements)[e.x,e.z]=o.point([e.x,e.z]),o.quarter&&(e.rotation=Ai(o,e.rotation??0));for(let e of t.outdoor)yy(o,e);for(let e of t.walls??[])e.a=o.point(e.a),e.b=o.point(e.b);t.background&&([t.background.x,t.background.z]=o.point([t.background.x,t.background.z]),o.quarter&&(t.background.rotation=Ai(o,t.background.rotation??0))),Gl(o,t.start_view)}function xy(o,t){let[e,n]=o.point([t.x0,t.z0]),[i,s]=o.point([t.x1,t.z1]);if(t.x0=Math.min(e,i),t.x1=Math.max(e,i),t.z0=Math.min(n,s),t.z1=Math.max(n,s),t.points&&(t.points=t.points.map(o.point)),t.pivot&&(t.pivot=o.point(t.pivot)),!!o.quarter)if(t.axis==="x")t.axis="z",t.flip=!t.flip;else{t.axis="x";let[r,a]=[t.end_u0,t.end_u1];(r!==void 0||a!==void 0)&&(t.end_u0=a??null,t.end_u1=r??null)}}var ke=(o,t)=>o[0]*t[0]+o[1]*t[1]+o[2]*t[2],Xn=(o,t)=>[o[0]-t[0],o[1]-t[1],o[2]-t[2]];function wy(o,t){let e=(n,i)=>Math.abs(n[0]-i[0])+Math.abs(n[1]-i[1])+Math.abs(n[2]-i[2])<1e-6;return e(o.o,t.o)&&e(o.eu,t.eu)&&e(o.es,t.es)&&Math.abs(o.lu-t.lu)<1e-6&&Math.abs(o.ls-t.ls)<1e-6}function ky(o,t,e){let n=_=>{let[v,x]=o.point([_[0],_[2]]);return[v,_[1],x]},i=_=>{let[v,x]=Fm(o,[_[0],_[2]]);return[v,_[1],x]},{face:s,field:r}=t,[a,l]=gn(s,r),c=(_,v)=>{let x=[s.o[0]+s.eu[0]*_+s.es[0]*v,s.o[1]+s.eu[1]*_+s.es[1]*v,s.o[2]+s.eu[2]*_+s.es[2]*v];return n(x)},d=c(r.u,r.v),u=c(r.u+a,r.v+l),h=Re(s,r,!0).flatMap(_=>_.corners),p=h.length?n([0,1,2].map(_=>h.reduce((v,x)=>v+x[_],0)/h.length)):d,f=i(s.eu),b=i(s.es),g=i(s.n);for(let _ of e){if(ke(_.n,g)<.999||Math.abs(ke(_.eu,f))<.999||Math.abs(ke(_.es,b))<.999||Math.abs(ke(Xn(d,_.o),_.n))>.02)continue;let v=ke(Xn(p,_.o),_.eu),x=ke(Xn(p,_.o),_.es);if(v<-.02||v>_.lu+.02||x<-.02||x>_.ls+.02)continue;let w=ke(Xn(d,_.o),_.eu),E=ke(Xn(u,_.o),_.eu),k=ke(Xn(d,_.o),_.es),M=ke(Xn(u,_.o),_.es),F=t.item;return F.face=_.key,F.u=yn(Math.min(w,E)),F.v=yn(Math.min(k,M)),"rows"in F&&$y(F,ke(_.eu,f)<0,ke(_.es,b)<0),!0}return!1}function $y(o,t,e){if(!t&&!e)return;let n=Un(o),i=n.length-1;t&&o.align&&o.align!=="center"?o.align=o.align==="left"?"right":"left":t&&!o.align&&n.some(s=>s!==n[0])&&(o.align="right"),o.skip?.length&&(o.skip=o.skip.map(s=>{let[r,a]=s.split(":").map(Number),l=t?n[r]-1-a:a;return`${e?i-r:r}:${l}`})),e&&(o.layout?.length&&(o.layout=[...o.layout].reverse()),o.flip=!o.flip)}function ql(o,t,e){let n=t==null,i=new Set(n?o.floors.map(p=>p.id):t),s=o.settings.roof,r=n||s.type!=="custom"&&s.type!=="none"&&i.has(Eo(o)?.id??""),a=ut(o),l=[],c=(p,f)=>{if(p.face===Fe||(p.face.startsWith("wall:")?!i.has(p.face.split(":")[1]):!r))return;let g=Kt(o,f,a);g&&l.push({item:p,field:f,face:g})};for(let p of s.solar??[])c(p,p);for(let p of s.windows??[])c(p,De(p));let d=Al(o)?.id,u=(o.settings.pets?.list??[]).filter(p=>p.x!=null&&p.z!=null&&i.has(Ao(o,p)?.id??""));for(let p of o.floors)i.has(p.id)&&vy(e,p);for(let p of o.floors)for(let f of p.outdoor)for(let b of f.pool?.pipes??[])i.has(b.floor_id)&&(b.points=b.points.map(e.point));for(let p of s.cables??[])i.has(p.floor_id)&&(p.points=p.points.map(e.point));let h=o.energy.meter;h&&i.has(h.floor_id)&&([h.x,h.z]=e.point([h.x,h.z]));for(let p of u)[p.x,p.z]=e.point([p.x,p.z]),e.quarter&&p.rotation!=null&&(p.rotation=Ai(e,p.rotation));if(d&&i.has(d))for(let p of s.solar??[]){if(p.face!==Fe)continue;let f=er(o,p),[b,g]=e.point([f.eu[0]*p.u+f.es[0]*p.v,f.eu[2]*p.u+f.es[2]*p.v]);e.quarter&&(p.rotation=Ai(e,p.rotation??0));let _=(p.rotation??0)*Math.PI/180;p.u=yn(b*Math.cos(_)+g*Math.sin(_)),p.v=yn(-b*Math.sin(_)+g*Math.cos(_))}if(n){for(let f of s.sections??[])xy(e,f);let p=s.hologram;p&&p.place==="free"&&p.x!=null&&p.z!=null&&([p.x,p.z]=e.point([p.x,p.z])),Gl(e,o.settings.start_view),e.quarter&&(o.settings.north=Ai(e,o.settings.north??0))}if(l.length){let p=ut(o),f=new Map;for(let b of l){let g=b.item.face.startsWith("wall:")?b.item.face.split(":")[1]:null;g&&!f.has(g)&&f.set(g,oe(o,g));let _=g?f.get(g):p,v=_.find(x=>x.key===b.item.face);v&&wy(v,b.face)||ky(e,b,_)}}}var hr=class{unplacedAreas(t){return eu(this._doc,t,this.hass?.areas)}addFloor(t=null){let e=this._doc.floors,n=N("floor"),i=t?.name??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),s={...Zd(n,i,tu(e,t?.level)),ha_floor:t?.floor_id??null},r=structuredClone(this._doc),a=r.floors.findIndex(l=>l.elevation>s.elevation);r.floors.splice(a<0?r.floors.length:a,0,s),this.setDoc(r),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=nu(t,e,()=>N("room"));this.change((i,s)=>s.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(s=>s.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}async deleteFloor(){let t=this.floor;if(!t||!await this.ask(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}straightenFloor(){let t=this.floor;if(!t||!this.isEditor)return;let{rooms:e,fixed:n}=Em(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,s)=>s.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isEditor)return;let{rooms:e,gaps:n}=$m(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Mm(n);this.change((s,r)=>{r.rooms=e,i&&(s.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:Ht(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}shiftFloor(t,e){if(!this.isEditor||!t&&!e)return;let n=this._shiftAll;this.change((i,s)=>ql(i,n?null:[s.id],Sm(t,e))),this._shiftX=0,this._shiftZ=0}turnFloor(){let t=this.floor;if(!t||!this.isEditor)return;let e=this._shiftAll,n=(e?this._doc.floors:[t]).flatMap(l=>l.rooms.flatMap(c=>c.points));if(!n.length)return;let i=n.map(l=>l[0]),s=n.map(l=>l[1]),r=(Math.min(...i)+Math.max(...i))/2,a=(Math.min(...s)+Math.max(...s))/2;this.change((l,c)=>ql(l,e?null:[c.id],Pm(r,a)))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}async loadImage(t){this.loadingImages.add(t);try{let e=await vs(this.hass,t,this.home),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!!n)try{await this.storeBackground(n)}catch(i){await this.tell(this.t("picture_failed",{error:Ue(i)}))}}async storeBackground(t){let e=await createImageBitmap(t),n=Math.min(1,2048/Math.max(e.width,e.height)),i=document.createElement("canvas");i.width=Math.round(e.width*n),i.height=Math.round(e.height*n),i.getContext("2d").drawImage(e,0,0,i.width,i.height);let s=i.toDataURL("image/jpeg",.85),r=N("img");await gi(this.hass,r,s,this.home),this._images={...this._images,[r]:{url:s,aspect:i.height/i.width}};let a=this.floor?.rooms.length?ft(this.floor.rooms.flatMap(l=>l.points)):null;this.updateFloor({background:{image_id:r,x:a?a.x0:0,z:a?a.z0:0,width:a?Math.max(4,$(a.x1-a.x0)):12,opacity:.5}})}selectFloor(t){this._floorId=t,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}renderFloorMenu(){let t=this._doc.floors,e=this.floor,n=this.isEditor,i=this._toolMenu==="floor",s=()=>(this._toolMenu=null,this._floorMenu=!1);return m`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-floor">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${i} @click=${()=>(this._toolMenu=i?null:"floor",this._floorMenu=!1,this._viewMenu=!1)}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${e?.name??this.t("floors")} <span class="fp3d-caret">▾</span>
        </button>
        ${i?m`<div class="fp3d-menu-veil" @click=${s}></div>
              <div class="fp3d-menu" role="menu">
                ${[...t].reverse().map(r=>m`<button role="menuitem" class="fp3d-menu-item ${r.id===this._floorId?"fp3d-menu-on":""}" @click=${()=>(s(),this.selectFloor(r.id))}>
                    ${r.name}<span class="fp3d-menu-more">${r.id===this._floorId?"\u2713":""}</span>
                  </button>`)}
                ${n?m`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length?this._floorMenu:y}
                        @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:(s(),this.addFloor())}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length?m`<span class="fp3d-menu-more">${this._floorMenu?"\u25BE":"\u25B8"}</span>`:y}
                      </button>
                      ${this._floorMenu?m`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map(r=>m`<button class="fp3d-chip" @click=${()=>(s(),this.addFloor(r))}>${r.name}</button>`)}
                            <button class="fp3d-chip" @click=${()=>(s(),this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`:y}
                      ${e?m`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${()=>{s(),this.setTool("select"),this.selectItem("room",null),this._sideOpen=!0}}
                          >
                            ${this.t("floor_settings")}
                          </button>`:y}`:y}
              </div>`:y}
      </div>
    </div>`}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return y;let[i,s]=this.toScreen([e.x,e.z]),r=e.width*this._view.scale,a=r*n.aspect,l=e.rotation??0,c=this.bgHandles();return A`<g transform="rotate(${l} ${i+r/2} ${s+a/2})">
      <image href=${n.url} x=${i} y=${s} width=${r} height=${a} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?A`<rect class="fp3d-bg-frame" x=${i} y=${s} width=${r} height=${a} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+r} cy=${s+a} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+r/2} y1=${s} x2=${i+r/2} y2=${s-30} />
            <circle cx=${i+r/2} cy=${s-30} r="16" class="fp3d-hit" />
            <circle cx=${i+r/2} cy=${s-30} r="8" />
            <path d="M${i+r/2-4} ${s-31}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>${this.renderBgRuler()}`}bgHandles(){return!!this.floor?.background&&this.isEditor&&this._tool==="select"&&this._bgEdit}renderBgRuler(){let t=this._bgLevel?.length?this._bgLevel:this._bgRuler;if(!t?.length)return y;let e=t.map(n=>this.toScreen(n));return A`<g class="fp3d-bg-ruler">
      ${e.length===2?A`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:y}
      ${e.map(([n,i])=>A`<circle cx=${n} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(t,e){let n=this.floor?.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let s=Math.atan2(e[1]-t[1],e[0]-t[0]),r=Math.round(s/(Math.PI/2))*(Math.PI/2)-s;if(Math.abs(r)<1e-4)return;let a=n.width*i.aspect,l=[n.x+n.width/2,n.z+a/2],c=l[0]-t[0],d=l[1]-t[1],u=[t[0]+c*Math.cos(r)-d*Math.sin(r),t[1]+c*Math.sin(r)+d*Math.cos(r)],h=(n.rotation??0)+r*180/Math.PI;h=Math.round((((h+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:h,x:$(u[0]-n.width/2),z:$(u[1]-a/2)}})}applyBgRuler(t){let n=this.floor?.background,i=this._bgRuler,s=n?this._images[n.image_id]:void 0;if(!n||!s||!i||i.length<2||!(t>0))return;let r=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(r<1e-4)return;let a=t/r,l=n.width*s.aspect,c=[n.x+n.width/2,n.z+l/2],d=i[0],u=[d[0]+a*(c[0]-d[0]),d[1]+a*(c[1]-d[1])],h=n.width*a,p=l*a;this.updateFloor({background:{...n,width:$(h),x:$(u[0]-h/2),z:$(u[1]-p/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let i=t.width*n,s=t.x+t.width/2,r=t.z+i/2,a=-(t.rotation??0)*Math.PI/180,l=e[0]-s,c=e[1]-r;return[s+l*Math.cos(a)-c*Math.sin(a)-t.x,r+l*Math.sin(a)+c*Math.cos(a)-t.z]}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?A`<g pointer-events="none">${e.rooms.map(n=>A`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:y}renderHeadroom(t){let e=t.elevation+t.height;if(!Ml(this._doc).some(s=>uf(s,e)&&pf(s,t.elevation)))return y;let i={settings:this._doc.settings};return A`${[1.5,2].map(s=>hf(i,t.elevation,s).map(([r,a])=>{let[l,c]=this.toScreen(r),[d,u]=this.toScreen(a);return A`<line class="fp3d-headroom" x1=${l} y1=${c} x2=${d} y2=${u} />
          <text class="fp3d-headroom-label" x=${(l+d)/2} y=${(c+u)/2-4}>${this.m(s,1)}</text>`}))}`}renderBackgroundForm(t){let e=t.background;return m`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
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
                  ${this._bgLevel?m`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:y}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?m`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:m`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${Zt(this.t("bg_ruler_length"),this.unit)}
                            <input type=${this.unit==="imperial"?"text":"number"} min="0.01" step="0.01" .value=${this._bgRulerLen?this.lenValue(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=this.readLen(n.target.value)??0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:y}`:y}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:y}
      </div>
    </details>`}};var fr=class{roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?y:m`<div class="fp3d-roof-floors" title=${this.t("roof_floor_pick_hint")}>
      <span class="fp3d-sub">${this.t("roof_floor_pick")}</span>
      <div class="fp3d-seg fp3d-dev-source">
        ${t.map(e=>m`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
      </div>
    </div>`}async useRoofSections(t=!1){if(!this.isEditor)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!await this.ask(this.t("roof_regen_confirm"),this.t("ask_ok"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=wf(n,()=>N("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isEditor)return;let n=vf(this._doc,t[0],t[1],e[0],e[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),s=n===null,r=$(n??i+2.4),a=s?6:this._doc.settings.roof.pitch||35,l={id:N("roof"),x0:$(t[0]),z0:$(t[1]),x1:$(e[0]),z1:$(e[1]),shape:s?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:r,eave_b:r,pitch_a:a,pitch_b:a,base:r,overhang:s?.15:null,...s?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isEditor)return;let n=Xs(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([s,r])=>[$(s),$(r)]);this.updateRoofSection({shape:"flat",points:i,...$o(i)})}addDormer(t){let e=this.roofSection;if(!e||!this.isEditor)return;let n=bf(e,t,N("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isEditor||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.sections?.find(s=>s.id===e);i&&Object.assign(i,t)}))}turnRoofSection(t){let e=this._roofId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof.sections??[],s=i.find(c=>c.id===e);if(!s||s.points&&s.points.length>=3)return;let r=t-(s.rotation??0);if(!r)return;let a=s.pivot??[$((s.x0+s.x1)/2),$((s.z0+s.z1)/2)],l=new Set(i.filter(c=>c!==s&&Fl(i,c)===s).map(c=>c.id));n.settings.roof.sections=i.map(c=>{if(c!==s&&!l.has(c.id))return c;let d=mf(c,r,a);return{...d,x0:$(d.x0),x1:$(d.x1),z0:$(d.z0),z1:$(d.z1),pivot:d.pivot&&[$(d.pivot[0]),$(d.pivot[1])],rotation:$(d.rotation??0)}})})}deleteRoofSection(){let t=this._roofId;!t||!this.isEditor||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isEditor)return;let e={...structuredClone(t),id:N("roof"),x0:$(t.x0+1),x1:$(t.x1+1),z0:$(t.z0+1),z1:$(t.z1+1)};t.pivot&&(e.pivot=[$(t.pivot[0]+1),$(t.pivot[1]+1)]),this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return A`<g class="fp3d-roof-layer">${e.map((n,i)=>{let s=n.id===this._roofId,r=he(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=Fl(e,n),c=l?he(_f(l,n)):r,d=(a??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(_=>this.toScreen(_)),u=(_,v)=>{let[x,w]=this.toScreen(_),[E,k]=this.toScreen(v);return A`<line x1=${x} y1=${w} x2=${E} y2=${k} />`},h=n.shape==="flat"||n.shape==="parapet"?null:El(n,{u0:0,u1:0,a:0,b:0}),p=h?A`${h.ridges.map(([_,v])=>u(r.at(_[0],_[1]),r.at(v[0],v[1])))}`:y,[f,b]=this.toScreen(r.at((r.u0+r.u1)/2,r.w/2)),g=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(Zs(n),1)}`;return A`<g data-roof=${n.id} class=${`fp3d-roof-sec${s?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(_=>_.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${p}</g>
          <text x=${f} y=${b-14}>${g}</text>
        </g>
        ${s&&this.isEditor&&!this.roofFixed(n)&&a?a.map((_,v)=>{let[x,w]=this.toScreen(_);return A`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${v}`}><circle cx=${x} cy=${w} r="16" class="fp3d-hit" /><circle cx=${x} cy=${w} r="6" /></g>`}):y}
        ${s&&this.isEditor&&!this.roofFixed(n)&&!a&&!Nn(n)?[[0,0],[1,0],[1,1],[0,1]].map(([_,v])=>{let[x,w]=this.toScreen([_?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),v?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return A`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${_}:${v}`}><circle cx=${x} cy=${w} r="16" class="fp3d-hit" /><circle cx=${x} cy=${w} r="6" /></g>`}):y}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:So(t,e)}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return y;let e=new Map(ut(this._doc).map(n=>[n.key,n]));return A`<g class="fp3d-roofwin-layer">${t.map(n=>{let i=e.get(n.face),s=i?If(i,n):null;return s?A`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${s.map(r=>this.toScreen([r[0],r[2]]).join(",")).join(" ")} /></g>`:y})}</g>`}addRoofWindow(){if(!this.isEditor)return;let t=ut(this._doc).filter(i=>!i.flat),e=Po(t,this._doc.settings.north??0)??ut(this._doc)[0];if(!e)return;let n=Hl(e,N("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof.windows?.find(r=>r.id===e);if(!i)return;Object.assign(i,t);let s=ut(n).find(r=>r.key===i.face);s&&Object.assign(i,Ze(s,De(i)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isEditor||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(ut(this._doc).map(n=>[n.key,n]));return m`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?m`<div class="fp3d-room-list">
            ${t.map((n,i)=>{let s=e.get(n.face);return m`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${s?this.faceLabel(s):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isEditor||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isEditor,n=ut(this._doc),i=l=>this.updateRoofWindow(l),s=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,r=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>wo(l)||Rt(l));return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${s}</h3>
          ${e?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&i({...Hl(c,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name,float:t.float})}}>
              ${n.map(l=>m`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),t.w??.78,l=>i({w:Math.max(.3,Math.min(4,$(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),t.h??1.18,l=>i({h:Math.max(.3,Math.min(4,$(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),t.u,l=>i({u:$(l)}),.05)}
          ${this.len(this.t("solar_v"),t.v,l=>i({v:$(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),t.cover??null,void 0,r,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),t.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),t.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),t.window??null,void 0,r,l=>i({window:l==="none"?null:l}))}
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
        ${e?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:y}
      </section>`}renderRoofPanel(){let t=this._doc.settings.roof,e=this.isEditor,n=t.type==="custom"?this.roofSection:void 0,i=this._roofWinId?t.windows?.find(r=>r.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let s=t.type==="custom"?t.sections??[]:[];return m`${this.renderRoofBasics()}
    <section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:m`<div class="fp3d-room-list">
              ${s.map((r,a)=>m`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=r.id}>
                    <span>${a+1} · ${r.dormer?this.t("roof_dormer"):this.t(`roof_shape_${r.shape}`)} · ${this.m(Math.abs(r.x1-r.x0),1)} × ${this.m(Math.abs(r.z1-r.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(Zs(r),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(r=>r.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderRoofSectionForm(t){let e=this.isEditor,n=p=>this.updateRoofSection(p),i=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[s,r]=t.flip?[i[1],i[0]]:i,a=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",c=p=>p.findIndex(f=>f.id===t.id)+1,d=(p,f,b,g=.05,_=0)=>this.len(p,f,v=>b(Math.max(_,$(v))),g,_),u=(p,f,b)=>this.num(p,f,g=>b(Math.max(0,$(g))),1,0),h=!!this._doc.settings.lock_plan;return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${t.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${e?h?m`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:y}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!e} @change=${p=>n({shape:p.target.value})}>
            ${Cd.map(p=>m`<option value=${p} ?selected=${t.shape===p}>${this.t(`roof_shape_${p}`)}</option>`)}
          </select>
        </label>
        ${a?y:m`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        ${t.points||t.dormer?y:m`<div class="fp3d-form" title=${this.t("roof_turn_hint")}>
              ${this.num(`${this.t("roof_turn")} (\xB0)`,t.rotation??0,p=>this.turnRoofSection(Math.max(-180,Math.min(180,$(p)))),1)}
              ${e&&!this.roofFixed(t)?m`<div class="fp3d-actions">
                    <button class="fp3d-btn" @click=${()=>this.turnRoofSection(yl(t.rotation??0,-15))}>↺ 15°</button>
                    <button class="fp3d-btn" @click=${()=>this.turnRoofSection(yl(t.rotation??0,15))}>↻ 15°</button>
                  </div>`:y}
            </div>`}
        ${t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip"?m`<div class="fp3d-form" title=${this.t("roof_end_hint")}>
              ${[0,1].map(p=>{let f=this.t(t.axis==="x"?p===0?"roof_side_left":"roof_side_right":p===0?"roof_side_top":"roof_side_bottom"),b=(p===0?t.end_u0:t.end_u1)??"";return m`<label class="fp3d-field"
                  >${this.t("roof_end")} ${f}
                  <select
                    ?disabled=${!e}
                    @change=${g=>{let _=g.target.value||null;n(p===0?{end_u0:_}:{end_u1:_})}}
                  >
                    <option value="" ?selected=${b===""}>${this.t("roof_end_auto")}</option>
                    ${Hd.map(g=>m`<option value=${g} ?selected=${b===g}>${this.t(g==="gable"?"roof_end_gable":`roof_shape_${g}`)}</option>`)}
                  </select></label
                >`})}
            </div>`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${p=>n({open:p.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?d(this.t("roof_height"),t.eave_a,p=>n({eave_a:p,eave_b:p})):m`${d(`${this.t("roof_eave")} ${l?"":s}`,t.eave_a,p=>n({eave_a:p}))}
              ${l?y:d(`${this.t("roof_eave")} ${r}`,t.eave_b,p=>n({eave_b:p}))}
              ${u(`${this.t("roof_pitch_short")} ${l?"":s}`,t.pitch_a,p=>n({pitch_a:Math.min(75,p)}))}
              ${l?y:u(`${this.t("roof_pitch_short")} ${r}`,t.pitch_b,p=>n({pitch_b:Math.min(75,p)}))}`}
          ${d(this.t("roof_base"),t.base,p=>n({base:p}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${p=>{let f=this._doc.floors.find(_=>_.id===p.target.value);if(!f)return;let b=$(f.elevation+f.height),g=b-t.base;n({base:b,eave_a:$(t.eave_a+g),eave_b:$(t.eave_b+g)})}}
            >
              ${[...this._doc.floors].filter(p=>p.rooms.length).sort((p,f)=>f.elevation-p.elevation).map(p=>m`<option value=${p.id} ?selected=${xf(this._doc,t)?.id===p.id}>${p.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,p=>n({overhang:Math.min(2,p)}),.05,0)}
        </div>
        ${a&&e?m`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?m`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:y}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:y}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(Zs(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?m`<div class="fp3d-actions">
              ${a?y:m`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!t.dormer&&!t.open?m`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${s}</button>
                  ${l?y:m`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${r}</button>`}`:y}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:y}
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
            >`:y}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):y}
        ${t.roof.type!=="none"?this.len(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):y}
      </div>
    </section>`}};var mr=class{setSolarDim(t){this._solarDim=t;try{localStorage.setItem("home3d.solarDim",t?"on":"off")}catch{}}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return y;let e=ut(this._doc);return A`<g class="fp3d-solar-layer">${t.map(n=>{let i=Kt(this._doc,n,e);if(!i||i.wall&&i.wall.floorId!==this._floorId)return y;let s=n.id===this._solarId,r=this._solarDim&&!s&&!i.wall&&!i.unbounded,a=y;if(s&&i.unbounded&&this.isEditor&&!n.locked){let[l,c]=Pi(i,n),d=(n.rotation??0)*Math.PI/180,u=.9+Math.max(...Re(i,n,!0).flatMap(g=>g.corners.map(_=>Math.hypot(_[0]-l,_[2]-c))))*.5,[h,p]=this.toScreen([l,c]),[f,b]=this.toScreen([l+Math.sin(d)*u,c-Math.cos(d)*u]);a=A`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${h} y1=${p} x2=${f} y2=${b} />
          <circle cx=${f} cy=${b} r="16" class="fp3d-hit" />
          <circle cx=${f} cy=${b} r="8" />
          <path d="M${f-4} ${b-1}a4 4 0 1 1 2 3.5" />
        </g>`}return A`<g data-solar=${n.id} class=${`fp3d-solar${s?" fp3d-solar-sel":""}${r?" fp3d-solar-dim":""}${s&&this._solarPick?" fp3d-solar-pick":""}`}>${Re(i,n,s).map(l=>{let c=i.wall?Math.max(.3,...l.corners.map(u=>(u[0]-i.o[0])*i.n[0]+(u[2]-i.o[2])*i.n[2])):0,d=i.wall?[l.corners[0],l.corners[1]].flatMap((u,h)=>{let p=[u[0],u[2]],f=[u[0]+i.n[0]*c,u[2]+i.n[2]*c];return h===0?[p,f]:[f,p]}):l.corners.map(u=>[u[0],u[2]]);return A`<polygon data-cell=${l.cell} class=${l.skipped?"fp3d-solar-off":""} points=${d.map(u=>this.toScreen(u).join(",")).join(" ")} />`})}</g>${a}`})}</g>`}faceLabel(t){if(t.key===Fe)return this.t("solar_ground");if(t.wall){let{floorId:s,room:r,edge:a,free:l}=t.wall,c=this._doc.floors.find(h=>h.id===s),d=c?.rooms.find(h=>h.id===r),u=l?this.t("solar_wall_free"):d?`${d.name}${a!=null?` ${a+1}\u2013${(a+1)%d.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${c?.name??""} \xB7 ${u?`${u} \xB7 `:""}${this.t(`compass_${Cl(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(s=>s.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${Cl(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${i}`}addSolarField(){if(!this.isEditor)return;let t=ut(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(r=>r.face)),n=this._doc.settings.north??0,i=Po(t.filter(r=>!e.has(r.key)),n)??Po(t,n);if(!i)return;let s=nr(i,N("pv"));this.change(r=>r.settings.roof.solar=[...r.settings.roof.solar??[],s]),this._solarId=s.id,this._roofId=null}selectSolar(t){this._solarId=t,this._roofId=null;let e=this._doc.settings.roof.solar?.find(n=>n.id===t);e?.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){if(!this.isEditor)return;let t=this._floorId??this._doc.floors[0]?.id,e=t?Mf(this._doc,N("pv"),t):null;e&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isEditor)return;let t=zl(this._doc,N("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isEditor||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.solar?.find(r=>r.id===e);if(!i)return;Object.assign(i,t);let s=Kt(n,i);s&&Object.assign(i,Ze(s,i))}))}setSolarString(t){let e=this._solarId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof,s=i.solar?.find(a=>a.id===e);if(!s)return;if(t==="new"){let a=i.strings??[],l={id:N("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:s.entity??null,inverter:null};i.strings=[...a,l],s.string=l.id}else s.string=t;let r=new Set((i.solar??[]).map(a=>a.string).filter(Boolean));i.strings=(i.strings??[]).filter(a=>r.has(a.id))})}updateSolarString(t){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isEditor||this.change(i=>{let s=i.settings.roof.strings?.find(r=>r.id===n);s&&Object.assign(s,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===e);i&&t(i)})}deleteSolar(){let t=this._solarId;!t||!this.isEditor||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(s=>s.id!==t);let i=new Set(n.solar.map(s=>s.string).filter(Boolean));n.strings=(n.strings??[]).filter(s=>i.has(s.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=ut(this._doc),n=new Map(t.map(s=>[s.id,Kt(this._doc,s,e)])),i=this.isEditor;return m`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?m`<label class="fp3d-check fp3d-solar-dim-toggle"
            ><input type="checkbox" .checked=${this._solarDim} @change=${s=>this.setSolarDim(s.target.checked)} />
            ${this.t("solar_dim")}</label
          >`:y}
      ${t.length?m`<div class="fp3d-room-list">
            ${t.map((s,r)=>{let a=n.get(s.id),l=a?Re(a,s).length:0;return m`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(s.id)}
                >
                  <span>${s.name||`${this.t("solar_field")} ${r+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Ht(this.hass,l*(s.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?m`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(s=>{let r=t.filter(d=>d.string===s.id),a=r.map(d=>n.get(d.id)?Re(n.get(d.id),d).length:0),l=a.reduce((d,u)=>d+u,0),c=r.reduce((d,u,h)=>d+a[h]*(u.wp??400)/1e3,0);return m`<p class="fp3d-sub">🔗 <b>${s.name}</b> · ${this.t("solar_string_sum",{fields:r.length,n:l,kwp:Ht(this.hass,c,1)})}</p>`})}`:y}
    </section>`}renderSolarForm(t){let e=this.isEditor,n=ut(this._doc),i=oe(this._doc),s=Kt(this._doc,t,n),r=t.face===Fe,a=s?Re(s,t).length:0,l=Un(t),c=l.reduce((p,f)=>p+f,0)-(t.skip?.length??0),d=this.entityOptions(p=>this.isPowerSensor(p)),u=p=>this.updateSolar(p),h=(this._doc.settings.roof.solar??[]).findIndex(p=>p.id===t.id)+1;return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${h}`}</h3>
          ${e?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!e}
              .value=${t.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${p=>u({name:p.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${p=>{let f=p.target.value,b={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};f===Fe&&u({...zl(this._doc,t.id),...b,rows:t.rows,cols:t.cols});let g=n.find(v=>v.key===f);g&&u(Ll(g,{...t,...b}));let _=i.find(v=>v.key===f);_&&u(Ll(_,{...t,...b,rows:1}))}}
            >
              ${s?y:m`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(p=>m`<option value=${p.key} ?selected=${p.key===t.face}>${this.faceLabel(p)}</option>`)}
              <option value=${Fe} ?selected=${r}>${this.t("solar_ground")}</option>
              ${i.map(p=>m`<option value=${p.key} ?selected=${p.key===t.face}>${this.faceLabel(p)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,p=>{let f=Math.max(1,Math.min(40,Math.round(p)));u(t.layout?.length?{layout:Array.from({length:f},(b,g)=>t.layout[g]??t.layout[t.layout.length-1]),rows:f}:{rows:f})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${t.layout?.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${p=>{let f=p.target.value.split(/[,;\s]+/).map(b=>parseInt(b,10)).filter(b=>Number.isFinite(b)&&b>=0);f.length&&(f.length===1?u({cols:Math.max(1,Math.min(60,f[0])),layout:null,skip:null}):u({layout:f.slice(0,40).map(b=>Math.min(60,b)),rows:Math.min(40,f.length),cols:Math.max(1,...f),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${s&&!s.unbounded?m`${this.t("solar_face_size",{w:Ht(this.hass,s.lu,1),h:Ht(this.hass,s.ls,1)})} · `:y}${this.t("solar_cols_hint")}
        </p>
        ${t.layout?.length&&new Set(t.layout).size>1?m`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(p=>m`<button aria-pressed=${(t.align??"left")===p} ?disabled=${!e} @click=${()=>u({align:p})}>${this.t(`solar_align_${p}`)}</button>`)}
            </div>`:y}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.portrait!==!1} ?disabled=${!e} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${t.portrait===!1} ?disabled=${!e} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.look!=="blue"} ?disabled=${!e} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${t.look==="blue"} ?disabled=${!e} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,p=>u({module_w:Math.max(.3,Math.min(3,$(p)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,p=>u({module_h:Math.max(.3,Math.min(3,$(p)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,p=>u({wp:Math.max(50,Math.min(1500,Math.round(p)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${t.skip?.length?m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:y}
        </div>
        ${this._solarPick?m`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:y}
        <div class="fp3d-form">
          ${r?m`${this.len(this.t("solar_base"),t.base??0,p=>u({base:p>.001?Math.min(60,$(p)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,p=>u(Si(this._doc,t,p)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Si(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Si(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:m`${this.len(this.t("solar_u"),t.u,p=>u({u:$(p)}),.05)} ${this.num(this.t(s?.wall?"solar_v_wall":"solar_v"),t.v,p=>u({v:$(p)}),.05)}`}
          ${s?.wall?m`${this.num(this.t("solar_tilt_wall"),t.tilt??0,p=>u({tilt:Math.max(0,Math.min(90,Math.round(p)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${p=>u({flip:p.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:y}
          ${s?.flat?m`${this.num(this.t("solar_tilt"),t.tilt??15,p=>u({tilt:Math.max(0,Math.min(45,Math.round(p)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${p=>u({flip:p.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:y}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:a,kwp:Ht(this.hass,a*(t.wp??400)/1e3,1)})}${a<c?m` · <b>${this.t("solar_partial",{n:a,total:c})}</b>`:y}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${p=>{let f=p.target.value;this.setSolarString(f===""?null:f)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(p=>m`<option value=${p.id} ?selected=${p.id===t.string}>${p.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let p=this._doc.settings.roof.strings?.find(_=>_.id===t.string);if(!p)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,d,_=>u({entity:_==="none"?null:_}));let f=this.hass?Ce(this.hass,this._doc.floors):null,b=_=>this._doc.floors.flatMap(v=>v.furniture.filter(x=>xt(x.type)===_).map(x=>({m:x,fl:v}))).map(({m:v,fl:x},w)=>{let E=f?.get(v.id)?.entity,k=v.name?.trim()||(E&&this.hass?et(this.hass,E):"");return{id:v.id,label:`${k||`${this.t(`furn_${_}`)} ${w+1}`} \xB7 ${x.name}`}}),g=[...b("inverter"),...b("home_battery")];return m`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${p.name} @change=${_=>this.updateSolarString({name:_.target.value.trim()||p.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),p.entity??null,void 0,d,_=>this.updateSolarString({entity:_==="none"?null:_}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${_=>this.updateSolarString({inverter:_.target.value||null})}>
                  <option value="" ?selected=${!p.inverter}>${this.t(g.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${g.map(_=>m`<option value=${_.id} ?selected=${_.id===p.inverter}>${_.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?m`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!s} @click=${()=>s&&u({...nr(s,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}};function Tm(o){let t=new Map,e=new Set(o.map(n=>n.powerEntity));for(let n of o)n.circuit&&n.circuit!==n.powerEntity&&e.has(n.circuit)&&t.set(n.circuit,(t.get(n.circuit)??0)+n.power);return o.map(n=>Math.max(0,n.power-(t.get(n.powerEntity)??0)))}var $e=.03,gr=o=>o&&o!=="none"?o:null;function Ql(o,t=e=>gr(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let i of n.furniture){let s=t(i),r=xt(i.type);if(r==="meter")e.grid??=s,e.gridExport??=gr(i.export);else if((r==="inverter"||r==="solar")&&s&&!e.solar.includes(s))e.solar.push(s);else if(r==="home_battery"){s&&!e.battery.includes(s)&&e.battery.push(s);let a=gr(i.charge);a&&!e.charge.includes(a)&&e.charge.push(a),(s||a)&&e.batteries.push({power:s,charge:a});let l=gr(i.soc);l&&!e.soc.includes(l)&&e.soc.push(l)}}return e}function Jl(o){for(let t of o.floors){let e=t.furniture.find(n=>xt(n.type)==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return o.energy.meter}function Lm(o){let t=n=>o.energy_sources?.find(i=>i.type===n)?.stat_energy_from??null,e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function br(o,t,e="power"){if(!t)return null;let n=o.entities?.[t]?.device_id;if(!n)return null;let i=Object.keys(o.states).filter(a=>a.startsWith("sensor.")&&o.entities?.[a]?.device_id===n&&o.states[a]?.attributes.device_class===e);if(i.length<=1)return i[0]??null;let s=i.filter(a=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(a)),r=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return s.find(a=>r&&a.includes(r))??s[0]??i[0]}function Cm(o,t){let e={};for(let n of t.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,s=br(o,i);s&&!e.grid&&(e.grid=s)}else if(n.type==="solar"){let i=br(o,n.stat_energy_from);i&&!e.solar&&(e.solar=i)}else if(n.type==="battery"){let i=br(o,n.stat_energy_from??n.stat_energy_to);i&&!e.battery&&(e.battery=i);let s=br(o,n.stat_energy_from??n.stat_energy_to,"battery");s&&!e.battery_soc&&(e.battery_soc=s)}return e}var Hm=.07;function nn(o,t=!1){if(!o)return null;let e=Number(o.state);if(!Number.isFinite(e))return null;let n=e*My(o.attributes.unit_of_measurement);return t?-n:n}function My(o){switch(typeof o=="string"?o.trim():""){case"mW":return .001;case"kW":return 1e3;case"MW":return 1e6;case"GW":return 1e9;case"TW":return 1e12;default:return 1}}function Ey(o,t){return t.startsWith("sensor.")&&o.states[t]?.attributes.device_class==="power"}function Oi(o,t){if(Ey(o,t))return t;let e=o.entities?.[t]?.device_id;if(!e)return null;let n=ep(o,e),i=_e(o,t),s=Da(o,e).filter(l=>l!==t),r=`sensor.${t.slice(t.indexOf(".")+1)}_power`;if(s.includes(r))return r;let a=s.find(l=>i!==null&&_e(o,l)===i);return a||n?a??null:s.find(l=>i===null||_e(o,l)===null||_e(o,l)===i)??null}function Dm(o,t,e,n=Ql(t)){let i=t.energy,s=i.grid??n.grid,r=s?nn(o.states[s],i.grid_invert):null;if(!i.grid&&n.gridExport){let b=Math.max(0,nn(o.states[n.gridExport])??0);r=Math.max(0,r??0)-b}let a=i.solar?nn(o.states[i.solar]):null;if(!i.solar&&n.solar.length){let b=n.solar.map(g=>nn(o.states[g])).filter(g=>g!==null);a=b.length?b.reduce((g,_)=>g+_,0):null}let l=i.battery?nn(o.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let b=n.batteries.map(g=>{if(g.charge){let _=g.power?Math.max(0,nn(o.states[g.power])??0):0,v=Math.max(0,nn(o.states[g.charge])??0);return _-v}return g.power?nn(o.states[g.power],i.battery_invert):null}).filter(g=>g!==null);l=b.length?b.reduce((g,_)=>g+_,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(b=>Number(o.states[b]?.state)).filter(b=>Number.isFinite(b)),u=d.length?d.reduce((b,g)=>b+g,0)/d.length:NaN,h=i.tariff?o.states[i.tariff]:void 0,p=Number(h?.state),f=i.consumption?nn(o.states[i.consumption]):null;return f!==null?f=Math.max(0,f):r!==null||a!==null||l!==null?f=Math.max(0,(r??0)+Math.max(0,a??0)+(l??0)):e.length&&(f=Tm(e).reduce((b,g)=>b+g,0)),{grid:r,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:h&&Number.isFinite(p)?{value:p,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:f}}function Zn(o,t){return o.pos.push(t),o.adj.push([]),o.pos.length-1}function vn(o,t,e){let n=Math.hypot(o.pos[t][0]-o.pos[e][0],o.pos[t][1]-o.pos[e][1]);o.adj[t].push({to:e,w:n}),o.adj[e].push({to:t,w:n})}function Sy(o,t){let e=o.length,n=o.map((i,s)=>{let r=o[(s+1)%e],a=r[0]-i[0],l=r[1]-i[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[i[0]+d*t[s],i[1]+u*t[s]],d:[a/c,l/c],n:[d,u]}});return o.map((i,s)=>{let r=n[(s-1+e)%e],a=n[s],l=r.d[0]*a.d[1]-r.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[s],i[1]+a.n[1]*t[s]];let c=((a.p[0]-r.p[0])*a.d[1]-(a.p[1]-r.p[1])*a.d[0])/l;return[r.p[0]+r.d[0]*c,r.p[1]+r.d[1]*c]})}function Py(o){return Lt(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function Xl(o,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=$t(o.rooms,{exterior:t,interior:e},o.walls??[]);for(let s of o.rooms){if(s.points.length<3)continue;let{pts:r,flipped:a}=Py(s),l=r.length,c=r.map((h,p)=>{let f=a?(l-2-p+l)%l:p,b=i.some(g=>!g.exterior&&g.sources.some(_=>_.room_id===s.id&&_.edge===f));return Hm+(b?e/2:0)}),d=Sy(r,c).map(h=>Zn(n,h)),u=d.map((h,p)=>[h,d[(p+1)%l]]);for(let[h,p]of u)vn(n,h,p);n.rings.set(s.id,u)}for(let s of i){if(s.exterior||!s.roomLeft||!s.roomRight)continue;let r=[(s.a[0]+s.b[0])/2,(s.a[1]+s.b[1])/2],a=Oo(n,s.roomLeft,r),l=Oo(n,s.roomRight,r);a!==null&&l!==null&&vn(n,a,l)}return Ry(n),n}var Fy=1;function Ry(o){let t=[...o.rings.entries()];for(;;){let e=new Array(o.pos.length).fill(-1),n=0;for(let r=0;r<o.pos.length;r++){if(e[r]>=0)continue;let a=[r];for(e[r]=n;a.length;)for(let{to:l}of o.adj[a.pop()])e[l]<0&&(a.push(l),e[l]=n);n++}if(n<2)return;let i=null;for(let[,r]of t)for(let a of new Set(r.flat()))for(let[l,c]of t)if(e[c[0][0]]!==e[a])for(let[d,u]of c){let h=o.pos[a],p=o.pos[d],f=o.pos[u],b=f[0]-p[0],g=f[1]-p[1],_=Math.min(1,Math.max(0,((h[0]-p[0])*b+(h[1]-p[1])*g)/(b*b+g*g||1))),v=Math.hypot(h[0]-p[0]-b*_,h[1]-p[1]-g*_);(!i||v<i.d)&&(i={a,room:l,d:v})}if(!i||i.d>Fy+2*Hm)return;let s=Oo(o,i.room,o.pos[i.a]);if(s===null)return;vn(o,i.a,s)}}function Oo(o,t,e){let n=o.rings.get(t);if(!n)return null;let i=null;for(let r of n){let a=o.pos[r[0]],l=o.pos[r[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,h=Math.min(1,Math.max(0,((e[0]-a[0])*c+(e[1]-a[1])*d)/u)),p=[a[0]+c*h,a[1]+d*h],f=Math.hypot(e[0]-p[0],e[1]-p[1]);(!i||f<i.d)&&(i={seg:r,q:p,d:f})}if(!i)return null;let s=Zn(o,i.q);return vn(o,s,i.seg[0]),vn(o,s,i.seg[1]),s}function yr(o,t,e){let n=o.pos[e],i=Oo(o,t.id,n);if(i===null)return!1;let s=o.pos[i],r=o.pos[o.adj[i][0].to],a=o.pos[o.adj[i][1].to],l=Math.hypot(a[0]-r[0],a[1]-r[1])||1,c=[(a[0]-r[0])/l,(a[1]-r[1])/l],d=(n[0]-s[0])*c[0]+(n[1]-s[1])*c[1],u=(n[1]-s[1])*c[0]-(n[0]-s[0])*c[1];if(Math.abs(d)<.01||Math.abs(u)<.01)return vn(o,e,i),!0;let h=[s[0]+c[0]*d,s[1]+c[1]*d],p=[s[0]-c[1]*u,s[1]+c[0]*u],f=Zn(o,U(p,t.points)||!U(h,t.points)?p:h);return vn(o,i,f),vn(o,f,e),!0}function To(o,t){let e=o.rooms.filter(s=>s.points.length>=3),n=e.find(s=>U(t,s.points));if(n)return n;let i=null;for(let s of e)for(let r of s.points){let a=Math.hypot(t[0]-r[0],t[1]-r[1]);(!i||a<i.d)&&(i={room:s,d:a})}return i?.room??null}function Vm(o,t){let e=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(e[t]=0;;){let s=-1;for(let r=0;r<e.length;r++)!i[r]&&e[r]<1/0&&(s<0||e[r]<e[s])&&(s=r);if(s<0)break;i[s]=!0;for(let{to:r,w:a}of o.adj[s])e[s]+a<e[r]-1e-9&&(e[r]=e[s]+a,n[r]=s)}return{dist:e,prev:n}}function Rm(o,t){return o.every(e=>t[e].kind==="battery")?"battery":o.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var Im=new WeakMap;function Iy(o,t){let e=Jl(o),n=o.floors.find(d=>d.id===e.floor_id),i=[],{wall_exterior:s,wall_interior:r}=o.settings,a=new Map,l=new Map;t.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,h=l.get(d.id),p=Rm(h,t);i.push({floorId:n.id,a:[e.x,$e,e.z],b:[e.x,u?n.height:-.2,e.z],dist:0,members:h,kind:p});let f=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[e.x,u?-.2:d.height,e.z],b:[e.x,$e,e.z],dist:f,members:h,kind:p}),a.set(d.id,f+.25)}for(let d of c){let u=Xl(d,s,r),h=To(d,[e.x,e.z]);if(!h)continue;let p=Zn(u,[e.x,e.z]);if(!yr(u,h,p))continue;let f=[];for(let x of l.get(d.id)){let w=t[x],E=To(d,[w.x,w.z]);if(!E)continue;let k=Zn(u,[w.x,w.z]);yr(u,E,k)&&f.push({node:k,member:x})}let{dist:b,prev:g}=Vm(u,p),_=new Map;for(let x of f)if(Number.isFinite(b[x.node]))for(let w=x.node;g[w]>=0;w=g[w]){let E=g[w],k=`${E}>${w}`,M=_.get(k)??{a:E,b:w,members:[]};M.members.push(x.member),_.set(k,M)}let v=a.get(d.id)??0;for(let{a:x,b:w,members:E}of _.values()){let k=u.pos[x],M=u.pos[w],F=Rm(E,t);i.push({floorId:d.id,a:[k[0],$e,k[1]],b:[M[0],$e,M[1]],dist:v+b[x],members:E,kind:F})}}return i}function Wm({building:o,consumers:t,summary:e,battery:n,fieldPower:i,devicePower:s}){let r=Jl(o);if(!r)return[];let a=o.floors.find(R=>R.id===r.floor_id);if(!a)return[];let l=R=>s?.get(R),c=_r(o,"inverter"),d=_r(o,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=R=>{let I=null;for(let z of c)z.floorId===R.floorId&&(!I||Math.hypot(z.x-R.x,z.z-R.z)<Math.hypot(I.x-R.x,I.z-R.z))&&(I=z);return I},h=(R,I)=>R.reduce((z,D)=>!z||Math.hypot(D.x-I.x,D.z-I.z)<Math.hypot(z.x-I.x,z.z-I.z)?D:z,null),p=R=>l(R.id)??(d.length===1?e.battery??0:0),f=new Map;for(let R of d){let I=u(R);I&&f.set(R.id,I)}let b=Tm(t),g=t.map((R,I)=>({floorId:R.floorId,x:R.x,z:R.z,kind:R.wallbox?"wallbox":"consumer",power:b[I],load:b[I]}));for(let R of d){if(f.has(R.id)||e.battery===null)continue;let I=p(R);g.push({floorId:R.floorId,x:R.x,z:R.z,kind:"battery",power:Math.abs(I),load:-I})}let _=`${r.floor_id}:${r.x},${r.z}|${g.map(R=>`${R.floorId}:${R.x},${R.z}:${R.kind}`).join(";")}`,v=Im.get(o);v||Im.set(o,v=new Map);let x=v.get(_);x||(x=Iy(o,g),v.clear(),v.set(_,x));let w=x.map(R=>({floorId:R.floorId,a:R.a,b:R.b,dist:R.dist,power:R.kind==="battery"?R.members.reduce((I,z)=>I+g[z].power,0):Math.max(0,R.members.reduce((I,z)=>I+g[z].load,0)),kind:R.kind})),E=e.grid!==null?Zl(o):null,k=o.settings.roof.cables??[],M=R=>k.find(I=>I.id===R),F=(R,I)=>R.map(z=>({...z,key:I}));if(E){let R=e.grid>=0,I=M("grid"),z=I?zo(o,I,[E.end[0],a.elevation+Math.max($e,E.height),E.end[1]],[r.x,a.elevation+.4+1.1,r.z]):[...E.height>.05?[[E.end[0],E.height,E.end[1]]]:[],[E.end[0],$e,E.end[1]],[E.wall[0],$e,E.wall[1]],[r.x,$e,r.z]],D=I?zi(o,R?z:[...z].reverse(),Math.abs(e.grid),R?"grid":"export",a):jm(a.id,R?z:[...z].reverse(),Math.abs(e.grid),R?"grid":"export",0);w.push(...F(D,"grid"))}if(e.battery!==null&&e.battery>0)for(let R of w)R.kind==="battery"&&([R.a,R.b]=[R.b,R.a]);let L=o.settings.roof.solar??[],C=o.settings.roof.strings??[],S=new Map;if(i&&L.length){let R=[...ut(o),...oe(o)];for(let I of L){let z=i.get(I.id)??0,D=I.string?C.find(B=>B.id===I.string)?.inverter:null,W=D?d.find(B=>B.id===D)??null:null,H=D&&!W?c.find(B=>B.id===D)??null:null;if(W){let B=f.get(W.id);B&&S.set(B.id,(S.get(B.id)??0)+z);let st=W.variant==="wall"?.5+W.h:.9,At=M(`solar:${I.id}`),Qt=At?zm(o,I):null,gt=o.floors.find(Ve=>Ve.id===W.floorId);At&&Qt&&gt?w.push(...F(zi(o,zo(o,At,Qt,[W.x,gt.elevation+st,W.z]),z,"solar",gt),`solar:${I.id}`)):w.push(...F(Om(o,I,z,W,st),`solar:${I.id}`));continue}if(!H&&c.length){let B=Kt(o,I,R),st=B?Pi(B,I):[I.u,I.v];H=c.reduce((At,Qt)=>!At||Math.hypot(Qt.x-st[0],Qt.z-st[1])<Math.hypot(At.x-st[0],At.z-st[1])?Qt:At,null)}H&&S.set(H.id,(S.get(H.id)??0)+z);let j=H??{floorId:r.floor_id,x:r.x,z:r.z},q=H?1.1+H.h:1.5,Y=M(`solar:${I.id}`),Q=Y?zm(o,I):null,Z=o.floors.find(B=>B.id===j.floorId);Y&&Q&&Z?w.push(...F(zi(o,zo(o,Y,Q,[j.x,Z.elevation+q,j.z]),z,"solar",Z),`solar:${I.id}`)):w.push(...F(Om(o,I,z,j,q),`solar:${I.id}`))}}let T=_r(o,"solar");for(let R of T){let I=Math.max(0,l(R.id)??(L.length?0:(e.solar??0)/T.length)),z=u(R),D=z?null:h(d.filter(j=>j.floorId===R.floorId),R);if(z)S.set(z.id,(S.get(z.id)??0)+I);else if(D&&f.get(D.id)){let j=f.get(D.id);S.set(j.id,(S.get(j.id)??0)+I)}let W=z??D??{floorId:r.floor_id,x:r.x,z:r.z,h:0,variant:null},H=z?1.1+z.h:D?D.variant==="wall"?.5+D.h:.9:1.5;w.push(...F(Yl(o,R,Math.min(.3,R.h),W,H,I,"solar",0),`solar:${R.id}`))}!(i&&L.length)&&e.solar!==null&&!c.length&&!T.length&&w.push({floorId:a.id,a:[r.x+.08,a.height+.6,r.z+.08],b:[r.x+.08,$e,r.z+.08],dist:0,power:e.solar,kind:"solar"});for(let R of c){let I=1.1+R.h,z=d.filter(H=>f.get(H.id)===R),D=l(R.id);if(D===void 0){D=S.get(R.id)??(c.length===1?e.solar??0:0);for(let H of z)D+=p(H)}let W=o.floors.find(H=>H.id===R.floorId);if(e.solar!==null||e.battery!==null){let H=M(`inv:${R.id}`),j=H&&W?zi(o,zo(o,H,[R.x,W.elevation+I,R.z],[r.x,a.elevation+1.5,r.z]),Math.max(0,D),"inverter",W):Yl(o,R,I,{floorId:r.floor_id,x:r.x,z:r.z},1.5,Math.max(0,D),"inverter",0);w.push(...F(j,`inv:${R.id}`))}for(let H of z){let j=p(H);if(e.battery===null&&l(H.id)===void 0)continue;let q=H.variant==="wall"?.5+H.h:.9,Y=M(`bat:${H.id}`),Q=Y&&W?zi(o,zo(o,Y,[R.x,W.elevation+I-.1,R.z],[H.x,W.elevation+q,H.z]),Math.abs(j),"battery",W):Yl(o,R,I-.1,H,q,Math.abs(j),"battery",0);w.push(...F(j<=0?Q:Q.map(Z=>({...Z,a:Z.b,b:Z.a})).reverse(),`bat:${H.id}`))}}return w}function Zl(o){let t=Jl(o),e=t?o.floors.find(p=>p.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:i}=o.settings,{walls:s}=$t(e.rooms,{exterior:n,interior:i},e.walls??[]),r=_r(o,"grid_point")[0],a=s.filter(p=>p.exterior);if(r){let p=null;for(let g of a){let _=g.b[0]-g.a[0],v=g.b[1]-g.a[1],x=r.x-t.x,w=r.z-t.z,E=x*v-w*_;if(Math.abs(E)<1e-9)continue;let k=((g.a[0]-t.x)*v-(g.a[1]-t.z)*_)/E,M=((g.a[0]-t.x)*w-(g.a[1]-t.z)*x)/E;if(k<=0||k>1||M<0||M>1||p&&k>=p.t)continue;let F=Math.hypot(_,v)||1;p={q:[t.x+x*k,t.z+w*k],out:[v/F,-_/F],t:k}}let f=p?[p.q[0]+p.out[0]*(n/2+.05),p.q[1]+p.out[1]*(n/2+.05)]:[t.x,t.z],b=o.floors.flatMap(g=>g.furniture).find(g=>g.id===r.id)?.mount_y??0;return{floorId:e.id,wall:f,end:[r.x,r.z],height:Math.max(0,b)}}let l=null;for(let p of a){let f=p.b[0]-p.a[0],b=p.b[1]-p.a[1],g=f*f+b*b||1,_=Math.min(1,Math.max(0,((t.x-p.a[0])*f+(t.z-p.a[1])*b)/g)),v=[p.a[0]+f*_,p.a[1]+b*_],x=Math.hypot(t.x-v[0],t.z-v[1]),w=Math.sqrt(g);(!l||x<l.d)&&(l={q:v,out:[b/w,-f/w],d:x})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let p of o.floors)for(let f of p.outdoor??[]){let b=f.points.length;for(let g=0;g<b;g++){let _=f.points[g],v=f.points[(g+1)%b],x=v[0]-_[0],w=v[1]-_[1],E=d[0]*w-d[1]*x;if(Math.abs(E)<1e-9)continue;let k=((_[0]-c[0])*w-(_[1]-c[1])*x)/E,M=((_[0]-c[0])*d[1]-(_[1]-c[1])*d[0])/E;k>0&&M>=0&&M<=1&&(u=Math.max(u,Math.min(15,k)))}}let h=u>n+1?u:n+2.5;return{floorId:e.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*h,c[1]+d[1]*h],height:0}}function _r(o,t){let e=[];for(let n of o.floors)for(let i of n.furniture)(xt(i.type)??i.type)===t&&e.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return e}var Am=new WeakMap;function Nm(o,t,e,n){let i=`${t.id}:${e.join(",")}>${n.join(",")}`,s=Am.get(o);s||Am.set(o,s=new Map);let r=s.get(i);if(r)return r;let{wall_exterior:a,wall_interior:l}=o.settings,c=Xl(t,a,l),d=[e,n],u=To(t,e),h=To(t,n);if(u&&h){let p=Zn(c,e),f=Zn(c,n);if(yr(c,u,p)&&yr(c,h,f)){let{dist:b,prev:g}=Vm(c,p);if(Number.isFinite(b[f])){d.length=0;for(let _=f;_>=0;_=g[_])d.unshift(c.pos[_])}}}return s.set(i,d),d}function Yl(o,t,e,n,i,s,r,a){let l=o.floors.find(u=>u.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let c=Nm(o,l,[t.x,t.z],[n.x,n.z]),d=[[t.x,e,t.z],...c.map(u=>[u[0],$e,u[1]]),[n.x,i,n.z]];return jm(l.id,d,s,r,a)}function jm(o,t,e,n,i){let s=[];for(let r=0;r+1<t.length;r++){let a=t[r],l=t[r+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(s.push({floorId:o,a,b:l,dist:i,power:e,kind:n}),i+=c)}return s}function zo(o,t,e,n){let s=(o.floors.find(r=>r.id===t.floor_id)?.elevation??0)+Math.max($e,t.height);return[e,...t.points.map(r=>[r[0],s,r[1]]),n]}function zm(o,t){let e=Kt(o,t,[...ut(o),...oe(o)]);if(!e)return null;let[n,i]=gn(e,t),s=t.u+n/2,r=e.unbounded?t.v+i/2:t.v;return[e.o[0]+e.eu[0]*s+e.es[0]*r,e.o[1]+e.eu[1]*s+e.es[1]*r,e.o[2]+e.eu[2]*s+e.es[2]*r]}function Ay(o,t,e){let{wall_exterior:n,wall_interior:i}=o.settings,s=Xl(t,n,i),r=To(t,e),a=r?Oo(s,r.id,e):null;return a===null?e:s.pos[a]}function zi(o,t,e,n,i){let s=[...o.floors].sort((c,d)=>c.elevation-d.elevation),r=c=>{let d=i;for(let u of s)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<t.length;c++){let d=t[c],u=t[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let p=[];if(Math.abs(u[1]-d[1])>.01){let f=Math.min(d[1],u[1]),b=Math.max(d[1],u[1]);for(let g of s)g.elevation>f+.01&&g.elevation<b-.01&&p.push(g.elevation);u[1]<d[1]&&p.reverse()}for(let f of[...p,u[1]]){let b=(f-d[1])/(u[1]-d[1]||1),g=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*b,f,d[2]+(u[2]-d[2])*b]:u,_=r((d[1]+g[1])/2),v=Math.hypot(g[0]-d[0],g[1]-d[1],g[2]-d[2]);v>1e-4&&a.push({floorId:_.id,a:[d[0],d[1]-_.elevation,d[2]],b:[g[0],g[1]-_.elevation,g[2]],dist:l,power:e,kind:n}),l+=v,d=g}}return a}function Om(o,t,e,n,i){let s=[...ut(o),...oe(o)],r=Kt(o,t,s),a=o.floors.find(g=>g.id===n.floorId);if(!r||!a)return[];let[l,c]=gn(r,t),d=(g,_)=>[r.o[0]+r.eu[0]*g+r.es[0]*_,r.o[1]+r.eu[1]*g+r.es[1]*_,r.o[2]+r.eu[2]*g+r.es[2]*_],u=t.u+l/2,h=a.elevation+$e,p=[],f;if(r.unbounded){let g=d(u,t.v+c/2);f=[g[0],h,g[2]],p.push(f)}else if(r.wall){let g=d(u,t.v);f=[g[0],h,g[2]],p.push(g,f)}else{let g=d(u,t.v),_=Eo(o)??a,v=Math.max(a.elevation+.5,Math.min(g[1]-.25,_.elevation+_.height-.12));f=[g[0],v,g[2]],p.push(g)}let b=Ay(o,a,[f[0],f[2]]);p.push([b[0],f[1],b[1]]),Math.abs(f[1]-h)>.05&&p.push([b[0],h,b[1]]);for(let g of Nm(o,a,b,[n.x,n.z]).slice(1))p.push([g[0],h,g[1]]);return p.push([n.x,a.elevation+i,n.z]),zi(o,p,e,"solar",a)}var Bm=(o,t)=>t.startsWith("sensor.")&&o.states[t]?.attributes.device_class==="energy";function Km(o,t,e){if(e==="none")return null;if(e)return e;let n=t.replace(/^sensor\./,"").replace(/_?power$/,""),i=`sensor.${n}_energy`;if(Bm(o,i))return i;let s=o.entities?.[t]?.device_id;if(!s)return null;let r=Object.keys(o.states).filter(a=>Bm(o,a)&&o.entities?.[a]?.device_id===s);return r.length===1?r[0]:r.find(a=>a.startsWith(`sensor.${n}_`))??null}var vr=class{cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(s=>[s.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=Wm({building:t,consumers:[],summary:n,fieldPower:e}).filter(s=>s.key)}catch{i=[]}return this.cableCache={doc:t,segs:i},i}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,i)=>e(n)-e(i)||n.localeCompare(i))}cableLabel(t){let e=a=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===a);return l?l.name||this.typeName(l.type):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>xt(a.type)==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[s,r]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(s==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(d=>d.id===r);return l<0&&this._doc.floors.some(d=>d.furniture.some(u=>u.id===r))?`${e(r)} \u2192 ${this.t("furn_inverter")}`:`${a[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return s==="inv"?`${e(r)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${e(r)}`}layCable(t){if(!this.isEditor||!this._floorId)return;let e=[];for(let s of this.cableSegments().filter(r=>r.key===t))for(let r of[s.a,s.b]){let a=[$(r[0]),$(r[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&e.push(a)}let n=e.length>2?e.slice(1,-1):e,i=this._floorId;this.change(s=>{s.settings.roof.cables=[...(s.settings.roof.cables??[]).filter(r=>r.id!==t),{id:t,floor_id:i,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){let t=this.cableSegments();if(!t.length)return y;let e=t.filter(r=>r.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,s=[...new Set(t.map(r=>r.key))];return A`<g class="fp3d-cable-layer">${s.map(r=>{let a=n.find(g=>g.id===r),l=`fp3d-cable fp3d-cable-${r.split(":")[0]}${a?" fp3d-cable-laid":""}${r===i?" fp3d-cable-sel":""}`,c=t.filter(g=>g.key===r),d=e.filter(g=>g.key===r).map(g=>{let _=this.toScreen([g.a[0],g.a[2]]),v=this.toScreen([g.b[0],g.b[2]]);return A`<line x1=${_[0]} y1=${_[1]} x2=${v[0]} y2=${v[1]} />`});if(!(a&&r===i&&a.floor_id===this._floorId&&!a.locked))return d.length?A`<g class=${l} data-cable=${r}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:y;let u=c[0],h=c[c.length-1],p=[this.toScreen([u.a[0],u.a[2]]),...a.points.map(g=>this.toScreen(g)),this.toScreen([h.b[0],h.b[2]])],f=p.slice(0,-1).map((g,_)=>A`<line class="fp3d-cable-piece" data-cable-line=${r} data-cable-seg=${_} x1=${g[0]} y1=${g[1]} x2=${p[_+1][0]} y2=${p[_+1][1]} />`),b=a.points.map((g,_)=>{let v=this.toScreen(g);return A`<g class="fp3d-vertex" data-cable-pt=${`${r}:${_}`}><circle cx=${v[0]} cy=${v[1]} r="16" class="fp3d-hit" /><circle cx=${v[0]} cy=${v[1]} r="6" /></g>`});return A`<g class=${l} data-cable=${r}>${d}${f}${b}</g>`})}</g>`}renderCableSettings(){let t=this.cableKeys();if(!t.length)return y;let e=this.isEditor,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(s=>s.id===this._cableId):void 0;return m`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(s=>m`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${s===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=s===this._cableId?null:s;let r=n.find(a=>a.id===s);this._cableId&&r&&this._doc.floors.some(a=>a.id===r.floor_id)&&(this._floorId=r.floor_id)}}
            >
              <span>${this.cableLabel(s)}${n.some(r=>r.id===s)?m` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:y}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?m`<div class="fp3d-actions">
              ${i?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(s=>{let r=s.settings.roof.cables?.find(a=>a.id===i.id);r&&(r.locked=!r.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.cables=(s.settings.roof.cables??[]).filter(r=>r.id!==this._cableId))}>${this.t("cable_auto")}</button>`:m`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?m`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,s=>this.change(r=>{let a=r.settings.roof.cables?.find(l=>l.id===i.id);a&&(a.height=Math.min(30,Math.max(0,$(s))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(s=>s.id===i.floor_id)?.name??""})}</p>`:y}`:y}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return y;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}",solar:"\u2600"},n=this._doc.settings.roof.hologram,i=n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return A`<g class="fp3d-energy-markers">${i?A`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:y}${t.furniture.filter(s=>Pe(s.type)).map(s=>{let[r,a]=this.toScreen([s.x,s.z]),l=s.id===this._furnitureId;return A`<g data-energy-device=${s.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${r} cy=${a} r="17" />
          <text x=${r} y=${a+6} class="fp3d-energy-icon">${e[xt(s.type)??s.type]??"\u26A1"}</text>
          ${l?A`<text x=${r} y=${a+32} class="fp3d-energy-name">${this.typeName(s.type)}</text>`:y}
          <title>${this.typeName(s.type)}</title>
        </g>`})}</g>`}renderEnergyPanel(){let t=this._solarId?this._doc.settings.roof.solar?.find(n=>n.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?this.floor?.furniture.find(n=>n.id===this._furnitureId&&Pe(n.type)):void 0;return e?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`:m`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderCableSettings()}
      ${this.renderSettingsLink("energy",null,"settings_moved_energy")}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isEditor,n=this._doc.settings.roof.hologram??ji,i=n.place==="free",s=l=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??ji,...l}),r=(l,c)=>l.name||`${this.t("solar_field")} ${c+1}`,a=()=>{let l=-1/0,c=1/0,d=-1/0;for(let h of this._doc.floors)for(let p of h.rooms)for(let[f,b]of p.points)l=Math.max(l,f),c=Math.min(c,b),d=Math.max(d,b);let u=Number.isFinite(l);s({place:"free",x:n.x??(u?$(l+2):0),z:n.z??(u?$((c+d)/2):0),height:n.height??3})};return m`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!e} @change=${l=>l.target.value==="free"?a():s({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?m`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>s({x:$(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>s({z:$(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>s({height:Math.min(60,Math.max(0,$(l)))}),.25,0)}`:t.length?m`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>s({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,c)=>m`<option value=${l.id} ?selected=${l.id===n.field}>${r(l,c)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>s({right:Math.min(30,Math.max(-30,$(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>s({up:Math.min(30,Math.max(-30,$(l)))}),.25)}`:m`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>s({size:Math.min(3,Math.max(.3,$(l)))}),.1,.3)}
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
    </section>`}isPowerSensor(t){if(!Rt(t))return!1;let e=this.hass?.states[t]?.attributes;return e?.device_class==="power"||e?.unit_of_measurement==="W"||e?.unit_of_measurement==="kW"}typeName(t){let e=mt(t);return e?Ot(e,this.hass?.language??"en"):this.t(`furn_${t}`)}devicePower(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}renderEnergyChecklist(){let t=this._doc,e=this.hass?Ce(this.hass,t.floors):new Map,n=t.floors.flatMap(g=>g.furniture.map(_=>({m:_,fl:g}))),i=g=>n.filter(_=>(xt(_.m.type)??_.m.type)===g),s=g=>{this._floorId=g.fl.id,this._solarId=null,this.selectItem("furniture",g.m.id),this.showPoint(g.m.x,g.m.z)},r=t.settings.roof.solar??[],a=i("meter"),l=i("inverter"),c=i("home_battery"),d=i("grid_point"),u=!!t.energy.grid||a.some(g=>this.devicePower(g.m,e)),h=!!t.energy.solar||l.length>0&&l.every(g=>this.devicePower(g.m,e)),p=c.every(g=>this.devicePower(g.m,e)&&g.m.soc&&g.m.soc!=="none")||!!t.energy.battery,f=[{state:r.length?"ok":"todo",label:this.t(r.length?"chk_solar":"chk_solar_add"),action:r.length?()=>this._solarId=r[0].id:()=>this.addSolarField()},a.length?{state:u?"ok":"todo",label:this.t(u?"chk_meter":"chk_meter_sensor"),action:()=>s(a[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:h?"ok":"todo",label:this.t(h?"chk_inverter":"chk_inverter_sensor"),action:()=>s(l.find(g=>!this.devicePower(g.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:p?"ok":"todo",label:this.t(p?"chk_battery":"chk_battery_sensor"),action:()=>s(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>s(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")}],b=f.filter(g=>g.state==="ok").length;return m`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${b}/${f.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${f.map(g=>g.href?m`<a class="fp3d-chk fp3d-chk-${g.state}" href=${g.href} target="_blank" rel="noopener"><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</a>`:m`<button class="fp3d-chk fp3d-chk-${g.state}" ?disabled=${!this.isEditor&&!!g.action&&g.state!=="ok"} @click=${g.action}><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</button>`)}
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isEditor)return;if(t==="grid_point"){let v=Zl(this._doc),[x,w,E]=yt(t),[k,M]=v?v.end:this.toWorld(this._size.w/2,this._size.h/2),F={id:N("furniture"),type:t,x:$(k),z:$(M),rotation:0,w:x,d:w,h:E,variant:null};this.change((L,C)=>C.furniture.push(F)),this.selectItem("furniture",F.id),this.showPoint(F.x,F.z);return}let n=v=>`${v.name} ${v.area_id&&this.hass?.areas?.[v.area_id]?.name||""} ${v.area_id??""}`.toLowerCase(),i=e.rooms.filter(v=>v.points.length>=3),s=v=>i.find(x=>v.test(n(x))),r=i.find(v=>e.furniture.some(x=>x.type==="parking"&&U([x.x,x.z],v.points))),a=s(/garage|carport/)??r,l=s(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=s(/flur|diele|eingang|hall|entr|lobby/),d=(t==="wallbox"?a:t==="meter"?l??c??a:l??a)??this.room??i.sort((v,x)=>Math.abs(Lt(x.points))-Math.abs(Lt(v.points)))[0],[u,h,p]=yt(t),[f,b]=d?Gt(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[v,x]=Gt(d.points),w=null,E=new Set(e.openings.filter(F=>F.room_id===d.id).map(F=>F.edge)),k=d.points.some((F,L)=>!E.has(L));d.points.forEach((F,L)=>{if(k&&E.has(L))return;let C=d.points[(L+1)%d.points.length],S=Math.hypot(C[0]-F[0],C[1]-F[1]);if(w&&S<=w.l)return;let T=(F[0]+C[0])/2,R=(F[1]+C[1])/2,I=-(C[1]-F[1])/S,z=(C[0]-F[0])/S;(v-T)*I+(x-R)*z<0&&([I,z]=[-I,-z]),w={mx:T,mz:R,nx:I,nz:z,l:S}});let M=w;M&&([f,b]=[M.mx+M.nx*(h/2+.25),M.mz+M.nz*(h/2+.25)])}let g={id:N("furniture"),type:t,x:$(f),z:$(b),rotation:0,w:u,d:h,h:p,variant:null},_=d?Wn({...e,furniture:[...e.furniture,g]},g,this._doc.settings.wall_interior):null;_&&Object.assign(g,{x:$(_.x),z:$(_.z),rotation:_.rotation}),this.change((v,x)=>x.furniture.push(g)),this.selectItem("furniture",g.id),this.showPoint(g.x,g.z)}renderEnergyDevices(){let t=this.isEditor,e=this._doc.floors.flatMap(n=>n.furniture.filter(i=>Pe(i.type)).map(i=>({fl:n,m:i})));return m`<section>
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
          </div>`:y}
      <div class="fp3d-actions">
        ${ci.map(n=>m`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return y;let[n,i]=this.toScreen([e.x,e.z]);return A`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}circuitSelect(t,e,n){let i=this.entityOptions(s=>this.isPowerSensor(s)).filter(s=>s.id!==e);return m`${this.entitySelect(this.t("energy_circuit"),t??"none",void 0,i,s=>n(s&&s!=="none"?s:null))}
      <p class="fp3d-sub fp3d-wide">${this.t("energy_circuit_hint")}</p>
      ${t?y:m`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("energy_circuit_unset")}</p>`}`}wireEnergySelect(t,e,n){let i=this.entityOptions(r=>r.startsWith("sensor.")&&this.hass?.states[r]?.attributes.device_class==="energy"),s=this.hass?Km(this.hass,e):null;return m`${this.entitySelect(this.t("energy_wire_sensor"),t,s,i,n)}
      <p class="fp3d-sub fp3d-wide">${this.t("energy_wire_sensor_hint")}</p>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=Cm(this.hass,t),n=0,i=a=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===a),s=(a,l,c)=>{if(!c)return;let d=i(a);if(!d&&this.floor&&(this.addEnergyDevice(a),d=i(a)),!d||d[l]&&d[l]!=="none")return;let u=d.id;this.change(h=>{let p=h.floors.flatMap(f=>f.furniture).find(f=>f.id===u);p&&(p[l]=c)}),n++};s("meter","power",e.grid),s("inverter","power",e.solar),s("home_battery","power",e.battery),s("home_battery","soc",e.battery_soc);let r=Lm(t);for(let a of["gas","water"])r[a]&&!this._doc.energy[a]&&(this.setEnergy({[a]:r[a]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isEditor,n=(g,_)=>this.hass?.states[g]?.attributes[_],i=this.entityOptions(g=>this.isPowerSensor(g)),s=this.entityOptions(g=>Rt(g)&&n(g,"device_class")==="battery"),r=this.entityOptions(g=>Rt(g)&&(n(g,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(g,"unit_of_measurement")??""))),a=this.entityOptions(g=>/^(binary_sensor|schedule|input_boolean|switch)\./.test(g)),l=g=>_=>this.setEnergy({[g]:_==="none"?null:_}),c=g=>this.entityOptions(_=>Rt(_)&&(n(_,"device_class")===g||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??"")),g),d=this.hass?Ce(this.hass,this._doc.floors):new Map,u=Ql(this._doc,g=>this.devicePower(g,d)),h=this.hass?Dm(this.hass,this._doc,[],u):null,p=!!h&&(h.solar??0)<20,f=p&&h.grid!==null&&h.grid<-50,b=p&&h.battery!==null&&h.battery<-50&&(h.grid??0)<=0;return m`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${f?m`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      ${b?m`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,u.grid,i,l("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${g=>this.setEnergy({grid_invert:g.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,u.solar[0]??null,i,l("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,u.battery[0]??null,i,l("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${g=>this.setEnergy({battery_invert:g.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,u.soc[0]??null,s,l("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,i,l("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,r,l("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),t.gas??null,void 0,c("gas"),g=>this.setEnergy({gas:g==="none"?null:g}))}
        ${this.entitySelect(this.t("energy_water_meter"),t.water??null,void 0,c("water"),g=>this.setEnergy({water:g==="none"?null:g}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_cheap_rate"),t.cheap_rate??null,void 0,a,g=>this.setEnergy({cheap_rate:g==="none"?null:g}))}
        <label class="fp3d-field"
          >${this.t("energy_cheap_from")}
          <input type="time" .value=${t.cheap_from??""} ?disabled=${!e} @change=${g=>this.setEnergy({cheap_from:g.target.value||null})}
        /></label>
        <label class="fp3d-field"
          >${this.t("energy_cheap_to")}
          <input type="time" .value=${t.cheap_to??""} ?disabled=${!e} @change=${g=>this.setEnergy({cheap_to:g.target.value||null})}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("energy_cheap_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!e||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?m`<p class="fp3d-sub">${this._energyNote}</p>`:y}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}};var ti=null,xr=class{fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(i=>i.id===n);case"opening":return t.openings.find(i=>i.id===n);case"furniture":return t.furniture.find(i=>i.id===n);case"device":return t.placements.find(i=>i.entity_id===n);case"wall":return(t.walls??[]).find(i=>i.id===n);case"outdoor":return t.outdoor.find(i=>i.id===n)}}isFixedItem(t,e){return ns(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isEditor||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((i,s)=>{let r=this.fixItem(s,t,e);r&&(r.locked=n)})}toggleLockPlan(){this.isEditor&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}async confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||await this.ask(this.t("fixed_delete_confirm"))}ask(t,e=this.t("delete"),n=!0){return _i(t,{ok:e,cancel:this.t("cancel"),danger:n})}tell(t){return Cp(t,{ok:this.t("ask_ok")})}pickItem(t,e,n){return!this.floor||t.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]")?null:this.itemHits(t,e,n)[0]??t.closest("[data-furniture]")?.getAttribute("data-furniture")??null}itemHits(t,e,n){if(!this.floor||t.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]"))return[];let i=this._hiddenItems;return ld(this.floor.furniture,e,this._view.scale,aa(n),i.length?s=>i.includes(s.id):void 0)}firmItemAt(t,e){let n=this._hiddenItems;return(this.floor?.furniture??[]).some(i=>!n.includes(i.id)&&dd(i,t,this._view.scale,aa(e)))}toggleItemHidden(t){let e=this._hiddenItems;this._hiddenItems=e.includes(t)?e.filter(n=>n!==t):[...e,t],this._hiddenItems.includes(t)&&this.selection().includes(t)&&this.selectItem("room",this._roomId)}tabItems(){let t=this.floor,e=this.furnitureItem;if(!t||!e)return[];let n=t.furniture.filter(s=>!this._hiddenItems.includes(s.id)),i=pi(t.rooms,n);for(let s of i.values())if(s.some(r=>r.id===e.id))return s.map(r=>r.id);return n.map(s=>s.id)}selectFromList(t){let e=this.floor?.furniture.find(n=>n.id===t);e&&(this.selectItem("furniture",t),this._single=!!e.group,this.showPoint(e.x,e.z))}async deleteFromList(t){this.floor?.furniture.some(e=>e.id===t)&&(this.selectItem("furniture",t),this._single=!0,await this.deleteFurniture())}openContext(t,e,n="mouse"){if(!this.isEditor||!this.floor)return;let i=this.toWorld(...e),s=b=>t.closest(`[${b}]`)?.getAttribute(b)??null,r=null,a=s("data-device"),l=s("data-opening"),c=this.pickItem(t,i,n),d=s("data-free-wall"),u=s("data-outdoor")?this.outdoorAt(i)??s("data-outdoor"):null,h=s("data-room")??this.roomAt(i);if(a?r=["device",a]:l?r=["opening",l]:c?r=["furniture",c]:d?r=["wall",d]:u&&!h?r=["outdoor",u]:h&&(r=["room",h]),!r){this._ctx=null;return}let[p,f]=r;this.selectItem(p,f),(p==="opening"||p==="furniture")&&(this._roomId=this._roomId??h),this._ctx={x:e[0],y:e[1],kind:p,id:f}}async deleteItem(t,e){if(t==="device"){if(!await this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return y;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(t.x,(n?.clientWidth??800)-190)),s=Math.max(4,Math.min(t.y,(n?.clientHeight??600)-190)),r=a=>()=>{this._ctx=null,a()};return m`<div class="fp3d-ctx" style=${`left:${i}px;top:${s}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${r(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${r(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?m`<button @click=${r(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:y}
      ${t.kind==="room"&&ti?m`<button title=${Dt(this.t("paste_items"),["Ctrl+V"])} @click=${r(()=>this.pasteClipboard())}>⎘ ${this.t("paste_items_n",{n:ti.items.length})}</button>`:y}
      ${t.kind==="furniture"?m`<button title=${Dt(this.t("duplicate"),["Ctrl+D"])} @click=${r(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button title=${Dt(this.t("copy_items"),["Ctrl+C"])} @click=${r(()=>this.copySelection())}>⎘ ${this.t("copy_items")}</button>
            <button ?disabled=${e} title=${Dt(this.t("ctx_rotate"),["R"])} @click=${r(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${r(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${r(()=>{let a=this.floor?.furniture.find(l=>l.id===t.id);a&&this.openWallViewFor(a)})}>▦ ${this.t("wall_view")}</button>`:y}
      <button class="fp3d-ctx-danger" @click=${r(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isEditor)return y;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?m`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:y;let n=this.isFixedItem(t,e);return m`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){if(this._notice=null,this._kerbPick=!1,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._multi=[],this._single=!1,this._deviceId=t==="device"?e:null,t==="device"&&e){let n=this.floor?.placements.find(i=>i.entity_id===e);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}copySelection(){let t=this.floor,e=t&&this._furnitureId?Tu(t,this.selection()):null;return e?(ti=e,this.requestUpdate(),!0):!1}pasteClipboard(){let t=this.floor;if(!ti||!t||!this.isEditor)return!1;let e=Lu(ti,t.id,N);this.change((i,s)=>s.furniture.push(...e)),this.setMulti(e.map(i=>i.id));let n=this.furnitureItem;return n&&(this._roomId=this.roomAt([n.x,n.z])??this._roomId),!0}selectAll(){let t=this.floor?.furniture??[];return t.length?(this.setMulti(t.map(e=>e.id)),!0):!1}renderClipButtons(){return m`<button class="fp3d-btn" title=${Dt(this.t("duplicate"),["Ctrl+D"])} @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
      <button class="fp3d-btn" title=${Dt(this.t("help_key_copy"),["Ctrl+C"])} @click=${()=>this.copySelection()}>${this.t("copy_items")}</button>
      ${this.renderPasteButton()}`}renderPasteButton(){return!ti||!this.isEditor?y:m`<button class="fp3d-btn" title=${Dt(this.t("help_key_paste"),["Ctrl+V"])} @click=${()=>this.pasteClipboard()}>${this.t("paste_items_n",{n:ti.items.length})}</button>`}selection(){if(this._multi.length)return this._multi;let t=this.furnitureItem;return t?t.group&&!this._single?(this.floor?.furniture??[]).filter(e=>e.group===t.group).map(e=>e.id):[t.id]:[]}withGroups(t){let e=new Set((this.floor?.furniture??[]).filter(n=>t.includes(n.id)&&n.group).map(n=>n.group));return[...new Set([...t,...(this.floor?.furniture??[]).filter(n=>n.group&&e.has(n.group)).map(n=>n.id)])]}setMulti(t){if(!t.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",t[0]);let e=this.selection();t.length>1&&!(t.length===e.length&&t.every(n=>e.includes(n)))&&(this._multi=t)}toggleMulti(t){let e=this._furnitureId?this.selection():[],n=this.withGroups([t]),i=e.includes(t)?e.filter(s=>!n.includes(s)):[...new Set([...e,...n])];this.setMulti(i)}selectionCentre(t){let e=(this.floor?.furniture??[]).filter(s=>t.includes(s.id)),n=e.map(s=>s.x),i=e.map(s=>s.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(t){let e=this.selection();if(e.some(c=>this.isFixedItem("furniture",c))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(e),s=t*Math.PI/180,r=Math.round(Math.cos(s)*1e6)/1e6,a=Math.round(Math.sin(s)*1e6)/1e6,l=new Set(e);this.change((c,d)=>{for(let u of d.furniture){if(!l.has(u.id))continue;let h=u.x-n,p=u.z-i;Object.assign(u,{x:$(n+h*r-p*a),z:$(i+h*a+p*r),rotation:((u.rotation+t)%360+360)%360})}})}groupSelection(){let t=new Set(this.selection());if(t.size<2)return;let e=N("block");this.change((n,i)=>{for(let s of i.furniture)t.has(s.id)&&(s.group=e)}),this._multi=[],this._single=!1}ungroupSelection(){let t=this.selection(),e=new Set(t);this.change((n,i)=>{for(let s of i.furniture)e.has(s.id)&&(s.group=null)}),t.length>1&&(this._multi=t)}lockSelection(t){let e=new Set(this.selection());this.change((n,i)=>{for(let s of i.furniture)e.has(s.id)&&(s.locked=t||null)})}deleteSelected(){this._roofWinId&&this._tool==="roof"?this.deleteRoofWindow():this._solarId&&this.houseTool?this.deleteSolar():this._roofId&&this._tool==="roof"?this.deleteRoofSection():this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null&&!this.houseTool?this.deleteVertex(this._vertex):(this._tool==="select"||this._tool==="furniture")&&this.deleteRoom()}clearToolSelection(){this._openingId=null,this._furnitureId=null,this._deviceId=null,this._outdoorId=null,this._wallId=null,this._vertex=null,this._multi=[],this._single=!1,this._roofId=null,this._solarId=null,this._roofWinId=null,this._cableId=null,this._solarPick=!1,this._edgeHi=null}renderSelectionFrame(t,e){let n=this.drag,i=n?.kind==="marquee"?A`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[0]))} y=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:y;if(e.length<2)return i;let s=t.furniture.filter(u=>e.includes(u.id)).flatMap(u=>Bt(u));if(!s.length)return i;let[r,a]=this.toScreen([Math.min(...s.map(u=>u[0])),Math.min(...s.map(u=>u[1]))]),[l,c]=this.toScreen([Math.max(...s.map(u=>u[0])),Math.max(...s.map(u=>u[1]))]),d=!this._multi.length;return A`${i}<g class=${`fp3d-selframe${d?" fp3d-selframe-block":""}`}>
      <rect x=${r-6} y=${a-6} width=${l-r+12} height=${c-a+12} rx="6" />
      <text x=${r-4} y=${a-12}>${d?`\u25A3 ${this.t("block_title")} \xB7 ${e.length}`:this.t("multi_title",{n:e.length})}</text>
    </g>`}renderBlockForm(){let t=this.selection(),e=(this.floor?.furniture??[]).filter(r=>t.includes(r.id)),n=!this._multi.length&&!!e[0]?.group,i=e.every(r=>this.isFixedItem("furniture",r.id)),s=!i&&e.some(r=>this.isFixedItem("furniture",r.id));return m`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</h3></div>
      <p class="fp3d-sub">${this.t(n?"block_hint":"multi_hint")}</p>
      ${s?m`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:y}
      <div class="fp3d-block-parts">
        ${e.map(r=>m`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",r.id),this._single=!!r.group}}>${r.name||pt(this.hass,r.type)}</button>`)}
      </div>
      ${this._doc.floors.length>1?m`<div class="fp3d-form">${this.renderItemFloor()}</div>`:y}
      <div class="fp3d-actions">
        ${n?m`<button class="fp3d-btn" @click=${()=>this.ungroupSelection()}>${this.t("block_break")}</button>`:m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" title=${Dt(this.t("rotate_left"),["Shift+R"])} @click=${()=>this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" title=${Dt(this.t("rotate_right"),["R"])} @click=${()=>this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        ${this.renderClipButtons()}
        <button class="fp3d-btn ${s?"fp3d-primary":""}" title=${Dt(this.t(i||s?"unfix":"fix"),["L"])} @click=${()=>this.lockSelection(!i&&!s)}>${i?`\u{1F513} ${this.t("unfix")}`:s?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" title=${Dt(this.t("delete"),["Del"])} @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`}renderMultiToggle(){return m`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${t=>this._multiMode=t.target.checked} /> ${this.t("multi_mode")}</label>`}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}};var tc=.3,Um=.01;function Gm(o,t,e){let n=ee(o,t,e);return n?[le(n.room,n.edge,o.offset-o.width/2),le(n.room,n.edge,o.offset+o.width/2)]:null}function ec(o,t){let[e,n]=o,i=Math.hypot(n[0]-e[0],n[1]-e[1])||1,s=(n[0]-e[0])/i,r=(n[1]-e[1])/i,a=t[0]-e[0],l=t[1]-e[1];return{s:a*s+l*r,d:Math.abs(a*-r+l*s),len:i}}function zy(o,t,e,n){for(let i of t){let s=Gm(i,e,n);if(!s)continue;let r=ec(o,s[0]),a=ec(o,s[1]);if(r.d>tc||a.d>tc)continue;let l=Math.min(r.s,a.s),c=Math.max(r.s,a.s);if(l<r.len-Um&&c>Um)return i}return null}function qm(o,t,e,n,i){let s=zy(t,e,n,i);if(!s)return null;let r=Gm(s,n,i),a=ec(r,o);return a.s>=0&&a.s<=a.len&&a.d<=tc?{select:s}:{blocked:s}}function Ym(o,t,e){let n=o.points[t],i=o.points[(t+1)%o.points.length],s=(Math.atan2(n[0]-i[0],-(n[1]-i[1]))*180/Math.PI-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(s/45)%8]}function Oy(o,t){return t.rooms.some(e=>e.points.length>=3)?Xs(t.rooms,t.walls??[],o.settings.wall_exterior,o.settings.wall_interior):null}function Ty(o,t){if(o.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Oy(o,t);return!!e&&e.some(([n,i])=>ma(n,i)-t.elevation>-.15)}function Ly(o,t,e,n,i){return!e||!Ty(o,t)?!1:n<Math.min(t.height,ma(i[0],i[1])-t.elevation)-.05}function Qm(o,t,e){if(e.type!=="window")return!1;let n=ee(e,t.rooms,t.walls??[]);if(!n)return!1;let i=$t(t.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},t.walls??[]).walls,s=Yi(i,e,n);if(!s)return!1;let{wall:r,s:a}=s,l=Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1]),c=l>1e-9?[(r.b[0]-r.a[0])/l,(r.b[1]-r.a[1])/l]:[1,0],d=Math.min(Math.min(t.height,r.height??t.height)-.02,e.sill+e.height),u=Math.max(0,Math.min(e.sill,d-.1));return Ly(o,t,r.exterior,u,[r.a[0]+c[0]*a,r.a[1]+c[1]*a])}var wr=class{offsetOnEdge(t,e,n,i,s){let r=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-r[0],a[1]-r[1])||1,c=((n[0]-r[0])*(a[0]-r[0])+(n[1]-r[1])*(a[1]-r[1]))/l,d=s?.01:this._doc.settings.grid;return this.clampOffset(t,e,i,Math.round(c/d)*d)}clampOffset(t,e,n,i){let s=t.points[e],r=t.points[(e+1)%t.points.length],a=Math.hypot(r[0]-s[0],r[1]-s[1])||1,l=this.floor,c=this._doc.settings,[d,u]=l?Eu($t(l.rooms,{exterior:c.wall_exterior,interior:c.wall_interior},l.walls??[]).walls,t,e):[0,0],h=Math.min(n,a+d+u)/2;return $(Math.min(a,a+u-h,Math.max(0,h-d,i)))}pressOpening(t,e){this.selectItem("opening",t),this.drag=this.isEditor?{kind:"opening",id:t,startScreen:e,base:this._doc,moved:!1}:{kind:"pan",last:e}}planOpening(t,e,n=!1){let i=this.floor;if(!i||!this.isEditor)return null;let s=null;for(let w of i.walls??[]){let E=ee({room_id:"",edge:0,wall:w.id},i.rooms,i.walls??[]);if(!E)continue;let[k,M]=this.toScreen(w.a),[F,L]=this.toScreen(w.b),C=(F-k)**2+(L-M)**2||1,S=Math.min(1,Math.max(0,((e[0]-k)*(F-k)+(e[1]-M)*(L-M))/C)),T=Math.hypot(e[0]-k-(F-k)*S,e[1]-M-(L-M)*S),R=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],I=i.rooms.find(z=>z.points.length>=3&&U(R,z.points));T<Vn*2.2&&(!s||T-1<s.d)&&(s={room:E.room,edge:0,d:T-1,wall:w.id,roomId:I?.id??w.id})}for(let w of i.rooms)for(let E=0;E<w.points.length;E++){let[k,M]=this.toScreen(w.points[E]),[F,L]=this.toScreen(w.points[(E+1)%w.points.length]),C=(F-k)**2+(L-M)**2||1,S=Math.min(1,Math.max(0,((e[0]-k)*(F-k)+(e[1]-M)*(L-M))/C)),T=Math.hypot(e[0]-k-(F-k)*S,e[1]-M-(L-M)*S),R=T-(w.id===this._roomId?.5:0);T<Vn*2.2&&(!s||R<s.d)&&(s={room:w,edge:E,d:R})}if(!s)return null;let{room:r,edge:a,wall:l}=s,c=r.points[a],d=r.points[(a+1)%r.points.length],u=Math.hypot(d[0]-c[0],d[1]-c[1]),h=ds[t],p=h.type,f=$(Math.min(h.width,Math.max(.3,u-.1))),b=this.toWorld(...e),g=this.snapOnEdge(r,a,b,f,Gs(i,{id:"",room_id:s.roomId??r.id,edge:a,wall:l}),n),_=[le(r,a,g-f/2),le(r,a,g+f/2)],v=qm(b,_,i.openings,i.rooms,i.walls??[]);return v||{add:{id:N("opening"),room_id:s.roomId??r.id,edge:a,...l?{wall:l}:{},offset:g,width:f,type:p,sill:h.sill,height:h.height,..."style"in h&&t!=="door"?{style:h.style}:{},hinge:"left",leaves:h.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null}}}hoverOpening(t,e,n=!1){let i=t?.closest?.("[data-opening]")?.getAttribute("data-opening"),s=i?this.floor?.openings.find(l=>l.id===i):void 0,r=s?{select:s}:this.planOpening(this._openingPreset,e,n);(!r||!("add"in r))&&this.showGuides([]);let a=r?this.openingHint(r):null;a!==this._openingHover&&(this._openingHover=a)}placeOpening(t,e,n=!1){let i=this.planOpening(t,e,n);if(this.showGuides([]),!i)return!1;if("select"in i)this.pressOpening(i.select.id,e);else if("blocked"in i)this._openingNote=this.openingHint(i);else{let s=i.add;this.change((r,a)=>a.openings.push(s)),this.selectItem("opening",s.id)}return!0}openingHint(t){let e=n=>this.t(`preset_${Ui(n)}`);return"add"in t?this.t("hint_opening_add",{kind:e(t.add)}):"select"in t?this.t("hint_opening_select",{kind:e(t.select)}):this.t("opening_overlap",{kind:e(t.blocked)})}setOpeningPreset(t,e){let n=ds[e],i=Ui(t)===e,s="style"in n?n.style:null,r=this.floor,a=r?ee(t,r.rooms,r.walls??[]):null,l={};if(!i){let c=n.width;if(a){let d=a.room.points[a.edge],u=a.room.points[(a.edge+1)%a.room.points.length];c=$(Math.min(n.width,Math.max(.3,Math.hypot(u[0]-d[0],u[1]-d[1])-.1)))}l={width:c,...a?{offset:this.clampOffset(a.room,a.edge,c,t.offset)}:{}}}this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:s,...l})}updateOpening(t){let e=this._openingId;this.change((n,i)=>Yt(i.openings.find(s=>s.id===e),t))}async deleteOpening(){let t=this._openingId;!t||!this.isEditor||!await this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}snapOnEdge(t,e,n,i,s,r){if(!r){let a=t.points[e],l=t.points[(e+1)%t.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1,d=((n[0]-a[0])*(l[0]-a[0])+(n[1]-a[1])*(l[1]-a[1]))/c,u=Cf(d,i,c,s,Fi(this._view.scale));if(u){let h=this.clampOffset(t,e,i,$(u.offset));if(Math.abs(h-u.offset)<.002)return this.showGuides(Hf(a,l,u,14/this._view.scale)),h}}return this.showGuides([]),this.offsetOnEdge(t,e,n,i,r)}renderOpenings(t,e){return A`<g>${t.openings.map(n=>{let i=ee(n,t.rooms,t.walls??[]);if(!i)return y;let{room:s,edge:r}=i,a=Yi(e,n,i),l=le(s,r,n.offset-n.width/2),c=le(s,r,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),u=(c[1]-l[1])/(n.width||1),h=Lt(s.points)>=0?1:-1,p=[-u*h,d*h],f=[.06,.06];a&&(f=a.wall.free||a.wall.roomLeft===s.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let b=(L,C)=>this.toScreen([L[0]+p[0]*C,L[1]+p[1]*C]),g=[b(l,f[0]+.01),b(c,f[0]+.01),b(c,-f[1]-.01),b(l,-f[1]-.01)],_=n.id===this._openingId,v=cs(n,a?.wall.exterior??!1),x=n.type==="door"&&wa(v),w=`fp3d-open fp3d-open-${n.type}${x?" fp3d-open-front":""}${_?" fp3d-open-sel":""}`,E;if(n.type==="garage"){let L=b(l,f[0]-.04),C=b(c,f[0]-.04),S=b(l,f[0]+Math.min(2,n.height)),T=b(c,f[0]+Math.min(2,n.height));E=A`<line x1=${L[0]} y1=${L[1]} x2=${C[0]} y2=${C[1]} />
          ${_?A`<path class="fp3d-open-track" d="M${L[0]} ${L[1]}L${S[0]} ${S[1]}M${C[0]} ${C[1]}L${T[0]} ${T[1]}"><title>${this.t("help_legend_track")}</title></path>`:y}`}else if(n.type==="door"){let L=n.swing==="out",C=L?-f[1]:f[0],S=n.hinge==="left"==h>0,T=n.leaves===2,R=l,I=c,z=[],D=bu(n.width,v,S,n);if(D){let Q=Z=>Z<=.02?l:Z>=n.width-.02?c:le(s,r,n.offset-n.width/2+Z);R=Q(D.x0),I=Q(D.x1),z=D.panels.map(([Z,B])=>[Q(Z),Q(B)])}let W=[(R[0]+I[0])/2,(R[1]+I[1])/2],H=(T?.5:1)*Math.hypot(I[0]-R[0],I[1]-R[1]),j=(f[0]-f[1])/2,q=z.map(([Q,Z])=>{let B=b(Q,j+.035),st=b(Z,j+.035),At=b(Q,j-.035),Qt=b(Z,j-.035);return A`<line class="fp3d-open-pane" x1=${B[0]} y1=${B[1]} x2=${st[0]} y2=${st[1]} /><line class="fp3d-open-pane" x1=${At[0]} y1=${At[1]} x2=${Qt[0]} y2=${Qt[1]} />`}),Y=(Q,Z)=>{let[B,st]=b(Q,C),[At,Qt]=b(Z,C),gt=b(Q,C+(L?-H:H)),Ve=H*this._view.scale,J=(gt[0]-B)*(Qt-st)-(gt[1]-st)*(At-B);return A`<line class="fp3d-open-leaf" x1=${B} y1=${st} x2=${gt[0]} y2=${gt[1]} />${_?A`<path class="fp3d-open-swing" d="M${gt[0]} ${gt[1]}A${Ve} ${Ve} 0 0 ${J>0?1:0} ${At} ${Qt}"><title>${this.t("help_legend_swing")}</title></path>`:y}`};E=A`${q}${v==="passage"?A`<line class="fp3d-open-passage" x1=${b(l,j)[0]} y1=${b(l,j)[1]} x2=${b(c,j)[0]} y2=${b(c,j)[1]} />`:v==="sliding"?A`<line x1=${b(R,C)[0]} y1=${b(R,C)[1]} x2=${b(I,C)[0]} y2=${b(I,C)[1]} />`:T?A`${Y(R,W)}${Y(I,W)}`:Y(S?R:I,S?I:R)}`}else{let L=(f[0]-f[1])/2,C=b(l,L+.035),S=b(c,L+.035),T=b(l,L-.035),R=b(c,L-.035),I=[(l[0]+c[0])/2,(l[1]+c[1])/2],z=b(I,f[0]),D=b(I,-f[1]);E=A`<line x1=${C[0]} y1=${C[1]} x2=${S[0]} y2=${S[1]} /><line x1=${T[0]} y1=${T[1]} x2=${R[0]} y2=${R[1]} />${n.leaves===2?A`<line x1=${z[0]} y1=${z[1]} x2=${D[0]} y2=${D[1]} />`:y}`}let k=b(l,(f[0]-f[1])/2),M=b(c,(f[0]-f[1])/2),F=y;if(_){let L=[l[0]-d*.08,l[1]-u*.08],C=[c[0]+d*.08,c[1]+u*.08],S=[b(L,f[0]+.1),b(C,f[0]+.1),b(C,-f[1]-.1),b(L,-f[1]-.1)];F=A`<polygon class="fp3d-open-ring" points=${S.map(T=>T.join(",")).join(" ")} />`}return A`<g data-opening=${n.id} class=${w}>
        <line class="fp3d-open-hit" x1=${k[0]} y1=${k[1]} x2=${M[0]} y2=${M[1]} />
        <polygon class="fp3d-open-gap" points=${g.map(L=>L.join(",")).join(" ")} />
        ${E} ${F}
      </g>`})}</g>`}renderRoomOpenings(t){let e=(this.floor?.openings??[]).filter(n=>n.room_id===t.id);return e.length?m`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${e.length})</summary>
      <div class="fp3d-room-list">
        ${e.map(n=>m`<button class="fp3d-row" @click=${()=>(this.selectItem("opening",n.id),this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0,0))}>
            <span>${this.t(`preset_${Ui(n)}`)}</span><span class="fp3d-muted">${this.m(n.width,2)}</span>
          </button>`)}
      </div>
    </details>`:y}openingIsExterior(t){let e=this.floor,n=e?ee(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let i=$t(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return Yi(i.walls,t,n)?.wall.exterior??!1}renderSidelightFields(t){if(t.type!=="door")return y;let e=cs(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return y;let n=this.isEditor,i=(s,r)=>m`<label class="fp3d-field"
      >${this.t(r)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${t[s]==null?"":String(t[s])}
        ?disabled=${!n}
        @change=${a=>{let l=Number(a.target.value);this.updateOpening({[s]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return e==="sidelight"?m`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!t.sidelight_hinge} ?disabled=${!n} @change=${s=>this.updateOpening({sidelight_hinge:s.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:m`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=gu(t.type),n=cs({type:t.type,style:null},this.openingIsExterior(t)),i=t.style&&e.includes(t.style)?t.style:"";return m`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isEditor} @change=${s=>this.updateOpening({style:s.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(s=>m`<option value=${s} ?selected=${s===i}>${this.t(`style_${s}`)}</option>`)}
      </select></label
    >`}renderOpeningKinds(t,e){return m`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
      ${Object.keys(ds).map(n=>m`<button class="fp3d-chip" aria-pressed=${n===t} @click=${i=>e(n,i)}>${this.t(`preset_${n}`)}</button>`)}
    </div>`}pickOpeningKind(t){this._openingPreset=t}openingPositionLabel(t){let e=this.floor,n=e?ee(t,e.rooms,e.walls??[]):null;if(!n)return this.t("opening_position");let i=Ym(n.room,n.edge,this._doc.settings.north??0);return this.t("opening_position_from",{corner:this.t(`compass_${i}`)})}renderOpeningForm(t){let e=this.isEditor,n=t.type==="window",i=t.type==="garage",s=v=>this.keptForPlan(`opening|${t.id}|${v}`,()=>{if(!this.hass)return null;let x=structuredClone(this._doc.floors);for(let w of x)for(let E of w.openings)E.id===t.id&&(E[v]=null);return ip(this.hass,x).get(t.id)?.[v]??null}),r=v=>this.hass?.states[v]?.attributes.device_class,a=this.entityOptions(v=>v.startsWith("cover.")),l=i?this.entityOptions(v=>v.startsWith("cover.")||Xi(v)):a,c=this.entityOptions(v=>/^(sensor|number|input_number)\./.test(v)&&Number.isFinite(Number(this.hass?.states[v]?.state))),d=v=>v.startsWith("binary_sensor.")&&["door","window","opening","garage_door",""].includes(r(v)??""),u=this.entityOptions(v=>d(v)||Rt(v)&&Wa(this.hass?.states[v])!==null||i&&/^(switch|input_boolean)\./.test(v),i),h=this.entityOptions(v=>{let x=this.hass?.states[v];return v.startsWith("binary_sensor.")?typeof x?.attributes.window_state=="string":Rt(v)&&(Wa(x)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${v} ${et(this.hass,v)}`))}),p=this.entityOptions(d),f=v=>{let x=v===1,w=x?t.tilt:t.tilt2??null,E=x?t.contact:t.contact2,k=(x?t.sensor:t.sensor2)??(w&&w!=="none"?"contact_tilt":"contact"),M=F=>this.updateOpening(x?{contact:F}:{contact2:F==="none"?null:F});return m`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${F=>{let L=F.target.value,C=L==="contact_tilt"?{}:x?{tilt:null}:{tilt2:null};this.updateOpening({...x?{sensor:L}:{sensor2:L},...C})}}
          >
            ${["contact","handle","contact_tilt"].map(F=>m`<option value=${F} ?selected=${F===k}>${this.t(`sensor_kind_${F}`)}</option>`)}
          </select></label
        >
        ${k==="handle"?this.entitySelect(this.t("handle_entity"),E,void 0,h,F=>M(F==="none"?x?"none":null:F)):this.entitySelect(this.t("contact_entity"),E,x?s("contact"):void 0,p,M)}
        ${k==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),w,void 0,u,F=>this.updateOpening(x?{tilt:F==="none"?null:F}:{tilt2:F==="none"?null:F})):y}
        ${x?m`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(F=>Rt(F)),F=>this.updateOpening({tilt_angle:F==="none"?null:F}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?m`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,F=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,F))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,F=>this.updateOpening({tilt_offset:F}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${F=>this.updateOpening({tilt_invert:F.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:y}`:y}`},b=Ui(t),g=t.type==="door",_=this.openingFormMin?.id===t.id?this.openingFormMin.h:0;return m`<section style=${_?`min-height:${Math.round(_)}px`:""}>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${b}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?m`<p class="fp3d-sub">${this.t("opening_change_to")}</p>`:y}
      ${e?this.renderOpeningKinds(b,(v,x)=>{let E=x.currentTarget?.closest?.("section")?.getBoundingClientRect().height??0,k=this.openingFormMin?.id===t.id?this.openingFormMin.h:0;this.openingFormMin={id:t.id,h:Math.max(k,E)},this.setOpeningPreset(t,v)}):y}
      ${e&&!i?m`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${g||n&&t.sill<.1?m`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:y}
          </div>`:y}
      <div class="fp3d-form">
        ${this.len(this.t("width"),t.width,v=>this.updateOpening({width:Math.max(.3,v)}),.01,.3)}
        ${this.len(this.openingPositionLabel(t),t.offset,v=>this.updateOpening({offset:Math.max(0,v)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,v=>this.updateOpening({sill:Math.max(0,v)}),.01,0):y}
        ${this.len(this.t("opening_height"),t.height,v=>this.updateOpening({height:Math.max(.3,v)}),.01,.3)}
        ${n&&this.isEditor?m`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${()=>{let v=this.floor?.height??2.5;this.updateOpening({width:1,height:.5,sill:Math.max(0,Math.round((v-.75)*100)/100)})}}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`:y}
        ${this.renderStyleSelect(t)}
        ${n?m`<label class="fp3d-field fp3d-wide" title=${this.t("sill_board_hint")}
              >${this.t("sill_board")}
              <select ?disabled=${!e} @change=${v=>this.updateOpening({sill_board:v.target.value||"auto"})}>
                ${Td.map(v=>m`<option value=${v} ?selected=${(t.sill_board??"auto")===v}>${this.t(`sill_board_${v}`)}</option>`)}
              </select></label
            >`:y}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isEditor} @change=${v=>this.updateOpening({mark:v.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?y:m`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${v=>this.updateOpening({hinge:v.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||g?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,s("cover"),i?l:a,v=>this.updateOpening({cover:v})):y}
        ${i&&Xi(t.cover)?m`<p class="fp3d-sub fp3d-wide">${this.t("garage_pulse_hint")}</p>`:y}
        ${(n||i||g)&&t.cover!=="none"&&(t.cover||s("cover"))?m`${Xi(t.cover)?y:this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,c,v=>this.updateOpening({position:v==="none"?null:v}))}
              ${t.position&&!Xi(t.cover)?m`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${v=>this.updateOpening({position_inverted:v.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:y}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${v=>this.updateOpening({confirm:v.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:y}
        ${n?m`${t.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:y}
              ${f(1)} ${t.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${f(2)}`:y}
              ${t.sill<=.01?m`${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(v=>v.startsWith("lock.")),v=>this.updateOpening({lock:v==="none"?null:v}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:y}`:m`${this.entitySelect(this.t(t.leaves===2?"contact_main":"contact_entity"),t.contact,s("contact"),u,v=>this.updateOpening({contact:v}))}
              ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,u,v=>this.updateOpening({contact2:v==="none"?null:v})):y}
              ${g?m`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${v=>this.updateOpening({shut:v.target.checked})} />
                    ${this.t("door_shut")}</label
                  >
                  <label class="fp3d-field" title=${this.t("door_angle_hint")}
                    >${this.t("door_angle")}
                    <select
                      ?disabled=${!e}
                      @change=${v=>{let x=Number(v.target.value);this.updateOpening({open_angle:x>0?x:null})}}
                    >
                      <option value="0" ?selected=${!t.open_angle}>${this.t("door_angle_default")}</option>
                      ${[15,30,45,60,90].map(v=>m`<option value=${v} ?selected=${t.open_angle===v}>${v}°</option>`)}
                      ${t.open_angle&&![15,30,45,60,90].includes(t.open_angle)?m`<option value=${t.open_angle} selected>${t.open_angle}°</option>`:y}
                    </select></label
                  >
                  ${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(v=>v.startsWith("lock.")),v=>this.updateOpening({lock:v==="none"?null:v}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:y}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||s("contact"))?m`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${v=>this.updateOpening({contact_invert:v.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:y}
        ${this.floor&&Qm(this._doc,this.floor,t)?m`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${t.well!==!1} ?disabled=${!e} @change=${v=>this.updateOpening({well:v.target.checked?void 0:!1})} />
                ${this.t("well")}</label
              >
              ${t.well!==!1?this.len(this.t("well_rim"),t.well_rim??0,v=>this.updateOpening({well_rim:Math.max(-.3,Math.min(1,v))||null}),.01,-.3):y}`:y}
        ${t.type==="window"?m`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${v=>this.updateOpening({rain_ignore:v.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:y}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:y}
    </section>`}};var Lo=o=>Math.round(o*1e4)/1e4+0;function tg(o,t,e){if(o.door==="none"||!ll.includes(o.form))return null;let n=Lo(-t/2),i=Lo(e/2),s=Lo(e/2+t),r=Lo(t);return{leaf:[[n,i],[n,s]],arc:`M${n} ${s}A${r} ${r} 0 0 0 ${Lo(t/2)} ${i}`}}var Cy=24,Hy=220,nc=8,kr=30,Co=14,Dy=9,Jm=7,ic=13,eg=7.6,Vy="system-ui, -apple-system, Segoe UI, Roboto, sans-serif",sc={body:"#3a4457",fabric:"#4a5468",cushion:"#56617a",wood:"#7a5a3c",white:"#e6e9ee",metal:"#9aa3b2",dark:"#2a303c",glass:"#5b7fa0",plant:"#3f7a4f",pot:"#6b5a4a",accent:"#2bb3e0",paint:"#4a6ea8"},oc="#0d1017",Wy="#161a22",Ny="#07090d",Xm="#7d8696",Mr="#3a4150",jy="#f2f5fa",Zm="#a7b2c5",Ho=o=>o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),Et=o=>Math.round(o*10)/10+0,By=o=>o&&/^#[0-9a-f]{3,8}$/i.test(o)?o:sc[o??"body"]??sc.body,Ky=(o,t)=>{let e=Math.max(3,Math.floor(t/eg));return o.length<=e?o:`${o.slice(0,e-1).trimEnd()}\u2026`},Uy=(o,t)=>!o.slot.on&&Hn(o.item)?.depth==="full"||o.back===(t==="rear");function ng(o){let{frame:t,slots:e,itemOf:n,nameOf:i}=o,s=o.face??"front",r=Math.max(.05,o.size[0]),a=Math.max(.005,o.size[2]),l=Os(t,r,Math.max(.05,o.size[1]),a),c=Math.max(Cy/qe,Hy/l.panel),d=Math.round(r*c+2*kr),u=Math.round(a*c+2*nc),h=M=>Et(kr+(M+r/2)*c),p=M=>Et(nc+(a-M)*c),f=(M,F,L,C,S,T,R="")=>`<rect class="${M}" x="${h(F)}" y="${p(S)}" width="${Et((C-F)*c)}" height="${Et((S-L)*c)}" fill="${T}"${R}/>`,b=[`<rect x="0" y="0" width="${d}" height="${u}" rx="8" fill="${oc}"/>`];b.push(f("fp3d-el-rack",-r/2,0,r/2,a,Wy,` stroke="${Mr}"`));let g=l.opening/2,_=l.panel/2;b.push(f("fp3d-el-opening",-g,l.bottom,g,l.top,Ny)),b.push(f("fp3d-el-rail",-_,l.bottom,-g,l.top,Xm),f("fp3d-el-rail",g,l.bottom,_,l.top,Xm));for(let M of l.units){M.index>0&&b.push(`<line x1="${h(-g)}" y1="${p(M.y0)}" x2="${h(g)}" y2="${p(M.y0)}" stroke="${Mr}"/>`);let F=Et(p((M.y0+M.y1)/2)+ic*.35);b.push(`<text class="fp3d-el-u fp3d-el-u-l" x="${kr-6}" y="${F}" font-size="${ic}" text-anchor="end" fill="${Zm}">${M.label}</text>`),b.push(`<text class="fp3d-el-u fp3d-el-u-r" x="${d-kr+6}" y="${F}" font-size="${ic}" fill="${Zm}">${M.label}</text>`)}let v=Vh(l,e,n).filter(M=>Uy(M,s)),x=0,w=[];for(let M of v){x+=Hn(M.item)?.u??0;let F=M.x-M.w/2,L=M.w*c,C=M.h*c,T=[...M.item.parts].sort((Y,Q)=>s==="front"?$r(Y)-$r(Q):$r(Q)-$r(Y)).map(Y=>Gy(Y,M,h,p,c,s)).join(""),R=i(M.slot,M.item),I=o.statusOf?.(M.slot)??null,z=Math.min(Dy,C-4,L/4),D=!!I&&z>=3,W=Ky(R,L-20-(D?Jm+z+4:0)),H=Et(p(M.y+M.h/2)+Co*.36),j=C>=Co+4?`<rect class="fp3d-el-tag" x="${Et(h(F)+6)}" y="${Et(H-Co)}" width="${Et(Math.min(L-12,W.length*eg+8))}" height="${Co+5}" rx="3" fill="${oc}" fill-opacity="0.75"/><text x="${Et(h(F)+10)}" y="${H}" font-size="${Co}" fill="${jy}">${Ho(W)}</text>`:"",q=I&&D?`<rect class="fp3d-el-led fp3d-el-led-${I}" data-slot="${Ho(M.slot.id)}" x="${Et(h(F)+L-Jm-z)}" y="${Et(p(M.y+M.h/2)-z/2)}" width="${Et(z)}" height="${Et(z)}" rx="2" fill="${Cs[I]}" stroke="${oc}"/>`:"";w.push({slot:M.slot.id,title:R,x:h(F),y:p(M.y+M.h),w:Et(L),h:Et(C)}),b.push(`<g class="fp3d-el-gear" data-slot="${Ho(M.slot.id)}"><rect class="fp3d-el-face" x="${h(F)}" y="${p(M.y+M.h)}" width="${Et(L)}" height="${Et(C)}" fill="${sc.dark}" stroke="${Mr}"/>${T}${j}${q}<title>${Ho(R)}</title></g>`)}let E=o.title??"Rack";return{svg:`<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${Ho(E)}" class="fp3d-elevation" viewBox="0 0 ${d} ${u}" width="${d}" height="${u}" font-family="${Vy}">${b.join("")}</svg>`,width:d,height:u,scale:c,pad:nc,label:E,gear:w,pieces:v.length,used:x,u:t.u}}var $r=o=>o.z+o.d/2;function Gy(o,t,e,n,i,s){let r=t.x+(s==="front"?o.x:-o.x)*t.w,a=t.y+(o.y+o.h/2)*t.h,l=o.w*t.w/2,c=o.h*t.h/2,d=By(o.color),u=o.edges==="faint"?` stroke="${Mr}"`:"";return o.shape==="sphere"||o.shape==="cyl"&&o.axis==="z"?`<ellipse class="fp3d-el-part" cx="${e(r)}" cy="${n(a)}" rx="${Et(l*i)}" ry="${Et(c*i)}" fill="${d}"${u}/>`:`<rect class="fp3d-el-part" x="${e(r-l)}" y="${n(a+c)}" width="${Et(2*l*i)}" height="${Et(2*c*i)}" fill="${d}"${u}/>`}var at=(o,t,e,n,i="")=>A`<rect class=${i} x=${Math.min(o,e)} y=${Math.min(t,n)} width=${Math.abs(e-o)} height=${Math.abs(n-t)} />`,X=(o,t,e,n,i="")=>A`<line class=${i} x1=${o} y1=${t} x2=${e} y2=${n} />`,vt=(o,t,e,n="")=>A`<circle class=${n} cx=${o} cy=${t} r=${e} />`,Ti=(o,t,e,n,i="")=>A`<ellipse class=${i} cx=${o} cy=${t} rx=${e} ry=${n} />`,qy=(o,t,e,n,i,s="")=>A`<rect class=${s} x=${Math.min(o,e)} y=${Math.min(t,n)} width=${Math.abs(e-o)} height=${Math.abs(n-t)} rx=${i} />`;function rc(o,t,e){let n=[];for(let i=1;i<e;i++){let s=-o/2+o/e*i;n.push(X(s,t/2,s,t/2-Math.min(.12,t*.3)))}return n}function ig(o,t,e,n){let i=Math.min(.24,t*.28),s=n?Math.min(.2,o*.12):0,r=[at(-o/2,-t/2,o/2,-t/2+i,"fp3d-sym-fill")];n&&r.push(at(-o/2,-t/2,-o/2+s,t/2,"fp3d-sym-fill"),at(o/2-s,-t/2,o/2,t/2,"fp3d-sym-fill"));let a=o-2*s;for(let l=1;l<e;l++){let c=-o/2+s+a/e*l;r.push(X(c,-t/2+i,c,t/2-.02))}return r}function og(o,t,e){let n=-o/2,i=o/2,s=-t/2,r=t/2,a=Math.max(.3,Math.min(.95,t*.5,o*(e?.34:.45))),l=Math.min(.24,a*.28),c=Math.min(.2,a*.24),d=[at(n,s,i,s+l,"fp3d-sym-fill"),at(n,s+l,n+l,r,"fp3d-sym-fill"),at(n+l,r-c,n+a,r,"fp3d-sym-fill")];e?d.push(at(i-l,s+l,i,r,"fp3d-sym-fill"),at(i-a,r-c,i-l,r,"fp3d-sym-fill")):d.push(at(i-c,s+l,i,s+a,"fp3d-sym-fill"));let u=e?i-a:i-c;d.push(X(n+a,r-c,n+a,s+a),X(n+a,s+a,u,s+a)),e&&d.push(X(i-a,s+a,i-a,r-c));let h=n+l,p=e?i-l:i-c,f=Math.max(1,Math.round((p-h)/.62));for(let v=1;v<f;v++)d.push(X(h+(p-h)/f*v,s+l,h+(p-h)/f*v,s+a));let b=s+a,g=r-c,_=g-b<.2?0:Math.max(1,Math.round((g-b)/.62));for(let v=0;v<_;v++){let x=b+(g-b)/_*v;d.push(X(n+l,x,n+a,x)),e&&d.push(X(i-a,x,i-l,x))}return d}function sg(o,t,e){switch(o){case"sofa":return ig(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return ig(t,e,1,!0);case"sofa_l":return og(t,e,!1);case"sofa_u":return og(t,e,!0);case"bench":return[at(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[at(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),at(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),X(-t/2+n,-e/2+n,t/2,-e/2+n),X(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[at(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[vt(0,.03,Math.min(t,e)*.36),at(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[vt(0,0,Math.min(t,e)*.42)];case"stool":return[at(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[at(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return o==="desk"&&n.push(X(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,s=[at(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),X(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let r=0;r<n;r++)s.push(at(-t/2+.13+i*r,-e/2+.12,-t/2+.07+i*(r+1),-e/2+.12+Math.min(.4,e*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return rc(t,e,o==="nightstand"||o==="tall_cabinet"||o==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[at(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...rc(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[X(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[X(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[vt(-t*.22,-e*.2,n),vt(t*.22,-e*.2,n*.8),vt(-t*.22,e*.2,n*.8),vt(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[at(-n/2,-e/2+.1,n/2,e/2-.08),vt(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[X(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[vt(0,.05,Math.min(t,e)*.3),X(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[at(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),vt(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[X(-t/2,-e/2,t/2,e/2),X(t/2,-e/2,-t/2,e/2),vt(0,0,.04)];case"wc":return[at(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),Ti(0,e*.1,t*.36,e*.3)];case"washbasin":return[Ti(0,.03,t*.34,e*.3)];case"tv_board":return[X(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...rc(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[X(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[vt(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),vt(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[vt(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),vt(0,0,Math.min(t,e)*1.6)];case"parking":return[at(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),X(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),X(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[at(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),vt(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let s=1;s<i;s++)n.push(X(-t/2+t/i*s,-e/2,-t/2+t/i*s,e/2));return n}case"lamp_fan":{let n=Math.min(t,e)/2,i=[vt(0,0,.12,"fp3d-sym-fill"),vt(0,0,n)];for(let s=0;s<4;s++){let r=s/4*Math.PI*2+Math.PI/4;i.push(X(Math.cos(r)*.13,Math.sin(r)*.13,Math.cos(r)*n*.95,Math.sin(r)*n*.95,"fp3d-sym-strong"))}return i}case"lamp_panel":return[at(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[vt(0,0,n*.9,"fp3d-sym-fill"),vt(0,0,n*.3)];if(o==="lamp_ceiling"||o==="lamp_pendant")for(let s=0;s<8;s++){let r=s/8*Math.PI*2;i.push(X(Math.cos(r)*n*1.05,Math.sin(r)*n*1.05,Math.cos(r)*n*1.35,Math.sin(r)*n*1.35))}return i}case"lamp_wall":return[at(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),Ti(0,.01,t*.4,e*.4)];case"led_strip":return[X(-t/2,0,t/2,0,"fp3d-sym-strong")];case"wall_switch":case"wall_socket":return[at(-t/2,-e/2,t/2,e/2,"fp3d-sym-fill"),Ti(0,e/2,t/2+.06,.09)];case"plant":return[vt(0,0,Math.min(t,e)*.46),vt(0,0,Math.min(t,e)*.25)];case"rug":return[at(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let s=1;s<n;s++)i.push(X(-t/2,e/2-e/n*s,t/2,e/2-e/n*s));return i.push(X(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),X(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),X(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:s,landing:r,run:a}=ru(t,e,2.75),l=-e/2+r,c=-t/2+s,d=t/2-s,u=[X(-t/2,l,c,l),X(c,l,c,e/2),X(d,l,d,e/2)];for(let g=1;g<n;g++)u.push(X(-t/2,e/2-a*g,c,e/2-a*g));for(let g=1;g<=i;g++)u.push(X(d,l+a*g,t/2,l+a*g));let h=(-t/2+c)/2,p=(d+t/2)/2,f=-e/2+r/2,b=e/2-.15;return u.push(X(h,e/2-.1,h,f,"fp3d-sym-strong"),X(h,f,p,f,"fp3d-sym-strong"),X(p,f,p,b,"fp3d-sym-strong"),X(p-.15,b-.2,p,b,"fp3d-sym-strong"),X(p+.15,b-.2,p,b,"fp3d-sym-strong")),u}default:{let n=wt(o);return n?Yy(n,t,e):y}}}function Yy(o,t,e){let n=Qy(o,t,e),i=o.rack_frame?Ye(o):null,s=i&&tg(i,t,e);if(!s)return n;let[[r,a],[l,c]]=s.leaf;return[...n,X(r,a,l,c,"fp3d-sym-swing"),A`<path class="fp3d-sym-swing" d=${s.arc} />`]}function Qy(o,t,e){return o.symbol?.length?o.symbol.map(n=>n.shape==="rect"?at((n.x-n.w/2)*t,(n.z-n.d/2)*e,(n.x+n.w/2)*t,(n.z+n.d/2)*e,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?vt(n.x*t,n.z*e,n.r*Math.min(t,e)):X(n.x1*t,n.z1*e,n.x2*t,n.z2*e)):o.parts.filter(n=>n.w<.98||n.d<.98).map(n=>Jy(n,t,e,o.size[2]))}function Jy(o,t,e,n){let i=(o.x-o.w/2)*t,s=(o.x+o.w/2)*t,r=(o.z-o.d/2)*e,a=(o.z+o.d/2)*e;switch(o.shape){case"cyl":return(o.axis??"y")==="y"?vt(o.x*t,o.z*e,Math.min(o.w*t,o.d*e)/2):at(i,r,s,a);case"sphere":return Ti(o.x*t,o.z*e,o.w*t/2,o.d*e/2);case"lathe":{let l=Math.max(0,...(o.profile??[[1,0]]).map(([c])=>c));return Ti(o.x*t,o.z*e,l*o.w*t/2,l*o.d*e/2)}case"rbox":return qy(i,r,s,a,(o.round??.2)*Math.min(o.w*t,o.d*e,o.h*n));default:return at(i,r,s,a)}}var Xy=["x","z","rotation","w","d","h","mount","mirror","strip","name","show_name","aliases","type","floor"],rg=["x","z","rotation"];function ag(o){let t=Zy(o);return{head:t.filter(e=>rg.includes(e)),body:t.filter(e=>!rg.includes(e))}}function Zy(o){return Xy.filter(t=>t==="mirror"?o.mirror:t==="strip"?o.strip:t==="mount"?o.lift:t==="floor"?!!o.floors:!0)}function lg(o,t){let e=t.split("-")[0],n=c=>c?c[e]??c.en??Object.values(c)[0]??"":"",i=o.map(c=>n(c.name)||c.id),s=o.map((c,d)=>`${i[d]}|${n(c.variant)}`),r=c=>c.reduce((d,u)=>d.set(u,(d.get(u)??0)+1),new Map),a=r(i),l=r(s);return o.map((c,d)=>{if(a.get(i[d])<2)return i[d];let u=n(c.variant);return u&&l.get(s[d])<2?`${i[d]} \xB7 ${u}`:`${i[d]} \xB7 ${c.size.map(h=>Math.round(h*100)).join(" \xD7 ")} cm`})}function tv(o){let[t,e,n]=yt(o.type);return Math.abs(o.w-t)<.005&&Math.abs(o.d-e)<.005&&Math.abs(o.h-n)<.005}function cg(o,t){if(t===o.type||!tv(o))return{type:t};let[e,n,i]=yt(t);return{type:t,w:e,d:n,h:i}}function dg(o,t,e,n){let i=o.floors.find(l=>l.id===t),s=o.floors.find(l=>l.id===n);if(!i||!s||i===s)return[];let r=new Set(e),a=i.furniture.filter(l=>r.has(l.id));return a.length?(i.furniture=i.furniture.filter(l=>!r.has(l.id)),s.furniture.push(...a),a.map(l=>l.id)):[]}var Er=class{typeLabels(t){let e=this.hass?.language??"en",n=this.typeLabelMemo.get(t);if(n&&n.lang===e)return n.labels;let i=lg(t.items,e);return this.typeLabelMemo.set(t,{lang:e,labels:i}),i}typeChoices(t){let e=new Set(Object.values(rs).flat());return e.add("fridge_smart"),Ki.filter(n=>e.has(n)||n===t)}furnitureFor(t){let e=nt(t),n=this.hass?.language??"en",i=[...Ki.map(a=>({type:a,label:this.t(`furn_${a}`)})),...(this.packs??[]).flatMap(a=>a.items.map(l=>({type:St(a.id,l.id),label:`${Ot(l,n)} \xB7 ${me(a,n)}`})))],s=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,r=a=>e==="light"?kt(a):e==="climate"?a==="radiator"||a==="ac_unit":t.startsWith("vacuum.")?re(a):e==="media"?Zi(a)||Te(a)&&s.test(a):Te(a)&&!kt(a);return i.filter(a=>r(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}vehicleToSpot(t){if(!this.isEditor)return;let[e,n,i]=yt("parking"),s={id:N("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,$(t.w+.5)),d:Math.max(n,$(t.d+.4)),h:i,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((r,a)=>{a.furniture=a.furniture.filter(l=>l.id!==t.id),a.furniture.push(s)}),this.selectItem("furniture",s.id)}deviceToFurniture(t,e){if(!this.isEditor)return;if(t.entity_id.startsWith("camera.")){this.change((a,l)=>pn(l,t.entity_id,e));return}let[n,i,s]=yt(e),r={id:N("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:i,h:s,variant:null,entity:t.entity_id,name:t.name??null,...t.locked?{locked:!0}:{},...t.actions?{actions:t.actions}:{}};this.change((a,l)=>{l.placements=l.placements.filter(c=>c.entity_id!==t.entity_id),l.furniture.push(r)}),this._deviceId=null,this.selectItem("furniture",r.id)}furnitureToDevice(t){let e=t.entity;if(!this.isEditor||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{},...t.actions?{actions:t.actions}:{}};this.change((i,s)=>{s.furniture=s.furniture.filter(r=>r.id!==t.id),s.placements.some(r=>r.entity_id===e)||s.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderAsFurniture(t){if(!this.isEditor)return y;let e=this.furnitureFor(t.entity_id);if(!e.length)return y;let n=t.entity_id.startsWith("camera.")?this.floor?.furniture.find(i=>i.look_of===t.entity_id):void 0;return m`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${i=>{let s=i.target.value;s==="__builtin"?this.change((r,a)=>a.furniture=a.furniture.filter(l=>l.look_of!==t.entity_id)):s&&this.deviceToFurniture(t,s)}}
      >
        <option value="" selected>${n?pt(this.hass,n.type):this.t("as_furniture_pick")}</option>
        ${n?m`<option value="__builtin">${this.t("camera_look_builtin")}</option>`:y}
        ${e.map(i=>m`<option value=${i.type}>${i.label}</option>`)}
      </select></label
    >`}addFurniture(t,e=!1){!this.hass||!this.isEditor||(this._placing={type:t,mirror:e},this._placeAt=null,Se(this.hass,[t]))}placeArmed(t,e=!1){let n=this._placing;!n||!this.hass||(e||(this._placing=null,this._placeAt=null),this.showGuides([]),Se(this.hass,[n.type]).then(()=>this.placeFurniture(n.type,n.mirror,t)))}placeArmedInMiddle(){this.placeArmed(null)}cancelPlacing(){this._placing=null,this._placeAt=null,this.showGuides([])}snapOff(t){return t.shiftKey||t.altKey||!this._snapOn}setSnapOn(t){this._snapOn=t,t||this.showGuides([]);try{localStorage.setItem("home3d.snap",t?"1":"0")}catch{}}placeTarget(t,e){let n=this._doc.settings.grid,i=v=>e||!n?$(v):$(Math.round(v/n)*n),s=this._placing,r=this.floor,a=this.roomAt(t);if(e||!s||!r)return this.showGuides([]),{at:[i(t[0]),i(t[1])],rotation:0,roomId:a,wall:null};let[l,c,d]=yt(s.type);this.placeLines?.floor!==r&&(this.placeLines={floor:r,lines:this.alignLinesFor(r,null)});let u=or(t,[l/2,c/2],this.placeLines.lines,Fi(this._view.scale)),h=u.x?$(u.p[0]):i(t[0]),p=u.z?$(u.p[1]):i(t[1]),f=0,b=null,g={id:"",type:s.type,x:h,z:p,rotation:0,w:l,d:c,h:d,variant:null},_=a?$l(r,g,this._doc.settings.wall_interior,void 0,{turn:!0,roomId:a}):null;return _&&({x:h,z:p,rotation:f}=_,b={roomId:_.roomId,edge:_.edge}),this.showGuides(u.guides.length?u.guides.filter(v=>Math.abs(v.axis==="x"?h-u.p[0]:p-u.p[1])<.002):[]),{at:[h,p],rotation:f,roomId:a,wall:b}}placeFurniture(t,e,n=null){let i=this.floor;if(!i||!this.isEditor)return;let s=n?.at??null;n&&(this._roomId=n.roomId??this._roomId);let[r,a,l]=yt(t),c=this._doc.floors.filter(g=>g.elevation>i.elevation).sort((g,_)=>g.elevation-_.elevation)[0],d=va.has(t)?$(c?c.elevation-i.elevation:i.height+.25):l,u=this.room,[h,p]=s??(u?Gt(u.points):this.toWorld(this._size.w/2,this._size.h/2)),f=n?.wall?n.rotation:0;if(t==="parking"&&u&&!n?.wall){let g=i.openings.find(w=>w.room_id===u.id&&w.type==="garage"),_=g?u.points[g.edge]:null,v=g?u.points[(g.edge+1)%u.points.length]:null,x=ft(u.points);f=(_&&v?Math.abs(v[1]-_[1])>Math.abs(v[0]-_[0]):x.x1-x.x0>x.z1-x.z0)?90:0}let b={id:N("furniture"),type:t,x:$(h),z:$(p),rotation:f,w:r,d:a,h:d,variant:null,...e?{mirror:!0}:{}};this.change((g,_)=>_.furniture.push(b)),this.selectItem("furniture",b.id),this.showPoint(b.x,b.z)}snapToWall(t){return this.floor?Wn(this.floor,t,this._doc.settings.wall_interior):null}renderStairOptions(t){let e=this.isEditor,n=ri(t),i=s=>this.updateFurniture(su(t,s));return m`<div class="fp3d-form">
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
      ${this.len(this.t("stair_start"),t.mount_y??0,s=>this.updateFurniture({mount_y:Math.round(Math.min(Xe,Math.max(0,s))*1e3)/1e3||null}),.05,0)}
    </div>`}updateFurniture(t){let e=this._furnitureId;!e||!this.floor?.furniture.some(n=>n.id===e)||this.change((n,i)=>{let s=i.furniture.find(r=>r.id===e);s&&Object.assign(s,t)})}retypeFurniture(t){let e=this.furnitureItem;e&&this.updateFurniture(cg(e,t))}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isEditor||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;if(!e||!this.isEditor)return;if(this.selection().length>1)return this.rotateSelection(t);this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}async deleteFurniture(){let t=this._furnitureId;if(!t||!this.isEditor)return;let e=this.selection();if(e.length>1){let n=e.some(s=>this.isFixedItem("furniture",s));if(!await this.ask(this.t(n?"block_delete_fixed":"block_delete",{n:e.length})))return;let i=new Set(e);this.change((s,r)=>r.furniture=r.furniture.filter(a=>!i.has(a.id))),this.selectItem("room",this._roomId);return}await this.confirmFixedDelete("furniture",t)&&(this.change((n,i)=>i.furniture=i.furniture.filter(s=>s.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isEditor)return;let e=this.selection();if(e.length>1){let i=this.floor.furniture.filter(a=>e.includes(a.id)),s=new Map,r=i.map(a=>({...structuredClone(a),id:N("furniture"),x:$(a.x+.3),z:$(a.z+.3),group:a.group?s.get(a.group)??s.set(a.group,N("block")).get(a.group):null,locked:null}));this.change((a,l)=>l.furniture.push(...r)),this.setMulti(r.map(a=>a.id));return}let n={...structuredClone(t),id:N("furniture"),x:$(t.x+.3),z:$(t.z+.3),group:this._single?t.group:null};this.change((i,s)=>s.furniture.push(n)),this.selectItem("furniture",n.id)}moveSelectionToFloor(t){let e=this._floorId,n=this._furnitureId?this.selection():[];if(!e||t===e||!n.length||!this.isEditor)return;if(n.some(c=>this.isFixedItem("furniture",c))){this._fixedHint=!0;return}let[i,s,r]=[this._furnitureId,this._multi.length>1,this._single],a=[];if(this.change(c=>a=dg(c,e,n,t)),!a.length)return;this._floorId=t,this._vertex=null,this._draft=[],s?this.setMulti(a):this.selectItem("furniture",i),this._single=r;let l=this.furnitureItem;this._roomId=l?this.roomAt([l.x,l.z]):null}renderPlaceGhost(){let t=this._placing,e=this._placeAt;if(!t||!e)return y;let[n,i]=yt(t.type),s=this._view.scale,[r,a]=this.toScreen(e.at),l=e.roomId?this.floor?.rooms.find(u=>u.id===e.roomId):null,c=l?.points.length??0,d=l?e.wall?`${l.name} \xB7 ${this.t("wall_n",{a:e.wall.edge+1,b:(e.wall.edge+1)%c+1})}`:l.name:this.t("place_no_room");return A`<g class="fp3d-place-ghost-g">
      <rect class=${`fp3d-place-ghost${e.wall?" fp3d-place-ghost-wall":""}`} x=${-(n*s)/2} y=${-(i*s)/2} width=${n*s} height=${i*s} transform="translate(${r} ${a}) rotate(${e.rotation})" />
      <text class="fp3d-place-label" x=${r} y=${a-Math.max(n,i)*s/2-6} text-anchor="middle">${d}</text>
    </g>`}renderFurniture(t){let e=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1,s=this._hiddenItems,r=s.length?t.furniture.filter(a=>!s.includes(a.id)):t.furniture;return A`<g>${this.renderSelectionFrame(t,n)}${r.map(a=>{let l=n.includes(a.id),c=a.id===this._furnitureId&&!i,[d,u]=this.toScreen([a.x,a.z]),h=Math.min(a.w,a.d)*e>44,p=a.rotation*Math.PI/180,f=a.d/2+Math.max(.3,26/e),[b,g]=this.toScreen([a.x-Math.sin(p)*f,a.z+Math.cos(p)*f]),[_,v]=this.toScreen([a.x-Math.sin(p)*(a.d/2),a.z+Math.cos(p)*(a.d/2)]),x=kt(a.type)&&!!a.entity&&a.entity!=="none"&&this.hass?.states[a.entity]?.state==="on";return A`<g data-furniture=${a.id} class=${`fp3d-furn${c||l?" fp3d-furn-sel":""}${x?" fp3d-furn-lit":""}${Pe(a.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${d} ${u}) rotate(${a.rotation}) scale(${a.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-a.w/2} y=${-a.d/2} width=${a.w} height=${a.d} />
          <g class="fp3d-furn-sym">${sg(a.type,a.w,a.d)}</g>
          <line class="fp3d-furn-front" x1=${-a.w/2} y1=${a.d/2} x2=${a.w/2} y2=${a.d/2} />
        </g>
        ${h?A`<text x=${d} y=${u+4}>${pt(this.hass,a.type)}</text>`:y}
      </g>
      ${c&&this.isEditor&&!a.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([w,E])=>{let[k,M]=this.toScreen([a.x+w*a.w*Math.cos(p)/2-E*a.d*Math.sin(p)/2,a.z+w*a.w*Math.sin(p)/2+E*a.d*Math.cos(p)/2]);return A`<g class="fp3d-resize" data-resize=${`${a.id}:${w}:${E}`}>
              <circle cx=${k} cy=${M} r="14" class="fp3d-hit" />
              <rect x=${k-5} y=${M-5} width="10" height="10" rx="2" />
            </g>`}):y}
      ${c?(()=>{let[w,E]=this.toScreen([a.x+Math.sin(p)*(a.d/2+18/e),a.z-Math.cos(p)*(a.d/2+18/e)]);return A`<text class="fp3d-dim" x=${w} y=${E+4}>${this.m(a.w,2)} × ${this.m(a.d,2)}</text>`})():y}
      ${c&&a.locked?A`<text class="fp3d-lock" x=${b} y=${g+5}>🔒</text>`:y}
      ${c&&this.isEditor&&!a.locked?A`<g class="fp3d-rotate" data-rotate=${a.id}>
            <line x1=${_} y1=${v} x2=${b} y2=${g} />
            <circle cx=${b} cy=${g} r="16" class="fp3d-hit" />
            <circle cx=${b} cy=${g} r="8" />
            <path d="M${b-4} ${g-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}`})}</g>`}libraryEntries(t){let e=["fridge_smart"],n=`${t}|${wd()}|${this.packs?.length??0}|${e.length}`;if(this.libIndex?.key===n)return this.libIndex.entries;let i=nh({packs:this.packs??[],basics:th(e),language:t,basicName:s=>this.t(`furn_${s}`),basicNameEn:s=>qt(xo,`furn_${s}`),kindName:s=>this.t(`lib_kind_${s}`),size:yt});return this.libIndex={key:n,entries:i},i}refreshLibUpdates(){if(this.hass){if(this.libUpdatesAsking){this.libUpdatesAsked=!0;return}this.libUpdatesAsking=!0,to(this.hass).then(t=>this._libUpdates=lh(t)).catch(()=>this._libUpdates=new Set).finally(()=>{this.libUpdatesAsking=!1,this.libUpdatesAsked&&(this.libUpdatesAsked=!1,this.refreshLibUpdates())})}}async updateFromLibrary(t){if(this.hass){try{await xs(this.hass,t)}catch(e){this._notice=String(e?.message??e)}this.refreshLibUpdates()}}renderFurnitureLibrary(){let t=this.room,e=this.hass?.language??"en";return m`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${t?this.t("furniture_into",{room:t.name}):this.t("furniture_pick_room")}</p>
      ${this._placing?m`<div class="fp3d-placing" role="status">
            <span>${this.t("place_armed",{name:pt(this.hass,this._placing.type)})}</span>
            <label class="fp3d-check" title=${this.t("snap_toggle_hint")}
              ><input type="checkbox" .checked=${this._snapOn} @change=${n=>this.setSnapOn(n.target.checked)} />
              ${this.t("snap_toggle")}</label
            >
            <button class="fp3d-btn fp3d-primary" @click=${()=>this.placeArmedInMiddle()}>${t?this.t("place_middle_room",{room:t.name}):this.t("place_middle")}</button>
            <button class="fp3d-btn" @click=${()=>this.cancelPlacing()}>${this.t("cancel")}</button>
          </div>`:y}
      <fp3d-library
        .entries=${this.libraryEntries(e)}
        .language=${e}
        .roomHint=${t?eh(t.name):null}
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
    </div>`}async showPreview(t,e){let n=e.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...i};try{let[s]=await Promise.all([Ge(),this.hass?Se(this.hass,[t]):void 0]),[r,a,l]=yt(t),c=s.furniturePreview({type:t,w:r,d:a,h:l,variant:null,lamp:sn[t]??null},180,this.packs??[]);this._preview?.type===t&&(this._preview={type:t,url:c,...i})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?m`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?m`<img src=${t.url} alt="" />`:m`<span class="fp3d-preview-wait"></span>`}
      <b>${pt(this.hass,t.type)}</b>
    </div>`:y}};function ev(o,t,e){let n=e[0]-t[0],i=e[1]-t[1],s=n*n+i*i,r=s?Math.max(0,Math.min(1,((o[0]-t[0])*n+(o[1]-t[1])*i)/s)):0;return Math.hypot(o[0]-t[0]-n*r,o[1]-t[1]-i*r)}function ug(o,t,e=.03){return o.every(n=>U(n,t)||t.some((i,s)=>ev(n,i,t[(s+1)%t.length])<=e))}function hg(o){let t=wt(o);if(!t)return!1;if(nv.test([t.id,...t.tags??[],...Object.values(t.name??{})].join(" ")))return!t.light||/plant|pflanz/i.test(t.id);if(t.light)return!1;let e=t.parts.filter(n=>n.color==="plant").length;return e>0&&e+t.parts.filter(n=>n.color==="pot").length>=t.parts.length/2}function fg(o){return!!wt(o)?.tags?.includes("bin")}var nv=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i,ac=["bin120","bin240","bin1100","multi","bag","caddy","underground"],mg=["rest","bio","paper","plastic","glass","garden","recycling","other"],lc=["wall","pole","pillar","parcel","bank"],gg={bin120:[.48,.55,.93],bin240:[.58,.73,1.07],bin1100:[1.37,1.07,1.45],multi:[.6,.75,1.07],bag:[.42,.32,.62],caddy:[.3,.26,.32],underground:[1,1,1.15]},bg={wall:[.38,.14,.34],pole:[.24,.5,1.15],pillar:[.42,.36,1.3],parcel:[.6,.55,1.1],bank:[.95,.3,.7]};function _g(o){return ac.includes(o.variant??"")?o.variant:"bin240"}function yg(o){return lc.includes(o.variant??"")?o.variant:"wall"}var It=["#3a3f47","#3a3f47"],ei=["#23262b","#23262b"],Ie=["#5a3b25","#5a3b25"],_t=["#1f4fa8","#1f4fa8"],xn=["#e3b616","#e3b616"],it=["#2f7d3b","#2f7d3b"],pg={default:{rest:It,bio:Ie,paper:_t,plastic:xn,glass:it,garden:it,recycling:xn,other:It},DE:{rest:ei,bio:Ie,paper:_t,plastic:xn,glass:it,garden:it,recycling:xn},AT:{rest:It,bio:Ie,paper:[It[0],"#c0262d"],plastic:xn,glass:it,garden:it},CH:{rest:["#d8d8d8","#d8d8d8"],bio:it,paper:_t,plastic:It,glass:it,garden:it},NL:{rest:It,bio:it,paper:_t,plastic:["#3a3f47","#e57a1f"],glass:it,garden:it},BE:{rest:It,bio:it,paper:_t,plastic:_t,glass:it,garden:it},GB:{rest:ei,bio:["#3a3f47","#5a3b25"],paper:_t,plastic:_t,glass:ei,garden:Ie,recycling:_t},US:{rest:ei,bio:it,paper:_t,plastic:_t,glass:_t,garden:it,recycling:_t},CA:{rest:ei,bio:it,paper:_t,plastic:_t,glass:_t,garden:it,recycling:_t},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:It,bio:Ie,paper:[It[0],"#e3b616"],plastic:[It[0],"#e3b616"],recycling:[It[0],"#e3b616"],glass:it,garden:it},IT:{rest:It,bio:Ie,paper:_t,plastic:xn,glass:it,garden:it},ES:{rest:It,bio:Ie,paper:_t,plastic:xn,glass:it,garden:it},PT:{rest:It,bio:Ie,paper:_t,plastic:xn,glass:it,garden:it},DK:{rest:ei,bio:it,paper:_t,plastic:It,glass:it,garden:it},SE:{rest:ei,bio:Ie,paper:_t,plastic:It,glass:it,garden:it},NO:{rest:It,bio:Ie,paper:_t,plastic:It,glass:it,garden:it},FI:{rest:It,bio:Ie,paper:_t,plastic:It,glass:it,garden:it}},vg="DE";function xg(){return vg}function cc(o,t){return pg[t]?.[o]??pg.default[o]??It}function wg(o,t=vg){let e=cc(o.bin_kind??"rest",t),n=o.bin_color||e[0];return[n,o.bin_lid||(o.bin_color?n:e[1])]}var kg=["default","none","toggle","more_info","camera","navigate","url","perform_action"];function $g(o,t,e){return o!=="perform_action"||e||t?.action==="perform_action"}function Mg(o,t){return o?.action==="perform_action"&&!t}var dc=["tap","hold","double_tap"];function iv(o){return!!o&&dc.some(t=>!!o[t]&&o[t].action!=="default")}function Eg(o,t,e){let n={...o??{}};return e&&e.action!=="default"?n[t]=e:delete n[t],iv(n)?n:null}function Sg(o){if(!o.trim())return null;let t=JSON.parse(o);if(!t||typeof t!="object"||Array.isArray(t))throw new TypeError("not an object");return t}var Sr=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent","paint"];var Pg=/^#[0-9a-f]{6}$/i,Fg=[{id:"white",hex:"#f2f2ee"},{id:"black",hex:"#1b1c1f"},{id:"silver",hex:"#b9bdc3"},{id:"grey",hex:"#6c7075"},{id:"blue",hex:"#2f63b5"},{id:"red",hex:"#b3262d"},{id:"green",hex:"#2f6b45"},{id:"orange",hex:"#e08a1e"},{id:"bronze",hex:"#7d5a3a"},{id:"dark_blue",hex:"#17274a"}];function Rg(o){let t=o.trim().replace(/^#/,"").toLowerCase();return/^[0-9a-f]{3}$/.test(t)?`#${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:/^[0-9a-f]{6}$/.test(t)?`#${t}`:null}function Ig(o,t){let e=o?.[t];return typeof e=="string"&&Pg.test(e)?e:null}var uc=[{id:"oak",hex:"#c09a6b"},{id:"walnut",hex:"#5c4033"},{id:"rattan",hex:"#c8a46e"},{id:"white_gloss",hex:"#f4f4f1"},{id:"black",hex:"#222326"},{id:"grey_fabric",hex:"#8a8c8f"},{id:"beige_fabric",hex:"#d6c8ae"},{id:"navy_fabric",hex:"#2e3f66"},{id:"green_velvet",hex:"#3f6b4f"},{id:"brass",hex:"#b5a14a"},{id:"chrome",hex:"#c8ccd2"},{id:"terracotta",hex:"#c0643f"},{id:"black_brown",hex:"#3a2f2a"},{id:"white_stained_oak",hex:"#dccfb8"},{id:"birch",hex:"#dcc39a"},{id:"pine",hex:"#d8b27a"},{id:"acacia",hex:"#8a5a36"},{id:"anthracite",hex:"#45484c"}],ov={radiator:"white metal",ac_unit:"white dark",sofa:"fabric cushion wood",sofa_l:"fabric cushion wood",sofa_u:"fabric cushion wood",armchair:"fabric cushion wood",stool:"fabric cushion wood",coffee_table:"body wood",tv_board:"body metal dark",tv_wall:"metal dark",sideboard:"wood metal",shelf:"body fabric cushion wood",plant:"wood plant pot",rug:"fabric",table:"body wood",table_round:"wood metal",chair:"cushion wood",bench:"cushion wood",corner_bench:"cushion wood",bar_stool:"fabric cushion metal",kitchen:"body white dark",kitchen_wall:"body",kitchen_tall:"body dark",island:"body white dark",worktop:"white",sink:"body white metal dark",stove:"body dark",dishwasher:"body white dark",fridge:"white",bed:"fabric cushion wood white",bunk_bed:"wood white",nightstand:"body dark",wardrobe:"body dark",dresser:"wood dark",bathtub:"white metal glass",shower:"white metal",wc:"white",washbasin:"body white metal dark glass",washer:"white",dryer:"white",desk:"body wood metal dark",office_chair:"fabric cushion metal dark",tall_cabinet:"body dark",coat_rack:"body wood metal",stairs:"wood",stairs_u:"wood",robot_vacuum:"white accent",inverter:"white dark",home_battery:"white dark",wallbox:"body dark",meter:"white dark",grid_point:"body dark",pool_pump:"body metal dark glass",pool_filter:"body metal dark",pool_heat_pump:"white dark",pool_dosing:"white glass",pool_valve:"metal dark accent",fridge_smart:"body dark accent",loft_ladder:"white metal",awning:"body fabric accent",waste_bin:"metal dark",mailbox:"metal dark",wall_switch:"white",wall_socket:"white dark",wifi_ap:"white metal",water_heater:"white dark"};function Ag(o){let t=wt(o);if(t){let n=new Set(t.parts.flatMap(i=>[i.color,i.top]));return Sr.filter(i=>n.has(i))}if(Pt(o))return["body"];let e=ov[o];return e?e.split(" "):[]}function pc(o,t,e){let n={...o};return e&&Pg.test(e)?n[t]=e.toLowerCase():delete n[t],Object.keys(n).length?n:null}var hc=["matt","gloss","fabric","glass","metal","rattan"],sv={fabric:"fabric",cushion:"fabric",metal:"metal",glass:"glass",white:"gloss",paint:"gloss"},zg=o=>typeof o=="string"&&hc.includes(o);function Og(o){return sv[o]??"matt"}function Tg(o,t){let e=o?.[t];return zg(e)?e:null}function Lg(o,t,e){let n={...o};return zg(e)?n[t]=e:delete n[t],Object.keys(n).length?n:null}function Cg(o){return Pt(o)&&/:(?:[a-z0-9_.-]*_)?3d_printer(?:_[a-z0-9_.-]*)?$/.test(o)}var rv=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);function Hg(o){let t=mt(o);return t?[...t.tags??[],t.family??""].map(e=>e.toLowerCase()):[]}var av=/^(boiler|gas boiler|oil boiler|combi|combi boiler|system boiler|water heater|hot water cylinder|heat pump)$/,lv=/^(smoke alarm|smoke detector|co alarm|co detector|carbon monoxide|heat alarm|water meter|gas meter|leak sensor|leak detector|water leak sensor|motion sensor|door sensor|contact sensor|sensor)$/;function fc(o){return Zo(o)||Hg(o).some(t=>av.test(t))}function mc(o){return $d(o)||Hg(o).some(t=>lv.test(t))}function Pr(o){return!!mt(o)?.vehicle}function cv(o){return o==="ac_unit"||Ee(o)||fc(o)||on(o)||mc(o)||Pr(o)}function Fr(o){return mi(o)&&(!Pt(o)||Ed(o))&&!cv(o)}function Dg(o){return kt(o)?{label:"furn_entity_light",domains:["light","switch","input_boolean"]}:Oe(o)?{label:"motor_cover",domains:["cover","switch"]}:o==="ac_unit"||Ee(o)?{label:"furn_entity_climate",domains:["climate"]}:fc(o)?{label:"furn_entity_heater",domains:["climate","water_heater","switch"]}:re(o)?{label:"furn_entity_vacuum",domains:["vacuum"]}:on(o)?{label:"furn_entity_camera",domains:["camera"]}:mc(o)?{label:"furn_entity_sensor",domains:["sensor","binary_sensor"]}:Pr(o)?{label:"furn_entity_car",domains:["device_tracker","binary_sensor","sensor"]}:Fr(o)?{label:"furn_entity_tv",domains:["media_player","switch"]}:o==="awning"?{label:"awning_cover",domains:["cover"]}:{label:"furn_entity",domains:["switch"]}}function gc(o,t,e){if(kd(t))return!0;if(kt(t))return/^(light|switch|input_boolean)\./.test(e);if(t==="ac_unit"||Ee(t))return e.startsWith("climate.");if(Fr(t))return/^(media_player|switch|input_boolean|light)\./.test(e)||Oe(t)==="screen"&&e.startsWith("cover.");if(t==="awning")return e.startsWith("cover.");let n=Oe(t);return n==="curtain"||n==="blind"?/^(cover|switch|input_boolean)\./.test(e):re(t)?e.startsWith("vacuum."):on(t)&&e.startsWith("camera.")||/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(e)||fc(t)&&e.startsWith("water_heater.")||(mc(t)||Cg(t)||Pr(t))&&/^(binary_sensor|sensor)\./.test(e)||Pr(t)&&e.startsWith("device_tracker.")||Va(o.states[e])||e.startsWith("binary_sensor.")&&(t.endsWith("smoke_detector")||rv.has(String(o.states[e]?.attributes.device_class??"")))}function Vg(o,t){return e=>gc(o,t,e)}function Wg(o,t){let e={...o,...t};for(let[n,i,s]of[["from","to",null],["start","end","00:00"]]){let r=n in t?n:i in t?i:null;if(!r)continue;let a=r===n?i:n;e[r]?e[a]||(e[a]=s??e[r]):(e[n]=null,e[i]=null)}return e}var Rr=class{glowScaleField(t,e){return m`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isEditor}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(i-1)<.001?null:i)}}
    /></label>`}renderFurnitureForm(t){if(this.selection().length>1)return this.renderBlockForm();let e=this.isEditor,n=ag({mirror:!kt(t.type),strip:t.type==="led_strip",lift:ge(t)&&!!this.floor,floors:this._doc.floors.length>1});return m`<section>
      <div class="fp3d-pos-head">
        <div class="fp3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
        <div class="fp3d-form">${n.head.map(i=>this.furnitureField(t,i))}</div>
      </div>
      ${this.renderLinkBlock(t)}
      ${t.group?m`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:y}
      <div class="fp3d-form">${n.body.map(i=>this.furnitureField(t,i))}</div>
      ${this.renderColourRoles(t)}
      ${t.type==="stairs"?m`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:y}
      ${t.type==="stairs"?this.renderStairOptions(t):y}
      ${t.type==="stairs_u"?m`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:y}
      ${t.type==="stairwell"?m`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(i=>i.points.length>=3&&(ug(Bt(t),i.points)||Ft(Ul(i.points,Bt(t)))>.01))?m`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:y}`:y}
      ${t.type==="inverter"||t.type==="home_battery"?m`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!e} @change=${i=>this.updateFurniture({variant:i.target.value||null})}>
                ${(t.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(i=>m`<option value=${i} ?selected=${(t.variant??"")===i}>${this.t(`${t.type==="inverter"?"inverter":"battery"}_${i||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${t.type==="lamp_pendant"?m`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${i=>this.updateFurniture({variant:i.target.value||null})}>
                ${["","globe","cone","drum"].map(i=>m`<option value=${i} ?selected=${(t.variant??"")===i}>${this.t(`pendant_${i||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${lu.has(t.type)?this.renderGangsForm(t):y} ${uu.has(t.type)?this.renderTechForm(t):y} ${t.type==="parking"?this.renderParkingForm(t):y} ${t.type==="waste_bin"||t.type==="mailbox"?this.renderHouseholdForm(t):this.renderHouseholdExtras(t)}
      ${this.renderModuleFurnitureFields(t)}
      ${this.renderShowWhen(t)}
      ${this.renderItemActions(t.actions,t.entity&&t.entity!=="none"?t.entity:null,i=>this.updateFurniture({actions:i}))}
      ${/^pack:[^:]+\.vehicles:/.test(t.type)&&this.isEditor?m`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(t)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:y}
      ${this.rackOf(t)?this.renderRackFrameForm(t):y}
      ${this.renderRackElevation(t)}
      ${this.renderRackCardForm(t)}
      ${!e&&this.rackOf(t)?m`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>this.openRackSheet()}>▤ ${this.t("rack_edit")}</button></div>`:y}
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${Dt(this.t("rotate_left"),["Shift+R"])} @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" title=${Dt(this.t("rotate_right"),["R"])} @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(t)}>▦ ${this.t("wall_view")}</button>
            ${this.rackOf(t)?m`<button class="fp3d-btn" @click=${()=>this.openRackSheet()}>▤ ${this.t("rack_edit")}</button>`:y}
            ${t.entity&&t.entity!=="none"&&t.type!=="parking"?m`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(t)}>${this.t("as_device")}</button>`:y}
            ${this.renderClipButtons()}
            <button class="fp3d-btn fp3d-danger" title=${Dt(this.t("delete"),["Del"])} @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`:y}
    </section>`}renderLinkBlock(t){let e=Te(t.type)?this.renderFurnitureLinks(t):of.has(t.type)?y:m`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`;return e===y?y:m`<div class="fp3d-link-block"><h4 class="fp3d-link-title">${this.t("link_device")}</h4>${e}</div>`}furnitureField(t,e){let n=this.isEditor;switch(e){case"x":return this.len(this.t("x"),t.x,i=>this.updateFurniture({x:i}));case"z":return this.len(this.t("z"),t.z,i=>this.updateFurniture({z:i}));case"rotation":return this.num(this.t("rotation"),t.rotation,i=>this.updateFurniture({rotation:(i%360+360)%360}),1);case"w":return this.len(this.t("width"),t.w,i=>this.updateFurniture({w:Math.max(.01,i)}),.01,.01);case"d":return this.len(this.t("depth"),t.d,i=>this.updateFurniture({d:Math.max(.01,i)}),.01,.01);case"h":return this.len(this.t("height_m"),t.h,i=>this.updateFurniture({h:Math.max(.005,i)}),.01,0);case"mount":return m`${this.len(this.t("mount_height"),t.mount_y??jt(this.floor,t),i=>this.updateFurniture({mount_y:Math.min(Xe,Math.max(0,i))}),.01,0)}
          ${t.mount_y!=null?m`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!n} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:y}`;case"mirror":return m`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
          ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!n} @change=${i=>this.updateFurniture({mirror:i.target.checked})} />
          ${this.t("furn_mirror")}</label
        >`;case"strip":return m`${this.num(this.t("strip_tilt"),t.tilt??0,i=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(i)))}),5)}
          ${t.upright?y:m`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"),t.rise??0,i=>this.updateFurniture({rise:Math.max(-80,Math.min(80,Math.round(i)))||void 0}),5)}</span>`}
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
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${i=>this.updateFurniture({aliases:ui(i.target.value)})}
        /></label>`;case"type":return m`<label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!n} @change=${i=>this.retypeFurniture(i.target.value)}>
            ${this.typeChoices(t.type).map(i=>m`<option value=${i} ?selected=${i===t.type}>${this.t(`furn_${i}`)}</option>`)}
            ${(this.packs??[]).filter(i=>i.items.length).map(i=>m`<optgroup label=${me(i,this.hass?.language??"de")}>
                  ${this.typeLabels(i).map((s,r)=>{let a=St(i.id,i.items[r].id);return m`<option value=${a} ?selected=${a===t.type}>${s}</option>`})}
                </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(i=>t.type.startsWith(`pack:${i.id}:`))?m`<option value=${t.type} selected>${pt(this.hass,t.type)}</option>`:y}
          </select></label
        >`;case"floor":return this.renderItemFloor()}}renderItemFloor(){return m`<label class="fp3d-field fp3d-wide" title=${this.t("item_floor_hint")}
      >${this.t("floor")}
      <select ?disabled=${!this.isEditor} @change=${t=>this.moveSelectionToFloor(t.target.value)}>
        ${[...this._doc.floors].reverse().map(t=>m`<option value=${t.id} ?selected=${t.id===this._floorId}>${t.name}</option>`)}
      </select></label
    >`}renderItemActions(t,e,n){let i=this.isEditor,s=(a,l)=>{let c=t?.[a];n(Eg(t,a,l===null?null:{...c??{action:"default"},...l}))},r=a=>a==="navigate"?"/lovelace/garden":a==="url"?"https://":a==="perform_action"?"script.turn_on":e??"light.kitchen";return m`<h4>${this.t("item_actions")}</h4>
      <p class="fp3d-sub">${this.t("item_actions_hint")}</p>
      ${i&&!this.isHaAdmin?m`<p class="fp3d-sub">${this.t("item_action_perform_admin")}</p>`:y}
      ${dc.map(a=>{let l=t?.[a]??null,c=l?.action??"default",d=c!=="default"&&c!=="none",u=!i||Mg(l,this.isHaAdmin);return m`<div class="fp3d-form fp3d-item-action" data-gesture=${a}>
          <label class="fp3d-field fp3d-wide"
            >${this.t(`item_gesture_${a}`)}
            <select ?disabled=${!i} @change=${h=>{let p=h.target.value;s(a,p==="default"?null:{action:p,target:null,data:null})}}>
              ${kg.map(h=>m`<option value=${h} ?selected=${h===c} ?disabled=${!$g(h,l,this.isHaAdmin)}>${this.t(`item_action_${h}`)}</option>`)}
            </select></label
          >
          ${d?m`<label class="fp3d-field fp3d-wide"
                >${this.t(`item_target_${c}`)}
                <input type="text" maxlength="2000" .value=${l?.target??""} ?disabled=${u} placeholder=${r(c)} @change=${h=>s(a,{target:h.target.value.trim()||null})}
              /></label>`:y}
          ${c==="perform_action"?m`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="3"
                  spellcheck="false"
                  ?disabled=${u}
                  placeholder='{"entity_id": "script.movie_night"}'
                  .value=${l?.data?JSON.stringify(l.data,null,1):""}
                  @change=${h=>{let p=h.target;p.setCustomValidity("");try{s(a,{data:Sg(p.value)})}catch{p.setCustomValidity(this.t("own_data_bad")),p.reportValidity()}}}
                ></textarea></label
              >`:y}
          ${d?m`<label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!l?.confirm} ?disabled=${u} @change=${h=>s(a,{confirm:h.target.checked||void 0})} />
                  ${this.t("item_action_confirm")}</label
                >
                ${l?.confirm?m`<label class="fp3d-field fp3d-wide"
                      >${this.t("item_action_confirm_text")}
                      <input type="text" maxlength="300" .value=${l.confirm_text??""} ?disabled=${u} placeholder=${this.t("item_action_confirm_placeholder")} @change=${h=>s(a,{confirm_text:h.target.value.trim()||null})}
                    /></label>`:y}`:y}
        </div>`})}`}renderShowWhen(t){let e=t.show_when??{},n=e.intervals??[],i=!this.isEditor,s=l=>{let c={...e,...l};this.updateFurniture({show_when:c.entity&&c.entity!=="none"||c.intervals?.length?c:null})},r=(l,c)=>s({intervals:n.map((d,u)=>u===l?Wg(d,c):d)}),a=(l,c,d,u)=>m`<label class="fp3d-field"
        >${l}
        <input type=${c} ?disabled=${i} .value=${d?c==="date"?`2028-${d}`:d:""} @change=${h=>{let p=h.target.value;u(p?c==="date"?p.slice(5):p:null)}}
      /></label>`;return m`<details class="fp3d-section" ?open=${!!t.show_when}>
      <summary>${this.t("show_when")}</summary>
      <div class="fp3d-form">
        ${this.entitySelect(this.t("show_when_entity"),e.entity??null,void 0,this.entityOptions(()=>!0),l=>s({entity:l==="none"?null:l}))}
        ${n.map((l,c)=>m`${a(this.t("show_from"),"date",l.from,d=>r(c,{from:d}))} ${a(this.t("show_to"),"date",l.to,d=>r(c,{to:d}))}
            ${a(this.t("show_start"),"time",l.start,d=>r(c,{start:d}))} ${a(this.t("show_end"),"time",l.end,d=>r(c,{end:d}))}
            <button class="fp3d-pin" title=${this.t("delete")} ?disabled=${i} @click=${()=>s({intervals:n.filter((d,u)=>u!==c)})}>✕</button>`)}
      </div>
      ${i||n.length>=12?y:m`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>s({intervals:[...n,{}]})}>+ ${this.t("show_add_interval")}</button></div>`}
      <p class="fp3d-sub">${this.t("show_when_hint")}</p>
    </details>`}renderStateLinks(t){return m`${this.entitySelect(this.t("furn_state_entity"),t.state_entity??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture(au(t,e)))}
              ${t.state_entity&&t.state_entity!=="none"?m`${this.entitySelect(this.t("furn_state_entity2"),t.state_entity2??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture({state_entity2:e==="none"?null:e}))}
                    ${t.state_entity2&&t.state_entity2!=="none"?m`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isEditor} @change=${e=>this.updateFurniture({state_split:e.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${t.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${t.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:y}`:y}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderColourRoles(t){let e=Ag(t.type);if(!e.length)return y;let n=this.isEditor,i=(a,l)=>this.updateFurniture({colors:pc(t.colors,a,l)}),s=(a,l)=>this.updateFurniture({materials:Lg(t.materials,a,l||null)}),r=a=>this.t(`material_${a}`);return m`<div class="fp3d-form">
      <h4 class="fp3d-lib-head fp3d-wide">${this.t("colours")}</h4>
      ${e.map(a=>{let l=Ig(t.colors,a);if(a==="paint")return this.renderPaint(t,l);let c=l?uc.find(u=>u.hex===l):void 0,d=Tg(t.materials,a);return m`<div class="fp3d-field fp3d-colour-role">
          <span>${this.t(`colour_role_${a}`)}</span>
          <span class="fp3d-colour-pick">
            <input type="color" class=${l?"":"fp3d-colour-unset"} aria-label=${this.t(`colour_role_${a}`)} .value=${l??"#808080"} ?disabled=${!n}
              @change=${u=>i(a,u.target.value)} />
            <select ?disabled=${!n} @change=${u=>i(a,u.target.value||null)}>
              <option value="" ?selected=${!l}>${this.t("colour_theme")}</option>
              ${l&&!c?m`<option value=${l} selected>${this.t("colour_own")}</option>`:y}
              ${uc.map(u=>m`<option value=${u.hex} ?selected=${u===c}>${this.t(`colour_preset_${u.id}`)}</option>`)}
            </select>
            <select class="fp3d-material" aria-label=${this.t("material_of",{role:this.t(`colour_role_${a}`)})} ?disabled=${!n}
              @change=${u=>s(a,u.target.value)}>
              <option value="" ?selected=${!d}>${this.t("material_usual",{material:r(Og(a))})}</option>
              ${hc.map(u=>m`<option value=${u} ?selected=${u===d}>${r(u)}</option>`)}
            </select>
          </span>
        </div>`})}
      <p class="fp3d-sub fp3d-wide">${this.t("colours_hint")}</p>
    </div>`}renderPaint(t,e){let n=this.isEditor,i=this.t("colour_role_paint");return m`<div class="fp3d-field fp3d-colour-role fp3d-wide">
      <span>${i}</span>
      <span class="fp3d-paint">
        ${Fg.map(s=>{let r=this.t(`paint_${s.id}`);return m`<button type="button" class="fp3d-swatch" style=${`background:${s.hex}`} title=${r} aria-label=${r} aria-pressed=${e===s.hex?"true":"false"}
            ?disabled=${!n} @click=${()=>this.setPaint(t,s.hex)}></button>`})}
        <input type="text" class="fp3d-paint-hex" maxlength="7" placeholder="#rrggbb" aria-label=${this.t("paint_hex")} .value=${e??""} ?disabled=${!n}
          @change=${s=>this.setPaint(t,s.target.value)} />
        <input type="color" class=${e?"":"fp3d-colour-unset"} aria-label=${this.t("paint_hex")} .value=${e??"#808080"} ?disabled=${!n}
          @change=${s=>this.setPaint(t,s.target.value)} />
        ${e?m`<button type="button" ?disabled=${!n} @click=${()=>this.setPaint(t,"")}>${this.t("colour_theme")}</button>`:y}
      </span>
    </div>`}setPaint(t,e){let n=Rg(e);e.trim()&&!n||this.updateFurniture({colors:pc(t.colors,"paint",n)})}renderHouseholdForm(t){let e=this.isEditor,n=(a,l,c,d,u)=>m`<label class="fp3d-field fp3d-wide"
        >${a}
        <select ?disabled=${!e} @change=${h=>u(h.target.value)}>
          ${c.map(h=>m`<option value=${h} ?selected=${h===l}>${this.t(d(h))}</option>`)}
        </select></label
      >`;if(t.type==="waste_bin"){let a=_g(t),l=t.bin_kind??"rest",[c,d]=wg(t),u=this.entityOptions(h=>h.startsWith("calendar.")||h.startsWith("sensor."));return m`<div class="fp3d-form fp3d-links">
        ${n(this.t("bin_shape"),a,ac,h=>`bin_shape_${h}`,h=>{let[p,f,b]=gg[h];this.updateFurniture({variant:h==="bin240"?null:h,w:p,d:f,h:b})})}
        ${n(this.t("bin_kind"),l,mg,h=>`bin_kind_${h}`,h=>{let[p,f]=cc(h,xg());this.updateFurniture({bin_kind:h,bin_color:p,bin_lid:f===p?null:f})})}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${c} ?disabled=${!e} @change=${h=>this.updateFurniture({bin_color:h.target.value})}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${d} ?disabled=${!e} @change=${h=>this.updateFurniture({bin_lid:h.target.value})}
        /></label>
        ${m`${this.entitySelect(this.t("bin_source"),t.bin_source??null,void 0,u,h=>this.updateFurniture({bin_source:h==="none"?null:h}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${t.bin_match??""} placeholder=${this.t(`bin_kind_${l}`)} ?disabled=${!e}
                  @change=${h=>this.updateFurniture({bin_match:h.target.value.trim()||null})} /></label>
              ${this.entitySelect(this.t("bin_out"),t.bin_out??null,void 0,this.entityOptions(h=>/^(input_boolean|switch|binary_sensor)\./.test(h)),h=>this.updateFurniture({bin_out:h==="none"?null:h}))}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_out_hint")}</p>
              <div class="fp3d-field fp3d-wide">
                <span>${this.t("bin_kerb")}</span>
                <div class="fp3d-actions">
                  <button class="fp3d-btn" aria-pressed=${this._kerbPick} ?disabled=${!e} @click=${()=>this._kerbPick=!this._kerbPick}>
                    ${this._kerbPick?"\u2713 ":""}${this.t(t.bin_kerb?"bin_kerb_move":"bin_kerb_set")}
                  </button>
                  ${t.bin_kerb?m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({bin_kerb:null})}>${this.t("bin_kerb_clear")}</button>`:y}
                </div>
              </div>
              <p class="fp3d-sub fp3d-wide">${this.t(this._kerbPick?"hint_kerb_pick":"bin_kerb_hint")}</p>
              ${this.renderSettingsLink("household","household.bin_from","settings_moved_bins")}`}
      </div>`}let i=yg(t),s=this.entityOptions(a=>["binary_sensor.","input_boolean.","sensor.","counter.","input_number."].some(l=>a.startsWith(l))),r=this.entityOptions(a=>a.startsWith("binary_sensor."));return m`<div class="fp3d-form fp3d-links">
      ${n(this.t("mailbox_shape"),i,lc,a=>`mailbox_shape_${a}`,a=>{let[l,c,d]=bg[a];this.updateFurniture({variant:a==="wall"?null:a,w:l,d:c,h:d})})}
      ${m`${this.entitySelect(this.t("mailbox_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,s,a=>this.updateFurniture({entity:a??"none"}))}
            ${this.entitySelect(this.t("mailbox_door"),t.mailbox_door??null,void 0,r,a=>this.updateFurniture({mailbox_door:a==="none"?null:a}))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`}
    </div>`}renderHouseholdExtras(t){let e=t.type==="plant"||hg(t.type),n=t.type==="washer"||t.type==="dryer"||t.type==="dishwasher",i=t.type==="fridge"||t.type==="fridge_smart",s=Te(t.type);if(!e&&!s&&fg(t.type))return m`<p class="fp3d-sub fp3d-wide">${this.t("bin_model_hint")}</p>`;if(!e&&!s)return y;let r=this.entityOptions(d=>d.startsWith("sensor.")),a=this.entityOptions(d=>d.startsWith("binary_sensor.")),l=this.entityOptions(d=>["sensor.","binary_sensor.","input_boolean.","input_datetime.","input_number."].some(u=>d.startsWith(u))),c=d=>d==="none"?null:d;return m`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("section_household")}</b></p>
      ${e?m`${this.entitySelect(this.t("hh_moisture"),t.moisture??null,void 0,this.entityOptions(d=>d.startsWith("plant.")||d.startsWith("sensor.")),d=>this.updateFurniture({moisture:c(d)}))}
            ${this.num(this.t("hh_moisture_min"),t.moisture_min??20,d=>this.updateFurniture({moisture_min:Math.max(0,Math.min(100,Math.round(d)))}),1)}`:y}
      ${n?m`${this.entitySelect(this.t("hh_remaining"),t.remaining??null,void 0,r,d=>this.updateFurniture({remaining:c(d)}))}
            ${this.entitySelect(this.t("hh_door"),t.door_left??null,void 0,a,d=>this.updateFurniture({door_left:c(d)}))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`:y}
      ${i?m`${t.type==="fridge"?this.entitySelect(this.t("hh_fridge_door"),t.door_left??null,void 0,a,d=>this.updateFurniture({door_left:c(d)})):y}
            ${this.num(this.t("hh_door_alarm"),t.door_alarm??2,d=>this.updateFurniture({door_alarm:Math.max(.5,Math.min(120,d))}),.5)}`:y}
      ${s?m`${this.entitySelect(this.t("hh_service_entity"),t.service??null,void 0,l,d=>this.updateFurniture({service:c(d)}))}
            ${t.service&&t.service!=="none"?this.num(this.t("hh_service_min"),t.service_min??10,d=>this.updateFurniture({service_min:Math.max(0,d)}),1):y}
            ${t.service&&t.service!=="none"||t.service2&&t.service2!=="none"?this.entitySelect(this.t("hh_service2_entity"),t.service2??null,void 0,l,d=>this.updateFurniture({service2:c(d)})):y}
            ${t.service2&&t.service2!=="none"?this.num(this.t("hh_service2_min"),t.service2_min??10,d=>this.updateFurniture({service2_min:Math.max(0,d)}),1):y}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`:y}
    </div>`}renderAwningFields(t){let e=this.isEditor,n=this.entityOptions(r=>r.startsWith("sensor.")||r.startsWith("input_number.")||r.startsWith("number.")),i={arm:{w:3,d:2.5,y:2.3,pitch:null},drop:{w:2.4,d:1.2,y:2.3,pitch:20},vertical:{w:2,d:.2,y:2.3,pitch:null},pergola:{w:4,d:3.5,y:2.6,pitch:6},side:{w:3,d:.2,y:1.8,pitch:null}},s=t.variant??"arm";return m`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!e}
          @change=${r=>{let a=r.target.value,l=i[a];this.updateFurniture({variant:a==="arm"?null:a,w:l.w,d:l.d,mount_y:l.y,awning_pitch:l.pitch})}}
        >
          ${Object.keys(i).map(r=>m`<option value=${r} ?selected=${s===r}>${this.t(`awning_kind_${r}`)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t(`awning_kind_${s}_hint`)}</p>
      ${s==="vertical"||s==="side"?y:this.num(this.t("awning_pitch"),t.awning_pitch??12,r=>this.updateFurniture({awning_pitch:Math.max(0,Math.min(80,Math.round(r)))}),1)}
      ${this.num(this.t("awning_time"),t.awning_time??20,r=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(r)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,r=>this.updateFurniture({awning_position:r==="none"?null:r}))}
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${t.awning_valance!==!1} ?disabled=${!e} @change=${r=>this.updateFurniture({awning_valance:r.target.checked})} />
        ${this.t("awning_valance")}</label
      >
      <label class="fp3d-check fp3d-wide" title=${this.t("awning_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${r=>this.updateFurniture({awning_invert:r.target.checked})} />
        ${this.t("awning_invert")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`}renderMotionFields(t){let e=this.isEditor,n=this.entityOptions(s=>s.startsWith("sensor.")||s.startsWith("input_number.")||s.startsWith("number.")),i=t.variant==="left"||t.variant==="right"?t.variant:"both";return m`${Oe(t.type)==="curtain"?m`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!e} @change=${s=>{let r=s.target.value;this.updateFurniture({variant:r==="both"?null:r})}}>
              ${["both","left","right"].map(s=>m`<option value=${s} ?selected=${i===s}>${this.t(`curtain_side_${s}`)}</option>`)}
            </select></label
          >`:y}
      ${this.num(this.t("motor_time"),t.awning_time??20,s=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(s)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,s=>this.updateFurniture({awning_position:s==="none"?null:s}))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${s=>this.updateFurniture({awning_invert:s.target.checked})} />
        ${this.t("awning_invert")}</label
      >`}renderTechForm(t){if(!this.hass)return y;let e=this.isEditor,n=t.type==="wifi_ap",i=["","wall"],s=l=>{let[c,d,u]=pu[`${t.type}:${l}`];this.updateFurniture({variant:l||null,w:c,d,h:u,mount_y:null})},r=this.entityOptions(l=>l.startsWith("sensor.")),a=this.entityOptions(l=>(n?/^(binary_sensor|sensor|device_tracker|switch|button|update)\./:/^(water_heater|climate|switch|input_boolean|sensor)\./).test(l),n);return m`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t("tech_mount")}
        <select ?disabled=${!e} @change=${l=>s(l.target.value)}>
          ${i.map(l=>m`<option value=${l} ?selected=${(t.variant??"")===l}>${this.t(`${t.type}_${l||"std"}`)}</option>`)}
        </select></label
      >
      ${this.entitySelect(this.t(n?"ap_status":"heater_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,a,l=>this.updateFurniture({entity:l&&l!=="none"?l:"none"}))}
      ${n?this.entitySelect(this.t("ap_clients_sensor"),t.clients??null,void 0,r,l=>this.updateFurniture({clients:l&&l!=="none"?l:null})):m`${this.entitySelect(this.t("heater_temp"),t.water_temp??null,void 0,r,l=>this.updateFurniture({water_temp:l&&l!=="none"?l:null}))}
            ${this.entitySelect(this.t("furn_power"),typeof t.power=="string"&&t.power!=="none"?t.power:null,void 0,this.entityOptions(l=>this.isPowerSensor(l)),l=>this.updateFurniture({power:l&&l!=="none"?l:"none"}))}`}
      <p class="fp3d-sub fp3d-wide">${this.t(n?"ap_hint":"heater_hint")}</p>
      <div class="fp3d-form">${this.markerSelect(t.marker??null,l=>this.updateFurniture({marker:l}))}${this.iconInput(t.icon,l=>this.updateFurniture({icon:l}))}</div>
    </div>`}renderGangsForm(t){if(!this.hass)return y;let e=this.isEditor,n=cu(t),i=t.type==="wall_socket",s=this.entityOptions(d=>/^(light|switch|input_boolean|fan)\./.test(d)),r=this.entityOptions(d=>this.isPowerSensor(d)),a=d=>this.updateFurniture({gangs:d.length>1||d[0]?.entity||d[0]?.power?d:null}),l=(d,u)=>a(n.map((h,p)=>p===d?{...h,...u}:h)),c=d=>{let u=Array.from({length:d},(h,p)=>n[p]??{entity:null});this.updateFurniture({gangs:d>1||u[0].entity||u[0].power?u:null,w:du(d)})};return m`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t(i?"gang_count_socket":"gang_count_switch")}
        <select ?disabled=${!e} @change=${d=>c(Number(d.target.value))}>
          ${Array.from({length:ls},(d,u)=>u+1).map(d=>m`<option value=${d} ?selected=${n.length===d}>${d}</option>`)}
        </select></label
      >
      ${i?m`<label class="fp3d-field"
            >${this.t("socket_kind")}
            <select ?disabled=${!e} @change=${d=>this.updateFurniture({variant:d.target.value||null})}>
              ${["","outdoor"].map(d=>m`<option value=${d} ?selected=${(t.variant??"")===d}>${this.t(d?"socket_outdoor":"socket_indoor")}</option>`)}
            </select></label
          >`:y}
      ${n.map((d,u)=>m`${this.entitySelect(`${this.t(i?"gang_socket":"gang_switch")}${n.length>1?` ${u+1}`:""}`,d.entity,void 0,s,h=>l(u,{entity:h&&h!=="none"?h:null}))}
        ${i?this.entitySelect(`${this.t("furn_power")}${n.length>1?` ${u+1}`:""}`,d.power??null,void 0,r,h=>l(u,{power:h&&h!=="none"?h:null})):y}`)}
      <p class="fp3d-sub fp3d-wide">${this.t(i?"gang_socket_hint":"gang_switch_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${d=>this.updateFurniture({confirm:d.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <div class="fp3d-form">${this.markerSelect(t.marker??null,d=>this.updateFurniture({marker:d}))}${this.iconInput(t.icon,d=>this.updateFurniture({icon:d}))}</div>
    </div>`}renderFurnitureLinks(t){if(!this.hass)return y;let e=this.hass,n=u=>this.keptForPlan(`furniture|${t.id}|${u}`,()=>{let h=structuredClone(this._doc.floors);for(let p of h)for(let f of p.furniture)f.id===t.id&&(f[u]=null);return Ce(e,h).get(t.id)?.[u]??null}),i=mi(t.type),s=kt(t.type),r=Ee(t.type),a=Dg(t.type),l=this.entityOptions(Vg(e,t.type),t.type),c=this.entityOptions(u=>this.isPowerSensor(u)),d=t.type==="fridge_smart"?this.entityOptions(u=>u.startsWith("binary_sensor.")):[];return m`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?m`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(a.label),t.entity??null,n("entity"),l,u=>this.updateFurniture({entity:u}),a.domains)}
        ${t.type==="lamp_fan"?m`${this.entitySelect(this.t("fan_entity"),t.fan??null,void 0,this.entityOptions(u=>u.startsWith("fan.")),u=>this.updateFurniture({fan:u&&u!=="none"?u:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("fan_hint")}</p>`:y}
        ${r?m`${this.entitySelect(this.t("heat_sensor"),t.heat_sensor??null,void 0,this.entityOptions(u=>/^(binary_sensor|sensor|switch|input_boolean|number)\./.test(u)),u=>this.updateFurniture({heat_sensor:u&&u!=="none"?u:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`:y}
        ${Wl(t.type)?m`${this.entitySelect(this.t("temp_sensor"),t.temp_sensor??null,jf(e,{...t,temp_sensor:null}),this.entityOptions(u=>u.startsWith("sensor.")&&e.states[u]?.attributes.device_class==="temperature"||/^(climate|water_heater)\./.test(u)),u=>this.updateFurniture({temp_sensor:u}))}
              <p class="fp3d-sub fp3d-wide">${this.t("temp_sensor_hint")}</p>`:y}
        ${t.type==="awning"?this.renderAwningFields(t):Oe(t.type)?this.renderMotionFields(t):y}
        ${!s&&!Pe(t.type)&&!Zi(t.type)?this.renderStateLinks(t):y}
        ${s&&t.entity&&t.entity!=="none"?m`${this.entitySelect(this.t("furn_color_entity"),t.color_entity??null,void 0,this.entityOptions(u=>u.startsWith("light.")&&u!==t.entity,t.entity),u=>this.updateFurniture({color_entity:u==="none"?null:u}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:y}
        ${s?this.glowScaleField(t.glow_scale,u=>this.updateFurniture({glow_scale:u})):y}
        ${s&&t.entity&&t.entity!=="none"?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!t.only_color} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({only_color:u.target.checked?"#ffd400":null})} />
                ${this.t("furn_only_color")}</label
              >
              ${t.only_color?m`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${t.only_color} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({only_color:u.target.value})} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:y}`:y}
        ${Ys(t.type)?m`${this.entitySelect(this.t("furn_meter_reading"),t.extra??null,void 0,this.entityOptions(u=>u.startsWith("sensor.")&&(["gas","water","volume"].includes(String(e.states[u]?.attributes.device_class??""))||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(String(e.states[u]?.attributes.unit_of_measurement??"")))),u=>this.updateFurniture({extra:u==="none"?null:u}))}`:y}
        ${s||t.type==="grid_point"||Ys(t.type)?y:this.entitySelect(this.t(xt(t.type)==="meter"?"energy_grid":xt(t.type)==="inverter"?"energy_solar_sensor":xt(t.type)==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,n("power"),c,u=>this.updateFurniture({power:u}))}
        ${!s&&t.power&&t.power!=="none"&&!Pe(t.type)?m`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${t.run_w?String(t.run_w):""}
                ?disabled=${!this.isEditor}
                @change=${u=>{let h=Number(u.target.value);this.updateFurniture({run_w:h>0?Math.min(5e3,Math.round(h)):null})}}
            /></label>`:y}
        ${!s&&t.power&&t.power!=="none"&&!Pe(t.type)?this.circuitSelect(t.circuit??null,t.power,u=>this.updateFurniture({circuit:u})):y}
        ${!s&&t.power&&t.power!=="none"&&!Pe(t.type)?this.wireEnergySelect(t.energy??null,t.power,u=>this.updateFurniture({energy:u})):y}
        ${!s&&!["grid_point","meter","inverter","home_battery"].includes(xt(t.type)??t.type)?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({holo:u.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:xt(t.type)==="inverter"?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${t.plant_card!==!1} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({plant_card:u.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${t.plant_card!==!1?m`${this.len(this.t("holo_right"),t.plant_right??0,u=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,$(u)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,u=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,$(u)))||void 0}),.25)}`:y}`:y}
      </div>
      ${xt(t.type)==="meter"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,c,u=>this.updateFurniture({export:u==="none"?null:u}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:y}
      ${xt(t.type)==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let u=(this._doc.settings.roof.strings??[]).filter(h=>h.inverter===t.id).map(h=>h.name);return m`<p class="fp3d-sub fp3d-wide">${u.length?this.t("inverter_strings",{names:u.join(", ")}):this.t("inverter_strings_none")}</p>`})():y}
      ${xt(t.type)==="home_battery"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(u=>Rt(u)&&(e.states[u]?.attributes.device_class==="battery"||e.states[u]?.attributes.unit_of_measurement==="%")),u=>this.updateFurniture({soc:u==="none"?null:u}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,c,u=>this.updateFurniture({charge:u==="none"?null:u}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:y}
      ${xt(t.type)==="wallbox"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(u=>wo(u)||Rt(u)),u=>this.updateFurniture({status:u==="none"?null:u}))}
          </div>`:y}
      ${!s&&!Ys(t.type)?this.entitySelect(this.t("furn_extra"),t.extra??null,void 0,this.entityOptions(u=>u.startsWith("sensor.")),u=>this.updateFurniture({extra:u==="none"?null:u})):y}
      ${!s||t.entity?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({confirm:u.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,u=>this.updateFurniture({marker:u}))}${this.iconInput(t.icon,u=>this.updateFurniture({icon:u}))}</div>`:y}
      ${re(t.type)?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,ap(e,Ce(e,this._doc.floors).get(t.id)?.entity??null,null),this.entityOptions(u=>Rt(u)),u=>this.updateFurniture({room_sensor:u}))}
          </div>`:y}
      ${t.type==="fridge_smart"?m`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,d,u=>this.updateFurniture({door_left:u}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,d,u=>this.updateFurniture({door_right:u}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:y}
      ${Zi(t.type)?this.renderPictureRules(t):y}
      <p class="fp3d-sub">${this.t(s?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":re(t.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){let e=this.isEditor,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(v=>v.items.filter(x=>x.vehicle).map(x=>({id:St(v.id,x.id),label:`${Ot(x,n)} \xB7 ${me(v,n)}`}))),s=v=>v.startsWith("device_tracker.")?this.hass?.states[v]?.attributes.source_type==="router"?2:0:1,r=[...this.entityOptions(v=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(v))].sort((v,x)=>s(v.id)-s(x.id)),a=this.entityOptions(v=>/^(sensor|input_select|select|input_text)\./.test(v)),l=t.type_entity?this.hass?.states[t.type_entity]:void 0,c=Array.isArray(l?.attributes.options)?l.attributes.options:[],d=t.types??[],u=v=>this.updateFurniture({types:v}),h=(v,x)=>m`<select ?disabled=${!e} @change=${w=>x(w.target.value||null)}>
        <option value="" ?selected=${!v}>${this.t("parking_vehicle_none")}</option>
        ${i.map(w=>m`<option value=${w.id} ?selected=${w.id===v}>${w.label}</option>`)}
      </select>`,p=this.floor,f=p?.rooms.find(v=>v.points.length>=3&&U([t.x,t.z],v.points)),b=t.vehicle?mt(t.vehicle):void 0,g=b?b.size[2]*(t.scale??1):0,_=!!f&&!!p&&g>p.height+1e-6;return m`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,r,v=>this.updateFurniture({entity:v==="none"?null:v}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${h(t.vehicle??null,v=>this.updateFurniture({vehicle:v}))}</label>
        ${i.length?y:m`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),v=>this.updateFurniture({scale:Math.min(150,Math.max(30,v))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,a,v=>this.updateFurniture({type_entity:v==="none"?null:v}))}
        ${t.type_entity?m`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${d.map((v,x)=>m`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${v.state}
                    ?disabled=${!e}
                    @change=${w=>u(d.map((E,k)=>k===x?{...E,state:w.target.value}:E))}
                  />
                  ${h(v.vehicle,w=>u(d.map((E,k)=>k===x?{...E,vehicle:w??""}:E)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>u(d.filter((w,E)=>E!==x))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${c.map(v=>m`<option value=${v}></option>`)}</datalist>
              ${e?m`<button class="fp3d-btn" @click=${()=>u([...d,{state:c[d.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:y}
            </div>`:y}
      </div>
      ${_?m`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Ht(this.hass,g,2),room:Ht(this.hass,p.height,2)})}</p>`:y}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){if(!this.hass)return y;let e=this.hass,n=t.car??{},i=rp(e,{entity:t.entity,car:{device:n.device}}),s=l=>this.updateFurniture({car:{...n,...l}}),r=this.entityOptions(l=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(l)),a=(l,c,d)=>this.entitySelect(this.t(c),n[l]??null,i[l],d,u=>s({[l]:u==="none"?"none":u}));return m`<section>
      <h3>🚗 ${this.t("section_car")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),n.device??null,void 0,r,l=>s({device:l==="none"?null:l}))}
        ${a("soc","car_soc",this.entityOptions(l=>Rt(l)))}
        ${a("range","car_range",this.entityOptions(l=>Rt(l)))}
        ${a("charging","car_charging",this.entityOptions(l=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(l)))}
        ${a("plugged","car_plugged",this.entityOptions(l=>wo(l)))}
        ${a("lock","car_lock",this.entityOptions(l=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(l)))}
        ${a("climate","car_climate",this.entityOptions(l=>/^(climate|switch|binary_sensor|input_boolean)\./.test(l)))}
        ${a("tracker","car_tracker",this.entityOptions(l=>l.startsWith("device_tracker.")))}
      </div>
    </section>`}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!t.includes(i.image)&&t.push(i.image);return t}renderPictureRules(t){let e=this.isEditor,n=t.pictures??[],i=_=>this.updateFurniture({pictures:_}),s=this.entityOptions(()=>!0),r=_=>["string","number","boolean"].includes(typeof _),a=_=>Object.entries(this.hass?.states[_]?.attributes??{}).filter(([v,x])=>r(x)&&v!=="friendly_name"&&v!=="icon").map(([v])=>v),l=(_,v)=>{let x=this.hass?.states[_];return x?String((v?x.attributes[v]:x.state)??""):""},c=(_,v)=>{let x=this.hass?.states[_],w=!v&&Array.isArray(x?.attributes.options)?x.attributes.options:[];return w.length?w:[l(_,v)]},d=_=>`${_.entity}\0${_.attribute??""}`,u=[];n.forEach((_,v)=>{let x=u.find(w=>d(w)===d(_));x?x.rows.push(v):u.push({entity:_.entity,attribute:_.attribute??null,rows:[v]})});let h=(_,v)=>i(n.map((x,w)=>_.rows.includes(w)?{...x,...v}:x)),p=(_,v)=>i(n.map((x,w)=>w===_?{...x,...v}:x)),f=this.storedPictures(),b=this.entityOptions(_=>_.startsWith("camera.")),g=_=>_.image.startsWith("camera:")?_.image.slice(7):null;return m`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?m`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${_=>this.updateFurniture({screen_bg:_.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:y}
      ${u.map(_=>m`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${s}
            .value=${_.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${v=>{v.stopPropagation(),h(_,{entity:v.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${v=>{let x=v.target.value||null,w=l(_.entity,x);i(n.map((E,k)=>_.rows.includes(k)?{...E,attribute:x,state:_.rows[0]===k?w:E.state}:E))}}
          >
            <option value="" ?selected=${!_.attribute}>${this.t("picture_state_of")}</option>
            ${a(_.entity).map(v=>m`<option value=${v} ?selected=${v===_.attribute}>${v}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(_.entity,_.attribute)||"\u2013"})}</span>
          ${_.rows.map(v=>{let x=n[v],w=!!this.hass&&sp(this.hass,x);return m`<div class="fp3d-picture-row ${w?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${v}"
                placeholder=${this.t("picture_state")}
                .value=${x.state}
                ?disabled=${!e}
                @change=${E=>p(v,{state:E.target.value})}
              />
              <datalist id="fp3d-picture-states-${v}"><option value="*"></option>${c(_.entity,_.attribute).map(E=>m`<option value=${E}></option>`)}</datalist>
              ${this._images[x.image]?m`<img class="fp3d-picture-thumb" src=${this._images[x.image].url} alt="" /> `:y}
              ${g(x)&&this.hass?.states[g(x)]?.attributes.entity_picture?m`<img class="fp3d-picture-thumb" src=${String(this.hass.states[g(x)].attributes.entity_picture)} alt="" />`:y}
              <label class="fp3d-btn fp3d-picture-pick">
                ${x.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${E=>{this.uploadPicture(E,t,v)}} />
              </label>
              ${f.filter(E=>E!==x.image).length?m`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(E=>E!==x.image&&this._images[E]).map(E=>m`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>p(v,{image:E})}><img src=${this._images[E].url} alt="" /></button>`)}
                  </div>`:y}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(x.image)?x.image:""}
                ?disabled=${!e}
                @change=${E=>{let k=E.target.value.trim();k&&p(v,{image:k})}}
              />
              ${b.length?m`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${b}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${g(x)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${E=>{E.stopPropagation(),E.detail.value!=="none"?p(v,{image:`camera:${E.detail.value}`}):g(x)&&p(v,{image:""})}}
                  ></fp3d-entity-picker>`:y}
              <span class="fp3d-sub">${w?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>i(n.filter((E,k)=>k!==v))}>✕</button>
            </div>`})}
          ${e?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:_.entity,attribute:_.attribute,state:l(_.entity,_.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:y}
        </div>`)}
      ${e?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:s[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:y}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){let i=t.target,s=i.files?.[0];if(i.value="",!!s)try{await this.storePicture(s,e,n)}catch(r){await this.tell(this.t("picture_failed",{error:Ue(r)}))}}async storePicture(t,e,n){let i=await createImageBitmap(t),s=Math.min(1,512/Math.max(i.width,i.height)),r=document.createElement("canvas");r.width=Math.round(i.width*s),r.height=Math.round(i.height*s),r.getContext("2d").drawImage(i,0,0,r.width,r.height);let a=r.toDataURL(t.type==="image/png"?"image/png":"image/jpeg",.85),l=N("pic");await gi(this.hass,l,a,this.home),this._images={...this._images,[l]:{url:a,aspect:r.height/r.width}};let c=this.furnitureItem?.id===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:c.map((d,u)=>u===n?{...d,image:l}:d)})}};var dv=/^[a-z_]+\.[a-z0-9_]+$/;function Ir(o,t){if(typeof o=="string")dv.test(o)&&t.add(o);else if(Array.isArray(o))for(let e of o)Ir(e,t);else if(o&&typeof o=="object")for(let e of Object.values(o))Ir(e,t)}function uv(o,t=[]){let e=new Set(t);for(let n of o.floors){for(let i of n.placements)e.add(i.entity_id);Ir(n.furniture,e),Ir(n.openings,e)}return e}function jg(o,t,e={}){let n=uv(t,e.linked),i=new Set(e.hidden??t.settings.unplaced_hidden??[]),s=c=>o.entities?.[c]?.device_id??null,r=new Set([...n].map(s).filter(c=>!!c)),a=new Map;for(let c of t.floors)for(let d of c.rooms)d.area_id&&!a.has(d.area_id)&&a.set(d.area_id,{floorId:c.id,roomId:d.id});let l=[];for(let c of Object.keys(o.areas??{})){let d=ne(o,c).filter(p=>Le(nt(p))),u=zn(o,d).filter(p=>![p.primary,...p.others].some(f=>n.has(f)||r.has(s(f)??""))).map(p=>p.primary).filter(p=>!i.has(p));if(!u.length)continue;let h=a.get(c);l.push({areaId:c,name:o.areas?.[c]?.name??c,floorId:h?.floorId??null,roomId:h?.roomId??null,ids:u})}return l.sort((c,d)=>c.name.localeCompare(d.name))}function pv(o){if(kt(o))return"light";if(o==="ac_unit"||Ee(o))return"climate";if(on(o))return"camera";if(Fr(o))return"media_player";if(re(o))return"vacuum";let t=Oe(o);return o==="awning"||t==="curtain"||t==="blind"?"cover":null}function Ng(o){return new Set(o.toLowerCase().split(/[^a-z0-9äöüß]+/).filter(t=>t.length>=3))}function Bg(o,t,e,n=new Map){let i=[];for(let a of e){let l=t.floors.flatMap(c=>c.rooms.filter(d=>d.area_id===a.areaId&&d.points.length>=3).flatMap(d=>c.furniture.filter(u=>U([u.x,u.z],d.points)).map(u=>({floorId:c.id,f:u}))));for(let{floorId:c,f:d}of l){if(d.entity!=null||n.get(d.id)?.entity||!Te(d.type))continue;let u=Ng(`${d.name??""} ${d.type.split(":").pop().replace(/_/g," ")}`),h=pv(d.type);for(let p of a.ids){if(!gc(o,d.type,p))continue;let f=[...Ng(`${et(o,p)} ${p.split(".")[1].replace(/_/g," ")}`)].filter(g=>u.has(g)).length,b=(h&&p.startsWith(`${h}.`)?2:0)+f;b>=2&&i.push({entity:p,floorId:c,f:d,score:b})}}}i.sort((a,l)=>l.score-a.score);let s=new Map,r=new Set;for(let a of i)s.has(a.entity)||r.has(a.f.id)||(r.add(a.f.id),s.set(a.entity,{floorId:a.floorId,furnitureId:a.f.id}));return s}function Kg(o,t,e){let n=(o.unplaced_hidden??[]).filter(i=>i!==t);return e?[...n,t]:n}function Ug(o,t){return(t.settings.unplaced_hidden??[]).filter(e=>!!o.states[e]).map(e=>{let n=_e(o,e);return{id:e,area:n?o.areas?.[n]?.name??n:null}}).sort((e,n)=>et(o,e.id).localeCompare(et(o,n.id)))}var Ar=class{placeDevices(t,e,n){let i=e??this.room;if(!i||!t.length||!this.isEditor)return;let s=new Set(t);this.change((r,a)=>{let l=n&&r.floors.find(d=>d.id===n)||a;for(let d of r.floors)d.placements=d.placements.filter(u=>!s.has(u.entity_id)),d.furniture=d.furniture.filter(u=>!(kt(u.type)&&u.entity&&s.has(u.entity)));let c=[...l.placements.map(d=>[d.x,d.z]),...l.furniture.filter(d=>kt(d.type)).map(d=>[d.x,d.z])];for(let d of np(i,t,c)){if(!d.entity_id.startsWith("light.")||i.outdoor){l.placements.push(d);let f=d.entity_id.startsWith("camera.")&&this.hass?ki(this.hass,d.entity_id,this.packs??[]):null;f&&pn(l,d.entity_id,f);continue}let[u,h,p]=ae.lamp_ceiling;l.furniture.push({id:N("furniture"),type:"lamp_ceiling",x:d.x,z:d.z,rotation:0,w:u,d:h,h:p,variant:null,entity:d.entity_id,power:null})}})}acceptLink(t,e){this.change(n=>{let i=n.floors.find(s=>s.id===e.floorId)?.furniture.find(s=>s.id===e.furnitureId);i&&(i.entity=t)})}setUnplacedHidden(t,e){this.change(n=>{n.settings.unplaced_hidden=Kg(n.settings,t,e)})}renderUnplaced(){let t=this.hass;if(!t||!this.isEditor||!t.areas)return y;let e=this._doc,n=this._unplacedOpen,i=(e.settings.unplaced_hidden??[]).length,s=a=>m`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Gn(nt(a)??"sensor")} /></svg>`,r=()=>{if(this._unplacedHiddenView){let g=Ug(t,e);return m`<button class="fp3d-link" @click=${()=>this._unplacedHiddenView=!1}>← ${this.t("unplaced_back")}</button>
          ${g.length?m`<div class="fp3d-room-list">
                ${g.map(_=>m`<div class="fp3d-row fp3d-dev-row">
                    <span class="fp3d-dev-name">${s(_.id)}<span>${et(t,_.id)}${_.area?m`<small class="fp3d-muted"> · ${_.area}</small>`:y}</span></span>
                    <button class="fp3d-link" @click=${()=>this.setUnplacedHidden(_.id,!1)}>${this.t("unplaced_unhide")}</button>
                  </div>`)}
              </div>`:m`<p class="fp3d-sub">${this.t("unplaced_hidden_none")}</p>`}`}let a=Ce(t,e.floors),l=[...a.values()].flatMap(g=>[g.entity,g.power]).filter(g=>!!g),c=this._floorId,d=jg(t,e,{linked:l}).sort((g,_)=>+(_.floorId===c)-+(g.floorId===c)),u=Bg(t,e,d,a),h=g=>{let _=e.floors.find(v=>v.id===g.floorId)?.furniture.find(v=>v.id===g.furnitureId);return _?_.name||pt(t,_.type):""},p=80,f=0,b=d.reduce((g,_)=>g+_.ids.length,0);return m`<p class="fp3d-sub">${this.t("unplaced_hint")}</p>
        ${d.length?m`<div class="fp3d-room-list">
                ${d.map(g=>{let _=g.ids.slice(0,Math.max(0,p-f));if(f+=_.length,!_.length)return y;let v=e.floors.find(w=>w.id===g.floorId),x=v?.rooms.find(w=>w.id===g.roomId);return m`<div class="fp3d-dev-area">${g.name}${x?y:m`<small class="fp3d-muted"> · ${this.t("unplaced_no_room")}</small>`}</div>
                    ${_.map(w=>{let E=u.get(w);return m`<div
                        class="fp3d-row fp3d-dev-row fp3d-unplaced-row"
                        draggable="true"
                        title=${this.t("unplaced_drag")}
                        @dragstart=${k=>{k.dataTransfer?.setData(bo,w),k.dataTransfer&&(k.dataTransfer.effectAllowed="copy")}}
                      >
                        <span class="fp3d-dev-name">${s(w)}<span>${et(t,w,g.name)}</span></span>
                        ${E?m`<button class="fp3d-link fp3d-suggest" @click=${()=>this.acceptLink(w,E)}>${this.t("unplaced_link",{name:h(E)})}</button>`:y}
                        ${x&&v?m`<button class="fp3d-link" @click=${()=>this.placeDevices([w],x,v.id)}>${this.t("devices_place")}</button>`:y}
                        <button class="fp3d-pin" title=${this.t("unplaced_hide")} aria-label=${this.t("unplaced_hide")} @click=${()=>this.setUnplacedHidden(w,!0)}>🙈</button>
                      </div>`})}`})}
              </div>
              ${b>f?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:b-f})}</p>`:y}`:m`<p class="fp3d-sub">${this.t("unplaced_none")}</p>`}
        ${i?m`<button class="fp3d-link" @click=${()=>this._unplacedHiddenView=!0}>${this.t("unplaced_hidden",{n:i})}</button>`:y}`};return m`<section>
      <details class="fp3d-points fp3d-unplaced" ?open=${n} @toggle=${a=>this._unplacedOpen=a.target.open}>
        <summary>${this.t("unplaced")}</summary>
        ${n?r():y}
      </details>
    </section>`}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Yt(i.placements.find(s=>s.entity_id===e),t))}centreDevice(){let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=this.floor?.rooms.find(r=>r.id===e);if(!t||!n)return;let[i,s]=Gt(n.points);this.updateDevice({x:$(i),z:$(s)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(u=>nt(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&U([u.x,u.z],t.points));if(n.length<2)return;let i=ft(t.points),s=i.x1-i.x0,r=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*s/Math.max(.1,r)))),l=Math.ceil(n.length/a),c=n.map((u,h)=>{let p=Math.floor(h/a),f=p===l-1?n.length-a*(l-1):a,b=h-p*a;return[$(i.x0+s/f*(b+.5)),$(i.z0+r/l*(p+.5))]}),d=n.map(u=>u.entity_id);this.change((u,h)=>{d.forEach((p,f)=>Yt(h.placements.find(b=>b.entity_id===p),{x:c[f][0],z:c[f][1]}))})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(kt(i.type)&&i.entity===t))})}renderPets(t){return this._doc.settings.pets?.on===!1?y:A`<g>${im(this._doc,t.id).map(e=>{let[n,i]=this.toScreen([e.x,e.z]);return A`<g data-pet=${e.id} class="fp3d-device fp3d-pet" transform="translate(${n} ${i})">
        <title>${e.name||this.t(`pet_kind_${e.kind}`)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Zh} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderDevices(t){return A`<g>${t.placements.map(e=>{let n=nt(e.entity_id);if(!n)return y;let[i,s]=this.toScreen([e.x,e.z]),r=this.hass?.states[e.entity_id]?.state==="on",a=e.entity_id===this._deviceId,l=`fp3d-device${r?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return A`<g data-device=${e.entity_id} class=${l} transform="translate(${i} ${s})">
        <title>${et(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Gn(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&e.locked?A`<text class="fp3d-lock" x=${i+16} y=${s-12}>🔒</text>`:y}`})}</g>`}renderDeviceForm(t){let e=this.isEditor,n=nt(t.entity_id),i=n==="light",s=t.mount??"ceiling",r=n?Ji(n,this.floor?.height??2.5,i?s:null):1;return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Gn(n):""} />
        </svg>
        ${et(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?m`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>m`<option value=${a} ?selected=${a===s}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(t.glow_scale,a=>this.updateDevice({glow_scale:a}))}`:n==="camera"?m`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >${this.renderCameraModel(t)}`:y}
        ${this.len(this.t("x"),t.x,a=>this.updateDevice({x:a}))} ${this.len(this.t("z"),t.z,a=>this.updateDevice({z:a}))}
        ${this.len(this.t("marker_height"),t.y??r,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?m`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.len(this.t("camera_reach"),t.reach??(t.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),t.tilt??(t.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${t.detect_pins!==!1} ?disabled=${!e} @change=${a=>this.updateDevice({detect_pins:a.target.checked?null:!1})} />
              ${this.t("camera_detect_pins")}</label
            >
            ${this.renderCameraDetections(t.entity_id)}`:y}
        ${n&&Qu.has(n)?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:y}
        ${Oi(this.hass,t.entity_id)?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!e} @change=${a=>this.updateDevice({holo:a.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:y}
        ${Oi(this.hass,t.entity_id)?this.circuitSelect(t.circuit??null,Oi(this.hass,t.entity_id),a=>this.updateDevice({circuit:a})):y}
        ${Oi(this.hass,t.entity_id)?this.wireEnergySelect(t.energy??null,Oi(this.hass,t.entity_id),a=>this.updateDevice({energy:a})):y}
        ${this.markerSelect(t.marker??null,a=>this.updateDevice({marker:a}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${t.name??""} ?disabled=${!e} maxlength="60" placeholder=${et(this.hass,t.entity_id)} @change=${a=>this.updateDevice({name:a.target.value.trim()||null})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!e} placeholder=${this.t("aliases_placeholder")} @change=${a=>this.updateDevice({aliases:ui(a.target.value)})}
        /></label>
        ${t.name?m`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${a=>this.updateDevice({show_name:a.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        ${this.iconInput(t.icon,a=>this.updateDevice({icon:a}))}
      </div>
      ${this.renderItemActions(t.actions,t.entity_id,a=>this.updateDevice({actions:a}))}
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?m`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:y}
            ${this.renderAsFurniture(t)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:y}
    </section>`}renderDeviceList(t){let e=this.isEditor,n=this.hass,i=t.area_id?n?.areas?.[t.area_id]?.name:void 0,s=n?ne(n,t.area_id).filter(k=>Le(nt(k))):[],r=new Set([...this.floor?.placements.filter(k=>U([k.x,k.z],t.points)).map(k=>k.entity_id)??[],...this.floor?.furniture.filter(k=>kt(k.type)&&k.entity&&U([k.x,k.z],t.points)).map(k=>k.entity)??[]]),a=n?[...s,...[...r].filter(k=>!s.includes(k)&&fi(n,k)&&Le(nt(k)))]:s,l=n?zn(n,a):[],c=l.map(k=>k.primary).filter(k=>!r.has(k)),d=this._deviceQuery.trim().toLowerCase(),u=k=>!d||et(n,k,i).toLowerCase().includes(d)||k.includes(d),h=this.floor?.placements.filter(k=>nt(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&U([k.x,k.z],t.points)).length,p=new Set(t.panel??[]),f=new Set(t.hidden??[]),b=new Set(t.no_state??[]),g=new Map;for(let k of this._doc.floors)for(let M of[...k.placements.map(F=>[F.entity_id,F.x,F.z]),...k.furniture.filter(F=>kt(F.type)&&F.entity).map(F=>[F.entity,F.x,F.z])]){let F=k.rooms.find(L=>U([M[1],M[2]],L.points));F&&F.id!==t.id&&g.set(M[0],F.name)}let _=(k,M=!1,F=i,L=!1)=>{let C=r.has(k),S=C?void 0:g.get(k);return m`<div class="fp3d-row fp3d-dev-row ${M||L?"fp3d-dev-extra":""} ${f.has(k)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${C?"":"fp3d-muted"}" ?disabled=${!C} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Gn(nt(k))} />
          </svg>
          <span>${et(n,k,F)}${S?m`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:S})}</small>`:y}</span>
        </button>
        ${e&&!M?m`<button
              class="fp3d-pin ${f.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(k)}
              title=${this.t(f.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:f.has(k)?[...f].filter(T=>T!==k):[...f,k]})}
            >
              ${f.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:y}
        ${e&&!M&&!f.has(k)?m`<button
              class="fp3d-pin ${b.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${b.has(k)}
              title=${this.t(b.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:b.has(k)?[...b].filter(T=>T!==k):[...b,k]})}
            >
              ${b.has(k)?"\u2205":"Aa"}
            </button>`:y}
        ${e&&!C?m`<button
              class="fp3d-pin ${p.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${p.has(k)}
              title=${this.t(p.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:p.has(k)?[...p].filter(T=>T!==k):[...p,k]})}
            >
              ${p.has(k)?"\u2605":"\u2606"}
            </button>`:y}
        ${e?C?m`<button class="fp3d-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:m`<button class="fp3d-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:y}
      </div>`},v=e?this._devSource:"area",x=k=>{this._devSource=k,this._deviceQuery=""},w=m`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,E=async()=>{await this.ask(this.t("devices_place_all_confirm",{n:c.length}),this.t("ask_ok"),!1)&&this.placeDevices(c)};return m`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?m`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${v==="area"} @click=${()=>x("area")}>${this.t("devices_src_area")}${a.length?` (${l.length})`:""}</button>
            <button aria-pressed=${v==="other"} @click=${()=>x("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${v==="none"} @click=${()=>x("none")}>${this.t("devices_src_none")}</button>
          </div>`:y}
      ${v!=="area"?m`${w}${this.renderDeviceExtras(t,_,v)}`:t.area_id?a.length?m`${e&&(h??0)>=2?m`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:y}
              ${a.length>8?w:y}
              <div class="fp3d-room-list">
                ${l.map(k=>{let M=k.others.filter(u),F=this._expanded.has(k.primary)||!!d&&M.length>0;return!u(k.primary)&&!M.length?y:m`${_(k.primary)}
                  ${k.others.length?m`<button
                        class="fp3d-more"
                        @click=${()=>{let L=new Set(this._expanded);L.has(k.primary)?L.delete(k.primary):L.add(k.primary),this._expanded=L}}
                      >
                        ${F?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:y}
                  ${F?this.renderDeviceOthers(d?M:k.others,L=>_(L,!1,i,!0),f,e):y}`})}
              </div>
              ${e&&c.length>1?m`<button class="fp3d-link fp3d-place-all" @click=${E}>${this.t("devices_place_all_n",{n:c.length})}</button>`:y}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceOthers(t,e,n,i){let r=t.every(l=>n.has(l)),a=()=>{let l=new Set(n);for(let c of t)r?l.delete(c):l.add(c);this.updateRoom({hidden:[...l]})};return m`${i&&t.length>=5?m`<button class="fp3d-link fp3d-dev-all" @click=${a}>
            ${this.t(r?"devices_show_all":"devices_hide_all",{n:t.length})}
          </button>`:y}
      ${t.slice(0,40).map(e)}
      ${t.length>40?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:t.length-40})}</p>`:y}`}renderDeviceExtras(t,e,n){let i=this.hass;if(!i)return y;let s=50,r=this._deviceQuery.trim().toLowerCase(),a=(d,u)=>!r||`${et(i,d,u)} ${d} ${u??""}`.toLowerCase().includes(r),l=d=>d>0?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:y;if(n==="other"){let d=0,u=0,h=Xu(i,t.area_id).map(p=>{let f=p.ids.filter(g=>a(g,p.name)),b=f.slice(0,Math.max(0,s-d));return d+=b.length,u+=f.length-b.length,b.length?m`<div class="fp3d-dev-area">${p.name}</div>${b.map(g=>e(g,!1,p.name))}`:y});return d?m`<div class="fp3d-room-list">${h}</div>${l(u)}`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=Zu(i).filter(d=>a(d));return c.length?m`<div class="fp3d-room-list">${c.slice(0,s).map(d=>e(d))}</div>${l(c.length-Math.min(c.length,s))}`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`}};var zr=class{renderCameraModel(t){let e=this.hass?.language??"en",n=this.packs??[],i=n.flatMap(a=>a.items.filter(Ds).map(l=>({type:St(a.id,l.id),label:Ot(l,e)}))).sort((a,l)=>a.label.localeCompare(l.label));if(!i.length)return y;let s=this.floor?.furniture.find(a=>a.look_of===t.entity_id)?.type??"",r=this.hass?ki(this.hass,t.entity_id,n):null;return m`<label class="fp3d-field fp3d-wide" title=${this.t("camera_model_hint")}
      >${this.t("camera_model")}
      <select
        ?disabled=${!this.isEditor}
        @change=${a=>{let l=a.target.value;this.change((c,d)=>pn(d,t.entity_id,l||null))}}
      >
        <option value="" ?selected=${!s}>${this.t("camera_look_builtin")}</option>
        ${s&&!i.some(a=>a.type===s)?m`<option value=${s} selected>${pt(this.hass,s)}</option>`:y}
        ${i.map(a=>m`<option value=${a.type} ?selected=${a.type===s}>${a.type===r?this.t("camera_model_found",{name:a.label}):a.label}</option>`)}
      </select></label
    >`}renderCameraDetections(t){if(!this.hass)return y;let e=this.hass,n=this.floor?.placements.find(h=>h.entity_id===t),i=Array.isArray(n?.detect_sensors)?n.detect_sensors:null,s=Nl(e,t),r=qf(e,t),a=[...new Set(r.map(h=>Kf(e,h)))],l=this.isEditor,c=h=>this.updateDevice({detect_sensors:h}),d=h=>h.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(e.states[h]?.attributes.device_class)),u=[...new Set([...s,...i??[]])];return m`<p class="fp3d-sub fp3d-wide">
        ${r.length?m`${this.t("camera_detect_found",{kinds:a.map(h=>this.t(`detect_${h}`)).join(", "),n:r.length})}`:this.t("camera_detect_none")}
      </p>
      <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_choose_hint")}
        ><input type="checkbox" .checked=${i!==null} ?disabled=${!l} @change=${h=>c(h.target.checked?[...s]:null)} />
        ${this.t("camera_detect_choose")}</label
      >
      ${i!==null?m`${u.map(h=>m`<label class="fp3d-check fp3d-wide fp3d-indent"
                  ><input type="checkbox" .checked=${i.includes(h)} ?disabled=${!l} @change=${p=>c(p.target.checked?[...i,h]:i.filter(f=>f!==h))} />
                  ${et(e,h)} <span class="fp3d-sub">${h}</span></label
                >`)}
            ${this.entitySelect(this.t("camera_detect_add"),null,void 0,this.entityOptionsFor(this.detectFilter(d,u)),h=>{h&&h!=="none"&&c([...i,h])})}`:y}`}detectFilter(t,e){let n=e.join(",");return this._detectFilter?.key!==n&&(this._detectFilter={key:n,fn:i=>t(i)&&!e.includes(i)}),this._detectFilter.fn}};function Or(o,t){let e;return()=>(e||(e=import(new URL(`./${o}.js?v=${t()}`,new URL(import.meta.url)).href).catch(i=>{throw e=void 0,i})),e)}var Gg=Or("home-3d-locate",()=>"b526f1d121b5");function qg(o){if(!o.hasFloor)return"hint_empty";if(o.placing)return"hint_place";if(o.wallPick)return"hint_wall_pick";if(o.kerbPick)return"hint_kerb_pick";if(o.fixedHint)return"fixed_drag_hint";if(o.tool==="outdoor"&&o.outdoorFree)return"hint_outdoor_free";if(o.tool==="pool")return o.jointPlace?"hint_joint_place":o.pipeMode?o.poolArea?o.pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool":o.poolTech?"hint_pool_tech":"hint_pool";if(o.tool==="select"){if(!o.rooms)return"hint_first_room";if(o.selected==="furniture")return"hint_sel_furniture";if(o.selected==="opening")return"hint_sel_opening";if(o.selected==="device")return"hint_sel_device"}return`hint_${o.tool}`}var Tr=class{hintText(){let t=this.drag?this._guides.lines?.[0]?.label:void 0;if(t)return this.t("hint_snapped",{what:t});let e=this.hintKeyNow();return e==="hint_place"&&this._placing?this.t("hint_place",{name:pt(this.hass,this._placing.type)}):e==="hint_opening"?this._openingNote??this._openingHover??this.t("hint_opening",{kind:this.t(`preset_${this._openingPreset}`)}):this.t(e)}hintKeyNow(){let t=this.floor;return qg({tool:this._tool,hasFloor:!!t,rooms:t?.rooms.length??0,placing:!!this._placing,selected:this._deviceId?"device":this._furnitureId?"furniture":this._openingId?"opening":this._roomId?"room":null,wallPick:this._wallPick,kerbPick:this._kerbPick,fixedHint:this._fixedHint,outdoorFree:!!this._outdoorFree,jointPlace:!!this._jointPlace,pipeMode:!!this._pipeMode,poolArea:!!this.poolArea,pipeDraft:!!this._pipeDraft,poolTech:Gi("pool")})}setTool(t){let e=this.floor;if(t!==this._tool&&(this.clearToolSelection(),(t==="roof"||t==="energy")&&(this._roomId=null)),this._tool=t,t!=="select"&&t!=="furniture"&&this.cancelPlacing(),this._draft=[],this._cursor=null,this._notice=null,this._rectName="",this._openingNote=null,this.openingHoverText=null,this._pipeMode=!1,this._pipeDraft=null,t==="pool"&&this.outdoorArea?.type!=="pool"){let n=e?.outdoor.find(i=>i.type==="pool");n&&this.selectItem("outdoor",n.id)}this.setSideFolded(!1)}renderToolBar(t){let e=this.isEditor,n=!t||!e,i=is.filter(p=>p!=="pool"),s={tool:"rect",label:this.t("tool_room"),choices:()=>[{label:this.t("tool_rect"),on:this._tool==="rect",pick:()=>this.setTool("rect")},{label:this.t("tool_polygon"),on:this._tool==="polygon",pick:()=>this.setTool("polygon")},{label:this.t("tool_measure"),on:this._tool==="measure",pick:()=>this.setTool("measure")}]},r={tool:"outdoor",label:this.t("tool_outdoor"),choices:()=>[...i.map(p=>({label:this.t(`out_${p}`),on:this._tool==="outdoor"&&(this._outdoorType??"lawn")===p,pick:()=>{this.setTool("outdoor"),this._outdoorType=p}})),{label:this.t("outdoor_shape_rect"),on:this._tool==="outdoor"&&!this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!1)},{label:this.t("outdoor_shape_free"),on:this._tool==="outdoor"&&this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!0)}]},a={tool:"pool",label:this.t("tool_pool"),choices:()=>[...["rect","round","oval","free"].map(p=>({label:this.t(`pool_shape_${p}`),on:this._tool==="pool"&&!this._pipeMode&&(this._poolShape??"rect")===p,pick:()=>{this.setTool("pool"),this._poolShape=p,this._outdoorFree=p==="free"}})),...this.pipeRules?[{label:this.t("pool_pipe_draw"),on:this._tool==="pool"&&!!this._pipeMode,pick:()=>(this.setTool("pool"),this._pipeMode=!0)}]:[]]},l=[{id:"build",label:this.t("tool_group_build"),entries:[s,{tool:"wall",label:this.t("tool_wall")},{tool:"opening",label:this.t("tool_opening")},{tool:"hole",label:this.t("tool_hole")},{tool:"roof",label:this.t("tool_roof")}]},{id:"outside",label:this.t("tool_group_outside"),entries:[r,a]}],c=p=>p.tool===this._tool||p===s&&(this._tool==="polygon"||this._tool==="measure"),d=p=>p===a?this._pipeMode?this.t("pool_pipe_draw"):this.t(`pool_shape_${this._poolShape??"rect"}`):p===r?this.t(`out_${this._outdoorType??"lawn"}`):p===s?this.t(`tool_${this._tool}`):"",u=()=>(this._toolMenu=null,this._toolOpen=null),h=(p,f)=>m`<button aria-pressed=${this._tool===p} ?disabled=${n} @click=${()=>(u(),this.setTool(p))}>${f}</button>`;return m`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool==="select"} ?disabled=${!t} @click=${()=>(u(),this.setTool("select"))}>${this.t("tool_select")}</button>
        ${l.map(p=>{let f=p.entries.find(c),b=this._toolMenu===p.id,g=f?`${f.label}${d(f)?`: ${d(f)}`:""}`:p.label;return m`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!f} aria-haspopup="menu" aria-expanded=${b} ?disabled=${n} @click=${()=>(this._toolMenu=b?null:p.id,this._toolOpen=null,this._viewMenu=!1)}>
              ${g} <span class="fp3d-caret">▾</span>
            </button>
            ${b?m`<div class="fp3d-menu-veil" @click=${u}></div>
                  <div class="fp3d-menu" role="menu">
                    ${p.entries.map(_=>{let v=_.choices?.()??[],x=this._toolOpen===_.tool;return m`<button
                          role="menuitem"
                          class="fp3d-menu-item ${c(_)?"fp3d-menu-on":""}"
                          aria-expanded=${v.length?x:y}
                          @click=${()=>{v.length?this._toolOpen=x?null:_.tool:(this.setTool(_.tool),u())}}
                        >
                          ${_.label}${v.length?m`<span class="fp3d-menu-more">${x?"\u25BE":"\u25B8"}</span>`:y}
                        </button>
                        ${x?m`<div class="fp3d-menu-sub">
                              ${v.map(w=>m`<button
                                    class="fp3d-chip ${w.on?"fp3d-menu-on":""}"
                                    @click=${()=>{w.pick(),this._draft=[],u()}}
                                  >
                                    ${w.label}
                                  </button>`)}
                            </div>`:y}`})}
                  </div>`:y}
          </div>`})}
        ${h("furniture",this.t("tool_furniture"))} ${h("energy",this.t("tool_energy"))}
      </div>
      <!-- Wall view is a mode: beside the tools, kept away from the view buttons by undo / redo (#91) -->
      <div class="fp3d-seg fp3d-seg-menu">
        <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${p=>(u(),this.toggleWallPick(p.currentTarget))}>${this.t("wall_view")}</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button class="fp3d-undo" ?disabled=${!this._canUndo} @click=${()=>this.undo()} title=${`${this.t("undo")} (Ctrl+Z)`} aria-label=${this.t("undo")}>↶</button>
        <button class="fp3d-undo" ?disabled=${!this._canRedo} @click=${()=>this.redo()} title=${`${this.t("redo")} (Ctrl+Y)`} aria-label=${this.t("redo")}>↷</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu fp3d-seg-views">
        <button class="fp3d-split-btn" aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>(u(),this.toggleSplit())}>${this._split?"\u25E7 ":"\u25A2 "}${this.t("split_3d")}</button>
        <button title=${this.t("fit_hint")} @click=${()=>(u(),this.fit())}>${this.t("fit")}</button>
        <button title=${this.t("fit_all_hint")} @click=${()=>(u(),this.fit(!0))}>${this.t("fit_all")}</button>
        <button class="fp3d-help-btn" aria-pressed=${this._help} aria-label=${this.t("help_open")} title=${this.t("help_open")} @click=${()=>(u(),this._help=!this._help)}>?</button>
      </div>
      ${this.renderSettingsMenu(u)}`}renderSettingsMenu(t){let e=this.isEditor,n=this._settingsMenu,s=[{key:"all",section:null,icon:"\u2699",label:this.t("all_settings"),admin:!1},{key:"house",section:"general",icon:"\u{1F3E0}",label:this.t("settings_house"),admin:!0},{key:"weather",section:"scene",id:"weather_entity",icon:"\u{1F326}",label:this.t("settings_weather"),admin:!0},{key:"director",section:"cameras",id:"director.doorbell",icon:"\u{1F3AC}",label:this.t("card_director"),admin:!0},{key:"voice",section:"voice",icon:"\u{1F399}",label:this.t("voice"),admin:!1},...Gi("locate")&&this.isHaAdmin?[{key:"locate",section:null,icon:"\u{1F4E1}",label:this.t("locate"),admin:!0}]:[],{key:"favorites",section:"favourites",icon:"\u2B50",label:this.t("favorites"),admin:!0},{key:"backdrop",section:"scene",id:"backdrop.kind",icon:"\u{1F5BC}",label:this.t("backdrop"),admin:!0},{key:"terrain",section:"scene",id:"terrain.level",icon:"\u26F0",label:this.t("terrain"),admin:!0},{key:"backup",section:"backup",icon:"\u{1F4BE}",label:this.t("backup"),admin:!0},...this.isHaAdmin?[{key:"editors",section:"access",icon:"\u{1F465}",label:this.t("editors_title"),admin:!0}]:[]].filter(a=>e||!a.admin),r=()=>{t(),this._settingsMenu=!n};return m`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-settings">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${n} title=${this.t("settings")} @click=${r}>
          ⚙ <span class="fp3d-settings-word">${this.t("settings")}</span> <span class="fp3d-caret">▾</span>
        </button>
        ${n?m`<div class="fp3d-menu-veil" @click=${()=>this._settingsMenu=!1}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu">
                ${s.map(a=>m`<button
                    role="menuitem"
                    class="fp3d-menu-item"
                    @click=${()=>{if(this._settingsMenu=!1,a.key==="locate"){this.hass&&Gg().then(l=>l.openLocateSetup(this.hass,this._doc,()=>this.hass,c=>this.setSettings({person_look:c==="figure"?null:c})));return}this.openSettings(a.section,a.id??null)}}
                  >
                    ${a.icon} ${a.label}
                  </button>`)}
              </div>`:y}
      </div>
    </div>`}renderSettingsLink(t,e,n,i="\u2699"){return m`<button class="fp3d-settings-link fp3d-wide" @click=${()=>this.openSettings(t,e)}>
      <span>${i} ${this.t(n)}</span><b>${this.t("settings")} ›</b>
    </button>`}openSettings(t,e=null){this.dispatchEvent(new CustomEvent("open-settings",{detail:{section:t,id:e},bubbles:!0,composed:!0}))}startAreas(){let t=this.floor;if(!t||!this.unplacedAreas(t).length){let e=this.freeHaFloors[0];if(!e)return;t&&!t.rooms.length&&!t.ha_floor?this.change((n,i)=>{i.ha_floor=e.floor_id,i.name=e.name}):this.addFloor(e),t=this.floor}t&&this.addAreaRooms(t)}hasStartAreas(){let t=this.floor;return this.freeHaFloors.length>0||!!t&&this.unplacedAreas(t).length>0}renderStart(){if(!this.isEditor||this._tool!=="select"||this._placing)return null;let t=wl(this._doc);if(!t.show)return null;let e=this.t.bind(this),n=this._doc.floors.length>0,i=()=>{this.floor||this.addFloor(),this.setTool("rect")},s={floor:n?y:m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.addFloor()}>${e("start_floor_btn")}</button>`,room:m`<button class="fp3d-btn ${n?"fp3d-primary":""}" @click=${i}>${e("start_room_btn")}</button>`,furniture:y};return m`<section class="fp3d-start" aria-label=${e("start_title")}>
      <h3>${e("start_title")}</h3>
      <ol>
        ${t.steps.map(r=>m`<li class=${r.done?"fp3d-start-done":""}>
              ${r.done?m`<span class="fp3d-start-mark" role="img" aria-label=${e("start_done")}>✓</span>`:m`<span class="fp3d-start-mark" aria-hidden="true"></span>`}
              <span class="fp3d-start-text">${e(`start_${r.step}`)}</span>
              ${r.done?y:s[r.step]}
            </li>`)}
      </ol>
      <p class="fp3d-start-or">${e("start_or")}</p>
      <div class="fp3d-start-alt">
        ${this.hasStartAreas()?m`<button class="fp3d-btn" @click=${()=>this.startAreas()}>${e("start_areas")}</button>`:y}
        <button class="fp3d-btn" @click=${()=>this.dispatchEvent(new CustomEvent("load-sample",{bubbles:!0,composed:!0}))}>${e("home_sample")}</button>
      </div>
    </section>`}renderHint(){let t=this.renderStart();if(t)return t;let e=this.hintKeyNow(),n=e==="hint_empty"||e==="hint_first_room",i=this._fixedHint||this._tool==="opening"&&!!this._openingNote;return m`<div class="fp3d-hint ${i?"fp3d-hint-fixed":""} ${n?"fp3d-hint-first":""}" role="status" aria-live="polite" title=${this.t("snap_off_tip")}>
      <span class="fp3d-hint-text" .textContent=${Es(this.hintText())}></span>
      <button class="fp3d-hint-help" title=${this.t("help_open")} @click=${()=>this._help=!0}>? ${this.t("hint_help")}</button>
    </div>`}renderHelp(){if(!this._help)return y;let t=()=>this._help=!1,e=n=>{let i=n==="swing"?A`<path class="fp3d-help-swing" d="M4 22L4 4A18 18 0 0 1 22 22" />`:n==="track"?A`<path class="fp3d-help-track" d="M4 20L4 4M22 20L22 4" />`:n==="guide"?A`<line class="fp3d-guide" x1="2" y1="13" x2="24" y2="13" />`:n==="snap"?A`<circle class="fp3d-snap" cx="13" cy="13" r="8" />`:n==="ghost"?A`<rect class="fp3d-ghost" x="3" y="5" width="20" height="16" />`:A`<rect class="fp3d-help-sel" x="3" y="5" width="20" height="16" rx="2" />`;return m`<svg class="fp3d-help-mark" viewBox="0 0 26 26" aria-hidden="true">${i}</svg>`};return m`<div class="fp3d-dialog-veil" @click=${n=>n.target===n.currentTarget&&t()}>
      <div class="fp3d-dialog fp3d-help-overlay" role="dialog" aria-modal="true" aria-label=${this.t("help_overlay_title")} tabindex="-1" ${cn()}>
        <div class="fp3d-dialog-head">
          <h3>${this.t("help_overlay_title")}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${t}>✕</button>
        </div>
        <div class="fp3d-dialog-body">
          <h4>${this.t("help_shortcuts")}</h4>
          <dl class="fp3d-help-keys">
            ${Np.map(n=>m`<dt>${n.keys.map((i,s)=>m`${s?" / ":""}<kbd>${i}</kbd>`)}</dt><dd>${this.t(n.text)}</dd>`)}
          </dl>
          <h4>${this.t("help_legend")}</h4>
          <ul class="fp3d-help-legend">
            ${jp.map(n=>m`<li>${e(n.mark)}<span>${this.t(n.text)}</span></li>`)}
          </ul>
        </div>
      </div>
    </div>`}};var hv="household.custom";function bc(o){return(o?.find(t=>t.id===hv)?.items??[]).filter(Pn)}var Yg=Or("home-3d-items",()=>"26f63647a70a");var _c="pack.json",fv=/^(?:README|LICEN[CS]E|COPYING|CHANGELOG)(?:\.(?:md|txt))?$/i;function Qg(o){let t=o.filter(i=>!i.split("/").some(s=>s.startsWith("."))),e=t.filter(i=>i===_c||i.endsWith(`/${_c}`)).map(i=>i.slice(0,-_c.length).replace(/\/$/,"")),n=new Map(e.sort().map(i=>[i,{root:i,files:new Map,refused:[]}]));for(let i of t){let s=e.filter(l=>l===""||i.startsWith(`${l}/`)).sort((l,c)=>c.length-l.length)[0];if(s===void 0)continue;let r=s?i.slice(s.length+1):i,a=n.get(s);fv.test(r)||(r.toLowerCase().endsWith(".json")?a.files.set(r,i):a.refused.push(r))}return[...n.values()]}var vc="https://github.com/theovencook/home-3d/issues",yc=class extends zt{static properties={hass:{attribute:!1},canEdit:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0},_itemsError:{state:!0},_open:{state:!0},_packUrl:{state:!0},_installing:{state:!0},_preview:{state:!0},_updates:{state:!0},_checking:{state:!0},_updatesMsg:{state:!0}};constructor(){super(),this._packMsg=null,this._itemsError=null,this._packUrl="",this._installing=!1,this._preview=null,this._updates=null,this._checking=!1,this._updatesMsg=null;let t=[];try{t=JSON.parse(localStorage.getItem("home3d.ext.open")??"[]")}catch{}this._open=new Set(t)}toggleOpen(t){let e=new Set(this._open);e.has(t)?e.delete(t):e.add(t),this._open=e;try{localStorage.setItem("home3d.ext.open",JSON.stringify([...e]))}catch{}}summaryBar(t,e){let n=e.reduce((s,r)=>s+r.n,0),i=this._open.has(t);return m`<button class="fp3d-sum" aria-expanded=${i} @click=${()=>this.toggleOpen(t)}>
      <span class="fp3d-sum-bar">
        ${e.filter(s=>s.n>0).map(s=>m`<i class="fp3d-sum-${s.tone}" style="flex:${s.n}"></i>`)}
      </span>
      <span class="fp3d-sum-text">
        ${e.filter(s=>s.n>0||s.tone==="ok").map(s=>m`<b class="fp3d-sum-${s.tone}-text">${s.n}</b> ${s.label}`)}
        ${n?y:m`<span class="fp3d-sub">–</span>`}
      </span>
      <span class="fp3d-sum-caret">${i?"\u25BE":"\u25B8"} ${this.t(i?"ext_hide_list":"ext_show_list")}</span>
    </button>`}updated(t){let e=t.has("hass")&&!this._updates&&!this.updatesLoading&&!this.updatesTried;this.hass&&(e||t.has("packs")||t.has("building"))&&this.loadUpdates()}updatesLoading=!1;updatesTried=!1;updatesSeq=0;async loadUpdates(){if(!this.hass)return;this.updatesLoading=!0,this.updatesTried=!0;let t=++this.updatesSeq;try{let e=await to(this.hass);t===this.updatesSeq&&(this._updates=e)}catch{t===this.updatesSeq&&(this._updates=null)}finally{t===this.updatesSeq&&(this.updatesLoading=!1)}}async updatesCall(t,e=!1){if(this.hass)try{let n=await t(this.hass);n&&(this._updates=n),e&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(n){this._updatesMsg={ok:!1,text:this.packError(n)}}}async checkNow(){if(!(!this.hass||this._checking)){this._checking=!0,this._updatesMsg=null;try{let t=await yp(this.hass);this._updates=t;let e=t.packs.filter(n=>n.available).length;this._updatesMsg={ok:!0,text:this.t("upd_checked",{n:t.installed.length+e})},t.installed.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(t){this._updatesMsg={ok:!1,text:this.packError(t)}}finally{this._checking=!1}}}updateItems(t){this.updatesCall(async e=>(await xs(e,t),to(e)))}time(t){return t==null?"\u2013":(t instanceof Date?t:new Date(t*1e3)).toLocaleString(this.hass?.language,{dateStyle:"medium",timeStyle:"short"})}renderUpdates(){let t=this._updates;if(!t)return y;let e=this.isEditor,n=t.settings,i=dh(t),s=this.hass?.language??"en",r=t.items.filter(l=>!l.pinned),a=uh(n);return m`<section class="fp3d-ext-card fp3d-updates">
      <h3>${this.t("upd_title")}</h3>
      <p class="fp3d-sub">${this.t("upd_intro")}</p>
      ${this.summaryBar("updates",[{n:i.updates,label:this.t("upd_sum_updates"),tone:"update"},{n:i.pinned,label:this.t("upd_sum_pinned"),tone:"missing"}])}
      ${this._open.has("updates")?m`${t.items.length?t.items.map(l=>m`<div class="fp3d-pack">
                  <div>
                    <b>${l.name[s.split("-")[0]]??l.name.en??Object.values(l.name)[0]??l.item}</b>
                    <span class="fp3d-sub">${this.t("upd_item",{from:l.release,to:l.new_release,n:l.placed})}${l.pinned?` \xB7 ${this.t("upd_pinned")}`:""}</span>
                  </div>
                  ${e?m`<button class="fp3d-btn" @click=${()=>this.updateItems([l.type])}>${this.t("upd_update")}</button>`:y}
                </div>`):m`<p class="fp3d-sub">${this.t("upd_none")}</p>`}
          ${e&&r.length>1?m`<button class="fp3d-btn fp3d-primary fp3d-pack-import" @click=${()=>this.updateItems(r.map(l=>l.type))}>${this.t("upd_update_all",{n:r.length})}</button>`:y}`:y}
      <div class="fp3d-upd-when">
        <button
          class="fp3d-link fp3d-ext-setting"
          @click=${()=>this.dispatchEvent(new CustomEvent("open-settings",{detail:{section:"packs",id:"pack_updates.frequency"},bubbles:!0,composed:!0}))}
        >
          ${this.t("upd_frequency")}: ${this.t(`upd_freq_${n.frequency}`)}${n.auto_update?` \xB7 ${this.t("upd_auto")}`:""} · ⚙ ${this.t("settings")} ›
        </button>
        ${e?m`<button class="fp3d-btn" ?disabled=${this._checking} @click=${()=>this.checkNow()}>${this._checking?this.t("upd_checking"):this.t("upd_check_now")}</button>`:y}
      </div>
      <p class="fp3d-sub">
        ${this.t("upd_last_check",{time:this.time(t.last_check)})}${a?m` · ${this.t("upd_next_check",{time:this.time(a)})}`:y}
      </p>
      ${this._updatesMsg?m`<p class="fp3d-sub ${this._updatesMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._updatesMsg.text}</p>`:y}
    </section>`}renderPackUpdate(t){let e=this._updates?.packs.find(i=>i.id===t.id);if(!e||t.custom)return y;let n=me(t,this.hass?.language??"de");return m`${e.error?m`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_check_error",{detail:e.error})}</span>`:e.available?m`<span class="fp3d-sub fp3d-pack-available">${this.t("pack_available",{release:e.available.release,commit:As(e.available.commit)})}</span>
              ${this.isEditor&&t.source?.origin?m`<button class="fp3d-btn" ?disabled=${this._installing} @click=${()=>{this.review(t.source.origin.url)}}>${this.t("pack_review_update")}</button>`:y}`:e.latest_release!=null?m`<span class="fp3d-sub">${this.t("pack_latest",{release:e.latest_release})}</span>`:y}
      ${this.isEditor?m`<span class="fp3d-pack-tools">
            <label class="fp3d-check">
              <input type="checkbox" .checked=${e.pinned} @change=${i=>{let s=i.target.checked;this.updatesCall(r=>vp(r,t.id,s))}} />
              ${this.t("pack_pin")}
            </label>
            ${e.previous_release!=null?m`<button
                  class="fp3d-btn"
                  @click=${async()=>{await this.ask(this.t("pack_rollback_confirm",{name:n,release:e.previous_release}),this.t("ask_ok"))&&this.updatesCall(i=>xp(i,t.id),!0)}}
                >
                  ${this.t("pack_rollback",{release:e.previous_release})}
                </button>`:y}
          </span>`:y}`}askConfirm=(t,e)=>this.ask(this.t(`pack_confirm_${t}`,{detail:e}),this.t("ask_ok"));ask(t,e,n=!1){return _i(t,{ok:e,cancel:this.t("cancel"),danger:n})}get isEditor(){return this.canEdit??this.hass?.user?.is_admin??!1}t(t,e){return qt(this.hass,t,e)}render(){return m`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href=${vc} target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        </div>
      </header>
      ${this.renderFun()} ${this.renderItems()} ${this.renderUpdates()} ${this.renderPacks()} ${this.renderLanguages()}
    </div>`}editBuilding(t){if(!this.building)return;let e=structuredClone(this.building);t(e),this.dispatchEvent(new CustomEvent("building-edit",{detail:e,bubbles:!0,composed:!0}))}renderFun(){let t=wu.filter(l=>Gi(l));if(!t.length)return y;let e=this.building?.settings.pets??null,n=e?.list??[],i=e?.on!==!1,s=(this.building?.floors??[]).filter(l=>l.rooms.length).sort((l,c)=>l.elevation-c.elevation),r=l=>this.editBuilding(c=>{let d={on:c.settings.pets?.on!==!1,list:[...c.settings.pets?.list??[]]};l(d),c.settings.pets=d}),a=(l,c)=>r(d=>d.list=d.list.map(u=>u.id===l?{...u,...c}:u));return m`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${t.map(l=>l==="fun_halloween"?this.renderHalloween():m`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isEditor&&this.building?m`${this.settingsLink("pets.on",i?"\u2713":"\u2013",this.t("pets_show"))}
                    ${n.map(c=>m`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${d=>{let u=d.target.value,h=Bi[u];a(c.id,{kind:u,fur:h.includes(c.fur)?c.fur:h[0],breed:u==="dog"?c.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(d=>m`<option value=${d} ?selected=${c.kind===d}>${this.t(`pet_kind_${d}`)}</option>`)}
                        </select>
                        ${c.kind==="dog"?m`<select aria-label=${this.t("pet_breed")} @change=${d=>a(c.id,{breed:d.target.value})}>
                              ${Nd.map(d=>m`<option value=${d} ?selected=${(c.breed??"labrador")===d}>${this.t(`pet_breed_${d}`)}</option>`)}
                            </select>`:y}
                        <input type="text" maxlength="30" .value=${c.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${d=>a(c.id,{name:d.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${d=>a(c.id,{fur:d.target.value})}>
                          ${Bi[c.kind].map(d=>m`<option value=${d} ?selected=${c.fur===d}>${this.t(`pet_fur_${d}`)}</option>`)}
                        </select>
                        <select title=${this.t("pet_eyes")} aria-label=${this.t("pet_eyes")} @change=${d=>a(c.id,{eyes:d.target.value})}>
                          ${Wd.map(d=>m`<option value=${d} ?selected=${(c.eyes??"dark")===d}>${this.t(`pet_eyes_${d}`)}</option>`)}
                        </select>
                        ${s.length>1?m`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${d=>a(c.id,{floor_id:d.target.value||null})}>
                              ${s.map((d,u)=>m`<option value=${u===0?"":d.id} ?selected=${(c.floor_id??s[0].id)===d.id}>🏠 ${d.name}</option>`)}
                            </select>`:y}
                        <select
                          title=${this.t("pet_mode")}
                          aria-label=${this.t("pet_mode")}
                          @change=${d=>{let u=d.target.value==="static",h=this.building;r(p=>p.list=p.list.map(f=>f.id===c.id?nm(f,u,Ao(h,f)):f))}}
                        >
                          <option value="roaming" ?selected=${!Ii(c)}>${this.t("pet_roaming")}</option>
                          <option value="static" ?selected=${Ii(c)}>${this.t("pet_static")}</option>
                        </select>
                        ${Ii(c)?m`<select title=${this.t("pet_pose")} aria-label=${this.t("pet_pose")} @change=${d=>a(c.id,{pose:d.target.value})}>
                                ${Vd.map(d=>m`<option value=${d} ?selected=${(c.pose??"sit")===d}>${this.t(`pet_pose_${d}`)}</option>`)}
                              </select>
                              <select
                                title=${this.t("pet_turn")}
                                aria-label=${this.t("pet_turn")}
                                @change=${d=>{let u=d.target.value;a(c.id,{rotation:u===""?null:Number(u)})}}
                              >
                                <option value="" ?selected=${c.rotation==null}>${this.t("pet_turn_auto")}</option>
                                ${[0,45,90,135,180,225,270,315].map(d=>m`<option value=${d} ?selected=${c.rotation===d}>${d}°</option>`)}
                              </select>
                              <span class="fp3d-sub">${this.t("pet_static_hint")}</span>`:y}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>r(d=>d.list=d.list.filter(u=>u.id!==c.id))}>✕</button>
                      </div>`)}
                    ${n.length<8?m`<button class="fp3d-btn" @click=${()=>r(c=>c.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:Bi.cat[c.list.length%Bi.cat.length]}))}>+ ${this.t("pet_add")}</button>`:y}`:y}
            </div>`)}
    </section>`}settingsLink(t,e,n){return m`<button
      class="fp3d-link fp3d-ext-setting"
      @click=${()=>this.dispatchEvent(new CustomEvent("open-settings",{detail:{section:"fun",id:t},bubbles:!0,composed:!0}))}
    >
      ${e} ${n} · ⚙ ${this.t("settings")} ›
    </button>`}renderHalloween(){let t=this.building?.settings.halloween?.ghost!==!1;return m`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isEditor&&this.building?this.settingsLink("halloween.ghost",t&&this.building.settings.easter_eggs!==!1?"\u2713":"\u2013",this.t("halloween_ghost")):y}
      <span class="fp3d-sub">${this.t("halloween_deco_hint")}</span>
    </div>`}renderItems(){if(!this.isEditor)return y;let t=bc(this.packs).length;return m`<section class="fp3d-ext-card">
      <h3>${this.t("own_items_title")}</h3>
      <p class="fp3d-sub">${this.t("own_items_hint",{n:t})}</p>
      <button class="fp3d-btn fp3d-primary fp3d-pack-import" @click=${()=>this.openItemEditor()}>${this.t("own_items_open")}</button>
      ${this._itemsError?m`<p class="fp3d-sub fp3d-pack-error">${this._itemsError}</p>`:y}
    </section>`}async openItemEditor(){let t=this.hass;if(t)try{(await Yg()).openItemEditor({hass:t,hassSource:()=>this.hass,t:(n,i)=>qt(this.hass,n,i),items:bc(this.packs),kinds:Cn,rooms:vi,roles:Sr,changed:()=>this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}),this._itemsError=null}catch(e){this._itemsError=String(e?.message??e)}}renderPacks(){let t=(this.packs??[]).filter(n=>!n.custom&&n.kind!=="language"),e=t.reduce((n,i)=>n+i.items.length,0);return m`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${this.summaryBar("packs",[{n:t.length,label:this.t("ext_sum_packs",{items:e}),tone:"ok"}])}
      ${(this._open.has("packs")?t:[]).map(n=>m`<div class="fp3d-pack">
          <div>
            <b>${me(n,this.hass?.language??"de")}</b>
            <span class="fp3d-sub">${this.t("pack_by",{publisher:n.publisher,n:n.items.length})}</span>
            ${n.licence||n.release&&n.release>1?m`<span class="fp3d-sub">${[n.licence?this.t("pack_licence",{licence:n.licence}):"",n.release&&n.release>1?`v${n.release}`:""].filter(Boolean).join(" \xB7 ")}</span>`:y}
            ${this.renderOrigin(n)} ${this.renderPackUpdate(n)}
          </div>
          ${n.bundled?m`<span class="fp3d-sub">${this.t("pack_bundled")}</span>`:m`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(n)}>${this.t("pack_remove")}</button>`}
        </div>`)}

      <label class="fp3d-btn fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${n=>this.importPackFile(n)} />
      </label>
      <label class="fp3d-btn fp3d-pack-import">
        ${this.t("pack_import_folder")}
        <input type="file" webkitdirectory multiple hidden @change=${n=>this.importPackFolder(n)} />
      </label>
      ${this.isEditor?m`<form class="fp3d-pack-url" @submit=${n=>this.installFromUrl(n)}>
            <input
              type="url"
              inputmode="url"
              .value=${this._packUrl}
              placeholder="https://github.com/owner/repo/tree/main/publisher.pack"
              aria-label=${this.t("pack_install_url")}
              ?disabled=${this._installing}
              @input=${n=>this._packUrl=n.target.value}
            />
            <button class="fp3d-btn" type="submit" ?disabled=${this._installing||!this._packUrl.trim()}>
              ${this._installing?this.t("pack_installing"):this.t("pack_install_url")}
            </button>
          </form>`:y}
      ${this.renderPreview()}
      ${this._packMsg?m`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}renderLanguages(){let t=(this.packs??[]).filter(n=>n.kind==="language"),e=hi(this.hass?.language);return m`<section class="fp3d-ext-card">
      <h3>${this.t("languages")}</h3>
      ${t.length?y:m`<p class="fp3d-sub">${this.t("lang_pack_none")}</p>`}
      ${t.map(n=>m`<div class="fp3d-pack">
          <div>
            <b lang=${n.language??y}>${n.name}</b>
            <span class="fp3d-sub">${this.t("lang_pack_texts",{language:n.language??"?",n:n.texts??0,publisher:n.publisher})}${n.language===e?` \xB7 ${this.t("lang_pack_shown")}`:""}</span>
            ${n.licence||n.release&&n.release>1?m`<span class="fp3d-sub">${[n.licence?this.t("pack_licence",{licence:n.licence}):"",n.release&&n.release>1?`v${n.release}`:""].filter(Boolean).join(" \xB7 ")}</span>`:y}
            ${this.renderOrigin(n)} ${this.renderPackUpdate(n)}
          </div>
          ${n.bundled?m`<span class="fp3d-sub">${this.t("pack_bundled")}</span>`:this.isEditor?m`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(n)}>${this.t("pack_remove")}</button>`:y}
        </div>`)}
      <p class="fp3d-sub">${this.t("languages_hint")}</p>
    </section>`}importedText(t){return t.kind==="language"?this.t("lang_pack_imported",{name:t.name,language:t.language??"?",n:t.texts??0}):this.t("pack_imported",{name:t.name,publisher:t.publisher,n:t.items})}async languageChanged(t){this.hass&&t&&t===hi(this.hass.language)&&await hs(this.hass.language,this.hass,!0)}renderOrigin(t){let e=md(t);return e?m`<span class="fp3d-sub">${this.t("pack_from")} <a href=${e.url} target="_blank" rel="noreferrer noopener">${e.label}</a></span>`:y}async installFromUrl(t){t.preventDefault();let e=this._packUrl.trim();!e||!this.hass||await this.review(e)}async review(t){if(!(!this.hass||this._installing)){this._installing=!0,this._packMsg=null,this._preview=null;try{this._preview=await _p(this.hass,t)}catch(e){e?.code==="unknown_command"?(this._installing=!1,await this.install(t)):this._packMsg={ok:!1,text:this.packError(e)}}finally{this._installing=!1}}}async install(t,e){if(this.hass){this._installing=!0;try{let n=this.hass,i=await Is(s=>bp(n,t,s,e),this.askConfirm);if(!i)return;this._preview=null,this._packUrl="",this._packMsg={ok:!0,text:this.importedText(i)},await this.languageChanged(i.language),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(n){this._preview=null,this._packMsg={ok:!1,text:this.packError(n)}}finally{this._installing=!1}}}renderPreview(){let t=this._preview;if(!t)return y;let e=this.hass?.language??"de",n=t.installed!==null,i=t.changes,s=t.pack.kind==="language",r=(a,l)=>l.length?m`<li><b>${this.t(a,{n:l.length})}</b>: ${l.slice(0,12).map(c=>ph(c,e)).join(", ")}${l.length>12?" \u2026":""}</li>`:y;return m`<div class="fp3d-preview" role="group" aria-label=${this.t("pp_title")}>
      <b>${n?this.t("pp_update",{name:t.pack.name,from:t.installed.release,to:t.pack.release}):this.t("pp_install",{name:t.pack.name,release:t.pack.release})}</b>
      <span class="fp3d-sub">${s?this.t("lang_pack_texts",{language:t.pack.language??"?",n:t.pack.texts??0,publisher:t.pack.publisher}):this.t("pack_by",{publisher:t.pack.publisher,n:t.pack.items})} · ${this.t("pack_licence",{licence:t.pack.licence})}</span>
      <span class="fp3d-sub">
        ${this.t("pp_from")}
        <a href=${t.origin.url} target="_blank" rel="noreferrer noopener">${t.origin.owner}/${t.origin.repo}${t.origin.folder?`/${t.origin.folder}`:""} @ ${t.origin.ref}</a>
        · ${this.t("pp_commit")} <code>${As(t.origin.commit)}</code>${t.installed?.commit?m` (${this.t("pp_now")} <code>${As(t.installed.commit)}</code>)`:y}
      </span>
      ${t.warnings.map(a=>m`<span class="fp3d-sub fp3d-pack-error">${this.t(`pp_warn_${a}`)}</span>`)}
      ${hh(t)?m`<span class="fp3d-sub">${n?this.t(s?"pp_nothing_texts":"pp_nothing"):this.t("pp_empty")}</span>`:m`<ul>
            ${r("pp_added",i.added)} ${r("pp_changed",i.changed)} ${r("pp_removed",i.removed)}
          </ul>
          <span class="fp3d-sub">${this.t(s?"pp_unchanged_texts":"pp_unchanged",{n:i.unchanged})}</span>`}
      ${n&&!s&&(i.changed.length||i.removed.length)?m`<span class="fp3d-sub">${this.t("pp_placed_hint")}</span>`:y}
      <span class="fp3d-pack-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${this._installing} @click=${()=>{this.install(t.origin.url,t.origin.commit)}}>
          ${n?this.t("pp_do_update"):this.t("pp_do_install")}
        </button>
        <button class="fp3d-btn" ?disabled=${this._installing} @click=${()=>this._preview=null}>${this.t("cancel")}</button>
      </span>
    </div>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=[],s=[];for(let a of n)try{let l=this.hass,c=await a.text(),d=await Is(u=>mp(l,c,u),this.askConfirm);if(!d)continue;i.push(this.importedText(d))}catch(l){s.push(`${a.name}: ${this.packError(l)}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let r=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:s.length===0,text:[...r,...i,...s].join(" \xB7 ")}}async importPackFolder(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=new Map(n.map(c=>[c.webkitRelativePath||c.name,c])),s=Qg([...i.keys()]);if(!s.length){this._packMsg={ok:!1,text:this.t("pack_error_no_pack")};return}let r=[],a=[];for(let c of s){let d=c.root||n[0].webkitRelativePath.split("/")[0]||"pack";if(c.refused.length){a.push(`${d}: ${this.t("pack_error_not_data",{detail:c.refused.join(", ")})}`);continue}try{let u={};for(let[f,b]of c.files)u[f]=await i.get(b).text();let h=this.hass,p=await Is(f=>gp(h,u,f),this.askConfirm);if(!p)continue;r.push(this.importedText(p)),await this.languageChanged(p.language)}catch(u){a.push(`${d}: ${this.packError(u)}`)}}r.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let l=s.length>1?[this.t("packs_imported_n",{n:r.length,total:s.length})]:[];this._packMsg={ok:a.length===0,text:[...l,...r,...a].join(" \xB7 ")}}packError(t){let{code:e,message:n}=t??{},i=`pack_error_${e}`,s=this.t(i,{detail:n??String(t)});return s===i?this.t("pack_error_other",{detail:n??String(t)}):s}async deletePack(t){if(!(!this.hass||!await this.ask(this.t("pack_remove_confirm",{name:me(t,this.hass?.language??"de")}),this.t("delete"),!0))){try{await wp(this.hass,t.id)}catch(e){this._packMsg={ok:!1,text:this.t("pack_remove_failed",{error:Ue(e)})};return}this._packMsg=null,await this.languageChanged(t.language),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}}static styles=[te,rn,lt`
      .fp3d-sum {
        display: grid;
        gap: 6px;
        width: 100%;
        margin: 4px 0 8px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        background: rgba(4, 8, 18, 0.35);
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-sum-bar {
        display: flex;
        gap: 2px;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-sum-bar i {
        display: block;
      }
      .fp3d-sum-ok {
        background: #34d399;
      }
      .fp3d-sum-update {
        background: #fbbf24;
      }
      .fp3d-sum-missing {
        background: #60a5fa;
      }
      .fp3d-sum-text {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
        font-size: 0.92em;
      }
      .fp3d-sum-ok-text {
        color: #34d399;
      }
      .fp3d-sum-update-text {
        color: #fbbf24;
      }
      .fp3d-sum-missing-text {
        color: #60a5fa;
      }
      .fp3d-preview {
        display: grid;
        gap: 6px;
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        background: rgba(4, 8, 18, 0.35);
      }
      .fp3d-preview ul {
        margin: 0;
        padding-left: 18px;
      }
      .fp3d-preview code {
        font-family: ui-monospace, monospace;
      }
      .fp3d-sum-caret {
        color: var(--fp3d-muted, #8ea3c4);
        font-size: 0.85em;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      /* headings and body copy in light, neutral tones: blue on navy read poorly (#88) */
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-text);
      }
      .fp3d-ext-setting {
        justify-self: start;
        min-height: 36px;
        padding: 0;
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-pet-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pet-row input[type="text"],
      .fp3d-pet-row select {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pet-row input[type="text"] {
        flex: 1;
        min-width: 110px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      /* an active feature is marked by its tick and "active", not a cyan frame on every card (#88) */
      .fp3d-ext-on {
        border-color: var(--fp3d-line);
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-muted);
        font-size: 13px;
        line-height: 1.45;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-tools,
      .fp3d-upd-when {
        display: flex;
        flex-wrap: wrap;
        gap: 8px 14px;
        align-items: center;
      }
      .fp3d-upd-when {
        margin: 8px 0;
      }
      .fp3d-upd-when label {
        display: flex;
        gap: 6px;
        align-items: center;
      }
      .fp3d-upd-when select,
      .fp3d-upd-when input {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pack-url {
        display: flex;
        gap: 8px;
        margin-top: 10px;
      }
      .fp3d-pack-url input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `]};Xt("fp3d-extensions",yc);var Lr=class{renderHelpLinks(){return m`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href=${vc} target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
      </div>
    </section>`}renderTopic(t){let e=this._doc;if(!e)return m``;let n=y;if(t==="director_triggers"){let i=[...new Set(e.floors.flatMap(s=>s.placements.map(r=>r.entity_id)))];n=this.renderDirectorTriggers(e.settings.director??{},i)}else t==="favorites"?n=this.renderFavorites():t==="own_buttons"?n=this.renderOwnButtons():t==="media_presets"?n=this.renderMediaPresets():t==="editors"?n=this.renderEditors():t==="tablet_users"?(this.askEditors(),n=this.editorsList?m`<div class="fp3d-form">${this.renderTabletUsers(this.editorsList.users)}</div>`:m`<p class="fp3d-sub">${this.t("loading")}</p>`):t==="backup"?n=this.renderBackup():t==="energy_balance"?n=this.renderEnergyBalance():t==="hologram"?n=this.renderHologramSettings():t==="presence"&&(n=this.renderPresenceSettings());return m`<div class="fp3d-embed">${n}</div>`}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("home3d.sidePinned",t?"1":"0")}catch{}}setSideFolded(t){if(this._split&&!this._sidePinned){this._sideOpen=!t;return}this._sideMin=t;try{localStorage.setItem("home3d.sideMin",t?"1":"0")}catch{}}renderSideGrip(){if(this.narrow)return y;let t=n=>{this.sideDrag&&(this._sideWidth=Math.min(640,Math.max(280,Math.round(this.sideDrag.width+(this.sideDrag.x-n.clientX)))))},e=n=>{if(this.sideDrag){this.sideDrag=null,n.currentTarget.releasePointerCapture(n.pointerId);try{localStorage.setItem("home3d.sideWidth",String(this._sideWidth))}catch{}}};return m`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${n=>{this.sideDrag={x:n.clientX,width:this._sideWidth},n.currentTarget.setPointerCapture(n.pointerId),n.preventDefault()}}
      @pointermove=${t}
      @pointerup=${e}
      @pointercancel=${e}
    ></div>`}renderAside(t){let e=this._split&&!this._sidePinned&&!this.narrow;return!this.narrow&&(e?!this._sideOpen:this._sideMin)?m`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this.setSideFolded(!1)}>‹</button>
        ${this._furnitureId||this._deviceId||this._openingId||this._roomId?m`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this.setSideFolded(!1)}>⚙</button>`:y}
      </aside>`:e?m`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderSideGrip()}
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:m`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){if(this.narrow)return y;let e=m`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${()=>this.setSideFolded(!0)}>${this.t("side_close")} ›</button>`;return this._split?m`<div class="fp3d-pin-row">
      ${e}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`:m`<div class="fp3d-pin-row">${e}</div>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,i=this.isEditor,s=Object.values(this.hass?.areas??{}).sort((l,c)=>l.name.localeCompare(c.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&i)return m`${this.furnitureItem?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t("back_to_library")}</button>
              ${this.renderFurnitureForm(this.furnitureItem)}`:y}
        ${this.renderFurnitureLibrary()}`;let r=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null,a=this._tool==="opening"&&i&&t?m`<section>
            <h3>${this.t("opening_next_kind")}</h3>
            ${this.renderOpeningKinds(this._openingPreset,l=>this.pickOpeningKind(l))}
          </section>`:y;return r?m`${a}<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${r}`:n&&this._tool!=="measure"?m`${a}<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:m`
      ${a} ${i?y:m`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${t?this.t("floor_settings_of",{floor:t.name}):this.t("floors")}</h3>
        ${e.length?y:m`${i?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.addFloor()}>${this.t("first_floor_add")}</button>`:y}
              <p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${i&&t?this.renderSettingsLink("general","lock_plan",this._doc.settings.lock_plan?"plan_locked":"plan_lock",this._doc.settings.lock_plan?"\u{1F512}":"\u{1F513}"):y}
        ${t?m`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${l=>this.updateFloor({name:l.target.value})}
              /></label>
              ${this.len(this.t("elevation"),t.elevation,l=>this.updateFloor({elevation:l}))}
              ${i?m`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${Zt(this.t("floor_shift"),this.unit)}</span>
                    <input type=${this.unit==="imperial"?"text":"number"} step="0.05" .value=${this.lenValue(this._shiftX)} aria-label="X" @change=${l=>this._shiftX=this.readLen(l.target.value)??0} />
                    <input type=${this.unit==="imperial"?"text":"number"} step="0.05" .value=${this.lenValue(this._shiftZ)} aria-label="Z" @change=${l=>this._shiftZ=this.readLen(l.target.value)??0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${t.start_view?m`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:y}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${l=>this._shiftAll=l.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:y}
              ${this.len(this.t("height"),t.height,l=>this.updateFloor({height:Math.max(1,l)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?m`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${l=>this.updateFloor({ha_floor:l.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(l=>l.floor_id===t.ha_floor||!e.some(c=>c.ha_floor===l.floor_id)).map(l=>m`<option value=${l.floor_id} ?selected=${l.floor_id===t.ha_floor}>${l.name}</option>`)}
                    </select></label
                  >`:y}
              ${i&&this.unplacedAreas(t).length?m`<p class="fp3d-sub fp3d-wide fp3d-area-import">
                    ${this.t("area_rooms_label")}
                    <button class="fp3d-link" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                    ${this.homeName?m`<br /><small class="fp3d-area-home">${this.t("area_rooms_note",{home:this.homeName})}</small>`:y}
                  </p>`:y}
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
                  ${this._notice?m`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:y}`:y}
            </div>`:y}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?m`${this.renderRoomForm(n,s)} ${this.renderDeviceList(n)}`:t?m`${this.renderRoomList(t)} ${this.renderItemsList(t.furniture,!0)} ${this.renderUnplaced()}`:y}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():y}
      ${t&&i?this.renderBackgroundForm(t):y}
    `}renderItemsList(t,e){let n=this.floor;if(!n||!t.length)return y;let i=e?new Map(n.rooms.map(c=>[c.id,c.name])):null,s=e?pi(n.rooms,t):null,r=new Map;if(s&&i)for(let[c,d]of s)for(let u of d)r.set(u.id,c?i.get(c)??"":"");let a=this._furnitureId?this.selection():[],l=t.map(c=>({id:c.id,name:c.name||pt(this.hass,c.type),note:r.get(c.id),hidden:this._hiddenItems.includes(c.id),selected:a.includes(c.id)}));return m`<details class="fp3d-points fp3d-items">
      <summary>${this.t("items_list")} (${t.length})</summary>
      <fp3d-item-list
        .rows=${l}
        .texts=${{hide:this.t("item_hide"),show:this.t("item_show"),remove:this.t("delete")}}
        ?editable=${this.isEditor}
        @item-select=${c=>this.selectFromList(c.detail.id)}
        @item-hide=${c=>this.toggleItemHidden(c.detail.id)}
        @item-delete=${c=>{this.deleteFromList(c.detail.id)}}
      ></fp3d-item-list>
    </details>`}};var Cr=["status","load","battery","runtime","power","temperature","cpu","memory","disk","throughput","uptime","other","update","switch","button"],gv=new Set(["unifi","nut","apcupsd","systemmonitor","glances","synology_dsm","qnap","qnap_qsw","proxmoxve","esphome","snmp","tplink_omada","netgear","fritz","mikrotik","opnsense","pfsense","truenas","unraid","unifiprotect","zha","upnp","hassio"]),Jg=8,xc=/_(port|outlet|lan|eth)_?\d+/,bv=o=>Cr.indexOf(o);function Do(o,t){let e=t.slice(0,t.indexOf(".")),n=o.states[t],i=String(n?.attributes?.device_class??""),s=String(n?.attributes?.unit_of_measurement??""),r=`${t.slice(e.length+1)} ${o.entities?.[t]?.translation_key??""}`.toLowerCase();return e==="update"?"update":e==="button"?"button":e==="switch"?"switch":e==="device_tracker"?"status":e==="binary_sensor"?["connectivity","running","plug","power","problem"].includes(i)||/status|state|online|connected|running/.test(r)?"status":"other":e!=="sensor"?"other":/runtime/.test(r)||i==="duration"&&/battery/.test(r)?"runtime":i==="battery"||/battery|charge/.test(r)&&s==="%"?"battery":i==="temperature"?"temperature":i==="power"||s==="W"||s==="kW"?"power":i==="data_rate"||/\/s$/.test(s)||/throughput|bandwidth|download|upload|\b(rx|tx)\b|_(rx|tx)(_|$)|network_(in|out)|packets/.test(r)?"throughput":/uptime|last_boot|boot_time/.test(r)||i==="timestamp"&&/up|boot/.test(r)?"uptime":/cpu|processor/.test(r)?"cpu":/memory|\bram\b|swap/.test(r)?"memory":/disk|volume|storage|drive|pool|\bfs\b|used_space|free_space/.test(r)?"disk":/load/.test(r)?"load":/status|state/.test(r)||i==="enum"?"status":"other"}var _v=(o,t)=>o.entities?.[t]?.device_id??null;function Xg(o,t){return Object.values(o.entities??{}).filter(e=>e.device_id===t&&!!o.states[e.entity_id]).map(e=>e.entity_id)}function Zg(o,t){let e=n=>bv(Do(o,n))+(xc.test(n)?100:0);return t.map((n,i)=>({id:n,i,s:e(n)})).sort((n,i)=>n.s-i.s||n.i-i.i).map(n=>n.id)}function yv(o,t){let e=i=>{if(Do(o,i)!=="status"||xc.test(i))return 99;let s=String(o.states[i]?.attributes?.device_class??"");return i.startsWith("binary_sensor.")&&(s==="connectivity"||s==="running")?0:i.startsWith("sensor.")?1:i.startsWith("device_tracker.")?2:3};return t.map(i=>({id:i,p:e(i)})).filter(i=>i.p<99).sort((i,s)=>i.p-s.p)[0]?.id??null}var vv=(o,t)=>{let e=Do(o,t);return e!=="button"&&e!=="switch"&&e!=="update"&&!xc.test(t)};function tb(o,t){let e=Xg(o,t),n=yv(o,e),i=Zg(o,e.filter(r=>r!==n&&vv(o,r))).slice(0,Jg),s=o.devices?.[t];return{entity:n,links:i,name:s?.name_by_user||s?.name||null}}function eb(o,t,e=Jg){let n=new Set([t.entity,...t.links??[]].filter(r=>!!r)),s=[...new Set([...n].map(r=>_v(o,r)).filter(r=>!!r))].flatMap(r=>Xg(o,r)).filter(r=>!n.has(r));return Zg(o,s).slice(0,e)}function nb(o){let t=new Map;for(let e of Object.values(o.entities??{})){if(!e.device_id||!o.states[e.entity_id])continue;let n=t.get(e.device_id)??new Set;e.platform&&n.add(e.platform),t.set(e.device_id,n)}return[...t].map(([e,n])=>{let i=o.devices?.[e],s=i?.name_by_user||i?.name||e,r=[i?.manufacturer,i?.model].filter(Boolean).join(" ");return{id:e,label:r?`${s} \xB7 ${r}`:s,rack:[...n].some(a=>gv.has(a))}}).sort((e,n)=>Number(n.rack)-Number(e.rack)||e.label.localeCompare(n.label)).map(({id:e,label:n})=>({id:e,label:n}))}var Vo=8,Hr="@hottest",Dr="@online";function ib(o,t){let e=new Set,n=[];for(let i of t)for(let s of jh(i))e.has(s)||(e.add(s),n.push({id:s,kind:Do(o,s),slot:i}));return n}var xv=(o,t)=>String(o.states[t]?.attributes?.unit_of_measurement??""),wc=(o,t)=>xv(o,t)==="%",wv=(o,t)=>o.some(e=>e.slot===t&&(e.kind==="battery"||e.kind==="runtime"));function kc(o,t,e=Vo){let n=ib(o,t),i=l=>n.filter(c=>c.kind===l),s=l=>wv(n,l.slot),r=(l,...c)=>{for(let d of c){let u=l.find(d);if(u)return u.id}return null};return[r(i("load"),l=>s(l)&&wc(o,l.id),l=>wc(o,l.id)),r(i("battery"),s,()=>!0),r(i("runtime"),()=>!0),r(i("power"),l=>/poe/.test(l.id),s),i("temperature").length?Hr:null,t.some(l=>wi(o,l)!==null)?Dr:null,r(i("disk"),l=>wc(o,l.id)&&!/free/.test(l.id)),r(i("throughput"),l=>/wan|uplink|internet|external/.test(l.id),()=>!0)].filter(l=>!!l).slice(0,e)}var kv=new Set(["update","switch","button"]),$v=(o,t)=>Cr.indexOf(o.kind)-Cr.indexOf(t.kind);function ob(o,t,e){let n=ib(o,t),i=[];t.some(r=>wi(o,r)!==null)&&i.push({key:Dr,kind:"status"}),n.some(r=>r.kind==="temperature")&&i.push({key:Hr,kind:"temperature"});let s=i.length?[{slot:null,name:null,options:i}]:[];for(let r of t){let a=n.filter(l=>l.slot===r&&!kv.has(l.kind)).map(({id:l,kind:c})=>({key:l,kind:c}));a.length&&s.push({slot:r.id??null,name:e(r),options:a.sort($v)})}return s}function sb(o,t,e,n=Vo){let i=[...o??t];return i.includes(e)?i.filter(s=>s!==e):i.length>=n?i:[...i,e]}var Vr=class{rackOf(t){let e=Ye(fn(t.type));return e?{frame:e,at:Os(e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h))}:null}rackElevationOf(t){let e=Ye(fn(t.type));if(!e)return null;let n=this.hass?.language??"en",i=t.rack?.slots??[],s=this.hass,r=i.map(c=>s?wi(s,c):null),a=JSON.stringify([t.type,t.w,t.d,t.h,t.name??"",n,i,i.map(c=>!!wt(c.type)),r]);if(this.elevationMemo?.key===a)return this.elevationMemo.el;let l=ng({frame:e,size:[t.w,t.d,t.h],slots:i,itemOf:wt,nameOf:(c,d)=>c.name||Ot(d,n),title:t.name||pt(this.hass,t.type),statusOf:c=>r[i.indexOf(c)]??null});return this.elevationMemo={key:a,el:l},l}renderRackElevation(t){let e=this.rackElevationOf(t);if(!e||!e.pieces)return y;let n=Ye(fn(t.type));return m`<details class="fp3d-rack-elev" open>
      <summary>${this.t("rack_front_view")} · ${this.t("rack_used",{used:e.used,u:n?.u??0})}</summary>
      <div class="fp3d-rack-elev-box">${this.rackElevationPicture(e)}</div>
    </details>`}rackElevationPicture(t){let e=(n,i)=>`${Math.round(n/i*1e4)/100}%`;return m`<div class="fp3d-rack-elev-pic">
      <img class="fp3d-rack-elev-img" src=${`data:image/svg+xml;charset=utf-8,${encodeURIComponent(t.svg)}`} width=${t.width} height=${t.height} alt=${t.label} />
      ${t.gear.map(n=>m`<span class="fp3d-rack-elev-tip" title=${n.title} style="left:${e(n.x,t.width)};top:${e(n.y,t.height)};width:${e(n.w,t.width)};height:${e(n.h,t.height)}"></span>`)}
    </div>`}openRackSheet(){let t=this.furnitureItem;t&&this.rackOf(t)&&(this._rackSheet=t.id)}rackRules(t){let e=this.rackOf(t);return e?{rack:e,space:Th(e.frame,e.at),gearOf:Hh(fn),looseOf:Dh(fn)}:null}rackSheetProps(){let t=this._rackSheet?this.floor?.furniture.find(u=>u.id===this._rackSheet):void 0,e=t&&this.rackRules(t);if(!t||!e)return null;let{rack:n,space:i,gearOf:s,looseOf:r}=e,a=this.hass?.language??"en",l=[],c=[],d=n.at.opening;for(let u of this.packs??[])for(let h of u.items){let p=Hn(h),f=St(u.id,h.id);p&&p.inch===i.width&&hl(i,h.size[1])?l.push({type:f,name:Ot(h,a)}):!p&&!h.rack_frame&&h.electric&&(h.group==="network"||h.group==="tech")&&h.mount!=="ceiling"&&h.size[0]<=d&&h.size[1]<=i.mountDepth&&h.size[2]<=.3&&c.push({type:f,name:Ot(h,a)})}return l.sort((u,h)=>u.name.localeCompare(h.name)),c.sort((u,h)=>u.name.localeCompare(h.name)),{heading:t.name||pt(this.hass,t.type),space:i,labels:n.at.units.map(u=>u.label),slots:t.rack?.slots??[],gear:l,loose:c,gearOf:s,looseOf:r,nameOf:u=>pt(this.hass,u),editable:this.isEditor,linker:this.rackLinker()}}rackLinker(){let t=this.hass;if(!t)return null;let e=Object.keys(t.states).length,n=this.rackDevicesMemo;return(!n||n.entities!==t.entities||n.devices!==t.devices||n.count!==e)&&(this.rackDevicesMemo={entities:t.entities,devices:t.devices,count:e,options:nb(t)}),{entities:this.entityOptions(this.anyEntity),devices:this.rackDevicesMemo.options,fromDevice:i=>tb(t,i),suggest:i=>eb(t,i),label:i=>et(t,i),status:i=>wi(t,i)}}rackFrameChoices(t){let e=this.hass?.language??"en",n=fn(t.type)?.mount==="wall",i=[];for(let s of this.packs??[])for(let r of s.items)Ye(r)&&r.mount==="wall"===n&&i.push({type:St(s.id,r.id),name:Ot(r,e)});return i.sort((s,r)=>s.name.localeCompare(r.name,void 0,{numeric:!0}))}changeRackFrame(t){let e=this.furnitureItem,n=fn(t);if(!e||!this.isEditor||!n||!Ye(n)||!this.rackOf(e))return;let[i,s,r]=n.size;this.updateFurniture({type:t,w:i,d:s,h:r})}renderRackFrameForm(t){let e=this.rackRules(t);if(!e)return y;let n=Ls(e.space,t.rack?.slots??[],e.gearOf,e.looseOf),i=this.rackFrameChoices(t);return m`${this.isEditor&&i.length>1?m`<div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("rack_frame_pick")}
            <select @change=${s=>this.changeRackFrame(s.target.value)}>
              ${i.map(s=>m`<option value=${s.type} ?selected=${s.type===t.type}>${s.name}</option>`)}
            </select></label
          >
        </div>`:y}
    ${n.length?m`<p class="fp3d-sub fp3d-pack-error" role="alert">
          ${this.t("rack_misfits",{n:n.length})}
          ${n.map(s=>{let r=t.rack.slots.find(a=>a.id===s.id);return m`<br />${r.name||pt(this.hass,r.type)}: ${this.t(`rack_${s.why}`)}`})}
        </p>`:y}`}rackCardPicked(t){return t.rack?.card?.metrics??kc(this.hass,t.rack?.slots??[])}toggleRackCardMetric(t){let e=this.furnitureItem;if(!e?.rack||!this.isEditor)return;let n=sb(e.rack.card?.metrics,kc(this.hass,e.rack.slots),t);this.change((i,s)=>{let r=s.furniture.find(a=>a.id===e.id);r?.rack&&(r.rack={...r.rack,card:{...r.rack.card,metrics:n}})})}resetRackCard(){let t=this.furnitureItem;!t?.rack?.card||!this.isEditor||this.change((e,n)=>{let i=n.furniture.find(s=>s.id===t.id);if(i?.rack){let{card:s,...r}=i.rack;i.rack=r}})}renderRackCardForm(t){let e=this.hass,n=t.rack?.slots??[];if(!e||!n.length)return y;let i=ob(e,n,c=>c.name||pt(e,c.type??""));if(!i.length)return y;let s=this.rackCardPicked(t),r=s.length>=Vo,a=!this.isEditor,l=(c,d)=>c===Hr?this.t("rack_card_hottest"):c===Dr?this.t("rack_card_online"):d==="other"?et(e,c):this.t(`rack_kind_${d}`);return m`<details class="fp3d-rack-elev fp3d-rack-card-pick">
      <summary>${this.t("rack_card_values",{n:s.length,max:Vo})}</summary>
      <p class="fp3d-sub">${this.t("rack_card_values_hint")}</p>
      ${i.map(c=>m`<fieldset class="fp3d-rack-card-group">
          <legend>${c.name??this.t("rack_card_rack")}</legend>
          ${c.options.map(d=>{let u=s.includes(d.key);return m`<label class="fp3d-check"
              ><input type="checkbox" .checked=${u} ?disabled=${a||!u&&r} @change=${()=>this.toggleRackCardMetric(d.key)} />
              <span>${l(d.key,d.kind)}${d.key.startsWith("@")?y:m` <small>${d.kind==="other"?"":et(e,d.key)} · ${Bf(e,e.states[d.key])}</small>`}</span></label
            >`})}
        </fieldset>`)}
      ${t.rack?.card&&!a?m`<button class="fp3d-btn" @click=${()=>this.resetRackCard()}>${this.t("rack_card_default")}</button>`:y}
    </details>`}onRackChange(t){let e=this._rackSheet,n=t.detail.slots;!e||!this.isEditor||this.change((i,s)=>{let r=s.furniture.find(a=>a.id===e);r&&(r.rack={...r.rack,slots:n})})}renderRackSheet(){let t=this.rackSheetProps();return t?m`<fp3d-rack-sheet
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
    ></fp3d-rack-sheet>`:y}};var $c=new WeakMap,rb=ce(class extends yi{render(o){return y}update(o,[t]){let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=o.options?.host,this.rt(this.ct=o.element)),y}rt(o){if(this.G!==void 0)if(this.isConnected||(o=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=$c.get(t);e===void 0&&(e=new WeakMap,$c.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,o),o!==void 0&&this.G.call(this.ht,o)}else this.G.value=o}get lt(){return typeof this.G=="function"?$c.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Wr=class{openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){if(this._wallMulti.length)return this._wallMulti;let t=this._wallSel?this.floor?.furniture.find(e=>e.id===this._wallSel):void 0;return t?t.group&&!this._wallSingle?(this.floor?.furniture??[]).filter(e=>e.group===t.group).map(e=>e.id):[t.id]:[]}wallToggle(t){let e=this.wallSelection(),n=this.withGroups([t]),i=e.includes(t)?e.filter(s=>!n.includes(s)):[...new Set([...e,...n])];this.wallChoose(i,t)}wallChoose(t,e=t[0]??null){this._wallSingle=!1,this._wallSel=t.length?e&&t.includes(e)?e:t[0]:null,this._wallMulti=[];let n=this.wallSelection();t.length>1&&!(t.length===n.length&&t.every(i=>n.includes(i)))&&(this._wallMulti=t),this._wallGap=null}moveSetOnWall(t,e,n,i,s=this._doc,r=!0){let a=new Set(e);this.change((l,c)=>{for(let d of c.furniture)a.has(d.id)&&(Object.assign(d,Bs(t,d,n)),i!==null&&ge(d)&&(d.mount_y=Math.round(Math.min(Xe,Math.max(0,jt(c,d)+i))*1e3)/1e3))},s,r)}wallGapAt(t,e,n,i,s){let r=s<1.2,a=t.length,l=[...Je(t,e,n).filter(u=>r?u.y0<1:u.y1>1.2).map(u=>[u.s0,u.s1]),...Dn(t,e).filter(u=>r?u.y0<.9:u.y1>1.2).map(u=>[u.s0,u.s1])];if(l.some(([u,h])=>i>u&&i<h))return null;let c=Math.max(0,...l.filter(([,u])=>u<=i).map(([,u])=>u)),d=Math.min(a,...l.filter(([u])=>u>=i).map(([u])=>u));return d-c>=.1?{s0:Math.round(c*1e3)/1e3,s1:Math.round(d*1e3)/1e3,low:r}:null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(r=>r.points.length>=3&&U([t.x,t.z],r.points));if(!n)return;let i=-1,s=1/0;n.points.forEach((r,a)=>{let l=n.points[(a+1)%n.points.length],c=Math.hypot(l[0]-r[0],l[1]-r[1])||1,d=Math.max(0,Math.min(1,((t.x-r[0])*(l[0]-r[0])+(t.z-r[1])*(l[1]-r[1]))/(c*c))),u=Math.hypot(t.x-(r[0]+(l[0]-r[0])*d),t.z-(r[1]+(l[1]-r[1])*d));u<s&&(s=u,i=a)}),i>=0&&this.openWallView(n.id,i,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,i=-1;t.points.forEach((s,r)=>{let a=Je(Qe(t,r),e,t).length;a>i&&(i=a,n=r)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("home3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let i=`${e.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===t)return;let s=this.wall3dEl!==t;this.wall3dKey=i,this.wall3dEl=t,s&&t.addEventListener("pointerdown",r=>this.runDown3d(r),{capture:!0}),(async()=>{let r;for(let p=0;p<120&&!(r=t.viewer);p++)await new Promise(f=>setTimeout(f,50));s&&await new Promise(p=>setTimeout(p,250));let a=this.floor;if(!r||!a||this.wall3dKey!==i)return;if(!r.__npWall){r.__npWall=!0,r.updateWalls=function(){for(let f of this.floors)f.mask.standing.value=65535,f.mask.glass.value=0},r.labels.style.display="none";let p=new CSSStyleSheet;p.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,p]),r.camera.fov=58,r.camera.updateProjectionMatrix(),r.controls.minRadius=.6,r.controls.leftDragTurns=!1}let l=Qe(e,n),c=Math.max(1.5,...e.points.map(p=>bt(l,p).d)),d=de(l,l.length/2,0),u=a.elevation+(r.floorMap.get(a.id)?.y??0)+1.15;r.controls.maxRadius=Math.max(1.4,c-.25);let h=r.getView();h.target.set(d[0],u,d[1]),r.flyTo({...h,radius:Math.max(1.2,Math.min(c*.8,c-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},s?0:650),r.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!e?.isConnected||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let i=this.floor,s=this._wallSel?i?.furniture.find(p=>p.id===this._wallSel):void 0,r=e.viewer;if(!s||!i||!r||!ge(s)||s.locked){n.hidden=!0;return}let a=jt(i,s),l=i.elevation+(r.floorMap.get(i.id)?.y??0)+a+s.h,c=r.camera.position.clone().set(s.x,l+.12,s.z).project(r.camera);if(c.z>1){n.hidden=!0;return}n.hidden=!1;let d=e.getBoundingClientRect(),u=n.offsetParent?.getBoundingClientRect()??d;n.style.transform=`translate(${d.left-u.left+(c.x+1)/2*d.width}px, ${d.top-u.top+(1-c.y)/2*d.height}px)`;let h=n.querySelector("b");h&&(h.textContent=this.m(Math.round(a*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e?.furniture.find(d=>d.id===this._wallSel):void 0,s=this.wall3dEl?.viewer;if(!e||!n||!s||!this.isEditor)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let r=Math.hypot(s.camera.position.x-n.x,s.camera.position.z-n.z)||1,a=this.wall3dEl.clientHeight||1,l=e.rooms.find(d=>d.points.length>=3&&U([n.x,n.z],d.points)),c=Math.max(e.height,l?.ceiling_height??0);this.lift={id:n.id,y:jt(e,n),startY:t.clientY,perPx:2*r*Math.tan(s.camera.fov*Math.PI/360)/a,base:this._doc,top:Math.max(0,c-n.h),moved:!1}}liftMove(t){let e=this.lift,n=this._wallView?this.floor?.rooms.find(r=>r.id===this._wallView.roomId):void 0;if(!e||!n)return;let i=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let s=Math.min(e.top,Math.max(0,Math.round((e.y+i)*100)/100));this.moveOnWall(Qe(n,this._wallView.edge),e.id,0,s,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t?.moved&&this.pushHistory(t.base)}toggleWallPick(t){let e=t.closest(".fp3d-toolbar")?.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let i of e.rooms){if(i.points.length<3)continue;let s=U(t,i.points)?-.25:0;i.points.forEach((r,a)=>{let l=i.points[(a+1)%i.points.length],c=(l[0]-r[0])**2+(l[1]-r[1])**2||1,d=Math.max(0,Math.min(1,((t[0]-r[0])*(l[0]-r[0])+(t[1]-r[1])*(l[1]-r[1]))/c)),u=Math.hypot(t[0]-(r[0]+(l[0]-r[0])*d),t[1]-(r[1]+(l[1]-r[1])*d));u<.6&&(!n||u+s<n.d)&&(n={room:i,edge:a,d:u+s})})}if(!n){let i=e.rooms.find(s=>s.points.length>=3&&U(t,s.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((i,s)=>{let r=s.furniture.find(c=>c.id===t);if(!r)return;r.rotation=Math.round((e%360+360)%360);let[a,l]=Js(s,r,r.x,r.z,n,.6);Object.assign(r,{x:a,z:l})})}moveFromWall(t,e,n){this.change((i,s)=>{let r=s.furniture.find(a=>a.id===e);r&&(r.x=Math.round((r.x+t.n[0]*n)*1e3)/1e3,r.z=Math.round((r.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,i,s=this._doc,r=!0){this.change((a,l)=>{let c=l.furniture.find(d=>d.id===e);c&&(Object.assign(c,Bs(t,c,n)),i!==null&&(c.mount_y=Math.round(Math.min(Xe,Math.max(0,i))*1e3)/1e3))},s,r)}alongAxis(t,e){let n=this.wallTurn(t,e)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(t,e,n,i,s,r,a=this._doc,l=!0){this.change((c,d)=>{let u=d.furniture.find(p=>p.id===e);if(!u)return;let h=this.alongAxis(t,u);if(n!==null&&i!==null&&h&&i-n>=.05){let p=Bt(u).map(b=>bt(t,b).s),f=(Math.min(...p)+Math.max(...p))/2;u[h]=$(i-n),Object.assign(u,Bs(t,u,(n+i)/2-f))}if(s!==null||r!==null){let p=jt(d,u),f=s??p,b=r??p+u.h;if(b-f<.03)return;u.h=$(b-f),s!==null&&ge(u)&&(u.mount_y=$(Math.max(0,f)))}},a,l)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(t,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(t,i));try{let[i]=await Promise.all([Ge(),this.hass?Se(this.hass,n.map(s=>s.type)):void 0]);for(let s of n){let r=i.furnitureFront({type:s.type,w:s.w,d:s.d,h:s.h,variant:s.variant,lamp:sn[s.type]??null},this.wallTurn(t,s),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,s),r)}}catch{}this._wallPicTick++}}renderWallView(){let t=this._wallView,e=this.floor,n=t?e?.rooms.find(P=>P.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return y;let i=n.points.length,s=Qe(n,t.edge),r=s.length,a=Math.max(e.height,n.ceiling_height??0),l=this._techMode?Je(s,e,n,1.6).filter(P=>Tt.includes(e.furniture.find(O=>O.id===P.id)?.type??"")):Je(s,e,n),c=Dn(s,e),d=P=>s.rightward?P:r-P,u=(P,O)=>[Math.min(d(P),d(O)),Math.abs(O-P)],h=P=>a-P,p=this.isEditor,f=this._wallSel?e.furniture.find(P=>P.id===this._wallSel):void 0,b=f?l.find(P=>P.id===f.id)??(()=>{let P=Bt(f).map(V=>bt(s,V)),O=jt(e,f);return{kind:"furniture",id:f.id,s0:Math.min(...P.map(V=>V.s)),s1:Math.max(...P.map(V=>V.s)),y0:O,y1:O+f.h,d:Math.min(...P.map(V=>V.d))}})():null,g=!!f&&ge(f),_=this.wallSelection(),v=_.length>1,x=l.filter(P=>_.includes(P.id)),w=x.length?{s0:Math.min(...x.map(P=>P.s0)),s1:Math.max(...x.map(P=>P.s1)),y0:Math.min(...x.map(P=>P.y0)),y1:Math.max(...x.map(P=>P.y1))}:null,E=P=>this.m(P,2),k=P=>{let O=P.currentTarget.closest("svg"),V=O.createSVGPoint();return V.x=P.clientX,V.y=P.clientY,V.matrixTransform(O.getScreenCTM().inverse())},M=P=>[0,r,...l.filter(O=>!P.includes(O.id)).flatMap(O=>[O.s0,O.s1]),...c.flatMap(O=>[O.s0,O.s1])],F=(P,O)=>{if(!p)return;if(J&&this._runMode){this.techPress=J.pt(P),this.runDown(P,J);return}if(P.stopPropagation(),this._runSel=null,P.shiftKey||this._multiMode){this.wallToggle(O);return}(!this.wallSelection().includes(O)||this._wallSingle)&&this.wallChoose([O]);let V=this.wallSelection(),K=k(P);P.currentTarget.closest("svg").setPointerCapture(P.pointerId);let G=l.filter(tt=>V.includes(tt.id));if(V.length>1&&V.some(tt=>this.isFixedItem("furniture",tt)))return;if(V.length>1&&G.length){let tt=Math.min(...G.map(rt=>rt.s0));this.wallDrag={id:O,ids:V,w:Math.max(...G.map(rt=>rt.s1))-tt,x:K.x,y:K.y,base:this._doc,s0:tt,y0:0,lift:G.every(rt=>{let Vt=e.furniture.find(Me=>Me.id===rt.id);return!!Vt&&ge(Vt)}),moved:!1};return}let dt=l.find(tt=>tt.id===O),ot=e.furniture.find(tt=>tt.id===O);this.wallDrag={id:O,x:K.x,y:K.y,base:this._doc,s0:dt.s0,y0:dt.y0,lift:!!ot&&ge(ot),moved:!1}},L=P=>{if(!p||this._runMode)return;let O=k(P);if(P.shiftKey||this._multiMode){P.currentTarget.closest("svg").setPointerCapture(P.pointerId),this._wallFrame={x0:O.x,y0:O.y,x1:O.x,y1:O.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let V=s.rightward?O.x:r-O.x;this._wallGap=V>=0&&V<=r&&O.y>=0&&O.y<=a?this.wallGapAt(s,e,n,V,a-O.y):null},C=P=>{let O=this.wallResize;if(O){let Wt=k(P);O.moved=!0;let ni=M([O.id]).map(Jt=>d(Jt)),No=Jt=>{if(Jt=Math.round(Jt*100)/100,!P.altKey){for(let Ae of ni)if(Math.abs(Jt-Ae)<.04)return Ae}return Jt};if(O.side==="l"||O.side==="r"){let Jt=O.side==="l"?Math.min(No(Wt.x),O.x1-.1):O.x0,Ae=O.side==="r"?Math.max(No(Wt.x),O.x0+.1):O.x1,[ii,Yr]=s.rightward?[Jt,Ae]:[r-Ae,r-Jt];this.resizeOnWall(s,O.id,ii,Yr,null,null,O.base,!1)}else{let Jt=Math.round((a-Wt.y)*100)/100;O.side==="t"?this.resizeOnWall(s,O.id,null,null,null,Math.max(O.y0+.05,Math.min(a,Jt)),O.base,!1):this.resizeOnWall(s,O.id,null,null,Math.max(0,Math.min(O.y1-.05,Jt)),null,O.base,!1)}return}let V=this._wallFrame;if(V){let Wt=k(P);this._wallFrame={...V,x1:Wt.x,y1:Wt.y};return}let K=this.wallDrag;if(!K)return;let G=k(P),dt=G.x-K.x,ot=K.y-G.y;if(!K.moved&&Math.hypot(dt,ot)<.02)return;K.moved=!0;let tt=l.find(Wt=>Wt.id===K.id),rt=K.ids?K.w??0:tt?tt.s1-tt.s0:0,Vt=K.s0+(s.rightward?dt:-dt);if(Vt=Math.round(Vt*100)/100,!P.altKey)for(let Wt of M(K.ids??[K.id]))Math.abs(Vt-Wt)<.04?Vt=Wt:Math.abs(Vt+rt-Wt)<.04&&(Vt=Wt-rt);if(K.ids){this.moveSetOnWall(s,K.ids,Vt-K.s0,K.lift?Math.round(ot*100)/100:null,K.base,!1);return}let Me=K.lift?Math.round((K.y0+ot)*100)/100:null;this.moveOnWall(s,K.id,Vt-K.s0,Me,K.base,!1)},S=()=>{let P=this.wallResize;if(P){this.wallResize=null,P.moved&&this.pushHistory(P.base);return}let O=this._wallFrame;if(O){this._wallFrame=null;let[K,G]=[Math.min(O.x0,O.x1),Math.max(O.x0,O.x1)],[dt,ot]=[Math.min(O.y0,O.y1),Math.max(O.y0,O.y1)],tt=l.filter(rt=>{let[Vt,Me]=u(rt.s0,rt.s1),Wt=Vt+Me/2,ni=h((rt.y0+rt.y1)/2);return Wt>=K&&Wt<=G&&ni>=dt&&ni<=ot}).map(rt=>rt.id);tt.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(tt)])]);return}let V=this.wallDrag;this.wallDrag=null,V?.moved&&this.pushHistory(V.base)},T=P=>{if(this._runMode&&(P.key==="Escape"||P.key==="Enter")){P.preventDefault(),P.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(P.key==="Escape"){this._wallView=null;return}if((P.key==="Delete"||P.key==="Backspace")&&p&&J&&this._runSel&&!_.length&&!P.target.closest("input, select, textarea")){P.preventDefault();let dt=this._runSel.pipe;this.changePool(J.pool.id,ot=>ot.pipes=(ot.pipes??[]).filter(tt=>tt.id!==dt)),this._runSel=null;return}if((P.key==="Delete"||P.key==="Backspace")&&p&&_.length&&!P.target.closest("input, select, textarea")){P.preventDefault(),this.deleteOnWall(_);return}if(!b&&(P.key==="ArrowLeft"||P.key==="ArrowRight")){P.preventDefault(),H(P.key==="ArrowLeft"?D:z);return}if(!b||!p||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(P.key)||P.target.closest("input, select, textarea"))return;P.preventDefault();let O=P.shiftKey?.1:.01,V=P.key==="ArrowRight"?O:P.key==="ArrowLeft"?-O:0,K=s.rightward?V:-V,G=P.key==="ArrowUp"?O:P.key==="ArrowDown"?-O:0;if(v)return this.moveSetOnWall(s,_,K,G||null);this.moveOnWall(s,b.id,K,g&&G?b.y0+G:null)},R=v&&w?w:b,I=R?(()=>{let P=R,[O,V]=u(P.s0,P.s1),K=h(P.y0),G=Math.min(a+.25,h(0)+.25);return A`<g class="fp3d-wv-dims">
            ${O>.03?A`<line x1="0" y1=${G} x2=${O} y2=${G} /><text x=${O/2} y=${G-.05}>${E(O)}</text>`:y}
            ${r-O-V>.03?A`<line x1=${O+V} y1=${G} x2=${r} y2=${G} /><text x=${O+V+(r-O-V)/2} y=${G-.05}>${E(r-O-V)}</text>`:y}
            ${P.y0>.03?A`<line x1=${O+V/2} y1=${K} x2=${O+V/2} y2=${a} /><text x=${O+V/2+.05} y=${(K+a)/2} class="fp3d-wv-up">${E(P.y0)}</text>`:y}
          </g>`})():y,z=(t.edge+(s.rightward?1:-1)+i)%i,D=(t.edge+(s.rightward?-1:1)+i)%i,W=P=>this.t("wall_n",{a:P+1,b:(P+1)%i+1}),H=P=>this.openWallView(n.id,P);this._wallPicTick,this.askWallPics(s,l.map(P=>e.furniture.find(O=>O.id===P.id)).filter(P=>!!P));let j=`${n.id}:${t.edge}`,q=this.wvZoom?.key===j?this.wvZoom:null,Y=r+1,Q=a+.9,Z=(P,O,V)=>{let K=Math.min(8,Math.max(1,P)),G=Y/K,dt=Q/K;return{k:K,w:G,h:dt,x0:Math.min(-.5+Y-G,Math.max(-.5,O)),y0:Math.min(-.35+Q-dt,Math.max(-.35,V))}},B=Z(q?.k??1,q?.x0??-.5,q?.y0??-.35),st=(P,O,V)=>{let K=Z(P,O,V);this.wvZoom=K.k<=1.001?null:{key:j,k:K.k,x0:K.x0,y0:K.y0},this.requestUpdate()},At=(P,O,V)=>{let K=Math.min(8,Math.max(1,V));st(K,P-(P-B.x0)*B.k/K,O-(O-B.y0)*B.k/K)},Qt=P=>{let O=this.wvPinch,[V,K]=[...this.wvTouch.values()],G=Math.hypot(V.x-K.x,V.y-K.y),dt=(V.x+K.x)/2,ot=(V.y+K.y)/2,tt=P.getBoundingClientRect(),rt=Y/O.k,Vt=Q/O.k,Me=Math.min(tt.width/rt,tt.height/Vt),Wt=tt.left+(tt.width-rt*Me)/2,ni=tt.top+(tt.height-Vt*Me)/2,No=O.x0+(O.mx-Wt)/Me,Jt=O.y0+(O.my-ni)/Me,Ae=Math.min(8,Math.max(1,O.k*G/Math.max(1,O.d))),ii=Me*(Ae/O.k),Yr=tt.left+(tt.width-Y/Ae*ii)/2,gb=tt.top+(tt.height-Q/Ae*ii)/2;st(Ae,No-(dt-Yr)/ii,Jt-(ot-gb)/ii)};this.wvScale=1/Math.sqrt(B.k);let gt=Math.max(.09,Math.min(.16,r/40))*this.wvScale,Ve=this.canLayRuns?this.runPool:void 0,J=this.runCtx3d=Ve?{frame:s,floor:e,room:n,key:`${n.id}|${t.edge}`,L:r,H:a,gap:(ue(e,n.id,s.a,s.b)?this._doc.settings.wall_interior/2:0)+yo,runs:Zf(s,(Ve.pool?.pipes??[]).filter(P=>P.floor_id===e.id),ht(this._doc,e,Ve)),pool:Ve,pt:P=>{let O=k(P);return{s:s.rightward?O.x:r-O.x,y:a-O.y}}}:null;return m`<div class="fp3d-wv-veil" @click=${P=>P.target===P.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-modal="true" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${T} ${cn()}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${W(D)}`} @click=${()=>H(D)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%i+1})} · ${this.m(r,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${W(z)}`} @click=${()=>H(z)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${p&&this.pipeRules&&this.runPool?m`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:y}
          ${J&&p&&!this._techMode?m`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:y}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(s,n,J)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${W(D)}`} @click=${()=>H(D)}>‹<small>${W(D)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${W(z)}`} @click=${()=>H(z)}>›<small>${W(z)}</small></button>
          ${this._wallView3d?y:m`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>At(B.x0+B.w/2,B.y0+B.h/2,B.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${B.k<=1.001} @click=${()=>At(B.x0+B.w/2,B.y0+B.h/2,B.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${B.k<=1.001} @click=${()=>st(1,-.5,-.35)}>⤢</button>
                ${B.k>1.001?m`<button class="fp3d-btn" aria-label="←" @click=${()=>st(B.k,B.x0-B.w*.3,B.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>st(B.k,B.x0+B.w*.3,B.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>st(B.k,B.x0,B.y0-B.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>st(B.k,B.x0,B.y0+B.h*.3)}>↓</button>`:y}
              </div>`}
        ${this._wallView3d?m`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${rb(P=>P&&this.setupWall3d(P,n,t.edge))}
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
              ?furnish=${p}
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
              @furniture-select=${P=>{let O=P.detail.id;O&&(this.shiftHeld||this._multiMode)?this.wallToggle(O):O?!this.wallSelection().includes(O)||this._wallSingle?this.wallChoose([O]):this._wallSel=O:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
              @plan-change=${this.onPlanChange3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${P=>this.liftDown(P)} @pointermove=${P=>this.liftMove(P)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:m`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${B.x0} ${B.y0} ${B.w} ${B.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${P=>{P.preventDefault();let O=P.currentTarget,V=O.createSVGPoint();V.x=P.clientX,V.y=P.clientY;let K=V.matrixTransform(O.getScreenCTM().inverse());At(K.x,K.y,B.k*Math.exp(-P.deltaY*.0015))}}
          @pointerdown=${P=>{if(P.pointerType==="touch"){if(this.wvTouch.set(P.pointerId,{x:P.clientX,y:P.clientY}),this.wvTouch.size===2){let[O,V]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(O.x-V.x,O.y-V.y),mx:(O.x+V.x)/2,my:(O.y+V.y)/2,k:B.k,x0:B.x0,y0:B.y0},this.wvTap=null,this.techPress=null,S(),this.runPointUp(),this.endJointDrags();return}if(this.wvPinch)return;if(J&&this._runMode&&this.isEditor){P.stopPropagation();let O=J.pt(P);this.wvTap=O,this.techPress=O;return}}J&&this._runMode?(this.techPress=J.pt(P),this.runDown(P,J)):this._runSel?this._runSel=null:L(P)}}
          @pointermove=${P=>{if(this.wvTouch.has(P.pointerId)&&this.wvTouch.set(P.pointerId,{x:P.clientX,y:P.clientY}),this.wvPinch){this.wvTouch.size===2&&Qt(P.currentTarget);return}if(C(P),J&&this.jointDrag)this.jointMove(P,J);else if(J&&this.fitDrag)this.fittingMove(P,J);else if(J&&this.runDrag)this.runPointMove(P,J);else if(J&&this._runMode==="draw"&&this.techPress&&this.isEditor&&(P.buttons&1||P.pointerType==="touch")){let O=J.pt(P),V=this.techPress;if(!this._runDraft&&!this.techStroke&&Math.hypot(O.s-V.s,O.y-V.y)>.02&&(this.wvTap=null,this.runAt(J,V.s,V.y,!1,1,null)),this._runDraft&&!this.wvTap){let K=this.techStroke??=[this.techPress],G=K[K.length-1];Math.hypot(O.s-G.s,O.y-G.y)>.02&&K.push(O),this.runHover=[O.s,O.y],this.requestUpdate()}}else if(J&&this._runMode==="draw"&&this._runDraft){let O=J.pt(P);this.runHover=[O.s,O.y],this.requestUpdate()}}}
          @pointerup=${P=>{if(this.wvTouch.delete(P.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let O=this.wvTap;this.wvTap=null;let V=this.techStroke;this.techStroke=null;let K=V?V.reduce((ot,tt,rt)=>rt?ot+Math.hypot(tt.s-V[rt-1].s,tt.y-V[rt-1].y):0,0):0,G=J&&this._techMode&&this._runMode==="draw";if(V&&K>.12&&J&&this._runMode==="draw"&&this._runDraft)this.techPress=null,this.runHover=null,this.endStroke(J,V,J.pt(P));else if(G){let ot=this.techPress;if(this.techPress=null,this._runDraft=null,this.runHover=null,ot){let tt=this.runPick(J,ot.s,ot.y,!0);this._runSel=tt.pipe?{pipe:tt.pipe.id,pt:null}:null}}else O&&J&&this._runMode&&this.runAt(J,O.s,O.y,!1,1,null),this.techPress=null;S(),this.runPointUp(),this.fittingUp(J);let dt=this.jointDrag;this.jointDrag=null,dt?.moved?this.pushHistory(dt.base):dt&&J&&this.openCard(J.pool.id,`joint:${dt.id}`)}}
          @pointercancel=${P=>{this.wvTouch.delete(P.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,this.techStroke=null,S(),this.runPointUp(),this.endJointDrags()}}
          style="--fs:${gt}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${r} height=${a} />
          ${Array.from({length:Math.floor(a/.5)},(P,O)=>A`<line class="fp3d-wv-grid" x1="0" x2=${r} y1=${h((O+1)*.5)} y2=${h((O+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${h((O+1)*.5)+.03}>${((O+1)*.5).toFixed(1)}</text>`)}
          ${c.map(P=>{let[O,V]=u(P.s0,P.s1),K=e.openings.find(dt=>dt.id===P.id),G=K?.type==="window"?this.t("opening_window"):K?.type==="garage"?this.t("opening_garage"):this.t("opening_door");return A`<rect class="fp3d-wv-hole ${K?.type==="window"?"fp3d-wv-window":""}" x=${O} y=${h(P.y1)} width=${V} height=${P.y1-P.y0} />
              ${V>gt*3.5?A`<text class="fp3d-wv-hole-label" x=${O+V/2} y=${h(P.y1)+gt*1.3} style="font-size:${gt*.85}px">${G}</text>`:y}`})}
          ${l.map(P=>{let[O,V]=u(P.s0,P.s1),K=e.furniture.find(rt=>rt.id===P.id),G=K.name||pt(this.hass,K.type),dt=P.y1-P.y0,ot=this.wallPics.get(this.wallPicKey(s,K)),tt=d(bt(s,[K.x,K.z]).s);return A`<g class="fp3d-wv-item ${ot?"fp3d-wv-pic":""} ${P.id===this._wallSel||_.includes(P.id)?"fp3d-wv-sel":""}" @pointerdown=${rt=>F(rt,P.id)} @dblclick=${()=>{if(e.furniture.find(Vt=>Vt.id===P.id)?.group&&!this._wallSingle){this.wallChoose([P.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",P.id)}}>
              ${ot?A`<image href=${ot.url} x=${tt+ot.x0} y=${h(P.y0+ot.y1)} width=${ot.x1-ot.x0} height=${ot.y1-ot.y0} preserveAspectRatio="none" />`:y}
              <rect x=${O} y=${h(P.y1)} width=${V} height=${Math.max(.02,dt)}><title>${G}</title></rect>
              ${!ot&&V>gt*3&&dt>gt*1.4?A`<text x=${O+V/2} y=${h(P.y1)+Math.min(dt/2,gt*1.6)+gt*.35} style="font-size:${gt}px">${G}</text>`:y}
            </g>`})}
          ${I}
          ${b&&f&&!v&&p&&!f.locked&&l.some(P=>P.id===b.id)?(()=>{let[P,O]=u(b.s0,b.s1),V=h(b.y1),K=h(b.y0),G=gt*.75,dt=this.alongAxis(s,f),ot=tt=>rt=>{rt.stopPropagation(),rt.currentTarget.closest("svg").setPointerCapture(rt.pointerId),this.wallResize={id:b.id,side:tt,x0:P,x1:P+O,y0:b.y0,y1:b.y1,base:this._doc,moved:!1}};return A`<g class="fp3d-wv-handles">
                  ${dt?A`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${P-G/2} y=${(V+K)/2-G} width=${G} height=${G*2} rx=${G/3} @pointerdown=${ot("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${P+O-G/2} y=${(V+K)/2-G} width=${G} height=${G*2} rx=${G/3} @pointerdown=${ot("r")} />`:y}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${P+O/2-G} y=${V-G/2} width=${G*2} height=${G} rx=${G/3} @pointerdown=${ot("t")} />
                  ${b.y0>.05&&ge(f)?A`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${P+O/2-G} y=${K-G/2} width=${G*2} height=${G} rx=${G/3} @pointerdown=${ot("b")} />`:y}
                  <text class="fp3d-wv-size" x=${P+O/2} y=${V-G*.9} style="font-size:${gt*.85}px">${E(b.s1-b.s0)} × ${E(b.y1-b.y0)}</text>
                </g>`})():y}
          ${v&&w?(()=>{let[P,O]=u(w.s0,w.s1),V=!this._wallMulti.length;return A`<g class=${`fp3d-wv-setframe${V?" fp3d-wv-setblock":""}`}><rect x=${P-.03} y=${h(w.y1)-.03} width=${O+.06} height=${w.y1-w.y0+.06} /><text x=${P} y=${h(w.y1)-.07} style="font-size:${gt*.85}px">${V?`\u25A3 ${this.t("block_title")} \xB7 ${_.length}`:this.t("multi_title",{n:_.length})}</text></g>`})():y}
          ${this._wallGap?(()=>{let P=this._wallGap,[O,V]=u(P.s0,P.s1),K=P.low?Math.min(a,.9):Math.min(a,2.2),G=P.low?0:1.3;return A`<g class="fp3d-wv-gap"><rect x=${O} y=${h(K)} width=${V} height=${K-G} /><text x=${O+V/2} y=${h((K+G)/2)} style="font-size:${gt}px">${E(V)}</text></g>`})():y}
          ${this._wallFrame?A`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:y}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${r+.3} y1=${a} y2=${a} />
          ${J?this.renderRuns(J,d,h):y}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${J&&this._techMode&&!this._runDraft&&!this._runSel&&!b&&(this._runMode==="draw"||this._runMode==="feed")?m`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(J)}`:J&&(this._runMode||this._runSel&&!b)?this.renderRunFoot(J):v&&p?this.renderWallSetFoot(s,_,w,u):b&&f?m`<b>${f.name||pt(this.hass,f.type)}</b>
                ${this.fixButton("furniture",b.id)}
                ${f.group&&p?m`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:y}
                ${J&&Tt.includes(f.type)?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(J.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:y}
                ${f.locked&&p?m`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:y}
                ${this.len(this.t("wall_view_left"),Math.round(u(b.s0,b.s1)[0]*1e3)/1e3,P=>{let O=P-u(b.s0,b.s1)[0];this.moveOnWall(s,b.id,s.rightward?O:-O,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,b.d)*1e3)/1e3,P=>this.moveFromWall(s,b.id,P-b.d),.01,0)}
                ${p&&!f.locked&&this.alongAxis(s,f)?this.len(this.t("width"),Math.round((b.s1-b.s0)*1e3)/1e3,P=>{let O=Math.max(.05,P);s.rightward?this.resizeOnWall(s,b.id,b.s0,b.s0+O,null,null):this.resizeOnWall(s,b.id,b.s1-O,b.s1,null,null)},.01,.05):y}
                ${p&&!f.locked?this.len(this.t("height_m"),Math.round((b.y1-b.y0)*1e3)/1e3,P=>this.resizeOnWall(s,b.id,null,null,null,b.y0+Math.max(.03,P)),.01,.03):y}
                ${g?this.len(this.t("mount_height"),Math.round(b.y0*1e3)/1e3,P=>this.moveOnWall(s,b.id,0,P),.01,0):m`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${p&&!f.locked?m`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,P=>this.turnOnWall(f.id,P),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:y}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",b.id)}}>${this.t("wall_view_form")}</button>
                ${p?m`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([b.id])}>${this.t("delete")}</button>`:y}`:m`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${p&&!this._techMode?this.renderMultiToggle():y}
        </div>
      </div>
    </div>`}renderWallSetFoot(t,e,n,i){let s=!this._wallMulti.length,r=e.every(l=>this.isFixedItem("furniture",l)),a=!r&&e.some(l=>this.isFixedItem("furniture",l));return m`<b>${s?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</b>
      ${a?m`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:y}
      ${s?m`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let l=this._wallSel;this._wallMulti=e,this.ungroupSelectionOf(e),this._wallSel=l}}>${this.t("block_break")}</button>`:m`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(e),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,l=>{let c=l-i(n.s0,n.s1)[0];this.moveSetOnWall(t,e,t.rightward?c:-c,null)},.01,0):y}
      <button class="fp3d-btn ${a?"fp3d-primary":""}" @click=${()=>{let l=new Set(e),c=!r&&!a;this.change((d,u)=>{for(let h of u.furniture)l.has(h.id)&&(h.locked=c||null)})}}>${r?`\u{1F513} ${this.t("unfix")}`:a?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(e)}>${this.t("delete")}</button>`}async deleteOnWall(t){if(!t.length||!this.isEditor)return;if(t.length>1){if(!await this.ask(this.t(t.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:t.length})))return}else if(!await this.confirmFixedDelete("furniture",t[0]))return;let e=new Set(t);this.change((n,i)=>i.furniture=i.furniture.filter(s=>!e.has(s.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(t){let e=new Set(t),n=N("block");this.change((i,s)=>{for(let r of s.furniture)e.has(r.id)&&(r.group=n)})}ungroupSelectionOf(t){let e=new Set(t);this.change((n,i)=>{for(let s of i.furniture)e.has(s.id)&&(s.group=null)})}};var Nr=class{addOnWall(t,e,n){let i=this.floor;if(!i||!this.isEditor)return;this.rememberWallType(t);let s=this._wallGap;if(s)return this.addIntoGap(t,e,n,s);let[r,a,l]=yt(t),c=[...Je(e,i,n).map(g=>[g.s0,g.s1]),...Dn(e,i).filter(g=>g.y0<.05).map(g=>[g.s0,g.s1])],d=Math.max(0,e.length/2-r/2);for(let g=.1;g+r<=e.length-.05;g+=.05)if(!c.some(([_,v])=>g<v+.05&&g+r>_-.05)){d=g;break}let u=ue(i,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[h,p]=de(e,d+r/2,u+a/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),b={id:N("furniture"),type:t,x:$(h),z:$(p),rotation:f,w:r,d:a,h:l,variant:null};this.change((g,_)=>_.furniture.push(b)),this._runSel=null,this._runMode=null,this._wallSel=b.id}addIntoGap(t,e,n,i){let s=this.floor,r=i.s1-i.s0,[a,l,c]=yt(t);_o.has(t)&&(a>r+.005||r-a<.1)&&(a=Math.round(r*1e3)/1e3);let d=ue(s,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,u=i.s0+Math.min(a,r)/2,[h,p]=de(e,u,d+l/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),b={id:N("furniture"),type:t,x:$(h),z:$(p),rotation:f,w:a,d:l,h:c,variant:null};this.change((g,_)=>_.furniture.push(b)),this._wallGap=null,this._wallSel=b.id,this._wallMulti=[]}rememberWallType(t){try{let e=JSON.parse(localStorage.getItem("home3d.wallRecent")??"[]");localStorage.setItem("home3d.wallRecent",JSON.stringify([t,...e.filter(n=>n!==t)].slice(0,6)))}catch{}}wallRecent(){try{let t=JSON.parse(localStorage.getItem("home3d.wallRecent")??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"&&(Ki.includes(e)||!!mt(e))):[]}catch{return[]}}renderWallFurniture(t,e){let n=this.hass?.language??"en",i=this._wallGap,s=i?i.s1-i.s0:0,r=xl(this._wallQuery.trim()),a=this._wallCat,l=(this.packs??[]).flatMap(_=>_.items.filter(v=>!v.light&&!v.vehicle&&!v.hole&&v.mount!=="ceiling").map(v=>({type:St(_.id,v.id),label:Ot(v,n),search:`${Object.values(v.name).join(" ")} ${_.name}`,wall:v.mount==="wall"}))),c=_=>this.t(`furn_${_}`),d=[];a==="pack"?d=l:a==="energy"?d=["meter","inverter","home_battery","wallbox"].map(_=>({type:_,label:c(_),search:""})):a?d=(qs[a]??[]).map(_=>({type:_,label:c(_),search:qt(xo,`furn_${_}`)})):r||i?d=[...Object.values(qs).flat().filter((_,v,x)=>x.indexOf(_)===v).map(_=>({type:_,label:c(_),search:qt(xo,`furn_${_}`)})),...l]:this.wallRecent().length||(d=qs.base.map(_=>({type:_,label:c(_),search:""})));let u=r.split(/\s+/).filter(Boolean),h=u.length?d.filter(_=>u.every(v=>xl(`${_.label} ${_.search} ${_.type.replace(/[_:.]/g," ")}`).includes(v))):d;if(i){let _=(v,x)=>x||tf.has(v);h=h.filter(v=>_(v.type,v.wall)===!i.low).filter(v=>yt(v.type)[0]<=s+.01||_o.has(v.type)&&s>=(ef[v.type]??.2)).sort((v,x)=>{let w=E=>_o.has(E)?1:Math.min(1,yt(E)[0]/s);return w(x.type)-w(v.type)||Number(v.type.startsWith("pack:"))-Number(x.type.startsWith("pack:"))})}let p=!a&&!r&&!i?this.wallRecent():[],f=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],["switches","\u{1F50C}"],...(this.packs??[]).some(_=>_.items.length)?[["pack","\u{1F9E9}"]]:[],["energy","\u26A1"]],b=[...p,...h.slice(0,40).map(_=>_.type)];this.askKitPics(b),this._wallPicTick;let g=(_,v)=>{let x=yt(_)[0],w=i&&_o.has(_)&&(x>s+.005||s-x<.1),E=this.kitPics.get(_);return m`<button class="fp3d-wv-tile" title=${v} @click=${()=>this.addOnWall(_,t,e)}>
        <span class="fp3d-wv-tile-pic">${E?m`<img src=${E} alt="" />`:m`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${v}</span>
        <small class=${w?"fp3d-wv-fit":""}>${w?`\u2194 ${this.m(s,2)}`:this.m(x,2)}</small>
      </button>`};return m`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${f.map(([_,v])=>m`<button class="fp3d-wv-cat ${a===_?"fp3d-on":""}" title=${this.t(`wv_cat_${_}`)} @click=${()=>this._wallCat=a===_?null:_}><span>${v}</span>${this.t(`wv_cat_${_}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${_=>this._wallQuery=_.target.value} />
      ${i?m`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(s,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!a&&!r?m`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:y}
      ${a?m`<h4>${this.t(`wv_cat_${a}`)}</h4>`:y}
      ${p.length?m`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${p.map(_=>g(_,mt(_)?Ot(mt(_),n):c(_)))}</div>`:y}
      ${(a||r||i)&&!h.length?m`<p class="fp3d-sub">${this.t(i?"wv_none_fits":"furniture_search_none")}</p>`:y}
      <div class="fp3d-wv-tiles">${h.slice(0,40).map(_=>g(_.type,_.label))}</div>
    </aside>`}async askKitPics(t){let e=t.filter(n=>!this.kitPicsAsked.has(n));if(e.length){for(let n of e)this.kitPicsAsked.add(n);try{let[n]=await Promise.all([Ge(),this.hass?Se(this.hass,e):void 0]);for(let i of e){let[s,r,a]=yt(i);this.kitPics.set(i,n.furniturePreview({type:i,w:s,d:r,h:a,variant:null,lamp:sn[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(t,e,n){let i=!!n;if(!i)return this.isEditor?this.renderWallFurniture(t,e):y;if(this._techMode&&n)return this.renderTechKit(t,e,n);if(!this.isEditor)return y;let s=a=>m`<button class="fp3d-btn" @click=${()=>this.addOnWall(a,t,e)}>+ ${this.t(`furn_${a}`)}</button>`,r=(a,l)=>m`<button class="fp3d-btn ${this._runMode===a?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,a)}>+ ${this.t(l)}</button>`;return m`<aside class="fp3d-wv-kit">
      ${i?m`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${r("valve","wall_run_valve")} ${r("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(a=>m`<button class="fp3d-btn ${this._runMode===a?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===a?null:a}}>+ ${this.t(`wall_kit_${a}`)}</button>`)}`:y}
      ${m`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`}
    </aside>`}};var jr=class{techDoc3d(){let t=this._doc3d;if(this.techDocCache?.src===t)return this.techDocCache.doc;let e={...t,floors:t.floors.map(n=>({...n,furniture:n.furniture.filter(i=>Tt.includes(i.type))}))};return this.techDocCache={src:t,doc:e},e}enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}runFrame(t){let[e,n]=t.split("|"),i=this.floor?.rooms.find(s=>s.id===e);return i&&Number(n)<i.points.length?Qe(i,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(a=>a.outdoor.some(l=>l.id===t.pool)),s=i?.outdoor.find(a=>a.id===t.pool);if(!i||!s)return this._doc;s.pool??={};let r={id:"__draft",from:t.from,to:"",floor_id:i.id,points:e.map(a=>[a[0],a[2]]),heights:e.map(a=>a[1])};return s.pool.pipes=[...s.pool.pipes??[],r],n}runLast(t,e){if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=ht(this._doc,e.floor,e.pool);if(t.extend){let s=e.pool.pool?.pipes?.find(a=>a.id===t.extend.pipe),r=s?ie(s,n):[];return(t.extend.end==="to"?r[r.length-1]:r[0])??null}let i=n(t.from);return i?[i.x,i.y,i.z]:null}runPick(t,e,n,i=!1){if(!i){for(let l of t.runs)for(let c of l.ends)if(Math.hypot(c.s-e,c.y-n)<.12)return{end:{pipe:l.id,end:c.end}}}let s=ht(this._doc,t.floor,t.pool),r=null,a=[...t.floor.furniture.filter(l=>Tt.includes(l.type)).flatMap(l=>tn(l.type).length?tn(l.type).map(c=>`dev:${l.id}:${c}`):[`dev:${l.id}`]),...(t.pool.pool?.joints??[]).map(l=>l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`)];for(let l of i?[]:a){let c=s(l);if(!c)continue;let d=bt(t.frame,[c.x,c.z]);if(d.d<-.3||d.d>1.6)continue;let u=Math.hypot(d.s-e,c.y-n);u<.12&&(!r||u<r.d)&&(r={node:l,d:u})}if(r)return{node:r.node};if(this._techMode&&!i){let l=t.floor.furniture.find(c=>{if(!Tt.includes(c.type)||c.type==="pool_valve")return!1;let d=Bt(c).map(h=>bt(t.frame,h));if(Math.min(...d.map(h=>h.d))>1.6||Math.max(...d.map(h=>h.d))<-.3)return!1;let u=jt(t.floor,c);return Math.min(...d.map(h=>h.s))-.03<=e&&e<=Math.max(...d.map(h=>h.s))+.03&&u-.03<=n&&n<=u+c.h+.03});if(l)return{node:`dev:${l.id}`}}for(let l of t.runs)for(let c of l.pieces){let[d,u]=[c.s1-c.s0,c.y1-c.y0],h=d*d+u*u,p=h>0?Math.max(0,Math.min(1,((e-c.s0)*d+(n-c.y0)*u)/h)):0,[f,b]=[c.s0+d*p,c.y0+u*p];if(Math.hypot(f-e,b-n)<(i?.24:.07))return{pipe:{id:l.id,p:ve(t.frame,f,b,c.d0+(c.d1-c.d0)*p)}}}return{}}eraseAt(t,e,n){let i=(l,c,d)=>Math.hypot(l-e,c-n)<d;for(let l of t.runs)for(let c of l.fittings)if(i(c.s,c.y,.1*Math.max(1,this.wvScale))){this.changePool(t.pool.id,d=>{let u=d.pipes?.find(h=>h.id===l.id);u&&(u.fittings=(u.fittings??[]).filter(h=>h.id!==c.id))});return}let s=ht(this._doc,t.floor,t.pool),r=(t.pool.pool?.joints??[]).find(l=>{let c=l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`,d=s(c);if(!d)return!1;let u=bt(t.frame,[d.x,d.z]);return u.d>-.3&&u.d<1.6&&i(u.s,d.y,.1)});if(r){let l=`joint:${r.id}`;this.changePool(t.pool.id,c=>{c.joints=(c.joints??[]).filter(d=>d.id!==r.id),c.pipes=(c.pipes??[]).filter(d=>we(d.from)!==l&&we(d.to)!==l)}),this._runSel=null;return}let a=this.runPick(t,e,n,!0);if(a.pipe){let l=a.pipe.id;this.changePool(t.pool.id,c=>c.pipes=(c.pipes??[]).filter(d=>d.id!==l)),this._runSel=null}}runDown(t,e){if(!this._runMode||!this.isEditor||(t.stopPropagation(),this._techAsk=null,this._techMode&&this._runMode==="draw"))return;let{s:n,y:i}=e.pt(t);this.runAt(e,n,i,t.altKey,t.detail,null)}runDown3d(t){let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isEditor||!this._wallView3d)return;let n=this.wall3dEl?.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[s,r]=[t.clientX-i.left,t.clientY-i.top],a=n.furnitureIdAt(s,r),l=a?e.floor.furniture.find(v=>v.id===a&&Tt.includes(v.type)):void 0,c=n.pointerRay(s,r),d=de(e.frame,0,e.gap),u=e.frame.n,h=c.d[0]*u[0]+c.d[2]*u[1];if(Math.abs(h)<1e-6)return;let p=((d[0]-c.o[0])*u[0]+(d[1]-c.o[2])*u[1])/h;if(p<=0&&!l)return;let f=[c.o[0]+c.d[0]*p,c.o[1]+c.d[1]*p,c.o[2]+c.d[2]*p],b=e.floor.elevation+(n.floorMap.get(e.floor.id)?.y??0),g=ht(this._doc,e.floor,e.pool),_=()=>{let v=tn(l.type);if(!v.length)return`dev:${l.id}`;let x=w=>{let E=g(w),k=[E.x-c.o[0],E.y+b-c.o[1],E.z-c.o[2]],M=k[0]*c.d[0]+k[1]*c.d[1]+k[2]*c.d[2];return Math.hypot(k[0]-c.d[0]*M,k[1]-c.d[1]*M,k[2]-c.d[2]*M)};return v.map(w=>`dev:${l.id}:${w}`).sort((w,E)=>x(w)-x(E))[0]};this.runAt(e,bt(e.frame,[f[0],f[2]]).s,f[1]-b,t.altKey,t.detail,l&&this._runMode==="draw"?_():null)}runAt(t,e,n,i,s,r){let a=this._runMode;if(!a)return;if(a==="tee"&&this._techMode){let d=this.runPick(t,e,n,!0);d.pipe&&this.teeOnPipe(t,d.pipe.id,d.pipe.p);return}if(a==="hole_wall"||a==="hole_floor"||a==="tee"||a==="y")return this.placeJoint(t,a,e,n);if(a==="feed")return this.placeFeed(t,e,n);if(a==="erase")return this.eraseAt(t,e,n);let l=r?{node:r}:this.runPick(t,e,n,a!=="draw");if(a!=="draw"){if(!l.pipe&&this._techMode)return;l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,a),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let c=this._runDraft;if(c&&this._techMode&&!this.techStroke&&((c.pts.length>=2||(c.extend||c.fromT||c.from)&&c.pts.length)&&this.finishRun("",null),this._runDraft=null,c=null),!c){let d={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},u;l.end?u={...d,extend:l.end}:l.node?u={...d,from:l.node}:l.pipe?u={...d,fromT:l.pipe.p}:u={...d,pts:[ve(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...u,anchor:this.runLast({...u,pts:[]},t)};return}if(s>=2)return void this.finishRun("",null);if(l.node&&l.node!==c.from)return void this.finishRun(l.node,null);if(l.pipe)return void this.finishRun("",l.pipe.p);this._runDraft={...c,pts:[...c.pts,...this.runStep(c,t,e,n,i)],wall:t.key,d:t.gap}}runStep(t,e,n,i,s){let r=Math.round(n*20)/20,a=Math.round(i*20)/20,l=[],c=this.runLast(t,e);if(c&&t.wall!==e.key){let d=this.runFrame(t.wall),u=d&&Xh(d,t.d,e.frame,e.gap);u&&(c=[$(u[0]),c[1],$(u[1])],l.push(c))}if(c&&!s){let d=bt(e.frame,[c[0],c[2]]);d.d>-.35&&d.d<.6&&(Math.abs(r-d.s)<Math.abs(a-c[1])?r=d.s:a=c[1])}return l.push(ve(e.frame,r,a,e.gap)),l.map(d=>[$(d[0]),$(d[1]),$(d[2])])}finishRun(t,e,n=[],i){let s=this._runDraft,r=this.floor,a=this.pipeRules;if(this._runDraft=null,!s||!r||!a)return null;let l=[...s.pts,...n],c=this._techMode?this.runFrame(s.wall):null,d=this._techMode?this.floor?.outdoor.find(h=>h.id===s.pool):void 0;if(c&&d&&!n.length&&(t||e)){let h=l.length?l[l.length-1]:(()=>{let f=s.from?ht(this._doc,r,d)(s.from):null;return f?[f.x,f.y,f.z]:s.fromT})(),p=e?{x:e[0],y:e[1],z:e[2]}:ht(this._doc,r,d)(t);if(h&&p){let f=bt(c,[h[0],h[2]]),b=bt(c,[p.x,p.z]);Math.abs(f.s-b.s)>.03&&Math.abs(h[1]-p.y)>.03&&l.push(ve(c,b.s,h[1],s.d))}}if(!l.length&&!e&&(!t||t===s.from)&&!s.fromT)return null;let u=null;return this.changePool(s.pool,(h,p)=>{let f=h.joints??=[],b=h.pipes??=[],g=ht(this._doc,r,p),_=z=>{let D=z.startsWith("joint:")?f.find(W=>`joint:${W.id}`===z):void 0;return D?{x:D.x,z:D.z,y:D.y}:g(z)},v=z=>{let D=null;for(let H of b){let j=$i(ie(H,_),z);j&&j.d<.12&&(!D||j.d<D.d)&&(D={pipe:H,d:j.d})}let W=D&&Ro(D.pipe,_,z,N("joint"),N("pipe"));return!D||!W?"":(f.push(W.joint),b.splice(b.indexOf(D.pipe),1,W.first,W.second),`joint:${W.joint.id}:out2`)},x=(z,D=[])=>{let{kind:W,id:H,port:j}=ct(z),q=W==="joint"&&!j?f.find(Z=>Z.id===H):void 0;if(!q||!q.kind)return z;if(q.kind==="wall"||q.kind==="floor")return`joint:${H}:inside`;let Y=new Set([...b.flatMap(Z=>[Z.from,Z.to]),...D]),Q=qn(q.kind).find(Z=>!Y.has(`joint:${H}:${Z}`));return Q?`joint:${H}:${Q}`:z},w=s.fromT?v(s.fromT):x(s.from),E=e?v(e):x(t,[w]),k=r.furniture.filter(z=>Tt.includes(z.type)).map(z=>({id:z.id,type:z.type})),M=z=>b.flatMap(D=>[D.from,D.to]).filter(D=>we(D)===z).map(D=>ct(D).port).filter(D=>!!D),F=z=>{let{kind:D,id:W}=ct(z);return D==="port"?p.pool?.ports?.find(H=>H.id===W)?.kind==="waste":D==="joint"&&/kanal|waste|abwasser|backwash/i.test(f.find(H=>H.id===W)?.name??"")},L=(z,D)=>{let{kind:W,id:H,port:j}=ct(z);if(W!=="dev"||j)return z;let q=r.furniture.find(Q=>Q.id===H)?.type??"",Y=a.autoPort(q,D?a.nodeFlow(D,p,k):null,F(D),M(`dev:${H}`));return Y?`dev:${H}:${Y}`:z};w=L(w,E),E=L(E,w);let C=l.map(z=>[$(z[0]),$(z[2])]),S=l.map(z=>$(z[1])),T=s.extend,R=T&&b.find(z=>z.id===T.pipe);if(T&&R){Object.assign(R,se(R,_)),T.end==="to"?(R.points=[...R.points,...C],R.heights=[...R.heights??[],...S],R.to=E):(R.points=[...C.reverse(),...R.points],R.heights=[...S.reverse(),...R.heights??[]],R.from=E),i!==void 0&&(R.height=i),u=R.id;return}let I={id:N("pipe"),from:w,to:E,floor_id:r.id,points:C,heights:S,height:i??S[S.length-1]??null};I=a.orientPipe(I,w?a.nodeFlow(w,p,k):null,E?a.nodeFlow(E,p,k):null),b.push(I),u=I.id}),u&&!this._techMode&&(this._runSel={pipe:u,pt:null}),this._runMode=this._techMode?"draw":null,u}teeOnPipe(t,e,n){let i=ht(this._doc,t.floor,t.pool);this.changePool(t.pool.id,s=>{let r=[...s.pipes??[]],a=r.findIndex(c=>c.id===e);if(a<0)return;let l=Ro(r[a],i,n,N("joint"),N("pipe"));l&&(s.joints=[...s.joints??[],l.joint],r.splice(a,1,l.first,l.second),s.pipes=r)}),this._runMode="draw"}placeFeed(t,e,n){let i=this._feedKind;this._feedKind=null,this._runMode="draw",i&&this.feedAt(t,i,e,n)}feedAt(t,e,n,i){let s=this.floor;if(!s)return null;let r=Math.round(n*20)/20,a=i<.25,l=t.gap-yo,c=ue(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d=this.t(`feed_${e}`),[u,h]=hn(t.frame,r,a?t.gap:l),p=a?{id:N("joint"),kind:"floor",x:u,z:h,y:0,name:d}:{id:N("joint"),kind:"wall",x:u,z:h,y:Math.round(i*20)/20,nx:$(t.frame.n[0]),nz:$(t.frame.n[1]),depth:$(c),name:d};return this.changePool(t.pool.id,(f,b)=>{f.joints=[...f.joints??[],p];let g=(f.ports??[]).filter(E=>E.kind===e);if(e==="waste"&&!g.length){let E=_n(p,"outside"),k={id:N("port"),kind:"waste",x:$(E.x-t.frame.n[0]*1),z:$(E.z-t.frame.n[1]*1)};f.ports=[...f.ports??[],k],g=[k]}if(!g.length)return;let _=ht(this._doc,s,b),v=E=>{let{kind:k,id:M,port:F}=ct(E),L=k==="joint"?(f.joints??[]).find(S=>S.id===M):void 0;if(L)return _n(L,F);let C=k==="port"?(f.ports??[]).find(S=>S.id===M):void 0;return C?_(E)??{x:C.x,y:.02,z:C.z}:_(E)},x=E=>{let{kind:k,id:M}=ct(E);if(k==="port"){let F=(f.ports??[]).find(L=>L.id===M);return F?ar(F.kind):null}return null},w=Yn({from:`joint:${p.id}:outside`,vias:[],to:g.map(E=>`port:${E.id}`),floorId:s.id},v,f.joints??[],x,E=>N(E));f.joints=[...f.joints??[],...w.joints],f.pipes=[...f.pipes??[],...w.pipes]}),p}endStroke(t,e,n){let i=this._runDraft;if(!i)return;let s=this.runLast(i,t),r=s?bt(t.frame,[s[0],s[2]]):null,a=r&&r.d>-.35&&r.d<.6?{s:r.s,y:s[1]}:e[0],l=nf([a,...Us(e,.08),n]),c=l.slice(1,-1).map(f=>{let b=ve(t.frame,f.s,f.y,t.gap);return[$(b[0]),$(b[1]),$(b[2])]}),d=this.runPick(t,n.s,n.y);if(this._techAsk=null,d.node&&d.node!==i.from){this.finishRun(d.node,null,c);return}if(d.pipe){this.finishRun("",d.pipe.p,c);return}let u=l[l.length-1],h=ve(t.frame,Math.round(u.s*20)/20,Math.round(u.y*20)/20,t.gap),p=this.finishRun("",null,[...c,[$(h[0]),$(h[1]),$(h[2])]]);p&&(this._techAsk={s:u.s,y:u.y,pipe:p})}answerAsk(t,e){let n=this._techAsk;if(this._techAsk=null,!n)return;if(e==="cancel"){this.changePool(t.pool.id,s=>s.pipes=(s.pipes??[]).filter(r=>r.id!==n.pipe));return}if(!e)return;let i=this.feedAt(t,e,n.s,n.y);i&&this.changePool(t.pool.id,s=>{let r=s.pipes?.find(a=>a.id===n.pipe);r&&(r.to?r.from||(r.from=`joint:${i.id}:inside`):r.to=`joint:${i.id}:inside`)})}renderTechKit(t,e,n){let i=n.pool,s=this.pipeRules;if(!s)return y;let r=d=>m`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(d,t,e)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(d)?m`<img src=${this.kitPics.get(d)} alt="" />`:m`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${d}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let a=["skimmer","drain","inlet","waste"].filter(d=>d==="waste"||(i.pool?.ports??[]).some(u=>u.kind===d)),l=(d,u)=>m`<button class="fp3d-btn ${this._runMode===d?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===d?"draw":d}}>+ ${this.t(u)}</button>`,c=this._techAsk;return m`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${c?m`<div class="fp3d-tech-ask">
            <b>${this.t("tech_ask")}</b>
            ${["skimmer","drain","inlet","waste"].map(d=>m`<button class="fp3d-btn fp3d-tech-feed" @click=${()=>this.answerAsk(n,d)}><i>${d==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${d}`)}</button>`)}
            <button class="fp3d-btn" @click=${()=>this.answerAsk(n,null)}>${this.t("tech_ask_loose")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.answerAsk(n,"cancel")}>${this.t("delete")}</button>
          </div>`:this.renderTechStep(n)}
      <div class="fp3d-seg fp3d-tech-pen" role="group">
        <button aria-pressed=${this._runMode==="draw"} @click=${()=>{this._runMode="draw",this._runSel=null}}><span>✏</span>${this.t("tech_draw")}</button>
        <button aria-pressed=${this._runMode!=="draw"&&this._runMode!=="feed"&&this._runMode!=="erase"} @click=${()=>{this._runDraft=null,this._runMode=null}}><span>✋</span>${this.t("tech_pick")}</button>
        <button aria-pressed=${this._runMode==="erase"} title=${this.t("tech_erase_hint")} @click=${()=>{this._runDraft=null,this._runSel=null,this._feedKind=null,this._runMode=this._runMode==="erase"?"draw":"erase"}}><span>🧽</span>${this.t("tech_erase")}</button>
      </div>
      <button class="fp3d-btn fp3d-tech-undo" ?disabled=${!this._canUndo} title="Ctrl+Z" @click=${()=>{this._runDraft=null,this.undo()}}>↶ ${this.t("undo")}</button>
      <h4>${this.t("tech_feeds")}</h4>
      ${a.map(d=>{let u=s.feedDone(i,d);return m`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===d?"fp3d-primary":""} ${u?"fp3d-on":""}" ?disabled=${u} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===d?null:d,this._runMode=this._feedKind?"feed":"draw"}}><i>${d==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${d}`)}${u?m`<small>✓</small>`:y}</button>`})}
      ${(i.pool?.ports??[]).some(d=>d.kind!=="waste")?y:m`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(r)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${l("valve","wall_run_valve")} ${l("sight","wall_run_sight")}
      <button class="fp3d-btn ${this._runMode==="tee"?"fp3d-primary":""}" title=${this.t("tech_step_tee")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode==="tee"?"draw":"tee"}}>+ ${this.t("joint_add_tee")}</button>
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(t){let e=t.pool,n=this.pipeRules;if(!n)return y;let i=e.pool?.ports??[],s=t.floor.furniture.filter(p=>Tt.includes(p.type)),r=(p,f)=>m`<div class="fp3d-tech-step ${p===null?"fp3d-done":""}"><b>${p===null?"\u2713":this.t("tech_step",{n:p})}</b>${f}</div>`;if(this._runMode==="feed")return r(1,this.t("tech_feed_place"));if(this._runMode==="erase")return m`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return r(4,this.t("tech_step_fit"));if(this._runMode==="tee")return r(4,this.t("tech_step_tee"));if(this._runDraft)return r(3,this.t("tech_step_drawing"));if(!i.some(p=>p.kind!=="waste"))return r(1,this.t("tech_no_ports"));let a=["skimmer","drain","inlet"].find(p=>i.some(f=>f.kind===p)&&!n.feedDone(e,p));if(a)return r(1,this.t("tech_step_feed",{name:this.t(`feed_${a}`)}));let l=s.find(p=>p.type==="pool_pump"),c=s.find(p=>p.type==="pool_filter");if(!l||!c)return r(2,this.t("tech_step_devices"));let d=n.issues(e,s.map(p=>({id:p.id,type:p.type}))),u=p=>this.poolNodeLabel(e,p),h=d.find(p=>p.kind==="port");if(h){let{port:p}=ct(h.node),f={suction:this.t("feed_skimmer"),pressure:u(`dev:${c.id}:pump`),pump:u(`dev:${l.id}:pressure`),return:s.some(b=>b.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:u(`dev:${c.id}:return`),out:this.t("feed_inlet")};return r(3,this.t("tech_step_line",{a:p?f[p]??"\u2026":"\u2026",b:u(h.node)}))}return d.some(p=>p.kind==="loose")?r(3,this.t("tech_step_loose")):r(null,this.t("tech_ok"))}renderTechIssues(t){let e=t.floor.furniture.filter(a=>Tt.includes(a.type)).map(a=>({id:a.id,type:a.type})),n=this.pipeRules;if(!n)return y;let i=n.issues(t.pool,e);if(!i.length)return m`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let s=i.filter(a=>a.kind==="loose").length,r=[...s?[this.t("tech_issue_loose",{n:s})]:[],...i.filter(a=>a.kind==="port").map(a=>this.t("tech_issue_port",{name:this.poolNodeLabel(t.pool,a.node)})),...i.filter(a=>a.kind==="feed").map(a=>this.t("tech_issue_feed",{name:this.t(`feed_${a.node}`)}))];return m`<span class="fp3d-tech-issues">⚠ ${r.slice(0,4).join(" \xB7 ")}${r.length>4?" \u2026":""}</span>`}placeJoint(t,e,n,i){let s=t.gap-yo,r=Math.round(n*100)/100,a=Math.round(i*100)/100,l=ue(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c;if(e==="hole_wall"){let[d,u]=hn(t.frame,r,s);c={id:N("joint"),kind:"wall",x:d,z:u,y:Math.max(.05,a),nx:$(t.frame.n[0]),nz:$(t.frame.n[1]),depth:$(l)}}else if(e==="hole_floor"){let[d,u]=hn(t.frame,r,t.gap);c={id:N("joint"),kind:"floor",x:d,z:u,y:0}}else{let[d,u]=hn(t.frame,r,t.gap);c={id:N("joint"),kind:e,x:d,z:u,y:a}}this.changePool(t.pool.id,d=>d.joints=[...d.joints??[],c]),this._runMode=null}runOut(t,e){let n=this._runDraft,i=n&&this.runLast(n,t);if(!n||!i)return;if(e==="down")return void this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let s=bt(t.frame,[i[0],i[2]]),r=ue(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,a=ve(t.frame,s.s,i[1],-(r+.15));this.finishRun("",null,[[$(a[0]),i[1],$(a[2])]],i[1])}addFitting(t,e,n,i){let s=ht(this._doc,t.floor,t.pool);this.changePool(t.pool.id,r=>{let a=r.pipes?.find(c=>c.id===e),l=a&&$i(ie(a,s),n);!a||!l||(a.fittings=[...a.fittings??[],{id:N("fit"),kind:i,at:$(l.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,i){if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,this._runSel?.pipe!==n.id||!this.isEditor){this._runSel={pipe:n.id,pt:null};return}let{s,y:r}=e.pt(t),a=n.pieces.find(p=>p.k===i),l=Math.hypot(a.s1-a.s0,a.y1-a.y0)>0?Math.hypot(s-a.s0,r-a.y0)/Math.hypot(a.s1-a.s0,a.y1-a.y0):0,c=a.d0+(a.d1-a.d0)*Math.min(1,l),d=this._doc,u=ht(d,e.floor,e.pool),h=-1;this.changePool(e.pool.id,p=>{let f=p.pipes?.find(b=>b.id===n.id);f&&(Object.assign(f,se(f,u)),h=Math.max(0,Math.min(f.points.length,i+1-Io(f,u))),f.points.splice(h,0,hn(e.frame,s,c)),f.heights.splice(h,0,$(r)))}),!(h<0)&&(this._runSel={pipe:n.id,pt:h},this.runDrag={pipe:n.id,i:h,d:c,base:d,moved:!0},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}runPointDown(t,e,n,i){if(this._runMode||!this.isEditor)return;t.stopPropagation();let s=ht(this._doc,e.floor,e.pool);if(this.doubleTap(t,`runpt:${n}:${i}`)){this.changePool(e.pool.id,c=>{let d=c.pipes?.find(u=>u.id===n);d&&(Object.assign(d,se(d,s)),d.points.splice(i,1),d.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let r=e.pool.pool?.pipes?.find(c=>c.id===n),l=(r&&se(r,s))?.points[i];l&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:bt(e.frame,l).d,base:this._doc,moved:!1},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}runPointMove(t,e){let n=this.runDrag;if(!n)return;let{s:i,y:s}=e.pt(t);i=Math.round(i*100)/100,s=Math.round(s*100)/100;let r=ht(n.base,e.floor,e.pool),l=n.base.floors.flatMap(d=>d.outdoor).find(d=>d.id===e.pool.id)?.pool?.pipes?.find(d=>d.id===n.pipe);if(!l)return;let c=se(l,r);if(!t.altKey){let d=ie(c,r),u=Io(c,r);for(let h of[d[n.i+u-1],d[n.i+u+1]]){if(!h)continue;let p=bt(e.frame,[h[0],h[2]]);Math.abs(p.s-i)<.04&&(i=$(p.s)),Math.abs(h[1]-s)<.04&&(s=$(h[1]))}}n.moved=!0,this.change((d,u)=>{let h=u.outdoor.find(p=>p.id===e.pool.id)?.pool?.pipes?.find(p=>p.id===n.pipe);h&&(Object.assign(h,se(h,r)),h.points[n.i]=hn(e.frame,i,n.d),h.heights[n.i]=s)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t?.moved&&this.pushHistory(t.base)}endJointDrags(){for(let t of[this.fitDrag,this.jointDrag])t?.moved&&this.pushHistory(t.base);this.fitDrag=null,this.jointDrag=null}fittingDown(t,e,n,i){if(!(this._runMode||!this.isEditor)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},this.doubleTap(t,`fitting:${i}`)){this.changePool(e.pool.id,s=>{let r=s.pipes?.find(a=>a.id===n);r?.fittings&&(r.fittings=r.fittings.filter(a=>a.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId)}}jointDown(t,e,n){this._runMode||!this.isEditor||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:s}=e.pt(t),r=t.altKey?i:Math.round(i*100)/100,a=t.altKey?s:Math.round(s*100)/100;this.change((l,c)=>{let d=c.outdoor.find(u=>u.id===e.pool.id)?.pool?.joints?.find(u=>u.id===n.id);d&&([d.x,d.z]=hn(e.frame,r,n.d),d.kind!=="floor"&&(d.y=Math.max(d.kind==="wall"?.05:-1,$(a))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:s}=e.pt(t),r=e.runs.find(d=>d.id===n.pipe);if(!r)return;let a=null;for(let d of r.pieces){let[u,h]=[d.s1-d.s0,d.y1-d.y0],p=u*u+h*h,f=p>0?Math.max(0,Math.min(1,((i-d.s0)*u+(s-d.y0)*h)/p)):0,[b,g]=[d.s0+u*f,d.y0+h*f],_=Math.hypot(b-i,g-s);(!a||_<a.d)&&(a={p:ve(e.frame,b,g,d.d0+(d.d1-d.d0)*f),d:_})}if(!a)return;let l=ht(n.base,e.floor,e.pool),c=a.p;this.change((d,u)=>{let h=u.outdoor.find(b=>b.id===e.pool.id)?.pool?.pipes?.find(b=>b.id===n.pipe),p=h?.fittings?.find(b=>b.id===n.id),f=h&&$i(ie(h,l),c);p&&f&&(p.at=$(f.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{let i=n.pipes?.find(s=>s.id===e.pipe)?.fittings?.find(s=>s.id===e.id);i?.kind==="valve"&&(i.open=i.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(s=>s.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let i=[...n.pieces].sort((s,r)=>Math.hypot(r.s1-r.s0,r.y1-r.y0)-Math.hypot(s.s1-s.s0,s.y1-s.y0))[0];this.addFitting(t,n.id,ve(t.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),e),this._runMode=null}renderRuns(t,e,n){let i=this._runSel?.pipe,s=v=>{let x=bt(t.frame,[v[0],v[2]]);return`${e(x.s)},${n(v[1])}`},r=this._runDraft,a=r&&this.runLast(r,t),l=r?[...r.fromT||r.extend||r.from?[this.runLast({...r,pts:[]},t)]:[],...r.pts].filter(v=>!!v):[],c=this.runHover,d=ht(this._doc,t.floor,t.pool),u={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},h=[],p=(v,x,w="",E)=>{let k=d(v),M=k&&bt(t.frame,[k.x,k.z]);if(!(k&&M&&M.d>-.6&&M.d<1.6&&M.s>-.2&&M.s<t.L+.2))return[];let F=h.filter(C=>Math.hypot(C.s-M.s,C.y-k.y)<.3*this.wvScale).length;h.push({s:M.s,y:k.y});let L=F&&this.wvScale>.5?"":x;return[A`<g class="fp3d-wv-node ${w} ${E?"fp3d-wv-joint":""}" transform="translate(${e(M.s)} ${n(k.y)}) scale(${this.wvScale})" @pointerdown=${C=>E&&this.jointDown(C,E,M.d)}>
            <circle r="0.05" /><text y=${.11+F*.07}>${L}</text><title>${this.poolNodeLabel(t.pool,v)}</title>
          </g>`]},f=[...t.floor.furniture.flatMap(v=>{if(u[v.type]===void 0)return[];let x=tn(v.type);return x.length?x.flatMap(w=>p(`dev:${v.id}:${w}`,this.t(`port_${w}`))):p(`dev:${v.id}`,u[v.type])}),...(t.pool.pool?.joints??[]).flatMap(v=>v.kind==="wall"||v.kind==="floor"?p(`joint:${v.id}:inside`,this.jointLabel(t.pool,v.id),"fp3d-wv-hole-mark",v.id):p(`joint:${v.id}`,this.jointLabel(t.pool,v.id),"",v.id))],b=this.pipeRules,g=this._techMode&&b?b.flow({pipes:t.pool.pool?.pipes??[],ports:t.pool.pool?.ports??[],devices:this._doc.floors.flatMap(v=>v.furniture).filter(v=>Tt.includes(v.type)).map(v=>({id:v.id,type:v.type,open:v.valve_open!==!1,valve:v.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,_=v=>{let x=g?.get(v);if(!x?.active||!b)return"";let[w,E,k]=b.waterColor(x).map(M=>Math.round(M*255));return`stroke: rgb(${w}, ${E}, ${k}); stroke-opacity: 0.95`};return A`<g class="fp3d-wv-runs">
      ${f}
      ${t.runs.map(v=>A`<g class="fp3d-wv-run ${v.id===i?"fp3d-wv-run-sel":""} ${g&&!g.get(v.id)?.active?"fp3d-wv-dry":""}">
          ${v.pieces.map(x=>A`<line class=${x.y0<-.01&&x.y1<-.01?"fp3d-wv-under":""} style=${_(v.id)} x1=${e(x.s0)} y1=${n(x.y0)} x2=${e(x.s1)} y2=${n(x.y1)} @pointerdown=${w=>this.runPieceDown(w,t,v,x.k)} />`)}
          ${v.ends.map(x=>A`<circle class="fp3d-wv-end" cx=${e(x.s)} cy=${n(x.y)} r="0.035" />`)}
          ${v.fittings.map(x=>x.kind==="valve"?A`<g class="fp3d-wv-valve ${x.open?"":"fp3d-wv-shut"}" transform="translate(${e(x.s)} ${n(x.y)}) scale(${this.wvScale})" @pointerdown=${w=>this.fittingDown(w,t,v.id,x.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${x.open?.11:0} y2=${x.open?0:-.11} />
                </g>`:A`<rect class="fp3d-wv-sight" x=${e(x.s)-.06} y=${n(x.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${w=>this.fittingDown(w,t,v.id,x.id)} />`)}
          ${v.id===i?v.points.map(x=>A`<circle class="fp3d-wv-runpt ${this._runSel?.pt===x.i?"fp3d-on":""}" cx=${e(x.s)} cy=${n(x.y)} r="0.04" @pointerdown=${w=>this.runPointDown(w,t,v.id,x.i)} />`):y}
        </g>`)}
      ${l.length?A`<polyline class="fp3d-wv-draft" points=${l.map(s).join(" ")} />`:y}
      ${this.techStroke&&this.techStroke.length>1?A`<polyline class="fp3d-wv-draft fp3d-wv-stroke" points=${this.techStroke.map(v=>`${e(v.s)},${n(v.y)}`).join(" ")} />`:y}
      ${a&&c?A`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${s(a).split(",")[0]} y1=${s(a).split(",")[1]} x2=${e(c[0])} y2=${n(c[1])} />`:y}
    </g>`}renderRunFoot(t){let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return m`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return m`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return m`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?m`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:y}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,s=i&&t.pool.pool?.pipes?.find(u=>u.id===i.pipe);if(!i||!s)return y;let r=ht(this._doc,t.floor,t.pool),a=se(s,r),l=i.pt,c=this.isEditor,d=s.to?s.from?null:"from":"to";return m`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&a.heights?.[l]!==void 0?this.len(this.t("wall_run_pt"),a.heights[l]??0,u=>this.changePool(t.pool.id,h=>{let p=h.pipes?.find(f=>f.id===s.id);p&&(Object.assign(p,se(p,r)),p.heights[l]=Math.min(10,Math.max(-5,$(u))))}),.01):y}
      ${c?m`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${d?m`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let u={pool:t.pool.id,from:"",fromT:null,extend:{pipe:s.id,end:d},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...u,anchor:this.runLast(u,t)}}}>${this.t("wall_run_more")}</button>`:y}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,u=>{let h=u.pipes?.find(p=>p.id===s.id);h&&(Object.assign(h,se(h,r)),[h.from,h.to,h.points,h.heights]=[h.to,h.from,[...h.points].reverse(),[...h.heights??[]].reverse()],h.fittings=h.fittings?.map(p=>({...p,at:$(Math.max(0,vo(h,r)-p.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,u=>u.pipes=(u.pipes??[]).filter(h=>h.id!==s.id)),this._runSel=null}}>${this.t("delete")}</button>`:y}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}};var Br=class{poolDown(t,e,n,i){let s=this.floor;if(!s)return!1;let r=this.poolArea,a=e.closest("[data-pool-node]")?.getAttribute("data-pool-node")??null;if(this._jointPlace&&r)return this.isEditor&&this.placeJointPlan(r,this._jointPlace,n,e.closest("[data-pipe]")?.getAttribute("data-pipe")??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isEditor)return!0;if(!r){let h=s.outdoor.find(p=>p.type==="pool"&&p.points.length>=3&&U(n,p.points));return h&&(this.selectItem("outdoor",h.id),this._tool="pool",this._pipeMode=!0),!0}let u=e.closest("[data-pipe-end]")?.getAttribute("data-pipe-end");if(u&&!this._pipeDraft){let[h,p]=u.split("|"),f=r.pool?.pipes?.find(g=>g.id===h),b=f&&(p==="to"?f.points[f.points.length-1]:f.points[0]);b&&(this._pipeDraft={from:"",points:[],extend:{pipe:h,end:p,at:b}})}else if(a){let h=this._pipeDraft;h?h.extend?(this.extendPipe(r,h.extend,a,h.points),this._pipeDraft=null):a!==h.from&&(this.addPipe(r.id,h.from,a,h.points),this._pipeDraft=null):this._pipeDraft={from:a,points:[]}}else if(this._pipeDraft){let h=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[$(h[0]),$(h[1])]]}}return!0}let l=u=>[u.slice(0,u.lastIndexOf(":")),Number(u.slice(u.lastIndexOf(":")+1))];if(r&&this.isEditor){let u=e.closest("[data-pipe-pt]")?.getAttribute("data-pipe-pt");if(u){let[p,f]=l(u);return this.doubleTap(t,`pipept:${u}`)?this.change((b,g)=>{let _=g.outdoor.find(v=>v.id===r.id)?.pool?.pipes?.find(v=>v.id===p);_?.points.splice(f,1),_?.heights?.splice(f,1)}):this.drag={kind:"pipept",pool:r.id,pipe:p,index:f,base:this._doc,moved:!1},!0}let h=e.closest("[data-pipe-seg]")?.getAttribute("data-pipe-seg");if(h){let[p,f]=l(h),b=this.snap(n,void 0,t.altKey);return this.change((g,_)=>{let v=_.outdoor.find(x=>x.id===r.id)?.pool?.pipes?.find(x=>x.id===p);v?.points.splice(f,0,[$(b[0]),$(b[1])]),v?.heights?.splice(f,0,v.heights[f-1]??v.heights[f]??null)}),this._pipeId=p,this.drag={kind:"pipept",pool:r.id,pipe:p,index:f,base:this._doc,moved:!1},!0}}let c=e.closest("[data-pipe]")?.getAttribute("data-pipe");if(c)return this._pipeId=c,!0;if(a&&r&&this.isEditor)return a.startsWith("port:")?this.drag={kind:"poolport",pool:r.id,id:a.slice(5),base:this._doc,moved:!1}:a.startsWith("joint:")?this.drag={kind:"pooljoint",pool:r.id,id:ct(a).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:a.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isEditor){let u=e.closest("[data-out-box]")?.getAttribute("data-out-box");if(u){let[p,f]=l(u);return this.drag={kind:"outbox",id:p,corner:f,base:this._doc,moved:!1},!0}let h=e.closest("[data-out-vertex]")?.getAttribute("data-out-vertex");if(h){let[p,f]=l(h);return this.drag={kind:"outvertex",id:p,index:f,base:this._doc,moved:!1},!0}}let d=e.closest("[data-outdoor]")?this.outdoorAt(n)??e.closest("[data-outdoor]").getAttribute("data-outdoor"):null;return d&&s.outdoor.some(u=>u.id===d&&u.type==="pool")?(this.selectItem("outdoor",d),this._pipeId=null,this.isEditor&&(this.drag={kind:"outdoor",id:d,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,i)=>{let s=i.outdoor.find(r=>r.id===t);s&&(s.pool??={},e(s.pool,s))})}extendPipe(t,e,n,i){let s=this.floor;if(!s)return;let r=ht(this._doc,s,t);n=this.jointEnd(t,n,i[i.length-1]),this.changePool(t.id,a=>{let l=a.pipes?.find(d=>d.id===e.pipe);if(!l)return;Object.assign(l,se(l,r));let c=l.heights??[];if(e.end==="to"){let d=c[c.length-1]??l.height??null;l.points=[...l.points,...i],l.heights=[...c,...i.map(()=>d)],l.to=n}else{let d=vo(l,r),u=c[0]??l.height??null;l.points=[...[...i].reverse(),...l.points],l.heights=[...i.map(()=>u),...c],l.from=n;let h=vo(l,r)-d;l.fittings=l.fittings?.map(p=>({...p,at:$(p.at+h)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,i=[]){let{kind:s,id:r,port:a}=ct(e),l=s==="joint"&&!a?t.pool?.joints?.find(u=>u.id===r):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let u=this._doc.floors.find(b=>b.outdoor.some(g=>g.id===t.id)),h=u&&ht(this._doc,u,t),[p,f]=[h?.(`joint:${r}:inside`),h?.(`joint:${r}:outside`)];return!n||!p||!f?`joint:${r}:inside`:`joint:${r}:${Math.hypot(n[0]-p.x,n[1]-p.z)<=Math.hypot(n[0]-f.x,n[1]-f.z)?"inside":"outside"}`}let c=new Set([...(t.pool?.pipes??[]).flatMap(u=>[u.from,u.to]),...i]),d=qn(l.kind).find(u=>!c.has(`joint:${r}:${u}`));return d?`joint:${r}:${d}`:e}addPipe(t,e,n,i){let s=this.floor;if(!s)return;let r=s.outdoor.find(l=>l.id===t);r&&(e=this.jointEnd(r,e,i[0]),n=this.jointEnd(r,n,i[i.length-1],[e]));let a={id:N("pipe"),from:e,to:n,floor_id:s.id,points:i};this.changePool(t,l=>l.pipes=[...l.pipes??[],a]),this._pipeId=a.id}addPoolPort(t){let e=this.poolArea;if(!e||!this.isEditor)return;let n=e.pool?.ports??[],i=e.points.length,s=h=>{let p=e.points[h%i],f=e.points[(h+1)%i];return[(p[0]+f[0])/2,(p[1]+f[1])/2]},[r,a]=Gt(e.points),l=this._doc.floors.flatMap(h=>h.furniture).find(h=>h.type==="pool_filter"||h.type==="pool_pump"),c=n.filter(h=>h.kind==="inlet").length,d=t==="skimmer"?Fo(e.points,s(0)):t==="inlet"?Fo(e.points,s(Math.floor(i/2)+c*Math.max(1,Math.floor(i/8)))):t==="drain"?[r,a]:l?[l.x+.8,l.z]:[r,a+3],u={id:N("port"),kind:t,x:$(d[0]),z:$(d[1])};this.changePool(e.id,h=>h.ports=[...n,u])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{for(let n of e.floors){n.furniture=n.furniture.filter(i=>i.id!==t);for(let i of n.outdoor)i.pool?.pipes&&(i.pool.pipes=i.pool.pipes.filter(s=>s.from!==`dev:${t}`&&s.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==e),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${e}`&&i.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isEditor||this.change(n=>{let i=n.floors.flatMap(s=>s.furniture).find(s=>s.id===t);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let i=n.floors.flatMap(s=>s.furniture).find(s=>s.id===t);i&&Object.assign(i,e)})}portText(t){let{kind:e,port:n}=ct(t),i={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){let{kind:n,id:i}=ct(e);if(n==="joint"){let s=t.pool?.joints?.find(r=>r.id===i);return s?qn(s.kind).map(r=>`${e}:${r}`):[]}if(n==="dev"){let s=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.id===i),r=s?tn(s.type):[];return r.length?r.map(a=>`${e}:${a}`):[e]}return[e]}partStatus(t,e){let n=t.pool?.pipes??[],i=this.partPorts(t,e);return[i.filter(s=>n.some(r=>r.from===s||r.to===s)).length,i.length]}cardConnect(t,e,n,i){let s=this._doc.floors.find(u=>u.outdoor.some(h=>h.id===t.id));if(!s||!n)return;let r=ht(this._doc,s,t),a=t.pool?.ports??[],l=u=>{let{kind:h,id:p,port:f}=ct(u);return h==="port"?ar(a.find(b=>b.id===p)?.kind??"inlet"):h==="dev"?Jf(f):null},c=this.jointEnd(t,n,void 0,[e]),d=Yn({from:e,vias:i,to:[c],floorId:s.id},r,t.pool?.joints??[],l,u=>N(u));this.changePool(t.id,u=>{u.joints=[...u.joints??[],...d.joints],u.pipes=[...u.pipes??[],...d.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(i=>!e.pipes.includes(i.id)))}cardReroute(t,e){let n=t.pool?.pipes??[],i=n.find(f=>f.id===e.pipes[0]);if(!i||!e.other)return;let s=i.from===e.start,r=[...e.holes.map(f=>({kind:"hole",joint:f.joint,dir:f.dir})),...e.fittings.map(f=>({kind:f}))],a=this._doc.floors.find(f=>f.outdoor.some(b=>b.id===t.id));if(!a)return;let l={...t,pool:{...t.pool,pipes:n.filter(f=>!e.pipes.includes(f.id))}},c=ht(this._doc,a,l),d=s?e.start:e.other,u=s?e.other:e.start,h=s?r:[...e.holes].reverse().map(f=>({kind:"hole",joint:f.joint,dir:f.dir==="in"?"out":"in"})).concat(e.fittings.map(f=>({kind:f}))),p=Yn({from:d,vias:h,to:[u],floorId:a.id},c,t.pool?.joints??[],()=>null,f=>N(f));this.changePool(t.id,f=>{f.pipes=[...(f.pipes??[]).filter(b=>!e.pipes.includes(b.id)),...p.pipes]})}renderPartCard(){let t=this._card,e=t?this._doc.floors.flatMap(M=>M.outdoor).find(M=>M.id===t.pool):void 0;if(!t||!e)return y;let n=this.isEditor,{kind:i,id:s}=ct(t.part),r=i==="joint"?e.pool?.joints?.find(M=>M.id===s):void 0,a=i==="dev"?this._doc.floors.flatMap(M=>M.furniture).find(M=>M.id===s):void 0,l=i==="port"?e.pool?.ports?.find(M=>M.id===s):void 0;if(!r&&!a&&!l)return y;let c=e.pool?.pipes??[],d=e.pool?.joints??[],u=this.partPorts(e,t.part),h=this.poolEnds(e).filter(M=>we(M.node)!==t.part&&!M.used),p=d.filter(M=>M.kind==="wall"||M.kind==="floor"),f=M=>this.poolNodeLabel(e,M),b=M=>ct(M).port?this.portText(M):this.t("card_port"),g=M=>M.kind==="hole"?this.t(M.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,M.joint)}):this.t(M.kind==="valve"?"wall_run_valve":"wall_run_sight"),_=()=>{this._card=null,this._cardJoin=null},v=()=>r?[r.x,r.z]:a?[a.x,a.z]:l?[l.x,l.z]:null,x=u.map(M=>{let F=em(c,d,M),L=this._cardJoin?.port===M?this._cardJoin:null;return m`<div class="fp3d-pc-row ${F.length?"fp3d-on":""}">
        <b>${b(M)}</b>
        <div class="fp3d-pc-conns">
          ${F.map(C=>m`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...C.holes.map(S=>g({kind:"hole",joint:S.joint,dir:S.dir})),...C.fittings.map(S=>g({kind:S}))].map(S=>m`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${S}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${C.other?m`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,we(C.other))}>${f(C.other)}</button>`:m`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?m`<span class="fp3d-pc-tools">
                    ${C.other?m`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,C)}>${this.t("card_reroute")}</button>`:y}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,C)}>${this.t("card_disconnect")}</button>
                  </span>`:y}
            </div>`)}
          ${n&&(!F.length||u.length===1)?L?this.renderJoinPicker(e,M,L,h,p,g):m`<button class="fp3d-btn ${F.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:M,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:y}
        </div>
      </div>`}),[w,E]=this.partStatus(e,t.part),k=v();return m`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${M=>M.target===M.currentTarget&&_()}>
      <div class="fp3d-pc" role="dialog" aria-modal="true" tabindex="0" ${cn()} @keydown=${M=>M.key==="Escape"&&_()}>
        <div class="fp3d-wv-head">
          ${r&&n?m`<input
                class="fp3d-pc-name"
                .value=${r.name??""}
                placeholder=${this.jointLabel(e,r.id)}
                title=${this.t("joint_name")}
                @change=${M=>{let F=M.target.value.trim().slice(0,60);this.changePool(e.id,L=>{let C=L.joints?.find(S=>S.id===r.id);C&&(C.name=F||null)})}}
              />`:m`<b class="fp3d-pc-title">${f(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:w,b:E})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${_}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,u)}
          <div class="fp3d-pc-rows">${x}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${k?m`<button class="fp3d-btn" @click=${()=>{_(),this._wallView=null,this._tool="pool",this.showPoint(k[0],k[1])}}>${this.t("card_show_plan")}</button>`:y}
          ${k&&!l?m`<button class="fp3d-btn" @click=${()=>{_(),this.pickWall(k)}}>▦ ${this.t("card_show_wall")}</button>`:y}
          <span class="fp3d-wv-grow"></span>
          ${n?m`<button class="fp3d-btn fp3d-danger" @click=${()=>{_(),a?this.deletePoolDevice(a.id):l?this.deletePoolPort(e.id,l.id):r&&this.changePool(e.id,M=>{M.joints=(M.joints??[]).filter(F=>F.id!==r.id),M.pipes=(M.pipes??[]).filter(F=>we(F.from)!==t.part&&we(F.to)!==t.part)})}}>${this.t("delete")}</button>`:y}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,i,s,r){let a=h=>{let{kind:p,id:f}=ct(h);if(p==="port")return"pool";if(p==="dev")return"tech";let b=t.pool?.joints?.find(g=>g.id===f);return b?.kind==="wall"||b?.kind==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(h=>({g:h,items:i.filter(p=>a(p.node)===h)})).filter(h=>h.items.length),c=h=>this._cardJoin={...n,...h},d=h=>c({vias:[...n.vias,h]}),u=new Set(n.vias.flatMap(h=>h.kind==="hole"?[h.joint]:[]));return m`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((h,p)=>m`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>c({vias:n.vias.filter((f,b)=>b!==p)})}>${r(h)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?m`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>c({to:""})}>${this.poolNodeLabel(t,n.to)} <i>✕</i></button>`:m`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?y:m`<div class="fp3d-pc-steps">
            ${s.some(h=>!u.has(h.id))?m`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${s.filter(h=>!u.has(h.id)).map(h=>m`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(t,h.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:h.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:h.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:y}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:h,items:p})=>m`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${h}`)}</span>
                <div class="fp3d-pc-picks">${p.map(f=>m`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>c({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){let i=t.pool?.pipes??[],s=f=>i.some(b=>b.from===f||b.to===f),{kind:r,id:a}=ct(e),l=r==="joint"?t.pool?.joints?.find(f=>f.id===a):void 0,c=r==="dev"?this._doc.floors.flatMap(f=>f.furniture).find(f=>f.id===a):void 0,d={},u=y,h=l?.kind??(c?c.type:"port");h==="tee"?(Object.assign(d,{in:[20,60],out1:[180,60],out2:[100,130]}),u=A`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):h==="y"?(Object.assign(d,{in:[20,70],out1:[180,25],out2:[180,115]}),u=A`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):h==="wall"||h==="floor"?(Object.assign(d,{outside:[20,70],inside:[180,70]}),u=A`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):h==="pool_pump"?(Object.assign(d,{suction:[20,95],pressure:[110,10]}),u=A`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):h==="pool_filter"?(Object.assign(d,{pump:[20,40],return:[180,40],waste:[100,4]}),u=A`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):h==="pool_heat_pump"?(Object.assign(d,{in:[180,95],out:[180,45]}),u=A`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(d[""]=[180,70],u=A`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let p=h==="pool_filter"?[100,41]:h==="pool_pump"?[100,85]:[100,70];return m`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(f=>{let b=ct(f).port??"",g=d[b]??d[""]??[180,70],_=s(f);return A`<g class="fp3d-pc-stub ${_?"fp3d-on":""}" @click=${()=>this.isEditor&&!_&&(this._cardJoin={port:f,to:"",vias:[]})}>
          <line x1=${p[0]} y1=${p[1]} x2=${g[0]} y2=${g[1]} />
          <circle cx=${g[0]} cy=${g[1]} r="7" />
          <title>${b?this.portText(f):""}</title>
        </g>`})}
      ${u}
      ${n.map(f=>{let b=ct(f).port,g=d[b??""]??[180,70];return b?A`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,g[0]))} y=${g[1]<70?g[1]+20:g[1]-12}>${this.portText(f)}</text>`:y})}
    </svg>`}jointLabel(t,e){let n=t.pool?.joints??[],i=n.find(a=>a.id===e);if(!i)return this.t("pool_loose_end");let s=a=>a==="wall"||a==="floor"?"hole":a??"tee";if(i.name?.trim())return i.name.trim();let r=n.filter(a=>s(a.kind)===s(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:r.indexOf(i)+1})}`}poolEnds(t){let e=t.pool?.pipes??[],n=s=>e.some(r=>r.from===s||r.to===s),i=[];for(let s of t.pool?.ports??[])i.push({node:`port:${s.id}`,label:this.poolNodeLabel(t,`port:${s.id}`),used:!1});for(let s of this._doc.floors.flatMap(r=>r.furniture).filter(r=>Tt.includes(r.type)&&r.type!=="pool_valve")){let r=tn(s.type);for(let a of r.length?r.map(l=>`dev:${s.id}:${l}`):[`dev:${s.id}`])i.push({node:a,label:this.poolNodeLabel(t,a),used:r.length>0&&n(a)})}for(let s of t.pool?.joints??[])for(let r of qn(s.kind)){let a=`joint:${s.id}:${r}`;i.push({node:a,label:this.poolNodeLabel(t,a),used:n(a)})}return i}placeJointPlan(t,e,n,i){let s=this.floor;if(!s)return;let r=ht(this._doc,s,t),a=i?t.pool?.pipes?.find(d=>d.id===i):void 0;if(a){let d=ie(a,r),u=null;for(let p=1;p<d.length;p++){let[f,b]=[d[p-1],d[p]],[g,_]=[b[0]-f[0],b[2]-f[2]],v=g*g+_*_,x=v>0?Math.max(0,Math.min(1,((n[0]-f[0])*g+(n[1]-f[2])*_)/v)):0,w=[f[0]+g*x,f[1]+(b[1]-f[1])*x,f[2]+_*x],E=Math.hypot(w[0]-n[0],w[2]-n[1]);(!u||E<u.d)&&(u={p:w,d:E})}let h=u&&Ro(a,r,u.p,N("joint"),N("pipe"));if(h){this.changePool(t.id,p=>{p.joints=[...p.joints??[],{...h.joint,kind:e}],p.pipes=(p.pipes??[]).flatMap(f=>f.id===a.id?[{...h.first,to:`joint:${h.joint.id}:in`},{...h.second,from:`joint:${h.joint.id}:out1`}]:[f])});return}}let l=s.rooms.some(d=>d.points.length>=3&&U(n,d.points)),c=this.snap(n);this.changePool(t.id,d=>d.joints=[...d.joints??[],{id:N("joint"),kind:e,x:$(c[0]),z:$(c[1]),y:l?.5:-.3}])}poolNodePos(t,e){if(!e)return null;let n=this._doc.floors.find(s=>s.outdoor.some(r=>r.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let s=n&&ht(this._doc,n,t)(e);return s?[s.x,s.z]:null}if(e.startsWith("port:")){let s=t.pool?.ports?.find(r=>r.id===e.slice(5));return s?[s.x,s.z]:null}let i=this._doc.floors.flatMap(s=>s.furniture).find(s=>s.id===e.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(t,e){let{kind:n,id:i,port:s}=ct(e);if(!e)return this.t("pool_loose_end");if(s||n==="joint"){let c=n==="joint"?this.jointLabel(t,i):this.poolNodeLabel(t,`${n}:${i}`);return s?`${c} \xB7 ${this.portText(e)}`:c}if(e.startsWith("port:")){let c=t.pool?.ports??[],d=c.find(h=>h.id===e.slice(5));if(!d)return"?";let u=c.filter(h=>h.kind===d.kind);return`${this.t(`pool_port_${d.kind}`)}${u.length>1?` ${u.indexOf(d)+1}`:""}`}let r=this._doc.floors.flatMap(c=>c.furniture).filter(c=>Tt.includes(c.type)),a=r.find(c=>c.id===e.slice(4));if(!a)return"?";let l=r.filter(c=>c.type===a.type);return`${a.name||this.t(`furn_${a.type}`)}${l.length>1&&!a.name?` ${l.indexOf(a)+1}`:""}`}renderPoolPlan(t){let e=this.poolArea,n=t.furniture.filter(p=>Tt.includes(p.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},s=e?(e.pool?.pipes??[]).filter(p=>p.floor_id===t.id):[],r=s.map(p=>{let f=this.poolNodePos(e,p.from),b=this.poolNodePos(e,p.to);if((!f||!b)&&!p.heights)return y;let g=f?1:0,_=[...f?[f]:[],...p.points,...b?[b]:[]].map(C=>this.toScreen(C));if(_.length<2)return y;let v=p.id===this._pipeId,x=0;for(let C=1;C<_.length-1;C++)Math.hypot(_[C+1][0]-_[C][0],_[C+1][1]-_[C][1])>Math.hypot(_[x+1][0]-_[x][0],_[x+1][1]-_[x][1])&&(x=C);let[w,E]=_[x],[k,M]=_[x+1],F=Math.atan2(M-E,k-w)*180/Math.PI,L=_.map(C=>C.join(",")).join(" ");return A`<g data-pipe=${p.id}>
        <polyline class="fp3d-pipe-hit" points=${L} />
        <polyline class="fp3d-pipe ${v?"fp3d-pipe-sel":""}" points=${L} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(w+k)/2} ${(E+M)/2}) rotate(${F})`} />
        ${v&&this.isEditor?A`${_.slice(0,-1).map((C,S)=>A`<line class="fp3d-pipe-seg" data-pipe-seg=${`${p.id}:${S+1-g}`} x1=${C[0]} y1=${C[1]} x2=${_[S+1][0]} y2=${_[S+1][1]} />`)}
              ${p.points.map((C,S)=>{let[T,R]=this.toScreen(C);return A`<g class="fp3d-vertex" data-pipe-pt=${`${p.id}:${S}`}><circle cx=${T} cy=${R} r="14" class="fp3d-hit" /><circle cx=${T} cy=${R} r="5" /></g>`})}`:y}
      </g>`}),a=(p,f,b,g,_)=>{let[v,x]=this.toScreen(f);return A`<g class="fp3d-pool-node ${g}" data-pool-node=${p}><title>${_}</title><circle cx=${v} cy=${x} r="16" class="fp3d-hit" /><circle cx=${v} cy=${x} r="10" /><text x=${v} y=${x}>${b}</text></g>`},l=e?(e.pool?.ports??[]).map(p=>a(`port:${p.id}`,[p.x,p.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[p.kind],`fp3d-pool-port-${p.kind}`,this.poolNodeLabel(e,`port:${p.id}`))):[],c=n.map(p=>a(`dev:${p.id}`,[p.x,p.z],p.type==="pool_valve"?p.valve_open===!1?"\u2715":"":i[p.type],`fp3d-pool-dev ${p.type==="pool_valve"&&p.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${p.id}`):p.type)),d=y;if(e&&this._pipeDraft){let p=this._pipeDraft.extend?.at??this.poolNodePos(e,this._pipeDraft.from);if(p){let f=[p,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(b=>this.toScreen(b).join(",")).join(" ");d=A`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${f} />`}}let u=e?(e.pool?.joints??[]).map(p=>a(`joint:${p.id}`,[p.x,p.z],p.kind==="wall"||p.kind==="floor"?"\u25CE":p.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,p.id))):[],h=s.flatMap(p=>p.heights&&p.points.length?["from","to"].filter(f=>!p[f]).map(f=>{let[b,g]=this.toScreen(f==="to"?p.points[p.points.length-1]:p.points[0]);return A`<g class="fp3d-pipe-end" data-pipe-end=${`${p.id}|${f}`}><circle cx=${b} cy=${g} r="14" class="fp3d-hit" /><circle cx=${b} cy=${g} r="6" /></g>`}):[]);return A`<g class="fp3d-pool-plan">${r}${d}${u}${h}${l}${c}</g>`}renderPoolPanel(t){let e=t?.outdoor.filter(i=>i.type==="pool")??[],n=this.poolArea;return n?m`${e.length>1?m`<section>
            <div class="fp3d-seg">${e.map((i,s)=>m`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${s+1}</button>`)}</div>
          </section>`:y}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:m`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?m`<div class="fp3d-actions">${e.map((i,s)=>m`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${e.length>1?s+1:""}</button>`)}</div>`:y}
      </section>`}renderPoolTech(t){if(!this.pipeRules)return y;let e=this.isEditor,n=t.pool?.ports??[],i=t.pool?.pipes??[],s=this._doc.floors.flatMap(a=>a.furniture).filter(a=>Tt.includes(a.type)),r=i.find(a=>a.id===this._pipeId);return m`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!e} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(a=>m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolPort(a)}>+ ${this.t(`pool_port_${a}`)}</button>`)}
        </div>
        ${n.map(a=>m`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`port:${a.id}`)}>${this.poolNodeLabel(t,`port:${a.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(t,`port:${a.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${a.kind==="inlet"||a.kind==="skimmer"?m`<label class="fp3d-pool-depth" title=${Zt(this.t("pool_port_depth_hint"),this.unit)}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(a.depth??(a.kind==="inlet"?.3:0))} ?disabled=${!e} @change=${l=>{let c=Number(l.target.value.replace(",","."));Number.isFinite(c)&&this.change((d,u)=>{let h=u.outdoor.find(p=>p.id===t.id)?.pool?.ports?.find(p=>p.id===a.id);h&&(h.depth=Math.min(3,Math.max(0,$(c))))})}} />m</label
                >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolPort(t.id,a.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${Tt.filter(a=>a!=="pool_valve").map(a=>m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolDevice(a)}>+ ${this.t(`furn_${a}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${s.map(a=>m`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`dev:${a.id}`)}>${this.poolNodeLabel(t,`dev:${a.id}`)}</button>
            <span class="fp3d-ports">${tn(a.type).map(l=>m`<i class=${i.some(c=>c.from===`dev:${a.id}:${l}`||c.to===`dev:${a.id}:${l}`)?"fp3d-on":""}>${this.t(`port_${l}`)}</i>`)}</span>
            ${a.type==="pool_filter"?m`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${l=>this.setPoolDevice(a.id,{variant:l.target.value==="top6"?null:l.target.value})}>
                    ${Yf.map(l=>m`<option value=${l} ?selected=${(a.variant??"top6")===l}>${this.t(`valve_${l}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${l=>this.setPoolDevice(a.id,{valve_position:l.target.value})}>
                  ${Gd.map(l=>m`<option value=${l} ?selected=${(a.valve_position??"filter")===l}>${this.t(`valve_${l}`)}</option>`)}
                </select>`:a.type==="pool_heat_pump"?m`<select ?disabled=${!e} title=${this.t("hp_ports")} @change=${l=>this.setPoolDevice(a.id,{variant:l.target.value==="right"?null:l.target.value})}>
                    ${["right","left","back"].map(l=>m`<option value=${l} ?selected=${(a.variant??"right")===l}>${this.t("hp_ports")}: ${this.t(`hp_side_${l}`)}</option>`)}
                  </select>`:a.type==="pool_valve"?m`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${a.valve_open!==!1} ?disabled=${!e} @change=${l=>this.setPoolDevice(a.id,{valve_open:l.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(a.id)}>✕</button>
          </div>`)}
        ${(t.pool?.joints??[]).map(a=>m`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${a.id}`)}>${this.jointLabel(t,a.id)}</button>
            <span class="fp3d-ports">${qn(a.kind).map(l=>{let c=`joint:${a.id}:${l}`,d=i.some(u=>u.from===c||u.to===c||(a.kind??"tee")!=="wall"&&(a.kind??"tee")!=="floor"&&we(u.from)===`joint:${a.id}`&&!ct(u.from).port&&l==="in");return m`<i class=${d?"fp3d-on":""} title=${this.portText(c)}>${this.portText(c)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,l=>{l.joints=(l.joints??[]).filter(c=>c.id!==a.id),l.pipes=(l.pipes??[]).filter(c=>we(c.from)!==`joint:${a.id}`&&we(c.to)!==`joint:${a.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!e} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(a=>m`<div class="fp3d-pool-row ${a.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=a.id}>${this.poolNodeLabel(t,a.from)} → ${this.poolNodeLabel(t,a.to)}</button>
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,l=>{let c=l.pipes?.find(d=>d.id===a.id);c&&([c.from,c.to,c.points]=[c.to,c.from,[...c.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,l=>l.pipes=(l.pipes??[]).filter(c=>c.id!==a.id))}>✕</button>
          </div>`)}
        ${r?m`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),r.height??.3,a=>this.changePool(t.id,l=>{let c=l.pipes?.find(d=>d.id===r.id);c&&(c.height=Math.min(10,Math.max(-5,$(a))))}),.05)}
            </div>`:y}
      </section>`}renderPoolShape(t){let e=this.isEditor,n=ft(t.points),i=t.pool_shape,s=(l,c,d,u)=>i&&this.updateOutdoor({points:li(i,l,c,d,u)}),r=(n.x0+n.x1)/2,a=(n.z0+n.z1)/2;return m`${i==="round"?m`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let c=Math.max(.5,l)/2;s(r-c,a-c,r+c,a+c)},.01,1)}`:i==="oval"?m`${this.len(this.t("width"),n.x1-n.x0,l=>s(r-Math.max(1,l)/2,n.z0,r+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>s(n.x0,a-Math.max(1,l)/2,n.x1,a+Math.max(1,l)/2),.01,1)}`:y}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),ss(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,$(l)))}),.05,.4):y}
      ${this.len(this.t("pool_depth"),ga(t),l=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,$(l)))}),.05,.3)}
      ${t.above?y:this.len(this.t("pool_rim"),t.rim??.06,l=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,$(l)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!t.above&&this.floor&&!ba(this.floor,t)?m`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:y}`}};function ab(o,t,e,n,i=!1){let s=r=>{let a=r?.value.trim();!r||!a||(r.value="",n([...o,a]))};return m`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${e.label}>
    ${e.label}
    ${o.map((r,a)=>m`<div class="fp3d-lines-row">
        <span>${r}</span>
        <button type="button" title=${e.remove} aria-label=${`${e.remove}: ${r}`} ?disabled=${t} @click=${()=>n(o.filter((l,c)=>c!==a))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${e.placeholder}
        aria-label=${e.placeholder}
        ?disabled=${t}
        @keydown=${r=>{r.key==="Enter"&&(r.preventDefault(),s(r.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${t} @click=${r=>s(r.currentTarget.previousElementSibling)}>
        ${e.add}
      </button>
    </div>
  </div>`}var Wo=class extends ye{constructor(t){if(super(t),this.it=y,t.type!==Ut.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===Nt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Wo.directiveName="unsafeHTML",Wo.resultType=1;var lb=ce(Wo);var Mc=class extends ye{constructor(t){if(super(t),t.type!==Ut.PROPERTY)throw new Error("typedValue() belongs on .value")}render(t,e){return e}update(t,[e,n]){let i=t.element;return!e.typing(i)&&i.value!==n&&(i.value=n),Nt}},Ec=ce(Mc);function Mv(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var Sc={walls(o,t,e){let n=o.floors.find(s=>s.id===t),i=n?.rooms.find(s=>s.id===e);return!n||!i||i.points.length<3?[]:i.points.map((s,r)=>{let a=Qe(i,r),l=ue(n,i.id,a.a,a.b),c=[...Je(a,n,i).map(d=>[d.s0,d.s1]),...Dn(a,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:r,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:c}})},onWall(o,t,e){return de(Mv(o),t,e)},freeSpot(o,t,e=.1){let n=s=>s>=e&&s+t<=o.length-e&&!o.taken.some(([r,a])=>s<a+.05&&s+t>r-.05),i=o.length/2-t/2;for(let s=0;s<=o.length;s+=.05){if(n(i-s))return Math.round((i-s)*100)/100;if(n(i+s))return Math.round((i+s)*100)/100}return null},nodeAt(o,t,e){let n=o.floors.find(a=>a.id===t),i=n?.outdoor.find(a=>a.id===e);if(!n||!i)return()=>null;let s=ht(o,n,i),r=i.pool??{};return a=>{let{kind:l,id:c,port:d}=ct(a),u=l==="joint"?(r.joints??[]).find(p=>p.id===c):void 0;if(u)return _n(u,d);let h=l==="port"?(r.ports??[]).find(p=>p.id===c):void 0;return h?s(a)??{x:h.x,y:.02,z:h.z}:s(a)}},connect(o,t,e,n,i,s){let r=o.floors.find(l=>l.id===t),a=r?.outdoor.find(l=>l.id===e);return!r||!a?{pipes:[],joints:[]}:Yn({...n,floorId:t},Sc.nodeAt(o,t,e),a.pool?.joints??[],i,s)}};var Kr=class{editorHost(){let t=this.hass;return{api:1,hass:()=>t,building:()=>this._doc,language:()=>t.language||"en",devices:()=>[],findDevice:()=>null,openings:()=>[],energy:()=>null,consumers:()=>[],canEdit:()=>this.isEditor,updateBuilding:e=>this.change(n=>e(n)),callService:(e,n,i)=>(bs(t,e,n,i??{},s=>this.t("service_failed",{error:s})),Promise.resolve()),newId:e=>N(e),refresh:()=>{this._moduleFieldMemo=null,this.requestUpdate()},plan:Sc}}memoFields(t,e){let n=this._moduleFieldMemo,i=this.hass;if(n&&n.item===t&&n.doc===this._doc&&n.entities===i.entities&&n.lang===i.language)return n.fields;let s=e();return this._moduleFieldMemo={item:t,doc:this._doc,entities:i.entities,lang:i.language,fields:s},s}renderModuleFields(t){return this.hass?this.renderFields(this.memoFields(t,()=>Du(this.editorHost(),t))):y}renderModuleRoomFields(t){let e=this.floor;return!this.hass||!e?y:this.renderFields(this.memoFields(t,()=>Wu(this.editorHost(),t,e)),!1)}renderModuleFurnitureFields(t){return this.hass?this.renderFields(this.memoFields(t,()=>Vu(this.editorHost(),t))):y}renderFields(t,e=!0){if(!t.length)return y;let n=this.isEditor,i=s=>{switch(s.kind){case"heading":return m`<h3>${s.text}</h3>`;case"text":return m`<p class="fp3d-sub fp3d-wide">${s.text}</p>`;case"entity":return this.entitySelect(s.label,s.value,s.auto,this.entityOptionsFor(s.filter),r=>s.set(r));case"select":return m`<label class="fp3d-field fp3d-wide"
            >${s.label}
            <select ?disabled=${!n} @change=${r=>s.set(r.target.value)}>
              ${s.options.map(r=>m`<option value=${r.id} ?selected=${r.id===s.value}>${r.label}</option>`)}
            </select></label
          >`;case"check":return m`<label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${s.value} ?disabled=${!n} @change=${r=>s.set(r.target.checked)} /> ${s.label}</label>`;case"button":return m`<button class="fp3d-btn ${s.primary?"fp3d-primary":""} fp3d-wide" ?disabled=${!n} title=${s.title??""} @click=${()=>s.onTap()}>${s.label}</button>`;case"lines":return ab(s.value,!n,{label:s.label,placeholder:s.placeholder??this.t("lines_new"),add:this.t("lines_add"),remove:this.t("delete")},r=>s.set(r),!0)}};return e?m`<section>
      <div class="fp3d-form fp3d-links">${t.map(i)}</div>
    </section>`:t.map(i)}m(t,e=2){return rd(t,this.unit,n=>Ht(this.hass,n,e))}area(t){return ad(Math.abs(t),this.unit,e=>Ht(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?Sn(t):String($(t))}readLen(t){if(this.unit==="imperial")return ra(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,i=.01,s){if(this.unit!=="imperial")return this.num(t,e,n,i,s);let r=this.typedEvents(a=>{let l=ra(a,"imperial");l!==null&&Math.abs(l-e)>1e-9&&n(s!==void 0?Math.max(s,l):l)});return m`<label class="fp3d-field"
      >${Zt(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        placeholder="8' 2&quot;"
        title=${this.t("units_formats")}
        .value=${Ec(this.typed,Sn(e))}
        ?disabled=${!this.isEditor}
        @focus=${r.focus}
        @input=${r.input}
        @change=${r.change}
        @keydown=${r.keydown}
        @blur=${r.blur}
    /></label>`}typedEvents(t){let e=i=>i.target,n=(i,s)=>{let r=[this._furnitureId?this.selection().join(","):"",this._deviceId,this._openingId,this._wallId,this._outdoorId,this._roomId,this._vertex];this.mergeKey=["typed",s,...r].join("|"),this.mergeWithin=1/0;try{t(i)}finally{this.mergeKey=null,this.mergeWithin=void 0}};return{focus:i=>this.typed.focus(e(i)),input:i=>this.typed.input(e(i),e(i).value,n),change:i=>this.typed.change(e(i),e(i).value,n),keydown:i=>{i.key==="Enter"&&(this.typed.enter(e(i),e(i).value,n),this.requestUpdate())},blur:i=>{this.typed.blur(e(i)),this.requestUpdate()}}}num(t,e,n,i=.01,s){let r=this.typedEvents(a=>{let l=parseFloat(a.replace(",","."));Number.isFinite(l)&&l!==$(e)&&n(l)});return m`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${s??y}
        .value=${Ec(this.typed,String($(e)))}
        ?disabled=${!this.isEditor}
        @focus=${r.focus}
        @input=${r.input}
        @change=${r.change}
        @keydown=${r.keydown}
        @blur=${r.blur}
    /></label>`}iconInput(t,e){let n=t?t.startsWith("mdi:")?t:`mdi:${t}`:"";return m`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${t??""} ?disabled=${!this.isEditor} @change=${i=>e(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?lb(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):y}
      </span></label
    >`}markerSelect(t,e){return m`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isEditor} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${Ld.map(n=>m`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t,...e){let n=e.length?`${t}|${e.map(String).join("|")}`:String(t);return this.hassWatch.pause(()=>this.optionCache.get(this.rawHass,n,t))}keptForPlan(t,e){let n=this.rawHass,i=Object.keys(n?.states??{}).length,s=this.planMemo;if((!s||s.doc!==this._doc||s.entities!==n?.entities||s.devices!==n?.devices||s.areas!==n?.areas||s.count!==i)&&(s=this.planMemo={doc:this._doc,entities:n?.entities,devices:n?.devices,areas:n?.areas,count:i,kept:new Map}),s.kept.has(t))return s.kept.get(t);let r=this.hassWatch.pause(e);return s.kept.set(t,r),r}entityOptionsFor(t){return this.hassWatch.pause(()=>this.optionCache.get(this.rawHass,t,t))}pickerArea(){let t=this.furnitureItem,e=t?this.roomAt([t.x,t.z])??this._roomId:this._roomId;return e&&this.floor?.rooms.find(n=>n.id===e)?.area_id||null}entitySelect(t,e,n,i,s,r=[]){let a=n===void 0?null:n?this.t("entity_auto",{name:et(this.hass,n)}):this.t("entity_auto_none"),l=[...a!==null?[{id:"__auto",label:a}]:[],{id:"none",label:this.t("entity_none")}];return m`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${l}
        .value=${e===null?a!==null?"__auto":"none":e}
        .prefer=${{area:this.pickerArea(),domains:r}}
        .groups=${r.length?{likely:this.t("picker_likely"),other:this.t("picker_other")}:null}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isEditor}
        @change=${d=>{d.stopPropagation(),s(d.detail.value==="__auto"?null:d.detail.value)}}
      ></fp3d-entity-picker></label
    >`}};function cb(o,t,e){return o.filter(n=>n.id===t?e:n.editor).map(n=>n.id)}function db(o,t){let e=o.filter(n=>n.is_admin&&n.editor);return e.length===1&&e[0].id===t}function ub(o,t,e){let n=(o??[]).filter(i=>i!==t);return e?[...n,t]:n}var Ur=class{renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(r=>e.includes(r.split(".")[0])&&!t.includes(r),t.join(",")),i=r=>this.change(a=>a.settings.favorites=r.length?r:void 0),s=(r,a)=>{let l=[...t],[c]=l.splice(r,1);l.splice(Math.max(0,Math.min(l.length,r+a)),0,c),i(l)};return m`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?m` <span class="fp3d-lib-count">${t.length}</span>`:y}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((r,a)=>m`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${et(this.hass,r)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${a===0} @click=${()=>s(a,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${a===t.length-1} @click=${()=>s(a,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(t.filter(l=>l!==r))}>✕</button>
        </div>`)}
      ${t.length<40?m`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,r=>{r&&r!=="none"&&!t.includes(r)&&i([...t,r])})}
          </div>`:y}
    </details>`}renderMediaPresets(){let t=this._doc.settings.media_presets??[],e=i=>this.change(s=>s.settings.media_presets=i.length?i:void 0),n=(i,s)=>e(t.map((r,a)=>a===i?{...r,...s}:r));return m`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>m`<option value=${i}></option>`)}
      </datalist>
      ${t.map((i,s)=>m`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${r=>n(s,{label:r.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${i.type} @change=${r=>n(s,{type:r.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${i.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${r=>n(s,{content:r.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((r,a)=>a!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<30?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:N("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:y}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=a=>this.change(l=>l.settings.buttons=a.length?a:void 0),n=(a,l)=>e(t.map((c,d)=>d===a?{...c,...l}:c)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},s=a=>a==="service"||a==="fire_dom_event",r=a=>!this.isHaAdmin&&s(a.action);return m`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${this.isHaAdmin?y:m`<p class="fp3d-sub">${this.t("own_button_admin")}</p>`}
      ${t.map((a,l)=>m`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${a.label} @change=${c=>n(l,{label:c.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select ?disabled=${r(a)} @change=${c=>n(l,{action:c.target.value})}>
              ${Dd.filter(c=>this.isHaAdmin||!s(c)||c===a.action).map(c=>m`<option value=${c} ?selected=${c===a.action}>${this.t(`own_action_${c}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(a.icon??null,c=>n(l,{icon:c}))}
          ${a.action!=="fire_dom_event"?m`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${a.action}`)}
                <input type="text" ?disabled=${r(a)} .value=${a.target??""} placeholder=${i[a.action]} @change=${c=>n(l,{target:c.target.value.trim()||null})}
              /></label>`:y}
          ${a.action==="service"||a.action==="fire_dom_event"?m`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  ?disabled=${r(a)}
                  placeholder=${a.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${a.data?JSON.stringify(a.data,null,1):""}
                  @change=${c=>{c.target.setCustomValidity("");let d=c.target.value.trim();if(!d)return n(l,{data:null});try{let u=JSON.parse(d);u&&typeof u=="object"&&!Array.isArray(u)&&n(l,{data:u})}catch{c.target.setCustomValidity(this.t("own_data_bad")),c.target.reportValidity()}}}
                ></textarea></label
              >`:y}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${l===0} @click=${()=>e([...t.slice(0,l-1),a,t[l-1],...t.slice(l+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((c,d)=>d!==l))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:N("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:y}`}paneView(){let e=this.renderRoot.querySelector("fp3d-view3d")?.currentView();if(!e)return null;let n=e.target;return{theta:$(e.theta),phi:$(e.phi),radius:$(e.radius),...n?{target:{x:$(n.x),y:$(n.y),z:$(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){this.tell(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){this.tell(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderDirectorTriggers(t,e){if(!this.hass)return y;let i=t.triggers??[],s=r=>this.change(a=>a.settings.director={...a.settings.director??{},triggers:r.length?r:null});return m`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${i.map((r,a)=>m`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"),r.entity||null,void 0,this.entityOptions(l=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(l)),l=>s(i.map((c,d)=>d===a?{...c,entity:l&&l!=="none"?l:""}:c).filter(c=>c.entity)))}
          ${this.entitySelect(this.t("director_doorbell_camera"),r.camera,void 0,this.entityOptions(l=>l.startsWith("camera.")&&e.includes(l),e.join(",")),l=>s(i.map((c,d)=>d===a?{...c,camera:l&&l!=="none"?l:null}:c)))}
          <button class="fp3d-btn" @click=${()=>s(i.filter((l,c)=>c!==a))}>✕ ${this.t("delete")}</button>
        </div>`)}
      ${i.length<20?m`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"),null,void 0,this.entityOptions(r=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(r)),r=>{r&&r!=="none"&&s([...i,{entity:r,camera:null}])})}
          </div>`:y}
    </div>`}renderEditors(){let t=this.hass;if(!t)return y;let e=i=>i.then(s=>{this.editorsList=s,this.editorsMsg=null}).catch(s=>{let r=s?.code;this.editorsMsg=this.t(r==="no_admin"?"editors_no_admin":"editors_failed")}).finally(()=>this.requestUpdate());this.askEditors(e);let n=this.editorsList;return m`<div class="fp3d-form">
      <p class="fp3d-sub fp3d-wide">${this.t("editors_hint")}</p>
      ${n?n.users.map(i=>m`<label class="fp3d-check fp3d-wide"
              ><input
                type="checkbox"
                .checked=${i.editor}
                ?disabled=${i.editor&&db(n.users,i.id)}
                @change=${s=>{e(Ba(t,cb(n.users,i.id,s.target.checked)))}}
              />
              ${i.name||i.id}${i.is_admin?m` <span class="fp3d-sub">(${this.t("editors_admin")})</span>`:y}</label
            >`):m`<p class="fp3d-sub fp3d-wide">${this.t("loading")}</p>`}
      ${this.editorsMsg?m`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.editorsMsg}</p>`:y}
      ${n?.custom?m`<div class="fp3d-actions fp3d-wide"><button class="fp3d-btn" @click=${()=>{e(Ba(t,null))}}>${this.t("editors_reset")}</button></div>`:y}
    </div>`}askEditors(t){let e=this.hass;if(this.editorsAsked||!e)return;this.editorsAsked=!0;let n=Ep(e);t?t(n):n.then(i=>this.editorsList=i).catch(()=>{}).finally(()=>this.requestUpdate())}renderTabletUsers(t){let e=this._doc.settings.tablet_users??[];return m`${t.map(n=>m`<label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.includes(n.id)} @change=${i=>this.setTabletUser(n.id,i.target.checked)} />
          ${n.name||n.id}</label
        >`)}`}setTabletUser(t,e){this.change(n=>n.settings.tablet_users=ub(n.settings.tablet_users,t,e))}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let s=i.slice(7),r=this.entityOptions(l=>Rt(l)),a=l=>l.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...r.filter(l=>a(l.id)),...r.filter(l=>!a(l.id))]},n=(i,s)=>{let r=structuredClone(this._doc);r.presence=r.presence.filter(a=>a.person!==i),s&&s!=="none"&&r.presence.push({person:i,sensor:s}),this.setDoc(r)};return m`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(i=>this.entitySelect(`${et(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(s=>s.person===i)?.sensor??null,void 0,e(i),s=>n(i,s))):m`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}setSettings(t){let e=structuredClone(this._doc);Object.assign(e.settings,t),this.setDoc(e)}};var pb="home3d",Ev=["ai_task","alarm_control_panel","assist_satellite","automation","binary_sensor","button","calendar","camera","climate","conversation","counter","cover","date","datetime","device_tracker","event","fan","group","humidifier","image","input_boolean","input_button","input_datetime","input_number","input_select","input_text","lawn_mower","light","lock","media_player","notify","number","person","plant","remote","scene","schedule","script","select","sensor","siren","stt","sun","switch","text","time","timer","todo","tts","update","vacuum","valve","water_heater","weather","zone"],Sv=new RegExp(`^(?:${Ev.join("|")})\\.[a-z0-9_]+$`);function Pc(o){return typeof o=="string"&&Sv.test(o)}var Pv=new Set(["area_id","ha_floor"]),Fv=new Set(["mods","car","buttons"]),Rv=new Set(["triggers","alert_snoozed","alert_ignored","pictures"]);function Fc(o,t=""){if(Array.isArray(o)){for(let n=o.length-1;n>=0;n--){let i=o[n];Pc(i)||Rv.has(t)&&i&&typeof i=="object"&&Object.values(i).some(Pc)?o.splice(n,1):Fc(i,t)}return}if(!o||typeof o!="object")return;let e=o;for(let[n,i]of Object.entries(e))Fv.has(n)?delete e[n]:Pv.has(n)||Pc(i)?e[n]=null:Fc(i,n)}function Iv(o){let t=structuredClone(o);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return Fc(t),t}function hb(o,t){return{format:pb,version:1,exported_at:new Date().toISOString(),building:t?Iv(o):structuredClone(o)}}function fb(o){let t;try{t=JSON.parse(o)}catch{throw new Error("not_json")}let e=t,n=e?.format===pb?e.building:t;if(!n||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");if(Number.isInteger(n.version)&&n.version>ya)throw new Error("plan_too_new");if(!Qd(n.version))throw new Error("not_plan");for(let i of n.floors)i.background=null;return us(n)}function mb(o){let t=new Set;for(let e of o.floors){e.background?.image_id&&t.add(e.background.image_id);for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&t.add(i.image)}return[...t]}function Rc(o,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=o,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var Gr=class{async loadHistory(){if(this.hass)try{this._history=await up(this.hass,this.home)}catch{this._history=[]}}async restoreFromHistory(t){let e=t.missing_pictures?` ${this.t("backup_restore_missing",{n:t.missing_pictures})}`:"";if(!this.hass||!await this.ask(this.t("backup_restore_confirm",{time:this.snapshotTime(t)})+e,this.t("backup_restore")))return;let n;try{n=await hp(this.hass,t.id,this.home)}catch(i){await this.tell(this.t("restore_failed",{error:Ue(i)}));return}this._notice=n.missing_pictures?this.t("backup_restored_missing",{n:n.missing_pictures}):this.t("backup_restored"),await this.loadHistory()}async storedImages(t,e){let n={};for(let i of mb(t))try{n[i]=await vs(this.hass,i,e)}catch{}return n}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await kp(this.hass),e=await this.storedImages(t.building,t.active),n=[];for(let r of t.homes??[])n.push(r.id===t.active?r:{...r,images:await this.storedImages(r.building,r.id)});let i=new Date().toISOString().slice(0,10),s={...t,...t.homes?{homes:n}:{},exported_at:new Date().toISOString(),images:e};Rc(`home-3d-${this.t("export_name_full")}-${i}.json`,JSON.stringify(s))}catch(t){await this.tell(this.t("backup_import_error",{error:String(t?.message??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{await this.tell(this.t("import_error_not_json"));return}if(i?.format!=="home3d-backup"||!i.building){await this.tell(this.t("backup_full_not_backup"));return}if(await this.ask(this.t("backup_full_confirm"),this.t("backup_restore"))){this._backupBusy=!0;try{let s=i.homes?.length?i.homes:null,r=s?s.map(h=>({home:h,images:h.images??(h.id===i.active?i.images??{}:{})})):[{images:i.images??{}}],a=(h,p)=>{let f=p===r.length-1,b=h.home?{homes:[{id:h.home.id,name:h.home.name,building:h.home.building}],...f&&i.active?{active:i.active}:{}}:void 0;return[h.home?null:i.building,f?i.packs:void 0,f?i.items:void 0,b,h.home?void 0:this.home]};for(let[h,p]of r.entries())await Mp(this.hass,...a(p,h));let l=null,c=0,d=[];for(let[h,p]of r.entries()){try{l=await $p(this.hass,...a(p,h))}catch(f){if(!d.length)throw f;let b=f??{};await this.tell(this.t("backup_import_partial",{home:p.home?.name??"",done:d.join(", "),error:String(b.message??f)}));return}p.home&&d.push(p.home.name);for(let[f,b]of Object.entries(p.images))try{await gi(this.hass,f,b,p.home?.id??l.home_id??this.home),c++}catch{}}if(!l)return;(!l.home_id||!this.home||l.home_id===this.home)&&(this.setDoc(us(l.building)),this._floorId=l.building.floors[0]?.id??null,this.selectItem("room",null),this.fit()),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let u=l.skipped.length?` ${this.t("backup_full_skipped",{packs:l.skipped.map(h=>h.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:l.packs,pictures:c})+u}catch(s){let r=s??{};await this.tell(this.t("backup_import_error",{error:String(r.message??r.error?.message??r.code??r.error?.code??s)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);Rc(`home-3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(hb(this._doc,t),null,2))}async importPlan(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=bd(fb(await n.text()))}catch(s){let r=s.message;await this.tell(r==="not_json"?this.t("import_error_not_json"):r==="not_plan"?this.t("import_error_not_plan"):r==="plan_too_new"?this.t("import_error_too_new"):this.t("backup_import_error",{error:r}));return}await this.ask(this.t("backup_import_confirm"),this.t("ask_ok"))&&(await pp(this.hass,this.home).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){return new Date(t.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return m`<details
      class="fp3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?m`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?m`<div class="fp3d-room-list">
              ${this._history.map(t=>m`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}</span></span>
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
      ${this.isHaAdmin?y:m`<p class="fp3d-sub">${this.t("backup_admin_only")}</p>`}
    </details>`}};var qr=class extends zt{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_libUpdates:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_solarDim:{state:!0},_sidePinned:{state:!0},_sideMin:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_hiddenItems:{state:!0},_placing:{state:!0},_placeAt:{state:!0},_snapOn:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_unplacedOpen:{state:!0},_unplacedHiddenView:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_expanded:{state:!0},_notice:{state:!0},_resize:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_kerbPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_techAsk:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingNote:{state:!0},_help:{state:!0},_rackSheet:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_rectName:{state:!0},_wallsOpen:{state:!0},_tool:{state:!0},_toolMenu:{state:!0},_settingsMenu:{state:!0},_sideWidth:{state:!0},_toolOpen:{state:!0},_viewMenu:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0,hasChanged:(t,e)=>JSON.stringify(t)!==JSON.stringify(e)},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0},canEdit:{attribute:!1},home:{attribute:!1},homeName:{attribute:!1},history:{attribute:!1},topic:{attribute:!1}};rawHass;hassWatch=new js;optionCache=new ys;get hass(){let t=this.rawHass;return t&&this.hassWatch.rendering?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}doc3dTimer;placeLines=null;lastFurnTap=null;shiftHeld=!1;onShift=t=>this.shiftHeld=t.shiftKey;kitPics=new Map;kitPicsAsked=new Set;cableCache=null;techPress=null;techStroke=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;openingHoverText=null;get _openingHover(){return this.openingHoverText}set _openingHover(t){if(t===this.openingHoverText)return;this.openingHoverText=t;let e=this.renderRoot?.querySelector?.(".fp3d-hint-text");e&&(e.textContent=this.hintText())}openingFormMin=null;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;sideDrag=null;drag=null;mergeKey=null;mergeWithin=void 0;pointers=new Map;pinch=null;fitted=!1;fittedView=null;fittedAll=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._hiddenItems=[],this._placing=null,this._placeAt=null,this._snapOn=(()=>{try{return localStorage.getItem("home3d.snap")!=="0"}catch{return!0}})(),this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._unplacedOpen=!1,this._unplacedHiddenView=!1,this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._expanded=new Set,this._notice=null,this._openingNote=null,this._openingHover=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._techAsk=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._kerbPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("home3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("home3d.phoneHint")!=="0"}catch{}let t=!1;try{t=localStorage.getItem("home3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let s=Number(localStorage.getItem("home3d.editorSplit"));s>=20&&s<=80&&(this._splitRatio=s/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._wallsOpen=!1;try{localStorage.getItem("home3d.walls3d")==="auto"&&(this._wall3d="auto"),this._wallsOpen=localStorage.getItem("home3d.wallsOpen")==="1"}catch{}this._solarDim=!0;try{localStorage.getItem("home3d.solarDim")==="off"&&(this._solarDim=!1)}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("home3d.sidePinned")!=="0"}catch{}this._sidePinned=e;let n=!1;try{n=localStorage.getItem("home3d.sideMin")==="1"}catch{}this._sideMin=n,this._preview=null,this._libUpdates=new Set,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._rectName="",this._tool="select",this._toolMenu=null,this._settingsMenu=!1;let i=320;try{i=Number(localStorage.getItem("home3d.sideWidth"))||320}catch{}this._sideWidth=Math.min(640,Math.max(280,i)),this._toolOpen=null,this._viewMenu=!1,this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._help=!1,this._rackSheet=null,this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1,this.history=new Vs,this.topic=null}t(t,e){return qt(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),this.resizeObserver?.disconnect(),Ge().then(t=>t.releasePreviewRenderer())}requestUpdate(t,e,...n){typeof t=="string"&&zu(this,t,e,this.renderRoot),super.requestUpdate(t,e,...n)}shouldUpdate(t){if(t.size===1&&t.has("hass")&&!this.hassWatch.matters(t.get("hass"),this.rawHass)){for(let e of this.renderRoot?.querySelectorAll?.("fp3d-view3d")??[])e.hass=this.rawHass;return!1}return!0}update(t){this.hassWatch.begin();try{super.update(t)}finally{this.hassWatch.end()}}willUpdate(t){if(t.has("packs")&&gd(this.packs??[]),t.has("_doc")&&Bd(this._doc),t.has("hass")&&this.hass&&!Fu(this.hass.language)&&hs(this.hass.language,this.hass).then(()=>this.requestUpdate()),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),this._placing&&(t.has("home")||t.has("_floorId")&&t.get("_floorId")!==void 0)&&this.cancelPlacing(),t.has("home")&&t.get("home")!=null&&(this.selectItem("room",null),this._floorId=null),t.has("building")&&this.building!==this._doc){this.history.adopt(this.building,this.home),this.showHistory(),this._doc=this.building,this._doc3d=this.building;let e=this._doc.settings.editor_floor;this._floorId===null&&e&&this._doc.floors.some(n=>n.id===e)&&(this._floorId=e),this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this._roomId)||(this._roomId=null),!this.startChecked&&this._doc&&(this.startChecked=!0,rf(this._doc,this._split)&&(this._split=!1))}xd(this._doc?.recipes),(t.has("_doc")||t.has("packs"))&&this.fetchPlacedRecipes(),(t.has("building")||t.has("packs"))&&this.isEditor&&!this.topic&&this.refreshLibUpdates()}recipesAsked=new Set;startChecked=!1;fetchPlacedRecipes(){if(!this.hass||!this._doc||!this.packs?.length)return;let t=Ip(this._doc).filter(e=>!wt(e)&&!this.recipesAsked.has(e));if(t.length){for(let e of t)this.recipesAsked.add(e);Se(this.hass,t).then(()=>{t.some(e=>wt(e))&&((this._split||this._wallView)&&(this._doc3d={...this.docWithDraft()}),this.requestUpdate())})}}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");t&&(this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit(this.fittedAll))}),this.resizeObserver.observe(t))}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t?.moved&&this.pushHistory(t.base)}};get houseTool(){return this._tool==="roof"||this._tool==="energy"}updated(t){if(Au(t,this))for(let i of this.renderRoot.querySelectorAll(".fp3d-side"))i.scrollTop=0;if(this.topic)for(let i of this.renderRoot.querySelectorAll(".fp3d-embed details"))i.open||(i.open=!0);let e=this._preview?this.renderRoot.querySelector(".fp3d-preview"):null;if(e&&this._preview){let i=e.getBoundingClientRect(),s=i.left-this._preview.left,r=i.top-this._preview.top;(Math.abs(s)>1||Math.abs(r)>1)&&(e.style.left=`${parseFloat(e.style.left)-s}px`,e.style.top=`${parseFloat(e.style.top)-r}px`)}for(let i of this.renderRoot.querySelectorAll("select option[selected]"))i.selected||(i.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let n=this.floor?.background;if(n&&!this._images[n.image_id]&&!this.loadingImages.has(n.image_id)&&this.loadImage(n.image_id),this.furnitureItem?.pictures)for(let i of this.storedPictures())!this._images[i]&&!this.loadingImages.has(i)&&this.loadImage(i)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isEditor(){return this.canEdit??this.hass?.user?.is_admin??!0}get isHaAdmin(){return this.hass?.user?.is_admin??!1}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(t=>t.id===this._wallId):void 0}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(t=>t.id===this._outdoorId):void 0}onKey=t=>{if(this.topic)return;this.shiftHeld=t.shiftKey;let e=t.composedPath();if(e.some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)){t.key==="Escape"&&e.includes(this)&&this.escape();return}if(!this.isConnected||!this.offsetParent||this.pickerOpen())return;if(Bp(t)){t.preventDefault(),this._help=!this._help;return}if(this._help){t.key==="Escape"&&(this._help=!1);return}if(this._rackSheet){t.key==="Escape"&&(this._rackSheet=null);return}let n=t.ctrlKey||t.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(t.key.toLowerCase()))))if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(Ia(t)){let i=Ia(t);(i==="copy"?this.copySelection():i==="paste"?this.pasteClipboard():this.selectAll())&&t.preventDefault()}else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.deleteSelected();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.prototype.hasOwnProperty.call(vl,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[s,r]=vl[t.key];this.nudge(s*i,r*i)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Tab"&&!n&&!t.altKey&&this._furnitureId&&(this._tool==="select"||this._tool==="furniture")&&this.keysFree(e)){let i=la(this.tabItems(),this._furnitureId,t.shiftKey?-1:1);i&&(t.preventDefault(),this.selectFromList(i))}else t.key==="Backspace"&&this.drawingPoints?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this.drawingPoints?this.closeDraft():t.key==="Escape"&&this.escape()};get freeHaFloors(){let t=new Set(this._doc.floors.map(e=>e.ha_floor));return Object.values(this.hass?.floors??{}).filter(e=>!t.has(e.floor_id)).sort((e,n)=>(e.level??99)-(n.level??99)||e.name.localeCompare(n.name))}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(t=>t.id===this._roofId):void 0}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}typeLabelMemo=new WeakMap;onPlanDragOver=t=>{this.isEditor&&this.floor&&t.dataTransfer?.types.includes(bo)&&(t.preventDefault(),t.dataTransfer.dropEffect="copy")};onPlanDrop=t=>{let e=t.dataTransfer?.getData(bo),n=this.renderRoot.querySelector("svg.fp3d-plan");if(!e||!n||!this.isEditor||!this.floor)return;t.preventDefault();let i=n.getBoundingClientRect(),[s,r]=this.toWorld(t.clientX-i.left,t.clientY-i.top),a=this.roomAt([s,r]),l=this.floor.rooms.find(c=>c.id===a);this.change((c,d)=>{for(let p of c.floors)p.placements=p.placements.filter(f=>f.entity_id!==e),p.furniture=p.furniture.filter(f=>!(kt(f.type)&&f.entity===e));let u={x:$(s),z:$(r)};if(e.startsWith("light.")&&l&&!l.outdoor){let[p,f,b]=ae.lamp_ceiling;d.furniture.push({id:N("furniture"),type:"lamp_ceiling",...u,rotation:0,w:p,d:f,h:b,variant:null,entity:e,power:null});return}d.placements.push({entity_id:e,...u,y:null,mount:null});let h=e.startsWith("camera.")&&this.hass?ki(this.hass,e,this.packs??[]):null;h&&pn(d,e,h)})};get device(){return this._deviceId?this.floor?.placements.find(t=>t.entity_id===this._deviceId):void 0}elevationMemo=null;anyEntity=()=>!0;rackDevicesMemo=null;render(){if(this.topic)return this.renderTopic(this.topic);let t=this.floor,e=t?$t(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return m`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderHelp()} ${this.renderRackSheet()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}" style=${`--fp3d-side-w:${this._sideWidth}px`}>
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?m`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:y}
            ${this.renderFloorMenu()} ${this.renderToolBar(t)}
            ${e?.warnings.length?m`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:y}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?m`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("home3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:y}
            ${this.houseTool?m`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:y}
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
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):y}
              ${t?this.renderOutdoor(t):y} ${t?this.renderRooms(t):y} ${t?this.renderFurniture(t):y} ${this.renderPlaceGhost()}
              ${t?this.renderFreeWalls(t):y}
              ${t&&e?this.renderOpenings(t,e.walls):y} ${t?this.renderMeter(t):y}
              ${t&&this._tool==="select"?this.renderDevices(t):y}
              ${t&&this._tool==="select"?this.renderPets(t):y}
              ${this.room&&this.isEditor&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):y}
              ${t?this.renderOutdoorHandles(t):y}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):y}
              ${t?this.renderHeadroom(t):y}
              ${this._tool==="roof"?A`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?A`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&this.pipeRules?this.renderPoolPlan(t):y} ${this.renderDraft()} ${this.renderGuides()}
              ${t?this.renderKerb(t):y}
            </svg>
            ${this.renderContext()}
            ${this.renderHint()}
          </div>
          ${this._split&&!this.narrow?m`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:y}
          ${this._split?this.render3d():y}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}_detectFilter=null;wallPickTip=[0,0];techDocCache=null;get runPool(){return this.poolArea??this.floor?.outdoor.find(t=>t.type==="pool"&&t.points.length>=3)}get canLayRuns(){return(Ea()||this._techMode)&&!!this.runPool}get poolArea(){let t=this.outdoorArea;if(t?.type==="pool")return t;let e=this.floor?.outdoor.filter(n=>n.type==="pool")??[];return e.length===1?e[0]:void 0}get pipeRules(){return Nu()}_moduleFieldMemo=null;get unit(){return od(this.hass,this._doc.settings.units)}typed=new gs;rightPress=null;rightUp=-1e9;lastTap=null;planMemo=null;editorsList=null;editorsAsked=!1;editorsMsg=null;libIndex=null;libraryThumb=async t=>{let[e]=await Promise.all([Ge(),this.hass?Se(this.hass,[t.type]):void 0]);if(Pt(t.type)&&!wt(t.type))return null;let[n,i,s]=t.size;return e.furniturePreview({type:t.type,w:n,d:i,h:s,variant:null,lamp:sn[t.type]??null},96,this.packs??[])};libUpdatesAsked=!1;libUpdatesAsking=!1;static styles=[te,rn,Jc,Xc,Zc,td,ed,nd,id]};af(qr,[ir,rr,lr,cr,dr,ur,pr,hr,fr,mr,vr,xr,wr,Er,Rr,Ar,zr,Tr,Lr,Vr,Wr,Nr,jr,Br,Kr,Ur,Gr]);Xt("fp3d-editor",qr);export{qr as Fp3dEditor};
