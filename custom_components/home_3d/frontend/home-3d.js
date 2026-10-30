Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Ha=new URL(import.meta.url),Aa=Ha.searchParams.get("v"),Ea=o=>new URL(`./fonts/${o}${Aa?`?v=${Aa}`:""}`,Ha).href,Ra="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Fa(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ea("figtree.woff2")}) format("woff2");unicode-range:${Ra}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ea("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Ra}}`,document.head.append(o)}function Ca(o,e){return e==="metric"||e==="imperial"?e:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function sh(o,e){return String(Number(o.toFixed(e)))}function za(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),r=Math.floor(n/12+1e-9),i=n-r*12,s=sh(i,e>=2?1:0);return r?i<.05?`${t}${r}'`:`${t}${r}' ${s}"`:`${t}${s}"`}function Oa(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,r=0,i=!1,s=!1,a=t;for(let l of t.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];i=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(r+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?r+=c*.0254:d==="mm"?r+=c/1e3:d==="cm"?r+=c/100:d==="m"?r+=c:r+=e==="imperial"?c*(s?.0254:.3048):c}return!i||/[^\s+]/.test(a)?null:r}var Io=globalThis,Po=Io.ShadowRoot&&(Io.ShadyCSS===void 0||Io.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,or=Symbol(),Da=new WeakMap,Cn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==or)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Po&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Da.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Da.set(t,e))}return e}toString(){return this.cssText}},Xe=o=>new Cn(typeof o=="string"?o:o+"",void 0,or),Me=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new Cn(t,o,or)},La=(o,e)=>{if(Po)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=Io.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},ir=Po?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Xe(t)})(o):o;var{is:ah,defineProperty:lh,getOwnPropertyDescriptor:ch,getOwnPropertyNames:dh,getOwnPropertySymbols:uh,getPrototypeOf:ph}=Object,Ao=globalThis,Wa=Ao.trustedTypes,hh=Wa?Wa.emptyScript:"",fh=Ao.reactiveElementPolyfillSupport,zn=(o,e)=>o,rr={toAttribute(o,e){switch(e){case Boolean:o=o?hh:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Va=(o,e)=>!ah(o,e),Na={attribute:!0,type:String,converter:rr,reflect:!1,useDefault:!1,hasChanged:Va};Symbol.metadata??=Symbol("metadata"),Ao.litPropertyMetadata??=new WeakMap;var Ze=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Na){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&lh(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ch(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let a=r?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Na}static _$Ei(){if(this.hasOwnProperty(zn("elementProperties")))return;let e=ph(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(zn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zn("properties"))){let t=this.properties,n=[...dh(t),...uh(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(ir(r))}else e!==void 0&&t.push(ir(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return La(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:rr).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=n.getPropertyOptions(r),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:rr;this._$Em=r;let a=s.fromAttribute(t,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let s=this.constructor;if(r===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Va)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,i]of n){let{wrapped:s}=i,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ze.elementStyles=[],Ze.shadowRootOptions={mode:"open"},Ze[zn("elementProperties")]=new Map,Ze[zn("finalized")]=new Map,fh?.({ReactiveElement:Ze}),(Ao.reactiveElementVersions??=[]).push("2.1.2");var ar=globalThis,Ba=o=>o,Eo=ar.trustedTypes,Ua=Eo?Eo.createPolicy("lit-html",{createHTML:o=>o}):void 0,lr="$lit$",et=`lit$${Math.random().toFixed(9).slice(2)}$`,cr="?"+et,mh=`<${cr}>`,Ht=document,Dn=()=>Ht.createComment(""),Ln=o=>o===null||typeof o!="object"&&typeof o!="function",dr=Array.isArray,Qa=o=>dr(o)||typeof o?.[Symbol.iterator]=="function",sr=`[ 	
\f\r]`,On=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qa=/-->/g,ja=/>/g,Et=RegExp(`>|${sr}(?:([^\\s"'>=/]+)(${sr}*=${sr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ka=/'/g,Ga=/"/g,Ja=/^(?:script|style|textarea|title)$/i,ur=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),g=ur(1),zt=ur(2),x_=ur(3),Ee=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Ya=new WeakMap,Rt=Ht.createTreeWalker(Ht,129);function Xa(o,e){if(!dr(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ua!==void 0?Ua.createHTML(e):e}var Za=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",s=On;for(let a=0;a<t;a++){let l=o[a],c,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===On?d[1]==="!--"?s=qa:d[1]!==void 0?s=ja:d[2]!==void 0?(Ja.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=Et):d[3]!==void 0&&(s=Et):s===Et?d[0]===">"?(s=r??On,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Et:d[3]==='"'?Ga:Ka):s===Ga||s===Ka?s=Et:s===qa||s===ja?s=On:(s=Et,r=void 0);let h=s===Et&&o[a+1].startsWith("/>")?" ":"";i+=s===On?l+mh:u>=0?(n.push(c),l.slice(0,u)+lr+l.slice(u)+et+h):l+et+(u===-2?a:h)}return[Xa(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Wn=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,d]=Za(e,t);if(this.el=o.createElement(c,n),Rt.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=Rt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(lr)){let p=d[s++],h=r.getAttribute(u).split(et),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:_[2],strings:h,ctor:_[1]==="."?Ho:_[1]==="?"?Fo:_[1]==="@"?Co:Ct}),r.removeAttribute(u)}else u.startsWith(et)&&(l.push({type:6,index:i}),r.removeAttribute(u));if(Ja.test(r.tagName)){let u=r.textContent.split(et),p=u.length-1;if(p>0){r.textContent=Eo?Eo.emptyScript:"";for(let h=0;h<p;h++)r.append(u[h],Dn()),Rt.nextNode(),l.push({type:2,index:++i});r.append(u[p],Dn())}}}else if(r.nodeType===8)if(r.data===cr)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(et,u+1))!==-1;)l.push({type:7,index:i}),u+=et.length-1}i++}}static createElement(e,t){let n=Ht.createElement("template");return n.innerHTML=e,n}};function Ft(o,e,t=o,n){if(e===Ee)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,i=Ln(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=Ft(o,r._$AS(o,e.values),r,n)),e}var Ro=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ht).importNode(t,!0);Rt.currentNode=r;let i=Rt.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new dn(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new zo(i,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=Rt.nextNode(),s++)}return Rt.currentNode=Ht,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},dn=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ft(this,e,t),Ln(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Ee&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Ln(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ht.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Wn.createElement(Xa(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let i=new Ro(r,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Ya.get(e.strings);return t===void 0&&Ya.set(e.strings,t=new Wn(e)),t}k(e){dr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(Dn()),this.O(Dn()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Ba(e).nextSibling;Ba(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,r){let i=this.strings,s=!1;if(i===void 0)e=Ft(this,e,t,0),s=!Ln(e)||e!==this._$AH&&e!==Ee,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Ft(this,a[n+l],t,l),c===Ee&&(c=this._$AH[l]),s||=!Ln(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ho=class extends Ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Fo=class extends Ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Co=class extends Ct{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ft(this,e,t,0)??y)===Ee)return;let n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},zo=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ft(this,e)}},el={M:lr,P:et,A:cr,C:1,L:Za,R:Ro,D:Qa,V:Ft,I:dn,H:Ct,N:Fo,U:Co,B:Ho,F:zo},gh=ar.litHtmlPolyfillSupport;gh?.(Wn,dn),(ar.litHtmlVersions??=[]).push("3.3.3");var tl=(o,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let i=t?.renderBefore??null;n._$litPart$=r=new dn(e.insertBefore(Dn(),i),i,void 0,t??{})}return r._$AI(o),r};var pr=globalThis,xe=class extends Ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tl(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ee}};xe._$litElement$=!0,xe.finalized=!0,pr.litElementHydrateSupport?.({LitElement:xe});var _h=pr.litElementPolyfillSupport;_h?.({LitElement:xe});(pr.litElementVersions??=[]).push("4.2.2");var Oo="(max-width: 600px)";function nl(o){return o<=600}function hr(o,e){return o==="1"||o==="0"?o==="1":e}var ol={x:0,y:.1},il={x:0,y:0};var Do=o=>o?{home_id:o}:{};async function rl(o,e){return o.callWS({type:"home_3d/building/get",...Do(e)})}async function sl(o){return o.callWS({type:"home_3d/version"})}async function Nn(o,e,t,n){return o.callWS({type:"home_3d/building/save",...Do(n),building:e,...t?{recipe_bases:t}:{}})}function al(o,e,t){return o.connection.subscribeMessage(n=>e(n.revision,n.home_id),{type:"home_3d/building/subscribe",...Do(t)})}function ll(o,e){return o.connection.subscribeMessage(e,{type:"home_3d/voice/subscribe"})}async function cl(o,e,t,n){return(await o.callWS({type:"home_3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function dl(o,e,t){return(await o.callWS({type:"home_3d/image/get",...Do(t),image_id:e})).data}function ul(o){return o.callWS({type:"home_3d/homes/list"})}function pl(o,e,t={}){return o.callWS({type:"home_3d/homes/create",name:e,...t.areaImport===!1?{area_import:!1}:{}})}function Lo(o){return o.callWS({type:"home_3d/homes/load_sample"})}function hl(o,e,t){return o.callWS({type:"home_3d/homes/rename",home_id:e,name:t})}function fl(o,e,t){return o.callWS({type:"home_3d/homes/duplicate",home_id:e,name:t})}function ml(o,e){return o.callWS({type:"home_3d/homes/delete",home_id:e})}function gl(o,e){return o.callWS({type:"home_3d/homes/set_active",home_id:e})}async function _l(o){return(await o.callWS({type:"home_3d/packs/list"})).packs}function bh(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function wr(o){let e=Ie(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(bh).length>=2}var gr=[],Ot=new Map,bl=new Map,vr=new Map,_r,wl="",yr=0;function vl(o){for(let e of o){let t=e.hash?gr.find(n=>n.id===e.id&&n.hash===e.hash):void 0;if(!(!t||t===e))for(let n of e.items){let r=br(n)?void 0:Ot.get(fr(e.id,n.id));r&&br(r)&&wh(n,r)}}gr=o,Ot=new Map(o.flatMap(e=>e.items.map(t=>[fr(e.id,t.id),t]))),bl=new Map(o.flatMap(e=>Object.entries(e.aliases??{}).map(([t,n])=>[t,fr(e.id,n)])));for(let[e,t]of bl){let n=Ot.get(t);n&&!Ot.has(e)&&Ot.set(e,n)}yr++}function br(o){return Array.isArray(o.parts)}function wh(o,e){o.parts=e.parts,e.symbol&&(o.symbol=e.symbol)}function ft(){return gr}function Wo(o){if(o===_r)return;_r=o;let e=Object.entries(o??{}),t=e.map(([n,r])=>`${n}=${r.hash}`).sort().join("|");t!==wl&&(wl=t,vr=new Map(e.map(([n,r])=>[n,r.recipe])),yr++)}function un(o){return Object.fromEntries(Object.entries(o??{}).map(([e,t])=>[e,t.hash]))}function xr(){return _r}function No(){return yr}function fr(o,e){return`pack:${o}:${e}`}function De(o){return o.startsWith("pack:")}function Vo(o){return De(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":/:roof_window[\w.-]*_blind$/.test(o)?"blind":null:null}function pn(o){return o==="robot_vacuum"||De(o)&&o.endsWith(":robot_vacuum")}function vh(o){return o.z>.05}function yl(o){let e=(o?.parts??[]).filter(t=>t.shape==="cyl"&&vh(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function Bo(o){return De(o)&&/:(heat_pump_indoor|gas_boiler|combi_boiler(?:_[a-z0-9_]+)?|buffer_tank|water_heater|hot_water_cylinder(?:_[a-z0-9_]+)?)$/.test(o)}var yh={meter:"meter",consumer_unit:"meter",energy_monitor:"meter",inverter:"inverter",home_battery:"home_battery",power_station:"home_battery",ev_charger:"wallbox",solar_panel:"solar"};function oe(o){if(o==="meter"||o==="inverter"||o==="home_battery"||o==="wallbox")return o;let e=hn(o),t=e?.family?yh[e.family]??null:null;return t==="meter"&&(e.tags??[]).some(n=>/^(gas|water|wasser)$/i.test(n))?null:t}function xl(o){return Ie(o)?.parts.find(e=>e.screen)}function kl(o){let e=Ie(o);return!!e&&!e.light&&e.parts.some(t=>t.screen)&&e.parts.some(t=>t.glow)}function Ie(o){if(!De(o))return;let e=Ot.get(o);return vr.get(o)??(e&&br(e)?e:void 0)}function hn(o){if(De(o))return vr.get(o)??Ot.get(o)}var xh=new Set(["radiator_trv","radiator_valve","thermostat"]);function fn(o){if(o==="radiator")return!0;let e=De(o)?hn(o):void 0;return e?xh.has(e.family??"")||(e.tags??[]).some(t=>/^(trv|smart trv|thermostat)$/i.test(t)):!1}function $l(o){let e=De(o)?hn(o):void 0;return e?/camera$/.test(e.family??"")||(e.tags??[]).some(t=>/^(camera|security camera|cctv|doorbell|video doorbell|doorbell camera)$/i.test(t)):!1}function Uo(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}function Sl(o,e){return o.name}function de(o,e){let t=hn(e.type);if(e.mount_y!=null)return e.mount_y;let n=Il(e,o.height);if(n!==null)return n;if(e.type==="lamp_wall")return Ml;if(qo.has(e.type))return Math.max(0,o.height-jo(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return mr(o,e)+Vn(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?mr(o,e):Tl(e)||mr(o,e)}}function mr(o,e){let t=o.rooms.filter(n=>n.points.length>=3);return!t.length||t.some(n=>q([e.x,e.z],n.points))?0:tt(o,e.x,e.z)}var Qe={field:null,size:1,right:0,up:0};var El=["rain","snow","clouds","lightning","sky"];var $h={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function $r(o){return o==="hedge"||o==="fence"||o==="pergola"}function Sr(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!$r(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function ke(o){return[...o.rooms,...Sr(o)]}function Sh(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let r=o.slope_dir??"x",i=(c,d)=>r==="x"?c:r==="-x"?-c:r==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of o.points){let u=i(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-s)/(a-s)));return n*l}function Mh(o,e,t,n){return Fl(o,e)+$h[e.type]-Th(o,e,t,n)}var Mr=-.2,kr={set:!1,level:Mr};function Rl(o){let e=o?.settings.terrain??null;kr={set:e?.level!=null,level:e?.level??Mr}}function Hl(o){return o.elevation>.3?0:kr.set?kr.level-o.elevation:Mr}function Fl(o,e){return Hl(o)+(e.offset??0)}function Th(o,e,t,n){return e.type==="pool"?0:Sh(e,t,n)}function tt(o,e,t){let n=(o.outdoor??[]).filter(i=>!$r(i.type)&&i.type!=="pool"&&q([e,t],i.points)),r=[...n].reverse().find(i=>i.cut)??n[0];return r?Mh(o,r,e,t):Hl(o)}function Cl(o,e){return Fl(o,e)+(e.above?zl(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Ih(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?zl(o):1.5}function Ph(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!$r(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>q(n,t.points)))}function Bn(o,e){return!e.above&&!Ph(o,e)?mn(o,e)-.05:Cl(o,e)-Ih(e)}function mn(o,e){return Cl(o,e)-.15}function zl(o){return o.height&&o.height>.3?o.height:1.2}var Ah={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Ol={type:"none",pitch:35,overhang:.4},Eh={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Ol}};var Dl=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Ll=.3;var Wl=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Ml=1.75;function Nl(o){if(["lamp_pendant","lamp_fan","stairwell","loft_ladder","parking"].includes(o.type)||Rh.has(o.type))return!1;let e=Ie(o.type);return!(e?.mount==="ceiling"&&e.light&&e.light!=="panel")}var qo=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function jo(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var Rh=new Set(["stairs","stairs_u"]);function Tr(o){return Wl.has(o)||!!Ie(o)?.light}var Hh=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Tl(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return o.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Al=.04,Fh=1.2;function Vn(o,e,t,n=0){let r=0;for(let i of o.furniture)!(Hh.has(i.type)||Ie(i.type)?.surface)||!q([e,t],Dt(i))||i.type==="worktop"&&n>0&&i.h-Al>=Fh&&n<=i.h-Al-.02||(r=Math.max(r,i.h));return r}var Vl=new Set(["wall_switch","wall_socket"]),Ch=4;function Un(o){let e=(o.gangs??[]).slice(0,Ch);return e.length?e:[{entity:null}]}function Ko(o){return[...new Set(Un(o).map(e=>e.entity).filter(e=>!!e&&e!=="none"))]}var Bl=new Set(["wifi_ap","water_heater"]);function Il(o,e){return o.type==="wifi_ap"?o.variant==="wall"?2.1:Math.max(0,e-o.h):o.type==="water_heater"?o.variant==="wall"?1.1:0:null}var kh=new Set([...Wl,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Pl={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],loft_ladder:[.6,1.1,2.5],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var zh=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Oh=["standard","bars","glass_wall"],Dh=["sectional","up_and_over"];function Lh(o,e){return o.type==="garage"?o.style&&Dh.includes(o.style)?o.style:"sectional":o.type==="door"?o.style&&zh.includes(o.style)?o.style:e?"front":"interior":o.style&&Oh.includes(o.style)?o.style:"standard"}function Wh(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",i=o-.04,s=Math.min(1.05,Math.max(.6,i-(r?.6:.3))),a=(i-s)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let d=i-.5;if(l+c>d){let p=Math.max(0,d)/(l+c);l*=p,c*=p}return r?{panels:[[.02,.02+l],[o-.02-c,o-.02]],x0:.02+l,x1:o-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function Ul(o,e){let t=o.width,n=Wh(t,Lh(o,!1),e,o),r=n?.x0??0,i=n?.x1??t;return o.leaves!==2?(r+i)/2:e?r+(i-r)/4:i-(i-r)/4}function Ir(o){o.energy={...Ah,...o.energy??{}},o.presence=o.presence??[],o.settings={...Eh,...o.settings,roof:{...Ol,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let r of t){let i=n[r.mount??"ceiling"],[s,a,l]=Pl[i];e.furniture.push({id:`lamp_${r.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:r.x,z:r.z,rotation:0,w:s,d:a,h:l,variant:null,entity:r.entity_id,power:null})}e.placements=e.placements.filter(r=>!r.entity_id.startsWith("light.")||r.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function ql(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function qe(o){let e=0;for(let t=0;t<o.length;t++){let[n,r]=o[t],[i,s]=o[(t+1)%o.length];e+=n*s-i*r}return e/2}function Fe(o){let e=qe(o);if(Math.abs(e)<1e-9){let r=o.length||1;return[o.reduce((i,s)=>i+s[0],0)/r,o.reduce((i,s)=>i+s[1],0)/r]}let t=0,n=0;for(let r=0;r<o.length;r++){let[i,s]=o[r],[a,l]=o[(r+1)%o.length],c=i*l-a*s;t+=(i+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Dt(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=o.w/2,i=o.d/2;return[[-r,-i],[r,-i],[r,i],[-r,i]].map(([s,a])=>[o.x+s*t-a*n,o.z+s*n+a*t])}function q(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,s]=e[n],[a,l]=e[r];s>o[1]!=l>o[1]&&o[0]<(a-i)*(o[1]-s)/(l-s)+i&&(t=!t)}return t}var jl={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Nh=700,Ar="home3d.unsaved",Vh="0.1.0",Bh="003a67ff650b",Yl="floorplan-3d.unsaved";function Uh(){try{let o=localStorage.getItem(Ar)??localStorage.getItem(Yl);return o?JSON.parse(o):null}catch{return null}}function Pr(o){try{o?localStorage.setItem(Ar,JSON.stringify(o)):(localStorage.removeItem(Ar),localStorage.removeItem(Yl))}catch{}}var gn=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;backendBuild=null;frontend={version:Vh,build:Bh};draft=null;packs=[];canEdit=!1;packsLoaded=!1;home=void 0;homeId=null;homeName=null;libraryLoading=null;host;hass=null;revision=-1;recipeBases={};ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;watched=null;constructor(e){this.host=e,e.addController(this)}setHome(e){e!==this.home&&(this.home=e,!(!this.hass||!this.connected)&&this.flush().then(async()=>{await this.unsubscribe?.(),this.unsubscribe=null,await this.start()}))}async reopen(){await this.flush(),await this.reload()}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null,this.watched?.removeEventListener?.("ready",this.onReconnect),this.watched=null}onReconnect=()=>{this.checkVersion()};async checkVersion(){if(this.hass)try{let e=await sl(this.hass);this.backendVersion=e.version??null,this.backendBuild=e.build??null,this.host.requestUpdate()}catch{}}edit(e){this.building=e,Wo(e.recipes),this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Nh),this.host.requestUpdate()}get frontendVersion(){return this.frontend.version}get versionGap(){let e=this.frontend;return!this.backendVersion||e.version==="dev"?null:this.backendVersion===e.version?this.backendBuild&&e.build!=="dev"&&this.backendBuild!==e.build?"frontend":null:qh(this.backendVersion,e.version)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&this.frontend.version!=="dev"&&this.backendVersion!==this.frontend.version}get updateNotice(){return this.versionGap!=="frontend"?null:this.saveState==="error"?"unsaved":this.pending||this.saving?"saving":"ready"}async reloadWhenSaved(e=()=>location.reload()){return await this.flush(),this.pending||this.saveState==="error"?!1:(e(),!0)}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Ir(e.building))}discardDraft(){this.draft=null,Pr(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!(!e||!this.hass)){this.pending=null;for(let t of e.floors)for(let n of t.furniture)n.mount_y!=null&&n.mount_y>10&&(n.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=this.recipeBases,{revision:n,recipes:r}=await Nn(this.hass,e,t,this.homeId??this.home);r&&(Kl(e,r,t),this.building&&this.building!==e&&Kl(this.building,r,t),this.building&&Wo(this.building.recipes),this.recipeBases=un(r)),this.ownRevisions.add(n),this.revision=n,this.saveState=this.pending?"saving":"saved",this.saveError=null,Pr(null)}catch(t){this.saveState="error",this.saveError=Gl(t),Pr({building:e,savedAt:Date.now(),...this.homeId?{home:this.homeId}:{}})}this.host.requestUpdate()})(),await this.saving,this.saving=null}}async start(){if(this.hass&&(await this.reload(),!this.watched&&this.connected&&this.hass.connection.addEventListener&&(this.watched=this.hass.connection,this.watched.addEventListener("ready",this.onReconnect)),!this.unsubscribe&&this.connected))try{this.unsubscribe=await al(this.hass,(e,t)=>{if(t&&this.homeId&&t!==this.homeId){this.flush().then(()=>this.reload());return}this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()},this.home)}catch{}}loadLibrary(){return this.packsLoaded?Promise.resolve():(this.libraryLoading??=this.reloadPacks().finally(()=>this.libraryLoading=null),this.libraryLoading)}async reloadPacks(){if(this.hass){try{this.packs=await _l(this.hass)}catch{this.packs=[]}vl(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await rl(this.hass,this.home);if((e.home_id??null)!==this.homeId&&this.ownRevisions.clear(),this.homeId=e.home_id??null,this.homeName=e.home_name??null,this.building=Ir(e.building),Wo(this.building.recipes),this.recipeBases=un(this.building.recipes),this.backendVersion=e.version??null,this.backendBuild=e.build??null,this.canEdit=e.can_edit??!!this.hass.user?.is_admin,this.draft===null&&!this.pending){let t=Uh();this.draft=t&&(!t.home||t.home===this.homeId)?t:null}this.revision=e.revision,this.error=null}catch(e){this.error=Gl(e)}this.host.requestUpdate()}}};function Kl(o,e,t){let n=o.recipes??{},r=Object.entries(n).filter(([i,s])=>!(i in e)||s.hash!==t[i]);o.recipes={...e,...Object.fromEntries(r)}}function Gl(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function qh(o,e){let t=o.split(/[.-]/).map(r=>Number.parseInt(r,10)||0),n=e.split(/[.-]/).map(r=>Number.parseInt(r,10)||0);for(let r=0;r<Math.max(t.length,n.length);r++){let i=(t[r]??0)-(n[r]??0);if(i)return i}return 0}function Ne(o,e){let t;return()=>(t||(t=import(new URL(`./${o}.js?v=${e()}`,new URL(import.meta.url)).href).catch(r=>{throw t=void 0,r})),t)}var Ql=Ne("home-3d-editor",()=>"2fe3aef6c108");var jh={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Kh=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),Gh=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),Yh=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Go=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],oc=new Set(["light","switch","fan"]);function ic(o){return o.slice(0,o.indexOf("."))}function W(o){return jh[ic(o)]??null}function Jl(o){return o!==null&&o!=="scene"&&o!=="script"}var Qh=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function Yo(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!Qh.has(String(o.attributes.device_class??""))}function nt(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&o.devices?.[t.device_id]?.area_id||null:null}function Qo(o,e){let t=o.entities?.[e];return!!t&&(!!t.hidden||!!t.hidden_by||!!t.disabled_by)}function Xl(o,e){let t=W(e);if(!t)return!1;let n=o.entities?.[e];if(Qo(o,e)||n?.entity_category)return!1;let r=o.states[e];if(!r)return!1;let i=r.attributes.device_class,s=String(r.attributes.unit_of_measurement??"");return t==="sensor"?i?Kh.has(i)||i==="voltage"&&s==="mV":Gh.has(s):t==="binary"?i?Yh.has(i):!!n?.area_id:!0}var Jh=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Zl(o,e){if(W(e)!=="sensor")return!1;let t=o.entities?.[e];if(Qo(o,e)||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||Jh.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Y(n)}var Er=null;function jn(o){let e=Er;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,r=[],i=new Map,s=new Map;for(let l of Object.keys(o.entities??{})){let c=o.entities[l],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&Nr(o,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!Qo(o,l)&&!c.entity_category&&(i.get(d)??i.set(d,new Set).get(d)).add(ic(l));let u=Xl(o,l),p=nt(o,l);if(!p){(u||Zl(o,l))&&Jl(W(l))&&r.push(l);continue}u&&(t.get(p)??t.set(p,[]).get(p)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(Xl(o,l)||Zl(o,l))&&Jl(W(l))&&r.push(l);r.sort((l,c)=>Go.indexOf(W(l))-Go.indexOf(W(c))||j(o,l).localeCompare(j(o,c)));for(let[l,c]of t){let d=o.areas?.[l]?.name;c.sort((u,p)=>{let h=Go.indexOf(W(u)),_=Go.indexOf(W(p));return h-_||j(o,u,d).localeCompare(j(o,p,d))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return Er={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:r,domains:i,hubs:a},Er}function _e(o,e){return!e||!o.entities?[]:jn(o).areas.get(e)??[]}var Xh={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Zh=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),ef=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function tf(o,e){let t=o.entities?.[e]?.device_id,n=t&&!jn(o).hubs.has(t)?jn(o).domains.get(t):void 0;return n&&[...n].some(r=>Zh.has(r))?!1:!ef.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function Hr(o,e,t,n){let r=t.climate?.[n];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let i=Xh[n],s=(h,_)=>q([h,_],t.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),c=new Set(a.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id)),d=[...new Set([..._e(o,t.area_id).filter(h=>!c.has(h)),...l])],u=d.filter(h=>h.startsWith("sensor.")&&o.states[h]?.attributes.device_class===i&&(t.outdoor||tf(o,h)));if(u.length)return u;let p=rc[n];return p?d.filter(h=>h.startsWith("climate.")&&typeof o.states[h]?.attributes[p]=="number"):[]}var rc={temperature:"current_temperature",humidity:"current_humidity"};function nf(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let i=rc[t],s=i?Number(n?.attributes[i]):Number.NaN;return t==="temperature"?Lt(s,Re(o)):s}let r=Number(n?.state);return t==="temperature"?Lt(r,n?.attributes.unit_of_measurement):r}function Re(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Lt(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function ot(o,e){return Re(o)==="\xB0F"?e*9/5+32:e}function mt(o,e,t,n){let r=Hr(o,e,t,n).map(i=>nf(o,i,n)).filter(i=>Number.isFinite(i));return r.length?r.reduce((i,s)=>i+s,0)/r.length:null}function sc(o,e){return!!o.entities&&jn(o).hubs.has(e)}function Fr(o,e){return o.entities?jn(o).power.get(e)??[]:[]}function j(o,e,t){let r=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let i=r.slice(t.length+1);return i.charAt(0).toUpperCase()+i.slice(1)}return r}function Cr(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||Y(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let r=Number(n);return Number.isFinite(r)?r>0:null}function Y(o){return!o||o.state==="unavailable"||o.state==="unknown"}var of=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function zr(o){return!!o&&of.has(o.toLowerCase())}function Kn(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Or(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function Ce(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Or(o.state)||o.state==="returning";switch(W(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return rf(o);case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return Kn(o)&&zr(String(o.state));default:return!1}}function rf(o){let e=o.attributes;return e.hvac_action!==void 0&&e.hvac_action!==null?e.hvac_action==="heating"||e.hvac_action==="cooling":typeof e.temperature!="number"||typeof e.current_temperature!="number"?!1:o.state==="heat"?e.current_temperature<e.temperature:o.state==="cool"?e.current_temperature>e.temperature:!1}function ac(o,e){if(!o||Y(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function lc(o){if(!o||Y(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],r=["heating","cooling","drying","fan"].includes(t);return{color:n,level:r||!t?1:.45}}function cc(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),d=l-c;return l<=0||d/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/d+6)%6:l===a[1]?(a[2]-a[0])/d+2:(a[0]-a[1])/d+4)*60,d/l]},[r]=n(t),[i]=n(o.color);if(r<0||i<0)return r<0&&i<0?o:null;let s=Math.abs(r-i);return Math.min(s,360-s)<=30?o:null}function it(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,i;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?i=sf(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:n}}function sf(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function _n(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var af=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),lf=new Set(["garage","gate"]),cf=new Set(["window","opening"]);function qn(o,e,t=!1){let n=new Map;return e.length&&o.forEach((r,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&n.set(r.id,s)}),n}function Gn(o,e){let t=new Map,n=(i,s)=>i==="none"?null:i??s??null,r=(i,s,a)=>{let l=n(i.cover,s);return{cover:l,contact:i.sensor==="handle"&&i.contact==null?null:n(i.contact,a),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,lock:(i.type==="door"||i.type==="window"&&i.sill<=.01)&&i.lock&&i.lock!=="none"?i.lock:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:l&&W(l)==="cover"&&i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{}}};for(let i of e){for(let s of i.rooms){let a=i.openings.filter(f=>f.room_id===s.id).sort((f,x)=>f.edge-x.edge||f.offset-x.offset);if(!a.length)continue;let l=_e(o,s.area_id),c=f=>o.states[f]?.attributes.device_class,d=l.filter(f=>W(f)==="cover"&&af.has(c(f))),u=a.filter(f=>f.type==="window"),p=a.filter(f=>f.type==="door"),h=a.filter(f=>f.type==="garage"),_=qn(u,d,!0),b=qn(u,l.filter(f=>W(f)==="binary"&&cf.has(c(f)))),m=qn(p,l.filter(f=>W(f)==="binary"&&c(f)==="door")),v=qn(h,l.filter(f=>W(f)==="cover"&&lf.has(c(f)??""))),w=qn(h,l.filter(f=>W(f)==="binary"&&c(f)==="garage_door"));for(let f of a){let x=f.type==="window"?_:f.type==="garage"?v:null,P=f.type==="window"?b:f.type==="garage"?w:m;t.set(f.id,r(f,x?.get(f.id),P.get(f.id)))}}for(let s of i.openings)t.has(s.id)||t.set(s.id,r(s))}return t}var df=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function uf(o){if(!o||Y(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=df.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var pf=new Set(["unlocked","unlocking","open","opening"]);function Dr(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var hf=.5;function rt(o,e,t="window"){e.cover&&Dr(e.cover)&&(e={...e,cover:null,position:null});let n=e.lock?o.states[e.lock]:void 0,r=n&&pf.has(n.state)?{unlocked:!0}:{},i=w=>!!w&&o.states[w]?.state==="on",s=w=>!!w&&!!o.states[w]&&!Y(o.states[w]),a=w=>w?uf(o.states[w]):null,l=w=>{let f=a(w);return e.contactInvert&&w&&w!==e.tilt&&w!==e.tilt2&&f!=="tilted"&&f?f==="open"?"closed":"open":f},c=i(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",d=l(e.contact2)==="open"&&!c?1:0,u=i(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=u?1:0,h=e.tiltAngle?Number(o.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let w=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,w/(e.tiltMax||15))),p<.08&&(p=0),u=p>0}let _=l(e.contact)==="open"&&!u?1:0,b=null,m=e.cover?o.states[e.cover]:void 0,v=dc(o,e.position);if(v!==null)b=e.positionInverted?v:1-v;else if(m&&!Y(m)){let w=m.attributes.current_position;typeof w=="number"?b=1-Math.min(100,Math.max(0,w))/100:b=m.state==="closed"?1:m.state==="opening"||m.state==="closing"?.5:0}else e.cover&&(b=0);if(t==="door"){let w=l(e.contact);return b!==null&&m&&bc.has(String(m.attributes.device_class??""))?{open:w===null?1-b:w==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...r}:{open:w===null?e.shut?0:hf:w==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:b,sensed:w!==null||b!==null,...r}}if(t==="garage"){let w=l(e.contact),f=b!==null||w!==null;return b===null&&(b=w===null||w==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:b,sensed:f}}return{open:_,open2:d,tilt:p,tilt2:c?1:0,cover:b,sensed:s(e.contact)||s(e.tilt)||Number.isFinite(h),...r}}function dc(o,e){let t=e?o.states[e]:void 0;if(!t||Y(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function Lr(o,e){let t=new Map,n=[];for(let s of e){let a=W(s)==="camera"?`camera:${s}`:o.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let r=n.map(s=>{let a=t.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),i=new Map(e.map((s,a)=>[s,a]));return r.sort((s,a)=>i.get(s.primary)-i.get(a.primary))}function Jo(o,e){return Lr(o,e).map(t=>t.primary)}var Rr={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},ff=/(cam|doorbell|klingel|tür|door|entry|cctv)/i,uc=new Set(["tv_board","tv_wall"]);function pc(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===i||i.length>=3&&r.includes(i)}function hc(o){return uc.has(o)||!!xl(o)}function Xo(o){return hc(o)||o==="desk"||o==="fridge_smart"}function bn(o,e){let t=new Set,n=Wt(o,e),r=e.some(i=>i.openings.some(s=>s.confirm))?Gn(o,e):null;for(let i of e){for(let s of i.placements)s.confirm&&t.add(s.entity_id);for(let s of i.openings){let a=s.confirm?r?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of i.furniture){let a=s.confirm?n.get(s.id)?.entity:null;if(a&&a!=="none"&&t.add(a),s.confirm)for(let l of s.gangs??[])l.entity&&l.entity!=="none"&&t.add(l.entity)}}return t}function fc(o,e){let t=new Map;for(let n of e)for(let r of n.furniture){if(r.type!=="awning"&&!Vo(r.type))continue;let i=r.entity&&r.entity!=="none"?r.entity:null,s=i?o.states[i]:void 0,a=r.awning_time??20;if(!s||Y(s)){t.set(r.id,{out:0,moving:0,time:a});continue}let l=p=>r.awning_invert?1-p:p,c=dc(o,r.awning_position&&r.awning_position!=="none"?r.awning_position:null),d=s.attributes.current_position,u=s.state==="opening"?r.awning_invert?-1:1:s.state==="closing"?r.awning_invert?1:-1:0;c!==null?t.set(r.id,{out:l(c),moving:0,time:a}):typeof d=="number"&&Number.isFinite(d)?t.set(r.id,{out:l(Math.min(1,Math.max(0,d/100))),moving:0,time:a}):u?t.set(r.id,{out:null,moving:u,time:a}):t.set(r.id,{out:l(s.state==="open"||s.state==="on"?1:0),moving:0,time:a})}return t}function Wr(o,e){let t=r=>{if(!r||r==="none")return!1;let i=o.states[r]?.state;return i==="on"||i==="open"},n=new Map;for(let r of e)for(let i of r.furniture)i.type==="fridge_smart"&&n.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return n}var ec={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Nr(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function mf(o,e){if(Nr(o,e))return e;let t=o.entities?.[e]?.device_id;return t?Fr(o,t).find(n=>n!==e)??null:null}function Wt(o,e){let t=new Map;for(let n of e){let r=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let s=i.type in ec,a=fn(i.type),l=$l(i.type),c=s?ec[i.type]:Rr[i.type]??(pn(i.type)?Rr.robot_vacuum:a?Rr.radiator:l?ff:void 0);if(!c&&i.entity==null&&i.power==null)continue;let d=n.rooms.find(b=>b.points.length>=3&&q([i.x,i.z],b.points))??(i.type==="awning"?Sr(n).find(b=>q([i.x,i.z],b.points)):void 0),u=d?Jo(o,_e(o,d.area_id)):[],p=b=>`${b} ${j(o,b)}`,h=i.entity==="none"?null:i.entity??null;if(i.entity==null){let b=u.filter(m=>!r.has(m));if(s){let m=b.filter(v=>W(v)==="light");h=m.find(v=>c.test(p(v)))??m[0]??null}else if(pn(i.type)){let m=d?.area_id??null;h=Object.keys(o.entities??{}).find(v=>v.startsWith("vacuum.")&&!r.has(v)&&!Qo(o,v)&&nt(o,v)===m)??null}else if(l){let m=b.filter(v=>W(v)==="camera");h=m.find(v=>c.test(p(v)))??(m.length===1?m[0]:null)}else if(a||i.type==="ac_unit"){let m=b.filter(v=>W(v)==="climate");h=m.find(v=>c.test(p(v)))??m[0]??null}else if(hc(i.type)){let m=b.filter(v=>W(v)==="media");h=m.find(v=>o.states[v]?.attributes.device_class==="tv")??m.find(v=>c?.test(p(v)))??(uc.has(i.type)?m[0]??null:null)}else i.type==="awning"?h=b.find(m=>m.startsWith("cover.")&&(c?.test(p(m))||o.states[m]?.attributes.device_class==="awning"))??null:c&&(h=b.find(m=>["switch","media","fan"].includes(W(m)??"")&&c.test(p(m)))??null);h&&r.add(h)}let _=i.power==="none"?null:i.power??null;i.power==null&&(_=h?mf(o,h):null,!_&&c&&d&&!s&&(_=_e(o,d.area_id).find(m=>Nr(o,m)&&!r.has(m)&&c.test(p(m)))??null),_&&r.add(_)),(h||_)&&t.set(i.id,{entity:h,power:_})}}return t}function Vr(o){if(!o)return null;let e=String(o.state).toLowerCase();return e==="unavailable"?!1:e==="unknown"||e===""?null:!["off","disconnected","offline","not_home","disabled","down","isolated"].includes(e)}function Br(o){if(!o||o.state!=="on")return 0;let e=o.attributes.percentage;return typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.min(1,e/100)):.6}function Ur(o){if(!o||o.state==="off"||o.state==="standby"||Y(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function mc(o,e,t,n=[]){let r=(u,p)=>q([u,p],t.points),i=Wt(o,[e]),s=Gn(o,[e]),a=[...e.placements.filter(u=>r(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>r(u.x,u.z)).flatMap(u=>[i.get(u.id)?.entity,i.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let p=s.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(t.hidden??[]),c=[...new Set(a)].filter(u=>!l.has(u)),d=new Set(c);return{shown:c,more:_e(o,t.area_id).filter(u=>!d.has(u)&&!l.has(u))}}var tc=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,gf={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Zo(o,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,r=n(t.device)??n(e.entity),i=r?o.entities?.[r]?.device_id:null,s=i&&o.entities?Object.values(o.entities).filter(u=>u.device_id===i).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,p,h)=>s.find(_=>p.includes(_.split(".")[0])&&gf[u].test(a(_))&&(!h||h(_)))??null,c=u=>String(o.states[u]?.attributes.unit_of_measurement??""),d=u=>String(o.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function _f(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function Yn(o,e){let t=Zo(o,e),n=m=>m?o.states[m]:void 0,r=m=>{let v=Number(n(m)?.state);return m&&Number.isFinite(v)?v:null},i=r(t.soc),s=r(t.range),a=n(t.charging),l=String(a?.attributes.unit_of_measurement??""),c=a&&/^k?W$/.test(l)?(r(t.charging)??0)*(l==="kW"?1e3:1):null,d=c!==null?c>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=n(t.plugged),p=n(t.lock),h=n(t.climate),_=n(t.tracker),b=_?.state.toLowerCase()??"";return{entities:t,soc:i!==null?Math.max(0,Math.min(100,i)):null,range:s,rangeUnit:String(n(t.range)?.attributes.unit_of_measurement??"km"),chargingW:c,charging:d,plugged:u?u.state==="on":null,locked:p?_f(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:_&&b!=="home"&&!Y(_)?b==="not_home"?"":_.state:null}}function gc(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(Zo(o,n)))).filter(t=>!!t)}function Qn(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let r of Object.values(o.entities))if(!(r.device_id!==n||!r.entity_id.startsWith("sensor."))&&(tc.test(r.translation_key??"")||tc.test(r.entity_id.split(".")[1])))return r.entity_id;return null}function nc(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function _c(o,e,t,n){let r=t?o.states[t]?.attributes:void 0;for(let i of[n?o.states[n]?.state:void 0,r?.current_room,r?.room,r?.current_segment]){let s=qr(o,e,i);if(s)return s}return null}function qr(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=nc(t);if(!n)return null;let r=i=>[i.name,i.area_id??"",i.area_id&&o.areas?.[i.area_id]?.name||""].map(nc).filter(Boolean);return e.find(i=>r(i).includes(n))??e.find(i=>r(i).some(s=>s.length>=3&&(s.includes(n)||n.includes(s))))??null}var bc=new Set(["garage","gate","door"]);function jr(o,e){let t=new Set,n=new Set,r=i=>{if(!i||i==="none"||!o.states[i])return;let s=W(i);s==="light"?t.add(i):s==="cover"&&!bc.has(String(o.states[i].attributes.device_class??""))&&n.add(i)};for(let i of e.rooms){let s=new Set(i.hidden??[]);for(let a of Jo(o,_e(o,i.area_id)))s.has(a)||r(a)}for(let i of e.placements)r(i.entity_id);for(let i of e.furniture)r(i.entity);return{lights:[...t],covers:[...n]}}function wc(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function vc(o,e,t){let n=t.target?.trim()??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[r,i]=n.split(".",2);o.callService(r,i,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var ei=class{waiting=[];onChange=null;get current(){return this.waiting[0]?.req??null}ask(e){return new Promise(t=>{this.waiting.push({req:e,resolve:t}),this.waiting.length===1&&this.onChange?.()})}answer(e,t=""){let n=this.waiting.shift();n&&(n.resolve({ok:e,value:t}),this.onChange?.())}},ti=globalThis;function yc(o){ti.__fp3dAskFactory||(ti.__fp3dAskFactory=o)}function bf(){return ti.__fp3dAskHost??ti.__fp3dAskFactory?.()??null}var wf={ok:!1,value:""};function Kr(o){let e=bf();return e?e.ask(o):Promise.resolve(wf)}async function gt(o,e){return(await Kr({text:o,...e})).ok}async function xc(o,e,t){let n=await Kr({text:o,input:e,...t}),r=n.value.trim();return n.ok&&r?r:null}async function ni(o,e){await Kr({text:o,ok:e.ok})}var je={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},wn=o=>(...e)=>({_$litDirective$:o,values:e}),_t=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:eb}=el;var kc=o=>o.strings===void 0;var vf={},$c=(o,e=vf)=>o._$AH=e;var Sc=wn(class extends _t{constructor(o){if(super(o),o.type!==je.PROPERTY&&o.type!==je.ATTRIBUTE&&o.type!==je.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!kc(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===Ee||e===y)return e;let t=o.element,n=o.name;if(o.type===je.PROPERTY){if(e===t[n])return Ee}else if(o.type===je.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return Ee}else if(o.type===je.ATTRIBUTE&&t.getAttribute(n)===e+"")return Ee;return $c(o),e}});var Gr={bg:"#070b14",bg2:"#0d1424",chrome:"rgba(14, 21, 38, 0.86)",chromeSolid:"#0f1729",line:"rgba(120, 170, 255, 0.16)",text:"#e6eefc",muted:"#8a9bb8",accent:"#37e0ff",accentText:"#041018",soft:"#5b7cff",warm:"#ffb547",danger:"#ff6b8b",shadow:"0 8px 30px rgba(0, 0, 0, 0.5)",colorScheme:"dark"},Mc={bg:"#eef2f8",bg2:"#e3e9f2",chrome:"rgba(255, 255, 255, 0.88)",chromeSolid:"#ffffff",line:"rgba(30, 60, 110, 0.18)",text:"#132036",muted:"#4a5a74",accent:"#0b7a99",accentText:"#ffffff",soft:"#3d5bd9",warm:"#a35f00",danger:"#c4224a",shadow:"0 6px 22px rgba(20, 40, 80, 0.16)",colorScheme:"light"};function vn(o){return o==="day"}function Tc(o){let e=t=>t.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`);return Object.entries(o).map(([t,n])=>`--fp3d-s-${e(t)}: ${n};`).join(`
`)}var Ic=o=>o.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),yf=Object.keys(Gr).filter(o=>o!=="colorScheme").map(o=>`--fp3d-${Ic(o)}: var(--fp3d-s-${Ic(o)}, ${Gr[o]});`).join(`
`),Ve=Me`
  :host {
    ${Xe(yf)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${Xe(Tc(Mc))}
  }
`,Je=Me`
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
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var Yr="fp3d-ask-dialog";function xf(){let o=document.activeElement;for(;o?.shadowRoot?.activeElement;)o=o.shadowRoot.activeElement;return o}function kf(){let o=document.fullscreenElement;for(;o?.shadowRoot?.fullscreenElement;)o=o.shadowRoot.fullscreenElement;return o??document.body}var Qr=class extends xe{queue=new ei;typed="";shown=null;returnFocus=null;constructor(){super(),this.queue.onChange=()=>this.requestUpdate()}ask(e){return this.queue.ask(e)}answer(e){let t=this.queue.current;t&&this.queue.answer(e||t.cancel===void 0,t.input!==void 0?this.typed:"")}key(e){e.stopPropagation(),e.key==="Escape"?(e.preventDefault(),this.answer(!1)):e.key==="Enter"&&e.target.tagName==="INPUT"&&(e.preventDefault(),this.answer(!0))}willUpdate(){let e=this.queue.current;e!==this.shown&&(e&&!this.shown&&(this.returnFocus=xf()),this.typed=e?.input??"",this.toggleAttribute("open",!!e))}updated(){let e=this.queue.current;if(e===this.shown)return;if(this.shown=e,!e){this.returnFocus?.focus?.(),this.returnFocus=null;return}let t=this.renderRoot.querySelector("input");t?(t.focus(),t.select()):this.renderRoot.querySelector(e.danger&&e.cancel!==void 0?".ask-cancel":".ask-ok")?.focus()}render(){let e=this.queue.current;return e?g`<div class="backdrop" @click=${()=>this.answer(!1)}></div>
      <div class="box ${e.detail!==void 0?"wide":""}" role=${e.cancel===void 0?"dialog":"alertdialog"} aria-modal="true" aria-describedby="ask-text" @keydown=${t=>this.key(t)}>
        <p id="ask-text" class="text">${e.text}</p>
        ${e.detail!==void 0?g`<textarea class="detail" readonly rows="14" spellcheck="false" aria-labelledby="ask-text" .value=${e.detail}></textarea>`:y}
        ${e.input!==void 0?g`<label class="fp3d-field"><input type="text" aria-labelledby="ask-text" .value=${Sc(this.typed)} @input=${t=>this.typed=t.target.value} /></label>`:y}
        <div class="buttons">
          ${e.cancel!==void 0?g`<button class="fp3d-btn ask-cancel" @click=${()=>this.answer(!1)}>${e.cancel}</button>`:y}
          <button class="fp3d-btn ask-ok ${e.danger?"ask-danger":"fp3d-primary"}" @click=${()=>this.answer(!0)}>${e.ok}</button>
        </div>
      </div>`:y}static styles=[Ve,Je,Me`
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
    `]};customElements.get(Yr)||customElements.define(Yr,Qr);var Jn=null;yc(()=>typeof document>"u"?null:{ask(o){Jn??=document.createElement(Yr);let e=kf();return Jn.parentNode!==e&&!Jn.queue?.current&&e.appendChild(Jn),Jn.ask(o)}});var $f={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of Home 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows Home 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",update_ready:"Home 3D has been updated. Reload to use the new version.",update_saving:"Your changes are still being saved; the reload waits for them.",update_unsaved:"Your last changes are not saved yet. Reloading waits until they are, or they would be lost.",needs_restart_old:"A new version of Home 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",plan_view:"2D or 3D",view_3d:"3D",view_2d:"2D",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",copy_items:"Copy",paste_items:"Paste",paste_items_n:"Paste ({n})",help_key_copy:"Copy the chosen items (inside the editor only, not the system clipboard)",help_key_paste:"Paste the copied items on this floor",help_key_select_all:"Choose every item on this floor",item_floor_hint:"Moves the item, with its links, to another floor",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_label:"From Home Assistant:",first_floor_add:"Add your first floor",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",floor_order_hint:'Only changes the order of the floors in the list and the floor pictures. Where a floor sits in the 3D house comes from its "height above the ground".',default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",resize_carried:"Moved with the room: {n} items and devices, {w} neighbouring walls.",resize_outline_only:"Outline only",resize_outline_only_hint:"Keep the new outline; items, devices and neighbouring walls stay where they were",resize_outside:"{n} items now outside the room",resize_outside_one:"1 item now outside the room",resize_select:"Select them",redo:"Redo",fit_all:"Fit everything",fit_all_hint:"Bring the whole plot into view: the garden, paths and everything standing outside",split_fold_hint:"Close the 3D view beside the plan",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",items_list:"Items",item_hide:"Hide in the plan",item_show:"Show in the plan again",hint_place:"Click the plan to place {name} there \xB7 Shift: place more \xB7 Alt: off the grid \xB7 Esc cancels",place_armed:"{name}: click the plan where it should go.",place_middle:"Place in the middle",place_middle_room:"Place in the middle of {room}",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_ask:"Pipe laid \u2013 on to the pool? Then a hole with the way outside goes here:",tech_ask_loose:"Leave it open",tech_step_tee:"Tap the pipe where the branch goes \u2013 it is cut there, and from the T-piece you draw the next line.",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Like a pen: press on a device and draw the line \u2013 wiggles go, the pipes run level and upright. A stroke ending on a device or pipe joins there; one ending on nothing is asked where it goes (skimmer, bottom drain, inlets, waste) and Home 3D lays the hole and the way outside itself.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",side_resize:"Drag the side bar wider or narrower",furn_extra:"Extra value at the symbol (sensor, e.g. water temperature)",settings_house:"House",settings_weather:"Weather & warnings",roof_basics:"Roof shape",roof_whole:"Roof (whole building)",roof_whole_hint:"One roof for the whole house, not for one floor.",roof_floor_pick:"Floor shown",roof_floor_pick_hint:"Only picks which floor the plan shows to draw along; the roof is the whole building's",voice_sentences_kept:"You changed the sentence file for {langs} yourself \u2013 Home 3D leaves it alone.",voice_sentences_failed:"The sentence file could not be written.",voice_sentences_file:"Home 3D creates the file custom_sentences/<language>/home_3d.yaml only when you pick sentences here. A file you changed yourself is never overwritten; removing the integration deletes Home 3D's file.",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",help:"Help",help_overlay_title:"Help: keys and plan marks",rack_edit:"Edit rack",rack_front_view:"Front view",rack_used:"{used} of {u}U used",rack_view_close:"Close",rack_unit:"U{n}",rack_at:"At U{u}",rack_up:"One U up",rack_down:"One U down",rack_move:"Move",rack_move_hint:"Tap the lowest U it should go to.",rack_add:"Add gear",rack_add_hint:"Tap the lowest U it should go to.",rack_no_gear:"No rack-mount gear for this rack in the packs.",rack_read_only:"Only editors change what is in the rack.",rack_overlap:"Something is already there.",rack_outside:"It doesn't fit in the rack there.",rack_too_deep:"Too deep for this rack.",rack_wrong_width:"Made for the other rack width.",rack_not_gear:"That isn't rack-mount gear.",rack_full:"No more gear fits in one rack.",rack_missing:"That gear is no longer in the rack.",rack_no_rear:"No rear rails.",rack_no_lane:"No room beside the rails.",rack_no_shelf:"Not on a shelf.",rack_shelf_full:"The shelf is full.",rack_too_tall:"Too tall.",rack_not_loose:"Not for shelves.",rack_totals:"{used}U used \xB7 {free} free",rack_watts_about:"\u2265 {w} W",rack_face_front:"Front",rack_face_rear:"Rear",rack_lane_hint:"Tap a side lane.",rack_full_depth:"full depth",rack_on_shelf:"Put on it",rack_no_loose:"Nothing fits.",rack_width_half:"\xBD",rack_width_third:"\u2153",rack_misfits:"{n} no longer fit:",rack_frame_pick:"Rack frame",rack_status_online:"Online",rack_status_warning:"Warning",rack_status_offline:"Offline",rack_unlinked:"Not linked to Home Assistant",rack_ha_device:"HA device",rack_status_from:"Status from",rack_links:"Linked",rack_link_add:"Add entity",rack_suggested:"From the same device",help_open:"Help and shortcuts (?)",help_shortcuts:"Keyboard shortcuts",help_legend:"Marks on the plan",help_key_undo:"Undo",help_key_redo:"Redo",help_key_duplicate:"Duplicate the selection (an item, else the room)",help_key_delete:"Delete the selection",help_key_nudge:"Nudge the selection one grid step (Shift 10 cm, Alt 1 cm)",help_key_rotate:"Turn an item 90\xB0 (Shift: the other way)",help_key_lock:"Fix or free an item or device",help_key_multi:"Select several items",help_key_pick_through:"Click without moving: pick the next item in the stack below (Alt-drag moves the selected one freely)",help_key_close_shape:"Close the shape while drawing (Backspace removes the last corner)",help_key_escape:"Cancel, back to Select, clear the selection",help_key_snap:"While dragging: Shift keeps a line straight, Alt drags without snapping",help_key_help:"Show or hide this help",help_legend_swing:"Orange dashed arc: where a door swings open. Shown only for the selected door.",help_legend_track:"Orange dashed lines at a garage door: its tracks under the ceiling (selected only).",help_legend_guide:"Pink dashed line: lined up with a corner while drawing or dragging",help_legend_snap:"Pink circle: the point snaps here",help_legend_ghost:"Grey dashed outlines: the rooms of the floor below",help_legend_selected:"Light blue: what is selected",ask_ok:"OK",backup:"Backup",editors_title:"Editors",editors_hint:"Who may change the plan. Everyone else sees the house and controls devices, without the editor. Until you pick, every admin is an editor.",editors_admin:"admin",editors_reset:"Back to: every admin",tablet_users:"Wall tablet (locked view)",tablet_users_hint:"Ticked users see only the home name, the floors and the View menu: no editor, no view settings. A single device works with ?tablet in the address too; ?tablet=0 switches it off there again.",tablet_idle:"Back to the whole house after (s, 0 = never)",editors_no_admin:"At least one admin must stay an editor.",editors_failed:"The editors could not be saved.",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no Home 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again.",backup_admin_only:"Only a Home Assistant administrator can import a backup or restore an earlier version: it replaces the whole plan, actions included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full Home 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",item_actions:"Own actions",item_actions_hint:'What a tap, a hold and a double tap do in 3D. "Default" keeps the usual behaviour for this kind of device. Everything runs through Home Assistant; anyone who can see the view can use them.',item_action_perform_admin:"Only a Home Assistant administrator can add or change a perform action. You can replace one with another action.",item_gesture_tap:"Tap",item_gesture_hold:"Hold",item_gesture_double_tap:"Double tap",item_action_default:"Default",item_action_none:"Nothing",item_action_toggle:"Toggle",item_action_more_info:"Open details",item_action_camera:"Open camera",item_action_navigate:"Open a dashboard page",item_action_url:"Open an address",item_action_perform_action:"Perform an action",item_target_toggle:"Entity (empty = its own)",item_target_more_info:"Entity (empty = its own)",item_target_camera:"Camera (empty = its own)",item_target_navigate:"Path",item_target_url:"Address",item_target_perform_action:"Action (domain.service)",item_action_confirm:"Ask first",item_action_confirm_text:"Question",item_action_confirm_placeholder:"Are you sure?",action_confirm_title:"Confirm",action_confirm_ok:"Do it",action_confirm_default:"{name}: are you sure?",action_this_item:"This item",action_failed:"The action failed: {error}",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Start here: add your first floor with the Floor menu at the top left.",hint_first_room:"Next: draw your first room \u2013 Build \u203A Room, then drag a rectangle on the plan",hint_sel_furniture:"Drag to move \xB7 corners resize \xB7 R turns \xB7 L fixes \xB7 Del deletes \xB7 Esc deselects",hint_sel_opening:"Drag along the wall to move it \xB7 arrow keys nudge \xB7 kind and size are on the right \xB7 Del deletes",hint_sel_device:"Drag to move the device \xB7 arrow keys nudge \xB7 L fixes \xB7 Del deletes",hint_help:"Help",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Home 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_model:"Camera model",camera_model_hint:"The real shape of the camera in 3D (looks only: the live view, the cone and the actions stay). Domes and turrets hang from the ceiling, the others sit on a wall.",camera_model_found:"{name} (as the device reports)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_detect_choose:"Choose the detection sensors yourself",camera_detect_choose_hint:"Only the ticked sensors count for pins, the motion trail and the live director \u2013 sensors of another device too, e.g. Frigate's person sensor for a Reolink camera. Without the tick Home 3D takes every sensor on the camera's device.",camera_detect_add:"Add a sensor",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View settings: quality, look, lighting, markers, size",view_btn:"View",view_group_lighting:"Lighting",view_group_size:"Size",view_group_controls:"Controls",follow_ha:"Follow Home Assistant",follow_sun:"By the sun",follow_now:"now {look}",sun_and_lights:"Sun and lights \u2026",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',view_settings:"Settings",view_settings_admin:"Only administrators can change these settings \u2013 they apply to the whole house.",view_settings_look:"Look",view_settings_alerts:"Warnings",view_settings_more:"Every other setting is in the editor under \u2699 Settings.",lines_add:"Add",lines_new:"New entry \u2026",sheet_mic:"Speak",sheet_listening:"Listening \u2026",sheet_mic_failed:"Nothing understood \u2013 the microphone needs HTTPS and a voice pipeline with speech-to-text.",card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back. A camera keeps its pin with all its camera settings; the model only joins it.",as_furniture_pick:"Pick furniture \u2026",camera_look_builtin:"Built-in camera model",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_hint:"A screen shows by itself what happens in the house: the doorbell rings \u2013 the view flies to the front door and looks through its camera. Every event is off until you switch it on.",director_here:"Switch on on this device",director_here_hint:"Only for this browser, e.g. the wall tablet. On a dashboard card you switch the live director on in the card settings.",director_doorbell:"Doorbell rings: fly to the door and look through the camera",director_doorbell_entity:"Doorbell",director_doorbell_camera:"Camera at the door",director_no_doorbell:"No doorbell found. Choose your doorbell's event or binary sensor entity.",director_motion:"A camera sees someone",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",director_appliances:"Washer, dryer or dishwasher finished",director_alerts:"New warning (smoke, water, alarm, window in the rain \u2026)",director_hold:"Back after (seconds)",director_back_hint:"Then the view goes back to where it was \u2013 unless someone touched the screen meanwhile. Someone using the tablet is only interrupted by the doorbell and by warnings. The doorbell stays twice as long.",voice:"Voice control",voice_hint:"A microphone button at the bottom left of the 3D view: tap it and speak. \u201CShow the living room\u201D, \u201Cupper floor\u201D or \u201Cthe whole house\u201D shows the place; anything else (\u201Cturn on the hall light\u201D) goes to Home Assistant's Assist.",voice_here:"Switch on on this device",aliases:"Further names for the voice",aliases_hint:'Further names, comma separated \u2013 so you ask for the "Smart TV Pro" as "living room TV" or "telly". Used by voice control and the search.',aliases_placeholder:"e.g. living room TV, telly",voice_understands:"What Home 3D understands",voice_examples:"\u201CShow the living room\u201D|\u201CGo to the upper floor\u201D|\u201CShow the whole house\u201D|\u201CShow the washing machine\u201D / \u201CWhere is the dryer?\u201D|\u201CShow the front door camera\u201D / \u201CShow the driveway camera\u201D|\u201CShow the cameras\u201D|Anything else (\u201Cturn on the hall light\u201D) goes to Assist",voice_needs:"Needs https, the microphone allowed (in Fully Kiosk: Web Content Settings \u2192 microphone access) and an Assist pipeline with speech to text. On a dashboard card you switch the button on in the card settings.",voice_showing:"Showing {name}.",voice_rack_hot:"{name}: {gear} is the hottest at {value}.",voice_rack_value:"{gear}: {what} {value}.",voice_rack_online:"{name}: {on} of {total} devices are online.",voice_rack_summary:"{name}: {list}.",voice_rack_missing:"{name} has no {what} linked.",voice_rack_unavailable:"{what} of {gear} is not available right now.",voice_rack_nothing:"{name} has nothing linked to Home Assistant.",screen_name:"Screen name (for Assist)",screen_name_placeholder:"e.g. Kitchen",screen_name_hint:'Asking Assist ("Show the living room") or an automation calling the service home_3d.ask reaches every open Home 3D view. When the service names a screen, only the view with that name reacts.',voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",director_mic_test:"\u{1F399}\uFE0F Test the microphone",director_mic_hint:"Checks https, the microphone and Assist's speech to text on this device and shows which room a sentence would open. Nothing is switched.",voice_pipeline:"Assist pipeline on this device",voice_sentences:"Sentences for Assist",voice_sentences_distinct:'Only distinct ones ("Show \u2026", "Ask the house \u2026", "Home 3D, \u2026")',voice_sentences_all:"All questions (also takes sentences Home Assistant answers itself)",voice_sentences_off:"None (default \u2013 no sentence file)",voice_sentences_hint:'What Assist hands to Home 3D. Questions like "Which windows are open?" are otherwise answered by Home Assistant itself \u2013 "Ask the house which windows are open" always reaches Home 3D.',voice_pipeline_preferred:"Preferred one in Home Assistant",voice_pipeline_no_stt:"no speech to text",backdrop:"Background",backdrop_kind:"Behind the house",backdrop_look:"The look's sky (default)",backdrop_color:"One colour",backdrop_gradient:"Gradient",backdrop_image:"Picture",backdrop_top:"Colour at the top",backdrop_bottom:"Colour at the bottom",backdrop_image_url:"Picture address",backdrop_dim:"Darken",backdrop_image_bad:"This address does not work: https://\u2026 or a path like /local/background.jpg",backdrop_hint:"Put the picture into config/www in Home Assistant, then it is /local/filename.jpg. Darkening keeps the neon lines readable. Costs no performance \u2013 old tablets too.",director_live:"Live picture when looking through",director_live_hint:"Instead of a still every few seconds the camera's video runs (through Home Assistant's player). Needs more power \u2013 better leave it off on very old tablets.",director_triggers:"Own triggers",director_triggers_hint:"When one of these entities goes on or open \u2013 a second doorbell, the garage door, the garden gate \u2013 the view flies there and looks through the camera chosen (without one: to the device).",director_trigger_entity:"Trigger",director_trigger_add:"+ Add a trigger",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",sun_shadow:"Sun arc and house shadow",sun_shadow_hint:`An arc over the house shows the sun's way today with sunrise and sunset, and the house's shadow lies on the ground and moves with the sun. Needs the north direction; on the "Tablet" level only the arc.`,window_glow:"Windows glow outside at night",window_glow_hint:"When it is dark outside, the light of lit rooms falls out of the windows as a warm glow onto the lawn and terrace in front \u2013 in the room's light colour, fainter behind lowered blinds.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_unavailable:"Contact unavailable: {name}",alert_short_contact_unavailable:"Contact unavailable",alert_unavailable:"Warn when a window or door contact is unavailable",alert_unavailable_hint:'When a contact has been "unavailable" for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. Then a warning shows.',effects:"Live effects",effects_hint:"A wet leak sensor turns its room's floor red until it is dry; motion lights the room briefly; radiators and hot-water cylinders shade from cold blue to warm red.",effects_motion_seconds:"Motion lights a room for (s, 0 = off)",effects_radiator_cold:"Radiator fully blue at",effects_radiator_hot:"Radiator fully red at",effects_tank_cold:"Cylinder fully blue at",effects_tank_hot:"Cylinder fully red at",room_live:"Leaks and motion",room_live_leak:"Leak sensor",room_live_motion:"Motion sensor",room_live_hint:"Automatic: every one of the room's area and those placed in the room. A wet leak sensor turns the floor red, motion lights the room briefly.",temp_sensor:"Temperature (shading)",temp_sensor_hint:"The item shades from cold blue to warm red with this temperature. Automatic: a temperature sensor at its symbol, its water heater, or its thermostat's own sensor.",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no Home 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_view:"2D/3D",card_view:"Starts as",card_view_3d:"3D view",card_view_2d:"2D plan (view only)",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_home:"Home",card_home_active:"The active home",home:"Home",home_show:"Make this the home shown on displays",home_new:"\uFF0B New home \u2026",home_new_name:"New home",home_sample:"Load the sample home",home_rename:"Rename \u2026",home_duplicate:"Duplicate \u2026",home_delete:"Delete \u2026",home_name_prompt:"Name of the home",home_copy_name:"{name} (copy)",home_delete_confirm:'Delete "{name}" with its plan, restore points and pictures? This cannot be undone.',home_failed:"That did not work: {error}",demo_states:"Demo states",demo_states_hint:"Linked devices this Home Assistant does not have show fixed states (some lights on, heating on, solar producing). Real entities always win.",demo_chip:"Demo",demo_hint:"Sample home: devices this Home Assistant does not have show fixed demo states. Link them to real entities in the editor.",home_active_badge:"Active on displays",home_not_on_displays:"not shown on displays",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",room_order_up:"Move the room up (earlier in the room bar)",room_order_down:"Move the room down (later in the room bar)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_packs:"furniture packs ({items} items)",own_items_title:"Your own items",own_items_hint:"Build your own furniture from simple shapes. It stays in Home Assistant and everyone in the home finds it in the library. So far: {n}.",own_items_open:"Open the item editor",packs_hint:"A furniture pack is a folder with a pack.json and one JSON file per item (see docs/packs.md); every file is checked on import. To install from GitHub, paste the URL of the repository or of the pack folder in it. Old single-file packs still import.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",license_copy:"Copy",pack_import:"Import pack files \u2026",pack_import_folder:"Import a pack folder \u2026",pack_licence:"Licence: {licence}",pack_install_url:"Install from GitHub",pack_installing:"Installing \u2026",pack_from:"From",upd_title:"Pack updates",upd_intro:"Packs installed from GitHub are checked for new releases. A new release goes into the library; placed items keep their look until you update them.",upd_auto:"Update placed items automatically when a new release arrives",upd_frequency:"Check for new releases",upd_freq_off:"Never (only by hand)",upd_freq_daily:"Daily",upd_freq_weekly:"Weekly",upd_freq_monthly:"Monthly (on the 1st)",upd_time:"Time",upd_weekday:"Day",upd_day_0:"Monday",upd_day_1:"Tuesday",upd_day_2:"Wednesday",upd_day_3:"Thursday",upd_day_4:"Friday",upd_day_5:"Saturday",upd_day_6:"Sunday",upd_check_now:"Check now",upd_checking:"Checking \u2026",upd_last_check:"Last checked: {time}",upd_next_check:"Next check: {time}",upd_checked:"Checked \u2013 new releases: {n}",upd_none:"All placed items are up to date.",upd_item:"Release {from} \u2192 {to} \xB7 placed {n}\xD7",upd_update:"Update",upd_update_all:"Update all ({n})",upd_sum_updates:"with an update",upd_sum_pinned:"pinned",upd_pinned:"Pack pinned",pack_pin:"Pin release",pack_rollback:"Roll back to v{release}",pack_rollback_confirm:"Roll \u201C{name}\u201D back to v{release}? Placed items that took the last update go back too; the pack is pinned.",pack_latest:"Last check: v{release} on GitHub",pack_check_error:"Check failed: {detail}",pack_confirm_older_release:"{detail}. Install it anyway?",pack_confirm_pinned:"{detail}. Install this release anyway? The pack stays pinned.",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer Home 3D version \u2013 please update Home 3D (HACS) and reload the page.",pro_title:"Not available",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"The built-in features of Home 3D, the fun extras and your furniture packs. Everything runs locally in Home Assistant.",ext_pro:"Built-in features",fun_title:"Fun packs",fun_intro:"Extras just for fun \u2013 switch them on and off here.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_name_halloween:"Halloween",fun_feature_halloween:"Pumpkins that glow with a light, a cobweb, bats, gravestones, a skeleton, a witch's cauldron and candles \u2013 and a ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Halloween". Pumpkin, cauldron and candles glow with a linked light.`,pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_fur_dilute_calico:"Dilute calico",pet_fur_blue_grey:"Blue-grey",pet_eyes:"Eyes",pet_eyes_dark:"Dark eyes",pet_eyes_copper:"Copper eyes",pet_eyes_green:"Green eyes",pet_eyes_yellow:"Yellow eyes",pet_eyes_blue:"Blue eyes",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",pet_mode:"Behaviour",pet_roaming:"Roams the house",pet_static:"Stays at its spot",pet_pose:"Pose",pet_pose_sit:"Sitting",pet_pose_lie:"Lying",pet_pose_curl:"Curled up",pet_turn:"Facing",pet_turn_auto:"Automatic",pet_static_hint:"Drag it to its spot in the plan editor.",ext_active:"active",ext_open:"Open extensions",manual:"Manual",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs and the built-in features are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (module): the water glows in the colour of the pool light and moves while the filter pump runs; the glass card shows water temperature, heat pump with target, pH, chlorine/redox and salt with a traffic light; the cover slides over the water; warnings for pH, chlorine, salt and frost; the pool plant sets itself up at a tap and the water flows visibly through the pipes",pool_pump:"Filter pump",pool_ph:"pH value",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is not available.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",car_hint:'One entity of the car is enough: Home 3D finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is not part of this version.",pack_remove:"Remove",pack_bundled:"Comes with Home 3D",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan and keeps its look.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack: {detail}",pack_error_invalid_content:"The pack contains invalid data: {detail}",pack_error_too_large:"The pack is too large: {detail}",pack_error_too_many_items:"The pack has too many items: {detail}",pack_error_no_licence:"The pack declares no licence: {detail}",pack_error_not_data:"Packs hold data only (no code, pictures or links): {detail}",pack_error_no_pack:"There is no pack.json in this folder.",pack_error_needs_update:'This add-on needs a newer version of Home 3D. Please update first (HACS \u203A Home 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",pack_error_bad_url:"This is not a GitHub URL of a pack: {detail}",pack_error_not_found:"Not found on GitHub: {detail}",pack_error_fetch_failed:"Could not fetch from GitHub: {detail}",back_to_room:"Back to {room}",back_to_library:"Back to the library (add an item)",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add: {kind} (pick the kind on the right) \u2013 tap a door or window to select it, drag to slide it along the wall",hint_opening_add:"Tap to add here: {kind}",hint_opening_select:"Tap to select: {kind}",opening_overlap:"Not added: it would overlap an existing opening ({kind}). Tap that one to select it.",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",style_sectional:"Sectional door",style_up_and_over:"Up-and-over door",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_area_hint:"With an area the surface acts like a room: a tap in 3D opens it with the area's devices, it is in the room bar and wears its name.",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_end:"End",roof_end_auto:"as the shape",roof_end_gable:"Gable",roof_end_hint:"How the ridge ends at this end: a gable (an upright wall), a hip or a half-hip \u2013 a hip at one end only, for example.",roof_swap:"Swap sides",roof_turn:"Turn",roof_turn_hint:"Turns this roof part in the plan (clockwise), e.g. for a wing at an angle. Dormers and cross gables on it turn along. 0\xB0 = as before.",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",devices_hide_all:"Hide all {n} in the room panel",devices_show_all:"Show all {n} again",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",opening_position_from:"Centre from {corner} corner (m)",opening_next_kind:"Next door or window",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",sill_board:"Sill",sill_board_hint:"Automatic: a window board inside and a sill outside from a sill height of 30 cm; none for a window that sits directly on another one (transom light, split glass front).",sill_board_auto:"automatic",sill_board_none:"none",sill_board_inside:"inside only",sill_board_outside:"outside only",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_angle:"Opening angle",door_angle_hint:"How far the door stands open in 3D: without a sensor always, with one as soon as it reports open. Default: half open without a sensor, fully open with one.",door_angle_default:"Default",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",lib_room_all:"All rooms",lib_pack_all:"All packs",lib_room_living:"Living",lib_room_dining:"Dining",lib_room_kitchen:"Kitchen",lib_room_bedroom:"Bedroom",lib_room_kids:"Kids",lib_room_bath:"Bathroom",lib_room_office:"Office",lib_room_hall:"Hall",lib_room_utility:"Utility",lib_room_garage:"Garage",lib_room_garden:"Garden",lib_room_hobby:"Hobby & fitness",lib_room_conservatory:"Conservatory",lib_room_loft:"Loft",lib_kind_sofa:"Sofas",lib_kind_seating:"Seating",lib_kind_table:"Tables",lib_kind_storage:"Cabinets & shelves",lib_kind_bed:"Beds",lib_kind_kitchen:"Kitchen",lib_kind_appliance:"Appliances",lib_kind_bath:"Bathroom",lib_kind_lamp:"Lights",lib_kind_media:"TV & audio",lib_kind_office:"Office",lib_kind_tech:"Tech & smart home",lib_kind_network:"Network",lib_kind_heating:"Heating & climate",lib_kind_energy:"Energy",lib_kind_household:"Household",lib_kind_deco:"Decoration",lib_kind_tray:"Trays",lib_kind_frame:"Frames & pictures",lib_kind_vase:"Vases",lib_kind_cushion:"Cushions",lib_kind_throw:"Throws",lib_kind_candle:"Candles",lib_kind_plant:"Plants",lib_kind_outdoor:"Garden & outdoors",lib_kind_kids:"Kids",lib_kind_sport:"Fitness",lib_kind_pets:"Pets",lib_kind_vehicle:"Vehicles",lib_kind_stairs:"Stairs & railings",lib_kind_architecture:"Architecture",lib_recent:"Recently used",lib_favorites:"Favourites",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_chip_electric:"Linkable",lib_chip_light:"Lights up",lib_chip_outdoor:"Outdoors",lib_more:"Show {n} more",lib_update_title:"A newer release is installed: update the placed ones",lib_basic:"Basic",lib_sizes:"{n} sizes",lib_hint_room:"Suggested for the open room \u2013 switch above.",lib_filters:"Filters:",lib_clear_filters:"Clear filters",lib_other_rooms:"{n} more in other rooms",lib_hidden_by_filters:"{n} more hidden by filters",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_rise:"Rise (\xB0)",strip_rise_hint:"The strip rises along its length, e.g. up the stairs or along a handrail (~35\u201340\xB0). Its height above the floor is then its middle.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Bedside table",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Cooker",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV unit",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",furn_loft_ladder:"Loft ladder",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",walls_section:"Walls ({n})",walls_open_n:"{n} with no wall",walls_sloping_n:"{n} sloping",wall_slope:"Sloping",wall_slope_hint:"Sloping wall: a height of its own at each corner, the top runs straight between them \u2013 a lean-to, a slope, clerestory windows on the tall side. Windows and doors stay under the top.",wall_slope_start:"Height at corner {n} (m)",wall_slope_end:"Height at corner {n} (m)",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",furn_entity_camera:"Camera",furn_entity_heater:"Heating (thermostat or water heater)",furn_entity_sensor:"Sensor",furn_entity_car:"Car (charging, battery or location)",unplaced:"Unplaced entities",unplaced_hint:"Devices of your Home Assistant areas that the plan does not show yet. Place puts one into its area's room, or drag it onto the plan. A suggestion links it to an item in the room.",unplaced_none:"Everything is placed.",unplaced_no_room:"no room yet",unplaced_drag:"Drag onto the plan to place it there",unplaced_link:"Link to {name}",unplaced_hide:"Hide from this list",unplaced_hidden:"Hidden ({n})",unplaced_hidden_none:"Nothing hidden.",unplaced_unhide:"Unhide",unplaced_back:"Back to the list",lamp_hint:"Tap the lamp in 3D to switch it, long press for its Home Assistant details. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of Home 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"High contrast",theme_day:"Day",theme_realistic:"Realistic",theme_auto:"Auto (Day/Neon by the sun)",theme_theme:"HA theme (Day/Neon)",persons:"People",locate:"Locating",persons_figure:"Figure",persons_pin:"Pin",persons_off:"off",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_from:"Glow from (hour, the day before)",bin_until:"until (hour, on pickup day)",bin_out:"Put out (helper)",bin_out_hint:'Optional: on while the bin stands outside (input_boolean, switch or binary sensor). It then stops glowing and its tag says "put out \u2713"; a tap on the bin switches a helper or switch. A nightly automation turns it back off.',bin_out_done:"put out \u2713",bin_out_mark:"Mark as put out",bin_next_only:"Label only the next pickup",bin_days:"Show tags only \u2026 days before",bin_days_always:"always",bin_tags_hint:'For all bins. Bins without a tag still show in "Today in the household" and show their pickups when tapped.',hh_service2:"{name}: {what} due",hh_service2_entity:"Second service (e.g. dock)",hh_service2_min:"Second due at (\u2264 percent or days)",bin_none:"No pickup in sight",hh_title:"Today in the household",hh_notes:"Pinboard (text helper)",hh_notes_hint:'A text helper (input_text) or sensor whose text stands in "Today in the household" \u2013 separate several lines with |. Automations write into it ("parcel is in the garage"), the card shows it.',heat_sensor:"Heating (sensor)",heat_sensor_hint:'When the thermostat does not say whether it heats (Tuya valves report a "work state"), pick that sensor here: on/opened/heating or an opening above 0 % makes the radiator glow.',door_lock:"Smart lock",door_lock_hint:"The door's lock (Nuki, Aqara \u2026): a pin at the door shows locked or open, a tap locks or unlocks.",door_lock_btn:"Lock",door_unlock_btn:"Unlock",door_lock_confirm:"Really lock {name}?",door_unlock_confirm:"Really unlock {name}?",garage_pulse_hint:"A switch or button as the drive: a tap on the door gives it a pulse (a switch is turned on, a button pressed); whether the door is open comes from the contact.",clock:"Clock",clock_off:"Off",clock_tl:"\u2196 clock",clock_tr:"\u2197 clock",clock_bl:"\u2199 clock",clock_br:"\u2198 clock",editor_floor:"Editor's start floor",editor_floor_auto:"First of the list",editor_floor_hint:"The floor the editor opens with.",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",card_rack_cards:"Rack cards",rack_card_online:"Devices online",rack_card_values:"Card values \xB7 {n}/{max}",rack_card_values_hint:"What the glass card over the rack shows in 3D.",rack_card_rack:"Whole rack",rack_card_default:"Default values",rack_card_hottest:"Hottest",rack_kind_status:"Status",rack_kind_load:"Load",rack_kind_battery:"Battery",rack_kind_runtime:"Runtime",rack_kind_power:"Power",rack_kind_temperature:"Temperature",rack_kind_cpu:"CPU",rack_kind_memory:"Memory",rack_kind_disk:"Volume",rack_kind_throughput:"Throughput",rack_kind_uptime:"Up since",card_rack_cards_hint:"Glass card over every rack with linked gear: UPS, temperature, devices online \u2026",furn_waste_bin:"Waste bin",furn_mailbox:"Letterbox",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",tech_mount:"Mounting",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_status:"Status (connection, state)",ap_clients_sensor:"Sensor: connected clients",ap_clients:"{n} clients",ap_offline:"Offline",pin_standby:"Standby",ap_hint:"The ring glows blue while the access point is there and red when it is gone \u2013 its symbol then shows too. Diagnostic entities (UniFi's, for example) are offered here as well.",heater_entity:"Device (water_heater, thermostat or switch)",heater_temp:"Sensor: water temperature (optional)",heater_hint:"The tank glows warm while it heats (thermostat heating, switch on or power above the threshold) and shows the water temperature \u2013 from the sensor or from the device itself.",furn_lamp_fan:"Ceiling fan with light",fan_entity:"Fan (fan entity)",fan_hint:"The light above switches the lamp. With a fan its blades turn with its speed, and it gets a symbol of its own beside it: a tap switches it, a long press opens its details (with the speed).",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_group_switches:"Home technology",wv_cat_switches:"Switches",gang_count_switch:"Buttons in the frame",gang_count_socket:"Sockets in the frame",socket_kind:"Kind",socket_indoor:"Indoor",socket_outdoor:"Outdoor socket with lid",gang_switch:"Button switches",gang_socket:"Socket switches",gang_switch_hint:"Every button gets its own entity (a light, a switch, a fan) and glows while it is on \u2013 a light in its colour. A tap switches it; with several buttons a small menu opens.",gang_socket_hint:"Every socket gets its own entity (the relay, the smart plug) and, if you like, a power sensor; it glows green while it is on. The same entity may sit on several sockets \u2013 two sockets on one relay.",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:'The bin glows from the set hour the day before until the hour on pickup day (for all bins); its pin says "Today" or "Tomorrow", a tap on the bin shows its next pickups. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.',bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",pro_name_household:"Household Pro",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',awning_cover:"Awning (cover)",motor_cover:"Motor (cover)",curtain_side:"Opens to",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",motor_time:"Run time (s)",motor_invert_hint:"For covers that report 100 % while the curtain is closed or the screen is down.",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall unit",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Tumble dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_soon:"coming soon",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_dim:"Dim the solar grid over the plan",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",show_when:"When it shows",show_when_entity:"Only while available",show_from:"From",show_to:"To",show_start:"From",show_end:"Until",show_add_interval:"Interval",show_when_hint:"With no rule it always shows. With an entity it hides while that entity is unavailable; with intervals it shows only inside them. Days count every year, whatever year the picker shows (Dec to Jan runs over the new year); times count every day (22:00 to 06:00 runs over midnight).",colours:"Colours and materials",colours_hint:'Each colour role follows the look until you give it a colour of its own. "From the look" sets it back. The material beside it shows in the realistic look.',colour_theme:"From the look",colour_own:"Own colour",material_of:"Material: {role}",material_usual:"Usual ({material})",material_matt:"Matt",material_gloss:"Gloss",material_fabric:"Fabric",material_glass:"Glass",material_metal:"Metal",material_rattan:"Rattan weave",colour_role_body:"Body",colour_role_fabric:"Fabric",colour_role_cushion:"Cushion",colour_role_wood:"Wood",colour_role_white:"White",colour_role_metal:"Metal",colour_role_dark:"Dark",colour_role_glass:"Glass",colour_role_plant:"Plant",colour_role_pot:"Pot",colour_role_accent:"Accent",colour_role_paint:"Paint",paint_hex:"Hex colour",paint_white:"White",paint_black:"Black",paint_silver:"Silver",paint_grey:"Grey",paint_blue:"Blue",paint_red:"Red",paint_green:"Green",paint_orange:"Yellow/orange",paint_bronze:"Brown/bronze",paint_dark_blue:"Dark blue",colour_preset_oak:"Oak",colour_preset_walnut:"Walnut",colour_preset_rattan:"Rattan",colour_preset_white_gloss:"White gloss",colour_preset_black:"Black",colour_preset_grey_fabric:"Grey fabric",colour_preset_beige_fabric:"Beige fabric",colour_preset_navy_fabric:"Navy fabric",colour_preset_green_velvet:"Green velvet",colour_preset_brass:"Brass",colour_preset_chrome:"Chrome",colour_preset_terracotta:"Terracotta",colour_preset_black_brown:"Black-brown",colour_preset_white_stained_oak:"White stained oak",colour_preset_birch:"Birch",colour_preset_pine:"Pine",colour_preset_acacia:"Acacia",colour_preset_anthracite:"Anthracite",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_meter_reading:"Meter reading (m\xB3 or litres)",energy_circuit:"Inside circuit",energy_circuit_hint:"The power sensor of the circuit this device is on (a circuit monitor's channel). Its watts are already in that circuit's, so the cables and the house total don't count them twice.",energy_circuit_unset:"No circuit chosen: if this device is on a circuit monitor's channel, its watts are counted twice until you choose it here.",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stair_open:"Open treads (no risers)",stair_turn:"Turn at the bottom",stair_turn_none:"None (straight)",stair_turn_left:"Enter from the left",stair_turn_right:"Enter from the right",stair_turn_hint:"The first three steps wind round the corner as winders, entered from the chosen side. Needs a flight longer than it is wide.",stair_landing:"Bottom landing (steps)",stair_landing_hint:"The bottom square becomes a flat landing that many steps up, reached from the side; the flight climbs on from there. Replaces the turn.",stair_top:"Flat top (m)",stair_top_hint:"The top step runs on flat to the back for this long, like a landing in front of the floor above.",stair_start:"Start height (m)",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_cheap_rate:"Cheap rate (on = cheap)",energy_cheap_from:"Cheap from",energy_cheap_to:"until",energy_cheap_hint:"A badge shows while the cheap rate runs: a binary sensor, schedule or switch that is on then \u2013 or, without one, a daily window (22:00 to 06:00 runs over midnight). Nothing set: no badge.",energy_wire_sensor:"Energy sensor (kWh) for today",energy_wire_sensor_hint:"Its use today shows at the end of its energy cable (hover or tap it). Automatic: the device's energy sensor; without one, worked out from the power sensor's statistics.",cheap_rate:"Cheap rate",cheap_rate_now:"now",wire_today:"Today",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};var Sf=["de","fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],Mf=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:Xn,pending:Jr}=Mf;function Xr(o){let e=(o??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Sf.includes(t)?t:null}function yn(o){let e=Xr(o);return!e||Xn.has(e)}function oi(o){let e=Xr(o);if(!e||Xn.has(e))return Promise.resolve();let t=Jr.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=04bd7b3a06a2`,import.meta.url).href;t=fetch(n).then(r=>r.ok?r.json():{}).then(r=>{Xn.set(e,r&&typeof r=="object"?r:{})}).catch(()=>{Xn.set(e,{})}).finally(()=>Jr.delete(e)),Jr.set(e,t)}return t}function M(o,e,t={}){let n=Xr(o?.language??navigator.language),i=(n?Xn.get(n):void 0)?.[e]??$f[e]??e;for(let[s,a]of Object.entries(t))i=i.replace(`{${s}}`,String(a));return i}function ie(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var Tf=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],If=["fun_pets","fun_halloween"],Pf=["pool"];function Zr(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("home3d.lab","1"):o==="0"&&localStorage.removeItem("home3d.lab"),localStorage.getItem("home3d.lab")==="1"}catch{return!1}}function Pc(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("home3d.projection","1"):o==="0"&&localStorage.removeItem("home3d.projection"),localStorage.getItem("home3d.projection")==="1"}catch{return!1}}function ii(o){return!Pf.includes(o)||o!=="diagnostics"&&o!=="locate"&&B(o)||Zr()}var Af=["fridge_smart"];function Ef(o){return Tf.includes(o)||Af.includes(o)||If.includes(o)}var Rf=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","household","fridge_smart","fun_pets","fun_halloween"];function Hf(o=ft()){let e=new Set(Rf);for(let t of o)for(let n of t.features??[])Ef(n)&&e.add(n);return e}function B(o,e){return Hf(e).has(o)}function ts(o){return o?.settings.person_look??"figure"}function ri(o){return ts(o)!=="off"}var Ac=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function es(o){let e=0;for(let t of o)e=e*31+t.charCodeAt(0)>>>0;return Ac[e%Ac.length]}var Ec=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Ff(o,e,t){let n=Ec(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let r of e.floors)for(let i of r.rooms)if([i.name,i.area_id??"",i.area_id?o.areas?.[i.area_id]?.name??"":""].filter(Boolean).map(Ec).includes(n))return{floorId:r.id,room:i};return null}function Rc(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Cf(o){return!["home","on","unknown","unavailable",""].includes(o)}function Hc(o,e){let t=[],n=new Map;for(let r of e.presence){let i=o.states[r.person];if(!i||!r.sensor||i.state!=="home"&&i.state!=="on")continue;let s=o.states[r.sensor];if(!s)continue;let a=Ff(o,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=Fe(a.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,h=i.attributes.friendly_name??r.person;t.push({id:r.person,name:h,initials:Rc(h),picture:i.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(u)*p,z:d+Math.sin(u)*p})}return t}function si(o,e,t=new Set,n=Date.now()){let r=[];for(let[u,p]of Object.entries(o.states)){let h=p.attributes;if(!u.startsWith("sensor.")||h.home3d_locate!==!0||typeof h.room_id!="string")continue;let _=null;for(let v of e.floors){let w=v.rooms.find(f=>f.id===h.room_id);w&&(_={floorId:v.id,room:w})}if(!_)continue;let b=typeof h.last_seen=="string"?Date.parse(h.last_seen):NaN,m=typeof h.since=="string"?Date.parse(h.since):NaN;r.push({entityId:u,name:typeof h.device_name=="string"?h.device_name:u,person:typeof h.person=="string"?h.person:null,floorId:_.floorId,room:_.room,seen:Number.isFinite(b)?b:0,since:Number.isFinite(m)?m:0,probability:typeof h.probability=="number"?h.probability:0,worn:h.wearable===!0})}let i=[],s=new Map,a=new Map,l=(u,p)=>{let h=s.get(u.room.id)??0;if(s.set(u.room.id,h+1),!p.thing){let v=a.get(u.room.id);v||a.set(u.room.id,v=Wf(o,e,u.floorId,u.room));let w=v.shift();if(w){i.push({...p,floorId:u.floorId,roomId:u.room.id,x:w[0],z:w[1]});return}}let[_,b]=Fe(u.room.points),m=-Math.PI/2+.9+h*1.15;i.push({...p,floorId:u.floorId,roomId:u.room.id,x:_+Math.cos(m)*.75,z:b+Math.sin(m)*.75})},c=(u,p)=>l(u,{id:u.entityId,name:u.name,initials:u.name.slice(0,1).toUpperCase(),picture:null,color:p,entity:u.entityId,tag:u.name,thing:!0}),d=new Map;for(let u of r)u.person?d.set(u.person,[...d.get(u.person)??[],u]):c(u,es(u.entityId));for(let[u,p]of d){if(t.has(u))continue;let h=o.states[u];if(h&&Cf(h.state))continue;let _=x=>x.reduce((P,R)=>R.seen>P.seen?R:P),b=p.filter(x=>x.worn&&n-x.seen<12e4),m=_(b.length?b:p),v=x=>n-x.seen<3e4&&n-m.seen<3e4&&x.since>=m.since-12e4,w=null;if(m.worn){let x=p.filter(R=>!R.worn&&R.room.id!==m.room.id&&v(R)),P=x.length?x.reduce((R,z)=>z.probability>R.probability?z:R):null;P&&n-m.since>=6e5&&P.since>m.since+12e4?(w=m,m=P):P&&P.probability>m.probability+.15&&(m=P)}let f=h?.attributes.friendly_name??m.name;l(m,{id:u,name:f,initials:Rc(f),picture:h?.attributes.entity_picture??null,color:es(u),entity:m.entityId,tag:f.split(/\s+/)[0]});for(let x of p)x===m||x.room.id===m.room.id||x!==w&&(x.worn&&n-x.seen<12e4||v(x))||c(x,es(u))}return i}var zf=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],Of=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function Df(o,e){let t=[],[n,r]=Fe(e.points),i=(s,a)=>s.points.some((l,c)=>{let d=s.points[(c+1)%s.points.length],[u,p]=[d[0]-l[0],d[1]-l[1]],h=u*u+p*p||1,_=Math.max(0,Math.min(1,((a[0]-l[0])*u+(a[1]-l[1])*p)/h));return Math.hypot(l[0]+_*u-a[0],l[1]+_*p-a[1])<.3});for(let s of o.openings){if(s.wall||s.type==="window"&&s.sill>.3||s.type==="garage")continue;let a=o.rooms.find(_=>_.id===s.room_id);if(!a)continue;let l=a.points[s.edge],c=a.points[(s.edge+1)%a.points.length];if(!l||!c)continue;let d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[l[0]+(c[0]-l[0])*s.offset/d,l[1]+(c[1]-l[1])*s.offset/d];if(!i(e,u))continue;let p=o.rooms.find(_=>_.id!==e.id&&i(_,u)),h=.6/(Math.hypot(n-u[0],r-u[1])||1);t.push({to:p?xn(p.name):null,spot:[u[0]+(n-u[0])*h,u[1]+(r-u[1])*h]})}return t}var Lf=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],xn=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function Wf(o,e,t,n){let r=e.floors.find(c=>c.id===t);if(!r||!n.area_id)return[];let i=r.furniture.filter(c=>q([c.x,c.z],n.points)),s=Df(r,n),a=[],l=new Set([...xn(n.name),...xn(o.areas?.[n.area_id]?.name??""),...xn(n.area_id),...Lf]);for(let[c,d]of Object.entries(o.states)){if(!c.startsWith("binary_sensor.")||d.state!=="on")continue;let u=d.attributes.device_class;if(u!=="occupancy"&&u!=="presence")continue;let p=o.entities?.[c];if((p?.area_id??(p?.device_id?o.devices?.[p.device_id]?.area_id:null))!==n.area_id)continue;let _=new Set(xn(String(d.attributes.friendly_name??c.slice(14))).filter(w=>!l.has(w))),b=i.find(w=>w.name&&xn(w.name).some(f=>_.has(f))||zf.some(([f,x])=>f.test(w.type.split(":").pop()??"")&&x.some(P=>_.has(P)))),m=b?null:s.find(w=>w.to?w.to.some(f=>_.has(f)):[..._].some(f=>Of.some(x=>f.includes(x)))),v=b?[b.x,b.z]:m?m.spot:null;v&&!a.some(([w,f])=>w===v[0]&&f===v[1])&&a.push(v)}return a}function Fc(o,e,t,n){let r=new Map,i=s=>!!s&&o.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of Jo(o,_e(o,c.area_id)))W(d)==="light"&&a.add(d);for(let c of s.placements)W(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);if(!d)return!1;if(c.type==="garage")return(rt(o,d,"garage").cover??1)<.95;if(c.type==="door")return i(d.contact)||i(d.contact2??null);let u=rt(o,d,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;r.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>o.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return r}function Cc(o,e){let t=[e.rooms===1?M(o,"floor_rooms_one"):M(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(M(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(M(o,"floor_open",{n:e.open})),e.persons&&t.push(M(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var zc={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function ai(o){return zc[o]}function st(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function Nt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${zc[o]}"/></svg>`}var bt=(o,e)=>M(o,e);function ue(o,e){if(!e||Y(e))return bt(o,"state_unavailable");let t=e.attributes;switch(W(e.entity_id)){case"light":return e.state!=="on"?bt(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:bt(o,"state_on");case"switch":case"fan":return bt(o,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:li(o,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${ie(o,t.current_temperature,1)} ${o?Re(o):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${bt(o,"state_off")}`:bt(o,"state_off"):n??li(o,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",r=[t.app_name,t.media_title,t.source].find(i=>typeof i=="string"&&i);return n&&r?r:li(o,e.state)}case"lock":case"camera":return li(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?bt(o,e.state==="on"?"state_open":"state_closed"):bt(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),r=t.unit_of_measurement??"",i=o?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${ie(o,n,i)}${r?` ${r}`:""}`:e.state}default:return""}}function li(o,e){let t=`state_${e}`,n=M(o,t);return n===t?e:n}function Oc(o,e){let t=[],n=new Set(e.floors.flatMap(r=>r.furniture.map(i=>i.look_of).filter(i=>!!i)));for(let r of e.floors)for(let i of r.placements){let s=W(i.entity_id),a=o.states[i.entity_id];if(!s||!a)continue;let l=r.rooms.find(d=>d.points.length>=3&&q([i.x,i.z],d.points))??null,c=l?.area_id?o.areas?.[l.area_id]?.name:void 0;t.push({id:i.entity_id,floorId:r.id,roomId:l?.id??null,x:i.x,z:i.z,y:i.y??_n(s,r.height,i.mount??null),lamp:s==="light"?i.mount??"ceiling":null,model:s==="camera"?i.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...s==="camera"&&n.has(i.entity_id)?{ownLook:!0}:{},motion:s==="camera"?Nf(o,i.entity_id):void 0,fov:i.fov??void 0,reach:i.reach??void 0,tilt:i.tilt??void 0,rotation:i.rotation??0,icon:i.icon?st(i.icon):Nt(s),cone:s==="camera"&&i.cone===!1?!1:void 0,name:i.name||j(o,i.entity_id,c),ownName:i.name||void 0,showName:!!i.show_name,text:ue(o,a),active:Ce(a),unavailable:Y(a),glow:s==="light"?os(it(a),i.glow_scale):null,show:i.marker??void 0,fixed:!!i.locked})}return t}function ns(o,e){let t=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Nf(o,e){return at(o,e).some(t=>o.states[t]?.state==="on")}var Dc=new Map;function Lc(o){Dc=new Map(o?.floors.flatMap(e=>e.placements.filter(t=>Array.isArray(t.detect_sensors)).map(t=>[t.entity_id,t.detect_sensors]))??[])}function at(o,e){return Dc.get(e)??Vf(o,e)}function Vf(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}function Wc(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function $e(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function ci(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function os(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}function Bf(o,e,t){let n=o.q[0]-o.p[0],r=o.q[1]-o.p[1],i=n*n+r*r,s=i>0?Math.min(1,Math.max(0,((e-o.p[0])*n+(t-o.p[1])*r)/i)):0;return o.h0+(o.h1-o.h0)*s}var ze=(o,e)=>[o[0]-e[0],o[1]-e[1]],wt=(o,e)=>[o[0]+e[0],o[1]+e[1]],lt=(o,e)=>[o[0]*e,o[1]*e],di=(o,e)=>o[0]*e[0]+o[1]*e[1],Vt=(o,e)=>o[0]*e[1]-o[1]*e[0],Zn=o=>Math.hypot(o[0],o[1]),vt=o=>{let e=Zn(o)||1;return[o[0]/e,o[1]/e]},Nc=o=>[-o[1],o[0]],Vc=o=>[o[1],-o[0]];function yt(o,e,t=[]){let n=e.eps??.005,r=[],i=t.filter($=>Math.hypot($.b[0]-$.a[0],$.b[1]-$.a[1])>.05),s=[],a=$=>{for(let E=0;E<s.length;E++)if(Math.abs(s[E][0]-$[0])<=n&&Math.abs(s[E][1]-$[1])<=n)return E;return s.push([$[0],$[1]]),s.length-1},l=[];for(let $ of o){let E=$.points;if(E.length<3||Math.abs(qe(E))<1e-6)continue;let S=qe(E)>0,T=E.map(a);for(let A=0;A<E.length;A++){let U=T[A],G=T[(A+1)%E.length];U!==G&&l.push(S?{u:U,v:G,room:$.id,edge:A,forward:!0}:{u:G,v:U,room:$.id,edge:A,forward:!1})}}let c=i.map($=>[a($.a),a($.b)]),d=new Set;for(let $ of o){let E=$.points;E.length<3||($.wall_splits??[]).forEach((S,T)=>{if(!S||T>=E.length)return;let A=E[T],U=ze(E[(T+1)%E.length],A),G=Zn(U);for(let H of S)H>n&&H<G-n&&d.add(a(wt(A,lt(U,H/G))))})}let u=[];for(let $ of l){let E=s[$.u],S=s[$.v],T=ze(S,E),A=Zn(T),U=lt(T,1/A),G=[];for(let K=0;K<s.length;K++){if(K===$.u||K===$.v)continue;let N=ze(s[K],E),te=di(N,U);te<=n||te>=A-n||Math.abs(Vt(U,N))<=n&&G.push({t:te,id:K})}G.sort((K,N)=>K.t-N.t);let H=[{t:0,id:$.u},...G,{t:A,id:$.v}];for(let K=0;K+1<H.length;K++){let N=H[K],te=H[K+1],X=$.forward?N.t:A-te.t,ve=$.forward?te.t:A-N.t;u.push({u:N.id,v:te.id,room:$.room,edge:$.edge,t0:X,t1:ve})}}let p=new Map;for(let $ of u){let E=$.u<$.v?`${$.u}-${$.v}`:`${$.v}-${$.u}`,S=p.get(E);S||p.set(E,S=[]),S.push($)}let h=$=>({room_id:$.room,edge:$.edge,t0:$.t0,t1:$.t1}),_=new Map;for(let $ of u){let E=`${$.room}:${$.edge}`;_.set(E,[..._.get(E)??[],$.t0].sort((S,T)=>S-T))}let b=$=>{let E=o.find(T=>T.id===$.room)?.wall_heights?.[$.edge];if(!Array.isArray(E))return E;let S=_.get(`${$.room}:${$.edge}`)??[];return E[S.indexOf($.t0)]??null},m=$=>{let E=$.map(b).filter(T=>typeof T=="number"&&T>0);if(E.length)return Math.min(...E);let S=$.map(T=>o.find(A=>A.id===T.room)?.ceiling_height);return S.every(T=>typeof T=="number"&&T>0)?Math.max(...S):void 0},v=$=>{let E=$.map(S=>o.find(T=>T.id===S.room)?.wall_thickness?.[S.edge]).filter(S=>typeof S=="number"&&S>0);return E.length?Math.max(...E):void 0},w=$=>{for(let E of $){let S=o.find(G=>G.id===E.room),T=S?.wall_slopes?.[E.edge];if(!S||!T)continue;let A=S.points[E.edge],U=S.points[(E.edge+1)%S.points.length];return{p:[A[0],A[1]],q:[U[0],U[1]],h0:Math.max(.05,T[0]),h1:Math.max(.05,T[1])}}},f=$=>$.some(E=>b(E)===0),x=$=>{let E=w($);return E?{height:Math.max(E.h0,E.h1),slope:E}:{height:m($)}},P=[],R=[];for(let $ of p.values()){let E=$[0],S=$.find(T=>T!==E&&T.u===E.v&&T.v===E.u&&T.room!==E.room);for(let T of $)T!==E&&T!==S&&T.room!==E.room&&r.push(`overlap:${E.room}:${T.room}`);if(f(S?[E,S]:[E])){S&&P.push([E.room,S.room]);continue}if(S){let T=v([E,S])??e.interior;R.push({a:E.u,b:E.v,left:T/2,right:T/2,exterior:!1,roomLeft:E.room,roomRight:S.room,sources:[h(E),h(S)],...x([E,S])})}else R.push({a:E.u,b:E.v,left:0,right:v([E])??e.exterior,exterior:!0,roomLeft:E.room,roomRight:null,sources:[h(E)],...x([E])})}let z=$=>vt(ze(s[$.b],s[$.a])),D=new Set;for(let $ of R){if($.exterior||$.free)continue;let E=new Set;for(let T of[$.a,$.b])for(let A of R)!A.exterior||A.free||A.a!==T&&A.b!==T||Math.abs(Vt(z($),z(A)))>1e-6||(A.roomLeft===$.roomLeft?E.add("left"):A.roomLeft===$.roomRight&&E.add("right"));if(E.size!==1)continue;let S=$.left+$.right;E.has("left")?($.left=0,$.right=S):($.left=S,$.right=0),D.add($)}for(let $ of[...D]){let E=[$];for(;E.length;){let S=E.pop();for(let T of[S.a,S.b])for(let A of R){if(A===S||A.exterior||A.free||D.has(A)||A.a!==T&&A.b!==T||Math.abs(Vt(z(S),z(A)))>1e-6)continue;let U=A.left+A.right,G=S.right===0==di(z(S),z(A))>0;A.left=G?U:0,A.right=G?0:U,D.add(A),E.push(A)}}}i.forEach(($,E)=>{let[S,T]=c[E];if(S===T)return;let A=[($.a[0]+$.b[0])/2,($.a[1]+$.b[1])/2],U=o.find(K=>K.points.length>=3&&q(A,K.points))?.id??null,G=($.thickness??e.interior)/2,H=typeof $.height=="number"&&$.height>0?$.height:void 0;R.push({free:$.id,a:S,b:T,left:G,right:G,exterior:!1,roomLeft:U,roomRight:U,sources:[],height:H})}),R=qf(R,s,d);let O=Kf(R,s);return{walls:R.map(($,E)=>{let S=s[$.a],T=s[$.b],A=O.get(`${E}:a`),U=O.get(`${E}:b`),G=Gf([A.right,U.left,T,U.right,A.left,S],1e-6);return{id:Uf(S,T),a:[S[0],S[1]],b:[T[0],T[1]],left:$.left,right:$.right,exterior:$.exterior,roomLeft:$.roomLeft,roomRight:$.roomRight,sources:$.sources,footprint:G,...$.free?{free:$.free}:{},...$.height!==void 0?{height:$.height}:{},...$.slope?{slope:$.slope}:{}}}),warnings:[...new Set(r)],open:P}}function Uf(o,e){let t=i=>Math.round(i*100),[n,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Bc(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function qf(o,e,t=new Set){let n=o.slice(),r=!0;for(;r;){r=!1;let i=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=i.get(l);c||i.set(l,c=[]),c.push(a)}});for(let[s,a]of i){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=Bc(l)),c.a!==s&&(c=Bc(c)),l.a===c.b)continue;let d=vt(ze(e[l.b],e[l.a])),u=vt(ze(e[c.b],e[c.a]));if(Math.abs(Vt(d,u))>1e-6||di(d,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let p={...l,b:c.b,sources:jf(l.sources,c.sources)},h=n.filter((_,b)=>b!==a[0]&&b!==a[1]);h.push(p),n.length=0,n.push(...h),r=!0;break}}return n}function jf(o,e){let t=o.map(n=>({...n}));for(let n of e){let r=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Kf(o,e){let t=new Map;o.forEach((r,i)=>{let s=vt(ze(e[r.b],e[r.a])),a=[[r.a,{key:`${i}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${i}:b`,d:lt(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[r,i]of t){let s=e[r];i.sort((c,d)=>c.angle-d.angle);let a=c=>({left:wt(s,lt(Nc(c.d),c.left)),right:wt(s,lt(Vc(c.d),c.right))});for(let c of i)n.set(c.key,a(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],u=i[(c+1)%i.length],p=wt(s,lt(Nc(d.d),d.left)),h=wt(s,lt(Vc(u.d),u.right)),_=Vt(d.d,u.d);if(Math.abs(_)<1e-4)continue;let b=Vt(ze(h,p),u.d)/_,m=wt(p,lt(d.d,b));Zn(ze(m,s))>l||(n.get(d.key).left=m,n.get(u.key).right=m)}}return n}function Gf(o,e){let t=o.filter((r,i)=>Zn(ze(r,o[(i+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let i=t[(r+t.length-1)%t.length],s=t[r],a=t[(r+1)%t.length],l=ze(s,i),c=ze(a,s);if(Math.abs(Vt(vt(l),vt(c)))<1e-7&&di(l,c)>0){t=t.filter((d,u)=>u!==r),n=!0;break}}}return t}function ui(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length],i=vt(ze(r,n));return wt(n,lt(i,t))}function Uc(o,e,t){if(o.wall){let r=t.find(a=>a.id===o.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let i=vt(ze(r.b,r.a));return{room:{id:o.room_id,name:"",area_id:null,points:[r.a,r.b,wt(r.a,[-i[1],i[0]])]},edge:0}}let n=e.find(r=>r.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function qc(o,e,t,n){let r=e.rotation*Math.PI/180,i=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,e.d),a=null;for(let c of o){let d=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(d<.05)continue;let u=[(c.b[0]-c.a[0])/d,(c.b[1]-c.a[1])/d],p=(e.x-c.a[0])*u[0]+(e.z-c.a[1])*u[1];if(p<-.02||p>d+.02)continue;let h=[-u[1],u[0]],_=(e.x-c.a[0])*h[0]+(e.z-c.a[1])*h[1],b=i[0]*h[0]+i[1]*h[1]>=0?1:-1;if(Math.abs(i[0]*h[0]+i[1]*h[1])<.5)continue;let m=b>0?c.left:-c.right,v=_>-c.right-1e-4&&_<c.left+1e-4,w=Math.abs(_-(m+b*(s/2)));if(!v&&w>.03||a&&w>=a.off)continue;let f=c.a[0]+u[0]*p,x=c.a[1]+u[1]*p,P=v?m+b*(s/2):_,R=c.slope?Bf(c.slope,e.x,e.z):Math.min(t,c.height??t);a={x:f+h[0]*P,z:x+h[1]*P,top:R,off:w}}if(!a)return{x:e.x,z:e.z,y:n};let l=e.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-e.h-.02)):n;return{x:a.x,z:a.z,y:l}}var xt=Math.PI/180;function jc(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let t=e*xt;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(t),s:Math.sin(t)}}function Kc(o,e,t=!1){if(!o)return e;let n=e[0]-o.p[0],r=e[1]-o.p[1],i=t?-o.s:o.s;return[o.p[0]+n*o.c-r*i,o.p[1]+n*i+r*o.c]}function Bt(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1),i=jc(o),s=o.axis==="x"?(l,c)=>[l,o.flip?r-c:n+c]:(l,c)=>[o.flip?t-c:e+c,l],a=i?(l,c)=>Kc(i,s(l,c)):s;return o.axis==="x"?{u0:e,u1:t,w:r-n,at:a}:{u0:n,u1:r,w:t-e,at:a}}function Yf(o,e,t,n=1e-6){let[r,i]=Xc(o,e,t),s=Bt({...o,rotation:0});return r>=s.u0-n&&r<=s.u1+n&&i>=-n&&i<=s.w+n}function kn(o){let e=Bt(o).w,t=o.eave_a,n=o.eave_b,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xt),i=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xt);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(o.shape==="mansard"){let l=Jc(e,t,n,r,i);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(r+i))):e/2,a=t+s*r;return{vr:s,rh:a,y:l=>l<=s?t+l*r:n+(e-l)*i}}function is(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var Gc=.14;function Yc(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function rs(o,e){return kn(o).rh-Gc>e+.01}function Qc(o,e,t,n){let r=null,i=Math.max(0,o.settings.roof.overhang??0);for(let s of is(o)){if(s.open||n!==void 0&&!rs(s,n)||!Yf(s,e,t)||s.points&&s.points.length>=3&&!q([e,t],s.points))continue;let[a,l]=Xc(s,e,t),c=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??i),p=((c?null:Jf(Qf(s,{u0:d,u1:d,a:d,b:d}),a,l))??kn(s).y(l))-Gc;r=r===null?p:Math.max(r,p)}return r}var eo=Math.tan(30*xt);function Jc(o,e,t,n,r){let i=Math.min(o*.3,n>1e-6?2.4/n:o*.3),s=Math.min(o*.3,r>1e-6?2.4/r:o*.3),a=e+i*n,l=t+s*r,c=Math.min(o-s,Math.max(i,(l-a+eo*(o-s+i))/(2*eo))),d=a+(c-i)*eo;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:p=>p<=i?e+p*n:p<=c?a+(p-i)*eo:p<=o-s?l+(o-s-p)*eo:t+(o-p)*r}}function Qf(o,e){let t=Bt(o),n=kn(o),r=t.w,i=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(H,K)=>[H,K,n.y(K)],d=c(a,-i),u=c(l,-i),p=c(l,r+s),h=c(a,r+s),_=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xt),b=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xt);if(o.shape==="pent"){let H=[d,u,p,h],K=[[0,n.y(0)],[r,n.y(r)]];return{faces:[H],rim:H,ridges:[[p,h]],gable:K,gables:[K,K]}}if(o.shape==="pyramid"){let H=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[d,u,H],[u,p,H],[p,h,H],[h,d,H]],rim:[d,u,p,h],ridges:[[d,H],[h,H],[u,H],[p,H]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let H=Jc(r,o.eave_a,o.eave_b,_,b),K=[[0,n.y(0)],[H.vla,H.yla],[H.vr,H.rh],[r-H.vlb,H.ylb],[r,n.y(r)]],N=[a,H.vla,H.yla],te=[l,H.vla,H.yla],X=[a,r-H.vlb,H.ylb],ve=[l,r-H.vlb,H.ylb],he=[a,H.vr,H.rh],ae=[l,H.vr,H.rh];return{faces:[[d,u,te,N],[N,te,ae,he],[he,ae,ve,X],[X,ve,p,h]],rim:[d,u,te,ae,ve,p,h,X,he,N],ridges:[[he,ae],[N,te],[X,ve]],gable:K,gables:[K,K]}}let[m,v]=ss(o)??["gable","gable"],w=as(o,[m,v]),f=m==="gable"?[a,n.vr,n.rh]:[t.u0+w.d0,n.vr,n.rh],x=v==="gable"?[l,n.vr,n.rh]:[t.u1-w.d1,n.vr,n.rh],P=[a,w.vah,w.yh],R=[a,w.vbh,w.yh],z=[l,w.vah,w.yh],D=[l,w.vbh,w.yh],O=m==="halfhip",F=v==="halfhip",$=[[d,u,...F?[z]:[],x,f,...O?[P]:[]],[f,x,...F?[D]:[],p,h,...O?[R]:[]]];m==="hip"&&$.push([h,d,f]),O&&$.push([R,P,f]),v==="hip"&&$.push([u,p,x]),F&&$.push([z,D,x]);let E=[d,u,...v==="gable"?[x]:F?[z,D]:[],p,h,...m==="gable"?[f]:O?[R,P]:[]],S=[[f,x]];m==="hip"&&S.push([d,f],[h,f]),O&&S.push([P,f],[R,f]),v==="hip"&&S.push([u,x],[p,x]),F&&S.push([z,x],[D,x]);let T=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],A=[[0,n.y(0)],[w.vah,w.yh],[w.vbh,w.yh],[r,n.y(r)]],U=H=>H==="gable"?T:H==="halfhip"?A:null,G=[U(m),U(v)];return{faces:$,rim:E,ridges:S,gable:G[0]??G[1],gables:G}}function ss(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(o.end_u0),t(o.end_u1)]}function as(o,e){let t=Bt(o),n=kn(o),r=t.w,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xt),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xt),a=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),d=c+(n.rh-c)*.55,u=i>1e-6?Math.min(n.vr,(d-o.eave_a)/i):n.vr,p=s>1e-6?Math.max(n.vr,r-(d-o.eave_b)/s):n.vr,h=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),_=Math.min(l-.1,(n.rh-d)/Math.max(.2,i)),b=m=>m==="hip"?h:m==="halfhip"?_:0;return{d0:b(e[0]),d1:b(e[1]),yh:d,vah:u,vbh:p}}function Jf(o,e,t){let n=null;for(let r of o.faces){if(!q([e,t],r.map(w=>[w[0],w[1]])))continue;let[i,s]=r,a=r.slice(2).find(w=>Math.abs((s[0]-i[0])*(w[1]-i[1])-(s[1]-i[1])*(w[0]-i[0]))>1e-9);if(!a)continue;let l=s[0]-i[0],c=s[2]-i[2],d=s[1]-i[1],u=a[0]-i[0],p=a[2]-i[2],h=a[1]-i[1],_=c*h-d*p,b=d*u-l*h,m=l*p-c*u;if(Math.abs(b)<1e-9)continue;let v=i[2]-(_*(e-i[0])+m*(t-i[1]))/b;n=n===null?v:Math.min(n,v)}return n}function Xc(o,e,t){let[n,r]=Kc(jc(o),[e,t],!0),i=Math.min(o.x0,o.x1),s=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[n,o.flip?l-r:r-a]:[r,o.flip?s-n:n-i]}function Zc(o,e,t){let n=Bt(e),r=o.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>e.base+.05)),i=c=>c.some(d=>r.some(u=>q(d,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:i(a.map(c=>n.at(c,-s)))?0:t,b:i(a.map(c=>n.at(c,n.w+s)))?0:t,u0:i(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:i(l.map(c=>n.at(n.u1+s,c)))?0:t}}var hi=Math.PI/180,Xf=1.13,Zf=1.72,fi=.025,Ut=.07,ed=.25;function no(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:r}=yt(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let i of r){if(!i.exterior&&!i.free)continue;let s=i.b[0]-i.a[0],a=i.b[1]-i.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,d=-s/l,u=Math.min(n.height,i.height??n.height),p=i.sources.find(b=>b.room_id===i.roomLeft)?.edge??null,h={floorId:n.id,room:i.roomLeft,edge:p,free:!!i.free},_=(b,m,v,w)=>t.push({key:b,section:null,side:"top",flat:!1,o:m,eu:v,es:[0,1,0],n:w,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[w[0],w[2]],wall:h});_(`wall:${n.id}:${i.id}`,[i.a[0]+c*i.right,n.elevation,i.a[1]+d*i.right],[s/l,0,a/l],[c,0,d]),i.free&&_(`wall:${n.id}:${i.id}:back`,[i.b[0]-c*i.left,n.elevation,i.b[1]-d*i.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var td="ground";function em(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function tm(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],i=em(o),s=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:tt(i,s,a)):e.base??0;return{key:td,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function jt(o,e,t=$t(o)){return e.face===td?tm(o,e):e.face.startsWith("wall:")?no(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function ls(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function $t(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>nm(w,Zc(o,w,w.overhang??e.overhang)));let t=ls(o);if(!t)return[];let n=t.rooms.flatMap(w=>w.points.map(f=>f[0])),r=t.rooms.flatMap(w=>w.points.map(f=>f[1])),i=o.settings.wall_exterior+e.overhang,s=Math.min(...n)-i,a=Math.max(...n)+i,l=Math.min(...r)-i,c=Math.max(...r)+i,d=t.elevation+t.height;if(e.type==="flat")return[nd("main",null,s,l,a,c,d+ed)];let u=a-s>=c-l,p=e.ridge==="short"?!u:u,h=(p?c-l:a-s)/2,_=h*Math.tan(e.pitch*hi),b=(w,f,x)=>p?[w,d+x,(l+c)/2+f]:[(s+a)/2+f,d+x,w],[m,v]=p?[s,a]:[l,c];return[-1,1].map(w=>pi(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",b(m,w*h,0),b(v,w*h,0),b(m,0,_),e.pitch,()=>[0,v-m]))}function nm(o,e){let t=Bt(o),n=kn(o),r=(f,x,P)=>{let[R,z]=t.at(f,x);return[R,P,z]},i=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(o.shape==="flat"||o.shape==="parapet"){let f=t.at(a,-i),x=t.at(l,t.w+s);return[nd(o.id,o.id,Math.min(f[0],x[0]),Math.min(f[1],x[1]),Math.max(f[0],x[0]),Math.max(f[1],x[1]),o.eave_a+ed)]}if(o.shape==="pent")return[pi(`${o.id}:a`,o.id,"a",r(a,-i,n.y(-i)),r(l,-i,n.y(-i)),r(a,t.w+s,n.y(t.w+s)),o.pitch_a,()=>[0,c])];let d=ss(o),u=d?as(o,d):null,p=o.shape==="pyramid"||d?.[0]==="hip",h=o.shape==="pyramid"||d?.[1]==="hip",_=o.shape==="pyramid"?(t.u1-t.u0)/2:p?u.d0:0,b=o.shape==="pyramid"?(t.u1-t.u0)/2:h?u.d1:0,m=p?t.u0+_-a:0,v=h?l-(t.u1-b):0,w=[];if(n.vr>.3){let f=Math.hypot(n.vr+i,n.rh-n.y(-i));w.push(pi(`${o.id}:a`,o.id,"a",r(a,-i,n.y(-i)),r(l,-i,n.y(-i)),r(a,n.vr,n.rh),o.pitch_a,x=>[m*(x/f),c-v*(x/f)]))}if(t.w-n.vr>.3){let f=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));w.push(pi(`${o.id}:b`,o.id,"b",r(l,t.w+s,n.y(t.w+s)),r(a,t.w+s,n.y(t.w+s)),r(l,n.vr,n.rh),o.pitch_b,x=>[v*(x/f),c-m*(x/f)]))}if(p||h){let f=n.y(-i),x=n.y(t.w+s),P=[];p&&P.push([`${o.id}:c`,"c",r(a,t.w+s,x),r(a,-i,f),r(t.u0+_,n.vr,n.rh)]),h&&P.push([`${o.id}:d`,"d",r(l,-i,f),r(l,t.w+s,x),r(t.u1-b,n.vr,n.rh)]);for(let[R,z,D,O,F]of P){let $=om(R,o.id,z,D,O,F);$&&w.push($)}}return w}function om(o,e,t,n,r,i){let s=to(qt(r,n));if(s<.3)return null;let a=kt(qt(r,n)),l=qt(i,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=to(d);if(u<.3)return null;let p=kt(d),h=kt(rd(a,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let _=kt([-p[0],0,-p[2]]),b=Math.atan2(p[1],Math.hypot(p[0],p[2]))/hi;return{key:o,section:e,side:t,flat:!1,o:n,eu:a,es:p,n:h,lu:s,ls:u,pitch:b,span:v=>{let w=Math.min(1,Math.max(0,v/u));return[c*w,s-(s-c)*w]},facing:[_[0],_[2]]}}function pi(o,e,t,n,r,i,s,a){let l=kt(qt(r,n)),c=kt(qt(i,n)),d=kt(rd(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=kt([-c[0],0,-c[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:to(qt(r,n)),ls:to(qt(i,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function nd(o,e,t,n,r,i,s){let a=r-t>=i-n,l=a?r-t:i-n,c=a?i-n:r-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function cs(o){let e=o.module_w||Xf,t=o.module_h||Zf;return o.portrait===!1?[t,e]:[e,t]}function od(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function ds(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*hi:o.wall?Math.min(90,Math.max(0,e.tilt??0))*hi:0}function Kt(o,e){let[t,n]=cs(e),r=od(e),i=Math.max(1,...r),a=(r.length-1)*id(o,e)+n*Math.cos(ds(o,e));return[i*t+(i-1)*fi,a]}function id(o,e){let[,t]=cs(e),n=ds(o,e);return o.wall?t*Math.cos(n)+fi:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+fi}function im(o,e,t=!1){let[n,r]=cs(e),i=[],s=ds(o,e),a=r*Math.cos(s),l=id(o,e),c=od(e),d=Math.max(1,...c),u=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(b,m,v)=>[o.o[0]+o.eu[0]*b+o.es[0]*m+o.n[0]*v,o.o[1]+o.eu[1]*b+o.es[1]*m+o.n[1]*v,o.o[2]+o.eu[2]*b+o.es[2]*m+o.n[2]*v],_=(b,m)=>{if(o.unbounded)return!0;if(m<-1e-6||m>o.ls+1e-6)return!1;let[v,w]=o.span(m);return b>=v-1e-6&&b<=w+1e-6};return c.forEach((b,m)=>{let v=e.align==="right"?d-b:e.align==="center"?(d-b)/2:0;for(let w=0;w<b;w++){let f=`${m}:${w}`,x=u.has(f);if(x&&!t)continue;let P=e.u+(w+v)*(n+fi),R=e.v+m*l,z=P+n,D=R+(o.flat||o.wall?a:r);if(p){if(!(_((P+z)/2,R)&&_((P+z)/2,D)))continue}else if(![[P,R],[z,R],[z,D],[P,D]].every(([T,A])=>_(T,A)))continue;if(o.wall&&s>.001){let T=Ut+r*Math.sin(s),[A,U]=e.flip?[T,Ut]:[Ut,T],G=[h(P,R,A),h(z,R,A),h(z,D,U),h(P,D,U)],H=e.flip?R:D,K=[P+.05,z-.05].map(N=>[h(N,H,0),h(N,H,T)]);i.push({corners:G,posts:K,cell:f,skipped:x});continue}if(!o.flat){i.push({corners:[h(P,R,Ut),h(z,R,Ut),h(z,D,Ut),h(P,D,Ut)],posts:[],cell:f,skipped:x});continue}let O=.15,F=O+r*Math.sin(s),[$,E]=e.flip?[D,R]:[R,D],S=[h(P,$,O),h(z,$,O),h(z,E,F),h(P,E,F)];i.push({corners:S,posts:[P+.05,z-.05].flatMap(T=>[[h(T,$,0),h(T,$,O)],[h(T,E,0),h(T,E,F)]]),cell:f,skipped:x})}}),i}function qt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function to(o){return Math.hypot(o[0],o[1],o[2])}function kt(o){let e=to(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function rd(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var rm=.78,sm=1.18;function am(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||rm,module_h:o.h||sm}}function lm(o,e){let t=im(o,am(e))[0];if(!t)return null;let n=r=>[r[0]-o.n[0]*.05,r[1]-o.n[1]*.05,r[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function us(o,e,t){let n=e?lm(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,i=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...o.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>i)continue;let l=a.rooms.find(c=>q([r,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function sd(o,e){let t=o.settings.roof?.windows??[];if(!t.length)return[];let n=new Map($t(o).map(r=>[r.key,r]));return t.filter(r=>us(o,n.get(r.face),r)?.roomId===e)}function ad(o,e){let[t,n]=Kt(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var cm=4,dm=3e3,um=8,pm=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],$n=o=>g`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${ai(o)} />
  </svg>`,mi={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},ps=o=>g`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,hs=class extends xe{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},noLook:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},dm)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return M(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return j(this.hass,e,this.areaName)}nameButton(e){return g`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&$e(this,e)}>${this.name(e)}</button>`}async askFor(e){return!this.confirmEntities?.has(e)||await gt(this.t("confirm_switch",{name:this.name(e)}),{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")})}toggle(e,t,n){let r=async()=>{this.readOnly||await this.askFor(e.entity_id)&&n()};return g`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${Y(e)}
      @click=${r}
    ></button>`}renderHere(e){if(!this.building||!ii("locate")||!ri(this.building))return y;let t=si(this.hass,this.building).filter(n=>n.roomId===e.id);return t.length?g`<p class="fp3d-rp-facts fp3d-rp-here">
      ${t.map((n,r)=>g`${r?", ":""}<span style="color:${n.color}">●</span> ${n.name}`)}
    </p>`:y}render(){let e=this.room;if(!e||!this.hass)return y;let t=_e(this.hass,e.area_id),n=this.memo,{shown:r,more:i}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?mc(this.hass,this.floor,e,this.building?sd(this.building,e.id):[]):{shown:t,more:[]}},s=Lr(this.hass,i).map(x=>x.primary),a=s.length,l=this._showAll?[...r,...s]:r,c=x=>l.filter(P=>x.includes(W(P))).map(P=>this.hass.states[P]).filter(P=>!!P),d=c(["light"]),u=c(["cover"]),p=c(["climate"]),h=c(["media"]),_=c(["switch","fan","lock"]),b=c(["sensor","binary"]),m=c(["camera"]);this.hasCameras=m.length>0;let v=c(["scene","script"]),w=this.facts(p),f=d.filter(x=>x.state==="on");return g`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${w.length?g`<p class="fp3d-rp-facts">${w.join(" \xB7 ")}</p>`:y}
          ${this.renderHere(e)}
          ${this.readOnly?g`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:y}
          ${this.sheets?.length&&!this.readOnly?g`<div class="fp3d-rp-sheets">
                ${this.sheets.map(x=>g`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:x.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${x.icon}</span>${x.title}
                  </button>`)}
              </div>`:y}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?y:g`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:g`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(x=>this.lightRow(x)),g`${f.length<d.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(x=>!Y(x)).map(x=>x.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:y}${f.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:f.map(x=>x.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:y}`):y}
        ${u.length?this.section("panel_covers",u.map(x=>this.coverRow(x)),u.length>1?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:u.filter(x=>!Y(x)).map(x=>x.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:u.filter(x=>!Y(x)).map(x=>x.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:y):y}
        ${p.length?this.section("panel_climate",p.map(x=>this.climateRow(x))):y}
        ${h.length?this.section("panel_media",h.map(x=>this.mediaRow(x))):y}
        ${_.length?this.section("panel_switches",_.map(x=>this.switchRow(x))):y}
        ${m.length?this.section("panel_cameras",m.map(x=>this.cameraTile(x))):y}
        ${b.length?this.section("panel_sensors",b.map(x=>this.sensorRow(x))):y}
        ${v.length?this.section("panel_scenes",[g`<div class="fp3d-rp-scenes">
                  ${v.map(x=>g`<button
                      class="fp3d-btn"
                      ?disabled=${Y(x)}
                      @click=${()=>this.call(W(x.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:x.entity_id})}
                    >
                      ${this.name(x.entity_id)}
                    </button>`)}
                </div>`]):y}
        ${a?g`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:y}
      </div>
    </section>`}facts(e){let t=[],n=this.room,r=(l,c)=>{let d=mt(this.hass,this.floor,n,l);if(d===null)return null;if(l==="temperature")return`${ie(this.hass,ot(this.hass,d),1)} ${Re(this.hass)}`;let u=Hr(this.hass,this.floor,n,l)[0],p=this.hass.states[u]?.attributes.unit_of_measurement??c;return`${ie(this.hass,d,1)} ${p}`},i=e.find(l=>typeof l.attributes.current_temperature=="number"),s=r("temperature","\xB0C");s?t.push(s):i&&n.climate?.temperature!=="none"&&t.push(`${ie(this.hass,i.attributes.current_temperature,1)} ${Re(this.hass)}`);let a=r("humidity","%");return a&&t.push(a),t}section(e,t,n=y){return g`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",r=t.supported_color_modes??[],i=r.some(p=>p!=="onoff"),s=r.includes("color_temp"),a=r.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,u=e.entity_id;return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${$n("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&i?g`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:y}
      ${n&&s?g`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:y}
      ${n&&a?g`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${pm.map(p=>g`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:y}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,r=e.entity_id,i=Y(e);return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${$n("cover")}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${async()=>await this.askFor(r)&&this.call("cover","open_cover",{entity_id:r})}>${this.t("cover_open")}</button>
        ${n&um?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:r})}>${this.t("cover_stop")}</button>`:y}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${async()=>await this.askFor(r)&&this.call("cover","close_cover",{entity_id:r})}>${this.t("cover_close")}</button>
      </div>
      ${n&cm&&typeof t.current_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:r,position:Number(s.target.value)})}
          /></label>`:y}
      ${n&128&&typeof t.current_tilt_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:r,tilt_position:Number(s.target.value)})}
          /></label>`:Yo(this.hass?.states[r])?g`<div class="fp3d-rp-buttons">
              ${n&16?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_open")}</button>`:y}
              ${n&32?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_close")}</button>`:y}
            </div>`:y}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,r=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/i)*i))});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${$n("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${r!==null?g`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(r-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${ie(this.hass,r,1)} ${Re(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(r+i)}>+</button>
          </div>`:y}
      ${l.length>1?g`<div class="fp3d-rp-chips">
            ${l.map(d=>g`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:y}
    </div>`}stateOf(e,t=ue(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=W(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,r=Y(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${$n("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?g`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:y}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${ps(mi.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${Y(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${ps(e.state==="playing"?mi.pause:mi.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${ps(mi.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:y}
    </div>`}switchRow(e){let t=e.entity_id,n=W(t),r=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(r,"toggle",{entity_id:t});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${$n(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!Y(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=this.floor?.placements.some(i=>i.entity_id===e.entity_id);return g`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&$e(this,e.entity_id)}>
        ${n?g`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:g`<span class="fp3d-rp-note">${ue(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r&&!this.noLook?g`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${B("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:y}
    </div>`}sensorRow(e){let t=W(e.entity_id),n=t==="binary"&&e.state==="on";return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${$n(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Ve,Je,Me`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      /* time travel: the controls show the past and take no touches (the list still scrolls) */
      .fp3d-rp-ro .fp3d-rp-body :is(button, input, select) {
        pointer-events: none;
      }
      .fp3d-rp-ro-note {
        color: #ffb020;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      .fp3d-rp-sheets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-rp-sheet {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 32px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 12%, transparent);
        color: inherit;
        font: inherit;
        font-size: 13px;
        cursor: pointer;
      }
      .fp3d-rp-sheet:hover {
        border-color: var(--fp3d-accent, #37e0ff);
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",hs);var oo=class extends _t{constructor(e){if(super(e),this.it=y,e.type!==je.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===Ee)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};oo.directiveName="unsafeHTML",oo.resultType=1;var ld=wn(oo);function cd(o,e,t,n,r=!1){let i=s=>{let a=s?.value.trim();!s||!a||(s.value="",n([...o,a]))};return g`<div class="fp3d-lines ${r?"fp3d-wide":""}" role="group" aria-label=${t.label}>
    ${t.label}
    ${o.map((s,a)=>g`<div class="fp3d-lines-row">
        <span>${s}</span>
        <button type="button" title=${t.remove} aria-label=${`${t.remove}: ${s}`} ?disabled=${e} @click=${()=>n(o.filter((l,c)=>c!==a))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${t.placeholder}
        aria-label=${t.placeholder}
        ?disabled=${e}
        @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),i(s.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${e} @click=${s=>i(s.currentTarget.previousElementSibling)}>
        ${t.add}
      </button>
    </div>
  </div>`}async function ud(o,e,t){let n=hm(o,e,t);return!n||o.confirm&&!await t.confirm(o.confirm_text?.trim()||null)?!1:(await n(),!0)}function hm(o,e,t){let n=o.target?.trim()??"";switch(o.action){case"perform_action":{let r=/^([a-z0-9_]+)\.([a-z0-9_]+)$/.exec(n);return r?()=>t.callService(r[1],r[2],{...o.data??{}}):null}case"navigate":return n?()=>t.navigate(n):null;case"url":return/^(https?:\/\/\S+|\/(?!\/)\S*)$/i.test(n)?()=>t.openUrl(n):null;case"toggle":case"more_info":case"camera":{let r=n||e;return r?o.action==="toggle"?()=>t.callService("homeassistant","toggle",{entity_id:r}):o.action==="more_info"?()=>t.moreInfo(r):()=>t.camera(r):null}default:return null}}var fm=["tap","hold","double_tap"];function dd(o){return!!o&&fm.some(e=>!!o[e]&&o[e].action!=="default")}function pd(o,e,t){let n=new Map;for(let r of o){for(let i of r.placements)dd(i.actions)&&!n.has(i.entity_id)&&n.set(i.entity_id,{actions:i.actions,entity:i.entity_id});for(let i of r.furniture){if(!dd(i.actions))continue;let s=e(i.id)??`item:${i.id}`;n.has(s)||n.set(s,{actions:i.actions,entity:t(i)})}}return n}function _i(o,e){let t=o?.actions[e];return t&&t.action!=="default"?t:null}var gi=class{pending=null;wait;constructor(e=320){this.wait=e}tap(e,t,n,r){if(this.pending?.id===e){this.doubleTap(e);return}if(this.flush(),!t){n();return}let i=setTimeout(()=>{this.pending=null,n()},this.wait);this.pending={id:e,timer:i,single:n,double:r}}doubleTap(e){let t=this.pending;return!t||t.id!==e?!1:(clearTimeout(t.timer),this.pending=null,t.double(),!0)}flush(){let e=this.pending;e&&(clearTimeout(e.timer),this.pending=null,e.single())}cancel(){this.pending&&clearTimeout(this.pending.timer),this.pending=null}};var hd=[1,.12,.1],mm={leak:new Set(["moisture"]),motion:new Set(["motion","occupancy","presence"])};function ro(o,e,t,n){let r=t.live?.[n];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let i=mm[n],s=u=>u.startsWith("binary_sensor.")&&i.has(String(o.states[u]?.attributes.device_class??"")),a=(u,p)=>t.points.length>=3&&q([u,p],t.points),l=e?.placements.filter(u=>s(u.entity_id))??[],c=l.filter(u=>a(u.x,u.z)).map(u=>u.entity_id),d=new Set(l.filter(u=>!a(u.x,u.z)).map(u=>u.entity_id));return[...new Set([..._e(o,t.area_id).filter(u=>s(u)&&!d.has(u)),...c])]}var fs={motion_seconds:30,radiator_cold:18,radiator_hot:45,tank_cold:25,tank_hot:55};function wi(o){let e=o.settings.effects??{},t={...fs};for(let n of Object.keys(t)){let r=e[n];typeof r=="number"&&Number.isFinite(r)&&(t[n]=r)}return t.motion_seconds=Math.max(0,Math.min(3600,t.motion_seconds)),t}function fd(o,e,t){let n=new Set,r=null,i=wi(e).motion_seconds*1e3;if(i<=0)return{rooms:n,next:r};for(let s of e.floors)for(let a of s.rooms)for(let l of ro(o,s,a,"motion")){let c=o.states[l];if(c?.state!=="on")continue;let d=Date.parse(c.last_changed??""),u=Number.isFinite(d)?d+i:Number.POSITIVE_INFINITY;u<=t||(n.add(a.id),Number.isFinite(u)&&(r===null||u<r)&&(r=u))}return{rooms:n,next:r}}var io=[[0,[.22,.5,1]],[.6,[1,.62,.22]],[1,[1,.16,.1]]];function bi(o,e,t){let n=t>e?Math.max(0,Math.min(1,(o-e)/(t-e))):o>=t?1:0;for(let r=1;r<io.length;r++){let[i,s]=io[r],[a,l]=io[r-1];if(n<=i){let c=(n-a)/(i-a);return[l[0]+(s[0]-l[0])*c,l[1]+(s[1]-l[1])*c,l[2]+(s[2]-l[2])*c]}}return io[io.length-1][1]}function md(o){return o==="radiator"||/^pack:.*:(radiator|trv)(_[a-z0-9_]+)?$/.test(o)?"radiator":Bo(o)?"tank":null}var gd=(o,e)=>!!e&&e!=="none"&&e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="temperature",gm=/(tank|cylinder|dhw|hot.?water|speicher|boiler)/i;function _m(o,e,t){let n=e&&e!=="none"?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;let r=Object.values(o.entities).filter(i=>i.device_id===n&&gd(o,i.entity_id)).map(i=>i.entity_id);return t==="tank"?r.find(i=>gm.test(`${i} ${o.states[i]?.attributes.friendly_name??""}`))??(r.length===1?r[0]:null):r.length===1?r[0]:null}function bm(o,e){let t=o.states[e];if(!t)return null;if(e.startsWith("climate.")||e.startsWith("water_heater.")){let r=t.attributes.current_temperature;return typeof r=="number"&&Number.isFinite(r)?Lt(r,Re(o)):null}if(t.state===""||t.state==="unavailable"||t.state==="unknown")return null;let n=Number(t.state);return Number.isFinite(n)?Lt(n,t.attributes.unit_of_measurement):null}function ms(o,e){let t=md(e.type);return!t||e.temp_sensor==="none"?null:e.temp_sensor?e.temp_sensor:gd(o,e.extra)?e.extra:t==="tank"&&e.entity?.startsWith("water_heater.")?e.entity:_m(o,e.entity,t)}function _d(o,e,t){let n=md(t.type),r=n?ms(o,t):null,i=r?bm(o,r):null;if(!n||!r||i===null)return null;let s=wi(e),a=n==="radiator"?bi(i,s.radiator_cold,s.radiator_hot):bi(i,s.tank_cold,s.tank_hot);return{kind:n,sensor:r,celsius:i,color:a}}var wm=[["radiator_cold","effects_radiator_cold"],["radiator_hot","effects_radiator_hot"],["tank_cold","effects_tank_cold"],["tank_hot","effects_tank_hot"]];function bd(o,e,t,n,r="fp3d-set-field"){let i=e??{},s=(d,u)=>{let p={...i,[d]:u};for(let h of Object.keys(p))(p[h]===null||p[h]===void 0)&&delete p[h];n(Object.keys(p).length?p:null)},a=Re(o),l=(d,u,p,h,_)=>g`<label class=${r}
      >${u}
      <input
        type="number"
        step=${_}
        placeholder=${String(Math.round(p(fs[d])))}
        .value=${typeof i[d]=="number"?String(Math.round(p(i[d])*10)/10):""}
        ?disabled=${t}
        @change=${b=>{let m=b.target.value.trim(),v=Number(m);s(d,m===""||!Number.isFinite(v)?null:h(v))}}
    /></label>`,c=d=>d;return g`${l("motion_seconds",M(o,"effects_motion_seconds"),c,d=>Math.max(0,Math.min(3600,Math.round(d))),5)}
  ${wm.map(([d,u])=>l(d,`${M(o,u)} (${a})`,p=>ot(o,p),p=>Math.max(-20,Math.min(100,Lt(p,a))),1))}`}var vm={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Gt(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function gs(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return i<=.1?0:Math.min(1,.3+i/10)}function wd(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let r=vm[n.state];if(!r)return null;let i=n.attributes,s=r.cloud??0;typeof i.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,i.cloud_coverage/100)));let a=r.wind??0;if(typeof i.wind_speed=="number"){let c=i.wind_speed_unit==="m/s"?i.wind_speed*3.6:i.wind_speed_unit==="mph"?i.wind_speed*1.609:i.wind_speed;a=Math.max(a,Math.min(1,c/60))}let l=gs(o,t);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:n.entity_id,condition:n.state,rain:l??r.rain??0,snow:r.snow??0,fog:r.fog??0,cloud:s,wind:a,lightning:!!r.lightning}}function vd(o,e){let t=new Set(e??El);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var ym=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),xm=new Set(["power","plug","connectivity","running"]);function vi(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return xm.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return ym.has(n)||n.startsWith("ob ")}function ws(o){let e=Ie(o);if(!e)return!1;if(km.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var km=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var we=["#3a3f47","#3a3f47"],Yt=["#23262b","#23262b"],Ke=["#5a3b25","#5a3b25"],ge=["#1f4fa8","#1f4fa8"],St=["#e3b616","#e3b616"],ne=["#2f7d3b","#2f7d3b"],yd={default:{rest:we,bio:Ke,paper:ge,plastic:St,glass:ne,garden:ne,recycling:St,other:we},DE:{rest:Yt,bio:Ke,paper:ge,plastic:St,glass:ne,garden:ne,recycling:St},AT:{rest:we,bio:Ke,paper:[we[0],"#c0262d"],plastic:St,glass:ne,garden:ne},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ne,paper:ge,plastic:we,glass:ne,garden:ne},NL:{rest:we,bio:ne,paper:ge,plastic:["#3a3f47","#e57a1f"],glass:ne,garden:ne},BE:{rest:we,bio:ne,paper:ge,plastic:ge,glass:ne,garden:ne},GB:{rest:Yt,bio:["#3a3f47","#5a3b25"],paper:ge,plastic:ge,glass:Yt,garden:Ke,recycling:ge},US:{rest:Yt,bio:ne,paper:ge,plastic:ge,glass:ge,garden:ne,recycling:ge},CA:{rest:Yt,bio:ne,paper:ge,plastic:ge,glass:ge,garden:ne,recycling:ge},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:we,bio:Ke,paper:[we[0],"#e3b616"],plastic:[we[0],"#e3b616"],recycling:[we[0],"#e3b616"],glass:ne,garden:ne},IT:{rest:we,bio:Ke,paper:ge,plastic:St,glass:ne,garden:ne},ES:{rest:we,bio:Ke,paper:ge,plastic:St,glass:ne,garden:ne},PT:{rest:we,bio:Ke,paper:ge,plastic:St,glass:ne,garden:ne},DK:{rest:Yt,bio:ne,paper:ge,plastic:we,glass:ne,garden:ne},SE:{rest:Yt,bio:Ke,paper:ge,plastic:we,glass:ne,garden:ne},NO:{rest:we,bio:Ke,paper:ge,plastic:we,glass:ne,garden:ne},FI:{rest:we,bio:Ke,paper:ge,plastic:we,glass:ne,garden:ne}},$d="DE";function Sd(o){$d=o}function Md(o){let e=o?.config?.country;if(e)return e.toUpperCase();let t=(o?.language??"").split("-")[1];return t?t.toUpperCase():"DE"}function $m(o,e){return yd[e]?.[o]??yd.default[o]??we}function Td(o,e=$d){let t=$m(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var Sm={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function bs(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(r=>r.trim()&&n.includes(r.trim())):e==="other"?!1:Sm[e].some(r=>n.includes(r))}function vs(o){let e=typeof o=="string"?o:o?.date??o?.dateTime;if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Mm(o){return o.map(e=>({day:vs(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function Id(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function ys(o,e,t=new Date,n=42){let r=new Map,i=o.callApi;if(!i)return r;let s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=Pd(s,n);return await Promise.all(e.map(async l=>{try{let c=await i.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);r.set(l,Mm(Array.isArray(c)?c:[]))}catch{}})),r}var Sn=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),Pd=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),yi=(o,e)=>Math.round((Sn(e).getTime()-Sn(o).getTime())/864e5);function _s(o,e,t={}){let n=t.from??14,r=t.until??12,i=e.getHours()+e.getMinutes()/60;return o===1&&i>=n||o===0&&i<r}function Ad(o,e,t,n=new Date,r=3){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return[];if(i.startsWith("calendar.")){let a=Sn(n);return(t.get(i)??[]).filter(l=>l.day>=a&&bs(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,r)}let s=xs(o,e,t,n);return s?[{day:s.day,summary:s.summary}]:[]}function xs(o,e,t,n=new Date,r={}){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return null;let s=Sn(n);if(i.startsWith("calendar.")){let d=(t.get(i)??[]).find(p=>p.day>=s&&bs(p.summary,o.bin_kind??"rest",o.bin_match));if(!d)return null;let u=yi(s,d.day);if(u===0&&n.getHours()+n.getMinutes()/60>=(r.until??12)){let p=(t.get(i)??[]).find(h=>h.day>s&&bs(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:yi(s,p.day),day:p.day,summary:p.summary,glow:_s(yi(s,p.day),n,r)}}return{days:u,day:d.day,summary:d.summary,glow:_s(u,n,r)}}let a=e.states[i];if(!a)return null;let l=Pm(a,n);if(l===null||l<0)return null;let c=Pd(s,l);return{days:l,day:c,summary:String(a.attributes.friendly_name??""),glow:_s(l,n,r)}}function Tm(o,e){let t=typeof o=="string"&&o!=="none"?o:null,n=t?e.states[t]:void 0;return!!n&&Fd.has(String(n.state).toLowerCase())}function ks(o,e){return Tm(o.bin_out,e)}function Ed(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function Rd(o,e=.3){let t=o.filter(a=>!a.icon),n=t.map((a,l)=>l),r=a=>n[a]===a?a:n[a]=r(n[a]);for(let a=0;a<t.length;a++)for(let l=a+1;l<t.length;l++){let c=t[a],d=t[l];c.floorId===d.floorId&&Math.hypot(c.x-d.x,c.z-d.z)<=c.r+d.r+e&&(n[r(l)]=r(a))}let i=new Map;t.forEach((a,l)=>i.set(r(l),[...i.get(r(l))??[],a]));let s=[];for(let a of i.values())a.sort((l,c)=>l.days-c.days||l.name.localeCompare(c.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,c)=>l+c.x,0)/a.length,z:a.reduce((l,c)=>l+c.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of o)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function Hd(o,e={}){let t=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,n=o.length?Math.min(...o.map(r=>r.days)):0;return new Set(o.filter(r=>(t===null||r.days<=t)&&(!e.nextOnly||r.days===n)).map(r=>r.id))}function Im(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o),r,i,s;if(t)[r,i,s]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),c=Number(n[3]);n[2]==="/"&&c>12&&l<=12&&([l,c]=[c,l]),s=l,i=c;let d=n[4];r=d?d.length===2?2e3+Number(d):Number(d):e.getFullYear(),!d&&new Date(r,i-1,s)<Sn(e)&&(r+=1)}else return null;if(i<1||i>12||s<1||s>31)return null;let a=new Date(r,i-1,s);return a.getMonth()===i-1?a:null}function Pm(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let r=/^\d{4}-\d{2}-\d{2}T/.test(n)?vs(n):Im(n,e);if(r)return yi(e,r);let i=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(i))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(i))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(i)??/\bin\s+(\d+)/.exec(i);if(s)return Number(s[1]);let a=i.match(/\d+/g);return a?Number(a[a.length-1]):null}var Fd=new Set(["on","open","true","detected","home"]);function xd(o){let e=o?.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function Cd(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let r=e.states[n];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let i=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!i){let l=Number(r.state);return Fd.has(r.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=xd(r),a=xd(e.states[i]);return s===null||t-s>7*864e5?!1:a===null||s>a+1e3}function zd(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:Rm(o)}var Od=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function $s(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let i=n.attributes,s=String(i.problem??"").toLowerCase();return String(i.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let r=Od(n);return r!==null&&r<(o.moisture_min??20)}function Ss(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let s=Number(t),a=n==="s"?s/60:n==="h"?s*60:s;return Math.max(0,Math.round(a))}let r=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(r)return Number(r[1])*60+Number(r[2])+Math.round(Number(r[3]??0)/60);let i=Date.parse(t);return Number.isFinite(i)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((i-e)/6e4)):null}var Am=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function Ms(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Am.has(e)}var Em=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function Ts(o,e,t){let n=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&Em.has(n))return!0;let r=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),i=!!o&&!r&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return e!==null&&e<=t&&!i}function Dd(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function kd(o,e,t,n){let r=typeof o=="string"&&o!=="none"?o:null,i=r?t.states[r]:void 0;if(!r||!i||i.state==="unavailable"||i.state==="unknown")return!1;if(r.startsWith("binary_sensor.")||r.startsWith("input_boolean."))return i.state==="on";let s=Od(i);if(s!==null)return s<=(e??10);let a=vs(i.state);return!!a&&a.getTime()<=Sn(n).getTime()}function Ld(o,e,t=new Date){let n=[];return kd(o.service,o.service_min,e,t)&&n.push(o.service),o.service2!==o.service&&kd(o.service2,o.service2_min,e,t)&&n.push(o.service2),n}var Mt=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),Wd=o=>!!o&&(o.state==="on"||o.state==="open");function ki(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let r of Mt(o)){let i=e.states[r];if(Wd(i)&&i?.last_changed&&t-Date.parse(i.last_changed)>=n)return r}return null}function Nd(o,e,t=Date.now()){let n=null;for(let r of o)if(!(r.type!=="fridge"&&r.type!=="fridge_smart"))for(let i of Mt(r)){let s=e.states[i];if(!Wd(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(r.door_alarm??2)*6e4-t;a>0&&(n===null||a<n)&&(n=a)}return n}var xi=class{running=new Map;ended=new Map;update(e,t,n,r=Date.now()){let i=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;i===!0&&this.ended.set(e,r);let s=this.ended.get(e);return s===void 0?!1:r-s>12*36e5||n(s)?(this.ended.delete(e),!1):!0}};function Rm(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var Hm=10*6e4,Fm=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Vd={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function Is(o,e,t){let n=[];for(let d of e.floors)for(let u of d.rooms){let h=[..._e(o,u.area_id).filter(_=>{let b=_.startsWith("binary_sensor.")?Vd[String(o.states[_]?.attributes.device_class)]:void 0;return!!b&&b!=="water"}),...ro(o,d,u,"leak")];h.length&&n.push({floorId:d.id,roomId:u.id,sensors:h})}let r=Object.keys(o.states),i=e.settings.rain_warning===!1?null:Gt(o,t??e.settings.weather_entity),s=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=B("household")?e.floors.flatMap(d=>d.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&Mt(u).length).map(u=>({floorId:d.id,roomId:d.rooms.find(p=>p.points.length>=3&&q([u.x,u.z],p.points))?.id??null,furnitureId:u.id,ids:Mt(u)}))):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,c=l&&o.states[l]?l:null;return{rooms:n,alarms:r.filter(d=>d.startsWith("alarm_control_panel.")),weather:i,outage:s,rain:c,fridges:a}}function Ps(o){return[...o.rooms.flatMap(e=>e.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(e=>e.ids)]}function Bd(o,e,t,n){let r=[];for(let a of t.rooms)for(let l of a.sensors){let c=o.states[l];c?.state==="on"&&r.push({kind:Vd[String(c.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId})}let i=t.rain?gs(o,t.rain):null;if(i!==null?i>0:!!t.weather&&Fm.has(o.states[t.weather]?.state??""))for(let a of e.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let c=n.get(l.id);if(!c)continue;let d=rt(o,c,"window");d.open<.5&&d.tilt<.5&&d.open2<.5&&d.tilt2<.5||r.push({kind:"window_rain",entity:c.contact??c.tilt??c.contact2??l.id,roomId:l.room_id,floorId:a.id})}if(t.outage&&vi(o.states[t.outage])&&r.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null}),e.settings.alert_unavailable){let a=Date.now(),l=new Set;for(let c of e.floors)for(let d of c.openings){let u=n.get(d.id);if(u)for(let p of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!p||l.has(p))continue;let h=o.states[p];if(!h||h.state!=="unavailable"&&h.state!=="unknown")continue;let _=Date.parse(h.last_changed??"");Number.isFinite(_)&&a-_<Hm||(l.add(p),r.push({kind:"contact_unavailable",entity:p,roomId:d.room_id,floorId:c.id}))}}}for(let a of t.fridges??[]){let l=e.floors.find(d=>d.id===a.floorId)?.furniture.find(d=>d.id===a.furnitureId),c=l?ki(l,o):null;c&&r.push({kind:"fridge_door",entity:c,roomId:a.roomId,floorId:a.floorId})}for(let a of t.alarms){let l=o.states[a]?.state;l==="triggered"?r.push({kind:"alarm",entity:a,roomId:null,floorId:null}):l==="pending"&&r.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null})}return r}function Cm(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function Ud(o){return o.kind==="water"&&!o.color?hd:Cm(o)}function As(o,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let r=o?j(o,t.entity):t.entity,i=M(o,`alert_${t.kind}`,{name:r});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${M(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${i}`:i}function Qd(o){let e=oe(o);return e===null||e==="wallbox"}function Jd(o){let e=new Map,t=new Set(o.map(n=>n.powerEntity));for(let n of o)n.circuit&&n.circuit!==n.powerEntity&&t.has(n.circuit)&&e.set(n.circuit,(e.get(n.circuit)??0)+n.power);return o.map(n=>Math.max(0,n.power-(e.get(n.powerEntity)??0)))}var Be=.03,lo=o=>o&&o!=="none"?o:null;function Jt(o,e=t=>lo(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=e(r),s=oe(r.type);if(s==="meter")t.grid??=i,t.gridExport??=lo(r.export);else if((s==="inverter"||s==="solar")&&i&&!t.solar.includes(i))t.solar.push(i);else if(s==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let a=lo(r.charge);a&&!t.charge.includes(a)&&t.charge.push(a),(i||a)&&t.batteries.push({power:i,charge:a});let l=lo(r.soc);l&&!t.soc.includes(l)&&t.soc.push(l)}}return t}function Rs(o){for(let e of o.floors){let t=e.furniture.find(n=>oe(n.type)==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}async function Xd(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),r=new Map;for(let i of e)r.set(i,(n?.[i]??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return r}catch{return null}}var Zd=.07;function pe(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function zm(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function po(o,e){if(zm(o,e))return e;let t=o.entities?.[e]?.device_id;if(!t)return null;let n=sc(o,t),r=nt(o,e),i=Fr(o,t).filter(l=>l!==e),s=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(i.includes(s))return s;let a=i.find(l=>r!==null&&nt(o,l)===r);return a||n?a??null:i.find(l=>r===null||nt(o,l)===null||nt(o,l)===r)??null}function eu(o,e,t=Jt(e)){let n=e.energy,r=new Set([n.grid,n.solar,n.battery,t.grid,t.gridExport,...t.solar,...t.battery,...t.charge].filter(Boolean)),i=[],s=new Set;for(let a of e.floors)for(let l of a.placements){let c=po(o,l.entity_id);if(!c||r.has(c)||s.has(c))continue;s.add(c);let d=lo(l.circuit);i.push({id:l.entity_id,powerEntity:c,floorId:a.id,x:l.x,z:l.z,power:Math.max(0,pe(o.states[c])??0),...d?{circuit:d}:{},...l.energy?{energy:l.energy}:{}})}return i}function tu(o,e,t,n=Jt(e)){let r=e.energy,i=r.grid??n.grid,s=i?pe(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let b=Math.max(0,pe(o.states[n.gridExport])??0);s=Math.max(0,s??0)-b}let a=r.solar?pe(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let b=n.solar.map(m=>pe(o.states[m])).filter(m=>m!==null);a=b.length?b.reduce((m,v)=>m+v,0):null}let l=r.battery?pe(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let b=n.batteries.map(m=>{if(m.charge){let v=m.power?Math.max(0,pe(o.states[m.power])??0):0,w=Math.max(0,pe(o.states[m.charge])??0);return v-w}return m.power?pe(o.states[m.power],r.battery_invert):null}).filter(m=>m!==null);l=b.length?b.reduce((m,v)=>m+v,0):null}let d=(r.battery_soc?[r.battery_soc]:n.soc).map(b=>Number(o.states[b]?.state)).filter(b=>Number.isFinite(b)),u=d.length?d.reduce((b,m)=>b+m,0)/d.length:NaN,p=r.tariff?o.states[r.tariff]:void 0,h=Number(p?.state),_=r.consumption?pe(o.states[r.consumption]):null;return _!==null?_=Math.max(0,_):s!==null||a!==null||l!==null?_=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(_=Jd(t).reduce((b,m)=>b+m,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:_}}function Qt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function Tt(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Om(o,e){let t=o.length,n=o.map((r,i)=>{let s=o[(i+1)%t],a=s[0]-r[0],l=s[1]-r[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[r[0]+d*e[i],r[1]+u*e[i]],d:[a/c,l/c],n:[d,u]}});return o.map((r,i)=>{let s=n[(i-1+t)%t],a=n[i],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[r[0]+a.n[0]*e[i],r[1]+a.n[1]*e[i]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Dm(o){return qe(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function Hs(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=yt(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let i of o.rooms){if(i.points.length<3)continue;let{pts:s,flipped:a}=Dm(i),l=s.length,c=s.map((p,h)=>{let _=a?(l-2-h+l)%l:h,b=r.some(m=>!m.exterior&&m.sources.some(v=>v.room_id===i.id&&v.edge===_));return Zd+(b?t/2:0)}),d=Om(s,c).map(p=>Qt(n,p)),u=d.map((p,h)=>[p,d[(h+1)%l]]);for(let[p,h]of u)Tt(n,p,h);n.rings.set(i.id,u)}for(let i of r){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],a=co(n,i.roomLeft,s),l=co(n,i.roomRight,s);a!==null&&l!==null&&Tt(n,a,l)}return Wm(n),n}var Lm=1;function Wm(o){let e=[...o.rings.entries()];for(;;){let t=new Array(o.pos.length).fill(-1),n=0;for(let s=0;s<o.pos.length;s++){if(t[s]>=0)continue;let a=[s];for(t[s]=n;a.length;)for(let{to:l}of o.adj[a.pop()])t[l]<0&&(a.push(l),t[l]=n);n++}if(n<2)return;let r=null;for(let[,s]of e)for(let a of new Set(s.flat()))for(let[l,c]of e)if(t[c[0][0]]!==t[a])for(let[d,u]of c){let p=o.pos[a],h=o.pos[d],_=o.pos[u],b=_[0]-h[0],m=_[1]-h[1],v=Math.min(1,Math.max(0,((p[0]-h[0])*b+(p[1]-h[1])*m)/(b*b+m*m||1))),w=Math.hypot(p[0]-h[0]-b*v,p[1]-h[1]-m*v);(!r||w<r.d)&&(r={a,room:l,d:w})}if(!r||r.d>Lm+2*Zd)return;let i=co(o,r.room,o.pos[r.a]);if(i===null)return;Tt(o,r.a,i)}}function co(o,e,t){let n=o.rings.get(e);if(!n)return null;let r=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,p=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/u)),h=[a[0]+c*p,a[1]+d*p],_=Math.hypot(t[0]-h[0],t[1]-h[1]);(!r||_<r.d)&&(r={seg:s,q:h,d:_})}if(!r)return null;let i=Qt(o,r.q);return Tt(o,i,r.seg[0]),Tt(o,i,r.seg[1]),i}function Si(o,e,t){let n=o.pos[t],r=co(o,e.id,n);if(r===null)return!1;let i=o.pos[r],s=o.pos[o.adj[r][0].to],a=o.pos[o.adj[r][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=[(a[0]-s[0])/l,(a[1]-s[1])/l],d=(n[0]-i[0])*c[0]+(n[1]-i[1])*c[1],u=(n[1]-i[1])*c[0]-(n[0]-i[0])*c[1];if(Math.abs(d)<.01||Math.abs(u)<.01)return Tt(o,t,r),!0;let p=[i[0]+c[0]*d,i[1]+c[1]*d],h=[i[0]-c[1]*u,i[1]+c[0]*u],_=Qt(o,q(h,e.points)||!q(p,e.points)?h:p);return Tt(o,r,_),Tt(o,_,t),!0}function uo(o,e){let t=o.rooms.filter(i=>i.points.length>=3),n=t.find(i=>q(e,i.points));if(n)return n;let r=null;for(let i of t)for(let s of i.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!r||a<r.d)&&(r={room:i,d:a})}return r?.room??null}function nu(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),r=o.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let s=0;s<t.length;s++)!r[s]&&t[s]<1/0&&(i<0||t[s]<t[i])&&(i=s);if(i<0)break;r[i]=!0;for(let{to:s,w:a}of o.adj[i])t[i]+a<t[s]-1e-9&&(t[s]=t[i]+a,n[s]=i)}return{dist:t,prev:n}}function qd(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var jd=new WeakMap;function Nm(o,e){let t=Rs(o),n=o.floors.find(d=>d.id===t.floor_id),r=[],{wall_exterior:i,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,p=l.get(d.id),h=qd(p,e);r.push({floorId:n.id,a:[t.x,Be,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:p,kind:h});let _=Math.abs(d.elevation-n.elevation);r.push({floorId:d.id,a:[t.x,u?-.2:d.height,t.z],b:[t.x,Be,t.z],dist:_,members:p,kind:h}),a.set(d.id,_+.25)}for(let d of c){let u=Hs(d,i,s),p=uo(d,[t.x,t.z]);if(!p)continue;let h=Qt(u,[t.x,t.z]);if(!Si(u,p,h))continue;let _=[];for(let f of l.get(d.id)){let x=e[f],P=uo(d,[x.x,x.z]);if(!P)continue;let R=Qt(u,[x.x,x.z]);Si(u,P,R)&&_.push({node:R,member:f})}let{dist:b,prev:m}=nu(u,h),v=new Map;for(let f of _)if(Number.isFinite(b[f.node]))for(let x=f.node;m[x]>=0;x=m[x]){let P=m[x],R=`${P}>${x}`,z=v.get(R)??{a:P,b:x,members:[]};z.members.push(f.member),v.set(R,z)}let w=a.get(d.id)??0;for(let{a:f,b:x,members:P}of v.values()){let R=u.pos[f],z=u.pos[x],D=qd(P,e);r.push({floorId:d.id,a:[R[0],Be,R[1]],b:[z[0],Be,z[1]],dist:w+b[f],members:P,kind:D})}}return r}function ou({building:o,consumers:e,summary:t,battery:n,fieldPower:r,devicePower:i}){let s=Rs(o);if(!s)return[];let a=o.floors.find(S=>S.id===s.floor_id);if(!a)return[];let l=S=>i?.get(S),c=$i(o,"inverter"),d=$i(o,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=S=>{let T=null;for(let A of c)A.floorId===S.floorId&&(!T||Math.hypot(A.x-S.x,A.z-S.z)<Math.hypot(T.x-S.x,T.z-S.z))&&(T=A);return T},p=(S,T)=>S.reduce((A,U)=>!A||Math.hypot(U.x-T.x,U.z-T.z)<Math.hypot(A.x-T.x,A.z-T.z)?U:A,null),h=S=>l(S.id)??(d.length===1?t.battery??0:0),_=new Map;for(let S of d){let T=u(S);T&&_.set(S.id,T)}let b=Jd(e),m=e.map((S,T)=>({floorId:S.floorId,x:S.x,z:S.z,kind:S.wallbox?"wallbox":"consumer",power:b[T],load:b[T]}));for(let S of d){if(_.has(S.id)||t.battery===null)continue;let T=h(S);m.push({floorId:S.floorId,x:S.x,z:S.z,kind:"battery",power:Math.abs(T),load:-T})}let v=`${s.floor_id}:${s.x},${s.z}|${m.map(S=>`${S.floorId}:${S.x},${S.z}:${S.kind}`).join(";")}`,w=jd.get(o);w||jd.set(o,w=new Map);let f=w.get(v);f||(f=Nm(o,m),w.clear(),w.set(v,f));let x=f.map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.kind==="battery"?S.members.reduce((T,A)=>T+m[A].power,0):Math.max(0,S.members.reduce((T,A)=>T+m[A].load,0)),kind:S.kind})),P=t.grid!==null?Fs(o):null,R=o.settings.roof.cables??[],z=S=>R.find(T=>T.id===S),D=(S,T)=>S.map(A=>({...A,key:T}));if(P){let S=t.grid>=0,T=z("grid"),A=T?so(o,T,[P.end[0],a.elevation+Math.max(Be,P.height),P.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...P.height>.05?[[P.end[0],P.height,P.end[1]]]:[],[P.end[0],Be,P.end[1]],[P.wall[0],Be,P.wall[1]],[s.x,Be,s.z]],U=T?Mn(o,S?A:[...A].reverse(),Math.abs(t.grid),S?"grid":"export",a):ru(a.id,S?A:[...A].reverse(),Math.abs(t.grid),S?"grid":"export",0);x.push(...D(U,"grid"))}if(t.battery!==null&&t.battery>0)for(let S of x)S.kind==="battery"&&([S.a,S.b]=[S.b,S.a]);let O=o.settings.roof.solar??[],F=o.settings.roof.strings??[],$=new Map;if(r&&O.length){let S=[...$t(o),...no(o)];for(let T of O){let A=r.get(T.id)??0,U=T.string?F.find(he=>he.id===T.string)?.inverter:null,G=U?d.find(he=>he.id===U)??null:null,H=U&&!G?c.find(he=>he.id===U)??null:null;if(G){let he=_.get(G.id);he&&$.set(he.id,($.get(he.id)??0)+A);let ae=G.variant==="wall"?.5+G.h:.9,Pe=z(`solar:${T.id}`),He=Pe?Gd(o,T):null,Le=o.floors.find(ut=>ut.id===G.floorId);Pe&&He&&Le?x.push(...D(Mn(o,so(o,Pe,He,[G.x,Le.elevation+ae,G.z]),A,"solar",Le),`solar:${T.id}`)):x.push(...D(Yd(o,T,A,G,ae),`solar:${T.id}`));continue}if(!H&&c.length){let he=jt(o,T,S),ae=he?ad(he,T):[T.u,T.v];H=c.reduce((Pe,He)=>!Pe||Math.hypot(He.x-ae[0],He.z-ae[1])<Math.hypot(Pe.x-ae[0],Pe.z-ae[1])?He:Pe,null)}H&&$.set(H.id,($.get(H.id)??0)+A);let K=H??{floorId:s.floor_id,x:s.x,z:s.z},N=H?1.1+H.h:1.5,te=z(`solar:${T.id}`),X=te?Gd(o,T):null,ve=o.floors.find(he=>he.id===K.floorId);te&&X&&ve?x.push(...D(Mn(o,so(o,te,X,[K.x,ve.elevation+N,K.z]),A,"solar",ve),`solar:${T.id}`)):x.push(...D(Yd(o,T,A,K,N),`solar:${T.id}`))}}let E=$i(o,"solar");for(let S of E){let T=Math.max(0,l(S.id)??(O.length?0:(t.solar??0)/E.length)),A=u(S),U=A?null:p(d.filter(K=>K.floorId===S.floorId),S);if(A)$.set(A.id,($.get(A.id)??0)+T);else if(U&&_.get(U.id)){let K=_.get(U.id);$.set(K.id,($.get(K.id)??0)+T)}let G=A??U??{floorId:s.floor_id,x:s.x,z:s.z,h:0,variant:null},H=A?1.1+A.h:U?U.variant==="wall"?.5+U.h:.9:1.5;x.push(...D(Es(o,S,Math.min(.3,S.h),G,H,T,"solar",0),`solar:${S.id}`))}!(r&&O.length)&&t.solar!==null&&!c.length&&!E.length&&x.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Be,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let S of c){let T=1.1+S.h,A=d.filter(H=>_.get(H.id)===S),U=l(S.id);if(U===void 0){U=$.get(S.id)??(c.length===1?t.solar??0:0);for(let H of A)U+=h(H)}let G=o.floors.find(H=>H.id===S.floorId);if(t.solar!==null||t.battery!==null){let H=z(`inv:${S.id}`),K=H&&G?Mn(o,so(o,H,[S.x,G.elevation+T,S.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,U),"inverter",G):Es(o,S,T,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,U),"inverter",0);x.push(...D(K,`inv:${S.id}`))}for(let H of A){let K=h(H);if(t.battery===null&&l(H.id)===void 0)continue;let N=H.variant==="wall"?.5+H.h:.9,te=z(`bat:${H.id}`),X=te&&G?Mn(o,so(o,te,[S.x,G.elevation+T-.1,S.z],[H.x,G.elevation+N,H.z]),Math.abs(K),"battery",G):Es(o,S,T-.1,H,N,Math.abs(K),"battery",0);x.push(...D(K<=0?X:X.map(ve=>({...ve,a:ve.b,b:ve.a})).reverse(),`bat:${H.id}`))}}return x}function Fs(o){let e=Rs(o),t=e?o.floors.find(h=>h.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:r}=o.settings,{walls:i}=yt(t.rooms,{exterior:n,interior:r},t.walls??[]),s=$i(o,"grid_point")[0],a=i.filter(h=>h.exterior);if(s){let h=null;for(let m of a){let v=m.b[0]-m.a[0],w=m.b[1]-m.a[1],f=s.x-e.x,x=s.z-e.z,P=f*w-x*v;if(Math.abs(P)<1e-9)continue;let R=((m.a[0]-e.x)*w-(m.a[1]-e.z)*v)/P,z=((m.a[0]-e.x)*x-(m.a[1]-e.z)*f)/P;if(R<=0||R>1||z<0||z>1||h&&R>=h.t)continue;let D=Math.hypot(v,w)||1;h={q:[e.x+f*R,e.z+x*R],out:[w/D,-v/D],t:R}}let _=h?[h.q[0]+h.out[0]*(n/2+.05),h.q[1]+h.out[1]*(n/2+.05)]:[e.x,e.z],b=o.floors.flatMap(m=>m.furniture).find(m=>m.id===s.id)?.mount_y??0;return{floorId:t.id,wall:_,end:[s.x,s.z],height:Math.max(0,b)}}let l=null;for(let h of a){let _=h.b[0]-h.a[0],b=h.b[1]-h.a[1],m=_*_+b*b||1,v=Math.min(1,Math.max(0,((e.x-h.a[0])*_+(e.z-h.a[1])*b)/m)),w=[h.a[0]+_*v,h.a[1]+b*v],f=Math.hypot(e.x-w[0],e.z-w[1]),x=Math.sqrt(m);(!l||f<l.d)&&(l={q:w,out:[b/x,-_/x],d:f})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let h of o.floors)for(let _ of h.outdoor??[]){let b=_.points.length;for(let m=0;m<b;m++){let v=_.points[m],w=_.points[(m+1)%b],f=w[0]-v[0],x=w[1]-v[1],P=d[0]*x-d[1]*f;if(Math.abs(P)<1e-9)continue;let R=((v[0]-c[0])*x-(v[1]-c[1])*f)/P,z=((v[0]-c[0])*d[1]-(v[1]-c[1])*d[0])/P;R>0&&z>=0&&z<=1&&(u=Math.max(u,Math.min(15,R)))}}let p=u>n+1?u:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*p,c[1]+d[1]*p],height:0}}function $i(o,e){let t=[];for(let n of o.floors)for(let r of n.furniture)(oe(r.type)??r.type)===e&&t.push({id:r.id,type:r.type,floorId:n.id,x:r.x,z:r.z,h:r.h,variant:r.variant??null});return t}var Kd=new WeakMap;function iu(o,e,t,n){let r=`${e.id}:${t.join(",")}>${n.join(",")}`,i=Kd.get(o);i||Kd.set(o,i=new Map);let s=i.get(r);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,c=Hs(e,a,l),d=[t,n],u=uo(e,t),p=uo(e,n);if(u&&p){let h=Qt(c,t),_=Qt(c,n);if(Si(c,u,h)&&Si(c,p,_)){let{dist:b,prev:m}=nu(c,h);if(Number.isFinite(b[_])){d.length=0;for(let v=_;v>=0;v=m[v])d.unshift(c.pos[v])}}}return i.set(r,d),d}function Es(o,e,t,n,r,i,s,a){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let c=iu(o,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(u=>[u[0],Be,u[1]]),[n.x,r,n.z]];return ru(l.id,d,i,s,a)}function ru(o,e,t,n,r){let i=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(i.push({floorId:o,a,b:l,dist:r,power:t,kind:n}),r+=c)}return i}function so(o,e,t,n){let i=(o.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(Be,e.height);return[t,...e.points.map(s=>[s[0],i,s[1]]),n]}function Gd(o,e){let t=jt(o,e,[...$t(o),...no(o)]);if(!t)return null;let[n,r]=Kt(t,e),i=e.u+n/2,s=t.unbounded?e.v+r/2:e.v;return[t.o[0]+t.eu[0]*i+t.es[0]*s,t.o[1]+t.eu[1]*i+t.es[1]*s,t.o[2]+t.eu[2]*i+t.es[2]*s]}function Vm(o,e,t){let{wall_exterior:n,wall_interior:r}=o.settings,i=Hs(e,n,r),s=uo(e,t),a=s?co(i,s.id,t):null;return a===null?t:i.pos[a]}function Mn(o,e,t,n,r){let i=[...o.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=r;for(let u of i)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],u=e[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-d[1])>.01){let _=Math.min(d[1],u[1]),b=Math.max(d[1],u[1]);for(let m of i)m.elevation>_+.01&&m.elevation<b-.01&&h.push(m.elevation);u[1]<d[1]&&h.reverse()}for(let _ of[...h,u[1]]){let b=(_-d[1])/(u[1]-d[1]||1),m=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*b,_,d[2]+(u[2]-d[2])*b]:u,v=s((d[1]+m[1])/2),w=Math.hypot(m[0]-d[0],m[1]-d[1],m[2]-d[2]);w>1e-4&&a.push({floorId:v.id,a:[d[0],d[1]-v.elevation,d[2]],b:[m[0],m[1]-v.elevation,m[2]],dist:l,power:t,kind:n}),l+=w,d=m}}return a}function Yd(o,e,t,n,r){let i=[...$t(o),...no(o)],s=jt(o,e,i),a=o.floors.find(m=>m.id===n.floorId);if(!s||!a)return[];let[l,c]=Kt(s,e),d=(m,v)=>[s.o[0]+s.eu[0]*m+s.es[0]*v,s.o[1]+s.eu[1]*m+s.es[1]*v,s.o[2]+s.eu[2]*m+s.es[2]*v],u=e.u+l/2,p=a.elevation+Be,h=[],_;if(s.unbounded){let m=d(u,e.v+c/2);_=[m[0],p,m[2]],h.push(_)}else if(s.wall){let m=d(u,e.v);_=[m[0],p,m[2]],h.push(m,_)}else{let m=d(u,e.v),v=ls(o)??a,w=Math.max(a.elevation+.5,Math.min(m[1]-.25,v.elevation+v.height-.12));_=[m[0],w,m[2]],h.push(m)}let b=Vm(o,a,[_[0],_[2]]);h.push([b[0],_[1],b[1]]),Math.abs(_[1]-p)>.05&&h.push([b[0],p,b[1]]);for(let m of iu(o,a,b,[n.x,n.z]).slice(1))h.push([m[0],p,m[1]]);return h.push([n.x,a.elevation+r,n.z]),Mn(o,h,t,"solar",a)}function su(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),r=new Array(n).fill(0),i=-1;for(let a of Object.values(o))for(let l of a){let c=typeof l.start=="number"?l.start:Date.parse(l.start),d=Math.floor((c-t.getTime())/3e5);d<0||d>=n||typeof l.mean!="number"||(r[d]+=Math.max(0,l.mean),i=Math.max(i,d))}return r.length=Math.max(i+1,n-3,1),{kwh:r.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...r),curve:r}}async function au(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Cs(o,e){let n=l=>42-(e>0?l/e*36:0),r=o.map((l,c)=>[c/288*220,n(l)]),i=r.map(([l,c],d)=>`${d?"L":"M"}${l.toFixed(1)} ${c.toFixed(1)}`).join(" "),[s,a]=r[r.length-1];return{line:i,area:`${i} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function ho(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var Bm=400;function lu(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let r=Math.min(1,(e.get(n.id)??0)/(ho(n)*(n.wp??Bm)));t.set(n.id,r>.003?Math.pow(r,.6):0)}return t}function cu(o,e,t){let n=new Map,r=e.settings.roof.solar??[],i=e.settings.roof.strings??[],s=ho,a=[],l=0,c=new Map;for(let p of r){let h=p.entity&&p.entity!=="none"?pe(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let _=p.string?i.find(m=>m.id===p.string):void 0,b=_?.entity&&_.entity!=="none"?pe(o.states[_.entity]):null;if(_&&b!==null){c.set(_.id,[...c.get(_.id)??[],p]);continue}a.push(p)}for(let[p,h]of c){let _=i.find(v=>v.id===p),b=Math.max(0,pe(o.states[_.entity])??0),m=h.reduce((v,w)=>v+s(w),0);for(let v of h)n.set(v.id,b*s(v)/m);l+=b}let d=Math.max(0,(t??0)-l),u=a.reduce((p,h)=>p+s(h),0);for(let p of a)n.set(p.id,u?d*s(p)/u:0);return n}var du={solar:[1,.78,.2],battery:[.25,1,.6],grid:[.3,.55,1]},uu=["solar","battery","grid"];function ao(o,e,t,n){let r=o+e+t;return r<=0?{solar:0,battery:0,grid:0,[n]:1}:{solar:o/r,battery:e/r,grid:t/r}}function pu(o,e){let t=Math.max(0,e.solar??0),n=Math.max(0,e.battery??0),r=Math.max(0,e.grid??0);return o==="grid"?ao(0,0,1,"grid"):o==="solar"?ao(1,0,0,"solar"):o==="battery"&&n>0?ao(0,1,0,"battery"):o==="inverter"?ao(t,n,0,"solar"):ao(t,n,r,o==="battery"?"battery":o==="export"?"solar":"grid")}function hu(o){let e=[0,0,0],t=0;for(let r of uu){let i=du[r];for(let s=0;s<3;s++)e[s]+=i[s]*o[r];t+=Math.max(...i)*o[r]}let n=Math.max(...e);return n>0?e.map(r=>r*t/n):e}function fu(o){return uu.filter(e=>o[e]>0).map(e=>({color:du[e],share:o[e]}))}var zs=["neon","blueprint","day","realistic"];function Tn(o){return o==="auto"||o==="theme"||zs.includes(o)?o:"theme"}var fo={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]},realistic:{night:[[24,32,54],[8,12,26]],day:[[178,208,234],[74,140,214]]}};function ct(o,e){return o==="theme"?e?.themes?.darkMode===!1?"day":"neon":o==="auto"?e?.states["sun.sun"]?.state==="above_horizon"?"day":"neon":o}function mu(o,e,t,n){return t?e:o===e?ct(o,n):o}function Um(o){let e=o.trim().toLowerCase(),t=/^#([0-9a-f]{6})$/.exec(e);if(t)return`#${t[1]}`;if(t=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(e),t)return`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`;let n=/^rgba?\(\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})\s*(?:[,/]\s*[\d.]+%?\s*)?\)$/.exec(e);if(!n)return null;let r=n.slice(1,4).map(Number);return r.some(i=>i>255)?null:`#${r.map(i=>i.toString(16).padStart(2,"0")).join("")}`}function qm(o,e){let t=o?.themes?.theme;return!t||t==="default"?null:Um(e("--primary-color")??"")}function Mi(o){let e=parseInt(o.slice(1),16),t=r=>{let i=r/255;return i<=.03928?i/12.92:((i+.055)/1.055)**2.4},n=.2126*t(e>>16&255)+.7152*t(e>>8&255)+.0722*t(e&255);return(n+.05)/.05>=1.05/(n+.05)?"#041018":"#ffffff"}function Ti(o,e,t,n){return e&&/^#[0-9a-f]{6}$/i.test(e)?e:o==="theme"?qm(t,n):null}var Ii={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function gu(o,e){let t=Ii[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[r,i]=t[n],[s,a]=t[n-1];if(e<=r){let l=(e-s)/(r-s);return[a[0]+(i[0]-a[0])*l,a[1]+(i[1]-a[1])*l,a[2]+(i[2]-a[2])*l]}}return t[t.length-1][1]}function _u(o,e,t){let n=new Map;for(let r of e.floors)for(let i of r.rooms){let s=mt(o,r,i,t);s!==null&&n.set(i.id,s)}return n}function bu(o){let e=Ii[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,i])=>`rgb(${i.map(s=>Math.round(s*255)).join(",")}) ${Math.round((r-t)/(n-t)*100)}%`).join(", ")})`}function le(o,e){if(!De(e))return M(o,`furn_${e}`);let t=hn(e);return t?Uo(t,o?.language??navigator.language):M(o,"pack_missing_item")}function wu(o){return o.startsWith("hh:")?o.slice(3).split("#")[0]||null:o.startsWith("detect:")?o.slice(7)||null:/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(o)?o:null}var Ai=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Pi(o){return o&&o!=="none"?o:null}function In(o,e){if(e.type!=="parking")return null;let t=Pi(e.entity);if(t){let i=o.states[t];if(!i||!Ai.has(i.state.toLowerCase()))return null}let n=e.vehicle??null,r=Pi(e.type_entity);if(r&&e.types?.length){let i=(o.states[r]?.state??"").trim().toLowerCase();if(i){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===i)??e.types.find(l=>s(l.state)&&i.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&Ie(n)?n:null}function Os(o,e){let t=new Map;for(let n of e.floors)for(let r of n.furniture){let i=In(o,r);i&&t.set(r.id,i)}return t}function vu(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[Pi(t.entity),Pi(t.type_entity)])).filter(e=>!!e)}function yu(o,e){let t=Ie(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var mo=1800*1e3,jm=new Set(["motion","occupancy","presence"]);function xu(o,e){return e.startsWith("binary_sensor.")&&jm.has(String(o.states[e]?.attributes.device_class))}function go(o,e){let t=[],n=new Set,r=(i,s,a,l)=>{n.has(i)||(n.add(i),t.push({entity:i,floorId:s,x:a,z:l}))};for(let i of e.floors)for(let s of i.placements)if(xu(o,s.entity_id))r(s.entity_id,i.id,s.x,s.z);else if(W(s.entity_id)==="camera")for(let a of at(o,s.entity_id))r(a,i.id,s.x,s.z);for(let i of e.floors)for(let s of i.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Fe(s.points);for(let c of _e(o,s.area_id))xu(o,c)&&r(c,i.id,a,l)}return t}function ku(o,e,t,n=mo){let r=t-n,i=[];for(let[s,a]of Object.entries(o)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=r&&d<=t&&i.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=r&&a<=t)||i.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||i.push({entity:s.entity,time:a})}return i.sort((s,a)=>s.time-a.time)}function $u(o,e,t,n=mo){let r=new Map(o.map(s=>[s.entity,s])),i=[];for(let s of e){let a=r.get(s.entity);if(!a)continue;let l=i[i.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||i.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return i.slice(-40)}function Ei(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit"})}var Su='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Q0=Math.PI/180,Pn=o=>Math.min(1,Math.max(0,o)),dt=(o,e,t)=>o.map((n,r)=>n+(e[r]-n)*t);var Mu={top:[74,140,214],horizon:[178,208,234]},Tu={top:[148,155,164],horizon:[192,197,203]},Iu={top:[8,12,26],horizon:[24,32,54]},Km=[244,156,104],Pu=[186,190,195],Gm=[88,112,70],Ym=[226,231,238];function Au(o,e){let t=e??{cloud:0,rain:0,snow:0,fog:0},n=o??90,r=Pn(t.cloud),i=Pn((n+6)/12),s=1-.32*Pn(t.rain),a=dt(Mu.top,Tu.top,r).map(_=>_*s),l=dt(Mu.horizon,Tu.horizon,r).map(_=>_*s),c=Pn(1-Math.abs(n-1)/7)*(1-r);l=dt(l,Km,c*.85),a=dt(a,[92,112,168],c*.4);let d=Pn(t.fog);a=dt(a,Pu,d),l=dt(l,Pu,d),a=dt(Iu.top,a,i),l=dt(Iu.horizon,l,i);let p=dt(Gm,Ym,Pn(t.snow*1.25)).map(_=>_*(.15+.85*i)),h=_=>_.map(b=>Math.round(b));return{top:h(a),horizon:h(l),ground:h(p)}}var Ri=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Hi(o,e){let t=[],n=Wt(o,e.floors),r=e.floors.length>1;for(let i of e.floors){let s=(d,u)=>i.rooms.find(p=>p.points.length>=3&&q([d,u],p.points))??null,a=(d,u)=>[s(d,u)?.name,r?i.name:null].filter(Boolean).join(" \xB7 ");for(let d of i.rooms){if(d.points.length<3)continue;let[u,p]=Fe(d.points);t.push({kind:"room",name:d.name,where:r?i.name:"",floorId:i.id,roomId:d.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,c=(d,u,p,h)=>{l.has(d)||!o.states[d]||(l.add(d),t.push({kind:"device",name:j(o,d),where:a(u,p),floorId:i.id,roomId:s(u,p)?.id??null,entity:d,icon:W(d),x:u,z:p,y:h}))};for(let d of i.placements)c(d.entity_id,d.x,d.z,d.y??_n(W(d.entity_id)??"sensor",i.height,d.mount));for(let d of i.furniture){let u=n.get(d.id),p=u?.entity??u?.power;p&&c(p,d.x,d.z,Math.min(i.height-.3,Math.max(.5,d.h)))}}return t}function Eu(o,e,t=8){let n=Ri(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let r=o.filter(a=>{let l=Ri(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),i=Ri(e.trim()),s=a=>(Ri(a.name).startsWith(i)?0:2)+(a.kind==="room"?0:1);return r.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var _o=new Map;async function Ds(o,e){}async function Ru(o,e){for(let t of _o.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`Home 3D: module ${t.id} failed on "${o}"`,n)}return null}function Hu(o){return Zt(e=>e.scene?.(o))}function Fu(o){return Zt(e=>e.cards?.(o))}function Cu(o){return Zt(e=>e.alerts?.(o))}function zu(o){return Zt(e=>e.watched?.(o))}function Ls(o,e){return Zt(t=>t.roomSheets?.(o,e))}function Ws(o){return Zt(e=>e.menuSheets?.(o))}function Ns(){return[..._o.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function Ou(o,e){let t=_o.get(o);if(!t?.module.settings)return[];try{return t.module.settings(e)??[]}catch(n){return console.warn(`Home 3D: module ${t.id} failed`,n),[]}}function Du(o){return Zt(e=>e.pools?.(o))}function Xt(){return _o.size>0}function Zt(o){let e=[];for(let t of _o.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`Home 3D: module ${t.id} failed`,n)}return e}function Wu(o,e,t){let n=o.filter(l=>Number.isFinite(l));if(n.length<2)return"";let r=Math.min(...n),s=Math.max(...n)-r||1,a=l=>Math.round(l*10)/10;return n.map((l,c)=>`${a(c/(n.length-1)*e)},${a(t-1-(l-r)/s*(t-2))}`).join(" ")}function Lu(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let t=Math.min(1,Math.max(0,e))*(o.length-1),n=Math.min(o.length-2,Math.floor(t)),r=t-n,[i,s]=[o[n],o[n+1]];return[i[0]+(s[0]-i[0])*r,i[1]+(s[1]-i[1])*r,i[2]+(s[2]-i[2])*r]}function Nu(o){let e=[];for(let t of o){let n=t.points;if(n.length<2)continue;let r=[],i=0;for(let l=1;l<n.length;l++){let c=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);r.push(c),i+=c}if(i<.01)continue;let s=t.colors.length===n.length,a=0;for(let l=1;l<n.length;l++){let c=r[l-1];if(c<.005)continue;let d=s?Lu([t.colors[l-1],t.colors[l]],.5):Lu(t.colors,(a+c/2)/i);e.push({floorId:t.floorId,a:[...n[l-1]],b:[...n[l]],dist:a,power:Math.max(0,t.flow),color:d,...t.width?{width:Math.min(3,Math.max(.5,t.width))}:{},...t.look==="pipe"?{pipe:!0}:{},...t.views==="house"?{house:!0}:t.views==="floor"?{floor:!0}:{}}),a+=c}}return e}function Vu(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function Bu(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function Fi(o,e){return(o??[]).filter(t=>!e||!t.minor)}var Qm=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Jm=[2200,2700,3200,4e3,5e3,6500],Xm=["hs","rgb","rgbw","rgbww","xy"],Zm=4,eg=16,tg=32,ng=128;function Bs(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>Xm.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Us(o){return((o.attributes.supported_features??0)&Zm)!==0&&typeof o.attributes.current_position=="number"}var Vs=class extends xe{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},noLook:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{W(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return g`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?g`<img src=${n} alt=${j(this.hass,this.entity)} />`:g`<span class="qm-note">${ue(this.hass,e)}</span>`}
      </button>
      ${this.noLook?y:g`<button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
            ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`}`}t(e,t){return M(this.hass,e,t)}async ask(){return!this.confirmSwitch||await this.question(this.t("confirm_switch",{name:j(this.hass,this.entity)}))}async guarded(e){await this.ask()&&e()}question(e){return gt(e,{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")})}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){$e(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,r)=>{let i=r/t*Math.PI*2-Math.PI/2;return g`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=Bs(e),n=e.state==="on",r=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?Qm.map(s=>g`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Jm.map(s=>g`<button class="qm-swatch" style="background:${og(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return g`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>{this.guarded(()=>this.call("light","toggle"))}}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${r} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?g`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,r))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:y}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",r=Us(e),i=(c,d,u,p=!1)=>g`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${d} @click=${u}>${c}</button>`,s=c=>t!==null&&Math.abs(t-c)<3,a=[i("\u25B2",this.t("cover_open"),()=>{this.guarded(()=>this.call("cover","open_cover"))},s(100)),...r?[75,50].map(c=>i(`${c}`,`${c} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:c}))},s(c))):[],i("\u25BC",this.t("cover_close"),()=>{this.guarded(()=>this.call("cover","close_cover"))},s(0)),...r?[25].map(c=>i(`${c}`,`${c} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:c}))},s(c))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return g`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):void this.guarded(()=>this.call("cover",l>50?"open_cover":"close_cover"))}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:ue(this.hass,e)}</b>
        </button>
      </div>
      ${r?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:y}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&ng&&n!==null?g`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(r.target.value)})}
      /></label>`:Yo(e)?g`<div class="qm-tilt-buttons">
        ${t&eg?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:y}
        ${t&tg?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:y}
      </div>`:y}renderCar(e){let t=e.entities,n=(u,p,h,_={})=>{this.hass.callService(u,p,{entity_id:h,..._})},r=t.lock,i=!!r&&r.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=t.climate,l=!!a&&a.startsWith("climate."),c=t.charging&&s(t.charging)?t.charging:null,d=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return g`<p class="qm-car-line">${d||ue(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${i||r&&s(r)?g`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?void this.question(this.t("car_unlock_confirm")).then(u=>u&&(i?n("lock","unlock",r):n("homeassistant","turn_off",r))):i?n("lock","lock",r):n("homeassistant","turn_on",r)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:y}
        ${a?g`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:y}
        ${c?g`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",c)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:y}
        ${!i&&!a&&!c?g`<p class="qm-note">${this.t("car_no_controls")}</p>`:y}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",r=e.state==="off"||e.state==="standby",i=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return g`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",r?"turn_on":n?"media_pause":"media_play")}>
          <span>${r?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?g`<p class="qm-media-title">${s}</p>`:y}
      ${i!==null?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(i)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:y}
      ${this.renderPlay(e)}`}renderPlay(e){if(!B("sound"))return y;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return y;let r=e.attributes.source;return g`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(i=>g`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:i.type,media_content_id:i.content})}>
            ▶ ${i.label}
          </button>`)}
        ${t.map(i=>g`<button class="qm-chip ${i===r?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:i})}>${i}</button>`)}
      </div>`}renderDoorLock(e){let t=e.state==="locked"||e.state==="locking"||e.state==="jammed",n=j(this.hass,this.entity),r=async()=>{await this.question(this.t(t?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",t?"unlock":"lock"),this.close())};return g`<p class="qm-car-line">${ue(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${t?"qm-slot-on":""}" @click=${r}>${t?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return g`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>{this.guarded(()=>n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${ue(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return y;let t=W(this.entity),n=this.car?this.renderCar(this.car):Y(e)?g`<p class="qm-note">${ue(this.hass,e)}</p>`:this.doorLock&&t==="lock"?this.renderDoorLock(e):t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&B("sound")?this.renderMedia(e):this.renderToggle(e);return g`<div class="qm" role="dialog" aria-label=${j(this.hass,this.entity)}>
      <div class="qm-title">${j(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Ve,Me`
    .qm-play-head {
      margin: 10px 0 4px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .qm-play {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 110px;
      overflow-y: auto;
    }
    .qm-chip {
      border: 1px solid rgba(160, 240, 255, 0.35);
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(8, 16, 34, 0.55);
      color: inherit;
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .qm-chip-on {
      border-color: var(--fp3d-accent, #37e0ff);
      color: var(--fp3d-accent, #37e0ff);
    }
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `]};function og(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,r)=>Math.round(n+(r-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Vs);var ig=new URL(import.meta.url),rg=new URL("./home-3d-3d.js?v=aafe34ee8965",ig).href,Uu;function bo(){return Uu??=import(rg),Uu}var qs;function qu(){let o=new URL("./home-3d-2d.js?v=6f8109af9d33",new URL(import.meta.url)).href;return qs??=import(o).catch(e=>{throw qs=void 0,e}),qs}function ju(o,e,t){return t?!0:o.show==="never"||e==="none"||e==="room"?!1:!!o.lamp||!!o.model}var js=Ne("home-3d-fun",()=>"8764de66e5ee");var Ci={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"},sg=new Set(["problem","safety","smoke","gas","carbon_monoxide","heat","moisture","tamper","battery"]),ag=/\b(ob|lb|on battery|low battery|discharg\w*|overload\w*|replace|error|fault\w*|degraded|warning|alarm|update)\b/,Ku=/\b(off|offline|disconnected|down|stopped|not_home|away|unreachable|dead|lost|shutdown|halted|failed)\b/,lg=/\b(ol|on|online|connected|up|running|home|ok|normal|idle|healthy|active|charging|charged|ready)\b/;function An(o){let e=[];for(let t of[o.entity,...o.links??[]])t&&!e.includes(t)&&e.push(t);return e}function Gu(o){if(!o)return null;let e=String(o.state??"").toLowerCase();if(e==="unavailable")return"offline";if(e==="unknown"||e==="")return"warning";let t=o.entity_id.slice(0,o.entity_id.indexOf("."));if(t==="binary_sensor"){let r=sg.has(String(o.attributes?.device_class??""));return e==="on"?r?"warning":"online":r?"online":"offline"}if(t==="update")return e==="on"?"warning":"online";if(t==="device_tracker"||t==="person")return e==="home"?"online":"offline";if(t==="switch"||t==="input_boolean"||t==="light"||t==="fan")return e==="on"?"online":"offline";if(Number.isFinite(Number(e)))return"online";let n=e.replace(/[_-]+/g," ");return ag.test(n)?"warning":Ku.test(n)||Ku.test(e)?"offline":(lg.test(n),"online")}function en(o,e){let n=(e.links??[]).filter(s=>s&&s!==e.entity).map(s=>o.states[s]).filter(s=>!!s),r=n.filter(s=>s.state==="unavailable").length,i=n.some(s=>s.state!=="unavailable"&&Gu(s)==="warning");if(e.entity){let s=Gu(o.states[e.entity])??"offline";return s==="online"&&(r||i)?"warning":s}return n.length?r===n.length?"offline":r||i?"warning":"online":null}function Yu(o,e){let t=new Map;for(let n of e)for(let r of n.furniture){let i=r.rack?.slots;if(i?.length)for(let s of i){if(!s.entity&&!s.links?.length)continue;let a=en(o,s);a&&t.set(`${r.id}/${s.id}`,a)}}return t}function Qu(o,e){let t=e.slice(0,e.indexOf(".")),n=o.states[e],r=String(n?.attributes?.device_class??""),i=String(n?.attributes?.unit_of_measurement??""),s=`${e.slice(t.length+1)} ${o.entities?.[e]?.translation_key??""}`.toLowerCase();return t==="update"?"update":t==="button"?"button":t==="switch"?"switch":t==="device_tracker"?"status":t==="binary_sensor"?["connectivity","running","plug","power","problem"].includes(r)||/status|state|online|connected|running/.test(s)?"status":"other":t!=="sensor"?"other":/runtime/.test(s)||r==="duration"&&/battery/.test(s)?"runtime":r==="battery"||/battery|charge/.test(s)&&i==="%"?"battery":r==="temperature"?"temperature":r==="power"||i==="W"||i==="kW"?"power":r==="data_rate"||/\/s$/.test(i)||/throughput|bandwidth|download|upload|\b(rx|tx)\b|_(rx|tx)(_|$)|network_(in|out)|packets/.test(s)?"throughput":/uptime|last_boot|boot_time/.test(s)||r==="timestamp"&&/up|boot/.test(s)?"uptime":/cpu|processor/.test(s)?"cpu":/memory|\bram\b|swap/.test(s)?"memory":/disk|volume|storage|drive|pool|\bfs\b|used_space|free_space/.test(s)?"disk":/load/.test(s)?"load":/status|state/.test(s)||r==="enum"?"status":"other"}var Ju=8,En="@hottest",tn="@online";function Xu(o,e){let t=new Set,n=[];for(let r of e)for(let i of An(r))t.has(i)||(t.add(i),n.push({id:i,kind:Qu(o,i),slot:r}));return n}var Gs=(o,e)=>String(o.states[e]?.attributes?.unit_of_measurement??""),Ks=(o,e)=>Gs(o,e)==="%",cg=(o,e)=>o.some(t=>t.slot===e&&(t.kind==="battery"||t.kind==="runtime"));function dg(o,e,t=Ju){let n=Xu(o,e),r=l=>n.filter(c=>c.kind===l),i=l=>cg(n,l.slot),s=(l,...c)=>{for(let d of c){let u=l.find(d);if(u)return u.id}return null};return[s(r("load"),l=>i(l)&&Ks(o,l.id),l=>Ks(o,l.id)),s(r("battery"),i,()=>!0),s(r("runtime"),()=>!0),s(r("power"),l=>/poe/.test(l.id),i),r("temperature").length?En:null,e.some(l=>en(o,l)!==null)?tn:null,s(r("disk"),l=>Ks(o,l.id)&&!/free/.test(l.id)),s(r("throughput"),l=>/wan|uplink|internet|external/.test(l.id),()=>!0)].filter(l=>!!l).slice(0,t)}var zi=(o,e)=>{let t=o.states[e];if(!t||t.state===""||t.state==="unavailable"||t.state==="unknown")return null;let n=Number(t.state);return Number.isFinite(n)?n:null};function Oi(o,e,t){let n=Xu(o,e),r=[...new Set(t??dg(o,e))],i=[];for(let s of r){if(i.length>=Ju)break;if(s===En){let a=n.filter(d=>d.kind==="temperature"),l=null;for(let d of a){let u=zi(o,d.id);u!==null&&(!l||u>zi(o,l.id))&&(l=d)}if(!a.length)continue;let c=l?zi(o,l.id):null;i.push({key:s,kind:"temperature",slot:l?.slot.id??null,value:c,unit:l?Gs(o,l.id):"",text:c===null?"unavailable":String(o.states[l.id].state),ids:a.map(d=>d.id),agg:"max"})}else if(s===tn){let a=e.map(c=>en(o,c)).filter(c=>c!==null);if(!a.length)continue;let l=a.filter(c=>c==="online").length;i.push({key:s,kind:"status",slot:null,value:l,of:a.length,unit:"",text:`${l}/${a.length}`,ids:[],agg:"one"})}else{let a=n.find(c=>c.id===s);if(!a)continue;let l=zi(o,s);i.push({key:s,kind:a.kind,slot:a.slot.id??null,value:l,unit:Gs(o,s),text:String(o.states[s]?.state??"unavailable"),ids:l===null?[]:[s],agg:"one"})}}return i}function Zu(o,e){let t=new Map;for(let n of e.ids)for(let r of o?.[n]??[]){if(typeof r.mean!="number")continue;let i=typeof r.start=="number"?r.start:Date.parse(r.start),s=t.get(i);t.set(i,s===void 0?r.mean:Math.max(s,r.mean))}return[...t].sort((n,r)=>n[0]-r[0]).map(([,n])=>n)}async function ep(o,e,t,n=Date.now()){try{return await o.callWS({type:"recorder/statistics_during_period",start_time:new Date(n-t).toISOString(),statistic_ids:[...e],period:"5minute",types:["mean"]})??{}}catch{return null}}function tp(o,e){let t=o.points,n=t[e],r=t[(e+1)%t.length],i=Math.hypot(r[0]-n[0],r[1]-n[1])||1,s=[(r[0]-n[0])/i,(r[1]-n[1])/i],a=[-s[1],s[0]],l=[(n[0]+r[0])/2,(n[1]+r[1])/2];q([l[0]+a[0]*.02,l[1]+a[1]*.02],t)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:n,b:r,u:s,n:a,length:i,rightward:s[0]*c[0]+s[1]*c[1]>0}}function Di(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function Ys(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var ug=.45;function np(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let r=e.rooms.find(a=>a.id===n.room_id);if(!r||n.edge>=r.points.length)continue;let{s:i,d:s}=Di(o,ui(r,n.edge,n.offset));Math.abs(s)>.4||i<-.05||i>o.length+.05||t.push(pg(n,i))}return t}function pg(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function op(o,e,t,n=ug){let r=[];for(let i of e.furniture){if(i.type==="stairwell"||i.type==="parking")continue;let s=q([i.x,i.z],t.points),a=Dt(i).map(h=>Di(o,h)),l=Math.min(...a.map(h=>h.d)),c=Math.min(...a.map(h=>h.s)),d=Math.max(...a.map(h=>h.s)),u=Di(o,[i.x,i.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||d<.02||c>o.length-.02)continue;let p=de(e,i);r.push({kind:"furniture",id:i.id,s0:c,s1:d,y0:p,y1:p+i.h,d:l})}return r}var ip=.3;function wo(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,r=o.height??ip,i=[];if(o.heights)t&&i.push([t.x,t.y,t.z]),o.points.forEach(([s,a],l)=>i.push([s,o.heights?.[l]??r,a])),n&&i.push([n.x,n.y,n.z]);else{if(!t||!n)return[];i.push([t.x,t.y,t.z],[t.x,r,t.z]);for(let[s,a]of o.points)i.push([s,r,a]);i.push([n.x,r,n.z],[n.x,n.y,n.z])}return i.filter((s,a)=>a===0||Qs(s,i[a-1])>.001)}function Qs(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function Li(o){let e=0;for(let t=1;t<o.length;t++)e+=Qs(o[t-1],o[t]);return e}function Wi(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[r,i]=[o[n-1],o[n]],s=Qs(r,i);if(!(s<1e-6)){if(t<=s||n===o.length-1){let a=Math.min(1,t/s),l=[(i[0]-r[0])/s,(i[1]-r[1])/s,(i[2]-r[2])/s];return{p:[r[0]+(i[0]-r[0])*a,r[1]+(i[1]-r[1])*a,r[2]+(i[2]-r[2])*a],dir:l,seg:n-1}}t-=s}}return null}function nn(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function hg(o,e){let{w:t,d:n,h:r}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,r*.55,0]:e==="pressure"?[t*.05,r*.9,0]:null;if(o.type==="pool_filter"){let i=Math.min(t,n)/2;if(o.variant==="side6"){let l=i+.08;return e==="pump"?[l,r*.6,0]:e==="return"?[l+.06,r*.48,0]:e==="waste"?[l,r*.36,0]:null}let s=r*.89,a=i*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(o.type==="pool_heat_pump"){let i=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?r*.25:r*.45;return i==="back"?[e==="in"?-t*.15:t*.15,s,-n/2-.04]:[(i==="left"?-1:1)*(t/2+.04),s,-n*.2]}return null}function rp(o,e){let t=hg(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[r,i]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*r-t[2]*i,y:t[1],z:o.z+t[0]*i+t[2]*r}}function vo(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function ap(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var Js=[.25,.7,1],fg=900;function lp(o,e,t,n=r=>r){let r=[];for(let i of o){let s=n(wo(i,t),i);if(s.length<2)continue;let a=e.get(i.id),l=a?.color??Js,c=0;for(let d=1;d<s.length;d++){let[u,p]=[s[d-1],s[d]],h=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);h<.01||(r.push({floorId:i.floor_id,a:u,b:p,dist:c,power:a?.active?fg:0,color:l}),c+=h)}}return r}function Ni(o,e,t){let n=t.pool??{},r=mn(e,t);return i=>{let{kind:s,id:a,port:l}=nn(i);if(s==="port"){let c=n.ports?.find(u=>u.id===a);if(!c)return null;let d=c.kind==="skimmer"?r-(c.depth??0):c.kind==="drain"?Bn(e,t)+.03:c.kind==="inlet"?r-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(s==="joint"){let c=n.joints?.find(d=>d.id===a);return c?vo(c,l):null}if(s!=="dev")return null;for(let c of o.floors){let d=c.furniture.find(_=>_.id===a);if(!d||!Dl.includes(d.type))continue;let u=l?rp(d,l):null,p=c.elevation-e.elevation;if(u)return{...u,y:u.y+de(c,d)+p};let h=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?Ll:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:h+de(c,d)+p}}return null}}function Xs(o,e,t,n){let r=d=>{let{kind:u,id:p}=nn(d);return u==="port"?t.pool?.ports?.find(h=>h.id===p)?.kind:void 0},i=d=>r(d)==="drain",s=d=>r(d)==="inlet"||r(d)==="skimmer",a=d=>{if(d.length<2)return d;let u=d[0],p=Zs(t,[u[0],u[2]]);if(!p)return d;let h=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],_=1;for(;_<d.length&&Math.hypot(d[_][0]-u[0],d[_][2]-u[2])<.01;)_++;let b=d.slice(_).map(v=>[...v]);for(let v=0;v<b.length-1;v++){let w=(b[v][0]-u[0])*p[0]+(b[v][2]-u[2])*p[1];if(w>=.349999)break;b[v][0]+=p[0]*(.35-w),b[v][2]+=p[1]*(.35-w)}let m=b[0]??d[d.length-1];return[u,h,[h[0],m[1],h[2]],...b]},l=d=>{if(d.length<2)return d;let u=d[0];if(!q([u[0],u[2]],t.points))return d;let p=Bn(n,t)-.15,h=d.findIndex((v,w)=>w>0&&Math.hypot(v[0]-u[0],v[2]-u[2])>.01);if(h<0)return d;let _=d[h],b=[_[0],_[2]];for(let v=0;v<t.points.length;v++){let w=t.points[v],f=t.points[(v+1)%t.points.length],x=mg([u[0],u[2]],[_[0],_[2]],w,f);x&&(b=x)}let m=Math.hypot(b[0]-u[0],b[1]-u[2])>1e-6?[b[0]+(b[0]-u[0])*.02,b[1]+(b[1]-u[2])*.02]:b;return[u,[u[0],p,u[2]],[m[0],p,m[1]],[m[0],_[1],m[1]],...d.slice(h)]},c=o;return e.from&&i(e.from)&&(c=l(c)),e.to&&i(e.to)&&(c=l([...c].reverse()).reverse()),e.from&&s(e.from)&&(c=a(c)),e.to&&s(e.to)&&(c=a([...c].reverse()).reverse()),c}function Zs(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let i=0;i<t.length;i++){let s=t[i],a=t[(i+1)%t.length];n+=s[0]*a[1]-a[0]*s[1]}let r=null;for(let i=0;i<t.length;i++){let s=t[i],a=t[(i+1)%t.length],l=a[0]-s[0],c=a[1]-s[1],d=Math.hypot(l,c);if(d<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*c)/(d*d))),p=Math.hypot(s[0]+l*u-e[0],s[1]+c*u-e[1]),h=n>0?[c/d+0,-l/d+0]:[-c/d+0,l/d+0];(!r||p<r.d)&&(r={d:p,n:h})}return r?r.n:null}function mg(o,e,t,n){let r=[e[0]-o[0],e[1]-o[1]],i=[n[0]-t[0],n[1]-t[1]],s=r[0]*i[1]-r[1]*i[0];if(Math.abs(s)<1e-9)return null;let a=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/s,l=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[o[0]+r[0]*a,o[1]+r[1]*a]:null}var Te=o=>Math.round(o*1e3)/1e3;var cp=-.3;function dp(o,e,t,n,r){let i=[],s=[],a=m=>e(m),l=[],c=o.from,d=[];for(let m of o.vias){if(m.kind!=="hole"){d.push(m.kind);continue}let v=t.find(R=>R.id===m.joint),w=a(c);if(!v||!w)continue;let f=a(`joint:${v.id}:inside`),x=a(`joint:${v.id}:outside`),P=m.dir?m.dir==="out":Math.hypot(w.x-f.x,w.z-f.z)<=Math.hypot(w.x-x.x,w.z-x.z);l.push({a:c,b:`joint:${v.id}:${P?"inside":"outside"}`,fits:d}),d=[],c=`joint:${v.id}:${P?"outside":"inside"}`}let u=o.to;if(u.length>1){let m=a(c),v=u.map(a).filter(w=>!!w);if(m&&v.length===u.length){let w=v.reduce((D,O)=>D+O.x,0)/v.length,f=v.reduce((D,O)=>D+O.z,0)/v.length,x=Math.hypot(m.x-w,m.z-f)||1,P=Math.min(1,x/2)/x,R=m.y<0||v.some(D=>D.y<0),z={id:r("joint"),kind:"tee",x:Te(w+(m.x-w)*P),z:Te(f+(m.z-f)*P),y:R?cp:Te(m.y)};s.push(z),l.push({a:c,b:`joint:${z.id}:in`,fits:d}),d=[],u.forEach((D,O)=>l.push({a:`joint:${z.id}:out${O+1}`,b:D,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let p=m=>{let{kind:v,id:w,port:f}=nn(m),x=v==="joint"?s.find(P=>P.id===w):void 0;return x?vo(x,f):a(m)},h=m=>n(m)==="source",_=m=>n(m)==="sink",b=o.to.some(h)&&!h(o.from)||_(o.from)&&!o.to.some(_);for(let m of l){let v=p(m.a),w=p(m.b);if(!v||!w)continue;let f=gg(v,w,sp(m.a,t),sp(m.b,t)),x={id:r("pipe"),from:m.a,to:m.b,floor_id:o.floorId,points:f.map(R=>[R[0],R[2]]),heights:f.map(R=>R[1])},P=Li(wo(x,p));x.fittings=m.fits.map((R,z)=>({id:r("fit"),kind:R,at:Te(Math.min(P/2,.4+z*.25)),...R==="valve"?{open:!0}:{}})),b&&(x={...x,from:x.to,to:x.from,points:[...x.points].reverse(),heights:[...x.heights??[]].reverse(),fittings:x.fittings?.map(R=>({...R,at:Te(Math.max(0,P-R.at))}))}),i.push(x)}return{pipes:i,joints:s}}function sp(o,e){let{kind:t,id:n,port:r}=nn(o),i=t==="joint"&&r==="outside"?e.find(s=>s.id===n):void 0;return i?.kind==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function gg(o,e,t=null,n=null){let r=o.y<0||e.y<0?cp:Te(Math.max(o.y,e.y)),i=[],[s,a]=[o.x,o.z];t&&([s,a]=[Te(s+t[0]*.5),Te(a+t[1]*.5)],i.push([s,Te(o.y),a]));let[l,c]=[e.x,e.z],d=[];return n&&([l,c]=[Te(l+n[0]*.5),Te(c+n[1]*.5)],d.push([l,Te(e.y),c])),i.push([Te(s),r,Te(a)]),Math.abs(l-s)>.01&&i.push([Te(l),r,Te(a)]),Math.abs(c-a)>.01&&i.push([Te(l),r,Te(c)]),i.push(...d),i.filter((u,p)=>p===0||Math.hypot(u[0]-i[p-1][0],u[1]-i[p-1][1],u[2]-i[p-1][2])>.001)}var _g=2e3;function bg(o){return Math.max(0,_g-o)}var wg=1e3;function up(o,e){return e?bg(o):Math.max(0,wg-o)}function pp(o){return o>.5?Math.min(2.4,.6+Math.sqrt(o)/50):.6}function hp(o,e,t,n=12,r=180){let i=Math.max(r,e),s=Math.max(r*.5625,t),a={cols:1,tile:Math.min(i,s*16/9)};for(let l=1;l<=Math.max(1,o);l++){let c=Math.ceil(o/l),d=(i-n*(l-1))/l,u=(s-n*(c-1))/c*16/9,p=Math.min(d,u);(p>a.tile||l===1)&&(a={cols:l,tile:p})}if(a.tile<r){let l=Math.max(1,Math.floor((i+n)/(r+n)));return{cols:Math.min(l,Math.max(1,o)),tile:r}}return{cols:a.cols,tile:Math.floor(a.tile)}}function Vi(o){return De(o)&&/:(?:[a-z0-9_.-]*_)?3d_printer(?:_[a-z0-9_.-]*)?$/.test(o)}var vg=/(progress|percent|completion|fortschritt)/,yg=/(status|state|printing)/,xg=/(chamber|light|lamp|led)/;function ea(o,e){let t={status:null,progress:null,light:null,camera:null};if(!e||e==="none")return t;let n=o.entities?.[e]?.device_id,r=n&&o.entities?Object.values(o.entities).filter(u=>u.device_id===n).map(u=>u.entity_id):[e],i=u=>`${u} ${String(o.states[u]?.attributes.friendly_name??"")} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),s=u=>u.startsWith("sensor.")&&o.states[u]?.attributes.unit_of_measurement==="%",a=r.find(u=>s(u)&&vg.test(i(u)))??null,c=(/^(sensor|binary_sensor)\./.test(e)&&e!==a?e:null)??r.find(u=>(Kn(o.states[u])||u.startsWith("binary_sensor."))&&yg.test(i(u)))??null,d=r.filter(u=>u.startsWith("light."));return{status:c,progress:a,light:d.find(u=>/chamber/.test(i(u)))??d[0]??r.find(u=>u.startsWith("switch.")&&xg.test(i(u)))??null,camera:r.find(u=>u.startsWith("camera."))??null}}function fp(o,e){let t=ea(o,e),n=l=>l?o.states[l]:void 0,r=n(t.status),i=!!r&&(r.entity_id.startsWith("binary_sensor.")?r.state==="on":zr(r.state)||/^paused?$/i.test(r.state)),s=Number(n(t.progress)?.state),a=i&&t.progress&&Number.isFinite(s)?Math.min(1,Math.max(0,s/100)):null;return{printing:i,progress:a,light:it(n(t.light)),camera:t.camera&&!Y(n(t.camera))?t.camera:null}}var kg=[.35,1,.55];function mp(o){let e=[];return o.printing&&e.push({part:"progress",color:kg,level:1,fill:Math.round((o.progress??0)*100)/100}),o.light&&e.push({part:"chamber",color:o.light.color,level:o.light.level}),e}function ta(o,e,t){let n=[...t.openings.values()].flatMap(F=>[F.cover,F.contact,F.tilt,F.contact2??null,F.tilt2??null,F.position??null,F.tiltAngle??null,F.lock??null]),r=Wc(e),i=r.filter(F=>W(F)==="camera").flatMap(F=>at(o,F)),s=r.map(F=>po(o,F)),a=e.energy,l=e.presence.flatMap(F=>[F.person,F.sensor]),c=e.floors.flatMap(F=>F.rooms.flatMap($=>_e(o,$.area_id).filter(E=>W(E)==="light"))),d=[...t.furniture.values()].flatMap(F=>[F.entity,F.power]),u=e.floors.flatMap(F=>F.furniture.flatMap($=>[$.state_entity??null,$.state_entity2??null,$.color_entity??null,$.show_when?.entity??null])),p=e.floors.flatMap(F=>F.furniture.flatMap($=>[$.door_left??null,$.door_right??null,$.soc??null,$.status??null,$.charge??null,$.export??null])),h=(e.settings.roof?.windows??[]).flatMap(F=>[F.cover,F.contact,F.tilt]).filter(F=>!!F&&F!=="none"),_=[...(e.settings.roof?.solar??[]).map(F=>F.entity),...(e.settings.roof?.strings??[]).map(F=>F.entity)].filter(F=>!!F&&F!=="none"),b=e.floors.flatMap(F=>F.furniture.filter($=>$.type==="robot_vacuum").map($=>Qn(o,t.furniture.get($.id)?.entity??null,$.room_sensor))),m=e.floors.flatMap(F=>F.furniture.flatMap($=>($.pictures??[]).flatMap(E=>[E.entity,...E.image.startsWith("camera:")?[E.image.slice(7)]:[]]))),v=t.heat?e.floors.flatMap(F=>F.rooms.flatMap($=>_e(o,$.area_id).filter(E=>E.startsWith("sensor.")))):[],w=[...vu(e.floors),...B("auto_pro")?gc(o,e.floors):[]],f=go(o,e).map(F=>F.entity),x=B("household")?[...e.floors.flatMap(F=>F.furniture.flatMap(zd)),e.settings.household?.notes??null].filter(F=>!!F&&F!=="none"):[],P=Gt(o,t.weatherEntityId??e.settings.weather_entity),R=e.floors.flatMap(F=>F.furniture.filter($=>Vi($.type)).flatMap($=>Object.values(ea(o,t.furniture.get($.id)?.entity??null)))),z=e.floors.flatMap(F=>[...F.rooms.flatMap($=>ro(o,F,$,"motion")),...F.furniture.map($=>ms(o,$))]),D=e.floors.flatMap(F=>F.furniture.flatMap($=>($.rack?.slots??[]).flatMap(An))),O=[...r,...D,...R,...i,...n,...s,...d,...u,...p,...b,...h,..._,...m,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...c,...v,...t.warnings,...w,...f,...z,...x,P,"sun.sun"];return[...new Set(O.filter(F=>!!F))]}var Bi=o=>String(o).padStart(2,"0"),na=/^([01]\d|2[0-3]):[0-5]\d$/;function oa(o){return`${Bi(o.getHours())}:${Bi(o.getMinutes())}`}function $g(o,e,t){return e<=t?o>=e&&o<=t:o>=e||o<=t}function ia(o,e,t){return e<=t?o>=e&&o<t:o>=e||o<t}function Sg(o){return!!o.from==!!o.to&&!!o.start==!!o.end}function Mg(o,e){if(!Sg(o))return!1;let t=oa(e),r=!!o.start&&!!o.end&&o.start>o.end&&t<o.end?new Date(e.getFullYear(),e.getMonth(),e.getDate()-1):e,i=`${Bi(r.getMonth()+1)}-${Bi(r.getDate())}`;return o.from&&o.to&&!$g(i,o.from,o.to)?!1:!o.start||!o.end||ia(t,o.start,o.end)}function Tg(o,e,t){let n=o.show_when;if(!n)return!0;let r=n.entity;if(r&&r!=="none"&&(e[r]?.state??"unavailable")==="unavailable")return!1;let i=n.intervals??[];return!i.length||i.some(s=>Mg(s,t))}function ra(o,e,t){return o.floors.flatMap(n=>n.furniture.filter(r=>!Tg(r,e,t)).map(r=>r.id))}function gp(o,e,t){let n=new Set(ra(o,e,t));return n.size?{...o,floors:o.floors.map(r=>({...r,furniture:r.furniture.filter(i=>!n.has(i.id))}))}:o}function _p(o){return o.floors.some(e=>e.furniture.some(t=>!!t.show_when?.intervals?.length))}var bp=/^#[0-9a-f]{3,8}$/i;function Ig(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function wp(o){if(!o||!o.kind)return null;let e=o.color&&bp.test(o.color)?o.color:"#0b1426",t=o.color2&&bp.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=Ig(o.image);if(!n)return null;let r=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${r}), rgba(4, 8, 16, ${r})), url("${n}") center / cover no-repeat`}var on=Ne("home-3d-voice",()=>"6ed9ffdd972a");function Ui(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("home3d.mic","1"),sessionStorage.getItem("home3d.mic")==="1"}catch{return!1}}function sa(){try{return localStorage.getItem("home3d.voice")==="1"}catch{return!1}}function aa(){try{return localStorage.getItem("home3d.screen")??""}catch{return""}}function rn(){try{return localStorage.getItem("home3d.voicePipeline")}catch{return null}}function qi(){try{sessionStorage.removeItem("home3d.mic")}catch{}}var Pg=.25,vp=o=>Math.round(o*1e3)/1e3;function la(o,e,t,n,r){let i=o.rooms.find(s=>s.points.length>=3&&q([e,t],s.points));return!i||q([n,r],i.points)?[n,r]:q([n,t],i.points)?[n,t]:q([e,r],i.points)?[e,r]:[e,t]}function yp(o,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let i=[(n[0]-t[0])/r,(n[1]-t[1])/r],s=l=>Math.abs(-(l[0]-t[0])*i[1]+(l[1]-t[1])*i[0]),a=l=>(l[0]-t[0])*i[0]+(l[1]-t[1])*i[1];return o.rooms.some(l=>l.id!==e&&l.points.some((c,d)=>{let u=l.points[(d+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function xp(o,e,t,n=Pg){let r=o.rooms.find(c=>c.points.length>=3&&q([e.x,e.z],c.points));if(!r)return null;let i=r.points,s=qe(i)>=0?1:-1,a=t/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],u=i[(c+1)%i.length],p=Math.hypot(u[0]-d[0],u[1]-d[1]);if(p<.3)continue;let h=[(u[0]-d[0])/p,(u[1]-d[1])/p],_=[-h[1]*s,h[0]*s],b=(e.x-d[0])*h[0]+(e.z-d[1])*h[1];if(b<0||b>p)continue;let v=o.rooms.some(D=>D.id!==r.id&&D.points.some((O,F)=>{let $=D.points[(F+1)%D.points.length],E=Math.abs((O[0]-d[0])*_[0]+(O[1]-d[1])*_[1]),S=Math.abs(($[0]-d[0])*_[0]+($[1]-d[1])*_[1]);return E<.02&&S<.02}))?a:0,w=(e.x-d[0])*_[0]+(e.z-d[1])*_[1]-v,f=Math.atan2(-_[0],_[1])*180/Math.PI,x=D=>Math.abs((e.rotation-D+540)%360-180),R=[{rotation:f,extent:e.d/2},{rotation:f+90,extent:e.w/2},{rotation:f-90,extent:e.w/2}].reduce((D,O)=>x(O.rotation)<x(D.rotation)?O:D);if(x(R.rotation)>50)continue;let z=w-R.extent;Math.abs(z)>n||l&&Math.abs(z)>=Math.abs(l.gap)||(l={x:vp(e.x-_[0]*z),z:vp(e.z-_[1]*z),rotation:(Math.round(R.rotation)%360+360)%360,gap:z})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Ag(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var ca={walls(o,e,t){let n=o.floors.find(i=>i.id===e),r=n?.rooms.find(i=>i.id===t);return!n||!r||r.points.length<3?[]:r.points.map((i,s)=>{let a=tp(r,s),l=yp(n,r.id,a.a,a.b),c=[...op(a,n,r).map(d=>[d.s0,d.s1]),...np(a,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:r.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:c}})},onWall(o,e,t){return Ys(Ag(o),e,t)},freeSpot(o,e,t=.1){let n=i=>i>=t&&i+e<=o.length-t&&!o.taken.some(([s,a])=>i<a+.05&&i+e>s-.05),r=o.length/2-e/2;for(let i=0;i<=o.length;i+=.05){if(n(r-i))return Math.round((r-i)*100)/100;if(n(r+i))return Math.round((r+i)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(a=>a.id===e),r=n?.outdoor.find(a=>a.id===t);if(!n||!r)return()=>null;let i=Ni(o,n,r),s=r.pool??{};return a=>{let{kind:l,id:c,port:d}=nn(a),u=l==="joint"?(s.joints??[]).find(h=>h.id===c):void 0;if(u)return vo(u,d);let p=l==="port"?(s.ports??[]).find(h=>h.id===c):void 0;return p?i(a)??{x:p.x,y:.02,z:p.z}:i(a)}},connect(o,e,t,n,r,i){let s=o.floors.find(l=>l.id===e),a=s?.outdoor.find(l=>l.id===t);return!s||!a?{pipes:[],joints:[]}:dp({...n,floorId:e},ca.nodeAt(o,e,t),a.pool?.joints??[],r,i)}};var kp={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},Eg={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},Rg=2e4,Hg=3*6e4,da=new Set(["unavailable","unknown",""]),Fg="home3d.director";function ua(){try{return localStorage.getItem(Fg)==="1"}catch{return!1}}function Sp(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var Cg=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Mp(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let r=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return Cg.test(r)}).sort()}function pa(o,e,t=Date.now()){if(!o||!e||da.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var $p=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function Tp(o,e,t=Date.now()){return!o||!e||da.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?pa(o,e,t):da.has(o.state)?!1:$p.has(e.state)&&!$p.has(o.state)}function Ip(o,e,t,n){if(n)return n;let r=o.entities??{},i=r[e]?.device_id,s=t.filter(d=>d.startsWith("camera.")),a=i?s.find(d=>r[d]?.device_id===i):void 0;if(a)return a;let l=d=>r[d]?.area_id??o.devices?.[r[d]?.device_id??""]?.area_id??null,c=l(e);return c&&s.find(d=>l(d)===c)||null}var yo=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let r=this.seen.has(e),i=this.seen.get(e);return this.seen.set(e,t),r&&i!==t&&n(i,t)}stopped(e,t,n){let r=this.runs.get(e);return t?(r?.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!r||r.run?(this.runs.set(e,{run:!1,since:n,ran:!!r?.run}),!1):r.ran&&n-r.since>=Hg?(r.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=30){let r=this.shown.get(e.key);if(r!==void 0&&t-r<Eg[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<Rg)return!1;let s=this.current;if(s&&t<s.until&&kp[s.shot.kind]>kp[e.kind])return!1;let a=Math.min(600,Math.max(10,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+a,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};var Se=Math.PI/180,ji=-.833;function zg(o,e,t){let n=(o/864e5+24405875e-1-2451545)/36525,r=((280.46646+n*(36000.76983+n*3032e-7))%360+360)%360,i=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(i*Se)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*i*Se)*(.019993-101e-6*n)+Math.sin(3*i*Se)*289e-6,l=125.04-1934.136*n,c=r+a-.00569-.00478*Math.sin(l*Se),u=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*Se),p=Math.asin(Math.sin(u*Se)*Math.sin(c*Se)),h=Math.tan(u/2*Se)**2,_=4*(h*Math.sin(2*r*Se)-2*s*Math.sin(i*Se)+4*s*h*Math.sin(i*Se)*Math.cos(2*r*Se)-.5*h*h*Math.sin(4*r*Se)-1.25*s*s*Math.sin(2*i*Se))/Se,b=new Date(o),w=(((b.getUTCHours()*60+b.getUTCMinutes()+b.getUTCSeconds()/60+_+4*t)%1440+1440)%1440/4-180)*Se,f=e*Se,x=Math.sin(f)*Math.sin(p)+Math.cos(f)*Math.cos(p)*Math.cos(w),P=90-Math.acos(Math.min(1,Math.max(-1,x)))/Se;return{azimuth:(Math.atan2(Math.sin(w),Math.cos(w)*Math.sin(f)-Math.tan(p)*Math.cos(f))/Se+180+360)%360,elevation:P}}function Pp(o,e,t){let n=new Date(o);n.setHours(0,0,0,0);let r=n.getTime(),i=10*6e4,s=u=>({...zg(u,e,t),t:u}),a=[],l=null,c=null,d=s(r);for(let u=r+i;u<=r+24*36e5;u+=i){let p=s(u),h=p.elevation>ji,_=d.elevation>ji;if(h!==_){let b=d.t,m=p.t;for(let w=0;w<12;w++){let f=(b+m)/2;s(f).elevation>ji===_?b=f:m=f}let v=s(Math.round((b+m)/2));h?(l??=v,a.push(v)):(c=v,a.push(v))}h&&a.push(p),d=p}return!l&&a.length&&s(r).elevation>ji&&a.unshift(s(r)),{points:a,rise:l,set:c}}function Ap(o,e,t){let n=o.cheap_rate;if(n&&n!=="none")return e[n]?.state==="on";let r=o.cheap_from,i=o.cheap_to;return!r||!i||!na.test(r)||!na.test(i)?null:ia(oa(t),r,i)}var Ep=(o,e)=>e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="energy";function Og(o,e,t){if(t==="none")return null;if(t)return t;let n=e.replace(/^sensor\./,"").replace(/_?power$/,""),r=`sensor.${n}_energy`;if(Ep(o,r))return r;let i=o.entities?.[e]?.device_id;if(!i)return null;let s=Object.keys(o.states).filter(a=>Ep(o,a)&&o.entities?.[a]?.device_id===i);return s.length===1?s[0]:s.find(a=>a.startsWith(`sensor.${n}_`))??null}function Rp(o,e){let t=[];for(let n of e){let r=Og(o,n.powerEntity,n.energy);r&&t.push({key:n.powerEntity,id:n.id,floorId:n.floorId,x:n.x,z:n.z,energy:r,power:n.powerEntity})}return t}async function Hp(o,e,t=new Date){let n=new Map,r=[...new Set(e.map(s=>s.energy).filter(s=>!!s))];if(!r.length)return n;let i=new Date(t);i.setHours(0,0,0,0);try{let s=await o.callWS({type:"recorder/statistics_during_period",start_time:i.toISOString(),statistic_ids:r,period:"5minute",types:["change"],units:{energy:"kWh"}});for(let a of e){if(!a.energy)continue;let l=s?.[a.energy]?.reduce((c,d)=>c+(d.change??0),0);l!==void 0&&n.set(a.key,l)}return n}catch{return null}}function Cp(o,e){return String(e&&o.states[e]?.attributes.unit_of_measurement||"m\xB3")}function zp(o,e){return g`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${zt`<polyline points=${Wu(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function Lg(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${ie(o,e*1e3,0)} l`:`${ie(o,e,e<10?2:0)} ${t}`}var Op=6*36e5,Wg=12e4,Ng=600*1e3,Dp={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Vg='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',Bg='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function ha(o,e,t){return o.rooms.find(n=>n.points.length>=3&&q([e,t],n.points))?.id??null}function Ug(o,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&Ce(o.states[t])}function qg(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function jg(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function Lp(o,e){let t=s=>s&&s!=="none"?s:null,n=rt(o,{cover:t(e.cover),contact:t(e.contact),tilt:t(e.tilt)},"window"),r=t(e.window)?o.states[t(e.window)]:void 0,i=n.open;if(r&&!Y(r)){let s=r.attributes.current_position;i=typeof s=="number"?Math.min(1,Math.max(0,s/100)):r.state==="open"||r.state==="opening"?1:0}return{open:i,tilt:n.tilt,cover:n.cover??0}}var fa=class extends xe{static properties={hass:{attribute:!1},building:{attribute:!1},canEdit:{attribute:!1},noSettings:{attribute:!1},home:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},_realSky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},plan2d:{attribute:!1},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_bigTile:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_cheap:{state:!0},_wires:{state:!0},_wireKwh:{state:!0},_wireOpen:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_settingsOpen:{state:!0},_rackView:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},_voice:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_phoneStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},rackCards:{attribute:!1},_rackRows:{state:!0},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;shownPlan=null;showTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;thumbsSaved=null;resizeObs=null;unsubAsk=null;voiceTimer;binInfoTimer;rackOpen=new Set;rackSparkKey="";rackSparkAt=0;alertSrc=null;alertTimer;motionTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;rackViewMemo=null;actionOwners=new Map;taps=new gi;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];printerCams=new Map;finished=new xi;appliances=new Map;directing=new yo;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this._realSky=null,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._bigTile=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._rackView=null,this._note=null;try{this.thumbsSaved=localStorage.getItem("home3d.thumbs_compact")}catch{this.thumbsSaved=null}this._thumbsCompact=hr(this.thumbsSaved,!1),this._phoneStage=!1,this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.plan2d=!1,this.clean=!1,this.cleanButton=!1,this.noSettings=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this._voice=null,this._micProbe=Ui(),this._alerts=[],this._household=[],this._hhFolded=qg("home3d.hhFolded"),this._binInfo=null,this._gangMenu=null,this.householdCard=!0,this.rackCards=!0,this._rackRows=null,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("home3d.flows")==="1",this._holoShow=localStorage.getItem("home3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!e?.connection||!this.isConnected||(this.unsubAsk=ll(e,t=>{this.onAsk(t)}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e?.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.wireTimer),this.wireKey="",document.removeEventListener("visibilitychange",this.onVisible),this.taps.cancel(),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,clearTimeout(this.showTimer),this.showTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearTimeout(this.motionTimer),this.motionTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&on().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{let n=t;if(!n.target?.closest?.(".fp3d-holo"))return;let r=this.renderRoot.querySelector("canvas");r&&(n.preventDefault(),r.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=t[0]?.contentRect.width??1e3,r=n<700,i=nl(n);i!==this._phoneStage&&(this._phoneStage=i,this._thumbsCompact=hr(this.thumbsSaved,i)),r!==this._narrowStage&&(this._narrowStage=r,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(this.starting||this.viewer)return;this.starting=!0;let e=this.plan2d;try{let t=e?await qu():await bo();if(!this.isConnected||e!==this.plan2d)return;let n=this.renderRoot.querySelector(".fp3d-stage");n.addEventListener("pointerdown",r=>{this._central&&!r.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=t.createViewer(n,{quality:this.quality,explode:this.explode,onRoomTap:(r,i)=>this.fire("room-tap",{floorId:r,roomId:i}),onFloorTap:r=>this.fire("floor-tap",{floorId:r}),floorInfo:r=>r.rooms.length===1?M(this.hass,"floor_rooms_one"):M(this.hass,"floor_rooms",{n:r.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(r,i,s)=>this.onDeviceTap(r,i,s),onRackTap:(r,i,s)=>this.showRackView(r,i,s),onDeviceHold:(r,i,s)=>this.onDeviceHold(r,i,s),onDeviceDoubleTap:r=>!this.ro&&this.taps.doubleTap(r),onRoomDoubleTap:(r,i)=>this.onRoomDoubleTap(r,i),onDeviceSwipe:(r,i,s,a,l)=>this.onDeviceSwipe(r,i,s,a,l),onFurnitureSelect:r=>this.fire("furniture-select",{id:r}),onFurnitureMove:(r,i,s)=>this.fire("furniture-move",{id:r,x:i,z:s}),onDeviceSelect:r=>this.fire("device-select",{id:r}),onDeviceMove:(r,i,s)=>this.fire("device-move",{id:r,x:i,z:s}),onStats:r=>{this.showStats&&(this._stats=r)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((r,i,s,a,l,c)=>this.placeHolo(r,i,s,a,l,c)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...ft()],xr()),this.hass&&Ds(this.hass,ft()).then(()=>this.syncDevices(!0)),this.shownPacks=No(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.viewPlan(this.building))),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1,this.isConnected&&!this.viewer&&e!==this.plan2d&&this.start()}}switchViewer(){this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this._through=null,this._menu=null,this.viewer?.dispose(),this.viewer=null,this.shownPacks=-1,this._thumbs=[],this.thumbsAt=0,this._error=null,this.start()}willUpdate(e){e.has("building")&&(Rl(this.building??null),Lc(this.building)),e.has("hass")&&this.hass&&Sd(Md(this.hass))}updated(e){(e.has("hass")||e.has("theme"))&&this.toggleAttribute("light",vn(this.effectiveTheme())),e.has("plan2d")&&e.get("plan2d")!==void 0&&this.switchViewer(),e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null);let n=!1,r=!1;if(t.batch(()=>{if(this.shownPacks!==No()&&(this.shownPacks=No(),t.setPacks([...ft()],xr()),this.hass&&Ds(this.hass,ft()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(Os(this.hass,this.building)),r=!0),e.has("building")&&this.building){let a=JSON.stringify(this.startViewOf());n=this.shownStartView!==void 0&&this.shownStartView!==a,this.shownStartView=a,t.setStartView(this.startViewOf()),t.setBuilding(this.viewPlan(this.building))}(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let i=["building","markerMode","heatMode","flows","alerts","dimmed"].some(a=>e.has(a))||this.markerMode==="room"&&e.has("roomId"),s=this.replayTicked&&!!this.replay;this.replayTicked=!1,(i||r||e.has("hass")||s)&&this.syncDevices(i||r,s&&(this.trail||this.detecting))}),n&&this.floorId===null&&t.resetView(),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),t.setFitMargin(this._phoneStage?ol:il),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("hass")&&!e.has("theme")&&(this.theme==="theme"||this.theme==="auto")){let i=this.effectiveTheme();t.setTheme(i),i!==ct(this.theme,e.get("hass"))&&this.scheduleThumbs()}e.has("theme")&&(t.setTheme(this.effectiveTheme()),e.has("hass")||this.syncDevices(!0)),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,this.replay?.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){let n=this.viewer,r=this.building;if(!n||!r||!this.hass)return;let i=this.hass,s=this.shownPlan?.plan,a=this.viewPlan(r);a!==s&&(n.setBuilding(a),e=!0),_p(r)&&!this.replay&&(this.showTimer??=setTimeout(()=>{this.showTimer=void 0,this.syncDevices(!1)},60050-Date.now()%6e4)),(e||!this.openingLinks||this.linkedRegistry!==i.entities)&&(this.openingLinks=Gn(i,a.floors),this.furnitureLinks=Wt(i,a.floors),this.linkedRegistry=i.entities,this.findIndex=null,this.alertSrc=this.alerts?Is(i,a,this.weatherEntityId):null,this.watchHousehold(i,a),this.watched=ta(i,a,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?Ps(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Xt()&&(this.watched=[...new Set([...this.watched,...zu(this.sceneHost(i,a))])]),e=!0);let l=e||t,c=!l;if(!l){for(let k of this.watched)if(this.shownStates.get(k)!==i.states[k]&&(l=!0,!k.startsWith("sensor."))){c=!1;break}}let d=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!l)return;if(c&&!this.replay){let k=up(performance.now()-this.lastSync,this._low);if(k>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},k);return}}this.lastSync=performance.now();let u=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(k=>[k,i.states[k]])),this.scene=Xt()?Hu(this.sceneHost(i,a)):[];let p=Jt(a,k=>this.furnitureLinks?.get(k.id)?.power??null),h=eu(i,a,p),_=Oc(i,a),b=this.furnitureMarkers(i,a,new Set(_.map(k=>k.id)),new Set(h.map(k=>k.powerEntity)));h.push(...b.consumers),this.lastConsumers=h;let m=tu(i,a,h,p),v=new Map(h.filter(k=>k.id!==k.powerEntity).map(k=>[k.id,k.power]));this.confirmSet=bn(i,a.floors);let w=this.trail?this.trailNow(i,a):[],f=B("camera_cockpit")&&!this.dimmed?this.detectionPins(i,_):[];this.detecting=f.length>0;let x=B("energy_pro"),P=new Set(B("auto_pro")?a.floors.flatMap(k=>k.furniture.filter(I=>I.type==="parking"&&I.car&&In(i,I)).map(I=>I.id)):[]);n.setDevices([...[..._,...b.markers,...this.lockMarkers(i,a)].map(k=>{let I=k.show==="no_power"||"energyDevice"in k&&k.energyDevice||"standby"in k&&k.standby?null:v.get(k.id)??null,V={...k,power:I,powerText:I===null?void 0:ce(i,I),effect:this.dimmed?!1:k.effect},ee=k.ownName&&(k.showName||this.markerNames)?k.ownName:"",C=B("sound")&&this.mediaCardUp(i,k.id)||B("auto_pro")&&!!k.furnitureId&&P.has(k.furnitureId);return{...V,pin:(this.plan2d?ju(V,this.markerMode,this.showPin(V)):this.showPin(V))&&!C,full:k.show==="always"||k.full===!0,caption:ee}}),...(x&&(this.flows??this._flows)&&!this.dimmed&&m.grid!==null?[this.gridPin(i,a,m.grid)]:[]).filter(k=>!!k),...f,...w.map((k,I)=>({id:`trail:${I}`,floorId:k.floorId,roomId:null,x:k.x,z:k.z,y:.3+.4*w.slice(0,I).filter(V=>V.entity===k.entity).length,icon:Su,name:j(i,k.entity),text:Ei(i,k.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(a)]);for(let k of this.scene)k.kind==="marker"&&k.card&&k.furnitureId&&!b.targets.has(k.furnitureId)&&b.targets.set(k.furnitureId,`module:${k.id}`);n.setTrail(w,this.replay?this.robotPaths(i,a):[]),this.actionOwners=pd(a.floors,k=>b.targets.get(k),k=>{let I=this.furnitureLinks?.get(k.id)?.entity;return I&&I!=="none"?I:null});for(let k of a.floors)for(let I of k.furniture)!b.targets.has(I.id)&&this.actionOwners.has(`item:${I.id}`)&&b.targets.set(I.id,`item:${I.id}`);n.setPickTargets(b.targets,this.openingTargets()),n.setScreens(b.screens),n.setFridgeDoors(Wr(i,a.floors)),n.setRackLeds(Yu(i,a.floors)),n.setAwnings(fc(i,a.floors)),n.setProjections(this.projectedCameras(i,a)),n.setRobots(this.robotInfos(i,a));let R=new Map;for(let k of a.settings.roof?.windows??[])R.set(k.id,Lp(i,k));n.setRoofWindows(R),n.setParked(Os(i,a));let z=new Map(a.floors.flatMap(k=>k.openings.map(I=>[I.id,I.type]))),D=new Map([...this.openingLinks].map(([k,I])=>[k,rt(i,I,z.get(k))]));n.setOpeningStates(D,d);let O=this.alertSrc?Bd(i,a,this.alertSrc,this.openingLinks):[],F=this.alerts&&Xt()?Cu(this.sceneHost(i,a)).map(k=>({kind:k.kind,entity:k.entity,roomId:k.roomId,floorId:k.floorId,text:k.text,color:k.color,quiet:!k.roomId})):[];this.setAlerts([...O,...F]),clearTimeout(this.fridgeTimer);let $=B("household")&&!this.replay?Nd(a.floors.flatMap(k=>k.furniture),i):null;$!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),$+500));let E=[..._,...b.markers].map(k=>`${k.id}:${k.glow?`${k.glow.level.toFixed(1)}/${k.glow.color.map(I=>I.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...D].map(([k,I])=>`${k}:${I.open}:${I.cover===null?"-":I.cover.toFixed(1)}`).join(";");if(E!==this.thumbSig){let k=this.thumbSig==="";this.thumbSig=E,k||this.scheduleThumbs(1500)}let S=a.floors.flatMap(k=>k.furniture.filter(I=>oe(I.type)==="home_battery").map(I=>({floorId:k.id,x:I.x,z:I.z})))[0]??(a.energy.battery?a.floors.flatMap(k=>k.placements.filter(I=>I.entity_id===a.energy.battery).map(I=>({floorId:k.id,x:I.x,z:I.z})))[0]:null),T=x?cu(i,a,m.solar):null,A=a.settings.roof.hologram??Qe,U=[...a.settings.roof.solar??[]].sort((k,I)=>I.rows*I.cols-k.rows*k.cols),G=a.settings.roof.strings??[],H=k=>(k.string?G.find(I=>I.id===k.string)?.inverter:null)??null,K=A.plant_floor?"all":"house",N=(k,I,V,ee)=>{let C=jt(a,k);if(!C)return null;let[Q,se]=Kt(C,k),re=k.u+Q/2+I,be=k.v+se/2+V,Ae=[C.o[0]+C.eu[0]*re+C.es[0]*be,C.o[1]+C.eu[1]*re+C.es[1]*be,C.o[2]+C.eu[2]*re+C.es[2]*be],ye=C.wall?.floorId??(C.unbounded?a.floors.find(Oe=>Oe.elevation===Math.min(...a.floors.map(cn=>cn.elevation)))?.id??a.floors[0].id:[...a.floors].sort((Oe,cn)=>cn.elevation-Oe.elevation)[0].id);return{p:[Ae[0]+C.n[0]*.05,Ae[1]+C.n[1]*.05,Ae[2]+C.n[2]*.05],n:[C.n[0],C.n[1],C.n[2]],floorId:ye,size:ee,roof:!0,views:K}},te=[],X=[],ve=m.grid!==null||m.battery!==null||m.solar!==null,he=A.place==="free"&&Number.isFinite(A.x)&&Number.isFinite(A.z),ae=x&&m.solar!==null&&!he?U.find(k=>k.id===A.field)??U[0]:void 0,Pe=ae?H(ae):null,He=!!ae&&!!Pe&&!U.some(k=>k.id!==ae.id&&H(k)===Pe)&&A.right===0&&A.up===0,Le=(()=>{if(!He||!ae)return 0;let k=jt(a,ae);return k?Kt(k,ae)[0]/2+1.2:0})(),ut=ae?N(ae,A.right+Le,A.up,A.size):null,xo=this.devicePowers(i,a),Ge=x&&m.solar!==null?a.energy.solar?[a.energy.solar]:Jt(a,k=>this.furnitureLinks?.get(k.id)?.power??null).solar:[];if(ut)te.push(ut),X.push({kind:"main",name:M(i,"holo_title"),w:null,dayIds:Ge,battery:null});else if(x&&ve&&he){let k=0,I=0,V=0,ee=1/0,C=a.floors[0];for(let be of a.floors){be.rooms.length&&(ee=Math.min(ee,be.elevation)),be.rooms.length&&(!C.rooms.length||be.elevation+be.height>C.elevation+C.height)&&(C=be);for(let Ae of be.rooms)for(let[ye,Oe]of Ae.points)k+=ye,I+=Oe,V++}V&&(k/=V,I/=V);let Q=A.x-k,se=A.z-I,re=Math.hypot(Q,se);te.push({p:[A.x,(Number.isFinite(ee)?ee:0)+(A.height??3),A.z],n:re>.01?[Q/re,0,se/re]:[1,0,0],floorId:C.id,size:A.size,roof:!0,views:K}),X.push({kind:"main",name:M(i,"holo_title"),w:null,dayIds:Ge,battery:null})}else if(x&&ve&&a.floors.some(k=>k.rooms.length)){let k=-1/0,I=1/0,V=-1/0,ee=0,C=a.floors[0];for(let Q of a.floors){for(let se of Q.rooms)for(let[re,be]of se.points)k=Math.max(k,re),I=Math.min(I,be),V=Math.max(V,be);Q.rooms.length&&Q.elevation+Q.height>ee&&(ee=Q.elevation+Q.height,C=Q)}te.push({p:[k+.6,ee+.4,(I+V)/2],n:[1,0,0],floorId:C.id,size:A.size,roof:!0,views:K}),X.push({kind:"main",name:M(i,"holo_title"),w:null,dayIds:Ge,battery:null})}if(x&&m.solar!==null){let k=new Set;for(let I of a.floors)for(let V of I.furniture.filter(ee=>oe(ee.type)==="inverter")){if(V.plant_card===!1||k.has(V.id))continue;k.add(V.id);let ee=U.filter(Ae=>H(Ae)===V.id),C=(ae&&V.id===Pe?ee.find(Ae=>Ae.id!==ae.id):null)??ee[0],Q=this.furnitureLinks?.get(V.id)?.power??null,se=C?N(C,V.plant_right??0,V.plant_up??0,A.size*.85):null;if(!se||!Q)continue;let re=I.furniture.filter(Ae=>oe(Ae.type)==="home_battery").sort((Ae,ye)=>Math.hypot(Ae.x-V.x,Ae.z-V.z)-Math.hypot(ye.x-V.x,ye.z-V.z))[0],be=re?.soc&&re.soc!=="none"?Number(i.states[re.soc]?.state):NaN;te.push(se),X.push({kind:"plant",name:V.name||le(i,V.type),w:Math.max(0,pe(i.states[Q])??0),dayIds:[Q],battery:re?{soc:Number.isFinite(be)?be:null,w:xo.get(re.id)??null}:null})}}let ko=A.device_house===!1?"floor":"all";if(x)for(let k of a.floors){for(let I of k.furniture){if(!I.holo)continue;let V=this.furnitureLinks?.get(I.id)?.power??null,ee=h.find(Q=>Q.id===I.id);if(!V&&!ee)continue;let C=k.elevation+de(k,I)+I.h;te.push({p:[I.x,C+.1,I.z],n:[0,1,0],floorId:k.id,size:A.size*.7,roof:!1,views:ko,room:ha(k,I.x,I.z)}),X.push({kind:"device",name:I.name||le(i,I.type),w:ee?.power??(V?pe(i.states[V]):null),dayIds:V?[V]:[],battery:null})}for(let I of k.placements){if(!I.holo)continue;let V=po(i,I.entity_id);if(!V)continue;let ee=k.elevation+(I.y??.4)+.2;te.push({p:[I.x,ee,I.z],n:[0,1,0],floorId:k.id,size:A.size*.7,roof:!1,views:ko,room:ha(k,I.x,I.z)}),X.push({kind:"device",name:I.name||j(i,I.entity_id),w:pe(i.states[V]),dayIds:[V],battery:null})}}let Ue=[];if(B("sound")){let k=new Set,I=(a.settings.roof.hologram??Qe).size,V=(C,Q,se,re,be,Ae)=>{let ye=i.states[Q];if(!ye||W(Q)!=="media")return;if(k.has(Q)){let At=Ue.find(nr=>nr.id===Q);At&&Ue.push({...At,id:`${Q}#${Ue.filter(nr=>nr.id.startsWith(`${Q}#`)).length+2}`,floorId:C.id,x:se,z:re,members:[Q]});return}k.add(Q);let Oe=this.ro?void 0:this.mediaGrace.get(Q),cn=[ye.attributes.media_title,ye.attributes.app_name,ye.attributes.source].find(At=>typeof At=="string"&&!!At.trim())??"";if(!(!Y(ye)&&(ye.state==="playing"||ye.state==="paused"&&!!cn&&this.pausedRecently(ye)||ye.state==="on"&&!!ye.attributes.source))){Oe&&Oe.until>Date.now()?(Ue.push({...Oe.source,playing:!1,level:0}),te.push(Oe.anchor),X.push({...Oe.card,media:{...Oe.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Oe.until-Date.now()+100))):Y(ye)||(this.mediaGrace.delete(Q),Ue.push({id:Q,floorId:C.id,x:se,z:re,level:0,playing:!1,members:[]}));return}let tr=ye.state==="playing",Ye=ye.attributes,Ta=typeof Ye.volume_level=="number"?Math.min(1,Math.max(0,Ye.volume_level)):.5,ih=Array.isArray(Ye.group_members)?Ye.group_members.filter(At=>At!==Q):[];Ue.push({id:Q,floorId:C.id,x:se,z:re,level:tr?.3+.7*Ta:0,playing:tr,members:ih});let rh=cn||M(i,"holo_media_playing"),Ia={p:[se,C.elevation+be+.12,re],n:[0,1,0],floorId:C.id,size:I*.7,roof:!1,views:"all"},Pa={kind:"media",name:Ae,w:null,dayIds:[],battery:null,media:{id:Q,title:rh,artist:typeof Ye.media_artist=="string"?Ye.media_artist:typeof Ye.media_album_name=="string"?Ye.media_album_name:"",picture:typeof Ye.entity_picture=="string"?Ye.entity_picture:null,volume:Math.round(Ta*100),playing:tr}};te.push(Ia),X.push(Pa),this.ro||this.mediaGrace.set(Q,{until:Date.now()+45e3,card:Pa,source:Ue[Ue.length-1],anchor:Ia})},ee=(C,Q)=>{for(let se of C.furniture){if((se.entity!=null&&se.entity!=="none")!==Q)continue;let re=this.furnitureLinks?.get(se.id)?.entity;re&&V(C,re,se.x,se.z,de(C,se)+se.h,se.name||le(i,se.type))}};for(let C of a.floors)ee(C,!0);for(let C of a.floors)for(let Q of C.placements)V(C,Q.entity_id,Q.x,Q.z,Q.y??1.1,Q.name||j(i,Q.entity_id));for(let C of a.floors)ee(C,!1)}if(B("auto_pro")){let k=(a.settings.roof.hologram??Qe).size;for(let I of a.floors)for(let V of I.furniture){if(V.type!=="parking"||!V.car)continue;let ee=In(i,V);if(!ee)continue;let C=Yn(i,V);if(C.soc===null&&C.range===null&&C.locked===null&&C.climateOn===null)continue;let Q=yu(V,ee),se=de(I,V)+(Q?.h??1.6);te.push({p:[V.x,I.elevation+se+.25,V.z],n:[0,1,0],floorId:I.id,size:k*.7,roof:!1,views:"all"});let re=C.entities;X.push({kind:"car",name:V.name||le(i,ee),w:null,dayIds:[],battery:null,car:{spot:V.id,soc:C.soc,range:C.range,rangeUnit:C.rangeUnit,chargingW:C.chargingW,charging:C.charging,locked:C.locked,climateOn:C.climateOn,lock:re.lock,climate:re.climate,charge:re.charging&&/^(switch|input_boolean)\./.test(re.charging)?re.charging:null}})}}for(let{anchor:k,card:I}of this.rackHolos(i,a))te.push(k),X.push(I);let Ji=this.scene.filter(k=>k.kind==="water").map(k=>({...k,level:this.dimmed?k.level*.4:k.level}));if(n.setPools(Ji),Xt()){let k=(a.settings.roof.hologram??Qe).size;for(let I of Fu(this.sceneHost(i,a))){let V=a.floors.find(C=>C.id===I.anchor.floorId);if(!V)continue;let ee=null;if(I.anchor.areaId){let C=V.outdoor.find(be=>be.id===I.anchor.areaId);if(!C||C.points.length<3)continue;let[Q,se]=Fe(C.points),re=C.type==="pool"?mn(V,C):tt(V,Q,se);ee=[Q,V.elevation+Math.max(re,0)+(C.above?.6:1.1),se]}else if(I.anchor.furnitureId){let C=V.furniture.find(Q=>Q.id===I.anchor.furnitureId);if(!C)continue;ee=[C.x,V.elevation+de(V,C)+C.h+.25,C.z]}ee&&(te.push({p:ee,n:[0,1,0],floorId:V.id,size:k*.7,roof:!1,views:"all"}),X.push({kind:"module",name:I.title,w:null,dayIds:[],battery:null,module:I}))}for(let I of this.scene){if(I.kind!=="tag")continue;let V=a.floors.find(ee=>ee.id===I.floorId);V&&(te.push({p:[I.at[0],V.elevation+I.at[1],I.at[2]],n:[0,1,0],floorId:V.id,size:k*.75,roof:!1,views:I.views??"all"}),X.push({kind:"bin",name:I.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:I.color??"#37e0ff",when:I.text,name:I.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(B("household")){let k=(a.settings.roof.hologram??Qe).size;for(let I of Rd(this.binHolos)){let V=a.floors.find(C=>C.id===I.floorId);if(!V)continue;te.push({p:[I.x,V.elevation+I.y+.04,I.z],n:[0,1,0],floorId:I.floorId,size:k*.75,roof:!1,views:"all"});let ee=I.lines.map(C=>({color:C.color,when:C.when,name:C.name,soon:!!C.soon&&!C.out,out:!!C.out}));X.push({kind:"bin",name:I.lines.map(C=>C.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:ee,soon:ee.some(C=>C.soon),icon:I.lines.length===1?I.lines[0].icon??null:null}})}}n.setSound(Ue);let pt=this._walk?this.walkRoomPts:null,L=te.map(k=>!this._walk||!!pt&&q([k.p[0],k.p[2]],pt)),Z=X.filter((k,I)=>L[I]),fe=x&&!!(this.flows??this._flows)&&!this.dimmed,We=fe&&!this._walk?Rp(i,h).filter(k=>a.floors.some(I=>I.id===k.floorId)):[];JSON.stringify(We)!==JSON.stringify(this._wires)&&(this._wires=We),this.holoCount=Z.length;let ht=We.map(k=>({p:[k.x,a.floors.find(I=>I.id===k.floorId).elevation+.03,k.z],n:[0,1,0],floorId:k.floorId,size:1,roof:!1,views:"all",plan:!0}));n.setAnchors([...te.filter((k,I)=>L[I]),...ht]),JSON.stringify(Z)!==JSON.stringify(this._holos)&&(this._holos=Z),this.watchRackSpark(),n.setSolarLevels(T&&!this.dimmed?lu(a,T):new Map);let $o=k=>pu(k,m),Hn=fe?ou({building:a,consumers:h,summary:m,battery:S??null,fieldPower:T,devicePower:this.devicePowers(i,a)}).map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.power,color:hu($o(k.kind)),dots:fu($o(k.kind)),thick:pp(k.power)})):[],So=this.poolPipes(a),Xi=this.scene.filter(k=>k.kind==="line");n.setFlows(this.dimmed?Hn:[...Hn,...So.flows,...Nu(Xi)]),n.setPipes(So.tubes),n.setPatches(this.scene.filter(k=>k.kind==="patch").map(k=>({floorId:k.floorId,points:k.points,y:k.y,color:k.color,opacity:this.dimmed?k.opacity*.4:k.opacity,...k.glow?{glow:!0}:{}})));let an=[],Zi=ii("locate")&&ri(a)?[...an,...si(i,a,new Set(an.map(k=>k.id)))]:an;n.setPersonLook(ts(a)==="pin"?"pin":"figure"),n.setPersons(Zi),this.lastPersons=Zi.map(k=>({floorId:k.floorId,roomId:k.roomId}));let nh=Fc(i,a,this.openingLinks,Zi);n.setFloorInfo(new Map([...nh].map(([k,I])=>[k,Cc(i,I)])));let Mo=i.states["sun.sun"]?.attributes,Fn=typeof Mo?.elevation=="number"?Mo.elevation:null;n.setSun(Fn!==null&&typeof Mo?.azimuth=="number"?{elevation:Fn,azimuth:Mo.azimuth}:null);let To=k=>M(i,k).charAt(0).toUpperCase();n.setSunPath(this.sunPathToday(i),[To("compass_n"),To("compass_e"),To("compass_s"),To("compass_w")]),(this.theme==="auto"||this.theme==="theme")&&n.setTheme(this.effectiveTheme());let ya=this.weather&&!this.dimmed&&B("weather")?wd(i,Gt(i,this.weatherEntityId??a.settings.weather_entity),a.settings.rain_entity):null,ln=ya?vd(ya,a.settings.weather_effects):null;this.cloud=ln?.cloud??0,this._sky=(Fn===null?0:Math.min(1,Math.max(0,(Fn+4)/16)))*(1-.45*this.cloud);let xa=this.effectiveTheme()==="realistic"?Au(Fn,ln):null;JSON.stringify(xa)!==JSON.stringify(this._realSky)&&(this._realSky=xa);let oh=ln?ln.sky:(a.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&B("weather")?{...ln??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:oh}:null),this.watchLightning(!!ln?.lightning),this.applyTint(),this.applyMotion();let er=Ap(a.energy,i.states,new Date(this.now()));er!==this._cheap&&(this._cheap=er);let ka=m.grid!==null||m.solar!==null||m.battery!==null||m.tariff!==null||er!==null?m:null;JSON.stringify(ka)!==JSON.stringify(this._energy)&&(this._energy=ka);let $a=h.some(k=>k.wallbox)?h.filter(k=>k.wallbox).reduce((k,I)=>k+I.power,0):null,Sa=a.floors.flatMap(k=>k.furniture.filter(I=>oe(I.type)==="inverter")).map(k=>{let I=this.furnitureLinks?.get(k.id)?.power,V=I?pe(i.states[I]):null;return V===null?null:{name:k.name||le(i,k.type),w:Math.max(0,V)}}).filter(k=>!!k);JSON.stringify(Sa)!==JSON.stringify(this._plants)&&(this._plants=Sa),$a!==this._wallboxW&&(this._wallboxW=$a),this.watchSolarDay([...new Set(X.flatMap(k=>k.dayIds))]);let Ma=B("energy_pro");this.watchMeters(Ma?a.energy.gas??null:null,Ma?a.energy.water??null:null),this.watchWireKwh(We),u&&(this.syncMs=this.syncMs*.8+(performance.now()-u)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.findIndex??=Hi(t,n)).find(s=>s.entity===e);if(r){this.goTo(r);return}let i=t.entities?.[e]?.area_id??t.devices?.[t.entities?.[e]?.device_id??""]?.area_id??null;for(let s of n.floors){let a=s.openings.find(u=>{let p=this.openingLinks?.get(u.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!i&&u.area_id===i));if(!l)continue;let[c,d]=Fe(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:c,z:d,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,r=n?Gn(t,e.floors):this.openingLinks,i=n?Wt(t,e.floors):this.furnitureLinks,s=Ps(Is(t,e,this.weatherEntityId)),a=ta(t,e,{openings:r,furniture:i,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=B("auto_pro")?e.floors.flatMap(c=>c.furniture.filter(d=>d.type==="parking").flatMap(d=>[typeof d.entity=="string"?d.entity:null,d.car?Zo(t,d).tracker:null]).filter(d=>!!d&&d.startsWith("device_tracker."))):[];return{entities:a,openings:[...r],furniture:[...i],low:this._low,cars:l,energy:B("energy_pro"),auto:B("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return y;let t=this.hass,n=t.states[e.entity],r=ue(t,n),i=W(e.entity)==="light"&&n?.state==="on"&&r.endsWith("%")?`${M(t,"state_on")} \xB7 ${r}`:r,s=n?.last_changed?M(t,"tt_since",{time:Ei(t,Date.parse(n.last_changed))}):"";return g`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${j(t,e.entity)}</span>
      <b>${s?`${i} \xB7 ${s}`:i}</b>
    </div>`}devicePowers(e,t){let n=new Map;for(let r of t.floors)for(let i of r.furniture){let s=oe(i.type);if(s!=="inverter"&&s!=="home_battery"&&s!=="solar")continue;let a=this.furnitureLinks?.get(i.id)?.power,l=oe(i.type)==="home_battery"&&i.charge&&i.charge!=="none"?pe(e.states[i.charge]):null,c=a?pe(e.states[a],oe(i.type)==="home_battery"&&t.energy.battery_invert&&l===null):null;c!==null&&l!==null?c=Math.max(0,c)-Math.max(0,l):c===null&&l!==null&&(c=-Math.max(0,l)),c!==null&&n.set(i.id,c)}return n}detectionPins(e,t){let n=[],r=new Set(this.building?.floors.flatMap(i=>i.placements.filter(s=>s.detect_pins===!1).map(s=>s.entity_id))??[]);for(let i of t){if(!i.model?.startsWith("camera")||r.has(i.id))continue;let s=this.now(),a=at(e,i.id).filter(h=>{let _=e.states[h];return _?_.state==="on"?!0:_.state==="off"&&!!_.last_changed&&s-Date.parse(_.last_changed)<Wg:!1}),l=new Map;for(let h of a){let _=ns(e,h);l.has(_)||l.set(_,h)}l.size>1&&l.delete("motion");let c=(i.rotation??0)*Math.PI/180,d=[-Math.sin(c),Math.cos(c)],u=i.model==="camera_ceiling",p=0;for(let[h,_]of l){let b=e.states[_],m=b?.last_changed?Ei(e,Date.parse(b.last_changed)):"";n.push({id:`detect:${_}`,floorId:i.floorId,roomId:i.roomId,x:i.x+(u?0:d[0]*1.1),z:i.z+(u?0:d[1]*1.1),y:1.4+.4*p++,icon:Dp[h]??Dp.motion,name:j(e,_),text:`${M(e,`detect_${h}`)}${m?` \xB7 ${m}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let r=Fs(t);if(!r)return null;let i=Math.abs(n)<5,s=t.settings.outage_entity;return s&&vi(e.states[s])?{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:Bg,name:M(e,"holo_grid"),text:M(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:Vg,name:M(e,"holo_grid"),text:i?ce(e,0):`${M(e,n<0?"energy_grid_export":"energy_grid_import")} ${ce(e,Math.abs(n))}`,active:!i,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(s=>!!s),r=this.replay?"":n.join(",");if(r===this.meterKey)return;if(this.meterKey=r,clearInterval(this.meterTimer),this.meterTimer=void 0,!r){this._meters=null;return}let i=async()=>{if(!this.hass||document.hidden)return;let s=await Xd(this.hass,n);this.meterKey===r&&s&&(this._meters={gas:e?s.get(e)??null:null,water:t?s.get(t)??null:null})};i(),this.meterTimer=setInterval(()=>{i()},3e5)}holoCount=0;wireKey="";wireTimer;watchWireKwh(e){let t=this.replay?"":e.map(r=>`${r.key}=${r.energy??""}`).join(",");if(t===this.wireKey)return;if(this.wireKey=t,clearInterval(this.wireTimer),this.wireTimer=void 0,!t){this._wireKwh=null;return}let n=async(r=!1)=>{if(!this.hass||document.hidden&&!r)return;let i=await Hp(this.hass,e);this.wireKey===t&&i&&(this._wireKwh=i)};n(!0),this.wireTimer=setInterval(()=>{n()},3e5)}placeWire(e,t,n,r){let i=this.renderRoot.querySelector(`.fp3d-wire[data-wire="${e}"]`);i&&(i.hidden!==!r&&(i.hidden=!r),r&&(i.style.transform=`translate(${t.toFixed(1)}px, ${n.toFixed(1)}px) translate(-50%, -50%)`))}renderWires(){if(!this._wires?.length)return y;let e=this.hass;return this._wires.map((t,n)=>{let r=this._wireKwh?.get(t.key),i=r===void 0?"\u2026":`${ie(e,r,r<10?2:1)} kWh`,s=j(e,t.id),a=this._wireOpen===t.key;return g`<button
        class="fp3d-wire ${a?"fp3d-wire-open":""}"
        data-wire=${n}
        hidden
        aria-expanded=${a}
        aria-label=${`${s}: ${M(e,"wire_today")} ${i}`}
        @click=${l=>{l.stopPropagation(),this._wireOpen=a?null:t.key}}
      >
        <span class="fp3d-wire-tip" aria-hidden="true">${s}<span>${M(e,"wire_today")} <b>${i}</b></span></span>
      </button>`})}poolPipes(e){let t=[],n=[],r=new Map(this.scene.filter(i=>i.kind==="pipeflow").map(i=>[i.areaId,i.flows]));for(let{floor:i,area:s}of ap(e.floors)){let a=s.pool;if(!a.pipes?.length&&!a.joints?.length)continue;let l=a.ports??[],c=new Map(Object.entries(r.get(s.id)??{})),d=Ni(e,i,s),u=(p,h)=>Xs(p,h,s,i);t.push(...lp(a.pipes??[],c,d,u));for(let p of l){if(p.kind!=="inlet")continue;let h=d(`port:${p.id}`),_=h&&Zs(s,[h.x,h.z]);if(!h||!_)continue;let b=(a.pipes??[]).find(v=>v.to===`port:${p.id}`),m=b?c.get(b.id):void 0;n.push({floorId:i.id,points:[[h.x+_[0]*.03,h.y,h.z+_[1]*.03],[h.x-_[0]*.09,h.y,h.z-_[1]*.09]],radius:.035,water:m?.active?m.color:null,fittings:[]})}for(let p of a.joints??[]){if(p.kind!=="wall"&&p.kind!=="floor")continue;let h=d(`joint:${p.id}:inside`),_=d(`joint:${p.id}:outside`),b=p.kind==="floor"?.03:h.y;n.push({floorId:i.id,points:[[h.x,b,h.z],[_.x,_.y,_.z]],radius:.05,water:null,fittings:[]})}for(let p of a.pipes??[]){let h=Xs(wo(p,d),p,s,i);if(h.length<2)continue;let _=c.get(p.id),b=[],m=Li(h);for(let[v,w]of[[p.from,.04],[p.to,m-.04]]){let f=v.startsWith("dev:")||v.startsWith("joint:")?Wi(h,w):null;f&&b.push({kind:"sleeve",p:f.p,dir:f.dir})}for(let v of p.fittings??[]){let w=Wi(h,v.at);w&&b.push({kind:v.kind,p:w.p,dir:w.dir,open:v.open!==!1})}n.push({floorId:p.floor_id,points:h,radius:.025,water:_?.active?_.color??Js:null,fittings:b})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let i=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(i===this.holoIds)return;this.holoIds=i,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let r=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let i=await au(this.hass,e);this.holoIds===n&&(this._rows=i)};r(),this.holoTimer=setInterval(()=>{r()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&r()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,r,i,s){if(e>=this.holoCount)return this.placeWire(e-this.holoCount,t,n,r);(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),c=this._holos[e]?.kind==="main";if(!a){c&&this._holoOn&&(this._holoOn=!1);return}c&&r!==this._holoOn&&(this._holoOn=r);let d=this._holos[e],u=(this.building?.settings.roof.hologram??Qe).device_min_w??0;d?.kind==="device"&&u>0&&(d.w??0)<u&&(r=!1);let p=!r;if(a.hidden!==p&&(a.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!r)return;if(d?.kind==="bin"){let O=Math.max(.6,i*.8),F=!!d.bin?.icon&&i*.8<.62;a.classList.contains("fp3d-holo-far")!==F&&(a.classList.toggle("fp3d-holo-far",F),this.holoSizes.delete(e)),F&&(O=1);let $=this.holoSizes.get(e),E=performance.now();(!$||E-$.at>2e3)&&($={w:a.offsetWidth||90,h:a.offsetHeight||40,at:E},this.holoSizes.set(e,$));let S=$.w*O,T=$.h*O,A=n;for(let U=0;U<6;U++){let G=this.holoBoxes.find(H=>t-S/2<H.x1+3&&t+S/2>H.x0-3&&A-T<H.y1+3&&A>H.y0-3);if(!G)break;A=G.y0-4}this.holoBoxes.push({i:e,x0:t-S/2,x1:t+S/2,y0:A-T,y1:A}),a.style.transform=`translate(${t.toFixed(1)}px, ${A.toFixed(1)}px) scale(${O.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=i*.8,_=34*h,b=46*h,m=t+(s?_:-_),v=n-b,w=this.holoSizes.get(e),f=performance.now();(!w||f-w.at>2e3)&&(w={w:a.offsetWidth||184,h:a.offsetHeight||90,at:f},this.holoSizes.set(e,w));let x=w.w*h,P=w.h*h,R=s?m:m-x,z=R+x;for(let O=0;O<6;O++){let F=this.holoBoxes.find($=>R<$.x1+4&&z>$.x0-4&&v-P<$.y1+4&&v>$.y0-4);if(!F)break;v=F.y0-6}this.holoBoxes.push({i:e,x0:R,x1:z,y0:v-P,y1:v});let D=s||(this.building?.settings.roof.hologram??Qe).mirror!==!1;if(a.style.transform=D?`translate(${m.toFixed(1)}px, ${v.toFixed(1)}px) scale(${(s?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${R.toFixed(1)}px, ${v.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let O=l.firstElementChild,F=l.lastElementChild;O?.setAttribute("x1",t.toFixed(1)),O?.setAttribute("y1",n.toFixed(1)),O?.setAttribute("x2",m.toFixed(1)),O?.setAttribute("y2",v.toFixed(1)),F?.setAttribute("cx",t.toFixed(1)),F?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let e=this._energy,t=()=>this._holos.map((s,a)=>s.kind==="bin"?this.renderBinCard(s,a):s.kind==="rack"?this.renderRackCard(s,a):y),n=this._holos.some(s=>s.kind==="module"||s.tag||s.kind==="rack");if(!(n||B("energy_pro")||B("sound")||B("auto_pro")||B("pool")||B("household"))||this.roomId&&!(this.building?.settings.roof.hologram??Qe).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return B("household")||n?t():y;let r=this.floorId===null||(this.building?.floors.length??0)<=1,i=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&r;return this._holos.map((s,a)=>s.kind==="module"?this.renderModuleCard(s,a):s.kind==="bin"?this.renderBinCard(s,a):s.kind==="rack"?this.renderRackCard(s,a):s.kind==="car"?this.renderCarCard(s,a):s.kind==="media"?this.renderMediaCard(s,a):s.kind==="device"?this.renderDeviceCard(s,a):i?this.renderHoloCard(s,a,e):y)}renderBinCard(e,t){let n=e.bin,r=n.lines.length===1?n.lines[0]:null,i=n.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return g`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${r?.out?"fp3d-holo-out":""} ${r?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${i} style="--bin:${n.lines[0].color}">
      ${n.icon?g`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:y}
      ${r?g`<div class="fp3d-holo-body"><b>${r.when}</b><span>${r.name}</span></div>`:g`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(s=>g`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,t){let n=this.hass,r=_=>M(n,_),i=e.car,s=!this.mediaFolded.has(i.spot),a=()=>{this.mediaFolded.has(i.spot)?this.mediaFolded.delete(i.spot):this.mediaFolded.add(i.spot),this.requestUpdate()},l=(_,b,m)=>{n.callService(_,b,{entity_id:m})},c=(_,b)=>_.startsWith("climate.")?l("climate",b?"turn_on":"turn_off",_):l("homeassistant",b?"turn_on":"turn_off",_),d=async()=>{if(!i.lock)return;let _=i.lock.startsWith("lock.");if(i.locked){if(!await this.ask(r("car_unlock_confirm")))return;_?l("lock","unlock",i.lock):l("homeassistant","turn_off",i.lock)}else _?l("lock","lock",i.lock):l("homeassistant","turn_on",i.lock)},u=i.soc===null?"#37e0ff":i.soc>=50?"#4dff80":i.soc>=20?"#ffcc40":"#ff4d40",p=!!i.lock&&/^(lock|input_boolean|switch)\./.test(i.lock),h=!!i.climate&&/^(climate|switch|input_boolean)\./.test(i.climate);return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${i.charging?`\u26A1 ${r("car_charging_short")}`:i.locked===null?"":i.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b>
            <span>${i.range!==null?`${ie(n,i.range,0)} ${i.rangeUnit}`:""}${i.charging&&i.chargingW?` \xB7 ${ce(n,i.chargingW)}`:""}</span>
          </div>
          ${i.soc!==null?g`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,i.soc))}%;background:${u}"></i></div>`:y}
          ${s&&!this.ro&&(p||h||i.charge)?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?g`<button title=${i.locked?r("car_unlock_btn"):r("car_lock_btn")} @click=${d}>${i.locked?"\u{1F512}":"\u{1F513}"}</button>`:y}
                ${h?g`<button class=${i.climateOn?"fp3d-holo-on":""} title=${r("car_climate")} @click=${()=>c(i.climate,!i.climateOn)}>❄</button>`:y}
                ${i.charge?g`<button class=${i.charging?"fp3d-holo-on":""} title=${r("car_charging")} @click=${()=>c(i.charge,!i.charging)}>⚡</button>`:y}
              </div>`:y}
        </div>
      </div>`}renderModuleCard(e,t){let n=e.module,r=!this.mediaFolded.has(n.id),i=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},s=h=>h?`color:${h}`:"",a=this._low||this.clientWidth<600,l=Fi(n.rows,a),c=Fi(n.cells,a),d=n.chain?Fi(n.chain.items,a):[],u=n.spark&&n.spark.values.length>1&&!(a&&n.spark.minor)?n.spark:null,p=!!(n.chain||n.cells?.length||n.status);return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${p?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${i}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${s(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?g`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?g`<i>${n.status.icon}</i>`:y}<b>${n.status.text}</b>${n.status.since?g`<span>${n.status.since}</span>`:y}
              </div>`:y}
          ${n.main?g`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?g`<em style=${s(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?g`<small>${n.main.side.sub}</small>`:y}</em>`:y}
              </div>`:y}
          ${r&&d.length?g`<div class="fp3d-holo-chain">
                  ${d.map((h,_)=>g`${_?g`<s>→</s>`:y}<div><small>${h.label}</small><b style=${s(h.color)}>${h.value}</b></div>`)}
                </div>
                ${n.chain.note?g`<div class="fp3d-holo-chain-note" style=${s(n.chain.noteColor)}>${n.chain.note}</div>`:y}`:y}
          ${r?l.map(h=>g`<div class="fp3d-holo-mrow"><span>${h.label}</span><b style=${s(h.color)}>${h.value}</b>${h.at!==void 0?h.fill?g`<i class="fp3d-holo-mrow-fill"><s style="width:${h.at}%;background:${h.color??"#37e0ff"}"></s></i>`:g`<i><em style="left:${h.at}%;background:${h.color??"#37e0ff"};color:${h.color??"#37e0ff"}"></em></i>`:g`<i class="fp3d-holo-mrow-none"></i>`}</div>`):y}
          ${r&&c.length?g`<div class="fp3d-holo-cells">${c.map(h=>g`<div><small>${h.label}</small><b style=${s(h.color)}>${h.value}</b></div>`)}</div>`:y}
          ${r&&n.hint?g`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:y}
          ${r?(n.lines??[]).map(h=>g`<div class="fp3d-holo-mline">${h}</div>`):y}
          ${r&&u?g`${u.label?g`<div class="fp3d-holo-spark-label">${u.label}</div>`:y}${zp(u.values,u.color??"#ffb347")}`:y}
          ${r&&n.chips?.length?g`<div class="fp3d-holo-chips">
                ${n.chips.map(h=>g`<div class="fp3d-holo-mline">${h.title}</div>
                    <div class="fp3d-holo-chip-row">${h.items.map(_=>g`<button class=${_.on?"fp3d-holo-on":""} title=${_.title??""} @click=${()=>_.onTap()}>${_.label}</button>`)}</div>`)}
              </div>`:y}
          ${r&&!this.ro&&n.buttons?.length?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(h=>g`<button class=${h.on?"fp3d-holo-on":""} title=${h.title??""} @click=${()=>h.onTap()}>${h.label}</button>`)}</div>`:y}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){let n=this.hass,r=f=>M(n,f),i=e.media,s=!this.mediaFolded.has(i.id),a=()=>{this.mediaFolded.has(i.id)?this.mediaFolded.delete(i.id):this.mediaFolded.add(i.id),this.requestUpdate()},l=(f,x={})=>{Promise.resolve(n.callService("media_player",f,{entity_id:i.id,...x})).catch(P=>this.serviceFailed(`media_player.${f}`,P))},c={down:f=>f.currentTarget.dataset.pressed=String(f.pointerId),up:f=>x=>{let P=x.currentTarget;P.dataset.pressed===String(x.pointerId)&&(delete P.dataset.pressed,x.stopPropagation(),P.dataset.acted=String(Date.now()),f())},key:f=>x=>{let P=x.currentTarget;Date.now()-Number(P.dataset.acted??0)<700||(P.dataset.acted=String(Date.now()),f())}},d=n.states[i.id]?.attributes.supported_features,u=f=>typeof d!="number"||(d&f)!==0,p=this.mediaIntent.get(i.id);p&&(p.playing===i.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(i.id);let h=this.mediaIntent.get(i.id)?.playing??i.playing,_=u(16384)||u(1),b=()=>{this.mediaIntent.set(i.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":u(16384)?"media_play":"media_play_pause")},m=this.mediaVolume.get(i.id);m&&(Math.abs(m.v-i.volume)<=2||Date.now()-m.at>3e4)&&this.mediaVolume.delete(i.id);let v=this.mediaVolume.get(i.id)?.v??i.volume,w=(f,x)=>{this.mediaVolume.set(i.id,{v:f,at:Date.now()}),this.requestUpdate(),(x||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:f/100}))};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${r("holo_media_playing")}`:r("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${i.picture?g`<img class="fp3d-holo-cover" src=${i.picture} alt="" />`:g`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${i.title}</b>${i.artist?g`<span>${i.artist}</span>`:y}</div>
        </div>
        ${s&&!this.ro?g`<div class="fp3d-holo-media-controls">
                <button aria-label=${r("previous")} ?disabled=${!u(16)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_previous_track"))} @click=${c.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${r("play_pause")} ?disabled=${h?!u(1):!_} @pointerdown=${c.down} @pointerup=${c.up(b)} @click=${c.key(b)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${r("next")} ?disabled=${!u(32)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_next_track"))} @click=${c.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(v)}
                  aria-label=${r("volume")}
                  @input=${f=>w(Number(f.target.value),!1)}
                  @change=${f=>w(Number(f.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${v} %</span>
              </div>`:y}
      </div>
    </div>`}rackHolos(e,t){let n=[];if(!this.rackCards)return n;let r=(t.settings.roof.hologram??Qe).size*.7;for(let i of t.floors)for(let s of i.furniture){let a=s.rack?.slots;if(!a?.length)continue;let l=Oi(e,a,s.rack?.card?.metrics);if(!l.length)continue;let c=i.elevation+de(i,s)+s.h,d=Object.fromEntries(a.map(u=>[u.id,u.name||le(e,u.type)]));n.push({anchor:{p:[s.x,c+.15,s.z],n:[0,1,0],floorId:i.id,size:r,roof:!1,views:"all",room:ha(i,s.x,s.z)},card:{kind:"rack",name:s.name||le(e,s.type),w:null,dayIds:[],battery:null,rack:{id:s.id,values:l,names:d}}})}return n}spokenRacks(e,t){let n=[];for(let r of t.floors){let i=ke(r);for(let s of r.furniture){let a=s.rack?.slots;if(!a?.length)continue;let l=Oi(e,a,s.rack?.card?.metrics),c=Oi(e,a,[En,tn]).filter(u=>!l.some(p=>p.key===u.key)),d=i.find(u=>u.points.length>=3&&q([s.x,s.z],u.points));n.push({id:s.id,name:s.name||le(e,s.type),room:d?.name??"",names:Object.fromEntries(a.map(u=>[u.id,u.name||le(e,u.type)])),values:[...l,...c].map(u=>({key:u.key,kind:u.kind,slot:u.slot,label:this.rackValueLabel(u),text:this.rackValueText(u),value:u.value,of:u.of}))})}}return n}toggleRackCard(e){this.rackOpen.delete(e)||this.rackOpen.add(e),this.watchRackSpark(),this.requestUpdate()}rackSparkIds(){let e=this._holos.filter(t=>t.rack&&this.rackOpen.has(t.rack.id)).flatMap(t=>t.rack.values.flatMap(n=>n.ids));return[...new Set(e)]}watchRackSpark(){let e=this.rackSparkIds(),t=this.replay,n=t?`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`:e.join(",");if(!(n===this.rackSparkKey&&(t||Date.now()-this.rackSparkAt<3e5))){if(this.rackSparkKey=n,!e.length){this._rackRows=null;return}if(t){this._rackRows=t.stats(e,t.t-Op,t.t+1);return}!this.hass||globalThis.document?.hidden||(this.rackSparkAt=Date.now(),ep(this.hass,e,Op).then(r=>{this.rackSparkKey===n&&(this._rackRows=r)}))}}rackValueText(e){let t=this.hass;if(e.key===tn)return e.text;if(e.value===null)return e.key===En?"\u2013":ue(t,t.states[e.key]);if(e.kind==="runtime"&&/^(s|min|h)$/.test(e.unit)){let r=e.value*(e.unit==="s"?.016666666666666666:e.unit==="h"?60:1);return r<120?`${Math.round(r)} min`:`${ie(t,r/60,1)} h`}let n=Number.isInteger(e.value)?0:Math.abs(e.value)<10?2:1;return`${ie(t,e.value,n)}${e.unit?` ${e.unit}`:""}`}rackValueLabel(e){let t=this.hass;return e.key===En?M(t,"rack_card_hottest"):e.key===tn?M(t,"rack_card_online"):e.kind==="other"?j(t,e.key):M(t,`rack_kind_${e.kind}`)}renderRackCard(e,t){let n=e.rack,r=this.rackOpen.has(n.id),i=n.values.find(u=>u.key===tn),s=!!i&&i.value===i.of,a=n.values.filter(u=>u!==i),l=()=>this.toggleRackCard(n.id),c=u=>{u.key!=="Enter"&&u.key!==" "||(u.preventDefault(),l())},d=u=>{let p=Zu(this._rackRows,u);return p.length>1?zp(p,u.kind==="temperature"?"#ffb86b":u.kind==="battery"?"#4dff80":"#7fe8ff"):y};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-rack ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-expanded=${r?"true":"false"} aria-label=${e.name} @click=${l} @keydown=${c}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head"><span>▤ ${e.name}</span>${i?g`<span class="fp3d-holo-live" style="color:${s?Ci.online:Ci.warning}" title=${this.rackValueLabel(i)}>● ${i.text}</span>`:y}</div>
          ${r?g`<div class="fp3d-rack-card-grid">
                ${a.map(u=>g`<div class="fp3d-rack-card-row">
                    <span>${this.rackValueLabel(u)}${u.slot?g`<small>${n.names[u.slot]??""}</small>`:y}</span><b>${this.rackValueText(u)}</b>
                    ${d(u)}
                  </div>`)}
              </div>`:g`<div class="fp3d-holo-cells">${a.slice(0,4).map(u=>g`<div><small>${this.rackValueLabel(u)}</small><b>${this.rackValueText(u)}</b></div>`)}</div>`}
        </div>
      </div>`}renderDeviceCard(e,t){let n=this.hass,r=c=>M(n,c),i=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?Cs(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ce(n,e.w??0)}</b><span>${r("holo_dev_now")}</span></div>
        ${i&&s?g`<div class="fp3d-holo-sub">${r("holo_today")} <b>${ie(n,s.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${ce(n,s.peak)}</b></div>`:y}
        ${i&&a?zt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:y}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?su(t,new Date(this.now())):null}renderHoloCard(e,t,n){let r=this.hass,i=m=>M(r,m),s=!this.holoFolded.has(t),a=this.dayOf(e),l=e.kind==="main",c=l&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,d=a&&a.curve.length>1?Cs(a.curve,a.peak):null,u=new Date(this.now()),p=(u.getHours()+u.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},_=l?n.solar??n.consumption??0:e.w??0,b=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ce(r,_)}</b><span>${i(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?g`${l&&this._plants.length>1?g`<div class="fp3d-holo-plants">${this._plants.map(m=>g`<span>${m.name}</span><b>${ce(r,m.w)}</b>`)}</div>`:y}
              ${a?g`<div class="fp3d-holo-sub">${i("holo_today")} <b>${ie(r,a.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${ce(r,a.peak)}</b></div>`:y}
              ${d?zt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${d.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${d.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${d.endX}" cy="${d.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:y}
              <div class="fp3d-holo-grid">
                ${b?g`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${i("holo_battery")}<br /><b>${b.soc!==null?`${Math.round(b.soc)} %`:ce(r,Math.abs(b.w??0))}</b>
                      ${b.w!==null&&Math.abs(b.w)>=5?g`<span>${b.w<0?"\u25B2":"\u25BC"} ${ce(r,Math.abs(b.w))}</span>`:y}
                    </div>`:y}
                ${l&&n.grid!==null?g`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${i("holo_grid")}<br /><b>${ce(r,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":i(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:y}
                ${l&&n.consumption!==null?g`<div class="fp3d-holo-cell fp3d-holo-house">${i("holo_house")}<br /><b>${ce(r,n.consumption)}</b></div>`:y}
                ${l&&this._wallboxW!==null?g`<div class="fp3d-holo-cell fp3d-holo-wb">${i("holo_wallbox")}<br /><b>${ce(r,this._wallboxW)}</b></div>`:y}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?g`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?g`<span>🔥 ${i("holo_gas")} <b>${ie(r,this._meters.gas,this._meters.gas<10?2:1)} ${Cp(r,this.building?.energy.gas)}</b></span>`:y}
                    ${this._meters.water!==null?g`<span>💧 ${i("holo_water")} <b>${Lg(r,this._meters.water,Cp(r,this.building?.energy.water))}</b></span>`:y}
                    <span>${i("holo_today_short")}</span>
                  </div>`:y}
              ${c!==null?g`<div class="fp3d-holo-bar"><div style="width:${c}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${i("holo_autarky")}</span><b>${c} %</b></div>`:y}`:y}
      </div>
    </div>`}setAlerts(e){let t=e.map(s=>`${s.kind}:${s.entity}`),n=this.ro?[]:e.filter((s,a)=>!this.seenAlerts.has(t[a]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=e);let r=e.some(s=>!s.quiet&&s.kind!=="water");if(r&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!r||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let i=this.directorSettings();if(i?.alerts){let s=n[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),i.hold??30)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(n[0])}directorSettings(){let e=this.building?.settings.director;return this.director&&!this.ro&&B("camera_cockpit")&&Sp(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new yo,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let r=Date.now(),i=e.hold??30,s=`${JSON.stringify(e)}|${n.floors.map(c=>c.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==s){let c=[...new Set(n.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],d=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:s,bells:(e.doorbell?Mp(t,e.doorbell_entity):[]).map(u=>({id:u,camera:Ip(t,u,c,e.doorbell_camera)})),motion:d==="off"?[]:c.filter(u=>u.startsWith("camera.")).flatMap(u=>at(t,u).filter(p=>d==="all"||ns(t,p)==="person").map(p=>({sensor:p,cam:u})))}}let a=[];for(let c of this.directorSrc.bells)this.directing.edge(c.id,t.states[c.id],(d,u)=>pa(d,u,r))&&a.push({kind:"doorbell",key:`bell:${c.id}`,entity:c.id,camera:c.camera});for(let c of e.triggers??[])c.entity&&this.directing.edge(`trigger:${c.entity}`,t.states[c.entity],(d,u)=>Tp(d,u,r))&&a.push({kind:"trigger",key:`trigger:${c.entity}`,entity:c.entity,camera:c.camera});for(let c of this.directorSrc.motion)this.directing.edge(c.sensor,t.states[c.sensor],(d,u)=>d?.state==="off"&&u?.state==="on")&&a.push({kind:"motion",key:`cam:${c.cam}`,entity:c.sensor,camera:c.cam});if(e.appliances){for(let[c,d]of this.appliances)this.directing.stopped(`app:${c}`,d.running,r)&&a.push({kind:"appliance",key:`app:${c}`,entity:c});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((c,d)=>l.indexOf(c.kind)-l.indexOf(d.kind));for(let c of a)if(this.directing.offer(c,r,i)){this.directorShow(()=>this.directorGo(c));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(r=>r.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(t.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,r=this.hass,i=n?.floors.find(d=>d.id===e),s=i?ke(i).find(d=>d.id===t):void 0;if(!n||!r||!i||!s||this.ro)return;let a=new Set(_e(r,s.area_id).filter(d=>W(d)==="light"));for(let d of i.placements)W(d.entity_id)==="light"&&q([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of i.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&Tr(d.type)&&q([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>r.states[d]?.state==="on");r.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyMotion(){let e=this.viewer,t=this.building,n=this.hass;if(clearTimeout(this.motionTimer),this.motionTimer=void 0,!e||!t||!n)return;let r=this.now(),i=fd(n,t,r);e.setRoomGlow(i.rooms),i.next!==null&&!this.replay&&(this.motionTimer=setTimeout(()=>this.applyMotion(),Math.max(50,i.next-r+20)))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let r=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=_u(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,r=new Map([...l].map(([c,d])=>[c,gu(a,d)]))}let i=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of ke(a)){let c=mt(n,a,l,"temperature"),d=mt(n,a,l,"humidity"),u=mt(n,a,l,"co2"),p=[c!==null?`${ie(n,ot(n,c),1)} ${Re(n)}`:null,d!==null?`${ie(n,d,0)} %`:null,u!==null?`${ie(n,u,0)} ppm`:null].filter(h=>!!h);p.length&&i.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){r??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let c=l.kind==="water"?1:a,d=Ud(l).map(u=>u*c);if(l.roomId)r.set(l.roomId,d);else for(let u of t.floors)if(!l.floorId||u.id===l.floorId)for(let p of u.rooms)r.set(p.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let s=r?[...r].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(r))}furnitureMarkers(e,t,n,r){let i=[],s=[],a=new Map,l=new Map,c=new Set(n),d=B("household"),u=[];this.binHolos=[],this.printerCams.clear();let p=new Map(this.scene.filter(w=>w.kind==="glow").map(w=>[w.furnitureId,w]));for(let w of t.floors)for(let f of w.furniture){let x=this.furnitureLinks.get(f.id),P=this.stateFaces(e,f);if(P.length&&a.set(f.id,{color:P[0].color,level:P[0].level,faces:P}),Tr(f.type)){let L=this.lampMarker(e,w,f,x?.entity??null);i.push(L);let Z=f.type==="lamp_fan"&&f.fan&&f.fan!=="none"?f.fan:null;if(Z&&!n.has(Z)){n.add(Z);let fe=e.states[Z],We=f.rotation*Math.PI/180,ht=Math.min(.45,f.w*.3);i.push({id:Z,floorId:w.id,roomId:L.roomId,x:f.x+Math.cos(We)*ht,z:f.z+Math.sin(We)*ht,y:L.y,icon:f.icon?st(f.icon):Nt("fan"),name:j(e,Z),text:fe&&Br(fe)>0&&typeof fe.attributes.percentage=="number"?`${Math.round(fe.attributes.percentage)} %`:fe?ue(e,fe):"",active:fe?Ce(fe):!1,unavailable:fe?Y(fe):!1,glow:null,furnitureId:f.id,show:f.marker??"always",fromFurniture:!0})}continue}if(Bl.has(f.type)){let L=this.techItem(e,w,f,a,n);L&&(i.push(L),l.set(f.id,L.id));continue}if(Vl.has(f.type)){let L=this.gangItem(e,w,f,s,a,r);L&&(i.push(L),l.set(f.id,L.id));continue}let R=p.get(f.id);R&&a.set(f.id,{color:R.color,level:R.level});let z=(f.type==="plant"||ws(f.type))&&!!f.moisture&&f.moisture!=="none";if(f.type==="waste_bin"||f.type==="mailbox"||z){let L=d?this.householdState(e,w,f):null;L?.screen&&a.set(f.id,L.screen),L?.marker&&i.push(L.marker);let Z=f.type==="waste_bin"?f.bin_source:f.type==="mailbox"?f.entity:f.moisture;if(d&&typeof Z=="string"&&Z!=="none"&&l.set(f.id,`hh:${Z}#${f.id}`),L?.item&&u.push(L.item),!z)continue}if(d){let L=Ld(f,e);L.length&&!a.has(f.id)&&a.set(f.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let Z of L){let fe=f.name||le(e,f.type);u.push({icon:"wrench-outline",text:Z===f.service?M(e,"hh_service",{name:fe}):M(e,"hh_service2",{name:fe,what:j(e,Z)}),entity:Z})}(f.type==="fridge"||f.type==="fridge_smart")&&ki(f,e)&&(a.set(f.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),u.push({icon:"fridge-alert-outline",text:M(e,"hh_fridge_open",{name:f.name||le(e,f.type)}),entity:Mt(f)[0]??null}))}let O=f.type==="parking"&&B("auto_pro")&&!!f.car?Yn(e,f):null,F=f.type==="washer"||f.type==="dryer"||f.type==="dishwasher",$=oe(f.type)==="home_battery"?f.soc:oe(f.type)==="wallbox"?f.status:f.type==="parking"&&O?f.car?.device??O.entities.soc:d&&F?f.remaining??null:null,E=$&&$!=="none"?$:null,S=f.extra&&f.extra!=="none"&&e.states[f.extra]?f.extra:null,T=_d(e,t,f),A=T&&T.sensor!==S&&T.sensor!==x?.entity?`${ie(e,ot(e,T.celsius),0)} ${Re(e)}`:"",U=[S?ue(e,e.states[S]):"",A].filter(Boolean).join(" \xB7 "),G=L=>U?L?`${L} \xB7 ${U}`:U:L,H=x??(E||S||T?{entity:null,power:null}:void 0);if(!H)continue;let K=oe(f.type)==="home_battery"?E??H.entity??H.power:H.entity??H.power??E??S;l.set(f.id,K);let N=H.entity?e.states[H.entity]:void 0,te=oe(f.type)==="meter"?t.energy.grid_invert&&!f.export:oe(f.type)==="home_battery"?t.energy.battery_invert&&!f.charge:!1,X=H.power?pe(e.states[H.power],te):null,ve=oe(f.type)==="home_battery"&&f.charge&&f.charge!=="none"?f.charge:oe(f.type)==="meter"&&f.export&&f.export!=="none"?f.export:null,he=ve?pe(e.states[ve]):null;if(he!==null&&(X=Math.max(0,X??0)-Math.max(0,he)),H.power&&X!==null&&Qd(f.type)&&!r.has(H.power)){r.add(H.power);let L=f.circuit&&f.circuit!=="none"?f.circuit:void 0,Z=f.energy??void 0;s.push({id:K,powerEntity:H.power,floorId:w.id,x:f.x,z:f.z,power:Math.max(0,X),wallbox:oe(f.type)==="wallbox"||void 0,circuit:L,...Z?{energy:Z}:{}})}let ae=typeof f.run_w=="number"&&f.run_w>0?f.run_w:10,Pe=typeof f.run_w=="number"&&f.run_w>0&&X!==null&&X<=f.run_w,He=(X??0)>ae||N?.state==="on"||N?.state==="running"||Kn(N)&&Ce(N);F&&this.appliances.set(f.id,{floorId:w.id,x:f.x,z:f.z,entity:H.entity??H.power??f.id,running:He});let Le=null;if(d&&F){let L=f.remaining&&f.remaining!=="none"?e.states[f.remaining]:void 0,Z=Ss(L),fe=He||!H.power&&!H.entity&&(Z??0)>0,We=Mt(f),ht=So=>We.some(Xi=>{let an=e.states[Xi];return!!an?.last_changed&&Date.parse(an.last_changed)>So}),$o=this.finished.update(f.id,fe,ht),Hn=f.name||(H.entity?j(e,H.entity):le(e,f.type));fe?(He||a.set(f.id,Wp(f.type)),Z!==null&&!Ts(N,H.power?X:null,ae)&&(Le=M(e,"hh_left",{t:Dd(Z)}),u.push({icon:"timer-outline",text:`${Hn}: ${Le}`,entity:f.remaining??H.entity}))):(Ms(N)||Ms(L)||$o)&&(Le=M(e,"hh_done"),a.set(f.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),u.push({icon:"check-circle-outline",text:M(e,"hh_finished",{name:Hn}),entity:H.entity??H.power}))}if(O&&In(e,f)){let L=[];if(O.soc!==null){let Z=O.soc>=50?[.3,1,.5]:O.soc>=20?[1,.8,.25]:[1,.3,.25];L.push({part:"band",color:Z,level:O.charging?1:.6})}if(O.locked===!1&&L.push({part:"lights",color:[1,.42,.02],level:1}),O.climateOn){let Z=O.entities.climate?e.states[O.entities.climate]:void 0,fe=!!Z&&(Z.attributes.hvac_action==="cooling"||Z.state==="cool");L.push({part:"cabin",color:fe?[.45,.8,1]:[1,.55,.22],level:.35})}L.length&&a.set(`${f.id}:vehicle`,{color:L[0].color,level:L[0].level,faces:L})}if(T?.kind==="radiator"){let L=N&&W(N.entity_id)==="climate"?N.attributes:null,Z=Cr(e,f.heat_sensor)??(!!L&&Ce(N)&&L.hvac_action!=="cooling");a.set(f.id,{color:T.color,level:Z?.9:.55,shade:!0})}else if(T?.kind==="tank"){let L=wi(t),Z=bi(T.celsius-.3*(L.tank_hot-L.tank_cold),L.tank_cold,L.tank_hot);a.set(f.id,{color:Z,level:.8,shade:!0,faces:[{part:"strata",color:Z,top:T.color,level:.8}]})}else if(fn(f.type)&&(N&&W(N.entity_id)==="climate"||f.heat_sensor)){let L=N&&W(N.entity_id)==="climate"?N.attributes:null;if(Cr(e,f.heat_sensor)??(!!L&&Ce(N)&&L.hvac_action!=="cooling")){let fe=L&&typeof L.temperature=="number"&&typeof L.current_temperature=="number"?L.temperature-L.current_temperature:1;a.set(f.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,fe))})}else p.has(f.id)&&a.delete(f.id)}else if(f.type==="ac_unit"&&N&&W(N.entity_id)==="climate"){let L=lc(N);L&&a.set(f.id,L)}else if((f.type==="washer"||f.type==="dryer"||f.type==="dishwasher")&&He)a.set(f.id,Wp(f.type));else if(f.type==="stove"||wr(f.type)){let L=ac(N,He);L>0&&a.set(f.id,{color:[1,.05,.01],level:L,faces:[{part:"burners",color:[1,.05,.01],level:L}]})}let ut=Ie(f.type),xo=!!ut&&!ut.light&&ut.parts.some(L=>L.glow);if(N&&xo&&B("sound")&&W(N.entity_id)==="media"&&N.state==="playing"&&!Xo(f.type)){let L=typeof N.attributes.volume_level=="number"?N.attributes.volume_level:.5;a.set(f.id,{color:Ur(N)??[.22,.88,1],level:.5+.5*L,ring:!0,plain:!0})}if(N&&Xo(f.type)&&!wr(f.type)&&!(Vo(f.type)&&W(N.entity_id)==="cover")){let L=B("screens"),Z=W(N.entity_id)==="light"?it(N):null,fe=W(N.entity_id)==="media"&&["playing","on","paused","idle"].includes(N.state),We=L&&W(N.entity_id)==="media"?Ur(N):Z?Z.color:Ce(N)||fe?[.22,.88,1]:null,ht=L&&W(N.entity_id)==="media"?N.attributes.entity_picture??null:null;We&&a.set(f.id,{color:We,level:N.state==="playing"?1:.6,picture:ht,ring:kl(f.type)||xo&&B("sound")&&N.state==="playing"})}let Ge=Vi(f.type)?fp(e,H.entity):null;if(Ge){let L=mp(Ge);L.length&&a.set(f.id,{color:L[0].color,level:L[0].level,faces:L}),Ge.camera&&this.printerCams.set(K,Ge.camera)}let ko=Ge?.progress!=null?` \xB7 ${Math.round(Ge.progress*100)} %`:"";if(c.has(K))continue;n.add(K);let Ue=H.entity?W(H.entity):null,Ji=w.rooms.find(L=>L.points.length>=3&&q([f.x,f.z],L.points)),pt=N&&Bo(f.type)&&N.entity_id.startsWith("water_heater.")?Kg(e,N):null;i.push({id:K,floorId:w.id,roomId:Ji?.id??null,x:f.x,z:f.z,y:Yg(f)+de(w,f),icon:f.icon?st(f.icon):pt?st("water-boiler"):Nt(Ue??"switch"),name:f.name||(H.entity?j(e,H.entity):le(e,f.type)),ownName:f.name||void 0,showName:!!f.show_name,text:G(Le??(O?this.carText(e,O,!!N&&!Ai.has(N.state.toLowerCase())):oe(f.type)==="home_battery"?this.batteryText(e,E,X):oe(f.type)==="wallbox"?this.wallboxText(e,E,X):oe(f.type)==="meter"?this.meterText(e,X):pt?pt.text:N?ue(e,N)+ko:Pe?M(e,"pin_standby"):X!==null?ce(e,Math.max(0,X)):"")),active:Le?!0:O?O.charging:pt?pt.on:N?Ce(N):(X??0)>(typeof f.run_w=="number"&&f.run_w>0?f.run_w:5),unavailable:N?Y(N):!1,glow:null,furnitureId:f.id,energyDevice:oe(f.type)==="inverter"||oe(f.type)==="home_battery"||oe(f.type)==="wallbox"||oe(f.type)==="meter"||!!O||!!S||!!T,...Pe?{standby:Pe}:{},show:f.marker??(O||Le?"always":void 0),fromFurniture:!0})}let h=t.settings.household;if(h?.bin_next_only||typeof h?.bin_days=="number"){let w=Hd(this.binHolos.filter(f=>!f.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(f=>f.icon||w.has(f.id))}let _=t.settings.household?.notes,b=_&&_!=="none"?e.states[_]:void 0;if(d&&b&&!Y(b)&&b.state.trim()){let w=b.state.split(/\s*(?:\||\n|;)\s*/).map(f=>f.trim()).filter(Boolean).slice(0,8);u.unshift(...w.map(f=>({icon:"pin-outline",text:f,entity:_})))}this._household=u.filter((w,f)=>u.findIndex(x=>x.text===w.text)===f),this.cameraScreens=0;let m=Wr(e,t.floors),v=B("screens");for(let w of t.floors)for(let f of w.furniture){if(!v||!f.pictures?.length||!Xo(f.type)||f.type==="fridge_smart"&&m.get(f.id)?.right)continue;let x=f.pictures.find(z=>pc(e,z));if(!x)continue;let P=this.pictureUrl(x.image),R=f.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];P&&a.set(f.id,{color:R,level:1,picture:P,plain:!0})}for(let w of p.values())w.top?a.set(w.furnitureId,{color:w.color,level:w.level,faces:[{part:"strata",color:w.color,top:w.top,level:w.level}]}):w.band&&a.set(w.furnitureId,{color:w.color,level:w.level,faces:[{part:"band",color:w.color,level:w.level}]});return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:i,consumers:s,screens:a,targets:l}}watchHousehold(e,t){let n=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),r=B("household")&&n.length>0&&!this.replay,i=r?Id(t.floors):[],s=i.join(",");if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let a=async()=>{i.length&&(this.pickups=await ys(this.hass??e,i)),this.syncDevices(!0)};(s!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=s,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void a(),6e5),i.length&&ys(e,i).then(l=>{this.pickups=l,this.syncDevices(!0)}))}gangItem(e,t,n,r,i,s){let a=Un(n),l=n.type==="wall_socket",c=[],d=0,u=0,p=null,h=!1;if(a.forEach((x,P)=>{let R=x.entity&&x.entity!=="none"?x.entity:null,z=x.power&&x.power!=="none"?x.power:null;if(!R&&!z)return;u++;let D=R?e.states[R]:void 0,O=z?pe(e.states[z]):null;if(z&&O!==null&&(p=(p??0)+Math.max(0,O),s.has(z)||(s.add(z),r.push({id:R??z,powerEntity:z,floorId:t.id,x:n.x,z:n.z,power:Math.max(0,O),circuit:n.circuit&&n.circuit!=="none"?n.circuit:void 0}))),D&&!Y(D)&&(h=!0),!(D?Ce(D):(O??0)>5))return;d++;let $=D&&W(D.entity_id)==="light"?it(D):null;if(!l){c.push({part:"gang",index:P,of:a.length,color:$?$.color:[.22,.88,1],level:.5,accent:!$});return}let E=$?$.color:[.35,1,.55];c.push({part:"gang",index:P,of:a.length,color:E,level:O!==null?Math.min(1,.55+O/1500):.8})}),c.length&&i.set(n.id,{color:c[0].color,level:c[0].level,faces:c}),!u)return null;let _=Ko(n),b=_[0]??null,m=b?e.states[b]:void 0,v=t.rooms.find(x=>x.points.length>=3&&q([n.x,n.z],x.points)),w=p,f=qc(this.floorWalls(t),n,t.height,de(t,n));return{id:`gangs:${n.id}`,floorId:t.id,roomId:v?.id??null,x:f.x,z:f.z,y:n.h+.2+f.y,icon:st(n.icon||(l?"power-socket-de":"light-switch")),name:n.name||(_.length===1&&b?j(e,b):le(e,n.type)),ownName:n.name||void 0,showName:!!n.show_name,text:u>1?`${d}/${u}${w!==null?` \xB7 ${ce(e,w)}`:""}`:w!==null?ce(e,w):m?ue(e,m):"",active:d>0,unavailable:!!b&&!h,glow:null,power:w??void 0,furnitureId:n.id,show:n.marker??void 0,fromFurniture:!0}}techItem(e,t,n,r,i){let s=R=>typeof R=="string"&&R!=="none"?R:null,a=s(n.entity),l=a?e.states[a]:void 0,c=t.rooms.find(R=>R.points.length>=3&&q([n.x,n.z],R.points)),d={floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,ownName:n.name||void 0,showName:!!n.show_name,glow:null,furnitureId:n.id,fromFurniture:!0};if(n.type==="wifi_ap"){let R=s(n.clients),z=R?e.states[R]:void 0,D=z&&Number.isFinite(Number(z.state))?Math.round(Number(z.state)):null,O=a?Vr(l):z?Vr(z):null;if(O!==null){let $=O?[.25,.6,1]:[1,.25,.2];r.set(n.id,{color:$,level:.85,faces:[{part:"apring",color:$,level:.85}]})}let F=a??R;return!F||i.has(F)?null:(i.add(F),{...d,id:F,y:de(t,n)-(n.variant==="wall"?-n.h-.2:.3),icon:st(n.icon||"access-point"),name:n.name||j(e,F),text:O===!1?M(e,"ap_offline"):D!==null?M(e,"ap_clients",{n:D}):l?ue(e,l):"",active:O===!0,unavailable:O===!1,show:n.marker??(O===!1?"always":void 0),energyDevice:D!==null})}let u=l?W(l.entity_id):null,p=s(n.power),h=p?pe(e.states[p]):null,_=typeof n.run_w=="number"&&n.run_w>0?n.run_w:30,b=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(h??0)>_;(b||l&&!["off","unavailable","unknown"].includes(l.state))&&r.set(n.id,{color:[1,.45,.15],level:b?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:b?.9:.3}]});let v=s(n.water_temp),w=v?e.states[v]:void 0,f=w&&Number.isFinite(Number(w.state))?Number(w.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,x=w?.attributes.unit_of_measurement??"\xB0C",P=a??v??p;return!P||i.has(P)?null:(i.add(P),{...d,id:P,y:de(t,n)+n.h+.25,icon:st(n.icon||"water-boiler"),name:n.name||(a?j(e,a):le(e,n.type)),text:f!==null?`${ie(e,Math.round(f))} ${x}${b?" \xB7 \u{1F525}":""}`:l?ue(e,l):"",active:b,unavailable:l?Y(l):!1,power:h??void 0,show:n.marker??void 0,energyDevice:f!==null})}floorWalls(e){let t=this.wallCache.get(e);if(!t){let n=this.building?.settings;t=yt(e.rooms,{exterior:n?.wall_exterior??.24,interior:n?.wall_interior??.12},e.walls??[]).walls,this.wallCache.set(e,t)}return t}wallCache=new WeakMap;renderGangMenu(){let e=this._gangMenu,t=this.hass,n=e&&this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e.furnitureId);if(!e||!t||!n)return y;let r=n.type==="wall_socket";return g`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${e.x}px;top:${e.y}px">
        <span>${n.name||le(t,n.type)}</span>
        ${Un(n).map((s,a)=>{let l=s.entity&&s.entity!=="none"?s.entity:null,c=l?t.states[l]:void 0,d=s.power&&s.power!=="none"?pe(t.states[s.power]):null,u=`${r?"\u{1F50C}":"\u25AD"} ${a+1} \xB7 ${l?j(t,l):"\u2013"}`;return g`<button class="fp3d-chip ${c&&Ce(c)?"fp3d-gang-on":""}" ?disabled=${!l||(c?Y(c):!0)}
            @click=${async()=>{!l||!await this.confirmFor(l)||ci(t,l)}}>${u}${c?g` <small>${ue(t,c)}${d!==null?` \xB7 ${ce(t,Math.max(0,d))}`:""}</small>`:y}</button>`})}
      </div>`}householdState(e,t,n){let r=l=>{let c=parseInt(l.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]};if(n.type==="waste_bin"){let l=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!l)return null;let c=xs(n,e,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until});if(!c)return null;let d=c.days===0?M(e,"bin_today"):c.days===1?M(e,"bin_tomorrow"):M(e,"bin_in_days",{n:c.days}),u=r(Td(n)[1]),p=Math.max(...u),_=p-Math.min(...u)<.12?[.92,.95,1]:u.map(f=>Math.min(1,f/Math.max(.001,p)*1.05)),b=n.name||M(e,`bin_kind_${n.bin_kind??"rest"}`),m=ks(n,e),v=`#${_.map(f=>Math.round(f*255).toString(16).padStart(2,"0")).join("")}`,w=m?M(e,"bin_out_done"):d;return this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:de(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:b,color:v,when:w,soon:c.days<=1&&!m,days:c.days,out:m}),{item:c.days<=1?{icon:m?"check-circle-outline":"trash-can-outline",text:`${b}: ${w}`,entity:l,hot:c.glow&&!m}:void 0}}if(n.type!=="mailbox"){let l=$s(n,e),c=[1,.55,.12],d=n.name||le(e,n.type);return l?(this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:de(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:d,color:"#ff8c1f",when:M(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:c,level:.9,faces:[{part:"band",color:c,level:.9}]},item:{icon:"watering-can-outline",text:M(e,"hh_plant",{name:d}),entity:n.moisture??null,hot:!0}}):null}let i=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!i)return null;let s=Cd(n,e),a=[1,.62,.15];return s&&this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:de(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||le(e,n.type),color:"#ffb547",when:M(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:n.name?`${n.name}: ${M(e,"mailbox_post")}`:M(e,"mailbox_post"),entity:i,hot:!0}:void 0}}robotPaths(e,t){let n=this.replay;if(!n)return[];let r=[];for(let i of t.floors){let s=i.rooms.filter(a=>a.points.length>=3);for(let a of i.furniture){if(!pn(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let c=n.robotRooms(l,Qn(e,l,a.room_sensor)),d=[];for(let u of c){let p=qr(e,s,u),h=p?Fe(p.points):null,_=d[d.length-1];h&&(!_||_[0]!==h[0]||_[1]!==h[1])&&d.push([h[0],h[1]])}d.length&&r.push({floorId:i.id,points:d})}}return r}trailNow(e,t){let n=this.now(),r=go(e,t),i=this.replay?this.replay.rows(r.map(a=>a.entity),n-mo,n):this.trailRows,s=r.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return $u(r,ku(i,s,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!B("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!B("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let r=go(t,n).map(i=>i.entity);if(r.length){try{let i=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-mo).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if(Pc()){let r=new Set(t.floors.flatMap(i=>i.placements.map(s=>s.entity_id)).filter(i=>W(i)==="camera"));for(let i of r){let s=e.states[i],a=s?.attributes.entity_picture;!a||Y(s)||n.push({id:i,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||Y(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),dl(this.hass,e,this.home).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(r=>{if(n.has(r.type)||r.type.startsWith("lamp_")&&r.type!=="lamp_floor"&&r.type!=="lamp_uplight"||r.h<.04||de(e,r)>.12)return!1;let i=Ie(r.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(r.type))?!1:q([r.x,r.z],t)||Dt(r).some(s=>q(s,t))}).map(r=>Dt(r))}robotInfos(e,t){let n=[];for(let r of t.floors)for(let i of r.furniture){if(!pn(i.type))continue;let s=this.furnitureLinks.get(i.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=Or(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=i.rotation*Math.PI/180,d=De(i.type),u=i.d*(d?yl(Ie(i.type)):.14),p=[i.x-Math.sin(c)*u,i.z+Math.cos(c)*u],h=r.rooms.filter(v=>v.points.length>=3),b=(l==="cleaning"?_c(e,h,s,Qn(e,s,i.room_sensor)):null)??h.find(v=>q(p,v.points)),m=l==="cleaning"&&b?this.robotObstacles(r,b.points):[];n.push({id:i.id,floorId:r.id,rest:p,restHeading:-c,mode:l,room:b?.points??null,roomId:b?.id??null,obstacles:m,...d?{model:{type:i.type,w:i.w,d:i.d,h:i.h}}:{}})}return n}batteryText(e,t,n){let r=t?Number(e.states[t]?.state):Number.NaN,i=[];return Number.isFinite(r)&&i.push(`${ie(e,r,0)} %`),n!==null&&Math.abs(n)>=10&&i.push(`${n<0?"\u25B2":"\u25BC"} ${ce(e,Math.abs(n))}`),i.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?ce(e,0):`${M(e,t<0?"energy_grid_export":"energy_grid_import")} ${ce(e,Math.abs(t))}`}wallboxText(e,t,n){let r=t?e.states[t]:void 0,i=String(r?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(i),a=r?.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=s?M(e,"wallbox_charging"):a?M(e,"wallbox_plugged"):r&&!Y(r)&&!r.entity_id.startsWith("binary_sensor.")?ue(e,r):"",c=n!==null&&n>50?ce(e,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],r=t.state_entity&&t.state_entity!=="none"&&t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,s]of r){if(!i||i==="none")continue;let a=e.states[i];if(!a||Y(a)||!(Ce(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=W(i)==="light"?it(a):null;n.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return n}carText(e,t,n){let r=s=>M(e,s);if(n||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${r("car_away")}${s}`}let i=[];return t.soc!==null&&i.push(`${ie(e,t.soc,0)} %`),t.range!==null&&i.push(`${ie(e,t.range,0)} ${t.rangeUnit}`),t.charging?i.push(t.chargingW!==null?`\u26A1 ${ce(e,t.chargingW)}`:`\u26A1 ${r("car_charging_short")}`):t.plugged&&i.push("\u{1F50C}"),t.locked!==null&&i.push(t.locked?"\u{1F512}":"\u{1F513}"),i.join(" \xB7 ")}ceilingAt(e,t,n){let i=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&q([t,n],l.points))?.ceiling_height||e.height,s=this.building;if(!s||!is(s).some(l=>Yc(l,e.elevation+i)&&rs(l,e.elevation)))return i;let a=Qc(s,t,n,e.elevation);return a===null?i:Math.max(.5,Math.min(i,a-e.elevation))}lampMarker(e,t,n,r){let i=r?e.states[r]:void 0,s=Ie(n.type),a=jl[n.type]??s?.light??"floor",l=t.rooms.some(w=>w.points.length>=3&&q([n.x,n.z],w.points)),c=a==="strip"&&!l?tt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?de(t,n):a==="table"?Vn(t,n.x,n.z,n.h):a==="bollard"||a==="garden"?tt(t,n.x,n.z):0,d=t.rooms.find(w=>w.points.length>=3&&q([n.x,n.z],w.points)),u=this.ceilingAt(t,n.x,n.z),p=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(a))&&n.mount_y==null,h=p?t.height-u:0,_=s&&p?Math.max(0,c-h):c,b=qo.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+jo(n.type,n.h)):Math.abs(h)>.01?u:void 0,m=b??t.height,v=s?s.mount==="ceiling"?Math.max(.5,_-.15):_+n.h+.2:{ceiling:m-.3,downlight:m-.25,spot:m-.35,panel:m-.25,pendant:Math.max(.6,m-n.h-.25),fan:Math.max(.6,m-n.h-.25),floor:_+n.h+.25,uplight:_+n.h+.25,table:_+n.h+.2,wall:_+n.h+.2,strip:n.upright?_+n.w+.15:Math.max(.3,_-.2),bollard:_+n.h+.25,garden:_+n.h+.25}[a];return{id:r??`lamp:${n.id}`,floorId:t.id,roomId:d?.id??null,x:n.x,z:n.z,y:v,icon:Nt("light"),name:n.name||(r?j(e,r):le(e,n.type)),text:i?ue(e,i):"",active:i?Ce(i):!1,unavailable:i?Y(i):!1,glow:i?os(cc(it(i,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,colors:n.colors,materials:n.materials,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,fanSpeed:a==="fan"?Br(n.fan&&n.fan!=="none"?e.states[n.fan]:void 0):void 0,size:[n.w,n.d,n.h],base:_,top:b,pickable:!!r,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?_:_+n.h*.85:void 0,effect:!!i&&i.state==="on"&&typeof i.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(i.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=this.building?.floors.find(r=>r.id===e.floorId),n=t?ke(t).find(r=>r.id===this.roomId):void 0;return!!n&&q([e.x,e.z],n.points)}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=W(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){if(n.lock&&!n.cover||Dr(n.cover)){e.set(t,`opening:${t}`);continue}let r=n.cover??n.contact??n.tilt;r&&e.set(t,r)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now()),r=()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}if(this.viewer.busy()){this.thumbTimer=setTimeout(r,300);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}};this.thumbTimer=setTimeout(r,n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return y;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===i.floorId)?.elevation??0)),n=this._thumbsCompact,r=()=>{this._thumbsCompact=!n,this.thumbsSaved=this._thumbsCompact?"1":"0";try{localStorage.setItem("home3d.thumbs_compact",this.thumbsSaved)}catch{}};return g`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${M(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${M(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${M(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${r}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${M(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>g`<button class="fp3d-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${n?y:g`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){let r=this.ro?null:_i(this.actionOwners.get(e),"hold");if(r)return this.runOwnAction(r,this.actionOwners.get(e),t,n);if(e.startsWith("item:"))return;if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!0);if(e.startsWith("gangs:")){let s=this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e.slice(6)),a=s?Ko(s):[];a.length===1?this.onDeviceHold(a[0],t,n):this.onDeviceTap(e,t,n);return}if(this.ro){this.onDeviceTap(e,t,n);return}if(B("auto_pro")&&this.hass&&this.building)for(let s of this.building.floors)for(let a of s.furniture){if(a.type!=="parking"||!a.car)continue;let l=Yn(this.hass,a);if([a.entity,a.car.device,...Object.values(l.entities)].filter(d=>!!d&&d!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:l};return}}let i=wu(e);i?$e(this,i):this.onDeviceTap(e,t,n)}onDeviceSwipe(e,t,n,r,i){let s=this.hass?.states[e];if(this.ro)return!1;if(t==="start"){if(!s||Y(s)||this.confirmSet.has(e))return!1;let l=W(e);if(l==="light"&&Bs(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:r,y:i},!0}if(l==="cover"&&Us(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:r,y:i},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderBinInfo(){let e=this._binInfo,t=this.hass,n=e&&this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId);if(!e||!t||!n)return y;let r=Ad(n,t,this.pickups),i=new Date;i.setHours(0,0,0,0);let s=d=>{let u=Math.round((d.getTime()-i.getTime())/864e5);return u===0?M(t,"bin_today"):u===1?M(t,"bin_tomorrow"):d.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=n.name||M(t,`bin_kind_${n.bin_kind??"rest"}`),l=ks(n,t),c=d=>{d.stopPropagation(),typeof n.bin_out=="string"&&ci(t,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return g`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${r.length?r.map(d=>g`<b>${s(d.day)}${d.summary&&d.summary!==a?g` <small>· ${d.summary}</small>`:y}</b>`):g`<b>${M(t,"bin_none")}</b>`}
      ${Ed(n)&&!this.ro?g`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${c}>${l?M(t,"bin_out_done"):M(t,"bin_out_mark")}</button>`:l?g`<small>${M(t,"bin_out_done")}</small>`:y}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!B("household")||this.panelOpen)return y;let e=()=>{this._hhFolded=!this._hhFolded,jg("home3d.hhFolded",this._hhFolded)};return g`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${M(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?y:this._household.map(t=>g`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):$e(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),y;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),r=this.hass.config?.time_zone,i=s=>{try{return t.toLocaleString(n,r?{...s,timeZone:r}:s)}catch{return t.toLocaleString(n,s)}};return g`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${i({hour:"2-digit",minute:"2-digit"})}</b><span>${i({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return y;let t=this._alerts.slice(0,3);return g`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>g`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${As(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${As(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?g`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:y}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return y;let t=e.floors.flatMap(i=>ke(i)).find(i=>i.id===this.roomId),n=t?_e(this.hass,t.area_id).filter(i=>W(i)==="scene"||W(i)==="script").slice(0,6):[];if(!n.length)return y;let r=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return g`<div class="fp3d-scenes">
      ${n.map(i=>g`<button class="fp3d-chip" aria-pressed=${this._sceneFired===i} @click=${()=>this.runScene(i)}>${j(this.hass,i,r)}</button>`)}
    </div>`}async syncPets(){let e=this.building,t=this.viewer,n=e?.settings.pets?.on!==!1&&this.petsOn!==!1,r=n?e?.settings.pets?.list??[]:[],i=n&&!!e?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!t||!e||this.plan2d||!B("fun_pets")||!r.length&&!i){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,r));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a]=await Promise.all([js(),bo()]);if(!this.viewer||this.plan2d||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:a.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(l,c)=>de(l,c),surface:(l,c,d)=>Vn(l,c,d),closedDoors:()=>{let l=new Set,c=this.hass?.states??{};for(let d of this.building?.floors??[])for(let u of d.openings)u.type==="door"&&u.contact&&c[u.contact]?.state==="off"&&l.add(u.id);return l}})}catch(s){console.error("Home 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let e=this.building,t=!!e&&B("fun_halloween")&&e.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||this.plan2d||!t){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[n,r]=await Promise.all([js(),bo()]);if(!this.viewer||this.plan2d||this.ghost||!this.building)return;this.ghost=n.startGhost({lib:r.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(n){console.error("Home 3D: the ghost failed to load",n)}finally{this.ghostLoading=!1}}}async startWalk(){let e=this.building,t=this.viewer;if(!e||!t||this._walk||this.plan2d)return;let n=e.floors.filter(u=>u.rooms.some(p=>p.points.length>=3)),i=(this.roomId?n.find(u=>u.rooms.some(p=>p.id===this.roomId)):void 0)??n.find(u=>u.id===this.floorId)??[...n].sort((u,p)=>Math.abs(u.elevation)-Math.abs(p.elevation))[0];if(!i)return;let s=await bo();this._walk={room:null,hint:!0},await this.updateComplete;let a=this.renderRoot.querySelector(".fp3d-walk-surface");if(!a)return;t.setFloor(i.id,!1),t.setWallMode("auto");let l=new s.FloorMap(e,i),c=this.roomId?i.rooms.find(u=>u.id===this.roomId):void 0,d;if(c){let u=l.freeNear(Fe(c.points));d={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new s.WalkCamera(t,l,a,{start:d,onRoom:u=>{this.walkRoomPts=u?.points??null,this._walk&&(this._walk={...this._walk,room:u?.name??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||this.plan2d||!this.building||!this.hass)return y;let e=i=>M(this.hass,i);if(!this._walk)return g`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span class="fp3d-walk-label">${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,r=(i,s)=>{if(!n)return;let a=44,l=i.clientX-n.cx,c=i.clientY-n.cy,d=Math.hypot(l,c);d>a&&([l,c]=[l/d*a,c/d*a]),s.firstElementChild.style.transform=`translate(${l}px, ${c}px)`,this.walker?.setStick({x:l/a,y:c/a})};return g`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?g`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:y}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${i=>{let s=i.currentTarget,a=s.getBoundingClientRect();n={id:i.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(i.pointerId),r(i,s)}}
        @pointermove=${i=>r(i,i.currentTarget)}
        @pointerup=${i=>{n=null,i.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${i=>{n=null,i.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return y;if(this._find===null)return g`<button class="fp3d-find-btn" title=${M(this.hass,"find")} aria-label=${M(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Eu(this.findIndex??=Hi(this.hass,e),this._find);return g`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${M(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${M(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?g`<div class="fp3d-find-list">
            ${t.length?t.map(n=>g`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?ai(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?g`<small>${n.where}</small>`:y}</span>
                  </button>`):g`<p>${M(this.hass,"find_none")}</p>`}
          </div>`:y}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return y;let n=(m,v)=>M(t,m,v),r=g`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return r;let i=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,s=i?[i]:e.floors,a=s.flatMap(m=>jr(t,m).lights),l=s.flatMap(m=>jr(t,m).covers),c=a.filter(m=>t.states[m]?.state==="on").length,d=!i,u=(m,v,w,f)=>{if(f.length){if(d&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(v,w,{entity_id:f})}},p=(m,v,w,f,x)=>g`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!x.length} @click=${()=>u(m,w,f,x)}>
        ${this._armed===m?n("central_sure"):n(v)}
      </button>`,h=(e.settings.favorites??[]).filter(m=>t.states[m]),_=this.buttons??e.settings.buttons??[],b=Xt()?Ws(this.sceneHost(t,e)):[];return g`${r}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <div class="fp3d-central-top">
          <b>${i?i.name:n("central_house")}</b>
          ${this.noSettings?y:g`<button class="fp3d-btn fp3d-central-gear" title=${n("view_settings")} aria-label=${n("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${n("view_settings")}</button>`}
        </div>
        ${b.length?g`<div class="fp3d-central-favs">
              ${b.map(m=>g`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:m.id,floorId:null,roomId:null}}}><span aria-hidden="true">${m.icon}</span> ${m.title}</button>`)}
            </div>`:y}
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${a.length?g` <small>${c}/${a.length}</small>`:y}</span>
          ${p("lights_on","central_on","light","turn_on",a.filter(m=>t.states[m]?.state==="off"))}
          ${p("lights_off","central_off","light","turn_off",a.filter(m=>t.states[m]?.state==="on"))}
        </div>
        ${l.length?g`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:y}
        <b>${n("central_favorites")}</b>
        ${h.length?g`<div class="fp3d-central-favs">
              ${h.map(m=>{let[v,w]=wc(m),f=t.states[m],x=v==="homeassistant"&&f?.state==="on";return g`<button
                  class="fp3d-chip"
                  aria-pressed=${x||this._sceneFired===m}
                  ?disabled=${Y(f)}
                  @click=${()=>{t.callService(v,w,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${j(t,m)}
                </button>`})}
            </div>`:_.length?y:g`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${_.length?g`<div class="fp3d-central-favs">
              ${_.map(m=>g`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Ug(t,m)}
                  @click=${v=>{vc(t,v.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?g`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:y}${m.label}
                </button>`)}
            </div>`:y}
      </div>`}mediaCardUp(e,t){let n=e.states[t];if(!n||W(t)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(t)?.until??0)>Date.now()&&Y(n))return!0;let r=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(i=>typeof i=="string"&&!!i.trim());return!Y(n)&&(n.state==="playing"||n.state==="paused"&&r&&this.pausedRecently(n))}pausedRecently(e){let t=Date.parse(e.last_changed??"");if(!Number.isFinite(t))return!0;let n=t+Ng-Date.now();if(n<=0)return!1;let r=Date.now()+n+500;return(!this.pausedTimer||r<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=r,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},n+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return y;let e=M(this.hass,this.clean?"controls_show":"controls_hide");return g`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?zt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:zt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return y;let t=this._voice,n=t?.phase==="wait"||t?.phase==="listen",r=M(e,"voice_button"),i=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return g`<button class="fp3d-mic ${t?.phase==="listen"?"fp3d-mic-on":""}" style="left:${i}px" title=${r} aria-label=${r} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${zt`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?g`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${i}px">${t.text}</div>`:y}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==r)return;if(e.show_rooms){(!e.admins_only||t.user?.is_admin)&&this.showRooms(n,e.show_rooms);return}let i=null;try{let s=await on();i=await this.handleSentence(t,n,s,e.text,e.speak),i===null&&this.sayVoice("error",M(t,"voice_none"))}catch(s){this.sayVoice("error",M(t,"voice_error",{msg:String(s?.message??s)}))}try{await cl(t,e.ask_id,i??"",i!==null)}catch{}}async onMic(){let e=this.hass,t=this.building;if(!e||!t||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let n=(i,s)=>this.sayVoice(i,s);n("wait","\u2026"),this.tourToken++;let r;try{let i=window.AudioContext??window.webkitAudioContext;r=new i,r.resume()}catch{r=void 0}try{let i=await on(),s=await i.listenOnce(e,()=>n("listen",M(e,"voice_listen")),rn(),r);if(!s){n("error",M(e,"voice_none"));return}if(await this.handleSentence(e,t,i,s,!0)!==null)return;n("wait",`\u201C${s}\u201D \u2026`);let a=await i.converse(e,s);n("done",a?`\u201C${s}\u201D \u2013 ${a}`:`\u201C${s}\u201D`)}catch(i){let s=i,a=s?.message==="no_pipeline"?"voice_no_pipeline":s?.message==="silent"?"voice_silent":s?.name==="NotAllowedError"||s?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",a?M(e,a):M(e,"voice_error",{msg:String(s?.message??s?.name??i)}))}}async handleSentence(e,t,n,r,i){let s=(c,d)=>this.sayVoice(c,d),{devices:a,items:l}=this.spokenDevices(e,t,n.SYNONYMS);{let c=n.showTarget(r,t,a,b=>b.area_id?e.areas?.[b.area_id]?.name:null);if(c){let b=c.kind==="house"?M(e,"all_floors"):c.kind==="cameras"?M(e,"camera_wall_title"):c.name;if(s("done",`\u201C${r}\u201D \u2192 ${b}`),this.directing.touch(Date.now()),c.kind==="cameras")B("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(c.kind==="device"){let m=l.get(c.id);c.camera&&c.entity&&B("camera_cockpit")?this.lookThrough(c.entity):m&&this.goTo(m)}else c.kind==="house"?this.fire("floor-tap",{floorId:null}):c.kind==="floor"?this.fire("floor-tap",{floorId:c.floorId}):(this.floorId!==c.floorId&&this.fire("floor-tap",{floorId:c.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),60));return M(e,"voice_showing",{name:b})}let d=this.spokenRacks(e,t),u=d.length?n.rackAnswer(r,d,(b,m)=>M(e,b,m)):null;if(u){s("done",`\u201C${r}\u201D \u2013 ${u.text}`),this.directing.touch(Date.now());let b=l.get(`furniture:${u.rackId}`);return b&&this.goTo(b),i&&n.speak(e,u.text,rn()),u.text}let p=await e.callWS({type:"home_3d/locate/ask",text:r,language:e.language}).catch(()=>null);if(p)return s("done",`\u201C${r}\u201D \u2013 ${p.text}`),p.rooms.length&&(!p.admins_only||e.user?.is_admin)&&this.showRooms(t,p.rooms),i&&n.speak(e,p.text,rn()),p.text;let h=this.moduleHost(e,t,n.SYNONYMS,b=>n.showTarget(b,t,a,m=>m.area_id?e.areas?.[m.area_id]?.name:null)),_=await Ru(r,h);if(_){s("done",_.text?`\u201C${r}\u201D \u2013 ${_.text}`:`\u201C${r}\u201D`),this.directing.touch(Date.now()),_.highlight?.length&&this.viewer?.flashDevices(_.highlight);let b=_.focus,m=_.spoken??_.text??"";if(_.tour?.length){let v=i&&_.speak!==!1?f=>n.speak(e,f,rn()):null,w=_.spoken??_.text;return w&&v&&await v(w),this.runTour(_.tour,t,l,v),m}if(b?.roomId&&b.floorId)this.floorId!==b.floorId&&this.fire("floor-tap",{floorId:b.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:b.floorId,roomId:b.roomId}),60);else if(b?.floorId&&!b.entity&&!b.furnitureId)this.fire("floor-tap",{floorId:b.floorId});else if(b?.entity||b?.furnitureId){let v=l.get(b.entity??`furniture:${b.furnitureId}`);v&&this.goTo(v)}return _.text&&_.speak!==!1&&i&&n.speak(e,_.text,rn()),m}}return null}spokenDevices(e,t,n){let r=this.findIndex??=Hi(e,t),i=new Map(t.floors.flatMap(u=>ke(u).map(p=>[p.id,p.name]))),s=[],a=[],l=new Map;for(let u of r)u.kind==="device"&&u.entity&&l.set(u.entity,u);let c=new Set;for(let u of t.floors){let p=ke(u);for(let h of u.furniture){if(Gg.has(h.type))continue;let _=this.furnitureLinks.get(h.id),b=_?.entity??_?.power??null,m=b??`furniture:${h.id}`,v=p.find(D=>D.points.length>=3&&q([h.x,h.z],D.points)),w=le(e,h.type),f=[h.name,...h.aliases??[],w,b?j(e,b):null,...n[h.type]??[]].filter(D=>!!D),x=h.name||(b?j(e,b):w);s.push({id:m,entity:b,name:x,names:f,room:v?.name??"",camera:!!b&&W(b)==="camera"});let P=(h.type==="plant"||ws(h.type))&&!!h.moisture&&h.moisture!=="none",R=Ts(_?.entity?e.states[_.entity]:void 0,_?.power?pe(e.states[_.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),z=B("household")&&typeof h.remaining=="string"&&h.remaining!=="none"&&!R?Ss(e.states[h.remaining]):null;a.push({id:m,entity:b,name:x,names:f,room:v?.name??"",floorId:u.id,roomId:v?.id??null,power:_?.power??null,type:h.type,remaining:z,thirsty:P&&B("household")?$s(h,e):null}),b?c.add(b):l.set(m,{kind:"device",name:x,where:"",floorId:u.id,roomId:v?.id??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(u.height-.3,Math.max(.5,h.h))})}}let d=new Map(t.floors.flatMap(u=>u.placements.map(p=>[p.entity_id,p])));for(let[u,p]of l){if(c.has(u)||u.startsWith("furniture:"))continue;let h=p.roomId&&i.get(p.roomId)||"",_=d.get(u),b=[_?.name,..._?.aliases??[],p.name].filter(m=>!!m);s.push({id:u,entity:u,name:p.name,names:b,room:h,camera:W(u)==="camera"}),a.push({id:u,entity:u,name:p.name,names:b,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(e,t){let n=[];for(let r of t.floors)for(let i of r.openings){let s=this.openingLinks?.get(i.id)?.lock;if(!s)continue;let a=this.openingSpot(t,i.id,!0);if(!a)continue;let l=e.states[s];n.push({id:s,floorId:r.id,roomId:i.room_id,x:a.x,z:a.z,y:Math.min(a.y+.35,1.5),icon:Nt("lock"),name:j(e,s),text:l?ue(e,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||Y(l),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t,n=!1){for(let r of e.floors){let i=r.openings.find(v=>v.id===t);if(!i)continue;let s=Uc(i,r.rooms,r.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],c=a[(s.edge+1)%a.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[(c[0]-l[0])/d,(c[1]-l[1])/d],h=qe(a)>0?[-u[1],u[0]]:[u[1],-u[0]],_=i.offset;if(n){let v=u[0]*h[1]-u[1]*h[0]>0;_=i.offset-i.width/2+Ul(i,i.hinge==="left"===v)}let[b,m]=ui(s.room,s.edge,_);return{floorId:r.id,x:b+h[0]*.2,z:m+h[1]*.2,y:Math.max(.5,i.sill+i.height/2),theta:Math.atan2(h[0],h[1])}}return null}async showRooms(e,t){let n=t.map(l=>({roomId:l,floorId:e.floors.find(c=>c.rooms.some(d=>d.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!n.length)return;let r=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let i=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};i?.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(c=>this.tourTimer=setTimeout(c,l));for(let[l,c]of n.entries()){if(r!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await a(150)),r!==this.tourToken))break;this.roomId!==c.roomId&&this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),this.directing.touch(Date.now()),l<n.length-1&&await a(4e3)}i?.removeEventListener("pointerdown",s)}async runTour(e,t,n,r){let i=++this.tourToken;clearTimeout(this.tourTimer);let s=e.map(d=>{if(d.openingId){let p=this.openingSpot(t,d.openingId);return p?{...p,entity:null,say:d.say,inside:!0}:null}let u=n.get(d.entity??`furniture:${d.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a?.addEventListener("pointerdown",l,{once:!0});let c=d=>new Promise(u=>this.tourTimer=setTimeout(u,d));for(let d of s){if(i!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await c(150)),i!==this.tourToken)||(this.viewer?.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await c(900),i!==this.tourToken))break;let u=d.say&&r?await r(d.say):!1;if(i!==this.tourToken)break;await c(u?1200:2600)}a?.removeEventListener("pointerdown",l)}spokenOpenings(e,t){let n=[],r=a=>M(e,a);for(let a of t.floors){let l=new Map(ke(a).map(c=>[c.id,c.name]));for(let c of a.openings){let d=this.openingLinks?.get(c.id);if(!d)continue;let u=c.type==="garage"?"garage":c.type==="door"?"door":"window",p=rt(e,d,c.type),h=p.open>.02||p.open2>.02||c.type==="garage"&&(p.cover??0)>.02,_=!h&&(p.tilt>.02||p.tilt2>.02);for(let b of[d.contact,d.contact2,d.cover,d.tilt,d.tilt2])b&&b!=="none"&&n.push({id:c.id,entity:b,kind:u,name:r(`opening_${c.type}`),room:l.get(c.room_id)??"",floorId:a.id,roomId:c.room_id,open:h,tilted:_})}}let i=t.settings.roof?.windows??[],s=i.length?new Map($t(t).map(a=>[a.key,a])):null;for(let a of i){let l=Lp(e,a),c=l.open>.02,d=!c&&l.tilt>.02,u=[a.window,a.contact,a.cover,a.tilt].filter(m=>!!m&&m!=="none"),p=u.map(m=>nt(e,m)).filter(m=>!!m).map(m=>t.floors.flatMap(v=>v.rooms.filter(w=>w.area_id===m).map(w=>({floor:v,room:w})))).find(m=>m.length===1)?.[0],h=p?null:us(t,s?.get(a.face),a),_=p?.floor??h?.floor??t.floors[t.floors.length-1],b=p?.room??(h?_?.rooms.find(m=>m.id===h.roomId):void 0);for(let m of u)n.push({id:a.id,entity:m,kind:"roof_window",name:a.name||r("roof_window"),room:b?.name??"",floorId:_?.id??"",roomId:b?.id??null,open:c,tilted:d})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,r){let i=null,s=()=>i??=this.spokenDevices(e,t,n).spoken,a={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>s(),findDevice:l=>{let c=r(l);return c?.kind==="device"&&c.id?s().find(d=>d.id===c.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>this.mayEdit,updateBuilding:l=>{let c=this.building;if(!c||!this.hass||!this.mayEdit)return;let d=structuredClone(c);l(d),this.building=d,Nn(this.hass,d,un(d.recipes),this.home).catch(u=>this.serviceFailed("home_3d/building/save",u))},callService:(l,c,d)=>this.hass?this.hass.callService(l,c,d):Promise.resolve(),newId:l=>ql(l),waterLevel:(l,c)=>{let d=this.building?.floors.find(p=>p.id===l),u=d?.outdoor.find(p=>p.id===c);return!d||!u||u.type!=="pool"?null:{y:mn(d,u),floorY:Bn(d,u)}},groundAt:(l,c,d)=>{let u=this.building?.floors.find(p=>p.id===l);return u?tt(u,c,d):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:ca,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:s().find(c=>c.entity===l.id||c.power===l.powerEntity)?.name??j(e,l.id),watts:l.power})).sort((l,c)=>c.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>Du(a),weather:()=>Gt(e,this.weatherEntityId??t.settings.weather_entity),listen:async l=>{try{return(await(await on()).listenOnce(e,l,rn())).trim()||null}catch{return null}},notify:l=>this.showNote(l),occupied:()=>this.occupiedRooms(e,t),speakers:()=>this.planSpeakers(e,t)};return a}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,t){let n=new Map;for(let r of this.lastPersons)r.roomId&&n.set(r.roomId,r);for(let r of t.floors)for(let i of r.rooms){if(n.has(i.id)||!i.area_id)continue;_e(e,i.area_id).some(a=>{let l=e.states[a];return a.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&n.set(i.id,{floorId:r.id,roomId:i.id})}return[...n.values()]}planSpeakers(e,t){let n=[],r=new Set;for(let i of t.floors){let s=(a,l)=>i.rooms.find(c=>c.points.length>=3&&q([a,l],c.points))?.id??null;for(let a of i.placements)!a.entity_id.startsWith("media_player.")||r.has(a.entity_id)||!e.states[a.entity_id]||(r.add(a.entity_id),n.push({entity:a.entity_id,name:j(e,a.entity_id),floorId:i.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of i.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||r.has(l)||!e.states[l]||(r.add(l),n.push({entity:l,name:j(e,l),floorId:i.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:de(i,a)+a.h}))}}return n}roomSheets(e){let t=this.hass,n=this.building;if(!t||!n||this.ro||!Xt())return[];let r=n.floors.find(i=>i.rooms.some(s=>s.id===e));return r?Ls(this.sceneHost(t,n),{floorId:r.id,roomId:e}).map(i=>({id:i.id,icon:i.icon,title:i.title})):[]}openRoomSheet(e,t){let n=this.building?.floors.find(r=>r.rooms.some(i=>i.id===e));this._sheet={id:t,floorId:n?.id??null,roomId:e}}currentSheet(e,t){let n=this._sheet;if(!n)return null;let r=this.sceneHost(e,t);return(n.roomId&&n.floorId?Ls(r,{floorId:n.floorId,roomId:n.roomId}):Ws(r)).find(s=>s.id===n.id)??null}renderSheet(){let e=this.hass,t=this.building;if(!e||!t||!this._sheet)return y;let n=this.currentSheet(e,t);if(!n)return y;let r=d=>M(e,d),i=this._sheet.roomId?t.floors.flatMap(d=>d.rooms).find(d=>d.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async d=>{s();try{await d()}catch(u){console.warn("Home 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&n.input&&a(()=>n.input.onSubmit(u))},c=async()=>{let d=this.renderRoot.querySelector(".fp3d-sheet-input");if(!d)return;d.placeholder=r("sheet_listening");let p=await this.sceneHost(e,t).listen?.(()=>d.placeholder=r("sheet_listening"));d.placeholder=n.input?.placeholder??"",p?d.value=p:this.showNote(r("sheet_mic_failed"))};return g`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${n.title}>
        <header>
          <b><span aria-hidden="true">${n.icon}</span> ${n.title}${i?` \xB7 ${i.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${r("close")} @click=${s}>✕</button>
        </header>
        ${n.choice?g`<div class="fp3d-sheet-choice">
              ${n.choice.options.map(d=>g`<button class="fp3d-chip" aria-pressed=${d.id===n.choice.value} @click=${()=>{n.choice.set(d.id),this.requestUpdate()}}>${d.label}</button>`)}
            </div>`:y}
        ${n.chips?.length?g`<div class="fp3d-sheet-chips">${n.chips.map(d=>g`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>d.onTap())}}>${d.label}</button>`)}</div>`:y}
        ${n.input?g`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${n.input.placeholder} @keydown=${d=>d.key==="Enter"&&l()} />
              ${n.input.mic?g`<button class="fp3d-btn fp3d-sheet-mic" title=${r("sheet_mic")} aria-label=${r("sheet_mic")} @click=${()=>{c()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:y}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${n.input.button}</button>
            </div>`:y}
        ${n.lines?.length?g`<div class="fp3d-sheet-lines">${n.lines.map(d=>g`<p>${d}</p>`)}</div>`:y}
        ${this.mayEdit&&Ns().length?g`<button class="fp3d-sheet-gear" @click=${()=>{s(),this._settingsOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-set-module")?.scrollIntoView({block:"start"}))}}>⚙ ${r("view_settings")}</button>`:y}
      </div>`}viewPlan(e){let t=new Date(this.replay?.t??Date.now()),n=this.hass?ra(e,this.hass.states,t).join("|"):"";return(this.shownPlan?.from!==e||this.shownPlan.hidden!==n)&&(this.shownPlan={from:e,hidden:n,plan:n&&this.hass?gp(e,this.hass.states,t):e}),this.shownPlan.plan}get mayEdit(){return(this.canEdit??!!this.hass?.user?.is_admin)&&!this.ro}setPlanSettings(e){let t=this.building;if(!t||!this.hass||!this.mayEdit)return;let n=structuredClone(t);Object.assign(n.settings,e),this.building=n,Nn(this.hass,n,un(n.recipes),this.home).catch(r=>this.serviceFailed("home_3d/building/save",r))}openSettings(){this._settingsOpen=!0}showRackView(e,t,n=null){this._rackView={id:e,draw:t,slot:n}}closeRackView(){this._rackView=null}rackViewItem(){let e=this._rackView;return e?this.building?.floors.flatMap(t=>t.furniture).find(t=>t.id===e.id):void 0}rackViewOf(){let e=this._rackView,t=this.rackViewItem();if(!e||!t)return null;let n=this.hass?.language??"en",r=t.name||le(this.hass,t.type),i=new Map((t.rack?.slots??[]).map(a=>[a.id,this.hass?en(this.hass,a):null])),s=JSON.stringify([e.id,r,n,[...i]]);if(this.rackViewMemo?.key!==s||this.rackViewMemo.draw!==e.draw){let a=e.draw((l,c)=>l.name||Uo(c,n),r,l=>i.get(l.id)??null);this.rackViewMemo={key:s,draw:e.draw,view:{...a,name:r}}}return this.rackViewMemo.view}tapRackDrawing(e){this._rackView&&e&&(this._rackView={...this._rackView,slot:e})}openRackEntity(e){$e(this,e)}renderRackDetail(e,t){let n=t.rack?.slots.find(l=>l.id===this._rackView?.slot);if(!n)return y;let r=l=>M(e,l),i=en(e,n),s=An(n),a=n.name||le(e,n.type);return g`<section class="fp3d-rack-detail">
      <b>${i?g`<i class="fp3d-rack-led" style="background:${Ci[i]}"></i>`:y}${a}${i?g` · ${r(`rack_status_${i}`)}`:y}</b>
      ${s.length?s.map(l=>g`<button class="fp3d-rack-entity" @click=${()=>this.openRackEntity(l)}><span>${j(e,l)}</span><span>${ue(e,e.states[l])}</span></button>`):g`<p>${r("rack_unlinked")}</p>`}
    </section>`}renderRackView(){let e=this.hass,t=e?this.rackViewOf():null,n=this.rackViewItem();if(!e||!t||!n)return y;let r=()=>this.closeRackView(),i=s=>this.tapRackDrawing(s.target?.closest?.("[data-slot]")?.getAttribute("data-slot")??null);return g`<div class="fp3d-sheet-backdrop" @click=${r}></div>
      <div class="fp3d-sheet fp3d-rack-view" role="dialog" aria-label=${t.name}>
        <header>
          <b>▤ ${t.name}</b>
          <button class="fp3d-sheet-x" aria-label=${M(e,"close")} @click=${r}>✕</button>
        </header>
        <p class="fp3d-rack-view-used">${M(e,"rack_front_view")} · ${M(e,"rack_used",{used:t.used,u:t.u})}</p>
        ${this.renderRackDetail(e,n)}
        <div class="fp3d-rack-view-box" @click=${i}>${ld(t.svg)}</div>
      </div>`}renderSettings(){let e=this.hass,t=this.building;if(!e||!t||!this._settingsOpen)return y;let n=d=>M(e,d),r=this.mayEdit,i=t.settings,s=(d,u,p,h)=>g`<label class="fp3d-set-check" title=${h?n(h):""}
        ><input type="checkbox" .checked=${u} ?disabled=${!r} @change=${_=>this.setPlanSettings(p(_.target.checked))} /> ${n(d)}</label
      >`,a=this.sceneHost(e,t),l=ft(),c=Ns().map(d=>{let u=Ou(d,a);if(!u.length||u[0].kind==="heading")return u;let p=l.find(_=>_.id===d);return[{kind:"heading",text:p?Sl(p,e.language??"en").replace(/^(Modul|Module):\s*/i,""):d},...u]}).filter(d=>d.length);return g`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${n("view_settings")}>
        <header>
          <b>⚙ ${n("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${n("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${r?y:g`<p class="fp3d-set-note">${n("view_settings_admin")}</p>`}
        <h4>${n("view_settings_look")}</h4>
        ${s("sun_shadow",i.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${s("window_glow",i.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${s("sun_patches",i.sun_patches!==!1,d=>({sun_patches:d}))}
        <h4>${n("view_settings_alerts")}</h4>
        ${s("rain_warning",i.rain_warning!==!1,d=>({rain_warning:d}))}
        ${s("alert_unavailable",!!i.alert_unavailable,d=>({alert_unavailable:d}))}
        ${s("alert_names",i.alert_names!==!1,d=>({alert_names:d}))}
        <h4 title=${n("effects_hint")}>${n("effects")}</h4>
        ${bd(e,i.effects,!r,d=>this.setPlanSettings({effects:d}))}
        ${c.map(d=>g`<div class="fp3d-set-module">${d.map(u=>this.renderViewField(e,u,r))}</div>`)}
        <p class="fp3d-set-note">${n("view_settings_more")}</p>
      </div>`}renderViewField(e,t,n){switch(t.kind){case"heading":return g`<h4>${t.text}</h4>`;case"text":return g`<p class="fp3d-set-note">${t.text}</p>`;case"check":return g`<label class="fp3d-set-check"><input type="checkbox" .checked=${t.value} ?disabled=${!n} @change=${r=>t.set(r.target.checked)} /> ${t.label}</label>`;case"select":return g`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${r=>t.set(r.target.value)}>
            ${t.options.map(r=>g`<option value=${r.id} ?selected=${r.id===t.value}>${r.label}</option>`)}
          </select></label
        >`;case"entity":{let r=Object.keys(e.states).filter(i=>t.filter(i)).sort((i,s)=>j(e,i).localeCompare(j(e,s)));return g`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${i=>{let s=i.target.value;t.set(s===""?null:s)}}>
            <option value="" ?selected=${!t.value}>${t.auto?M(e,"entity_auto",{name:j(e,t.auto)}):"\u2014"}</option>
            ${r.map(i=>g`<option value=${i} ?selected=${i===t.value}>${j(e,i)}</option>`)}
          </select></label
        >`}case"lines":return cd(t.value,!n,{label:t.label,placeholder:t.placeholder??M(e,"lines_new"),add:M(e,"lines_add"),remove:M(e,"delete")},r=>t.set(r));case"button":return g`<button class="fp3d-btn ${t.primary?"fp3d-primary":""}" ?disabled=${!n} title=${t.title??""} @click=${()=>t.onTap()}>${t.label}</button>`}}renderNote(){return this._note?g`<div class="fp3d-note" role="status">${this._note}</div>`:y}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(r=>ke(r).map(i=>[i.id,i.name])));return this._alerts.map(r=>({kind:r.kind,entity:r.entity,name:j(e,r.entity),...r.text?{text:r.text}:{},room:r.roomId?n.get(r.roomId)??null:null,floorId:r.floorId,roomId:r.roomId}))}spokenCars(e,t){if(!B("auto_pro"))return[];let n=[];for(let r of t.floors)for(let i of r.furniture){if(i.type!=="parking"||!i.car)continue;let s=In(e,i),a=Yn(e,i),l=a.entities.tracker?e.states[a.entities.tracker]:void 0,c=!!s&&!(l&&!Ai.has(l.state.toLowerCase()));n.push({name:i.name||(s?le(e,s):le(e,"car")),spot:i.id,floorId:r.id,present:c,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return y;let t=e.kind==="light"&&e.value<=0;return g`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${j(this.hass,e.entity)}</span>
      <b>${t?M(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n||this.ro||this.plan2d)return;if(!B("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let r=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let i=this.floorId===r?0:300;i&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},i)}endThrough(){let e=this._through;e&&(this._through=null,this.live?.id===e.entity&&(this.live=null),this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?y:g`<div class="fp3d-pro" role="dialog">
      <b>${M(this.hass,"pro_title")}</b>
      <span>${M(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${M(this.hass,"pro_locked")}</span>
      <div>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${M(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${M(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return y;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!B("camera_cockpit"))return g`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${M(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${M(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(d=>d.placements.map(u=>u.entity_id)).filter(d=>W(d)==="camera"))];this.watchCameras(!0);let r=d=>{let u=e.states[d],p=u?.attributes.entity_picture;return p&&u&&!Y(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},i=d=>{let u=e.states[d];return g`${j(e,d)}${u?.state==="recording"?g` <b>● ${M(e,"state_recording")}</b>`:y}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let d=r(s),u=this.liveFor(s),p=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return g`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${M(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${i(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${M(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(d?g`<img src=${d} alt="" />`:g`<div class="fp3d-wall-none">${M(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:c}=hp(n.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return g`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${M(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${M(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${c}px); grid-auto-rows: ${Math.round(c*9/16)}px">
        ${n.map(d=>{let u=r(d),p=at(e,d).some(h=>e.states[h]?.state==="on");return g`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${M(e,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${u?g`<img src=${u} alt="" />`:g`<div class="fp3d-wall-none">${M(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${i(d)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(r=>{if(this.live!==t)return;let i=r.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});i.hass=this.hass,t.el=i,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return y;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,r=n&&!Y(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,i=this.building?.settings.director?.live?this.liveFor(e.entity):null;return g`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?g`<div class="fp3d-through-img fp3d-through-live">${i}</div>`:r?g`<img class="fp3d-through-img" src=${r} alt="" />`:y}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${j(this.hass,e.entity)}</span>
        <span class="fp3d-still">${i?"\u25CF Live":M(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${M(this.hass,"through_blend")}
          @input=${s=>this._blend=Number(s.target.value)/100}
        />
        <button class="fp3d-chip" title=${M(this.hass,"through_full_hint")} @click=${()=>this.throughFull(e.entity)}>⛶ ${M(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${M(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>$e(this,e)):$e(this,e)}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return y;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,r=t?.clientHeight??600,i=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(r-360,e.y-170));return g`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        .presets=${B("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${B("camera_cockpit")}
        ?noLook=${this.plan2d}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){let t=[];for(let n of this.scene){if(n.kind!=="marker")continue;let r=e.floors.find(d=>d.id===n.floorId),i=n.furnitureId?r?.furniture.find(d=>d.id===n.furnitureId):void 0;if(!r||!i&&!n.at)continue;let[s,a]=i?[i.x,i.z]:n.at,l=Bu(n.path),c=Vu(n.emoji);t.push({id:`module:${n.id}`,floorId:r.id,roomId:r.rooms.find(d=>d.points.length>=3&&q([s,a],d.points))?.id??null,x:s,z:a,y:n.y??(i?de(r,i)+i.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:n.name,text:n.text??"",active:!!n.active&&!this.dimmed,unavailable:!1,glow:n.color&&n.active&&!this.dimmed?{color:n.color,level:1}:null,pin:!0,full:!0,...i?{furnitureId:i.id}:{}})}return t}openModuleCard(e){let t=this.scene.find(i=>i.kind==="marker"&&i.id===e);if(!t)return;if(t.sheet){this.openRoomSheet(t.sheet.roomId,t.sheet.id);return}t.card&&(this.mediaFolded.delete(t.card),this.cardPing=t.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=this.building?.floors.find(i=>i.id===t.floorId),r=n?.furniture.find(i=>i.id===t.furnitureId);n&&r&&this.viewer?.focus(n.id,r.x,r.z,de(n,r)+r.h*.6,`module:${t.id}`)}onDeviceTap(e,t=0,n=0){let r=this.ro?void 0:this.actionOwners.get(e);if(!r)return this.defaultTap(e,t,n);let i=_i(r,"double_tap");this.taps.tap(e,!!i,()=>{let s=_i(r,"tap");s?this.runOwnAction(s,r,t,n):this.defaultTap(e,t,n)},()=>i&&this.runOwnAction(i,r,t,n))}runOwnAction(e,t,n,r){let i=this.hass;i&&ud(e,t.entity,{callService:(s,a,l)=>i.callService(s,a,l),moreInfo:s=>$e(this,s),camera:s=>this._menu={entity:s,x:n,y:r},navigate:s=>{history.pushState(null,"",s),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))},openUrl:s=>{window.open(s,"_blank","noopener,noreferrer")},confirm:s=>this.ask(s??M(i,"action_confirm_default",{name:t.entity?j(i,t.entity):M(i,"action_this_item")}))}).catch(s=>this.showNote(M(i,"action_failed",{error:s instanceof Error?s.message:String(s)})))}ask(e){return gt(e,{ok:M(this.hass,"action_confirm_ok"),cancel:M(this.hass,"cancel")})}async confirmFor(e){return!this.confirmSet.has(e)||await this.ask(M(this.hass,"confirm_switch",{name:j(this.hass,e)}))}defaultTap(e,t=0,n=0){if(e.startsWith("item:")||e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!1);if(e.startsWith("gangs:")){let s=e.slice(6),a=this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===s);if(!a)return;let l=Ko(a);if(l.length===1)return this.onDeviceTap(l[0],t,n);if(l.length>1){this._gangMenu={furnitureId:s,x:t,y:n};return}let c=Un(a).find(d=>d.power&&d.power!=="none")?.power;c&&(this.ro?this.showInfo(c,t,n):$e(this,c));return}if(e.startsWith("hh:")){let[s,a]=e.slice(3).split("#");this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===a&&c.type==="waste_bin")?(this._binInfo={furnitureId:a,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(s,t,n):$e(this,s);return}if(this.ro){let s=this.building,a=s?s.energy.grid??Jt(s,c=>this.furnitureLinks?.get(c.id)?.power??null).grid:null,l=e==="grid"?a:e.startsWith("detect:")?e.slice(7):e;l&&this.showInfo(l,t,n);return}if(e==="grid"){let s=this.building,a=s?s.energy.grid??Jt(s,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null;a&&$e(this,a);return}if(e.startsWith("detect:")){$e(this,e.slice(7));return}let r=this.printerCams.get(e);if(r){this._menu={entity:r,x:t,y:n};return}let i=W(e);if(i==="cover"||i==="camera"){this._menu={entity:e,x:t,y:n};return}i&&oc.has(i)?this.confirmFor(e).then(s=>s&&ci(this.hass,e)):$e(this,e)}onOpeningTap(e,t,n,r){let i=this.openingLinks?.get(e);if(!i||!this.hass)return;if(i.lock&&!i.cover){this.ro?this.showInfo(i.lock,t,n):this._menu={entity:i.lock,x:t,y:n,doorLock:!0};return}let s=i.cover;if(!s)return;if(this.ro){this.showInfo(i.contact??s,t,n);return}if(r){$e(this,s);return}let a=this.hass.states[s];if(!a||Y(a)){$e(this,s);return}let[l]=s.split(".");this.confirmFor(s).then(c=>c&&this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:s}))}effectiveTheme(){return ct(this.theme,this.hass)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("home3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("home3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!B("energy_pro")||!e||this.roomId||!this.showEnergy)return y;let t=r=>M(this.hass,r),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:ce(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;n.push({cls:r?"export":"grid",label:t(r?"energy_grid_export":"energy_grid_import"),value:ce(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:ce(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?ce(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${ie(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),g`<div class="fp3d-energy" aria-live="off">
      ${this._cheap?g`<div class="fp3d-energy-item fp3d-energy-cheap" role="status"><span>${t("cheap_rate")}</span><b>${t("cheap_rate_now")}</b></div>`:y}
      ${this._holoOn?y:n.map(r=>g`<div class="fp3d-energy-item fp3d-energy-tile fp3d-energy-${r.cls}${this._bigTile===r.cls?" fp3d-energy-big":""}" tabindex="0" @click=${()=>this.toggleEnergyTile(r.cls)}>
                <span>${r.label}</span><b>${r.value}</b>
              </div>`)}
      ${this.flows!==null?y:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?y:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}toggleEnergyTile(e){this._bigTile=this._bigTile===e?null:e}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return y;let e=Ii[this.heatMode],t=this.heatMode==="temperature",n=t?ot(this.hass,e.stops[0][0]):e.stops[0][0],r=t?ot(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?Re(this.hass):e.unit,s=a=>M(this.hass,a);return g`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${bu(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${ie(this.hass,n,0)} ${i}</span><span>${ie(this.hass,r,0)} ${i}</span></span>
      ${this.heatValues.size?y:g`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){let t=e.config?.latitude,n=e.config?.longitude;if(typeof t!="number"||typeof n!="number")return null;let r=`${new Date().toDateString()},${t},${n}`;return this.sunPathKey!==r&&(this.sunPathKey=r,this.sunPathCache=Pp(Date.now(),t,n)),this.sunPathCache}skyColor(){if(this.effectiveTheme()==="realistic"&&this._realSky)return this._realSky.horizon;let e=fo[this.effectiveTheme()]??fo.neon,t=this._sky;return e.night[0].map((n,r)=>Math.round(n+(e.day[0][r]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(c,d)=>`rgb(${c.map((u,p)=>Math.round(u+(d[p]-u)*e)).join(",")})`,n=fo[this.effectiveTheme()]??fo.neon,r=this.effectiveTheme()==="realistic"?this._realSky:null,i=c=>`rgb(${c.join(",")})`,s=wp(this.building?.settings.backdrop)??(r?`linear-gradient(180deg, ${i(r.top)} 0%, ${i(r.horizon)} 62%, ${i(r.ground)} 100%)`:null),l=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${s?`;background:${s}`:""}`;return g`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${l}
    >
      ${this._error?g`<p class="fp3d-error">${this._error}</p>`:y} ${this.clean?y:this.renderEnergy()} ${this.renderHologram()} ${this.clean?y:this.renderWires()} ${this.clean?y:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?y:g`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?y:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderSettings()} ${this.renderRackView()} ${this.renderNote()}
      ${this.clean?y:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this.pivotMark&&!this._walk?g`<span class="fp3d-pivot" aria-hidden="true"></span>`:y}
      ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,qi())}></fp3d-mic-probe>`:y}
      ${this.showStats&&this._stats?g`<span class="fp3d-stats"
            ><b>${this._stats.fps?M(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):M(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?g`(${this._stats.busy.map(c=>M(this.hass,`stats_busy_${c}`)).join(", ")})`:y} ·
            ${M(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${M(this.hass,this._stats.low?"stats_low":"stats_full",{r:ie(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${ie(this.hass,this.syncMs,1)} ms`:""}</span
          >`:y}
    </div>`}static styles=[Ve,Je,Me`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      /* a tag: light text on a solid dark plate, the bin's colour as its edge and a soft glow (coloured text – a
         blue paper bin's – was hard to read) */
      .fp3d-holo.fp3d-holo-bin {
        min-width: 0;
        width: auto;
        padding: 0;
        border-radius: 8px;
        pointer-events: none;
        border: 1.5px solid color-mix(in srgb, var(--bin) 85%, white);
        border-left-width: calc(6px * var(--fp3d-pin-k, 1));
        background: rgba(9, 13, 22, 0.94);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        box-shadow: 0 0 16px color-mix(in srgb, var(--bin) 50%, transparent), 0 2px 6px rgba(0, 0, 0, 0.5);
        color: #f5f8ff;
        text-shadow: none;
      }
      /* the tags of bins, mailboxes and plants follow the symbol size like the pins' labels (#645) */
      .fp3d-holo-bin .fp3d-holo-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: calc(4px * var(--fp3d-pin-k, 1)) calc(10px * var(--fp3d-pin-k, 1));
        white-space: nowrap;
      }
      .fp3d-holo.fp3d-holo-later {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        border-color: color-mix(in srgb, var(--bin) 60%, #3a4252);
      }
      .fp3d-holo-bin b {
        font-size: calc(19px * var(--fp3d-pin-k, 1));
        font-weight: 700;
        line-height: 1.15;
        color: #ffffff;
      }
      .fp3d-holo-later b {
        font-weight: 600;
        color: #dfe5f0;
      }
      .fp3d-holo-bin span {
        font-size: calc(13px * var(--fp3d-pin-k, 1));
        line-height: 1.2;
        color: #cfd7e6;
      }
      /* put out already: a calm green edge, no glow */
      .fp3d-holo.fp3d-holo-out {
        border-color: #4ddf7a;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
      }
      .fp3d-holo-out b,
      .fp3d-holo-line-out b {
        color: #a8ffc2;
      }
      /* bins standing together: one plate, one line each in pickup order with its own colour edge */
      .fp3d-holo.fp3d-holo-bin.fp3d-holo-multi {
        border-color: rgba(190, 205, 230, 0.55);
        border-left-width: 1.5px;
      }
      .fp3d-holo-bin .fp3d-holo-lines {
        align-items: stretch;
        gap: calc(3px * var(--fp3d-pin-k, 1));
        padding: calc(5px * var(--fp3d-pin-k, 1)) calc(9px * var(--fp3d-pin-k, 1)) calc(5px * var(--fp3d-pin-k, 1)) calc(6px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line {
        display: flex;
        align-items: baseline;
        gap: calc(7px * var(--fp3d-pin-k, 1));
        border-left: calc(5px * var(--fp3d-pin-k, 1)) solid var(--bin);
        padding-left: calc(6px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line b {
        font-size: calc(16px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line-later b {
        font-weight: 600;
        color: #dfe5f0;
      }
      .fp3d-holo-line-later {
        border-left-color: color-mix(in srgb, var(--bin) 65%, #3a4252);
      }
      /* a mailbox's or a plant's tag from afar: a round symbol (the text comes back close up) */
      .fp3d-holo-sym {
        display: none;
      }
      .fp3d-holo.fp3d-holo-bin.fp3d-holo-far {
        border-radius: 50%;
        border-width: 2px;
      }
      .fp3d-holo-far .fp3d-holo-body {
        display: none;
      }
      .fp3d-holo-far .fp3d-holo-sym {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(34px * var(--fp3d-pin-k, 1));
        height: calc(34px * var(--fp3d-pin-k, 1));
        color: #ffffff;
      }
      .fp3d-holo-far .fp3d-holo-sym svg {
        width: 62%;
        height: 62%;
      }
      .fp3d-holo-link[style*="--bin"] line,
      .fp3d-holo-link[style*="--bin"] circle {
        stroke: var(--bin);
      }
      .fp3d-gang-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        z-index: 6;
      }
      .fp3d-gang-menu .fp3d-chip {
        text-align: left;
      }
      .fp3d-gang-menu .fp3d-gang-on {
        border-color: var(--fp3d-accent, #37e0ff);
        box-shadow: 0 0 10px rgba(55, 224, 255, 0.35);
      }
      .fp3d-gang-menu small {
        opacity: 0.7;
      }
      .fp3d-pivot {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 22px;
        height: 22px;
        margin: -11px 0 0 -11px;
        border: 1.5px solid color-mix(in srgb, var(--fp3d-accent, #37e0ff) 75%, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
      }
      .fp3d-pivot::before,
      .fp3d-pivot::after {
        content: "";
        position: absolute;
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 75%, transparent);
      }
      .fp3d-pivot::before {
        left: 50%;
        top: -6px;
        bottom: -6px;
        width: 1.5px;
        margin-left: -0.75px;
      }
      .fp3d-pivot::after {
        top: 50%;
        left: -6px;
        right: -6px;
        height: 1.5px;
        margin-top: -0.75px;
      }
      /* two classes: the info bubbles' own rule (.fp3d-swipe, further down) lets taps through to the house and
         would win over a single class – this bubble has a button (#793) */
      .fp3d-swipe.fp3d-bin-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-swipe.fp3d-bin-info .fp3d-bin-out {
        pointer-events: auto;
      }
      .fp3d-bin-info small {
        opacity: 0.7;
        font-weight: 400;
      }
      .fp3d-bin-info .fp3d-bin-out {
        margin-top: 6px;
        padding: 7px 12px;
        border-radius: 999px;
        border: 1px solid rgba(190, 205, 230, 0.55);
        background: rgba(255, 255, 255, 0.08);
        color: #f5f8ff;
        font: inherit;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-bin-info .fp3d-bin-out-on {
        border-color: #4ddf7a;
        background: rgba(77, 223, 122, 0.16);
        color: #a8ffc2;
      }
      .fp3d-hh {
        position: absolute;
        right: 12px;
        top: 58px;
        z-index: 3;
        width: min(250px, calc(100% - 24px));
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-s-chrome, rgba(10, 18, 34, 0.72));
        border: 1px solid rgba(110, 220, 255, 0.28);
        backdrop-filter: blur(8px);
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.35);
      }
      .fp3d-hh-folded {
        width: auto;
      }
      .fp3d-hh button {
        font: inherit;
        color: inherit;
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
        border-radius: 9px;
      }
      .fp3d-hh-head {
        font-size: 12px;
        font-weight: 600;
        padding: 3px 6px;
        opacity: 0.9;
      }
      .fp3d-hh-head b {
        margin-left: 4px;
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-hh-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        padding: 5px 6px;
      }
      .fp3d-hh-row:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.06);
      }
      .fp3d-hh-row:disabled {
        cursor: default;
      }
      .fp3d-hh-hot .fp3d-hh-icon {
        color: #ffb547;
      }
      .fp3d-hh-icon {
        flex: none;
        display: inline-flex;
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      /* a leak is red like its floor (#10); rain at a window stays blue */
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .fp3d-pin-info small {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        /* the symbol size (small 0.8, normal 1, large 1.25) scales the pin from inside, not its position */
        font: 600 calc(12px * var(--fp3d-pin-k, 1)) var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: calc(24px * var(--fp3d-pin-k, 1));
        height: calc(24px * var(--fp3d-pin-k, 1));
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev-icon svg {
        width: calc(18px * var(--fp3d-pin-k, 1));
        height: calc(18px * var(--fp3d-pin-k, 1));
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        width: 30px;
        height: 30px;
        pointer-events: auto;
      }
      .fp3d-person-tap {
        cursor: pointer;
      }
      .fp3d-person-face {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        background: var(--fp3d-pc, #ff5fd2);
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px color-mix(in srgb, var(--fp3d-pc, #ff5fd2) 55%, transparent),
          0 0 18px var(--fp3d-pc, #ff5fd2);
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person-figure {
        width: auto;
        height: auto;
      }
      .fp3d-person-figure .fp3d-person-face {
        display: none;
      }
      .fp3d-person-figure .fp3d-person-tag {
        position: static;
        display: block;
        transform: none;
      }
      .fp3d-person-tag {
        position: absolute;
        left: 50%;
        top: calc(100% + 4px);
        transform: translateX(-50%);
        padding: 1px 7px;
        border-radius: 8px;
        background: rgba(8, 14, 28, 0.82);
        border: 1px solid color-mix(in srgb, var(--fp3d-pc, #ff5fd2) 60%, transparent);
        color: #fff;
        font: 600 11px var(--fp3d-font);
        white-space: nowrap;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-no-room-names .fp3d-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      /* a shadow that pulses repaints the warning every frame: it glows steadily on the tablet level */
      .fp3d-low .fp3d-alert {
        animation: none;
      }
      .fp3d-low .fp3d-holo-link line,
      .fp3d-low .fp3d-holo-link circle,
      .fp3d-low .fp3d-holo-curve {
        filter: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .fp3d-thumbs-compact .fp3d-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .fp3d-thumbs-compact .fp3d-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      /* at the top right, clear of the floor pictures and the switch rows (a card moves it beside its own buttons) */
      .fp3d-walk-btn {
        position: absolute;
        z-index: 3;
        top: 12px;
        right: var(--fp3d-walk-right, 12px);
        height: 38px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0 14px 0 10px;
        font: inherit;
        font-weight: 700;
        font-size: 14px;
        border: 1px solid rgba(55, 224, 255, 0.45);
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      .fp3d-walk-surface {
        position: absolute;
        inset: 0;
        z-index: 4;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-walk-top {
        position: absolute;
        z-index: 5;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: none;
        white-space: nowrap;
      }
      .fp3d-walk-room,
      .fp3d-walk-exit,
      .fp3d-walk-hint {
        padding: 8px 14px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font: inherit;
        font-weight: 700;
      }
      .fp3d-walk-exit {
        border: 0;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-walk-hint {
        position: absolute;
        z-index: 5;
        left: 50%;
        top: 62px;
        transform: translateX(-50%);
        max-width: min(560px, calc(100% - 32px));
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-walk-stick {
        position: absolute;
        z-index: 5;
        right: 18px;
        bottom: calc(18px + var(--fp3d-bottom-inset, 0px));
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background: rgba(14, 21, 38, 0.55);
        border: 1px solid var(--fp3d-line);
        display: grid;
        place-items: center;
        touch-action: none;
      }
      .fp3d-walk-stick span {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: var(--fp3d-accent);
        box-shadow: 0 0 16px rgba(55, 224, 255, 0.5);
        pointer-events: none;
      }
      /* with a mouse the stick is not needed */
      @media (pointer: fine) {
        .fp3d-walk-stick {
          display: none;
        }
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .fp3d-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .fp3d-central-on {
        color: var(--fp3d-accent);
      }
      .fp3d-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .fp3d-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .fp3d-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-central-row small {
        opacity: 0.6;
      }
      .fp3d-central .fp3d-btn {
        min-width: 64px;
      }
      .fp3d-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .fp3d-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .fp3d-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .fp3d-low .fp3d-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .fp3d-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: var(--fp3d-s-chrome, rgba(8, 16, 34, 0.7));
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      /* the clock in a corner of the view (view settings / card option clock) */
      .fp3d-clock {
        position: absolute;
        z-index: 4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        padding: 8px 14px;
        border-radius: 14px;
        background: rgba(4, 16, 24, 0.55);
        color: var(--fp3d-text);
        line-height: 1.1;
        pointer-events: none;
        backdrop-filter: blur(6px);
      }
      .fp3d-clock b {
        font-size: 30px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.02em;
      }
      .fp3d-clock span {
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      /* at the top it sits under the energy strip and the walk button */
      .fp3d-clock-tl {
        top: 64px;
        left: 12px;
      }
      .fp3d-clock-tr {
        top: 64px;
        right: 12px;
      }
      .fp3d-clock-bl {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        left: 12px;
      }
      .fp3d-clock-br {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        right: 12px;
      }
      .fp3d-mic {
        position: absolute;
        bottom: calc(6px + var(--fp3d-bottom-inset, 0px));
        /* a big target: it is tapped from across the room, often with a thumb */
        width: 52px;
        height: 52px;
        touch-action: manipulation;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: var(--fp3d-s-chrome, rgba(8, 16, 34, 0.7));
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      .fp3d-mic-on {
        color: #ff5a6a;
        border-color: #ff5a6a;
        box-shadow: 0 0 12px rgba(255, 90, 106, 0.7);
      }
      .fp3d-mic-say {
        position: absolute;
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        max-width: min(420px, calc(100% - 80px));
        padding: 6px 12px;
        border-radius: 14px;
        background: var(--fp3d-s-chrome, rgba(8, 16, 34, 0.85));
        border: 1px solid rgba(160, 240, 255, 0.35);
        color: var(--fp3d-text);
        font-size: 14px;
        z-index: 4;
      }
      .fp3d-mic-err {
        border-color: rgba(255, 90, 106, 0.7);
      }
      .fp3d-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .fp3d-eye:hover,
      .fp3d-eye-clean:hover {
        opacity: 1;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      /* time travel: the clock sits at the top centre, the warnings below it */
      .fp3d-replay .fp3d-alert-banner {
        top: 74px;
      }
      /* the time bar takes the bottom: the heat legend moves up under the energy values */
      .fp3d-replay .fp3d-legend,
      .fp3d-replay.fp3d-has-alerts .fp3d-legend {
        bottom: auto;
        top: 62px;
      }
      .fp3d-replay .fp3d-energy {
        max-width: calc(50% - 96px);
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        pointer-events: auto;
      }
      .fp3d-replay .fp3d-energy > * {
        flex: none;
      }
      /* the warnings sit below the clock, so the energy values stay at the top */
      .fp3d-replay.fp3d-has-alerts .fp3d-energy {
        top: 10px;
      }
      @container fp3d (max-width: 700px) {
        .fp3d-replay .fp3d-energy,
        .fp3d-replay.fp3d-has-alerts .fp3d-energy {
          top: 68px;
          max-width: calc(100% - 24px);
        }
        .fp3d-replay .fp3d-alert-banner,
        .fp3d-replay .fp3d-legend {
          top: 116px;
        }
        .fp3d-replay.fp3d-has-alerts .fp3d-legend {
          top: 164px;
        }
      }
      .fp3d-info {
        grid-template-columns: auto;
        z-index: 5;
      }
      .fp3d-swipe.fp3d-info b {
        font-size: 15px;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-central-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-central-top > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-central-gear {
        padding: 4px 10px;
        font-size: 12px;
      }
      /* a module's sheet and the ⚙ settings: a glass box in the middle, over a dim backdrop */
      .fp3d-sheet-backdrop {
        position: absolute;
        inset: 0;
        z-index: 7;
        background: rgba(4, 8, 16, 0.35);
      }
      .fp3d-sheet {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(440px, calc(100% - 24px));
        max-height: calc(100% - 40px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 14px 16px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(12px);
        z-index: 8;
      }
      .fp3d-sheet.fp3d-rack-view {
        width: auto;
        max-width: calc(100% - 24px);
        min-width: min(320px, calc(100% - 24px));
      }
      .fp3d-rack-view-used {
        margin: 0;
        font-size: 14px;
        opacity: 0.8;
      }
      .fp3d-rack-view-box {
        overflow: auto;
        min-height: 0;
      }
      .fp3d-rack-detail {
        display: grid;
        gap: 4px;
        margin: 0 0 8px;
      }
      .fp3d-rack-detail p {
        margin: 0;
        opacity: 0.75;
      }
      .fp3d-rack-led {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 3px;
        margin-right: 6px;
      }
      .fp3d-rack-entity {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        padding: 6px 8px;
        border: 0;
        border-radius: 8px;
        background: var(--fp3d-s-chrome, rgba(255, 255, 255, 0.06));
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-rack-view-box .fp3d-el-gear {
        cursor: pointer;
      }
      .fp3d-rack-view-box svg {
        display: block;
        margin: 0 auto;
        max-width: none;
      }
      .fp3d-sheet header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-size: 16px;
      }
      .fp3d-sheet-x {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        cursor: pointer;
      }
      .fp3d-sheet-choice,
      .fp3d-sheet-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-sheet-chip {
        min-height: 40px;
        padding: 0 14px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 10%, transparent);
        color: inherit;
        font: inherit;
        font-size: 14px;
        cursor: pointer;
      }
      .fp3d-sheet-chip:hover {
        border-color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-sheet-row {
        display: flex;
        gap: 6px;
      }
      .fp3d-sheet-input {
        flex: 1;
        min-width: 0;
        min-height: 38px;
        padding: 0 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(0, 0, 0, 0.18);
        color: inherit;
        font: inherit;
      }
      .fp3d-sheet-lines p,
      .fp3d-set-note {
        margin: 0;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-settings h4 {
        margin: 6px 0 0;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-set-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
      }
      .fp3d-set-field {
        display: grid;
        gap: 4px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-set-field select,
      .fp3d-set-field input,
      .fp3d-set-field textarea {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(0, 0, 0, 0.18);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 6px 8px;
      }
      .fp3d-sheet-gear {
        align-self: flex-start;
        border: 0;
        background: none;
        color: var(--fp3d-muted);
        font: inherit;
        font-size: 13px;
        padding: 4px 0;
        cursor: pointer;
      }
      .fp3d-sheet-gear:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-set-module {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-note {
        position: absolute;
        left: 50%;
        bottom: calc(80px + var(--fp3d-bottom-inset, 0px));
        transform: translateX(-50%);
        max-width: calc(100% - 32px);
        padding: 8px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        color: var(--fp3d-text);
        font-size: 13px;
        box-shadow: var(--fp3d-shadow);
        z-index: 9;
        pointer-events: none;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .fp3d-wall {
        position: absolute;
        inset: 56px 12px calc(var(--fp3d-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: 0 0 28px rgba(55, 224, 255, 0.25);
        overflow: auto;
      }
      .fp3d-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: #e6fbff;
      }
      .fp3d-wall-pro {
        margin: 0;
        color: #ffd75a;
      }
      .fp3d-wall-head .fp3d-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .fp3d-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-wall-tools {
        display: flex;
        gap: 6px;
      }
      .fp3d-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .fp3d-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .fp3d-wall-big > hui-picture-entity-card,
      .fp3d-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-wall-grid {
        flex: 1;
        display: grid;
        align-content: safe center;
        justify-content: center;
        gap: 12px;
        min-height: 0;
        overflow-y: auto;
      }
      .fp3d-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      .fp3d-wall-cam img,
      .fp3d-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .fp3d-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .fp3d-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: #e6fbff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .fp3d-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        /* left: 50% leaves only half the width to shrink into: a width of its own keeps the buttons inside */
        width: min(320px, calc(100% - 60px));
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-live {
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
      .fp3d-through-live > * {
        width: 100%;
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-through-img:fullscreen {
        opacity: 1;
        object-fit: contain;
        background: #000;
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .fp3d-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        /* above the star button */
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      /* Energie Pro: the glass hologram beside the house */
      .fp3d-holo {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        width: 236px;
        padding: 12px 14px 11px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.2) 0%, rgba(70, 140, 230, 0.08) 45%, rgba(20, 60, 140, 0.05) 100%);
        backdrop-filter: blur(7px) saturate(150%);
        -webkit-backdrop-filter: blur(7px) saturate(150%);
        border: 1px solid rgba(160, 240, 255, 0.55);
        box-shadow:
          0 0 28px rgba(55, 224, 255, 0.35),
          0 0 2px rgba(200, 250, 255, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 0 36px rgba(55, 224, 255, 0.14);
        color: #e6fbff;
        font-size: 12px;
        line-height: 1.35;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.55);
        will-change: transform;
        transform-origin: 0 0;
      }
      .fp3d-holo[hidden],
      .fp3d-holo-link[hidden] {
        display: none;
      }
      /* a device's card: smaller than the plant's */
      /* the now-playing card: cover, titles, transport and volume */
      .fp3d-holo-media .fp3d-holo-head {
        cursor: pointer;
      }
      .fp3d-holo-track {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
      }
      .fp3d-holo-cover {
        width: 46px;
        height: 46px;
        border-radius: 8px;
        object-fit: cover;
        flex: none;
        box-shadow: 0 0 12px rgba(55, 224, 255, 0.35);
      }
      .fp3d-holo-cover-none {
        display: grid;
        place-items: center;
        font-size: 22px;
        background: rgba(55, 224, 255, 0.15);
        color: #a8f0ff;
      }
      .fp3d-holo-titles {
        display: grid;
        gap: 2px;
        min-width: 0;
      }
      .fp3d-holo-titles b {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-titles span {
        font-size: 12px;
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-media-controls {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-holo-media-controls button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.4);
        background: rgba(8, 16, 34, 0.6);
        color: var(--fp3d-text);
        cursor: pointer;
        font-size: 12px;
      }
      .fp3d-holo-media-controls button:disabled {
        opacity: 0.3;
        cursor: default;
      }
      .fp3d-holo-media-controls input[type="range"] {
        width: 70px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-holo-car-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;
      }
      .fp3d-holo-car-main b {
        font-size: 22px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-car-main span {
        font-size: 12px;
        opacity: 0.85;
      }
      .fp3d-holo-car-bar {
        height: 5px;
        margin-top: 6px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.15);
        overflow: hidden;
      }
      .fp3d-holo-car-bar i {
        display: block;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 0 8px currentColor;
      }
      .fp3d-holo-meters {
        display: flex;
        flex-wrap: wrap;
        gap: 2px 10px;
      }
      .fp3d-holo-mrow {
        display: grid;
        grid-template-columns: 50px 64px 1fr;
        align-items: center;
        gap: 6px;
        margin-top: 5px;
        font-size: 12px;
      }
      .fp3d-holo-mrow span {
        opacity: 0.8;
      }
      .fp3d-holo-mrow b {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-mrow i {
        position: relative;
        height: 4px;
        border-radius: 2px;
        /* red – yellow – green (the ideal range in the middle) – yellow – red */
        background: linear-gradient(90deg, rgba(255, 77, 64, 0.35), rgba(255, 204, 64, 0.35) 25%, rgba(77, 255, 128, 0.45) 40%, rgba(77, 255, 128, 0.45) 60%, rgba(255, 204, 64, 0.35) 75%, rgba(255, 77, 64, 0.35));
      }
      .fp3d-holo-mrow-none {
        visibility: hidden;
      }
      .fp3d-holo-mrow em {
        position: absolute;
        top: -2px;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-mline {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.85;
      }
      /* a module's richer card: a state line, a second big value, a chain, cells, a hint */
      .fp3d-holo.fp3d-holo-mod-wide {
        width: 236px;
        /* a denser card: darker glass, so its many small values stay readable over a bright room */
        background: linear-gradient(140deg, rgba(40, 80, 130, 0.62) 0%, rgba(12, 28, 58, 0.78) 55%, rgba(8, 18, 40, 0.82) 100%);
      }
      .fp3d-holo-mod-wide .fp3d-holo-mrow {
        grid-template-columns: 74px 78px 1fr;
      }
      .fp3d-holo-ping {
        box-shadow:
          0 0 0 2px var(--fp3d-accent, #37e0ff),
          0 0 26px rgba(55, 224, 255, 0.55);
      }
      .fp3d-holo-status {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
        padding: 4px 8px;
        border-radius: 9px;
        font-size: 13.5px;
        color: var(--st, #37e0ff);
        background: color-mix(in srgb, var(--st, #37e0ff) 14%, transparent);
        border: 1px solid color-mix(in srgb, var(--st, #37e0ff) 45%, transparent);
      }
      .fp3d-holo-status i {
        font-style: normal;
      }
      .fp3d-holo-status span {
        margin-left: auto;
        font-size: 11px;
        color: inherit;
        opacity: 0.8;
        white-space: nowrap;
      }
      .fp3d-holo-mod-main em {
        margin-left: auto;
        display: grid;
        justify-items: end;
        font-style: normal;
        line-height: 1.1;
      }
      .fp3d-holo-mod-main em b {
        font-size: 18px;
      }
      .fp3d-holo-mod-main em small {
        font-size: 10.5px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .fp3d-holo-chain {
        display: flex;
        align-items: stretch;
        gap: 3px;
        margin-top: 7px;
      }
      .fp3d-holo-chain > div,
      .fp3d-holo-cells > div {
        flex: 1;
        min-width: 0;
        display: grid;
        padding: 3px 5px;
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(160, 240, 255, 0.16);
      }
      .fp3d-holo-chain small,
      .fp3d-holo-cells small {
        font-size: 10px;
        opacity: 0.75;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-holo-chain b,
      .fp3d-holo-cells b {
        font-size: 12.5px;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-chain s {
        align-self: center;
        text-decoration: none;
        opacity: 0.6;
        font-size: 11px;
      }
      .fp3d-holo-chain-note {
        margin-top: 3px;
        font-size: 11px;
        text-align: right;
        opacity: 0.9;
      }
      .fp3d-holo-cells {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
        margin-top: 7px;
      }
      .fp3d-holo-hint {
        margin-top: 6px;
        padding: 4px 7px;
        border-radius: 7px;
        font-size: 11.5px;
        color: var(--hint, #ffc04d);
        background: color-mix(in srgb, var(--hint, #ffc04d) 13%, transparent);
        border-left: 3px solid var(--hint, #ffc04d);
      }
      .fp3d-holo-mrow-fill {
        background: rgba(160, 240, 255, 0.14) !important;
        overflow: hidden;
      }
      .fp3d-holo-mrow-fill s {
        display: block;
        height: 100%;
        border-radius: 2px;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-spark-label {
        margin-top: 6px;
        font-size: 10.5px;
        opacity: 0.7;
      }
      .fp3d-holo-spark-label + .fp3d-holo-spark {
        margin-top: 1px;
      }
      .fp3d-holo-spark {
        display: block;
        width: 100%;
        height: 22px;
        margin-top: 6px;
      }
      .fp3d-holo-spark polyline {
        fill: none;
        stroke-width: 1.6;
        vector-effect: non-scaling-stroke;
        stroke-linejoin: round;
      }
      /* a module's chips (Pool Pro: ball valves and the six-way valve, set by hand) */
      .fp3d-holo-chips {
        display: grid;
        gap: 4px;
        margin-top: 4px;
        max-height: 220px;
        overflow-y: auto;
        pointer-events: auto;
      }
      .fp3d-holo-chip,
      .fp3d-holo-chip-row button {
        font: inherit;
        font-size: 11.5px;
        color: inherit;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(91, 124, 255, 0.35);
        border-radius: 8px;
        padding: 4px 8px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-holo-chip {
        display: grid;
        grid-template-columns: 14px 1fr auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-holo-chip i {
        font-style: normal;
        color: #ff6b5a;
      }
      .fp3d-holo-chip.fp3d-holo-on i {
        color: #4dff9a;
      }
      .fp3d-holo-chip small {
        opacity: 0.75;
      }
      .fp3d-holo-valve-pos {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-holo-on {
        border-color: var(--fp3d-accent) !important;
        color: var(--fp3d-accent) !important;
      }
      .fp3d-holo-vol {
        font-size: 11px;
        opacity: 0.8;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-dev {
        width: 184px;
        padding: 10px 12px 9px;
      }
      /* racks (#120): one row per value (name and device left, value right, the sparkline below) */
      .fp3d-holo-rack {
        cursor: pointer;
      }
      .fp3d-holo-rack:not(.fp3d-holo-min) {
        width: 268px;
      }
      .fp3d-rack-card-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
        margin-top: 7px;
      }
      .fp3d-rack-card-row {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: baseline;
        column-gap: 4px;
        min-width: 0;
        padding: 3px 5px 2px;
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(160, 240, 255, 0.16);
        font-size: 11px;
        color: #aee9ff;
      }
      .fp3d-rack-card-row span {
        display: grid;
        min-width: 0;
      }
      .fp3d-rack-card-row small {
        font-size: 10px;
        opacity: 0.7;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rack-card-row b {
        color: #fff;
        font-size: 12.5px;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-rack-card-row .fp3d-holo-spark {
        grid-column: 1 / -1;
        height: 16px;
        margin-top: 2px;
      }
      /* tablet level: no blur and no sheen, the glass is painted */
      .fp3d-holo-plain {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgba(12, 26, 50, 0.9);
      }
      .fp3d-holo-plain .fp3d-holo-sheen,
      .fp3d-holo-plain .fp3d-holo-scan {
        display: none;
      }
      /* Day (#86): the cyan glass vanished on the pale sky; the cards become dark glass with a deep cyan rim */
      :host([light]) .fp3d-holo:not(.fp3d-holo-bin) {
        background: linear-gradient(140deg, rgba(22, 58, 100, 0.9) 0%, rgba(12, 34, 70, 0.92) 55%, rgba(8, 24, 52, 0.94) 100%);
        border-color: rgba(11, 122, 153, 0.85);
        box-shadow:
          0 6px 22px rgba(20, 40, 80, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.25);
        text-shadow: none;
      }
      :host([light]) .fp3d-holo-link line {
        stroke: rgba(11, 122, 153, 0.9);
        filter: none;
      }
      :host([light]) .fp3d-holo-link circle {
        fill: #ffffff;
        stroke: #0b7a99;
        filter: none;
      }
      /* the thin line from the solar field up to the card, with a dot on the field */
      .fp3d-holo-link {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        pointer-events: none;
        overflow: visible;
      }
      .fp3d-holo-link line {
        stroke: rgba(160, 240, 255, 0.75);
        stroke-width: 1.2;
        filter: drop-shadow(0 0 3px rgba(55, 224, 255, 0.8));
      }
      .fp3d-holo-link circle {
        fill: #cffaff;
        stroke: rgba(55, 224, 255, 0.8);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px rgba(55, 224, 255, 0.9));
      }
      .fp3d-holo-min {
        width: 150px;
      }
      .fp3d-holo-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0.07) 100%);
        pointer-events: none;
      }
      .fp3d-holo-scan {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(160, 240, 255, 0.06) 0 1px, transparent 1px 4px);
        pointer-events: none;
      }
      .fp3d-holo-body {
        position: relative;
      }
      .fp3d-holo-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: #8ff0ff;
        text-transform: uppercase;
      }
      .fp3d-holo-live {
        color: #5dffb0;
      }
      .fp3d-holo-big {
        display: flex;
        align-items: baseline;
        gap: 9px;
        margin: 6px 0 1px;
      }
      .fp3d-holo-big b {
        font-size: 26px;
        color: #ffe27a;
        text-shadow: 0 0 12px rgba(255, 210, 80, 0.85);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-big span,
      .fp3d-holo-sub {
        color: #aee9ff;
      }
      .fp3d-holo-sub {
        margin-bottom: 6px;
      }
      .fp3d-holo-plants {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        column-gap: 10px;
        margin: 0 0 5px;
        font-size: 11px;
        color: #aee9ff;
      }
      .fp3d-holo-plants b {
        color: #ffe27a;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-sub b,
      .fp3d-holo-cell b,
      .fp3d-holo-foot b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-curve {
        display: block;
        margin-bottom: 7px;
        filter: drop-shadow(0 0 4px rgba(255, 215, 90, 0.7));
      }
      .fp3d-holo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-holo-cell {
        border-left: 2px solid #aee9ff;
        padding-left: 6px;
      }
      .fp3d-holo-cell span {
        font-size: 11px;
      }
      .fp3d-holo-bat {
        border-left-color: #5dffb0;
      }
      .fp3d-holo-bat span {
        color: #5dffb0;
      }
      .fp3d-holo-exp {
        border-left-color: #4ff6ff;
      }
      .fp3d-holo-exp span {
        color: #4ff6ff;
      }
      .fp3d-holo-imp {
        border-left-color: #ff6fb0;
      }
      .fp3d-holo-imp span {
        color: #ff8fc4;
      }
      .fp3d-holo-house {
        border-left-color: #a9c0ff;
      }
      .fp3d-holo-wb {
        border-left-color: #63c9ff;
      }
      .fp3d-holo-bar {
        margin-top: 8px;
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.16);
        overflow: hidden;
      }
      .fp3d-holo-bar div {
        height: 100%;
        background: linear-gradient(90deg, #5dffb0, #4ff6ff);
        box-shadow: 0 0 8px rgba(80, 240, 255, 0.8);
      }
      .fp3d-holo-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
        font-size: 10px;
        color: #aee9ff;
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      /* a value tile grows when hovered, focused or tapped, so it reads without zooming in (#90) */
      .fp3d-energy-tile {
        position: relative;
        pointer-events: auto;
        cursor: zoom-in;
        transform-origin: top left;
        transition: transform 160ms ease-out;
      }
      .fp3d-energy-big {
        transform: scale(1.5);
        z-index: 2;
        cursor: zoom-out;
      }
      .fp3d-energy-tile:focus-visible {
        transform: scale(1.5);
        z-index: 2;
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      @media (hover: hover) {
        .fp3d-energy-tile:hover {
          transform: scale(1.5);
          z-index: 2;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-energy-tile {
          transition: none;
        }
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      .fp3d-energy-cheap {
        border-left-color: #3ccf8e;
        background: color-mix(in srgb, #3ccf8e 22%, var(--fp3d-chrome));
      }
      /* the energy cables' ends (#29): a small dot; hovered, focused or tapped it tells today's kWh */
      .fp3d-wire {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 3;
        width: 14px;
        height: 14px;
        padding: 0;
        border: 2px solid rgba(255, 255, 255, 0.85);
        border-radius: 50%;
        background: #7fe8ff;
        box-shadow: 0 0 6px rgba(127, 232, 255, 0.8);
        cursor: pointer;
      }
      .fp3d-wire[hidden] {
        display: none;
      }
      .fp3d-wire::before {
        /* a larger target for fingers */
        content: "";
        position: absolute;
        inset: -10px;
      }
      .fp3d-wire-tip {
        position: absolute;
        left: 50%;
        bottom: calc(100% + 6px);
        transform: translateX(-50%);
        display: none;
        padding: 5px 9px;
        border-radius: 9px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        color: inherit;
        font: inherit;
        font-size: 12px;
        line-height: 1.3;
        white-space: nowrap;
        text-align: left;
        pointer-events: none;
      }
      .fp3d-wire-tip span {
        display: block;
        opacity: 0.85;
      }
      .fp3d-wire:hover .fp3d-wire-tip,
      .fp3d-wire:focus-visible .fp3d-wire-tip,
      .fp3d-wire-open .fp3d-wire-tip {
        display: block;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        /* the scrolling row would clip a scaled tile: there the enlarged tile gets bigger text instead (#90) */
        .fp3d-energy .fp3d-energy-tile {
          transform: none;
        }
        .fp3d-energy-big span {
          font-size: 13px;
        }
        .fp3d-energy-big b {
          font-size: 22px;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* the view's own controls on the right (#285); the room panel opens there, so they make way for it */
      .fp3d-side-right :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        left: auto;
        right: 12px;
      }
      .fp3d-side-right .fp3d-eye {
        left: auto;
        right: 56px;
      }
      .fp3d-side-right.fp3d-panel-open :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        display: none;
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-name:empty {
        display: none;
      }
      .fp3d-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--fp3d-text);
        /* a notch more solid so names read over bright neon edges (#88) */
        background: rgba(10, 16, 32, 0.88);
        pointer-events: none;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
      /* phones (#93): Walk as a 44 px symbol that stays above the energy cards; 44 px touch targets */
      @media ${Xe(Oo)} {
        .fp3d-walk-btn {
          z-index: 5;
          width: 44px;
          height: 44px;
          padding: 0;
          justify-content: center;
        }
        .fp3d-walk-label {
          display: none;
        }
        .fp3d-thumbs-fold,
        .fp3d-find-btn,
        .fp3d-central-btn,
        .fp3d-eye {
          width: 44px;
          height: 44px;
        }
        .fp3d-eye {
          left: 62px;
        }
        .fp3d-central-btn {
          bottom: calc(62px + var(--fp3d-bottom-inset, 0px));
        }
        .fp3d-thumbs-compact .fp3d-thumb,
        .fp3d-thumb-house {
          min-height: 44px;
        }
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",fa);function Kg(o,e){let t=e.attributes.current_temperature,n=typeof t=="number"&&Number.isFinite(t)?`${ie(o,Math.round(t))} \xB0C`:"",r=!["off","unavailable","unknown"].includes(e.state);return{text:[ue(o,e),n].filter(Boolean).join(" \xB7 "),on:r}}function ce(o,e){return Math.abs(e)>=1e3?`${ie(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function Wp(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var Gg=new Set(["rug","stairwell","grid_point","worktop"]);function Yg(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var Np=wn(class extends _t{constructor(o){if(super(o),o.type!==je.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let t=o.element.classList;for(let n of this.st)n in e||(t.remove(n),this.st.delete(n));for(let n in e){let r=!!e[n];r===this.st.has(n)||this.nt?.has(n)||(r?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Ee}});var Vp=["show","new","sample","rename","duplicate","delete"];function Qg(o,e,t){return Vp.filter(n=>(n!=="show"||t!=null&&t!==e)&&(n!=="delete"||o.length>1))}function Jg(o,e,t){let n=o.find(r=>r.id===t);return n?{name:n.name,onDisplays:n.id===e}:null}function Bp(o,e,t){return o.id===e?`${o.name} \xB7 ${t("home_active_badge")}`:o.name}function Xg(o,e,t,n){return[...o.map(r=>({value:r.id,label:Bp(r,e,n),kind:"home"})),{value:"",label:"",kind:"sep"},...Qg(o,e,t).map(r=>({value:r,label:n(`home_${r}`),kind:"action"}))]}function Zg(o,e,t){let{open:n,cursor:r}=o,i=e.map((a,l)=>a.kind==="sep"?-1:l).filter(a=>a>=0),s=a=>i[Math.max(0,Math.min(i.length-1,i.indexOf(r)+a))]??r;return n?t==="ArrowDown"?{open:n,cursor:s(1)}:t==="ArrowUp"?{open:n,cursor:s(-1)}:t==="Home"?{open:n,cursor:i[0]??r}:t==="End"?{open:n,cursor:i[i.length-1]??r}:t==="Enter"||t===" "?e[r]&&e[r].kind!=="sep"?{open:!1,cursor:r,pick:e[r].value}:{open:!1,cursor:r}:t==="Escape"||t==="Tab"?{open:!1,cursor:r}:null:["ArrowDown","ArrowUp","Enter"," "].includes(t)?{open:!0,cursor:r}:null}var ma=class extends xe{static properties={hass:{attribute:!1},home:{attribute:!1},_homes:{state:!0},_active:{state:!0},_open:{state:!0},_cursor:{state:!0}};loaded=!1;blurTimer;constructor(){super(),this.home=null,this._homes=null,this._active=null,this._open=!1,this._cursor=0}t(e,t){return M(this.hass,e,t)}willUpdate(e){this.hass&&(!this.loaded||e.has("home")&&e.get("home")!=null)&&(this.loaded=!0,ul(this.hass).then(t=>this.listed(t),()=>this._homes=null))}listed(e){this._homes=e.homes,this._active=e.active??null}rows(){return this._homes?Xg(this._homes,this._active,this.home,e=>this.t(e)):[]}openMenu(){clearTimeout(this.blurTimer),this._cursor=Math.max(0,this.rows().findIndex(e=>e.value===this.home)),this._open=!0}onKey(e){if(!this._open&&["ArrowDown","ArrowUp","Enter"," "].includes(e.key)){e.preventDefault(),this.openMenu();return}let t=Zg({open:this._open,cursor:this._cursor},this.rows(),e.key);t&&(e.key!=="Tab"&&e.preventDefault(),this._open=t.open,this._cursor=t.cursor,t.pick!==void 0&&this.pick(t.pick))}updated(e){this._open&&e.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}async run(e){try{let t=await e();return this.listed(t),t}catch(t){return await ni(this.t("home_failed",{error:String(t?.message??t)}),{ok:this.t("ask_ok")}),null}}open(e){this.dispatchEvent(new CustomEvent("home-open",{detail:{home:e},bubbles:!0,composed:!0}))}async act(e){let t=this._homes?.find(r=>r.id===this.home),n=r=>xc(this.t("home_name_prompt"),r,{ok:this.t("ask_ok"),cancel:this.t("cancel")});if(e==="new"){let r=await n(this.t("home_new_name")),i=r?await this.run(()=>pl(this.hass,r)):null;i&&this.open(i.home.id)}else if(e==="sample"){let r=await this.run(()=>Lo(this.hass));r&&this.open(r.home.id)}else if(t)if(e==="show")await this.run(()=>gl(this.hass,t.id))&&this.open(null);else if(e==="rename"){let r=await n(t.name);r&&r!==t.name&&await this.run(()=>hl(this.hass,t.id,r))}else if(e==="duplicate"){let r=await n(this.t("home_copy_name",{name:t.name})),i=r?await this.run(()=>fl(this.hass,t.id,r)):null;i&&this.open(i.home.id)}else await gt(this.t("home_delete_confirm",{name:t.name}),{ok:this.t("delete"),cancel:this.t("cancel"),danger:!0})&&await this.run(()=>ml(this.hass,t.id))&&this.open(null);else return}pick(e){this._open=!1,Vp.includes(e)?this.act(e):e&&e===this.home?this.dispatchEvent(new CustomEvent("home-reload",{detail:{home:e},bubbles:!0,composed:!0})):e&&this.open(e===this._active?null:e)}render(){let e=this._homes;if(!e)return y;let t=Jg(e,this._active,this.home),n=e.find(i=>i.id===this.home),r=i=>this.t(i);return g`${t?g`<span class="chip ${t.onDisplays?"":"off"}" title=${t.onDisplays?this.t("home_active_badge"):this.t("home_not_on_displays")}
            >${t.name}${t.onDisplays?y:g`<small>${this.t("home_not_on_displays")}</small>`}</span
          >`:y}<span class="menu"
        ><button
          class="pick"
          aria-haspopup="listbox"
          aria-expanded=${this._open}
          aria-label=${this.t("home")}
          title=${this.t("home")}
          @click=${()=>this._open?this._open=!1:this.openMenu()}
          @keydown=${i=>this.onKey(i)}
          @blur=${()=>this.blurTimer=setTimeout(()=>this._open=!1,150)}
        >
          ${n?Bp(n,this._active,r):this.t("home")}<span class="caret" aria-hidden="true">▾</span></button
        >${this._open?g`<ul role="listbox" aria-label=${this.t("home")} @mousedown=${i=>i.preventDefault()}>
              ${this.rows().map((i,s)=>i.kind==="sep"?g`<li role="separator" class="sep"></li>`:g`<li
                      role="option"
                      aria-selected=${i.value===this.home}
                      class=${Np({cursor:s===this._cursor,action:i.kind==="action",chosen:i.value===this.home})}
                      @mouseenter=${()=>this._cursor=s}
                      @click=${()=>this.pick(i.value)}
                    >
                      ${i.label}
                    </li>`)}
            </ul>`:y}</span
      >`}static styles=Me`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }
    .chip {
      display: inline-flex;
      align-items: baseline;
      gap: 6px;
      padding: 3px 10px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 16em;
      font-weight: 600;
    }
    .chip.off {
      background: rgba(255, 170, 0, 0.18);
      border-color: rgba(255, 170, 0, 0.6);
    }
    .chip small {
      font-weight: 400;
      opacity: 0.85;
    }
    .menu {
      position: relative;
      display: inline-block;
      min-width: 0;
    }
    .pick {
      font: inherit;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      border-radius: 8px;
      padding: 4px 6px;
      max-width: 14em;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
    }
    .pick:focus-visible {
      outline: 2px solid var(--fp3d-accent, #03a9f4);
      outline-offset: 1px;
    }
    .caret {
      margin-left: 6px;
      opacity: 0.7;
    }
    ul {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 60;
      min-width: 100%;
      max-width: 22em;
      max-height: 60vh;
      overflow-y: auto;
      margin: 0;
      padding: 4px;
      list-style: none;
      color: var(--primary-text-color, #111);
      background: var(--card-background-color, #fff);
      border: 1px solid var(--fp3d-line, rgba(127, 127, 127, 0.4));
      border-radius: 10px;
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
    }
    li {
      padding: 6px 10px;
      border-radius: 6px;
      cursor: pointer;
      white-space: nowrap;
    }
    li.cursor {
      background: color-mix(in srgb, var(--fp3d-accent, #03a9f4) 22%, transparent);
    }
    li.chosen {
      font-weight: 600;
    }
    li.sep {
      height: 1px;
      padding: 0;
      margin: 4px 6px;
      background: var(--fp3d-line, rgba(127, 127, 127, 0.4));
      cursor: default;
    }
  `};customElements.get("fp3d-home-switcher")||customElements.define("fp3d-home-switcher",ma);var Up=Ne("home-3d-locate",()=>"8eae6ec12878");var e_=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function qp(o){let e=document.createElement("style");e.textContent=e_;let t=document.createElement("div");t.className="fp3d-loclab",document.body.append(e,t);let n=null,r="",i=!0,s=async(c,d={})=>{let u=o().hass;if(u){try{n=await u.callWS({type:"home_3d/locate/rec",action:c,...d}),r=""}catch(p){r=p.message??String(p)}a()}},a=()=>{let c=o().building,d=n,u=d?.mark?.room??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Ortung \xB7 Aufnahme (Labor)</span><span>${i?"\u25BE":"\u25B8"}</span></h4>`;if(!i){t.innerHTML=p;return}let h=(d?.devices??[]).map(b=>{let m=b.t?Math.round(Date.now()/1e3-b.t):null;return`<div>\u231A ${It(b.title)}: ${m===null?"<small>noch nicht geh\xF6rt</small>":`${b.rssi} dBm \xB7 ${It(b.scanner??"")} <small>vor ${m} s</small>`}</div>`}).join(""),_=(c?.floors??[]).map(b=>`<div class="fl">${It(b.name)}</div>`+b.rooms.map(m=>`<button data-room="${It(m.id)}" data-name="${It(m.name)}" class="${u===m.id?"on":""}">${It(m.name)}</button>`).join("")).join("");t.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Ortung einrichten</button></div>
      <div>${d?.running?`<button class="rec" data-a="stop">\u25A0 Stopp</button> <small>${Math.floor(d.seconds/60)}:${String(d.seconds%60).padStart(2,"0")} \xB7 ${d.lines} Zeilen</small>`:'<button data-a="start">\u25CF Aufnahme starten</button>'}</div>
      ${r?`<div style="color:#ff8fa3">${It(r)}</div>`:""}
      ${h||(d?"<div><small>Keine iPhone/Watch-Schl\xFCssel (Private BLE Device) in HA \u2013 alles wird trotzdem aufgezeichnet.</small></div>":"")}
      ${d?.mark?`<div style="margin-top:6px">\u23F1 seit <b>${t_(Date.now()/1e3-d.mark.t)}</b> in <b>${It(d.mark.name)}</b> ${Date.now()/1e3-d.mark.t>=120?"\u2713 2 Min. geschafft":""}</div>`:""}
      <div class="fl">Ich bin jetzt in \u2026</div>
      <button data-room="" class="${u?"":"on"}">\u{1F6B6} unterwegs / nirgends</button>
      ${_}`};t.addEventListener("click",c=>{let d=c.target.closest("button,h4");if(!d)return;let u=d.dataset.a;if(u==="toggle")i=!i,a();else if(u==="start")s("start",{note:"lab walk"});else if(u==="stop")s("stop");else if(u==="setup"){let{hass:p,building:h}=o();p&&h&&Up().then(_=>_.openLocateSetup(p,h,()=>o().hass))}else d.dataset.room!==void 0&&s("mark",d.dataset.room?{room:d.dataset.room,name:d.dataset.name}:{room:null})}),s("status");let l=window.setInterval(()=>{s("status")},1e3);return()=>{window.clearInterval(l),t.remove(),e.remove()}}function t_(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function It(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var n_=Ne("home-3d-timetravel",()=>"03cd9c754d08"),Rn=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),n_().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("Home 3D: time travel failed to load",t),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};function Gi(o,e,t=new Date){if(!o||o==="off")return!1;if(o==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let r=Number(n[1])*60+Number(n[2]),i=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return r<=i?s>=r&&s<i:s>=r||s<i}var o_=new Set(["0","off","false","no"]);function jp(o,e,t){let n=new URLSearchParams(o).get("tablet");return n!==null?!o_.has(n.trim().toLowerCase()):!!e&&!!t?.includes(e)}var i_=120;function Kp(o,e){let t=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0,n=new URLSearchParams(o).get("idle"),r=n!==null&&n.trim()!==""?Number(n):null;return t(r)?r:t(e)?e:i_}var Ki=class{timer;seconds=0;onIdle;constructor(e){this.onIdle=e}arm(e){this.seconds=e>0?e:0,this.touch()}touch(){clearTimeout(this.timer),this.timer=this.seconds>0?setTimeout(this.onIdle,this.seconds*1e3):void 0}stop(){clearTimeout(this.timer),this.timer=void 0}};var Yi=class{past=[];future=[];home=void 0;doc=null;run=null;now;constructor(e={}){this.now=e.now??Date.now}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}adopt(e,t){let n=t===this.home&&e===this.doc;return n||this.clear(),this.home=t,this.doc=e,n}record(e,t,n,r=null){this.adopt(e,n),this.push(e,r),this.track(t)}track(e){this.doc=e}push(e,t=null,n=500){let r=this.now(),i=t!==null&&this.run?.key===t&&r-this.run.at<=n&&this.past.length>0;this.run=t===null?null:{key:t,at:r},this.future=[],!i&&(this.past.push(JSON.stringify(e)),this.past.length>100&&this.past.shift())}undo(e){let t=this.past.pop();return t?(this.run=null,this.future.push(JSON.stringify(e)),this.doc=JSON.parse(t)):null}redo(e){let t=this.future.pop();return t?(this.run=null,this.past.push(JSON.stringify(e)),this.doc=JSON.parse(t)):null}clear(){this.past=[],this.future=[],this.run=null}};var sn={solar:3600,batteryCharge:1200,house:2e3},Pt={soc:72,room:20.5,target:21,tariff:.245,car:78},me=o=>!!o&&o!=="none"&&o.includes("."),r_=o=>o.slice(0,o.indexOf(".")),s_=[[/hob|oven|cooker|kettle/,1500],[/wallbox|charger|zappi/,1400],[/washing|washer|dishwasher/,450],[/fridge|freezer|kitchen_tall/,110],[/tv|monitor|screen/,95],[/pc|computer|desk/,120],[/boiler|heat_pump/,90],[/router|network/,15]],Qp=o=>s_.find(([e])=>e.test(o))?.[1]??60,a_={device_class:"power",unit_of_measurement:"W",state_class:"measurement"},ga={device_class:"battery",unit_of_measurement:"%"},Jp={device_class:"temperature",unit_of_measurement:"\xB0C"};function l_(o){let e=o.slice(o.indexOf(".")+1).replace(/_/g," ");return e.charAt(0).toUpperCase()+e.slice(1)}var _a=class{out=new Map;lights=0;media=0;put(e,t,n={}){this.out.has(e)||this.out.set(e,{entity_id:e,state:String(t),attributes:{friendly_name:l_(e),...n}})}watts(e,t){this.put(e,Math.round(t),a_)}main(e,t){let n=t??"";switch(r_(e)){case"light":{let r=this.lights++%3!==2;this.put(e,r?"on":"off",{supported_color_modes:["color_temp"],...r?{brightness:200,color_mode:"color_temp",color_temp_kelvin:2700}:{}});return}case"climate":case"water_heater":this.put(e,"heat",{hvac_modes:["off","heat"],hvac_action:"heating",current_temperature:Pt.room,temperature:Pt.target,min_temp:5,max_temp:30});return;case"media_player":{let r=/tv/.test(n),i=r||this.media++===0;this.put(e,i?"playing":"idle",{device_class:r?"tv":"speaker",...i?{media_title:"Demo",volume_level:.3}:{}});return}case"switch":case"input_boolean":case"fan":this.put(e,"on");return;case"binary_sensor":this.put(e,"off",/smoke/.test(n)?{device_class:"smoke"}:/water|leak/.test(n)?{device_class:"moisture"}:{});return;case"cover":this.put(e,"open",{current_position:100});return;case"lock":this.put(e,"locked");return;case"camera":this.put(e,"idle");return;case"vacuum":this.put(e,"docked");return;case"sensor":this.sensor(e,n);return}}sensor(e,t){/power|_w$/.test(e)?this.watts(e,Qp(t||e)):/temp/.test(e)||t&&fn(t)?this.put(e,Pt.room,Jp):/humid/.test(e)?this.put(e,50,{device_class:"humidity",unit_of_measurement:"%"}):/battery|soc|level/.test(e)||/car|leaf|vehicle/.test(t)?this.put(e,Pt.car,ga):this.put(e,"ok")}energy(e,t,n){let r=oe(e.type);r==="meter"?me(e.export)?(this.watts(e.export,Math.max(0,-t.grid)),me(e.power)&&this.watts(e.power,Math.max(0,t.grid))):me(e.power)&&this.watts(e.power,n.energy.grid_invert?-t.grid:t.grid):r==="inverter"||r==="solar"?me(e.power)&&this.watts(e.power,t.solar):r==="home_battery"&&(me(e.charge)?(this.watts(e.charge,-t.battery),me(e.power)&&this.watts(e.power,0)):me(e.power)&&this.watts(e.power,n.energy.battery_invert?-t.battery:t.battery))}},Gp=new WeakMap;function c_(o){let e=Gp.get(o);if(e)return e;let t=new _a,n=o.energy,r=o.floors.flatMap(u=>u.furniture),s=me(n.battery)||r.some(u=>oe(u.type)==="home_battery"&&(me(u.power)||me(u.charge)))?-sn.batteryCharge:0,a=sn.house-sn.solar-s;me(n.grid)&&t.watts(n.grid,n.grid_invert?-a:a),me(n.solar)&&t.watts(n.solar,sn.solar),me(n.battery)&&t.watts(n.battery,n.battery_invert?-s:s),me(n.battery_soc)&&t.put(n.battery_soc,Pt.soc,ga),me(n.consumption)&&t.watts(n.consumption,sn.house),me(n.tariff)&&t.put(n.tariff,Pt.tariff,{unit_of_measurement:"GBP/kWh"});let l=r.filter(u=>(oe(u.type)==="inverter"||oe(u.type)==="solar")&&me(u.power)).length;for(let u of r)t.energy(u,{grid:a,battery:s,solar:sn.solar/Math.max(1,l)},o);let c=(o.settings.roof?.solar??[]).filter(u=>me(u.entity)),d=c.reduce((u,p)=>u+ho(p),0)||1;for(let u of c)t.watts(u.entity,sn.solar*ho(u)/d);for(let u of r){me(u.entity)&&t.main(u.entity,u.type),me(u.power)&&t.watts(u.power,Qp(u.type));for(let p of[u.state_entity,u.state_entity2,u.extra])me(p)&&t.main(p,u.type);me(u.heat_sensor)&&t.put(u.heat_sensor,"on",{device_class:"heat"}),me(u.soc)&&t.put(u.soc,Pt.soc,ga),me(u.room_sensor)&&t.put(u.room_sensor,Pt.room,Jp)}for(let u of o.floors)for(let p of u.placements)me(p.entity_id)&&t.main(p.entity_id,null);return Gp.set(o,t.out),t.out}var Yp=new WeakMap,ba=new WeakMap;function d_(o,e){let t=ba.get(o);return!!t&&o.states[e]===t.get(e)}function Xp(o){return!!o&&ba.has(o)}function Qi(o,e){if(!e?.settings?.demo)return o;let t=Yp.get(o);if(t?.building===e)return t.out;let n=c_(e),r=o.states;for(let[s,a]of n){let l=o.states[s];l&&l.state!=="unavailable"&&l.state!=="unknown"||(r===o.states&&(r={...o.states}),r[s]=a)}let i=o;return r!==o.states&&(i={...o,states:r},i.callService=(s,a,l)=>u_(i,l)?Promise.resolve(void 0):o.callService(s,a,l),ba.set(i,n)),Yp.set(o,{building:e,out:i}),i}function u_(o,e){let t=e?.entity_id,n=typeof t=="string"?[t]:Array.isArray(t)?t.filter(r=>typeof r=="string"):[];return n.length>0&&n.every(r=>d_(o,r))}var p_={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},h_=["pointerdown","keydown","wheel"],J={get(o){try{return localStorage.getItem(`home3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`home3d.${o}`,e)}catch{}}},wa=class extends xe{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_editorError:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_plan2d:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0},_tablet:{state:!0}};data=new gn(this);undoHistory=new Yi;locateLab=null;tt=new Rn(this);ttLinked=!1;idle=new Ki(()=>this.returnHome());onTouch=()=>this.idle.touch();idleSeconds=0;touchesHeard=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._editorError=null,this._floorId=null,this._roomId=null,this._wallMode=J.get("walls")==="cut"?"cut":"auto",this._explode=J.get("explode")!=="0";let e=new URLSearchParams(location.search).get("view");this._plan2d=e==="2d"||e!=="3d"&&J.get("plan2d")==="1",this._keepRoof=J.get("roof")==="1";let t=J.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=J.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let n=J.get("markers");this._markers=n==="none"||n==="all"||n==="room"?n:"important";let r=J.get("pinSize");this._pinSize=r==="small"||r==="large"?r:"normal";let i=J.get("heat");this._heat=i==="temperature"||i==="humidity"||i==="co2"||i==="values"?i:"none",this._theme=Tn(J.get("theme"));let s=J.get("clock");this._clock=s==="tl"||s==="tr"||s==="bl"||s==="br"?s:"off";let a=J.get("accent");this._accent=a&&/^#[0-9a-f]{6}$/i.test(a)?a:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let l=J.get("floor_stack");this._floorStack=l==="stacked"||l==="single"?l:"dim",this._roomNames=J.get("room_names")!=="0",this._controlsRight=J.get("controls")==="right",this._keepView=J.get("keep_view")==="1",this._angleLock=J.get("angle_lock")==="1",this._trail=J.get("trail")==="1",this._cameraWall=!1,this._clean=J.get("clean")==="1",this._navWrap=J.get("nav_wrap")==="1",this._optsOpen=!1,this._pinHover=!1,this._weather=J.get("weather")!=="0",this._director=ua(),this._micProbe=!1,this._voiceHere=sa(),this._screen=aa(),this._tablet=!1}t(e,t){return M(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)),e.has("hass")&&this.hass&&!yn(this.hass.language)&&oi(this.hass.language).then(()=>this.requestUpdate());let t=this.data.building;this.followTablet(t),t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}followTablet(e){let t=location.search,n=jp(t,this.hass?.user?.id,e?.settings.tablet_users);n&&this._mode!=="view"&&this.setMode("view"),n!==this._tablet&&(this._tablet=n,this._optsOpen=!1);let r=n?Kp(t,e?.settings.tablet_idle):0;(r!==this.idleSeconds||n!==this.touchesHeard)&&(this.listenTouches(n),this.idleSeconds=r,this.idle.arm(r))}listenTouches(e){if(e!==this.touchesHeard){this.touchesHeard=e;for(let t of h_)e?window.addEventListener(t,this.onTouch,{capture:!0,passive:!0}):window.removeEventListener(t,this.onTouch,{capture:!0});e||(this.idle.stop(),this.idleSeconds=0)}}returnHome(){this.tt.stop(),this._roomId=null,this._floorId=null,this._showOpen=!1,this._optsOpen=!1,this._cameraWall=!1,this.view3d()?.resetView()}get canEdit(){return this.data.canEdit}async loadSample(){try{let e=await Lo(this.hass);this.data.setHome(e.home.id)}catch(e){await ni(this.t("home_failed",{error:String(e?.message??e)}),{ok:this.t("ask_ok")})}}setMode(e){e===this._mode||this._tablet&&e!=="view"||(this.tt.stop(),this._editorError=null,this._optsOpen=!1,e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,J.set("walls",e)}setKeepRoof(e){this._keepRoof=e,J.set("roof",e?"1":"0")}setPlan2d(e){this._plan2d=e,J.set("plan2d",e?"1":"0")}setExplode(e){this._explode=e,J.set("explode",e?"1":"0")}setQuality(e){this._quality=e,J.set("quality",e)}editPlan(e,t=null){let n=this.data.building;n&&this.undoHistory.record(n,e,this.data.homeId,t),this.data.edit(e)}editFurniture(e,t,n=null){let r=this.data.building;if(!r)return;let i=structuredClone(r);for(let s of i.floors){let a=s.furniture.find(l=>l.id===e);a&&t(a,s)}this.editPlan(i,n)}editDevice(e,t,n=null){let r=this.data.building;if(!r)return;let i=structuredClone(r);for(let s of i.floors){let a=s.placements.find(l=>l.entity_id===e);a&&t(a,s)}this.editPlan(i,n)}moveDevice(e){let{id:t,x:n,z:r}=e.detail;this.editDevice(t,(i,s)=>{let[a,l]=la(s,i.x,i.z,n,r);Object.assign(i,{x:a,z:l})},`move:${t}`)}turnStep(){return W(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.placements=r.placements.filter(i=>i.entity_id!==e);this.editPlan(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(u=>u.placements.some(p=>p.entity_id===e)),r=n?.placements.find(u=>u.entity_id===e);if(!n||!r)return y;let i=W(e),s=i==="light",a=i==="camera",l=r.mount==="ceiling",c=i?_n(i,n.height,s||a?r.mount??(a?"wall":"ceiling"):null):1,d=(u,p,h,_,b,m)=>g`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${_}
          max=${b}
          .value=${String(Math.round(p*100)/100)}
          @change=${v=>{let w=parseFloat(v.target.value.replace(",","."));Number.isFinite(w)&&m(Math.min(b,Math.max(_,w)))}}
        />
      </label>`;return g`${s?g`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>g`<option value=${u} ?selected=${u===(r.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:y}
      ${a?g`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),r.fov??(l?360:90),5,10,360,u=>this.editDevice(e,p=>p.fov=u))}
            ${d(this.t("camera_reach_short"),r.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,p=>p.reach=u))}
            ${d(this.t("camera_tilt_short"),r.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,p=>p.tilt=u))}`:y}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((r.y??c)*100)/100)}
          @change=${u=>{let p=parseFloat(u.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,h=>h.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${r.y!==null?g`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:y}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?le(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:r}=e.detail,i=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=la(a,s.x,s.z,n,r);Object.assign(s,{x:l,z:c});let d=xp(a,s,i);d&&Object.assign(s,d)},`move:${t}`)}renderSizeFields(e){let t=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!t)return y;let n=Ca(this.hass,this.data.building?.settings.units)==="imperial",r=l=>n?za(l):String(Math.round(l*100)/100),i=l=>n?Oa(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,c)=>g`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${c}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${r(t[l])}
        @change=${d=>{let u=i(d.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,p=>p[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(c=>c.id===e));return g`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&Nl(t)?g`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${r(t.mount_y??de(a,t))}
              @change=${l=>{let c=i(l.target.value)??NaN;Number.isFinite(c)&&c>=0&&this.editFurniture(e,d=>d.mount_y=Math.round(c*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?g`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:y}`:y}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.furniture=r.furniture.filter(i=>i.id!==e);this.editPlan(n),this._selFurniture=null}rememberStartView(e=!1){let t=this.data.building;if(!t)return;let n=e?null:this.view3d()?.currentView();!e&&!n||this.editPlan({...t,settings:{...t.settings,start_view:n??null}})}view3d(){return this.renderRoot?.querySelector("fp3d-view3d")}renderFollow(e,t){let n=this._theme===e,r=this.t(`theme_${ct(e,this.hass)}`);return g`<button
      class="fp3d-chip fp3d-follow"
      role="switch"
      aria-checked=${n}
      @click=${()=>{this._theme=mu(this._theme,e,!n,this.hass),J.set("theme",this._theme)}}
    >
      <span class="fp3d-follow-box" aria-hidden="true">${n?"\u2713":""}</span>${this.t(t)}
      <small>${this.t("follow_now",{look:r})}</small>
    </button>`}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!B("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(r,i)=>M(this.hass,r,i)})}}updated(){if(this.toggleAttribute("light",this._mode==="view"&&vn(ct(this._theme,this.hass))),!this.locateLab&&this.hass?.user?.is_admin&&this.data.building&&Zr()&&(this.locateLab=qp(()=>({hass:this.hass,building:this.data.building}))),this.ttLinked||!this.data.building||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&B("time_travel")&&this.toggleTimeTravel(e)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.listenTouches(!1),this.tt.stop(),this.locateLab?.(),this.locateLab=null}render(){if(this.hass&&!yn(this.hass.language))return y;let e=this.data.building,t=this.data.saveState;return g`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this.accentStyle()}>
        ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,qi())}></fp3d-mic-probe>`:y}
        ${this._clean&&this._mode==="view"?y:this._tablet?this.renderTabletHeader():g`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Home 3D</h1>
          ${this.canEdit&&this.hass?g`<fp3d-home-switcher
                .hass=${this.hass}
                .home=${this.data.homeId}
                @home-reload=${()=>{this.data.reopen()}}
                @home-open=${n=>this.data.setHome(n.detail.home??void 0)}
              ></fp3d-home-switcher>`:y}
          ${this.canEdit?g`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`:y}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?g`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙ <span class="fp3d-opts-label">${this.t("view_btn")}</span>
                </button>
                ${this._optsOpen?g`<div class="fp3d-opts-veil" @click=${()=>this._optsOpen=!1}></div>`:y}
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <section class="fp3d-opt-group">
                <h3>${this.t("quality")}</h3>
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>g`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("theme")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${zs.map(n=>g`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,J.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${n=>{this._accent=n.target.value,J.set("accent",this._accent)}}
                  />
                  ${this._accent?g`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,J.set("accent","")}}
                      >
                        ↺
                      </button>`:y}
                </label>
              </div>
              ${this.renderFollow("theme","follow_ha")}
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("view_group_lighting")}</h3>
              ${this.renderFollow("auto","follow_sun")}
              <button class="fp3d-chip fp3d-opt-more" @click=${()=>this.view3d()?.openSettings()}>${this.t("sun_and_lights")}</button>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("clock")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(n=>g`<button aria-pressed=${this._clock===n} title=${this.t(`clock_${n}`)} aria-label=${this.t(`clock_${n}`)} @click=${()=>{this._clock=n,J.set("clock",n)}}>
                      ${n==="off"?this.t("clock_off"):p_[n]}
                    </button>`)}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("markers")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(n=>g`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,J.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("view_group_size")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(n=>g`<button
                      aria-pressed=${this._pinSize===n}
                      @click=${()=>{this._pinSize=n,J.set("pinSize",n)}}
                    >
                      ${this.t(`pin_size_${n}`)}
                    </button>`)}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("view_group_controls")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(n=>g`<button
                      aria-pressed=${this._controlsRight===n}
                      title=${this.t(n?"controls_right":"controls_left")}
                      aria-label=${this.t(n?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=n,J.set("controls",n?"right":"left")}}
                    >
                      ${n?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.canEdit?g`<button
                        title=${`${this.t("start_view")}: ${this.t("start_view_set")}`}
                        aria-label=${this.t("start_view_set")}
                        @click=${()=>this.rememberStartView()}
                        @mouseenter=${()=>this._pinHover=!0}
                        @mouseleave=${()=>this._pinHover=!1}
                        @focus=${()=>this._pinHover=!0}
                        @blur=${()=>this._pinHover=!1}
                      >
                        📌
                      </button>
                      ${this.data.building?.settings.start_view?g`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:y}`:y}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,J.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,J.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,J.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </section>
              </div>`:y}
          ${this._mode==="editor"&&t!=="idle"?g`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:y}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?this.renderCleanNotice():this.renderNotices()}
        ${this.data.error&&!e?g`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:y}
        ${!e&&!this.data.error?g`<p class="fp3d-message">${this.t("loading")}</p>`:y}
        ${e?this._mode==="editor"&&this.canEdit?this.renderEditor(e):this._mode==="extensions"&&this.canEdit?this.renderExtensions():this.renderView(e):y}
      </div>
    `}renderTabletHeader(){return g`<header class="fp3d-header fp3d-tablet-head"><h1>${this.data.homeName||"Home 3D"}</h1></header>`}shownAccent(){return Ti(this._theme,this._accent,this.hass,e=>getComputedStyle(this).getPropertyValue(e))}accentStyle(){let e=this.shownAccent();return e?`--fp3d-accent:${e};--fp3d-accent-text:${Mi(e)}`:""}renderNotices(){let e=this.data,t=[],n=this.renderUpdateNotice();if(n&&t.push(n),e.needsRestart&&e.versionGap!=="frontend"&&t.push(g`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(g`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.canEdit&&!this._tablet){let r=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(g`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:r})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?g`<div class="fp3d-notices">${t}</div>`:y}renderCleanNotice(){let e=this.renderUpdateNotice();return e?g`<div class="fp3d-notices">${e}</div>`:y}renderUpdateNotice(){let e=this.data,t=e.updateNotice;if(!t)return null;let n=e.backendVersion!==e.frontendVersion?this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"}):this.t("update_ready");return g`<div class="fp3d-notice fp3d-notice-warn fp3d-notice-update" role="status">
      <span>${n}${t==="ready"?y:g` ${this.t(t==="saving"?"update_saving":"update_unsaved")}`}</span>
      <button class="fp3d-btn" ?disabled=${t==="unsaved"} @click=${()=>{e.reloadWhenSaved()}}>${this.t("reload_page")}</button>
    </div>`}editorPending(){return this._editorReady?null:this._editorError?g`<div class="fp3d-empty"><p>${this.t("load_error")}: ${this._editorError}</p></div>`:(Ql().then(()=>this._editorReady=!0,e=>this._editorError=String(e)),g`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderExtensions(){this.data.loadLibrary();let e=this.editorPending();return e||g`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .canEdit=${this.data.canEdit}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${t=>this.editPlan(t.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`}renderEditor(e){this.data.loadLibrary();let t=this.editorPending();return t||g`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .canEdit=${this.data.canEdit}
      .home=${this.data.homeId}
      .history=${this.undoHistory}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=ua()}
      @voice-here=${()=>{this._voiceHere=sa(),this._screen=aa()}}
      @mic-probe=${()=>on().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${n=>this.data.edit(n.detail.building)}
    ></fp3d-editor>`}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(a=>a.rooms.length))return g`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <button class="fp3d-btn" @click=${()=>{this.loadSample()}}>${this.t("home_sample")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:y}
      </div>`;let t=e.floors.find(a=>a.id===this._floorId),n=t?[t]:e.floors,r=this.tt.active,i=Qi(this.tt.hass(this.hass),e),s=g`<div class="fp3d-seg" role="group" aria-label=${this.t("plan_view")}>
      <button aria-pressed=${!this._plan2d} @click=${()=>this.setPlan2d(!1)}>${this.t("view_3d")}</button>
      <button aria-pressed=${this._plan2d} @click=${()=>this.setPlan2d(!0)}>${this.t("view_2d")}</button>
    </div>`;return g`
      ${this._clean||this._tablet&&e.floors.length<2?y:g`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?g`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(a=>g`<button
                  class="fp3d-chip"
                  aria-pressed=${a.id===this._floorId}
                  @click=${()=>{this._floorId=a.id,this._roomId=null}}
                >
                  ${a.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:y}
        ${(this._tablet?[]:n).flatMap(a=>[n.length>1&&ke(a).some(l=>l.name.trim())?g`<span class="fp3d-nav-floor">${a.name}</span>`:y,...ke(a).filter((l,c,d)=>l.name.trim()&&!(l.outdoor&&d.findIndex(u=>u.outdoor&&u.area_id===l.area_id&&u.name===l.name)<c)).map(l=>g`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${l.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=a.id),this._roomId=l.id===this._roomId?null:l.id}}
            >
              ${l.name}
            </button>`)])}
        ${this._tablet?y:g`<button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,J.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>`}
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${r?"fp3d-tt":""}">
        <fp3d-view3d
          class="fp3d-body"
          .canEdit=${this.data.canEdit&&!this._tablet}
          .noSettings=${this._tablet}
          .home=${this.data.homeId}
          .pivotMark=${this._pinHover}
          .hass=${i}
          .replay=${this.tt.session?.replay??null}
          .building=${e}
          .packs=${this.data.packs}
          .plan2d=${this._plan2d}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          .angleLock=${this._angleLock}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!r}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,J.set("clean",this._clean?"1":"0")}}
          .weather=${this._weather}
          .director=${this._director}
          .voice=${this._voiceHere}
          .screen=${this._screen||null}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .pinSize=${this._pinSize}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .clock=${this._clock}
          .accent=${this.shownAccent()}
          ?furnish=${this._furnish&&!r}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${a=>this._selFurniture=a.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${a=>this._selDevice=a.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${a=>{this._floorId=a.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?g`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${a=>this.view3d()?.lookThrough(a.detail.entity)}
              .hass=${i}
              ?readOnly=${r}
              ?noLook=${this._plan2d}
              .room=${e.floors.flatMap(a=>ke(a)).find(a=>a.id===this._roomId)??null}
              .floor=${e.floors.find(a=>ke(a).some(l=>l.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${bn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${a=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,a.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${Xp(i)?g`<div class="fp3d-demo-chip" title=${this.t("demo_hint")}>${this.t("demo_chip")}</div>`:y}
        ${this._clean?y:g`<div class="fp3d-overlay">
          ${this._tablet?y:s}
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t(this._tablet?"view":"show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?g`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          ${this._tablet?s:y}
          ${this._plan2d?y:g`<div class="fp3d-seg">
                <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
                <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
              </div>`}
          ${e.floors.length>1&&!this._floorId&&!this._plan2d?g`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:y}
          ${!this._floorId&&!this._plan2d&&e.settings.roof.type!=="none"?g`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:y}
          ${e.floors.length>1&&this._floorId&&!this._plan2d?g`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(a=>g`<button
                      aria-pressed=${this._floorStack===a}
                      @click=${()=>{this._floorStack=a,J.set("floor_stack",a)}}
                    >
                      ${this.t(`floor_stack_short_${a}`)}
                    </button>`)}
              </div>`:y}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(a=>g`<button
                  aria-pressed=${this._heat===a}
                  @click=${()=>{this._heat=a,J.set("heat",a)}}
                >
                  ${this.t(a==="none"?"heat_off":`heat_short_${a}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,J.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,J.set("trail",this._trail?"1":"0")}}
          >
            ${B("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${B("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,J.set("weather",this._weather?"1":"0")}}
          >
            ${B("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:y}
          </div>
          ${this._tablet?y:g`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${r} title=${this.t("tt_hint")} aria-label=${this.t("tt_chip")} @click=${()=>this.toggleTimeTravel()}>
            ${B("time_travel")?"\u23EA":"\u{1F512}"} <span class="fp3d-tt-label">${this.t("tt_chip")}</span>
          </button>`}
          ${this._roomId||this._floorId&&e.floors.length>1?g`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:y}
        </div>`}
        ${this._furnish?g`<div class="fp3d-furnish-bar">
              ${this._selFurniture?g`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,a=>a.mirror=!a.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?g`<span>${j(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:g`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:y}
      </div>
    `}static styles=[Ve,Je,Me`
      .fp3d-badge {
        display: inline-block;
        margin-left: 6px;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1204;
        font-size: 0.78em;
        font-weight: 700;
        line-height: 1.5;
        box-shadow: 0 0 10px rgba(255, 181, 71, 0.7);
        vertical-align: middle;
        white-space: nowrap;
        animation: fp3d-badge-in 1.6s ease-out 2;
      }
      @keyframes fp3d-badge-in {
        0% {
          box-shadow: 0 0 0 0 rgba(255, 181, 71, 0.9);
        }
        100% {
          box-shadow: 0 0 0 10px rgba(255, 181, 71, 0);
        }
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. The parent may pad itself by the
           screen's safe areas (notches; some themes set them on every screen): those are taken off, or the panel is
           taller than the window and its bottom is cut off (#529). */
        height: calc(100vh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        background: var(--fp3d-bg);
      }
      /* dvh only where the browser knows it: a line with var() is not dropped while it is read, so a WebView without
         dvh (Chrome before 108, the Fire 7) lost the height altogether and the 3D view stayed empty (idea: CasaNeon) */
      @supports (height: 100dvh) {
        :host {
          height: calc(100dvh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        }
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      /* the view options (quality, look, symbols, side) fold behind ⚙ on every screen: a tidy header */
      .fp3d-opts-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        order: 3;
        height: 36px;
        padding: 0 12px;
        font: inherit;
        font-weight: 600;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-opts-label {
        font-size: 13.5px;
      }
      .fp3d-opts-btn[aria-expanded="true"] {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
      }
      .fp3d-view-opts {
        display: none;
      }
      .fp3d-view-opts.fp3d-opts-open {
        display: flex;
        flex-wrap: wrap;
        gap: 10px 16px;
        order: 5;
        width: 100%;
        align-items: flex-start;
      }
      /* one labelled group per kind of setting (#87) */
      .fp3d-opt-group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        position: relative;
        padding-top: 16px;
      }
      .fp3d-opt-group h3 {
        position: absolute;
        top: 0;
        left: 4px;
        margin: 0;
        font-size: 10.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-follow {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-follow small {
        color: var(--fp3d-muted);
        font-size: 11.5px;
      }
      .fp3d-follow-box {
        display: inline-grid;
        place-items: center;
        width: 16px;
        height: 16px;
        border-radius: 5px;
        border: 1.5px solid var(--fp3d-muted);
        font-size: 11px;
        line-height: 1;
      }
      .fp3d-follow[aria-checked="true"] .fp3d-follow-box {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      /* phones: version and grow move with it */
      @media (max-width: 700px) {
        .fp3d-version {
          order: 4;
        }
        .fp3d-header .fp3d-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .fp3d-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .fp3d-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .fp3d-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .fp3d-accent-reset {
        border: none;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .fp3d-nav:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .fp3d-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .fp3d-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-left: 6px;
      }
      .fp3d-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-demo-chip {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        padding: 2px 10px;
        border-radius: 999px;
        font-size: 11px;
        letter-spacing: 0.04em;
        color: var(--fp3d-s-text, #e8f4ff);
        background: var(--fp3d-s-chrome, rgba(10, 20, 35, 0.72));
        border: 1px solid var(--fp3d-s-line, rgba(120, 200, 255, 0.35));
        pointer-events: auto;
        cursor: help;
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-clean fp3d-view3d {
        --fp3d-bottom-inset: 0px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* time travel: its bar at the bottom; the switches, the buttons of the view and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt fp3d-view3d {
        --fp3d-bottom-inset: calc(52px + var(--fp3d-tt-h));
      }
      .fp3d-tt .fp3d-overlay {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt .fp3d-room-panel {
        bottom: calc(var(--fp3d-tt-h) + 6px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
        /* the view's own buttons (search, eye) step up above the sheet */
        .fp3d-room-open fp3d-view3d {
          --fp3d-bottom-inset: calc(55% + 8px);
        }
        /* phones: the time bar takes two rows; the switches make way for it */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
        .fp3d-tt .fp3d-overlay {
          display: none;
        }
        .fp3d-tt fp3d-view3d {
          --fp3d-bottom-inset: var(--fp3d-tt-h);
        }
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
      }
      /* an open room panel keeps the switches beside it, not over its last rows */
      .fp3d-room-open .fp3d-overlay {
        right: calc(min(360px, 100% - 28px) + 26px);
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      /* the view's switches in one "Show" menu that opens upwards */
      .fp3d-show-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-show-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-show-panel {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: min(470px, 92vw);
        padding: 10px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid, #0d1628);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-show-panel > .fp3d-seg {
        flex-wrap: wrap;
      }
      .fp3d-show-panel > .fp3d-chip {
        box-shadow: none;
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-seg-label {
        display: inline-flex;
        align-items: center;
        padding: 0 4px 0 8px;
        opacity: 0.75;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-phone-only {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-only {
          display: block;
        }
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
      .fp3d-opts-veil {
        display: none;
      }
      /* phones (#93): the opened view settings float over the view instead of pushing it down, a tap beside them
         folds them; the bottom bar keeps one row (time travel as its symbol); touch targets 44 px */
      @media ${Xe(Oo)} {
        .fp3d-header {
          position: relative;
        }
        .fp3d-view-opts.fp3d-opts-open {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 40;
          max-height: 60vh;
          overflow-x: hidden;
          overflow-y: auto;
          box-sizing: border-box;
          padding: 10px 12px 14px;
          background: var(--fp3d-chrome-solid);
          border-bottom: 1px solid var(--fp3d-line);
          box-shadow: var(--fp3d-shadow);
        }
        .fp3d-view-opts .fp3d-seg {
          flex-wrap: wrap;
        }
        .fp3d-opts-veil {
          display: block;
          position: fixed;
          inset: 0;
          z-index: 39;
        }
        .fp3d-opts-btn {
          min-width: 44px;
          height: 44px;
        }
        .fp3d-tt-label {
          display: none;
        }
        .fp3d-quality button {
          min-width: 44px;
        }
        .fp3d-nav .fp3d-nav-toggle {
          min-width: 44px;
        }
        .fp3d-header .fp3d-seg button,
        .fp3d-quality button,
        .fp3d-overlay .fp3d-chip,
        .fp3d-overlay .fp3d-seg button,
        .fp3d-show-panel button,
        .fp3d-nav .fp3d-chip {
          min-height: 44px;
        }
        .fp3d-overlay .fp3d-tt-chip {
          min-width: 44px;
          justify-content: center;
        }
      }
    `]};customElements.get("home-3d-panel")||customElements.define("home-3d-panel",wa);function Zp(o,e){return e??o?.view==="2d"}var eh=Ne("home-3d-card-editor",()=>"55ecdf26b3c1");function th(){try{let o=localStorage.getItem("home3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var va=class extends xe{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_plan2d:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new gn(this);tt=new Rn(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=th(),this._heat=null,this._explode=null,this._plan2d=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!B("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:n?.quality??"auto",speed:n?.time_travel_speed??null,range:n?.time_travel_range??null,t:(r,i)=>M(this.hass,r,i)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this._config?.room??null,this._floorId=void 0,this._plan2d=null,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let t=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(t-this._top)>1)&&(this._top=t)}};connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>this._night=Gi(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=this.shadowRoot?.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e?.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await eh(),document.createElement("home-3d-card-editor")}static getStubConfig(){return{type:"custom:home-3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("home3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this.data.setHome(e.home||void 0),this._floorId=void 0,this._walls=th(),this._heat=null,this._explode=null,this._plan2d=null,this._orbit=!1,this._night=Gi(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),yn(this.hass.language)||oi(this.hass.language).then(()=>this.requestUpdate());let t=Gi(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}updated(){this.toggleAttribute("light",vn(ct(Tn(this._config?.theme),this.hass)))}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}currentFloor(){let e=this.data.building,t=this._floorId===void 0?this._config?.floor??null:this._floorId;return e&&e.floors.length===1?e.floors[0].id:e?.floors.some(n=>n.id===t)?t:null}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!yn(this.hass.language))return y;let e=this.data.building,t=this._config?.height??420,n=this._config;!this.roomApplied&&e&&n?.room&&(this.roomApplied=!0,e.floors.some(f=>ke(f).some(x=>x.id===n.room))&&(this._roomId=n.room));let r=this.currentFloor(),i=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!r&&(e?.floors.length??0)>1,s=f=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(f),a=["temperature","humidity","co2"].filter(f=>s(f)),l=this._walls??n?.walls??"auto",c=this._heat??n?.heatmap??"none",d=this._explode??n?.explode??!0,u=Zp(n,this._plan2d),p=this._fullscreen?"100%":n?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${t}px`,h=!!e&&!this._clean&&(i||(!!n?.controls||!!n?.time_travel)&&!(this._roomId&&n.room_panel!==!1)),_=this.tt.active,b=Qi(this.tt.hass(this.hass),e),m=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0,v=f=>M(this.hass,f),w=Ti(Tn(n?.theme),n?.accent,this.hass,f=>getComputedStyle(this).getPropertyValue(f));return g`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${w?`--fp3d-accent:${w};--fp3d-accent-text:${Mi(w)}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${_?"fp3d-tt":""}" style="height:${p}">
        ${e&&e.floors.some(f=>f.rooms.length)?g`<fp3d-view3d
              .hass=${b}
              .canEdit=${this.data.canEdit}
              .home=${this.data.homeId}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .packs=${this.data.packs}
              .plan2d=${u}
              .floorId=${r}
              .roomId=${this._roomId}
              .wallMode=${l}
              .explode=${d}
              .keepRoof=${n?.roof_fade===!1}
              .hideRoof=${n?.roof===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .pinSize=${this._config?.marker_size??"normal"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .walkable=${this._config?.walk!==!1}
              .petsOn=${this._config?.pets!==!1}
              .ghostOn=${this._config?.ghost!==!1}
              .buttons=${this._config?.buttons?.map((f,x)=>({id:`card_${x}`,...f}))??null}
              .heatMode=${c}
              .theme=${Tn(this._config?.theme)}
              .clock=${this._config?.clock??null}
              .accent=${w}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${n?.room_names!==!1}
              .controlsRight=${n?.controls_side==="right"}
              .keepView=${n?.keep_view===!0}
              .angleLock=${n?.angle_lock===!0}
              .floorStack=${n?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
              .alerts=${n?.alerts!==!1}
              .householdCard=${n?.household_card!==!1}
              .rackCards=${n?.rack_cards!==!1}
              .alertJump=${!!n?.alert_jump}
              .director=${!!n?.director}
              .voice=${!!n?.voice}
              .screen=${n?.screen?.trim()||null}
              .scenes=${n?.scenes!==!1}
              ?trail=${!!n?.motion_trail}
              .cameraWall=${this._cameraWall&&!_}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${m}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${n?.start_view??null}
              style=${_?`--fp3d-bottom-inset: ${h?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:h?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${f=>{if(this.canSwitch&&(e?.floors.length??0)>1&&f.detail.floorId&&this.currentFloor()!==f.detail.floorId){this._floorId=f.detail.floorId,this._roomId=null;return}f.detail.roomId&&(this._roomId=f.detail.roomId===this._roomId?null:f.detail.roomId)}}
              @floor-tap=${f=>{this._floorId=f.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:g`<p class="fp3d-card-msg">${this.data.error??(e?M(this.hass,"no_building"):M(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?g`<fp3d-room-panel
              @camera-look=${f=>this.view3d()?.lookThrough(f.detail.entity)}
              class="fp3d-card-panel"
              .hass=${b}
              ?readOnly=${_}
              ?noLook=${u}
              .room=${e.floors.flatMap(f=>ke(f)).find(f=>f.id===this._roomId)??null}
              .floor=${e.floors.find(f=>ke(f).some(x=>x.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${bn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${f=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,f.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${h&&e?g`<div class="fp3d-card-controls">
              ${i?g`<button class="fp3d-chip" @click=${()=>this.back()}>${v("back")}</button>`:y}
              ${n?.time_travel?g`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${_} title=${v("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${B("time_travel")?"\u23EA":"\u{1F512}"} ${v("tt_chip")}
                  </button>`:y}
              ${n?.camera_wall?g`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${v("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${v("cameras_short")}</button>`:y}
              ${s("view")?g`<div class="fp3d-seg" role="group" aria-label=${v("plan_view")}>
                    <button aria-pressed=${!u} @click=${()=>this._plan2d=!1}>${v("view_3d")}</button>
                    <button aria-pressed=${u} @click=${()=>this._plan2d=!0}>${v("view_2d")}</button>
                  </div>`:y}
              ${s("walls")&&!u?g`<div class="fp3d-seg">
                    <button aria-pressed=${l==="auto"} @click=${()=>this.setWalls("auto")}>${v("walls_auto")}</button>
                    <button aria-pressed=${l==="cut"} @click=${()=>this.setWalls("cut")}>${v("walls_cut")}</button>
                  </div>`:y}
              ${s("floors")&&!u&&e.floors.length>1&&!r?g`<div class="fp3d-seg">
                    <button aria-pressed=${d} @click=${()=>this._explode=!0}>${v("floors_apart")}</button>
                    <button aria-pressed=${!d} @click=${()=>this._explode=!1}>${v("floors_stacked")}</button>
                  </div>`:y}
              ${a.length?g`<div class="fp3d-seg" role="group" aria-label=${v("heatmap")}>
                    ${["none",...a].map(f=>g`<button aria-pressed=${c===f} @click=${()=>this._heat=f}>
                          ${v(f==="none"?"heat_off":`heat_short_${f}`)}
                        </button>`)}
                  </div>`:y}
            </div>`:y}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${n?.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?g`<button class="fp3d-card-full" title=${v(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${v(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:y}
        ${n?.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?g`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?g`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:y}
      </div>
    </ha-card>`}static styles=[Ve,Je,Me`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      /* time travel: its bar at the bottom, the switches and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt .fp3d-card-controls {
        bottom: calc(var(--fp3d-tt-h) + 2px);
      }
      .fp3d-tt .fp3d-card-panel {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      .fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-dash-2 {
        right: 56px;
      }
      /* the view's walk button steps aside for the card's own buttons at the top right */
      fp3d-view3d {
        --fp3d-walk-right: 104px;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      /* full screen made by the card itself (iPad, the app on iOS): over the whole page */
      ha-card.fp3d-pseudo-full {
        position: fixed;
        inset: 0;
        z-index: 9999;
        height: 100vh !important;
        max-height: none !important;
        border-radius: 0;
      }
      @supports (height: 100dvh) {
        ha-card.fp3d-pseudo-full {
          height: 100dvh !important;
        }
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      ha-card:fullscreen {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: 0;
      }
      ha-card:fullscreen .fp3d-card-body {
        flex: 1 1 auto;
        min-height: 0;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        /* the time bar takes two rows here */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
      }
    `]};if(!customElements.get("home-3d-card")){customElements.define("home-3d-card",va);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"home-3d-card",name:M(void 0,"card_name"),description:M(void 0,"card_description"),preview:!1})}Fa();Ui();
