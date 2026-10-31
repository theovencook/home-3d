var U=globalThis,R=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),re=new WeakMap,S=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(R&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&re.set(t,e))}return e}toString(){return this.cssText}},ae=n=>new S(typeof n=="string"?n:n+"",void 0,j),B=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((s,i,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new S(t,n,j)},le=(n,e)=>{if(R)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let s=document.createElement("style"),i=U.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},z=R?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let s of e.cssRules)t+=s.cssText;return ae(t)})(n):n;var{is:Te,defineProperty:Le,getOwnPropertyDescriptor:Ie,getOwnPropertyNames:Me,getOwnPropertySymbols:Ue,getPrototypeOf:Re}=Object,O=globalThis,ce=O.trustedTypes,Oe=ce?ce.emptyScript:"",We=O.reactiveElementPolyfillSupport,w=(n,e)=>n,F={toAttribute(n,e){switch(e){case Boolean:n=n?Oe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},de=(n,e)=>!Te(n,e),he={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:de};Symbol.metadata??=Symbol("metadata"),O.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&Le(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:o}=Ie(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:i,set(r){let a=i?.call(this);o?.call(this,r),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;let e=Re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){let t=this.properties,s=[...Me(t),...Ue(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(z(i))}else e!==void 0&&t.push(z(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return le(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:F).toAttribute(t,s.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:F;this._$Em=i;let a=r.fromAttribute(t,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,s,i=!1,o){if(e!==void 0){let r=this.constructor;if(i===!1&&(o=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??de)(o,t)||s.useDefault&&s.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:o},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:r}=o,a=this[i];r!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:"open"},g[w("elementProperties")]=new Map,g[w("finalized")]=new Map,We?.({ReactiveElement:g}),(O.reactiveElementVersions??=[]).push("2.1.2");var Q=globalThis,pe=n=>n,W=Q.trustedTypes,ue=W?W.createPolicy("lit-html",{createHTML:n=>n}):void 0,be="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,ve="?"+f,Ne=`<${ve}>`,y=document,E=()=>y.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",Z=Array.isArray,je=n=>Z(n)||typeof n?.[Symbol.iterator]=="function",D=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,me=/-->/g,ge=/>/g,b=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_e=/'/g,fe=/"/g,ye=/^(?:script|style|textarea|title)$/i,X=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),h=X(1),et=X(2),tt=X(3),k=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),$e=new WeakMap,v=y.createTreeWalker(y,129);function ke(n,e){if(!Z(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ue!==void 0?ue.createHTML(e):e}var Be=(n,e)=>{let t=n.length-1,s=[],i,o=e===2?"<svg>":e===3?"<math>":"",r=P;for(let a=0;a<t;a++){let l=n[a],p,u,d=-1,m=0;for(;m<l.length&&(r.lastIndex=m,u=r.exec(l),u!==null);)m=r.lastIndex,r===P?u[1]==="!--"?r=me:u[1]!==void 0?r=ge:u[2]!==void 0?(ye.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=b):u[3]!==void 0&&(r=b):r===b?u[0]===">"?(r=i??P,d=-1):u[1]===void 0?d=-2:(d=r.lastIndex-u[2].length,p=u[1],r=u[3]===void 0?b:u[3]==='"'?fe:_e):r===fe||r===_e?r=b:r===me||r===ge?r=P:(r=b,i=void 0);let _=r===b&&n[a+1].startsWith("/>")?" ":"";o+=r===P?l+Ne:d>=0?(s.push(p),l.slice(0,d)+be+l.slice(d)+f+_):l+f+(d===-2?a:_)}return[ke(n,o+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},C=class n{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,r=0,a=e.length-1,l=this.parts,[p,u]=Be(e,t);if(this.el=n.createElement(p,s),v.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=v.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(be)){let m=u[r++],_=i.getAttribute(d).split(f),M=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:M[2],strings:_,ctor:M[1]==="."?q:M[1]==="?"?V:M[1]==="@"?G:x}),i.removeAttribute(d)}else d.startsWith(f)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(ye.test(i.tagName)){let d=i.textContent.split(f),m=d.length-1;if(m>0){i.textContent=W?W.emptyScript:"";for(let _=0;_<m;_++)i.append(d[_],E()),v.nextNode(),l.push({type:2,index:++o});i.append(d[m],E())}}}else if(i.nodeType===8)if(i.data===ve)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(f,d+1))!==-1;)l.push({type:7,index:o}),d+=f.length-1}o++}}static createElement(e,t){let s=y.createElement("template");return s.innerHTML=e,s}};function A(n,e,t=n,s){if(e===k)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl,o=H(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=A(n,i._$AS(n,e.values),i,s)),e}var K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??y).importNode(t,!0);v.currentNode=i;let o=v.nextNode(),r=0,a=0,l=s[0];for(;l!==void 0;){if(r===l.index){let p;l.type===2?p=new T(o,o.nextSibling,this,e):l.type===1?p=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(p=new J(o,this,e)),this._$AV.push(p),l=s[++a]}r!==l?.index&&(o=v.nextNode(),r++)}return v.currentNode=y,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}},T=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),H(e)?e===c||e==null||e===""?(this._$AH!==c&&this._$AR(),this._$AH=c):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):je(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==c&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=C.createElement(ke(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new K(i,this),r=o.u(this.options);o.p(t),this.T(r),this._$AH=o}}_$AC(e){let t=$e.get(e.strings);return t===void 0&&$e.set(e.strings,t=new C(e)),t}k(e){Z(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,s,i=0;for(let o of e)i===t.length?t.push(s=new n(this.O(E()),this.O(E()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let s=pe(e).nextSibling;pe(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},x=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=c,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(e,t=this,s,i){let o=this.strings,r=!1;if(o===void 0)e=A(this,e,t,0),r=!H(e)||e!==this._$AH&&e!==k,r&&(this._$AH=e);else{let a=e,l,p;for(e=o[0],l=0;l<o.length-1;l++)p=A(this,a[s+l],t,l),p===k&&(p=this._$AH[l]),r||=!H(p)||p!==this._$AH[l],p===c?e=c:e!==c&&(e+=(p??"")+o[l+1]),this._$AH[l]=p}r&&!i&&this.j(e)}j(e){e===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},q=class extends x{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===c?void 0:e}},V=class extends x{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==c)}},G=class extends x{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??c)===k)return;let s=this._$AH,i=e===c&&s!==c||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},J=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}};var ze=Q.litHtmlPolyfillSupport;ze?.(C,T),(Q.litHtmlVersions??=[]).push("3.3.3");var Ae=(n,e,t)=>{let s=t?.renderBefore??e,i=s._$litPart$;if(i===void 0){let o=t?.renderBefore??null;s._$litPart$=i=new T(e.insertBefore(E(),o),o,void 0,t??{})}return i._$AI(n),i};var Y=globalThis,$=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ae(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};$._$litElement$=!0,$.finalized=!0,Y.litElementHydrateSupport?.({LitElement:$});var Fe=Y.litElementPolyfillSupport;Fe?.({LitElement:$});(Y.litElementVersions??=[]).push("4.2.2");var De=n=>n?{home_id:n}:{};async function xe(n,e){return n.callWS({type:"home_3d/building/get",...De(e)})}function Se(n){return n.callWS({type:"home_3d/homes/list"})}var ee=["pool"];function te(){try{let n=new URLSearchParams(location.search).get("fp3d_lab");return n==="1"?localStorage.setItem("home3d.lab","1"):n==="0"&&localStorage.removeItem("home3d.lab"),localStorage.getItem("home3d.lab")==="1"}catch{return!1}}var L=["view","walls","floors","temperature","humidity","co2"];var Ke=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],we=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:I,pending:se}=we;function N(n){let e=(n??navigator.language??"en").toLowerCase(),t=e.startsWith("no")?"nb":e.split(/[-_]/)[0];return t==="en"||!/^[a-z]{2,3}$/.test(t)?null:t}function ne(n){let e=N(n);return!e||I.has(e)}var ie="home3d.lang.";function qe(n){try{let e=JSON.parse(localStorage.getItem(ie+n)??"null");return e&&typeof e.hash=="string"&&e.strings&&typeof e.strings=="object"?e:null}catch{return null}}function Ve(n,e,t){try{Object.keys(t).length?localStorage.setItem(ie+n,JSON.stringify({hash:e,strings:t})):localStorage.removeItem(ie+n)}catch{}}async function Ge(n,e){if(!e?.callWS)return{};let t=qe(n);try{let s=await e.callWS({type:"home_3d/languages/get",language:n,...t?{hash:t.hash}:{}});return s.strings&&typeof s.strings=="object"?(Ve(n,s.hash,s.strings),s.strings):t&&s.hash===t.hash?t.strings:{}}catch{return t?.strings??{}}}async function Je(n){if(!Ke.includes(n))return{};try{let e=new URL(`./lang/${n}.json?v=3cbdae1b426c`,import.meta.url).href,t=await fetch(e),s=t.ok?await t.json():{};return s&&typeof s=="object"?s:{}}catch{return{}}}function Pe(n,e,t=!1){let s=N(n);if(!s||I.has(s)&&!t)return Promise.resolve();let i=se.get(s);return i||(i=Promise.all([Je(s),Ge(s,e)]).then(([o,r])=>{I.set(s,{...o,...r})}).finally(()=>se.delete(s)),se.set(s,i)),i}function Ee(n){let e=n?.language??navigator.language??"en",t=N(e);if(!t)return/^en(?:-|$)/i.test(e)?e:"en";let s=I.get(t);for(let i in s)return e;return"en"}function He(n,e,t={}){let s=N(n?.language??navigator.language),o=(s?I.get(s):void 0)?.[e]??we.en?.[e]??e;for(let[r,a]of Object.entries(t))o=o.replace(`{${r}}`,String(a));return o}var Ce={height:420,view:"3d",walls:"auto",explode:!0,roof_fade:!0,roof:!0,camera_wall:!1,quality:"auto",stats:!1,markers:"important",heatmap:"none",theme:"theme",energy:!0,room_panel:!0,fill:!1,controls:!1,fullscreen_button:!1,room_names:!0,floor_stack:"dim",alerts:!0,alert_jump:!1,director:!1,voice:!1,scenes:!0,motion_trail:!1,time_travel:!1,household_card:!0,rack_cards:!0,weather:!0,idle_return:0,controls_hidden:!1,controls_hide_after:0,marker_names:!1,central:!0,pets:!0,ghost:!0,night:"off",idle_orbit:!1},oe=class extends ${static properties={hass:{attribute:!1},_config:{state:!0},_floors:{state:!0}};floorsOf=void 0;homesAsked=!1;constructor(){super(),this._config={type:"custom:home-3d-card"},this._floors=[],this._homes=[]}setConfig(e){this._config=e}willUpdate(){this.hass&&!ne(this.hass.language)&&Pe(this.hass.language,this.hass).then(()=>this.requestUpdate());let e=Ee(this.hass);this.getAttribute("lang")!==e&&this.setAttribute("lang",e);let t=this._config.home??"";this.hass&&this.floorsOf!==t&&(this.floorsOf=t,xe(this.hass,t||void 0).then(s=>{this.floorsOf===t&&(this._floors=s.building.floors.map(i=>({id:i.id,name:i.name})))},()=>{})),this.hass&&!this.homesAsked&&(this.homesAsked=!0,Se(this.hass).then(s=>this._homes=s.homes,()=>{}))}t(e,t){return He(this.hass,e,t)}get value(){return{...Ce,...this._config}}set(e,t){let s={...this._config};t===void 0||t===""||Ce[e]===t?delete s[e]:s[e]=t,this._config=s,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:s},bubbles:!0,composed:!0}))}select(e,t,s,i){return h`<label class="field"
      >${this.t(t)}
      <select @change=${o=>this.set(e,o.target.value)}>
        ${s.map(([o,r])=>h`<option value=${o} ?selected=${o===i}>${this.t(r)}</option>`)}
      </select>
    </label>`}toggle(e,t,s){let i=this.value[e];return h`<label class="toggle">
      <input type="checkbox" .checked=${i} @change=${o=>this.set(e,o.target.checked)} />
      <span>${this.t(t)}${s?h`<small>${this.t(s)}</small>`:c}</span>
    </label>`}renderThumbsToggle(){let e=!this._config.floor,t=this._config.floor_thumbs??e;return h`<label class="toggle">
      <input
        type="checkbox"
        .checked=${t}
        @change=${s=>{let i=s.target.checked,o={...this._config};i===e?delete o.floor_thumbs:o.floor_thumbs=i,this._config=o,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:o},bubbles:!0,composed:!0}))}}
      />
      <span>${this.t("card_floor_thumbs")}<small>${this.t(this._config.floor?"card_floor_thumbs_hint_start":"card_floor_thumbs_hint")}</small></span>
    </label>`}renderControls(){let e=this._config.controls,t=!!e&&(e===!0||e.length>0),s=e===!0?[...L]:Array.isArray(e)?e:[],i=a=>this.set("controls",a.length===L.length?!0:a.length?a:void 0),o=this.value,r=[0,10,30,60,120];return h`<label class="toggle">
        <input type="checkbox" .checked=${t} @change=${a=>this.set("controls",a.target.checked?!0:void 0)} />
        <span>${this.t("card_controls")}<small>${this.t("card_controls_hint")}</small></span>
      </label>
      <label class="toggle">
        <input type="checkbox" .checked=${o.central} @change=${a=>this.set("central",a.target.checked?void 0:!1)} />
        <span>${this.t("card_central")}<small>${this.t("card_central_hint")}</small></span>
      </label>
      ${!ee.includes("fun_pets")||te()?h`<label class="toggle">
            <input type="checkbox" .checked=${o.pets} @change=${a=>this.set("pets",a.target.checked?void 0:!1)} />
            <span>${this.t("card_pets")}<small>${this.t("card_pets_hint")}</small></span>
          </label>`:c}
      ${!ee.includes("fun_halloween")||te()?h`<label class="toggle">
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
            ${L.map(a=>h`<label class="chip">
                <input
                  type="checkbox"
                  .checked=${s.includes(a)}
                  @change=${l=>i(l.target.checked?L.filter(p=>p===a||s.includes(p)):s.filter(p=>p!==a))}
                />
                ${this.t(`card_control_${a}`)}
              </label>`)}
          </div>`:c}`}renderKiosk(){let e=this.value,t=e.night==="off"||e.night==="sun"?e.night:"time",s=[0,1,2,5,10];return h`<h3>${this.t("card_section_kiosk")}</h3>
      <div class="grid">
        <label class="field"
          >${this.t("card_idle_return")}
          <select @change=${i=>this.set("idle_return",Number(i.target.value)||void 0)}>
            ${s.map(i=>h`<option value=${i*60} ?selected=${e.idle_return===i*60}>${i?this.t("card_idle_min",{n:i}):this.t("card_idle_off")}</option>`)}
          </select>
        </label>
        <label class="field"
          >${this.t("card_night")}
          <select @change=${i=>this.set("night",{off:void 0,sun:"sun",time:"22:00-06:00"}[i.target.value])}>
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
                @change=${i=>this.set("night",i.target.value.trim()||void 0)}
              />
            </label>`:c}
      </div>
      <p class="hint">${this.t("card_idle_hint")}</p>
      ${this.toggle("idle_orbit","card_idle_orbit","card_idle_orbit_hint")}
      <div class="grid">
        <label class="field wide"
          >${this.t("card_dashboard")}
          <input type="text" placeholder="/lovelace/home" .value=${e.dashboard??""} @change=${i=>this.set("dashboard",i.target.value.trim()||void 0)} />
        </label>
        <label class="field wide"
          >${this.t("card_dashboard_label")}
          <input type="text" .value=${e.dashboard_label??""} @change=${i=>this.set("dashboard_label",i.target.value.trim()||void 0)} />
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
          </div>`:c}`}render(){if(this.hass&&!ne(this.hass.language))return c;let e=this.value,t=e.flows===void 0?"switch":e.flows?"on":"off",s=e.holograms===void 0?"switch":e.holograms?"on":"off";return h`
      <h3>${this.t("card_section_view")}</h3>
      <div class="grid">
        ${this._homes.length>1||this._config.home?h`<label class="field wide"
              >${this.t("card_home")}
              <select
                @change=${i=>{this.set("floor",void 0),this.set("room",void 0),this.set("home",i.target.value||void 0)}}
              >
                <option value="" ?selected=${!e.home}>${this.t("card_home_active")}</option>
                ${this._homes.map(i=>h`<option value=${i.id} ?selected=${i.id===e.home}>${i.name}</option>`)}
                ${e.home&&!this._homes.some(i=>i.id===e.home)?h`<option value=${e.home} selected>${e.home}</option>`:c}
              </select>
            </label>`:c}
        <label class="field wide"
          >${this.t("card_floor")}
          <select @change=${i=>this.set("floor",i.target.value||void 0)}>
            <option value="" ?selected=${!e.floor}>${this.t("card_floor_house")}</option>
            ${this._floors.map(i=>h`<option value=${i.id} ?selected=${i.id===e.floor}>${i.name}</option>`)}
            ${e.floor&&!this._floors.some(i=>i.id===e.floor)?h`<option value=${e.floor} selected>${e.floor}</option>`:c}
          </select>
        </label>
        <label class="field"
          >${this.t("card_size")}
          <select @change=${i=>this.set("fill",i.target.value==="fill")}>
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
            @change=${i=>{let o=Math.round(Number(i.target.value));o>100&&this.set("height",o)}}
          />
        </label>
        ${this.select("theme","theme",[["theme","theme_theme"],["neon","theme_neon"],["blueprint","theme_blueprint"],["day","theme_day"],["realistic","theme_realistic"],["auto","theme_auto"]],e.theme)}
        ${this.select("clock","clock",[["off","clock_off"],["tl","clock_tl"],["tr","clock_tr"],["bl","clock_bl"],["br","clock_br"]],e.clock??"off")}
        <label class="field"
          >${this.t("accent")}
          <input type="color" .value=${this._config.accent??"#37e0ff"} @input=${i=>this.set("accent",i.target.value)} />
          ${this._config.accent?h`<button type="button" class="link" @click=${()=>this.set("accent",void 0)}>${this.t("accent_reset")}</button>`:c}
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
          <select @change=${i=>{let o=i.target.value;this.set("flows",o==="switch"?void 0:o==="on")}}>
            <option value="switch" ?selected=${t==="switch"}>${this.t("card_flows_switch")}</option>
            <option value="on" ?selected=${t==="on"}>${this.t("card_flows_on")}</option>
            <option value="off" ?selected=${t==="off"}>${this.t("card_flows_off")}</option>
          </select>
        </label>
        <label class="field wide"
          >${this.t("holos")}
          <select @change=${i=>{let o=i.target.value;this.set("holograms",o==="switch"?void 0:o==="on")}}>
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
    `}static styles=B`
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
  `};customElements.get("home-3d-card-editor")||customElements.define("home-3d-card-editor",oe);export{oe as Floorplan3dCardEditor};
