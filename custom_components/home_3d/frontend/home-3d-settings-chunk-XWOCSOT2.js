var Pe=Symbol.for("home-3d.custom-elements"),oe=Symbol.for("home-3d.build"),Ue=["home-3d-panel","home-3d-card"],W=typeof __FP3D_BUILD__=="string"?__FP3D_BUILD__:"dev",w;function q(){let r=globalThis;return r[Pe]??={defined:new Map,watching:!1}}function Oe(){if(w!==void 0)return w;if(W==="dev")return w=!0;let r=globalThis,e=r[oe];if(e!==void 0)return w=e===W;let t=globalThis.customElements;return q().defined.size>0||Ue.some(o=>t?.get(o)||ne(o,void 0))?w=!1:(r[oe]=W,w=!0)}function ie(){let r=globalThis.customElements;if(r){for(let[e,t]of q().defined)if(t.registry!==r&&(t.registry=r,!r.get(e)))try{r.define(e,t.cls)}catch(s){console.warn(`Home 3D: could not define ${e} in the page's element registry`,s)}}}function ne(r,e){if(typeof document>"u")return;let t;try{t=document.createElement(r)}catch{return}if(Object.getPrototypeOf(t)===HTMLElement.prototype||t instanceof HTMLUnknownElement||!(t instanceof HTMLElement))return;let o=t.constructor;return o===e?void 0:o}function Qe(r,e){if(!Oe())return!1;ie();let t=globalThis.customElements;if(t.get(r))return!1;let s=q(),o=ne(r,e);if(o){try{t.define(r,o),s.defined.set(r,{cls:o,registry:t})}catch(i){console.warn(`Home 3D: could not define ${r} in the page's element registry`,i)}return!1}return t.define(r,e),s.defined.set(r,{cls:e,registry:t}),s.watching||(s.watching=!0,t.whenDefined("home-assistant").then(ie)),!0}var M=globalThis,N=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),ae=new WeakMap,T=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(N&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ae.set(t,e))}return e}toString(){return this.cssText}},b=r=>new T(typeof r=="string"?r:r+"",void 0,F),S=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((s,o,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new T(t,r,F)},de=(r,e)=>{if(N)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),o=M.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=t.cssText,r.appendChild(s)}},K=N?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return b(t)})(r):r;var{is:Re,defineProperty:He,getOwnPropertyDescriptor:Me,getOwnPropertyNames:Ne,getOwnPropertySymbols:De,getPrototypeOf:Le}=Object,D=globalThis,le=D.trustedTypes,je=le?le.emptyScript:"",Ie=D.reactiveElementPolyfillSupport,k=(r,e)=>r,G={toAttribute(r,e){switch(e){case Boolean:r=r?je:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ce=(r,e)=>!Re(r,e),pe={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??=Symbol("metadata"),D.litPropertyMetadata??=new WeakMap;var u=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),o=this.getPropertyDescriptor(e,s,t);o!==void 0&&He(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){let{get:o,set:i}=Me(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:o,set(n){let p=o?.call(this);i?.call(this,n),this.requestUpdate(e,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;let e=Le(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){let t=this.properties,s=[...Ne(t),...De(t)];for(let o of s)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,o]of t)this.elementProperties.set(s,o)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let o=this._$Eu(t,s);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let o of s)t.unshift(K(o))}else e!==void 0&&t.push(K(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return de(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:G).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let s=this.constructor,o=s._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=s.getPropertyOptions(o),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:G;this._$Em=o;let p=n.fromAttribute(t,i.type);this[o]=p??this._$Ej?.get(o)??p,this._$Em=null}}requestUpdate(e,t,s,o=!1,i){if(e!==void 0){let n=this.constructor;if(o===!1&&(i=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??ce)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:o,wrapped:i},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[o,i]of s){let{wrapped:n}=i,p=this[o];n!==!0||this._$AL.has(o)||p===void 0||this.C(o,void 0,i,p)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};u.elementStyles=[],u.shadowRootOptions={mode:"open"},u[k("elementProperties")]=new Map,u[k("finalized")]=new Map,Ie?.({ReactiveElement:u}),(D.reactiveElementVersions??=[]).push("2.1.2");var Z=globalThis,he=r=>r,L=Z.trustedTypes,fe=L?L.createPolicy("lit-html",{createHTML:r=>r}):void 0,J="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,Q="?"+m,Be=`<${Q}>`,x=document,U=()=>x.createComment(""),O=r=>r===null||typeof r!="object"&&typeof r!="function",X=Array.isArray,ye=r=>X(r)||typeof r?.[Symbol.iterator]=="function",Y=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,me=/>/g,$=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,be=/"/g,xe=/^(?:script|style|textarea|title)$/i,ee=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),_e=ee(1),ot=ee(2),it=ee(3),_=Symbol.for("lit-noChange"),l=Symbol.for("lit-nothing"),$e=new WeakMap,y=x.createTreeWalker(x,129);function ve(r,e){if(!X(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return fe!==void 0?fe.createHTML(e):e}var Ae=(r,e)=>{let t=r.length-1,s=[],o,i=e===2?"<svg>":e===3?"<math>":"",n=P;for(let p=0;p<t;p++){let a=r[p],c,h,d=-1,f=0;for(;f<a.length&&(n.lastIndex=f,h=n.exec(a),h!==null);)f=n.lastIndex,n===P?h[1]==="!--"?n=ue:h[1]!==void 0?n=me:h[2]!==void 0?(xe.test(h[2])&&(o=RegExp("</"+h[2],"g")),n=$):h[3]!==void 0&&(n=$):n===$?h[0]===">"?(n=o??P,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?$:h[3]==='"'?be:ge):n===be||n===ge?n=$:n===ue||n===me?n=P:(n=$,o=void 0);let g=n===$&&r[p+1].startsWith("/>")?" ":"";i+=n===P?a+Be:d>=0?(s.push(c),a.slice(0,d)+J+a.slice(d)+m+g):a+m+(d===-2?p:g)}return[ve(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},R=class r{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let i=0,n=0,p=e.length-1,a=this.parts,[c,h]=Ae(e,t);if(this.el=r.createElement(c,s),y.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=y.nextNode())!==null&&a.length<p;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(J)){let f=h[n++],g=o.getAttribute(d).split(m),H=/([.?@])?(.*)/.exec(f);a.push({type:1,index:i,name:H[2],strings:g,ctor:H[1]==="."?I:H[1]==="?"?B:H[1]==="@"?z:A}),o.removeAttribute(d)}else d.startsWith(m)&&(a.push({type:6,index:i}),o.removeAttribute(d));if(xe.test(o.tagName)){let d=o.textContent.split(m),f=d.length-1;if(f>0){o.textContent=L?L.emptyScript:"";for(let g=0;g<f;g++)o.append(d[g],U()),y.nextNode(),a.push({type:2,index:++i});o.append(d[f],U())}}}else if(o.nodeType===8)if(o.data===Q)a.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(m,d+1))!==-1;)a.push({type:7,index:i}),d+=m.length-1}i++}}static createElement(e,t){let s=x.createElement("template");return s.innerHTML=e,s}};function v(r,e,t=r,s){if(e===_)return e;let o=s!==void 0?t._$Co?.[s]:t._$Cl,i=O(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,t,s)),s!==void 0?(t._$Co??=[])[s]=o:t._$Cl=o),o!==void 0&&(e=v(r,o._$AS(r,e.values),o,s)),e}var j=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,o=(e?.creationScope??x).importNode(t,!0);y.currentNode=o;let i=y.nextNode(),n=0,p=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new E(i,i.nextSibling,this,e):a.type===1?c=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(c=new V(i,this,e)),this._$AV.push(c),a=s[++p]}n!==a?.index&&(i=y.nextNode(),n++)}return y.currentNode=x,o}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},E=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,o){this.type=2,this._$AH=l,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=v(this,e,t),O(e)?e===l||e==null||e===""?(this._$AH!==l&&this._$AR(),this._$AH=l):e!==this._$AH&&e!==_&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ye(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==l&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=R.createElement(ve(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new j(o,this),n=i.u(this.options);i.p(t),this.T(n),this._$AH=i}}_$AC(e){let t=$e.get(e.strings);return t===void 0&&$e.set(e.strings,t=new R(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,o=0;for(let i of e)o===t.length?t.push(s=new r(this.O(U()),this.O(U()),this,this.options)):s=t[o],s._$AI(i),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=he(e).nextSibling;he(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},A=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,o,i){this.type=1,this._$AH=l,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=l}_$AI(e,t=this,s,o){let i=this.strings,n=!1;if(i===void 0)e=v(this,e,t,0),n=!O(e)||e!==this._$AH&&e!==_,n&&(this._$AH=e);else{let p=e,a,c;for(e=i[0],a=0;a<i.length-1;a++)c=v(this,p[s+a],t,a),c===_&&(c=this._$AH[a]),n||=!O(c)||c!==this._$AH[a],c===l?e=l:e!==l&&(e+=(c??"")+i[a+1]),this._$AH[a]=c}n&&!o&&this.j(e)}j(e){e===l?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},I=class extends A{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===l?void 0:e}},B=class extends A{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==l)}},z=class extends A{constructor(e,t,s,o,i){super(e,t,s,o,i),this.type=5}_$AI(e,t=this){if((e=v(this,e,t,0)??l)===_)return;let s=this._$AH,o=e===l&&s!==l||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==l&&(s===l||o);o&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},V=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){v(this,e)}},nt={M:J,P:m,A:Q,C:1,L:Ae,R:j,D:ye,V:v,I:E,H:A,N:B,U:z,B:I,F:V},ze=Z.litHtmlPolyfillSupport;ze?.(R,E),(Z.litHtmlVersions??=[]).push("3.3.3");var we=(r,e,t)=>{let s=t?.renderBefore??e,o=s._$litPart$;if(o===void 0){let i=t?.renderBefore??null;s._$litPart$=o=new E(e.insertBefore(U(),i),i,void 0,t??{})}return o._$AI(r),o};var te=globalThis,C=class extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=we(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}};C._$litElement$=!0,C.finalized=!0,te.litElementHydrateSupport?.({LitElement:C});var Ve=te.litElementPolyfillSupport;Ve?.({LitElement:C});(te.litElementVersions??=[]).push("4.2.2");var xt="#48cdeb";function We(r,e){return(r??"").trim().toLowerCase()===(e??"").trim().toLowerCase()}function qe(r,e){return!!r&&!We(r,e)}function _t(r){return qe(r.value,r.fallback)?_e`<button
    type="button"
    class="fp3d-colour-reset"
    title=${r.label}
    aria-label=${r.label}
    ?disabled=${r.disabled}
    @click=${e=>{e.preventDefault(),e.stopPropagation(),r.onReset()}}
  >
    ↺
  </button>`:l}var Se=S`
  .fp3d-colour-reset {
    flex: none;
    border: none;
    background: none;
    color: var(--fp3d-muted, #8aa0b8);
    cursor: pointer;
    font: inherit;
    font-size: 15px;
    line-height: 1;
    padding: 4px 5px;
    border-radius: 6px;
  }
  .fp3d-colour-reset:hover:not(:disabled),
  .fp3d-colour-reset:focus-visible {
    color: var(--fp3d-accent, #37e0ff);
  }
  .fp3d-colour-reset:disabled {
    opacity: 0.4;
    cursor: default;
  }
`;var Fe={1:4,2:8,3:12,4:16,5:20,6:24,8:32},Ke={control:6,card:8,pill:999},Ge={section:18,card:15,body:14,hint:12,label:12},Ye=44;function Ee(){let r=[];for(let[e,t]of Object.entries(Fe))r.push(`--fp3d-space-${e}: ${t}px;`);for(let[e,t]of Object.entries(Ke))r.push(`--fp3d-radius-${e}: ${t}px;`);for(let[e,t]of Object.entries(Ge))r.push(`--fp3d-type-${e}: ${t}px;`);return r.push(`--fp3d-touch: ${Ye}px;`),r.join(`
`)}var se={bg:"#070b14",bg2:"#0d1424",chrome:"rgba(15, 23, 42, 0.88)",chromeSolid:"#0f172a",line:"rgba(148, 163, 184, 0.2)",text:"#e2e8f0",muted:"#94a3b8",accent:"#48cdeb",accentText:"#041018",panel:"#1e293b",primary:"#1e6ebc",primaryText:"#ffffff",link:"#5d97cf",soft:"#5b7cff",warm:"#ffb547",danger:"#ff6b8b",warning:"#fbbf24",success:"#4ade80",shadow:"0 8px 30px rgba(0, 0, 0, 0.5)",colorScheme:"dark"},Ce={bg:"#eef2f8",bg2:"#e3e9f2",chrome:"rgba(255, 255, 255, 0.9)",chromeSolid:"#ffffff",line:"rgba(15, 23, 42, 0.16)",text:"#1a1a1a",muted:"#58667a",accent:"#1c67b1",accentText:"#ffffff",panel:"#e2e8f0",primary:"#1e6ebc",primaryText:"#ffffff",link:"#1c67b1",soft:"#3d5bd9",warm:"#a35f00",danger:"#c4224a",warning:"#92400e",success:"#166534",shadow:"0 1px 2px rgba(15, 23, 42, 0.04), 0 10px 28px -10px rgba(14, 37, 66, 0.14)",colorScheme:"light"},Te={bg:"#000000",bg2:"#050a14",chrome:"rgba(0, 0, 0, 0.94)",chromeSolid:"#000000",line:"rgba(255, 255, 255, 0.7)",text:"#ffffff",muted:"#dbe4f5",accent:"#ffe14d",accentText:"#000000",panel:"#111111",primary:"#ffe14d",primaryText:"#000000",link:"#9db4ff",soft:"#9db4ff",warm:"#ffc247",danger:"#ff8fa8",warning:"#ffc247",success:"#7ee8a6",shadow:"0 0 0 1px rgba(255, 255, 255, 0.5)",colorScheme:"dark"};function re(r){let e=t=>t.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`);return Object.entries(r).map(([t,s])=>`--fp3d-s-${e(t)}: ${s};`).join(`
`)}var ke=r=>r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),Ze=Object.keys(se).filter(r=>r!=="colorScheme").map(r=>`--fp3d-${ke(r)}: var(--fp3d-s-${ke(r)}, ${se[r]});`).join(`
`),Je=Ee(),kt=S`
  :host {
    ${b(Ze)}
    ${b(Je)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${b(re(Ce))}
  }
  :host([contrast]) {
    ${b(re(Te))}
  }
`,Pt=S`
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
  /* a chosen choice is a fill: the primary blue with its own text (#246); cyan stays for text, icons and outlines */
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-primary);
    color: var(--fp3d-primary-text);
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
    background: var(--fp3d-primary);
    color: var(--fp3d-primary-text);
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
    accent-color: var(--fp3d-primary);
  }
  input[type="checkbox"],
  input[type="radio"] {
    accent-color: var(--fp3d-primary);
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
  /* fingers need 44 px (#181, the --fp3d-touch token #246): buttons, chips, fields and swatches */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn,
    .fp3d-field select,
    .fp3d-field input:not([type="checkbox"]):not([type="radio"]):not([type="range"]) {
      min-height: var(--fp3d-touch, 44px);
    }
    .fp3d-seg button,
    .fp3d-btn {
      min-width: var(--fp3d-touch, 44px);
    }
    .fp3d-swatch {
      width: var(--fp3d-touch, 44px);
      height: var(--fp3d-touch, 44px);
    }
  }
  ${Se}
`;export{Qe as a,S as b,_e as c,ot as d,_ as e,l as f,nt as g,C as h,xt as i,_t as j,kt as k,Pt as l};
