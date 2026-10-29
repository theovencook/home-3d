var F=globalThis,W=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),ue=new WeakMap,M=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(W&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=ue.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ue.set(t,e))}return e}toString(){return this.cssText}},me=s=>new M(typeof s=="string"?s:s+"",void 0,J),A=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((i,r,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new M(t,s,J)},fe=(s,e)=>{if(W)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),r=F.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},X=W?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return me(t)})(s):s;var{is:Qe,defineProperty:et,getOwnPropertyDescriptor:tt,getOwnPropertyNames:it,getOwnPropertySymbols:st,getPrototypeOf:rt}=Object,K=globalThis,_e=K.trustedTypes,nt=_e?_e.emptyScript:"",ot=K.reactiveElementPolyfillSupport,T=(s,e)=>s,G={toAttribute(s,e){switch(e){case Boolean:s=s?nt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},be=(s,e)=>!Qe(s,e),ge={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:be};Symbol.metadata??=Symbol("metadata"),K.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&et(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:n}=tt(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let o=r?.call(this);n?.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ge}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;let e=rt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){let t=this.properties,i=[...it(t),...st(t)];for(let r of i)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)t.unshift(X(r))}else e!==void 0&&t.push(X(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:G).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let n=i.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:G;this._$Em=r;let o=a.fromAttribute(t,n.type);this[r]=o??this._$Ej?.get(r)??o,this._$Em=null}}requestUpdate(e,t,i,r=!1,n){if(e!==void 0){let a=this.constructor;if(r===!1&&(n=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??be)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:n},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,n]of i){let{wrapped:a}=n,o=this[r];a!==!0||this._$AL.has(r)||o===void 0||this.C(r,void 0,n,o)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[T("elementProperties")]=new Map,f[T("finalized")]=new Map,ot?.({ReactiveElement:f}),(K.reactiveElementVersions??=[]).push("2.1.2");var se=globalThis,ve=s=>s,V=se.trustedTypes,ye=V?V.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ae="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,Se="?"+v,at=`<${Se}>`,k=document,R=()=>k.createComment(""),O=s=>s===null||typeof s!="object"&&typeof s!="function",re=Array.isArray,lt=s=>re(s)||typeof s?.[Symbol.iterator]=="function",Y=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,$e=/>/g,$=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,ke=/"/g,Ee=/^(?:script|style|textarea|title)$/i,ne=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),u=ne(1),Ot=ne(2),Nt=ne(3),P=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Pe=new WeakMap,w=k.createTreeWalker(k,129);function Ie(s,e){if(!re(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ye!==void 0?ye.createHTML(e):e}var pt=(s,e)=>{let t=s.length-1,i=[],r,n=e===2?"<svg>":e===3?"<math>":"",a=H;for(let o=0;o<t;o++){let l=s[o],d,p,c=-1,m=0;for(;m<l.length&&(a.lastIndex=m,p=a.exec(l),p!==null);)m=a.lastIndex,a===H?p[1]==="!--"?a=xe:p[1]!==void 0?a=$e:p[2]!==void 0?(Ee.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=$):p[3]!==void 0&&(a=$):a===$?p[0]===">"?(a=r??H,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?$:p[3]==='"'?ke:we):a===ke||a===we?a=$:a===xe||a===$e?a=H:(a=$,r=void 0);let b=a===$&&s[o+1].startsWith("/>")?" ":"";n+=a===H?l+at:c>=0?(i.push(d),l.slice(0,c)+Ae+l.slice(c)+v+b):l+v+(c===-2?o:b)}return[Ie(s,n+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},N=class s{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,a=0,o=e.length-1,l=this.parts,[d,p]=pt(e,t);if(this.el=s.createElement(d,i),w.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=w.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(let c of r.getAttributeNames())if(c.endsWith(Ae)){let m=p[a++],b=r.getAttribute(c).split(v),B=/([.?@])?(.*)/.exec(m);l.push({type:1,index:n,name:B[2],strings:b,ctor:B[1]==="."?Q:B[1]==="?"?ee:B[1]==="@"?te:E}),r.removeAttribute(c)}else c.startsWith(v)&&(l.push({type:6,index:n}),r.removeAttribute(c));if(Ee.test(r.tagName)){let c=r.textContent.split(v),m=c.length-1;if(m>0){r.textContent=V?V.emptyScript:"";for(let b=0;b<m;b++)r.append(c[b],R()),w.nextNode(),l.push({type:2,index:++n});r.append(c[m],R())}}}else if(r.nodeType===8)if(r.data===Se)l.push({type:2,index:n});else{let c=-1;for(;(c=r.data.indexOf(v,c+1))!==-1;)l.push({type:7,index:n}),c+=v.length-1}n++}}static createElement(e,t){let i=k.createElement("template");return i.innerHTML=e,i}};function S(s,e,t=s,i){if(e===P)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl,n=O(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=S(s,r._$AS(s,e.values),r,i)),e}var Z=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??k).importNode(t,!0);w.currentNode=r;let n=w.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new z(n,n.nextSibling,this,e):l.type===1?d=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(d=new ie(n,this,e)),this._$AV.push(d),l=i[++o]}a!==l?.index&&(n=w.nextNode(),a++)}return w.currentNode=k,r}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},z=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),O(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==P&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):lt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=N.createElement(Ie(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let n=new Z(r,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new N(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let n of e)r===t.length?t.push(i=new s(this.O(R()),this.O(R()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=ve(e).nextSibling;ve(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},E=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,t=this,i,r){let n=this.strings,a=!1;if(n===void 0)e=S(this,e,t,0),a=!O(e)||e!==this._$AH&&e!==P,a&&(this._$AH=e);else{let o=e,l,d;for(e=n[0],l=0;l<n.length-1;l++)d=S(this,o[i+l],t,l),d===P&&(d=this._$AH[l]),a||=!O(d)||d!==this._$AH[l],d===h?e=h:e!==h&&(e+=(d??"")+n[l+1]),this._$AH[l]=d}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Q=class extends E{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},ee=class extends E{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},te=class extends E{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??h)===P)return;let i=this._$AH,r=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==h&&(i===h||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ie=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}};var dt=se.litHtmlPolyfillSupport;dt?.(N,z),(se.litHtmlVersions??=[]).push("3.3.3");var Ce=(s,e,t)=>{let i=t?.renderBefore??e,r=i._$litPart$;if(r===void 0){let n=t?.renderBefore??null;i._$litPart$=r=new z(e.insertBefore(R(),n),n,void 0,t??{})}return r._$AI(s),r};var oe=globalThis,y=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};y._$litElement$=!0,y.finalized=!0,oe.litElementHydrateSupport?.({LitElement:y});var ct=oe.litElementPolyfillSupport;ct?.({LitElement:y});(oe.litElementVersions??=[]).push("4.2.2");async function ae(s,e){return(await s.callWS({type:"home_3d/items/save",item:e})).item}async function Me(s,e){await s.callWS({type:"home_3d/items/remove",item_id:e})}var L=["box","cyl","loft","sphere","lathe","rbox"],ht=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent"],le=["floor","surface","wall","ceiling"],pe=["ceiling","downlight","spot","panel","pendant","floor","uplight","table","wall","strip","bollard","garden"];var U={shapes:L,colourRoles:ht,mounts:le,lights:pe,maxParts:60,maxProfilePoints:12,maxNameLength:80,maxRooms:12,maxTags:12,maxTagLength:30,metres:[.01,10],centre:[-.5,.5],extent:[.001,1],level:[0,1],round:[.01,.5],wallY:[0,3],rot:[-360,360]};var mt=/^[a-z0-9][a-z0-9_.-]{0,39}$/;function de(s){return s.normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,34).replace(/_+$/,"")||"item"}function D(s,e){let t=new Set(e),i=mt.test(s)?s:de(s);if(!t.has(i))return i;for(let r=2;;r++){let n=`${i.slice(0,40-String(r).length-1)}_${r}`;if(!t.has(n))return n}}function He(s,e){return{id:D(de(s),e),name:{en:s.trim()||"New item"},size:[.6,.6,.75],parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:.5,color:"body"}]}}var ft=[[0,0],[.7,0],[1,.4],[.5,1],[0,1]],_=(s,e,t,i)=>Number.isFinite(s)?Math.min(t,Math.max(e,s)):i,g=s=>Math.round(s*1e3)/1e3;function Re(s){let e={...s,x:g(_(s.x,-.5,.5,0)),z:g(_(s.z,-.5,.5,0)),w:g(_(s.w,.001,1,1)),d:g(_(s.d,.001,1,1)),y:g(_(s.y,0,1,0)),h:g(_(s.h,.001,1,1))};if(e.shape==="lathe"?e.profile=e.profile?.length?e.profile:ft.map(t=>[...t]):delete e.profile,e.shape==="rbox"?e.round=g(_(e.round??.2,.01,.5,.2)):delete e.round,e.shape!=="loft")for(let t of["tx","tz","tw","td"])delete e[t];return e.shape!=="cyl"&&delete e.axis,e}function j(s,e){return{...s,parts:e}}function Oe(s,e){if(s.parts.length>=60)return s;let t=Math.min(.75,Math.max(0,...s.parts.map(n=>n.y+n.h))),i=Math.max(.25,Math.min(.5,1-t)),r=Re({shape:e,x:0,z:0,w:.5,d:.5,y:t,h:i,color:e==="lathe"||e==="sphere"?"accent":"body"});return j(s,[...s.parts,r])}function Ne(s,e,t){return j(s,s.parts.map((i,r)=>r===e?Re({...i,...t}):i))}function ze(s,e,t){return j(s,s.parts.map((i,r)=>{if(r!==e)return i;let n=new Set(i.fix??"");n.has(t)?n.delete(t):n.add(t);let a=["w","d","h"].filter(d=>n.has(d)).join(""),{fix:o,...l}=i;return a?{...l,fix:a}:l}))}function Le(s,e){return s.parts.length<=1?s:j(s,s.parts.filter((t,i)=>i!==e))}function Ue(s,e){if(s.parts.length>=60||!s.parts[e])return s;let t=structuredClone(s.parts[e]);return j(s,[...s.parts.slice(0,e+1),t,...s.parts.slice(e+1)])}function De(s,e,t){let i={...s},r=e.name?.trim().slice(0,80);if(r&&(i.name={...s.name,en:r},t&&(i.id=D(de(r),t))),e.group!==void 0&&(e.group?i.group=e.group:delete i.group),e.room!==void 0&&(e.room.length?i.room=[...new Set(e.room)].slice(0,12):delete i.room),e.tags!==void 0){let n=[...new Set(e.tags.split(",").map(a=>a.trim().slice(0,30)).filter(Boolean))].slice(0,12);n.length?i.tags=n:delete i.tags}if(e.ikea!==void 0){let n=e.ikea.trim().slice(0,40);n?i.ikea=n:delete i.ikea}return i}var _t={electric:!1,mount:"floor",surface:!1,vehicle:!1,hole:!1},gt={edges:!1,glow:!1,screen:!1};function Te(s,e){return Object.fromEntries(Object.entries(s).filter(([t,i])=>i!==void 0&&e[t]!==i))}function je(s){let e=Te(s,_t);return e.mount!=="wall"&&delete e.wall_y,e.parts=s.parts.map(t=>Te(t,gt)),{name:`${s.id}.json`,text:`${JSON.stringify(e,null,2)}
`}}function Be(s,e){let t;try{t=JSON.parse(s)}catch{let n=s.indexOf("{"),a=s.lastIndexOf("}");try{t=JSON.parse(s.slice(n,a+1))}catch{return{error:"not_json"}}}if(!t||typeof t!="object"||Array.isArray(t))return{error:"not_an_item"};let i=t;if(i.format==="home3d-pack"||i.format==="fp3dpack")return{error:"pack_file"};if(typeof i.id!="string"||!Array.isArray(i.parts))return{error:"not_an_item"};let r=i;return{item:{...r,id:D(r.id,e)}}}function ce(s){return(s??[]).map(([e,t])=>`${e} ${t}`).join(", ")}function Fe(s){let e=s.split(/[,;]/).map(t=>t.trim()).filter(Boolean).map(t=>t.split(/\s+/).map(Number));return e.length<2||e.length>12||e.some(t=>t.length!==2||t.some(i=>!Number.isFinite(i)))?null:e.map(([t,i])=>[g(_(t,0,1,0)),g(_(i,0,1,0))])}var bt=new URL(import.meta.url),vt=new URL("./home-3d-3d.js?v=0f575b870ea1",bt).href,We;function Ke(){return We??=import(vt),We}var Ve=A`
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
`,qe=A`
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
`;var Je={id:"round_side_table_40",name:{en:"Round side table 40"},size:[.4,.4,.52],group:"table",room:["living","bedroom","conservatory"],tags:["side table","lamp table","end table","occasional table","round","tripod"],family:"round_side_table",variant:{en:"\xD840"},surface:!0,parts:[{shape:"cyl",x:0,z:0,w:1,d:1,y:.9519,h:.0481,color:"wood",fix:"h"},{shape:"cyl",x:0,z:0,w:.8,d:.8,y:.32,h:.0385,color:"wood",fix:"h"},{shape:"loft",x:0,z:-.425,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:0,tz:-.3,tw:.075,td:.075,fix:"wd"},{shape:"loft",x:.3681,z:.2125,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:.2598,tz:.15,tw:.075,td:.075,fix:"wd"},{shape:"loft",x:-.3681,z:.2125,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:-.2598,tz:.15,tw:.075,td:.075,fix:"wd"}]};var Xe={id:"vase",name:{en:"Vase"},size:[.2,.2,.42],group:"vase",tags:["vase","ceramic","flower vase","ornament","tall","floor vase"],family:"vase",variant:{en:"Tall"},mount:"surface",parts:[{shape:"lathe",x:0,z:0,w:1,d:1,y:0,h:1,color:"pot",profile:[[0,0],[.55,0],[.9,.18],[1,.4],[.8,.68],[.42,.85],[.4,.95],[.5,1],[0,1]]}]};var C={ie_title:"Your own items",ie_intro:"Build furniture from simple shapes. Your items are kept in Home Assistant, everyone in the home sees them in the library, and they never leave it unless you export them.",ie_new:"New item",ie_new_name:"New item",ie_import:"Import item files \u2026",ie_brief:"Copy instructions for an LLM",ie_brief_hint:"Copies a short brief on the item format. Paste it into ChatGPT, Claude or Gemini, say what you want, then paste the answer under \u201CPaste an item\u201D.",ie_brief_copied:"Copied. Paste it into the LLM's chat, say what item you want, then paste its answer under \u201CPaste an item\u201D.",ie_brief_failed:"Could not copy to the clipboard: {why}",ie_paste:"Paste an item",ie_paste_label:"An item's JSON (an LLM's answer can be pasted as it is)",ie_paste_import:"Import",ie_imported:"Imported: {names}",ie_import_failed:"{file}: {why}",ie_import_replace:"\u201C{name}\u201D is already one of your items. Replace it? (Cancel keeps both.)",ie_err_not_json:"not a JSON file",ie_err_not_an_item:"not an item file (an item has an id and parts)",ie_err_pack_file:"this is a pack's pack.json; import the whole pack folder under Packs",ie_none:"No items of your own yet.",ie_close:"Close",ie_save:"Save",ie_saved:"Saved. It is in the library now.",ie_unsaved:"Not saved yet",ie_save_failed:"Not saved: {why}",ie_export:"Export",ie_delete:"Delete",ie_delete_confirm:"Delete \u201C{name}\u201D? Copies already placed stay in the plan as plain boxes.",ie_discard:"Discard the changes to \u201C{name}\u201D?",ie_details:"Item",ie_name:"Name",ie_section:"Library section",ie_section_none:"\u2013 sorted by its name \u2013",ie_rooms:"Rooms (none: any room)",ie_tags:"Search words (separated by commas)",ie_ikea:"IKEA name (optional)",ie_size:"Size in metres (width, depth, height)",ie_mount:"Stands",ie_mount_floor:"on the floor",ie_mount_surface:"on the item below it",ie_mount_wall:"on a wall",ie_mount_ceiling:"from the ceiling",ie_wall_y:"Bottom above the floor (m)",ie_flag_surface:"Its top carries other items",ie_flag_electric:"Can be linked to a switch and a power sensor",ie_flag_light:"Lamp: how its light spreads",ie_parts:"Parts ({n} of {max})",ie_parts_hint:"Measures are fractions of the item's size: x and z from \u22120.5 to 0.5 (front is +z), width, depth and height up to 1, bottom (y) from 0 to 1.",ie_add:"Add",ie_shape_box:"Box",ie_shape_cyl:"Cylinder",ie_shape_loft:"Loft (sloped box)",ie_shape_sphere:"Sphere",ie_shape_lathe:"Lathe (turned)",ie_shape_rbox:"Rounded box",ie_colour:"Colour",ie_colour_own:"own colour",ie_fixed:"Keeps",ie_fixed_hint:"Measures this part keeps when the item is resized (legs keep their width, a top keeps its thickness).",ie_round:"Rounding",ie_duplicate:"Copy",ie_remove_part:"Remove part",ie_part:"Part {n}",ie_turn_hint:"Drag the picture to turn the item.",ie_view_front:"Front",ie_view_side:"Side",ie_view_top:"Top",ie_view_angle:"Angle"},$t={ie_title:"Eigene M\xF6bel",ie_intro:"Baue M\xF6bel aus einfachen Formen. Sie bleiben in Home Assistant, alle im Haushalt finden sie in der Bibliothek, und sie verlassen es nur, wenn du sie exportierst.",ie_new:"Neues M\xF6bel",ie_new_name:"Neues M\xF6bel",ie_import:"M\xF6bel-Dateien importieren \u2026",ie_brief:"Anleitung f\xFCr eine KI kopieren",ie_brief_hint:"Kopiert eine kurze Beschreibung des M\xF6bel-Formats. In ChatGPT, Claude oder Gemini einf\xFCgen, sagen, was du m\xF6chtest, und die Antwort unter \u201EM\xF6bel einf\xFCgen\u201C einf\xFCgen.",ie_brief_copied:"Kopiert. In den Chat der KI einf\xFCgen, sagen, welches M\xF6bel du m\xF6chtest, und die Antwort unter \u201EM\xF6bel einf\xFCgen\u201C einf\xFCgen.",ie_brief_failed:"Konnte nicht in die Zwischenablage kopieren: {why}",ie_paste:"M\xF6bel einf\xFCgen",ie_paste_label:"Das JSON eines M\xF6bels (die Antwort einer KI so, wie sie ist)",ie_paste_import:"Importieren",ie_imported:"Importiert: {names}",ie_import_failed:"{file}: {why}",ie_import_replace:"\u201E{name}\u201C gibt es schon. Ersetzen? (Abbrechen beh\xE4lt beide.)",ie_err_not_json:"keine JSON-Datei",ie_err_not_an_item:"keine M\xF6bel-Datei (ein M\xF6bel hat eine id und Teile)",ie_err_pack_file:"das ist die pack.json eines Packs; den ganzen Pack-Ordner unter Packs importieren",ie_none:"Noch keine eigenen M\xF6bel.",ie_close:"Schlie\xDFen",ie_save:"Speichern",ie_saved:"Gespeichert. Es ist jetzt in der Bibliothek.",ie_unsaved:"Noch nicht gespeichert",ie_save_failed:"Nicht gespeichert: {why}",ie_export:"Exportieren",ie_delete:"L\xF6schen",ie_delete_confirm:"\u201E{name}\u201C l\xF6schen? Schon platzierte bleiben als einfache K\xE4sten im Plan.",ie_discard:"\xC4nderungen an \u201E{name}\u201C verwerfen?",ie_details:"M\xF6bel",ie_name:"Name",ie_section:"Bereich der Bibliothek",ie_section_none:"\u2013 nach dem Namen \u2013",ie_rooms:"R\xE4ume (keiner: jeder Raum)",ie_tags:"Suchw\xF6rter (mit Kommas getrennt)",ie_ikea:"IKEA-Name (optional)",ie_size:"Gr\xF6\xDFe in Metern (Breite, Tiefe, H\xF6he)",ie_mount:"Steht",ie_mount_floor:"auf dem Boden",ie_mount_surface:"auf dem M\xF6bel darunter",ie_mount_wall:"an der Wand",ie_mount_ceiling:"an der Decke",ie_wall_y:"Unterkante \xFCber dem Boden (m)",ie_flag_surface:"Oben kann man etwas abstellen",ie_flag_electric:"Mit Schalter und Leistungssensor verkn\xFCpfbar",ie_flag_light:"Lampe: wie ihr Licht f\xE4llt",ie_parts:"Teile ({n} von {max})",ie_parts_hint:"Ma\xDFe sind Anteile der M\xF6belgr\xF6\xDFe: x und z von \u22120,5 bis 0,5 (vorne ist +z), Breite, Tiefe und H\xF6he bis 1, Unterkante (y) von 0 bis 1.",ie_add:"Hinzuf\xFCgen",ie_shape_box:"Quader",ie_shape_cyl:"Zylinder",ie_shape_loft:"Loft (schr\xE4ger Quader)",ie_shape_sphere:"Kugel",ie_shape_lathe:"Drehteil",ie_shape_rbox:"Abgerundeter Quader",ie_colour:"Farbe",ie_colour_own:"eigene Farbe",ie_fixed:"Beh\xE4lt",ie_fixed_hint:"Ma\xDFe, die dieses Teil beh\xE4lt, wenn das M\xF6bel gr\xF6\xDFer oder kleiner wird (Beine behalten ihre Breite, eine Platte ihre St\xE4rke).",ie_round:"Rundung",ie_duplicate:"Kopie",ie_remove_part:"Teil entfernen",ie_part:"Teil {n}",ie_turn_hint:"Zum Drehen das Bild ziehen.",ie_view_front:"Vorne",ie_view_side:"Seite",ie_view_top:"Oben",ie_view_angle:"Schr\xE4g"};function Ge(s,e){return(t,i={})=>{if(!t.startsWith("ie_"))return s(t,i);let n=((e()??"").startsWith("de")?$t:C)[t]??C[t]??t;for(let[a,o]of Object.entries(i))n=n.replace(`{${a}}`,String(o));return n}}var wt=[["A round side table (cylinders for the top and shelf, splayed lofts for the legs, fixed measures)",Je],["A vase (one lathe)",Xe]],Ye="```";function kt(s){let{family:e,variant:t,parts:i,...r}=s,n=JSON.stringify(r).slice(0,-1),a=i.map(o=>`  ${JSON.stringify(o)}`).join(`,
`);return`${n},"parts":[
${a}
]}`}var Pt={box:"a box filling the part's box.",cyl:'a cylinder, upright; its diameter is the smaller of w and d. With "axis": "x" or "z" it lies down along that axis (wheels, rollers, pipes, rails).',loft:`a box whose top face is another rectangle: "tx", "tz" give its centre and "tw", "td" its size (same ranges as x, z, w, d; default: the bottom's). For sloped or tapered things: lamp shades, splayed legs, bonnets.`,sphere:"a ball filling the part's box, squashed when w, d and h differ (knobs, globe lamps, pouffes).",lathe:`a "profile" turned around the part's upright axis (vases, bowls, lamp bases, planters). The profile is 2 to ${U.maxProfilePoints} points [radius, height], each ${x(U.level)}: radius 1 touches the part's box, 0 is the axis; height 0 is the part's bottom, 1 its top. Write them from the bottom up the outside, like the right half of the silhouette; for a bowl go up the outside, over the rim and down the inside. A lathe must have a profile, and only a lathe may have one.`,rbox:`a box with rounded edges (cushions, mattresses, appliances, soft seats); optional "round" ${x(U.round)} of its shortest side (default 0.2; 0.5 is fully round). Only an rbox may have "round".`},At={body:"the main painted or laminate body",fabric:"upholstery, rugs, curtains",cushion:"seat and back cushions, pillows",wood:"wood",white:"white ceramics, white goods, white plastic",metal:"steel, chrome, brass, handles",dark:"black parts, screens, rubber, shadows",glass:"glass (drawn see-through)",plant:"leaves",pot:"plant pots, ceramics, terracotta",accent:"a highlight colour: buttons, LEDs, a coloured detail"};function x([s,e]){return`${s} to ${e}`}var q=s=>s.map(e=>`"${e}"`).join(", ");function Ze({kinds:s,rooms:e}){let t=U;return`You design one item (a piece of furniture or another thing in a home) for Home 3D, a 3D floor plan for Home Assistant. Ask me what the item is if I have not said, then answer with the item.

ANSWER
Answer with ONE JSON object and nothing else: no explanation, no comments, no trailing commas. I paste it into Home 3D's item editor (${C.ie_paste} \u2192 ${C.ie_paste_import}), or save it as <id>.json for "${C.ie_import}"; the editor checks it against the rules below, and it must import as it is.

THE ITEM
- "id" (required): 1 to 40 characters: lower-case letters, digits, "_", "." and "-", starting with a letter or a digit. Make it from the name ("Oak wall shelf" \u2192 "oak_wall_shelf").
- "name" (required): the name by language code, at least English: {"en": "Oak wall shelf"}. 1 to ${t.maxNameLength} characters, a readable name in UK English (Wardrobe, Hob, Worktop), not a product name.
- "size" (required): the real size in metres as [width, depth, height], each ${x(t.metres)}. Width runs left to right as you face the item's front, depth from back to front.
- "parts" (required): 1 to ${t.maxParts} parts (see PARTS). 5 to 30 is usually right; keep it low-poly.
- "group": what it is, its section in the library: ${q(s)}.
- "room": up to ${t.maxRooms} rooms it is made for: ${q(e)}. Leave it out for any room.
- "tags": up to ${t.maxTags} more search words, 1 to ${t.maxTagLength} characters each.
- "mount": where it sits: ${q(t.mounts)}. "floor" is the default; "surface" stands on the item below it (a lamp on a table); "wall" hangs on a wall with its bottom "wall_y" metres above the floor (${x(t.wallY)}, default 1); "ceiling" hangs from the ceiling.
- "surface": true when its top carries other items (tables, worktops, sideboards).
- "electric": true when it can be linked to a switch and a power sensor (appliances, lamps, TVs).
- "light": for a lamp, how its light spreads: ${q(t.lights)}.
- "ikea": the IKEA product name, only if it is one ("KALLAX").
No other fields are allowed, in the item or in a part. Leave out any optional field you do not need.

PARTS
Every measure of a part is a fraction of the item's size, so the item can be resized in the plan:
- "x", "z": the part's centre across and in depth, ${x(t.centre)}. x 0.5 is the right edge, z 0.5 is the FRONT edge, z -0.5 the back (against the wall).
- "w", "d", "h": the part's width, depth and height, ${x(t.extent)} (1 is the item's whole width, depth or height).
- "y": the part's bottom, ${x(t.level)} of the item's height (0 is the floor). Keep y + h at most 1 and every part inside the item's box: x \xB1 w/2 and z \xB1 d/2 within -0.5 to 0.5.
- "shape": one of:
${t.shapes.map(i=>`  - "${i}": ${Pt[i]}`).join(`
`)}
- "color": a colour role (preferred: the plan's theme colours it) or "#rrggbb" for a fixed colour. Roles:
${t.colourRoles.map(i=>`  - "${i}": ${At[i]}`).join(`
`)}
- "top": another colour (role or "#rrggbb") for the part's top face.
- "fix": the measures the part KEEPS when the item is resized: "w", "d", "h" or several ("wd", "wdh"). Legs keep "wd", table tops, shelves and plinths keep "h", handles keep "wdh". Parts without fix (the carcass, a seat) stretch between them.
- "rot": a turn of the part around its own upright axis in degrees (${x(t.rot)}), for diagonal struts or spiral steps.
- "glow": true for the part of a lamp that lights up (shade, bulb).
- "screen": true for a TV or monitor screen; its front (+z) shows the picture.
- "edges": true, "glow" or "faint" draws outlines; rarely needed.

GOOD ITEMS
- Parts touch or overlap; nothing floats. Legs stand on y 0, a top sits on its legs.
- Use the real proportions of the thing; fractions are of the item's own size, so a 2 cm top on a 75 cm table is h 0.027.
- Put the front (doors, drawers, the screen, the seat) towards +z.

EXAMPLES (items Home 3D ships with)
${wt.map(([i,r])=>`${i}:
${Ye}json
${kt(r)}
${Ye}`).join(`

`)}
`}var St=/^#[0-9a-f]{6}$/i,Et=[["ie_view_angle",35,25],["ie_view_front",0,0],["ie_view_side",90,0],["ie_view_top",0,80]];async function It(s){try{await navigator.clipboard.writeText(s);return}catch(e){let t=document.createElement("textarea");t.value=s,t.style.position="fixed",t.style.opacity="0",document.body.append(t),t.select();let i=document.execCommand("copy");if(t.remove(),!i)throw e}}function Ct(s,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),i=document.createElement("a");i.href=t,i.download=s,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var he=class extends y{static properties={options:{attribute:!1},_items:{state:!0},_draft:{state:!0},_savedId:{state:!0},_dirty:{state:!0},_picture:{state:!0},_msg:{state:!0},_busy:{state:!0},_yaw:{state:!0},_pitch:{state:!0},_addShape:{state:!0},_paste:{state:!0},_note:{state:!0}};drawn="";drawing=!1;drag=null;constructor(){super(),this._items=[],this._draft=null,this._savedId=null,this._dirty=!1,this._picture=null,this._msg=null,this._busy=!1,this._yaw=35,this._pitch=25,this._addShape="box",this._paste=null,this._note=null}connectedCallback(){super.connectedCallback(),this._items=[...this.options?.items??[]];let e=this.options?.open;e==="new"?this.startNew():e?this.pick(this._items.find(t=>t.id===e)??null):this._items.length&&this.pick(this._items[0])}get hass(){return this.options.hassSource?.()??this.options.hass}t(e,t){return this.options.t(e,t)}itemName(e){let t=(this.hass.language??"en").split("-")[0];return e.name[t]??e.name.en??Object.values(e.name)[0]??e.id}leave(){return!this._dirty||!this._draft||confirm(this.t("ie_discard",{name:this.itemName(this._draft)}))}pick(e){this._draft=e?structuredClone(e):null,this._savedId=e?.id??null,this._dirty=!1,this._msg=null}startNew(){this._draft=He(this.t("ie_new_name"),this._items.map(e=>e.id)),this._savedId=null,this._dirty=!0,this._msg=null}edit(e){this._draft=e,this._dirty=!0,this._msg=null}close(){this.leave()&&this.remove()}updated(){let e=JSON.stringify([this._draft,Math.round(this._yaw),Math.round(this._pitch)]);!this._draft||e===this.drawn||this.drawing||(this.drawing=!0,requestAnimationFrame(()=>{this.draw(e)}))}async draw(e){try{let t=await Ke(),i=this._draft;i&&(this._picture=t.itemPicture(i,420,this._yaw,this._pitch)),this.drawn=e}catch(t){this._msg={ok:!1,text:String(t?.message??t)},this.drawn=e}finally{this.drawing=!1}this.requestUpdate()}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId),this.drag={x:e.clientX,y:e.clientY,yaw:this._yaw,pitch:this._pitch}}pointerMove(e){this.drag&&(this._yaw=this.drag.yaw-(e.clientX-this.drag.x)*.6,this._pitch=Math.max(-10,Math.min(80,this.drag.pitch+(e.clientY-this.drag.y)*.4)))}async save(){let e=this._draft;if(!(!e||this._busy)){this._busy=!0;try{let t=await ae(this.hass,e),i=this._items.some(r=>r.id===t.id);this._items=i?this._items.map(r=>r.id===t.id?t:r):[...this._items,t],this._draft=structuredClone(t),this._savedId=t.id,this._dirty=!1,this._msg={ok:!0,text:this.t("ie_saved")},this.options.changed()}catch(t){let i=t??{};this._msg={ok:!1,text:this.t("ie_save_failed",{why:i.message??i.code??String(t)})}}finally{this._busy=!1}}}exportItem(){if(!this._draft)return;let e=je(this._draft);Ct(e.name,e.text)}async deleteItem(){let e=this._draft;if(e){if(this._savedId===null){this.pick(this._items[0]??null);return}if(confirm(this.t("ie_delete_confirm",{name:this.itemName(e)})))try{await Me(this.hass,this._savedId),this._items=this._items.filter(t=>t.id!==this._savedId),this.pick(this._items[0]??null),this.options.changed()}catch(t){this._msg={ok:!1,text:String(t?.message??t)}}}}async copyBrief(){try{await It(Ze({kinds:this.options.kinds,rooms:this.options.rooms})),this._note={ok:!0,text:this.t("ie_brief_copied")}}catch(e){this._note={ok:!1,text:this.t("ie_brief_failed",{why:String(e?.message??e)})}}}async importFiles(e){let t=e.target,i=[...t.files??[]];t.value="",!(!i.length||!this.leave())&&await this.importTexts(await Promise.all(i.map(async r=>({name:r.name,text:await r.text()}))))}async importPasted(){let e=this._paste?.trim();if(!(!e||this._busy||!this.leave())){this._busy=!0;try{await this.importTexts([{name:this.t("ie_paste"),text:e}])&&(this._paste=null)}finally{this._busy=!1}}}async importTexts(e){let t=[],i=[];for(let n of e){let a=n.text,o=Be(a,[]);if("error"in o){i.push(this.t("ie_import_failed",{file:n.name,why:this.t(`ie_err_${o.error}`)}));continue}let l=o.item,d=this._items.find(p=>p.id===l.id);d&&!confirm(this.t("ie_import_replace",{name:this.itemName(d)}))&&(l={...l,id:D(l.id,this._items.map(p=>p.id))});try{let p=await ae(this.hass,l);this._items=this._items.some(c=>c.id===p.id)?this._items.map(c=>c.id===p.id?p:c):[...this._items,p],t.push(p)}catch(p){let c=p?.message??String(p);i.push(this.t("ie_import_failed",{file:n.name,why:c}))}}t.length&&(this.pick(t[t.length-1]),this.options.changed());let r=t.length?[this.t("ie_imported",{names:t.map(n=>this.itemName(n)).join(", ")})]:[];return this._msg={ok:i.length===0,text:[...r,...i].join(" \xB7 ")},this._note=this._draft?null:this._msg,i.length===0}render(){return u`<div class="ie-backdrop" @click=${e=>e.target===e.currentTarget&&this.close()}>
      <div class="ie" role="dialog" aria-modal="true" aria-label=${this.t("ie_title")}>
        <header class="ie-head">
          <h2>${this.t("ie_title")}</h2>
          <button class="fp3d-btn" @click=${()=>this.close()}>${this.t("ie_close")}</button>
        </header>
        <div class="ie-body">
          ${this.renderList()}
          ${this._draft?this.renderDraft(this._draft):u`<p class="ie-sub ie-empty">${this.t("ie_intro")}</p>`}
        </div>
      </div>
    </div>`}renderList(){return u`<nav class="ie-list">
      <p class="ie-sub">${this.t("ie_intro")}</p>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.leave()&&this.startNew()}>+ ${this.t("ie_new")}</button>
      <label class="fp3d-btn ie-file">
        ${this.t("ie_import")}
        <input type="file" accept=".json,application/json" multiple hidden @change=${e=>this.importFiles(e)} />
      </label>
      <button class="fp3d-btn ie-paste-open" aria-expanded=${this._paste!==null} @click=${()=>this._paste=this._paste===null?"":null}>${this.t("ie_paste")}</button>
      ${this._paste!==null?u`<label class="fp3d-field ie-paste"
              >${this.t("ie_paste_label")}<textarea rows="6" spellcheck="false" .value=${this._paste} @input=${e=>this._paste=e.target.value}></textarea
            ></label>
            <button class="fp3d-btn fp3d-primary ie-paste-import" ?disabled=${!this._paste.trim()||this._busy} @click=${()=>this.importPasted()}>${this.t("ie_paste_import")}</button>`:h}
      <button class="fp3d-btn ie-brief" title=${this.t("ie_brief_hint")} @click=${()=>this.copyBrief()}>${this.t("ie_brief")}</button>
      ${this._note?u`<p class="ie-msg ${this._note.ok?"ok":"bad"}" role="status">${this._note.text}</p>`:h}
      ${this._items.length?h:u`<p class="ie-sub">${this.t("ie_none")}</p>`}
      <ul>
        ${this._items.map(e=>u`<li>
            <button class="ie-pick ${e.id===this._savedId?"on":""}" @click=${()=>e.id!==this._savedId&&this.leave()&&this.pick(e)}>
              ${this.itemName(e)}
            </button>
          </li>`)}
      </ul>
    </nav>`}renderDraft(e){return u`<section class="ie-stage">
        <div class="ie-picture" @pointerdown=${t=>this.pointerDown(t)} @pointermove=${t=>this.pointerMove(t)} @pointerup=${()=>this.drag=null} @pointercancel=${()=>this.drag=null}>
          ${this._picture?u`<img src=${this._picture} alt=${this.itemName(e)} draggable="false" />`:h}
        </div>
        <div class="ie-views">
          ${Et.map(([t,i,r])=>u`<button
              class="fp3d-btn"
              @click=${()=>{this._yaw=i,this._pitch=r}}
            >
              ${this.t(t)}
            </button>`)}
        </div>
        <p class="ie-sub">${this.t("ie_turn_hint")}</p>
        <div class="ie-actions">
          <button class="fp3d-btn fp3d-primary" ?disabled=${this._busy} @click=${()=>this.save()}>${this.t("ie_save")}</button>
          <button class="fp3d-btn" @click=${()=>this.exportItem()}>${this.t("ie_export")}</button>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteItem()}>${this.t("ie_delete")}</button>
          ${this._dirty?u`<span class="ie-sub">${this.t("ie_unsaved")}</span>`:h}
        </div>
        ${this._msg?u`<p class="ie-msg ${this._msg.ok?"ok":"bad"}" role="status">${this._msg.text}</p>`:h}
      </section>
      <section class="ie-form">${this.renderDetails(e)} ${this.renderParts(e)}</section>`}renderDetails(e){let t=o=>this.edit(De(e,o,this._savedId===null?this._items.map(l=>l.id):void 0)),i=o=>{let l={...e,...o};for(let[d,p]of Object.entries(o))(p===void 0||p===!1)&&delete l[d];this.edit(l)},r=o=>o.target.value,n=new Set(e.room??[]),a=e.mount??"floor";return u`<h3>${this.t("ie_details")}</h3>
      <label class="fp3d-field">${this.t("ie_name")}<input type="text" maxlength="80" .value=${e.name.en??this.itemName(e)} @change=${o=>t({name:r(o)})} /></label>
      <label class="fp3d-field"
        >${this.t("ie_section")}
        <select @change=${o=>t({group:r(o)})}>
          <option value="" ?selected=${!e.group}>${this.t("ie_section_none")}</option>
          ${this.options.kinds.map(o=>u`<option value=${o} ?selected=${e.group===o}>${this.t(`lib_kind_${o}`)}</option>`)}
        </select>
      </label>
      <div class="fp3d-field">
        ${this.t("ie_rooms")}
        <div class="ie-chips">
          ${this.options.rooms.map(o=>u`<button
              class="ie-chip ${n.has(o)?"on":""}"
              aria-pressed=${n.has(o)}
              @click=${()=>t({room:n.has(o)?[...n].filter(l=>l!==o):[...n,o]})}
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
          ${[0,1,2].map(o=>u`<input
              type="number"
              min="0.01"
              max="10"
              step="0.01"
              .value=${String(e.size[o])}
              @change=${l=>{let d=[...e.size],p=Number(r(l));d[o]=Number.isFinite(p)?Math.min(10,Math.max(.01,Math.round(p*1e3)/1e3)):d[o],i({size:d})}}
            />`)}
        </div>
      </div>
      <label class="fp3d-field"
        >${this.t("ie_mount")}
        <select @change=${o=>i({mount:r(o)==="floor"?void 0:r(o)})}>
          ${le.map(o=>u`<option value=${o} ?selected=${a===o}>${this.t(`ie_mount_${o}`)}</option>`)}
        </select>
      </label>
      ${a==="wall"?u`<label class="fp3d-field"
            >${this.t("ie_wall_y")}<input
              type="number"
              min="0"
              max="3"
              step="0.05"
              .value=${String(e.wall_y??1)}
              @change=${o=>i({wall_y:Math.min(3,Math.max(0,Number(r(o))||0))})}
          /></label>`:h}
      <div class="ie-flags">
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.surface} @change=${o=>i({surface:o.target.checked})} /> ${this.t("ie_flag_surface")}</label>
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.electric} @change=${o=>i({electric:o.target.checked})} /> ${this.t("ie_flag_electric")}</label>
        <label class="fp3d-field"
          >${this.t("ie_flag_light")}
          <select @change=${o=>i({light:r(o)||void 0})}>
            <option value="" ?selected=${!e.light}>–</option>
            ${pe.map(o=>u`<option value=${o} ?selected=${e.light===o}>${o}</option>`)}
          </select>
        </label>
      </div>`}renderParts(e){return u`<h3>${this.t("ie_parts",{n:e.parts.length,max:60})}</h3>
      <p class="ie-sub">${this.t("ie_parts_hint")}</p>
      <div class="ie-add">
        <select aria-label=${this.t("ie_add")} @change=${t=>this._addShape=t.target.value}>
          ${L.map(t=>u`<option value=${t} ?selected=${this._addShape===t}>${this.t(`ie_shape_${t}`)}</option>`)}
        </select>
        <button class="fp3d-btn" ?disabled=${e.parts.length>=60} @click=${()=>this.edit(Oe(e,this._addShape))}>+ ${this.t("ie_add")}</button>
      </div>
      ${e.parts.map((t,i)=>this.renderPart(e,t,i))}`}renderPart(e,t,i){let r=o=>this.edit(Ne(e,i,o)),n=(o,l,d)=>u`<label class="ie-num"
        >${o==="round"?this.t("ie_round"):o}<input
          type="number"
          min=${l}
          max=${d}
          step="0.01"
          .value=${String(t[o]??.2)}
          @change=${p=>r({[o]:Number(p.target.value)})}
      /></label>`,a=St.test(t.color);return u`<fieldset class="ie-part">
      <legend>${this.t("ie_part",{n:i+1})}</legend>
      <div class="ie-part-top">
        <select aria-label=${this.t("ie_add")} @change=${o=>r({shape:o.target.value})}>
          ${L.map(o=>u`<option value=${o} ?selected=${t.shape===o}>${this.t(`ie_shape_${o}`)}</option>`)}
        </select>
        <select
          aria-label=${this.t("ie_colour")}
          @change=${o=>{let l=o.target.value;r({color:l==="own"?"#888888":l})}}
        >
          ${this.options.roles.map(o=>u`<option value=${o} ?selected=${t.color===o}>${this.t(`colour_role_${o}`)}</option>`)}
          <option value="own" ?selected=${a}>${this.t("ie_colour_own")}</option>
        </select>
        ${a?u`<input type="color" aria-label=${this.t("ie_colour_own")} .value=${t.color} @change=${o=>r({color:o.target.value})} />`:h}
        <button class="fp3d-btn" ?disabled=${e.parts.length>=60} @click=${()=>this.edit(Ue(e,i))}>${this.t("ie_duplicate")}</button>
        <button class="fp3d-btn fp3d-danger" title=${this.t("ie_remove_part")} aria-label=${this.t("ie_remove_part")} ?disabled=${e.parts.length<=1} @click=${()=>this.edit(Le(e,i))}>✕</button>
      </div>
      <div class="ie-nums">${n("x",-.5,.5)} ${n("z",-.5,.5)} ${n("w",.001,1)} ${n("d",.001,1)} ${n("y",0,1)} ${n("h",.001,1)} ${t.shape==="rbox"?n("round",.01,.5):h}</div>
      ${t.shape==="lathe"?u`<label class="fp3d-field"
            >profile<input
              type="text"
              .value=${ce(t.profile)}
              @change=${o=>{let l=o.target,d=Fe(l.value);d?r({profile:d}):l.value=ce(t.profile)}}
          /></label>`:h}
      <div class="ie-fix" title=${this.t("ie_fixed_hint")}>
        <span class="ie-sub">${this.t("ie_fixed")}</span>
        ${["w","d","h"].map(o=>u`<button class="ie-chip ${t.fix?.includes(o)?"on":""}" aria-pressed=${!!t.fix?.includes(o)} @click=${()=>this.edit(ze(e,i,o))}>${o}</button>`)}
      </div>
    </fieldset>`}static styles=[Ve,qe,A`
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
    `]};customElements.get("fp3d-item-editor")||customElements.define("fp3d-item-editor",he);function xi(s){document.querySelector("fp3d-item-editor")?.remove();let e=document.createElement("fp3d-item-editor"),t=()=>s.hassSource?.()??s.hass,i=Ge(s.t,()=>t().language);e.options={...s,t:i},document.body.append(e)}export{xi as openItemEditor};
