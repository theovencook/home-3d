Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let n=Math.trunc(e)||0;return this[n<0?this.length+n:n]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var rs=new URL(import.meta.url),ns=rs.searchParams.get("v"),os=o=>new URL(`./fonts/${o}${ns?`?v=${ns}`:""}`,rs).href,is="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function ss(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${os("figtree.woff2")}) format("woff2");unicode-range:${is}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${os("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${is}}`,document.head.append(o)}function as(o,e){return e==="metric"||e==="imperial"?e:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function zd(o,e){return String(Number(o.toFixed(e)))}function ls(o,e=2){let n=o<0?"-":"",t=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),r=Math.floor(t/12+1e-9),i=t-r*12,s=zd(i,e>=2?1:0);return r?i<.05?`${n}${r}'`:`${n}${r}' ${s}"`:`${n}${s}"`}function cs(o,e){let n=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!n)return null;let t=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,r=0,i=!1,s=!1,a=n;for(let l of n.matchAll(t)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];i=!0,a=a.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(r+=d*.3048,s=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?r+=d*.0254:c==="mm"?r+=d/1e3:c==="cm"?r+=d/100:c==="m"?r+=d:r+=e==="imperial"?d*(s?.0254:.3048):d}return!i||/[^\s+]/.test(a)?null:r}var qn=globalThis,Zn=qn.ShadowRoot&&(qn.ShadyCSS===void 0||qn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yo=Symbol(),ds=new WeakMap,un=class{constructor(e,n,t){if(this._$cssResult$=!0,t!==Yo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(Zn&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=ds.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&ds.set(n,e))}return e}toString(){return this.cssText}},us=o=>new un(typeof o=="string"?o:o+"",void 0,Yo),ze=(o,...e)=>{let n=o.length===1?o[0]:e.reduce((t,r,i)=>t+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new un(n,o,Yo)},hs=(o,e)=>{if(Zn)o.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let t=document.createElement("style"),r=qn.litNonce;r!==void 0&&t.setAttribute("nonce",r),t.textContent=n.cssText,o.appendChild(t)}},Qo=Zn?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let n="";for(let t of e.cssRules)n+=t.cssText;return us(n)})(o):o;var{is:Ed,defineProperty:Ad,getOwnPropertyDescriptor:Td,getOwnPropertyNames:Pd,getOwnPropertySymbols:Rd,getPrototypeOf:Id}=Object,Yn=globalThis,ps=Yn.trustedTypes,Fd=ps?ps.emptyScript:"",Dd=Yn.reactiveElementPolyfillSupport,hn=(o,e)=>o,Jo={toAttribute(o,e){switch(e){case Boolean:o=o?Fd:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let n=o;switch(e){case Boolean:n=o!==null;break;case Number:n=o===null?null:Number(o);break;case Object:case Array:try{n=JSON.parse(o)}catch{n=null}}return n}},ms=(o,e)=>!Ed(o,e),fs={attribute:!0,type:String,converter:Jo,reflect:!1,useDefault:!1,hasChanged:ms};Symbol.metadata??=Symbol("metadata"),Yn.litPropertyMetadata??=new WeakMap;var Ne=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=fs){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let t=Symbol(),r=this.getPropertyDescriptor(e,t,n);r!==void 0&&Ad(this.prototype,e,r)}}static getPropertyDescriptor(e,n,t){let{get:r,set:i}=Td(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:r,set(s){let a=r?.call(this);i?.call(this,s),this.requestUpdate(e,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fs}static _$Ei(){if(this.hasOwnProperty(hn("elementProperties")))return;let e=Id(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(hn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hn("properties"))){let n=this.properties,t=[...Pd(n),...Rd(n)];for(let r of t)this.createProperty(r,n[r])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[t,r]of n)this.elementProperties.set(t,r)}this._$Eh=new Map;for(let[n,t]of this.elementProperties){let r=this._$Eu(n,t);r!==void 0&&this._$Eh.set(r,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let t=new Set(e.flat(1/0).reverse());for(let r of t)n.unshift(Qo(r))}else e!==void 0&&n.push(Qo(e));return n}static _$Eu(e,n){let t=n.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let t of n.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hs(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,t){this._$AK(e,t)}_$ET(e,n){let t=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,t);if(r!==void 0&&t.reflect===!0){let i=(t.converter?.toAttribute!==void 0?t.converter:Jo).toAttribute(n,t.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,n){let t=this.constructor,r=t._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=t.getPropertyOptions(r),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Jo;this._$Em=r;let a=s.fromAttribute(n,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,n,t,r=!1,i){if(e!==void 0){let s=this.constructor;if(r===!1&&(i=this[e]),t??=s.getPropertyOptions(e),!((t.hasChanged??ms)(i,n)||t.useDefault&&t.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,t))))return;this.C(e,n,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:t,reflect:r,wrapped:i},s){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(n=void 0),this._$AL.set(e,n)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[r,i]of t){let{wrapped:s}=i,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(n)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};Ne.elementStyles=[],Ne.shadowRootOptions={mode:"open"},Ne[hn("elementProperties")]=new Map,Ne[hn("finalized")]=new Map,Dd?.({ReactiveElement:Ne}),(Yn.reactiveElementVersions??=[]).push("2.1.2");var ri=globalThis,gs=o=>o,Qn=ri.trustedTypes,_s=Qn?Qn.createPolicy("lit-html",{createHTML:o=>o}):void 0,xs="$lit$",Qe=`lit$${Math.random().toFixed(9).slice(2)}$`,Ss="?"+Qe,Hd=`<${Ss}>`,gt=document,fn=()=>gt.createComment(""),mn=o=>o===null||typeof o!="object"&&typeof o!="function",si=Array.isArray,Wd=o=>si(o)||typeof o?.[Symbol.iterator]=="function",Xo=`[ 	
\f\r]`,pn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bs=/-->/g,ws=/>/g,ft=RegExp(`>|${Xo}(?:([^\\s"'>=/]+)(${Xo}*=${Xo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vs=/'/g,ys=/"/g,$s=/^(?:script|style|textarea|title)$/i,ai=o=>(e,...n)=>({_$litType$:o,strings:e,values:n}),b=ai(1),bt=ai(2),jp=ai(3),_t=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),ks=new WeakMap,mt=gt.createTreeWalker(gt,129);function Ms(o,e){if(!si(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return _s!==void 0?_s.createHTML(e):e}var Ld=(o,e)=>{let n=o.length-1,t=[],r,i=e===2?"<svg>":e===3?"<math>":"",s=pn;for(let a=0;a<n;a++){let l=o[a],d,c,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,c=s.exec(l),c!==null);)h=s.lastIndex,s===pn?c[1]==="!--"?s=bs:c[1]!==void 0?s=ws:c[2]!==void 0?($s.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=ft):c[3]!==void 0&&(s=ft):s===ft?c[0]===">"?(s=r??pn,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?ft:c[3]==='"'?ys:vs):s===ys||s===vs?s=ft:s===bs||s===ws?s=pn:(s=ft,r=void 0);let p=s===ft&&o[a+1].startsWith("/>")?" ":"";i+=s===pn?l+Hd:u>=0?(t.push(d),l.slice(0,u)+xs+l.slice(u)+Qe+p):l+Qe+(u===-2?a:p)}return[Ms(o,i+(o[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]},gn=class o{constructor({strings:e,_$litType$:n},t){let r;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[d,c]=Ld(e,n);if(this.el=o.createElement(d,t),mt.currentNode=this.el.content,n===2||n===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=mt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(xs)){let h=c[s++],p=r.getAttribute(u).split(Qe),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:g[2],strings:p,ctor:g[1]==="."?ti:g[1]==="?"?ni:g[1]==="@"?oi:Ct}),r.removeAttribute(u)}else u.startsWith(Qe)&&(l.push({type:6,index:i}),r.removeAttribute(u));if($s.test(r.tagName)){let u=r.textContent.split(Qe),h=u.length-1;if(h>0){r.textContent=Qn?Qn.emptyScript:"";for(let p=0;p<h;p++)r.append(u[p],fn()),mt.nextNode(),l.push({type:2,index:++i});r.append(u[h],fn())}}}else if(r.nodeType===8)if(r.data===Ss)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(Qe,u+1))!==-1;)l.push({type:7,index:i}),u+=Qe.length-1}i++}}static createElement(e,n){let t=gt.createElement("template");return t.innerHTML=e,t}};function Lt(o,e,n=o,t){if(e===_t)return e;let r=t!==void 0?n._$Co?.[t]:n._$Cl,i=mn(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,n,t)),t!==void 0?(n._$Co??=[])[t]=r:n._$Cl=r),r!==void 0&&(e=Lt(o,r._$AS(o,e.values),r,t)),e}var ei=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:t}=this._$AD,r=(e?.creationScope??gt).importNode(n,!0);mt.currentNode=r;let i=mt.nextNode(),s=0,a=0,l=t[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new _n(i,i.nextSibling,this,e):l.type===1?d=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(d=new ii(i,this,e)),this._$AV.push(d),l=t[++a]}s!==l?.index&&(i=mt.nextNode(),s++)}return mt.currentNode=gt,r}p(e){let n=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,n),n+=t.strings.length-2):t._$AI(e[n])),n++}},_n=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,t,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=t,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Lt(this,e,n),mn(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==_t&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Wd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&mn(this._$AH)?this._$AA.nextSibling.data=e:this.T(gt.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:t}=e,r=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=gn.createElement(Ms(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===r)this._$AH.p(n);else{let i=new ei(r,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=ks.get(e.strings);return n===void 0&&ks.set(e.strings,n=new gn(e)),n}k(e){si(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,t,r=0;for(let i of e)r===n.length?n.push(t=new o(this.O(fn()),this.O(fn()),this,this.options)):t=n[r],t._$AI(i),r++;r<n.length&&(this._$AR(t&&t._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let t=gs(e).nextSibling;gs(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,t,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=i,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=y}_$AI(e,n=this,t,r){let i=this.strings,s=!1;if(i===void 0)e=Lt(this,e,n,0),s=!mn(e)||e!==this._$AH&&e!==_t,s&&(this._$AH=e);else{let a=e,l,d;for(e=i[0],l=0;l<i.length-1;l++)d=Lt(this,a[t+l],n,l),d===_t&&(d=this._$AH[l]),s||=!mn(d)||d!==this._$AH[l],d===y?e=y:e!==y&&(e+=(d??"")+i[l+1]),this._$AH[l]=d}s&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ti=class extends Ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},ni=class extends Ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},oi=class extends Ct{constructor(e,n,t,r,i){super(e,n,t,r,i),this.type=5}_$AI(e,n=this){if((e=Lt(this,e,n,0)??y)===_t)return;let t=this._$AH,r=e===y&&t!==y||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,i=e!==y&&(t===y||r);r&&this.element.removeEventListener(this.name,this,t),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ii=class{constructor(e,n,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Lt(this,e)}};var Cd=ri.litHtmlPolyfillSupport;Cd?.(gn,_n),(ri.litHtmlVersions??=[]).push("3.3.3");var zs=(o,e,n)=>{let t=n?.renderBefore??e,r=t._$litPart$;if(r===void 0){let i=n?.renderBefore??null;t._$litPart$=r=new _n(e.insertBefore(fn(),i),i,void 0,n??{})}return r._$AI(o),r};var li=globalThis,Me=class extends Ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zs(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _t}};Me._$litElement$=!0,Me.finalized=!0,li.litElementHydrateSupport?.({LitElement:Me});var Od=li.litElementPolyfillSupport;Od?.({LitElement:Me});(li.litElementVersions??=[]).push("4.2.2");async function Es(o){return o.callWS({type:"home_3d/building/get"})}async function bn(o,e){return(await o.callWS({type:"home_3d/building/save",building:e})).revision}function As(o,e){return o.connection.subscribeMessage(n=>e(n.revision),{type:"home_3d/building/subscribe"})}function Ts(o,e){return o.connection.subscribeMessage(e,{type:"home_3d/voice/subscribe"})}async function Ps(o,e,n,t){return(await o.callWS({type:"home_3d/voice/answer",ask_id:e,text:n,answered:t})).taken}async function Rs(o,e){return(await o.callWS({type:"home_3d/image/get",image_id:e})).data}async function Is(o){return(await o.callWS({type:"home_3d/packs/list"})).packs}function Bd(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function di(o){let e=we(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(Bd).length>=2}var Fs=[],Ds=new Map,Hs=0;function Ws(o){Fs=o,Ds=new Map(o.flatMap(e=>e.items.map(n=>[Nd(e.id,n.id),n]))),Hs++}function Je(){return Fs}function Ot(){return Hs}function Nd(o,e){return`pack:${o}:${e}`}function Xe(o){return o.startsWith("pack:")}function Jn(o){return Xe(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function Bt(o){return o==="robot_vacuum"||Xe(o)&&o.endsWith(":robot_vacuum")}function Vd(o){return o.z>.05}function Ls(o){let e=(o?.parts??[]).filter(n=>n.shape==="cyl"&&Vd(n));return e.length?e.reduce((n,t)=>t.w*t.d>n.w*n.d?t:n).z:.227}function Cs(o){return Xe(o)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(o)}function Os(o){return we(o)?.parts.find(e=>e.screen)}function we(o){if(Xe(o))return Ds.get(o)}function Bs(o,e){let n=e.split("-")[0];return o.name[n]??o.name.en??Object.values(o.name)[0]??o.id}function Ns(o,e){return o.name}function ce(o,e){let n=we(e.type);if(e.mount_y!=null)return e.mount_y;let t=Gs(e,o.height);if(t!==null)return t;if(e.type==="lamp_wall")return Vs;if(Xn.has(e.type))return Math.max(0,o.height-eo(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(n?.mount){case"surface":return ci(o,e)+wn(o,e.x,e.z,e.h);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return n?ci(o,e):Ks(e)||ci(o,e)}}function ci(o,e){let n=o.rooms.filter(t=>t.points.length>=3);return!n.length||n.some(t=>K([e.x,e.z],t.points))?0:Ve(o,e.x,e.z)}var Ke={field:null,size:1,right:0,up:0};var qs=["rain","snow","clouds","lightning","sky"];var Gd={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function hi(o){return o==="hedge"||o==="fence"||o==="pergola"}function pi(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!hi(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function ke(o){return[...o.rooms,...pi(o)]}function Ud(o,e,n){let t=o.slope??0;if(!t||o.type==="pool")return 0;let r=o.slope_dir??"x",i=(d,c)=>r==="x"?d:r==="-x"?-d:r==="z"?c:-c,s=1/0,a=-1/0;for(let[d,c]of o.points){let u=i(d,c);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,n)-s)/(a-s)));return t*l}function jd(o,e,n,t){return Qs(o,e)+Gd[e.type]-qd(o,e,n,t)}var fi=-.2,ui={set:!1,level:fi};function Zs(o){let e=o?.settings.terrain??null;ui={set:e?.level!=null,level:e?.level??fi}}function Ys(o){return o.elevation>.3?0:ui.set?ui.level-o.elevation:fi}function Qs(o,e){return Ys(o)+(e.offset??0)}function qd(o,e,n,t){return e.type==="pool"?0:Ud(e,n,t)}function Ve(o,e,n){let t=(o.outdoor??[]).filter(i=>!hi(i.type)&&i.type!=="pool"&&K([e,n],i.points)),r=[...t].reverse().find(i=>i.cut)??t[0];return r?jd(o,r,e,n):Ys(o)}function Js(o,e){return Qs(o,e)+(e.above?Xs(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Zd(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?Xs(o):1.5}function Yd(o,e){return e.above?!1:(o.outdoor??[]).some(n=>n!==e&&n.type!=="pool"&&!hi(n.type)&&!n.cut&&n.points.length>=3&&e.points.every(t=>K(t,n.points)))}function vn(o,e){return!e.above&&!Yd(o,e)?Nt(o,e)-.05:Js(o,e)-Zd(e)}function Nt(o,e){return Js(o,e)-.15}function Xs(o){return o.height&&o.height>.3?o.height:1.2}var Qd={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var ea={type:"none",pitch:35,overhang:.4},Jd={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ea}};var ta=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],na=.3;var oa=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Vs=1.75;function ia(o){if(["lamp_pendant","lamp_fan","stairwell","loft_ladder","parking"].includes(o.type)||Xd.has(o.type))return!1;let e=we(o.type);return!(e?.mount==="ceiling"&&e.light&&e.light!=="panel")}var Xn=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function eo(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var Xd=new Set(["stairs","stairs_u"]);function mi(o){return oa.has(o)||!!we(o)?.light}var eu=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ks(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return o.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var js=.04,tu=1.2;function wn(o,e,n,t=0){let r=0;for(let i of o.furniture)!(eu.has(i.type)||we(i.type)?.surface)||!K([e,n],wt(i))||i.type==="worktop"&&t>0&&i.h-js>=tu&&t<=i.h-js-.02||(r=Math.max(r,i.h));return r}var ra=new Set(["wall_switch","wall_socket"]),nu=4;function yn(o){let e=(o.gangs??[]).slice(0,nu);return e.length?e:[{entity:null}]}function to(o){return[...new Set(yn(o).map(e=>e.entity).filter(e=>!!e&&e!=="none"))]}var sa=new Set(["wifi_ap","water_heater"]);function Gs(o,e){return o.type==="wifi_ap"?o.variant==="wall"?2.1:Math.max(0,e-o.h):o.type==="water_heater"?o.variant==="wall"?1.1:0:null}var Kd=new Set([...oa,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Us={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],loft_ladder:[.6,1.1,2.5],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var ou=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],iu=["standard","bars","glass_wall"];function ru(o,e){return o.type==="door"?o.style&&ou.includes(o.style)?o.style:e?"front":"interior":o.style&&iu.includes(o.style)?o.style:"standard"}function su(o,e,n,t){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",i=o-.04,s=Math.min(1.05,Math.max(.6,i-(r?.6:.3))),a=(i-s)/(r?2:1),l=t.sidelight_width??a,d=r?t.sidelight_width2??t.sidelight_width??a:0;l=Math.max(.1,l),d=r?Math.max(.1,d):0;let c=i-.5;if(l+d>c){let h=Math.max(0,c)/(l+d);l*=h,d*=h}return r?{panels:[[.02,.02+l],[o-.02-d,o-.02]],x0:.02+l,x1:o-.02-d}:(n?!!t.sidelight_hinge:!t.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function aa(o,e){let n=o.width,t=su(n,ru(o,!1),e,o),r=t?.x0??0,i=t?.x1??n;return o.leaves!==2?(r+i)/2:e?r+(i-r)/4:i-(i-r)/4}function gi(o){o.energy={...Qd,...o.energy??{}},o.presence=o.presence??[],o.settings={...Jd,...o.settings,roof:{...ea,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(t=>({...t,panel:t.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(t=>({...t,mount:t.mount??null,rotation:t.rotation??0})),e.furniture=e.furniture.map(t=>({...t,entity:t.entity??null,power:t.power??null}));let n=e.placements.filter(t=>t.entity_id.startsWith("light.")&&!t.pin);if(n.length){let t={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let r of n){let i=t[r.mount??"ceiling"],[s,a,l]=Us[i];e.furniture.push({id:`lamp_${r.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:r.x,z:r.z,rotation:0,w:s,d:a,h:l,variant:null,entity:r.entity_id,power:null})}e.placements=e.placements.filter(r=>!r.entity_id.startsWith("light.")||r.pin)}e.openings=e.openings.map(t=>({...t,hinge:t.hinge??"left",leaves:t.leaves??1,swing:t.swing??"in",style:t.style??null,cover:t.cover??null,contact:t.contact??null,contact2:t.contact2??null,tilt:t.tilt??null}))}return o}function la(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function Ie(o){let e=0;for(let n=0;n<o.length;n++){let[t,r]=o[n],[i,s]=o[(n+1)%o.length];e+=t*s-i*r}return e/2}function Ee(o){let e=Ie(o);if(Math.abs(e)<1e-9){let r=o.length||1;return[o.reduce((i,s)=>i+s[0],0)/r,o.reduce((i,s)=>i+s[1],0)/r]}let n=0,t=0;for(let r=0;r<o.length;r++){let[i,s]=o[r],[a,l]=o[(r+1)%o.length],d=i*l-a*s;n+=(i+a)*d,t+=(s+l)*d}return[n/(6*e),t/(6*e)]}function wt(o){let e=o.rotation*Math.PI/180,n=Math.cos(e),t=Math.sin(e),r=o.w/2,i=o.d/2;return[[-r,-i],[r,-i],[r,i],[-r,i]].map(([s,a])=>[o.x+s*n-a*t,o.z+s*t+a*n])}function K(o,e){let n=!1;for(let t=0,r=e.length-1;t<e.length;r=t++){let[i,s]=e[t],[a,l]=e[r];s>o[1]!=l>o[1]&&o[0]<(a-i)*(o[1]-s)/(l-s)+i&&(n=!n)}return n}var ca={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var au=700,bi="home3d.unsaved",Vt="0.1.0",ua="floorplan-3d.unsaved";function lu(){try{let o=localStorage.getItem(bi)??localStorage.getItem(ua);return o?JSON.parse(o):null}catch{return null}}function _i(o){try{o?localStorage.setItem(bi,JSON.stringify(o)):(localStorage.removeItem(bi),localStorage.removeItem(ua))}catch{}}var Kt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];canEdit=!1;packsLoaded=!1;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let n=this.hass===null;this.hass=e,n&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},au),this.host.requestUpdate()}get frontendVersion(){return Vt}get versionGap(){return!this.backendVersion||Vt==="dev"||this.backendVersion===Vt?null:cu(this.backendVersion,Vt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Vt!=="dev"&&this.backendVersion!==Vt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(gi(e.building))}discardDraft(){this.draft=null,_i(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!(!e||!this.hass)){this.pending=null;for(let n of e.floors)for(let t of n.furniture)t.mount_y!=null&&t.mount_y>10&&(t.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let n=await bn(this.hass,e);this.ownRevisions.add(n),this.revision=n,this.saveState=this.pending?"saving":"saved",this.saveError=null,_i(null)}catch(n){this.saveState="error",this.saveError=da(n),_i({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await As(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Is(this.hass)}catch{this.packs=[]}Ws(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Es(this.hass);this.building=gi(e.building),this.backendVersion=e.version??null,this.canEdit=e.can_edit??!!this.hass.user?.is_admin,this.draft===null&&!this.pending&&(this.draft=lu()),this.revision=e.revision,this.error=null}catch(e){this.error=da(e)}this.host.requestUpdate()}}};function da(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function cu(o,e){let n=o.split(/[.-]/).map(r=>Number.parseInt(r,10)||0),t=e.split(/[.-]/).map(r=>Number.parseInt(r,10)||0);for(let r=0;r<Math.max(n.length,t.length);r++){let i=(n[r]??0)-(t[r]??0);if(i)return i}return 0}var ha;function wi(){let o=new URL("./home-3d-editor.js?v=629bf0b27e8e",new URL(import.meta.url)).href;return ha??=import(o),ha}var du={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},uu=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),hu=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),pu=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),no=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],ya=new Set(["light","switch","fan"]);function ka(o){return o.slice(0,o.indexOf("."))}function C(o){return du[ka(o)]??null}function pa(o){return o!==null&&o!=="scene"&&o!=="script"}var fu=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function oo(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!fu.has(String(o.attributes.device_class??""))}function Ge(o,e){let n=o.entities?.[e];return n?n.area_id?n.area_id:n.device_id&&o.devices?.[n.device_id]?.area_id||null:null}function io(o,e){let n=o.entities?.[e];return!!n&&(!!n.hidden||!!n.hidden_by||!!n.disabled_by)}function fa(o,e){let n=C(e);if(!n)return!1;let t=o.entities?.[e];if(io(o,e)||t?.entity_category)return!1;let r=o.states[e];if(!r)return!1;let i=r.attributes.device_class,s=String(r.attributes.unit_of_measurement??"");return n==="sensor"?i?uu.has(i)||i==="voltage"&&s==="mV":hu.has(s):n==="binary"?i?pu.has(i):!!t?.area_id:!0}var mu=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ma(o,e){if(C(e)!=="sensor")return!1;let n=o.entities?.[e];if(io(o,e)||n?.entity_category)return!1;let t=o.states[e];return!t||!t.attributes.unit_of_measurement||mu.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||q(t)}var vi=null;function xn(o){let e=vi;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let n=new Map,t=new Map,r=[],i=new Map,s=new Map;for(let l of Object.keys(o.entities??{})){let d=o.entities[l],c=d.device_id;c&&d.area_id&&(s.get(c)??s.set(c,new Set).get(c)).add(d.area_id),c&&Ei(o,l)&&(t.get(c)??t.set(c,[]).get(c)).push(l),c&&!io(o,l)&&!d.entity_category&&(i.get(c)??i.set(c,new Set).get(c)).add(ka(l));let u=fa(o,l),h=Ge(o,l);if(!h){(u||ma(o,l))&&pa(C(l))&&r.push(l);continue}u&&(n.get(h)??n.set(h,[]).get(h)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(fa(o,l)||ma(o,l))&&pa(C(l))&&r.push(l);r.sort((l,d)=>no.indexOf(C(l))-no.indexOf(C(d))||G(o,l).localeCompare(G(o,d)));for(let[l,d]of n){let c=o.areas?.[l]?.name;d.sort((u,h)=>{let p=no.indexOf(C(u)),g=no.indexOf(C(h));return p-g||G(o,u,c).localeCompare(G(o,h,c))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return vi={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:n,power:t,unassigned:r,domains:i,hubs:a},vi}function fe(o,e){return!e||!o.entities?[]:xn(o).areas.get(e)??[]}var gu={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},_u=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),bu=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function wu(o,e){let n=o.entities?.[e]?.device_id,t=n&&!xn(o).hubs.has(n)?xn(o).domains.get(n):void 0;return t&&[...t].some(r=>_u.has(r))?!1:!bu.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function yi(o,e,n,t){let r=n.climate?.[t];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let i=gu[t],s=(p,g)=>K([p,g],n.points),a=e?.placements.filter(p=>p.entity_id.startsWith("sensor."))??[],l=a.filter(p=>s(p.x,p.z)).map(p=>p.entity_id),d=new Set(a.filter(p=>!s(p.x,p.z)).map(p=>p.entity_id)),c=[...new Set([...fe(o,n.area_id).filter(p=>!d.has(p)),...l])],u=c.filter(p=>p.startsWith("sensor.")&&o.states[p]?.attributes.device_class===i&&(n.outdoor||wu(o,p)));if(u.length)return u;let h=xa[t];return h?c.filter(p=>p.startsWith("climate.")&&typeof o.states[p]?.attributes[h]=="number"):[]}var xa={temperature:"current_temperature",humidity:"current_humidity"};function vu(o,e,n){let t=o.states[e];if(e.startsWith("climate.")){let i=xa[n],s=i?Number(t?.attributes[i]):Number.NaN;return n==="temperature"?ga(s,Fe(o)):s}let r=Number(t?.state);return n==="temperature"?ga(r,t?.attributes.unit_of_measurement):r}function Fe(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function ga(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function Gt(o,e){return Fe(o)==="\xB0F"?e*9/5+32:e}function et(o,e,n,t){let r=yi(o,e,n,t).map(i=>vu(o,i,t)).filter(i=>Number.isFinite(i));return r.length?r.reduce((i,s)=>i+s,0)/r.length:null}function Sa(o,e){return!!o.entities&&xn(o).hubs.has(e)}function ki(o,e){return o.entities?xn(o).power.get(e)??[]:[]}function G(o,e,n){let r=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(n&&r.length>n.length+1&&r.toLowerCase().startsWith(n.toLowerCase()+" ")){let i=r.slice(n.length+1);return i.charAt(0).toUpperCase()+i.slice(1)}return r}function $a(o,e){if(!e||e==="none")return null;let n=o.states[e];if(!n||q(n))return null;let t=n.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(t))return!0;if(["off","closed","idle","false","inactive","standby"].includes(t))return!1;let r=Number(t);return Number.isFinite(r)?r>0:null}function q(o){return!o||o.state==="unavailable"||o.state==="unknown"}var yu=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function xi(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Si(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function Pe(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Si(o.state)||o.state==="returning";switch(C(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return xi(o)&&yu.has(String(o.state).toLowerCase());default:return!1}}function Ma(o,e){if(!o||q(o))return e?1:0;let n=String(o.state).toLowerCase();return e||n==="run"||n==="cooking"||n==="on"?1:n==="ready"||n==="standby"||n==="pause"||n==="paused"?.3:0}function za(o){if(!o||q(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let n=String(o.attributes.hvac_action??"").toLowerCase(),t=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],r=["heating","cooling","drying","fan"].includes(n);return{color:t,level:r||!n?1:.45}}function Ea(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let n=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),t=a=>{let l=Math.max(...a),d=Math.min(...a),c=l-d;return l<=0||c/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/c+6)%6:l===a[1]?(a[2]-a[0])/c+2:(a[0]-a[1])/c+4)*60,c/l]},[r]=t(n),[i]=t(o.color);if(r<0||i<0)return r<0&&i<0?o:null;let s=Math.abs(r-i);return Math.min(s,360-s)<=30?o:null}function vt(o,e){if(!o||o.state!=="on")return null;let n=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,t=typeof n.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,n.brightness/255))):1,r=n.rgb_color,i;return r&&n.color_mode!=="color_temp"&&n.color_mode!=="brightness"&&n.color_mode!=="onoff"?i=[r[0]/255,r[1]/255,r[2]/255]:typeof n.color_temp_kelvin=="number"?i=ku(n.color_temp_kelvin):i=[1,.71,.28],{color:i,level:t}}function ku(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),n=[1,.66,.26],t=[.78,.9,1];return[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e]}function Ut(o,e,n=null){if(o==="camera")return n==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&n){if(n==="floor")return 1.95;if(n==="table")return 1.25;if(n==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var xu=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Su=new Set(["garage","gate"]),$u=new Set(["window","opening"]);function kn(o,e,n=!1){let t=new Map;return e.length&&o.forEach((r,i)=>{let s=n&&e.length===1?e[0]:e[i];s&&t.set(r.id,s)}),t}function Sn(o,e){let n=new Map,t=(i,s)=>i==="none"?null:i??s??null,r=(i,s,a)=>{let l=t(i.cover,s);return{cover:l,contact:i.sensor==="handle"&&i.contact==null?null:t(i.contact,a),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,lock:(i.type==="door"||i.type==="window"&&i.sill<=.01)&&i.lock&&i.lock!=="none"?i.lock:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:l&&C(l)==="cover"&&i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{}}};for(let i of e){for(let s of i.rooms){let a=i.openings.filter(f=>f.room_id===s.id).sort((f,k)=>f.edge-k.edge||f.offset-k.offset);if(!a.length)continue;let l=fe(o,s.area_id),d=f=>o.states[f]?.attributes.device_class,c=l.filter(f=>C(f)==="cover"&&xu.has(d(f))),u=a.filter(f=>f.type==="window"),h=a.filter(f=>f.type==="door"),p=a.filter(f=>f.type==="garage"),g=kn(u,c,!0),_=kn(u,l.filter(f=>C(f)==="binary"&&$u.has(d(f)))),m=kn(h,l.filter(f=>C(f)==="binary"&&d(f)==="door")),v=kn(p,l.filter(f=>C(f)==="cover"&&Su.has(d(f)??""))),w=kn(p,l.filter(f=>C(f)==="binary"&&d(f)==="garage_door"));for(let f of a){let k=f.type==="window"?g:f.type==="garage"?v:null,T=f.type==="window"?_:f.type==="garage"?w:m;n.set(f.id,r(f,k?.get(f.id),T.get(f.id)))}}for(let s of i.openings)n.has(s.id)||n.set(s.id,r(s))}return n}var Mu=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function zu(o){if(!o||q(o))return null;let e=o.attributes.window_state;for(let n of[typeof e=="string"?e:null,o.state]){if(!n)continue;let t=Mu.find(([r])=>r.test(n.trim()));if(t)return t[1]}return null}var Eu=new Set(["unlocked","unlocking","open","opening"]);function $i(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var Au=.5;function Ue(o,e,n="window"){e.cover&&$i(e.cover)&&(e={...e,cover:null,position:null});let t=e.lock?o.states[e.lock]:void 0,r=t&&Eu.has(t.state)?{unlocked:!0}:{},i=w=>!!w&&o.states[w]?.state==="on",s=w=>!!w&&!!o.states[w]&&!q(o.states[w]),a=w=>w?zu(o.states[w]):null,l=w=>{let f=a(w);return e.contactInvert&&w&&w!==e.tilt&&w!==e.tilt2&&f!=="tilted"&&f?f==="open"?"closed":"open":f},d=i(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",c=l(e.contact2)==="open"&&!d?1:0,u=i(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",h=u?1:0,p=e.tiltAngle?Number(o.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(p)){let w=(p-(e.tiltOffset??0))*(e.tiltInvert?-1:1);h=Math.min(1,Math.max(0,w/(e.tiltMax||15))),h<.08&&(h=0),u=h>0}let g=l(e.contact)==="open"&&!u?1:0,_=null,m=e.cover?o.states[e.cover]:void 0,v=Aa(o,e.position);if(v!==null)_=e.positionInverted?v:1-v;else if(m&&!q(m)){let w=m.attributes.current_position;typeof w=="number"?_=1-Math.min(100,Math.max(0,w))/100:_=m.state==="closed"?1:m.state==="opening"||m.state==="closing"?.5:0}else e.cover&&(_=0);if(n==="door"){let w=l(e.contact);return _!==null&&m&&Wa.has(String(m.attributes.device_class??""))?{open:w===null?1-_:w==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...r}:{open:w===null?e.shut?0:Au:w==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:_,sensed:w!==null||_!==null,...r}}if(n==="garage"){let w=l(e.contact),f=_!==null||w!==null;return _===null&&(_=w===null||w==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:_,sensed:f}}return{open:g,open2:c,tilt:h,tilt2:d?1:0,cover:_,sensed:s(e.contact)||s(e.tilt)||Number.isFinite(p),...r}}function Aa(o,e){let n=e?o.states[e]:void 0;if(!n||q(n))return null;let t=Number(n.state);if(!Number.isFinite(t))return null;let r=n.attributes.unit_of_measurement==="%"||t>1;return Math.min(1,Math.max(0,r?t/100:t))}function Mi(o,e){let n=new Map,t=[];for(let s of e){let a=C(s)==="camera"?`camera:${s}`:o.entities?.[s]?.device_id??`entity:${s}`,l=n.get(a);l||(n.set(a,l=[]),t.push(a)),l.push(s)}let r=t.map(s=>{let a=n.get(s),l=a.find(d=>!o.entities?.[d]?.name)??a[0];return{primary:l,others:a.filter(d=>d!==l)}}),i=new Map(e.map((s,a)=>[s,a]));return r.sort((s,a)=>i.get(s.primary)-i.get(a.primary))}function ro(o,e){return Mi(o,e).map(n=>n.primary)}var _a={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Ta=new Set(["tv_board","tv_wall"]);function Pa(o,e){let n=o.states[e.entity];if(!n)return!1;let t=e.attribute?n.attributes[e.attribute]:n.state;if(t==null)return!1;let r=String(t).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===i||i.length>=3&&r.includes(i)}function Ra(o){return Ta.has(o)||!!Os(o)}function so(o){return Ra(o)||o==="desk"||o==="fridge_smart"}function jt(o,e){let n=new Set,t=yt(o,e),r=e.some(i=>i.openings.some(s=>s.confirm))?Sn(o,e):null;for(let i of e){for(let s of i.placements)s.confirm&&n.add(s.entity_id);for(let s of i.openings){let a=s.confirm?r?.get(s.id)?.cover:null;a&&a!=="none"&&n.add(a)}for(let s of i.furniture){let a=s.confirm?t.get(s.id)?.entity:null;if(a&&a!=="none"&&n.add(a),s.confirm)for(let l of s.gangs??[])l.entity&&l.entity!=="none"&&n.add(l.entity)}}return n}function Ia(o,e){let n=new Map;for(let t of e)for(let r of t.furniture){if(r.type!=="awning"&&!Jn(r.type))continue;let i=r.entity&&r.entity!=="none"?r.entity:null,s=i?o.states[i]:void 0,a=r.awning_time??20;if(!s||q(s)){n.set(r.id,{out:0,moving:0,time:a});continue}let l=h=>r.awning_invert?1-h:h,d=Aa(o,r.awning_position&&r.awning_position!=="none"?r.awning_position:null),c=s.attributes.current_position,u=s.state==="opening"?r.awning_invert?-1:1:s.state==="closing"?r.awning_invert?1:-1:0;d!==null?n.set(r.id,{out:l(d),moving:0,time:a}):typeof c=="number"&&Number.isFinite(c)?n.set(r.id,{out:l(Math.min(1,Math.max(0,c/100))),moving:0,time:a}):u?n.set(r.id,{out:null,moving:u,time:a}):n.set(r.id,{out:l(s.state==="open"||s.state==="on"?1:0),moving:0,time:a})}return n}function zi(o,e){let n=r=>{if(!r||r==="none")return!1;let i=o.states[r]?.state;return i==="on"||i==="open"},t=new Map;for(let r of e)for(let i of r.furniture)i.type==="fridge_smart"&&t.set(i.id,{left:n(i.door_left),right:n(i.door_right)});return t}var ba={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Ei(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function Tu(o,e){if(Ei(o,e))return e;let n=o.entities?.[e]?.device_id;return n?ki(o,n).find(t=>t!==e)??null:null}function yt(o,e){let n=new Map;for(let t of e){let r=new Set([...t.furniture.flatMap(i=>[i.entity,i.power]),...t.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of t.furniture){let s=i.type in ba,a=s?ba[i.type]:_a[i.type]??(Bt(i.type)?_a.robot_vacuum:void 0);if(!a&&i.entity==null&&i.power==null)continue;let l=t.rooms.find(p=>p.points.length>=3&&K([i.x,i.z],p.points))??(i.type==="awning"?pi(t).find(p=>K([i.x,i.z],p.points)):void 0),d=l?ro(o,fe(o,l.area_id)):[],c=p=>`${p} ${G(o,p)}`,u=i.entity==="none"?null:i.entity??null;if(i.entity==null){let p=d.filter(g=>!r.has(g));if(s){let g=p.filter(_=>C(_)==="light");u=g.find(_=>a.test(c(_)))??g[0]??null}else if(Bt(i.type)){let g=l?.area_id??null;u=Object.keys(o.entities??{}).find(_=>_.startsWith("vacuum.")&&!r.has(_)&&!io(o,_)&&Ge(o,_)===g)??null}else if(i.type==="radiator"||i.type==="ac_unit"){let g=p.filter(_=>C(_)==="climate");u=g.find(_=>a.test(c(_)))??g[0]??null}else if(Ra(i.type)){let g=p.filter(_=>C(_)==="media");u=g.find(_=>o.states[_]?.attributes.device_class==="tv")??g.find(_=>a?.test(c(_)))??(Ta.has(i.type)?g[0]??null:null)}else i.type==="awning"?u=p.find(g=>g.startsWith("cover.")&&(a?.test(c(g))||o.states[g]?.attributes.device_class==="awning"))??null:a&&(u=p.find(g=>["switch","media","fan"].includes(C(g)??"")&&a.test(c(g)))??null);u&&r.add(u)}let h=i.power==="none"?null:i.power??null;i.power==null&&(h=u?Tu(o,u):null,!h&&a&&l&&!s&&(h=fe(o,l.area_id).find(g=>Ei(o,g)&&!r.has(g)&&a.test(c(g)))??null),h&&r.add(h)),(u||h)&&n.set(i.id,{entity:u,power:h})}}return n}function Ai(o){if(!o)return null;let e=String(o.state).toLowerCase();return e==="unavailable"?!1:e==="unknown"||e===""?null:!["off","disconnected","offline","not_home","disabled","down","isolated"].includes(e)}function Ti(o){if(!o||o.state!=="on")return 0;let e=o.attributes.percentage;return typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.min(1,e/100)):.6}function Pi(o){if(!o||o.state==="off"||o.state==="standby"||q(o))return null;let e=o.attributes,n=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return n.includes("netflix")?[.9,.04,.08]:n.includes("youtube")?[1,.1,.15]:n.includes("prime")||n.includes("amazon")?[.1,.6,.95]:n.includes("disney")?[.2,.35,1]:n.includes("spotify")?[.12,.85,.4]:n.includes("zdf")||n.includes("ard")||n.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Fa(o,e,n,t=[]){let r=(u,h)=>K([u,h],n.points),i=yt(o,[e]),s=Sn(o,[e]),a=[...e.placements.filter(u=>r(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>r(u.x,u.z)).flatMap(u=>[i.get(u.id)?.entity,i.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===n.id).flatMap(u=>{let h=s.get(u.id);return h?[h.cover,h.contact,h.tilt,h.contact2]:[]}),...t.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...n.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(n.hidden??[]),d=[...new Set(a)].filter(u=>!l.has(u)),c=new Set(d);return{shown:d,more:fe(o,n.area_id).filter(u=>!c.has(u)&&!l.has(u))}}var wa=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Pu={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function ao(o,e){let n=e.car??{},t=u=>u&&u!=="none"?u:null,r=t(n.device)??t(e.entity),i=r?o.entities?.[r]?.device_id:null,s=i&&o.entities?Object.values(o.entities).filter(u=>u.device_id===i).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,h,p)=>s.find(g=>h.includes(g.split(".")[0])&&Pu[u].test(a(g))&&(!p||p(g)))??null,d=u=>String(o.states[u]?.attributes.unit_of_measurement??""),c=u=>String(o.states[u]?.attributes.device_class??"");return{soc:t(n.soc)??s.find(u=>u.startsWith("sensor.")&&c(u)==="battery")??l("soc",["sensor"],u=>d(u)==="%"),range:t(n.range)??l("range",["sensor"],u=>/km|mi/.test(d(u)))??l("range",["sensor"]),charging:t(n.charging)??l("charging",["sensor"],u=>/^k?W$/.test(d(u)))??l("charging",["binary_sensor","switch"]),plugged:t(n.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&c(u)==="plug")??l("plugged",["binary_sensor"]),lock:t(n.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:t(n.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:t(n.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function Ru(o){let e=o.entity_id,n=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?n==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?n==="off":n==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(n)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(n)?!1:null:n==="on"}function $n(o,e){let n=ao(o,e),t=m=>m?o.states[m]:void 0,r=m=>{let v=Number(t(m)?.state);return m&&Number.isFinite(v)?v:null},i=r(n.soc),s=r(n.range),a=t(n.charging),l=String(a?.attributes.unit_of_measurement??""),d=a&&/^k?W$/.test(l)?(r(n.charging)??0)*(l==="kW"?1e3:1):null,c=d!==null?d>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=t(n.plugged),h=t(n.lock),p=t(n.climate),g=t(n.tracker),_=g?.state.toLowerCase()??"";return{entities:n,soc:i!==null?Math.max(0,Math.min(100,i)):null,range:s,rangeUnit:String(t(n.range)?.attributes.unit_of_measurement??"km"),chargingW:d,charging:c,plugged:u?u.state==="on":null,locked:h?Ru(h):null,climateOn:p?p.entity_id.startsWith("climate.")?p.state!=="off"&&p.state!=="unavailable":p.state==="on":null,away:g&&_!=="home"&&!q(g)?_==="not_home"?"":g.state:null}}function Da(o,e){return e.flatMap(n=>n.furniture.filter(t=>t.type==="parking"&&t.car).flatMap(t=>Object.values(ao(o,t)))).filter(n=>!!n)}function Mn(o,e,n){if(n==="none")return null;if(n)return n;let t=e?o.entities?.[e]?.device_id:null;if(!t||!o.entities)return null;for(let r of Object.values(o.entities))if(!(r.device_id!==t||!r.entity_id.startsWith("sensor."))&&(wa.test(r.translation_key??"")||wa.test(r.entity_id.split(".")[1])))return r.entity_id;return null}function va(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Ha(o,e,n,t){let r=n?o.states[n]?.attributes:void 0;for(let i of[t?o.states[t]?.state:void 0,r?.current_room,r?.room,r?.current_segment]){let s=Ri(o,e,i);if(s)return s}return null}function Ri(o,e,n){if(typeof n!="string"||!n||n==="unknown"||n==="unavailable")return null;let t=va(n);if(!t)return null;let r=i=>[i.name,i.area_id??"",i.area_id&&o.areas?.[i.area_id]?.name||""].map(va).filter(Boolean);return e.find(i=>r(i).includes(t))??e.find(i=>r(i).some(s=>s.length>=3&&(s.includes(t)||t.includes(s))))??null}var Wa=new Set(["garage","gate","door"]);function Ii(o,e){let n=new Set,t=new Set,r=i=>{if(!i||i==="none"||!o.states[i])return;let s=C(i);s==="light"?n.add(i):s==="cover"&&!Wa.has(String(o.states[i].attributes.device_class??""))&&t.add(i)};for(let i of e.rooms){let s=new Set(i.hidden??[]);for(let a of ro(o,fe(o,i.area_id)))s.has(a)||r(a)}for(let i of e.placements)r(i.entity_id);for(let i of e.furniture)r(i.entity);return{lights:[...n],covers:[...t]}}function La(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Ca(o,e,n){let t=n.target?.trim()??"";if(n.action==="navigate"&&t)history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(n.action==="more_info"&&t)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}));else if(n.action==="service"&&t.includes(".")){let[r,i]=t.split(".",2);o.callService(r,i,n.data??{})}else n.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:n.data??{},bubbles:!0,composed:!0}))}var Oa={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",phone_hint:"Zeichnen geht am besten am PC oder Tablet \u2013 auf dem Handy kannst du ansehen und bedienen.",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von Home 3D ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch Home 3D {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von Home 3D ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen und Leitungen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",floor_order_hint:"\xC4ndert nur die Reihenfolge der Etagen in der Liste und bei den Etagen-Bildern. Wo eine Etage im 3D-Haus liegt, bestimmt ihre \u201EH\xF6he \xFCber Boden\u201C.",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",show_menu:"Anzeige",tool_menu:"Werkzeug",floor_label:"Etage:",floor_settings:"Etagen-Einstellungen",floor_settings_of:"Etage {floor}",floor_none_hint:"Lege oben mit \u201EEtage\u201C \u2192 \u201EEtage hinzuf\xFCgen\u201C deine erste Etage an.",tool_group_build:"Bauen",tool_group_outside:"Drau\xDFen",tool_room:"Raum",view_menu:"Ansicht",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Grundriss komplett",fit_hint:"Den ganzen Grundriss der Etage ins Bild holen (bei Drau\xDFen mit Garten)",room:"Raum",rooms:"R\xE4ume",room_name:"Name",room_id:"ID (Karten-Option room:)",room_openings:"T\xFCren und Fenster",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",tech_open:"Technikraum zeichnen",tech_open_hint:"Danach auf die Wand im Plan tippen, an der deine Anlage h\xE4ngt.",tech_step:"Schritt {n}",tech_step_feed:"Tippe links auf \u201E{name}\u201C und dann auf die Stelle an der Wand, wo die Leitung hereinkommt (ganz unten: aus dem Boden).",tech_step_devices:"Tippe links auf Filterpumpe und Sandfilter \u2013 sie stellen sich an die Wand. W\xE4rmepumpe und Dosieranlage, wenn du sie hast.",tech_step_line:"Zieh eine Linie: von \u201E{a}\u201C zu \u201E{b}\u201C. Einfach auf das eine dr\xFCcken und zum anderen ziehen.",tech_step_loose:"Ein Rohr endet noch lose \u2013 zieh es weiter zu einem Ger\xE4t oder einer Leitung, oder l\xF6sche es (\u270B Ausw\xE4hlen).",tech_step_drawing:"Zieh weiter oder tippe Punkt f\xFCr Punkt \u2013 auf einem Ger\xE4t, einer Leitung oder einem Rohr endet die Linie.",tech_step_fit:"Tippe auf das Rohr, in das der Hahn (das Sichtglas) soll \u2013 es leuchtet orange auf.",tech_mode:"Pooltechnik",tech_mode_hint:"Den Technikraum auf dieser Wand zeichnen: Leitungen vom Pool hereinf\xFChren, Ger\xE4te hinstellen, Rohre ziehen",tech_draw:"Zeichnen",tech_ask:"Rohr liegt \u2013 soll es weiter zum Pool? Dann kommt hier ein Loch samt Weg nach drau\xDFen:",tech_ask_loose:"Offen lassen",tech_step_tee:"Tippe auf das Rohr, wo die Abzweigung hin soll \u2013 es wird dort geteilt, und von dem T-St\xFCck ziehst du die n\xE4chste Leitung.",tech_pick:"Ausw\xE4hlen",pool_delete_confirm:"Den Pool mit allen {n} Rohren l\xF6schen?",tech_erase:"Radieren",tech_erase_hint:"Tippe auf ein Rohr, einen Kugelhahn, ein Sichtglas oder ein Loch \u2013 es wird gel\xF6scht. Verzeichnet? R\xFCckg\xE4ngig hilft auch.",tech_feeds:"Leitungen vom Pool",tech_devices:"Ger\xE4te",tech_fittings:"Armaturen",tech_hint:"Wie mit einem Stift: auf ein Ger\xE4t dr\xFCcken und die Leitung ziehen \u2013 Zacken verschwinden, die Rohre laufen waagerecht und senkrecht. Endet der Strich auf einem Ger\xE4t oder Rohr, ist er dort angeschlossen; endet er im Leeren, fragt Home 3D, wohin die Leitung f\xFChrt (zum Skimmer, Bodenablauf, zu den Einl\xE4ssen, zum Kanal) und legt das Loch und den Weg drau\xDFen selbst.",tech_no_ports:"Setz zuerst mit dem Pool-Werkzeug Skimmer, Bodenablauf und Einl\xE4ufe an den Pool.",tech_ok:"Alles verbunden \u2013 das Wasser flie\xDFt.",tech_issue_loose:"{n} lose Rohrenden",tech_issue_port:"{name} nicht verbunden",tech_issue_feed:"{name} noch nicht hereingef\xFChrt",tech_feed_place:"Tipp auf die Stelle, wo die Leitung in den Raum kommt \u2013 ganz unten: aus dem Boden, h\xF6her: durch die Wand.",tech_start:"Auf ein Ger\xE4t oder eine Leitung tippen und eine Linie ziehen.",feed_skimmer:"Skimmer",feed_drain:"Bodenablauf",feed_inlet:"Einl\xE4ufe",feed_waste:"Kanal (R\xFCcksp\xFClen)",hp_ports:"Anschl\xFCsse",hp_side_right:"rechts",hp_side_left:"links",hp_side_back:"hinten",pool_depth:"Beckentiefe (m)",pool_rim:"Rand \xFCber dem Rasen (m)",pool_depth_hint:"Beckentiefe: vom Rand bis zum Boden. Ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. Das Wasser steht 15 cm unter dem Rand.",pool_depth_ground:"Die Tiefe zeigt sich in 3D, sobald der Pool in einer Rasen-, Terrassen- oder anderen Fl\xE4che liegt \u2013 ohne Boden drumherum w\xE4re das Becken von au\xDFen zu sehen.",pool_port_depth:"Tiefe",pool_port_depth_hint:"Wie tief unter der Wasserlinie (m): Einl\xE4ufe meist 0,30, der Skimmer an der Wasserlinie",block_some_fixed:"\u{1F512} Ein Teil davon ist fixiert \u2013 der Block l\xE4sst sich erst verschieben, wenn alle gel\xF6st sind.",unfix_all:"Alle l\xF6sen",wv_block_all:"Ganzer Block",wv_block_one:"Nur dieses Teil",wv_gap:"L\xFCcke: {w} \u2013 das passt hinein:",wv_gap_hint:"Tipp auf eine freie Stelle an der Wand: Hier erscheint, was hineinpasst.",wv_kit_title:"An die Wand",wv_recent:"Zuletzt benutzt",wv_none_fits:"Nichts passt in diese L\xFCcke.",wv_cat_base:"Unterschr\xE4nke & Boards",wv_cat_hang:"H\xE4ngend",wv_cat_tall:"Hochschr\xE4nke",wv_cat_living:"Sitzen & Liegen",wv_cat_light:"Leuchten",wv_cat_pack:"Aus deinen Packs",wv_cat_energy:"Energie",block_title:"M\xF6bel-Block",multi_title:"{n} M\xF6bel ausgew\xE4hlt",block_hint:"Ein Klick w\xE4hlt den ganzen Block, Ziehen verschiebt ihn. Ein einzelnes Teil: doppelt antippen oder unten seinen Namen w\xE4hlen.",multi_hint:"Umschalt + Klick nimmt M\xF6bel dazu oder heraus, Umschalt + Ziehen \xFCber freie Fl\xE4che zieht einen Rahmen. Zusammen verschieben, drehen, kopieren oder als Block zusammenfassen.",block_part_edit:"Nur dieses Teil bearbeiten",block_break:"Block aufl\xF6sen",block_make:"Als Block zusammenfassen",multi_mode:"Mehrere ausw\xE4hlen (Tippen nimmt dazu, Ziehen zieht einen Rahmen)",block_part:"Teil eines Blocks.",block_select:"Ganzen Block w\xE4hlen",block_delete:"{n} M\xF6bel l\xF6schen?",block_delete_fixed:"{n} M\xF6bel l\xF6schen? Einige davon sind fixiert.",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",side_resize:"Seitenleiste breiter oder schmaler ziehen",furn_extra:"Zusatzwert am Symbol (Sensor, z. B. Wassertemperatur)",settings_house:"Haus",settings_weather:"Wetter & Warnungen",roof_basics:"Dachform",voice_sentences_kept:"Die Satzdatei f\xFCr {langs} hast du selbst ge\xE4ndert \u2013 Home 3D l\xE4sst sie unangetastet.",voice_sentences_failed:"Die Satzdatei lie\xDF sich nicht schreiben.",voice_sentences_file:"Home 3D legt die Datei custom_sentences/<Sprache>/home_3d.yaml erst an, wenn du hier S\xE4tze w\xE4hlst. Eine Datei, die du selbst ge\xE4ndert hast, wird nie \xFCberschrieben; beim Entfernen der Integration wird die Datei von Home 3D gel\xF6scht.",pendant_shape:"Form",pendant_shade:"Schirm",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",editors_title:"Bearbeiter",editors_hint:"Wer den Plan \xE4ndern darf. Alle anderen sehen das Haus und bedienen die Ger\xE4te, ohne Editor. Ohne Auswahl sind es alle Admins.",editors_admin:"Admin",editors_reset:"Zur\xFCck zu: alle Admins",editors_no_admin:"Mindestens ein Admin muss Bearbeiter bleiben.",editors_failed:"Die Bearbeiter lie\xDFen sich nicht speichern.",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein Floorplan-3D-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von Home 3D.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht pr\xFCfbar oder f\xFCr eine andere Installation): {packs}.",export_name_full:"komplett",item_actions:"Eigene Aktionen",item_actions_hint:"Was Tippen, Halten und Doppeltippen in 3D tun. \u201EStandard\u201C l\xE4sst es beim \xDCblichen f\xFCr diese Art Ger\xE4t. Alles l\xE4uft \xFCber Home Assistant; jeder, der die Ansicht sieht, kann sie ausl\xF6sen.",item_gesture_tap:"Tippen",item_gesture_hold:"Halten",item_gesture_double_tap:"Doppeltippen",item_action_default:"Standard",item_action_none:"Nichts",item_action_toggle:"Umschalten",item_action_more_info:"Details \xF6ffnen",item_action_camera:"Kamera \xF6ffnen",item_action_navigate:"Dashboard-Seite \xF6ffnen",item_action_url:"Adresse \xF6ffnen",item_action_perform_action:"Aktion ausf\xFChren",item_target_toggle:"Entit\xE4t (leer = die eigene)",item_target_more_info:"Entit\xE4t (leer = die eigene)",item_target_camera:"Kamera (leer = die eigene)",item_target_navigate:"Pfad",item_target_url:"Adresse",item_target_perform_action:"Aktion (Dom\xE4ne.Dienst)",item_action_confirm:"Vorher nachfragen",item_action_confirm_text:"Frage",item_action_confirm_placeholder:"Wirklich ausf\xFChren?",action_confirm_title:"Nachfrage",action_confirm_ok:"Ausf\xFChren",action_confirm_default:"{name}: wirklich ausf\xFChren?",action_this_item:"Dieses Teil",action_failed:"Die Aktion ist fehlgeschlagen: {error}",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"Home 3D",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_busy_solar:"Solarmodule",stats_busy_sound:"Musik",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_blend:"\xDCberblendung",through_back:"Zur\xFCck zur Ansicht",through_full:"Vollbild",through_full_hint:"Das Kamerabild auf dem ganzen Bildschirm (Esc oder Zur\xFCck beendet es). Wo der Browser das nicht kann, \xF6ffnet sich die Kameraansicht von Home Assistant \u2013 dort auch mit Ton.",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"Erkennung (Kamera-Cockpit): {n} Sensoren am Ger\xE4t gefunden \u2013 {kinds}. Meldet einer gerade etwas, steht in der 3D-Ansicht ein Pin vor der Kamera; die Kamera-Wand (Schalter \u201EKameras\u201C unten in der 3D-Ansicht) zeigt alle Livebilder.",camera_detect_none:"Erkennung (Kamera-Cockpit): Am Ger\xE4t dieser Kamera gibt es keine Bewegungs- oder Erkennungssensoren. Pins erscheinen, sobald die Integration welche liefert (Frigate, UniFi Protect, Reolink \u2026).",camera_detect_choose:"Erkennungs-Sensoren selbst w\xE4hlen",camera_detect_choose_hint:"Nur die angehakten Sensoren z\xE4hlen f\xFCr Pins, Bewegungsspur und Live-Regie \u2013 auch Sensoren eines anderen Ger\xE4ts, z. B. Frigates Personen-Sensor f\xFCr eine Reolink-Kamera. Ohne Haken nimmt Home 3D alle Sensoren am Ger\xE4t der Kamera.",camera_detect_add:"Sensor hinzuf\xFCgen",camera_cone:"Sichtkegel in 3D zeigen",camera_detect_pins:"Erkennungs-Symbole zeigen (Person, Auto, Tier)",camera_detect_pins_hint:"Aus: Bei einer Erkennung erscheinen keine Symbole \xFCber der Kamera, nur der Sichtkegel f\xE4rbt sich rot \u2013 dezenter auf dem Wandtablet.",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",view_settings:"Einstellungen",view_settings_admin:"Nur Administratoren k\xF6nnen diese Einstellungen \xE4ndern \u2013 sie gelten f\xFCr das ganze Haus.",view_settings_look:"Darstellung",view_settings_alerts:"Warnungen",view_settings_more:"Alle weiteren Einstellungen findest du im Editor unter \u2699 Einstellungen.",lines_add:"Hinzuf\xFCgen",lines_new:"Neuer Eintrag \u2026",sheet_mic:"Sprechen",sheet_listening:"Ich h\xF6re zu \u2026",sheet_mic_failed:"Nichts verstanden \u2013 das Mikrofon braucht HTTPS und eine Sprach-Pipeline mit Spracherkennung.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m}. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort stellst du auch Auto Pro ein (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck. Bei einer Kamera bleibt der Pin mit allen Kamera-Einstellungen, das Modell kommt nur dazu.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",camera_look_builtin:"Standard-Kameramodell",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang & Kino)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",media_play_head:"Abspielen",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",wall_view:"Wandansicht",walk_start:"Rundgang durchs Haus",walk_title:"Rundgang",walk_end:"Beenden",walk_hint:"Ziehen: umsehen \xB7 Tippen auf den Boden: hinlaufen \xB7 W A S D / Pfeiltasten oder der Kn\xFCppel: laufen \xB7 Esc: beenden",card_next:"n\xE4chster Schritt \u2026",card_step_hole:"Durch ein Loch",card_step_fit:"Einbauen",card_step_end:"Oder ans Ziel",card_lay:"Verlegen",card_hole_out:"nach au\xDFen",card_hole_in:"nach innen",card_to:"Verbinden mit",card_through:"\xDCber (in Reihenfolge, wenn n\xF6tig)",card_group_pool:"Am Pool",card_group_tech:"Technik",card_group_joints:"T- und Y-St\xFCcke",card_group_holes:"L\xF6cher",card_open:"Anschl\xFCsse",card_open_other:"Karte dieses Teils \xF6ffnen",card_port:"Anschluss",card_via:"\xFCber",card_reroute:"Neu verlegen",card_disconnect:"Trennen",card_with:"verbinden mit \u2026",card_connect:"Verbinden",card_connect_with:"Verbinden mit \u2026",card_status:"{a} von {b} verbunden",card_show_plan:"Im Grundriss zeigen",card_show_wall:"In der Wandansicht zeigen",joint_name:"Name (z. B. Loch Skimmer)",conn_hole_out:"{name}: von innen nach au\xDFen",conn_hole_in:"{name}: von au\xDFen nach innen",hint_joint_place:"T- oder Y-St\xFCck: im Grundriss tippen \u2013 auf ein Rohr getippt, wird es ins Rohr eingesetzt",port_suction:"Saugseite",port_pressure:"Druckseite",port_pump:"Von der Pumpe",port_return:"R\xFCcklauf",port_waste:"Abwasser",port_in:"Eingang",port_out:"Ausgang",port_out1:"Ausgang 1",port_out2:"Ausgang 2",port_inside:"innen",port_outside:"au\xDFen",port_used:"belegt",joint_tee:"T-St\xFCck {n}",joint_y:"Y-St\xFCck {n}",joint_wall:"Loch {n} (Wand)",joint_floor:"Loch {n} (Boden)",joint_add_tee:"T-St\xFCck",joint_add_y:"Y-St\xFCck",wall_kit_hole_wall:"Loch in der Wand",wall_kit_hole_floor:"Loch im Boden",wall_kit_tee:"T-St\xFCck",wall_kit_y:"Y-St\xFCck",wall_run_place:"Auf die Wand tippen, wo es hin soll",valve_top6:"6-Wege-Ventil oben",valve_side6:"6-Wege-Ventil seitlich",valve_four:"4-Wege-Ventil",pool_valve_type:"Mehrwegeventil",pool_loose_end:"offenes Ende",pool_holes_hint:"L\xF6cher in Wand und Boden setzt du in der Wandansicht (Leiste links).",conn_add:"Rohr hinzuf\xFCgen",conn_from:"Von",conn_via:"\xDCber (in Reihenfolge)",conn_add_via:"+ Loch, Kugelhahn, Sichtglas \u2026",conn_to:"Nach",conn_and:"Und nach (zweites Ziel, mit T-St\xFCck davor)",conn_choose:"w\xE4hlen \u2026",conn_create:"Anlegen",conn_hint:"Der Weg wird automatisch gelegt \u2013 drinnen an den Anschl\xFCssen entlang, drau\xDFen rechtwinklig unter der Erde. Feinverlegen in der Wandansicht und im Grundriss.",wall_kit_pool:"Pooltechnik",wall_kit_energy:"Energie",wall_run_add:"+ Rohr",wall_run_start:"Rohr: am Ger\xE4t, auf einem Rohr (T-St\xFCck) oder auf der Wand anfangen",wall_run_next:"Weitere Punkte setzen \u2013 am Ger\xE4t oder auf einem Rohr endet es, Doppelklick oder Enter beendet",wall_run_down:"\u2193 In den Boden",wall_run_through:"\u27C2 Durch die Wand",wall_run_done:"Fertig",wall_run_fit:"Auf das Rohr tippen, wo es hin soll",wall_run_valve:"Kugelhahn",wall_run_sight:"Sichtglas",wall_run_pipe:"Rohr",wall_run_pt:"H\xF6he des Punkts (m)",wall_run_more:"Weiterzeichnen",wall_run_tip:"Punkte ziehen \xB7 Doppelklick entfernt \xB7 Kugelhahn antippen: auf/zu",wall_view_turn:"Um 45\xB0 drehen \u2013 an der Wand r\xFCckt es in den Raum",wall_view_fixed:"Fixiert \u2013 zum Ziehen erst l\xF6sen",wall_view_3d:"3D im Raum",wall_view_lift:"Nach oben oder unten ziehen: H\xF6he \xFCber Boden",wall_zoom_hint:"Vergr\xF6\xDFern: Mausrad oder zwei Finger",wall_zoom_all:"Ganze Wand",wall_view_hint_3d:"M\xF6bel antippen und auf dem Boden ziehen \xB7 Mausrad oder zwei Finger: n\xE4her oder weiter weg \xB7 mittlere oder rechte Maustaste (am Tablet zwei Finger): umsehen \xB7 unten Abst\xE4nde und H\xF6he eintippen \xB7 Pfeile links und rechts: zur n\xE4chsten Wand",wall_view_front:"Wand von vorne",wall_view_depth:"Abstand zur Wand (m)",wall_view_room:"W\xE4nde dieses Raums von vorne ansehen",hint_wall_pick:"Wandansicht: in den Raum klicken (oder nah an eine Wand)",wall_view_open:"Die Wand von vorne ansehen: M\xF6bel daran entlang der Wand und in der H\xF6he verschieben",wall_view_hint:"Ziehen verschiebt entlang der Wand und \u2013 bei H\xE4ngendem \u2013 in der H\xF6he \xB7 Pfeiltasten 1 cm, mit Umschalt 10 cm \xB7 Kanten rasten an Wandenden, T\xFCren, Fenstern und anderen M\xF6beln ein (Alt: frei) \xB7 Doppelklick \xF6ffnet das M\xF6bel im Grundriss",wall_view_empty:"An dieser Wand steht noch nichts \u2013 M\xF6bel, die mit dem R\xFCcken an der Wand stehen oder daran h\xE4ngen, erscheinen hier.",wall_view_left:"Abstand von links (m)",wall_view_floor:"steht auf dem Boden",wall_view_form:"Im Grundriss bearbeiten",wall_prev:"Vorige Wand",wall_next:"N\xE4chste Wand",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",director:"Live-Regie",director_hint:"Ein Bildschirm zeigt von selbst, was im Haus passiert: Es klingelt \u2013 die Ansicht fliegt zur Haust\xFCr und schaut durch die Kamera. Jedes Ereignis ist aus, bis du es einschaltest.",director_here:"Auf diesem Ger\xE4t einschalten",director_here_hint:"Gilt nur f\xFCr diesen Browser, z. B. das Wandtablet. Auf einer Dashboard-Karte schaltest du die Live-Regie in den Karten-Einstellungen ein.",director_doorbell:"Es klingelt: zur T\xFCr fliegen und durch die Kamera schauen",director_doorbell_entity:"Klingel",director_doorbell_camera:"Kamera an der T\xFCr",director_no_doorbell:"Keine Klingel gefunden. W\xE4hle die Ereignis- oder Bin\xE4rsensor-Entit\xE4t deiner Klingel.",director_motion:"Eine Kamera sieht jemanden",director_motion_off:"Aus",director_motion_person:"Nur Personen",director_motion_all:"Jede Bewegung",director_appliances:"Waschmaschine, Trockner oder Sp\xFClmaschine fertig",director_alerts:"Neue Warnung (Rauch, Wasser, Alarm, Fenster bei Regen \u2026)",director_hold:"Zur\xFCck nach (Sekunden)",director_back_hint:"Danach kehrt die Ansicht dorthin zur\xFCck, wo sie war \u2013 au\xDFer jemand hat den Bildschirm inzwischen ber\xFChrt. Wer das Tablet gerade bedient, wird nur von der Klingel und von Warnungen unterbrochen. Die Klingel bleibt doppelt so lange.",voice:"Sprachsteuerung",voice_hint:"Ein Mikrofon-Knopf unten links in der 3D-Ansicht: antippen und sprechen. \u201EZeig das Wohnzimmer\u201C, \u201EObergeschoss\u201C oder \u201Edas ganze Haus\u201C zeigt den Ort; alles andere (\u201ELicht im Flur an\u201C) geht an Assist von Home Assistant.",voice_here:"Auf diesem Ger\xE4t einschalten",aliases:"Weitere Namen f\xFCr die Sprache",aliases_hint:"Weitere Namen, mit Komma getrennt \u2013 so sprichst du den \u201ESmart TV Pro\u201C als \u201EWohnzimmerfernseher\u201C oder \u201EGlotze\u201C an. Gilt f\xFCr die Sprachsteuerung und die Suche.",aliases_placeholder:"z. B. Wohnzimmerfernseher, Glotze",voice_understands:"Das versteht Home 3D",voice_examples:"\u201EZeig das Wohnzimmer\u201C|\u201EGeh ins Obergeschoss\u201C|\u201EZeig das ganze Haus\u201C|\u201EZeig die Waschmaschine\u201C / \u201EWo ist der Trockner?\u201C|\u201EZeig die Kamera Haust\xFCr\u201C / \u201EZeig die Auffahrtkamera\u201C|\u201EZeig die Kameras\u201C|Alles andere (\u201ELicht im Flur an\u201C) geht an Assist",voice_needs:"Braucht https, die Freigabe des Mikrofons (in Fully Kiosk: Web Content Settings \u2192 Mikrofonzugriff) und eine Assist-Pipeline mit Spracherkennung. Auf einer Dashboard-Karte schaltest du den Knopf in den Karten-Einstellungen ein.",voice_showing:"Ich zeige {name}.",screen_name:"Bildschirmname (f\xFCr Assist)",screen_name_placeholder:"z. B. K\xFCche",screen_name_hint:"Fragst du Assist (\u201EZeig das Wohnzimmer\u201C) oder ruft eine Automation den Dienst home_3d.ask, reagiert jede offene Home-3D-Ansicht. Nennt der Dienst einen Bildschirm, reagiert nur die Ansicht mit diesem Namen.",voice_button:"Sprechen",voice_listen:"Ich h\xF6re zu \u2026",voice_none:"Nichts verstanden",voice_silent:"Das Mikrofon liefert nur Stille. Meist h\xE4lt eine andere App es fest \u2013 in Fully Kiosk die Bewegungserkennung per Ger\xE4usch ausschalten (Motion Detection \u2192 Acoustic Detection) und neu laden.",voice_no_pipeline:"Keine Spracherkennung in Assist eingerichtet (Einstellungen \u2192 Sprachassistenten).",voice_denied:"Mikrofon nicht freigegeben \u2013 nur \xFCber https und mit Freigabe im Browser bzw. in Fully Kiosk.",voice_error:"Sprachsteuerung: {msg}",card_voice:"Sprachsteuerung (Mikrofon-Knopf)",card_voice_hint:"\u201EZeig das Wohnzimmer\u201C zeigt den Raum, andere S\xE4tze gehen an Assist. Braucht https und ein freigegebenes Mikrofon",director_mic_test:"\u{1F399}\uFE0F Mikrofon testen",director_mic_hint:"Pr\xFCft auf diesem Ger\xE4t https, Mikrofon und die Spracherkennung von Assist und zeigt, welchen Raum ein Satz \xF6ffnen w\xFCrde. Es wird nichts geschaltet.",voice_pipeline:"Assist-Pipeline auf diesem Ger\xE4t",voice_sentences:"S\xE4tze f\xFCr Assist",voice_sentences_distinct:"Nur eindeutige (\u201EZeig \u2026\u201C, \u201EFrag das Haus \u2026\u201C, \u201EHome 3D, \u2026\u201C)",voice_sentences_all:"Alle Fragen (f\xE4ngt auch S\xE4tze ab, die Home Assistant selbst beantwortet)",voice_sentences_off:"Keine (Standard \u2013 keine Satzdatei)",voice_sentences_hint:"Was Assist an Home 3D weitergibt. Fragen wie \u201EWelche Fenster sind offen?\u201C beantwortet Home Assistant sonst selbst \u2013 mit \u201EFrag das Haus, welche Fenster offen sind\u201C erreichst du immer Home 3D.",voice_pipeline_preferred:"Bevorzugte aus Home Assistant",voice_pipeline_no_stt:"ohne Spracherkennung",backdrop:"Hintergrund",backdrop_kind:"Hinter dem Haus",backdrop_look:"Himmel des Looks (Standard)",backdrop_color:"Eine Farbe",backdrop_gradient:"Farbverlauf",backdrop_image:"Bild",backdrop_top:"Farbe oben",backdrop_bottom:"Farbe unten",backdrop_image_url:"Bild-Adresse",backdrop_dim:"Abdunkeln",backdrop_image_bad:"Diese Adresse geht nicht: https://\u2026 oder ein Pfad wie /local/hintergrund.jpg",backdrop_hint:"Das Bild legst du in Home Assistant unter config/www ab, dann hei\xDFt es /local/dateiname.jpg. Das Abdunkeln h\xE4lt die Neonlinien lesbar. Kostet keine Leistung \u2013 auch auf alten Tablets.",director_live:"Livebild beim Durchschauen",director_live_hint:"Statt eines Standbilds alle paar Sekunden l\xE4uft das Video der Kamera (\xFCber den Player von Home Assistant). Braucht mehr Leistung \u2013 auf sehr alten Tablets lieber aus lassen.",director_triggers:"Eigene Ausl\xF6ser",director_triggers_hint:"Geht eine dieser Entit\xE4ten an oder auf \u2013 eine zweite Klingel, das Garagentor, das Gartentor \u2013, fliegt die Ansicht hin und schaut durch die gew\xE4hlte Kamera (ohne Kamera: zum Ger\xE4t).",director_trigger_entity:"Ausl\xF6ser",director_trigger_add:"+ Ausl\xF6ser hinzuf\xFCgen",card_director:"Live-Regie (Kamera-Cockpit)",card_director_hint:"Die Karte zeigt von selbst, was passiert. Welche Ereignisse, legst du im Editor unter \u201ELive-Regie\u201C fest.",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern (Pro: Kamera-Cockpit).",card_motion_trail_hint:"Wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit (Bewegungs-, Pr\xE4senz- und Kamerasensoren)",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Kamera-Wand: alle Livebilder auf einmal; Antippen zeigt ein Bild gro\xDF, ein roter Rahmen zeigt Bewegung",camera_wall_all:"Alle Kameras",camera_still:"Standbild, alle {s} s neu",camera_wall_big:"Bild gro\xDF zeigen",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",rain_entity:"Regen von eigener Wetterstation",rain_entity_hint:"Ein Regensensor (an = Regen) oder eine Regenrate (mm/h) deiner Wetterstation sagt, ob es am Haus regnet \u2013 f\xFCr die Regenwarnung und den Regen in 3D. Ohne Auswahl entscheidet die Wetter-Entit\xE4t.",rain_ignore:"Bei Regen nicht warnen",rain_ignore_hint:"Dieses Fenster darf bei Regen offen bleiben (z. B. unter dem Vordach): keine Regenwarnung f\xFCr dieses Fenster, alle anderen warnen weiter.",outage_entity:"Stromausfall melden mit",outage_entity_hint:"Eine Entit\xE4t, die einen Stromausfall meldet: ein Netz-Sensor (binary_sensor der Klasse power \u2013 \u201Eaus\u201C hei\xDFt kein Strom), eine USV (\u201Eauf Batterie\u201C), eine Netzspannung unter 100 V oder ein eigener Helfer, der bei Ausfall \u201Ean\u201C ist. Dann erscheint eine Warnung, und der Netzanschluss wird durchgestrichen.",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",sun_shadow:"Sonnenbahn und Hausschatten",sun_shadow_hint:"\xDCber dem Haus zeigt ein Bogen den Weg der Sonne heute mit Auf- und Untergang, auf dem Boden liegt der Schatten des Hauses und wandert mit der Sonne. Braucht die Nordrichtung; auf der Stufe \u201ETablet\u201C nur der Bogen.",window_glow:"Fenster leuchten nachts nach drau\xDFen",window_glow_hint:"Ist es drau\xDFen dunkel, f\xE4llt das Licht beleuchteter R\xE4ume durch die Fenster als warmer Schein auf Rasen und Terrasse davor \u2013 in der Lichtfarbe des Raums, schw\xE4cher hinter heruntergelassenen Rolll\xE4den.",weather_entity_hint:"Die Wetter-Entit\xE4t liefert Regen, Schnee, Nebel und Wolken f\xFCr die 3D-Ansicht; \u201Eautomatisch\u201C nimmt die erste.",weather_hint:"Wetter drau\xDFen: Regen, Schnee, Nebel und Wolken aus der Wetter-Entit\xE4t, Sonne und Mond nach sun.sun",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Nebel und Wolken aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet nur die Bew\xF6lkung",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",alert_power_outage:"Stromausfall: {name}",alert_contact_unavailable:"Kontakt nicht verf\xFCgbar: {name}",alert_short_contact_unavailable:"Kontakt nicht verf\xFCgbar",alert_unavailable:"Warnen, wenn ein Fenster- oder T\xFCrkontakt nicht verf\xFCgbar ist",alert_unavailable_hint:"Ist ein Kontakt 10 Minuten lang \u201Enicht verf\xFCgbar\u201C (leere Batterie, au\xDFer Funkreichweite), sieht das Fenster in 3D zu aus, obwohl es niemand wei\xDF. Dann kommt eine Warnung.",alert_names:"Ger\xE4tenamen in Warnungen zeigen",alert_names_hint:"An: \u201EK\xFCche \xB7 Rauch: Rauchmelder K\xFCche\u201C. Aus: nur \u201EK\xFCche \xB7 Rauch\u201C \u2013 k\xFCrzer auf dem Wandtablet. Ohne Raum bleibt der Ger\xE4tename stehen.",alert_short_smoke:"Rauch",alert_short_gas:"Gas",alert_short_co:"Kohlenmonoxid",alert_short_water:"Wasser",alert_short_alarm:"Alarm ausgel\xF6st",alert_short_alarm_pending:"Alarm wird ausgel\xF6st",alert_short_window_rain:"Fenster offen bei Regen",alert_short_power_outage:"Stromausfall",power_outage:"Stromausfall",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein Floorplan-3D-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_pets:"Haustiere zeigen",card_ghost:"Halloween-Geist zeigen",card_ghost_hint:"Fun-Pack Halloween: der Geist schwebt auch durch das Haus dieser Karte (z. B. am Wandtablet ausschalten)",card_pets_hint:"Fun-Pack Haustiere: die angelegten Tiere in dieser Karte zeigen (z. B. am Wandtablet ausschalten)",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Hologramme",holos_hint:"Hologramme der Anlage und der Ger\xE4te ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen (Energie Pro)",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof:"Dach zeigen",card_roof_hint:"Aus: Das Haus erscheint ohne Dach, als h\xE4tte es keins \u2013 die R\xE4ume liegen offen (Solarfelder auf dem Dach entfallen mit)",room_order_up:"Raum nach oben (fr\xFCher in der Raumleiste)",room_order_down:"Raum nach unten (sp\xE4ter in der Raumleiste)",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",ext_show_list:"Liste zeigen",ext_hide_list:"Liste zuklappen",ext_sum_packs:"M\xF6bel-Packs ({items} M\xF6bel)",packs_hint:"M\xF6bel-Packs sind JSON-Dateien (Format \u201Efp3dpack\u201C, siehe docs/packs.md); beim Import wird ihr Inhalt gepr\xFCft.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",license_copy:"Kopieren",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",pack_features:"von {publisher} \xB7 Pro-Funktionen: {n}",pack_needs_update:"Diese Erweiterung braucht eine neuere Home-3D-Version \u2013 bitte Home 3D aktualisieren (HACS) und die Seite neu laden.",pro_title:"Nicht verf\xFCgbar",pro_feature_camera_cockpit:"Kamera-Cockpit: durch die Kamera schauen, Bewegungsspur, Kamera-Wand und Erkennungs-Pins (Person, Fahrzeug, Tier)",pro_name_camera_cockpit:"Kamera-Cockpit",pro_name_weather:"Wetter drau\xDFen",pro_name_screens:"Bildschirme live",pro_name_energy_pro:"Energie Pro",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",ext_intro:"Die eingebauten Funktionen von Home 3D, die Spa\xDF-Extras und deine M\xF6bel-Packs. Alles l\xE4uft lokal in Home Assistant.",ext_pro:"Eingebaute Funktionen",fun_title:"Fun-Packs",fun_intro:"Extras zum Spa\xDF \u2013 hier schaltest du sie ein und aus.",fun_name_pets:"Haustiere",fun_feature_pets:"Katze, Hund oder Kaninchen leben in deinem 3D-Haus: Sie laufen durch die R\xE4ume, legen sich aufs Sofa, aufs Bett oder auf den Teppich und schlafen nachts.",fun_name_halloween:"Halloween",fun_feature_halloween:"K\xFCrbisse, die mit einem Licht leuchten, Spinnennetz, Flederm\xE4use, Grabsteine, Skelett, Hexenkessel und Kerzen \u2013 und ein Geist, der ab und zu durchs Haus schwebt.",halloween_ghost:"Geist schweben lassen",halloween_deco_hint:"Die Deko findest du im Editor in der M\xF6bel-Bibliothek unter \u201EFun-Pack: Halloween\u201C. K\xFCrbis, Kessel und Kerzen leuchten mit einem verkn\xFCpften Licht.",pets_show:"Haustiere zeigen",pet_add:"Haustier hinzuf\xFCgen",pet_name:"Name",pet_kind:"Tier",pet_kind_cat:"\u{1F431} Katze",pet_kind_dog:"\u{1F436} Hund",pet_kind_rabbit:"\u{1F430} Kaninchen",pet_fur:"Fell",pet_fur_orange:"Rot",pet_fur_tabby:"Getigert",pet_fur_black:"Schwarz",pet_fur_white:"Wei\xDF",pet_fur_grey:"Grau",pet_fur_brown:"Braun",pet_fur_calico:"Gl\xFCckskatze",pet_fur_golden:"Golden",pet_fur_cream:"Creme",pet_breed:"Rasse",pet_breed_dachshund:"Dackel",pet_breed_pug:"Mops",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Sch\xE4ferhund",pet_floor:"Etage",pet_floor_auto:"Erdgeschoss",pet_mode:"Verhalten",pet_roaming:"L\xE4uft herum",pet_static:"Bleibt an seinem Platz",pet_pose:"Haltung",pet_pose_sit:"Sitzt",pet_pose_lie:"Liegt",pet_pose_curl:"Eingerollt",pet_turn:"Blickrichtung",pet_turn_auto:"Automatisch",pet_static_hint:"Im Grundriss-Editor an seinen Platz ziehen.",ext_active:"aktiv",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",ext_teaser_title:"Mehr M\xF6bel und Pro-Funktionen",ext_teaser_text:"M\xF6bel-Packs und die eingebauten Funktionen findest du oben unter \u201EErweiterungen\u201C.",pro_feature_weather:"Wetter drau\xDFen: Regen, Schnee, Wolken, Sonne und Mond",pro_feature_screens:"Bildschirme live: App-Farbe und Cover des Media Players, Bildregeln, Kamera-Livebild auf Bildschirmen",pro_feature_energy_pro:"Energie Pro: Stromfluss-Leitungen durchs Haus, lebende Solarmodule, Glas-Hologramme f\xFCr Anlage und Ger\xE4te, Gas- und Wasserverbrauch von heute \u2013 W\xE4rme folgt als Update",pro_name_sound:"Klang & Kino",pro_feature_sound:"Klang & Kino: Lautsprecher zeigen Cover, Titel und Lautst\xE4rke als Glaskarte, Schallringe um spielende Lautsprecher, Multiroom-Gruppen als Linien, Schnellmen\xFC mit Play, Pause, Titelwechsel und Lautst\xE4rke",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: Das Auto auf dem Stellplatz zeigt Ladestand, Reichweite, Laden, Verriegelung und Klima aus seiner Integration \u2013 Lichtband in der Ladestandsfarbe, Pin mit Prozent und Kilometern, Schnellmen\xFC mit Verriegeln, Klima und Laden, \u201Eunterwegs\u201C mit Standort",pro_name_time_travel:"Zeitreise",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (Modul): Das Wasser leuchtet in der Farbe der Poolbeleuchtung und bewegt sich, wenn die Filterpumpe l\xE4uft; die Glaskarte zeigt Wassertemperatur, W\xE4rmepumpe mit Solltemperatur, pH, Chlor/Redox und Salz mit Ampel; die Abdeckung f\xE4hrt \xFCber das Wasser; Warnungen bei pH, Chlor, Salz und Frost; die Pooltechnik baut sich auf Knopfdruck auf, das Wasser flie\xDFt sichtbar durch die Rohre",pool_pump:"Filterpumpe",pool_ph:"pH-Wert",pool_shape:"Form",pool_shape_rect:"Eckig",pool_shape_round:"Rund",pool_shape_oval:"Oval",pool_diameter:"Durchmesser (m)",pool_shape_free:"Frei",tool_pool:"Pool",hint_pool:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen",hint_pool_tech:"Form w\xE4hlen und den Pool aufziehen \xB7 Pool antippen zum Ausw\xE4hlen \xB7 Anschl\xFCsse, Ger\xE4te und Rohre rechts",hint_pipe_start:"Rohr: Start antippen (Anschluss oder Ger\xE4t)",hint_pipe_pool:"Rohr: zuerst den Pool antippen, zu dem die Rohre geh\xF6ren",hint_pipe_next:"Ecken antippen, dann das Ziel (Anschluss oder Ger\xE4t) \xB7 Esc bricht ab",pool_tool_empty:"Noch kein Pool auf dieser Etage: W\xE4hle oben die Form und ziehe den Pool auf.",pool_choose:"Welchen Pool bearbeiten?",pool_ports:"Anschl\xFCsse",pool_ports_hint:"Skimmer und Einl\xE4sse sitzen am Beckenrand, der Bodenablauf im Becken; der Abwasser-Anschluss nimmt das R\xFCcksp\xFClwasser auf. Im Plan verschieben.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bodenablauf",pool_port_inlet:"Einlass",pool_port_waste:"Abwasser",pool_devices:"Technik",furn_pool_pump:"Filterpumpe",furn_pool_filter:"Sandfilter",furn_pool_heat_pump:"W\xE4rmepumpe",furn_pool_dosing:"Dosieranlage",furn_pool_valve:"Kugelhahn",pool_valve_position:"Stellung des 6-Wege-Ventils",valve_filter:"Filtern",valve_backwash:"R\xFCcksp\xFClen",valve_rinse:"Nachsp\xFClen",valve_waste:"Entleeren",valve_recirculate:"Zirkulieren",valve_closed:"Geschlossen",pool_valve_open:"offen",pool_pipes:"Rohre",pool_pipe_draw:"Rohr zeichnen",pool_pipe_draw_hint:"Rohre verbinden Anschl\xFCsse und Ger\xE4te in Flie\xDFrichtung: vom Skimmer zur Pumpe, weiter zum Filter, \xFCber W\xE4rmepumpe oder Bypass zu den Einl\xE4ssen. An einer Verteilung flie\xDFt das Wasser \xFCber die W\xE4rmepumpe, solange sie an ist, sonst \xFCber den Bypass; ein geschlossener Kugelhahn sperrt. Kugelhahn im Plan antippen: auf/zu.",pool_pipe_height:"H\xF6he \xFCber Boden (m)",pool_pipe_reverse:"Flie\xDFrichtung umdrehen",pool_above:"Aufstellpool (steht auf dem Boden)",pool_above_hint:"Ein Pool, der auf dem Boden steht, statt eingelassen zu sein: Wand rundum, das Wasser knapp unter dem Rand.",pool_height:"Beckenh\xF6he",pro_feature_time_travel:"Zeitreise: Ein Zeitregler spielt bis zu 7 Tage im Haus ab \u2013 Lichter, T\xFCren, Fenster, Rolll\xE4den, Bewegung, Heizung, Wetter und Sonne, mit Ereignis-Markern. Nur ansehen, nichts wird geschaltet",tt_chip:"Zeitreise",tt_hint:"Bis zu 7 Tage im Haus abspielen (nur ansehen, nichts wird geschaltet)",tt_badge:"ZEITREISE",tt_live:"Live",tt_live_hint:"Zur\xFCck zur Gegenwart",tt_play:"Abspielen",tt_pause:"Anhalten",tt_prev:"Voriges Ereignis",tt_next:"N\xE4chstes Ereignis",tt_speed:"Tempo: 1 Stunde in {s}",tt_now:"jetzt",tt_ago:"vor {d}",tt_since:"seit {time}",tt_loading:"Lade Verlauf \u2026",tt_error:"Verlauf nicht geladen: {error}",tt_retry:"Erneut",tt_no_recorder:"Ohne den Recorder von Home Assistant gibt es keinen Verlauf.",tt_restart:"Bitte Home Assistant neu starten \u2013 erst dann kennt es die Zeitreise.",tt_locked:"Die Zeitreise ist nicht verf\xFCgbar.",tt_readonly:"Zeitreise: nur ansehen \u2013 nichts wird geschaltet",tt_ev_door:"{name} ge\xF6ffnet",tt_ev_garage:"{name} ge\xF6ffnet",tt_ev_lock:"{name} entriegelt",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Rauch: {name}",tt_ev_outage:"Stromausfall",tt_ev_camera:"Kamera erkennt Bewegung: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Kohlenmonoxid: {name}",tt_ev_water:"Wasser: {name}",tt_ev_rain:"Fenster offen bei Regen: {name}",tt_ev_motion:"Bewegung in der Nacht: {name}",tt_ev_washer:"{name} fertig",tt_ev_robot_start:"{name} startet",tt_ev_robot_done:"{name} fertig",card_time_travel:"Knopf \u201EZeitreise\u201C",card_time_travel_hint:"Ein Knopf unten in der Karte spielt die letzten Stunden und Tage ab (Pro: Zeitreise).",car_hint:"Eine Entit\xE4t des Autos reicht: Die \xFCbrigen findet Home 3D am selben Ger\xE4t in Home Assistant (Ladestand, Reichweite, Laden, Kabel, Schloss, Klima, Standort). Was es nicht findet, w\xE4hlst du hier; \u201EKeine\u201C schaltet eine Rolle ab.",car_device:"Fahrzeug (eine Entit\xE4t des Autos)",car_soc:"Ladestand (%)",car_range:"Reichweite",car_charging:"Laden (Leistung, Zustand oder Schalter)",car_plugged:"Kabel eingesteckt",car_lock:"Verriegelung",car_climate:"Klima / Vorheizen",car_tracker:"Standort (device_tracker)",car_away:"unterwegs",car_charging_short:"l\xE4dt",car_lock_btn:"Verriegeln",car_unlock_btn:"Entriegeln",car_unlock_confirm:"Fahrzeug wirklich entriegeln?",car_climate_on:"Klima an",car_climate_off:"Klima aus",car_charge_start:"Laden starten",car_charge_stop:"Laden stoppen",car_no_controls:"Keine schaltbaren Entit\xE4ten am Fahrzeug gefunden (Schloss, Klima, Lade-Schalter).",holo_media_playing:"l\xE4uft",holo_media_paused:"Pause",pro_locked:"Diese Funktion ist in dieser Version nicht enthalten.",pack_licensed:"Lizenziert f\xFCr {name}",pack_remove:"Entfernen",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von Home 3D. Bitte zuerst aktualisieren (HACS \u203A Home 3D \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Leuchtende Leitungen vom Z\xE4hler zu den Verbrauchern ein- oder ausblenden",holo_title:"Solar & Energie",holo_live:"live",holo_pv_now:"PV jetzt",holo_today:"Heute",holo_peak:"Spitze",holo_battery:"Akku",holo_grid:"Netz",holo_house:"Haus",holo_wallbox:"Wallbox",holo_autarky:"Autarkie jetzt",holo_house_now:"Haus jetzt",chk_title:"Einrichtung",chk_hint:"Was Energie und Energie Pro brauchen. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Gerade wird eingespeist, obwohl keine PV-Leistung anliegt: Vermutlich z\xE4hlt der Netzsensor andersherum.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug: Vermutlich z\xE4hlt sein Sensor andersherum.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",cables_title:"Leitungen (Energie Pro)",cables_hint:"Gestrichelt: Die Leitung findet ihren Weg von selbst. Fass sie im Grundriss an oder w\xE4hle sie hier und dr\xFCcke \u201ESelbst verlegen\u201C: Dann l\xE4uft sie durchgezogen \xFCber deine Punkte in der eingestellten H\xF6he, zum Beispiel au\xDFen an der Fassade oder unter der Decke, und mehrere Leitungen lassen sich nebeneinander f\xFChren.",cable_laid:"selbst verlegt",cable_lay:"Selbst verlegen",cable_auto:"Wieder automatisch",cable_height:"H\xF6he \xFCber dem Boden (m)",cable_points_hint:"Punkte im Grundriss ziehen. Ein Klick auf die Leitung f\xFCgt einen Punkt ein, ein Doppelklick auf einen Punkt entfernt ihn.",cable_other_floor:"Diese Leitung ist auf der Etage {floor} verlegt: Wechsle dorthin, um ihre Punkte zu ziehen.",holo_settings:"Hologramm (Energie Pro)",holo_settings_hint:"Das Hologramm h\xE4ngt an einem Solarfeld oder schwebt frei an einem Punkt im Plan; es beh\xE4lt seine Gr\xF6\xDFe in der Welt, beim Rauszoomen wird es kleiner. Jede weitere Anlage bekommt eine eigene Karte \xFCber ihrem Feld.",holo_field:"Am Solarfeld",holo_field_auto:"Automatisch (gr\xF6\xDFtes Feld)",holo_size:"Gr\xF6\xDFe (1 = normal)",holo_mirror:"Von hinten gespiegelt (wie Glas)",holo_device_min_w:"Ger\xE4te-Karten ausblenden unter (W)",holo_device_house:"Ger\xE4te-Karten auch in der Hausansicht",holo_device_house_hint:"Aus: Die Karten \xFCber den Ger\xE4ten erscheinen nur, wenn ihre Etage ge\xF6ffnet ist.",holo_plant_floor:"Hausbilanz und Anlagen-Karten auch in Etagenansichten",room_ceiling:"Deckenh\xF6he (m)",units:"L\xE4ngen",units_auto:"Automatisch ({unit})",units_metric:"Meter",units_imperial:"Fu\xDF und Zoll",units_hint:`Wie der Editor L\xE4ngen zeigt und liest. Automatisch folgt dem Einheitensystem von Home Assistant. Gespeichert wird immer in Metern \u2013 Fu\xDF und Zoll tippst du z. B. als 8' 2", 98in oder 8.2ft.`,room_area_net:"Fl\xE4che {a} \xB7 netto {n}",room_area_net_hint:"Netto: ohne die W\xE4nde, die in den Raum ragen \u2013 geteilte Innenw\xE4nde liegen zur H\xE4lfte im Raum, freie W\xE4nde und der Spalt hinter einer Vorwand z\xE4hlen nicht mit.",room_ceiling_hint:"Leer = H\xF6he der Etage. Mit eigener H\xF6he enden die W\xE4nde des Raums dort (au\xDFer ein Nachbarraum ist h\xF6her), und Deckenleuchten h\xE4ngen an dieser Decke \u2013 z. B. 2,5 m im Wohnraum neben einer 5 m hohen Garage.",holo_plant_floor_hint:"An: Die Karten bleiben auch sichtbar, wenn eine Etage ge\xF6ffnet ist \u2013 auf der Etage ihres Solarfelds (Felder auf dem Dach: oberste Etage, im Garten: unterste).",holo_device_room:"Ger\xE4te-Karten im ge\xF6ffneten Raum",holo_device_room_hint:"An: \xD6ffnest du einen Raum, erscheinen die Karten der Ger\xE4te in diesem Raum (nur dieses Raums).",holo_mirror_hint:"Schaust du von der R\xFCckseite des Solarfelds, zeigen die Karten ihre R\xFCckseite \u2013 gespiegelt wie eine Glasscheibe. Aus: Sie bleiben von \xFCberall lesbar.",holo_right:"Seitlich versetzt (m, + = rechts)",holo_up:"Nach oben versetzt (m, den Hang hinauf)",holo_place:"H\xE4ngt",holo_place_field:"An einem Solarfeld",holo_place_free:"Frei im Plan (Griff \u25C8 ziehen)",holo_free_hint:"Im Plan steht ein Griff \u25C8 \u2013 zieh ihn dorthin, wo das Hologramm schweben soll (auch neben das Haus, etwa an die Terrasse). Die Karte zeigt vom Haus weg.",holo_no_field:"Noch kein Solarfeld im Plan: Das Hologramm schwebt neben dem Haus.",holo_height:"H\xF6he \xFCber dem Boden (m)",furn_plant_card:"Anlagenkarte (Hologramm) zeigen",furn_plant_card_hint:"Energie Pro: Jede Anlage (Wechselrichter mit eigenen Feldern) bekommt eine Glaskarte \xFCber ihrem Feld \u2013 Leistung, Tageskurve, Akku. Hier schaltest du sie f\xFCr diese Anlage ab.",flow_on:"an",flow_off:"aus",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",hint_outdoor_free:"Ecken der Au\xDFenfl\xE4che setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",outdoor_shape_rect:"Rechteck",outdoor_shape_free:"Freie Form",outdoor_draw_type:"Zeichnen:",outdoor_draw_type_hint:"Was du als N\xE4chstes aufziehst: Rasen, Terrasse, Weg, Pool \u2026 Die Art l\xE4sst sich danach im Formular noch \xE4ndern.",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",out_balcony:"Balkon",balcony_rail:"Gel\xE4nderh\xF6he",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_area_hint:"Mit einem Bereich wird die Fl\xE4che wie ein Raum: Antippen in 3D \xF6ffnet sie mit den Ger\xE4ten des Bereichs, sie steht in der Raumleiste und tr\xE4gt ihren Namen.",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_end:"Ende",roof_end_auto:"wie die Form",roof_end_gable:"Giebel",roof_end_hint:"Wie der First an diesem Ende endet: Giebel (senkrechte Wand), Walm oder Kr\xFCppelwalm \u2013 so geht zum Beispiel ein Walm nur an einer Seite.",roof_swap:"Seiten tauschen",roof_turn:"Drehung",roof_turn_hint:"Dreht diesen Dachteil im Plan (im Uhrzeigersinn), z. B. f\xFCr einen Anbau im Winkel. Gauben und Zwerchgiebel darauf drehen mit. 0\xB0 = wie bisher.",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",devices_hide_all:"Alle {n} im Raumfenster ausblenden",devices_show_all:"Alle {n} wieder zeigen",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",straighten:"Schiefe Kanten begradigen",straighten_hint:"Findet Raumkanten, die nur um wenige Zentimeter schief laufen (eine Ecke 1 cm daneben), und richtet sie gerade aus. Bewusst schr\xE4ge W\xE4nde bleiben.",straighten_done:"{n} fast gerade Kanten begradigt.",straighten_none:"Keine schiefen Kanten gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",controls_side:"Wo Etagenbilder, Stern, Suche und Auge sitzen",controls_left:"Bedienleiste links",controls_right:"Bedienleiste rechts",keep_view:"Ansicht halten",angle_lock:"3D-Sperre",angle_lock_hint:"Der Blickwinkel bleibt fest: Ziehen verschiebt die Ansicht, Zoomen geht weiter \u2013 niemand dreht das Haus aus Versehen.",keep_view_hint:"Beim Wechsel von Etage zu Etage bleibt die Kamera, wo sie ist \u2013 nur die H\xF6he wandert mit.",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",terrain:"Gel\xE4nde",terrain_hint:"Wo der Boden um das Haus liegt. Was darunter liegt \u2013 ein Keller, der untere Teil eines Souterrains \u2013 steckt in 3D in der Erde; Rasen, Wege und Terrassen liegen auf dem Gel\xE4nde.",terrain_level:"Gel\xE4ndeh\xF6he (m, Erdgeschoss = 0)",terrain_earth:"Keller in der Erde zeigen",terrain_earth_hint:"Etagen unter dem Gel\xE4nde stecken in der Erde; \xF6ffnest du sie, siehst du sie wie in einer Baugrube. Aus: Sie stehen frei wie bisher.",terrain_cellar_hint:"Souterrain: die Gel\xE4ndeh\xF6he so weit senken, wie der Keller herausschauen soll \u2013 etwa \u22121,2 m. Kellerfenster unter dem Gel\xE4nde bekommen einen Lichtschacht.",terrain_no_cellar_hint:"Einen Keller legst du als Etage mit negativer H\xF6he an, zum Beispiel \u22122,6 m.",terrain_reset:"Gel\xE4nde zur\xFCcksetzen",cellar_window:"Kellerfenster",well:"Lichtschacht",well_hint:"Dieses Fenster liegt unter dem Gel\xE4nde: In 3D bekommt es einen Lichtschacht mit Gitterrost. Ohne Haken keinen \u2013 etwa wenn au\xDFen ein Weg vorbeif\xFChrt.",well_rim:"Rand \xFCber dem Gel\xE4nde (m)",sill_board:"Fensterbank",sill_board_hint:"Automatisch: ab 30 cm Br\xFCstung eine Fensterbank innen und au\xDFen; keine bei einem Fenster, das direkt auf einem anderen sitzt (Oberlicht, geteilte Glasfront).",sill_board_auto:"automatisch",sill_board_none:"keine",sill_board_inside:"nur innen",sill_board_outside:"nur au\xDFen",cellar_window_hint:"Klein und oben in der Wand: 100 \xD7 50 cm, 25 cm unter der Decke. Liegt es unter dem Gel\xE4nde, bekommt es in 3D einen Lichtschacht mit Gitterrost.",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_angle:"\xD6ffnungswinkel",door_angle_hint:"Wie weit die T\xFCr in 3D offen steht: ohne Sensor immer, mit Sensor, sobald er offen meldet. Standard: ohne Sensor halb offen, mit Sensor ganz offen.",door_angle_default:"Standard",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",contact_invert:"Kontakt umkehren",contact_invert_hint:"F\xFCr Sensoren, die offen und geschlossen andersherum melden",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",lib_room_all:"Alle R\xE4ume",lib_room_living:"Wohnen",lib_room_dining:"Essen",lib_room_kitchen:"K\xFCche",lib_room_bedroom:"Schlafen",lib_room_kids:"Kinder",lib_room_bath:"Bad",lib_room_office:"B\xFCro",lib_room_hall:"Flur",lib_room_utility:"Hauswirtschaft",lib_room_garage:"Garage",lib_room_garden:"Garten",lib_room_hobby:"Hobby & Fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Sitzm\xF6bel",lib_kind_table:"Tische",lib_kind_storage:"Schr\xE4nke & Regale",lib_kind_bed:"Betten",lib_kind_kitchen:"K\xFCche",lib_kind_appliance:"Ger\xE4te",lib_kind_bath:"Bad",lib_kind_lamp:"Leuchten",lib_kind_media:"TV & Audio",lib_kind_office:"B\xFCro",lib_kind_tech:"Technik & Smart Home",lib_kind_heating:"Heizen & Klima",lib_kind_energy:"Energie",lib_kind_household:"Haushalt",lib_kind_deco:"Deko",lib_kind_plant:"Pflanzen",lib_kind_outdoor:"Garten & Au\xDFen",lib_kind_kids:"Kinder",lib_kind_sport:"Fitness",lib_kind_pets:"Haustiere",lib_kind_vehicle:"Fahrzeuge",lib_kind_stairs:"Treppen & Gel\xE4nder",lib_kind_architecture:"Architektur",lib_recent:"Zuletzt benutzt",lib_favorites:"Favoriten",lib_fav_add:"Als Favorit merken",lib_fav_remove:"Favorit entfernen",lib_chip_electric:"Verkn\xFCpfbar",lib_chip_light:"Leuchtet",lib_chip_outdoor:"Au\xDFen",lib_more:"{n} weitere zeigen",lib_basic:"Basis",lib_sizes:"{n} Gr\xF6\xDFen",lib_hint_room:"Vorgeschlagen f\xFCr den offenen Raum \u2013 oben umschalten.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_rise:"Anstieg (\xB0)",strip_rise_hint:"Der Streifen steigt entlang seiner L\xE4nge an, etwa die Treppe hinauf oder am Handlauf (~35\u201340\xB0). Die H\xF6he \xFCber Boden ist dann seine Mitte.",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_sofa_l:"Ecksofa (L-Form)",furn_sofa_u:"Wohnlandschaft (U-Form)",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf. Der Bildschirm auf der rechten T\xFCr zeigt Bilder nach Regeln wie ein Fernseher \u2013 solange die T\xFCr zu ist.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairs_u:"U-Treppe mit Podest",furn_stairwell:"Boden\xF6ffnung",furn_loft_ladder:"Bodentreppe",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. \xDCber mehreren R\xE4umen wird sie in jedem Raum ausgeschnitten; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_slope:"Schr\xE4g",wall_slope_hint:"Schr\xE4ge Wand: eine eigene H\xF6he an jeder Ecke, die Oberkante l\xE4uft gerade dazwischen \u2013 Pultdach, Hang, Oberlichter auf der hohen Seite. Fenster und T\xFCren bleiben unter der Oberkante.",wall_slope_start:"H\xF6he an Ecke {n} (m)",wall_slope_end:"H\xF6he an Ecke {n} (m)",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",wall_pos_hint:"X und Y: die Mitte der Wand im Plan.",stairwell_outside:"Diese \xD6ffnung liegt in keinem Raum und wird deshalb nicht ausgeschnitten. Ziehe sie in einen Raum.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von Home 3D \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",theme_auto:"Auto (Tag/Neon nach Sonne)",persons:"Personen",locate:"Ortung",persons_figure:"Figur",persons_pin:"Pin",persons_off:"aus",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Einklappen",side_fold_hint:"Seitenleiste schmal machen \u2013 mehr Platz f\xFCr den Grundriss",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",markers_room:"Im Raum",pin_size:"Symbolgr\xF6\xDFe",pin_size_small:"Klein",pin_size_normal:"Normal",pin_size_large:"Gro\xDF",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_ac_unit:"Klimager\xE4t (Wand)",furn_awning:"Markise",furn_group_outdoor:"Terrasse & Balkon",bin_from:"Leuchten ab (Uhr, am Vortag)",bin_until:"bis (Uhr, am Abholtag)",bin_out:"Rausgestellt (Helfer)",bin_out_hint:"Optional: an, solange die Tonne drau\xDFen steht (input_boolean, Schalter oder Bin\xE4rsensor). Dann leuchtet sie nicht mehr und ihr Schild sagt \u201Erausgestellt \u2713\u201C; ein Tipp auf die Tonne schaltet einen Helfer oder Schalter um. Eine n\xE4chtliche Automation setzt ihn zur\xFCck.",bin_out_done:"rausgestellt \u2713",bin_out_mark:"Als rausgestellt markieren",bin_next_only:"Nur die n\xE4chste Abholung beschriften",bin_days:"Schilder erst \u2026 Tage vorher zeigen",bin_days_always:"immer",bin_tags_hint:"Gilt f\xFCr alle Tonnen. Tonnen ohne Schild stehen weiter in \u201EHeute im Haushalt\u201C und zeigen beim Antippen ihre Termine.",hh_service2:"{name}: {what} f\xE4llig",hh_service2_entity:"Zweite Wartung (z. B. Station)",hh_service2_min:"Zweite f\xE4llig ab (\u2264 Prozent oder Tage)",bin_none:"Keine Abholung in Sicht",hh_title:"Heute im Haushalt",hh_notes:"Pinnwand (Text-Helfer)",hh_notes_hint:"Ein Text-Helfer (input_text) oder Sensor, dessen Text in \u201EHeute im Haushalt\u201C steht \u2013 mehrere Zeilen mit | trennen. Automationen schreiben hinein (\u201EPaket liegt in der Garage\u201C), die Karte zeigt es.",heat_sensor:"Heizt (Sensor)",heat_sensor_hint:"Sagt der Thermostat nicht, ob er heizt (Tuya-Ventile melden einen \u201EWork state\u201C), nimm hier den Sensor: ein/opened/heating oder eine \xD6ffnung \xFCber 0 % l\xE4sst den Heizk\xF6rper gl\xFChen.",door_lock:"Smart Lock",door_lock_hint:"Das Schloss der T\xFCr (Nuki, Aqara \u2026): ein Pin an der T\xFCr zeigt zu oder offen, ein Tipp schlie\xDFt auf oder ab.",door_lock_btn:"Abschlie\xDFen",door_unlock_btn:"Aufschlie\xDFen",door_lock_confirm:"{name} wirklich abschlie\xDFen?",door_unlock_confirm:"{name} wirklich aufschlie\xDFen?",garage_pulse_hint:"Schalter oder Taster als Antrieb: Ein Tipp aufs Tor gibt einen Impuls (ein Schalter wird eingeschaltet, ein Taster gedr\xFCckt); ob das Tor offen ist, zeigt der Kontakt.",clock:"Uhr",clock_off:"Aus",clock_tl:"\u2196 Uhr",clock_tr:"\u2197 Uhr",clock_bl:"\u2199 Uhr",clock_br:"\u2198 Uhr",editor_floor:"Start-Etage im Editor",editor_floor_auto:"Erste der Liste",editor_floor_hint:"Mit welcher Etage der Editor \xF6ffnet.",hh_left:"noch {t}",hh_done:"Fertig!",hh_finished:"{name} ist fertig",hh_thirsty:"Durst",hh_plant:"{name} braucht Wasser",hh_service:"{name}: Wartung f\xE4llig",hh_fridge_open:"{name} steht offen",alert_fridge_door:"K\xFChlschrank offen: {name}",alert_short_fridge_door:"K\xFChlschrank offen",hh_moisture:"Pflanze (plant.*) oder Feuchtesensor",hh_moisture_min:"Durst unter (%)",hh_remaining:"Restzeit (Sensor)",hh_door:"T\xFCr-Sensor",hh_fridge_door:"T\xFCr-Sensor",hh_appliance_hint:"L\xE4uft das Ger\xE4t, zeigt seine Markierung die Restzeit; danach \u201EFertig!\u201C, bis die T\xFCr aufgeht oder es wieder l\xE4uft.",hh_door_alarm:"Warnen nach (Minuten offen)",hh_service_entity:"Verbrauchsteil / Wartung (Sensor)",hh_service_min:"F\xE4llig ab (\u2264 Prozent oder Tage)",hh_service_hint:"Etwa Filter, Salz oder Klarsp\xFCler: ein Bin\xE4rsensor (an = f\xE4llig), eine Zahl (Prozent oder Tage \xFCbrig) oder ein Datum. Ist es f\xE4llig, leuchtet das Ger\xE4t gelb und steht in \u201EHeute im Haushalt\u201C.",card_household:"Heute im Haushalt",card_household_hint:"Haushalt Pro: Glaskarte mit Tonnen, Post, fertigen Ger\xE4ten, durstigen Pflanzen und f\xE4lliger Wartung",furn_waste_bin:"M\xFClltonne",furn_mailbox:"Briefkasten",furn_wifi_ap:"WLAN-Access-Point",furn_water_heater:"Warmwasserspeicher",tech_mount:"Montage",wifi_ap_std:"An der Decke",wifi_ap_wall:"An der Wand",water_heater_std:"Standspeicher",water_heater_wall:"Flachspeicher an der Wand",ap_status:"Status (Verbindung, Zustand)",ap_clients_sensor:"Sensor: verbundene Ger\xE4te",ap_clients:"{n} Ger\xE4te",ap_offline:"Offline",pin_standby:"Standby",ap_hint:"Der Ring leuchtet blau, solange der Access Point da ist, und rot, wenn er fehlt \u2013 dann zeigt sich auch sein Symbol. Diagnose-Entit\xE4ten (etwa von UniFi) stehen hier mit zur Wahl.",heater_entity:"Ger\xE4t (water_heater, Thermostat oder Schalter)",heater_temp:"Sensor: Wassertemperatur (optional)",heater_hint:"Der Speicher gl\xFCht warm, solange er heizt (Thermostat \u201Eheizt\u201C, Schalter an oder Leistung \xFCber der Schwelle), und zeigt die Wassertemperatur \u2013 aus dem Sensor oder vom Ger\xE4t selbst.",furn_lamp_fan:"Deckenventilator mit Licht",fan_entity:"Ventilator (fan-Entit\xE4t)",fan_hint:"Das Licht oben schaltet die Leuchte. Mit einem Ventilator drehen sich die Fl\xFCgel mit seiner Stufe, und er bekommt ein eigenes Symbol daneben: Tippen schaltet ihn, lange dr\xFCcken stellt die Stufe ein.",furn_wall_switch:"Lichtschalter",furn_wall_socket:"Steckdose",furn_group_switches:"Haustechnik",wv_cat_switches:"Schalter",gang_count_switch:"Tasten im Rahmen",gang_count_socket:"Dosen im Rahmen",socket_kind:"Bauform",socket_indoor:"Innen",socket_outdoor:"Au\xDFensteckdose mit Klappe",gang_switch:"Taste schaltet",gang_socket:"Dose schaltet",gang_switch_hint:"Jede Taste bekommt ihre eigene Entit\xE4t (Licht, Schalter, L\xFCfter) und leuchtet, solange sie an ist \u2013 ein Licht in seiner Farbe. Antippen schaltet; bei mehreren Tasten \xF6ffnet sich ein kleines Men\xFC.",gang_socket_hint:"Jede Dose bekommt ihre eigene Entit\xE4t (das Relais, der Zwischenstecker) und auf Wunsch einen Leistungssensor; sie leuchtet gr\xFCn, solange sie an ist. Dieselbe Entit\xE4t darf an mehreren Dosen h\xE4ngen \u2013 zwei Steckdosen an einem Relais.",furn_group_household:"Haushalt",bin_shape:"Bauform",bin_shape_bin120:"Rolltonne 120 l",bin_shape_bin240:"Rolltonne 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Mehrkammer-Tonne",bin_shape_bag:"Sack",bin_shape_caddy:"Eimer / Caddy",bin_shape_underground:"Unterflur-Container",bin_kind:"Abfallart",bin_kind_rest:"Restm\xFCll",bin_kind_bio:"Bio",bin_kind_paper:"Papier",bin_kind_plastic:"Verpackung (Gelbe Tonne / Sack)",bin_kind_glass:"Glas",bin_kind_garden:"Garten / Gr\xFCnschnitt",bin_kind_recycling:"Recycling / Wertstoffe",bin_kind_other:"Sonstiges",bin_color:"Farbe",bin_lid:"Deckel",bin_source:"Abfallkalender oder Sensor",bin_match:"Stichwort im Kalender (leer: nach Abfallart)",bin_hint:"Die Tonne leuchtet am Vortag ab der eingestellten Uhrzeit bis zur Uhrzeit am Abholtag (gilt f\xFCr alle Tonnen); ihre Markierung zeigt \u201EHeute\u201C oder \u201EMorgen\u201C, Antippen der Tonne zeigt die n\xE4chsten Termine. Ein Kalender (z. B. von Waste Collection Schedule) wird nach den W\xF6rtern ihrer Abfallart durchsucht, ein Sensor kann die Tage bis zur Abholung oder das Datum liefern.",bin_today:"Heute",bin_tomorrow:"Morgen",bin_in_days:"in {n} Tagen",mailbox_shape:"Bauform",mailbox_shape_wall:"Wandbriefkasten",mailbox_shape_pole:"Briefkasten auf Pfosten (mit F\xE4hnchen)",mailbox_shape_pillar:"Standbriefkasten mit Zeitungsfach",mailbox_shape_parcel:"Paketbox",mailbox_shape_bank:"Briefkastenanlage",mailbox_entity:"Sensor f\xFCr Post (Klappe oder Merker)",mailbox_door:"Sensor der Entnahmet\xFCr (optional)",mailbox_hint:"Mit einem Merker (z. B. input_boolean \u201EPost da\u201C aus einer Automation) leuchtet der Briefkasten, solange er an ist. Mit Einwurfklappe und Entnahmet\xFCr leuchtet er, wenn nach dem letzten Leeren Post eingeworfen wurde.",mailbox_post:"Post da",pro_name_household:"Haushalt Pro",pro_feature_household:"Haushalt Pro: M\xFClltonnen leuchten am Vorabend der Abholung (Abfallkalender oder Sensor), der Briefkasten bei Post, Pflanzen bei Durst; Waschmaschine, Trockner und Sp\xFCler zeigen Restzeit und \u201EFertig!\u201C; f\xE4llige Filter und Verbrauchsteile leuchten gelb; offene K\xFChlschrankt\xFCren warnen; Glaskarte \u201EHeute im Haushalt\u201C; dazu der Smart-K\xFChlschrank (Side-by-Side, T\xFCren mit Sensoren)",awning_cover:"Markise (Cover)",motor_cover:"Antrieb (Cover)",curtain_side:"\xD6ffnet nach",curtain_side_both:"beiden Seiten",curtain_side_left:"links (von vorn gesehen)",curtain_side_right:"rechts (von vorn gesehen)",motor_time:"Laufzeit (s)",motor_invert_hint:"F\xFCr Covers, die 100 % melden, wenn der Vorhang zu oder die Leinwand unten ist.",awning_pitch:"Neigung (\xB0)",awning_time:"Laufzeit ganz aus (s)",awning_position:"Positionssensor (optional)",awning_valance:"Volant (Stoffkante vorne)",awning_invert:"Richtung umkehren",awning_invert_hint:"F\xFCr Covers, die 100 % melden, wenn die Markise eingefahren ist.",awning_kind:"Art",awning_kind_arm:"Gelenkarm-Markise (Terrasse)",awning_kind_drop:"Fallarm-Markise (Balkon, Fenster)",awning_kind_vertical:"Senkrechtmarkise / ZIP (Fenster, Balkon)",awning_kind_pergola:"Pergola- / Wintergartenmarkise",awning_kind_side:"Seitenmarkise (Sichtschutz)",awning_kind_arm_hint:"Die Klassiker \xFCber der Terrasse: Gelenkarme schieben das Tuch mit leichtem Gef\xE4lle hinaus. Tiefe = Ausfall.",awning_kind_drop_hint:"Die Arme schwenken von der Wand nach vorn und unten, das Tuch spannt sich schr\xE4g davor. Tiefe = Arml\xE4nge, Neigung = wie weit die Arme unter die Waagerechte gehen.",awning_kind_vertical_hint:"Das Tuch f\xE4hrt senkrecht in Seitenschienen bis zum Boden herunter \u2013 vor ein Fenster, eine Balkonbr\xFCstung oder die Front einer Pergola. H\xF6he \xFCber Boden = Unterkante des Kastens.",awning_kind_pergola_hint:"Ein fester Rahmen mit Pfosten vorne; das Tuch f\xE4hrt oben auf den Schienen aus. Tiefe = bis zu den Pfosten, Neigung = Gef\xE4lle des Dachs.",awning_kind_side_hint:"Ein Pfosten mit dem aufgerollten Tuch links, das Tuch zieht sich waagerecht nach rechts bis zum Gegenpfosten. Breite = Auszug, H\xF6he \xFCber Boden = H\xF6he des Tuchs.",awning_hint:"Breite = Markise entlang der Wand, Tiefe = Ausfall ganz ausgefahren; die R\xFCckseite des Rahmens kommt an die Hauswand, H\xF6he \xFCber Boden ist die Unterkante der Kassette. Meldet das Cover seine Position auch beim Fahren, f\xE4hrt die Markise in 3D langsam mit; meldet es nur \u201Ef\xE4hrt aus/ein\u201C, f\xE4hrt sie in der Laufzeit mit.",furn_only_color:"Nur in einer Farbe leuchten",furn_only_color_pick:"Farbe",furn_only_color_hint:"Die Lampe leuchtet nur, solange das Licht ungef\xE4hr diese Farbe zeigt \u2013 z. B. gelb f\xFCr \u201EWasser\u201C am Waschbecken. Andere Farben desselben Lichts bleiben hier dunkel.",furn_run_w:"L\xE4uft ab (Watt)",furn_run_w_hint:"Ab wie viel Watt am Leistungssensor das Ger\xE4t als laufend gilt und leuchtet (leer: 10 W). F\xFCr Ger\xE4te hinter einer Steckdose, die im Standby ein paar Watt ziehen, z. B. 100.",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",solar_pro_soon:"bald verf\xFCgbar",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_float:"Ohne Dach \xFCber dem Raum zeigen",roof_window_float_hint:"Blendet das Dach beim Heranzoomen an eine Etage oder einen Raum aus, bleibt das Fenster an seiner Stelle \xFCber dem Raum stehen \u2013 offen, gekippt, mit dem Rollladen. Das geht \xFCber R\xE4umen der Etage, auf der das Dach sitzt; reicht die Schr\xE4ge \xFCber eine tiefere Etage, bleiben die Fenster dort im Dach. Aus: Es ist nur im Dach zu sehen.",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_wall_free:"frei stehend",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Angeschlossen an (Wechselrichter oder Speicher)",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier endet die Netzleitung: am \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar; ohne Netzanschluss endet die Leitung am Rand der Au\xDFenfl\xE4chen.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",show_when:"Wann es sich zeigt",show_when_entity:"Nur solange verf\xFCgbar",show_from:"Vom",show_to:"Bis",show_start:"Ab",show_end:"Bis",show_add_interval:"Zeitraum",show_when_hint:"Ohne Regel zeigt es sich immer. Mit einer Entit\xE4t verschwindet es, solange sie nicht verf\xFCgbar ist; mit Zeitr\xE4umen zeigt es sich nur darin \u2013 Tage gelten jedes Jahr (Dez. bis Jan. geht \xFCber Neujahr), Uhrzeiten jeden Tag (22:00 bis 06:00 geht \xFCber Mitternacht).",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Leitungen, Z\xE4hler und Hologramm \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_meter_reading:"Z\xE4hlerstand (m\xB3 oder Liter)",furn_holo:"Hologramm \xFCber dem Ger\xE4t (Energie Pro)",furn_holo_hint:"Eine Glaskarte \xFCber dem Ger\xE4t mit Leistung jetzt, Verbrauch heute und Tageskurve \u2013 in der Haus- und in der Etagenansicht. Braucht einen Leistungssensor.",holo_dev_now:"jetzt",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und bekommt eine Energie-Leitung.",screen_pictures:"Bilder nach Zustand",screen_pictures_hint:"Verglichen wird der Zustand oder ein Attribut der Entit\xE4t (z. B. app_name eines Fernsehers). Der Wert passt, wenn er gleich ist oder im Text vorkommt (\u201Eyoutube\u201C passt zu \u201Ecom.google.android.youtube.tv\u201C); \u201E*\u201C = immer. Die erste passende Regel gewinnt. Bilder werden auf 512 px verkleinert gespeichert; alternativ eine Bild-URL oder eine Kamera \u2013 deren Livebild wird alle 5 Sekunden erneuert, solange es gezeigt wird. Ohne passende Regel zeigt der Bildschirm den Media Player.",picture_state:"ist oder enth\xE4lt \u2026 (z. B. netflix)",picture_state_of:"Zustand",picture_attribute:"Zustand oder Attribut vergleichen",picture_pick:"Bild w\xE4hlen \u2026",picture_change:"Bild \xE4ndern \u2026",picture_url:"oder Bild-URL",picture_add_value:"+ Wert",picture_reuse:"Vorhandenes Bild verwenden",picture_camera:"oder Kamera (Livebild) \u2026",picture_camera_none:"Keine Kamera",screen_bg:"Bildschirm hinter dem Bild",screen_bg_black:"Dunkel",screen_bg_white:"Wei\xDF",picture_add_entity:"+ Weitere Entit\xE4t",picture_current:"aktuell: {value}",picture_matches:"\u2713 passt gerade \u2013 dieses Bild wird gezeigt",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",stairs_u_hint:"Die U-Treppe steigt von der markierten Vorderkante nach hinten, wendet am Podest und kommt auf der anderen Seite wieder nach vorn hoch. \u201ESpiegeln\u201C dreht die Laufrichtung um. Sie \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_gas_meter:"Gasz\xE4hler",energy_water_meter:"Wasserz\xE4hler",energy_meters_hint:"Energie Pro: Die Haus-Karte zeigt, wie viel Gas und Wasser heute verbraucht wurde \u2013 aus der Statistik der Z\xE4hler (Z\xE4hlerstand, z. B. in m\xB3). \u201EAus dem Energie-Dashboard \xFCbernehmen\u201C f\xFCllt beide mit.",holo_gas:"Gas",holo_water:"Wasser",holo_today_short:"heute",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Ba={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of Home 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows Home 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of Home 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",floor_order_hint:'Only changes the order of the floors in the list and the floor pictures. Where a floor sits in the 3D house comes from its "height above the ground".',default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_ask:"Pipe laid \u2013 on to the pool? Then a hole with the way outside goes here:",tech_ask_loose:"Leave it open",tech_step_tee:"Tap the pipe where the branch goes \u2013 it is cut there, and from the T-piece you draw the next line.",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Like a pen: press on a device and draw the line \u2013 wiggles go, the pipes run level and upright. A stroke ending on a device or pipe joins there; one ending on nothing is asked where it goes (skimmer, bottom drain, inlets, waste) and Home 3D lays the hole and the way outside itself.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",side_resize:"Drag the side bar wider or narrower",furn_extra:"Extra value at the symbol (sensor, e.g. water temperature)",settings_house:"House",settings_weather:"Weather & warnings",roof_basics:"Roof shape",voice_sentences_kept:"You changed the sentence file for {langs} yourself \u2013 Home 3D leaves it alone.",voice_sentences_failed:"The sentence file could not be written.",voice_sentences_file:"Home 3D creates the file custom_sentences/<language>/home_3d.yaml only when you pick sentences here. A file you changed yourself is never overwritten; removing the integration deletes Home 3D's file.",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",editors_title:"Editors",editors_hint:"Who may change the plan. Everyone else sees the house and controls devices, without the editor. Until you pick, every admin is an editor.",editors_admin:"admin",editors_reset:"Back to: every admin",editors_no_admin:"At least one admin must stay an editor.",editors_failed:"The editors could not be saved.",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no Home 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full Home 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",item_actions:"Own actions",item_actions_hint:'What a tap, a hold and a double tap do in 3D. "Default" keeps the usual behaviour for this kind of device. Everything runs through Home Assistant; anyone who can see the view can use them.',item_gesture_tap:"Tap",item_gesture_hold:"Hold",item_gesture_double_tap:"Double tap",item_action_default:"Default",item_action_none:"Nothing",item_action_toggle:"Toggle",item_action_more_info:"Open details",item_action_camera:"Open camera",item_action_navigate:"Open a dashboard page",item_action_url:"Open an address",item_action_perform_action:"Perform an action",item_target_toggle:"Entity (empty = its own)",item_target_more_info:"Entity (empty = its own)",item_target_camera:"Camera (empty = its own)",item_target_navigate:"Path",item_target_url:"Address",item_target_perform_action:"Action (domain.service)",item_action_confirm:"Ask first",item_action_confirm_text:"Question",item_action_confirm_placeholder:"Are you sure?",action_confirm_title:"Confirm",action_confirm_ok:"Do it",action_confirm_default:"{name}: are you sure?",action_this_item:"This item",action_failed:"The action failed: {error}",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Home 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_detect_choose:"Choose the detection sensors yourself",camera_detect_choose_hint:"Only the ticked sensors count for pins, the motion trail and the live director \u2013 sensors of another device too, e.g. Frigate's person sensor for a Reolink camera. Without the tick Home 3D takes every sensor on the camera's device.",camera_detect_add:"Add a sensor",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',view_settings:"Settings",view_settings_admin:"Only administrators can change these settings \u2013 they apply to the whole house.",view_settings_look:"Look",view_settings_alerts:"Warnings",view_settings_more:"Every other setting is in the editor under \u2699 Settings.",lines_add:"Add",lines_new:"New entry \u2026",sheet_mic:"Speak",sheet_listening:"Listening \u2026",sheet_mic_failed:"Nothing understood \u2013 the microphone needs HTTPS and a voice pipeline with speech-to-text.",card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back. A camera keeps its pin with all its camera settings; the model only joins it.",as_furniture_pick:"Pick furniture \u2026",camera_look_builtin:"Built-in camera model",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_hint:"A screen shows by itself what happens in the house: the doorbell rings \u2013 the view flies to the front door and looks through its camera. Every event is off until you switch it on.",director_here:"Switch on on this device",director_here_hint:"Only for this browser, e.g. the wall tablet. On a dashboard card you switch the live director on in the card settings.",director_doorbell:"Doorbell rings: fly to the door and look through the camera",director_doorbell_entity:"Doorbell",director_doorbell_camera:"Camera at the door",director_no_doorbell:"No doorbell found. Choose your doorbell's event or binary sensor entity.",director_motion:"A camera sees someone",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",director_appliances:"Washer, dryer or dishwasher finished",director_alerts:"New warning (smoke, water, alarm, window in the rain \u2026)",director_hold:"Back after (seconds)",director_back_hint:"Then the view goes back to where it was \u2013 unless someone touched the screen meanwhile. Someone using the tablet is only interrupted by the doorbell and by warnings. The doorbell stays twice as long.",voice:"Voice control",voice_hint:"A microphone button at the bottom left of the 3D view: tap it and speak. \u201CShow the living room\u201D, \u201Cupper floor\u201D or \u201Cthe whole house\u201D shows the place; anything else (\u201Cturn on the hall light\u201D) goes to Home Assistant's Assist.",voice_here:"Switch on on this device",aliases:"Further names for the voice",aliases_hint:'Further names, comma separated \u2013 so you ask for the "Smart TV Pro" as "living room TV" or "telly". Used by voice control and the search.',aliases_placeholder:"e.g. living room TV, telly",voice_understands:"What Home 3D understands",voice_examples:"\u201CShow the living room\u201D|\u201CGo to the upper floor\u201D|\u201CShow the whole house\u201D|\u201CShow the washing machine\u201D / \u201CWhere is the dryer?\u201D|\u201CShow the front door camera\u201D / \u201CShow the driveway camera\u201D|\u201CShow the cameras\u201D|Anything else (\u201Cturn on the hall light\u201D) goes to Assist",voice_needs:"Needs https, the microphone allowed (in Fully Kiosk: Web Content Settings \u2192 microphone access) and an Assist pipeline with speech to text. On a dashboard card you switch the button on in the card settings.",voice_showing:"Showing {name}.",screen_name:"Screen name (for Assist)",screen_name_placeholder:"e.g. Kitchen",screen_name_hint:'Asking Assist ("Show the living room") or an automation calling the service home_3d.ask reaches every open Home 3D view. When the service names a screen, only the view with that name reacts.',voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",director_mic_test:"\u{1F399}\uFE0F Test the microphone",director_mic_hint:"Checks https, the microphone and Assist's speech to text on this device and shows which room a sentence would open. Nothing is switched.",voice_pipeline:"Assist pipeline on this device",voice_sentences:"Sentences for Assist",voice_sentences_distinct:'Only distinct ones ("Show \u2026", "Ask the house \u2026", "Home 3D, \u2026")',voice_sentences_all:"All questions (also takes sentences Home Assistant answers itself)",voice_sentences_off:"None (default \u2013 no sentence file)",voice_sentences_hint:'What Assist hands to Home 3D. Questions like "Which windows are open?" are otherwise answered by Home Assistant itself \u2013 "Ask the house which windows are open" always reaches Home 3D.',voice_pipeline_preferred:"Preferred one in Home Assistant",voice_pipeline_no_stt:"no speech to text",backdrop:"Background",backdrop_kind:"Behind the house",backdrop_look:"The look's sky (default)",backdrop_color:"One colour",backdrop_gradient:"Gradient",backdrop_image:"Picture",backdrop_top:"Colour at the top",backdrop_bottom:"Colour at the bottom",backdrop_image_url:"Picture address",backdrop_dim:"Darken",backdrop_image_bad:"This address does not work: https://\u2026 or a path like /local/background.jpg",backdrop_hint:"Put the picture into config/www in Home Assistant, then it is /local/filename.jpg. Darkening keeps the neon lines readable. Costs no performance \u2013 old tablets too.",director_live:"Live picture when looking through",director_live_hint:"Instead of a still every few seconds the camera's video runs (through Home Assistant's player). Needs more power \u2013 better leave it off on very old tablets.",director_triggers:"Own triggers",director_triggers_hint:"When one of these entities goes on or open \u2013 a second doorbell, the garage door, the garden gate \u2013 the view flies there and looks through the camera chosen (without one: to the device).",director_trigger_entity:"Trigger",director_trigger_add:"+ Add a trigger",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",sun_shadow:"Sun arc and house shadow",sun_shadow_hint:`An arc over the house shows the sun's way today with sunrise and sunset, and the house's shadow lies on the ground and moves with the sun. Needs the north direction; on the "Tablet" level only the arc.`,window_glow:"Windows glow outside at night",window_glow_hint:"When it is dark outside, the light of lit rooms falls out of the windows as a warm glow onto the lawn and terrace in front \u2013 in the room's light colour, fainter behind lowered blinds.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_unavailable:"Contact unavailable: {name}",alert_short_contact_unavailable:"Contact unavailable",alert_unavailable:"Warn when a window or door contact is unavailable",alert_unavailable_hint:'When a contact has been "unavailable" for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. Then a warning shows.',alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no Home 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",room_order_up:"Move the room up (earlier in the room bar)",room_order_down:"Move the room down (later in the room bar)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_packs:"furniture packs ({items} items)",packs_hint:'Furniture packs are JSON files (format "fp3dpack", see docs/packs.md); their content is checked on import.',lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",license_copy:"Copy",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer Home 3D version \u2013 please update Home 3D (HACS) and reload the page.",pro_title:"Not available",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"The built-in features of Home 3D, the fun extras and your furniture packs. Everything runs locally in Home Assistant.",ext_pro:"Built-in features",fun_title:"Fun packs",fun_intro:"Extras just for fun \u2013 switch them on and off here.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_name_halloween:"Halloween",fun_feature_halloween:"Pumpkins that glow with a light, a cobweb, bats, gravestones, a skeleton, a witch's cauldron and candles \u2013 and a ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Halloween". Pumpkin, cauldron and candles glow with a linked light.`,pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",pet_mode:"Behaviour",pet_roaming:"Roams the house",pet_static:"Stays at its spot",pet_pose:"Pose",pet_pose_sit:"Sitting",pet_pose_lie:"Lying",pet_pose_curl:"Curled up",pet_turn:"Facing",pet_turn_auto:"Automatic",pet_static_hint:"Drag it to its spot in the plan editor.",ext_active:"active",ext_open:"Open extensions",manual:"Manual",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs and the built-in features are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (module): the water glows in the colour of the pool light and moves while the filter pump runs; the glass card shows water temperature, heat pump with target, pH, chlorine/redox and salt with a traffic light; the cover slides over the water; warnings for pH, chlorine, salt and frost; the pool plant sets itself up at a tap and the water flows visibly through the pipes",pool_pump:"Filter pump",pool_ph:"pH value",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is not available.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",car_hint:'One entity of the car is enough: Home 3D finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is not part of this version.",pack_licensed:"Licensed to {name}",pack_remove:"Remove",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of Home 3D. Please update first (HACS \u203A Home 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_area_hint:"With an area the surface acts like a room: a tap in 3D opens it with the area's devices, it is in the room bar and wears its name.",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_end:"End",roof_end_auto:"as the shape",roof_end_gable:"Gable",roof_end_hint:"How the ridge ends at this end: a gable (an upright wall), a hip or a half-hip \u2013 a hip at one end only, for example.",roof_swap:"Swap sides",roof_turn:"Turn",roof_turn_hint:"Turns this roof part in the plan (clockwise), e.g. for a wing at an angle. Dormers and cross gables on it turn along. 0\xB0 = as before.",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",devices_hide_all:"Hide all {n} in the room panel",devices_show_all:"Show all {n} again",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",sill_board:"Sill",sill_board_hint:"Automatic: a window board inside and a sill outside from a sill height of 30 cm; none for a window that sits directly on another one (transom light, split glass front).",sill_board_auto:"automatic",sill_board_none:"none",sill_board_inside:"inside only",sill_board_outside:"outside only",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_angle:"Opening angle",door_angle_hint:"How far the door stands open in 3D: without a sensor always, with one as soon as it reports open. Default: half open without a sensor, fully open with one.",door_angle_default:"Default",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",lib_room_all:"All rooms",lib_room_living:"Living",lib_room_dining:"Dining",lib_room_kitchen:"Kitchen",lib_room_bedroom:"Bedroom",lib_room_kids:"Kids",lib_room_bath:"Bathroom",lib_room_office:"Office",lib_room_hall:"Hall",lib_room_utility:"Utility",lib_room_garage:"Garage",lib_room_garden:"Garden",lib_room_hobby:"Hobby & fitness",lib_kind_sofa:"Sofas",lib_kind_seating:"Seating",lib_kind_table:"Tables",lib_kind_storage:"Cabinets & shelves",lib_kind_bed:"Beds",lib_kind_kitchen:"Kitchen",lib_kind_appliance:"Appliances",lib_kind_bath:"Bathroom",lib_kind_lamp:"Lights",lib_kind_media:"TV & audio",lib_kind_office:"Office",lib_kind_tech:"Tech & smart home",lib_kind_heating:"Heating & climate",lib_kind_energy:"Energy",lib_kind_household:"Household",lib_kind_deco:"Decoration",lib_kind_plant:"Plants",lib_kind_outdoor:"Garden & outdoors",lib_kind_kids:"Kids",lib_kind_sport:"Fitness",lib_kind_pets:"Pets",lib_kind_vehicle:"Vehicles",lib_kind_stairs:"Stairs & railings",lib_kind_architecture:"Architecture",lib_recent:"Recently used",lib_favorites:"Favourites",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_chip_electric:"Linkable",lib_chip_light:"Lights up",lib_chip_outdoor:"Outdoors",lib_more:"Show {n} more",lib_basic:"Basic",lib_sizes:"{n} sizes",lib_hint_room:"Suggested for the open room \u2013 switch above.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_rise:"Rise (\xB0)",strip_rise_hint:"The strip rises along its length, e.g. up the stairs or along a handrail (~35\u201340\xB0). Its height above the floor is then its middle.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",furn_loft_ladder:"Loft ladder",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_slope:"Sloping",wall_slope_hint:"Sloping wall: a height of its own at each corner, the top runs straight between them \u2013 a lean-to, a slope, clerestory windows on the tall side. Windows and doors stay under the top.",wall_slope_start:"Height at corner {n} (m)",wall_slope_end:"Height at corner {n} (m)",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of Home 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",theme_auto:"Auto (Day/Neon by the sun)",persons:"People",locate:"Locating",persons_figure:"Figure",persons_pin:"Pin",persons_off:"off",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_from:"Glow from (hour, the day before)",bin_until:"until (hour, on pickup day)",bin_out:"Put out (helper)",bin_out_hint:'Optional: on while the bin stands outside (input_boolean, switch or binary sensor). It then stops glowing and its tag says "put out \u2713"; a tap on the bin switches a helper or switch. A nightly automation turns it back off.',bin_out_done:"put out \u2713",bin_out_mark:"Mark as put out",bin_next_only:"Label only the next pickup",bin_days:"Show tags only \u2026 days before",bin_days_always:"always",bin_tags_hint:'For all bins. Bins without a tag still show in "Today in the household" and show their pickups when tapped.',hh_service2:"{name}: {what} due",hh_service2_entity:"Second service (e.g. dock)",hh_service2_min:"Second due at (\u2264 percent or days)",bin_none:"No pickup in sight",hh_title:"Today in the household",hh_notes:"Pinboard (text helper)",hh_notes_hint:'A text helper (input_text) or sensor whose text stands in "Today in the household" \u2013 separate several lines with |. Automations write into it ("parcel is in the garage"), the card shows it.',heat_sensor:"Heating (sensor)",heat_sensor_hint:'When the thermostat does not say whether it heats (Tuya valves report a "work state"), pick that sensor here: on/opened/heating or an opening above 0 % makes the radiator glow.',door_lock:"Smart lock",door_lock_hint:"The door's lock (Nuki, Aqara \u2026): a pin at the door shows locked or open, a tap locks or unlocks.",door_lock_btn:"Lock",door_unlock_btn:"Unlock",door_lock_confirm:"Really lock {name}?",door_unlock_confirm:"Really unlock {name}?",garage_pulse_hint:"A switch or button as the drive: a tap on the door gives it a pulse (a switch is turned on, a button pressed); whether the door is open comes from the contact.",clock:"Clock",clock_off:"Off",clock_tl:"\u2196 clock",clock_tr:"\u2197 clock",clock_bl:"\u2199 clock",clock_br:"\u2198 clock",editor_floor:"Editor's start floor",editor_floor_auto:"First of the list",editor_floor_hint:"The floor the editor opens with.",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",furn_waste_bin:"Waste bin",furn_mailbox:"Mailbox",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",tech_mount:"Mounting",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_status:"Status (connection, state)",ap_clients_sensor:"Sensor: connected clients",ap_clients:"{n} clients",ap_offline:"Offline",pin_standby:"Standby",ap_hint:"The ring glows blue while the access point is there and red when it is gone \u2013 its symbol then shows too. Diagnostic entities (UniFi's, for example) are offered here as well.",heater_entity:"Device (water_heater, thermostat or switch)",heater_temp:"Sensor: water temperature (optional)",heater_hint:"The tank glows warm while it heats (thermostat heating, switch on or power above the threshold) and shows the water temperature \u2013 from the sensor or from the device itself.",furn_lamp_fan:"Ceiling fan with light",fan_entity:"Fan (fan entity)",fan_hint:"The light above switches the lamp. With a fan its blades turn with its speed, and it gets a symbol of its own beside it: a tap switches it, a long press sets the speed.",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_group_switches:"Home technology",wv_cat_switches:"Switches",gang_count_switch:"Buttons in the frame",gang_count_socket:"Sockets in the frame",socket_kind:"Kind",socket_indoor:"Indoor",socket_outdoor:"Outdoor socket with lid",gang_switch:"Button switches",gang_socket:"Socket switches",gang_switch_hint:"Every button gets its own entity (a light, a switch, a fan) and glows while it is on \u2013 a light in its colour. A tap switches it; with several buttons a small menu opens.",gang_socket_hint:"Every socket gets its own entity (the relay, the smart plug) and, if you like, a power sensor; it glows green while it is on. The same entity may sit on several sockets \u2013 two sockets on one relay.",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:'The bin glows from the set hour the day before until the hour on pickup day (for all bins); its pin says "Today" or "Tomorrow", a tap on the bin shows its next pickups. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.',bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",pro_name_household:"Household Pro",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',awning_cover:"Awning (cover)",motor_cover:"Motor (cover)",curtain_side:"Opens to",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",motor_time:"Run time (s)",motor_invert_hint:"For covers that report 100 % while the curtain is closed or the screen is down.",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_soon:"coming soon",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",show_when:"When it shows",show_when_entity:"Only while available",show_from:"From",show_to:"To",show_start:"From",show_end:"Until",show_add_interval:"Interval",show_when_hint:"With no rule it always shows. With an entity it hides while that entity is unavailable; with intervals it shows only inside them. Days count every year, whatever year the picker shows (Dec to Jan runs over the new year); times count every day (22:00 to 06:00 runs over midnight).",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_meter_reading:"Meter reading (m\xB3 or litres)",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},Iu=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],zn=new Map,Fi=new Map;function Di(o){let e=(o??navigator.language).toLowerCase(),n=e.startsWith("no")?"nb":e.slice(0,2);return Iu.includes(n)?n:null}function qt(o){let e=Di(o);return!e||zn.has(e)}function lo(o){let e=Di(o);if(!e||zn.has(e))return Promise.resolve();let n=Fi.get(e);if(!n){let t=new URL(`./lang/${e}.json?v=3e9df825cd96`,import.meta.url).href;n=fetch(t).then(r=>r.ok?r.json():{}).then(r=>{zn.set(e,r&&typeof r=="object"?r:{})}).catch(()=>{zn.set(e,{})}).finally(()=>Fi.delete(e)),Fi.set(e,n)}return n}function $(o,e,n={}){let t=o?.language??navigator.language,r=t.startsWith("de")?null:Di(t),s=(t.startsWith("de")?Oa:r&&zn.get(r)||Ba)[e]??Ba[e]??Oa[e]??e;for(let[a,l]of Object.entries(n))s=s.replace(`{${a}}`,String(l));return s}function ie(o,e,n=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:n})}var Fu=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],Du=["fun_pets","fun_halloween"],Hu=["pool"];function Hi(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("home3d.lab","1"):o==="0"&&localStorage.removeItem("home3d.lab"),localStorage.getItem("home3d.lab")==="1"}catch{return!1}}function Na(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("home3d.projection","1"):o==="0"&&localStorage.removeItem("home3d.projection"),localStorage.getItem("home3d.projection")==="1"}catch{return!1}}function co(o){return!Hu.includes(o)||o!=="diagnostics"&&o!=="locate"&&V(o)||Hi()}var Wu=["fridge_smart"];function Lu(o){return Fu.includes(o)||Wu.includes(o)||Du.includes(o)}var Cu=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","household","fridge_smart","fun_pets","fun_halloween"];function Ou(o=Je()){let e=new Set(Cu);for(let n of o)for(let t of n.features??[])Lu(t)&&e.add(t);return e}function V(o,e){return Ou(e).has(o)}function Li(o){return o?.settings.person_look??"figure"}function uo(o){return Li(o)!=="off"}var Va=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function Wi(o){let e=0;for(let n of o)e=e*31+n.charCodeAt(0)>>>0;return Va[e%Va.length]}var Ka=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Bu(o,e,n){let t=Ka(n);if(!t||t==="unknown"||t==="unavailable"||t==="not home"||t==="away")return null;for(let r of e.floors)for(let i of r.rooms)if([i.name,i.area_id??"",i.area_id?o.areas?.[i.area_id]?.name??"":""].filter(Boolean).map(Ka).includes(t))return{floorId:r.id,room:i};return null}function Ga(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Nu(o){return!["home","on","unknown","unavailable",""].includes(o)}function Ua(o,e){let n=[],t=new Map;for(let r of e.presence){let i=o.states[r.person];if(!i||!r.sensor||i.state!=="home"&&i.state!=="on")continue;let s=o.states[r.sensor];if(!s)continue;let a=Bu(o,e,s.state);if(!a)continue;let l=t.get(a.room.id)??0;t.set(a.room.id,l+1);let[d,c]=Ee(a.room.points),u=-Math.PI/2+.9+l*1.15,h=.75,p=i.attributes.friendly_name??r.person;n.push({id:r.person,name:p,initials:Ga(p),picture:i.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:d+Math.cos(u)*h,z:c+Math.sin(u)*h})}return n}function ho(o,e,n=new Set,t=Date.now()){let r=[];for(let[u,h]of Object.entries(o.states)){let p=h.attributes;if(!u.startsWith("sensor.")||p.home3d_locate!==!0||typeof p.room_id!="string")continue;let g=null;for(let v of e.floors){let w=v.rooms.find(f=>f.id===p.room_id);w&&(g={floorId:v.id,room:w})}if(!g)continue;let _=typeof p.last_seen=="string"?Date.parse(p.last_seen):NaN,m=typeof p.since=="string"?Date.parse(p.since):NaN;r.push({entityId:u,name:typeof p.device_name=="string"?p.device_name:u,person:typeof p.person=="string"?p.person:null,floorId:g.floorId,room:g.room,seen:Number.isFinite(_)?_:0,since:Number.isFinite(m)?m:0,probability:typeof p.probability=="number"?p.probability:0,worn:p.wearable===!0})}let i=[],s=new Map,a=new Map,l=(u,h)=>{let p=s.get(u.room.id)??0;if(s.set(u.room.id,p+1),!h.thing){let v=a.get(u.room.id);v||a.set(u.room.id,v=ju(o,e,u.floorId,u.room));let w=v.shift();if(w){i.push({...h,floorId:u.floorId,roomId:u.room.id,x:w[0],z:w[1]});return}}let[g,_]=Ee(u.room.points),m=-Math.PI/2+.9+p*1.15;i.push({...h,floorId:u.floorId,roomId:u.room.id,x:g+Math.cos(m)*.75,z:_+Math.sin(m)*.75})},d=(u,h)=>l(u,{id:u.entityId,name:u.name,initials:u.name.slice(0,1).toUpperCase(),picture:null,color:h,entity:u.entityId,tag:u.name,thing:!0}),c=new Map;for(let u of r)u.person?c.set(u.person,[...c.get(u.person)??[],u]):d(u,Wi(u.entityId));for(let[u,h]of c){if(n.has(u))continue;let p=o.states[u];if(p&&Nu(p.state))continue;let g=k=>k.reduce((T,A)=>A.seen>T.seen?A:T),_=h.filter(k=>k.worn&&t-k.seen<12e4),m=g(_.length?_:h),v=k=>t-k.seen<3e4&&t-m.seen<3e4&&k.since>=m.since-12e4,w=null;if(m.worn){let k=h.filter(A=>!A.worn&&A.room.id!==m.room.id&&v(A)),T=k.length?k.reduce((A,M)=>M.probability>A.probability?M:A):null;T&&t-m.since>=6e5&&T.since>m.since+12e4?(w=m,m=T):T&&T.probability>m.probability+.15&&(m=T)}let f=p?.attributes.friendly_name??m.name;l(m,{id:u,name:f,initials:Ga(f),picture:p?.attributes.entity_picture??null,color:Wi(u),entity:m.entityId,tag:f.split(/\s+/)[0]});for(let k of h)k===m||k.room.id===m.room.id||k!==w&&(k.worn&&t-k.seen<12e4||v(k))||d(k,Wi(u))}return i}var Vu=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],Ku=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function Gu(o,e){let n=[],[t,r]=Ee(e.points),i=(s,a)=>s.points.some((l,d)=>{let c=s.points[(d+1)%s.points.length],[u,h]=[c[0]-l[0],c[1]-l[1]],p=u*u+h*h||1,g=Math.max(0,Math.min(1,((a[0]-l[0])*u+(a[1]-l[1])*h)/p));return Math.hypot(l[0]+g*u-a[0],l[1]+g*h-a[1])<.3});for(let s of o.openings){if(s.wall||s.type==="window"&&s.sill>.3||s.type==="garage")continue;let a=o.rooms.find(g=>g.id===s.room_id);if(!a)continue;let l=a.points[s.edge],d=a.points[(s.edge+1)%a.points.length];if(!l||!d)continue;let c=Math.hypot(d[0]-l[0],d[1]-l[1])||1,u=[l[0]+(d[0]-l[0])*s.offset/c,l[1]+(d[1]-l[1])*s.offset/c];if(!i(e,u))continue;let h=o.rooms.find(g=>g.id!==e.id&&i(g,u)),p=.6/(Math.hypot(t-u[0],r-u[1])||1);n.push({to:h?Zt(h.name):null,spot:[u[0]+(t-u[0])*p,u[1]+(r-u[1])*p]})}return n}var Uu=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],Zt=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function ju(o,e,n,t){let r=e.floors.find(d=>d.id===n);if(!r||!t.area_id)return[];let i=r.furniture.filter(d=>K([d.x,d.z],t.points)),s=Gu(r,t),a=[],l=new Set([...Zt(t.name),...Zt(o.areas?.[t.area_id]?.name??""),...Zt(t.area_id),...Uu]);for(let[d,c]of Object.entries(o.states)){if(!d.startsWith("binary_sensor.")||c.state!=="on")continue;let u=c.attributes.device_class;if(u!=="occupancy"&&u!=="presence")continue;let h=o.entities?.[d];if((h?.area_id??(h?.device_id?o.devices?.[h.device_id]?.area_id:null))!==t.area_id)continue;let g=new Set(Zt(String(c.attributes.friendly_name??d.slice(14))).filter(w=>!l.has(w))),_=i.find(w=>w.name&&Zt(w.name).some(f=>g.has(f))||Vu.some(([f,k])=>f.test(w.type.split(":").pop()??"")&&k.some(T=>g.has(T)))),m=_?null:s.find(w=>w.to?w.to.some(f=>g.has(f)):[...g].some(f=>Ku.some(k=>f.includes(k)))),v=_?[_.x,_.z]:m?m.spot:null;v&&!a.some(([w,f])=>w===v[0]&&f===v[1])&&a.push(v)}return a}function ja(o,e,n,t){let r=new Map,i=s=>!!s&&o.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let d of s.rooms)for(let c of ro(o,fe(o,d.area_id)))C(c)==="light"&&a.add(c);for(let d of s.placements)C(d.entity_id)==="light"&&a.add(d.entity_id);let l=s.openings.filter(d=>{let c=n.get(d.id);if(!c)return!1;if(d.type==="garage")return(Ue(o,c,"garage").cover??1)<.95;if(d.type==="door")return i(c.contact)||i(c.contact2??null);let u=Ue(o,c,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;r.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(d=>o.states[d]?.state==="on").length,open:l,persons:t.filter(d=>d.floorId===s.id).length})}return r}function qa(o,e){let n=[e.rooms===1?$(o,"floor_rooms_one"):$(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&n.push($(o,"floor_lights",{n:e.lightsOn})),e.open&&n.push($(o,"floor_open",{n:e.open})),e.persons&&n.push($(o,"floor_persons",{n:e.persons})),n.join(" \xB7 ")}var Za={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function po(o){return Za[o]}function je(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function kt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Za[o]}"/></svg>`}var tt=(o,e)=>$(o,e);function de(o,e){if(!e||q(e))return tt(o,"state_unavailable");let n=e.attributes;switch(C(e.entity_id)){case"light":return e.state!=="on"?tt(o,"state_off"):typeof n.brightness=="number"?`${Math.round(n.brightness/255*100)} %`:tt(o,"state_on");case"switch":case"fan":return tt(o,e.state==="on"?"state_on":"state_off");case"cover":return typeof n.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${n.current_position} %`:fo(o,e.state);case"climate":{let t=typeof n.current_temperature=="number"?`${ie(o,n.current_temperature,1)} ${o?Fe(o):"\xB0C"}`:null;return e.state==="off"?t?`${t} \xB7 ${tt(o,"state_off")}`:tt(o,"state_off"):t??fo(o,e.state)}case"media":{let t=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",r=[n.app_name,n.media_title,n.source].find(i=>typeof i=="string"&&i);return t&&r?r:fo(o,e.state)}case"lock":case"camera":return fo(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(n.device_class)?tt(o,e.state==="on"?"state_open":"state_closed"):tt(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let t=Number(e.state),r=n.unit_of_measurement??"",i=o?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(t)?`${ie(o,t,i)}${r?` ${r}`:""}`:e.state}default:return""}}function fo(o,e){let n=`state_${e}`,t=$(o,n);return t===n?e:t}function Ya(o,e){let n=[],t=new Set(e.floors.flatMap(r=>r.furniture.map(i=>i.look_of).filter(i=>!!i)));for(let r of e.floors)for(let i of r.placements){let s=C(i.entity_id),a=o.states[i.entity_id];if(!s||!a)continue;let l=r.rooms.find(c=>c.points.length>=3&&K([i.x,i.z],c.points))??null,d=l?.area_id?o.areas?.[l.area_id]?.name:void 0;n.push({id:i.entity_id,floorId:r.id,roomId:l?.id??null,x:i.x,z:i.z,y:i.y??Ut(s,r.height,i.mount??null),lamp:s==="light"?i.mount??"ceiling":null,model:s==="camera"?i.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...s==="camera"&&t.has(i.entity_id)?{ownLook:!0}:{},motion:s==="camera"?qu(o,i.entity_id):void 0,fov:i.fov??void 0,reach:i.reach??void 0,tilt:i.tilt??void 0,rotation:i.rotation??0,icon:i.icon?je(i.icon):kt(s),cone:s==="camera"&&i.cone===!1?!1:void 0,name:i.name||G(o,i.entity_id,d),ownName:i.name||void 0,showName:!!i.show_name,text:de(o,a),active:Pe(a),unavailable:q(a),glow:s==="light"?Oi(vt(a),i.glow_scale):null,show:i.marker??void 0,fixed:!!i.locked})}return n}function Ci(o,e){let n=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(n)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(n)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(n)?"pet":"motion"}function qu(o,e){return qe(o,e).some(n=>o.states[n]?.state==="on")}var Qa=new Map;function Ja(o){Qa=new Map(o?.floors.flatMap(e=>e.placements.filter(n=>Array.isArray(n.detect_sensors)).map(n=>[n.entity_id,n.detect_sensors]))??[])}function qe(o,e){return Qa.get(e)??Zu(o,e)}function Zu(o,e){let n=o.entities?.[e]?.device_id;return n?Object.values(o.entities??{}).filter(t=>t.device_id===n&&t.entity_id.startsWith("binary_sensor.")).map(t=>t.entity_id).filter(t=>["motion","occupancy","presence"].includes(String(o.states[t]?.attributes.device_class))):[]}function Xa(o){return o.floors.flatMap(e=>e.placements.map(n=>n.entity_id))}function xe(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function mo(o,e){let n=e.slice(0,e.indexOf("."));return o.callService(n,"toggle",{entity_id:e})}function Oi(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}function Yu(o,e,n){let t=o.q[0]-o.p[0],r=o.q[1]-o.p[1],i=t*t+r*r,s=i>0?Math.min(1,Math.max(0,((e-o.p[0])*t+(n-o.p[1])*r)/i)):0;return o.h0+(o.h1-o.h0)*s}var Ae=(o,e)=>[o[0]-e[0],o[1]-e[1]],nt=(o,e)=>[o[0]+e[0],o[1]+e[1]],Ze=(o,e)=>[o[0]*e,o[1]*e],go=(o,e)=>o[0]*e[0]+o[1]*e[1],xt=(o,e)=>o[0]*e[1]-o[1]*e[0],En=o=>Math.hypot(o[0],o[1]),ot=o=>{let e=En(o)||1;return[o[0]/e,o[1]/e]},el=o=>[-o[1],o[0]],tl=o=>[o[1],-o[0]];function it(o,e,n=[]){let t=e.eps??.005,r=[],i=n.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),s=[],a=S=>{for(let z=0;z<s.length;z++)if(Math.abs(s[z][0]-S[0])<=t&&Math.abs(s[z][1]-S[1])<=t)return z;return s.push([S[0],S[1]]),s.length-1},l=[];for(let S of o){let z=S.points;if(z.length<3||Math.abs(Ie(z))<1e-6)continue;let D=Ie(z)>0,P=z.map(a);for(let F=0;F<z.length;F++){let B=P[F],Z=P[(F+1)%z.length];B!==Z&&l.push(D?{u:B,v:Z,room:S.id,edge:F,forward:!0}:{u:Z,v:B,room:S.id,edge:F,forward:!1})}}let d=i.map(S=>[a(S.a),a(S.b)]),c=new Set;for(let S of o){let z=S.points;z.length<3||(S.wall_splits??[]).forEach((D,P)=>{if(!D||P>=z.length)return;let F=z[P],B=Ae(z[(P+1)%z.length],F),Z=En(B);for(let R of D)R>t&&R<Z-t&&c.add(a(nt(F,Ze(B,R/Z))))})}let u=[];for(let S of l){let z=s[S.u],D=s[S.v],P=Ae(D,z),F=En(P),B=Ze(P,1/F),Z=[];for(let J=0;J<s.length;J++){if(J===S.u||J===S.v)continue;let U=Ae(s[J],z),Y=go(U,B);Y<=t||Y>=F-t||Math.abs(xt(B,U))<=t&&Z.push({t:Y,id:J})}Z.sort((J,U)=>J.t-U.t);let R=[{t:0,id:S.u},...Z,{t:F,id:S.v}];for(let J=0;J+1<R.length;J++){let U=R[J],Y=R[J+1],_e=S.forward?U.t:F-Y.t,he=S.forward?Y.t:F-U.t;u.push({u:U.id,v:Y.id,room:S.room,edge:S.edge,t0:_e,t1:he})}}let h=new Map;for(let S of u){let z=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,D=h.get(z);D||h.set(z,D=[]),D.push(S)}let p=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),g=new Map;for(let S of u){let z=`${S.room}:${S.edge}`;g.set(z,[...g.get(z)??[],S.t0].sort((D,P)=>D-P))}let _=S=>{let z=o.find(P=>P.id===S.room)?.wall_heights?.[S.edge];if(!Array.isArray(z))return z;let D=g.get(`${S.room}:${S.edge}`)??[];return z[D.indexOf(S.t0)]??null},m=S=>{let z=S.map(_).filter(P=>typeof P=="number"&&P>0);if(z.length)return Math.min(...z);let D=S.map(P=>o.find(F=>F.id===P.room)?.ceiling_height);return D.every(P=>typeof P=="number"&&P>0)?Math.max(...D):void 0},v=S=>{let z=S.map(D=>o.find(P=>P.id===D.room)?.wall_thickness?.[D.edge]).filter(D=>typeof D=="number"&&D>0);return z.length?Math.max(...z):void 0},w=S=>{for(let z of S){let D=o.find(Z=>Z.id===z.room),P=D?.wall_slopes?.[z.edge];if(!D||!P)continue;let F=D.points[z.edge],B=D.points[(z.edge+1)%D.points.length];return{p:[F[0],F[1]],q:[B[0],B[1]],h0:Math.max(.05,P[0]),h1:Math.max(.05,P[1])}}},f=S=>S.some(z=>_(z)===0),k=S=>{let z=w(S);return z?{height:Math.max(z.h0,z.h1),slope:z}:{height:m(S)}},T=[],A=[];for(let S of h.values()){let z=S[0],D=S.find(P=>P!==z&&P.u===z.v&&P.v===z.u&&P.room!==z.room);for(let P of S)P!==z&&P!==D&&P.room!==z.room&&r.push(`overlap:${z.room}:${P.room}`);if(f(D?[z,D]:[z])){D&&T.push([z.room,D.room]);continue}if(D){let P=v([z,D])??e.interior;A.push({a:z.u,b:z.v,left:P/2,right:P/2,exterior:!1,roomLeft:z.room,roomRight:D.room,sources:[p(z),p(D)],...k([z,D])})}else A.push({a:z.u,b:z.v,left:0,right:v([z])??e.exterior,exterior:!0,roomLeft:z.room,roomRight:null,sources:[p(z)],...k([z])})}let M=S=>ot(Ae(s[S.b],s[S.a])),W=new Set;for(let S of A){if(S.exterior||S.free)continue;let z=new Set;for(let P of[S.a,S.b])for(let F of A)!F.exterior||F.free||F.a!==P&&F.b!==P||Math.abs(xt(M(S),M(F)))>1e-6||(F.roomLeft===S.roomLeft?z.add("left"):F.roomLeft===S.roomRight&&z.add("right"));if(z.size!==1)continue;let D=S.left+S.right;z.has("left")?(S.left=0,S.right=D):(S.left=D,S.right=0),W.add(S)}for(let S of[...W]){let z=[S];for(;z.length;){let D=z.pop();for(let P of[D.a,D.b])for(let F of A){if(F===D||F.exterior||F.free||W.has(F)||F.a!==P&&F.b!==P||Math.abs(xt(M(D),M(F)))>1e-6)continue;let B=F.left+F.right,Z=D.right===0==go(M(D),M(F))>0;F.left=Z?B:0,F.right=Z?0:B,W.add(F),z.push(F)}}}i.forEach((S,z)=>{let[D,P]=d[z];if(D===P)return;let F=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],B=o.find(J=>J.points.length>=3&&K(F,J.points))?.id??null,Z=(S.thickness??e.interior)/2,R=typeof S.height=="number"&&S.height>0?S.height:void 0;A.push({free:S.id,a:D,b:P,left:Z,right:Z,exterior:!1,roomLeft:B,roomRight:B,sources:[],height:R})}),A=Ju(A,s,c);let L=eh(A,s);return{walls:A.map((S,z)=>{let D=s[S.a],P=s[S.b],F=L.get(`${z}:a`),B=L.get(`${z}:b`),Z=th([F.right,B.left,P,B.right,F.left,D],1e-6);return{id:Qu(D,P),a:[D[0],D[1]],b:[P[0],P[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:Z,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:T}}function Qu(o,e){let n=i=>Math.round(i*100),[t,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${n(t[0])}_${n(t[1])}_${n(r[0])}_${n(r[1])}`}function nl(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Ju(o,e,n=new Set){let t=o.slice(),r=!0;for(;r;){r=!1;let i=new Map;t.forEach((s,a)=>{for(let l of[s.a,s.b]){let d=i.get(l);d||i.set(l,d=[]),d.push(a)}});for(let[s,a]of i){if(a.length!==2||n.has(s))continue;let l=t[a[0]],d=t[a[1]];if(l.b!==s&&(l=nl(l)),d.a!==s&&(d=nl(d)),l.a===d.b)continue;let c=ot(Ae(e[l.b],e[l.a])),u=ot(Ae(e[d.b],e[d.a]));if(Math.abs(xt(c,u))>1e-6||go(c,u)<=0||l.free||d.free||l.height!==d.height||l.slope||d.slope||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let h={...l,b:d.b,sources:Xu(l.sources,d.sources)},p=t.filter((g,_)=>_!==a[0]&&_!==a[1]);p.push(h),t.length=0,t.push(...p),r=!0;break}}return t}function Xu(o,e){let n=o.map(t=>({...t}));for(let t of e){let r=n.find(i=>i.room_id===t.room_id&&i.edge===t.edge&&(Math.abs(i.t1-t.t0)<1e-6||Math.abs(t.t1-i.t0)<1e-6));r?(r.t0=Math.min(r.t0,t.t0),r.t1=Math.max(r.t1,t.t1)):n.push({...t})}return n}function eh(o,e){let n=new Map;o.forEach((r,i)=>{let s=ot(Ae(e[r.b],e[r.a])),a=[[r.a,{key:`${i}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${i}:b`,d:Ze(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,d]of a){let c=n.get(l);c||n.set(l,c=[]),c.push(d)}});let t=new Map;for(let[r,i]of n){let s=e[r];i.sort((d,c)=>d.angle-c.angle);let a=d=>({left:nt(s,Ze(el(d.d),d.left)),right:nt(s,Ze(tl(d.d),d.right))});for(let d of i)t.set(d.key,a(d));if(i.length<2)continue;let l=4*Math.max(...i.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<i.length;d++){let c=i[d],u=i[(d+1)%i.length],h=nt(s,Ze(el(c.d),c.left)),p=nt(s,Ze(tl(u.d),u.right)),g=xt(c.d,u.d);if(Math.abs(g)<1e-4)continue;let _=xt(Ae(p,h),u.d)/g,m=nt(h,Ze(c.d,_));En(Ae(m,s))>l||(t.get(c.key).left=m,t.get(u.key).right=m)}}return t}function th(o,e){let n=o.filter((r,i)=>En(Ae(r,o[(i+1)%o.length]))>e),t=!0;for(;t&&n.length>3;){t=!1;for(let r=0;r<n.length;r++){let i=n[(r+n.length-1)%n.length],s=n[r],a=n[(r+1)%n.length],l=Ae(s,i),d=Ae(a,s);if(Math.abs(xt(ot(l),ot(d)))<1e-7&&go(l,d)>0){n=n.filter((c,u)=>u!==r),t=!0;break}}}return n}function _o(o,e,n){let t=o.points[e],r=o.points[(e+1)%o.points.length],i=ot(Ae(r,t));return nt(t,Ze(i,n))}function ol(o,e,n){if(o.wall){let r=n.find(a=>a.id===o.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let i=ot(Ae(r.b,r.a));return{room:{id:o.room_id,name:"",area_id:null,points:[r.a,r.b,nt(r.a,[-i[1],i[0]])]},edge:0}}let t=e.find(r=>r.id===o.room_id);return t&&o.edge<t.points.length?{room:t,edge:o.edge}:null}function il(o,e,n,t){let r=e.rotation*Math.PI/180,i=[-Math.sin(r),Math.cos(r)],s=Math.max(.005,e.d),a=null;for(let d of o){let c=Math.hypot(d.b[0]-d.a[0],d.b[1]-d.a[1]);if(c<.05)continue;let u=[(d.b[0]-d.a[0])/c,(d.b[1]-d.a[1])/c],h=(e.x-d.a[0])*u[0]+(e.z-d.a[1])*u[1];if(h<-.02||h>c+.02)continue;let p=[-u[1],u[0]],g=(e.x-d.a[0])*p[0]+(e.z-d.a[1])*p[1],_=i[0]*p[0]+i[1]*p[1]>=0?1:-1;if(Math.abs(i[0]*p[0]+i[1]*p[1])<.5)continue;let m=_>0?d.left:-d.right,v=g>-d.right-1e-4&&g<d.left+1e-4,w=Math.abs(g-(m+_*(s/2)));if(!v&&w>.03||a&&w>=a.off)continue;let f=d.a[0]+u[0]*h,k=d.a[1]+u[1]*h,T=v?m+_*(s/2):g,A=d.slope?Yu(d.slope,e.x,e.z):Math.min(n,d.height??n);a={x:f+p[0]*T,z:k+p[1]*T,top:A,off:w}}if(!a)return{x:e.x,z:e.z,y:t};let l=e.mount_y==null?Math.max(.02,Math.min(t,a.top-.1,a.top-e.h-.02)):t;return{x:a.x,z:a.z,y:l}}var rt=Math.PI/180;function rl(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let n=e*rt;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(n),s:Math.sin(n)}}function sl(o,e,n=!1){if(!o)return e;let t=e[0]-o.p[0],r=e[1]-o.p[1],i=n?-o.s:o.s;return[o.p[0]+t*o.c-r*i,o.p[1]+t*i+r*o.c]}function St(o){let e=Math.min(o.x0,o.x1),n=Math.max(o.x0,o.x1),t=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1),i=rl(o),s=o.axis==="x"?(l,d)=>[l,o.flip?r-d:t+d]:(l,d)=>[o.flip?n-d:e+d,l],a=i?(l,d)=>sl(i,s(l,d)):s;return o.axis==="x"?{u0:e,u1:n,w:r-t,at:a}:{u0:t,u1:r,w:n-e,at:a}}function nh(o,e,n,t=1e-6){let[r,i]=ul(o,e,n),s=St({...o,rotation:0});return r>=s.u0-t&&r<=s.u1+t&&i>=-t&&i<=s.w+t}function Yt(o){let e=St(o).w,n=o.eave_a,t=o.eave_b,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*rt),i=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*rt);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:n,y:()=>n};if(o.shape==="pent")return{vr:e,rh:n+e*r,y:l=>n+l*r};if(o.shape==="mansard"){let l=dl(e,n,t,r,i);return{vr:l.vr,rh:l.rh,y:l.y}}let s=r+i>1e-6?Math.min(e,Math.max(0,(t-n+e*i)/(r+i))):e/2,a=n+s*r;return{vr:s,rh:a,y:l=>l<=s?n+l*r:t+(e-l)*i}}function Bi(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var al=.14;function ll(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function Ni(o,e){return Yt(o).rh-al>e+.01}function cl(o,e,n,t){let r=null,i=Math.max(0,o.settings.roof.overhang??0);for(let s of Bi(o)){if(s.open||t!==void 0&&!Ni(s,t)||!nh(s,e,n)||s.points&&s.points.length>=3&&!K([e,n],s.points))continue;let[a,l]=ul(s,e,n),d=s.shape==="flat"||s.shape==="parapet",c=Math.max(0,s.overhang??i),h=((d?null:ih(oh(s,{u0:c,u1:c,a:c,b:c}),a,l))??Yt(s).y(l))-al;r=r===null?h:Math.max(r,h)}return r}var An=Math.tan(30*rt);function dl(o,e,n,t,r){let i=Math.min(o*.3,t>1e-6?2.4/t:o*.3),s=Math.min(o*.3,r>1e-6?2.4/r:o*.3),a=e+i*t,l=n+s*r,d=Math.min(o-s,Math.max(i,(l-a+An*(o-s+i))/(2*An))),c=a+(d-i)*An;return{vla:i,vlb:s,yla:a,ylb:l,vr:d,rh:c,y:h=>h<=i?e+h*t:h<=d?a+(h-i)*An:h<=o-s?l+(o-s-h)*An:n+(o-h)*r}}function oh(o,e){let n=St(o),t=Yt(o),r=n.w,i=Math.max(0,e.a),s=Math.max(0,e.b),a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),d=(R,J)=>[R,J,t.y(J)],c=d(a,-i),u=d(l,-i),h=d(l,r+s),p=d(a,r+s),g=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*rt),_=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*rt);if(o.shape==="pent"){let R=[c,u,h,p],J=[[0,t.y(0)],[r,t.y(r)]];return{faces:[R],rim:R,ridges:[[h,p]],gable:J,gables:[J,J]}}if(o.shape==="pyramid"){let R=[(n.u0+n.u1)/2,t.vr,t.rh];return{faces:[[c,u,R],[u,h,R],[h,p,R],[p,c,R]],rim:[c,u,h,p],ridges:[[c,R],[p,R],[u,R],[h,R]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let R=dl(r,o.eave_a,o.eave_b,g,_),J=[[0,t.y(0)],[R.vla,R.yla],[R.vr,R.rh],[r-R.vlb,R.ylb],[r,t.y(r)]],U=[a,R.vla,R.yla],Y=[l,R.vla,R.yla],_e=[a,r-R.vlb,R.ylb],he=[l,r-R.vlb,R.ylb],re=[a,R.vr,R.rh],ye=[l,R.vr,R.rh];return{faces:[[c,u,Y,U],[U,Y,ye,re],[re,ye,he,_e],[_e,he,h,p]],rim:[c,u,Y,ye,he,h,p,_e,re,U],ridges:[[re,ye],[U,Y],[_e,he]],gable:J,gables:[J,J]}}let[m,v]=Vi(o)??["gable","gable"],w=Ki(o,[m,v]),f=m==="gable"?[a,t.vr,t.rh]:[n.u0+w.d0,t.vr,t.rh],k=v==="gable"?[l,t.vr,t.rh]:[n.u1-w.d1,t.vr,t.rh],T=[a,w.vah,w.yh],A=[a,w.vbh,w.yh],M=[l,w.vah,w.yh],W=[l,w.vbh,w.yh],L=m==="halfhip",I=v==="halfhip",S=[[c,u,...I?[M]:[],k,f,...L?[T]:[]],[f,k,...I?[W]:[],h,p,...L?[A]:[]]];m==="hip"&&S.push([p,c,f]),L&&S.push([A,T,f]),v==="hip"&&S.push([u,h,k]),I&&S.push([M,W,k]);let z=[c,u,...v==="gable"?[k]:I?[M,W]:[],h,p,...m==="gable"?[f]:L?[A,T]:[]],D=[[f,k]];m==="hip"&&D.push([c,f],[p,f]),L&&D.push([T,f],[A,f]),v==="hip"&&D.push([u,k],[h,k]),I&&D.push([M,k],[W,k]);let P=[[0,t.y(0)],[t.vr,t.rh],[r,t.y(r)]],F=[[0,t.y(0)],[w.vah,w.yh],[w.vbh,w.yh],[r,t.y(r)]],B=R=>R==="gable"?P:R==="halfhip"?F:null,Z=[B(m),B(v)];return{faces:S,rim:z,ridges:D,gable:Z[0]??Z[1],gables:Z}}function Vi(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,n=t=>t==="gable"||t==="hip"||t==="halfhip"?t:e;return[n(o.end_u0),n(o.end_u1)]}function Ki(o,e){let n=St(o),t=Yt(o),r=n.w,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*rt),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*rt),a=n.u1-n.u0,l=e[0]!=="gable"&&e[1]!=="gable"?a/2:a,d=Math.min(t.y(0),t.y(r)),c=d+(t.rh-d)*.55,u=i>1e-6?Math.min(t.vr,(c-o.eave_a)/i):t.vr,h=s>1e-6?Math.max(t.vr,r-(c-o.eave_b)/s):t.vr,p=Math.min(l,Math.min(t.vr,r-t.vr)||r/2),g=Math.min(l-.1,(t.rh-c)/Math.max(.2,i)),_=m=>m==="hip"?p:m==="halfhip"?g:0;return{d0:_(e[0]),d1:_(e[1]),yh:c,vah:u,vbh:h}}function ih(o,e,n){let t=null;for(let r of o.faces){if(!K([e,n],r.map(w=>[w[0],w[1]])))continue;let[i,s]=r,a=r.slice(2).find(w=>Math.abs((s[0]-i[0])*(w[1]-i[1])-(s[1]-i[1])*(w[0]-i[0]))>1e-9);if(!a)continue;let l=s[0]-i[0],d=s[2]-i[2],c=s[1]-i[1],u=a[0]-i[0],h=a[2]-i[2],p=a[1]-i[1],g=d*p-c*h,_=c*u-l*p,m=l*h-d*u;if(Math.abs(_)<1e-9)continue;let v=i[2]-(g*(e-i[0])+m*(n-i[1]))/_;t=t===null?v:Math.min(t,v)}return t}function ul(o,e,n){let[t,r]=sl(rl(o),[e,n],!0),i=Math.min(o.x0,o.x1),s=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[t,o.flip?l-r:r-a]:[r,o.flip?s-t:t-i]}function hl(o,e,n){let t=St(e),r=o.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(c=>r.some(u=>K(c,u.points))),s=.35,a=[.15,.5,.85].map(d=>t.u0+(t.u1-t.u0)*d),l=[.15,.5,.85].map(d=>t.w*d);return{a:i(a.map(d=>t.at(d,-s)))?0:n,b:i(a.map(d=>t.at(d,t.w+s)))?0:n,u0:i(l.map(d=>t.at(t.u0-s,d)))?0:n,u1:i(l.map(d=>t.at(t.u1+s,d)))?0:n}}var wo=Math.PI/180,rh=1.13,sh=1.72,vo=.025,$t=.07,pl=.25;function Pn(o,e){let n=[];for(let t of o.floors){if(e&&t.id!==e)continue;let{walls:r}=it(t.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},t.walls??[]);for(let i of r){if(!i.exterior&&!i.free)continue;let s=i.b[0]-i.a[0],a=i.b[1]-i.a[1],l=Math.hypot(s,a);if(l<.5)continue;let d=a/l,c=-s/l,u=Math.min(t.height,i.height??t.height),h=i.sources.find(_=>_.room_id===i.roomLeft)?.edge??null,p={floorId:t.id,room:i.roomLeft,edge:h,free:!!i.free},g=(_,m,v,w)=>n.push({key:_,section:null,side:"top",flat:!1,o:m,eu:v,es:[0,1,0],n:w,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[w[0],w[2]],wall:p});g(`wall:${t.id}:${i.id}`,[i.a[0]+d*i.right,t.elevation,i.a[1]+c*i.right],[s/l,0,a/l],[d,0,c]),i.free&&g(`wall:${t.id}:${i.id}:back`,[i.b[0]-d*i.left,t.elevation,i.b[1]-c*i.left],[-s/l,0,-a/l],[-d,0,-c])}}return n}var fl="ground";function ah(o){let e=[...o.floors.filter(n=>n.rooms.some(t=>t.points.length>=3))].sort((n,t)=>n.elevation-t.elevation);return e.find(n=>n.elevation>-.5)??e[0]??o.floors[0]??null}function lh(o,e){let n=(e.rotation??0)*Math.PI/180,t=[Math.cos(n),0,Math.sin(n)],r=[-Math.sin(n),0,Math.cos(n)],i=ah(o),s=t[0]*e.u+r[0]*e.v,a=t[2]*e.u+r[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:Ve(i,s,a)):e.base??0;return{key:fl,section:null,side:"top",flat:!0,o:[0,l,0],eu:t,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function zt(o,e,n=at(o)){return e.face===fl?lh(o,e):e.face.startsWith("wall:")?Pn(o,e.face.split(":")[1]).find(t=>t.key===e.face)??null:n.find(t=>t.key===e.face)??null}function Gi(o){return o.floors.filter(n=>n.rooms.some(t=>t.points.length>=3)).sort((n,t)=>t.elevation-n.elevation)[0]??null}function at(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>ch(w,hl(o,w,w.overhang??e.overhang)));let n=Gi(o);if(!n)return[];let t=n.rooms.flatMap(w=>w.points.map(f=>f[0])),r=n.rooms.flatMap(w=>w.points.map(f=>f[1])),i=o.settings.wall_exterior+e.overhang,s=Math.min(...t)-i,a=Math.max(...t)+i,l=Math.min(...r)-i,d=Math.max(...r)+i,c=n.elevation+n.height;if(e.type==="flat")return[ml("main",null,s,l,a,d,c+pl)];let u=a-s>=d-l,h=e.ridge==="short"?!u:u,p=(h?d-l:a-s)/2,g=p*Math.tan(e.pitch*wo),_=(w,f,k)=>h?[w,c+k,(l+d)/2+f]:[(s+a)/2+f,c+k,w],[m,v]=h?[s,a]:[l,d];return[-1,1].map(w=>bo(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",_(m,w*p,0),_(v,w*p,0),_(m,0,g),e.pitch,()=>[0,v-m]))}function ch(o,e){let n=St(o),t=Yt(o),r=(f,k,T)=>{let[A,M]=n.at(f,k);return[A,T,M]},i=Math.max(0,e.a),s=Math.max(0,e.b),a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),d=l-a;if(o.shape==="flat"||o.shape==="parapet"){let f=n.at(a,-i),k=n.at(l,n.w+s);return[ml(o.id,o.id,Math.min(f[0],k[0]),Math.min(f[1],k[1]),Math.max(f[0],k[0]),Math.max(f[1],k[1]),o.eave_a+pl)]}if(o.shape==="pent")return[bo(`${o.id}:a`,o.id,"a",r(a,-i,t.y(-i)),r(l,-i,t.y(-i)),r(a,n.w+s,t.y(n.w+s)),o.pitch_a,()=>[0,d])];let c=Vi(o),u=c?Ki(o,c):null,h=o.shape==="pyramid"||c?.[0]==="hip",p=o.shape==="pyramid"||c?.[1]==="hip",g=o.shape==="pyramid"?(n.u1-n.u0)/2:h?u.d0:0,_=o.shape==="pyramid"?(n.u1-n.u0)/2:p?u.d1:0,m=h?n.u0+g-a:0,v=p?l-(n.u1-_):0,w=[];if(t.vr>.3){let f=Math.hypot(t.vr+i,t.rh-t.y(-i));w.push(bo(`${o.id}:a`,o.id,"a",r(a,-i,t.y(-i)),r(l,-i,t.y(-i)),r(a,t.vr,t.rh),o.pitch_a,k=>[m*(k/f),d-v*(k/f)]))}if(n.w-t.vr>.3){let f=Math.hypot(n.w+s-t.vr,t.rh-t.y(n.w+s));w.push(bo(`${o.id}:b`,o.id,"b",r(l,n.w+s,t.y(n.w+s)),r(a,n.w+s,t.y(n.w+s)),r(l,t.vr,t.rh),o.pitch_b,k=>[v*(k/f),d-m*(k/f)]))}if(h||p){let f=t.y(-i),k=t.y(n.w+s),T=[];h&&T.push([`${o.id}:c`,"c",r(a,n.w+s,k),r(a,-i,f),r(n.u0+g,t.vr,t.rh)]),p&&T.push([`${o.id}:d`,"d",r(l,-i,f),r(l,n.w+s,k),r(n.u1-_,t.vr,t.rh)]);for(let[A,M,W,L,I]of T){let S=dh(A,o.id,M,W,L,I);S&&w.push(S)}}return w}function dh(o,e,n,t,r,i){let s=Tn(Mt(r,t));if(s<.3)return null;let a=st(Mt(r,t)),l=Mt(i,t),d=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],c=[l[0]-a[0]*d,l[1]-a[1]*d,l[2]-a[2]*d],u=Tn(c);if(u<.3)return null;let h=st(c),p=st(bl(a,h));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let g=st([-h[0],0,-h[2]]),_=Math.atan2(h[1],Math.hypot(h[0],h[2]))/wo;return{key:o,section:e,side:n,flat:!1,o:t,eu:a,es:h,n:p,lu:s,ls:u,pitch:_,span:v=>{let w=Math.min(1,Math.max(0,v/u));return[d*w,s-(s-d)*w]},facing:[g[0],g[2]]}}function bo(o,e,n,t,r,i,s,a){let l=st(Mt(r,t)),d=st(Mt(i,t)),c=st(bl(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=st([-d[0],0,-d[2]]);return{key:o,section:e,side:n,flat:!1,o:t,eu:l,es:d,n:c,lu:Tn(Mt(r,t)),ls:Tn(Mt(i,t)),pitch:s,span:a,facing:[u[0],u[2]]}}function ml(o,e,n,t,r,i,s){let a=r-n>=i-t,l=a?r-n:i-t,d=a?i-t:r-n;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[n,s,t],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Ui(o){let e=o.module_w||rh,n=o.module_h||sh;return o.portrait===!1?[n,e]:[e,n]}function gl(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function ji(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*wo:o.wall?Math.min(90,Math.max(0,e.tilt??0))*wo:0}function Et(o,e){let[n,t]=Ui(e),r=gl(e),i=Math.max(1,...r),a=(r.length-1)*_l(o,e)+t*Math.cos(ji(o,e));return[i*n+(i-1)*vo,a]}function _l(o,e){let[,n]=Ui(e),t=ji(o,e);return o.wall?n*Math.cos(t)+vo:o.flat?n*Math.cos(t)+Math.max(.3,2*n*Math.sin(t)):n+vo}function uh(o,e,n=!1){let[t,r]=Ui(e),i=[],s=ji(o,e),a=r*Math.cos(s),l=_l(o,e),d=gl(e),c=Math.max(1,...d),u=new Set(e.skip??[]),h=!!o.wall&&t>o.lu+1e-6,p=(_,m,v)=>[o.o[0]+o.eu[0]*_+o.es[0]*m+o.n[0]*v,o.o[1]+o.eu[1]*_+o.es[1]*m+o.n[1]*v,o.o[2]+o.eu[2]*_+o.es[2]*m+o.n[2]*v],g=(_,m)=>{if(o.unbounded)return!0;if(m<-1e-6||m>o.ls+1e-6)return!1;let[v,w]=o.span(m);return _>=v-1e-6&&_<=w+1e-6};return d.forEach((_,m)=>{let v=e.align==="right"?c-_:e.align==="center"?(c-_)/2:0;for(let w=0;w<_;w++){let f=`${m}:${w}`,k=u.has(f);if(k&&!n)continue;let T=e.u+(w+v)*(t+vo),A=e.v+m*l,M=T+t,W=A+(o.flat||o.wall?a:r);if(h){if(!(g((T+M)/2,A)&&g((T+M)/2,W)))continue}else if(![[T,A],[M,A],[M,W],[T,W]].every(([P,F])=>g(P,F)))continue;if(o.wall&&s>.001){let P=$t+r*Math.sin(s),[F,B]=e.flip?[P,$t]:[$t,P],Z=[p(T,A,F),p(M,A,F),p(M,W,B),p(T,W,B)],R=e.flip?A:W,J=[T+.05,M-.05].map(U=>[p(U,R,0),p(U,R,P)]);i.push({corners:Z,posts:J,cell:f,skipped:k});continue}if(!o.flat){i.push({corners:[p(T,A,$t),p(M,A,$t),p(M,W,$t),p(T,W,$t)],posts:[],cell:f,skipped:k});continue}let L=.15,I=L+r*Math.sin(s),[S,z]=e.flip?[W,A]:[A,W],D=[p(T,S,L),p(M,S,L),p(M,z,I),p(T,z,I)];i.push({corners:D,posts:[T+.05,M-.05].flatMap(P=>[[p(P,S,0),p(P,S,L)],[p(P,z,0),p(P,z,I)]]),cell:f,skipped:k})}}),i}function Mt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function Tn(o){return Math.hypot(o[0],o[1],o[2])}function st(o){let e=Tn(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function bl(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var hh=.78,ph=1.18;function fh(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||hh,module_h:o.h||ph}}function mh(o,e){let n=uh(o,fh(e))[0];if(!n)return null;let t=r=>[r[0]-o.n[0]*.05,r[1]-o.n[1]*.05,r[2]-o.n[2]*.05];return[t(n.corners[0]),t(n.corners[1]),t(n.corners[2]),t(n.corners[3])]}function qi(o,e,n){let t=e?mh(e,n):null;if(!t)return null;let r=(t[0][0]+t[2][0])/2,i=(t[0][1]+t[2][1])/2,s=(t[0][2]+t[2][2])/2;for(let a of[...o.floors].sort((l,d)=>d.elevation-l.elevation)){if(a.elevation>i)continue;let l=a.rooms.find(d=>K([r,s],d.points));if(l)return{floor:a,roomId:l.id,corners:t}}return null}function wl(o,e){let n=o.settings.roof?.windows??[];if(!n.length)return[];let t=new Map(at(o).map(r=>[r.key,r]));return n.filter(r=>qi(o,t.get(r.face),r)?.roomId===e)}function vl(o,e){let[n,t]=Et(o,e);return[o.o[0]+o.eu[0]*(e.u+n/2)+o.es[0]*(e.v+t/2),o.o[2]+o.eu[2]*(e.u+n/2)+o.es[2]*(e.v+t/2)]}var Oe=ze`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,lt=ze`
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
`;var gh=4,_h=3e3,bh=8,wh=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Qt=o=>b`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${po(o)} />
  </svg>`,yo={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Zi=o=>b`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,Yi=class extends Me{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},_h)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,n){return $(this.hass,e,n)}call(e,n,t){this.readOnly||this.hass.callService(e,n,t)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return G(this.hass,e,this.areaName)}nameButton(e){return b`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&xe(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,n,t){let r=()=>{this.readOnly||this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||t()};return b`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${n?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${q(e)}
      @click=${r}
    ></button>`}renderHere(e){if(!this.building||!co("locate")||!uo(this.building))return y;let n=ho(this.hass,this.building).filter(t=>t.roomId===e.id);return n.length?b`<p class="fp3d-rp-facts fp3d-rp-here">
      ${n.map((t,r)=>b`${r?", ":""}<span style="color:${t.color}">●</span> ${t.name}`)}
    </p>`:y}render(){let e=this.room;if(!e||!this.hass)return y;let n=fe(this.hass,e.area_id),t=this.memo,{shown:r,more:i}=t&&t.entities===this.hass.entities&&t.floor===this.floor&&t.building===this.building&&t.room===e?t:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?Fa(this.hass,this.floor,e,this.building?wl(this.building,e.id):[]):{shown:n,more:[]}},s=Mi(this.hass,i).map(k=>k.primary),a=s.length,l=this._showAll?[...r,...s]:r,d=k=>l.filter(T=>k.includes(C(T))).map(T=>this.hass.states[T]).filter(T=>!!T),c=d(["light"]),u=d(["cover"]),h=d(["climate"]),p=d(["media"]),g=d(["switch","fan","lock"]),_=d(["sensor","binary"]),m=d(["camera"]);this.hasCameras=m.length>0;let v=d(["scene","script"]),w=this.facts(h),f=c.filter(k=>k.state==="on");return b`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${w.length?b`<p class="fp3d-rp-facts">${w.join(" \xB7 ")}</p>`:y}
          ${this.renderHere(e)}
          ${this.readOnly?b`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:y}
          ${this.sheets?.length&&!this.readOnly?b`<div class="fp3d-rp-sheets">
                ${this.sheets.map(k=>b`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:k.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${k.icon}</span>${k.title}
                  </button>`)}
              </div>`:y}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?y:b`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:b`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map(k=>this.lightRow(k)),b`${f.length<c.length?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:c.filter(k=>!q(k)).map(k=>k.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:y}${f.length?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:f.map(k=>k.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:y}`):y}
        ${u.length?this.section("panel_covers",u.map(k=>this.coverRow(k)),u.length>1?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:u.filter(k=>!q(k)).map(k=>k.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:u.filter(k=>!q(k)).map(k=>k.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:y):y}
        ${h.length?this.section("panel_climate",h.map(k=>this.climateRow(k))):y}
        ${p.length?this.section("panel_media",p.map(k=>this.mediaRow(k))):y}
        ${g.length?this.section("panel_switches",g.map(k=>this.switchRow(k))):y}
        ${m.length?this.section("panel_cameras",m.map(k=>this.cameraTile(k))):y}
        ${_.length?this.section("panel_sensors",_.map(k=>this.sensorRow(k))):y}
        ${v.length?this.section("panel_scenes",[b`<div class="fp3d-rp-scenes">
                  ${v.map(k=>b`<button
                      class="fp3d-btn"
                      ?disabled=${q(k)}
                      @click=${()=>this.call(C(k.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:k.entity_id})}
                    >
                      ${this.name(k.entity_id)}
                    </button>`)}
                </div>`]):y}
        ${a?b`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:y}
      </div>
    </section>`}facts(e){let n=[],t=this.room,r=(l,d)=>{let c=et(this.hass,this.floor,t,l);if(c===null)return null;if(l==="temperature")return`${ie(this.hass,Gt(this.hass,c),1)} ${Fe(this.hass)}`;let u=yi(this.hass,this.floor,t,l)[0],h=this.hass.states[u]?.attributes.unit_of_measurement??d;return`${ie(this.hass,c,1)} ${h}`},i=e.find(l=>typeof l.attributes.current_temperature=="number"),s=r("temperature","\xB0C");s?n.push(s):i&&t.climate?.temperature!=="none"&&n.push(`${ie(this.hass,i.attributes.current_temperature,1)} ${Fe(this.hass)}`);let a=r("humidity","%");return a&&n.push(a),n}section(e,n,t=y){return b`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${t}</div>
      ${n}
    </div>`}lightRow(e){let n=e.attributes,t=e.state==="on",r=n.supported_color_modes??[],i=r.some(h=>h!=="onoff"),s=r.includes("color_temp"),a=r.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),l=typeof n.brightness=="number"?Math.round(n.brightness/255*100):100,d=n.min_color_temp_kelvin??2200,c=n.max_color_temp_kelvin??6500,u=e.entity_id;return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t?"fp3d-rp-on":""}">${Qt("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,t,()=>this.call("light","toggle",{entity_id:u}))}
      ${t&&i?b`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(h.target.value)})}
          /></label>`:y}
      ${t&&s?b`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${c}
              step="50"
              .value=${String(n.color_temp_kelvin??d)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(h.target.value)})}
          /></label>`:y}
      ${t&&a?b`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${wh.map(h=>b`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${h.join(",")})"
                aria-label="rgb(${h.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:h})}
              ></button>`)}
          </div>`:y}
    </div>`}coverRow(e){let n=e.attributes,t=n.supported_features??0,r=e.entity_id,i=q(e);return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${Qt("cover")}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.call("cover","open_cover",{entity_id:r})}>${this.t("cover_open")}</button>
        ${t&bh?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:r})}>${this.t("cover_stop")}</button>`:y}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.call("cover","close_cover",{entity_id:r})}>${this.t("cover_close")}</button>
      </div>
      ${t&gh&&typeof n.current_position=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(n.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:r,position:Number(s.target.value)})}
          /></label>`:y}
      ${t&128&&typeof n.current_tilt_position=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(n.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:r,tilt_position:Number(s.target.value)})}
          /></label>`:oo(this.hass?.states[r])?b`<div class="fp3d-rp-buttons">
              ${t&16?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_open")}</button>`:y}
              ${t&32?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_close")}</button>`:y}
            </div>`:y}
    </div>`}climateRow(e){let n=e.attributes,t=e.entity_id,r=typeof n.temperature=="number"?n.temperature:null,i=n.target_temp_step??.5,s=n.min_temp??5,a=n.max_temp??30,l=n.hvac_modes??[],d=c=>this.call("climate","set_temperature",{entity_id:t,temperature:Math.min(a,Math.max(s,Math.round(c/i)*i))});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n.hvac_action==="heating"?"fp3d-rp-on":""}">${Qt("climate")}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${r!==null?b`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(r-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${ie(this.hass,r,1)} ${Fe(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(r+i)}>+</button>
          </div>`:y}
      ${l.length>1?b`<div class="fp3d-rp-chips">
            ${l.map(c=>b`<button
                class="fp3d-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:t,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:y}
    </div>`}stateOf(e,n=de(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let t=C(e.entity_id);return e.state==="unknown"&&t!=="sensor"&&t!=="binary"?"":n}stateLabel(e){let n=`state_${e}`,t=this.t(n);return t===n?e:t}mediaRow(e){let n=e.attributes,t=e.entity_id,r=q(e)||e.state==="off",i=[n.media_title,n.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${Qt("media")}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?b`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:y}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:t})}>
          ${Zi(yo.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${q(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:t})}>
          ${Zi(e.state==="playing"?yo.pause:yo.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:t})}>
          ${Zi(yo.next)}
        </button>
      </div>
      ${typeof n.volume_level=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(n.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:t,volume_level:Number(s.target.value)/100})}
          /></label>`:y}
    </div>`}switchRow(e){let n=e.entity_id,t=C(n),r=n.slice(0,n.indexOf(".")),i=t==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>t==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:n}):this.call(r,"toggle",{entity_id:n});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${Qt(t)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}cameraTile(e){let n=e.attributes.entity_picture,t=n&&!q(e)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=this.floor?.placements.some(i=>i.entity_id===e.entity_id);return b`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&xe(this,e.entity_id)}>
        ${t?b`<img src=${t} alt=${this.name(e.entity_id)} loading="lazy" />`:b`<span class="fp3d-rp-note">${de(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r?b`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:y}
    </div>`}sensorRow(e){let n=C(e.entity_id),t=n==="binary"&&e.state==="on";return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t?"fp3d-rp-on":""}">${Qt(n)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Oe,lt,ze`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",Yi);function yl(o,e,n,t,r=!1){let i=s=>{let a=s?.value.trim();!s||!a||(s.value="",t([...o,a]))};return b`<div class="fp3d-lines ${r?"fp3d-wide":""}" role="group" aria-label=${n.label}>
    ${n.label}
    ${o.map((s,a)=>b`<div class="fp3d-lines-row">
        <span>${s}</span>
        <button type="button" title=${n.remove} aria-label=${`${n.remove}: ${s}`} ?disabled=${e} @click=${()=>t(o.filter((l,d)=>d!==a))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${n.placeholder}
        aria-label=${n.placeholder}
        ?disabled=${e}
        @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),i(s.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${e} @click=${s=>i(s.currentTarget.previousElementSibling)}>
        ${n.add}
      </button>
    </div>
  </div>`}async function xl(o,e,n){let t=vh(o,e,n);return!t||o.confirm&&!await n.confirm(o.confirm_text?.trim()||null)?!1:(await t(),!0)}function vh(o,e,n){let t=o.target?.trim()??"";switch(o.action){case"perform_action":{let r=/^([a-z0-9_]+)\.([a-z0-9_]+)$/.exec(t);return r?()=>n.callService(r[1],r[2],{...o.data??{}}):null}case"navigate":return t?()=>n.navigate(t):null;case"url":return t?()=>n.openUrl(t):null;case"toggle":case"more_info":case"camera":{let r=t||e;return r?o.action==="toggle"?()=>n.callService("homeassistant","toggle",{entity_id:r}):o.action==="more_info"?()=>n.moreInfo(r):()=>n.camera(r):null}default:return null}}var yh=["tap","hold","double_tap"];function kl(o){return!!o&&yh.some(e=>!!o[e]&&o[e].action!=="default")}function Sl(o,e,n){let t=new Map;for(let r of o){for(let i of r.placements)kl(i.actions)&&!t.has(i.entity_id)&&t.set(i.entity_id,{actions:i.actions,entity:i.entity_id});for(let i of r.furniture){if(!kl(i.actions))continue;let s=e(i.id)??`item:${i.id}`;t.has(s)||t.set(s,{actions:i.actions,entity:n(i)})}}return t}function xo(o,e){let n=o?.actions[e];return n&&n.action!=="default"?n:null}var ko=class{pending=null;wait;constructor(e=320){this.wait=e}tap(e,n,t,r){if(this.pending?.id===e){this.doubleTap(e);return}if(this.flush(),!n){t();return}let i=setTimeout(()=>{this.pending=null,t()},this.wait);this.pending={id:e,timer:i,single:t,double:r}}doubleTap(e){let n=this.pending;return!n||n.id!==e?!1:(clearTimeout(n.timer),this.pending=null,n.double(),!0)}flush(){let e=this.pending;e&&(clearTimeout(e.timer),this.pending=null,e.single())}cancel(){this.pending&&clearTimeout(this.pending.timer),this.pending=null}};var kh={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function At(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}function Qi(o,e){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;if(n.entity_id.startsWith("binary_sensor."))return n.state==="on"?.6:0;let t=Number(n.state);if(!Number.isFinite(t))return null;let i=String(n.attributes.unit_of_measurement??"").startsWith("in")?t*25.4:t;return i<=.1?0:Math.min(1,.3+i/10)}function $l(o,e,n){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let r=kh[t.state];if(!r)return null;let i=t.attributes,s=r.cloud??0;typeof i.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,i.cloud_coverage/100)));let a=r.wind??0;if(typeof i.wind_speed=="number"){let d=i.wind_speed_unit==="m/s"?i.wind_speed*3.6:i.wind_speed_unit==="mph"?i.wind_speed*1.609:i.wind_speed;a=Math.max(a,Math.min(1,d/60))}let l=Qi(o,n);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:t.entity_id,condition:t.state,rain:l??r.rain??0,snow:r.snow??0,fog:r.fog??0,cloud:s,wind:a,lightning:!!r.lightning}}function Ml(o,e){let n=new Set(e??qs);return{...o,rain:n.has("rain")?o.rain:0,snow:n.has("snow")?o.snow:0,fog:n.has("fog")?o.fog:0,cloud:n.has("clouds")?o.cloud:0,lightning:n.has("lightning")&&o.lightning,sky:n.has("sky")}}var xh=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),Sh=new Set(["power","plug","connectivity","running"]);function So(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return Sh.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let n=Number(o.state);if(o.state!==""&&Number.isFinite(n))return o.attributes.unit_of_measurement==="V"&&n<100;let t=String(o.state).toLowerCase().trim();return xh.has(t)||t.startsWith("ob ")}function er(o){let e=we(o);if(!e)return!1;if($h.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let n=e.parts.filter(t=>t.color==="plant").length;return n>0&&n+e.parts.filter(t=>t.color==="pot").length>=e.parts.length/2}var $h=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var me=["#3a3f47","#3a3f47"],Tt=["#23262b","#23262b"],De=["#5a3b25","#5a3b25"],ue=["#1f4fa8","#1f4fa8"],ct=["#e3b616","#e3b616"],ee=["#2f7d3b","#2f7d3b"],zl={default:{rest:me,bio:De,paper:ue,plastic:ct,glass:ee,garden:ee,recycling:ct,other:me},DE:{rest:Tt,bio:De,paper:ue,plastic:ct,glass:ee,garden:ee,recycling:ct},AT:{rest:me,bio:De,paper:[me[0],"#c0262d"],plastic:ct,glass:ee,garden:ee},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ee,paper:ue,plastic:me,glass:ee,garden:ee},NL:{rest:me,bio:ee,paper:ue,plastic:["#3a3f47","#e57a1f"],glass:ee,garden:ee},BE:{rest:me,bio:ee,paper:ue,plastic:ue,glass:ee,garden:ee},GB:{rest:Tt,bio:["#3a3f47","#5a3b25"],paper:ue,plastic:ue,glass:Tt,garden:De,recycling:ue},US:{rest:Tt,bio:ee,paper:ue,plastic:ue,glass:ue,garden:ee,recycling:ue},CA:{rest:Tt,bio:ee,paper:ue,plastic:ue,glass:ue,garden:ee,recycling:ue},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:me,bio:De,paper:[me[0],"#e3b616"],plastic:[me[0],"#e3b616"],recycling:[me[0],"#e3b616"],glass:ee,garden:ee},IT:{rest:me,bio:De,paper:ue,plastic:ct,glass:ee,garden:ee},ES:{rest:me,bio:De,paper:ue,plastic:ct,glass:ee,garden:ee},PT:{rest:me,bio:De,paper:ue,plastic:ct,glass:ee,garden:ee},DK:{rest:Tt,bio:ee,paper:ue,plastic:me,glass:ee,garden:ee},SE:{rest:Tt,bio:De,paper:ue,plastic:me,glass:ee,garden:ee},NO:{rest:me,bio:De,paper:ue,plastic:me,glass:ee,garden:ee},FI:{rest:me,bio:De,paper:ue,plastic:me,glass:ee,garden:ee}},Tl="DE";function Pl(o){Tl=o}function Rl(o){let e=o?.config?.country;if(e)return e.toUpperCase();let n=(o?.language??"").split("-")[1];return n?n.toUpperCase():"DE"}function Mh(o,e){return zl[e]?.[o]??zl.default[o]??me}function Il(o,e=Tl){let n=Mh(o.bin_kind??"rest",e),t=o.bin_color||n[0];return[t,o.bin_lid||(o.bin_color?t:n[1])]}var zh={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function Xi(o,e,n){let t=` ${o.toLowerCase()} `;return n&&n.trim()?n.toLowerCase().split(/[,;|]/).some(r=>r.trim()&&t.includes(r.trim())):e==="other"?!1:zh[e].some(r=>t.includes(r))}function tr(o){let e=typeof o=="string"?o:o?.date??o?.dateTime;if(!e)return null;let n=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),t=n?new Date(Number(n[1]),Number(n[2])-1,Number(n[3])):new Date(e);return Number.isNaN(t.getTime())?null:new Date(t.getFullYear(),t.getMonth(),t.getDate())}function Eh(o){return o.map(e=>({day:tr(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,n)=>e.day.getTime()-n.day.getTime())}function Fl(o){let e=new Set;for(let n of o.flatMap(t=>t.furniture))n.type==="waste_bin"&&typeof n.bin_source=="string"&&n.bin_source.startsWith("calendar.")&&e.add(n.bin_source);return[...e]}async function nr(o,e,n=new Date,t=42){let r=new Map,i=o.callApi;if(!i)return r;let s=new Date(n.getFullYear(),n.getMonth(),n.getDate()),a=Dl(s,t);return await Promise.all(e.map(async l=>{try{let d=await i.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);r.set(l,Eh(Array.isArray(d)?d:[]))}catch{}})),r}var Jt=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),Dl=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),$o=(o,e)=>Math.round((Jt(e).getTime()-Jt(o).getTime())/864e5);function Ji(o,e,n={}){let t=n.from??14,r=n.until??12,i=e.getHours()+e.getMinutes()/60;return o===1&&i>=t||o===0&&i<r}function Hl(o,e,n,t=new Date,r=3){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return[];if(i.startsWith("calendar.")){let a=Jt(t);return(n.get(i)??[]).filter(l=>l.day>=a&&Xi(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,r)}let s=or(o,e,n,t);return s?[{day:s.day,summary:s.summary}]:[]}function or(o,e,n,t=new Date,r={}){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return null;let s=Jt(t);if(i.startsWith("calendar.")){let c=(n.get(i)??[]).find(h=>h.day>=s&&Xi(h.summary,o.bin_kind??"rest",o.bin_match));if(!c)return null;let u=$o(s,c.day);if(u===0&&t.getHours()+t.getMinutes()/60>=(r.until??12)){let h=(n.get(i)??[]).find(p=>p.day>s&&Xi(p.summary,o.bin_kind??"rest",o.bin_match));if(h)return{days:$o(s,h.day),day:h.day,summary:h.summary,glow:Ji($o(s,h.day),t,r)}}return{days:u,day:c.day,summary:c.summary,glow:Ji(u,t,r)}}let a=e.states[i];if(!a)return null;let l=Ph(a,t);if(l===null||l<0)return null;let d=Dl(s,l);return{days:l,day:d,summary:String(a.attributes.friendly_name??""),glow:Ji(l,t,r)}}function Ah(o,e){let n=typeof o=="string"&&o!=="none"?o:null,t=n?e.states[n]:void 0;return!!t&&Ol.has(String(t.state).toLowerCase())}function ir(o,e){return Ah(o.bin_out,e)}function Wl(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function Ll(o,e=.3){let n=o.filter(a=>!a.icon),t=n.map((a,l)=>l),r=a=>t[a]===a?a:t[a]=r(t[a]);for(let a=0;a<n.length;a++)for(let l=a+1;l<n.length;l++){let d=n[a],c=n[l];d.floorId===c.floorId&&Math.hypot(d.x-c.x,d.z-c.z)<=d.r+c.r+e&&(t[r(l)]=r(a))}let i=new Map;n.forEach((a,l)=>i.set(r(l),[...i.get(r(l))??[],a]));let s=[];for(let a of i.values())a.sort((l,d)=>l.days-d.days||l.name.localeCompare(d.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,d)=>l+d.x,0)/a.length,z:a.reduce((l,d)=>l+d.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of o)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function Cl(o,e={}){let n=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,t=o.length?Math.min(...o.map(r=>r.days)):0;return new Set(o.filter(r=>(n===null||r.days<=n)&&(!e.nextOnly||r.days===t)).map(r=>r.id))}function Th(o,e=new Date){let n=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),t=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o),r,i,s;if(n)[r,i,s]=[Number(n[1]),Number(n[2]),Number(n[3])];else if(t){let l=Number(t[1]),d=Number(t[3]);t[2]==="/"&&d>12&&l<=12&&([l,d]=[d,l]),s=l,i=d;let c=t[4];r=c?c.length===2?2e3+Number(c):Number(c):e.getFullYear(),!c&&new Date(r,i-1,s)<Jt(e)&&(r+=1)}else return null;if(i<1||i>12||s<1||s>31)return null;let a=new Date(r,i-1,s);return a.getMonth()===i-1?a:null}function Ph(o,e=new Date){let n=o.attributes;if(typeof n.daysTo=="number")return n.daysTo;let t=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(t))return Math.round(Number(t));let r=/^\d{4}-\d{2}-\d{2}T/.test(t)?tr(t):Th(t,e);if(r)return $o(e,r);let i=t.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(i))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(i))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(i)??/\bin\s+(\d+)/.exec(i);if(s)return Number(s[1]);let a=i.match(/\d+/g);return a?Number(a[a.length-1]):null}var Ol=new Set(["on","open","true","detected","home"]);function El(o){let e=o?.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function Bl(o,e,n=Date.now()){let t=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!t)return!1;let r=e.states[t];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let i=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!i){let l=Number(r.state);return Ol.has(r.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=El(r),a=El(e.states[i]);return s===null||n-s>7*864e5?!1:a===null||s>a+1e3}function Nl(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:Fh(o)}var Vl=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function rr(o,e){let n=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,t=n?e.states[n]:void 0;if(!n||!t)return!1;if(n.startsWith("plant.")){let i=t.attributes,s=String(i.problem??"").toLowerCase();return String(i.moisture_status??"").toLowerCase()==="low"||t.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let r=Vl(t);return r!==null&&r<(o.moisture_min??20)}function sr(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let n=String(o.state).trim(),t=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(n)){let s=Number(n),a=t==="s"?s/60:t==="h"?s*60:s;return Math.max(0,Math.round(a))}let r=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(n);if(r)return Number(r[1])*60+Number(r[2])+Math.round(Number(r[3]??0)/60);let i=Date.parse(n);return Number.isFinite(i)&&/\d{4}-\d{2}-\d{2}T/.test(n)?Math.max(0,Math.round((i-e)/6e4)):null}var Rh=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function ar(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Rh.has(e)}var Ih=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function lr(o,e,n){let t=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(t!==null&&Ih.has(t))return!0;let r=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),i=!!o&&!r&&t!==null&&(t==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(t));return e!==null&&e<=n&&!i}function Kl(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function Al(o,e,n,t){let r=typeof o=="string"&&o!=="none"?o:null,i=r?n.states[r]:void 0;if(!r||!i||i.state==="unavailable"||i.state==="unknown")return!1;if(r.startsWith("binary_sensor.")||r.startsWith("input_boolean."))return i.state==="on";let s=Vl(i);if(s!==null)return s<=(e??10);let a=tr(i.state);return!!a&&a.getTime()<=Jt(t).getTime()}function Gl(o,e,n=new Date){let t=[];return Al(o.service,o.service_min,e,n)&&t.push(o.service),o.service2!==o.service&&Al(o.service2,o.service2_min,e,n)&&t.push(o.service2),t}var dt=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),Ul=o=>!!o&&(o.state==="on"||o.state==="open");function zo(o,e,n=Date.now()){let t=(o.door_alarm??2)*6e4;for(let r of dt(o)){let i=e.states[r];if(Ul(i)&&i?.last_changed&&n-Date.parse(i.last_changed)>=t)return r}return null}function jl(o,e,n=Date.now()){let t=null;for(let r of o)if(!(r.type!=="fridge"&&r.type!=="fridge_smart"))for(let i of dt(r)){let s=e.states[i];if(!Ul(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(r.door_alarm??2)*6e4-n;a>0&&(t===null||a<t)&&(t=a)}return t}var Mo=class{running=new Map;ended=new Map;update(e,n,t,r=Date.now()){let i=this.running.get(e);if(this.running.set(e,n),n)return this.ended.delete(e),!1;i===!0&&this.ended.set(e,r);let s=this.ended.get(e);return s===void 0?!1:r-s>12*36e5||t(s)?(this.ended.delete(e),!1):!0}};function Fh(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var Dh=10*6e4,Hh=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),ql={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function cr(o,e,n){let t=[];for(let c of e.floors)for(let u of c.rooms){let h=fe(o,u.area_id).filter(p=>p.startsWith("binary_sensor.")&&!!ql[String(o.states[p]?.attributes.device_class)]);h.length&&t.push({floorId:c.id,roomId:u.id,sensors:h})}let r=Object.keys(o.states),i=e.settings.rain_warning===!1?null:At(o,n??e.settings.weather_entity),s=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=V("household")?e.floors.flatMap(c=>c.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&dt(u).length).map(u=>({floorId:c.id,roomId:c.rooms.find(h=>h.points.length>=3&&K([u.x,u.z],h.points))?.id??null,furnitureId:u.id,ids:dt(u)}))):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,d=l&&o.states[l]?l:null;return{rooms:t,alarms:r.filter(c=>c.startsWith("alarm_control_panel.")),weather:i,outage:s,rain:d,fridges:a}}function dr(o){return[...o.rooms.flatMap(e=>e.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(e=>e.ids)]}function Zl(o,e,n,t){let r=[];for(let a of n.rooms)for(let l of a.sensors){let d=o.states[l];d?.state==="on"&&r.push({kind:ql[String(d.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId})}let i=n.rain?Qi(o,n.rain):null;if(i!==null?i>0:!!n.weather&&Hh.has(o.states[n.weather]?.state??""))for(let a of e.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let d=t.get(l.id);if(!d)continue;let c=Ue(o,d,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||r.push({kind:"window_rain",entity:d.contact??d.tilt??d.contact2??l.id,roomId:l.room_id,floorId:a.id})}if(n.outage&&So(o.states[n.outage])&&r.push({kind:"power_outage",entity:n.outage,roomId:null,floorId:null}),e.settings.alert_unavailable){let a=Date.now(),l=new Set;for(let d of e.floors)for(let c of d.openings){let u=t.get(c.id);if(u)for(let h of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!h||l.has(h))continue;let p=o.states[h];if(!p||p.state!=="unavailable"&&p.state!=="unknown")continue;let g=Date.parse(p.last_changed??"");Number.isFinite(g)&&a-g<Dh||(l.add(h),r.push({kind:"contact_unavailable",entity:h,roomId:c.room_id,floorId:d.id}))}}}for(let a of n.fridges??[]){let l=e.floors.find(c=>c.id===a.floorId)?.furniture.find(c=>c.id===a.furnitureId),d=l?zo(l,o):null;d&&r.push({kind:"fridge_door",entity:d,roomId:a.roomId,floorId:a.floorId})}for(let a of n.alarms){let l=o.states[a]?.state;l==="triggered"?r.push({kind:"alarm",entity:a,roomId:null,floorId:null}):l==="pending"&&r.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null})}return r}function Yl(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function ur(o,e,n){let t=n.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===n.roomId):null;if(n.text!==void 0)return t?`${t.name} \xB7 ${n.text}`:n.text;let r=o?G(o,n.entity):n.entity,i=$(o,`alert_${n.kind}`,{name:r});return t?e.settings.alert_names===!1?`${t.name} \xB7 ${$(o,`alert_short_${n.kind}`)}`:`${t.name} \xB7 ${i}`:i}var Re=.03,Eo=o=>o&&o!=="none"?o:null;function en(o,e=n=>Eo(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let t of o.floors)for(let r of t.furniture){let i=e(r);if(r.type==="meter")n.grid??=i,n.gridExport??=Eo(r.export);else if(r.type==="inverter"&&i&&!n.solar.includes(i))n.solar.push(i);else if(r.type==="home_battery"){i&&!n.battery.includes(i)&&n.battery.push(i);let s=Eo(r.charge);s&&!n.charge.includes(s)&&n.charge.push(s),(i||s)&&n.batteries.push({power:i,charge:s});let a=Eo(r.soc);a&&!n.soc.includes(a)&&n.soc.push(a)}}return n}function pr(o){for(let e of o.floors){let n=e.furniture.find(t=>t.type==="meter");if(n)return{floor_id:e.id,x:n.x,z:n.z}}return o.energy.meter}async function oc(o,e){let n=new Date;n.setHours(0,0,0,0);try{let t=await o.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),r=new Map;for(let i of e)r.set(i,(t?.[i]??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return r}catch{return null}}var ic=.07;function ae(o,e=!1){if(!o)return null;let n=Number(o.state);if(!Number.isFinite(n))return null;let t=String(o.attributes.unit_of_measurement??"W"),r=t==="kW"?n*1e3:t==="MW"?n*1e6:n;return e?-r:r}function Wh(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function Dn(o,e){if(Wh(o,e))return e;let n=o.entities?.[e]?.device_id;if(!n)return null;let t=Sa(o,n),r=Ge(o,e),i=ki(o,n).filter(l=>l!==e),s=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(i.includes(s))return s;let a=i.find(l=>r!==null&&Ge(o,l)===r);return a||t?a??null:i.find(l=>r===null||Ge(o,l)===null||Ge(o,l)===r)??null}function rc(o,e){let n=e.energy,t=new Set([n.grid,n.solar,n.battery].filter(Boolean)),r=[],i=new Set;for(let s of e.floors)for(let a of s.placements){let l=Dn(o,a.entity_id);!l||t.has(l)||i.has(l)||(i.add(l),r.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,ae(o.states[l])??0)}))}return r}function sc(o,e,n,t=en(e)){let r=e.energy,i=r.grid??t.grid,s=i?ae(o.states[i],r.grid_invert):null;if(!r.grid&&t.gridExport){let _=Math.max(0,ae(o.states[t.gridExport])??0);s=Math.max(0,s??0)-_}let a=r.solar?ae(o.states[r.solar]):null;if(!r.solar&&t.solar.length){let _=t.solar.map(m=>ae(o.states[m])).filter(m=>m!==null);a=_.length?_.reduce((m,v)=>m+v,0):null}let l=r.battery?ae(o.states[r.battery],r.battery_invert):null;if(!r.battery&&t.batteries.length){let _=t.batteries.map(m=>{if(m.charge){let v=m.power?Math.max(0,ae(o.states[m.power])??0):0,w=Math.max(0,ae(o.states[m.charge])??0);return v-w}return m.power?ae(o.states[m.power],r.battery_invert):null}).filter(m=>m!==null);l=_.length?_.reduce((m,v)=>m+v,0):null}let c=(r.battery_soc?[r.battery_soc]:t.soc).map(_=>Number(o.states[_]?.state)).filter(_=>Number.isFinite(_)),u=c.length?c.reduce((_,m)=>_+m,0)/c.length:NaN,h=r.tariff?o.states[r.tariff]:void 0,p=Number(h?.state),g=r.consumption?ae(o.states[r.consumption]):null;return g!==null?g=Math.max(0,g):s!==null||a!==null||l!==null?g=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):n.length&&(g=n.reduce((_,m)=>_+m.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:h&&Number.isFinite(p)?{value:p,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:g}}function Pt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function ut(o,e,n){let t=Math.hypot(o.pos[e][0]-o.pos[n][0],o.pos[e][1]-o.pos[n][1]);o.adj[e].push({to:n,w:t}),o.adj[n].push({to:e,w:t})}function Lh(o,e){let n=o.length,t=o.map((r,i)=>{let s=o[(i+1)%n],a=s[0]-r[0],l=s[1]-r[1],d=Math.hypot(a,l)||1,c=-l/d,u=a/d;return{p:[r[0]+c*e[i],r[1]+u*e[i]],d:[a/d,l/d],n:[c,u]}});return o.map((r,i)=>{let s=t[(i-1+n)%n],a=t[i],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[r[0]+a.n[0]*e[i],r[1]+a.n[1]*e[i]];let d=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*d,s.p[1]+s.d[1]*d]})}function Ch(o){return Ie(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function fr(o,e,n){let t={pos:[],adj:[],rings:new Map},{walls:r}=it(o.rooms,{exterior:e,interior:n},o.walls??[]);for(let i of o.rooms){if(i.points.length<3)continue;let{pts:s,flipped:a}=Ch(i),l=s.length,d=s.map((h,p)=>{let g=a?(l-2-p+l)%l:p,_=r.some(m=>!m.exterior&&m.sources.some(v=>v.room_id===i.id&&v.edge===g));return ic+(_?n/2:0)}),c=Lh(s,d).map(h=>Pt(t,h)),u=c.map((h,p)=>[h,c[(p+1)%l]]);for(let[h,p]of u)ut(t,h,p);t.rings.set(i.id,u)}for(let i of r){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],a=In(t,i.roomLeft,s),l=In(t,i.roomRight,s);a!==null&&l!==null&&ut(t,a,l)}return Bh(t),t}var Oh=1;function Bh(o){let e=[...o.rings.entries()];for(;;){let n=new Array(o.pos.length).fill(-1),t=0;for(let s=0;s<o.pos.length;s++){if(n[s]>=0)continue;let a=[s];for(n[s]=t;a.length;)for(let{to:l}of o.adj[a.pop()])n[l]<0&&(a.push(l),n[l]=t);t++}if(t<2)return;let r=null;for(let[,s]of e)for(let a of new Set(s.flat()))for(let[l,d]of e)if(n[d[0][0]]!==n[a])for(let[c,u]of d){let h=o.pos[a],p=o.pos[c],g=o.pos[u],_=g[0]-p[0],m=g[1]-p[1],v=Math.min(1,Math.max(0,((h[0]-p[0])*_+(h[1]-p[1])*m)/(_*_+m*m||1))),w=Math.hypot(h[0]-p[0]-_*v,h[1]-p[1]-m*v);(!r||w<r.d)&&(r={a,room:l,d:w})}if(!r||r.d>Oh+2*ic)return;let i=In(o,r.room,o.pos[r.a]);if(i===null)return;ut(o,r.a,i)}}function In(o,e,n){let t=o.rings.get(e);if(!t)return null;let r=null;for(let s of t){let a=o.pos[s[0]],l=o.pos[s[1]],d=l[0]-a[0],c=l[1]-a[1],u=d*d+c*c||1,h=Math.min(1,Math.max(0,((n[0]-a[0])*d+(n[1]-a[1])*c)/u)),p=[a[0]+d*h,a[1]+c*h],g=Math.hypot(n[0]-p[0],n[1]-p[1]);(!r||g<r.d)&&(r={seg:s,q:p,d:g})}if(!r)return null;let i=Pt(o,r.q);return ut(o,i,r.seg[0]),ut(o,i,r.seg[1]),i}function Ao(o,e,n){let t=o.pos[n],r=In(o,e.id,t);if(r===null)return!1;let i=o.pos[r],s=o.pos[o.adj[r][0].to],a=o.pos[o.adj[r][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=[(a[0]-s[0])/l,(a[1]-s[1])/l],c=(t[0]-i[0])*d[0]+(t[1]-i[1])*d[1],u=(t[1]-i[1])*d[0]-(t[0]-i[0])*d[1];if(Math.abs(c)<.01||Math.abs(u)<.01)return ut(o,n,r),!0;let h=[i[0]+d[0]*c,i[1]+d[1]*c],p=[i[0]-d[1]*u,i[1]+d[0]*u],g=Pt(o,K(p,e.points)||!K(h,e.points)?p:h);return ut(o,r,g),ut(o,g,n),!0}function Fn(o,e){let n=o.rooms.filter(i=>i.points.length>=3),t=n.find(i=>K(e,i.points));if(t)return t;let r=null;for(let i of n)for(let s of i.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!r||a<r.d)&&(r={room:i,d:a})}return r?.room??null}function ac(o,e){let n=o.pos.map(()=>1/0),t=o.pos.map(()=>-1),r=o.pos.map(()=>!1);for(n[e]=0;;){let i=-1;for(let s=0;s<n.length;s++)!r[s]&&n[s]<1/0&&(i<0||n[s]<n[i])&&(i=s);if(i<0)break;r[i]=!0;for(let{to:s,w:a}of o.adj[i])n[i]+a<n[s]-1e-9&&(n[s]=n[i]+a,t[s]=i)}return{dist:n,prev:t}}function Ql(o,e){return o.every(n=>e[n].kind==="battery")?"battery":o.every(n=>e[n].kind==="wallbox")?"wallbox":"consumer"}var Jl=new WeakMap;function Nh(o,e){let n=pr(o),t=o.floors.find(c=>c.id===n.floor_id),r=[],{wall_exterior:i,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=o.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===t.id)continue;let u=c.elevation>t.elevation,h=l.get(c.id),p=Ql(h,e);r.push({floorId:t.id,a:[n.x,Re,n.z],b:[n.x,u?t.height:-.2,n.z],dist:0,members:h,kind:p});let g=Math.abs(c.elevation-t.elevation);r.push({floorId:c.id,a:[n.x,u?-.2:c.height,n.z],b:[n.x,Re,n.z],dist:g,members:h,kind:p}),a.set(c.id,g+.25)}for(let c of d){let u=fr(c,i,s),h=Fn(c,[n.x,n.z]);if(!h)continue;let p=Pt(u,[n.x,n.z]);if(!Ao(u,h,p))continue;let g=[];for(let f of l.get(c.id)){let k=e[f],T=Fn(c,[k.x,k.z]);if(!T)continue;let A=Pt(u,[k.x,k.z]);Ao(u,T,A)&&g.push({node:A,member:f})}let{dist:_,prev:m}=ac(u,p),v=new Map;for(let f of g)if(Number.isFinite(_[f.node]))for(let k=f.node;m[k]>=0;k=m[k]){let T=m[k],A=`${T}>${k}`,M=v.get(A)??{a:T,b:k,members:[]};M.members.push(f.member),v.set(A,M)}let w=a.get(c.id)??0;for(let{a:f,b:k,members:T}of v.values()){let A=u.pos[f],M=u.pos[k],W=Ql(T,e);r.push({floorId:c.id,a:[A[0],Re,A[1]],b:[M[0],Re,M[1]],dist:w+_[f],members:T,kind:W})}}return r}function lc({building:o,consumers:e,summary:n,battery:t,fieldPower:r,devicePower:i}){let s=pr(o);if(!s)return[];let a=o.floors.find(I=>I.id===s.floor_id);if(!a)return[];let l=I=>i?.get(I),d=hr(o,"inverter"),c=hr(o,"home_battery");!c.length&&t&&c.push({id:"battery",type:"home_battery",floorId:t.floorId,x:t.x,z:t.z,h:1.1,variant:null});let u=I=>{let S=null;for(let z of d)z.floorId===I.floorId&&(!S||Math.hypot(z.x-I.x,z.z-I.z)<Math.hypot(S.x-I.x,S.z-I.z))&&(S=z);return S},h=I=>l(I.id)??(c.length===1?n.battery??0:0),p=new Map;for(let I of c){let S=u(I);S&&p.set(I.id,S)}let g=e.map(I=>({floorId:I.floorId,x:I.x,z:I.z,kind:I.wallbox?"wallbox":"consumer",power:I.power}));for(let I of c)!p.has(I.id)&&n.battery!==null&&g.push({floorId:I.floorId,x:I.x,z:I.z,kind:"battery",power:Math.abs(h(I))});let _=`${s.floor_id}:${s.x},${s.z}|${g.map(I=>`${I.floorId}:${I.x},${I.z}:${I.kind}`).join(";")}`,m=Jl.get(o);m||Jl.set(o,m=new Map);let v=m.get(_);v||(v=Nh(o,g),m.clear(),m.set(_,v));let w=v.map(I=>({floorId:I.floorId,a:I.a,b:I.b,dist:I.dist,power:I.members.reduce((S,z)=>S+g[z].power,0),kind:I.kind})),f=n.grid!==null?mr(o):null,k=o.settings.roof.cables??[],T=I=>k.find(S=>S.id===I),A=(I,S)=>I.map(z=>({...z,key:S}));if(f){let I=n.grid>=0,S=T("grid"),z=S?Rn(o,S,[f.end[0],a.elevation+Math.max(Re,f.height),f.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...f.height>.05?[[f.end[0],f.height,f.end[1]]]:[],[f.end[0],Re,f.end[1]],[f.wall[0],Re,f.wall[1]],[s.x,Re,s.z]],D=S?Xt(o,I?z:[...z].reverse(),Math.abs(n.grid),I?"grid":"export",a):dc(a.id,I?z:[...z].reverse(),Math.abs(n.grid),I?"grid":"export",0);w.push(...A(D,"grid"))}if(n.battery!==null&&n.battery>0)for(let I of w)I.kind==="battery"&&([I.a,I.b]=[I.b,I.a]);let M=o.settings.roof.solar??[],W=o.settings.roof.strings??[],L=new Map;if(r&&M.length){let I=[...at(o),...Pn(o)];for(let S of M){let z=r.get(S.id)??0,D=S.string?W.find(Y=>Y.id===S.string)?.inverter:null,P=D?c.find(Y=>Y.id===D)??null:null,F=D&&!P?d.find(Y=>Y.id===D)??null:null;if(P){let Y=p.get(P.id);Y&&L.set(Y.id,(L.get(Y.id)??0)+z);let _e=P.variant==="wall"?.5+P.h:.9,he=T(`solar:${S.id}`),re=he?tc(o,S):null,ye=o.floors.find(We=>We.id===P.floorId);he&&re&&ye?w.push(...A(Xt(o,Rn(o,he,re,[P.x,ye.elevation+_e,P.z]),z,"solar",ye),`solar:${S.id}`)):w.push(...A(nc(o,S,z,P,_e),`solar:${S.id}`));continue}if(!F&&d.length){let Y=zt(o,S,I),_e=Y?vl(Y,S):[S.u,S.v];F=d.reduce((he,re)=>!he||Math.hypot(re.x-_e[0],re.z-_e[1])<Math.hypot(he.x-_e[0],he.z-_e[1])?re:he,null)}F&&L.set(F.id,(L.get(F.id)??0)+z);let B=F??{floorId:s.floor_id,x:s.x,z:s.z},Z=F?1.1+F.h:1.5,R=T(`solar:${S.id}`),J=R?tc(o,S):null,U=o.floors.find(Y=>Y.id===B.floorId);R&&J&&U?w.push(...A(Xt(o,Rn(o,R,J,[B.x,U.elevation+Z,B.z]),z,"solar",U),`solar:${S.id}`)):w.push(...A(nc(o,S,z,B,Z),`solar:${S.id}`))}}else n.solar!==null&&!d.length&&w.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Re,s.z+.08],dist:0,power:n.solar,kind:"solar"});for(let I of d){let S=1.1+I.h,z=c.filter(F=>p.get(F.id)===I),D=l(I.id);if(D===void 0){D=L.get(I.id)??(d.length===1?n.solar??0:0);for(let F of z)D+=h(F)}let P=o.floors.find(F=>F.id===I.floorId);if(n.solar!==null||n.battery!==null){let F=T(`inv:${I.id}`),B=F&&P?Xt(o,Rn(o,F,[I.x,P.elevation+S,I.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,D),"inverter",P):ec(o,I,S,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,D),"inverter",0);w.push(...A(B,`inv:${I.id}`))}for(let F of z){let B=h(F);if(n.battery===null&&l(F.id)===void 0)continue;let Z=F.variant==="wall"?.5+F.h:.9,R=T(`bat:${F.id}`),J=R&&P?Xt(o,Rn(o,R,[I.x,P.elevation+S-.1,I.z],[F.x,P.elevation+Z,F.z]),Math.abs(B),"battery",P):ec(o,I,S-.1,F,Z,Math.abs(B),"battery",0);w.push(...A(B<=0?J:J.map(U=>({...U,a:U.b,b:U.a})).reverse(),`bat:${F.id}`))}}return w}function mr(o){let e=pr(o),n=e?o.floors.find(p=>p.id===e.floor_id):void 0;if(!e||!n)return null;let{wall_exterior:t,wall_interior:r}=o.settings,{walls:i}=it(n.rooms,{exterior:t,interior:r},n.walls??[]),s=hr(o,"grid_point")[0],a=i.filter(p=>p.exterior);if(s){let p=null;for(let m of a){let v=m.b[0]-m.a[0],w=m.b[1]-m.a[1],f=s.x-e.x,k=s.z-e.z,T=f*w-k*v;if(Math.abs(T)<1e-9)continue;let A=((m.a[0]-e.x)*w-(m.a[1]-e.z)*v)/T,M=((m.a[0]-e.x)*k-(m.a[1]-e.z)*f)/T;if(A<=0||A>1||M<0||M>1||p&&A>=p.t)continue;let W=Math.hypot(v,w)||1;p={q:[e.x+f*A,e.z+k*A],out:[w/W,-v/W],t:A}}let g=p?[p.q[0]+p.out[0]*(t/2+.05),p.q[1]+p.out[1]*(t/2+.05)]:[e.x,e.z],_=o.floors.flatMap(m=>m.furniture).find(m=>m.id===s.id)?.mount_y??0;return{floorId:n.id,wall:g,end:[s.x,s.z],height:Math.max(0,_)}}let l=null;for(let p of a){let g=p.b[0]-p.a[0],_=p.b[1]-p.a[1],m=g*g+_*_||1,v=Math.min(1,Math.max(0,((e.x-p.a[0])*g+(e.z-p.a[1])*_)/m)),w=[p.a[0]+g*v,p.a[1]+_*v],f=Math.hypot(e.x-w[0],e.z-w[1]),k=Math.sqrt(m);(!l||f<l.d)&&(l={q:w,out:[_/k,-g/k],d:f})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let p of o.floors)for(let g of p.outdoor??[]){let _=g.points.length;for(let m=0;m<_;m++){let v=g.points[m],w=g.points[(m+1)%_],f=w[0]-v[0],k=w[1]-v[1],T=c[0]*k-c[1]*f;if(Math.abs(T)<1e-9)continue;let A=((v[0]-d[0])*k-(v[1]-d[1])*f)/T,M=((v[0]-d[0])*c[1]-(v[1]-d[1])*c[0])/T;A>0&&M>=0&&M<=1&&(u=Math.max(u,Math.min(15,A)))}}let h=u>t+1?u:t+2.5;return{floorId:n.id,wall:[d[0]+c[0]*(t/2+.05),d[1]+c[1]*(t/2+.05)],end:[d[0]+c[0]*h,d[1]+c[1]*h],height:0}}function hr(o,e){let n=[];for(let t of o.floors)for(let r of t.furniture)r.type===e&&n.push({id:r.id,type:r.type,floorId:t.id,x:r.x,z:r.z,h:r.h,variant:r.variant??null});return n}var Xl=new WeakMap;function cc(o,e,n,t){let r=`${e.id}:${n.join(",")}>${t.join(",")}`,i=Xl.get(o);i||Xl.set(o,i=new Map);let s=i.get(r);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,d=fr(e,a,l),c=[n,t],u=Fn(e,n),h=Fn(e,t);if(u&&h){let p=Pt(d,n),g=Pt(d,t);if(Ao(d,u,p)&&Ao(d,h,g)){let{dist:_,prev:m}=ac(d,p);if(Number.isFinite(_[g])){c.length=0;for(let v=g;v>=0;v=m[v])c.unshift(d.pos[v])}}}return i.set(r,c),c}function ec(o,e,n,t,r,i,s,a){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==t.floorId)return[];let d=cc(o,l,[e.x,e.z],[t.x,t.z]),c=[[e.x,n,e.z],...d.map(u=>[u[0],Re,u[1]]),[t.x,r,t.z]];return dc(l.id,c,i,s,a)}function dc(o,e,n,t,r){let i=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],d=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);d<1e-4||(i.push({floorId:o,a,b:l,dist:r,power:n,kind:t}),r+=d)}return i}function Rn(o,e,n,t){let i=(o.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(Re,e.height);return[n,...e.points.map(s=>[s[0],i,s[1]]),t]}function tc(o,e){let n=zt(o,e,[...at(o),...Pn(o)]);if(!n)return null;let[t,r]=Et(n,e),i=e.u+t/2,s=n.unbounded?e.v+r/2:e.v;return[n.o[0]+n.eu[0]*i+n.es[0]*s,n.o[1]+n.eu[1]*i+n.es[1]*s,n.o[2]+n.eu[2]*i+n.es[2]*s]}function Vh(o,e,n){let{wall_exterior:t,wall_interior:r}=o.settings,i=fr(e,t,r),s=Fn(e,n),a=s?In(i,s.id,n):null;return a===null?n:i.pos[a]}function Xt(o,e,n,t,r){let i=[...o.floors].sort((d,c)=>d.elevation-c.elevation),s=d=>{let c=r;for(let u of i)d>=u.elevation-.01&&(c=u);return c},a=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],u=e[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let p=[];if(Math.abs(u[1]-c[1])>.01){let g=Math.min(c[1],u[1]),_=Math.max(c[1],u[1]);for(let m of i)m.elevation>g+.01&&m.elevation<_-.01&&p.push(m.elevation);u[1]<c[1]&&p.reverse()}for(let g of[...p,u[1]]){let _=(g-c[1])/(u[1]-c[1]||1),m=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*_,g,c[2]+(u[2]-c[2])*_]:u,v=s((c[1]+m[1])/2),w=Math.hypot(m[0]-c[0],m[1]-c[1],m[2]-c[2]);w>1e-4&&a.push({floorId:v.id,a:[c[0],c[1]-v.elevation,c[2]],b:[m[0],m[1]-v.elevation,m[2]],dist:l,power:n,kind:t}),l+=w,c=m}}return a}function nc(o,e,n,t,r){let i=[...at(o),...Pn(o)],s=zt(o,e,i),a=o.floors.find(m=>m.id===t.floorId);if(!s||!a)return[];let[l,d]=Et(s,e),c=(m,v)=>[s.o[0]+s.eu[0]*m+s.es[0]*v,s.o[1]+s.eu[1]*m+s.es[1]*v,s.o[2]+s.eu[2]*m+s.es[2]*v],u=e.u+l/2,h=a.elevation+Re,p=[],g;if(s.unbounded){let m=c(u,e.v+d/2);g=[m[0],h,m[2]],p.push(g)}else if(s.wall){let m=c(u,e.v);g=[m[0],h,m[2]],p.push(m,g)}else{let m=c(u,e.v),v=Gi(o)??a,w=Math.max(a.elevation+.5,Math.min(m[1]-.25,v.elevation+v.height-.12));g=[m[0],w,m[2]],p.push(m)}let _=Vh(o,a,[g[0],g[2]]);p.push([_[0],g[1],_[1]]),Math.abs(g[1]-h)>.05&&p.push([_[0],h,_[1]]);for(let m of cc(o,a,_,[t.x,t.z]).slice(1))p.push([m[0],h,m[1]]);return p.push([t.x,a.elevation+r,t.z]),Xt(o,p,n,"solar",a)}function uc(o,e=new Date){let n=new Date(e);n.setHours(0,0,0,0);let t=Math.max(1,Math.floor((e.getTime()-n.getTime())/3e5)+1),r=new Array(t).fill(0),i=-1;for(let a of Object.values(o))for(let l of a){let d=typeof l.start=="number"?l.start:Date.parse(l.start),c=Math.floor((d-n.getTime())/3e5);c<0||c>=t||typeof l.mean!="number"||(r[c]+=Math.max(0,l.mean),i=Math.max(i,c))}return r.length=Math.max(i+1,t-3,1),{kwh:r.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...r),curve:r}}async function hc(o,e){let n=new Date;n.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function gr(o,e){let t=l=>42-(e>0?l/e*36:0),r=o.map((l,d)=>[d/288*220,t(l)]),i=r.map(([l,d],c)=>`${c?"L":"M"}${l.toFixed(1)} ${d.toFixed(1)}`).join(" "),[s,a]=r[r.length-1];return{line:i,area:`${i} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function pc(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var Kh=400;function fc(o,e){let n=new Map;for(let t of o.settings.roof.solar??[]){let r=Math.min(1,(e.get(t.id)??0)/(pc(t)*(t.wp??Kh)));n.set(t.id,r>.003?Math.pow(r,.6):0)}return n}function mc(o,e,n){let t=new Map,r=e.settings.roof.solar??[],i=e.settings.roof.strings??[],s=pc,a=[],l=0,d=new Map;for(let h of r){let p=h.entity&&h.entity!=="none"?ae(o.states[h.entity]):null;if(p!==null){t.set(h.id,Math.max(0,p)),l+=Math.max(0,p);continue}let g=h.string?i.find(m=>m.id===h.string):void 0,_=g?.entity&&g.entity!=="none"?ae(o.states[g.entity]):null;if(g&&_!==null){d.set(g.id,[...d.get(g.id)??[],h]);continue}a.push(h)}for(let[h,p]of d){let g=i.find(v=>v.id===h),_=Math.max(0,ae(o.states[g.entity])??0),m=p.reduce((v,w)=>v+s(w),0);for(let v of p)t.set(v.id,_*s(v)/m);l+=_}let c=Math.max(0,(n??0)-l),u=a.reduce((h,p)=>h+s(p),0);for(let h of a)t.set(h.id,u?c*s(h)/u:0);return t}var He={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function gc(o,e){if(o==="grid")return He.import;if(o==="export")return He.export;if(o==="solar")return He.solar;if(o==="battery")return He.battery;if(o==="wallbox")return He.wallbox;if(o==="inverter")return(e.solar??0)>5?He.solar:He.battery;let n=[[Math.max(0,e.grid??0),He.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),He.solar],[Math.max(0,e.battery??0),He.battery]],[t]=n.reduce((r,i)=>i[0]>r[0]?i:r);return t>0?n.find(r=>r[0]===t)[1]:He.house}var _r=["neon","blueprint","day"],Hn={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var To={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function _c(o,e){let n=To[o].stops;if(e<=n[0][0])return n[0][1];for(let t=1;t<n.length;t++){let[r,i]=n[t],[s,a]=n[t-1];if(e<=r){let l=(e-s)/(r-s);return[a[0]+(i[0]-a[0])*l,a[1]+(i[1]-a[1])*l,a[2]+(i[2]-a[2])*l]}}return n[n.length-1][1]}function bc(o,e,n){let t=new Map;for(let r of e.floors)for(let i of r.rooms){let s=et(o,r,i,n);s!==null&&t.set(i.id,s)}return t}function wc(o){let e=To[o].stops,n=e[0][0],t=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,i])=>`rgb(${i.map(s=>Math.round(s*255)).join(",")}) ${Math.round((r-n)/(t-n)*100)}%`).join(", ")})`}function ge(o,e){if(!Xe(e))return $(o,`furn_${e}`);let n=we(e);return n?Bs(n,o?.language??navigator.language):$(o,"pack_missing_item")}var Ro=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Po(o){return o&&o!=="none"?o:null}function tn(o,e){if(e.type!=="parking")return null;let n=Po(e.entity);if(n){let i=o.states[n];if(!i||!Ro.has(i.state.toLowerCase()))return null}let t=e.vehicle??null,r=Po(e.type_entity);if(r&&e.types?.length){let i=(o.states[r]?.state??"").trim().toLowerCase();if(i){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===i)??e.types.find(l=>s(l.state)&&i.includes(s(l.state)));a&&(t=a.vehicle)}}return t&&we(t)?t:null}function br(o,e){let n=new Map;for(let t of e.floors)for(let r of t.furniture){let i=tn(o,r);i&&n.set(r.id,i)}return n}function vc(o){return o.flatMap(e=>e.furniture.filter(n=>n.type==="parking").flatMap(n=>[Po(n.entity),Po(n.type_entity)])).filter(e=>!!e)}function yc(o,e){let n=we(e);if(!n)return null;let t=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:n.size[0]*t,d:n.size[1]*t,h:n.size[2]*t,variant:null,entity:null,power:null}}var Wn=1800*1e3,Gh=new Set(["motion","occupancy","presence"]);function kc(o,e){return e.startsWith("binary_sensor.")&&Gh.has(String(o.states[e]?.attributes.device_class))}function Ln(o,e){let n=[],t=new Set,r=(i,s,a,l)=>{t.has(i)||(t.add(i),n.push({entity:i,floorId:s,x:a,z:l}))};for(let i of e.floors)for(let s of i.placements)if(kc(o,s.entity_id))r(s.entity_id,i.id,s.x,s.z);else if(C(s.entity_id)==="camera")for(let a of qe(o,s.entity_id))r(a,i.id,s.x,s.z);for(let i of e.floors)for(let s of i.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Ee(s.points);for(let d of fe(o,s.area_id))kc(o,d)&&r(d,i.id,a,l)}return n}function xc(o,e,n,t=Wn){let r=n-t,i=[];for(let[s,a]of Object.entries(o)){let l="";for(let d of a){let c=(d.lc??d.lu)*1e3;d.s==="on"&&l!=="on"&&c>=r&&c<=n&&i.push({entity:s,time:c}),l=d.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=r&&a<=n)||i.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||i.push({entity:s.entity,time:a})}return i.sort((s,a)=>s.time-a.time)}function Sc(o,e,n,t=Wn){let r=new Map(o.map(s=>[s.entity,s])),i=[];for(let s of e){let a=r.get(s.entity);if(!a)continue;let l=i[i.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||i.push({...a,time:s.time,age:Math.min(1,Math.max(0,(n-s.time)/t))})}return i.slice(-40)}function Io(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit"})}var $c='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Fo=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Do(o,e){let n=[],t=yt(o,e.floors),r=e.floors.length>1;for(let i of e.floors){let s=(c,u)=>i.rooms.find(h=>h.points.length>=3&&K([c,u],h.points))??null,a=(c,u)=>[s(c,u)?.name,r?i.name:null].filter(Boolean).join(" \xB7 ");for(let c of i.rooms){if(c.points.length<3)continue;let[u,h]=Ee(c.points);n.push({kind:"room",name:c.name,where:r?i.name:"",floorId:i.id,roomId:c.id,entity:null,icon:null,x:u,z:h,y:0})}let l=new Set,d=(c,u,h,p)=>{l.has(c)||!o.states[c]||(l.add(c),n.push({kind:"device",name:G(o,c),where:a(u,h),floorId:i.id,roomId:s(u,h)?.id??null,entity:c,icon:C(c),x:u,z:h,y:p}))};for(let c of i.placements)d(c.entity_id,c.x,c.z,c.y??Ut(C(c.entity_id)??"sensor",i.height,c.mount));for(let c of i.furniture){let u=t.get(c.id),h=u?.entity??u?.power;h&&d(h,c.x,c.z,Math.min(i.height-.3,Math.max(.5,c.h)))}}return n}function Mc(o,e,n=8){let t=Fo(e).split(/\s+/).filter(Boolean);if(!t.length)return[];let r=o.filter(a=>{let l=Fo(`${a.name} ${a.where} ${a.entity??""}`);return t.every(d=>l.includes(d))}),i=Fo(e.trim()),s=a=>(Fo(a.name).startsWith(i)?0:2)+(a.kind==="room"?0:1);return r.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,n)}var Cn=new Map;async function wr(o,e){}async function zc(o,e){for(let n of Cn.values())if(n.module.voice)try{let t=await n.module.voice(o,e);if(t)return t}catch(t){console.warn(`Home 3D: module ${n.id} failed on "${o}"`,t)}return null}function Ec(o){return It(e=>e.scene?.(o))}function Ac(o){return It(e=>e.cards?.(o))}function Tc(o){return It(e=>e.alerts?.(o))}function Pc(o){return It(e=>e.watched?.(o))}function vr(o,e){return It(n=>n.roomSheets?.(o,e))}function yr(o){return It(e=>e.menuSheets?.(o))}function kr(){return[...Cn.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function Rc(o,e){let n=Cn.get(o);if(!n?.module.settings)return[];try{return n.module.settings(e)??[]}catch(t){return console.warn(`Home 3D: module ${n.id} failed`,t),[]}}function Ic(o){return It(e=>e.pools?.(o))}function Rt(){return Cn.size>0}function It(o){let e=[];for(let n of Cn.values())try{e.push(...o(n.module)??[])}catch(t){console.warn(`Home 3D: module ${n.id} failed`,t)}return e}function Dc(o,e,n){let t=o.filter(l=>Number.isFinite(l));if(t.length<2)return"";let r=Math.min(...t),s=Math.max(...t)-r||1,a=l=>Math.round(l*10)/10;return t.map((l,d)=>`${a(d/(t.length-1)*e)},${a(n-1-(l-r)/s*(n-2))}`).join(" ")}function Fc(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let n=Math.min(1,Math.max(0,e))*(o.length-1),t=Math.min(o.length-2,Math.floor(n)),r=n-t,[i,s]=[o[t],o[t+1]];return[i[0]+(s[0]-i[0])*r,i[1]+(s[1]-i[1])*r,i[2]+(s[2]-i[2])*r]}function Hc(o){let e=[];for(let n of o){let t=n.points;if(t.length<2)continue;let r=[],i=0;for(let l=1;l<t.length;l++){let d=Math.hypot(t[l][0]-t[l-1][0],t[l][1]-t[l-1][1],t[l][2]-t[l-1][2]);r.push(d),i+=d}if(i<.01)continue;let s=n.colors.length===t.length,a=0;for(let l=1;l<t.length;l++){let d=r[l-1];if(d<.005)continue;let c=s?Fc([n.colors[l-1],n.colors[l]],.5):Fc(n.colors,(a+d/2)/i);e.push({floorId:n.floorId,a:[...t[l-1]],b:[...t[l]],dist:a,power:Math.max(0,n.flow),color:c,...n.width?{width:Math.min(3,Math.max(.5,n.width))}:{},...n.look==="pipe"?{pipe:!0}:{},...n.views==="house"?{house:!0}:n.views==="floor"?{floor:!0}:{}}),a+=d}}return e}function Wc(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function Lc(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function Ho(o,e){return(o??[]).filter(n=>!e||!n.minor)}var Uh=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],jh=[2200,2700,3200,4e3,5e3,6500],qh=["hs","rgb","rgbw","rgbww","xy"],Zh=4,Yh=16,Qh=32,Jh=128;function Sr(o){let e=o.attributes.supported_color_modes??[],n=e.some(t=>qh.includes(t));return{dim:e.some(t=>t!=="onoff"),color:n,temp:e.includes("color_temp")}}function $r(o){return((o.attributes.supported_features??0)&Zh)!==0&&typeof o.attributes.current_position=="number"}var xr=class extends Me{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{C(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let n=e.attributes.entity_picture,t=n?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return b`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${t?b`<img src=${t} alt=${G(this.hass,this.entity)} />`:b`<span class="qm-note">${de(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,n){return $(this.hass,e,n)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:G(this.hass,this.entity)}))}call(e,n,t={}){this.hass.callService(e,n,{entity_id:this.entity,...t})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){xe(this,this.entity),this.close()}ring(e){let n=e.length;return e.map((t,r)=>{let i=r/n*Math.PI*2-Math.PI/2;return b`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${t}</div>`})}renderLight(e){let n=Sr(e),t=e.state==="on",r=t&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):t?100:0,i=n.color?Uh.map(s=>b`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):n.temp?jh.map(s=>b`<button class="qm-swatch" style="background:${Xh(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return b`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${t?"qm-on":""}" aria-pressed=${t} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${t?`${r} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${n.dim?b`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,r))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:y}`}renderCover(e){let n=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,t=e.state==="opening"||e.state==="closing",r=$r(e),i=(d,c,u,h=!1)=>b`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${c} @click=${u}>${d}</button>`,s=d=>n!==null&&Math.abs(n-d)<3,a=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...r?[75,50].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...r?[25].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),t)],l=n===null?e.state==="closed"?100:0:100-n;return b`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${t?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>t?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${n!==null?`${n} %`:de(this.hass,e)}</b>
        </button>
      </div>
      ${r?b`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(n??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:y}
      ${this.renderTilt(e)}`}renderTilt(e){let n=(e.attributes.supported_features??0)|0,t=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return n&Jh&&t!==null?b`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${t} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(t)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(r.target.value)})}
      /></label>`:oo(e)?b`<div class="qm-tilt-buttons">
        ${n&Yh?b`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:y}
        ${n&Qh?b`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:y}
      </div>`:y}renderCar(e){let n=e.entities,t=(u,h,p,g={})=>{this.hass.callService(u,h,{entity_id:p,...g})},r=n.lock,i=!!r&&r.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=n.climate,l=!!a&&a.startsWith("climate."),d=n.charging&&s(n.charging)?n.charging:null,c=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return b`<p class="qm-car-line">${c||de(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${i||r&&s(r)?b`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(i?t("lock","unlock",r):t("homeassistant","turn_off",r)):i?t("lock","lock",r):t("homeassistant","turn_on",r)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:y}
        ${a?b`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>t(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:y}
        ${d?b`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>t("homeassistant",e.charging?"turn_off":"turn_on",d)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:y}
        ${!i&&!a&&!d?b`<p class="qm-note">${this.t("car_no_controls")}</p>`:y}
      </div>`}renderMedia(e){let n=e.attributes,t=e.state==="playing",r=e.state==="off"||e.state==="standby",i=typeof n.volume_level=="number"?Math.round(n.volume_level*100):null,s=[n.media_title,n.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof n.entity_picture=="string"?n.entity_picture:null;return b`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${t?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",r?"turn_on":t?"media_pause":"media_play")}>
          <span>${r?"\u23FB":t?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?b`<p class="qm-media-title">${s}</p>`:y}
      ${i!==null?b`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(i)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:y}
      ${this.renderPlay(e)}`}renderPlay(e){if(!V("sound"))return y;let n=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],t=this.presets??[];if(!n.length&&!t.length)return y;let r=e.attributes.source;return b`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${t.map(i=>b`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:i.type,media_content_id:i.content})}>
            ▶ ${i.label}
          </button>`)}
        ${n.map(i=>b`<button class="qm-chip ${i===r?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:i})}>${i}</button>`)}
      </div>`}renderDoorLock(e){let n=e.state==="locked"||e.state==="locking"||e.state==="jammed",t=G(this.hass,this.entity),r=()=>{confirm(this.t(n?"door_unlock_confirm":"door_lock_confirm",{name:t}))&&(this.call("lock",n?"unlock":"lock"),this.close())};return b`<p class="qm-car-line">${de(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${n?"qm-slot-on":""}" @click=${r}>${n?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let n=e.state==="on"||e.state==="unlocked"||e.state==="playing",t=e.entity_id.split(".")[0];return b`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${n?"qm-on":""}"
        aria-pressed=${n}
        @click=${()=>this.ask()&&(t==="lock"?this.call("lock",n?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${de(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return y;let n=C(this.entity),t=this.car?this.renderCar(this.car):q(e)?b`<p class="qm-note">${de(this.hass,e)}</p>`:this.doorLock&&n==="lock"?this.renderDoorLock(e):n==="light"?this.renderLight(e):n==="cover"?this.renderCover(e):n==="camera"?this.renderCamera(e):n==="media"&&V("sound")?this.renderMedia(e):this.renderToggle(e);return b`<div class="qm" role="dialog" aria-label=${G(this.hass,this.entity)}>
      <div class="qm-title">${G(this.hass,this.entity)}</div>
      ${t}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Oe,ze`
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
    `]};function Xh(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),n=(t,r)=>Math.round(t+(r-t)*e);return`rgb(${n(255,200)},${n(170,225)},${n(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",xr);var ep=new URL(import.meta.url),tp=new URL("./home-3d-3d.js?v=8742952104a5",ep).href,Cc;function On(){return Cc??=import(tp),Cc}var Mr;function zr(){let o=new URL("./home-3d-fun.js?v=ee142d4cfc9a",new URL(import.meta.url)).href;return Mr??=import(o).catch(e=>{throw Mr=void 0,e}),Mr}function Oc(o,e){let n=o.points,t=n[e],r=n[(e+1)%n.length],i=Math.hypot(r[0]-t[0],r[1]-t[1])||1,s=[(r[0]-t[0])/i,(r[1]-t[1])/i],a=[-s[1],s[0]],l=[(t[0]+r[0])/2,(t[1]+r[1])/2];K([l[0]+a[0]*.02,l[1]+a[1]*.02],n)||(a=[-a[0],-a[1]]);let d=[a[1],-a[0]];return{a:t,b:r,u:s,n:a,length:i,rightward:s[0]*d[0]+s[1]*d[1]>0}}function Wo(o,e){let n=e[0]-o.a[0],t=e[1]-o.a[1];return{s:n*o.u[0]+t*o.u[1],d:n*o.n[0]+t*o.n[1]}}function Er(o,e,n){return[o.a[0]+o.u[0]*e+o.n[0]*n,o.a[1]+o.u[1]*e+o.n[1]*n]}var np=.45;function Bc(o,e){let n=[];for(let t of e.openings){if(t.wall)continue;let r=e.rooms.find(a=>a.id===t.room_id);if(!r||t.edge>=r.points.length)continue;let{s:i,d:s}=Wo(o,_o(r,t.edge,t.offset));Math.abs(s)>.4||i<-.05||i>o.length+.05||n.push(op(t,i))}return n}function op(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function Nc(o,e,n,t=np){let r=[];for(let i of e.furniture){if(i.type==="stairwell"||i.type==="parking")continue;let s=K([i.x,i.z],n.points),a=wt(i).map(p=>Wo(o,p)),l=Math.min(...a.map(p=>p.d)),d=Math.min(...a.map(p=>p.s)),c=Math.max(...a.map(p=>p.s)),u=Wo(o,[i.x,i.z]);if(!s&&u.d<=0||u.d<=0||l>t||l<-.3||c<.02||d>o.length-.02)continue;let h=ce(e,i);r.push({kind:"furniture",id:i.id,s0:d,s1:c,y0:h,y1:h+i.h,d:l})}return r}var Vc=.3;function Bn(o,e){let n=o.from?e(o.from):null,t=o.to?e(o.to):null,r=o.height??Vc,i=[];if(o.heights)n&&i.push([n.x,n.y,n.z]),o.points.forEach(([s,a],l)=>i.push([s,o.heights?.[l]??r,a])),t&&i.push([t.x,t.y,t.z]);else{if(!n||!t)return[];i.push([n.x,n.y,n.z],[n.x,r,n.z]);for(let[s,a]of o.points)i.push([s,r,a]);i.push([t.x,r,t.z],[t.x,t.y,t.z])}return i.filter((s,a)=>a===0||Ar(s,i[a-1])>.001)}function Ar(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function Lo(o){let e=0;for(let n=1;n<o.length;n++)e+=Ar(o[n-1],o[n]);return e}function Co(o,e){if(o.length<2)return null;let n=Math.max(0,e);for(let t=1;t<o.length;t++){let[r,i]=[o[t-1],o[t]],s=Ar(r,i);if(!(s<1e-6)){if(n<=s||t===o.length-1){let a=Math.min(1,n/s),l=[(i[0]-r[0])/s,(i[1]-r[1])/s,(i[2]-r[2])/s];return{p:[r[0]+(i[0]-r[0])*a,r[1]+(i[1]-r[1])*a,r[2]+(i[2]-r[2])*a],dir:l,seg:t-1}}n-=s}}return null}function Ft(o){let[e="",n="",t]=o.split(":");return{kind:e,id:n,port:t||null}}function ip(o,e){let{w:n,d:t,h:r}=o;if(o.type==="pool_pump")return e==="suction"?[n*.5,r*.55,0]:e==="pressure"?[n*.05,r*.9,0]:null;if(o.type==="pool_filter"){let i=Math.min(n,t)/2;if(o.variant==="side6"){let l=i+.08;return e==="pump"?[l,r*.6,0]:e==="return"?[l+.06,r*.48,0]:e==="waste"?[l,r*.36,0]:null}let s=r*.89,a=i*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(o.type==="pool_heat_pump"){let i=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?r*.25:r*.45;return i==="back"?[e==="in"?-n*.15:n*.15,s,-t/2-.04]:[(i==="left"?-1:1)*(n/2+.04),s,-t*.2]}return null}function Kc(o,e){let n=ip(o,e);if(!n)return null;let t=o.rotation*Math.PI/180,[r,i]=[Math.cos(t),Math.sin(t)];return{x:o.x+n[0]*r-n[2]*i,y:n[1],z:o.z+n[0]*i+n[2]*r}}function Nn(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let n=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*n,y:o.y,z:o.z-(o.nz??0)*n}}}return{x:o.x,y:o.y,z:o.z}}function Uc(o){return o.flatMap(e=>(e.outdoor??[]).filter(n=>n.type==="pool"&&n.pool&&n.points.length>=3).map(n=>({floor:e,area:n})))}var Tr=[.25,.7,1],rp=900;function jc(o,e,n,t=r=>r){let r=[];for(let i of o){let s=t(Bn(i,n),i);if(s.length<2)continue;let a=e.get(i.id),l=a?.color??Tr,d=0;for(let c=1;c<s.length;c++){let[u,h]=[s[c-1],s[c]],p=Math.hypot(h[0]-u[0],h[1]-u[1],h[2]-u[2]);p<.01||(r.push({floorId:i.floor_id,a:u,b:h,dist:d,power:a?.active?rp:0,color:l}),d+=p)}}return r}function Oo(o,e,n){let t=n.pool??{},r=Nt(e,n);return i=>{let{kind:s,id:a,port:l}=Ft(i);if(s==="port"){let d=t.ports?.find(u=>u.id===a);if(!d)return null;let c=d.kind==="skimmer"?r-(d.depth??0):d.kind==="drain"?vn(e,n)+.03:d.kind==="inlet"?r-(d.depth??.3):.02;return{x:d.x,z:d.z,y:c}}if(s==="joint"){let d=t.joints?.find(c=>c.id===a);return d?Nn(d,l):null}if(s!=="dev")return null;for(let d of o.floors){let c=d.furniture.find(g=>g.id===a);if(!c||!ta.includes(c.type))continue;let u=l?Kc(c,l):null,h=d.elevation-e.elevation;if(u)return{...u,y:u.y+ce(d,c)+h};let p=c.type==="pool_filter"?c.h*.88:c.type==="pool_dosing"?.95:c.type==="pool_valve"?na:c.type==="pool_pump"?.2:.3;return{x:c.x,z:c.z,y:p+ce(d,c)+h}}return null}}function Pr(o,e,n,t){let r=c=>{let{kind:u,id:h}=Ft(c);return u==="port"?n.pool?.ports?.find(p=>p.id===h)?.kind:void 0},i=c=>r(c)==="drain",s=c=>r(c)==="inlet"||r(c)==="skimmer",a=c=>{if(c.length<2)return c;let u=c[0],h=Rr(n,[u[0],u[2]]);if(!h)return c;let p=[u[0]+h[0]*.35,u[1],u[2]+h[1]*.35],g=1;for(;g<c.length&&Math.hypot(c[g][0]-u[0],c[g][2]-u[2])<.01;)g++;let _=c.slice(g).map(v=>[...v]);for(let v=0;v<_.length-1;v++){let w=(_[v][0]-u[0])*h[0]+(_[v][2]-u[2])*h[1];if(w>=.349999)break;_[v][0]+=h[0]*(.35-w),_[v][2]+=h[1]*(.35-w)}let m=_[0]??c[c.length-1];return[u,p,[p[0],m[1],p[2]],..._]},l=c=>{if(c.length<2)return c;let u=c[0];if(!K([u[0],u[2]],n.points))return c;let h=vn(t,n)-.15,p=c.findIndex((v,w)=>w>0&&Math.hypot(v[0]-u[0],v[2]-u[2])>.01);if(p<0)return c;let g=c[p],_=[g[0],g[2]];for(let v=0;v<n.points.length;v++){let w=n.points[v],f=n.points[(v+1)%n.points.length],k=sp([u[0],u[2]],[g[0],g[2]],w,f);k&&(_=k)}let m=Math.hypot(_[0]-u[0],_[1]-u[2])>1e-6?[_[0]+(_[0]-u[0])*.02,_[1]+(_[1]-u[2])*.02]:_;return[u,[u[0],h,u[2]],[m[0],h,m[1]],[m[0],g[1],m[1]],...c.slice(p)]},d=o;return e.from&&i(e.from)&&(d=l(d)),e.to&&i(e.to)&&(d=l([...d].reverse()).reverse()),e.from&&s(e.from)&&(d=a(d)),e.to&&s(e.to)&&(d=a([...d].reverse()).reverse()),d}function Rr(o,e){let n=o.points;if(n.length<3)return null;let t=0;for(let i=0;i<n.length;i++){let s=n[i],a=n[(i+1)%n.length];t+=s[0]*a[1]-a[0]*s[1]}let r=null;for(let i=0;i<n.length;i++){let s=n[i],a=n[(i+1)%n.length],l=a[0]-s[0],d=a[1]-s[1],c=Math.hypot(l,d);if(c<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*d)/(c*c))),h=Math.hypot(s[0]+l*u-e[0],s[1]+d*u-e[1]),p=t>0?[d/c+0,-l/c+0]:[-d/c+0,l/c+0];(!r||h<r.d)&&(r={d:h,n:p})}return r?r.n:null}function sp(o,e,n,t){let r=[e[0]-o[0],e[1]-o[1]],i=[t[0]-n[0],t[1]-n[1]],s=r[0]*i[1]-r[1]*i[0];if(Math.abs(s)<1e-9)return null;let a=((n[0]-o[0])*i[1]-(n[1]-o[1])*i[0])/s,l=((n[0]-o[0])*r[1]-(n[1]-o[1])*r[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[o[0]+r[0]*a,o[1]+r[1]*a]:null}var Se=o=>Math.round(o*1e3)/1e3;var qc=-.3;function Zc(o,e,n,t,r){let i=[],s=[],a=m=>e(m),l=[],d=o.from,c=[];for(let m of o.vias){if(m.kind!=="hole"){c.push(m.kind);continue}let v=n.find(A=>A.id===m.joint),w=a(d);if(!v||!w)continue;let f=a(`joint:${v.id}:inside`),k=a(`joint:${v.id}:outside`),T=m.dir?m.dir==="out":Math.hypot(w.x-f.x,w.z-f.z)<=Math.hypot(w.x-k.x,w.z-k.z);l.push({a:d,b:`joint:${v.id}:${T?"inside":"outside"}`,fits:c}),c=[],d=`joint:${v.id}:${T?"outside":"inside"}`}let u=o.to;if(u.length>1){let m=a(d),v=u.map(a).filter(w=>!!w);if(m&&v.length===u.length){let w=v.reduce((W,L)=>W+L.x,0)/v.length,f=v.reduce((W,L)=>W+L.z,0)/v.length,k=Math.hypot(m.x-w,m.z-f)||1,T=Math.min(1,k/2)/k,A=m.y<0||v.some(W=>W.y<0),M={id:r("joint"),kind:"tee",x:Se(w+(m.x-w)*T),z:Se(f+(m.z-f)*T),y:A?qc:Se(m.y)};s.push(M),l.push({a:d,b:`joint:${M.id}:in`,fits:c}),c=[],u.forEach((W,L)=>l.push({a:`joint:${M.id}:out${L+1}`,b:W,fits:[]})),u=[]}}u.length&&l.push({a:d,b:u[0],fits:c});let h=m=>{let{kind:v,id:w,port:f}=Ft(m),k=v==="joint"?s.find(T=>T.id===w):void 0;return k?Nn(k,f):a(m)},p=m=>t(m)==="source",g=m=>t(m)==="sink",_=o.to.some(p)&&!p(o.from)||g(o.from)&&!o.to.some(g);for(let m of l){let v=h(m.a),w=h(m.b);if(!v||!w)continue;let f=ap(v,w,Gc(m.a,n),Gc(m.b,n)),k={id:r("pipe"),from:m.a,to:m.b,floor_id:o.floorId,points:f.map(A=>[A[0],A[2]]),heights:f.map(A=>A[1])},T=Lo(Bn(k,h));k.fittings=m.fits.map((A,M)=>({id:r("fit"),kind:A,at:Se(Math.min(T/2,.4+M*.25)),...A==="valve"?{open:!0}:{}})),_&&(k={...k,from:k.to,to:k.from,points:[...k.points].reverse(),heights:[...k.heights??[]].reverse(),fittings:k.fittings?.map(A=>({...A,at:Se(Math.max(0,T-A.at))}))}),i.push(k)}return{pipes:i,joints:s}}function Gc(o,e){let{kind:n,id:t,port:r}=Ft(o),i=n==="joint"&&r==="outside"?e.find(s=>s.id===t):void 0;return i?.kind==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function ap(o,e,n=null,t=null){let r=o.y<0||e.y<0?qc:Se(Math.max(o.y,e.y)),i=[],[s,a]=[o.x,o.z];n&&([s,a]=[Se(s+n[0]*.5),Se(a+n[1]*.5)],i.push([s,Se(o.y),a]));let[l,d]=[e.x,e.z],c=[];return t&&([l,d]=[Se(l+t[0]*.5),Se(d+t[1]*.5)],c.push([l,Se(e.y),d])),i.push([Se(s),r,Se(a)]),Math.abs(l-s)>.01&&i.push([Se(l),r,Se(a)]),Math.abs(d-a)>.01&&i.push([Se(l),r,Se(d)]),i.push(...c),i.filter((u,h)=>h===0||Math.hypot(u[0]-i[h-1][0],u[1]-i[h-1][1],u[2]-i[h-1][2])>.001)}var lp=2e3;function Yc(o){return Math.max(0,lp-o)}function Qc(o,e,n,t=12,r=180){let i=Math.max(r,e),s=Math.max(r*.5625,n),a={cols:1,tile:Math.min(i,s*16/9)};for(let l=1;l<=Math.max(1,o);l++){let d=Math.ceil(o/l),c=(i-t*(l-1))/l,u=(s-t*(d-1))/d*16/9,h=Math.min(c,u);(h>a.tile||l===1)&&(a={cols:l,tile:h})}if(a.tile<r){let l=Math.max(1,Math.floor((i+t)/(r+t)));return{cols:Math.min(l,Math.max(1,o)),tile:r}}return{cols:a.cols,tile:Math.floor(a.tile)}}function Ir(o,e,n){let t=[...n.openings.values()].flatMap(M=>[M.cover,M.contact,M.tilt,M.contact2??null,M.tilt2??null,M.position??null,M.tiltAngle??null,M.lock??null]),r=Xa(e),i=r.filter(M=>C(M)==="camera").flatMap(M=>qe(o,M)),s=r.map(M=>Dn(o,M)),a=e.energy,l=e.presence.flatMap(M=>[M.person,M.sensor]),d=e.floors.flatMap(M=>M.rooms.flatMap(W=>fe(o,W.area_id).filter(L=>C(L)==="light"))),c=[...n.furniture.values()].flatMap(M=>[M.entity,M.power]),u=e.floors.flatMap(M=>M.furniture.flatMap(W=>[W.state_entity??null,W.state_entity2??null,W.color_entity??null,W.show_when?.entity??null])),h=e.floors.flatMap(M=>M.furniture.flatMap(W=>[W.door_left??null,W.door_right??null,W.soc??null,W.status??null,W.charge??null,W.export??null])),p=(e.settings.roof?.windows??[]).flatMap(M=>[M.cover,M.contact,M.tilt]).filter(M=>!!M&&M!=="none"),g=[...(e.settings.roof?.solar??[]).map(M=>M.entity),...(e.settings.roof?.strings??[]).map(M=>M.entity)].filter(M=>!!M&&M!=="none"),_=e.floors.flatMap(M=>M.furniture.filter(W=>W.type==="robot_vacuum").map(W=>Mn(o,n.furniture.get(W.id)?.entity??null,W.room_sensor))),m=e.floors.flatMap(M=>M.furniture.flatMap(W=>(W.pictures??[]).flatMap(L=>[L.entity,...L.image.startsWith("camera:")?[L.image.slice(7)]:[]]))),v=n.heat?e.floors.flatMap(M=>M.rooms.flatMap(W=>fe(o,W.area_id).filter(L=>L.startsWith("sensor.")))):[],w=[...vc(e.floors),...V("auto_pro")?Da(o,e.floors):[]],f=Ln(o,e).map(M=>M.entity),k=V("household")?[...e.floors.flatMap(M=>M.furniture.flatMap(Nl)),e.settings.household?.notes??null].filter(M=>!!M&&M!=="none"):[],T=At(o,n.weatherEntityId??e.settings.weather_entity),A=[...r,...i,...t,...s,...c,...u,...h,..._,...p,...g,...m,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...d,...v,...n.warnings,...w,...f,...k,T,"sun.sun"];return[...new Set(A.filter(M=>!!M))]}var Bo=o=>String(o).padStart(2,"0");function cp(o,e,n){return e<=n?o>=e&&o<=n:o>=e||o<=n}function dp(o,e,n){return e<=n?o>=e&&o<n:o>=e||o<n}function up(o,e){let n=`${Bo(e.getMonth()+1)}-${Bo(e.getDate())}`;return o.from&&o.to&&!cp(n,o.from,o.to)?!1:!o.start||!o.end||dp(`${Bo(e.getHours())}:${Bo(e.getMinutes())}`,o.start,o.end)}function hp(o,e,n){let t=o.show_when;if(!t)return!0;let r=t.entity;if(r&&r!=="none"&&(e[r]?.state??"unavailable")==="unavailable")return!1;let i=t.intervals??[];return!i.length||i.some(s=>up(s,n))}function Fr(o,e,n){return o.floors.flatMap(t=>t.furniture.filter(r=>!hp(r,e,n)).map(r=>r.id))}function Jc(o,e,n){let t=new Set(Fr(o,e,n));return t.size?{...o,floors:o.floors.map(r=>({...r,furniture:r.furniture.filter(i=>!t.has(i.id))}))}:o}function Xc(o){return o.floors.some(e=>e.furniture.some(n=>!!n.show_when?.intervals?.length))}var ed=/^#[0-9a-f]{3,8}$/i;function pp(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function td(o){if(!o||!o.kind)return null;let e=o.color&&ed.test(o.color)?o.color:"#0b1426",n=o.color2&&ed.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${n})`;let t=pp(o.image);if(!t)return null;let r=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${r}), rgba(4, 8, 16, ${r})), url("${t}") center / cover no-repeat`}var Dr;function Dt(){let o=new URL("./home-3d-voice.js?v=2f9012372aef",new URL(import.meta.url)).href;return Dr??=import(o).catch(e=>{throw Dr=void 0,e}),Dr}function No(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("home3d.mic","1"),sessionStorage.getItem("home3d.mic")==="1"}catch{return!1}}function Hr(){try{return localStorage.getItem("home3d.voice")==="1"}catch{return!1}}function Wr(){try{return localStorage.getItem("home3d.screen")??""}catch{return""}}function nn(){try{return localStorage.getItem("home3d.voicePipeline")}catch{return null}}function Vo(){try{sessionStorage.removeItem("home3d.mic")}catch{}}var fp=.25,nd=o=>Math.round(o*1e3)/1e3;function Lr(o,e,n,t,r){let i=o.rooms.find(s=>s.points.length>=3&&K([e,n],s.points));return!i||K([t,r],i.points)?[t,r]:K([t,n],i.points)?[t,n]:K([e,r],i.points)?[e,r]:[e,n]}function od(o,e,n,t){let r=Math.hypot(t[0]-n[0],t[1]-n[1]);if(r<.01)return!1;let i=[(t[0]-n[0])/r,(t[1]-n[1])/r],s=l=>Math.abs(-(l[0]-n[0])*i[1]+(l[1]-n[1])*i[0]),a=l=>(l[0]-n[0])*i[0]+(l[1]-n[1])*i[1];return o.rooms.some(l=>l.id!==e&&l.points.some((d,c)=>{let u=l.points[(c+1)%l.points.length];return s(d)>.02||s(u)>.02?!1:Math.min(r,Math.max(a(d),a(u)))-Math.max(0,Math.min(a(d),a(u)))>.05}))}function id(o,e,n,t=fp){let r=o.rooms.find(d=>d.points.length>=3&&K([e.x,e.z],d.points));if(!r)return null;let i=r.points,s=Ie(i)>=0?1:-1,a=n/2,l=null;for(let d=0;d<i.length;d++){let c=i[d],u=i[(d+1)%i.length],h=Math.hypot(u[0]-c[0],u[1]-c[1]);if(h<.3)continue;let p=[(u[0]-c[0])/h,(u[1]-c[1])/h],g=[-p[1]*s,p[0]*s],_=(e.x-c[0])*p[0]+(e.z-c[1])*p[1];if(_<0||_>h)continue;let v=o.rooms.some(W=>W.id!==r.id&&W.points.some((L,I)=>{let S=W.points[(I+1)%W.points.length],z=Math.abs((L[0]-c[0])*g[0]+(L[1]-c[1])*g[1]),D=Math.abs((S[0]-c[0])*g[0]+(S[1]-c[1])*g[1]);return z<.02&&D<.02}))?a:0,w=(e.x-c[0])*g[0]+(e.z-c[1])*g[1]-v,f=Math.atan2(-g[0],g[1])*180/Math.PI,k=W=>Math.abs((e.rotation-W+540)%360-180),A=[{rotation:f,extent:e.d/2},{rotation:f+90,extent:e.w/2},{rotation:f-90,extent:e.w/2}].reduce((W,L)=>k(L.rotation)<k(W.rotation)?L:W);if(k(A.rotation)>50)continue;let M=w-A.extent;Math.abs(M)>t||l&&Math.abs(M)>=Math.abs(l.gap)||(l={x:nd(e.x-g[0]*M),z:nd(e.z-g[1]*M),rotation:(Math.round(A.rotation)%360+360)%360,gap:M})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function mp(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var Cr={walls(o,e,n){let t=o.floors.find(i=>i.id===e),r=t?.rooms.find(i=>i.id===n);return!t||!r||r.points.length<3?[]:r.points.map((i,s)=>{let a=Oc(r,s),l=od(t,r.id,a.a,a.b),d=[...Nc(a,t,r).map(c=>[c.s0,c.s1]),...Bc(a,t).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:r.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:d}})},onWall(o,e,n){return Er(mp(o),e,n)},freeSpot(o,e,n=.1){let t=i=>i>=n&&i+e<=o.length-n&&!o.taken.some(([s,a])=>i<a+.05&&i+e>s-.05),r=o.length/2-e/2;for(let i=0;i<=o.length;i+=.05){if(t(r-i))return Math.round((r-i)*100)/100;if(t(r+i))return Math.round((r+i)*100)/100}return null},nodeAt(o,e,n){let t=o.floors.find(a=>a.id===e),r=t?.outdoor.find(a=>a.id===n);if(!t||!r)return()=>null;let i=Oo(o,t,r),s=r.pool??{};return a=>{let{kind:l,id:d,port:c}=Ft(a),u=l==="joint"?(s.joints??[]).find(p=>p.id===d):void 0;if(u)return Nn(u,c);let h=l==="port"?(s.ports??[]).find(p=>p.id===d):void 0;return h?i(a)??{x:h.x,y:.02,z:h.z}:i(a)}},connect(o,e,n,t,r,i){let s=o.floors.find(l=>l.id===e),a=s?.outdoor.find(l=>l.id===n);return!s||!a?{pipes:[],joints:[]}:Zc({...t,floorId:e},Cr.nodeAt(o,e,n),a.pool?.joints??[],r,i)}};var rd={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},gp={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},_p=2e4,bp=3*6e4,Or=new Set(["unavailable","unknown",""]),wp="home3d.director";function Br(){try{return localStorage.getItem(wp)==="1"}catch{return!1}}function ad(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var vp=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function ld(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(n=>{let t=o.states[n];if(n.startsWith("event."))return t.attributes.device_class==="doorbell";if(!n.startsWith("binary_sensor."))return!1;let r=`${n} ${String(t.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return vp.test(r)}).sort()}function Nr(o,e,n=Date.now()){if(!o||!e||Or.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let t=Date.parse(e.state);return Number.isFinite(t)&&n-t<3e4}return o.state==="off"&&e.state==="on"}var sd=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function cd(o,e,n=Date.now()){return!o||!e||Or.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?Nr(o,e,n):Or.has(o.state)?!1:sd.has(e.state)&&!sd.has(o.state)}function dd(o,e,n,t){if(t)return t;let r=o.entities??{},i=r[e]?.device_id,s=n.filter(c=>c.startsWith("camera.")),a=i?s.find(c=>r[c]?.device_id===i):void 0;if(a)return a;let l=c=>r[c]?.area_id??o.devices?.[r[c]?.device_id??""]?.area_id??null,d=l(e);return d&&s.find(c=>l(c)===d)||null}var Vn=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,n,t){let r=this.seen.has(e),i=this.seen.get(e);return this.seen.set(e,n),r&&i!==n&&t(i,n)}stopped(e,n,t){let r=this.runs.get(e);return n?(r?.run||this.runs.set(e,{run:!0,since:t,ran:!0}),!1):!r||r.run?(this.runs.set(e,{run:!1,since:t,ran:!!r?.run}),!1):r.ran&&t-r.since>=bp?(r.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,n,t=30){let r=this.shown.get(e.key);if(r!==void 0&&n-r<gp[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&n-this.touchedAt<_p)return!1;let s=this.current;if(s&&n<s.until&&rd[s.shot.kind]>rd[e.kind])return!1;let a=Math.min(600,Math.max(10,t))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:n,until:n+a,touched:!1},this.shown.set(e.key,n),!0}due(e){let n=this.current;return!n||e<n.until?null:(this.current=null,{shot:n.shot,back:!n.touched})}clear(){this.current=null}};var ve=Math.PI/180,Ko=-.833;function yp(o,e,n){let t=(o/864e5+24405875e-1-2451545)/36525,r=((280.46646+t*(36000.76983+t*3032e-7))%360+360)%360,i=357.52911+t*(35999.05029-1537e-7*t),s=.016708634-t*(42037e-9+1267e-10*t),a=Math.sin(i*ve)*(1.914602-t*(.004817+14e-6*t))+Math.sin(2*i*ve)*(.019993-101e-6*t)+Math.sin(3*i*ve)*289e-6,l=125.04-1934.136*t,d=r+a-.00569-.00478*Math.sin(l*ve),u=23+(26+(21.448-t*(46.815+t*(59e-5-t*.001813)))/60)/60+.00256*Math.cos(l*ve),h=Math.asin(Math.sin(u*ve)*Math.sin(d*ve)),p=Math.tan(u/2*ve)**2,g=4*(p*Math.sin(2*r*ve)-2*s*Math.sin(i*ve)+4*s*p*Math.sin(i*ve)*Math.cos(2*r*ve)-.5*p*p*Math.sin(4*r*ve)-1.25*s*s*Math.sin(2*i*ve))/ve,_=new Date(o),w=(((_.getUTCHours()*60+_.getUTCMinutes()+_.getUTCSeconds()/60+g+4*n)%1440+1440)%1440/4-180)*ve,f=e*ve,k=Math.sin(f)*Math.sin(h)+Math.cos(f)*Math.cos(h)*Math.cos(w),T=90-Math.acos(Math.min(1,Math.max(-1,k)))/ve;return{azimuth:(Math.atan2(Math.sin(w),Math.cos(w)*Math.sin(f)-Math.tan(h)*Math.cos(f))/ve+180+360)%360,elevation:T}}function ud(o,e,n){let t=new Date(o);t.setHours(0,0,0,0);let r=t.getTime(),i=10*6e4,s=u=>({...yp(u,e,n),t:u}),a=[],l=null,d=null,c=s(r);for(let u=r+i;u<=r+24*36e5;u+=i){let h=s(u),p=h.elevation>Ko,g=c.elevation>Ko;if(p!==g){let _=c.t,m=h.t;for(let w=0;w<12;w++){let f=(_+m)/2;s(f).elevation>Ko===g?_=f:m=f}let v=s(Math.round((_+m)/2));p?(l??=v,a.push(v)):(d=v,a.push(v))}p&&a.push(h),c=h}return!l&&a.length&&s(r).elevation>Ko&&a.unshift(s(r)),{points:a,rise:l,set:d}}function pd(o,e){return String(e&&o.states[e]?.attributes.unit_of_measurement||"m\xB3")}function xp(o,e){return b`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${bt`<polyline points=${Dc(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function Sp(o,e,n){return(n==="m\xB3"||n==="m3")&&e<10?`${ie(o,e*1e3,0)} l`:`${ie(o,e,e<10?2:0)} ${n}`}var $p=12e4,Mp=600*1e3,fd={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},zp='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',Ep='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function md(o,e,n){return o.rooms.find(t=>t.points.length>=3&&K([e,n],t.points))?.id??null}function Ap(o,e){let n=e.action==="more_info"?e.target:e.data?.entity_id;return typeof n=="string"&&Pe(o.states[n])}function Tp(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Pp(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function gd(o,e){let n=s=>s&&s!=="none"?s:null,t=Ue(o,{cover:n(e.cover),contact:n(e.contact),tilt:n(e.tilt)},"window"),r=n(e.window)?o.states[n(e.window)]:void 0,i=t.open;if(r&&!q(r)){let s=r.attributes.current_position;i=typeof s=="number"?Math.min(1,Math.max(0,s/100)):r.state==="open"||r.state==="opening"?1:0}return{open:i,tilt:t.tilt,cover:t.cover??0}}var Vr=class extends Me{static properties={hass:{attribute:!1},building:{attribute:!1},canEdit:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_ask:{state:!0},_settingsOpen:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},_voice:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;shownPlan=null;showTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;actionOwners=new Map;taps=new ko;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];finished=new Mo;appliances=new Map;directing=new Vn;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._note=null;try{this._thumbsCompact=localStorage.getItem("home3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this._voice=null,this._micProbe=No(),this._alerts=[],this._household=[],this._hhFolded=Tp("home3d.hhFolded"),this._binInfo=null,this._gangMenu=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("home3d.flows")==="1",this._holoShow=localStorage.getItem("home3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!e?.connection||!this.isConnected||(this.unsubAsk=Ts(e,n=>{this.onAsk(n)}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e?.then(n=>n()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.taps.cancel(),this._ask?.answer(!1),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,clearTimeout(this.showTimer),this.showTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&Dt().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",n=>{let t=n;if(!t.target?.closest?.(".fp3d-holo"))return;let r=this.renderRoot.querySelector("canvas");r&&(t.preventDefault(),r.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(n=>{let t=(n[0]?.contentRect.width??1e3)<700;t!==this._narrowStage&&(this._narrowStage=t,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await On();if(!this.isConnected)return;let n=this.renderRoot.querySelector(".fp3d-stage");n.addEventListener("pointerdown",t=>{this._central&&!t.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=e.createViewer(n,{quality:this.quality,explode:this.explode,onRoomTap:(t,r)=>this.fire("room-tap",{floorId:t,roomId:r}),onFloorTap:t=>this.fire("floor-tap",{floorId:t}),floorInfo:t=>t.rooms.length===1?$(this.hass,"floor_rooms_one"):$(this.hass,"floor_rooms",{n:t.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(t,r,i)=>this.onDeviceTap(t,r,i),onDeviceHold:(t,r,i)=>this.onDeviceHold(t,r,i),onDeviceDoubleTap:t=>!this.ro&&this.taps.doubleTap(t),onRoomDoubleTap:(t,r)=>this.onRoomDoubleTap(t,r),onDeviceSwipe:(t,r,i,s,a)=>this.onDeviceSwipe(t,r,i,s,a),onFurnitureSelect:t=>this.fire("furniture-select",{id:t}),onFurnitureMove:(t,r,i)=>this.fire("furniture-move",{id:t,x:r,z:i}),onDeviceSelect:t=>this.fire("device-select",{id:t}),onDeviceMove:(t,r,i)=>this.fire("device-move",{id:t,x:r,z:i}),onStats:t=>{this.showStats&&(this._stats=t)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((t,r,i,s,a,l)=>this.placeHolo(t,r,i,s,a,l)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...Je()]),this.hass&&wr(this.hass,Je()).then(()=>this.syncDevices(!0)),this.shownPacks=Ot(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.viewPlan(this.building))),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&(Zs(this.building??null),Ja(this.building)),e.has("hass")&&this.hass&&Pl(Rl(this.hass))}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let n=this.viewer;if(!n)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Ot()&&(this.shownPacks=Ot(),n.setPacks([...Je()]),this.hass&&wr(this.hass,Je()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&n.setParked(br(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let i=JSON.stringify(this.startViewOf()),s=this.shownStartView!==void 0&&this.shownStartView!==i;this.shownStartView=i,n.setStartView(this.startViewOf()),n.setBuilding(this.viewPlan(this.building)),s&&this.floorId===null&&n.resetView()}(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(n.setStartView(this.startViewOf()),this.floorId===null&&n.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let t=["building","markerMode","heatMode","flows","alerts","dimmed"].some(i=>e.has(i))||this.markerMode==="room"&&e.has("roomId"),r=this.replayTicked&&!!this.replay;this.replayTicked=!1,(t||e.has("hass")||r)&&this.syncDevices(t,r&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&n.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&n.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&n.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&n.selectRoom(this.roomId),e.has("wallMode")&&n.setWallMode(this.wallMode),e.has("keepView")&&n.setKeepView(this.keepView),e.has("angleLock")&&n.setAngleLock(this.angleLock),e.has("explode")&&n.setExplode(this.explode),e.has("keepRoof")&&n.setKeepRoof(this.keepRoof),e.has("hideRoof")&&n.setHideRoof(this.hideRoof),e.has("floorStack")&&n.setFloorStack(this.floorStack),e.has("theme")&&n.setTheme(this.effectiveTheme()),e.has("accent")&&n.setAccent(this.accent??null),e.has("surfaceGrab")&&n.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&n.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(n.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&n.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&n.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&n.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(n.setQuality(this.quality),this._low=n.low,this.replay?.setQuality(this.quality,n.low)),e.has("showStats")&&n.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e,n=!1){let t=this.viewer,r=this.building;if(!t||!r||!this.hass)return;let i=this.hass,s=this.shownPlan?.plan,a=this.viewPlan(r);a!==s&&(t.setBuilding(a),e=!0),Xc(r)&&!this.replay&&(this.showTimer??=setTimeout(()=>{this.showTimer=void 0,this.syncDevices(!1)},60050-Date.now()%6e4)),(e||!this.openingLinks||this.linkedRegistry!==i.entities)&&(this.openingLinks=Sn(i,a.floors),this.furnitureLinks=yt(i,a.floors),this.linkedRegistry=i.entities,this.findIndex=null,this.alertSrc=this.alerts?cr(i,a,this.weatherEntityId):null,this.watchHousehold(i,a),this.watched=Ir(i,a,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?dr(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Rt()&&(this.watched=[...new Set([...this.watched,...Pc(this.sceneHost(i,a))])]),e=!0);let l=e||n,d=!l;if(!l){for(let x of this.watched)if(this.shownStates.get(x)!==i.states[x]&&(l=!0,!x.startsWith("sensor."))){d=!1;break}}let c=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!l)return;if(d&&this._low&&!this.replay){let x=Yc(performance.now()-this.lastSync);if(x>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},x);return}}this.lastSync=performance.now();let u=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(x=>[x,i.states[x]])),this.scene=Rt()?Ec(this.sceneHost(i,a)):[];let h=rc(i,a),p=Ya(i,a),g=this.furnitureMarkers(i,a,new Set(p.map(x=>x.id)),new Set(h.map(x=>x.powerEntity)));h.push(...g.consumers),this.lastConsumers=h;let _=sc(i,a,h,en(a,x=>this.furnitureLinks?.get(x.id)?.power??null)),m=new Map(h.filter(x=>x.id!==x.powerEntity).map(x=>[x.id,x.power]));this.confirmSet=jt(i,a.floors);let v=this.trail?this.trailNow(i,a):[],w=V("camera_cockpit")&&!this.dimmed?this.detectionPins(i,p):[];this.detecting=w.length>0;let f=V("energy_pro"),k=new Set(V("auto_pro")?a.floors.flatMap(x=>x.furniture.filter(E=>E.type==="parking"&&E.car&&tn(i,E)).map(E=>E.id)):[]);t.setDevices([...[...p,...g.markers,...this.lockMarkers(i,a)].map(x=>{let E=x.show==="no_power"||"energyDevice"in x&&x.energyDevice||"standby"in x&&x.standby?null:m.get(x.id)??null,O={...x,power:E,powerText:E===null?void 0:se(i,E),effect:this.dimmed?!1:x.effect},X=x.ownName&&(x.showName||this.markerNames)?x.ownName:"",H=V("sound")&&this.mediaCardUp(i,x.id)||V("auto_pro")&&!!x.furnitureId&&k.has(x.furnitureId);return{...O,pin:this.showPin(O)&&!H,full:x.show==="always"||x.full===!0,caption:X}}),...(f&&(this.flows??this._flows)&&!this.dimmed&&_.grid!==null?[this.gridPin(i,a,_.grid)]:[]).filter(x=>!!x),...w,...v.map((x,E)=>({id:`trail:${E}`,floorId:x.floorId,roomId:null,x:x.x,z:x.z,y:.3+.4*v.slice(0,E).filter(O=>O.entity===x.entity).length,icon:$c,name:G(i,x.entity),text:Io(i,x.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(a)]);for(let x of this.scene)x.kind==="marker"&&x.card&&x.furnitureId&&!g.targets.has(x.furnitureId)&&g.targets.set(x.furnitureId,`module:${x.id}`);t.setTrail(v,this.replay?this.robotPaths(i,a):[]),this.actionOwners=Sl(a.floors,x=>g.targets.get(x),x=>{let E=this.furnitureLinks?.get(x.id)?.entity;return E&&E!=="none"?E:null});for(let x of a.floors)for(let E of x.furniture)!g.targets.has(E.id)&&this.actionOwners.has(`item:${E.id}`)&&g.targets.set(E.id,`item:${E.id}`);t.setPickTargets(g.targets,this.openingTargets()),t.setScreens(g.screens),t.setFridgeDoors(zi(i,a.floors)),t.setAwnings(Ia(i,a.floors)),t.setProjections(this.projectedCameras(i,a)),t.setRobots(this.robotInfos(i,a));let T=new Map;for(let x of a.settings.roof?.windows??[])T.set(x.id,gd(i,x));t.setRoofWindows(T),t.setParked(br(i,a));let A=new Map(a.floors.flatMap(x=>x.openings.map(E=>[E.id,E.type]))),M=new Map([...this.openingLinks].map(([x,E])=>[x,Ue(i,E,A.get(x))]));t.setOpeningStates(M,c);let W=this.alertSrc?Zl(i,a,this.alertSrc,this.openingLinks):[],L=this.alerts&&Rt()?Tc(this.sceneHost(i,a)).map(x=>({kind:x.kind,entity:x.entity,roomId:x.roomId,floorId:x.floorId,text:x.text,color:x.color,quiet:!x.roomId})):[];this.setAlerts([...W,...L]),clearTimeout(this.fridgeTimer);let I=V("household")&&!this.replay?jl(a.floors.flatMap(x=>x.furniture),i):null;I!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),I+500));let S=[...p,...g.markers].map(x=>`${x.id}:${x.glow?`${x.glow.level.toFixed(1)}/${x.glow.color.map(E=>E.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...M].map(([x,E])=>`${x}:${E.open}:${E.cover===null?"-":E.cover.toFixed(1)}`).join(";");if(S!==this.thumbSig){let x=this.thumbSig==="";this.thumbSig=S,x||this.scheduleThumbs(1500)}let z=a.floors.flatMap(x=>x.furniture.filter(E=>E.type==="home_battery").map(E=>({floorId:x.id,x:E.x,z:E.z})))[0]??(a.energy.battery?a.floors.flatMap(x=>x.placements.filter(E=>E.entity_id===a.energy.battery).map(E=>({floorId:x.id,x:E.x,z:E.z})))[0]:null),D=f?mc(i,a,_.solar):null,P=a.settings.roof.hologram??Ke,F=[...a.settings.roof.solar??[]].sort((x,E)=>E.rows*E.cols-x.rows*x.cols),B=a.settings.roof.strings??[],Z=x=>(x.string?B.find(E=>E.id===x.string)?.inverter:null)??null,R=P.plant_floor?"all":"house",J=(x,E,O,X)=>{let H=zt(a,x);if(!H)return null;let[j,oe]=Et(H,x),te=x.u+j/2+E,pe=x.v+oe/2+O,$e=[H.o[0]+H.eu[0]*te+H.es[0]*pe,H.o[1]+H.eu[1]*te+H.es[1]*pe,H.o[2]+H.eu[2]*te+H.es[2]*pe],be=H.wall?.floorId??(H.unbounded?a.floors.find(Te=>Te.elevation===Math.min(...a.floors.map(Wt=>Wt.elevation)))?.id??a.floors[0].id:[...a.floors].sort((Te,Wt)=>Wt.elevation-Te.elevation)[0].id);return{p:[$e[0]+H.n[0]*.05,$e[1]+H.n[1]*.05,$e[2]+H.n[2]*.05],n:[H.n[0],H.n[1],H.n[2]],floorId:be,size:X,roof:!0,views:R}},U=[],Y=[],_e=_.grid!==null||_.battery!==null||_.solar!==null,he=P.place==="free"&&Number.isFinite(P.x)&&Number.isFinite(P.z),re=f&&_.solar!==null&&!he?F.find(x=>x.id===P.field)??F[0]:void 0,ye=re?Z(re):null,We=!!re&&!!ye&&!F.some(x=>x.id!==re.id&&Z(x)===ye)&&P.right===0&&P.up===0,rn=(()=>{if(!We||!re)return 0;let x=zt(a,re);return x?Et(x,re)[0]/2+1.2:0})(),sn=re?J(re,P.right+rn,P.up,P.size):null,Uo=this.devicePowers(i,a),an=f&&_.solar!==null?a.energy.solar?[a.energy.solar]:en(a,x=>this.furnitureLinks?.get(x.id)?.power??null).solar:[];if(sn)U.push(sn),Y.push({kind:"main",name:$(i,"holo_title"),w:null,dayIds:an,battery:null});else if(f&&_e&&he){let x=0,E=0,O=0,X=1/0,H=a.floors[0];for(let pe of a.floors){pe.rooms.length&&(X=Math.min(X,pe.elevation)),pe.rooms.length&&(!H.rooms.length||pe.elevation+pe.height>H.elevation+H.height)&&(H=pe);for(let $e of pe.rooms)for(let[be,Te]of $e.points)x+=be,E+=Te,O++}O&&(x/=O,E/=O);let j=P.x-x,oe=P.z-E,te=Math.hypot(j,oe);U.push({p:[P.x,(Number.isFinite(X)?X:0)+(P.height??3),P.z],n:te>.01?[j/te,0,oe/te]:[1,0,0],floorId:H.id,size:P.size,roof:!0,views:R}),Y.push({kind:"main",name:$(i,"holo_title"),w:null,dayIds:an,battery:null})}else if(f&&_e&&a.floors.some(x=>x.rooms.length)){let x=-1/0,E=1/0,O=-1/0,X=0,H=a.floors[0];for(let j of a.floors){for(let oe of j.rooms)for(let[te,pe]of oe.points)x=Math.max(x,te),E=Math.min(E,pe),O=Math.max(O,pe);j.rooms.length&&j.elevation+j.height>X&&(X=j.elevation+j.height,H=j)}U.push({p:[x+.6,X+.4,(E+O)/2],n:[1,0,0],floorId:H.id,size:P.size,roof:!0,views:R}),Y.push({kind:"main",name:$(i,"holo_title"),w:null,dayIds:an,battery:null})}if(f&&_.solar!==null){let x=new Set;for(let E of a.floors)for(let O of E.furniture.filter(X=>X.type==="inverter")){if(O.plant_card===!1||x.has(O.id))continue;x.add(O.id);let X=F.filter($e=>Z($e)===O.id),H=(re&&O.id===ye?X.find($e=>$e.id!==re.id):null)??X[0],j=this.furnitureLinks?.get(O.id)?.power??null,oe=H?J(H,O.plant_right??0,O.plant_up??0,P.size*.85):null;if(!oe||!j)continue;let te=E.furniture.filter($e=>$e.type==="home_battery").sort(($e,be)=>Math.hypot($e.x-O.x,$e.z-O.z)-Math.hypot(be.x-O.x,be.z-O.z))[0],pe=te?.soc&&te.soc!=="none"?Number(i.states[te.soc]?.state):NaN;U.push(oe),Y.push({kind:"plant",name:O.name||ge(i,O.type),w:Math.max(0,ae(i.states[j])??0),dayIds:[j],battery:te?{soc:Number.isFinite(pe)?pe:null,w:Uo.get(te.id)??null}:null})}}let Ye=P.device_house===!1?"floor":"all";if(f)for(let x of a.floors){for(let E of x.furniture){if(!E.holo)continue;let O=this.furnitureLinks?.get(E.id)?.power??null,X=h.find(j=>j.id===E.id);if(!O&&!X)continue;let H=x.elevation+ce(x,E)+E.h;U.push({p:[E.x,H+.1,E.z],n:[0,1,0],floorId:x.id,size:P.size*.7,roof:!1,views:Ye,room:md(x,E.x,E.z)}),Y.push({kind:"device",name:E.name||ge(i,E.type),w:X?.power??(O?ae(i.states[O]):null),dayIds:O?[O]:[],battery:null})}for(let E of x.placements){if(!E.holo)continue;let O=Dn(i,E.entity_id);if(!O)continue;let X=x.elevation+(E.y??.4)+.2;U.push({p:[E.x,X,E.z],n:[0,1,0],floorId:x.id,size:P.size*.7,roof:!1,views:Ye,room:md(x,E.x,E.z)}),Y.push({kind:"device",name:E.name||G(i,E.entity_id),w:ae(i.states[O]),dayIds:[O],battery:null})}}let N=[];if(V("sound")){let x=new Set,E=(a.settings.roof.hologram??Ke).size,O=(H,j,oe,te,pe,$e)=>{let be=i.states[j];if(!be||C(j)!=="media")return;if(x.has(j)){let pt=N.find(Zo=>Zo.id===j);pt&&N.push({...pt,id:`${j}#${N.filter(Zo=>Zo.id.startsWith(`${j}#`)).length+2}`,floorId:H.id,x:oe,z:te,members:[j]});return}x.add(j);let Te=this.ro?void 0:this.mediaGrace.get(j),Wt=[be.attributes.media_title,be.attributes.app_name,be.attributes.source].find(pt=>typeof pt=="string"&&!!pt.trim())??"";if(!(!q(be)&&(be.state==="playing"||be.state==="paused"&&!!Wt&&this.pausedRecently(be)||be.state==="on"&&!!be.attributes.source))){Te&&Te.until>Date.now()?(N.push({...Te.source,playing:!1,level:0}),U.push(Te.anchor),Y.push({...Te.card,media:{...Te.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Te.until-Date.now()+100))):q(be)||(this.mediaGrace.delete(j),N.push({id:j,floorId:H.id,x:oe,z:te,level:0,playing:!1,members:[]}));return}let qo=be.state==="playing",Ce=be.attributes,Xr=typeof Ce.volume_level=="number"?Math.min(1,Math.max(0,Ce.volume_level)):.5,$d=Array.isArray(Ce.group_members)?Ce.group_members.filter(pt=>pt!==j):[];N.push({id:j,floorId:H.id,x:oe,z:te,level:qo?.3+.7*Xr:0,playing:qo,members:$d});let Md=Wt||$(i,"holo_media_playing"),es={p:[oe,H.elevation+pe+.12,te],n:[0,1,0],floorId:H.id,size:E*.7,roof:!1,views:"all"},ts={kind:"media",name:$e,w:null,dayIds:[],battery:null,media:{id:j,title:Md,artist:typeof Ce.media_artist=="string"?Ce.media_artist:typeof Ce.media_album_name=="string"?Ce.media_album_name:"",picture:typeof Ce.entity_picture=="string"?Ce.entity_picture:null,volume:Math.round(Xr*100),playing:qo}};U.push(es),Y.push(ts),this.ro||this.mediaGrace.set(j,{until:Date.now()+45e3,card:ts,source:N[N.length-1],anchor:es})},X=(H,j)=>{for(let oe of H.furniture){if((oe.entity!=null&&oe.entity!=="none")!==j)continue;let te=this.furnitureLinks?.get(oe.id)?.entity;te&&O(H,te,oe.x,oe.z,ce(H,oe)+oe.h,oe.name||ge(i,oe.type))}};for(let H of a.floors)X(H,!0);for(let H of a.floors)for(let j of H.placements)O(H,j.entity_id,j.x,j.z,j.y??1.1,j.name||G(i,j.entity_id));for(let H of a.floors)X(H,!1)}if(V("auto_pro")){let x=(a.settings.roof.hologram??Ke).size;for(let E of a.floors)for(let O of E.furniture){if(O.type!=="parking"||!O.car)continue;let X=tn(i,O);if(!X)continue;let H=$n(i,O);if(H.soc===null&&H.range===null&&H.locked===null&&H.climateOn===null)continue;let j=yc(O,X),oe=ce(E,O)+(j?.h??1.6);U.push({p:[O.x,E.elevation+oe+.25,O.z],n:[0,1,0],floorId:E.id,size:x*.7,roof:!1,views:"all"});let te=H.entities;Y.push({kind:"car",name:O.name||ge(i,X),w:null,dayIds:[],battery:null,car:{spot:O.id,soc:H.soc,range:H.range,rangeUnit:H.rangeUnit,chargingW:H.chargingW,charging:H.charging,locked:H.locked,climateOn:H.climateOn,lock:te.lock,climate:te.climate,charge:te.charging&&/^(switch|input_boolean)\./.test(te.charging)?te.charging:null}})}}let ne=this.scene.filter(x=>x.kind==="water").map(x=>({...x,level:this.dimmed?x.level*.4:x.level}));if(t.setPools(ne),Rt()){let x=(a.settings.roof.hologram??Ke).size;for(let E of Ac(this.sceneHost(i,a))){let O=a.floors.find(H=>H.id===E.anchor.floorId);if(!O)continue;let X=null;if(E.anchor.areaId){let H=O.outdoor.find(pe=>pe.id===E.anchor.areaId);if(!H||H.points.length<3)continue;let[j,oe]=Ee(H.points),te=H.type==="pool"?Nt(O,H):Ve(O,j,oe);X=[j,O.elevation+Math.max(te,0)+(H.above?.6:1.1),oe]}else if(E.anchor.furnitureId){let H=O.furniture.find(j=>j.id===E.anchor.furnitureId);if(!H)continue;X=[H.x,O.elevation+ce(O,H)+H.h+.25,H.z]}X&&(U.push({p:X,n:[0,1,0],floorId:O.id,size:x*.7,roof:!1,views:"all"}),Y.push({kind:"module",name:E.title,w:null,dayIds:[],battery:null,module:E}))}for(let E of this.scene){if(E.kind!=="tag")continue;let O=a.floors.find(X=>X.id===E.floorId);O&&(U.push({p:[E.at[0],O.elevation+E.at[1],E.at[2]],n:[0,1,0],floorId:O.id,size:x*.75,roof:!1,views:E.views??"all"}),Y.push({kind:"bin",name:E.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:E.color??"#37e0ff",when:E.text,name:E.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(V("household")){let x=(a.settings.roof.hologram??Ke).size;for(let E of Ll(this.binHolos)){let O=a.floors.find(H=>H.id===E.floorId);if(!O)continue;U.push({p:[E.x,O.elevation+E.y+.04,E.z],n:[0,1,0],floorId:E.floorId,size:x*.75,roof:!1,views:"all"});let X=E.lines.map(H=>({color:H.color,when:H.when,name:H.name,soon:!!H.soon&&!H.out,out:!!H.out}));Y.push({kind:"bin",name:E.lines.map(H=>H.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:X,soon:X.some(H=>H.soon),icon:E.lines.length===1?E.lines[0].icon??null:null}})}}t.setSound(N);let le=this._walk?this.walkRoomPts:null,Le=U.map(x=>!this._walk||!!le&&K([x.p[0],x.p[2]],le)),Be=Y.filter((x,E)=>Le[E]);t.setAnchors(U.filter((x,E)=>Le[E])),JSON.stringify(Be)!==JSON.stringify(this._holos)&&(this._holos=Be),t.setSolarLevels(D&&!this.dimmed?fc(a,D):new Map);let Kn=!f||!(this.flows??this._flows)||this.dimmed?[]:lc({building:a,consumers:h,summary:_,battery:z??null,fieldPower:D,devicePower:this.devicePowers(i,a)}).map(x=>({floorId:x.floorId,a:x.a,b:x.b,dist:x.dist,power:x.power,color:gc(x.kind,_)})),ln=this.poolPipes(a),jo=this.scene.filter(x=>x.kind==="line");t.setFlows(this.dimmed?Kn:[...Kn,...ln.flows,...Hc(jo)]),t.setPipes(ln.tubes),t.setPatches(this.scene.filter(x=>x.kind==="patch").map(x=>({floorId:x.floorId,points:x.points,y:x.y,color:x.color,opacity:this.dimmed?x.opacity*.4:x.opacity,...x.glow?{glow:!0}:{}})));let cn=[],Ht=co("locate")&&uo(a)?[...cn,...ho(i,a,new Set(cn.map(x=>x.id)))]:cn;t.setPersonLook(Li(a)==="pin"?"pin":"figure"),t.setPersons(Ht),this.lastPersons=Ht.map(x=>({floorId:x.floorId,roomId:x.roomId}));let xd=ja(i,a,this.openingLinks,Ht);t.setFloorInfo(new Map([...xd].map(([x,E])=>[x,qa(i,E)])));let Gn=i.states["sun.sun"]?.attributes,Un=typeof Gn?.elevation=="number"?Gn.elevation:null;t.setSun(Un!==null&&typeof Gn?.azimuth=="number"?{elevation:Un,azimuth:Gn.azimuth}:null);let jn=x=>$(i,x).charAt(0).toUpperCase();t.setSunPath(this.sunPathToday(i),[jn("compass_n"),jn("compass_e"),jn("compass_s"),jn("compass_w")]),this.theme==="auto"&&t.setTheme(this.effectiveTheme());let qr=this.weather&&!this.dimmed&&V("weather")?$l(i,At(i,this.weatherEntityId??a.settings.weather_entity),a.settings.rain_entity):null,dn=qr?Ml(qr,a.settings.weather_effects):null;this.cloud=dn?.cloud??0,this._sky=(Un===null?0:Math.min(1,Math.max(0,(Un+4)/16)))*(1-.45*this.cloud);let Sd=dn?dn.sky:(a.settings.weather_effects??["sky"]).includes("sky");t.setWeather(this.weather&&!this.dimmed&&V("weather")?{...dn??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:Sd}:null),this.watchLightning(!!dn?.lightning),this.applyTint();let Zr=_.grid!==null||_.solar!==null||_.battery!==null||_.tariff!==null?_:null;JSON.stringify(Zr)!==JSON.stringify(this._energy)&&(this._energy=Zr);let Yr=h.some(x=>x.wallbox)?h.filter(x=>x.wallbox).reduce((x,E)=>x+E.power,0):null,Qr=a.floors.flatMap(x=>x.furniture.filter(E=>E.type==="inverter")).map(x=>{let E=this.furnitureLinks?.get(x.id)?.power,O=E?ae(i.states[E]):null;return O===null?null:{name:x.name||ge(i,x.type),w:Math.max(0,O)}}).filter(x=>!!x);JSON.stringify(Qr)!==JSON.stringify(this._plants)&&(this._plants=Qr),Yr!==this._wallboxW&&(this._wallboxW=Yr),this.watchSolarDay([...new Set(Y.flatMap(x=>x.dayIds))]);let Jr=V("energy_pro");this.watchMeters(Jr?a.energy.gas??null:null,Jr?a.energy.water??null:null),u&&(this.syncMs=this.syncMs*.8+(performance.now()-u)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let n=this.hass,t=this.building;if(!n||!t)return;let r=(this.findIndex??=Do(n,t)).find(s=>s.entity===e);if(r){this.goTo(r);return}let i=n.entities?.[e]?.area_id??n.devices?.[n.entities?.[e]?.device_id??""]?.area_id??null;for(let s of t.floors){let a=s.openings.find(u=>{let h=this.openingLinks?.get(u.id);return!!h&&[h.contact,h.tilt,h.contact2,h.tilt2,h.cover].includes(e)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!i&&u.area_id===i));if(!l)continue;let[d,c]=Ee(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:d,z:c,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,n=this.hass;if(!e||!n)return{entities:[],openings:[],furniture:[],low:this._low};let t=!this.openingLinks||this.linkedRegistry!==n.entities,r=t?Sn(n,e.floors):this.openingLinks,i=t?yt(n,e.floors):this.furnitureLinks,s=dr(cr(n,e,this.weatherEntityId)),a=Ir(n,e,{openings:r,furniture:i,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=V("auto_pro")?e.floors.flatMap(d=>d.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?ao(n,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker."))):[];return{entities:a,openings:[...r],furniture:[...i],low:this._low,cars:l,energy:V("energy_pro"),auto:V("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,n,t){this._menu=null,this._info={entity:e,x:n,y:t},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return y;let n=this.hass,t=n.states[e.entity],r=de(n,t),i=C(e.entity)==="light"&&t?.state==="on"&&r.endsWith("%")?`${$(n,"state_on")} \xB7 ${r}`:r,s=t?.last_changed?$(n,"tt_since",{time:Io(n,Date.parse(t.last_changed))}):"";return b`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${G(n,e.entity)}</span>
      <b>${s?`${i} \xB7 ${s}`:i}</b>
    </div>`}devicePowers(e,n){let t=new Map;for(let r of n.floors)for(let i of r.furniture){if(i.type!=="inverter"&&i.type!=="home_battery")continue;let s=this.furnitureLinks?.get(i.id)?.power,a=i.type==="home_battery"&&i.charge&&i.charge!=="none"?ae(e.states[i.charge]):null,l=s?ae(e.states[s],i.type==="home_battery"&&n.energy.battery_invert&&a===null):null;l!==null&&a!==null?l=Math.max(0,l)-Math.max(0,a):l===null&&a!==null&&(l=-Math.max(0,a)),l!==null&&t.set(i.id,l)}return t}detectionPins(e,n){let t=[],r=new Set(this.building?.floors.flatMap(i=>i.placements.filter(s=>s.detect_pins===!1).map(s=>s.entity_id))??[]);for(let i of n){if(!i.model?.startsWith("camera")||r.has(i.id))continue;let s=this.now(),a=qe(e,i.id).filter(p=>{let g=e.states[p];return g?g.state==="on"?!0:g.state==="off"&&!!g.last_changed&&s-Date.parse(g.last_changed)<$p:!1}),l=new Map;for(let p of a){let g=Ci(e,p);l.has(g)||l.set(g,p)}l.size>1&&l.delete("motion");let d=(i.rotation??0)*Math.PI/180,c=[-Math.sin(d),Math.cos(d)],u=i.model==="camera_ceiling",h=0;for(let[p,g]of l){let _=e.states[g],m=_?.last_changed?Io(e,Date.parse(_.last_changed)):"";t.push({id:`detect:${g}`,floorId:i.floorId,roomId:i.roomId,x:i.x+(u?0:c[0]*1.1),z:i.z+(u?0:c[1]*1.1),y:1.4+.4*h++,icon:fd[p]??fd.motion,name:G(e,g),text:`${$(e,`detect_${p}`)}${m?` \xB7 ${m}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return t}gridPin(e,n,t){let r=mr(n);if(!r)return null;let i=Math.abs(t)<5,s=n.settings.outage_entity;return s&&So(e.states[s])?{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:Ep,name:$(e,"holo_grid"),text:$(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:zp,name:$(e,"holo_grid"),text:i?se(e,0):`${$(e,t<0?"energy_grid_export":"energy_grid_import")} ${se(e,Math.abs(t))}`,active:!i,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,n){let t=[e,n].filter(s=>!!s),r=this.replay?"":t.join(",");if(r===this.meterKey)return;if(this.meterKey=r,clearInterval(this.meterTimer),this.meterTimer=void 0,!r){this._meters=null;return}let i=async()=>{if(!this.hass||document.hidden)return;let s=await oc(this.hass,t);this.meterKey===r&&s&&(this._meters={gas:e?s.get(e)??null:null,water:n?s.get(n)??null:null})};i(),this.meterTimer=setInterval(()=>{i()},3e5)}poolPipes(e){let n=[],t=[],r=new Map(this.scene.filter(i=>i.kind==="pipeflow").map(i=>[i.areaId,i.flows]));for(let{floor:i,area:s}of Uc(e.floors)){let a=s.pool;if(!a.pipes?.length&&!a.joints?.length)continue;let l=a.ports??[],d=new Map(Object.entries(r.get(s.id)??{})),c=Oo(e,i,s),u=(h,p)=>Pr(h,p,s,i);n.push(...jc(a.pipes??[],d,c,u));for(let h of l){if(h.kind!=="inlet")continue;let p=c(`port:${h.id}`),g=p&&Rr(s,[p.x,p.z]);if(!p||!g)continue;let _=(a.pipes??[]).find(v=>v.to===`port:${h.id}`),m=_?d.get(_.id):void 0;t.push({floorId:i.id,points:[[p.x+g[0]*.03,p.y,p.z+g[1]*.03],[p.x-g[0]*.09,p.y,p.z-g[1]*.09]],radius:.035,water:m?.active?m.color:null,fittings:[]})}for(let h of a.joints??[]){if(h.kind!=="wall"&&h.kind!=="floor")continue;let p=c(`joint:${h.id}:inside`),g=c(`joint:${h.id}:outside`),_=h.kind==="floor"?.03:p.y;t.push({floorId:i.id,points:[[p.x,_,p.z],[g.x,g.y,g.z]],radius:.05,water:null,fittings:[]})}for(let h of a.pipes??[]){let p=Pr(Bn(h,c),h,s,i);if(p.length<2)continue;let g=d.get(h.id),_=[],m=Lo(p);for(let[v,w]of[[h.from,.04],[h.to,m-.04]]){let f=v.startsWith("dev:")||v.startsWith("joint:")?Co(p,w):null;f&&_.push({kind:"sleeve",p:f.p,dir:f.dir})}for(let v of h.fittings??[]){let w=Co(p,v.at);w&&_.push({kind:v.kind,p:w.p,dir:w.dir,open:v.open!==!1})}t.push({floorId:h.floor_id,points:p,radius:.025,water:g?.active?g.color??Tr:null,fittings:_})}}return{flows:n,tubes:t}}watchSolarDay(e){let n=this.replay;if(n){clearInterval(this.holoTimer),this.holoTimer=void 0;let i=`tt|${e.join(",")}|${Math.floor(n.t/3e5)}`;if(i===this.holoIds)return;this.holoIds=i,this._rows=e.length?n.stats(e,new Date(n.t).setHours(0,0,0,0),n.t+1):null;return}let t=e.join(",");if(t===this.holoIds)return;if(this.holoIds=t,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let r=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let i=await hc(this.hass,e);this.holoIds===t&&(this._rows=i)};r(),this.holoTimer=setInterval(()=>{r()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&r()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,n,t,r,i,s){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),d=this._holos[e]?.kind==="main";if(!a){d&&this._holoOn&&(this._holoOn=!1);return}d&&r!==this._holoOn&&(this._holoOn=r);let c=this._holos[e],u=(this.building?.settings.roof.hologram??Ke).device_min_w??0;c?.kind==="device"&&u>0&&(c.w??0)<u&&(r=!1);let h=!r;if(a.hidden!==h&&(a.hidden=h),l&&l.hasAttribute("hidden")!==h&&l.toggleAttribute("hidden",h),!r)return;if(c?.kind==="bin"){let L=Math.max(.6,i*.8),I=!!c.bin?.icon&&i*.8<.62;a.classList.contains("fp3d-holo-far")!==I&&(a.classList.toggle("fp3d-holo-far",I),this.holoSizes.delete(e)),I&&(L=1);let S=this.holoSizes.get(e),z=performance.now();(!S||z-S.at>2e3)&&(S={w:a.offsetWidth||90,h:a.offsetHeight||40,at:z},this.holoSizes.set(e,S));let D=S.w*L,P=S.h*L,F=t;for(let B=0;B<6;B++){let Z=this.holoBoxes.find(R=>n-D/2<R.x1+3&&n+D/2>R.x0-3&&F-P<R.y1+3&&F>R.y0-3);if(!Z)break;F=Z.y0-4}this.holoBoxes.push({i:e,x0:n-D/2,x1:n+D/2,y0:F-P,y1:F}),a.style.transform=`translate(${n.toFixed(1)}px, ${F.toFixed(1)}px) scale(${L.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let p=i*.8,g=34*p,_=46*p,m=n+(s?g:-g),v=t-_,w=this.holoSizes.get(e),f=performance.now();(!w||f-w.at>2e3)&&(w={w:a.offsetWidth||184,h:a.offsetHeight||90,at:f},this.holoSizes.set(e,w));let k=w.w*p,T=w.h*p,A=s?m:m-k,M=A+k;for(let L=0;L<6;L++){let I=this.holoBoxes.find(S=>A<S.x1+4&&M>S.x0-4&&v-T<S.y1+4&&v>S.y0-4);if(!I)break;v=I.y0-6}this.holoBoxes.push({i:e,x0:A,x1:M,y0:v-T,y1:v});let W=s||(this.building?.settings.roof.hologram??Ke).mirror!==!1;if(a.style.transform=W?`translate(${m.toFixed(1)}px, ${v.toFixed(1)}px) scale(${(s?p:-p).toFixed(3)}, ${p.toFixed(3)}) translate(0, -100%)`:`translate(${A.toFixed(1)}px, ${v.toFixed(1)}px) scale(${p.toFixed(3)}) translate(0, -100%)`,l){let L=l.firstElementChild,I=l.lastElementChild;L?.setAttribute("x1",n.toFixed(1)),L?.setAttribute("y1",t.toFixed(1)),L?.setAttribute("x2",m.toFixed(1)),L?.setAttribute("y2",v.toFixed(1)),I?.setAttribute("cx",n.toFixed(1)),I?.setAttribute("cy",t.toFixed(1))}}renderHologram(){let e=this._energy,n=()=>this._holos.map((s,a)=>s.kind==="bin"?this.renderBinCard(s,a):y),t=this._holos.some(s=>s.kind==="module"||s.tag);if(!(t||V("energy_pro")||V("sound")||V("auto_pro")||V("pool")||V("household"))||this.roomId&&!(this.building?.settings.roof.hologram??Ke).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return V("household")||t?n():y;let r=this.floorId===null||(this.building?.floors.length??0)<=1,i=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&r;return this._holos.map((s,a)=>s.kind==="module"?this.renderModuleCard(s,a):s.kind==="bin"?this.renderBinCard(s,a):s.kind==="car"?this.renderCarCard(s,a):s.kind==="media"?this.renderMediaCard(s,a):s.kind==="device"?this.renderDeviceCard(s,a):i?this.renderHoloCard(s,a,e):y)}renderBinCard(e,n){let t=e.bin,r=t.lines.length===1?t.lines[0]:null,i=t.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return b`<div class="fp3d-holo fp3d-holo-bin ${t.soon?"":"fp3d-holo-later"} ${r?.out?"fp3d-holo-out":""} ${r?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="note" aria-label=${i} style="--bin:${t.lines[0].color}">
      ${t.icon?b`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${t.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:y}
      ${r?b`<div class="fp3d-holo-body"><b>${r.when}</b><span>${r.name}</span></div>`:b`<div class="fp3d-holo-body fp3d-holo-lines">
            ${t.lines.map(s=>b`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,n){let t=this.hass,r=g=>$(t,g),i=e.car,s=!this.mediaFolded.has(i.spot),a=()=>{this.mediaFolded.has(i.spot)?this.mediaFolded.delete(i.spot):this.mediaFolded.add(i.spot),this.requestUpdate()},l=(g,_,m)=>{t.callService(g,_,{entity_id:m})},d=(g,_)=>g.startsWith("climate.")?l("climate",_?"turn_on":"turn_off",g):l("homeassistant",_?"turn_on":"turn_off",g),c=()=>{if(!i.lock)return;let g=i.lock.startsWith("lock.");if(i.locked){if(!confirm(r("car_unlock_confirm")))return;g?l("lock","unlock",i.lock):l("homeassistant","turn_off",i.lock)}else g?l("lock","lock",i.lock):l("homeassistant","turn_on",i.lock)},u=i.soc===null?"#37e0ff":i.soc>=50?"#4dff80":i.soc>=20?"#ffcc40":"#ff4d40",h=!!i.lock&&/^(lock|input_boolean|switch)\./.test(i.lock),p=!!i.climate&&/^(climate|switch|input_boolean)\./.test(i.climate);return b`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${i.charging?`\u26A1 ${r("car_charging_short")}`:i.locked===null?"":i.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b>
            <span>${i.range!==null?`${ie(t,i.range,0)} ${i.rangeUnit}`:""}${i.charging&&i.chargingW?` \xB7 ${se(t,i.chargingW)}`:""}</span>
          </div>
          ${i.soc!==null?b`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,i.soc))}%;background:${u}"></i></div>`:y}
          ${s&&!this.ro&&(h||p||i.charge)?b`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${h?b`<button title=${i.locked?r("car_unlock_btn"):r("car_lock_btn")} @click=${c}>${i.locked?"\u{1F512}":"\u{1F513}"}</button>`:y}
                ${p?b`<button class=${i.climateOn?"fp3d-holo-on":""} title=${r("car_climate")} @click=${()=>d(i.climate,!i.climateOn)}>❄</button>`:y}
                ${i.charge?b`<button class=${i.charging?"fp3d-holo-on":""} title=${r("car_charging")} @click=${()=>d(i.charge,!i.charging)}>⚡</button>`:y}
              </div>`:y}
        </div>
      </div>`}renderModuleCard(e,n){let t=e.module,r=!this.mediaFolded.has(t.id),i=()=>{this.mediaFolded.has(t.id)?this.mediaFolded.delete(t.id):this.mediaFolded.add(t.id),this.requestUpdate()},s=p=>p?`color:${p}`:"",a=this._low||this.clientWidth<600,l=Ho(t.rows,a),d=Ho(t.cells,a),c=t.chain?Ho(t.chain.items,a):[],u=t.spark&&t.spark.values.length>1&&!(a&&t.spark.minor)?t.spark:null,h=!!(t.chain||t.cells?.length||t.status);return b`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${h?"fp3d-holo-mod-wide":""} ${this.cardPing===t.id?"fp3d-holo-ping":""} ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${t.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${i}><span>${t.icon} ${t.title}</span><span class="fp3d-holo-live" style=${s(t.liveColor)}>${t.live??""}</span></div>
          ${t.status?b`<div class="fp3d-holo-status" style=${t.status.color?`--st:${t.status.color}`:""}>
                ${t.status.icon?b`<i>${t.status.icon}</i>`:y}<b>${t.status.text}</b>${t.status.since?b`<span>${t.status.since}</span>`:y}
              </div>`:y}
          ${t.main?b`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(t.main.color)}>${t.main.text}</b><span>${t.main.sub??""}</span>
                ${t.main.side?b`<em style=${s(t.main.side.color)}><b>${t.main.side.text}</b>${t.main.side.sub?b`<small>${t.main.side.sub}</small>`:y}</em>`:y}
              </div>`:y}
          ${r&&c.length?b`<div class="fp3d-holo-chain">
                  ${c.map((p,g)=>b`${g?b`<s>→</s>`:y}<div><small>${p.label}</small><b style=${s(p.color)}>${p.value}</b></div>`)}
                </div>
                ${t.chain.note?b`<div class="fp3d-holo-chain-note" style=${s(t.chain.noteColor)}>${t.chain.note}</div>`:y}`:y}
          ${r?l.map(p=>b`<div class="fp3d-holo-mrow"><span>${p.label}</span><b style=${s(p.color)}>${p.value}</b>${p.at!==void 0?p.fill?b`<i class="fp3d-holo-mrow-fill"><s style="width:${p.at}%;background:${p.color??"#37e0ff"}"></s></i>`:b`<i><em style="left:${p.at}%;background:${p.color??"#37e0ff"};color:${p.color??"#37e0ff"}"></em></i>`:b`<i class="fp3d-holo-mrow-none"></i>`}</div>`):y}
          ${r&&d.length?b`<div class="fp3d-holo-cells">${d.map(p=>b`<div><small>${p.label}</small><b style=${s(p.color)}>${p.value}</b></div>`)}</div>`:y}
          ${r&&t.hint?b`<div class="fp3d-holo-hint" style=${t.hint.color?`--hint:${t.hint.color}`:""}>${t.hint.text}</div>`:y}
          ${r?(t.lines??[]).map(p=>b`<div class="fp3d-holo-mline">${p}</div>`):y}
          ${r&&u?b`${u.label?b`<div class="fp3d-holo-spark-label">${u.label}</div>`:y}${xp(u.values,u.color??"#ffb347")}`:y}
          ${r&&t.chips?.length?b`<div class="fp3d-holo-chips">
                ${t.chips.map(p=>b`<div class="fp3d-holo-mline">${p.title}</div>
                    <div class="fp3d-holo-chip-row">${p.items.map(g=>b`<button class=${g.on?"fp3d-holo-on":""} title=${g.title??""} @click=${()=>g.onTap()}>${g.label}</button>`)}</div>`)}
              </div>`:y}
          ${r&&!this.ro&&t.buttons?.length?b`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${t.buttons.map(p=>b`<button class=${p.on?"fp3d-holo-on":""} title=${p.title??""} @click=${()=>p.onTap()}>${p.label}</button>`)}</div>`:y}
        </div>
      </div>`}serviceFailed(e,n){let t=n&&typeof n=="object"&&"message"in n?String(n.message):String(n);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${t}`},bubbles:!0,composed:!0}))}renderMediaCard(e,n){let t=this.hass,r=f=>$(t,f),i=e.media,s=!this.mediaFolded.has(i.id),a=()=>{this.mediaFolded.has(i.id)?this.mediaFolded.delete(i.id):this.mediaFolded.add(i.id),this.requestUpdate()},l=(f,k={})=>{Promise.resolve(t.callService("media_player",f,{entity_id:i.id,...k})).catch(T=>this.serviceFailed(`media_player.${f}`,T))},d={down:f=>f.currentTarget.dataset.pressed=String(f.pointerId),up:f=>k=>{let T=k.currentTarget;T.dataset.pressed===String(k.pointerId)&&(delete T.dataset.pressed,k.stopPropagation(),T.dataset.acted=String(Date.now()),f())},key:f=>k=>{let T=k.currentTarget;Date.now()-Number(T.dataset.acted??0)<700||(T.dataset.acted=String(Date.now()),f())}},c=t.states[i.id]?.attributes.supported_features,u=f=>typeof c!="number"||(c&f)!==0,h=this.mediaIntent.get(i.id);h&&(h.playing===i.playing||Date.now()-h.at>3e4)&&this.mediaIntent.delete(i.id);let p=this.mediaIntent.get(i.id)?.playing??i.playing,g=u(16384)||u(1),_=()=>{this.mediaIntent.set(i.id,{playing:!p,at:Date.now()}),this.requestUpdate(),l(p?"media_pause":u(16384)?"media_play":"media_play_pause")},m=this.mediaVolume.get(i.id);m&&(Math.abs(m.v-i.volume)<=2||Date.now()-m.at>3e4)&&this.mediaVolume.delete(i.id);let v=this.mediaVolume.get(i.id)?.v??i.volume,w=(f,k)=>{this.mediaVolume.set(i.id,{v:f,at:Date.now()}),this.requestUpdate(),(k||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:f/100}))};return b`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${p?`\u25CF ${r("holo_media_playing")}`:r("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${i.picture?b`<img class="fp3d-holo-cover" src=${i.picture} alt="" />`:b`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${i.title}</b>${i.artist?b`<span>${i.artist}</span>`:y}</div>
        </div>
        ${s&&!this.ro?b`<div class="fp3d-holo-media-controls">
                <button aria-label=${r("previous")} ?disabled=${!u(16)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_previous_track"))} @click=${d.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${r("play_pause")} ?disabled=${p?!u(1):!g} @pointerdown=${d.down} @pointerup=${d.up(_)} @click=${d.key(_)}>${p?"\u23F8":"\u25B6"}</button>
                <button aria-label=${r("next")} ?disabled=${!u(32)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_next_track"))} @click=${d.key(()=>l("media_next_track"))}>⏭</button>
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
    </div>`}renderDeviceCard(e,n){let t=this.hass,r=d=>$(t,d),i=!this.holoFolded.has(n),s=this.dayOf(e),a=s&&s.curve.length>1?gr(s.curve,s.peak):null,l=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()};return b`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${se(t,e.w??0)}</b><span>${r("holo_dev_now")}</span></div>
        ${i&&s?b`<div class="fp3d-holo-sub">${r("holo_today")} <b>${ie(t,s.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${se(t,s.peak)}</b></div>`:y}
        ${i&&a?bt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${n})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:y}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let n=Object.fromEntries(e.dayIds.filter(t=>this._rows[t]).map(t=>[t,this._rows[t]]));return Object.keys(n).length?uc(n,new Date(this.now())):null}renderHoloCard(e,n,t){let r=this.hass,i=m=>$(r,m),s=!this.holoFolded.has(n),a=this.dayOf(e),l=e.kind==="main",d=l&&t.grid!==null&&t.consumption!==null&&t.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,t.grid)/t.consumption)*100))):null,c=a&&a.curve.length>1?gr(a.curve,a.peak):null,u=new Date(this.now()),h=(u.getHours()+u.getMinutes()/60)/24*220,p=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()},g=l?t.solar??t.consumption??0:e.w??0,_=l?t.battery!==null||t.soc!==null?{soc:t.soc,w:t.battery}:null:e.battery;return b`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-label=${e.name} @click=${p}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${se(r,g)}</b><span>${i(l&&t.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?b`${l&&this._plants.length>1?b`<div class="fp3d-holo-plants">${this._plants.map(m=>b`<span>${m.name}</span><b>${se(r,m.w)}</b>`)}</div>`:y}
              ${a?b`<div class="fp3d-holo-sub">${i("holo_today")} <b>${ie(r,a.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${se(r,a.peak)}</b></div>`:y}
              ${c?bt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${c.area}" fill="url(#fp3dHoloG${n})"/>
                    <path d="${c.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${c.endX}" cy="${c.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${h}" y1="2" x2="${h}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:y}
              <div class="fp3d-holo-grid">
                ${_?b`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${i("holo_battery")}<br /><b>${_.soc!==null?`${Math.round(_.soc)} %`:se(r,Math.abs(_.w??0))}</b>
                      ${_.w!==null&&Math.abs(_.w)>=5?b`<span>${_.w<0?"\u25B2":"\u25BC"} ${se(r,Math.abs(_.w))}</span>`:y}
                    </div>`:y}
                ${l&&t.grid!==null?b`<div class="fp3d-holo-cell ${t.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${i("holo_grid")}<br /><b>${se(r,Math.abs(t.grid))}</b> <span>${Math.abs(t.grid)<5?"":i(t.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:y}
                ${l&&t.consumption!==null?b`<div class="fp3d-holo-cell fp3d-holo-house">${i("holo_house")}<br /><b>${se(r,t.consumption)}</b></div>`:y}
                ${l&&this._wallboxW!==null?b`<div class="fp3d-holo-cell fp3d-holo-wb">${i("holo_wallbox")}<br /><b>${se(r,this._wallboxW)}</b></div>`:y}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?b`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?b`<span>🔥 ${i("holo_gas")} <b>${ie(r,this._meters.gas,this._meters.gas<10?2:1)} ${pd(r,this.building?.energy.gas)}</b></span>`:y}
                    ${this._meters.water!==null?b`<span>💧 ${i("holo_water")} <b>${Sp(r,this._meters.water,pd(r,this.building?.energy.water))}</b></span>`:y}
                    <span>${i("holo_today_short")}</span>
                  </div>`:y}
              ${d!==null?b`<div class="fp3d-holo-bar"><div style="width:${d}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${i("holo_autarky")}</span><b>${d} %</b></div>`:y}`:y}
      </div>
    </div>`}setAlerts(e){let n=e.map(s=>`${s.kind}:${s.entity}`),t=this.ro?[]:e.filter((s,a)=>!this.seenAlerts.has(n[a]));this.ro||(this.seenAlerts=new Set(n)),n.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=e);let r=e.some(s=>!s.quiet);if(r&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!r||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!t.length)return;let i=this.directorSettings();if(i?.alerts){let s=t[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),i.hold??30)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(t[0])}directorSettings(){let e=this.building?.settings.director;return this.director&&!this.ro&&V("camera_cockpit")&&ad(e)?e:null}direct(){let e=this.directorSettings(),n=this.hass,t=this.building;if(!e||!n||!t){this.directorSrc&&(this.directing=new Vn,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let r=Date.now(),i=e.hold??30,s=`${JSON.stringify(e)}|${t.floors.map(d=>d.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==n.entities||this.directorSrc.building!==t||this.directorSrc.sig!==s){let d=[...new Set(t.floors.flatMap(u=>u.placements.map(h=>h.entity_id)))],c=e.motion??"off";this.directorSrc={registry:n.entities,building:t,sig:s,bells:(e.doorbell?ld(n,e.doorbell_entity):[]).map(u=>({id:u,camera:dd(n,u,d,e.doorbell_camera)})),motion:c==="off"?[]:d.filter(u=>u.startsWith("camera.")).flatMap(u=>qe(n,u).filter(h=>c==="all"||Ci(n,h)==="person").map(h=>({sensor:h,cam:u})))}}let a=[];for(let d of this.directorSrc.bells)this.directing.edge(d.id,n.states[d.id],(c,u)=>Nr(c,u,r))&&a.push({kind:"doorbell",key:`bell:${d.id}`,entity:d.id,camera:d.camera});for(let d of e.triggers??[])d.entity&&this.directing.edge(`trigger:${d.entity}`,n.states[d.entity],(c,u)=>cd(c,u,r))&&a.push({kind:"trigger",key:`trigger:${d.entity}`,entity:d.entity,camera:d.camera});for(let d of this.directorSrc.motion)this.directing.edge(d.sensor,n.states[d.sensor],(c,u)=>c?.state==="off"&&u?.state==="on")&&a.push({kind:"motion",key:`cam:${d.cam}`,entity:d.sensor,camera:d.cam});if(e.appliances){for(let[d,c]of this.appliances)this.directing.stopped(`app:${d}`,c.running,r)&&a.push({kind:"appliance",key:`app:${d}`,entity:d});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((d,c)=>l.indexOf(d.kind)-l.indexOf(c.kind));for(let d of a)if(this.directing.offer(d,r,i)){this.directorShow(()=>this.directorGo(d));break}}directorShow(e){let n=this.viewer;if(!n)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:n.getView()}),n.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let t=this.directing.current;t&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,t.until-Date.now())+50))}directorGo(e){let n=this.building;if(n){if(e.camera&&n.floors.some(t=>t.placements.some(r=>r.entity_id===e.camera))){let t=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(t),250)):this.lookThrough(t);return}if(e.kind==="appliance"){let t=this.appliances.get(e.key.slice(4));t&&this.goTo({kind:"device",name:"",where:"",floorId:t.floorId,roomId:null,entity:t.entity,icon:null,x:t.x,z:t.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),n=this.directorBack;e&&(this.directorBack=null,!(!e.back||!n)&&(this._through&&(this._through=null),this.floorId!==n.floorId&&this.fire("floor-tap",{floorId:n.floorId}),n.roomId?setTimeout(()=>this.fire("room-tap",{floorId:n.floorId,roomId:n.roomId}),60):this.roomId&&n.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:n.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(n.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,n){let t=this.building,r=this.hass,i=t?.floors.find(c=>c.id===e),s=i?ke(i).find(c=>c.id===n):void 0;if(!t||!r||!i||!s||this.ro)return;let a=new Set(fe(r,s.area_id).filter(c=>C(c)==="light"));for(let c of i.placements)C(c.entity_id)==="light"&&K([c.x,c.z],s.points)&&a.add(c.entity_id);for(let c of i.furniture){let u=this.furnitureLinks.get(c.id)?.entity;u&&mi(c.type)&&K([c.x,c.z],s.points)&&a.add(u)}let l=[...a].filter(c=>!this.confirmSet.has(c));if(!l.length)return;let d=l.some(c=>r.states[c]?.state==="on");r.callService("homeassistant",d?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:n,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,n=this.building,t=this.hass;if(!e||!n||!t)return;let r=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=bc(t,n,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,r=new Map([...l].map(([d,c])=>[d,_c(a,c)]))}let i=new Map;if(this.heatMode==="values")for(let a of n.floors)for(let l of ke(a)){let d=et(t,a,l,"temperature"),c=et(t,a,l,"humidity"),u=et(t,a,l,"co2"),h=[d!==null?`${ie(t,Gt(t,d),1)} ${Fe(t)}`:null,c!==null?`${ie(t,c,0)} %`:null,u!==null?`${ie(t,u,0)} ppm`:null].filter(p=>!!p);h.length&&i.set(l.id,h.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){r??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let d=Yl(l).map(c=>c*a);if(l.roomId)r.set(l.roomId,d);else for(let c of n.floors)if(!l.floorId||c.id===l.floorId)for(let u of c.rooms)r.set(u.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let s=r?[...r].map(([a,l])=>`${a}:${l.map(d=>d.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(r))}furnitureMarkers(e,n,t,r){let i=[],s=[],a=new Map,l=new Map,d=new Set(t),c=V("household"),u=[];this.binHolos=[];let h=new Map(this.scene.filter(w=>w.kind==="glow").map(w=>[w.furnitureId,w]));for(let w of n.floors)for(let f of w.furniture){let k=this.furnitureLinks.get(f.id),T=this.stateFaces(e,f);if(T.length&&a.set(f.id,{color:T[0].color,level:T[0].level,faces:T}),mi(f.type)){let N=this.lampMarker(e,w,f,k?.entity??null);i.push(N);let ne=f.type==="lamp_fan"&&f.fan&&f.fan!=="none"?f.fan:null;if(ne&&!t.has(ne)){t.add(ne);let le=e.states[ne],Le=f.rotation*Math.PI/180,Be=Math.min(.45,f.w*.3);i.push({id:ne,floorId:w.id,roomId:N.roomId,x:f.x+Math.cos(Le)*Be,z:f.z+Math.sin(Le)*Be,y:N.y,icon:f.icon?je(f.icon):kt("fan"),name:G(e,ne),text:le&&Ti(le)>0&&typeof le.attributes.percentage=="number"?`${Math.round(le.attributes.percentage)} %`:le?de(e,le):"",active:le?Pe(le):!1,unavailable:le?q(le):!1,glow:null,furnitureId:f.id,show:f.marker??"always",fromFurniture:!0})}continue}if(sa.has(f.type)){let N=this.techItem(e,w,f,a,t);N&&(i.push(N),l.set(f.id,N.id));continue}if(ra.has(f.type)){let N=this.gangItem(e,w,f,s,a,r);N&&(i.push(N),l.set(f.id,N.id));continue}let A=h.get(f.id);A&&a.set(f.id,{color:A.color,level:A.level});let M=(f.type==="plant"||er(f.type))&&!!f.moisture&&f.moisture!=="none";if(f.type==="waste_bin"||f.type==="mailbox"||M){let N=c?this.householdState(e,w,f):null;N?.screen&&a.set(f.id,N.screen),N?.marker&&i.push(N.marker);let ne=f.type==="waste_bin"?f.bin_source:f.type==="mailbox"?f.entity:f.moisture;if(c&&typeof ne=="string"&&ne!=="none"&&l.set(f.id,`hh:${ne}#${f.id}`),N?.item&&u.push(N.item),!M)continue}if(c){let N=Gl(f,e);N.length&&!a.has(f.id)&&a.set(f.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let ne of N){let le=f.name||ge(e,f.type);u.push({icon:"wrench-outline",text:ne===f.service?$(e,"hh_service",{name:le}):$(e,"hh_service2",{name:le,what:G(e,ne)}),entity:ne})}(f.type==="fridge"||f.type==="fridge_smart")&&zo(f,e)&&(a.set(f.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),u.push({icon:"fridge-alert-outline",text:$(e,"hh_fridge_open",{name:f.name||ge(e,f.type)}),entity:dt(f)[0]??null}))}let L=f.type==="parking"&&V("auto_pro")&&!!f.car?$n(e,f):null,I=f.type==="washer"||f.type==="dryer"||f.type==="dishwasher",S=f.type==="home_battery"?f.soc:f.type==="wallbox"?f.status:f.type==="parking"&&L?f.car?.device??L.entities.soc:c&&I?f.remaining??null:null,z=S&&S!=="none"?S:null,D=f.extra&&f.extra!=="none"&&e.states[f.extra]?f.extra:null,P=D?de(e,e.states[D]):"",F=N=>P?N?`${N} \xB7 ${P}`:P:N,B=k??(z||D?{entity:null,power:null}:void 0);if(!B)continue;let Z=f.type==="home_battery"?z??B.entity??B.power:B.entity??B.power??z??D;l.set(f.id,Z);let R=B.entity?e.states[B.entity]:void 0,J=f.type==="meter"?n.energy.grid_invert&&!f.export:f.type==="home_battery"?n.energy.battery_invert&&!f.charge:!1,U=B.power?ae(e.states[B.power],J):null,Y=f.type==="home_battery"&&f.charge&&f.charge!=="none"?f.charge:f.type==="meter"&&f.export&&f.export!=="none"?f.export:null,_e=Y?ae(e.states[Y]):null;_e!==null&&(U=Math.max(0,U??0)-Math.max(0,_e)),B.power&&U!==null&&!r.has(B.power)&&(r.add(B.power),s.push({id:Z,powerEntity:B.power,floorId:w.id,x:f.x,z:f.z,power:Math.max(0,U),wallbox:f.type==="wallbox"||void 0}));let he=typeof f.run_w=="number"&&f.run_w>0?f.run_w:10,re=typeof f.run_w=="number"&&f.run_w>0&&U!==null&&U<=f.run_w,ye=(U??0)>he||R?.state==="on"||R?.state==="running"||xi(R)&&Pe(R);I&&this.appliances.set(f.id,{floorId:w.id,x:f.x,z:f.z,entity:B.entity??B.power??f.id,running:ye});let We=null;if(c&&I){let N=f.remaining&&f.remaining!=="none"?e.states[f.remaining]:void 0,ne=sr(N),le=ye||!B.power&&!B.entity&&(ne??0)>0,Le=dt(f),Be=jo=>Le.some(cn=>{let Ht=e.states[cn];return!!Ht?.last_changed&&Date.parse(Ht.last_changed)>jo}),Kn=this.finished.update(f.id,le,Be),ln=f.name||(B.entity?G(e,B.entity):ge(e,f.type));le?(ye||a.set(f.id,_d(f.type)),ne!==null&&!lr(R,B.power?U:null,he)&&(We=$(e,"hh_left",{t:Kl(ne)}),u.push({icon:"timer-outline",text:`${ln}: ${We}`,entity:f.remaining??B.entity}))):(ar(R)||ar(N)||Kn)&&(We=$(e,"hh_done"),a.set(f.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),u.push({icon:"check-circle-outline",text:$(e,"hh_finished",{name:ln}),entity:B.entity??B.power}))}if(L&&tn(e,f)){let N=[];if(L.soc!==null){let ne=L.soc>=50?[.3,1,.5]:L.soc>=20?[1,.8,.25]:[1,.3,.25];N.push({part:"band",color:ne,level:L.charging?1:.6})}if(L.locked===!1&&N.push({part:"lights",color:[1,.42,.02],level:1}),L.climateOn){let ne=L.entities.climate?e.states[L.entities.climate]:void 0,le=!!ne&&(ne.attributes.hvac_action==="cooling"||ne.state==="cool");N.push({part:"cabin",color:le?[.45,.8,1]:[1,.55,.22],level:.35})}N.length&&a.set(`${f.id}:vehicle`,{color:N[0].color,level:N[0].level,faces:N})}if(f.type==="radiator"&&(R&&C(R.entity_id)==="climate"||f.heat_sensor)){let N=R&&C(R.entity_id)==="climate"?R.attributes:null;if($a(e,f.heat_sensor)??N?.hvac_action==="heating"){let le=N&&typeof N.temperature=="number"&&typeof N.current_temperature=="number"?N.temperature-N.current_temperature:1;a.set(f.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,le))})}else h.has(f.id)&&a.delete(f.id)}else if(f.type==="ac_unit"&&R&&C(R.entity_id)==="climate"){let N=za(R);N&&a.set(f.id,N)}else if((f.type==="washer"||f.type==="dryer"||f.type==="dishwasher")&&ye)a.set(f.id,_d(f.type));else if(f.type==="stove"||di(f.type)){let N=Ma(R,ye);N>0&&a.set(f.id,{color:[1,.05,.01],level:N,faces:[{part:"burners",color:[1,.05,.01],level:N}]})}let rn=we(f.type),sn=!!rn&&!rn.light&&rn.parts.some(N=>N.glow);if(R&&sn&&V("sound")&&C(R.entity_id)==="media"&&R.state==="playing"&&!so(f.type)){let N=typeof R.attributes.volume_level=="number"?R.attributes.volume_level:.5;a.set(f.id,{color:Pi(R)??[.22,.88,1],level:.5+.5*N,ring:!0,plain:!0})}if(R&&so(f.type)&&!di(f.type)&&!(Jn(f.type)&&C(R.entity_id)==="cover")){let N=V("screens"),ne=C(R.entity_id)==="light"?vt(R):null,le=C(R.entity_id)==="media"&&["playing","on","paused","idle"].includes(R.state),Le=N&&C(R.entity_id)==="media"?Pi(R):ne?ne.color:Pe(R)||le?[.22,.88,1]:null,Be=N&&C(R.entity_id)==="media"?R.attributes.entity_picture??null:null;Le&&a.set(f.id,{color:Le,level:R.state==="playing"?1:.6,picture:Be,ring:sn&&V("sound")&&R.state==="playing"})}if(d.has(Z))continue;t.add(Z);let Uo=B.entity?C(B.entity):null,an=w.rooms.find(N=>N.points.length>=3&&K([f.x,f.z],N.points)),Ye=R&&Cs(f.type)&&R.entity_id.startsWith("water_heater.")?Rp(e,R):null;i.push({id:Z,floorId:w.id,roomId:an?.id??null,x:f.x,z:f.z,y:Fp(f)+ce(w,f),icon:f.icon?je(f.icon):Ye?je("water-boiler"):kt(Uo??"switch"),name:f.name||(B.entity?G(e,B.entity):ge(e,f.type)),ownName:f.name||void 0,showName:!!f.show_name,text:F(We??(L?this.carText(e,L,!!R&&!Ro.has(R.state.toLowerCase())):f.type==="home_battery"?this.batteryText(e,z,U):f.type==="wallbox"?this.wallboxText(e,z,U):f.type==="meter"?this.meterText(e,U):Ye?Ye.text:R?de(e,R):re?$(e,"pin_standby"):U!==null?se(e,Math.max(0,U)):"")),active:We?!0:L?L.charging:Ye?Ye.on:R?Pe(R):(U??0)>(typeof f.run_w=="number"&&f.run_w>0?f.run_w:5),unavailable:R?q(R):!1,glow:null,furnitureId:f.id,energyDevice:f.type==="inverter"||f.type==="home_battery"||f.type==="wallbox"||f.type==="meter"||!!L||!!D,...re?{standby:re}:{},show:f.marker??(L||We?"always":void 0),fromFurniture:!0})}let p=n.settings.household;if(p?.bin_next_only||typeof p?.bin_days=="number"){let w=Cl(this.binHolos.filter(f=>!f.icon),{nextOnly:p.bin_next_only,ahead:p.bin_days});this.binHolos=this.binHolos.filter(f=>f.icon||w.has(f.id))}let g=n.settings.household?.notes,_=g&&g!=="none"?e.states[g]:void 0;if(c&&_&&!q(_)&&_.state.trim()){let w=_.state.split(/\s*(?:\||\n|;)\s*/).map(f=>f.trim()).filter(Boolean).slice(0,8);u.unshift(...w.map(f=>({icon:"pin-outline",text:f,entity:g})))}this._household=u.filter((w,f)=>u.findIndex(k=>k.text===w.text)===f),this.cameraScreens=0;let m=zi(e,n.floors),v=V("screens");for(let w of n.floors)for(let f of w.furniture){if(!v||!f.pictures?.length||!so(f.type)||f.type==="fridge_smart"&&m.get(f.id)?.right)continue;let k=f.pictures.find(M=>Pa(e,M));if(!k)continue;let T=this.pictureUrl(k.image),A=f.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];T&&a.set(f.id,{color:A,level:1,picture:T,plain:!0})}for(let w of h.values())w.top?a.set(w.furnitureId,{color:w.color,level:w.level,faces:[{part:"strata",color:w.color,top:w.top,level:w.level}]}):w.band&&a.set(w.furnitureId,{color:w.color,level:w.level,faces:[{part:"band",color:w.color,level:w.level}]});return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:i,consumers:s,screens:a,targets:l}}watchHousehold(e,n){let t=n.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),r=V("household")&&t.length>0&&!this.replay,i=r?Fl(n.floors):[],s=i.join(",");if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let a=async()=>{i.length&&(this.pickups=await nr(this.hass??e,i)),this.syncDevices(!0)};(s!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=s,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void a(),6e5),i.length&&nr(e,i).then(l=>{this.pickups=l,this.syncDevices(!0)}))}gangItem(e,n,t,r,i,s){let a=yn(t),l=t.type==="wall_socket",d=[],c=0,u=0,h=null,p=!1;if(a.forEach((k,T)=>{let A=k.entity&&k.entity!=="none"?k.entity:null,M=k.power&&k.power!=="none"?k.power:null;if(!A&&!M)return;u++;let W=A?e.states[A]:void 0,L=M?ae(e.states[M]):null;if(M&&L!==null&&(h=(h??0)+Math.max(0,L),s.has(M)||(s.add(M),r.push({id:A??M,powerEntity:M,floorId:n.id,x:t.x,z:t.z,power:Math.max(0,L)}))),W&&!q(W)&&(p=!0),!(W?Pe(W):(L??0)>5))return;c++;let S=W&&C(W.entity_id)==="light"?vt(W):null;if(!l){d.push({part:"gang",index:T,of:a.length,color:S?S.color:[.22,.88,1],level:.5,accent:!S});return}let z=S?S.color:[.35,1,.55];d.push({part:"gang",index:T,of:a.length,color:z,level:L!==null?Math.min(1,.55+L/1500):.8})}),d.length&&i.set(t.id,{color:d[0].color,level:d[0].level,faces:d}),!u)return null;let g=to(t),_=g[0]??null,m=_?e.states[_]:void 0,v=n.rooms.find(k=>k.points.length>=3&&K([t.x,t.z],k.points)),w=h,f=il(this.floorWalls(n),t,n.height,ce(n,t));return{id:`gangs:${t.id}`,floorId:n.id,roomId:v?.id??null,x:f.x,z:f.z,y:t.h+.2+f.y,icon:je(t.icon||(l?"power-socket-de":"light-switch")),name:t.name||(g.length===1&&_?G(e,_):ge(e,t.type)),ownName:t.name||void 0,showName:!!t.show_name,text:u>1?`${c}/${u}${w!==null?` \xB7 ${se(e,w)}`:""}`:w!==null?se(e,w):m?de(e,m):"",active:c>0,unavailable:!!_&&!p,glow:null,power:w??void 0,furnitureId:t.id,show:t.marker??void 0,fromFurniture:!0}}techItem(e,n,t,r,i){let s=A=>typeof A=="string"&&A!=="none"?A:null,a=s(t.entity),l=a?e.states[a]:void 0,d=n.rooms.find(A=>A.points.length>=3&&K([t.x,t.z],A.points)),c={floorId:n.id,roomId:d?.id??null,x:t.x,z:t.z,ownName:t.name||void 0,showName:!!t.show_name,glow:null,furnitureId:t.id,fromFurniture:!0};if(t.type==="wifi_ap"){let A=s(t.clients),M=A?e.states[A]:void 0,W=M&&Number.isFinite(Number(M.state))?Math.round(Number(M.state)):null,L=a?Ai(l):M?Ai(M):null;if(L!==null){let S=L?[.25,.6,1]:[1,.25,.2];r.set(t.id,{color:S,level:.85,faces:[{part:"apring",color:S,level:.85}]})}let I=a??A;return!I||i.has(I)?null:(i.add(I),{...c,id:I,y:ce(n,t)-(t.variant==="wall"?-t.h-.2:.3),icon:je(t.icon||"access-point"),name:t.name||G(e,I),text:L===!1?$(e,"ap_offline"):W!==null?$(e,"ap_clients",{n:W}):l?de(e,l):"",active:L===!0,unavailable:L===!1,show:t.marker??(L===!1?"always":void 0),energyDevice:W!==null})}let u=l?C(l.entity_id):null,h=s(t.power),p=h?ae(e.states[h]):null,g=typeof t.run_w=="number"&&t.run_w>0?t.run_w:30,_=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(p??0)>g;(_||l&&!["off","unavailable","unknown"].includes(l.state))&&r.set(t.id,{color:[1,.45,.15],level:_?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:_?.9:.3}]});let v=s(t.water_temp),w=v?e.states[v]:void 0,f=w&&Number.isFinite(Number(w.state))?Number(w.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,k=w?.attributes.unit_of_measurement??"\xB0C",T=a??v??h;return!T||i.has(T)?null:(i.add(T),{...c,id:T,y:ce(n,t)+t.h+.25,icon:je(t.icon||"water-boiler"),name:t.name||(a?G(e,a):ge(e,t.type)),text:f!==null?`${ie(e,Math.round(f))} ${k}${_?" \xB7 \u{1F525}":""}`:l?de(e,l):"",active:_,unavailable:l?q(l):!1,power:p??void 0,show:t.marker??void 0,energyDevice:f!==null})}floorWalls(e){let n=this.wallCache.get(e);if(!n){let t=this.building?.settings;n=it(e.rooms,{exterior:t?.wall_exterior??.24,interior:t?.wall_interior??.12},e.walls??[]).walls,this.wallCache.set(e,n)}return n}wallCache=new WeakMap;renderGangMenu(){let e=this._gangMenu,n=this.hass,t=e&&this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e.furnitureId);if(!e||!n||!t)return y;let r=t.type==="wall_socket";return b`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${e.x}px;top:${e.y}px">
        <span>${t.name||ge(n,t.type)}</span>
        ${yn(t).map((s,a)=>{let l=s.entity&&s.entity!=="none"?s.entity:null,d=l?n.states[l]:void 0,c=s.power&&s.power!=="none"?ae(n.states[s.power]):null,u=`${r?"\u{1F50C}":"\u25AD"} ${a+1} \xB7 ${l?G(n,l):"\u2013"}`;return b`<button class="fp3d-chip ${d&&Pe(d)?"fp3d-gang-on":""}" ?disabled=${!l||(d?q(d):!0)}
            @click=${()=>{l&&(this.confirmSet.has(l)&&!confirm($(n,"confirm_switch",{name:G(n,l)}))||mo(n,l))}}>${u}${d?b` <small>${de(n,d)}${c!==null?` \xB7 ${se(n,Math.max(0,c))}`:""}</small>`:y}</button>`})}
      </div>`}householdState(e,n,t){let r=l=>{let d=parseInt(l.slice(1),16);return[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]};if(t.type==="waste_bin"){let l=typeof t.bin_source=="string"&&t.bin_source!=="none"?t.bin_source:null;if(!l)return null;let d=or(t,e,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until});if(!d)return null;let c=d.days===0?$(e,"bin_today"):d.days===1?$(e,"bin_tomorrow"):$(e,"bin_in_days",{n:d.days}),u=r(Il(t)[1]),h=Math.max(...u),g=h-Math.min(...u)<.12?[.92,.95,1]:u.map(f=>Math.min(1,f/Math.max(.001,h)*1.05)),_=t.name||$(e,`bin_kind_${t.bin_kind??"rest"}`),m=ir(t,e),v=`#${g.map(f=>Math.round(f*255).toString(16).padStart(2,"0")).join("")}`,w=m?$(e,"bin_out_done"):c;return this.binHolos.push({id:t.id,floorId:n.id,x:t.x,z:t.z,y:ce(n,t)+t.h,r:Math.max(t.w,t.d)/2,name:_,color:v,when:w,soon:d.days<=1&&!m,days:d.days,out:m}),{item:d.days<=1?{icon:m?"check-circle-outline":"trash-can-outline",text:`${_}: ${w}`,entity:l,hot:d.glow&&!m}:void 0}}if(t.type!=="mailbox"){let l=rr(t,e),d=[1,.55,.12],c=t.name||ge(e,t.type);return l?(this.binHolos.push({id:t.id,floorId:n.id,x:t.x,z:t.z,y:ce(n,t)+t.h,r:Math.max(t.w,t.d)/2,name:c,color:"#ff8c1f",when:$(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:d,level:.9,faces:[{part:"band",color:d,level:.9}]},item:{icon:"watering-can-outline",text:$(e,"hh_plant",{name:c}),entity:t.moisture??null,hot:!0}}):null}let i=typeof t.entity=="string"&&t.entity!=="none"?t.entity:null;if(!i)return null;let s=Bl(t,e),a=[1,.62,.15];return s&&this.binHolos.push({id:t.id,floorId:n.id,x:t.x,z:t.z,y:ce(n,t)+t.h,r:Math.max(t.w,t.d)/2,name:t.name||ge(e,t.type),color:"#ffb547",when:$(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:t.name?`${t.name}: ${$(e,"mailbox_post")}`:$(e,"mailbox_post"),entity:i,hot:!0}:void 0}}robotPaths(e,n){let t=this.replay;if(!t)return[];let r=[];for(let i of n.floors){let s=i.rooms.filter(a=>a.points.length>=3);for(let a of i.furniture){if(!Bt(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let d=t.robotRooms(l,Mn(e,l,a.room_sensor)),c=[];for(let u of d){let h=Ri(e,s,u),p=h?Ee(h.points):null,g=c[c.length-1];p&&(!g||g[0]!==p[0]||g[1]!==p[1])&&c.push([p[0],p[1]])}c.length&&r.push({floorId:i.id,points:c})}}return r}trailNow(e,n){let t=this.now(),r=Ln(e,n),i=this.replay?this.replay.rows(r.map(a=>a.entity),t-Wn,t):this.trailRows,s=r.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return Sc(r,xc(i,s,t),t)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!V("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!V("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let n=this.hass,t=this.building;if(!n||!t||document.hidden)return;let r=Ln(n,t).map(i=>i.entity);if(r.length){try{let i=await n.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Wn).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,n){let t=[];if(Na()){let r=new Set(n.floors.flatMap(i=>i.placements.map(s=>s.entity_id)).filter(i=>C(i)==="camera"));for(let i of r){let s=e.states[i],a=s?.attributes.entity_picture;!a||q(s)||t.push({id:i,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=t.length>0,t}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let n=this.hass.states[e.slice(7)],t=n?.attributes.entity_picture;return!t||q(n)?null:(this.cameraScreens++,t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),Rs(this.hass,e).then(n=>{this.pictureUrls.set(e,n),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,n){let t=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(r=>{if(t.has(r.type)||r.type.startsWith("lamp_")&&r.type!=="lamp_floor"&&r.type!=="lamp_uplight"||r.h<.04||ce(e,r)>.12)return!1;let i=we(r.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(r.type))?!1:K([r.x,r.z],n)||wt(r).some(s=>K(s,n))}).map(r=>wt(r))}robotInfos(e,n){let t=[];for(let r of n.floors)for(let i of r.furniture){if(!Bt(i.type))continue;let s=this.furnitureLinks.get(i.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=Si(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",d=i.rotation*Math.PI/180,c=Xe(i.type),u=i.d*(c?Ls(we(i.type)):.14),h=[i.x-Math.sin(d)*u,i.z+Math.cos(d)*u],p=r.rooms.filter(v=>v.points.length>=3),_=(l==="cleaning"?Ha(e,p,s,Mn(e,s,i.room_sensor)):null)??p.find(v=>K(h,v.points)),m=l==="cleaning"&&_?this.robotObstacles(r,_.points):[];t.push({id:i.id,floorId:r.id,rest:h,restHeading:-d,mode:l,room:_?.points??null,roomId:_?.id??null,obstacles:m,...c?{model:{type:i.type,w:i.w,d:i.d,h:i.h}}:{}})}return t}batteryText(e,n,t){let r=n?Number(e.states[n]?.state):Number.NaN,i=[];return Number.isFinite(r)&&i.push(`${ie(e,r,0)} %`),t!==null&&Math.abs(t)>=10&&i.push(`${t<0?"\u25B2":"\u25BC"} ${se(e,Math.abs(t))}`),i.join(" \xB7 ")}meterText(e,n){return n===null?"":Math.abs(n)<5?se(e,0):`${$(e,n<0?"energy_grid_export":"energy_grid_import")} ${se(e,Math.abs(n))}`}wallboxText(e,n,t){let r=n?e.states[n]:void 0,i=String(r?.state??"").toLowerCase(),s=(t??0)>50||/charg|laden|lädt/.test(i),a=r?.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=s?$(e,"wallbox_charging"):a?$(e,"wallbox_plugged"):r&&!q(r)&&!r.entity_id.startsWith("binary_sensor.")?de(e,r):"",d=t!==null&&t>50?se(e,t):"";return[l,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,n){let t=[],r=n.state_entity&&n.state_entity!=="none"&&n.state_entity2&&n.state_entity2!=="none"?[[n.state_entity,n.state_split==="top_bottom"?"bottom":"left"],[n.state_entity2,n.state_split==="top_bottom"?"top":"right"]]:[[n.state_entity,"all"]];for(let[i,s]of r){if(!i||i==="none")continue;let a=e.states[i];if(!a||q(a)||!(Pe(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let d=C(i)==="light"?vt(a):null;t.push({part:s,color:d?d.color:[1,.71,.28],level:d?d.level:.85})}return t}carText(e,n,t){let r=s=>$(e,s);if(t||n.away!==null){let s=n.away?` \xB7 ${n.away}`:"";return`${r("car_away")}${s}`}let i=[];return n.soc!==null&&i.push(`${ie(e,n.soc,0)} %`),n.range!==null&&i.push(`${ie(e,n.range,0)} ${n.rangeUnit}`),n.charging?i.push(n.chargingW!==null?`\u26A1 ${se(e,n.chargingW)}`:`\u26A1 ${r("car_charging_short")}`):n.plugged&&i.push("\u{1F50C}"),n.locked!==null&&i.push(n.locked?"\u{1F512}":"\u{1F513}"),i.join(" \xB7 ")}ceilingAt(e,n,t){let i=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&K([n,t],l.points))?.ceiling_height||e.height,s=this.building;if(!s||!Bi(s).some(l=>ll(l,e.elevation+i)&&Ni(l,e.elevation)))return i;let a=cl(s,n,t,e.elevation);return a===null?i:Math.max(.5,Math.min(i,a-e.elevation))}lampMarker(e,n,t,r){let i=r?e.states[r]:void 0,s=we(t.type),a=ca[t.type]??s?.light??"floor",l=n.rooms.some(w=>w.points.length>=3&&K([t.x,t.z],w.points)),d=a==="strip"&&!l?Ve(n,t.x,t.z)+(t.mount_y??0):t.mount_y!=null&&!s?t.mount_y:s||a==="wall"||a==="strip"?ce(n,t):a==="table"?wn(n,t.x,t.z,t.h):a==="bollard"||a==="garden"?Ve(n,t.x,t.z):0,c=n.rooms.find(w=>w.points.length>=3&&K([t.x,t.z],w.points)),u=this.ceilingAt(n,t.x,t.z),h=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(a))&&t.mount_y==null,p=h?n.height-u:0,g=s&&h?Math.max(0,d-p):d,_=Xn.has(t.type)&&t.mount_y!=null?Math.min(n.height,t.mount_y+eo(t.type,t.h)):Math.abs(p)>.01?u:void 0,m=_??n.height,v=s?s.mount==="ceiling"?Math.max(.5,g-.15):g+t.h+.2:{ceiling:m-.3,downlight:m-.25,spot:m-.35,panel:m-.25,pendant:Math.max(.6,m-t.h-.25),fan:Math.max(.6,m-t.h-.25),floor:g+t.h+.25,uplight:g+t.h+.25,table:g+t.h+.2,wall:g+t.h+.2,strip:t.upright?g+t.w+.15:Math.max(.3,g-.2),bollard:g+t.h+.25,garden:g+t.h+.25}[a];return{id:r??`lamp:${t.id}`,floorId:n.id,roomId:c?.id??null,x:t.x,z:t.z,y:v,icon:kt("light"),name:t.name||(r?G(e,r):ge(e,t.type)),text:i?de(e,i):"",active:i?Pe(i):!1,unavailable:i?q(i):!1,glow:i?Oi(Ea(vt(i,t.color_entity&&t.color_entity!=="none"?e.states[t.color_entity]:void 0),t.only_color),t.glow_scale):null,lamp:a,rotation:t.rotation,mirror:!!t.mirror,roll:t.tilt??0,upright:!!t.upright,rise:t.rise??0,fanSpeed:a==="fan"?Ti(t.fan&&t.fan!=="none"?e.states[t.fan]:void 0):void 0,size:[t.w,t.d,t.h],base:g,top:_,pickable:!!r,furnitureId:t.id,pack:s?t.type:null,lightY:s?s.mount==="ceiling"?g:g+t.h*.85:void 0,effect:!!i&&i.state==="on"&&typeof i.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(i.attributes.effect.trim()),variant:t.variant,show:t.marker??void 0,fromFurniture:!0}}inOpenRoom(e){if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let n=this.building?.floors.find(r=>r.id===e.floorId),t=n?ke(n).find(r=>r.id===this.roomId):void 0;return!!t&&K([e.x,e.z],t.points)}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let n=C(e.id);return n==="light"?!1:e.fromFurniture?(e.power??0)>=1||n==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[n,t]of this.openingLinks??[]){if(t.lock&&!t.cover||$i(t.cover)){e.set(n,`opening:${n}`);continue}let r=t.cover??t.contact??t.tilt;r&&e.set(n,r)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let n=this.building?.floors.filter(r=>r.rooms.length).length??0;if(!this.floorThumbs||n<2){this._thumbs=[];return}let t=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},t)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return y;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),n=[...this._thumbs].sort((i,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===i.floorId)?.elevation??0)),t=this._thumbsCompact,r=()=>{this._thumbsCompact=!t;try{localStorage.setItem("home3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return b`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${t?"fp3d-thumbs-compact":""}" aria-label=${$(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${$(this.hass,t?"thumbs_show":"thumbs_fold")} aria-label=${$(this.hass,t?"thumbs_show":"thumbs_fold")} @click=${r}>${t?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${$(this.hass,"all_floors")}</span>
      </button>
      ${n.map(i=>b`<button class="fp3d-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${t?y:b`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,n,t){let r=this.ro?null:xo(this.actionOwners.get(e),"hold");if(r)return this.runOwnAction(r,this.actionOwners.get(e),n,t);if(e.startsWith("item:"))return;if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),n,t,!0);if(e.startsWith("gangs:")){let s=this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e.slice(6)),a=s?to(s):[];a.length===1?this.onDeviceHold(a[0],n,t):this.onDeviceTap(e,n,t);return}if(this.ro){this.onDeviceTap(e,n,t);return}if(V("auto_pro")&&this.hass&&this.building)for(let s of this.building.floors)for(let a of s.furniture){if(a.type!=="parking"||!a.car)continue;let l=$n(this.hass,a);if([a.entity,a.car.device,...Object.values(l.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:n,y:t,car:l};return}}let i=C(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:n,y:t}:xe(this,e)}onDeviceSwipe(e,n,t,r,i){let s=this.hass?.states[e];if(this.ro)return!1;if(n==="start"){if(!s||q(s)||this.confirmSet.has(e))return!1;let l=C(e);if(l==="light"&&Sr(s).dim){let d=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:d,value:d,x:r,y:i},!0}if(l==="cover"&&$r(s)){let d=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:d,value:d,x:r,y:i},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(n==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-t/220*100)));l!==a.value&&(this._swipe={...a,value:l});let d=performance.now();d-this.swipeSent>350&&(this.swipeSent=d,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderBinInfo(){let e=this._binInfo,n=this.hass,t=e&&this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===e.furnitureId);if(!e||!n||!t)return y;let r=Hl(t,n,this.pickups),i=new Date;i.setHours(0,0,0,0);let s=c=>{let u=Math.round((c.getTime()-i.getTime())/864e5);return u===0?$(n,"bin_today"):u===1?$(n,"bin_tomorrow"):c.toLocaleDateString(n.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=t.name||$(n,`bin_kind_${t.bin_kind??"rest"}`),l=ir(t,n),d=c=>{c.stopPropagation(),typeof t.bin_out=="string"&&mo(n,t.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return b`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${r.length?r.map(c=>b`<b>${s(c.day)}${c.summary&&c.summary!==a?b` <small>· ${c.summary}</small>`:y}</b>`):b`<b>${$(n,"bin_none")}</b>`}
      ${Wl(t)&&!this.ro?b`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${d}>${l?$(n,"bin_out_done"):$(n,"bin_out_mark")}</button>`:l?b`<small>${$(n,"bin_out_done")}</small>`:y}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!V("household")||this.panelOpen)return y;let e=()=>{this._hhFolded=!this._hhFolded,Pp("home3d.hhFolded",this._hhFolded)};return b`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${$(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?y:this._household.map(n=>b`<button class="fp3d-hh-row ${n.hot?"fp3d-hh-hot":""}" ?disabled=${!n.entity} @click=${()=>n.entity&&(this.ro?this.showInfo(n.entity,0,0):xe(this,n.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${n.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${n.text}</span>
            </button>`)}
    </div>`}renderClock(){let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),y;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let n=new Date(this.now()),t=(this.hass.language||"en").replace("_","-"),r=this.hass.config?.time_zone,i=s=>{try{return n.toLocaleString(t,r?{...s,timeZone:r}:s)}catch{return n.toLocaleString(t,s)}};return b`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${i({hour:"2-digit",minute:"2-digit"})}</b><span>${i({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return y;let n=this._alerts.slice(0,3);return b`<div class="fp3d-alert-banner" role="alert">
      ${n.map(t=>b`<button class="fp3d-alert fp3d-alert-${t.kind}" title=${ur(this.hass,e,t)} @click=${()=>this.jumpTo(t)}>${ur(this.hass,e,t)}</button>`)}
      ${this._alerts.length>3?b`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:y}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return y;let n=e.floors.flatMap(i=>ke(i)).find(i=>i.id===this.roomId),t=n?fe(this.hass,n.area_id).filter(i=>C(i)==="scene"||C(i)==="script").slice(0,6):[];if(!t.length)return y;let r=n?.area_id?this.hass.areas?.[n.area_id]?.name:void 0;return b`<div class="fp3d-scenes">
      ${t.map(i=>b`<button class="fp3d-chip" aria-pressed=${this._sceneFired===i} @click=${()=>this.runScene(i)}>${G(this.hass,i,r)}</button>`)}
    </div>`}async syncPets(){let e=this.building,n=this.viewer,t=e?.settings.pets?.on!==!1&&this.petsOn!==!1,r=t?e?.settings.pets?.list??[]:[],i=t&&!!e?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!n||!e||!V("fun_pets")||!r.length&&!i){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,r));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a]=await Promise.all([zr(),On()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:a.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(l,d)=>ce(l,d),surface:(l,d,c)=>wn(l,d,c),closedDoors:()=>{let l=new Set,d=this.hass?.states??{};for(let c of this.building?.floors??[])for(let u of c.openings)u.type==="door"&&u.contact&&d[u.contact]?.state==="off"&&l.add(u.id);return l}})}catch(s){console.error("Home 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let e=this.building,n=!!e&&V("fun_halloween")&&e.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||!n){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[t,r]=await Promise.all([zr(),On()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=t.startGhost({lib:r.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(t){console.error("Home 3D: the ghost failed to load",t)}finally{this.ghostLoading=!1}}}async startWalk(){let e=this.building,n=this.viewer;if(!e||!n||this._walk)return;let t=e.floors.filter(u=>u.rooms.some(h=>h.points.length>=3)),i=(this.roomId?t.find(u=>u.rooms.some(h=>h.id===this.roomId)):void 0)??t.find(u=>u.id===this.floorId)??[...t].sort((u,h)=>Math.abs(u.elevation)-Math.abs(h.elevation))[0];if(!i)return;let s=await On();this._walk={room:null,hint:!0},await this.updateComplete;let a=this.renderRoot.querySelector(".fp3d-walk-surface");if(!a)return;n.setFloor(i.id,!1),n.setWallMode("auto");let l=new s.FloorMap(e,i),d=this.roomId?i.rooms.find(u=>u.id===this.roomId):void 0,c;if(d){let u=l.freeNear(Ee(d.points));c={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new s.WalkCamera(n,l,a,{start:c,onRoom:u=>{this.walkRoomPts=u?.points??null,this._walk&&(this._walk={...this._walk,room:u?.name??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return y;let e=i=>$(this.hass,i);if(!this._walk)return b`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let n=this._walk,t=null,r=(i,s)=>{if(!t)return;let a=44,l=i.clientX-t.cx,d=i.clientY-t.cy,c=Math.hypot(l,d);c>a&&([l,d]=[l/c*a,d/c*a]),s.firstElementChild.style.transform=`translate(${l}px, ${d}px)`,this.walker?.setStick({x:l/a,y:d/a})};return b`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${n.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${n.hint?b`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:y}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${i=>{let s=i.currentTarget,a=s.getBoundingClientRect();t={id:i.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(i.pointerId),r(i,s)}}
        @pointermove=${i=>r(i,i.currentTarget)}
        @pointerup=${i=>{t=null,i.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${i=>{t=null,i.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return y;if(this._find===null)return b`<button class="fp3d-find-btn" title=${$(this.hass,"find")} aria-label=${$(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let n=Mc(this.findIndex??=Do(this.hass,e),this._find);return b`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${$(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${t=>this._find=t.target.value}
        @keydown=${t=>{t.key==="Escape"&&(this._find=null),t.key==="Enter"&&n[0]&&this.goTo(n[0])}}
      />
      <button class="fp3d-find-close" aria-label=${$(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?b`<div class="fp3d-find-list">
            ${n.length?n.map(t=>b`<button @click=${()=>this.goTo(t)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${t.icon?po(t.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${t.name}</b>${t.where?b`<small>${t.where}</small>`:y}</span>
                  </button>`):b`<p>${$(this.hass,"find_none")}</p>`}
          </div>`:y}
    </div>`}renderCentral(){let e=this.building,n=this.hass;if(!e||!n||!this.central||this._find!==null||this.ro)return y;let t=(m,v)=>$(n,m,v),r=b`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${t("central")}
      aria-label=${t("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return r;let i=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,s=i?[i]:e.floors,a=s.flatMap(m=>Ii(n,m).lights),l=s.flatMap(m=>Ii(n,m).covers),d=a.filter(m=>n.states[m]?.state==="on").length,c=!i,u=(m,v,w,f)=>{if(f.length){if(c&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,n.callService(v,w,{entity_id:f})}},h=(m,v,w,f,k)=>b`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!k.length} @click=${()=>u(m,w,f,k)}>
        ${this._armed===m?t("central_sure"):t(v)}
      </button>`,p=(e.settings.favorites??[]).filter(m=>n.states[m]),g=this.buttons??e.settings.buttons??[],_=Rt()?yr(this.sceneHost(n,e)):[];return b`${r}
      <div class="fp3d-central" role="dialog" aria-label=${t("central")}>
        <div class="fp3d-central-top">
          <b>${i?i.name:t("central_house")}</b>
          <button class="fp3d-btn fp3d-central-gear" title=${t("view_settings")} aria-label=${t("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${t("view_settings")}</button>
        </div>
        ${_.length?b`<div class="fp3d-central-favs">
              ${_.map(m=>b`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:m.id,floorId:null,roomId:null}}}><span aria-hidden="true">${m.icon}</span> ${m.title}</button>`)}
            </div>`:y}
        <div class="fp3d-central-row">
          <span>${t("central_lights")}${a.length?b` <small>${d}/${a.length}</small>`:y}</span>
          ${h("lights_on","central_on","light","turn_on",a.filter(m=>n.states[m]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",a.filter(m=>n.states[m]?.state==="on"))}
        </div>
        ${l.length?b`<div class="fp3d-central-row">
              <span>${t("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
            </div>`:y}
        <b>${t("central_favorites")}</b>
        ${p.length?b`<div class="fp3d-central-favs">
              ${p.map(m=>{let[v,w]=La(m),f=n.states[m],k=v==="homeassistant"&&f?.state==="on";return b`<button
                  class="fp3d-chip"
                  aria-pressed=${k||this._sceneFired===m}
                  ?disabled=${q(f)}
                  @click=${()=>{n.callService(v,w,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${G(n,m)}
                </button>`})}
            </div>`:g.length?y:b`<p class="fp3d-central-hint">${t("central_no_favorites")}</p>`}
        ${g.length?b`<div class="fp3d-central-favs">
              ${g.map(m=>b`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Ap(n,m)}
                  @click=${v=>{Ca(n,v.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?b`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:y}${m.label}
                </button>`)}
            </div>`:y}
      </div>`}mediaCardUp(e,n){let t=e.states[n];if(!t||C(n)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(n)?.until??0)>Date.now()&&q(t))return!0;let r=[t.attributes.media_title,t.attributes.app_name,t.attributes.source].some(i=>typeof i=="string"&&!!i.trim());return!q(t)&&(t.state==="playing"||t.state==="paused"&&r&&this.pausedRecently(t))}pausedRecently(e){let n=Date.parse(e.last_changed??"");if(!Number.isFinite(n))return!0;let t=n+Mp-Date.now();if(t<=0)return!1;let r=Date.now()+t+500;return(!this.pausedTimer||r<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=r,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},t+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return y;let e=$(this.hass,this.clean?"controls_show":"controls_hide");return b`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?bt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:bt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return y;let n=this._voice,t=n?.phase==="wait"||n?.phase==="listen",r=$(e,"voice_button"),i=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return b`<button class="fp3d-mic ${n?.phase==="listen"?"fp3d-mic-on":""}" style="left:${i}px" title=${r} aria-label=${r} ?disabled=${t} @click=${()=>{this.onMic()}}>
        ${bt`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${n?b`<div class="fp3d-mic-say ${n.phase==="error"?"fp3d-mic-err":""}" style="left:${i}px">${n.text}</div>`:y}`}sayVoice(e,n){this._voice={phase:e,text:n},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){let n=this.hass,t=this.building;if(!n||!t)return;let r=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==r)return;if(e.show_rooms){(!e.admins_only||n.user?.is_admin)&&this.showRooms(t,e.show_rooms);return}let i=null;try{let s=await Dt();i=await this.handleSentence(n,t,s,e.text,e.speak),i===null&&this.sayVoice("error",$(n,"voice_none"))}catch(s){this.sayVoice("error",$(n,"voice_error",{msg:String(s?.message??s)}))}try{await Ps(n,e.ask_id,i??"",i!==null)}catch{}}async onMic(){let e=this.hass,n=this.building;if(!e||!n||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let t=(i,s)=>this.sayVoice(i,s);t("wait","\u2026"),this.tourToken++;let r;try{let i=window.AudioContext??window.webkitAudioContext;r=new i,r.resume()}catch{r=void 0}try{let i=await Dt(),s=await i.listenOnce(e,()=>t("listen",$(e,"voice_listen")),nn(),r);if(!s){t("error",$(e,"voice_none"));return}if(await this.handleSentence(e,n,i,s,!0)!==null)return;t("wait",`\u201C${s}\u201D \u2026`);let a=await i.converse(e,s);t("done",a?`\u201C${s}\u201D \u2013 ${a}`:`\u201C${s}\u201D`)}catch(i){let s=i,a=s?.message==="no_pipeline"?"voice_no_pipeline":s?.message==="silent"?"voice_silent":s?.name==="NotAllowedError"||s?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;t("error",a?$(e,a):$(e,"voice_error",{msg:String(s?.message??s?.name??i)}))}}async handleSentence(e,n,t,r,i){let s=(d,c)=>this.sayVoice(d,c),{devices:a,items:l}=this.spokenDevices(e,n,t.SYNONYMS);{let d=t.showTarget(r,n,a,p=>p.area_id?e.areas?.[p.area_id]?.name:null);if(d){let p=d.kind==="house"?$(e,"all_floors"):d.kind==="cameras"?$(e,"camera_wall_title"):d.name;if(s("done",`\u201C${r}\u201D \u2192 ${p}`),this.directing.touch(Date.now()),d.kind==="cameras")V("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(d.kind==="device"){let g=l.get(d.id);d.camera&&d.entity&&V("camera_cockpit")?this.lookThrough(d.entity):g&&this.goTo(g)}else d.kind==="house"?this.fire("floor-tap",{floorId:null}):d.kind==="floor"?this.fire("floor-tap",{floorId:d.floorId}):(this.floorId!==d.floorId&&this.fire("floor-tap",{floorId:d.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:d.floorId,roomId:d.roomId}),60));return $(e,"voice_showing",{name:p})}let c=await e.callWS({type:"home_3d/locate/ask",text:r,language:e.language}).catch(()=>null);if(c)return s("done",`\u201C${r}\u201D \u2013 ${c.text}`),c.rooms.length&&(!c.admins_only||e.user?.is_admin)&&this.showRooms(n,c.rooms),i&&t.speak(e,c.text,nn()),c.text;let u=this.moduleHost(e,n,t.SYNONYMS,p=>t.showTarget(p,n,a,g=>g.area_id?e.areas?.[g.area_id]?.name:null)),h=await zc(r,u);if(h){s("done",h.text?`\u201C${r}\u201D \u2013 ${h.text}`:`\u201C${r}\u201D`),this.directing.touch(Date.now()),h.highlight?.length&&this.viewer?.flashDevices(h.highlight);let p=h.focus,g=h.spoken??h.text??"";if(h.tour?.length){let _=i&&h.speak!==!1?v=>t.speak(e,v,nn()):null,m=h.spoken??h.text;return m&&_&&await _(m),this.runTour(h.tour,n,l,_),g}if(p?.roomId&&p.floorId)this.floorId!==p.floorId&&this.fire("floor-tap",{floorId:p.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:p.floorId,roomId:p.roomId}),60);else if(p?.floorId&&!p.entity&&!p.furnitureId)this.fire("floor-tap",{floorId:p.floorId});else if(p?.entity||p?.furnitureId){let _=l.get(p.entity??`furniture:${p.furnitureId}`);_&&this.goTo(_)}return h.text&&h.speak!==!1&&i&&t.speak(e,h.text,nn()),g}}return null}spokenDevices(e,n,t){let r=this.findIndex??=Do(e,n),i=new Map(n.floors.flatMap(u=>ke(u).map(h=>[h.id,h.name]))),s=[],a=[],l=new Map;for(let u of r)u.kind==="device"&&u.entity&&l.set(u.entity,u);let d=new Set;for(let u of n.floors){let h=ke(u);for(let p of u.furniture){if(Ip.has(p.type))continue;let g=this.furnitureLinks.get(p.id),_=g?.entity??g?.power??null,m=_??`furniture:${p.id}`,v=h.find(W=>W.points.length>=3&&K([p.x,p.z],W.points)),w=ge(e,p.type),f=[p.name,...p.aliases??[],w,_?G(e,_):null,...t[p.type]??[]].filter(W=>!!W),k=p.name||(_?G(e,_):w);s.push({id:m,entity:_,name:k,names:f,room:v?.name??"",camera:!!_&&C(_)==="camera"});let T=(p.type==="plant"||er(p.type))&&!!p.moisture&&p.moisture!=="none",A=lr(g?.entity?e.states[g.entity]:void 0,g?.power?ae(e.states[g.power]):null,typeof p.run_w=="number"&&p.run_w>0?p.run_w:10),M=V("household")&&typeof p.remaining=="string"&&p.remaining!=="none"&&!A?sr(e.states[p.remaining]):null;a.push({id:m,entity:_,name:k,names:f,room:v?.name??"",floorId:u.id,roomId:v?.id??null,power:g?.power??null,type:p.type,remaining:M,thirsty:T&&V("household")?rr(p,e):null}),_?d.add(_):l.set(m,{kind:"device",name:k,where:"",floorId:u.id,roomId:v?.id??null,entity:null,icon:null,x:p.x,z:p.z,y:Math.min(u.height-.3,Math.max(.5,p.h))})}}let c=new Map(n.floors.flatMap(u=>u.placements.map(h=>[h.entity_id,h])));for(let[u,h]of l){if(d.has(u)||u.startsWith("furniture:"))continue;let p=h.roomId&&i.get(h.roomId)||"",g=c.get(u),_=[g?.name,...g?.aliases??[],h.name].filter(m=>!!m);s.push({id:u,entity:u,name:h.name,names:_,room:p,camera:C(u)==="camera"}),a.push({id:u,entity:u,name:h.name,names:_,room:p,floorId:h.floorId,roomId:h.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(e,n){let t=[];for(let r of n.floors)for(let i of r.openings){let s=this.openingLinks?.get(i.id)?.lock;if(!s)continue;let a=this.openingSpot(n,i.id,!0);if(!a)continue;let l=e.states[s];t.push({id:s,floorId:r.id,roomId:i.room_id,x:a.x,z:a.z,y:Math.min(a.y+.35,1.5),icon:kt("lock"),name:G(e,s),text:l?de(e,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||q(l),glow:null,full:!0,fromFurniture:!1})}return t}openingSpot(e,n,t=!1){for(let r of e.floors){let i=r.openings.find(v=>v.id===n);if(!i)continue;let s=ol(i,r.rooms,r.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],d=a[(s.edge+1)%a.length],c=Math.hypot(d[0]-l[0],d[1]-l[1])||1,u=[(d[0]-l[0])/c,(d[1]-l[1])/c],p=Ie(a)>0?[-u[1],u[0]]:[u[1],-u[0]],g=i.offset;if(t){let v=u[0]*p[1]-u[1]*p[0]>0;g=i.offset-i.width/2+aa(i,i.hinge==="left"===v)}let[_,m]=_o(s.room,s.edge,g);return{floorId:r.id,x:_+p[0]*.2,z:m+p[1]*.2,y:Math.max(.5,i.sill+i.height/2),theta:Math.atan2(p[0],p[1])}}return null}async showRooms(e,n){let t=n.map(l=>({roomId:l,floorId:e.floors.find(d=>d.rooms.some(c=>c.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!t.length)return;let r=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let i=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};i?.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(d=>this.tourTimer=setTimeout(d,l));for(let[l,d]of t.entries()){if(r!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await a(150)),r!==this.tourToken))break;this.roomId!==d.roomId&&this.fire("room-tap",{floorId:d.floorId,roomId:d.roomId}),this.directing.touch(Date.now()),l<t.length-1&&await a(4e3)}i?.removeEventListener("pointerdown",s)}async runTour(e,n,t,r){let i=++this.tourToken;clearTimeout(this.tourTimer);let s=e.map(c=>{if(c.openingId){let h=this.openingSpot(n,c.openingId);return h?{...h,entity:null,say:c.say,inside:!0}:null}let u=t.get(c.entity??`furniture:${c.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:c.say,inside:!1}:null}).filter(c=>!!c).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a?.addEventListener("pointerdown",l,{once:!0});let d=c=>new Promise(u=>this.tourTimer=setTimeout(u,c));for(let c of s){if(i!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await d(150)),i!==this.tourToken)||(this.viewer?.focus(c.floorId,c.x,c.z,c.y,c.entity,c.inside?{radius:3.2,phi:1.05,theta:c.theta}:void 0),await d(900),i!==this.tourToken))break;let u=c.say&&r?await r(c.say):!1;if(i!==this.tourToken)break;await d(u?1200:2600)}a?.removeEventListener("pointerdown",l)}spokenOpenings(e,n){let t=[],r=a=>$(e,a);for(let a of n.floors){let l=new Map(ke(a).map(d=>[d.id,d.name]));for(let d of a.openings){let c=this.openingLinks?.get(d.id);if(!c)continue;let u=d.type==="garage"?"garage":d.type==="door"?"door":"window",h=Ue(e,c,d.type),p=h.open>.02||h.open2>.02||d.type==="garage"&&(h.cover??0)>.02,g=!p&&(h.tilt>.02||h.tilt2>.02);for(let _ of[c.contact,c.contact2,c.cover,c.tilt,c.tilt2])_&&_!=="none"&&t.push({id:d.id,entity:_,kind:u,name:r(`opening_${d.type}`),room:l.get(d.room_id)??"",floorId:a.id,roomId:d.room_id,open:p,tilted:g})}}let i=n.settings.roof?.windows??[],s=i.length?new Map(at(n).map(a=>[a.key,a])):null;for(let a of i){let l=gd(e,a),d=l.open>.02,c=!d&&l.tilt>.02,u=[a.window,a.contact,a.cover,a.tilt].filter(m=>!!m&&m!=="none"),h=u.map(m=>Ge(e,m)).filter(m=>!!m).map(m=>n.floors.flatMap(v=>v.rooms.filter(w=>w.area_id===m).map(w=>({floor:v,room:w})))).find(m=>m.length===1)?.[0],p=h?null:qi(n,s?.get(a.face),a),g=h?.floor??p?.floor??n.floors[n.floors.length-1],_=h?.room??(p?g?.rooms.find(m=>m.id===p.roomId):void 0);for(let m of u)t.push({id:a.id,entity:m,kind:"roof_window",name:a.name||r("roof_window"),room:_?.name??"",floorId:g?.id??"",roomId:_?.id??null,open:d,tilted:c})}return t}sceneHost(e,n){return this.moduleHost(e,n,{},()=>null)}moduleHost(e,n,t,r){let i=null,s=()=>i??=this.spokenDevices(e,n,t).spoken,a={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>s(),findDevice:l=>{let d=r(l);return d?.kind==="device"&&d.id?s().find(c=>c.id===d.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>this.mayEdit,updateBuilding:l=>{let d=this.building;if(!d||!this.hass||!this.mayEdit)return;let c=structuredClone(d);l(c),this.building=c,bn(this.hass,c).catch(u=>this.serviceFailed("home_3d/building/save",u))},callService:(l,d,c)=>this.hass?this.hass.callService(l,d,c):Promise.resolve(),newId:l=>la(l),waterLevel:(l,d)=>{let c=this.building?.floors.find(h=>h.id===l),u=c?.outdoor.find(h=>h.id===d);return!c||!u||u.type!=="pool"?null:{y:Nt(c,u),floorY:vn(c,u)}},groundAt:(l,d,c)=>{let u=this.building?.floors.find(h=>h.id===l);return u?Ve(u,d,c):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:Cr,openings:()=>this.spokenOpenings(e,n),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:s().find(d=>d.entity===l.id||d.power===l.powerEntity)?.name??G(e,l.id),watts:l.power})).sort((l,d)=>d.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,n),cars:()=>this.spokenCars(e,n),pools:()=>Ic(a),weather:()=>At(e,this.weatherEntityId??n.settings.weather_entity),listen:async l=>{try{return(await(await Dt()).listenOnce(e,l,nn())).trim()||null}catch{return null}},notify:l=>this.showNote(l),occupied:()=>this.occupiedRooms(e,n),speakers:()=>this.planSpeakers(e,n)};return a}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,n){let t=new Map;for(let r of this.lastPersons)r.roomId&&t.set(r.roomId,r);for(let r of n.floors)for(let i of r.rooms){if(t.has(i.id)||!i.area_id)continue;fe(e,i.area_id).some(a=>{let l=e.states[a];return a.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&t.set(i.id,{floorId:r.id,roomId:i.id})}return[...t.values()]}planSpeakers(e,n){let t=[],r=new Set;for(let i of n.floors){let s=(a,l)=>i.rooms.find(d=>d.points.length>=3&&K([a,l],d.points))?.id??null;for(let a of i.placements)!a.entity_id.startsWith("media_player.")||r.has(a.entity_id)||!e.states[a.entity_id]||(r.add(a.entity_id),t.push({entity:a.entity_id,name:G(e,a.entity_id),floorId:i.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of i.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||r.has(l)||!e.states[l]||(r.add(l),t.push({entity:l,name:G(e,l),floorId:i.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:ce(i,a)+a.h}))}}return t}roomSheets(e){let n=this.hass,t=this.building;if(!n||!t||this.ro||!Rt())return[];let r=t.floors.find(i=>i.rooms.some(s=>s.id===e));return r?vr(this.sceneHost(n,t),{floorId:r.id,roomId:e}).map(i=>({id:i.id,icon:i.icon,title:i.title})):[]}openRoomSheet(e,n){let t=this.building?.floors.find(r=>r.rooms.some(i=>i.id===e));this._sheet={id:n,floorId:t?.id??null,roomId:e}}currentSheet(e,n){let t=this._sheet;if(!t)return null;let r=this.sceneHost(e,n);return(t.roomId&&t.floorId?vr(r,{floorId:t.floorId,roomId:t.roomId}):yr(r)).find(s=>s.id===t.id)??null}renderSheet(){let e=this.hass,n=this.building;if(!e||!n||!this._sheet)return y;let t=this.currentSheet(e,n);if(!t)return y;let r=c=>$(e,c),i=this._sheet.roomId?n.floors.flatMap(c=>c.rooms).find(c=>c.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async c=>{s();try{await c()}catch(u){console.warn("Home 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&t.input&&a(()=>t.input.onSubmit(u))},d=async()=>{let c=this.renderRoot.querySelector(".fp3d-sheet-input");if(!c)return;c.placeholder=r("sheet_listening");let h=await this.sceneHost(e,n).listen?.(()=>c.placeholder=r("sheet_listening"));c.placeholder=t.input?.placeholder??"",h?c.value=h:this.showNote(r("sheet_mic_failed"))};return b`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${t.title}>
        <header>
          <b><span aria-hidden="true">${t.icon}</span> ${t.title}${i?` \xB7 ${i.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${r("close")} @click=${s}>✕</button>
        </header>
        ${t.choice?b`<div class="fp3d-sheet-choice">
              ${t.choice.options.map(c=>b`<button class="fp3d-chip" aria-pressed=${c.id===t.choice.value} @click=${()=>{t.choice.set(c.id),this.requestUpdate()}}>${c.label}</button>`)}
            </div>`:y}
        ${t.chips?.length?b`<div class="fp3d-sheet-chips">${t.chips.map(c=>b`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>c.onTap())}}>${c.label}</button>`)}</div>`:y}
        ${t.input?b`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${t.input.placeholder} @keydown=${c=>c.key==="Enter"&&l()} />
              ${t.input.mic?b`<button class="fp3d-btn fp3d-sheet-mic" title=${r("sheet_mic")} aria-label=${r("sheet_mic")} @click=${()=>{d()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:y}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${t.input.button}</button>
            </div>`:y}
        ${t.lines?.length?b`<div class="fp3d-sheet-lines">${t.lines.map(c=>b`<p>${c}</p>`)}</div>`:y}
        ${this.mayEdit&&kr().length?b`<button class="fp3d-sheet-gear" @click=${()=>{s(),this._settingsOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-set-module")?.scrollIntoView({block:"start"}))}}>⚙ ${r("view_settings")}</button>`:y}
      </div>`}viewPlan(e){let n=new Date(this.replay?.t??Date.now()),t=this.hass?Fr(e,this.hass.states,n).join("|"):"";return(this.shownPlan?.from!==e||this.shownPlan.hidden!==t)&&(this.shownPlan={from:e,hidden:t,plan:t&&this.hass?Jc(e,this.hass.states,n):e}),this.shownPlan.plan}get mayEdit(){return(this.canEdit??!!this.hass?.user?.is_admin)&&!this.ro}setPlanSettings(e){let n=this.building;if(!n||!this.hass||!this.mayEdit)return;let t=structuredClone(n);Object.assign(t.settings,e),this.building=t,bn(this.hass,t).catch(r=>this.serviceFailed("home_3d/building/save",r))}renderSettings(){let e=this.hass,n=this.building;if(!e||!n||!this._settingsOpen)return y;let t=c=>$(e,c),r=this.mayEdit,i=n.settings,s=(c,u,h,p)=>b`<label class="fp3d-set-check" title=${p?t(p):""}
        ><input type="checkbox" .checked=${u} ?disabled=${!r} @change=${g=>this.setPlanSettings(h(g.target.checked))} /> ${t(c)}</label
      >`,a=this.sceneHost(e,n),l=Je(),d=kr().map(c=>{let u=Rc(c,a);if(!u.length||u[0].kind==="heading")return u;let h=l.find(g=>g.id===c);return[{kind:"heading",text:h?Ns(h,e.language??"en").replace(/^(Modul|Module):\s*/i,""):c},...u]}).filter(c=>c.length);return b`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${t("view_settings")}>
        <header>
          <b>⚙ ${t("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${t("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${r?y:b`<p class="fp3d-set-note">${t("view_settings_admin")}</p>`}
        <h4>${t("view_settings_look")}</h4>
        ${s("sun_shadow",i.sun_shadow!==!1,c=>({sun_shadow:c}),"sun_shadow_hint")}
        ${s("window_glow",i.window_glow!==!1,c=>({window_glow:c}),"window_glow_hint")}
        ${s("sun_patches",i.sun_patches!==!1,c=>({sun_patches:c}))}
        <h4>${t("view_settings_alerts")}</h4>
        ${s("rain_warning",i.rain_warning!==!1,c=>({rain_warning:c}))}
        ${s("alert_unavailable",!!i.alert_unavailable,c=>({alert_unavailable:c}))}
        ${s("alert_names",i.alert_names!==!1,c=>({alert_names:c}))}
        ${d.map(c=>b`<div class="fp3d-set-module">${c.map(u=>this.renderViewField(e,u,r))}</div>`)}
        <p class="fp3d-set-note">${t("view_settings_more")}</p>
      </div>`}renderViewField(e,n,t){switch(n.kind){case"heading":return b`<h4>${n.text}</h4>`;case"text":return b`<p class="fp3d-set-note">${n.text}</p>`;case"check":return b`<label class="fp3d-set-check"><input type="checkbox" .checked=${n.value} ?disabled=${!t} @change=${r=>n.set(r.target.checked)} /> ${n.label}</label>`;case"select":return b`<label class="fp3d-set-field"
          >${n.label}
          <select ?disabled=${!t} @change=${r=>n.set(r.target.value)}>
            ${n.options.map(r=>b`<option value=${r.id} ?selected=${r.id===n.value}>${r.label}</option>`)}
          </select></label
        >`;case"entity":{let r=Object.keys(e.states).filter(i=>n.filter(i)).sort((i,s)=>G(e,i).localeCompare(G(e,s)));return b`<label class="fp3d-set-field"
          >${n.label}
          <select ?disabled=${!t} @change=${i=>{let s=i.target.value;n.set(s===""?null:s)}}>
            <option value="" ?selected=${!n.value}>${n.auto?$(e,"entity_auto",{name:G(e,n.auto)}):"\u2014"}</option>
            ${r.map(i=>b`<option value=${i} ?selected=${i===n.value}>${G(e,i)}</option>`)}
          </select></label
        >`}case"lines":return yl(n.value,!t,{label:n.label,placeholder:n.placeholder??$(e,"lines_new"),add:$(e,"lines_add"),remove:$(e,"delete")},r=>n.set(r));case"button":return b`<button class="fp3d-btn ${n.primary?"fp3d-primary":""}" ?disabled=${!t} title=${n.title??""} @click=${()=>n.onTap()}>${n.label}</button>`}}renderNote(){return this._note?b`<div class="fp3d-note" role="status">${this._note}</div>`:y}spokenAlerts(e,n){let t=new Map(n.floors.flatMap(r=>ke(r).map(i=>[i.id,i.name])));return this._alerts.map(r=>({kind:r.kind,entity:r.entity,name:G(e,r.entity),...r.text?{text:r.text}:{},room:r.roomId?t.get(r.roomId)??null:null,floorId:r.floorId,roomId:r.roomId}))}spokenCars(e,n){if(!V("auto_pro"))return[];let t=[];for(let r of n.floors)for(let i of r.furniture){if(i.type!=="parking"||!i.car)continue;let s=tn(e,i),a=$n(e,i),l=a.entities.tracker?e.states[a.entities.tracker]:void 0,d=!!s&&!(l&&!Ro.has(l.state.toLowerCase()));t.push({name:i.name||(s?ge(e,s):ge(e,"car")),spot:i.id,floorId:r.id,present:d,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return t}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return y;let n=e.kind==="light"&&e.value<=0;return b`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${G(this.hass,e.entity)}</span>
      <b>${n?$(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let n=this.viewer,t=this.building;if(!n||!t||this.ro)return;if(!V("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let r=t.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:n.getView()},this.watchCameras(!0);let i=this.floorId===r?0:300;i&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},i)}endThrough(){let e=this._through;e&&(this._through=null,this.live?.id===e.entity&&(this.live=null),this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?y:b`<div class="fp3d-pro" role="dialog">
      <b>${$(this.hass,"pro_title")}</b>
      <span>${$(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${$(this.hass,"pro_locked")}</span>
      <div>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${$(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${$(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return y;let e=this.hass,n=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!V("camera_cockpit"))return b`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${$(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${n}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${$(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let t=[...new Set(this.building.floors.flatMap(c=>c.placements.map(u=>u.entity_id)).filter(c=>C(c)==="camera"))];this.watchCameras(!0);let r=c=>{let u=e.states[c],h=u?.attributes.entity_picture;return h&&u&&!q(u)?h.startsWith("data:")?h:`${h}${h.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},i=c=>{let u=e.states[c];return b`${G(e,c)}${u?.state==="recording"?b` <b>● ${$(e,"state_recording")}</b>`:y}`},s=this._wallBig&&t.includes(this._wallBig)?this._wallBig:null;if(s){let c=r(s),u=this.liveFor(s),h=()=>{this.throughWall=!0,n(),this.lookThrough(s)};return b`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${$(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${i(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${h}>${$(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(c?b`<img src=${c} alt="" />`:b`<div class="fp3d-wall-none">${$(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:d}=Qc(t.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return b`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${$(e,"camera_wall_title")} · ${t.length} <span class="fp3d-still">${$(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${d}px); grid-auto-rows: ${Math.round(d*9/16)}px">
        ${t.map(c=>{let u=r(c),h=qe(e,c).some(p=>e.states[p]?.state==="on");return b`<button class="fp3d-wall-cam ${h?"fp3d-wall-seen":""}" title=${$(e,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${u?b`<img src=${u} alt="" />`:b`<div class="fp3d-wall-none">${$(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${i(c)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let n={id:e,el:null,failed:!1};this.live=n;let t=window;t.loadCardHelpers?t.loadCardHelpers().then(r=>{if(this.live!==n)return;let i=r.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});i.hass=this.hass,n.el=i,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return y;let n=this.hass.states[e.entity],t=n?.attributes.entity_picture,r=t&&!q(n)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,i=this.building?.settings.director?.live?this.liveFor(e.entity):null;return b`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?b`<div class="fp3d-through-img fp3d-through-live">${i}</div>`:r?b`<img class="fp3d-through-img" src=${r} alt="" />`:y}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${G(this.hass,e.entity)}</span>
        <span class="fp3d-still">${i?"\u25CF Live":$(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${$(this.hass,"through_blend")}
          @input=${s=>this._blend=Number(s.target.value)/100}
        />
        <button class="fp3d-chip" title=${$(this.hass,"through_full_hint")} @click=${()=>this.throughFull(e.entity)}>⛶ ${$(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${$(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(e){let n=this.renderRoot.querySelector(".fp3d-through-img");n&&typeof n.requestFullscreen=="function"?n.requestFullscreen().catch(()=>xe(this,e)):xe(this,e)}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return y;let n=this.renderRoot.querySelector(".fp3d-stage"),t=n?.clientWidth??800,r=n?.clientHeight??600,i=Math.max(8,Math.min(t-240,e.x-116)),s=Math.max(8,Math.min(r-360,e.y-170));return b`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        .presets=${V("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${V("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){let n=[];for(let t of this.scene){if(t.kind!=="marker")continue;let r=e.floors.find(c=>c.id===t.floorId),i=t.furnitureId?r?.furniture.find(c=>c.id===t.furnitureId):void 0;if(!r||!i&&!t.at)continue;let[s,a]=i?[i.x,i.z]:t.at,l=Lc(t.path),d=Wc(t.emoji);n.push({id:`module:${t.id}`,floorId:r.id,roomId:r.rooms.find(c=>c.points.length>=3&&K([s,a],c.points))?.id??null,x:s,z:a,y:t.y??(i?ce(r,i)+i.h*.6:1.2),icon:d?`<span style="font-size:18px;line-height:1" aria-hidden="true">${d}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:t.name,text:t.text??"",active:!!t.active&&!this.dimmed,unavailable:!1,glow:t.color&&t.active&&!this.dimmed?{color:t.color,level:1}:null,pin:!0,full:!0,...i?{furnitureId:i.id}:{}})}return n}openModuleCard(e){let n=this.scene.find(i=>i.kind==="marker"&&i.id===e);if(!n)return;if(n.sheet){this.openRoomSheet(n.sheet.roomId,n.sheet.id);return}n.card&&(this.mediaFolded.delete(n.card),this.cardPing=n.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let t=this.building?.floors.find(i=>i.id===n.floorId),r=t?.furniture.find(i=>i.id===n.furnitureId);t&&r&&this.viewer?.focus(t.id,r.x,r.z,ce(t,r)+r.h*.6,`module:${n.id}`)}onDeviceTap(e,n=0,t=0){let r=this.ro?void 0:this.actionOwners.get(e);if(!r)return this.defaultTap(e,n,t);let i=xo(r,"double_tap");this.taps.tap(e,!!i,()=>{let s=xo(r,"tap");s?this.runOwnAction(s,r,n,t):this.defaultTap(e,n,t)},()=>i&&this.runOwnAction(i,r,n,t))}runOwnAction(e,n,t,r){let i=this.hass;i&&xl(e,n.entity,{callService:(s,a,l)=>i.callService(s,a,l),moreInfo:s=>xe(this,s),camera:s=>this._menu={entity:s,x:t,y:r},navigate:s=>{history.pushState(null,"",s),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))},openUrl:s=>{window.open(s,"_blank","noopener,noreferrer")},confirm:s=>this.ask(s??$(i,"action_confirm_default",{name:n.entity?G(i,n.entity):$(i,"action_this_item")}))}).catch(s=>this.showNote($(i,"action_failed",{error:s instanceof Error?s.message:String(s)})))}ask(e){return this._ask?.answer(!1),new Promise(n=>{this._ask={text:e,answer:t=>{this._ask=null,n(t)}}})}renderAsk(){let e=this._ask;if(!e)return y;let n=t=>$(this.hass,t);return b`<div class="fp3d-sheet-backdrop" @click=${()=>e.answer(!1)}></div>
      <div class="fp3d-sheet fp3d-ask" role="alertdialog" aria-modal="true" aria-label=${n("action_confirm_title")} @keydown=${t=>t.key==="Escape"&&e.answer(!1)}>
        <p class="fp3d-ask-text">${e.text}</p>
        <div class="fp3d-ask-buttons">
          <button class="fp3d-btn" @click=${()=>e.answer(!1)}>${n("cancel")}</button>
          <button class="fp3d-btn fp3d-primary" autofocus @click=${()=>e.answer(!0)}>${n("action_confirm_ok")}</button>
        </div>
      </div>`}defaultTap(e,n=0,t=0){if(e.startsWith("item:")||e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),n,t,!1);if(e.startsWith("gangs:")){let i=e.slice(6),s=this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===i);if(!s)return;let a=to(s);if(a.length===1)return this.onDeviceTap(a[0],n,t);if(a.length>1){this._gangMenu={furnitureId:i,x:n,y:t};return}let l=yn(s).find(d=>d.power&&d.power!=="none")?.power;l&&(this.ro?this.showInfo(l,n,t):xe(this,l));return}if(e.startsWith("hh:")){let[i,s]=e.slice(3).split("#");this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===s&&l.type==="waste_bin")?(this._binInfo={furnitureId:s,x:n,y:t},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(i,n,t):xe(this,i);return}if(this.ro){let i=this.building,s=i?i.energy.grid??en(i,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null,a=e==="grid"?s:e.startsWith("detect:")?e.slice(7):e;a&&this.showInfo(a,n,t);return}if(e==="grid"){let i=this.building,s=i?i.energy.grid??en(i,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&xe(this,s);return}if(e.startsWith("detect:")){xe(this,e.slice(7));return}let r=C(e);if(r==="cover"||r==="camera"){this._menu={entity:e,x:n,y:t};return}if(r&&ya.has(r)){if(this.confirmSet.has(e)&&!confirm($(this.hass,"confirm_switch",{name:G(this.hass,e)})))return;mo(this.hass,e)}else xe(this,e)}onOpeningTap(e,n,t,r){let i=this.openingLinks?.get(e);if(!i||!this.hass)return;if(i.lock&&!i.cover){this.ro?this.showInfo(i.lock,n,t):this._menu={entity:i.lock,x:n,y:t,doorLock:!0};return}let s=i.cover;if(!s)return;if(this.ro){this.showInfo(i.contact??s,n,t);return}if(r){xe(this,s);return}let a=this.hass.states[s];if(!a||q(a)){xe(this,s);return}if(this.confirmSet.has(s)&&!confirm($(this.hass,"confirm_switch",{name:G(this.hass,s)})))return;let[l]=s.split(".");this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:s})}effectiveTheme(){return this.theme!=="auto"?this.theme:this.hass?.states["sun.sun"]?.state==="above_horizon"?"day":"neon"}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("home3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("home3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!V("energy_pro")||!e||this.roomId||!this.showEnergy)return y;let n=r=>$(this.hass,r),t=[];if(e.consumption!==null&&t.push({cls:"total",label:n("energy_consumption"),value:se(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;t.push({cls:r?"export":"grid",label:n(r?"energy_grid_export":"energy_grid_import"),value:se(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&t.push({cls:"solar",label:n("energy_solar"),value:se(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?se(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);t.push({cls:"battery",label:n("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&t.push({cls:"tariff",label:n("energy_tariff"),value:`${ie(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),b`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?y:t.map(r=>b`<div class="fp3d-energy-item fp3d-energy-${r.cls}"><span>${r.label}</span><b>${r.value}</b></div>`)}
      ${this.flows!==null?y:b`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${n("flows_hint")} (${n(this._flows?"flow_on":"flow_off")})`} aria-label=${n("flows")} @click=${()=>this.toggleFlows()}>
        <span>${n("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?y:b`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${n("holos_hint")} aria-label=${n("holos")} @click=${()=>this.toggleHolos()}>
        <span>${n("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return y;let e=To[this.heatMode],n=this.heatMode==="temperature",t=n?Gt(this.hass,e.stops[0][0]):e.stops[0][0],r=n?Gt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=n?Fe(this.hass):e.unit,s=a=>$(this.hass,a);return b`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${wc(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${ie(this.hass,t,0)} ${i}</span><span>${ie(this.hass,r,0)} ${i}</span></span>
      ${this.heatValues.size?y:b`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){let n=e.config?.latitude,t=e.config?.longitude;if(typeof n!="number"||typeof t!="number")return null;let r=`${new Date().toDateString()},${n},${t}`;return this.sunPathKey!==r&&(this.sunPathKey=r,this.sunPathCache=ud(Date.now(),n,t)),this.sunPathCache}skyColor(){let e=Hn[this.effectiveTheme()]??Hn.neon,n=this._sky;return e.night[0].map((t,r)=>Math.round(t+(e.day[0][r]-t)*n))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let n=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),n()},5e3+Math.random()*9e3)};n()}render(){let e=this._sky,n=(a,l)=>`rgb(${a.map((d,c)=>Math.round(d+(l[c]-d)*e)).join(",")})`,t=Hn[this.effectiveTheme()]??Hn.neon,r=td(this.building?.settings.backdrop),s=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${n(t.night[0],t.day[0])};--fp3d-ground:${n(t.night[1],t.day[1])}${r?`;background:${r}`:""}`;return b`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${s}
    >
      ${this._error?b`<p class="fp3d-error">${this._error}</p>`:y} ${this.clean?y:this.renderEnergy()} ${this.renderHologram()} ${this.clean?y:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?y:b`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?y:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderAsk()} ${this.renderSettings()} ${this.renderNote()}
      ${this.clean?y:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this.pivotMark&&!this._walk?b`<span class="fp3d-pivot" aria-hidden="true"></span>`:y}
      ${this._micProbe&&this.hass?b`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,Vo())}></fp3d-mic-probe>`:y}
      ${this.showStats&&this._stats?b`<span class="fp3d-stats"
            ><b>${this._stats.fps?$(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):$(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?b`(${this._stats.busy.map(a=>$(this.hass,`stats_busy_${a}`)).join(", ")})`:y} ·
            ${$(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${$(this.hass,this._stats.low?"stats_low":"stats_full",{r:ie(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${ie(this.hass,this.syncMs,1)} ms`:""}</span
          >`:y}
    </div>`}static styles=[Oe,lt,ze`
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
        background: rgba(10, 18, 34, 0.72);
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
      .fp3d-alert-water,
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
        background: rgba(8, 16, 34, 0.7);
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
        background: rgba(8, 16, 34, 0.7);
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
        background: rgba(8, 16, 34, 0.85);
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
      .fp3d-ask {
        z-index: 9;
        width: min(360px, calc(100% - 24px));
      }
      .fp3d-ask-text {
        margin: 0;
        font-size: 1rem;
        line-height: 1.4;
        white-space: pre-line;
      }
      .fp3d-ask-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }
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
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
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
        background: rgba(10, 16, 32, 0.72);
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Vr);function Rp(o,e){let n=e.attributes.current_temperature,t=typeof n=="number"&&Number.isFinite(n)?`${ie(o,Math.round(n))} \xB0C`:"",r=!["off","unavailable","unknown"].includes(e.state);return{text:[de(o,e),t].filter(Boolean).join(" \xB7 "),on:r}}function se(o,e){return Math.abs(e)>=1e3?`${ie(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function _d(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var Ip=new Set(["rug","stairwell","grid_point","worktop"]);function Fp(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var Kr;function bd(){let o=new URL("./home-3d-locate.js?v=3a6aad824e6f",new URL(import.meta.url)).href;return Kr??=import(o).catch(e=>{throw Kr=void 0,e}),Kr}var Dp=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function wd(o){let e=document.createElement("style");e.textContent=Dp;let n=document.createElement("div");n.className="fp3d-loclab",document.body.append(e,n);let t=null,r="",i=!0,s=async(d,c={})=>{let u=o().hass;if(u){try{t=await u.callWS({type:"home_3d/locate/rec",action:d,...c}),r=""}catch(h){r=h.message??String(h)}a()}},a=()=>{let d=o().building,c=t,u=c?.mark?.room??null,h=`<h4 data-a="toggle"><span>\u{1F4E1} Ortung \xB7 Aufnahme (Labor)</span><span>${i?"\u25BE":"\u25B8"}</span></h4>`;if(!i){n.innerHTML=h;return}let p=(c?.devices??[]).map(_=>{let m=_.t?Math.round(Date.now()/1e3-_.t):null;return`<div>\u231A ${ht(_.title)}: ${m===null?"<small>noch nicht geh\xF6rt</small>":`${_.rssi} dBm \xB7 ${ht(_.scanner??"")} <small>vor ${m} s</small>`}</div>`}).join(""),g=(d?.floors??[]).map(_=>`<div class="fl">${ht(_.name)}</div>`+_.rooms.map(m=>`<button data-room="${ht(m.id)}" data-name="${ht(m.name)}" class="${u===m.id?"on":""}">${ht(m.name)}</button>`).join("")).join("");n.innerHTML=`${h}
      <div><button data-a="setup">\u2699 Ortung einrichten</button></div>
      <div>${c?.running?`<button class="rec" data-a="stop">\u25A0 Stopp</button> <small>${Math.floor(c.seconds/60)}:${String(c.seconds%60).padStart(2,"0")} \xB7 ${c.lines} Zeilen</small>`:'<button data-a="start">\u25CF Aufnahme starten</button>'}</div>
      ${r?`<div style="color:#ff8fa3">${ht(r)}</div>`:""}
      ${p||(c?"<div><small>Keine iPhone/Watch-Schl\xFCssel (Private BLE Device) in HA \u2013 alles wird trotzdem aufgezeichnet.</small></div>":"")}
      ${c?.mark?`<div style="margin-top:6px">\u23F1 seit <b>${Hp(Date.now()/1e3-c.mark.t)}</b> in <b>${ht(c.mark.name)}</b> ${Date.now()/1e3-c.mark.t>=120?"\u2713 2 Min. geschafft":""}</div>`:""}
      <div class="fl">Ich bin jetzt in \u2026</div>
      <button data-room="" class="${u?"":"on"}">\u{1F6B6} unterwegs / nirgends</button>
      ${g}`};n.addEventListener("click",d=>{let c=d.target.closest("button,h4");if(!c)return;let u=c.dataset.a;if(u==="toggle")i=!i,a();else if(u==="start")s("start",{note:"lab walk"});else if(u==="stop")s("stop");else if(u==="setup"){let{hass:h,building:p}=o();h&&p&&bd().then(g=>g.openLocateSetup(h,p,()=>o().hass))}else c.dataset.room!==void 0&&s("mark",c.dataset.room?{room:c.dataset.room,name:c.dataset.name}:{room:null})}),s("status");let l=window.setInterval(()=>{s("status")},1e3);return()=>{window.clearInterval(l),n.remove(),e.remove()}}function Hp(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function ht(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var Gr;function Wp(){let o=new URL("./home-3d-timetravel.js?v=713905a9a1c0",new URL(import.meta.url)).href;return Gr??=import(o).catch(e=>{throw Gr=void 0,e}),Gr}var on=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),Wp().then(n=>{this.starting&&(this.starting=!1,this.session=n.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},n=>{this.starting=!1,console.error("Home 3D: time travel failed to load",n),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};var Lp={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},Q={get(o){try{return localStorage.getItem(`home3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`home3d.${o}`,e)}catch{}}},Ur=class extends Me{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};data=new Kt(this);locateLab=null;tt=new on(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=Q.get("walls")==="cut"?"cut":"auto",this._explode=Q.get("explode")!=="0",this._keepRoof=Q.get("roof")==="1";let e=Q.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=Q.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let n=Q.get("markers");this._markers=n==="none"||n==="all"||n==="room"?n:"important";let t=Q.get("pinSize");this._pinSize=t==="small"||t==="large"?t:"normal";let r=Q.get("heat");this._heat=r==="temperature"||r==="humidity"||r==="co2"||r==="values"?r:"none";let i=Q.get("theme");this._theme=i==="auto"||i&&_r.includes(i)?i:"neon";let s=Q.get("clock");this._clock=s==="tl"||s==="tr"||s==="bl"||s==="br"?s:"off";let a=Q.get("accent");this._accent=a&&/^#[0-9a-f]{6}$/i.test(a)?a:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let l=Q.get("floor_stack");this._floorStack=l==="stacked"||l==="single"?l:"dim",this._roomNames=Q.get("room_names")!=="0",this._controlsRight=Q.get("controls")==="right",this._keepView=Q.get("keep_view")==="1",this._angleLock=Q.get("angle_lock")==="1",this._trail=Q.get("trail")==="1",this._cameraWall=!1,this._clean=Q.get("clean")==="1",this._navWrap=Q.get("nav_wrap")==="1",this._optsOpen=!1,this._pinHover=!1,this._weather=Q.get("weather")!=="0",this._director=Br(),this._micProbe=!1,this._voiceHere=Hr(),this._screen=Wr()}t(e,n){return $(this.hass,e,n)}willUpdate(e){e.has("hass")&&this.hass&&(this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)),e.has("hass")&&this.hass&&!qt(this.hass.language)&&lo(this.hass.language).then(()=>this.requestUpdate());let n=this.data.building;n&&this._floorId&&!n.floors.some(t=>t.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get canEdit(){return this.data.canEdit}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:n,roomId:t}=e.detail;if((this.data.building?.floors.length??0)>1&&n&&this._floorId!==n){this._floorId=n,this._roomId=null;return}t&&(this._roomId=t===this._roomId?null:t)}setWallMode(e){this._wallMode=e,Q.set("walls",e)}setKeepRoof(e){this._keepRoof=e,Q.set("roof",e?"1":"0")}setExplode(e){this._explode=e,Q.set("explode",e?"1":"0")}setQuality(e){this._quality=e,Q.set("quality",e)}editFurniture(e,n){let t=this.data.building;if(!t)return;let r=structuredClone(t);for(let i of r.floors){let s=i.furniture.find(a=>a.id===e);s&&n(s,i)}this.data.edit(r)}editDevice(e,n){let t=this.data.building;if(!t)return;let r=structuredClone(t);for(let i of r.floors){let s=i.placements.find(a=>a.entity_id===e);s&&n(s,i)}this.data.edit(r)}moveDevice(e){let{id:n,x:t,z:r}=e.detail;this.editDevice(n,(i,s)=>{let[a,l]=Lr(s,i.x,i.z,t,r);Object.assign(i,{x:a,z:l})})}turnStep(){return C(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,n=>n.rotation=(((n.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,n=this.data.building;if(!e||!n)return;let t=structuredClone(n);for(let r of t.floors)r.placements=r.placements.filter(i=>i.entity_id!==e);this.data.edit(t),this._selDevice=null}renderDeviceFields(e){let t=this.data.building?.floors.find(u=>u.placements.some(h=>h.entity_id===e)),r=t?.placements.find(u=>u.entity_id===e);if(!t||!r)return y;let i=C(e),s=i==="light",a=i==="camera",l=r.mount==="ceiling",d=i?Ut(i,t.height,s||a?r.mount??(a?"wall":"ceiling"):null):1,c=(u,h,p,g,_,m)=>b`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${p}
          min=${g}
          max=${_}
          .value=${String(Math.round(h*100)/100)}
          @change=${v=>{let w=parseFloat(v.target.value.replace(",","."));Number.isFinite(w)&&m(Math.min(_,Math.max(g,w)))}}
        />
      </label>`;return b`${s?b`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,h=>Object.assign(h,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>b`<option value=${u} ?selected=${u===(r.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:y}
      ${a?b`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,h=>Object.assign(h,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${c(this.t("camera_fov_short"),r.fov??(l?360:90),5,10,360,u=>this.editDevice(e,h=>h.fov=u))}
            ${c(this.t("camera_reach_short"),r.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,h=>h.reach=u))}
            ${c(this.t("camera_tilt_short"),r.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,h=>h.tilt=u))}`:y}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((r.y??d)*100)/100)}
          @change=${u=>{let h=parseFloat(u.target.value.replace(",","."));Number.isFinite(h)&&h>=0&&this.editDevice(e,p=>p.y=Math.round(h*1e3)/1e3)}}
        />
      </label>
      ${r.y!==null?b`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:y}`}furnitureName(e){let n=this.data.building?.floors.flatMap(t=>t.furniture).find(t=>t.id===e);return n?ge(this.hass,n.type):""}moveFurniture(e){let{id:n,x:t,z:r}=e.detail,i=this.data.building?.settings.wall_interior??.12;this.editFurniture(n,(s,a)=>{let[l,d]=Lr(a,s.x,s.z,t,r);Object.assign(s,{x:l,z:d});let c=id(a,s,i);c&&Object.assign(s,c)})}renderSizeFields(e){let n=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!n)return y;let t=as(this.hass,this.data.building?.settings.units)==="imperial",r=l=>t?ls(l):String(Math.round(l*100)/100),i=l=>t?cs(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,d)=>b`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${d}
      <input
        type=${t?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${r(n[l])}
        @change=${c=>{let u=i(c.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,h=>h[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(d=>d.id===e));return b`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&ia(n)?b`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${t?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${r(n.mount_y??ce(a,n))}
              @change=${l=>{let d=i(l.target.value)??NaN;Number.isFinite(d)&&d>=0&&this.editFurniture(e,c=>c.mount_y=Math.round(d*1e3)/1e3)}}
          /></label>
          ${n.mount_y!=null?b`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:y}`:y}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,n=>n.rotation=((n.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,n=this.data.building;if(!e||!n)return;let t=structuredClone(n);for(let r of t.floors)r.furniture=r.furniture.filter(i=>i.id!==e);this.data.edit(t),this._selFurniture=null}rememberStartView(e=!1){let n=this.data.building;if(!n)return;let t=e?null:this.view3d()?.currentView();!e&&!t||this.data.edit({...n,settings:{...n.settings,start_view:t??null}})}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let n=this.view3d(),t=this.data.building;if(!(!n||!t||!this.hass)){if(!V("time_travel")){n.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:t,spec:n.historyEntities(),quality:this._quality,at:e,t:(r,i)=>$(this.hass,r,i)})}}updated(){if(!this.locateLab&&this.hass?.user?.is_admin&&this.data.building&&Hi()&&(this.locateLab=wd(()=>({hass:this.hass,building:this.data.building}))),this.ttLinked||!this.data.building||!Ot()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&V("time_travel")&&this.toggleTimeTravel(e)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop(),this.locateLab?.(),this.locateLab=null}render(){if(this.hass&&!qt(this.hass.language))return y;let e=this.data.building,n=this.data.saveState;return b`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?b`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,Vo())}></fp3d-mic-probe>`:y}
        ${this._clean&&this._mode==="view"?y:b`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Home 3D</h1>
          ${this.canEdit?b`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`:y}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(t=>t.rooms.length)?b`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(t=>b`<button aria-pressed=${this._quality===t} @click=${()=>this.setQuality(t)}>${this.t(`quality_${t}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${[..._r,"auto"].map(t=>b`<button
                      aria-pressed=${this._theme===t}
                      @click=${()=>{this._theme=t,Q.set("theme",t)}}
                    >
                      ${this.t(`theme_${t}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${t=>{this._accent=t.target.value,Q.set("accent",this._accent)}}
                  />
                  ${this._accent?b`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,Q.set("accent","")}}
                      >
                        ↺
                      </button>`:y}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(t=>b`<button aria-pressed=${this._clock===t} title=${this.t(`clock_${t}`)} aria-label=${this.t(`clock_${t}`)} @click=${()=>{this._clock=t,Q.set("clock",t)}}>
                      ${t==="off"?this.t("clock_off"):Lp[t]}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(t=>b`<button
                      aria-pressed=${this._markers===t}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=t,Q.set("markers",t)}}
                    >
                      ${this.t(`markers_${t}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(t=>b`<button
                      aria-pressed=${this._pinSize===t}
                      @click=${()=>{this._pinSize=t,Q.set("pinSize",t)}}
                    >
                      ${this.t(`pin_size_${t}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(t=>b`<button
                      aria-pressed=${this._controlsRight===t}
                      title=${this.t(t?"controls_right":"controls_left")}
                      aria-label=${this.t(t?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=t,Q.set("controls",t?"right":"left")}}
                    >
                      ${t?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.canEdit?b`<button
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
                      ${this.data.building?.settings.start_view?b`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:y}`:y}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,Q.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,Q.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,Q.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:y}
          ${this._mode==="editor"&&n!=="idle"?b`<span class="fp3d-save fp3d-save-${n}">${this.t(n==="saving"?"saving":n==="saved"?"saved":"save_error")}</span>`:y}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?y:this.renderNotices()}
        ${this.data.error&&!e?b`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:y}
        ${!e&&!this.data.error?b`<p class="fp3d-message">${this.t("loading")}</p>`:y}
        ${e?this._mode==="editor"&&this.canEdit?this.renderEditor(e):this._mode==="extensions"&&this.canEdit?this.renderExtensions():this.renderView(e):y}
      </div>
    `}renderNotices(){let e=this.data,n=[];if(e.needsRestart&&(e.versionGap==="frontend"?n.push(b`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):n.push(b`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&n.push(b`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.canEdit){let t=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);n.push(b`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:t})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return n.length?b`<div class="fp3d-notices">${n}</div>`:y}renderExtensions(){return this._editorReady?b`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .canEdit=${this.data.canEdit}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`:(wi().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),b`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?b`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .canEdit=${this.data.canEdit}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=Br()}
      @voice-here=${()=>{this._voiceHere=Hr(),this._screen=Wr()}}
      @mic-probe=${()=>Dt().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${n=>this.data.edit(n.detail.building)}
    ></fp3d-editor>`:(wi().then(()=>this._editorReady=!0,n=>this.data.error=String(n)),b`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let n=e.currentTarget;n.scrollWidth<=n.clientWidth||(n.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(i=>i.rooms.length))return b`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:y}
      </div>`;let n=e.floors.find(i=>i.id===this._floorId),t=n?[n]:e.floors,r=this.tt.active;return b`
      ${this._clean?y:b`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?b`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(i=>b`<button
                  class="fp3d-chip"
                  aria-pressed=${i.id===this._floorId}
                  @click=${()=>{this._floorId=i.id,this._roomId=null}}
                >
                  ${i.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:y}
        ${t.flatMap(i=>[t.length>1&&ke(i).some(s=>s.name.trim())?b`<span class="fp3d-nav-floor">${i.name}</span>`:y,...ke(i).filter((s,a,l)=>s.name.trim()&&!(s.outdoor&&l.findIndex(d=>d.outdoor&&d.area_id===s.area_id&&d.name===s.name)<a)).map(s=>b`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${s.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=i.id),this._roomId=s.id===this._roomId?null:s.id}}
            >
              ${s.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,Q.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${r?"fp3d-tt":""}">
        <fp3d-view3d
          class="fp3d-body"
          .canEdit=${this.data.canEdit}
          .pivotMark=${this._pinHover}
          .hass=${this.tt.hass(this.hass)}
          .replay=${this.tt.session?.replay??null}
          .building=${e}
          .packs=${this.data.packs}
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
          @clean-toggle=${()=>{this._clean=!this._clean,Q.set("clean",this._clean?"1":"0")}}
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
          .accent=${this._accent}
          ?furnish=${this._furnish&&!r}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${i=>this._selFurniture=i.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${i=>this._selDevice=i.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${i=>{this._floorId=i.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?b`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${i=>this.view3d()?.lookThrough(i.detail.entity)}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${r}
              .room=${e.floors.flatMap(i=>ke(i)).find(i=>i.id===this._roomId)??null}
              .floor=${e.floors.find(i=>ke(i).some(s=>s.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${jt(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${i=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,i.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${this.tt.session?b`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${this._clean?y:b`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?b`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?b`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:y}
          ${!this._floorId&&e.settings.roof.type!=="none"?b`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:y}
          ${e.floors.length>1&&this._floorId?b`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(i=>b`<button
                      aria-pressed=${this._floorStack===i}
                      @click=${()=>{this._floorStack=i,Q.set("floor_stack",i)}}
                    >
                      ${this.t(`floor_stack_short_${i}`)}
                    </button>`)}
              </div>`:y}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(i=>b`<button
                  aria-pressed=${this._heat===i}
                  @click=${()=>{this._heat=i,Q.set("heat",i)}}
                >
                  ${this.t(i==="none"?"heat_off":`heat_short_${i}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,Q.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,Q.set("trail",this._trail?"1":"0")}}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,Q.set("weather",this._weather?"1":"0")}}
          >
            ${V("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:y}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${r} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${V("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?b`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:y}
        </div>`}
        ${this._furnish?b`<div class="fp3d-furnish-bar">
              ${this._selFurniture?b`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,i=>i.mirror=!i.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?b`<span>${G(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:b`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:y}
      </div>
    `}static styles=[Oe,lt,ze`
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
        display: grid;
        place-items: center;
        order: 3;
        width: 36px;
        height: 36px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        font-size: 17px;
        cursor: pointer;
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
        gap: 8px;
        order: 5;
        width: 100%;
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
    `]};customElements.get("home-3d-panel")||customElements.define("home-3d-panel",Ur);function Go(o,e,n=new Date){if(!o||o==="off")return!1;if(o==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let t=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!t)return!1;let r=Number(t[1])*60+Number(t[2]),i=Number(t[3])*60+Number(t[4]),s=n.getHours()*60+n.getMinutes();return r<=i?s>=r&&s<i:s>=r||s<i}var vd;function yd(){let o=new URL("./home-3d-card-editor.js?v=63d1b28181bf",new URL(import.meta.url)).href;return vd??=import(o),vd}function kd(){try{let o=localStorage.getItem("home3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var jr=class extends Me{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new Kt(this);tt=new on(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=kd(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let n=this._config?.controls_hide_after??0;n>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,n*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),n=this.data.building;if(!e||!n||!this.hass)return;if(!V("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let t=this._config;this.tt.start({live:this.hass,building:n,spec:e.historyEntities(),quality:t?.quality??"auto",speed:t?.time_travel_speed??null,range:t?.time_travel_range??null,t:(r,i)=>$(this.hass,r,i)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let n=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(n-this._top)>1)&&(this._top=n)}};connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>this._night=Go(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=this.shadowRoot?.querySelector("ha-card"),n=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e?.requestFullscreen?e.requestFullscreen().catch(n):n()}static async getConfigElement(){return await yd(),document.createElement("home-3d-card-editor")}static getStubConfig(){return{type:"custom:home-3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("home3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=kd(),this._heat=null,this._explode=null,this._orbit=!1,this._night=Go(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),qt(this.hass.language)||lo(this.hass.language).then(()=>this.requestUpdate());let n=Go(this._config?.night,this.hass);n!==this._night&&(this._night=n)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}currentFloor(){let e=this.data.building,n=this._floorId===void 0?this._config?.floor??null:this._floorId;return e&&e.floors.length===1?e.floors[0].id:e?.floors.some(t=>t.id===n)?n:null}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!qt(this.hass.language))return y;let e=this.data.building,n=this._config?.height??420,t=this._config;!this.roomApplied&&e&&t?.room&&(this.roomApplied=!0,e.floors.some(v=>ke(v).some(w=>w.id===t.room))&&(this._roomId=t.room));let r=this.currentFloor(),i=!!this._roomId&&t?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!r&&(e?.floors.length??0)>1,s=v=>t?.controls===!0||Array.isArray(t?.controls)&&t.controls.includes(v),a=["temperature","humidity","co2"].filter(v=>s(v)),l=this._walls??t?.walls??"auto",d=this._heat??t?.heatmap??"none",c=this._explode??t?.explode??!0,u=this._fullscreen?"100%":t?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${n}px`,h=!!e&&!this._clean&&(i||(!!t?.controls||!!t?.time_travel)&&!(this._roomId&&t.room_panel!==!1)),p=this.tt.active,g=t?.controls_hidden!==void 0||(t?.controls_hide_after??0)>0,_=v=>$(this.hass,v),m=/^#[0-9a-f]{6}$/i.test(t?.accent??"")?t.accent:null;return b`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${m?`--fp3d-accent:${m}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${p?"fp3d-tt":""}" style="height:${u}">
        ${e&&e.floors.some(v=>v.rooms.length)?b`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .canEdit=${this.data.canEdit}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${r}
              .roomId=${this._roomId}
              .wallMode=${l}
              .explode=${c}
              .keepRoof=${t?.roof_fade===!1}
              .hideRoof=${t?.roof===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .pinSize=${this._config?.marker_size??"normal"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .walkable=${this._config?.walk!==!1}
              .petsOn=${this._config?.pets!==!1}
              .ghostOn=${this._config?.ghost!==!1}
              .buttons=${this._config?.buttons?.map((v,w)=>({id:`card_${w}`,...v}))??null}
              .heatMode=${d}
              .theme=${this._config?.theme??"neon"}
              .clock=${this._config?.clock??null}
              .accent=${this._config?.accent??null}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${t?.room_names!==!1}
              .controlsRight=${t?.controls_side==="right"}
              .keepView=${t?.keep_view===!0}
              .angleLock=${t?.angle_lock===!0}
              .floorStack=${t?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&t?.room_panel!==!1}
              .alerts=${t?.alerts!==!1}
              .householdCard=${t?.household_card!==!1}
              .alertJump=${!!t?.alert_jump}
              .director=${!!t?.director}
              .voice=${!!t?.voice}
              .screen=${t?.screen?.trim()||null}
              .scenes=${t?.scenes!==!1}
              ?trail=${!!t?.motion_trail}
              .cameraWall=${this._cameraWall&&!p}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${g}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${t?.weather!==!1}
              .weatherEntityId=${t?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${t?.start_view??null}
              style=${p?`--fp3d-bottom-inset: ${h?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:h?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${v=>{if(this.canSwitch&&(e?.floors.length??0)>1&&v.detail.floorId&&this.currentFloor()!==v.detail.floorId){this._floorId=v.detail.floorId,this._roomId=null;return}v.detail.roomId&&(this._roomId=v.detail.roomId===this._roomId?null:v.detail.roomId)}}
              @floor-tap=${v=>{this._floorId=v.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:b`<p class="fp3d-card-msg">${this.data.error??(e?$(this.hass,"no_building"):$(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?b`<fp3d-room-panel
              @camera-look=${v=>this.view3d()?.lookThrough(v.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${p}
              .room=${e.floors.flatMap(v=>ke(v)).find(v=>v.id===this._roomId)??null}
              .floor=${e.floors.find(v=>ke(v).some(w=>w.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${jt(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${v=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,v.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${h&&e?b`<div class="fp3d-card-controls">
              ${i?b`<button class="fp3d-chip" @click=${()=>this.back()}>${_("back")}</button>`:y}
              ${t?.time_travel?b`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${p} title=${_("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${V("time_travel")?"\u23EA":"\u{1F512}"} ${_("tt_chip")}
                  </button>`:y}
              ${t?.camera_wall?b`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${_("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${_("cameras_short")}</button>`:y}
              ${s("walls")?b`<div class="fp3d-seg">
                    <button aria-pressed=${l==="auto"} @click=${()=>this.setWalls("auto")}>${_("walls_auto")}</button>
                    <button aria-pressed=${l==="cut"} @click=${()=>this.setWalls("cut")}>${_("walls_cut")}</button>
                  </div>`:y}
              ${s("floors")&&e.floors.length>1&&!r?b`<div class="fp3d-seg">
                    <button aria-pressed=${c} @click=${()=>this._explode=!0}>${_("floors_apart")}</button>
                    <button aria-pressed=${!c} @click=${()=>this._explode=!1}>${_("floors_stacked")}</button>
                  </div>`:y}
              ${a.length?b`<div class="fp3d-seg" role="group" aria-label=${_("heatmap")}>
                    ${["none",...a].map(v=>b`<button aria-pressed=${d===v} @click=${()=>this._heat=v}>
                          ${_(v==="none"?"heat_off":`heat_short_${v}`)}
                        </button>`)}
                  </div>`:y}
            </div>`:y}
        ${this.tt.session?b`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${t?.fullscreen_button&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?b`<button class="fp3d-card-full" title=${_(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${_(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:y}
        ${t?.dashboard&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?b`<button class="fp3d-card-full fp3d-card-dash ${t.fullscreen_button?"fp3d-card-dash-2":""}" title=${t.dashboard_label||t.dashboard} aria-label=${t.dashboard_label||t.dashboard} @click=${()=>this.openDashboard(t.dashboard)}>
              ${t.dashboard_label?b`<span>${t.dashboard_label}</span>`:"\u2302"}
            </button>`:y}
      </div>
    </ha-card>`}static styles=[Oe,lt,ze`
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
    `]};if(!customElements.get("home-3d-card")){customElements.define("home-3d-card",jr);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"home-3d-card",name:$(void 0,"card_name"),description:$(void 0,"card_description"),preview:!1})}ss();No();
