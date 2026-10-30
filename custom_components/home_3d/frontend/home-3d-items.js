var G=globalThis,q=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),Se=new WeakMap,O=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(q&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Se.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Se.set(t,e))}return e}toString(){return this.cssText}},H=i=>new O(typeof i=="string"?i:i+"",void 0,ae),v=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new O(t,i,ae)},Ee=(i,e)=>{if(q)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=G.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},le=q?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return H(t)})(i):i;var{is:vt,defineProperty:kt,getOwnPropertyDescriptor:$t,getOwnPropertyNames:Pt,getOwnPropertySymbols:St,getPrototypeOf:Et}=Object,Y=globalThis,Ae=Y.trustedTypes,At=Ae?Ae.emptyScript:"",Rt=Y.reactiveElementPolyfillSupport,L=(i,e)=>i,ce={toAttribute(i,e){switch(e){case Boolean:i=i?At:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ie=(i,e)=>!vt(i,e),Re={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:Ie};Symbol.metadata??=Symbol("metadata"),Y.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&kt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:s}=$t(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let o=r?.call(this);s?.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Re}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;let e=Et(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){let t=this.properties,n=[...Pt(t),...St(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(le(r))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let s=(n.converter?.toAttribute!==void 0?n.converter:ce).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=n.getPropertyOptions(r),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ce;this._$Em=r;let o=a.fromAttribute(t,s.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(e,t,n,r=!1,s){if(e!==void 0){let a=this.constructor;if(r===!1&&(s=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ie)(s,t)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:s},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),s!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,s]of n){let{wrapped:a}=s,o=this[r];a!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,s,o)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[L("elementProperties")]=new Map,_[L("finalized")]=new Map,Rt?.({ReactiveElement:_}),(Y.reactiveElementVersions??=[]).push("2.1.2");var pe=globalThis,Te=i=>i,K=pe.trustedTypes,Me=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,de="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+b,It=`<${he}>`,S=document,z=()=>S.createComment(""),F=i=>i===null||typeof i!="object"&&typeof i!="function",me=Array.isArray,Fe=i=>me(i)||typeof i?.[Symbol.iterator]=="function",ue=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oe=/-->/g,He=/>/g,$=RegExp(`>|${ue}(?:([^\\s"'>=/]+)(${ue}*=${ue}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Le=/'/g,Ce=/"/g,Ne=/^(?:script|style|textarea|title)$/i,fe=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),p=fe(1),mn=fe(2),fn=fe(3),m=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),ze=new WeakMap,P=S.createTreeWalker(S,129);function Ue(i,e){if(!me(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Me!==void 0?Me.createHTML(e):e}var De=(i,e)=>{let t=i.length-1,n=[],r,s=e===2?"<svg>":e===3?"<math>":"",a=C;for(let o=0;o<t;o++){let l=i[o],c,d,h=-1,g=0;for(;g<l.length&&(a.lastIndex=g,d=a.exec(l),d!==null);)g=a.lastIndex,a===C?d[1]==="!--"?a=Oe:d[1]!==void 0?a=He:d[2]!==void 0?(Ne.test(d[2])&&(r=RegExp("</"+d[2],"g")),a=$):d[3]!==void 0&&(a=$):a===$?d[0]===">"?(a=r??C,h=-1):d[1]===void 0?h=-2:(h=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?$:d[3]==='"'?Ce:Le):a===Ce||a===Le?a=$:a===Oe||a===He?a=C:(a=$,r=void 0);let w=a===$&&i[o+1].startsWith("/>")?" ":"";s+=a===C?l+It:h>=0?(n.push(c),l.slice(0,h)+de+l.slice(h)+b+w):l+b+(h===-2?o:w)}return[Ue(i,s+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},N=class i{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,a=0,o=e.length-1,l=this.parts,[c,d]=De(e,t);if(this.el=i.createElement(c,n),P.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=P.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith(de)){let g=d[a++],w=r.getAttribute(h).split(b),j=/([.?@])?(.*)/.exec(g);l.push({type:1,index:s,name:j[2],strings:w,ctor:j[1]==="."?X:j[1]==="?"?Z:j[1]==="@"?Q:A}),r.removeAttribute(h)}else h.startsWith(b)&&(l.push({type:6,index:s}),r.removeAttribute(h));if(Ne.test(r.tagName)){let h=r.textContent.split(b),g=h.length-1;if(g>0){r.textContent=K?K.emptyScript:"";for(let w=0;w<g;w++)r.append(h[w],z()),P.nextNode(),l.push({type:2,index:++s});r.append(h[g],z())}}}else if(r.nodeType===8)if(r.data===he)l.push({type:2,index:s});else{let h=-1;for(;(h=r.data.indexOf(b,h+1))!==-1;)l.push({type:7,index:s}),h+=b.length-1}s++}}static createElement(e,t){let n=S.createElement("template");return n.innerHTML=e,n}};function E(i,e,t=i,n){if(e===m)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,s=F(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),s===void 0?r=void 0:(r=new s(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=E(i,r._$AS(i,e.values),r,n)),e}var J=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??S).importNode(t,!0);P.currentNode=r;let s=P.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new I(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new ee(s,this,e)),this._$AV.push(c),l=n[++o]}a!==l?.index&&(s=P.nextNode(),a++)}return P.currentNode=S,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},I=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),F(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==m&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&F(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=N.createElement(Ue(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let s=new J(r,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new N(e)),t}k(e){me(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let s of e)r===t.length?t.push(n=new i(this.O(z()),this.O(z()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Te(e).nextSibling;Te(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},A=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=u}_$AI(e,t=this,n,r){let s=this.strings,a=!1;if(s===void 0)e=E(this,e,t,0),a=!F(e)||e!==this._$AH&&e!==m,a&&(this._$AH=e);else{let o=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=E(this,o[n+l],t,l),c===m&&(c=this._$AH[l]),a||=!F(c)||c!==this._$AH[l],c===u?e=u:e!==u&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!r&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},X=class extends A{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},Z=class extends A{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},Q=class extends A{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??u)===m)return;let n=this._$AH,r=e===u&&n!==u||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==u&&(n===u||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ee=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}},Be={M:de,P:b,A:he,C:1,L:De,R:J,D:Fe,V:E,I,H:A,N:Z,U:Q,B:X,F:ee},Tt=pe.litHtmlPolyfillSupport;Tt?.(N,I),(pe.litHtmlVersions??=[]).push("3.3.3");var We=(i,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let s=t?.renderBefore??null;n._$litPart$=r=new I(e.insertBefore(z(),s),s,void 0,t??{})}return r._$AI(i),r};var ge=globalThis,f=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=We(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return m}};f._$litElement$=!0,f.finalized=!0,ge.litElementHydrateSupport?.({LitElement:f});var Mt=ge.litElementPolyfillSupport;Mt?.({LitElement:f});(ge.litElementVersions??=[]).push("4.2.2");async function _e(i,e){return(await i.callWS({type:"home_3d/items/save",item:e})).item}async function Ve(i,e){await i.callWS({type:"home_3d/items/remove",item_id:e})}var U=["box","cyl","loft","sphere","lathe","rbox"],Ot=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent"],be=["floor","surface","wall","ceiling"],ye=["ceiling","downlight","spot","panel","pendant","floor","uplight","table","wall","strip","bollard","garden"];var D={shapes:U,colourRoles:Ot,mounts:be,lights:ye,maxParts:60,maxProfilePoints:12,maxNameLength:80,maxRooms:12,maxTags:12,maxTagLength:30,metres:[.01,10],centre:[-.5,.5],extent:[.001,1],level:[0,1],round:[.01,.5],wallY:[0,3],rot:[-360,360]};var Ht={type:"none",pitch:35,overhang:.4},Tn={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Ht}};var Lt=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var Ct=new Set([...Lt,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var Ft=/^[a-z0-9][a-z0-9_.-]{0,39}$/;function xe(i){return i.normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,34).replace(/_+$/,"")||"item"}function B(i,e){let t=new Set(e),n=Ft.test(i)?i:xe(i);if(!t.has(n))return n;for(let r=2;;r++){let s=`${n.slice(0,40-String(r).length-1)}_${r}`;if(!t.has(s))return s}}function Ge(i,e){return{id:B(xe(i),e),name:{en:i.trim()||"New item"},size:[.6,.6,.75],parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:.5,color:"body"}]}}var Nt=[[0,0],[.7,0],[1,.4],[.5,1],[0,1]],y=(i,e,t,n)=>Number.isFinite(i)?Math.min(t,Math.max(e,i)):n,x=i=>Math.round(i*1e3)/1e3;function qe(i){let e={...i,x:x(y(i.x,-.5,.5,0)),z:x(y(i.z,-.5,.5,0)),w:x(y(i.w,.001,1,1)),d:x(y(i.d,.001,1,1)),y:x(y(i.y,0,1,0)),h:x(y(i.h,.001,1,1))};if(e.shape==="lathe"?e.profile=e.profile?.length?e.profile:Nt.map(t=>[...t]):delete e.profile,e.shape==="rbox"?e.round=x(y(e.round??.2,.01,.5,.2)):delete e.round,e.shape!=="loft")for(let t of["tx","tz","tw","td"])delete e[t];return e.shape!=="cyl"&&delete e.axis,e}function W(i,e){return{...i,parts:e}}function Ye(i,e){if(i.parts.length>=60)return i;let t=Math.min(.75,Math.max(0,...i.parts.map(s=>s.y+s.h))),n=Math.max(.25,Math.min(.5,1-t)),r=qe({shape:e,x:0,z:0,w:.5,d:.5,y:t,h:n,color:e==="lathe"||e==="sphere"?"accent":"body"});return W(i,[...i.parts,r])}function Ke(i,e,t){return W(i,i.parts.map((n,r)=>r===e?qe({...n,...t}):n))}function Je(i,e,t){return W(i,i.parts.map((n,r)=>{if(r!==e)return n;let s=new Set(n.fix??"");s.has(t)?s.delete(t):s.add(t);let a=["w","d","h"].filter(c=>s.has(c)).join(""),{fix:o,...l}=n;return a?{...l,fix:a}:l}))}function Xe(i,e){return i.parts.length<=1?i:W(i,i.parts.filter((t,n)=>n!==e))}function Ze(i,e){if(i.parts.length>=60||!i.parts[e])return i;let t=structuredClone(i.parts[e]);return W(i,[...i.parts.slice(0,e+1),t,...i.parts.slice(e+1)])}function Qe(i,e,t){let n={...i},r=e.name?.trim().slice(0,80);if(r&&(n.name={...i.name,en:r},t&&(n.id=B(xe(r),t))),e.group!==void 0&&(e.group?n.group=e.group:delete n.group),e.room!==void 0&&(e.room.length?n.room=[...new Set(e.room)].slice(0,12):delete n.room),e.tags!==void 0){let s=[...new Set(e.tags.split(",").map(a=>a.trim().slice(0,30)).filter(Boolean))].slice(0,12);s.length?n.tags=s:delete n.tags}if(e.ikea!==void 0){let s=e.ikea.trim().slice(0,40);s?n.ikea=s:delete n.ikea}return n}var Ut={electric:!1,mount:"floor",surface:!1,vehicle:!1,hole:!1},Dt={edges:!1,glow:!1,screen:!1};function je(i,e){return Object.fromEntries(Object.entries(i).filter(([t,n])=>n!==void 0&&e[t]!==n))}function et(i){let e=je(i,Ut);return e.mount!=="wall"&&delete e.wall_y,e.parts=i.parts.map(t=>je(t,Dt)),{name:`${i.id}.json`,text:`${JSON.stringify(e,null,2)}
`}}function Bt(i){let e=["{}","[]"].map(t=>[i.indexOf(t[0]),i.lastIndexOf(t[1])]).filter(([t,n])=>t>=0&&n>t);e.sort((t,n)=>t[0]-n[0]);for(let t of[i,...e.map(([n,r])=>i.slice(n,r+1))])try{return{data:JSON.parse(t)}}catch{}return null}function tt(i,e){let t=Bt(i);if(!t)return[{error:"not_json"}];let n=t.data;if(n?.format==="home3d-pack"||n?.format==="fp3dpack")return[{error:"pack_file"}];let r=Array.isArray(n)?n:Array.isArray(n?.items)&&!n.parts?n.items:[n];if(!r.length)return[{error:"not_an_item"}];let s=[...e];return r.map(a=>{let o=a;return!o||typeof o!="object"||typeof o.id!="string"||!Array.isArray(o.parts)?{error:"not_an_item"}:(s.push(B(o.id,s)),{item:{...o,id:s[s.length-1]}})})}function we(i){return(i??[]).map(([e,t])=>`${e} ${t}`).join(", ")}function nt(i){let e=i.split(/[,;]/).map(t=>t.trim()).filter(Boolean).map(t=>t.split(/\s+/).map(Number));return e.length<2||e.length>12||e.some(t=>t.length!==2||t.some(n=>!Number.isFinite(n)))?null:e.map(([t,n])=>[x(y(t,0,1,0)),x(y(n,0,1,0))])}var Wt=new URL(import.meta.url),Vt=new URL("./home-3d-3d.js?v=ee4dcbeab6c8",Wt).href,it;function rt(){return it??=import(Vt),it}var te=class{waiting=[];onChange=null;get current(){return this.waiting[0]?.req??null}ask(e){return new Promise(t=>{this.waiting.push({req:e,resolve:t}),this.waiting.length===1&&this.onChange?.()})}answer(e,t=""){let n=this.waiting.shift();n&&(n.resolve({ok:e,value:t}),this.onChange?.())}},ne=globalThis;function ot(i){ne.__fp3dAskFactory||(ne.__fp3dAskFactory=i)}function jt(){return ne.__fp3dAskHost??ne.__fp3dAskFactory?.()??null}var Gt={ok:!1,value:""};function st(i){let e=jt();return e?e.ask(i):Promise.resolve(Gt)}async function at(i,e){return(await st({text:i,...e})).ok}async function lt(i,e,t){return(await st({text:i,detail:e,...t})).ok}var R={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ct=i=>(...e)=>({_$litDirective$:i,values:e}),ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Qn}=Be;var ut=i=>i.strings===void 0;var qt={},pt=(i,e=qt)=>i._$AH=e;var dt=ct(class extends ie{constructor(i){if(super(i),i.type!==R.PROPERTY&&i.type!==R.ATTRIBUTE&&i.type!==R.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ut(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===m||e===u)return e;let t=i.element,n=i.name;if(i.type===R.PROPERTY){if(e===t[n])return m}else if(i.type===R.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return m}else if(i.type===R.ATTRIBUTE&&t.getAttribute(n)===e+"")return m;return pt(i),e}});var ve={bg:"#070b14",bg2:"#0d1424",chrome:"rgba(14, 21, 38, 0.86)",chromeSolid:"#0f1729",line:"rgba(120, 170, 255, 0.16)",text:"#e6eefc",muted:"#8a9bb8",accent:"#37e0ff",accentText:"#041018",soft:"#5b7cff",warm:"#ffb547",danger:"#ff6b8b",shadow:"0 8px 30px rgba(0, 0, 0, 0.5)",colorScheme:"dark"},ht={bg:"#eef2f8",bg2:"#e3e9f2",chrome:"rgba(255, 255, 255, 0.88)",chromeSolid:"#ffffff",line:"rgba(30, 60, 110, 0.18)",text:"#132036",muted:"#4a5a74",accent:"#0b7a99",accentText:"#ffffff",soft:"#3d5bd9",warm:"#a35f00",danger:"#c4224a",shadow:"0 6px 22px rgba(20, 40, 80, 0.16)",colorScheme:"light"};function mt(i){let e=t=>t.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`);return Object.entries(i).map(([t,n])=>`--fp3d-s-${e(t)}: ${n};`).join(`
`)}var ft=i=>i.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),Yt=Object.keys(ve).filter(i=>i!=="colorScheme").map(i=>`--fp3d-${ft(i)}: var(--fp3d-s-${ft(i)}, ${ve[i]});`).join(`
`),re=v`
  :host {
    ${H(Yt)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${H(mt(ht))}
  }
`,oe=v`
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
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var ke="fp3d-ask-dialog";function Kt(){let i=document.activeElement;for(;i?.shadowRoot?.activeElement;)i=i.shadowRoot.activeElement;return i}function Jt(){let i=document.fullscreenElement;for(;i?.shadowRoot?.fullscreenElement;)i=i.shadowRoot.fullscreenElement;return i??document.body}var $e=class extends f{queue=new te;typed="";shown=null;returnFocus=null;constructor(){super(),this.queue.onChange=()=>this.requestUpdate()}ask(e){return this.queue.ask(e)}answer(e){let t=this.queue.current;t&&this.queue.answer(e||t.cancel===void 0,t.input!==void 0?this.typed:"")}key(e){e.stopPropagation(),e.key==="Escape"?(e.preventDefault(),this.answer(!1)):e.key==="Enter"&&e.target.tagName==="INPUT"&&(e.preventDefault(),this.answer(!0))}willUpdate(){let e=this.queue.current;e!==this.shown&&(e&&!this.shown&&(this.returnFocus=Kt()),this.typed=e?.input??"",this.toggleAttribute("open",!!e))}updated(){let e=this.queue.current;if(e===this.shown)return;if(this.shown=e,!e){this.returnFocus?.focus?.(),this.returnFocus=null;return}let t=this.renderRoot.querySelector("input");t?(t.focus(),t.select()):this.renderRoot.querySelector(e.danger&&e.cancel!==void 0?".ask-cancel":".ask-ok")?.focus()}render(){let e=this.queue.current;return e?p`<div class="backdrop" @click=${()=>this.answer(!1)}></div>
      <div class="box ${e.detail!==void 0?"wide":""}" role=${e.cancel===void 0?"dialog":"alertdialog"} aria-modal="true" aria-describedby="ask-text" @keydown=${t=>this.key(t)}>
        <p id="ask-text" class="text">${e.text}</p>
        ${e.detail!==void 0?p`<textarea class="detail" readonly rows="14" spellcheck="false" aria-labelledby="ask-text" .value=${e.detail}></textarea>`:u}
        ${e.input!==void 0?p`<label class="fp3d-field"><input type="text" aria-labelledby="ask-text" .value=${dt(this.typed)} @input=${t=>this.typed=t.target.value} /></label>`:u}
        <div class="buttons">
          ${e.cancel!==void 0?p`<button class="fp3d-btn ask-cancel" @click=${()=>this.answer(!1)}>${e.cancel}</button>`:u}
          <button class="fp3d-btn ask-ok ${e.danger?"ask-danger":"fp3d-primary"}" @click=${()=>this.answer(!0)}>${e.ok}</button>
        </div>
      </div>`:u}static styles=[re,oe,v`
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
    `]};customElements.get(ke)||customElements.define(ke,$e);var V=null;ot(()=>typeof document>"u"?null:{ask(i){V??=document.createElement(ke);let e=Jt();return V.parentNode!==e&&!V.queue?.current&&e.appendChild(V),V.ask(i)}});var gt={id:"round_side_table_40",name:{en:"Round side table 40"},size:[.4,.4,.52],group:"table",room:["living","bedroom","conservatory"],tags:["side table","lamp table","end table","occasional table","round","tripod"],family:"round_side_table",variant:{en:"\xD840"},surface:!0,parts:[{shape:"cyl",x:0,z:0,w:1,d:1,y:.9519,h:.0481,color:"wood",fix:"h"},{shape:"cyl",x:0,z:0,w:.8,d:.8,y:.32,h:.0385,color:"wood",fix:"h"},{shape:"loft",x:0,z:-.425,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:0,tz:-.3,tw:.075,td:.075,fix:"wd"},{shape:"loft",x:.3681,z:.2125,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:.2598,tz:.15,tw:.075,td:.075,fix:"wd"},{shape:"loft",x:-.3681,z:.2125,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:-.2598,tz:.15,tw:.075,td:.075,fix:"wd"}]};var _t={id:"vase",name:{en:"Vase"},size:[.2,.2,.42],group:"vase",tags:["vase","ceramic","flower vase","ornament","tall","floor vase"],family:"vase",variant:{en:"Tall"},mount:"surface",parts:[{shape:"lathe",x:0,z:0,w:1,d:1,y:0,h:1,color:"pot",profile:[[0,0],[.55,0],[.9,.18],[1,.4],[.8,.68],[.42,.85],[.4,.95],[.5,1],[0,1]]}]};var M={ie_title:"Your own items",ie_intro:"Build furniture from simple shapes. Your items are kept in Home Assistant, everyone in the home sees them in the library, and they never leave it unless you export them.",ie_new:"New item",ie_new_name:"New item",ie_import:"Import item files \u2026",ie_brief:"Instructions for an LLM",ie_brief_hint:"A short brief on the item format. Copy it into ChatGPT, Claude or Gemini, say what you want (one item or several), then paste the answer under \u201CPaste items\u201D.",ie_brief_copy:"Copy",ie_brief_copied:"Copied. Paste it into the LLM's chat, say what you want, then paste its answer under \u201CPaste items\u201D.",ie_brief_failed:"Could not copy to the clipboard: {why}",ie_paste:"Paste items",ie_paste_label:"An item's JSON or a list of items (an LLM's answer can be pasted as it is); the box stays open for the next",ie_paste_import:"Import",ie_imported:"Imported: {names}",ie_import_failed:"{file}: {why}",ie_import_replace:"\u201C{name}\u201D is already one of your items. Replace it, or keep both?",ie_replace:"Replace",ie_keep_both:"Keep both",ie_cancel:"Cancel",ie_discard_ok:"Discard",ie_err_not_json:"not a JSON file",ie_err_not_an_item:"not an item file (an item has an id and parts)",ie_err_pack_file:"this is a pack's pack.json; import the whole pack folder under Packs",ie_none:"No items of your own yet.",ie_close:"Close",ie_save:"Save",ie_saved:"Saved. It is in the library now.",ie_unsaved:"Not saved yet",ie_save_failed:"Not saved: {why}",ie_export:"Export",ie_delete:"Delete",ie_delete_confirm:"Delete \u201C{name}\u201D? Copies already placed stay in the plan and keep their look.",ie_discard:"Discard the changes to \u201C{name}\u201D?",ie_details:"Item",ie_name:"Name",ie_section:"Library section",ie_section_none:"\u2013 sorted by its name \u2013",ie_rooms:"Rooms (none: any room)",ie_tags:"Search words (separated by commas)",ie_ikea:"IKEA name (optional)",ie_size:"Size in metres (width, depth, height)",ie_mount:"Stands",ie_mount_floor:"on the floor",ie_mount_surface:"on the item below it",ie_mount_wall:"on a wall",ie_mount_ceiling:"from the ceiling",ie_wall_y:"Bottom above the floor (m)",ie_flag_surface:"Its top carries other items",ie_flag_electric:"Can be linked to a switch and a power sensor",ie_flag_light:"Lamp: how its light spreads",ie_parts:"Parts ({n} of {max})",ie_parts_hint:"Measures are fractions of the item's size: x and z from \u22120.5 to 0.5 (front is +z), width, depth and height up to 1, bottom (y) from 0 to 1.",ie_add:"Add",ie_shape_box:"Box",ie_shape_cyl:"Cylinder",ie_shape_loft:"Loft (sloped box)",ie_shape_sphere:"Sphere",ie_shape_lathe:"Lathe (turned)",ie_shape_rbox:"Rounded box",ie_colour:"Colour",ie_colour_own:"own colour",ie_fixed:"Keeps",ie_fixed_hint:"Measures this part keeps when the item is resized (legs keep their width, a top keeps its thickness).",ie_round:"Rounding",ie_duplicate:"Copy",ie_remove_part:"Remove part",ie_part:"Part {n}",ie_turn_hint:"Drag the picture to turn the item.",ie_view_front:"Front",ie_view_side:"Side",ie_view_top:"Top",ie_view_angle:"Angle",ie_light:"Light preview",ie_light_hint:"Shows the item in the light look (white parts look white) instead of the dark neon look."},Qt={ie_title:"Eigene M\xF6bel",ie_intro:"Baue M\xF6bel aus einfachen Formen. Sie bleiben in Home Assistant, alle im Haushalt finden sie in der Bibliothek, und sie verlassen es nur, wenn du sie exportierst.",ie_new:"Neues M\xF6bel",ie_new_name:"Neues M\xF6bel",ie_import:"M\xF6bel-Dateien importieren \u2026",ie_brief:"Anleitung f\xFCr eine KI",ie_brief_hint:"Eine kurze Beschreibung des M\xF6bel-Formats. In ChatGPT, Claude oder Gemini kopieren, sagen, was du m\xF6chtest (ein M\xF6bel oder mehrere), und die Antwort unter \u201EM\xF6bel einf\xFCgen\u201C einf\xFCgen.",ie_brief_copy:"Kopieren",ie_brief_copied:"Kopiert. In den Chat der KI einf\xFCgen, sagen, was du m\xF6chtest, und die Antwort unter \u201EM\xF6bel einf\xFCgen\u201C einf\xFCgen.",ie_brief_failed:"Konnte nicht in die Zwischenablage kopieren: {why}",ie_paste:"M\xF6bel einf\xFCgen",ie_paste_label:"Das JSON eines M\xF6bels oder eine Liste von M\xF6beln (die Antwort einer KI so, wie sie ist); das Feld bleibt f\xFCr das n\xE4chste offen",ie_paste_import:"Importieren",ie_imported:"Importiert: {names}",ie_import_failed:"{file}: {why}",ie_import_replace:"\u201E{name}\u201C gibt es schon. Ersetzen oder beide behalten?",ie_replace:"Ersetzen",ie_keep_both:"Beide behalten",ie_cancel:"Abbrechen",ie_discard_ok:"Verwerfen",ie_err_not_json:"keine JSON-Datei",ie_err_not_an_item:"keine M\xF6bel-Datei (ein M\xF6bel hat eine id und Teile)",ie_err_pack_file:"das ist die pack.json eines Packs; den ganzen Pack-Ordner unter Packs importieren",ie_none:"Noch keine eigenen M\xF6bel.",ie_close:"Schlie\xDFen",ie_save:"Speichern",ie_saved:"Gespeichert. Es ist jetzt in der Bibliothek.",ie_unsaved:"Noch nicht gespeichert",ie_save_failed:"Nicht gespeichert: {why}",ie_export:"Exportieren",ie_delete:"L\xF6schen",ie_delete_confirm:"\u201E{name}\u201C l\xF6schen? Schon platzierte bleiben im Plan und behalten ihr Aussehen.",ie_discard:"\xC4nderungen an \u201E{name}\u201C verwerfen?",ie_details:"M\xF6bel",ie_name:"Name",ie_section:"Bereich der Bibliothek",ie_section_none:"\u2013 nach dem Namen \u2013",ie_rooms:"R\xE4ume (keiner: jeder Raum)",ie_tags:"Suchw\xF6rter (mit Kommas getrennt)",ie_ikea:"IKEA-Name (optional)",ie_size:"Gr\xF6\xDFe in Metern (Breite, Tiefe, H\xF6he)",ie_mount:"Steht",ie_mount_floor:"auf dem Boden",ie_mount_surface:"auf dem M\xF6bel darunter",ie_mount_wall:"an der Wand",ie_mount_ceiling:"an der Decke",ie_wall_y:"Unterkante \xFCber dem Boden (m)",ie_flag_surface:"Oben kann man etwas abstellen",ie_flag_electric:"Mit Schalter und Leistungssensor verkn\xFCpfbar",ie_flag_light:"Lampe: wie ihr Licht f\xE4llt",ie_parts:"Teile ({n} von {max})",ie_parts_hint:"Ma\xDFe sind Anteile der M\xF6belgr\xF6\xDFe: x und z von \u22120,5 bis 0,5 (vorne ist +z), Breite, Tiefe und H\xF6he bis 1, Unterkante (y) von 0 bis 1.",ie_add:"Hinzuf\xFCgen",ie_shape_box:"Quader",ie_shape_cyl:"Zylinder",ie_shape_loft:"Loft (schr\xE4ger Quader)",ie_shape_sphere:"Kugel",ie_shape_lathe:"Drehteil",ie_shape_rbox:"Abgerundeter Quader",ie_colour:"Farbe",ie_colour_own:"eigene Farbe",ie_fixed:"Beh\xE4lt",ie_fixed_hint:"Ma\xDFe, die dieses Teil beh\xE4lt, wenn das M\xF6bel gr\xF6\xDFer oder kleiner wird (Beine behalten ihre Breite, eine Platte ihre St\xE4rke).",ie_round:"Rundung",ie_duplicate:"Kopie",ie_remove_part:"Teil entfernen",ie_part:"Teil {n}",ie_turn_hint:"Zum Drehen das Bild ziehen.",ie_view_front:"Vorne",ie_view_side:"Seite",ie_view_top:"Oben",ie_view_angle:"Schr\xE4g",ie_light:"Helle Vorschau",ie_light_hint:"Zeigt das M\xF6bel im hellen Aussehen (wei\xDFe Teile sind wei\xDF) statt im dunklen Neon-Aussehen."};function bt(i,e){return(t,n={})=>{if(!t.startsWith("ie_"))return i(t,n);let s=((e()??"").startsWith("de")?Qt:M)[t]??M[t]??t;for(let[a,o]of Object.entries(n))s=s.replace(`{${a}}`,String(o));return s}}var en=[["A round side table (cylinders for the top and shelf, splayed lofts for the legs, fixed measures)",gt],["A vase (one lathe)",_t]],yt="```";function tn(i){let{family:e,variant:t,parts:n,...r}=i,s=JSON.stringify(r).slice(0,-1),a=n.map(o=>`  ${JSON.stringify(o)}`).join(`,
`);return`${s},"parts":[
${a}
]}`}var nn={box:"a box filling the part's box.",cyl:'a cylinder, upright; its diameter is the smaller of w and d. With "axis": "x" or "z" it lies down along that axis (wheels, rollers, pipes, rails).',loft:`a box whose top face is another rectangle: "tx", "tz" give its centre and "tw", "td" its size (same ranges as x, z, w, d; default: the bottom's). For sloped or tapered things: lamp shades, splayed legs, bonnets.`,sphere:"a ball filling the part's box, squashed when w, d and h differ (knobs, globe lamps, pouffes).",lathe:`a "profile" turned around the part's upright axis (vases, bowls, lamp bases, planters). The profile is 2 to ${D.maxProfilePoints} points [radius, height], each ${k(D.level)}: radius 1 touches the part's box, 0 is the axis; height 0 is the part's bottom, 1 its top. Write them from the bottom up the outside, like the right half of the silhouette; for a bowl go up the outside, over the rim and down the inside. A lathe must have a profile, and only a lathe may have one.`,rbox:`a box with rounded edges (cushions, mattresses, appliances, soft seats); optional "round" ${k(D.round)} of its shortest side (default 0.2; 0.5 is fully round). Only an rbox may have "round".`},rn={body:"the main painted or laminate body",fabric:"upholstery, rugs, curtains",cushion:"seat and back cushions, pillows",wood:"wood",white:"white ceramics, white goods, white plastic",metal:"steel, chrome, brass, handles",dark:"black parts, screens, rubber, shadows",glass:"glass (drawn see-through)",plant:"leaves",pot:"plant pots, ceramics, terracotta",accent:"a highlight colour: buttons, LEDs, a coloured detail"};function k([i,e]){return`${i} to ${e}`}var se=i=>i.map(e=>`"${e}"`).join(", ");function xt({kinds:i,rooms:e}){let t=D;return`You design one item (a piece of furniture or another thing in a home) for Home 3D, a 3D floor plan for Home Assistant. Ask me what the item is if I have not said, then answer with the item.

ANSWER
Answer with ONE JSON object and nothing else: no explanation, no comments, no trailing commas. If I ask for several items, answer with one JSON list of those objects instead ([{...}, {...}]). I paste it into Home 3D's item editor (${M.ie_paste} \u2192 ${M.ie_paste_import}), or save it as <id>.json for "${M.ie_import}"; the editor checks it against the rules below, and it must import as it is.

THE ITEM
- "id" (required): 1 to 40 characters: lower-case letters, digits, "_", "." and "-", starting with a letter or a digit. Make it from the name ("Oak wall shelf" \u2192 "oak_wall_shelf").
- "name" (required): the name by language code, at least English: {"en": "Oak wall shelf"}. 1 to ${t.maxNameLength} characters, a readable name in UK English (Wardrobe, Hob, Worktop), not a product name.
- "size" (required): the real size in metres as [width, depth, height], each ${k(t.metres)}. Width runs left to right as you face the item's front, depth from back to front.
- "parts" (required): 1 to ${t.maxParts} parts (see PARTS). 5 to 30 is usually right; keep it low-poly.
- "group": what it is, its section in the library: ${se(i)}.
- "room": up to ${t.maxRooms} rooms it is made for: ${se(e)}. Leave it out for any room.
- "tags": up to ${t.maxTags} more search words, 1 to ${t.maxTagLength} characters each.
- "mount": where it sits: ${se(t.mounts)}. "floor" is the default; "surface" stands on the item below it (a lamp on a table); "wall" hangs on a wall with its bottom "wall_y" metres above the floor (${k(t.wallY)}, default 1); "ceiling" hangs from the ceiling.
- "surface": true when its top carries other items (tables, worktops, sideboards).
- "electric": true when it can be linked to a switch and a power sensor (appliances, lamps, TVs).
- "light": for a lamp, how its light spreads: ${se(t.lights)}.
- "ikea": the IKEA product name, only if it is one ("KALLAX").
No other fields are allowed, in the item or in a part. Leave out any optional field you do not need.

PARTS
Every measure of a part is a fraction of the item's size, so the item can be resized in the plan:
- "x", "z": the part's centre across and in depth, ${k(t.centre)}. x 0.5 is the right edge, z 0.5 is the FRONT edge, z -0.5 the back (against the wall).
- "w", "d", "h": the part's width, depth and height, ${k(t.extent)} (1 is the item's whole width, depth or height).
- "y": the part's bottom, ${k(t.level)} of the item's height (0 is the floor). Keep y + h at most 1 and every part inside the item's box: x \xB1 w/2 and z \xB1 d/2 within -0.5 to 0.5.
- "shape": one of:
${t.shapes.map(n=>`  - "${n}": ${nn[n]}`).join(`
`)}
- "color": a colour role (preferred: the plan's theme colours it) or "#rrggbb" for a fixed colour. Roles:
${t.colourRoles.map(n=>`  - "${n}": ${rn[n]}`).join(`
`)}
- "top": another colour (role or "#rrggbb") for the part's top face.
- "fix": the measures the part KEEPS when the item is resized: "w", "d", "h" or several ("wd", "wdh"). Legs keep "wd", table tops, shelves and plinths keep "h", handles keep "wdh". Parts without fix (the carcass, a seat) stretch between them.
- "rot": a turn of the part around its own upright axis in degrees (${k(t.rot)}), for diagonal struts or spiral steps.
- "glow": true for the part of a lamp that lights up (shade, bulb).
- "screen": true for a TV or monitor screen; its front (+z) shows the picture.
- "edges": true, "glow" or "faint" draws outlines; rarely needed.

GOOD ITEMS
- Parts touch or overlap; nothing floats. Legs stand on y 0, a top sits on its legs.
- Use the real proportions of the thing; fractions are of the item's own size, so a 2 cm top on a 75 cm table is h 0.027.
- Put the front (doors, drawers, the screen, the seat) towards +z.

EXAMPLES (items Home 3D ships with)
${en.map(([n,r])=>`${n}:
${yt}json
${tn(r)}
${yt}`).join(`

`)}
`}var on=/^#[0-9a-f]{6}$/i,sn=[["ie_view_angle",35,25],["ie_view_front",0,0],["ie_view_side",90,0],["ie_view_top",0,80]];async function an(i){try{await navigator.clipboard.writeText(i);return}catch(e){let t=document.createElement("textarea");t.value=i,t.style.position="fixed",t.style.opacity="0",document.body.append(t),t.select();let n=document.execCommand("copy");if(t.remove(),!n)throw e}}var wt="home3d.items.light";function ln(){try{return localStorage.getItem(wt)==="1"}catch{return!1}}function cn(i,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=i,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var Pe=class extends f{static properties={options:{attribute:!1},_items:{state:!0},_draft:{state:!0},_savedId:{state:!0},_dirty:{state:!0},_picture:{state:!0},_msg:{state:!0},_busy:{state:!0},_yaw:{state:!0},_pitch:{state:!0},_addShape:{state:!0},_paste:{state:!0},_note:{state:!0},_light:{state:!0}};picture=async(e,t,n,r,s)=>(await rt()).itemPicture(e,t,n,r,s);drawn="";drawing=!1;drag=null;constructor(){super(),this._items=[],this._draft=null,this._savedId=null,this._dirty=!1,this._picture=null,this._msg=null,this._busy=!1,this._yaw=35,this._pitch=25,this._addShape="box",this._paste=null,this._note=null,this._light=ln()}setLight(e){this._light=e;try{localStorage.setItem(wt,e?"1":"0")}catch{}}connectedCallback(){super.connectedCallback(),this._items=[...this.options?.items??[]];let e=this.options?.open;e==="new"?this.startNew():e?this.pick(this._items.find(t=>t.id===e)??null):this._items.length&&this.pick(this._items[0])}get hass(){return this.options.hassSource?.()??this.options.hass}t(e,t){return this.options.t(e,t)}itemName(e){let t=(this.hass.language??"en").split("-")[0];return e.name[t]??e.name.en??Object.values(e.name)[0]??e.id}async leave(){return!this._dirty||!this._draft||await this.ask(this.t("ie_discard",{name:this.itemName(this._draft)}),this.t("ie_discard_ok"),!0)}ask(e,t,n,r=this.t("ie_cancel")){return at(e,{ok:t,cancel:r,danger:n})}pick(e){this._draft=e?structuredClone(e):null,this._savedId=e?.id??null,this._dirty=!1,this._msg=null}startNew(){this._draft=Ge(this.t("ie_new_name"),this._items.map(e=>e.id)),this._savedId=null,this._dirty=!0,this._msg=null}edit(e){this._draft=e,this._dirty=!0,this._msg=null}async close(){await this.leave()&&this.remove()}updated(){let e=JSON.stringify([this._draft,Math.round(this._yaw),Math.round(this._pitch),this._light]);!this._draft||e===this.drawn||this.drawing||(this.drawing=!0,requestAnimationFrame(()=>{this.draw(e)}))}async draw(e){try{let t=this._draft;t&&(this._picture=await this.picture(t,420,this._yaw,this._pitch,this._light)),this.drawn=e}catch(t){this._msg={ok:!1,text:String(t?.message??t)},this.drawn=e}finally{this.drawing=!1}this.requestUpdate()}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId),this.drag={x:e.clientX,y:e.clientY,yaw:this._yaw,pitch:this._pitch}}pointerMove(e){this.drag&&(this._yaw=this.drag.yaw-(e.clientX-this.drag.x)*.6,this._pitch=Math.max(-10,Math.min(80,this.drag.pitch+(e.clientY-this.drag.y)*.4)))}async save(){let e=this._draft;if(!(!e||this._busy)){this._busy=!0;try{let t=await _e(this.hass,e),n=this._items.some(r=>r.id===t.id);this._items=n?this._items.map(r=>r.id===t.id?t:r):[...this._items,t],this._draft=structuredClone(t),this._savedId=t.id,this._dirty=!1,this._msg={ok:!0,text:this.t("ie_saved")},this.options.changed()}catch(t){let n=t??{};this._msg={ok:!1,text:this.t("ie_save_failed",{why:n.message??n.code??String(t)})}}finally{this._busy=!1}}}exportItem(){if(!this._draft)return;let e=et(this._draft);cn(e.name,e.text)}async deleteItem(){let e=this._draft;if(e){if(this._savedId===null){this.pick(this._items[0]??null);return}if(await this.ask(this.t("ie_delete_confirm",{name:this.itemName(e)}),this.t("ie_delete"),!0))try{await Ve(this.hass,this._savedId),this._items=this._items.filter(t=>t.id!==this._savedId),this.pick(this._items[0]??null),this.options.changed()}catch(t){this._msg={ok:!1,text:String(t?.message??t)}}}}async showBrief(){let e=xt({kinds:this.options.kinds,rooms:this.options.rooms});if(await lt(this.t("ie_brief_hint"),e,{ok:this.t("ie_brief_copy"),cancel:this.t("ie_close")}))try{await an(e),this._note={ok:!0,text:this.t("ie_brief_copied")}}catch(t){this._note={ok:!1,text:this.t("ie_brief_failed",{why:String(t?.message??t)})}}}async importFiles(e){let t=e.target,n=[...t.files??[]];t.value="",!(!n.length||!await this.leave())&&await this.importTexts(await Promise.all(n.map(async r=>({name:r.name,text:await r.text()}))))}async importPasted(){let e=this._paste?.trim();if(!(!e||this._busy||!await this.leave())){this._busy=!0;try{await this.importTexts([{name:this.t("ie_paste"),text:e}])&&(this._paste="")}finally{this._busy=!1}}}async importTexts(e){let t=[],n=[];for(let[s,a]of e.flatMap(o=>tt(o.text,[]).map(l=>[o,l]))){if("error"in a){n.push(this.t("ie_import_failed",{file:s.name,why:this.t(`ie_err_${a.error}`)}));continue}let o=a.item,l=this._items.find(c=>c.id===o.id);l&&!await this.ask(this.t("ie_import_replace",{name:this.itemName(l)}),this.t("ie_replace"),!0,this.t("ie_keep_both"))&&(o={...o,id:B(o.id,this._items.map(c=>c.id))});try{let c=await _e(this.hass,o);this._items=this._items.some(d=>d.id===c.id)?this._items.map(d=>d.id===c.id?c:d):[...this._items,c],t.push(c)}catch(c){let d=c?.message??String(c);n.push(this.t("ie_import_failed",{file:s.name,why:d}))}}t.length&&(this.pick(t[t.length-1]),this.options.changed());let r=t.length?[this.t("ie_imported",{names:t.map(s=>this.itemName(s)).join(", ")})]:[];return this._msg={ok:n.length===0,text:[...r,...n].join(" \xB7 ")},this._note=this._draft?null:this._msg,n.length===0}render(){return p`<div class="ie-backdrop" @click=${e=>e.target===e.currentTarget&&this.close()}>
      <div class="ie" role="dialog" aria-modal="true" aria-label=${this.t("ie_title")}>
        <header class="ie-head">
          <h2>${this.t("ie_title")}</h2>
          <button class="fp3d-btn" @click=${()=>this.close()}>${this.t("ie_close")}</button>
        </header>
        <div class="ie-body">
          ${this.renderList()}
          ${this._draft?this.renderDraft(this._draft):p`<p class="ie-sub ie-empty">${this.t("ie_intro")}</p>`}
        </div>
      </div>
    </div>`}renderList(){return p`<nav class="ie-list">
      <p class="ie-sub">${this.t("ie_intro")}</p>
      <button class="fp3d-btn fp3d-primary" @click=${async()=>await this.leave()&&this.startNew()}>+ ${this.t("ie_new")}</button>
      <label class="fp3d-btn ie-file">
        ${this.t("ie_import")}
        <input type="file" accept=".json,application/json" multiple hidden @change=${e=>this.importFiles(e)} />
      </label>
      <button class="fp3d-btn ie-paste-open" aria-expanded=${this._paste!==null} @click=${()=>this._paste=this._paste===null?"":null}>${this.t("ie_paste")}</button>
      ${this._paste!==null?p`<label class="fp3d-field ie-paste"
              >${this.t("ie_paste_label")}<textarea rows="6" spellcheck="false" .value=${this._paste} @input=${e=>this._paste=e.target.value}></textarea
            ></label>
            <button class="fp3d-btn fp3d-primary ie-paste-import" ?disabled=${!this._paste.trim()||this._busy} @click=${()=>this.importPasted()}>${this.t("ie_paste_import")}</button>`:u}
      <button class="fp3d-btn ie-brief" title=${this.t("ie_brief_hint")} @click=${()=>this.showBrief()}>${this.t("ie_brief")}</button>
      ${this._note?p`<p class="ie-msg ${this._note.ok?"ok":"bad"}" role="status">${this._note.text}</p>`:u}
      ${this._items.length?u:p`<p class="ie-sub">${this.t("ie_none")}</p>`}
      <ul>
        ${this._items.map(e=>p`<li>
            <button class="ie-pick ${e.id===this._savedId?"on":""}" @click=${async()=>e.id!==this._savedId&&await this.leave()&&this.pick(e)}>
              ${this.itemName(e)}
            </button>
          </li>`)}
      </ul>
    </nav>`}renderDraft(e){return p`<section class="ie-stage">
        <div class="ie-picture ${this._light?"light":""}" @pointerdown=${t=>this.pointerDown(t)} @pointermove=${t=>this.pointerMove(t)} @pointerup=${()=>this.drag=null} @pointercancel=${()=>this.drag=null}>
          ${this._picture?p`<img src=${this._picture} alt=${this.itemName(e)} draggable="false" />`:u}
        </div>
        <div class="ie-views">
          ${sn.map(([t,n,r])=>p`<button
              class="fp3d-btn"
              @click=${()=>{this._yaw=n,this._pitch=r}}
            >
              ${this.t(t)}
            </button>`)}
          <button class="fp3d-btn ie-look" aria-pressed=${this._light} title=${this.t("ie_light_hint")} @click=${()=>this.setLight(!this._light)}>${this.t("ie_light")}</button>
        </div>
        <p class="ie-sub">${this.t("ie_turn_hint")}</p>
        <div class="ie-actions">
          <button class="fp3d-btn fp3d-primary" ?disabled=${this._busy} @click=${()=>this.save()}>${this.t("ie_save")}</button>
          <button class="fp3d-btn" @click=${()=>this.exportItem()}>${this.t("ie_export")}</button>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteItem()}>${this.t("ie_delete")}</button>
          ${this._dirty?p`<span class="ie-sub">${this.t("ie_unsaved")}</span>`:u}
        </div>
        ${this._msg?p`<p class="ie-msg ${this._msg.ok?"ok":"bad"}" role="status">${this._msg.text}</p>`:u}
      </section>
      <section class="ie-form">${this.renderDetails(e)} ${this.renderParts(e)}</section>`}renderDetails(e){let t=o=>this.edit(Qe(e,o,this._savedId===null?this._items.map(l=>l.id):void 0)),n=o=>{let l={...e,...o};for(let[c,d]of Object.entries(o))(d===void 0||d===!1)&&delete l[c];this.edit(l)},r=o=>o.target.value,s=new Set(e.room??[]),a=e.mount??"floor";return p`<h3>${this.t("ie_details")}</h3>
      <label class="fp3d-field">${this.t("ie_name")}<input type="text" maxlength="80" .value=${e.name.en??this.itemName(e)} @change=${o=>t({name:r(o)})} /></label>
      <label class="fp3d-field"
        >${this.t("ie_section")}
        <select @change=${o=>t({group:r(o)})}>
          <option value="" ?selected=${!e.group}>${this.t("ie_section_none")}</option>
          ${this.options.kinds.map(o=>p`<option value=${o} ?selected=${e.group===o}>${this.t(`lib_kind_${o}`)}</option>`)}
        </select>
      </label>
      <div class="fp3d-field">
        ${this.t("ie_rooms")}
        <div class="ie-chips">
          ${this.options.rooms.map(o=>p`<button
              class="ie-chip ${s.has(o)?"on":""}"
              aria-pressed=${s.has(o)}
              @click=${()=>t({room:s.has(o)?[...s].filter(l=>l!==o):[...s,o]})}
            >
              ${this.t(`lib_room_${o}`)}
            </button>`)}
        </div>
      </div>
      <label class="fp3d-field">${this.t("ie_tags")}<input type="text" .value=${(e.tags??[]).join(", ")} @change=${o=>t({tags:r(o)})} /></label>
      <label class="fp3d-field">${this.t("ie_ikea")}<input type="text" maxlength="40" .value=${e.ikea??""} @change=${o=>t({ikea:r(o)})} /></label>
      <div class="fp3d-field">
        ${this.t("ie_size")}
        <div class="ie-row3">
          ${[0,1,2].map(o=>p`<input
              type="number"
              min="0.01"
              max="10"
              step="0.01"
              .value=${String(e.size[o])}
              @change=${l=>{let c=[...e.size],d=Number(r(l));c[o]=Number.isFinite(d)?Math.min(10,Math.max(.01,Math.round(d*1e3)/1e3)):c[o],n({size:c})}}
            />`)}
        </div>
      </div>
      <label class="fp3d-field"
        >${this.t("ie_mount")}
        <select @change=${o=>n({mount:r(o)==="floor"?void 0:r(o)})}>
          ${be.map(o=>p`<option value=${o} ?selected=${a===o}>${this.t(`ie_mount_${o}`)}</option>`)}
        </select>
      </label>
      ${a==="wall"?p`<label class="fp3d-field"
            >${this.t("ie_wall_y")}<input
              type="number"
              min="0"
              max="3"
              step="0.05"
              .value=${String(e.wall_y??1)}
              @change=${o=>n({wall_y:Math.min(3,Math.max(0,Number(r(o))||0))})}
          /></label>`:u}
      <div class="ie-flags">
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.surface} @change=${o=>n({surface:o.target.checked})} /> ${this.t("ie_flag_surface")}</label>
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.electric} @change=${o=>n({electric:o.target.checked})} /> ${this.t("ie_flag_electric")}</label>
        <label class="fp3d-field"
          >${this.t("ie_flag_light")}
          <select @change=${o=>n({light:r(o)||void 0})}>
            <option value="" ?selected=${!e.light}>–</option>
            ${ye.map(o=>p`<option value=${o} ?selected=${e.light===o}>${o}</option>`)}
          </select>
        </label>
      </div>`}renderParts(e){return p`<h3>${this.t("ie_parts",{n:e.parts.length,max:60})}</h3>
      <p class="ie-sub">${this.t("ie_parts_hint")}</p>
      <div class="ie-add">
        <select aria-label=${this.t("ie_add")} @change=${t=>this._addShape=t.target.value}>
          ${U.map(t=>p`<option value=${t} ?selected=${this._addShape===t}>${this.t(`ie_shape_${t}`)}</option>`)}
        </select>
        <button class="fp3d-btn" ?disabled=${e.parts.length>=60} @click=${()=>this.edit(Ye(e,this._addShape))}>+ ${this.t("ie_add")}</button>
      </div>
      ${e.parts.map((t,n)=>this.renderPart(e,t,n))}`}renderPart(e,t,n){let r=o=>this.edit(Ke(e,n,o)),s=(o,l,c)=>p`<label class="ie-num"
        >${o==="round"?this.t("ie_round"):o}<input
          type="number"
          min=${l}
          max=${c}
          step="0.01"
          .value=${String(t[o]??.2)}
          @change=${d=>r({[o]:Number(d.target.value)})}
      /></label>`,a=on.test(t.color);return p`<fieldset class="ie-part">
      <legend>${this.t("ie_part",{n:n+1})}</legend>
      <div class="ie-part-top">
        <select aria-label=${this.t("ie_add")} @change=${o=>r({shape:o.target.value})}>
          ${U.map(o=>p`<option value=${o} ?selected=${t.shape===o}>${this.t(`ie_shape_${o}`)}</option>`)}
        </select>
        <select
          aria-label=${this.t("ie_colour")}
          @change=${o=>{let l=o.target.value;r({color:l==="own"?"#888888":l})}}
        >
          ${this.options.roles.map(o=>p`<option value=${o} ?selected=${t.color===o}>${this.t(`colour_role_${o}`)}</option>`)}
          <option value="own" ?selected=${a}>${this.t("ie_colour_own")}</option>
        </select>
        ${a?p`<input type="color" aria-label=${this.t("ie_colour_own")} .value=${t.color} @change=${o=>r({color:o.target.value})} />`:u}
        <button class="fp3d-btn" ?disabled=${e.parts.length>=60} @click=${()=>this.edit(Ze(e,n))}>${this.t("ie_duplicate")}</button>
        <button class="fp3d-btn fp3d-danger" title=${this.t("ie_remove_part")} aria-label=${this.t("ie_remove_part")} ?disabled=${e.parts.length<=1} @click=${()=>this.edit(Xe(e,n))}>✕</button>
      </div>
      <div class="ie-nums">${s("x",-.5,.5)} ${s("z",-.5,.5)} ${s("w",.001,1)} ${s("d",.001,1)} ${s("y",0,1)} ${s("h",.001,1)} ${t.shape==="rbox"?s("round",.01,.5):u}</div>
      ${t.shape==="lathe"?p`<label class="fp3d-field"
            >profile<input
              type="text"
              .value=${we(t.profile)}
              @change=${o=>{let l=o.target,c=nt(l.value);c?r({profile:c}):l.value=we(t.profile)}}
          /></label>`:u}
      <div class="ie-fix" title=${this.t("ie_fixed_hint")}>
        <span class="ie-sub">${this.t("ie_fixed")}</span>
        ${["w","d","h"].map(o=>p`<button class="ie-chip ${t.fix?.includes(o)?"on":""}" aria-pressed=${!!t.fix?.includes(o)} @click=${()=>this.edit(Je(e,n,o))}>${o}</button>`)}
      </div>
    </fieldset>`}static styles=[re,oe,v`
      :host {
        position: fixed;
        inset: 0;
        z-index: 20;
      }
      .ie-backdrop {
        position: absolute;
        inset: 0;
        background: rgba(2, 4, 10, 0.6);
        display: grid;
        place-items: center;
        padding: 12px;
      }
      .ie {
        width: min(1240px, 100%);
        max-height: 100%;
        overflow: auto;
        background: var(--fp3d-chrome-solid, #0d1424);
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        padding: 14px 16px;
        box-sizing: border-box;
      }
      .ie-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .ie-head h2 {
        margin: 0;
        font-size: 20px;
      }
      .ie-body {
        display: grid;
        grid-template-columns: 220px minmax(280px, 1fr) minmax(320px, 1.1fr);
        gap: 16px;
        margin-top: 12px;
      }
      @media (max-width: 960px) {
        .ie-body {
          grid-template-columns: 1fr;
        }
      }
      .ie-list {
        display: grid;
        gap: 8px;
        align-content: start;
      }
      .ie-list ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 4px;
      }
      .ie-pick {
        width: 100%;
        text-align: left;
        font: inherit;
        color: inherit;
        background: none;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 6px 8px;
        cursor: pointer;
      }
      .ie-pick.on,
      .ie-pick:hover {
        border-color: var(--fp3d-accent);
      }
      .ie-file {
        text-align: center;
        cursor: pointer;
      }
      .ie-sub {
        color: var(--fp3d-soft);
        font-size: 13px;
        margin: 0;
      }
      .ie-stage {
        display: grid;
        gap: 8px;
        align-content: start;
      }
      .ie-picture {
        aspect-ratio: 1;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: radial-gradient(circle at 50% 60%, rgba(55, 224, 255, 0.08), transparent 70%);
        display: grid;
        place-items: center;
        cursor: grab;
        touch-action: none;
        user-select: none;
      }
      .ie-picture.light {
        background: radial-gradient(circle at 50% 60%, #ffffff, #dfe5ec 75%);
        border-color: rgba(0, 0, 0, 0.12);
      }
      .ie-look {
        margin-left: auto;
      }
      .ie-look[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
      }
      .ie-picture img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        pointer-events: none;
      }
      .ie-views,
      .ie-actions,
      .ie-add,
      .ie-part-top,
      .ie-flags,
      .ie-fix,
      .ie-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
      }
      .ie-msg {
        margin: 0;
        font-size: 13px;
      }
      .ie-msg.ok {
        color: var(--fp3d-accent);
      }
      .ie-msg.bad {
        color: var(--fp3d-danger);
      }
      .ie-form {
        display: grid;
        gap: 10px;
        align-content: start;
      }
      .ie-form h3 {
        margin: 6px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .ie-row3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
      }
      .ie-chip {
        font: inherit;
        font-size: 13px;
        color: inherit;
        background: none;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
        cursor: pointer;
      }
      .ie-chip.on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
      }
      .ie-part {
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        padding: 8px 10px;
        display: grid;
        gap: 8px;
        margin: 0;
      }
      .ie-part legend {
        font-size: 12px;
        color: var(--fp3d-soft);
        padding: 0 4px;
      }
      .ie-nums {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(78px, 1fr));
        gap: 6px;
      }
      .ie-num {
        display: grid;
        gap: 2px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      input,
      select,
      textarea {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 6px 8px;
        min-width: 0;
      }
      textarea {
        font-family: ui-monospace, monospace;
        font-size: 12px;
        resize: vertical;
      }
      input[type="color"] {
        padding: 2px;
        width: 44px;
        height: 34px;
      }
      input[type="checkbox"] {
        width: auto;
      }
      .fp3d-check {
        display: flex;
        gap: 6px;
        align-items: center;
        font-size: 13px;
      }
    `]};customElements.get("fp3d-item-editor")||customElements.define("fp3d-item-editor",Pe);function Fi(i){document.querySelector("fp3d-item-editor")?.remove();let e=document.createElement("fp3d-item-editor"),t=()=>i.hassSource?.()??i.hass,n=bt(i.t,()=>t().language);e.options={...i,t:n},document.body.append(e)}export{Fi as openItemEditor};
