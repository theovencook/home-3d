var We=Symbol.for("home-3d.custom-elements");function ce(){let i=globalThis;return i[We]??={defined:new Map,watching:!1}}function le(){let i=globalThis.customElements;if(i){for(let[e,t]of ce().defined)if(t.registry!==i&&(t.registry=i,!i.get(e)))try{i.define(e,t.cls)}catch(s){console.warn(`Home 3D: could not define ${e} in the page's element registry`,s)}}}function Ne(i,e){if(typeof document>"u")return;let t;try{t=document.createElement(i)}catch{return}if(Object.getPrototypeOf(t)===HTMLElement.prototype||t instanceof HTMLUnknownElement||!(t instanceof HTMLElement))return;let n=t.constructor;return n===e?void 0:n}function he(i,e){le();let t=globalThis.customElements;if(t.get(i))return!1;let s=ce(),n=Ne(i,e);if(n){try{t.define(i,n),s.defined.set(i,{cls:n,registry:t})}catch(o){console.warn(`Home 3D: could not define ${i} in the page's element registry`,o)}return!1}return t.define(i,e),s.defined.set(i,{cls:e,registry:t}),s.watching||(s.watching=!0,t.whenDefined("home-assistant").then(le)),!0}var O=globalThis,W=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),de=new WeakMap,w=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(W&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&de.set(t,e))}return e}toString(){return this.cssText}},ue=i=>new w(typeof i=="string"?i:i+"",void 0,D),E=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((s,n,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new w(t,i,D)},pe=(i,e)=>{if(W)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),n=O.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=t.cssText,i.appendChild(s)}},j=W?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return ue(t)})(i):i;var{is:Be,defineProperty:ze,getOwnPropertyDescriptor:De,getOwnPropertyNames:je,getOwnPropertySymbols:Fe,getPrototypeOf:Ke}=Object,N=globalThis,me=N.trustedTypes,qe=me?me.emptyScript:"",Ve=N.reactiveElementPolyfillSupport,P=(i,e)=>i,F={toAttribute(i,e){switch(e){case Boolean:i=i?qe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},fe=(i,e)=>!Be(i,e),ge={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:fe};Symbol.metadata??=Symbol("metadata"),N.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),n=this.getPropertyDescriptor(e,s,t);n!==void 0&&ze(this.prototype,e,n)}}static getPropertyDescriptor(e,t,s){let{get:n,set:o}=De(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:n,set(r){let a=n?.call(this);o?.call(this,r),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ge}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;let e=Ke(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){let t=this.properties,s=[...je(t),...Fe(t)];for(let n of s)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,n]of t)this.elementProperties.set(s,n)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let n=this._$Eu(t,s);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let n of s)t.unshift(j(n))}else e!==void 0&&t.push(j(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,s);if(n!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:F).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){let s=this.constructor,n=s._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let o=s.getPropertyOptions(n),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:F;this._$Em=n;let a=r.fromAttribute(t,o.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,t,s,n=!1,o){if(e!==void 0){let r=this.constructor;if(n===!1&&(o=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??fe)(o,t)||s.useDefault&&s.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:n,wrapped:o},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[n,o]of s){let{wrapped:r}=o,a=this[n];r!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[P("elementProperties")]=new Map,g[P("finalized")]=new Map,Ve?.({ReactiveElement:g}),(N.reactiveElementVersions??=[]).push("2.1.2");var Y=globalThis,_e=i=>i,B=Y.trustedTypes,$e=B?B.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ae="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,Se="?"+_,Ge=`<${Se}>`,y=document,H=()=>y.createComment(""),T=i=>i===null||typeof i!="object"&&typeof i!="function",Z=Array.isArray,Je=i=>Z(i)||typeof i?.[Symbol.iterator]=="function",K=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,be=/-->/g,ve=/>/g,b=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ye=/'/g,ke=/"/g,we=/^(?:script|style|textarea|title)$/i,X=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),h=X(1),ut=X(2),pt=X(3),k=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),xe=new WeakMap,v=y.createTreeWalker(y,129);function Ee(i,e){if(!Z(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return $e!==void 0?$e.createHTML(e):e}var Qe=(i,e)=>{let t=i.length-1,s=[],n,o=e===2?"<svg>":e===3?"<math>":"",r=C;for(let a=0;a<t;a++){let l=i[a],u,p,d=-1,m=0;for(;m<l.length&&(r.lastIndex=m,p=r.exec(l),p!==null);)m=r.lastIndex,r===C?p[1]==="!--"?r=be:p[1]!==void 0?r=ve:p[2]!==void 0?(we.test(p[2])&&(n=RegExp("</"+p[2],"g")),r=b):p[3]!==void 0&&(r=b):r===b?p[0]===">"?(r=n??C,d=-1):p[1]===void 0?d=-2:(d=r.lastIndex-p[2].length,u=p[1],r=p[3]===void 0?b:p[3]==='"'?ke:ye):r===ke||r===ye?r=b:r===be||r===ve?r=C:(r=b,n=void 0);let f=r===b&&i[a+1].startsWith("/>")?" ":"";o+=r===C?l+Ge:d>=0?(s.push(u),l.slice(0,d)+Ae+l.slice(d)+_+f):l+_+(d===-2?a:f)}return[Ee(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},L=class i{constructor({strings:e,_$litType$:t},s){let n;this.parts=[];let o=0,r=0,a=e.length-1,l=this.parts,[u,p]=Qe(e,t);if(this.el=i.createElement(u,s),v.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=v.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(let d of n.getAttributeNames())if(d.endsWith(Ae)){let m=p[r++],f=n.getAttribute(d).split(_),U=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:U[2],strings:f,ctor:U[1]==="."?V:U[1]==="?"?G:U[1]==="@"?J:A}),n.removeAttribute(d)}else d.startsWith(_)&&(l.push({type:6,index:o}),n.removeAttribute(d));if(we.test(n.tagName)){let d=n.textContent.split(_),m=d.length-1;if(m>0){n.textContent=B?B.emptyScript:"";for(let f=0;f<m;f++)n.append(d[f],H()),v.nextNode(),l.push({type:2,index:++o});n.append(d[m],H())}}}else if(n.nodeType===8)if(n.data===Se)l.push({type:2,index:o});else{let d=-1;for(;(d=n.data.indexOf(_,d+1))!==-1;)l.push({type:7,index:o}),d+=_.length-1}o++}}static createElement(e,t){let s=y.createElement("template");return s.innerHTML=e,s}};function x(i,e,t=i,s){if(e===k)return e;let n=s!==void 0?t._$Co?.[s]:t._$Cl,o=T(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,t,s)),s!==void 0?(t._$Co??=[])[s]=n:t._$Cl=n),n!==void 0&&(e=x(i,n._$AS(i,e.values),n,s)),e}var q=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,n=(e?.creationScope??y).importNode(t,!0);v.currentNode=n;let o=v.nextNode(),r=0,a=0,l=s[0];for(;l!==void 0;){if(r===l.index){let u;l.type===2?u=new R(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new Q(o,this,e)),this._$AV.push(u),l=s[++a]}r!==l?.index&&(o=v.nextNode(),r++)}return v.currentNode=y,n}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},R=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,n){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),T(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,n=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=L.createElement(Ee(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===n)this._$AH.p(t);else{let o=new q(n,this),r=o.u(this.options);o.p(t),this.T(r),this._$AH=o}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new L(e)),t}k(e){Z(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,n=0;for(let o of e)n===t.length?t.push(s=new i(this.O(H()),this.O(H()),this,this.options)):s=t[n],s._$AI(o),n++;n<t.length&&(this._$AR(s&&s._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=_e(e).nextSibling;_e(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},A=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,n,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(e,t=this,s,n){let o=this.strings,r=!1;if(o===void 0)e=x(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==k,r&&(this._$AH=e);else{let a=e,l,u;for(e=o[0],l=0;l<o.length-1;l++)u=x(this,a[s+l],t,l),u===k&&(u=this._$AH[l]),r||=!T(u)||u!==this._$AH[l],u===c?e=c:e!==c&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}r&&!n&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},V=class extends A{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}},G=class extends A{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}},J=class extends A{constructor(e,t,s,n,o){super(e,t,s,n,o),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??c)===k)return;let s=this._$AH,n=e===c&&s!==c||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==c&&(s===c||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Q=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}};var Ye=Y.litHtmlPolyfillSupport;Ye?.(L,R),(Y.litHtmlVersions??=[]).push("3.3.3");var Pe=(i,e,t)=>{let s=t?.renderBefore??e,n=s._$litPart$;if(n===void 0){let o=t?.renderBefore??null;s._$litPart$=n=new R(e.insertBefore(H(),o),o,void 0,t??{})}return n._$AI(i),n};var ee=globalThis,$=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};$._$litElement$=!0,$.finalized=!0,ee.litElementHydrateSupport?.({LitElement:$});var Ze=ee.litElementPolyfillSupport;Ze?.({LitElement:$});(ee.litElementVersions??=[]).push("4.2.2");var Xe=i=>i?{home_id:i}:{};async function Ce(i,e){return i.callWS({type:"home_3d/building/get",...Xe(e)})}function He(i){return i.callWS({type:"home_3d/homes/list"})}var te="#48cdeb";function et(i,e){return(i??"").trim().toLowerCase()===(e??"").trim().toLowerCase()}function tt(i,e){return!!i&&!et(i,e)}function Te(i){return tt(i.value,i.fallback)?h`<button
    type="button"
    class="fp3d-colour-reset"
    title=${i.label}
    aria-label=${i.label}
    ?disabled=${i.disabled}
    @click=${e=>{e.preventDefault(),e.stopPropagation(),i.onReset()}}
  >
    ↺
  </button>`:c}var Le=E`
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
`;var se=["pool"];function ne(){try{let i=new URLSearchParams(location.search).get("fp3d_lab");return i==="1"?localStorage.setItem("home3d.lab","1"):i==="0"&&localStorage.removeItem("home3d.lab"),localStorage.getItem("home3d.lab")==="1"}catch{return!1}}var I=["view","walls","floors","temperature","humidity","co2"];var S=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:M,pending:ie}=S;var st="home3d.language";function nt(i){S.chosen=i&&i!=="auto"&&/^[a-z]{2,3}$/i.test(i)?i.toLowerCase():null}function Re(){if(S.chosen===void 0)try{nt(localStorage.getItem(st))}catch{S.chosen=null}return S.chosen??null}function z(i){let e=(Re()??i??navigator.language??"en").toLowerCase(),t=e.startsWith("no")?"nb":e.split(/[-_]/)[0];return t==="en"||!/^[a-z]{2,3}$/.test(t)?null:t}function re(i){let e=z(i);return!e||M.has(e)}var oe="home3d.lang.";function it(i){try{let e=JSON.parse(localStorage.getItem(oe+i)??"null");return e&&typeof e.hash=="string"&&e.strings&&typeof e.strings=="object"?e:null}catch{return null}}function ot(i,e,t){try{Object.keys(t).length?localStorage.setItem(oe+i,JSON.stringify({hash:e,strings:t})):localStorage.removeItem(oe+i)}catch{}}async function rt(i,e){if(!e?.callWS)return{};let t=it(i);try{let s=await e.callWS({type:"home_3d/languages/get",language:i,...t?{hash:t.hash}:{}});return s.strings&&typeof s.strings=="object"?(ot(i,s.hash,s.strings),s.strings):t&&s.hash===t.hash?t.strings:{}}catch{return t?.strings??{}}}function Ie(i,e,t=!1){let s=z(i);if(!s||M.has(s)&&!t)return Promise.resolve();let n=ie.get(s);return n||(n=rt(s,e).then(o=>{M.set(s,o)}).finally(()=>ie.delete(s)),ie.set(s,n)),n}function Me(i){let e=Re()??i?.language??navigator.language??"en",t=z(e);if(!t)return/^en(?:-|$)/i.test(e)?e:"en";let s=M.get(t);for(let n in s)return e;return"en"}function Ue(i,e,t={}){let s=z(i?.language??navigator.language),o=(s?M.get(s):void 0)?.[e]??S.en?.[e]??e;for(let[r,a]of Object.entries(t))o=o.replace(`{${r}}`,String(a));return o}var Oe={height:420,view:"3d",walls:"auto",explode:!0,roof_fade:!0,roof:!0,camera_wall:!1,quality:"auto",stats:!1,markers:"important",heatmap:"none",theme:"theme",energy:!0,room_panel:!0,fill:!1,controls:!1,fullscreen_button:!1,room_names:!0,floor_stack:"dim",alerts:!0,alert_jump:!1,director:!1,voice:!1,scenes:!0,motion_trail:!1,time_travel:!1,household_card:!0,rack_cards:!0,weather:!0,idle_return:0,controls_hidden:!1,controls_hide_after:0,marker_names:!1,central:!0,pets:!0,ghost:!0,night:"off",idle_orbit:!1},ae=class extends ${static properties={hass:{attribute:!1},_config:{state:!0},_floors:{state:!0}};floorsOf=void 0;homesAsked=!1;constructor(){super(),this._config={type:"custom:home-3d-card"},this._floors=[],this._homes=[]}setConfig(e){this._config=e}willUpdate(){this.hass&&!re(this.hass.language)&&Ie(this.hass.language,this.hass).then(()=>this.requestUpdate());let e=Me(this.hass);this.getAttribute("lang")!==e&&this.setAttribute("lang",e);let t=this._config.home??"";this.hass&&this.floorsOf!==t&&(this.floorsOf=t,Ce(this.hass,t||void 0).then(s=>{this.floorsOf===t&&(this._floors=s.building.floors.map(n=>({id:n.id,name:n.name})))},()=>{})),this.hass&&!this.homesAsked&&(this.homesAsked=!0,He(this.hass).then(s=>this._homes=s.homes,()=>{}))}t(e,t){return Ue(this.hass,e,t)}get value(){return{...Oe,...this._config}}set(e,t){let s={...this._config};t===void 0||t===""||Oe[e]===t?delete s[e]:s[e]=t,this._config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}select(e,t,s,n){return h`<label class="field"
      >${this.t(t)}
      <select @change=${o=>this.set(e,o.target.value)}>
        ${s.map(([o,r])=>h`<option value=${o} ?selected=${o===n}>${this.t(r)}</option>`)}
      </select>
    </label>`}toggle(e,t,s){let n=this.value[e];return h`<label class="toggle">
      <input type="checkbox" .checked=${n} @change=${o=>this.set(e,o.target.checked)} />
      <span>${this.t(t)}${s?h`<small>${this.t(s)}</small>`:c}</span>
    </label>`}renderThumbsToggle(){let e=!this._config.floor,t=this._config.floor_thumbs??e;return h`<label class="toggle">
      <input
        type="checkbox"
        .checked=${t}
        @change=${s=>{let n=s.target.checked,o={...this._config};n===e?delete o.floor_thumbs:o.floor_thumbs=n,this._config=o,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0}))}}
      />
      <span>${this.t("card_floor_thumbs")}<small>${this.t(this._config.floor?"card_floor_thumbs_hint_start":"card_floor_thumbs_hint")}</small></span>
    </label>`}renderControls(){let e=this._config.controls,t=!!e&&(e===!0||e.length>0),s=e===!0?[...I]:Array.isArray(e)?e:[],n=a=>this.set("controls",a.length===I.length?!0:a.length?a:void 0),o=this.value,r=[0,10,30,60,120];return h`<label class="toggle">
        <input type="checkbox" .checked=${t} @change=${a=>this.set("controls",a.target.checked?!0:void 0)} />
        <span>${this.t("card_controls")}<small>${this.t("card_controls_hint")}</small></span>
      </label>
      <label class="toggle">
        <input type="checkbox" .checked=${o.central} @change=${a=>this.set("central",a.target.checked?void 0:!1)} />
        <span>${this.t("card_central")}<small>${this.t("card_central_hint")}</small></span>
      </label>
      ${!se.includes("fun_pets")||ne()?h`<label class="toggle">
            <input type="checkbox" .checked=${o.pets} @change=${a=>this.set("pets",a.target.checked?void 0:!1)} />
            <span>${this.t("card_pets")}<small>${this.t("card_pets_hint")}</small></span>
          </label>`:c}
      ${!se.includes("fun_halloween")||ne()?h`<label class="toggle">
            <input type="checkbox" .checked=${o.ghost} @change=${a=>this.set("ghost",a.target.checked?void 0:!1)} />
            <span>${this.t("card_ghost")}<small>${this.t("card_ghost_hint")}</small></span>
          </label>`:c}
      <label class="toggle">
        <input type="checkbox" .checked=${o.marker_names} @change=${a=>this.set("marker_names",a.target.checked?!0:void 0)} />
        <span>${this.t("card_marker_names")}<small>${this.t("card_marker_names_hint")}</small></span>
      </label>
      <label class="toggle">
        <input type="checkbox" .checked=${o.controls_hidden} @change=${a=>this.set("controls_hidden",a.target.checked?!0:void 0)} />
        <span>${this.t("card_controls_hidden")}<small>${this.t("card_controls_hidden_hint")}</small></span>
      </label>
      <label class="field"
        >${this.t("card_controls_hide_after")}
        <select @change=${a=>this.set("controls_hide_after",Number(a.target.value)||void 0)}>
          ${r.map(a=>h`<option value=${a} ?selected=${o.controls_hide_after===a}>${a?this.t("card_hide_after_s",{n:a}):this.t("card_idle_off")}</option>`)}
        </select>
      </label>
      ${t?h`<div class="sub">
            ${I.map(a=>h`<label class="chip">
                <input
                  type="checkbox"
                  .checked=${s.includes(a)}
                  @change=${l=>n(l.target.checked?I.filter(u=>u===a||s.includes(u)):s.filter(u=>u!==a))}
                />
                ${this.t(`card_control_${a}`)}
              </label>`)}
          </div>`:c}`}renderKiosk(){let e=this.value,t=e.night==="off"||e.night==="sun"?e.night:"time",s=[0,1,2,5,10];return h`<h3>${this.t("card_section_kiosk")}</h3>
      <div class="grid">
        <label class="field"
          >${this.t("card_idle_return")}
          <select @change=${n=>this.set("idle_return",Number(n.target.value)||void 0)}>
            ${s.map(n=>h`<option value=${n*60} ?selected=${e.idle_return===n*60}>${n?this.t("card_idle_min",{n}):this.t("card_idle_off")}</option>`)}
          </select>
        </label>
        <label class="field"
          >${this.t("card_night")}
          <select @change=${n=>this.set("night",{off:void 0,sun:"sun",time:"22:00-06:00"}[n.target.value])}>
            <option value="off" ?selected=${t==="off"}>${this.t("card_night_off")}</option>
            <option value="sun" ?selected=${t==="sun"}>${this.t("card_night_sun")}</option>
            <option value="time" ?selected=${t==="time"}>${this.t("card_night_time")}</option>
          </select>
        </label>
        ${t==="time"?h`<label class="field wide"
              >${this.t("card_night_range")}
              <input
                type="text"
                pattern="\\d{1,2}:\\d{2}-\\d{1,2}:\\d{2}"
                placeholder="22:00-06:00"
                .value=${e.night}
                @change=${n=>this.set("night",n.target.value.trim()||void 0)}
              />
            </label>`:c}
      </div>
      <p class="hint">${this.t("card_idle_hint")}</p>
      ${this.toggle("idle_orbit","card_idle_orbit","card_idle_orbit_hint")}
      <div class="grid">
        <label class="field wide"
          >${this.t("card_dashboard")}
          <input type="text" placeholder="/lovelace/home" .value=${e.dashboard??""} @change=${n=>this.set("dashboard",n.target.value.trim()||void 0)} />
        </label>
        <label class="field wide"
          >${this.t("card_dashboard_label")}
          <input type="text" .value=${e.dashboard_label??""} @change=${n=>this.set("dashboard_label",n.target.value.trim()||void 0)} />
        </label>
      </div>
      <p class="hint">${this.t("card_dashboard_hint")}</p>`}renderFeatures(){let e=this.value,t=Object.keys(this.hass?.states??{}).filter(s=>s.startsWith("weather.")).sort();return h`<h3>${this.t("card_section_features")}</h3>
      ${this.toggle("alerts","card_alerts","card_alerts_hint")} ${this.toggle("alert_jump","card_alert_jump","card_alert_jump_hint")}
      ${this.toggle("director","card_director","card_director_hint")}
      ${this.toggle("voice","card_voice","card_voice_hint")}
      <div class="grid">
        <label class="field wide"
          >${this.t("screen_name")}
          <input type="text" placeholder=${this.t("screen_name_placeholder")} .value=${e.screen??""} @change=${s=>this.set("screen",s.target.value.trim()||void 0)} />
        </label>
      </div>
      <p class="hint">${this.t("screen_name_hint")}</p>
      ${this.toggle("scenes","card_scenes","card_scenes_hint")}
      ${this.toggle("motion_trail","card_motion_trail","card_motion_trail_hint")} ${this.toggle("camera_wall","card_camera_wall","card_camera_wall_hint")}
      ${this.toggle("time_travel","card_time_travel","card_time_travel_hint")}
      ${this.toggle("household_card","card_household","card_household_hint")}
      ${this.toggle("rack_cards","card_rack_cards","card_rack_cards_hint")}
      ${this.toggle("weather","card_weather","card_weather_hint")}
      ${e.weather!==!1?h`<div class="grid">
            <label class="field wide"
              >${this.t("weather_entity")}
              <select @change=${s=>this.set("weather_entity",s.target.value||void 0)}>
                <option value="" ?selected=${!e.weather_entity}>${this.t("card_weather_plan")}</option>
                ${t.map(s=>h`<option value=${s} ?selected=${s===e.weather_entity}>${String(this.hass?.states[s]?.attributes.friendly_name??s)}</option>`)}
              </select>
            </label>
          </div>`:c}`}render(){if(this.hass&&!re(this.hass.language))return c;let e=this.value,t=e.flows===void 0?"switch":e.flows?"on":"off",s=e.holograms===void 0?"switch":e.holograms?"on":"off";return h`
      <h3>${this.t("card_section_view")}</h3>
      <div class="grid">
        ${this._homes.length>1||this._config.home?h`<label class="field wide"
              >${this.t("card_home")}
              <select
                @change=${n=>{this.set("floor",void 0),this.set("room",void 0),this.set("home",n.target.value||void 0)}}
              >
                <option value="" ?selected=${!e.home}>${this.t("card_home_active")}</option>
                ${this._homes.map(n=>h`<option value=${n.id} ?selected=${n.id===e.home}>${n.name}</option>`)}
                ${e.home&&!this._homes.some(n=>n.id===e.home)?h`<option value=${e.home} selected>${e.home}</option>`:c}
              </select>
            </label>`:c}
        <label class="field wide"
          >${this.t("card_floor")}
          <select @change=${n=>this.set("floor",n.target.value||void 0)}>
            <option value="" ?selected=${!e.floor}>${this.t("card_floor_house")}</option>
            ${this._floors.map(n=>h`<option value=${n.id} ?selected=${n.id===e.floor}>${n.name}</option>`)}
            ${e.floor&&!this._floors.some(n=>n.id===e.floor)?h`<option value=${e.floor} selected>${e.floor}</option>`:c}
          </select>
        </label>
        <label class="field"
          >${this.t("card_size")}
          <select @change=${n=>this.set("fill",n.target.value==="fill")}>
            <option value="fixed" ?selected=${!e.fill}>${this.t("card_size_fixed")}</option>
            <option value="fill" ?selected=${e.fill}>${this.t("card_size_fill")}</option>
          </select>
        </label>
        <label class="field" ?hidden=${e.fill}
          >${this.t("card_height")}
          <input
            type="number"
            min="150"
            max="2000"
            step="10"
            .value=${String(e.height)}
            @change=${n=>{let o=Math.round(Number(n.target.value));o>100&&this.set("height",o)}}
          />
        </label>
        ${this.select("theme","theme",[["theme","theme_theme"],["neon","theme_neon"],["blueprint","theme_blueprint"],["day","theme_day"],["realistic","theme_realistic"],["auto","theme_auto"]],e.theme)}
        ${this.select("clock","clock",[["off","clock_off"],["tl","clock_tl"],["tr","clock_tr"],["bl","clock_bl"],["br","clock_br"]],e.clock??"off")}
        <label class="field"
          >${this.t("accent")}
          <span class="accent-pick"
            ><input type="color" .value=${this._config.accent??te} @input=${n=>this.set("accent",n.target.value)} />
            ${Te({value:this._config.accent,fallback:te,label:this.t("accent_reset"),onReset:()=>this.set("accent",void 0)})}</span
          >
        </label>
        ${this.select("view","card_view",[["3d","card_view_3d"],["2d","card_view_2d"]],e.view)}
        ${this.select("walls","card_walls",[["auto","walls_auto"],["cut","walls_cut"]],e.walls)}
        ${this.select("quality","quality",[["auto","quality_auto"],["low","quality_low"],["high","quality_high"]],e.quality)}
        ${this.select("floor_stack","card_floor_stack",[["dim","floor_stack_dim"],["stacked","floor_stack_stacked"],["single","floor_stack_single"]],e.floor_stack)}
      </div>
      ${e.fill?h`<p class="hint">${this.t("card_fill_hint")}</p>`:c}
      <p class="hint">${this.t("card_quality_hint")}</p>

      <h3>${this.t("card_section_show")}</h3>
      <div class="grid">
        ${this.select("markers","markers",[["none","markers_none"],["room","markers_room"],["important","markers_important"],["all","markers_all"]],e.markers)}
        ${this.select("marker_size","pin_size",[["small","pin_size_small"],["normal","pin_size_normal"],["large","pin_size_large"]],e.marker_size??"normal")}
        ${this.select("heatmap","heatmap",[["none","heat_off"],["temperature","heat_temperature"],["humidity","heat_humidity"],["co2","heat_co2"],["values","heat_values"]],e.heatmap)}
        <label class="field wide"
          >${this.t("flows")}
          <select @change=${n=>{let o=n.target.value;this.set("flows",o==="switch"?void 0:o==="on")}}>
            <option value="switch" ?selected=${t==="switch"}>${this.t("card_flows_switch")}</option>
            <option value="on" ?selected=${t==="on"}>${this.t("card_flows_on")}</option>
            <option value="off" ?selected=${t==="off"}>${this.t("card_flows_off")}</option>
          </select>
        </label>
        <label class="field wide"
          >${this.t("holos")}
          <select @change=${n=>{let o=n.target.value;this.set("holograms",o==="switch"?void 0:o==="on")}}>
            <option value="switch" ?selected=${s==="switch"}>${this.t("card_flows_switch")}</option>
            <option value="on" ?selected=${s==="on"}>${this.t("card_flows_on")}</option>
            <option value="off" ?selected=${s==="off"}>${this.t("card_flows_off")}</option>
          </select>
        </label>
      </div>
      ${this.renderControls()}
      ${this.renderThumbsToggle()} ${this.toggle("room_names","card_room_names")}
      ${this.toggle("energy","card_energy")} ${this.toggle("room_panel","card_room_panel","card_room_panel_hint")}
      ${this.toggle("fullscreen_button","card_fullscreen_button","card_fullscreen_button_hint")}
      ${this.toggle("explode","card_explode")} ${this.toggle("roof","card_roof","card_roof_hint")} ${this.toggle("roof_fade","card_roof_fade","card_roof_fade_hint")} ${this.toggle("stats","card_stats","card_stats_hint")}
      ${this.renderFeatures()}
      ${this.renderKiosk()}
    `}static styles=E`
    .accent-pick {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    ${Le}
    :host {
      display: block;
      color: var(--primary-text-color);
    }
    h3 {
      margin: 18px 0 8px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--secondary-text-color);
    }
    h3:first-child {
      margin-top: 0;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px 12px;
    }
    [hidden] {
      display: none;
    }
    .wide {
      grid-column: 1 / -1;
    }
    .field {
      display: grid;
      gap: 4px;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    select,
    input[type="number"],
    input[type="text"] {
      box-sizing: border-box;
      width: 100%;
      min-height: 40px;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
      font-size: 14px;
    }
    .toggle {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      font-size: 14px;
      cursor: pointer;
    }
    .toggle input {
      flex: none;
      width: 18px;
      height: 18px;
      margin: 1px 0 0;
      accent-color: var(--primary-color);
    }
    .sub {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
      margin: -2px 0 6px 28px;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      cursor: pointer;
    }
    .chip input {
      width: 16px;
      height: 16px;
      margin: 0;
      accent-color: var(--primary-color);
    }
    .toggle small,
    .hint {
      display: block;
      margin: 2px 0 0;
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    @media (max-width: 450px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `};he("home-3d-card-editor",ae);export{ae as Floorplan3dCardEditor};
