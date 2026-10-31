var J=globalThis,Q=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ue=Symbol(),Fe=new WeakMap,N=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(Q&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=Fe.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Fe.set(n,e))}return e}toString(){return this.cssText}},z=t=>new N(typeof t=="string"?t:t+"",void 0,ue),P=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new N(n,t,ue)},Ne=(t,e)=>{if(Q)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),i=J.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,t.appendChild(r)}},de=Q?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return z(n)})(t):t;var{is:zt,defineProperty:Wt,getOwnPropertyDescriptor:Dt,getOwnPropertyNames:Ut,getOwnPropertySymbols:Bt,getPrototypeOf:Kt}=Object,ee=globalThis,ze=ee.trustedTypes,Vt=ze?ze.emptyScript:"",jt=ee.reactiveElementPolyfillSupport,W=(t,e)=>t,pe={toAttribute(t,e){switch(e){case Boolean:t=t?Vt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},De=(t,e)=>!zt(t,e),We={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??=Symbol("metadata"),ee.litPropertyMetadata??=new WeakMap;var x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=We){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,n);i!==void 0&&Wt(this.prototype,e,i)}}static getPropertyDescriptor(e,n,r){let{get:i,set:s}=Dt(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get:i,set(o){let a=i?.call(this);s?.call(this,o),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??We}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;let e=Kt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){let n=this.properties,r=[...Ut(n),...Bt(n)];for(let i of r)this.createProperty(i,n[i])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)n.unshift(de(i))}else e!==void 0&&n.push(de(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:pe).toAttribute(n,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,n){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:pe;this._$Em=i;let a=o.fromAttribute(n,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,n,r,i=!1,s){if(e!==void 0){let o=this.constructor;if(i===!1&&(s=this[e]),r??=o.getPropertyOptions(e),!((r.hasChanged??De)(s,n)||r.useDefault&&r.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??n??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r){let{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[W("elementProperties")]=new Map,x[W("finalized")]=new Map,jt?.({ReactiveElement:x}),(ee.reactiveElementVersions??=[]).push("2.1.2");var ye=globalThis,Ue=t=>t,te=ye.trustedTypes,Be=te?te.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ye="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,Ze="?"+R,Gt=`<${Ze}>`,T=document,U=()=>T.createComment(""),B=t=>t===null||typeof t!="object"&&typeof t!="function",ve=Array.isArray,qt=t=>ve(t)||typeof t?.[Symbol.iterator]=="function",me=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,Ve=/>/g,O=RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),je=/'/g,Ge=/"/g,Xe=/^(?:script|style|textarea|title)$/i,we=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),p=we(1),In=we(2),Cn=we(3),H=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),qe=new WeakMap,M=T.createTreeWalker(T,129);function Je(t,e){if(!ve(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Be!==void 0?Be.createHTML(e):e}var Yt=(t,e)=>{let n=t.length-1,r=[],i,s=e===2?"<svg>":e===3?"<math>":"",o=D;for(let a=0;a<n;a++){let l=t[a],c,u,d=-1,h=0;for(;h<l.length&&(o.lastIndex=h,u=o.exec(l),u!==null);)h=o.lastIndex,o===D?u[1]==="!--"?o=Ke:u[1]!==void 0?o=Ve:u[2]!==void 0?(Xe.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=O):u[3]!==void 0&&(o=O):o===O?u[0]===">"?(o=i??D,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?O:u[3]==='"'?Ge:je):o===Ge||o===je?o=O:o===Ke||o===Ve?o=D:(o=O,i=void 0);let $=o===O&&t[a+1].startsWith("/>")?" ":"";s+=o===D?l+Gt:d>=0?(r.push(c),l.slice(0,d)+Ye+l.slice(d)+R+$):l+R+(d===-2?a:$)}return[Je(t,s+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},K=class t{constructor({strings:e,_$litType$:n},r){let i;this.parts=[];let s=0,o=0,a=e.length-1,l=this.parts,[c,u]=Yt(e,n);if(this.el=t.createElement(c,r),M.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=M.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(Ye)){let h=u[o++],$=i.getAttribute(d).split(R),X=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:X[2],strings:$,ctor:X[1]==="."?ge:X[1]==="?"?fe:X[1]==="@"?_e:C}),i.removeAttribute(d)}else d.startsWith(R)&&(l.push({type:6,index:s}),i.removeAttribute(d));if(Xe.test(i.tagName)){let d=i.textContent.split(R),h=d.length-1;if(h>0){i.textContent=te?te.emptyScript:"";for(let $=0;$<h;$++)i.append(d[$],U()),M.nextNode(),l.push({type:2,index:++s});i.append(d[h],U())}}}else if(i.nodeType===8)if(i.data===Ze)l.push({type:2,index:s});else{let d=-1;for(;(d=i.data.indexOf(R,d+1))!==-1;)l.push({type:7,index:s}),d+=R.length-1}s++}}static createElement(e,n){let r=T.createElement("template");return r.innerHTML=e,r}};function I(t,e,n=t,r){if(e===H)return e;let i=r!==void 0?n._$Co?.[r]:n._$Cl,s=B(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(e=I(t,i._$AS(t,e.values),i,r)),e}var he=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,i=(e?.creationScope??T).importNode(n,!0);M.currentNode=i;let s=M.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new V(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new be(s,this,e)),this._$AV.push(c),l=r[++a]}o!==l?.index&&(s=M.nextNode(),o++)}return M.currentNode=T,i}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},V=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=I(this,e,n),B(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==H&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=K.createElement(Je(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{let s=new he(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(e){let n=qe.get(e.strings);return n===void 0&&qe.set(e.strings,n=new K(e)),n}k(e){ve(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let s of e)i===n.length?n.push(r=new t(this.O(U()),this.O(U()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=Ue(e).nextSibling;Ue(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},C=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,i,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(e,n=this,r,i){let s=this.strings,o=!1;if(s===void 0)e=I(this,e,n,0),o=!B(e)||e!==this._$AH&&e!==H,o&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=I(this,a[r+l],n,l),c===H&&(c=this._$AH[l]),o||=!B(c)||c!==this._$AH[l],c===m?e=m:e!==m&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ge=class extends C{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},fe=class extends C{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},_e=class extends C{constructor(e,n,r,i,s){super(e,n,r,i,s),this.type=5}_$AI(e,n=this){if((e=I(this,e,n,0)??m)===H)return;let r=this._$AH,i=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==m&&(r===m||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},be=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}};var Zt=ye.litHtmlPolyfillSupport;Zt?.(K,V),(ye.litHtmlVersions??=[]).push("3.3.3");var Qe=(t,e,n)=>{let r=n?.renderBefore??e,i=r._$litPart$;if(i===void 0){let s=n?.renderBefore??null;r._$litPart$=i=new V(e.insertBefore(U(),s),s,void 0,n??{})}return i._$AI(t),i};var ke=globalThis,v=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};v._$litElement$=!0,v.finalized=!0,ke.litElementHydrateSupport?.({LitElement:v});var Xt=ke.litElementPolyfillSupport;Xt?.({LitElement:v});(ke.litElementVersions??=[]).push("4.2.2");var ne=["rain","snow","fog","clouds","lightning","sky"],re=["rain","snow","clouds","lightning","sky"];var Qt={type:"none",pitch:35,overhang:.4},ar={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Qt}};var en=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var Jt=new Set([...en,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function j(t){return t.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function xe(t,e){return e==="\xB0F"?(t-32)*5/9:e==="K"?t-273.15:t}function tt(t,e){return j(t)==="\xB0F"?e*9/5+32:e}function G(t,e,n){let i=t.states[e]?.attributes.friendly_name??t.entities?.[e]?.name??e;if(n&&i.length>n.length+1&&i.toLowerCase().startsWith(n.toLowerCase()+" ")){let s=i.slice(n.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return i}function nt(t,e){let n=e.domains??[];if(!e.area&&!n.length)return t;let r=i=>{let s=n.indexOf(i.id.slice(0,i.id.indexOf(".")));return(e.area&&i.area===e.area?2:0)+(s<0?0:1/(s+1))};return t.map((i,s)=>({o:i,i:s,s:r(i)})).sort((i,s)=>s.s-i.s||i.i-s.i).map(i=>i.o)}function rt(t,e){if(!t)return[];let n=r=>{let i=t.entities?.[r];return i?.area_id??(i?.device_id?t.devices?.[i.device_id]?.area_id:null)??null};return Object.keys(t.states??{}).filter(e).map(r=>{let i=n(r),s=i?t.areas?.[i]?.name:void 0;return{id:r,label:`${G(t,r,s)}${s?` \xB7 ${s}`:""}`,...i?{area:i}:{}}}).sort((r,i)=>r.label.localeCompare(i.label))}var Se={bg:"#070b14",bg2:"#0d1424",chrome:"rgba(14, 21, 38, 0.86)",chromeSolid:"#0f1729",line:"rgba(120, 170, 255, 0.16)",text:"#e6eefc",muted:"#8a9bb8",accent:"#37e0ff",accentText:"#041018",soft:"#5b7cff",warm:"#ffb547",danger:"#ff6b8b",shadow:"0 8px 30px rgba(0, 0, 0, 0.5)",colorScheme:"dark"},it={bg:"#eef2f8",bg2:"#e3e9f2",chrome:"rgba(255, 255, 255, 0.88)",chromeSolid:"#ffffff",line:"rgba(30, 60, 110, 0.18)",text:"#132036",muted:"#4a5a74",accent:"#0b7a99",accentText:"#ffffff",soft:"#3d5bd9",warm:"#a35f00",danger:"#c4224a",shadow:"0 6px 22px rgba(20, 40, 80, 0.16)",colorScheme:"light"};function st(t){let e=n=>n.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`);return Object.entries(t).map(([n,r])=>`--fp3d-s-${e(n)}: ${r};`).join(`
`)}var ot=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),tn=Object.keys(Se).filter(t=>t!=="colorScheme").map(t=>`--fp3d-${ot(t)}: var(--fp3d-s-${ot(t)}, ${Se[t]});`).join(`
`),ie=P`
  :host {
    ${z(tn)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${z(st(it))}
  }
`,at=P`
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
`;var lt=40,Ee=class extends v{static formAssociated=!0;static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},prefer:{attribute:!1},groups:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};partition=null;blurTimer;ranked=null;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this.prefer={},this.groups=null,this._query="",this._open=!1,this._cursor=0,this.addEventListener("click",e=>{e.composedPath()[0]===this&&this.renderRoot?.querySelector?.("input")?.focus()})}get open(){return this._open}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=a=>{let l=`${a.label} ${a.id}`.toLowerCase();return n.every(c=>l.includes(c))},i=this.fixed.filter(a=>!e||r(a)),s=this.grouped(this.rankedOptions()),o=e?s.filter(r):s;return[...i,...o.slice(0,lt)]}fits(e){return(this.prefer.domains??[]).includes(e.id.slice(0,e.id.indexOf(".")))}grouped(e){if(!this.groups||!this.prefer.domains?.length)return e;let n=e;if(this.partition?.from===n&&this.partition.domains===this.prefer.domains)return this.partition.list;let r=[...e.filter(i=>this.fits(i)),...e.filter(i=>!this.fits(i))];return this.partition={from:n,domains:this.prefer.domains,list:r},r}headings(e){let n=e.map(()=>null);if(!this.groups||!this.prefer.domains?.length)return n;let r=e.filter(s=>s.id.includes(".")),i=r.filter(s=>this.fits(s)).length;return!i||i===r.length||(n[e.indexOf(r[0])]=this.groups.likely,n[e.indexOf(r[i])]=this.groups.other),n}rankedOptions(){let e=`${this.prefer.area??""}|${(this.prefer.domains??[]).join(",")}`,n=this.ranked;if(n&&n.options===this.options&&n.prefer===e)return n.list;let r=nt(this.options,this.prefer);return this.ranked={options:this.options,prefer:e,list:r},r}onQuery(){let e=this.hits,n=this._query.trim()?e.findIndex(r=>r.id.includes(".")):-1;this._cursor=Math.max(0,n)}get leftOut(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(i=>n.every(s=>`${i.label} ${i.id}`.toLowerCase().includes(s))).length:this.options.length;return Math.max(0,r-lt)}openList(){clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}updated(e){this._open&&e.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let n=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(n.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&n[this._cursor]&&this.choose(n[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,n=this._open?this.hits:[],r=this.headings(n),i=this.value&&this.value.includes(".")?this.value:null;return p`<div class="wrap" @mousedown=${s=>s.target?.localName!=="input"&&s.preventDefault()}>
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
        @input=${s=>{this._query=s.target.value,this._open=!0,this.onQuery()}}
        @keydown=${this.onKey}
      />
      ${this._open?p`<ul class="list" role="listbox">
            ${n.length?m:p`<li class="empty">–</li>`}
            ${n.map((s,o)=>p`${r[o]?p`<li class="group" role="presentation">${r[o]}</li>`:m}<li
                role="option"
                aria-selected=${s.id===this.value}
                class="${o===this._cursor?"cursor":""} ${s.id===this.value?"chosen":""}"
                @mousedown=${a=>a.preventDefault()}
                @click=${()=>this.choose(s.id)}
              >
                <span>${s.label}</span>${s.id.includes(".")?p`<small>${s.id}</small>`:m}
              </li>`)}
            ${this.leftOut>0?p`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:m}
          </ul>`:m}
      ${i?p`<small class="picked" title=${i}>${i}</small>`:m}
    </div>`}static styles=[ie,P`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",Ee);var Tr=3*6e4;var nn=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Ae(t,e){return e?t.states[e]?[e]:[]:Object.keys(t.states).filter(n=>{let r=t.states[n];if(n.startsWith("event."))return r.attributes.device_class==="doorbell";if(!n.startsWith("binary_sensor."))return!1;let i=`${n} ${String(r.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return nn.test(i)}).sort()}function ct(t,e,n,r){if(r)return r;let i=t.entities??{},s=i[e]?.device_id,o=n.filter(u=>u.startsWith("camera.")),a=s?o.find(u=>i[u]?.device_id===s):void 0;if(a)return a;let l=u=>i[u]?.area_id??t.devices?.[i[u]?.device_id??""]?.area_id??null,c=l(e);return c&&o.find(u=>l(u)===c)||null}function ut(t,e){return e&&t.states[e]?e:Object.keys(t.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}function dt(t,e){let n=t.states[e];if(!n)return!1;let r=String(n.attributes.device_class??"");return e.startsWith("binary_sensor.")?r==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(e):e.startsWith("sensor.")?r==="precipitation_intensity"||/\/h$/.test(String(n.attributes.unit_of_measurement??"")):!1}function pt(t){let e=(t??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}var mt=120;function ht(t){return t.callWS({type:"home_3d/packs/updates"})}function $e(t,e){return t.callWS({type:"home_3d/packs/updates/settings",...e})}async function gt(t){return t.callWS({type:"home_3d/voice/settings"})}async function ft(t,e){return t.callWS({type:"home_3d/voice/settings/set",sentences:e})}var rn=["pool"];function sn(){try{let t=new URLSearchParams(location.search).get("fp3d_lab");return t==="1"?localStorage.setItem("home3d.lab","1"):t==="0"&&localStorage.removeItem("home3d.lab"),localStorage.getItem("home3d.lab")==="1"}catch{return!1}}function q(t){return!rn.includes(t)||sn()}var _t={motion_seconds:30,camera_seconds:30,radiator_cold:18,radiator_hot:45,tank_cold:25,tank_hot:55};function bt(t,e){return e==="metric"||e==="imperial"?e:t?.config?.unit_system?.length==="mi"?"imperial":"metric"}function on(t,e){return String(Number(t.toFixed(e)))}function yt(t,e=2){let n=t<0?"-":"",r=Math.round(Math.abs(t)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(r/12+1e-9),s=r-i*12,o=on(s,e>=2?1:0);return i?s<.05?`${n}${i}'`:`${n}${i}' ${o}"`:`${n}${o}"`}function vt(t,e){let n=t.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!n)return null;let r=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,s=!1,o=!1,a=n;for(let l of n.matchAll(r)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let u=l[2];s=!0,a=a.replace(l[0],""),u==="feet"||u==="foot"||u==="ft"||u==="'"?(i+=c*.3048,o=!0):u==="inches"||u==="inch"||u==="in"||u==='"'?i+=c*.0254:u==="mm"?i+=c/1e3:u==="cm"?i+=c/100:u==="m"?i+=c:i+=e==="imperial"?c*(o?.0254:.3048):c}return!s||/[^\s+]/.test(a)?null:i}function wt(t,e){return e==="imperial"?t.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):t}var Pt=[{id:"house",title:"st_group_house"},{id:"live",title:"st_group_live"},{id:"device",title:"st_group_device"},{id:"system",title:"st_group_system"}],Rt=[{id:"general",group:"house",icon:"\u2302",title:"st_sec_general",hint:"st_sec_general_hint",cards:[{id:"plan",title:"st_card_plan"},{id:"opening",title:"st_card_opening"}]},{id:"scene",group:"house",icon:"\u25D0",title:"st_sec_scene",hint:"st_sec_scene_hint",cards:[{id:"sun",title:"st_card_sun"},{id:"weather",title:"st_card_weather"},{id:"backdrop",title:"st_card_backdrop"}]},{id:"energy",group:"house",icon:"\u03DF",title:"st_sec_energy",hint:"st_sec_energy_hint",cards:[{id:"meters",title:"st_card_meters"},{id:"hologram",title:"st_card_hologram"}]},{id:"fun",group:"house",icon:"\u2726",title:"st_sec_fun",hint:"st_sec_fun_hint",cards:[{id:"eggs",title:"st_card_eggs"},{id:"pets",title:"st_card_pets"}]},{id:"warnings",group:"live",icon:"\u26A0",title:"st_sec_warnings",hint:"st_sec_warnings_hint",cards:[{id:"warnings",title:"st_card_warnings"},{id:"dismissed",title:"st_card_dismissed"}]},{id:"effects",group:"live",icon:"\u224B",title:"st_sec_effects",hint:"st_sec_effects_hint",cards:[{id:"motion",title:"st_card_motion"}]},{id:"cameras",group:"live",icon:"\u25C9",title:"st_sec_cameras",hint:"st_sec_cameras_hint",cards:[{id:"cameras",title:"st_card_cameras"},{id:"director",title:"st_card_director"}]},{id:"household",group:"live",icon:"\u267B",title:"st_sec_household",hint:"st_sec_household_hint",cards:[{id:"bins",title:"st_card_bins"},{id:"pinboard",title:"st_card_pinboard"}]},{id:"favourites",group:"live",icon:"\u2605",title:"st_sec_favourites",hint:"st_sec_favourites_hint",cards:[{id:"favourites",title:"st_card_favourites"},{id:"buttons",title:"st_card_buttons"},{id:"presets",title:"st_card_presets"}]},{id:"look",group:"device",icon:"\u25D1",title:"st_sec_look",hint:"st_sec_look_hint",cards:[{id:"look",title:"st_card_look"},{id:"markers",title:"st_card_markers"},{id:"show",title:"st_card_show"},{id:"cards",title:"st_cards_title"}]},{id:"voice",group:"device",icon:"\u25D6",title:"st_sec_voice",hint:"st_sec_voice_hint",cards:[{id:"voice",title:"st_card_voice"}]},{id:"access",group:"system",icon:"\u26E8",title:"st_sec_access",hint:"st_sec_access_hint",cards:[{id:"editors",title:"st_card_editors"},{id:"tablets",title:"st_card_tablets"}]},{id:"packs",group:"system",icon:"\u25A6",title:"st_sec_packs",hint:"st_sec_packs_hint",cards:[{id:"updates",title:"st_card_updates"}]},{id:"backup",group:"system",icon:"\u27F2",title:"st_sec_backup",hint:"st_sec_backup_hint",cards:[{id:"backup",title:"st_card_backup"}]},{id:"advanced",group:"system",icon:"\u2699",title:"st_sec_advanced",hint:"st_sec_advanced_hint",cards:[{id:"advanced",title:"st_card_advanced"},{id:"people",title:"st_card_people"}]}];function Y(t){return Rt.find(e=>e.id===t)}function f(t,e){let n=structuredClone(t);return Object.assign(n.settings,e),n}function g(t,e,n){let r=structuredClone(t);return r.settings[e]={...r.settings[e]??{},...n},r}var y=(t,e,n)=>Math.min(n,Math.max(e,t)),_=t=>t.building?.settings??{};function E(t,e,n,r,i,s,o,a){return{id:t,section:e,card:n,scope:"house",permission:"editor",label:s,hint:o,keywords:a,control:{kind:"switch"},default:i,read:l=>{let c=_(l)[r];return typeof c=="boolean"?c:i},write:(l,c)=>f(l.building,{[r]:c})}}function Oe(t,e,n,r,i,s,o,a,l){return{id:t,section:e,card:n,scope:"house",permission:"editor",label:i,hint:s,keywords:l,control:{kind:"entity",filter:o,auto:a},default:null,read:c=>_(c)[r]??null,write:(c,u)=>f(c.building,{[r]:u})}}function b(t,e,n,r,i,s,o,a){return{id:t,section:e,card:n,scope:"device",permission:"everyone",label:s,hint:o,keywords:a,control:{kind:"switch"},default:i,prefKeys:[r],read:l=>{let c=l.prefs.get(r);return c===null?i:c==="1"},write:(l,c)=>l.prefs.set(r,c?"1":"0")}}function w(t,e,n,r,i,s,o,a,l,c,u="segment"){return{id:t,section:e,card:n,scope:"device",permission:"everyone",label:o,hint:l,keywords:c,control:u==="segment"?{kind:"segment",options:a}:{kind:"select",options:()=>a},default:s,prefKeys:[r],read:d=>{let h=d.prefs.get(r);return h!==null&&i.includes(h)?h:s},write:(d,h)=>d.prefs.set(r,h)}}function F(t,e,n,r,i,s,o){let a=(l,c)=>i&&l.hass?Math.round(tt(l.hass,c)*10)/10:c;return{id:`effects.${t}`,section:e,card:n,scope:"house",permission:"editor",label:r,hint:o,keywords:s,control:{kind:"number",step:i?1:5,min:i?-20:0,max:i?212:3600,clearable:!0,unit:l=>i?l.hass?j(l.hass):"\xB0C":"s"},default:ln(t),read:l=>{let c=l.building?.settings.effects?.[t];return typeof c=="number"?a(l,c):null},write:(l,c)=>{let u=c===null||!Number.isFinite(c)?null:i?y(xe(c,l.hass?j(l.hass):"\xB0C"),-20,100):y(Math.round(c),0,3600),d={...l.building.settings.effects??{},[t]:u};for(let h of Object.keys(d))(d[h]===null||d[h]===void 0)&&delete d[h];return f(l.building,{effects:Object.keys(d).length?d:null})}}}function ln(t){return _t[t]}var cn=[{id:"units",section:"general",card:"plan",scope:"house",permission:"editor",label:"units",hint:"units_hint",keywords:["feet","inches","metres","meters","imperial","metric"],control:{kind:"segment",options:[{value:"auto",label:"quality_auto"},{value:"metric",label:"units_metric"},{value:"imperial",label:"units_imperial"}]},default:"auto",read:t=>_(t).units??"auto",write:(t,e)=>f(t.building,{units:e==="metric"||e==="imperial"?e:null})},{id:"grid",section:"general",card:"plan",scope:"house",permission:"editor",label:"grid",keywords:["snap","step"],control:{kind:"number",step:.01,min:.01,max:1,length:!0},default:.05,read:t=>_(t).grid??.05,write:(t,e)=>f(t.building,{grid:y(e,.01,1)})},{id:"wall_exterior",section:"general",card:"plan",scope:"house",permission:"editor",label:"wall_exterior",keywords:["thickness","outer"],control:{kind:"number",step:.01,min:.02,max:1,length:!0},default:.24,read:t=>_(t).wall_exterior??.24,write:(t,e)=>f(t.building,{wall_exterior:y(e,.02,1)})},{id:"wall_interior",section:"general",card:"plan",scope:"house",permission:"editor",label:"wall_interior",keywords:["thickness","inner"],control:{kind:"number",step:.01,min:.02,max:1,length:!0},default:.12,read:t=>_(t).wall_interior??.12,write:(t,e)=>f(t.building,{wall_interior:y(e,.02,1)})},{id:"north",section:"general",card:"plan",scope:"house",permission:"editor",label:"north",hint:"north_hint",keywords:["compass","sun","orientation"],control:{kind:"number",step:1,min:0,max:359,unit:"\xB0"},default:0,read:t=>_(t).north??0,write:(t,e)=>f(t.building,{north:(Math.round(e)%360+360)%360})},E("lock_plan","general","plan","lock_plan",!1,"plan_lock","st_lock_plan_hint",["lock","fixed","accident"]),{id:"start_view",section:"general",card:"opening",scope:"house",permission:"editor",label:"start_view",hint:"st_start_view_hint",keywords:["camera","angle","opens"],control:{kind:"action",button:"st_start_view_use",action:"start_view"},default:null,read:t=>_(t).start_view??null,write:(t,e)=>f(t.building,{start_view:e??null})},{id:"editor_floor",section:"general",card:"opening",scope:"house",permission:"editor",label:"editor_floor",hint:"editor_floor_hint",control:{kind:"select",options:t=>[{value:"",label:"editor_floor_auto"},...(t.building?.floors??[]).map(e=>({value:e.id,label:e.name,raw:!0}))]},default:"",read:t=>_(t).editor_floor??"",write:(t,e)=>f(t.building,{editor_floor:e||null})}],un=[E("rain_warning","warnings","warnings","rain_warning",!0,"rain_warning",void 0,["window","rain"]),Oe("rain_entity","warnings","warnings","rain_entity","rain_entity","rain_entity_hint",(t,e)=>!!e.hass&&dt(e.hass,t),void 0,["weather station","rain sensor"]),E("alert_names","warnings","warnings","alert_names",!0,"alert_names","alert_names_hint",["device","names","banner"]),E("alert_unavailable","warnings","warnings","alert_unavailable",!1,"alert_unavailable","alert_unavailable_hint",["battery","contact","offline"]),Oe("outage_entity","warnings","warnings","outage_entity","outage_entity","outage_entity_hint",t=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(t),void 0,["power","grid","ups","blackout"]),{id:"alert_ignored",section:"warnings",card:"dismissed",scope:"house",permission:"editor",label:"alert_ignored",hint:"alert_ignored_hint",keywords:["dismissed","ignored","restore","banner"],control:{kind:"list",list:"alert_ignored"},default:[],read:t=>_(t).alert_ignored??[],write:(t,e)=>f(t.building,{alert_ignored:e})}],dn=[F("motion_seconds","effects","motion","effects_motion_seconds",!1,["motion","light up","presence"],"effects_hint"),F("radiator_cold","effects","motion","effects_radiator_cold",!0,["radiator","heating","blue"]),F("radiator_hot","effects","motion","effects_radiator_hot",!0,["radiator","heating","red"]),F("tank_cold","effects","motion","effects_tank_cold",!0,["cylinder","hot water","tank"]),F("tank_hot","effects","motion","effects_tank_hot",!0,["cylinder","hot water","tank"])],S=t=>t.building?.settings.director??{},se=(t,e,n,r)=>({id:`director.${t}`,section:"cameras",card:"director",scope:"house",permission:"editor",label:e,hint:n,keywords:r,control:{kind:"switch"},default:!1,read:i=>!!S(i)[t],write:(i,s)=>g(i.building,"director",{[t]:s})}),Et=t=>new Set((t.building?.floors??[]).flatMap(e=>e.placements.map(n=>n.entity_id)).filter(e=>e.startsWith("camera."))),pn=[F("camera_seconds","cameras","cameras","effects_camera_seconds",!1,["camera","red","motion","hold"]),b("director_here","cameras","director","director",!1,"director_here","st_director_here_hint",["director","tablet","move by itself"]),se("doorbell","director_doorbell",void 0,["doorbell","ring","door"]),{id:"director.doorbell_entity",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_doorbell_entity",keywords:["doorbell"],control:{kind:"entity",filter:t=>t.startsWith("event.")||t.startsWith("binary_sensor."),auto:t=>t.hass?Ae(t.hass)[0]??null:void 0},default:null,visible:t=>!!S(t).doorbell,read:t=>S(t).doorbell_entity??null,write:(t,e)=>g(t.building,"director",{doorbell_entity:e})},{id:"director.doorbell_camera",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_doorbell_camera",keywords:["doorbell","camera"],control:{kind:"entity",filter:(t,e)=>Et(e).has(t),auto:t=>{let e=t.hass?S(t).doorbell_entity??Ae(t.hass)[0]??null:null;return t.hass&&e?ct(t.hass,e,[...Et(t)]):null}},default:null,visible:t=>!!S(t).doorbell,read:t=>S(t).doorbell_camera??null,write:(t,e)=>g(t.building,"director",{doorbell_camera:e})},{id:"director.motion",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_motion",keywords:["person","people","motion"],control:{kind:"segment",options:[{value:"off",label:"director_motion_off"},{value:"person",label:"director_motion_person"},{value:"all",label:"director_motion_all"}]},default:"off",read:t=>S(t).motion??"off",write:(t,e)=>g(t.building,"director",{motion:e})},se("appliances","director_appliances",void 0,["washer","dryer","dishwasher"]),se("alerts","director_alerts",void 0,["warning","smoke"]),se("live","director_live","director_live_hint",["stream","video"]),{id:"director.hold",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_hold",hint:"director_back_hint",keywords:["back","return","seconds"],control:{kind:"number",step:5,min:10,max:600,unit:"s"},default:30,read:t=>S(t).hold??30,write:(t,e)=>g(t.building,"director",{hold:y(Math.round(e),10,600)})},{id:"director.triggers",section:"cameras",card:"director",scope:"house",permission:"editor",label:"director_triggers",hint:"director_triggers_hint",keywords:["garage","gate","trigger"],control:{kind:"embed",topic:"director_triggers"},default:[],read:t=>S(t).triggers??[]}];function mn(t){return t?.easter_eggs!==!1}var hn=[E("easter_eggs","fun","eggs","easter_eggs",!0,"st_easter_eggs","st_easter_eggs_hint",["surprise","halloween","ghost","fun","egg"]),{id:"halloween.ghost",section:"fun",card:"eggs",scope:"house",permission:"editor",label:"halloween_ghost",hint:"st_ghost_hint",keywords:["halloween","ghost","spooky"],control:{kind:"switch"},default:!0,visible:t=>q("fun_halloween")&&mn(t.building?.settings),read:t=>t.building?.settings.halloween?.ghost!==!1,write:(t,e)=>g(t.building,"halloween",{ghost:e})},{id:"pets.on",section:"fun",card:"pets",scope:"house",permission:"editor",label:"pets_show",keywords:["cat","dog","rabbit","animals"],control:{kind:"switch"},default:!0,visible:()=>q("fun_pets"),read:t=>t.building?.settings.pets?.on!==!1,write:(t,e)=>{let n=structuredClone(t.building);return n.settings.pets={on:e,list:[...n.settings.pets?.list??[]]},n}},{id:"pets.list",section:"fun",card:"pets",scope:"house",permission:"editor",label:"fun_name_pets",hint:"st_pets_edit_hint",keywords:["cat","dog","rabbit","fur","name"],control:{kind:"action",button:"st_pets_edit",action:"extensions"},default:[],visible:()=>q("fun_pets"),read:t=>t.building?.settings.pets?.list??[]}],L=t=>t.building?.settings.backdrop??{},Pe=(t,e,n,r,i)=>({id:t,section:"scene",card:"backdrop",scope:"house",permission:"editor",label:n,keywords:["background","colour","color","sky"],control:{kind:"colour",fallback:r},default:null,visible:s=>i.includes(L(s).kind??""),read:s=>L(s)[e]??null,write:(s,o)=>g(s.building,"backdrop",{[e]:o})}),gn=[E("sun_shadow","scene","sun","sun_shadow",!0,"sun_shadow","sun_shadow_hint",["sun","arc","shadow"]),E("sun_patches","scene","sun","sun_patches",!0,"sun_patches","sun_patches_hint",["sun","floor","light"]),E("window_glow","scene","sun","window_glow",!0,"window_glow","window_glow_hint",["night","glow","light"]),Oe("weather_entity","scene","weather","weather_entity","weather_entity","weather_entity_hint",t=>t.startsWith("weather."),t=>t.hass?ut(t.hass,null):void 0,["forecast","rain","snow"]),{id:"weather_effects",section:"scene",card:"weather",scope:"house",permission:"editor",label:"weather_effects",hint:"st_weather_effects_hint",keywords:["rain","snow","fog","clouds","lightning","moon"],control:{kind:"checks",options:ne.map(t=>({value:t,label:`weather_effect_${t}`}))},default:[...re],read:t=>[..._(t).weather_effects??re],write:(t,e)=>f(t.building,{weather_effects:ne.filter(n=>e.includes(n))})},{id:"backdrop.kind",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"backdrop_kind",hint:"backdrop_hint",keywords:["background","sky","picture","gradient","wallpaper"],control:{kind:"segment",options:[{value:"",label:"backdrop_look"},{value:"color",label:"backdrop_color"},{value:"gradient",label:"backdrop_gradient"},{value:"image",label:"backdrop_image"}]},default:"",read:t=>L(t).kind??"",write:(t,e)=>g(t.building,"backdrop",{kind:e||null})},Pe("backdrop.color","color","backdrop_color","#0b1426",["color"]),Pe("backdrop.top","color","backdrop_top","#0b1426",["gradient"]),Pe("backdrop.bottom","color2","backdrop_bottom","#03060c",["gradient"]),{id:"backdrop.image",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"backdrop_image_url",keywords:["background","picture","photo","local"],control:{kind:"text",placeholder:"st_backdrop_placeholder",maxLength:500},default:"",visible:t=>L(t).kind==="image",read:t=>L(t).image??"",write:(t,e)=>g(t.building,"backdrop",{image:e.trim()?pt(e)??e.trim():null})},{id:"backdrop.dim",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"backdrop_dim",keywords:["background","darken","picture"],control:{kind:"range",min:0,max:90,step:5},default:45,visible:t=>L(t).kind==="image",read:t=>Math.round((L(t).dim??.45)*100),write:(t,e)=>g(t.building,"backdrop",{dim:y(e,0,90)/100})},{id:"terrain.level",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"terrain_level",hint:"terrain_hint",keywords:["ground","cellar","basement","hill"],control:{kind:"number",step:.05,min:-20,max:20,unit:"m",clearable:!0,length:!0},default:-.2,read:t=>t.building?.settings.terrain?.level??null,write:(t,e)=>g(t.building,"terrain",{level:e===null?null:y(e,-20,20)})},{id:"terrain.earth",section:"scene",card:"backdrop",scope:"house",permission:"editor",label:"terrain_earth",hint:"terrain_earth_hint",keywords:["ground","cellar","basement","earth"],control:{kind:"switch"},default:!0,read:t=>t.building?.settings.terrain?.earth!==!1,write:(t,e)=>g(t.building,"terrain",{earth:e})}],Me=t=>t.building?.settings.household??{},At=(t,e,n,r)=>({id:`household.${t}`,section:"household",card:"bins",scope:"house",permission:"editor",label:e,hint:r,keywords:["bin","waste","rubbish","glow","pickup"],control:{kind:"number",step:.5,min:0,max:24,unit:"h"},default:n,read:i=>Me(i)[t]??n,write:(i,s)=>g(i.building,"household",{[t]:y(s,0,24)})}),fn=[At("bin_from","st_bin_from",14,"bin_hint"),At("bin_until","st_bin_until",12),{id:"household.bin_next_only",section:"household",card:"bins",scope:"house",permission:"editor",label:"bin_next_only",keywords:["bin","tag","label","pickup"],control:{kind:"switch"},default:!1,read:t=>!!Me(t).bin_next_only,write:(t,e)=>g(t.building,"household",{bin_next_only:e||null})},{id:"household.bin_days",section:"household",card:"bins",scope:"house",permission:"editor",label:"bin_days",hint:"bin_tags_hint",keywords:["bin","tag","days","before"],control:{kind:"number",step:1,min:0,max:60,clearable:!0},default:null,read:t=>Me(t).bin_days??null,write:(t,e)=>g(t.building,"household",{bin_days:e===null?null:y(Math.round(e),0,60)})},{id:"household.kerb",section:"household",card:"bins",scope:"house",permission:"editor",label:"bin_kerb",hint:"st_kerb_note",keywords:["bin","kerb","street","calendar"],control:{kind:"action",button:"st_open_editor",action:"editor"},default:null,read:()=>null},{id:"household.notes",section:"household",card:"pinboard",scope:"house",permission:"editor",label:"hh_notes",hint:"hh_notes_hint",keywords:["pinboard","notes","text","household"],control:{kind:"entity",filter:t=>/^(input_text|text|sensor)\./.test(t)},default:null,read:t=>t.building?.settings.household?.notes??null,write:(t,e)=>g(t.building,"household",{notes:e})}],A=(t,e,n,r,i,s,o,a="editor",l=()=>null)=>({id:t,section:e,card:n,scope:"house",permission:a,label:i,hint:s,keywords:o,control:{kind:"embed",topic:r},default:null,read:l}),_n=[A("favorites","favourites","favourites","favorites","favorites",void 0,["star","scene","script","central menu"],"editor",t=>t.building?.settings.favorites??[]),A("buttons","favourites","buttons","own_buttons","own_buttons","own_buttons_hint",["button","navigate","dashboard","popup","browser_mod"],"editor",t=>t.building?.settings.buttons??[]),A("media_presets","favourites","presets","media_presets","presets","presets_hint",["radio","spotify","playlist","speaker","station"],"editor",t=>t.building?.settings.media_presets??[])],bn=[b("voice_here","voice","voice","voice",!1,"st_voice_here","voice_hint",["microphone","speak","assist"]),{id:"screen_name",section:"voice",card:"voice",scope:"device",permission:"everyone",label:"screen_name",hint:"screen_name_hint",keywords:["assist","screen","name","home_3d.ask"],control:{kind:"text",placeholder:"screen_name_placeholder",maxLength:60},default:"",prefKeys:["screen"],read:t=>t.prefs.get("screen")??"",write:(t,e)=>t.prefs.set("screen",e.trim()||null)},{id:"voice_pipeline",section:"voice",card:"voice",scope:"device",permission:"everyone",label:"voice_pipeline",keywords:["assist","pipeline","speech to text"],loader:"voice_pipelines",control:{kind:"select",options:t=>[{value:"",label:"voice_pipeline_preferred"},...(t.remote?.voice_pipelines?.pipelines??[]).map(e=>({value:e.id,label:e.name,raw:!0})),...t.prefs.get("voicePipeline")&&!(t.remote?.voice_pipelines?.pipelines??[]).some(e=>e.id===t.prefs.get("voicePipeline"))?[{value:t.prefs.get("voicePipeline"),label:t.prefs.get("voicePipeline"),raw:!0}]:[]]},default:"",prefKeys:["voicePipeline"],read:t=>t.prefs.get("voicePipeline")??"",write:(t,e)=>t.prefs.set("voicePipeline",e||null)},{id:"voice_sentences",section:"voice",card:"voice",scope:"install",permission:"ha_admin",label:"voice_sentences",hint:"voice_sentences_hint",keywords:["assist","sentences","custom_sentences"],loader:"voice_sentences",control:{kind:"select",options:()=>["off","distinct","all"].map(t=>({value:t,label:`voice_sentences_${t}`}))},default:"off",read:t=>t.remote?.voice_sentences?.sentences??"off",write:(t,e)=>t.hass?ft(t.hass,e):void 0},{id:"mic_test",section:"voice",card:"voice",scope:"device",permission:"everyone",label:"st_mic_test",hint:"director_mic_hint",keywords:["microphone","test","https"],control:{kind:"action",button:"director_mic_test",action:"mic_probe"},default:null,read:()=>null}],Ot={voice_sentences:t=>gt(t),voice_pipelines:t=>t.callWS({type:"assist_pipeline/pipeline/list"}),pack_updates:t=>ht(t)},Mt={auto_update:!1,frequency:"daily",time:"04:00",weekday:0},oe=t=>({...Mt,...t.remote?.pack_updates?.settings??{}}),Re=(t,e)=>({id:`pack_updates.${t}`,section:"packs",card:"updates",scope:"install",permission:"editor",default:Mt[t],loader:"pack_updates",read:n=>oe(n)[t],write:(n,r)=>n.hass?$e(n.hass,{[t]:r}):void 0,...e}),yn=[Re("frequency",{label:"upd_frequency",keywords:["packs","updates","github","release","schedule"],control:{kind:"segment",options:["off","daily","weekly","monthly"].map(t=>({value:t,label:`upd_freq_${t}`}))}}),{id:"pack_updates.weekday",section:"packs",card:"updates",scope:"install",permission:"editor",label:"upd_weekday",hint:"st_upd_weekday_hint",keywords:["packs","updates","day"],loader:"pack_updates",control:{kind:"select",options:()=>[0,1,2,3,4,5,6].map(t=>({value:String(t),label:`upd_day_${t}`}))},default:"0",visible:t=>oe(t).frequency==="weekly",read:t=>String(oe(t).weekday),write:(t,e)=>t.hass?$e(t.hass,{weekday:Number(e)}):void 0},Re("time",{label:"upd_time",keywords:["packs","updates","time","night"],control:{kind:"time"},visible:t=>oe(t).frequency!=="off"}),Re("auto_update",{label:"upd_auto",keywords:["packs","updates","automatic","placed items"],control:{kind:"switch"}}),{id:"pack_updates.open",section:"packs",card:"updates",scope:"install",permission:"editor",label:"upd_title",hint:"st_upd_open",keywords:["packs","install","github","pin","roll back"],control:{kind:"action",button:"st_upd_open_btn",action:"extensions"},default:null,read:()=>null}],vn=[A("editors","access","editors","editors","editors_title",void 0,["edit","permission","users","admin"],"ha_admin"),A("tablet_users","access","tablets","tablet_users","tablet_users","st_tablet_users_hint",["kiosk","wall","locked","tablet"],"ha_admin",t=>t.building?.settings.tablet_users??[]),{id:"tablet_idle",section:"access",card:"tablets",scope:"house",permission:"editor",label:"tablet_idle",keywords:["kiosk","idle","return","whole house"],control:{kind:"number",step:10,min:0,max:86400,unit:"s",clearable:!0},default:mt,read:t=>_(t).tablet_idle??null,write:(t,e)=>f(t.building,{tablet_idle:e===null?null:y(Math.round(e),0,86400)})}],wn=[A("energy.balance","energy","meters","energy_balance","energy_balance","energy_balance_hint",["grid","solar","battery","tariff","cheap rate","off-peak","gas","water","meter","sensor","import"],"editor",t=>t.building?.energy??null),{...A("hologram","energy","hologram","hologram","holo_settings","holo_settings_hint",["hologram","solar","cards","energy pro"],"editor",t=>t.building?.settings.roof.hologram??null)}],kn=[A("backup","backup","backup","backup","backup",void 0,["restore","export","import","file","history"])],k=t=>t.map(([e,n])=>({value:e,label:n})),xn=[w("theme","look","look","theme",["theme","neon","blueprint","day","realistic","auto"],"theme","theme",k([["theme","theme_theme"],["neon","theme_neon"],["blueprint","theme_blueprint"],["day","theme_day"],["realistic","theme_realistic"],["auto","theme_auto"]]),void 0,["dark","light","day","night","neon","theme","colour scheme"],"select"),{id:"accent",section:"look",card:"look",scope:"device",permission:"everyone",label:"accent",hint:"accent_hint",keywords:["colour","color","cyan","highlight"],control:{kind:"colour",fallback:"#37e0ff",clearable:!0},default:null,prefKeys:["accent"],read:t=>{let e=t.prefs.get("accent");return e&&/^#[0-9a-f]{6}$/i.test(e)?e:null},write:(t,e)=>t.prefs.set("accent",e)},w("quality","look","look","quality",["auto","low","high"],"auto","quality",k([["auto","quality_auto"],["low","quality_low"],["high","quality_high"]]),void 0,["performance","tablet","speed","graphics"]),w("clock","look","look","clock",["off","tl","tr","bl","br"],"off","st_clock",k([["off","st_clock_off"],["tl","st_clock_tl"],["tr","st_clock_tr"],["bl","st_clock_bl"],["br","st_clock_br"]]),void 0,["time","clock","corner"],"select"),w("markers","look","markers","markers",["none","room","important","all"],"important","markers",k([["none","markers_none"],["room","markers_room"],["important","markers_important"],["all","markers_all"]]),void 0,["pins","icons","symbols","devices"]),w("pinSize","look","markers","pinSize",["small","normal","large"],"normal","pin_size",k([["small","pin_size_small"],["normal","pin_size_normal"],["large","pin_size_large"]]),void 0,["pins","icons","symbols","size"]),w("controls","look","markers","controls",["left","right"],"left","controls_side",k([["left","st_controls_left"],["right","st_controls_right"]]),void 0,["left","right","star","search"]),b("keep_view","look","markers","keep_view",!1,"keep_view","keep_view_hint",["camera","floor"]),b("angle_lock","look","markers","angle_lock",!1,"angle_lock","angle_lock_hint",["lock","turn","rotate"]),b("nav_wrap","look","markers","nav_wrap",!1,"st_nav_wrap",void 0,["floors","rooms","bar","chips"]),b("plan2d","look","show","plan2d",!1,"st_view_2d",void 0,["2d","plan","flat"]),w("walls","look","show","walls",["auto","cut"],"auto","st_walls",k([["auto","walls_auto"],["cut","walls_cut"]]),void 0,["walls","cut","tall"]),w("explode","look","show","explode",["1","0"],"1","st_floors",k([["1","floors_apart"],["0","floors_stacked"]]),void 0,["floors","apart","stacked","explode"]),w("floor_stack","look","show","floor_stack",["dim","stacked","single"],"dim","st_floor_stack",k([["dim","floor_stack_short_dim"],["stacked","floor_stack_short_stacked"],["single","floor_stack_short_single"]]),void 0,["floors","below","dimmed"]),b("roof","look","show","roof",!1,"st_keep_roof","roof_keep_hint",["roof","zoom"]),w("heat","look","show","heat",["none","temperature","humidity","co2","values"],"none","st_heat",k([["none","heat_off"],["temperature","heat_short_temperature"],["humidity","heat_short_humidity"],["co2","heat_short_co2"],["values","heat_short_values"]]),void 0,["heatmap","temperature","humidity","co2"]),b("room_names","look","show","room_names",!0,"st_room_names",void 0,["labels","names","rooms"]),b("trail","look","show","trail",!1,"st_trail","trail_hint",["motion","trail","history"]),b("weather","look","show","weather",!0,"st_weather","weather_hint",["rain","snow","weather"])],Sn=[b("stats","advanced","advanced","stats",!1,"st_fps","fps_title",["fps","performance","frames","speed"]),{id:"reset_device",section:"advanced",card:"advanced",scope:"device",permission:"everyone",label:"st_reset_device",hint:"st_reset_device_hint",keywords:["reset","defaults","preferences","browser"],control:{kind:"action",button:"st_reset",action:"reset_device"},default:null,read:()=>null},E("demo","advanced","advanced","demo",!1,"demo_states","st_demo_hint",["sample","screenshot","fake"]),{id:"modules",section:"advanced",card:"advanced",scope:"house",permission:"editor",label:"st_modules",hint:"st_modules_note",keywords:["module","pack","plugin","sentences","speakers"],control:{kind:"note"},default:null,read:()=>null},{id:"locate",section:"advanced",card:"people",scope:"house",permission:"ha_admin",label:"st_locate",hint:"st_locate_hint",keywords:["locating","people","presence","bluetooth","position"],control:{kind:"action",button:"st_open",action:"locate"},default:null,visible:()=>q("locate"),read:()=>null},{id:"person_look",section:"advanced",card:"people",scope:"house",permission:"editor",label:"st_person_look",keywords:["people","person","figure","pin","located"],control:{kind:"segment",options:[{value:"figure",label:"st_person_figure"},{value:"pin",label:"st_person_pin"},{value:"off",label:"st_person_off"}]},default:"figure",read:t=>_(t).person_look??"figure",write:(t,e)=>f(t.building,{person_look:e==="pin"||e==="off"?e:null})},{...A("presence","advanced","people","presence","presence","presence_hint",["presence","espresense","bermuda","room sensor"]),visible:()=>!1}],En=[{id:"dashboard_cards",section:"look",card:"cards",scope:"device",permission:"everyone",label:"st_cards_title",hint:"st_cards_note",keywords:["card","dashboard","lovelace","options"],control:{kind:"note"},default:null,read:()=>null}],Te=[...cn,...gn,...wn,...hn,...un,...dn,...pn,...fn,..._n,...xn,...En,...bn,...vn,...yn,...kn,...Sn];function Z(t){return bt(t.hass,t.building?.settings.units)}function ae(t,e){return Z(t)==="imperial"?yt(e):String(Math.round(e*1e3)/1e3)}function Tt(t,e){return vt(e,Z(t))}function Ht(t,e){return wt(e,Z(t))}function Lt(){return[...new Set([...Te.flatMap(t=>t.prefKeys??[]),"clean"])]}var An=["home3d.lab","home3d.projection","home3d.unsaved","home3d.home."];function $n(t){return An.some(e=>e.endsWith(".")?t.startsWith(e):t===e)?!1:t.startsWith("home3d.")||t.startsWith("fp3d-tt-")}function It(...t){for(let e of t)try{let n=[];for(let r=0;r<e.length;r++){let i=e.key(r);i!==null&&$n(i)&&n.push(i)}for(let r of n)e.removeItem(r)}catch{}}function Ct(t,e){try{return t.visible?t.visible(e):!0}catch{return!1}}function le(t,e){return Te.filter(n=>n.section===t&&Ct(n,e))}function He(t){return Rt.filter(e=>le(e.id,t).length>0)}function Le(t,e){return t.permission==="everyone"?!0:t.permission==="ha_admin"?e.haAdmin:e.editor}function $t(t){return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}function Ie(t,e,n){let r=$t(t).split(/\s+/).filter(Boolean);return r.length?Te.filter(i=>{if(!Ct(i,e))return!1;let s=Y(i.section),o=s?.cards.find(l=>l.id===i.card),a=$t([n(i.label),i.hint?n(i.hint):"",...i.keywords??[],s?n(s.title):"",o?n(o.title):"",i.id].join(" "));return r.every(l=>a.includes(l))}):[]}var si=ne.map(t=>({value:t,label:`weather_effect_${t}`}));var Ft={st_title:"Settings",st_search:"Search settings",st_search_none:"No setting matches \u201C{q}\u201D.",st_results:"{n} settings match \u201C{q}\u201D",st_back:"All sections",st_group_house:"House",st_group_live:"Live",st_group_device:"This device",st_group_system:"System",st_scope_house:"House",st_scope_house_hint:"Saved in the plan: every screen and card sees it.",st_scope_install:"All homes",st_scope_install_hint:"Kept by Home Assistant for the whole install, not in this plan: changing it here changes it for every home.",st_scope_device:"This device",st_scope_device_hint:"Kept in this browser only. Other screens keep their own.",st_admin:"Admin",st_admin_hint:"Only Home Assistant administrators can change this.",st_locked:"Only editors can change the house settings. You can see them here.",st_admin_locked:"Only Home Assistant administrators can change this section.",st_saved:"All changes saved",st_saving:"Saving \u2026",st_save_error:"Saving failed",st_home:"Home: {name}",st_failed:"Could not load: {error}",st_cards_note:"Dashboard cards have their own options (look, floors, what they show). Change them in the card's editor on the dashboard: they belong to that card, not to the house.",st_cards_title:"Dashboard cards",st_sec_general:"General",st_sec_general_hint:"Units, walls, grid and how the plan opens.",st_sec_scene:"3D scene",st_sec_scene_hint:"Sun, weather, background and ground.",st_sec_energy:"Energy",st_sec_energy_hint:"Meters, tariff and the hologram. Moved here from the Energy tool.",st_sec_fun:"Easter eggs & fun",st_sec_fun_hint:"Little surprises in the house.",st_sec_warnings:"Warnings",st_sec_warnings_hint:"What makes a room pulse and the banner show.",st_sec_effects:"Live effects",st_sec_effects_hint:"How sensors colour the house.",st_sec_cameras:"Cameras",st_sec_cameras_hint:"Camera colours and the live director.",st_sec_household:"Household",st_sec_household_hint:"Bins and the pinboard.",st_sec_favourites:"Favourites & buttons",st_sec_favourites_hint:"The central menu (star) of the 3D view.",st_sec_look:"Look & display",st_sec_look_hint:"Only this browser. Other screens keep their own.",st_sec_voice:"Voice",st_sec_voice_hint:"Voice control on this device, and the house-wide Assist sentences.",st_sec_access:"Tablets & access",st_sec_access_hint:"Who can edit, and which users get the locked wall-tablet view.",st_sec_packs:"Packs & updates",st_sec_packs_hint:"When packs check for new releases. Installing packs stays in Extensions.",st_sec_backup:"Backup",st_sec_backup_hint:"Restore points, export and import.",st_sec_advanced:"Advanced",st_sec_advanced_hint:"Rarely needed.",st_card_plan:"Plan",st_card_opening:"Opening",st_card_sun:"Sun and light",st_card_weather:"Weather",st_card_backdrop:"Background and ground",st_card_meters:"Meters and tariff",st_card_hologram:"Hologram",st_card_eggs:"Easter eggs",st_card_pets:"Pets",st_card_warnings:"Warnings",st_card_dismissed:"Dismissed for good",st_card_motion:"Motion and heat",st_card_cameras:"Cameras",st_card_director:"Live director",st_card_bins:"Bins",st_card_pinboard:"Pinboard",st_card_favourites:"Favourites",st_card_buttons:"Own buttons",st_card_presets:"Stations and playlists",st_card_look:"Look",st_card_markers:"Markers and controls",st_card_show:"What the 3D view shows",st_card_voice:"Voice",st_card_editors:"Editors",st_card_tablets:"Wall tablets",st_card_updates:"Updates",st_card_backup:"Backup",st_card_advanced:"Advanced",st_card_people:"People",st_easter_eggs:"Easter eggs",st_easter_eggs_hint:"One switch for every surprise (the Halloween ghost and any later one). Off hides them on every screen, cards and wall tablets included.",st_ghost_hint:"Floats through the house now and then.",st_pets_edit:"Edit pets ({n})",st_pets_edit_hint:"Names, kinds and fur are set in Extensions.",st_start_view_hint:"The 3D view every screen opens with.",st_start_view_use:"Use the last 3D view",st_start_view_none:"Open the 3D view once to take its view.",st_start_view_set:"Saved start view",st_start_view_default:"Default (fitted from the front left)",st_lock_plan_hint:"Rooms, walls, doors, windows and outdoor areas can't be moved by accident. Furniture and devices still can.",st_ignored_none:"No warning is dismissed for good. Dismiss one with the \u2715 in the 3D view's banner; smoke, CO, gas, leak and alarm warnings can never be dismissed for good.",st_director_here_hint:"Turn it off on screens that shouldn't move by themselves. A dashboard card has its own option.",st_weather_effects_hint:"Rain, snow, clouds, lightning, sun and moon. Fog is off by default.",st_mic_test:"Test the microphone",st_locate:"Locating assistant",st_locate_hint:"Sets up where people are shown in the house.",st_open:"Open",st_person_look:"Located people in 3D",st_person_figure:"Figure",st_person_pin:"Pin",st_person_off:"Not shown",st_fps:"Show the frame rate (FPS)",st_reset_device:"Reset this device's preferences",st_reset_device_hint:"Look, markers, layout and what the 3D view shows go back to the defaults, on this browser only.",st_reset:"Reset",st_reset_done:"This device's preferences are back to the defaults.",st_demo_hint:"Linked devices this Home Assistant doesn't have show made-up states (some lights on, heating on, solar producing): for screenshots and the sample home. Real entities always win.",st_modules_note:"Settings of installed modules stay in the 3D view's \u2699 menu (star \u2192 \u2699): they need the 3D view running.",st_upd_weekday_hint:"Only for a weekly check.",st_upd_open:"Packs and placed items with an update are in Extensions.",st_upd_open_btn:"Open Extensions",st_bin_from:"Glow from (hour, the day before)",st_bin_until:"Glow until (hour, on pickup day)",st_kerb_note:"Each bin's kerb spot and calendar are set on the bin itself in the editor.",st_embed_loading:"Loading the editor's part \u2026",st_embed_failed:"This part could not load: {error}",st_accent_default:"Neon cyan",st_view_2d:"Open the plan in 2D",st_nav_wrap:"Floor and room bar on several lines",st_heat:"Heatmap",st_walls:"Walls",st_floors:"Floors when the whole house shows",st_floor_stack:"Floors below an open floor",st_trail:"Motion trail",st_weather:"Weather outside",st_room_names:"Room names",st_keep_roof:"Roof stays when zooming in",st_clock:"Clock",st_clock_off:"Off",st_clock_tl:"Top left",st_clock_tr:"Top right",st_clock_bl:"Bottom left",st_clock_br:"Bottom right",st_controls_left:"Left",st_controls_right:"Right",st_tablet_users_hint:"Ticked users see only the home name, the floors and the View menu: no editor, no settings. A single device works with ?tablet in the address.",st_voice_here:"Microphone button on this device",st_open_editor:"Open the editor",st_modules:"Module settings",st_backdrop_placeholder:"/local/background.jpg"},Pn={st_title:"Einstellungen",st_search:"Einstellungen durchsuchen",st_search_none:"Keine Einstellung passt zu \u201E{q}\u201C.",st_results:"{n} Einstellungen passen zu \u201E{q}\u201C",st_back:"Alle Bereiche",st_group_house:"Haus",st_group_live:"Live",st_group_device:"Dieses Ger\xE4t",st_group_system:"System",st_scope_house:"Haus",st_scope_house_hint:"Im Plan gespeichert: jeder Bildschirm und jede Karte sieht es.",st_scope_install:"Alle H\xE4user",st_scope_install_hint:"Von Home Assistant f\xFCr die ganze Installation gespeichert, nicht in diesem Plan: eine \xC4nderung hier gilt f\xFCr jedes Haus.",st_scope_device:"Dieses Ger\xE4t",st_scope_device_hint:"Nur in diesem Browser. Andere Bildschirme behalten ihre eigene Wahl.",st_admin:"Admin",st_admin_hint:"Nur Home-Assistant-Administratoren k\xF6nnen das \xE4ndern.",st_locked:"Nur Bearbeiter k\xF6nnen die Haus-Einstellungen \xE4ndern. Hier kannst du sie ansehen.",st_admin_locked:"Nur Home-Assistant-Administratoren k\xF6nnen diesen Bereich \xE4ndern.",st_saved:"Alles gespeichert",st_saving:"Speichert \u2026",st_save_error:"Speichern fehlgeschlagen",st_home:"Zuhause: {name}",st_failed:"Konnte nicht laden: {error}",st_cards_note:"Dashboard-Karten haben eigene Optionen (Aussehen, Etagen, was sie zeigen). Die \xE4nderst du im Karten-Editor auf dem Dashboard: Sie geh\xF6ren zur Karte, nicht zum Haus.",st_cards_title:"Dashboard-Karten",st_sec_general:"Allgemein",st_sec_general_hint:"Einheiten, W\xE4nde, Raster und wie der Plan \xF6ffnet.",st_sec_scene:"3D-Szene",st_sec_scene_hint:"Sonne, Wetter, Hintergrund und Gel\xE4nde.",st_sec_energy:"Energie",st_sec_energy_hint:"Z\xE4hler, Tarif und das Hologramm. Aus dem Energie-Werkzeug hierher verschoben.",st_sec_fun:"Easter Eggs & Spa\xDF",st_sec_fun_hint:"Kleine \xDCberraschungen im Haus.",st_sec_warnings:"Warnungen",st_sec_warnings_hint:"Was einen Raum pulsieren und das Banner erscheinen l\xE4sst.",st_sec_effects:"Live-Effekte",st_sec_effects_hint:"Wie Sensoren das Haus einf\xE4rben.",st_sec_cameras:"Kameras",st_sec_cameras_hint:"Kamerafarben und die Live-Regie.",st_sec_household:"Haushalt",st_sec_household_hint:"Tonnen und die Pinnwand.",st_sec_favourites:"Favoriten & Tasten",st_sec_favourites_hint:"Das zentrale Men\xFC (Stern) der 3D-Ansicht.",st_sec_look:"Aussehen & Anzeige",st_sec_look_hint:"Nur dieser Browser. Andere Bildschirme behalten ihre eigene Wahl.",st_sec_voice:"Sprache",st_sec_voice_hint:"Sprachsteuerung auf diesem Ger\xE4t und die Assist-S\xE4tze f\xFCr das ganze Haus.",st_sec_access:"Tablets & Zugriff",st_sec_access_hint:"Wer bearbeiten darf und welche Benutzer die gesperrte Wandtablet-Ansicht bekommen.",st_sec_packs:"Pakete & Updates",st_sec_packs_hint:"Wann Pakete nach neuen Versionen suchen. Pakete installierst du weiter unter Erweiterungen.",st_sec_backup:"Sicherung",st_sec_backup_hint:"Wiederherstellungspunkte, Export und Import.",st_sec_advanced:"Erweitert",st_sec_advanced_hint:"Selten gebraucht.",st_card_plan:"Plan",st_card_opening:"Beim \xD6ffnen",st_card_sun:"Sonne und Licht",st_card_weather:"Wetter",st_card_backdrop:"Hintergrund und Gel\xE4nde",st_card_meters:"Z\xE4hler und Tarif",st_card_hologram:"Hologramm",st_card_eggs:"Easter Eggs",st_card_pets:"Haustiere",st_card_warnings:"Warnungen",st_card_dismissed:"Dauerhaft ausgeblendet",st_card_motion:"Bewegung und W\xE4rme",st_card_cameras:"Kameras",st_card_director:"Live-Regie",st_card_bins:"Tonnen",st_card_pinboard:"Pinnwand",st_card_favourites:"Favoriten",st_card_buttons:"Eigene Tasten",st_card_presets:"Sender und Playlists",st_card_look:"Aussehen",st_card_markers:"Markierungen und Bedienung",st_card_show:"Was die 3D-Ansicht zeigt",st_card_voice:"Sprache",st_card_editors:"Bearbeiter",st_card_tablets:"Wandtablets",st_card_updates:"Updates",st_card_backup:"Sicherung",st_card_advanced:"Erweitert",st_card_people:"Personen",st_easter_eggs:"Easter Eggs",st_easter_eggs_hint:"Ein Schalter f\xFCr jede \xDCberraschung (das Halloween-Gespenst und alle sp\xE4teren). Aus blendet sie auf jedem Bildschirm aus, auch auf Karten und Wandtablets.",st_ghost_hint:"Schwebt ab und zu durchs Haus.",st_pets_edit:"Haustiere bearbeiten ({n})",st_pets_edit_hint:"Namen, Arten und Fell stellst du unter Erweiterungen ein.",st_start_view_hint:"Die 3D-Ansicht, mit der jeder Bildschirm \xF6ffnet.",st_start_view_use:"Letzte 3D-Ansicht \xFCbernehmen",st_start_view_none:"\xD6ffne einmal die 3D-Ansicht, um ihren Blick zu \xFCbernehmen.",st_start_view_set:"Gespeicherte Startansicht",st_start_view_default:"Standard (von vorne links eingepasst)",st_lock_plan_hint:"R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht aus Versehen verschieben. M\xF6bel und Ger\xE4te schon.",st_ignored_none:"Keine Warnung ist dauerhaft ausgeblendet. Blende eine mit dem \u2715 im Banner der 3D-Ansicht aus; Rauch, CO, Gas, Wasser und Alarm lassen sich nie dauerhaft ausblenden.",st_director_here_hint:"Schalte sie auf Bildschirmen aus, die sich nicht von selbst bewegen sollen. Eine Dashboard-Karte hat eine eigene Option.",st_weather_effects_hint:"Regen, Schnee, Wolken, Blitze, Sonne und Mond. Nebel ist standardm\xE4\xDFig aus.",st_mic_test:"Mikrofon testen",st_locate:"Ortungs-Assistent",st_locate_hint:"Richtet ein, wo Personen im Haus gezeigt werden.",st_open:"\xD6ffnen",st_person_look:"Geortete Personen in 3D",st_person_figure:"Figur",st_person_pin:"Pin",st_person_off:"Nicht zeigen",st_fps:"Bildrate anzeigen (FPS)",st_reset_device:"Einstellungen dieses Ger\xE4ts zur\xFCcksetzen",st_reset_device_hint:"Aussehen, Markierungen, Anordnung und was die 3D-Ansicht zeigt gehen auf die Standardwerte zur\xFCck, nur in diesem Browser.",st_reset:"Zur\xFCcksetzen",st_reset_done:"Die Einstellungen dieses Ger\xE4ts sind zur\xFCckgesetzt.",st_demo_hint:"Verkn\xFCpfte Ger\xE4te, die dieses Home Assistant nicht hat, zeigen ausgedachte Zust\xE4nde (einige Lichter an, Heizung an, Solar liefert): f\xFCr Screenshots und das Beispielhaus. Echte Entit\xE4ten gewinnen immer.",st_modules_note:"Einstellungen installierter Module bleiben im \u2699-Men\xFC der 3D-Ansicht (Stern \u2192 \u2699): Sie brauchen die laufende 3D-Ansicht.",st_upd_weekday_hint:"Nur bei w\xF6chentlicher Suche.",st_upd_open:"Pakete und platzierte Elemente mit Update findest du unter Erweiterungen.",st_upd_open_btn:"Erweiterungen \xF6ffnen",st_bin_from:"Leuchten ab (Uhrzeit, am Vortag)",st_bin_until:"Leuchten bis (Uhrzeit, am Abholtag)",st_kerb_note:"Den Platz am Stra\xDFenrand und den Kalender stellst du an jeder Tonne im Editor ein.",st_embed_loading:"L\xE4dt den Teil aus dem Editor \u2026",st_embed_failed:"Dieser Teil konnte nicht laden: {error}",st_accent_default:"Neon-Cyan",st_view_2d:"Den Plan in 2D \xF6ffnen",st_nav_wrap:"Etagen- und Raumleiste auf mehreren Zeilen",st_heat:"Heatmap",st_walls:"W\xE4nde",st_floors:"Etagen, wenn das ganze Haus zu sehen ist",st_floor_stack:"Etagen unter einer ge\xF6ffneten Etage",st_trail:"Bewegungsspur",st_weather:"Wetter drau\xDFen",st_room_names:"Raumnamen",st_keep_roof:"Dach bleibt beim Hineinzoomen",st_clock:"Uhr",st_clock_off:"Aus",st_clock_tl:"Oben links",st_clock_tr:"Oben rechts",st_clock_bl:"Unten links",st_clock_br:"Unten rechts",st_controls_left:"Links",st_controls_right:"Rechts",st_tablet_users_hint:"Angehakte Benutzer sehen nur den Namen des Zuhauses, die Etagen und das Ansicht-Men\xFC: keinen Editor, keine Einstellungen. Ein einzelnes Ger\xE4t geht mit ?tablet in der Adresse.",st_voice_here:"Mikrofon-Taste auf diesem Ger\xE4t",st_open_editor:"Editor \xF6ffnen",st_modules:"Einstellungen der Module",st_backdrop_placeholder:"/local/hintergrund.jpg"};function Nt(t,e){return(n,r={})=>{if(!n.startsWith("st_"))return t(n,r);let s=((e()??"").startsWith("de")?Pn:Ft)[n]??Ft[n]??n;for(let[o,a]of Object.entries(r))s=s.replace(`{${o}}`,String(a));return s}}function Rn(){let t=[];for(let e of["localStorage","sessionStorage"])try{t.push(globalThis[e])}catch{}return t.filter(Boolean)}var Ce={get(t){try{return localStorage.getItem(`home3d.${t}`)}catch{return null}},set(t,e){try{e===null?localStorage.removeItem(`home3d.${t}`):localStorage.setItem(`home3d.${t}`,e)}catch{}}},On=760,ce=class extends v{static properties={hass:{attribute:!1},building:{attribute:!1},canEdit:{attribute:!1},packs:{attribute:!1},t:{attribute:!1},section:{attribute:!1},focusId:{attribute:!1},saveState:{attribute:!1},homeName:{attribute:!1},lastView:{attribute:!1},loadEditor:{attribute:!1},loaders:{attribute:!1},_section:{state:!0},_query:{state:!0},_drill:{state:!0},_flash:{state:!0},_remote:{state:!0},_embedState:{state:!0},_note:{state:!0}};remoteAsked=new Set;flashTimer;constructor(){super(),this.building=null,this.section=null,this.focusId=null,this.saveState="idle",this.homeName="",this.lastView=null,this.t=e=>e,this._section="general",this._query="",this._drill=!1,this._flash=null,this._remote={},this._embedState=customElements.get("fp3d-editor")?"ready":"idle",this._note=null}tr(e,n){return Nt(this.t,()=>this.hass?.language??navigator.language)(e,n)}get loadersNow(){return this.loaders??Ot}get env(){return{building:this.building,hass:this.hass,prefs:Ce,lastView:this.lastView,remote:this._remote}}get viewer(){return{editor:this.canEdit??this.hass?.user?.is_admin??!1,haAdmin:this.hass?.user?.is_admin??!1}}shouldUpdate(e){return!(e.size===1&&e.has("hass")&&e.get("hass"))}willUpdate(e){if((e.has("section")||e.has("focusId"))&&(this.section||this.focusId)){let r=this.section??this._section;Y(r)&&(this._section=r),this._query="",this._drill=!0,this.focusId&&this.flash(this.focusId)}let n=He(this.env);n.length&&!n.some(r=>r.id===this._section)&&(this._section=n[0].id),this.askRemote()}updated(){if(!this._flash)return;let e=this.renderRoot.querySelector(`[data-id="${CSS.escape(this._flash)}"]`);e&&!e.hasAttribute("data-seen")&&(e.setAttribute("data-seen",""),e.scrollIntoView({block:"center"}))}flash(e){this._flash=e,clearTimeout(this.flashTimer),this.flashTimer=setTimeout(()=>this._flash=null,2500)}askRemote(){if(!this.hass)return;let n=new Set((this._query?Ie(this._query,this.env,r=>this.tr(r)):le(this._section,this.env)).map(r=>r.loader).filter(r=>!!r));for(let r of n)this.remoteAsked.has(r)||!this.loadersNow[r]||(this.remoteAsked.add(r),this.reload(r))}async reload(e){let n=this.hass,r=this.loadersNow[e];if(!(!n||!r))try{this._remote={...this._remote,[e]:await r(n)}}catch(i){this._remote={...this._remote,[e]:{error:String(i?.message??i)}}}}write(e,n){if(!e.write||!Le(e,this.viewer)||e.scope==="house"&&!this.building)return;let r;try{r=e.write(this.env,n)}catch(i){this._note=String(i);return}this.apply(e,r)}apply(e,n){if(n&&typeof n.then=="function"){n.then(()=>e.loader?this.reload(e.loader):void 0).catch(r=>this._note=this.tr("st_failed",{error:String(r?.message??r)}));return}if(n&&typeof n=="object"&&"floors"in n){this.dispatchEvent(new CustomEvent("settings-edit",{detail:{building:n,key:`settings:${e.id}`},bubbles:!0,composed:!0}));return}this.dispatchEvent(new CustomEvent("device-change",{detail:{id:e.id},bubbles:!0,composed:!0})),this.requestUpdate()}act(e,n){if(n==="start_view"){this.lastView&&this.write(e,this.lastView);return}if(n==="reset_device"){for(let r of Lt())Ce.set(r,null);It(...Rn()),this._note=this.tr("st_reset_done"),this.dispatchEvent(new CustomEvent("device-change",{detail:{id:e.id},bubbles:!0,composed:!0})),this.requestUpdate();return}this.dispatchEvent(new CustomEvent("settings-action",{detail:{action:n,id:e.id},bubbles:!0,composed:!0}))}open(e){this._section=e,this._query="",this._drill=!0,this._note=null,this.dispatchEvent(new CustomEvent("settings-nav",{detail:{section:e,id:null},bubbles:!0,composed:!0})),this.renderRoot.querySelector(".st-main")?.scrollTo?.({top:0})}render(){let e=this.env,n=He(e),r=this._query.trim(),i=r?Ie(r,e,s=>this.tr(s)):null;return p`<div class="st ${this._drill||r?"st-drill":""}">
      <nav class="st-nav" aria-label=${this.tr("st_title")}>
        <label class="st-search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            .value=${this._query}
            placeholder=${this.tr("st_search")}
            aria-label=${this.tr("st_search")}
            @input=${s=>this._query=s.target.value}
            @keydown=${s=>s.key==="Escape"&&(this._query="")}
          />
        </label>
        ${Pt.map(s=>{let o=n.filter(a=>a.group===s.id);return o.length?p`<div class="st-group">${this.tr(s.title)}</div>
                ${o.map(a=>p`<button class="st-nav-btn" aria-current=${!r&&a.id===this._section?"page":"false"} @click=${()=>this.open(a.id)}>
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
      ${[...r].map(([i,s])=>{let o=Y(i);return p`<section class="st-card">
          <h3><button class="st-link" @click=${()=>this.open(i)}>${o.icon} ${this.tr(o.title)} ›</button></h3>
          ${s.map(a=>this.renderRow(a,!0))}
        </section>`})}`}renderSection(e){let n=le(e.id,this.env),r=this.viewer,i=n.some(o=>o.scope!=="device"&&o.permission==="editor")&&!r.editor,s=n.length>0&&n.every(o=>o.permission==="ha_admin")&&!r.haAdmin;return p`<button class="st-back" @click=${()=>this._drill=!1}>‹ ${this.tr("st_back")}</button>
      <div class="st-title">
        <h2>${this.tr(e.title)}</h2>
        <p>${this.tr(e.hint)}</p>
      </div>
      ${s?p`<p class="st-lock">🔒 ${this.tr("st_admin_locked")}</p>`:i?p`<p class="st-lock">🔒 ${this.tr("st_locked")}</p>`:m}
      ${this._note?p`<p class="st-note" role="status">${this._note}</p>`:m}
      ${e.cards.map(o=>{let a=n.filter(l=>l.card===o.id);return a.length?p`<section class="st-card">
              <h3>${this.tr(o.title)}</h3>
              ${a.map(l=>this.renderRow(l,!1))}
            </section>`:m})}`}renderRow(e,n){let r=Le(e,this.viewer),i=e.control.kind==="embed"||e.control.kind==="list"||e.control.kind==="checks"||e.control.kind==="entity";return p`<div class="st-row st-k-${e.control.kind} ${e.hint?"":"st-nohint"} ${i?"st-row-wide":""} ${n||this._flash===e.id?"st-hit":""}" data-id=${e.id}>
      <div class="st-lbl">
        <span class="st-name">${e.control.kind==="number"&&e.control.length?Ht(this.env,this.tr(e.label)):this.tr(e.label)}</span>
        ${e.control.kind==="note"?m:p`<span class="st-scope st-scope-${e.scope}" title=${this.tr(`st_scope_${e.scope}_hint`)}>${this.tr(`st_scope_${e.scope}`)}</span>`}
        ${e.permission==="ha_admin"?p`<span class="st-scope st-scope-admin" title=${this.tr("st_admin_hint")}>${this.tr("st_admin")}</span>`:m}
      </div>
      ${e.hint?p`<p class="st-hint">${this.tr(e.hint)}</p>`:m}
      <div class="st-ctl">${this.renderControl(e,e.control,!r)}</div>
    </div>`}options(e){return typeof e.options=="function"?e.options(this.env):e.options}label(e){return e.raw?e.label:this.tr(e.label)}renderControl(e,n,r){let i=this.env,s=e.read(i),o=this.tr(e.label);switch(n.kind){case"switch":return p`<button class="st-sw" role="switch" aria-checked=${!!s} aria-label=${o} ?disabled=${r} @click=${()=>this.write(e,!s)}></button>`;case"number":{if(n.length&&Z(i)==="imperial")return p`<span class="st-num">
            <input
              class="st-len"
              type="text"
              inputmode="text"
              spellcheck="false"
              .value=${typeof s=="number"?ae(i,s):""}
              placeholder=${n.clearable&&typeof e.default=="number"?ae(i,e.default):""}
              aria-label=${o}
              ?disabled=${r}
              @change=${c=>{let u=c.target,d=u.value.trim();if(d===""){n.clearable&&this.write(e,null);return}let h=Tt(i,d);if(h===null){u.value=typeof s=="number"?ae(i,s):"";return}this.write(e,h)}}
            />
          </span>`;let a=typeof n.unit=="function"?n.unit(i):n.unit,l=typeof s=="number"?String(Math.round(s*1e3)/1e3):"";return p`<span class="st-num">
          <input
            type="number"
            inputmode="decimal"
            step=${n.step}
            min=${n.min??""}
            max=${n.max??""}
            .value=${l}
            placeholder=${n.clearable?String(e.default??""):""}
            aria-label=${o}
            ?disabled=${r}
            @change=${c=>{let u=c.target.value.trim().replace(",",".");if(u===""){n.clearable&&this.write(e,null);return}let d=Number(u);Number.isFinite(d)&&this.write(e,d)}}
          />${a?p`<i>${a.startsWith("st_")?this.tr(a):a}</i>`:m}
        </span>`}case"segment":return p`<div class="fp3d-seg st-seg" role="group" aria-label=${o}>
          ${this.options(n).map(a=>p`<button aria-pressed=${s===a.value} ?disabled=${r} @click=${()=>this.write(e,a.value)}>${this.label(a)}</button>`)}
        </div>`;case"select":return p`<select class="st-select" aria-label=${o} ?disabled=${r} @change=${a=>this.write(e,a.target.value)}>
          ${n.options(i).map(a=>p`<option value=${a.value} ?selected=${s===a.value}>${this.label(a)}</option>`)}
        </select>`;case"entity":return this.renderEntity(e,n,r);case"text":return p`<input
          class="st-text"
          type="text"
          maxlength=${n.maxLength??255}
          .value=${String(s??"")}
          placeholder=${n.placeholder?this.tr(n.placeholder):""}
          aria-label=${o}
          ?disabled=${r}
          @change=${a=>this.write(e,a.target.value.trim())}
        />`;case"time":return p`<input
          class="st-text st-time"
          type="time"
          .value=${String(s??"")}
          aria-label=${o}
          ?disabled=${r}
          @change=${a=>this.write(e,a.target.value||null)}
        />`;case"colour":return p`<span class="st-colour">
          <input type="color" .value=${String(s??n.fallback)} aria-label=${o} ?disabled=${r} @input=${a=>this.write(e,a.target.value)} />
          ${n.clearable&&s?p`<button class="fp3d-btn" ?disabled=${r} title=${this.tr("st_accent_default")} @click=${()=>this.write(e,null)}>↺</button>`:m}
        </span>`;case"range":return p`<span class="st-num">
          <input type="range" min=${n.min} max=${n.max} step=${n.step} .value=${String(s??e.default)} aria-label=${o} ?disabled=${r} @change=${a=>this.write(e,Number(a.target.value))} />
          <i>${String(s??e.default)}</i>
        </span>`;case"checks":{let a=new Set(s??[]);return p`<div class="st-checks">
          ${n.options.map(l=>p`<label class="st-check"
              ><input
                type="checkbox"
                .checked=${a.has(l.value)}
                ?disabled=${r}
                @change=${c=>{let u=new Set(a);c.target.checked?u.add(l.value):u.delete(l.value),this.write(e,n.options.map(d=>d.value).filter(d=>u.has(d)))}}
              />
              ${this.label(l)}</label
            >`)}
        </div>`}case"action":return this.renderAction(e,n,r);case"list":return this.renderIgnored(e,r);case"embed":return this.renderEmbed(e,n.topic);case"note":return m}}renderEntity(e,n,r){let i=this.env,s=e.read(i),o=n.auto?.(i),a=o===void 0?null:o?this.t("entity_auto",{name:this.hass?G(this.hass,o):o}):this.t("entity_auto_none"),l=[...a!==null?[{id:"__auto",label:a}]:[],{id:"none",label:this.t("entity_none")}],c=rt(this.hass,u=>n.filter(u,i));return p`<fp3d-entity-picker
      .options=${c}
      .fixed=${l}
      .value=${s??(a!==null?"__auto":"none")}
      .placeholder=${this.t("entity_search")}
      aria-label=${this.tr(e.label)}
      ?disabled=${r}
      @change=${u=>{u.stopPropagation();let d=u.detail.value;this.write(e,d==="__auto"||d==="none"?null:d)}}
    ></fp3d-entity-picker>`}renderAction(e,n,r){if(n.action==="start_view"){let s=e.read(this.env);return p`<div class="st-actions">
        <button class="fp3d-btn" ?disabled=${r||!this.lastView} title=${this.lastView?"":this.tr("st_start_view_none")} @click=${()=>this.act(e,"start_view")}>📌 ${this.tr(n.button)}</button>
        ${s?p`<button class="fp3d-btn" ?disabled=${r} @click=${()=>this.write(e,null)}>${this.t("start_view_reset")}</button>`:m}
        <span class="st-sub">${this.tr(s?"st_start_view_set":"st_start_view_default")}</span>
      </div>`}let i=Array.isArray(e.read(this.env))?e.read(this.env).length:0;return p`<button class="fp3d-btn" ?disabled=${r} @click=${()=>this.act(e,n.action)}>${this.tr(n.button,{n:i})}</button>`}renderIgnored(e,n){let r=e.read(this.env)??[];return r.length?p`<div class="st-list">
      ${r.map(i=>{let s=`alert_short_${i.kind}`,o=this.t(s);return p`<div class="st-list-row">
          <span title=${i.entity}>${o===s?i.kind:o} · ${this.hass?G(this.hass,i.entity):i.entity}</span>
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
    ></fp3d-editor>`}static styles=[ie,at,P`
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
      @media (max-width: ${On}px) {
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
    `]};customElements.get("fp3d-settings-page")||customElements.define("fp3d-settings-page",ce);export{ce as SettingsPage,Ce as localPrefs};
