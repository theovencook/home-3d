var Ft=Symbol.for("home-3d.custom-elements");function Le(){let n=globalThis;return n[Ft]??={defined:new Map,watching:!1}}function He(){let n=globalThis.customElements;if(n){for(let[e,t]of Le().defined)if(t.registry!==n&&(t.registry=n,!n.get(e)))try{n.define(e,t.cls)}catch(r){console.warn(`Home 3D: could not define ${e} in the page's element registry`,r)}}}function zt(n,e){if(typeof document>"u")return;let t;try{t=document.createElement(n)}catch{return}if(Object.getPrototypeOf(t)===HTMLElement.prototype||t instanceof HTMLUnknownElement||!(t instanceof HTMLElement))return;let i=t.constructor;return i===e?void 0:i}function K(n,e){He();let t=globalThis.customElements;if(t.get(n))return!1;let r=Le(),i=zt(n,e);if(i){try{t.define(n,i),r.defined.set(n,{cls:i,registry:t})}catch(o){console.warn(`Home 3D: could not define ${n} in the page's element registry`,o)}return!1}return t.define(n,e),r.defined.set(n,{cls:e,registry:t}),r.watching||(r.watching=!0,t.whenDefined("home-assistant").then(He)),!0}var Y=globalThis,J=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),Ce=new WeakMap,H=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(J&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ce.set(t,e))}return e}toString(){return this.cssText}},T=n=>new H(typeof n=="string"?n:n+"",void 0,de),k=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((r,i,o)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new H(t,n,de)},Fe=(n,e)=>{if(J)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),i=Y.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,n.appendChild(r)}},he=J?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return T(t)})(n):n;var{is:Nt,defineProperty:Ut,getOwnPropertyDescriptor:Dt,getOwnPropertyNames:Bt,getOwnPropertySymbols:Wt,getPrototypeOf:Vt}=Object,X=globalThis,ze=X.trustedTypes,jt=ze?ze.emptyScript:"",qt=X.reactiveElementPolyfillSupport,L=(n,e)=>n,me={toAttribute(n,e){switch(e){case Boolean:n=n?jt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ue=(n,e)=>!Nt(n,e),Ne={attribute:!0,type:String,converter:me,reflect:!1,useDefault:!1,hasChanged:Ue};Symbol.metadata??=Symbol("metadata"),X.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ne){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Ut(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:o}=Dt(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){let s=i?.call(this);o?.call(this,a),this.requestUpdate(e,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ne}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;let e=Vt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){let t=this.properties,r=[...Bt(t),...Wt(t)];for(let i of r)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(he(i))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let o=(r.converter?.toAttribute!==void 0?r.converter:me).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=r.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:me;this._$Em=i;let s=a.fromAttribute(t,o.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(e,t,r,i=!1,o){if(e!==void 0){let a=this.constructor;if(i===!1&&(o=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??Ue)(o,t)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:o},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r){let{wrapped:a}=o,s=this[i];a!==!0||this._$AL.has(i)||s===void 0||this.C(i,void 0,o,s)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[L("elementProperties")]=new Map,_[L("finalized")]=new Map,qt?.({ReactiveElement:_}),(X.reactiveElementVersions??=[]).push("2.1.2");var ge=globalThis,De=n=>n,Z=ge.trustedTypes,Be=Z?Z.createPolicy("lit-html",{createHTML:n=>n}):void 0,be="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,_e="?"+y,Gt=`<${_e}>`,S=document,F=()=>S.createComment(""),z=n=>n===null||typeof n!="object"&&typeof n!="function",ye=Array.isArray,Ke=n=>ye(n)||typeof n?.[Symbol.iterator]=="function",fe=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,We=/-->/g,Ve=/>/g,P=RegExp(`>|${fe}(?:([^\\s"'>=/]+)(${fe}*=${fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),je=/'/g,qe=/"/g,Ye=/^(?:script|style|textarea|title)$/i,xe=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),p=xe(1),zn=xe(2),Nn=xe(3),m=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ge=new WeakMap,E=S.createTreeWalker(S,129);function Je(n,e){if(!ye(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Be!==void 0?Be.createHTML(e):e}var Xe=(n,e)=>{let t=n.length-1,r=[],i,o=e===2?"<svg>":e===3?"<math>":"",a=C;for(let s=0;s<t;s++){let l=n[s],c,d,h=-1,b=0;for(;b<l.length&&(a.lastIndex=b,d=a.exec(l),d!==null);)b=a.lastIndex,a===C?d[1]==="!--"?a=We:d[1]!==void 0?a=Ve:d[2]!==void 0?(Ye.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=P):d[3]!==void 0&&(a=P):a===P?d[0]===">"?(a=i??C,h=-1):d[1]===void 0?h=-2:(h=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?P:d[3]==='"'?qe:je):a===qe||a===je?a=P:a===We||a===Ve?a=C:(a=P,i=void 0);let v=a===P&&n[s+1].startsWith("/>")?" ":"";o+=a===C?l+Gt:h>=0?(r.push(c),l.slice(0,h)+be+l.slice(h)+y+v):l+y+(h===-2?s:v)}return[Je(n,o+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},N=class n{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,a=0,s=e.length-1,l=this.parts,[c,d]=Xe(e,t);if(this.el=n.createElement(c,r),E.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=E.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(be)){let b=d[a++],v=i.getAttribute(h).split(y),G=/([.?@])?(.*)/.exec(b);l.push({type:1,index:o,name:G[2],strings:v,ctor:G[1]==="."?ee:G[1]==="?"?te:G[1]==="@"?ne:R}),i.removeAttribute(h)}else h.startsWith(y)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(Ye.test(i.tagName)){let h=i.textContent.split(y),b=h.length-1;if(b>0){i.textContent=Z?Z.emptyScript:"";for(let v=0;v<b;v++)i.append(h[v],F()),E.nextNode(),l.push({type:2,index:++o});i.append(h[b],F())}}}else if(i.nodeType===8)if(i.data===_e)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)l.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(e,t){let r=S.createElement("template");return r.innerHTML=e,r}};function A(n,e,t=n,r){if(e===m)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl,o=z(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=A(n,i._$AS(n,e.values),i,r)),e}var Q=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??S).importNode(t,!0);E.currentNode=i;let o=E.nextNode(),a=0,s=0,l=r[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new I(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new re(o,this,e)),this._$AV.push(c),l=r[++s]}a!==l?.index&&(o=E.nextNode(),a++)}return E.currentNode=S,i}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},I=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),z(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==m&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ke(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=N.createElement(Je(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new Q(i,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=Ge.get(e.strings);return t===void 0&&Ge.set(e.strings,t=new N(e)),t}k(e){ye(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let o of e)i===t.length?t.push(r=new n(this.O(F()),this.O(F()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=De(e).nextSibling;De(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},R=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(e,t=this,r,i){let o=this.strings,a=!1;if(o===void 0)e=A(this,e,t,0),a=!z(e)||e!==this._$AH&&e!==m,a&&(this._$AH=e);else{let s=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=A(this,s[r+l],t,l),c===m&&(c=this._$AH[l]),a||=!z(c)||c!==this._$AH[l],c===u?e=u:e!==u&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}a&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ee=class extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}},te=class extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}},ne=class extends R{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??u)===m)return;let r=this._$AH,i=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==u&&(r===u||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},re=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}},Ze={M:be,P:y,A:_e,C:1,L:Xe,R:Q,D:Ke,V:A,I,H:R,N:te,U:ne,B:ee,F:re},Kt=ge.litHtmlPolyfillSupport;Kt?.(N,I),(ge.litHtmlVersions??=[]).push("3.3.3");var Qe=(n,e,t)=>{let r=t?.renderBefore??e,i=r._$litPart$;if(i===void 0){let o=t?.renderBefore??null;r._$litPart$=i=new I(e.insertBefore(F(),o),o,void 0,t??{})}return i._$AI(n),i};var we=globalThis,g=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return m}};g._$litElement$=!0,g.finalized=!0,we.litElementHydrateSupport?.({LitElement:g});var Yt=we.litElementPolyfillSupport;Yt?.({LitElement:g});(we.litElementVersions??=[]).push("4.2.2");async function ve(n,e){return(await n.callWS({type:"home_3d/items/save",item:e})).item}async function et(n,e){await n.callWS({type:"home_3d/items/remove",item_id:e})}var{I:er}=Ze;var ie=n=>n.strings===void 0;var Jt={},tt=(n,e=Jt)=>n._$AH=e;var f={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},U=n=>(...e)=>({_$litDirective$:n,values:e}),M=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var D=(n,e)=>{let t=n._$AN;if(t===void 0)return!1;for(let r of t)r._$AO?.(e,!1),D(r,e);return!0},oe=n=>{let e,t;do{if((e=n._$AM)===void 0)break;t=e._$AN,t.delete(n),n=e}while(t?.size===0)},nt=n=>{for(let e;e=n._$AM;n=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(n))break;t.add(n),Qt(e)}};function Xt(n){this._$AN!==void 0?(oe(this),this._$AM=n,nt(this)):this._$AM=n}function Zt(n,e=!1,t=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(r))for(let o=t;o<r.length;o++)D(r[o],!1),oe(r[o]);else r!=null&&(D(r,!1),oe(r));else D(this,n)}var Qt=n=>{n.type==f.CHILD&&(n._$AP??=Zt,n._$AQ??=Xt)},se=class extends M{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),nt(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(D(this,e),oe(this))}setValue(e){if(ie(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var en='a[href], button, input, select, textarea, summary, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';function tn(n,e,t,r){if(!n.length)return null;let i=n[0],o=n[n.length-1],a=e===null?-1:n.indexOf(e);return a<0?r?null:t?o:i:t&&a===0?o:!t&&a===n.length-1?i:null}function rt(n){return[...n.querySelectorAll(en)].filter(e=>!e.disabled&&e.tabIndex>=0&&e.getClientRects().length>0&&!e.closest("[inert]"))}function it(n){return n.getRootNode().activeElement??null}function $e(n,e){if(n.key!=="Tab"||n.altKey||n.ctrlKey||n.metaKey)return;let t=rt(e),r=it(e),i=!!r&&r!==e&&e.contains(r),o=t.length?tn(t,i?r:null,n.shiftKey,i):e;o&&(n.preventDefault(),o.focus())}function nn(n=document){let e=n.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}function rn(n){return n.hasAttribute("tabindex")?n:rt(n)[0]??null}var ke=class extends se{box=null;back=null;onKey=e=>{this.box&&$e(e,this.box)};constructor(e){if(super(e),e.type!==f.ELEMENT)throw new Error("modalFocus() goes on the dialog element")}render(){return u}update(e){let t=e.element;return t!==this.box&&(this.release(!1),this.box=t,this.back=nn(),t.addEventListener("keydown",this.onKey),requestAnimationFrame(()=>{if(this.box!==t||!t.isConnected)return;let r=it(t);(!r||r===t||!t.contains(r))&&rn(t)?.focus()})),u}release(e){this.box?.removeEventListener("keydown",this.onKey);let t=this.back;this.box=null,this.back=null,e&&t?.isConnected&&t.focus()}disconnected(){this.release(!0)}reconnected(){}},ot=U(ke);var B=["box","cyl","loft","sphere","lathe","rbox"],on=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent","paint"],Pe=["floor","surface","wall","ceiling"],Ee=["ceiling","downlight","spot","panel","pendant","floor","uplight","table","wall","strip","bollard","garden"];var W={shapes:B,colourRoles:on,mounts:Pe,lights:Ee,maxParts:60,maxProfilePoints:12,maxNameLength:80,maxRooms:12,maxTags:12,maxTagLength:30,metres:[.01,10],centre:[-.5,.5],extent:[.001,1],level:[0,1],round:[.01,.5],wallY:[0,3],rot:[-360,360]};var sn={type:"none",pitch:35,overhang:.4},mr={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...sn}};var an=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var ln=new Set([...an,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var un=/^[a-z0-9][a-z0-9_.-]{0,39}$/;function Se(n){return n.normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,34).replace(/_+$/,"")||"item"}function V(n,e){let t=new Set(e),r=un.test(n)?n:Se(n);if(!t.has(r))return r;for(let i=2;;i++){let o=`${r.slice(0,40-String(i).length-1)}_${i}`;if(!t.has(o))return o}}function at(n,e){return{id:V(Se(n),e),name:{en:n.trim()||"New item"},size:[.6,.6,.75],parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:.5,color:"body"}]}}var pn=[[0,0],[.7,0],[1,.4],[.5,1],[0,1]],x=(n,e,t,r)=>Number.isFinite(n)?Math.min(t,Math.max(e,n)):r,w=n=>Math.round(n*1e3)/1e3;function lt(n){let e={...n,x:w(x(n.x,-.5,.5,0)),z:w(x(n.z,-.5,.5,0)),w:w(x(n.w,.001,1,1)),d:w(x(n.d,.001,1,1)),y:w(x(n.y,0,1,0)),h:w(x(n.h,.001,1,1))};if(e.shape==="lathe"?e.profile=e.profile?.length?e.profile:pn.map(t=>[...t]):delete e.profile,e.shape==="rbox"?e.round=w(x(e.round??.2,.01,.5,.2)):delete e.round,e.shape!=="loft")for(let t of["tx","tz","tw","td"])delete e[t];return e.shape!=="cyl"&&delete e.axis,e}function j(n,e){return{...n,parts:e}}function ct(n,e){if(n.parts.length>=60)return n;let t=Math.min(.75,Math.max(0,...n.parts.map(o=>o.y+o.h))),r=Math.max(.25,Math.min(.5,1-t)),i=lt({shape:e,x:0,z:0,w:.5,d:.5,y:t,h:r,color:e==="lathe"||e==="sphere"?"accent":"body"});return j(n,[...n.parts,i])}function ut(n,e,t){return j(n,n.parts.map((r,i)=>i===e?lt({...r,...t}):r))}function pt(n,e,t){return j(n,n.parts.map((r,i)=>{if(i!==e)return r;let o=new Set(r.fix??"");o.has(t)?o.delete(t):o.add(t);let a=["w","d","h"].filter(c=>o.has(c)).join(""),{fix:s,...l}=r;return a?{...l,fix:a}:l}))}function dt(n,e){return n.parts.length<=1?n:j(n,n.parts.filter((t,r)=>r!==e))}function ht(n,e){if(n.parts.length>=60||!n.parts[e])return n;let t=structuredClone(n.parts[e]);return j(n,[...n.parts.slice(0,e+1),t,...n.parts.slice(e+1)])}function mt(n,e,t){let r={...n},i=e.name?.trim().slice(0,80);if(i&&(r.name={...n.name,en:i},t&&(r.id=V(Se(i),t))),e.group!==void 0&&(e.group?r.group=e.group:delete r.group),e.room!==void 0&&(e.room.length?r.room=[...new Set(e.room)].slice(0,12):delete r.room),e.tags!==void 0){let o=[...new Set(e.tags.split(",").map(a=>a.trim().slice(0,30)).filter(Boolean))].slice(0,12);o.length?r.tags=o:delete r.tags}if(e.ikea!==void 0){let o=e.ikea.trim().slice(0,40);o?r.ikea=o:delete r.ikea}return r}var dn={electric:!1,mount:"floor",surface:!1,vehicle:!1,hole:!1},hn={edges:!1,glow:!1,screen:!1};function st(n,e){return Object.fromEntries(Object.entries(n).filter(([t,r])=>r!==void 0&&e[t]!==r))}function ft(n){let e=st(n,dn);return e.mount!=="wall"&&delete e.wall_y,e.parts=n.parts.map(t=>st(t,hn)),{name:`${n.id}.json`,text:`${JSON.stringify(e,null,2)}
`}}function mn(n){let e=["{}","[]"].map(t=>[n.indexOf(t[0]),n.lastIndexOf(t[1])]).filter(([t,r])=>t>=0&&r>t);e.sort((t,r)=>t[0]-r[0]);for(let t of[n,...e.map(([r,i])=>n.slice(r,i+1))])try{return{data:JSON.parse(t)}}catch{}return null}function gt(n,e){let t=mn(n);if(!t)return[{error:"not_json"}];let r=t.data;if(r?.format==="home3d-pack"||r?.format==="fp3dpack")return[{error:"pack_file"}];let i=Array.isArray(r)?r:Array.isArray(r?.items)&&!r.parts?r.items:[r];if(!i.length)return[{error:"not_an_item"}];let o=[...e];return i.map(a=>{let s=a;return!s||typeof s!="object"||typeof s.id!="string"||!Array.isArray(s.parts)?{error:"not_an_item"}:(o.push(V(s.id,o)),{item:{...s,id:o[o.length-1]}})})}function Ae(n){return(n??[]).map(([e,t])=>`${e} ${t}`).join(", ")}function bt(n){let e=n.split(/[,;]/).map(t=>t.trim()).filter(Boolean).map(t=>t.split(/\s+/).map(Number));return e.length<2||e.length>12||e.some(t=>t.length!==2||t.some(r=>!Number.isFinite(r)))?null:e.map(([t,r])=>[w(x(t,0,1,0)),w(x(r,0,1,0))])}var fn=new URL(import.meta.url),gn=new URL("./home-3d-3d.js?v=0f5a77f7082b",fn).href,_t;function yt(){return _t??=import(gn),_t}var ae=class{waiting=[];onChange=null;get current(){return this.waiting[0]?.req??null}ask(e){return new Promise(t=>{this.waiting.push({req:e,resolve:t}),this.waiting.length===1&&this.onChange?.()})}answer(e,t=""){let r=this.waiting.shift();r&&(r.resolve({ok:e,value:t}),this.onChange?.())}},le=globalThis;function xt(n){le.__fp3dAskFactory||(le.__fp3dAskFactory=n)}function bn(){return le.__fp3dAskHost??le.__fp3dAskFactory?.()??null}var _n={ok:!1,value:""};function wt(n){let e=bn();return e?e.ask(n):Promise.resolve(_n)}async function vt(n,e){return(await wt({text:n,...e})).ok}async function kt(n,e,t){return(await wt({text:n,detail:e,...t})).ok}var $t=U(class extends M{constructor(n){if(super(n),n.type!==f.PROPERTY&&n.type!==f.ATTRIBUTE&&n.type!==f.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ie(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[e]){if(e===m||e===u)return e;let t=n.element,r=n.name;if(n.type===f.PROPERTY){if(e===t[r])return m}else if(n.type===f.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(r))return m}else if(n.type===f.ATTRIBUTE&&t.getAttribute(r)===e+"")return m;return tt(n),e}});var Re={bg:"#070b14",bg2:"#0d1424",chrome:"rgba(14, 21, 38, 0.86)",chromeSolid:"#0f1729",line:"rgba(120, 170, 255, 0.16)",text:"#e6eefc",muted:"#8a9bb8",accent:"#37e0ff",accentText:"#041018",soft:"#5b7cff",warm:"#ffb547",danger:"#ff6b8b",shadow:"0 8px 30px rgba(0, 0, 0, 0.5)",colorScheme:"dark"},Pt={bg:"#eef2f8",bg2:"#e3e9f2",chrome:"rgba(255, 255, 255, 0.88)",chromeSolid:"#ffffff",line:"rgba(30, 60, 110, 0.18)",text:"#132036",muted:"#4a5a74",accent:"#0b7a99",accentText:"#ffffff",soft:"#3d5bd9",warm:"#a35f00",danger:"#c4224a",shadow:"0 6px 22px rgba(20, 40, 80, 0.16)",colorScheme:"light"},Et={bg:"#000000",bg2:"#050a14",chrome:"rgba(0, 0, 0, 0.94)",chromeSolid:"#000000",line:"rgba(255, 255, 255, 0.7)",text:"#ffffff",muted:"#dbe4f5",accent:"#ffe14d",accentText:"#000000",soft:"#9db4ff",warm:"#ffc247",danger:"#ff8fa8",shadow:"0 0 0 1px rgba(255, 255, 255, 0.5)",colorScheme:"dark"};function Te(n){let e=t=>t.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`);return Object.entries(n).map(([t,r])=>`--fp3d-s-${e(t)}: ${r};`).join(`
`)}var St=n=>n.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),yn=Object.keys(Re).filter(n=>n!=="colorScheme").map(n=>`--fp3d-${St(n)}: var(--fp3d-s-${St(n)}, ${Re[n]});`).join(`
`),ce=k`
  :host {
    ${T(yn)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${T(Te(Pt))}
  }
  :host([contrast]) {
    ${T(Te(Et))}
  }
`,ue=k`
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
`;var At="fp3d-ask-dialog";function xn(){let n=document.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;return n}function wn(){let n=document.fullscreenElement;for(;n?.shadowRoot?.fullscreenElement;)n=n.shadowRoot.fullscreenElement;return n??document.body}var Ie=class extends g{queue=new ae;typed="";shown=null;returnFocus=null;constructor(){super(),this.queue.onChange=()=>this.requestUpdate()}ask(e){return this.queue.ask(e)}answer(e){let t=this.queue.current;t&&this.queue.answer(e||t.cancel===void 0,t.input!==void 0?this.typed:"")}key(e){e.stopPropagation(),e.key==="Escape"?(e.preventDefault(),this.answer(!1)):e.key==="Enter"&&e.target.tagName==="INPUT"?(e.preventDefault(),this.answer(!0)):$e(e,e.currentTarget)}willUpdate(){let e=this.queue.current;e!==this.shown&&(e&&!this.shown&&(this.returnFocus=xn()),this.typed=e?.input??"",this.toggleAttribute("open",!!e))}updated(){let e=this.queue.current;if(e===this.shown)return;if(this.shown=e,!e){this.returnFocus?.focus?.(),this.returnFocus=null;return}let t=this.renderRoot.querySelector("input");t?(t.focus(),t.select()):this.renderRoot.querySelector(e.danger&&e.cancel!==void 0?".ask-cancel":".ask-ok")?.focus()}render(){let e=this.queue.current;return e?p`<div class="backdrop" @click=${()=>this.answer(!1)}></div>
      <div class="box ${e.detail!==void 0?"wide":""}" role=${e.cancel===void 0?"dialog":"alertdialog"} aria-modal="true" aria-describedby="ask-text" @keydown=${t=>this.key(t)}>
        <p id="ask-text" class="text">${e.text}</p>
        ${e.detail!==void 0?p`<textarea class="detail" readonly rows="14" spellcheck="false" aria-labelledby="ask-text" .value=${e.detail}></textarea>`:u}
        ${e.input!==void 0?p`<label class="fp3d-field"><input type="text" aria-labelledby="ask-text" .value=${$t(this.typed)} @input=${t=>this.typed=t.target.value} /></label>`:u}
        <div class="buttons">
          ${e.cancel!==void 0?p`<button class="fp3d-btn ask-cancel" @click=${()=>this.answer(!1)}>${e.cancel}</button>`:u}
          <button class="fp3d-btn ask-ok ${e.danger?"ask-danger":"fp3d-primary"}" @click=${()=>this.answer(!0)}>${e.ok}</button>
        </div>
      </div>`:u}static styles=[ce,ue,k`
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
    `]};K(At,Ie);var q=null;xt(()=>typeof document>"u"?null:{ask(n){q??=document.createElement(At);let e=wn();return q.parentNode!==e&&!q.queue?.current&&e.appendChild(q),q.ask(n)}});var Rt={id:"round_side_table_40",name:{en:"Round side table 40"},size:[.4,.4,.52],group:"table",room:["living","bedroom","conservatory"],tags:["side table","lamp table","end table","occasional table","round","tripod"],family:"round_side_table",variant:{en:"\xD840"},surface:!0,parts:[{shape:"cyl",x:0,z:0,w:1,d:1,y:.9519,h:.0481,color:"wood",fix:"h"},{shape:"cyl",x:0,z:0,w:.8,d:.8,y:.32,h:.0385,color:"wood",fix:"h"},{shape:"loft",x:0,z:-.425,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:0,tz:-.3,tw:.075,td:.075,fix:"wd"},{shape:"loft",x:.3681,z:.2125,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:.2598,tz:.15,tw:.075,td:.075,fix:"wd"},{shape:"loft",x:-.3681,z:.2125,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:-.2598,tz:.15,tw:.075,td:.075,fix:"wd"}]};var Tt={id:"vase",name:{en:"Vase"},size:[.2,.2,.42],group:"vase",tags:["vase","ceramic","flower vase","ornament","tall","floor vase"],family:"vase",variant:{en:"Tall"},mount:"surface",parts:[{shape:"lathe",x:0,z:0,w:1,d:1,y:0,h:1,color:"pot",profile:[[0,0],[.55,0],[.9,.18],[1,.4],[.8,.68],[.42,.85],[.4,.95],[.5,1],[0,1]]}]};var It=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:ei,pending:ti}=It;function Mt(){return It.en??{}}var Ot=()=>Mt();var Me=Ot(),$n=[["A round side table (cylinders for the top and shelf, splayed lofts for the legs, fixed measures)",Rt],["A vase (one lathe)",Tt]],Ht="```";function Pn(n){let{family:e,variant:t,parts:r,...i}=n,o=JSON.stringify(i).slice(0,-1),a=r.map(s=>`  ${JSON.stringify(s)}`).join(`,
`);return`${o},"parts":[
${a}
]}`}var En={box:"a box filling the part's box.",cyl:'a cylinder, upright; its diameter is the smaller of w and d. With "axis": "x" or "z" it lies down along that axis (wheels, rollers, pipes, rails).',loft:`a box whose top face is another rectangle: "tx", "tz" give its centre and "tw", "td" its size (same ranges as x, z, w, d; default: the bottom's). For sloped or tapered things: lamp shades, splayed legs, bonnets.`,sphere:"a ball filling the part's box, squashed when w, d and h differ (knobs, globe lamps, pouffes).",lathe:`a "profile" turned around the part's upright axis (vases, bowls, lamp bases, planters). The profile is 2 to ${W.maxProfilePoints} points [radius, height], each ${$(W.level)}: radius 1 touches the part's box, 0 is the axis; height 0 is the part's bottom, 1 its top. Write them from the bottom up the outside, like the right half of the silhouette; for a bowl go up the outside, over the rim and down the inside. A lathe must have a profile, and only a lathe may have one.`,rbox:`a box with rounded edges (cushions, mattresses, appliances, soft seats); optional "round" ${$(W.round)} of its shortest side (default 0.2; 0.5 is fully round). Only an rbox may have "round".`},Sn={body:"the main painted or laminate body",fabric:"upholstery, rugs, curtains",cushion:"seat and back cushions, pillows",wood:"wood",white:"white ceramics, white goods, white plastic",metal:"steel, chrome, brass, handles",dark:"black parts, screens, rubber, shadows",glass:"glass (drawn see-through)",plant:"leaves",pot:"plant pots, ceramics, terracotta",accent:"a highlight colour: buttons, LEDs, a coloured detail",paint:"the paint of a vehicle body, which the owner can change to any car colour"};function $([n,e]){return`${n} to ${e}`}var pe=n=>n.map(e=>`"${e}"`).join(", ");function Lt({kinds:n,rooms:e}){let t=W;return`You design one item (a piece of furniture or another thing in a home) for Home 3D, a 3D floor plan for Home Assistant. Ask me what the item is if I have not said, then answer with the item.

ANSWER
Answer with ONE JSON object and nothing else: no explanation, no comments, no trailing commas. If I ask for several items, answer with one JSON list of those objects instead ([{...}, {...}]). I paste it into Home 3D's item editor (${Me.ie_paste} \u2192 ${Me.ie_paste_import}), or save it as <id>.json for "${Me.ie_import}"; the editor checks it against the rules below, and it must import as it is.

THE ITEM
- "id" (required): 1 to 40 characters: lower-case letters, digits, "_", "." and "-", starting with a letter or a digit. Make it from the name ("Oak wall shelf" \u2192 "oak_wall_shelf").
- "name" (required): the name by language code, at least English: {"en": "Oak wall shelf"}. 1 to ${t.maxNameLength} characters, a readable name in UK English (Wardrobe, Hob, Worktop), not a product name.
- "size" (required): the real size in metres as [width, depth, height], each ${$(t.metres)}. Width runs left to right as you face the item's front, depth from back to front.
- "parts" (required): 1 to ${t.maxParts} parts (see PARTS). 5 to 30 is usually right; keep it low-poly.
- "group": what it is, its section in the library: ${pe(n)}.
- "room": up to ${t.maxRooms} rooms it is made for: ${pe(e)}. Leave it out for any room.
- "tags": up to ${t.maxTags} more search words, 1 to ${t.maxTagLength} characters each.
- "mount": where it sits: ${pe(t.mounts)}. "floor" is the default; "surface" stands on the item below it (a lamp on a table); "wall" hangs on a wall with its bottom "wall_y" metres above the floor (${$(t.wallY)}, default 1); "ceiling" hangs from the ceiling.
- "surface": true when its top carries other items (tables, worktops, sideboards).
- "electric": true when it can be linked to a switch and a power sensor (appliances, lamps, TVs).
- "light": for a lamp, how its light spreads: ${pe(t.lights)}.
- "ikea": the IKEA product name, only if it is one ("KALLAX").
No other fields are allowed, in the item or in a part. Leave out any optional field you do not need.

PARTS
Every measure of a part is a fraction of the item's size, so the item can be resized in the plan:
- "x", "z": the part's centre across and in depth, ${$(t.centre)}. x 0.5 is the right edge, z 0.5 is the FRONT edge, z -0.5 the back (against the wall).
- "w", "d", "h": the part's width, depth and height, ${$(t.extent)} (1 is the item's whole width, depth or height).
- "y": the part's bottom, ${$(t.level)} of the item's height (0 is the floor). Keep y + h at most 1 and every part inside the item's box: x \xB1 w/2 and z \xB1 d/2 within -0.5 to 0.5.
- "shape": one of:
${t.shapes.map(r=>`  - "${r}": ${En[r]}`).join(`
`)}
- "color": a colour role (preferred: the plan's theme colours it) or "#rrggbb" for a fixed colour. Roles:
${t.colourRoles.map(r=>`  - "${r}": ${Sn[r]}`).join(`
`)}
- "top": another colour (role or "#rrggbb") for the part's top face.
- "fix": the measures the part KEEPS when the item is resized: "w", "d", "h" or several ("wd", "wdh"). Legs keep "wd", table tops, shelves and plinths keep "h", handles keep "wdh". Parts without fix (the carcass, a seat) stretch between them.
- "rot": a turn of the part around its own upright axis in degrees (${$(t.rot)}), for diagonal struts or spiral steps.
- "glow": true for the part of a lamp that lights up (shade, bulb).
- "screen": true for a TV or monitor screen; its front (+z) shows the picture.
- "edges": true, "glow" or "faint" draws outlines; rarely needed.

GOOD ITEMS
- Parts touch or overlap; nothing floats. Legs stand on y 0, a top sits on its legs.
- Use the real proportions of the thing; fractions are of the item's own size, so a 2 cm top on a 75 cm table is h 0.027.
- Put the front (doors, drawers, the screen, the seat) towards +z.

EXAMPLES (items Home 3D ships with)
${$n.map(([r,i])=>`${r}:
${Ht}json
${Pn(i)}
${Ht}`).join(`

`)}
`}var An=/^#[0-9a-f]{6}$/i,Rn=[["ie_view_angle",35,25],["ie_view_front",0,0],["ie_view_side",90,0],["ie_view_top",0,80]];async function Tn(n){try{await navigator.clipboard.writeText(n);return}catch(e){let t=document.createElement("textarea");t.value=n,t.style.position="fixed",t.style.opacity="0",document.body.append(t),t.select();let r=document.execCommand("copy");if(t.remove(),!r)throw e}}var Ct="home3d.items.light";function In(){try{return localStorage.getItem(Ct)==="1"}catch{return!1}}function Mn(n,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),r=document.createElement("a");r.href=t,r.download=n,r.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var Oe=class extends g{static properties={options:{attribute:!1},_items:{state:!0},_draft:{state:!0},_savedId:{state:!0},_dirty:{state:!0},_picture:{state:!0},_msg:{state:!0},_busy:{state:!0},_yaw:{state:!0},_pitch:{state:!0},_addShape:{state:!0},_paste:{state:!0},_note:{state:!0},_light:{state:!0}};picture=async(e,t,r,i,o)=>(await yt()).itemPicture(e,t,r,i,o);drawn="";drawing=!1;drag=null;constructor(){super(),this._items=[],this._draft=null,this._savedId=null,this._dirty=!1,this._picture=null,this._msg=null,this._busy=!1,this._yaw=35,this._pitch=25,this._addShape="box",this._paste=null,this._note=null,this._light=In()}setLight(e){this._light=e;try{localStorage.setItem(Ct,e?"1":"0")}catch{}}connectedCallback(){super.connectedCallback(),this._items=[...this.options?.items??[]];let e=this.options?.open;e==="new"?this.startNew():e?this.pick(this._items.find(t=>t.id===e)??null):this._items.length&&this.pick(this._items[0])}get hass(){return this.options.hassSource?.()??this.options.hass}t(e,t){return this.options.t(e,t)}itemName(e){let t=(this.hass.language??"en").split("-")[0];return e.name[t]??e.name.en??Object.values(e.name)[0]??e.id}async leave(){return!this._dirty||!this._draft||await this.ask(this.t("ie_discard",{name:this.itemName(this._draft)}),this.t("ie_discard_ok"),!0)}ask(e,t,r,i=this.t("ie_cancel")){return vt(e,{ok:t,cancel:i,danger:r})}pick(e){this._draft=e?structuredClone(e):null,this._savedId=e?.id??null,this._dirty=!1,this._msg=null}startNew(){this._draft=at(this.t("ie_new_name"),this._items.map(e=>e.id)),this._savedId=null,this._dirty=!0,this._msg=null}edit(e){this._draft=e,this._dirty=!0,this._msg=null}async close(){await this.leave()&&this.remove()}updated(){let e=JSON.stringify([this._draft,Math.round(this._yaw),Math.round(this._pitch),this._light]);!this._draft||e===this.drawn||this.drawing||(this.drawing=!0,requestAnimationFrame(()=>{this.draw(e)}))}async draw(e){try{let t=this._draft;t&&(this._picture=await this.picture(t,420,this._yaw,this._pitch,this._light)),this.drawn=e}catch(t){this._msg={ok:!1,text:String(t?.message??t)},this.drawn=e}finally{this.drawing=!1}this.requestUpdate()}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId),this.drag={x:e.clientX,y:e.clientY,yaw:this._yaw,pitch:this._pitch}}pointerMove(e){this.drag&&(this._yaw=this.drag.yaw-(e.clientX-this.drag.x)*.6,this._pitch=Math.max(-10,Math.min(80,this.drag.pitch+(e.clientY-this.drag.y)*.4)))}async save(){let e=this._draft;if(!(!e||this._busy)){this._busy=!0;try{let t=await ve(this.hass,e),r=this._items.some(i=>i.id===t.id);this._items=r?this._items.map(i=>i.id===t.id?t:i):[...this._items,t],this._draft=structuredClone(t),this._savedId=t.id,this._dirty=!1,this._msg={ok:!0,text:this.t("ie_saved")},this.options.changed()}catch(t){let r=t??{};this._msg={ok:!1,text:this.t("ie_save_failed",{why:r.message??r.code??String(t)})}}finally{this._busy=!1}}}exportItem(){if(!this._draft)return;let e=ft(this._draft);Mn(e.name,e.text)}async deleteItem(){let e=this._draft;if(e){if(this._savedId===null){this.pick(this._items[0]??null);return}if(await this.ask(this.t("ie_delete_confirm",{name:this.itemName(e)}),this.t("ie_delete"),!0))try{await et(this.hass,this._savedId),this._items=this._items.filter(t=>t.id!==this._savedId),this.pick(this._items[0]??null),this.options.changed()}catch(t){this._msg={ok:!1,text:String(t?.message??t)}}}}async showBrief(){let e=Lt({kinds:this.options.kinds,rooms:this.options.rooms});if(await kt(this.t("ie_brief_hint"),e,{ok:this.t("ie_brief_copy"),cancel:this.t("ie_close")}))try{await Tn(e),this._note={ok:!0,text:this.t("ie_brief_copied")}}catch(t){this._note={ok:!1,text:this.t("ie_brief_failed",{why:String(t?.message??t)})}}}async importFiles(e){let t=e.target,r=[...t.files??[]];t.value="",!(!r.length||!await this.leave())&&await this.importTexts(await Promise.all(r.map(async i=>({name:i.name,text:await i.text()}))))}async importPasted(){let e=this._paste?.trim();if(!(!e||this._busy||!await this.leave())){this._busy=!0;try{await this.importTexts([{name:this.t("ie_paste"),text:e}])&&(this._paste="")}finally{this._busy=!1}}}async importTexts(e){let t=[],r=[];for(let[o,a]of e.flatMap(s=>gt(s.text,[]).map(l=>[s,l]))){if("error"in a){r.push(this.t("ie_import_failed",{file:o.name,why:this.t(`ie_err_${a.error}`)}));continue}let s=a.item,l=this._items.find(c=>c.id===s.id);l&&!await this.ask(this.t("ie_import_replace",{name:this.itemName(l)}),this.t("ie_replace"),!0,this.t("ie_keep_both"))&&(s={...s,id:V(s.id,this._items.map(c=>c.id))});try{let c=await ve(this.hass,s);this._items=this._items.some(d=>d.id===c.id)?this._items.map(d=>d.id===c.id?c:d):[...this._items,c],t.push(c)}catch(c){let d=c?.message??String(c);r.push(this.t("ie_import_failed",{file:o.name,why:d}))}}t.length&&(this.pick(t[t.length-1]),this.options.changed());let i=t.length?[this.t("ie_imported",{names:t.map(o=>this.itemName(o)).join(", ")})]:[];return this._msg={ok:r.length===0,text:[...i,...r].join(" \xB7 ")},this._note=this._draft?null:this._msg,r.length===0}render(){return p`<div class="ie-backdrop" @click=${e=>e.target===e.currentTarget&&this.close()}>
      <div class="ie" role="dialog" aria-modal="true" aria-label=${this.t("ie_title")} ${ot()}>
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
          ${Rn.map(([t,r,i])=>p`<button
              class="fp3d-btn"
              @click=${()=>{this._yaw=r,this._pitch=i}}
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
      <section class="ie-form">${this.renderDetails(e)} ${this.renderParts(e)}</section>`}renderDetails(e){let t=s=>this.edit(mt(e,s,this._savedId===null?this._items.map(l=>l.id):void 0)),r=s=>{let l={...e,...s};for(let[c,d]of Object.entries(s))(d===void 0||d===!1)&&delete l[c];this.edit(l)},i=s=>s.target.value,o=new Set(e.room??[]),a=e.mount??"floor";return p`<h3>${this.t("ie_details")}</h3>
      <label class="fp3d-field">${this.t("ie_name")}<input type="text" maxlength="80" .value=${e.name.en??this.itemName(e)} @change=${s=>t({name:i(s)})} /></label>
      <label class="fp3d-field"
        >${this.t("ie_section")}
        <select @change=${s=>t({group:i(s)})}>
          <option value="" ?selected=${!e.group}>${this.t("ie_section_none")}</option>
          ${this.options.kinds.map(s=>p`<option value=${s} ?selected=${e.group===s}>${this.t(`lib_kind_${s}`)}</option>`)}
        </select>
      </label>
      <div class="fp3d-field">
        ${this.t("ie_rooms")}
        <div class="ie-chips">
          ${this.options.rooms.map(s=>p`<button
              class="ie-chip ${o.has(s)?"on":""}"
              aria-pressed=${o.has(s)}
              @click=${()=>t({room:o.has(s)?[...o].filter(l=>l!==s):[...o,s]})}
            >
              ${this.t(`lib_room_${s}`)}
            </button>`)}
        </div>
      </div>
      <label class="fp3d-field">${this.t("ie_tags")}<input type="text" .value=${(e.tags??[]).join(", ")} @change=${s=>t({tags:i(s)})} /></label>
      <label class="fp3d-field">${this.t("ie_ikea")}<input type="text" maxlength="40" .value=${e.ikea??""} @change=${s=>t({ikea:i(s)})} /></label>
      <div class="fp3d-field">
        ${this.t("ie_size")}
        <div class="ie-row3">
          ${[0,1,2].map(s=>p`<input
              type="number"
              min="0.01"
              max="10"
              step="0.01"
              .value=${String(e.size[s])}
              @change=${l=>{let c=[...e.size],d=Number(i(l));c[s]=Number.isFinite(d)?Math.min(10,Math.max(.01,Math.round(d*1e3)/1e3)):c[s],r({size:c})}}
            />`)}
        </div>
      </div>
      <label class="fp3d-field"
        >${this.t("ie_mount")}
        <select @change=${s=>r({mount:i(s)==="floor"?void 0:i(s)})}>
          ${Pe.map(s=>p`<option value=${s} ?selected=${a===s}>${this.t(`ie_mount_${s}`)}</option>`)}
        </select>
      </label>
      ${a==="wall"?p`<label class="fp3d-field"
            >${this.t("ie_wall_y")}<input
              type="number"
              min="0"
              max="3"
              step="0.05"
              .value=${String(e.wall_y??1)}
              @change=${s=>r({wall_y:Math.min(3,Math.max(0,Number(i(s))||0))})}
          /></label>`:u}
      <div class="ie-flags">
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.surface} @change=${s=>r({surface:s.target.checked})} /> ${this.t("ie_flag_surface")}</label>
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.electric} @change=${s=>r({electric:s.target.checked})} /> ${this.t("ie_flag_electric")}</label>
        <label class="fp3d-field"
          >${this.t("ie_flag_light")}
          <select @change=${s=>r({light:i(s)||void 0})}>
            <option value="" ?selected=${!e.light}>–</option>
            ${Ee.map(s=>p`<option value=${s} ?selected=${e.light===s}>${s}</option>`)}
          </select>
        </label>
      </div>`}renderParts(e){return p`<h3>${this.t("ie_parts",{n:e.parts.length,max:60})}</h3>
      <p class="ie-sub">${this.t("ie_parts_hint")}</p>
      <div class="ie-add">
        <select aria-label=${this.t("ie_add")} @change=${t=>this._addShape=t.target.value}>
          ${B.map(t=>p`<option value=${t} ?selected=${this._addShape===t}>${this.t(`ie_shape_${t}`)}</option>`)}
        </select>
        <button class="fp3d-btn" ?disabled=${e.parts.length>=60} @click=${()=>this.edit(ct(e,this._addShape))}>+ ${this.t("ie_add")}</button>
      </div>
      ${e.parts.map((t,r)=>this.renderPart(e,t,r))}`}renderPart(e,t,r){let i=s=>this.edit(ut(e,r,s)),o=(s,l,c)=>p`<label class="ie-num"
        >${s==="round"?this.t("ie_round"):s}<input
          type="number"
          min=${l}
          max=${c}
          step="0.01"
          .value=${String(t[s]??.2)}
          @change=${d=>i({[s]:Number(d.target.value)})}
      /></label>`,a=An.test(t.color);return p`<fieldset class="ie-part">
      <legend>${this.t("ie_part",{n:r+1})}</legend>
      <div class="ie-part-top">
        <select aria-label=${this.t("ie_add")} @change=${s=>i({shape:s.target.value})}>
          ${B.map(s=>p`<option value=${s} ?selected=${t.shape===s}>${this.t(`ie_shape_${s}`)}</option>`)}
        </select>
        <select
          aria-label=${this.t("ie_colour")}
          @change=${s=>{let l=s.target.value;i({color:l==="own"?"#888888":l})}}
        >
          ${this.options.roles.map(s=>p`<option value=${s} ?selected=${t.color===s}>${this.t(`colour_role_${s}`)}</option>`)}
          <option value="own" ?selected=${a}>${this.t("ie_colour_own")}</option>
        </select>
        ${a?p`<input type="color" aria-label=${this.t("ie_colour_own")} .value=${t.color} @change=${s=>i({color:s.target.value})} />`:u}
        <button class="fp3d-btn" ?disabled=${e.parts.length>=60} @click=${()=>this.edit(ht(e,r))}>${this.t("ie_duplicate")}</button>
        <button class="fp3d-btn fp3d-danger" title=${this.t("ie_remove_part")} aria-label=${this.t("ie_remove_part")} ?disabled=${e.parts.length<=1} @click=${()=>this.edit(dt(e,r))}>✕</button>
      </div>
      <div class="ie-nums">${o("x",-.5,.5)} ${o("z",-.5,.5)} ${o("w",.001,1)} ${o("d",.001,1)} ${o("y",0,1)} ${o("h",.001,1)} ${t.shape==="rbox"?o("round",.01,.5):u}</div>
      ${t.shape==="lathe"?p`<label class="fp3d-field"
            >profile<input
              type="text"
              .value=${Ae(t.profile)}
              @change=${s=>{let l=s.target,c=bt(l.value);c?i({profile:c}):l.value=Ae(t.profile)}}
          /></label>`:u}
      <div class="ie-fix" title=${this.t("ie_fixed_hint")}>
        <span class="ie-sub">${this.t("ie_fixed")}</span>
        ${["w","d","h"].map(s=>p`<button class="ie-chip ${t.fix?.includes(s)?"on":""}" aria-pressed=${!!t.fix?.includes(s)} @click=${()=>this.edit(pt(e,r,s))}>${s}</button>`)}
      </div>
    </fieldset>`}static styles=[ce,ue,k`
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
    `]};K("fp3d-item-editor",Oe);function Pi(n){document.querySelector("fp3d-item-editor")?.remove();let e=document.createElement("fp3d-item-editor");e.options=n,document.body.append(e)}export{Pi as openItemEditor};
