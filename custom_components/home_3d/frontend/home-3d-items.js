var W=globalThis,V=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),he=new WeakMap,M=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(V&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=he.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&he.set(t,e))}return e}toString(){return this.cssText}},me=i=>new M(typeof i=="string"?i:i+"",void 0,K),S=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new M(t,i,K)},fe=(i,e)=>{if(V)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=W.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},q=V?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return me(t)})(i):i;var{is:Qe,defineProperty:et,getOwnPropertyDescriptor:tt,getOwnPropertyNames:nt,getOwnPropertySymbols:it,getPrototypeOf:rt}=Object,j=globalThis,ge=j.trustedTypes,ot=ge?ge.emptyScript:"",st=j.reactiveElementPolyfillSupport,T=(i,e)=>i,J={toAttribute(i,e){switch(e){case Boolean:i=i?ot:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},be=(i,e)=>!Qe(i,e),_e={attribute:!0,type:String,converter:J,reflect:!1,useDefault:!1,hasChanged:be};Symbol.metadata??=Symbol("metadata"),j.litPropertyMetadata??=new WeakMap;var f=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_e){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&et(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:o}=tt(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let s=r?.call(this);o?.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_e}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;let e=rt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){let t=this.properties,n=[...nt(t),...it(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(q(r))}else e!==void 0&&t.push(q(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:J).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let o=n.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:J;this._$Em=r;let s=a.fromAttribute(t,o.type);this[r]=s??this._$Ej?.get(r)??s,this._$Em=null}}requestUpdate(e,t,n,r=!1,o){if(e!==void 0){let a=this.constructor;if(r===!1&&(o=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??be)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,o]of n){let{wrapped:a}=o,s=this[r];a!==!0||this._$AL.has(r)||s===void 0||this.C(r,void 0,o,s)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[T("elementProperties")]=new Map,f[T("finalized")]=new Map,st?.({ReactiveElement:f}),(j.reactiveElementVersions??=[]).push("2.1.2");var ie=globalThis,ye=i=>i,G=ie.trustedTypes,xe=G?G.createPolicy("lit-html",{createHTML:i=>i}):void 0,Se="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+y,at=`<${Ee}>`,P=document,z=()=>P.createComment(""),L=i=>i===null||typeof i!="object"&&typeof i!="function",re=Array.isArray,lt=i=>re(i)||typeof i?.[Symbol.iterator]=="function",X=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,ve=/>/g,v=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ke=/'/g,Pe=/"/g,Ae=/^(?:script|style|textarea|title)$/i,oe=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),h=oe(1),Ht=oe(2),Nt=oe(3),$=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),$e=new WeakMap,k=P.createTreeWalker(P,129);function Re(i,e){if(!re(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return xe!==void 0?xe.createHTML(e):e}var ct=(i,e)=>{let t=i.length-1,n=[],r,o=e===2?"<svg>":e===3?"<math>":"",a=O;for(let s=0;s<t;s++){let l=i[s],u,c,p=-1,m=0;for(;m<l.length&&(a.lastIndex=m,c=a.exec(l),c!==null);)m=a.lastIndex,a===O?c[1]==="!--"?a=we:c[1]!==void 0?a=ve:c[2]!==void 0?(Ae.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=v):c[3]!==void 0&&(a=v):a===v?c[0]===">"?(a=r??O,p=-1):c[1]===void 0?p=-2:(p=a.lastIndex-c[2].length,u=c[1],a=c[3]===void 0?v:c[3]==='"'?Pe:ke):a===Pe||a===ke?a=v:a===we||a===ve?a=O:(a=v,r=void 0);let b=a===v&&i[s+1].startsWith("/>")?" ":"";o+=a===O?l+at:p>=0?(n.push(u),l.slice(0,p)+Se+l.slice(p)+y+b):l+y+(p===-2?s:b)}return[Re(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},C=class i{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,a=0,s=e.length-1,l=this.parts,[u,c]=ct(e,t);if(this.el=i.createElement(u,n),k.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=k.nextNode())!==null&&l.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Se)){let m=c[a++],b=r.getAttribute(p).split(y),B=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:B[2],strings:b,ctor:B[1]==="."?Q:B[1]==="?"?ee:B[1]==="@"?te:A}),r.removeAttribute(p)}else p.startsWith(y)&&(l.push({type:6,index:o}),r.removeAttribute(p));if(Ae.test(r.tagName)){let p=r.textContent.split(y),m=p.length-1;if(m>0){r.textContent=G?G.emptyScript:"";for(let b=0;b<m;b++)r.append(p[b],z()),k.nextNode(),l.push({type:2,index:++o});r.append(p[m],z())}}}else if(r.nodeType===8)if(r.data===Ee)l.push({type:2,index:o});else{let p=-1;for(;(p=r.data.indexOf(y,p+1))!==-1;)l.push({type:7,index:o}),p+=y.length-1}o++}}static createElement(e,t){let n=P.createElement("template");return n.innerHTML=e,n}};function E(i,e,t=i,n){if(e===$)return e;let r=n!==void 0?t._$Co?.[n]:t._$Cl,o=L(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=E(i,r._$AS(i,e.values),r,n)),e}var Z=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??P).importNode(t,!0);k.currentNode=r;let o=k.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new F(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new ne(o,this,e)),this._$AV.push(u),l=n[++s]}a!==l?.index&&(o=k.nextNode(),a++)}return k.currentNode=P,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},F=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),L(e)?e===d||e==null||e===""?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):lt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==d&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=C.createElement(Re(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let o=new Z(r,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=$e.get(e.strings);return t===void 0&&$e.set(e.strings,t=new C(e)),t}k(e){re(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let o of e)r===t.length?t.push(n=new i(this.O(z()),this.O(z()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=ye(e).nextSibling;ye(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},A=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=d}_$AI(e,t=this,n,r){let o=this.strings,a=!1;if(o===void 0)e=E(this,e,t,0),a=!L(e)||e!==this._$AH&&e!==$,a&&(this._$AH=e);else{let s=e,l,u;for(e=o[0],l=0;l<o.length-1;l++)u=E(this,s[n+l],t,l),u===$&&(u=this._$AH[l]),a||=!L(u)||u!==this._$AH[l],u===d?e=d:e!==d&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}a&&!r&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Q=class extends A{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}},ee=class extends A{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}},te=class extends A{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??d)===$)return;let n=this._$AH,r=e===d&&n!==d||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==d&&(n===d||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ne=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}};var ut=ie.litHtmlPolyfillSupport;ut?.(C,F),(ie.litHtmlVersions??=[]).push("3.3.3");var Ie=(i,e,t)=>{let n=t?.renderBefore??e,r=n._$litPart$;if(r===void 0){let o=t?.renderBefore??null;n._$litPart$=r=new F(e.insertBefore(z(),o),o,void 0,t??{})}return r._$AI(i),r};var se=globalThis,x=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $}};x._$litElement$=!0,x.finalized=!0,se.litElementHydrateSupport?.({LitElement:x});var pt=se.litElementPolyfillSupport;pt?.({LitElement:x});(se.litElementVersions??=[]).push("4.2.2");async function ae(i,e){return(await i.callWS({type:"home_3d/items/save",item:e})).item}async function Me(i,e){await i.callWS({type:"home_3d/items/remove",item_id:e})}var H=["box","cyl","loft","sphere","lathe","rbox"],dt=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent"],le=["floor","surface","wall","ceiling"],ce=["ceiling","downlight","spot","panel","pendant","floor","uplight","table","wall","strip","bollard","garden"];var N={shapes:H,colourRoles:dt,mounts:le,lights:ce,maxParts:60,maxProfilePoints:12,maxNameLength:80,maxRooms:12,maxTags:12,maxTagLength:30,metres:[.01,10],centre:[-.5,.5],extent:[.001,1],level:[0,1],round:[.01,.5],wallY:[0,3],rot:[-360,360]};var ht={type:"none",pitch:35,overhang:.4},tn={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ht}};var mt=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var ft=new Set([...mt,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var _t=/^[a-z0-9][a-z0-9_.-]{0,39}$/;function ue(i){return i.normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,34).replace(/_+$/,"")||"item"}function U(i,e){let t=new Set(e),n=_t.test(i)?i:ue(i);if(!t.has(n))return n;for(let r=2;;r++){let o=`${n.slice(0,40-String(r).length-1)}_${r}`;if(!t.has(o))return o}}function Oe(i,e){return{id:U(ue(i),e),name:{en:i.trim()||"New item"},size:[.6,.6,.75],parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:.5,color:"body"}]}}var bt=[[0,0],[.7,0],[1,.4],[.5,1],[0,1]],g=(i,e,t,n)=>Number.isFinite(i)?Math.min(t,Math.max(e,i)):n,_=i=>Math.round(i*1e3)/1e3;function ze(i){let e={...i,x:_(g(i.x,-.5,.5,0)),z:_(g(i.z,-.5,.5,0)),w:_(g(i.w,.001,1,1)),d:_(g(i.d,.001,1,1)),y:_(g(i.y,0,1,0)),h:_(g(i.h,.001,1,1))};if(e.shape==="lathe"?e.profile=e.profile?.length?e.profile:bt.map(t=>[...t]):delete e.profile,e.shape==="rbox"?e.round=_(g(e.round??.2,.01,.5,.2)):delete e.round,e.shape!=="loft")for(let t of["tx","tz","tw","td"])delete e[t];return e.shape!=="cyl"&&delete e.axis,e}function D(i,e){return{...i,parts:e}}function Le(i,e){if(i.parts.length>=60)return i;let t=Math.min(.75,Math.max(0,...i.parts.map(o=>o.y+o.h))),n=Math.max(.25,Math.min(.5,1-t)),r=ze({shape:e,x:0,z:0,w:.5,d:.5,y:t,h:n,color:e==="lathe"||e==="sphere"?"accent":"body"});return D(i,[...i.parts,r])}function Ce(i,e,t){return D(i,i.parts.map((n,r)=>r===e?ze({...n,...t}):n))}function Fe(i,e,t){return D(i,i.parts.map((n,r)=>{if(r!==e)return n;let o=new Set(n.fix??"");o.has(t)?o.delete(t):o.add(t);let a=["w","d","h"].filter(u=>o.has(u)).join(""),{fix:s,...l}=n;return a?{...l,fix:a}:l}))}function He(i,e){return i.parts.length<=1?i:D(i,i.parts.filter((t,n)=>n!==e))}function Ne(i,e){if(i.parts.length>=60||!i.parts[e])return i;let t=structuredClone(i.parts[e]);return D(i,[...i.parts.slice(0,e+1),t,...i.parts.slice(e+1)])}function Ue(i,e,t){let n={...i},r=e.name?.trim().slice(0,80);if(r&&(n.name={...i.name,en:r},t&&(n.id=U(ue(r),t))),e.group!==void 0&&(e.group?n.group=e.group:delete n.group),e.room!==void 0&&(e.room.length?n.room=[...new Set(e.room)].slice(0,12):delete n.room),e.tags!==void 0){let o=[...new Set(e.tags.split(",").map(a=>a.trim().slice(0,30)).filter(Boolean))].slice(0,12);o.length?n.tags=o:delete n.tags}if(e.ikea!==void 0){let o=e.ikea.trim().slice(0,40);o?n.ikea=o:delete n.ikea}return n}var yt={electric:!1,mount:"floor",surface:!1,vehicle:!1,hole:!1},xt={edges:!1,glow:!1,screen:!1};function Te(i,e){return Object.fromEntries(Object.entries(i).filter(([t,n])=>n!==void 0&&e[t]!==n))}function De(i){let e=Te(i,yt);return e.mount!=="wall"&&delete e.wall_y,e.parts=i.parts.map(t=>Te(t,xt)),{name:`${i.id}.json`,text:`${JSON.stringify(e,null,2)}
`}}function Be(i,e){let t;try{t=JSON.parse(i)}catch{let o=i.indexOf("{"),a=i.lastIndexOf("}");try{t=JSON.parse(i.slice(o,a+1))}catch{return{error:"not_json"}}}if(!t||typeof t!="object"||Array.isArray(t))return{error:"not_an_item"};let n=t;if(n.format==="home3d-pack"||n.format==="fp3dpack")return{error:"pack_file"};if(typeof n.id!="string"||!Array.isArray(n.parts))return{error:"not_an_item"};let r=n;return{item:{...r,id:U(r.id,e)}}}function pe(i){return(i??[]).map(([e,t])=>`${e} ${t}`).join(", ")}function We(i){let e=i.split(/[,;]/).map(t=>t.trim()).filter(Boolean).map(t=>t.split(/\s+/).map(Number));return e.length<2||e.length>12||e.some(t=>t.length!==2||t.some(n=>!Number.isFinite(n)))?null:e.map(([t,n])=>[_(g(t,0,1,0)),_(g(n,0,1,0))])}var wt=new URL(import.meta.url),vt=new URL("./home-3d-3d.js?v=383182b6c818",wt).href,Ve;function je(){return Ve??=import(vt),Ve}var Ge=S`
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
`,Ye=S`
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
`;var Ke={id:"round_side_table_40",name:{en:"Round side table 40"},size:[.4,.4,.52],group:"table",room:["living","bedroom","conservatory"],tags:["side table","lamp table","end table","occasional table","round","tripod"],family:"round_side_table",variant:{en:"\xD840"},surface:!0,parts:[{shape:"cyl",x:0,z:0,w:1,d:1,y:.9519,h:.0481,color:"wood",fix:"h"},{shape:"cyl",x:0,z:0,w:.8,d:.8,y:.32,h:.0385,color:"wood",fix:"h"},{shape:"loft",x:0,z:-.425,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:0,tz:-.3,tw:.075,td:.075,fix:"wd"},{shape:"loft",x:.3681,z:.2125,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:.2598,tz:.15,tw:.075,td:.075,fix:"wd"},{shape:"loft",x:-.3681,z:.2125,w:.075,d:.075,y:0,h:.9519,color:"wood",tx:-.2598,tz:.15,tw:.075,td:.075,fix:"wd"}]};var qe={id:"vase",name:{en:"Vase"},size:[.2,.2,.42],group:"vase",tags:["vase","ceramic","flower vase","ornament","tall","floor vase"],family:"vase",variant:{en:"Tall"},mount:"surface",parts:[{shape:"lathe",x:0,z:0,w:1,d:1,y:0,h:1,color:"pot",profile:[[0,0],[.55,0],[.9,.18],[1,.4],[.8,.68],[.42,.85],[.4,.95],[.5,1],[0,1]]}]};var I={ie_title:"Your own items",ie_intro:"Build furniture from simple shapes. Your items are kept in Home Assistant, everyone in the home sees them in the library, and they never leave it unless you export them.",ie_new:"New item",ie_new_name:"New item",ie_import:"Import item files \u2026",ie_brief:"Copy instructions for an LLM",ie_brief_hint:"Copies a short brief on the item format. Paste it into ChatGPT, Claude or Gemini, say what you want, then paste the answer under \u201CPaste an item\u201D.",ie_brief_copied:"Copied. Paste it into the LLM's chat, say what item you want, then paste its answer under \u201CPaste an item\u201D.",ie_brief_failed:"Could not copy to the clipboard: {why}",ie_paste:"Paste an item",ie_paste_label:"An item's JSON (an LLM's answer can be pasted as it is)",ie_paste_import:"Import",ie_imported:"Imported: {names}",ie_import_failed:"{file}: {why}",ie_import_replace:"\u201C{name}\u201D is already one of your items. Replace it? (Cancel keeps both.)",ie_err_not_json:"not a JSON file",ie_err_not_an_item:"not an item file (an item has an id and parts)",ie_err_pack_file:"this is a pack's pack.json; import the whole pack folder under Packs",ie_none:"No items of your own yet.",ie_close:"Close",ie_save:"Save",ie_saved:"Saved. It is in the library now.",ie_unsaved:"Not saved yet",ie_save_failed:"Not saved: {why}",ie_export:"Export",ie_delete:"Delete",ie_delete_confirm:"Delete \u201C{name}\u201D? Copies already placed stay in the plan and keep their look.",ie_discard:"Discard the changes to \u201C{name}\u201D?",ie_details:"Item",ie_name:"Name",ie_section:"Library section",ie_section_none:"\u2013 sorted by its name \u2013",ie_rooms:"Rooms (none: any room)",ie_tags:"Search words (separated by commas)",ie_ikea:"IKEA name (optional)",ie_size:"Size in metres (width, depth, height)",ie_mount:"Stands",ie_mount_floor:"on the floor",ie_mount_surface:"on the item below it",ie_mount_wall:"on a wall",ie_mount_ceiling:"from the ceiling",ie_wall_y:"Bottom above the floor (m)",ie_flag_surface:"Its top carries other items",ie_flag_electric:"Can be linked to a switch and a power sensor",ie_flag_light:"Lamp: how its light spreads",ie_parts:"Parts ({n} of {max})",ie_parts_hint:"Measures are fractions of the item's size: x and z from \u22120.5 to 0.5 (front is +z), width, depth and height up to 1, bottom (y) from 0 to 1.",ie_add:"Add",ie_shape_box:"Box",ie_shape_cyl:"Cylinder",ie_shape_loft:"Loft (sloped box)",ie_shape_sphere:"Sphere",ie_shape_lathe:"Lathe (turned)",ie_shape_rbox:"Rounded box",ie_colour:"Colour",ie_colour_own:"own colour",ie_fixed:"Keeps",ie_fixed_hint:"Measures this part keeps when the item is resized (legs keep their width, a top keeps its thickness).",ie_round:"Rounding",ie_duplicate:"Copy",ie_remove_part:"Remove part",ie_part:"Part {n}",ie_turn_hint:"Drag the picture to turn the item.",ie_view_front:"Front",ie_view_side:"Side",ie_view_top:"Top",ie_view_angle:"Angle"},$t={ie_title:"Eigene M\xF6bel",ie_intro:"Baue M\xF6bel aus einfachen Formen. Sie bleiben in Home Assistant, alle im Haushalt finden sie in der Bibliothek, und sie verlassen es nur, wenn du sie exportierst.",ie_new:"Neues M\xF6bel",ie_new_name:"Neues M\xF6bel",ie_import:"M\xF6bel-Dateien importieren \u2026",ie_brief:"Anleitung f\xFCr eine KI kopieren",ie_brief_hint:"Kopiert eine kurze Beschreibung des M\xF6bel-Formats. In ChatGPT, Claude oder Gemini einf\xFCgen, sagen, was du m\xF6chtest, und die Antwort unter \u201EM\xF6bel einf\xFCgen\u201C einf\xFCgen.",ie_brief_copied:"Kopiert. In den Chat der KI einf\xFCgen, sagen, welches M\xF6bel du m\xF6chtest, und die Antwort unter \u201EM\xF6bel einf\xFCgen\u201C einf\xFCgen.",ie_brief_failed:"Konnte nicht in die Zwischenablage kopieren: {why}",ie_paste:"M\xF6bel einf\xFCgen",ie_paste_label:"Das JSON eines M\xF6bels (die Antwort einer KI so, wie sie ist)",ie_paste_import:"Importieren",ie_imported:"Importiert: {names}",ie_import_failed:"{file}: {why}",ie_import_replace:"\u201E{name}\u201C gibt es schon. Ersetzen? (Abbrechen beh\xE4lt beide.)",ie_err_not_json:"keine JSON-Datei",ie_err_not_an_item:"keine M\xF6bel-Datei (ein M\xF6bel hat eine id und Teile)",ie_err_pack_file:"das ist die pack.json eines Packs; den ganzen Pack-Ordner unter Packs importieren",ie_none:"Noch keine eigenen M\xF6bel.",ie_close:"Schlie\xDFen",ie_save:"Speichern",ie_saved:"Gespeichert. Es ist jetzt in der Bibliothek.",ie_unsaved:"Noch nicht gespeichert",ie_save_failed:"Nicht gespeichert: {why}",ie_export:"Exportieren",ie_delete:"L\xF6schen",ie_delete_confirm:"\u201E{name}\u201C l\xF6schen? Schon platzierte bleiben im Plan und behalten ihr Aussehen.",ie_discard:"\xC4nderungen an \u201E{name}\u201C verwerfen?",ie_details:"M\xF6bel",ie_name:"Name",ie_section:"Bereich der Bibliothek",ie_section_none:"\u2013 nach dem Namen \u2013",ie_rooms:"R\xE4ume (keiner: jeder Raum)",ie_tags:"Suchw\xF6rter (mit Kommas getrennt)",ie_ikea:"IKEA-Name (optional)",ie_size:"Gr\xF6\xDFe in Metern (Breite, Tiefe, H\xF6he)",ie_mount:"Steht",ie_mount_floor:"auf dem Boden",ie_mount_surface:"auf dem M\xF6bel darunter",ie_mount_wall:"an der Wand",ie_mount_ceiling:"an der Decke",ie_wall_y:"Unterkante \xFCber dem Boden (m)",ie_flag_surface:"Oben kann man etwas abstellen",ie_flag_electric:"Mit Schalter und Leistungssensor verkn\xFCpfbar",ie_flag_light:"Lampe: wie ihr Licht f\xE4llt",ie_parts:"Teile ({n} von {max})",ie_parts_hint:"Ma\xDFe sind Anteile der M\xF6belgr\xF6\xDFe: x und z von \u22120,5 bis 0,5 (vorne ist +z), Breite, Tiefe und H\xF6he bis 1, Unterkante (y) von 0 bis 1.",ie_add:"Hinzuf\xFCgen",ie_shape_box:"Quader",ie_shape_cyl:"Zylinder",ie_shape_loft:"Loft (schr\xE4ger Quader)",ie_shape_sphere:"Kugel",ie_shape_lathe:"Drehteil",ie_shape_rbox:"Abgerundeter Quader",ie_colour:"Farbe",ie_colour_own:"eigene Farbe",ie_fixed:"Beh\xE4lt",ie_fixed_hint:"Ma\xDFe, die dieses Teil beh\xE4lt, wenn das M\xF6bel gr\xF6\xDFer oder kleiner wird (Beine behalten ihre Breite, eine Platte ihre St\xE4rke).",ie_round:"Rundung",ie_duplicate:"Kopie",ie_remove_part:"Teil entfernen",ie_part:"Teil {n}",ie_turn_hint:"Zum Drehen das Bild ziehen.",ie_view_front:"Vorne",ie_view_side:"Seite",ie_view_top:"Oben",ie_view_angle:"Schr\xE4g"};function Je(i,e){return(t,n={})=>{if(!t.startsWith("ie_"))return i(t,n);let o=((e()??"").startsWith("de")?$t:I)[t]??I[t]??t;for(let[a,s]of Object.entries(n))o=o.replace(`{${a}}`,String(s));return o}}var St=[["A round side table (cylinders for the top and shelf, splayed lofts for the legs, fixed measures)",Ke],["A vase (one lathe)",qe]],Xe="```";function Et(i){let{family:e,variant:t,parts:n,...r}=i,o=JSON.stringify(r).slice(0,-1),a=n.map(s=>`  ${JSON.stringify(s)}`).join(`,
`);return`${o},"parts":[
${a}
]}`}var At={box:"a box filling the part's box.",cyl:'a cylinder, upright; its diameter is the smaller of w and d. With "axis": "x" or "z" it lies down along that axis (wheels, rollers, pipes, rails).',loft:`a box whose top face is another rectangle: "tx", "tz" give its centre and "tw", "td" its size (same ranges as x, z, w, d; default: the bottom's). For sloped or tapered things: lamp shades, splayed legs, bonnets.`,sphere:"a ball filling the part's box, squashed when w, d and h differ (knobs, globe lamps, pouffes).",lathe:`a "profile" turned around the part's upright axis (vases, bowls, lamp bases, planters). The profile is 2 to ${N.maxProfilePoints} points [radius, height], each ${w(N.level)}: radius 1 touches the part's box, 0 is the axis; height 0 is the part's bottom, 1 its top. Write them from the bottom up the outside, like the right half of the silhouette; for a bowl go up the outside, over the rim and down the inside. A lathe must have a profile, and only a lathe may have one.`,rbox:`a box with rounded edges (cushions, mattresses, appliances, soft seats); optional "round" ${w(N.round)} of its shortest side (default 0.2; 0.5 is fully round). Only an rbox may have "round".`},Rt={body:"the main painted or laminate body",fabric:"upholstery, rugs, curtains",cushion:"seat and back cushions, pillows",wood:"wood",white:"white ceramics, white goods, white plastic",metal:"steel, chrome, brass, handles",dark:"black parts, screens, rubber, shadows",glass:"glass (drawn see-through)",plant:"leaves",pot:"plant pots, ceramics, terracotta",accent:"a highlight colour: buttons, LEDs, a coloured detail"};function w([i,e]){return`${i} to ${e}`}var Y=i=>i.map(e=>`"${e}"`).join(", ");function Ze({kinds:i,rooms:e}){let t=N;return`You design one item (a piece of furniture or another thing in a home) for Home 3D, a 3D floor plan for Home Assistant. Ask me what the item is if I have not said, then answer with the item.

ANSWER
Answer with ONE JSON object and nothing else: no explanation, no comments, no trailing commas. I paste it into Home 3D's item editor (${I.ie_paste} \u2192 ${I.ie_paste_import}), or save it as <id>.json for "${I.ie_import}"; the editor checks it against the rules below, and it must import as it is.

THE ITEM
- "id" (required): 1 to 40 characters: lower-case letters, digits, "_", "." and "-", starting with a letter or a digit. Make it from the name ("Oak wall shelf" \u2192 "oak_wall_shelf").
- "name" (required): the name by language code, at least English: {"en": "Oak wall shelf"}. 1 to ${t.maxNameLength} characters, a readable name in UK English (Wardrobe, Hob, Worktop), not a product name.
- "size" (required): the real size in metres as [width, depth, height], each ${w(t.metres)}. Width runs left to right as you face the item's front, depth from back to front.
- "parts" (required): 1 to ${t.maxParts} parts (see PARTS). 5 to 30 is usually right; keep it low-poly.
- "group": what it is, its section in the library: ${Y(i)}.
- "room": up to ${t.maxRooms} rooms it is made for: ${Y(e)}. Leave it out for any room.
- "tags": up to ${t.maxTags} more search words, 1 to ${t.maxTagLength} characters each.
- "mount": where it sits: ${Y(t.mounts)}. "floor" is the default; "surface" stands on the item below it (a lamp on a table); "wall" hangs on a wall with its bottom "wall_y" metres above the floor (${w(t.wallY)}, default 1); "ceiling" hangs from the ceiling.
- "surface": true when its top carries other items (tables, worktops, sideboards).
- "electric": true when it can be linked to a switch and a power sensor (appliances, lamps, TVs).
- "light": for a lamp, how its light spreads: ${Y(t.lights)}.
- "ikea": the IKEA product name, only if it is one ("KALLAX").
No other fields are allowed, in the item or in a part. Leave out any optional field you do not need.

PARTS
Every measure of a part is a fraction of the item's size, so the item can be resized in the plan:
- "x", "z": the part's centre across and in depth, ${w(t.centre)}. x 0.5 is the right edge, z 0.5 is the FRONT edge, z -0.5 the back (against the wall).
- "w", "d", "h": the part's width, depth and height, ${w(t.extent)} (1 is the item's whole width, depth or height).
- "y": the part's bottom, ${w(t.level)} of the item's height (0 is the floor). Keep y + h at most 1 and every part inside the item's box: x \xB1 w/2 and z \xB1 d/2 within -0.5 to 0.5.
- "shape": one of:
${t.shapes.map(n=>`  - "${n}": ${At[n]}`).join(`
`)}
- "color": a colour role (preferred: the plan's theme colours it) or "#rrggbb" for a fixed colour. Roles:
${t.colourRoles.map(n=>`  - "${n}": ${Rt[n]}`).join(`
`)}
- "top": another colour (role or "#rrggbb") for the part's top face.
- "fix": the measures the part KEEPS when the item is resized: "w", "d", "h" or several ("wd", "wdh"). Legs keep "wd", table tops, shelves and plinths keep "h", handles keep "wdh". Parts without fix (the carcass, a seat) stretch between them.
- "rot": a turn of the part around its own upright axis in degrees (${w(t.rot)}), for diagonal struts or spiral steps.
- "glow": true for the part of a lamp that lights up (shade, bulb).
- "screen": true for a TV or monitor screen; its front (+z) shows the picture.
- "edges": true, "glow" or "faint" draws outlines; rarely needed.

GOOD ITEMS
- Parts touch or overlap; nothing floats. Legs stand on y 0, a top sits on its legs.
- Use the real proportions of the thing; fractions are of the item's own size, so a 2 cm top on a 75 cm table is h 0.027.
- Put the front (doors, drawers, the screen, the seat) towards +z.

EXAMPLES (items Home 3D ships with)
${St.map(([n,r])=>`${n}:
${Xe}json
${Et(r)}
${Xe}`).join(`

`)}
`}var It=/^#[0-9a-f]{6}$/i,Mt=[["ie_view_angle",35,25],["ie_view_front",0,0],["ie_view_side",90,0],["ie_view_top",0,80]];async function Tt(i){try{await navigator.clipboard.writeText(i);return}catch(e){let t=document.createElement("textarea");t.value=i,t.style.position="fixed",t.style.opacity="0",document.body.append(t),t.select();let n=document.execCommand("copy");if(t.remove(),!n)throw e}}function Ot(i,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),n=document.createElement("a");n.href=t,n.download=i,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var de=class extends x{static properties={options:{attribute:!1},_items:{state:!0},_draft:{state:!0},_savedId:{state:!0},_dirty:{state:!0},_picture:{state:!0},_msg:{state:!0},_busy:{state:!0},_yaw:{state:!0},_pitch:{state:!0},_addShape:{state:!0},_paste:{state:!0},_note:{state:!0}};drawn="";drawing=!1;drag=null;constructor(){super(),this._items=[],this._draft=null,this._savedId=null,this._dirty=!1,this._picture=null,this._msg=null,this._busy=!1,this._yaw=35,this._pitch=25,this._addShape="box",this._paste=null,this._note=null}connectedCallback(){super.connectedCallback(),this._items=[...this.options?.items??[]];let e=this.options?.open;e==="new"?this.startNew():e?this.pick(this._items.find(t=>t.id===e)??null):this._items.length&&this.pick(this._items[0])}get hass(){return this.options.hassSource?.()??this.options.hass}t(e,t){return this.options.t(e,t)}itemName(e){let t=(this.hass.language??"en").split("-")[0];return e.name[t]??e.name.en??Object.values(e.name)[0]??e.id}leave(){return!this._dirty||!this._draft||confirm(this.t("ie_discard",{name:this.itemName(this._draft)}))}pick(e){this._draft=e?structuredClone(e):null,this._savedId=e?.id??null,this._dirty=!1,this._msg=null}startNew(){this._draft=Oe(this.t("ie_new_name"),this._items.map(e=>e.id)),this._savedId=null,this._dirty=!0,this._msg=null}edit(e){this._draft=e,this._dirty=!0,this._msg=null}close(){this.leave()&&this.remove()}updated(){let e=JSON.stringify([this._draft,Math.round(this._yaw),Math.round(this._pitch)]);!this._draft||e===this.drawn||this.drawing||(this.drawing=!0,requestAnimationFrame(()=>{this.draw(e)}))}async draw(e){try{let t=await je(),n=this._draft;n&&(this._picture=t.itemPicture(n,420,this._yaw,this._pitch)),this.drawn=e}catch(t){this._msg={ok:!1,text:String(t?.message??t)},this.drawn=e}finally{this.drawing=!1}this.requestUpdate()}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId),this.drag={x:e.clientX,y:e.clientY,yaw:this._yaw,pitch:this._pitch}}pointerMove(e){this.drag&&(this._yaw=this.drag.yaw-(e.clientX-this.drag.x)*.6,this._pitch=Math.max(-10,Math.min(80,this.drag.pitch+(e.clientY-this.drag.y)*.4)))}async save(){let e=this._draft;if(!(!e||this._busy)){this._busy=!0;try{let t=await ae(this.hass,e),n=this._items.some(r=>r.id===t.id);this._items=n?this._items.map(r=>r.id===t.id?t:r):[...this._items,t],this._draft=structuredClone(t),this._savedId=t.id,this._dirty=!1,this._msg={ok:!0,text:this.t("ie_saved")},this.options.changed()}catch(t){let n=t??{};this._msg={ok:!1,text:this.t("ie_save_failed",{why:n.message??n.code??String(t)})}}finally{this._busy=!1}}}exportItem(){if(!this._draft)return;let e=De(this._draft);Ot(e.name,e.text)}async deleteItem(){let e=this._draft;if(e){if(this._savedId===null){this.pick(this._items[0]??null);return}if(confirm(this.t("ie_delete_confirm",{name:this.itemName(e)})))try{await Me(this.hass,this._savedId),this._items=this._items.filter(t=>t.id!==this._savedId),this.pick(this._items[0]??null),this.options.changed()}catch(t){this._msg={ok:!1,text:String(t?.message??t)}}}}async copyBrief(){try{await Tt(Ze({kinds:this.options.kinds,rooms:this.options.rooms})),this._note={ok:!0,text:this.t("ie_brief_copied")}}catch(e){this._note={ok:!1,text:this.t("ie_brief_failed",{why:String(e?.message??e)})}}}async importFiles(e){let t=e.target,n=[...t.files??[]];t.value="",!(!n.length||!this.leave())&&await this.importTexts(await Promise.all(n.map(async r=>({name:r.name,text:await r.text()}))))}async importPasted(){let e=this._paste?.trim();if(!(!e||this._busy||!this.leave())){this._busy=!0;try{await this.importTexts([{name:this.t("ie_paste"),text:e}])&&(this._paste=null)}finally{this._busy=!1}}}async importTexts(e){let t=[],n=[];for(let o of e){let a=o.text,s=Be(a,[]);if("error"in s){n.push(this.t("ie_import_failed",{file:o.name,why:this.t(`ie_err_${s.error}`)}));continue}let l=s.item,u=this._items.find(c=>c.id===l.id);u&&!confirm(this.t("ie_import_replace",{name:this.itemName(u)}))&&(l={...l,id:U(l.id,this._items.map(c=>c.id))});try{let c=await ae(this.hass,l);this._items=this._items.some(p=>p.id===c.id)?this._items.map(p=>p.id===c.id?c:p):[...this._items,c],t.push(c)}catch(c){let p=c?.message??String(c);n.push(this.t("ie_import_failed",{file:o.name,why:p}))}}t.length&&(this.pick(t[t.length-1]),this.options.changed());let r=t.length?[this.t("ie_imported",{names:t.map(o=>this.itemName(o)).join(", ")})]:[];return this._msg={ok:n.length===0,text:[...r,...n].join(" \xB7 ")},this._note=this._draft?null:this._msg,n.length===0}render(){return h`<div class="ie-backdrop" @click=${e=>e.target===e.currentTarget&&this.close()}>
      <div class="ie" role="dialog" aria-modal="true" aria-label=${this.t("ie_title")}>
        <header class="ie-head">
          <h2>${this.t("ie_title")}</h2>
          <button class="fp3d-btn" @click=${()=>this.close()}>${this.t("ie_close")}</button>
        </header>
        <div class="ie-body">
          ${this.renderList()}
          ${this._draft?this.renderDraft(this._draft):h`<p class="ie-sub ie-empty">${this.t("ie_intro")}</p>`}
        </div>
      </div>
    </div>`}renderList(){return h`<nav class="ie-list">
      <p class="ie-sub">${this.t("ie_intro")}</p>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.leave()&&this.startNew()}>+ ${this.t("ie_new")}</button>
      <label class="fp3d-btn ie-file">
        ${this.t("ie_import")}
        <input type="file" accept=".json,application/json" multiple hidden @change=${e=>this.importFiles(e)} />
      </label>
      <button class="fp3d-btn ie-paste-open" aria-expanded=${this._paste!==null} @click=${()=>this._paste=this._paste===null?"":null}>${this.t("ie_paste")}</button>
      ${this._paste!==null?h`<label class="fp3d-field ie-paste"
              >${this.t("ie_paste_label")}<textarea rows="6" spellcheck="false" .value=${this._paste} @input=${e=>this._paste=e.target.value}></textarea
            ></label>
            <button class="fp3d-btn fp3d-primary ie-paste-import" ?disabled=${!this._paste.trim()||this._busy} @click=${()=>this.importPasted()}>${this.t("ie_paste_import")}</button>`:d}
      <button class="fp3d-btn ie-brief" title=${this.t("ie_brief_hint")} @click=${()=>this.copyBrief()}>${this.t("ie_brief")}</button>
      ${this._note?h`<p class="ie-msg ${this._note.ok?"ok":"bad"}" role="status">${this._note.text}</p>`:d}
      ${this._items.length?d:h`<p class="ie-sub">${this.t("ie_none")}</p>`}
      <ul>
        ${this._items.map(e=>h`<li>
            <button class="ie-pick ${e.id===this._savedId?"on":""}" @click=${()=>e.id!==this._savedId&&this.leave()&&this.pick(e)}>
              ${this.itemName(e)}
            </button>
          </li>`)}
      </ul>
    </nav>`}renderDraft(e){return h`<section class="ie-stage">
        <div class="ie-picture" @pointerdown=${t=>this.pointerDown(t)} @pointermove=${t=>this.pointerMove(t)} @pointerup=${()=>this.drag=null} @pointercancel=${()=>this.drag=null}>
          ${this._picture?h`<img src=${this._picture} alt=${this.itemName(e)} draggable="false" />`:d}
        </div>
        <div class="ie-views">
          ${Mt.map(([t,n,r])=>h`<button
              class="fp3d-btn"
              @click=${()=>{this._yaw=n,this._pitch=r}}
            >
              ${this.t(t)}
            </button>`)}
        </div>
        <p class="ie-sub">${this.t("ie_turn_hint")}</p>
        <div class="ie-actions">
          <button class="fp3d-btn fp3d-primary" ?disabled=${this._busy} @click=${()=>this.save()}>${this.t("ie_save")}</button>
          <button class="fp3d-btn" @click=${()=>this.exportItem()}>${this.t("ie_export")}</button>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteItem()}>${this.t("ie_delete")}</button>
          ${this._dirty?h`<span class="ie-sub">${this.t("ie_unsaved")}</span>`:d}
        </div>
        ${this._msg?h`<p class="ie-msg ${this._msg.ok?"ok":"bad"}" role="status">${this._msg.text}</p>`:d}
      </section>
      <section class="ie-form">${this.renderDetails(e)} ${this.renderParts(e)}</section>`}renderDetails(e){let t=s=>this.edit(Ue(e,s,this._savedId===null?this._items.map(l=>l.id):void 0)),n=s=>{let l={...e,...s};for(let[u,c]of Object.entries(s))(c===void 0||c===!1)&&delete l[u];this.edit(l)},r=s=>s.target.value,o=new Set(e.room??[]),a=e.mount??"floor";return h`<h3>${this.t("ie_details")}</h3>
      <label class="fp3d-field">${this.t("ie_name")}<input type="text" maxlength="80" .value=${e.name.en??this.itemName(e)} @change=${s=>t({name:r(s)})} /></label>
      <label class="fp3d-field"
        >${this.t("ie_section")}
        <select @change=${s=>t({group:r(s)})}>
          <option value="" ?selected=${!e.group}>${this.t("ie_section_none")}</option>
          ${this.options.kinds.map(s=>h`<option value=${s} ?selected=${e.group===s}>${this.t(`lib_kind_${s}`)}</option>`)}
        </select>
      </label>
      <div class="fp3d-field">
        ${this.t("ie_rooms")}
        <div class="ie-chips">
          ${this.options.rooms.map(s=>h`<button
              class="ie-chip ${o.has(s)?"on":""}"
              aria-pressed=${o.has(s)}
              @click=${()=>t({room:o.has(s)?[...o].filter(l=>l!==s):[...o,s]})}
            >
              ${this.t(`lib_room_${s}`)}
            </button>`)}
        </div>
      </div>
      <label class="fp3d-field">${this.t("ie_tags")}<input type="text" .value=${(e.tags??[]).join(", ")} @change=${s=>t({tags:r(s)})} /></label>
      <label class="fp3d-field">${this.t("ie_ikea")}<input type="text" maxlength="40" .value=${e.ikea??""} @change=${s=>t({ikea:r(s)})} /></label>
      <div class="fp3d-field">
        ${this.t("ie_size")}
        <div class="ie-row3">
          ${[0,1,2].map(s=>h`<input
              type="number"
              min="0.01"
              max="10"
              step="0.01"
              .value=${String(e.size[s])}
              @change=${l=>{let u=[...e.size],c=Number(r(l));u[s]=Number.isFinite(c)?Math.min(10,Math.max(.01,Math.round(c*1e3)/1e3)):u[s],n({size:u})}}
            />`)}
        </div>
      </div>
      <label class="fp3d-field"
        >${this.t("ie_mount")}
        <select @change=${s=>n({mount:r(s)==="floor"?void 0:r(s)})}>
          ${le.map(s=>h`<option value=${s} ?selected=${a===s}>${this.t(`ie_mount_${s}`)}</option>`)}
        </select>
      </label>
      ${a==="wall"?h`<label class="fp3d-field"
            >${this.t("ie_wall_y")}<input
              type="number"
              min="0"
              max="3"
              step="0.05"
              .value=${String(e.wall_y??1)}
              @change=${s=>n({wall_y:Math.min(3,Math.max(0,Number(r(s))||0))})}
          /></label>`:d}
      <div class="ie-flags">
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.surface} @change=${s=>n({surface:s.target.checked})} /> ${this.t("ie_flag_surface")}</label>
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.electric} @change=${s=>n({electric:s.target.checked})} /> ${this.t("ie_flag_electric")}</label>
        <label class="fp3d-field"
          >${this.t("ie_flag_light")}
          <select @change=${s=>n({light:r(s)||void 0})}>
            <option value="" ?selected=${!e.light}>–</option>
            ${ce.map(s=>h`<option value=${s} ?selected=${e.light===s}>${s}</option>`)}
          </select>
        </label>
      </div>`}renderParts(e){return h`<h3>${this.t("ie_parts",{n:e.parts.length,max:60})}</h3>
      <p class="ie-sub">${this.t("ie_parts_hint")}</p>
      <div class="ie-add">
        <select aria-label=${this.t("ie_add")} @change=${t=>this._addShape=t.target.value}>
          ${H.map(t=>h`<option value=${t} ?selected=${this._addShape===t}>${this.t(`ie_shape_${t}`)}</option>`)}
        </select>
        <button class="fp3d-btn" ?disabled=${e.parts.length>=60} @click=${()=>this.edit(Le(e,this._addShape))}>+ ${this.t("ie_add")}</button>
      </div>
      ${e.parts.map((t,n)=>this.renderPart(e,t,n))}`}renderPart(e,t,n){let r=s=>this.edit(Ce(e,n,s)),o=(s,l,u)=>h`<label class="ie-num"
        >${s==="round"?this.t("ie_round"):s}<input
          type="number"
          min=${l}
          max=${u}
          step="0.01"
          .value=${String(t[s]??.2)}
          @change=${c=>r({[s]:Number(c.target.value)})}
      /></label>`,a=It.test(t.color);return h`<fieldset class="ie-part">
      <legend>${this.t("ie_part",{n:n+1})}</legend>
      <div class="ie-part-top">
        <select aria-label=${this.t("ie_add")} @change=${s=>r({shape:s.target.value})}>
          ${H.map(s=>h`<option value=${s} ?selected=${t.shape===s}>${this.t(`ie_shape_${s}`)}</option>`)}
        </select>
        <select
          aria-label=${this.t("ie_colour")}
          @change=${s=>{let l=s.target.value;r({color:l==="own"?"#888888":l})}}
        >
          ${this.options.roles.map(s=>h`<option value=${s} ?selected=${t.color===s}>${this.t(`colour_role_${s}`)}</option>`)}
          <option value="own" ?selected=${a}>${this.t("ie_colour_own")}</option>
        </select>
        ${a?h`<input type="color" aria-label=${this.t("ie_colour_own")} .value=${t.color} @change=${s=>r({color:s.target.value})} />`:d}
        <button class="fp3d-btn" ?disabled=${e.parts.length>=60} @click=${()=>this.edit(Ne(e,n))}>${this.t("ie_duplicate")}</button>
        <button class="fp3d-btn fp3d-danger" title=${this.t("ie_remove_part")} aria-label=${this.t("ie_remove_part")} ?disabled=${e.parts.length<=1} @click=${()=>this.edit(He(e,n))}>✕</button>
      </div>
      <div class="ie-nums">${o("x",-.5,.5)} ${o("z",-.5,.5)} ${o("w",.001,1)} ${o("d",.001,1)} ${o("y",0,1)} ${o("h",.001,1)} ${t.shape==="rbox"?o("round",.01,.5):d}</div>
      ${t.shape==="lathe"?h`<label class="fp3d-field"
            >profile<input
              type="text"
              .value=${pe(t.profile)}
              @change=${s=>{let l=s.target,u=We(l.value);u?r({profile:u}):l.value=pe(t.profile)}}
          /></label>`:d}
      <div class="ie-fix" title=${this.t("ie_fixed_hint")}>
        <span class="ie-sub">${this.t("ie_fixed")}</span>
        ${["w","d","h"].map(s=>h`<button class="ie-chip ${t.fix?.includes(s)?"on":""}" aria-pressed=${!!t.fix?.includes(s)} @click=${()=>this.edit(Fe(e,n,s))}>${s}</button>`)}
      </div>
    </fieldset>`}static styles=[Ge,Ye,S`
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
    `]};customElements.get("fp3d-item-editor")||customElements.define("fp3d-item-editor",de);function Bn(i){document.querySelector("fp3d-item-editor")?.remove();let e=document.createElement("fp3d-item-editor"),t=()=>i.hassSource?.()??i.hass,n=Je(i.t,()=>t().language);e.options={...i,t:n},document.body.append(e)}export{Bn as openItemEditor};
