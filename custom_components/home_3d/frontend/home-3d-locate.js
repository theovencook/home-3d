var Me=Symbol.for("home-3d.custom-elements");function se(){let i=globalThis;return i[Me]??={defined:new Map,watching:!1}}function ie(){let i=globalThis.customElements;if(i){for(let[e,t]of se().defined)if(t.registry!==i&&(t.registry=i,!i.get(e)))try{i.define(e,t.cls)}catch(n){console.warn(`Home 3D: could not define ${e} in the page's element registry`,n)}}}function Te(i,e){if(typeof document>"u")return;let t;try{t=document.createElement(i)}catch{return}if(Object.getPrototypeOf(t)===HTMLElement.prototype||t instanceof HTMLUnknownElement||!(t instanceof HTMLElement))return;let r=t.constructor;return r===e?void 0:r}function le(i,e){ie();let t=globalThis.customElements;if(t.get(i))return!1;let n=se(),r=Te(i,e);if(r){try{t.define(i,r),n.defined.set(i,{cls:r,registry:t})}catch(o){console.warn(`Home 3D: could not define ${i} in the page's element registry`,o)}return!1}return t.define(i,e),n.defined.set(i,{cls:e,registry:t}),n.watching||(n.watching=!0,t.whenDefined("home-assistant").then(ie)),!0}var C=globalThis,I=C.ShadowRoot&&(C.ShadyCSS===void 0||C.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),ae=new WeakMap,R=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(I&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ae.set(t,e))}return e}toString(){return this.cssText}},ce=i=>new R(typeof i=="string"?i:i+"",void 0,D),W=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new R(t,i,D)},ue=(i,e)=>{if(I)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=C.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},U=I?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ce(t)})(i):i;var{is:Oe,defineProperty:Le,getOwnPropertyDescriptor:Ce,getOwnPropertyNames:Ie,getOwnPropertySymbols:ze,getPrototypeOf:Fe}=Object,z=globalThis,pe=z.trustedTypes,He=pe?pe.emptyScript:"",Ve=z.reactiveElementPolyfillSupport,A=(i,e)=>i,B={toAttribute(i,e){switch(e){case Boolean:i=i?He:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},he=(i,e)=>!Oe(i,e),de={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:he};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Le(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:o}=Ce(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let a=r?.call(this);o?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(A("elementProperties")))return;let e=Fe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(A("properties"))){let t=this.properties,n=[...Ie(t),...ze(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(U(r))}else e!==void 0&&t.push(U(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ue(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:B).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let o=n.getPropertyOptions(r),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:B;this._$Em=r;let a=s.fromAttribute(t,o.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,o){if(e!==void 0){let s=this.constructor;if(r===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??he)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,o]of n){let{wrapped:s}=o,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[A("elementProperties")]=new Map,b[A("finalized")]=new Map,Ve?.({ReactiveElement:b}),(z.reactiveElementVersions??=[]).push("2.1.2");var J=globalThis,me=i=>i,F=J.trustedTypes,ge=F?F.createPolicy("lit-html",{createHTML:i=>i}):void 0,ve="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,we="?"+_,Ne=`<${we}>`,w=document,M=()=>w.createComment(""),T=i=>i===null||typeof i!="object"&&typeof i!="function",X=Array.isArray,De=i=>X(i)||typeof i?.[Symbol.iterator]=="function",j=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,be=/>/g,x=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_e=/'/g,ye=/"/g,$e=/^(?:script|style|textarea|title)$/i,Q=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),u=Q(1),ct=Q(2),ut=Q(3),$=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),xe=new WeakMap,v=w.createTreeWalker(w,129);function ke(i,e){if(!X(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ge!==void 0?ge.createHTML(e):e}var We=(i,e)=>{let t=i.length-1,n=[],r,o=e===2?"<svg>":e===3?"<math>":"",s=P;for(let a=0;a<t;a++){let l=i[a],c,d,p=-1,g=0;for(;g<l.length&&(s.lastIndex=g,d=s.exec(l),d!==null);)g=s.lastIndex,s===P?d[1]==="!--"?s=fe:d[1]!==void 0?s=be:d[2]!==void 0?($e.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=x):d[3]!==void 0&&(s=x):s===x?d[0]===">"?(s=r??P,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?x:d[3]==='"'?ye:_e):s===ye||s===_e?s=x:s===fe||s===be?s=P:(s=x,r=void 0);let f=s===x&&i[a+1].startsWith("/>")?" ":"";o+=s===P?l+Ne:p>=0?(n.push(c),l.slice(0,p)+ve+l.slice(p)+_+f):l+_+(p===-2?a:f)}return[ke(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},O=class i{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,d]=We(e,t);if(this.el=i.createElement(c,n),v.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=v.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(ve)){let g=d[s++],f=r.getAttribute(p).split(_),h=/([.?@])?(.*)/.exec(g);l.push({type:1,index:o,name:h[2],strings:f,ctor:h[1]==="."?K:h[1]==="?"?Y:h[1]==="@"?q:S}),r.removeAttribute(p)}else p.startsWith(_)&&(l.push({type:6,index:o}),r.removeAttribute(p));if($e.test(r.tagName)){let p=r.textContent.split(_),g=p.length-1;if(g>0){r.textContent=F?F.emptyScript:"";for(let f=0;f<g;f++)r.append(p[f],M()),v.nextNode(),l.push({type:2,index:++o});r.append(p[g],M())}}}else if(r.nodeType===8)if(r.data===we)l.push({type:2,index:o});else{let p=-1;for(;(p=r.data.indexOf(_,p+1))!==-1;)l.push({type:7,index:o}),p+=_.length-1}o++}}static createElement(e,t){let n=w.createElement("template");return n.innerHTML=e,n}};function k(i,e,t=i,n){if(e===$)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,o=T(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=k(i,r._$AS(i,e.values),r,n)),e}var G=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??w).importNode(t,!0);v.currentNode=r;let o=v.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new L(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Z(o,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(o=v.nextNode(),s++)}return v.currentNode=w,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},L=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),T(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):De(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=O.createElement(ke(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let o=new G(r,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=xe.get(e.strings);return t===void 0&&xe.set(e.strings,t=new O(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let o of e)r===t.length?t.push(n=new i(this.O(M()),this.O(M()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=me(e).nextSibling;me(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}_$AI(e,t=this,n,r){let o=this.strings,s=!1;if(o===void 0)e=k(this,e,t,0),s=!T(e)||e!==this._$AH&&e!==$,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=k(this,a[n+l],t,l),c===$&&(c=this._$AH[l]),s||=!T(c)||c!==this._$AH[l],c===m?e=m:e!==m&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},K=class extends S{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},Y=class extends S{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},q=class extends S{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??m)===$)return;let n=this._$AH,r=e===m&&n!==m||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==m&&(n===m||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Z=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}};var Ue=J.litHtmlPolyfillSupport;Ue?.(O,L),(J.litHtmlVersions??=[]).push("3.3.3");var Se=(i,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let o=t?.renderBefore??null;n._$litPart$=r=new L(e.insertBefore(M(),o),o,void 0,t??{})}return r._$AI(i),r};var ee=globalThis,y=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Se(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};y._$litElement$=!0,y.finalized=!0,ee.litElementHydrateSupport?.({LitElement:y});var Be=ee.litElementPolyfillSupport;Be?.({LitElement:y});(ee.litElementVersions??=[]).push("4.2.2");var E=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:je,pending:$t}=E;var Ge="home3d.language";function Ke(i){E.chosen=i&&i!=="auto"&&/^[a-z]{2,3}$/i.test(i)?i.toLowerCase():null}function Ye(){if(E.chosen===void 0)try{Ke(localStorage.getItem(Ge))}catch{E.chosen=null}return E.chosen??null}function qe(i){let e=(Ye()??i??navigator.language??"en").toLowerCase(),t=e.startsWith("no")?"nb":e.split(/[-_]/)[0];return t==="en"||!/^[a-z]{2,3}$/.test(t)?null:t}function Ee(i,e,t={}){let n=qe(i?.language??navigator.language),o=(n?je.get(n):void 0)?.[e]??E.en?.[e]??e;for(let[s,a]of Object.entries(t))o=o.replace(`{${s}}`,String(a));return o}var Re=globalThis;function Ze(i){let e=i??{};return String(e.message??e.error?.message??e.code??i)}var H,te=160;function Je(i){if(i.length<=te)return i;let e=i.slice(0,te),t=e.lastIndexOf(" ");return`${(t>te*.6?e.slice(0,t):e).trimEnd()} \u2026`}function Xe(i){if(Re.__fp3dFailureSink)return Re.__fp3dFailureSink(i);if(typeof document>"u")return;let e=document.fullscreenElement;for(;e?.shadowRoot?.fullscreenElement;)e=e.shadowRoot.fullscreenElement;let t=e??document.body,n=t.querySelector(":scope > .fp3d-failure");n||(n=document.createElement("div"),n.className="fp3d-failure",n.setAttribute("role","alert"),n.style.cssText="position:fixed;left:50%;top:calc(64px + env(safe-area-inset-top, 0px));transform:translateX(-50%);cursor:pointer;z-index:2147483000;max-width:min(92vw,520px);padding:12px 16px;border-radius:12px;background:#8a1f1f;color:#fff;font:14px/1.35 system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.45);",t.appendChild(n));let r=n;r.textContent=Je(i),r.title=i,r.onclick=()=>{r.textContent=i,clearTimeout(H),H=setTimeout(()=>r.remove(),12e3)},clearTimeout(H),H=setTimeout(()=>r.remove(),6e3)}function ne(i,e,t,n,r){let o=s=>Xe(r(Ze(s)));try{Promise.resolve(i.callService(e,t,n,void 0,!1)).catch(o)}catch(s){o(s)}}var et={type:"none",pitch:35,overhang:.4},Wt={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...et}};var tt=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var Qe=new Set([...tt,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function V(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[a,l]=e[r];s>i[1]!=l>i[1]&&i[0]<(a-o)*(i[1]-s)/(l-s)+o&&(t=!t)}return t}function Ae(i){return i.floors.flatMap(e=>e.rooms.map(t=>({id:t.id,name:t.name,floor:e.name,area_id:t.area_id??null})))}function re(i,e,t,n){return i.floors.find(o=>o.id===e)?.rooms.find(o=>V([t,n],o.points))?.id??null}function Pe(i){let e=i.trim().replace(/^irk:/i,""),t=e.replace(/[\s:-]/g,"");if(/^[0-9a-f]{32}$/i.test(t))return t.toLowerCase();try{let n=atob(e.replace(/\s/g,""));if(n.length===16)return[...n].map(r=>r.charCodeAt(0).toString(16).padStart(2,"0")).join("")}catch{}return null}var nt=/^([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})_(\d{1,5})_(\d{1,5})$/i;function rt(i){let e=[],t=n=>n.toString(16).padStart(4,"0");for(let[n,r]of Object.entries(i.states)){if(!n.startsWith("sensor."))continue;let o=r.attributes??{};if(!("Transmitting power"in o))continue;let s=nt.exec(String(o.id??""));if(!s)continue;let a=Number(s[6]),l=Number(s[7]);if(a>65535||l>65535)continue;let c=i.entities?.[n]?.device_id??null,d=c?i.devices?.[c]:void 0,p=String(o.friendly_name??n).replace(/\s*BLE[\s_-]*Transmitter\s*$/i,""),g=c&&Object.entries(i.states).find(([f,h])=>f.startsWith("person.")&&(h.attributes?.device_trackers??[]).some(N=>i.entities?.[N]?.device_id===c))?.[0]||null;e.push({entity:n,name:d?.name_by_user||d?.name||p,key:(s.slice(1,6).join("")+t(a)+t(l)).toLowerCase(),state:String(r.state),power:String(o["Transmitting power"]??""),mode:String(o["Advertise mode"]??""),person:g})}return e.sort((n,r)=>n.name.localeCompare(r.name))}var oe=class extends y{static properties={hass:{attribute:!1},building:{attribute:!1},_step:{state:!0},_cfg:{state:!0},_near:{state:!0},_live:{state:!0},_quality:{state:!0},_error:{state:!0}};constructor(){super(),this._step="scanners",this._cfg=null,this._near=[],this._live=null,this._quality=null,this._error=""}timer=0;hassSource=null;setLook=null;unsub=null;get t(){let e=this.hass;return new Proxy({},{get:(t,n)=>Ee(e,`loc_${String(n)}`)})}get voiceLanguage(){return/^(de|en)/.test(this.hass?.language??"en")}tr(e,t){return e.replace(/\{(\w+)\}/g,(n,r)=>String(t[r]??""))}get rooms(){return Ae(this.building)}connectedCallback(){super.connectedCallback(),this.closed=!1,this.load().catch(e=>this._error=`load: ${e?.stack??String(e)}`),this.timer=window.setInterval(()=>{this.tick()},1e3),this.hass.connection.subscribeMessage(e=>this._live=e,{type:"home_3d/locate/subscribe"}).then(e=>{this.closed?e():this.unsub=e}).catch(()=>{})}closed=!1;disconnectedCallback(){super.disconnectedCallback(),this.closed=!0,window.clearInterval(this.timer),this.unsub?.(),this.unsub=null}async call(e,t=!1){try{return t||(this._error=""),await this.hass.callWS(e)}catch(n){return this._error=n.message??String(n),null}}async load(){let e=await this.call({type:"home_3d/locate/config"});if(!e)return;let t={...e.scanner_rooms},n=!1;for(let r of e.scanners){if(t[r.source])continue;let o=this.guessRoom(r)??e.scanner_hints?.[r.source]??null;o&&(t[r.source]=o,n=!0)}this._cfg={...e,scanner_rooms:t},n&&await this.save({scanner_rooms:t})}guessRoom(e){let t=c=>typeof c=="string"&&!!e.device_id&&this.hass.entities?.[c]?.device_id===e.device_id;if(e.device_id)for(let c of this.building.floors){for(let d of c.placements){let p=t(d.entity_id)?re(this.building,c.id,d.x,d.z):null;if(p)return p}for(let d of c.furniture){if(!Object.values(d).some(t))continue;let p=re(this.building,c.id,d.x,d.z);if(p)return p}}let n=e.device_id??Object.values(this.hass.devices??{}).find(c=>[c.name_by_user,c.name].some(d=>d&&d.toLowerCase()===e.name.toLowerCase()))?.id??null,r=n?Object.values(this.hass.entities??{}).filter(c=>c.device_id===n&&c.area_id).map(c=>c.area_id):[],o=e.area_id??(n?this.hass.devices?.[n]?.area_id:null)??r[0]??null;if(o){let c=this.rooms.find(d=>d.area_id===o);if(c)return c.id}let s=c=>c.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g," "),a=` ${s(e.name)} `,l=this.rooms.filter(c=>s(c.name).trim().length>=3&&a.includes(s(c.name).trim()));return l.sort((c,d)=>s(d.name).length-s(c.name).length),l.length&&l.filter(c=>s(c.name)===s(l[0].name)).length===1?l[0].id:null}async save(e){let t=await this.call({type:"home_3d/locate/configure",...e});t&&(this._cfg={...t,scanner_rooms:{...t.scanner_rooms}})}async tick(){let e=this.hassSource?.();if(e&&e!==this.hass&&(this.hass=e),this._step==="devices"&&this.nearOpen){let t=await this.call({type:"home_3d/locate/nearby"},!0);t&&(this._near=t.devices)}if(this._step==="walk"){let t=await this.call({type:"home_3d/locate/calibrate",action:"status"},!0);t&&this._cfg&&(this._cfg={...this._cfg,samples:t.samples},this._live={...this._live??{running:!0,devices:[]},calibration:t.calibration})}}render(){let e=this.t,t=this._cfg,n=[["scanners",e.s_scanners],["devices",e.s_devices],["walk",e.s_walk],["live",e.s_live]];return u`<div class="box" role="dialog" aria-label=${e.title}>
      <header>
        <b>📡 ${e.title}</b>
        <button class="x" @click=${()=>this.remove()} aria-label=${e.close}>✕</button>
      </header>
      <nav>${n.map(([r,o])=>u`<button class=${this._step===r?"on":""} @click=${()=>this._step=r}>${o}</button>`)}</nav>
      ${this._error?u`<pre class="err">${this._error}</pre>`:m}
      ${t?t.bluetooth?this.renderStep(t):u`<p>${e.no_bt}</p>`:u`<p>…</p>`}
    </div>`}renderStep(e){switch(this._step){case"scanners":return this.renderScanners(e);case"devices":return this.renderDevices(e);case"walk":return this.renderWalk(e);default:return this.renderLive(e)}}roomSelect(e,t){let n=[...new Set(this.rooms.map(r=>r.floor))];return u`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.not_placed}</option>
      ${n.map(r=>u`<optgroup label=${r}>${this.rooms.filter(o=>o.floor===r).map(o=>u`<option value=${o.id} ?selected=${o.id===e}>${o.name}</option>`)}</optgroup>`)}
    </select>`}renderScanners(e){let t=this.t,n=new Set(Object.values(e.scanner_rooms)),r=this.rooms.filter(o=>!n.has(o.id));return u`<p>${t.scanners_intro}</p>
      <ul class="list">
        ${e.scanners.map(o=>u`<li>
            <span><b>${o.name}</b><small>${o.offline?`\u26A0 ${t.offline}`:o.kind==="shelly"?"Shelly":o.kind==="esphome"?"ESPHome":"Bluetooth"}</small></span>
            ${this.roomSelect(e.scanner_rooms[o.source]??null,s=>{let a={...e.scanner_rooms};s?a[o.source]=s:delete a[o.source],this.save({scanner_rooms:a})})}
            ${e.scanner_hints?.[o.source]&&e.scanner_hints[o.source]!==e.scanner_rooms[o.source]?u`<button class="ghost" @click=${()=>{this.save({scanner_rooms:{...e.scanner_rooms,[o.source]:e.scanner_hints[o.source]}})}}>
                  ${this.tr(t.hint_room,{room:this.rooms.find(s=>s.id===e.scanner_hints[o.source])?.name??""})}
                </button>`:m}
          </li>`)}
      </ul>
      ${r.length?u`<p class="hint">${t.coverage} ${r.map(o=>o.name).join(", ")}</p>`:m}
      <p class="end"><button class="primary" @click=${()=>this._step="devices"}>${t.next} →</button></p>`}personSelect(e,t){let n=Object.keys(this.hass.states).filter(r=>r.startsWith("person."));return u`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.person}: ${this.t.none}</option>
      ${n.map(r=>u`<option value=${r} ?selected=${r===e}>${this.hass.states[r].attributes.friendly_name??r}</option>`)}
    </select>`}keyHelpers(){let e=[];for(let[t,n]of Object.entries(this.hass.states)){let r=n.attributes.options;if(!t.startsWith("select.")||!Array.isArray(r)||!r.includes("Heart Sensor")||!r.includes("Keyboard"))continue;let o=this.hass.entities?.[t]?.device_id,s=Object.values(this.hass.entities??{}).find(p=>p.device_id===o&&/_irk$/.test(p.entity_id))?.entity_id,a=s?this.hass.states[s]?.state:void 0,l=o?this.hass.devices?.[o]:void 0,c=l?.name_by_user||l?.name||String(n.attributes.friendly_name??t),d=Object.values(this.hass.entities??{}).find(p=>p.device_id===o&&/_refresh_ble_identity$/.test(p.entity_id))?.entity_id??null;e.push({name:c,select:t,option:n.state,irk:a?Pe(a):null,ours:l?.model==="home3d_key"||/home3d[ _]key/i.test(t),refresh:d})}return e.sort((t,n)=>Number(n.ours)-Number(t.ours))}notCarried=new Set;nearOpen=!1;helperId=null;helperName="";helperPerson=null;helperAdded=null;renderKeyHelper(e){let t=this.t,n=this.keyHelpers(),r=n.find(h=>h.select===this.helperId)??n[0],o=u`<div class="helper-head">
        <h4>${t.helper_title}</h4>
      </div>
      <p class="hint">${t.helper_pitch}</p>
      <p class="hint">${t.helper_android}</p>`;if(!r)return o;let s=r.option==="Heart Sensor",a=h=>ne(this.hass,"select","select_option",{entity_id:r.select,option:h},N=>N),l=h=>h.match(/../g).reverse().join(""),c=h=>!!r.irk&&!!h&&(h.toLowerCase()===r.irk||h.toLowerCase()===l(r.irk)),d=e.devices.find(h=>c(h.key))?.name??null,p=e.private_ble.find(h=>c(h.key))?.title??null,g=this.helperName||(s?"Apple Watch":"iPhone"),f=h=>`${h.slice(0,4)}\u2026${h.slice(-4)}`;return u`${o}
      ${n.length>1?u`<p class="hint">
            <select
              @change=${h=>{this.helperId=h.target.value,this.requestUpdate()}}
            >
              ${n.map(h=>u`<option value=${h.select} ?selected=${h.select===r.select}>${h.name}</option>`)}
            </select>
          </p>`:u`<p class="hint">${this.tr(t.helper_found,{name:r.name})}</p>`}
      <div class="row">
        <button class=${s?"on":""} @click=${()=>a("Heart Sensor")}>⌚ ${t.helper_watch}</button>
        <button class=${s?"":"on"} @click=${()=>a("Keyboard")}>📱 ${t.helper_phone}</button>
      </div>
      <div class="row">
        <input
          placeholder=${t.helper_name}
          title=${t.helper_name}
          .value=${this.helperName}
          @input=${h=>this.helperName=h.target.value}
        />
        ${this.personSelect(this.helperPerson,h=>{this.helperPerson=h,this.requestUpdate()})}
      </div>
      <p class="hint">${s?t.helper_watch_steps:t.helper_phone_steps}</p>
      <ul class="list">
        <li>
          <span>
            <b>${t.helper_irk}</b>
            <small>${r.irk?f(r.irk):t.helper_wait}</small>
            ${d||p?u`<small>${this.tr(t.helper_belongs,{name:d??p??""})}</small>`:m}
          </span>
          ${r.irk&&!d?u`<button
                class="primary"
                @click=${()=>{this.addDevice(e,{name:g,kind:"irk",key:r.irk},this.helperPerson),this.helperAdded=g,this.helperName=""}}
              >
                ${this.tr(t.helper_add_as,{name:g})}
              </button>`:m}
        </li>
      </ul>
      ${this.helperAdded?u`<p class="hint">${this.tr(t.helper_added,{name:this.helperAdded})}</p>`:m}
      <p class="hint">${t.helper_after}</p>
      ${r.refresh?u`<p class="end">
            <small>${t.helper_next_hint}</small>
            <button @click=${()=>ne(this.hass,"button","press",{entity_id:r.refresh},h=>h)}>${t.helper_next}</button>
          </p>`:m}`}notifySelect(e,t){let n=this.hass.services,r=Object.keys(n?.notify??{}).filter(o=>o.startsWith("mobile_app_"));return r.length?u`<select title=${this.t.ring_hint} @change=${o=>t(o.target.value||null)}>
      <option value="" ?selected=${!e}>🔔 ${this.t.ring}: ${this.t.none}</option>
      ${r.map(o=>u`<option value=${`notify.${o}`} ?selected=${e===`notify.${o}`}>🔔 ${o.replace(/^mobile_app_/,"").replace(/_/g," ")}</option>`)}
    </select>`:m}phoneGuide(e,t=!1,n){let r=this.t,o=e==="android",s=o?[r.guide_android_1,r.guide_android_2,r.guide_android_3,r.guide_android_4]:[r.guide_iphone_1,r.guide_iphone_2,r.guide_iphone_3,r.guide_iphone_4],a=o?"https://companion.home-assistant.io/docs/core/sensors/#bluetooth-sensors":"https://www.home-assistant.io/integrations/private_ble_device/";return u`<details class="guide" ?open=${t}>
      <summary>${o?r.guide_android_title:r.guide_iphone_title}</summary>
      <ol>
        ${s.map(l=>u`<li class=${n&&l!==n?"dim":""}>${l}</li>`)}
      </ol>
      <a href=${a} target="_blank" rel="noopener noreferrer">${o?r.guide_android_link:r.guide_iphone_link}</a>
    </details>`}unheardBadge(e,t){let n=this._live;if(!n?.running)return m;let r=n.devices.find(o=>o.id===e);return!r||r.room||r.last_seen&&Date.now()/1e3-r.last_seen<120?m:u`<small class="warn" title=${this.t.unheard_hint}>${this.t.unheard}</small>${this.phoneGuide(t==="irk"?"iphone":"android")}`}addDevice(e,t,n=null){let r=`${t.kind}_${t.key.replace(/[^a-z0-9]/gi,"").slice(-10).toLowerCase()}`;e.devices.some(o=>o.id===r)||this.save({devices:[...e.devices,{...t,id:r,person:n,icon:null}]})}renderDevices(e){let t=this.t,n=s=>e.devices.some(a=>a.key.toLowerCase()===s.toLowerCase()),r=(s,a)=>{this.save({devices:e.devices.map(l=>l.id===s?{...l,...a}:l)})},o=rt(this.hass);return u`<p>${t.devices_intro}</p>
      ${e.devices.length?u`<ul class="list">
            ${e.devices.map(s=>u`<li>
                <input .value=${s.name} @change=${a=>r(s.id,{name:a.target.value})} />
                ${this.personSelect(s.person,a=>r(s.id,{person:a}))}
                ${this.notifySelect(s.notify??null,a=>r(s.id,{notify:a}))}
                <label class="row" title=${t.worn_hint}
                  ><input type="checkbox" .checked=${!!s.wearable} @change=${a=>r(s.id,{wearable:a.target.checked})} />⌚
                  ${t.worn}</label
                >
                ${this.unheardBadge(s.id,s.kind)}
                <button @click=${()=>{this.save({devices:e.devices.filter(a=>a.id!==s.id)})}}>${t.remove}</button>
              </li>`)}
          </ul>`:m}
      ${o.length?u`<h4>📱 ${t.app_title}</h4>
            <ul class="list">
              ${o.map(s=>{let a=[s.state!=="Transmitting"?{text:t.app_off,step:t.guide_android_2}:null,s.power==="ultraLow"||s.power==="low"?{text:t.app_power,step:t.guide_android_3}:null,s.mode==="lowPower"?{text:t.app_mode,step:t.guide_android_4}:null].filter(l=>!!l);return u`<li>
                  <span
                    ><b>${s.name}</b>${a.map(l=>u`<small class="warn">⚠ ${l.text}</small>`)}${a.length?this.phoneGuide("android",!0,a[0].step):m}</span
                  >
                  ${n(s.key)?u`<small>${t.added}</small>`:u`<button @click=${()=>this.addDevice(e,{name:s.name,kind:"ibeacon",key:s.key},s.person)}>${t.add}</button>`}
                </li>`})}
            </ul>`:m}
      ${o.length?m:this.phoneGuide("android")}
      ${this.phoneGuide("iphone")}
      ${this.renderKeyHelper(e)}
      <details
        class="pbd"
        @toggle=${s=>{this.nearOpen=s.target.open}}
      >
        <summary>📱 ${t.near_summary}</summary>
        <p class="hint">${t.near_intro}</p>
        ${o.length?m:u`<p class="hint">${t.app_none}</p>`}
        <ul class="list">
          ${(()=>{let s=new Set,a=this._near.filter(l=>l.ibeacon?l.rssi>=-90:!l.random&&l.rssi>=-68).sort((l,c)=>+!!c.ibeacon-+!!l.ibeacon||c.rssi-l.rssi).filter(l=>!l.ibeacon||!s.has(l.ibeacon)&&!!s.add(l.ibeacon)).slice(0,5);return a.length?a.map(l=>u`<li>
                    <span><b>${l.ibeacon?`\u{1F4F1} ${t.android_label}`:l.name??l.address}</b><small>${l.rssi} dBm</small></span>
                    ${n(l.ibeacon??l.address)?u`<small>${t.added}</small>`:u`<button @click=${()=>this.addDevice(e,l.ibeacon?{name:t.android_label,kind:"ibeacon",key:l.ibeacon}:{name:l.name??l.address,kind:"mac",key:l.address})}>${t.add}</button>`}
                  </li>`):u`<li><small>${t.near_empty}</small></li>`})()}
        </ul>
      </details>
      <details class="pbd">
        <summary>🔑 ${t.paste_summary}</summary>
      <div class="row">
        <input id="keyname" placeholder=${t.key_name} />
        <input id="keyvalue" placeholder=${t.key_value} spellcheck="false" autocomplete="off" />
        <button
          @click=${()=>{let s=this.renderRoot.querySelector("#keyname").value.trim(),a=Pe(this.renderRoot.querySelector("#keyvalue").value);if(!a){this._error=t.key_bad;return}this._error="",this.addDevice(e,{name:s||"iPhone",kind:"irk",key:a})}}
        >
          ${t.add}
        </button>
      </div>
      </details>
      <p class="hint">${t.irk_help}</p>
      <p class="end"><button class="primary" ?disabled=${!e.devices.length} @click=${()=>this._step="walk"}>${t.next} →</button></p>`}renderWalk(e){let t=this.t,n=this._live?.calibration??null;if(!e.devices.length)return u`<p>${t.need_device}</p>`;let r=a=>Math.max(0,...e.devices.map(l=>e.samples[l.id]?.[a]??0)),o=[...new Set(this.rooms.map(a=>a.floor))],s=this._quality;return u`<p>${t.walk_intro}</p>
      ${e.devices.length>1?u`<div class="row">
            <b>${t.carry}</b>
            ${e.devices.map(a=>u`<label class="row"
                ><input
                  type="checkbox"
                  .checked=${!this.notCarried.has(a.id)}
                  @change=${l=>{l.target.checked?this.notCarried.delete(a.id):this.notCarried.add(a.id),this.requestUpdate()}}
                />
                ${a.name} ${this.unheardBadge(a.id)}</label
              >`)}
          </div>`:m}
      ${n?u`<div class="learning">
            ${this.tr(t.learning,{room:this.rooms.find(a=>a.id===n.room)?.name??"",left:n.left})}
            <div class="bar"><i style="width:${Math.round((90-n.left)/90*100)}%"></i></div>
            <button @click=${()=>{this.call({type:"home_3d/locate/calibrate",action:"stop"})}}>${t.stop}</button>
          </div>`:m}
      ${o.map(a=>u`<h4>${a}</h4>
          <div class="rooms">
            ${this.rooms.filter(l=>l.floor===a).map(l=>{let c=r(l.id),d=s&&c>0?e.devices.map(g=>s[g.id]?.rooms[l.id]).filter(g=>typeof g=="number"):[],p=d.length?Math.min(...d):null;return u`<button
                  class=${n?.room===l.id?"on":c>=30?"done":""}
                  ?disabled=${!!n}
                  @click=${async()=>{let g=e.devices.filter(h=>!this.notCarried.has(h.id)).map(h=>h.id),f=await this.call({type:"home_3d/locate/calibrate",action:"start",room:l.id,seconds:90,devices:g});f&&(this._live={...this._live??{running:!0,devices:[]},calibration:f.calibration}),f&&!e.enabled&&await this.save({enabled:!0})}}
                >
                  ${c>=30?"\u2713 ":""}${l.name}<small>${this.tr(t.samples,{n:c})}${p!==null?` \xB7 ${Math.round(p*100)} %`:""}</small>
                </button>`})}
          </div>`)}
      <p class="end">
        <button @click=${async()=>this._quality=await this.call({type:"home_3d/locate/quality"})}>${t.quality}</button>
        ${s?u`<b>${this.tr(t.quality_result,{p:e.devices.map(a=>`${a.name} ${s[a.id]?.overall!=null?Math.round(s[a.id].overall*100):"\u2013"} %`).join(" \xB7 ")})}</b>`:m}
        <button class="primary" @click=${()=>this._step="live"}>${t.next} →</button>
      </p>
      <p class="end"><button class="ghost" @click=${()=>{this.call({type:"home_3d/locate/calibrate",action:"clear"}).then(()=>this.load())}}>${t.relearn_all}</button></p>`}renderLive(e){let t=this.t,n=this._live,r=o=>this.rooms.find(s=>s.id===o)?.name;return u`<p>${t.live_intro}</p>
      ${this.voiceLanguage?u`<p class="hint">${t.voice_hint}</p>`:m}
      <label class="row"><input type="checkbox" .checked=${e.enabled} @change=${o=>{this.save({enabled:o.target.checked})}} /> ${t.enabled}</label>
      <label class="row"><input type="checkbox" .checked=${e.admins_only} @change=${o=>{this.save({admins_only:o.target.checked})}} /> ${t.admins_only}</label>
      <label class="row" title=${t.person_sensors_hint}
        ><input type="checkbox" .checked=${e.person_sensors===!1} @change=${o=>{this.save({person_sensors:!o.target.checked})}} /> ${t.person_sensors}</label
      >
      <label class="row" title=${t.fly_hint}
        ><input type="checkbox" .checked=${e.fly!==!1} @change=${o=>{this.save({fly:o.target.checked})}} /> ${t.fly}</label
      >
      ${this.setLook?u`<div class="row">
            <b>${t.look_title}</b>
            ${["figure","pin","off"].map(o=>u`<button
                class=${(this.building.settings.person_look??"figure")===o?"on":""}
                @click=${()=>{this.setLook?.(o),this.building={...this.building,settings:{...this.building.settings,person_look:o==="figure"?null:o}}}}
              >
                ${o==="figure"?t.look_figure:o==="pin"?t.look_pin:t.look_off}
              </button>`)}
          </div>`:m}
      <ul class="list big">
        ${(n?.devices??[]).map(o=>u`<li>
            <span><b>${o.name}</b></span>
            <span>${o.room?u`<b class="room">${r(o.room)}</b> <small>${Math.round((o.probability??0)*100)} %</small>`:u`<small>${t.not_heard}</small>`}</span>
          </li>`)}
      </ul>`}static styles=W`
    :host {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: grid;
      place-items: center;
      background: #02060fcc;
      font: 14px/1.4 system-ui, sans-serif;
      color: #e6f7ff;
    }
    .box {
      width: min(640px, calc(100vw - 16px));
      max-height: calc(100vh - 16px);
      overflow: auto;
      background: #0b1120;
      border: 1px solid #37e0ff66;
      border-radius: 14px;
      padding: 14px;
      box-shadow: 0 10px 40px #000a;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header small {
      font-weight: 400;
      color: #ffb86b;
      margin-left: 6px;
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin: 10px 0;
    }
    button,
    select,
    input {
      font: inherit;
      color: #e6f7ff;
      background: #16233d;
      border: 1px solid #37e0ff44;
      border-radius: 8px;
      padding: 7px 10px;
    }
    button {
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
      cursor: default;
    }
    button.on,
    button.primary {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
    }
    button.done {
      border-color: #5dd39e;
    }
    button.ghost {
      background: transparent;
    }
    .x {
      background: transparent;
      border: none;
      font-size: 18px;
    }
    .list {
      list-style: none;
      padding: 0;
      margin: 8px 0;
      display: grid;
      gap: 6px;
    }
    .list li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      background: #101a2e;
      border-radius: 10px;
      padding: 8px 10px;
    }
    .list li span {
      display: flex;
      flex-direction: column;
    }
    .list.big li {
      font-size: 16px;
    }
    small {
      opacity: 0.75;
      font-size: 12px;
    }
    .rooms {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .rooms button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 120px;
    }
    .learning {
      background: #13233f;
      border: 1px solid #37e0ff;
      border-radius: 10px;
      padding: 10px;
      margin: 8px 0;
      font-weight: 700;
    }
    .bar {
      height: 8px;
      background: #0b1120;
      border-radius: 4px;
      margin: 8px 0;
      overflow: hidden;
    }
    .bar i {
      display: block;
      height: 100%;
      background: #37e0ff;
    }
    .hint {
      opacity: 0.8;
      font-size: 13px;
    }
    details.guide {
      font-size: 13px;
      margin: 4px 0;
    }
    details.guide summary {
      cursor: pointer;
      opacity: 0.9;
    }
    details.guide ol {
      margin: 4px 0;
      padding-left: 20px;
    }
    details.guide li.dim {
      opacity: 0.65;
    }
    details.guide a {
      color: #37e0ff;
    }
    .warn {
      display: block;
      color: #ffb74d;
      font-size: 12px;
    }
    .end {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
    .row {
      display: flex;
      gap: 8px;
      align-items: center;
      margin: 6px 0;
    }
    .room {
      color: #37e0ff;
    }
    a {
      color: #37e0ff;
    }
    .helper-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 12px;
    }
    .helper-head h4 {
      margin: 0;
    }
    a.install {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
      text-decoration: none;
      border-radius: 10px;
      padding: 8px 14px;
    }
    details.pbd summary {
      cursor: pointer;
      opacity: 0.85;
      margin: 8px 0;
    }
    .err {
      color: #ff8fa3;
      white-space: pre-wrap;
      font-size: 12px;
    }
    h4 {
      margin: 12px 0 4px;
    }
  `};le("fp3d-locate-setup",oe);function an(i,e,t,n){document.querySelector("fp3d-locate-setup")?.remove();let r=document.createElement("fp3d-locate-setup");r.hass=i,r.hassSource=t??null,r.setLook=n??null,r.building=e,document.body.append(r)}export{an as openLocateSetup};
