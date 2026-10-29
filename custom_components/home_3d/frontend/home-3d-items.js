var L=globalThis,D=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),ae=new WeakMap,I=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(D&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ae.set(t,e))}return e}toString(){return this.cssText}},le=s=>new I(typeof s=="string"?s:s+"",void 0,F),A=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new I(t,s,F)},de=(s,e)=>{if(D)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),r=L.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},W=D?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return le(t)})(s):s;var{is:We,defineProperty:Ve,getOwnPropertyDescriptor:Ke,getOwnPropertyNames:qe,getOwnPropertySymbols:Je,getPrototypeOf:Xe}=Object,B=globalThis,pe=B.trustedTypes,Ye=pe?pe.emptyScript:"",Ge=B.reactiveElementPolyfillSupport,C=(s,e)=>s,V={toAttribute(s,e){switch(e){case Boolean:s=s?Ye:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},he=(s,e)=>!We(s,e),ce={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:he};Symbol.metadata??=Symbol("metadata"),B.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ce){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Ve(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){let{get:r,set:o}=Ke(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let n=r?.call(this);o?.call(this,a),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ce}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=Xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let t=this.properties,i=[...qe(t),...Je(t)];for(let r of i)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)t.unshift(W(r))}else e!==void 0&&t.push(W(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return de(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let o=(i.converter?.toAttribute!==void 0?i.converter:V).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:V;this._$Em=r;let n=a.fromAttribute(t,o.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,t,i,r=!1,o){if(e!==void 0){let a=this.constructor;if(r===!1&&(o=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??he)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,o]of i){let{wrapped:a}=o,n=this[r];a!==!0||this._$AL.has(r)||n===void 0||this.C(r,void 0,o,n)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[C("elementProperties")]=new Map,_[C("finalized")]=new Map,Ge?.({ReactiveElement:_}),(B.reactiveElementVersions??=[]).push("2.1.2");var Q=globalThis,ue=s=>s,j=Q.trustedTypes,me=j?j.createPolicy("lit-html",{createHTML:s=>s}):void 0,$e="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,xe="?"+v,Qe=`<${xe}>`,w=document,H=()=>w.createComment(""),T=s=>s===null||typeof s!="object"&&typeof s!="function",Z=Array.isArray,Ze=s=>Z(s)||typeof s?.[Symbol.iterator]=="function",K=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,_e=/>/g,x=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ge=/'/g,be=/"/g,ye=/^(?:script|style|textarea|title)$/i,ee=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),u=ee(1),$t=ee(2),xt=ee(3),k=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),ve=new WeakMap,y=w.createTreeWalker(w,129);function we(s,e){if(!Z(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return me!==void 0?me.createHTML(e):e}var et=(s,e)=>{let t=s.length-1,i=[],r,o=e===2?"<svg>":e===3?"<math>":"",a=M;for(let n=0;n<t;n++){let l=s[n],d,p,c=-1,m=0;for(;m<l.length&&(a.lastIndex=m,p=a.exec(l),p!==null);)m=a.lastIndex,a===M?p[1]==="!--"?a=fe:p[1]!==void 0?a=_e:p[2]!==void 0?(ye.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=x):p[3]!==void 0&&(a=x):a===x?p[0]===">"?(a=r??M,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?x:p[3]==='"'?be:ge):a===be||a===ge?a=x:a===fe||a===_e?a=M:(a=x,r=void 0);let f=a===x&&s[n+1].startsWith("/>")?" ":"";o+=a===M?l+Qe:c>=0?(i.push(d),l.slice(0,c)+$e+l.slice(c)+v+f):l+v+(c===-2?n:f)}return[we(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},N=class s{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,a=0,n=e.length-1,l=this.parts,[d,p]=et(e,t);if(this.el=s.createElement(d,i),y.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=y.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(let c of r.getAttributeNames())if(c.endsWith($e)){let m=p[a++],f=r.getAttribute(c).split(v),z=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:z[2],strings:f,ctor:z[1]==="."?J:z[1]==="?"?X:z[1]==="@"?Y:S}),r.removeAttribute(c)}else c.startsWith(v)&&(l.push({type:6,index:o}),r.removeAttribute(c));if(ye.test(r.tagName)){let c=r.textContent.split(v),m=c.length-1;if(m>0){r.textContent=j?j.emptyScript:"";for(let f=0;f<m;f++)r.append(c[f],H()),y.nextNode(),l.push({type:2,index:++o});r.append(c[m],H())}}}else if(r.nodeType===8)if(r.data===xe)l.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(v,c+1))!==-1;)l.push({type:7,index:o}),c+=v.length-1}o++}}static createElement(e,t){let i=w.createElement("template");return i.innerHTML=e,i}};function P(s,e,t=s,i){if(e===k)return e;let r=i!==void 0?t._$Co?.[i]:t._$Cl,o=T(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??=[])[i]=r:t._$Cl=r),r!==void 0&&(e=P(s,r._$AS(s,e.values),r,i)),e}var q=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,r=(e?.creationScope??w).importNode(t,!0);y.currentNode=r;let o=y.nextNode(),a=0,n=0,l=i[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new R(o,o.nextSibling,this,e):l.type===1?d=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(d=new G(o,this,e)),this._$AV.push(d),l=i[++n]}a!==l?.index&&(o=y.nextNode(),a++)}return y.currentNode=w,r}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},R=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),T(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==k&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ze(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=N.createElement(we(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(t);else{let o=new q(r,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=ve.get(e.strings);return t===void 0&&ve.set(e.strings,t=new N(e)),t}k(e){Z(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,r=0;for(let o of e)r===t.length?t.push(i=new s(this.O(H()),this.O(H()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=ue(e).nextSibling;ue(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},S=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,t=this,i,r){let o=this.strings,a=!1;if(o===void 0)e=P(this,e,t,0),a=!T(e)||e!==this._$AH&&e!==k,a&&(this._$AH=e);else{let n=e,l,d;for(e=o[0],l=0;l<o.length-1;l++)d=P(this,n[i+l],t,l),d===k&&(d=this._$AH[l]),a||=!T(d)||d!==this._$AH[l],d===h?e=h:e!==h&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},J=class extends S{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},X=class extends S{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Y=class extends S{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??h)===k)return;let i=this._$AH,r=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==h&&(i===h||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},G=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}};var tt=Q.litHtmlPolyfillSupport;tt?.(N,R),(Q.litHtmlVersions??=[]).push("3.3.3");var ke=(s,e,t)=>{let i=t?.renderBefore??e,r=i._$litPart$;if(r===void 0){let o=t?.renderBefore??null;i._$litPart$=r=new R(e.insertBefore(H(),o),o,void 0,t??{})}return r._$AI(s),r};var te=globalThis,$=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};$._$litElement$=!0,$.finalized=!0,te.litElementHydrateSupport?.({LitElement:$});var it=te.litElementPolyfillSupport;it?.({LitElement:$});(te.litElementVersions??=[]).push("4.2.2");async function ie(s,e){return(await s.callWS({type:"home_3d/items/save",item:e})).item}async function Ae(s,e){await s.callWS({type:"home_3d/items/remove",item_id:e})}var st=/^[a-z0-9][a-z0-9_.-]{0,39}$/;function se(s){return s.normalize("NFKD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,34).replace(/_+$/,"")||"item"}function O(s,e){let t=new Set(e),i=st.test(s)?s:se(s);if(!t.has(i))return i;for(let r=2;;r++){let o=`${i.slice(0,40-String(r).length-1)}_${r}`;if(!t.has(o))return o}}function Se(s,e){return{id:O(se(s),e),name:{en:s.trim()||"New item"},size:[.6,.6,.75],parts:[{shape:"box",x:0,z:0,w:1,d:1,y:0,h:.5,color:"body"}]}}var re=["box","cyl","loft","sphere","lathe","rbox"],E=60,rt=[[0,0],[.7,0],[1,.4],[.5,1],[0,1]],g=(s,e,t,i)=>Number.isFinite(s)?Math.min(t,Math.max(e,s)):i,b=s=>Math.round(s*1e3)/1e3;function Ee(s){let e={...s,x:b(g(s.x,-.5,.5,0)),z:b(g(s.z,-.5,.5,0)),w:b(g(s.w,.001,1,1)),d:b(g(s.d,.001,1,1)),y:b(g(s.y,0,1,0)),h:b(g(s.h,.001,1,1))};if(e.shape==="lathe"?e.profile=e.profile?.length?e.profile:rt.map(t=>[...t]):delete e.profile,e.shape==="rbox"?e.round=b(g(e.round??.2,.01,.5,.2)):delete e.round,e.shape!=="loft")for(let t of["tx","tz","tw","td"])delete e[t];return e.shape!=="cyl"&&delete e.axis,e}function U(s,e){return{...s,parts:e}}function Ie(s,e){if(s.parts.length>=E)return s;let t=Math.min(.75,Math.max(0,...s.parts.map(o=>o.y+o.h))),i=Math.max(.25,Math.min(.5,1-t)),r=Ee({shape:e,x:0,z:0,w:.5,d:.5,y:t,h:i,color:e==="lathe"||e==="sphere"?"accent":"body"});return U(s,[...s.parts,r])}function Ce(s,e,t){return U(s,s.parts.map((i,r)=>r===e?Ee({...i,...t}):i))}function Me(s,e,t){return U(s,s.parts.map((i,r)=>{if(r!==e)return i;let o=new Set(i.fix??"");o.has(t)?o.delete(t):o.add(t);let a=["w","d","h"].filter(d=>o.has(d)).join(""),{fix:n,...l}=i;return a?{...l,fix:a}:l}))}function He(s,e){return s.parts.length<=1?s:U(s,s.parts.filter((t,i)=>i!==e))}function Te(s,e){if(s.parts.length>=E||!s.parts[e])return s;let t=structuredClone(s.parts[e]);return U(s,[...s.parts.slice(0,e+1),t,...s.parts.slice(e+1)])}function Ne(s,e,t){let i={...s},r=e.name?.trim().slice(0,80);if(r&&(i.name={...s.name,en:r},t&&(i.id=O(se(r),t))),e.group!==void 0&&(e.group?i.group=e.group:delete i.group),e.room!==void 0&&(e.room.length?i.room=[...new Set(e.room)].slice(0,12):delete i.room),e.tags!==void 0){let o=[...new Set(e.tags.split(",").map(a=>a.trim().slice(0,30)).filter(Boolean))].slice(0,12);o.length?i.tags=o:delete i.tags}if(e.ikea!==void 0){let o=e.ikea.trim().slice(0,40);o?i.ikea=o:delete i.ikea}return i}var nt={electric:!1,mount:"floor",surface:!1,vehicle:!1,hole:!1},ot={edges:!1,glow:!1,screen:!1};function Pe(s,e){return Object.fromEntries(Object.entries(s).filter(([t,i])=>i!==void 0&&e[t]!==i))}function Re(s){let e=Pe(s,nt);return e.mount!=="wall"&&delete e.wall_y,e.parts=s.parts.map(t=>Pe(t,ot)),{name:`${s.id}.json`,text:`${JSON.stringify(e,null,2)}
`}}function Oe(s,e){let t;try{t=JSON.parse(s)}catch{return{error:"not_json"}}if(!t||typeof t!="object"||Array.isArray(t))return{error:"not_an_item"};let i=t;if(i.format==="home3d-pack"||i.format==="fp3dpack")return{error:"pack_file"};if(typeof i.id!="string"||!Array.isArray(i.parts))return{error:"not_an_item"};let r=i;return{item:{...r,id:O(r.id,e)}}}var at=12;function ne(s){return(s??[]).map(([e,t])=>`${e} ${t}`).join(", ")}function Ue(s){let e=s.split(/[,;]/).map(t=>t.trim()).filter(Boolean).map(t=>t.split(/\s+/).map(Number));return e.length<2||e.length>at||e.some(t=>t.length!==2||t.some(i=>!Number.isFinite(i)))?null:e.map(([t,i])=>[b(g(t,0,1,0)),b(g(i,0,1,0))])}var lt=new URL(import.meta.url),dt=new URL("./home-3d-3d.js?v=1534f83241f5",lt).href,ze;function Le(){return ze??=import(dt),ze}var De=A`
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
`,Be=A`
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
`;var pt=["ceiling","downlight","spot","panel","pendant","floor","uplight","table","wall","strip","bollard","garden"],ct=["floor","surface","wall","ceiling"],ht=/^#[0-9a-f]{6}$/i,ut=[["ie_view_angle",35,25],["ie_view_front",0,0],["ie_view_side",90,0],["ie_view_top",0,80]];function mt(s,e){let t=URL.createObjectURL(new Blob([e],{type:"application/json"})),i=document.createElement("a");i.href=t,i.download=s,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}var oe=class extends ${static properties={options:{attribute:!1},_items:{state:!0},_draft:{state:!0},_savedId:{state:!0},_dirty:{state:!0},_picture:{state:!0},_msg:{state:!0},_busy:{state:!0},_yaw:{state:!0},_pitch:{state:!0},_addShape:{state:!0}};drawn="";drawing=!1;drag=null;constructor(){super(),this._items=[],this._draft=null,this._savedId=null,this._dirty=!1,this._picture=null,this._msg=null,this._busy=!1,this._yaw=35,this._pitch=25,this._addShape="box"}connectedCallback(){super.connectedCallback(),this._items=[...this.options?.items??[]];let e=this.options?.open;e==="new"?this.startNew():e?this.pick(this._items.find(t=>t.id===e)??null):this._items.length&&this.pick(this._items[0])}get hass(){return this.options.hassSource?.()??this.options.hass}t(e,t){return this.options.t(e,t)}itemName(e){let t=(this.hass.language??"en").split("-")[0];return e.name[t]??e.name.en??Object.values(e.name)[0]??e.id}leave(){return!this._dirty||!this._draft||confirm(this.t("ie_discard",{name:this.itemName(this._draft)}))}pick(e){this._draft=e?structuredClone(e):null,this._savedId=e?.id??null,this._dirty=!1,this._msg=null}startNew(){this._draft=Se(this.t("ie_new_name"),this._items.map(e=>e.id)),this._savedId=null,this._dirty=!0,this._msg=null}edit(e){this._draft=e,this._dirty=!0,this._msg=null}close(){this.leave()&&this.remove()}updated(){let e=JSON.stringify([this._draft,Math.round(this._yaw),Math.round(this._pitch)]);!this._draft||e===this.drawn||this.drawing||(this.drawing=!0,requestAnimationFrame(()=>{this.draw(e)}))}async draw(e){try{let t=await Le(),i=this._draft;i&&(this._picture=t.itemPicture(i,420,this._yaw,this._pitch)),this.drawn=e}catch(t){this._msg={ok:!1,text:String(t?.message??t)},this.drawn=e}finally{this.drawing=!1}this.requestUpdate()}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId),this.drag={x:e.clientX,y:e.clientY,yaw:this._yaw,pitch:this._pitch}}pointerMove(e){this.drag&&(this._yaw=this.drag.yaw-(e.clientX-this.drag.x)*.6,this._pitch=Math.max(-10,Math.min(80,this.drag.pitch+(e.clientY-this.drag.y)*.4)))}async save(){let e=this._draft;if(!(!e||this._busy)){this._busy=!0;try{let t=await ie(this.hass,e),i=this._items.some(r=>r.id===t.id);this._items=i?this._items.map(r=>r.id===t.id?t:r):[...this._items,t],this._draft=structuredClone(t),this._savedId=t.id,this._dirty=!1,this._msg={ok:!0,text:this.t("ie_saved")},this.options.changed()}catch(t){let i=t??{};this._msg={ok:!1,text:this.t("ie_save_failed",{why:i.message??i.code??String(t)})}}finally{this._busy=!1}}}exportItem(){if(!this._draft)return;let e=Re(this._draft);mt(e.name,e.text)}async deleteItem(){let e=this._draft;if(e){if(this._savedId===null){this.pick(this._items[0]??null);return}if(confirm(this.t("ie_delete_confirm",{name:this.itemName(e)})))try{await Ae(this.hass,this._savedId),this._items=this._items.filter(t=>t.id!==this._savedId),this.pick(this._items[0]??null),this.options.changed()}catch(t){this._msg={ok:!1,text:String(t?.message??t)}}}}async importFiles(e){let t=e.target,i=[...t.files??[]];if(t.value="",!i.length||!this.leave())return;let r=[],o=[];for(let n of i){let l=await n.text(),d=Oe(l,[]);if("error"in d){o.push(this.t("ie_import_failed",{file:n.name,why:this.t(`ie_err_${d.error}`)}));continue}let p=d.item,c=this._items.find(m=>m.id===p.id);c&&!confirm(this.t("ie_import_replace",{name:this.itemName(c)}))&&(p={...p,id:O(p.id,this._items.map(m=>m.id))});try{let m=await ie(this.hass,p);this._items=this._items.some(f=>f.id===m.id)?this._items.map(f=>f.id===m.id?m:f):[...this._items,m],r.push(m)}catch(m){let f=m?.message??String(m);o.push(this.t("ie_import_failed",{file:n.name,why:f}))}}r.length&&(this.pick(r[r.length-1]),this.options.changed());let a=r.length?[this.t("ie_imported",{names:r.map(n=>this.itemName(n)).join(", ")})]:[];this._msg={ok:o.length===0,text:[...a,...o].join(" \xB7 ")}}render(){return u`<div class="ie-backdrop" @click=${e=>e.target===e.currentTarget&&this.close()}>
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
          ${ut.map(([t,i,r])=>u`<button
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
      <section class="ie-form">${this.renderDetails(e)} ${this.renderParts(e)}</section>`}renderDetails(e){let t=n=>this.edit(Ne(e,n,this._savedId===null?this._items.map(l=>l.id):void 0)),i=n=>{let l={...e,...n};for(let[d,p]of Object.entries(n))(p===void 0||p===!1)&&delete l[d];this.edit(l)},r=n=>n.target.value,o=new Set(e.room??[]),a=e.mount??"floor";return u`<h3>${this.t("ie_details")}</h3>
      <label class="fp3d-field">${this.t("ie_name")}<input type="text" maxlength="80" .value=${e.name.en??this.itemName(e)} @change=${n=>t({name:r(n)})} /></label>
      <label class="fp3d-field"
        >${this.t("ie_section")}
        <select @change=${n=>t({group:r(n)})}>
          <option value="" ?selected=${!e.group}>${this.t("ie_section_none")}</option>
          ${this.options.kinds.map(n=>u`<option value=${n} ?selected=${e.group===n}>${this.t(`lib_kind_${n}`)}</option>`)}
        </select>
      </label>
      <div class="fp3d-field">
        ${this.t("ie_rooms")}
        <div class="ie-chips">
          ${this.options.rooms.map(n=>u`<button
              class="ie-chip ${o.has(n)?"on":""}"
              aria-pressed=${o.has(n)}
              @click=${()=>t({room:o.has(n)?[...o].filter(l=>l!==n):[...o,n]})}
            >
              ${this.t(`lib_room_${n}`)}
            </button>`)}
        </div>
      </div>
      <label class="fp3d-field">${this.t("ie_tags")}<input type="text" .value=${(e.tags??[]).join(", ")} @change=${n=>t({tags:r(n)})} /></label>
      <label class="fp3d-field">${this.t("ie_ikea")}<input type="text" maxlength="40" .value=${e.ikea??""} @change=${n=>t({ikea:r(n)})} /></label>
      <div class="fp3d-field">
        ${this.t("ie_size")}
        <div class="ie-row3">
          ${[0,1,2].map(n=>u`<input
              type="number"
              min="0.01"
              max="10"
              step="0.01"
              .value=${String(e.size[n])}
              @change=${l=>{let d=[...e.size],p=Number(r(l));d[n]=Number.isFinite(p)?Math.min(10,Math.max(.01,Math.round(p*1e3)/1e3)):d[n],i({size:d})}}
            />`)}
        </div>
      </div>
      <label class="fp3d-field"
        >${this.t("ie_mount")}
        <select @change=${n=>i({mount:r(n)==="floor"?void 0:r(n)})}>
          ${ct.map(n=>u`<option value=${n} ?selected=${a===n}>${this.t(`ie_mount_${n}`)}</option>`)}
        </select>
      </label>
      ${a==="wall"?u`<label class="fp3d-field"
            >${this.t("ie_wall_y")}<input
              type="number"
              min="0"
              max="3"
              step="0.05"
              .value=${String(e.wall_y??1)}
              @change=${n=>i({wall_y:Math.min(3,Math.max(0,Number(r(n))||0))})}
          /></label>`:h}
      <div class="ie-flags">
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.surface} @change=${n=>i({surface:n.target.checked})} /> ${this.t("ie_flag_surface")}</label>
        <label class="fp3d-check"><input type="checkbox" .checked=${!!e.electric} @change=${n=>i({electric:n.target.checked})} /> ${this.t("ie_flag_electric")}</label>
        <label class="fp3d-field"
          >${this.t("ie_flag_light")}
          <select @change=${n=>i({light:r(n)||void 0})}>
            <option value="" ?selected=${!e.light}>–</option>
            ${pt.map(n=>u`<option value=${n} ?selected=${e.light===n}>${n}</option>`)}
          </select>
        </label>
      </div>`}renderParts(e){return u`<h3>${this.t("ie_parts",{n:e.parts.length,max:E})}</h3>
      <p class="ie-sub">${this.t("ie_parts_hint")}</p>
      <div class="ie-add">
        <select aria-label=${this.t("ie_add")} @change=${t=>this._addShape=t.target.value}>
          ${re.map(t=>u`<option value=${t} ?selected=${this._addShape===t}>${this.t(`ie_shape_${t}`)}</option>`)}
        </select>
        <button class="fp3d-btn" ?disabled=${e.parts.length>=E} @click=${()=>this.edit(Ie(e,this._addShape))}>+ ${this.t("ie_add")}</button>
      </div>
      ${e.parts.map((t,i)=>this.renderPart(e,t,i))}`}renderPart(e,t,i){let r=n=>this.edit(Ce(e,i,n)),o=(n,l,d)=>u`<label class="ie-num"
        >${n==="round"?this.t("ie_round"):n}<input
          type="number"
          min=${l}
          max=${d}
          step="0.01"
          .value=${String(t[n]??.2)}
          @change=${p=>r({[n]:Number(p.target.value)})}
      /></label>`,a=ht.test(t.color);return u`<fieldset class="ie-part">
      <legend>${this.t("ie_part",{n:i+1})}</legend>
      <div class="ie-part-top">
        <select aria-label=${this.t("ie_add")} @change=${n=>r({shape:n.target.value})}>
          ${re.map(n=>u`<option value=${n} ?selected=${t.shape===n}>${this.t(`ie_shape_${n}`)}</option>`)}
        </select>
        <select
          aria-label=${this.t("ie_colour")}
          @change=${n=>{let l=n.target.value;r({color:l==="own"?"#888888":l})}}
        >
          ${this.options.roles.map(n=>u`<option value=${n} ?selected=${t.color===n}>${this.t(`colour_role_${n}`)}</option>`)}
          <option value="own" ?selected=${a}>${this.t("ie_colour_own")}</option>
        </select>
        ${a?u`<input type="color" aria-label=${this.t("ie_colour_own")} .value=${t.color} @change=${n=>r({color:n.target.value})} />`:h}
        <button class="fp3d-btn" ?disabled=${e.parts.length>=E} @click=${()=>this.edit(Te(e,i))}>${this.t("ie_duplicate")}</button>
        <button class="fp3d-btn fp3d-danger" title=${this.t("ie_remove_part")} aria-label=${this.t("ie_remove_part")} ?disabled=${e.parts.length<=1} @click=${()=>this.edit(He(e,i))}>✕</button>
      </div>
      <div class="ie-nums">${o("x",-.5,.5)} ${o("z",-.5,.5)} ${o("w",.001,1)} ${o("d",.001,1)} ${o("y",0,1)} ${o("h",.001,1)} ${t.shape==="rbox"?o("round",.01,.5):h}</div>
      ${t.shape==="lathe"?u`<label class="fp3d-field"
            >profile<input
              type="text"
              .value=${ne(t.profile)}
              @change=${n=>{let l=n.target,d=Ue(l.value);d?r({profile:d}):l.value=ne(t.profile)}}
          /></label>`:h}
      <div class="ie-fix" title=${this.t("ie_fixed_hint")}>
        <span class="ie-sub">${this.t("ie_fixed")}</span>
        ${["w","d","h"].map(n=>u`<button class="ie-chip ${t.fix?.includes(n)?"on":""}" aria-pressed=${!!t.fix?.includes(n)} @click=${()=>this.edit(Me(e,i,n))}>${n}</button>`)}
      </div>
    </fieldset>`}static styles=[De,Be,A`
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
      select {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 6px 8px;
        min-width: 0;
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
    `]};customElements.get("fp3d-item-editor")||customElements.define("fp3d-item-editor",oe);var je={ie_title:"Your own items",ie_intro:"Build furniture from simple shapes. Your items are kept in Home Assistant, everyone in the home sees them in the library, and they never leave it unless you export them.",ie_new:"New item",ie_new_name:"New item",ie_import:"Import item files \u2026",ie_imported:"Imported: {names}",ie_import_failed:"{file}: {why}",ie_import_replace:"\u201C{name}\u201D is already one of your items. Replace it? (Cancel keeps both.)",ie_err_not_json:"not a JSON file",ie_err_not_an_item:"not an item file (an item has an id and parts)",ie_err_pack_file:"this is a pack's pack.json; import the whole pack folder under Packs",ie_none:"No items of your own yet.",ie_close:"Close",ie_save:"Save",ie_saved:"Saved. It is in the library now.",ie_unsaved:"Not saved yet",ie_save_failed:"Not saved: {why}",ie_export:"Export",ie_delete:"Delete",ie_delete_confirm:"Delete \u201C{name}\u201D? Copies already placed stay in the plan as plain boxes.",ie_discard:"Discard the changes to \u201C{name}\u201D?",ie_details:"Item",ie_name:"Name",ie_section:"Library section",ie_section_none:"\u2013 sorted by its name \u2013",ie_rooms:"Rooms (none: any room)",ie_tags:"Search words (separated by commas)",ie_ikea:"IKEA name (optional)",ie_size:"Size in metres (width, depth, height)",ie_mount:"Stands",ie_mount_floor:"on the floor",ie_mount_surface:"on the item below it",ie_mount_wall:"on a wall",ie_mount_ceiling:"from the ceiling",ie_wall_y:"Bottom above the floor (m)",ie_flag_surface:"Its top carries other items",ie_flag_electric:"Can be linked to a switch and a power sensor",ie_flag_light:"Lamp: how its light spreads",ie_parts:"Parts ({n} of {max})",ie_parts_hint:"Measures are fractions of the item's size: x and z from \u22120.5 to 0.5 (front is +z), width, depth and height up to 1, bottom (y) from 0 to 1.",ie_add:"Add",ie_shape_box:"Box",ie_shape_cyl:"Cylinder",ie_shape_loft:"Loft (sloped box)",ie_shape_sphere:"Sphere",ie_shape_lathe:"Lathe (turned)",ie_shape_rbox:"Rounded box",ie_colour:"Colour",ie_colour_own:"own colour",ie_fixed:"Keeps",ie_fixed_hint:"Measures this part keeps when the item is resized (legs keep their width, a top keeps its thickness).",ie_round:"Rounding",ie_duplicate:"Copy",ie_remove_part:"Remove part",ie_part:"Part {n}",ie_turn_hint:"Drag the picture to turn the item.",ie_view_front:"Front",ie_view_side:"Side",ie_view_top:"Top",ie_view_angle:"Angle"},ft={ie_title:"Eigene M\xF6bel",ie_intro:"Baue M\xF6bel aus einfachen Formen. Sie bleiben in Home Assistant, alle im Haushalt finden sie in der Bibliothek, und sie verlassen es nur, wenn du sie exportierst.",ie_new:"Neues M\xF6bel",ie_new_name:"Neues M\xF6bel",ie_import:"M\xF6bel-Dateien importieren \u2026",ie_imported:"Importiert: {names}",ie_import_failed:"{file}: {why}",ie_import_replace:"\u201E{name}\u201C gibt es schon. Ersetzen? (Abbrechen beh\xE4lt beide.)",ie_err_not_json:"keine JSON-Datei",ie_err_not_an_item:"keine M\xF6bel-Datei (ein M\xF6bel hat eine id und Teile)",ie_err_pack_file:"das ist die pack.json eines Packs; den ganzen Pack-Ordner unter Packs importieren",ie_none:"Noch keine eigenen M\xF6bel.",ie_close:"Schlie\xDFen",ie_save:"Speichern",ie_saved:"Gespeichert. Es ist jetzt in der Bibliothek.",ie_unsaved:"Noch nicht gespeichert",ie_save_failed:"Nicht gespeichert: {why}",ie_export:"Exportieren",ie_delete:"L\xF6schen",ie_delete_confirm:"\u201E{name}\u201C l\xF6schen? Schon platzierte bleiben als einfache K\xE4sten im Plan.",ie_discard:"\xC4nderungen an \u201E{name}\u201C verwerfen?",ie_details:"M\xF6bel",ie_name:"Name",ie_section:"Bereich der Bibliothek",ie_section_none:"\u2013 nach dem Namen \u2013",ie_rooms:"R\xE4ume (keiner: jeder Raum)",ie_tags:"Suchw\xF6rter (mit Kommas getrennt)",ie_ikea:"IKEA-Name (optional)",ie_size:"Gr\xF6\xDFe in Metern (Breite, Tiefe, H\xF6he)",ie_mount:"Steht",ie_mount_floor:"auf dem Boden",ie_mount_surface:"auf dem M\xF6bel darunter",ie_mount_wall:"an der Wand",ie_mount_ceiling:"an der Decke",ie_wall_y:"Unterkante \xFCber dem Boden (m)",ie_flag_surface:"Oben kann man etwas abstellen",ie_flag_electric:"Mit Schalter und Leistungssensor verkn\xFCpfbar",ie_flag_light:"Lampe: wie ihr Licht f\xE4llt",ie_parts:"Teile ({n} von {max})",ie_parts_hint:"Ma\xDFe sind Anteile der M\xF6belgr\xF6\xDFe: x und z von \u22120,5 bis 0,5 (vorne ist +z), Breite, Tiefe und H\xF6he bis 1, Unterkante (y) von 0 bis 1.",ie_add:"Hinzuf\xFCgen",ie_shape_box:"Quader",ie_shape_cyl:"Zylinder",ie_shape_loft:"Loft (schr\xE4ger Quader)",ie_shape_sphere:"Kugel",ie_shape_lathe:"Drehteil",ie_shape_rbox:"Abgerundeter Quader",ie_colour:"Farbe",ie_colour_own:"eigene Farbe",ie_fixed:"Beh\xE4lt",ie_fixed_hint:"Ma\xDFe, die dieses Teil beh\xE4lt, wenn das M\xF6bel gr\xF6\xDFer oder kleiner wird (Beine behalten ihre Breite, eine Platte ihre St\xE4rke).",ie_round:"Rundung",ie_duplicate:"Kopie",ie_remove_part:"Teil entfernen",ie_part:"Teil {n}",ie_turn_hint:"Zum Drehen das Bild ziehen.",ie_view_front:"Vorne",ie_view_side:"Seite",ie_view_top:"Oben",ie_view_angle:"Schr\xE4g"};function Fe(s,e){return(t,i={})=>{if(!t.startsWith("ie_"))return s(t,i);let o=((e()??"").startsWith("de")?ft:je)[t]??je[t]??t;for(let[a,n]of Object.entries(i))o=o.replace(`{${a}}`,String(n));return o}}function Xt(s){document.querySelector("fp3d-item-editor")?.remove();let e=document.createElement("fp3d-item-editor"),t=()=>s.hassSource?.()??s.hass,i=Fe(s.t,()=>t().language);e.options={...s,t:i},document.body.append(e)}export{Xt as openItemEditor};
