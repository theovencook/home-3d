var Wt=Symbol.for("home-3d.custom-elements");function Ue(){let t=globalThis;return t[Wt]??={defined:new Map,watching:!1}}function ze(){let t=globalThis.customElements;if(t){for(let[e,n]of Ue().defined)if(n.registry!==t&&(n.registry=t,!t.get(e)))try{t.define(e,n.cls)}catch(r){console.warn(`Home 3D: could not define ${e} in the page's element registry`,r)}}}function Dt(t,e){if(typeof document>"u")return;let n;try{n=document.createElement(t)}catch{return}if(Object.getPrototypeOf(n)===HTMLElement.prototype||n instanceof HTMLUnknownElement||!(n instanceof HTMLElement))return;let i=n.constructor;return i===e?void 0:i}function J(t,e){ze();let n=globalThis.customElements;if(n.get(t))return!1;let r=Ue(),i=Dt(t,e);if(i){try{n.define(t,i),r.defined.set(t,{cls:i,registry:n})}catch(o){console.warn(`Home 3D: could not define ${t} in the page's element registry`,o)}return!1}return n.define(t,e),r.defined.set(t,{cls:e,registry:n}),r.watching||(r.watching=!0,n.whenDefined("home-assistant").then(ze)),!0}var Q=globalThis,ee=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),We=new WeakMap,z=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(ee&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=We.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&We.set(n,e))}return e}toString(){return this.cssText}},I=t=>new z(typeof t=="string"?t:t+"",void 0,de),P=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new z(n,t,de)},De=(t,e)=>{if(ee)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),i=Q.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},pe=ee?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return I(n)})(t):t;var{is:Bt,defineProperty:Vt,getOwnPropertyDescriptor:Kt,getOwnPropertyNames:jt,getOwnPropertySymbols:qt,getPrototypeOf:Gt}=Object,te=globalThis,Be=te.trustedTypes,Yt=Be?Be.emptyScript:"",Zt=te.reactiveElementPolyfillSupport,U=(t,e)=>t,me={toAttribute(t,e){switch(e){case Boolean:t=t?Yt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ke=(t,e)=>!Bt(t,e),Ve={attribute:!0,type:String,converter:me,reflect:!1,useDefault:!1,hasChanged:Ke};Symbol.metadata??=Symbol("metadata"),te.litPropertyMetadata??=new WeakMap;var k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Ve){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Vt(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){let{get:i,set:o}=Kt(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){let a=i?.call(this);o?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ve}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;let e=Gt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){let n=this.properties,r=[...jt(n),...qt(n)];for(let i of r)this.createProperty(i,n[i])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)n.unshift(pe(i))}else e!==void 0&&n.push(pe(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return De(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:me).toAttribute(n,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,n){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:me;this._$Em=i;let a=s.fromAttribute(n,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,n,r,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??Ke)(o,n)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r){let{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[U("elementProperties")]=new Map,k[U("finalized")]=new Map,Zt?.({ReactiveElement:k}),(te.reactiveElementVersions??=[]).push("2.1.2");var ve=globalThis,je=t=>t,ne=ve.trustedTypes,qe=ne?ne.createPolicy("lit-html",{createHTML:t=>t}):void 0,Qe="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,et="?"+R,Xt=`<${et}>`,T=document,D=()=>T.createComment(""),B=t=>t===null||typeof t!="object"&&typeof t!="function",we=Array.isArray,Jt=t=>we(t)||typeof t?.[Symbol.iterator]=="function",fe=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ge=/-->/g,Ye=/>/g,M=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,Xe=/"/g,tt=/^(?:script|style|textarea|title)$/i,xe=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),p=xe(1),zn=xe(2),Un=xe(3),H=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Je=new WeakMap,O=T.createTreeWalker(T,129);function nt(t,e){if(!we(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return qe!==void 0?qe.createHTML(e):e}var Qt=(t,e)=>{let n=t.length-1,r=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=W;for(let a=0;a<n;a++){let l=t[a],c,u,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,u=s.exec(l),u!==null);)f=s.lastIndex,s===W?u[1]==="!--"?s=Ge:u[1]!==void 0?s=Ye:u[2]!==void 0?(tt.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=M):u[3]!==void 0&&(s=M):s===M?u[0]===">"?(s=i??W,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?M:u[3]==='"'?Xe:Ze):s===Xe||s===Ze?s=M:s===Ge||s===Ye?s=W:(s=M,i=void 0);let A=s===M&&t[a+1].startsWith("/>")?" ":"";o+=s===W?l+Xt:d>=0?(r.push(c),l.slice(0,d)+Qe+l.slice(d)+R+A):l+R+(d===-2?a:A)}return[nt(t,o+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},V=class t{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,u]=Qt(e,n);if(this.el=t.createElement(c,r),O.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=O.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(Qe)){let f=u[s++],A=i.getAttribute(d).split(R),X=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:X[2],strings:A,ctor:X[1]==="."?he:X[1]==="?"?be:X[1]==="@"?_e:F}),i.removeAttribute(d)}else d.startsWith(R)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(tt.test(i.tagName)){let d=i.textContent.split(R),f=d.length-1;if(f>0){i.textContent=ne?ne.emptyScript:"";for(let A=0;A<f;A++)i.append(d[A],D()),O.nextNode(),l.push({type:2,index:++o});i.append(d[f],D())}}}else if(i.nodeType===8)if(i.data===et)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(R,d+1))!==-1;)l.push({type:7,index:o}),d+=R.length-1}o++}}static createElement(e,n){let r=T.createElement("template");return r.innerHTML=e,r}};function L(t,e,n=t,r){if(e===H)return e;let i=r!==void 0?n._$Co?.[r]:n._$Cl,o=B(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(e=L(t,i._$AS(t,e.values),i,r)),e}var ge=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,i=(e?.creationScope??T).importNode(n,!0);O.currentNode=i;let o=O.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new K(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new ye(o,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(o=O.nextNode(),s++)}return O.currentNode=T,i}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},K=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=L(this,e,n),B(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Jt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=V.createElement(nt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{let o=new ge(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(e){let n=Je.get(e.strings);return n===void 0&&Je.set(e.strings,n=new V(e)),n}k(e){we(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let o of e)i===n.length?n.push(r=new t(this.O(D()),this.O(D()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=je(e).nextSibling;je(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},F=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(e,n=this,r,i){let o=this.strings,s=!1;if(o===void 0)e=L(this,e,n,0),s=!B(e)||e!==this._$AH&&e!==H,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=L(this,a[r+l],n,l),c===H&&(c=this._$AH[l]),s||=!B(c)||c!==this._$AH[l],c===m?e=m:e!==m&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},he=class extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},be=class extends F{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},_e=class extends F{constructor(e,n,r,i,o){super(e,n,r,i,o),this.type=5}_$AI(e,n=this){if((e=L(this,e,n,0)??m)===H)return;let r=this._$AH,i=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==m&&(r===m||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ye=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){L(this,e)}};var en=ve.litHtmlPolyfillSupport;en?.(V,K),(ve.litHtmlVersions??=[]).push("3.3.3");var rt=(t,e,n)=>{let r=n?.renderBefore??e,i=r._$litPart$;if(i===void 0){let o=n?.renderBefore??null;r._$litPart$=i=new K(e.insertBefore(D(),o),o,void 0,n??{})}return i._$AI(t),i};var ke=globalThis,v=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rt(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};v._$litElement$=!0,v.finalized=!0,ke.litElementHydrateSupport?.({LitElement:v});var tn=ke.litElementPolyfillSupport;tn?.({LitElement:v});(ke.litElementVersions??=[]).push("4.2.2");var re=["rain","snow","fog","clouds","lightning","sky"],ie=["rain","snow","clouds","lightning","sky"];var rn={type:"none",pitch:35,overhang:.4},dr={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...rn}};var on=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var nn=new Set([...on,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function j(t){return t.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Se(t,e){return e==="\xB0F"?(t-32)*5/9:e==="K"?t-273.15:t}function ot(t,e){return j(t)==="\xB0F"?e*9/5+32:e}function q(t,e,n){let i=t.states[e]?.attributes.friendly_name??t.entities?.[e]?.name??e;if(n&&i.length>n.length+1&&i.toLowerCase().startsWith(n.toLowerCase()+" ")){let o=i.slice(n.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return i}function st(t,e){let n=e.domains??[];if(!e.area&&!n.length)return t;let r=i=>{let o=n.indexOf(i.id.slice(0,i.id.indexOf(".")));return(e.area&&i.area===e.area?2:0)+(o<0?0:1/(o+1))};return t.map((i,o)=>({o:i,i:o,s:r(i)})).sort((i,o)=>o.s-i.s||i.i-o.i).map(i=>i.o)}function at(t,e){if(!t)return[];let n=r=>{let i=t.entities?.[r];return i?.area_id??(i?.device_id?t.devices?.[i.device_id]?.area_id:null)??null};return Object.keys(t.states??{}).filter(e).map(r=>{let i=n(r),o=i?t.areas?.[i]?.name:void 0;return{id:r,label:`${q(t,r,o)}${o?` \xB7 ${o}`:""}`,...i?{area:i}:{}}}).sort((r,i)=>r.label.localeCompare(i.label))}var Ee={bg:"#070b14",bg2:"#0d1424",chrome:"rgba(14, 21, 38, 0.86)",chromeSolid:"#0f1729",line:"rgba(120, 170, 255, 0.16)",text:"#e6eefc",muted:"#8a9bb8",accent:"#37e0ff",accentText:"#041018",soft:"#5b7cff",warm:"#ffb547",danger:"#ff6b8b",shadow:"0 8px 30px rgba(0, 0, 0, 0.5)",colorScheme:"dark"},lt={bg:"#eef2f8",bg2:"#e3e9f2",chrome:"rgba(255, 255, 255, 0.88)",chromeSolid:"#ffffff",line:"rgba(30, 60, 110, 0.18)",text:"#132036",muted:"#4a5a74",accent:"#0b7a99",accentText:"#ffffff",soft:"#3d5bd9",warm:"#a35f00",danger:"#c4224a",shadow:"0 6px 22px rgba(20, 40, 80, 0.16)",colorScheme:"light"},ct={bg:"#000000",bg2:"#050a14",chrome:"rgba(0, 0, 0, 0.94)",chromeSolid:"#000000",line:"rgba(255, 255, 255, 0.7)",text:"#ffffff",muted:"#dbe4f5",accent:"#ffe14d",accentText:"#000000",soft:"#9db4ff",warm:"#ffc247",danger:"#ff8fa8",shadow:"0 0 0 1px rgba(255, 255, 255, 0.5)",colorScheme:"dark"};function $e(t){let e=n=>n.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`);return Object.entries(t).map(([n,r])=>`--fp3d-s-${e(n)}: ${r};`).join(`
`)}var ut=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),sn=Object.keys(Ee).filter(t=>t!=="colorScheme").map(t=>`--fp3d-${ut(t)}: var(--fp3d-s-${ut(t)}, ${Ee[t]});`).join(`
`),oe=P`
  :host {
    ${I(sn)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${I($e(lt))}
  }
  :host([contrast]) {
    ${I($e(ct))}
  }
`,dt=P`
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
`;var pt=40,Ae=class extends v{static formAssociated=!0;static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},prefer:{attribute:!1},groups:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};partition=null;blurTimer;ranked=null;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this.prefer={},this.groups=null,this._query="",this._open=!1,this._cursor=0,this.addEventListener("click",e=>{e.composedPath()[0]===this&&this.renderRoot?.querySelector?.("input")?.focus()})}get open(){return this._open}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=a=>{let l=`${a.label} ${a.id}`.toLowerCase();return n.every(c=>l.includes(c))},i=this.fixed.filter(a=>!e||r(a)),o=this.grouped(this.rankedOptions()),s=e?o.filter(r):o;return[...i,...s.slice(0,pt)]}fits(e){return(this.prefer.domains??[]).includes(e.id.slice(0,e.id.indexOf(".")))}grouped(e){if(!this.groups||!this.prefer.domains?.length)return e;let n=e;if(this.partition?.from===n&&this.partition.domains===this.prefer.domains)return this.partition.list;let r=[...e.filter(i=>this.fits(i)),...e.filter(i=>!this.fits(i))];return this.partition={from:n,domains:this.prefer.domains,list:r},r}headings(e){let n=e.map(()=>null);if(!this.groups||!this.prefer.domains?.length)return n;let r=e.filter(o=>o.id.includes(".")),i=r.filter(o=>this.fits(o)).length;return!i||i===r.length||(n[e.indexOf(r[0])]=this.groups.likely,n[e.indexOf(r[i])]=this.groups.other),n}rankedOptions(){let e=`${this.prefer.area??""}|${(this.prefer.domains??[]).join(",")}`,n=this.ranked;if(n&&n.options===this.options&&n.prefer===e)return n.list;let r=st(this.options,this.prefer);return this.ranked={options:this.options,prefer:e,list:r},r}onQuery(){let e=this.hits,n=this._query.trim()?e.findIndex(r=>r.id.includes(".")):-1;this._cursor=Math.max(0,n)}get leftOut(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(i=>n.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,r-pt)}openList(){clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}updated(e){this._open&&e.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let n=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(n.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&n[this._cursor]&&this.choose(n[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,n=this._open?this.hits:[],r=this.headings(n),i=this.value&&this.value.includes(".")?this.value:null;return p`<div class="wrap" @mousedown=${o=>o.target?.localName!=="input"&&o.preventDefault()}>
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>this.openList()}
        @click=${()=>{this._open||this.openList()}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${o=>{this._query=o.target.value,this._open=!0,this.onQuery()}}
        @keydown=${this.onKey}
      />
      ${this._open?p`<ul class="list" role="listbox">
            ${n.length?m:p`<li class="empty">–</li>`}
            ${n.map((o,s)=>p`${r[s]?p`<li class="group" role="presentation">${r[s]}</li>`:m}<li
                role="option"
                aria-selected=${o.id===this.value}
                class="${s===this._cursor?"cursor":""} ${o.id===this.value?"chosen":""}"
                @mousedown=${a=>a.preventDefault()}
                @click=${()=>this.choose(o.id)}
              >
                <span>${o.label}</span>${o.id.includes(".")?p`<small>${o.id}</small>`:m}
              </li>`)}
            ${this.leftOut>0?p`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:m}
          </ul>`:m}
      ${i?p`<small class="picked" title=${i}>${i}</small>`:m}
    </div>`}static styles=[oe,P`
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
    `]};J("fp3d-entity-picker",Ae);var Fr=3*6e4;var an=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Pe(t,e){return e?t.states[e]?[e]:[]:Object.keys(t.states).filter(n=>{let r=t.states[n];if(n.startsWith("event."))return r.attributes.device_class==="doorbell";if(!n.startsWith("binary_sensor."))return!1;let i=`${n} ${String(r.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return an.test(i)}).sort()}function mt(t,e,n,r){if(r)return r;let i=t.entities??{},o=i[e]?.device_id,s=n.filter(u=>u.startsWith("camera.")),a=o?s.find(u=>i[u]?.device_id===o):void 0;if(a)return a;let l=u=>i[u]?.area_id??t.devices?.[i[u]?.device_id??""]?.area_id??null,c=l(e);return c&&s.find(u=>l(u)===c)||null}function ft(t,e){return e&&t.states[e]?e:Object.keys(t.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}function gt(t,e){let n=t.states[e];if(!n)return!1;let r=String(n.attributes.device_class??"");return e.startsWith("binary_sensor.")?r==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(e):e.startsWith("sensor.")?r==="precipitation_intensity"||/\/h$/.test(String(n.attributes.unit_of_measurement??"")):!1}function ht(t){let e=(t??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}var bt=120;function _t(t){return t.callWS({type:"home_3d/packs/updates"})}function Re(t,e){return t.callWS({type:"home_3d/packs/updates/settings",...e})}async function yt(t){return t.callWS({type:"home_3d/voice/settings"})}async function vt(t,e){return t.callWS({type:"home_3d/voice/settings/set",sentences:e})}var ln=["pool"];function cn(){try{let t=new URLSearchParams(location.search).get("fp3d_lab");return t==="1"?localStorage.setItem("home3d.lab","1"):t==="0"&&localStorage.removeItem("home3d.lab"),localStorage.getItem("home3d.lab")==="1"}catch{return!1}}function G(t){return!ln.includes(t)||cn()}var wt={motion_seconds:30,camera_seconds:30,radiator_cold:18,radiator_hot:45,tank_cold:25,tank_hot:55};function xt(t,e){return e==="metric"||e==="imperial"?e:t?.config?.unit_system?.length==="mi"?"imperial":"metric"}function un(t,e){return String(Number(t.toFixed(e)))}function kt(t,e=2){let n=t<0?"-":"",r=Math.round(Math.abs(t)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(r/12+1e-9),o=r-i*12,s=un(o,e>=2?1:0);return i?o<.05?`${n}${i}'`:`${n}${i}' ${s}"`:`${n}${s}"`}function St(t,e){let n=t.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!n)return null;let r=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,s=!1,a=n;for(let l of n.matchAll(r)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let u=l[2];o=!0,a=a.replace(l[0],""),u==="feet"||u==="foot"||u==="ft"||u==="'"?(i+=c*.3048,s=!0):u==="inches"||u==="inch"||u==="in"||u==='"'?i+=c*.0254:u==="mm"?i+=c/1e3:u==="cm"?i+=c/100:u==="m"?i+=c:i+=e==="imperial"?c*(s?.0254:.3048):c}return!o||/[^\s+]/.test(a)?null:i}function Et(t,e){return e==="imperial"?t.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):t}var Tt=[{id:"house",title:"st_group_house"},{id:"live",title:"st_group_live"},{id:"device",title:"st_group_device"},{id:"system",title:"st_group_system"}],Ht=[{id:"general",group:"house",icon:"\u2302",title:"st_sec_general",hint:"st_sec_general_hint",cards:[{id:"plan",title:"st_card_plan"},{id:"opening",title:"st_card_opening"}]},{id:"scene",group:"house",icon:"\u25D0",title:"st_sec_scene",hint:"st_sec_scene_hint",cards:[{id:"sun",title:"st_card_sun"},{id:"weather",title:"st_card_weather"},{id:"backdrop",title:"st_card_backdrop"}]},{id:"energy",group:"house",icon:"\u03DF",title:"st_sec_energy",hint:"st_sec_energy_hint",cards:[{id:"meters",title:"st_card_meters"},{id:"hologram",title:"st_card_hologram"}]},{id:"fun",group:"house",icon:"\u2726",title:"st_sec_fun",hint:"st_sec_fun_hint",cards:[{id:"eggs",title:"st_card_eggs"},{id:"pets",title:"st_card_pets"}]},{id:"warnings",group:"live",icon:"\u26A0",title:"st_sec_warnings",hint:"st_sec_warnings_hint",cards:[{id:"warnings",title:"st_card_warnings"},{id:"dismissed",title:"st_card_dismissed"}]},{id:"effects",group:"live",icon:"\u224B",title:"st_sec_effects",hint:"st_sec_effects_hint",cards:[{id:"motion",title:"st_card_motion"}]},{id:"cameras",group:"live",icon:"\u25C9",title:"st_sec_cameras",hint:"st_sec_cameras_hint",cards:[{id:"cameras",title:"st_card_cameras"},{id:"director",title:"st_card_director"}]},{id:"household",group:"live",icon:"\u267B",title:"st_sec_household",hint:"st_sec_household_hint",cards:[{id:"bins",title:"st_card_bins"},{id:"pinboard",title:"st_card_pinboard"}]},{id:"favourites",group:"live",icon:"\u2605",title:"st_sec_favourites",hint:"st_sec_favourites_hint",cards:[{id:"favourites",title:"st_card_favourites"},{id:"buttons",title:"st_card_buttons"},{id:"presets",title:"st_card_presets"}]},{id:"look",group:"device",icon:"\u25D1",title:"st_sec_look",hint:"st_sec_look_hint",cards:[{id:"look",title:"st_card_look"},{id:"markers",title:"st_card_markers"},{id:"show",title:"st_card_show"},{id:"cards",title:"st_cards_title"}]},{id:"voice",group:"device",icon:"\u25D6",title:"st_sec_voice",hint:"st_sec_voice_hint",cards:[{id:"voice",title:"st_card_voice"}]},{id:"access",group:"system",icon:"\u26E8",title:"st_sec_access",hint:"st_sec_access_hint",cards:[{id:"editors",title:"st_card_editors"},{id:"tablets",title:"st_card_tablets"}]},{id:"packs",group:"system",icon:"\u25A6",title:"st_sec_packs",hint:"st_sec_packs_hint",cards:[{id:"updates",title:"st_card_updates"}]},{id:"backup",group:"system",icon:"\u27F2",title:"st_sec_backup",hint:"st_sec_backup_hint",cards:[{id:"backup",title:"st_card_backup"}]},{id:"advanced",group:"system",icon:"\u2699",title:"st_sec_advanced",hint:"st_sec_advanced_hint",cards:[{id:"advanced",title:"st_card_advanced"},{id:"people",title:"st_card_people"}]}];function Y(t){return Ht.find(e=>e.id===t)}function h(t,e){let n=structuredClone(t);return Object.assign(n.settings,e),n}function g(t,e,n){let r=structuredClone(t);return r.settings[e]={...r.settings[e]??{},...n},r}var y=(t,e,n)=>Math.min(n,Math.max(e,t)),b=t=>t.building?.settings??{};function E(t,e,n,r,i,o,s,a){return{id:t,section:e,card:n,scope:"house",permission:"editor",label:o,hint:s,keywords:a,control:{kind:"switch"},default:i,read:l=>{let c=b(l)[r];return typeof c=="boolean"?c:i},write:(l,c)=>h(l.building,{[r]:c})}}function Te(t,e,n,r,i,o,s,a,l){return{id:t,section:e,card:n,scope:"house",permission:"editor",label:i,hint:o,keywords:l,control:{kind:"entity",filter:s,auto:a},default:null,read:c=>b(c)[r]??null,write:(c,u)=>h(c.building,{[r]:u})}}function _(t,e,n,r,i,o,s,a){return{id:t,section:e,card:n,scope:"device",permission:"everyone",label:o,hint:s,keywords:a,control:{kind:"switch"},default:i,prefKeys:[r],read:l=>{let c=l.prefs.get(r);return c===null?i:c==="1"},write:(l,c)=>l.prefs.set(r,c?"1":"0")}}function w(t,e,n,r,i,o,s,a,l,c,u="segment"){return{id:t,section:e,card:n,scope:"device",permission:"everyone",label:s,hint:l,keywords:c,control:u==="segment"?{kind:"segment",options:a}:{kind:"select",options:()=>a},default:o,prefKeys:[r],read:d=>{let f=d.prefs.get(r);return f!==null&&i.includes(f)?f:o},write:(d,f)=>d.prefs.set(r,f)}}function N(t,e,n,r,i,o,s){let a=(l,c)=>i&&l.hass?Math.round(ot(l.hass,c)*10)/10:c;return{id:`effects.${t}`,section:e,card:n,scope:"house",permission:"editor",label:r,hint:s,keywords:o,control:{kind:"number",step:i?1:5,min:i?-20:0,max:i?212:3600,clearable:!0,unit:l=>i?l.hass?j(l.hass):"\xB0C":"s"},default:pn(t),read:l=>{let c=l.building?.settings.effects?.[t];return typeof c=="number"?a(l,c):null},write:(l,c)=>{let u=c===null||!Number.isFinite(c)?null:i?y(Se(c,l.hass?j(l.hass):"\xB0C"),-20,100):y(Math.round(c),0,3600),d={...l.building.settings.effects??{},[t]:u};for(let f of Object.keys(d))(d[f]===null||d[f]===void 0)&&delete d[f];return h(l.building,{effects:Object.keys(d).length?d:null})}}}function pn(t){return wt[t]}var mn=[{id:"units",section:"general",card:"plan",scope:"house",permission:"editor",label:"units",hint:"units_hint",keywords:["feet","inches","metres","meters","imperial","metric"],control:{kind:"segment",options:[{value:"auto",label:"quality_auto"},{value:"metric",label:"units_metric"},{value:"imperial",label:"units_imperial"}]},default:"auto",read:t=>b(t).units??"auto",write:(t,e)=>h(t.building,{units:e==="metric"||e==="imperial"?e:null})},{id:"grid",section:"general",card:"plan",scope:"house",permission:"editor",label:"grid",keywords:["snap","step"],control:{kind:"number",step:.01,min:.01,max:1,length:!0},default:.05,read:t=>b(t).grid??.05,write:(t,e)=>h(t.building,{grid:y(e,.01,1)})},{id:"wall_exterior",section:"general",card:"plan",scope:"house",permission:"editor",label:"wall_exterior",keywords:["thickness","outer"],control:{kind:"number",step:.01,min:.02,max:1,length:!0},default:.24,read:t=>b(t).wall_exterior??.24,write:(t,e)=>h(t.building,{wall_exterior:y(e,.02,1)})},{id:"wall_interior",section:"general",card:"plan",scope:"house",permission:"editor",label:"wall_interior",keywords:["thickness","inner"],control:{kind:"number",step:.01,min:.02,max:1,length:!0},default:.12,read:t=>b(t).wall_interior??.12,write:(t,e)=>h(t.building,{wall_interior:y(e,.02,1)})},{id:"north",section:"general",card:"plan",scope:"house",permission:"editor",label:"north",hint:"north_hint",keywords:["compass","sun","orientation"],control:{kind:"number",step:1,min:0,max:359,unit:"\xB0"},default:0,read:t=>b(t).north??0,write:(t,e)=>h(t.building,{north:(Math.round(e)%360+360)%360})},E("lock_plan","general","plan","lock_plan",!1,"plan_lock","st_lock_plan_hint",["lock","fixed","accident"]),{id:"start_view",section:"general",card:"opening",scope:"house",permission:"editor",label:"start_view",hint:"st_start_view_hint",keywords:["camera","angle","opens"],control:{kind:"action",button:"st_start_view_use",action:"start_view"},default:null,read:t=>b(t).start_view??null,write:(t,e)=>h(t.building,{start_view:e??null})},{id:"editor_floor",section:"general",card:"opening",scope:"house",permission:"editor",label:"editor_floor",hint:"editor_floor_hint",control:{kind:"select",options:t=>[{value:"",label:"editor_floor_auto"},...(t.building?.floors??[]).map(e=>({value:e.id,label:e.name,raw:!0}))]},default:"",read:t=>b(t).editor_floor??"",write:(t,e)=>h(t.building,{editor_floor:e||null})}],fn=[E("rain_warning","warnings","warnings","rain_warning",!0,"rain_warning",void 0,["window","rain"]),Te("rain_entity","warnings","warnings","rain_entity","rain_entity","rain_entity_hint",(t,e)=>!!e.hass&&gt(e.hass,t),void 0,["weather station","rain sensor"]),E("alert_names","warnings","warnings","alert_names",!0,"alert_names","alert_names_hint",["device","names","banner"]),E("alert_unavailable","warnings","warnings","alert_unavailable",!1,"alert_unavailable","alert_unavailable_hint",["battery","contact","offline"]),Te("outage_entity","warnings","warnings","outage_entity","outage_entity","outage_entity_hint",t=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(t),void 0,["power","grid","ups","blackout"]),{id:"alert_ignored",section:"warnings",card:"dismissed",scope:"house",permission:"editor",label:"alert_ignored",hint:"alert_ignored_hint",keywords:["dismissed","ignored","restore","banner"],control:{kind:"list",list:"alert_ignored"},default:[],read:t=>b(t).alert_ignored??[],write:(t,e)=>h(t.building,{alert_ignored:e})}],gn=[N("motion_seconds","effects","motion","effects_motion_seconds",!1,["motion","light up","presence"],"effects_hint"),N("radiator_cold","effects","motion","effects_radiator_cold",!0,["radiator","heating","blue"]),N("radiator_hot","effects","motion","effects_radiator_hot",!0,["radiator","heating","red"]),N("tank_cold","effects","motion","effects_tank_cold",!0,["cylinder","hot water","tank"]),N("tank_hot","effects","motion","effects_tank_hot",!0,["cylinder","hot water","tank"])],S=t=>t.building?.settings.director??{},se=(t,e,n,r)=>({id:`director.${t}`,section:"cameras",card:"director",scope:"house",permission:"editor",label:e,hint:n,keywords:r,control:{kind:"switch"},default:!1,read:i=>!!S(i)[t],write:(i,o)=>g(i.building,"director",{[t]:o})}),Rt=t=>new Set((t.building?.floors??[]).flatMap(e=>e.placements.map(n=>n.entity_id)).filter(e=>e.startsWith("camera."))),hn=[N("camera_seconds","cameras","cameras","effects_camera_seconds",!1,["camera","red","motion","hold"]),_("director_here","cameras","director","director",!1,"director_here","st_director_here_hint",["director","tablet","move by itself"]),se("doorbell","director_doorbell",void 0,["doorbell","ring","door"]),{id:"director.doorbell_entity",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_doorbell_entity",keywords:["doorbell"],control:{kind:"entity",filter:t=>t.startsWith("event.")||t.startsWith("binary_sensor."),auto:t=>t.hass?Pe(t.hass)[0]??null:void 0},default:null,visible:t=>!!S(t).doorbell,read:t=>S(t).doorbell_entity??null,write:(t,e)=>g(t.building,"director",{doorbell_entity:e})},{id:"director.doorbell_camera",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_doorbell_camera",keywords:["doorbell","camera"],control:{kind:"entity",filter:(t,e)=>Rt(e).has(t),auto:t=>{let e=t.hass?S(t).doorbell_entity??Pe(t.hass)[0]??null:null;return t.hass&&e?mt(t.hass,e,[...Rt(t)]):null}},default:null,visible:t=>!!S(t).doorbell,read:t=>S(t).doorbell_camera??null,write:(t,e)=>g(t.building,"director",{doorbell_camera:e})},{id:"director.motion",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_motion",keywords:["person","people","motion"],control:{kind:"segment",options:[{value:"off",label:"director_motion_off"},{value:"person",label:"director_motion_person"},{value:"all",label:"director_motion_all"}]},default:"off",read:t=>S(t).motion??"off",write:(t,e)=>g(t.building,"director",{motion:e})},se("appliances","director_appliances",void 0,["washer","dryer","dishwasher"]),se("alerts","director_alerts",void 0,["warning","smoke"]),se("live","director_live","director_live_hint",["stream","video"]),{id:"director.hold",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_hold",hint:"director_back_hint",keywords:["back","return","seconds"],control:{kind:"number",step:5,min:10,max:600,unit:"s"},default:30,read:t=>S(t).hold??30,write:(t,e)=>g(t.building,"director",{hold:y(Math.round(e),10,600)})},{id:"director.triggers",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_triggers",hint:"director_triggers_hint",keywords:["garage","gate","trigger"],control:{kind:"embed",topic:"director_triggers"},default:[],read:t=>S(t).triggers??[]}];function bn(t){return t?.easter_eggs!==!1}var _n=[E("easter_eggs","fun","eggs","easter_eggs",!0,"st_easter_eggs","st_easter_eggs_hint",["surprise","halloween","ghost","fun","egg"]),{id:"halloween.ghost",section:"fun",card:"eggs",scope:"house",permission:"editor",label:"halloween_ghost",hint:"st_ghost_hint",keywords:["halloween","ghost","spooky"],control:{kind:"switch"},default:!0,visible:t=>G("fun_halloween")&&bn(t.building?.settings),read:t=>t.building?.settings.halloween?.ghost!==!1,write:(t,e)=>g(t.building,"halloween",{ghost:e})},{id:"pets.on",section:"fun",card:"pets",scope:"house",permission:"editor",label:"pets_show",keywords:["cat","dog","rabbit","animals"],control:{kind:"switch"},default:!0,visible:()=>G("fun_pets"),read:t=>t.building?.settings.pets?.on!==!1,write:(t,e)=>{let n=structuredClone(t.building);return n.settings.pets={on:e,list:[...n.settings.pets?.list??[]]},n}},{id:"pets.list",section:"fun",card:"pets",scope:"house",permission:"editor",label:"fun_name_pets",hint:"st_pets_edit_hint",keywords:["cat","dog","rabbit","fur","name"],control:{kind:"action",button:"st_pets_edit",action:"extensions"},default:[],visible:()=>G("fun_pets"),read:t=>t.building?.settings.pets?.list??[]}],C=t=>t.building?.settings.backdrop??{},Me=(t,e,n,r,i)=>({id:t,section:"scene",card:"backdrop",scope:"house",permission:"editor",label:n,keywords:["background","colour","color","sky"],control:{kind:"colour",fallback:r},default:null,visible:o=>i.includes(C(o).kind??""),read:o=>C(o)[e]??null,write:(o,s)=>g(o.building,"backdrop",{[e]:s})}),yn=[E("sun_shadow","scene","sun","sun_shadow",!0,"sun_shadow","sun_shadow_hint",["sun","arc","shadow"]),E("sun_patches","scene","sun","sun_patches",!0,"sun_patches","sun_patches_hint",["sun","floor","light"]),E("window_glow","scene","sun","window_glow",!0,"window_glow","window_glow_hint",["night","glow","light"]),Te("weather_entity","scene","weather","weather_entity","weather_entity","weather_entity_hint",t=>t.startsWith("weather."),t=>t.hass?ft(t.hass,null):void 0,["forecast","rain","snow"]),{id:"weather_effects",section:"scene",card:"weather",scope:"house",permission:"editor",label:"weather_effects",hint:"st_weather_effects_hint",keywords:["rain","snow","fog","clouds","lightning","moon"],control:{kind:"checks",options:re.map(t=>({value:t,label:`weather_effect_${t}`}))},default:[...ie],read:t=>[...b(t).weather_effects??ie],write:(t,e)=>h(t.building,{weather_effects:re.filter(n=>e.includes(n))})},{id:"backdrop.kind",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"backdrop_kind",hint:"backdrop_hint",keywords:["background","sky","picture","gradient","wallpaper"],control:{kind:"segment",options:[{value:"",label:"backdrop_look"},{value:"color",label:"backdrop_color"},{value:"gradient",label:"backdrop_gradient"},{value:"image",label:"backdrop_image"}]},default:"",read:t=>C(t).kind??"",write:(t,e)=>g(t.building,"backdrop",{kind:e||null})},Me("backdrop.color","color","backdrop_color","#0b1426",["color"]),Me("backdrop.top","color","backdrop_top","#0b1426",["gradient"]),Me("backdrop.bottom","color2","backdrop_bottom","#03060c",["gradient"]),{id:"backdrop.image",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"backdrop_image_url",keywords:["background","picture","photo","local"],control:{kind:"text",placeholder:"st_backdrop_placeholder",maxLength:500},default:"",visible:t=>C(t).kind==="image",read:t=>C(t).image??"",write:(t,e)=>g(t.building,"backdrop",{image:e.trim()?ht(e)??e.trim():null})},{id:"backdrop.dim",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"backdrop_dim",keywords:["background","darken","picture"],control:{kind:"range",min:0,max:90,step:5},default:45,visible:t=>C(t).kind==="image",read:t=>Math.round((C(t).dim??.45)*100),write:(t,e)=>g(t.building,"backdrop",{dim:y(e,0,90)/100})},{id:"terrain.level",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"terrain_level",hint:"terrain_hint",keywords:["ground","cellar","basement","hill"],control:{kind:"number",step:.05,min:-20,max:20,unit:"m",clearable:!0,length:!0},default:-.2,read:t=>t.building?.settings.terrain?.level??null,write:(t,e)=>g(t.building,"terrain",{level:e===null?null:y(e,-20,20)})},{id:"terrain.earth",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"terrain_earth",hint:"terrain_earth_hint",keywords:["ground","cellar","basement","earth"],control:{kind:"switch"},default:!0,read:t=>t.building?.settings.terrain?.earth!==!1,write:(t,e)=>g(t.building,"terrain",{earth:e})}],He=t=>t.building?.settings.household??{},Mt=(t,e,n,r)=>({id:`household.${t}`,section:"household",card:"bins",scope:"house",permission:"editor",label:e,hint:r,keywords:["bin","waste","rubbish","glow","pickup"],control:{kind:"number",step:.5,min:0,max:24,unit:"h"},default:n,read:i=>He(i)[t]??n,write:(i,o)=>g(i.building,"household",{[t]:y(o,0,24)})}),vn=[Mt("bin_from","st_bin_from",14,"bin_hint"),Mt("bin_until","st_bin_until",12),{id:"household.bin_next_only",section:"household",card:"bins",scope:"house",permission:"editor",label:"bin_next_only",keywords:["bin","tag","label","pickup"],control:{kind:"switch"},default:!1,read:t=>!!He(t).bin_next_only,write:(t,e)=>g(t.building,"household",{bin_next_only:e||null})},{id:"household.bin_days",section:"household",card:"bins",scope:"house",permission:"editor",label:"bin_days",hint:"bin_tags_hint",keywords:["bin","tag","days","before"],control:{kind:"number",step:1,min:0,max:60,clearable:!0},default:null,read:t=>He(t).bin_days??null,write:(t,e)=>g(t.building,"household",{bin_days:e===null?null:y(Math.round(e),0,60)})},{id:"household.kerb",section:"household",card:"bins",scope:"house",permission:"editor",label:"bin_kerb",hint:"st_kerb_note",keywords:["bin","kerb","street","calendar"],control:{kind:"action",button:"st_open_editor",action:"editor"},default:null,read:()=>null},{id:"household.notes",section:"household",card:"pinboard",scope:"house",permission:"editor",label:"hh_notes",hint:"hh_notes_hint",keywords:["pinboard","notes","text","household"],control:{kind:"entity",filter:t=>/^(input_text|text|sensor)\./.test(t)},default:null,read:t=>t.building?.settings.household?.notes??null,write:(t,e)=>g(t.building,"household",{notes:e})}],$=(t,e,n,r,i,o,s,a="editor",l=()=>null)=>({id:t,section:e,card:n,scope:"house",permission:a,label:i,hint:o,keywords:s,control:{kind:"embed",topic:r},default:null,read:l}),wn=[$("favorites","favourites","favourites","favorites","favorites",void 0,["star","scene","script","central menu"],"editor",t=>t.building?.settings.favorites??[]),$("buttons","favourites","buttons","own_buttons","own_buttons","own_buttons_hint",["button","navigate","dashboard","popup","browser_mod"],"editor",t=>t.building?.settings.buttons??[]),$("media_presets","favourites","presets","media_presets","presets","presets_hint",["radio","spotify","playlist","speaker","station"],"editor",t=>t.building?.settings.media_presets??[])],xn=[_("voice_here","voice","voice","voice",!1,"st_voice_here","voice_hint",["microphone","speak","assist"]),{id:"screen_name",section:"voice",card:"voice",scope:"device",permission:"everyone",label:"screen_name",hint:"screen_name_hint",keywords:["assist","screen","name","home_3d.ask"],control:{kind:"text",placeholder:"screen_name_placeholder",maxLength:60},default:"",prefKeys:["screen"],read:t=>t.prefs.get("screen")??"",write:(t,e)=>t.prefs.set("screen",e.trim()||null)},{id:"voice_pipeline",section:"voice",card:"voice",scope:"device",permission:"everyone",label:"voice_pipeline",keywords:["assist","pipeline","speech to text"],loader:"voice_pipelines",control:{kind:"select",options:t=>[{value:"",label:"voice_pipeline_preferred"},...(t.remote?.voice_pipelines?.pipelines??[]).map(e=>({value:e.id,label:e.name,raw:!0})),...t.prefs.get("voicePipeline")&&!(t.remote?.voice_pipelines?.pipelines??[]).some(e=>e.id===t.prefs.get("voicePipeline"))?[{value:t.prefs.get("voicePipeline"),label:t.prefs.get("voicePipeline"),raw:!0}]:[]]},default:"",prefKeys:["voicePipeline"],read:t=>t.prefs.get("voicePipeline")??"",write:(t,e)=>t.prefs.set("voicePipeline",e||null)},{id:"voice_sentences",section:"voice",card:"voice",scope:"install",permission:"ha_admin",label:"voice_sentences",hint:"voice_sentences_hint",keywords:["assist","sentences","custom_sentences"],loader:"voice_sentences",control:{kind:"select",options:()=>["off","distinct","all"].map(t=>({value:t,label:`voice_sentences_${t}`}))},default:"off",read:t=>t.remote?.voice_sentences?.sentences??"off",write:(t,e)=>t.hass?vt(t.hass,e):void 0},{id:"mic_test",section:"voice",card:"voice",scope:"device",permission:"everyone",label:"st_mic_test",hint:"director_mic_hint",keywords:["microphone","test","https"],control:{kind:"action",button:"director_mic_test",action:"mic_probe"},default:null,read:()=>null}],Ct={voice_sentences:t=>yt(t),voice_pipelines:t=>t.callWS({type:"assist_pipeline/pipeline/list"}),pack_updates:t=>_t(t)},It={auto_update:!1,frequency:"daily",time:"04:00",weekday:0},ae=t=>({...It,...t.remote?.pack_updates?.settings??{}}),Oe=(t,e)=>({id:`pack_updates.${t}`,section:"packs",card:"updates",scope:"install",permission:"editor",default:It[t],loader:"pack_updates",read:n=>ae(n)[t],write:(n,r)=>n.hass?Re(n.hass,{[t]:r}):void 0,...e}),kn=[Oe("frequency",{label:"upd_frequency",keywords:["packs","updates","github","release","schedule"],control:{kind:"segment",options:["off","daily","weekly","monthly"].map(t=>({value:t,label:`upd_freq_${t}`}))}}),{id:"pack_updates.weekday",section:"packs",card:"updates",scope:"install",permission:"editor",label:"upd_weekday",hint:"st_upd_weekday_hint",keywords:["packs","updates","day"],loader:"pack_updates",control:{kind:"select",options:()=>[0,1,2,3,4,5,6].map(t=>({value:String(t),label:`upd_day_${t}`}))},default:"0",visible:t=>ae(t).frequency==="weekly",read:t=>String(ae(t).weekday),write:(t,e)=>t.hass?Re(t.hass,{weekday:Number(e)}):void 0},Oe("time",{label:"upd_time",keywords:["packs","updates","time","night"],control:{kind:"time"},visible:t=>ae(t).frequency!=="off"}),Oe("auto_update",{label:"upd_auto",keywords:["packs","updates","automatic","placed items"],control:{kind:"switch"}}),{id:"pack_updates.open",section:"packs",card:"updates",scope:"install",permission:"editor",label:"upd_title",hint:"st_upd_open",keywords:["packs","install","github","pin","roll back"],control:{kind:"action",button:"st_upd_open_btn",action:"extensions"},default:null,read:()=>null}],Sn=[$("editors","access","editors","editors","editors_title",void 0,["edit","permission","users","admin"],"ha_admin"),$("tablet_users","access","tablets","tablet_users","tablet_users","st_tablet_users_hint",["kiosk","wall","locked","tablet"],"ha_admin",t=>t.building?.settings.tablet_users??[]),{id:"tablet_idle",section:"access",card:"tablets",scope:"house",permission:"editor",label:"tablet_idle",keywords:["kiosk","idle","return","whole house"],control:{kind:"number",step:10,min:0,max:86400,unit:"s",clearable:!0},default:bt,read:t=>b(t).tablet_idle??null,write:(t,e)=>h(t.building,{tablet_idle:e===null?null:y(Math.round(e),0,86400)})}],En=[$("energy.balance","energy","meters","energy_balance","energy_balance","energy_balance_hint",["grid","solar","battery","tariff","cheap rate","off-peak","gas","water","meter","sensor","import"],"editor",t=>t.building?.energy??null),{...$("hologram","energy","hologram","hologram","holo_settings","holo_settings_hint",["hologram","solar","cards","energy pro"],"editor",t=>t.building?.settings.roof.hologram??null)}],$n=[$("backup","backup","backup","backup","backup",void 0,["restore","export","import","file","history"])],x=t=>t.map(([e,n])=>({value:e,label:n})),An=[w("theme","look","look","theme",["theme","neon","blueprint","day","realistic","auto"],"theme","theme",x([["theme","theme_theme"],["neon","theme_neon"],["blueprint","theme_blueprint"],["day","theme_day"],["realistic","theme_realistic"],["auto","theme_auto"]]),void 0,["dark","light","day","night","neon","theme","colour scheme"],"select"),{id:"accent",section:"look",card:"look",scope:"device",permission:"everyone",label:"accent",hint:"accent_hint",keywords:["colour","color","cyan","highlight"],control:{kind:"colour",fallback:"#37e0ff",clearable:!0},default:null,prefKeys:["accent"],read:t=>{let e=t.prefs.get("accent");return e&&/^#[0-9a-f]{6}$/i.test(e)?e:null},write:(t,e)=>t.prefs.set("accent",e)},w("quality","look","look","quality",["auto","low","high"],"auto","quality",x([["auto","quality_auto"],["low","quality_low"],["high","quality_high"]]),void 0,["performance","tablet","speed","graphics"]),w("clock","look","look","clock",["off","tl","tr","bl","br"],"off","st_clock",x([["off","st_clock_off"],["tl","st_clock_tl"],["tr","st_clock_tr"],["bl","st_clock_bl"],["br","st_clock_br"]]),void 0,["time","clock","corner"],"select"),w("markers","look","markers","markers",["none","room","important","all"],"important","markers",x([["none","markers_none"],["room","markers_room"],["important","markers_important"],["all","markers_all"]]),void 0,["pins","icons","symbols","devices"]),w("pinSize","look","markers","pinSize",["small","normal","large"],"normal","pin_size",x([["small","pin_size_small"],["normal","pin_size_normal"],["large","pin_size_large"]]),void 0,["pins","icons","symbols","size"]),w("controls","look","markers","controls",["left","right"],"left","controls_side",x([["left","st_controls_left"],["right","st_controls_right"]]),void 0,["left","right","star","search"]),_("keep_view","look","markers","keep_view",!1,"keep_view","keep_view_hint",["camera","floor"]),_("angle_lock","look","markers","angle_lock",!1,"angle_lock","angle_lock_hint",["lock","turn","rotate"]),_("nav_wrap","look","markers","nav_wrap",!1,"st_nav_wrap",void 0,["floors","rooms","bar","chips"]),_("plan2d","look","show","plan2d",!1,"st_view_2d",void 0,["2d","plan","flat"]),w("walls","look","show","walls",["auto","cut"],"auto","st_walls",x([["auto","walls_auto"],["cut","walls_cut"]]),void 0,["walls","cut","tall"]),w("explode","look","show","explode",["1","0"],"1","st_floors",x([["1","floors_apart"],["0","floors_stacked"]]),void 0,["floors","apart","stacked","explode"]),w("floor_stack","look","show","floor_stack",["dim","stacked","single"],"dim","st_floor_stack",x([["dim","floor_stack_short_dim"],["stacked","floor_stack_short_stacked"],["single","floor_stack_short_single"]]),void 0,["floors","below","dimmed"]),_("roof","look","show","roof",!1,"st_keep_roof","roof_keep_hint",["roof","zoom"]),w("heat","look","show","heat",["none","temperature","humidity","co2","values"],"none","st_heat",x([["none","heat_off"],["temperature","heat_short_temperature"],["humidity","heat_short_humidity"],["co2","heat_short_co2"],["values","heat_short_values"]]),void 0,["heatmap","temperature","humidity","co2"]),_("room_names","look","show","room_names",!0,"st_room_names",void 0,["labels","names","rooms"]),_("trail","look","show","trail",!1,"st_trail","trail_hint",["motion","trail","history"]),_("weather","look","show","weather",!0,"st_weather","weather_hint",["rain","snow","weather"])],Pn=[_("stats","advanced","advanced","stats",!1,"st_fps","fps_title",["fps","performance","frames","speed"]),{id:"reset_device",section:"advanced",card:"advanced",scope:"device",permission:"everyone",label:"st_reset_device",hint:"st_reset_device_hint",keywords:["reset","defaults","preferences","browser"],control:{kind:"action",button:"st_reset",action:"reset_device"},default:null,read:()=>null},E("demo","advanced","advanced","demo",!1,"demo_states","st_demo_hint",["sample","screenshot","fake"]),{id:"modules",section:"advanced",card:"advanced",scope:"house",permission:"editor",label:"st_modules",hint:"st_modules_note",keywords:["module","pack","plugin","sentences","speakers"],control:{kind:"note"},default:null,read:()=>null},{id:"locate",section:"advanced",card:"people",scope:"house",permission:"ha_admin",label:"st_locate",hint:"st_locate_hint",keywords:["locating","people","presence","bluetooth","position"],control:{kind:"action",button:"st_open",action:"locate"},default:null,visible:()=>G("locate"),read:()=>null},{id:"person_look",section:"advanced",card:"people",scope:"house",permission:"editor",label:"st_person_look",keywords:["people","person","figure","pin","located"],control:{kind:"segment",options:[{value:"figure",label:"st_person_figure"},{value:"pin",label:"st_person_pin"},{value:"off",label:"st_person_off"}]},default:"figure",read:t=>b(t).person_look??"figure",write:(t,e)=>h(t.building,{person_look:e==="pin"||e==="off"?e:null})},{...$("presence","advanced","people","presence","presence","presence_hint",["presence","espresense","bermuda","room sensor"]),visible:()=>!1}],Rn=[{id:"dashboard_cards",section:"look",card:"cards",scope:"device",permission:"everyone",label:"st_cards_title",hint:"st_cards_note",keywords:["card","dashboard","lovelace","options"],control:{kind:"note"},default:null,read:()=>null}],Ce=[...mn,...yn,...En,..._n,...fn,...gn,...hn,...vn,...wn,...An,...Rn,...xn,...Sn,...kn,...$n,...Pn];function Z(t){return xt(t.hass,t.building?.settings.units)}function le(t,e){return Z(t)==="imperial"?kt(e):String(Math.round(e*1e3)/1e3)}function Lt(t,e){return St(e,Z(t))}function Ft(t,e){return Et(e,Z(t))}function Nt(){return[...new Set([...Ce.flatMap(t=>t.prefKeys??[]),"clean"])]}var Mn=["home3d.lab","home3d.projection","home3d.unsaved","home3d.home."];function On(t){return Mn.some(e=>e.endsWith(".")?t.startsWith(e):t===e)?!1:t.startsWith("home3d.")||t.startsWith("fp3d-tt-")}function zt(...t){for(let e of t)try{let n=[];for(let r=0;r<e.length;r++){let i=e.key(r);i!==null&&On(i)&&n.push(i)}for(let r of n)e.removeItem(r)}catch{}}function Ut(t,e){try{return t.visible?t.visible(e):!0}catch{return!1}}function ce(t,e){return Ce.filter(n=>n.section===t&&Ut(n,e))}function Ie(t){return Ht.filter(e=>ce(e.id,t).length>0)}function Le(t,e){return t.permission==="everyone"?!0:t.permission==="ha_admin"?e.haAdmin:e.editor}function Ot(t){return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}function Fe(t,e,n){let r=Ot(t).split(/\s+/).filter(Boolean);return r.length?Ce.filter(i=>{if(!Ut(i,e))return!1;let o=Y(i.section),s=o?.cards.find(l=>l.id===i.card),a=Ot([n(i.label),i.hint?n(i.hint):"",...i.keywords??[],o?n(o.title):"",s?n(s.title):"",i.id].join(" "));return r.every(l=>a.includes(l))}):[]}var ui=re.map(t=>({value:t,label:`weather_effect_${t}`}));function Tn(){let t=[];for(let e of["localStorage","sessionStorage"])try{t.push(globalThis[e])}catch{}return t.filter(Boolean)}var Ne={get(t){try{return localStorage.getItem(`home3d.${t}`)}catch{return null}},set(t,e){try{e===null?localStorage.removeItem(`home3d.${t}`):localStorage.setItem(`home3d.${t}`,e)}catch{}}},Hn=760,ue=class extends v{static properties={hass:{attribute:!1},building:{attribute:!1},canEdit:{attribute:!1},packs:{attribute:!1},t:{attribute:!1},section:{attribute:!1},focusId:{attribute:!1},saveState:{attribute:!1},homeName:{attribute:!1},lastView:{attribute:!1},loadEditor:{attribute:!1},loaders:{attribute:!1},_section:{state:!0},_query:{state:!0},_drill:{state:!0},_flash:{state:!0},_remote:{state:!0},_embedState:{state:!0},_note:{state:!0}};remoteAsked=new Set;flashTimer;constructor(){super(),this.building=null,this.section=null,this.focusId=null,this.saveState="idle",this.homeName="",this.lastView=null,this.t=e=>e,this._section="general",this._query="",this._drill=!1,this._flash=null,this._remote={},this._embedState=customElements.get("fp3d-editor")?"ready":"idle",this._note=null}tr(e,n){return this.t(e,n)}get loadersNow(){return this.loaders??Ct}get env(){return{building:this.building,hass:this.hass,prefs:Ne,lastView:this.lastView,remote:this._remote}}get viewer(){return{editor:this.canEdit??this.hass?.user?.is_admin??!1,haAdmin:this.hass?.user?.is_admin??!1}}shouldUpdate(e){return!(e.size===1&&e.has("hass")&&e.get("hass"))}willUpdate(e){if((e.has("section")||e.has("focusId"))&&(this.section||this.focusId)){let r=this.section??this._section;Y(r)&&(this._section=r),this._query="",this._drill=!0,this.focusId&&this.flash(this.focusId)}let n=Ie(this.env);n.length&&!n.some(r=>r.id===this._section)&&(this._section=n[0].id),this.askRemote()}updated(){if(!this._flash)return;let e=this.renderRoot.querySelector(`[data-id="${CSS.escape(this._flash)}"]`);e&&!e.hasAttribute("data-seen")&&(e.setAttribute("data-seen",""),e.scrollIntoView({block:"center"}))}flash(e){this._flash=e,clearTimeout(this.flashTimer),this.flashTimer=setTimeout(()=>this._flash=null,2500)}askRemote(){if(!this.hass)return;let n=new Set((this._query?Fe(this._query,this.env,r=>this.tr(r)):ce(this._section,this.env)).map(r=>r.loader).filter(r=>!!r));for(let r of n)this.remoteAsked.has(r)||!this.loadersNow[r]||(this.remoteAsked.add(r),this.reload(r))}async reload(e){let n=this.hass,r=this.loadersNow[e];if(!(!n||!r))try{this._remote={...this._remote,[e]:await r(n)}}catch(i){this._remote={...this._remote,[e]:{error:String(i?.message??i)}}}}write(e,n){if(!e.write||!Le(e,this.viewer)||e.scope==="house"&&!this.building)return;let r;try{r=e.write(this.env,n)}catch(i){this._note=String(i);return}this.apply(e,r)}apply(e,n){if(n&&typeof n.then=="function"){n.then(()=>e.loader?this.reload(e.loader):void 0).catch(r=>this._note=this.tr("st_failed",{error:String(r?.message??r)}));return}if(n&&typeof n=="object"&&"floors"in n){this.dispatchEvent(new CustomEvent("settings-edit",{detail:{building:n,key:`settings:${e.id}`},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("device-change",{detail:{id:e.id},bubbles:!0,composed:!0})),this.requestUpdate()}act(e,n){if(n==="start_view"){this.lastView&&this.write(e,this.lastView);return}if(n==="reset_device"){for(let r of Nt())Ne.set(r,null);zt(...Tn()),this._note=this.tr("st_reset_done"),this.dispatchEvent(new CustomEvent("device-change",{detail:{id:e.id},bubbles:!0,composed:!0})),this.requestUpdate();return}this.dispatchEvent(new CustomEvent("settings-action",{detail:{action:n,id:e.id},bubbles:!0,composed:!0}))}open(e){this._section=e,this._query="",this._drill=!0,this._note=null,this.dispatchEvent(new CustomEvent("settings-nav",{detail:{section:e,id:null},bubbles:!0,composed:!0})),this.renderRoot.querySelector(".st-main")?.scrollTo?.({top:0})}render(){let e=this.env,n=Ie(e),r=this._query.trim(),i=r?Fe(r,e,o=>this.tr(o)):null;return p`<div class="st ${this._drill||r?"st-drill":""}">
      <nav class="st-nav" aria-label=${this.tr("st_title")}>
        <label class="st-search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            .value=${this._query}
            placeholder=${this.tr("st_search")}
            aria-label=${this.tr("st_search")}
            @input=${o=>this._query=o.target.value}
            @keydown=${o=>o.key==="Escape"&&(this._query="")}
          />
        </label>
        ${Tt.map(o=>{let s=n.filter(a=>a.group===o.id);return s.length?p`<div class="st-group">${this.tr(o.title)}</div>
                ${s.map(a=>p`<button class="st-nav-btn" aria-current=${!r&&a.id===this._section?"page":"false"} @click=${()=>this.open(a.id)}>
                    <span class="st-ic" aria-hidden="true">${a.icon}</span><span>${this.tr(a.title)}</span><span class="st-chev" aria-hidden="true">›</span>
                  </button>`)}`:m})}
      </nav>
      <main class="st-main">
        ${i?this.renderResults(r,i):this.renderSection(Y(this._section))}
        <footer class="st-foot">
          <span>${this.homeName?this.tr("st_home",{name:this.homeName}):""}</span>
          <span class="st-save st-save-${this.saveState}" role="status">
            ${this.saveState==="saving"?this.tr("st_saving"):this.saveState==="error"?this.tr("st_save_error"):this.tr("st_saved")}
          </span>
        </footer>
      </main>
    </div>`}renderResults(e,n){let r=new Map;for(let i of n)r.set(i.section,[...r.get(i.section)??[],i]);return p`<button class="st-back" @click=${()=>this._query=""}>‹ ${this.tr("st_back")}</button>
      <div class="st-title"><h2>${n.length?this.tr("st_results",{n:n.length,q:e}):this.tr("st_search_none",{q:e})}</h2></div>
      ${[...r].map(([i,o])=>{let s=Y(i);return p`<section class="st-card">
          <h3><button class="st-link" @click=${()=>this.open(i)}>${s.icon} ${this.tr(s.title)} ›</button></h3>
          ${o.map(a=>this.renderRow(a,!0))}
        </section>`})}`}renderSection(e){let n=ce(e.id,this.env),r=this.viewer,i=n.some(s=>s.scope!=="device"&&s.permission==="editor")&&!r.editor,o=n.length>0&&n.every(s=>s.permission==="ha_admin")&&!r.haAdmin;return p`<button class="st-back" @click=${()=>this._drill=!1}>‹ ${this.tr("st_back")}</button>
      <div class="st-title">
        <h2>${this.tr(e.title)}</h2>
        <p>${this.tr(e.hint)}</p>
      </div>
      ${o?p`<p class="st-lock">🔒 ${this.tr("st_admin_locked")}</p>`:i?p`<p class="st-lock">🔒 ${this.tr("st_locked")}</p>`:m}
      ${this._note?p`<p class="st-note" role="status">${this._note}</p>`:m}
      ${e.cards.map(s=>{let a=n.filter(l=>l.card===s.id);return a.length?p`<section class="st-card">
              <h3>${this.tr(s.title)}</h3>
              ${a.map(l=>this.renderRow(l,!1))}
            </section>`:m})}`}renderRow(e,n){let r=Le(e,this.viewer),i=e.control.kind==="embed"||e.control.kind==="list"||e.control.kind==="checks"||e.control.kind==="entity";return p`<div class="st-row st-k-${e.control.kind} ${e.hint?"":"st-nohint"} ${i?"st-row-wide":""} ${n||this._flash===e.id?"st-hit":""}" data-id=${e.id}>
      <div class="st-lbl">
        <span class="st-name">${e.control.kind==="number"&&e.control.length?Ft(this.env,this.tr(e.label)):this.tr(e.label)}</span>
        ${e.control.kind==="note"?m:p`<span class="st-scope st-scope-${e.scope}" title=${this.tr(`st_scope_${e.scope}_hint`)}>${this.tr(`st_scope_${e.scope}`)}</span>`}
        ${e.permission==="ha_admin"?p`<span class="st-scope st-scope-admin" title=${this.tr("st_admin_hint")}>${this.tr("st_admin")}</span>`:m}
      </div>
      ${e.hint?p`<p class="st-hint">${this.tr(e.hint)}</p>`:m}
      <div class="st-ctl">${this.renderControl(e,e.control,!r)}</div>
    </div>`}options(e){return typeof e.options=="function"?e.options(this.env):e.options}label(e){return e.raw?e.label:this.tr(e.label)}renderControl(e,n,r){let i=this.env,o=e.read(i),s=this.tr(e.label);switch(n.kind){case"switch":return p`<button class="st-sw" role="switch" aria-checked=${!!o} aria-label=${s} ?disabled=${r} @click=${()=>this.write(e,!o)}></button>`;case"number":{if(n.length&&Z(i)==="imperial")return p`<span class="st-num">
            <input
              class="st-len"
              type="text"
              inputmode="text"
              spellcheck="false"
              .value=${typeof o=="number"?le(i,o):""}
              placeholder=${n.clearable&&typeof e.default=="number"?le(i,e.default):""}
              aria-label=${s}
              ?disabled=${r}
              @change=${c=>{let u=c.target,d=u.value.trim();if(d===""){n.clearable&&this.write(e,null);return}let f=Lt(i,d);if(f===null){u.value=typeof o=="number"?le(i,o):"";return}this.write(e,f)}}
            />
          </span>`;let a=typeof n.unit=="function"?n.unit(i):n.unit,l=typeof o=="number"?String(Math.round(o*1e3)/1e3):"";return p`<span class="st-num">
          <input
            type="number"
            inputmode="decimal"
            step=${n.step}
            min=${n.min??""}
            max=${n.max??""}
            .value=${l}
            placeholder=${n.clearable?String(e.default??""):""}
            aria-label=${s}
            ?disabled=${r}
            @change=${c=>{let u=c.target.value.trim().replace(",",".");if(u===""){n.clearable&&this.write(e,null);return}let d=Number(u);Number.isFinite(d)&&this.write(e,d)}}
          />${a?p`<i>${a.startsWith("st_")?this.tr(a):a}</i>`:m}
        </span>`}case"segment":return p`<div class="fp3d-seg st-seg" role="group" aria-label=${s}>
          ${this.options(n).map(a=>p`<button aria-pressed=${o===a.value} ?disabled=${r} @click=${()=>this.write(e,a.value)}>${this.label(a)}</button>`)}
        </div>`;case"select":return p`<select class="st-select" aria-label=${s} ?disabled=${r} @change=${a=>this.write(e,a.target.value)}>
          ${n.options(i).map(a=>p`<option value=${a.value} ?selected=${o===a.value}>${this.label(a)}</option>`)}
        </select>`;case"entity":return this.renderEntity(e,n,r);case"text":return p`<input
          class="st-text"
          type="text"
          maxlength=${n.maxLength??255}
          .value=${String(o??"")}
          placeholder=${n.placeholder?this.tr(n.placeholder):""}
          aria-label=${s}
          ?disabled=${r}
          @change=${a=>this.write(e,a.target.value.trim())}
        />`;case"time":return p`<input
          class="st-text st-time"
          type="time"
          .value=${String(o??"")}
          aria-label=${s}
          ?disabled=${r}
          @change=${a=>this.write(e,a.target.value||null)}
        />`;case"colour":return p`<span class="st-colour">
          <input type="color" .value=${String(o??n.fallback)} aria-label=${s} ?disabled=${r} @input=${a=>this.write(e,a.target.value)} />
          ${n.clearable&&o?p`<button class="fp3d-btn" ?disabled=${r} title=${this.tr("st_accent_default")} @click=${()=>this.write(e,null)}>↺</button>`:m}
        </span>`;case"range":return p`<span class="st-num">
          <input type="range" min=${n.min} max=${n.max} step=${n.step} .value=${String(o??e.default)} aria-label=${s} ?disabled=${r} @change=${a=>this.write(e,Number(a.target.value))} />
          <i>${String(o??e.default)}</i>
        </span>`;case"checks":{let a=new Set(o??[]);return p`<div class="st-checks">
          ${n.options.map(l=>p`<label class="st-check"
              ><input
                type="checkbox"
                .checked=${a.has(l.value)}
                ?disabled=${r}
                @change=${c=>{let u=new Set(a);c.target.checked?u.add(l.value):u.delete(l.value),this.write(e,n.options.map(d=>d.value).filter(d=>u.has(d)))}}
              />
              ${this.label(l)}</label
            >`)}
        </div>`}case"action":return this.renderAction(e,n,r);case"list":return this.renderIgnored(e,r);case"embed":return this.renderEmbed(e,n.topic);case"note":return m}}renderEntity(e,n,r){let i=this.env,o=e.read(i),s=n.auto?.(i),a=s===void 0?null:s?this.t("entity_auto",{name:this.hass?q(this.hass,s):s}):this.t("entity_auto_none"),l=[...a!==null?[{id:"__auto",label:a}]:[],{id:"none",label:this.t("entity_none")}],c=at(this.hass,u=>n.filter(u,i));return p`<fp3d-entity-picker
      .options=${c}
      .fixed=${l}
      .value=${o??(a!==null?"__auto":"none")}
      .placeholder=${this.t("entity_search")}
      aria-label=${this.tr(e.label)}
      ?disabled=${r}
      @change=${u=>{u.stopPropagation();let d=u.detail.value;this.write(e,d==="__auto"||d==="none"?null:d)}}
    ></fp3d-entity-picker>`}renderAction(e,n,r){if(n.action==="start_view"){let o=e.read(this.env);return p`<div class="st-actions">
        <button class="fp3d-btn" ?disabled=${r||!this.lastView} title=${this.lastView?"":this.tr("st_start_view_none")} @click=${()=>this.act(e,"start_view")}>📌 ${this.tr(n.button)}</button>
        ${o?p`<button class="fp3d-btn" ?disabled=${r} @click=${()=>this.write(e,null)}>${this.t("start_view_reset")}</button>`:m}
        <span class="st-sub">${this.tr(o?"st_start_view_set":"st_start_view_default")}</span>
      </div>`}let i=Array.isArray(e.read(this.env))?e.read(this.env).length:0;return p`<button class="fp3d-btn" ?disabled=${r} @click=${()=>this.act(e,n.action)}>${this.tr(n.button,{n:i})}</button>`}renderIgnored(e,n){let r=e.read(this.env)??[];return r.length?p`<div class="st-list">
      ${r.map(i=>{let o=`alert_short_${i.kind}`,s=this.t(o);return p`<div class="st-list-row">
          <span title=${i.entity}>${s===o?i.kind:s} · ${this.hass?q(this.hass,i.entity):i.entity}</span>
          <button class="fp3d-btn" ?disabled=${n} @click=${()=>this.write(e,r.filter(a=>!(a.kind===i.kind&&a.entity===i.entity)))}>${this.t("alert_restore")}</button>
        </div>`})}
    </div>`:p`<p class="st-sub">${this.tr("st_ignored_none")}</p>`}renderEmbed(e,n){return!this.viewer.editor&&e.permission!=="everyone"?p`<p class="st-sub">🔒</p>`:this._embedState!=="ready"?(this._embedState==="idle"&&this.loadEditor&&(this._embedState="loading",this.loadEditor().then(()=>this._embedState="ready",r=>this._embedState=String(r))),p`<p class="st-sub">${this._embedState==="loading"||this._embedState==="idle"?this.tr("st_embed_loading"):this.tr("st_embed_failed",{error:this._embedState})}</p>`):p`<fp3d-editor
      class="st-embed"
      .topic=${n}
      .hass=${this.hass}
      .building=${this.building}
      .canEdit=${this.canEdit}
      .packs=${this.packs}
      .narrow=${!0}
      @building-changed=${r=>{r.stopPropagation(),this.dispatchEvent(new CustomEvent("settings-edit",{detail:{building:r.detail.building,key:null},bubbles:!0,composed:!0}))}}
    ></fp3d-editor>`}static styles=[oe,dt,P`
      :host {
        display: block;
        min-height: 0;
        overflow: hidden;
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      .st {
        display: grid;
        grid-template-columns: 248px 1fr;
        height: 100%;
        min-height: 0;
      }
      .st-nav {
        border-right: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        padding: 12px;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .st-search {
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 0 10px;
        margin-bottom: 8px;
        background: var(--fp3d-bg2);
        color: var(--fp3d-muted);
      }
      .st-search input {
        flex: 1;
        min-width: 0;
        min-height: 38px;
        border: 0;
        background: none;
        color: var(--fp3d-text);
        font: inherit;
        font-size: 14px;
      }
      .st-search input:focus {
        outline: none;
      }
      .st-search:focus-within {
        border-color: var(--fp3d-accent);
      }
      .st-group {
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        padding: 12px 8px 4px;
      }
      .st-nav-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        min-height: 38px;
        padding: 0 8px;
        border: 0;
        border-radius: 8px;
        background: none;
        color: var(--fp3d-text);
        font: inherit;
        font-size: 14px;
        text-align: left;
        cursor: pointer;
      }
      .st-nav-btn:hover {
        background: var(--fp3d-bg2);
      }
      .st-nav-btn[aria-current="page"] {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        color: var(--fp3d-accent);
      }
      .st-ic {
        width: 18px;
        text-align: center;
        opacity: 0.85;
      }
      .st-chev {
        margin-left: auto;
        color: var(--fp3d-muted);
        display: none;
      }
      .st-main {
        overflow: auto;
        padding: 20px 24px 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-width: 0;
      }
      .st-main > * {
        max-width: 860px;
        width: 100%;
      }
      .st-back {
        display: none;
      }
      .st-title h2 {
        margin: 0;
        font-family: var(--fp3d-title-font);
        font-size: 22px;
      }
      .st-title p {
        margin: 4px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      .st-lock,
      .st-note {
        margin: 0;
        padding: 9px 12px;
        border-radius: 10px;
        font-size: 13px;
        color: var(--fp3d-warm);
        border: 1px solid color-mix(in srgb, var(--fp3d-warm) 35%, transparent);
        background: color-mix(in srgb, var(--fp3d-warm) 8%, transparent);
      }
      .st-note {
        color: var(--fp3d-text);
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2);
      }
      .st-card {
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .st-card h3 {
        margin: 0;
        padding: 12px 16px 4px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .st-link {
        border: 0;
        background: none;
        padding: 0;
        color: var(--fp3d-accent);
        font: inherit;
        letter-spacing: inherit;
        text-transform: inherit;
        cursor: pointer;
        min-height: 36px;
      }
      .st-row {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 4px 18px;
        align-items: center;
        padding: 11px 16px;
        border-top: 1px solid var(--fp3d-line);
        transition: background 0.4s;
      }
      .st-card h3 + .st-row {
        border-top: 0;
      }
      .st-row.st-hit {
        background: color-mix(in srgb, var(--fp3d-accent) 8%, transparent);
      }
      .st-lbl {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        grid-column: 1;
      }
      .st-hint {
        grid-column: 1;
        margin: 0;
        font-size: 12.5px;
        line-height: 1.45;
        color: var(--fp3d-muted);
      }
      .st-ctl {
        grid-column: 2;
        grid-row: 1 / span 2;
        justify-self: end;
        min-width: 0;
      }
      .st-nohint .st-ctl {
        grid-row: 1;
      }
      .st-row-wide .st-ctl {
        grid-column: 1 / -1;
        grid-row: auto;
        justify-self: stretch;
      }
      .st-scope {
        font-size: 10.5px;
        font-weight: 600;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        padding: 1px 6px;
        border-radius: 4px;
      }
      .st-scope-house {
        color: var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 12%, transparent);
      }
      .st-scope-install {
        color: var(--fp3d-warm);
        background: color-mix(in srgb, var(--fp3d-warm) 12%, transparent);
      }
      .st-scope-device {
        color: var(--fp3d-soft);
        background: color-mix(in srgb, var(--fp3d-soft) 14%, transparent);
      }
      .st-scope-admin {
        color: var(--fp3d-warm);
        background: color-mix(in srgb, var(--fp3d-warm) 12%, transparent);
      }
      .st-sw {
        position: relative;
        width: 46px;
        height: 28px;
        border: 0;
        padding: 0;
        border-radius: 999px;
        background: var(--fp3d-line);
        cursor: pointer;
        /* the tap target is the whole 46 × 36 px box around the track */
        margin: 4px 0;
      }
      .st-sw::after {
        content: "";
        position: absolute;
        top: 4px;
        left: 4px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--fp3d-muted);
        transition: transform 0.15s, background 0.15s;
      }
      .st-sw[aria-checked="true"] {
        background: color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .st-sw[aria-checked="true"]::after {
        transform: translateX(18px);
        background: var(--fp3d-accent);
      }
      .st-sw:disabled,
      .st-seg button:disabled,
      .st-ctl :disabled {
        opacity: 0.5;
        cursor: default;
      }
      .st-num {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .st-num i {
        font-style: normal;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      .st-num input[type="number"],
      .st-text,
      .st-select {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: var(--fp3d-bg2);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 0 9px;
        min-height: 36px;
        min-width: 0;
      }
      .st-num .st-len {
        width: 110px;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: var(--fp3d-bg2);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 0 9px;
        min-height: 36px;
      }
      .st-num input[type="number"] {
        width: 90px;
        font-variant-numeric: tabular-nums;
      }
      .st-text {
        width: min(280px, 100%);
      }
      .st-time {
        width: auto;
      }
      .st-select {
        max-width: 280px;
      }
      .st-seg {
        flex-wrap: wrap;
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .st-seg button {
        min-height: 32px;
        padding: 5px 11px;
        font-size: 13px;
      }
      .st-colour {
        display: inline-flex;
        gap: 6px;
        align-items: center;
      }
      .st-colour input {
        width: 52px;
        height: 36px;
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-bg2);
      }
      .st-checks {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 16px;
      }
      .st-check {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 36px;
        font-size: 13.5px;
      }
      .st-check input {
        width: 18px;
        height: 18px;
        accent-color: var(--fp3d-accent);
      }
      .st-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        justify-content: flex-end;
      }
      .st-sub {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .st-list {
        display: grid;
        gap: 6px;
      }
      .st-list-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 4px 4px 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-bg2);
        font-size: 13px;
      }
      .st-list-row span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      fp3d-entity-picker {
        display: block;
        max-width: 420px;
      }
      .st-embed {
        display: block;
        height: auto;
      }
      .fp3d-btn {
        min-height: 36px;
      }
      .st-foot {
        position: sticky;
        bottom: 0;
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
        padding: 10px 2px 14px;
        font-size: 12.5px;
        color: var(--fp3d-muted);
        background: linear-gradient(to bottom, transparent, var(--fp3d-bg) 40%);
      }
      .st-save-saved,
      .st-save-idle {
        color: #34d399;
      }
      .st-save-error {
        color: var(--fp3d-danger);
      }
      @media (max-width: ${Hn}px) {
        .st {
          grid-template-columns: 1fr;
        }
        .st-nav {
          border-right: 0;
        }
        .st-drill .st-nav {
          display: none;
        }
        .st:not(.st-drill) .st-main {
          display: none;
        }
        .st-chev {
          display: inline;
        }
        .st-nav-btn {
          min-height: 44px;
        }
        .st-back {
          display: inline-flex;
          align-self: flex-start;
          width: auto;
          border: 0;
          background: none;
          color: var(--fp3d-accent);
          font: inherit;
          font-size: 14px;
          min-height: 36px;
          padding: 0;
          cursor: pointer;
        }
        .st-main {
          padding: 12px 16px 0;
        }
        /* a switch or a number stays at the right; wider controls go under their label */
        .st-row:not(.st-k-switch):not(.st-k-number) {
          grid-template-columns: 1fr;
        }
        .st-row:not(.st-k-switch):not(.st-k-number) .st-ctl {
          grid-column: 1;
          grid-row: auto;
          justify-self: start;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .st-sw::after,
        .st-row {
          transition: none;
        }
      }
    `]};J("fp3d-settings-page",ue);export{ue as SettingsPage,Ne as localPrefs};
