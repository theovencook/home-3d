Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Za=new URL(import.meta.url),Qa=Za.searchParams.get("v"),Ja=o=>new URL(`./fonts/${o}${Qa?`?v=${Qa}`:""}`,Za).href,Xa="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function el(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ja("figtree.woff2")}) format("woff2");unicode-range:${Xa}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ja("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Xa}}`,document.head.append(o)}function Oo(o,e){return e==="metric"||e==="imperial"?e:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function Fh(o,e){return String(Number(o.toFixed(e)))}function mr(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),r=n-i*12,s=Fh(r,e>=2?1:0);return i?r<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function gr(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,r=!1,s=!1,a=t;for(let l of t.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];r=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=c*.0254:d==="mm"?i+=c/1e3:d==="cm"?i+=c/100:d==="m"?i+=c:i+=e==="imperial"?c*(s?.0254:.3048):c}return!r||/[^\s+]/.test(a)?null:i}function Ln(o,e){return e==="imperial"?o.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):o}var Do=globalThis,Lo=Do.ShadowRoot&&(Do.ShadyCSS===void 0||Do.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_r=Symbol(),tl=new WeakMap,Wn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==_r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Lo&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=tl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&tl.set(t,e))}return e}toString(){return this.cssText}},Ke=o=>new Wn(typeof o=="string"?o:o+"",void 0,_r),Me=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Wn(t,o,_r)},nl=(o,e)=>{if(Lo)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=Do.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},br=Lo?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Ke(t)})(o):o;var{is:Ch,defineProperty:zh,getOwnPropertyDescriptor:Oh,getOwnPropertyNames:Dh,getOwnPropertySymbols:Lh,getPrototypeOf:Wh}=Object,Wo=globalThis,ol=Wo.trustedTypes,Nh=ol?ol.emptyScript:"",Vh=Wo.reactiveElementPolyfillSupport,Nn=(o,e)=>o,wr={toAttribute(o,e){switch(e){case Boolean:o=o?Nh:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},rl=(o,e)=>!Ch(o,e),il={attribute:!0,type:String,converter:wr,reflect:!1,useDefault:!1,hasChanged:rl};Symbol.metadata??=Symbol("metadata"),Wo.litPropertyMetadata??=new WeakMap;var Je=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=il){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&zh(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:r}=Oh(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);r?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??il}static _$Ei(){if(this.hasOwnProperty(Nn("elementProperties")))return;let e=Wh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Nn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Nn("properties"))){let t=this.properties,n=[...Dh(t),...Lh(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(br(i))}else e!==void 0&&t.push(br(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nl(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:wr).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),s=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:wr;this._$Em=i;let a=s.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){let s=this.constructor;if(i===!1&&(r=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??rl)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,r]of n){let{wrapped:s}=r,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Je.elementStyles=[],Je.shadowRootOptions={mode:"open"},Je[Nn("elementProperties")]=new Map,Je[Nn("finalized")]=new Map,Vh?.({ReactiveElement:Je}),(Wo.reactiveElementVersions??=[]).push("2.1.2");var yr=globalThis,sl=o=>o,No=yr.trustedTypes,al=No?No.createPolicy("lit-html",{createHTML:o=>o}):void 0,xr="$lit$",Xe=`lit$${Math.random().toFixed(9).slice(2)}$`,kr="?"+Xe,Bh=`<${kr}>`,Rt=document,Bn=()=>Rt.createComment(""),Un=o=>o===null||typeof o!="object"&&typeof o!="function",$r=Array.isArray,hl=o=>$r(o)||typeof o?.[Symbol.iterator]=="function",vr=`[ 	
\f\r]`,Vn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ll=/-->/g,cl=/>/g,Et=RegExp(`>|${vr}(?:([^\\s"'>=/]+)(${vr}*=${vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dl=/'/g,ul=/"/g,fl=/^(?:script|style|textarea|title)$/i,Sr=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),g=Sr(1),Ze=Sr(2),eb=Sr(3),Re=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),pl=new WeakMap,It=Rt.createTreeWalker(Rt,129);function ml(o,e){if(!$r(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return al!==void 0?al.createHTML(e):e}var gl=(o,e)=>{let t=o.length-1,n=[],i,r=e===2?"<svg>":e===3?"<math>":"",s=Vn;for(let a=0;a<t;a++){let l=o[a],c,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===Vn?d[1]==="!--"?s=ll:d[1]!==void 0?s=cl:d[2]!==void 0?(fl.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Et):d[3]!==void 0&&(s=Et):s===Et?d[0]===">"?(s=i??Vn,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Et:d[3]==='"'?ul:dl):s===ul||s===dl?s=Et:s===ll||s===cl?s=Vn:(s=Et,i=void 0);let h=s===Et&&o[a+1].startsWith("/>")?" ":"";r+=s===Vn?l+Bh:u>=0?(n.push(c),l.slice(0,u)+xr+l.slice(u)+Xe+h):l+Xe+(u===-2?a:h)}return[ml(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},qn=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[c,d]=gl(e,t);if(this.el=o.createElement(c,n),It.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=It.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(xr)){let p=d[s++],h=i.getAttribute(u).split(Xe),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:_[2],strings:h,ctor:_[1]==="."?Bo:_[1]==="?"?Uo:_[1]==="@"?qo:Ft}),i.removeAttribute(u)}else u.startsWith(Xe)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(fl.test(i.tagName)){let u=i.textContent.split(Xe),p=u.length-1;if(p>0){i.textContent=No?No.emptyScript:"";for(let h=0;h<p;h++)i.append(u[h],Bn()),It.nextNode(),l.push({type:2,index:++r});i.append(u[p],Bn())}}}else if(i.nodeType===8)if(i.data===kr)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(Xe,u+1))!==-1;)l.push({type:7,index:r}),u+=Xe.length-1}r++}}static createElement(e,t){let n=Rt.createElement("template");return n.innerHTML=e,n}};function Ht(o,e,t=o,n){if(e===Re)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,r=Un(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=Ht(o,i._$AS(o,e.values),i,n)),e}var Vo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Rt).importNode(t,!0);It.currentNode=i;let r=It.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new un(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new jo(r,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(r=It.nextNode(),s++)}return It.currentNode=Rt,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},un=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ht(this,e,t),Un(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Re&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):hl(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&Un(this._$AH)?this._$AA.nextSibling.data=e:this.T(Rt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=qn.createElement(ml(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let r=new Vo(i,this),s=r.u(this.options);r.p(t),this.T(s),this._$AH=r}}_$AC(e){let t=pl.get(e.strings);return t===void 0&&pl.set(e.strings,t=new qn(e)),t}k(e){$r(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let r of e)i===t.length?t.push(n=new o(this.O(Bn()),this.O(Bn()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=sl(e).nextSibling;sl(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ft=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,i){let r=this.strings,s=!1;if(r===void 0)e=Ht(this,e,t,0),s=!Un(e)||e!==this._$AH&&e!==Re,s&&(this._$AH=e);else{let a=e,l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Ht(this,a[n+l],t,l),c===Re&&(c=this._$AH[l]),s||=!Un(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Bo=class extends Ft{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Uo=class extends Ft{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},qo=class extends Ft{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=Ht(this,e,t,0)??y)===Re)return;let n=this._$AH,i=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},jo=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ht(this,e)}},_l={M:xr,P:Xe,A:kr,C:1,L:gl,R:Vo,D:hl,V:Ht,I:un,H:Ft,N:Uo,U:qo,B:Bo,F:jo},Uh=yr.litHtmlPolyfillSupport;Uh?.(qn,un),(yr.litHtmlVersions??=[]).push("3.3.3");var bl=(o,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let r=t?.renderBefore??null;n._$litPart$=i=new un(e.insertBefore(Bn(),r),r,void 0,t??{})}return i._$AI(o),i};var Mr=globalThis,ye=class extends Je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bl(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Re}};ye._$litElement$=!0,ye.finalized=!0,Mr.litElementHydrateSupport?.({LitElement:ye});var qh=Mr.litElementPolyfillSupport;qh?.({LitElement:ye});(Mr.litElementVersions??=[]).push("4.2.2");var jn="(max-width: 600px)";function wl(o){return o<=600}function Tr(o,e){return o==="1"||o==="0"?o==="1":e}var vl={x:0,y:.1},yl={x:0,y:0};var Kn=o=>o?{home_id:o}:{};async function Ar(o,e){return o.callWS({type:"home_3d/building/get",...Kn(e)})}async function xl(o){return o.callWS({type:"home_3d/version"})}async function Ko(o,e,t,n,i){return o.callWS({type:"home_3d/building/save",...Kn(n),building:e,...t?{recipe_bases:t}:{},...i!==void 0?{base_revision:i}:{}})}function kl(o,e,t){return o.connection.subscribeMessage(n=>e(n.revision,n.home_id),{type:"home_3d/building/subscribe",...Kn(t)})}function $l(o,e){return o.connection.subscribeMessage(e,{type:"home_3d/voice/subscribe"})}async function Sl(o,e,t,n){return(await o.callWS({type:"home_3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function Ml(o,e,t){return(await o.callWS({type:"home_3d/image/get",...Kn(t),image_id:e})).data}async function Tl(o,e){await o.callWS({type:"home_3d/history/snapshot",...Kn(e)})}function Al(o){return o.callWS({type:"home_3d/homes/list"})}function Pl(o,e,t={}){return o.callWS({type:"home_3d/homes/create",name:e,...t.areaImport===!1?{area_import:!1}:{}})}function Go(o){return o.callWS({type:"home_3d/homes/load_sample"})}function El(o,e,t){return o.callWS({type:"home_3d/homes/rename",home_id:e,name:t})}function Il(o,e,t){return o.callWS({type:"home_3d/homes/duplicate",home_id:e,name:t})}function Rl(o,e){return o.callWS({type:"home_3d/homes/delete",home_id:e})}function Hl(o,e){return o.callWS({type:"home_3d/homes/set_active",home_id:e})}async function Fl(o){return(await o.callWS({type:"home_3d/packs/list"})).packs}function jh(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function Fr(o){let e=Pe(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(jh).length>=2}var Ir=[],Ct=new Map,Cl=new Map,Cr=new Map,Rr,zl="",zr=0;function Ol(o){for(let e of o){let t=e.hash?Ir.find(n=>n.id===e.id&&n.hash===e.hash):void 0;if(!(!t||t===e))for(let n of e.items){let i=Hr(n)?void 0:Ct.get(Pr(e.id,n.id));i&&Hr(i)&&Kh(n,i)}}Ir=o,Ct=new Map(o.flatMap(e=>e.items.map(t=>[Pr(e.id,t.id),t]))),Cl=new Map(o.flatMap(e=>Object.entries(e.aliases??{}).map(([t,n])=>[t,Pr(e.id,n)])));for(let[e,t]of Cl){let n=Ct.get(t);n&&!Ct.has(e)&&Ct.set(e,n)}zr++}function Hr(o){return Array.isArray(o.parts)}function Kh(o,e){o.parts=e.parts,e.symbol&&(o.symbol=e.symbol)}function pn(){return Ir}function Gn(o){if(o===Rr)return;Rr=o;let e=Object.entries(o??{}),t=e.map(([n,i])=>`${n}=${i.hash}`).sort().join("|");t!==zl&&(zl=t,Cr=new Map(e.map(([n,i])=>[n,i.recipe])),zr++)}function Yn(o){return Object.fromEntries(Object.entries(o??{}).map(([e,t])=>[e,t.hash]))}function Or(){return Rr}function Yo(){return zr}function Pr(o,e){return`pack:${o}:${e}`}function Le(o){return o.startsWith("pack:")}function Qo(o){return Le(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":/:roof_window[\w.-]*_blind$/.test(o)?"blind":null:null}function hn(o){return o==="robot_vacuum"||Le(o)&&o.endsWith(":robot_vacuum")}function Gh(o){return o.z>.05}function Dl(o){let e=(o?.parts??[]).filter(t=>t.shape==="cyl"&&Gh(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function Jo(o){return Le(o)&&/:(heat_pump_indoor|gas_boiler|combi_boiler(?:_[a-z0-9_]+)?|buffer_tank|water_heater|hot_water_cylinder(?:_[a-z0-9_]+)?)$/.test(o)}var Yh={meter:"meter",consumer_unit:"meter",energy_monitor:"meter",inverter:"inverter",home_battery:"home_battery",power_station:"home_battery",ev_charger:"wallbox",solar_panel:"solar"};function oe(o){if(o==="meter"||o==="inverter"||o==="home_battery"||o==="wallbox")return o;let e=fn(o),t=e?.family?Yh[e.family]??null:null;return t==="meter"&&(e.tags??[]).some(n=>/^(gas|water|wasser)$/i.test(n))?null:t}function Ll(o){return Pe(o)?.parts.find(e=>e.screen)}function Wl(o){let e=Pe(o);return!!e&&!e.light&&e.parts.some(t=>t.screen)&&e.parts.some(t=>t.glow)}function Pe(o){if(!Le(o))return;let e=Ct.get(o);return Cr.get(o)??(e&&Hr(e)?e:void 0)}function fn(o){if(Le(o))return Cr.get(o)??Ct.get(o)}var Qh=new Set(["radiator_trv","radiator_valve","thermostat"]);function mn(o){if(o==="radiator")return!0;let e=Le(o)?fn(o):void 0;return e?Qh.has(e.family??"")||(e.tags??[]).some(t=>/^(trv|smart trv|thermostat)$/i.test(t)):!1}function Nl(o){let e=Le(o)?fn(o):void 0;return e?/camera$/.test(e.family??"")||(e.tags??[]).some(t=>/^(camera|security camera|cctv|doorbell|video doorbell|doorbell camera)$/i.test(t)):!1}function Xo(o,e){let t=e.split("-")[0];return o.name[t]??o.name.en??Object.values(o.name)[0]??o.id}function Vl(o,e){return o.name}function ce(o,e){let t=fn(e.type);if(e.mount_y!=null)return e.mount_y;let n=ql(e,o.height);if(n!==null)return n;if(e.type==="lamp_wall")return Bl;if(Zo.has(e.type))return Math.max(0,o.height-ei(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return Er(o,e)+Qn(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?Er(o,e):Ul(e)||Er(o,e)}}function Er(o,e){let t=o.rooms.filter(n=>n.points.length>=3);return!t.length||t.some(n=>U([e.x,e.z],n.points))?0:et(o,e.x,e.z)}var Ge={field:null,size:1,right:0,up:0};var Gl=["rain","snow","clouds","lightning","sky"];var Xh={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Lr(o){return o==="hedge"||o==="fence"||o==="pergola"}function Wr(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!Lr(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function be(o){return[...o.rooms,...Wr(o)]}function Zh(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let i=o.slope_dir??"x",r=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of o.points){let u=r(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-s)/(a-s)));return n*l}function ef(o,e,t,n){return Jl(o,e)+Xh[e.type]-tf(o,e,t,n)}var Nr=-.2,Dr={set:!1,level:Nr};function Yl(o){let e=o?.settings.terrain??null;Dr={set:e?.level!=null,level:e?.level??Nr}}function Ql(o){return o.elevation>.3?0:Dr.set?Dr.level-o.elevation:Nr}function Jl(o,e){return Ql(o)+(e.offset??0)}function tf(o,e,t,n){return e.type==="pool"?0:Zh(e,t,n)}function et(o,e,t){let n=(o.outdoor??[]).filter(r=>!Lr(r.type)&&r.type!=="pool"&&U([e,t],r.points)),i=[...n].reverse().find(r=>r.cut)??n[0];return i?ef(o,i,e,t):Ql(o)}function Xl(o,e){return Jl(o,e)+(e.above?Zl(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function nf(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?Zl(o):1.5}function of(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Lr(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>U(n,t.points)))}function Jn(o,e){return!e.above&&!of(o,e)?gn(o,e)-.05:Xl(o,e)-nf(e)}function gn(o,e){return Xl(o,e)-.15}function Zl(o){return o.height&&o.height>.3?o.height:1.2}var rf={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var ec={type:"none",pitch:35,overhang:.4},sf={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ec}};var tc=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],nc=.3;var oc=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Bl=1.75;function ic(o){if(["lamp_pendant","lamp_fan","stairwell","loft_ladder","parking"].includes(o.type)||af.has(o.type))return!1;let e=Pe(o.type);return!(e?.mount==="ceiling"&&e.light&&e.light!=="panel")}var Zo=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function ei(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var af=new Set(["stairs","stairs_u"]);function Vr(o){return oc.has(o)||!!Pe(o)?.light}var lf=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ul(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return o.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Kl=.04,cf=1.2;function Qn(o,e,t,n=0){let i=0;for(let r of o.furniture)!(lf.has(r.type)||Pe(r.type)?.surface)||!U([e,t],zt(r))||r.type==="worktop"&&n>0&&r.h-Kl>=cf&&n<=r.h-Kl-.02||(i=Math.max(i,r.h));return i}var rc=new Set(["wall_switch","wall_socket"]),df=4;function Xn(o){let e=(o.gangs??[]).slice(0,df);return e.length?e:[{entity:null}]}function ti(o){return[...new Set(Xn(o).map(e=>e.entity).filter(e=>!!e&&e!=="none"))]}var sc=new Set(["wifi_ap","water_heater"]);function ql(o,e){return o.type==="wifi_ap"?o.variant==="wall"?2.1:Math.max(0,e-o.h):o.type==="water_heater"?o.variant==="wall"?1.1:0:null}var Jh=new Set([...oc,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),jl={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],loft_ladder:[.6,1.1,2.5],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var uf=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],pf=["standard","bars","glass_wall"],hf=["sectional","up_and_over"];function ff(o,e){return o.type==="garage"?o.style&&hf.includes(o.style)?o.style:"sectional":o.type==="door"?o.style&&uf.includes(o.style)?o.style:e?"front":"interior":o.style&&pf.includes(o.style)?o.style:"standard"}function mf(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",r=o-.04,s=Math.min(1.05,Math.max(.6,r-(i?.6:.3))),a=(r-s)/(i?2:1),l=n.sidelight_width??a,c=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=r-.5;if(l+c>d){let p=Math.max(0,d)/(l+c);l*=p,c*=p}return i?{panels:[[.02,.02+l],[o-.02-c,o-.02]],x0:.02+l,x1:o-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function ac(o,e){let t=o.width,n=mf(t,ff(o,!1),e,o),i=n?.x0??0,r=n?.x1??t;return o.leaves!==2?(i+r)/2:e?i+(r-i)/4:r-(r-i)/4}function Br(o){o.energy={...rf,...o.energy??{}},o.presence=o.presence??[],o.settings={...sf,...o.settings,roof:{...ec,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let r=n[i.mount??"ceiling"],[s,a,l]=jl[r];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function lc(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function Be(o){let e=0;for(let t=0;t<o.length;t++){let[n,i]=o[t],[r,s]=o[(t+1)%o.length];e+=n*s-r*i}return e/2}function Fe(o){let e=Be(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let t=0,n=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],c=r*l-a*s;t+=(r+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function zt(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=o.w/2,r=o.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[o.x+s*t-a*n,o.z+s*n+a*t])}function U(o,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,s]=e[n],[a,l]=e[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(t=!t)}return t}var cc={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var gf=700,qr="home3d.unsaved",_f="0.1.0",bf="a8d4a478ddae",wf=3,pc="floorplan-3d.unsaved";function dc(){try{let o=localStorage.getItem(qr)??localStorage.getItem(pc);return o?JSON.parse(o):null}catch{return null}}function Zn(o){try{o?localStorage.setItem(qr,JSON.stringify(o)):(localStorage.removeItem(qr),localStorage.removeItem(pc))}catch{}}var _n=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;backendBuild=null;frontend={version:_f,build:bf};draft=null;conflict=!1;packs=[];canEdit=!1;packsLoaded=!1;home=void 0;homeId=null;homeName=null;libraryLoading=null;host;hass=null;revision=-1;recipeBases={};ownRevisions=new Set;unsubscribe=null;subscribing=null;saveTimer;pending=null;pendingHome=void 0;edits=0;changes=[];remoteRevision=-1;saving=null;connected=!1;watched=null;constructor(e){this.host=e,e.addController(this)}get shown(){return this.homeId??this.home}setHome(e){e!==this.home&&(this.remembered=!1,this.home=e,!(!this.hass||!this.connected)&&this.flush().then(async()=>{await this.subscribing;let t=this.unsubscribe;this.unsubscribe=null,await t?.(),await this.start()}))}openRemembered(e){this.hass&&this.connected?this.setHome(e):this.home=e,this.remembered=!0}onHomeGone=null;remembered=!1;async reopen(){await this.flush(),await this.reload()}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush();let e=this.unsubscribe;this.unsubscribe=null,e?.(),this.watched?.removeEventListener?.("ready",this.onReconnect),this.watched=null}onReconnect=()=>{this.checkVersion()};async checkVersion(){if(this.hass)try{let e=await xl(this.hass);this.backendVersion=e.version??null,this.backendBuild=e.build??null,this.host.requestUpdate()}catch{}}edit(e){this.building=e,Gn(e.recipes),this.pending=e,this.pendingHome=this.shown,this.edits++,this.changes=null,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},gf),this.host.requestUpdate()}update(e){if(!this.building)return;let t=this.pending?this.changes:[],n=structuredClone(this.building);e(n),this.edit(n),this.changes=t?[...t,e]:null,this.flush()}get frontendVersion(){return this.frontend.version}get versionGap(){let e=this.frontend;return!this.backendVersion||e.version==="dev"?null:this.backendVersion===e.version?this.backendBuild&&e.build!=="dev"&&this.backendBuild!==e.build?"frontend":null:xf(this.backendVersion,e.version)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&this.frontend.version!=="dev"&&this.backendVersion!==this.frontend.version}get updateNotice(){return this.versionGap!=="frontend"?null:this.saveState==="error"?"unsaved":this.pending||this.saving?"saving":"ready"}async reloadWhenSaved(e=()=>location.reload()){return await this.flush(),this.pending||this.saveState==="error"?!1:(e(),!0)}async restoreDraft(){let e=this.draft,t=this.conflict;if(this.draft=null,this.conflict=!1,!e||!this.draftFits(e)){this.host.requestUpdate();return}if(t&&this.hass){try{await Tl(this.hass,this.shown)}catch{}if(!this.draftFits(e)){this.host.requestUpdate();return}}this.edit(Br(e.building))}draftFits(e){return e.home?e.home===this.homeId:this.home===void 0}discardDraft(){this.draft=null,this.conflict=!1,Zn(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!e||!this.hass)return;let t=this.pendingHome,n=this.changes;this.pending=null,this.changes=[];for(let i of e.floors)for(let r of i.furniture)r.mount_y!=null&&r.mount_y>10&&(r.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{await this.save(e,n,t)}catch(i){this.saveState="error",this.saveError=Ur(i),Zn({building:e,savedAt:Date.now(),...t?{home:t}:{}})}this.host.requestUpdate()})(),await this.saving,this.saving=null,!this.pending&&this.remoteRevision>this.revision&&this.reload()}async save(e,t,n){for(let i=1;;i++){let r=n===this.shown,s=r?this.recipeBases:{},a;try{let u=r&&this.revision>=0?this.revision:void 0,{revision:p,recipes:h}=await Ko(this.hass,e,s,n,u);h&&uc(e,h,s),n===this.shown&&(h&&(this.building&&this.building!==e&&uc(this.building,h,s),this.building&&Gn(this.building.recipes),this.recipeBases=Yn(h)),this.ownRevisions.add(p),this.revision=p),this.saveState=this.pending?"saving":"saved",this.saveError=null,this.forgetDraft(n);return}catch(u){if(!yf(u))throw u;a=u}if(n!==this.shown){Zn({building:e,savedAt:Date.now(),...n?{home:n}:{},conflict:!0}),this.saveState="error",this.saveError=Ur(a);return}let l=await this.loadTheirs(n),c=this.pending??e,d=this.pending?t&&this.changes?[...t,...this.changes]:null:t;if(clearTimeout(this.saveTimer),this.pending=null,this.changes=[],l&&this.building&&vf(c,this.building)){this.saveState="saved";return}if(!l||!d||i>=wf||!this.building){let u={building:c,savedAt:Date.now(),...n?{home:n}:{},conflict:!0};Zn(u),this.draftFits(u)&&(this.conflict=!0,this.draft=u),this.saveState="error",this.saveError=null;return}e=structuredClone(this.building);for(let u of d)u(e);t=d,this.building=e,Gn(e.recipes),this.host.requestUpdate()}}async loadTheirs(e){let t;try{t=await Ar(this.hass,e)}catch{return!1}return e!==this.shown||(t.home_id??null)!==this.homeId?!1:(this.show(t,!0),this.error=null,!0)}forgetDraft(e){if(this.conflict)return;let t=dc();t?.home&&t.home!==e||Zn(null)}async start(){this.hass&&(await this.reload(),!this.watched&&this.connected&&this.hass.connection.addEventListener&&(this.watched=this.hass.connection,this.watched.addEventListener("ready",this.onReconnect)),!this.unsubscribe&&!this.subscribing&&this.connected&&(this.subscribing=this.subscribe(this.hass),await this.subscribing,this.subscribing=null))}async subscribe(e){let t=this.home;try{let n=await kl(e,(i,r)=>{if(r&&this.homeId&&r!==this.homeId){this.flush().then(()=>this.reload());return}this.ownRevisions.has(i)||i===this.revision||(this.remoteRevision=Math.max(this.remoteRevision,i),!(this.pending||this.saving)&&this.reload())},t);!this.connected||t!==this.home||this.unsubscribe?await n():this.unsubscribe=n}catch{}}loadLibrary(){return this.packsLoaded?Promise.resolve():(this.libraryLoading??=this.reloadPacks().finally(()=>this.libraryLoading=null),this.libraryLoading)}async reloadPacks(){if(this.hass){try{this.packs=await Fl(this.hass)}catch{this.packs=[]}Ol(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(!this.hass)return!1;let e=this.home,t=this.edits;try{let n=await Ar(this.hass,e);if(e!==this.home)return!1;let r=(n.home_id??null)!==this.homeId;if(r){for(;this.pending;)await this.flush();if(e!==this.home)return!1;this.ownRevisions.clear(),this.remoteRevision=-1,this.draft=null,this.conflict=!1}if(this.show(n,r||!this.pending&&!this.saving&&this.edits===t),this.draft===null&&!this.pending){let s=dc();this.draft=s&&this.draftFits(s)?s:null,this.conflict=!!this.draft?.conflict}this.error=null}catch(n){return e!==this.home?!1:this.remembered&&e!==void 0&&n?.code==="home_not_found"?(this.remembered=!1,this.home=void 0,this.onHomeGone?.(),this.reload()):(this.error=Ur(n),this.host.requestUpdate(),!1)}return this.host.requestUpdate(),!0}show(e,t){this.homeId=e.home_id??null,this.homeName=e.home_name??null,this.backendVersion=e.version??null,this.backendBuild=e.build??null,this.canEdit=e.can_edit??!!this.hass?.user?.is_admin,t&&(this.building=Br(e.building),Gn(this.building.recipes),this.recipeBases=Yn(this.building.recipes),this.revision=e.revision)}};function uc(o,e,t){let n=o.recipes??{},i=Object.entries(n).filter(([r,s])=>!(r in e)||s.hash!==t[r]);o.recipes={...e,...Object.fromEntries(i)}}function vf(o,e){return JSON.stringify({...o,recipes:void 0})===JSON.stringify({...e,recipes:void 0})}function yf(o){return!!o&&typeof o=="object"&&o.code==="conflict"}function Ur(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function xf(o,e){let t=o.split(/[.-]/).map(i=>Number.parseInt(i,10)||0),n=e.split(/[.-]/).map(i=>Number.parseInt(i,10)||0);for(let i=0;i<Math.max(t.length,n.length);i++){let r=(t[i]??0)-(n[i]??0);if(r)return r}return 0}function Ce(o,e){let t;return()=>(t||(t=import(new URL(`./${o}.js?v=${e()}`,new URL(import.meta.url)).href).catch(i=>{throw t=void 0,i})),t)}var jr=Ce("home-3d-editor",()=>"ca92b9801fbb");var hc=Ce("home-3d-settings",()=>"2eab293480a5");var ni=Ce("home-3d-locate",()=>"6e29644bd413");var kf={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},$f=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),Sf=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),Mf=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),oi=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],vc=new Set(["light","switch","fan"]);function yc(o){return o.slice(0,o.indexOf("."))}function B(o){return kf[yc(o)]??null}function fc(o){return o!==null&&o!=="scene"&&o!=="script"}var Tf=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function ii(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!Tf.has(String(o.attributes.device_class??""))}function tt(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&o.devices?.[t.device_id]?.area_id||null:null}function ri(o,e){let t=o.entities?.[e];return!!t&&(!!t.hidden||!!t.hidden_by||!!t.disabled_by)}function mc(o,e){let t=B(e);if(!t)return!1;let n=o.entities?.[e];if(ri(o,e)||n?.entity_category)return!1;let i=o.states[e];if(!i)return!1;let r=i.attributes.device_class,s=String(i.attributes.unit_of_measurement??"");return t==="sensor"?r?$f.has(r)||r==="voltage"&&s==="mV":Sf.has(s):t==="binary"?r?Mf.has(r):!!n?.area_id:!0}var Af=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function gc(o,e){if(B(e)!=="sensor")return!1;let t=o.entities?.[e];if(ri(o,e)||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||Af.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||K(n)}var Kr=null;function to(o){let e=Kr;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],r=new Map,s=new Map;for(let l of Object.keys(o.entities??{})){let c=o.entities[l],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&os(o,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!ri(o,l)&&!c.entity_category&&(r.get(d)??r.set(d,new Set).get(d)).add(yc(l));let u=mc(o,l),p=tt(o,l);if(!p){(u||gc(o,l))&&fc(B(l))&&i.push(l);continue}u&&(t.get(p)??t.set(p,[]).get(p)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(mc(o,l)||gc(o,l))&&fc(B(l))&&i.push(l);i.sort((l,c)=>oi.indexOf(B(l))-oi.indexOf(B(c))||j(o,l).localeCompare(j(o,c)));for(let[l,c]of t){let d=o.areas?.[l]?.name;c.sort((u,p)=>{let h=oi.indexOf(B(u)),_=oi.indexOf(B(p));return h-_||j(o,u,d).localeCompare(j(o,p,d))})}let a=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return Kr={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:i,domains:r,hubs:a},Kr}function ge(o,e){return!e||!o.entities?[]:to(o).areas.get(e)??[]}var Pf={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ef=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),If=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Rf(o,e){let t=o.entities?.[e]?.device_id,n=t&&!to(o).hubs.has(t)?to(o).domains.get(t):void 0;return n&&[...n].some(i=>Ef.has(i))?!1:!If.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function Yr(o,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let r=Pf[n],s=(h,_)=>U([h,_],t.points),a=e?.placements.filter(h=>h.entity_id.startsWith("sensor."))??[],l=a.filter(h=>s(h.x,h.z)).map(h=>h.entity_id),c=new Set(a.filter(h=>!s(h.x,h.z)).map(h=>h.entity_id)),d=[...new Set([...ge(o,t.area_id).filter(h=>!c.has(h)),...l])],u=d.filter(h=>h.startsWith("sensor.")&&o.states[h]?.attributes.device_class===r&&(t.outdoor||Rf(o,h)));if(u.length)return u;let p=xc[n];return p?d.filter(h=>h.startsWith("climate.")&&typeof o.states[h]?.attributes[p]=="number"):[]}var xc={temperature:"current_temperature",humidity:"current_humidity"};function Hf(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let r=xc[t],s=r?Number(n?.attributes[r]):Number.NaN;return t==="temperature"?Ot(s,He(o)):s}let i=Number(n?.state);return t==="temperature"?Ot(i,n?.attributes.unit_of_measurement):i}function He(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function Ot(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function nt(o,e){return He(o)==="\xB0F"?e*9/5+32:e}function ht(o,e,t,n){let i=Yr(o,e,t,n).map(r=>Hf(o,r,n)).filter(r=>Number.isFinite(r));return i.length?i.reduce((r,s)=>r+s,0)/i.length:null}function kc(o,e){return!!o.entities&&to(o).hubs.has(e)}function Qr(o,e){return o.entities?to(o).power.get(e)??[]:[]}function j(o,e,t){let i=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&i.length>t.length+1&&i.toLowerCase().startsWith(t.toLowerCase()+" ")){let r=i.slice(t.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function Jr(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||K(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let i=Number(n);return Number.isFinite(i)?i>0:null}function K(o){return!o||o.state==="unavailable"||o.state==="unknown"}var Ff=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Xr(o){return!!o&&Ff.has(o.toLowerCase())}function no(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Zr(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function ze(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Zr(o.state)||o.state==="returning";switch(B(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return Cf(o);case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return no(o)&&Xr(String(o.state));default:return!1}}function Cf(o){let e=o.attributes;return e.hvac_action!==void 0&&e.hvac_action!==null?e.hvac_action==="heating"||e.hvac_action==="cooling":typeof e.temperature!="number"||typeof e.current_temperature!="number"?!1:o.state==="heat"?e.current_temperature<e.temperature:o.state==="cool"?e.current_temperature>e.temperature:!1}function $c(o,e){if(!o||K(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function Sc(o){if(!o||K(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],i=["heating","cooling","drying","fan"].includes(t);return{color:n,level:i||!t?1:.45}}function Mc(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),c=Math.min(...a),d=l-c;return l<=0||d/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/d+6)%6:l===a[1]?(a[2]-a[0])/d+2:(a[0]-a[1])/d+4)*60,d/l]},[i]=n(t),[r]=n(o.color);if(i<0||r<0)return i<0&&r<0?o:null;let s=Math.abs(i-r);return Math.min(s,360-s)<=30?o:null}function ot(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,i=t.rgb_color,r;return i&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?r=[i[0]/255,i[1]/255,i[2]/255]:typeof t.color_temp_kelvin=="number"?r=zf(t.color_temp_kelvin):r=[1,.71,.28],{color:r,level:n}}function zf(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function bn(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Of=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Df=new Set(["garage","gate"]),Lf=new Set(["window","opening"]);function eo(o,e,t=!1){let n=new Map;return e.length&&o.forEach((i,r)=>{let s=t&&e.length===1?e[0]:e[r];s&&n.set(i.id,s)}),n}function oo(o,e){let t=new Map,n=(r,s)=>r==="none"?null:r??s??null,i=(r,s,a)=>{let l=n(r.cover,s);return{cover:l,contact:r.sensor==="handle"&&r.contact==null?null:n(r.contact,a),tilt:r.tilt==="none"?null:r.tilt,contact2:r.leaves===2&&r.contact2&&r.contact2!=="none"?r.contact2:null,lock:(r.type==="door"||r.type==="window"&&r.sill<=.01)&&r.lock&&r.lock!=="none"?r.lock:null,tilt2:r.leaves===2&&r.tilt2&&r.tilt2!=="none"?r.tilt2:null,position:l&&B(l)==="cover"&&r.position&&r.position!=="none"?r.position:null,positionInverted:!!r.position_inverted,tiltAngle:r.tilt_angle&&r.tilt_angle!=="none"?r.tilt_angle:null,tiltMax:r.tilt_max??null,tiltOffset:r.tilt_offset??null,tiltInvert:!!r.tilt_invert,shut:!!r.shut,...r.contact_invert?{contactInvert:!0}:{}}};for(let r of e){for(let s of r.rooms){let a=r.openings.filter(w=>w.room_id===s.id).sort((w,x)=>w.edge-x.edge||w.offset-x.offset);if(!a.length)continue;let l=ge(o,s.area_id),c=w=>o.states[w]?.attributes.device_class,d=l.filter(w=>B(w)==="cover"&&Of.has(c(w))),u=a.filter(w=>w.type==="window"),p=a.filter(w=>w.type==="door"),h=a.filter(w=>w.type==="garage"),_=eo(u,d,!0),b=eo(u,l.filter(w=>B(w)==="binary"&&Lf.has(c(w)))),m=eo(p,l.filter(w=>B(w)==="binary"&&c(w)==="door")),f=eo(h,l.filter(w=>B(w)==="cover"&&Df.has(c(w)??""))),v=eo(h,l.filter(w=>B(w)==="binary"&&c(w)==="garage_door"));for(let w of a){let x=w.type==="window"?_:w.type==="garage"?f:null,A=w.type==="window"?b:w.type==="garage"?v:m;t.set(w.id,i(w,x?.get(w.id),A.get(w.id)))}}for(let s of r.openings)t.has(s.id)||t.set(s.id,i(s))}return t}var Wf=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Nf(o){if(!o||K(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Wf.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}var Vf=new Set(["unlocked","unlocking","open","opening"]);function es(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var Bf=.5;function it(o,e,t="window"){e.cover&&es(e.cover)&&(e={...e,cover:null,position:null});let n=e.lock?o.states[e.lock]:void 0,i=n&&Vf.has(n.state)?{unlocked:!0}:{},r=v=>!!v&&o.states[v]?.state==="on",s=v=>!!v&&!!o.states[v]&&!K(o.states[v]),a=v=>v?Nf(o.states[v]):null,l=v=>{let w=a(v);return e.contactInvert&&v&&v!==e.tilt&&v!==e.tilt2&&w!=="tilted"&&w?w==="open"?"closed":"open":w},c=r(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",d=l(e.contact2)==="open"&&!c?1:0,u=r(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=u?1:0,h=e.tiltAngle?Number(o.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(h)){let v=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,v/(e.tiltMax||15))),p<.08&&(p=0),u=p>0}let _=l(e.contact)==="open"&&!u?1:0,b=null,m=e.cover?o.states[e.cover]:void 0,f=Tc(o,e.position);if(f!==null)b=e.positionInverted?f:1-f;else if(m&&!K(m)){let v=m.attributes.current_position;typeof v=="number"?b=1-Math.min(100,Math.max(0,v))/100:b=m.state==="closed"?1:m.state==="opening"||m.state==="closing"?.5:0}else e.cover&&(b=0);if(t==="door"){let v=l(e.contact);return b!==null&&m&&Cc.has(String(m.attributes.device_class??""))?{open:v===null?1-b:v==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...i}:{open:v===null?e.shut?0:Bf:v==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:b,sensed:v!==null||b!==null,...i}}if(t==="garage"){let v=l(e.contact),w=b!==null||v!==null;return b===null&&(b=v===null||v==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:b,sensed:w}}return{open:_,open2:d,tilt:p,tilt2:c?1:0,cover:b,sensed:s(e.contact)||s(e.tilt)||Number.isFinite(h),...i}}function Tc(o,e){let t=e?o.states[e]:void 0;if(!t||K(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,i?n/100:n))}function ts(o,e){let t=new Map,n=[];for(let s of e){let a=B(s)==="camera"?`camera:${s}`:o.entities?.[s]?.device_id??`entity:${s}`,l=t.get(a);l||(t.set(a,l=[]),n.push(a)),l.push(s)}let i=n.map(s=>{let a=t.get(s),l=a.find(c=>!o.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),r=new Map(e.map((s,a)=>[s,a]));return i.sort((s,a)=>r.get(s.primary)-r.get(a.primary))}function si(o,e){return ts(o,e).map(t=>t.primary)}var Gr={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Uf=/(cam|doorbell|klingel|tür|door|entry|cctv)/i,Ac=new Set(["tv_board","tv_wall"]);function Pc(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function Ec(o){return Ac.has(o)||!!Ll(o)}function ai(o){return Ec(o)||o==="desk"||o==="fridge_smart"}function wn(o,e){let t=new Set,n=Dt(o,e),i=e.some(r=>r.openings.some(s=>s.confirm))?oo(o,e):null;for(let r of e){for(let s of r.placements)s.confirm&&t.add(s.entity_id);for(let s of r.openings){let a=s.confirm?i?.get(s.id)?.cover:null;a&&a!=="none"&&t.add(a)}for(let s of r.furniture){let a=s.confirm?n.get(s.id)?.entity:null;if(a&&a!=="none"&&t.add(a),s.confirm)for(let l of s.gangs??[])l.entity&&l.entity!=="none"&&t.add(l.entity)}}return t}function Ic(o,e){let t=new Map;for(let n of e)for(let i of n.furniture){if(i.type!=="awning"&&!Qo(i.type))continue;let r=i.entity&&i.entity!=="none"?i.entity:null,s=r?o.states[r]:void 0,a=i.awning_time??20;if(!s||K(s)){t.set(i.id,{out:0,moving:0,time:a});continue}let l=p=>i.awning_invert?1-p:p,c=Tc(o,i.awning_position&&i.awning_position!=="none"?i.awning_position:null),d=s.attributes.current_position,u=s.state==="opening"?i.awning_invert?-1:1:s.state==="closing"?i.awning_invert?1:-1:0;c!==null?t.set(i.id,{out:l(c),moving:0,time:a}):typeof d=="number"&&Number.isFinite(d)?t.set(i.id,{out:l(Math.min(1,Math.max(0,d/100))),moving:0,time:a}):u?t.set(i.id,{out:null,moving:u,time:a}):t.set(i.id,{out:l(s.state==="open"||s.state==="on"?1:0),moving:0,time:a})}return t}function ns(o,e){let t=i=>{if(!i||i==="none")return!1;let r=o.states[i]?.state;return r==="on"||r==="open"},n=new Map;for(let i of e)for(let r of i.furniture)r.type==="fridge_smart"&&n.set(r.id,{left:t(r.door_left),right:t(r.door_right)});return n}var _c={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function os(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function qf(o,e){if(os(o,e))return e;let t=o.entities?.[e]?.device_id;return t?Qr(o,t).find(n=>n!==e)??null:null}function Dt(o,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(r=>[r.entity,r.power]),...n.placements.map(r=>r.entity_id)].filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in _c,a=mn(r.type),l=Nl(r.type),c=s?_c[r.type]:Gr[r.type]??(hn(r.type)?Gr.robot_vacuum:a?Gr.radiator:l?Uf:void 0);if(!c&&r.entity==null&&r.power==null)continue;let d=n.rooms.find(b=>b.points.length>=3&&U([r.x,r.z],b.points))??(r.type==="awning"?Wr(n).find(b=>U([r.x,r.z],b.points)):void 0),u=d?si(o,ge(o,d.area_id)):[],p=b=>`${b} ${j(o,b)}`,h=r.entity==="none"?null:r.entity??null;if(r.entity==null){let b=u.filter(m=>!i.has(m));if(s){let m=b.filter(f=>B(f)==="light");h=m.find(f=>c.test(p(f)))??m[0]??null}else if(hn(r.type)){let m=d?.area_id??null;h=Object.keys(o.entities??{}).find(f=>f.startsWith("vacuum.")&&!i.has(f)&&!ri(o,f)&&tt(o,f)===m)??null}else if(l){let m=b.filter(f=>B(f)==="camera");h=m.find(f=>c.test(p(f)))??(m.length===1?m[0]:null)}else if(a||r.type==="ac_unit"){let m=b.filter(f=>B(f)==="climate");h=m.find(f=>c.test(p(f)))??m[0]??null}else if(Ec(r.type)){let m=b.filter(f=>B(f)==="media");h=m.find(f=>o.states[f]?.attributes.device_class==="tv")??m.find(f=>c?.test(p(f)))??(Ac.has(r.type)?m[0]??null:null)}else r.type==="awning"?h=b.find(m=>m.startsWith("cover.")&&(c?.test(p(m))||o.states[m]?.attributes.device_class==="awning"))??null:c&&(h=b.find(m=>["switch","media","fan"].includes(B(m)??"")&&c.test(p(m)))??null);h&&i.add(h)}let _=r.power==="none"?null:r.power??null;r.power==null&&(_=h?qf(o,h):null,!_&&c&&d&&!s&&(_=ge(o,d.area_id).find(m=>os(o,m)&&!i.has(m)&&c.test(p(m)))??null),_&&i.add(_)),(h||_)&&t.set(r.id,{entity:h,power:_})}}return t}function is(o){if(!o)return null;let e=String(o.state).toLowerCase();return e==="unavailable"?!1:e==="unknown"||e===""?null:!["off","disconnected","offline","not_home","disabled","down","isolated"].includes(e)}function rs(o){if(!o||o.state!=="on")return 0;let e=o.attributes.percentage;return typeof e=="number"&&Number.isFinite(e)?Math.max(0,Math.min(1,e/100)):.6}function ss(o){if(!o||o.state==="off"||o.state==="standby"||K(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Rc(o,e,t,n=[]){let i=(u,p)=>U([u,p],t.points),r=Dt(o,[e]),s=oo(o,[e]),a=[...e.placements.filter(u=>i(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>i(u.x,u.z)).flatMap(u=>[r.get(u.id)?.entity,r.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let p=s.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(t.hidden??[]),c=[...new Set(a)].filter(u=>!l.has(u)),d=new Set(c);return{shown:c,more:ge(o,t.area_id).filter(u=>!d.has(u)&&!l.has(u))}}var bc=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,jf={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function li(o,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,i=n(t.device)??n(e.entity),r=i?o.entities?.[i]?.device_id:null,s=r&&o.entities?Object.values(o.entities).filter(u=>u.device_id===r).map(u=>u.entity_id):[],a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,p,h)=>s.find(_=>p.includes(_.split(".")[0])&&jf[u].test(a(_))&&(!h||h(_)))??null,c=u=>String(o.states[u]?.attributes.unit_of_measurement??""),d=u=>String(o.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??s.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(u=>u.startsWith("device_tracker."))??null}}function Kf(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function io(o,e){let t=li(o,e),n=m=>m?o.states[m]:void 0,i=m=>{let f=Number(n(m)?.state);return m&&Number.isFinite(f)?f:null},r=i(t.soc),s=i(t.range),a=n(t.charging),l=String(a?.attributes.unit_of_measurement??""),c=a&&/^k?W$/.test(l)?(i(t.charging)??0)*(l==="kW"?1e3:1):null,d=c!==null?c>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),u=n(t.plugged),p=n(t.lock),h=n(t.climate),_=n(t.tracker),b=_?.state.toLowerCase()??"";return{entities:t,soc:r!==null?Math.max(0,Math.min(100,r)):null,range:s,rangeUnit:String(n(t.range)?.attributes.unit_of_measurement??"km"),chargingW:c,charging:d,plugged:u?u.state==="on":null,locked:p?Kf(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:_&&b!=="home"&&!K(_)?b==="not_home"?"":_.state:null}}function Hc(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(li(o,n)))).filter(t=>!!t)}function ro(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(bc.test(i.translation_key??"")||bc.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function wc(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Fc(o,e,t,n){let i=t?o.states[t]?.attributes:void 0;for(let r of[n?o.states[n]?.state:void 0,i?.current_room,i?.room,i?.current_segment]){let s=as(o,e,r);if(s)return s}return null}function as(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=wc(t);if(!n)return null;let i=r=>[r.name,r.area_id??"",r.area_id&&o.areas?.[r.area_id]?.name||""].map(wc).filter(Boolean);return e.find(r=>i(r).includes(n))??e.find(r=>i(r).some(s=>s.length>=3&&(s.includes(n)||n.includes(s))))??null}var Cc=new Set(["garage","gate","door"]);function ls(o,e){let t=new Set,n=new Set,i=r=>{if(!r||r==="none"||!o.states[r])return;let s=B(r);s==="light"?t.add(r):s==="cover"&&!Cc.has(String(o.states[r].attributes.device_class??""))&&n.add(r)};for(let r of e.rooms){let s=new Set(r.hidden??[]);for(let a of si(o,ge(o,r.area_id)))s.has(a)||i(a)}for(let r of e.placements)i(r.entity_id);for(let r of e.furniture)i(r.entity);return{lights:[...t],covers:[...n]}}function zc(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Oc(o,e,t){let n=t.target?.trim()??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[i,r]=n.split(".",2);o.callService(i,r,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var ci=class{waiting=[];onChange=null;get current(){return this.waiting[0]?.req??null}ask(e){return new Promise(t=>{this.waiting.push({req:e,resolve:t}),this.waiting.length===1&&this.onChange?.()})}answer(e,t=""){let n=this.waiting.shift();n&&(n.resolve({ok:e,value:t}),this.onChange?.())}},di=globalThis;function Dc(o){di.__fp3dAskFactory||(di.__fp3dAskFactory=o)}function Gf(){return di.__fp3dAskHost??di.__fp3dAskFactory?.()??null}var Yf={ok:!1,value:""};function cs(o){let e=Gf();return e?e.ask(o):Promise.resolve(Yf)}async function Lt(o,e){return(await cs({text:o,...e})).ok}async function ds(o,e,t){let n=await cs({text:o,input:e,...t}),i=n.value.trim();return n.ok&&i?i:null}async function so(o,e){await cs({text:o,ok:e.ok})}var Lc=globalThis;function Qf(o){let e=o??{};return String(e.message??e.error?.message??e.code??o)}var Wc;function Jf(o){if(Lc.__fp3dFailureSink)return Lc.__fp3dFailureSink(o);if(typeof document>"u")return;let e=document.fullscreenElement;for(;e?.shadowRoot?.fullscreenElement;)e=e.shadowRoot.fullscreenElement;let t=e??document.body,n=t.querySelector(":scope > .fp3d-failure");n||(n=document.createElement("div"),n.className="fp3d-failure",n.setAttribute("role","alert"),n.style.cssText="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483000;max-width:min(92vw,520px);padding:12px 16px;border-radius:12px;background:#8a1f1f;color:#fff;font:14px/1.35 system-ui,sans-serif;box-shadow:0 6px 24px rgba(0,0,0,.45);",t.appendChild(n)),n.textContent=o,clearTimeout(Wc),Wc=setTimeout(()=>n.remove(),6e3)}function Wt(o,e,t,n,i){let r=s=>Jf(i(Qf(s)));try{Promise.resolve(o.callService(e,t,n)).catch(r)}catch(s){r(s)}}async function ui(o,e,t,n){let i=e?o.filter(r=>e.has(r)):[];return i.length?n(i.map(t).join(", ")):!0}var Ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vn=o=>(...e)=>({_$litDirective$:o,values:e}),ft=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Db}=_l;var Nc=o=>o.strings===void 0;var Xf={},Vc=(o,e=Xf)=>o._$AH=e;var Bc=vn(class extends ft{constructor(o){if(super(o),o.type!==Ue.PROPERTY&&o.type!==Ue.ATTRIBUTE&&o.type!==Ue.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Nc(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[e]){if(e===Re||e===y)return e;let t=o.element,n=o.name;if(o.type===Ue.PROPERTY){if(e===t[n])return Re}else if(o.type===Ue.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return Re}else if(o.type===Ue.ATTRIBUTE&&t.getAttribute(n)===e+"")return Re;return Vc(o),e}});var us={bg:"#070b14",bg2:"#0d1424",chrome:"rgba(14, 21, 38, 0.86)",chromeSolid:"#0f1729",line:"rgba(120, 170, 255, 0.16)",text:"#e6eefc",muted:"#8a9bb8",accent:"#37e0ff",accentText:"#041018",soft:"#5b7cff",warm:"#ffb547",danger:"#ff6b8b",shadow:"0 8px 30px rgba(0, 0, 0, 0.5)",colorScheme:"dark"},Uc={bg:"#eef2f8",bg2:"#e3e9f2",chrome:"rgba(255, 255, 255, 0.88)",chromeSolid:"#ffffff",line:"rgba(30, 60, 110, 0.18)",text:"#132036",muted:"#4a5a74",accent:"#0b7a99",accentText:"#ffffff",soft:"#3d5bd9",warm:"#a35f00",danger:"#c4224a",shadow:"0 6px 22px rgba(20, 40, 80, 0.16)",colorScheme:"light"};function yn(o){return o==="day"}function qc(o){let e=t=>t.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`);return Object.entries(o).map(([t,n])=>`--fp3d-s-${e(t)}: ${n};`).join(`
`)}var jc=o=>o.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),Zf=Object.keys(us).filter(o=>o!=="colorScheme").map(o=>`--fp3d-${jc(o)}: var(--fp3d-s-${jc(o)}, ${us[o]});`).join(`
`),We=Me`
  :host {
    ${Ke(Zf)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${Ke(qc(Uc))}
  }
`,Ye=Me`
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
`;var ps="fp3d-ask-dialog";function em(){let o=document.activeElement;for(;o?.shadowRoot?.activeElement;)o=o.shadowRoot.activeElement;return o}function tm(){let o=document.fullscreenElement;for(;o?.shadowRoot?.fullscreenElement;)o=o.shadowRoot.fullscreenElement;return o??document.body}var hs=class extends ye{queue=new ci;typed="";shown=null;returnFocus=null;constructor(){super(),this.queue.onChange=()=>this.requestUpdate()}ask(e){return this.queue.ask(e)}answer(e){let t=this.queue.current;t&&this.queue.answer(e||t.cancel===void 0,t.input!==void 0?this.typed:"")}key(e){e.stopPropagation(),e.key==="Escape"?(e.preventDefault(),this.answer(!1)):e.key==="Enter"&&e.target.tagName==="INPUT"&&(e.preventDefault(),this.answer(!0))}willUpdate(){let e=this.queue.current;e!==this.shown&&(e&&!this.shown&&(this.returnFocus=em()),this.typed=e?.input??"",this.toggleAttribute("open",!!e))}updated(){let e=this.queue.current;if(e===this.shown)return;if(this.shown=e,!e){this.returnFocus?.focus?.(),this.returnFocus=null;return}let t=this.renderRoot.querySelector("input");t?(t.focus(),t.select()):this.renderRoot.querySelector(e.danger&&e.cancel!==void 0?".ask-cancel":".ask-ok")?.focus()}render(){let e=this.queue.current;return e?g`<div class="backdrop" @click=${()=>this.answer(!1)}></div>
      <div class="box ${e.detail!==void 0?"wide":""}" role=${e.cancel===void 0?"dialog":"alertdialog"} aria-modal="true" aria-describedby="ask-text" @keydown=${t=>this.key(t)}>
        <p id="ask-text" class="text">${e.text}</p>
        ${e.detail!==void 0?g`<textarea class="detail" readonly rows="14" spellcheck="false" aria-labelledby="ask-text" .value=${e.detail}></textarea>`:y}
        ${e.input!==void 0?g`<label class="fp3d-field"><input type="text" aria-labelledby="ask-text" .value=${Bc(this.typed)} @input=${t=>this.typed=t.target.value} /></label>`:y}
        <div class="buttons">
          ${e.cancel!==void 0?g`<button class="fp3d-btn ask-cancel" @click=${()=>this.answer(!1)}>${e.cancel}</button>`:y}
          <button class="fp3d-btn ask-ok ${e.danger?"ask-danger":"fp3d-primary"}" @click=${()=>this.answer(!0)}>${e.ok}</button>
        </div>
      </div>`:y}static styles=[We,Ye,Me`
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
    `]};customElements.get(ps)||customElements.define(ps,hs);var ao=null;Dc(()=>typeof document>"u"?null:{ask(o){ao??=document.createElement(ps);let e=tm();return ao.parentNode!==e&&!ao.queue?.current&&e.appendChild(ao),ao.ask(o)}});var nm={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of Home 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows Home 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",update_ready:"Home 3D has been updated. Reload to use the new version.",update_saving:"Your changes are still being saved; the reload waits for them.",update_unsaved:"Your last changes are not saved yet. Reloading waits until they are, or they would be lost.",needs_restart_old:"A new version of Home 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_found_old:"Unsaved changes from {time} found. They were kept by an older version that did not note their home: they are offered for the home shown on displays.",draft_restore:"Restore and save",draft_discard:"Discard",save_conflict:"Someone else changed this home while you were editing. It now shows their version; your changes are kept here.",draft_restore_conflict:"Use mine (theirs stays as a restore point)",walls_auto:"Tall walls",walls_cut:"Cut",plan_view:"2D or 3D",view_3d:"3D",view_2d:"2D",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",copy_items:"Copy",paste_items:"Paste",paste_items_n:"Paste ({n})",help_key_copy:"Copy the chosen items (inside the editor only, not the system clipboard)",help_key_paste:"Paste the copied items on this floor",help_key_select_all:"Choose every item on this floor",item_floor_hint:"Moves the item, with its links, to another floor",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_label:"From Home Assistant:",area_rooms_note:`Uses this Home Assistant's areas; the rooms are added to "{home}".`,first_floor_add:"Add your first floor",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",floor_order_hint:'Only changes the order of the floors in the list and the floor pictures. Where a floor sits in the 3D house comes from its "height above the ground".',default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",resize_carried:"Moved with the room: {n} items and devices, {w} neighbouring walls.",resize_outline_only:"Outline only",resize_outline_only_hint:"Keep the new outline; items, devices and neighbouring walls stay where they were",resize_outside:"{n} items now outside the room",resize_outside_one:"1 item now outside the room",resize_select:"Select them",redo:"Redo",fit_all:"Fit everything",fit_all_hint:"Bring the whole plot into view: the garden, paths and everything standing outside",split_fold_hint:"Close the 3D view beside the plan",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",items_list:"Items",item_hide:"Hide in the plan",item_show:"Show in the plan again",hint_place:"Click the plan to place {name} there \xB7 Shift: place more \xB7 Alt: no snapping \xB7 Esc cancels",place_armed:"{name}: click the plan where it should go.",place_middle:"Place in the middle",place_middle_room:"Place in the middle of {room}",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_ask:"Pipe laid \u2013 on to the pool? Then a hole with the way outside goes here:",tech_ask_loose:"Leave it open",tech_step_tee:"Tap the pipe where the branch goes \u2013 it is cut there, and from the T-piece you draw the next line.",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Like a pen: press on a device and draw the line \u2013 wiggles go, the pipes run level and upright. A stroke ending on a device or pipe joins there; one ending on nothing is asked where it goes (skimmer, bottom drain, inlets, waste) and Home 3D lays the hole and the way outside itself.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",modes:"Mode",all_settings:"All settings",settings_moved_energy:"Meters, tariff, cheap rate and the hologram are on the Settings page.",settings_moved_bins:"When bins glow and which carry a tag is set for all bins on the Settings page.",side_resize:"Drag the side bar wider or narrower",furn_extra:"Extra value at the symbol (sensor, e.g. water temperature)",settings_house:"House",settings_weather:"Weather & warnings",roof_basics:"Roof shape",roof_whole:"Roof (whole building)",roof_whole_hint:"One roof for the whole house, not for one floor.",roof_floor_pick:"Floor shown",roof_floor_pick_hint:"Only picks which floor the plan shows to draw along; the roof is the whole building's",voice_sentences_kept:"You changed the sentence file for {langs} yourself \u2013 Home 3D leaves it alone.",voice_sentences_failed:"The sentence file could not be written.",voice_sentences_file:"Home 3D creates the file custom_sentences/<language>/home_3d.yaml only when you pick sentences here. A file you changed yourself is never overwritten; removing the integration deletes Home 3D's file.",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",help:"Help",help_overlay_title:"Help: keys and plan marks",rack_edit:"Edit rack",rack_front_view:"Front view",rack_used:"{used} of {u}U used",rack_view_close:"Close",rack_unit:"U{n}",rack_at:"At U{u}",rack_up:"One U up",rack_down:"One U down",rack_move:"Move",rack_move_hint:"Tap the lowest U it should go to.",rack_add:"Add gear",rack_add_hint:"Tap the lowest U it should go to.",rack_no_gear:"No rack-mount gear for this rack in the packs.",rack_read_only:"Only editors change what is in the rack.",rack_overlap:"Something is already there.",rack_outside:"It doesn't fit in the rack there.",rack_too_deep:"Too deep for this rack.",rack_wrong_width:"Made for the other rack width.",rack_not_gear:"That isn't rack-mount gear.",rack_full:"No more gear fits in one rack.",rack_missing:"That gear is no longer in the rack.",rack_no_rear:"No rear rails.",rack_no_lane:"No room beside the rails.",rack_no_shelf:"Not on a shelf.",rack_shelf_full:"The shelf is full.",rack_too_tall:"Too tall.",rack_not_loose:"Not for shelves.",rack_totals:"{used}U used \xB7 {free} free",rack_watts_about:"\u2265 {w} W",rack_face_front:"Front",rack_face_rear:"Rear",rack_lane_hint:"Tap a side lane.",rack_full_depth:"full depth",rack_on_shelf:"Put on it",rack_no_loose:"Nothing fits.",rack_width_half:"\xBD",rack_width_third:"\u2153",rack_misfits:"{n} no longer fit:",rack_frame_pick:"Rack frame",rack_status_online:"Online",rack_status_warning:"Warning",rack_status_offline:"Offline",rack_unlinked:"Not linked to Home Assistant",rack_ha_device:"HA device",rack_status_from:"Status from",rack_links:"Linked",rack_link_add:"Add entity",rack_suggested:"From the same device",help_open:"Help and shortcuts (?)",help_shortcuts:"Keyboard shortcuts",help_legend:"Marks on the plan",help_key_undo:"Undo",help_key_redo:"Redo",help_key_duplicate:"Duplicate the selection (an item, else the room)",help_key_delete:"Delete the selection",help_key_nudge:"Nudge the selection one grid step (Shift 10 cm, Alt 1 cm)",help_key_rotate:"Turn an item 90\xB0 (Shift: the other way)",help_key_lock:"Fix or free an item or device",help_key_multi:"Select several items",help_key_pick_through:"Click without moving: pick the next item in the stack below (Alt-drag moves the selected one freely)",help_key_close_shape:"Close the shape while drawing (Backspace removes the last corner)",help_key_escape:"Cancel, back to Select, clear the selection",help_key_snap:"While dragging: Shift keeps a line straight, Alt drags without snapping",snap_mid:"mid",snap_end:"end",snap_equal:"= {d}",snap_corner:"{d} from corner",snap_room:"room centre",snap_centre:"centres",snap_edge:"edges",hint_snapped:"Snapped: {what} \xB7 hold Alt to move without snapping",snap_off_tip:"Hold Alt while dragging to turn snapping off",help_key_help:"Show or hide this help",help_legend_swing:"Orange dashed arc: where a door swings open. Shown only for the selected door.",help_legend_track:"Orange dashed lines at a garage door: its tracks under the ceiling (selected only).",help_legend_guide:"Pink dashed line: lined up with a corner while drawing or dragging",help_legend_snap:"Pink circle: the point snaps here",help_legend_ghost:"Grey dashed outlines: the rooms of the floor below",help_legend_selected:"Light blue: what is selected",ask_ok:"OK",backup:"Backup",editors_title:"Editors",editors_hint:"Who may change the plan. Everyone else sees the house and controls devices, without the editor. Until you pick, every admin is an editor.",editors_admin:"admin",editors_reset:"Back to: every admin",tablet_users:"Wall tablet (locked view)",tablet_users_hint:"Ticked users see only the home name, the floors and the View menu: no editor, no view settings. A single device works with ?tablet in the address too; ?tablet=0 switches it off there again.",tablet_idle:"Back to the whole house after (s, 0 = never)",editors_no_admin:"At least one admin must stay an editor.",editors_failed:"The editors could not be saved.",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_restore_missing:"{n} of its pictures are no longer kept; it restores without them.",backup_restored_missing:"Restored without {n} pictures that are no longer kept.",service_failed:"That did not work: {error}",picture_failed:"The picture could not be saved: {error}",restore_failed:"The restore point could not be restored: {error}",pack_remove_failed:"The pack could not be removed: {error}",backup_file:"File",backup_export:"Export with device links",backup_export_share:"Export without device links",backup_export_share_hint:"Shareable: no areas, devices, sensors, buttons or images \u2013 nothing that shows how your house is wired.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no Home 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again.",backup_admin_only:"Only a Home Assistant administrator can import a backup or restore an earlier version: it replaces the whole plan, actions included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full Home 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_import_partial:"Restoring stopped at \u201C{home}\u201D: {error}. Restored before it: {done} (each keeps its state before as a restore point). Packs and your own items are unchanged.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",item_actions:"Own actions",item_actions_hint:'What a tap, a hold and a double tap do in 3D. "Default" keeps the usual behaviour for this kind of device. Everything runs through Home Assistant; anyone who can see the view can use them.',item_action_perform_admin:"Only a Home Assistant administrator can add or change a perform action. You can replace one with another action.",item_gesture_tap:"Tap",item_gesture_hold:"Hold",item_gesture_double_tap:"Double tap",item_action_default:"Default",item_action_none:"Nothing",item_action_toggle:"Toggle",item_action_more_info:"Open details",item_action_camera:"Open camera",item_action_navigate:"Open a dashboard page",item_action_url:"Open an address",item_action_perform_action:"Perform an action",item_target_toggle:"Entity (empty = its own)",item_target_more_info:"Entity (empty = its own)",item_target_camera:"Camera (empty = its own)",item_target_navigate:"Path",item_target_url:"Address",item_target_perform_action:"Action (domain.service)",item_action_confirm:"Ask first",item_action_confirm_text:"Question",item_action_confirm_placeholder:"Are you sure?",action_confirm_title:"Confirm",action_confirm_ok:"Do it",action_confirm_default:"{name}: are you sure?",action_this_item:"This item",action_failed:"The action failed: {error}",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Start here: add your first floor with the Floor menu at the top left.",hint_first_room:"Next: draw your first room \u2013 Build \u203A Room, then drag a rectangle on the plan",hint_sel_furniture:"Drag to move \xB7 corners resize \xB7 R turns \xB7 L fixes \xB7 Del deletes \xB7 Esc deselects",hint_sel_opening:"Drag along the wall to move it \xB7 arrow keys nudge \xB7 kind and size are on the right \xB7 Del deletes",hint_sel_device:"Drag to move the device \xB7 arrow keys nudge \xB7 L fixes \xB7 Del deletes",hint_help:"Help",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Home 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_model:"Camera model",camera_model_hint:"The real shape of the camera in 3D (looks only: the live view and the actions stay). Domes and turrets hang from the ceiling, the others sit on a wall.",camera_model_found:"{name} (as the device reports)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_detect_choose:"Choose the detection sensors yourself",camera_detect_choose_hint:"Only the ticked sensors count for pins, the motion trail and the live director \u2013 sensors of another device too, e.g. Frigate's person sensor for a Reolink camera. Without the tick Home 3D takes every sensor on the camera's device.",camera_detect_add:"Add a sensor",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the camera turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View settings: quality, look, lighting, markers, size",view_btn:"View",view_group_lighting:"Lighting",view_group_size:"Size",view_group_controls:"Controls",follow_ha:"Follow Home Assistant",follow_sun:"By the sun",follow_now:"now {look}",sun_and_lights:"Sun and lights \u2026",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',view_settings:"Settings",view_settings_admin:"Only administrators can change these settings \u2013 they apply to the whole house.",view_settings_look:"Look",view_settings_alerts:"Warnings",view_settings_more:"Every other setting is on the Settings page (\u2699 tab at the top).",lines_add:"Add",lines_new:"New entry \u2026",sheet_mic:"Speak",sheet_listening:"Listening \u2026",sheet_mic_failed:"Nothing understood \u2013 the microphone needs HTTPS and a voice pipeline with speech-to-text.",card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back. A camera keeps its pin with all its camera settings; the model only joins it.",as_furniture_pick:"Pick furniture \u2026",camera_look_builtin:"Built-in camera model",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_button_admin:"Only a Home Assistant administrator can add or change a button that calls a service or fires an event.",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",hint_kerb_pick:"Kerb spot: click where the bin stands on collection day (Esc cancels)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_hint:"A screen shows by itself what happens in the house: the doorbell rings \u2013 the view flies to the front door and looks through its camera. Every event is off until you switch it on.",director_here:"Switch on on this device",director_here_hint:"Only for this browser, e.g. the wall tablet. On a dashboard card you switch the live director on in the card settings.",director_doorbell:"Doorbell rings: fly to the door and look through the camera",director_doorbell_entity:"Doorbell",director_doorbell_camera:"Camera at the door",director_no_doorbell:"No doorbell found. Choose your doorbell's event or binary sensor entity.",director_motion:"A camera sees someone",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",director_appliances:"Washer, dryer or dishwasher finished",director_alerts:"New warning (smoke, water, alarm, window in the rain \u2026)",director_hold:"Back after (seconds)",director_back_hint:"Then the view goes back to where it was \u2013 unless someone touched the screen meanwhile. Someone using the tablet is only interrupted by the doorbell and by warnings. The doorbell stays twice as long.",voice:"Voice control",voice_hint:"A microphone button at the bottom left of the 3D view: tap it and speak. \u201CShow the living room\u201D, \u201Cupper floor\u201D or \u201Cthe whole house\u201D shows the place; anything else (\u201Cturn on the hall light\u201D) goes to Home Assistant's Assist.",voice_here:"Switch on on this device",aliases:"Further names for the voice",aliases_hint:'Further names, comma separated \u2013 so you ask for the "Smart TV Pro" as "living room TV" or "telly". Used by voice control and the search.',aliases_placeholder:"e.g. living room TV, telly",voice_understands:"What Home 3D understands",voice_examples:"\u201CShow the living room\u201D|\u201CGo to the upper floor\u201D|\u201CShow the whole house\u201D|\u201CShow the washing machine\u201D / \u201CWhere is the dryer?\u201D|\u201CShow the front door camera\u201D / \u201CShow the driveway camera\u201D|\u201CShow the cameras\u201D|Anything else (\u201Cturn on the hall light\u201D) goes to Assist",voice_needs:"Needs https, the microphone allowed (in Fully Kiosk: Web Content Settings \u2192 microphone access) and an Assist pipeline with speech to text. On a dashboard card you switch the button on in the card settings.",voice_showing:"Showing {name}.",voice_rack_hot:"{name}: {gear} is the hottest at {value}.",voice_rack_value:"{gear}: {what} {value}.",voice_rack_online:"{name}: {on} of {total} devices are online.",voice_rack_summary:"{name}: {list}.",voice_rack_missing:"{name} has no {what} linked.",voice_rack_unavailable:"{what} of {gear} is not available right now.",voice_rack_nothing:"{name} has nothing linked to Home Assistant.",screen_name:"Screen name (for Assist)",screen_name_placeholder:"e.g. Kitchen",screen_name_hint:'Asking Assist ("Show the living room") or an automation calling the service home_3d.ask reaches every open Home 3D view. When the service names a screen, only the view with that name reacts.',voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",director_mic_test:"\u{1F399}\uFE0F Test the microphone",director_mic_hint:"Checks https, the microphone and Assist's speech to text on this device and shows which room a sentence would open. Nothing is switched.",voice_pipeline:"Assist pipeline on this device",voice_sentences:"Sentences for Assist",voice_sentences_distinct:'Only distinct ones ("Show \u2026", "Ask the house \u2026", "Home 3D, \u2026")',voice_sentences_all:"All questions (also takes sentences Home Assistant answers itself)",voice_sentences_off:"None (default \u2013 no sentence file)",voice_sentences_hint:'What Assist hands to Home 3D. Questions like "Which windows are open?" are otherwise answered by Home Assistant itself \u2013 "Ask the house which windows are open" always reaches Home 3D.',voice_pipeline_preferred:"Preferred one in Home Assistant",voice_pipeline_no_stt:"no speech to text",backdrop:"Background",backdrop_kind:"Behind the house",backdrop_look:"The look's sky (default)",backdrop_color:"One colour",backdrop_gradient:"Gradient",backdrop_image:"Picture",backdrop_top:"Colour at the top",backdrop_bottom:"Colour at the bottom",backdrop_image_url:"Picture address",backdrop_dim:"Darken",backdrop_image_bad:"This address does not work: https://\u2026 or a path like /local/background.jpg",backdrop_hint:"Put the picture into config/www in Home Assistant, then it is /local/filename.jpg. Darkening keeps the neon lines readable. Costs no performance \u2013 old tablets too.",director_live:"Live picture when looking through",director_live_hint:"Instead of a still every few seconds the camera's video runs (through Home Assistant's player). Needs more power \u2013 better leave it off on very old tablets.",director_triggers:"Own triggers",director_triggers_hint:"When one of these entities goes on or open \u2013 a second doorbell, the garage door, the garden gate \u2013 the view flies there and looks through the camera chosen (without one: to the device).",director_trigger_entity:"Trigger",director_trigger_add:"+ Add a trigger",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",sun_shadow:"Sun arc and house shadow",sun_shadow_hint:`An arc over the house shows the sun's way today with sunrise and sunset, and the house's shadow lies on the ground and moves with the sun. Needs the north direction; on the "Tablet" level only the arc.`,window_glow:"Windows glow outside at night",window_glow_hint:"When it is dark outside, the light of lit rooms falls out of the windows as a warm glow onto the lawn and terrace in front \u2013 in the room's light colour, fainter behind lowered blinds.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_unavailable:"Contact unavailable: {name}",alert_short_contact_unavailable:"Contact unavailable",alert_unavailable:"Warn when a window or door contact is unavailable",alert_unavailable_hint:'When a contact has been "unavailable" for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. Then a warning shows.',alert_dismiss:"Dismiss this warning",alert_dismiss_now:"For now",alert_dismiss_now_hint:"Hidden until it clears; it shows again the next time it fires",alert_dismiss_good:"For good",alert_dismiss_good_hint:"Never warn about this device for this again (undo in \u2699 settings)",alert_dismiss_safety:"Safety warnings can only be dismissed for now",alert_ignored:"Ignored warnings",alert_ignored_hint:"Dismissed for good from the 3D view's banner. Restore one to be warned again.",alert_restore:"Restore",effects:"Live effects",effects_hint:"A wet leak sensor turns its room's floor red until it is dry; motion lights the room briefly; radiators and hot-water cylinders shade from cold blue to warm red.",effects_motion_seconds:"Motion lights a room for (s, 0 = off)",effects_camera_seconds:"A camera stays red after motion for (s)",effects_radiator_cold:"Radiator fully blue at",effects_radiator_hot:"Radiator fully red at",effects_tank_cold:"Cylinder fully blue at",effects_tank_hot:"Cylinder fully red at",room_live:"Leaks and motion",room_live_leak:"Leak sensor",room_live_motion:"Motion sensor",room_live_hint:"Automatic: every one of the room's area and those placed in the room. A wet leak sensor turns the floor red, motion lights the room briefly.",temp_sensor:"Temperature (shading)",temp_sensor_hint:"The item shades from cold blue to warm red with this temperature. Automatic: a temperature sensor at its symbol, its water heater, or its thermostat's own sensor.",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no Home 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_view:"2D/3D",card_view:"Starts as",card_view_3d:"3D view",card_view_2d:"2D plan (view only)",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_home:"Home",card_home_active:"The active home",home:"Home",home_show:"Make this the home shown on displays",home_new:"\uFF0B New home \u2026",home_new_name:"New home",home_sample:"Load the sample home",home_rename:"Rename \u2026",home_duplicate:"Duplicate \u2026",home_delete:"Delete \u2026",home_name_prompt:"Name of the home",home_copy_name:"{name} (copy)",home_delete_type:`Delete "{name}" with its plan, restore points and pictures? This cannot be undone. Type the home's name to delete it.`,home_delete_mismatch:`That is not the home's name, so "{name}" was not deleted.`,home_failed:"That did not work: {error}",demo_states:"Demo states",demo_states_hint:"Linked devices this Home Assistant does not have show fixed states (some lights on, heating on, solar producing). Real entities always win.",demo_chip:"Demo",demo_hint:"Sample home: devices this Home Assistant does not have show fixed demo states. Link them to real entities in the editor.",home_active_badge:"Active on displays",home_not_on_displays:"not shown on displays",home_live:"live on displays",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",room_order_up:"Move the room up (earlier in the room bar)",room_order_down:"Move the room down (later in the room bar)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_packs:"furniture packs ({items} items)",own_items_title:"Your own items",own_items_hint:"Build your own furniture from simple shapes. It stays in Home Assistant and everyone in the home finds it in the library. So far: {n}.",own_items_open:"Open the item editor",packs_hint:"A furniture pack is a folder with a pack.json and one JSON file per item (see docs/packs.md); every file is checked on import. To install from GitHub, paste the URL of the repository or of the pack folder in it. Old single-file packs still import.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",license_copy:"Copy",pack_import:"Import pack files \u2026",pack_import_folder:"Import a pack folder \u2026",pack_licence:"Licence: {licence}",pack_install_url:"Install from GitHub",pack_installing:"Installing \u2026",pack_from:"From",upd_title:"Pack updates",upd_intro:"Packs installed from GitHub are checked for new releases. A new release goes into the library; placed items keep their look until you update them.",upd_auto:"Update placed items automatically when a new release arrives",upd_frequency:"Check for new releases",upd_freq_off:"Never (only by hand)",upd_freq_daily:"Daily",upd_freq_weekly:"Weekly",upd_freq_monthly:"Monthly (on the 1st)",upd_time:"Time",upd_weekday:"Day",upd_day_0:"Monday",upd_day_1:"Tuesday",upd_day_2:"Wednesday",upd_day_3:"Thursday",upd_day_4:"Friday",upd_day_5:"Saturday",upd_day_6:"Sunday",upd_check_now:"Check now",upd_checking:"Checking \u2026",upd_last_check:"Last checked: {time}",upd_next_check:"Next check: {time}",upd_checked:"Checked \u2013 new releases: {n}",upd_none:"All placed items are up to date.",upd_item:"Release {from} \u2192 {to} \xB7 placed {n}\xD7",upd_update:"Update",upd_update_all:"Update all ({n})",upd_sum_updates:"with an update",upd_sum_pinned:"pinned",upd_pinned:"Pack pinned",pack_pin:"Pin release",pack_rollback:"Roll back to v{release}",pack_rollback_confirm:"Roll \u201C{name}\u201D back to v{release}? Placed items that took the last update go back too; the pack is pinned.",pack_latest:"Last check: v{release} on GitHub",pack_check_error:"Check failed: {detail}",pack_confirm_older_release:"{detail}. Install it anyway?",pack_confirm_pinned:"{detail}. Install this release anyway? The pack stays pinned.",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"The fun extras and your furniture packs. Everything runs locally in Home Assistant.",fun_title:"Fun packs",fun_intro:"Extras just for fun \u2013 switch them on and off here.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_name_halloween:"Halloween",fun_feature_halloween:"Pumpkins that glow with a light, a cobweb, bats, gravestones, a skeleton, a witch's cauldron and candles \u2013 and a ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Halloween". Pumpkin, cauldron and candles glow with a linked light.`,pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_fur_dilute_calico:"Dilute calico",pet_fur_blue_grey:"Blue-grey",pet_eyes:"Eyes",pet_eyes_dark:"Dark eyes",pet_eyes_copper:"Copper eyes",pet_eyes_green:"Green eyes",pet_eyes_yellow:"Yellow eyes",pet_eyes_blue:"Blue eyes",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",pet_mode:"Behaviour",pet_roaming:"Roams the house",pet_static:"Stays at its spot",pet_pose:"Pose",pet_pose_sit:"Sitting",pet_pose_lie:"Lying",pet_pose_curl:"Curled up",pet_turn:"Facing",pet_turn_auto:"Automatic",pet_static_hint:"Drag it to its spot in the plan editor.",ext_active:"active",ext_open:"Open extensions",manual:"Manual",ext_teaser_title:"More furniture and add-ons",ext_teaser_text:'Furniture packs and the fun extras are under "Extensions" at the top.',section_car:"Car",pool_pump:"Filter pump",pool_ph:"pH value",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is not available.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (time travel).",car_hint:'One entity of the car is enough: Home 3D finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pack_remove:"Remove",pack_bundled:"Comes with Home 3D",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan and keeps its look.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack: {detail}",pack_error_invalid_content:"The pack contains invalid data: {detail}",pack_error_too_large:"The pack is too large: {detail}",pack_error_too_many_items:"The pack has too many items: {detail}",pack_error_no_licence:"The pack declares no licence: {detail}",pack_error_not_data:"Packs hold data only (no code, pictures or links): {detail}",pack_error_no_pack:"There is no pack.json in this folder.",pack_error_needs_update:'This add-on needs a newer version of Home 3D. Please update first (HACS \u203A Home 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",pack_error_bad_url:"This is not a GitHub URL of a pack: {detail}",pack_error_not_found:"Not found on GitHub: {detail}",pack_error_fetch_failed:"Could not fetch from GitHub: {detail}",back_to_room:"Back to {room}",back_to_library:"Back to the library (add an item)",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_fc_rest:"Forecast, rest of today",holo_fc_tomorrow:"Forecast tomorrow",holo_self_use:"Used at home today",holo_exported:"Exported today",holo_actual:"Actual",holo_forecast:"Forecast",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What the energy page needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_formats:`Feet and inches: type 8' 2", 98in or 8.2ft (2.5m works too)`,units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add: {kind} (pick the kind on the right) \u2013 tap a door or window to select it, drag to slide it along the wall \xB7 Alt: no snapping",hint_opening_add:"Tap to add here: {kind}",hint_opening_select:"Tap to select: {kind}",opening_overlap:"Not added: it would overlap an existing opening ({kind}). Tap that one to select it.",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",style_sectional:"Sectional door",style_up_and_over:"Up-and-over door",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_area_hint:"With an area the surface acts like a room: a tap in 3D opens it with the area's devices, it is in the room bar and wears its name.",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_end:"End",roof_end_auto:"as the shape",roof_end_gable:"Gable",roof_end_hint:"How the ridge ends at this end: a gable (an upright wall), a hip or a half-hip \u2013 a hip at one end only, for example.",roof_swap:"Swap sides",roof_turn:"Turn",roof_turn_hint:"Turns this roof part in the plan (clockwise), e.g. for a wing at an angle. Dormers and cross gables on it turn along. 0\xB0 = as before.",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",devices_hide_all:"Hide all {n} in the room panel",devices_show_all:"Show all {n} again",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",opening_position_from:"Centre from {corner} corner (m)",opening_next_kind:"Next door or window",opening_change_to:"Change this opening to",rect_too_small:"The room must be at least {min} wide and deep.",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",sill_board:"Sill",sill_board_hint:"Automatic: a window board inside and a sill outside from a sill height of 30 cm; none for a window that sits directly on another one (transom light, split glass front).",sill_board_auto:"automatic",sill_board_none:"none",sill_board_inside:"inside only",sill_board_outside:"outside only",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_angle:"Opening angle",door_angle_hint:"How far the door stands open in 3D: without a sensor always, with one as soon as it reports open. Default: half open without a sensor, fully open with one.",door_angle_default:"Default",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",lib_room_all:"All rooms",lib_pack_all:"All packs",lib_room_living:"Living",lib_room_dining:"Dining",lib_room_kitchen:"Kitchen",lib_room_bedroom:"Bedroom",lib_room_kids:"Kids",lib_room_bath:"Bathroom",lib_room_office:"Office",lib_room_hall:"Hall",lib_room_utility:"Utility",lib_room_garage:"Garage",lib_room_garden:"Garden",lib_room_hobby:"Hobby & fitness",lib_room_conservatory:"Conservatory",lib_room_loft:"Loft",lib_kind_sofa:"Sofas",lib_kind_seating:"Seating",lib_kind_table:"Tables",lib_kind_storage:"Cabinets & shelves",lib_kind_bed:"Beds",lib_kind_kitchen:"Kitchen",lib_kind_appliance:"Appliances",lib_kind_bath:"Bathroom",lib_kind_lamp:"Lights",lib_kind_media:"TV & audio",lib_kind_office:"Office",lib_kind_tech:"Tech & smart home",lib_kind_network:"Network",lib_kind_heating:"Heating & climate",lib_kind_energy:"Energy",lib_kind_household:"Household",lib_kind_deco:"Decoration",lib_kind_tray:"Trays",lib_kind_frame:"Frames & pictures",lib_kind_vase:"Vases",lib_kind_cushion:"Cushions",lib_kind_throw:"Throws",lib_kind_candle:"Candles",lib_kind_plant:"Plants",lib_kind_outdoor:"Garden & outdoors",lib_kind_kids:"Kids",lib_kind_sport:"Fitness",lib_kind_pets:"Pets",lib_kind_vehicle:"Vehicles",lib_kind_stairs:"Stairs & railings",lib_kind_architecture:"Architecture",lib_recent:"Recently used",lib_favorites:"Favourites",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_chip_electric:"Linkable",lib_chip_light:"Lights up",lib_chip_outdoor:"Outdoors",lib_more:"Show {n} more",lib_update_title:"A newer release is installed: update the placed ones",lib_basic:"Basic",lib_sizes:"{n} sizes",lib_hint_room:"Suggested for the open room \u2013 switch above.",lib_filters:"Filters:",lib_clear_filters:"Clear filters",lib_other_rooms:"{n} more in other rooms",lib_hidden_by_filters:"{n} more hidden by filters",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_rise:"Rise (\xB0)",strip_rise_hint:"The strip rises along its length, e.g. up the stairs or along a handrail (~35\u201340\xB0). Its height above the floor is then its middle.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Bedside table",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Cooker",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV unit",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",furn_loft_ladder:"Loft ladder",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",walls_section:"Walls ({n})",walls_open_n:"{n} with no wall",walls_sloping_n:"{n} sloping",wall_slope:"Sloping",wall_slope_hint:"Sloping wall: a height of its own at each corner, the top runs straight between them \u2013 a lean-to, a slope, clerestory windows on the tall side. Windows and doors stay under the top.",wall_slope_start:"Height at corner {n} (m)",wall_slope_end:"Height at corner {n} (m)",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",furn_entity_camera:"Camera",furn_entity_heater:"Heating (thermostat or water heater)",furn_entity_sensor:"Sensor",furn_entity_car:"Car (charging, battery or location)",unplaced:"Unplaced entities",unplaced_hint:"Devices of your Home Assistant areas that the plan does not show yet. Place puts one into its area's room, or drag it onto the plan. A suggestion links it to an item in the room.",unplaced_none:"Everything is placed.",unplaced_no_room:"no room yet",unplaced_drag:"Drag onto the plan to place it there",unplaced_link:"Link to {name}",unplaced_hide:"Hide from this list",unplaced_hidden:"Hidden ({n})",unplaced_hidden_none:"Nothing hidden.",unplaced_unhide:"Unhide",unplaced_back:"Back to the list",lamp_hint:"Tap the lamp in 3D to switch it, long press for its Home Assistant details. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of Home 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"High contrast",theme_day:"Day",theme_realistic:"Realistic",theme_auto:"Auto (Day/Neon by the sun)",theme_theme:"HA theme (Day/Neon)",persons:"People",locate:"Locating",persons_figure:"Figure",persons_pin:"Pin",persons_off:"off",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_from:"Glow from (hour, the day before)",bin_until:"until (hour, on pickup day)",bin_out:"Put out (helper)",bin_out_hint:'Optional: on while the bin stands outside (input_boolean, switch or binary sensor). It then stops glowing and its tag says "put out \u2713"; a tap on the bin switches a helper or switch. A nightly automation turns it back off.',bin_out_done:"put out \u2713",bin_out_mark:"Mark as put out",bin_model_hint:'This bin is only a model. For a kerb spot and a waste calendar, add the "Waste bin" item from the Household group.',bin_kerb:"Kerb spot",bin_kerb_set:"Set kerb spot",bin_kerb_move:"Move kerb spot",bin_kerb_clear:"Remove",bin_kerb_hint:"Optional: where the bin stands on collection day. While it glows and is not put out yet, a dashed arrow points there; while it is marked as put out, it is drawn there.",bin_next_only:"Label only the next pickup",bin_days:"Show tags only \u2026 days before",bin_days_always:"always",bin_tags_hint:'For all bins. Bins without a tag still show in "Today in the household" and show their pickups when tapped.',hh_service2:"{name}: {what} due",hh_service2_entity:"Second service (e.g. dock)",hh_service2_min:"Second due at (\u2264 percent or days)",bin_none:"No pickup in sight",hh_title:"Today in the household",hh_notes:"Pinboard (text helper)",hh_notes_hint:'A text helper (input_text) or sensor whose text stands in "Today in the household" \u2013 separate several lines with |. Automations write into it ("parcel is in the garage"), the card shows it.',heat_sensor:"Heating (sensor)",heat_sensor_hint:'When the thermostat does not say whether it heats (Tuya valves report a "work state"), pick that sensor here: on/opened/heating or an opening above 0 % makes the radiator glow.',door_lock:"Smart lock",door_lock_hint:"The door's lock (Nuki, Aqara \u2026): a pin at the door shows locked or open, a tap locks or unlocks.",door_lock_btn:"Lock",door_unlock_btn:"Unlock",door_lock_confirm:"Really lock {name}?",door_unlock_confirm:"Really unlock {name}?",garage_pulse_hint:"A switch or button as the drive: a tap on the door gives it a pulse (a switch is turned on, a button pressed); whether the door is open comes from the contact.",clock:"Clock",clock_off:"Off",clock_tl:"\u2196 clock",clock_tr:"\u2197 clock",clock_bl:"\u2199 clock",clock_br:"\u2198 clock",editor_floor:"Editor's start floor",editor_floor_auto:"First of the list",editor_floor_hint:"The floor the editor opens with.",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',card_household:"Today in the household",card_household_hint:"Bins and household: glass card with bins, post, finished appliances, thirsty plants and service due",card_rack_cards:"Rack cards",rack_card_online:"Devices online",rack_card_values:"Card values \xB7 {n}/{max}",rack_card_values_hint:"What the glass card over the rack shows in 3D.",rack_card_rack:"Whole rack",rack_card_default:"Default values",rack_card_hottest:"Hottest",rack_kind_status:"Status",rack_kind_load:"Load",rack_kind_battery:"Battery",rack_kind_runtime:"Runtime",rack_kind_power:"Power",rack_kind_temperature:"Temperature",rack_kind_cpu:"CPU",rack_kind_memory:"Memory",rack_kind_disk:"Volume",rack_kind_throughput:"Throughput",rack_kind_uptime:"Up since",card_rack_cards_hint:"Glass card over every rack with linked gear: UPS, temperature, devices online \u2026",furn_waste_bin:"Waste bin",furn_mailbox:"Letterbox",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",tech_mount:"Mounting",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_status:"Status (connection, state)",ap_clients_sensor:"Sensor: connected clients",ap_clients:"{n} clients",ap_offline:"Offline",pin_standby:"Standby",ap_hint:"The ring glows blue while the access point is there and red when it is gone \u2013 its symbol then shows too. Diagnostic entities (UniFi's, for example) are offered here as well.",heater_entity:"Device (water_heater, thermostat or switch)",heater_temp:"Sensor: water temperature (optional)",heater_hint:"The tank glows warm while it heats (thermostat heating, switch on or power above the threshold) and shows the water temperature \u2013 from the sensor or from the device itself.",furn_lamp_fan:"Ceiling fan with light",fan_entity:"Fan (fan entity)",fan_hint:"The light above switches the lamp. With a fan its blades turn with its speed, and it gets a symbol of its own beside it: a tap switches it, a long press opens its details (with the speed).",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_group_switches:"Home technology",wv_cat_switches:"Switches",gang_count_switch:"Buttons in the frame",gang_count_socket:"Sockets in the frame",socket_kind:"Kind",socket_indoor:"Indoor",socket_outdoor:"Outdoor socket with lid",gang_switch:"Button switches",gang_socket:"Socket switches",gang_switch_hint:"Every button gets its own entity (a light, a switch, a fan) and glows while it is on \u2013 a light in its colour. A tap switches it; with several buttons a small menu opens.",gang_socket_hint:"Every socket gets its own entity (the relay, the smart plug) and, if you like, a power sensor; it glows green while it is on. The same entity may sit on several sockets \u2013 two sockets on one relay.",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:'The bin glows from the set hour the day before until the hour on pickup day (for all bins); its pin says "Today" or "Tomorrow", a tap on the bin shows its next pickups. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.',bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",section_household:"Bins and household",awning_cover:"Awning (cover)",motor_cover:"Motor (cover)",curtain_side:"Opens to",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",motor_time:"Run time (s)",motor_invert_hint:"For covers that report 100 % while the curtain is closed or the screen is down.",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall unit",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Tumble dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_soon:"coming soon",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_dim:"Dim the solar grid over the plan",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",show_when:"When it shows",show_when_entity:"Only while available",show_from:"From",show_to:"To",show_start:"From",show_end:"Until",show_add_interval:"Interval",show_when_hint:"With no rule it always shows. With an entity it hides while that entity is unavailable; with intervals it shows only inside them. Days count every year, whatever year the picker shows (Dec to Jan runs over the new year); times count every day (22:00 to 06:00 runs over midnight).",colours:"Colours and materials",colours_hint:'Each colour role follows the look until you give it a colour of its own. "From the look" sets it back. The material beside it shows in the realistic look.',colour_theme:"From the look",colour_own:"Own colour",material_of:"Material: {role}",material_usual:"Usual ({material})",material_matt:"Matt",material_gloss:"Gloss",material_fabric:"Fabric",material_glass:"Glass",material_metal:"Metal",material_rattan:"Rattan weave",colour_role_body:"Body",colour_role_fabric:"Fabric",colour_role_cushion:"Cushion",colour_role_wood:"Wood",colour_role_white:"White",colour_role_metal:"Metal",colour_role_dark:"Dark",colour_role_glass:"Glass",colour_role_plant:"Plant",colour_role_pot:"Pot",colour_role_accent:"Accent",colour_role_paint:"Paint",paint_hex:"Hex colour",paint_white:"White",paint_black:"Black",paint_silver:"Silver",paint_grey:"Grey",paint_blue:"Blue",paint_red:"Red",paint_green:"Green",paint_orange:"Yellow/orange",paint_bronze:"Brown/bronze",paint_dark_blue:"Dark blue",colour_preset_oak:"Oak",colour_preset_walnut:"Walnut",colour_preset_rattan:"Rattan",colour_preset_white_gloss:"White gloss",colour_preset_black:"Black",colour_preset_grey_fabric:"Grey fabric",colour_preset_beige_fabric:"Beige fabric",colour_preset_navy_fabric:"Navy fabric",colour_preset_green_velvet:"Green velvet",colour_preset_brass:"Brass",colour_preset_chrome:"Chrome",colour_preset_terracotta:"Terracotta",colour_preset_black_brown:"Black-brown",colour_preset_white_stained_oak:"White stained oak",colour_preset_birch:"Birch",colour_preset_pine:"Pine",colour_preset_acacia:"Acacia",colour_preset_anthracite:"Anthracite",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_meter_reading:"Meter reading (m\xB3 or litres)",energy_circuit:"Inside circuit",energy_circuit_hint:"The power sensor of the circuit this device is on (a circuit monitor's channel). Its watts are already in that circuit's, so the cables and the house total don't count them twice.",energy_circuit_unset:"No circuit chosen: if this device is on a circuit monitor's channel, its watts are counted twice until you choose it here.",furn_holo:"Hologram over the device (Energy)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stair_open:"Open treads (no risers)",stair_turn:"Turn at the bottom",stair_turn_none:"None (straight)",stair_turn_left:"Enter from the left",stair_turn_right:"Enter from the right",stair_turn_hint:"The first three steps wind round the corner as winders, entered from the chosen side. Needs a flight longer than it is wide.",stair_landing:"Bottom landing (steps)",stair_landing_hint:"The bottom square becomes a flat landing that many steps up, reached from the side; the flight climbs on from there. Replaces the turn.",stair_top:"Flat top (m)",stair_top_hint:"The top step runs on flat to the back for this long, like a landing in front of the floor above.",stair_start:"Start height (m)",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_cheap_rate:"Cheap rate (on = cheap)",energy_cheap_from:"Cheap from",energy_cheap_to:"until",energy_cheap_hint:"A badge shows while the cheap rate runs: a binary sensor, schedule or switch that is on then \u2013 or, without one, a daily window (22:00 to 06:00 runs over midnight). Nothing set: no badge.",energy_wire_sensor:"Energy sensor (kWh) for today",energy_wire_sensor_hint:"Its use today shows at the end of its energy cable (hover or tap it). Automatic: the device's energy sensor; without one, worked out from the power sensor's statistics.",cheap_rate:"Cheap rate",cheap_rate_now:"now",wire_today:"Today",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};var om=["de","fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],im=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:lo,pending:fs}=im;function ms(o){let e=(o??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return om.includes(t)?t:null}function xn(o){let e=ms(o);return!e||lo.has(e)}function pi(o){let e=ms(o);if(!e||lo.has(e))return Promise.resolve();let t=fs.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=e32a84f401e4`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{lo.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{lo.set(e,{})}).finally(()=>fs.delete(e)),fs.set(e,t)}return t}function M(o,e,t={}){let n=ms(o?.language??navigator.language),r=(n?lo.get(n):void 0)?.[e]??nm[e]??e;for(let[s,a]of Object.entries(t))r=r.replace(`{${s}}`,String(a));return r}function Z(o,e,t=2){return e.toLocaleString(o?.language??void 0,{maximumFractionDigits:t})}var rm=["pool"];function gs(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("home3d.lab","1"):o==="0"&&localStorage.removeItem("home3d.lab"),localStorage.getItem("home3d.lab")==="1"}catch{return!1}}function Kc(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("home3d.projection","1"):o==="0"&&localStorage.removeItem("home3d.projection"),localStorage.getItem("home3d.projection")==="1"}catch{return!1}}function hi(o){return!rm.includes(o)||gs()}function bs(o){return o?.settings.person_look??"figure"}function fi(o){return bs(o)!=="off"}var Gc=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function _s(o){let e=0;for(let t of o)e=e*31+t.charCodeAt(0)>>>0;return Gc[e%Gc.length]}var Yc=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function sm(o,e,t){let n=Yc(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of e.floors)for(let r of i.rooms)if([r.name,r.area_id??"",r.area_id?o.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(Yc).includes(n))return{floorId:i.id,room:r};return null}function Qc(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function am(o){return!["home","on","unknown","unavailable",""].includes(o)}function Jc(o,e){let t=[],n=new Map;for(let i of e.presence){let r=o.states[i.person];if(!r||!i.sensor||r.state!=="home"&&r.state!=="on")continue;let s=o.states[i.sensor];if(!s)continue;let a=sm(o,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[c,d]=Fe(a.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,h=r.attributes.friendly_name??i.person;t.push({id:i.person,name:h,initials:Qc(h),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:c+Math.cos(u)*p,z:d+Math.sin(u)*p})}return t}function mi(o,e,t=new Set,n=Date.now()){let i=[];for(let[u,p]of Object.entries(o.states)){let h=p.attributes;if(!u.startsWith("sensor.")||h.home3d_locate!==!0||typeof h.room_id!="string")continue;let _=null;for(let f of e.floors){let v=f.rooms.find(w=>w.id===h.room_id);v&&(_={floorId:f.id,room:v})}if(!_)continue;let b=typeof h.last_seen=="string"?Date.parse(h.last_seen):NaN,m=typeof h.since=="string"?Date.parse(h.since):NaN;i.push({entityId:u,name:typeof h.device_name=="string"?h.device_name:u,person:typeof h.person=="string"?h.person:null,floorId:_.floorId,room:_.room,seen:Number.isFinite(b)?b:0,since:Number.isFinite(m)?m:0,probability:typeof h.probability=="number"?h.probability:0,worn:h.wearable===!0})}let r=[],s=new Map,a=new Map,l=(u,p)=>{let h=s.get(u.room.id)??0;if(s.set(u.room.id,h+1),!p.thing){let f=a.get(u.room.id);f||a.set(u.room.id,f=pm(o,e,u.floorId,u.room));let v=f.shift();if(v){r.push({...p,floorId:u.floorId,roomId:u.room.id,x:v[0],z:v[1]});return}}let[_,b]=Fe(u.room.points),m=-Math.PI/2+.9+h*1.15;r.push({...p,floorId:u.floorId,roomId:u.room.id,x:_+Math.cos(m)*.75,z:b+Math.sin(m)*.75})},c=(u,p)=>l(u,{id:u.entityId,name:u.name,initials:u.name.slice(0,1).toUpperCase(),picture:null,color:p,entity:u.entityId,tag:u.name,thing:!0}),d=new Map;for(let u of i)u.person?d.set(u.person,[...d.get(u.person)??[],u]):c(u,_s(u.entityId));for(let[u,p]of d){if(t.has(u))continue;let h=o.states[u];if(h&&am(h.state))continue;let _=x=>x.reduce((A,E)=>E.seen>A.seen?E:A),b=p.filter(x=>x.worn&&n-x.seen<12e4),m=_(b.length?b:p),f=x=>n-x.seen<3e4&&n-m.seen<3e4&&x.since>=m.since-12e4,v=null;if(m.worn){let x=p.filter(E=>!E.worn&&E.room.id!==m.room.id&&f(E)),A=x.length?x.reduce((E,D)=>D.probability>E.probability?D:E):null;A&&n-m.since>=6e5&&A.since>m.since+12e4?(v=m,m=A):A&&A.probability>m.probability+.15&&(m=A)}let w=h?.attributes.friendly_name??m.name;l(m,{id:u,name:w,initials:Qc(w),picture:h?.attributes.entity_picture??null,color:_s(u),entity:m.entityId,tag:w.split(/\s+/)[0]});for(let x of p)x===m||x.room.id===m.room.id||x!==v&&(x.worn&&n-x.seen<12e4||f(x))||c(x,_s(u))}return r}var lm=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],cm=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function dm(o,e){let t=[],[n,i]=Fe(e.points),r=(s,a)=>s.points.some((l,c)=>{let d=s.points[(c+1)%s.points.length],[u,p]=[d[0]-l[0],d[1]-l[1]],h=u*u+p*p||1,_=Math.max(0,Math.min(1,((a[0]-l[0])*u+(a[1]-l[1])*p)/h));return Math.hypot(l[0]+_*u-a[0],l[1]+_*p-a[1])<.3});for(let s of o.openings){if(s.wall||s.type==="window"&&s.sill>.3||s.type==="garage")continue;let a=o.rooms.find(_=>_.id===s.room_id);if(!a)continue;let l=a.points[s.edge],c=a.points[(s.edge+1)%a.points.length];if(!l||!c)continue;let d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[l[0]+(c[0]-l[0])*s.offset/d,l[1]+(c[1]-l[1])*s.offset/d];if(!r(e,u))continue;let p=o.rooms.find(_=>_.id!==e.id&&r(_,u)),h=.6/(Math.hypot(n-u[0],i-u[1])||1);t.push({to:p?kn(p.name):null,spot:[u[0]+(n-u[0])*h,u[1]+(i-u[1])*h]})}return t}var um=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],kn=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function pm(o,e,t,n){let i=e.floors.find(c=>c.id===t);if(!i||!n.area_id)return[];let r=i.furniture.filter(c=>U([c.x,c.z],n.points)),s=dm(i,n),a=[],l=new Set([...kn(n.name),...kn(o.areas?.[n.area_id]?.name??""),...kn(n.area_id),...um]);for(let[c,d]of Object.entries(o.states)){if(!c.startsWith("binary_sensor.")||d.state!=="on")continue;let u=d.attributes.device_class;if(u!=="occupancy"&&u!=="presence")continue;let p=o.entities?.[c];if((p?.area_id??(p?.device_id?o.devices?.[p.device_id]?.area_id:null))!==n.area_id)continue;let _=new Set(kn(String(d.attributes.friendly_name??c.slice(14))).filter(v=>!l.has(v))),b=r.find(v=>v.name&&kn(v.name).some(w=>_.has(w))||lm.some(([w,x])=>w.test(v.type.split(":").pop()??"")&&x.some(A=>_.has(A)))),m=b?null:s.find(v=>v.to?v.to.some(w=>_.has(w)):[..._].some(w=>cm.some(x=>w.includes(x)))),f=b?[b.x,b.z]:m?m.spot:null;f&&!a.some(([v,w])=>v===f[0]&&w===f[1])&&a.push(f)}return a}function Xc(o,e,t,n){let i=new Map,r=s=>!!s&&o.states[s]?.state==="on";for(let s of e.floors){let a=new Set;for(let c of s.rooms)for(let d of si(o,ge(o,c.area_id)))B(d)==="light"&&a.add(d);for(let c of s.placements)B(c.entity_id)==="light"&&a.add(c.entity_id);let l=s.openings.filter(c=>{let d=t.get(c.id);if(!d)return!1;if(c.type==="garage")return(it(o,d,"garage").cover??1)<.95;if(c.type==="door")return r(d.contact)||r(d.contact2??null);let u=it(o,d,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(c=>o.states[c]?.state==="on").length,open:l,persons:n.filter(c=>c.floorId===s.id).length})}return i}function Zc(o,e){let t=[e.rooms===1?M(o,"floor_rooms_one"):M(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(M(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(M(o,"floor_open",{n:e.open})),e.persons&&t.push(M(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var ed={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function gi(o){return ed[o]}function rt(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function Nt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ed[o]}"/></svg>`}var td=[1,.12,.1],hm={leak:new Set(["moisture"]),motion:new Set(["motion","occupancy","presence"])};function uo(o,e,t,n){let i=t.live?.[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let r=hm[n],s=u=>u.startsWith("binary_sensor.")&&r.has(String(o.states[u]?.attributes.device_class??"")),a=(u,p)=>t.points.length>=3&&U([u,p],t.points),l=e?.placements.filter(u=>s(u.entity_id))??[],c=l.filter(u=>a(u.x,u.z)).map(u=>u.entity_id),d=new Set(l.filter(u=>!a(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...ge(o,t.area_id).filter(u=>s(u)&&!d.has(u)),...c])]}var ws={motion_seconds:30,camera_seconds:30,radiator_cold:18,radiator_hot:45,tank_cold:25,tank_hot:55};function Vt(o){let e=o.settings.effects??{},t={...ws};for(let n of Object.keys(t)){let i=e[n];typeof i=="number"&&Number.isFinite(i)&&(t[n]=i)}return t.motion_seconds=Math.max(0,Math.min(3600,t.motion_seconds)),t.camera_seconds=Math.max(0,Math.min(3600,t.camera_seconds)),t}function nd(o,e,t){let n=new Set,i=null,r=Vt(e).motion_seconds*1e3;if(r<=0)return{rooms:n,next:i};for(let s of e.floors)for(let a of s.rooms)for(let l of uo(o,s,a,"motion")){let c=o.states[l];if(c?.state!=="on")continue;let d=Date.parse(c.last_changed??""),u=Number.isFinite(d)?d+r:Number.POSITIVE_INFINITY;u<=t||(n.add(a.id),Number.isFinite(u)&&(i===null||u<i)&&(i=u))}return{rooms:n,next:i}}var co=[[0,[.22,.5,1]],[.6,[1,.62,.22]],[1,[1,.16,.1]]];function _i(o,e,t){let n=t>e?Math.max(0,Math.min(1,(o-e)/(t-e))):o>=t?1:0;for(let i=1;i<co.length;i++){let[r,s]=co[i],[a,l]=co[i-1];if(n<=r){let c=(n-a)/(r-a);return[l[0]+(s[0]-l[0])*c,l[1]+(s[1]-l[1])*c,l[2]+(s[2]-l[2])*c]}}return co[co.length-1][1]}function od(o){return o==="radiator"||/^pack:.*:(radiator|trv|(heated_|electric_)?towel_rail)(_[a-z0-9_]+)?$/.test(o)?"radiator":Jo(o)?"tank":null}var id=(o,e)=>!!e&&e!=="none"&&e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="temperature",fm=/(tank|cylinder|dhw|hot.?water|speicher|boiler)/i;function mm(o,e,t){let n=e&&e!=="none"?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;let i=Object.values(o.entities).filter(r=>r.device_id===n&&id(o,r.entity_id)).map(r=>r.entity_id);return t==="tank"?i.find(r=>fm.test(`${r} ${o.states[r]?.attributes.friendly_name??""}`))??(i.length===1?i[0]:null):i.length===1?i[0]:null}function gm(o,e){let t=o.states[e];if(!t)return null;if(e.startsWith("climate.")||e.startsWith("water_heater.")){let i=t.attributes.current_temperature;return typeof i=="number"&&Number.isFinite(i)?Ot(i,He(o)):null}if(t.state===""||t.state==="unavailable"||t.state==="unknown")return null;let n=Number(t.state);return Number.isFinite(n)?Ot(n,t.attributes.unit_of_measurement):null}function vs(o,e){let t=od(e.type);return!t||e.temp_sensor==="none"?null:e.temp_sensor?e.temp_sensor:id(o,e.extra)?e.extra:t==="tank"&&e.entity?.startsWith("water_heater.")?e.entity:mm(o,e.entity,t)}function rd(o,e,t){let n=od(t.type),i=n?vs(o,t):null,r=i?gm(o,i):null;if(!n||!i||r===null)return null;let s=Vt(e),a=n==="radiator"?_i(r,s.radiator_cold,s.radiator_hot):_i(r,s.tank_cold,s.tank_hot);return{kind:n,sensor:i,celsius:r,color:a}}var mt=(o,e)=>M(o,e);function de(o,e){if(!e||K(e))return mt(o,"state_unavailable");let t=e.attributes;switch(B(e.entity_id)){case"light":return e.state!=="on"?mt(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:mt(o,"state_on");case"switch":case"fan":return mt(o,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:bi(o,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${Z(o,t.current_temperature,1)} ${o?He(o):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${mt(o,"state_off")}`:mt(o,"state_off"):n??bi(o,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",i=[t.app_name,t.media_title,t.source].find(r=>typeof r=="string"&&r);return n&&i?i:bi(o,e.state)}case"lock":case"camera":return bi(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?mt(o,e.state==="on"?"state_open":"state_closed"):mt(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),i=t.unit_of_measurement??"",r=o?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${Z(o,n,r)}${i?` ${i}`:""}`:e.state}default:return""}}function bi(o,e){let t=`state_${e}`,n=M(o,t);return n===t?e:n}function sd(o,e,t=Date.now()){let n=[],i=Vt(e).camera_seconds*1e3,r=new Set(e.floors.flatMap(s=>s.furniture.map(a=>a.look_of).filter(a=>!!a)));for(let s of e.floors)for(let a of s.placements){let l=B(a.entity_id),c=o.states[a.entity_id];if(!l||!c)continue;let d=s.rooms.find(p=>p.points.length>=3&&U([a.x,a.z],p.points))??null,u=d?.area_id?o.areas?.[d.area_id]?.name:void 0;n.push({id:a.entity_id,floorId:s.id,roomId:d?.id??null,x:a.x,z:a.z,y:a.y??bn(l,s.height,a.mount??null),lamp:l==="light"?a.mount??"ceiling":null,model:l==="camera"?a.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...l==="camera"&&r.has(a.entity_id)?{ownLook:!0}:{},motion:l==="camera"?xs(o,a.entity_id,i,t)!==null:void 0,fov:a.fov??void 0,reach:a.reach??void 0,tilt:a.tilt??void 0,rotation:a.rotation??0,icon:a.icon?rt(a.icon):Nt(l),name:a.name||j(o,a.entity_id,u),ownName:a.name||void 0,showName:!!a.show_name,text:de(o,c),active:ze(c),unavailable:K(c),glow:l==="light"?ks(ot(c),a.glow_scale):null,show:a.marker??void 0,fixed:!!a.locked})}return n}function ys(o,e){let t=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function xs(o,e,t,n){let i=null;for(let r of st(o,e)){let s=o.states[r];if(s?.state==="on")return Number.POSITIVE_INFINITY;if(s?.state!=="off"||t<=0)continue;let a=Date.parse(s.last_changed??"");Number.isFinite(a)&&a+t>n&&(i===null||a+t>i)&&(i=a+t)}return i}var ad=new Map;function ld(o){ad=new Map(o?.floors.flatMap(e=>e.placements.filter(t=>Array.isArray(t.detect_sensors)).map(t=>[t.entity_id,t.detect_sensors]))??[])}function st(o,e){return ad.get(e)??_m(o,e)}function _m(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}function cd(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function ke(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function wi(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function ks(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}function bm(o,e,t){let n=o.q[0]-o.p[0],i=o.q[1]-o.p[1],r=n*n+i*i,s=r>0?Math.min(1,Math.max(0,((e-o.p[0])*n+(t-o.p[1])*i)/r)):0;return o.h0+(o.h1-o.h0)*s}var Oe=(o,e)=>[o[0]-e[0],o[1]-e[1]],gt=(o,e)=>[o[0]+e[0],o[1]+e[1]],at=(o,e)=>[o[0]*e,o[1]*e],vi=(o,e)=>o[0]*e[0]+o[1]*e[1],Bt=(o,e)=>o[0]*e[1]-o[1]*e[0],po=o=>Math.hypot(o[0],o[1]),_t=o=>{let e=po(o)||1;return[o[0]/e,o[1]/e]},dd=o=>[-o[1],o[0]],ud=o=>[o[1],-o[0]];function bt(o,e,t=[]){let n=e.eps??.005,i=[],r=t.filter($=>Math.hypot($.b[0]-$.a[0],$.b[1]-$.a[1])>.05),s=[],a=$=>{for(let I=0;I<s.length;I++)if(Math.abs(s[I][0]-$[0])<=n&&Math.abs(s[I][1]-$[1])<=n)return I;return s.push([$[0],$[1]]),s.length-1},l=[];for(let $ of o){let I=$.points;if(I.length<3||Math.abs(Be(I))<1e-6)continue;let S=Be(I)>0,P=I.map(a);for(let R=0;R<I.length;R++){let q=P[R],C=P[(R+1)%I.length];q!==C&&l.push(S?{u:q,v:C,room:$.id,edge:R,forward:!0}:{u:C,v:q,room:$.id,edge:R,forward:!1})}}let c=r.map($=>[a($.a),a($.b)]),d=new Set;for(let $ of o){let I=$.points;I.length<3||($.wall_splits??[]).forEach((S,P)=>{if(!S||P>=I.length)return;let R=I[P],q=Oe(I[(P+1)%I.length],R),C=po(q);for(let O of S)O>n&&O<C-n&&d.add(a(gt(R,at(q,O/C))))})}let u=[];for(let $ of l){let I=s[$.u],S=s[$.v],P=Oe(S,I),R=po(P),q=at(P,1/R),C=[];for(let z=0;z<s.length;z++){if(z===$.u||z===$.v)continue;let ae=Oe(s[z],I),J=vi(ae,q);J<=n||J>=R-n||Math.abs(Bt(q,ae))<=n&&C.push({t:J,id:z})}C.sort((z,ae)=>z.t-ae.t);let O=[{t:0,id:$.u},...C,{t:R,id:$.v}];for(let z=0;z+1<O.length;z++){let ae=O[z],J=O[z+1],Se=$.forward?ae.t:R-J.t,ne=$.forward?J.t:R-ae.t;u.push({u:ae.id,v:J.id,room:$.room,edge:$.edge,t0:Se,t1:ne})}}let p=new Map;for(let $ of u){let I=$.u<$.v?`${$.u}-${$.v}`:`${$.v}-${$.u}`,S=p.get(I);S||p.set(I,S=[]),S.push($)}let h=$=>({room_id:$.room,edge:$.edge,t0:$.t0,t1:$.t1}),_=new Map;for(let $ of u){let I=`${$.room}:${$.edge}`;_.set(I,[..._.get(I)??[],$.t0].sort((S,P)=>S-P))}let b=$=>{let I=o.find(P=>P.id===$.room)?.wall_heights?.[$.edge];if(!Array.isArray(I))return I;let S=_.get(`${$.room}:${$.edge}`)??[];return I[S.indexOf($.t0)]??null},m=$=>{let I=$.map(b).filter(P=>typeof P=="number"&&P>0);if(I.length)return Math.min(...I);let S=$.map(P=>o.find(R=>R.id===P.room)?.ceiling_height);return S.every(P=>typeof P=="number"&&P>0)?Math.max(...S):void 0},f=$=>{let I=$.map(S=>o.find(P=>P.id===S.room)?.wall_thickness?.[S.edge]).filter(S=>typeof S=="number"&&S>0);return I.length?Math.max(...I):void 0},v=$=>{for(let I of $){let S=o.find(C=>C.id===I.room),P=S?.wall_slopes?.[I.edge];if(!S||!P)continue;let R=S.points[I.edge],q=S.points[(I.edge+1)%S.points.length];return{p:[R[0],R[1]],q:[q[0],q[1]],h0:Math.max(.05,P[0]),h1:Math.max(.05,P[1])}}},w=$=>$.some(I=>b(I)===0),x=$=>{let I=v($);return I?{height:Math.max(I.h0,I.h1),slope:I}:{height:m($)}},A=[],E=[];for(let $ of p.values()){let I=$[0],S=$.find(P=>P!==I&&P.u===I.v&&P.v===I.u&&P.room!==I.room);for(let P of $)P!==I&&P!==S&&P.room!==I.room&&i.push(`overlap:${I.room}:${P.room}`);if(w(S?[I,S]:[I])){S&&A.push([I.room,S.room]);continue}if(S){let P=f([I,S])??e.interior;E.push({a:I.u,b:I.v,left:P/2,right:P/2,exterior:!1,roomLeft:I.room,roomRight:S.room,sources:[h(I),h(S)],...x([I,S])})}else E.push({a:I.u,b:I.v,left:0,right:f([I])??e.exterior,exterior:!0,roomLeft:I.room,roomRight:null,sources:[h(I)],...x([I])})}let D=$=>_t(Oe(s[$.b],s[$.a])),H=new Set;for(let $ of E){if($.exterior||$.free)continue;let I=new Set;for(let P of[$.a,$.b])for(let R of E)!R.exterior||R.free||R.a!==P&&R.b!==P||Math.abs(Bt(D($),D(R)))>1e-6||(R.roomLeft===$.roomLeft?I.add("left"):R.roomLeft===$.roomRight&&I.add("right"));if(I.size!==1)continue;let S=$.left+$.right;I.has("left")?($.left=0,$.right=S):($.left=S,$.right=0),H.add($)}for(let $ of[...H]){let I=[$];for(;I.length;){let S=I.pop();for(let P of[S.a,S.b])for(let R of E){if(R===S||R.exterior||R.free||H.has(R)||R.a!==P&&R.b!==P||Math.abs(Bt(D(S),D(R)))>1e-6)continue;let q=R.left+R.right,C=S.right===0==vi(D(S),D(R))>0;R.left=C?q:0,R.right=C?0:q,H.add(R),I.push(R)}}}r.forEach(($,I)=>{let[S,P]=c[I];if(S===P)return;let R=[($.a[0]+$.b[0])/2,($.a[1]+$.b[1])/2],q=o.find(z=>z.points.length>=3&&U(R,z.points))?.id??null,C=($.thickness??e.interior)/2,O=typeof $.height=="number"&&$.height>0?$.height:void 0;E.push({free:$.id,a:S,b:P,left:C,right:C,exterior:!1,roomLeft:q,roomRight:q,sources:[],height:O})}),E=vm(E,s,d);let W=xm(E,s);return{walls:E.map(($,I)=>{let S=s[$.a],P=s[$.b],R=W.get(`${I}:a`),q=W.get(`${I}:b`),C=km([R.right,q.left,P,q.right,R.left,S],1e-6);return{id:wm(S,P),a:[S[0],S[1]],b:[P[0],P[1]],left:$.left,right:$.right,exterior:$.exterior,roomLeft:$.roomLeft,roomRight:$.roomRight,sources:$.sources,footprint:C,...$.free?{free:$.free}:{},...$.height!==void 0?{height:$.height}:{},...$.slope?{slope:$.slope}:{}}}),warnings:[...new Set(i)],open:A,parts:_}}function wm(o,e){let t=r=>Math.round(r*100),[n,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function pd(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function vm(o,e,t=new Set){let n=o.slice(),i=!0;for(;i;){i=!1;let r=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[s,a]of r){if(a.length!==2||t.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=pd(l)),c.a!==s&&(c=pd(c)),l.a===c.b)continue;let d=_t(Oe(e[l.b],e[l.a])),u=_t(Oe(e[c.b],e[c.a]));if(Math.abs(Bt(d,u))>1e-6||vi(d,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let p={...l,b:c.b,sources:ym(l.sources,c.sources)},h=n.filter((_,b)=>b!==a[0]&&b!==a[1]);h.push(p),n.length=0,n.push(...h),i=!0;break}}return n}function ym(o,e){let t=o.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function xm(o,e){let t=new Map;o.forEach((i,r)=>{let s=_t(Oe(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:at(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,r]of t){let s=e[i];r.sort((c,d)=>c.angle-d.angle);let a=c=>({left:gt(s,at(dd(c.d),c.left)),right:gt(s,at(ud(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=gt(s,at(dd(d.d),d.left)),h=gt(s,at(ud(u.d),u.right)),_=Bt(d.d,u.d);if(Math.abs(_)<1e-4)continue;let b=Bt(Oe(h,p),u.d)/_,m=gt(p,at(d.d,b));po(Oe(m,s))>l||(n.get(d.key).left=m,n.get(u.key).right=m)}}return n}function km(o,e){let t=o.filter((i,r)=>po(Oe(i,o[(r+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=Oe(s,r),c=Oe(a,s);if(Math.abs(Bt(_t(l),_t(c)))<1e-7&&vi(l,c)>0){t=t.filter((d,u)=>u!==i),n=!0;break}}}return t}function yi(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length],r=_t(Oe(i,n));return gt(n,at(r,t))}function hd(o,e,t){if(o.wall){let i=t.find(a=>a.id===o.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let r=_t(Oe(i.b,i.a));return{room:{id:o.room_id,name:"",area_id:null,points:[i.a,i.b,gt(i.a,[-r[1],r[0]])]},edge:0}}let n=e.find(i=>i.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function fd(o,e,t,n){let i=e.rotation*Math.PI/180,r=[-Math.sin(i),Math.cos(i)],s=Math.max(.005,e.d),a=null;for(let c of o){let d=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]);if(d<.05)continue;let u=[(c.b[0]-c.a[0])/d,(c.b[1]-c.a[1])/d],p=(e.x-c.a[0])*u[0]+(e.z-c.a[1])*u[1];if(p<-.02||p>d+.02)continue;let h=[-u[1],u[0]],_=(e.x-c.a[0])*h[0]+(e.z-c.a[1])*h[1],b=r[0]*h[0]+r[1]*h[1]>=0?1:-1;if(Math.abs(r[0]*h[0]+r[1]*h[1])<.5)continue;let m=b>0?c.left:-c.right,f=_>-c.right-1e-4&&_<c.left+1e-4,v=Math.abs(_-(m+b*(s/2)));if(!f&&v>.03||a&&v>=a.off)continue;let w=c.a[0]+u[0]*p,x=c.a[1]+u[1]*p,A=f?m+b*(s/2):_,E=c.slope?bm(c.slope,e.x,e.z):Math.min(t,c.height??t);a={x:w+h[0]*A,z:x+h[1]*A,top:E,off:v}}if(!a)return{x:e.x,z:e.z,y:n};let l=e.mount_y==null?Math.max(.02,Math.min(n,a.top-.1,a.top-e.h-.02)):n;return{x:a.x,z:a.z,y:l}}var wt=Math.PI/180;function md(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let t=e*wt;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(t),s:Math.sin(t)}}function gd(o,e,t=!1){if(!o)return e;let n=e[0]-o.p[0],i=e[1]-o.p[1],r=t?-o.s:o.s;return[o.p[0]+n*o.c-i*r,o.p[1]+n*r+i*o.c]}function Ut(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1),r=md(o),s=o.axis==="x"?(l,c)=>[l,o.flip?i-c:n+c]:(l,c)=>[o.flip?t-c:e+c,l],a=r?(l,c)=>gd(r,s(l,c)):s;return o.axis==="x"?{u0:e,u1:t,w:i-n,at:a}:{u0:n,u1:i,w:t-e,at:a}}function $m(o,e,t,n=1e-6){let[i,r]=yd(o,e,t),s=Ut({...o,rotation:0});return i>=s.u0-n&&i<=s.u1+n&&r>=-n&&r<=s.w+n}function $n(o){let e=Ut(o).w,t=o.eave_a,n=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*wt),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*wt);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(o.shape==="mansard"){let l=vd(e,t,n,i,r);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(i+r))):e/2,a=t+s*i;return{vr:s,rh:a,y:l=>l<=s?t+l*i:n+(e-l)*r}}function $s(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var _d=.14;function bd(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function Ss(o,e){return $n(o).rh-_d>e+.01}function wd(o,e,t,n){let i=null,r=Math.max(0,o.settings.roof.overhang??0);for(let s of $s(o)){if(s.open||n!==void 0&&!Ss(s,n)||!$m(s,e,t)||s.points&&s.points.length>=3&&!U([e,t],s.points))continue;let[a,l]=yd(s,e,t),c=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),p=((c?null:Mm(Sm(s,{u0:d,u1:d,a:d,b:d}),a,l))??$n(s).y(l))-_d;i=i===null?p:Math.max(i,p)}return i}var ho=Math.tan(30*wt);function vd(o,e,t,n,i){let r=Math.min(o*.3,n>1e-6?2.4/n:o*.3),s=Math.min(o*.3,i>1e-6?2.4/i:o*.3),a=e+r*n,l=t+s*i,c=Math.min(o-s,Math.max(r,(l-a+ho*(o-s+r))/(2*ho))),d=a+(c-r)*ho;return{vla:r,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:p=>p<=r?e+p*n:p<=c?a+(p-r)*ho:p<=o-s?l+(o-s-p)*ho:t+(o-p)*i}}function Sm(o,e){let t=Ut(o),n=$n(o),i=t.w,r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(O,z)=>[O,z,n.y(z)],d=c(a,-r),u=c(l,-r),p=c(l,i+s),h=c(a,i+s),_=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*wt),b=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*wt);if(o.shape==="pent"){let O=[d,u,p,h],z=[[0,n.y(0)],[i,n.y(i)]];return{faces:[O],rim:O,ridges:[[p,h]],gable:z,gables:[z,z]}}if(o.shape==="pyramid"){let O=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[d,u,O],[u,p,O],[p,h,O],[h,d,O]],rim:[d,u,p,h],ridges:[[d,O],[h,O],[u,O],[p,O]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let O=vd(i,o.eave_a,o.eave_b,_,b),z=[[0,n.y(0)],[O.vla,O.yla],[O.vr,O.rh],[i-O.vlb,O.ylb],[i,n.y(i)]],ae=[a,O.vla,O.yla],J=[l,O.vla,O.yla],Se=[a,i-O.vlb,O.ylb],ne=[l,i-O.vlb,O.ylb],X=[a,O.vr,O.rh],xe=[l,O.vr,O.rh];return{faces:[[d,u,J,ae],[ae,J,xe,X],[X,xe,ne,Se],[Se,ne,p,h]],rim:[d,u,J,xe,ne,p,h,Se,X,ae],ridges:[[X,xe],[ae,J],[Se,ne]],gable:z,gables:[z,z]}}let[m,f]=Ms(o)??["gable","gable"],v=Ts(o,[m,f]),w=m==="gable"?[a,n.vr,n.rh]:[t.u0+v.d0,n.vr,n.rh],x=f==="gable"?[l,n.vr,n.rh]:[t.u1-v.d1,n.vr,n.rh],A=[a,v.vah,v.yh],E=[a,v.vbh,v.yh],D=[l,v.vah,v.yh],H=[l,v.vbh,v.yh],W=m==="halfhip",F=f==="halfhip",$=[[d,u,...F?[D]:[],x,w,...W?[A]:[]],[w,x,...F?[H]:[],p,h,...W?[E]:[]]];m==="hip"&&$.push([h,d,w]),W&&$.push([E,A,w]),f==="hip"&&$.push([u,p,x]),F&&$.push([D,H,x]);let I=[d,u,...f==="gable"?[x]:F?[D,H]:[],p,h,...m==="gable"?[w]:W?[E,A]:[]],S=[[w,x]];m==="hip"&&S.push([d,w],[h,w]),W&&S.push([A,w],[E,w]),f==="hip"&&S.push([u,x],[p,x]),F&&S.push([D,x],[H,x]);let P=[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]],R=[[0,n.y(0)],[v.vah,v.yh],[v.vbh,v.yh],[i,n.y(i)]],q=O=>O==="gable"?P:O==="halfhip"?R:null,C=[q(m),q(f)];return{faces:$,rim:I,ridges:S,gable:C[0]??C[1],gables:C}}function Ms(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(o.end_u0),t(o.end_u1)]}function Ts(o,e){let t=Ut(o),n=$n(o),i=t.w,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*wt),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*wt),a=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(i)),d=c+(n.rh-c)*.55,u=r>1e-6?Math.min(n.vr,(d-o.eave_a)/r):n.vr,p=s>1e-6?Math.max(n.vr,i-(d-o.eave_b)/s):n.vr,h=Math.min(l,Math.min(n.vr,i-n.vr)||i/2),_=Math.min(l-.1,(n.rh-d)/Math.max(.2,r)),b=m=>m==="hip"?h:m==="halfhip"?_:0;return{d0:b(e[0]),d1:b(e[1]),yh:d,vah:u,vbh:p}}function Mm(o,e,t){let n=null;for(let i of o.faces){if(!U([e,t],i.map(v=>[v[0],v[1]])))continue;let[r,s]=i,a=i.slice(2).find(v=>Math.abs((s[0]-r[0])*(v[1]-r[1])-(s[1]-r[1])*(v[0]-r[0]))>1e-9);if(!a)continue;let l=s[0]-r[0],c=s[2]-r[2],d=s[1]-r[1],u=a[0]-r[0],p=a[2]-r[2],h=a[1]-r[1],_=c*h-d*p,b=d*u-l*h,m=l*p-c*u;if(Math.abs(b)<1e-9)continue;let f=r[2]-(_*(e-r[0])+m*(t-r[1]))/b;n=n===null?f:Math.min(n,f)}return n}function yd(o,e,t){let[n,i]=gd(md(o),[e,t],!0),r=Math.min(o.x0,o.x1),s=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[n,o.flip?l-i:i-a]:[i,o.flip?s-n:n-r]}function xd(o,e,t){let n=Ut(e),i=o.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>e.base+.05)),r=c=>c.some(d=>i.some(u=>U(d,u.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:r(a.map(c=>n.at(c,-s)))?0:t,b:r(a.map(c=>n.at(c,n.w+s)))?0:t,u0:r(l.map(c=>n.at(n.u0-s,c)))?0:t,u1:r(l.map(c=>n.at(n.u1+s,c)))?0:t}}var ki=Math.PI/180,Tm=1.13,Am=1.72,$i=.025,qt=.07,kd=.25;function mo(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:i}=bt(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let r of i){if(!r.exterior&&!r.free)continue;let s=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(s,a);if(l<.5)continue;let c=a/l,d=-s/l,u=Math.min(n.height,r.height??n.height),p=r.sources.find(b=>b.room_id===r.roomLeft)?.edge??null,h={floorId:n.id,room:r.roomLeft,edge:p,free:!!r.free},_=(b,m,f,v)=>t.push({key:b,section:null,side:"top",flat:!1,o:m,eu:f,es:[0,1,0],n:v,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[v[0],v[2]],wall:h});_(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+d*r.right],[s/l,0,a/l],[c,0,d]),r.free&&_(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-d*r.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var $d="ground";function Pm(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function Em(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=Pm(o),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:et(r,s,a)):e.base??0;return{key:$d,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Kt(o,e,t=yt(o)){return e.face===$d?Em(o,e):e.face.startsWith("wall:")?mo(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function As(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function yt(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(v=>Im(v,xd(o,v,v.overhang??e.overhang)));let t=As(o);if(!t)return[];let n=t.rooms.flatMap(v=>v.points.map(w=>w[0])),i=t.rooms.flatMap(v=>v.points.map(w=>w[1])),r=o.settings.wall_exterior+e.overhang,s=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...i)-r,c=Math.max(...i)+r,d=t.elevation+t.height;if(e.type==="flat")return[Sd("main",null,s,l,a,c,d+kd)];let u=a-s>=c-l,p=e.ridge==="short"?!u:u,h=(p?c-l:a-s)/2,_=h*Math.tan(e.pitch*ki),b=(v,w,x)=>p?[v,d+x,(l+c)/2+w]:[(s+a)/2+w,d+x,v],[m,f]=p?[s,a]:[l,c];return[-1,1].map(v=>xi(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",b(m,v*h,0),b(f,v*h,0),b(m,0,_),e.pitch,()=>[0,f-m]))}function Im(o,e){let t=Ut(o),n=$n(o),i=(w,x,A)=>{let[E,D]=t.at(w,x);return[E,A,D]},r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(o.shape==="flat"||o.shape==="parapet"){let w=t.at(a,-r),x=t.at(l,t.w+s);return[Sd(o.id,o.id,Math.min(w[0],x[0]),Math.min(w[1],x[1]),Math.max(w[0],x[0]),Math.max(w[1],x[1]),o.eave_a+kd)]}if(o.shape==="pent")return[xi(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,t.w+s,n.y(t.w+s)),o.pitch_a,()=>[0,c])];let d=Ms(o),u=d?Ts(o,d):null,p=o.shape==="pyramid"||d?.[0]==="hip",h=o.shape==="pyramid"||d?.[1]==="hip",_=o.shape==="pyramid"?(t.u1-t.u0)/2:p?u.d0:0,b=o.shape==="pyramid"?(t.u1-t.u0)/2:h?u.d1:0,m=p?t.u0+_-a:0,f=h?l-(t.u1-b):0,v=[];if(n.vr>.3){let w=Math.hypot(n.vr+r,n.rh-n.y(-r));v.push(xi(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,n.vr,n.rh),o.pitch_a,x=>[m*(x/w),c-f*(x/w)]))}if(t.w-n.vr>.3){let w=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));v.push(xi(`${o.id}:b`,o.id,"b",i(l,t.w+s,n.y(t.w+s)),i(a,t.w+s,n.y(t.w+s)),i(l,n.vr,n.rh),o.pitch_b,x=>[f*(x/w),c-m*(x/w)]))}if(p||h){let w=n.y(-r),x=n.y(t.w+s),A=[];p&&A.push([`${o.id}:c`,"c",i(a,t.w+s,x),i(a,-r,w),i(t.u0+_,n.vr,n.rh)]),h&&A.push([`${o.id}:d`,"d",i(l,-r,w),i(l,t.w+s,x),i(t.u1-b,n.vr,n.rh)]);for(let[E,D,H,W,F]of A){let $=Rm(E,o.id,D,H,W,F);$&&v.push($)}}return v}function Rm(o,e,t,n,i,r){let s=fo(jt(i,n));if(s<.3)return null;let a=vt(jt(i,n)),l=jt(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=fo(d);if(u<.3)return null;let p=vt(d),h=vt(Ad(a,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let _=vt([-p[0],0,-p[2]]),b=Math.atan2(p[1],Math.hypot(p[0],p[2]))/ki;return{key:o,section:e,side:t,flat:!1,o:n,eu:a,es:p,n:h,lu:s,ls:u,pitch:b,span:f=>{let v=Math.min(1,Math.max(0,f/u));return[c*v,s-(s-c)*v]},facing:[_[0],_[2]]}}function xi(o,e,t,n,i,r,s,a){let l=vt(jt(i,n)),c=vt(jt(r,n)),d=vt(Ad(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=vt([-c[0],0,-c[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:d,lu:fo(jt(i,n)),ls:fo(jt(r,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function Sd(o,e,t,n,i,r,s){let a=i-t>=r-n,l=a?i-t:r-n,c=a?r-n:i-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Ps(o){let e=o.module_w||Tm,t=o.module_h||Am;return o.portrait===!1?[t,e]:[e,t]}function Md(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function Es(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*ki:o.wall?Math.min(90,Math.max(0,e.tilt??0))*ki:0}function Gt(o,e){let[t,n]=Ps(e),i=Md(e),r=Math.max(1,...i),a=(i.length-1)*Td(o,e)+n*Math.cos(Es(o,e));return[r*t+(r-1)*$i,a]}function Td(o,e){let[,t]=Ps(e),n=Es(o,e);return o.wall?t*Math.cos(n)+$i:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+$i}function Hm(o,e,t=!1){let[n,i]=Ps(e),r=[],s=Es(o,e),a=i*Math.cos(s),l=Td(o,e),c=Md(e),d=Math.max(1,...c),u=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(b,m,f)=>[o.o[0]+o.eu[0]*b+o.es[0]*m+o.n[0]*f,o.o[1]+o.eu[1]*b+o.es[1]*m+o.n[1]*f,o.o[2]+o.eu[2]*b+o.es[2]*m+o.n[2]*f],_=(b,m)=>{if(o.unbounded)return!0;if(m<-1e-6||m>o.ls+1e-6)return!1;let[f,v]=o.span(m);return b>=f-1e-6&&b<=v+1e-6};return c.forEach((b,m)=>{let f=e.align==="right"?d-b:e.align==="center"?(d-b)/2:0;for(let v=0;v<b;v++){let w=`${m}:${v}`,x=u.has(w);if(x&&!t)continue;let A=e.u+(v+f)*(n+$i),E=e.v+m*l,D=A+n,H=E+(o.flat||o.wall?a:i);if(p){if(!(_((A+D)/2,E)&&_((A+D)/2,H)))continue}else if(![[A,E],[D,E],[D,H],[A,H]].every(([P,R])=>_(P,R)))continue;if(o.wall&&s>.001){let P=qt+i*Math.sin(s),[R,q]=e.flip?[P,qt]:[qt,P],C=[h(A,E,R),h(D,E,R),h(D,H,q),h(A,H,q)],O=e.flip?E:H,z=[A+.05,D-.05].map(ae=>[h(ae,O,0),h(ae,O,P)]);r.push({corners:C,posts:z,cell:w,skipped:x});continue}if(!o.flat){r.push({corners:[h(A,E,qt),h(D,E,qt),h(D,H,qt),h(A,H,qt)],posts:[],cell:w,skipped:x});continue}let W=.15,F=W+i*Math.sin(s),[$,I]=e.flip?[H,E]:[E,H],S=[h(A,$,W),h(D,$,W),h(D,I,F),h(A,I,F)];r.push({corners:S,posts:[A+.05,D-.05].flatMap(P=>[[h(P,$,0),h(P,$,W)],[h(P,I,0),h(P,I,F)]]),cell:w,skipped:x})}}),r}function jt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function fo(o){return Math.hypot(o[0],o[1],o[2])}function vt(o){let e=fo(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Ad(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var Fm=.78,Cm=1.18;function zm(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||Fm,module_h:o.h||Cm}}function Om(o,e){let t=Hm(o,zm(e))[0];if(!t)return null;let n=i=>[i[0]-o.n[0]*.05,i[1]-o.n[1]*.05,i[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Is(o,e,t){let n=e?Om(e,t):null;if(!n)return null;let i=(n[0][0]+n[2][0])/2,r=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...o.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>r)continue;let l=a.rooms.find(c=>U([i,s],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function Pd(o,e){let t=o.settings.roof?.windows??[];if(!t.length)return[];let n=new Map(yt(o).map(i=>[i.key,i]));return t.filter(i=>Is(o,n.get(i.face),i)?.roomId===e)}function Ed(o,e){let[t,n]=Gt(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var Dm=4,Lm=3e3,Wm=8,Nm=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Sn=o=>g`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${gi(o)} />
  </svg>`,Si={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Rs=o=>g`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,Hs=class extends ye{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},noLook:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Lm)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return M(this.hass,e,t)}call(e,t,n){this.readOnly||Wt(this.hass,e,t,n,i=>this.t("service_failed",{error:i}))}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return j(this.hass,e,this.areaName)}nameButton(e){return g`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&ke(this,e)}>${this.name(e)}</button>`}async askFor(e){return!this.confirmEntities?.has(e)||await Lt(this.t("confirm_switch",{name:this.name(e)}),{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")})}async callAll(e,t,n){if(this.readOnly)return;await ui(n,this.confirmEntities,r=>this.name(r),r=>Lt(this.t("confirm_switch",{name:r}),{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")}))&&this.call(e,t,{entity_id:n})}toggle(e,t,n){let i=async()=>{this.readOnly||await this.askFor(e.entity_id)&&n()};return g`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${K(e)}
      @click=${i}
    ></button>`}renderHere(e){if(!this.building||!hi("locate")||!fi(this.building))return y;let t=mi(this.hass,this.building).filter(n=>n.roomId===e.id);return t.length?g`<p class="fp3d-rp-facts fp3d-rp-here">
      ${t.map((n,i)=>g`${i?", ":""}<span style="color:${n.color}">●</span> ${n.name}`)}
    </p>`:y}render(){let e=this.room;if(!e||!this.hass)return y;let t=ge(this.hass,e.area_id),n=this.memo,{shown:i,more:r}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?Rc(this.hass,this.floor,e,this.building?Pd(this.building,e.id):[]):{shown:t,more:[]}},s=ts(this.hass,r).map(x=>x.primary),a=s.length,l=this._showAll?[...i,...s]:i,c=x=>l.filter(A=>x.includes(B(A))).map(A=>this.hass.states[A]).filter(A=>!!A),d=c(["light"]),u=c(["cover"]),p=c(["climate"]),h=c(["media"]),_=c(["switch","fan","lock"]),b=c(["sensor","binary"]),m=c(["camera"]);this.hasCameras=m.length>0;let f=c(["scene","script"]),v=this.facts(p),w=d.filter(x=>x.state==="on");return g`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${v.length?g`<p class="fp3d-rp-facts">${v.join(" \xB7 ")}</p>`:y}
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
        ${d.length?this.section("panel_lights",d.map(x=>this.lightRow(x)),g`${w.length<d.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("light","turn_on",d.filter(x=>!K(x)).map(x=>x.entity_id))}>
                    ${this.t("panel_all_on")}
                  </button>`:y}${w.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("light","turn_off",w.map(x=>x.entity_id))}>
                    ${this.t("panel_all_off")}
                  </button>`:y}`):y}
        ${u.length?this.section("panel_covers",u.map(x=>this.coverRow(x)),u.length>1?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("cover","open_cover",u.filter(x=>!K(x)).map(x=>x.entity_id))}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.callAll("cover","close_cover",u.filter(x=>!K(x)).map(x=>x.entity_id))}>
                      ${this.t("panel_all_close")}
                    </button>`:y):y}
        ${p.length?this.section("panel_climate",p.map(x=>this.climateRow(x))):y}
        ${h.length?this.section("panel_media",h.map(x=>this.mediaRow(x))):y}
        ${_.length?this.section("panel_switches",_.map(x=>this.switchRow(x))):y}
        ${m.length?this.section("panel_cameras",m.map(x=>this.cameraTile(x))):y}
        ${b.length?this.section("panel_sensors",b.map(x=>this.sensorRow(x))):y}
        ${f.length?this.section("panel_scenes",[g`<div class="fp3d-rp-scenes">
                  ${f.map(x=>g`<button
                      class="fp3d-btn"
                      ?disabled=${K(x)}
                      @click=${()=>this.call(B(x.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:x.entity_id})}
                    >
                      ${this.name(x.entity_id)}
                    </button>`)}
                </div>`]):y}
        ${a?g`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:y}
      </div>
    </section>`}facts(e){let t=[],n=this.room,i=(l,c)=>{let d=ht(this.hass,this.floor,n,l);if(d===null)return null;if(l==="temperature")return`${Z(this.hass,nt(this.hass,d),1)} ${He(this.hass)}`;let u=Yr(this.hass,this.floor,n,l)[0],p=this.hass.states[u]?.attributes.unit_of_measurement??c;return`${Z(this.hass,d,1)} ${p}`},r=e.find(l=>typeof l.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?t.push(s):r&&n.climate?.temperature!=="none"&&t.push(`${Z(this.hass,r.attributes.current_temperature,1)} ${He(this.hass)}`);let a=i("humidity","%");return a&&t.push(a),t}section(e,t,n=y){return g`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",i=t.supported_color_modes??[],r=i.some(p=>p!=="onoff"),s=i.includes("color_temp"),a=i.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,u=e.entity_id;return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${Sn("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&r?g`<label class="fp3d-rp-slider"
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
            ${Nm.map(p=>g`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:y}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,i=e.entity_id,r=K(e);return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${Sn("cover")}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${async()=>await this.askFor(i)&&this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${n&Wm?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:y}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${async()=>await this.askFor(i)&&this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${n&Dm&&typeof t.current_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:y}
      ${n&128&&typeof t.current_tilt_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:Number(s.target.value)})}
          /></label>`:ii(this.hass?.states[i])?g`<div class="fp3d-rp-buttons">
              ${n&16?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:y}
              ${n&32?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:y}
            </div>`:y}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,i=typeof t.temperature=="number"?t.temperature:null,r=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/r)*r))});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${Sn("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${i!==null?g`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>c(i-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${Z(this.hass,i,1)} ${He(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>c(i+r)}>+</button>
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
    </div>`}stateOf(e,t=de(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=B(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,i=K(e)||e.state==="off",r=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${Sn("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${r?g`<p class="fp3d-rp-media fp3d-rp-wide">${r}</p>`:y}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${Rs(Si.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${K(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${Rs(e.state==="playing"?Si.pause:Si.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${Rs(Si.next)}
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
    </div>`}switchRow(e){let t=e.entity_id,n=B(t),i=t.slice(0,t.indexOf(".")),r=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:t}):this.call(i,"toggle",{entity_id:t});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${r?"fp3d-rp-on":""}">${Sn(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!K(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,i=this.floor?.placements.some(r=>r.entity_id===e.entity_id);return g`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&ke(this,e.entity_id)}>
        ${n?g`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:g`<span class="fp3d-rp-note">${de(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${i&&!this.noLook?g`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${this.t("through_camera")}
          </button>`:y}
    </div>`}sensorRow(e){let t=B(e.entity_id),n=t==="binary"&&e.state==="on";return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${Sn(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[We,Ye,Me`
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
      /* last, so it wins over the sizes above (#181) */
      @media (pointer: coarse) {
        .fp3d-rp-close,
        .fp3d-rp-icon,
        .fp3d-rp-swatch {
          width: 44px;
          height: 44px;
        }
        .fp3d-rp-stepper .fp3d-btn {
          width: 44px;
        }
        .fp3d-rp-small,
        .fp3d-rp-sheet,
        .fp3d-rp-chips .fp3d-chip {
          min-height: 44px;
        }
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",Hs);var go=class extends ft{constructor(e){if(super(e),this.it=y,e.type!==Ue.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===Re)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};go.directiveName="unsafeHTML",go.resultType=1;var Id=vn(go);function Rd(o,e,t,n,i=!1){let r=s=>{let a=s?.value.trim();!s||!a||(s.value="",n([...o,a]))};return g`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${t.label}>
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
        @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),r(s.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${e} @click=${s=>r(s.currentTarget.previousElementSibling)}>
        ${t.add}
      </button>
    </div>
  </div>`}async function Fd(o,e,t){let n=Vm(o,e,t);return!n||o.confirm&&!await t.confirm(o.confirm_text?.trim()||null)?!1:(await n(),!0)}function Vm(o,e,t){let n=o.target?.trim()??"";switch(o.action){case"perform_action":{let i=/^([a-z0-9_]+)\.([a-z0-9_]+)$/.exec(n);return i?()=>t.callService(i[1],i[2],{...o.data??{}}):null}case"navigate":return n?()=>t.navigate(n):null;case"url":return/^(https?:\/\/\S+|\/(?!\/)\S*)$/i.test(n)?()=>t.openUrl(n):null;case"toggle":case"more_info":case"camera":{let i=n||e;return i?o.action==="toggle"?()=>t.callService("homeassistant","toggle",{entity_id:i}):o.action==="more_info"?()=>t.moreInfo(i):()=>t.camera(i):null}default:return null}}var Bm=["tap","hold","double_tap"];function Hd(o){return!!o&&Bm.some(e=>!!o[e]&&o[e].action!=="default")}function Cd(o,e,t){let n=new Map;for(let i of o){for(let r of i.placements)Hd(r.actions)&&!n.has(r.entity_id)&&n.set(r.entity_id,{actions:r.actions,entity:r.entity_id});for(let r of i.furniture){if(!Hd(r.actions))continue;let s=e(r.id)??`item:${r.id}`;n.has(s)||n.set(s,{actions:r.actions,entity:t(r)})}}return n}function Ti(o,e){let t=o?.actions[e];return t&&t.action!=="default"?t:null}var Mi=class{pending=null;wait;constructor(e=320){this.wait=e}tap(e,t,n,i){if(this.pending?.id===e){this.doubleTap(e);return}if(this.flush(),!t){n();return}let r=setTimeout(()=>{this.pending=null,n()},this.wait);this.pending={id:e,timer:r,single:n,double:i}}doubleTap(e){let t=this.pending;return!t||t.id!==e?!1:(clearTimeout(t.timer),this.pending=null,t.double(),!0)}flush(){let e=this.pending;e&&(clearTimeout(e.timer),this.pending=null,e.single())}cancel(){this.pending&&clearTimeout(this.pending.timer),this.pending=null}};var Um=[["radiator_cold","effects_radiator_cold"],["radiator_hot","effects_radiator_hot"],["tank_cold","effects_tank_cold"],["tank_hot","effects_tank_hot"]];function zd(o,e,t,n,i="fp3d-set-field"){let r=e??{},s=(d,u)=>{let p={...r,[d]:u};for(let h of Object.keys(p))(p[h]===null||p[h]===void 0)&&delete p[h];n(Object.keys(p).length?p:null)},a=He(o),l=(d,u,p,h,_)=>g`<label class=${i}
      >${u}
      <input
        type="number"
        step=${_}
        placeholder=${String(Math.round(p(ws[d])))}
        .value=${typeof r[d]=="number"?String(Math.round(p(r[d])*10)/10):""}
        ?disabled=${t}
        @change=${b=>{let m=b.target.value.trim(),f=Number(m);s(d,m===""||!Number.isFinite(f)?null:h(f))}}
    /></label>`,c=d=>d;return g`${l("motion_seconds",M(o,"effects_motion_seconds"),c,d=>Math.max(0,Math.min(3600,Math.round(d))),5)}
  ${l("camera_seconds",M(o,"effects_camera_seconds"),c,d=>Math.max(0,Math.min(3600,Math.round(d))),5)}
  ${Um.map(([d,u])=>l(d,`${M(o,u)} (${a})`,p=>nt(o,p),p=>Math.max(-20,Math.min(100,Ot(p,a))),1))}`}var qm={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Yt(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function Fs(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return r<=.1?0:Math.min(1,.3+r/10)}function Od(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let i=qm[n.state];if(!i)return null;let r=n.attributes,s=i.cloud??0;typeof r.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,r.cloud_coverage/100)));let a=i.wind??0;if(typeof r.wind_speed=="number"){let c=r.wind_speed_unit==="m/s"?r.wind_speed*3.6:r.wind_speed_unit==="mph"?r.wind_speed*1.609:r.wind_speed;a=Math.max(a,Math.min(1,c/60))}let l=Fs(o,t);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:n.entity_id,condition:n.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:s,wind:a,lightning:!!i.lightning}}function Dd(o,e){let t=new Set(e??Gl);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var jm=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),Km=new Set(["power","plug","connectivity","running"]);function Ai(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return Km.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return jm.has(n)||n.startsWith("ob ")}function Os(o){let e=Pe(o);if(!e)return!1;if(Gm.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var Gm=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var we=["#3a3f47","#3a3f47"],Qt=["#23262b","#23262b"],qe=["#5a3b25","#5a3b25"],fe=["#1f4fa8","#1f4fa8"],xt=["#e3b616","#e3b616"],te=["#2f7d3b","#2f7d3b"],Ld={default:{rest:we,bio:qe,paper:fe,plastic:xt,glass:te,garden:te,recycling:xt,other:we},DE:{rest:Qt,bio:qe,paper:fe,plastic:xt,glass:te,garden:te,recycling:xt},AT:{rest:we,bio:qe,paper:[we[0],"#c0262d"],plastic:xt,glass:te,garden:te},CH:{rest:["#d8d8d8","#d8d8d8"],bio:te,paper:fe,plastic:we,glass:te,garden:te},NL:{rest:we,bio:te,paper:fe,plastic:["#3a3f47","#e57a1f"],glass:te,garden:te},BE:{rest:we,bio:te,paper:fe,plastic:fe,glass:te,garden:te},GB:{rest:Qt,bio:["#3a3f47","#5a3b25"],paper:fe,plastic:fe,glass:Qt,garden:qe,recycling:fe},US:{rest:Qt,bio:te,paper:fe,plastic:fe,glass:fe,garden:te,recycling:fe},CA:{rest:Qt,bio:te,paper:fe,plastic:fe,glass:fe,garden:te,recycling:fe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:we,bio:qe,paper:[we[0],"#e3b616"],plastic:[we[0],"#e3b616"],recycling:[we[0],"#e3b616"],glass:te,garden:te},IT:{rest:we,bio:qe,paper:fe,plastic:xt,glass:te,garden:te},ES:{rest:we,bio:qe,paper:fe,plastic:xt,glass:te,garden:te},PT:{rest:we,bio:qe,paper:fe,plastic:xt,glass:te,garden:te},DK:{rest:Qt,bio:te,paper:fe,plastic:we,glass:te,garden:te},SE:{rest:Qt,bio:qe,paper:fe,plastic:we,glass:te,garden:te},NO:{rest:we,bio:qe,paper:fe,plastic:we,glass:te,garden:te},FI:{rest:we,bio:qe,paper:fe,plastic:we,glass:te,garden:te}},Vd="DE";function Bd(o){Vd=o}function Ud(o){let e=o?.config?.country;if(e)return e.toUpperCase();let t=(o?.language??"").split("-")[1];return t?t.toUpperCase():"DE"}function Ym(o,e){return Ld[e]?.[o]??Ld.default[o]??we}function qd(o,e=Vd){let t=Ym(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var Qm={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function zs(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&n.includes(i.trim())):e==="other"?!1:Qm[e].some(i=>n.includes(i))}function Ds(o){let e=typeof o=="string"?o:o?.date??o?.dateTime;if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Jm(o){return o.map(e=>({day:Ds(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function jd(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function Ls(o,e,t=new Date,n=42){let i=new Map,r=o.callApi;if(!r)return i;let s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=Kd(s,n);return await Promise.all(e.map(async l=>{try{let c=await r.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);i.set(l,Jm(Array.isArray(c)?c:[]))}catch{}})),i}var Mn=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),Kd=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),Pi=(o,e)=>Math.round((Mn(e).getTime()-Mn(o).getTime())/864e5);function Cs(o,e,t={}){let n=t.from??14,i=t.until??12,r=e.getHours()+e.getMinutes()/60;return o===1&&r>=n||o===0&&r<i}function Gd(o,e,t,n=new Date,i=3){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return[];if(r.startsWith("calendar.")){let a=Mn(n);return(t.get(r)??[]).filter(l=>l.day>=a&&zs(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,i)}let s=Ws(o,e,t,n);return s?[{day:s.day,summary:s.summary}]:[]}function Ws(o,e,t,n=new Date,i={}){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return null;let s=Mn(n);if(r.startsWith("calendar.")){let d=(t.get(r)??[]).find(p=>p.day>=s&&zs(p.summary,o.bin_kind??"rest",o.bin_match));if(!d)return null;let u=Pi(s,d.day);if(u===0&&n.getHours()+n.getMinutes()/60>=(i.until??12)){let p=(t.get(r)??[]).find(h=>h.day>s&&zs(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:Pi(s,p.day),day:p.day,summary:p.summary,glow:Cs(Pi(s,p.day),n,i)}}return{days:u,day:d.day,summary:d.summary,glow:Cs(u,n,i)}}let a=e.states[r];if(!a)return null;let l=tg(a,n);if(l===null||l<0)return null;let c=Kd(s,l);return{days:l,day:c,summary:String(a.attributes.friendly_name??""),glow:Cs(l,n,i)}}function Xm(o,e){let t=typeof o=="string"&&o!=="none"?o:null,n=t?e.states[t]:void 0;return!!n&&Zd.has(String(n.state).toLowerCase())}function Ii(o,e){return Xm(o.bin_out,e)}function Zm(o){let e=o.bin_kerb;return e&&Number.isFinite(e.x)&&Number.isFinite(e.z)?[e.x,e.z]:null}function Yd(o,e,t){let n=Zm(o);return n&&t?{at:n,kerb:!0,cue:null}:{at:[o.x,o.z],kerb:!1,cue:n&&e&&!t?n:null}}function Qd(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function Jd(o,e=.3){let t=o.filter(a=>!a.icon),n=t.map((a,l)=>l),i=a=>n[a]===a?a:n[a]=i(n[a]);for(let a=0;a<t.length;a++)for(let l=a+1;l<t.length;l++){let c=t[a],d=t[l];c.floorId===d.floorId&&Math.hypot(c.x-d.x,c.z-d.z)<=c.r+d.r+e&&(n[i(l)]=i(a))}let r=new Map;t.forEach((a,l)=>r.set(i(l),[...r.get(i(l))??[],a]));let s=[];for(let a of r.values())a.sort((l,c)=>l.days-c.days||l.name.localeCompare(c.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,c)=>l+c.x,0)/a.length,z:a.reduce((l,c)=>l+c.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of o)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function Xd(o,e={}){let t=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,n=o.length?Math.min(...o.map(i=>i.days)):0;return new Set(o.filter(i=>(t===null||i.days<=t)&&(!e.nextOnly||i.days===n)).map(i=>i.id))}function eg(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o),i,r,s;if(t)[i,r,s]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),c=Number(n[3]);n[2]==="/"&&c>12&&l<=12&&([l,c]=[c,l]),s=l,r=c;let d=n[4];i=d?d.length===2?2e3+Number(d):Number(d):e.getFullYear(),!d&&new Date(i,r-1,s)<Mn(e)&&(i+=1)}else return null;if(r<1||r>12||s<1||s>31)return null;let a=new Date(i,r-1,s);return a.getMonth()===r-1?a:null}function tg(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let i=/^\d{4}-\d{2}-\d{2}T/.test(n)?Ds(n):eg(n,e);if(i)return Pi(e,i);let r=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(r))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(r))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(r)??/\bin\s+(\d+)/.exec(r);if(s)return Number(s[1]);let a=r.match(/\d+/g);return a?Number(a[a.length-1]):null}var Zd=new Set(["on","open","true","detected","home"]);function Wd(o){let e=o?.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function eu(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let i=e.states[n];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let r=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!r){let l=Number(i.state);return Zd.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=Wd(i),a=Wd(e.states[r]);return s===null||t-s>7*864e5?!1:a===null||s>a+1e3}function tu(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:ig(o)}var nu=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function Ns(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let r=n.attributes,s=String(r.problem??"").toLowerCase();return String(r.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let i=nu(n);return i!==null&&i<(o.moisture_min??20)}function Vs(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let s=Number(t),a=n==="s"?s/60:n==="h"?s*60:s;return Math.max(0,Math.round(a))}let i=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(i)return Number(i[1])*60+Number(i[2])+Math.round(Number(i[3]??0)/60);let r=Date.parse(t);return Number.isFinite(r)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((r-e)/6e4)):null}var ng=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function Bs(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return ng.has(e)}var og=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function Us(o,e,t){let n=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&og.has(n))return!0;let i=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),r=!!o&&!i&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return e!==null&&e<=t&&!r}function ou(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function Nd(o,e,t,n){let i=typeof o=="string"&&o!=="none"?o:null,r=i?t.states[i]:void 0;if(!i||!r||r.state==="unavailable"||r.state==="unknown")return!1;if(i.startsWith("binary_sensor.")||i.startsWith("input_boolean."))return r.state==="on";let s=nu(r);if(s!==null)return s<=(e??10);let a=Ds(r.state);return!!a&&a.getTime()<=Mn(n).getTime()}function iu(o,e,t=new Date){let n=[];return Nd(o.service,o.service_min,e,t)&&n.push(o.service),o.service2!==o.service&&Nd(o.service2,o.service2_min,e,t)&&n.push(o.service2),n}var kt=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),ru=o=>!!o&&(o.state==="on"||o.state==="open");function Ri(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let i of kt(o)){let r=e.states[i];if(ru(r)&&r?.last_changed&&t-Date.parse(r.last_changed)>=n)return i}return null}function su(o,e,t=Date.now()){let n=null;for(let i of o)if(!(i.type!=="fridge"&&i.type!=="fridge_smart"))for(let r of kt(i)){let s=e.states[r];if(!ru(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(i.door_alarm??2)*6e4-t;a>0&&(n===null||a<n)&&(n=a)}return n}var Ei=class{running=new Map;ended=new Map;update(e,t,n,i=Date.now()){let r=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;r===!0&&this.ended.set(e,i);let s=this.ended.get(e);return s===void 0?!1:i-s>12*36e5||n(s)?(this.ended.delete(e),!1):!0}};function ig(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var rg=10*6e4;function Tn(o,e){let t=e?Date.parse(o.states[e]?.last_changed??""):NaN;return Number.isFinite(t)?t:void 0}function sg(o,e){let t=e.map(n=>Tn(o,n)).filter(n=>n!==void 0);return t.length?Math.max(...t):void 0}var ag=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),au={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function qs(o,e,t){let n=[];for(let d of e.floors)for(let u of d.rooms){let h=[...ge(o,u.area_id).filter(_=>{let b=_.startsWith("binary_sensor.")?au[String(o.states[_]?.attributes.device_class)]:void 0;return!!b&&b!=="water"}),...uo(o,d,u,"leak")];h.length&&n.push({floorId:d.id,roomId:u.id,sensors:h})}let i=Object.keys(o.states),r=e.settings.rain_warning===!1?null:Yt(o,t??e.settings.weather_entity),s=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=e.floors.flatMap(d=>d.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&kt(u).length).map(u=>({floorId:d.id,roomId:d.rooms.find(p=>p.points.length>=3&&U([u.x,u.z],p.points))?.id??null,furnitureId:u.id,ids:kt(u)}))),l=e.settings.rain_warning===!1?null:e.settings.rain_entity,c=l&&o.states[l]?l:null;return{rooms:n,alarms:i.filter(d=>d.startsWith("alarm_control_panel.")),weather:r,outage:s,rain:c,fridges:a}}function js(o){return[...o.rooms.flatMap(e=>e.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(e=>e.ids)]}function lu(o,e,t,n){let i=[];for(let a of t.rooms)for(let l of a.sensors){let c=o.states[l];c?.state==="on"&&i.push({kind:au[String(c.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId,since:Tn(o,l)})}let r=t.rain?Fs(o,t.rain):null;if(r!==null?r>0:!!t.weather&&ag.has(o.states[t.weather]?.state??""))for(let a of e.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let c=n.get(l.id);if(!c)continue;let d=it(o,c,"window");if(d.open<.5&&d.tilt<.5&&d.open2<.5&&d.tilt2<.5)continue;let u=sg(o,[c.contact,c.tilt,c.contact2,c.tilt2]);i.push({kind:"window_rain",entity:c.contact??c.tilt??c.contact2??l.id,roomId:l.room_id,floorId:a.id,since:u})}if(t.outage&&Ai(o.states[t.outage])){let a=Number.isFinite(Number(o.states[t.outage]?.state));i.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null,since:a?void 0:Tn(o,t.outage)})}if(e.settings.alert_unavailable){let a=Date.now(),l=new Set;for(let c of e.floors)for(let d of c.openings){let u=n.get(d.id);if(u)for(let p of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!p||l.has(p))continue;let h=o.states[p];if(!h||h.state!=="unavailable"&&h.state!=="unknown")continue;let _=Date.parse(h.last_changed??"");Number.isFinite(_)&&a-_<rg||(l.add(p),i.push({kind:"contact_unavailable",entity:p,roomId:d.room_id,floorId:c.id,since:Number.isFinite(_)?_:void 0}))}}}for(let a of t.fridges??[]){let l=e.floors.find(d=>d.id===a.floorId)?.furniture.find(d=>d.id===a.furnitureId),c=l?Ri(l,o):null;c&&i.push({kind:"fridge_door",entity:c,roomId:a.roomId,floorId:a.floorId,since:Tn(o,c)})}for(let a of t.alarms){let l=o.states[a]?.state;l==="triggered"?i.push({kind:"alarm",entity:a,roomId:null,floorId:null,since:Tn(o,a)}):l==="pending"&&i.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null,since:Tn(o,a)})}return i}function lg(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function cu(o){return o.kind==="water"&&!o.color?td:lg(o)}function Ks(o,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let i=o?j(o,t.entity):t.entity,r=M(o,`alert_${t.kind}`,{name:i});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${M(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${r}`:r}var cg=new Set(["smoke","co","gas","water","alarm","alarm_pending"]),Hi=new Set(["smoke","gas","co","water","alarm","alarm_pending","window_rain","power_outage","fridge_door","contact_unavailable"]);function Fi(o){return!cg.has(o)}var Ee=o=>`${o.kind}:${o.entity}`,Gs=o=>`${Ee(o)}@${o.at}`;function du(o,e){return e.since===void 0||e.since<=o.at}function uu(o,e){let t=e.alert_snoozed??[],n=e.alert_ignored??[];if(!t.length&&!n.length)return o;let i=new Map(t.map(s=>[Ee(s),s])),r=new Set(n.filter(s=>Fi(s.kind)).map(Ee));return o.filter(s=>{let a=Ee(s);if(r.has(a))return!1;let l=i.get(a);return!l||!du(l,s)})}function pu(o,e){if(!o?.length)return[];let t=new Map(e.map(n=>[Ee(n),n]));return o.filter(n=>{let i=t.get(Ee(n));return!i||!du(n,i)})}function hu(o,e,t,n){let i={kind:e.kind,entity:e.entity},r=Ee(i),s=(o.alert_snoozed??[]).filter(l=>Ee(l)!==r),a=(o.alert_ignored??[]).filter(l=>Ee(l)!==r);return t&&Fi(e.kind)?{alert_snoozed:s,alert_ignored:[...a,i]}:{alert_snoozed:[...s,{...i,at:Math.max(n,e.since??0)}],alert_ignored:a}}function fu(o,e){return(o??[]).filter(t=>Ee(t)!==Ee(e))}function dg(o,e){return`${Hi.has(e.kind)?M(o,`alert_short_${e.kind}`):e.kind} \xB7 ${o?j(o,e.entity):e.entity}`}function mu(o,e,t,n){return e?.length?g`<div class="fp3d-ignored">
    <style>
      .fp3d-ignored {
        grid-column: 1 / -1;
        display: grid;
        gap: 4px;
        margin: 4px 0;
      }
      .fp3d-ignored b {
        font-size: 12.5px;
      }
      .fp3d-ignored p {
        margin: 0;
        font-size: 12px;
        opacity: 0.75;
      }
      .fp3d-ignored-row {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 36px;
      }
      .fp3d-ignored-row span {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
      }
      .fp3d-ignored-row button {
        min-height: 32px;
        padding: 0 12px;
        border-radius: 8px;
        border: 1px solid currentColor;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 12.5px;
        cursor: pointer;
      }
      .fp3d-ignored-row button:disabled {
        opacity: 0.5;
        cursor: default;
      }
    </style>
    <b>${M(o,"alert_ignored")}</b>
    <p>${M(o,"alert_ignored_hint")}</p>
    ${e.map(i=>g`<div class="fp3d-ignored-row" data-key=${Ee(i)}>
        <span title=${i.entity}>${dg(o,i)}</span>
        <button ?disabled=${t} @click=${()=>n(i)}>${M(o,"alert_restore")}</button>
      </div>`)}
  </div>`:y}function yu(o){let e=oe(o);return e===null||e==="wallbox"}function xu(o){let e=new Map,t=new Set(o.map(n=>n.powerEntity));for(let n of o)n.circuit&&n.circuit!==n.powerEntity&&t.has(n.circuit)&&e.set(n.circuit,(e.get(n.circuit)??0)+n.power);return o.map(n=>Math.max(0,n.power-(e.get(n.powerEntity)??0)))}var Ne=.03,wo=o=>o&&o!=="none"?o:null;function Xt(o,e=t=>wo(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let i of n.furniture){let r=e(i),s=oe(i.type);if(s==="meter")t.grid??=r,t.gridExport??=wo(i.export);else if((s==="inverter"||s==="solar")&&r&&!t.solar.includes(r))t.solar.push(r);else if(s==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let a=wo(i.charge);a&&!t.charge.includes(a)&&t.charge.push(a),(r||a)&&t.batteries.push({power:r,charge:a});let l=wo(i.soc);l&&!t.soc.includes(l)&&t.soc.push(l)}}return t}function Qs(o){for(let e of o.floors){let t=e.furniture.find(n=>oe(n.type)==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}async function Js(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),i=new Map;for(let r of e)i.set(r,(n?.[r]??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return i}catch{return null}}var ku=.07;function ue(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function ug(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function xo(o,e){if(ug(o,e))return e;let t=o.entities?.[e]?.device_id;if(!t)return null;let n=kc(o,t),i=tt(o,e),r=Qr(o,t).filter(l=>l!==e),s=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(r.includes(s))return s;let a=r.find(l=>i!==null&&tt(o,l)===i);return a||n?a??null:r.find(l=>i===null||tt(o,l)===null||tt(o,l)===i)??null}function $u(o,e,t=Xt(e)){let n=e.energy,i=new Set([n.grid,n.solar,n.battery,t.grid,t.gridExport,...t.solar,...t.battery,...t.charge].filter(Boolean)),r=[],s=new Set;for(let a of e.floors)for(let l of a.placements){let c=xo(o,l.entity_id);if(!c||i.has(c)||s.has(c))continue;s.add(c);let d=wo(l.circuit);r.push({id:l.entity_id,powerEntity:c,floorId:a.id,x:l.x,z:l.z,power:Math.max(0,ue(o.states[c])??0),...d?{circuit:d}:{},...l.energy?{energy:l.energy}:{}})}return r}function Su(o,e,t,n=Xt(e)){let i=e.energy,r=i.grid??n.grid,s=r?ue(o.states[r],i.grid_invert):null;if(!i.grid&&n.gridExport){let b=Math.max(0,ue(o.states[n.gridExport])??0);s=Math.max(0,s??0)-b}let a=i.solar?ue(o.states[i.solar]):null;if(!i.solar&&n.solar.length){let b=n.solar.map(m=>ue(o.states[m])).filter(m=>m!==null);a=b.length?b.reduce((m,f)=>m+f,0):null}let l=i.battery?ue(o.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let b=n.batteries.map(m=>{if(m.charge){let f=m.power?Math.max(0,ue(o.states[m.power])??0):0,v=Math.max(0,ue(o.states[m.charge])??0);return f-v}return m.power?ue(o.states[m.power],i.battery_invert):null}).filter(m=>m!==null);l=b.length?b.reduce((m,f)=>m+f,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(b=>Number(o.states[b]?.state)).filter(b=>Number.isFinite(b)),u=d.length?d.reduce((b,m)=>b+m,0)/d.length:NaN,p=i.tariff?o.states[i.tariff]:void 0,h=Number(p?.state),_=i.consumption?ue(o.states[i.consumption]):null;return _!==null?_=Math.max(0,_):s!==null||a!==null||l!==null?_=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(_=xu(t).reduce((b,m)=>b+m,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:_}}function Jt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function $t(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function pg(o,e){let t=o.length,n=o.map((i,r)=>{let s=o[(r+1)%t],a=s[0]-i[0],l=s[1]-i[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[i[0]+d*e[r],i[1]+u*e[r]],d:[a/c,l/c],n:[d,u]}});return o.map((i,r)=>{let s=n[(r-1+t)%t],a=n[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[r],i[1]+a.n[1]*e[r]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function hg(o){return Be(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function Xs(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=bt(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let r of o.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=hg(r),l=s.length,c=s.map((p,h)=>{let _=a?(l-2-h+l)%l:h,b=i.some(m=>!m.exterior&&m.sources.some(f=>f.room_id===r.id&&f.edge===_));return ku+(b?t/2:0)}),d=pg(s,c).map(p=>Jt(n,p)),u=d.map((p,h)=>[p,d[(h+1)%l]]);for(let[p,h]of u)$t(n,p,h);n.rings.set(r.id,u)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=vo(n,r.roomLeft,s),l=vo(n,r.roomRight,s);a!==null&&l!==null&&$t(n,a,l)}return mg(n),n}var fg=1;function mg(o){let e=[...o.rings.entries()];for(;;){let t=new Array(o.pos.length).fill(-1),n=0;for(let s=0;s<o.pos.length;s++){if(t[s]>=0)continue;let a=[s];for(t[s]=n;a.length;)for(let{to:l}of o.adj[a.pop()])t[l]<0&&(a.push(l),t[l]=n);n++}if(n<2)return;let i=null;for(let[,s]of e)for(let a of new Set(s.flat()))for(let[l,c]of e)if(t[c[0][0]]!==t[a])for(let[d,u]of c){let p=o.pos[a],h=o.pos[d],_=o.pos[u],b=_[0]-h[0],m=_[1]-h[1],f=Math.min(1,Math.max(0,((p[0]-h[0])*b+(p[1]-h[1])*m)/(b*b+m*m||1))),v=Math.hypot(p[0]-h[0]-b*f,p[1]-h[1]-m*f);(!i||v<i.d)&&(i={a,room:l,d:v})}if(!i||i.d>fg+2*ku)return;let r=vo(o,i.room,o.pos[i.a]);if(r===null)return;$t(o,i.a,r)}}function vo(o,e,t){let n=o.rings.get(e);if(!n)return null;let i=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,p=Math.min(1,Math.max(0,((t[0]-a[0])*c+(t[1]-a[1])*d)/u)),h=[a[0]+c*p,a[1]+d*p],_=Math.hypot(t[0]-h[0],t[1]-h[1]);(!i||_<i.d)&&(i={seg:s,q:h,d:_})}if(!i)return null;let r=Jt(o,i.q);return $t(o,r,i.seg[0]),$t(o,r,i.seg[1]),r}function zi(o,e,t){let n=o.pos[t],i=vo(o,e.id,n);if(i===null)return!1;let r=o.pos[i],s=o.pos[o.adj[i][0].to],a=o.pos[o.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=[(a[0]-s[0])/l,(a[1]-s[1])/l],d=(n[0]-r[0])*c[0]+(n[1]-r[1])*c[1],u=(n[1]-r[1])*c[0]-(n[0]-r[0])*c[1];if(Math.abs(d)<.01||Math.abs(u)<.01)return $t(o,t,i),!0;let p=[r[0]+c[0]*d,r[1]+c[1]*d],h=[r[0]-c[1]*u,r[1]+c[0]*u],_=Jt(o,U(h,e.points)||!U(p,e.points)?h:p);return $t(o,i,_),$t(o,_,t),!0}function yo(o,e){let t=o.rooms.filter(r=>r.points.length>=3),n=t.find(r=>U(e,r.points));if(n)return n;let i=null;for(let r of t)for(let s of r.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||a<i.d)&&(i={room:r,d:a})}return i?.room??null}function Mu(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(t[e]=0;;){let r=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(r<0||t[s]<t[r])&&(r=s);if(r<0)break;i[r]=!0;for(let{to:s,w:a}of o.adj[r])t[r]+a<t[s]-1e-9&&(t[s]=t[r]+a,n[s]=r)}return{dist:t,prev:n}}function gu(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var _u=new WeakMap;function gg(o,e){let t=Qs(o),n=o.floors.find(d=>d.id===t.floor_id),i=[],{wall_exterior:r,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=o.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,p=l.get(d.id),h=gu(p,e);i.push({floorId:n.id,a:[t.x,Ne,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:p,kind:h});let _=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[t.x,u?-.2:d.height,t.z],b:[t.x,Ne,t.z],dist:_,members:p,kind:h}),a.set(d.id,_+.25)}for(let d of c){let u=Xs(d,r,s),p=yo(d,[t.x,t.z]);if(!p)continue;let h=Jt(u,[t.x,t.z]);if(!zi(u,p,h))continue;let _=[];for(let w of l.get(d.id)){let x=e[w],A=yo(d,[x.x,x.z]);if(!A)continue;let E=Jt(u,[x.x,x.z]);zi(u,A,E)&&_.push({node:E,member:w})}let{dist:b,prev:m}=Mu(u,h),f=new Map;for(let w of _)if(Number.isFinite(b[w.node]))for(let x=w.node;m[x]>=0;x=m[x]){let A=m[x],E=`${A}>${x}`,D=f.get(E)??{a:A,b:x,members:[]};D.members.push(w.member),f.set(E,D)}let v=a.get(d.id)??0;for(let{a:w,b:x,members:A}of f.values()){let E=u.pos[w],D=u.pos[x],H=gu(A,e);i.push({floorId:d.id,a:[E[0],Ne,E[1]],b:[D[0],Ne,D[1]],dist:v+b[w],members:A,kind:H})}}return i}function Tu({building:o,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:r}){let s=Qs(o);if(!s)return[];let a=o.floors.find(S=>S.id===s.floor_id);if(!a)return[];let l=S=>r?.get(S),c=Ci(o,"inverter"),d=Ci(o,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=S=>{let P=null;for(let R of c)R.floorId===S.floorId&&(!P||Math.hypot(R.x-S.x,R.z-S.z)<Math.hypot(P.x-S.x,P.z-S.z))&&(P=R);return P},p=(S,P)=>S.reduce((R,q)=>!R||Math.hypot(q.x-P.x,q.z-P.z)<Math.hypot(R.x-P.x,R.z-P.z)?q:R,null),h=S=>l(S.id)??(d.length===1?t.battery??0:0),_=new Map;for(let S of d){let P=u(S);P&&_.set(S.id,P)}let b=xu(e),m=e.map((S,P)=>({floorId:S.floorId,x:S.x,z:S.z,kind:S.wallbox?"wallbox":"consumer",power:b[P],load:b[P]}));for(let S of d){if(_.has(S.id)||t.battery===null)continue;let P=h(S);m.push({floorId:S.floorId,x:S.x,z:S.z,kind:"battery",power:Math.abs(P),load:-P})}let f=`${s.floor_id}:${s.x},${s.z}|${m.map(S=>`${S.floorId}:${S.x},${S.z}:${S.kind}`).join(";")}`,v=_u.get(o);v||_u.set(o,v=new Map);let w=v.get(f);w||(w=gg(o,m),v.clear(),v.set(f,w));let x=w.map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.kind==="battery"?S.members.reduce((P,R)=>P+m[R].power,0):Math.max(0,S.members.reduce((P,R)=>P+m[R].load,0)),kind:S.kind})),A=t.grid!==null?Zs(o):null,E=o.settings.roof.cables??[],D=S=>E.find(P=>P.id===S),H=(S,P)=>S.map(R=>({...R,key:P}));if(A){let S=t.grid>=0,P=D("grid"),R=P?_o(o,P,[A.end[0],a.elevation+Math.max(Ne,A.height),A.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...A.height>.05?[[A.end[0],A.height,A.end[1]]]:[],[A.end[0],Ne,A.end[1]],[A.wall[0],Ne,A.wall[1]],[s.x,Ne,s.z]],q=P?An(o,S?R:[...R].reverse(),Math.abs(t.grid),S?"grid":"export",a):Pu(a.id,S?R:[...R].reverse(),Math.abs(t.grid),S?"grid":"export",0);x.push(...H(q,"grid"))}if(t.battery!==null&&t.battery>0)for(let S of x)S.kind==="battery"&&([S.a,S.b]=[S.b,S.a]);let W=o.settings.roof.solar??[],F=o.settings.roof.strings??[],$=new Map;if(i&&W.length){let S=[...yt(o),...mo(o)];for(let P of W){let R=i.get(P.id)??0,q=P.string?F.find(X=>X.id===P.string)?.inverter:null,C=q?d.find(X=>X.id===q)??null:null,O=q&&!C?c.find(X=>X.id===q)??null:null;if(C){let X=_.get(C.id);X&&$.set(X.id,($.get(X.id)??0)+R);let xe=C.variant==="wall"?.5+C.h:.9,Ae=D(`solar:${P.id}`),pe=Ae?wu(o,P):null,Ve=o.floors.find(ln=>ln.id===C.floorId);Ae&&pe&&Ve?x.push(...H(An(o,_o(o,Ae,pe,[C.x,Ve.elevation+xe,C.z]),R,"solar",Ve),`solar:${P.id}`)):x.push(...H(vu(o,P,R,C,xe),`solar:${P.id}`));continue}if(!O&&c.length){let X=Kt(o,P,S),xe=X?Ed(X,P):[P.u,P.v];O=c.reduce((Ae,pe)=>!Ae||Math.hypot(pe.x-xe[0],pe.z-xe[1])<Math.hypot(Ae.x-xe[0],Ae.z-xe[1])?pe:Ae,null)}O&&$.set(O.id,($.get(O.id)??0)+R);let z=O??{floorId:s.floor_id,x:s.x,z:s.z},ae=O?1.1+O.h:1.5,J=D(`solar:${P.id}`),Se=J?wu(o,P):null,ne=o.floors.find(X=>X.id===z.floorId);J&&Se&&ne?x.push(...H(An(o,_o(o,J,Se,[z.x,ne.elevation+ae,z.z]),R,"solar",ne),`solar:${P.id}`)):x.push(...H(vu(o,P,R,z,ae),`solar:${P.id}`))}}let I=Ci(o,"solar");for(let S of I){let P=Math.max(0,l(S.id)??(W.length?0:(t.solar??0)/I.length)),R=u(S),q=R?null:p(d.filter(z=>z.floorId===S.floorId),S);if(R)$.set(R.id,($.get(R.id)??0)+P);else if(q&&_.get(q.id)){let z=_.get(q.id);$.set(z.id,($.get(z.id)??0)+P)}let C=R??q??{floorId:s.floor_id,x:s.x,z:s.z,h:0,variant:null},O=R?1.1+R.h:q?q.variant==="wall"?.5+q.h:.9:1.5;x.push(...H(Ys(o,S,Math.min(.3,S.h),C,O,P,"solar",0),`solar:${S.id}`))}!(i&&W.length)&&t.solar!==null&&!c.length&&!I.length&&x.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Ne,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let S of c){let P=1.1+S.h,R=d.filter(O=>_.get(O.id)===S),q=l(S.id);if(q===void 0){q=$.get(S.id)??(c.length===1?t.solar??0:0);for(let O of R)q+=h(O)}let C=o.floors.find(O=>O.id===S.floorId);if(t.solar!==null||t.battery!==null){let O=D(`inv:${S.id}`),z=O&&C?An(o,_o(o,O,[S.x,C.elevation+P,S.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,q),"inverter",C):Ys(o,S,P,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,q),"inverter",0);x.push(...H(z,`inv:${S.id}`))}for(let O of R){let z=h(O);if(t.battery===null&&l(O.id)===void 0)continue;let ae=O.variant==="wall"?.5+O.h:.9,J=D(`bat:${O.id}`),Se=J&&C?An(o,_o(o,J,[S.x,C.elevation+P-.1,S.z],[O.x,C.elevation+ae,O.z]),Math.abs(z),"battery",C):Ys(o,S,P-.1,O,ae,Math.abs(z),"battery",0);x.push(...H(z<=0?Se:Se.map(ne=>({...ne,a:ne.b,b:ne.a})).reverse(),`bat:${O.id}`))}}return x}function Zs(o){let e=Qs(o),t=e?o.floors.find(h=>h.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=o.settings,{walls:r}=bt(t.rooms,{exterior:n,interior:i},t.walls??[]),s=Ci(o,"grid_point")[0],a=r.filter(h=>h.exterior);if(s){let h=null;for(let m of a){let f=m.b[0]-m.a[0],v=m.b[1]-m.a[1],w=s.x-e.x,x=s.z-e.z,A=w*v-x*f;if(Math.abs(A)<1e-9)continue;let E=((m.a[0]-e.x)*v-(m.a[1]-e.z)*f)/A,D=((m.a[0]-e.x)*x-(m.a[1]-e.z)*w)/A;if(E<=0||E>1||D<0||D>1||h&&E>=h.t)continue;let H=Math.hypot(f,v)||1;h={q:[e.x+w*E,e.z+x*E],out:[v/H,-f/H],t:E}}let _=h?[h.q[0]+h.out[0]*(n/2+.05),h.q[1]+h.out[1]*(n/2+.05)]:[e.x,e.z],b=o.floors.flatMap(m=>m.furniture).find(m=>m.id===s.id)?.mount_y??0;return{floorId:t.id,wall:_,end:[s.x,s.z],height:Math.max(0,b)}}let l=null;for(let h of a){let _=h.b[0]-h.a[0],b=h.b[1]-h.a[1],m=_*_+b*b||1,f=Math.min(1,Math.max(0,((e.x-h.a[0])*_+(e.z-h.a[1])*b)/m)),v=[h.a[0]+_*f,h.a[1]+b*f],w=Math.hypot(e.x-v[0],e.z-v[1]),x=Math.sqrt(m);(!l||w<l.d)&&(l={q:v,out:[b/x,-_/x],d:w})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let h of o.floors)for(let _ of h.outdoor??[]){let b=_.points.length;for(let m=0;m<b;m++){let f=_.points[m],v=_.points[(m+1)%b],w=v[0]-f[0],x=v[1]-f[1],A=d[0]*x-d[1]*w;if(Math.abs(A)<1e-9)continue;let E=((f[0]-c[0])*x-(f[1]-c[1])*w)/A,D=((f[0]-c[0])*d[1]-(f[1]-c[1])*d[0])/A;E>0&&D>=0&&D<=1&&(u=Math.max(u,Math.min(15,E)))}}let p=u>n+1?u:n+2.5;return{floorId:t.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*p,c[1]+d[1]*p],height:0}}function Ci(o,e){let t=[];for(let n of o.floors)for(let i of n.furniture)(oe(i.type)??i.type)===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var bu=new WeakMap;function Au(o,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,r=bu.get(o);r||bu.set(o,r=new Map);let s=r.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,c=Xs(e,a,l),d=[t,n],u=yo(e,t),p=yo(e,n);if(u&&p){let h=Jt(c,t),_=Jt(c,n);if(zi(c,u,h)&&zi(c,p,_)){let{dist:b,prev:m}=Mu(c,h);if(Number.isFinite(b[_])){d.length=0;for(let f=_;f>=0;f=m[f])d.unshift(c.pos[f])}}}return r.set(i,d),d}function Ys(o,e,t,n,i,r,s,a){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let c=Au(o,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...c.map(u=>[u[0],Ne,u[1]]),[n.x,i,n.z]];return Pu(l.id,d,r,s,a)}function Pu(o,e,t,n,i){let r=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(r.push({floorId:o,a,b:l,dist:i,power:t,kind:n}),i+=c)}return r}function _o(o,e,t,n){let r=(o.floors.find(s=>s.id===e.floor_id)?.elevation??0)+Math.max(Ne,e.height);return[t,...e.points.map(s=>[s[0],r,s[1]]),n]}function wu(o,e){let t=Kt(o,e,[...yt(o),...mo(o)]);if(!t)return null;let[n,i]=Gt(t,e),r=e.u+n/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*r+t.es[0]*s,t.o[1]+t.eu[1]*r+t.es[1]*s,t.o[2]+t.eu[2]*r+t.es[2]*s]}function _g(o,e,t){let{wall_exterior:n,wall_interior:i}=o.settings,r=Xs(e,n,i),s=yo(e,t),a=s?vo(r,s.id,t):null;return a===null?t:r.pos[a]}function An(o,e,t,n,i){let r=[...o.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=i;for(let u of r)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<e.length;c++){let d=e[c],u=e[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-d[1])>.01){let _=Math.min(d[1],u[1]),b=Math.max(d[1],u[1]);for(let m of r)m.elevation>_+.01&&m.elevation<b-.01&&h.push(m.elevation);u[1]<d[1]&&h.reverse()}for(let _ of[...h,u[1]]){let b=(_-d[1])/(u[1]-d[1]||1),m=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*b,_,d[2]+(u[2]-d[2])*b]:u,f=s((d[1]+m[1])/2),v=Math.hypot(m[0]-d[0],m[1]-d[1],m[2]-d[2]);v>1e-4&&a.push({floorId:f.id,a:[d[0],d[1]-f.elevation,d[2]],b:[m[0],m[1]-f.elevation,m[2]],dist:l,power:t,kind:n}),l+=v,d=m}}return a}function vu(o,e,t,n,i){let r=[...yt(o),...mo(o)],s=Kt(o,e,r),a=o.floors.find(m=>m.id===n.floorId);if(!s||!a)return[];let[l,c]=Gt(s,e),d=(m,f)=>[s.o[0]+s.eu[0]*m+s.es[0]*f,s.o[1]+s.eu[1]*m+s.es[1]*f,s.o[2]+s.eu[2]*m+s.es[2]*f],u=e.u+l/2,p=a.elevation+Ne,h=[],_;if(s.unbounded){let m=d(u,e.v+c/2);_=[m[0],p,m[2]],h.push(_)}else if(s.wall){let m=d(u,e.v);_=[m[0],p,m[2]],h.push(m,_)}else{let m=d(u,e.v),f=As(o)??a,v=Math.max(a.elevation+.5,Math.min(m[1]-.25,f.elevation+f.height-.12));_=[m[0],v,m[2]],h.push(m)}let b=_g(o,a,[_[0],_[2]]);h.push([b[0],_[1],b[1]]),Math.abs(_[1]-p)>.05&&h.push([b[0],p,b[1]]);for(let m of Au(o,a,b,[n.x,n.z]).slice(1))h.push([m[0],p,m[1]]);return h.push([n.x,a.elevation+i,n.z]),An(o,h,t,"solar",a)}function Eu(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),i=new Array(n).fill(0),r=-1;for(let a of Object.values(o))for(let l of a){let c=typeof l.start=="number"?l.start:Date.parse(l.start),d=Math.floor((c-t.getTime())/3e5);d<0||d>=n||typeof l.mean!="number"||(i[d]+=Math.max(0,l.mean),r=Math.max(r,d))}return i.length=Math.max(r+1,n-3,1),{kwh:i.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...i),curve:i}}async function Iu(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function ea(o,e){let n=l=>42-(e>0?l/e*36:0),i=o.map((l,c)=>[c/288*220,n(l)]),r=i.map(([l,c],d)=>`${d?"L":"M"}${l.toFixed(1)} ${c.toFixed(1)}`).join(" "),[s,a]=i[i.length-1];return{line:r,area:`${r} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function ko(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var bg=400;function Ru(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let i=Math.min(1,(e.get(n.id)??0)/(ko(n)*(n.wp??bg)));t.set(n.id,i>.003?Math.pow(i,.6):0)}return t}function Hu(o,e,t){let n=new Map,i=e.settings.roof.solar??[],r=e.settings.roof.strings??[],s=ko,a=[],l=0,c=new Map;for(let p of i){let h=p.entity&&p.entity!=="none"?ue(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let _=p.string?r.find(m=>m.id===p.string):void 0,b=_?.entity&&_.entity!=="none"?ue(o.states[_.entity]):null;if(_&&b!==null){c.set(_.id,[...c.get(_.id)??[],p]);continue}a.push(p)}for(let[p,h]of c){let _=r.find(f=>f.id===p),b=Math.max(0,ue(o.states[_.entity])??0),m=h.reduce((f,v)=>f+s(v),0);for(let f of h)n.set(f.id,b*s(f)/m);l+=b}let d=Math.max(0,(t??0)-l),u=a.reduce((p,h)=>p+s(h),0);for(let p of a)n.set(p.id,u?d*s(p)/u:0);return n}var Fu={solar:[1,.78,.2],battery:[.25,1,.6],grid:[.3,.55,1]},Cu=["solar","battery","grid"];function bo(o,e,t,n){let i=o+e+t;return i<=0?{solar:0,battery:0,grid:0,[n]:1}:{solar:o/i,battery:e/i,grid:t/i}}function zu(o,e){let t=Math.max(0,e.solar??0),n=Math.max(0,e.battery??0),i=Math.max(0,e.grid??0);return o==="grid"?bo(0,0,1,"grid"):o==="solar"?bo(1,0,0,"solar"):o==="battery"&&n>0?bo(0,1,0,"battery"):o==="inverter"?bo(t,n,0,"solar"):bo(t,n,i,o==="battery"?"battery":o==="export"?"solar":"grid")}function Ou(o){let e=[0,0,0],t=0;for(let i of Cu){let r=Fu[i];for(let s=0;s<3;s++)e[s]+=r[s]*o[i];t+=Math.max(...r)*o[i]}let n=Math.max(...e);return n>0?e.map(i=>i*t/n):e}function Du(o){return Cu.filter(e=>o[e]>0).map(e=>({color:Fu[e],share:o[e]}))}var ta=["neon","blueprint","day","realistic"];function Pn(o){return o==="auto"||o==="theme"||ta.includes(o)?o:"theme"}var $o={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]},realistic:{night:[[24,32,54],[8,12,26]],day:[[178,208,234],[74,140,214]]}};function lt(o,e){return o==="theme"?e?.themes?.darkMode===!1?"day":"neon":o==="auto"?e?.states["sun.sun"]?.state==="above_horizon"?"day":"neon":o}function Lu(o,e,t,n){return t?e:o===e?lt(o,n):o}function wg(o){let e=o.trim().toLowerCase(),t=/^#([0-9a-f]{6})$/.exec(e);if(t)return`#${t[1]}`;if(t=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/.exec(e),t)return`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`;let n=/^rgba?\(\s*(\d{1,3})[\s,]+(\d{1,3})[\s,]+(\d{1,3})\s*(?:[,/]\s*[\d.]+%?\s*)?\)$/.exec(e);if(!n)return null;let i=n.slice(1,4).map(Number);return i.some(r=>r>255)?null:`#${i.map(r=>r.toString(16).padStart(2,"0")).join("")}`}function vg(o,e){let t=o?.themes?.theme;return!t||t==="default"?null:wg(e("--primary-color")??"")}function Oi(o){let e=parseInt(o.slice(1),16),t=i=>{let r=i/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4},n=.2126*t(e>>16&255)+.7152*t(e>>8&255)+.0722*t(e&255);return(n+.05)/.05>=1.05/(n+.05)?"#041018":"#ffffff"}function Di(o,e,t,n){return e&&/^#[0-9a-f]{6}$/i.test(e)?e:o==="theme"?vg(t,n):null}var Li={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Wu(o,e){let t=Li[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[i,r]=t[n],[s,a]=t[n-1];if(e<=i){let l=(e-s)/(i-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return t[t.length-1][1]}function Nu(o,e,t){let n=new Map;for(let i of e.floors)for(let r of i.rooms){let s=ht(o,i,r,t);s!==null&&n.set(r.id,s)}return n}function Vu(o){let e=Li[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([i,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-t)/(n-t)*100)}%`).join(", ")})`}function le(o,e){if(!Le(e))return M(o,`furn_${e}`);let t=fn(e);return t?Xo(t,o?.language??navigator.language):M(o,"pack_missing_item")}function Bu(o){return o.startsWith("hh:")?o.slice(3).split("#")[0]||null:o.startsWith("detect:")?o.slice(7)||null:/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(o)?o:null}var Ni=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Wi(o){return o&&o!=="none"?o:null}function En(o,e){if(e.type!=="parking")return null;let t=Wi(e.entity);if(t){let r=o.states[t];if(!r||!Ni.has(r.state.toLowerCase()))return null}let n=e.vehicle??null,i=Wi(e.type_entity);if(i&&e.types?.length){let r=(o.states[i]?.state??"").trim().toLowerCase();if(r){let s=l=>l.trim().toLowerCase(),a=e.types.find(l=>s(l.state)===r)??e.types.find(l=>s(l.state)&&r.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&Pe(n)?n:null}function na(o,e){let t=new Map;for(let n of e.floors)for(let i of n.furniture){let r=En(o,i);r&&t.set(i.id,r)}return t}function Uu(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[Wi(t.entity),Wi(t.type_entity)])).filter(e=>!!e)}function qu(o,e){let t=Pe(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var So=1800*1e3,yg=new Set(["motion","occupancy","presence"]);function ju(o,e){return e.startsWith("binary_sensor.")&&yg.has(String(o.states[e]?.attributes.device_class))}function Mo(o,e){let t=[],n=new Set,i=(r,s,a,l)=>{n.has(r)||(n.add(r),t.push({entity:r,floorId:s,x:a,z:l}))};for(let r of e.floors)for(let s of r.placements)if(ju(o,s.entity_id))i(s.entity_id,r.id,s.x,s.z);else if(B(s.entity_id)==="camera")for(let a of st(o,s.entity_id))i(a,r.id,s.x,s.z);for(let r of e.floors)for(let s of r.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Fe(s.points);for(let c of ge(o,s.area_id))ju(o,c)&&i(c,r.id,a,l)}return t}function Ku(o,e,t,n=So){let i=t-n,r=[];for(let[s,a]of Object.entries(o)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=i&&d<=t&&r.push({entity:s,time:d}),l=c.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=t)||r.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||r.push({entity:s.entity,time:a})}return r.sort((s,a)=>s.time-a.time)}function Gu(o,e,t,n=So){let i=new Map(o.map(s=>[s.entity,s])),r=[];for(let s of e){let a=i.get(s.entity);if(!a)continue;let l=r[r.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||r.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return r.slice(-40)}function Vi(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit"})}var Yu='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Ww=Math.PI/180,In=o=>Math.min(1,Math.max(0,o)),ct=(o,e,t)=>o.map((n,i)=>n+(e[i]-n)*t);var Qu={top:[74,140,214],horizon:[178,208,234]},Ju={top:[148,155,164],horizon:[192,197,203]},Xu={top:[8,12,26],horizon:[24,32,54]},xg=[244,156,104],Zu=[186,190,195],kg=[88,112,70],$g=[226,231,238];function ep(o,e){let t=e??{cloud:0,rain:0,snow:0,fog:0},n=o??90,i=In(t.cloud),r=In((n+6)/12),s=1-.32*In(t.rain),a=ct(Qu.top,Ju.top,i).map(_=>_*s),l=ct(Qu.horizon,Ju.horizon,i).map(_=>_*s),c=In(1-Math.abs(n-1)/7)*(1-i);l=ct(l,xg,c*.85),a=ct(a,[92,112,168],c*.4);let d=In(t.fog);a=ct(a,Zu,d),l=ct(l,Zu,d),a=ct(Xu.top,a,r),l=ct(Xu.horizon,l,r);let p=ct(kg,$g,In(t.snow*1.25)).map(_=>_*(.15+.85*r)),h=_=>_.map(b=>Math.round(b));return{top:h(a),horizon:h(l),ground:h(p)}}var Bi=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Ui(o,e){let t=[],n=Dt(o,e.floors),i=e.floors.length>1;for(let r of e.floors){let s=(d,u)=>r.rooms.find(p=>p.points.length>=3&&U([d,u],p.points))??null,a=(d,u)=>[s(d,u)?.name,i?r.name:null].filter(Boolean).join(" \xB7 ");for(let d of r.rooms){if(d.points.length<3)continue;let[u,p]=Fe(d.points);t.push({kind:"room",name:d.name,where:i?r.name:"",floorId:r.id,roomId:d.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,c=(d,u,p,h)=>{l.has(d)||!o.states[d]||(l.add(d),t.push({kind:"device",name:j(o,d),where:a(u,p),floorId:r.id,roomId:s(u,p)?.id??null,entity:d,icon:B(d),x:u,z:p,y:h}))};for(let d of r.placements)c(d.entity_id,d.x,d.z,d.y??bn(B(d.entity_id)??"sensor",r.height,d.mount));for(let d of r.furniture){let u=n.get(d.id),p=u?.entity??u?.power;p&&c(p,d.x,d.z,Math.min(r.height-.3,Math.max(.5,d.h)))}}return t}function tp(o,e,t=8){let n=Bi(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let i=o.filter(a=>{let l=Bi(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),r=Bi(e.trim()),s=a=>(Bi(a.name).startsWith(r)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var To=new Map;async function oa(o,e){}async function np(o,e){for(let t of To.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`Home 3D: module ${t.id} failed on "${o}"`,n)}return null}function op(o){return en(e=>e.scene?.(o))}function ip(o){return en(e=>e.cards?.(o))}function rp(o){return en(e=>e.alerts?.(o))}function sp(o){return en(e=>e.watched?.(o))}function ia(o,e){return en(t=>t.roomSheets?.(o,e))}function ra(o){return en(e=>e.menuSheets?.(o))}function sa(){return[...To.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function ap(o,e){let t=To.get(o);if(!t?.module.settings)return[];try{return t.module.settings(e)??[]}catch(n){return console.warn(`Home 3D: module ${t.id} failed`,n),[]}}function lp(o){return en(e=>e.pools?.(o))}function Zt(){return To.size>0}function en(o){let e=[];for(let t of To.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`Home 3D: module ${t.id} failed`,n)}return e}function dp(o,e,t){let n=o.filter(l=>Number.isFinite(l));if(n.length<2)return"";let i=Math.min(...n),s=Math.max(...n)-i||1,a=l=>Math.round(l*10)/10;return n.map((l,c)=>`${a(c/(n.length-1)*e)},${a(t-1-(l-i)/s*(t-2))}`).join(" ")}function cp(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let t=Math.min(1,Math.max(0,e))*(o.length-1),n=Math.min(o.length-2,Math.floor(t)),i=t-n,[r,s]=[o[n],o[n+1]];return[r[0]+(s[0]-r[0])*i,r[1]+(s[1]-r[1])*i,r[2]+(s[2]-r[2])*i]}function up(o){let e=[];for(let t of o){let n=t.points;if(n.length<2)continue;let i=[],r=0;for(let l=1;l<n.length;l++){let c=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);i.push(c),r+=c}if(r<.01)continue;let s=t.colors.length===n.length,a=0;for(let l=1;l<n.length;l++){let c=i[l-1];if(c<.005)continue;let d=s?cp([t.colors[l-1],t.colors[l]],.5):cp(t.colors,(a+c/2)/r);e.push({floorId:t.floorId,a:[...n[l-1]],b:[...n[l]],dist:a,power:Math.max(0,t.flow),color:d,...t.width?{width:Math.min(3,Math.max(.5,t.width))}:{},...t.look==="pipe"?{pipe:!0}:{},...t.views==="house"?{house:!0}:t.views==="floor"?{floor:!0}:{}}),a+=c}}return e}function pp(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function hp(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function qi(o,e){return(o??[]).filter(t=>!e||!t.minor)}var Sg=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Mg=[2200,2700,3200,4e3,5e3,6500],Tg=["hs","rgb","rgbw","rgbww","xy"],Ag=4,Pg=16,Eg=32,Ig=128;function la(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>Tg.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function ca(o){return((o.attributes.supported_features??0)&Ag)!==0&&typeof o.attributes.current_position=="number"}var aa=class extends ye{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},noLook:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{B(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return g`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?g`<img src=${n} alt=${j(this.hass,this.entity)} />`:g`<span class="qm-note">${de(this.hass,e)}</span>`}
      </button>
      ${this.noLook?y:g`<button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
            ${this.t("through_camera")}
          </button>`}`}t(e,t){return M(this.hass,e,t)}async ask(){return!this.confirmSwitch||await this.question(this.t("confirm_switch",{name:j(this.hass,this.entity)}))}async guarded(e){await this.ask()&&e()}question(e){return Lt(e,{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")})}call(e,t,n={}){Wt(this.hass,e,t,{entity_id:this.entity,...n},i=>this.t("service_failed",{error:i}))}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){ke(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,i)=>{let r=i/t*Math.PI*2-Math.PI/2;return g`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${n}</div>`})}renderLight(e){let t=la(e),n=e.state==="on",i=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,r=t.color?Sg.map(s=>g`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Mg.map(s=>g`<button class="qm-swatch" style="background:${Rg(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return g`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>{this.guarded(()=>this.call("light","toggle"))}}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?g`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:y}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",i=ca(e),r=(c,d,u,p=!1)=>g`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${d} @click=${u}>${c}</button>`,s=c=>t!==null&&Math.abs(t-c)<3,a=[r("\u25B2",this.t("cover_open"),()=>{this.guarded(()=>this.call("cover","open_cover"))},s(100)),...i?[75,50].map(c=>r(`${c}`,`${c} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:c}))},s(c))):[],r("\u25BC",this.t("cover_close"),()=>{this.guarded(()=>this.call("cover","close_cover"))},s(0)),...i?[25].map(c=>r(`${c}`,`${c} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:c}))},s(c))):[],r("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return g`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):void this.guarded(()=>this.call("cover",l>50?"open_cover":"close_cover"))}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:de(this.hass,e)}</b>
        </button>
      </div>
      ${i?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:y}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Ig&&n!==null?g`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:ii(e)?g`<div class="qm-tilt-buttons">
        ${t&Pg?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:y}
        ${t&Eg?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:y}
      </div>`:y}renderCar(e){let t=e.entities,n=(u,p,h,_={})=>Wt(this.hass,u,p,{entity_id:h,..._},b=>this.t("service_failed",{error:b})),i=t.lock,r=!!i&&i.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=t.climate,l=!!a&&a.startsWith("climate."),c=t.charging&&s(t.charging)?t.charging:null,d=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return g`<p class="qm-car-line">${d||de(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${r||i&&s(i)?g`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?void this.question(this.t("car_unlock_confirm")).then(u=>u&&(r?n("lock","unlock",i):n("homeassistant","turn_off",i))):r?n("lock","lock",i):n("homeassistant","turn_on",i)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:y}
        ${a?g`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:y}
        ${c?g`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",c)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:y}
        ${!r&&!a&&!c?g`<p class="qm-note">${this.t("car_no_controls")}</p>`:y}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",i=e.state==="off"||e.state==="standby",r=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return g`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":n?"media_pause":"media_play")}>
          <span>${i?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?g`<p class="qm-media-title">${s}</p>`:y}
      ${r!==null?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(r)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:y}
      ${this.renderPlay(e)}`}renderPlay(e){let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return y;let i=e.attributes.source;return g`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(r=>g`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:r.type,media_content_id:r.content})}>
            ▶ ${r.label}
          </button>`)}
        ${t.map(r=>g`<button class="qm-chip ${r===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:r})}>${r}</button>`)}
      </div>`}renderDoorLock(e){let t=e.state==="locked"||e.state==="locking"||e.state==="jammed",n=j(this.hass,this.entity),i=async()=>{await this.question(this.t(t?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",t?"unlock":"lock"),this.close())};return g`<p class="qm-car-line">${de(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${t?"qm-slot-on":""}" @click=${i}>${t?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return g`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>{this.guarded(()=>n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${de(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return y;let t=B(this.entity),n=this.car?this.renderCar(this.car):K(e)?g`<p class="qm-note">${de(this.hass,e)}</p>`:this.doorLock&&t==="lock"?this.renderDoorLock(e):t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"?this.renderMedia(e):this.renderToggle(e);return g`<div class="qm" role="dialog" aria-label=${j(this.hass,this.entity)}>
      <div class="qm-title">${j(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[We,Me`
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
    @media (pointer: coarse) {
      .qm-swatch {
        min-width: 44px;
        min-height: 44px;
      }
    }
    `]};function Rg(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,i)=>Math.round(n+(i-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",aa);var Hg=new URL(import.meta.url),Fg=new URL("./home-3d-3d.js?v=32427e2b4531",Hg).href,fp;function Ao(){return fp??=import(Fg),fp}var da;function mp(){let o=new URL("./home-3d-2d.js?v=4281ace40854",new URL(import.meta.url)).href;return da??=import(o).catch(e=>{throw da=void 0,e}),da}function gp(o,e,t){return t?!0:o.show==="never"||e==="none"||e==="room"?!1:!!o.lamp||!!o.model}var ua=Ce("home-3d-fun",()=>"a8b8cd0bb894");var ji={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"},Cg=new Set(["problem","safety","smoke","gas","carbon_monoxide","heat","moisture","tamper","battery"]),zg=/\b(ob|lb|on battery|low battery|discharg\w*|overload\w*|replace|error|fault\w*|degraded|warning|alarm|update)\b/,_p=/\b(off|offline|disconnected|down|stopped|not_home|away|unreachable|dead|lost|shutdown|halted|failed)\b/,Og=/\b(ol|on|online|connected|up|running|home|ok|normal|idle|healthy|active|charging|charged|ready)\b/;function Rn(o){let e=[];for(let t of[o.entity,...o.links??[]])t&&!e.includes(t)&&e.push(t);return e}function bp(o){if(!o)return null;let e=String(o.state??"").toLowerCase();if(e==="unavailable")return"offline";if(e==="unknown"||e==="")return"warning";let t=o.entity_id.slice(0,o.entity_id.indexOf("."));if(t==="binary_sensor"){let i=Cg.has(String(o.attributes?.device_class??""));return e==="on"?i?"warning":"online":i?"online":"offline"}if(t==="update")return e==="on"?"warning":"online";if(t==="device_tracker"||t==="person")return e==="home"?"online":"offline";if(t==="switch"||t==="input_boolean"||t==="light"||t==="fan")return e==="on"?"online":"offline";if(Number.isFinite(Number(e)))return"online";let n=e.replace(/[_-]+/g," ");return zg.test(n)?"warning":_p.test(n)||_p.test(e)?"offline":(Og.test(n),"online")}function tn(o,e){let n=(e.links??[]).filter(s=>s&&s!==e.entity).map(s=>o.states[s]).filter(s=>!!s),i=n.filter(s=>s.state==="unavailable").length,r=n.some(s=>s.state!=="unavailable"&&bp(s)==="warning");if(e.entity){let s=bp(o.states[e.entity])??"offline";return s==="online"&&(i||r)?"warning":s}return n.length?i===n.length?"offline":i||r?"warning":"online":null}function wp(o,e){let t=new Map;for(let n of e)for(let i of n.furniture){let r=i.rack?.slots;if(r?.length)for(let s of r){if(!s.entity&&!s.links?.length)continue;let a=tn(o,s);a&&t.set(`${i.id}/${s.id}`,a)}}return t}function vp(o,e){let t=e.slice(0,e.indexOf(".")),n=o.states[e],i=String(n?.attributes?.device_class??""),r=String(n?.attributes?.unit_of_measurement??""),s=`${e.slice(t.length+1)} ${o.entities?.[e]?.translation_key??""}`.toLowerCase();return t==="update"?"update":t==="button"?"button":t==="switch"?"switch":t==="device_tracker"?"status":t==="binary_sensor"?["connectivity","running","plug","power","problem"].includes(i)||/status|state|online|connected|running/.test(s)?"status":"other":t!=="sensor"?"other":/runtime/.test(s)||i==="duration"&&/battery/.test(s)?"runtime":i==="battery"||/battery|charge/.test(s)&&r==="%"?"battery":i==="temperature"?"temperature":i==="power"||r==="W"||r==="kW"?"power":i==="data_rate"||/\/s$/.test(r)||/throughput|bandwidth|download|upload|\b(rx|tx)\b|_(rx|tx)(_|$)|network_(in|out)|packets/.test(s)?"throughput":/uptime|last_boot|boot_time/.test(s)||i==="timestamp"&&/up|boot/.test(s)?"uptime":/cpu|processor/.test(s)?"cpu":/memory|\bram\b|swap/.test(s)?"memory":/disk|volume|storage|drive|pool|\bfs\b|used_space|free_space/.test(s)?"disk":/load/.test(s)?"load":/status|state/.test(s)||i==="enum"?"status":"other"}var yp=8,Hn="@hottest",nn="@online";function xp(o,e){let t=new Set,n=[];for(let i of e)for(let r of Rn(i))t.has(r)||(t.add(r),n.push({id:r,kind:vp(o,r),slot:i}));return n}var ha=(o,e)=>String(o.states[e]?.attributes?.unit_of_measurement??""),pa=(o,e)=>ha(o,e)==="%",Dg=(o,e)=>o.some(t=>t.slot===e&&(t.kind==="battery"||t.kind==="runtime"));function Lg(o,e,t=yp){let n=xp(o,e),i=l=>n.filter(c=>c.kind===l),r=l=>Dg(n,l.slot),s=(l,...c)=>{for(let d of c){let u=l.find(d);if(u)return u.id}return null};return[s(i("load"),l=>r(l)&&pa(o,l.id),l=>pa(o,l.id)),s(i("battery"),r,()=>!0),s(i("runtime"),()=>!0),s(i("power"),l=>/poe/.test(l.id),r),i("temperature").length?Hn:null,e.some(l=>tn(o,l)!==null)?nn:null,s(i("disk"),l=>pa(o,l.id)&&!/free/.test(l.id)),s(i("throughput"),l=>/wan|uplink|internet|external/.test(l.id),()=>!0)].filter(l=>!!l).slice(0,t)}var Ki=(o,e)=>{let t=o.states[e];if(!t||t.state===""||t.state==="unavailable"||t.state==="unknown")return null;let n=Number(t.state);return Number.isFinite(n)?n:null};function Gi(o,e,t){let n=xp(o,e),i=[...new Set(t??Lg(o,e))],r=[];for(let s of i){if(r.length>=yp)break;if(s===Hn){let a=n.filter(d=>d.kind==="temperature"),l=null;for(let d of a){let u=Ki(o,d.id);u!==null&&(!l||u>Ki(o,l.id))&&(l=d)}if(!a.length)continue;let c=l?Ki(o,l.id):null;r.push({key:s,kind:"temperature",slot:l?.slot.id??null,value:c,unit:l?ha(o,l.id):"",text:c===null?"unavailable":String(o.states[l.id].state),ids:a.map(d=>d.id),agg:"max"})}else if(s===nn){let a=e.map(c=>tn(o,c)).filter(c=>c!==null);if(!a.length)continue;let l=a.filter(c=>c==="online").length;r.push({key:s,kind:"status",slot:null,value:l,of:a.length,unit:"",text:`${l}/${a.length}`,ids:[],agg:"one"})}else{let a=n.find(c=>c.id===s);if(!a)continue;let l=Ki(o,s);r.push({key:s,kind:a.kind,slot:a.slot.id??null,value:l,unit:ha(o,s),text:String(o.states[s]?.state??"unavailable"),ids:l===null?[]:[s],agg:"one"})}}return r}function kp(o,e){let t=new Map;for(let n of e.ids)for(let i of o?.[n]??[]){if(typeof i.mean!="number")continue;let r=typeof i.start=="number"?i.start:Date.parse(i.start),s=t.get(r);t.set(r,s===void 0?i.mean:Math.max(s,i.mean))}return[...t].sort((n,i)=>n[0]-i[0]).map(([,n])=>n)}async function $p(o,e,t,n=Date.now()){try{return await o.callWS({type:"recorder/statistics_during_period",start_time:new Date(n-t).toISOString(),statistic_ids:[...e],period:"5minute",types:["mean"]})??{}}catch{return null}}function Sp(o,e){let t=o.points,n=t[e],i=t[(e+1)%t.length],r=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/r,(i[1]-n[1])/r],a=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];U([l[0]+a[0]*.02,l[1]+a[1]*.02],t)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:n,b:i,u:s,n:a,length:r,rightward:s[0]*c[0]+s[1]*c[1]>0}}function Yi(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function fa(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var Wg=.45;function Mp(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let i=e.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:r,d:s}=Yi(o,yi(i,n.edge,n.offset));Math.abs(s)>.4||r<-.05||r>o.length+.05||t.push(Ng(n,r))}return t}function Ng(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function Tp(o,e,t,n=Wg){let i=[];for(let r of e.furniture){if(r.type==="stairwell"||r.type==="parking")continue;let s=U([r.x,r.z],t.points),a=zt(r).map(h=>Yi(o,h)),l=Math.min(...a.map(h=>h.d)),c=Math.min(...a.map(h=>h.s)),d=Math.max(...a.map(h=>h.s)),u=Yi(o,[r.x,r.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||d<.02||c>o.length-.02)continue;let p=ce(e,r);i.push({kind:"furniture",id:r.id,s0:c,s1:d,y0:p,y1:p+r.h,d:l})}return i}var Ap=.3;function Po(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,i=o.height??Ap,r=[];if(o.heights)t&&r.push([t.x,t.y,t.z]),o.points.forEach(([s,a],l)=>r.push([s,o.heights?.[l]??i,a])),n&&r.push([n.x,n.y,n.z]);else{if(!t||!n)return[];r.push([t.x,t.y,t.z],[t.x,i,t.z]);for(let[s,a]of o.points)r.push([s,i,a]);r.push([n.x,i,n.z],[n.x,n.y,n.z])}return r.filter((s,a)=>a===0||ma(s,r[a-1])>.001)}function ma(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function Qi(o){let e=0;for(let t=1;t<o.length;t++)e+=ma(o[t-1],o[t]);return e}function Ji(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[i,r]=[o[n-1],o[n]],s=ma(i,r);if(!(s<1e-6)){if(t<=s||n===o.length-1){let a=Math.min(1,t/s),l=[(r[0]-i[0])/s,(r[1]-i[1])/s,(r[2]-i[2])/s];return{p:[i[0]+(r[0]-i[0])*a,i[1]+(r[1]-i[1])*a,i[2]+(r[2]-i[2])*a],dir:l,seg:n-1}}t-=s}}return null}function on(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function Vg(o,e){let{w:t,d:n,h:i}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,i*.55,0]:e==="pressure"?[t*.05,i*.9,0]:null;if(o.type==="pool_filter"){let r=Math.min(t,n)/2;if(o.variant==="side6"){let l=r+.08;return e==="pump"?[l,i*.6,0]:e==="return"?[l+.06,i*.48,0]:e==="waste"?[l,i*.36,0]:null}let s=i*.89,a=r*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(o.type==="pool_heat_pump"){let r=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?i*.25:i*.45;return r==="back"?[e==="in"?-t*.15:t*.15,s,-n/2-.04]:[(r==="left"?-1:1)*(t/2+.04),s,-n*.2]}return null}function Pp(o,e){let t=Vg(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[i,r]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*i-t[2]*r,y:t[1],z:o.z+t[0]*r+t[2]*i}}function Eo(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function Ip(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var ga=[.25,.7,1],Bg=900;function Rp(o,e,t,n=i=>i){let i=[];for(let r of o){let s=n(Po(r,t),r);if(s.length<2)continue;let a=e.get(r.id),l=a?.color??ga,c=0;for(let d=1;d<s.length;d++){let[u,p]=[s[d-1],s[d]],h=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);h<.01||(i.push({floorId:r.floor_id,a:u,b:p,dist:c,power:a?.active?Bg:0,color:l}),c+=h)}}return i}function Xi(o,e,t){let n=t.pool??{},i=gn(e,t);return r=>{let{kind:s,id:a,port:l}=on(r);if(s==="port"){let c=n.ports?.find(u=>u.id===a);if(!c)return null;let d=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?Jn(e,t)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(s==="joint"){let c=n.joints?.find(d=>d.id===a);return c?Eo(c,l):null}if(s!=="dev")return null;for(let c of o.floors){let d=c.furniture.find(_=>_.id===a);if(!d||!tc.includes(d.type))continue;let u=l?Pp(d,l):null,p=c.elevation-e.elevation;if(u)return{...u,y:u.y+ce(c,d)+p};let h=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?nc:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:h+ce(c,d)+p}}return null}}function _a(o,e,t,n){let i=d=>{let{kind:u,id:p}=on(d);return u==="port"?t.pool?.ports?.find(h=>h.id===p)?.kind:void 0},r=d=>i(d)==="drain",s=d=>i(d)==="inlet"||i(d)==="skimmer",a=d=>{if(d.length<2)return d;let u=d[0],p=ba(t,[u[0],u[2]]);if(!p)return d;let h=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],_=1;for(;_<d.length&&Math.hypot(d[_][0]-u[0],d[_][2]-u[2])<.01;)_++;let b=d.slice(_).map(f=>[...f]);for(let f=0;f<b.length-1;f++){let v=(b[f][0]-u[0])*p[0]+(b[f][2]-u[2])*p[1];if(v>=.349999)break;b[f][0]+=p[0]*(.35-v),b[f][2]+=p[1]*(.35-v)}let m=b[0]??d[d.length-1];return[u,h,[h[0],m[1],h[2]],...b]},l=d=>{if(d.length<2)return d;let u=d[0];if(!U([u[0],u[2]],t.points))return d;let p=Jn(n,t)-.15,h=d.findIndex((f,v)=>v>0&&Math.hypot(f[0]-u[0],f[2]-u[2])>.01);if(h<0)return d;let _=d[h],b=[_[0],_[2]];for(let f=0;f<t.points.length;f++){let v=t.points[f],w=t.points[(f+1)%t.points.length],x=Ug([u[0],u[2]],[_[0],_[2]],v,w);x&&(b=x)}let m=Math.hypot(b[0]-u[0],b[1]-u[2])>1e-6?[b[0]+(b[0]-u[0])*.02,b[1]+(b[1]-u[2])*.02]:b;return[u,[u[0],p,u[2]],[m[0],p,m[1]],[m[0],_[1],m[1]],...d.slice(h)]},c=o;return e.from&&r(e.from)&&(c=l(c)),e.to&&r(e.to)&&(c=l([...c].reverse()).reverse()),e.from&&s(e.from)&&(c=a(c)),e.to&&s(e.to)&&(c=a([...c].reverse()).reverse()),c}function ba(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length];n+=s[0]*a[1]-a[0]*s[1]}let i=null;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length],l=a[0]-s[0],c=a[1]-s[1],d=Math.hypot(l,c);if(d<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*c)/(d*d))),p=Math.hypot(s[0]+l*u-e[0],s[1]+c*u-e[1]),h=n>0?[c/d+0,-l/d+0]:[-c/d+0,l/d+0];(!i||p<i.d)&&(i={d:p,n:h})}return i?i.n:null}function Ug(o,e,t,n){let i=[e[0]-o[0],e[1]-o[1]],r=[n[0]-t[0],n[1]-t[1]],s=i[0]*r[1]-i[1]*r[0];if(Math.abs(s)<1e-9)return null;let a=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/s,l=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[o[0]+i[0]*a,o[1]+i[1]*a]:null}var Te=o=>Math.round(o*1e3)/1e3;var Hp=-.3;function Fp(o,e,t,n,i){let r=[],s=[],a=m=>e(m),l=[],c=o.from,d=[];for(let m of o.vias){if(m.kind!=="hole"){d.push(m.kind);continue}let f=t.find(E=>E.id===m.joint),v=a(c);if(!f||!v)continue;let w=a(`joint:${f.id}:inside`),x=a(`joint:${f.id}:outside`),A=m.dir?m.dir==="out":Math.hypot(v.x-w.x,v.z-w.z)<=Math.hypot(v.x-x.x,v.z-x.z);l.push({a:c,b:`joint:${f.id}:${A?"inside":"outside"}`,fits:d}),d=[],c=`joint:${f.id}:${A?"outside":"inside"}`}let u=o.to;if(u.length>1){let m=a(c),f=u.map(a).filter(v=>!!v);if(m&&f.length===u.length){let v=f.reduce((H,W)=>H+W.x,0)/f.length,w=f.reduce((H,W)=>H+W.z,0)/f.length,x=Math.hypot(m.x-v,m.z-w)||1,A=Math.min(1,x/2)/x,E=m.y<0||f.some(H=>H.y<0),D={id:i("joint"),kind:"tee",x:Te(v+(m.x-v)*A),z:Te(w+(m.z-w)*A),y:E?Hp:Te(m.y)};s.push(D),l.push({a:c,b:`joint:${D.id}:in`,fits:d}),d=[],u.forEach((H,W)=>l.push({a:`joint:${D.id}:out${W+1}`,b:H,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let p=m=>{let{kind:f,id:v,port:w}=on(m),x=f==="joint"?s.find(A=>A.id===v):void 0;return x?Eo(x,w):a(m)},h=m=>n(m)==="source",_=m=>n(m)==="sink",b=o.to.some(h)&&!h(o.from)||_(o.from)&&!o.to.some(_);for(let m of l){let f=p(m.a),v=p(m.b);if(!f||!v)continue;let w=qg(f,v,Ep(m.a,t),Ep(m.b,t)),x={id:i("pipe"),from:m.a,to:m.b,floor_id:o.floorId,points:w.map(E=>[E[0],E[2]]),heights:w.map(E=>E[1])},A=Qi(Po(x,p));x.fittings=m.fits.map((E,D)=>({id:i("fit"),kind:E,at:Te(Math.min(A/2,.4+D*.25)),...E==="valve"?{open:!0}:{}})),b&&(x={...x,from:x.to,to:x.from,points:[...x.points].reverse(),heights:[...x.heights??[]].reverse(),fittings:x.fittings?.map(E=>({...E,at:Te(Math.max(0,A-E.at))}))}),r.push(x)}return{pipes:r,joints:s}}function Ep(o,e){let{kind:t,id:n,port:i}=on(o),r=t==="joint"&&i==="outside"?e.find(s=>s.id===n):void 0;return r?.kind==="wall"?[-(r.nx??0),-(r.nz??0)]:null}function qg(o,e,t=null,n=null){let i=o.y<0||e.y<0?Hp:Te(Math.max(o.y,e.y)),r=[],[s,a]=[o.x,o.z];t&&([s,a]=[Te(s+t[0]*.5),Te(a+t[1]*.5)],r.push([s,Te(o.y),a]));let[l,c]=[e.x,e.z],d=[];return n&&([l,c]=[Te(l+n[0]*.5),Te(c+n[1]*.5)],d.push([l,Te(e.y),c])),r.push([Te(s),i,Te(a)]),Math.abs(l-s)>.01&&r.push([Te(l),i,Te(a)]),Math.abs(c-a)>.01&&r.push([Te(l),i,Te(c)]),r.push(...d),r.filter((u,p)=>p===0||Math.hypot(u[0]-r[p-1][0],u[1]-r[p-1][1],u[2]-r[p-1][2])>.001)}var jg=2e3;function Kg(o){return Math.max(0,jg-o)}var Gg=1e3;function Cp(o,e){return e?Kg(o):Math.max(0,Gg-o)}function zp(o){return o>.5?Math.min(2.4,.6+Math.sqrt(o)/50):.6}function Fn(o){return e=>{e.target!==e.currentTarget||e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),o())}}function Op(o,e,t,n=12,i=180){let r=Math.max(i,e),s=Math.max(i*.5625,t),a={cols:1,tile:Math.min(r,s*16/9)};for(let l=1;l<=Math.max(1,o);l++){let c=Math.ceil(o/l),d=(r-n*(l-1))/l,u=(s-n*(c-1))/c*16/9,p=Math.min(d,u);(p>a.tile||l===1)&&(a={cols:l,tile:p})}if(a.tile<i){let l=Math.max(1,Math.floor((r+n)/(i+n)));return{cols:Math.min(l,Math.max(1,o)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}function Zi(o){return Le(o)&&/:(?:[a-z0-9_.-]*_)?3d_printer(?:_[a-z0-9_.-]*)?$/.test(o)}var Yg=/(progress|percent|completion|fortschritt)/,Qg=/(status|state|printing)/,Jg=/(chamber|light|lamp|led)/;function wa(o,e){let t={status:null,progress:null,light:null,camera:null};if(!e||e==="none")return t;let n=o.entities?.[e]?.device_id,i=n&&o.entities?Object.values(o.entities).filter(u=>u.device_id===n).map(u=>u.entity_id):[e],r=u=>`${u} ${String(o.states[u]?.attributes.friendly_name??"")} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),s=u=>u.startsWith("sensor.")&&o.states[u]?.attributes.unit_of_measurement==="%",a=i.find(u=>s(u)&&Yg.test(r(u)))??null,c=(/^(sensor|binary_sensor)\./.test(e)&&e!==a?e:null)??i.find(u=>(no(o.states[u])||u.startsWith("binary_sensor."))&&Qg.test(r(u)))??null,d=i.filter(u=>u.startsWith("light."));return{status:c,progress:a,light:d.find(u=>/chamber/.test(r(u)))??d[0]??i.find(u=>u.startsWith("switch.")&&Jg.test(r(u)))??null,camera:i.find(u=>u.startsWith("camera."))??null}}function Dp(o,e){let t=wa(o,e),n=l=>l?o.states[l]:void 0,i=n(t.status),r=!!i&&(i.entity_id.startsWith("binary_sensor.")?i.state==="on":Xr(i.state)||/^paused?$/i.test(i.state)),s=Number(n(t.progress)?.state),a=r&&t.progress&&Number.isFinite(s)?Math.min(1,Math.max(0,s/100)):null;return{printing:r,progress:a,light:ot(n(t.light)),camera:t.camera&&!K(n(t.camera))?t.camera:null}}var Xg=[.35,1,.55];function Lp(o){let e=[];return o.printing&&e.push({part:"progress",color:Xg,level:1,fill:Math.round((o.progress??0)*100)/100}),o.light&&e.push({part:"chamber",color:o.light.color,level:o.light.level}),e}function va(o,e,t){let n=[...t.openings.values()].flatMap(F=>[F.cover,F.contact,F.tilt,F.contact2??null,F.tilt2??null,F.position??null,F.tiltAngle??null,F.lock??null]),i=cd(e),r=i.filter(F=>B(F)==="camera").flatMap(F=>st(o,F)),s=i.map(F=>xo(o,F)),a=e.energy,l=e.presence.flatMap(F=>[F.person,F.sensor]),c=e.floors.flatMap(F=>F.rooms.flatMap($=>ge(o,$.area_id).filter(I=>B(I)==="light"))),d=[...t.furniture.values()].flatMap(F=>[F.entity,F.power]),u=e.floors.flatMap(F=>F.furniture.flatMap($=>[$.state_entity??null,$.state_entity2??null,$.color_entity??null,$.show_when?.entity??null])),p=e.floors.flatMap(F=>F.furniture.flatMap($=>[$.door_left??null,$.door_right??null,$.soc??null,$.status??null,$.charge??null,$.export??null])),h=(e.settings.roof?.windows??[]).flatMap(F=>[F.cover,F.contact,F.tilt]).filter(F=>!!F&&F!=="none"),_=[...(e.settings.roof?.solar??[]).map(F=>F.entity),...(e.settings.roof?.strings??[]).map(F=>F.entity)].filter(F=>!!F&&F!=="none"),b=e.floors.flatMap(F=>F.furniture.filter($=>$.type==="robot_vacuum").map($=>ro(o,t.furniture.get($.id)?.entity??null,$.room_sensor))),m=e.floors.flatMap(F=>F.furniture.flatMap($=>($.pictures??[]).flatMap(I=>[I.entity,...I.image.startsWith("camera:")?[I.image.slice(7)]:[]]))),f=t.heat?e.floors.flatMap(F=>F.rooms.flatMap($=>ge(o,$.area_id).filter(I=>I.startsWith("sensor.")))):[],v=[...Uu(e.floors),...Hc(o,e.floors)],w=Mo(o,e).map(F=>F.entity),x=[...e.floors.flatMap(F=>F.furniture.flatMap(tu)),e.settings.household?.notes??null].filter(F=>!!F&&F!=="none"),A=Yt(o,t.weatherEntityId??e.settings.weather_entity),E=e.floors.flatMap(F=>F.furniture.filter($=>Zi($.type)).flatMap($=>Object.values(wa(o,t.furniture.get($.id)?.entity??null)))),D=e.floors.flatMap(F=>[...F.rooms.flatMap($=>uo(o,F,$,"motion")),...F.furniture.map($=>vs(o,$))]),H=e.floors.flatMap(F=>F.furniture.flatMap($=>($.rack?.slots??[]).flatMap(Rn))),W=[...i,...H,...E,...r,...n,...s,...d,...u,...p,...b,...h,..._,...m,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...c,...f,...t.warnings,...v,...w,...D,...x,A,"sun.sun"];return[...new Set(W.filter(F=>!!F))]}var er=o=>String(o).padStart(2,"0"),ya=/^([01]\d|2[0-3]):[0-5]\d$/;function xa(o){return`${er(o.getHours())}:${er(o.getMinutes())}`}function Zg(o,e,t){return e<=t?o>=e&&o<=t:o>=e||o<=t}function ka(o,e,t){return e<=t?o>=e&&o<t:o>=e||o<t}function e_(o){return!!o.from==!!o.to&&!!o.start==!!o.end}function t_(o,e){if(!e_(o))return!1;let t=xa(e),i=!!o.start&&!!o.end&&o.start>o.end&&t<o.end?new Date(e.getFullYear(),e.getMonth(),e.getDate()-1):e,r=`${er(i.getMonth()+1)}-${er(i.getDate())}`;return o.from&&o.to&&!Zg(r,o.from,o.to)?!1:!o.start||!o.end||ka(t,o.start,o.end)}function n_(o,e,t){let n=o.show_when;if(!n)return!0;let i=n.entity;if(i&&i!=="none"&&(e[i]?.state??"unavailable")==="unavailable")return!1;let r=n.intervals??[];return!r.length||r.some(s=>t_(s,t))}function $a(o,e,t){return o.floors.flatMap(n=>n.furniture.filter(i=>!n_(i,e,t)).map(i=>i.id))}function Wp(o,e,t){let n=new Set($a(o,e,t));return n.size?{...o,floors:o.floors.map(i=>({...i,furniture:i.furniture.filter(r=>!n.has(r.id))}))}:o}function Np(o){return o.floors.some(e=>e.furniture.some(t=>!!t.show_when?.intervals?.length))}var Vp=/^#[0-9a-f]{3,8}$/i;function o_(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function Bp(o){if(!o||!o.kind)return null;let e=o.color&&Vp.test(o.color)?o.color:"#0b1426",t=o.color2&&Vp.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=o_(o.image);if(!n)return null;let i=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${i}), rgba(4, 8, 16, ${i})), url("${n}") center / cover no-repeat`}var St=Ce("home-3d-voice",()=>"1440ea8e6f2a");function tr(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("home3d.mic","1"),sessionStorage.getItem("home3d.mic")==="1"}catch{return!1}}function Sa(){try{return localStorage.getItem("home3d.voice")==="1"}catch{return!1}}function Ma(){try{return localStorage.getItem("home3d.screen")??""}catch{return""}}function rn(){try{return localStorage.getItem("home3d.voicePipeline")}catch{return null}}function nr(){try{sessionStorage.removeItem("home3d.mic")}catch{}}var i_=.25,Up=o=>Math.round(o*1e3)/1e3;function Ta(o,e,t,n,i){let r=o.rooms.find(s=>s.points.length>=3&&U([e,t],s.points));return!r||U([n,i],r.points)?[n,i]:U([n,t],r.points)?[n,t]:U([e,i],r.points)?[e,i]:[e,t]}function qp(o,e,t,n){let i=Math.hypot(n[0]-t[0],n[1]-t[1]);if(i<.01)return!1;let r=[(n[0]-t[0])/i,(n[1]-t[1])/i],s=l=>Math.abs(-(l[0]-t[0])*r[1]+(l[1]-t[1])*r[0]),a=l=>(l[0]-t[0])*r[0]+(l[1]-t[1])*r[1];return o.rooms.some(l=>l.id!==e&&l.points.some((c,d)=>{let u=l.points[(d+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(i,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function jp(o,e,t,n=i_){let i=o.rooms.find(c=>c.points.length>=3&&U([e.x,e.z],c.points));if(!i)return null;let r=i.points,s=Be(r)>=0?1:-1,a=t/2,l=null;for(let c=0;c<r.length;c++){let d=r[c],u=r[(c+1)%r.length],p=Math.hypot(u[0]-d[0],u[1]-d[1]);if(p<.3)continue;let h=[(u[0]-d[0])/p,(u[1]-d[1])/p],_=[-h[1]*s,h[0]*s],b=(e.x-d[0])*h[0]+(e.z-d[1])*h[1];if(b<0||b>p)continue;let f=o.rooms.some(H=>H.id!==i.id&&H.points.some((W,F)=>{let $=H.points[(F+1)%H.points.length],I=Math.abs((W[0]-d[0])*_[0]+(W[1]-d[1])*_[1]),S=Math.abs(($[0]-d[0])*_[0]+($[1]-d[1])*_[1]);return I<.02&&S<.02}))?a:0,v=(e.x-d[0])*_[0]+(e.z-d[1])*_[1]-f,w=Math.atan2(-_[0],_[1])*180/Math.PI,x=H=>Math.abs((e.rotation-H+540)%360-180),E=[{rotation:w,extent:e.d/2},{rotation:w+90,extent:e.w/2},{rotation:w-90,extent:e.w/2}].reduce((H,W)=>x(W.rotation)<x(H.rotation)?W:H);if(x(E.rotation)>50)continue;let D=v-E.extent;Math.abs(D)>n||l&&Math.abs(D)>=Math.abs(l.gap)||(l={x:Up(e.x-_[0]*D),z:Up(e.z-_[1]*D),rotation:(Math.round(E.rotation)%360+360)%360,gap:D})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function r_(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var Aa={walls(o,e,t){let n=o.floors.find(r=>r.id===e),i=n?.rooms.find(r=>r.id===t);return!n||!i||i.points.length<3?[]:i.points.map((r,s)=>{let a=Sp(i,s),l=qp(n,i.id,a.a,a.b),c=[...Tp(a,n,i).map(d=>[d.s0,d.s1]),...Mp(a,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:c}})},onWall(o,e,t){return fa(r_(o),e,t)},freeSpot(o,e,t=.1){let n=r=>r>=t&&r+e<=o.length-t&&!o.taken.some(([s,a])=>r<a+.05&&r+e>s-.05),i=o.length/2-e/2;for(let r=0;r<=o.length;r+=.05){if(n(i-r))return Math.round((i-r)*100)/100;if(n(i+r))return Math.round((i+r)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(a=>a.id===e),i=n?.outdoor.find(a=>a.id===t);if(!n||!i)return()=>null;let r=Xi(o,n,i),s=i.pool??{};return a=>{let{kind:l,id:c,port:d}=on(a),u=l==="joint"?(s.joints??[]).find(h=>h.id===c):void 0;if(u)return Eo(u,d);let p=l==="port"?(s.ports??[]).find(h=>h.id===c):void 0;return p?r(a)??{x:p.x,y:.02,z:p.z}:r(a)}},connect(o,e,t,n,i,r){let s=o.floors.find(l=>l.id===e),a=s?.outdoor.find(l=>l.id===t);return!s||!a?{pipes:[],joints:[]}:Fp({...n,floorId:e},Aa.nodeAt(o,e,t),a.pool?.joints??[],i,r)}};var Kp={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},s_={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},a_=2e4,l_=3*6e4,Pa=new Set(["unavailable","unknown",""]),c_="home3d.director";function Ea(){try{return localStorage.getItem(c_)==="1"}catch{return!1}}function Yp(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var d_=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Qp(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let i=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return d_.test(i)}).sort()}function Ia(o,e,t=Date.now()){if(!o||!e||Pa.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var Gp=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function Jp(o,e,t=Date.now()){return!o||!e||Pa.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?Ia(o,e,t):Pa.has(o.state)?!1:Gp.has(e.state)&&!Gp.has(o.state)}function Xp(o,e,t,n){if(n)return n;let i=o.entities??{},r=i[e]?.device_id,s=t.filter(d=>d.startsWith("camera.")),a=r?s.find(d=>i[d]?.device_id===r):void 0;if(a)return a;let l=d=>i[d]?.area_id??o.devices?.[i[d]?.device_id??""]?.area_id??null,c=l(e);return c&&s.find(d=>l(d)===c)||null}var Io=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let i=this.seen.has(e),r=this.seen.get(e);return this.seen.set(e,t),i&&r!==t&&n(r,t)}stopped(e,t,n){let i=this.runs.get(e);return t?(i?.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!i||i.run?(this.runs.set(e,{run:!1,since:n,ran:!!i?.run}),!1):i.ran&&n-i.since>=l_?(i.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=30){let i=this.shown.get(e.key);if(i!==void 0&&t-i<s_[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<a_)return!1;let s=this.current;if(s&&t<s.until&&Kp[s.shot.kind]>Kp[e.kind])return!1;let a=Math.min(600,Math.max(10,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+a,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};var $e=Math.PI/180,or=-.833;function u_(o,e,t){let n=(o/864e5+24405875e-1-2451545)/36525,i=((280.46646+n*(36000.76983+n*3032e-7))%360+360)%360,r=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(r*$e)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*r*$e)*(.019993-101e-6*n)+Math.sin(3*r*$e)*289e-6,l=125.04-1934.136*n,c=i+a-.00569-.00478*Math.sin(l*$e),u=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*$e),p=Math.asin(Math.sin(u*$e)*Math.sin(c*$e)),h=Math.tan(u/2*$e)**2,_=4*(h*Math.sin(2*i*$e)-2*s*Math.sin(r*$e)+4*s*h*Math.sin(r*$e)*Math.cos(2*i*$e)-.5*h*h*Math.sin(4*i*$e)-1.25*s*s*Math.sin(2*r*$e))/$e,b=new Date(o),v=(((b.getUTCHours()*60+b.getUTCMinutes()+b.getUTCSeconds()/60+_+4*t)%1440+1440)%1440/4-180)*$e,w=e*$e,x=Math.sin(w)*Math.sin(p)+Math.cos(w)*Math.cos(p)*Math.cos(v),A=90-Math.acos(Math.min(1,Math.max(-1,x)))/$e;return{azimuth:(Math.atan2(Math.sin(v),Math.cos(v)*Math.sin(w)-Math.tan(p)*Math.cos(w))/$e+180+360)%360,elevation:A}}function Zp(o,e,t){let n=new Date(o);n.setHours(0,0,0,0);let i=n.getTime(),r=10*6e4,s=u=>({...u_(u,e,t),t:u}),a=[],l=null,c=null,d=s(i);for(let u=i+r;u<=i+24*36e5;u+=r){let p=s(u),h=p.elevation>or,_=d.elevation>or;if(h!==_){let b=d.t,m=p.t;for(let v=0;v<12;v++){let w=(b+m)/2;s(w).elevation>or===_?b=w:m=w}let f=s(Math.round((b+m)/2));h?(l??=f,a.push(f)):(c=f,a.push(f))}h&&a.push(p),d=p}return!l&&a.length&&s(i).elevation>or&&a.unshift(s(i)),{points:a,rise:l,set:c}}function eh(o,e,t){let n=o.cheap_rate;if(n&&n!=="none")return e[n]?.state==="on";let i=o.cheap_from,r=o.cheap_to;return!i||!r||!ya.test(i)||!ya.test(r)?null:ka(xa(t),i,r)}var th=(o,e)=>e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="energy";function p_(o,e,t){if(t==="none")return null;if(t)return t;let n=e.replace(/^sensor\./,"").replace(/_?power$/,""),i=`sensor.${n}_energy`;if(th(o,i))return i;let r=o.entities?.[e]?.device_id;if(!r)return null;let s=Object.keys(o.states).filter(a=>th(o,a)&&o.entities?.[a]?.device_id===r);return s.length===1?s[0]:s.find(a=>a.startsWith(`sensor.${n}_`))??null}function nh(o,e){let t=[];for(let n of e){let i=p_(o,n.powerEntity,n.energy);i&&t.push({key:n.powerEntity,id:n.id,floorId:n.floorId,x:n.x,z:n.z,energy:i,power:n.powerEntity})}return t}async function oh(o,e,t=new Date){let n=new Map,i=[...new Set(e.map(s=>s.energy).filter(s=>!!s))];if(!i.length)return n;let r=new Date(t);r.setHours(0,0,0,0);try{let s=await o.callWS({type:"recorder/statistics_during_period",start_time:r.toISOString(),statistic_ids:i,period:"5minute",types:["change"],units:{energy:"kWh"}});for(let a of e){if(!a.energy)continue;let l=s?.[a.energy]?.reduce((c,d)=>c+(d.change??0),0);l!==void 0&&n.set(a.key,l)}return n}catch{return null}}function ih(o){let e={solar:[],export:[],forecast:[]};for(let t of o?.energy_sources??[])if(t.type==="solar"){t.stat_energy_from&&e.solar.push(t.stat_energy_from);for(let n of t.config_entry_solar_forecast??[])e.forecast.push(n)}else if(t.type==="grid"){for(let n of t.flow_to??[])n.stat_energy_to&&e.export.push(n.stat_energy_to);t.stat_energy_to&&e.export.push(t.stat_energy_to)}return{solar:[...new Set(e.solar)],export:[...new Set(e.export)],forecast:[...new Set(e.forecast)]}}function rh(o,e,t){if(!o||!e.length)return null;let n=new Date(t);n.setHours(0,0,0,0);let i=n.getTime(),r=new Date(i);r.setDate(r.getDate()+1);let s=r.getTime(),a=new Date(s);a.setDate(a.getDate()+1);let l=a.getTime(),c=new Array(24).fill(0),d=!1,u=null;for(let b of e)for(let[m,f]of Object.entries(o[b]?.wh_hours??{})){let v=Date.parse(m);!Number.isFinite(v)||typeof f!="number"||!Number.isFinite(f)||(v>=i&&v<s?(c[new Date(v).getHours()]+=Math.max(0,f),d=!0):v>=s&&v<l&&(u=(u??0)+Math.max(0,f)))}if(!d&&u===null)return null;let p=t.getHours(),h=1-(t.getMinutes()*60+t.getSeconds())/3600,_=c[p]*h;for(let b=p+1;b<24;b++)_+=c[b];return{rest:d?_/1e3:null,tomorrow:u===null?null:u/1e3,hours:c}}function sh(o,e){let t=n=>42-(e>0?Math.min(n,e)/e*36:0);return o.map((n,i)=>`${i?"L":"M"}${((i+.5)/24*220).toFixed(1)} ${t(n).toFixed(1)}`).join(" ")}function ah(o){let e=[];if(o.forecast&&(o.forecast.rest!==null&&e.push({key:"forecast_rest",kwh:o.forecast.rest}),o.forecast.tomorrow!==null&&e.push({key:"forecast_tomorrow",kwh:o.forecast.tomorrow})),o.produced!==null&&o.exported!==null&&o.produced>0){let t=Math.min(Math.max(0,o.exported),o.produced),n=o.produced-t;e.push({key:"self_use",self:n,exported:t,share:Math.round(n/o.produced*100)})}return e}function sn(o,e,t,n){Wt(o,e,t,n,i=>M(o,"service_failed",{error:i}))}function ch(o,e){return String(e&&o.states[e]?.attributes.unit_of_measurement||"m\xB3")}function dh(o,e){return g`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${Ze`<polyline points=${dp(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function f_(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${Z(o,e*1e3,0)} l`:`${Z(o,e,e<10?2:0)} ${t}`}var m_=2e4,g_=3e5,uh=6*36e5,__=12e4,b_=600*1e3,ph={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},w_='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',v_='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function Ra(o,e,t){return o.rooms.find(n=>n.points.length>=3&&U([e,t],n.points))?.id??null}function y_(o,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&ze(o.states[t])}function x_(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function k_(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function hh(o,e){let t=s=>s&&s!=="none"?s:null,n=it(o,{cover:t(e.cover),contact:t(e.contact),tilt:t(e.tilt)},"window"),i=t(e.window)?o.states[t(e.window)]:void 0,r=n.open;if(i&&!K(i)){let s=i.attributes.current_position;r=typeof s=="number"?Math.min(1,Math.max(0,s/100)):i.state==="open"||i.state==="opening"?1:0}return{open:r,tilt:n.tilt,cover:n.cover??0}}var Ha=class extends ye{static properties={hass:{attribute:!1},building:{attribute:!1},canEdit:{attribute:!1},noSettings:{attribute:!1},home:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},_realSky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},plan2d:{attribute:!1},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_bigTile:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_cheap:{state:!0},_wires:{state:!0},_wireKwh:{state:!0},_wireOpen:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_holoBig:{state:!0},_solarMore:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_settingsOpen:{state:!0},_rackView:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},_voice:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_phoneStage:{state:!0},_alerts:{state:!0},_dismissing:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},rackCards:{attribute:!1},_rackRows:{state:!0},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;shownPlan=null;showTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;solarMoreLoading=!1;holoPress="";holoHoverOff=!1;holoBigTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;thumbsSaved=null;resizeObs=null;unsubAsk=null;voiceTimer;binInfoTimer;rackOpen=new Set;rackSparkKey="";rackSparkAt=0;alertSrc=null;alertTimer;motionTimer;redTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;rackViewMemo=null;actionOwners=new Map;taps=new Mi;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];binSpots=new Map;binCues=[];printerCams=new Map;finished=new Ei;appliances=new Map;directing=new Io;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this._realSky=null,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._bigTile=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._holoBig=!1,this._solarMore=null,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._rackView=null,this._note=null;try{this.thumbsSaved=localStorage.getItem("home3d.thumbs_compact")}catch{this.thumbsSaved=null}this._thumbsCompact=Tr(this.thumbsSaved,!1),this._phoneStage=!1,this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.plan2d=!1,this.clean=!1,this.cleanButton=!1,this.noSettings=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this._voice=null,this._micProbe=tr(),this._alerts=[],this._dismissing=null,this._household=[],this._hhFolded=x_("home3d.hhFolded"),this._binInfo=null,this._gangMenu=null,this.householdCard=!0,this.rackCards=!0,this._rackRows=null,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("home3d.flows")==="1",this._holoShow=localStorage.getItem("home3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!e?.connection||!this.isConnected||(this.unsubAsk=$l(e,t=>{this.onAsk(t)}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e?.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.wireTimer),this.wireKey="",document.removeEventListener("visibilitychange",this.onVisible),this.taps.cancel(),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,clearTimeout(this.showTimer),this.showTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearTimeout(this.motionTimer),this.motionTimer=void 0,clearTimeout(this.redTimer),this.redTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearTimeout(this.holoBigTimer),this.holoBigTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&St().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{let n=t;if(!n.target?.closest?.(".fp3d-holo"))return;let i=this.renderRoot.querySelector("canvas");i&&(n.preventDefault(),i.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=t[0]?.contentRect.width??1e3,i=n<700,r=wl(n);r!==this._phoneStage&&(this._phoneStage=r,this._thumbsCompact=Tr(this.thumbsSaved,r)),i!==this._narrowStage&&(this._narrowStage=i,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(this.starting||this.viewer)return;this.starting=!0;let e=this.plan2d;try{let t=e?await mp():await Ao();if(!this.isConnected||e!==this.plan2d)return;let n=this.renderRoot.querySelector(".fp3d-stage");n.addEventListener("pointerdown",i=>{this._central&&!i.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=t.createViewer(n,{quality:this.quality,explode:this.explode,onRoomTap:(i,r)=>this.fire("room-tap",{floorId:i,roomId:r}),onFloorTap:i=>this.fire("floor-tap",{floorId:i}),floorInfo:i=>i.rooms.length===1?M(this.hass,"floor_rooms_one"):M(this.hass,"floor_rooms",{n:i.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(i,r,s)=>this.onDeviceTap(i,r,s),onRackTap:(i,r,s)=>this.showRackView(i,r,s),onDeviceHold:(i,r,s)=>this.onDeviceHold(i,r,s),onDeviceDoubleTap:i=>!this.ro&&this.taps.doubleTap(i),onRoomDoubleTap:(i,r)=>this.onRoomDoubleTap(i,r),onDeviceSwipe:(i,r,s,a,l)=>this.onDeviceSwipe(i,r,s,a,l),onFurnitureSelect:i=>this.fire("furniture-select",{id:i}),onFurnitureMove:(i,r,s)=>this.fire("furniture-move",{id:i,x:r,z:s}),onDeviceSelect:i=>this.fire("device-select",{id:i}),onDeviceMove:(i,r,s)=>this.fire("device-move",{id:i,x:r,z:s}),onStats:i=>{this.showStats&&(this._stats=i)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((i,r,s,a,l,c)=>this.placeHolo(i,r,s,a,l,c)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...pn()],Or()),this.hass&&oa(this.hass,pn()).then(()=>this.syncDevices(!0)),this.shownPacks=Yo(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.viewPlan(this.building))),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(t){this._error=String(t)}finally{this.starting=!1,this.isConnected&&!this.viewer&&e!==this.plan2d&&this.start()}}switchViewer(){this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this._through=null,this._menu=null,this.viewer?.dispose(),this.viewer=null,this.shownPacks=-1,this._thumbs=[],this.thumbsAt=0,this._error=null,this.start()}willUpdate(e){e.has("building")&&(Yl(this.building??null),ld(this.building)),e.has("hass")&&this.hass&&Bd(Ud(this.hass))}updated(e){(e.has("hass")||e.has("theme"))&&this.toggleAttribute("light",yn(this.effectiveTheme())),e.has("plan2d")&&e.get("plan2d")!==void 0&&this.switchViewer(),e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null);let n=!1,i=!1;if(t.batch(()=>{if(this.shownPacks!==Yo()&&(this.shownPacks=Yo(),t.setPacks([...pn()],Or()),this.hass&&oa(this.hass,pn()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(na(this.hass,this.building)),i=!0),e.has("building")&&this.building){let a=JSON.stringify(this.startViewOf());n=this.shownStartView!==void 0&&this.shownStartView!==a,this.shownStartView=a,t.setStartView(this.startViewOf()),t.setBuilding(this.viewPlan(this.building))}(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let r=["building","markerMode","heatMode","flows","alerts","dimmed"].some(a=>e.has(a))||this.markerMode==="room"&&e.has("roomId"),s=this.replayTicked&&!!this.replay;this.replayTicked=!1,(r||i||e.has("hass")||s)&&this.syncDevices(r||i,s&&(this.trail||this.detecting))}),n&&this.floorId===null&&t.resetView(),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),t.setFitMargin(this._phoneStage?vl:yl),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("hass")&&!e.has("theme")&&(this.theme==="theme"||this.theme==="auto")){let r=this.effectiveTheme();t.setTheme(r),r!==lt(this.theme,e.get("hass"))&&this.scheduleThumbs()}e.has("theme")&&(t.setTheme(this.effectiveTheme()),e.has("hass")||this.syncDevices(!0)),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,this.replay?.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){let n=this.viewer,i=this.building;if(!n||!i||!this.hass)return;let r=this.hass,s=this.shownPlan?.plan,a=this.viewPlan(i);a!==s&&(n.setBuilding(a),e=!0),Np(i)&&!this.replay&&(this.showTimer??=setTimeout(()=>{this.showTimer=void 0,this.syncDevices(!1)},60050-Date.now()%6e4)),(e||!this.openingLinks||this.linkedRegistry!==r.entities)&&(this.openingLinks=oo(r,a.floors),this.furnitureLinks=Dt(r,a.floors),this.linkedRegistry=r.entities,this.findIndex=null,this.alertSrc=this.alerts?qs(r,a,this.weatherEntityId):null,this.watchHousehold(r,a),this.watched=va(r,a,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?js(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Zt()&&(this.watched=[...new Set([...this.watched,...sp(this.sceneHost(r,a))])]),e=!0);let l=e||t,c=!l;if(!l){for(let k of this.watched)if(this.shownStates.get(k)!==r.states[k]&&(l=!0,!k.startsWith("sensor."))){c=!1;break}}let d=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!l)return;if(c&&!this.replay){let k=Cp(performance.now()-this.lastSync,this._low);if(k>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},k);return}}this.lastSync=performance.now();let u=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(k=>[k,r.states[k]])),this.scene=Zt()?op(this.sceneHost(r,a)):[];let p=Xt(a,k=>this.furnitureLinks?.get(k.id)?.power??null),h=$u(r,a,p),_=this.now(),b=sd(r,a,_);if(clearTimeout(this.redTimer),this.redTimer=void 0,!this.replay){let k=Vt(a).camera_seconds*1e3,T=Math.min(...b.filter(V=>V.motion).map(V=>xs(r,V.id,k,_)??1/0));Number.isFinite(T)&&(this.redTimer=setTimeout(()=>this.syncDevices(!0),Math.max(50,T-_+20)))}let m=this.furnitureMarkers(r,a,new Set(b.map(k=>k.id)),new Set(h.map(k=>k.powerEntity)));h.push(...m.consumers),this.lastConsumers=h;let f=Su(r,a,h,p),v=new Map(h.filter(k=>k.id!==k.powerEntity).map(k=>[k.id,k.power]));this.confirmSet=wn(r,a.floors);let w=this.trail?this.trailNow(r,a):[],x=this.dimmed?[]:this.detectionPins(r,b);this.detecting=x.length>0;let A=new Set(a.floors.flatMap(k=>k.furniture.filter(T=>T.type==="parking"&&T.car&&En(r,T)).map(T=>T.id)));n.setDevices([...[...b,...m.markers,...this.lockMarkers(r,a)].map(k=>{let T=k.show==="no_power"||"energyDevice"in k&&k.energyDevice||"standby"in k&&k.standby?null:v.get(k.id)??null,V={...k,power:T,powerText:T===null?void 0:se(r,T),effect:this.dimmed?!1:k.effect},Q=k.ownName&&(k.showName||this.markerNames)?k.ownName:"",L=this.mediaCardUp(r,k.id)||!!k.furnitureId&&A.has(k.furnitureId);return{...V,pin:(this.plan2d?gp(V,this.markerMode,this.showPin(V)):this.showPin(V))&&!L,full:k.show==="always"||k.full===!0,caption:Q}}),...((this.flows??this._flows)&&!this.dimmed&&f.grid!==null?[this.gridPin(r,a,f.grid)]:[]).filter(k=>!!k),...x,...w.map((k,T)=>({id:`trail:${T}`,floorId:k.floorId,roomId:null,x:k.x,z:k.z,y:.3+.4*w.slice(0,T).filter(V=>V.entity===k.entity).length,icon:Yu,name:j(r,k.entity),text:Vi(r,k.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(a)]);for(let k of this.scene)k.kind==="marker"&&k.card&&k.furnitureId&&!m.targets.has(k.furnitureId)&&m.targets.set(k.furnitureId,`module:${k.id}`);n.setTrail(w,this.replay?this.robotPaths(r,a):[]),this.actionOwners=Cd(a.floors,k=>m.targets.get(k),k=>{let T=this.furnitureLinks?.get(k.id)?.entity;return T&&T!=="none"?T:null});for(let k of a.floors)for(let T of k.furniture)!m.targets.has(T.id)&&this.actionOwners.has(`item:${T.id}`)&&m.targets.set(T.id,`item:${T.id}`);n.setPickTargets(m.targets,this.openingTargets()),n.setScreens(m.screens),n.setFridgeDoors(ns(r,a.floors)),n.setRackLeds(wp(r,a.floors)),n.setAwnings(Ic(r,a.floors)),n.setProjections(this.projectedCameras(r,a)),n.setRobots(this.robotInfos(r,a));let E=new Map;for(let k of a.settings.roof?.windows??[])E.set(k.id,hh(r,k));n.setRoofWindows(E),n.setParked(na(r,a)),n.setBinSpots(this.binSpots),n.setBinCues(this.binCues);let D=new Map(a.floors.flatMap(k=>k.openings.map(T=>[T.id,T.type]))),H=new Map([...this.openingLinks].map(([k,T])=>[k,it(r,T,D.get(k))]));n.setOpeningStates(H,d);let W=this.alertSrc?lu(r,a,this.alertSrc,this.openingLinks):[],F=this.alerts&&Zt(),$=F?rp(this.sceneHost(r,a)).map(k=>({kind:k.kind,entity:k.entity,roomId:k.roomId,floorId:k.floorId,text:k.text,color:k.color,quiet:!k.roomId})):[],I=[...W,...$];this.alertSrc&&this.tidySnoozes(a,I,F),this.setAlerts(uu(I,a.settings)),clearTimeout(this.fridgeTimer);let S=this.replay?null:su(a.floors.flatMap(k=>k.furniture),r);S!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),S+500));let P=[...b,...m.markers].map(k=>`${k.id}:${k.glow?`${k.glow.level.toFixed(1)}/${k.glow.color.map(T=>T.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...H].map(([k,T])=>`${k}:${T.open}:${T.cover===null?"-":T.cover.toFixed(1)}`).join(";");if(P!==this.thumbSig){let k=this.thumbSig==="";this.thumbSig=P,k||this.scheduleThumbs(1500)}let R=a.floors.flatMap(k=>k.furniture.filter(T=>oe(T.type)==="home_battery").map(T=>({floorId:k.id,x:T.x,z:T.z})))[0]??(a.energy.battery?a.floors.flatMap(k=>k.placements.filter(T=>T.entity_id===a.energy.battery).map(T=>({floorId:k.id,x:T.x,z:T.z})))[0]:null),q=Hu(r,a,f.solar),C=a.settings.roof.hologram??Ge,O=[...a.settings.roof.solar??[]].sort((k,T)=>T.rows*T.cols-k.rows*k.cols),z=a.settings.roof.strings??[],ae=k=>(k.string?z.find(T=>T.id===k.string)?.inverter:null)??null,J=C.plant_floor?"all":"house",Se=(k,T,V,Q)=>{let L=Kt(a,k);if(!L)return null;let[G,re]=Gt(L,k),ie=k.u+G/2+T,_e=k.v+re/2+V,Ie=[L.o[0]+L.eu[0]*ie+L.es[0]*_e,L.o[1]+L.eu[1]*ie+L.es[1]*_e,L.o[2]+L.eu[2]*ie+L.es[2]*_e],ve=L.wall?.floorId??(L.unbounded?a.floors.find(De=>De.elevation===Math.min(...a.floors.map(dn=>dn.elevation)))?.id??a.floors[0].id:[...a.floors].sort((De,dn)=>dn.elevation-De.elevation)[0].id);return{p:[Ie[0]+L.n[0]*.05,Ie[1]+L.n[1]*.05,Ie[2]+L.n[2]*.05],n:[L.n[0],L.n[1],L.n[2]],floorId:ve,size:Q,roof:!0,views:J}},ne=[],X=[],xe=f.grid!==null||f.battery!==null||f.solar!==null,Ae=C.place==="free"&&Number.isFinite(C.x)&&Number.isFinite(C.z),pe=f.solar!==null&&!Ae?O.find(k=>k.id===C.field)??O[0]:void 0,Ve=pe?ae(pe):null,ln=!!pe&&!!Ve&&!O.some(k=>k.id!==pe.id&&ae(k)===Ve)&&C.right===0&&C.up===0,dt=(()=>{if(!ln||!pe)return 0;let k=Kt(a,pe);return k?Gt(k,pe)[0]/2+1.2:0})(),Ro=pe?Se(pe,C.right+dt,C.up,C.size):null,lr=this.devicePowers(r,a),zn=f.solar!==null?a.energy.solar?[a.energy.solar]:Xt(a,k=>this.furnitureLinks?.get(k.id)?.power??null).solar:[];if(Ro)ne.push(Ro),X.push({kind:"main",name:M(r,"holo_title"),w:null,dayIds:zn,battery:null});else if(xe&&Ae){let k=0,T=0,V=0,Q=1/0,L=a.floors[0];for(let _e of a.floors){_e.rooms.length&&(Q=Math.min(Q,_e.elevation)),_e.rooms.length&&(!L.rooms.length||_e.elevation+_e.height>L.elevation+L.height)&&(L=_e);for(let Ie of _e.rooms)for(let[ve,De]of Ie.points)k+=ve,T+=De,V++}V&&(k/=V,T/=V);let G=C.x-k,re=C.z-T,ie=Math.hypot(G,re);ne.push({p:[C.x,(Number.isFinite(Q)?Q:0)+(C.height??3),C.z],n:ie>.01?[G/ie,0,re/ie]:[1,0,0],floorId:L.id,size:C.size,roof:!0,views:J}),X.push({kind:"main",name:M(r,"holo_title"),w:null,dayIds:zn,battery:null})}else if(xe&&a.floors.some(k=>k.rooms.length)){let k=-1/0,T=1/0,V=-1/0,Q=0,L=a.floors[0];for(let G of a.floors){for(let re of G.rooms)for(let[ie,_e]of re.points)k=Math.max(k,ie),T=Math.min(T,_e),V=Math.max(V,_e);G.rooms.length&&G.elevation+G.height>Q&&(Q=G.elevation+G.height,L=G)}ne.push({p:[k+.6,Q+.4,(T+V)/2],n:[1,0,0],floorId:L.id,size:C.size,roof:!0,views:J}),X.push({kind:"main",name:M(r,"holo_title"),w:null,dayIds:zn,battery:null})}if(f.solar!==null){let k=new Set;for(let T of a.floors)for(let V of T.furniture.filter(Q=>oe(Q.type)==="inverter")){if(V.plant_card===!1||k.has(V.id))continue;k.add(V.id);let Q=O.filter(Ie=>ae(Ie)===V.id),L=(pe&&V.id===Ve?Q.find(Ie=>Ie.id!==pe.id):null)??Q[0],G=this.furnitureLinks?.get(V.id)?.power??null,re=L?Se(L,V.plant_right??0,V.plant_up??0,C.size*.85):null;if(!re||!G)continue;let ie=T.furniture.filter(Ie=>oe(Ie.type)==="home_battery").sort((Ie,ve)=>Math.hypot(Ie.x-V.x,Ie.z-V.z)-Math.hypot(ve.x-V.x,ve.z-V.z))[0],_e=ie?.soc&&ie.soc!=="none"?Number(r.states[ie.soc]?.state):NaN;ne.push(re),X.push({kind:"plant",name:V.name||le(r,V.type),w:Math.max(0,ue(r.states[G])??0),dayIds:[G],battery:ie?{soc:Number.isFinite(_e)?_e:null,w:lr.get(ie.id)??null}:null})}}let ut=C.device_house===!1?"floor":"all";for(let k of a.floors){for(let T of k.furniture){if(!T.holo)continue;let V=this.furnitureLinks?.get(T.id)?.power??null,Q=h.find(G=>G.id===T.id);if(!V&&!Q)continue;let L=k.elevation+ce(k,T)+T.h;ne.push({p:[T.x,L+.1,T.z],n:[0,1,0],floorId:k.id,size:C.size*.7,roof:!1,views:ut,room:Ra(k,T.x,T.z)}),X.push({kind:"device",name:T.name||le(r,T.type),w:Q?.power??(V?ue(r.states[V]):null),dayIds:V?[V]:[],battery:null})}for(let T of k.placements){if(!T.holo)continue;let V=xo(r,T.entity_id);if(!V)continue;let Q=k.elevation+(T.y??.4)+.2;ne.push({p:[T.x,Q,T.z],n:[0,1,0],floorId:k.id,size:C.size*.7,roof:!1,views:ut,room:Ra(k,T.x,T.z)}),X.push({kind:"device",name:T.name||j(r,T.entity_id),w:ue(r.states[V]),dayIds:[V],battery:null})}}let N=[];{let k=new Set,T=(a.settings.roof.hologram??Ge).size,V=(L,G,re,ie,_e,Ie)=>{let ve=r.states[G];if(!ve||B(G)!=="media")return;if(k.has(G)){let Pt=N.find(fr=>fr.id===G);Pt&&N.push({...Pt,id:`${G}#${N.filter(fr=>fr.id.startsWith(`${G}#`)).length+2}`,floorId:L.id,x:re,z:ie,members:[G]});return}k.add(G);let De=this.ro?void 0:this.mediaGrace.get(G),dn=[ve.attributes.media_title,ve.attributes.app_name,ve.attributes.source].find(Pt=>typeof Pt=="string"&&!!Pt.trim())??"";if(!(!K(ve)&&(ve.state==="playing"||ve.state==="paused"&&!!dn&&this.pausedRecently(ve)||ve.state==="on"&&!!ve.attributes.source))){De&&De.until>Date.now()?(N.push({...De.source,playing:!1,level:0}),ne.push(De.anchor),X.push({...De.card,media:{...De.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,De.until-Date.now()+100))):K(ve)||(this.mediaGrace.delete(G),N.push({id:G,floorId:L.id,x:re,z:ie,level:0,playing:!1,members:[]}));return}let hr=ve.state==="playing",je=ve.attributes,Ka=typeof je.volume_level=="number"?Math.min(1,Math.max(0,je.volume_level)):.5,Rh=Array.isArray(je.group_members)?je.group_members.filter(Pt=>Pt!==G):[];N.push({id:G,floorId:L.id,x:re,z:ie,level:hr?.3+.7*Ka:0,playing:hr,members:Rh});let Hh=dn||M(r,"holo_media_playing"),Ga={p:[re,L.elevation+_e+.12,ie],n:[0,1,0],floorId:L.id,size:T*.7,roof:!1,views:"all"},Ya={kind:"media",name:Ie,w:null,dayIds:[],battery:null,media:{id:G,title:Hh,artist:typeof je.media_artist=="string"?je.media_artist:typeof je.media_album_name=="string"?je.media_album_name:"",picture:typeof je.entity_picture=="string"?je.entity_picture:null,volume:Math.round(Ka*100),playing:hr}};ne.push(Ga),X.push(Ya),this.ro||this.mediaGrace.set(G,{until:Date.now()+45e3,card:Ya,source:N[N.length-1],anchor:Ga})},Q=(L,G)=>{for(let re of L.furniture){if((re.entity!=null&&re.entity!=="none")!==G)continue;let ie=this.furnitureLinks?.get(re.id)?.entity;ie&&V(L,ie,re.x,re.z,ce(L,re)+re.h,re.name||le(r,re.type))}};for(let L of a.floors)Q(L,!0);for(let L of a.floors)for(let G of L.placements)V(L,G.entity_id,G.x,G.z,G.y??1.1,G.name||j(r,G.entity_id));for(let L of a.floors)Q(L,!1)}{let k=(a.settings.roof.hologram??Ge).size;for(let T of a.floors)for(let V of T.furniture){if(V.type!=="parking"||!V.car)continue;let Q=En(r,V);if(!Q)continue;let L=io(r,V);if(L.soc===null&&L.range===null&&L.locked===null&&L.climateOn===null)continue;let G=qu(V,Q),re=ce(T,V)+(G?.h??1.6);ne.push({p:[V.x,T.elevation+re+.25,V.z],n:[0,1,0],floorId:T.id,size:k*.7,roof:!1,views:"all"});let ie=L.entities;X.push({kind:"car",name:V.name||le(r,Q),w:null,dayIds:[],battery:null,car:{spot:V.id,soc:L.soc,range:L.range,rangeUnit:L.rangeUnit,chargingW:L.chargingW,charging:L.charging,locked:L.locked,climateOn:L.climateOn,lock:ie.lock,climate:ie.climate,charge:ie.charging&&/^(switch|input_boolean)\./.test(ie.charging)?ie.charging:null}})}}for(let{anchor:k,card:T}of this.rackHolos(r,a))ne.push(k),X.push(T);let ee=this.scene.filter(k=>k.kind==="water").map(k=>({...k,level:this.dimmed?k.level*.4:k.level}));if(n.setPools(ee),Zt()){let k=(a.settings.roof.hologram??Ge).size;for(let T of ip(this.sceneHost(r,a))){let V=a.floors.find(L=>L.id===T.anchor.floorId);if(!V)continue;let Q=null;if(T.anchor.areaId){let L=V.outdoor.find(_e=>_e.id===T.anchor.areaId);if(!L||L.points.length<3)continue;let[G,re]=Fe(L.points),ie=L.type==="pool"?gn(V,L):et(V,G,re);Q=[G,V.elevation+Math.max(ie,0)+(L.above?.6:1.1),re]}else if(T.anchor.furnitureId){let L=V.furniture.find(G=>G.id===T.anchor.furnitureId);if(!L)continue;Q=[L.x,V.elevation+ce(V,L)+L.h+.25,L.z]}Q&&(ne.push({p:Q,n:[0,1,0],floorId:V.id,size:k*.7,roof:!1,views:"all"}),X.push({kind:"module",name:T.title,w:null,dayIds:[],battery:null,module:T}))}for(let T of this.scene){if(T.kind!=="tag")continue;let V=a.floors.find(Q=>Q.id===T.floorId);V&&(ne.push({p:[T.at[0],V.elevation+T.at[1],T.at[2]],n:[0,1,0],floorId:V.id,size:k*.75,roof:!1,views:T.views??"all"}),X.push({kind:"bin",name:T.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:T.color??"#37e0ff",when:T.text,name:T.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}{let k=(a.settings.roof.hologram??Ge).size;for(let T of Jd(this.binHolos)){let V=a.floors.find(L=>L.id===T.floorId);if(!V)continue;ne.push({p:[T.x,V.elevation+T.y+.04,T.z],n:[0,1,0],floorId:T.floorId,size:k*.75,roof:!1,views:"all"});let Q=T.lines.map(L=>({color:L.color,when:L.when,name:L.name,soon:!!L.soon&&!L.out,out:!!L.out}));X.push({kind:"bin",name:T.lines.map(L=>L.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:Q,soon:Q.some(L=>L.soon),icon:T.lines.length===1?T.lines[0].icon??null:null}})}}n.setSound(N);let me=this._walk?this.walkRoomPts:null,Qe=ne.map(k=>!this._walk||!!me&&U([k.p[0],k.p[2]],me)),pt=X.filter((k,T)=>Qe[T]),Ho=!!(this.flows??this._flows)&&!this.dimmed,At=Ho&&!this._walk?nh(r,h).filter(k=>a.floors.some(T=>T.id===k.floorId)):[];JSON.stringify(At)!==JSON.stringify(this._wires)&&(this._wires=At),this.holoCount=pt.length;let cr=At.map(k=>({p:[k.x,a.floors.find(T=>T.id===k.floorId).elevation+.03,k.z],n:[0,1,0],floorId:k.floorId,size:1,roof:!1,views:"all",plan:!0}));n.setAnchors([...ne.filter((k,T)=>Qe[T]),...cr]),JSON.stringify(pt)!==JSON.stringify(this._holos)&&(this._holos=pt),this.watchRackSpark(),n.setSolarLevels(q&&!this.dimmed?Ru(a,q):new Map);let Fo=k=>zu(k,f),On=Ho?Tu({building:a,consumers:h,summary:f,battery:R??null,fieldPower:q,devicePower:this.devicePowers(r,a)}).map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.power,color:Ou(Fo(k.kind)),dots:Du(Fo(k.kind)),thick:zp(k.power)})):[],Na=this.poolPipes(a),Ph=this.scene.filter(k=>k.kind==="line");n.setFlows(this.dimmed?On:[...On,...Na.flows,...up(Ph)]),n.setPipes(Na.tubes),n.setPatches(this.scene.filter(k=>k.kind==="patch").map(k=>({floorId:k.floorId,points:k.points,y:k.y,color:k.color,opacity:this.dimmed?k.opacity*.4:k.opacity,...k.glow?{glow:!0}:{}})));let dr=[],ur=hi("locate")&&fi(a)?[...dr,...mi(r,a,new Set(dr.map(k=>k.id)))]:dr;n.setPersonLook(bs(a)==="pin"?"pin":"figure"),n.setPersons(ur),this.lastPersons=ur.map(k=>({floorId:k.floorId,roomId:k.roomId}));let Eh=Xc(r,a,this.openingLinks,ur);n.setFloorInfo(new Map([...Eh].map(([k,T])=>[k,Zc(r,T)])));let Co=r.states["sun.sun"]?.attributes,Dn=typeof Co?.elevation=="number"?Co.elevation:null;n.setSun(Dn!==null&&typeof Co?.azimuth=="number"?{elevation:Dn,azimuth:Co.azimuth}:null);let zo=k=>M(r,k).charAt(0).toUpperCase();n.setSunPath(this.sunPathToday(r),[zo("compass_n"),zo("compass_e"),zo("compass_s"),zo("compass_w")]),(this.theme==="auto"||this.theme==="theme")&&n.setTheme(this.effectiveTheme());let Va=this.weather&&!this.dimmed?Od(r,Yt(r,this.weatherEntityId??a.settings.weather_entity),a.settings.rain_entity):null,cn=Va?Dd(Va,a.settings.weather_effects):null;this.cloud=cn?.cloud??0,this._sky=(Dn===null?0:Math.min(1,Math.max(0,(Dn+4)/16)))*(1-.45*this.cloud);let Ba=this.effectiveTheme()==="realistic"?ep(Dn,cn):null;JSON.stringify(Ba)!==JSON.stringify(this._realSky)&&(this._realSky=Ba);let Ih=cn?cn.sky:(a.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed?{...cn??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:Ih}:null),this.watchLightning(!!cn?.lightning),this.applyTint(),this.applyMotion();let pr=eh(a.energy,r.states,new Date(this.now()));pr!==this._cheap&&(this._cheap=pr);let Ua=f.grid!==null||f.solar!==null||f.battery!==null||f.tariff!==null||pr!==null?f:null;JSON.stringify(Ua)!==JSON.stringify(this._energy)&&(this._energy=Ua);let qa=h.some(k=>k.wallbox)?h.filter(k=>k.wallbox).reduce((k,T)=>k+T.power,0):null,ja=a.floors.flatMap(k=>k.furniture.filter(T=>oe(T.type)==="inverter")).map(k=>{let T=this.furnitureLinks?.get(k.id)?.power,V=T?ue(r.states[T]):null;return V===null?null:{name:k.name||le(r,k.type),w:Math.max(0,V)}}).filter(k=>!!k);JSON.stringify(ja)!==JSON.stringify(this._plants)&&(this._plants=ja),qa!==this._wallboxW&&(this._wallboxW=qa),this.watchSolarDay([...new Set(X.flatMap(k=>k.dayIds))]),this.watchMeters(a.energy.gas??null,a.energy.water??null),this.watchWireKwh(At),u&&(this.syncMs=this.syncMs*.8+(performance.now()-u)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.findIndex??=Ui(t,n)).find(s=>s.entity===e);if(i){this.goTo(i);return}let r=t.entities?.[e]?.area_id??t.devices?.[t.entities?.[e]?.device_id??""]?.area_id??null;for(let s of n.floors){let a=s.openings.find(u=>{let p=this.openingLinks?.get(u.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!r&&u.area_id===r));if(!l)continue;let[c,d]=Fe(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:c,z:d,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,i=n?oo(t,e.floors):this.openingLinks,r=n?Dt(t,e.floors):this.furnitureLinks,s=js(qs(t,e,this.weatherEntityId)),a=va(t,e,{openings:i,furniture:r,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=e.floors.flatMap(c=>c.furniture.filter(d=>d.type==="parking").flatMap(d=>[typeof d.entity=="string"?d.entity:null,d.car?li(t,d).tracker:null]).filter(d=>!!d&&d.startsWith("device_tracker.")));return{entities:a,openings:[...i],furniture:[...r],low:this._low,cars:l,energy:!0,auto:!0}}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return y;let t=this.hass,n=t.states[e.entity],i=de(t,n),r=B(e.entity)==="light"&&n?.state==="on"&&i.endsWith("%")?`${M(t,"state_on")} \xB7 ${i}`:i,s=n?.last_changed?M(t,"tt_since",{time:Vi(t,Date.parse(n.last_changed))}):"";return g`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${j(t,e.entity)}</span>
      <b>${s?`${r} \xB7 ${s}`:r}</b>
    </div>`}devicePowers(e,t){let n=new Map;for(let i of t.floors)for(let r of i.furniture){let s=oe(r.type);if(s!=="inverter"&&s!=="home_battery"&&s!=="solar")continue;let a=this.furnitureLinks?.get(r.id)?.power,l=oe(r.type)==="home_battery"&&r.charge&&r.charge!=="none"?ue(e.states[r.charge]):null,c=a?ue(e.states[a],oe(r.type)==="home_battery"&&t.energy.battery_invert&&l===null):null;c!==null&&l!==null?c=Math.max(0,c)-Math.max(0,l):c===null&&l!==null&&(c=-Math.max(0,l)),c!==null&&n.set(r.id,c)}return n}detectionPins(e,t){let n=[],i=new Set(this.building?.floors.flatMap(r=>r.placements.filter(s=>s.detect_pins===!1).map(s=>s.entity_id))??[]);for(let r of t){if(!r.model?.startsWith("camera")||i.has(r.id))continue;let s=this.now(),a=st(e,r.id).filter(h=>{let _=e.states[h];return _?_.state==="on"?!0:_.state==="off"&&!!_.last_changed&&s-Date.parse(_.last_changed)<__:!1}),l=new Map;for(let h of a){let _=ys(e,h);l.has(_)||l.set(_,h)}l.size>1&&l.delete("motion");let c=(r.rotation??0)*Math.PI/180,d=[-Math.sin(c),Math.cos(c)],u=r.model==="camera_ceiling",p=0;for(let[h,_]of l){let b=e.states[_],m=b?.last_changed?Vi(e,Date.parse(b.last_changed)):"";n.push({id:`detect:${_}`,floorId:r.floorId,roomId:r.roomId,x:r.x+(u?0:d[0]*1.1),z:r.z+(u?0:d[1]*1.1),y:1.4+.4*p++,icon:ph[h]??ph.motion,name:j(e,_),text:`${M(e,`detect_${h}`)}${m?` \xB7 ${m}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let i=Zs(t);if(!i)return null;let r=Math.abs(n)<5,s=t.settings.outage_entity;return s&&Ai(e.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:v_,name:M(e,"holo_grid"),text:M(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:w_,name:M(e,"holo_grid"),text:r?se(e,0):`${M(e,n<0?"energy_grid_export":"energy_grid_import")} ${se(e,Math.abs(n))}`,active:!r,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(s=>!!s),i=this.replay?"":n.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let r=async()=>{if(!this.hass||document.hidden)return;let s=await Js(this.hass,n);this.meterKey===i&&s&&(this._meters={gas:e?s.get(e)??null:null,water:t?s.get(t)??null:null})};r(),this.meterTimer=setInterval(()=>{r()},3e5)}holoCount=0;wireKey="";wireTimer;watchWireKwh(e){let t=this.replay?"":e.map(i=>`${i.key}=${i.energy??""}`).join(",");if(t===this.wireKey)return;if(this.wireKey=t,clearInterval(this.wireTimer),this.wireTimer=void 0,!t){this._wireKwh=null;return}let n=async(i=!1)=>{if(!this.hass||document.hidden&&!i)return;let r=await oh(this.hass,e);this.wireKey===t&&r&&(this._wireKwh=r)};n(!0),this.wireTimer=setInterval(()=>{n()},3e5)}placeWire(e,t,n,i){let r=this.renderRoot.querySelector(`.fp3d-wire[data-wire="${e}"]`);r&&(r.hidden!==!i&&(r.hidden=!i),i&&(r.style.transform=`translate(${t.toFixed(1)}px, ${n.toFixed(1)}px) translate(-50%, -50%)`))}renderWires(){if(!this._wires?.length)return y;let e=this.hass;return this._wires.map((t,n)=>{let i=this._wireKwh?.get(t.key),r=i===void 0?"\u2026":`${Z(e,i,i<10?2:1)} kWh`,s=j(e,t.id),a=this._wireOpen===t.key;return g`<button
        class="fp3d-wire ${a?"fp3d-wire-open":""}"
        data-wire=${n}
        hidden
        aria-expanded=${a}
        aria-label=${`${s}: ${M(e,"wire_today")} ${r}`}
        @click=${l=>{l.stopPropagation(),this._wireOpen=a?null:t.key}}
      >
        <span class="fp3d-wire-tip" aria-hidden="true">${s}<span>${M(e,"wire_today")} <b>${r}</b></span></span>
      </button>`})}poolPipes(e){let t=[],n=[],i=new Map(this.scene.filter(r=>r.kind==="pipeflow").map(r=>[r.areaId,r.flows]));for(let{floor:r,area:s}of Ip(e.floors)){let a=s.pool;if(!a.pipes?.length&&!a.joints?.length)continue;let l=a.ports??[],c=new Map(Object.entries(i.get(s.id)??{})),d=Xi(e,r,s),u=(p,h)=>_a(p,h,s,r);t.push(...Rp(a.pipes??[],c,d,u));for(let p of l){if(p.kind!=="inlet")continue;let h=d(`port:${p.id}`),_=h&&ba(s,[h.x,h.z]);if(!h||!_)continue;let b=(a.pipes??[]).find(f=>f.to===`port:${p.id}`),m=b?c.get(b.id):void 0;n.push({floorId:r.id,points:[[h.x+_[0]*.03,h.y,h.z+_[1]*.03],[h.x-_[0]*.09,h.y,h.z-_[1]*.09]],radius:.035,water:m?.active?m.color:null,fittings:[]})}for(let p of a.joints??[]){if(p.kind!=="wall"&&p.kind!=="floor")continue;let h=d(`joint:${p.id}:inside`),_=d(`joint:${p.id}:outside`),b=p.kind==="floor"?.03:h.y;n.push({floorId:r.id,points:[[h.x,b,h.z],[_.x,_.y,_.z]],radius:.05,water:null,fittings:[]})}for(let p of a.pipes??[]){let h=_a(Po(p,d),p,s,r);if(h.length<2)continue;let _=c.get(p.id),b=[],m=Qi(h);for(let[f,v]of[[p.from,.04],[p.to,m-.04]]){let w=f.startsWith("dev:")||f.startsWith("joint:")?Ji(h,v):null;w&&b.push({kind:"sleeve",p:w.p,dir:w.dir})}for(let f of p.fittings??[]){let v=Ji(h,f.at);v&&b.push({kind:f.kind,p:v.p,dir:v.dir,open:f.open!==!1})}n.push({floorId:p.floor_id,points:h,radius:.025,water:_?.active?_.color??ga:null,fittings:b})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let r=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(r===this.holoIds)return;this.holoIds=r,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let r=await Iu(this.hass,e);this.holoIds===n&&(this._rows=r)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,i,r,s){if(e>=this.holoCount)return this.placeWire(e-this.holoCount,t,n,i);(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),c=this._holos[e]?.kind==="main";if(!a){c&&this._holoOn&&(this._holoOn=!1);return}c&&i!==this._holoOn&&(this._holoOn=i);let d=this._holos[e],u=(this.building?.settings.roof.hologram??Ge).device_min_w??0;d?.kind==="device"&&u>0&&(d.w??0)<u&&(i=!1);let p=!i;if(a.hidden!==p&&(a.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!i)return;if(d?.kind==="bin"){let W=Math.max(.6,r*.8),F=!!d.bin?.icon&&r*.8<.62;a.classList.contains("fp3d-holo-far")!==F&&(a.classList.toggle("fp3d-holo-far",F),this.holoSizes.delete(e)),F&&(W=1);let $=this.holoSizes.get(e),I=performance.now();(!$||I-$.at>2e3)&&($={w:a.offsetWidth||90,h:a.offsetHeight||40,at:I},this.holoSizes.set(e,$));let S=$.w*W,P=$.h*W,R=n;for(let q=0;q<6;q++){let C=this.holoBoxes.find(O=>t-S/2<O.x1+3&&t+S/2>O.x0-3&&R-P<O.y1+3&&R>O.y0-3);if(!C)break;R=C.y0-4}this.holoBoxes.push({i:e,x0:t-S/2,x1:t+S/2,y0:R-P,y1:R}),a.style.transform=`translate(${t.toFixed(1)}px, ${R.toFixed(1)}px) scale(${W.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=r*.8,_=34*h,b=46*h,m=t+(s?_:-_),f=n-b,v=this.holoSizes.get(e),w=performance.now();(!v||w-v.at>2e3&&!(c&&this._holoBig))&&(v={w:a.offsetWidth||184,h:a.offsetHeight||90,at:w},this.holoSizes.set(e,v));let x=v.w*h,A=v.h*h,E=s?m:m-x,D=E+x;for(let W=0;W<6;W++){let F=this.holoBoxes.find($=>E<$.x1+4&&D>$.x0-4&&f-A<$.y1+4&&f>$.y0-4);if(!F)break;f=F.y0-6}this.holoBoxes.push({i:e,x0:E,x1:D,y0:f-A,y1:f});let H=s||(this.building?.settings.roof.hologram??Ge).mirror!==!1;if(a.style.transform=H?`translate(${m.toFixed(1)}px, ${f.toFixed(1)}px) scale(${(s?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${E.toFixed(1)}px, ${f.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let W=l.firstElementChild,F=l.lastElementChild;W?.setAttribute("x1",t.toFixed(1)),W?.setAttribute("y1",n.toFixed(1)),W?.setAttribute("x2",m.toFixed(1)),W?.setAttribute("y2",f.toFixed(1)),F?.setAttribute("cx",t.toFixed(1)),F?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let e=this._energy,t=()=>this._holos.map((r,s)=>r.kind==="bin"?this.renderBinCard(r,s):r.kind==="rack"?this.renderRackCard(r,s):y);if(this.roomId&&!(this.building?.settings.roof.hologram??Ge).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return t();let n=this.floorId===null||(this.building?.floors.length??0)<=1,i=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&n;return this._holos.map((r,s)=>r.kind==="module"?this.renderModuleCard(r,s):r.kind==="bin"?this.renderBinCard(r,s):r.kind==="rack"?this.renderRackCard(r,s):r.kind==="car"?this.renderCarCard(r,s):r.kind==="media"?this.renderMediaCard(r,s):r.kind==="device"?this.renderDeviceCard(r,s):i?this.renderHoloCard(r,s,e):y)}renderBinCard(e,t){let n=e.bin,i=n.lines.length===1?n.lines[0]:null,r=n.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return g`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${i?.out?"fp3d-holo-out":""} ${i?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${r} style="--bin:${n.lines[0].color}">
      ${n.icon?g`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:y}
      ${i?g`<div class="fp3d-holo-body"><b>${i.when}</b><span>${i.name}</span></div>`:g`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(s=>g`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,t){let n=this.hass,i=_=>M(n,_),r=e.car,s=!this.mediaFolded.has(r.spot),a=()=>{this.mediaFolded.has(r.spot)?this.mediaFolded.delete(r.spot):this.mediaFolded.add(r.spot),this.requestUpdate()},l=(_,b,m)=>sn(n,_,b,{entity_id:m}),c=(_,b)=>_.startsWith("climate.")?l("climate",b?"turn_on":"turn_off",_):l("homeassistant",b?"turn_on":"turn_off",_),d=async()=>{if(!r.lock)return;let _=r.lock.startsWith("lock.");if(r.locked){if(!await this.ask(i("car_unlock_confirm")))return;_?l("lock","unlock",r.lock):l("homeassistant","turn_off",r.lock)}else _?l("lock","lock",r.lock):l("homeassistant","turn_on",r.lock)},u=r.soc===null?"#37e0ff":r.soc>=50?"#4dff80":r.soc>=20?"#ffcc40":"#ff4d40",p=!!r.lock&&/^(lock|input_boolean|switch)\./.test(r.lock),h=!!r.climate&&/^(climate|switch|input_boolean)\./.test(r.climate);return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${s?"true":"false"} @click=${a} @keydown=${Fn(a)}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${r.charging?`\u26A1 ${i("car_charging_short")}`:r.locked===null?"":r.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${r.soc!==null?`${Math.round(r.soc)} %`:"\u2013"}</b>
            <span>${r.range!==null?`${Z(n,r.range,0)} ${r.rangeUnit}`:""}${r.charging&&r.chargingW?` \xB7 ${se(n,r.chargingW)}`:""}</span>
          </div>
          ${r.soc!==null?g`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,r.soc))}%;background:${u}"></i></div>`:y}
          ${s&&!this.ro&&(p||h||r.charge)?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?g`<button title=${r.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${d}>${r.locked?"\u{1F512}":"\u{1F513}"}</button>`:y}
                ${h?g`<button class=${r.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>c(r.climate,!r.climateOn)}>❄</button>`:y}
                ${r.charge?g`<button class=${r.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>c(r.charge,!r.charging)}>⚡</button>`:y}
              </div>`:y}
        </div>
      </div>`}renderModuleCard(e,t){let n=e.module,i=!this.mediaFolded.has(n.id),r=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},s=h=>h?`color:${h}`:"",a=this._low||this.clientWidth<600,l=qi(n.rows,a),c=qi(n.cells,a),d=n.chain?qi(n.chain.items,a):[],u=n.spark&&n.spark.values.length>1&&!(a&&n.spark.minor)?n.spark:null,p=!!(n.chain||n.cells?.length||n.status);return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${p?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${i?"true":"false"} @click=${r} @keydown=${Fn(r)}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${s(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?g`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?g`<i>${n.status.icon}</i>`:y}<b>${n.status.text}</b>${n.status.since?g`<span>${n.status.since}</span>`:y}
              </div>`:y}
          ${n.main?g`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?g`<em style=${s(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?g`<small>${n.main.side.sub}</small>`:y}</em>`:y}
              </div>`:y}
          ${i&&d.length?g`<div class="fp3d-holo-chain">
                  ${d.map((h,_)=>g`${_?g`<s>→</s>`:y}<div><small>${h.label}</small><b style=${s(h.color)}>${h.value}</b></div>`)}
                </div>
                ${n.chain.note?g`<div class="fp3d-holo-chain-note" style=${s(n.chain.noteColor)}>${n.chain.note}</div>`:y}`:y}
          ${i?l.map(h=>g`<div class="fp3d-holo-mrow"><span>${h.label}</span><b style=${s(h.color)}>${h.value}</b>${h.at!==void 0?h.fill?g`<i class="fp3d-holo-mrow-fill"><s style="width:${h.at}%;background:${h.color??"#37e0ff"}"></s></i>`:g`<i><em style="left:${h.at}%;background:${h.color??"#37e0ff"};color:${h.color??"#37e0ff"}"></em></i>`:g`<i class="fp3d-holo-mrow-none"></i>`}</div>`):y}
          ${i&&c.length?g`<div class="fp3d-holo-cells">${c.map(h=>g`<div><small>${h.label}</small><b style=${s(h.color)}>${h.value}</b></div>`)}</div>`:y}
          ${i&&n.hint?g`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:y}
          ${i?(n.lines??[]).map(h=>g`<div class="fp3d-holo-mline">${h}</div>`):y}
          ${i&&u?g`${u.label?g`<div class="fp3d-holo-spark-label">${u.label}</div>`:y}${dh(u.values,u.color??"#ffb347")}`:y}
          ${i&&n.chips?.length?g`<div class="fp3d-holo-chips">
                ${n.chips.map(h=>g`<div class="fp3d-holo-mline">${h.title}</div>
                    <div class="fp3d-holo-chip-row">${h.items.map(_=>g`<button class=${_.on?"fp3d-holo-on":""} title=${_.title??""} @click=${()=>_.onTap()}>${_.label}</button>`)}</div>`)}
              </div>`:y}
          ${i&&!this.ro&&n.buttons?.length?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(h=>g`<button class=${h.on?"fp3d-holo-on":""} title=${h.title??""} @click=${()=>h.onTap()}>${h.label}</button>`)}</div>`:y}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){let n=this.hass,i=w=>M(n,w),r=e.media,s=!this.mediaFolded.has(r.id),a=()=>{this.mediaFolded.has(r.id)?this.mediaFolded.delete(r.id):this.mediaFolded.add(r.id),this.requestUpdate()},l=(w,x={})=>{Promise.resolve(n.callService("media_player",w,{entity_id:r.id,...x})).catch(A=>this.serviceFailed(`media_player.${w}`,A))},c={down:w=>w.currentTarget.dataset.pressed=String(w.pointerId),up:w=>x=>{let A=x.currentTarget;A.dataset.pressed===String(x.pointerId)&&(delete A.dataset.pressed,x.stopPropagation(),A.dataset.acted=String(Date.now()),w())},key:w=>x=>{let A=x.currentTarget;Date.now()-Number(A.dataset.acted??0)<700||(A.dataset.acted=String(Date.now()),w())}},d=n.states[r.id]?.attributes.supported_features,u=w=>typeof d!="number"||(d&w)!==0,p=this.mediaIntent.get(r.id);p&&(p.playing===r.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(r.id);let h=this.mediaIntent.get(r.id)?.playing??r.playing,_=u(16384)||u(1),b=()=>{this.mediaIntent.set(r.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":u(16384)?"media_play":"media_play_pause")},m=this.mediaVolume.get(r.id);m&&(Math.abs(m.v-r.volume)<=2||Date.now()-m.at>3e4)&&this.mediaVolume.delete(r.id);let f=this.mediaVolume.get(r.id)?.v??r.volume,v=(w,x)=>{this.mediaVolume.set(r.id,{v:w,at:Date.now()}),this.requestUpdate(),(x||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:w/100}))};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${s?"true":"false"} @click=${a} @keydown=${Fn(a)}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${r.picture?g`<img class="fp3d-holo-cover" src=${r.picture} alt="" />`:g`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${r.title}</b>${r.artist?g`<span>${r.artist}</span>`:y}</div>
        </div>
        ${s&&!this.ro?g`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!u(16)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_previous_track"))} @click=${c.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${h?!u(1):!_} @pointerdown=${c.down} @pointerup=${c.up(b)} @click=${c.key(b)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!u(32)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_next_track"))} @click=${c.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(f)}
                  aria-label=${i("volume")}
                  @input=${w=>v(Number(w.target.value),!1)}
                  @change=${w=>v(Number(w.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${f} %</span>
              </div>`:y}
      </div>
    </div>`}rackHolos(e,t){let n=[];if(!this.rackCards)return n;let i=(t.settings.roof.hologram??Ge).size*.7;for(let r of t.floors)for(let s of r.furniture){let a=s.rack?.slots;if(!a?.length)continue;let l=Gi(e,a,s.rack?.card?.metrics);if(!l.length)continue;let c=r.elevation+ce(r,s)+s.h,d=Object.fromEntries(a.map(u=>[u.id,u.name||le(e,u.type)]));n.push({anchor:{p:[s.x,c+.15,s.z],n:[0,1,0],floorId:r.id,size:i,roof:!1,views:"all",room:Ra(r,s.x,s.z)},card:{kind:"rack",name:s.name||le(e,s.type),w:null,dayIds:[],battery:null,rack:{id:s.id,values:l,names:d}}})}return n}spokenRacks(e,t){let n=[];for(let i of t.floors){let r=be(i);for(let s of i.furniture){let a=s.rack?.slots;if(!a?.length)continue;let l=Gi(e,a,s.rack?.card?.metrics),c=Gi(e,a,[Hn,nn]).filter(u=>!l.some(p=>p.key===u.key)),d=r.find(u=>u.points.length>=3&&U([s.x,s.z],u.points));n.push({id:s.id,name:s.name||le(e,s.type),room:d?.name??"",names:Object.fromEntries(a.map(u=>[u.id,u.name||le(e,u.type)])),values:[...l,...c].map(u=>({key:u.key,kind:u.kind,slot:u.slot,label:this.rackValueLabel(u),text:this.rackValueText(u),value:u.value,of:u.of}))})}}return n}toggleRackCard(e){this.rackOpen.delete(e)||this.rackOpen.add(e),this.watchRackSpark(),this.requestUpdate()}rackSparkIds(){let e=this._holos.filter(t=>t.rack&&this.rackOpen.has(t.rack.id)).flatMap(t=>t.rack.values.flatMap(n=>n.ids));return[...new Set(e)]}watchRackSpark(){let e=this.rackSparkIds(),t=this.replay,n=t?`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`:e.join(",");if(!(n===this.rackSparkKey&&(t||Date.now()-this.rackSparkAt<3e5))){if(this.rackSparkKey=n,!e.length){this._rackRows=null;return}if(t){this._rackRows=t.stats(e,t.t-uh,t.t+1);return}!this.hass||globalThis.document?.hidden||(this.rackSparkAt=Date.now(),$p(this.hass,e,uh).then(i=>{this.rackSparkKey===n&&(this._rackRows=i)}))}}rackValueText(e){let t=this.hass;if(e.key===nn)return e.text;if(e.value===null)return e.key===Hn?"\u2013":de(t,t.states[e.key]);if(e.kind==="runtime"&&/^(s|min|h)$/.test(e.unit)){let i=e.value*(e.unit==="s"?.016666666666666666:e.unit==="h"?60:1);return i<120?`${Math.round(i)} min`:`${Z(t,i/60,1)} h`}let n=Number.isInteger(e.value)?0:Math.abs(e.value)<10?2:1;return`${Z(t,e.value,n)}${e.unit?` ${e.unit}`:""}`}rackValueLabel(e){let t=this.hass;return e.key===Hn?M(t,"rack_card_hottest"):e.key===nn?M(t,"rack_card_online"):e.kind==="other"?j(t,e.key):M(t,`rack_kind_${e.kind}`)}renderRackCard(e,t){let n=e.rack,i=this.rackOpen.has(n.id),r=n.values.find(u=>u.key===nn),s=!!r&&r.value===r.of,a=n.values.filter(u=>u!==r),l=()=>this.toggleRackCard(n.id),c=u=>{u.key!=="Enter"&&u.key!==" "||(u.preventDefault(),l())},d=u=>{let p=kp(this._rackRows,u);return p.length>1?dh(p,u.kind==="temperature"?"#ffb86b":u.kind==="battery"?"#4dff80":"#7fe8ff"):y};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-rack ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-expanded=${i?"true":"false"} aria-label=${e.name} @click=${l} @keydown=${c}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head"><span>▤ ${e.name}</span>${r?g`<span class="fp3d-holo-live" style="color:${s?ji.online:ji.warning}" title=${this.rackValueLabel(r)}>● ${r.text}</span>`:y}</div>
          ${i?g`<div class="fp3d-rack-card-grid">
                ${a.map(u=>g`<div class="fp3d-rack-card-row">
                    <span>${this.rackValueLabel(u)}${u.slot?g`<small>${n.names[u.slot]??""}</small>`:y}</span><b>${this.rackValueText(u)}</b>
                    ${d(u)}
                  </div>`)}
              </div>`:g`<div class="fp3d-holo-cells">${a.slice(0,4).map(u=>g`<div><small>${this.rackValueLabel(u)}</small><b>${this.rackValueText(u)}</b></div>`)}</div>`}
        </div>
      </div>`}renderDeviceCard(e,t){let n=this.hass,i=c=>M(n,c),r=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?ea(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-expanded=${r?"true":"false"} aria-label=${e.w===null?e.name:`${e.name}: ${se(n,e.w)}`} @click=${l} @keydown=${Fn(l)}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${se(n,e.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${r&&s?g`<div class="fp3d-holo-sub">${i("holo_today")} <b>${Z(n,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${se(n,s.peak)}</b></div>`:y}
        ${r&&a?Ze`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:y}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?Eu(t,new Date(this.now())):null}growHolo(e,t,n=!1){if(clearTimeout(this.holoBigTimer),this.holoBigTimer=void 0,e&&!this._holoBig){let i=this.renderRoot?.querySelector(`.fp3d-holo[data-holo="${t}"]`);i?.offsetWidth&&this.holoSizes.set(t,{w:i.offsetWidth,h:i.offsetHeight,at:performance.now()}),this.loadSolarMore()}e!==this._holoBig&&(this._holoBig=e),e&&n&&(this.holoBigTimer=setTimeout(()=>this.growHolo(!1,t),m_))}async loadSolarMore(){let e=this.hass;if(!(!e||this.replay||this.solarMoreLoading||this._solarMore&&Date.now()-this._solarMore.at<g_)){this.solarMoreLoading=!0;try{let t=ih(await e.callWS({type:"energy/get_prefs"}).catch(()=>null)),n=[...t.solar,...t.export],[i,r]=await Promise.all([t.forecast.length?e.callWS({type:"energy/solar_forecast"}).catch(()=>null):null,n.length?Js(e,n):null]);this._solarMore={at:Date.now(),prefs:t,forecast:i,change:r}}finally{this.solarMoreLoading=!1}}}solarMore(e){let t=this.replay?null:this._solarMore,n=s=>t?.change&&s.length?s.reduce((a,l)=>a+(t.change.get(l)??0),0):null,i=t?rh(t.forecast,t.prefs.forecast,new Date(this.now())):null,r=(t?n(t.prefs.solar):null)??e?.kwh??null;return{forecast:i,produced:r,rows:ah({forecast:i,produced:r,exported:t?n(t.prefs.export):null})}}renderHoloCard(e,t,n){let i=this.hass,r=W=>M(i,W),s=this.dayOf(e),a=e.kind==="main",l=a&&this._holoBig,c=l||!this.holoFolded.has(t),d=l&&n.solar!==null?this.solarMore(s):null,u=a&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,p=d?.forecast?.hours??null,h=Math.max(s?.peak??0,...p??[0]),_=s&&s.curve.length>1?ea(s.curve,h):null,b=p&&h>0?sh(p,h):null,m=new Date(this.now()),f=(m.getHours()+m.getMinutes()/60)/24*220,v=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},w=()=>{if(!a)return v();let W=this.holoPress;if(this.holoPress="",W!=="mouse")return this.growHolo(!this._holoBig,t,!0);v(),this._holoBig&&(this.holoHoverOff=!0,this.growHolo(!1,t))},x=W=>{a&&W.pointerType==="mouse"&&!this.holoHoverOff&&this.growHolo(!0,t)},A=W=>{!a||W.pointerType!=="mouse"||(this.holoHoverOff=!1,this.growHolo(!1,t))},E=Fn(w),D=a?n.solar??n.consumption??0:e.w??0,H=a?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div
        class="fp3d-holo ${c?"":"fp3d-holo-min"} ${l?"fp3d-holo-grown":""} ${this._low?"fp3d-holo-plain":""}"
        data-holo=${t}
        hidden
        role="button"
        tabindex="0"
        aria-label=${`${e.name}: ${se(i,D)}`}
        aria-expanded=${String(a?l:c)}
        @click=${w}
        @keydown=${E}
        @pointerdown=${W=>this.holoPress=W.pointerType}
        @pointerenter=${x}
        @pointerleave=${A}
      >
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${se(i,D)}</b><span>${r(a&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${c?g`${a&&this._plants.length>1?g`<div class="fp3d-holo-plants">${this._plants.map(W=>g`<span>${W.name}</span><b>${se(i,W.w)}</b>`)}</div>`:y}
              ${s?g`<div class="fp3d-holo-sub">${r("holo_today")} <b>${Z(i,s.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${se(i,s.peak)}</b></div>`:d?.produced!=null?g`<div class="fp3d-holo-sub">${r("holo_today")} <b>${Z(i,d.produced,1)} kWh</b></div>`:y}
              ${_||b?Ze`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    ${b?Ze`<path class="fp3d-holo-fc" d="${b}" fill="none" stroke="#aee9ff" stroke-width="1.5" stroke-dasharray="3 3"/>`:y}
                    ${_?Ze`<path d="${_.area}" fill="url(#fp3dHoloG${t})"/>
                          <path d="${_.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                          <circle cx="${_.endX}" cy="${_.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>`:y}
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${f}" y1="2" x2="${f}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:y}
              ${b?g`<div class="fp3d-holo-legend"><span class="fp3d-holo-legend-act">${r("holo_actual")}</span><span class="fp3d-holo-legend-fc">${r("holo_forecast")}</span></div>`:y}
              ${d?.rows.length?g`<div class="fp3d-holo-more">
                    ${d.rows.map(W=>W.key==="self_use"?g`<div class="fp3d-holo-more-row"><span>${r("holo_self_use")}</span><b>${Z(i,W.self,1)} kWh</b></div>
                            <div class="fp3d-holo-more-row"><span>${r("holo_exported")}</span><b>${Z(i,W.exported,1)} kWh</b></div>
                            <div class="fp3d-holo-split" title="${W.share} %"><div style="width:${W.share}%"></div></div>`:g`<div class="fp3d-holo-more-row"><span>${r(W.key==="forecast_rest"?"holo_fc_rest":"holo_fc_tomorrow")}</span><b>${Z(i,W.kwh,1)} kWh</b></div>`)}
                  </div>`:y}
              <div class="fp3d-holo-grid">
                ${H?g`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${r("holo_battery")}<br /><b>${H.soc!==null?`${Math.round(H.soc)} %`:se(i,Math.abs(H.w??0))}</b>
                      ${H.w!==null&&Math.abs(H.w)>=5?g`<span>${H.w<0?"\u25B2":"\u25BC"} ${se(i,Math.abs(H.w))}</span>`:y}
                    </div>`:y}
                ${a&&n.grid!==null?g`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${r("holo_grid")}<br /><b>${se(i,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":r(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:y}
                ${a&&n.consumption!==null?g`<div class="fp3d-holo-cell fp3d-holo-house">${r("holo_house")}<br /><b>${se(i,n.consumption)}</b></div>`:y}
                ${a&&this._wallboxW!==null?g`<div class="fp3d-holo-cell fp3d-holo-wb">${r("holo_wallbox")}<br /><b>${se(i,this._wallboxW)}</b></div>`:y}
              </div>
              ${a&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?g`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?g`<span>🔥 ${r("holo_gas")} <b>${Z(i,this._meters.gas,this._meters.gas<10?2:1)} ${ch(i,this.building?.energy.gas)}</b></span>`:y}
                    ${this._meters.water!==null?g`<span>💧 ${r("holo_water")} <b>${f_(i,this._meters.water,ch(i,this.building?.energy.water))}</b></span>`:y}
                    <span>${r("holo_today_short")}</span>
                  </div>`:y}
              ${u!==null?g`<div class="fp3d-holo-bar"><div style="width:${u}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${r("holo_autarky")}</span><b>${u} %</b></div>`:y}`:y}
      </div>
    </div>`}setAlerts(e){let t=e.map(s=>`${s.kind}:${s.entity}`),n=this.ro?[]:e.filter((s,a)=>!this.seenAlerts.has(t[a]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=e);let i=e.some(s=>!s.quiet&&s.kind!=="water");if(i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let r=this.directorSettings();if(r?.alerts){let s=n[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),r.hold??30)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(n[0])}tidySnoozes(e,t,n){if(this.ro||!this.mayEdit)return;let i=pu(e.settings.alert_snoozed,t).filter(s=>n||Hi.has(s.kind));if(!i.length)return;let r=new Set(i.map(Gs));this.setPlanSettings({alert_snoozed:(e.settings.alert_snoozed??[]).filter(s=>!r.has(Gs(s)))})}dismiss(e,t){let n=this.building;this._dismissing=null,!(!n||!this.mayEdit)&&(this.setPlanSettings(hu(n.settings,e,t,Date.now())),this.setAlerts(this._alerts.filter(i=>Ee(i)!==Ee(e))),this.applyTint())}directorSettings(){let e=this.building?.settings.director;return this.director&&!this.ro&&Yp(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new Io,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let i=Date.now(),r=e.hold??30,s=`${JSON.stringify(e)}|${n.floors.map(c=>c.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==s){let c=[...new Set(n.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],d=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:s,bells:(e.doorbell?Qp(t,e.doorbell_entity):[]).map(u=>({id:u,camera:Xp(t,u,c,e.doorbell_camera)})),motion:d==="off"?[]:c.filter(u=>u.startsWith("camera.")).flatMap(u=>st(t,u).filter(p=>d==="all"||ys(t,p)==="person").map(p=>({sensor:p,cam:u})))}}let a=[];for(let c of this.directorSrc.bells)this.directing.edge(c.id,t.states[c.id],(d,u)=>Ia(d,u,i))&&a.push({kind:"doorbell",key:`bell:${c.id}`,entity:c.id,camera:c.camera});for(let c of e.triggers??[])c.entity&&this.directing.edge(`trigger:${c.entity}`,t.states[c.entity],(d,u)=>Jp(d,u,i))&&a.push({kind:"trigger",key:`trigger:${c.entity}`,entity:c.entity,camera:c.camera});for(let c of this.directorSrc.motion)this.directing.edge(c.sensor,t.states[c.sensor],(d,u)=>d?.state==="off"&&u?.state==="on")&&a.push({kind:"motion",key:`cam:${c.cam}`,entity:c.sensor,camera:c.cam});if(e.appliances){for(let[c,d]of this.appliances)this.directing.stopped(`app:${c}`,d.running,i)&&a.push({kind:"appliance",key:`app:${c}`,entity:c});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((c,d)=>l.indexOf(c.kind)-l.indexOf(d.kind));for(let c of a)if(this.directing.offer(c,i,r)){this.directorShow(()=>this.directorGo(c));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(i=>i.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(t.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,i=this.hass,r=n?.floors.find(d=>d.id===e),s=r?be(r).find(d=>d.id===t):void 0;if(!n||!i||!r||!s||this.ro)return;let a=new Set(ge(i,s.area_id).filter(d=>B(d)==="light"));for(let d of r.placements)B(d.entity_id)==="light"&&U([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of r.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&Vr(d.type)&&U([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>i.states[d]?.state==="on");sn(i,"homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(sn(this.hass,e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyMotion(){let e=this.viewer,t=this.building,n=this.hass;if(clearTimeout(this.motionTimer),this.motionTimer=void 0,!e||!t||!n)return;let i=this.now(),r=nd(n,t,i);e.setRoomGlow(r.rooms),r.next!==null&&!this.replay&&(this.motionTimer=setTimeout(()=>this.applyMotion(),Math.max(50,r.next-i+20)))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=Nu(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([c,d])=>[c,Wu(a,d)]))}let r=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of be(a)){let c=ht(n,a,l,"temperature"),d=ht(n,a,l,"humidity"),u=ht(n,a,l,"co2"),p=[c!==null?`${Z(n,nt(n,c),1)} ${He(n)}`:null,d!==null?`${Z(n,d,0)} %`:null,u!==null?`${Z(n,u,0)} ppm`:null].filter(h=>!!h);p.length&&r.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(r),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let c=l.kind==="water"?1:a,d=cu(l).map(u=>u*c);if(l.roomId)i.set(l.roomId,d);else for(let u of t.floors)if(!l.floorId||u.id===l.floorId)for(let p of u.rooms)i.set(p.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,t,n,i){let r=[],s=[],a=new Map,l=new Map,c=new Set(n),d=[];this.binHolos=[],this.binSpots=new Map,this.binCues=[],this.printerCams.clear();let u=new Map(this.scene.filter(m=>m.kind==="glow").map(m=>[m.furnitureId,m]));for(let m of t.floors)for(let f of m.furniture){let v=this.furnitureLinks.get(f.id),w=this.stateFaces(e,f);if(w.length&&a.set(f.id,{color:w[0].color,level:w[0].level,faces:w}),Vr(f.type)){let N=this.lampMarker(e,m,f,v?.entity??null);r.push(N);let ee=f.type==="lamp_fan"&&f.fan&&f.fan!=="none"?f.fan:null;if(ee&&!n.has(ee)){n.add(ee);let me=e.states[ee],Qe=f.rotation*Math.PI/180,pt=Math.min(.45,f.w*.3);r.push({id:ee,floorId:m.id,roomId:N.roomId,x:f.x+Math.cos(Qe)*pt,z:f.z+Math.sin(Qe)*pt,y:N.y,icon:f.icon?rt(f.icon):Nt("fan"),name:j(e,ee),text:me&&rs(me)>0&&typeof me.attributes.percentage=="number"?`${Math.round(me.attributes.percentage)} %`:me?de(e,me):"",active:me?ze(me):!1,unavailable:me?K(me):!1,glow:null,furnitureId:f.id,show:f.marker??"always",fromFurniture:!0})}continue}if(sc.has(f.type)){let N=this.techItem(e,m,f,a,n);N&&(r.push(N),l.set(f.id,N.id));continue}if(rc.has(f.type)){let N=this.gangItem(e,m,f,s,a,i);N&&(r.push(N),l.set(f.id,N.id));continue}let x=u.get(f.id);x&&a.set(f.id,{color:x.color,level:x.level});let A=(f.type==="plant"||Os(f.type))&&!!f.moisture&&f.moisture!=="none";if(f.type==="waste_bin"||f.type==="mailbox"||A){let N=this.householdState(e,m,f);N?.screen&&a.set(f.id,N.screen),N?.marker&&r.push(N.marker);let ee=f.type==="waste_bin"?f.bin_source:f.type==="mailbox"?f.entity:f.moisture;if(typeof ee=="string"&&ee!=="none"&&l.set(f.id,`hh:${ee}#${f.id}`),N?.item&&d.push(N.item),!A)continue}let E=iu(f,e);E.length&&!a.has(f.id)&&a.set(f.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let N of E){let ee=f.name||le(e,f.type);d.push({icon:"wrench-outline",text:N===f.service?M(e,"hh_service",{name:ee}):M(e,"hh_service2",{name:ee,what:j(e,N)}),entity:N})}(f.type==="fridge"||f.type==="fridge_smart")&&Ri(f,e)&&(a.set(f.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),d.push({icon:"fridge-alert-outline",text:M(e,"hh_fridge_open",{name:f.name||le(e,f.type)}),entity:kt(f)[0]??null}));let H=f.type==="parking"&&!!f.car?io(e,f):null,W=f.type==="washer"||f.type==="dryer"||f.type==="dishwasher",F=oe(f.type)==="home_battery"?f.soc:oe(f.type)==="wallbox"?f.status:f.type==="parking"&&H?f.car?.device??H.entities.soc:W?f.remaining??null:null,$=F&&F!=="none"?F:null,I=f.extra&&f.extra!=="none"&&e.states[f.extra]?f.extra:null,S=rd(e,t,f),P=S&&S.sensor!==I&&S.sensor!==v?.entity?`${Z(e,nt(e,S.celsius),0)} ${He(e)}`:"",R=[I?de(e,e.states[I]):"",P].filter(Boolean).join(" \xB7 "),q=N=>R?N?`${N} \xB7 ${R}`:R:N,C=v??($||I||S?{entity:null,power:null}:void 0);if(!C)continue;let O=oe(f.type)==="home_battery"?$??C.entity??C.power:C.entity??C.power??$??I;l.set(f.id,O);let z=C.entity?e.states[C.entity]:void 0,ae=oe(f.type)==="meter"?t.energy.grid_invert&&!f.export:oe(f.type)==="home_battery"?t.energy.battery_invert&&!f.charge:!1,J=C.power?ue(e.states[C.power],ae):null,Se=oe(f.type)==="home_battery"&&f.charge&&f.charge!=="none"?f.charge:oe(f.type)==="meter"&&f.export&&f.export!=="none"?f.export:null,ne=Se?ue(e.states[Se]):null;if(ne!==null&&(J=Math.max(0,J??0)-Math.max(0,ne)),C.power&&J!==null&&yu(f.type)&&!i.has(C.power)){i.add(C.power);let N=f.circuit&&f.circuit!=="none"?f.circuit:void 0,ee=f.energy??void 0;s.push({id:O,powerEntity:C.power,floorId:m.id,x:f.x,z:f.z,power:Math.max(0,J),wallbox:oe(f.type)==="wallbox"||void 0,circuit:N,...ee?{energy:ee}:{}})}let X=typeof f.run_w=="number"&&f.run_w>0?f.run_w:10,xe=typeof f.run_w=="number"&&f.run_w>0&&J!==null&&J<=f.run_w,Ae=(J??0)>X||z?.state==="on"||z?.state==="running"||no(z)&&ze(z);W&&this.appliances.set(f.id,{floorId:m.id,x:f.x,z:f.z,entity:C.entity??C.power??f.id,running:Ae});let pe=null;if(W){let N=f.remaining&&f.remaining!=="none"?e.states[f.remaining]:void 0,ee=Vs(N),me=Ae||!C.power&&!C.entity&&(ee??0)>0,Qe=kt(f),pt=cr=>Qe.some(Fo=>{let On=e.states[Fo];return!!On?.last_changed&&Date.parse(On.last_changed)>cr}),Ho=this.finished.update(f.id,me,pt),At=f.name||(C.entity?j(e,C.entity):le(e,f.type));me?(Ae||a.set(f.id,fh(f.type)),ee!==null&&!Us(z,C.power?J:null,X)&&(pe=M(e,"hh_left",{t:ou(ee)}),d.push({icon:"timer-outline",text:`${At}: ${pe}`,entity:f.remaining??C.entity}))):(Bs(z)||Bs(N)||Ho)&&(pe=M(e,"hh_done"),a.set(f.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),d.push({icon:"check-circle-outline",text:M(e,"hh_finished",{name:At}),entity:C.entity??C.power}))}if(H&&En(e,f)){let N=[];if(H.soc!==null){let ee=H.soc>=50?[.3,1,.5]:H.soc>=20?[1,.8,.25]:[1,.3,.25];N.push({part:"band",color:ee,level:H.charging?1:.6})}if(H.locked===!1&&N.push({part:"lights",color:[1,.42,.02],level:1}),H.climateOn){let ee=H.entities.climate?e.states[H.entities.climate]:void 0,me=!!ee&&(ee.attributes.hvac_action==="cooling"||ee.state==="cool");N.push({part:"cabin",color:me?[.45,.8,1]:[1,.55,.22],level:.35})}N.length&&a.set(`${f.id}:vehicle`,{color:N[0].color,level:N[0].level,faces:N})}if(S?.kind==="radiator"){let N=z&&B(z.entity_id)==="climate"?z.attributes:null,ee=Jr(e,f.heat_sensor)??(!!N&&ze(z)&&N.hvac_action!=="cooling");a.set(f.id,{color:S.color,level:ee?.9:.55,shade:!0})}else if(S?.kind==="tank"){let N=Vt(t),ee=_i(S.celsius-.3*(N.tank_hot-N.tank_cold),N.tank_cold,N.tank_hot);a.set(f.id,{color:ee,level:.8,shade:!0,faces:[{part:"strata",color:ee,top:S.color,level:.8}]})}else if(mn(f.type)&&(z&&B(z.entity_id)==="climate"||f.heat_sensor)){let N=z&&B(z.entity_id)==="climate"?z.attributes:null;if(Jr(e,f.heat_sensor)??(!!N&&ze(z)&&N.hvac_action!=="cooling")){let me=N&&typeof N.temperature=="number"&&typeof N.current_temperature=="number"?N.temperature-N.current_temperature:1;a.set(f.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,me))})}else u.has(f.id)&&a.delete(f.id)}else if(f.type==="ac_unit"&&z&&B(z.entity_id)==="climate"){let N=Sc(z);N&&a.set(f.id,N)}else if((f.type==="washer"||f.type==="dryer"||f.type==="dishwasher")&&Ae)a.set(f.id,fh(f.type));else if(f.type==="stove"||Fr(f.type)){let N=$c(z,Ae);N>0&&a.set(f.id,{color:[1,.05,.01],level:N,faces:[{part:"burners",color:[1,.05,.01],level:N}]})}let Ve=Pe(f.type),ln=!!Ve&&!Ve.light&&Ve.parts.some(N=>N.glow);if(z&&ln&&B(z.entity_id)==="media"&&z.state==="playing"&&!ai(f.type)){let N=typeof z.attributes.volume_level=="number"?z.attributes.volume_level:.5;a.set(f.id,{color:ss(z)??[.22,.88,1],level:.5+.5*N,ring:!0,plain:!0})}if(z&&ai(f.type)&&!Fr(f.type)&&!(Qo(f.type)&&B(z.entity_id)==="cover")){let N=B(z.entity_id)==="light"?ot(z):null,ee=B(z.entity_id)==="media"&&["playing","on","paused","idle"].includes(z.state),me=B(z.entity_id)==="media"?ss(z):N?N.color:ze(z)||ee?[.22,.88,1]:null,Qe=B(z.entity_id)==="media"?z.attributes.entity_picture??null:null;me&&a.set(f.id,{color:me,level:z.state==="playing"?1:.6,picture:Qe,ring:Wl(f.type)||ln&&z.state==="playing"})}let dt=Zi(f.type)?Dp(e,C.entity):null;if(dt){let N=Lp(dt);N.length&&a.set(f.id,{color:N[0].color,level:N[0].level,faces:N}),dt.camera&&this.printerCams.set(O,dt.camera)}let Ro=dt?.progress!=null?` \xB7 ${Math.round(dt.progress*100)} %`:"";if(c.has(O))continue;n.add(O);let lr=C.entity?B(C.entity):null,zn=m.rooms.find(N=>N.points.length>=3&&U([f.x,f.z],N.points)),ut=z&&Jo(f.type)&&z.entity_id.startsWith("water_heater.")?$_(e,z):null;r.push({id:O,floorId:m.id,roomId:zn?.id??null,x:f.x,z:f.z,y:M_(f)+ce(m,f),icon:f.icon?rt(f.icon):ut?rt("water-boiler"):Nt(lr??"switch"),name:f.name||(C.entity?j(e,C.entity):le(e,f.type)),ownName:f.name||void 0,showName:!!f.show_name,text:q(pe??(H?this.carText(e,H,!!z&&!Ni.has(z.state.toLowerCase())):oe(f.type)==="home_battery"?this.batteryText(e,$,J):oe(f.type)==="wallbox"?this.wallboxText(e,$,J):oe(f.type)==="meter"?this.meterText(e,J):ut?ut.text:z?de(e,z)+Ro:xe?M(e,"pin_standby"):J!==null?se(e,Math.max(0,J)):"")),active:pe?!0:H?H.charging:ut?ut.on:z?ze(z):(J??0)>(typeof f.run_w=="number"&&f.run_w>0?f.run_w:5),unavailable:z?K(z):!1,glow:null,furnitureId:f.id,energyDevice:oe(f.type)==="inverter"||oe(f.type)==="home_battery"||oe(f.type)==="wallbox"||oe(f.type)==="meter"||!!H||!!I||!!S,...xe?{standby:xe}:{},show:f.marker??(H||pe?"always":void 0),fromFurniture:!0})}let p=t.settings.household;if(p?.bin_next_only||typeof p?.bin_days=="number"){let m=Xd(this.binHolos.filter(f=>!f.icon),{nextOnly:p.bin_next_only,ahead:p.bin_days});this.binHolos=this.binHolos.filter(f=>f.icon||m.has(f.id))}let h=t.settings.household?.notes,_=h&&h!=="none"?e.states[h]:void 0;if(_&&!K(_)&&_.state.trim()){let m=_.state.split(/\s*(?:\||\n|;)\s*/).map(f=>f.trim()).filter(Boolean).slice(0,8);d.unshift(...m.map(f=>({icon:"pin-outline",text:f,entity:h})))}this._household=d.filter((m,f)=>d.findIndex(v=>v.text===m.text)===f),this.cameraScreens=0;let b=ns(e,t.floors);for(let m of t.floors)for(let f of m.furniture){if(!f.pictures?.length||!ai(f.type)||f.type==="fridge_smart"&&b.get(f.id)?.right)continue;let v=f.pictures.find(A=>Pc(e,A));if(!v)continue;let w=this.pictureUrl(v.image),x=f.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];w&&a.set(f.id,{color:x,level:1,picture:w,plain:!0})}for(let m of u.values())m.top?a.set(m.furnitureId,{color:m.color,level:m.level,faces:[{part:"strata",color:m.color,top:m.top,level:m.level}]}):m.band&&a.set(m.furnitureId,{color:m.color,level:m.level,faces:[{part:"band",color:m.color,level:m.level}]});return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:r,consumers:s,screens:a,targets:l}}watchHousehold(e,t){let i=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox").length>0&&!this.replay,r=i?jd(t.floors):[],s=r.join(",");if(!i){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let a=async()=>{r.length&&(this.pickups=await Ls(this.hass??e,r)),this.syncDevices(!0)};(s!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=s,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void a(),6e5),r.length&&Ls(e,r).then(l=>{this.pickups=l,this.syncDevices(!0)}))}gangItem(e,t,n,i,r,s){let a=Xn(n),l=n.type==="wall_socket",c=[],d=0,u=0,p=null,h=!1;if(a.forEach((x,A)=>{let E=x.entity&&x.entity!=="none"?x.entity:null,D=x.power&&x.power!=="none"?x.power:null;if(!E&&!D)return;u++;let H=E?e.states[E]:void 0,W=D?ue(e.states[D]):null;if(D&&W!==null&&(p=(p??0)+Math.max(0,W),s.has(D)||(s.add(D),i.push({id:E??D,powerEntity:D,floorId:t.id,x:n.x,z:n.z,power:Math.max(0,W),circuit:n.circuit&&n.circuit!=="none"?n.circuit:void 0}))),H&&!K(H)&&(h=!0),!(H?ze(H):(W??0)>5))return;d++;let $=H&&B(H.entity_id)==="light"?ot(H):null;if(!l){c.push({part:"gang",index:A,of:a.length,color:$?$.color:[.22,.88,1],level:.5,accent:!$});return}let I=$?$.color:[.35,1,.55];c.push({part:"gang",index:A,of:a.length,color:I,level:W!==null?Math.min(1,.55+W/1500):.8})}),c.length&&r.set(n.id,{color:c[0].color,level:c[0].level,faces:c}),!u)return null;let _=ti(n),b=_[0]??null,m=b?e.states[b]:void 0,f=t.rooms.find(x=>x.points.length>=3&&U([n.x,n.z],x.points)),v=p,w=fd(this.floorWalls(t),n,t.height,ce(t,n));return{id:`gangs:${n.id}`,floorId:t.id,roomId:f?.id??null,x:w.x,z:w.z,y:n.h+.2+w.y,icon:rt(n.icon||(l?"power-socket-de":"light-switch")),name:n.name||(_.length===1&&b?j(e,b):le(e,n.type)),ownName:n.name||void 0,showName:!!n.show_name,text:u>1?`${d}/${u}${v!==null?` \xB7 ${se(e,v)}`:""}`:v!==null?se(e,v):m?de(e,m):"",active:d>0,unavailable:!!b&&!h,glow:null,power:v??void 0,furnitureId:n.id,show:n.marker??void 0,fromFurniture:!0}}techItem(e,t,n,i,r){let s=E=>typeof E=="string"&&E!=="none"?E:null,a=s(n.entity),l=a?e.states[a]:void 0,c=t.rooms.find(E=>E.points.length>=3&&U([n.x,n.z],E.points)),d={floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,ownName:n.name||void 0,showName:!!n.show_name,glow:null,furnitureId:n.id,fromFurniture:!0};if(n.type==="wifi_ap"){let E=s(n.clients),D=E?e.states[E]:void 0,H=D&&Number.isFinite(Number(D.state))?Math.round(Number(D.state)):null,W=a?is(l):D?is(D):null;if(W!==null){let $=W?[.25,.6,1]:[1,.25,.2];i.set(n.id,{color:$,level:.85,faces:[{part:"apring",color:$,level:.85}]})}let F=a??E;return!F||r.has(F)?null:(r.add(F),{...d,id:F,y:ce(t,n)-(n.variant==="wall"?-n.h-.2:.3),icon:rt(n.icon||"access-point"),name:n.name||j(e,F),text:W===!1?M(e,"ap_offline"):H!==null?M(e,"ap_clients",{n:H}):l?de(e,l):"",active:W===!0,unavailable:W===!1,show:n.marker??(W===!1?"always":void 0),energyDevice:H!==null})}let u=l?B(l.entity_id):null,p=s(n.power),h=p?ue(e.states[p]):null,_=typeof n.run_w=="number"&&n.run_w>0?n.run_w:30,b=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(h??0)>_;(b||l&&!["off","unavailable","unknown"].includes(l.state))&&i.set(n.id,{color:[1,.45,.15],level:b?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:b?.9:.3}]});let f=s(n.water_temp),v=f?e.states[f]:void 0,w=v&&Number.isFinite(Number(v.state))?Number(v.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,x=v?.attributes.unit_of_measurement??"\xB0C",A=a??f??p;return!A||r.has(A)?null:(r.add(A),{...d,id:A,y:ce(t,n)+n.h+.25,icon:rt(n.icon||"water-boiler"),name:n.name||(a?j(e,a):le(e,n.type)),text:w!==null?`${Z(e,Math.round(w))} ${x}${b?" \xB7 \u{1F525}":""}`:l?de(e,l):"",active:b,unavailable:l?K(l):!1,power:h??void 0,show:n.marker??void 0,energyDevice:w!==null})}floorWalls(e){let t=this.wallCache.get(e);if(!t){let n=this.building?.settings;t=bt(e.rooms,{exterior:n?.wall_exterior??.24,interior:n?.wall_interior??.12},e.walls??[]).walls,this.wallCache.set(e,t)}return t}wallCache=new WeakMap;renderGangMenu(){let e=this._gangMenu,t=this.hass,n=e&&this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===e.furnitureId);if(!e||!t||!n)return y;let i=n.type==="wall_socket";return g`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${e.x}px;top:${e.y}px">
        <span>${n.name||le(t,n.type)}</span>
        ${Xn(n).map((s,a)=>{let l=s.entity&&s.entity!=="none"?s.entity:null,c=l?t.states[l]:void 0,d=s.power&&s.power!=="none"?ue(t.states[s.power]):null,u=`${i?"\u{1F50C}":"\u25AD"} ${a+1} \xB7 ${l?j(t,l):"\u2013"}`;return g`<button class="fp3d-chip ${c&&ze(c)?"fp3d-gang-on":""}" ?disabled=${!l||(c?K(c):!0)}
            @click=${async()=>{!l||!await this.confirmFor(l)||wi(t,l)}}>${u}${c?g` <small>${de(t,c)}${d!==null?` \xB7 ${se(t,Math.max(0,d))}`:""}</small>`:y}</button>`})}
      </div>`}householdState(e,t,n){let i=l=>{let c=parseInt(l.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]};if(n.type==="waste_bin"){let l=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null,c=l?Ws(n,e,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until}):null,d=this.furnish?null:Yd(n,!!c?.glow,Ii(n,e));d?.kerb&&this.binSpots.set(n.id,d.at);let[u,p]=d?.at??[n.x,n.z];if(!c||!l)return null;let h=c.days===0?M(e,"bin_today"):c.days===1?M(e,"bin_tomorrow"):M(e,"bin_in_days",{n:c.days}),_=i(qd(n)[1]),b=Math.max(..._),f=b-Math.min(..._)<.12?[.92,.95,1]:_.map(E=>Math.min(1,E/Math.max(.001,b)*1.05)),v=n.name||M(e,`bin_kind_${n.bin_kind??"rest"}`),w=Ii(n,e),x=`#${f.map(E=>Math.round(E*255).toString(16).padStart(2,"0")).join("")}`,A=w?M(e,"bin_out_done"):h;return this.binHolos.push({id:n.id,floorId:t.id,x:u,z:p,y:ce(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:v,color:x,when:A,soon:c.days<=1&&!w,days:c.days,out:w}),d?.cue&&this.binCues.push({floorId:t.id,from:[n.x,n.z],to:d.cue,skip:Math.max(n.w,n.d)/2+.1,color:x}),{item:c.days<=1?{icon:w?"check-circle-outline":"trash-can-outline",text:`${v}: ${A}`,entity:l,hot:c.glow&&!w}:void 0}}if(n.type!=="mailbox"){let l=Ns(n,e),c=[1,.55,.12],d=n.name||le(e,n.type);return l?(this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:ce(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:d,color:"#ff8c1f",when:M(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:c,level:.9,faces:[{part:"band",color:c,level:.9}]},item:{icon:"watering-can-outline",text:M(e,"hh_plant",{name:d}),entity:n.moisture??null,hot:!0}}):null}let r=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!r)return null;let s=eu(n,e),a=[1,.62,.15];return s&&this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:ce(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||le(e,n.type),color:"#ffb547",when:M(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:n.name?`${n.name}: ${M(e,"mailbox_post")}`:M(e,"mailbox_post"),entity:r,hot:!0}:void 0}}robotPaths(e,t){let n=this.replay;if(!n)return[];let i=[];for(let r of t.floors){let s=r.rooms.filter(a=>a.points.length>=3);for(let a of r.furniture){if(!hn(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let c=n.robotRooms(l,ro(e,l,a.room_sensor)),d=[];for(let u of c){let p=as(e,s,u),h=p?Fe(p.points):null,_=d[d.length-1];h&&(!_||_[0]!==h[0]||_[1]!==h[1])&&d.push([h[0],h[1]])}d.length&&i.push({floorId:r.id,points:d})}}return i}trailNow(e,t){let n=this.now(),i=Mo(e,t),r=this.replay?this.replay.rows(i.map(a=>a.entity),n-So,n):this.trailRows,s=i.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return Gu(i,Ku(r,s,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,!this.trail||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let i=Mo(t,n).map(r=>r.entity);if(i.length){try{let r=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-So).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if(Kc()){let i=new Set(t.floors.flatMap(r=>r.placements.map(s=>s.entity_id)).filter(r=>B(r)==="camera"));for(let r of i){let s=e.states[r],a=s?.attributes.entity_picture;!a||K(s)||n.push({id:r,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||K(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),Ml(this.hass,e,this.home).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(n.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||ce(e,i)>.12)return!1;let r=Pe(i.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:U([i.x,i.z],t)||zt(i).some(s=>U(s,t))}).map(i=>zt(i))}robotInfos(e,t){let n=[];for(let i of t.floors)for(let r of i.furniture){if(!hn(r.type))continue;let s=this.furnitureLinks.get(r.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=Zr(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=r.rotation*Math.PI/180,d=Le(r.type),u=r.d*(d?Dl(Pe(r.type)):.14),p=[r.x-Math.sin(c)*u,r.z+Math.cos(c)*u],h=i.rooms.filter(f=>f.points.length>=3),b=(l==="cleaning"?Fc(e,h,s,ro(e,s,r.room_sensor)):null)??h.find(f=>U(p,f.points)),m=l==="cleaning"&&b?this.robotObstacles(i,b.points):[];n.push({id:r.id,floorId:i.id,rest:p,restHeading:-c,mode:l,room:b?.points??null,roomId:b?.id??null,obstacles:m,...d?{model:{type:r.type,w:r.w,d:r.d,h:r.h}}:{}})}return n}batteryText(e,t,n){let i=t?Number(e.states[t]?.state):Number.NaN,r=[];return Number.isFinite(i)&&r.push(`${Z(e,i,0)} %`),n!==null&&Math.abs(n)>=10&&r.push(`${n<0?"\u25B2":"\u25BC"} ${se(e,Math.abs(n))}`),r.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?se(e,0):`${M(e,t<0?"energy_grid_export":"energy_grid_import")} ${se(e,Math.abs(t))}`}wallboxText(e,t,n){let i=t?e.states[t]:void 0,r=String(i?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(r),a=i?.entity_id.startsWith("binary_sensor.")?r==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(r),l=s?M(e,"wallbox_charging"):a?M(e,"wallbox_plugged"):i&&!K(i)&&!i.entity_id.startsWith("binary_sensor.")?de(e,i):"",c=n!==null&&n>50?se(e,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],i=t.state_entity&&t.state_entity!=="none"&&t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[r,s]of i){if(!r||r==="none")continue;let a=e.states[r];if(!a||K(a)||!(ze(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=B(r)==="light"?ot(a):null;n.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return n}carText(e,t,n){let i=s=>M(e,s);if(n||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${i("car_away")}${s}`}let r=[];return t.soc!==null&&r.push(`${Z(e,t.soc,0)} %`),t.range!==null&&r.push(`${Z(e,t.range,0)} ${t.rangeUnit}`),t.charging?r.push(t.chargingW!==null?`\u26A1 ${se(e,t.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):t.plugged&&r.push("\u{1F50C}"),t.locked!==null&&r.push(t.locked?"\u{1F512}":"\u{1F513}"),r.join(" \xB7 ")}ceilingAt(e,t,n){let r=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&U([t,n],l.points))?.ceiling_height||e.height,s=this.building;if(!s||!$s(s).some(l=>bd(l,e.elevation+r)&&Ss(l,e.elevation)))return r;let a=wd(s,t,n,e.elevation);return a===null?r:Math.max(.5,Math.min(r,a-e.elevation))}lampMarker(e,t,n,i){let r=i?e.states[i]:void 0,s=Pe(n.type),a=cc[n.type]??s?.light??"floor",l=t.rooms.some(v=>v.points.length>=3&&U([n.x,n.z],v.points)),c=a==="strip"&&!l?et(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?ce(t,n):a==="table"?Qn(t,n.x,n.z,n.h):a==="bollard"||a==="garden"?et(t,n.x,n.z):0,d=t.rooms.find(v=>v.points.length>=3&&U([n.x,n.z],v.points)),u=this.ceilingAt(t,n.x,n.z),p=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(a))&&n.mount_y==null,h=p?t.height-u:0,_=s&&p?Math.max(0,c-h):c,b=Zo.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+ei(n.type,n.h)):Math.abs(h)>.01?u:void 0,m=b??t.height,f=s?s.mount==="ceiling"?Math.max(.5,_-.15):_+n.h+.2:{ceiling:m-.3,downlight:m-.25,spot:m-.35,panel:m-.25,pendant:Math.max(.6,m-n.h-.25),fan:Math.max(.6,m-n.h-.25),floor:_+n.h+.25,uplight:_+n.h+.25,table:_+n.h+.2,wall:_+n.h+.2,strip:n.upright?_+n.w+.15:Math.max(.3,_-.2),bollard:_+n.h+.25,garden:_+n.h+.25}[a];return{id:i??`lamp:${n.id}`,floorId:t.id,roomId:d?.id??null,x:n.x,z:n.z,y:f,icon:Nt("light"),name:n.name||(i?j(e,i):le(e,n.type)),text:r?de(e,r):"",active:r?ze(r):!1,unavailable:r?K(r):!1,glow:r?ks(Mc(ot(r,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,colors:n.colors,materials:n.materials,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,fanSpeed:a==="fan"?rs(n.fan&&n.fan!=="none"?e.states[n.fan]:void 0):void 0,size:[n.w,n.d,n.h],base:_,top:b,pickable:!!i,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?_:_+n.h*.85:void 0,effect:!!r&&r.state==="on"&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(r.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=this.building?.floors.find(i=>i.id===e.floorId),n=t?be(t).find(i=>i.id===this.roomId):void 0;return!!n&&U([e.x,e.z],n.points)}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=B(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){if(n.lock&&!n.cover||es(n.cover)){e.set(t,`opening:${t}`);continue}let i=n.cover??n.contact??n.tilt;i&&e.set(t,i)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(r=>r.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now()),i=()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}if(this.viewer.busy()){this.thumbTimer=setTimeout(i,300);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}};this.thumbTimer=setTimeout(i,n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return y;let e=new Map(this.building.floors.map(r=>[r.id,r.name])),t=[...this._thumbs].sort((r,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===r.floorId)?.elevation??0)),n=this._thumbsCompact,i=()=>{this._thumbsCompact=!n,this.thumbsSaved=this._thumbsCompact?"1":"0";try{localStorage.setItem("home3d.thumbs_compact",this.thumbsSaved)}catch{}};return g`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${M(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${M(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${M(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${i}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${M(this.hass,"all_floors")}</span>
      </button>
      ${t.map(r=>g`<button class="fp3d-thumb" aria-pressed=${this.floorId===r.floorId} @click=${()=>this.fire("floor-tap",{floorId:r.floorId})}>
          ${n?y:g`<img src=${r.url} alt="" />`}
          <span>${e.get(r.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){let i=this.ro?null:Ti(this.actionOwners.get(e),"hold");if(i)return this.runOwnAction(i,this.actionOwners.get(e),t,n);if(e.startsWith("item:"))return;if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!0);if(e.startsWith("gangs:")){let s=this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e.slice(6)),a=s?ti(s):[];a.length===1?this.onDeviceHold(a[0],t,n):this.onDeviceTap(e,t,n);return}if(this.ro){this.onDeviceTap(e,t,n);return}if(this.hass&&this.building)for(let s of this.building.floors)for(let a of s.furniture){if(a.type!=="parking"||!a.car)continue;let l=io(this.hass,a);if([a.entity,a.car.device,...Object.values(l.entities)].filter(d=>!!d&&d!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:l};return}}let r=Bu(e);r?ke(this,r):this.onDeviceTap(e,t,n)}onDeviceSwipe(e,t,n,i,r){let s=this.hass?.states[e];if(this.ro)return!1;if(t==="start"){if(!s||K(s)||this.confirmSet.has(e))return!1;let l=B(e);if(l==="light"&&la(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:i,y:r},!0}if(l==="cover"&&ca(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:i,y:r},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?sn(this.hass,"light","turn_off",{entity_id:e.entity}):sn(this.hass,"light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):sn(this.hass,"cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderBinInfo(){let e=this._binInfo,t=this.hass,n=e&&this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId);if(!e||!t||!n)return y;let i=Gd(n,t,this.pickups),r=new Date;r.setHours(0,0,0,0);let s=d=>{let u=Math.round((d.getTime()-r.getTime())/864e5);return u===0?M(t,"bin_today"):u===1?M(t,"bin_tomorrow"):d.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=n.name||M(t,`bin_kind_${n.bin_kind??"rest"}`),l=Ii(n,t),c=d=>{d.stopPropagation(),typeof n.bin_out=="string"&&wi(t,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return g`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${i.length?i.map(d=>g`<b>${s(d.day)}${d.summary&&d.summary!==a?g` <small>· ${d.summary}</small>`:y}</b>`):g`<b>${M(t,"bin_none")}</b>`}
      ${Qd(n)&&!this.ro?g`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${c}>${l?M(t,"bin_out_done"):M(t,"bin_out_mark")}</button>`:l?g`<small>${M(t,"bin_out_done")}</small>`:y}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||this.panelOpen)return y;let e=()=>{this._hhFolded=!this._hhFolded,k_("home3d.hhFolded",this._hhFolded)};return g`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${M(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?y:this._household.map(t=>g`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):ke(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),y;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),i=this.hass.config?.time_zone,r=s=>{try{return t.toLocaleString(n,i?{...s,timeZone:i}:s)}catch{return t.toLocaleString(n,s)}};return g`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${r({hour:"2-digit",minute:"2-digit"})}</b><span>${r({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return y;let t=this._alerts.slice(0,3),n=this.mayEdit,i=r=>M(this.hass,r);return g`<div class="fp3d-alert-banner" role="alert">
      ${t.map(r=>{let s=Ee(r),a=n&&this._dismissing===s;return g`<span class="fp3d-alert-item ${n?"fp3d-alert-dismissable":""}">
          <button class="fp3d-alert fp3d-alert-${r.kind}" title=${Ks(this.hass,e,r)} @click=${()=>this.jumpTo(r)}>${Ks(this.hass,e,r)}</button>
          ${n?g`<button class="fp3d-alert-x" title=${i("alert_dismiss")} aria-label=${i("alert_dismiss")} aria-expanded=${a?"true":"false"} @click=${()=>this._dismissing=a?null:s}>✕</button>`:y}
          ${a?g`<div class="fp3d-alert-menu" role="menu">
                <button role="menuitem" title=${i("alert_dismiss_now_hint")} @click=${()=>this.dismiss(r,!1)}>${i("alert_dismiss_now")}</button>
                ${Fi(r.kind)?g`<button role="menuitem" title=${i("alert_dismiss_good_hint")} @click=${()=>this.dismiss(r,!0)}>${i("alert_dismiss_good")}</button>`:g`<small>${i("alert_dismiss_safety")}</small>`}
              </div>`:y}
        </span>`})}
      ${this._alerts.length>3?g`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:y}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return y;let t=e.floors.flatMap(r=>be(r)).find(r=>r.id===this.roomId),n=t?ge(this.hass,t.area_id).filter(r=>B(r)==="scene"||B(r)==="script").slice(0,6):[];if(!n.length)return y;let i=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return g`<div class="fp3d-scenes">
      ${n.map(r=>g`<button class="fp3d-chip" aria-pressed=${this._sceneFired===r} @click=${()=>this.runScene(r)}>${j(this.hass,r,i)}</button>`)}
    </div>`}async syncPets(){let e=this.building,t=this.viewer,n=e?.settings.pets?.on!==!1&&this.petsOn!==!1,i=n?e?.settings.pets?.list??[]:[],r=n&&!!e?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!t||!e||this.plan2d||!i.length&&!r){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a]=await Promise.all([ua(),Ao()]);if(!this.viewer||this.plan2d||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:a.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(l,c)=>ce(l,c),surface:(l,c,d)=>Qn(l,c,d),closedDoors:()=>{let l=new Set,c=this.hass?.states??{};for(let d of this.building?.floors??[])for(let u of d.openings)u.type==="door"&&u.contact&&c[u.contact]?.state==="off"&&l.add(u.id);return l}})}catch(s){console.error("Home 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let e=this.building,t=!!e&&e.settings.easter_eggs!==!1&&e.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||this.plan2d||!t){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[n,i]=await Promise.all([ua(),Ao()]);if(!this.viewer||this.plan2d||this.ghost||!this.building)return;this.ghost=n.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(n){console.error("Home 3D: the ghost failed to load",n)}finally{this.ghostLoading=!1}}}async startWalk(){let e=this.building,t=this.viewer;if(!e||!t||this._walk||this.plan2d)return;let n=e.floors.filter(u=>u.rooms.some(p=>p.points.length>=3)),r=(this.roomId?n.find(u=>u.rooms.some(p=>p.id===this.roomId)):void 0)??n.find(u=>u.id===this.floorId)??[...n].sort((u,p)=>Math.abs(u.elevation)-Math.abs(p.elevation))[0];if(!r)return;let s=await Ao();this._walk={room:null,hint:!0},await this.updateComplete;let a=this.renderRoot.querySelector(".fp3d-walk-surface");if(!a)return;t.setFloor(r.id,!1),t.setWallMode("auto");let l=new s.FloorMap(e,r),c=this.roomId?r.rooms.find(u=>u.id===this.roomId):void 0,d;if(c){let u=l.freeNear(Fe(c.points));d={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new s.WalkCamera(t,l,a,{start:d,onRoom:u=>{this.walkRoomPts=u?.points??null,this._walk&&(this._walk={...this._walk,room:u?.name??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||this.plan2d||!this.building||!this.hass)return y;let e=r=>M(this.hass,r);if(!this._walk)return g`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span class="fp3d-walk-label">${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,i=(r,s)=>{if(!n)return;let a=44,l=r.clientX-n.cx,c=r.clientY-n.cy,d=Math.hypot(l,c);d>a&&([l,c]=[l/d*a,c/d*a]),s.firstElementChild.style.transform=`translate(${l}px, ${c}px)`,this.walker?.setStick({x:l/a,y:c/a})};return g`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?g`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:y}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${r=>{let s=r.currentTarget,a=s.getBoundingClientRect();n={id:r.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(r.pointerId),i(r,s)}}
        @pointermove=${r=>i(r,r.currentTarget)}
        @pointerup=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return y;if(this._find===null)return g`<button class="fp3d-find-btn" title=${M(this.hass,"find")} aria-label=${M(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=tp(this.findIndex??=Ui(this.hass,e),this._find);return g`<div class="fp3d-find">
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
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?gi(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?g`<small>${n.where}</small>`:y}</span>
                  </button>`):g`<p>${M(this.hass,"find_none")}</p>`}
          </div>`:y}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return y;let n=(m,f)=>M(t,m,f),i=g`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let r=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,s=r?[r]:e.floors,a=s.flatMap(m=>ls(t,m).lights),l=s.flatMap(m=>ls(t,m).covers),c=a.filter(m=>t.states[m]?.state==="on").length,d=!r,u=(m,f,v,w)=>{if(w.length){if(d&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,this.confirmForAll(w).then(x=>x&&t.callService(f,v,{entity_id:w}))}},p=(m,f,v,w,x)=>g`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!x.length} @click=${()=>u(m,v,w,x)}>
        ${this._armed===m?n("central_sure"):n(f)}
      </button>`,h=(e.settings.favorites??[]).filter(m=>t.states[m]),_=this.buttons??e.settings.buttons??[],b=Zt()?ra(this.sceneHost(t,e)):[];return g`${i}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <div class="fp3d-central-top">
          <b>${r?r.name:n("central_house")}</b>
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
              ${h.map(m=>{let[f,v]=zc(m),w=t.states[m],x=f==="homeassistant"&&w?.state==="on";return g`<button
                  class="fp3d-chip"
                  aria-pressed=${x||this._sceneFired===m}
                  ?disabled=${K(w)}
                  @click=${()=>{sn(t,f,v,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${j(t,m)}
                </button>`})}
            </div>`:_.length?y:g`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${_.length?g`<div class="fp3d-central-favs">
              ${_.map(m=>g`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${y_(t,m)}
                  @click=${f=>{Oc(t,f.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?g`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:y}${m.label}
                </button>`)}
            </div>`:y}
      </div>`}mediaCardUp(e,t){let n=e.states[t];if(!n||B(t)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(t)?.until??0)>Date.now()&&K(n))return!0;let i=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(r=>typeof r=="string"&&!!r.trim());return!K(n)&&(n.state==="playing"||n.state==="paused"&&i&&this.pausedRecently(n))}pausedRecently(e){let t=Date.parse(e.last_changed??"");if(!Number.isFinite(t))return!0;let n=t+b_-Date.now();if(n<=0)return!1;let i=Date.now()+n+500;return(!this.pausedTimer||i<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=i,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},n+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return y;let e=M(this.hass,this.clean?"controls_show":"controls_hide");return g`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Ze`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Ze`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return y;let t=this._voice,n=t?.phase==="wait"||t?.phase==="listen",i=M(e,"voice_button"),r=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return g`<button class="fp3d-mic ${t?.phase==="listen"?"fp3d-mic-on":""}" style="left:${r}px" title=${i} aria-label=${i} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${Ze`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?g`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${r}px">${t.text}</div>`:y}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==i)return;if(e.show_rooms){(!e.admins_only||t.user?.is_admin)&&this.showRooms(n,e.show_rooms);return}let r=null;try{let s=await St();r=await this.handleSentence(t,n,s,e.text,e.speak),r===null&&this.sayVoice("error",M(t,"voice_none"))}catch(s){this.sayVoice("error",M(t,"voice_error",{msg:String(s?.message??s)}))}try{await Sl(t,e.ask_id,r??"",r!==null)}catch{}}async onMic(){let e=this.hass,t=this.building;if(!e||!t||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let n=(r,s)=>this.sayVoice(r,s);n("wait","\u2026"),this.tourToken++;let i;try{let r=window.AudioContext??window.webkitAudioContext;i=new r,i.resume()}catch{i=void 0}try{let r=await St(),s=await r.listenOnce(e,()=>n("listen",M(e,"voice_listen")),rn(),i);if(!s){n("error",M(e,"voice_none"));return}if(await this.handleSentence(e,t,r,s,!0)!==null)return;n("wait",`\u201C${s}\u201D \u2026`);let a=await r.converse(e,s);n("done",a?`\u201C${s}\u201D \u2013 ${a}`:`\u201C${s}\u201D`)}catch(r){let s=r,a=s?.message==="no_pipeline"?"voice_no_pipeline":s?.message==="silent"?"voice_silent":s?.name==="NotAllowedError"||s?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",a?M(e,a):M(e,"voice_error",{msg:String(s?.message??s?.name??r)}))}}async handleSentence(e,t,n,i,r){let s=(b,m)=>this.sayVoice(b,m),{devices:a,items:l}=this.spokenDevices(e,t,n.SYNONYMS),c=n.showTarget(i,t,a,b=>b.area_id?e.areas?.[b.area_id]?.name:null);if(c){let b=c.kind==="house"?M(e,"all_floors"):c.kind==="cameras"?M(e,"camera_wall_title"):c.name;if(s("done",`\u201C${i}\u201D \u2192 ${b}`),this.directing.touch(Date.now()),c.kind==="cameras")this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}));else if(c.kind==="device"){let m=l.get(c.id);c.camera&&c.entity?this.lookThrough(c.entity):m&&this.goTo(m)}else c.kind==="house"?this.fire("floor-tap",{floorId:null}):c.kind==="floor"?this.fire("floor-tap",{floorId:c.floorId}):(this.floorId!==c.floorId&&this.fire("floor-tap",{floorId:c.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),60));return M(e,"voice_showing",{name:b})}let d=this.spokenRacks(e,t),u=d.length?n.rackAnswer(i,d,(b,m)=>M(e,b,m)):null;if(u){s("done",`\u201C${i}\u201D \u2013 ${u.text}`),this.directing.touch(Date.now());let b=l.get(`furniture:${u.rackId}`);return b&&this.goTo(b),r&&n.speak(e,u.text,rn()),u.text}let p=await e.callWS({type:"home_3d/locate/ask",text:i,language:e.language}).catch(()=>null);if(p)return s("done",`\u201C${i}\u201D \u2013 ${p.text}`),p.rooms.length&&(!p.admins_only||e.user?.is_admin)&&this.showRooms(t,p.rooms),r&&n.speak(e,p.text,rn()),p.text;let h=this.moduleHost(e,t,n.SYNONYMS,b=>n.showTarget(b,t,a,m=>m.area_id?e.areas?.[m.area_id]?.name:null)),_=await np(i,h);if(_){s("done",_.text?`\u201C${i}\u201D \u2013 ${_.text}`:`\u201C${i}\u201D`),this.directing.touch(Date.now()),_.highlight?.length&&this.viewer?.flashDevices(_.highlight);let b=_.focus,m=_.spoken??_.text??"";if(_.tour?.length){let f=r&&_.speak!==!1?w=>n.speak(e,w,rn()):null,v=_.spoken??_.text;return v&&f&&await f(v),this.runTour(_.tour,t,l,f),m}if(b?.roomId&&b.floorId)this.floorId!==b.floorId&&this.fire("floor-tap",{floorId:b.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:b.floorId,roomId:b.roomId}),60);else if(b?.floorId&&!b.entity&&!b.furnitureId)this.fire("floor-tap",{floorId:b.floorId});else if(b?.entity||b?.furnitureId){let f=l.get(b.entity??`furniture:${b.furnitureId}`);f&&this.goTo(f)}return _.text&&_.speak!==!1&&r&&n.speak(e,_.text,rn()),m}return null}spokenDevices(e,t,n){let i=this.findIndex??=Ui(e,t),r=new Map(t.floors.flatMap(u=>be(u).map(p=>[p.id,p.name]))),s=[],a=[],l=new Map;for(let u of i)u.kind==="device"&&u.entity&&l.set(u.entity,u);let c=new Set;for(let u of t.floors){let p=be(u);for(let h of u.furniture){if(S_.has(h.type))continue;let _=this.furnitureLinks.get(h.id),b=_?.entity??_?.power??null,m=b??`furniture:${h.id}`,f=p.find(H=>H.points.length>=3&&U([h.x,h.z],H.points)),v=le(e,h.type),w=[h.name,...h.aliases??[],v,b?j(e,b):null,...n[h.type]??[]].filter(H=>!!H),x=h.name||(b?j(e,b):v);s.push({id:m,entity:b,name:x,names:w,room:f?.name??"",camera:!!b&&B(b)==="camera"});let A=(h.type==="plant"||Os(h.type))&&!!h.moisture&&h.moisture!=="none",E=Us(_?.entity?e.states[_.entity]:void 0,_?.power?ue(e.states[_.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),D=typeof h.remaining=="string"&&h.remaining!=="none"&&!E?Vs(e.states[h.remaining]):null;a.push({id:m,entity:b,name:x,names:w,room:f?.name??"",floorId:u.id,roomId:f?.id??null,power:_?.power??null,type:h.type,remaining:D,thirsty:A?Ns(h,e):null}),b?c.add(b):l.set(m,{kind:"device",name:x,where:"",floorId:u.id,roomId:f?.id??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(u.height-.3,Math.max(.5,h.h))})}}let d=new Map(t.floors.flatMap(u=>u.placements.map(p=>[p.entity_id,p])));for(let[u,p]of l){if(c.has(u)||u.startsWith("furniture:"))continue;let h=p.roomId&&r.get(p.roomId)||"",_=d.get(u),b=[_?.name,..._?.aliases??[],p.name].filter(m=>!!m);s.push({id:u,entity:u,name:p.name,names:b,room:h,camera:B(u)==="camera"}),a.push({id:u,entity:u,name:p.name,names:b,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(e,t){let n=[];for(let i of t.floors)for(let r of i.openings){let s=this.openingLinks?.get(r.id)?.lock;if(!s)continue;let a=this.openingSpot(t,r.id,!0);if(!a)continue;let l=e.states[s];n.push({id:s,floorId:i.id,roomId:r.room_id,x:a.x,z:a.z,y:Math.min(a.y+.35,1.5),icon:Nt("lock"),name:j(e,s),text:l?de(e,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||K(l),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t,n=!1){for(let i of e.floors){let r=i.openings.find(f=>f.id===t);if(!r)continue;let s=hd(r,i.rooms,i.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],c=a[(s.edge+1)%a.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[(c[0]-l[0])/d,(c[1]-l[1])/d],h=Be(a)>0?[-u[1],u[0]]:[u[1],-u[0]],_=r.offset;if(n){let f=u[0]*h[1]-u[1]*h[0]>0;_=r.offset-r.width/2+ac(r,r.hinge==="left"===f)}let[b,m]=yi(s.room,s.edge,_);return{floorId:i.id,x:b+h[0]*.2,z:m+h[1]*.2,y:Math.max(.5,r.sill+r.height/2),theta:Math.atan2(h[0],h[1])}}return null}async showRooms(e,t){let n=t.map(l=>({roomId:l,floorId:e.floors.find(c=>c.rooms.some(d=>d.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!n.length)return;let i=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let r=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};r?.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(c=>this.tourTimer=setTimeout(c,l));for(let[l,c]of n.entries()){if(i!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await a(150)),i!==this.tourToken))break;this.roomId!==c.roomId&&this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),this.directing.touch(Date.now()),l<n.length-1&&await a(4e3)}r?.removeEventListener("pointerdown",s)}async runTour(e,t,n,i){let r=++this.tourToken;clearTimeout(this.tourTimer);let s=e.map(d=>{if(d.openingId){let p=this.openingSpot(t,d.openingId);return p?{...p,entity:null,say:d.say,inside:!0}:null}let u=n.get(d.entity??`furniture:${d.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a?.addEventListener("pointerdown",l,{once:!0});let c=d=>new Promise(u=>this.tourTimer=setTimeout(u,d));for(let d of s){if(r!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await c(150)),r!==this.tourToken)||(this.viewer?.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await c(900),r!==this.tourToken))break;let u=d.say&&i?await i(d.say):!1;if(r!==this.tourToken)break;await c(u?1200:2600)}a?.removeEventListener("pointerdown",l)}spokenOpenings(e,t){let n=[],i=a=>M(e,a);for(let a of t.floors){let l=new Map(be(a).map(c=>[c.id,c.name]));for(let c of a.openings){let d=this.openingLinks?.get(c.id);if(!d)continue;let u=c.type==="garage"?"garage":c.type==="door"?"door":"window",p=it(e,d,c.type),h=p.open>.02||p.open2>.02||c.type==="garage"&&(p.cover??0)>.02,_=!h&&(p.tilt>.02||p.tilt2>.02);for(let b of[d.contact,d.contact2,d.cover,d.tilt,d.tilt2])b&&b!=="none"&&n.push({id:c.id,entity:b,kind:u,name:i(`opening_${c.type}`),room:l.get(c.room_id)??"",floorId:a.id,roomId:c.room_id,open:h,tilted:_})}}let r=t.settings.roof?.windows??[],s=r.length?new Map(yt(t).map(a=>[a.key,a])):null;for(let a of r){let l=hh(e,a),c=l.open>.02,d=!c&&l.tilt>.02,u=[a.window,a.contact,a.cover,a.tilt].filter(m=>!!m&&m!=="none"),p=u.map(m=>tt(e,m)).filter(m=>!!m).map(m=>t.floors.flatMap(f=>f.rooms.filter(v=>v.area_id===m).map(v=>({floor:f,room:v})))).find(m=>m.length===1)?.[0],h=p?null:Is(t,s?.get(a.face),a),_=p?.floor??h?.floor??t.floors[t.floors.length-1],b=p?.room??(h?_?.rooms.find(m=>m.id===h.roomId):void 0);for(let m of u)n.push({id:a.id,entity:m,kind:"roof_window",name:a.name||i("roof_window"),room:b?.name??"",floorId:_?.id??"",roomId:b?.id??null,open:c,tilted:d})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,i){let r=null,s=()=>r??=this.spokenDevices(e,t,n).spoken,a={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>s(),findDevice:l=>{let c=i(l);return c?.kind==="device"&&c.id?s().find(d=>d.id===c.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>this.mayEdit,updateBuilding:l=>this.changePlan(l),callService:(l,c,d)=>this.hass?this.hass.callService(l,c,d):Promise.resolve(),newId:l=>lc(l),waterLevel:(l,c)=>{let d=this.building?.floors.find(p=>p.id===l),u=d?.outdoor.find(p=>p.id===c);return!d||!u||u.type!=="pool"?null:{y:gn(d,u),floorY:Jn(d,u)}},groundAt:(l,c,d)=>{let u=this.building?.floors.find(p=>p.id===l);return u?et(u,c,d):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:Aa,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:s().find(c=>c.entity===l.id||c.power===l.powerEntity)?.name??j(e,l.id),watts:l.power})).sort((l,c)=>c.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>lp(a),weather:()=>Yt(e,this.weatherEntityId??t.settings.weather_entity),listen:async l=>{try{return(await(await St()).listenOnce(e,l,rn())).trim()||null}catch{return null}},notify:l=>this.showNote(l),occupied:()=>this.occupiedRooms(e,t),speakers:()=>this.planSpeakers(e,t)};return a}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,t){let n=new Map;for(let i of this.lastPersons)i.roomId&&n.set(i.roomId,i);for(let i of t.floors)for(let r of i.rooms){if(n.has(r.id)||!r.area_id)continue;ge(e,r.area_id).some(a=>{let l=e.states[a];return a.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&n.set(r.id,{floorId:i.id,roomId:r.id})}return[...n.values()]}planSpeakers(e,t){let n=[],i=new Set;for(let r of t.floors){let s=(a,l)=>r.rooms.find(c=>c.points.length>=3&&U([a,l],c.points))?.id??null;for(let a of r.placements)!a.entity_id.startsWith("media_player.")||i.has(a.entity_id)||!e.states[a.entity_id]||(i.add(a.entity_id),n.push({entity:a.entity_id,name:j(e,a.entity_id),floorId:r.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of r.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||i.has(l)||!e.states[l]||(i.add(l),n.push({entity:l,name:j(e,l),floorId:r.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:ce(r,a)+a.h}))}}return n}roomSheets(e){let t=this.hass,n=this.building;if(!t||!n||this.ro||!Zt())return[];let i=n.floors.find(r=>r.rooms.some(s=>s.id===e));return i?ia(this.sceneHost(t,n),{floorId:i.id,roomId:e}).map(r=>({id:r.id,icon:r.icon,title:r.title})):[]}openRoomSheet(e,t){let n=this.building?.floors.find(i=>i.rooms.some(r=>r.id===e));this._sheet={id:t,floorId:n?.id??null,roomId:e}}currentSheet(e,t){let n=this._sheet;if(!n)return null;let i=this.sceneHost(e,t);return(n.roomId&&n.floorId?ia(i,{floorId:n.floorId,roomId:n.roomId}):ra(i)).find(s=>s.id===n.id)??null}renderSheet(){let e=this.hass,t=this.building;if(!e||!t||!this._sheet)return y;let n=this.currentSheet(e,t);if(!n)return y;let i=d=>M(e,d),r=this._sheet.roomId?t.floors.flatMap(d=>d.rooms).find(d=>d.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async d=>{s();try{await d()}catch(u){console.warn("Home 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&n.input&&a(()=>n.input.onSubmit(u))},c=async()=>{let d=this.renderRoot.querySelector(".fp3d-sheet-input");if(!d)return;d.placeholder=i("sheet_listening");let p=await this.sceneHost(e,t).listen?.(()=>d.placeholder=i("sheet_listening"));d.placeholder=n.input?.placeholder??"",p?d.value=p:this.showNote(i("sheet_mic_failed"))};return g`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${n.title}>
        <header>
          <b><span aria-hidden="true">${n.icon}</span> ${n.title}${r?` \xB7 ${r.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${i("close")} @click=${s}>✕</button>
        </header>
        ${n.choice?g`<div class="fp3d-sheet-choice">
              ${n.choice.options.map(d=>g`<button class="fp3d-chip" aria-pressed=${d.id===n.choice.value} @click=${()=>{n.choice.set(d.id),this.requestUpdate()}}>${d.label}</button>`)}
            </div>`:y}
        ${n.chips?.length?g`<div class="fp3d-sheet-chips">${n.chips.map(d=>g`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>d.onTap())}}>${d.label}</button>`)}</div>`:y}
        ${n.input?g`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${n.input.placeholder} @keydown=${d=>d.key==="Enter"&&l()} />
              ${n.input.mic?g`<button class="fp3d-btn fp3d-sheet-mic" title=${i("sheet_mic")} aria-label=${i("sheet_mic")} @click=${()=>{c()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:y}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${n.input.button}</button>
            </div>`:y}
        ${n.lines?.length?g`<div class="fp3d-sheet-lines">${n.lines.map(d=>g`<p>${d}</p>`)}</div>`:y}
        ${this.mayEdit&&sa().length?g`<button class="fp3d-sheet-gear" @click=${()=>{s(),this._settingsOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-set-module")?.scrollIntoView({block:"start"}))}}>⚙ ${i("view_settings")}</button>`:y}
      </div>`}viewPlan(e){let t=new Date(this.replay?.t??Date.now()),n=this.hass?$a(e,this.hass.states,t).join("|"):"";return(this.shownPlan?.from!==e||this.shownPlan.hidden!==n)&&(this.shownPlan={from:e,hidden:n,plan:n&&this.hass?Wp(e,this.hass.states,t):e}),this.shownPlan.plan}get mayEdit(){return(this.canEdit??!!this.hass?.user?.is_admin)&&!this.ro}setPlanSettings(e){this.changePlan(t=>Object.assign(t.settings,e))}changePlan(e){let t=this.building;if(!t||!this.hass||!this.mayEdit||!this.dispatchEvent(new CustomEvent("plan-change",{detail:{change:e},cancelable:!0})))return;let n=structuredClone(t);e(n),this.building=n,Ko(this.hass,n,Yn(n.recipes),this.home).catch(i=>this.serviceFailed("home_3d/building/save",i))}openSettings(){this._settingsOpen=!0}showRackView(e,t,n=null){this._rackView={id:e,draw:t,slot:n}}closeRackView(){this._rackView=null}rackViewItem(){let e=this._rackView;return e?this.building?.floors.flatMap(t=>t.furniture).find(t=>t.id===e.id):void 0}rackViewOf(){let e=this._rackView,t=this.rackViewItem();if(!e||!t)return null;let n=this.hass?.language??"en",i=t.name||le(this.hass,t.type),r=new Map((t.rack?.slots??[]).map(a=>[a.id,this.hass?tn(this.hass,a):null])),s=JSON.stringify([e.id,i,n,[...r]]);if(this.rackViewMemo?.key!==s||this.rackViewMemo.draw!==e.draw){let a=e.draw((l,c)=>l.name||Xo(c,n),i,l=>r.get(l.id)??null);this.rackViewMemo={key:s,draw:e.draw,view:{...a,name:i}}}return this.rackViewMemo.view}tapRackDrawing(e){this._rackView&&e&&(this._rackView={...this._rackView,slot:e})}openRackEntity(e){ke(this,e)}renderRackDetail(e,t){let n=t.rack?.slots.find(l=>l.id===this._rackView?.slot);if(!n)return y;let i=l=>M(e,l),r=tn(e,n),s=Rn(n),a=n.name||le(e,n.type);return g`<section class="fp3d-rack-detail">
      <b>${r?g`<i class="fp3d-rack-led" style="background:${ji[r]}"></i>`:y}${a}${r?g` · ${i(`rack_status_${r}`)}`:y}</b>
      ${s.length?s.map(l=>g`<button class="fp3d-rack-entity" @click=${()=>this.openRackEntity(l)}><span>${j(e,l)}</span><span>${de(e,e.states[l])}</span></button>`):g`<p>${i("rack_unlinked")}</p>`}
    </section>`}renderRackView(){let e=this.hass,t=e?this.rackViewOf():null,n=this.rackViewItem();if(!e||!t||!n)return y;let i=()=>this.closeRackView(),r=s=>this.tapRackDrawing(s.target?.closest?.("[data-slot]")?.getAttribute("data-slot")??null);return g`<div class="fp3d-sheet-backdrop" @click=${i}></div>
      <div class="fp3d-sheet fp3d-rack-view" role="dialog" aria-label=${t.name}>
        <header>
          <b>▤ ${t.name}</b>
          <button class="fp3d-sheet-x" aria-label=${M(e,"close")} @click=${i}>✕</button>
        </header>
        <p class="fp3d-rack-view-used">${M(e,"rack_front_view")} · ${M(e,"rack_used",{used:t.used,u:t.u})}</p>
        ${this.renderRackDetail(e,n)}
        <div class="fp3d-rack-view-box" @click=${r}>${Id(t.svg)}</div>
      </div>`}renderSettings(){let e=this.hass,t=this.building;if(!e||!t||!this._settingsOpen)return y;let n=d=>M(e,d),i=this.mayEdit,r=t.settings,s=(d,u,p,h)=>g`<label class="fp3d-set-check" title=${h?n(h):""}
        ><input type="checkbox" .checked=${u} ?disabled=${!i} @change=${_=>this.setPlanSettings(p(_.target.checked))} /> ${n(d)}</label
      >`,a=this.sceneHost(e,t),l=pn(),c=sa().map(d=>{let u=ap(d,a);if(!u.length||u[0].kind==="heading")return u;let p=l.find(_=>_.id===d);return[{kind:"heading",text:p?Vl(p,e.language??"en").replace(/^(Modul|Module):\s*/i,""):d},...u]}).filter(d=>d.length);return g`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${n("view_settings")}>
        <header>
          <b>⚙ ${n("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${n("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${i?y:g`<p class="fp3d-set-note">${n("view_settings_admin")}</p>`}
        <h4>${n("view_settings_look")}</h4>
        ${s("sun_shadow",r.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${s("window_glow",r.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${s("sun_patches",r.sun_patches!==!1,d=>({sun_patches:d}))}
        <h4>${n("view_settings_alerts")}</h4>
        ${s("rain_warning",r.rain_warning!==!1,d=>({rain_warning:d}))}
        ${s("alert_unavailable",!!r.alert_unavailable,d=>({alert_unavailable:d}))}
        ${s("alert_names",r.alert_names!==!1,d=>({alert_names:d}))}
        ${mu(e,r.alert_ignored,!i,d=>this.setPlanSettings({alert_ignored:fu(r.alert_ignored,d)}))}
        <h4 title=${n("effects_hint")}>${n("effects")}</h4>
        ${zd(e,r.effects,!i,d=>this.setPlanSettings({effects:d}))}
        ${c.map(d=>g`<div class="fp3d-set-module">${d.map(u=>this.renderViewField(e,u,i))}</div>`)}
        <p class="fp3d-set-note">${n("view_settings_more")}</p>
        <button
          class="fp3d-btn"
          @click=${()=>{this._settingsOpen=!1;let d=new CustomEvent("open-settings",{detail:{section:null,id:null},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(d)&&(history.pushState(null,"","/home_3d#settings"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}})))}}
        >
          ⚙ ${n("all_settings")} ›
        </button>
      </div>`}renderViewField(e,t,n){switch(t.kind){case"heading":return g`<h4>${t.text}</h4>`;case"text":return g`<p class="fp3d-set-note">${t.text}</p>`;case"check":return g`<label class="fp3d-set-check"><input type="checkbox" .checked=${t.value} ?disabled=${!n} @change=${i=>t.set(i.target.checked)} /> ${t.label}</label>`;case"select":return g`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${i=>t.set(i.target.value)}>
            ${t.options.map(i=>g`<option value=${i.id} ?selected=${i.id===t.value}>${i.label}</option>`)}
          </select></label
        >`;case"entity":{let i=Object.keys(e.states).filter(r=>t.filter(r)).sort((r,s)=>j(e,r).localeCompare(j(e,s)));return g`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${r=>{let s=r.target.value;t.set(s===""?null:s)}}>
            <option value="" ?selected=${!t.value}>${t.auto?M(e,"entity_auto",{name:j(e,t.auto)}):"\u2014"}</option>
            ${i.map(r=>g`<option value=${r} ?selected=${r===t.value}>${j(e,r)}</option>`)}
          </select></label
        >`}case"lines":return Rd(t.value,!n,{label:t.label,placeholder:t.placeholder??M(e,"lines_new"),add:M(e,"lines_add"),remove:M(e,"delete")},i=>t.set(i));case"button":return g`<button class="fp3d-btn ${t.primary?"fp3d-primary":""}" ?disabled=${!n} title=${t.title??""} @click=${()=>t.onTap()}>${t.label}</button>`}}renderNote(){return this._note?g`<div class="fp3d-note" role="status">${this._note}</div>`:y}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(i=>be(i).map(r=>[r.id,r.name])));return this._alerts.map(i=>({kind:i.kind,entity:i.entity,name:j(e,i.entity),...i.text?{text:i.text}:{},room:i.roomId?n.get(i.roomId)??null:null,floorId:i.floorId,roomId:i.roomId}))}spokenCars(e,t){let n=[];for(let i of t.floors)for(let r of i.furniture){if(r.type!=="parking"||!r.car)continue;let s=En(e,r),a=io(e,r),l=a.entities.tracker?e.states[a.entities.tracker]:void 0,c=!!s&&!(l&&!Ni.has(l.state.toLowerCase()));n.push({name:r.name||(s?le(e,s):le(e,"car")),spot:r.id,floorId:i.id,present:c,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return y;let t=e.kind==="light"&&e.value<=0;return g`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${j(this.hass,e.entity)}</span>
      <b>${t?M(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n||this.ro||this.plan2d)return;let i=n.floors.find(s=>s.placements.some(a=>a.entity_id===e))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let r=this.floorId===i?0:300;r&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},r)}endThrough(){let e=this._through;e&&(this._through=null,this.live?.id===e.entity&&(this.live=null),this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return y;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))},n=[...new Set(this.building.floors.flatMap(d=>d.placements.map(u=>u.entity_id)).filter(d=>B(d)==="camera"))];this.watchCameras(!0);let i=d=>{let u=e.states[d],p=u?.attributes.entity_picture;return p&&u&&!K(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},r=d=>{let u=e.states[d];return g`${j(e,d)}${u?.state==="recording"?g` <b>● ${M(e,"state_recording")}</b>`:y}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let d=i(s),u=this.liveFor(s),p=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return g`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${M(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${r(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${M(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(d?g`<img src=${d} alt="" />`:g`<div class="fp3d-wall-none">${M(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:c}=Op(n.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return g`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${M(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${M(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${c}px); grid-auto-rows: ${Math.round(c*9/16)}px">
        ${n.map(d=>{let u=i(d),p=st(e,d).some(h=>e.states[h]?.state==="on");return g`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${M(e,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${u?g`<img src=${u} alt="" />`:g`<div class="fp3d-wall-none">${M(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${r(d)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(i=>{if(this.live!==t)return;let r=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});r.hass=this.hass,t.el=r,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return y;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,i=n&&!K(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,r=this.building?.settings.director?.live?this.liveFor(e.entity):null;return g`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${r?g`<div class="fp3d-through-img fp3d-through-live">${r}</div>`:i?g`<img class="fp3d-through-img" src=${i} alt="" />`:y}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${j(this.hass,e.entity)}</span>
        <span class="fp3d-still">${r?"\u25CF Live":M(this.hass,"camera_still",{s:this._low?10:5})}</span>
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
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>ke(this,e)):ke(this,e)}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return y;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,i=t?.clientHeight??600,r=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return g`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${r}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        .presets=${this.building?.settings.media_presets??[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?noLook=${this.plan2d}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){let t=[];for(let n of this.scene){if(n.kind!=="marker")continue;let i=e.floors.find(d=>d.id===n.floorId),r=n.furnitureId?i?.furniture.find(d=>d.id===n.furnitureId):void 0;if(!i||!r&&!n.at)continue;let[s,a]=r?[r.x,r.z]:n.at,l=hp(n.path),c=pp(n.emoji);t.push({id:`module:${n.id}`,floorId:i.id,roomId:i.rooms.find(d=>d.points.length>=3&&U([s,a],d.points))?.id??null,x:s,z:a,y:n.y??(r?ce(i,r)+r.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:n.name,text:n.text??"",active:!!n.active&&!this.dimmed,unavailable:!1,glow:n.color&&n.active&&!this.dimmed?{color:n.color,level:1}:null,pin:!0,full:!0,...r?{furnitureId:r.id}:{}})}return t}openModuleCard(e){let t=this.scene.find(r=>r.kind==="marker"&&r.id===e);if(!t)return;if(t.sheet){this.openRoomSheet(t.sheet.roomId,t.sheet.id);return}t.card&&(this.mediaFolded.delete(t.card),this.cardPing=t.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=this.building?.floors.find(r=>r.id===t.floorId),i=n?.furniture.find(r=>r.id===t.furnitureId);n&&i&&this.viewer?.focus(n.id,i.x,i.z,ce(n,i)+i.h*.6,`module:${t.id}`)}onDeviceTap(e,t=0,n=0){let i=this.ro?void 0:this.actionOwners.get(e);if(!i)return this.defaultTap(e,t,n);let r=Ti(i,"double_tap");this.taps.tap(e,!!r,()=>{let s=Ti(i,"tap");s?this.runOwnAction(s,i,t,n):this.defaultTap(e,t,n)},()=>r&&this.runOwnAction(r,i,t,n))}runOwnAction(e,t,n,i){let r=this.hass;r&&Fd(e,t.entity,{callService:(s,a,l)=>r.callService(s,a,l),moreInfo:s=>ke(this,s),camera:s=>this._menu={entity:s,x:n,y:i},navigate:s=>{history.pushState(null,"",s),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))},openUrl:s=>{window.open(s,"_blank","noopener,noreferrer")},confirm:s=>this.ask(s??M(r,"action_confirm_default",{name:t.entity?j(r,t.entity):M(r,"action_this_item")}))}).catch(s=>this.showNote(M(r,"action_failed",{error:s instanceof Error?s.message:String(s)})))}ask(e){return Lt(e,{ok:M(this.hass,"action_confirm_ok"),cancel:M(this.hass,"cancel")})}async confirmFor(e){return!this.confirmSet.has(e)||await this.ask(M(this.hass,"confirm_switch",{name:j(this.hass,e)}))}confirmForAll(e){return ui(e,this.confirmSet,t=>j(this.hass,t),t=>this.ask(M(this.hass,"confirm_switch",{name:t})))}defaultTap(e,t=0,n=0){if(e.startsWith("item:")||e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!1);if(e.startsWith("gangs:")){let s=e.slice(6),a=this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===s);if(!a)return;let l=ti(a);if(l.length===1)return this.onDeviceTap(l[0],t,n);if(l.length>1){this._gangMenu={furnitureId:s,x:t,y:n};return}let c=Xn(a).find(d=>d.power&&d.power!=="none")?.power;c&&(this.ro?this.showInfo(c,t,n):ke(this,c));return}if(e.startsWith("hh:")){let[s,a]=e.slice(3).split("#");this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===a&&c.type==="waste_bin")?(this._binInfo={furnitureId:a,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(s,t,n):ke(this,s);return}if(this.ro){let s=this.building,a=s?s.energy.grid??Xt(s,c=>this.furnitureLinks?.get(c.id)?.power??null).grid:null,l=e==="grid"?a:e.startsWith("detect:")?e.slice(7):e;l&&this.showInfo(l,t,n);return}if(e==="grid"){let s=this.building,a=s?s.energy.grid??Xt(s,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null;a&&ke(this,a);return}if(e.startsWith("detect:")){ke(this,e.slice(7));return}let i=this.printerCams.get(e);if(i){this._menu={entity:i,x:t,y:n};return}let r=B(e);if(r==="cover"||r==="camera"){this._menu={entity:e,x:t,y:n};return}r&&vc.has(r)?this.confirmFor(e).then(s=>s&&wi(this.hass,e)):ke(this,e)}onOpeningTap(e,t,n,i){let r=this.openingLinks?.get(e);if(!r||!this.hass)return;if(r.lock&&!r.cover){this.ro?this.showInfo(r.lock,t,n):this._menu={entity:r.lock,x:t,y:n,doorLock:!0};return}let s=r.cover;if(!s)return;if(this.ro){this.showInfo(r.contact??s,t,n);return}if(i){ke(this,s);return}let a=this.hass.states[s];if(!a||K(a)){ke(this,s);return}let[l]=s.split(".");this.confirmFor(s).then(c=>c&&this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:s}))}effectiveTheme(){return lt(this.theme,this.hass)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("home3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("home3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!e||this.roomId||!this.showEnergy)return y;let t=i=>M(this.hass,i),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:se(this.hass,e.consumption)}),e.grid!==null){let i=e.grid<0;n.push({cls:i?"export":"grid",label:t(i?"energy_grid_export":"energy_grid_import"),value:se(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:se(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let i=[e.battery!==null?se(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:i.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${Z(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),g`<div class="fp3d-energy" aria-live="off">
      ${this._cheap?g`<div class="fp3d-energy-item fp3d-energy-cheap" role="status"><span>${t("cheap_rate")}</span><b>${t("cheap_rate_now")}</b></div>`:y}
      ${this._holoOn?y:n.map(i=>g`<button type="button" class="fp3d-energy-item fp3d-energy-tile fp3d-energy-${i.cls}${this._bigTile===i.cls?" fp3d-energy-big":""}" aria-pressed=${this._bigTile===i.cls?"true":"false"} @click=${()=>this.toggleEnergyTile(i.cls)}>
                <span>${i.label}</span><b>${i.value}</b>
              </button>`)}
      ${this.flows!==null?y:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?y:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}toggleEnergyTile(e){this._bigTile=this._bigTile===e?null:e}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return y;let e=Li[this.heatMode],t=this.heatMode==="temperature",n=t?nt(this.hass,e.stops[0][0]):e.stops[0][0],i=t?nt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],r=t?He(this.hass):e.unit,s=a=>M(this.hass,a);return g`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Vu(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${Z(this.hass,n,0)} ${r}</span><span>${Z(this.hass,i,0)} ${r}</span></span>
      ${this.heatValues.size?y:g`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){let t=e.config?.latitude,n=e.config?.longitude;if(typeof t!="number"||typeof n!="number")return null;let i=`${new Date().toDateString()},${t},${n}`;return this.sunPathKey!==i&&(this.sunPathKey=i,this.sunPathCache=Zp(Date.now(),t,n)),this.sunPathCache}skyColor(){if(this.effectiveTheme()==="realistic"&&this._realSky)return this._realSky.horizon;let e=$o[this.effectiveTheme()]??$o.neon,t=this._sky;return e.night[0].map((n,i)=>Math.round(n+(e.day[0][i]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(c,d)=>`rgb(${c.map((u,p)=>Math.round(u+(d[p]-u)*e)).join(",")})`,n=$o[this.effectiveTheme()]??$o.neon,i=this.effectiveTheme()==="realistic"?this._realSky:null,r=c=>`rgb(${c.join(",")})`,s=Bp(this.building?.settings.backdrop)??(i?`linear-gradient(180deg, ${r(i.top)} 0%, ${r(i.horizon)} 62%, ${r(i.ground)} 100%)`:null),l=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${s?`;background:${s}`:""}`;return g`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${l}
    >
      ${this._error?g`<p class="fp3d-error">${this._error}</p>`:y} ${this.clean?y:this.renderEnergy()} ${this.renderHologram()} ${this.clean?y:this.renderWires()} ${this.clean?y:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?y:g`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?y:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderSettings()} ${this.renderRackView()} ${this.renderNote()}
      ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this.pivotMark&&!this._walk?g`<span class="fp3d-pivot" aria-hidden="true"></span>`:y}
      ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,nr())}></fp3d-mic-probe>`:y}
      ${this.showStats&&this._stats?g`<span class="fp3d-stats"
            ><b>${this._stats.fps?M(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):M(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?g`(${this._stats.busy.map(c=>M(this.hass,`stats_busy_${c}`)).join(", ")})`:y} ·
            ${M(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${M(this.hass,this._stats.low?"stats_low":"stats_full",{r:Z(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${Z(this.hass,this.syncMs,1)} ms`:""}</span
          >`:y}
    </div>`}static styles=[We,Ye,Me`
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
      /* a warning with its dismiss button and choices (#138) */
      .fp3d-alert-item {
        position: relative;
        display: flex;
        flex: 0 1 auto;
        min-width: 0;
      }
      .fp3d-alert-dismissable .fp3d-alert {
        border-radius: 12px 0 0 12px;
        padding-right: 10px;
      }
      .fp3d-alert-x {
        flex: none;
        min-width: 36px;
        min-height: 34px;
        padding: 0 10px;
        border: 0;
        border-left: 1px solid rgba(127, 127, 127, 0.25);
        border-radius: 0 12px 12px 0;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-muted);
        font: 600 13px var(--fp3d-font);
        cursor: pointer;
      }
      .fp3d-alert-menu {
        position: absolute;
        top: calc(100% + 6px);
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 150px;
        padding: 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
        z-index: 5;
      }
      .fp3d-alert-menu button {
        min-height: 40px;
        padding: 0 14px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        text-align: left;
        cursor: pointer;
      }
      .fp3d-alert-menu button:hover,
      .fp3d-alert-menu button:focus-visible {
        background: rgba(127, 127, 127, 0.18);
      }
      .fp3d-alert-menu small {
        padding: 2px 14px 6px;
        max-width: 200px;
        color: var(--fp3d-muted);
        font-size: 12px;
        white-space: normal;
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
      /* the solar card grown (#144): wider and above its neighbours, from its corner at the anchor line */
      .fp3d-holo-grown {
        width: 264px;
        z-index: 6;
      }
      .fp3d-holo-grown .fp3d-holo-body {
        animation: fp3d-holo-grow 160ms ease-out;
        transform-origin: 0 100%;
      }
      @keyframes fp3d-holo-grow {
        from {
          opacity: 0.4;
          transform: scale(0.92);
        }
      }
      .fp3d-holo-plain.fp3d-holo-grown .fp3d-holo-body {
        animation: none;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-holo-grown .fp3d-holo-body {
          animation: none;
        }
      }
      .fp3d-holo-legend {
        display: flex;
        gap: 12px;
        margin: -4px 0 6px;
        font-size: 10px;
        color: #aee9ff;
      }
      .fp3d-holo-legend-act::before,
      .fp3d-holo-legend-fc::before {
        content: "";
        display: inline-block;
        width: 12px;
        margin-right: 4px;
        vertical-align: middle;
        border-top: 2px solid #ffe27a;
      }
      .fp3d-holo-legend-fc::before {
        border-top: 2px dashed #aee9ff;
      }
      .fp3d-holo-more {
        margin: 0 0 8px;
        padding-top: 6px;
        border-top: 1px solid rgba(160, 240, 255, 0.22);
      }
      .fp3d-holo-more-row {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        color: #aee9ff;
      }
      .fp3d-holo-more-row b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-split {
        height: 4px;
        margin: 3px 0 2px;
        border-radius: 2px;
        background: #4ff6ff;
        overflow: hidden;
      }
      .fp3d-holo-split div {
        height: 100%;
        background: #5dffb0;
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
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
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
      @media ${Ke(jn)} {
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
      /* touch targets of the viewer's small controls: 44 px (#181) */
      @media (pointer: coarse) {
        .fp3d-alert-x,
        .fp3d-eye,
        .fp3d-find-close,
        .fp3d-find-icon,
        .fp3d-sheet-x,
        .fp3d-person,
        .fp3d-thumbs-fold,
        .fp3d-find-btn,
        .fp3d-central-btn,
        .fp3d-holo-media-controls button {
          min-width: 44px;
          min-height: 44px;
        }
        .fp3d-walk-btn,
        .fp3d-sheet-chip,
        .fp3d-sheet-input,
        .fp3d-alert-menu button {
          min-height: 44px;
        }
        .fp3d-find input {
          height: 44px;
        }
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Ha);function $_(o,e){let t=e.attributes.current_temperature,n=typeof t=="number"&&Number.isFinite(t)?`${Z(o,Math.round(t))} \xB0C`:"",i=!["off","unavailable","unknown"].includes(e.state);return{text:[de(o,e),n].filter(Boolean).join(" \xB7 "),on:i}}function se(o,e){return Math.abs(e)>=1e3?`${Z(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function fh(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var S_=new Set(["rug","stairwell","grid_point","worktop"]);function M_(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var mh=vn(class extends ft{constructor(o){if(super(o),o.type!==Ue.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let t=o.element.classList;for(let n of this.st)n in e||(t.remove(n),this.st.delete(n));for(let n in e){let i=!!e[n];i===this.st.has(n)||this.nt?.has(n)||(i?(t.add(n),this.st.add(n)):(t.remove(n),this.st.delete(n)))}return Re}});var gh=["show","new","sample","rename","duplicate","delete"];function T_(o,e,t){return gh.filter(n=>(n!=="show"||t!=null&&t!==e)&&(n!=="delete"||o.length>1))}function A_(o,e,t){let n=o.find(i=>i.id===t);return n?{name:n.name,onDisplays:n.id===e}:null}function _h(o,e,t){return o.id===e?`${o.name} \xB7 ${t("home_active_badge")}`:o.name}function P_(o,e,t,n){let i=T_(o,e,t),r={value:"",label:"",kind:"sep"};return[...o.map(s=>({value:s.id,label:_h(s,e,n),kind:"home"})),r,...i.filter(s=>s!=="delete").map(s=>({value:s,label:n(`home_${s}`),kind:"action"})),...i.includes("delete")?[r,{value:"delete",label:n("home_delete"),kind:"danger"}]:[]]}function E_(o,e){return o!=null&&o.trim().toLocaleLowerCase()===e.trim().toLocaleLowerCase()}function I_(o,e,t){let{open:n,cursor:i}=o,r=e.map((a,l)=>a.kind==="sep"?-1:l).filter(a=>a>=0),s=a=>r[Math.max(0,Math.min(r.length-1,r.indexOf(i)+a))]??i;return n?t==="ArrowDown"?{open:n,cursor:s(1)}:t==="ArrowUp"?{open:n,cursor:s(-1)}:t==="Home"?{open:n,cursor:r[0]??i}:t==="End"?{open:n,cursor:r[r.length-1]??i}:t==="Enter"||t===" "?e[i]&&e[i].kind!=="sep"?{open:!1,cursor:i,pick:e[i].value}:{open:!1,cursor:i}:t==="Escape"||t==="Tab"?{open:!1,cursor:i}:null:["ArrowDown","ArrowUp","Enter"," "].includes(t)?{open:!0,cursor:i}:null}var Fa=class extends ye{static properties={hass:{attribute:!1},home:{attribute:!1},_homes:{state:!0},_active:{state:!0},_open:{state:!0},_cursor:{state:!0}};loaded=!1;blurTimer;constructor(){super(),this.home=null,this._homes=null,this._active=null,this._open=!1,this._cursor=0}t(e,t){return M(this.hass,e,t)}willUpdate(e){this.hass&&(!this.loaded||e.has("home")&&e.get("home")!=null)&&(this.loaded=!0,Al(this.hass).then(t=>this.listed(t),()=>this._homes=null))}listed(e){this._homes=e.homes,this._active=e.active??null}rows(){return this._homes?P_(this._homes,this._active,this.home,e=>this.t(e)):[]}openMenu(){clearTimeout(this.blurTimer),this._cursor=Math.max(0,this.rows().findIndex(e=>e.value===this.home)),this._open=!0}onKey(e){if(!this._open&&["ArrowDown","ArrowUp","Enter"," "].includes(e.key)){e.preventDefault(),this.openMenu();return}let t=I_({open:this._open,cursor:this._cursor},this.rows(),e.key);t&&(e.key!=="Tab"&&e.preventDefault(),this._open=t.open,this._cursor=t.cursor,t.pick!==void 0&&this.pick(t.pick))}updated(e){this._open&&e.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}async run(e){try{let t=await e();return this.listed(t),t}catch(t){return await so(this.t("home_failed",{error:String(t?.message??t)}),{ok:this.t("ask_ok")}),null}}open(e){this.dispatchEvent(new CustomEvent("home-open",{detail:{home:e},bubbles:!0,composed:!0}))}async act(e){let t=this._homes?.find(i=>i.id===this.home),n=i=>ds(this.t("home_name_prompt"),i,{ok:this.t("ask_ok"),cancel:this.t("cancel")});if(e==="new"){let i=await n(this.t("home_new_name")),r=i?await this.run(()=>Pl(this.hass,i)):null;r&&this.open(r.home.id)}else if(e==="sample"){let i=await this.run(()=>Go(this.hass));i&&this.open(i.home.id)}else if(t)if(e==="show")await this.run(()=>Hl(this.hass,t.id))&&this.open(null);else if(e==="rename"){let i=await n(t.name);i&&i!==t.name&&await this.run(()=>El(this.hass,t.id,i))}else if(e==="duplicate"){let i=await n(this.t("home_copy_name",{name:t.name})),r=i?await this.run(()=>Il(this.hass,t.id,i)):null;r&&this.open(r.home.id)}else{let i=await ds(this.t("home_delete_type",{name:t.name}),"",{ok:this.t("delete"),cancel:this.t("cancel"),danger:!0});if(i===null)return;if(!E_(i,t.name)){await so(this.t("home_delete_mismatch",{name:t.name}),{ok:this.t("ask_ok")});return}await this.run(()=>Rl(this.hass,t.id))&&this.open(null)}else return}pick(e){this._open=!1,gh.includes(e)?this.act(e):e&&e===this.home?this.dispatchEvent(new CustomEvent("home-reload",{detail:{home:e},bubbles:!0,composed:!0})):e&&this.open(e===this._active?null:e)}render(){let e=this._homes;if(!e)return y;let t=A_(e,this._active,this.home),n=e.find(r=>r.id===this.home),i=r=>this.t(r);return g`${t?g`<span class="chip ${t.onDisplays?"live":"off"}" title=${t.onDisplays?this.t("home_active_badge"):this.t("home_not_on_displays")}
            >${t.onDisplays?g`<b class="live" aria-hidden="true"></b>`:y}${t.name}<small>${t.onDisplays?this.t("home_live"):this.t("home_not_on_displays")}</small></span
          >`:y}<span class="menu"
        ><button
          class="pick"
          aria-haspopup="listbox"
          aria-expanded=${this._open}
          aria-label=${this.t("home")}
          title=${this.t("home")}
          @click=${()=>this._open?this._open=!1:this.openMenu()}
          @keydown=${r=>this.onKey(r)}
          @blur=${()=>this.blurTimer=setTimeout(()=>this._open=!1,150)}
        >
          ${n?_h(n,this._active,i):this.t("home")}<span class="caret" aria-hidden="true">▾</span></button
        >${this._open?g`<ul role="listbox" aria-label=${this.t("home")} @mousedown=${r=>r.preventDefault()}>
              ${this.rows().map((r,s)=>r.kind==="sep"?g`<li role="separator" class="sep"></li>`:g`<li
                      role="option"
                      aria-selected=${r.value===this.home}
                      class=${mh({cursor:s===this._cursor,action:r.kind==="action",danger:r.kind==="danger",chosen:r.value===this.home})}
                      @mouseenter=${()=>this._cursor=s}
                      @click=${()=>this.pick(r.value)}
                    >
                      ${r.label}
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
    /* the open home is the one on the displays (#160): a steady marker while it is edited */
    .chip.live {
      border-color: rgba(229, 57, 53, 0.7);
    }
    .chip .live {
      align-self: center;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #e53935;
      flex: none;
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
    li.danger {
      color: var(--error-color, #db4437);
    }
    li.sep {
      height: 1px;
      padding: 0;
      margin: 4px 6px;
      background: var(--fp3d-line, rgba(127, 127, 127, 0.4));
      cursor: default;
    }
  `};customElements.get("fp3d-home-switcher")||customElements.define("fp3d-home-switcher",Fa);var R_=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function bh(o){let e=document.createElement("style");e.textContent=R_;let t=document.createElement("div");t.className="fp3d-loclab",document.body.append(e,t);let n=null,i="",r=!0,s=async(c,d={})=>{let u=o().hass;if(u){try{n=await u.callWS({type:"home_3d/locate/rec",action:c,...d}),i=""}catch(p){i=p.message??String(p)}a()}},a=()=>{let c=o().building,d=n,u=d?.mark?.room??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Ortung \xB7 Aufnahme (Labor)</span><span>${r?"\u25BE":"\u25B8"}</span></h4>`;if(!r){t.innerHTML=p;return}let h=(d?.devices??[]).map(b=>{let m=b.t?Math.round(Date.now()/1e3-b.t):null;return`<div>\u231A ${Mt(b.title)}: ${m===null?"<small>noch nicht geh\xF6rt</small>":`${b.rssi} dBm \xB7 ${Mt(b.scanner??"")} <small>vor ${m} s</small>`}</div>`}).join(""),_=(c?.floors??[]).map(b=>`<div class="fl">${Mt(b.name)}</div>`+b.rooms.map(m=>`<button data-room="${Mt(m.id)}" data-name="${Mt(m.name)}" class="${u===m.id?"on":""}">${Mt(m.name)}</button>`).join("")).join("");t.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Ortung einrichten</button></div>
      <div>${d?.running?`<button class="rec" data-a="stop">\u25A0 Stopp</button> <small>${Math.floor(d.seconds/60)}:${String(d.seconds%60).padStart(2,"0")} \xB7 ${d.lines} Zeilen</small>`:'<button data-a="start">\u25CF Aufnahme starten</button>'}</div>
      ${i?`<div style="color:#ff8fa3">${Mt(i)}</div>`:""}
      ${h||(d?"<div><small>Keine iPhone/Watch-Schl\xFCssel (Private BLE Device) in HA \u2013 alles wird trotzdem aufgezeichnet.</small></div>":"")}
      ${d?.mark?`<div style="margin-top:6px">\u23F1 seit <b>${H_(Date.now()/1e3-d.mark.t)}</b> in <b>${Mt(d.mark.name)}</b> ${Date.now()/1e3-d.mark.t>=120?"\u2713 2 Min. geschafft":""}</div>`:""}
      <div class="fl">Ich bin jetzt in \u2026</div>
      <button data-room="" class="${u?"":"on"}">\u{1F6B6} unterwegs / nirgends</button>
      ${_}`};t.addEventListener("click",c=>{let d=c.target.closest("button,h4");if(!d)return;let u=d.dataset.a;if(u==="toggle")r=!r,a();else if(u==="start")s("start",{note:"lab walk"});else if(u==="stop")s("stop");else if(u==="setup"){let{hass:p,building:h}=o();p&&h&&ni().then(_=>_.openLocateSetup(p,h,()=>o().hass))}else d.dataset.room!==void 0&&s("mark",d.dataset.room?{room:d.dataset.room,name:d.dataset.name}:{room:null})}),s("status");let l=window.setInterval(()=>{s("status")},1e3);return()=>{window.clearInterval(l),t.remove(),e.remove()}}function H_(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Mt(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var F_=Ce("home-3d-timetravel",()=>"e5cb0df13a77"),Cn=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),F_().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("Home 3D: time travel failed to load",t),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};function rr(o,e,t=new Date){if(!o||o==="off")return!1;if(o==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let i=Number(n[1])*60+Number(n[2]),r=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return i<=r?s>=i&&s<r:s>=i||s<r}var C_=new Set(["0","off","false","no"]);function Ca(o,e,t){let n=new URLSearchParams(o).get("tablet");return n!==null?!C_.has(n.trim().toLowerCase()):!!e&&!!t?.includes(e)}var z_=120;function wh(o,e){let t=r=>typeof r=="number"&&Number.isFinite(r)&&r>=0,n=new URLSearchParams(o).get("idle"),i=n!==null&&n.trim()!==""?Number(n):null;return t(i)?i:t(e)?e:z_}var ir=class{timer;seconds=0;onIdle;constructor(e){this.onIdle=e}arm(e){this.seconds=e>0?e:0,this.touch()}touch(){clearTimeout(this.timer),this.timer=this.seconds>0?setTimeout(this.onIdle,this.seconds*1e3):void 0}stop(){clearTimeout(this.timer),this.timer=void 0}};var sr=class{past=[];future=[];home=void 0;doc=null;run=null;now;constructor(e={}){this.now=e.now??Date.now}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}adopt(e,t){let n=t===this.home&&e===this.doc;return n||this.clear(),this.home=t,this.doc=e,n}record(e,t,n,i=null){this.adopt(e,n),this.push(e,i),this.track(t)}track(e){this.doc=e}push(e,t=null,n=500){let i=this.now(),r=t!==null&&this.run?.key===t&&i-this.run.at<=n&&this.past.length>0;this.run=t===null?null:{key:t,at:i},this.future=[],!r&&(this.past.push(JSON.stringify(e)),this.past.length>100&&this.past.shift())}undo(e){let t=this.past.pop();return t?(this.run=null,this.future.push(JSON.stringify(e)),this.doc=JSON.parse(t)):null}redo(e){let t=this.future.pop();return t?(this.run=null,this.past.push(JSON.stringify(e)),this.doc=JSON.parse(t)):null}clear(){this.past=[],this.future=[],this.run=null}};var an={solar:3600,batteryCharge:1200,house:2e3},Tt={soc:72,room:20.5,target:21,tariff:.245,car:78},he=o=>!!o&&o!=="none"&&o.includes("."),O_=o=>o.slice(0,o.indexOf(".")),D_=[[/hob|oven|cooker|kettle/,1500],[/wallbox|charger|zappi/,1400],[/washing|washer|dishwasher/,450],[/fridge|freezer|kitchen_tall/,110],[/tv|monitor|screen/,95],[/pc|computer|desk/,120],[/boiler|heat_pump/,90],[/router|network/,15]],xh=o=>D_.find(([e])=>e.test(o))?.[1]??60,L_={device_class:"power",unit_of_measurement:"W",state_class:"measurement"},za={device_class:"battery",unit_of_measurement:"%"},kh={device_class:"temperature",unit_of_measurement:"\xB0C"};function W_(o){let e=o.slice(o.indexOf(".")+1).replace(/_/g," ");return e.charAt(0).toUpperCase()+e.slice(1)}var Oa=class{out=new Map;lights=0;media=0;put(e,t,n={}){this.out.has(e)||this.out.set(e,{entity_id:e,state:String(t),attributes:{friendly_name:W_(e),...n}})}watts(e,t){this.put(e,Math.round(t),L_)}main(e,t){let n=t??"";switch(O_(e)){case"light":{let i=this.lights++%3!==2;this.put(e,i?"on":"off",{supported_color_modes:["color_temp"],...i?{brightness:200,color_mode:"color_temp",color_temp_kelvin:2700}:{}});return}case"climate":case"water_heater":this.put(e,"heat",{hvac_modes:["off","heat"],hvac_action:"heating",current_temperature:Tt.room,temperature:Tt.target,min_temp:5,max_temp:30});return;case"media_player":{let i=/tv/.test(n),r=i||this.media++===0;this.put(e,r?"playing":"idle",{device_class:i?"tv":"speaker",...r?{media_title:"Demo",volume_level:.3}:{}});return}case"switch":case"input_boolean":case"fan":this.put(e,"on");return;case"binary_sensor":this.put(e,"off",/smoke/.test(n)?{device_class:"smoke"}:/water|leak/.test(n)?{device_class:"moisture"}:{});return;case"cover":this.put(e,"open",{current_position:100});return;case"lock":this.put(e,"locked");return;case"camera":this.put(e,"idle");return;case"vacuum":this.put(e,"docked");return;case"sensor":this.sensor(e,n);return}}sensor(e,t){/power|_w$/.test(e)?this.watts(e,xh(t||e)):/temp/.test(e)||t&&mn(t)?this.put(e,Tt.room,kh):/humid/.test(e)?this.put(e,50,{device_class:"humidity",unit_of_measurement:"%"}):/battery|soc|level/.test(e)||/car|leaf|vehicle/.test(t)?this.put(e,Tt.car,za):this.put(e,"ok")}energy(e,t,n){let i=oe(e.type);i==="meter"?he(e.export)?(this.watts(e.export,Math.max(0,-t.grid)),he(e.power)&&this.watts(e.power,Math.max(0,t.grid))):he(e.power)&&this.watts(e.power,n.energy.grid_invert?-t.grid:t.grid):i==="inverter"||i==="solar"?he(e.power)&&this.watts(e.power,t.solar):i==="home_battery"&&(he(e.charge)?(this.watts(e.charge,-t.battery),he(e.power)&&this.watts(e.power,0)):he(e.power)&&this.watts(e.power,n.energy.battery_invert?-t.battery:t.battery))}},vh=new WeakMap;function N_(o){let e=vh.get(o);if(e)return e;let t=new Oa,n=o.energy,i=o.floors.flatMap(u=>u.furniture),s=he(n.battery)||i.some(u=>oe(u.type)==="home_battery"&&(he(u.power)||he(u.charge)))?-an.batteryCharge:0,a=an.house-an.solar-s;he(n.grid)&&t.watts(n.grid,n.grid_invert?-a:a),he(n.solar)&&t.watts(n.solar,an.solar),he(n.battery)&&t.watts(n.battery,n.battery_invert?-s:s),he(n.battery_soc)&&t.put(n.battery_soc,Tt.soc,za),he(n.consumption)&&t.watts(n.consumption,an.house),he(n.tariff)&&t.put(n.tariff,Tt.tariff,{unit_of_measurement:"GBP/kWh"});let l=i.filter(u=>(oe(u.type)==="inverter"||oe(u.type)==="solar")&&he(u.power)).length;for(let u of i)t.energy(u,{grid:a,battery:s,solar:an.solar/Math.max(1,l)},o);let c=(o.settings.roof?.solar??[]).filter(u=>he(u.entity)),d=c.reduce((u,p)=>u+ko(p),0)||1;for(let u of c)t.watts(u.entity,an.solar*ko(u)/d);for(let u of i){he(u.entity)&&t.main(u.entity,u.type),he(u.power)&&t.watts(u.power,xh(u.type));for(let p of[u.state_entity,u.state_entity2,u.extra])he(p)&&t.main(p,u.type);he(u.heat_sensor)&&t.put(u.heat_sensor,"on",{device_class:"heat"}),he(u.soc)&&t.put(u.soc,Tt.soc,za),he(u.room_sensor)&&t.put(u.room_sensor,Tt.room,kh)}for(let u of o.floors)for(let p of u.placements)he(p.entity_id)&&t.main(p.entity_id,null);return vh.set(o,t.out),t.out}var yh=new WeakMap,Da=new WeakMap;function V_(o,e){let t=Da.get(o);return!!t&&o.states[e]===t.get(e)}function $h(o){return!!o&&Da.has(o)}function ar(o,e){if(!e?.settings?.demo)return o;let t=yh.get(o);if(t?.building===e)return t.out;let n=N_(e),i=o.states;for(let[s,a]of n){let l=o.states[s];l&&l.state!=="unavailable"&&l.state!=="unknown"||(i===o.states&&(i={...o.states}),i[s]=a)}let r=o;return i!==o.states&&(r={...o,states:i},r.callService=(s,a,l)=>B_(r,l)?Promise.resolve(void 0):o.callService(s,a,l),Da.set(r,n)),yh.set(o,{building:e,out:r}),r}function B_(o,e){let t=e?.entity_id,n=typeof t=="string"?[t]:Array.isArray(t)?t.filter(i=>typeof i=="string"):[];return n.length>0&&n.every(i=>V_(o,i))}var U_={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"};function Sh(o){let e=/^#settings(?:\/([a-z_]+))?(?:\/([^/?#]+))?\/?$/.exec(o);return e?{section:e[1]??null,id:e[2]?decodeURIComponent(e[2]):null}:null}var q_=["pointerdown","keydown","wheel"],Y={get(o){try{return localStorage.getItem(`home3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`home3d.${o}`,e)}catch{}}},La=class extends ye{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_editorError:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_plan2d:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0},_tablet:{state:!0},_settingsReady:{state:!0},_settingsError:{state:!0},_settingsAt:{state:!0}};lastView=null;data=new _n(this);undoHistory=new sr;locateLab=null;tt=new Cn(this);ttLinked=!1;idle=new ir(()=>this.returnHome());onTouch=()=>this.idle.touch();idleSeconds=0;touchesHeard=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._editorError=null,this._floorId=null,this._roomId=null,this.readPrefs(),this._furnish=!1,this._selFurniture=null,this._selDevice=null,this._cameraWall=!1,this._optsOpen=!1,this._pinHover=!1,this._micProbe=!1,this._tablet=!1,this._settingsReady=!!customElements.get("fp3d-settings-page"),this._settingsError=null;let e=Sh(location.hash);this._settingsAt=e??{section:null,id:null},e&&(this._mode="settings")}readPrefs(){this._wallMode=Y.get("walls")==="cut"?"cut":"auto",this._explode=Y.get("explode")!=="0";let e=new URLSearchParams(location.search).get("view");this._plan2d=e==="2d"||e!=="3d"&&Y.get("plan2d")==="1",this._keepRoof=Y.get("roof")==="1";let t=Y.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=Y.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let n=Y.get("markers");this._markers=n==="none"||n==="all"||n==="room"?n:"important";let i=Y.get("pinSize");this._pinSize=i==="small"||i==="large"?i:"normal";let r=Y.get("heat");this._heat=r==="temperature"||r==="humidity"||r==="co2"||r==="values"?r:"none",this._theme=Pn(Y.get("theme"));let s=Y.get("clock");this._clock=s==="tl"||s==="tr"||s==="bl"||s==="br"?s:"off";let a=Y.get("accent");this._accent=a&&/^#[0-9a-f]{6}$/i.test(a)?a:null;let l=Y.get("floor_stack");this._floorStack=l==="stacked"||l==="single"?l:"dim",this._roomNames=Y.get("room_names")!=="0",this._controlsRight=Y.get("controls")==="right",this._keepView=Y.get("keep_view")==="1",this._angleLock=Y.get("angle_lock")==="1",this._trail=Y.get("trail")==="1",this._clean=Y.get("clean")==="1",this._navWrap=Y.get("nav_wrap")==="1",this._weather=Y.get("weather")!=="0",this._director=Ea(),this._voiceHere=Sa(),this._screen=Ma()}t(e,t){return M(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.homeRestored||this.restoreHome(),this.data.setHass(this.hass),this.tt.session?.setLive(this.hass)),e.has("hass")&&this.hass&&!xn(this.hass.language)&&pi(this.hass.language).then(()=>this.requestUpdate());let t=this.data.building;this.followTablet(t),t&&!this.data.canEdit&&this.data.home!==void 0&&this.openHome(void 0),t!==this.seenBuilding&&this.dropStaleSelection(t)}homeRestored=!1;get homeKey(){return`home.${this.hass?.user?.id??""}`}restoreHome(){this.homeRestored=!0;let e=Y.get(this.homeKey);!e||Ca(location.search,this.hass?.user?.id,void 0)||(this.data.onHomeGone=()=>Y.set(this.homeKey,""),this.data.openRemembered(e))}openHome(e){Y.set(this.homeKey,e??""),this.data.setHome(e)}seenBuilding=null;seenHome=null;dropStaleSelection(e){if(this.seenBuilding=e,!e)return;let t=this.data.homeId;this.seenHome!==null&&t!==this.seenHome&&(this._floorId=null,this._roomId=null,this._selFurniture=null,this._selDevice=null),this.seenHome=t,this._floorId&&!e.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null),this._roomId&&!e.floors.some(n=>be(n).some(i=>i.id===this._roomId))&&(this._roomId=null),this._selFurniture&&!e.floors.some(n=>n.furniture.some(i=>i.id===this._selFurniture))&&(this._selFurniture=null)}followTablet(e){let t=location.search,n=Ca(t,this.hass?.user?.id,e?.settings.tablet_users);n&&this._mode!=="view"&&this.setMode("view"),n&&this.data.home!==void 0&&this.data.setHome(void 0),n!==this._tablet&&(this._tablet=n,this._optsOpen=!1);let i=n?wh(t,e?.settings.tablet_idle):0;(i!==this.idleSeconds||n!==this.touchesHeard)&&(this.listenTouches(n),this.idleSeconds=i,this.idle.arm(i))}listenTouches(e){if(e!==this.touchesHeard){this.touchesHeard=e;for(let t of q_)e?window.addEventListener(t,this.onTouch,{capture:!0,passive:!0}):window.removeEventListener(t,this.onTouch,{capture:!0});e||(this.idle.stop(),this.idleSeconds=0)}}returnHome(){this.tt.stop(),this._roomId=null,this._floorId=null,this._showOpen=!1,this._optsOpen=!1,this._cameraWall=!1,this.view3d()?.resetView()}get canEdit(){return this.data.canEdit}async loadSample(){try{let e=await Go(this.hass);this.openHome(e.home.id)}catch(e){await so(this.t("home_failed",{error:String(e?.message??e)}),{ok:this.t("ask_ok")})}}setMode(e){e===this._mode||this._tablet&&e!=="view"||(this._mode==="view"&&(this.lastView=this.view3d()?.currentView()??this.lastView),this.tt.stop(),this._editorError=null,this._optsOpen=!1,this._showOpen=!1,e==="view"&&this.data.flush(),this._mode==="settings"&&e!=="settings"&&this.setAddress(""),e==="settings"&&this.setAddress(this.settingsLink(this._settingsAt.section,this._settingsAt.id)),this._mode=e)}settingsLink(e,t){return`#settings${e?`/${e}${t?`/${encodeURIComponent(t)}`:""}`:""}`}setAddress(e){try{location.hash!==e&&history.replaceState(history.state,"",`${location.pathname}${location.search}${e}`)}catch{}}openSettings(e=null,t=null){this._tablet||(this._settingsAt={section:e,id:t},this._mode==="settings"?this.setAddress(this.settingsLink(e,t)):this.setMode("settings"))}onOpenSettings=e=>{let t=e.detail??{};e.stopPropagation(),e.preventDefault(),this.openSettings(t.section??null,t.id??null)};onHash=()=>{let e=Sh(location.hash);e&&this.openSettings(e.section,e.id)};settingsAction(e){let{action:t}=e.detail;if(t==="extensions")this.setMode("extensions");else if(t==="editor")this.setMode("editor");else if(t==="mic_probe")St().then(()=>this._micProbe=!0).catch(()=>{});else if(t==="locate"&&this.hass&&this.data.building){let n=this.data.building;ni().then(i=>i.openLocateSetup(this.hass,n,()=>this.hass,r=>{let s=this.data.building;s&&this.editPlan({...s,settings:{...s.settings,person_look:r==="figure"?null:r}})}))}}onPlanChange(e){e.preventDefault(),this.data.update(e.detail.change)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,Y.set("walls",e)}setKeepRoof(e){this._keepRoof=e,Y.set("roof",e?"1":"0")}setPlan2d(e){this._plan2d=e,Y.set("plan2d",e?"1":"0")}setExplode(e){this._explode=e,Y.set("explode",e?"1":"0")}setQuality(e){this._quality=e,Y.set("quality",e)}editPlan(e,t=null){let n=this.data.building;n&&this.undoHistory.record(n,e,this.data.homeId,t),this.data.edit(e)}editFurniture(e,t,n=null){let i=this.data.building;if(!i)return;let r=structuredClone(i);for(let s of r.floors){let a=s.furniture.find(l=>l.id===e);a&&t(a,s)}this.editPlan(r,n)}editDevice(e,t,n=null){let i=this.data.building;if(!i)return;let r=structuredClone(i);for(let s of r.floors){let a=s.placements.find(l=>l.entity_id===e);a&&t(a,s)}this.editPlan(r,n)}moveDevice(e){let{id:t,x:n,z:i}=e.detail;this.editDevice(t,(r,s)=>{let[a,l]=Ta(s,r.x,r.z,n,i);Object.assign(r,{x:a,z:l})},`move:${t}`)}turnStep(){return B(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.placements=i.placements.filter(r=>r.entity_id!==e);this.editPlan(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(b=>b.placements.some(m=>m.entity_id===e)),i=n?.placements.find(b=>b.entity_id===e);if(!n||!i)return y;let r=B(e),s=r==="light",a=r==="camera",l=i.mount==="ceiling",c=r?bn(r,n.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,d=Oo(this.hass,this.data.building?.settings.units),u=d==="imperial",p=b=>u?mr(b):String(Math.round(b*100)/100),h=b=>u?gr(b,"imperial"):parseFloat(b.replace(",",".")),_=(b,m,f,v,w,x,A=!1)=>g`<label class="fp3d-size" title=${A?Ln(b,d):b}
        >${A?Ln(b,d):b}
        <input
          type=${A&&u?"text":"number"}
          inputmode="decimal"
          step=${f}
          min=${v}
          max=${w}
          .value=${A?p(m):String(Math.round(m*100)/100)}
          @change=${E=>{let D=A?h(E.target.value):parseFloat(E.target.value.replace(",","."));D!==null&&Number.isFinite(D)&&x(Math.min(w,Math.max(v,D)))}}
        />
      </label>`;return g`${s?g`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${b=>this.editDevice(e,m=>Object.assign(m,{mount:b.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(b=>g`<option value=${b} ?selected=${b===(i.mount??"ceiling")}>${this.t(`lamp_${b}`)}</option>`)}
          </select>`:y}
      ${a?g`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${b=>this.editDevice(e,m=>Object.assign(m,{mount:b.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${_(this.t("camera_fov_short"),i.fov??(l?360:90),5,10,360,b=>this.editDevice(e,m=>m.fov=b))}
            ${_(this.t("camera_reach_short"),i.reach??(l?3:4.5),.5,.5,50,b=>this.editDevice(e,m=>m.reach=b),!0)}
            ${_(this.t("camera_tilt_short"),i.tilt??(l?65:20),5,0,90,b=>this.editDevice(e,m=>m.tilt=b))}`:y}
      <label class="fp3d-size" title=${Ln(this.t("marker_height"),d)}
        >${this.t("size_short_h")}
        <input
          type=${u?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${p(i.y??c)}
          @change=${b=>{let m=h(b.target.value);m!==null&&Number.isFinite(m)&&m>=0&&this.editDevice(e,f=>f.y=Math.round(m*1e3)/1e3)}}
        />
      </label>
      ${i.y!==null?g`<button class="fp3d-chip" @click=${()=>this.editDevice(e,b=>b.y=null)}>${this.t("height_auto")}</button>`:y}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?le(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:i}=e.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(s,a)=>{let[l,c]=Ta(a,s.x,s.z,n,i);Object.assign(s,{x:l,z:c});let d=jp(a,s,r);d&&Object.assign(s,d)},`move:${t}`)}renderSizeFields(e){let t=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!t)return y;let n=Oo(this.hass,this.data.building?.settings.units)==="imperial",i=l=>n?mr(l):String(Math.round(l*100)/100),r=l=>n?gr(l,"imperial"):parseFloat(l.replace(",",".")),s=(l,c)=>g`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${c}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${i(t[l])}
        @change=${d=>{let u=r(d.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,p=>p[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,a=this.data.building?.floors.find(l=>l.furniture.some(c=>c.id===e));return g`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&ic(t)?g`<label class="fp3d-size" title=${Ln(this.t("mount_height"),Oo(this.hass,this.data.building?.settings.units))}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${i(t.mount_y??ce(a,t))}
              @change=${l=>{let c=r(l.target.value)??NaN;Number.isFinite(c)&&c>=0&&this.editFurniture(e,d=>d.mount_y=Math.round(c*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?g`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:y}`:y}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.furniture=i.furniture.filter(r=>r.id!==e);this.editPlan(n),this._selFurniture=null}rememberStartView(e=!1){let t=this.data.building;if(!t)return;let n=e?null:this.view3d()?.currentView();!e&&!n||this.editPlan({...t,settings:{...t.settings,start_view:n??null}})}view3d(){return this.renderRoot?.querySelector("fp3d-view3d")}renderFollow(e,t){let n=this._theme===e,i=this.t(`theme_${lt(e,this.hass)}`);return g`<button
      class="fp3d-chip fp3d-follow"
      role="switch"
      aria-checked=${n}
      @click=${()=>{this._theme=Lu(this._theme,e,!n,this.hass),Y.set("theme",this._theme)}}
    >
      <span class="fp3d-follow-box" aria-hidden="true">${n?"\u2713":""}</span>${this.t(t)}
      <small>${this.t("follow_now",{look:i})}</small>
    </button>`}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;!t||!n||!this.hass||(this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(i,r)=>M(this.hass,i,r)}))}updated(){if(this.toggleAttribute("light",this._mode==="view"&&yn(lt(this._theme,this.hass))),!this.locateLab&&this.hass?.user?.is_admin&&this.data.building&&gs()&&(this.locateLab=bh(()=>({hass:this.hass,building:this.data.building}))),this.ttLinked||!this.data.building||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&this.toggleTimeTravel(e)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("hashchange",this.onHash),window.addEventListener("location-changed",this.onHash),this.addEventListener("open-settings",this.onOpenSettings)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("hashchange",this.onHash),window.removeEventListener("location-changed",this.onHash),this.removeEventListener("open-settings",this.onOpenSettings),this.listenTouches(!1),this.tt.stop(),this.locateLab?.(),this.locateLab=null}render(){if(this.hass&&!xn(this.hass.language))return y;let e=this.data.building,t=this.data.saveState;return g`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this.accentStyle()}>
        ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,nr())}></fp3d-mic-probe>`:y}
        ${this._clean&&this._mode==="view"?y:this._tablet?this.renderTabletHeader():g`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>Home 3D</h1>
          ${this.canEdit&&this.hass?g`<fp3d-home-switcher
                .hass=${this.hass}
                .home=${this.data.homeId}
                @home-reload=${()=>{this.data.reopen()}}
                @home-open=${n=>this.openHome(n.detail.home??void 0)}
              ></fp3d-home-switcher>`:y}
          <div class="fp3d-seg" role="group" aria-label=${this.t("modes")}>
            <button aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
            ${this.canEdit?g`<button aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                  <button class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                    ✦ ${this.t("ext_tab")}
                  </button>`:y}
            <button class="fp3d-tab-settings" aria-pressed=${this._mode==="settings"} aria-label=${this.t("settings")} title=${this.t("settings")} @click=${()=>this.openSettings()}>
              ⚙ <span class="fp3d-tab-word">${this.t("settings")}</span>
            </button>
          </div>
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
                ${ta.map(n=>g`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,Y.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${n=>{this._accent=n.target.value,Y.set("accent",this._accent)}}
                  />
                  ${this._accent?g`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,Y.set("accent","")}}
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
                ${["off","tl","tr","bl","br"].map(n=>g`<button aria-pressed=${this._clock===n} title=${this.t(`clock_${n}`)} aria-label=${this.t(`clock_${n}`)} @click=${()=>{this._clock=n,Y.set("clock",n)}}>
                      ${n==="off"?this.t("clock_off"):U_[n]}
                    </button>`)}
              </div>
              </section>
              <section class="fp3d-opt-group">
              <h3>${this.t("markers")}</h3>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(n=>g`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,Y.set("markers",n)}}
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
                      @click=${()=>{this._pinSize=n,Y.set("pinSize",n)}}
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
                      @click=${()=>{this._controlsRight=n,Y.set("controls",n?"right":"left")}}
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
                  @click=${()=>{this._keepView=!this._keepView,Y.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,Y.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,Y.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </section>
              ${this.renderAllSettings("look")}
              </div>`:y}
          ${this._mode==="editor"&&t!=="idle"?g`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:y}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?this.renderCleanNotice():this.renderNotices()}
        ${this.data.error&&!e?g`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:y}
        ${!e&&!this.data.error?g`<p class="fp3d-message">${this.t("loading")}</p>`:y}
        ${e?this._mode==="editor"&&this.canEdit?this.renderEditor(e):this._mode==="extensions"&&this.canEdit?this.renderExtensions():this._mode==="settings"&&!this._tablet?this.renderSettings(e):this.renderView(e):y}
      </div>
    `}renderTabletHeader(){return g`<header class="fp3d-header fp3d-tablet-head"><h1>${this.data.homeName||"Home 3D"}</h1></header>`}shownAccent(){return Di(this._theme,this._accent,this.hass,e=>getComputedStyle(this).getPropertyValue(e))}accentStyle(){let e=this.shownAccent();return e?`--fp3d-accent:${e};--fp3d-accent-text:${Oi(e)}`:""}renderNotices(){let e=this.data,t=[],n=this.renderUpdateNotice();if(n&&t.push(n),e.needsRestart&&e.versionGap!=="frontend"&&t.push(g`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(g`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.canEdit&&!this._tablet){let i=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(g`<div class="fp3d-notice">
          <span>${e.conflict?this.t("save_conflict"):this.t(e.draft.home?"draft_found":"draft_found_old",{time:i})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>{e.restoreDraft()}}>${this.t(e.conflict?"draft_restore_conflict":"draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?g`<div class="fp3d-notices">${t}</div>`:y}renderCleanNotice(){let e=this.renderUpdateNotice();return e?g`<div class="fp3d-notices">${e}</div>`:y}renderUpdateNotice(){let e=this.data,t=e.updateNotice;if(!t)return null;let n=e.backendVersion!==e.frontendVersion?this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"}):this.t("update_ready");return g`<div class="fp3d-notice fp3d-notice-warn fp3d-notice-update" role="status">
      <span>${n}${t==="ready"?y:g` ${this.t(t==="saving"?"update_saving":"update_unsaved")}`}</span>
      <button class="fp3d-btn" ?disabled=${t==="unsaved"} @click=${()=>{e.reloadWhenSaved()}}>${this.t("reload_page")}</button>
    </div>`}editorPending(){return this._editorReady?null:this._editorError?g`<div class="fp3d-empty"><p>${this.t("load_error")}: ${this._editorError}</p></div>`:(jr().then(()=>this._editorReady=!0,e=>this._editorError=String(e)),g`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderExtensions(){this.data.loadLibrary();let e=this.editorPending();return e||g`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .canEdit=${this.data.canEdit}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${t=>this.editPlan(t.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`}renderAllSettings(e,t=null){return g`<button class="fp3d-chip fp3d-all-settings" @click=${()=>this.openSettings(e,t)}>⚙ ${this.t("all_settings")} ›</button>`}renderSettings(e){return this._settingsReady?g`<fp3d-settings-page
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .canEdit=${this.data.canEdit}
      .packs=${this.data.packs}
      .t=${this.translator}
      .section=${this._settingsAt.section}
      .focusId=${this._settingsAt.id}
      .saveState=${this.data.saveState}
      .homeName=${this.data.homeName??""}
      .lastView=${this.lastView}
      .loadEditor=${jr}
      @settings-edit=${t=>this.editPlan(t.detail.building,t.detail.key)}
      @device-change=${()=>this.readPrefs()}
      @settings-action=${this.settingsAction}
      @settings-nav=${t=>this.setAddress(this.settingsLink(t.detail.section,t.detail.id))}
    ></fp3d-settings-page>`:this._settingsError?g`<div class="fp3d-empty"><p>${this.t("load_error")}: ${this._settingsError}</p></div>`:(hc().then(()=>this._settingsReady=!0,t=>this._settingsError=String(t)),g`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}translator=(e,t)=>M(this.hass,e,t);renderEditor(e){this.data.loadLibrary();let t=this.editorPending();return t||g`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .canEdit=${this.data.canEdit}
      .home=${this.data.homeId}
      .homeName=${this.data.homeName}
      .history=${this.undoHistory}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=Ea()}
      @voice-here=${()=>{this._voiceHere=Sa(),this._screen=Ma()}}
      @mic-probe=${()=>St().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${n=>this.data.edit(n.detail.building)}
    ></fp3d-editor>`}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(a=>a.rooms.length))return g`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <button class="fp3d-btn" @click=${()=>{this.loadSample()}}>${this.t("home_sample")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:y}
      </div>`;let t=e.floors.find(a=>a.id===this._floorId),n=t?[t]:e.floors,i=this.tt.active,r=ar(this.tt.hass(this.hass),e),s=g`<div class="fp3d-seg" role="group" aria-label=${this.t("plan_view")}>
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
        ${(this._tablet?[]:n).flatMap(a=>[n.length>1&&be(a).some(l=>l.name.trim())?g`<span class="fp3d-nav-floor">${a.name}</span>`:y,...be(a).filter((l,c,d)=>l.name.trim()&&!(l.outdoor&&d.findIndex(u=>u.outdoor&&u.area_id===l.area_id&&u.name===l.name)<c)).map(l=>g`<button
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
          @click=${()=>{this._navWrap=!this._navWrap,Y.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>`}
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${i?"fp3d-tt":""}">
        <fp3d-view3d
          class="fp3d-body"
          .canEdit=${this.data.canEdit&&!this._tablet}
          .noSettings=${this._tablet}
          .home=${this.data.homeId}
          .pivotMark=${this._pinHover}
          .hass=${r}
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
          .cameraWall=${this._cameraWall&&!i}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,Y.set("clean",this._clean?"1":"0")}}
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
          ?furnish=${this._furnish&&!i}
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
          @plan-change=${this.onPlanChange}
        ></fp3d-view3d>
        ${this._roomId?g`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${a=>this.view3d()?.lookThrough(a.detail.entity)}
              .hass=${r}
              ?readOnly=${i}
              ?noLook=${this._plan2d}
              .room=${e.floors.flatMap(a=>be(a)).find(a=>a.id===this._roomId)??null}
              .floor=${e.floors.find(a=>be(a).some(l=>l.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${wn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${a=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,a.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${$h(r)?g`<div class="fp3d-demo-chip" title=${this.t("demo_hint")}>${this.t("demo_chip")}</div>`:y}
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
                      @click=${()=>{this._floorStack=a,Y.set("floor_stack",a)}}
                    >
                      ${this.t(`floor_stack_short_${a}`)}
                    </button>`)}
              </div>`:y}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(a=>g`<button
                  aria-pressed=${this._heat===a}
                  @click=${()=>{this._heat=a,Y.set("heat",a)}}
                >
                  ${this.t(a==="none"?"heat_off":`heat_short_${a}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,Y.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,Y.set("trail",this._trail?"1":"0")}}
          >
            ${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,Y.set("weather",this._weather?"1":"0")}}
          >
            ${this.t("weather_short")}
          </button>
          ${this._tablet?y:this.renderAllSettings("look","walls")}
                  </div>`:y}
          </div>
          ${this._tablet?y:g`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${i} title=${this.t("tt_hint")} aria-label=${this.t("tt_chip")} @click=${()=>this.toggleTimeTravel()}>
            ⏪ <span class="fp3d-tt-label">${this.t("tt_chip")}</span>
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
    `}static styles=[We,Ye,Me`
      .fp3d-all-settings {
        justify-self: start;
        align-self: flex-start;
        color: var(--fp3d-accent);
        box-shadow: none;
        background: none;
        padding-left: 4px;
      }
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
      /* phones: version and grow move with it; the Settings tab keeps only its gear */
      @media (max-width: 700px) {
        .fp3d-tab-word {
          display: none;
        }
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
      @media ${Ke(jn)} {
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
      /* touch screens, a tablet as much as a phone (#181): 44 px, and room for three rows of floor chips */
      @media (pointer: coarse), ${Ke(jn)} {
        .fp3d-opts-btn,
        .fp3d-quality button,
        .fp3d-nav .fp3d-nav-toggle {
          min-width: 44px;
        }
        .fp3d-opts-btn {
          height: 44px;
        }
        .fp3d-header .fp3d-seg button,
        .fp3d-quality button,
        .fp3d-overlay .fp3d-chip,
        .fp3d-overlay .fp3d-seg button,
        .fp3d-show-panel button,
        .fp3d-nav .fp3d-chip {
          min-height: 44px;
        }
        .fp3d-nav-wrap {
          max-height: 176px;
        }
      }
    `]};customElements.get("home-3d-panel")||customElements.define("home-3d-panel",La);function Mh(o,e){return e??o?.view==="2d"}var Th=Ce("home-3d-card-editor",()=>"fb3fee141f99");function Ah(){try{let o=localStorage.getItem("home3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var Wa=class extends ye{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_plan2d:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new _n(this);tt=new Cn(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=Ah(),this._heat=null,this._explode=null,this._plan2d=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:n?.quality??"auto",speed:n?.time_travel_speed??null,range:n?.time_travel_range??null,t:(i,r)=>M(this.hass,i,r)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this._config?.room??null,this._floorId=void 0,this._plan2d=null,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let t=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(t-this._top)>1)&&(this._top=t)}};connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>this._night=rr(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=this.shadowRoot?.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e?.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await Th(),document.createElement("home-3d-card-editor")}static getStubConfig(){return{type:"custom:home-3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("home3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config&&((this._config.home||void 0)!==(e.home||void 0)||this._config.room!==e.room)&&(this._roomId=null,this.roomApplied=!1),this._config=e,this.data.setHome(e.home||void 0),this._floorId=void 0,this._walls=Ah(),this._heat=null,this._explode=null,this._plan2d=null,this._orbit=!1,this._night=rr(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass),xn(this.hass.language)||pi(this.hass.language).then(()=>this.requestUpdate());let n=rr(this._config?.night,this.hass);n!==this._night&&(this._night=n)}let t=this.data.building;t!==this.seenBuilding&&(this.seenBuilding=t,t&&this._roomId&&!t.floors.some(n=>be(n).some(i=>i.id===this._roomId))&&(this._roomId=null))}seenBuilding=null;updated(){this.toggleAttribute("light",yn(lt(Pn(this._config?.theme),this.hass)))}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}currentFloor(){let e=this.data.building,t=this._floorId===void 0?this._config?.floor??null:this._floorId;return e&&e.floors.length===1?e.floors[0].id:e?.floors.some(n=>n.id===t)?t:null}onPlanChange(e){e.preventDefault(),this.data.update(e.detail.change)}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!xn(this.hass.language))return y;let e=this.data.building,t=this._config?.height??420,n=this._config;!this.roomApplied&&e&&n?.room&&(this.roomApplied=!0,e.floors.some(w=>be(w).some(x=>x.id===n.room))&&(this._roomId=n.room));let i=this.currentFloor(),r=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!i&&(e?.floors.length??0)>1,s=w=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(w),a=["temperature","humidity","co2"].filter(w=>s(w)),l=this._walls??n?.walls??"auto",c=this._heat??n?.heatmap??"none",d=this._explode??n?.explode??!0,u=Mh(n,this._plan2d),p=this._fullscreen?"100%":n?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${t}px`,h=!!e&&!this._clean&&(r||(!!n?.controls||!!n?.time_travel)&&!(this._roomId&&n.room_panel!==!1)),_=this.tt.active,b=ar(this.tt.hass(this.hass),e),m=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0,f=w=>M(this.hass,w),v=Di(Pn(n?.theme),n?.accent,this.hass,w=>getComputedStyle(this).getPropertyValue(w));return g`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${v?`--fp3d-accent:${v};--fp3d-accent-text:${Oi(v)}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${_?"fp3d-tt":""}" style="height:${p}">
        ${e&&e.floors.some(w=>w.rooms.length)?g`<fp3d-view3d
              .hass=${b}
              .canEdit=${this.data.canEdit}
              .home=${this.data.homeId}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .packs=${this.data.packs}
              .plan2d=${u}
              .floorId=${i}
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
              .buttons=${this._config?.buttons?.map((w,x)=>({id:`card_${x}`,...w}))??null}
              .heatMode=${c}
              .theme=${Pn(this._config?.theme)}
              .clock=${this._config?.clock??null}
              .accent=${v}
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
              @room-tap=${w=>{if(this.canSwitch&&(e?.floors.length??0)>1&&w.detail.floorId&&this.currentFloor()!==w.detail.floorId){this._floorId=w.detail.floorId,this._roomId=null;return}w.detail.roomId&&(this._roomId=w.detail.roomId===this._roomId?null:w.detail.roomId)}}
              @floor-tap=${w=>{this._floorId=w.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
              @plan-change=${this.onPlanChange}
            ></fp3d-view3d>`:g`<p class="fp3d-card-msg">${this.data.error??(e?M(this.hass,"no_building"):M(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?g`<fp3d-room-panel
              @camera-look=${w=>this.view3d()?.lookThrough(w.detail.entity)}
              class="fp3d-card-panel"
              .hass=${b}
              ?readOnly=${_}
              ?noLook=${u}
              .room=${e.floors.flatMap(w=>be(w)).find(w=>w.id===this._roomId)??null}
              .floor=${e.floors.find(w=>be(w).some(x=>x.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${wn(this.hass,e.floors)}
              .sheets=${this._roomId?this.view3d()?.roomSheets(this._roomId)??null:null}
              @sheet-open=${w=>this._roomId&&this.view3d()?.openRoomSheet(this._roomId,w.detail.id)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:y}
        ${h&&e?g`<div class="fp3d-card-controls">
              ${r?g`<button class="fp3d-chip" @click=${()=>this.back()}>${f("back")}</button>`:y}
              ${n?.time_travel?g`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${_} title=${f("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ⏪ ${f("tt_chip")}
                  </button>`:y}
              ${n?.camera_wall?g`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${f("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${f("cameras_short")}</button>`:y}
              ${s("view")?g`<div class="fp3d-seg" role="group" aria-label=${f("plan_view")}>
                    <button aria-pressed=${!u} @click=${()=>this._plan2d=!1}>${f("view_3d")}</button>
                    <button aria-pressed=${u} @click=${()=>this._plan2d=!0}>${f("view_2d")}</button>
                  </div>`:y}
              ${s("walls")&&!u?g`<div class="fp3d-seg">
                    <button aria-pressed=${l==="auto"} @click=${()=>this.setWalls("auto")}>${f("walls_auto")}</button>
                    <button aria-pressed=${l==="cut"} @click=${()=>this.setWalls("cut")}>${f("walls_cut")}</button>
                  </div>`:y}
              ${s("floors")&&!u&&e.floors.length>1&&!i?g`<div class="fp3d-seg">
                    <button aria-pressed=${d} @click=${()=>this._explode=!0}>${f("floors_apart")}</button>
                    <button aria-pressed=${!d} @click=${()=>this._explode=!1}>${f("floors_stacked")}</button>
                  </div>`:y}
              ${a.length?g`<div class="fp3d-seg" role="group" aria-label=${f("heatmap")}>
                    ${["none",...a].map(w=>g`<button aria-pressed=${c===w} @click=${()=>this._heat=w}>
                          ${f(w==="none"?"heat_off":`heat_short_${w}`)}
                        </button>`)}
                  </div>`:y}
            </div>`:y}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:y}
        ${n?.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?g`<button class="fp3d-card-full" title=${f(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${f(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:y}
        ${n?.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?g`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?g`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:y}
      </div>
    </ha-card>`}static styles=[We,Ye,Me`
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
    `]};if(!customElements.get("home-3d-card")){customElements.define("home-3d-card",Wa);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"home-3d-card",name:M(void 0,"card_name"),description:M(void 0,"card_description"),preview:!1})}el();tr();
