var oo=globalThis,so=oo.ShadowRoot&&(oo.ShadyCSS===void 0||oo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vs=Symbol(),Fl=new WeakMap,li=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Vs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(so&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Fl.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Fl.set(e,t))}return t}toString(){return this.cssText}},We=s=>new li(typeof s=="string"?s:s+"",void 0,Vs),zt=(s,...t)=>{let e=s.length===1?s[0]:t.reduce((n,i,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new li(e,s,Vs)},Al=(s,t)=>{if(so)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=oo.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,s.appendChild(n)}},Ns=so?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return We(e)})(s):s;var{is:jm,defineProperty:Km,getOwnPropertyDescriptor:Um,getOwnPropertyNames:Gm,getOwnPropertySymbols:qm,getPrototypeOf:Ym}=Object,ro=globalThis,Tl=ro.trustedTypes,Xm=Tl?Tl.emptyScript:"",Qm=ro.reactiveElementPolyfillSupport,ci=(s,t)=>s,Bs={toAttribute(s,t){switch(t){case Boolean:s=s?Xm:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ol=(s,t)=>!jm(s,t),zl={attribute:!0,type:String,converter:Bs,reflect:!1,useDefault:!1,hasChanged:Ol};Symbol.metadata??=Symbol("metadata"),ro.litPropertyMetadata??=new WeakMap;var Fe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=zl){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Km(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:o}=Um(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){let a=i?.call(this);o?.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??zl}static _$Ei(){if(this.hasOwnProperty(ci("elementProperties")))return;let t=Ym(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ci("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ci("properties"))){let e=this.properties,n=[...Gm(e),...qm(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Ns(i))}else t!==void 0&&e.push(Ns(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Al(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:Bs).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Bs;this._$Em=i;let a=r.fromAttribute(e,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(t,e,n,i=!1,o){if(t!==void 0){let r=this.constructor;if(i===!1&&(o=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??Ol)(o,e)||n.useDefault&&n.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:o},r){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:r}=o,a=this[i];r!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Fe.elementStyles=[],Fe.shadowRootOptions={mode:"open"},Fe[ci("elementProperties")]=new Map,Fe[ci("finalized")]=new Map,Qm?.({ReactiveElement:Fe}),(ro.reactiveElementVersions??=[]).push("2.1.2");var Ks=globalThis,Hl=s=>s,ao=Ks.trustedTypes,Ll=ao?ao.createPolicy("lit-html",{createHTML:s=>s}):void 0,Us="$lit$",Ae=`lit$${Math.random().toFixed(9).slice(2)}$`,Gs="?"+Ae,Jm=`<${Gs}>`,rn=document,ui=()=>rn.createComment(""),pi=s=>s===null||typeof s!="object"&&typeof s!="function",qs=Array.isArray,Bl=s=>qs(s)||typeof s?.[Symbol.iterator]=="function",js=`[ 	
\f\r]`,di=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cl=/-->/g,Dl=/>/g,on=RegExp(`>|${js}(?:([^\\s"'>=/]+)(${js}*=${js}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wl=/'/g,Vl=/"/g,jl=/^(?:script|style|textarea|title)$/i,Ys=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),m=Ys(1),z=Ys(2),G0=Ys(3),Ot=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Nl=new WeakMap,sn=rn.createTreeWalker(rn,129);function Kl(s,t){if(!qs(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ll!==void 0?Ll.createHTML(t):t}var Ul=(s,t)=>{let e=s.length-1,n=[],i,o=t===2?"<svg>":t===3?"<math>":"",r=di;for(let a=0;a<e;a++){let l=s[a],c,d,u=-1,h=0;for(;h<l.length&&(r.lastIndex=h,d=r.exec(l),d!==null);)h=r.lastIndex,r===di?d[1]==="!--"?r=Cl:d[1]!==void 0?r=Dl:d[2]!==void 0?(jl.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=on):d[3]!==void 0&&(r=on):r===on?d[0]===">"?(r=i??di,u=-1):d[1]===void 0?u=-2:(u=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?on:d[3]==='"'?Vl:Wl):r===Vl||r===Wl?r=on:r===Cl||r===Dl?r=di:(r=on,i=void 0);let p=r===on&&s[a+1].startsWith("/>")?" ":"";o+=r===di?l+Jm:u>=0?(n.push(c),l.slice(0,u)+Us+l.slice(u)+Ae+p):l+Ae+(u===-2?a:p)}return[Kl(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},hi=class s{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0,a=t.length-1,l=this.parts,[c,d]=Ul(t,e);if(this.el=s.createElement(c,n),sn.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=sn.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Us)){let h=d[r++],p=i.getAttribute(u).split(Ae),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:f[2],strings:p,ctor:f[1]==="."?co:f[1]==="?"?uo:f[1]==="@"?po:ln}),i.removeAttribute(u)}else u.startsWith(Ae)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(jl.test(i.tagName)){let u=i.textContent.split(Ae),h=u.length-1;if(h>0){i.textContent=ao?ao.emptyScript:"";for(let p=0;p<h;p++)i.append(u[p],ui()),sn.nextNode(),l.push({type:2,index:++o});i.append(u[h],ui())}}}else if(i.nodeType===8)if(i.data===Gs)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(Ae,u+1))!==-1;)l.push({type:7,index:o}),u+=Ae.length-1}o++}}static createElement(t,e){let n=rn.createElement("template");return n.innerHTML=t,n}};function an(s,t,e=s,n){if(t===Ot)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,o=pi(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=an(s,i._$AS(s,t.values),i,n)),t}var lo=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??rn).importNode(e,!0);sn.currentNode=i;let o=sn.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new Fn(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new ho(o,this,t)),this._$AV.push(c),l=n[++a]}r!==l?.index&&(o=sn.nextNode(),r++)}return sn.currentNode=rn,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Fn=class s{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=an(this,t,e),pi(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==Ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&pi(this._$AH)?this._$AA.nextSibling.data=t:this.T(rn.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=hi.createElement(Kl(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new lo(i,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=Nl.get(t.strings);return e===void 0&&Nl.set(t.strings,e=new hi(t)),e}k(t){qs(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let o of t)i===e.length?e.push(n=new s(this.O(ui()),this.O(ui()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Hl(t).nextSibling;Hl(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ln=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}_$AI(t,e=this,n,i){let o=this.strings,r=!1;if(o===void 0)t=an(this,t,e,0),r=!pi(t)||t!==this._$AH&&t!==Ot,r&&(this._$AH=t);else{let a=t,l,c;for(t=o[0],l=0;l<o.length-1;l++)c=an(this,a[n+l],e,l),c===Ot&&(c=this._$AH[l]),r||=!pi(c)||c!==this._$AH[l],c===b?t=b:t!==b&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}r&&!i&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},co=class extends ln{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}},uo=class extends ln{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}},po=class extends ln{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=an(this,t,e,0)??b)===Ot)return;let n=this._$AH,i=t===b&&n!==b||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==b&&(n===b||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ho=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){an(this,t)}},Gl={M:Us,P:Ae,A:Gs,C:1,L:Ul,R:lo,D:Bl,V:an,I:Fn,H:ln,N:uo,U:po,B:co,F:ho},Zm=Ks.litHtmlPolyfillSupport;Zm?.(hi,Fn),(Ks.litHtmlVersions??=[]).push("3.3.3");var ql=(s,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let o=e?.renderBefore??null;n._$litPart$=i=new Fn(t.insertBefore(ui(),o),o,void 0,e??{})}return i._$AI(s),i};var Xs=globalThis,xt=class extends Fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ql(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ot}};xt._$litElement$=!0,xt.finalized=!0,Xs.litElementHydrateSupport?.({LitElement:xt});var tg=Xs.litElementPolyfillSupport;tg?.({LitElement:xt});(Xs.litElementVersions??=[]).push("4.2.2");var Qs="(max-width: 600px)";function Yl(s,t,e,n,i=!1){let o=r=>{let a=r?.value.trim();!r||!a||(r.value="",n([...s,a]))};return m`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${e.label}>
    ${e.label}
    ${s.map((r,a)=>m`<div class="fp3d-lines-row">
        <span>${r}</span>
        <button type="button" title=${e.remove} aria-label=${`${e.remove}: ${r}`} ?disabled=${t} @click=${()=>n(s.filter((l,c)=>c!==a))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${e.placeholder}
        aria-label=${e.placeholder}
        ?disabled=${t}
        @keydown=${r=>{r.key==="Enter"&&(r.preventDefault(),o(r.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${t} @click=${r=>o(r.currentTarget.previousElementSibling)}>
        ${e.add}
      </button>
    </div>
  </div>`}var Bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},pe=s=>(...t)=>({_$litDirective$:s,values:t}),ie=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var fi=class extends ie{constructor(t){if(super(t),this.it=b,t.type!==Bt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===b||t==null)return this._t=void 0,this.it=t;if(t===Ot)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};fi.directiveName="unsafeHTML",fi.resultType=1;var Xl=pe(fi);var{I:eg}=Gl,Ql=s=>s;var fo=s=>s.strings===void 0,Jl=()=>document.createComment(""),An=(s,t,e)=>{let n=s._$AA.parentNode,i=t===void 0?s._$AB:t._$AA;if(e===void 0){let o=n.insertBefore(Jl(),i),r=n.insertBefore(Jl(),i);e=new eg(o,r,s,s.options)}else{let o=e._$AB.nextSibling,r=e._$AM,a=r!==s;if(a){let l;e._$AQ?.(s),e._$AM=s,e._$AP!==void 0&&(l=s._$AU)!==r._$AU&&e._$AP(l)}if(o!==i||a){let l=e._$AA;for(;l!==o;){let c=Ql(l).nextSibling;Ql(n).insertBefore(l,i),l=c}}}return e},Ve=(s,t,e=s)=>(s._$AI(t,e),s),ng={},mo=(s,t=ng)=>s._$AH=t,Zl=s=>s._$AH,go=s=>{s._$AR(),s._$AA.remove()};var mi=(s,t)=>{let e=s._$AN;if(e===void 0)return!1;for(let n of e)n._$AO?.(t,!1),mi(n,t);return!0},_o=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},tc=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),sg(t)}};function ig(s){this._$AN!==void 0?(_o(this),this._$AM=s,tc(this)):this._$AM=s}function og(s,t=!1,e=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=e;o<n.length;o++)mi(n[o],!1),_o(n[o]);else n!=null&&(mi(n,!1),_o(n));else mi(this,s)}var sg=s=>{s.type==Bt.CHILD&&(s._$AP??=og,s._$AQ??=ig)},bo=class extends ie{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),tc(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(mi(this,t),_o(this))}setValue(t){if(fo(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Js=new WeakMap,ec=pe(class extends bo{render(s){return b}update(s,[t]){let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=s.options?.host,this.rt(this.ct=s.element)),b}rt(s){if(this.G!==void 0)if(this.isConnected||(s=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=Js.get(t);e===void 0&&(e=new WeakMap,Js.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?Js.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var vo=pe(class extends ie{constructor(s){if(super(s),s.type!==Bt.PROPERTY&&s.type!==Bt.ATTRIBUTE&&s.type!==Bt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!fo(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===Ot||t===b)return t;let e=s.element,n=s.name;if(s.type===Bt.PROPERTY){if(t===e[n])return Ot}else if(s.type===Bt.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(n))return Ot}else if(s.type===Bt.ATTRIBUTE&&e.getAttribute(n)===t+"")return Ot;return mo(s),t}});var Tn=s=>s?{home_id:s}:{};async function Zs(s,t,e){return(await s.callWS({type:"home_3d/image/get",...Tn(e),image_id:t})).data}async function yo(s,t,e,n){await s.callWS({type:"home_3d/image/set",...Tn(n),image_id:t,data:e})}async function nc(s,t){return(await s.callWS({type:"home_3d/history/list",...Tn(t)})).snapshots}async function ic(s,t){await s.callWS({type:"home_3d/history/snapshot",...Tn(t)})}async function oc(s,t,e){return(await s.callWS({type:"home_3d/history/restore",...Tn(e),snapshot_id:t})).revision}async function sc(s,t,e){return s.callWS({type:"home_3d/packs/items",pack_id:t,items:e})}async function rc(s,t,e=!1){return s.callWS({type:"home_3d/packs/import",pack:t,...e?{confirm:e}:{}})}async function ac(s,t,e=!1){return s.callWS({type:"home_3d/packs/import",files:t,...e?{confirm:e}:{}})}async function lc(s,t,e=!1){return s.callWS({type:"home_3d/packs/install_url",url:t,...e?{confirm:e}:{}})}function gi(s){return s.callWS({type:"home_3d/packs/updates"})}function cc(s,t){return s.callWS({type:"home_3d/packs/updates/settings",...t})}function wo(s,t){return s.callWS({type:"home_3d/packs/update_items",...t?{types:t}:{}})}function dc(s){return s.callWS({type:"home_3d/packs/check"})}function uc(s,t,e){return s.callWS({type:"home_3d/packs/pin",pack_id:t,pinned:e})}function pc(s,t){return s.callWS({type:"home_3d/packs/rollback",pack_id:t})}async function hc(s,t){await s.callWS({type:"home_3d/packs/remove",pack_id:t})}function fc(s){return s.callWS({type:"home_3d/backup/export"})}function mc(s,t,e,n,i,o){return s.callWS({type:"home_3d/backup/import",...Tn(o),...t?{building:t}:{},packs:e,...n?{items:n}:{},...i??{}})}async function gc(s){return s.callWS({type:"home_3d/voice/settings"})}async function _c(s,t){return s.callWS({type:"home_3d/voice/settings/set",sentences:t})}function bc(s){return s.callWS({type:"home_3d/editors/get"})}function tr(s,t){return s.callWS({type:"home_3d/editors/set",editors:t})}function kc(s){let t=s.source?.origin;if(t?.type!=="github")return null;let e=[t.owner,t.repo,t.folder].filter(Boolean).join("/");return{label:t.default_branch?e:`${e} @ ${t.ref}`,url:t.url}}var _i=[],$e=new Map,zn=new Map,nr=new Map,vc,yc="",ir=0;function xc(s){for(let t of s){let e=t.hash?_i.find(n=>n.id===t.id&&n.hash===t.hash):void 0;if(!(!e||e===t))for(let n of t.items){let i=cn(n)?void 0:$e.get(Dt(t.id,n.id));i&&cn(i)&&Mc(n,i)}}_i=s,$e=new Map(s.flatMap(t=>t.items.map(e=>[Dt(t.id,e.id),e]))),zn=new Map(s.flatMap(t=>Object.entries(t.aliases??{}).map(([e,n])=>[e,Dt(t.id,n)])));for(let[t,e]of zn){let n=$e.get(e);n&&!$e.has(t)&&$e.set(t,n)}ir++}function wc(s){return zn.get(s)??s}function $c(s){if(!zn.size)return s;let t=c=>!!c&&zn.has(c),e=c=>t(c.type)||t(c.vehicle)||(c.types??[]).some(d=>t(d.vehicle))||(c.rack?.slots??[]).some(d=>t(d.type)),n=s.floors.some(c=>c.furniture.some(e)),i=s.recipes??{},o=Object.keys(i).some(t);if(!n&&!o)return s;let r=c=>zn.get(c)??c,a=s.floors.map(c=>({...c,furniture:c.furniture.map(d=>e(d)?{...d,type:r(d.type),...d.vehicle?{vehicle:r(d.vehicle)}:{},...d.types?{types:d.types.map(u=>({...u,vehicle:r(u.vehicle)}))}:{},...d.rack?{rack:{...d.rack,slots:d.rack.slots.map(u=>t(u.type)?{...u,type:r(u.type)}:u)}}:{}}:d)})),l={};for(let[c,d]of Object.entries(i)){let u=r(c);if(u===c){l[c]??=d;continue}if(i[u])continue;let[,h,p]=u.split(":");l[u]={...d,pack:h,item:p,release:1,recipe:{...d.recipe,id:p}}}return{...s,floors:a,...s.recipes?{recipes:l}:{}}}function cn(s){return Array.isArray(s.parts)}function Mc(s,t){s.parts=t.parts,t.symbol&&(s.symbol=t.symbol)}function Sc(s){let t=new Map;for(let e of new Set(s)){let n=$e.get(e);if(!n||cn(n))continue;let i=$e.get(wc(e))===n?wc(e):e,o=_i.find(r=>i===Dt(r.id,n.id));o&&t.set(o.id,[...t.get(o.id)??[],n.id])}return t}function or(s,t,e){let n=_i.find(i=>i.id===s);if(!(!n||n.hash&&t&&n.hash!==t))for(let i of e){let o=$e.get(Dt(s,i.id));o&&!cn(o)&&Array.isArray(i.parts)&&Mc(o,i)}}function ko(){return _i}function Ec(s){if(s===vc)return;vc=s;let t=Object.entries(s??{}),e=t.map(([n,i])=>`${n}=${i.hash}`).sort().join("|");e!==yc&&(yc=e,nr=new Map(t.map(([n,i])=>[n,i.recipe])),ir++)}function Pc(){return ir}function Dt(s,t){return`pack:${s}:${t}`}function wt(s){return s.startsWith("pack:")}function Me(s){return wt(s)?s.endsWith(":curtain_motor")?"curtain":s.endsWith(":screen_roll")?"screen":/:roof_window[\w.-]*_blind$/.test(s)?"blind":null:null}var rg=new Set(["sensor","water_meter","smoke_alarm"]);function Rc(s){return wt(s)&&ft(s)?.family==="entity_marker"}function Ic(s){return wt(s)?rg.has(ft(s)?.family??"")||/:(\w+_sensor|door_contact|presence_mmwave)$/.test(s):!1}function oe(s){return s==="robot_vacuum"||wt(s)&&s.endsWith(":robot_vacuum")}function xo(s){return wt(s)&&/:(heat_pump_indoor|gas_boiler|combi_boiler(?:_[a-z0-9_]+)?|buffer_tank|water_heater|hot_water_cylinder(?:_[a-z0-9_]+)?)$/.test(s)}var ag={meter:"meter",consumer_unit:"meter",energy_monitor:"meter",inverter:"inverter",home_battery:"home_battery",power_station:"home_battery",ev_charger:"wallbox",solar_panel:"solar"};function Et(s){if(s==="meter"||s==="inverter"||s==="home_battery"||s==="wallbox")return s;let t=ft(s),e=t?.family?ag[t.family]??null:null;return e==="meter"&&(t.tags??[]).some(n=>/^(gas|water|wasser)$/i.test(n))?null:e}function Fc(s){return Pt(s)?.parts.find(t=>t.screen)}function Ac(s){let t=Pt(s);if(!t)return!1;let[e,n,i]=t.size;return t.parts.some(o=>{if(!o.screen)return!1;let[r,a]=[o.w*e,o.d*n,o.h*i].sort((l,c)=>c-l);return r>=.06&&a>=.06})}function Pt(s){if(!wt(s))return;let t=$e.get(s);return nr.get(s)??(t&&cn(t)?t:void 0)}function ft(s){if(wt(s))return nr.get(s)??$e.get(s)}function $t(s){return me[s]??ft(s)?.size??[.6,.6,.8]}function Te(s){let t=ft(s);return Dc.has(s)||!!t?.electric||!!t?.light||he(s)}var lg=new Set(["radiator_trv","radiator_valve","thermostat"]);function he(s){if(s==="radiator")return!0;let t=wt(s)?ft(s):void 0;return t?lg.has(t.family??"")||(t.tags??[]).some(e=>/^(trv|smart trv|thermostat)$/i.test(e)):!1}function Ne(s){let t=wt(s)?ft(s):void 0;return t?/camera$/.test(t.family??"")||(t.tags??[]).some(e=>/^(camera|security camera|cctv|doorbell|video doorbell|doorbell camera)$/i.test(e)):!1}function jt(s,t){let e=t.split("-")[0];return s.name[e]??s.name.en??Object.values(s.name)[0]??s.id}function fe(s,t){return s.name}function Kt(s,t){let e=ft(t.type);if(t.mount_y!=null)return t.mount_y;let n=Cc(t,s.height);if(n!==null)return n;if(t.type==="lamp_wall")return Tc;if(zc.has(t.type))return Math.max(0,s.height-Oc(t.type,t.h));if(t.type==="led_strip")return Math.max(0,s.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return er(s,t)+Lc(s,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,s.height-t.h);default:return e?er(s,t):Hc(t)||er(s,t)}}function er(s,t){let e=s.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>K([t.x,t.z],n.points))?0:$o(s,t.x,t.z)}var Vc=["auto","none","inside","outside"],Nc=["always","no_power","never"],Bc=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],jc=["gable","hip","halfhip"],So={field:null,size:1,right:0,up:0},Kc=["navigate","more_info","service","fire_dom_event"],Uc=["sit","lie","curl"];var bi={cat:["orange","tabby","black","white","grey","calico","cream","dilute_calico","blue_grey"],dog:["golden","cream","brown","black","white","grey"],rabbit:["white","grey","brown","black","cream"]},Gc=["dark","copper","green","yellow","blue"],qc=["dachshund","pug","terrier","labrador","shepherd"];function sr(s,t,e){return s?t?!!e.lock_plan:!!s.locked:!1}var Yc=["rain","snow","fog","clouds","lightning","sky"],rr=["rain","snow","clouds","lightning","sky"],ar=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],lr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Hn(s){return s==="hedge"||s==="fence"||s==="pergola"}function Eo(s){return(s.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Hn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}var Xc=["x","-x","z","-z"];function cg(s,t,e){let n=s.slope??0;if(!n||s.type==="pool")return 0;let i=s.slope_dir??"x",o=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,r=1/0,a=-1/0;for(let[c,d]of s.points){let u=o(c,d);r=Math.min(r,u),a=Math.max(a,u)}if(a-r<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-r)/(a-r)));return n*l}function dg(s,t,e,n){return Zc(s,t)+lr[t.type]-ug(s,t,e,n)}var cr=-.2,Mo={set:!1,level:cr};function Qc(s){let t=s?.settings.terrain??null;Mo={set:t?.level!=null,level:t?.level??cr}}function dr(s,t){return Mo.level}function Jc(s){return s.elevation>.3?0:Mo.set?Mo.level-s.elevation:cr}function Zc(s,t){return Jc(s)+(t.offset??0)}function ug(s,t,e,n){return t.type==="pool"?0:cg(t,e,n)}function $o(s,t,e){let n=(s.outdoor??[]).filter(o=>!Hn(o.type)&&o.type!=="pool"&&K([t,e],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?dg(s,i,t,e):Jc(s)}var td=["filter","backwash","rinse","waste","recirculate","closed"];function ed(s,t){return Zc(s,t)+(t.above?Po(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function ur(s){return s.depth&&s.depth>=.3?Math.min(5,s.depth):s.above?Po(s):1.5}function pr(s,t){return t.above?!1:(s.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Hn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>K(n,e.points)))}function nd(s,t){return!t.above&&!pr(s,t)?hr(s,t)-.05:ed(s,t)-ur(t)}function hr(s,t){return ed(s,t)-.15}function Po(s){return s.height&&s.height>.3?s.height:1.2}function Ro(s,t,e,n,i){let o=g=>Math.round(g*1e3)/1e3,r=n-t,a=i-e,l=(t+n)/2,c=(e+i)/2;if(s==="rect")return[[t,e],[n,e],[n,i],[t,i]];let d=40;if(s==="round"){let g=Math.min(r,a)/2;return Array.from({length:d},(y,v)=>[o(l+g*Math.cos(v/d*Math.PI*2)),o(c+g*Math.sin(v/d*Math.PI*2))])}let u=r>=a,h=(u?a:r)/2,p=Math.max(0,(u?r:a)/2-h),f=[],_=d/2;for(let g=0;g<2;g++){let y=g===0?1:-1;for(let v=0;v<=_;v++){let w=-Math.PI/2+v/_*Math.PI+(g===0?0:Math.PI),k=y*p+h*Math.cos(w),S=h*Math.sin(w);f.push(u?[o(l+k),o(c+S)]:[o(l+S),o(c+k)])}}return f}var pg={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},id=["wood","oak","tiles","carpet","stone","concrete"],od={type:"none",pitch:35,overhang:.4},hg={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...od}};function sd(s,t,e){return{id:s,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var fg=2.75;function rd(s,t){if(t!=null&&Number.isFinite(t))return Math.round(t*fg*100)/100;let e=s.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function ad(s,t,e){if(s.settings.area_import===!1||!t.ha_floor)return[];let n=new Set(s.floors.flatMap(i=>[...i.rooms.map(o=>o.area_id),...(i.outdoor??[]).map(o=>o.area_id??null)]));return Object.values(e??{}).filter(i=>i.floor_id===t.ha_floor&&!n.has(i.area_id)).sort((i,o)=>i.name.localeCompare(o.name))}function ld(s,t,e){let n=s.rooms.flatMap(a=>a.points.map(l=>l[0])),i=s.rooms.flatMap(a=>a.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,r=i.length?Math.floor(Math.min(...i)):0;return t.map((a,l)=>{let c=o+l%3*4.5,d=r+Math.floor(l/3)*3.5;return{id:e(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function cd(s,t,e,n){let i=s.rotation*Math.PI/180,o=Math.cos(i),r=Math.sin(i),[a,l]=t,c=s.x-a*(s.w/2)*o+l*(s.d/2)*r,d=s.z-a*(s.w/2)*r-l*(s.d/2)*o,u=e[0]-c,h=e[1]-d,p=y=>Math.max(.1,Math.round(y/n)*n),f=p((u*o+h*r)*a),_=p((-u*r+h*o)*l),g=y=>Math.round(y*1e3)/1e3;return{x:g(c+a*(f/2)*o-l*(_/2)*r),z:g(d+a*(f/2)*r+l*(_/2)*o),w:g(f),d:g(_)}}var Io=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","ac_unit","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell","loft_ladder","awning","waste_bin","mailbox","wall_switch","wall_socket","lamp_fan","wifi_ap","water_heater"],Fo={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","ac_unit","stairs","stairs_u","loft_ladder","robot_vacuum"],vehicles:["parking"],outdoor:["awning"],household:["waste_bin","mailbox"],switches:["wall_switch","wall_socket","wifi_ap","water_heater"]},Ht=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],dd=.3,Ao=["meter","inverter","home_battery","wallbox","grid_point"],To=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Tc=1.75;function Se(s){if(["lamp_pendant","lamp_fan","stairwell","loft_ladder","parking"].includes(s.type)||fr.has(s.type))return!1;let t=Pt(s.type);return!(t?.mount==="ceiling"&&t.light&&t.light!=="panel")}var zc=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Oc(s,t){return s==="lamp_spot"?Math.max(.06,t)+.008:s==="lamp_ceiling"||s==="lamp_panel"?Math.max(.02,t)+.005:.02}var fr=new Set(["stairs","stairs_u"]),mg=3,gg=.18,_g=.2;function bg(s){let t=Math.max(3,Math.round(s.h/gg)),e=s.d>s.w+.3,n=e&&(s.stair_landing??0)>0?Math.min(s.stair_landing??0,t-1):0,i=!n&&s.stair_turn&&e?mg:0;return{n:t,fits:e,flat:n,winders:i,skip:n||i}}function On(s){let{n:t,fits:e,skip:n}=bg(s);return{canTurn:e,maxLanding:e?t-1:0,maxTop:Math.max(0,Math.round((s.d-_g*(t-n))*1e3)/1e3)}}function ud(s,t){let e={};t.stair_open!==void 0&&(e.stair_open=t.stair_open?!0:null);let n={...s};if(t.stair_turn!==void 0&&(e.stair_turn=t.stair_turn&&On(s).canTurn?t.stair_turn:null,n.stair_turn=e.stair_turn,e.stair_turn&&s.stair_landing&&(e.stair_landing=null,n.stair_landing=null)),t.stair_landing!==void 0){let o=Math.max(0,Math.min(Math.round(t.stair_landing),On(s).maxLanding));e.stair_landing=o||null,n.stair_landing=o,o&&(e.stair_turn=null,n.stair_turn=null)}let i=t.stair_top??s.stair_top??0;if(t.stair_top!==void 0||s.stair_top&&On(n).maxTop<s.stair_top){let o=Math.max(0,Math.min(Math.round(i*100)/100,On(n).maxTop));e.stair_top=o||null}return e}function pd(s,t,e){let n=Math.max(4,Math.round(e/.18)),i=Math.floor(n/2)+1,o=i-1,r=n-i,a=Math.min(.12,s*.06),l=(s-a)/2,c=Math.min(l,t*.45),d=(t-c)/o;return{n,k:i,steps1:o,steps2:r,gap:a,fw:l,landing:c,run:d,rise:e/n}}function Lt(s){return To.has(s)||!!Pt(s)?.light}var vg=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function mr(s,t,e,n=0){let i=Mt(s.points),o=i.x1-i.x0-2*n,r=i.z1-i.z0-2*n,a=[];for(let l=0;l<t;l++)for(let c=0;c<e;c++){let d=[Math.round((i.x0+n+o/e*(c+.5))*1e3)/1e3,Math.round((i.z0+n+r/t*(l+.5))*1e3)/1e3];K(d,s.points)&&a.push(d)}return a}function Ln(s,t,e){let n=r=>Math.round(r*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(s[0]+i*t),n(s[1]+o*t)]}function hd(s,t){return t&&t!=="none"?{state_entity:t}:{state_entity:s.state_entity2&&s.state_entity2!=="none"?s.state_entity2:null,state_entity2:null}}function Hc(s){switch(s.type){case"home_battery":return s.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-s.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return s.variant==="bank"?.75:s.variant==="pole"||s.variant==="pillar"||s.variant==="parcel"?0:1;case"wall_switch":return 1.05;case"wall_socket":return s.variant==="outdoor"?.5:.3;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Wc=.04,yg=1.2;function Lc(s,t,e,n=0){let i=0;for(let o of s.furniture)!(vg.has(o.type)||Pt(o.type)?.surface)||!K([t,e],Qt(o))||o.type==="worktop"&&n>0&&o.h-Wc>=yg&&n<=o.h-Wc-.02||(i=Math.max(i,o.h));return i}function zo(s){let t=s.split(/[,;\n]/).map(e=>e.trim()).filter(Boolean).slice(0,12);return t.length?t:void 0}var fd=new Set(["wall_switch","wall_socket"]),Oo=4;function md(s){let t=(s.gangs??[]).slice(0,Oo);return t.length?t:[{entity:null}]}function gd(s){return Math.round((.085+.071*(Math.max(1,Math.min(Oo,s))-1))*1e3)/1e3}var _d=new Set(["wifi_ap","water_heater"]),bd={"wifi_ap:":[.2,.2,.04],"wifi_ap:wall":[.16,.04,.16],"water_heater:":[.56,.56,1.5],"water_heater:wall":[.5,.27,.8]};function Cc(s,t){return s.type==="wifi_ap"?s.variant==="wall"?2.1:Math.max(0,t-s.h):s.type==="water_heater"?s.variant==="wall"?1.1:0:null}var Dc=new Set([...To,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),me={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],loft_ladder:[.6,1.1,2.5],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.085,.012,.085],wall_socket:[.085,.014,.085],wifi_ap:[.2,.2,.04],water_heater:[.56,.56,1.5],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_fan:[1.3,1.3,.45],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var vd=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],yd=["standard","bars","glass_wall"],wd=["sectional","up_and_over"];function kd(s){return s==="door"?vd:s==="garage"?wd:yd}function Ho(s,t){return s.type==="garage"?s.style&&wd.includes(s.style)?s.style:"sectional":s.type==="door"?s.style&&vd.includes(s.style)?s.style:t?"front":"interior":s.style&&yd.includes(s.style)?s.style:"standard"}function xd(s,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let i=t==="sidelights",o=s-.04,r=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),a=(o-r)/(i?2:1),l=n.sidelight_width??a,c=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=o-.5;if(l+c>d){let h=Math.max(0,d)/(l+c);l*=h,c*=h}return i?{panels:[[.02,.02+l],[s-.02-c,s-.02]],x0:.02+l,x1:s-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:s-.02}:{panels:[[s-.02-l,s-.02]],x0:.02,x1:s-.02-l}}function gr(s){return s==="front"||s==="front_glass"||s==="sidelight"||s==="sidelights"}var Lo={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function vi(s){if(s.type==="garage")return"garage";if(s.type==="window"&&s.style==="glass_wall")return"glass_wall";let t=s.leaves===2;return s.type==="door"?!t&&s.style&&gr(s.style)?"front":t?"door_double":"door":s.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function Co(s){s.energy={...pg,...s.energy??{}},s.presence=s.presence??[],s.settings={...hg,...s.settings,roof:{...od,...s.settings?.roof??{}}};for(let t of s.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(n=>({...n,panel:n.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),t.furniture=t.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let e=t.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(e.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of e){let o=n[i.mount??"ceiling"],[r,a,l]=me[o];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:r,d:a,h:l,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}t.openings=t.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return s}function U(s){return`${s}_${Math.random().toString(36).slice(2,10)}`}function Rt(s){let t=0;for(let e=0;e<s.length;e++){let[n,i]=s[e],[o,r]=s[(e+1)%s.length];t+=n*r-o*i}return t/2}function It(s){return Math.abs(Rt(s))}function ge(s){let t=Rt(s);if(Math.abs(t)<1e-9){let i=s.length||1;return[s.reduce((o,r)=>o+r[0],0)/i,s.reduce((o,r)=>o+r[1],0)/i]}let e=0,n=0;for(let i=0;i<s.length;i++){let[o,r]=s[i],[a,l]=s[(i+1)%s.length],c=o*l-a*r;e+=(o+a)*c,n+=(r+l)*c}return[e/(6*t),n/(6*t)]}function dn(s){if(s.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=s[t],[i,o]=s[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function Mt(s){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[o,r]of s)t=Math.min(t,o),e=Math.min(e,r),n=Math.max(n,o),i=Math.max(i,r);return{x0:t,z0:e,x1:n,z1:i}}function Qt(s){let t=s.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=s.w/2,o=s.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([r,a])=>[s.x+r*e-a*n,s.z+r*n+a*e])}function K(s,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[o,r]=t[n],[a,l]=t[i];r>s[1]!=l>s[1]&&s[0]<(a-o)*(s[1]-r)/(l-r)+o&&(e=!e)}return e}var yi={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};function _r(s,t){for(let e of s.floors){let n=t.floors.find(i=>i.id===e.id);e.furniture=e.furniture.filter(i=>{if(!i.look_of)return!0;let o=e.placements.find(d=>d.entity_id===i.look_of);if(!o)return!1;let r=n?.placements.find(d=>d.entity_id===i.look_of),a=n?.furniture.find(d=>d.id===i.id),l=!r||r.x!==o.x||r.z!==o.z||(r.rotation??0)!==(o.rotation??0);return!!a&&(a.x!==i.x||a.z!==i.z||a.rotation!==i.rotation)&&!l?(o.x=i.x,o.z=i.z,o.rotation=i.rotation):(i.x=o.x,i.z=o.z,i.rotation=o.rotation??0),!0})}}var $d="home3d";function wg(s){let t=structuredClone(s);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function Md(s,t){return{format:$d,version:1,exported_at:new Date().toISOString(),building:t?wg(s):structuredClone(s)}}function Sd(s){let t;try{t=JSON.parse(s)}catch{throw new Error("not_json")}let e=t,n=e?.format===$d?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return Co(n)}function Ed(s){let t=new Set;for(let e of s.floors){e.background?.image_id&&t.add(e.background.image_id);for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&t.add(i.image)}return[...t]}function br(s,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=s,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var kg={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},xg=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),$g=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),Mg=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Do=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Ad=new Set(["light","switch","fan"]);function Td(s){return s.slice(0,s.indexOf("."))}function et(s){return kg[Td(s)]??null}function ze(s){return s!==null&&s!=="scene"&&s!=="script"}function re(s,t){let e=s.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&s.devices?.[e.device_id]?.area_id||null:null}function Cn(s,t){let e=s.entities?.[t];return!!e&&(!!e.hidden||!!e.hidden_by||!!e.disabled_by)}function Pd(s,t){let e=et(t);if(!e)return!1;let n=s.entities?.[t];if(Cn(s,t)||n?.entity_category)return!1;let i=s.states[t];if(!i)return!1;let o=i.attributes.device_class,r=String(i.attributes.unit_of_measurement??"");return e==="sensor"?o?xg.has(o)||o==="voltage"&&r==="mV":$g.has(r):e==="binary"?o?Mg.has(o):!!n?.area_id:!0}var Sg=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Rd(s,t){if(et(t)!=="sensor")return!1;let e=s.entities?.[t];if(Cn(s,t)||e?.entity_category)return!1;let n=s.states[t];return!n||!n.attributes.unit_of_measurement||Sg.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||ki(n)}var vr=null;function un(s){let t=vr;if(t&&t.entities===s.entities&&t.devices===s.devices&&(t.states===s.states||(t.states=s.states,Object.keys(s.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],o=new Map,r=new Map;for(let l of Object.keys(s.entities??{})){let c=s.entities[l],d=c.device_id;d&&c.area_id&&(r.get(d)??r.set(d,new Set).get(d)).add(c.area_id),d&&Pr(s,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!Cn(s,l)&&!c.entity_category&&(o.get(d)??o.set(d,new Set).get(d)).add(Td(l));let u=Pd(s,l),h=re(s,l);if(!h){(u||Rd(s,l))&&ze(et(l))&&i.push(l);continue}u&&(e.get(h)??e.set(h,[]).get(h)).push(l)}if(s.entities)for(let l of Object.keys(s.states))s.entities[l]||(Pd(s,l)||Rd(s,l))&&ze(et(l))&&i.push(l);i.sort((l,c)=>Do.indexOf(et(l))-Do.indexOf(et(c))||st(s,l).localeCompare(st(s,c)));for(let[l,c]of e){let d=s.areas?.[l]?.name;c.sort((u,h)=>{let p=Do.indexOf(et(u)),f=Do.indexOf(et(h));return p-f||st(s,u,d).localeCompare(st(s,h,d))})}let a=new Set([...r].filter(([,l])=>l.size>1).map(([l])=>l));return vr={entities:s.entities,devices:s.devices,states:s.states,stateCount:Object.keys(s.states).length,areas:e,power:n,unassigned:i,domains:o,hubs:a},vr}function se(s,t){return!t||!s.entities?[]:un(s).areas.get(t)??[]}function zd(s,t){return s.entities?[...un(s).areas].filter(([e])=>e!==t).map(([e,n])=>({areaId:e,name:s.areas?.[e]?.name??e,ids:n.filter(i=>ze(et(i)))})).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function Od(s){return s.entities?un(s).unassigned:[]}var wr={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Eg=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Pg=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function kr(s,t){let e=s.entities?.[t]?.device_id,n=e&&!un(s).hubs.has(e)?un(s).domains.get(e):void 0;return n&&[...n].some(i=>Eg.has(i))?!1:!Pg.test(`${t} ${s.states[t]?.attributes.friendly_name??""}`)}function Hd(s,t,e,n){let i=e.climate?.[n];if(i==="none")return[];if(i)return s.states[i]?[i]:[];let o=wr[n],r=(p,f)=>K([p,f],e.points),a=t?.placements.filter(p=>p.entity_id.startsWith("sensor."))??[],l=a.filter(p=>r(p.x,p.z)).map(p=>p.entity_id),c=new Set(a.filter(p=>!r(p.x,p.z)).map(p=>p.entity_id)),d=[...new Set([...se(s,e.area_id).filter(p=>!c.has(p)),...l])],u=d.filter(p=>p.startsWith("sensor.")&&s.states[p]?.attributes.device_class===o&&(e.outdoor||kr(s,p)));if(u.length)return u;let h=xr[n];return h?d.filter(p=>p.startsWith("climate.")&&typeof s.states[p]?.attributes[h]=="number"):[]}var xr={temperature:"current_temperature",humidity:"current_humidity"};function Dn(s){return s.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function $r(s,t){return t==="\xB0F"?(s-32)*5/9:t==="K"?s-273.15:s}function Ld(s,t){return Dn(s)==="\xB0F"?t*9/5+32:t}function Cd(s,t){return!!s.entities&&un(s).hubs.has(t)}function Mr(s,t){return s.entities?un(s).power.get(t)??[]:[]}function st(s,t,e){let i=s.states[t]?.attributes.friendly_name??s.entities?.[t]?.name??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let o=i.slice(e.length+1);return o.charAt(0).toUpperCase()+o.slice(1)}return i}function ki(s){return!s||s.state==="unavailable"||s.state==="unknown"}function Sr(s){return!!s&&s.entity_id.startsWith("sensor.")&&s.attributes.device_class==="enum"}function Wo(s,t,e=null){if(s==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(s==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(s){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Rg(s,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],o=t[(n+1)%t.length],r=o[0]-i[0],a=o[1]-i[1],l=r*r+a*a||1,c=Math.min(1,Math.max(0,((s[0]-i[0])*r+(s[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(s[0]-i[0]-r*c,s[1]-i[1]-a*c))}return e}function Dd(s,t,e=[]){if(s.points.length<3||!t.length)return[];let n=s.points,i=n.map(v=>v[0]),o=n.map(v=>v[1]),r=Math.min(...i),a=Math.min(...o),l=Math.max(...i),c=Math.max(...o),d=Math.min(l-r,c-a),u=Math.max(.1,Math.min(.25,d/8)),h=Math.min(.35,d/5),p=ge(n),f=[];for(let v=r+u/2;v<l;v+=u)for(let w=a+u/2;w<c;w+=u){let k=[v,w];if(!K(k,n))continue;let S=Rg(k,n);S<h||f.push({p:k,wall:S})}f.length||f.push({p,wall:0});let _=[...e],g=[],y=Math.min(.7,d/4);for(let v of t){let w=et(v)==="light",k=f[0].p,S=-1/0;for(let{p:x,wall:R}of f){let L=_.length?Math.min(..._.map(O=>Math.hypot(x[0]-O[0],x[1]-O[1]))):3,C=Math.hypot(x[0]-p[0],x[1]-p[1]),E=Math.min(L,3)*2;C<y&&!w&&(E-=10),E-=w?C*.35:R*1.2,E>S+1e-9&&(S=E,k=x)}let $=[Math.round(k[0]*100)/100,Math.round(k[1]*100)/100];_.push($),g.push({entity_id:v,x:$[0],z:$[1],y:null,mount:null})}return g}var Ig=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Fg=new Set(["garage","gate"]),Ag=new Set(["window","opening"]);function wi(s,t,e=!1){let n=new Map;return t.length&&s.forEach((i,o)=>{let r=e&&t.length===1?t[0]:t[o];r&&n.set(i.id,r)}),n}function Wd(s,t){let e=new Map,n=(o,r)=>o==="none"?null:o??r??null,i=(o,r,a)=>{let l=n(o.cover,r);return{cover:l,contact:o.sensor==="handle"&&o.contact==null?null:n(o.contact,a),tilt:o.tilt==="none"?null:o.tilt,contact2:o.leaves===2&&o.contact2&&o.contact2!=="none"?o.contact2:null,lock:(o.type==="door"||o.type==="window"&&o.sill<=.01)&&o.lock&&o.lock!=="none"?o.lock:null,tilt2:o.leaves===2&&o.tilt2&&o.tilt2!=="none"?o.tilt2:null,position:l&&et(l)==="cover"&&o.position&&o.position!=="none"?o.position:null,positionInverted:!!o.position_inverted,tiltAngle:o.tilt_angle&&o.tilt_angle!=="none"?o.tilt_angle:null,tiltMax:o.tilt_max??null,tiltOffset:o.tilt_offset??null,tiltInvert:!!o.tilt_invert,shut:!!o.shut,...o.contact_invert?{contactInvert:!0}:{}}};for(let o of t){for(let r of o.rooms){let a=o.openings.filter(w=>w.room_id===r.id).sort((w,k)=>w.edge-k.edge||w.offset-k.offset);if(!a.length)continue;let l=se(s,r.area_id),c=w=>s.states[w]?.attributes.device_class,d=l.filter(w=>et(w)==="cover"&&Ig.has(c(w))),u=a.filter(w=>w.type==="window"),h=a.filter(w=>w.type==="door"),p=a.filter(w=>w.type==="garage"),f=wi(u,d,!0),_=wi(u,l.filter(w=>et(w)==="binary"&&Ag.has(c(w)))),g=wi(h,l.filter(w=>et(w)==="binary"&&c(w)==="door")),y=wi(p,l.filter(w=>et(w)==="cover"&&Fg.has(c(w)??""))),v=wi(p,l.filter(w=>et(w)==="binary"&&c(w)==="garage_door"));for(let w of a){let k=w.type==="window"?f:w.type==="garage"?y:null,S=w.type==="window"?_:w.type==="garage"?v:g;e.set(w.id,i(w,k?.get(w.id),S.get(w.id)))}}for(let r of o.openings)e.has(r.id)||e.set(r.id,i(r))}return e}var Tg=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Er(s){if(!s||ki(s))return null;let t=s.attributes.window_state;for(let e of[typeof t=="string"?t:null,s.state]){if(!e)continue;let n=Tg.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}function xi(s){return!!s&&/^(switch|button|input_button)\./.test(s)}function Wn(s,t){let e=new Map,n=[];for(let r of t){let a=et(r)==="camera"?`camera:${r}`:s.entities?.[r]?.device_id??`entity:${r}`,l=e.get(a);l||(e.set(a,l=[]),n.push(a)),l.push(r)}let i=n.map(r=>{let a=e.get(r),l=a.find(c=>!s.entities?.[c]?.name)??a[0];return{primary:l,others:a.filter(c=>c!==l)}}),o=new Map(t.map((r,a)=>[r,a]));return i.sort((r,a)=>o.get(r.primary)-o.get(a.primary))}function zg(s,t){return Wn(s,t).map(e=>e.primary)}var yr={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Og=/(cam|doorbell|klingel|tür|door|entry|cctv)/i,Vd=new Set(["tv_board","tv_wall"]);function Nd(s,t){let e=s.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function Vn(s){return Vd.has(s)||!!Fc(s)}function Vo(s){return Vn(s)||s==="desk"||s==="fridge_smart"}var Id={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_fan:/(ventilator|fan|lüfter|luefter|decke|ceiling)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Pr(s,t){return t.startsWith("sensor.")&&s.states[t]?.attributes.device_class==="power"}function Hg(s,t){if(Pr(s,t))return t;let e=s.entities?.[t]?.device_id;return e?Mr(s,e).find(n=>n!==t)??null:null}function pn(s,t){let e=new Map;for(let n of t){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let r=o.type in Id,a=he(o.type),l=Ne(o.type),c=r?Id[o.type]:yr[o.type]??(oe(o.type)?yr.robot_vacuum:a?yr.radiator:l?Og:void 0);if(!c&&o.entity==null&&o.power==null)continue;let d=n.rooms.find(_=>_.points.length>=3&&K([o.x,o.z],_.points))??(o.type==="awning"?Eo(n).find(_=>K([o.x,o.z],_.points)):void 0),u=d?zg(s,se(s,d.area_id)):[],h=_=>`${_} ${st(s,_)}`,p=o.entity==="none"?null:o.entity??null;if(o.entity==null){let _=u.filter(g=>!i.has(g));if(r){let g=_.filter(y=>et(y)==="light");p=g.find(y=>c.test(h(y)))??g[0]??null}else if(oe(o.type)){let g=d?.area_id??null;p=Object.keys(s.entities??{}).find(y=>y.startsWith("vacuum.")&&!i.has(y)&&!Cn(s,y)&&re(s,y)===g)??null}else if(l){let g=_.filter(y=>et(y)==="camera");p=g.find(y=>c.test(h(y)))??(g.length===1?g[0]:null)}else if(a||o.type==="ac_unit"){let g=_.filter(y=>et(y)==="climate");p=g.find(y=>c.test(h(y)))??g[0]??null}else if(Vn(o.type)){let g=_.filter(y=>et(y)==="media");p=g.find(y=>s.states[y]?.attributes.device_class==="tv")??g.find(y=>c?.test(h(y)))??(Vd.has(o.type)?g[0]??null:null)}else o.type==="awning"?p=_.find(g=>g.startsWith("cover.")&&(c?.test(h(g))||s.states[g]?.attributes.device_class==="awning"))??null:c&&(p=_.find(g=>["switch","media","fan"].includes(et(g)??"")&&c.test(h(g)))??null);p&&i.add(p)}let f=o.power==="none"?null:o.power??null;o.power==null&&(f=p?Hg(s,p):null,!f&&c&&d&&!r&&(f=se(s,d.area_id).find(g=>Pr(s,g)&&!i.has(g)&&c.test(h(g)))??null),f&&i.add(f)),(p||f)&&e.set(o.id,{entity:p,power:f})}}return e}var Fd=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Lg={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Bd(s,t){let e=t.car??{},n=u=>u&&u!=="none"?u:null,i=n(e.device)??n(t.entity),o=i?s.entities?.[i]?.device_id:null,r=o&&s.entities?Object.values(s.entities).filter(u=>u.device_id===o).map(u=>u.entity_id):[],a=u=>`${u} ${s.states[u]?.attributes.friendly_name??""} ${s.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,h,p)=>r.find(f=>h.includes(f.split(".")[0])&&Lg[u].test(a(f))&&(!p||p(f)))??null,c=u=>String(s.states[u]?.attributes.unit_of_measurement??""),d=u=>String(s.states[u]?.attributes.device_class??"");return{soc:n(e.soc)??r.find(u=>u.startsWith("sensor.")&&d(u)==="battery")??l("soc",["sensor"],u=>c(u)==="%"),range:n(e.range)??l("range",["sensor"],u=>/km|mi/.test(c(u)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],u=>/^k?W$/.test(c(u)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??r.find(u=>u.startsWith("binary_sensor.")&&d(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??r.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??r.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??r.find(u=>u.startsWith("device_tracker."))??null}}function jd(s,t,e){if(e==="none")return null;if(e)return e;let n=t?s.entities?.[t]?.device_id:null;if(!n||!s.entities)return null;for(let i of Object.values(s.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(Fd.test(i.translation_key??"")||Fd.test(i.entity_id.split(".")[1])))return i.entity_id;return null}var Kd=["frame2","frame4","cabinet","wall_frame","wall_cabinet"],Cg=["wall_frame","wall_cabinet"],Ar=["cabinet","wall_cabinet"],Ud=["none","glass","mesh","solid"],Tr=[19,10],Oe=.04445,Fr={19:.4826,10:.254},$i=60,Dg=[1,100],Wg=[.05,1.5],Vg=[0,2],Rr=.001,Ng=new Set(["u","form","width","door","start_u","desc","mount_depth","bottom"]),Gd=(s,[t,e])=>typeof s=="number"&&Number.isInteger(s)&&s>=t&&s<=e,qd=(s,[t,e])=>typeof s=="number"&&Number.isFinite(s)&&s>=t&&s<=e,Bg=s=>Cg.includes(s);function jg(s){let t=s.rack_frame;if(t===void 0)return[];if(!t||typeof t!="object"||Array.isArray(t))return[{field:"rack_frame",why:"a rack frame is an object"}];let e=t,n=[],i=(p,f)=>{n.push({field:p,why:f})};for(let p of Object.keys(e))Ng.has(p)||i(p,"not a rack frame field");if(Gd(e.u,[1,$i])||i("u",`a whole number of U, 1 to ${$i}`),Kd.includes(e.form)||i("form",`one of ${Kd.join(", ")}`),e.width!==void 0&&!Tr.includes(e.width)&&i("width","19 or 10 (inches)"),e.door!==void 0&&!Ud.includes(e.door)&&i("door",`one of ${Ud.join(", ")}`),e.start_u!==void 0&&!Gd(e.start_u,Dg)&&i("start_u","a whole number, 1 to 100"),e.desc!==void 0&&typeof e.desc!="boolean"&&i("desc","true or false"),e.mount_depth!==void 0&&!qd(e.mount_depth,Wg)&&i("mount_depth","0.05 to 1.5 metres"),e.bottom!==void 0&&!qd(e.bottom,Vg)&&i("bottom","0 to 2 metres"),n.length)return n;let[o,r,a]=s.size,l=e.form,c=e.width??19;Fr[c]>o+Rr&&i("width","the rack's panels are wider than the item"),(e.mount_depth??0)>r+Rr&&i("mount_depth","deeper than the item");let d=e.u*Oe;(e.bottom??Math.max(0,(a-d)/2))+d>a+Rr&&i("u",`${e.u}U do not fit in the item's height`);let h=s.mount??"floor";return(Bg(l)!==(h==="wall")||h==="ceiling")&&i("mount",'a wall rack has "mount": "wall", any other stands on the floor or a desk'),(e.door??"none")!=="none"&&!Ar.includes(l)&&i("door","only a cabinet has a door"),n}function He(s){let t=s?.rack_frame;return!t||jg(s).length?null:{u:t.u,form:t.form,width:t.width??19,door:t.door??"none",startU:t.start_u??1,desc:t.desc??!1,mountDepth:t.mount_depth??null,bottom:t.bottom??null}}var zr={19:.45085,10:.22225},Ir={frame2:0,frame4:0,cabinet:.08,wall_frame:.02,wall_cabinet:.06},Kg={frame2:0,frame4:.02,cabinet:.05,wall_frame:.01,wall_cabinet:.04},Ug=.075;function No(s,t,e,n){let i=s.u*Oe,o=Math.min(Math.max(0,s.bottom??(n-i)/2),Math.max(0,n-i)),r=Math.min(Oe,(n-o)/s.u),a=Array.from({length:s.u},(h,p)=>({index:p,label:s.desc?s.startU+s.u-1-p:s.startU+p,y0:o+p*r,y1:o+(p+1)*r})),l=s.form==="frame2",c=l?Ug/2:e/2-Ir[s.form],d=l?e:Math.max(.01,e-Ir[s.form]-Kg[s.form]),u=Math.min(s.mountDepth??d,l?e:e-Ir[s.form]);return{unit:r,units:a,bottom:o,top:o+s.u*r,panel:Math.min(t,Fr[s.width]),opening:Math.min(t,zr[s.width]),front:c,rear:l?null:c-u,mountDepth:u,lane:Math.max(0,(t-Math.min(t,Fr[s.width]))/2)}}var Bo={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"},Gg=new Set(["problem","safety","smoke","gas","carbon_monoxide","heat","moisture","tamper","battery"]),qg=/\b(ob|lb|on battery|low battery|discharg\w*|overload\w*|replace|error|fault\w*|degraded|warning|alarm|update)\b/,Yd=/\b(off|offline|disconnected|down|stopped|not_home|away|unreachable|dead|lost|shutdown|halted|failed)\b/,Yg=/\b(ol|on|online|connected|up|running|home|ok|normal|idle|healthy|active|charging|charged|ready)\b/;function Qd(s){let t=[];for(let e of[s.entity,...s.links??[]])e&&!t.includes(e)&&t.push(e);return t}function Xd(s){if(!s)return null;let t=String(s.state??"").toLowerCase();if(t==="unavailable")return"offline";if(t==="unknown"||t==="")return"warning";let e=s.entity_id.slice(0,s.entity_id.indexOf("."));if(e==="binary_sensor"){let i=Gg.has(String(s.attributes?.device_class??""));return t==="on"?i?"warning":"online":i?"online":"offline"}if(e==="update")return t==="on"?"warning":"online";if(e==="device_tracker"||e==="person")return t==="home"?"online":"offline";if(e==="switch"||e==="input_boolean"||e==="light"||e==="fan")return t==="on"?"online":"offline";if(Number.isFinite(Number(t)))return"online";let n=t.replace(/[_-]+/g," ");return qg.test(n)?"warning":Yd.test(n)||Yd.test(t)?"offline":(Yg.test(n),"online")}function Nn(s,t){let n=(t.links??[]).filter(r=>r&&r!==t.entity).map(r=>s.states[r]).filter(r=>!!r),i=n.filter(r=>r.state==="unavailable").length,o=n.some(r=>r.state!=="unavailable"&&Xd(r)==="warning");if(t.entity){let r=Xd(s.states[t.entity])??"offline";return r==="online"&&(i||o)?"warning":r}return n.length?i===n.length?"offline":i||o?"warning":"online":null}var Jd=["full","half","third"],Zd=["half","full"],Xg=60;var Ei=()=>null,Mi=.001,Qg=new Set(["u","width","depth","inch","shelf"]);function Jg(s){let t=s.rack;if(t===void 0)return[];if(!t||typeof t!="object"||Array.isArray(t))return[{field:"rack",why:"rack gear is an object"}];let e=t,n=[];for(let i of Object.keys(e))Qg.has(i)||n.push({field:i,why:"not a rack gear field"});return(typeof e.u!="number"||!Number.isInteger(e.u)||e.u<0||e.u>$i)&&n.push({field:"u",why:`a whole number of U, 0 to ${$i}`}),e.width!==void 0&&!Jd.includes(e.width)&&n.push({field:"width",why:`one of ${Jd.join(", ")}`}),e.depth!==void 0&&!Zd.includes(e.depth)&&n.push({field:"depth",why:`one of ${Zd.join(", ")}`}),e.inch!==void 0&&!Tr.includes(e.inch)&&n.push({field:"inch",why:"19 or 10 (inches)"}),e.shelf!==void 0&&typeof e.shelf!="boolean"?n.push({field:"shelf",why:"true or false"}):e.shelf&&e.u===0&&n.push({field:"shelf",why:"a shelf takes at least 1U"}),n}function hn(s){let t=s?.rack;return!t||Jg(s).length?null:{u:t.u,width:t.width??"full",depth:t.depth??"half",inch:t.inch??19,shelf:t.shelf??!1}}function eu(s,t){return Array.from({length:Math.max(1,t)},(e,n)=>s+n)}function Zg(s){return Math.max(1,Math.ceil(s/Oe-.02))}function nu(s){return s.gear.u>=1?s.gear.u:Zg(s.size?.[2]??Oe)}function Bn(s,t){let e=t(s.type);return eu(s.u,e?nu(e):1)}var Be={full:1,half:2,third:3},t_=2;function tu(s,t){let e=Be[s];return[t/e,(t+1)/e]}function e_(s,t,e,n){if(s.u<1)return t===n;let[i,o]=tu(s.width,t),[r,a]=tu(e.width,n);return i<a-1e-9&&r<o-1e-9}function Si(s,t){return t.depth==="full"?["front","rear"]:[s.face==="rear"?"rear":"front"]}function Lr(s,t){return t<=s.mountDepth+Mi}function Pi(s,t,e,n,i=Ei){if(e.on)return i_(s,t,e,n,i);let o=n(e.type),r=o?nu(o):1,a=eu(e.u,r),l=(g,y=[])=>({ok:!1,why:g,clash:y,units:a});if(!o)return l("not_gear");let c=o.gear,d=c.u<1;if(c.inch!==s.width)return l("wrong_width");let u=e.col??0;if(!Number.isInteger(e.u)||e.u<1||e.u+r-1>s.u||!Number.isInteger(u)||u<0||u>=(d?t_:Be[c.width]))return l("outside");if(e.face==="rear"&&s.rear===!1)return l("no_rear");if(d&&(o.size?.[0]??0)>(s.lane??1/0)+Mi)return l("no_lane");if(!Lr(s,o.depth))return l("too_deep");let h=new Set(a),p=Si(e,c),f=g=>{if(g.on)return!1;let y=n(g.type);if(y){if(y.gear.u<1!==d||!e_(c,u,y.gear,g.col??0)||!Si(g,y.gear).some(v=>p.includes(v)))return!1}else if(d)return!1;return Bn(g,n).some(v=>h.has(v))},_=t.filter(g=>g.id!==e.id&&f(g)).map(g=>g.id);return _.length?l("overlap",_):{ok:!0,clash:[],units:a}}var Hr=.004;function n_(s,t){return{w:zr[s.width]/Be[t.gear.width],d:t.depth,h:t.gear.u*Oe-Hr}}function i_(s,t,e,n,i){let o=t.find(p=>p.id===e.on&&!p.on),r=o&&n(o.type),a=o?Bn(o,n):[e.u],l=(p,f=[])=>({ok:!1,why:p,clash:f,units:a});if(!o||!r?.gear.shelf)return l("no_shelf");let c=i(e.type);if(!c)return l("not_loose");let d=n_(s,r);if(c.size[2]>d.h+Mi)return l("too_tall");if(c.size[1]>d.d+Mi)return l("too_deep");let u=t.filter(p=>p.on===o.id&&p.id!==e.id);return u.reduce((p,f)=>p+(i(f.type)?.size[0]??0),0)+c.size[0]>d.w+Mi?l("shelf_full",u.map(p=>p.id)):{ok:!0,clash:[],units:a}}var iu=(s,t)=>s.u-t.u;function jo(s,t,e,n,i=Ei){if(!t.some(l=>l.id===e.id)&&t.length>=Xg)return{ok:!1,why:"full",clash:[],units:[],slots:t};let r=Pi(s,t,e,n,i);if(!r.ok)return{...r,slots:t};let a=e.on?{...e,u:t.find(l=>l.id===e.on).u}:e;return{...r,slots:[...t.filter(l=>l.id!==e.id),a].sort(iu)}}function ou(s,t,e,n,i,o=Ei){let r=t.find(c=>c.id===e);if(!r)return{ok:!1,why:"missing",clash:[],units:[],slots:t};if(r.on)return{ok:!0,clash:[],units:[r.u],slots:t};let a={...r,u:n},l=Pi(s,t,a,i,o);return l.ok?{...l,slots:t.map(c=>c.id===e?a:c.on===e?{...c,u:n}:c).sort(iu)}:{...l,slots:t}}function su(s,t){return s.filter(e=>e.id!==t&&e.on!==t)}function ru(s,t){return{u:s.u,width:s.width,mountDepth:t.mountDepth,rear:t.rear!==null,lane:t.lane}}function au(s,t,e,n=Ei){let i=new Set,o=new Set,r=0,a=0;for(let c of t){let d=c.on?n(c.type):e(c.type);if(!d||(typeof d.watts=="number"?r+=d.watts:d.electric&&a++,c.on||!("gear"in d)||d.gear.u<1))continue;let u=Si(c,d.gear);for(let h of Bn(c,e))h<1||h>s.u||(u.includes("front")&&i.add(h),u.includes("rear")&&o.add(h))}let l=new Set([...i,...o]).size;return{used:l,free:Math.max(0,s.u-l),front:i.size,rear:o.size,watts:Math.round(r),unknown:a}}function lu(s){return typeof s.watts=="number"&&s.watts>=0?s.watts:null}function cu(s){return t=>{let e=s(t),n=hn(e);return e&&n?{gear:n,depth:e.size[1],size:e.size,watts:lu(e),electric:!!e.electric}:null}}function du(s){return t=>{let e=s(t);return e&&!e.rack_frame?{size:e.size,watts:lu(e),electric:!!e.electric}:null}}var Or=.003;function uu(s,t,e){let n=[],i=new Map;for(let o of t){if(o.on)continue;let r=e(o.type),a=hn(r);if(!r||!a)continue;let l=o.face==="rear"&&a.depth!=="full";if(l&&s.rear===null)continue;let c=s.units[o.u-1];if(!c)continue;let d=o.col??0;if(a.u<1){if(d>1)continue;let v=Math.min(r.size[0],s.lane),w=Math.min(r.size[2],s.top-c.y0),k=Math.min(r.size[1],s.mountDepth),S=o.face==="rear"?(s.rear??s.front-s.mountDepth)+k/2:s.front-k/2;n.push({slot:o,item:r,x:(d===0?-1:1)*(s.panel/2+s.lane/2),z:S,y:c.y0,w:v,d:k,h:w,back:o.face==="rear"});continue}if(!s.units[o.u+a.u-2])continue;let u=Be[a.width];if(d>=u)continue;let h=a.u*s.unit,p=Math.min(r.size[2],h),f=Math.min(r.size[1],s.mountDepth+Or),_=l?s.rear-Or+f/2:s.front+Or-f/2,g=-s.panel/2+(d+.5)*s.panel/u,y={slot:o,item:r,x:g,z:_,y:a.shelf?c.y0:c.y0+(h-p)/2,w:Math.min(r.size[0],s.panel/u),d:f,h:p,back:l};if(n.push(y),a.shelf){let v=s.opening/u/2;i.set(o.id,{piece:y,x0:g-v,x1:g+v,top:c.y0+h})}}for(let o of t){let r=o.on?i.get(o.on):void 0,a=r&&e(o.type);if(!r||!a||a.rack_frame)continue;let l=r.piece,c=Math.min(a.size[0],r.x1-r.x0),d=Math.min(a.size[1],l.d),u=Math.min(a.size[2],Math.max(0,r.top-l.y-Hr)),h=l.back?l.z-l.d/2+d/2:l.z+l.d/2-d/2;n.push({slot:o,item:a,x:r.x0+c/2,z:h,y:l.y+Hr,w:c,d,h:u,back:l.back}),r.x0+=c}return n}function Ko(s,t,e,n=Ei){let i=[];for(let o of t){if(!(o.on?n(o.type):e(o.type)))continue;let r=Pi(s,t,o,e,n);r.ok||i.push({id:o.id,why:r.why,clash:r.clash})}return i}var Ri=s=>Math.round(s*1e4)/1e4+0;function mu(s,t,e){if(s.door==="none"||!Ar.includes(s.form))return null;let n=Ri(-t/2),i=Ri(e/2),o=Ri(e/2+t),r=Ri(t);return{leaf:[[n,i],[n,o]],arc:`M${n} ${o}A${r} ${r} 0 0 0 ${Ri(t/2)} ${i}`}}var o_=24,s_=220,Cr=8,Uo=30,Ii=14,r_=9,pu=7,Dr=13,gu=7.6,a_="system-ui, -apple-system, Segoe UI, Roboto, sans-serif",Vr={body:"#3a4457",fabric:"#4a5468",cushion:"#56617a",wood:"#7a5a3c",white:"#e6e9ee",metal:"#9aa3b2",dark:"#2a303c",glass:"#5b7fa0",plant:"#3f7a4f",pot:"#6b5a4a",accent:"#2bb3e0",paint:"#4a6ea8"},Wr="#0d1017",l_="#161a22",c_="#07090d",hu="#7d8696",qo="#3a4150",d_="#f2f5fa",fu="#a7b2c5",Fi=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),_t=s=>Math.round(s*10)/10+0,u_=s=>s&&/^#[0-9a-f]{3,8}$/i.test(s)?s:Vr[s??"body"]??Vr.body,p_=(s,t)=>{let e=Math.max(3,Math.floor(t/gu));return s.length<=e?s:`${s.slice(0,e-1).trimEnd()}\u2026`},h_=(s,t)=>!s.slot.on&&hn(s.item)?.depth==="full"||s.back===(t==="rear");function _u(s){let{frame:t,slots:e,itemOf:n,nameOf:i}=s,o=s.face??"front",r=Math.max(.05,s.size[0]),a=Math.max(.005,s.size[2]),l=No(t,r,Math.max(.05,s.size[1]),a),c=Math.max(o_/Oe,s_/l.panel),d=Math.round(r*c+2*Uo),u=Math.round(a*c+2*Cr),h=x=>_t(Uo+(x+r/2)*c),p=x=>_t(Cr+(a-x)*c),f=(x,R,L,C,E,O,I="")=>`<rect class="${x}" x="${h(R)}" y="${p(E)}" width="${_t((C-R)*c)}" height="${_t((E-L)*c)}" fill="${O}"${I}/>`,_=[`<rect x="0" y="0" width="${d}" height="${u}" rx="8" fill="${Wr}"/>`];_.push(f("fp3d-el-rack",-r/2,0,r/2,a,l_,` stroke="${qo}"`));let g=l.opening/2,y=l.panel/2;_.push(f("fp3d-el-opening",-g,l.bottom,g,l.top,c_)),_.push(f("fp3d-el-rail",-y,l.bottom,-g,l.top,hu),f("fp3d-el-rail",g,l.bottom,y,l.top,hu));for(let x of l.units){x.index>0&&_.push(`<line x1="${h(-g)}" y1="${p(x.y0)}" x2="${h(g)}" y2="${p(x.y0)}" stroke="${qo}"/>`);let R=_t(p((x.y0+x.y1)/2)+Dr*.35);_.push(`<text class="fp3d-el-u fp3d-el-u-l" x="${Uo-6}" y="${R}" font-size="${Dr}" text-anchor="end" fill="${fu}">${x.label}</text>`),_.push(`<text class="fp3d-el-u fp3d-el-u-r" x="${d-Uo+6}" y="${R}" font-size="${Dr}" fill="${fu}">${x.label}</text>`)}let v=uu(l,e,n).filter(x=>h_(x,o)),w=0,k=[];for(let x of v){w+=hn(x.item)?.u??0;let R=x.x-x.w/2,L=x.w*c,C=x.h*c,O=[...x.item.parts].sort((Y,X)=>o==="front"?Go(Y)-Go(X):Go(X)-Go(Y)).map(Y=>f_(Y,x,h,p,c,o)).join(""),I=i(x.slot,x.item),T=s.statusOf?.(x.slot)??null,F=Math.min(r_,C-4,L/4),D=!!T&&F>=3,W=p_(I,L-20-(D?pu+F+4:0)),H=_t(p(x.y+x.h/2)+Ii*.36),N=C>=Ii+4?`<rect class="fp3d-el-tag" x="${_t(h(R)+6)}" y="${_t(H-Ii)}" width="${_t(Math.min(L-12,W.length*gu+8))}" height="${Ii+5}" rx="3" fill="${Wr}" fill-opacity="0.75"/><text x="${_t(h(R)+10)}" y="${H}" font-size="${Ii}" fill="${d_}">${Fi(W)}</text>`:"",q=T&&D?`<rect class="fp3d-el-led fp3d-el-led-${T}" data-slot="${Fi(x.slot.id)}" x="${_t(h(R)+L-pu-F)}" y="${_t(p(x.y+x.h/2)-F/2)}" width="${_t(F)}" height="${_t(F)}" rx="2" fill="${Bo[T]}" stroke="${Wr}"/>`:"";k.push({slot:x.slot.id,title:I,x:h(R),y:p(x.y+x.h),w:_t(L),h:_t(C)}),_.push(`<g class="fp3d-el-gear" data-slot="${Fi(x.slot.id)}"><rect class="fp3d-el-face" x="${h(R)}" y="${p(x.y+x.h)}" width="${_t(L)}" height="${_t(C)}" fill="${Vr.dark}" stroke="${qo}"/>${O}${N}${q}<title>${Fi(I)}</title></g>`)}let S=s.title??"Rack";return{svg:`<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${Fi(S)}" class="fp3d-elevation" viewBox="0 0 ${d} ${u}" width="${d}" height="${u}" font-family="${a_}">${_.join("")}</svg>`,width:d,height:u,scale:c,pad:Cr,label:S,gear:k,pieces:v.length,used:w,u:t.u}}var Go=s=>s.z+s.d/2;function f_(s,t,e,n,i,o){let r=t.x+(o==="front"?s.x:-s.x)*t.w,a=t.y+(s.y+s.h/2)*t.h,l=s.w*t.w/2,c=s.h*t.h/2,d=u_(s.color),u=s.edges==="faint"?` stroke="${qo}"`:"";return s.shape==="sphere"||s.shape==="cyl"&&s.axis==="z"?`<ellipse class="fp3d-el-part" cx="${e(r)}" cy="${n(a)}" rx="${_t(l*i)}" ry="${_t(c*i)}" fill="${d}"${u}/>`:`<rect class="fp3d-el-part" x="${e(r-l)}" y="${n(a+c)}" width="${_t(2*l*i)}" height="${_t(2*c*i)}" fill="${d}"${u}/>`}var at=(s,t,e,n,i="")=>z`<rect class=${i} x=${Math.min(s,e)} y=${Math.min(t,n)} width=${Math.abs(e-s)} height=${Math.abs(n-t)} />`,Z=(s,t,e,n,i="")=>z`<line class=${i} x1=${s} y1=${t} x2=${e} y2=${n} />`,mt=(s,t,e,n="")=>z`<circle class=${n} cx=${s} cy=${t} r=${e} />`,jn=(s,t,e,n,i="")=>z`<ellipse class=${i} cx=${s} cy=${t} rx=${e} ry=${n} />`,m_=(s,t,e,n,i,o="")=>z`<rect class=${o} x=${Math.min(s,e)} y=${Math.min(t,n)} width=${Math.abs(e-s)} height=${Math.abs(n-t)} rx=${i} />`;function Nr(s,t,e){let n=[];for(let i=1;i<e;i++){let o=-s/2+s/e*i;n.push(Z(o,t/2,o,t/2-Math.min(.12,t*.3)))}return n}function bu(s,t,e,n){let i=Math.min(.24,t*.28),o=n?Math.min(.2,s*.12):0,r=[at(-s/2,-t/2,s/2,-t/2+i,"fp3d-sym-fill")];n&&r.push(at(-s/2,-t/2,-s/2+o,t/2,"fp3d-sym-fill"),at(s/2-o,-t/2,s/2,t/2,"fp3d-sym-fill"));let a=s-2*o;for(let l=1;l<e;l++){let c=-s/2+o+a/e*l;r.push(Z(c,-t/2+i,c,t/2-.02))}return r}function vu(s,t,e){let n=-s/2,i=s/2,o=-t/2,r=t/2,a=Math.max(.3,Math.min(.95,t*.5,s*(e?.34:.45))),l=Math.min(.24,a*.28),c=Math.min(.2,a*.24),d=[at(n,o,i,o+l,"fp3d-sym-fill"),at(n,o+l,n+l,r,"fp3d-sym-fill"),at(n+l,r-c,n+a,r,"fp3d-sym-fill")];e?d.push(at(i-l,o+l,i,r,"fp3d-sym-fill"),at(i-a,r-c,i-l,r,"fp3d-sym-fill")):d.push(at(i-c,o+l,i,o+a,"fp3d-sym-fill"));let u=e?i-a:i-c;d.push(Z(n+a,r-c,n+a,o+a),Z(n+a,o+a,u,o+a)),e&&d.push(Z(i-a,o+a,i-a,r-c));let h=n+l,p=e?i-l:i-c,f=Math.max(1,Math.round((p-h)/.62));for(let v=1;v<f;v++)d.push(Z(h+(p-h)/f*v,o+l,h+(p-h)/f*v,o+a));let _=o+a,g=r-c,y=g-_<.2?0:Math.max(1,Math.round((g-_)/.62));for(let v=0;v<y;v++){let w=_+(g-_)/y*v;d.push(Z(n+l,w,n+a,w)),e&&d.push(Z(i-a,w,i-l,w))}return d}function yu(s,t,e){switch(s){case"sofa":return bu(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return bu(t,e,1,!0);case"sofa_l":return vu(t,e,!1);case"sofa_u":return vu(t,e,!0);case"bench":return[at(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[at(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),at(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),Z(-t/2+n,-e/2+n,t/2,-e/2+n),Z(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[at(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[mt(0,.03,Math.min(t,e)*.36),at(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[mt(0,0,Math.min(t,e)*.42)];case"stool":return[at(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[at(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return s==="desk"&&n.push(Z(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,o=[at(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),Z(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let r=0;r<n;r++)o.push(at(-t/2+.13+i*r,-e/2+.12,-t/2+.07+i*(r+1),-e/2+.12+Math.min(.4,e*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Nr(t,e,s==="nightstand"||s==="tall_cabinet"||s==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[at(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...Nr(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[Z(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[Z(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[mt(-t*.22,-e*.2,n),mt(t*.22,-e*.2,n*.8),mt(-t*.22,e*.2,n*.8),mt(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[at(-n/2,-e/2+.1,n/2,e/2-.08),mt(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[Z(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[mt(0,.05,Math.min(t,e)*.3),Z(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[at(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),mt(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[Z(-t/2,-e/2,t/2,e/2),Z(t/2,-e/2,-t/2,e/2),mt(0,0,.04)];case"wc":return[at(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),jn(0,e*.1,t*.36,e*.3)];case"washbasin":return[jn(0,.03,t*.34,e*.3)];case"tv_board":return[Z(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...Nr(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[Z(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[mt(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),mt(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[mt(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),mt(0,0,Math.min(t,e)*1.6)];case"parking":return[at(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),Z(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),Z(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[at(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),mt(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let o=1;o<i;o++)n.push(Z(-t/2+t/i*o,-e/2,-t/2+t/i*o,e/2));return n}case"lamp_fan":{let n=Math.min(t,e)/2,i=[mt(0,0,.12,"fp3d-sym-fill"),mt(0,0,n)];for(let o=0;o<4;o++){let r=o/4*Math.PI*2+Math.PI/4;i.push(Z(Math.cos(r)*.13,Math.sin(r)*.13,Math.cos(r)*n*.95,Math.sin(r)*n*.95,"fp3d-sym-strong"))}return i}case"lamp_panel":return[at(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[mt(0,0,n*.9,"fp3d-sym-fill"),mt(0,0,n*.3)];if(s==="lamp_ceiling"||s==="lamp_pendant")for(let o=0;o<8;o++){let r=o/8*Math.PI*2;i.push(Z(Math.cos(r)*n*1.05,Math.sin(r)*n*1.05,Math.cos(r)*n*1.35,Math.sin(r)*n*1.35))}return i}case"lamp_wall":return[at(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),jn(0,.01,t*.4,e*.4)];case"led_strip":return[Z(-t/2,0,t/2,0,"fp3d-sym-strong")];case"wall_switch":case"wall_socket":return[at(-t/2,-e/2,t/2,e/2,"fp3d-sym-fill"),jn(0,e/2,t/2+.06,.09)];case"plant":return[mt(0,0,Math.min(t,e)*.46),mt(0,0,Math.min(t,e)*.25)];case"rug":return[at(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let o=1;o<n;o++)i.push(Z(-t/2,e/2-e/n*o,t/2,e/2-e/n*o));return i.push(Z(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),Z(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),Z(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:o,landing:r,run:a}=pd(t,e,2.75),l=-e/2+r,c=-t/2+o,d=t/2-o,u=[Z(-t/2,l,c,l),Z(c,l,c,e/2),Z(d,l,d,e/2)];for(let g=1;g<n;g++)u.push(Z(-t/2,e/2-a*g,c,e/2-a*g));for(let g=1;g<=i;g++)u.push(Z(d,l+a*g,t/2,l+a*g));let h=(-t/2+c)/2,p=(d+t/2)/2,f=-e/2+r/2,_=e/2-.15;return u.push(Z(h,e/2-.1,h,f,"fp3d-sym-strong"),Z(h,f,p,f,"fp3d-sym-strong"),Z(p,f,p,_,"fp3d-sym-strong"),Z(p-.15,_-.2,p,_,"fp3d-sym-strong"),Z(p+.15,_-.2,p,_,"fp3d-sym-strong")),u}default:{let n=Pt(s);return n?g_(n,t,e):b}}}function g_(s,t,e){let n=__(s,t,e),i=s.rack_frame?He(s):null,o=i&&mu(i,t,e);if(!o)return n;let[[r,a],[l,c]]=o.leaf;return[...n,Z(r,a,l,c,"fp3d-sym-swing"),z`<path class="fp3d-sym-swing" d=${o.arc} />`]}function __(s,t,e){return s.symbol?.length?s.symbol.map(n=>n.shape==="rect"?at((n.x-n.w/2)*t,(n.z-n.d/2)*e,(n.x+n.w/2)*t,(n.z+n.d/2)*e,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?mt(n.x*t,n.z*e,n.r*Math.min(t,e)):Z(n.x1*t,n.z1*e,n.x2*t,n.z2*e)):s.parts.filter(n=>n.w<.98||n.d<.98).map(n=>b_(n,t,e,s.size[2]))}function b_(s,t,e,n){let i=(s.x-s.w/2)*t,o=(s.x+s.w/2)*t,r=(s.z-s.d/2)*e,a=(s.z+s.d/2)*e;switch(s.shape){case"cyl":return(s.axis??"y")==="y"?mt(s.x*t,s.z*e,Math.min(s.w*t,s.d*e)/2):at(i,r,o,a);case"sphere":return jn(s.x*t,s.z*e,s.w*t/2,s.d*e/2);case"lathe":{let l=Math.max(0,...(s.profile??[[1,0]]).map(([c])=>c));return jn(s.x*t,s.z*e,l*s.w*t/2,l*s.d*e/2)}case"rbox":return m_(i,r,o,a,(s.round??.2)*Math.min(s.w*t,s.d*e,s.h*n));default:return at(i,r,o,a)}}var St=(s,t)=>[s[0]-t[0],s[1]-t[1]],je=(s,t)=>[s[0]+t[0],s[1]+t[1]],Le=(s,t)=>[s[0]*t,s[1]*t],mn=(s,t)=>s[0]*t[0]+s[1]*t[1],fn=(s,t)=>s[0]*t[1]-s[1]*t[0],Ai=s=>Math.hypot(s[0],s[1]),ae=s=>{let t=Ai(s)||1;return[s[0]/t,s[1]/t]},wu=s=>[-s[1],s[0]],ku=s=>[s[1],-s[0]];function Ct(s,t,e=[]){let n=t.eps??.005,i=[],o=e.filter(E=>Math.hypot(E.b[0]-E.a[0],E.b[1]-E.a[1])>.05),r=[],a=E=>{for(let O=0;O<r.length;O++)if(Math.abs(r[O][0]-E[0])<=n&&Math.abs(r[O][1]-E[1])<=n)return O;return r.push([E[0],E[1]]),r.length-1},l=[];for(let E of s){let O=E.points;if(O.length<3||Math.abs(Rt(O))<1e-6)continue;let I=Rt(O)>0,T=O.map(a);for(let F=0;F<O.length;F++){let D=T[F],W=T[(F+1)%O.length];D!==W&&l.push(I?{u:D,v:W,room:E.id,edge:F,forward:!0}:{u:W,v:D,room:E.id,edge:F,forward:!1})}}let c=o.map(E=>[a(E.a),a(E.b)]),d=new Set;for(let E of s){let O=E.points;O.length<3||(E.wall_splits??[]).forEach((I,T)=>{if(!I||T>=O.length)return;let F=O[T],D=St(O[(T+1)%O.length],F),W=Ai(D);for(let H of I)H>n&&H<W-n&&d.add(a(je(F,Le(D,H/W))))})}let u=[];for(let E of l){let O=r[E.u],I=r[E.v],T=St(I,O),F=Ai(T),D=Le(T,1/F),W=[];for(let N=0;N<r.length;N++){if(N===E.u||N===E.v)continue;let q=St(r[N],O),Y=mn(q,D);Y<=n||Y>=F-n||Math.abs(fn(D,q))<=n&&W.push({t:Y,id:N})}W.sort((N,q)=>N.t-q.t);let H=[{t:0,id:E.u},...W,{t:F,id:E.v}];for(let N=0;N+1<H.length;N++){let q=H[N],Y=H[N+1],X=E.forward?q.t:F-Y.t,Q=E.forward?Y.t:F-q.t;u.push({u:q.id,v:Y.id,room:E.room,edge:E.edge,t0:X,t1:Q})}}let h=new Map;for(let E of u){let O=E.u<E.v?`${E.u}-${E.v}`:`${E.v}-${E.u}`,I=h.get(O);I||h.set(O,I=[]),I.push(E)}let p=E=>({room_id:E.room,edge:E.edge,t0:E.t0,t1:E.t1}),f=new Map;for(let E of u){let O=`${E.room}:${E.edge}`;f.set(O,[...f.get(O)??[],E.t0].sort((I,T)=>I-T))}let _=E=>{let O=s.find(T=>T.id===E.room)?.wall_heights?.[E.edge];if(!Array.isArray(O))return O;let I=f.get(`${E.room}:${E.edge}`)??[];return O[I.indexOf(E.t0)]??null},g=E=>{let O=E.map(_).filter(T=>typeof T=="number"&&T>0);if(O.length)return Math.min(...O);let I=E.map(T=>s.find(F=>F.id===T.room)?.ceiling_height);return I.every(T=>typeof T=="number"&&T>0)?Math.max(...I):void 0},y=E=>{let O=E.map(I=>s.find(T=>T.id===I.room)?.wall_thickness?.[I.edge]).filter(I=>typeof I=="number"&&I>0);return O.length?Math.max(...O):void 0},v=E=>{for(let O of E){let I=s.find(W=>W.id===O.room),T=I?.wall_slopes?.[O.edge];if(!I||!T)continue;let F=I.points[O.edge],D=I.points[(O.edge+1)%I.points.length];return{p:[F[0],F[1]],q:[D[0],D[1]],h0:Math.max(.05,T[0]),h1:Math.max(.05,T[1])}}},w=E=>E.some(O=>_(O)===0),k=E=>{let O=v(E);return O?{height:Math.max(O.h0,O.h1),slope:O}:{height:g(E)}},S=[],$=[];for(let E of h.values()){let O=E[0],I=E.find(T=>T!==O&&T.u===O.v&&T.v===O.u&&T.room!==O.room);for(let T of E)T!==O&&T!==I&&T.room!==O.room&&i.push(`overlap:${O.room}:${T.room}`);if(w(I?[O,I]:[O])){I&&S.push([O.room,I.room]);continue}if(I){let T=y([O,I])??t.interior;$.push({a:O.u,b:O.v,left:T/2,right:T/2,exterior:!1,roomLeft:O.room,roomRight:I.room,sources:[p(O),p(I)],...k([O,I])})}else $.push({a:O.u,b:O.v,left:0,right:y([O])??t.exterior,exterior:!0,roomLeft:O.room,roomRight:null,sources:[p(O)],...k([O])})}let x=E=>ae(St(r[E.b],r[E.a])),R=new Set;for(let E of $){if(E.exterior||E.free)continue;let O=new Set;for(let T of[E.a,E.b])for(let F of $)!F.exterior||F.free||F.a!==T&&F.b!==T||Math.abs(fn(x(E),x(F)))>1e-6||(F.roomLeft===E.roomLeft?O.add("left"):F.roomLeft===E.roomRight&&O.add("right"));if(O.size!==1)continue;let I=E.left+E.right;O.has("left")?(E.left=0,E.right=I):(E.left=I,E.right=0),R.add(E)}for(let E of[...R]){let O=[E];for(;O.length;){let I=O.pop();for(let T of[I.a,I.b])for(let F of $){if(F===I||F.exterior||F.free||R.has(F)||F.a!==T&&F.b!==T||Math.abs(fn(x(I),x(F)))>1e-6)continue;let D=F.left+F.right,W=I.right===0==mn(x(I),x(F))>0;F.left=W?D:0,F.right=W?0:D,R.add(F),O.push(F)}}}o.forEach((E,O)=>{let[I,T]=c[O];if(I===T)return;let F=[(E.a[0]+E.b[0])/2,(E.a[1]+E.b[1])/2],D=s.find(N=>N.points.length>=3&&K(F,N.points))?.id??null,W=(E.thickness??t.interior)/2,H=typeof E.height=="number"&&E.height>0?E.height:void 0;$.push({free:E.id,a:I,b:T,left:W,right:W,exterior:!1,roomLeft:D,roomRight:D,sources:[],height:H})}),$=y_($,r,d);let L=k_($,r);return{walls:$.map((E,O)=>{let I=r[E.a],T=r[E.b],F=L.get(`${O}:a`),D=L.get(`${O}:b`),W=x_([F.right,D.left,T,D.right,F.left,I],1e-6);return{id:v_(I,T),a:[I[0],I[1]],b:[T[0],T[1]],left:E.left,right:E.right,exterior:E.exterior,roomLeft:E.roomLeft,roomRight:E.roomRight,sources:E.sources,footprint:W,...E.free?{free:E.free}:{},...E.height!==void 0?{height:E.height}:{},...E.slope?{slope:E.slope}:{}}}),warnings:[...new Set(i)],open:S}}function v_(s,t){let e=o=>Math.round(o*100),[n,i]=s[0]<t[0]||s[0]===t[0]&&s[1]<=t[1]?[s,t]:[t,s];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function xu(s){return{...s,a:s.b,b:s.a,left:s.right,right:s.left,roomLeft:s.roomRight,roomRight:s.roomLeft}}function y_(s,t,e=new Set){let n=s.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((r,a)=>{for(let l of[r.a,r.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(a)}});for(let[r,a]of o){if(a.length!==2||e.has(r))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==r&&(l=xu(l)),c.a!==r&&(c=xu(c)),l.a===c.b)continue;let d=ae(St(t[l.b],t[l.a])),u=ae(St(t[c.b],t[c.a]));if(Math.abs(fn(d,u))>1e-6||mn(d,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:w_(l.sources,c.sources)},p=n.filter((f,_)=>_!==a[0]&&_!==a[1]);p.push(h),n.length=0,n.push(...p),i=!0;break}}return n}function w_(s,t){let e=s.map(n=>({...n}));for(let n of t){let i=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function k_(s,t){let e=new Map;s.forEach((i,o)=>{let r=ae(St(t[i.b],t[i.a])),a=[[i.a,{key:`${o}:a`,d:r,left:i.left,right:i.right,angle:Math.atan2(r[1],r[0])}],[i.b,{key:`${o}:b`,d:Le(r,-1),left:i.right,right:i.left,angle:Math.atan2(-r[1],-r[0])}]];for(let[l,c]of a){let d=e.get(l);d||e.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,o]of e){let r=t[i];o.sort((c,d)=>c.angle-d.angle);let a=c=>({left:je(r,Le(wu(c.d),c.left)),right:je(r,Le(ku(c.d),c.right))});for(let c of o)n.set(c.key,a(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let d=o[c],u=o[(c+1)%o.length],h=je(r,Le(wu(d.d),d.left)),p=je(r,Le(ku(u.d),u.right)),f=fn(d.d,u.d);if(Math.abs(f)<1e-4)continue;let _=fn(St(p,h),u.d)/f,g=je(h,Le(d.d,_));Ai(St(g,r))>l||(n.get(d.key).left=g,n.get(u.key).right=g)}}return n}function x_(s,t){let e=s.filter((i,o)=>Ai(St(i,s[(o+1)%s.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let o=e[(i+e.length-1)%e.length],r=e[i],a=e[(i+1)%e.length],l=St(r,o),c=St(a,r);if(Math.abs(fn(ae(l),ae(c)))<1e-7&&mn(l,c)>0){e=e.filter((d,u)=>u!==i),n=!0;break}}}return e}function Jt(s,t,e){let n=s.points[t],i=s.points[(t+1)%s.points.length],o=ae(St(i,n));return je(n,Le(o,e))}function _e(s,t,e){if(s.wall){let i=e.find(a=>a.id===s.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=ae(St(i.b,i.a));return{room:{id:s.room_id,name:"",area_id:null,points:[i.a,i.b,je(i.a,[-o[1],o[0]])]},edge:0}}let n=t.find(i=>i.id===s.room_id);return n&&s.edge<n.points.length?{room:n,edge:s.edge}:null}function Ti(s,t,e){if(!t.wall)return Mu(s,e.room,e.edge,t.offset);let n=s.find(o=>o.free===t.wall);if(!n)return null;let i=Jt(e.room,0,t.offset);return{wall:n,s:mn(St(i,n.a),ae(St(n.b,n.a)))}}function $_(s,t,e){if(t.free)return null;let n=e?t.b:t.a,i=ae(St(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,r=null;for(let a of s)if(!(a===t||!(o(a.a)||o(a.b)))){if(r||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||mn(ae(St(a.b,a.a)),i)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;r=a}return r}function $u(s,t,e){return[0,Math.hypot(t.points[(e+1)%t.points.length][0]-t.points[e][0],t.points[(e+1)%t.points.length][1]-t.points[e][1])].map(i=>{let o=Mu(s,t,e,i);if(!o)return 0;let r=Math.hypot(o.wall.b[0]-o.wall.a[0],o.wall.b[1]-o.wall.a[1]),a=o.s>r/2;if(Math.abs(o.s-(a?r:0))>.001)return 0;let l=$_(s,o.wall,a);return l?Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]):0})}function Mu(s,t,e,n){for(let i of s){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let r=Jt(t,e,n);return{wall:i,s:mn(St(r,i.a),ae(St(i.b,i.a)))}}return null}function Br(s,t){let e=Rt(t)>0?1:-1,n=[...s];for(let i=0;i<t.length&&n.length;i++){let o=t[i],r=t[(i+1)%t.length],a=c=>e*((r[0]-o[0])*(c[1]-o[1])-(r[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let d=l[c],u=l[(c+1)%l.length],h=a(d),p=a(u);if(h>=0&&n.push(d),h>=0!=p>=0){let f=h/(h-p);n.push([d[0]+(u[0]-d[0])*f,d[1]+(u[1]-d[1])*f])}}}return n}var Su=s=>s.length>=3?Math.abs(It(s)):0;function M_(s,t){return s.exterior?0:s.roomLeft===t?s.left:s.roomRight===t?s.right:0}function Eu(s,t,e){let n=Su(s.points);if(s.points.length<3)return n;let{walls:i}=Ct(t.rooms,e,t.walls??[]),o=n,r=i.filter(a=>!a.free&&(a.roomLeft===s.id||a.roomRight===s.id));for(let a of i){let l=[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2];if((a.free?!K(l,s.points):!r.includes(a))||(o-=Su(Br(s.points,a.footprint)),!a.free))continue;let c=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(c<.2)continue;let d=[(a.b[0]-a.a[0])/c,(a.b[1]-a.a[1])/c],u=null;for(let h of r){let p=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1]);if(p<.2)continue;let f=[(h.b[0]-h.a[0])/p,(h.b[1]-h.a[1])/p];if(Math.abs(d[0]*f[1]-d[1]*f[0])>.05)continue;let _=Math.abs((l[0]-h.a[0])*f[1]-(l[1]-h.a[1])*f[0]),g=(a.a[0]-h.a[0])*f[0]+(a.a[1]-h.a[1])*f[1],y=(a.b[0]-h.a[0])*f[0]+(a.b[1]-h.a[1])*f[1],v=Math.min(p,Math.max(g,y))-Math.max(0,Math.min(g,y)),w=_-(a.left+a.right)/2-M_(h,s.id);v>.1&&w>0&&_<1&&(!u||w<u.gap)&&(u={gap:w,overlap:v})}u&&(o-=u.gap*u.overlap)}return Math.max(0,o)}function jr(s,t){return t==="metric"||t==="imperial"?t:s?.config?.unit_system?.length==="mi"?"imperial":"metric"}function Pu(s,t){return String(Number(s.toFixed(t)))}function Kn(s,t=2){let e=s<0?"-":"",n=Math.round(Math.abs(s)/.0254*(t>=2?10:1))/(t>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,r=Pu(o,t>=2?1:0);return i?o<.05?`${e}${i}'`:`${e}${i}' ${r}"`:`${e}${r}"`}function Kr(s,t){let e=s.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,r=!1,a=e;for(let l of e.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];o=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=c*.3048,r=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=c*.0254:d==="mm"?i+=c/1e3:d==="cm"?i+=c/100:d==="m"?i+=c:i+=t==="imperial"?c*(r?.0254:.3048):c}return!o||/[^\s+]/.test(a)?null:i}function Ru(s,t,e){return t==="imperial"?Kn(s):`${e(s)} m`}function Iu(s,t,e){return t==="imperial"?`${Pu(s/(.3048*.3048),1)} ft\xB2`:`${e(s)} m\xB2`}function zi(s,t){return t==="imperial"?s.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):s}var S_=.05,E_=.2,P_=.12;function R_(s){let t=[];return s.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let o=Rt(i)>=0;for(let r=0;r<i.length;r++){let a=i[r],l=i[(r+1)%i.length],c=l[0]-a[0],d=l[1]-a[1],u=Math.hypot(c,d);if(u<.05)continue;let h=[c/u,d/u],p=o?[h[1],-h[0]]:[-h[1],h[0]];(h[1]<-1e-9||Math.abs(h[1])<=1e-9&&h[0]<0)&&(h=[-h[0],-h[1]]);let f=[-h[1],h[0]],_=a[0]*h[0]+a[1]*h[1],g=l[0]*h[0]+l[1]*h[1];t.push({room:n,index:r,dir:h,normal:f,offset:a[0]*f[0]+a[1]*f[1],outside:p[0]*f[0]+p[1]*f[1]>0?1:-1,t0:Math.min(_,g),t1:Math.max(_,g)})}}),t}function Fu(s,t=.6){let e=R_(s),n=e.map((d,u)=>u),i=d=>n[d]===d?d:n[d]=i(n[d]),o=[];for(let d=0;d<e.length;d++)for(let u=d+1;u<e.length;u++){let h=e[d],p=e[u];if(h.room===p.room||Math.abs(h.dir[0]*p.dir[1]-h.dir[1]*p.dir[0])>S_||h.outside===p.outside)continue;let f=(p.offset-h.offset)*h.outside;f>t||f<-P_||Math.abs(f)<1e-4||Math.min(h.t1,p.t1)-Math.max(h.t0,p.t0)<E_||(o.push(Math.round(f*1e3)/1e3),n[i(d)]=i(u))}if(!o.length)return{rooms:s.map(d=>({...d,points:d.points.map(u=>[u[0],u[1]])})),gaps:o};let r=new Map;e.forEach((d,u)=>{let h=i(u);if(h===u&&!e.some((f,_)=>_!==u&&i(_)===u))return;let p=r.get(h)??[];p.push(u),r.set(h,p)});let a=s.map(d=>d.points.map(()=>new Map));for(let[d,u]of r){let h=u.reduce((p,f)=>p+e[f].offset,0)/u.length;for(let p of u){let f=e[p],_=h-f.offset,g=[f.normal[0]*_,f.normal[1]*_],y=s[f.room].points.length;a[f.room][f.index].set(d,g),a[f.room][(f.index+1)%y].set(d,g)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:s.map((d,u)=>({...d,points:d.points.map((h,p)=>{let f=h[0],_=h[1];for(let[g,y]of a[u][p].values())f+=g,_+=y;return[l(f),l(_)]})})),gaps:o}}function Au(s){let t=s.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function Tu(s,t=.05,e=.5){let n=s.map(o=>({...o,points:o.points.map(r=>[r[0],r[1]])})),i=0;for(let o=0;o<4;o++){let r=(l,c)=>n.reduce((d,u)=>d+u.points.filter(h=>Math.abs(h[l]-c)<1e-6).length,0),a=!1;for(let l of n)for(let c=0;c<l.points.length;c++){let d=l.points[c],u=l.points[(c+1)%l.points.length],h=Math.abs(u[0]-d[0]),p=Math.abs(u[1]-d[1]),f=p>1e-6&&p<=t&&h>=e?1:h>1e-6&&h<=t&&p>=e?0:null;if(f===null)continue;let[_,g]=r(f,d[f])>=r(f,u[f])?[d[f],u[f]]:[u[f],d[f]];for(let y of n)for(let v of y.points)Math.abs(v[f]-g)<1e-6&&(v[f]=_);i++,a=!0}if(!a)break}return{rooms:n,fixed:i}}var I_=.25,Yo=s=>Math.round(s*1e3)/1e3;function Ur(s,t,e,n,i){let o=s.rooms.find(r=>r.points.length>=3&&K([t,e],r.points));return!o||K([n,i],o.points)?[n,i]:K([n,e],o.points)?[n,e]:K([t,i],o.points)?[t,i]:[t,e]}function Ee(s,t,e,n){let i=Math.hypot(n[0]-e[0],n[1]-e[1]);if(i<.01)return!1;let o=[(n[0]-e[0])/i,(n[1]-e[1])/i],r=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return s.rooms.some(l=>l.id!==t&&l.points.some((c,d)=>{let u=l.points[(d+1)%l.points.length];return r(c)>.02||r(u)>.02?!1:Math.min(i,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Gr(s,t,e,n,i,o=.05){let r=s.rooms.find(h=>h.points.length>=3&&K([t.x,t.z],h.points));if(!r)return[e,n];let a=r.points,l=Rt(a)>=0?1:-1,c=Qt({...t}),d=e,u=n;for(let h=0;h<2;h++){let p=Qt({...t,x:d,z:u});for(let f=0;f<a.length;f++){let _=a[f],g=a[(f+1)%a.length],y=Math.hypot(g[0]-_[0],g[1]-_[1]);if(y<.05)continue;let v=[(g[0]-_[0])/y,(g[1]-_[1])/y],w=[-v[1]*l,v[0]*l],k=Ee(s,r.id,_,g)?i/2:0,S=0;p.forEach(($,x)=>{let R=($[0]-_[0])*v[0]+($[1]-_[1])*v[1];if(R<-.01||R>y+.01)return;let L=($[0]-_[0])*w[0]+($[1]-_[1])*w[1]-k,C=c[x];(C[0]-_[0])*w[0]+(C[1]-_[1])*w[1]-k<-o||L<S&&(S=L)}),S<-1e-4&&(d-=w[0]*S,u-=w[1]*S)}}return[Yo(d),Yo(u)]}function Oi(s,t,e,n=I_){let i=s.rooms.find(c=>c.points.length>=3&&K([t.x,t.z],c.points));if(!i)return null;let o=i.points,r=Rt(o)>=0?1:-1,a=e/2,l=null;for(let c=0;c<o.length;c++){let d=o[c],u=o[(c+1)%o.length],h=Math.hypot(u[0]-d[0],u[1]-d[1]);if(h<.3)continue;let p=[(u[0]-d[0])/h,(u[1]-d[1])/h],f=[-p[1]*r,p[0]*r],_=(t.x-d[0])*p[0]+(t.z-d[1])*p[1];if(_<0||_>h)continue;let y=s.rooms.some(R=>R.id!==i.id&&R.points.some((L,C)=>{let E=R.points[(C+1)%R.points.length],O=Math.abs((L[0]-d[0])*f[0]+(L[1]-d[1])*f[1]),I=Math.abs((E[0]-d[0])*f[0]+(E[1]-d[1])*f[1]);return O<.02&&I<.02}))?a:0,v=(t.x-d[0])*f[0]+(t.z-d[1])*f[1]-y,w=Math.atan2(-f[0],f[1])*180/Math.PI,k=R=>Math.abs((t.rotation-R+540)%360-180),$=[{rotation:w,extent:t.d/2},{rotation:w+90,extent:t.w/2},{rotation:w-90,extent:t.w/2}].reduce((R,L)=>k(L.rotation)<k(R.rotation)?L:R);if(k($.rotation)>50)continue;let x=v-$.extent;Math.abs(x)>n||l&&Math.abs(x)>=Math.abs(l.gap)||(l={x:Yo(t.x-f[0]*x),z:Yo(t.z-f[1]*x),rotation:(Math.round($.rotation)%360+360)%360,gap:x})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function qr(s){return s==="touch"?44:24}function zu(s,t,e,n,i){let o=[],r=[];for(let a of s){if(i?.(a))continue;let l=Ou(a,t,e,n);l==="firm"?o.push({id:a.id,area:a.w*a.d}):l==="pad"&&r.push({id:a.id,dist:Math.hypot(t[0]-a.x,t[1]-a.z)})}return o.sort((a,l)=>a.area-l.area),r.sort((a,l)=>a.dist-l.dist),[...o.map(a=>a.id),...r.map(a=>a.id)]}function Ou(s,t,e,n){let i=n/2/Math.max(e,1e-6),o=s.rotation*Math.PI/180,r=Math.cos(o),a=Math.sin(o),l=t[0]-s.x,c=t[1]-s.z,d=Math.abs(l*r+c*a),u=Math.abs(-l*a+c*r),h=s.w/2,p=s.d/2;if(d<=h&&u<=p)return"firm";if(!(d<=Math.max(h,i)&&u<=Math.max(p,i)))return null;let f=(_,g)=>_<i&&g>=i/2&&g>=4*_;return f(p,h)&&d<=h||f(h,p)&&u<=p?"firm":"pad"}function Hu(s,t,e,n){return Ou(s,t,e,n)==="firm"}function Yr(s,t,e=1){if(!s.length)return null;let n=t?s.indexOf(t):-1;return n<0?e<0?s[s.length-1]:s[0]:s[(n+e+s.length)%s.length]}function Lu(s,t,e){let n=e&&s.includes(e)?e:s.find(o=>t.includes(o));if(!n)return{grab:s[0]??null,next:null};let i=Yr(s,n);return{grab:n,next:i!==n?i:null}}function Xo(s,t){let e=[...s].sort((i,o)=>It(i.points)-It(o.points)),n=new Map;for(let i of t){let o=e.find(a=>K([i.x,i.z],a.points))?.id??null,r=n.get(o);r?r.push(i):n.set(o,[i])}return n}function Cu(s,t,e,n,i=4){let o=Math.ceil(e/n),r=Math.max(0,Math.min(Math.floor(t/n),s-o)),a=Math.max(0,r-i),l=Math.min(s,r+o+i);return{start:a,end:l,before:a*n,after:(s-l)*n}}var Xr={bg:"#070b14",bg2:"#0d1424",chrome:"rgba(14, 21, 38, 0.86)",chromeSolid:"#0f1729",line:"rgba(120, 170, 255, 0.16)",text:"#e6eefc",muted:"#8a9bb8",accent:"#37e0ff",accentText:"#041018",soft:"#5b7cff",warm:"#ffb547",danger:"#ff6b8b",shadow:"0 8px 30px rgba(0, 0, 0, 0.5)",colorScheme:"dark"},Du={bg:"#eef2f8",bg2:"#e3e9f2",chrome:"rgba(255, 255, 255, 0.88)",chromeSolid:"#ffffff",line:"rgba(30, 60, 110, 0.18)",text:"#132036",muted:"#4a5a74",accent:"#0b7a99",accentText:"#ffffff",soft:"#3d5bd9",warm:"#a35f00",danger:"#c4224a",shadow:"0 6px 22px rgba(20, 40, 80, 0.16)",colorScheme:"light"};function Wu(s){let t=e=>e.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`);return Object.entries(s).map(([e,n])=>`--fp3d-s-${t(e)}: ${n};`).join(`
`)}var Vu=s=>s.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),F_=Object.keys(Xr).filter(s=>s!=="colorScheme").map(s=>`--fp3d-${Vu(s)}: var(--fp3d-s-${Vu(s)}, ${Xr[s]});`).join(`
`),Yt=zt`
  :host {
    ${We(F_)}
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: var(--fp3d-s-color-scheme, dark);
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
  :host([light]) {
    ${We(Wu(Du))}
  }
`,Ke=zt`
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
`;var gn=32,A_=9,Qr=class extends xt{static properties={rows:{attribute:!1},texts:{attribute:!1},editable:{type:Boolean},_scroll:{state:!0}};constructor(){super(),this.rows=[],this.texts={hide:"Hide",show:"Show",remove:"Delete"},this.editable=!1,this._scroll=0}send(t,e){this.dispatchEvent(new CustomEvent(t,{detail:{id:e},bubbles:!0,composed:!0}))}onScroll(t){let e=t.currentTarget.scrollTop;Math.floor(e/gn)!==Math.floor(this._scroll/gn)&&(this._scroll=e)}render(){let t=this.rows,e=Math.min(t.length,A_)*gn,n=Cu(t.length,this._scroll,e,gn);return m`<div class="box" style="height:${e}px" role="list" @scroll=${this.onScroll}>
      <div style="height:${n.before}px"></div>
      ${t.slice(n.start,n.end).map(i=>m`<div class=${`row${i.selected?" sel":""}${i.hidden?" off":""}`} role="listitem">
          <button class="name" aria-pressed=${i.selected} @click=${()=>this.send("item-select",i.id)}>
            <span>${i.name}</span>${i.note?m`<small>${i.note}</small>`:b}
          </button>
          <button class="icon" title=${i.hidden?this.texts.show:this.texts.hide} aria-label=${i.hidden?this.texts.show:this.texts.hide} aria-pressed=${i.hidden} @click=${()=>this.send("item-hide",i.id)}>
            ${i.hidden?"\u25CC":"\u25C9"}
          </button>
          ${this.editable?m`<button class="icon" title=${this.texts.remove} aria-label=${this.texts.remove} @click=${()=>this.send("item-delete",i.id)}>✕</button>`:b}
        </div>`)}
      <div style="height:${n.after}px"></div>
    </div>`}static styles=[Yt,zt`
      :host {
        display: block;
      }
      .box {
        overflow-y: auto;
        overscroll-behavior: contain;
      }
      .row {
        display: flex;
        align-items: center;
        gap: 2px;
        height: ${gn}px;
        box-sizing: border-box;
      }
      button {
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        height: ${gn-4}px;
      }
      button:hover,
      button:focus-visible {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      .name {
        flex: 1;
        min-width: 0;
        display: flex;
        gap: 8px;
        align-items: baseline;
        text-align: left;
        padding: 0 8px;
      }
      .name span,
      .name small {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .name small {
        margin-left: auto;
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .sel .name {
        color: var(--fp3d-accent);
      }
      .off .name span {
        opacity: 0.5;
        text-decoration: line-through;
      }
      .icon {
        width: ${gn}px;
        flex: none;
        color: var(--fp3d-muted);
      }
    `]};customElements.get("fp3d-item-list")||customElements.define("fp3d-item-list",Qr);function Ue(s,t){let e=s.points,n=e[t],i=e[(t+1)%e.length],o=Math.hypot(i[0]-n[0],i[1]-n[1])||1,r=[(i[0]-n[0])/o,(i[1]-n[1])/o],a=[-r[1],r[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];K([l[0]+a[0]*.02,l[1]+a[1]*.02],e)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:n,b:i,u:r,n:a,length:o,rightward:r[0]*c[0]+r[1]*c[1]>0}}function gt(s,t){let e=t[0]-s.a[0],n=t[1]-s.a[1];return{s:e*s.u[0]+n*s.u[1],d:e*s.n[0]+n*s.n[1]}}function be(s,t,e){return[s.a[0]+s.u[0]*t+s.n[0]*e,s.a[1]+s.u[1]*t+s.n[1]*e]}var T_=.45;function Un(s,t){let e=[];for(let n of t.openings){if(n.wall)continue;let i=t.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:o,d:r}=gt(s,Jt(i,n.edge,n.offset));Math.abs(r)>.4||o<-.05||o>s.length+.05||e.push(z_(n,o))}return e}function z_(s,t){return{kind:"opening",id:s.id,s0:t-s.width/2,s1:t+s.width/2,y0:s.sill,y1:s.sill+s.height,d:0}}function Ge(s,t,e,n=T_){let i=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let r=K([o.x,o.z],e.points),a=Qt(o).map(p=>gt(s,p)),l=Math.min(...a.map(p=>p.d)),c=Math.min(...a.map(p=>p.s)),d=Math.max(...a.map(p=>p.s)),u=gt(s,[o.x,o.z]);if(!r&&u.d<=0||u.d<=0||l>n||l<-.3||d<.02||c>s.length-.02)continue;let h=Kt(t,o);i.push({kind:"furniture",id:o.id,s0:c,s1:d,y0:h,y1:h+o.h,d:l})}return i}function Qo(s,t,e){let n=i=>Math.round(i*1e3)/1e3;return{x:n(t.x+s.u[0]*e),z:n(t.z+s.u[1]*e)}}var Jr=.3;function le(s,t){let e=s.from?t(s.from):null,n=s.to?t(s.to):null,i=s.height??Jr,o=[];if(s.heights)e&&o.push([e.x,e.y,e.z]),s.points.forEach(([r,a],l)=>o.push([r,s.heights?.[l]??i,a])),n&&o.push([n.x,n.y,n.z]);else{if(!e||!n)return[];o.push([e.x,e.y,e.z],[e.x,i,e.z]);for(let[r,a]of s.points)o.push([r,i,a]);o.push([n.x,i,n.z],[n.x,n.y,n.z])}return o.filter((r,a)=>a===0||Jo(r,o[a-1])>.001)}function Jo(s,t){return Math.hypot(t[0]-s[0],t[1]-s[1],t[2]-s[2])}function Zr(s){let t=0;for(let e=1;e<s.length;e++)t+=Jo(s[e-1],s[e]);return t}function Nu(s,t){if(s.length<2)return null;let e=Math.max(0,t);for(let n=1;n<s.length;n++){let[i,o]=[s[n-1],s[n]],r=Jo(i,o);if(!(r<1e-6)){if(e<=r||n===s.length-1){let a=Math.min(1,e/r),l=[(o[0]-i[0])/r,(o[1]-i[1])/r,(o[2]-i[2])/r];return{p:[i[0]+(o[0]-i[0])*a,i[1]+(o[1]-i[1])*a,i[2]+(o[2]-i[2])*a],dir:l,seg:n-1}}e-=r}}return null}function Gn(s,t){let e=null,n=0;for(let i=1;i<s.length;i++){let[o,r]=[s[i-1],s[i]],a=[r[0]-o[0],r[1]-o[1],r[2]-o[2]],l=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],c=l>0?Math.max(0,Math.min(1,((t[0]-o[0])*a[0]+(t[1]-o[1])*a[1]+(t[2]-o[2])*a[2])/l)):0,d=[o[0]+a[0]*c,o[1]+a[1]*c,o[2]+a[2]*c],u=Jo(d,t);(!e||u<e.d)&&(e={at:n+Math.sqrt(l)*c,d:u,seg:i-1,p:d}),n+=Math.sqrt(l)}return e}function ve(s,t,e,n){let[i,o]=be(s,t,n);return[i,e,o]}function Bu(s,t,e,n){let i=be(s,0,t),o=be(e,0,n),r=s.u[0]*-e.u[1]-s.u[1]*-e.u[0];if(Math.abs(r)<1e-6)return null;let a=o[0]-i[0],l=o[1]-i[1],c=(a*-e.u[1]-l*-e.u[0])/r;return[i[0]+s.u[0]*c,i[1]+s.u[1]*c]}var ju=["top6","side6","four"];function qe(s){return s==="pool_pump"?["suction","pressure"]:s==="pool_filter"?["pump","return","waste"]:s==="pool_heat_pump"?["in","out"]:[]}function qn(s){return s==="wall"||s==="floor"?["inside","outside"]:["in","out1","out2"]}function lt(s){let[t="",e="",n]=s.split(":");return{kind:t,id:e,port:n||null}}function ye(s){let{kind:t,id:e}=lt(s);return t&&e?`${t}:${e}`:s}function O_(s,t){let{w:e,d:n,h:i}=s;if(s.type==="pool_pump")return t==="suction"?[e*.5,i*.55,0]:t==="pressure"?[e*.05,i*.9,0]:null;if(s.type==="pool_filter"){let o=Math.min(e,n)/2;if(s.variant==="side6"){let l=o+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let r=i*.89,a=o*.45+.04;return t==="pump"?[-a,r,0]:t==="return"?[a,r,0]:t==="waste"?[0,r,-a]:null}if(s.type==="pool_heat_pump"){let o=s.variant==="left"||s.variant==="back"?s.variant:"right";if(t!=="in"&&t!=="out")return null;let r=t==="in"?i*.25:i*.45;return o==="back"?[t==="in"?-e*.15:e*.15,r,-n/2-.04]:[(o==="left"?-1:1)*(e/2+.04),r,-n*.2]}return null}function Ku(s,t){let e=O_(s,t);if(!e)return null;let n=s.rotation*Math.PI/180,[i,o]=[Math.cos(n),Math.sin(n)];return{x:s.x+e[0]*i-e[2]*o,y:e[1],z:s.z+e[0]*o+e[2]*i}}function Ye(s,t){if(t==="outside"){if(s.kind==="floor")return{x:s.x,y:s.y-.3,z:s.z};if(s.kind==="wall"){let e=(s.depth??.3)+.05;return{x:s.x-(s.nx??0)*e,y:s.y,z:s.z-(s.nz??0)*e}}}return{x:s.x,y:s.y,z:s.z}}function Uu(s){return s==="pressure"||s==="return"||s==="waste"||s==="out"?"source":s==="suction"||s==="pump"||s==="in"?"sink":null}function ta(s){return s==="skimmer"||s==="drain"?"source":"sink"}function Zo(s,t){let e=s[0]??t,n=1/0;for(let i=0;i<s.length;i++){let o=s[i],r=s[(i+1)%s.length],a=r[0]-o[0],l=r[1]-o[1],c=a*a+l*l,d=c>0?Math.max(0,Math.min(1,((t[0]-o[0])*a+(t[1]-o[1])*l)/c)):0,u=[o[0]+a*d,o[1]+l*d],h=Math.hypot(u[0]-t[0],u[1]-t[1]);h<n&&([e,n]=[u,h])}return e}function dt(s,t,e){let n=e.pool??{},i=hr(t,e);return o=>{let{kind:r,id:a,port:l}=lt(o);if(r==="port"){let c=n.ports?.find(u=>u.id===a);if(!c)return null;let d=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?nd(t,e)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(r==="joint"){let c=n.joints?.find(d=>d.id===a);return c?Ye(c,l):null}if(r!=="dev")return null;for(let c of s.floors){let d=c.furniture.find(f=>f.id===a);if(!d||!Ht.includes(d.type))continue;let u=l?Ku(d,l):null,h=c.elevation-t.elevation;if(u)return{...u,y:u.y+Kt(c,d)+h};let p=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?dd:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:p+Kt(c,d)+h}}return null}}function Zt(s,t){if(s.heights)return s;let e=s.height??Jr,n=t(s.from),i=t(s.to),o=[...n?[[n.x,n.z]]:[],...s.points,...i?[[i.x,i.z]]:[]];return{...s,points:o,heights:o.map(()=>e)}}var bt=s=>Math.round(s*1e3)/1e3;function ts(s,t,e,n,i){let o=Zt(s,t),r=le(o,t),a=Gn(r,e);if(!a)return null;let l={id:n,x:bt(a.p[0]),z:bt(a.p[2]),y:bt(a.p[1])},c=Hi(o,t),d=Math.max(0,Math.min(o.points.length,a.seg+1-c)),u=o.heights??[],h=o.fittings??[],p={...o,to:`joint:${n}:in`,points:o.points.slice(0,d),heights:u.slice(0,d),fittings:h.filter(_=>_.at<=a.at)},f={...o,id:i,from:`joint:${n}:out1`,points:o.points.slice(d),heights:u.slice(d),fittings:h.filter(_=>_.at>a.at).map(_=>({..._,at:bt(_.at-a.at)}))};return{joint:l,first:p,second:f}}function Hi(s,t){return s.from&&t(s.from)?1:0}var H_=1.6;function qu(s,t,e){let n=[],i=o=>{let r=gt(s,[o[0],o[2]]);return r.d>-.35&&r.d<H_&&r.s>-.3&&r.s<s.length+.3?r:null};for(let o of t){let r=Zt(o,e),a=le(r,e);if(a.length<2)continue;let l={id:o.id,pieces:[],points:[],fittings:[],ends:[]};for(let u=1;u<a.length;u++){let h=i(a[u-1]),p=i(a[u]);h&&p&&l.pieces.push({k:u-1,s0:h.s,y0:a[u-1][1],d0:h.d,s1:p.s,y1:a[u][1],d1:p.d})}if(!l.pieces.length)continue;let c=Hi(r,e);r.points.forEach((u,h)=>{let p=a[h+c],f=p&&i(p);f&&l.points.push({i:h,s:f.s,y:p[1]})});let d=Zr(a);for(let u of o.fittings??[]){let h=Math.min(d,u.at),p=Nu(a,h)?.p,f=p&&i(p);p&&f&&l.fittings.push({id:u.id,kind:u.kind,open:u.open!==!1,s:f.s,y:p[1]})}for(let[u,h]of[["from",a[0]],["to",a[a.length-1]]]){let p=(u==="from"?!o.from:!o.to)?i(h):null;p&&l.ends.push({end:u,s:p.s,y:h[1]})}n.push(l)}return n}var Yu=-.3;function Yn(s,t,e,n,i){let o=[],r=[],a=g=>t(g),l=[],c=s.from,d=[];for(let g of s.vias){if(g.kind!=="hole"){d.push(g.kind);continue}let y=e.find($=>$.id===g.joint),v=a(c);if(!y||!v)continue;let w=a(`joint:${y.id}:inside`),k=a(`joint:${y.id}:outside`),S=g.dir?g.dir==="out":Math.hypot(v.x-w.x,v.z-w.z)<=Math.hypot(v.x-k.x,v.z-k.z);l.push({a:c,b:`joint:${y.id}:${S?"inside":"outside"}`,fits:d}),d=[],c=`joint:${y.id}:${S?"outside":"inside"}`}let u=s.to;if(u.length>1){let g=a(c),y=u.map(a).filter(v=>!!v);if(g&&y.length===u.length){let v=y.reduce((R,L)=>R+L.x,0)/y.length,w=y.reduce((R,L)=>R+L.z,0)/y.length,k=Math.hypot(g.x-v,g.z-w)||1,S=Math.min(1,k/2)/k,$=g.y<0||y.some(R=>R.y<0),x={id:i("joint"),kind:"tee",x:bt(v+(g.x-v)*S),z:bt(w+(g.z-w)*S),y:$?Yu:bt(g.y)};r.push(x),l.push({a:c,b:`joint:${x.id}:in`,fits:d}),d=[],u.forEach((R,L)=>l.push({a:`joint:${x.id}:out${L+1}`,b:R,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let h=g=>{let{kind:y,id:v,port:w}=lt(g),k=y==="joint"?r.find(S=>S.id===v):void 0;return k?Ye(k,w):a(g)},p=g=>n(g)==="source",f=g=>n(g)==="sink",_=s.to.some(p)&&!p(s.from)||f(s.from)&&!s.to.some(f);for(let g of l){let y=h(g.a),v=h(g.b);if(!y||!v)continue;let w=L_(y,v,Gu(g.a,e),Gu(g.b,e)),k={id:i("pipe"),from:g.a,to:g.b,floor_id:s.floorId,points:w.map($=>[$[0],$[2]]),heights:w.map($=>$[1])},S=Zr(le(k,h));k.fittings=g.fits.map(($,x)=>({id:i("fit"),kind:$,at:bt(Math.min(S/2,.4+x*.25)),...$==="valve"?{open:!0}:{}})),_&&(k={...k,from:k.to,to:k.from,points:[...k.points].reverse(),heights:[...k.heights??[]].reverse(),fittings:k.fittings?.map($=>({...$,at:bt(Math.max(0,S-$.at))}))}),o.push(k)}return{pipes:o,joints:r}}function Gu(s,t){let{kind:e,id:n,port:i}=lt(s),o=e==="joint"&&i==="outside"?t.find(r=>r.id===n):void 0;return o?.kind==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function L_(s,t,e=null,n=null){let i=s.y<0||t.y<0?Yu:bt(Math.max(s.y,t.y)),o=[],[r,a]=[s.x,s.z];e&&([r,a]=[bt(r+e[0]*.5),bt(a+e[1]*.5)],o.push([r,bt(s.y),a]));let[l,c]=[t.x,t.z],d=[];return n&&([l,c]=[bt(l+n[0]*.5),bt(c+n[1]*.5)],d.push([l,bt(t.y),c])),o.push([bt(r),i,bt(a)]),Math.abs(l-r)>.01&&o.push([bt(l),i,bt(a)]),Math.abs(c-a)>.01&&o.push([bt(l),i,bt(c)]),o.push(...d),o.filter((u,h)=>h===0||Math.hypot(u[0]-o[h-1][0],u[1]-o[h-1][1],u[2]-o[h-1][2])>.001)}function Xu(s,t,e){let n=o=>{let{kind:r,id:a,port:l}=lt(o),c=r==="joint"&&(l==="inside"||l==="outside")?t.find(d=>d.id===a):void 0;return c&&(c.kind==="wall"||c.kind==="floor")?{id:a,port:l}:null},i=[];for(let o of s.filter(r=>r.from===e||r.to===e)){let r={start:e,other:"",pipes:[],holes:[],fittings:[]},a=o,l=e,c=new Set;for(;a&&!c.has(a.id);){c.add(a.id),r.pipes.push(a.id),r.fittings.push(...(a.fittings??[]).map(p=>p.kind));let d=a.from===l?a.to:a.from,u=d?n(d):null;if(!u){r.other=d;break}r.holes.push({joint:u.id,dir:u.port==="inside"?"out":"in"}),l=`joint:${u.id}:${u.port==="inside"?"outside":"inside"}`;let h=a;a=s.find(p=>p!==h&&(p.from===l||p.to===l)),a||(r.other=l)}i.push(r)}return i}function C_(s,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i,r=o?Math.max(0,Math.min(1,((s[0]-t[0])*n+(s[1]-t[1])*i)/o)):0;return Math.hypot(s[0]-t[0]-n*r,s[1]-t[1]-i*r)}function Qu(s,t,e=.03){return s.every(n=>K(n,t)||t.some((i,o)=>C_(n,i,t[(o+1)%t.length])<=e))}function Ju(s,t){return t&&s.states[t]?t:Object.keys(s.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function Zu(s,t){let e=s.states[t];if(!e)return!1;let n=String(e.attributes.device_class??"");return t.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(t):t.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(e.attributes.unit_of_measurement??"")):!1}var ea=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],na=["fun_pets","fun_halloween"],D_=["pool"];function ia(){try{let s=new URLSearchParams(location.search).get("fp3d_lab");return s==="1"?localStorage.setItem("home3d.lab","1"):s==="0"&&localStorage.removeItem("home3d.lab"),localStorage.getItem("home3d.lab")==="1"}catch{return!1}}function Xn(s){return!D_.includes(s)||s!=="diagnostics"&&s!=="locate"&&vt(s)||ia()}var W_=["fridge_smart"];function oa(s){return ea.includes(s)||W_.includes(s)||na.includes(s)}var V_=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","household","fridge_smart","fun_pets","fun_halloween"];function sa(s=ko()){let t=new Set(V_);for(let e of s)for(let n of e.features??[])oa(n)&&t.add(n);return t}function vt(s,t){return sa(t).has(s)}function Qn(s,t){let e;return()=>(e||(e=import(new URL(`./${s}.js?v=${t()}`,new URL(import.meta.url)).href).catch(i=>{throw e=void 0,i})),e)}var tp=Qn("home-3d-locate",()=>"8eae6ec12878");function np(s){let t=Pt(s);if(!t)return!1;if(N_.test([t.id,...t.tags??[],...Object.values(t.name??{})].join(" ")))return!t.light||/plant|pflanz/i.test(t.id);if(t.light)return!1;let e=t.parts.filter(n=>n.color==="plant").length;return e>0&&e+t.parts.filter(n=>n.color==="pot").length>=t.parts.length/2}var N_=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i,ra=["bin120","bin240","bin1100","multi","bag","caddy","underground"],ip=["rest","bio","paper","plastic","glass","garden","recycling","other"],aa=["wall","pole","pillar","parcel","bank"],op={bin120:[.48,.55,.93],bin240:[.58,.73,1.07],bin1100:[1.37,1.07,1.45],multi:[.6,.75,1.07],bag:[.42,.32,.62],caddy:[.3,.26,.32],underground:[1,1,1.15]},sp={wall:[.38,.14,.34],pole:[.24,.5,1.15],pillar:[.42,.36,1.3],parcel:[.6,.55,1.1],bank:[.95,.3,.7]};function rp(s){return ra.includes(s.variant??"")?s.variant:"bin240"}function ap(s){return aa.includes(s.variant??"")?s.variant:"wall"}var kt=["#3a3f47","#3a3f47"],_n=["#23262b","#23262b"],we=["#5a3b25","#5a3b25"],ht=["#1f4fa8","#1f4fa8"],Xe=["#e3b616","#e3b616"],nt=["#2f7d3b","#2f7d3b"],ep={default:{rest:kt,bio:we,paper:ht,plastic:Xe,glass:nt,garden:nt,recycling:Xe,other:kt},DE:{rest:_n,bio:we,paper:ht,plastic:Xe,glass:nt,garden:nt,recycling:Xe},AT:{rest:kt,bio:we,paper:[kt[0],"#c0262d"],plastic:Xe,glass:nt,garden:nt},CH:{rest:["#d8d8d8","#d8d8d8"],bio:nt,paper:ht,plastic:kt,glass:nt,garden:nt},NL:{rest:kt,bio:nt,paper:ht,plastic:["#3a3f47","#e57a1f"],glass:nt,garden:nt},BE:{rest:kt,bio:nt,paper:ht,plastic:ht,glass:nt,garden:nt},GB:{rest:_n,bio:["#3a3f47","#5a3b25"],paper:ht,plastic:ht,glass:_n,garden:we,recycling:ht},US:{rest:_n,bio:nt,paper:ht,plastic:ht,glass:ht,garden:nt,recycling:ht},CA:{rest:_n,bio:nt,paper:ht,plastic:ht,glass:ht,garden:nt,recycling:ht},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:kt,bio:we,paper:[kt[0],"#e3b616"],plastic:[kt[0],"#e3b616"],recycling:[kt[0],"#e3b616"],glass:nt,garden:nt},IT:{rest:kt,bio:we,paper:ht,plastic:Xe,glass:nt,garden:nt},ES:{rest:kt,bio:we,paper:ht,plastic:Xe,glass:nt,garden:nt},PT:{rest:kt,bio:we,paper:ht,plastic:Xe,glass:nt,garden:nt},DK:{rest:_n,bio:nt,paper:ht,plastic:kt,glass:nt,garden:nt},SE:{rest:_n,bio:we,paper:ht,plastic:kt,glass:nt,garden:nt},NO:{rest:kt,bio:we,paper:ht,plastic:kt,glass:nt,garden:nt},FI:{rest:kt,bio:we,paper:ht,plastic:kt,glass:nt,garden:nt}},lp="DE";function cp(){return lp}function la(s,t){return ep[t]?.[s]??ep.default[s]??kt}function dp(s,t=lp){let e=la(s.bin_kind??"rest",t),n=s.bin_color||e[0];return[n,s.bin_lid||(s.bin_color?n:e[1])]}var B_={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",phone_hint:"Drawing works best on a PC or tablet \u2013 on a phone you can look around and control your home.",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of Home 3D ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows Home 3D {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",update_ready:"Home 3D has been updated. Reload to use the new version.",update_saving:"Your changes are still being saved; the reload waits for them.",update_unsaved:"Your last changes are not saved yet. Reloading waits until they are, or they would be lost.",needs_restart_old:"A new version of Home 3D is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",plan_view:"2D or 3D",view_3d:"3D",view_2d:"2D",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",copy_items:"Copy",paste_items:"Paste",paste_items_n:"Paste ({n})",help_key_copy:"Copy the chosen items (inside the editor only, not the system clipboard)",help_key_paste:"Paste the copied items on this floor",help_key_select_all:"Choose every item on this floor",item_floor_hint:"Moves the item, with its links, to another floor",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_label:"From Home Assistant:",first_floor_add:"Add your first floor",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections and cables stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",floor_order_hint:'Only changes the order of the floors in the list and the floor pictures. Where a floor sits in the 3D house comes from its "height above the ground".',default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",show_menu:"Show",tool_menu:"Tool",floor_label:"Floor:",floor_settings:"Floor settings",floor_settings_of:"Floor {floor}",floor_none_hint:'Add your first floor at the top with "Floor" \u2192 "Add floor".',tool_group_build:"Build",tool_group_outside:"Outside",tool_room:"Room",view_menu:"View",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",resize_carried:"Moved with the room: {n} items and devices, {w} neighbouring walls.",resize_outline_only:"Outline only",resize_outline_only_hint:"Keep the new outline; items, devices and neighbouring walls stay where they were",resize_outside:"{n} items now outside the room",resize_outside_one:"1 item now outside the room",resize_select:"Select them",redo:"Redo",fit_all:"Fit everything",fit_all_hint:"Bring the whole plot into view: the garden, paths and everything standing outside",split_fold_hint:"Close the 3D view beside the plan",fit:"Whole plan",fit_hint:"Bring the whole floor plan of the floor into view (with the garden when outside)",room:"Room",rooms:"Rooms",room_name:"Name",room_id:"ID (card option room:)",room_openings:"Doors and windows",items_list:"Items",item_hide:"Hide in the plan",item_show:"Show in the plan again",hint_place:"Click the plan to place {name} there \xB7 Shift: place more \xB7 Alt: off the grid \xB7 Esc cancels",place_armed:"{name}: click the plan where it should go.",place_middle:"Place in the middle",place_middle_room:"Place in the middle of {room}",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",tech_open:"Draw the technical room",tech_open_hint:"Then tap the wall in the plan your equipment hangs on.",tech_step:"Step {n}",tech_step_feed:'Tap "{name}" on the left, then the spot on the wall where the line comes in (right at the bottom: out of the floor).',tech_step_devices:"Tap the filter pump and the sand filter on the left \u2013 they stand at the wall. The heat pump and dosing unit if you have them.",tech_step_line:'Draw a line: from "{a}" to "{b}". Just press on the one and drag to the other.',tech_step_loose:"A pipe still ends loose \u2013 draw it on to a device or a line, or delete it (\u270B Select).",tech_step_drawing:"Drag on or tap point by point \u2013 the line ends on a device, a line or a pipe.",tech_step_fit:"Tap the pipe the valve (sight glass) goes into \u2013 it lights up orange.",tech_mode:"Pool equipment",tech_mode_hint:"Draw the technical room on this wall: bring the pool's lines in, put the devices up, draw the pipes",tech_draw:"Draw",tech_ask:"Pipe laid \u2013 on to the pool? Then a hole with the way outside goes here:",tech_ask_loose:"Leave it open",tech_step_tee:"Tap the pipe where the branch goes \u2013 it is cut there, and from the T-piece you draw the next line.",tech_pick:"Select",pool_delete_confirm:"Delete the pool with all {n} pipes?",tech_erase:"Erase",tech_erase_hint:"Tap a pipe, ball valve, sight glass or hole \u2013 it is removed. Drew it wrong? Undo helps too.",tech_feeds:"Lines from the pool",tech_devices:"Devices",tech_fittings:"Fittings",tech_hint:"Like a pen: press on a device and draw the line \u2013 wiggles go, the pipes run level and upright. A stroke ending on a device or pipe joins there; one ending on nothing is asked where it goes (skimmer, bottom drain, inlets, waste) and Home 3D lays the hole and the way outside itself.",tech_no_ports:"First put the skimmer, bottom drain and inlets at the pool with the pool tool.",tech_ok:"All connected \u2013 the water flows.",tech_issue_loose:"{n} loose pipe ends",tech_issue_port:"{name} not connected",tech_issue_feed:"{name} not brought in yet",tech_feed_place:"Tap where the line comes into the room \u2013 right at the bottom: out of the floor, higher up: through the wall.",tech_start:"Tap a device or a line and draw a line.",feed_skimmer:"Skimmer",feed_drain:"Bottom drain",feed_inlet:"Inlets",feed_waste:"Waste drain (backwash)",hp_ports:"Connections",hp_side_right:"right",hp_side_left:"left",hp_side_back:"back",pool_depth:"Basin depth (m)",pool_rim:"Rim above the lawn (m)",pool_depth_hint:"Basin depth: from the rim down to the floor. A 1.50 m deep pool standing 20 cm out of the lawn: depth 1.50, rim 0.20. The water stands 15 cm below the rim.",pool_depth_ground:"The depth shows in 3D once the pool lies in a lawn, terrace or other area \u2013 without ground around it the basin would show from outside.",pool_port_depth:"Depth",pool_port_depth_hint:"How far below the water line (m): inlets usually 0.30, the skimmer at the water line",block_some_fixed:"\u{1F512} A part of it is fixed \u2013 the block moves once all parts are released.",unfix_all:"Release all",wv_block_all:"Whole block",wv_block_one:"This part only",wv_gap:"Gap: {w} \u2013 this fits in:",wv_gap_hint:"Tap a free spot on the wall: what fits there appears here.",wv_kit_title:"Onto the wall",wv_recent:"Recently used",wv_none_fits:"Nothing fits into this gap.",wv_cat_base:"Base cabinets & boards",wv_cat_hang:"Hanging",wv_cat_tall:"Tall cabinets",wv_cat_living:"Seating & beds",wv_cat_light:"Lights",wv_cat_pack:"From your packs",wv_cat_energy:"Energy",block_title:"Furniture block",multi_title:"{n} items selected",block_hint:"A click selects the whole block, dragging moves it. One part on its own: double-tap it or pick its name below.",multi_hint:"Shift + click adds or removes items, Shift + drag over empty ground draws a frame. Move, turn or copy them together, or join them into a block.",block_part_edit:"Edit only this part",block_break:"Break up block",block_make:"Join into a block",multi_mode:"Select several (a tap adds, a drag draws a frame)",block_part:"Part of a block.",block_select:"Select the whole block",block_delete:"Delete {n} items?",block_delete_fixed:"Delete {n} items? Some of them are fixed.",delete:"Delete",new_room:"Room {n}",settings:"Settings",side_resize:"Drag the side bar wider or narrower",furn_extra:"Extra value at the symbol (sensor, e.g. water temperature)",settings_house:"House",settings_weather:"Weather & warnings",roof_basics:"Roof shape",roof_whole:"Roof (whole building)",roof_whole_hint:"One roof for the whole house, not for one floor.",roof_floor_pick:"Floor shown",roof_floor_pick_hint:"Only picks which floor the plan shows to draw along; the roof is the whole building's",voice_sentences_kept:"You changed the sentence file for {langs} yourself \u2013 Home 3D leaves it alone.",voice_sentences_failed:"The sentence file could not be written.",voice_sentences_file:"Home 3D creates the file custom_sentences/<language>/home_3d.yaml only when you pick sentences here. A file you changed yourself is never overwritten; removing the integration deletes Home 3D's file.",pendant_shape:"Shape",pendant_shade:"Shade",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",help:"Help",help_overlay_title:"Help: keys and plan marks",rack_edit:"Edit rack",rack_front_view:"Front view",rack_used:"{used} of {u}U used",rack_view_close:"Close",rack_unit:"U{n}",rack_at:"At U{u}",rack_up:"One U up",rack_down:"One U down",rack_move:"Move",rack_move_hint:"Tap the lowest U it should go to.",rack_add:"Add gear",rack_add_hint:"Tap the lowest U it should go to.",rack_no_gear:"No rack-mount gear for this rack in the packs.",rack_read_only:"Only editors change what is in the rack.",rack_overlap:"Something is already there.",rack_outside:"It doesn't fit in the rack there.",rack_too_deep:"Too deep for this rack.",rack_wrong_width:"Made for the other rack width.",rack_not_gear:"That isn't rack-mount gear.",rack_full:"No more gear fits in one rack.",rack_missing:"That gear is no longer in the rack.",rack_no_rear:"No rear rails.",rack_no_lane:"No room beside the rails.",rack_no_shelf:"Not on a shelf.",rack_shelf_full:"The shelf is full.",rack_too_tall:"Too tall.",rack_not_loose:"Not for shelves.",rack_totals:"{used}U used \xB7 {free} free",rack_watts_about:"\u2265 {w} W",rack_face_front:"Front",rack_face_rear:"Rear",rack_lane_hint:"Tap a side lane.",rack_full_depth:"full depth",rack_on_shelf:"Put on it",rack_no_loose:"Nothing fits.",rack_width_half:"\xBD",rack_width_third:"\u2153",rack_misfits:"{n} no longer fit:",rack_frame_pick:"Rack frame",rack_status_online:"Online",rack_status_warning:"Warning",rack_status_offline:"Offline",rack_unlinked:"Not linked to Home Assistant",rack_ha_device:"HA device",rack_status_from:"Status from",rack_links:"Linked",rack_link_add:"Add entity",rack_suggested:"From the same device",help_open:"Help and shortcuts (?)",help_shortcuts:"Keyboard shortcuts",help_legend:"Marks on the plan",help_key_undo:"Undo",help_key_redo:"Redo",help_key_duplicate:"Duplicate the selection (an item, else the room)",help_key_delete:"Delete the selection",help_key_nudge:"Nudge the selection one grid step (Shift 10 cm, Alt 1 cm)",help_key_rotate:"Turn an item 90\xB0 (Shift: the other way)",help_key_lock:"Fix or free an item or device",help_key_multi:"Select several items",help_key_pick_through:"Click without moving: pick the next item in the stack below (Alt-drag moves the selected one freely)",help_key_close_shape:"Close the shape while drawing (Backspace removes the last corner)",help_key_escape:"Cancel, back to Select, clear the selection",help_key_snap:"While dragging: Shift keeps a line straight, Alt drags without snapping",help_key_help:"Show or hide this help",help_legend_swing:"Orange dashed arc: where a door swings open. Shown only for the selected door.",help_legend_track:"Orange dashed lines at a garage door: its tracks under the ceiling (selected only).",help_legend_guide:"Pink dashed line: lined up with a corner while drawing or dragging",help_legend_snap:"Pink circle: the point snaps here",help_legend_ghost:"Grey dashed outlines: the rooms of the floor below",help_legend_selected:"Light blue: what is selected",ask_ok:"OK",backup:"Backup",editors_title:"Editors",editors_hint:"Who may change the plan. Everyone else sees the house and controls devices, without the editor. Until you pick, every admin is an editor.",editors_admin:"admin",editors_reset:"Back to: every admin",tablet_users:"Wall tablet (locked view)",tablet_users_hint:"Ticked users see only the home name, the floors and the View menu: no editor, no view settings. A single device works with ?tablet in the address too; ?tablet=0 switches it off there again.",tablet_idle:"Back to the whole house after (s, 0 = never)",editors_no_admin:"At least one admin must stay an editor.",editors_failed:"The editors could not be saved.",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no Home 3D plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again.",backup_admin_only:"Only a Home Assistant administrator can import a backup or restore an earlier version: it replaces the whole plan, actions included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full Home 3D backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (not verifiable or bound to another installation): {packs}.",export_name_full:"full",item_actions:"Own actions",item_actions_hint:'What a tap, a hold and a double tap do in 3D. "Default" keeps the usual behaviour for this kind of device. Everything runs through Home Assistant; anyone who can see the view can use them.',item_action_perform_admin:"Only a Home Assistant administrator can add or change a perform action. You can replace one with another action.",item_gesture_tap:"Tap",item_gesture_hold:"Hold",item_gesture_double_tap:"Double tap",item_action_default:"Default",item_action_none:"Nothing",item_action_toggle:"Toggle",item_action_more_info:"Open details",item_action_camera:"Open camera",item_action_navigate:"Open a dashboard page",item_action_url:"Open an address",item_action_perform_action:"Perform an action",item_target_toggle:"Entity (empty = its own)",item_target_more_info:"Entity (empty = its own)",item_target_camera:"Camera (empty = its own)",item_target_navigate:"Path",item_target_url:"Address",item_target_perform_action:"Action (domain.service)",item_action_confirm:"Ask first",item_action_confirm_text:"Question",item_action_confirm_placeholder:"Are you sure?",action_confirm_title:"Confirm",action_confirm_ok:"Do it",action_confirm_default:"{name}: are you sure?",action_this_item:"This item",action_failed:"The action failed: {error}",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Start here: add your first floor with the Floor menu at the top left.",hint_first_room:"Next: draw your first room \u2013 Build \u203A Room, then drag a rectangle on the plan",hint_sel_furniture:"Drag to move \xB7 corners resize \xB7 R turns \xB7 L fixes \xB7 Del deletes \xB7 Esc deselects",hint_sel_opening:"Drag along the wall to move it \xB7 arrow keys nudge \xB7 kind and size are on the right \xB7 Del deletes",hint_sel_device:"Drag to move the device \xB7 arrow keys nudge \xB7 L fixes \xB7 Del deletes",hint_help:"Help",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"Home 3D",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_busy_solar:"solar modules",stats_busy_sound:"music",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_blend:"Blend",through_back:"Back to the view",through_full:"Full screen",through_full_hint:"The camera picture on the whole screen (Esc or Back ends it). Where the browser cannot do this, Home Assistant's camera view opens \u2013 with sound there too.",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_model:"Camera model",camera_model_hint:"The real shape of the camera in 3D (looks only: the live view, the cone and the actions stay). Domes and turrets hang from the ceiling, the others sit on a wall.",camera_model_found:"{name} (as the device reports)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"Detection (camera cockpit): {n} sensors found on the device \u2013 {kinds}. When one reports something, a pin stands in front of the camera in the 3D view; the camera wall (Cameras switch at the bottom of the 3D view) shows every live picture.",camera_detect_none:"Detection (camera cockpit): the camera's device has no motion or detection sensors. Pins appear as soon as the integration provides some (Frigate, UniFi Protect, Reolink \u2026).",camera_detect_choose:"Choose the detection sensors yourself",camera_detect_choose_hint:"Only the ticked sensors count for pins, the motion trail and the live director \u2013 sensors of another device too, e.g. Frigate's person sensor for a Reolink camera. Without the tick Home 3D takes every sensor on the camera's device.",camera_detect_add:"Add a sensor",camera_cone:"Show the field of view in 3D",camera_detect_pins:"Show detection symbols (person, car, animal)",camera_detect_pins_hint:"Off: a detection shows no symbols over the camera, only the field of view turns red \u2013 calmer on a wall tablet.",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View settings: quality, look, lighting, markers, size",view_btn:"View",view_group_lighting:"Lighting",view_group_size:"Size",view_group_controls:"Controls",follow_ha:"Follow Home Assistant",follow_sun:"By the sun",follow_now:"now {look}",sun_and_lights:"Sun and lights \u2026",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',view_settings:"Settings",view_settings_admin:"Only administrators can change these settings \u2013 they apply to the whole house.",view_settings_look:"Look",view_settings_alerts:"Warnings",view_settings_more:"Every other setting is in the editor under \u2699 Settings.",lines_add:"Add",lines_new:"New entry \u2026",sheet_mic:"Speak",sheet_listening:"Listening \u2026",sheet_mic_failed:"Nothing understood \u2013 the microphone needs HTTPS and a voice pipeline with speech-to-text.",card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m}. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where Car Pro is set up (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back. A camera keeps its pin with all its camera settings; the model only joins it.",as_furniture_pick:"Pick furniture \u2026",camera_look_builtin:"Built-in camera model",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound & Cinema)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",media_play_head:"Play",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",wall_view:"Wall view",walk_start:"Walk through the house",walk_title:"Walk",walk_end:"End",walk_hint:"Drag: look around \xB7 tap the floor: walk there \xB7 W A S D / arrow keys or the stick: walk \xB7 Esc: end",card_next:"next step \u2026",card_step_hole:"Through a hole",card_step_fit:"Put in",card_step_end:"Or to its end",card_lay:"Lay it",card_hole_out:"outwards",card_hole_in:"inwards",card_to:"Connect to",card_through:"Through (in order, if needed)",card_group_pool:"At the pool",card_group_tech:"Equipment",card_group_joints:"T- and Y-pieces",card_group_holes:"Holes",card_open:"Connections",card_open_other:"Open this part's card",card_port:"Connection",card_via:"through",card_reroute:"Lay anew",card_disconnect:"Disconnect",card_with:"connect to \u2026",card_connect:"Connect",card_connect_with:"Connect to \u2026",card_status:"{a} of {b} connected",card_show_plan:"Show in the plan",card_show_wall:"Show in the wall view",joint_name:"Name (say hole skimmer)",conn_hole_out:"{name}: from inside out",conn_hole_in:"{name}: from outside in",hint_joint_place:"T- or Y-piece: tap the plan \u2013 tapped on a pipe, it is put into the pipe",port_suction:"suction side",port_pressure:"pressure side",port_pump:"from the pump",port_return:"return",port_waste:"waste",port_in:"in",port_out:"out",port_out1:"out 1",port_out2:"out 2",port_inside:"inside",port_outside:"outside",port_used:"in use",joint_tee:"T-piece {n}",joint_y:"Y-piece {n}",joint_wall:"Hole {n} (wall)",joint_floor:"Hole {n} (floor)",joint_add_tee:"T-piece",joint_add_y:"Y-piece",wall_kit_hole_wall:"Hole in the wall",wall_kit_hole_floor:"Hole in the floor",wall_kit_tee:"T-piece",wall_kit_y:"Y-piece",wall_run_place:"Tap the wall where it goes",valve_top6:"Six-way valve on top",valve_side6:"Six-way valve at the side",valve_four:"Four-way valve",pool_valve_type:"Multiport valve",pool_loose_end:"open end",pool_holes_hint:"Holes in walls and the floor are set in the wall view (side bar).",conn_add:"Add a pipe",conn_from:"From",conn_via:"Through (in order)",conn_add_via:"+ hole, ball valve, sight glass \u2026",conn_to:"To",conn_and:"And to (a second end, with a T-piece before)",conn_choose:"choose \u2026",conn_create:"Lay it",conn_hint:"The way is laid by itself \u2013 inside from connection to connection, outside at right angles under the ground. Fine-tune it in the wall view and the plan.",wall_kit_pool:"Pool equipment",wall_kit_energy:"Energy",wall_run_add:"+ Pipe",wall_run_start:"Pipe: start at a device, on a pipe (T-piece) or on the wall",wall_run_next:"Set more points \u2013 it ends at a device or on a pipe; double click or Enter finishes",wall_run_down:"\u2193 Into the floor",wall_run_through:"\u27C2 Through the wall",wall_run_done:"Done",wall_run_fit:"Tap the pipe where it goes",wall_run_valve:"Ball valve",wall_run_sight:"Sight glass",wall_run_pipe:"Pipe",wall_run_pt:"Height of the point (m)",wall_run_more:"Draw on",wall_run_tip:"Drag points \xB7 double click removes \xB7 tap a ball valve: open/closed",wall_view_turn:"Turn by 45\xB0 \u2013 at the wall it moves back into the room",wall_view_fixed:"Fixed \u2013 release it to drag",wall_view_3d:"3D in the room",wall_view_lift:"Drag up or down: height above the floor",wall_zoom_hint:"Zoom: mouse wheel or two fingers",wall_zoom_all:"Whole wall",wall_view_hint_3d:"Tap a piece and drag it on the floor \xB7 mouse wheel or two fingers: closer or further away \xB7 middle or right mouse button (two fingers on a tablet): look around \xB7 type distances and height below \xB7 arrows left and right: to the next wall",wall_view_front:"Wall from the front",wall_view_depth:"Distance from the wall (m)",wall_view_room:"See this room's walls from the front",hint_wall_pick:"Wall view: click into the room (or near a wall)",wall_view_open:"See the wall from the front: move the furniture on it along the wall and up or down",wall_view_hint:"Drag to move along the wall and \u2013 for hanging pieces \u2013 up or down \xB7 arrow keys 1 cm, with Shift 10 cm \xB7 edges snap to the wall's ends, doors, windows and other furniture (Alt: free) \xB7 double-click opens the piece in the plan",wall_view_empty:"Nothing at this wall yet \u2013 furniture standing with its back to the wall or hanging on it shows here.",wall_view_left:"Distance from the left (m)",wall_view_floor:"stands on the floor",wall_view_form:"Edit in the plan",wall_prev:"Previous wall",wall_next:"Next wall",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",director:"Live director",director_hint:"A screen shows by itself what happens in the house: the doorbell rings \u2013 the view flies to the front door and looks through its camera. Every event is off until you switch it on.",director_here:"Switch on on this device",director_here_hint:"Only for this browser, e.g. the wall tablet. On a dashboard card you switch the live director on in the card settings.",director_doorbell:"Doorbell rings: fly to the door and look through the camera",director_doorbell_entity:"Doorbell",director_doorbell_camera:"Camera at the door",director_no_doorbell:"No doorbell found. Choose your doorbell's event or binary sensor entity.",director_motion:"A camera sees someone",director_motion_off:"Off",director_motion_person:"People only",director_motion_all:"Any motion",director_appliances:"Washer, dryer or dishwasher finished",director_alerts:"New warning (smoke, water, alarm, window in the rain \u2026)",director_hold:"Back after (seconds)",director_back_hint:"Then the view goes back to where it was \u2013 unless someone touched the screen meanwhile. Someone using the tablet is only interrupted by the doorbell and by warnings. The doorbell stays twice as long.",voice:"Voice control",voice_hint:"A microphone button at the bottom left of the 3D view: tap it and speak. \u201CShow the living room\u201D, \u201Cupper floor\u201D or \u201Cthe whole house\u201D shows the place; anything else (\u201Cturn on the hall light\u201D) goes to Home Assistant's Assist.",voice_here:"Switch on on this device",aliases:"Further names for the voice",aliases_hint:'Further names, comma separated \u2013 so you ask for the "Smart TV Pro" as "living room TV" or "telly". Used by voice control and the search.',aliases_placeholder:"e.g. living room TV, telly",voice_understands:"What Home 3D understands",voice_examples:"\u201CShow the living room\u201D|\u201CGo to the upper floor\u201D|\u201CShow the whole house\u201D|\u201CShow the washing machine\u201D / \u201CWhere is the dryer?\u201D|\u201CShow the front door camera\u201D / \u201CShow the driveway camera\u201D|\u201CShow the cameras\u201D|Anything else (\u201Cturn on the hall light\u201D) goes to Assist",voice_needs:"Needs https, the microphone allowed (in Fully Kiosk: Web Content Settings \u2192 microphone access) and an Assist pipeline with speech to text. On a dashboard card you switch the button on in the card settings.",voice_showing:"Showing {name}.",voice_rack_hot:"{name}: {gear} is the hottest at {value}.",voice_rack_value:"{gear}: {what} {value}.",voice_rack_online:"{name}: {on} of {total} devices are online.",voice_rack_summary:"{name}: {list}.",voice_rack_missing:"{name} has no {what} linked.",voice_rack_unavailable:"{what} of {gear} is not available right now.",voice_rack_nothing:"{name} has nothing linked to Home Assistant.",screen_name:"Screen name (for Assist)",screen_name_placeholder:"e.g. Kitchen",screen_name_hint:'Asking Assist ("Show the living room") or an automation calling the service home_3d.ask reaches every open Home 3D view. When the service names a screen, only the view with that name reacts.',voice_button:"Speak",voice_listen:"Listening \u2026",voice_none:"Nothing understood",voice_silent:"The microphone gives only silence. Usually another app holds it \u2013 in Fully Kiosk switch off the acoustic motion detection (Motion Detection \u2192 Acoustic Detection) and reload.",voice_no_pipeline:"No speech to text set up in Assist (Settings \u2192 Voice assistants).",voice_denied:"Microphone not allowed \u2013 only over https and with the permission in the browser or in Fully Kiosk.",voice_error:"Voice control: {msg}",card_voice:"Voice control (microphone button)",card_voice_hint:"\u201CShow the living room\u201D shows the room, other sentences go to Assist. Needs https and an allowed microphone",director_mic_test:"\u{1F399}\uFE0F Test the microphone",director_mic_hint:"Checks https, the microphone and Assist's speech to text on this device and shows which room a sentence would open. Nothing is switched.",voice_pipeline:"Assist pipeline on this device",voice_sentences:"Sentences for Assist",voice_sentences_distinct:'Only distinct ones ("Show \u2026", "Ask the house \u2026", "Home 3D, \u2026")',voice_sentences_all:"All questions (also takes sentences Home Assistant answers itself)",voice_sentences_off:"None (default \u2013 no sentence file)",voice_sentences_hint:'What Assist hands to Home 3D. Questions like "Which windows are open?" are otherwise answered by Home Assistant itself \u2013 "Ask the house which windows are open" always reaches Home 3D.',voice_pipeline_preferred:"Preferred one in Home Assistant",voice_pipeline_no_stt:"no speech to text",backdrop:"Background",backdrop_kind:"Behind the house",backdrop_look:"The look's sky (default)",backdrop_color:"One colour",backdrop_gradient:"Gradient",backdrop_image:"Picture",backdrop_top:"Colour at the top",backdrop_bottom:"Colour at the bottom",backdrop_image_url:"Picture address",backdrop_dim:"Darken",backdrop_image_bad:"This address does not work: https://\u2026 or a path like /local/background.jpg",backdrop_hint:"Put the picture into config/www in Home Assistant, then it is /local/filename.jpg. Darkening keeps the neon lines readable. Costs no performance \u2013 old tablets too.",director_live:"Live picture when looking through",director_live_hint:"Instead of a still every few seconds the camera's video runs (through Home Assistant's player). Needs more power \u2013 better leave it off on very old tablets.",director_triggers:"Own triggers",director_triggers_hint:"When one of these entities goes on or open \u2013 a second doorbell, the garage door, the garden gate \u2013 the view flies there and looks through the camera chosen (without one: to the device).",director_trigger_entity:"Trigger",director_trigger_add:"+ Add a trigger",card_director:"Live director (Camera Cockpit)",card_director_hint:"The card shows by itself what happens. Which events, you choose in the editor under \u201CLive director\u201D.",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture (Pro: camera cockpit).",card_motion_trail_hint:"Where motion was reported in the last 30 minutes, with times (motion, presence and camera sensors)",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"Camera wall: every live picture at once; a tap shows one picture big, a red frame shows motion",camera_wall_all:"All cameras",camera_still:"still, refreshed every {s} s",camera_wall_big:"Show the picture big",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",rain_entity:"Rain from your own weather station",rain_entity_hint:"A rain sensor (on = rain) or a rain rate (mm/h) of your weather station says whether it rains at the house \u2013 for the rain warning and the rain in 3D. Without one the weather entity decides.",rain_ignore:"No rain warning",rain_ignore_hint:"This window may stay open in the rain (under a canopy, say): no rain warning for this window, all others still warn.",outage_entity:"Report a power outage with",outage_entity_hint:'An entity that reports a power outage: a grid sensor (binary_sensor of class power \u2013 "off" means no power), a UPS ("on battery"), a mains voltage below 100 V or a helper of your own that is "on" during an outage. A warning then shows, and the grid connection is crossed out.',sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",sun_shadow:"Sun arc and house shadow",sun_shadow_hint:`An arc over the house shows the sun's way today with sunrise and sunset, and the house's shadow lies on the ground and moves with the sun. Needs the north direction; on the "Tablet" level only the arc.`,window_glow:"Windows glow outside at night",window_glow_hint:"When it is dark outside, the light of lit rooms falls out of the windows as a warm glow onto the lawn and terrace in front \u2013 in the room's light colour, fainter behind lowered blinds.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"The weather entity provides rain, snow, fog and clouds for the 3D view; automatic takes the first one.",weather_hint:"Weather outside: rain, snow, fog and clouds from the weather entity, sun and moon from sun.sun",card_weather:"Weather outside",card_weather_hint:"Rain, snow, fog and clouds from the first weather entity (weather_entity picks another); only the clouds on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",alert_power_outage:"Power outage: {name}",alert_contact_unavailable:"Contact unavailable: {name}",alert_short_contact_unavailable:"Contact unavailable",alert_unavailable:"Warn when a window or door contact is unavailable",alert_unavailable_hint:'When a contact has been "unavailable" for 10 minutes (empty battery, out of radio reach), the window looks shut in 3D although nobody knows. Then a warning shows.',effects:"Live effects",effects_hint:"A wet leak sensor turns its room's floor red until it is dry; motion lights the room briefly; radiators and hot-water cylinders shade from cold blue to warm red.",effects_motion_seconds:"Motion lights a room for (s, 0 = off)",effects_radiator_cold:"Radiator fully blue at",effects_radiator_hot:"Radiator fully red at",effects_tank_cold:"Cylinder fully blue at",effects_tank_hot:"Cylinder fully red at",room_live:"Leaks and motion",room_live_leak:"Leak sensor",room_live_motion:"Motion sensor",room_live_hint:"Automatic: every one of the room's area and those placed in the room. A wet leak sensor turns the floor red, motion lights the room briefly.",temp_sensor:"Temperature (shading)",temp_sensor_hint:"The item shades from cold blue to warm red with this temperature. Automatic: a temperature sensor at its symbol, its water heater, or its thermostat's own sensor.",alert_names:"Show device names in warnings",alert_names_hint:'On: "Kitchen \xB7 Smoke: Kitchen smoke detector". Off: just "Kitchen \xB7 Smoke" \u2013 shorter on a wall tablet. Without a room the device name stays.',alert_short_smoke:"Smoke",alert_short_gas:"Gas",alert_short_co:"Carbon monoxide",alert_short_water:"Water",alert_short_alarm:"Alarm triggered",alert_short_alarm_pending:"Alarm about to trigger",alert_short_window_rain:"Window open in the rain",alert_short_power_outage:"Power outage",power_outage:"Power outage",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no Home 3D plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_view:"2D/3D",card_view:"Starts as",card_view_3d:"3D view",card_view_2d:"2D plan (view only)",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_pets:"Show the pets",card_ghost:"Show the Halloween ghost",card_ghost_hint:"Fun pack Halloween: the ghost floats through this card's house too (e.g. switch it off on the wall tablet)",card_pets_hint:"Fun pack Pets: show the animals set up in this card (e.g. switch them off on the wall tablet)",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_home:"Home",card_home_active:"The active home",home:"Home",home_show:"Make this the home shown on displays",home_new:"\uFF0B New home \u2026",home_new_name:"New home",home_sample:"Load the sample home",home_rename:"Rename \u2026",home_duplicate:"Duplicate \u2026",home_delete:"Delete \u2026",home_name_prompt:"Name of the home",home_copy_name:"{name} (copy)",home_delete_confirm:'Delete "{name}" with its plan, restore points and pictures? This cannot be undone.',home_failed:"That did not work: {error}",demo_states:"Demo states",demo_states_hint:"Linked devices this Home Assistant does not have show fixed states (some lights on, heating on, solar producing). Real entities always win.",demo_chip:"Demo",demo_hint:"Sample home: devices this Home Assistant does not have show fixed demo states. Link them to real entities in the editor.",home_active_badge:"Active on displays",home_not_on_displays:"not shown on displays",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Holograms",holos_hint:"Show or hide the holograms of the plant and the devices",card_energy:"Show energy values at the top (Energy Pro)",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof:"Show the roof",card_roof_hint:"Off: the house shows without its roof, as if it had none \u2013 the rooms lie open (solar fields on the roof go with it)",room_order_up:"Move the room up (earlier in the room bar)",room_order_down:"Move the room down (later in the room bar)",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",ext_show_list:"Show the list",ext_hide_list:"Fold the list",ext_sum_packs:"furniture packs ({items} items)",own_items_title:"Your own items",own_items_hint:"Build your own furniture from simple shapes. It stays in Home Assistant and everyone in the home finds it in the library. So far: {n}.",own_items_open:"Open the item editor",packs_hint:"A furniture pack is a folder with a pack.json and one JSON file per item (see docs/packs.md); every file is checked on import. To install from GitHub, paste the URL of the repository or of the pack folder in it. Old single-file packs still import.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",license_copy:"Copy",pack_import:"Import pack files \u2026",pack_import_folder:"Import a pack folder \u2026",pack_licence:"Licence: {licence}",pack_install_url:"Install from GitHub",pack_installing:"Installing \u2026",pack_from:"From",upd_title:"Pack updates",upd_intro:"Packs installed from GitHub are checked for new releases. A new release goes into the library; placed items keep their look until you update them.",upd_auto:"Update placed items automatically when a new release arrives",upd_frequency:"Check for new releases",upd_freq_off:"Never (only by hand)",upd_freq_daily:"Daily",upd_freq_weekly:"Weekly",upd_freq_monthly:"Monthly (on the 1st)",upd_time:"Time",upd_weekday:"Day",upd_day_0:"Monday",upd_day_1:"Tuesday",upd_day_2:"Wednesday",upd_day_3:"Thursday",upd_day_4:"Friday",upd_day_5:"Saturday",upd_day_6:"Sunday",upd_check_now:"Check now",upd_checking:"Checking \u2026",upd_last_check:"Last checked: {time}",upd_next_check:"Next check: {time}",upd_checked:"Checked \u2013 new releases: {n}",upd_none:"All placed items are up to date.",upd_item:"Release {from} \u2192 {to} \xB7 placed {n}\xD7",upd_update:"Update",upd_update_all:"Update all ({n})",upd_sum_updates:"with an update",upd_sum_pinned:"pinned",upd_pinned:"Pack pinned",pack_pin:"Pin release",pack_rollback:"Roll back to v{release}",pack_rollback_confirm:"Roll \u201C{name}\u201D back to v{release}? Placed items that took the last update go back too; the pack is pinned.",pack_latest:"Last check: v{release} on GitHub",pack_check_error:"Check failed: {detail}",pack_confirm_older_release:"{detail}. Install it anyway?",pack_confirm_pinned:"{detail}. Install this release anyway? The pack stays pinned.",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",pack_features:"by {publisher} \xB7 Pro features: {n}",pack_needs_update:"This add-on needs a newer Home 3D version \u2013 please update Home 3D (HACS) and reload the page.",pro_title:"Not available",pro_feature_camera_cockpit:"Camera cockpit: look through the camera, motion trail, camera wall and detection pins (person, vehicle, animal)",pro_name_camera_cockpit:"Camera cockpit",pro_name_weather:"Weather outside",pro_name_screens:"Live screens",pro_name_energy_pro:"Energy Pro",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"The built-in features of Home 3D, the fun extras and your furniture packs. Everything runs locally in Home Assistant.",ext_pro:"Built-in features",fun_title:"Fun packs",fun_intro:"Extras just for fun \u2013 switch them on and off here.",fun_name_pets:"Pets",fun_feature_pets:"A cat, a dog or a rabbit lives in your 3D house: it walks through the rooms, lies down on the sofa, the bed or the rug and sleeps at night.",fun_name_halloween:"Halloween",fun_feature_halloween:"Pumpkins that glow with a light, a cobweb, bats, gravestones, a skeleton, a witch's cauldron and candles \u2013 and a ghost that floats through the house now and then.",halloween_ghost:"Let the ghost float",halloween_deco_hint:`The decorations are in the editor's furniture library under "Fun pack: Halloween". Pumpkin, cauldron and candles glow with a linked light.`,pets_show:"Show the pets",pet_add:"Add a pet",pet_name:"Name",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Cat",pet_kind_dog:"\u{1F436} Dog",pet_kind_rabbit:"\u{1F430} Rabbit",pet_fur:"Fur",pet_fur_orange:"Ginger",pet_fur_tabby:"Tabby",pet_fur_black:"Black",pet_fur_white:"White",pet_fur_grey:"Grey",pet_fur_brown:"Brown",pet_fur_calico:"Calico",pet_fur_golden:"Golden",pet_fur_cream:"Cream",pet_fur_dilute_calico:"Dilute calico",pet_fur_blue_grey:"Blue-grey",pet_eyes:"Eyes",pet_eyes_dark:"Dark eyes",pet_eyes_copper:"Copper eyes",pet_eyes_green:"Green eyes",pet_eyes_yellow:"Yellow eyes",pet_eyes_blue:"Blue eyes",pet_breed:"Breed",pet_breed_dachshund:"Dachshund",pet_breed_pug:"Pug",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Shepherd",pet_floor:"Floor",pet_floor_auto:"Ground floor",pet_mode:"Behaviour",pet_roaming:"Roams the house",pet_static:"Stays at its spot",pet_pose:"Pose",pet_pose_sit:"Sitting",pet_pose_lie:"Lying",pet_pose_curl:"Curled up",pet_turn:"Facing",pet_turn_auto:"Automatic",pet_static_hint:"Drag it to its spot in the plan editor.",ext_active:"active",ext_open:"Open extensions",manual:"Manual",ext_teaser_title:"More furniture and Pro features",ext_teaser_text:'Furniture packs and the built-in features are under "Extensions" at the top.',pro_feature_weather:"Weather outside: rain, snow, clouds, sun and moon",pro_feature_screens:"Live screens: the media player's app colour and artwork, picture rules, camera live pictures on screens",pro_feature_energy_pro:"Energy Pro: power-flow lines through the house, living solar modules, glass holograms for the plant and for devices, today's gas and water use \u2013 heat follows as an update",pro_name_sound:"Sound & Cinema",pro_feature_sound:"Sound & Cinema: speakers show cover, title and volume as a glass card, sound rings around playing speakers, multiroom groups as lines, a quick menu with play, pause, track change and volume",pro_name_auto_pro:"Car Pro",pro_feature_auto_pro:'Car Pro: the car in its parking spot shows charge, range, charging, lock and climate from its integration \u2013 a light band in the charge colour, a pin with percent and kilometres, a quick menu with lock, climate and charging, "away" with its location',pro_name_time_travel:"Time travel",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro (module): the water glows in the colour of the pool light and moves while the filter pump runs; the glass card shows water temperature, heat pump with target, pH, chlorine/redox and salt with a traffic light; the cover slides over the water; warnings for pH, chlorine, salt and frost; the pool plant sets itself up at a tap and the water flows visibly through the pipes",pool_pump:"Filter pump",pool_ph:"pH value",pool_shape:"Shape",pool_shape_rect:"Rectangular",pool_shape_round:"Round",pool_shape_oval:"Oval",pool_diameter:"Diameter (m)",pool_shape_free:"Free",tool_pool:"Pool",hint_pool:"Choose a shape and draw the pool \xB7 tap a pool to select it",hint_pool_tech:"Choose a shape and draw the pool \xB7 tap a pool to select it \xB7 ports, devices and pipes on the right",hint_pipe_start:"Pipe: tap the start (port or device)",hint_pipe_pool:"Pipe: first tap the pool the pipes belong to",hint_pipe_next:"Tap corners, then the end (port or device) \xB7 Esc cancels",pool_tool_empty:"No pool on this floor yet: choose the shape above and draw the pool.",pool_choose:"Which pool?",pool_ports:"Ports",pool_ports_hint:"Skimmer and inlets sit on the rim, the bottom drain in the pool; the waste drain takes the backwash water. Move them in the plan.",pool_port_skimmer:"Skimmer",pool_port_drain:"Bottom drain",pool_port_inlet:"Inlet",pool_port_waste:"Waste drain",pool_devices:"Equipment",furn_pool_pump:"Filter pump",furn_pool_filter:"Sand filter",furn_pool_heat_pump:"Heat pump",furn_pool_dosing:"Dosing unit",furn_pool_valve:"Ball valve",pool_valve_position:"Six-way valve position",valve_filter:"Filter",valve_backwash:"Backwash",valve_rinse:"Rinse",valve_waste:"Waste",valve_recirculate:"Recirculate",valve_closed:"Closed",pool_valve_open:"open",pool_pipes:"Pipes",pool_pipe_draw:"Draw a pipe",pool_pipe_draw_hint:"Pipes connect ports and devices in the flow direction: from the skimmer to the pump, on to the filter, through the heat pump or the bypass to the inlets. At a split the water goes through the heat pump while it is on, else through the bypass; a closed ball valve stops it. Tap a ball valve in the plan to open or close it.",pool_pipe_height:"Height above the floor (m)",pool_pipe_reverse:"Reverse the flow direction",pool_above:"Above-ground pool (stands on the ground)",pool_above_hint:"A pool standing on the ground instead of let into it: a wall all around, the water just below the rim.",pool_height:"Pool height",pro_feature_time_travel:"Time travel: a time slider replays up to 7 days in the house \u2013 lights, doors, windows, blinds, motion, heating, weather and the sun, with event markers. View only, nothing is switched",tt_chip:"Time travel",tt_hint:"Replay up to 7 days in the house (view only, nothing is switched)",tt_badge:"TIME TRAVEL",tt_live:"Live",tt_live_hint:"Back to the present",tt_play:"Play",tt_pause:"Pause",tt_prev:"Previous event",tt_next:"Next event",tt_speed:"Speed: 1 hour in {s}",tt_now:"now",tt_ago:"{d} ago",tt_since:"since {time}",tt_loading:"Loading history \u2026",tt_error:"History not loaded: {error}",tt_retry:"Retry",tt_no_recorder:"Without Home Assistant's recorder there is no history.",tt_restart:"Please restart Home Assistant \u2013 only then does it know time travel.",tt_locked:"Time travel is not available.",tt_readonly:"Time travel: view only \u2013 nothing is switched",tt_ev_door:"{name} opened",tt_ev_garage:"{name} opened",tt_ev_lock:"{name} unlocked",tt_ev_alarm:"Alarm: {name}",tt_ev_smoke:"Smoke: {name}",tt_ev_outage:"Power outage",tt_ev_camera:"Camera detects motion: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Carbon monoxide: {name}",tt_ev_water:"Water: {name}",tt_ev_rain:"Window open in the rain: {name}",tt_ev_motion:"Motion at night: {name}",tt_ev_washer:"{name} done",tt_ev_robot_start:"{name} starts",tt_ev_robot_done:"{name} done",card_time_travel:'"Time travel" button',card_time_travel_hint:"A button at the bottom of the card replays the last hours and days (Pro: time travel).",car_hint:'One entity of the car is enough: Home 3D finds the others on the same device in Home Assistant (charge, range, charging, cable, lock, climate, location). What it does not find you choose here; "None" switches a role off.',car_device:"Car (any entity of the car)",car_soc:"Charge (%)",car_range:"Range",car_charging:"Charging (power, state or switch)",car_plugged:"Cable plugged in",car_lock:"Lock",car_climate:"Climate / preheating",car_tracker:"Location (device_tracker)",car_away:"away",car_charging_short:"charging",car_lock_btn:"Lock",car_unlock_btn:"Unlock",car_unlock_confirm:"Really unlock the car?",car_climate_on:"Climate on",car_climate_off:"Climate off",car_charge_start:"Start charging",car_charge_stop:"Stop charging",car_no_controls:"No switchable entities found on the car (lock, climate, charge switch).",holo_media_playing:"playing",holo_media_paused:"paused",pro_locked:"This feature is not part of this version.",pack_remove:"Remove",pack_bundled:"Comes with Home 3D",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan and keeps its look.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack: {detail}",pack_error_invalid_content:"The pack contains invalid data: {detail}",pack_error_too_large:"The pack is too large: {detail}",pack_error_too_many_items:"The pack has too many items: {detail}",pack_error_no_licence:"The pack declares no licence: {detail}",pack_error_not_data:"Packs hold data only (no code, pictures or links): {detail}",pack_error_no_pack:"There is no pack.json in this folder.",pack_error_needs_update:'This add-on needs a newer version of Home 3D. Please update first (HACS \u203A Home 3D \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",pack_error_bad_url:"This is not a GitHub URL of a pack: {detail}",pack_error_not_found:"Not found on GitHub: {detail}",pack_error_fetch_failed:"Could not fetch from GitHub: {detail}",back_to_room:"Back to {room}",back_to_library:"Back to the library (add an item)",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide glowing lines from the meter to the consumers",holo_title:"Solar & Energy",holo_live:"live",holo_pv_now:"PV now",holo_today:"Today",holo_peak:"Peak",holo_battery:"Battery",holo_grid:"Grid",holo_house:"House",holo_wallbox:"Wallbox",holo_autarky:"Self-sufficiency now",holo_house_now:"House now",chk_title:"Setup",chk_hint:"What energy and Energy Pro need. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"Exporting right now although there is no PV power: the grid sensor probably counts the other way round.",energy_sign_battery:"The battery charges without sun and without grid import: its sensor probably counts the other way round.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",cables_title:"Cables (Energy Pro)",cables_hint:"Dashed: the cable finds its own way. Grab it in the plan or pick it here and press \u201CLay by hand\u201D: it then runs solid over your points at the set height, e.g. along the facade outside or under the ceiling, and several cables can run side by side.",cable_laid:"laid by hand",cable_lay:"Lay by hand",cable_auto:"Automatic again",cable_height:"Height above the floor (m)",cable_points_hint:"Drag the points in the plan. A click on the cable adds a point, a double click on a point removes it.",cable_other_floor:"This cable is laid on the floor {floor}: switch there to drag its points.",holo_settings:"Hologram (Energy Pro)",holo_settings_hint:"The hologram hangs on a solar field or floats free at a point in the plan; it keeps its size in the world and shrinks as you zoom out. Every further plant gets a card of its own over its field.",holo_field:"On the solar field",holo_field_auto:"Automatic (largest field)",holo_size:"Size (1 = normal)",holo_mirror:"Mirrored from behind (like glass)",holo_device_min_w:"Hide device cards below (W)",holo_device_house:"Device cards in the house view too",holo_device_house_hint:"Off: the cards over devices only show when their floor is open.",holo_plant_floor:"House balance and plant cards in floor views too",room_ceiling:"Ceiling height (m)",units:"Lengths",units_auto:"Automatic ({unit})",units_metric:"Metres",units_imperial:"Feet and inches",units_hint:`How the editor shows and reads lengths. Automatic follows Home Assistant's unit system. The plan always stores metres \u2013 type feet and inches as 8' 2", 98in or 8.2ft.`,room_area_net:"Area {a} \xB7 net {n}",room_area_net_hint:"Net: without the walls reaching into the room \u2013 shared interior walls stand half in the room, free walls and the gap behind a wall built in front of another do not count.",room_ceiling_hint:"Empty = the floor height. With a height of its own the room's walls end there (unless a neighbouring room is taller), and ceiling lamps hang from that ceiling \u2013 e.g. 2.5 m in a living room beside a 5 m garage.",holo_plant_floor_hint:"On: the cards stay visible when a floor is open \u2013 on the floor of their solar field (fields on the roof: the top floor, in the garden: the lowest).",holo_device_room:"Device cards in an opened room",holo_device_room_hint:"On: when you open a room, the cards of the devices in that room show (only that room's).",holo_mirror_hint:"Looking from the back of the solar field, the cards show their back \u2013 mirrored like a pane of glass. Off: they stay readable from everywhere.",holo_right:"Sideways offset (m, + = right)",holo_up:"Upward offset (m, up the slope)",holo_place:"Hangs",holo_place_field:"On a solar field",holo_place_free:"Free in the plan (drag the \u25C8 handle)",holo_free_hint:"A handle \u25C8 stands in the plan \u2013 drag it to where the hologram should float (beside the house too, say over the terrace). The card faces away from the house.",holo_no_field:"No solar field in the plan yet: the hologram floats beside the house.",holo_height:"Height above the ground (m)",furn_plant_card:"Show the plant card (hologram)",furn_plant_card_hint:"Energy Pro: every plant (an inverter with fields of its own) gets a glass card over its field \u2013 power, day curve, battery. Switch it off for this plant here.",flow_on:"on",flow_off:"off",hint_opening:"Tap a wall to add: {kind} (pick the kind on the right) \u2013 tap a door or window to select it, drag to slide it along the wall",hint_opening_add:"Tap to add here: {kind}",hint_opening_select:"Tap to select: {kind}",opening_overlap:"Not added: it would overlap an existing opening ({kind}). Tap that one to select it.",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",style_sectional:"Sectional door",style_up_and_over:"Up-and-over door",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",hint_outdoor_free:"Place the corners of the outdoor area \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",outdoor_shape_rect:"Rectangle",outdoor_shape_free:"Free form",outdoor_draw_type:"Draw:",outdoor_draw_type_hint:"What you draw next: lawn, terrace, path, pool \u2026 The type can still be changed in the form afterwards.",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",out_balcony:"Balcony",balcony_rail:"Railing height",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_area_hint:"With an area the surface acts like a room: a tap in 3D opens it with the area's devices, it is in the room bar and wears its name.",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_end:"End",roof_end_auto:"as the shape",roof_end_gable:"Gable",roof_end_hint:"How the ridge ends at this end: a gable (an upright wall), a hip or a half-hip \u2013 a hip at one end only, for example.",roof_swap:"Swap sides",roof_turn:"Turn",roof_turn_hint:"Turns this roof part in the plan (clockwise), e.g. for a wing at an angle. Dormers and cross gables on it turn along. 0\xB0 = as before.",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",devices_hide_all:"Hide all {n} in the room panel",devices_show_all:"Show all {n} again",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",straighten:"Straighten slanted edges",straighten_hint:"Finds room edges that are only a few centimetres off straight (a corner 1 cm out) and straightens them. Walls drawn slanted on purpose stay.",straighten_done:"{n} almost straight edges straightened.",straighten_none:"No slanted edges found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",controls_side:"Where the floor pictures, star, search and eye sit",controls_left:"Controls on the left",controls_right:"Controls on the right",keep_view:"Keep view",angle_lock:"3D lock",angle_lock_hint:"The angle stays fixed: a drag moves the view, zooming still works \u2013 nobody turns the house by accident.",keep_view_hint:"Switching from floor to floor keeps the camera where it is \u2013 only its height follows.",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",opening_position_from:"Centre from {corner} corner (m)",opening_next_kind:"Next door or window",sill:"Sill height (m)",terrain:"Ground",terrain_hint:"Where the ground lies around the house. What lies below it \u2013 a cellar, the lower part of a semi-basement \u2013 sits in the earth in 3D; lawns, paths and terraces lie on the ground.",terrain_level:"Ground height (m, ground floor = 0)",terrain_earth:"Show cellars in the earth",terrain_earth_hint:"Floors below the ground sit in the earth; open one and you see it as in a building pit. Off: they stand free as before.",terrain_cellar_hint:"Semi-basement: lower the ground height as far as the cellar should show \u2013 e.g. \u22121.2 m. Cellar windows below the ground get a light well.",terrain_no_cellar_hint:"A cellar is a floor with a negative elevation, e.g. \u22122.6 m.",terrain_reset:"Reset the ground",cellar_window:"Cellar window",well:"Light well",well_hint:"This window lies below the ground: in 3D it gets a light well with a grate. Untick for none \u2013 e.g. where a path runs past outside.",well_rim:"Rim above the ground (m)",sill_board:"Sill",sill_board_hint:"Automatic: a window board inside and a sill outside from a sill height of 30 cm; none for a window that sits directly on another one (transom light, split glass front).",sill_board_auto:"automatic",sill_board_none:"none",sill_board_inside:"inside only",sill_board_outside:"outside only",cellar_window_hint:"Small and high up in the wall: 100 \xD7 50 cm, 25 cm under the ceiling. Below the ground it gets a light well with a grate in 3D.",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_angle:"Opening angle",door_angle_hint:"How far the door stands open in 3D: without a sensor always, with one as soon as it reports open. Default: half open without a sensor, fully open with one.",door_angle_default:"Default",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",contact_invert:"Invert contact",contact_invert_hint:"For sensors that report open and closed the other way round",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",lib_room_all:"All rooms",lib_pack_all:"All packs",lib_room_living:"Living",lib_room_dining:"Dining",lib_room_kitchen:"Kitchen",lib_room_bedroom:"Bedroom",lib_room_kids:"Kids",lib_room_bath:"Bathroom",lib_room_office:"Office",lib_room_hall:"Hall",lib_room_utility:"Utility",lib_room_garage:"Garage",lib_room_garden:"Garden",lib_room_hobby:"Hobby & fitness",lib_room_conservatory:"Conservatory",lib_room_loft:"Loft",lib_kind_sofa:"Sofas",lib_kind_seating:"Seating",lib_kind_table:"Tables",lib_kind_storage:"Cabinets & shelves",lib_kind_bed:"Beds",lib_kind_kitchen:"Kitchen",lib_kind_appliance:"Appliances",lib_kind_bath:"Bathroom",lib_kind_lamp:"Lights",lib_kind_media:"TV & audio",lib_kind_office:"Office",lib_kind_tech:"Tech & smart home",lib_kind_network:"Network",lib_kind_heating:"Heating & climate",lib_kind_energy:"Energy",lib_kind_household:"Household",lib_kind_deco:"Decoration",lib_kind_tray:"Trays",lib_kind_frame:"Frames & pictures",lib_kind_vase:"Vases",lib_kind_cushion:"Cushions",lib_kind_throw:"Throws",lib_kind_candle:"Candles",lib_kind_plant:"Plants",lib_kind_outdoor:"Garden & outdoors",lib_kind_kids:"Kids",lib_kind_sport:"Fitness",lib_kind_pets:"Pets",lib_kind_vehicle:"Vehicles",lib_kind_stairs:"Stairs & railings",lib_kind_architecture:"Architecture",lib_recent:"Recently used",lib_favorites:"Favourites",lib_fav_add:"Add to favourites",lib_fav_remove:"Remove from favourites",lib_chip_electric:"Linkable",lib_chip_light:"Lights up",lib_chip_outdoor:"Outdoors",lib_more:"Show {n} more",lib_update_title:"A newer release is installed: update the placed ones",lib_basic:"Basic",lib_sizes:"{n} sizes",lib_hint_room:"Suggested for the open room \u2013 switch above.",lib_filters:"Filters:",lib_clear_filters:"Clear filters",lib_other_rooms:"{n} more in other rooms",lib_hidden_by_filters:"{n} more hidden by filters",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_rise:"Rise (\xB0)",strip_rise_hint:"The strip rises along its length, e.g. up the stairs or along a handrail (~35\u201340\xB0). Its height above the floor is then its middle.",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_sofa_l:"Corner sofa (L-shaped)",furn_sofa_u:"U-shaped sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Bedside table",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D. The screen on the right door shows pictures by rules like a TV \u2013 while that door is closed.",furn_stove:"Cooker",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV unit",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairs_u:"U-stair with landing",furn_stairwell:"Floor opening",furn_loft_ladder:"Loft ladder",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. Across several rooms it is cut in each of them; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",walls_section:"Walls ({n})",walls_open_n:"{n} with no wall",walls_sloping_n:"{n} sloping",wall_slope:"Sloping",wall_slope_hint:"Sloping wall: a height of its own at each corner, the top runs straight between them \u2013 a lean-to, a slope, clerestory windows on the tall side. Windows and doors stay under the top.",wall_slope_start:"Height at corner {n} (m)",wall_slope_end:"Height at corner {n} (m)",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",wall_pos_hint:"X and Y: the middle of the wall in the plan.",stairwell_outside:"This opening lies in no room and is therefore not cut. Move it into a room.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",furn_entity_camera:"Camera",furn_entity_heater:"Heating (thermostat or water heater)",furn_entity_sensor:"Sensor",furn_entity_car:"Car (charging, battery or location)",unplaced:"Unplaced entities",unplaced_hint:"Devices of your Home Assistant areas that the plan does not show yet. Place puts one into its area's room, or drag it onto the plan. A suggestion links it to an item in the room.",unplaced_none:"Everything is placed.",unplaced_no_room:"no room yet",unplaced_drag:"Drag onto the plan to place it there",unplaced_link:"Link to {name}",unplaced_hide:"Hide from this list",unplaced_hidden:"Hidden ({n})",unplaced_hidden_none:"Nothing hidden.",unplaced_unhide:"Unhide",unplaced_back:"Back to the list",lamp_hint:"Tap the lamp in 3D to switch it, long press for its Home Assistant details. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of Home 3D \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"High contrast",theme_day:"Day",theme_realistic:"Realistic",theme_auto:"Auto (Day/Neon by the sun)",theme_theme:"HA theme (Day/Neon)",persons:"People",locate:"Locating",persons_figure:"Figure",persons_pin:"Pin",persons_off:"off",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Collapse",side_fold_hint:"Make the sidebar narrow \u2013 more room for the floor plan",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",markers_room:"In the room",pin_size:"Symbol size",pin_size_small:"Small",pin_size_normal:"Normal",pin_size_large:"Large",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_ac_unit:"Air conditioner (wall)",furn_awning:"Awning",furn_group_outdoor:"Terrace & balcony",bin_from:"Glow from (hour, the day before)",bin_until:"until (hour, on pickup day)",bin_out:"Put out (helper)",bin_out_hint:'Optional: on while the bin stands outside (input_boolean, switch or binary sensor). It then stops glowing and its tag says "put out \u2713"; a tap on the bin switches a helper or switch. A nightly automation turns it back off.',bin_out_done:"put out \u2713",bin_out_mark:"Mark as put out",bin_next_only:"Label only the next pickup",bin_days:"Show tags only \u2026 days before",bin_days_always:"always",bin_tags_hint:'For all bins. Bins without a tag still show in "Today in the household" and show their pickups when tapped.',hh_service2:"{name}: {what} due",hh_service2_entity:"Second service (e.g. dock)",hh_service2_min:"Second due at (\u2264 percent or days)",bin_none:"No pickup in sight",hh_title:"Today in the household",hh_notes:"Pinboard (text helper)",hh_notes_hint:'A text helper (input_text) or sensor whose text stands in "Today in the household" \u2013 separate several lines with |. Automations write into it ("parcel is in the garage"), the card shows it.',heat_sensor:"Heating (sensor)",heat_sensor_hint:'When the thermostat does not say whether it heats (Tuya valves report a "work state"), pick that sensor here: on/opened/heating or an opening above 0 % makes the radiator glow.',door_lock:"Smart lock",door_lock_hint:"The door's lock (Nuki, Aqara \u2026): a pin at the door shows locked or open, a tap locks or unlocks.",door_lock_btn:"Lock",door_unlock_btn:"Unlock",door_lock_confirm:"Really lock {name}?",door_unlock_confirm:"Really unlock {name}?",garage_pulse_hint:"A switch or button as the drive: a tap on the door gives it a pulse (a switch is turned on, a button pressed); whether the door is open comes from the contact.",clock:"Clock",clock_off:"Off",clock_tl:"\u2196 clock",clock_tr:"\u2197 clock",clock_bl:"\u2199 clock",clock_br:"\u2198 clock",editor_floor:"Editor's start floor",editor_floor_auto:"First of the list",editor_floor_hint:"The floor the editor opens with.",hh_left:"{t} left",hh_done:"Done!",hh_finished:"{name} is done",hh_thirsty:"Thirsty",hh_plant:"{name} needs water",hh_service:"{name}: service due",hh_fridge_open:"{name} is open",alert_fridge_door:"Fridge open: {name}",alert_short_fridge_door:"Fridge open",hh_moisture:"Plant (plant.*) or moisture sensor",hh_moisture_min:"Thirsty below (%)",hh_remaining:"Time left (sensor)",hh_door:"Door sensor",hh_fridge_door:"Door sensor",hh_appliance_hint:'While it runs, its pin shows the time left; afterwards "Done!" until the door opens or it runs again.',hh_door_alarm:"Warn after (minutes open)",hh_service_entity:"Consumable / service (sensor)",hh_service_min:"Due at (\u2264 percent or days)",hh_service_hint:'E.g. a filter, salt or rinse aid: a binary sensor (on = due), a number (percent or days left) or a date. When it is due the item glows yellow and shows in "Today in the household".',card_household:"Today in the household",card_household_hint:"Household Pro: glass card with bins, post, finished appliances, thirsty plants and service due",card_rack_cards:"Rack cards",rack_card_online:"Devices online",rack_card_values:"Card values \xB7 {n}/{max}",rack_card_values_hint:"What the glass card over the rack shows in 3D.",rack_card_rack:"Whole rack",rack_card_default:"Default values",rack_card_hottest:"Hottest",rack_kind_status:"Status",rack_kind_load:"Load",rack_kind_battery:"Battery",rack_kind_runtime:"Runtime",rack_kind_power:"Power",rack_kind_temperature:"Temperature",rack_kind_cpu:"CPU",rack_kind_memory:"Memory",rack_kind_disk:"Volume",rack_kind_throughput:"Throughput",rack_kind_uptime:"Up since",card_rack_cards_hint:"Glass card over every rack with linked gear: UPS, temperature, devices online \u2026",furn_waste_bin:"Waste bin",furn_mailbox:"Letterbox",furn_wifi_ap:"Wi-Fi access point",furn_water_heater:"Water heater",tech_mount:"Mounting",wifi_ap_std:"On the ceiling",wifi_ap_wall:"On the wall",water_heater_std:"Standing tank",water_heater_wall:"Slim tank on the wall",ap_status:"Status (connection, state)",ap_clients_sensor:"Sensor: connected clients",ap_clients:"{n} clients",ap_offline:"Offline",pin_standby:"Standby",ap_hint:"The ring glows blue while the access point is there and red when it is gone \u2013 its symbol then shows too. Diagnostic entities (UniFi's, for example) are offered here as well.",heater_entity:"Device (water_heater, thermostat or switch)",heater_temp:"Sensor: water temperature (optional)",heater_hint:"The tank glows warm while it heats (thermostat heating, switch on or power above the threshold) and shows the water temperature \u2013 from the sensor or from the device itself.",furn_lamp_fan:"Ceiling fan with light",fan_entity:"Fan (fan entity)",fan_hint:"The light above switches the lamp. With a fan its blades turn with its speed, and it gets a symbol of its own beside it: a tap switches it, a long press opens its details (with the speed).",furn_wall_switch:"Light switch",furn_wall_socket:"Socket",furn_group_switches:"Home technology",wv_cat_switches:"Switches",gang_count_switch:"Buttons in the frame",gang_count_socket:"Sockets in the frame",socket_kind:"Kind",socket_indoor:"Indoor",socket_outdoor:"Outdoor socket with lid",gang_switch:"Button switches",gang_socket:"Socket switches",gang_switch_hint:"Every button gets its own entity (a light, a switch, a fan) and glows while it is on \u2013 a light in its colour. A tap switches it; with several buttons a small menu opens.",gang_socket_hint:"Every socket gets its own entity (the relay, the smart plug) and, if you like, a power sensor; it glows green while it is on. The same entity may sit on several sockets \u2013 two sockets on one relay.",furn_group_household:"Household",bin_shape:"Shape",bin_shape_bin120:"Wheelie bin 120 l",bin_shape_bin240:"Wheelie bin 240 l",bin_shape_bin1100:"Container 1100 l",bin_shape_multi:"Multi-compartment bin",bin_shape_bag:"Bag",bin_shape_caddy:"Caddy / pail",bin_shape_underground:"Underground container",bin_kind:"Waste",bin_kind_rest:"General waste",bin_kind_bio:"Food / organic",bin_kind_paper:"Paper",bin_kind_plastic:"Packaging / plastic",bin_kind_glass:"Glass",bin_kind_garden:"Garden waste",bin_kind_recycling:"Recycling",bin_kind_other:"Other",bin_color:"Colour",bin_lid:"Lid",bin_source:"Waste calendar or sensor",bin_match:"Word in the calendar (empty: by its waste)",bin_hint:'The bin glows from the set hour the day before until the hour on pickup day (for all bins); its pin says "Today" or "Tomorrow", a tap on the bin shows its next pickups. A calendar (e.g. from Waste Collection Schedule) is searched for the words of its waste; a sensor can give the days to the pickup or its date.',bin_today:"Today",bin_tomorrow:"Tomorrow",bin_in_days:"in {n} days",mailbox_shape:"Shape",mailbox_shape_wall:"Wall mailbox",mailbox_shape_pole:"Mailbox on a post (with flag)",mailbox_shape_pillar:"Post box with newspaper holder",mailbox_shape_parcel:"Parcel box",mailbox_shape_bank:"Mailbox bank",mailbox_entity:"Post sensor (flap or flag)",mailbox_door:"Sensor of the emptying door (optional)",mailbox_hint:'With a flag (e.g. an input_boolean "post" set by an automation) the mailbox glows while it is on. With a flap and an emptying door it glows when post came in after it was last emptied.',mailbox_post:"Post",pro_name_household:"Household Pro",pro_feature_household:'Household Pro: bins glow the evening before their pickup (waste calendar or sensor), the mailbox while post is in it, plants when thirsty; washer, dryer and dishwasher show their time left and "Done!"; filters and consumables due glow yellow; open fridge doors warn; glass card "Today in the household"; plus the smart fridge (side-by-side, doors with sensors)',awning_cover:"Awning (cover)",motor_cover:"Motor (cover)",curtain_side:"Opens to",curtain_side_both:"both sides",curtain_side_left:"left (seen from the front)",curtain_side_right:"right (seen from the front)",motor_time:"Run time (s)",motor_invert_hint:"For covers that report 100 % while the curtain is closed or the screen is down.",awning_pitch:"Fall (\xB0)",awning_time:"Run time fully out (s)",awning_position:"Position sensor (optional)",awning_valance:"Valance (fabric edge at the front)",awning_invert:"Reverse direction",awning_invert_hint:"For covers that report 100 % while the awning is in.",awning_kind:"Kind",awning_kind_arm:"Folding-arm awning (terrace)",awning_kind_drop:"Drop-arm awning (balcony, window)",awning_kind_vertical:"Vertical screen / ZIP (window, balcony)",awning_kind_pergola:"Pergola / conservatory awning",awning_kind_side:"Side awning (privacy screen)",awning_kind_arm_hint:"The classic over a terrace: folding arms push the fabric out with a slight fall. Depth = projection.",awning_kind_drop_hint:"The arms swing out and down from the wall, the fabric stretches at a slant in front. Depth = arm length, fall = how far the arms go below the horizontal.",awning_kind_vertical_hint:"The fabric runs straight down in side rails to the floor \u2013 in front of a window, a balcony railing or the front of a pergola. Height above the floor = the box's underside.",awning_kind_pergola_hint:"A fixed frame with posts at the front; the fabric runs out on top of its rails. Depth = to the posts, fall = the roof's slope.",awning_kind_side_hint:"A post with the rolled fabric on the left, the fabric pulls out sideways to the right up to the other post. Width = how far it pulls out, height above the floor = the fabric's height.",awning_hint:"Width = the awning along the wall, depth = its projection fully out; the back of the frame goes against the house wall, height above the floor is the cassette's underside. If the cover reports its position while it runs, the awning runs out slowly in 3D; if it only says opening/closing, it moves along at the run time.",furn_only_color:"Glow in one colour only",furn_only_color_pick:"Colour",furn_only_color_hint:`The lamp only glows while the light shows about this colour \u2013 e.g. yellow for "water" at the washbasin. The same light's other colours stay dark here.`,furn_run_w:"Running from (watts)",furn_run_w_hint:"From how many watts at the power sensor the appliance counts as running and glows (empty: 10 W). For appliances behind a smart plug that draw a few watts on standby, e.g. 100.",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall unit",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Tumble dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",solar_pro_soon:"coming soon",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_dim:"Dim the solar grid over the plan",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_float:"Show over the room without the roof",roof_window_float_hint:"When the roof fades out as you zoom in on a floor or a room, the window stays where it is over the room \u2013 open, tilted, with its blind. This works over rooms of the floor the roof sits on; where the slope reaches down over a lower floor, the windows stay in the roof. Off: it shows in the roof only.",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_wall_free:"free-standing",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Connected to (inverter or battery)",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"Here the grid cable ends: at the handover point to the utility, e.g. at the end of the driveway. Movable in the plan; without a grid connection the cable ends at the edge of the outdoor areas.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",show_when:"When it shows",show_when_entity:"Only while available",show_from:"From",show_to:"To",show_start:"From",show_end:"Until",show_add_interval:"Interval",show_when_hint:"With no rule it always shows. With an entity it hides while that entity is unavailable; with intervals it shows only inside them. Days count every year, whatever year the picker shows (Dec to Jan runs over the new year); times count every day (22:00 to 06:00 runs over midnight).",colours:"Colours and materials",colours_hint:'Each colour role follows the look until you give it a colour of its own. "From the look" sets it back. The material beside it shows in the realistic look.',colour_theme:"From the look",colour_own:"Own colour",material_of:"Material: {role}",material_usual:"Usual ({material})",material_matt:"Matt",material_gloss:"Gloss",material_fabric:"Fabric",material_glass:"Glass",material_metal:"Metal",material_rattan:"Rattan weave",colour_role_body:"Body",colour_role_fabric:"Fabric",colour_role_cushion:"Cushion",colour_role_wood:"Wood",colour_role_white:"White",colour_role_metal:"Metal",colour_role_dark:"Dark",colour_role_glass:"Glass",colour_role_plant:"Plant",colour_role_pot:"Pot",colour_role_accent:"Accent",colour_role_paint:"Paint",paint_hex:"Hex colour",paint_white:"White",paint_black:"Black",paint_silver:"Silver",paint_grey:"Grey",paint_blue:"Blue",paint_red:"Red",paint_green:"Green",paint_orange:"Yellow/orange",paint_bronze:"Brown/bronze",paint_dark_blue:"Dark blue",colour_preset_oak:"Oak",colour_preset_walnut:"Walnut",colour_preset_rattan:"Rattan",colour_preset_white_gloss:"White gloss",colour_preset_black:"Black",colour_preset_grey_fabric:"Grey fabric",colour_preset_beige_fabric:"Beige fabric",colour_preset_navy_fabric:"Navy fabric",colour_preset_green_velvet:"Green velvet",colour_preset_brass:"Brass",colour_preset_chrome:"Chrome",colour_preset_terracotta:"Terracotta",colour_preset_black_brown:"Black-brown",colour_preset_white_stained_oak:"White stained oak",colour_preset_birch:"Birch",colour_preset_pine:"Pine",colour_preset_acacia:"Acacia",colour_preset_anthracite:"Anthracite",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, cables, meter and hologram \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_meter_reading:"Meter reading (m\xB3 or litres)",energy_circuit:"Inside circuit",energy_circuit_hint:"The power sensor of the circuit this device is on (a circuit monitor's channel). Its watts are already in that circuit's, so the cables and the house total don't count them twice.",energy_circuit_unset:"No circuit chosen: if this device is on a circuit monitor's channel, its watts are counted twice until you choose it here.",furn_holo:"Hologram over the device (Energy Pro)",furn_holo_hint:"A glass card over the device with its power now, today's consumption and the day curve \u2013 in the house and the floor view. Needs a power sensor.",holo_dev_now:"now",furn_links_hint:"With a power sensor the item shows its watts and gets an energy cable.",screen_pictures:"Pictures by state",screen_pictures_hint:`The state or an attribute of the entity is compared (e.g. a TV's app_name). A value matches when it is equal or contained in the text ("youtube" matches "com.google.android.youtube.tv"); "*" = always. The first matching rule wins. Pictures are stored scaled to 512 px; a picture URL or a camera works too \u2013 a camera's live picture is refreshed every 5 seconds while shown. Without a matching rule the screen shows the media player.`,picture_state:"is or contains \u2026 (e.g. netflix)",picture_state_of:"State",picture_attribute:"Compare the state or an attribute",picture_pick:"Choose picture \u2026",picture_change:"Change picture \u2026",picture_url:"or picture URL",picture_add_value:"+ Value",picture_reuse:"Use a stored picture",picture_camera:"or a camera (live picture) \u2026",picture_camera_none:"No camera",screen_bg:"Screen behind the picture",screen_bg_black:"Dark",screen_bg_white:"White",picture_add_entity:"+ Another entity",picture_current:"now: {value}",picture_matches:"\u2713 matches now \u2013 this picture shows",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",stair_open:"Open treads (no risers)",stair_turn:"Turn at the bottom",stair_turn_none:"None (straight)",stair_turn_left:"Enter from the left",stair_turn_right:"Enter from the right",stair_turn_hint:"The first three steps wind round the corner as winders, entered from the chosen side. Needs a flight longer than it is wide.",stair_landing:"Bottom landing (steps)",stair_landing_hint:"The bottom square becomes a flat landing that many steps up, reached from the side; the flight climbs on from there. Replaces the turn.",stair_top:"Flat top (m)",stair_top_hint:"The top step runs on flat to the back for this long, like a landing in front of the floor above.",stair_start:"Start height (m)",stairs_u_hint:"The U-stair rises from the marked front edge towards the back, turns at the landing and comes back up on the other side. \u201CMirror\u201D turns it the other way. It opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_cheap_rate:"Cheap rate (on = cheap)",energy_cheap_from:"Cheap from",energy_cheap_to:"until",energy_cheap_hint:"A badge shows while the cheap rate runs: a binary sensor, schedule or switch that is on then \u2013 or, without one, a daily window (22:00 to 06:00 runs over midnight). Nothing set: no badge.",energy_wire_sensor:"Energy sensor (kWh) for today",energy_wire_sensor_hint:"Its use today shows at the end of its energy cable (hover or tap it). Automatic: the device's energy sensor; without one, worked out from the power sensor's statistics.",cheap_rate:"Cheap rate",cheap_rate_now:"now",wire_today:"Today",energy_gas_meter:"Gas meter",energy_water_meter:"Water meter",energy_meters_hint:`Energy Pro: the house card shows how much gas and water were used today \u2013 from the meters' statistics (a counter, e.g. in m\xB3). "Take over from the energy dashboard" fills both too.`,holo_gas:"Gas",holo_water:"Water",holo_today_short:"today",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."};var j_=["de","fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl","zh","pt"],K_=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:Li,pending:ca}=K_;function da(s){let t=(s??navigator.language).toLowerCase(),e=t.startsWith("no")?"nb":t.slice(0,2);return j_.includes(e)?e:null}function up(s){let t=da(s);return!t||Li.has(t)}function pp(s){let t=da(s);if(!t||Li.has(t))return Promise.resolve();let e=ca.get(t);if(!e){let n=new URL(`./lang/${t}.json?v=04bd7b3a06a2`,import.meta.url).href;e=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{Li.set(t,i&&typeof i=="object"?i:{})}).catch(()=>{Li.set(t,{})}).finally(()=>ca.delete(t)),ca.set(t,e)}return e}function Wt(s,t,e={}){let n=da(s?.language??navigator.language),o=(n?Li.get(n):void 0)?.[t]??B_[t]??t;for(let[r,a]of Object.entries(e))o=o.replace(`{${r}}`,String(a));return o}function Ut(s,t,e=2){return t.toLocaleString(s?.language??void 0,{maximumFractionDigits:e})}var U_={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Jn(s){return U_[s]}var Qe=(s,t)=>Wt(s,t);function hp(s,t){if(!t||ki(t))return Qe(s,"state_unavailable");let e=t.attributes;switch(et(t.entity_id)){case"light":return t.state!=="on"?Qe(s,"state_off"):typeof e.brightness=="number"?`${Math.round(e.brightness/255*100)} %`:Qe(s,"state_on");case"switch":case"fan":return Qe(s,t.state==="on"?"state_on":"state_off");case"cover":return typeof e.current_position=="number"&&t.state!=="opening"&&t.state!=="closing"?`${e.current_position} %`:es(s,t.state);case"climate":{let n=typeof e.current_temperature=="number"?`${Ut(s,e.current_temperature,1)} ${s?Dn(s):"\xB0C"}`:null;return t.state==="off"?n?`${n} \xB7 ${Qe(s,"state_off")}`:Qe(s,"state_off"):n??es(s,t.state)}case"media":{let n=t.state==="playing"||t.state==="paused"||t.state==="on"||t.state==="idle",i=[e.app_name,e.media_title,e.source].find(o=>typeof o=="string"&&o);return n&&i?i:es(s,t.state)}case"lock":case"camera":return es(s,t.state);case"binary":return["door","window","opening","garage_door"].includes(e.device_class)?Qe(s,t.state==="on"?"state_open":"state_closed"):Qe(s,t.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(t.state),i=e.unit_of_measurement??"",o=s?.entities?.[t.entity_id]?.display_precision??1;return Number.isFinite(n)?`${Ut(s,n,o)}${i?` ${i}`:""}`:t.state}default:return""}}function es(s,t){let e=`state_${t}`,n=Wt(s,e);return n===e?t:n}function fp(s,t){let e=`${t} ${String(s.states[t]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}var mp=new Map;function gp(s){mp=new Map(s?.floors.flatMap(t=>t.placements.filter(e=>Array.isArray(e.detect_sensors)).map(e=>[e.entity_id,e.detect_sensors]))??[])}function _p(s,t){return mp.get(t)??ua(s,t)}function ua(s,t){let e=s.entities?.[t]?.device_id;return e?Object.values(s.entities??{}).filter(n=>n.device_id===e&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(s.states[n]?.attributes.device_class))):[]}function bp(s){let t=(s??"").trim();return!t||/["'()\\\s]/.test(t)?null:/^(https?:\/\/|\/)/i.test(t)||/^data:image\//i.test(t)?t:null}var dw=Qn("home-3d-voice",()=>__FP3D_VOICE_HASH__);function vp(){try{return localStorage.getItem("home3d.voice")==="1"}catch{return!1}}function yp(s){try{s?localStorage.setItem("home3d.voice","1"):localStorage.removeItem("home3d.voice")}catch{}}function wp(){try{return localStorage.getItem("home3d.screen")??""}catch{return""}}function kp(s){try{s.trim()?localStorage.setItem("home3d.screen",s.trim()):localStorage.removeItem("home3d.screen")}catch{}}function xp(){try{return localStorage.getItem("home3d.voicePipeline")}catch{return null}}function $p(s){try{s?localStorage.setItem("home3d.voicePipeline",s):localStorage.removeItem("home3d.voicePipeline")}catch{}}var pw=3*6e4;var pa="home3d.director";function Mp(){try{return localStorage.getItem(pa)==="1"}catch{return!1}}function Sp(s){try{s?localStorage.setItem(pa,"1"):localStorage.removeItem(pa)}catch{}}var q_=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Ep(s,t){return t?s.states[t]?[t]:[]:Object.keys(s.states).filter(e=>{let n=s.states[e];if(e.startsWith("event."))return n.attributes.device_class==="doorbell";if(!e.startsWith("binary_sensor."))return!1;let i=`${e} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return q_.test(i)}).sort()}function Pp(s,t,e,n){if(n)return n;let i=s.entities??{},o=i[t]?.device_id,r=e.filter(d=>d.startsWith("camera.")),a=o?r.find(d=>i[d]?.device_id===o):void 0;if(a)return a;let l=d=>i[d]?.area_id??s.devices?.[i[d]?.device_id??""]?.area_id??null,c=l(t);return c&&r.find(d=>l(d)===c)||null}var te=Math.PI/180;function bn(s){let t=s.rotation??0;if(!t||s.points&&s.points.length>=3)return null;let e=t*te;return{p:s.pivot??[(s.x0+s.x1)/2,(s.z0+s.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function Zn(s,t,e=!1){if(!s)return t;let n=t[0]-s.p[0],i=t[1]-s.p[1],o=e?-s.s:s.s;return[s.p[0]+n*s.c-i*o,s.p[1]+n*o+i*s.c]}function ee(s){let t=Math.min(s.x0,s.x1),e=Math.max(s.x0,s.x1),n=Math.min(s.z0,s.z1),i=Math.max(s.z0,s.z1),o=bn(s),r=s.axis==="x"?(l,c)=>[l,s.flip?i-c:n+c]:(l,c)=>[s.flip?e-c:t+c,l],a=o?(l,c)=>Zn(o,r(l,c)):r;return s.axis==="x"?{u0:t,u1:e,w:i-n,at:a}:{u0:n,u1:i,w:e-t,at:a}}function Y_(s,t,e,n=1e-6){let[i,o]=Hp(s,t,e),r=ee({...s,rotation:0});return i>=r.u0-n&&i<=r.u1+n&&o>=-n&&o<=r.w+n}function Pe(s){let t=ee(s).w,e=s.eave_a,n=s.eave_b,i=Math.tan(Math.min(80,Math.max(0,s.pitch_a))*te),o=Math.tan(Math.min(80,Math.max(0,s.pitch_b))*te);if(s.shape==="flat"||s.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(s.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};if(s.shape==="mansard"){let l=zp(t,e,n,i,o);return{vr:l.vr,rh:l.rh,y:l.y}}let r=i+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(i+o))):t/2,a=e+r*i;return{vr:r,rh:a,y:l=>l<=r?e+l*i:n+(t-l)*o}}function ha(s){let t=s.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Ip=.14;function Fp(s,t){return!s.open&&Math.min(s.base,s.eave_a,s.eave_b)<t-.05}function Ap(s,t){return Pe(s).rh-Ip>t+.01}function Tp(s,t,e){let n=[];for(let i of ha(s)){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let o=ee(i),r=Pe(i),a=t+e+Ip,l=[],c=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*te),d=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*te);c>1e-6&&l.push((a-i.eave_a)/c),i.shape==="gable"&&d>1e-6&&l.push(o.w-(a-i.eave_b)/d);for(let u of l)u<=.01||u>=o.w-.01||i.shape==="gable"&&Math.abs(r.y(u)-a)>1e-6||n.push([o.at(o.u0,u),o.at(o.u1,u)])}return n}function X_(s,t){let e=s.length;if(e<3||Math.abs(t)<1e-9)return s.map(o=>[o[0],o[1]]);let n=It(s)>=0?1:-1,i=[];for(let o=0;o<e;o++){let r=s[(o+e-1)%e],a=s[o],l=s[(o+1)%e],c=Rp([a[0]-r[0],a[1]-r[1]]),d=Rp([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],h=[d[1]*n,-d[0]*n],p=u[0]+h[0],f=u[1]+h[1],_=Math.hypot(p,f);if(_<1e-6){i.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(p*u[0]+f*u[1])/_,y=Math.min(4,1/Math.max(.25,g));i.push([a[0]+p/_*t*y,a[1]+f/_*t*y])}return i}function Rp(s){let t=Math.hypot(s[0],s[1])||1;return[s[0]/t,s[1]/t]}function ns(s){let t=s.map(n=>n[0]),e=s.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function is(s,t,e,n){let i=Ct(s,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!i.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,r=new Map,a=i.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let h of[u.a,u.b])r.set(o(h),[...r.get(o(h))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let h=[u.a,u.b],p=u.b;for(;;){let f=(r.get(o(p))??[]).find(_=>!l.has(_));if(!f||(l.add(f),p=o(f.a)===o(p)?f.b:f.a,o(p)===o(h[0])))break;h.push(p)}h.length>=3&&o(p)===o(h[0])&&(!c||Math.abs(It(h))>Math.abs(It(c)))&&(c=h)}if(!c)return null;let d=[];for(let u=0;u<c.length;u++){let h=c[(u+c.length-1)%c.length],p=c[u],f=c[(u+1)%c.length],_=(p[0]-h[0])*(f[1]-p[1])-(p[1]-h[1])*(f[0]-p[0]);Math.abs(_)>1e-6&&d.push(p)}return d.length>=3?X_(d,e):null}var Ci=Math.tan(30*te);function zp(s,t,e,n,i){let o=Math.min(s*.3,n>1e-6?2.4/n:s*.3),r=Math.min(s*.3,i>1e-6?2.4/i:s*.3),a=t+o*n,l=e+r*i,c=Math.min(s-r,Math.max(o,(l-a+Ci*(s-r+o))/(2*Ci))),d=a+(c-o)*Ci;return{vla:o,vlb:r,yla:a,ylb:l,vr:c,rh:d,y:h=>h<=o?t+h*n:h<=c?a+(h-o)*Ci:h<=s-r?l+(s-r-h)*Ci:e+(s-h)*i}}function fa(s,t){let e=ee(s),n=Pe(s),i=e.w,o=Math.max(0,t.a),r=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(H,N)=>[H,N,n.y(N)],d=c(a,-o),u=c(l,-o),h=c(l,i+r),p=c(a,i+r),f=Math.tan(Math.min(80,Math.max(0,s.pitch_a))*te),_=Math.tan(Math.min(80,Math.max(0,s.pitch_b))*te);if(s.shape==="pent"){let H=[d,u,h,p],N=[[0,n.y(0)],[i,n.y(i)]];return{faces:[H],rim:H,ridges:[[h,p]],gable:N,gables:[N,N]}}if(s.shape==="pyramid"){let H=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[d,u,H],[u,h,H],[h,p,H],[p,d,H]],rim:[d,u,h,p],ridges:[[d,H],[p,H],[u,H],[h,H]],gable:null,gables:[null,null]}}if(s.shape==="mansard"){let H=zp(i,s.eave_a,s.eave_b,f,_),N=[[0,n.y(0)],[H.vla,H.yla],[H.vr,H.rh],[i-H.vlb,H.ylb],[i,n.y(i)]],q=[a,H.vla,H.yla],Y=[l,H.vla,H.yla],X=[a,i-H.vlb,H.ylb],Q=[l,i-H.vlb,H.ylb],j=[a,H.vr,H.rh],it=[l,H.vr,H.rh];return{faces:[[d,u,Y,q],[q,Y,it,j],[j,it,Q,X],[X,Q,h,p]],rim:[d,u,Y,it,Q,h,p,X,j,q],ridges:[[j,it],[q,Y],[X,Q]],gable:N,gables:[N,N]}}let[g,y]=ma(s)??["gable","gable"],v=ga(s,[g,y]),w=g==="gable"?[a,n.vr,n.rh]:[e.u0+v.d0,n.vr,n.rh],k=y==="gable"?[l,n.vr,n.rh]:[e.u1-v.d1,n.vr,n.rh],S=[a,v.vah,v.yh],$=[a,v.vbh,v.yh],x=[l,v.vah,v.yh],R=[l,v.vbh,v.yh],L=g==="halfhip",C=y==="halfhip",E=[[d,u,...C?[x]:[],k,w,...L?[S]:[]],[w,k,...C?[R]:[],h,p,...L?[$]:[]]];g==="hip"&&E.push([p,d,w]),L&&E.push([$,S,w]),y==="hip"&&E.push([u,h,k]),C&&E.push([x,R,k]);let O=[d,u,...y==="gable"?[k]:C?[x,R]:[],h,p,...g==="gable"?[w]:L?[$,S]:[]],I=[[w,k]];g==="hip"&&I.push([d,w],[p,w]),L&&I.push([S,w],[$,w]),y==="hip"&&I.push([u,k],[h,k]),C&&I.push([x,k],[R,k]);let T=[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]],F=[[0,n.y(0)],[v.vah,v.yh],[v.vbh,v.yh],[i,n.y(i)]],D=H=>H==="gable"?T:H==="halfhip"?F:null,W=[D(g),D(y)];return{faces:E,rim:O,ridges:I,gable:W[0]??W[1],gables:W}}function ma(s){if(s.shape!=="gable"&&s.shape!=="hip"&&s.shape!=="halfhip")return null;let t=s.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(s.end_u0),e(s.end_u1)]}function ga(s,t){let e=ee(s),n=Pe(s),i=e.w,o=Math.tan(Math.min(80,Math.max(0,s.pitch_a))*te),r=Math.tan(Math.min(80,Math.max(0,s.pitch_b))*te),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(i)),d=c+(n.rh-c)*.55,u=o>1e-6?Math.min(n.vr,(d-s.eave_a)/o):n.vr,h=r>1e-6?Math.max(n.vr,i-(d-s.eave_b)/r):n.vr,p=Math.min(l,Math.min(n.vr,i-n.vr)||i/2),f=Math.min(l-.1,(n.rh-d)/Math.max(.2,o)),_=g=>g==="hip"?p:g==="halfhip"?f:0;return{d0:_(t[0]),d1:_(t[1]),yh:d,vah:u,vbh:h}}function Q_(s,t,e){let n=null;for(let i of s.faces){if(!K([t,e],i.map(v=>[v[0],v[1]])))continue;let[o,r]=i,a=i.slice(2).find(v=>Math.abs((r[0]-o[0])*(v[1]-o[1])-(r[1]-o[1])*(v[0]-o[0]))>1e-9);if(!a)continue;let l=r[0]-o[0],c=r[2]-o[2],d=r[1]-o[1],u=a[0]-o[0],h=a[2]-o[2],p=a[1]-o[1],f=c*p-d*h,_=d*u-l*p,g=l*h-c*u;if(Math.abs(_)<1e-9)continue;let y=o[2]-(f*(t-o[0])+g*(e-o[1]))/_;n=n===null?y:Math.min(n,y)}return n}function Op(s,t,e){let n=t*te,i={p:e,c:Math.cos(n),s:Math.sin(n)};if(s.points&&s.points.length>=3)return{...s,points:s.points.map(d=>Zn(i,d)),...ns(s.points.map(d=>Zn(i,d)))};let o=s.pivot??[(s.x0+s.x1)/2,(s.z0+s.z1)/2],r=Zn(i,o),a=r[0]-o[0],l=r[1]-o[1],c=(((s.rotation??0)+t)%360+360)%360;return c>180&&(c-=360),{...s,x0:s.x0+a,x1:s.x1+a,z0:s.z0+l,z1:s.z1+l,pivot:r,rotation:Math.abs(c)<1e-9?0:c}}function Hp(s,t,e){let[n,i]=Zn(bn(s),[t,e],!0),o=Math.min(s.x0,s.x1),r=Math.max(s.x0,s.x1),a=Math.min(s.z0,s.z1),l=Math.max(s.z0,s.z1);return s.axis==="x"?[n,s.flip?l-i:i-a]:[i,s.flip?r-n:n-o]}function _a(s,t){let[e,n]=Zn(bn(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),i=r=>Math.abs((r.x1-r.x0)*(r.z1-r.z0)),o=null;for(let r of s)r===t||r.dormer||r.open||r.shape==="flat"||r.shape==="parapet"||i(r)<i(t)*1.5||Y_(r,e,n)&&(!o||i(r)<i(o))&&(o=r);return o}function Lp(s,t,e,n){let i=bn(s),o=ee({...s,rotation:0}),r=Pe(s),a=2,l=Math.max(o.u0+.3,Math.min(o.u1-a-.3,(n??(o.u0+o.u1)/2)-a/2)),c=t==="a"?s.eave_a:s.eave_b,d=t==="a"?s.pitch_a:s.pitch_b,u=c+1.4,h=a/2*Math.tan(35*te),p=u+h,f=Math.max(.8,Math.min(o.w/2-.2,(p-c)/Math.max(.15,Math.tan(Math.min(80,d)*te)))),_=t==="a"?0:o.w-f,g=t==="a"?f:o.w,y=o.at(l,_),v=o.at(l+a,g);return{id:e,x0:Math.round(Math.min(y[0],v[0])*100)/100,z0:Math.round(Math.min(y[1],v[1])*100)/100,x1:Math.round(Math.max(y[0],v[0])*100)/100,z1:Math.round(Math.max(y[1],v[1])*100)/100,shape:"gable",axis:s.axis==="x"?"z":"x",eave_a:Math.round(u*100)/100,eave_b:Math.round(u*100)/100,pitch_a:35,pitch_b:35,base:Math.round(r.y(t==="a"?0:o.w)*100)/100,overhang:.15,dormer:!0,...i?{rotation:s.rotation,pivot:i.p}:{}}}function Cp(s,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=ee(t),n=Pe(t).rh,i=fa(s,{u0:0,u1:0,a:0,b:0}),o=Pe(s),r=_=>{let[g,y]=e.at(_,e.w/2),[v,w]=Hp(s,g,y);return Q_(i,v,w)??o.y(w)},a=r(e.u0)<=r(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,d=a?1:-1,u=Math.abs(c-l),h=c;for(let _=.5;_<u;_+=.05)if(r(l+d*_)>=n-.02){h=l+d*_;break}if(Math.abs(h-c)<.05)return t;let p=bn(t),f={...t,...p?{pivot:p.p}:{}};return t.axis==="x"?c===e.u1?f.x1=h:f.x0=h:c===e.u1?f.z1=h:f.z0=h,f}function Dp(s,t,e){let n=ee(t),i=s.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(d=>i.some(u=>K(d,u.points))),r=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(a.map(c=>n.at(c,-r)))?0:e,b:o(a.map(c=>n.at(c,n.w+r)))?0:e,u0:o(l.map(c=>n.at(n.u0-r,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+r,c)))?0:e}}function Wp(s,t,e,n,i){let o=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([t+(n-t)*a,e+(i-e)*l]);let r=s.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&o.some(c=>K(c,l.points)))).map(a=>a.elevation+a.height);return r.length?Math.max(...r):null}function Vp(s,t){let e=s.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function os(s){return Pe(s).rh}function Np(s,t=e=>`roof_${e+1}`){let e=s.settings.roof?.pitch??35,n=s.settings.wall_exterior,i=s.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),o=[],r=[],a=l=>Math.round(l*1e3)/1e3;for(let l of i){let c=l.rooms.filter(w=>w.points.length>=3),d=[...new Set(c.flatMap(w=>w.points.map(k=>a(k[0]))))].sort((w,k)=>w-k),u=[...new Set(c.flatMap(w=>w.points.map(k=>a(k[1]))))].sort((w,k)=>w-k),h=d.length-1,p=u.length-1,f=(w,k)=>w.some(S=>K(k,S.points)),_=[];for(let w=0;w<p;w++){_.push([]);for(let k=0;k<h;k++){let S=[(d[k]+d[k+1])/2,(u[w]+u[w+1])/2];_[w].push(f(c,S)&&!f(r,S))}}let g=_.map(w=>w.map(()=>!1)),y=(w,k)=>_[k][w]&&!g[k][w],v=l.elevation+l.height;for(let w=0;w<p;w++)for(let k=0;k<h;k++){if(!y(k,w))continue;let S=k;for(;S+1<h&&y(S+1,w);)S++;let $=w;for(;$+1<p&&Array.from({length:S-k+1},(E,O)=>y(k+O,$+1)).every(Boolean);)$++;for(let E=w;E<=$;E++)for(let O=k;O<=S;O++)g[E][O]=!0;let x=d[k]-n,R=d[S+1]+n,L=u[w]-n,C=u[$+1]+n;Math.min(R-x,C-L)<.8||o.push({id:t(o.length),x0:a(x),z0:a(L),x1:a(R),z1:a(C),shape:"gable",axis:R-x>=C-L?"x":"z",eave_a:a(v),eave_b:a(v),pitch_a:e,pitch_b:e,base:a(v),overhang:null})}r.push(...c)}return o}var wn=Math.PI/180,Bp=1.13,ba=1.72,ce=.025,vn=.07,jp=.25;function Re(s,t){let e=[];for(let n of s.floors){if(t&&n.id!==t)continue;let{walls:i}=Ct(n.rooms,{exterior:s.settings.wall_exterior,interior:s.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let r=o.b[0]-o.a[0],a=o.b[1]-o.a[1],l=Math.hypot(r,a);if(l<.5)continue;let c=a/l,d=-r/l,u=Math.min(n.height,o.height??n.height),h=o.sources.find(_=>_.room_id===o.roomLeft)?.edge??null,p={floorId:n.id,room:o.roomLeft,edge:h,free:!!o.free},f=(_,g,y,v)=>e.push({key:_,section:null,side:"top",flat:!1,o:g,eu:y,es:[0,1,0],n:v,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[v[0],v[2]],wall:p});f(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+d*o.right],[r/l,0,a/l],[c,0,d]),o.free&&f(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-d*o.left],[-r/l,0,-a/l],[-c,0,-d])}}return e}var Ze="ground";function J_(s){let t=[...s.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??s.floors[0]??null}function Kp(s,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],o=J_(s),r=n[0]*t.u+i[0]*t.v,a=n[2]*t.u+i[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:$o(o,r,a)):t.base??0;return{key:Ze,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Xt(s,t,e=yt(s)){return t.face===Ze?Kp(s,t):t.face.startsWith("wall:")?Re(s,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function Up(s,t,e){let n=Re(s,e),i=s.settings.north??0,o=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},r=[...n].sort((l,c)=>o(c)-o(l))[0];if(!r)return null;let a={...as(r,t),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((r.lu-.8+ce)/(ba+ce))),a.u=Math.round((r.lu-(a.cols*ba+(a.cols-1)*ce))/2*100)/100,a.v=Math.round(Math.max(0,r.ls-Bp-.3)*100)/100,a}function ya(s,t){let e=s.floors.flatMap(o=>o.rooms.flatMap(r=>r.points)),n=e.length?Math.max(...e.map(o=>o[0]))+3:0,i=e.length?Math.min(...e.map(o=>o[1])):0;return{id:t,face:Ze,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(s.settings.north??0)||0,look:"black",entity:null}}function wa(s){return s.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function yt(s){let t=s.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>Z_(v,Dp(s,v,v.overhang??t.overhang)));let e=wa(s);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map(w=>w[0])),i=e.rooms.flatMap(v=>v.points.map(w=>w[1])),o=s.settings.wall_exterior+t.overhang,r=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...i)-o,c=Math.max(...i)+o,d=e.elevation+e.height;if(t.type==="flat")return[Gp("main",null,r,l,a,c,d+jp)];let u=a-r>=c-l,h=t.ridge==="short"?!u:u,p=(h?c-l:a-r)/2,f=p*Math.tan(t.pitch*wn),_=(v,w,k)=>h?[v,d+k,(l+c)/2+w]:[(r+a)/2+w,d+k,v],[g,y]=h?[r,a]:[l,c];return[-1,1].map(v=>ss(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",_(g,v*p,0),_(y,v*p,0),_(g,0,f),t.pitch,()=>[0,y-g]))}function Z_(s,t){let e=ee(s),n=Pe(s),i=(w,k,S)=>{let[$,x]=e.at(w,k);return[$,S,x]},o=Math.max(0,t.a),r=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(s.shape==="flat"||s.shape==="parapet"){let w=e.at(a,-o),k=e.at(l,e.w+r);return[Gp(s.id,s.id,Math.min(w[0],k[0]),Math.min(w[1],k[1]),Math.max(w[0],k[0]),Math.max(w[1],k[1]),s.eave_a+jp)]}if(s.shape==="pent")return[ss(`${s.id}:a`,s.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,e.w+r,n.y(e.w+r)),s.pitch_a,()=>[0,c])];let d=ma(s),u=d?ga(s,d):null,h=s.shape==="pyramid"||d?.[0]==="hip",p=s.shape==="pyramid"||d?.[1]==="hip",f=s.shape==="pyramid"?(e.u1-e.u0)/2:h?u.d0:0,_=s.shape==="pyramid"?(e.u1-e.u0)/2:p?u.d1:0,g=h?e.u0+f-a:0,y=p?l-(e.u1-_):0,v=[];if(n.vr>.3){let w=Math.hypot(n.vr+o,n.rh-n.y(-o));v.push(ss(`${s.id}:a`,s.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,n.vr,n.rh),s.pitch_a,k=>[g*(k/w),c-y*(k/w)]))}if(e.w-n.vr>.3){let w=Math.hypot(e.w+r-n.vr,n.rh-n.y(e.w+r));v.push(ss(`${s.id}:b`,s.id,"b",i(l,e.w+r,n.y(e.w+r)),i(a,e.w+r,n.y(e.w+r)),i(l,n.vr,n.rh),s.pitch_b,k=>[y*(k/w),c-g*(k/w)]))}if(h||p){let w=n.y(-o),k=n.y(e.w+r),S=[];h&&S.push([`${s.id}:c`,"c",i(a,e.w+r,k),i(a,-o,w),i(e.u0+f,n.vr,n.rh)]),p&&S.push([`${s.id}:d`,"d",i(l,-o,w),i(l,e.w+r,k),i(e.u1-_,n.vr,n.rh)]);for(let[$,x,R,L,C]of S){let E=tb($,s.id,x,R,L,C);E&&v.push(E)}}return v}function tb(s,t,e,n,i,o){let r=Di(yn(i,n));if(r<.3)return null;let a=Je(yn(i,n)),l=yn(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Di(d);if(u<.3)return null;let h=Je(d),p=Je(Yp(a,h));p[1]<0&&(p=[-p[0],-p[1],-p[2]]);let f=Je([-h[0],0,-h[2]]),_=Math.atan2(h[1],Math.hypot(h[0],h[2]))/wn;return{key:s,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:p,lu:r,ls:u,pitch:_,span:y=>{let v=Math.min(1,Math.max(0,y/u));return[c*v,r-(r-c)*v]},facing:[f[0],f[2]]}}function ss(s,t,e,n,i,o,r,a){let l=Je(yn(i,n)),c=Je(yn(o,n)),d=Je(Yp(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=Je([-c[0],0,-c[2]]);return{key:s,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:d,lu:Di(yn(i,n)),ls:Di(yn(o,n)),pitch:r,span:a,facing:[u[0],u[2]]}}function Gp(s,t,e,n,i,o,r){let a=i-e>=o-n,l=a?i-e:o-n,c=a?o-n:i-e;return{key:`${s}:top`,section:t,side:"top",flat:!0,o:[e,r,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function ti(s){let t=s.module_w||Bp,e=s.module_h||ba;return s.portrait===!1?[e,t]:[t,e]}function Wi(s){return s.layout?.length?s.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,s.rows)},()=>Math.max(1,s.cols))}function ka(s,t){return s.flat?Math.min(45,Math.max(0,t.tilt??15))*wn:s.wall?Math.min(90,Math.max(0,t.tilt??0))*wn:0}function ei(s,t){let[e,n]=ti(t),i=Wi(t),o=Math.max(1,...i),a=(i.length-1)*xa(s,t)+n*Math.cos(ka(s,t));return[o*e+(o-1)*ce,a]}function xa(s,t){let[,e]=ti(t),n=ka(s,t);return s.wall?e*Math.cos(n)+ce:s.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+ce}function Ce(s,t,e=!1){let[n,i]=ti(t),o=[],r=ka(s,t),a=i*Math.cos(r),l=xa(s,t),c=Wi(t),d=Math.max(1,...c),u=new Set(t.skip??[]),h=!!s.wall&&n>s.lu+1e-6,p=(_,g,y)=>[s.o[0]+s.eu[0]*_+s.es[0]*g+s.n[0]*y,s.o[1]+s.eu[1]*_+s.es[1]*g+s.n[1]*y,s.o[2]+s.eu[2]*_+s.es[2]*g+s.n[2]*y],f=(_,g)=>{if(s.unbounded)return!0;if(g<-1e-6||g>s.ls+1e-6)return!1;let[y,v]=s.span(g);return _>=y-1e-6&&_<=v+1e-6};return c.forEach((_,g)=>{let y=t.align==="right"?d-_:t.align==="center"?(d-_)/2:0;for(let v=0;v<_;v++){let w=`${g}:${v}`,k=u.has(w);if(k&&!e)continue;let S=t.u+(v+y)*(n+ce),$=t.v+g*l,x=S+n,R=$+(s.flat||s.wall?a:i);if(h){if(!(f((S+x)/2,$)&&f((S+x)/2,R)))continue}else if(![[S,$],[x,$],[x,R],[S,R]].every(([T,F])=>f(T,F)))continue;if(s.wall&&r>.001){let T=vn+i*Math.sin(r),[F,D]=t.flip?[T,vn]:[vn,T],W=[p(S,$,F),p(x,$,F),p(x,R,D),p(S,R,D)],H=t.flip?$:R,N=[S+.05,x-.05].map(q=>[p(q,H,0),p(q,H,T)]);o.push({corners:W,posts:N,cell:w,skipped:k});continue}if(!s.flat){o.push({corners:[p(S,$,vn),p(x,$,vn),p(x,R,vn),p(S,R,vn)],posts:[],cell:w,skipped:k});continue}let L=.15,C=L+i*Math.sin(r),[E,O]=t.flip?[R,$]:[$,R],I=[p(S,E,L),p(x,E,L),p(x,O,C),p(S,O,C)];o.push({corners:I,posts:[S+.05,x-.05].flatMap(T=>[[p(T,E,0),p(T,E,L)],[p(T,O,0),p(T,O,C)]]),cell:w,skipped:k})}}),o}function rs(s,t){let e=[s.eu[0],s.eu[2]],n=[s.es[0],s.es[2]],i=[t[0]-s.o[0],t[1]-s.o[2]],o=e[0]*n[1]-e[1]*n[0];if(Math.abs(o)<1e-9)return null;let r=(i[0]*n[1]-i[1]*n[0])/o,a=(e[0]*i[1]-e[1]*i[0])/o;if(a<0||a>s.ls)return null;let[l,c]=s.span(a);return r>=l&&r<=c?{u:r,s:a}:null}function qp(s,t){let e=null;for(let n of s){if(n.wall){let r=[t[0]-n.o[0],t[1]-n.o[2]],a=r[0]*n.eu[0]+r[1]*n.eu[2],l=r[0]*n.n[0]+r[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=rs(n,t);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!e||o>e.y)&&(e={face:n,...i,y:o})}return e?{face:e.face,u:e.u,s:e.s}:null}function ni(s,t){if(s.unbounded)return{u:t.u,v:t.v};let[e,n]=ei(s,t),i=r=>Math.floor(r*100+1e-6)/100;return{u:s.wall&&e>s.lu?Math.round((s.lu-e)/2*100)/100:i(Math.min(Math.max(0,t.u),Math.max(0,s.lu-e))),v:i(Math.min(Math.max(0,t.v),Math.max(0,s.ls-n)))}}function as(s,t){let e={id:t,face:s.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:s.flat?15:null,flip:!1,entity:null,look:"black"},[n]=ti(e),i=.4,o=xa(s,e),[r,a]=s.span(s.ls/2);for(e.cols=Math.max(1,Math.floor((a-r-2*i+ce)/(n+ce))),e.rows=Math.max(1,Math.min(4,Math.floor((s.ls-2*i)/o)));e.cols>1&&Ce(s,{...e,u:va(s,e),v:i}).length<e.rows*e.cols;)e.cols--;return e.u=va(s,e),e.v=i,e}function $a(s,t){let e={...t,face:s.key,tilt:s.flat?t.tilt??15:null,rotation:null,flip:!1};return s.wall&&Object.assign(e,eb(s,e)),e.u=va(s,e),e.v=.4,{...e,...ni(s,e)}}function eb(s,t){let e=i=>Math.floor((s.lu+ce+1e-6)/(ti({...t,portrait:i})[0]+ce)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...Wi(t)),e(n!==!1))),layout:void 0,skip:void 0}}function va(s,t){let[e]=ti(t),n=t.cols*e+(t.cols-1)*ce;return Math.round((s.lu-n)/2*100)/100}function Ma(s,t){let e=(Math.atan2(s.facing[0],-s.facing[1])/wn-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function ls(s,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/wn-t+720)%360,o=Math.cos((i-180)*wn);return n.lu*n.ls*(1.2+o)};return[...s].sort((n,i)=>e(i)-e(n))[0]??null}function yn(s,t){return[s[0]-t[0],s[1]-t[1],s[2]-t[2]]}function Di(s){return Math.hypot(s[0],s[1],s[2])}function Je(s){let t=Di(s)||1;return[s[0]/t,s[1]/t,s[2]/t]}function Yp(s,t){return[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]]}var Xp=.78,Qp=1.18;function ii(s){return{id:s.id,face:s.face,u:s.u,v:s.v,rows:1,cols:1,portrait:!0,module_w:s.w||Xp,module_h:s.h||Qp}}function Jp(s,t){let e=Ce(s,ii(t))[0];if(!e)return null;let n=i=>[i[0]-s.n[0]*.05,i[1]-s.n[1]*.05,i[2]-s.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Sa(s,t){let e=Xp,n=Qp,[i,o]=s.span(s.ls/2);return{id:t,face:s.key,u:Math.round((i+o-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(s.ls-n,s.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Vi(s,t,e){let n=Kp(s,t),[i,o]=ei(n,t),r=n.eu[0]*(t.u+i/2)+n.es[0]*(t.v+o/2),a=n.eu[2]*(t.u+i/2)+n.es[2]*(t.v+o/2),l=e*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],u=r*c[0]+a*c[1]-i/2,h=r*d[0]+a*d[1]-o/2,p=f=>Math.round(f*100)/100;return{u:p(u),v:p(h),rotation:(Math.round(e)%360+360)%360}}function Ni(s,t){let[e,n]=ei(s,t);return[s.o[0]+s.eu[0]*(t.u+e/2)+s.es[0]*(t.v+n/2),s.o[2]+s.eu[2]*(t.u+e/2)+s.es[2]*(t.v+n/2)]}function Ea(s,t,e){let n=e[0]*s.n[0]+e[1]*s.n[1]+e[2]*s.n[2];if(Math.abs(n)<1e-6)return null;let i=((s.o[0]-t[0])*s.n[0]+(s.o[1]-t[1])*s.n[1]+(s.o[2]-t[2])*s.n[2])/n;if(i<=0)return null;let o=[t[0]+e[0]*i-s.o[0],t[1]+e[1]*i-s.o[1],t[2]+e[2]*i-s.o[2]],r=o[0]*s.eu[0]+o[1]*s.eu[1]+o[2]*s.eu[2],a=o[0]*s.es[0]+o[1]*s.es[1]+o[2]*s.es[2];return{t:i,u:r,s:a}}function Zp(s,t,e){if(s.unbounded)return!0;if(e<0||e>s.ls)return!1;let[n,i]=s.span(e);return t>=n&&t<=i}function th(s,t,e,n){for(let i of Ce(s,t)){let o=i.corners.map(d=>{let u=[d[0]-s.o[0],d[1]-s.o[1],d[2]-s.o[2]];return[u[0]*s.eu[0]+u[1]*s.eu[1]+u[2]*s.eu[2],u[0]*s.es[0]+u[1]*s.es[1]+u[2]*s.es[2]]}),[r,a]=[Math.min(...o.map(d=>d[0])),Math.max(...o.map(d=>d[0]))],[l,c]=[Math.min(...o.map(d=>d[1])),Math.max(...o.map(d=>d[1]))];if(e>=r-.05&&e<=a+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}function rh(s){let t=new Map,e=new Set(s.map(n=>n.powerEntity));for(let n of s)n.circuit&&n.circuit!==n.powerEntity&&e.has(n.circuit)&&t.set(n.circuit,(t.get(n.circuit)??0)+n.power);return s.map(n=>Math.max(0,n.power-(t.get(n.powerEntity)??0)))}var de=.03,cs=s=>s&&s!=="none"?s:null;function Ra(s,t=e=>cs(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of s.floors)for(let i of n.furniture){let o=t(i),r=Et(i.type);if(r==="meter")e.grid??=o,e.gridExport??=cs(i.export);else if((r==="inverter"||r==="solar")&&o&&!e.solar.includes(o))e.solar.push(o);else if(r==="home_battery"){o&&!e.battery.includes(o)&&e.battery.push(o);let a=cs(i.charge);a&&!e.charge.includes(a)&&e.charge.push(a),(o||a)&&e.batteries.push({power:o,charge:a});let l=cs(i.soc);l&&!e.soc.includes(l)&&e.soc.push(l)}}return e}function Ia(s){for(let t of s.floors){let e=t.furniture.find(n=>Et(n.type)==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return s.energy.meter}function ah(s){let t=n=>s.energy_sources?.find(i=>i.type===n)?.stat_energy_from??null,e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function ds(s,t,e="power"){if(!t)return null;let n=s.entities?.[t]?.device_id;if(!n)return null;let i=Object.keys(s.states).filter(a=>a.startsWith("sensor.")&&s.entities?.[a]?.device_id===n&&s.states[a]?.attributes.device_class===e);if(i.length<=1)return i[0]??null;let o=i.filter(a=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(a)),r=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(a=>r&&a.includes(r))??o[0]??i[0]}function lh(s,t){let e={};for(let n of t.energy_sources??[])if(n.type==="grid"){let i=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,o=ds(s,i);o&&!e.grid&&(e.grid=o)}else if(n.type==="solar"){let i=ds(s,n.stat_energy_from);i&&!e.solar&&(e.solar=i)}else if(n.type==="battery"){let i=ds(s,n.stat_energy_from??n.stat_energy_to);i&&!e.battery&&(e.battery=i);let o=ds(s,n.stat_energy_from??n.stat_energy_to,"battery");o&&!e.battery_soc&&(e.battery_soc=o)}return e}var ch=.07;function De(s,t=!1){if(!s)return null;let e=Number(s.state);if(!Number.isFinite(e))return null;let n=String(s.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function nb(s,t){return t.startsWith("sensor.")&&s.states[t]?.attributes.device_class==="power"}function si(s,t){if(nb(s,t))return t;let e=s.entities?.[t]?.device_id;if(!e)return null;let n=Cd(s,e),i=re(s,t),o=Mr(s,e).filter(l=>l!==t),r=`sensor.${t.slice(t.indexOf(".")+1)}_power`;if(o.includes(r))return r;let a=o.find(l=>i!==null&&re(s,l)===i);return a||n?a??null:o.find(l=>i===null||re(s,l)===null||re(s,l)===i)??null}function dh(s,t,e,n=Ra(t)){let i=t.energy,o=i.grid??n.grid,r=o?De(s.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let _=Math.max(0,De(s.states[n.gridExport])??0);r=Math.max(0,r??0)-_}let a=i.solar?De(s.states[i.solar]):null;if(!i.solar&&n.solar.length){let _=n.solar.map(g=>De(s.states[g])).filter(g=>g!==null);a=_.length?_.reduce((g,y)=>g+y,0):null}let l=i.battery?De(s.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let _=n.batteries.map(g=>{if(g.charge){let y=g.power?Math.max(0,De(s.states[g.power])??0):0,v=Math.max(0,De(s.states[g.charge])??0);return y-v}return g.power?De(s.states[g.power],i.battery_invert):null}).filter(g=>g!==null);l=_.length?_.reduce((g,y)=>g+y,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(_=>Number(s.states[_]?.state)).filter(_=>Number.isFinite(_)),u=d.length?d.reduce((_,g)=>_+g,0)/d.length:NaN,h=i.tariff?s.states[i.tariff]:void 0,p=Number(h?.state),f=i.consumption?De(s.states[i.consumption]):null;return f!==null?f=Math.max(0,f):r!==null||a!==null||l!==null?f=Math.max(0,(r??0)+Math.max(0,a??0)+(l??0)):e.length&&(f=rh(e).reduce((_,g)=>_+g,0)),{grid:r,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:h&&Number.isFinite(p)?{value:p,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:f}}function kn(s,t){return s.pos.push(t),s.adj.push([]),s.pos.length-1}function tn(s,t,e){let n=Math.hypot(s.pos[t][0]-s.pos[e][0],s.pos[t][1]-s.pos[e][1]);s.adj[t].push({to:e,w:n}),s.adj[e].push({to:t,w:n})}function ib(s,t){let e=s.length,n=s.map((i,o)=>{let r=s[(o+1)%e],a=r[0]-i[0],l=r[1]-i[1],c=Math.hypot(a,l)||1,d=-l/c,u=a/c;return{p:[i[0]+d*t[o],i[1]+u*t[o]],d:[a/c,l/c],n:[d,u]}});return s.map((i,o)=>{let r=n[(o-1+e)%e],a=n[o],l=r.d[0]*a.d[1]-r.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[o],i[1]+a.n[1]*t[o]];let c=((a.p[0]-r.p[0])*a.d[1]-(a.p[1]-r.p[1])*a.d[0])/l;return[r.p[0]+r.d[0]*c,r.p[1]+r.d[1]*c]})}function ob(s){return Rt(s.points)>=0?{pts:s.points,flipped:!1}:{pts:[...s.points].reverse(),flipped:!0}}function Fa(s,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=Ct(s.rooms,{exterior:t,interior:e},s.walls??[]);for(let o of s.rooms){if(o.points.length<3)continue;let{pts:r,flipped:a}=ob(o),l=r.length,c=r.map((h,p)=>{let f=a?(l-2-p+l)%l:p,_=i.some(g=>!g.exterior&&g.sources.some(y=>y.room_id===o.id&&y.edge===f));return ch+(_?e/2:0)}),d=ib(r,c).map(h=>kn(n,h)),u=d.map((h,p)=>[h,d[(p+1)%l]]);for(let[h,p]of u)tn(n,h,p);n.rings.set(o.id,u)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let r=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],a=ji(n,o.roomLeft,r),l=ji(n,o.roomRight,r);a!==null&&l!==null&&tn(n,a,l)}return rb(n),n}var sb=1;function rb(s){let t=[...s.rings.entries()];for(;;){let e=new Array(s.pos.length).fill(-1),n=0;for(let r=0;r<s.pos.length;r++){if(e[r]>=0)continue;let a=[r];for(e[r]=n;a.length;)for(let{to:l}of s.adj[a.pop()])e[l]<0&&(a.push(l),e[l]=n);n++}if(n<2)return;let i=null;for(let[,r]of t)for(let a of new Set(r.flat()))for(let[l,c]of t)if(e[c[0][0]]!==e[a])for(let[d,u]of c){let h=s.pos[a],p=s.pos[d],f=s.pos[u],_=f[0]-p[0],g=f[1]-p[1],y=Math.min(1,Math.max(0,((h[0]-p[0])*_+(h[1]-p[1])*g)/(_*_+g*g||1))),v=Math.hypot(h[0]-p[0]-_*y,h[1]-p[1]-g*y);(!i||v<i.d)&&(i={a,room:l,d:v})}if(!i||i.d>sb+2*ch)return;let o=ji(s,i.room,s.pos[i.a]);if(o===null)return;tn(s,i.a,o)}}function ji(s,t,e){let n=s.rings.get(t);if(!n)return null;let i=null;for(let r of n){let a=s.pos[r[0]],l=s.pos[r[1]],c=l[0]-a[0],d=l[1]-a[1],u=c*c+d*d||1,h=Math.min(1,Math.max(0,((e[0]-a[0])*c+(e[1]-a[1])*d)/u)),p=[a[0]+c*h,a[1]+d*h],f=Math.hypot(e[0]-p[0],e[1]-p[1]);(!i||f<i.d)&&(i={seg:r,q:p,d:f})}if(!i)return null;let o=kn(s,i.q);return tn(s,o,i.seg[0]),tn(s,o,i.seg[1]),o}function ps(s,t,e){let n=s.pos[e],i=ji(s,t.id,n);if(i===null)return!1;let o=s.pos[i],r=s.pos[s.adj[i][0].to],a=s.pos[s.adj[i][1].to],l=Math.hypot(a[0]-r[0],a[1]-r[1])||1,c=[(a[0]-r[0])/l,(a[1]-r[1])/l],d=(n[0]-o[0])*c[0]+(n[1]-o[1])*c[1],u=(n[1]-o[1])*c[0]-(n[0]-o[0])*c[1];if(Math.abs(d)<.01||Math.abs(u)<.01)return tn(s,e,i),!0;let h=[o[0]+c[0]*d,o[1]+c[1]*d],p=[o[0]-c[1]*u,o[1]+c[0]*u],f=kn(s,K(p,t.points)||!K(h,t.points)?p:h);return tn(s,i,f),tn(s,f,e),!0}function Ki(s,t){let e=s.rooms.filter(o=>o.points.length>=3),n=e.find(o=>K(t,o.points));if(n)return n;let i=null;for(let o of e)for(let r of o.points){let a=Math.hypot(t[0]-r[0],t[1]-r[1]);(!i||a<i.d)&&(i={room:o,d:a})}return i?.room??null}function uh(s,t){let e=s.pos.map(()=>1/0),n=s.pos.map(()=>-1),i=s.pos.map(()=>!1);for(e[t]=0;;){let o=-1;for(let r=0;r<e.length;r++)!i[r]&&e[r]<1/0&&(o<0||e[r]<e[o])&&(o=r);if(o<0)break;i[o]=!0;for(let{to:r,w:a}of s.adj[o])e[o]+a<e[r]-1e-9&&(e[r]=e[o]+a,n[r]=o)}return{dist:e,prev:n}}function eh(s,t){return s.every(e=>t[e].kind==="battery")?"battery":s.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var nh=new WeakMap;function ab(s,t){let e=Ia(s),n=s.floors.find(d=>d.id===e.floor_id),i=[],{wall_exterior:o,wall_interior:r}=s.settings,a=new Map,l=new Map;t.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=s.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,h=l.get(d.id),p=eh(h,t);i.push({floorId:n.id,a:[e.x,de,e.z],b:[e.x,u?n.height:-.2,e.z],dist:0,members:h,kind:p});let f=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[e.x,u?-.2:d.height,e.z],b:[e.x,de,e.z],dist:f,members:h,kind:p}),a.set(d.id,f+.25)}for(let d of c){let u=Fa(d,o,r),h=Ki(d,[e.x,e.z]);if(!h)continue;let p=kn(u,[e.x,e.z]);if(!ps(u,h,p))continue;let f=[];for(let w of l.get(d.id)){let k=t[w],S=Ki(d,[k.x,k.z]);if(!S)continue;let $=kn(u,[k.x,k.z]);ps(u,S,$)&&f.push({node:$,member:w})}let{dist:_,prev:g}=uh(u,p),y=new Map;for(let w of f)if(Number.isFinite(_[w.node]))for(let k=w.node;g[k]>=0;k=g[k]){let S=g[k],$=`${S}>${k}`,x=y.get($)??{a:S,b:k,members:[]};x.members.push(w.member),y.set($,x)}let v=a.get(d.id)??0;for(let{a:w,b:k,members:S}of y.values()){let $=u.pos[w],x=u.pos[k],R=eh(S,t);i.push({floorId:d.id,a:[$[0],de,$[1]],b:[x[0],de,x[1]],dist:v+_[w],members:S,kind:R})}}return i}function ph({building:s,consumers:t,summary:e,battery:n,fieldPower:i,devicePower:o}){let r=Ia(s);if(!r)return[];let a=s.floors.find(I=>I.id===r.floor_id);if(!a)return[];let l=I=>o?.get(I),c=us(s,"inverter"),d=us(s,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=I=>{let T=null;for(let F of c)F.floorId===I.floorId&&(!T||Math.hypot(F.x-I.x,F.z-I.z)<Math.hypot(T.x-I.x,T.z-I.z))&&(T=F);return T},h=(I,T)=>I.reduce((F,D)=>!F||Math.hypot(D.x-T.x,D.z-T.z)<Math.hypot(F.x-T.x,F.z-T.z)?D:F,null),p=I=>l(I.id)??(d.length===1?e.battery??0:0),f=new Map;for(let I of d){let T=u(I);T&&f.set(I.id,T)}let _=rh(t),g=t.map((I,T)=>({floorId:I.floorId,x:I.x,z:I.z,kind:I.wallbox?"wallbox":"consumer",power:_[T],load:_[T]}));for(let I of d){if(f.has(I.id)||e.battery===null)continue;let T=p(I);g.push({floorId:I.floorId,x:I.x,z:I.z,kind:"battery",power:Math.abs(T),load:-T})}let y=`${r.floor_id}:${r.x},${r.z}|${g.map(I=>`${I.floorId}:${I.x},${I.z}:${I.kind}`).join(";")}`,v=nh.get(s);v||nh.set(s,v=new Map);let w=v.get(y);w||(w=ab(s,g),v.clear(),v.set(y,w));let k=w.map(I=>({floorId:I.floorId,a:I.a,b:I.b,dist:I.dist,power:I.kind==="battery"?I.members.reduce((T,F)=>T+g[F].power,0):Math.max(0,I.members.reduce((T,F)=>T+g[F].load,0)),kind:I.kind})),S=e.grid!==null?Aa(s):null,$=s.settings.roof.cables??[],x=I=>$.find(T=>T.id===I),R=(I,T)=>I.map(F=>({...F,key:T}));if(S){let I=e.grid>=0,T=x("grid"),F=T?Bi(s,T,[S.end[0],a.elevation+Math.max(de,S.height),S.end[1]],[r.x,a.elevation+.4+1.1,r.z]):[...S.height>.05?[[S.end[0],S.height,S.end[1]]]:[],[S.end[0],de,S.end[1]],[S.wall[0],de,S.wall[1]],[r.x,de,r.z]],D=T?oi(s,I?F:[...F].reverse(),Math.abs(e.grid),I?"grid":"export",a):fh(a.id,I?F:[...F].reverse(),Math.abs(e.grid),I?"grid":"export",0);k.push(...R(D,"grid"))}if(e.battery!==null&&e.battery>0)for(let I of k)I.kind==="battery"&&([I.a,I.b]=[I.b,I.a]);let L=s.settings.roof.solar??[],C=s.settings.roof.strings??[],E=new Map;if(i&&L.length){let I=[...yt(s),...Re(s)];for(let T of L){let F=i.get(T.id)??0,D=T.string?C.find(j=>j.id===T.string)?.inverter:null,W=D?d.find(j=>j.id===D)??null:null,H=D&&!W?c.find(j=>j.id===D)??null:null;if(W){let j=f.get(W.id);j&&E.set(j.id,(E.get(j.id)??0)+F);let it=W.variant==="wall"?.5+W.h:.9,ut=x(`solar:${T.id}`),Nt=ut?oh(s,T):null,pt=s.floors.find(Ie=>Ie.id===W.floorId);ut&&Nt&&pt?k.push(...R(oi(s,Bi(s,ut,Nt,[W.x,pt.elevation+it,W.z]),F,"solar",pt),`solar:${T.id}`)):k.push(...R(sh(s,T,F,W,it),`solar:${T.id}`));continue}if(!H&&c.length){let j=Xt(s,T,I),it=j?Ni(j,T):[T.u,T.v];H=c.reduce((ut,Nt)=>!ut||Math.hypot(Nt.x-it[0],Nt.z-it[1])<Math.hypot(ut.x-it[0],ut.z-it[1])?Nt:ut,null)}H&&E.set(H.id,(E.get(H.id)??0)+F);let N=H??{floorId:r.floor_id,x:r.x,z:r.z},q=H?1.1+H.h:1.5,Y=x(`solar:${T.id}`),X=Y?oh(s,T):null,Q=s.floors.find(j=>j.id===N.floorId);Y&&X&&Q?k.push(...R(oi(s,Bi(s,Y,X,[N.x,Q.elevation+q,N.z]),F,"solar",Q),`solar:${T.id}`)):k.push(...R(sh(s,T,F,N,q),`solar:${T.id}`))}}let O=us(s,"solar");for(let I of O){let T=Math.max(0,l(I.id)??(L.length?0:(e.solar??0)/O.length)),F=u(I),D=F?null:h(d.filter(N=>N.floorId===I.floorId),I);if(F)E.set(F.id,(E.get(F.id)??0)+T);else if(D&&f.get(D.id)){let N=f.get(D.id);E.set(N.id,(E.get(N.id)??0)+T)}let W=F??D??{floorId:r.floor_id,x:r.x,z:r.z,h:0,variant:null},H=F?1.1+F.h:D?D.variant==="wall"?.5+D.h:.9:1.5;k.push(...R(Pa(s,I,Math.min(.3,I.h),W,H,T,"solar",0),`solar:${I.id}`))}!(i&&L.length)&&e.solar!==null&&!c.length&&!O.length&&k.push({floorId:a.id,a:[r.x+.08,a.height+.6,r.z+.08],b:[r.x+.08,de,r.z+.08],dist:0,power:e.solar,kind:"solar"});for(let I of c){let T=1.1+I.h,F=d.filter(H=>f.get(H.id)===I),D=l(I.id);if(D===void 0){D=E.get(I.id)??(c.length===1?e.solar??0:0);for(let H of F)D+=p(H)}let W=s.floors.find(H=>H.id===I.floorId);if(e.solar!==null||e.battery!==null){let H=x(`inv:${I.id}`),N=H&&W?oi(s,Bi(s,H,[I.x,W.elevation+T,I.z],[r.x,a.elevation+1.5,r.z]),Math.max(0,D),"inverter",W):Pa(s,I,T,{floorId:r.floor_id,x:r.x,z:r.z},1.5,Math.max(0,D),"inverter",0);k.push(...R(N,`inv:${I.id}`))}for(let H of F){let N=p(H);if(e.battery===null&&l(H.id)===void 0)continue;let q=H.variant==="wall"?.5+H.h:.9,Y=x(`bat:${H.id}`),X=Y&&W?oi(s,Bi(s,Y,[I.x,W.elevation+T-.1,I.z],[H.x,W.elevation+q,H.z]),Math.abs(N),"battery",W):Pa(s,I,T-.1,H,q,Math.abs(N),"battery",0);k.push(...R(N<=0?X:X.map(Q=>({...Q,a:Q.b,b:Q.a})).reverse(),`bat:${H.id}`))}}return k}function Aa(s){let t=Ia(s),e=t?s.floors.find(p=>p.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:i}=s.settings,{walls:o}=Ct(e.rooms,{exterior:n,interior:i},e.walls??[]),r=us(s,"grid_point")[0],a=o.filter(p=>p.exterior);if(r){let p=null;for(let g of a){let y=g.b[0]-g.a[0],v=g.b[1]-g.a[1],w=r.x-t.x,k=r.z-t.z,S=w*v-k*y;if(Math.abs(S)<1e-9)continue;let $=((g.a[0]-t.x)*v-(g.a[1]-t.z)*y)/S,x=((g.a[0]-t.x)*k-(g.a[1]-t.z)*w)/S;if($<=0||$>1||x<0||x>1||p&&$>=p.t)continue;let R=Math.hypot(y,v)||1;p={q:[t.x+w*$,t.z+k*$],out:[v/R,-y/R],t:$}}let f=p?[p.q[0]+p.out[0]*(n/2+.05),p.q[1]+p.out[1]*(n/2+.05)]:[t.x,t.z],_=s.floors.flatMap(g=>g.furniture).find(g=>g.id===r.id)?.mount_y??0;return{floorId:e.id,wall:f,end:[r.x,r.z],height:Math.max(0,_)}}let l=null;for(let p of a){let f=p.b[0]-p.a[0],_=p.b[1]-p.a[1],g=f*f+_*_||1,y=Math.min(1,Math.max(0,((t.x-p.a[0])*f+(t.z-p.a[1])*_)/g)),v=[p.a[0]+f*y,p.a[1]+_*y],w=Math.hypot(t.x-v[0],t.z-v[1]),k=Math.sqrt(g);(!l||w<l.d)&&(l={q:v,out:[_/k,-f/k],d:w})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let p of s.floors)for(let f of p.outdoor??[]){let _=f.points.length;for(let g=0;g<_;g++){let y=f.points[g],v=f.points[(g+1)%_],w=v[0]-y[0],k=v[1]-y[1],S=d[0]*k-d[1]*w;if(Math.abs(S)<1e-9)continue;let $=((y[0]-c[0])*k-(y[1]-c[1])*w)/S,x=((y[0]-c[0])*d[1]-(y[1]-c[1])*d[0])/S;$>0&&x>=0&&x<=1&&(u=Math.max(u,Math.min(15,$)))}}let h=u>n+1?u:n+2.5;return{floorId:e.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*h,c[1]+d[1]*h],height:0}}function us(s,t){let e=[];for(let n of s.floors)for(let i of n.furniture)(Et(i.type)??i.type)===t&&e.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return e}var ih=new WeakMap;function hh(s,t,e,n){let i=`${t.id}:${e.join(",")}>${n.join(",")}`,o=ih.get(s);o||ih.set(s,o=new Map);let r=o.get(i);if(r)return r;let{wall_exterior:a,wall_interior:l}=s.settings,c=Fa(t,a,l),d=[e,n],u=Ki(t,e),h=Ki(t,n);if(u&&h){let p=kn(c,e),f=kn(c,n);if(ps(c,u,p)&&ps(c,h,f)){let{dist:_,prev:g}=uh(c,p);if(Number.isFinite(_[f])){d.length=0;for(let y=f;y>=0;y=g[y])d.unshift(c.pos[y])}}}return o.set(i,d),d}function Pa(s,t,e,n,i,o,r,a){let l=s.floors.find(u=>u.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let c=hh(s,l,[t.x,t.z],[n.x,n.z]),d=[[t.x,e,t.z],...c.map(u=>[u[0],de,u[1]]),[n.x,i,n.z]];return fh(l.id,d,o,r,a)}function fh(s,t,e,n,i){let o=[];for(let r=0;r+1<t.length;r++){let a=t[r],l=t[r+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(o.push({floorId:s,a,b:l,dist:i,power:e,kind:n}),i+=c)}return o}function Bi(s,t,e,n){let o=(s.floors.find(r=>r.id===t.floor_id)?.elevation??0)+Math.max(de,t.height);return[e,...t.points.map(r=>[r[0],o,r[1]]),n]}function oh(s,t){let e=Xt(s,t,[...yt(s),...Re(s)]);if(!e)return null;let[n,i]=ei(e,t),o=t.u+n/2,r=e.unbounded?t.v+i/2:t.v;return[e.o[0]+e.eu[0]*o+e.es[0]*r,e.o[1]+e.eu[1]*o+e.es[1]*r,e.o[2]+e.eu[2]*o+e.es[2]*r]}function lb(s,t,e){let{wall_exterior:n,wall_interior:i}=s.settings,o=Fa(t,n,i),r=Ki(t,e),a=r?ji(o,r.id,e):null;return a===null?e:o.pos[a]}function oi(s,t,e,n,i){let o=[...s.floors].sort((c,d)=>c.elevation-d.elevation),r=c=>{let d=i;for(let u of o)c>=u.elevation-.01&&(d=u);return d},a=[],l=0;for(let c=0;c+1<t.length;c++){let d=t[c],u=t[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let p=[];if(Math.abs(u[1]-d[1])>.01){let f=Math.min(d[1],u[1]),_=Math.max(d[1],u[1]);for(let g of o)g.elevation>f+.01&&g.elevation<_-.01&&p.push(g.elevation);u[1]<d[1]&&p.reverse()}for(let f of[...p,u[1]]){let _=(f-d[1])/(u[1]-d[1]||1),g=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*_,f,d[2]+(u[2]-d[2])*_]:u,y=r((d[1]+g[1])/2),v=Math.hypot(g[0]-d[0],g[1]-d[1],g[2]-d[2]);v>1e-4&&a.push({floorId:y.id,a:[d[0],d[1]-y.elevation,d[2]],b:[g[0],g[1]-y.elevation,g[2]],dist:l,power:e,kind:n}),l+=v,d=g}}return a}function sh(s,t,e,n,i){let o=[...yt(s),...Re(s)],r=Xt(s,t,o),a=s.floors.find(g=>g.id===n.floorId);if(!r||!a)return[];let[l,c]=ei(r,t),d=(g,y)=>[r.o[0]+r.eu[0]*g+r.es[0]*y,r.o[1]+r.eu[1]*g+r.es[1]*y,r.o[2]+r.eu[2]*g+r.es[2]*y],u=t.u+l/2,h=a.elevation+de,p=[],f;if(r.unbounded){let g=d(u,t.v+c/2);f=[g[0],h,g[2]],p.push(f)}else if(r.wall){let g=d(u,t.v);f=[g[0],h,g[2]],p.push(g,f)}else{let g=d(u,t.v),y=wa(s)??a,v=Math.max(a.elevation+.5,Math.min(g[1]-.25,y.elevation+y.height-.12));f=[g[0],v,g[2]],p.push(g)}let _=lb(s,a,[f[0],f[2]]);p.push([_[0],f[1],_[1]]),Math.abs(f[1]-h)>.05&&p.push([_[0],h,_[1]]);for(let g of hh(s,a,_,[n.x,n.z]).slice(1))p.push([g[0],h,g[1]]);return p.push([n.x,a.elevation+i,n.z]),oi(s,p,e,"solar",a)}var mh=(s,t)=>t.startsWith("sensor.")&&s.states[t]?.attributes.device_class==="energy";function gh(s,t,e){if(e==="none")return null;if(e)return e;let n=t.replace(/^sensor\./,"").replace(/_?power$/,""),i=`sensor.${n}_energy`;if(mh(s,i))return i;let o=s.entities?.[t]?.device_id;if(!o)return null;let r=Object.keys(s.states).filter(a=>mh(s,a)&&s.entities?.[a]?.device_id===o);return r.length===1?r[0]:r.find(a=>a.startsWith(`sensor.${n}_`))??null}var _h=["default","none","toggle","more_info","camera","navigate","url","perform_action"];function bh(s,t,e){return s!=="perform_action"||e||t?.action==="perform_action"}function vh(s,t){return s?.action==="perform_action"&&!t}var Ta=["tap","hold","double_tap"];function cb(s){return!!s&&Ta.some(t=>!!s[t]&&s[t].action!=="default")}function yh(s,t,e){let n={...s??{}};return e&&e.action!=="default"?n[t]=e:delete n[t],cb(n)?n:null}function wh(s){if(!s.trim())return null;let t=JSON.parse(s);if(!t||typeof t!="object"||Array.isArray(t))throw new TypeError("not an object");return t}var xh=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],db={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},ub={back:0,right:90,front:180,left:270};function $h(s,t,e){let n=Mt(s.points),i=n.x1-n.x0,o=n.z1-n.z0,r=db[t],a=[],l=(d,u,h,p,f)=>{let[_,g,y]=f??me[d];a.push({id:e(),type:d,x:kh(u),z:kh(h),rotation:p,w:_,d:g,h:y,variant:null,entity:null,power:null})},c=.02;for(let d of r.rows){let u=d.items.map(g=>({type:g.type,size:g.size??me[g.type]})),h=d.wall==="back"||d.wall==="front"?i:o,p=[],f=0;for(let g of u){if(f+g.size[0]>h-.1)break;p.push(g),f+=g.size[0]}let _=d.align==="start"?.05:d.align==="end"?h-f-.05:(h-f)/2;for(let g of p){let[y,v]=g.size,w=_+y/2,k=v/2+c;d.wall==="back"?l(g.type,n.x0+w,n.z0+k,0,g.size):d.wall==="front"?l(g.type,n.x1-w,n.z1-k,180,g.size):d.wall==="right"?l(g.type,n.x1-k,n.z0+w,90,g.size):l(g.type,n.x0+k,n.z1-w,ub.left,g.size),_+=y}}for(let d of r.free){let[u,h]=d.size??me[d.type],p=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*d.at[0])),f=Math.min(n.z1-h/2-.05,Math.max(n.z0+h/2+.05,n.z0+o*d.at[1]));l(d.type,p,f,d.rotation,d.size)}return a}var kh=s=>Math.round(s*1e3)/1e3;var za=.3,Mh=.01;function Sh(s,t,e){let n=_e(s,t,e);return n?[Jt(n.room,n.edge,s.offset-s.width/2),Jt(n.room,n.edge,s.offset+s.width/2)]:null}function Oa(s,t){let[e,n]=s,i=Math.hypot(n[0]-e[0],n[1]-e[1])||1,o=(n[0]-e[0])/i,r=(n[1]-e[1])/i,a=t[0]-e[0],l=t[1]-e[1];return{s:a*o+l*r,d:Math.abs(a*-r+l*o),len:i}}function pb(s,t,e,n){for(let i of t){let o=Sh(i,e,n);if(!o)continue;let r=Oa(s,o[0]),a=Oa(s,o[1]);if(r.d>za||a.d>za)continue;let l=Math.min(r.s,a.s),c=Math.max(r.s,a.s);if(l<r.len-Mh&&c>Mh)return i}return null}function Eh(s,t,e,n,i){let o=pb(t,e,n,i);if(!o)return null;let r=Sh(o,n,i),a=Oa(r,s);return a.s>=0&&a.s<=a.len&&a.d<=za?{select:o}:{blocked:o}}function Ph(s,t,e){let n=s.points[t],i=s.points[(t+1)%s.points.length],o=(Math.atan2(n[0]-i[0],-(n[1]-i[1]))*180/Math.PI-e+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(o/45)%8]}var Rh=s=>s.trim().toLocaleLowerCase();function Ih(s,t,e,n){let i=s.trim();if(!i)return{name:n,area_id:null};let o=t.find(r=>Rh(r.name)===Rh(i)&&!e.has(r.area_id));return o?{name:o.name,area_id:o.area_id}:{name:i,area_id:null}}function Fh(s,t,e){return s.filter(n=>!t.has(n.area_id)).sort((n,i)=>+(i.floor_id===e&&!!e)-+(n.floor_id===e&&!!e)||n.name.localeCompare(i.name)).map(n=>n.name)}function Ah(s){let t=s.points.length,e=0,n=0;for(let i=0;i<t;i++){let o=s.wall_heights?.[i]??null;(Array.isArray(o)?o.some(r=>r===0):o===0)&&e++,s.wall_slopes?.[i]&&n++}return{walls:t,open:e,sloping:n}}function zh(s,t,e){let n=i=>K(i,t)&&!K(i,e);return{furniture:s.furniture.filter(i=>n([i.x,i.z])).map(i=>i.id),devices:s.placements.filter(i=>n([i.x,i.z])).map(i=>i.entity_id)}}var ne=1e-6,Th=s=>Math.round(s*1e3)/1e3;function Oh(s,t,e){let n=s.rooms.find(u=>u.id===t);if(!n||!dn(n.points)||!dn(e))return null;let i=Mt(n.points),o=Mt(e),r=u=>u[0]>=i.x0-ne&&u[0]<=i.x1+ne&&u[1]>=i.z0-ne&&u[1]<=i.z1+ne,a=[{lo:i.x0,hi:i.x1,dlo:o.x0-i.x0,dhi:o.x1-i.x1,span:[i.z0,i.z1]},{lo:i.z0,hi:i.z1,dlo:o.z0-i.z0,dhi:o.z1-i.z1,span:[i.x0,i.x1]}],l=u=>a.map((h,p)=>Th(u[p]+(Math.abs(h.dlo-h.dhi)<ne||u[p]-h.lo<=h.hi-u[p]?h.dlo:h.dhi))),c={furniture:0,devices:0,walls:0};for(let u of s.furniture){if(u.locked||!r([u.x,u.z]))continue;let[h,p]=l([u.x,u.z]);h===u.x&&p===u.z||(Object.assign(u,{x:h,z:p}),c.furniture++)}for(let u of s.placements){if(u.locked||!r([u.x,u.z]))continue;let[h,p]=l([u.x,u.z]);h===u.x&&p===u.z||(Object.assign(u,{x:h,z:p}),c.devices++)}let d=u=>{for(let h=0;h<2;h++){let p=a[h];if(Math.abs(p.dlo-p.dhi)<ne)continue;let f=u[1-h];if(!(f<p.span[0]-ne||f>p.span[1]+ne))for(let[_,g]of[[p.lo,p.dlo],[p.hi,p.dhi]]){if(Math.abs(g)<ne||Math.abs(u[h]-_)>ne)continue;let y=[...u];return y[h]=Th(u[h]+g),y}}return null};for(let u of s.rooms){if(u.id===t)continue;let h=u.points.map(f=>[...f]),p=!1;u.points.forEach((f,_)=>{let g=u.points[(_+1)%u.points.length],[y,v]=[d(f),d(g)];!y||!v||Math.hypot(f[0]-g[0],f[1]-g[1])<ne||Math.abs(y[0]-f[0]-(v[0]-g[0]))>ne||Math.abs(y[1]-f[1]-(v[1]-g[1]))>ne||(h[_]=y,h[(_+1)%u.points.length]=v,p=!0)}),p&&(u.points=h,c.walls++)}for(let u of s.walls??[]){let h=d(u.a),p=d(u.b);h&&(u.a=h),p&&(u.b=p),(h||p)&&c.walls++}return n.points=e.map(u=>[...u]),c}var hs=["body","fabric","cushion","wood","white","metal","dark","glass","plant","pot","accent","paint"];var Hh=/^#[0-9a-f]{6}$/i,Lh=[{id:"white",hex:"#f2f2ee"},{id:"black",hex:"#1b1c1f"},{id:"silver",hex:"#b9bdc3"},{id:"grey",hex:"#6c7075"},{id:"blue",hex:"#2f63b5"},{id:"red",hex:"#b3262d"},{id:"green",hex:"#2f6b45"},{id:"orange",hex:"#e08a1e"},{id:"bronze",hex:"#7d5a3a"},{id:"dark_blue",hex:"#17274a"}];function Ch(s){let t=s.trim().replace(/^#/,"").toLowerCase();return/^[0-9a-f]{3}$/.test(t)?`#${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:/^[0-9a-f]{6}$/.test(t)?`#${t}`:null}function Dh(s,t){let e=s?.[t];return typeof e=="string"&&Hh.test(e)?e:null}var Ha=[{id:"oak",hex:"#c09a6b"},{id:"walnut",hex:"#5c4033"},{id:"rattan",hex:"#c8a46e"},{id:"white_gloss",hex:"#f4f4f1"},{id:"black",hex:"#222326"},{id:"grey_fabric",hex:"#8a8c8f"},{id:"beige_fabric",hex:"#d6c8ae"},{id:"navy_fabric",hex:"#2e3f66"},{id:"green_velvet",hex:"#3f6b4f"},{id:"brass",hex:"#b5a14a"},{id:"chrome",hex:"#c8ccd2"},{id:"terracotta",hex:"#c0643f"},{id:"black_brown",hex:"#3a2f2a"},{id:"white_stained_oak",hex:"#dccfb8"},{id:"birch",hex:"#dcc39a"},{id:"pine",hex:"#d8b27a"},{id:"acacia",hex:"#8a5a36"},{id:"anthracite",hex:"#45484c"}],hb={radiator:"white metal",ac_unit:"white dark",sofa:"fabric cushion wood",sofa_l:"fabric cushion wood",sofa_u:"fabric cushion wood",armchair:"fabric cushion wood",stool:"fabric cushion wood",coffee_table:"body wood",tv_board:"body metal dark",tv_wall:"metal dark",sideboard:"wood metal",shelf:"body fabric cushion wood",plant:"wood plant pot",rug:"fabric",table:"body wood",table_round:"wood metal",chair:"cushion wood",bench:"cushion wood",corner_bench:"cushion wood",bar_stool:"fabric cushion metal",kitchen:"body white dark",kitchen_wall:"body",kitchen_tall:"body dark",island:"body white dark",worktop:"white",sink:"body white metal dark",stove:"body dark",dishwasher:"body white dark",fridge:"white",bed:"fabric cushion wood white",bunk_bed:"wood white",nightstand:"body dark",wardrobe:"body dark",dresser:"wood dark",bathtub:"white metal glass",shower:"white metal",wc:"white",washbasin:"body white metal dark glass",washer:"white",dryer:"white",desk:"body wood metal dark",office_chair:"fabric cushion metal dark",tall_cabinet:"body dark",coat_rack:"body wood metal",stairs:"wood",stairs_u:"wood",robot_vacuum:"white accent",inverter:"white dark",home_battery:"white dark",wallbox:"body dark",meter:"white dark",grid_point:"body dark",pool_pump:"body metal dark glass",pool_filter:"body metal dark",pool_heat_pump:"white dark",pool_dosing:"white glass",pool_valve:"metal dark accent",fridge_smart:"body dark accent",loft_ladder:"white metal",awning:"body fabric accent",waste_bin:"metal dark",mailbox:"metal dark",wall_switch:"white",wall_socket:"white dark",wifi_ap:"white metal",water_heater:"white dark"};function Wh(s){let t=Pt(s);if(t){let n=new Set(t.parts.flatMap(i=>[i.color,i.top]));return hs.filter(i=>n.has(i))}if(wt(s))return["body"];let e=hb[s];return e?e.split(" "):[]}function La(s,t,e){let n={...s};return e&&Hh.test(e)?n[t]=e.toLowerCase():delete n[t],Object.keys(n).length?n:null}var fb="household.custom";function Ca(s){return(s?.find(t=>t.id===fb)?.items??[]).filter(cn)}function Vh(s,t){if(s===t)return 0;let e=s.length,n=t.length;if(!e)return n;if(!n)return e;let i=[],o=Array.from({length:n+1},(r,a)=>a);for(let r=1;r<=e;r++){let a=[r];for(let l=1;l<=n;l++){let c=s[r-1]===t[l-1]?0:1,d=Math.min(o[l]+1,a[l-1]+1,o[l-1]+c);r>1&&l>1&&s[r-1]===t[l-2]&&s[r-2]===t[l-1]&&(d=Math.min(d,i[l-2]+1)),a.push(d)}i=o,o=a}return o[n]}function mb(s){return s.length<4?0:s.length<9?1:2}function Da(s,t){let e=mb(s);return!e||s===t||s[0]!==t[0]||Math.abs(s.length-t.length)>e?!1:s.length===4?t.length===4&&[...s].sort().join("")===[...t].sort().join("")&&Vh(s,t)===1:Vh(s,t)<=e}var $n=["sofa","seating","table","storage","bed","kitchen","appliance","bath","lamp","media","office","tech","network","heating","energy","household","deco","tray","frame","vase","cushion","throw","candle","plant","outdoor","kids","sport","pets","vehicle","stairs","architecture"],ri=["living","dining","kitchen","bedroom","kids","bath","office","hall","utility","garage","garden","hobby","conservatory","loft"],xn="deko dekoration decor decoration",Va={sofa:"sofa couch",seating:"stuhl sessel hocker bank sitz chair stool bench seat",table:"tisch table",storage:"schrank regal kommode vitrine cabinet shelf dresser wardrobe",bed:"bett bed",kitchen:"k\xFCche kitchen",appliance:"ger\xE4t ger\xE4te appliance",bath:"bad bath",lamp:"lampe lampen leuchte licht lamp light",media:"tv fernseher lautsprecher audio speaker",office:"b\xFCro schreibtisch desk office",tech:"technik smart home sensor",network:"netzwerk router wlan lan wifi wi-fi ethernet network",heating:"heizung heizk\xF6rper klima heating climate",energy:"energie strom solar energy power",household:"haushalt household",deco:xn,tray:`tablett tray ${xn}`,frame:`bild bilder rahmen bilderrahmen frame picture photo poster art ${xn}`,vase:`vase vasen ${xn}`,cushion:`kissen cushion pillow ${xn}`,throw:`decke plaid \xFCberwurf throw blanket ${xn}`,candle:`kerze kerzen candle ${xn}`,plant:"pflanze pflanzen baum plant tree",outdoor:"garten au\xDFen drau\xDFen garden outdoor",kids:"kinder kids",sport:"fitness sport",pets:"haustier tier pet",vehicle:"auto fahrzeug car vehicle",stairs:"treppe gel\xE4nder stairs railing",architecture:"architektur architecture"},Wa=["kitchen","appliance"],Nh=[{words:["hob","cooktop","stovetop","hotplate","cooking plate"],kinds:Wa},{words:["cooker","stove","range cooker","freestanding cooker"],also:["hob","oven"],kinds:Wa},{words:["cooker hood","extractor","extractor hood","range hood","hood"],kinds:Wa},{words:["worktop","countertop","counter top","benchtop","work surface"],kinds:["kitchen"]},{words:["splashback","backsplash"],kinds:["kitchen"]},{words:["kitchen unit","base unit","base cabinet","lower cabinet"],kinds:["kitchen"]},{words:["wall unit","wall cabinet","upper cabinet"],kinds:["kitchen"]},{words:["tall unit","tall cabinet","larder","pantry cabinet"],kinds:["kitchen","storage"]},{words:["tap","faucet","mixer tap"],kinds:["kitchen","bath"]},{words:["fridge","refrigerator"]},{words:["washing machine","washer"],kinds:["appliance"]},{words:["tumble dryer","dryer","clothes dryer"],kinds:["appliance"]},{words:["hoover","vacuum","vacuum cleaner"]},{words:["wardrobe","closet","armoire"],kinds:["storage"]},{words:["cupboard","cabinet"],kinds:["storage","kitchen","bath","office"]},{words:["chest of drawers","dresser","drawers"],kinds:["storage"]},{words:["bedside table","nightstand","night stand","bedside cabinet"]},{words:["sofa","couch","settee"],kinds:["sofa"]},{words:["sofa bed","sleeper sofa"]},{words:["pouffe","pouf","ottoman","footstool"]},{words:["tv unit","tv stand","tv board","tv bench","media unit","lowboard"]},{words:["toilet","wc","loo","lavatory"],kinds:["bath"]},{words:["basin","washbasin","wash basin","vanity basin"],kinds:["bath"]},{words:["bath","bathtub","tub"],kinds:["bath"]},{words:["bin","rubbish bin","dustbin","waste bin","trash can","garbage can"]},{words:["letterbox","mailbox","postbox"]},{words:["socket","plug socket","power point","outlet"],kinds:["tech"]},{words:["torch","flashlight"]},{words:["fairy lights","string lights"]},{words:["curtains","drapes"]},{words:["duvet","comforter"]},{words:["loft ladder","attic ladder"]},{words:["cushion","pillow"]},{words:["throw","blanket","plaid"]},{words:["photo frame","picture frame"]},{words:["candle","tealight","tea light"]},{words:["access point","wi-fi","wifi"],kinds:["network"]},{words:["network switch","ethernet switch"],kinds:["network"]},{words:["trolley","cart"]},{words:["single bed","twin bed","one person bed"],kinds:["bed","kids"]},{words:["double bed","queen bed","king bed"],kinds:["bed"]},{words:["car","automobile","motor car"],kinds:["vehicle"]},{words:["bicycle","bike","cycle","push bike"],kinds:["vehicle"]},{words:["tv","television","telly"],kinds:["media"]},{words:["plant","houseplant","house plant","pot plant","indoor plant"],kinds:["plant"]},{words:["raspberry pi","pi","rpi","raspi"],kinds:["tech","network"]},{words:["zigbee stick","zigbee dongle","zigbee usb stick","zigbee coordinator","zigbee adapter","coordinator","usb stick"],kinds:["tech","network"]},{words:["mini pc","nuc","micro pc","small form factor pc"],kinds:["tech","network"]},{words:["smoke detector","smoke alarm","smoke sensor","fire alarm","fire detector"],kinds:["tech"]}];function Ui(s){return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss")}var gb=s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),_b=Nh.map(s=>({...s,re:new RegExp(`(?:^|[^\\p{L}\\p{N}])(?:${s.words.map(t=>gb(Ui(t))).join("|")})(?=$|[^\\p{L}\\p{N}])`,"u")}));function Gi(s,t){let e=_b.filter(a=>!a.kinds||a.kinds.includes(t)),n=Ui(s),i=e.filter(a=>a.re.test(n)),o=Ui(i.flatMap(a=>a.also??[]).join(" ")),r=o?e.filter(a=>!i.includes(a)&&a.re.test(o)):[];return[...i.flatMap(a=>[...a.words,...a.also??[]]),...r.flatMap(a=>a.words)].join(" ")}var bb=new Set(Nh.flatMap(s=>[...s.words,...s.also??[]]).map(Ui));function Na(s){return bb.has(Ui(s))}var Uh={lamp_ceiling:["lamp",[]],lamp_downlight:["lamp",[]],lamp_spot:["lamp",[]],lamp_panel:["lamp",[]],lamp_pendant:["lamp",[]],lamp_fan:["lamp",[]],lamp_floor:["lamp",["living","bedroom","office","conservatory"]],lamp_uplight:["lamp",["living","bedroom","office"]],lamp_table:["lamp",["living","bedroom","office","conservatory"]],lamp_wall:["lamp",[]],led_strip:["lamp",[]],lamp_bollard:["lamp",["garden"]],lamp_garden:["lamp",["garden"]],radiator:["heating",[]],ac_unit:["heating",[]],sofa:["sofa",["living","conservatory"]],sofa_l:["sofa",["living"]],sofa_u:["sofa",["living"]],armchair:["seating",["living","bedroom","office","conservatory"]],stool:["seating",["living","bath","kids"]],coffee_table:["table",["living","conservatory"]],tv_board:["media",["living","bedroom"]],tv_wall:["media",["living","bedroom"]],sideboard:["storage",["living","dining","hall"]],shelf:["storage",["living","office","kids","utility","garage","loft"]],plant:["plant",[]],rug:["deco",["living","bedroom","kids","hall","conservatory"]],table:["table",["dining","kitchen","living","conservatory"]],table_round:["table",["dining","kitchen","living","conservatory"]],chair:["seating",["dining","kitchen","living","conservatory"]],bench:["seating",["dining","kitchen","hall","garden"]],corner_bench:["seating",["dining","kitchen"]],bar_stool:["seating",["kitchen","dining"]],kitchen:["kitchen",["kitchen"]],kitchen_wall:["kitchen",["kitchen"]],kitchen_tall:["kitchen",["kitchen"]],island:["kitchen",["kitchen"]],worktop:["kitchen",["kitchen","utility","garage"]],sink:["kitchen",["kitchen","utility"]],stove:["appliance",["kitchen"]],dishwasher:["appliance",["kitchen"]],fridge:["appliance",["kitchen","utility"]],fridge_smart:["appliance",["kitchen"]],bed:["bed",["bedroom","kids"]],bunk_bed:["bed",["kids","bedroom"]],nightstand:["storage",["bedroom","kids"]],wardrobe:["storage",["bedroom","kids","hall"]],dresser:["storage",["bedroom","kids","hall"]],bathtub:["bath",["bath"]],shower:["bath",["bath"]],wc:["bath",["bath"]],washbasin:["bath",["bath"]],washer:["appliance",["bath","utility"]],dryer:["appliance",["bath","utility"]],desk:["office",["office","kids","bedroom"]],office_chair:["office",["office","kids"]],tall_cabinet:["storage",["office","hall","utility","bath","loft"]],coat_rack:["household",["hall"]],stairs:["stairs",["hall","living"]],stairs_u:["stairs",["hall","living"]],stairwell:["stairs",["hall","living"]],loft_ladder:["stairs",["garage","hall","loft"]],robot_vacuum:["appliance",[]],inverter:["energy",["utility","garage"]],home_battery:["energy",["utility","garage"]],wallbox:["energy",["garage"]],meter:["energy",["utility","garage"]],grid_point:["energy",["utility"]],pool_pump:["outdoor",["utility","garage","garden"]],pool_filter:["outdoor",["utility","garage","garden"]],pool_heat_pump:["outdoor",["garden","utility"]],pool_dosing:["outdoor",["utility","garage"]],pool_valve:["outdoor",["utility","garage"]],parking:["vehicle",["garage"]],awning:["outdoor",["garden"]],waste_bin:["household",["garden","garage","utility"]],mailbox:["household",["garden","hall"]],wall_switch:["tech",[]],wall_socket:["tech",[]],wifi_ap:["network",[]],water_heater:["heating",["utility","bath","garage","loft"]]};function Gh(s=[]){let t=new Set(Object.values(Fo).flat());for(let e of s)t.add(e);return[...t].filter(e=>e in Uh)}var vb={living:["living"],kitchen:["kitchen"],bedroom:["bedroom"],bath:["bath"],kids:["kids"],office:["office"],garage:["garage"],garden:["garden"],utility:["utility"],cinema:["living","hobby"],fitness:["hobby"],conservatory:["conservatory"],loft:["loft"],stairs:["hall"],vehicles:["garage"],pets:[],smarthome:[],architecture:[],fun_halloween:[],fun_pets:[]},yb=[[/\b(van|estate|suv|compact car|sedan|coup|cabrio|convertible|city ev|minibus|transporter|panel van|pickup|campervan|motorhome|caravan|trailer|motorcycle|electric car|e-bike|bike stand|bike holder|bike rack)\b/,"vehicle",["garage"]],[/\b(cat|dog|pet|pets|litter|hamster|rabbit|bird cage|aquarium|terrarium|bowls|scratch|animal|cage)\b/,"pets",[]],[/\b(stairs?|stair|winder|landing|railing|spiral|space-saver|outdoor steps)\b/,"stairs",["hall"]],[/\b(treadmill|power rack|rower|rowing|spin bike|dumbbell|punching|yoga|elliptical|cross trainer|gym|wall bars|fitness|smart trainer|kettlebell|massage chair|water cooler|exercise)\b/,"sport",["hobby"]],[/\b(kids|loft bed|teepee|tipi|play kitchen|play mat|play tower|toy|toys|rocking horse|cuddle|cosy corner|ball pit|house bed|baby|crib|cot|changing table|children)\b/,"kids",["kids"]],[/\b(lamp|lamps|lantern|torch|lights|spotlight|downlight|pendant|light cove|led niche|light pillar|ceiling panel|wall light|workshop light|under-cabinet light|night light|star projector|star ceiling|garden spots|up and down|candelabra)\b/,"lamp",null],[new RegExp("(?<!drip |ice |baking |oven )\\btrays?\\b"),"tray",null,!0],[new RegExp("(?<!bed |door |window |climbing )\\b(picture frames?|photo frames?|frames?|pictures?|paintings?|posters?|wall art|canvas|art print)\\b"),"frame",null,!0],[/\b(vase|vases)\b/,"vase",null,!0],[/\b(cushion|cushions|pillow|pillows|bolster)\b/,"cushion",null,!0],[/\b(throw|throws|blanket|plaid)\b/,"throw",null,!0],[/\b(candle|candles|tealight|tea light|candlestick)\b/,"candle",null,!0],[/\b(herb garden|tree|shrub|brush|plant|plants|monstera|flower|pots|pampas)\b/,"plant",null],[/\b(server|network|nas|router|modem|mesh|access point|wi-fi|wifi|patch panel|ethernet|poe)\b/,"network",null],[/\b(tv|television|projector|projection screen|screen|speaker|subwoofer|soundbar|receiver|turntable|record shelf|game console|hi-fi|cinema seat|cinema|acoustic|bass trap|smart display|media wall|arcade|monitor|sim racing|piano)\b/,"media",null],[/\b(fridge|freezer|oven|hob|cooktop|stovetop|hotplate|cooker|extractor|refrigerator|dishwasher|microwave|coffee|kettle|toaster|mixer|hood|washer|washing machine|dryer|vacuum|ironing|wine|range|popcorn)\b/,"appliance",null],[/\b(wallbox|home battery|inverter|solar|balcony|fuse box|meter cabinet|grid)\b/,"energy",null],[/\b(heat pump|boiler|buffer tank|manifold|ventilation|radiator|fan|air purifier|humidifier|dehumidifier|thermostat|water softener|water pump|hot water|patio heater|fireplace|wood stove|chimney|stove)\b/,"heating",null],[/\b(printer|filament|siren|smoke detector|camera|baby monitor|phone booth|smart home|sensor|leak|switch|socket|compressor|door opener|alarm clock|clock)\b/,"tech",null],[/\b(hot tub|outdoor|garden|patio|pergola|parasol|grill|greenhouse|raised bed|shed|trampoline|sprinkler|irrigation|rain barrel|rotary|awning|mower|fire bowl|hammock|lounger)\b/,"outdoor",["garden"]],[/\b(base unit|drawer unit|sink unit|wall unit|corner base|corner wall|pantry|kitchen|island|breakfast bar|spice rack|trolley|worktop|countertop|work surface|splashback|larder|sink)\b/,"kitchen",["kitchen"]],[/\b(bathtub|tub|shower|toilet|wc|bidet|bathroom|washbasin|basin|sauna|whirlpool)\b/,"bath",["bath"]],[/\b(bed|beds|boxspring|box-spring|futon|canopy)\b/,"bed",["bedroom"]],[/\b(wardrobe|closet|clothes|dresser|chest of|nightstand|bedside)\b/,"storage",["bedroom"]],[/\b(desk|office|whiteboard|filing|file cabinet)\b/,"office",["office"]],[/\b(sofa|chesterfield|chaise|r[ée]camière|recamiere|lounge set)\b/,"sofa",["living"]],[/\b(table|tables|workbench|vanity)\b/,"table",null],[/\b(armchair|chair|chairs|stool|stools|bench|recliner|bean bag|pouf|seat|rocking)\b/,"seating",null],[/\b(waste|bin|mailbox|drying rack|basket|coat|laundry|hooks)\b/,"household",null],[/\b(shelf|shelves|cabinet|sideboard|lowboard|highboard|vitrine|display cabinet|cube|rack|bookcase|tool wall|shoe|console table)\b/,"storage",null],[/\b(column|beam|beams|partition|sliding wall|divider|podium|platform|gallery|curtain|niche|built-in)\b/,"architecture",[]],[/\b(rug|mirror|pumpkin|cobweb|garland|gravestone|grave|skeleton|cauldron|ghost|broom|deco|decor)\b/,"deco",null]],wb=/\b(mirror|towel|laundry|washer|cabinet|shelf|plant|fan|rain shower)\b/;function kb(s){return`${s.id.replace(/_/g," ")} ${s.name.en??""}`.toLowerCase()}function xb(s){return(s.name.en??s.id.replace(/_/g," ")).toLowerCase().replace(/\s+(with|mit|and|und|plus|incl\.?|including)\b.*$/,"").replace(/\s*\(.*$/,"")}function $b(s,t){let e=t.group&&$n.includes(t.group)?t.group:null,n=t.room?.filter(l=>ri.includes(l)),i=s.replace(/^[a-z0-9_-]+\./,""),o=vb[i]??[];if(e)return{kind:e,rooms:n??o};let r=kb(t),a=xb(t);if(i==="bath"&&wb.test(r)&&!/\b(washing machine cabinet|fan)\b/.test(r))return{kind:"bath",rooms:n??["bath"]};for(let[l,c,d,u]of yb)if(l.test(u?a:r))return{kind:c,rooms:n??(d&&d.length?[...new Set([...d,...o])]:o)};return{kind:"deco",rooms:n??o}}function qh(s){let t=s.toLowerCase(),e=[[/kinder|kids|child|niñ|bambin|enfant|dziec|děts|barn|lapsi|gyerek|copi|otro|儿童|kinderkamer/,"kids"],[/schlaf|bedroom|dormit|camera da letto|chambre|slaapkamer|sypial|ložnic|sover|makuu|háló|dormitor|spaln|卧室|soveværelse/,"bedroom"],[/wohn|living|lounge|salon|soggiorno|sala de estar|woonkamer|obývací|stue|olohuone|nappali|sufrag|dnevn|客厅/,"living"],[/\bess|dining|comedor|pranzo|salle à manger|eetkamer|jadal|jídel|spise|ruokailu|étkez|jedil|餐厅/,"dining"],[/küche|kueche|kitchen|cocina|cucina|cuisine|keuken|kuchn|kuchyn|kjøkken|køkken|keittiö|konyha|bucăt|kuhinj|厨房/,"kitchen"],[/\bbad\b|bath|baño|bagno|salle de bain|badkamer|łazienk|koupeln|baderom|badevær|kylpy|fürdő|baie|kopaln|wc|toilet|gäste|guest|浴室|dusch|shower/,"bath"],[/büro|buero|office|arbeit|studio|bureau|kantoor|biuro|pracovn|kontor|työhuone|iroda|birou|pisarn|gaming|办公/,"office"],[/flur|diele|hall|corridor|entrance|eingang|ingresso|gang|hal\b|przedpok|chodba|entré|eteinen|előszoba|hol\b|hodnik|treppe|stair|walk/,"hall"],[/conservatory|orangery|sun ?room|wintergarten|v[ée]randa|jard[ií]n de invierno|giardino d.inverno|vinterhave|uterum|talvipuutarha|ogr[óo]d zimowy|zimn[íi] zahrada/,"conservatory"],[/\bloft\b|attic|dachboden|spitzboden|speicher|grenier|zolder|soffitta|desv[áa]n|strych|p[ůu]da|loftet|ullakko|padl[áa]s|mansard|podstre[šs]|阁楼/,"loft"],[/hauswirtschaft|hwr|utility|technik|keller|wasch|laundry|lavander|buanderie|berging|bijkeuken|pralni|prádeln|vaskerom|kodinhoito|mosó|tehnic|pralnic|cellar|basement|abstell|storage|vorrat|pantry|heizung|boiler/,"utility"],[/garage|carport|werkstatt|workshop|garaje|garaż|garáž|verkstad|autotalli|garázs|garaj|garaž|车库/,"garage"],[/garten|garden|terrasse|terrace|balkon|balcony|jardin|giardino|tuin|ogród|zahrad|hage|have|puutarha|kert|grădin|vrt|pool|yard|patio|einfahrt|driveway|花园/,"garden"],[/fitness|gym|sport|hobby|kino|cinema|heimkino|home theater|spiel|play|party|bar\b|sauna|wellness/,"hobby"]];for(let[n,i]of e)if(n.test(t))return i;return null}var Mb=/\s*\(?\b\d+(?:[.,]\d+)?\s*(?:[×x]\s*\d+(?:[.,]\d+)?)*\s*(?:cm|m|l|u|″|"|-seater|-sitzer|-door|-türig|-drawer|-teilig|-piece|seats|parts)?\)?/gi;function Sb(s){let t=s.replace(Mb," ").replace(/\s+(mit|with|avec|con)\s*$/i,"").replace(/\s{2,}/g," ").replace(/^[\s,–-]+|[\s,–-]+$/g,"").trim();return t?t[0].toUpperCase()+t.slice(1):s}function Bh(s){let t=[...s.matchAll(/\d+(?:[.,]\d+)?(?:\s*[×x]\s*\d+(?:[.,]\d+)?)*/g)].map(n=>n[0].replace(/\s*[×x]\s*/g," \xD7 "));if(t.length)return t.join(" \xB7 ");let e=s.match(/\b(links|rechts|left|right)\b/i);return e?e[1].toLowerCase():null}function Eb(s){return/\b(links|left)\b/i.test(s)?"left":/\b(rechts|right)\b/i.test(s)?"right":null}function Pb(s){return s.replace(/\b(links|rechts|left|right)\b/i,t=>{let n={links:"rechts",rechts:"links",left:"right",right:"left"}[t.toLowerCase()]??t;return t[0]===t[0].toUpperCase()?n[0].toUpperCase()+n.slice(1):n})}function Rb(s){if(s.family)return s.family;let t=s.id.match(/^(.*?)_(\d+(?:x\d+)?|left|right|links|rechts)$/);return t?t[1]:null}var jh=new Set(["garden"]);function Yh(s){let t=[];for(let n of s.basics){let i=Uh[n];if(!i)continue;let[o,r]=i,a=s.basicName(n),l=`${a} ${s.basicNameEn(n)} ${n.replace(/_/g," ")}`;t.push({type:n,key:n,label:a,search:`${l} ${Gi(l,o)} ${s.kindName(o)} ${Va[o]}`,tags:`${l} ${Gi(l,o)}`,kind:o,rooms:r,electric:Te(n),light:To.has(n),outdoor:r.length>0&&r.every(c=>jh.has(c)),size:s.size(n),pack:null,packLabel:null,packRelease:0,family:null,variant:null,ikea:null})}for(let n of s.packs){if(!n.items.length)continue;let i=fe(n,s.language);for(let o of n.items){let{kind:r,rooms:a}=$b(n.id,o),l=Dt(n.id,o.id),c=jt(o,s.language),d=`${Object.values(o.name).join(" ")} ${o.id.replace(/_/g," ")} ${(o.tags??[]).join(" ")} ${o.ikea??""}`;t.push({type:l,key:l,label:c,search:`${d} ${Gi(d,r)} ${i} ${fe(n,"en")} ${s.kindName(r)} ${Va[r]}`,tags:`${d} ${Gi(d,r)}`,kind:r,rooms:a,electric:!!o.electric||!!o.light,light:!!o.light,outdoor:a.length>0&&a.every(u=>jh.has(u)),size:o.size,pack:n.id,packLabel:i,packRelease:n.release??1,family:Rb(o),ikea:o.ikea??null,variant:o.variant?o.variant[s.language.split("-")[0]]??o.variant.en??Object.values(o.variant)[0]??null:Bh(c)})}}let e=new Map(t.map(n=>[n.type,n]));for(let n of[...t]){if(!Eb(n.label)||n.mirror)continue;let o=n.type.replace(/(_|\b)(left|right|links|rechts)(?=$|[_\s)])/i,(a,l,c)=>l+({left:"right",right:"left",links:"rechts",rechts:"links"}[c.toLowerCase()]??c));if(o!==n.type&&e.has(o))continue;let r=Pb(n.label);t.push({...n,key:`${n.type}#m`,mirror:!0,label:r,search:`${n.search} ${r}`,tags:`${n.tags} ${r}`,family:n.family??n.type,variant:Bh(r)}),n.family||(n.family=n.type)}return t}function fs(s){return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss")}function Ib(s){if(s.length>3)return n=>n.includes(s);let t=Na(s)?"(?=$|[^\\p{L}\\p{N}])":"",e=new RegExp(`(?:^|[^\\p{L}\\p{N}])${s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}${t}`,"u");return n=>e.test(n)}function qi(s,t){return!t||!s.rooms.length||s.rooms.includes(t)}function Xh(s,t){return(!t.pack||s.pack===t.pack)&&(!t.electric||s.electric)&&(!t.light||s.light)&&(!t.outdoor||s.outdoor)}var Kh=/[^\p{L}\p{N}]+/u,Ba=new WeakMap;function Qh(s){let t=Ba.get(s);if(!t||t.search!==s.search){let e=fs(s.label),n=fs(s.tags??"");t={search:s.search,label:e,labelWords:e.split(Kh).filter(Boolean),tags:n,tagWords:new Set(n.split(Kh).filter(Boolean)),hay:fs(s.search)},Ba.set(s,t)}return t}function Jh(s){let t=0;for(let e of s){let n=Ba.get(e);n&&n.search===e.search||(Qh(e),t++)}return t}function Fb(s,t,e){if(t(e.label)||t(e.hay)){let n=s.length<=3&&Na(s);return e.labelWords.includes(s)?7:!n&&e.labelWords.some(i=>i.startsWith(s))?6:s.length>3&&e.label.includes(s)?5:e.tagWords.has(s)?4:t(e.tags)?3:2}if(s.length<4)return 0;for(let n of e.labelWords)if(Da(s,n))return 1;for(let n of e.tagWords)if(Da(s,n))return 1;return 0}function ja(s){let t=fs(s).split(/\s+/).filter(Boolean);if(!t.length)return null;let e=t.map(i=>({w:i,match:Ib(i)})),n=t.join(" ");return i=>{let o=Qh(i),r=7,a=0;for(let{w:d,match:u}of e){let h=Fb(d,u,o);if(!h)return null;r=Math.min(r,h),a+=h}let l=o.labelWords.join(" "),c=l===n?300:l.startsWith(n)?200:r>1&&` ${l} `.includes(` ${n} `)?100:0;return r*1e3+a*10+c-Math.min(l.length,90)/100}}function Ab(s,t){let e=ja(t.query);return s.filter(n=>Xh(n,t)&&(e?e(n)!==null:qi(n,t.room)))}function Tb(s,t){let e=ja(t.query),n=[...s];if(e){let o=new Map(n.map(r=>[r,e(r)??0]));n.sort((r,a)=>o.get(a)-o.get(r))}if(!t.room)return n;let i=t.room;return[...n.filter(o=>qi(o,i)),...n.filter(o=>!qi(o,i))]}function Ka(s){let t=[];return s.room&&t.push("room"),s.pack&&t.push("pack"),s.electric&&t.push("electric"),s.light&&t.push("light"),s.outdoor&&t.push("outdoor"),t}function Zh(s,t){let e=Tb(Ab(s,t),t),n=e.filter(r=>qi(r,t.room)),i=ja(t.query),o=i?s.filter(r=>!Xh(r,t)&&i(r)!==null).length:0;return{hits:e,inRoom:n,otherRooms:e.filter(r=>!qi(r,t.room)),hiddenByChips:o}}function Ua(s,t){let e=s.filter(r=>r.kind===t),n=new Map;for(let r of e){if(!r.family)continue;let a=`${r.pack??"basic"}:${r.family}`;n.set(a,[...n.get(a)??[],r])}let i=[],o=new Set;for(let r of e){if(o.has(r.key))continue;let a=r.family?`${r.pack??"basic"}:${r.family}`:null,l=a?n.get(a):void 0;if(a&&l&&l.length>1){for(let d of l)o.add(d.key);let c=[...new Set(l.flatMap(d=>d.rooms))];i.push({key:a,label:Sb(r.label),kind:t,rooms:c,entries:l})}else o.add(r.key),i.push({key:r.key,label:r.label,kind:t,rooms:r.rooms,entries:[r]})}return i}function Ga(s,t){let[e,n]=s,i=r=>Math.round(r*100),o=t.startsWith("de")||t.startsWith("fr")||t.startsWith("it")||t.startsWith("es")||t.startsWith("nl")?",":".";return e>=10||n>=10?`${(Math.round(e*10)/10).toString().replace(".",o)} \xD7 ${(Math.round(n*10)/10).toString().replace(".",o)} m`:`${i(e)} \xD7 ${i(n)} cm`}var tf=Qn("home-3d-items",()=>"036af0385061");var ai=s=>s.static===!0;function zb(s){let t=0,e=0,n=0;for(let i=0,o=s.length-1;i<s.length;o=i++){let r=s[o][0]*s[i][1]-s[i][0]*s[o][1];t+=r,e+=(s[o][0]+s[i][0])*r,n+=(s[o][1]+s[i][1])*r}return Math.abs(t)<1e-9?{area:0,c:s[0]??[0,0]}:{area:Math.abs(t/2),c:[e/(3*t),n/(3*t)]}}function ef(s,t,e){if(!t)return{...s,static:!1};let n={...s,static:!0,pose:s.pose??"sit"};if(n.x==null||n.z==null){let o=(e?.rooms??[]).filter(l=>l.points.length>=3).map(l=>zb(l.points)).sort((l,c)=>c.area-l.area)[0],[r,a]=o?.c??[0,0];n.x=Math.round(r*100)/100,n.z=Math.round(a*100)/100}return n}function qa(s,t){let e=s.floors.filter(n=>n.rooms.some(i=>i.points.length>=3));return e.find(n=>n.id===t.floor_id)??[...e].sort((n,i)=>Math.abs(n.elevation)-Math.abs(i.elevation))[0]}function nf(s,t){return(s.settings.pets?.list??[]).filter(e=>ai(e)&&e.x!=null&&e.z!=null&&qa(s,e)?.id===t)}function of(s,t,e,n,i){let o=s.settings.pets?.list.find(a=>a.id===t);if(!o||!ai(o))return;let r=a=>Math.round(Math.round(a/i)*i*1e3)/1e3;o.x=r(e),o.z=r(n)}var ms=class{waiting=[];onChange=null;get current(){return this.waiting[0]?.req??null}ask(t){return new Promise(e=>{this.waiting.push({req:t,resolve:e}),this.waiting.length===1&&this.onChange?.()})}answer(t,e=""){let n=this.waiting.shift();n&&(n.resolve({ok:t,value:e}),this.onChange?.())}},gs=globalThis;function sf(s){gs.__fp3dAskFactory||(gs.__fp3dAskFactory=s)}function Ob(){return gs.__fp3dAskHost??gs.__fp3dAskFactory?.()??null}var Hb={ok:!1,value:""};function rf(s){let t=Ob();return t?t.ask(s):Promise.resolve(Hb)}async function _s(s,t){return(await rf({text:s,...t})).ok}async function af(s,t){await rf({text:s,ok:t.ok})}var Ya="fp3d-ask-dialog";function Lb(){let s=document.activeElement;for(;s?.shadowRoot?.activeElement;)s=s.shadowRoot.activeElement;return s}function Cb(){let s=document.fullscreenElement;for(;s?.shadowRoot?.fullscreenElement;)s=s.shadowRoot.fullscreenElement;return s??document.body}var Xa=class extends xt{queue=new ms;typed="";shown=null;returnFocus=null;constructor(){super(),this.queue.onChange=()=>this.requestUpdate()}ask(t){return this.queue.ask(t)}answer(t){let e=this.queue.current;e&&this.queue.answer(t||e.cancel===void 0,e.input!==void 0?this.typed:"")}key(t){t.stopPropagation(),t.key==="Escape"?(t.preventDefault(),this.answer(!1)):t.key==="Enter"&&t.target.tagName==="INPUT"&&(t.preventDefault(),this.answer(!0))}willUpdate(){let t=this.queue.current;t!==this.shown&&(t&&!this.shown&&(this.returnFocus=Lb()),this.typed=t?.input??"",this.toggleAttribute("open",!!t))}updated(){let t=this.queue.current;if(t===this.shown)return;if(this.shown=t,!t){this.returnFocus?.focus?.(),this.returnFocus=null;return}let e=this.renderRoot.querySelector("input");e?(e.focus(),e.select()):this.renderRoot.querySelector(t.danger&&t.cancel!==void 0?".ask-cancel":".ask-ok")?.focus()}render(){let t=this.queue.current;return t?m`<div class="backdrop" @click=${()=>this.answer(!1)}></div>
      <div class="box ${t.detail!==void 0?"wide":""}" role=${t.cancel===void 0?"dialog":"alertdialog"} aria-modal="true" aria-describedby="ask-text" @keydown=${e=>this.key(e)}>
        <p id="ask-text" class="text">${t.text}</p>
        ${t.detail!==void 0?m`<textarea class="detail" readonly rows="14" spellcheck="false" aria-labelledby="ask-text" .value=${t.detail}></textarea>`:b}
        ${t.input!==void 0?m`<label class="fp3d-field"><input type="text" aria-labelledby="ask-text" .value=${vo(this.typed)} @input=${e=>this.typed=e.target.value} /></label>`:b}
        <div class="buttons">
          ${t.cancel!==void 0?m`<button class="fp3d-btn ask-cancel" @click=${()=>this.answer(!1)}>${t.cancel}</button>`:b}
          <button class="fp3d-btn ask-ok ${t.danger?"ask-danger":"fp3d-primary"}" @click=${()=>this.answer(!0)}>${t.ok}</button>
        </div>
      </div>`:b}static styles=[Yt,Ke,zt`
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
    `]};customElements.get(Ya)||customElements.define(Ya,Xa);var Yi=null;sf(()=>typeof document>"u"?null:{ask(s){Yi??=document.createElement(Ya);let t=Cb();return Yi.parentNode!==t&&!Yi.queue?.current&&t.appendChild(Yi),Yi.ask(s)}});var Qa="pack.json",Db=/^(?:README|LICEN[CS]E|COPYING|CHANGELOG)(?:\.(?:md|txt))?$/i;function lf(s){let t=s.filter(i=>!i.split("/").some(o=>o.startsWith("."))),e=t.filter(i=>i===Qa||i.endsWith(`/${Qa}`)).map(i=>i.slice(0,-Qa.length).replace(/\/$/,"")),n=new Map(e.sort().map(i=>[i,{root:i,files:new Map,refused:[]}]));for(let i of t){let o=e.filter(l=>l===""||i.startsWith(`${l}/`)).sort((l,c)=>c.length-l.length)[0];if(o===void 0)continue;let r=o?i.slice(o.length+1):i,a=n.get(o);Db.test(r)||(r.toLowerCase().endsWith(".json")?a.files.set(r,i):a.refused.push(r))}return[...n.values()]}var Wb=["older_release","pinned"];async function bs(s,t){try{return await s(!1)}catch(e){let{code:n,message:i}=e??{};if(!Wb.includes(n))throw e;return await t(n,i??"")?s(!0):null}}function cf(s){return new Set((s?.items??[]).filter(t=>!t.pinned).map(t=>t.type))}function df(s,t,e){return e?s.filter(n=>t.has(n)):[]}function uf(s){let t=s.items.filter(e=>!e.pinned);return{updates:t.length,pinned:s.items.length-t.length,placed:t.reduce((e,n)=>e+n.placed,0)}}function pf(s,t=new Date){if(s.frequency==="off")return null;let[e,n]=s.time.split(":").map(Number);for(let i=0;i<=62;i++){let o=new Date(t.getFullYear(),t.getMonth(),t.getDate()+i,e,n);if(!(o<=t)&&!(s.frequency==="weekly"&&(o.getDay()+6)%7!==s.weekday)&&!(s.frequency==="monthly"&&o.getDate()!==1))return o}return null}var Za="https://github.com/theovencook/home-3d/issues",Ja=class extends xt{static properties={hass:{attribute:!1},canEdit:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0},_itemsError:{state:!0},_open:{state:!0},_packUrl:{state:!0},_installing:{state:!0},_updates:{state:!0},_checking:{state:!0},_updatesMsg:{state:!0}};constructor(){super(),this._packMsg=null,this._itemsError=null,this._packUrl="",this._installing=!1,this._updates=null,this._checking=!1,this._updatesMsg=null;let t=[];try{t=JSON.parse(localStorage.getItem("home3d.ext.open")??"[]")}catch{}this._open=new Set(t)}toggleOpen(t){let e=new Set(this._open);e.has(t)?e.delete(t):e.add(t),this._open=e;try{localStorage.setItem("home3d.ext.open",JSON.stringify([...e]))}catch{}}summaryBar(t,e){let n=e.reduce((o,r)=>o+r.n,0),i=this._open.has(t);return m`<button class="fp3d-sum" aria-expanded=${i} @click=${()=>this.toggleOpen(t)}>
      <span class="fp3d-sum-bar">
        ${e.filter(o=>o.n>0).map(o=>m`<i class="fp3d-sum-${o.tone}" style="flex:${o.n}"></i>`)}
      </span>
      <span class="fp3d-sum-text">
        ${e.filter(o=>o.n>0||o.tone==="ok").map(o=>m`<b class="fp3d-sum-${o.tone}-text">${o.n}</b> ${o.label}`)}
        ${n?b:m`<span class="fp3d-sub">–</span>`}
      </span>
      <span class="fp3d-sum-caret">${i?"\u25BE":"\u25B8"} ${this.t(i?"ext_hide_list":"ext_show_list")}</span>
    </button>`}updated(t){let e=t.has("hass")&&!this._updates&&!this.updatesLoading;this.hass&&(e||t.has("packs")||t.has("building"))&&this.loadUpdates()}updatesLoading=!1;async loadUpdates(){if(this.hass){this.updatesLoading=!0;try{this._updates=await gi(this.hass)}catch{this._updates=null}finally{this.updatesLoading=!1}}}async updatesCall(t,e=!1){if(this.hass)try{let n=await t(this.hass);n&&(this._updates=n),e&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(n){this._updatesMsg={ok:!1,text:this.packError(n)}}}setUpdateSettings(t){this.updatesCall(e=>cc(e,t))}async checkNow(){if(!(!this.hass||this._checking)){this._checking=!0,this._updatesMsg=null;try{let t=await dc(this.hass);this._updates=t,this._updatesMsg={ok:!0,text:this.t("upd_checked",{n:t.installed.length})},t.installed.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(t){this._updatesMsg={ok:!1,text:this.packError(t)}}finally{this._checking=!1}}}updateItems(t){this.updatesCall(async e=>(await wo(e,t),gi(e)))}time(t){return t==null?"\u2013":(t instanceof Date?t:new Date(t*1e3)).toLocaleString(this.hass?.language,{dateStyle:"medium",timeStyle:"short"})}renderUpdates(){let t=this._updates;if(!t)return b;let e=this.isEditor,n=t.settings,i=uf(t),o=this.hass?.language??"en",r=t.items.filter(l=>!l.pinned),a=pf(n);return m`<section class="fp3d-ext-card fp3d-updates">
      <h3>${this.t("upd_title")}</h3>
      <p class="fp3d-sub">${this.t("upd_intro")}</p>
      ${this.summaryBar("updates",[{n:i.updates,label:this.t("upd_sum_updates"),tone:"update"},{n:i.pinned,label:this.t("upd_sum_pinned"),tone:"missing"}])}
      ${this._open.has("updates")?m`${t.items.length?t.items.map(l=>m`<div class="fp3d-pack">
                  <div>
                    <b>${l.name[o.split("-")[0]]??l.name.en??Object.values(l.name)[0]??l.item}</b>
                    <span class="fp3d-sub">${this.t("upd_item",{from:l.release,to:l.new_release,n:l.placed})}${l.pinned?` \xB7 ${this.t("upd_pinned")}`:""}</span>
                  </div>
                  ${e?m`<button class="fp3d-btn" @click=${()=>this.updateItems([l.type])}>${this.t("upd_update")}</button>`:b}
                </div>`):m`<p class="fp3d-sub">${this.t("upd_none")}</p>`}
          ${e&&r.length>1?m`<button class="fp3d-btn fp3d-primary fp3d-pack-import" @click=${()=>this.updateItems(r.map(l=>l.type))}>${this.t("upd_update_all",{n:r.length})}</button>`:b}`:b}
      <label class="fp3d-check">
        <input type="checkbox" .checked=${n.auto_update} ?disabled=${!e} @change=${l=>this.setUpdateSettings({auto_update:l.target.checked})} />
        ${this.t("upd_auto")}
      </label>
      <div class="fp3d-upd-when">
        <label>
          ${this.t("upd_frequency")}
          <select ?disabled=${!e} @change=${l=>this.setUpdateSettings({frequency:l.target.value})}>
            ${["off","daily","weekly","monthly"].map(l=>m`<option value=${l} ?selected=${n.frequency===l}>${this.t(`upd_freq_${l}`)}</option>`)}
          </select>
        </label>
        ${n.frequency==="weekly"?m`<label>
              ${this.t("upd_weekday")}
              <select ?disabled=${!e} @change=${l=>this.setUpdateSettings({weekday:Number(l.target.value)})}>
                ${[0,1,2,3,4,5,6].map(l=>m`<option value=${l} ?selected=${n.weekday===l}>${this.t(`upd_day_${l}`)}</option>`)}
              </select>
            </label>`:b}
        ${n.frequency!=="off"?m`<label>
              ${this.t("upd_time")}
              <input type="time" .value=${n.time} ?disabled=${!e} @change=${l=>{let c=l.target.value;/^\d{2}:\d{2}$/.test(c)&&this.setUpdateSettings({time:c})}} />
            </label>`:b}
        ${e?m`<button class="fp3d-btn" ?disabled=${this._checking} @click=${()=>this.checkNow()}>${this._checking?this.t("upd_checking"):this.t("upd_check_now")}</button>`:b}
      </div>
      <p class="fp3d-sub">
        ${this.t("upd_last_check",{time:this.time(t.last_check)})}${a?m` · ${this.t("upd_next_check",{time:this.time(a)})}`:b}
      </p>
      ${this._updatesMsg?m`<p class="fp3d-sub ${this._updatesMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._updatesMsg.text}</p>`:b}
    </section>`}renderPackUpdate(t){let e=this._updates?.packs.find(i=>i.id===t.id);if(!e||t.custom)return b;let n=fe(t,this.hass?.language??"de");return m`${e.error?m`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_check_error",{detail:e.error})}</span>`:e.latest_release!=null?m`<span class="fp3d-sub">${this.t("pack_latest",{release:e.latest_release})}</span>`:b}
      ${this.isEditor?m`<span class="fp3d-pack-tools">
            <label class="fp3d-check">
              <input type="checkbox" .checked=${e.pinned} @change=${i=>{let o=i.target.checked;this.updatesCall(r=>uc(r,t.id,o))}} />
              ${this.t("pack_pin")}
            </label>
            ${e.previous_release!=null?m`<button
                  class="fp3d-btn"
                  @click=${async()=>{await this.ask(this.t("pack_rollback_confirm",{name:n,release:e.previous_release}),this.t("ask_ok"))&&this.updatesCall(i=>pc(i,t.id),!0)}}
                >
                  ${this.t("pack_rollback",{release:e.previous_release})}
                </button>`:b}
          </span>`:b}`}askConfirm=(t,e)=>this.ask(this.t(`pack_confirm_${t}`,{detail:e}),this.t("ask_ok"));ask(t,e,n=!1){return _s(t,{ok:e,cancel:this.t("cancel"),danger:n})}get isEditor(){return this.canEdit??this.hass?.user?.is_admin??!1}t(t,e){return Wt(this.hass,t,e)}render(){let t=sa(this.packs??[]);return m`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href=${Za} target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        </div>
      </header>
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${ea.filter(e=>Xn(e)).map(e=>m`<div class="fp3d-ext-feature ${t.has(e)?"fp3d-ext-on":""}">
              <b>${t.has(e)?"\u2713":"\u2013"} ${this.t(`pro_name_${e}`)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${e}`)}</span>
              ${t.has(e)?m`<span class="fp3d-ext-links"><span class="fp3d-ext-state">${this.t("ext_active")}</span></span>`:b}
            </div>`)}
        </div>
      </section>
      ${this.renderFun(t)} ${this.renderItems()} ${this.renderUpdates()} ${this.renderPacks()}
    </div>`}editBuilding(t){if(!this.building)return;let e=structuredClone(this.building);t(e),this.dispatchEvent(new CustomEvent("building-edit",{detail:e,bubbles:!0,composed:!0}))}renderFun(t){let e=na.filter(c=>t.has(c)||Xn(c));if(!e.length)return b;let n=this.building?.settings.pets??null,i=n?.list??[],o=n?.on!==!1,r=(this.building?.floors??[]).filter(c=>c.rooms.length).sort((c,d)=>c.elevation-d.elevation),a=c=>this.editBuilding(d=>{let u={on:d.settings.pets?.on!==!1,list:[...d.settings.pets?.list??[]]};c(u),d.settings.pets=u}),l=(c,d)=>a(u=>u.list=u.list.map(h=>h.id===c?{...h,...d}:h));return m`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${e.map(c=>c==="fun_halloween"?this.renderHalloween(t.has(c)):t.has(c)?m`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isEditor&&this.building?m`<label class="fp3d-check"><input type="checkbox" .checked=${o} @change=${d=>a(u=>u.on=d.target.checked)} /> ${this.t("pets_show")}</label>
                    ${i.map(d=>m`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${u=>{let h=u.target.value,p=bi[h];l(d.id,{kind:h,fur:p.includes(d.fur)?d.fur:p[0],breed:h==="dog"?d.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(u=>m`<option value=${u} ?selected=${d.kind===u}>${this.t(`pet_kind_${u}`)}</option>`)}
                        </select>
                        ${d.kind==="dog"?m`<select aria-label=${this.t("pet_breed")} @change=${u=>l(d.id,{breed:u.target.value})}>
                              ${qc.map(u=>m`<option value=${u} ?selected=${(d.breed??"labrador")===u}>${this.t(`pet_breed_${u}`)}</option>`)}
                            </select>`:b}
                        <input type="text" maxlength="30" .value=${d.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${u=>l(d.id,{name:u.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${u=>l(d.id,{fur:u.target.value})}>
                          ${bi[d.kind].map(u=>m`<option value=${u} ?selected=${d.fur===u}>${this.t(`pet_fur_${u}`)}</option>`)}
                        </select>
                        <select title=${this.t("pet_eyes")} aria-label=${this.t("pet_eyes")} @change=${u=>l(d.id,{eyes:u.target.value})}>
                          ${Gc.map(u=>m`<option value=${u} ?selected=${(d.eyes??"dark")===u}>${this.t(`pet_eyes_${u}`)}</option>`)}
                        </select>
                        ${r.length>1?m`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${u=>l(d.id,{floor_id:u.target.value||null})}>
                              ${r.map((u,h)=>m`<option value=${h===0?"":u.id} ?selected=${(d.floor_id??r[0].id)===u.id}>🏠 ${u.name}</option>`)}
                            </select>`:b}
                        <select
                          title=${this.t("pet_mode")}
                          aria-label=${this.t("pet_mode")}
                          @change=${u=>{let h=u.target.value==="static",p=this.building;a(f=>f.list=f.list.map(_=>_.id===d.id?ef(_,h,qa(p,_)):_))}}
                        >
                          <option value="roaming" ?selected=${!ai(d)}>${this.t("pet_roaming")}</option>
                          <option value="static" ?selected=${ai(d)}>${this.t("pet_static")}</option>
                        </select>
                        ${ai(d)?m`<select title=${this.t("pet_pose")} aria-label=${this.t("pet_pose")} @change=${u=>l(d.id,{pose:u.target.value})}>
                                ${Uc.map(u=>m`<option value=${u} ?selected=${(d.pose??"sit")===u}>${this.t(`pet_pose_${u}`)}</option>`)}
                              </select>
                              <select
                                title=${this.t("pet_turn")}
                                aria-label=${this.t("pet_turn")}
                                @change=${u=>{let h=u.target.value;l(d.id,{rotation:h===""?null:Number(h)})}}
                              >
                                <option value="" ?selected=${d.rotation==null}>${this.t("pet_turn_auto")}</option>
                                ${[0,45,90,135,180,225,270,315].map(u=>m`<option value=${u} ?selected=${d.rotation===u}>${u}°</option>`)}
                              </select>
                              <span class="fp3d-sub">${this.t("pet_static_hint")}</span>`:b}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>a(u=>u.list=u.list.filter(h=>h.id!==d.id))}>✕</button>
                      </div>`)}
                    ${i.length<8?m`<button class="fp3d-btn" @click=${()=>a(d=>d.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:bi.cat[d.list.length%bi.cat.length]}))}>+ ${this.t("pet_add")}</button>`:b}`:b}
            </div>`:b)}
    </section>`}renderHalloween(t){let e=this.building?.settings.halloween?.ghost!==!1;return t?m`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isEditor&&this.building?m`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${e}
              @change=${n=>this.editBuilding(i=>i.settings.halloween={...i.settings.halloween??{},ghost:n.target.checked})}
            />
            ${this.t("halloween_ghost")}</label
          >`:b}
      <span class="fp3d-sub">${this.t("halloween_deco_hint")}</span>
    </div>`:b}renderItems(){if(!this.isEditor)return b;let t=Ca(this.packs).length;return m`<section class="fp3d-ext-card">
      <h3>${this.t("own_items_title")}</h3>
      <p class="fp3d-sub">${this.t("own_items_hint",{n:t})}</p>
      <button class="fp3d-btn fp3d-primary fp3d-pack-import" @click=${()=>this.openItemEditor()}>${this.t("own_items_open")}</button>
      ${this._itemsError?m`<p class="fp3d-sub fp3d-pack-error">${this._itemsError}</p>`:b}
    </section>`}async openItemEditor(){let t=this.hass;if(t)try{(await tf()).openItemEditor({hass:t,hassSource:()=>this.hass,t:(n,i)=>Wt(this.hass,n,i),items:Ca(this.packs),kinds:$n,rooms:ri,roles:hs,changed:()=>this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}),this._itemsError=null}catch(e){this._itemsError=String(e?.message??e)}}renderPacks(){let t=(this.packs??[]).filter(n=>!n.custom),e=t.reduce((n,i)=>n+i.items.length,0);return m`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${this.summaryBar("packs",[{n:t.length,label:this.t("ext_sum_packs",{items:e}),tone:"ok"}])}
      ${(this._open.has("packs")?t:[]).map(n=>m`<div class="fp3d-pack">
          <div>
            <b>${fe(n,this.hass?.language??"de")}</b>
            <span class="fp3d-sub">${n.features?.length?this.t("pack_features",{publisher:n.publisher,n:n.features.length}):this.t("pack_by",{publisher:n.publisher,n:n.items.length})}</span>
            ${n.licence||n.release&&n.release>1?m`<span class="fp3d-sub">${[n.licence?this.t("pack_licence",{licence:n.licence}):"",n.release&&n.release>1?`v${n.release}`:""].filter(Boolean).join(" \xB7 ")}</span>`:b}
            ${this.renderOrigin(n)} ${this.renderPackUpdate(n)}
            ${(n.features??[]).some(i=>!oa(i))?m`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:b}
          </div>
          ${n.bundled?m`<span class="fp3d-sub">${this.t("pack_bundled")}</span>`:m`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(n)}>${this.t("pack_remove")}</button>`}
        </div>`)}

      <label class="fp3d-btn fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${n=>this.importPackFile(n)} />
      </label>
      <label class="fp3d-btn fp3d-pack-import">
        ${this.t("pack_import_folder")}
        <input type="file" webkitdirectory multiple hidden @change=${n=>this.importPackFolder(n)} />
      </label>
      ${this.isEditor?m`<form class="fp3d-pack-url" @submit=${n=>this.installFromUrl(n)}>
            <input
              type="url"
              inputmode="url"
              .value=${this._packUrl}
              placeholder="https://github.com/owner/repo/tree/main/publisher.pack"
              aria-label=${this.t("pack_install_url")}
              ?disabled=${this._installing}
              @input=${n=>this._packUrl=n.target.value}
            />
            <button class="fp3d-btn" type="submit" ?disabled=${this._installing||!this._packUrl.trim()}>
              ${this._installing?this.t("pack_installing"):this.t("pack_install_url")}
            </button>
          </form>`:b}
      ${this._packMsg?m`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:b}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}renderOrigin(t){let e=kc(t);return e?m`<span class="fp3d-sub">${this.t("pack_from")} <a href=${e.url} target="_blank" rel="noreferrer noopener">${e.label}</a></span>`:b}async installFromUrl(t){t.preventDefault();let e=this._packUrl.trim();if(!(!e||!this.hass||this._installing)){this._installing=!0;try{let n=this.hass,i=await bs(o=>lc(n,e,o),this.askConfirm);if(!i)return;this._packUrl="",this._packMsg={ok:!0,text:this.t("pack_imported",{name:i.name,publisher:i.publisher,n:i.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}catch(n){this._packMsg={ok:!1,text:this.packError(n)}}finally{this._installing=!1}}}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=[],o=[];for(let a of n)try{let l=this.hass,c=await a.text(),d=await bs(u=>rc(l,c,u),this.askConfirm);if(!d)continue;i.push(this.t("pack_imported",{name:d.name,publisher:d.publisher,n:d.items}))}catch(l){o.push(`${a.name}: ${this.packError(l)}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let r=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...r,...i,...o].join(" \xB7 ")}}async importPackFolder(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=new Map(n.map(c=>[c.webkitRelativePath||c.name,c])),o=lf([...i.keys()]);if(!o.length){this._packMsg={ok:!1,text:this.t("pack_error_no_pack")};return}let r=[],a=[];for(let c of o){let d=c.root||n[0].webkitRelativePath.split("/")[0]||"pack";if(c.refused.length){a.push(`${d}: ${this.t("pack_error_not_data",{detail:c.refused.join(", ")})}`);continue}try{let u={};for(let[f,_]of c.files)u[f]=await i.get(_).text();let h=this.hass,p=await bs(f=>ac(h,u,f),this.askConfirm);if(!p)continue;r.push(this.t("pack_imported",{name:p.name,publisher:p.publisher,n:p.items}))}catch(u){a.push(`${d}: ${this.packError(u)}`)}}r.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let l=o.length>1?[this.t("packs_imported_n",{n:r.length,total:o.length})]:[];this._packMsg={ok:a.length===0,text:[...l,...r,...a].join(" \xB7 ")}}packError(t){let{code:e,message:n}=t??{},i=`pack_error_${e}`,o=this.t(i,{detail:n??String(t)});return o===i?this.t("pack_error_other",{detail:n??String(t)}):o}async deletePack(t){!this.hass||!await this.ask(this.t("pack_remove_confirm",{name:fe(t,this.hass?.language??"de")}),this.t("delete"),!0)||(await hc(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[Yt,Ke,zt`
      .fp3d-sum {
        display: grid;
        gap: 6px;
        width: 100%;
        margin: 4px 0 8px;
        padding: 10px 12px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        background: rgba(4, 8, 18, 0.35);
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-sum-bar {
        display: flex;
        gap: 2px;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-sum-bar i {
        display: block;
      }
      .fp3d-sum-ok {
        background: #34d399;
      }
      .fp3d-sum-update {
        background: #fbbf24;
      }
      .fp3d-sum-missing {
        background: #60a5fa;
      }
      .fp3d-sum-text {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
        font-size: 0.92em;
      }
      .fp3d-sum-ok-text {
        color: #34d399;
      }
      .fp3d-sum-update-text {
        color: #fbbf24;
      }
      .fp3d-sum-missing-text {
        color: #60a5fa;
      }
      .fp3d-sum-caret {
        color: var(--fp3d-muted, #8ea3c4);
        font-size: 0.85em;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      /* headings and body copy in light, neutral tones: blue on navy read poorly (#88) */
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-text);
      }
      .fp3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .fp3d-pet-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pet-row input[type="text"],
      .fp3d-pet-row select {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pet-row input[type="text"] {
        flex: 1;
        min-width: 110px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      /* an active feature is marked by its tick and "active", not a cyan frame on every card (#88) */
      .fp3d-ext-on {
        border-color: var(--fp3d-line);
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-muted);
        font-size: 13px;
        line-height: 1.45;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-tools,
      .fp3d-upd-when {
        display: flex;
        flex-wrap: wrap;
        gap: 8px 14px;
        align-items: center;
      }
      .fp3d-upd-when {
        margin: 8px 0;
      }
      .fp3d-upd-when label {
        display: flex;
        gap: 6px;
        align-items: center;
      }
      .fp3d-upd-when select,
      .fp3d-upd-when input {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pack-url {
        display: flex;
        gap: 8px;
        margin-top: 10px;
      }
      .fp3d-pack-url input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",Ja);var hf=new Set(["_floorId","_roomId","_openingId","_furnitureId","_deviceId","_outdoorId","_wallId","_multi"]),Vb=new Set(["INPUT","SELECT","TEXTAREA"]);function vs(s){let t=s?.activeElement??null;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function ys(s){return!!s&&(Vb.has(s.tagName??"")||!!s.isContentEditable)}function el(s){let t=vs(s);return!ys(t)||!t?.blur?!1:(t.blur(),!0)}var tl=new WeakSet;function ff(s,t){return Array.isArray(s)&&Array.isArray(t)?s.length===t.length&&s.every((e,n)=>e===t[n]):s===t}function mf(s,t){for(let[e,n]of s)if(typeof e=="string"&&hf.has(e)&&!ff(n,t[e]))return!0;return!1}function gf(s,t,e,n){if(!hf.has(t)||tl.has(s))return;let i=s,o=i[t];if(!(ff(o,e)||!ys(vs(n)))){tl.add(s);try{i[t]=e,el(n)}finally{i[t]=o,tl.delete(s)}}}function _f(s){return s.typing?"release":s.menu?"close_menu":s.placing?"cancel_place":s.pipeDraft?"cancel_pipe":s.pipeMode?"end_pipe_mode":s.drawing?"clear_draft":s.item?"deselect_item":s.tool!=="select"?"select_tool":"deselect"}var Nb=["x","z","rotation","w","d","h","mount","mirror","strip","name","show_name","aliases","type","floor"],bf=["x","z","rotation"];function vf(s){let t=Bb(s);return{head:t.filter(e=>bf.includes(e)),body:t.filter(e=>!bf.includes(e))}}function Bb(s){return Nb.filter(t=>t==="mirror"?s.mirror:t==="strip"?s.strip:t==="mount"?s.lift:t==="floor"?!!s.floors:!0)}function yf(s,t){let e=t.split("-")[0],n=c=>c?c[e]??c.en??Object.values(c)[0]??"":"",i=s.map(c=>n(c.name)||c.id),o=s.map((c,d)=>`${i[d]}|${n(c.variant)}`),r=c=>c.reduce((d,u)=>d.set(u,(d.get(u)??0)+1),new Map),a=r(i),l=r(o);return s.map((c,d)=>{if(a.get(i[d])<2)return i[d];let u=n(c.variant);return u&&l.get(o[d])<2?`${i[d]} \xB7 ${u}`:`${i[d]} \xB7 ${c.size.map(h=>Math.round(h*100)).join(" \xD7 ")} cm`})}function jb(s){let[t,e,n]=$t(s.type);return Math.abs(s.w-t)<.005&&Math.abs(s.d-e)<.005&&Math.abs(s.h-n)<.005}function wf(s,t){if(t===s.type||!jb(s))return{type:t};let[e,n,i]=$t(t);return{type:t,w:e,d:n,h:i}}function kf(s,t,e,n){let i=s.floors.find(l=>l.id===t),o=s.floors.find(l=>l.id===n);if(!i||!o||i===o)return[];let r=new Set(e),a=i.furniture.filter(l=>r.has(l.id));return a.length?(i.furniture=i.furniture.filter(l=>!r.has(l.id)),o.furniture.push(...a),a.map(l=>l.id)):[]}function $f(s,t){let e=new Set(t),n=s.furniture.filter(i=>e.has(i.id)).map(i=>structuredClone(i));return n.length?{floor:s.id,items:n,pastes:{}}:null}function Mf(s,t,e){let n=s.pastes[t]??0;s.pastes[t]=n+1;let i=(n+(t===s.floor?1:0))*.3,o=new Map,r=a=>o.get(a)??o.set(a,e("block")).get(a);return s.items.map(a=>({...structuredClone(a),id:e("furniture"),x:xf(a.x+i),z:xf(a.z+i),group:a.group?r(a.group):null,locked:null}))}var xf=s=>Math.round(s*1e3)/1e3,Sf=[{keys:["Ctrl+C"],text:"help_key_copy"},{keys:["Ctrl+V"],text:"help_key_paste"},{keys:["Ctrl+A"],text:"help_key_select_all"}];function Vt(s,t){return`${s} (${t.join(", ")})`}function nl(s){if(!(s.ctrlKey||s.metaKey)||s.shiftKey||s.altKey)return null;let t=s.key.toLowerCase();return t==="c"?"copy":t==="v"?"paste":t==="a"?"select_all":null}var Kb={set:(s,t)=>setTimeout(s,t),clear:s=>clearTimeout(s)},ws=class{boxes=new WeakMap;delay;timers;runs=0;constructor(t={}){this.delay=t.delay??600,this.timers=t.timers??Kb}state(t){let e=this.boxes.get(t);return e||this.boxes.set(t,e={dirty:!1,saved:null,timer:null,run:++this.runs}),e}stop(t){t.timer!==null&&this.timers.clear(t.timer),t.timer=null}save(t,e,n){this.stop(t),t.saved!==e&&(t.saved=e,n(e,t.run))}focus(t){let e=this.state(t);this.stop(e),e.dirty=!1,e.saved=null,e.run=++this.runs}input(t,e,n){let i=this.state(t);i.dirty=!0,this.stop(i),i.timer=this.timers.set(()=>{i.timer=null,i.dirty&&this.save(i,e,n)},this.delay)}enter(t,e,n){let i=this.state(t);this.save(i,e,n),i.dirty=!1,i.run=++this.runs}change(t,e,n){this.save(this.state(t),e,n)}blur(t){let e=this.state(t);this.stop(e),e.dirty=!1,e.run=++this.runs}typing(t){return this.boxes.get(t)?.dirty??!1}};var il=class extends ie{constructor(t){if(super(t),t.type!==Bt.PROPERTY)throw new Error("typedValue() belongs on .value")}render(t,e){return e}update(t,[e,n]){let i=t.element;return!e.typing(i)&&i.value!==n&&(i.value=n),Ot}},ol=pe(il);var sl=new Map;async function Ef(s,t){}function Pf(s){let t=[];for(let e of sl.values())try{t.push(...e.module.help?.(s)??[])}catch{}return t}function Rf(s,t){return rl(e=>e.areaFields?.(s,t))}function If(s,t){return rl(e=>e.furnitureFields?.(s,t))}function Ff(s,t,e){return rl(n=>n.roomFields?.(s,t,e))}function Af(){for(let s of sl.values())if(s.module.pipes)return s.module.pipes;return null}function rl(s){let t=[];for(let e of sl.values())try{t.push(...s(e.module)??[])}catch(n){console.warn(`Home 3D: module ${e.id} failed`,n)}return t}function Ub(s){return{a:s.a,b:s.b,u:s.u,n:s.n,length:s.length,rightward:!0}}var al={walls(s,t,e){let n=s.floors.find(o=>o.id===t),i=n?.rooms.find(o=>o.id===e);return!n||!i||i.points.length<3?[]:i.points.map((o,r)=>{let a=Ue(i,r),l=Ee(n,i.id,a.a,a.b),c=[...Ge(a,n,i).map(d=>[d.s0,d.s1]),...Un(a,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:r,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?s.settings.wall_interior:s.settings.wall_exterior,taken:c}})},onWall(s,t,e){return be(Ub(s),t,e)},freeSpot(s,t,e=.1){let n=o=>o>=e&&o+t<=s.length-e&&!s.taken.some(([r,a])=>o<a+.05&&o+t>r-.05),i=s.length/2-t/2;for(let o=0;o<=s.length;o+=.05){if(n(i-o))return Math.round((i-o)*100)/100;if(n(i+o))return Math.round((i+o)*100)/100}return null},nodeAt(s,t,e){let n=s.floors.find(a=>a.id===t),i=n?.outdoor.find(a=>a.id===e);if(!n||!i)return()=>null;let o=dt(s,n,i),r=i.pool??{};return a=>{let{kind:l,id:c,port:d}=lt(a),u=l==="joint"?(r.joints??[]).find(p=>p.id===c):void 0;if(u)return Ye(u,d);let h=l==="port"?(r.ports??[]).find(p=>p.id===c):void 0;return h?o(a)??{x:h.x,y:.02,z:h.z}:o(a)}},connect(s,t,e,n,i,o){let r=s.floors.find(l=>l.id===t),a=r?.outdoor.find(l=>l.id===e);return!r||!a?{pipes:[],joints:[]}:Yn({...n,floorId:t},al.nodeAt(s,t,e),a.pool?.joints??[],i,o)}};function Gb(s,t){return t.rooms.some(e=>e.points.length>=3)?is(t.rooms,t.walls??[],s.settings.wall_exterior,s.settings.wall_interior):null}function qb(s,t){if(s.settings.terrain?.earth===!1||t.elevation>.3)return!1;let e=Gb(s,t);return!!e&&e.some(([n,i])=>dr(n,i)-t.elevation>-.15)}function Yb(s,t,e,n,i){return!e||!qb(s,t)?!1:n<Math.min(t.height,dr(i[0],i[1])-t.elevation)-.05}function Tf(s,t,e){if(e.type!=="window")return!1;let n=_e(e,t.rooms,t.walls??[]);if(!n)return!1;let i=Ct(t.rooms,{exterior:s.settings.wall_exterior,interior:s.settings.wall_interior},t.walls??[]).walls,o=Ti(i,e,n);if(!o)return!1;let{wall:r,s:a}=o,l=Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1]),c=l>1e-9?[(r.b[0]-r.a[0])/l,(r.b[1]-r.a[1])/l]:[1,0],d=Math.min(Math.min(t.height,r.height??t.height)-.02,e.sill+e.height),u=Math.max(0,Math.min(e.sill,d-.1));return Yb(s,t,r.exterior,u,[r.a[0]+c[0]*a,r.a[1]+c[1]*a])}function zf(s,t){let e=t.domains??[];if(!t.area&&!e.length)return s;let n=i=>{let o=e.indexOf(i.id.slice(0,i.id.indexOf(".")));return(t.area&&i.area===t.area?2:0)+(o<0?0:1/(o+1))};return s.map((i,o)=>({o:i,i:o,s:n(i)})).sort((i,o)=>o.s-i.s||i.i-o.i).map(i=>i.o)}function Xb(s,t){if(!s)return[];let e=n=>{let i=s.entities?.[n];return i?.area_id??(i?.device_id?s.devices?.[i.device_id]?.area_id:null)??null};return Object.keys(s.states??{}).filter(t).map(n=>{let i=e(n),o=i?s.areas?.[i]?.name:void 0;return{id:n,label:`${st(s,n)}${o?` \xB7 ${o}`:""}`,...i?{area:i}:{}}}).sort((n,i)=>n.label.localeCompare(i.label))}var ks=class{byKey=new Map;byFilter=new WeakMap;snapshot=null;get(t,e,n){this.check(t);let i=typeof e=="string"?this.byKey.get(e):this.byFilter.get(e);if(i)return i;let o=Xb(t,n);return typeof e=="string"?this.byKey.set(e,o):this.byFilter.set(e,o),o}check(t){let e=this.snapshot,n=Object.keys(t?.states??{}).length;e&&e.entities===t?.entities&&e.devices===t?.devices&&e.areas===t?.areas&&e.count===n||(this.snapshot={entities:t?.entities,devices:t?.devices,areas:t?.areas,count:n},this.byKey.clear(),this.byFilter=new WeakMap)}};var Of=40,ll=class extends xt{static formAssociated=!0;static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},prefer:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;ranked=null;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this.prefer={},this._query="",this._open=!1,this._cursor=0,this.addEventListener("click",t=>{t.composedPath()[0]===this&&this.renderRoot?.querySelector?.("input")?.focus()})}get open(){return this._open}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=a=>{let l=`${a.label} ${a.id}`.toLowerCase();return e.every(c=>l.includes(c))},i=this.fixed.filter(a=>!t||n(a)),o=this.rankedOptions(),r=t?o.filter(n):o;return[...i,...r.slice(0,Of)]}rankedOptions(){let t=`${this.prefer.area??""}|${(this.prefer.domains??[]).join(",")}`,e=this.ranked;if(e&&e.options===this.options&&e.prefer===t)return e.list;let n=zf(this.options,this.prefer);return this.ranked={options:this.options,prefer:t,list:n},n}onQuery(){let t=this.hits,e=this._query.trim()?t.findIndex(n=>n.id.includes(".")):-1;this._cursor=Math.max(0,e)}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(i=>e.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-Of)}openList(){clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}updated(t){this._open&&t.has("_cursor")&&this.renderRoot?.querySelector?.("li.cursor")?.scrollIntoView?.({block:"nearest"})}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[],n=this.value&&this.value.includes(".")?this.value:null;return m`<div class="wrap" @mousedown=${i=>i.target?.localName!=="input"&&i.preventDefault()}>
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${t?t.label:this.placeholder}
        .value=${this._open?this._query:t?.label??""}
        @focus=${()=>this.openList()}
        @click=${()=>{this._open||this.openList()}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${i=>{this._query=i.target.value,this._open=!0,this.onQuery()}}
        @keydown=${this.onKey}
      />
      ${this._open?m`<ul class="list" role="listbox">
            ${e.length?b:m`<li class="empty">–</li>`}
            ${e.map((i,o)=>m`<li
                role="option"
                aria-selected=${i.id===this.value}
                class="${o===this._cursor?"cursor":""} ${i.id===this.value?"chosen":""}"
                @mousedown=${r=>r.preventDefault()}
                @click=${()=>this.choose(i.id)}
              >
                <span>${i.label}</span>${i.id.includes(".")?m`<small>${i.id}</small>`:b}
              </li>`)}
            ${this.leftOut>0?m`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:b}
          </ul>`:b}
      ${n?m`<small class="picked" title=${n}>${n}</small>`:b}
    </div>`}static styles=[Yt,zt`
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
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",ll);function Hf(s,t,e){return s.filter(n=>n.id===t?e:n.editor).map(n=>n.id)}function Lf(s,t){let e=s.filter(n=>n.is_admin&&n.editor);return e.length===1&&e[0].id===t}function Cf(s,t,e){let n=(s??[]).filter(i=>i!==t);return e?[...n,t]:n}var Df=120;var Qb=new URL(import.meta.url),Jb=new URL("./home-3d-3d.js?v=aafe34ee8965",Qb).href,Wf;function Xi(){return Wf??=import(Jb),Wf}var Zb="home3d-recipes",Qi="packs",xs=null;function Nf(){return xs||(xs=new Promise(s=>{try{if(typeof indexedDB>"u")return s(null);let t=indexedDB.open(Zb,1);t.onupgradeneeded=()=>t.result.createObjectStore(Qi),t.onsuccess=()=>s(t.result),t.onerror=()=>s(null),t.onblocked=()=>s(null)}catch{s(null)}}),xs)}async function Vf(s){let t=await Nf();return t?new Promise(e=>{try{let n=t.transaction(Qi,"readonly").objectStore(Qi).get(s);n.onsuccess=()=>e(n.result&&typeof n.result.hash=="string"?n.result:null),n.onerror=()=>e(null)}catch{e(null)}}):null}var Bf={async read(s,t){let e=await Vf(s);return e&&e.hash===t?e.items:{}},async write(s,t,e){let n=await Nf();if(!n)return;let i=await Vf(s),o=i&&i.hash===t?i.items:{},r={hash:t,items:{...o,...Object.fromEntries(e.map(a=>[a.id,a]))}};try{n.transaction(Qi,"readwrite").objectStore(Qi).put(r,s)}catch{}}};var jf=Bf;async function t0(s,t){let e=ko().find(n=>n.id===s)?.hash;if(!e)return t;try{let n=await jf.read(s,e),i=t.filter(o=>n[o]).map(o=>n[o]);return i.length&&or(s,e,i),t.filter(o=>!n[o])}catch{return t}}var e0=15,Mn=null,cl=new Map;async function en(s,t){let e=[];for(let[n,i]of Sc(t))for(let o of i){let r=`${n}/${o}`,a=cl.get(r);a||(a=n0(s,n,o).finally(()=>cl.delete(r)),cl.set(r,a)),e.push(a)}await Promise.all(e)}function n0(s,t,e){if(!Mn){let n={hass:s,wanted:new Map,done:Promise.resolve()};n.done=new Promise(i=>setTimeout(i,e0)).then(()=>i0(n)),Mn=n}return Mn.wanted.set(t,(Mn.wanted.get(t)??new Set).add(e)),Mn.done}async function i0(s){Mn===s&&(Mn=null),await Promise.all([...s.wanted].map(async([t,e])=>{try{let n=await t0(t,[...e]);if(!n.length)return;let i=await sc(s.hass,t,n);or(t,i.hash,i.items),i.hash&&await jf.write(t,i.hash,i.items).catch(()=>{})}catch{}}))}function Kf(s){let t=new Set;for(let e of s.floors)for(let n of e.furniture)for(let i of[n.type,n.vehicle,...(n.types??[]).map(o=>o.vehicle),...(n.rack?.slots??[]).map(o=>o.type)])i&&wt(i)&&t.add(i);return[...t]}var Uf=[{keys:["Ctrl+Z"],text:"help_key_undo"},{keys:["Ctrl+Y","Ctrl+Shift+Z"],text:"help_key_redo"},{keys:["Ctrl+D"],text:"help_key_duplicate"},...Sf,{keys:["Del","Backspace"],text:"help_key_delete"},{keys:["\u2190\u2191\u2192\u2193"],text:"help_key_nudge"},{keys:["R","Shift+R"],text:"help_key_rotate"},{keys:["L"],text:"help_key_lock"},{keys:["Shift+click"],text:"help_key_multi"},{keys:["Alt+click"],text:"help_key_pick_through"},{keys:["Enter"],text:"help_key_close_shape"},{keys:["Esc"],text:"help_key_escape"},{keys:["Shift","Alt"],text:"help_key_snap"},{keys:["?"],text:"help_key_help"}],Gf=[{mark:"swing",text:"help_legend_swing"},{mark:"track",text:"help_legend_track"},{mark:"guide",text:"help_legend_guide"},{mark:"snap",text:"help_legend_snap"},{mark:"ghost",text:"help_legend_ghost"},{mark:"selected",text:"help_legend_selected"}];function qf(s){return s.key==="?"&&!s.ctrlKey&&!s.metaKey&&!s.altKey}function Yf(s){if(!s.hasFloor)return"hint_empty";if(s.placing)return"hint_place";if(s.wallPick)return"hint_wall_pick";if(s.fixedHint)return"fixed_drag_hint";if(s.tool==="outdoor"&&s.outdoorFree)return"hint_outdoor_free";if(s.tool==="pool")return s.jointPlace?"hint_joint_place":s.pipeMode?s.poolArea?s.pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool":s.poolTech?"hint_pool_tech":"hint_pool";if(s.tool==="select"){if(!s.rooms)return"hint_first_room";if(s.selected==="furniture")return"hint_sel_furniture";if(s.selected==="opening")return"hint_sel_opening";if(s.selected==="device")return"hint_sel_device"}return`hint_${s.tool}`}var Xf=(s,t,e)=>{let n=new Map;for(let i=t;i<=e;i++)n.set(s[i],i);return n},Qf=pe(class extends ie{constructor(s){if(super(s),s.type!==Bt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let n;e===void 0?e=t:t!==void 0&&(n=t);let i=[],o=[],r=0;for(let a of s)i[r]=n?n(a,r):r,o[r]=e(a,r),r++;return{values:o,keys:i}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,n]){let i=Zl(s),{values:o,keys:r}=this.dt(t,e,n);if(!Array.isArray(i))return this.ut=r,o;let a=this.ut??=[],l=[],c,d,u=0,h=i.length-1,p=0,f=o.length-1;for(;u<=h&&p<=f;)if(i[u]===null)u++;else if(i[h]===null)h--;else if(a[u]===r[p])l[p]=Ve(i[u],o[p]),u++,p++;else if(a[h]===r[f])l[f]=Ve(i[h],o[f]),h--,f--;else if(a[u]===r[f])l[f]=Ve(i[u],o[f]),An(s,l[f+1],i[u]),u++,f--;else if(a[h]===r[p])l[p]=Ve(i[h],o[p]),An(s,i[u],i[h]),h--,p++;else if(c===void 0&&(c=Xf(r,p,f),d=Xf(a,u,h)),c.has(a[u]))if(c.has(a[h])){let _=d.get(r[p]),g=_!==void 0?i[_]:null;if(g===null){let y=An(s,i[u]);Ve(y,o[p]),l[p]=y}else l[p]=Ve(g,o[p]),An(s,i[u],g),i[_]=null;p++}else go(i[h]),h--;else go(i[u]),u++;for(;p<=f;){let _=An(s,l[f+1]);Ve(_,o[p]),l[p++]=_}for(;u<=h;){let _=i[u++];_!==null&&go(_)}return this.ut=r,mo(s,l),Ot}});var o0="home3d-thumbs",Ji="thumbs",dl=new Map,$s=null;function Jf(){return $s||($s=new Promise(s=>{try{if(typeof indexedDB>"u")return s(null);let t=indexedDB.open(o0,1);t.onupgradeneeded=()=>t.result.createObjectStore(Ji),t.onsuccess=()=>s(t.result),t.onerror=()=>s(null),t.onblocked=()=>s(null)}catch{s(null)}}),$s)}async function s0(s){let t=await Jf();return t?new Promise(e=>{try{let n=t.transaction(Ji,"readonly").objectStore(Ji).get(s);n.onsuccess=()=>e(typeof n.result=="string"?n.result:null),n.onerror=()=>e(null)}catch{e(null)}}):null}async function r0(s,t){let e=await Jf();if(e)try{e.transaction(Ji,"readwrite").objectStore(Ji).put(t,s)}catch{}}async function Zf(s,t){let e=dl.get(s);if(e)return e;let n=await s0(s);if(n)return dl.set(s,n),n;let i=await t();return i&&(dl.set(s,i),r0(s,i)),i}var a0=10,tm=24,l0=96,em="home3d.lib.open",nm="home3d.lib.fav",im="home3d.lib.recent",om="home3d.lib.recent.shut";function Ms(s,t){try{let e=localStorage.getItem(s);return e?JSON.parse(e):t}catch{return t}}function Ss(s,t){try{localStorage.setItem(s,JSON.stringify(t))}catch{}}var ul=class extends xt{static properties={entries:{attribute:!1},language:{attribute:!1},roomHint:{attribute:!1},admin:{type:Boolean},lite:{type:Boolean},t:{attribute:!1},thumb:{attribute:!1},updates:{attribute:!1},_query:{state:!0},_room:{state:!0},_electric:{state:!0},_light:{state:!0},_outdoor:{state:!0},_pack:{state:!0},_open:{state:!0},_fav:{state:!0},_recent:{state:!0},_recentShut:{state:!0},_thumbs:{state:!0},_shown:{state:!0},_limits:{state:!0}};roomTouched=!1;observer=null;observed=new WeakSet;wanted=new Set;drawing=0;warmTimer;queue=[];constructor(){super(),this.entries=[],this.language="en",this.roomHint=null,this.admin=!0,this.lite=(navigator.hardwareConcurrency??4)<=2||(navigator.deviceMemory??4)<=2,this.t=t=>t,this.thumb=null,this.updates=new Set,this._query="",this._room=null,this._electric=!1,this._light=!1,this._outdoor=!1,this._pack=null,this._open=new Set(Ms(em,["sofa","lamp"])),this._fav=Ms(nm,[]),this._recent=Ms(im,[]),this._recentShut=Ms(om,!1)===!0,this._thumbs=new Map,this._shown=new Map,this._limits=new Map}willUpdate(t){if(t.has("roomHint")&&!this.roomTouched&&(this._room=this.roomHint),t.has("entries")){clearTimeout(this.warmTimer);let e=this.entries,n=o=>{let r=Math.min(e.length,o+200);Jh(e.slice(o,r)),r<e.length&&(this.warmTimer=setTimeout(()=>n(r),0))};this.warmTimer=setTimeout(()=>n(0),300),this._pack&&!this.entries.some(o=>o.pack===this._pack)&&(this._pack=null);let i=new Set(this.entries.map(o=>o.key));this._fav=this._fav.filter(o=>i.has(o)),this._recent=this._recent.filter(o=>i.has(o)),this.queue=[]}}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.warmTimer),this.observer?.disconnect(),this.observer=null}updated(){if(this.lite||!this.thumb)return;this.observer??=new IntersectionObserver(e=>{for(let n of e){if(!n.isIntersecting)continue;let i=this.byKey.get(n.target.dataset.key??"");i&&this.want(i)}},{root:null,rootMargin:"200px"});let t=this.byKey;for(let e of this.renderRoot.querySelectorAll(".fp3d-lc-pic[data-key]")){if(!this.observed.has(e)){this.observed.add(e),this.observer.observe(e);continue}let n=t.get(e.dataset.key??"");!n||this._thumbs.has(n.type)||this.wanted.has(n.type)||(this.observer.unobserve(e),this.observer.observe(e))}}get byKey(){return new Map(this.entries.map(t=>[t.key,t]))}showVariant(t,e,n){if(this.lite||!this.thumb){this.preview(e?.type??null,n);return}let i=new Map(this._shown);e?i.set(t,e.key):i.delete(t),this._shown=i,e&&this.want(e)}want(t){this._thumbs.has(t.type)||this.wanted.has(t.type)||(this.wanted.add(t.type),this.queue.push(t),this.drain())}drain(){for(;this.drawing<2&&this.queue.length;){let t=this.queue.shift();this.drawing++;let e=`${t.type}|${t.packRelease}|${l0}|1`;Zf(e,()=>this.thumb?this.thumb(t):Promise.resolve(null)).then(n=>{if(n){let i=new Map(this._thumbs);i.set(t.type,n),this._thumbs=i}else this.wanted.delete(t.type)}).catch(()=>this.wanted.delete(t.type)).finally(()=>{this.drawing--,this.drain()})}}pick(t){this.admin&&(this._recent=[t.key,...this._recent.filter(e=>e!==t.key)].slice(0,a0),Ss(im,this._recent),this.resetFilters(),this.dispatchEvent(new CustomEvent("library-add",{detail:{type:t.type,mirror:!!t.mirror},bubbles:!0,composed:!0})))}preview(t,e){this.lite&&this.dispatchEvent(new CustomEvent("library-preview",{detail:{type:t,element:e},bubbles:!0,composed:!0}))}toggleFav(t){this._fav=this._fav.includes(t)?this._fav.filter(e=>e!==t):[...this._fav,t],Ss(nm,this._fav)}toggleRecent(){this._recentShut=!this._recentShut,Ss(om,this._recentShut)}toggleOpen(t){let e=new Set(this._open);e.has(t)?e.delete(t):e.add(t),this._open=e,Ss(em,[...e])}setRoom(t){this.roomTouched=!0,this._room=t}get filter(){return{query:this._query,room:this._room,electric:this._electric,light:this._light,outdoor:this._outdoor,pack:this._pack}}get activeFilters(){return Ka(this.filter)}clearFilters(){this.roomTouched=!0,this._room=null,this._pack=null,this._electric=this._light=this._outdoor=!1}resetFilters(){this.roomTouched=!1,this._room=this.roomHint,this._pack=null,this._electric=this._light=this._outdoor=!1}render(){let t=this.t,e=this.filter,n=Zh(this.entries,e),i=n.hits,o=this._query.trim().length>0,r=this.byKey,a=new Set(i.map(g=>g.key)),l=g=>({key:g.key,label:g.label,kind:g.kind,rooms:g.rooms,entries:[g]}),c=this._recent.map(g=>r.get(g)).filter(g=>!!g&&a.has(g.key)),d=this._fav.map(g=>r.get(g)).filter(g=>!!g&&a.has(g.key)),u=$n.map(g=>({kind:g,cards:Ua(n.inRoom,g)})).filter(g=>g.cards.length),h=n.otherRooms.length?$n.flatMap(g=>Ua(n.otherRooms,g)):[],p=u.length&&!u.some(g=>this._open.has(g.kind))?u[0].kind:null,f=Ka(e),_=g=>g==="room"?t(`lib_room_${this._room}`):g==="pack"?this.entries.find(y=>y.pack===this._pack)?.packLabel??this._pack??"":t(`lib_chip_${g}`);return m`<input
        class="fp3d-search"
        type="search"
        placeholder=${t("furniture_search")}
        .value=${this._query}
        @input=${g=>this._query=g.target.value}
        @keydown=${g=>{g.key==="Escape"&&(this._query="")}}
      />
      <div class="fp3d-lib-rooms" role="group">
        <button class="fp3d-chip ${this._room===null?"on":""}" @click=${()=>this.setRoom(null)}>${t("lib_room_all")}</button>
        ${ri.map(g=>m`<button class="fp3d-chip ${this._room===g?"on":""}" @click=${()=>this.setRoom(g)}>${t(`lib_room_${g}`)}</button>`)}
      </div>
      ${this.packChips()}
      <div class="fp3d-lib-chips">
        <button class="fp3d-chip fp3d-chip-f ${this._electric?"on":""}" @click=${()=>this._electric=!this._electric}>⚡ ${t("lib_chip_electric")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._light?"on":""}" @click=${()=>this._light=!this._light}>💡 ${t("lib_chip_light")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._outdoor?"on":""}" @click=${()=>this._outdoor=!this._outdoor}>🌳 ${t("lib_chip_outdoor")}</button>
      </div>
      ${f.length?m`<div class="fp3d-lib-active" role="status">
            <span>${t("lib_filters")} ${f.map(_).join(" \xB7 ")}${n.hiddenByChips?m` <span class="fp3d-lib-hidden">(${t("lib_hidden_by_filters",{n:n.hiddenByChips})})</span>`:b}</span>
            <button class="fp3d-lib-clear" @click=${()=>this.clearFilters()}>${t("lib_clear_filters")}</button>
          </div>`:b}
      ${!o&&this.roomHint&&this._room===this.roomHint&&!this.roomTouched?m`<p class="fp3d-lib-hint">${t("lib_hint_room")}</p>`:b}
      ${i.length?b:m`<p class="fp3d-lib-hint">${t("furniture_search_none")}</p>`}
      ${c.length?this.section("recent",`\u{1F558} ${t("lib_recent")}`,c.map(l),o,!0):b}
      ${d.length?this.section("fav",`\u2605 ${t("lib_favorites")}`,d.map(l),o,!0):b}
      ${u.map(g=>this.section(g.kind,t(`lib_kind_${g.kind}`),g.cards,o||g.kind===p,!1))}
      ${h.length?this.section("other-rooms",t("lib_other_rooms",{n:n.otherRooms.length}),h,!0,!0):b}`}packChips(){let t=new Map;for(let e of this.entries)e.pack&&e.packLabel&&t.set(e.pack,e.packLabel);return t.size<2?b:m`<div class="fp3d-lib-chips" role="group" aria-label=${this.t("lib_pack_all")}>
      <button class="fp3d-chip ${this._pack===null?"on":""}" @click=${()=>this._pack=null}>${this.t("lib_pack_all")}</button>
      ${[...t].map(([e,n])=>m`<button class="fp3d-chip ${this._pack===e?"on":""}" @click=${()=>this._pack=e}>${n}</button>`)}
    </div>`}section(t,e,n,i,o){let r=t==="recent",a=r?!this._recentShut:i||o||this._open.has(t),l=this._limits.get(t)??tm,c=n.slice(0,l),d=n.reduce((u,h)=>u+h.entries.length,0);return m`<button class="fp3d-lib-head fp3d-lib-toggle ${r?"fp3d-lib-recent":""}" aria-expanded=${a} @click=${()=>r?this.toggleRecent():o?void 0:this.toggleOpen(t)}>
        <span class="fp3d-lib-caret">${o&&!r?"":a?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${d}</span>
      </button>
      ${a?m`<div class="fp3d-lib-grid ${r?"fp3d-lib-recent-grid":""}">${Qf(c,u=>u.key,u=>this.card(u))}</div>
            ${n.length>l?m`<button class="fp3d-lib-more" @click=${()=>{let u=new Map(this._limits);u.set(t,l+tm*2),this._limits=u}}>${this.t("lib_more",{n:n.length-l})}</button>`:b}`:b}`}card(t){let e=this.t,n=t.entries[0],i=t.entries.length>1,o=this._fav.includes(n.key),r=this._shown.get(n.key),a=r&&t.entries.find(u=>u.key===r)||n,l=this._thumbs.get(a.type)??this._thumbs.get(n.type),c=n.light?"\u{1F4A1}":n.electric?"\u26A1":"",d=df(t.entries.map(u=>u.type),this.updates,this.admin);return m`<div class="fp3d-lc ${i?"fp3d-lc-family":""}" title=${a.ikea?`${a.label} (IKEA ${a.ikea})`:a.label} @mouseleave=${()=>i&&this.showVariant(n.key,null,null)}>
      <button
        class="fp3d-lc-main"
        ?disabled=${!this.admin}
        @click=${()=>this.pick(n)}
        @mouseenter=${u=>this.preview(n.type,u.currentTarget)}
        @focus=${u=>this.preview(n.type,u.currentTarget)}
        @mouseleave=${()=>this.preview(null,null)}
        @blur=${()=>this.preview(null,null)}
      >
        ${this.lite?b:m`<span class="fp3d-lc-pic" data-key=${n.key}>${l?m`<img src=${l} alt="" loading="lazy" class=${(this._thumbs.has(a.type)?a:n).mirror?"fp3d-lc-mirrored":""} />`:m`<span class="fp3d-lc-wait"></span>`}</span>`}
        <span class="fp3d-lc-label">${t.label}${c?m` <span class="fp3d-lc-badge">${c}</span>`:b}</span>
        <span class="fp3d-lc-sub">${i?e("lib_sizes",{n:t.entries.length}):Ga(n.size,this.language)}${n.packLabel?m` · ${n.packLabel}`:m` · ${e("lib_basic")}`}</span>
      </button>
      ${i?m`<div class="fp3d-lc-chips">
            ${t.entries.map(u=>m`<button
                title="${u.label} · ${Ga(u.size,this.language)}"
                ?disabled=${!this.admin}
                class="fp3d-lc-chip ${a.key===u.key&&i&&r?"on":""}"
                @click=${()=>this.pick(u)}
                @mouseenter=${h=>this.showVariant(n.key,u,h.currentTarget)}
                @focus=${h=>this.showVariant(n.key,u,h.currentTarget)}
                @mouseleave=${()=>this.preview(null,null)}
                @blur=${()=>this.preview(null,null)}
              >${u.variant??u.label}</button>`)}
          </div>`:b}
      ${d.length?m`<button
            class="fp3d-lc-update"
            title=${e("lib_update_title")}
            @click=${()=>this.dispatchEvent(new CustomEvent("library-update",{detail:{types:d},bubbles:!0,composed:!0}))}
          >
            ⟳ ${e("upd_update")}
          </button>`:b}
      <button class="fp3d-lc-fav ${o?"on":""}" title=${e(o?"lib_fav_remove":"lib_fav_add")} aria-label=${e(o?"lib_fav_remove":"lib_fav_add")} @click=${()=>this.toggleFav(n.key)}>${o?"\u2605":"\u2606"}</button>
    </div>`}static styles=[Yt,zt`
      :host {
        display: block;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: var(--fp3d-panel, #0d1424);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 8px 10px;
        margin: 6px 0 8px;
      }
      .fp3d-lib-rooms,
      .fp3d-lib-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 6px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 3px 9px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-chip.on {
        background: var(--fp3d-accent);
        color: #041018;
        border-color: var(--fp3d-accent);
        font-weight: 600;
      }
      .fp3d-chip-f {
        font-size: 11px;
      }
      .fp3d-lib-hint {
        margin: 2px 0 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-active {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 4px 8px;
        margin: 0 0 8px;
        padding: 5px 8px;
        font-size: 12px;
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
        background: rgba(80, 200, 255, 0.08);
      }
      .fp3d-lib-hidden {
        color: var(--fp3d-muted);
      }
      .fp3d-lib-clear {
        margin-left: auto;
        padding: 2px 8px;
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: 1px solid var(--fp3d-accent);
        border-radius: 999px;
        cursor: pointer;
      }
      .fp3d-lib-head {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        margin: 10px 0 4px;
        padding: 4px 0;
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        border-bottom: 1px solid var(--fp3d-line);
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lib-recent {
        padding-left: 8px;
        border-left: 3px solid var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 10%, transparent);
      }
      .fp3d-lib-recent-grid {
        padding: 6px 0 6px 8px;
        border-left: 3px solid var(--fp3d-accent);
        background: color-mix(in srgb, var(--fp3d-accent) 5%, transparent);
      }
      .fp3d-lib-caret {
        width: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-lib-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
        gap: 6px;
      }
      .fp3d-lc {
        position: relative;
        display: flex;
        flex-direction: column;
        /* cards out of view are not laid out or painted: a first letter typed shows hundreds of them (#131) */
        content-visibility: auto;
        contain-intrinsic-size: auto 220px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        overflow: hidden;
      }
      .fp3d-lc:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-lc-main {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 2px;
        padding: 6px 6px 5px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lc-main:disabled {
        cursor: default;
        opacity: 0.6;
      }
      .fp3d-lc-pic {
        display: block;
        height: 64px;
        border-radius: 6px;
        background: radial-gradient(ellipse at 50% 70%, rgba(80, 200, 255, 0.12), transparent 70%);
      }
      .fp3d-lc-pic img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .fp3d-lc-pic img.fp3d-lc-mirrored {
        transform: scaleX(-1);
      }
      .fp3d-lc-wait {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.03);
      }
      .fp3d-lc-label {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.25;
        padding-right: 16px;
      }
      .fp3d-lc-badge {
        font-size: 10px;
      }
      .fp3d-lc-sub {
        font-size: 10.5px;
        color: var(--fp3d-muted);
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-lc-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        padding: 0 6px 6px;
      }
      .fp3d-lc-chip {
        font: inherit;
        font-size: 11px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        padding: 2px 6px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-lc-chip:hover,
      .fp3d-lc-chip.on {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lc-fav {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 22px;
        height: 22px;
        padding: 0;
        font-size: 14px;
        line-height: 22px;
        color: var(--fp3d-muted);
        background: rgba(4, 16, 24, 0.55);
        border: 0;
        border-radius: 50%;
        cursor: pointer;
      }
      .fp3d-lc-fav.on,
      .fp3d-lc-fav:hover {
        color: #ffd166;
      }
      .fp3d-lc-update {
        position: absolute;
        top: 4px;
        left: 4px;
        padding: 2px 7px;
        font: inherit;
        font-size: 10.5px;
        font-weight: 600;
        color: #04101a;
        background: #ffd166;
        border: 0;
        border-radius: 999px;
        cursor: pointer;
      }
      .fp3d-lib-more {
        display: block;
        width: 100%;
        margin: 6px 0 2px;
        padding: 6px;
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-accent);
        background: none;
        border: 1px dashed var(--fp3d-line);
        border-radius: 8px;
        cursor: pointer;
      }
    `]};customElements.get("fp3d-library")||customElements.define("fp3d-library",ul);var c0=24,am=6,lm=3,pl=[2,lm+am],d0=0;function sm(s){let t="";do t=`g${Date.now().toString(36)}${(d0++).toString(36)}`;while(s.some(e=>e.id===t));return t}function rm(s){let e=s.currentTarget?.clientWidth||1;return Math.min(.999,Math.max(0,s.offsetX/e))}var hl=class extends xt{static properties={heading:{},space:{attribute:!1},labels:{attribute:!1},slots:{attribute:!1},gear:{attribute:!1},loose:{attribute:!1},gearOf:{attribute:!1},looseOf:{attribute:!1},nameOf:{attribute:!1},editable:{type:Boolean},linker:{attribute:!1},t:{attribute:!1},selected:{state:!0},pick:{state:!0},ghost:{state:!0},refused:{state:!0},face:{state:!0}};constructor(){super(),this.heading="",this.labels=[],this.slots=[],this.gear=[],this.loose=[],this.gearOf=()=>null,this.looseOf=()=>null,this.nameOf=t=>t,this.editable=!1,this.linker=null,this.t=t=>t,this.selected=null,this.pick=null,this.ghost=null,this.refused=null,this.face="front"}get hasRear(){return this.space?.rear!==!1}get shownFace(){return this.hasRear?this.face:"front"}send(t){this.slots=t,this.dispatchEvent(new CustomEvent("rack-change",{detail:{slots:t},bubbles:!0,composed:!0}))}refuse(t){this.refused={units:t.units,clash:t.clash,why:t.why??"overlap"}}setFace(t){this.face=t,this.ghost=null,this.refused=null}pickGear(t){this.editable&&(this.refused=null,this.ghost=null,this.pick=this.pick&&"add"in this.pick&&this.pick.add===t?null:{add:t})}tapSlot(t){this.refused=null,this.ghost=null,this.pick=null,this.selected=this.selected===t?null:t}startMove(){let t=this.slots.find(e=>e.id===this.selected);!this.editable||!t||t.on||(this.refused=null,this.pick={move:t.id})}hoverUnit(t,e=0){if(t===null||!this.pick){this.ghost=null;return}let n=this.candidate(t,e,null);!n||this.isLane(n)||this.showGhost(n)}hoverLane(t,e){let n=this.pick?this.candidate(t,0,e):null;!n||!this.isLane(n)||this.showGhost(n)}showGhost(t){let e=Pi(this.space,this.slots,t,this.gearOf,this.looseOf);this.ghost={units:e.units,ok:e.ok,clash:e.clash,...t.col?{col:t.col}:{}}}tapUnit(t,e=0){let n=this.pick&&this.candidate(t,e,null);if(!n||this.isLane(n)){(!this.pick||!this.editable)&&(this.selected=null,this.refused=null);return}this.place(n)}tapLane(t,e){let n=this.pick&&this.candidate(t,0,e);n&&this.isLane(n)&&this.place(n)}place(t){if(!this.pick||!this.editable)return;let n=jo(this.space,this.slots,t,this.gearOf,this.looseOf);if(!n.ok)return this.refuse(n);this.refused=null,this.ghost=null,this.pick=null,this.selected=t.id,this.send(n.slots)}nudge(t){let e=this.slots.find(i=>i.id===this.selected);if(!this.editable||!e||e.on)return;let n=ou(this.space,this.slots,e.id,e.u+t,this.gearOf,this.looseOf);if(!n.ok)return this.refuse(n);this.refused=null,this.send(n.slots)}nudgeCol(t){let e=this.slots.find(n=>n.id===this.selected);!e||e.on||this.replace({...e,col:(e.col??0)+t})}flipFace(){let t=this.slots.find(i=>i.id===this.selected);if(!t||t.on)return;let{face:e,...n}=t;this.replace(t.face==="rear"?n:{...n,face:"rear"})}putOnShelf(t){let e=this.slots.find(o=>o.id===this.selected);if(!this.editable||!e||e.on||!this.gearOf(e.type)?.gear.shelf)return;let n={id:sm(this.slots),type:t,u:e.u,on:e.id},i=jo(this.space,this.slots,n,this.gearOf,this.looseOf);if(!i.ok)return this.refuse(i);this.refused=null,this.send(i.slots)}replace(t){if(!this.editable)return;let e=jo(this.space,this.slots,t,this.gearOf,this.looseOf);if(!e.ok)return this.refuse(e);this.refused=null,this.send(e.slots)}rename(t){if(!this.editable||!this.selected)return;let e=t.trim().slice(0,60);this.send(this.slots.map(n=>n.id===this.selected?{...n,name:e||null}:n))}relink(t){!this.editable||!this.selected||this.send(this.slots.map(e=>e.id===this.selected?{...e,...t(e)}:e))}linkDevice(t){if(!this.editable||!this.linker||!t)return;let e=this.linker.fromDevice(t);this.relink(n=>({entity:e.entity,links:e.links.slice(0,16),...!n.name&&e.name?{name:e.name.slice(0,60)}:{}}))}setStatusEntity(t){this.relink(e=>({entity:t||null,links:(e.links??[]).filter(n=>n!==t)}))}addLink(t){let e=this.slots.find(i=>i.id===this.selected),n=e?.links??[];!e||!t||t===e.entity||n.includes(t)||n.length>=16||this.relink(()=>({links:[...n,t]}))}removeLink(t){this.relink(e=>({links:(e.links??[]).filter(n=>n!==t)}))}deleteSelected(){if(!this.editable||!this.selected)return;let t=this.selected;this.selected=null,this.pick=null,this.refused=null,this.send(su(this.slots,t))}close(){this.dispatchEvent(new CustomEvent("rack-close",{bubbles:!0,composed:!0}))}isLane(t){let e=this.gearOf(t.type);return!!e&&e.gear.u<1}candidate(t,e,n){let i=this.pick;if(!i)return null;let o="add"in i?{id:sm(this.slots),type:i.add,u:t}:this.slots.find(p=>p.id===i.move);if(!o)return null;let r=this.gearOf(o.type),{col:a,face:l,...c}={...o,u:t},d=c,u=n??(r&&r.gear.u>=1?Math.floor(e*Be[r.gear.width]):0);return u&&(d.col=u),("add"in i?this.shownFace:o.face??"front")==="rear"&&r?.gear.depth!=="full"&&(d.face="rear"),d}onKey=t=>{t.target?.tagName!=="INPUT"&&(t.key==="Escape"?(t.stopPropagation(),this.pick||this.refused?(this.pick=null,this.ghost=null,this.refused=null):this.close()):t.key==="ArrowUp"||t.key==="ArrowDown"?(t.preventDefault(),t.stopPropagation(),this.nudge(t.key==="ArrowUp"?1:-1)):t.key==="ArrowLeft"||t.key==="ArrowRight"?(t.preventDefault(),t.stopPropagation(),this.nudgeCol(t.key==="ArrowRight"?1:-1)):t.key==="Delete"&&(t.stopPropagation(),this.deleteSelected()))};row(t,e){return`${this.space.u-(t+e-1)+1} / span ${e}`}column(t,e){let n=this.gearOf(t);if(n&&n.gear.u<1)return`${pl[e]??pl[0]} / span 1`;let i=n?Be[n.gear.width]:1,o=am/i;return`${lm+Math.min(e,i-1)*o} / span ${o}`}onFace(t){let e=this.gearOf(t.type);return e?Si(t,e.gear).includes(this.shownFace):this.shownFace==="front"}render(){let t=this.t,e=this.space?.u??0,n=Array.from({length:e},(u,h)=>e-h),i=this.space?Ko(this.space,this.slots,this.gearOf,this.looseOf):[],o=new Set(this.refused?.units??[]),r=new Set([...this.refused?.clash??[],...this.ghost&&!this.ghost.ok?this.ghost.clash:[],...i.map(u=>u.id)]),a=this.slots.find(u=>u.id===this.selected)??null,l=u=>this.labels[u-1]??u,c=this.slots.filter(u=>!u.on&&this.onFace(u)),d=this.pick?"add"in this.pick?this.pick.add:this.slots.find(u=>this.pick&&"move"in this.pick&&u.id===this.pick.move)?.type:void 0;return m`<div class="fp3d-rack-veil" @click=${u=>u.target===u.currentTarget&&this.close()} @keydown=${this.onKey}>
      <div class="fp3d-rack-sheet" role="dialog" aria-label=${t("rack_edit")} tabindex="-1">
        <div class="fp3d-rack-head">
          <h3>${this.heading||t("rack_edit")}</h3>
          ${this.renderTotals()}
          ${this.hasRear?m`<div class="fp3d-rack-faces" role="group">
                ${["front","rear"].map(u=>m`<button class="fp3d-btn" aria-pressed=${this.shownFace===u} @click=${()=>this.setFace(u)}>${t(`rack_face_${u}`)}</button>`)}
              </div>`:b}
          <button class="fp3d-btn" aria-label=${t("close")} @click=${()=>this.close()}>✕</button>
        </div>
        <div class="fp3d-rack-body">
          <div class="fp3d-rack-elev" style="grid-template-rows: repeat(${e}, ${c0}px)" @pointerleave=${()=>this.hoverUnit(null)}>
            ${n.map(u=>m`<span class="fp3d-rack-num fp3d-rack-left" style="grid-row: ${this.row(u,1)}">${l(u)}</span>
                ${pl.map((h,p)=>m`<button
                      class="fp3d-rack-lane"
                      style="grid-row: ${this.row(u,1)}; grid-column: ${h}"
                      aria-label=${`${p?"\u25B6":"\u25C0"} ${t("rack_unit",{n:l(u)})}`}
                      @pointerenter=${()=>this.hoverLane(u,p)}
                      @click=${()=>this.tapLane(u,p)}
                    ></button>`)}
                <button
                  class="fp3d-rack-cell ${o.has(u)?"fp3d-rack-bad":""}"
                  style="grid-row: ${this.row(u,1)}"
                  data-u=${u}
                  aria-label=${t("rack_unit",{n:l(u)})}
                  @pointermove=${h=>this.hoverUnit(u,rm(h))}
                  @click=${h=>this.tapUnit(u,rm(h))}
                ></button>
                <span class="fp3d-rack-num fp3d-rack-right" style="grid-row: ${this.row(u,1)}">${l(u)}</span>`)}
            ${c.map(u=>this.renderSlot(u,r))}
            ${this.ghost?.units.length&&d?m`<div
                  class="fp3d-rack-ghost ${this.ghost.ok?"fp3d-rack-ok":"fp3d-rack-bad"}"
                  style="grid-row: ${this.row(Math.max(1,this.ghost.units[0]),Math.min(this.ghost.units.length,e-Math.max(1,this.ghost.units[0])+1))}; grid-column: ${this.column(d,this.ghost.col??0)}"
                ></div>`:b}
          </div>
          <div class="fp3d-rack-side">
            ${this.refused?m`<p class="fp3d-rack-why" role="alert">${t(`rack_${this.refused.why}`)}</p>`:b}
            ${i.length?m`<section class="fp3d-rack-misfits">
                  <p class="fp3d-rack-why" role="alert">${t("rack_misfits",{n:i.length})}</p>
                  <ul>
                    ${i.map(u=>{let h=this.slots.find(p=>p.id===u.id);return m`<li><button class="fp3d-link" @click=${()=>this.tapSlot(h.id)}>${h.name||this.nameOf(h.type)}: ${t(`rack_${u.why}`)}</button></li>`})}
                  </ul>
                </section>`:b}
            ${a?this.renderChosen(a):b}
            ${this.editable?this.renderGear():m`<p class="fp3d-sub">${t("rack_read_only")}</p>`}
          </div>
        </div>
      </div>
    </div>`}renderTotals(){if(!this.space)return b;let t=this.t,e=au(this.space,this.slots,this.gearOf,this.looseOf);return m`<p class="fp3d-rack-totals">
      <span>${t("rack_totals",{used:e.used,free:e.free})}</span>
      <span>${e.unknown?t("rack_watts_about",{w:e.watts}):`${e.watts} W`}</span>
    </p>`}renderSlot(t,e){let n=this.space.u,i=Bn(t,this.gearOf).length;if(t.u<1||t.u+i-1>n)return b;let o=this.gearOf(t.type),r=p=>["fp3d-rack-gear",p===this.selected?"fp3d-rack-chosen":"",e.has(p)?"fp3d-rack-bad":"",this.pick&&"move"in this.pick&&this.pick.move===p?"fp3d-rack-moving":""].join(" "),a=`grid-row: ${this.row(t.u,i)}; grid-column: ${this.column(t.type,t.col??0)}`,l=t.name||this.nameOf(t.type);if(o&&o.gear.u<1)return m`<button class="${r(t.id)} fp3d-rack-pdu" style=${a} data-slot=${t.id} title=${l} aria-label=${l} aria-pressed=${t.id===this.selected} @click=${()=>this.tapSlot(t.id)}></button>`;let c=this.linker?.status(t)??null,d=c?m`<i class="fp3d-rack-led fp3d-rack-led-${c}" style="background:${Bo[c]}"></i>`:b,u=m`<span>${l}</span>${i>1?m`<small>${i}U</small>`:b}${d}`;if(!o?.gear.shelf)return m`<button class=${r(t.id)} style=${a} data-slot=${t.id} aria-pressed=${t.id===this.selected} @click=${()=>this.tapSlot(t.id)}>${u}</button>`;let h=this.slots.filter(p=>p.on===t.id);return m`<div class="fp3d-rack-shelf" style=${a}>
      <button class="${r(t.id)} fp3d-rack-shelf-tray" data-slot=${t.id} aria-pressed=${t.id===this.selected} @click=${()=>this.tapSlot(t.id)}>${u}</button>
      ${h.map(p=>m`<button class="${r(p.id)} fp3d-rack-loose" data-slot=${p.id} aria-pressed=${p.id===this.selected} @click=${()=>this.tapSlot(p.id)}>${p.name||this.nameOf(p.type)}</button>`)}
    </div>`}renderChosen(t){let e=this.t,n=Bn(t,this.gearOf),i=c=>this.labels[c-1]??c,o=n.length>1?`${i(n[0])}-${i(n.at(-1))}`:`${i(n[0])}`,r=t.on?null:this.gearOf(t.type),a=r?r.gear.u<1?2:Be[r.gear.width]:1,l=t.on?this.slots.find(c=>c.id===t.on):null;return m`<section class="fp3d-rack-chosen-box">
      <h4>${t.name||this.nameOf(t.type)}</h4>
      <p class="fp3d-sub">${l?`\u2912 ${l.name||this.nameOf(l.type)}`:e("rack_at",{u:o})}${r&&r.gear.depth==="full"?m` · ${e("rack_full_depth")}`:t.face==="rear"&&this.hasRear?m` · ${e("rack_face_rear")}`:b}</p>
      ${this.editable?m`<label class="fp3d-field"
              >${e("furn_name")}
              <input type="text" maxlength="60" .value=${t.name??""} placeholder=${this.nameOf(t.type)} @change=${c=>this.rename(c.target.value)}
            /></label>
            <div class="fp3d-rack-actions">
              ${t.on?b:m`<button class="fp3d-btn" title=${e("rack_up")} @click=${()=>this.nudge(1)}>▲</button>
                    <button class="fp3d-btn" title=${e("rack_down")} @click=${()=>this.nudge(-1)}>▼</button>
                    ${a>1?m`<button class="fp3d-btn" ?disabled=${(t.col??0)<=0} @click=${()=>this.nudgeCol(-1)}>◀</button>
                          <button class="fp3d-btn" ?disabled=${(t.col??0)>=a-1} @click=${()=>this.nudgeCol(1)}>▶</button>`:b}
                    ${this.hasRear&&r&&r.gear.depth!=="full"?m`<button class="fp3d-btn" @click=${()=>this.flipFace()}>⇄ ${e(t.face==="rear"?"rack_face_front":"rack_face_rear")}</button>`:b}
                    <button class="fp3d-btn" aria-pressed=${!!this.pick&&"move"in this.pick} @click=${()=>this.startMove()}>${e("rack_move")}</button>`}
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSelected()}>${e("delete")}</button>
            </div>
            ${this.pick&&"move"in this.pick?m`<p class="fp3d-sub">${e("rack_move_hint")}</p>`:b}
            ${r?.gear.shelf?this.renderShelf():b}`:b}
      ${this.renderLinks(t)}
    </section>`}renderLinks(t){let e=this.linker;if(!e)return b;let n=this.t,i=t.links??[],o=(l,c,d,u)=>m`<fp3d-entity-picker
        .options=${l}
        .fixed=${d}
        .value=${c}
        .placeholder=${n("entity_search")}
        @change=${h=>{h.stopPropagation(),u(h.detail.value)}}
      ></fp3d-entity-picker>`,r={id:"none",label:n("entity_none")};if(!this.editable)return t.entity||i.length?m`<h4>${n("rack_links")}</h4>
            <ul class="fp3d-rack-links">
              ${[t.entity,...i].filter(l=>!!l).map(l=>m`<li>${e.label(l)}</li>`)}
            </ul>`:b;let a=e.suggest(t).filter(l=>l!==t.entity&&!i.includes(l));return m`<h4>${n("rack_links")}</h4>
      <label class="fp3d-field">${n("rack_ha_device")} ${o(e.devices,null,[],l=>this.linkDevice(l))}</label>
      <label class="fp3d-field">${n("rack_status_from")} ${o(e.entities,t.entity??"none",[r],l=>this.setStatusEntity(l==="none"?null:l))}</label>
      ${i.length?m`<ul class="fp3d-rack-links">
            ${i.map(l=>m`<li><span>${e.label(l)}</span><button class="fp3d-btn" aria-label=${n("delete")} @click=${()=>this.removeLink(l)}>✕</button></li>`)}
          </ul>`:b}
      ${i.length<16?m`<label class="fp3d-field">${n("rack_link_add")} ${o(e.entities,null,[],l=>this.addLink(l))}</label>`:b}
      ${a.length&&i.length<16?m`<p class="fp3d-sub">${n("rack_suggested")}</p>
            <div class="fp3d-rack-list">${a.map(l=>m`<button class="fp3d-btn fp3d-rack-choice" @click=${()=>this.addLink(l)}>+ ${e.label(l)}</button>`)}</div>`:b}`}renderShelf(){let t=this.t;return m`<h4>${t("rack_on_shelf")}</h4>
      ${this.loose.length?m`<div class="fp3d-rack-list">${this.loose.map(e=>m`<button class="fp3d-btn fp3d-rack-choice" @click=${()=>this.putOnShelf(e.type)}>${e.name}</button>`)}</div>`:m`<p class="fp3d-sub">${t("rack_no_loose")}</p>`}`}renderGear(){let t=this.t,e=this.pick&&"add"in this.pick?this.pick.add:null,n=e?(this.gearOf(e)?.gear.u??1)<1:!1;return m`<section>
      <h4>${t("rack_add")}</h4>
      ${this.gear.length?m`<div class="fp3d-rack-list">
            ${this.gear.map(i=>{let o=this.gearOf(i.type)?.gear,a=`${o?.u??1}U${o&&o.width!=="full"?` ${t(`rack_width_${o.width}`)}`:""}`;return m`<button class="fp3d-btn fp3d-rack-choice" aria-pressed=${e===i.type} @click=${()=>this.pickGear(i.type)}>${i.name}<small>${a}</small></button>`})}
          </div>`:m`<p class="fp3d-sub">${t("rack_no_gear")}</p>`}
      ${e?m`<p class="fp3d-sub">${t(n?"rack_lane_hint":"rack_add_hint")}</p>`:b}
    </section>`}static styles=[Yt,Ke,zt`
      .fp3d-rack-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: flex;
        align-items: center;
        /* at the left, so the editor's 3D pane on the right shows the rack as it changes */
        justify-content: flex-start;
        background: rgba(0, 0, 0, 0.25);
        padding: 16px;
      }
      .fp3d-rack-sheet {
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        box-shadow: var(--fp3d-shadow);
        width: min(720px, 100%);
        max-height: calc(100% - 16px);
        display: flex;
        flex-direction: column;
        outline: none;
      }
      .fp3d-rack-head {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 10px 14px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rack-head h3 {
        margin: 0;
        font-size: 16px;
      }
      .fp3d-rack-body {
        display: flex;
        gap: 16px;
        padding: 14px;
        overflow: auto;
      }
      .fp3d-rack-elev {
        display: grid;
        /* U numbers, the left 0U lane, the U space in 6 (halves take 3, thirds 2), the right lane, U numbers */
        grid-template-columns: 28px 14px repeat(6, minmax(30px, 47px)) 14px 28px;
        flex: none;
        align-self: flex-start;
        border-radius: 6px;
        background: var(--fp3d-bg);
        padding: 6px 0;
      }
      .fp3d-rack-num {
        font-size: 11px;
        color: var(--fp3d-muted);
        display: flex;
        align-items: center;
        justify-content: center;
        font-variant-numeric: tabular-nums;
        border-bottom: 1px dotted var(--fp3d-line);
      }
      .fp3d-rack-left {
        grid-column: 1;
      }
      .fp3d-rack-right {
        grid-column: 10;
      }
      .fp3d-rack-cell,
      .fp3d-rack-gear,
      .fp3d-rack-ghost {
        grid-column: 3 / span 6;
      }
      .fp3d-rack-lane {
        border: 0;
        border-bottom: 1px dotted var(--fp3d-line);
        background: rgba(120, 170, 255, 0.04);
        padding: 0;
        cursor: pointer;
      }
      .fp3d-rack-lane:hover {
        background: rgba(120, 170, 255, 0.14);
      }
      .fp3d-rack-gear.fp3d-rack-pdu {
        margin: 1px 1px;
        padding: 0;
        background: repeating-linear-gradient(180deg, var(--fp3d-bg2) 0 6px, var(--fp3d-line) 6px 8px);
      }
      .fp3d-rack-shelf {
        z-index: 1;
        display: flex;
        align-items: stretch;
        gap: 2px;
        margin: 1px 2px;
        border-bottom: 3px solid var(--fp3d-muted);
        min-width: 0;
      }
      .fp3d-rack-shelf .fp3d-rack-gear {
        margin: 0;
      }
      .fp3d-rack-shelf-tray {
        flex: 0 0 auto;
        max-width: 45%;
        background: transparent;
        border-style: dashed;
      }
      .fp3d-rack-loose {
        flex: 1 1 0;
        min-width: 0;
        align-self: flex-end;
        height: 75%;
      }
      .fp3d-rack-totals {
        margin: 0 0 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        font-size: 12px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rack-faces {
        display: flex;
        gap: 4px;
      }
      .fp3d-rack-faces [aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-rack-misfits ul {
        margin: 6px 0 0;
        padding-left: 18px;
        font-size: 12px;
      }
      .fp3d-link {
        background: none;
        border: 0;
        padding: 0;
        color: inherit;
        font: inherit;
        text-decoration: underline;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-rack-cell {
        border: 0;
        border-bottom: 1px dotted var(--fp3d-line);
        background: transparent;
        padding: 0;
        cursor: pointer;
        font: inherit;
      }
      .fp3d-rack-cell:hover {
        background: rgba(120, 170, 255, 0.08);
      }
      .fp3d-rack-gear {
        z-index: 1;
        margin: 1px 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 3px;
        background: var(--fp3d-bg2);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        padding: 0 8px;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .fp3d-rack-gear small {
        color: var(--fp3d-muted);
      }
      .fp3d-rack-led {
        display: inline-block;
        flex: none;
        width: 8px;
        height: 8px;
        margin-left: auto;
        border-radius: 2px;
      }
      .fp3d-rack-links {
        list-style: none;
        margin: 0 0 6px;
        padding: 0;
        display: grid;
        gap: 4px;
      }
      .fp3d-rack-links li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
      }
      .fp3d-rack-gear.fp3d-rack-chosen {
        border-color: var(--fp3d-accent);
        box-shadow: inset 0 0 0 1px var(--fp3d-accent);
      }
      .fp3d-rack-gear.fp3d-rack-moving {
        opacity: 0.55;
      }
      .fp3d-rack-ghost {
        z-index: 2;
        pointer-events: none;
        margin: 1px 2px;
        border-radius: 3px;
        border: 2px dashed var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.16);
      }
      .fp3d-rack-ghost.fp3d-rack-bad,
      .fp3d-rack-cell.fp3d-rack-bad,
      .fp3d-rack-gear.fp3d-rack-bad {
        border: 2px solid var(--fp3d-danger);
        background: rgba(255, 107, 139, 0.22);
      }
      .fp3d-rack-side {
        position: sticky;
        top: 0;
        align-self: flex-start;
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fp3d-rack-side h4 {
        margin: 0 0 6px;
        font-size: 13px;
      }
      .fp3d-rack-why {
        margin: 0;
        padding: 8px 10px;
        border-radius: 6px;
        color: var(--fp3d-danger);
        border: 1px solid var(--fp3d-danger);
      }
      .fp3d-rack-list,
      .fp3d-rack-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rack-choice {
        display: flex;
        gap: 6px;
        align-items: baseline;
      }
      .fp3d-rack-choice small {
        color: var(--fp3d-muted);
      }
      .fp3d-rack-choice[aria-pressed="true"],
      .fp3d-rack-actions [aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
        margin-bottom: 8px;
      }
      @media (max-width: 600px) {
        .fp3d-rack-veil {
          padding: 0;
          align-items: stretch;
        }
        .fp3d-rack-sheet {
          border-radius: 0;
          max-height: none;
        }
        .fp3d-rack-body {
          flex-direction: column;
        }
        .fp3d-rack-side {
          position: static;
          align-self: stretch;
        }
        .fp3d-rack-elev {
          align-self: stretch;
          grid-template-columns: 28px 14px repeat(6, 1fr) 14px 28px;
        }
      }
    `]};customElements.get("fp3d-rack-sheet")||customElements.define("fp3d-rack-sheet",hl);var Ps=["status","load","battery","runtime","power","temperature","cpu","memory","disk","throughput","uptime","other","update","switch","button"],u0=new Set(["unifi","nut","apcupsd","systemmonitor","glances","synology_dsm","qnap","qnap_qsw","proxmoxve","esphome","snmp","tplink_omada","netgear","fritz","mikrotik","opnsense","pfsense","truenas","unraid","unifiprotect","zha","upnp","hassio"]),cm=8,fl=/_(port|outlet|lan|eth)_?\d+/,p0=s=>Ps.indexOf(s);function Zi(s,t){let e=t.slice(0,t.indexOf(".")),n=s.states[t],i=String(n?.attributes?.device_class??""),o=String(n?.attributes?.unit_of_measurement??""),r=`${t.slice(e.length+1)} ${s.entities?.[t]?.translation_key??""}`.toLowerCase();return e==="update"?"update":e==="button"?"button":e==="switch"?"switch":e==="device_tracker"?"status":e==="binary_sensor"?["connectivity","running","plug","power","problem"].includes(i)||/status|state|online|connected|running/.test(r)?"status":"other":e!=="sensor"?"other":/runtime/.test(r)||i==="duration"&&/battery/.test(r)?"runtime":i==="battery"||/battery|charge/.test(r)&&o==="%"?"battery":i==="temperature"?"temperature":i==="power"||o==="W"||o==="kW"?"power":i==="data_rate"||/\/s$/.test(o)||/throughput|bandwidth|download|upload|\b(rx|tx)\b|_(rx|tx)(_|$)|network_(in|out)|packets/.test(r)?"throughput":/uptime|last_boot|boot_time/.test(r)||i==="timestamp"&&/up|boot/.test(r)?"uptime":/cpu|processor/.test(r)?"cpu":/memory|\bram\b|swap/.test(r)?"memory":/disk|volume|storage|drive|pool|\bfs\b|used_space|free_space/.test(r)?"disk":/load/.test(r)?"load":/status|state/.test(r)||i==="enum"?"status":"other"}var h0=(s,t)=>s.entities?.[t]?.device_id??null;function dm(s,t){return Object.values(s.entities??{}).filter(e=>e.device_id===t&&!!s.states[e.entity_id]).map(e=>e.entity_id)}function um(s,t){let e=n=>p0(Zi(s,n))+(fl.test(n)?100:0);return t.map((n,i)=>({id:n,i,s:e(n)})).sort((n,i)=>n.s-i.s||n.i-i.i).map(n=>n.id)}function f0(s,t){let e=i=>{if(Zi(s,i)!=="status"||fl.test(i))return 99;let o=String(s.states[i]?.attributes?.device_class??"");return i.startsWith("binary_sensor.")&&(o==="connectivity"||o==="running")?0:i.startsWith("sensor.")?1:i.startsWith("device_tracker.")?2:3};return t.map(i=>({id:i,p:e(i)})).filter(i=>i.p<99).sort((i,o)=>i.p-o.p)[0]?.id??null}var m0=(s,t)=>{let e=Zi(s,t);return e!=="button"&&e!=="switch"&&e!=="update"&&!fl.test(t)};function pm(s,t){let e=dm(s,t),n=f0(s,e),i=um(s,e.filter(r=>r!==n&&m0(s,r))).slice(0,cm),o=s.devices?.[t];return{entity:n,links:i,name:o?.name_by_user||o?.name||null}}function hm(s,t,e=cm){let n=new Set([t.entity,...t.links??[]].filter(r=>!!r)),o=[...new Set([...n].map(r=>h0(s,r)).filter(r=>!!r))].flatMap(r=>dm(s,r)).filter(r=>!n.has(r));return um(s,o).slice(0,e)}function fm(s){let t=new Map;for(let e of Object.values(s.entities??{})){if(!e.device_id||!s.states[e.entity_id])continue;let n=t.get(e.device_id)??new Set;e.platform&&n.add(e.platform),t.set(e.device_id,n)}return[...t].map(([e,n])=>{let i=s.devices?.[e],o=i?.name_by_user||i?.name||e,r=[i?.manufacturer,i?.model].filter(Boolean).join(" ");return{id:e,label:r?`${o} \xB7 ${r}`:o,rack:[...n].some(a=>u0.has(a))}}).sort((e,n)=>Number(n.rack)-Number(e.rack)||e.label.localeCompare(n.label)).map(({id:e,label:n})=>({id:e,label:n}))}var to=8,Rs="@hottest",Is="@online";function mm(s,t){let e=new Set,n=[];for(let i of t)for(let o of Qd(i))e.has(o)||(e.add(o),n.push({id:o,kind:Zi(s,o),slot:i}));return n}var g0=(s,t)=>String(s.states[t]?.attributes?.unit_of_measurement??""),ml=(s,t)=>g0(s,t)==="%",_0=(s,t)=>s.some(e=>e.slot===t&&(e.kind==="battery"||e.kind==="runtime"));function gl(s,t,e=to){let n=mm(s,t),i=l=>n.filter(c=>c.kind===l),o=l=>_0(n,l.slot),r=(l,...c)=>{for(let d of c){let u=l.find(d);if(u)return u.id}return null};return[r(i("load"),l=>o(l)&&ml(s,l.id),l=>ml(s,l.id)),r(i("battery"),o,()=>!0),r(i("runtime"),()=>!0),r(i("power"),l=>/poe/.test(l.id),o),i("temperature").length?Rs:null,t.some(l=>Nn(s,l)!==null)?Is:null,r(i("disk"),l=>ml(s,l.id)&&!/free/.test(l.id)),r(i("throughput"),l=>/wan|uplink|internet|external/.test(l.id),()=>!0)].filter(l=>!!l).slice(0,e)}var b0=new Set(["update","switch","button"]),v0=(s,t)=>Ps.indexOf(s.kind)-Ps.indexOf(t.kind);function gm(s,t,e){let n=mm(s,t),i=[];t.some(r=>Nn(s,r)!==null)&&i.push({key:Is,kind:"status"}),n.some(r=>r.kind==="temperature")&&i.push({key:Rs,kind:"temperature"});let o=i.length?[{slot:null,name:null,options:i}]:[];for(let r of t){let a=n.filter(l=>l.slot===r&&!b0.has(l.kind)).map(({id:l,kind:c})=>({key:l,kind:c}));a.length&&o.push({slot:r.id??null,name:e(r),options:a.sort(v0)})}return o}function _m(s,t,e,n=to){let i=[...s??t];return i.includes(e)?i.filter(o=>o!==e):i.length>=n?i:[...i,e]}var y0="security camera";function Fs(s){return!!s.tags?.includes(y0)}function bm(s){return s.toLowerCase().replace(/\s+/g," ").trim().replace(/^uvc /,"")}function w0(s,t){let e=bm(s??"");if(!e)return null;let n=null;for(let i of t)for(let o of i.items)if(Fs(o))for(let r of o.tags??[]){let a=bm(r);!/\d/.test(a)||!(e===a||e.startsWith(`${a} `))||(!n||a.length>n.len)&&(n={type:Dt(i.id,o.id),len:a.length})}return n?.type??null}function As(s,t,e){let n=s.entities?.[t]?.device_id;return n?w0(s.devices?.[n]?.model,e):null}function eo(s,t,e){let n=s.placements.find(d=>d.entity_id===t);if(s.furniture=s.furniture.filter(d=>d.look_of!==t),!n||!e)return;let[i,o,r]=$t(e),a=ft(e),l={id:U("furniture"),type:e,x:n.x,z:n.z,rotation:n.rotation??0,w:i,d:o,h:r,variant:null,entity:"none",look_of:t,name:n.name??null,...n.locked?{locked:!0}:{}};if(s.furniture.push(l),!a||!Fs(a))return;let c=a.mount==="ceiling";if(c!==(n.mount==="ceiling")){let d=n.mount==="ceiling";n.fov??=d?360:90,n.reach??=d?3:4.5,n.tilt??=d?65:20}c?(n.mount="ceiling",n.y=null):(n.mount="wall",n.y=Math.round(((a.wall_y??1)+r/2)*1e3)/1e3)}var _l=["matt","gloss","fabric","glass","metal","rattan"],k0={fabric:"fabric",cushion:"fabric",metal:"metal",glass:"glass",white:"gloss",paint:"gloss"},vm=s=>typeof s=="string"&&_l.includes(s);function ym(s){return k0[s]??"matt"}function wm(s,t){let e=s?.[t];return vm(e)?e:null}function km(s,t,e){let n={...s};return vm(e)?n[t]=e:delete n[t],Object.keys(n).length?n:null}function Ft(s,t){if(!wt(t))return Wt(s,`furn_${t}`);let e=ft(t);return e?jt(e,s?.language??navigator.language):Wt(s,"pack_missing_item")}var x0={leak:new Set(["moisture"]),motion:new Set(["motion","occupancy","presence"])};function xm(s,t,e,n){let i=e.live?.[n];if(i==="none")return[];if(i)return s.states[i]?[i]:[];let o=x0[n],r=u=>u.startsWith("binary_sensor.")&&o.has(String(s.states[u]?.attributes.device_class??"")),a=(u,h)=>e.points.length>=3&&K([u,h],e.points),l=t?.placements.filter(u=>r(u.entity_id))??[],c=l.filter(u=>a(u.x,u.z)).map(u=>u.entity_id),d=new Set(l.filter(u=>!a(u.x,u.z)).map(u=>u.entity_id));return[...new Set([...se(s,e.area_id).filter(u=>r(u)&&!d.has(u)),...c])]}var $m={motion_seconds:30,radiator_cold:18,radiator_hot:45,tank_cold:25,tank_hot:55};function bl(s){return s==="radiator"||/^pack:.*:(radiator|trv)(_[a-z0-9_]+)?$/.test(s)?"radiator":xo(s)?"tank":null}var Mm=(s,t)=>!!t&&t!=="none"&&t.startsWith("sensor.")&&s.states[t]?.attributes.device_class==="temperature",$0=/(tank|cylinder|dhw|hot.?water|speicher|boiler)/i;function M0(s,t,e){let n=t&&t!=="none"?s.entities?.[t]?.device_id:null;if(!n||!s.entities)return null;let i=Object.values(s.entities).filter(o=>o.device_id===n&&Mm(s,o.entity_id)).map(o=>o.entity_id);return e==="tank"?i.find(o=>$0.test(`${o} ${s.states[o]?.attributes.friendly_name??""}`))??(i.length===1?i[0]:null):i.length===1?i[0]:null}function Sm(s,t){let e=bl(t.type);return!e||t.temp_sensor==="none"?null:t.temp_sensor?t.temp_sensor:Mm(s,t.extra)?t.extra:e==="tank"&&t.entity?.startsWith("water_heater.")?t.entity:M0(s,t.entity,e)}var S0=[["radiator_cold","effects_radiator_cold"],["radiator_hot","effects_radiator_hot"],["tank_cold","effects_tank_cold"],["tank_hot","effects_tank_hot"]];function Em(s,t,e,n,i="fp3d-set-field"){let o=t??{},r=(d,u)=>{let h={...o,[d]:u};for(let p of Object.keys(h))(h[p]===null||h[p]===void 0)&&delete h[p];n(Object.keys(h).length?h:null)},a=Dn(s),l=(d,u,h,p,f)=>m`<label class=${i}
      >${u}
      <input
        type="number"
        step=${f}
        placeholder=${String(Math.round(h($m[d])))}
        .value=${typeof o[d]=="number"?String(Math.round(h(o[d])*10)/10):""}
        ?disabled=${e}
        @change=${_=>{let g=_.target.value.trim(),y=Number(g);r(d,g===""||!Number.isFinite(y)?null:p(y))}}
    /></label>`,c=d=>d;return m`${l("motion_seconds",Wt(s,"effects_motion_seconds"),c,d=>Math.max(0,Math.min(3600,Math.round(d))),5)}
  ${S0.map(([d,u])=>l(d,`${Wt(s,u)} (${a})`,h=>Ld(s,h),h=>Math.max(-20,Math.min(100,$r(h,a))),1))}`}function Pm(s){return wt(s)&&/:(?:[a-z0-9_.-]*_)?3d_printer(?:_[a-z0-9_.-]*)?$/.test(s)}var E0=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);function Rm(s){let t=ft(s);return t?[...t.tags??[],t.family??""].map(e=>e.toLowerCase()):[]}var P0=/^(boiler|gas boiler|oil boiler|combi|combi boiler|system boiler|water heater|hot water cylinder|heat pump)$/,R0=/^(smoke alarm|smoke detector|co alarm|co detector|carbon monoxide|heat alarm|water meter|gas meter|leak sensor|leak detector|water leak sensor|motion sensor|door sensor|contact sensor|sensor)$/;function vl(s){return xo(s)||Rm(s).some(t=>P0.test(t))}function yl(s){return Ic(s)||Rm(s).some(t=>R0.test(t))}function Ts(s){return!!ft(s)?.vehicle}function I0(s){return s==="ac_unit"||he(s)||vl(s)||Ne(s)||yl(s)||Ts(s)}function zs(s){return Vn(s)&&(!wt(s)||Ac(s))&&!I0(s)}function Im(s){return Lt(s)?{label:"furn_entity_light",domains:["light","switch","input_boolean"]}:Me(s)?{label:"motor_cover",domains:["cover","switch"]}:s==="ac_unit"||he(s)?{label:"furn_entity_climate",domains:["climate"]}:vl(s)?{label:"furn_entity_heater",domains:["climate","water_heater","switch"]}:oe(s)?{label:"furn_entity_vacuum",domains:["vacuum"]}:Ne(s)?{label:"furn_entity_camera",domains:["camera"]}:yl(s)?{label:"furn_entity_sensor",domains:["sensor","binary_sensor"]}:Ts(s)?{label:"furn_entity_car",domains:["device_tracker","binary_sensor","sensor"]}:zs(s)?{label:"furn_entity_tv",domains:["media_player","switch"]}:s==="awning"?{label:"awning_cover",domains:["cover"]}:{label:"furn_entity",domains:["switch"]}}function wl(s,t,e){if(Rc(t))return!0;if(Lt(t))return/^(light|switch|input_boolean)\./.test(e);if(t==="ac_unit"||he(t))return e.startsWith("climate.");if(zs(t))return/^(media_player|switch|input_boolean|light)\./.test(e)||Me(t)==="screen"&&e.startsWith("cover.");if(t==="awning")return e.startsWith("cover.");let n=Me(t);return n==="curtain"||n==="blind"?/^(cover|switch|input_boolean)\./.test(e):oe(t)?e.startsWith("vacuum."):Ne(t)&&e.startsWith("camera.")||/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(e)||vl(t)&&e.startsWith("water_heater.")||(yl(t)||Pm(t)||Ts(t))&&/^(binary_sensor|sensor)\./.test(e)||Ts(t)&&e.startsWith("device_tracker.")||Sr(s.states[e])||e.startsWith("binary_sensor.")&&(t.endsWith("smoke_detector")||E0.has(String(s.states[e]?.attributes.device_class??"")))}function Fm(s,t){return e=>wl(s,t,e)}var F0=/^[a-z_]+\.[a-z0-9_]+$/;function Os(s,t){if(typeof s=="string")F0.test(s)&&t.add(s);else if(Array.isArray(s))for(let e of s)Os(e,t);else if(s&&typeof s=="object")for(let e of Object.values(s))Os(e,t)}function A0(s,t=[]){let e=new Set(t);for(let n of s.floors){for(let i of n.placements)e.add(i.entity_id);Os(n.furniture,e),Os(n.openings,e)}return e}function Tm(s,t,e={}){let n=A0(t,e.linked),i=new Set(e.hidden??t.settings.unplaced_hidden??[]),o=c=>s.entities?.[c]?.device_id??null,r=new Set([...n].map(o).filter(c=>!!c)),a=new Map;for(let c of t.floors)for(let d of c.rooms)d.area_id&&!a.has(d.area_id)&&a.set(d.area_id,{floorId:c.id,roomId:d.id});let l=[];for(let c of Object.keys(s.areas??{})){let d=se(s,c).filter(p=>ze(et(p))),u=Wn(s,d).filter(p=>![p.primary,...p.others].some(f=>n.has(f)||r.has(o(f)??""))).map(p=>p.primary).filter(p=>!i.has(p));if(!u.length)continue;let h=a.get(c);l.push({areaId:c,name:s.areas?.[c]?.name??c,floorId:h?.floorId??null,roomId:h?.roomId??null,ids:u})}return l.sort((c,d)=>c.name.localeCompare(d.name))}function T0(s){if(Lt(s))return"light";if(s==="ac_unit"||he(s))return"climate";if(Ne(s))return"camera";if(zs(s))return"media_player";if(oe(s))return"vacuum";let t=Me(s);return s==="awning"||t==="curtain"||t==="blind"?"cover":null}function Am(s){return new Set(s.toLowerCase().split(/[^a-z0-9äöüß]+/).filter(t=>t.length>=3))}function zm(s,t,e,n=new Map){let i=[];for(let a of e){let l=t.floors.flatMap(c=>c.rooms.filter(d=>d.area_id===a.areaId&&d.points.length>=3).flatMap(d=>c.furniture.filter(u=>K([u.x,u.z],d.points)).map(u=>({floorId:c.id,f:u}))));for(let{floorId:c,f:d}of l){if(d.entity!=null||n.get(d.id)?.entity||!Te(d.type))continue;let u=Am(`${d.name??""} ${d.type.split(":").pop().replace(/_/g," ")}`),h=T0(d.type);for(let p of a.ids){if(!wl(s,d.type,p))continue;let f=[...Am(`${st(s,p)} ${p.split(".")[1].replace(/_/g," ")}`)].filter(g=>u.has(g)).length,_=(h&&p.startsWith(`${h}.`)?2:0)+f;_>=2&&i.push({entity:p,floorId:c,f:d,score:_})}}}i.sort((a,l)=>l.score-a.score);let o=new Map,r=new Set;for(let a of i)o.has(a.entity)||r.has(a.f.id)||(r.add(a.f.id),o.set(a.entity,{floorId:a.floorId,furnitureId:a.f.id}));return o}function Om(s,t,e){let n=(s.unplaced_hidden??[]).filter(i=>i!==t);return e?[...n,t]:n}function Hm(s,t){return(t.settings.unplaced_hidden??[]).filter(e=>!!s.states[e]).map(e=>{let n=re(s,e);return{id:e,area:n?s.areas?.[n]?.name??n:null}}).sort((e,n)=>st(s,e.id).localeCompare(st(s,n.id)))}function Lm(s,t){let e={...s,...t};for(let[n,i,o]of[["from","to",null],["start","end","00:00"]]){let r=n in t?n:i in t?i:null;if(!r)continue;let a=r===n?i:n;e[r]?e[a]||(e[a]=o??e[r]):(e[n]=null,e[i]=null)}return e}var Hs=class{past=[];future=[];home=void 0;doc=null;run=null;now;constructor(t={}){this.now=t.now??Date.now}get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}adopt(t,e){let n=e===this.home&&t===this.doc;return n||this.clear(),this.home=e,this.doc=t,n}record(t,e,n,i=null){this.adopt(t,n),this.push(t,i),this.track(e)}track(t){this.doc=t}push(t,e=null,n=500){let i=this.now(),o=e!==null&&this.run?.key===e&&i-this.run.at<=n&&this.past.length>0;this.run=e===null?null:{key:e,at:i},this.future=[],!o&&(this.past.push(JSON.stringify(t)),this.past.length>100&&this.past.shift())}undo(t){let e=this.past.pop();return e?(this.run=null,this.future.push(JSON.stringify(t)),this.doc=JSON.parse(e)):null}redo(t){let e=this.future.pop();return e?(this.run=null,this.past.push(JSON.stringify(t)),this.doc=JSON.parse(e)):null}clear(){this.past=[],this.future=[],this.run=null}};var Ls=class{watched=new Set;all=!0;active=!1;paused=0;wrapped=new WeakMap;begin(){this.watched.clear(),this.all=!1,this.active=!0}end(){this.active=!1}pause(t){this.paused++;try{return t()}finally{this.paused--}}get rendering(){return this.active}get recording(){return this.active&&!this.paused}wrap(t){let e=this.wrapped.get(t);if(e)return e;let n=this.watchStates(t.states),i=new Proxy(t,{get:(o,r,a)=>r==="states"?n:Reflect.get(o,r,a)});return this.wrapped.set(t,i),i}watchStates(t){return t&&new Proxy(t,{get:(e,n,i)=>(typeof n=="string"&&this.recording&&this.watched.add(n),Reflect.get(e,n,i)),has:(e,n)=>(typeof n=="string"&&this.recording&&this.watched.add(n),Reflect.has(e,n)),ownKeys:e=>(this.recording&&(this.all=!0),Reflect.ownKeys(e))})}matters(t,e){if(!t||!e||this.all)return!0;let n=t,i=e;for(let o of new Set([...Object.keys(n),...Object.keys(i)]))if(o!=="states"&&n[o]!==i[o])return!0;if(t.states===e.states)return!1;if(Object.keys(t.states??{}).length!==Object.keys(e.states??{}).length)return!0;for(let o of this.watched)if(t.states[o]!==e.states?.[o])return!0;for(let o in e.states)if(!(o in t.states))return!0;return!1}};var kl="application/x-home3d-entity",no=10,L0="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10",Dm=new Set(["vertex","room","device","pet","opening","furniture","furnset","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),Sn=null,Wm=(s,t)=>{let e=((s+t)%360+360)%360;return e>180?e-360:e},xl={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table"],switches:["wall_switch","wall_socket","wifi_ap","water_heater"]},C0=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),Cs=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),D0={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},Ds=10,M=s=>Math.round(s*1e3)/1e3,$l=.06;function ke(s,t){s&&Object.assign(s,t)}function Rl(s,t){if(s.length<3)return s.slice(1);let e=s[0],n=s[s.length-1],i=0,o=-1,r=Math.hypot(n.s-e.s,n.y-e.y)||1;for(let a=1;a<s.length-1;a++){let l=s[a],c=Math.abs((n.s-e.s)*(e.y-l.y)-(e.s-l.s)*(n.y-e.y))/r;c>i&&([i,o]=[c,a])}return i<=t||o<0?[]:[...Rl(s.slice(0,o+1),t),s[o],...Rl(s.slice(o),t)]}function W0(s){if(s.length<2)return s;let t=r=>Math.round(r*20)/20,e=[{s:s[0].s,y:s[0].y}];for(let r=1;r<s.length;r++){let a=e[e.length-1],l=s[r],d=Math.abs(l.s-a.s)>=Math.abs(l.y-a.y)?{s:t(l.s),y:a.y}:{s:a.s,y:t(l.y)},u=e.length>1?e[e.length-2]:null;u&&(u.y===a.y&&d.y===a.y||u.s===a.s&&d.s===a.s)&&e.pop(),!(Math.hypot(d.s-e[e.length-1].s,d.y-e[e.length-1].y)<.08&&r<s.length-1)&&e.push(d)}let n=s[s.length-1],i=e[e.length-1];e.pop();let o=e[e.length-1];return o&&Math.abs(n.s-o.s)>=.08&&Math.abs(n.y-o.y)>=.08&&e.push(o.y===i.y||e.length<2?{s:t(n.s),y:o.y}:{s:o.s,y:t(n.y)}),e.push({s:n.s,y:n.y}),e}function En(s,t,e){let[n,,i]=ve(s,t,0,e);return[M(n),M(i)]}function Ml(s,t){let e=le(s,t),n=0;for(let i=1;i<e.length;i++)n+=Math.hypot(e[i][0]-e[i-1][0],e[i][1]-e[i-1][1],e[i][2]-e[i-1][2]);return n}var Vm={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Pn=s=>Pt(s)??ft(s),V0=new Set(["parking","stairwell","rug","grid_point","waste_bin","mailbox","wall_switch","wall_socket","wifi_ap","water_heater"]);function nn(s){return Ao.includes(s)||Et(s)!==null}function Sl(s){let t=ft(s);return t?.family==="meter"&&(t.tags??[]).some(e=>/^(gas|water|wasser)$/i.test(e))}var Il=class extends xt{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_libUpdates:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_solarDim:{state:!0},_sidePinned:{state:!0},_sideMin:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_hiddenItems:{state:!0},_placing:{state:!0},_placeAt:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_unplacedOpen:{state:!0},_unplacedHiddenView:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_expanded:{state:!0},_notice:{state:!0},_resize:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_techAsk:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingNote:{state:!0},_help:{state:!0},_rackSheet:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_rectName:{state:!0},_wallsOpen:{state:!0},_tool:{state:!0},_toolMenu:{state:!0},_settingsMenu:{state:!0},_sideWidth:{state:!0},_settingsDialog:{state:!0},_toolOpen:{state:!0},_viewMenu:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0,hasChanged:(t,e)=>JSON.stringify(t)!==JSON.stringify(e)},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0},canEdit:{attribute:!1},home:{attribute:!1},history:{attribute:!1}};rawHass;hassWatch=new Ls;optionCache=new ks;get hass(){let t=this.rawHass;return t&&this.hassWatch.rendering?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}doc3dTimer;lastFurnTap=null;shiftHeld=!1;onShift=t=>this.shiftHeld=t.shiftKey;kitPics=new Map;kitPicsAsked=new Set;cableCache=null;techPress=null;techStroke=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;openingHoverText=null;get _openingHover(){return this.openingHoverText}set _openingHover(t){if(t===this.openingHoverText)return;this.openingHoverText=t;let e=this.renderRoot?.querySelector?.(".fp3d-hint-text");e&&(e.textContent=this.hintText())}openingFormMin=null;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;sideDrag=null;drag=null;mergeKey=null;mergeWithin=void 0;pointers=new Map;pinch=null;fitted=!1;fittedView=null;fittedAll=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._hiddenItems=[],this._placing=null,this._placeAt=null,this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._unplacedOpen=!1,this._unplacedHiddenView=!1,this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._expanded=new Set,this._notice=null,this._openingNote=null,this._openingHover=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._techAsk=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("home3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("home3d.phoneHint")!=="0"}catch{}let t=!1;try{t=localStorage.getItem("home3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let o=Number(localStorage.getItem("home3d.editorSplit"));o>=20&&o<=80&&(this._splitRatio=o/100)}catch{}this._backupBusy=!1,this._wall3d="cut",this._wallsOpen=!1;try{localStorage.getItem("home3d.walls3d")==="auto"&&(this._wall3d="auto"),this._wallsOpen=localStorage.getItem("home3d.wallsOpen")==="1"}catch{}this._solarDim=!0;try{localStorage.getItem("home3d.solarDim")==="off"&&(this._solarDim=!1)}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("home3d.sidePinned")!=="0"}catch{}this._sidePinned=e;let n=!1;try{n=localStorage.getItem("home3d.sideMin")==="1"}catch{}this._sideMin=n,this._preview=null,this._libUpdates=new Set,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._rectName="",this._tool="select",this._toolMenu=null,this._settingsMenu=!1;let i=320;try{i=Number(localStorage.getItem("home3d.sideWidth"))||320}catch{}this._sideWidth=Math.min(640,Math.max(280,i)),this._settingsDialog=null,this._toolOpen=null,this._viewMenu=!1,this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._help=!1,this._rackSheet=null,this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1,this.history=new Hs}t(t,e){return Wt(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),this.resizeObserver?.disconnect()}requestUpdate(t,e,...n){typeof t=="string"&&gf(this,t,e,this.renderRoot),super.requestUpdate(t,e,...n)}shouldUpdate(t){if(t.size===1&&t.has("hass")&&!this.hassWatch.matters(t.get("hass"),this.rawHass)){for(let e of this.renderRoot?.querySelectorAll?.("fp3d-view3d")??[])e.hass=this.rawHass;return!1}return!0}update(t){this.hassWatch.begin();try{super.update(t)}finally{this.hassWatch.end()}}willUpdate(t){if(t.has("packs")&&xc(this.packs??[]),t.has("_doc")&&Qc(this._doc),t.has("hass")&&this.hass&&!up(this.hass.language)&&pp(this.hass.language).then(()=>this.requestUpdate()),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),this._placing&&(t.has("home")||t.has("_floorId")&&t.get("_floorId")!==void 0)&&this.cancelPlacing(),t.has("building")&&this.building!==this._doc){this.history.adopt(this.building,this.home),this.showHistory(),this._doc=this.building,this._doc3d=this.building;let e=this._doc.settings.editor_floor;this._floorId===null&&e&&this._doc.floors.some(n=>n.id===e)&&(this._floorId=e),this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this._roomId)||(this._roomId=null)}Ec(this._doc?.recipes),(t.has("_doc")||t.has("packs"))&&this.fetchPlacedRecipes(),(t.has("building")||t.has("packs"))&&this.isEditor&&this.refreshLibUpdates()}recipesAsked=new Set;fetchPlacedRecipes(){if(!this.hass||!this._doc||!this.packs?.length)return;let t=Kf(this._doc).filter(e=>!Pt(e)&&!this.recipesAsked.has(e));if(t.length){for(let e of t)this.recipesAsked.add(e);en(this.hass,t).then(()=>{t.some(e=>Pt(e))&&((this._split||this._wallView)&&(this._doc3d={...this.docWithDraft()}),this.requestUpdate())})}}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit(this.fittedAll))}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let i=e.getBoundingClientRect(),o=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},r=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",r),n.removeEventListener("pointercancel",r);try{localStorage.setItem("home3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("home3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){let{id:e,x:n,z:i}=t.detail,o=this._doc.settings.wall_interior,r=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],a=r.includes(e)&&r.length>1?r:[];if(a.length){let l=this.floor?.furniture.find(h=>h.id===e);if(!l||a.some(h=>this.isFixedItem("furniture",h)))return;let c=M(n-l.x),d=M(i-l.z),u=new Set(a);this.change((h,p)=>{for(let f of p.furniture)u.has(f.id)&&Object.assign(f,{x:M(f.x+c),z:M(f.z+d)})});return}this.change(l=>{for(let c of l.floors){let d=c.furniture.find(v=>v.id===e);if(!d)continue;let[u,h]=Ur(c,d.x,d.z,n,i),[p,f]=Gr(c,d,u,h,o),_=Oi(c,d,o),g=_?Math.hypot(_.x-d.x,_.z-d.z):1/0;Object.assign(d,{x:p,z:f});let y=Oi(c,d,o);y&&Math.hypot(y.x-p,y.z-f)<=g+.01&&Object.assign(d,y)}})}onDeviceMoved3d(t){let{id:e,x:n,z:i}=t.detail;this.change(o=>{for(let r of o.floors){let a=r.placements.find(d=>d.entity_id===e);if(!a)continue;let[l,c]=Ur(r,a.x,a.z,n,i);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isEditor)return b;let t=this.furnitureItem,e=this.device;if(t){let n=Se(t),i=(o,r,a=.05)=>m`<label class="fp3d-3d-size" title=${this.t(`size_${o}`)}
        >${r}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${this.unit==="imperial"?Kn(t[o]):String(Math.round(t[o]*100)/100)}
          @change=${l=>{let c=this.readLen(l.target.value);c!==null&&c>=a&&this.updateFurniture({[o]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return m`<div class="fp3d-3d-bar">
        <span>${Ft(this.hass,t.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?m`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?Kn(t.mount_y??Kt(this.floor,t)):String(Math.round((t.mount_y??Kt(this.floor,t))*100)/100)}
                @change=${o=>{let r=this.readLen(o.target.value);r!==null&&r>=0&&this.updateFurniture({mount_y:Math.round(Math.min(no,r)*1e3)/1e3})}}
              />
            </label>`:b}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let n=et(e.entity_id),i=n==="light",o=n?Wo(n,this.floor?.height??2.5,i?e.mount??"ceiling":null):1;return m`<div class="fp3d-3d-bar">
        <span>${st(this.hass,e.entity_id)}</span>
        ${i?m`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(r=>m`<option value=${r} ?selected=${r===(e.mount??"ceiling")}>${this.t(`lamp_${r}`)}</option>`)}
            </select>`:b}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((e.y??o)*100)/100)}
            @change=${r=>{let a=parseFloat(r.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((e.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((e.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",e.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",e.entity_id)}>${this.t("delete")}</button>
      </div>`}return b}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t?.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=yt(e),i=null,o=(a,l,c,d,u=!1)=>{if(!c||u)return;let h=Ea(c,t.o,t.d);!h||!th(c,d,h.u,h.s)||i&&i.t<=h.t||(i={id:a,win:l,t:h.t,du:h.u-d.u,ds:h.s-d.v})};if(this._tool==="energy")for(let a of e.settings.roof.solar??[])o(a.id,!1,Xt(e,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of e.settings.roof.windows??[])o(a.id,!0,n.find(l=>l.key===a.face)??null,ii(a),!!a.locked);if(!i)return!1;let r=i;return this.grab3d={id:r.id,win:r.win,du:r.du,ds:r.ds,base:e,moved:!1},r.win?this._roofWinId=r.id:this.selectSolar(r.id),!0}grab3dMove(t){let e=this.grab3d;if(!e)return;let n=e.base,i=e.win?n.settings.roof.windows?.find(p=>p.id===e.id):void 0,o=e.win?i?ii(i):void 0:n.settings.roof.solar?.find(p=>p.id===e.id);if(!o)return;let r=Xt(n,o),a=r?.unbounded?[r]:e.win?yt(n):[...yt(n),...Re(n)],l=null;for(let p of a){let f=Ea(p,t.o,t.d);f&&Zp(p,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:p,...f})}if(!l)return;let c=l.face,d=.05,u=p=>M(Math.round(p/d)*d),h=ni(c,{...o,face:c.key,u:u(l.u-e.du),v:u(l.s-e.ds),tilt:c.flat?o.tilt??15:o.tilt});e.moved=!0,this.change(p=>{if(e.win){let _=p.settings.roof.windows?.find(g=>g.id===e.id);_&&Object.assign(_,{face:c.key,...h});return}let f=p.settings.roof.solar?.find(_=>_.id===e.id);f&&Object.assign(f,{face:c.key,...h},c.flat&&f.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="fp3d-editor-3d">
      ${this.houseTool?b:m`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this.setWall3d("cut")}>${this.t("walls_cut")}</button>
          </div>`}
      <button class="fp3d-3d-fold" title=${this.t("split_fold_hint")} aria-label=${this.t("split_fold_hint")} @click=${()=>this.toggleSplit()}>✕ 3D</button>
      ${this.render3dBar()}
      <fp3d-view3d
              .walkable=${!1}
        .pivotMark=${!0}
        .hass=${this.rawHass}
        .home=${this.home}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isEditor}
        .surfaceGrab=${this.isEditor&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?Ao:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${t=>{t.detail.id?this.selectFrom3d("furniture",t.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${t=>{t.detail.id?this.selectFrom3d("device",t.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${t=>{t.detail.floorId&&(this._floorId=t.detail.floorId),this._sideOpen=!1}}
        @room-tap=${t=>{t.detail.floorId&&(this._floorId=t.detail.floorId),t.detail.roomId?this.selectFrom3d("room",t.detail.roomId):this._sideOpen=!1}}
      ></fp3d-view3d>
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("home3d.walls3d",t)}catch{}}updated(t){if(mf(t,this))for(let i of this.renderRoot.querySelectorAll(".fp3d-side"))i.scrollTop=0;if(this._settingsDialog)for(let i of this.renderRoot.querySelectorAll(".fp3d-dialog details"))i.open=!0;let e=this._preview?this.renderRoot.querySelector(".fp3d-preview"):null;if(e&&this._preview){let i=e.getBoundingClientRect(),o=i.left-this._preview.left,r=i.top-this._preview.top;(Math.abs(o)>1||Math.abs(r)>1)&&(e.style.left=`${parseFloat(e.style.left)-o}px`,e.style.top=`${parseFloat(e.style.top)-r}px`)}for(let i of this.renderRoot.querySelectorAll("select option[selected]"))i.selected||(i.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let n=this.floor?.background;if(n&&!this._images[n.image_id]&&!this.loadingImages.has(n.image_id)&&this.loadImage(n.image_id),this.furnitureItem?.pictures)for(let i of this.storedPictures())!this._images[i]&&!this.loadingImages.has(i)&&this.loadImage(i)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isEditor(){return this.canEdit??this.hass?.user?.is_admin??!0}get isHaAdmin(){return this.hass?.user?.is_admin??!1}setDoc(t,e=this._doc){e&&this.history.push(e,this.mergeKey,this.mergeWithin),this.history.track(t),this._doc=t,gp(t),this.showHistory(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),o=i.floors.find(r=>r.id===this._floorId);!o&&this._floorId||(t(i,o),_r(i,e),this.setDoc(i,n?e:null))}changeFloor(t,e){let n=e.floors.findIndex(r=>r.id===this._floorId);if(n<0)return;let i=structuredClone(e.floors[n]);t(i);let o=e.floors.slice();o[n]=i,_r({...e,floors:[i]},e),this.setDoc({...e,floors:o},null)}undo(){let t=this.history.undo(this._doc);t&&this.restore(t)}redo(){let t=this.history.redo(this._doc);t&&this.restore(t)}showHistory(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this.showHistory(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:o}=this._view;return[(t-i)/n,(e-o)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(t=!1){let e=this.floor?.rooms.flatMap(l=>l.points)??[];if(t||this._tool==="outdoor"||this._tool==="pool")for(let l of this.floor?.outdoor??[])e.push(...l.points);if(t){for(let l of this.floor?.furniture??[]){let c=Math.max(l.w,l.d)/2;e.push([l.x-c,l.z-c],[l.x+c,l.z+c])}for(let l of this.floor?.placements??[])e.push([l.x,l.z])}if(this.fittedAll=t,this._tool==="roof")for(let l of this._doc.settings.roof.sections??[])e.push([l.x0,l.z0],[l.x1,l.z1]);let n=e.length?Mt(e):{x0:0,z0:0,x1:10,z1:8},i=1.5,o=n.x1-n.x0+2*i,r=n.z1-n.z0+2*i,a=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/r)));this._view={scale:a,ox:this._size.w/2-(n.x0+n.x1)/2*a,oy:this._size.h/2-(n.z0+n.z1)/2*a},this.fittedView=this._view}showPoint(t,e){let[n,i]=this.toScreen([t,e]),o=32;if(n>=o&&i>=o&&n<=this._size.w-o&&i<=this._size.h-o)return;let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-t*r,oy:this._size.h/2-e*r}}zoomAt(t,e,n){let{scale:i,ox:o,oy:r}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-o)*l,oy:n-(n-r)*l}}snap(t,e,n=!1){if(this._guides={},n)return t;let i=Ds/this._view.scale,o=this.floor?.rooms??[],r=[];for(let f of o)f.points.forEach((_,g)=>{e&&f.id===e.roomId&&(e.index===void 0||e.index===g)||r.push(_)});let a=null,l=i;for(let f of r){let _=Math.hypot(f[0]-t[0],f[1]-t[1]);_<l&&(l=_,a=f)}if(a)return this._guides={point:a},[a[0],a[1]];for(let f of o)if(!(e&&f.id===e.roomId))for(let _=0;_<f.points.length;_++){let g=f.points[_],y=f.points[(_+1)%f.points.length],v=y[0]-g[0],w=y[1]-g[1],k=v*v+w*w;if(k<1e-9)continue;let S=((t[0]-g[0])*v+(t[1]-g[1])*w)/k;if(S<=0||S>=1)continue;let $=[g[0]+S*v,g[1]+S*w],x=Math.hypot($[0]-t[0],$[1]-t[1]),R=this._doc.settings.grid;Math.abs(w)<1e-9&&($[0]=Math.min(Math.max(Math.round($[0]/R)*R,Math.min(g[0],y[0])),Math.max(g[0],y[0]))),Math.abs(v)<1e-9&&($[1]=Math.min(Math.max(Math.round($[1]/R)*R,Math.min(g[1],y[1])),Math.max(g[1],y[1]))),x<l&&(l=x,a=$)}if(a)return this._guides={point:a},[M(a[0]),M(a[1])];let c=this._doc.settings.grid,d=[M(Math.round(t[0]/c)*c),M(Math.round(t[1]/c)*c)],u=i,h=i,p={};for(let f of r)Math.abs(f[0]-t[0])<u&&(u=Math.abs(f[0]-t[0]),d[0]=f[0],p.x=f[0]),Math.abs(f[1]-t[1])<h&&(h=Math.abs(f[1]-t[1]),d[1]=f[1],p.z=f[1]);return this._guides=p,d}onPointerDown(t){this._ctx=null,this._fixedHint=!1,this.fixedPan=!1;let e=!!this._placing;if(this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&!e&&(this._tool==="select"||this._tool==="furniture")){let n=this.localPoint(t),i=t.target;this.pressStart=n,this.pressTimer=window.setTimeout(()=>{let o=this.drag;o&&"moved"in o&&o.moved||(this.drag=null,this.openContext(i,n,"touch"))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="furnset"?n=["furniture",e.ids.find(i=>this.isFixedItem("furniture",i))??e.ids[0]]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&Dm.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){t.button===2&&(this.rightPress={at:n,target:t.target,moved:!1}),this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=t.target;if(this._wallPick){this.pickWall(i);return}if(this._bgLevel&&this.isEditor&&this.floor?.background){let x=[...this._bgLevel,i];x.length<2?this._bgLevel=x:this.applyBgLevel(x[0],x[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let x=this.floor.background,R=this._images[x.image_id],L=x.width*(R?.aspect??1),C=[x.x+x.width/2,x.z+L/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-C[1],i[0]-C[0]),rot:x.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isEditor&&this.floor?.background){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let x=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:x.x,bz:x.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isEditor&&this.floor?.background){let x=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:x.x,bz:x.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let x=this.snap(i,void 0,t.altKey);this.drag={kind:"freewall",start:x,end:x};return}if(this._tool==="pool"&&this.poolDown(t,o,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let x=o.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),R=o.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),L=o.closest("[data-roof]")?.getAttribute("data-roof"),C=this._tool==="energy"?o.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(C){this._solarId=null,this.selectItem("furniture",C),this.drag=this.isEditor?{kind:"furniture",id:C,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&o.closest("[data-holo-pt]")){this.drag=this.isEditor?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let F=o.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),D=N=>!!this._doc.settings.roof.cables?.find(q=>q.id===N)?.locked;if(F&&this.isEditor&&!D(F.slice(0,F.lastIndexOf(":")))){let N=F.lastIndexOf(":"),q=F.slice(0,N),Y=Number(F.slice(N+1));if(this.doubleTap(t,`cable:${F}`)){this.change(X=>{let Q=X.settings.roof.cables?.find(j=>j.id===q);Q&&Q.points.length>1&&Q.points.splice(Y,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:q,index:Y,base:this._doc,moved:!1};return}let W=o.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(W&&this.isEditor&&!D(W)){let N=Number(o.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),q=this._doc;this.change(Y=>{let X=Y.settings.roof.cables?.find(Q=>Q.id===W);X&&X.points.splice(N,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:W,index:N,base:q,moved:!0};return}let H=o.closest("[data-cable]")?.getAttribute("data-cable");if(H){if(this._cableId=H,this.isEditor&&this._floorId&&!this._doc.settings.roof.cables?.some(N=>N.id===H)){let N=this._doc;this.layCable(H);let q=this._doc.settings.roof.cables?.find(X=>X.id===H),Y=this.cableSegments().filter(X=>X.key===H);if(q&&Y.length){let X=[[Y[0].a[0],Y[0].a[2]],...q.points,[Y[Y.length-1].b[0],Y[Y.length-1].b[2]]],Q=0,j=1/0;for(let it=0;it+1<X.length;it++){let ut=N0(i,X[it],X[it+1]);ut<j&&(j=ut,Q=it)}this.change(it=>{let ut=it.settings.roof.cables?.find(Nt=>Nt.id===H);ut&&ut.points.splice(Q,0,[M(i[0]),M(i[1])])}),this.drag={kind:"cablept",id:H,index:Q,base:N,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let E=this._tool==="energy"?o.closest("[data-solar]")?.getAttribute("data-solar"):null,O=this._tool==="energy"?o.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(O&&this.isEditor){this.drag={kind:"solarturn",id:O,base:this._doc,moved:!1};return}if(E){let F=o.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&E===this._solarId&&F&&this.isEditor){this.toggleSolarCell(F),this.drag={kind:"pan",last:n};return}E!==this._solarId&&(this._solarPick=!1),this._solarId=E,this._roofId=null;let D=this._doc.settings.roof.solar?.find(q=>q.id===E),W=D?Xt(this._doc,D)??void 0:void 0,H=W?this.faceHit(W,i):null,N=D&&H?{du:H.u-D.u,ds:Number.isNaN(H.s)?0:H.s-D.v}:null;this.drag=this.isEditor&&!D?.locked?{kind:"solarmove",id:E,start:i,startScreen:n,base:this._doc,moved:!1,grab:N}:{kind:"pan",last:n};return}let I=this._tool==="roof"?o.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(I){this._roofWinId=I,this._roofId=null;let F=this._doc.settings.roof.windows?.find(N=>N.id===I),D=F?yt(this._doc).find(N=>N.key===F.face):void 0,W=D?rs(D,i):null,H=F&&W?{du:W.u-F.u,ds:W.s-F.v}:null;this.drag=this.isEditor&&!F?.locked?{kind:"solarmove",id:I,start:i,startScreen:n,base:this._doc,moved:!1,grab:H,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let T=this._tool==="energy"?o.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(T){this._solarId=null,this.selectItem("furniture",T),this.drag=this.isEditor?{kind:"furniture",id:T,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(R&&this.isEditor){let[F,D]=R.split(":");this.drag={kind:"roofvertex",id:F,index:Number(D),base:this._doc,moved:!1}}else if(x&&this.isEditor){let[F,D,W]=x.split(":");this.drag={kind:"roofcorner",id:F,corner:[D==="1"?1:0,W==="1"?1:0],base:this._doc,moved:!1}}else if(L){let F=this.roofFixed(this._doc.settings.roof.sections?.find(D=>D.id===L));F&&this._roofId===L&&(this._fixedHint=!0),this._roofId=L,this.drag=this.isEditor&&!F?{kind:"roofmove",id:L,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isEditor){this._roofId=null;let F=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:F,end:F,roof:!0}}else this.drag={kind:"pan",last:n};return}let r=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||r)&&!this._outdoorFree||this._tool==="hole"){let x=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:x,end:x,outdoor:this._tool==="outdoor"||r,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||r)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this._openingNote=null;let x=o.closest("[data-opening]");x?this.pressOpening(x.getAttribute("data-opening"),n):this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this._placing&&this.isEditor&&(this._tool==="select"||this._tool==="furniture")){this.placeArmed(this.placePoint(i,t.altKey),t.shiftKey),this.drag=null;return}if(this.isEditor&&(this._tool==="select"||this._tool==="furniture")&&(t.shiftKey||this._multiMode)){let x=o.closest("[data-furniture]");x?(this.toggleMulti(x.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let a=o.closest("[data-pet]");if(a&&this.isEditor){this.drag={kind:"pet",id:a.getAttribute("data-pet"),start:i,startScreen:n,base:this._doc,moved:!1};return}let l=o.closest("[data-device]");if(l&&this.isEditor){this.drag={kind:"device",entityId:l.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let c=o.closest("[data-opening]");if(c&&!(o.getAttribute("class")==="fp3d-open-hit"&&this.firmItemAt(i,t.pointerType))){this.pressOpening(c.getAttribute("data-opening"),n);return}let d=o.closest("[data-resize]");if(d&&this.isEditor){let[x,R,L]=d.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:x,corner:[R==="1"?1:-1,L==="1"?1:-1],base:this._doc,moved:!1};return}let u=o.closest("[data-rotate]");if(u&&this.isEditor){this.drag={kind:"rotate",id:u.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let h=o.closest("[data-aim]");if(h&&this.isEditor){this.drag={kind:"aim",entityId:h.getAttribute("data-aim"),base:this._doc,moved:!1};return}let p=t.altKey?Lu(this.itemHits(o,i,t.pointerType),this.selection(),this._furnitureId):null,f=p?p.grab??this.pickItem(o,i,t.pointerType):this.pickItem(o,i,t.pointerType);if(f){let x=f,R=Date.now(),L=this.lastFurnTap?.id===x&&R-this.lastFurnTap.t<400;this.lastFurnTap={id:x,t:R};let C=this.floor.furniture.find(O=>O.id===x);L&&C?.group?(this.selectItem("furniture",x),this._single=!0):(!this.selection().includes(x)||this._single)&&this.selectItem("furniture",x);let E=this.selection();this.drag=this.isEditor?E.length>1?{kind:"furnset",ids:E,start:i,startScreen:n,base:this._doc,moved:!1,pick:p?.next}:{kind:"furniture",id:x,start:i,startScreen:n,base:this._doc,moved:!1,pick:p?.next}:{kind:"pan",last:n};return}let _=o.closest("[data-vertex]"),g=o.closest("[data-mid]");if(_&&this.room&&this.isEditor){this._vertex=Number(_.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(g&&this.room&&this.isEditor){let x=Number(g.getAttribute("data-mid")),R=this.room.points,L=R[x],C=R[(x+1)%R.length],E=[M((L[0]+C[0])/2),M((L[1]+C[1])/2)],O=this._doc,I=this.room.id;this.change((T,F)=>{let D=F.rooms.find(H=>H.id===I);D.points.splice(x+1,0,E),D.wall_heights&&D.wall_heights.splice(x+1,0,D.wall_heights[x]??null),D.wall_thickness&&D.wall_thickness.splice(x+1,0,D.wall_thickness[x]??null);let W=Math.hypot(E[0]-L[0],E[1]-L[1]);if(D.wall_slopes){let H=D.wall_slopes[x]??null,N=Math.hypot(C[0]-L[0],C[1]-L[1])||1,q=H?Math.round((H[0]+(H[1]-H[0])*W/N)*1e3)/1e3:0;H&&(D.wall_slopes[x]=[H[0],q]),D.wall_slopes.splice(x+1,0,H?[q,H[1]]:null)}for(let H of F.openings)H.room_id!==I||H.wall||(H.edge>x?H.edge+=1:H.edge===x&&H.offset>W&&(H.edge=x+1,H.offset=M(H.offset-W)))},O,!1),this._vertex=x+1,this.drag={kind:"vertex",roomId:I,index:x+1,base:O,moved:!0};return}let y=o.closest("[data-wall-end]");if(y&&this.isEditor){let[x,R]=y.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:x,end:R,start:i,startScreen:n,base:this._doc,moved:!1};return}let v=o.closest("[data-free-wall]");if(v){let x=v.getAttribute("data-free-wall");this.selectItem("wall",x),this.drag=this.isEditor?{kind:"wallmove",id:x,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let w=o.closest("[data-out-box]");if(w&&this.isEditor){let[x,R]=w.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:x,corner:Number(R),base:this._doc,moved:!1};return}let k=o.closest("[data-out-vertex]");if(k&&this.isEditor){let[x,R]=k.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:x,index:Number(R),base:this._doc,moved:!1};return}let S=o.closest("[data-outdoor]");if(S&&!o.closest("[data-room]")&&!this.roomAt(i)){let x=this.outdoorAt(i)??S.getAttribute("data-outdoor");this.selectItem("outdoor",x),this.drag=this.isEditor?{kind:"outdoor",id:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let $=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if($){$!==this._roomId&&(this._vertex=null);let x=$===this._roomId&&!this._furnitureId&&!this._openingId&&!this._deviceId&&!this._outdoorId&&!this._wallId&&!this._multi.length;this.selectItem("room",$),this.drag=this.isEditor&&this._tool!=="furniture"&&x?{kind:"room",roomId:$,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){if(this.rightPress&&!this.rightPress.moved){let o=this.localPoint(t);Math.hypot(o[0]-this.rightPress.at[0],o[1]-this.rightPress.at[1])>5&&(this.rightPress.moved=!0)}if(this.pressStart){let o=this.localPoint(t);Math.hypot(o[0]-this.pressStart[0],o[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let n=this.toWorld(...e),i=this.drag;if(!i){if(this._placing&&(this._placeAt=this.placePoint(n,t.altKey)),this._tool!=="select"&&this._tool!=="furniture"&&this.floor){let o=this.snap(n,void 0,t.altKey);this._tool!=="opening"&&(this._cursor=o)}this._tool==="opening"&&t.pointerType!=="touch"&&this.hoverOpening(t.target,e);return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let o=this.snap(n,void 0,t.altKey);t.shiftKey&&(o=Math.abs(o[0]-i.start[0])>Math.abs(o[1]-i.start[1])?[o[0],i.start[1]]:[i.start[0],o[1]]),i.end=o,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!o)return;let r;if(i.end){let a=this.snap(n,void 0,t.altKey);r=i.end==="a"?{a,b:o.b}:{a:o.a,b:a}}else{let a=t.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,c=Math.round((n[1]-i.start[1])/a)*a;r={a:[M(o.a[0]+l),M(o.a[1]+c)],b:[M(o.b[0]+l),M(o.b[1]+c)]}}this.changeFloor(a=>Object.assign((a.walls??[]).find(l=>l.id===i.id),r),i.base);break}case"vertex":{let o=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((r,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=o},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!o)return;let r=this.roomDelta(o,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>K([c.x,c.z],o.points)).map(c=>c.entity_id));this.change((c,d)=>{let u=d.rooms.find(h=>h.id===i.roomId);u.points=o.points.map(([h,p])=>[M(h+r[0]),M(p+r[1])]),d.placements=a.placements.map(h=>l.has(h.entity_id)?{...h,x:M(h.x+r[0]),z:M(h.z+r[1])}:h)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=t.altKey?.01:this._doc.settings.grid,r=M(Math.round((n[0]-i.start[0])/o)*o),a=M(Math.round((n[1]-i.start[1])/o)*o),l=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(u=>u.id===i.id);d&&(Object.assign(d,{x0:M(l.x0+r),x1:M(l.x1+r),z0:M(l.z0+a),z1:M(l.z1+a)}),l.pivot&&(d.pivot=[M(l.pivot[0]+r),M(l.pivot[1]+a)]),l.points&&(d.points=l.points.map(([u,h])=>[M(u+r),M(h+a)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let o=i.base.settings.roof.solar?.find(h=>h.id===i.id),r=o?Xt(i.base,o):null;if(!o||!r)return;let[a,l]=Ni(r,o),c=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,d=t.altKey?1:15;c=Math.round(c/d)*d;let u=Vi(i.base,o,c);this.change(h=>{let p=h.settings.roof.solar?.find(f=>f.id===i.id);p&&Object.assign(p,u)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.win?i.base.settings.roof.windows?.find(g=>g.id===i.id):void 0,r=i.win?o?ii(o):void 0:i.base.settings.roof.solar?.find(g=>g.id===i.id),a=i.win?yt(i.base):[...yt(i.base),...this._floorId?Re(i.base,this._floorId):[]],l=r?Xt(i.base,r,a):null;if(!r||!l)return;let c=t.altKey?.01:.05,d=g=>M(Math.round(g/c)*c),u=l.unbounded?null:qp(a,n),h=l,p,f;if(u&&i.grab)h=u.face,p=d(u.u-i.grab.du),f=Number.isNaN(u.s)?u.face.key===r.face?r.v:Math.max(0,u.face.ls-1.5):d(u.s-i.grab.ds);else{let g=n[0]-i.start[0],y=n[1]-i.start[1],v=[l.es[0],l.es[2]],w=v[0]*v[0]+v[1]*v[1]||1;p=d(r.u+g*l.eu[0]+y*l.eu[2]),f=d(r.v+(g*v[0]+y*v[1])/w)}let _=ni(h,{...r,face:h.key,u:p,v:f,tilt:h.flat?r.tilt??15:r.tilt});this.change(g=>{if(i.win){let v=g.settings.roof.windows?.find(w=>w.id===i.id);v&&Object.assign(v,{face:h.key,..._});return}let y=g.settings.roof.solar?.find(v=>v.id===i.id);y&&Object.assign(y,{face:h.key,..._},h.flat&&y.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let o=this.snap(n,void 0,t.altKey),r=i.base.floors.find(y=>y.id===this._floorId)?.outdoor.find(y=>y.id===i.id);if(!r?.pool_shape)return;let a=Mt(r.points),c=[[a.x0,a.z0],[a.x1,a.z0],[a.x1,a.z1],[a.x0,a.z1]][(i.corner+2)%4],d=o[0]-c[0],u=o[1]-c[1];if(r.pool_shape==="round"){let y=Math.max(Math.abs(d),Math.abs(u),.5);d=Math.sign(d||1)*y,u=Math.sign(u||1)*y}else d=Math.sign(d||1)*Math.max(Math.abs(d),.5),u=Math.sign(u||1)*Math.max(Math.abs(u),.5);let h=Math.min(c[0],c[0]+d),p=Math.max(c[0],c[0]+d),f=Math.min(c[1],c[1]+u),_=Math.max(c[1],c[1]+u),g=r.pool_shape;this.change((y,v)=>{let w=v.outdoor.find(k=>k.id===i.id);w&&(w.points=Ro(g,M(h),M(f),M(p),M(_)))},i.base,!1);break}case"pipept":{i.moved=!0;let o=this.snap(n,void 0,t.altKey);this.change((r,a)=>{let l=a.outdoor.find(c=>c.id===i.pool)?.pool?.pipes?.find(c=>c.id===i.pipe);l&&(l.points[i.index]=[M(o[0]),M(o[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let o=this.snap(n,void 0,t.altKey);this.change((r,a)=>{let l=a.outdoor.find(h=>h.id===i.pool),c=l?.pool?.ports?.find(h=>h.id===i.id);if(!l||!c)return;let[d,u]=c.kind==="skimmer"||c.kind==="inlet"?Zo(l.points,o):o;c.x=M(d),c.z=M(u)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let o=i.base.floors.flatMap(a=>a.outdoor).find(a=>a.id===i.pool)?.pool?.joints?.find(a=>a.id===i.id);if(!o)break;let r=this.snap([o.x+n[0]-i.start[0],o.z+n[1]-i.start[1]],void 0,t.altKey);if(o.kind==="wall"){let a=[-(o.nz??0),o.nx??0],l=(r[0]-o.x)*a[0]+(r[1]-o.z)*a[1];r=[o.x+a[0]*l,o.z+a[1]*l]}this.change(a=>{let l=a.floors.flatMap(c=>c.outdoor).find(c=>c.id===i.pool)?.pool?.joints?.find(c=>c.id===i.id);l&&([l.x,l.z]=[M(r[0]),M(r[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let o=i.base.floors.flatMap(a=>a.furniture).find(a=>a.id===i.id);if(!o)break;let r=this.snap([o.x+n[0]-i.start[0],o.z+n[1]-i.start[1]],void 0,t.altKey);this.change(a=>{let l=a.floors.flatMap(c=>c.furniture).find(c=>c.id===i.id);l&&([l.x,l.z]=[M(r[0]),M(r[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let o=this.snap(n,void 0,t.altKey),r=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!r)return;let a=dn(r.points);this.change((l,c)=>{let d=c.outdoor.find(f=>f.id===i.id);if(!d)return;let u=r.points.map(f=>[...f]),h=i.index,p=r.points[h];u[h]=[M(o[0]),M(o[1])],a&&r.points.forEach((f,_)=>{_!==h&&(Math.abs(f[0]-p[0])<1e-6&&(u[_][0]=M(o[0])),Math.abs(f[1]-p[1])<1e-6&&(u[_][1]=M(o[1])))}),d.points=u},i.base,!1);break}case"cablept":{i.moved=!0;let o=this.snap(n,void 0,t.altKey);this.change(r=>{let a=r.settings.roof.cables?.find(l=>l.id===i.id);a&&a.points[i.index]&&(a.points[i.index]=[M(o[0]),M(o[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let o=this.snap(n,void 0,t.altKey);this.change(r=>r.settings.roof.hologram={...r.settings.roof.hologram??So,place:"free",x:M(o[0]),z:M(o[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let o=n[0]-i.start[0],r=n[1]-i.start[1];this.change((a,l)=>{l.background&&(l.background.x=M(i.bx+o),l.background.z=M(i.bz+r))},i.base,!1);break}case"bgrotate":{i.moved=!0;let o=this.floor?.background,r=o?this._images[o.image_id]:void 0;if(!o||!r)break;let a=o.width*r.aspect,l=[o.x+o.width/2,o.z+a/2],c=Math.atan2(n[1]-l[1],n[0]-l[0]),d=i.rot+(c-i.start)*180/Math.PI;d=t.shiftKey?Math.round(d/15)*15:Math.round(d*10)/10,d=((d+180)%360+360)%360-180,this.change((u,h)=>{h.background&&(h.background.rotation=d)},i.base,!1);break}case"bgscale":{i.moved=!0;let o=this.floor?.background,r=o?this._images[o.image_id]:void 0;if(!o||!r)break;let[a]=this.bgLocal(o,n,r.aspect),l=Math.max(.5,M(a));this.change((c,d)=>{d.background&&(d.background.width=l)},i.base,!1);break}case"roofvertex":{i.moved=!0;let o=this.snap(n,void 0,t.altKey);this.change(r=>{let a=r.settings.roof.sections?.find(l=>l.id===i.id);!a?.points||i.index>=a.points.length||(a.points[i.index]=[M(o[0]),M(o[1])],Object.assign(a,ns(a.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let o=this.snap(n,void 0,t.altKey);this.change(r=>{let a=r.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=M(o[0]):a.x0=M(o[0]),i.corner[1]?a.z1=M(o[1]):a.z0=M(o[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId),r=o?.openings.find(c=>c.id===i.id),a=r&&o?_e(r,o.rooms,o.walls??[]):null;if(!r||!a)return;let l=this.offsetOnEdge(a.room,a.edge,n,r.width,t.altKey);this.changeFloor(c=>ke(c.openings.find(d=>d.id===i.id),{offset:l}),i.base);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(u=>u.id===this._floorId)?.furniture.find(u=>u.id===i.id);if(!o)return;let r=t.altKey?.01:this._doc.settings.grid,a=M(Math.round((o.x+n[0]-i.start[0])/r)*r),l=M(Math.round((o.z+n[1]-i.start[1])/r)*r),c=o.rotation,d=t.altKey?null:this.snapToWall({...o,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.changeFloor(u=>ke(u.furniture.find(h=>h.id===i.id),{x:a,z:l,rotation:c}),i.base);break}case"furnset":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=t.altKey?.01:this._doc.settings.grid,r=M(Math.round((n[0]-i.start[0])/o)*o),a=M(Math.round((n[1]-i.start[1])/o)*o),l=new Set(i.ids);this.changeFloor(c=>{for(let d of c.furniture)l.has(d.id)&&Object.assign(d,{x:M(d.x+r),z:M(d.z+a)})},i.base);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!o)return;let r=t.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/r)*r,l=Math.round((n[1]-i.start[1])/r)*r;this.change((c,d)=>{let u=d.outdoor.find(h=>h.id===i.id);u.points=o.points.map(([h,p])=>[M(h+a),M(p+l)]),u.pool?.ports&&o.pool?.ports&&(u.pool.ports=o.pool.ports.map(h=>({...h,x:M(h.x+a),z:M(h.z+l)})))},i.base,!1);break}case"resize":{i.moved=!0;let o=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!o)return;let r=cd(o,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.changeFloor(a=>ke(a.furniture.find(l=>l.id===i.id),r),i.base);break}case"rotate":{i.moved=!0;let o=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!o)return;let r=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=t.altKey?1:15;r=(Math.round(r/a)*a%360+360)%360,this.changeFloor(l=>ke(l.furniture.find(c=>c.id===i.id),{rotation:r}),i.base);break}case"aim":{i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let r=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=t.altKey?1:5;r=(Math.round(r/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-o.x,n[1]-o.z)*10)/10));this.changeFloor(c=>ke(c.placements.find(d=>d.entity_id===i.entityId),{rotation:r,reach:l}),i.base);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let r=t.altKey?.01:this._doc.settings.grid,a=M(Math.round((o.x+n[0]-i.start[0])/r)*r),l=M(Math.round((o.z+n[1]-i.start[1])/r)*r);this.changeFloor(c=>ke(c.placements.find(d=>d.entity_id===i.entityId),{x:a,z:l}),i.base);break}case"pet":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.settings.pets?.list.find(l=>l.id===i.id);if(o?.x==null||o.z==null)return;let[r,a]=[o.x,o.z];this.change(l=>of(l,i.id,r+n[0]-i.start[0],a+n[1]-i.start[1],t.altKey?.01:this._doc.settings.grid),i.base,!1);break}}}onPointerUp(t){let e=this.rightPress;if(this.rightPress=null,e&&t.button===2&&(this.rightUp=performance.now(),!e.moved&&t.type!=="pointercancel"&&(this._tool==="select"||this._tool==="furniture")&&this.openContext(e.target,e.at)),clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||t.type==="pointercancel"){n&&Dm.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let i=this.localPoint(t);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[o,r]=n.start,[a,l]=n.end;if(Math.abs(a-o)>=.2&&Math.abs(l-r)>=.2){let c=[Math.min(o,a),Math.min(r,l)],d=[Math.max(o,a),Math.max(r,l)],u=[c,[d[0],c[1]],d,[c[0],d[1]]];n.outdoor?this.addOutdoor(u):n.hole?this.addHole(c,d):n.roof?this.addRoofSection(c,d):this.addRoom(u)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...i),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...i),void 0,t.altKey),i);break;case"marquee":{let[o,r]=[Math.min(n.start[0],n.end[0]),Math.max(n.start[0],n.end[0])],[a,l]=[Math.min(n.start[1],n.end[1]),Math.max(n.start[1],n.end[1])],c=(this.floor?.furniture??[]).filter(d=>d.x>=o&&d.x<=r&&d.z>=a&&d.z<=l).map(d=>d.id);c.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(c)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":n.moved?this.pushHistory(n.base):(n.kind==="furniture"||n.kind==="furnset")&&n.pick?this.selectItem("furniture",n.pick):(n.kind==="poolport"||n.kind==="pooljoint")&&this.openCard(n.pool,`${n.kind==="poolport"?"port":"joint"}:${n.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"pooldev":{n.moved?this.pushHistory(n.base):this._doc.floors.flatMap(o=>o.furniture).find(o=>o.id===n.id)?.type==="pool_valve"?this.togglePoolValve(n.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${n.id}`);break}case"pet":n.moved&&this.pushHistory(n.base);break;case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),n.moved&&n.kind==="vertex"&&this.noteResize(n.roomId,n.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.history.push(t),this.showHistory()}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){if(n)return e;let i=this._doc.settings.grid,o=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=Ds/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let c of l.points)for(let d of t.points){let u=Math.hypot(d[0]+e[0]-c[0],d[1]+e[1]-c[1]);u<a&&(a=u,o=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return o}roomAt(t){return(this.floor?.rooms??[]).filter(i=>K(t,i.points)).sort((i,o)=>It(i.points)-It(o.points))[0]?.id??null}outdoorAt(t){return(this.floor?.outdoor??[]).filter(i=>i.points.length>=3&&K(t,i.points)).sort((i,o)=>It(i.points)-It(o.points))[0]?.id??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[o,r]=this.toScreen(n[0]);if(Math.hypot(o-e[0],r-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(It(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=Ln(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;if(!(e>.1&&n>.1))return;let i=this.floor,o=this.t("new_room",{n:(i?.rooms.length??0)+1}),r=Ih(this._rectName,Object.values(this.hass?.areas??{}),this.usedAreas(),o);this.addRoom([t,Ln(t,e,"right"),Ln(Ln(t,e,"right"),n,"down"),Ln(t,n,"down")],r),this._draft=[],this._rectName=""}setRectStart(t,e){if(!Number.isFinite(e))return;let n=this._draft[0]??[0,0],i=M(e-n[t]),o=r=>t===0?[M(r[0]+i),r[1]]:[r[0],M(r[1]+i)];this._draft=this._draft.length?this._draft.map(o):[o(n)]}usedAreas(){return new Set(this._doc.floors.flatMap(t=>[...t.rooms.map(e=>e.area_id),...(t.outdoor??[]).map(e=>e.area_id??null)]))}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],r=a=>Ut(this.hass,a,2);return m`<section>
      <h3>${this.t("measure")}</h3>
      ${e?m`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${zi(this.t("measure_length"),this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit==="imperial"?"text":"number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${a=>this._measureLen=this.readLen(a.target.value)??0}
                  @keydown=${a=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[a.key];l?(a.preventDefault(),this.measureStep(l)):a.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${o.map(([a,l])=>m`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?m`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((a,l)=>m`<li>${this.m(Math.hypot(a[0]-t[l][0],a[1]-t[l][1]))}</li>`)}
                </ol>`:b}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?m`<p class="fp3d-sub">${this.t("measure_gap",{gap:r(i)})}</p>`:b}`:m`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input
            list="fp3d-room-names"
            .value=${this._rectName}
            placeholder=${this.t("new_room",{n:(this.floor?.rooms.length??0)+1})}
            @change=${a=>this._rectName=a.target.value}
            @keydown=${a=>{a.key==="Enter"&&(this._rectName=a.target.value,this.rectBySize())}}
          /><datalist id="fp3d-room-names">
            ${Fh(Object.values(this.hass?.areas??{}),this.usedAreas(),this.floor?.ha_floor??null).map(a=>m`<option value=${a}></option>`)}
          </datalist></label
        >
        ${this.len(this.t("x"),e?.[0]??0,a=>this.setRectStart(0,a))} ${this.len(this.t("z"),e?.[1]??0,a=>this.setRectStart(1,a))}
        ${this.len(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:U("wall"),a:[M(t[0]),M(t[1])],b:[M(e[0]),M(e[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(t=>t.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===e),t))}async deleteFreeWall(){let t=this._wallId;!t||!this.isEditor||!await this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return z`<g>${(t.walls??[]).map(e=>{let[n,i]=this.toScreen(e.a),[o,r]=this.toScreen(e.b),a=e.id===this._wallId;return z`<g data-free-wall=${e.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${o} y2=${r} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${r} />
      </g>
      ${a&&this.isEditor&&!sr(e,!0,this._doc.settings)?z`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${o} cy=${r} r="16" class="fp3d-hit" /><circle cx=${o} cy=${r} r="6" /></g>`:b}`})}</g>`}renderFreeWallForm(t){let e=this.isEditor,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),i=a=>{let c=Math.max(.1,a)/(n||1);this.updateFreeWall({b:[M(t.a[0]+(t.b[0]-t.a[0])*c),M(t.a[1]+(t.b[1]-t.a[1])*c)]})},o=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],r=(a,l)=>{let c=l-o[a],d=u=>a===0?[M(u[0]+c),u[1]]:[u[0],M(u[1]+c)];this.updateFreeWall({a:d(t.a),b:d(t.b)})};return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),o[0],a=>r(0,a))} ${this.len(this.t("z"),o[1],a=>r(1,a))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,a=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,a))}),.01,.02)}
        ${this.len(this.t("wall_height"),t.height??this.floor?.height??2.5,a=>this.updateFreeWall({height:a>=(this.floor?.height??2.5)-.005?null:Math.max(.05,a)}),.05,.05)}
      </div>
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:b}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:U("hole"),type:"stairwell",x:M((t[0]+e[0])/2),z:M((t[1]+e[1])/2),w:M(e[0]-t[0]),d:M(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:U("outdoor"),type:e,points:t.map(([o,r])=>[M(o),M(r)])},i=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let o=Mt(n.points);n.points=Ro(i,o.x0,o.z0,o.x1,o.z1),n.pool_shape=i}e==="pool"&&this.pipeRules&&(n.pool={}),this.change((o,r)=>r.outdoor.push(n)),this.selectItem("outdoor",n.id)}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(t=>t.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>ke(i.outdoor.find(o=>o.id===e),t))}async deleteOutdoor(){let t=this._outdoorId;if(!t||!this.isEditor||!await this.confirmFixedDelete("outdoor",t))return;let e=this.floor?.outdoor.find(i=>i.id===t),n=e?.pool?.pipes?.length??0;e?.type==="pool"&&n&&!await this.ask(this.t("pool_delete_confirm",{n}))||(this.change((i,o)=>o.outdoor=o.outdoor.filter(r=>r.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isEditor)return;let e={...t,id:U("outdoor"),points:t.points.map(([n,i])=>[M(n+.5),M(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t,e){if(!this.floor)return;let n=U("room"),i=this.floor.rooms.length+1,{name:o,area_id:r}=e??{name:this.t("new_room",{n:i}),area_id:null};this.change((a,l)=>l.rooms.push({id:n,name:o,area_id:r,points:t.map(([c,d])=>[M(c),M(d)]),floor_material:"wood"})),this._roomId=n,this._vertex=null}onKey=t=>{this.shiftHeld=t.shiftKey;let e=t.composedPath();if(e.some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)){t.key==="Escape"&&e.includes(this)&&this.escape();return}if(!this.isConnected||!this.offsetParent||this.pickerOpen())return;if(qf(t)){t.preventDefault(),this._help=!this._help;return}if(this._help){t.key==="Escape"&&(this._help=!1);return}if(this._rackSheet){t.key==="Escape"&&(this._rackSheet=null);return}let n=t.ctrlKey||t.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(t.key.toLowerCase()))))if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(nl(t)){let i=nl(t);(i==="copy"?this.copySelection():i==="paste"?this.pasteClipboard():this.selectAll())&&t.preventDefault()}else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.prototype.hasOwnProperty.call(Vm,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[o,r]=Vm[t.key];this.nudge(o*i,r*i)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Tab"&&!n&&!t.altKey&&this._furnitureId&&(this._tool==="select"||this._tool==="furniture")&&this.keysFree(e)){let i=Yr(this.tabItems(),this._furnitureId,t.shiftKey?-1:1);i&&(t.preventDefault(),this.selectFromList(i))}else t.key==="Backspace"&&this.drawingPoints?this._draft=this._draft.slice(0,-1):t.key==="Enter"&&this.drawingPoints?this.closeDraft():t.key==="Escape"&&this.escape()};pickerOpen(){return[...this.renderRoot?.querySelectorAll?.("fp3d-entity-picker")??[]].some(e=>e.open)}escape(){let t=_f({typing:ys(vs(this.renderRoot)),menu:!!this._ctx,placing:!!this._placing,pipeDraft:!!this._pipeDraft,pipeMode:this._pipeMode,drawing:this._draft.length>0,item:!!(this._furnitureId||this._openingId||this._deviceId||this._outdoorId||this._wallId),tool:this._tool,room:!!this._roomId});t==="release"?el(this.renderRoot):t==="close_menu"?this._ctx=null:t==="cancel_place"?this.cancelPlacing():t==="cancel_pipe"?this._pipeDraft=null:t==="end_pipe_mode"?this._pipeMode=!1:(t==="clear_draft"?this._draft=[]:t==="deselect_item"?this.selectItem("room",this._roomId):t==="select_tool"?this._tool="select":this.selectItem("room",null),this._cursor=null)}keysFree(t){let e=t[0];return!e||e===this||typeof document<"u"&&(e===document.body||e===document.documentElement)?!0:typeof SVGElement<"u"&&e instanceof SVGElement}nudge(t,e){let n=["nudge",this._furnitureId?this.selection().join(","):"",this._deviceId,this._openingId,this._wallId,this._outdoorId,this._roomId,this._vertex].join("|");this.mergeKey=n;try{return this.nudgeBy(t,e)}finally{this.mergeKey=null}}nudgeBy(t,e){let n=this.floor;if(!n||!this.isEditor)return!1;let i=this.selectedFix,o=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||o.some(a=>this.isFixedItem("furniture",a)))return this._fixedHint=!0,!0;let r=a=>[M(a[0]+t),M(a[1]+e)];if(o.length>1){let a=new Set(o);return this.change((l,c)=>{for(let d of c.furniture)a.has(d.id)&&([d.x,d.z]=r([d.x,d.z]))}),!0}if(this._deviceId){let a=this._deviceId;if(!n.placements.some(l=>l.entity_id===a))return!1;this.change((l,c)=>{let d=c.placements.find(u=>u.entity_id===a);[d.x,d.z]=r([d.x,d.z])})}else if(this._furnitureId){let a=this._furnitureId;this.change((l,c)=>{let d=c.furniture.find(u=>u.id===a);d&&([d.x,d.z]=r([d.x,d.z]))})}else if(this._openingId){let a=this.opening,l=a?_e(a,n.rooms,n.walls??[]):null;if(!a||!l)return!1;let c=l.room.points[l.edge],d=l.room.points[(l.edge+1)%l.room.points.length],u=Math.hypot(d[0]-c[0],d[1]-c[1])||1,h=(t*(d[0]-c[0])+e*(d[1]-c[1]))/u;if(Math.abs(h)<1e-9)return!0;this.updateOpening({offset:this.clampOffset(l.room,l.edge,a.width,a.offset+h)})}else if(this._wallId){let a=this._wallId;this.change((l,c)=>{let d=(c.walls??[]).find(u=>u.id===a);d&&([d.a,d.b]=[r(d.a),r(d.b)])})}else if(this._outdoorId){let a=this._outdoorId;this.change((l,c)=>{let d=c.outdoor.find(u=>u.id===a);d&&(d.points=d.points.map(r))})}else if(this._roomId){let a=this._roomId,l=this._vertex,c=n.rooms.find(u=>u.id===a);if(!c)return!1;let d=new Set(n.placements.filter(u=>K([u.x,u.z],c.points)).map(u=>u.entity_id));this.change((u,h)=>{let p=h.rooms.find(f=>f.id===a);if(l!==null&&l<p.points.length){p.points[l]=r(p.points[l]);return}p.points=p.points.map(r);for(let f of h.placements)d.has(f.entity_id)&&([f.x,f.z]=r([f.x,f.z]))})}else return!1;return!0}get freeHaFloors(){let t=new Set(this._doc.floors.map(e=>e.ha_floor));return Object.values(this.hass?.floors??{}).filter(e=>!t.has(e.floor_id)).sort((e,n)=>(e.level??99)-(n.level??99)||e.name.localeCompare(n.name))}unplacedAreas(t){return ad(this._doc,t,this.hass?.areas)}addFloor(t=null){let e=this._doc.floors,n=U("floor"),i=t?.name??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),o={...sd(n,i,rd(e,t?.level)),ha_floor:t?.floor_id??null},r=structuredClone(this._doc),a=r.floors.findIndex(l=>l.elevation>o.elevation);r.floors.splice(a<0?r.floors.length:a,0,o),this.setDoc(r),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=ld(t,e,()=>U("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(o=>o.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}async deleteFloor(){let t=this.floor;if(!t||!await this.ask(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}async deleteRoom(){let t=this._roomId;!t||!this.isEditor||!await this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let i=n.rooms.find(o=>o.id===t);n.rooms=n.rooms.filter(o=>o.id!==t),n.openings=n.openings.filter(o=>o.room_id!==t||o.wall),i&&(n.placements=n.placements.filter(o=>!K([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isEditor)return;let e=U("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([o,r])=>[M(o+.5),M(r+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?b:m`<div class="fp3d-roof-floors" title=${this.t("roof_floor_pick_hint")}>
      <span class="fp3d-sub">${this.t("roof_floor_pick")}</span>
      <div class="fp3d-seg fp3d-dev-source">
        ${t.map(e=>m`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
      </div>
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(t=>t.id===this._roofId):void 0}async useRoofSections(t=!1){if(!this.isEditor)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!await this.ask(this.t("roof_regen_confirm"),this.t("ask_ok"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=Np(n,()=>U("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isEditor)return;let n=Wp(this._doc,t[0],t[1],e[0],e[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),o=n===null,r=M(n??i+2.4),a=o?6:this._doc.settings.roof.pitch||35,l={id:U("roof"),x0:M(t[0]),z0:M(t[1]),x1:M(e[0]),z1:M(e[1]),shape:o?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:r,eave_b:r,pitch_a:a,pitch_b:a,base:r,overhang:o?.15:null,...o?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isEditor)return;let n=is(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,r])=>[M(o),M(r)]);this.updateRoofSection({shape:"flat",points:i,...ns(i)})}addDormer(t){let e=this.roofSection;if(!e||!this.isEditor)return;let n=Lp(e,t,U("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isEditor||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.sections?.find(o=>o.id===e);i&&Object.assign(i,t)}))}turnRoofSection(t){let e=this._roofId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof.sections??[],o=i.find(c=>c.id===e);if(!o||o.points&&o.points.length>=3)return;let r=t-(o.rotation??0);if(!r)return;let a=o.pivot??[M((o.x0+o.x1)/2),M((o.z0+o.z1)/2)],l=new Set(i.filter(c=>c!==o&&_a(i,c)===o).map(c=>c.id));n.settings.roof.sections=i.map(c=>{if(c!==o&&!l.has(c.id))return c;let d=Op(c,r,a);return{...d,x0:M(d.x0),x1:M(d.x1),z0:M(d.z0),z1:M(d.z1),pivot:d.pivot&&[M(d.pivot[0]),M(d.pivot[1])],rotation:M(d.rotation??0)}})})}deleteRoofSection(){let t=this._roofId;!t||!this.isEditor||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isEditor)return;let e={...structuredClone(t),id:U("roof"),x0:M(t.x0+1),x1:M(t.x1+1),z0:M(t.z0+1),z1:M(t.z1+1)};t.pivot&&(e.pivot=[M(t.pivot[0]+1),M(t.pivot[1]+1)]),this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return z`<g class="fp3d-roof-layer">${e.map((n,i)=>{let o=n.id===this._roofId,r=ee(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=_a(e,n),c=l?ee(Cp(l,n)):r,d=(a??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(y=>this.toScreen(y)),u=(y,v)=>{let[w,k]=this.toScreen(y),[S,$]=this.toScreen(v);return z`<line x1=${w} y1=${k} x2=${S} y2=${$} />`},h=n.shape==="flat"||n.shape==="parapet"?null:fa(n,{u0:0,u1:0,a:0,b:0}),p=h?z`${h.ridges.map(([y,v])=>u(r.at(y[0],y[1]),r.at(v[0],v[1])))}`:b,[f,_]=this.toScreen(r.at((r.u0+r.u1)/2,r.w/2)),g=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(os(n),1)}`;return z`<g data-roof=${n.id} class=${`fp3d-roof-sec${o?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(y=>y.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${p}</g>
          <text x=${f} y=${_-14}>${g}</text>
        </g>
        ${o&&this.isEditor&&!this.roofFixed(n)&&a?a.map((y,v)=>{let[w,k]=this.toScreen(y);return z`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${v}`}><circle cx=${w} cy=${k} r="16" class="fp3d-hit" /><circle cx=${w} cy=${k} r="6" /></g>`}):b}
        ${o&&this.isEditor&&!this.roofFixed(n)&&!a&&!bn(n)?[[0,0],[1,0],[1,1],[0,1]].map(([y,v])=>{let[w,k]=this.toScreen([y?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),v?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return z`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${y}:${v}`}><circle cx=${w} cy=${k} r="16" class="fp3d-hit" /><circle cx=${w} cy=${k} r="6" /></g>`}):b}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:rs(t,e)}setSolarDim(t){this._solarDim=t;try{localStorage.setItem("home3d.solarDim",t?"on":"off")}catch{}}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return b;let e=yt(this._doc);return z`<g class="fp3d-solar-layer">${t.map(n=>{let i=Xt(this._doc,n,e);if(!i||i.wall&&i.wall.floorId!==this._floorId)return b;let o=n.id===this._solarId,r=this._solarDim&&!o&&!i.wall&&!i.unbounded,a=b;if(o&&i.unbounded&&this.isEditor&&!n.locked){let[l,c]=Ni(i,n),d=(n.rotation??0)*Math.PI/180,u=.9+Math.max(...Ce(i,n,!0).flatMap(g=>g.corners.map(y=>Math.hypot(y[0]-l,y[2]-c))))*.5,[h,p]=this.toScreen([l,c]),[f,_]=this.toScreen([l+Math.sin(d)*u,c-Math.cos(d)*u]);a=z`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${h} y1=${p} x2=${f} y2=${_} />
          <circle cx=${f} cy=${_} r="16" class="fp3d-hit" />
          <circle cx=${f} cy=${_} r="8" />
          <path d="M${f-4} ${_-1}a4 4 0 1 1 2 3.5" />
        </g>`}return z`<g data-solar=${n.id} class=${`fp3d-solar${o?" fp3d-solar-sel":""}${r?" fp3d-solar-dim":""}${o&&this._solarPick?" fp3d-solar-pick":""}`}>${Ce(i,n,o).map(l=>{let c=i.wall?Math.max(.3,...l.corners.map(u=>(u[0]-i.o[0])*i.n[0]+(u[2]-i.o[2])*i.n[2])):0,d=i.wall?[l.corners[0],l.corners[1]].flatMap((u,h)=>{let p=[u[0],u[2]],f=[u[0]+i.n[0]*c,u[2]+i.n[2]*c];return h===0?[p,f]:[f,p]}):l.corners.map(u=>[u[0],u[2]]);return z`<polygon data-cell=${l.cell} class=${l.skipped?"fp3d-solar-off":""} points=${d.map(u=>this.toScreen(u).join(",")).join(" ")} />`})}</g>${a}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return b;let e=new Map(yt(this._doc).map(n=>[n.key,n]));return z`<g class="fp3d-roofwin-layer">${t.map(n=>{let i=e.get(n.face),o=i?Jp(i,n):null;return o?z`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${o.map(r=>this.toScreen([r[0],r[2]]).join(",")).join(" ")} /></g>`:b})}</g>`}addRoofWindow(){if(!this.isEditor)return;let t=yt(this._doc).filter(i=>!i.flat),e=ls(t,this._doc.settings.north??0)??yt(this._doc)[0];if(!e)return;let n=Sa(e,U("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof.windows?.find(r=>r.id===e);if(!i)return;Object.assign(i,t);let o=yt(n).find(r=>r.key===i.face);o&&Object.assign(i,ni(o,ii(i)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isEditor||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(yt(this._doc).map(n=>[n.key,n]));return m`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?m`<div class="fp3d-room-list">
            ${t.map((n,i)=>{let o=e.get(n.face);return m`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:b}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isEditor||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isEditor,n=yt(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,r=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>Pl(l)||Gt(l));return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${e?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:b}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&i({...Sa(c,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name,float:t.float})}}>
              ${n.map(l=>m`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),t.w??.78,l=>i({w:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),t.h??1.18,l=>i({h:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),t.u,l=>i({u:M(l)}),.05)}
          ${this.len(this.t("solar_v"),t.v,l=>i({v:M(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),t.cover??null,void 0,r,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),t.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),t.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),t.window??null,void 0,r,l=>i({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${t.name??""} ?disabled=${!e} maxlength="64" @change=${l=>i({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <label class="fp3d-check"
          ><input type="checkbox" ?disabled=${!e} .checked=${!!t.float} @change=${l=>i({float:l.target.checked||void 0})} />
          ${this.t("roof_window_float")}</label
        >
        <p class="fp3d-sub">${this.t("roof_window_float_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${e?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:b}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(o=>[o.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=ph({building:t,consumers:[],summary:n,fieldPower:e}).filter(o=>o.key)}catch{i=[]}return this.cableCache={doc:t,segs:i},i}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,i)=>e(n)-e(i)||n.localeCompare(i))}cableLabel(t){let e=a=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===a);return l?l.name||this.typeName(l.type):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>Et(a.type)==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,r]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(o==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(d=>d.id===r);return l<0&&this._doc.floors.some(d=>d.furniture.some(u=>u.id===r))?`${e(r)} \u2192 ${this.t("furn_inverter")}`:`${a[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${e(r)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${e(r)}`}layCable(t){if(!this.isEditor||!this._floorId)return;let e=[];for(let o of this.cableSegments().filter(r=>r.key===t))for(let r of[o.a,o.b]){let a=[M(r[0]),M(r[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&e.push(a)}let n=e.length>2?e.slice(1,-1):e,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(r=>r.id!==t),{id:t,floor_id:i,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){if(!vt("energy_pro"))return b;let t=this.cableSegments();if(!t.length)return b;let e=t.filter(r=>r.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(t.map(r=>r.key))];return z`<g class="fp3d-cable-layer">${o.map(r=>{let a=n.find(g=>g.id===r),l=`fp3d-cable fp3d-cable-${r.split(":")[0]}${a?" fp3d-cable-laid":""}${r===i?" fp3d-cable-sel":""}`,c=t.filter(g=>g.key===r),d=e.filter(g=>g.key===r).map(g=>{let y=this.toScreen([g.a[0],g.a[2]]),v=this.toScreen([g.b[0],g.b[2]]);return z`<line x1=${y[0]} y1=${y[1]} x2=${v[0]} y2=${v[1]} />`});if(!(a&&r===i&&a.floor_id===this._floorId&&!a.locked))return d.length?z`<g class=${l} data-cable=${r}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:b;let u=c[0],h=c[c.length-1],p=[this.toScreen([u.a[0],u.a[2]]),...a.points.map(g=>this.toScreen(g)),this.toScreen([h.b[0],h.b[2]])],f=p.slice(0,-1).map((g,y)=>z`<line class="fp3d-cable-piece" data-cable-line=${r} data-cable-seg=${y} x1=${g[0]} y1=${g[1]} x2=${p[y+1][0]} y2=${p[y+1][1]} />`),_=a.points.map((g,y)=>{let v=this.toScreen(g);return z`<g class="fp3d-vertex" data-cable-pt=${`${r}:${y}`}><circle cx=${v[0]} cy=${v[1]} r="16" class="fp3d-hit" /><circle cx=${v[0]} cy=${v[1]} r="6" /></g>`});return z`<g class=${l} data-cable=${r}>${d}${f}${_}</g>`})}</g>`}renderCableSettings(){let t=this.cableKeys();if(!t.length)return b;let e=this.isEditor,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(o=>o.id===this._cableId):void 0;return m`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(o=>m`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${o===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=o===this._cableId?null:o;let r=n.find(a=>a.id===o);this._cableId&&r&&this._doc.floors.some(a=>a.id===r.floor_id)&&(this._floorId=r.floor_id)}}
            >
              <span>${this.cableLabel(o)}${n.some(r=>r.id===o)?m` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:b}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?m`<div class="fp3d-actions">
              ${i?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(o=>{let r=o.settings.roof.cables?.find(a=>a.id===i.id);r&&(r.locked=!r.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(o=>o.settings.roof.cables=(o.settings.roof.cables??[]).filter(r=>r.id!==this._cableId))}>${this.t("cable_auto")}</button>`:m`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?m`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,o=>this.change(r=>{let a=r.settings.roof.cables?.find(l=>l.id===i.id);a&&(a.height=Math.min(30,Math.max(0,M(o))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(o=>o.id===i.floor_id)?.name??""})}</p>`:b}`:b}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return b;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}",solar:"\u2600"},n=this._doc.settings.roof.hologram,i=vt("energy_pro")&&n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return z`<g class="fp3d-energy-markers">${i?z`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:b}${t.furniture.filter(o=>nn(o.type)).map(o=>{let[r,a]=this.toScreen([o.x,o.z]),l=o.id===this._furnitureId;return z`<g data-energy-device=${o.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${r} cy=${a} r="17" />
          <text x=${r} y=${a+6} class="fp3d-energy-icon">${e[Et(o.type)??o.type]??"\u26A1"}</text>
          ${l?z`<text x=${r} y=${a+32} class="fp3d-energy-name">${this.typeName(o.type)}</text>`:b}
          <title>${this.typeName(o.type)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===Ze)return this.t("solar_ground");if(t.wall){let{floorId:o,room:r,edge:a,free:l}=t.wall,c=this._doc.floors.find(h=>h.id===o),d=c?.rooms.find(h=>h.id===r),u=l?this.t("solar_wall_free"):d?`${d.name}${a!=null?` ${a+1}\u2013${(a+1)%d.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${c?.name??""} \xB7 ${u?`${u} \xB7 `:""}${this.t(`compass_${Ma(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(o=>o.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${Ma(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${i}`}addSolarField(){if(!this.isEditor)return;let t=yt(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(r=>r.face)),n=this._doc.settings.north??0,i=ls(t.filter(r=>!e.has(r.key)),n)??ls(t,n);if(!i)return;let o=as(i,U("pv"));this.change(r=>r.settings.roof.solar=[...r.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(t){this._solarId=t,this._roofId=null;let e=this._doc.settings.roof.solar?.find(n=>n.id===t);e?.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){if(!this.isEditor)return;let t=this._floorId??this._doc.floors[0]?.id,e=t?Up(this._doc,U("pv"),t):null;e&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isEditor)return;let t=ya(this._doc,U("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isEditor||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{let i=n.settings.roof.solar?.find(r=>r.id===e);if(!i)return;Object.assign(i,t);let o=Xt(n,i);o&&Object.assign(i,ni(o,i))}))}setSolarString(t){let e=this._solarId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof,o=i.solar?.find(a=>a.id===e);if(!o)return;if(t==="new"){let a=i.strings??[],l={id:U("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:o.entity??null,inverter:null};i.strings=[...a,l],o.string=l.id}else o.string=t;let r=new Set((i.solar??[]).map(a=>a.string).filter(Boolean));i.strings=(i.strings??[]).filter(a=>r.has(a.id))})}updateSolarString(t){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isEditor||this.change(i=>{let o=i.settings.roof.strings?.find(r=>r.id===n);o&&Object.assign(o,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isEditor||this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===e);i&&t(i)})}deleteSolar(){let t=this._solarId;!t||!this.isEditor||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==t);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=yt(this._doc),n=new Map(t.map(o=>[o.id,Xt(this._doc,o,e)])),i=this.isEditor;return m`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?m`<label class="fp3d-check fp3d-solar-dim-toggle"
            ><input type="checkbox" .checked=${this._solarDim} @change=${o=>this.setSolarDim(o.target.checked)} />
            ${this.t("solar_dim")}</label
          >`:b}
      ${t.length?m`<div class="fp3d-room-list">
            ${t.map((o,r)=>{let a=n.get(o.id),l=a?Ce(a,o).length:0;return m`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${r+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Ut(this.hass,l*(o.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:b}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?m`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let r=t.filter(d=>d.string===o.id),a=r.map(d=>n.get(d.id)?Ce(n.get(d.id),d).length:0),l=a.reduce((d,u)=>d+u,0),c=r.reduce((d,u,h)=>d+a[h]*(u.wp??400)/1e3,0);return m`<p class="fp3d-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:r.length,n:l,kwp:Ut(this.hass,c,1)})}</p>`})}`:b}
    </section>`}renderSolarForm(t){let e=this.isEditor,n=yt(this._doc),i=Re(this._doc),o=Xt(this._doc,t,n),r=t.face===Ze,a=o?Ce(o,t).length:0,l=Wi(t),c=l.reduce((p,f)=>p+f,0)-(t.skip?.length??0),d=this.entityOptions(p=>this.isPowerSensor(p)),u=p=>this.updateSolar(p),h=(this._doc.settings.roof.solar??[]).findIndex(p=>p.id===t.id)+1;return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${h}`}</h3>
          ${e?m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:b}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!e}
              .value=${t.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${p=>u({name:p.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${p=>{let f=p.target.value,_={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};f===Ze&&u({...ya(this._doc,t.id),..._,rows:t.rows,cols:t.cols});let g=n.find(v=>v.key===f);g&&u($a(g,{...t,..._}));let y=i.find(v=>v.key===f);y&&u($a(y,{...t,..._,rows:1}))}}
            >
              ${o?b:m`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(p=>m`<option value=${p.key} ?selected=${p.key===t.face}>${this.faceLabel(p)}</option>`)}
              <option value=${Ze} ?selected=${r}>${this.t("solar_ground")}</option>
              ${i.map(p=>m`<option value=${p.key} ?selected=${p.key===t.face}>${this.faceLabel(p)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,p=>{let f=Math.max(1,Math.min(40,Math.round(p)));u(t.layout?.length?{layout:Array.from({length:f},(_,g)=>t.layout[g]??t.layout[t.layout.length-1]),rows:f}:{rows:f})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${t.layout?.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${p=>{let f=p.target.value.split(/[,;\s]+/).map(_=>parseInt(_,10)).filter(_=>Number.isFinite(_)&&_>=0);f.length&&(f.length===1?u({cols:Math.max(1,Math.min(60,f[0])),layout:null,skip:null}):u({layout:f.slice(0,40).map(_=>Math.min(60,_)),rows:Math.min(40,f.length),cols:Math.max(1,...f),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${o&&!o.unbounded?m`${this.t("solar_face_size",{w:Ut(this.hass,o.lu,1),h:Ut(this.hass,o.ls,1)})} · `:b}${this.t("solar_cols_hint")}
        </p>
        ${t.layout?.length&&new Set(t.layout).size>1?m`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(p=>m`<button aria-pressed=${(t.align??"left")===p} ?disabled=${!e} @click=${()=>u({align:p})}>${this.t(`solar_align_${p}`)}</button>`)}
            </div>`:b}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.portrait!==!1} ?disabled=${!e} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${t.portrait===!1} ?disabled=${!e} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.look!=="blue"} ?disabled=${!e} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${t.look==="blue"} ?disabled=${!e} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,p=>u({module_w:Math.max(.3,Math.min(3,M(p)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,p=>u({module_h:Math.max(.3,Math.min(3,M(p)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,p=>u({wp:Math.max(50,Math.min(1500,Math.round(p)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${t.skip?.length?m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:b}
        </div>
        ${this._solarPick?m`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:b}
        <div class="fp3d-form">
          ${r?m`${this.len(this.t("solar_base"),t.base??0,p=>u({base:p>.001?Math.min(60,M(p)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,p=>u(Vi(this._doc,t,p)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Vi(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Vi(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:m`${this.len(this.t("solar_u"),t.u,p=>u({u:M(p)}),.05)} ${this.num(this.t(o?.wall?"solar_v_wall":"solar_v"),t.v,p=>u({v:M(p)}),.05)}`}
          ${o?.wall?m`${this.num(this.t("solar_tilt_wall"),t.tilt??0,p=>u({tilt:Math.max(0,Math.min(90,Math.round(p)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${p=>u({flip:p.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:b}
          ${o?.flat?m`${this.num(this.t("solar_tilt"),t.tilt??15,p=>u({tilt:Math.max(0,Math.min(45,Math.round(p)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${p=>u({flip:p.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:b}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:a,kwp:Ut(this.hass,a*(t.wp??400)/1e3,1)})}${a<c?m` · <b>${this.t("solar_partial",{n:a,total:c})}</b>`:b}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${p=>{let f=p.target.value;this.setSolarString(f===""?null:f)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(p=>m`<option value=${p.id} ?selected=${p.id===t.string}>${p.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let p=this._doc.settings.roof.strings?.find(y=>y.id===t.string);if(!p)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,d,y=>u({entity:y==="none"?null:y}));let f=this.hass?pn(this.hass,this._doc.floors):null,_=y=>this._doc.floors.flatMap(v=>v.furniture.filter(w=>Et(w.type)===y).map(w=>({m:w,fl:v}))).map(({m:v,fl:w},k)=>{let S=f?.get(v.id)?.entity,$=v.name?.trim()||(S&&this.hass?st(this.hass,S):"");return{id:v.id,label:`${$||`${this.t(`furn_${y}`)} ${k+1}`} \xB7 ${w.name}`}}),g=[..._("inverter"),..._("home_battery")];return m`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${p.name} @change=${y=>this.updateSolarString({name:y.target.value.trim()||p.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),p.entity??null,void 0,d,y=>this.updateSolarString({entity:y==="none"?null:y}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${y=>this.updateSolarString({inverter:y.target.value||null})}>
                  <option value="" ?selected=${!p.inverter}>${this.t(g.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${g.map(y=>m`<option value=${y.id} ?selected=${y.id===p.inverter}>${y.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?m`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!o} @click=${()=>o&&u({...as(o,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:b}
      </section>`}renderRoofPanel(){let t=this._doc.settings.roof,e=this.isEditor,n=t.type==="custom"?this.roofSection:void 0,i=this._roofWinId?t.windows?.find(r=>r.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=t.type==="custom"?t.sections??[]:[];return m`${this.renderRoofBasics()}
    <section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:m`<div class="fp3d-room-list">
              ${o.map((r,a)=>m`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=r.id}>
                    <span>${a+1} · ${r.dormer?this.t("roof_dormer"):this.t(`roof_shape_${r.shape}`)} · ${this.m(Math.abs(r.x1-r.x0),1)} × ${this.m(Math.abs(r.z1-r.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(os(r),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(r=>r.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let t=this._solarId?this._doc.settings.roof.solar?.find(i=>i.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?this.floor?.furniture.find(i=>i.id===this._furnitureId&&nn(i.type)):void 0;if(e)return m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`;let n=vt("energy_pro");return m`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():b}${n?this.renderHologramSettings():b}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isEditor,n=this._doc.settings.roof.hologram??So,i=n.place==="free",o=l=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??So,...l}),r=(l,c)=>l.name||`${this.t("solar_field")} ${c+1}`,a=()=>{let l=-1/0,c=1/0,d=-1/0;for(let h of this._doc.floors)for(let p of h.rooms)for(let[f,_]of p.points)l=Math.max(l,f),c=Math.min(c,_),d=Math.max(d,_);let u=Number.isFinite(l);o({place:"free",x:n.x??(u?M(l+2):0),z:n.z??(u?M((c+d)/2):0),height:n.height??3})};return m`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!e} @change=${l=>l.target.value==="free"?a():o({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?m`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>o({x:M(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>o({z:M(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>o({height:Math.min(60,Math.max(0,M(l)))}),.25,0)}`:t.length?m`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>o({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,c)=>m`<option value=${l.id} ?selected=${l.id===n.field}>${r(l,c)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>o({right:Math.min(30,Math.max(-30,M(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>o({up:Math.min(30,Math.max(-30,M(l)))}),.25)}`:m`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>o({size:Math.min(3,Math.max(.3,M(l)))}),.1,.3)}
        ${this.num(this.t("holo_device_min_w"),n.device_min_w??0,l=>o({device_min_w:Math.max(0,Math.round(l))}),1,0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${n.device_house!==!1} ?disabled=${!e} @change=${l=>o({device_house:l.target.checked?void 0:!1})} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!n.device_room} ?disabled=${!e} @change=${l=>o({device_room:l.target.checked||void 0})} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!n.plant_floor} ?disabled=${!e} @change=${l=>o({plant_floor:l.target.checked||void 0})} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${n.mirror!==!1} ?disabled=${!e} @change=${l=>o({mirror:l.target.checked?void 0:!1})} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`}isPowerSensor(t){if(!Gt(t))return!1;let e=this.hass?.states[t]?.attributes;return e?.device_class==="power"||e?.unit_of_measurement==="W"||e?.unit_of_measurement==="kW"}typeName(t){let e=ft(t);return e?jt(e,this.hass?.language??"en"):this.t(`furn_${t}`)}devicePower(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}renderEnergyChecklist(){let t=this._doc,e=this.hass?pn(this.hass,t.floors):new Map,n=t.floors.flatMap(g=>g.furniture.map(y=>({m:y,fl:g}))),i=g=>n.filter(y=>(Et(y.m.type)??y.m.type)===g),o=g=>{this._floorId=g.fl.id,this._solarId=null,this.selectItem("furniture",g.m.id),this.showPoint(g.m.x,g.m.z)},r=t.settings.roof.solar??[],a=i("meter"),l=i("inverter"),c=i("home_battery"),d=i("grid_point"),u=!!t.energy.grid||a.some(g=>this.devicePower(g.m,e)),h=!!t.energy.solar||l.length>0&&l.every(g=>this.devicePower(g.m,e)),p=c.every(g=>this.devicePower(g.m,e)&&g.m.soc&&g.m.soc!=="none")||!!t.energy.battery,f=[{state:r.length?"ok":"todo",label:this.t(r.length?"chk_solar":"chk_solar_add"),action:r.length?()=>this._solarId=r[0].id:()=>this.addSolarField()},a.length?{state:u?"ok":"todo",label:this.t(u?"chk_meter":"chk_meter_sensor"),action:()=>o(a[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:h?"ok":"todo",label:this.t(h?"chk_inverter":"chk_inverter_sensor"),action:()=>o(l.find(g=>!this.devicePower(g.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:p?"ok":"todo",label:this.t(p?"chk_battery":"chk_battery_sensor"),action:()=>o(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>o(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")}],_=f.filter(g=>g.state==="ok").length;return m`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${_}/${f.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${f.map(g=>g.href?m`<a class="fp3d-chk fp3d-chk-${g.state}" href=${g.href} target="_blank" rel="noopener"><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</a>`:m`<button class="fp3d-chk fp3d-chk-${g.state}" ?disabled=${!this.isEditor&&!!g.action&&g.state!=="ok"} @click=${g.action}><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</button>`)}
    </section>`}renderHelpLinks(){return m`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href=${Za} target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
      </div>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isEditor)return;if(t==="grid_point"){let v=Aa(this._doc),[w,k,S]=$t(t),[$,x]=v?v.end:this.toWorld(this._size.w/2,this._size.h/2),R={id:U("furniture"),type:t,x:M($),z:M(x),rotation:0,w,d:k,h:S,variant:null};this.change((L,C)=>C.furniture.push(R)),this.selectItem("furniture",R.id),this.showPoint(R.x,R.z);return}let n=v=>`${v.name} ${v.area_id&&this.hass?.areas?.[v.area_id]?.name||""} ${v.area_id??""}`.toLowerCase(),i=e.rooms.filter(v=>v.points.length>=3),o=v=>i.find(w=>v.test(n(w))),r=i.find(v=>e.furniture.some(w=>w.type==="parking"&&K([w.x,w.z],v.points))),a=o(/garage|carport/)??r,l=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=o(/flur|diele|eingang|hall|entr|lobby/),d=(t==="wallbox"?a:t==="meter"?l??c??a:l??a)??this.room??i.sort((v,w)=>Math.abs(Rt(w.points))-Math.abs(Rt(v.points)))[0],[u,h,p]=$t(t),[f,_]=d?ge(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[v,w]=ge(d.points),k=null,S=new Set(e.openings.filter(R=>R.room_id===d.id).map(R=>R.edge)),$=d.points.some((R,L)=>!S.has(L));d.points.forEach((R,L)=>{if($&&S.has(L))return;let C=d.points[(L+1)%d.points.length],E=Math.hypot(C[0]-R[0],C[1]-R[1]);if(k&&E<=k.l)return;let O=(R[0]+C[0])/2,I=(R[1]+C[1])/2,T=-(C[1]-R[1])/E,F=(C[0]-R[0])/E;(v-O)*T+(w-I)*F<0&&([T,F]=[-T,-F]),k={mx:O,mz:I,nx:T,nz:F,l:E}});let x=k;x&&([f,_]=[x.mx+x.nx*(h/2+.25),x.mz+x.nz*(h/2+.25)])}let g={id:U("furniture"),type:t,x:M(f),z:M(_),rotation:0,w:u,d:h,h:p,variant:null},y=d?Oi({...e,furniture:[...e.furniture,g]},g,this._doc.settings.wall_interior):null;y&&Object.assign(g,{x:M(y.x),z:M(y.z),rotation:y.rotation}),this.change((v,w)=>w.furniture.push(g)),this.selectItem("furniture",g.id),this.showPoint(g.x,g.z)}renderEnergyDevices(){let t=this.isEditor,e=this._doc.floors.flatMap(n=>n.furniture.filter(i=>nn(i.type)).map(i=>({fl:n,m:i})));return m`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${e.length?m`<div class="fp3d-room-list">
            ${e.map(({fl:n,m:i})=>m`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.typeName(i.type)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:b}
      <div class="fp3d-actions">
        ${Ao.map(n=>m`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(t){let e=this.isEditor,n=p=>this.updateRoofSection(p),i=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,r]=t.flip?[i[1],i[0]]:i,a=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",c=p=>p.findIndex(f=>f.id===t.id)+1,d=(p,f,_,g=.05,y=0)=>this.len(p,f,v=>_(Math.max(y,M(v))),g,y),u=(p,f,_)=>this.num(p,f,g=>_(Math.max(0,M(g))),1,0),h=!!this._doc.settings.lock_plan;return m`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${t.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${e?h?m`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:m`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:b}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!e} @change=${p=>n({shape:p.target.value})}>
            ${Bc.map(p=>m`<option value=${p} ?selected=${t.shape===p}>${this.t(`roof_shape_${p}`)}</option>`)}
          </select>
        </label>
        ${a?b:m`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        ${t.points||t.dormer?b:m`<div class="fp3d-form" title=${this.t("roof_turn_hint")}>
              ${this.num(`${this.t("roof_turn")} (\xB0)`,t.rotation??0,p=>this.turnRoofSection(Math.max(-180,Math.min(180,M(p)))),1)}
              ${e&&!this.roofFixed(t)?m`<div class="fp3d-actions">
                    <button class="fp3d-btn" @click=${()=>this.turnRoofSection(Wm(t.rotation??0,-15))}>↺ 15°</button>
                    <button class="fp3d-btn" @click=${()=>this.turnRoofSection(Wm(t.rotation??0,15))}>↻ 15°</button>
                  </div>`:b}
            </div>`}
        ${t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip"?m`<div class="fp3d-form" title=${this.t("roof_end_hint")}>
              ${[0,1].map(p=>{let f=this.t(t.axis==="x"?p===0?"roof_side_left":"roof_side_right":p===0?"roof_side_top":"roof_side_bottom"),_=(p===0?t.end_u0:t.end_u1)??"";return m`<label class="fp3d-field"
                  >${this.t("roof_end")} ${f}
                  <select
                    ?disabled=${!e}
                    @change=${g=>{let y=g.target.value||null;n(p===0?{end_u0:y}:{end_u1:y})}}
                  >
                    <option value="" ?selected=${_===""}>${this.t("roof_end_auto")}</option>
                    ${jc.map(g=>m`<option value=${g} ?selected=${_===g}>${this.t(g==="gable"?"roof_end_gable":`roof_shape_${g}`)}</option>`)}
                  </select></label
                >`})}
            </div>`:b}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${p=>n({open:p.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?d(this.t("roof_height"),t.eave_a,p=>n({eave_a:p,eave_b:p})):m`${d(`${this.t("roof_eave")} ${l?"":o}`,t.eave_a,p=>n({eave_a:p}))}
              ${l?b:d(`${this.t("roof_eave")} ${r}`,t.eave_b,p=>n({eave_b:p}))}
              ${u(`${this.t("roof_pitch_short")} ${l?"":o}`,t.pitch_a,p=>n({pitch_a:Math.min(75,p)}))}
              ${l?b:u(`${this.t("roof_pitch_short")} ${r}`,t.pitch_b,p=>n({pitch_b:Math.min(75,p)}))}`}
          ${d(this.t("roof_base"),t.base,p=>n({base:p}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${p=>{let f=this._doc.floors.find(y=>y.id===p.target.value);if(!f)return;let _=M(f.elevation+f.height),g=_-t.base;n({base:_,eave_a:M(t.eave_a+g),eave_b:M(t.eave_b+g)})}}
            >
              ${[...this._doc.floors].filter(p=>p.rooms.length).sort((p,f)=>f.elevation-p.elevation).map(p=>m`<option value=${p.id} ?selected=${Vp(this._doc,t)?.id===p.id}>${p.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,p=>n({overhang:Math.min(2,p)}),.05,0)}
        </div>
        ${a&&e?m`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?m`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:b}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:b}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(os(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?m`<div class="fp3d-actions">
              ${a?b:m`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!t.dormer&&!t.open?m`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${o}</button>
                  ${l?b:m`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${r}</button>`}`:b}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:b}
      </section>`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(i=>i.id===n);case"opening":return t.openings.find(i=>i.id===n);case"furniture":return t.furniture.find(i=>i.id===n);case"device":return t.placements.find(i=>i.entity_id===n);case"wall":return(t.walls??[]).find(i=>i.id===n);case"outdoor":return t.outdoor.find(i=>i.id===n)}}isFixedItem(t,e){return sr(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isEditor||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((i,o)=>{let r=this.fixItem(o,t,e);r&&(r.locked=n)})}toggleLockPlan(){this.isEditor&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}async confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||await this.ask(this.t("fixed_delete_confirm"))}ask(t,e=this.t("delete"),n=!0){return _s(t,{ok:e,cancel:this.t("cancel"),danger:n})}tell(t){return af(t,{ok:this.t("ask_ok")})}onContextMenu(t){t.preventDefault(),!(this.rightPress||performance.now()-this.rightUp<600)&&(this._tool!=="select"&&this._tool!=="furniture"||(this.drag=null,this.openContext(t.target,this.localPoint(t))))}pickItem(t,e,n){return!this.floor||t.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]")?null:this.itemHits(t,e,n)[0]??t.closest("[data-furniture]")?.getAttribute("data-furniture")??null}itemHits(t,e,n){if(!this.floor||t.closest("[data-vertex], [data-mid], [data-wall-end], [data-out-box], [data-out-vertex]"))return[];let i=this._hiddenItems;return zu(this.floor.furniture,e,this._view.scale,qr(n),i.length?o=>i.includes(o.id):void 0)}firmItemAt(t,e){let n=this._hiddenItems;return(this.floor?.furniture??[]).some(i=>!n.includes(i.id)&&Hu(i,t,this._view.scale,qr(e)))}toggleItemHidden(t){let e=this._hiddenItems;this._hiddenItems=e.includes(t)?e.filter(n=>n!==t):[...e,t],this._hiddenItems.includes(t)&&this.selection().includes(t)&&this.selectItem("room",this._roomId)}tabItems(){let t=this.floor,e=this.furnitureItem;if(!t||!e)return[];let n=t.furniture.filter(o=>!this._hiddenItems.includes(o.id)),i=Xo(t.rooms,n);for(let o of i.values())if(o.some(r=>r.id===e.id))return o.map(r=>r.id);return n.map(o=>o.id)}selectFromList(t){let e=this.floor?.furniture.find(n=>n.id===t);e&&(this.selectItem("furniture",t),this._single=!!e.group,this.showPoint(e.x,e.z))}async deleteFromList(t){this.floor?.furniture.some(e=>e.id===t)&&(this.selectItem("furniture",t),this._single=!0,await this.deleteFurniture())}openContext(t,e,n="mouse"){if(!this.isEditor||!this.floor)return;let i=this.toWorld(...e),o=_=>t.closest(`[${_}]`)?.getAttribute(_)??null,r=null,a=o("data-device"),l=o("data-opening"),c=this.pickItem(t,i,n),d=o("data-free-wall"),u=o("data-outdoor")?this.outdoorAt(i)??o("data-outdoor"):null,h=o("data-room")??this.roomAt(i);if(a?r=["device",a]:l?r=["opening",l]:c?r=["furniture",c]:d?r=["wall",d]:u&&!h?r=["outdoor",u]:h&&(r=["room",h]),!r){this._ctx=null;return}let[p,f]=r;this.selectItem(p,f),(p==="opening"||p==="furniture")&&(this._roomId=this._roomId??h),this._ctx={x:e[0],y:e[1],kind:p,id:f}}async deleteItem(t,e){if(t==="device"){if(!await this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return b;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(t.x,(n?.clientWidth??800)-190)),o=Math.max(4,Math.min(t.y,(n?.clientHeight??600)-190)),r=a=>()=>{this._ctx=null,a()};return m`<div class="fp3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${r(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${r(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?m`<button @click=${r(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:b}
      ${t.kind==="room"&&Sn?m`<button title=${Vt(this.t("paste_items"),["Ctrl+V"])} @click=${r(()=>this.pasteClipboard())}>⎘ ${this.t("paste_items_n",{n:Sn.items.length})}</button>`:b}
      ${t.kind==="furniture"?m`<button title=${Vt(this.t("duplicate"),["Ctrl+D"])} @click=${r(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button title=${Vt(this.t("copy_items"),["Ctrl+C"])} @click=${r(()=>this.copySelection())}>⎘ ${this.t("copy_items")}</button>
            <button ?disabled=${e} title=${Vt(this.t("ctx_rotate"),["R"])} @click=${r(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${r(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${r(()=>{let a=this.floor?.furniture.find(l=>l.id===t.id);a&&this.openWallViewFor(a)})}>▦ ${this.t("wall_view")}</button>`:b}
      <button class="fp3d-ctx-danger" @click=${r(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isEditor)return b;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?m`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:b;let n=this.isFixedItem(t,e);return m`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){if(this._notice=null,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._multi=[],this._single=!1,this._deviceId=t==="device"?e:null,t==="device"&&e){let n=this.floor?.placements.find(i=>i.entity_id===e);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,o){let r=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-r[0],a[1]-r[1])||1,c=((n[0]-r[0])*(a[0]-r[0])+(n[1]-r[1])*(a[1]-r[1]))/l,d=o?.01:this._doc.settings.grid;return this.clampOffset(t,e,i,Math.round(c/d)*d)}clampOffset(t,e,n,i){let o=t.points[e],r=t.points[(e+1)%t.points.length],a=Math.hypot(r[0]-o[0],r[1]-o[1])||1,l=this.floor,c=this._doc.settings,[d,u]=l?$u(Ct(l.rooms,{exterior:c.wall_exterior,interior:c.wall_interior},l.walls??[]).walls,t,e):[0,0],h=Math.min(n,a+d+u)/2;return M(Math.min(a,a+u-h,Math.max(0,h-d,i)))}pressOpening(t,e){this.selectItem("opening",t),this.drag=this.isEditor?{kind:"opening",id:t,startScreen:e,base:this._doc,moved:!1}:{kind:"pan",last:e}}planOpening(t,e){let n=this.floor;if(!n||!this.isEditor)return null;let i=null;for(let w of n.walls??[]){let k=_e({room_id:"",edge:0,wall:w.id},n.rooms,n.walls??[]);if(!k)continue;let[S,$]=this.toScreen(w.a),[x,R]=this.toScreen(w.b),L=(x-S)**2+(R-$)**2||1,C=Math.min(1,Math.max(0,((e[0]-S)*(x-S)+(e[1]-$)*(R-$))/L)),E=Math.hypot(e[0]-S-(x-S)*C,e[1]-$-(R-$)*C),O=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],I=n.rooms.find(T=>T.points.length>=3&&K(O,T.points));E<Ds*2.2&&(!i||E-1<i.d)&&(i={room:k.room,edge:0,d:E-1,wall:w.id,roomId:I?.id??w.id})}for(let w of n.rooms)for(let k=0;k<w.points.length;k++){let[S,$]=this.toScreen(w.points[k]),[x,R]=this.toScreen(w.points[(k+1)%w.points.length]),L=(x-S)**2+(R-$)**2||1,C=Math.min(1,Math.max(0,((e[0]-S)*(x-S)+(e[1]-$)*(R-$))/L)),E=Math.hypot(e[0]-S-(x-S)*C,e[1]-$-(R-$)*C),O=E-(w.id===this._roomId?.5:0);E<Ds*2.2&&(!i||O<i.d)&&(i={room:w,edge:k,d:O})}if(!i)return null;let{room:o,edge:r,wall:a}=i,l=o.points[r],c=o.points[(r+1)%o.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),u=Lo[t],h=u.type,p=M(Math.min(u.width,Math.max(.3,d-.1))),f=this.toWorld(...e),_=this.offsetOnEdge(o,r,f,p,!1),g=[Jt(o,r,_-p/2),Jt(o,r,_+p/2)],y=Eh(f,g,n.openings,n.rooms,n.walls??[]);return y||{add:{id:U("opening"),room_id:i.roomId??o.id,edge:r,...a?{wall:a}:{},offset:_,width:p,type:h,sill:u.sill,height:u.height,..."style"in u&&t!=="door"?{style:u.style}:{},hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null}}}hoverOpening(t,e){let n=t?.closest?.("[data-opening]")?.getAttribute("data-opening"),i=n?this.floor?.openings.find(a=>a.id===n):void 0,o=i?{select:i}:this.planOpening(this._openingPreset,e),r=o?this.openingHint(o):null;r!==this._openingHover&&(this._openingHover=r)}placeOpening(t,e){let n=this.planOpening(t,e);if(!n)return!1;if("select"in n)this.pressOpening(n.select.id,e);else if("blocked"in n)this._openingNote=this.openingHint(n);else{let i=n.add;this.change((o,r)=>r.openings.push(i)),this.selectItem("opening",i.id)}return!0}hintText(){let t=this.hintKeyNow();return t==="hint_place"&&this._placing?this.t("hint_place",{name:Ft(this.hass,this._placing.type)}):t==="hint_opening"?this._openingNote??this._openingHover??this.t("hint_opening",{kind:this.t(`preset_${this._openingPreset}`)}):this.t(t)}hintKeyNow(){let t=this.floor;return Yf({tool:this._tool,hasFloor:!!t,rooms:t?.rooms.length??0,placing:!!this._placing,selected:this._deviceId?"device":this._furnitureId?"furniture":this._openingId?"opening":this._roomId?"room":null,wallPick:this._wallPick,fixedHint:this._fixedHint,outdoorFree:!!this._outdoorFree,jointPlace:!!this._jointPlace,pipeMode:!!this._pipeMode,poolArea:!!this.poolArea,pipeDraft:!!this._pipeDraft,poolTech:Xn("pool")})}openingHint(t){let e=n=>this.t(`preset_${vi(n)}`);return"add"in t?this.t("hint_opening_add",{kind:e(t.add)}):"select"in t?this.t("hint_opening_select",{kind:e(t.select)}):this.t("opening_overlap",{kind:e(t.blocked)})}setOpeningPreset(t,e){let n=Lo[e];this._openingPreset=e;let i=vi(t)===e,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,i)=>ke(i.openings.find(o=>o.id===e),t))}async deleteOpening(){let t=this._openingId;!t||!this.isEditor||!await this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}glowScaleField(t,e){return m`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isEditor}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(i-1)<.001?null:i)}}
    /></label>`}typeLabelMemo=new WeakMap;typeLabels(t){let e=this.hass?.language??"en",n=this.typeLabelMemo.get(t);if(n&&n.lang===e)return n.labels;let i=yf(t.items,e);return this.typeLabelMemo.set(t,{lang:e,labels:i}),i}typeChoices(t){let e=new Set(Object.values(Fo).flat());return(vt("fridge_smart")||vt("household"))&&e.add("fridge_smart"),Io.filter(n=>e.has(n)||n===t)}furnitureFor(t){let e=et(t),n=this.hass?.language??"en",i=[...Io.map(a=>({type:a,label:this.t(`furn_${a}`)})),...(this.packs??[]).flatMap(a=>a.items.map(l=>({type:Dt(a.id,l.id),label:`${jt(l,n)} \xB7 ${fe(a,n)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,r=a=>e==="light"?Lt(a):e==="climate"?a==="radiator"||a==="ac_unit":t.startsWith("vacuum.")?oe(a):e==="media"?Vo(a)||Te(a)&&o.test(a):Te(a)&&!Lt(a);return i.filter(a=>r(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}vehicleToSpot(t){if(!this.isEditor)return;let[e,n,i]=$t("parking"),o={id:U("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,M(t.w+.5)),d:Math.max(n,M(t.d+.4)),h:i,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((r,a)=>{a.furniture=a.furniture.filter(l=>l.id!==t.id),a.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(t,e){if(!this.isEditor)return;if(t.entity_id.startsWith("camera.")){this.change((a,l)=>eo(l,t.entity_id,e));return}let[n,i,o]=$t(e),r={id:U("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:i,h:o,variant:null,entity:t.entity_id,name:t.name??null,...t.locked?{locked:!0}:{},...t.actions?{actions:t.actions}:{}};this.change((a,l)=>{l.placements=l.placements.filter(c=>c.entity_id!==t.entity_id),l.furniture.push(r)}),this._deviceId=null,this.selectItem("furniture",r.id)}furnitureToDevice(t){let e=t.entity;if(!this.isEditor||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{},...t.actions?{actions:t.actions}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(r=>r.id!==t.id),o.placements.some(r=>r.entity_id===e)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderCameraModel(t){let e=this.hass?.language??"en",n=this.packs??[],i=n.flatMap(a=>a.items.filter(Fs).map(l=>({type:Dt(a.id,l.id),label:jt(l,e)}))).sort((a,l)=>a.label.localeCompare(l.label));if(!i.length)return b;let o=this.floor?.furniture.find(a=>a.look_of===t.entity_id)?.type??"",r=this.hass?As(this.hass,t.entity_id,n):null;return m`<label class="fp3d-field fp3d-wide" title=${this.t("camera_model_hint")}
      >${this.t("camera_model")}
      <select
        ?disabled=${!this.isEditor}
        @change=${a=>{let l=a.target.value;this.change((c,d)=>eo(d,t.entity_id,l||null))}}
      >
        <option value="" ?selected=${!o}>${this.t("camera_look_builtin")}</option>
        ${o&&!i.some(a=>a.type===o)?m`<option value=${o} selected>${Ft(this.hass,o)}</option>`:b}
        ${i.map(a=>m`<option value=${a.type} ?selected=${a.type===o}>${a.type===r?this.t("camera_model_found",{name:a.label}):a.label}</option>`)}
      </select></label
    >`}renderAsFurniture(t){if(!this.isEditor)return b;let e=this.furnitureFor(t.entity_id);if(!e.length)return b;let n=t.entity_id.startsWith("camera.")?this.floor?.furniture.find(i=>i.look_of===t.entity_id):void 0;return m`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${i=>{let o=i.target.value;o==="__builtin"?this.change((r,a)=>a.furniture=a.furniture.filter(l=>l.look_of!==t.entity_id)):o&&this.deviceToFurniture(t,o)}}
      >
        <option value="" selected>${n?Ft(this.hass,n.type):this.t("as_furniture_pick")}</option>
        ${n?m`<option value="__builtin">${this.t("camera_look_builtin")}</option>`:b}
        ${e.map(i=>m`<option value=${i.type}>${i.label}</option>`)}
      </select></label
    >`}addFurniture(t,e=!1){!this.hass||!this.isEditor||(this._placing={type:t,mirror:e},this._placeAt=null,en(this.hass,[t]))}placeArmed(t,e=!1){let n=this._placing;!n||!this.hass||(e||(this._placing=null,this._placeAt=null),en(this.hass,[n.type]).then(()=>this.placeFurniture(n.type,n.mirror,t)))}placeArmedInMiddle(){this.placeArmed(null)}cancelPlacing(){this._placing=null,this._placeAt=null}placePoint(t,e){let n=this._doc.settings.grid;return e||!n?[M(t[0]),M(t[1])]:[M(Math.round(t[0]/n)*n),M(Math.round(t[1]/n)*n)]}placeFurniture(t,e,n=null){let i=this.floor;if(!i||!this.isEditor)return;n&&(this._roomId=this.roomAt(n)??this._roomId);let[o,r,a]=$t(t),l=this._doc.floors.filter(_=>_.elevation>i.elevation).sort((_,g)=>_.elevation-g.elevation)[0],c=fr.has(t)?M(l?l.elevation-i.elevation:i.height+.25):a,d=this.room,[u,h]=n??(d?ge(d.points):this.toWorld(this._size.w/2,this._size.h/2)),p=0;if(t==="parking"&&d){let _=i.openings.find(w=>w.room_id===d.id&&w.type==="garage"),g=_?d.points[_.edge]:null,y=_?d.points[(_.edge+1)%d.points.length]:null,v=Mt(d.points);p=(g&&y?Math.abs(y[1]-g[1])>Math.abs(y[0]-g[0]):v.x1-v.x0>v.z1-v.z0)?90:0}let f={id:U("furniture"),type:t,x:M(u),z:M(h),rotation:p,w:o,d:r,h:c,variant:null,...e?{mirror:!0}:{}};this.change((_,g)=>g.furniture.push(f)),this.selectItem("furniture",f.id),this.showPoint(f.x,f.z)}snapToWall(t){return this.floor?Oi(this.floor,t,this._doc.settings.wall_interior):null}renderStairOptions(t){let e=this.isEditor,n=On(t),i=o=>this.updateFurniture(ud(t,o));return m`<div class="fp3d-form">
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${!!t.stair_open} ?disabled=${!e} @change=${o=>i({stair_open:o.target.checked})} />
        ${this.t("stair_open")}</label
      >
      <label class="fp3d-field fp3d-wide" title=${this.t("stair_turn_hint")}
        >${this.t("stair_turn")}
        <select ?disabled=${!e||!n.canTurn} @change=${o=>i({stair_turn:o.target.value||null})}>
          ${["","left","right"].map(o=>m`<option value=${o} ?selected=${(t.stair_turn??"")===o}>${this.t(`stair_turn_${o||"none"}`)}</option>`)}
        </select></label
      >
      <span title=${this.t("stair_landing_hint")}>${this.num(this.t("stair_landing"),t.stair_landing??0,o=>i({stair_landing:o}),1,0)}</span>
      <span title=${this.t("stair_top_hint")}>${this.len(this.t("stair_top"),t.stair_top??0,o=>i({stair_top:o}),.05,0)}</span>
      ${this.len(this.t("stair_start"),t.mount_y??0,o=>this.updateFurniture({mount_y:Math.round(Math.min(no,Math.max(0,o))*1e3)/1e3||null}),.05,0)}
    </div>`}updateFurniture(t){let e=this._furnitureId;!e||!this.floor?.furniture.some(n=>n.id===e)||this.change((n,i)=>{let o=i.furniture.find(r=>r.id===e);o&&Object.assign(o,t)})}retypeFurniture(t){let e=this.furnitureItem;e&&this.updateFurniture(wf(e,t))}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isEditor||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;if(!e||!this.isEditor)return;if(this.selection().length>1)return this.rotateSelection(t);this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}async deleteFurniture(){let t=this._furnitureId;if(!t||!this.isEditor)return;let e=this.selection();if(e.length>1){let n=e.some(o=>this.isFixedItem("furniture",o));if(!await this.ask(this.t(n?"block_delete_fixed":"block_delete",{n:e.length})))return;let i=new Set(e);this.change((o,r)=>r.furniture=r.furniture.filter(a=>!i.has(a.id))),this.selectItem("room",this._roomId);return}await this.confirmFixedDelete("furniture",t)&&(this.change((n,i)=>i.furniture=i.furniture.filter(o=>o.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isEditor)return;let e=this.selection();if(e.length>1){let i=this.floor.furniture.filter(a=>e.includes(a.id)),o=new Map,r=i.map(a=>({...structuredClone(a),id:U("furniture"),x:M(a.x+.3),z:M(a.z+.3),group:a.group?o.get(a.group)??o.set(a.group,U("block")).get(a.group):null,locked:null}));this.change((a,l)=>l.furniture.push(...r)),this.setMulti(r.map(a=>a.id));return}let n={...structuredClone(t),id:U("furniture"),x:M(t.x+.3),z:M(t.z+.3),group:this._single?t.group:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}moveSelectionToFloor(t){let e=this._floorId,n=this._furnitureId?this.selection():[];if(!e||t===e||!n.length||!this.isEditor)return;if(n.some(c=>this.isFixedItem("furniture",c))){this._fixedHint=!0;return}let[i,o,r]=[this._furnitureId,this._multi.length>1,this._single],a=[];if(this.change(c=>a=kf(c,e,n,t)),!a.length)return;this._floorId=t,this._vertex=null,this._draft=[],o?this.setMulti(a):this.selectItem("furniture",i),this._single=r;let l=this.furnitureItem;this._roomId=l?this.roomAt([l.x,l.z]):null}copySelection(){let t=this.floor,e=t&&this._furnitureId?$f(t,this.selection()):null;return e?(Sn=e,this.requestUpdate(),!0):!1}pasteClipboard(){let t=this.floor;if(!Sn||!t||!this.isEditor)return!1;let e=Mf(Sn,t.id,U);this.change((i,o)=>o.furniture.push(...e)),this.setMulti(e.map(i=>i.id));let n=this.furnitureItem;return n&&(this._roomId=this.roomAt([n.x,n.z])??this._roomId),!0}selectAll(){let t=this.floor?.furniture??[];return t.length?(this.setMulti(t.map(e=>e.id)),!0):!1}renderClipButtons(){return m`<button class="fp3d-btn" title=${Vt(this.t("duplicate"),["Ctrl+D"])} @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
      <button class="fp3d-btn" title=${Vt(this.t("help_key_copy"),["Ctrl+C"])} @click=${()=>this.copySelection()}>${this.t("copy_items")}</button>
      ${this.renderPasteButton()}`}renderPasteButton(){return!Sn||!this.isEditor?b:m`<button class="fp3d-btn" title=${Vt(this.t("help_key_paste"),["Ctrl+V"])} @click=${()=>this.pasteClipboard()}>${this.t("paste_items_n",{n:Sn.items.length})}</button>`}selection(){if(this._multi.length)return this._multi;let t=this.furnitureItem;return t?t.group&&!this._single?(this.floor?.furniture??[]).filter(e=>e.group===t.group).map(e=>e.id):[t.id]:[]}withGroups(t){let e=new Set((this.floor?.furniture??[]).filter(n=>t.includes(n.id)&&n.group).map(n=>n.group));return[...new Set([...t,...(this.floor?.furniture??[]).filter(n=>n.group&&e.has(n.group)).map(n=>n.id)])]}setMulti(t){if(!t.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",t[0]);let e=this.selection();t.length>1&&!(t.length===e.length&&t.every(n=>e.includes(n)))&&(this._multi=t)}toggleMulti(t){let e=this._furnitureId?this.selection():[],n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.setMulti(i)}selectionCentre(t){let e=(this.floor?.furniture??[]).filter(o=>t.includes(o.id)),n=e.map(o=>o.x),i=e.map(o=>o.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(t){let e=this.selection();if(e.some(c=>this.isFixedItem("furniture",c))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(e),o=t*Math.PI/180,r=Math.round(Math.cos(o)*1e6)/1e6,a=Math.round(Math.sin(o)*1e6)/1e6,l=new Set(e);this.change((c,d)=>{for(let u of d.furniture){if(!l.has(u.id))continue;let h=u.x-n,p=u.z-i;Object.assign(u,{x:M(n+h*r-p*a),z:M(i+h*a+p*r),rotation:((u.rotation+t)%360+360)%360})}})}groupSelection(){let t=new Set(this.selection());if(t.size<2)return;let e=U("block");this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=e)}),this._multi=[],this._single=!1}ungroupSelection(){let t=this.selection(),e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)}),t.length>1&&(this._multi=t)}lockSelection(t){let e=new Set(this.selection());this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.locked=t||null)})}placeDevices(t,e,n){let i=e??this.room;if(!i||!t.length||!this.isEditor)return;let o=new Set(t);this.change((r,a)=>{let l=n&&r.floors.find(d=>d.id===n)||a;for(let d of r.floors)d.placements=d.placements.filter(u=>!o.has(u.entity_id)),d.furniture=d.furniture.filter(u=>!(Lt(u.type)&&u.entity&&o.has(u.entity)));let c=[...l.placements.map(d=>[d.x,d.z]),...l.furniture.filter(d=>Lt(d.type)).map(d=>[d.x,d.z])];for(let d of Dd(i,t,c)){if(!d.entity_id.startsWith("light.")||i.outdoor){l.placements.push(d);let f=d.entity_id.startsWith("camera.")&&this.hass?As(this.hass,d.entity_id,this.packs??[]):null;f&&eo(l,d.entity_id,f);continue}let[u,h,p]=me.lamp_ceiling;l.furniture.push({id:U("furniture"),type:"lamp_ceiling",x:d.x,z:d.z,rotation:0,w:u,d:h,h:p,variant:null,entity:d.entity_id,power:null})}})}onPlanDragOver=t=>{this.isEditor&&this.floor&&t.dataTransfer?.types.includes(kl)&&(t.preventDefault(),t.dataTransfer.dropEffect="copy")};onPlanDrop=t=>{let e=t.dataTransfer?.getData(kl),n=this.renderRoot.querySelector("svg.fp3d-plan");if(!e||!n||!this.isEditor||!this.floor)return;t.preventDefault();let i=n.getBoundingClientRect(),[o,r]=this.toWorld(t.clientX-i.left,t.clientY-i.top),a=this.roomAt([o,r]),l=this.floor.rooms.find(c=>c.id===a);this.change((c,d)=>{for(let p of c.floors)p.placements=p.placements.filter(f=>f.entity_id!==e),p.furniture=p.furniture.filter(f=>!(Lt(f.type)&&f.entity===e));let u={x:M(o),z:M(r)};if(e.startsWith("light.")&&l&&!l.outdoor){let[p,f,_]=me.lamp_ceiling;d.furniture.push({id:U("furniture"),type:"lamp_ceiling",...u,rotation:0,w:p,d:f,h:_,variant:null,entity:e,power:null});return}d.placements.push({entity_id:e,...u,y:null,mount:null});let h=e.startsWith("camera.")&&this.hass?As(this.hass,e,this.packs??[]):null;h&&eo(d,e,h)})};acceptLink(t,e){this.change(n=>{let i=n.floors.find(o=>o.id===e.floorId)?.furniture.find(o=>o.id===e.furnitureId);i&&(i.entity=t)})}setUnplacedHidden(t,e){this.change(n=>{n.settings.unplaced_hidden=Om(n.settings,t,e)})}renderUnplaced(){let t=this.hass;if(!t||!this.isEditor||!t.areas)return b;let e=this._doc,n=this._unplacedOpen,i=(e.settings.unplaced_hidden??[]).length,o=a=>m`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Jn(et(a)??"sensor")} /></svg>`,r=()=>{if(this._unplacedHiddenView){let g=Hm(t,e);return m`<button class="fp3d-link" @click=${()=>this._unplacedHiddenView=!1}>← ${this.t("unplaced_back")}</button>
          ${g.length?m`<div class="fp3d-room-list">
                ${g.map(y=>m`<div class="fp3d-row fp3d-dev-row">
                    <span class="fp3d-dev-name">${o(y.id)}<span>${st(t,y.id)}${y.area?m`<small class="fp3d-muted"> · ${y.area}</small>`:b}</span></span>
                    <button class="fp3d-link" @click=${()=>this.setUnplacedHidden(y.id,!1)}>${this.t("unplaced_unhide")}</button>
                  </div>`)}
              </div>`:m`<p class="fp3d-sub">${this.t("unplaced_hidden_none")}</p>`}`}let a=pn(t,e.floors),l=[...a.values()].flatMap(g=>[g.entity,g.power]).filter(g=>!!g),c=this._floorId,d=Tm(t,e,{linked:l}).sort((g,y)=>+(y.floorId===c)-+(g.floorId===c)),u=zm(t,e,d,a),h=g=>{let y=e.floors.find(v=>v.id===g.floorId)?.furniture.find(v=>v.id===g.furnitureId);return y?y.name||Ft(t,y.type):""},p=80,f=0,_=d.reduce((g,y)=>g+y.ids.length,0);return m`<p class="fp3d-sub">${this.t("unplaced_hint")}</p>
        ${d.length?m`<div class="fp3d-room-list">
                ${d.map(g=>{let y=g.ids.slice(0,Math.max(0,p-f));if(f+=y.length,!y.length)return b;let v=e.floors.find(k=>k.id===g.floorId),w=v?.rooms.find(k=>k.id===g.roomId);return m`<div class="fp3d-dev-area">${g.name}${w?b:m`<small class="fp3d-muted"> · ${this.t("unplaced_no_room")}</small>`}</div>
                    ${y.map(k=>{let S=u.get(k);return m`<div
                        class="fp3d-row fp3d-dev-row fp3d-unplaced-row"
                        draggable="true"
                        title=${this.t("unplaced_drag")}
                        @dragstart=${$=>{$.dataTransfer?.setData(kl,k),$.dataTransfer&&($.dataTransfer.effectAllowed="copy")}}
                      >
                        <span class="fp3d-dev-name">${o(k)}<span>${st(t,k,g.name)}</span></span>
                        ${S?m`<button class="fp3d-link fp3d-suggest" @click=${()=>this.acceptLink(k,S)}>${this.t("unplaced_link",{name:h(S)})}</button>`:b}
                        ${w&&v?m`<button class="fp3d-link" @click=${()=>this.placeDevices([k],w,v.id)}>${this.t("devices_place")}</button>`:b}
                        <button class="fp3d-pin" title=${this.t("unplaced_hide")} aria-label=${this.t("unplaced_hide")} @click=${()=>this.setUnplacedHidden(k,!0)}>🙈</button>
                      </div>`})}`})}
              </div>
              ${_>f?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:_-f})}</p>`:b}`:m`<p class="fp3d-sub">${this.t("unplaced_none")}</p>`}
        ${i?m`<button class="fp3d-link" @click=${()=>this._unplacedHiddenView=!0}>${this.t("unplaced_hidden",{n:i})}</button>`:b}`};return m`<section>
      <details class="fp3d-points fp3d-unplaced" ?open=${n} @toggle=${a=>this._unplacedOpen=a.target.open}>
        <summary>${this.t("unplaced")}</summary>
        ${n?r():b}
      </details>
    </section>`}get device(){return this._deviceId?this.floor?.placements.find(t=>t.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>ke(i.placements.find(o=>o.entity_id===e),t))}centreDevice(){let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=this.floor?.rooms.find(r=>r.id===e);if(!t||!n)return;let[i,o]=ge(n.points);this.updateDevice({x:M(i),z:M(o)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(u=>et(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&K([u.x,u.z],t.points));if(n.length<2)return;let i=Mt(t.points),o=i.x1-i.x0,r=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,r)))),l=Math.ceil(n.length/a),c=n.map((u,h)=>{let p=Math.floor(h/a),f=p===l-1?n.length-a*(l-1):a,_=h-p*a;return[M(i.x0+o/f*(_+.5)),M(i.z0+r/l*(p+.5))]}),d=n.map(u=>u.entity_id);this.change((u,h)=>{d.forEach((p,f)=>ke(h.placements.find(_=>_.entity_id===p),{x:c[f][0],z:c[f][1]}))})}straightenFloor(){let t=this.floor;if(!t||!this.isEditor)return;let{rooms:e,fixed:n}=Tu(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,o)=>o.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isEditor)return;let{rooms:e,gaps:n}=Fu(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Au(n);this.change((o,r)=>{r.rooms=e,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:Ut(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(Lt(i.type)&&i.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n,o=this._doc;this.change((r,a)=>{let l=a.rooms.find(c=>c.id===e.id);l.points.splice(t,1),l.wall_heights&&l.wall_heights.splice(t,1),l.wall_thickness&&l.wall_thickness.splice(t,1),l.wall_slopes&&(l.wall_slopes.splice(t,1),l.wall_slopes[(t-1+l.points.length)%l.points.length]=null,l.wall_slopes.every(c=>!c)&&(l.wall_slopes=void 0)),a.openings=a.openings.filter(c=>c.room_id!==e.id||c.wall||c.edge!==t&&c.edge!==i).map(c=>c.room_id===e.id&&!c.wall&&c.edge>t?{...c,edge:c.edge-1}:c)}),this.noteResize(e.id,o),this._vertex=null}shiftFloor(t,e){if(!this.isEditor||!t&&!e)return;let n=o=>[M(o[0]+t),M(o[1]+e)],i=o=>{for(let r of o.rooms)r.points=r.points.map(n);for(let r of o.furniture)r.x=M(r.x+t),r.z=M(r.z+e);for(let r of o.placements)r.x=M(r.x+t),r.z=M(r.z+e);for(let r of o.outdoor)r.points=r.points.map(n);for(let r of o.walls??[])r.a=n(r.a),r.b=n(r.b);o.background&&(o.background.x=M(o.background.x+t),o.background.z=M(o.background.z+e))};this._shiftAll?this.change(o=>{for(let r of o.floors)i(r);this.moveHouseExtras(o,n)}):this.change((o,r)=>i(r)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(t,e){for(let i of t.settings.roof.sections??[]){let o=[e([i.x0,i.z0]),e([i.x1,i.z0]),e([i.x1,i.z1]),e([i.x0,i.z1])];i.x0=Math.min(...o.map(r=>r[0])),i.x1=Math.max(...o.map(r=>r[0])),i.z0=Math.min(...o.map(r=>r[1])),i.z1=Math.max(...o.map(r=>r[1])),i.points&&(i.points=i.points.map(e)),i.pivot&&(i.pivot=e(i.pivot))}for(let i of t.settings.roof.cables??[])i.points=i.points.map(e);t.energy.meter&&([t.energy.meter.x,t.energy.meter.z]=e([t.energy.meter.x,t.energy.meter.z]));let n=t.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=e([n.x,n.z]))}turnFloor(){let t=this.floor;if(!t||!this.isEditor)return;let e=(this._shiftAll?this._doc.floors:[t]).flatMap(c=>c.rooms.flatMap(d=>d.points));if(!e.length)return;let n=e.map(c=>c[0]),i=e.map(c=>c[1]),o=(Math.min(...n)+Math.max(...n))/2,r=(Math.min(...i)+Math.max(...i))/2,a=c=>[M(o-(c[1]-r)),M(r+(c[0]-o))],l=c=>{for(let d of c.rooms)d.points=d.points.map(a);for(let d of c.furniture)[d.x,d.z]=a([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=a([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(a);for(let d of c.walls??[])d.a=a(d.a),d.b=a(d.b);c.background&&([c.background.x,c.background.z]=a([c.background.x,c.background.z]),c.background.rotation=((c.background.rotation??0)+90)%360)};this._shiftAll?this.change(c=>{for(let d of c.floors)l(d);this.moveHouseExtras(c,a)}):this.change((c,d)=>l(d))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>ke(i.rooms.find(o=>o.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(o=>o.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=Mt(n.points),{x0:o,z0:r,x1:a,z1:l}=i;t==="x"&&([o,a]=[e,e+(a-o)]),t==="z"&&([r,l]=[e,e+(l-r)]),t==="w"&&e>.05&&(a=o+e),t==="d"&&e>.05&&(l=r+e);let c=[[M(o),M(r)],[M(a),M(r)],[M(a),M(l)],[M(o),M(l)]],d=this._doc,u=this._floorId,h=structuredClone(d),p=h.floors.find(_=>_.id===u)?.rooms.find(_=>_.id===n.id);p&&(p.points=c);let f=null;this.change((_,g)=>{f=Oh(g,n.id,c),f||(g.rooms.find(y=>y.id===n.id).points=c)}),this.noteResize(n.id,d,f,h)}resizeNote(){let t=this._resize;return t&&t.doc===this._doc?t:null}noteResize(t,e,n=null,i=null){let o=this._resize?.doc===e?this._resize:null,r=this.floor,a=r?.rooms.find(c=>c.id===t),l=o?.roomId===t?o.before:e.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===t)?.points;this._resize=r&&a&&l?{roomId:t,before:l,doc:this._doc,base:e,carried:n,outline:i,stranded:zh(r,l,a.points)}:null}outlineOnly(){let t=this.resizeNote();t?.outline&&(this.setDoc(structuredClone(t.outline),null),this.noteResize(t.roomId,t.base))}selectStranded(){let t=this.resizeNote();if(!t)return;let e=t.stranded.furniture.filter(n=>this.floor?.furniture.some(i=>i.id===n));e.length?this.setMulti(e):t.stranded.devices.length&&this.selectItem("device",t.stranded.devices[0])}renderResizeNote(t){let e=this.resizeNote();if(!e||e.roomId!==t.id||!this.isEditor)return b;let n=e.carried,i=e.outline&&n?n.furniture+n.devices+n.walls:0,o=e.stranded.furniture.length+e.stranded.devices.length;return!i&&!o?b:m`<div class="fp3d-resize-note" role="status">
      ${i&&n?m`<p class="fp3d-sub">${this.t("resize_carried",{n:n.furniture+n.devices,w:n.walls})}</p>
            <div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("resize_outline_only_hint")} @click=${()=>this.outlineOnly()}>${this.t("resize_outline_only")}</button>
              <button class="fp3d-btn" @click=${()=>this.undo()}>${this.t("undo")}</button>
            </div>`:b}
      ${o?m`<p class="fp3d-sub">${o===1?this.t("resize_outside_one"):this.t("resize_outside",{n:o})}</p>
            <div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>this.selectStranded()}>${this.t("resize_select")}</button></div>`:b}
    </div>`}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(a=>[...a]);o[t][e]=M(n);let r=this._doc;this.updateRoom({points:o}),this.noteResize(i.id,r)}async loadImage(t){this.loadingImages.add(t);try{let e=await Zs(this.hass,t,this.home),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),r=document.createElement("canvas");r.width=Math.round(i.width*o),r.height=Math.round(i.height*o),r.getContext("2d").drawImage(i,0,0,r.width,r.height);let a=r.toDataURL("image/jpeg",.85),l=U("img");await yo(this.hass,l,a,this.home),this._images={...this._images,[l]:{url:a,aspect:r.height/r.width}};let c=this.floor?.rooms.length?Mt(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,M(c.x1-c.x0)):12,opacity:.5}})}selectFloor(t){this._floorId=t,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}renderFloorMenu(){let t=this._doc.floors,e=this.floor,n=this.isEditor,i=this._toolMenu==="floor",o=()=>(this._toolMenu=null,this._floorMenu=!1);return m`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-floor">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${i} @click=${()=>(this._toolMenu=i?null:"floor",this._floorMenu=!1,this._viewMenu=!1)}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${e?.name??this.t("floors")} <span class="fp3d-caret">▾</span>
        </button>
        ${i?m`<div class="fp3d-menu-veil" @click=${o}></div>
              <div class="fp3d-menu" role="menu">
                ${[...t].reverse().map(r=>m`<button role="menuitem" class="fp3d-menu-item ${r.id===this._floorId?"fp3d-menu-on":""}" @click=${()=>(o(),this.selectFloor(r.id))}>
                    ${r.name}<span class="fp3d-menu-more">${r.id===this._floorId?"\u2713":""}</span>
                  </button>`)}
                ${n?m`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length?this._floorMenu:b}
                        @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:(o(),this.addFloor())}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length?m`<span class="fp3d-menu-more">${this._floorMenu?"\u25BE":"\u25B8"}</span>`:b}
                      </button>
                      ${this._floorMenu?m`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map(r=>m`<button class="fp3d-chip" @click=${()=>(o(),this.addFloor(r))}>${r.name}</button>`)}
                            <button class="fp3d-chip" @click=${()=>(o(),this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`:b}
                      ${e?m`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${()=>{o(),this.setTool("select"),this.selectItem("room",null),this._sideOpen=!0}}
                          >
                            ${this.t("floor_settings")}
                          </button>`:b}`:b}
              </div>`:b}
      </div>
    </div>`}setTool(t){let e=this.floor;if(this._tool=t,t!=="select"&&t!=="furniture"&&this.cancelPlacing(),this._draft=[],this._cursor=null,this._openingNote=null,this.openingHoverText=null,this._pipeMode=!1,this._pipeDraft=null,t==="pool"&&this.outdoorArea?.type!=="pool"){let n=e?.outdoor.find(i=>i.type==="pool");n&&this.selectItem("outdoor",n.id)}this.setSideFolded(!1)}renderToolBar(t){let e=this.isEditor,n=!t||!e,i=ar.filter(p=>p!=="pool"),o={tool:"rect",label:this.t("tool_room"),choices:()=>[{label:this.t("tool_rect"),on:this._tool==="rect",pick:()=>this.setTool("rect")},{label:this.t("tool_polygon"),on:this._tool==="polygon",pick:()=>this.setTool("polygon")},{label:this.t("tool_measure"),on:this._tool==="measure",pick:()=>this.setTool("measure")}]},r={tool:"outdoor",label:this.t("tool_outdoor"),choices:()=>[...i.map(p=>({label:this.t(`out_${p}`),on:this._tool==="outdoor"&&(this._outdoorType??"lawn")===p,pick:()=>{this.setTool("outdoor"),this._outdoorType=p}})),{label:this.t("outdoor_shape_rect"),on:this._tool==="outdoor"&&!this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!1)},{label:this.t("outdoor_shape_free"),on:this._tool==="outdoor"&&this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!0)}]},a={tool:"pool",label:this.t("tool_pool"),choices:()=>[...["rect","round","oval","free"].map(p=>({label:this.t(`pool_shape_${p}`),on:this._tool==="pool"&&!this._pipeMode&&(this._poolShape??"rect")===p,pick:()=>{this.setTool("pool"),this._poolShape=p,this._outdoorFree=p==="free"}})),...this.pipeRules?[{label:this.t("pool_pipe_draw"),on:this._tool==="pool"&&!!this._pipeMode,pick:()=>(this.setTool("pool"),this._pipeMode=!0)}]:[]]},l=[{id:"build",label:this.t("tool_group_build"),entries:[o,{tool:"wall",label:this.t("tool_wall")},{tool:"opening",label:this.t("tool_opening")},{tool:"hole",label:this.t("tool_hole")},{tool:"roof",label:this.t("tool_roof")}]},{id:"outside",label:this.t("tool_group_outside"),entries:[r,a]}],c=p=>p.tool===this._tool||p===o&&(this._tool==="polygon"||this._tool==="measure"),d=p=>p===a?this._pipeMode?this.t("pool_pipe_draw"):this.t(`pool_shape_${this._poolShape??"rect"}`):p===r?this.t(`out_${this._outdoorType??"lawn"}`):p===o?this.t(`tool_${this._tool}`):"",u=()=>(this._toolMenu=null,this._toolOpen=null),h=(p,f)=>m`<button aria-pressed=${this._tool===p} ?disabled=${n} @click=${()=>(u(),this.setTool(p))}>${f}</button>`;return m`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool==="select"} ?disabled=${!t} @click=${()=>(u(),this.setTool("select"))}>${this.t("tool_select")}</button>
        ${l.map(p=>{let f=p.entries.find(c),_=this._toolMenu===p.id,g=f?`${f.label}${d(f)?`: ${d(f)}`:""}`:p.label;return m`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!f} aria-haspopup="menu" aria-expanded=${_} ?disabled=${n} @click=${()=>(this._toolMenu=_?null:p.id,this._toolOpen=null,this._viewMenu=!1)}>
              ${g} <span class="fp3d-caret">▾</span>
            </button>
            ${_?m`<div class="fp3d-menu-veil" @click=${u}></div>
                  <div class="fp3d-menu" role="menu">
                    ${p.entries.map(y=>{let v=y.choices?.()??[],w=this._toolOpen===y.tool;return m`<button
                          role="menuitem"
                          class="fp3d-menu-item ${c(y)?"fp3d-menu-on":""}"
                          aria-expanded=${v.length?w:b}
                          @click=${()=>{v.length?this._toolOpen=w?null:y.tool:(this.setTool(y.tool),u())}}
                        >
                          ${y.label}${v.length?m`<span class="fp3d-menu-more">${w?"\u25BE":"\u25B8"}</span>`:b}
                        </button>
                        ${w?m`<div class="fp3d-menu-sub">
                              ${v.map(k=>m`<button
                                    class="fp3d-chip ${k.on?"fp3d-menu-on":""}"
                                    @click=${()=>{k.pick(),this._draft=[],u()}}
                                  >
                                    ${k.label}
                                  </button>`)}
                            </div>`:b}`})}
                  </div>`:b}
          </div>`})}
        ${h("furniture",this.t("tool_furniture"))} ${h("energy",this.t("tool_energy"))}
      </div>
      <!-- Wall view is a mode: beside the tools, kept away from the view buttons by undo / redo (#91) -->
      <div class="fp3d-seg fp3d-seg-menu">
        <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${p=>(u(),this.toggleWallPick(p.currentTarget))}>${this.t("wall_view")}</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button class="fp3d-undo" ?disabled=${!this._canUndo} @click=${()=>this.undo()} title=${`${this.t("undo")} (Ctrl+Z)`} aria-label=${this.t("undo")}>↶</button>
        <button class="fp3d-undo" ?disabled=${!this._canRedo} @click=${()=>this.redo()} title=${`${this.t("redo")} (Ctrl+Y)`} aria-label=${this.t("redo")}>↷</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu fp3d-seg-views">
        <button class="fp3d-split-btn" aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>(u(),this.toggleSplit())}>${this._split?"\u25E7 ":"\u25A2 "}${this.t("split_3d")}</button>
        <button title=${this.t("fit_hint")} @click=${()=>(u(),this.fit())}>${this.t("fit")}</button>
        <button title=${this.t("fit_all_hint")} @click=${()=>(u(),this.fit(!0))}>${this.t("fit_all")}</button>
        <button class="fp3d-help-btn" aria-pressed=${this._help} aria-label=${this.t("help_open")} title=${this.t("help_open")} @click=${()=>(u(),this._help=!this._help)}>?</button>
      </div>
      ${this.renderSettingsMenu(u)}`}renderSettingsMenu(t){let e=this.isEditor,n=this._settingsMenu,o=[{key:"house",icon:"\u{1F3E0}",label:this.t("settings_house"),admin:!0},{key:"weather",icon:"\u{1F326}",label:this.t("settings_weather"),admin:!0},{key:"director",icon:"\u{1F3AC}",label:this.t("card_director"),admin:!0},{key:"voice",icon:"\u{1F399}",label:this.t("voice"),admin:!1},...Xn("locate")&&this.isHaAdmin?[{key:"locate",icon:"\u{1F4E1}",label:this.t("locate"),admin:!0}]:[],{key:"favorites",icon:"\u2B50",label:this.t("favorites"),admin:!0},{key:"backdrop",icon:"\u{1F5BC}",label:this.t("backdrop"),admin:!0},{key:"terrain",icon:"\u26F0",label:this.t("terrain"),admin:!0},{key:"backup",icon:"\u{1F4BE}",label:this.t("backup"),admin:!0},...this.isHaAdmin?[{key:"editors",icon:"\u{1F465}",label:this.t("editors_title"),admin:!0}]:[]].filter(a=>e||!a.admin),r=()=>{t(),this._settingsMenu=!n};return m`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-settings">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${n} title=${this.t("settings")} @click=${r}>
          ⚙ <span class="fp3d-settings-word">${this.t("settings")}</span> <span class="fp3d-caret">▾</span>
        </button>
        ${n?m`<div class="fp3d-menu-veil" @click=${()=>this._settingsMenu=!1}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu">
                ${o.map(a=>m`<button
                    role="menuitem"
                    class="fp3d-menu-item"
                    @click=${()=>{if(this._settingsMenu=!1,a.key==="locate"){this.hass&&tp().then(l=>l.openLocateSetup(this.hass,this._doc,()=>this.hass,c=>this.setSettings({person_look:c==="figure"?null:c})));return}this._settingsDialog=a.key,a.key==="voice"&&this.hass&&Ef(this.hass,this.packs??[]).then(()=>this.requestUpdate())}}
                  >
                    ${a.icon} ${a.label}
                  </button>`)}
              </div>`:b}
      </div>
    </div>`}renderSettingsDialog(){let t=this._settingsDialog;if(!t)return b;let e=()=>this._settingsDialog=null,n={house:this.t("settings_house"),weather:this.t("settings_weather"),director:this.t("card_director"),voice:this.t("voice"),locate:this.t("locate"),favorites:this.t("favorites"),backdrop:this.t("backdrop"),terrain:this.t("terrain"),backup:this.t("backup"),editors:this.t("editors_title")},i=t==="house"?this.renderHouseSettings():t==="weather"?this.renderWeatherSettings():t==="director"?this.renderDirector():t==="voice"?this.renderVoice():t==="favorites"?this.renderFavorites():t==="backdrop"?this.renderBackdrop():t==="terrain"?this.renderTerrain():t==="editors"?this.renderEditors():this.renderBackup();return m`<div class="fp3d-dialog-veil" @click=${o=>o.target===o.currentTarget&&e()}>
      <div class="fp3d-dialog" role="dialog" aria-label=${n[t]} tabindex="-1" @keydown=${o=>o.key==="Escape"&&e()}>
        <div class="fp3d-dialog-head">
          <h3>${n[t]}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${e}>✕</button>
        </div>
        <div class="fp3d-dialog-body">${i}</div>
      </div>
    </div>`}renderHint(){let t=this.hintKeyNow(),e=t==="hint_empty"||t==="hint_first_room",n=this._fixedHint||this._tool==="opening"&&!!this._openingNote;return m`<div class="fp3d-hint ${n?"fp3d-hint-fixed":""} ${e?"fp3d-hint-first":""}" role="status" aria-live="polite">
      <span class="fp3d-hint-text" .textContent=${vo(this.hintText())}></span>
      <button class="fp3d-hint-help" title=${this.t("help_open")} @click=${()=>this._help=!0}>? ${this.t("hint_help")}</button>
    </div>`}rackOf(t){let e=He(Pn(t.type));return e?{frame:e,at:No(e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h))}:null}elevationMemo=null;rackElevationOf(t){let e=He(Pn(t.type));if(!e)return null;let n=this.hass?.language??"en",i=t.rack?.slots??[],o=this.hass,r=i.map(c=>o?Nn(o,c):null),a=JSON.stringify([t.type,t.w,t.d,t.h,t.name??"",n,i,i.map(c=>!!Pt(c.type)),r]);if(this.elevationMemo?.key===a)return this.elevationMemo.el;let l=_u({frame:e,size:[t.w,t.d,t.h],slots:i,itemOf:Pt,nameOf:(c,d)=>c.name||jt(d,n),title:t.name||Ft(this.hass,t.type),statusOf:c=>r[i.indexOf(c)]??null});return this.elevationMemo={key:a,el:l},l}renderRackElevation(t){let e=this.rackElevationOf(t);if(!e||!e.pieces)return b;let n=He(Pn(t.type));return m`<details class="fp3d-rack-elev" open>
      <summary>${this.t("rack_front_view")} · ${this.t("rack_used",{used:e.used,u:n?.u??0})}</summary>
      <div class="fp3d-rack-elev-box">${this.rackElevationPicture(e)}</div>
    </details>`}rackElevationPicture(t){let e=(n,i)=>`${Math.round(n/i*1e4)/100}%`;return m`<div class="fp3d-rack-elev-pic">
      <img class="fp3d-rack-elev-img" src=${`data:image/svg+xml;charset=utf-8,${encodeURIComponent(t.svg)}`} width=${t.width} height=${t.height} alt=${t.label} />
      ${t.gear.map(n=>m`<span class="fp3d-rack-elev-tip" title=${n.title} style="left:${e(n.x,t.width)};top:${e(n.y,t.height)};width:${e(n.w,t.width)};height:${e(n.h,t.height)}"></span>`)}
    </div>`}openRackSheet(){let t=this.furnitureItem;t&&this.rackOf(t)&&(this._rackSheet=t.id)}rackRules(t){let e=this.rackOf(t);return e?{rack:e,space:ru(e.frame,e.at),gearOf:cu(Pn),looseOf:du(Pn)}:null}rackSheetProps(){let t=this._rackSheet?this.floor?.furniture.find(u=>u.id===this._rackSheet):void 0,e=t&&this.rackRules(t);if(!t||!e)return null;let{rack:n,space:i,gearOf:o,looseOf:r}=e,a=this.hass?.language??"en",l=[],c=[],d=n.at.opening;for(let u of this.packs??[])for(let h of u.items){let p=hn(h),f=Dt(u.id,h.id);p&&p.inch===i.width&&Lr(i,h.size[1])?l.push({type:f,name:jt(h,a)}):!p&&!h.rack_frame&&h.electric&&(h.group==="network"||h.group==="tech")&&h.mount!=="ceiling"&&h.size[0]<=d&&h.size[1]<=i.mountDepth&&h.size[2]<=.3&&c.push({type:f,name:jt(h,a)})}return l.sort((u,h)=>u.name.localeCompare(h.name)),c.sort((u,h)=>u.name.localeCompare(h.name)),{heading:t.name||Ft(this.hass,t.type),space:i,labels:n.at.units.map(u=>u.label),slots:t.rack?.slots??[],gear:l,loose:c,gearOf:o,looseOf:r,nameOf:u=>Ft(this.hass,u),editable:this.isEditor,linker:this.rackLinker()}}anyEntity=()=>!0;rackDevicesMemo=null;rackLinker(){let t=this.hass;if(!t)return null;let e=Object.keys(t.states).length,n=this.rackDevicesMemo;return(!n||n.entities!==t.entities||n.devices!==t.devices||n.count!==e)&&(this.rackDevicesMemo={entities:t.entities,devices:t.devices,count:e,options:fm(t)}),{entities:this.entityOptions(this.anyEntity),devices:this.rackDevicesMemo.options,fromDevice:i=>pm(t,i),suggest:i=>hm(t,i),label:i=>st(t,i),status:i=>Nn(t,i)}}rackFrameChoices(t){let e=this.hass?.language??"en",n=Pn(t.type)?.mount==="wall",i=[];for(let o of this.packs??[])for(let r of o.items)He(r)&&r.mount==="wall"===n&&i.push({type:Dt(o.id,r.id),name:jt(r,e)});return i.sort((o,r)=>o.name.localeCompare(r.name,void 0,{numeric:!0}))}changeRackFrame(t){let e=this.furnitureItem,n=Pn(t);if(!e||!this.isEditor||!n||!He(n)||!this.rackOf(e))return;let[i,o,r]=n.size;this.updateFurniture({type:t,w:i,d:o,h:r})}renderRackFrameForm(t){let e=this.rackRules(t);if(!e)return b;let n=Ko(e.space,t.rack?.slots??[],e.gearOf,e.looseOf),i=this.rackFrameChoices(t);return m`${this.isEditor&&i.length>1?m`<div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("rack_frame_pick")}
            <select @change=${o=>this.changeRackFrame(o.target.value)}>
              ${i.map(o=>m`<option value=${o.type} ?selected=${o.type===t.type}>${o.name}</option>`)}
            </select></label
          >
        </div>`:b}
    ${n.length?m`<p class="fp3d-sub fp3d-pack-error" role="alert">
          ${this.t("rack_misfits",{n:n.length})}
          ${n.map(o=>{let r=t.rack.slots.find(a=>a.id===o.id);return m`<br />${r.name||Ft(this.hass,r.type)}: ${this.t(`rack_${o.why}`)}`})}
        </p>`:b}`}rackCardPicked(t){return t.rack?.card?.metrics??gl(this.hass,t.rack?.slots??[])}toggleRackCardMetric(t){let e=this.furnitureItem;if(!e?.rack||!this.isEditor)return;let n=_m(e.rack.card?.metrics,gl(this.hass,e.rack.slots),t);this.change((i,o)=>{let r=o.furniture.find(a=>a.id===e.id);r?.rack&&(r.rack={...r.rack,card:{...r.rack.card,metrics:n}})})}resetRackCard(){let t=this.furnitureItem;!t?.rack?.card||!this.isEditor||this.change((e,n)=>{let i=n.furniture.find(o=>o.id===t.id);if(i?.rack){let{card:o,...r}=i.rack;i.rack=r}})}renderRackCardForm(t){let e=this.hass,n=t.rack?.slots??[];if(!e||!n.length)return b;let i=gm(e,n,c=>c.name||Ft(e,c.type??""));if(!i.length)return b;let o=this.rackCardPicked(t),r=o.length>=to,a=!this.isEditor,l=(c,d)=>c===Rs?this.t("rack_card_hottest"):c===Is?this.t("rack_card_online"):d==="other"?st(e,c):this.t(`rack_kind_${d}`);return m`<details class="fp3d-rack-elev fp3d-rack-card-pick">
      <summary>${this.t("rack_card_values",{n:o.length,max:to})}</summary>
      <p class="fp3d-sub">${this.t("rack_card_values_hint")}</p>
      ${i.map(c=>m`<fieldset class="fp3d-rack-card-group">
          <legend>${c.name??this.t("rack_card_rack")}</legend>
          ${c.options.map(d=>{let u=o.includes(d.key);return m`<label class="fp3d-check"
              ><input type="checkbox" .checked=${u} ?disabled=${a||!u&&r} @change=${()=>this.toggleRackCardMetric(d.key)} />
              <span>${l(d.key,d.kind)}${d.key.startsWith("@")?b:m` <small>${d.kind==="other"?"":st(e,d.key)} · ${hp(e,e.states[d.key])}</small>`}</span></label
            >`})}
        </fieldset>`)}
      ${t.rack?.card&&!a?m`<button class="fp3d-btn" @click=${()=>this.resetRackCard()}>${this.t("rack_card_default")}</button>`:b}
    </details>`}onRackChange(t){let e=this._rackSheet,n=t.detail.slots;!e||!this.isEditor||this.change((i,o)=>{let r=o.furniture.find(a=>a.id===e);r&&(r.rack={...r.rack,slots:n})})}renderRackSheet(){let t=this.rackSheetProps();return t?m`<fp3d-rack-sheet
      .heading=${t.heading}
      .space=${t.space}
      .labels=${t.labels}
      .slots=${t.slots}
      .gear=${t.gear}
      .loose=${t.loose}
      .gearOf=${t.gearOf}
      .looseOf=${t.looseOf}
      .nameOf=${t.nameOf}
      .editable=${t.editable}
      .linker=${t.linker}
      .t=${(e,n)=>this.t(e,n)}
      @rack-change=${e=>this.onRackChange(e)}
      @rack-close=${()=>this._rackSheet=null}
    ></fp3d-rack-sheet>`:b}renderHelp(){if(!this._help)return b;let t=()=>this._help=!1,e=n=>{let i=n==="swing"?z`<path class="fp3d-help-swing" d="M4 22L4 4A18 18 0 0 1 22 22" />`:n==="track"?z`<path class="fp3d-help-track" d="M4 20L4 4M22 20L22 4" />`:n==="guide"?z`<line class="fp3d-guide" x1="2" y1="13" x2="24" y2="13" />`:n==="snap"?z`<circle class="fp3d-snap" cx="13" cy="13" r="8" />`:n==="ghost"?z`<rect class="fp3d-ghost" x="3" y="5" width="20" height="16" />`:z`<rect class="fp3d-help-sel" x="3" y="5" width="20" height="16" rx="2" />`;return m`<svg class="fp3d-help-mark" viewBox="0 0 26 26" aria-hidden="true">${i}</svg>`};return m`<div class="fp3d-dialog-veil" @click=${n=>n.target===n.currentTarget&&t()}>
      <div class="fp3d-dialog fp3d-help-overlay" role="dialog" aria-label=${this.t("help_overlay_title")} tabindex="-1">
        <div class="fp3d-dialog-head">
          <h3>${this.t("help_overlay_title")}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${t}>✕</button>
        </div>
        <div class="fp3d-dialog-body">
          <h4>${this.t("help_shortcuts")}</h4>
          <dl class="fp3d-help-keys">
            ${Uf.map(n=>m`<dt>${n.keys.map((i,o)=>m`${o?" / ":""}<kbd>${i}</kbd>`)}</dt><dd>${this.t(n.text)}</dd>`)}
          </dl>
          <h4>${this.t("help_legend")}</h4>
          <ul class="fp3d-help-legend">
            ${Gf.map(n=>m`<li>${e(n.mark)}<span>${this.t(n.text)}</span></li>`)}
          </ul>
        </div>
      </div>
    </div>`}render(){let t=this.floor,e=t?Ct(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return m`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderSettingsDialog()} ${this.renderHelp()} ${this.renderRackSheet()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}" style=${`--fp3d-side-w:${this._sideWidth}px`}>
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?m`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:b}
            ${this.renderFloorMenu()} ${this.renderToolBar(t)}
            ${e?.warnings.length?m`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:b}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?m`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("home3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:b}
            ${this.houseTool?m`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:b}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null),this._openingHover=null}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
              @dragover=${this.onPlanDragOver}
              @drop=${this.onPlanDrop}
            >
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):b}
              ${t?this.renderOutdoor(t):b} ${t?this.renderRooms(t):b} ${t?this.renderFurniture(t):b} ${this.renderPlaceGhost()}
              ${t?this.renderFreeWalls(t):b}
              ${t&&e?this.renderOpenings(t,e.walls):b} ${t?this.renderMeter(t):b}
              ${t&&this._tool==="select"?this.renderDevices(t):b}
              ${t&&this._tool==="select"?this.renderPets(t):b}
              ${this.room&&this.isEditor&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):b}
              ${t?this.renderOutdoorHandles(t):b}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):b}
              ${t?this.renderHeadroom(t):b}
              ${this._tool==="roof"?z`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?z`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&this.pipeRules?this.renderPoolPlan(t):b} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            ${this.renderHint()}
          </div>
          ${this._split&&!this.narrow?m`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:b}
          ${this._split?this.render3d():b}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return b;let[i,o]=this.toScreen([e.x,e.z]),r=e.width*this._view.scale,a=r*n.aspect,l=e.rotation??0,c=this.bgHandles();return z`<g transform="rotate(${l} ${i+r/2} ${o+a/2})">
      <image href=${n.url} x=${i} y=${o} width=${r} height=${a} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?z`<rect class="fp3d-bg-frame" x=${i} y=${o} width=${r} height=${a} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+r} cy=${o+a} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+r/2} y1=${o} x2=${i+r/2} y2=${o-30} />
            <circle cx=${i+r/2} cy=${o-30} r="16" class="fp3d-hit" />
            <circle cx=${i+r/2} cy=${o-30} r="8" />
            <path d="M${i+r/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:b}
    </g>${this.renderBgRuler()}`}bgHandles(){return!!this.floor?.background&&this.isEditor&&this._tool==="select"&&this._bgEdit}renderBgRuler(){let t=this._bgLevel?.length?this._bgLevel:this._bgRuler;if(!t?.length)return b;let e=t.map(n=>this.toScreen(n));return z`<g class="fp3d-bg-ruler">
      ${e.length===2?z`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:b}
      ${e.map(([n,i])=>z`<circle cx=${n} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(t,e){let n=this.floor?.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let o=Math.atan2(e[1]-t[1],e[0]-t[0]),r=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(r)<1e-4)return;let a=n.width*i.aspect,l=[n.x+n.width/2,n.z+a/2],c=l[0]-t[0],d=l[1]-t[1],u=[t[0]+c*Math.cos(r)-d*Math.sin(r),t[1]+c*Math.sin(r)+d*Math.cos(r)],h=(n.rotation??0)+r*180/Math.PI;h=Math.round((((h+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:h,x:M(u[0]-n.width/2),z:M(u[1]-a/2)}})}applyBgRuler(t){let n=this.floor?.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(t>0))return;let r=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(r<1e-4)return;let a=t/r,l=n.width*o.aspect,c=[n.x+n.width/2,n.z+l/2],d=i[0],u=[d[0]+a*(c[0]-d[0]),d[1]+a*(c[1]-d[1])],h=n.width*a,p=l*a;this.updateFloor({background:{...n,width:M(h),x:M(u[0]-h/2),z:M(u[1]-p/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let i=t.width*n,o=t.x+t.width/2,r=t.z+i/2,a=-(t.rotation??0)*Math.PI/180,l=e[0]-o,c=e[1]-r;return[o+l*Math.cos(a)-c*Math.sin(a)-t.x,r+l*Math.sin(a)+c*Math.cos(a)-t.z]}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,[r,a]=this.toWorld(0,0),[l,c]=this.toWorld(e,n),d=[],u=(f,_)=>{for(let g=Math.ceil(r/f)*f;g<=l;g+=f){let y=this.toScreen([g,0])[0];d.push(z`<line class=${_} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let g=Math.ceil(a/f)*f;g<=c;g+=f){let y=this.toScreen([0,g])[1];d.push(z`<line class=${_} x1="0" y1=${y} x2=${e} y2=${y} />`)}};i<o&&u(i,"fp3d-grid-minor"),u(o,"fp3d-grid-major");let[h,p]=this.toScreen([0,0]);return d.push(z`<circle class="fp3d-origin" cx=${h} cy=${p} r="3" />`),z`<g pointer-events="none">${d}</g>`}renderPlaceGhost(){let t=this._placing,e=this._placeAt;if(!t||!e)return b;let[n,i]=$t(t.type),o=this._view.scale,[r,a]=this.toScreen(e);return z`<rect class="fp3d-place-ghost" x=${r-n*o/2} y=${a-i*o/2} width=${n*o} height=${i*o} />`}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?z`<g pointer-events="none">${e.rooms.map(n=>z`<polygon class="fp3d-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:b}renderWalls(t){let e=this.floor?.height??2.5;return z`<g pointer-events="none">${t.map(n=>{let i=n.height!==void 0&&n.height<e-.01,o=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return z`<polygon class=${o} points=${n.footprint.map(r=>this.toScreen(r).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let o=Ct(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(r=>r.sources.filter(a=>a.room_id===t.id&&a.edge===e).map(a=>a.t0));return o.length?[...new Set(o)].sort((r,a)=>r-a):[0]}setEdgeSlope(t,e,n){this.isEditor&&this.change((i,o)=>{let r=o.rooms.find(l=>l.id===t.id);if(!r)return;let a=(r.wall_slopes??[]).slice(0,r.points.length);for(;a.length<r.points.length;)a.push(null);a[e]=n?[Math.round(Math.max(.05,n[0])*1e3)/1e3,Math.round(Math.max(.05,n[1])*1e3)/1e3]:null,r.wall_slopes=a.every(l=>!l)?void 0:a})}setEdgeHeight(t,e,n,i){let o=this.floor;if(!o||!this.isEditor)return;if(i!==void 0){let l=this.edgeParts(t,e).length;this.change((c,d)=>{let u=d.rooms.find(_=>_.id===t.id);if(!u)return;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);let p=h[e],f=Array.isArray(p)?[...p]:new Array(l).fill(typeof p=="number"?p:null);for(;f.length<l;)f.push(null);f[i]=n,h[e]=f.every(_=>_===f[0])?f[0]:f,u.wall_heights=h.every(_=>_===null)?void 0:h});return}let a=Ct(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===t.id&&c.edge===e)).flatMap(l=>l.sources);a.some(l=>l.room_id===t.id&&l.edge===e)||a.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,c)=>{for(let d of a){let u=c.rooms.find(p=>p.id===d.room_id);if(!u)continue;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);h[d.edge]=n,u.wall_heights=h.every(p=>p===null)?void 0:h}})}renderCameraDetections(t){if(!this.hass)return b;let e=this.hass,n=this.floor?.placements.find(p=>p.entity_id===t),i=Array.isArray(n?.detect_sensors)?n.detect_sensors:null,o=ua(e,t),r=_p(e,t),a=[...new Set(r.map(p=>fp(e,p)))],l=vt("camera_cockpit"),c=this.isEditor,d=p=>this.updateDevice({detect_sensors:p}),u=p=>p.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String(e.states[p]?.attributes.device_class)),h=[...new Set([...o,...i??[]])];return m`<p class="fp3d-sub fp3d-wide">
        ${r.length?m`${l?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:a.map(p=>this.t(`detect_${p}`)).join(", "),n:r.length})}`:this.t("camera_detect_none")}
      </p>
      <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_choose_hint")}
        ><input type="checkbox" .checked=${i!==null} ?disabled=${!c} @change=${p=>d(p.target.checked?[...o]:null)} />
        ${this.t("camera_detect_choose")}</label
      >
      ${i!==null?m`${h.map(p=>m`<label class="fp3d-check fp3d-wide fp3d-indent"
                  ><input type="checkbox" .checked=${i.includes(p)} ?disabled=${!c} @change=${f=>d(f.target.checked?[...i,p]:i.filter(_=>_!==p))} />
                  ${st(e,p)} <span class="fp3d-sub">${p}</span></label
                >`)}
            ${this.entitySelect(this.t("camera_detect_add"),null,void 0,this.entityOptionsFor(this.detectFilter(u,h)),p=>{p&&p!=="none"&&d([...i,p])})}`:b}`}_detectFilter=null;detectFilter(t,e){let n=e.join(",");return this._detectFilter?.key!==n&&(this._detectFilter={key:n,fn:i=>t(i)&&!e.includes(i)}),this._detectFilter.fn}splitEdge(t,e,n){if(!this.isEditor)return;let i=t.points,o=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),r=this.edgeParts(t,e),a=n===void 0?0:r[n],l=n===void 0?o:r[n+1]??o;if(l-a<.4)return;let c=Math.round((a+l)/2*100)/100;this.change((d,u)=>{let h=u.rooms.find(_=>_.id===t.id);if(!h)return;let p=(h.wall_splits??[]).slice(0,h.points.length);for(;p.length<h.points.length;)p.push(null);p[e]=[...p[e]??[],c].sort((_,g)=>_-g),h.wall_splits=p;let f=h.wall_heights?.[e];if(Array.isArray(f)){let _=n??0;f.splice(_+1,0,f[_]??null)}})}moveSplit(t,e,n,i){let o=t.points,r=Math.hypot(o[(e+1)%o.length][0]-o[e][0],o[(e+1)%o.length][1]-o[e][1]),a=this.edgeParts(t,e).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(r-.1,Math.round(i*100)/100));a.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{let h=d.rooms.find(f=>f.id===t.id)?.wall_splits?.[e];if(!h)return;let p=h.findIndex(f=>Math.abs(f-n)<.001);p>=0&&(h[p]=l),h.sort((f,_)=>f-_)})}joinSplit(t,e,n,i){this.change((o,r)=>{let a=r.rooms.find(d=>d.id===t.id);if(!a?.wall_splits?.[e])return;let l=a.wall_splits[e].filter(d=>Math.abs(d-n)>.001);a.wall_splits[e]=l.length?l:null,a.wall_splits.every(d=>!d)&&(a.wall_splits=void 0);let c=a.wall_heights?.[e];Array.isArray(c)&&(c.splice(i,1),c.every(d=>d===c[0])&&(a.wall_heights[e]=c[0]??null))})}renderSplitMarks(t){let e=t.points;return z`${(t.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=e.length)return[];let o=e[i],r=e[(i+1)%e.length],a=Math.hypot(r[0]-o[0],r[1]-o[1])||1,l=(r[0]-o[0])/a,c=(r[1]-o[1])/a;return n.map(d=>{let[u,h]=this.toScreen([o[0]+l*d,o[1]+c*d]);return z`<line class="fp3d-split-mark" x1=${u-c*7} y1=${h+l*7} x2=${u+c*7} y2=${h-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,i=this._doc.settings,o=new Set;for(let c of Ct(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(c.exterior)for(let d of c.sources)d.room_id===t.id&&o.add(d.edge);let r=(c,d)=>this.change((u,h)=>{let p=h.rooms.find(_=>_.id===t.id);if(!p)return;let f=(p.wall_thickness??[]).slice(0,p.points.length);for(;f.length<p.points.length;)f.push(null);f[c]=d,p.wall_thickness=f.every(_=>_===null)?void 0:f}),a=Ah(t),l=[a.open?this.t("walls_open_n",{n:a.open}):"",a.sloping?this.t("walls_sloping_n",{n:a.sloping}):""].filter(Boolean).join(", ");return m`<details class="fp3d-edge-box" ?open=${this._wallsOpen} @toggle=${c=>this.setWallsOpen(c.target.open)}>
      <summary>
        <h4>${this.t("walls_section",{n:a.walls})}</h4>
        ${l?m`<span class="fp3d-sub">${l}</span>`:b}
      </summary>
      ${t.points.flatMap((c,d)=>{let u=t.points[(d+1)%n],h=Math.hypot(u[0]-c[0],u[1]-c[1]),p=t.wall_heights?.[d]??null,f=t.wall_slopes?.[d]??null,_=()=>this._edgeHi=d,g=()=>this._edgeHi=null,y=this.edgeParts(t,d);return(y.length>1?y.map((w,k)=>k):[void 0]).map(w=>{let k=w===void 0?Array.isArray(p)?p[0]??null:p:Array.isArray(p)?p[w]??null:p,S=w===void 0?h:(y[w+1]??h)-y[w],$=x=>this.setEdgeHeight(t,d,x,w);return m`<div
            class="fp3d-edge-height${d===this._edgeHi?" fp3d-edge-on":""}${k!==null?" fp3d-edge-low":""}"
            @mouseenter=${_}
            @mouseleave=${g}
            @focusin=${_}
            @focusout=${g}
          >
            <span
              ><b>${this.t("wall_n",{a:d+1,b:(d+1)%n+1})}${w===void 0?"":` \xB7 ${this.t("wall_part",{n:w+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(S,2)}</span
              ></span
            >
            ${k===0?m`<span class="fp3d-muted">${this.t("wall_none")}</span>`:f&&w===void 0?m`${this.len(this.t("wall_slope_start",{n:d+1}),f[0],x=>this.setEdgeSlope(t,d,[x,f[1]]),.05,.05)}
                  ${this.len(this.t("wall_slope_end",{n:(d+1)%n+1}),f[1],x=>this.setEdgeSlope(t,d,[f[0],x]),.05,.05)}`:this.len(this.t("wall_height"),k??e,x=>$(x>=e-.005?null:Math.max(.05,x)),.05,.05)}
            ${this.isEditor&&w===void 0&&k!==0?m`<button class="fp3d-btn" aria-pressed=${!!f} title=${this.t("wall_slope_hint")} @click=${()=>this.setEdgeSlope(t,d,f?null:[k??e,k??e])}>◢ ${this.t("wall_slope")}</button>`:b}
            ${this.isEditor&&k!==null?m`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>$(null)}>↥</button>`:b}
            ${this.isEditor&&k!==0?m`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>$(0)}>${this.t("wall_none")}</button>`:b}
            ${this.isEditor&&S>=.4?m`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,d,w)}>✂</button>`:b}
            ${(w===void 0||w===0)&&k!==0?m`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,d)}>▦</button>`:b}
            ${(w===void 0||w===0)&&k!==0?m`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),t.wall_thickness?.[d]??(o.has(d)?i.wall_exterior:i.wall_interior),x=>{let R=o.has(d)?i.wall_exterior:i.wall_interior,L=Math.min(1.5,Math.max(.02,Math.round(x*1e3)/1e3));r(d,Math.abs(L-R)<5e-4?null:L)},.01,.02)}
                  ${this.isEditor&&t.wall_thickness?.[d]!=null?m`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>r(d,null)}>↺</button>`:b}</span
                >`:b}
            ${w!==void 0&&w>0&&(t.wall_splits?.[d]??[]).some(x=>Math.abs(x-y[w])<.001)?m`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),y[w],x=>this.moveSplit(t,d,y[w],x),.05,.1)}
                  ${this.isEditor?m`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,d,y[w],w)}>⨉</button>`:b}</span
                >`:b}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </details>`}setWallsOpen(t){if(this._wallsOpen!==t){this._wallsOpen=t;try{localStorage.setItem("home3d.wallsOpen",t?"1":"0")}catch{}}}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isEditor||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return b;if(e.pool_shape){let n=Mt(e.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return z`${i.map((o,r)=>{let[a,l]=this.toScreen(o);return z`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${r}`}><circle cx=${a} cy=${l} r="16" class="fp3d-hit" /><rect x=${a-5} y=${l-5} width="10" height="10" /></g>`})}`}return z`${e.points.map((n,i)=>{let[o,r]=this.toScreen(n);return z`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${i}`}><circle cx=${o} cy=${r} r="16" class="fp3d-hit" /><circle cx=${o} cy=${r} r="6" /></g>`})}`}renderOutdoor(t){return z`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(ge(e.points)),r=Mt(e.points),a=Math.min(r.x1-r.x0,r.z1-r.z0)*this._view.scale>40;return z`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?z`<text x=${i} y=${o+4}>${this.t(`out_${e.type}`)}</text>`:b}
      </g>`})}</g>`}renderOutdoorZone(t){let e=this.isEditor,n=Object.values(this.hass?.areas??{}).sort((i,o)=>i.name.localeCompare(o.name));return m`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!e}
          @change=${i=>{let o=i.target.value||null,r=(t.name??"").trim()||(o?this.hass?.areas?.[o]?.name??null:null);this.updateOutdoor({area_id:o,name:o?r:t.name??null})}}
        >
          <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
          ${n.map(i=>m`<option value=${i.area_id} ?selected=${i.area_id===t.area_id}>${i.name}</option>`)}
        </select></label
      >
      ${t.area_id?m`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${t.name??""} ?disabled=${!e} @change=${i=>this.updateOutdoor({name:i.target.value.trim()||null})}
          /></label>`:b}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${t.area_id?this.renderOutdoorDevices(t):b}`}renderOutdoorDevices(t){let e=this.hass,n=this.floor,i=n?Eo(n).find(p=>p.id===t.id):void 0;if(!e||!n||!i)return b;let o=i.area_id?e.areas?.[i.area_id]?.name:void 0,r=Wn(e,se(e,i.area_id).filter(p=>ze(et(p)))),a=new Set([...n.placements.filter(p=>K([p.x,p.z],i.points)).map(p=>p.entity_id),...n.furniture.filter(p=>Lt(p.type)&&p.entity&&K([p.x,p.z],i.points)).map(p=>p.entity)]),l=r.map(p=>p.primary).filter(p=>!a.has(p)),c=new Set(t.panel??[]),d=new Set(t.hidden??[]),u=new Set(t.no_state??[]),h=(p,f)=>p.has(f)?[...p].filter(_=>_!==f):[...p,f];return r.length?m`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${r.map(p=>m`<div class="fp3d-row fp3d-dev-row ${d.has(p.primary)?"fp3d-dev-hidden":""}">
          <button class="fp3d-dev-name ${a.has(p.primary)?"":"fp3d-muted"}" ?disabled=${!a.has(p.primary)} @click=${()=>this.selectItem("device",p.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${Jn(et(p.primary))} />
            </svg>
            <span>${st(e,p.primary,o)}</span>
          </button>
          ${this.isEditor?m`<button
                  class="fp3d-pin ${d.has(p.primary)?"fp3d-pin-on":""}"
                  aria-pressed=${d.has(p.primary)}
                  title=${this.t(d.has(p.primary)?"panel_unhide":"panel_hide")}
                  @click=${()=>this.updateOutdoor({hidden:h(d,p.primary)})}
                >
                  ${d.has(p.primary)?"\u{1F648}":"\u{1F441}"}
                </button>
                ${d.has(p.primary)?b:m`<button
                      class="fp3d-pin ${u.has(p.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${u.has(p.primary)}
                      title=${this.t(u.has(p.primary)?"panel_state_show":"panel_state_hide")}
                      @click=${()=>this.updateOutdoor({no_state:h(u,p.primary)})}
                    >
                      ${u.has(p.primary)?"\u2205":"Aa"}
                    </button>`}
                ${a.has(p.primary)?b:m`<button
                      class="fp3d-pin ${c.has(p.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${c.has(p.primary)}
                      title=${this.t(c.has(p.primary)?"panel_unpin":"panel_pin")}
                      @click=${()=>this.updateOutdoor({panel:h(c,p.primary)})}
                    >
                      ${c.has(p.primary)?"\u2605":"\u2606"}
                    </button>`}`:b}
          ${this.isEditor?a.has(p.primary)?m`<button class="fp3d-link" @click=${()=>this.removeDevice(p.primary)}>${this.t("devices_remove")}</button>`:m`<button class="fp3d-link" @click=${()=>this.placeDevices([p.primary],i)}>${this.t("devices_place")}</button>`:b}
        </div>`)}
      ${this.isEditor&&l.length>1?m`<button class="fp3d-link fp3d-place-all" @click=${()=>this.placeDevices(l,i)}>${this.t("devices_place_all_n",{n:l.length})}</button>`:b}
    </div>`:m`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`}renderOutdoorForm(t){let e=this.isEditor,n=dn(t.points),i=Mt(t.points),o=(r,a)=>{let{x0:l,z0:c,x1:d,z1:u}=i;r==="x"&&([l,d]=[a,a+(d-l)]),r==="z"&&([c,u]=[a,a+(u-c)]),r==="w"&&(d=l+Math.max(.1,a)),r==="d"&&(u=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,u],[l,u]].map(([h,p])=>[M(h),M(p)])})};return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${r=>this.updateOutdoor({type:r.target.value})}>
            ${ar.map(r=>m`<option value=${r} ?selected=${r===t.type}>${this.t(`out_${r}`)}</option>`)}
          </select></label
        >
        ${Hn(t.type)?b:this.renderOutdoorZone(t)}
        ${n?m`${this.len(this.t("x"),i.x0,r=>o("x",r))} ${this.len(this.t("z"),i.z0,r=>o("z",r))}
            ${this.len(this.t("width"),i.x1-i.x0,r=>o("w",r),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,r=>o("d",r),.01,.1)}`:b}
        ${Hn(t.type)?this.len(this.t("outdoor_height"),t.height??lr[t.type],r=>this.updateOutdoor({height:Math.min(6,Math.max(.1,M(r)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,r=>this.updateOutdoor({height:Math.min(2,Math.max(.4,M(r)))}),.05,.4):b}
        ${this.len(this.t("outdoor_offset"),t.offset??0,r=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,M(r)))||null}),.05)}
        ${t.type!=="pool"?m`${this.len(this.t("outdoor_slope"),t.slope??0,r=>this.updateOutdoor({slope:Math.min(20,Math.max(0,M(r)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${r=>this.updateOutdoor({slope_dir:r.target.value})}>
                  ${Xc.map(r=>m`<option value=${r} ?selected=${r===(t.slope_dir??"x")}>${this.t(`slope_${r.replace("-","n")}`)}</option>`)}
                </select></label
              >`:b}
        ${t.type==="pool"?this.renderPoolShape(t):b}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${t.outline!==!1} ?disabled=${!e} @change=${r=>this.updateOutdoor({outline:r.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${t.type==="fence"||t.type==="pergola"?m`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${r=>this.updateOutdoor({open:r.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:b}
        ${t.type==="pergola"?m`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.bracing} ?disabled=${!e} @change=${r=>this.updateOutdoor({bracing:r.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:b}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!t.cut} ?disabled=${!e} @change=${r=>this.updateOutdoor({cut:r.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${t.slope?m`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:b}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${this.renderModuleFields(t)}
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:b}
    </section>`}openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){if(this._wallMulti.length)return this._wallMulti;let t=this._wallSel?this.floor?.furniture.find(e=>e.id===this._wallSel):void 0;return t?t.group&&!this._wallSingle?(this.floor?.furniture??[]).filter(e=>e.group===t.group).map(e=>e.id):[t.id]:[]}wallToggle(t){let e=this.wallSelection(),n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.wallChoose(i,t)}wallChoose(t,e=t[0]??null){this._wallSingle=!1,this._wallSel=t.length?e&&t.includes(e)?e:t[0]:null,this._wallMulti=[];let n=this.wallSelection();t.length>1&&!(t.length===n.length&&t.every(i=>n.includes(i)))&&(this._wallMulti=t),this._wallGap=null}moveSetOnWall(t,e,n,i,o=this._doc,r=!0){let a=new Set(e);this.change((l,c)=>{for(let d of c.furniture)a.has(d.id)&&(Object.assign(d,Qo(t,d,n)),i!==null&&Se(d)&&(d.mount_y=Math.round(Math.min(no,Math.max(0,Kt(c,d)+i))*1e3)/1e3))},o,r)}wallGapAt(t,e,n,i,o){let r=o<1.2,a=t.length,l=[...Ge(t,e,n).filter(u=>r?u.y0<1:u.y1>1.2).map(u=>[u.s0,u.s1]),...Un(t,e).filter(u=>r?u.y0<.9:u.y1>1.2).map(u=>[u.s0,u.s1])];if(l.some(([u,h])=>i>u&&i<h))return null;let c=Math.max(0,...l.filter(([,u])=>u<=i).map(([,u])=>u)),d=Math.min(a,...l.filter(([u])=>u>=i).map(([u])=>u));return d-c>=.1?{s0:Math.round(c*1e3)/1e3,s1:Math.round(d*1e3)/1e3,low:r}:null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(r=>r.points.length>=3&&K([t.x,t.z],r.points));if(!n)return;let i=-1,o=1/0;n.points.forEach((r,a)=>{let l=n.points[(a+1)%n.points.length],c=Math.hypot(l[0]-r[0],l[1]-r[1])||1,d=Math.max(0,Math.min(1,((t.x-r[0])*(l[0]-r[0])+(t.z-r[1])*(l[1]-r[1]))/(c*c))),u=Math.hypot(t.x-(r[0]+(l[0]-r[0])*d),t.z-(r[1]+(l[1]-r[1])*d));u<o&&(o=u,i=a)}),i>=0&&this.openWallView(n.id,i,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,i=-1;t.points.forEach((o,r)=>{let a=Ge(Ue(t,r),e,t).length;a>i&&(i=a,n=r)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("home3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let i=`${e.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===t)return;let o=this.wall3dEl!==t;this.wall3dKey=i,this.wall3dEl=t,o&&t.addEventListener("pointerdown",r=>this.runDown3d(r),{capture:!0}),(async()=>{let r;for(let p=0;p<120&&!(r=t.viewer);p++)await new Promise(f=>setTimeout(f,50));o&&await new Promise(p=>setTimeout(p,250));let a=this.floor;if(!r||!a||this.wall3dKey!==i)return;if(!r.__npWall){r.__npWall=!0,r.updateWalls=function(){for(let f of this.floors)f.mask.standing.value=65535,f.mask.glass.value=0},r.labels.style.display="none";let p=new CSSStyleSheet;p.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,p]),r.camera.fov=58,r.camera.updateProjectionMatrix(),r.controls.minRadius=.6,r.controls.leftDragTurns=!1}let l=Ue(e,n),c=Math.max(1.5,...e.points.map(p=>gt(l,p).d)),d=be(l,l.length/2,0),u=a.elevation+(r.floorMap.get(a.id)?.y??0)+1.15;r.controls.maxRadius=Math.max(1.4,c-.25);let h=r.getView();h.target.set(d[0],u,d[1]),r.flyTo({...h,radius:Math.max(1.2,Math.min(c*.8,c-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},o?0:650),r.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!e?.isConnected||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let i=this.floor,o=this._wallSel?i?.furniture.find(p=>p.id===this._wallSel):void 0,r=e.viewer;if(!o||!i||!r||!Se(o)||o.locked){n.hidden=!0;return}let a=Kt(i,o),l=i.elevation+(r.floorMap.get(i.id)?.y??0)+a+o.h,c=r.camera.position.clone().set(o.x,l+.12,o.z).project(r.camera);if(c.z>1){n.hidden=!0;return}n.hidden=!1;let d=e.getBoundingClientRect(),u=n.offsetParent?.getBoundingClientRect()??d;n.style.transform=`translate(${d.left-u.left+(c.x+1)/2*d.width}px, ${d.top-u.top+(1-c.y)/2*d.height}px)`;let h=n.querySelector("b");h&&(h.textContent=this.m(Math.round(a*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e?.furniture.find(d=>d.id===this._wallSel):void 0,o=this.wall3dEl?.viewer;if(!e||!n||!o||!this.isEditor)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let r=Math.hypot(o.camera.position.x-n.x,o.camera.position.z-n.z)||1,a=this.wall3dEl.clientHeight||1,l=e.rooms.find(d=>d.points.length>=3&&K([n.x,n.z],d.points)),c=Math.max(e.height,l?.ceiling_height??0);this.lift={id:n.id,y:Kt(e,n),startY:t.clientY,perPx:2*r*Math.tan(o.camera.fov*Math.PI/360)/a,base:this._doc,top:Math.max(0,c-n.h),moved:!1}}liftMove(t){let e=this.lift,n=this._wallView?this.floor?.rooms.find(r=>r.id===this._wallView.roomId):void 0;if(!e||!n)return;let i=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let o=Math.min(e.top,Math.max(0,Math.round((e.y+i)*100)/100));this.moveOnWall(Ue(n,this._wallView.edge),e.id,0,o,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t?.moved&&this.pushHistory(t.base)}wallPickTip=[0,0];toggleWallPick(t){let e=t.closest(".fp3d-toolbar")?.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let i of e.rooms){if(i.points.length<3)continue;let o=K(t,i.points)?-.25:0;i.points.forEach((r,a)=>{let l=i.points[(a+1)%i.points.length],c=(l[0]-r[0])**2+(l[1]-r[1])**2||1,d=Math.max(0,Math.min(1,((t[0]-r[0])*(l[0]-r[0])+(t[1]-r[1])*(l[1]-r[1]))/c)),u=Math.hypot(t[0]-(r[0]+(l[0]-r[0])*d),t[1]-(r[1]+(l[1]-r[1])*d));u<.6&&(!n||u+o<n.d)&&(n={room:i,edge:a,d:u+o})})}if(!n){let i=e.rooms.find(o=>o.points.length>=3&&K(t,o.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}techDoc3d(){let t=this._doc3d;if(this.techDocCache?.src===t)return this.techDocCache.doc;let e={...t,floors:t.floors.map(n=>({...n,furniture:n.furniture.filter(i=>Ht.includes(i.type))}))};return this.techDocCache={src:t,doc:e},e}techDocCache=null;enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((i,o)=>{let r=o.furniture.find(c=>c.id===t);if(!r)return;r.rotation=Math.round((e%360+360)%360);let[a,l]=Gr(o,r,r.x,r.z,n,.6);Object.assign(r,{x:a,z:l})})}moveFromWall(t,e,n){this.change((i,o)=>{let r=o.furniture.find(a=>a.id===e);r&&(r.x=Math.round((r.x+t.n[0]*n)*1e3)/1e3,r.z=Math.round((r.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,i,o=this._doc,r=!0){this.change((a,l)=>{let c=l.furniture.find(d=>d.id===e);c&&(Object.assign(c,Qo(t,c,n)),i!==null&&(c.mount_y=Math.round(Math.min(no,Math.max(0,i))*1e3)/1e3))},o,r)}alongAxis(t,e){let n=this.wallTurn(t,e)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(t,e,n,i,o,r,a=this._doc,l=!0){this.change((c,d)=>{let u=d.furniture.find(p=>p.id===e);if(!u)return;let h=this.alongAxis(t,u);if(n!==null&&i!==null&&h&&i-n>=.05){let p=Qt(u).map(_=>gt(t,_).s),f=(Math.min(...p)+Math.max(...p))/2;u[h]=M(i-n),Object.assign(u,Qo(t,u,(n+i)/2-f))}if(o!==null||r!==null){let p=Kt(d,u),f=o??p,_=r??p+u.h;if(_-f<.03)return;u.h=M(_-f),o!==null&&Se(u)&&(u.mount_y=M(Math.max(0,f)))}},a,l)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(t,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(t,i));try{let[i]=await Promise.all([Xi(),this.hass?en(this.hass,n.map(o=>o.type)):void 0]);for(let o of n){let r=i.furnitureFront({type:o.type,w:o.w,d:o.d,h:o.h,variant:o.variant,lamp:yi[o.type]??null},this.wallTurn(t,o),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,o),r)}}catch{}this._wallPicTick++}}renderWallView(){let t=this._wallView,e=this.floor,n=t?e?.rooms.find(P=>P.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return b;let i=n.points.length,o=Ue(n,t.edge),r=o.length,a=Math.max(e.height,n.ceiling_height??0),l=this._techMode?Ge(o,e,n,1.6).filter(P=>Ht.includes(e.furniture.find(A=>A.id===P.id)?.type??"")):Ge(o,e,n),c=Un(o,e),d=P=>o.rightward?P:r-P,u=(P,A)=>[Math.min(d(P),d(A)),Math.abs(A-P)],h=P=>a-P,p=this.isEditor,f=this._wallSel?e.furniture.find(P=>P.id===this._wallSel):void 0,_=f?l.find(P=>P.id===f.id)??(()=>{let P=Qt(f).map(V=>gt(o,V)),A=Kt(e,f);return{kind:"furniture",id:f.id,s0:Math.min(...P.map(V=>V.s)),s1:Math.max(...P.map(V=>V.s)),y0:A,y1:A+f.h,d:Math.min(...P.map(V=>V.d))}})():null,g=!!f&&Se(f),y=this.wallSelection(),v=y.length>1,w=l.filter(P=>y.includes(P.id)),k=w.length?{s0:Math.min(...w.map(P=>P.s0)),s1:Math.max(...w.map(P=>P.s1)),y0:Math.min(...w.map(P=>P.y0)),y1:Math.max(...w.map(P=>P.y1))}:null,S=P=>this.m(P,2),$=P=>{let A=P.currentTarget.closest("svg"),V=A.createSVGPoint();return V.x=P.clientX,V.y=P.clientY,V.matrixTransform(A.getScreenCTM().inverse())},x=P=>[0,r,...l.filter(A=>!P.includes(A.id)).flatMap(A=>[A.s0,A.s1]),...c.flatMap(A=>[A.s0,A.s1])],R=(P,A)=>{if(!p)return;if(J&&this._runMode){this.techPress=J.pt(P),this.runDown(P,J);return}if(P.stopPropagation(),this._runSel=null,P.shiftKey||this._multiMode){this.wallToggle(A);return}(!this.wallSelection().includes(A)||this._wallSingle)&&this.wallChoose([A]);let V=this.wallSelection(),B=$(P);P.currentTarget.closest("svg").setPointerCapture(P.pointerId);let G=l.filter(tt=>V.includes(tt.id));if(V.length>1&&V.some(tt=>this.isFixedItem("furniture",tt)))return;if(V.length>1&&G.length){let tt=Math.min(...G.map(rt=>rt.s0));this.wallDrag={id:A,ids:V,w:Math.max(...G.map(rt=>rt.s1))-tt,x:B.x,y:B.y,base:this._doc,s0:tt,y0:0,lift:G.every(rt=>{let At=e.furniture.find(ue=>ue.id===rt.id);return!!At&&Se(At)}),moved:!1};return}let ct=l.find(tt=>tt.id===A),ot=e.furniture.find(tt=>tt.id===A);this.wallDrag={id:A,x:B.x,y:B.y,base:this._doc,s0:ct.s0,y0:ct.y0,lift:!!ot&&Se(ot),moved:!1}},L=P=>{if(!p||this._runMode)return;let A=$(P);if(P.shiftKey||this._multiMode){P.currentTarget.closest("svg").setPointerCapture(P.pointerId),this._wallFrame={x0:A.x,y0:A.y,x1:A.x,y1:A.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let V=o.rightward?A.x:r-A.x;this._wallGap=V>=0&&V<=r&&A.y>=0&&A.y<=a?this.wallGapAt(o,e,n,V,a-A.y):null},C=P=>{let A=this.wallResize;if(A){let Tt=$(P);A.moved=!0;let Rn=x([A.id]).map(qt=>d(qt)),io=qt=>{if(qt=Math.round(qt*100)/100,!P.altKey){for(let xe of Rn)if(Math.abs(qt-xe)<.04)return xe}return qt};if(A.side==="l"||A.side==="r"){let qt=A.side==="l"?Math.min(io(Tt.x),A.x1-.1):A.x0,xe=A.side==="r"?Math.max(io(Tt.x),A.x0+.1):A.x1,[In,Ws]=o.rightward?[qt,xe]:[r-xe,r-qt];this.resizeOnWall(o,A.id,In,Ws,null,null,A.base,!1)}else{let qt=Math.round((a-Tt.y)*100)/100;A.side==="t"?this.resizeOnWall(o,A.id,null,null,null,Math.max(A.y0+.05,Math.min(a,qt)),A.base,!1):this.resizeOnWall(o,A.id,null,null,Math.max(0,Math.min(A.y1-.05,qt)),null,A.base,!1)}return}let V=this._wallFrame;if(V){let Tt=$(P);this._wallFrame={...V,x1:Tt.x,y1:Tt.y};return}let B=this.wallDrag;if(!B)return;let G=$(P),ct=G.x-B.x,ot=B.y-G.y;if(!B.moved&&Math.hypot(ct,ot)<.02)return;B.moved=!0;let tt=l.find(Tt=>Tt.id===B.id),rt=B.ids?B.w??0:tt?tt.s1-tt.s0:0,At=B.s0+(o.rightward?ct:-ct);if(At=Math.round(At*100)/100,!P.altKey)for(let Tt of x(B.ids??[B.id]))Math.abs(At-Tt)<.04?At=Tt:Math.abs(At+rt-Tt)<.04&&(At=Tt-rt);if(B.ids){this.moveSetOnWall(o,B.ids,At-B.s0,B.lift?Math.round(ot*100)/100:null,B.base,!1);return}let ue=B.lift?Math.round((B.y0+ot)*100)/100:null;this.moveOnWall(o,B.id,At-B.s0,ue,B.base,!1)},E=()=>{let P=this.wallResize;if(P){this.wallResize=null,P.moved&&this.pushHistory(P.base);return}let A=this._wallFrame;if(A){this._wallFrame=null;let[B,G]=[Math.min(A.x0,A.x1),Math.max(A.x0,A.x1)],[ct,ot]=[Math.min(A.y0,A.y1),Math.max(A.y0,A.y1)],tt=l.filter(rt=>{let[At,ue]=u(rt.s0,rt.s1),Tt=At+ue/2,Rn=h((rt.y0+rt.y1)/2);return Tt>=B&&Tt<=G&&Rn>=ct&&Rn<=ot}).map(rt=>rt.id);tt.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(tt)])]);return}let V=this.wallDrag;this.wallDrag=null,V?.moved&&this.pushHistory(V.base)},O=P=>{if(this._runMode&&(P.key==="Escape"||P.key==="Enter")){P.preventDefault(),P.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(P.key==="Escape"){this._wallView=null;return}if((P.key==="Delete"||P.key==="Backspace")&&p&&J&&this._runSel&&!y.length&&!P.target.closest("input, select, textarea")){P.preventDefault();let ct=this._runSel.pipe;this.changePool(J.pool.id,ot=>ot.pipes=(ot.pipes??[]).filter(tt=>tt.id!==ct)),this._runSel=null;return}if((P.key==="Delete"||P.key==="Backspace")&&p&&y.length&&!P.target.closest("input, select, textarea")){P.preventDefault(),this.deleteOnWall(y);return}if(!_&&(P.key==="ArrowLeft"||P.key==="ArrowRight")){P.preventDefault(),H(P.key==="ArrowLeft"?D:F);return}if(!_||!p||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(P.key)||P.target.closest("input, select, textarea"))return;P.preventDefault();let A=P.shiftKey?.1:.01,V=P.key==="ArrowRight"?A:P.key==="ArrowLeft"?-A:0,B=o.rightward?V:-V,G=P.key==="ArrowUp"?A:P.key==="ArrowDown"?-A:0;if(v)return this.moveSetOnWall(o,y,B,G||null);this.moveOnWall(o,_.id,B,g&&G?_.y0+G:null)},I=v&&k?k:_,T=I?(()=>{let P=I,[A,V]=u(P.s0,P.s1),B=h(P.y0),G=Math.min(a+.25,h(0)+.25);return z`<g class="fp3d-wv-dims">
            ${A>.03?z`<line x1="0" y1=${G} x2=${A} y2=${G} /><text x=${A/2} y=${G-.05}>${S(A)}</text>`:b}
            ${r-A-V>.03?z`<line x1=${A+V} y1=${G} x2=${r} y2=${G} /><text x=${A+V+(r-A-V)/2} y=${G-.05}>${S(r-A-V)}</text>`:b}
            ${P.y0>.03?z`<line x1=${A+V/2} y1=${B} x2=${A+V/2} y2=${a} /><text x=${A+V/2+.05} y=${(B+a)/2} class="fp3d-wv-up">${S(P.y0)}</text>`:b}
          </g>`})():b,F=(t.edge+(o.rightward?1:-1)+i)%i,D=(t.edge+(o.rightward?-1:1)+i)%i,W=P=>this.t("wall_n",{a:P+1,b:(P+1)%i+1}),H=P=>this.openWallView(n.id,P);this._wallPicTick,this.askWallPics(o,l.map(P=>e.furniture.find(A=>A.id===P.id)).filter(P=>!!P));let N=`${n.id}:${t.edge}`,q=this.wvZoom?.key===N?this.wvZoom:null,Y=r+1,X=a+.9,Q=(P,A,V)=>{let B=Math.min(8,Math.max(1,P)),G=Y/B,ct=X/B;return{k:B,w:G,h:ct,x0:Math.min(-.5+Y-G,Math.max(-.5,A)),y0:Math.min(-.35+X-ct,Math.max(-.35,V))}},j=Q(q?.k??1,q?.x0??-.5,q?.y0??-.35),it=(P,A,V)=>{let B=Q(P,A,V);this.wvZoom=B.k<=1.001?null:{key:N,k:B.k,x0:B.x0,y0:B.y0},this.requestUpdate()},ut=(P,A,V)=>{let B=Math.min(8,Math.max(1,V));it(B,P-(P-j.x0)*j.k/B,A-(A-j.y0)*j.k/B)},Nt=P=>{let A=this.wvPinch,[V,B]=[...this.wvTouch.values()],G=Math.hypot(V.x-B.x,V.y-B.y),ct=(V.x+B.x)/2,ot=(V.y+B.y)/2,tt=P.getBoundingClientRect(),rt=Y/A.k,At=X/A.k,ue=Math.min(tt.width/rt,tt.height/At),Tt=tt.left+(tt.width-rt*ue)/2,Rn=tt.top+(tt.height-At*ue)/2,io=A.x0+(A.mx-Tt)/ue,qt=A.y0+(A.my-Rn)/ue,xe=Math.min(8,Math.max(1,A.k*G/Math.max(1,A.d))),In=ue*(xe/A.k),Ws=tt.left+(tt.width-Y/xe*In)/2,Bm=tt.top+(tt.height-X/xe*In)/2;it(xe,io-(ct-Ws)/In,qt-(ot-Bm)/In)};this.wvScale=1/Math.sqrt(j.k);let pt=Math.max(.09,Math.min(.16,r/40))*this.wvScale,Ie=this.canLayRuns?this.runPool:void 0,J=this.runCtx3d=Ie?{frame:o,floor:e,room:n,key:`${n.id}|${t.edge}`,L:r,H:a,gap:(Ee(e,n.id,o.a,o.b)?this._doc.settings.wall_interior/2:0)+$l,runs:qu(o,(Ie.pool?.pipes??[]).filter(P=>P.floor_id===e.id),dt(this._doc,e,Ie)),pool:Ie,pt:P=>{let A=$(P);return{s:o.rightward?A.x:r-A.x,y:a-A.y}}}:null;return m`<div class="fp3d-wv-veil" @click=${P=>P.target===P.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${O}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${W(D)}`} @click=${()=>H(D)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%i+1})} · ${this.m(r,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${W(F)}`} @click=${()=>H(F)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${p&&this.pipeRules&&this.runPool?m`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:b}
          ${J&&p&&!this._techMode?m`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:b}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(o,n,J)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${W(D)}`} @click=${()=>H(D)}>‹<small>${W(D)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${W(F)}`} @click=${()=>H(F)}>›<small>${W(F)}</small></button>
          ${this._wallView3d?b:m`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>ut(j.x0+j.w/2,j.y0+j.h/2,j.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${j.k<=1.001} @click=${()=>ut(j.x0+j.w/2,j.y0+j.h/2,j.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${j.k<=1.001} @click=${()=>it(1,-.5,-.35)}>⤢</button>
                ${j.k>1.001?m`<button class="fp3d-btn" aria-label="←" @click=${()=>it(j.k,j.x0-j.w*.3,j.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>it(j.k,j.x0+j.w*.3,j.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>it(j.k,j.x0,j.y0-j.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>it(j.k,j.x0,j.y0+j.h*.3)}>↓</button>`:b}
              </div>`}
        ${this._wallView3d?m`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${ec(P=>P&&this.setupWall3d(P,n,t.edge))}
              .hass=${this.rawHass}
              .home=${this.home}
              .building=${this._techMode?this.techDoc3d():this._doc3d}
              .floorId=${this._floorId}
              .roomId=${null}
              .wallMode=${"auto"}
              .explode=${!1}
              .markerMode=${"none"}
              .heatMode=${"none"}
              .theme=${"neon"}
              .packs=${this.packs}
              .showEnergy=${!1}
              .holograms=${!1}
              .flows=${!1}
              ?furnish=${p}
              .furnishTypes=${null}
              .selectedFurniture=${this._wallSel}
              .selectedSet=${y}
              .quality=${"auto"}
              .floorThumbs=${!1}
              .roomLabels=${!1}
              .floorStack=${"single"}
              .panelOpen=${!1}
              .alerts=${!1}
              .scenes=${!1}
              .central=${!1}
              @furniture-select=${P=>{let A=P.detail.id;A&&(this.shiftHeld||this._multiMode)?this.wallToggle(A):A?!this.wallSelection().includes(A)||this._wallSingle?this.wallChoose([A]):this._wallSel=A:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${P=>this.liftDown(P)} @pointermove=${P=>this.liftMove(P)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:m`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${j.x0} ${j.y0} ${j.w} ${j.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${P=>{P.preventDefault();let A=P.currentTarget,V=A.createSVGPoint();V.x=P.clientX,V.y=P.clientY;let B=V.matrixTransform(A.getScreenCTM().inverse());ut(B.x,B.y,j.k*Math.exp(-P.deltaY*.0015))}}
          @pointerdown=${P=>{if(P.pointerType==="touch"){if(this.wvTouch.set(P.pointerId,{x:P.clientX,y:P.clientY}),this.wvTouch.size===2){let[A,V]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(A.x-V.x,A.y-V.y),mx:(A.x+V.x)/2,my:(A.y+V.y)/2,k:j.k,x0:j.x0,y0:j.y0},this.wvTap=null,this.techPress=null,E(),this.runPointUp(),this.fitDrag=null,this.jointDrag=null;return}if(this.wvPinch)return;if(J&&this._runMode&&this.isEditor){P.stopPropagation();let A=J.pt(P);this.wvTap=A,this.techPress=A;return}}J&&this._runMode?(this.techPress=J.pt(P),this.runDown(P,J)):this._runSel?this._runSel=null:L(P)}}
          @pointermove=${P=>{if(this.wvTouch.has(P.pointerId)&&this.wvTouch.set(P.pointerId,{x:P.clientX,y:P.clientY}),this.wvPinch){this.wvTouch.size===2&&Nt(P.currentTarget);return}if(C(P),J&&this.jointDrag)this.jointMove(P,J);else if(J&&this.fitDrag)this.fittingMove(P,J);else if(J&&this.runDrag)this.runPointMove(P,J);else if(J&&this._runMode==="draw"&&this.techPress&&this.isEditor&&(P.buttons&1||P.pointerType==="touch")){let A=J.pt(P),V=this.techPress;if(!this._runDraft&&!this.techStroke&&Math.hypot(A.s-V.s,A.y-V.y)>.02&&(this.wvTap=null,this.runAt(J,V.s,V.y,!1,1,null)),this._runDraft&&!this.wvTap){let B=this.techStroke??=[this.techPress],G=B[B.length-1];Math.hypot(A.s-G.s,A.y-G.y)>.02&&B.push(A),this.runHover=[A.s,A.y],this.requestUpdate()}}else if(J&&this._runMode==="draw"&&this._runDraft){let A=J.pt(P);this.runHover=[A.s,A.y],this.requestUpdate()}}}
          @pointerup=${P=>{if(this.wvTouch.delete(P.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let A=this.wvTap;this.wvTap=null;let V=this.techStroke;this.techStroke=null;let B=V?V.reduce((ot,tt,rt)=>rt?ot+Math.hypot(tt.s-V[rt-1].s,tt.y-V[rt-1].y):0,0):0,G=J&&this._techMode&&this._runMode==="draw";if(V&&B>.12&&J&&this._runMode==="draw"&&this._runDraft)this.techPress=null,this.runHover=null,this.endStroke(J,V,J.pt(P));else if(G){let ot=this.techPress;if(this.techPress=null,this._runDraft=null,this.runHover=null,ot){let tt=this.runPick(J,ot.s,ot.y,!0);this._runSel=tt.pipe?{pipe:tt.pipe.id,pt:null}:null}}else A&&J&&this._runMode&&this.runAt(J,A.s,A.y,!1,1,null),this.techPress=null;E(),this.runPointUp(),this.fittingUp(J);let ct=this.jointDrag;this.jointDrag=null,ct?.moved?this.pushHistory(ct.base):ct&&J&&this.openCard(J.pool.id,`joint:${ct.id}`)}}
          @pointercancel=${P=>{this.wvTouch.delete(P.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,this.techStroke=null,E(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${pt}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${r} height=${a} />
          ${Array.from({length:Math.floor(a/.5)},(P,A)=>z`<line class="fp3d-wv-grid" x1="0" x2=${r} y1=${h((A+1)*.5)} y2=${h((A+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${h((A+1)*.5)+.03}>${((A+1)*.5).toFixed(1)}</text>`)}
          ${c.map(P=>{let[A,V]=u(P.s0,P.s1),B=e.openings.find(ct=>ct.id===P.id),G=B?.type==="window"?this.t("opening_window"):B?.type==="garage"?this.t("opening_garage"):this.t("opening_door");return z`<rect class="fp3d-wv-hole ${B?.type==="window"?"fp3d-wv-window":""}" x=${A} y=${h(P.y1)} width=${V} height=${P.y1-P.y0} />
              ${V>pt*3.5?z`<text class="fp3d-wv-hole-label" x=${A+V/2} y=${h(P.y1)+pt*1.3} style="font-size:${pt*.85}px">${G}</text>`:b}`})}
          ${l.map(P=>{let[A,V]=u(P.s0,P.s1),B=e.furniture.find(rt=>rt.id===P.id),G=B.name||Ft(this.hass,B.type),ct=P.y1-P.y0,ot=this.wallPics.get(this.wallPicKey(o,B)),tt=d(gt(o,[B.x,B.z]).s);return z`<g class="fp3d-wv-item ${ot?"fp3d-wv-pic":""} ${P.id===this._wallSel||y.includes(P.id)?"fp3d-wv-sel":""}" @pointerdown=${rt=>R(rt,P.id)} @dblclick=${()=>{if(e.furniture.find(At=>At.id===P.id)?.group&&!this._wallSingle){this.wallChoose([P.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",P.id)}}>
              ${ot?z`<image href=${ot.url} x=${tt+ot.x0} y=${h(P.y0+ot.y1)} width=${ot.x1-ot.x0} height=${ot.y1-ot.y0} preserveAspectRatio="none" />`:b}
              <rect x=${A} y=${h(P.y1)} width=${V} height=${Math.max(.02,ct)}><title>${G}</title></rect>
              ${!ot&&V>pt*3&&ct>pt*1.4?z`<text x=${A+V/2} y=${h(P.y1)+Math.min(ct/2,pt*1.6)+pt*.35} style="font-size:${pt}px">${G}</text>`:b}
            </g>`})}
          ${T}
          ${_&&f&&!v&&p&&!f.locked&&l.some(P=>P.id===_.id)?(()=>{let[P,A]=u(_.s0,_.s1),V=h(_.y1),B=h(_.y0),G=pt*.75,ct=this.alongAxis(o,f),ot=tt=>rt=>{rt.stopPropagation(),rt.currentTarget.closest("svg").setPointerCapture(rt.pointerId),this.wallResize={id:_.id,side:tt,x0:P,x1:P+A,y0:_.y0,y1:_.y1,base:this._doc,moved:!1}};return z`<g class="fp3d-wv-handles">
                  ${ct?z`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${P-G/2} y=${(V+B)/2-G} width=${G} height=${G*2} rx=${G/3} @pointerdown=${ot("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${P+A-G/2} y=${(V+B)/2-G} width=${G} height=${G*2} rx=${G/3} @pointerdown=${ot("r")} />`:b}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${P+A/2-G} y=${V-G/2} width=${G*2} height=${G} rx=${G/3} @pointerdown=${ot("t")} />
                  ${_.y0>.05&&Se(f)?z`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${P+A/2-G} y=${B-G/2} width=${G*2} height=${G} rx=${G/3} @pointerdown=${ot("b")} />`:b}
                  <text class="fp3d-wv-size" x=${P+A/2} y=${V-G*.9} style="font-size:${pt*.85}px">${S(_.s1-_.s0)} × ${S(_.y1-_.y0)}</text>
                </g>`})():b}
          ${v&&k?(()=>{let[P,A]=u(k.s0,k.s1),V=!this._wallMulti.length;return z`<g class=${`fp3d-wv-setframe${V?" fp3d-wv-setblock":""}`}><rect x=${P-.03} y=${h(k.y1)-.03} width=${A+.06} height=${k.y1-k.y0+.06} /><text x=${P} y=${h(k.y1)-.07} style="font-size:${pt*.85}px">${V?`\u25A3 ${this.t("block_title")} \xB7 ${y.length}`:this.t("multi_title",{n:y.length})}</text></g>`})():b}
          ${this._wallGap?(()=>{let P=this._wallGap,[A,V]=u(P.s0,P.s1),B=P.low?Math.min(a,.9):Math.min(a,2.2),G=P.low?0:1.3;return z`<g class="fp3d-wv-gap"><rect x=${A} y=${h(B)} width=${V} height=${B-G} /><text x=${A+V/2} y=${h((B+G)/2)} style="font-size:${pt}px">${S(V)}</text></g>`})():b}
          ${this._wallFrame?z`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:b}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${r+.3} y1=${a} y2=${a} />
          ${J?this.renderRuns(J,d,h):b}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${J&&this._techMode&&!this._runDraft&&!this._runSel&&!_&&(this._runMode==="draw"||this._runMode==="feed")?m`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(J)}`:J&&(this._runMode||this._runSel&&!_)?this.renderRunFoot(J):v&&p?this.renderWallSetFoot(o,y,k,u):_&&f?m`<b>${f.name||Ft(this.hass,f.type)}</b>
                ${this.fixButton("furniture",_.id)}
                ${f.group&&p?m`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:b}
                ${J&&Ht.includes(f.type)?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(J.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:b}
                ${f.locked&&p?m`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:b}
                ${this.len(this.t("wall_view_left"),Math.round(u(_.s0,_.s1)[0]*1e3)/1e3,P=>{let A=P-u(_.s0,_.s1)[0];this.moveOnWall(o,_.id,o.rightward?A:-A,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,_.d)*1e3)/1e3,P=>this.moveFromWall(o,_.id,P-_.d),.01,0)}
                ${p&&!f.locked&&this.alongAxis(o,f)?this.len(this.t("width"),Math.round((_.s1-_.s0)*1e3)/1e3,P=>{let A=Math.max(.05,P);o.rightward?this.resizeOnWall(o,_.id,_.s0,_.s0+A,null,null):this.resizeOnWall(o,_.id,_.s1-A,_.s1,null,null)},.01,.05):b}
                ${p&&!f.locked?this.len(this.t("height_m"),Math.round((_.y1-_.y0)*1e3)/1e3,P=>this.resizeOnWall(o,_.id,null,null,null,_.y0+Math.max(.03,P)),.01,.03):b}
                ${g?this.len(this.t("mount_height"),Math.round(_.y0*1e3)/1e3,P=>this.moveOnWall(o,_.id,0,P),.01,0):m`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${p&&!f.locked?m`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,P=>this.turnOnWall(f.id,P),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:b}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",_.id)}}>${this.t("wall_view_form")}</button>
                ${p?m`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([_.id])}>${this.t("delete")}</button>`:b}`:m`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${p&&!this._techMode?this.renderMultiToggle():b}
        </div>
      </div>
    </div>`}renderWallSetFoot(t,e,n,i){let o=!this._wallMulti.length,r=e.every(l=>this.isFixedItem("furniture",l)),a=!r&&e.some(l=>this.isFixedItem("furniture",l));return m`<b>${o?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</b>
      ${a?m`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:b}
      ${o?m`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let l=this._wallSel;this._wallMulti=e,this.ungroupSelectionOf(e),this._wallSel=l}}>${this.t("block_break")}</button>`:m`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(e),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,l=>{let c=l-i(n.s0,n.s1)[0];this.moveSetOnWall(t,e,t.rightward?c:-c,null)},.01,0):b}
      <button class="fp3d-btn ${a?"fp3d-primary":""}" @click=${()=>{let l=new Set(e),c=!r&&!a;this.change((d,u)=>{for(let h of u.furniture)l.has(h.id)&&(h.locked=c||null)})}}>${r?`\u{1F513} ${this.t("unfix")}`:a?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(e)}>${this.t("delete")}</button>`}async deleteOnWall(t){if(!t.length||!this.isEditor)return;if(t.length>1){if(!await this.ask(this.t(t.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:t.length})))return}else if(!await this.confirmFixedDelete("furniture",t[0]))return;let e=new Set(t);this.change((n,i)=>i.furniture=i.furniture.filter(o=>!e.has(o.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(t){let e=new Set(t),n=U("block");this.change((i,o)=>{for(let r of o.furniture)e.has(r.id)&&(r.group=n)})}ungroupSelectionOf(t){let e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)})}addOnWall(t,e,n){let i=this.floor;if(!i||!this.isEditor)return;this.rememberWallType(t);let o=this._wallGap;if(o)return this.addIntoGap(t,e,n,o);let[r,a,l]=$t(t),c=[...Ge(e,i,n).map(g=>[g.s0,g.s1]),...Un(e,i).filter(g=>g.y0<.05).map(g=>[g.s0,g.s1])],d=Math.max(0,e.length/2-r/2);for(let g=.1;g+r<=e.length-.05;g+=.05)if(!c.some(([y,v])=>g<v+.05&&g+r>y-.05)){d=g;break}let u=Ee(i,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[h,p]=be(e,d+r/2,u+a/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),_={id:U("furniture"),type:t,x:M(h),z:M(p),rotation:f,w:r,d:a,h:l,variant:null};this.change((g,y)=>y.furniture.push(_)),this._runSel=null,this._runMode=null,this._wallSel=_.id}addIntoGap(t,e,n,i){let o=this.floor,r=i.s1-i.s0,[a,l,c]=$t(t);Cs.has(t)&&(a>r+.005||r-a<.1)&&(a=Math.round(r*1e3)/1e3);let d=Ee(o,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,u=i.s0+Math.min(a,r)/2,[h,p]=be(e,u,d+l/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),_={id:U("furniture"),type:t,x:M(h),z:M(p),rotation:f,w:a,d:l,h:c,variant:null};this.change((g,y)=>y.furniture.push(_)),this._wallGap=null,this._wallSel=_.id,this._wallMulti=[]}rememberWallType(t){try{let e=JSON.parse(localStorage.getItem("home3d.wallRecent")??"[]");localStorage.setItem("home3d.wallRecent",JSON.stringify([t,...e.filter(n=>n!==t)].slice(0,6)))}catch{}}wallRecent(){try{let t=JSON.parse(localStorage.getItem("home3d.wallRecent")??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"&&(Io.includes(e)||!!ft(e))):[]}catch{return[]}}renderWallFurniture(t,e){let n=this.hass?.language??"en",i=this._wallGap,o=i?i.s1-i.s0:0,r=Nm(this._wallQuery.trim()),a=this._wallCat,l=(this.packs??[]).flatMap(y=>y.items.filter(v=>!v.light&&!v.vehicle&&!v.hole&&v.mount!=="ceiling").map(v=>({type:Dt(y.id,v.id),label:jt(v,n),search:`${Object.values(v.name).join(" ")} ${y.name}`,wall:v.mount==="wall"}))),c=y=>this.t(`furn_${y}`),d=[];a==="pack"?d=l:a==="energy"?d=["meter","inverter","home_battery","wallbox"].map(y=>({type:y,label:c(y),search:""})):a?d=(xl[a]??[]).map(y=>({type:y,label:c(y),search:Wt(El,`furn_${y}`)})):r||i?d=[...Object.values(xl).flat().filter((y,v,w)=>w.indexOf(y)===v).map(y=>({type:y,label:c(y),search:Wt(El,`furn_${y}`)})),...l]:this.wallRecent().length||(d=xl.base.map(y=>({type:y,label:c(y),search:""})));let u=r.split(/\s+/).filter(Boolean),h=u.length?d.filter(y=>u.every(v=>Nm(`${y.label} ${y.search} ${y.type.replace(/[_:.]/g," ")}`).includes(v))):d;if(i){let y=(v,w)=>w||C0.has(v);h=h.filter(v=>y(v.type,v.wall)===!i.low).filter(v=>$t(v.type)[0]<=o+.01||Cs.has(v.type)&&o>=(D0[v.type]??.2)).sort((v,w)=>{let k=S=>Cs.has(S)?1:Math.min(1,$t(S)[0]/o);return k(w.type)-k(v.type)||Number(v.type.startsWith("pack:"))-Number(w.type.startsWith("pack:"))})}let p=!a&&!r&&!i?this.wallRecent():[],f=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],["switches","\u{1F50C}"],...(this.packs??[]).some(y=>y.items.length)?[["pack","\u{1F9E9}"]]:[],...vt("energy_pro")?[["energy","\u26A1"]]:[]],_=[...p,...h.slice(0,40).map(y=>y.type)];this.askKitPics(_),this._wallPicTick;let g=(y,v)=>{let w=$t(y)[0],k=i&&Cs.has(y)&&(w>o+.005||o-w<.1),S=this.kitPics.get(y);return m`<button class="fp3d-wv-tile" title=${v} @click=${()=>this.addOnWall(y,t,e)}>
        <span class="fp3d-wv-tile-pic">${S?m`<img src=${S} alt="" />`:m`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${v}</span>
        <small class=${k?"fp3d-wv-fit":""}>${k?`\u2194 ${this.m(o,2)}`:this.m(w,2)}</small>
      </button>`};return m`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${f.map(([y,v])=>m`<button class="fp3d-wv-cat ${a===y?"fp3d-on":""}" title=${this.t(`wv_cat_${y}`)} @click=${()=>this._wallCat=a===y?null:y}><span>${v}</span>${this.t(`wv_cat_${y}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${y=>this._wallQuery=y.target.value} />
      ${i?m`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(o,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!a&&!r?m`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:b}
      ${a?m`<h4>${this.t(`wv_cat_${a}`)}</h4>`:b}
      ${p.length?m`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${p.map(y=>g(y,ft(y)?jt(ft(y),n):c(y)))}</div>`:b}
      ${(a||r||i)&&!h.length?m`<p class="fp3d-sub">${this.t(i?"wv_none_fits":"furniture_search_none")}</p>`:b}
      <div class="fp3d-wv-tiles">${h.slice(0,40).map(y=>g(y.type,y.label))}</div>
    </aside>`}async askKitPics(t){let e=t.filter(n=>!this.kitPicsAsked.has(n));if(e.length){for(let n of e)this.kitPicsAsked.add(n);try{let[n]=await Promise.all([Xi(),this.hass?en(this.hass,e):void 0]);for(let i of e){let[o,r,a]=$t(i);this.kitPics.set(i,n.furniturePreview({type:i,w:o,d:r,h:a,variant:null,lamp:yi[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(t,e,n){let i=!!n,o=vt("energy_pro");if(!i)return this.isEditor?this.renderWallFurniture(t,e):b;if(this._techMode&&n)return this.renderTechKit(t,e,n);if(!this.isEditor||!i&&!o)return b;let r=l=>m`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,t,e)}>+ ${this.t(`furn_${l}`)}</button>`,a=(l,c)=>m`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(c)}</button>`;return m`<aside class="fp3d-wv-kit">
      ${i?m`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(r)} ${a("valve","wall_run_valve")} ${a("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>m`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:b}
      ${o?m`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(r)}`:b}
    </aside>`}get runPool(){return this.poolArea??this.floor?.outdoor.find(t=>t.type==="pool"&&t.points.length>=3)}get canLayRuns(){return(ia()||this._techMode)&&!!this.runPool}runFrame(t){let[e,n]=t.split("|"),i=this.floor?.rooms.find(o=>o.id===e);return i&&Number(n)<i.points.length?Ue(i,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(a=>a.outdoor.some(l=>l.id===t.pool)),o=i?.outdoor.find(a=>a.id===t.pool);if(!i||!o)return this._doc;o.pool??={};let r={id:"__draft",from:t.from,to:"",floor_id:i.id,points:e.map(a=>[a[0],a[2]]),heights:e.map(a=>a[1])};return o.pool.pipes=[...o.pool.pipes??[],r],n}runLast(t,e){if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=dt(this._doc,e.floor,e.pool);if(t.extend){let o=e.pool.pool?.pipes?.find(a=>a.id===t.extend.pipe),r=o?le(o,n):[];return(t.extend.end==="to"?r[r.length-1]:r[0])??null}let i=n(t.from);return i?[i.x,i.y,i.z]:null}runPick(t,e,n,i=!1){if(!i){for(let l of t.runs)for(let c of l.ends)if(Math.hypot(c.s-e,c.y-n)<.12)return{end:{pipe:l.id,end:c.end}}}let o=dt(this._doc,t.floor,t.pool),r=null,a=[...t.floor.furniture.filter(l=>Ht.includes(l.type)).flatMap(l=>qe(l.type).length?qe(l.type).map(c=>`dev:${l.id}:${c}`):[`dev:${l.id}`]),...(t.pool.pool?.joints??[]).map(l=>l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`)];for(let l of i?[]:a){let c=o(l);if(!c)continue;let d=gt(t.frame,[c.x,c.z]);if(d.d<-.3||d.d>1.6)continue;let u=Math.hypot(d.s-e,c.y-n);u<.12&&(!r||u<r.d)&&(r={node:l,d:u})}if(r)return{node:r.node};if(this._techMode&&!i){let l=t.floor.furniture.find(c=>{if(!Ht.includes(c.type)||c.type==="pool_valve")return!1;let d=Qt(c).map(h=>gt(t.frame,h));if(Math.min(...d.map(h=>h.d))>1.6||Math.max(...d.map(h=>h.d))<-.3)return!1;let u=Kt(t.floor,c);return Math.min(...d.map(h=>h.s))-.03<=e&&e<=Math.max(...d.map(h=>h.s))+.03&&u-.03<=n&&n<=u+c.h+.03});if(l)return{node:`dev:${l.id}`}}for(let l of t.runs)for(let c of l.pieces){let[d,u]=[c.s1-c.s0,c.y1-c.y0],h=d*d+u*u,p=h>0?Math.max(0,Math.min(1,((e-c.s0)*d+(n-c.y0)*u)/h)):0,[f,_]=[c.s0+d*p,c.y0+u*p];if(Math.hypot(f-e,_-n)<(i?.24:.07))return{pipe:{id:l.id,p:ve(t.frame,f,_,c.d0+(c.d1-c.d0)*p)}}}return{}}eraseAt(t,e,n){let i=(l,c,d)=>Math.hypot(l-e,c-n)<d;for(let l of t.runs)for(let c of l.fittings)if(i(c.s,c.y,.1*Math.max(1,this.wvScale))){this.changePool(t.pool.id,d=>{let u=d.pipes?.find(h=>h.id===l.id);u&&(u.fittings=(u.fittings??[]).filter(h=>h.id!==c.id))});return}let o=dt(this._doc,t.floor,t.pool),r=(t.pool.pool?.joints??[]).find(l=>{let c=l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`,d=o(c);if(!d)return!1;let u=gt(t.frame,[d.x,d.z]);return u.d>-.3&&u.d<1.6&&i(u.s,d.y,.1)});if(r){let l=`joint:${r.id}`;this.changePool(t.pool.id,c=>{c.joints=(c.joints??[]).filter(d=>d.id!==r.id),c.pipes=(c.pipes??[]).filter(d=>ye(d.from)!==l&&ye(d.to)!==l)}),this._runSel=null;return}let a=this.runPick(t,e,n,!0);if(a.pipe){let l=a.pipe.id;this.changePool(t.pool.id,c=>c.pipes=(c.pipes??[]).filter(d=>d.id!==l)),this._runSel=null}}runDown(t,e){if(!this._runMode||!this.isEditor||(t.stopPropagation(),this._techAsk=null,this._techMode&&this._runMode==="draw"))return;let{s:n,y:i}=e.pt(t);this.runAt(e,n,i,t.altKey,t.detail,null)}runDown3d(t){let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isEditor||!this._wallView3d)return;let n=this.wall3dEl?.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[o,r]=[t.clientX-i.left,t.clientY-i.top],a=n.furnitureIdAt(o,r),l=a?e.floor.furniture.find(v=>v.id===a&&Ht.includes(v.type)):void 0,c=n.pointerRay(o,r),d=be(e.frame,0,e.gap),u=e.frame.n,h=c.d[0]*u[0]+c.d[2]*u[1];if(Math.abs(h)<1e-6)return;let p=((d[0]-c.o[0])*u[0]+(d[1]-c.o[2])*u[1])/h;if(p<=0&&!l)return;let f=[c.o[0]+c.d[0]*p,c.o[1]+c.d[1]*p,c.o[2]+c.d[2]*p],_=e.floor.elevation+(n.floorMap.get(e.floor.id)?.y??0),g=dt(this._doc,e.floor,e.pool),y=()=>{let v=qe(l.type);if(!v.length)return`dev:${l.id}`;let w=k=>{let S=g(k),$=[S.x-c.o[0],S.y+_-c.o[1],S.z-c.o[2]],x=$[0]*c.d[0]+$[1]*c.d[1]+$[2]*c.d[2];return Math.hypot($[0]-c.d[0]*x,$[1]-c.d[1]*x,$[2]-c.d[2]*x)};return v.map(k=>`dev:${l.id}:${k}`).sort((k,S)=>w(k)-w(S))[0]};this.runAt(e,gt(e.frame,[f[0],f[2]]).s,f[1]-_,t.altKey,t.detail,l&&this._runMode==="draw"?y():null)}runAt(t,e,n,i,o,r){let a=this._runMode;if(!a)return;if(a==="tee"&&this._techMode){let d=this.runPick(t,e,n,!0);d.pipe&&this.teeOnPipe(t,d.pipe.id,d.pipe.p);return}if(a==="hole_wall"||a==="hole_floor"||a==="tee"||a==="y")return this.placeJoint(t,a,e,n);if(a==="feed")return this.placeFeed(t,e,n);if(a==="erase")return this.eraseAt(t,e,n);let l=r?{node:r}:this.runPick(t,e,n,a!=="draw");if(a!=="draw"){if(!l.pipe&&this._techMode)return;l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,a),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let c=this._runDraft;if(c&&this._techMode&&!this.techStroke&&((c.pts.length>=2||(c.extend||c.fromT||c.from)&&c.pts.length)&&this.finishRun("",null),this._runDraft=null,c=null),!c){let d={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},u;l.end?u={...d,extend:l.end}:l.node?u={...d,from:l.node}:l.pipe?u={...d,fromT:l.pipe.p}:u={...d,pts:[ve(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...u,anchor:this.runLast({...u,pts:[]},t)};return}if(o>=2)return void this.finishRun("",null);if(l.node&&l.node!==c.from)return void this.finishRun(l.node,null);if(l.pipe)return void this.finishRun("",l.pipe.p);this._runDraft={...c,pts:[...c.pts,...this.runStep(c,t,e,n,i)],wall:t.key,d:t.gap}}runStep(t,e,n,i,o){let r=Math.round(n*20)/20,a=Math.round(i*20)/20,l=[],c=this.runLast(t,e);if(c&&t.wall!==e.key){let d=this.runFrame(t.wall),u=d&&Bu(d,t.d,e.frame,e.gap);u&&(c=[M(u[0]),c[1],M(u[1])],l.push(c))}if(c&&!o){let d=gt(e.frame,[c[0],c[2]]);d.d>-.35&&d.d<.6&&(Math.abs(r-d.s)<Math.abs(a-c[1])?r=d.s:a=c[1])}return l.push(ve(e.frame,r,a,e.gap)),l.map(d=>[M(d[0]),M(d[1]),M(d[2])])}finishRun(t,e,n=[],i){let o=this._runDraft,r=this.floor,a=this.pipeRules;if(this._runDraft=null,!o||!r||!a)return null;let l=[...o.pts,...n],c=this._techMode?this.runFrame(o.wall):null,d=this._techMode?this.floor?.outdoor.find(h=>h.id===o.pool):void 0;if(c&&d&&!n.length&&(t||e)){let h=l.length?l[l.length-1]:(()=>{let f=o.from?dt(this._doc,r,d)(o.from):null;return f?[f.x,f.y,f.z]:o.fromT})(),p=e?{x:e[0],y:e[1],z:e[2]}:dt(this._doc,r,d)(t);if(h&&p){let f=gt(c,[h[0],h[2]]),_=gt(c,[p.x,p.z]);Math.abs(f.s-_.s)>.03&&Math.abs(h[1]-p.y)>.03&&l.push(ve(c,_.s,h[1],o.d))}}if(!l.length&&!e&&(!t||t===o.from)&&!o.fromT)return null;let u=null;return this.changePool(o.pool,(h,p)=>{let f=h.joints??=[],_=h.pipes??=[],g=dt(this._doc,r,p),y=F=>{let D=F.startsWith("joint:")?f.find(W=>`joint:${W.id}`===F):void 0;return D?{x:D.x,z:D.z,y:D.y}:g(F)},v=F=>{let D=null;for(let H of _){let N=Gn(le(H,y),F);N&&N.d<.12&&(!D||N.d<D.d)&&(D={pipe:H,d:N.d})}let W=D&&ts(D.pipe,y,F,U("joint"),U("pipe"));return!D||!W?"":(f.push(W.joint),_.splice(_.indexOf(D.pipe),1,W.first,W.second),`joint:${W.joint.id}:out2`)},w=(F,D=[])=>{let{kind:W,id:H,port:N}=lt(F),q=W==="joint"&&!N?f.find(Q=>Q.id===H):void 0;if(!q||!q.kind)return F;if(q.kind==="wall"||q.kind==="floor")return`joint:${H}:inside`;let Y=new Set([..._.flatMap(Q=>[Q.from,Q.to]),...D]),X=qn(q.kind).find(Q=>!Y.has(`joint:${H}:${Q}`));return X?`joint:${H}:${X}`:F},k=o.fromT?v(o.fromT):w(o.from),S=e?v(e):w(t,[k]),$=r.furniture.filter(F=>Ht.includes(F.type)).map(F=>({id:F.id,type:F.type})),x=F=>_.flatMap(D=>[D.from,D.to]).filter(D=>ye(D)===F).map(D=>lt(D).port).filter(D=>!!D),R=F=>{let{kind:D,id:W}=lt(F);return D==="port"?p.pool?.ports?.find(H=>H.id===W)?.kind==="waste":D==="joint"&&/kanal|waste|abwasser|backwash/i.test(f.find(H=>H.id===W)?.name??"")},L=(F,D)=>{let{kind:W,id:H,port:N}=lt(F);if(W!=="dev"||N)return F;let q=r.furniture.find(X=>X.id===H)?.type??"",Y=a.autoPort(q,D?a.nodeFlow(D,p,$):null,R(D),x(`dev:${H}`));return Y?`dev:${H}:${Y}`:F};k=L(k,S),S=L(S,k);let C=l.map(F=>[M(F[0]),M(F[2])]),E=l.map(F=>M(F[1])),O=o.extend,I=O&&_.find(F=>F.id===O.pipe);if(O&&I){Object.assign(I,Zt(I,y)),O.end==="to"?(I.points=[...I.points,...C],I.heights=[...I.heights??[],...E],I.to=S):(I.points=[...C.reverse(),...I.points],I.heights=[...E.reverse(),...I.heights??[]],I.from=S),i!==void 0&&(I.height=i),u=I.id;return}let T={id:U("pipe"),from:k,to:S,floor_id:r.id,points:C,heights:E,height:i??E[E.length-1]??null};T=a.orientPipe(T,k?a.nodeFlow(k,p,$):null,S?a.nodeFlow(S,p,$):null),_.push(T),u=T.id}),u&&!this._techMode&&(this._runSel={pipe:u,pt:null}),this._runMode=this._techMode?"draw":null,u}teeOnPipe(t,e,n){let i=dt(this._doc,t.floor,t.pool);this.changePool(t.pool.id,o=>{let r=[...o.pipes??[]],a=r.findIndex(c=>c.id===e);if(a<0)return;let l=ts(r[a],i,n,U("joint"),U("pipe"));l&&(o.joints=[...o.joints??[],l.joint],r.splice(a,1,l.first,l.second),o.pipes=r)}),this._runMode="draw"}placeFeed(t,e,n){let i=this._feedKind;this._feedKind=null,this._runMode="draw",i&&this.feedAt(t,i,e,n)}feedAt(t,e,n,i){let o=this.floor;if(!o)return null;let r=Math.round(n*20)/20,a=i<.25,l=t.gap-$l,c=Ee(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d=this.t(`feed_${e}`),[u,h]=En(t.frame,r,a?t.gap:l),p=a?{id:U("joint"),kind:"floor",x:u,z:h,y:0,name:d}:{id:U("joint"),kind:"wall",x:u,z:h,y:Math.round(i*20)/20,nx:M(t.frame.n[0]),nz:M(t.frame.n[1]),depth:M(c),name:d};return this.changePool(t.pool.id,(f,_)=>{f.joints=[...f.joints??[],p];let g=(f.ports??[]).filter(S=>S.kind===e);if(e==="waste"&&!g.length){let S=Ye(p,"outside"),$={id:U("port"),kind:"waste",x:M(S.x-t.frame.n[0]*1),z:M(S.z-t.frame.n[1]*1)};f.ports=[...f.ports??[],$],g=[$]}if(!g.length)return;let y=dt(this._doc,o,_),v=S=>{let{kind:$,id:x,port:R}=lt(S),L=$==="joint"?(f.joints??[]).find(E=>E.id===x):void 0;if(L)return Ye(L,R);let C=$==="port"?(f.ports??[]).find(E=>E.id===x):void 0;return C?y(S)??{x:C.x,y:.02,z:C.z}:y(S)},w=S=>{let{kind:$,id:x}=lt(S);if($==="port"){let R=(f.ports??[]).find(L=>L.id===x);return R?ta(R.kind):null}return null},k=Yn({from:`joint:${p.id}:outside`,vias:[],to:g.map(S=>`port:${S.id}`),floorId:o.id},v,f.joints??[],w,S=>U(S));f.joints=[...f.joints??[],...k.joints],f.pipes=[...f.pipes??[],...k.pipes]}),p}endStroke(t,e,n){let i=this._runDraft;if(!i)return;let o=this.runLast(i,t),r=o?gt(t.frame,[o[0],o[2]]):null,a=r&&r.d>-.35&&r.d<.6?{s:r.s,y:o[1]}:e[0],l=W0([a,...Rl(e,.08),n]),c=l.slice(1,-1).map(f=>{let _=ve(t.frame,f.s,f.y,t.gap);return[M(_[0]),M(_[1]),M(_[2])]}),d=this.runPick(t,n.s,n.y);if(this._techAsk=null,d.node&&d.node!==i.from){this.finishRun(d.node,null,c);return}if(d.pipe){this.finishRun("",d.pipe.p,c);return}let u=l[l.length-1],h=ve(t.frame,Math.round(u.s*20)/20,Math.round(u.y*20)/20,t.gap),p=this.finishRun("",null,[...c,[M(h[0]),M(h[1]),M(h[2])]]);p&&(this._techAsk={s:u.s,y:u.y,pipe:p})}answerAsk(t,e){let n=this._techAsk;if(this._techAsk=null,!n)return;if(e==="cancel"){this.changePool(t.pool.id,o=>o.pipes=(o.pipes??[]).filter(r=>r.id!==n.pipe));return}if(!e)return;let i=this.feedAt(t,e,n.s,n.y);i&&this.changePool(t.pool.id,o=>{let r=o.pipes?.find(a=>a.id===n.pipe);r&&(r.to?r.from||(r.from=`joint:${i.id}:inside`):r.to=`joint:${i.id}:inside`)})}renderTechKit(t,e,n){let i=n.pool,o=this.pipeRules;if(!o)return b;let r=d=>m`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(d,t,e)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(d)?m`<img src=${this.kitPics.get(d)} alt="" />`:m`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${d}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let a=["skimmer","drain","inlet","waste"].filter(d=>d==="waste"||(i.pool?.ports??[]).some(u=>u.kind===d)),l=(d,u)=>m`<button class="fp3d-btn ${this._runMode===d?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===d?"draw":d}}>+ ${this.t(u)}</button>`,c=this._techAsk;return m`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${c?m`<div class="fp3d-tech-ask">
            <b>${this.t("tech_ask")}</b>
            ${["skimmer","drain","inlet","waste"].map(d=>m`<button class="fp3d-btn fp3d-tech-feed" @click=${()=>this.answerAsk(n,d)}><i>${d==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${d}`)}</button>`)}
            <button class="fp3d-btn" @click=${()=>this.answerAsk(n,null)}>${this.t("tech_ask_loose")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.answerAsk(n,"cancel")}>${this.t("delete")}</button>
          </div>`:this.renderTechStep(n)}
      <div class="fp3d-seg fp3d-tech-pen" role="group">
        <button aria-pressed=${this._runMode==="draw"} @click=${()=>{this._runMode="draw",this._runSel=null}}><span>✏</span>${this.t("tech_draw")}</button>
        <button aria-pressed=${this._runMode!=="draw"&&this._runMode!=="feed"&&this._runMode!=="erase"} @click=${()=>{this._runDraft=null,this._runMode=null}}><span>✋</span>${this.t("tech_pick")}</button>
        <button aria-pressed=${this._runMode==="erase"} title=${this.t("tech_erase_hint")} @click=${()=>{this._runDraft=null,this._runSel=null,this._feedKind=null,this._runMode=this._runMode==="erase"?"draw":"erase"}}><span>🧽</span>${this.t("tech_erase")}</button>
      </div>
      <button class="fp3d-btn fp3d-tech-undo" ?disabled=${!this._canUndo} title="Ctrl+Z" @click=${()=>{this._runDraft=null,this.undo()}}>↶ ${this.t("undo")}</button>
      <h4>${this.t("tech_feeds")}</h4>
      ${a.map(d=>{let u=o.feedDone(i,d);return m`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===d?"fp3d-primary":""} ${u?"fp3d-on":""}" ?disabled=${u} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===d?null:d,this._runMode=this._feedKind?"feed":"draw"}}><i>${d==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${d}`)}${u?m`<small>✓</small>`:b}</button>`})}
      ${(i.pool?.ports??[]).some(d=>d.kind!=="waste")?b:m`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(r)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${l("valve","wall_run_valve")} ${l("sight","wall_run_sight")}
      <button class="fp3d-btn ${this._runMode==="tee"?"fp3d-primary":""}" title=${this.t("tech_step_tee")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode==="tee"?"draw":"tee"}}>+ ${this.t("joint_add_tee")}</button>
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(t){let e=t.pool,n=this.pipeRules;if(!n)return b;let i=e.pool?.ports??[],o=t.floor.furniture.filter(p=>Ht.includes(p.type)),r=(p,f)=>m`<div class="fp3d-tech-step ${p===null?"fp3d-done":""}"><b>${p===null?"\u2713":this.t("tech_step",{n:p})}</b>${f}</div>`;if(this._runMode==="feed")return r(1,this.t("tech_feed_place"));if(this._runMode==="erase")return m`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return r(4,this.t("tech_step_fit"));if(this._runMode==="tee")return r(4,this.t("tech_step_tee"));if(this._runDraft)return r(3,this.t("tech_step_drawing"));if(!i.some(p=>p.kind!=="waste"))return r(1,this.t("tech_no_ports"));let a=["skimmer","drain","inlet"].find(p=>i.some(f=>f.kind===p)&&!n.feedDone(e,p));if(a)return r(1,this.t("tech_step_feed",{name:this.t(`feed_${a}`)}));let l=o.find(p=>p.type==="pool_pump"),c=o.find(p=>p.type==="pool_filter");if(!l||!c)return r(2,this.t("tech_step_devices"));let d=n.issues(e,o.map(p=>({id:p.id,type:p.type}))),u=p=>this.poolNodeLabel(e,p),h=d.find(p=>p.kind==="port");if(h){let{port:p}=lt(h.node),f={suction:this.t("feed_skimmer"),pressure:u(`dev:${c.id}:pump`),pump:u(`dev:${l.id}:pressure`),return:o.some(_=>_.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:u(`dev:${c.id}:return`),out:this.t("feed_inlet")};return r(3,this.t("tech_step_line",{a:p?f[p]??"\u2026":"\u2026",b:u(h.node)}))}return d.some(p=>p.kind==="loose")?r(3,this.t("tech_step_loose")):r(null,this.t("tech_ok"))}renderTechIssues(t){let e=t.floor.furniture.filter(a=>Ht.includes(a.type)).map(a=>({id:a.id,type:a.type})),n=this.pipeRules;if(!n)return b;let i=n.issues(t.pool,e);if(!i.length)return m`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let o=i.filter(a=>a.kind==="loose").length,r=[...o?[this.t("tech_issue_loose",{n:o})]:[],...i.filter(a=>a.kind==="port").map(a=>this.t("tech_issue_port",{name:this.poolNodeLabel(t.pool,a.node)})),...i.filter(a=>a.kind==="feed").map(a=>this.t("tech_issue_feed",{name:this.t(`feed_${a.node}`)}))];return m`<span class="fp3d-tech-issues">⚠ ${r.slice(0,4).join(" \xB7 ")}${r.length>4?" \u2026":""}</span>`}placeJoint(t,e,n,i){let o=t.gap-$l,r=Math.round(n*100)/100,a=Math.round(i*100)/100,l=Ee(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c;if(e==="hole_wall"){let[d,u]=En(t.frame,r,o);c={id:U("joint"),kind:"wall",x:d,z:u,y:Math.max(.05,a),nx:M(t.frame.n[0]),nz:M(t.frame.n[1]),depth:M(l)}}else if(e==="hole_floor"){let[d,u]=En(t.frame,r,t.gap);c={id:U("joint"),kind:"floor",x:d,z:u,y:0}}else{let[d,u]=En(t.frame,r,t.gap);c={id:U("joint"),kind:e,x:d,z:u,y:a}}this.changePool(t.pool.id,d=>d.joints=[...d.joints??[],c]),this._runMode=null}runOut(t,e){let n=this._runDraft,i=n&&this.runLast(n,t);if(!n||!i)return;if(e==="down")return void this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let o=gt(t.frame,[i[0],i[2]]),r=Ee(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,a=ve(t.frame,o.s,i[1],-(r+.15));this.finishRun("",null,[[M(a[0]),i[1],M(a[2])]],i[1])}addFitting(t,e,n,i){let o=dt(this._doc,t.floor,t.pool);this.changePool(t.pool.id,r=>{let a=r.pipes?.find(c=>c.id===e),l=a&&Gn(le(a,o),n);!a||!l||(a.fittings=[...a.fittings??[],{id:U("fit"),kind:i,at:M(l.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,i){if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,this._runSel?.pipe!==n.id||!this.isEditor){this._runSel={pipe:n.id,pt:null};return}let{s:o,y:r}=e.pt(t),a=n.pieces.find(p=>p.k===i),l=Math.hypot(a.s1-a.s0,a.y1-a.y0)>0?Math.hypot(o-a.s0,r-a.y0)/Math.hypot(a.s1-a.s0,a.y1-a.y0):0,c=a.d0+(a.d1-a.d0)*Math.min(1,l),d=this._doc,u=dt(d,e.floor,e.pool),h=-1;this.changePool(e.pool.id,p=>{let f=p.pipes?.find(_=>_.id===n.id);f&&(Object.assign(f,Zt(f,u)),h=Math.max(0,Math.min(f.points.length,i+1-Hi(f,u))),f.points.splice(h,0,En(e.frame,o,c)),f.heights.splice(h,0,M(r)))}),!(h<0)&&(this._runSel={pipe:n.id,pt:h},this.runDrag={pipe:n.id,i:h,d:c,base:d,moved:!0},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}runPointDown(t,e,n,i){if(this._runMode||!this.isEditor)return;t.stopPropagation();let o=dt(this._doc,e.floor,e.pool);if(this.doubleTap(t,`runpt:${n}:${i}`)){this.changePool(e.pool.id,c=>{let d=c.pipes?.find(u=>u.id===n);d&&(Object.assign(d,Zt(d,o)),d.points.splice(i,1),d.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let r=e.pool.pool?.pipes?.find(c=>c.id===n),l=(r&&Zt(r,o))?.points[i];l&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:gt(e.frame,l).d,base:this._doc,moved:!1},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}runPointMove(t,e){let n=this.runDrag;if(!n)return;let{s:i,y:o}=e.pt(t);i=Math.round(i*100)/100,o=Math.round(o*100)/100;let r=dt(n.base,e.floor,e.pool),l=n.base.floors.flatMap(d=>d.outdoor).find(d=>d.id===e.pool.id)?.pool?.pipes?.find(d=>d.id===n.pipe);if(!l)return;let c=Zt(l,r);if(!t.altKey){let d=le(c,r),u=Hi(c,r);for(let h of[d[n.i+u-1],d[n.i+u+1]]){if(!h)continue;let p=gt(e.frame,[h[0],h[2]]);Math.abs(p.s-i)<.04&&(i=M(p.s)),Math.abs(h[1]-o)<.04&&(o=M(h[1]))}}n.moved=!0,this.change((d,u)=>{let h=u.outdoor.find(p=>p.id===e.pool.id)?.pool?.pipes?.find(p=>p.id===n.pipe);h&&(Object.assign(h,Zt(h,r)),h.points[n.i]=En(e.frame,i,n.d),h.heights[n.i]=o)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t?.moved&&this.pushHistory(t.base)}fittingDown(t,e,n,i){if(!(this._runMode||!this.isEditor)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},this.doubleTap(t,`fitting:${i}`)){this.changePool(e.pool.id,o=>{let r=o.pipes?.find(a=>a.id===n);r?.fittings&&(r.fittings=r.fittings.filter(a=>a.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId)}}jointDown(t,e,n){this._runMode||!this.isEditor||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:o}=e.pt(t),r=t.altKey?i:Math.round(i*100)/100,a=t.altKey?o:Math.round(o*100)/100;this.change((l,c)=>{let d=c.outdoor.find(u=>u.id===e.pool.id)?.pool?.joints?.find(u=>u.id===n.id);d&&([d.x,d.z]=En(e.frame,r,n.d),d.kind!=="floor"&&(d.y=Math.max(d.kind==="wall"?.05:-1,M(a))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:o}=e.pt(t),r=e.runs.find(d=>d.id===n.pipe);if(!r)return;let a=null;for(let d of r.pieces){let[u,h]=[d.s1-d.s0,d.y1-d.y0],p=u*u+h*h,f=p>0?Math.max(0,Math.min(1,((i-d.s0)*u+(o-d.y0)*h)/p)):0,[_,g]=[d.s0+u*f,d.y0+h*f],y=Math.hypot(_-i,g-o);(!a||y<a.d)&&(a={p:ve(e.frame,_,g,d.d0+(d.d1-d.d0)*f),d:y})}if(!a)return;let l=dt(n.base,e.floor,e.pool),c=a.p;this.change((d,u)=>{let h=u.outdoor.find(_=>_.id===e.pool.id)?.pool?.pipes?.find(_=>_.id===n.pipe),p=h?.fittings?.find(_=>_.id===n.id),f=h&&Gn(le(h,l),c);p&&f&&(p.at=M(f.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{let i=n.pipes?.find(o=>o.id===e.pipe)?.fittings?.find(o=>o.id===e.id);i?.kind==="valve"&&(i.open=i.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(o=>o.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let i=[...n.pieces].sort((o,r)=>Math.hypot(r.s1-r.s0,r.y1-r.y0)-Math.hypot(o.s1-o.s0,o.y1-o.y0))[0];this.addFitting(t,n.id,ve(t.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),e),this._runMode=null}renderRuns(t,e,n){let i=this._runSel?.pipe,o=v=>{let w=gt(t.frame,[v[0],v[2]]);return`${e(w.s)},${n(v[1])}`},r=this._runDraft,a=r&&this.runLast(r,t),l=r?[...r.fromT||r.extend||r.from?[this.runLast({...r,pts:[]},t)]:[],...r.pts].filter(v=>!!v):[],c=this.runHover,d=dt(this._doc,t.floor,t.pool),u={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},h=[],p=(v,w,k="",S)=>{let $=d(v),x=$&&gt(t.frame,[$.x,$.z]);if(!($&&x&&x.d>-.6&&x.d<1.6&&x.s>-.2&&x.s<t.L+.2))return[];let R=h.filter(C=>Math.hypot(C.s-x.s,C.y-$.y)<.3*this.wvScale).length;h.push({s:x.s,y:$.y});let L=R&&this.wvScale>.5?"":w;return[z`<g class="fp3d-wv-node ${k} ${S?"fp3d-wv-joint":""}" transform="translate(${e(x.s)} ${n($.y)}) scale(${this.wvScale})" @pointerdown=${C=>S&&this.jointDown(C,S,x.d)}>
            <circle r="0.05" /><text y=${.11+R*.07}>${L}</text><title>${this.poolNodeLabel(t.pool,v)}</title>
          </g>`]},f=[...t.floor.furniture.flatMap(v=>{if(u[v.type]===void 0)return[];let w=qe(v.type);return w.length?w.flatMap(k=>p(`dev:${v.id}:${k}`,this.t(`port_${k}`))):p(`dev:${v.id}`,u[v.type])}),...(t.pool.pool?.joints??[]).flatMap(v=>v.kind==="wall"||v.kind==="floor"?p(`joint:${v.id}:inside`,this.jointLabel(t.pool,v.id),"fp3d-wv-hole-mark",v.id):p(`joint:${v.id}`,this.jointLabel(t.pool,v.id),"",v.id))],_=this.pipeRules,g=this._techMode&&_?_.flow({pipes:t.pool.pool?.pipes??[],ports:t.pool.pool?.ports??[],devices:this._doc.floors.flatMap(v=>v.furniture).filter(v=>Ht.includes(v.type)).map(v=>({id:v.id,type:v.type,open:v.valve_open!==!1,valve:v.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,y=v=>{let w=g?.get(v);if(!w?.active||!_)return"";let[k,S,$]=_.waterColor(w).map(x=>Math.round(x*255));return`stroke: rgb(${k}, ${S}, ${$}); stroke-opacity: 0.95`};return z`<g class="fp3d-wv-runs">
      ${f}
      ${t.runs.map(v=>z`<g class="fp3d-wv-run ${v.id===i?"fp3d-wv-run-sel":""} ${g&&!g.get(v.id)?.active?"fp3d-wv-dry":""}">
          ${v.pieces.map(w=>z`<line class=${w.y0<-.01&&w.y1<-.01?"fp3d-wv-under":""} style=${y(v.id)} x1=${e(w.s0)} y1=${n(w.y0)} x2=${e(w.s1)} y2=${n(w.y1)} @pointerdown=${k=>this.runPieceDown(k,t,v,w.k)} />`)}
          ${v.ends.map(w=>z`<circle class="fp3d-wv-end" cx=${e(w.s)} cy=${n(w.y)} r="0.035" />`)}
          ${v.fittings.map(w=>w.kind==="valve"?z`<g class="fp3d-wv-valve ${w.open?"":"fp3d-wv-shut"}" transform="translate(${e(w.s)} ${n(w.y)}) scale(${this.wvScale})" @pointerdown=${k=>this.fittingDown(k,t,v.id,w.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${w.open?.11:0} y2=${w.open?0:-.11} />
                </g>`:z`<rect class="fp3d-wv-sight" x=${e(w.s)-.06} y=${n(w.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${k=>this.fittingDown(k,t,v.id,w.id)} />`)}
          ${v.id===i?v.points.map(w=>z`<circle class="fp3d-wv-runpt ${this._runSel?.pt===w.i?"fp3d-on":""}" cx=${e(w.s)} cy=${n(w.y)} r="0.04" @pointerdown=${k=>this.runPointDown(k,t,v.id,w.i)} />`):b}
        </g>`)}
      ${l.length?z`<polyline class="fp3d-wv-draft" points=${l.map(o).join(" ")} />`:b}
      ${this.techStroke&&this.techStroke.length>1?z`<polyline class="fp3d-wv-draft fp3d-wv-stroke" points=${this.techStroke.map(v=>`${e(v.s)},${n(v.y)}`).join(" ")} />`:b}
      ${a&&c?z`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${o(a).split(",")[0]} y1=${o(a).split(",")[1]} x2=${e(c[0])} y2=${n(c[1])} />`:b}
    </g>`}renderRunFoot(t){let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return m`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return m`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return m`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?m`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:b}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,o=i&&t.pool.pool?.pipes?.find(u=>u.id===i.pipe);if(!i||!o)return b;let r=dt(this._doc,t.floor,t.pool),a=Zt(o,r),l=i.pt,c=this.isEditor,d=o.to?o.from?null:"from":"to";return m`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&a.heights?.[l]!==void 0?this.len(this.t("wall_run_pt"),a.heights[l]??0,u=>this.changePool(t.pool.id,h=>{let p=h.pipes?.find(f=>f.id===o.id);p&&(Object.assign(p,Zt(p,r)),p.heights[l]=Math.min(10,Math.max(-5,M(u))))}),.01):b}
      ${c?m`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${d?m`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let u={pool:t.pool.id,from:"",fromT:null,extend:{pipe:o.id,end:d},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...u,anchor:this.runLast(u,t)}}}>${this.t("wall_run_more")}</button>`:b}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,u=>{let h=u.pipes?.find(p=>p.id===o.id);h&&(Object.assign(h,Zt(h,r)),[h.from,h.to,h.points,h.heights]=[h.to,h.from,[...h.points].reverse(),[...h.heights??[]].reverse()],h.fittings=h.fittings?.map(p=>({...p,at:M(Math.max(0,Ml(h,r)-p.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,u=>u.pipes=(u.pipes??[]).filter(h=>h.id!==o.id)),this._runSel=null}}>${this.t("delete")}</button>`:b}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){let t=this.outdoorArea;if(t?.type==="pool")return t;let e=this.floor?.outdoor.filter(n=>n.type==="pool")??[];return e.length===1?e[0]:void 0}poolDown(t,e,n,i){let o=this.floor;if(!o)return!1;let r=this.poolArea,a=e.closest("[data-pool-node]")?.getAttribute("data-pool-node")??null;if(this._jointPlace&&r)return this.isEditor&&this.placeJointPlan(r,this._jointPlace,n,e.closest("[data-pipe]")?.getAttribute("data-pipe")??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isEditor)return!0;if(!r){let h=o.outdoor.find(p=>p.type==="pool"&&p.points.length>=3&&K(n,p.points));return h&&(this.selectItem("outdoor",h.id),this._tool="pool",this._pipeMode=!0),!0}let u=e.closest("[data-pipe-end]")?.getAttribute("data-pipe-end");if(u&&!this._pipeDraft){let[h,p]=u.split("|"),f=r.pool?.pipes?.find(g=>g.id===h),_=f&&(p==="to"?f.points[f.points.length-1]:f.points[0]);_&&(this._pipeDraft={from:"",points:[],extend:{pipe:h,end:p,at:_}})}else if(a){let h=this._pipeDraft;h?h.extend?(this.extendPipe(r,h.extend,a,h.points),this._pipeDraft=null):a!==h.from&&(this.addPipe(r.id,h.from,a,h.points),this._pipeDraft=null):this._pipeDraft={from:a,points:[]}}else if(this._pipeDraft){let h=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[M(h[0]),M(h[1])]]}}return!0}let l=u=>[u.slice(0,u.lastIndexOf(":")),Number(u.slice(u.lastIndexOf(":")+1))];if(r&&this.isEditor){let u=e.closest("[data-pipe-pt]")?.getAttribute("data-pipe-pt");if(u){let[p,f]=l(u);return this.doubleTap(t,`pipept:${u}`)?this.change((_,g)=>{let y=g.outdoor.find(v=>v.id===r.id)?.pool?.pipes?.find(v=>v.id===p);y?.points.splice(f,1),y?.heights?.splice(f,1)}):this.drag={kind:"pipept",pool:r.id,pipe:p,index:f,base:this._doc,moved:!1},!0}let h=e.closest("[data-pipe-seg]")?.getAttribute("data-pipe-seg");if(h){let[p,f]=l(h),_=this.snap(n,void 0,t.altKey);return this.change((g,y)=>{let v=y.outdoor.find(w=>w.id===r.id)?.pool?.pipes?.find(w=>w.id===p);v?.points.splice(f,0,[M(_[0]),M(_[1])]),v?.heights?.splice(f,0,v.heights[f-1]??v.heights[f]??null)}),this._pipeId=p,this.drag={kind:"pipept",pool:r.id,pipe:p,index:f,base:this._doc,moved:!1},!0}}let c=e.closest("[data-pipe]")?.getAttribute("data-pipe");if(c)return this._pipeId=c,!0;if(a&&r&&this.isEditor)return a.startsWith("port:")?this.drag={kind:"poolport",pool:r.id,id:a.slice(5),base:this._doc,moved:!1}:a.startsWith("joint:")?this.drag={kind:"pooljoint",pool:r.id,id:lt(a).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:a.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isEditor){let u=e.closest("[data-out-box]")?.getAttribute("data-out-box");if(u){let[p,f]=l(u);return this.drag={kind:"outbox",id:p,corner:f,base:this._doc,moved:!1},!0}let h=e.closest("[data-out-vertex]")?.getAttribute("data-out-vertex");if(h){let[p,f]=l(h);return this.drag={kind:"outvertex",id:p,index:f,base:this._doc,moved:!1},!0}}let d=e.closest("[data-outdoor]")?this.outdoorAt(n)??e.closest("[data-outdoor]").getAttribute("data-outdoor"):null;return d&&o.outdoor.some(u=>u.id===d&&u.type==="pool")?(this.selectItem("outdoor",d),this._pipeId=null,this.isEditor&&(this.drag={kind:"outdoor",id:d,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,i)=>{let o=i.outdoor.find(r=>r.id===t);o&&(o.pool??={},e(o.pool,o))})}extendPipe(t,e,n,i){let o=this.floor;if(!o)return;let r=dt(this._doc,o,t);n=this.jointEnd(t,n,i[i.length-1]),this.changePool(t.id,a=>{let l=a.pipes?.find(d=>d.id===e.pipe);if(!l)return;Object.assign(l,Zt(l,r));let c=l.heights??[];if(e.end==="to"){let d=c[c.length-1]??l.height??null;l.points=[...l.points,...i],l.heights=[...c,...i.map(()=>d)],l.to=n}else{let d=Ml(l,r),u=c[0]??l.height??null;l.points=[...[...i].reverse(),...l.points],l.heights=[...i.map(()=>u),...c],l.from=n;let h=Ml(l,r)-d;l.fittings=l.fittings?.map(p=>({...p,at:M(p.at+h)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,i=[]){let{kind:o,id:r,port:a}=lt(e),l=o==="joint"&&!a?t.pool?.joints?.find(u=>u.id===r):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let u=this._doc.floors.find(_=>_.outdoor.some(g=>g.id===t.id)),h=u&&dt(this._doc,u,t),[p,f]=[h?.(`joint:${r}:inside`),h?.(`joint:${r}:outside`)];return!n||!p||!f?`joint:${r}:inside`:`joint:${r}:${Math.hypot(n[0]-p.x,n[1]-p.z)<=Math.hypot(n[0]-f.x,n[1]-f.z)?"inside":"outside"}`}let c=new Set([...(t.pool?.pipes??[]).flatMap(u=>[u.from,u.to]),...i]),d=qn(l.kind).find(u=>!c.has(`joint:${r}:${u}`));return d?`joint:${r}:${d}`:e}addPipe(t,e,n,i){let o=this.floor;if(!o)return;let r=o.outdoor.find(l=>l.id===t);r&&(e=this.jointEnd(r,e,i[0]),n=this.jointEnd(r,n,i[i.length-1],[e]));let a={id:U("pipe"),from:e,to:n,floor_id:o.id,points:i};this.changePool(t,l=>l.pipes=[...l.pipes??[],a]),this._pipeId=a.id}addPoolPort(t){let e=this.poolArea;if(!e||!this.isEditor)return;let n=e.pool?.ports??[],i=e.points.length,o=h=>{let p=e.points[h%i],f=e.points[(h+1)%i];return[(p[0]+f[0])/2,(p[1]+f[1])/2]},[r,a]=ge(e.points),l=this._doc.floors.flatMap(h=>h.furniture).find(h=>h.type==="pool_filter"||h.type==="pool_pump"),c=n.filter(h=>h.kind==="inlet").length,d=t==="skimmer"?Zo(e.points,o(0)):t==="inlet"?Zo(e.points,o(Math.floor(i/2)+c*Math.max(1,Math.floor(i/8)))):t==="drain"?[r,a]:l?[l.x+.8,l.z]:[r,a+3],u={id:U("port"),kind:t,x:M(d[0]),z:M(d[1])};this.changePool(e.id,h=>h.ports=[...n,u])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{for(let n of e.floors){n.furniture=n.furniture.filter(i=>i.id!==t);for(let i of n.outdoor)i.pool?.pipes&&(i.pool.pipes=i.pool.pipes.filter(o=>o.from!==`dev:${t}`&&o.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==e),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${e}`&&i.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isEditor||this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&Object.assign(i,e)})}portText(t){let{kind:e,port:n}=lt(t),i={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){let{kind:n,id:i}=lt(e);if(n==="joint"){let o=t.pool?.joints?.find(r=>r.id===i);return o?qn(o.kind).map(r=>`${e}:${r}`):[]}if(n==="dev"){let o=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.id===i),r=o?qe(o.type):[];return r.length?r.map(a=>`${e}:${a}`):[e]}return[e]}partStatus(t,e){let n=t.pool?.pipes??[],i=this.partPorts(t,e);return[i.filter(o=>n.some(r=>r.from===o||r.to===o)).length,i.length]}cardConnect(t,e,n,i){let o=this._doc.floors.find(u=>u.outdoor.some(h=>h.id===t.id));if(!o||!n)return;let r=dt(this._doc,o,t),a=t.pool?.ports??[],l=u=>{let{kind:h,id:p,port:f}=lt(u);return h==="port"?ta(a.find(_=>_.id===p)?.kind??"inlet"):h==="dev"?Uu(f):null},c=this.jointEnd(t,n,void 0,[e]),d=Yn({from:e,vias:i,to:[c],floorId:o.id},r,t.pool?.joints??[],l,u=>U(u));this.changePool(t.id,u=>{u.joints=[...u.joints??[],...d.joints],u.pipes=[...u.pipes??[],...d.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(i=>!e.pipes.includes(i.id)))}cardReroute(t,e){let n=t.pool?.pipes??[],i=n.find(f=>f.id===e.pipes[0]);if(!i||!e.other)return;let o=i.from===e.start,r=[...e.holes.map(f=>({kind:"hole",joint:f.joint,dir:f.dir})),...e.fittings.map(f=>({kind:f}))],a=this._doc.floors.find(f=>f.outdoor.some(_=>_.id===t.id));if(!a)return;let l={...t,pool:{...t.pool,pipes:n.filter(f=>!e.pipes.includes(f.id))}},c=dt(this._doc,a,l),d=o?e.start:e.other,u=o?e.other:e.start,h=o?r:[...e.holes].reverse().map(f=>({kind:"hole",joint:f.joint,dir:f.dir==="in"?"out":"in"})).concat(e.fittings.map(f=>({kind:f}))),p=Yn({from:d,vias:h,to:[u],floorId:a.id},c,t.pool?.joints??[],()=>null,f=>U(f));this.changePool(t.id,f=>{f.pipes=[...(f.pipes??[]).filter(_=>!e.pipes.includes(_.id)),...p.pipes]})}renderPartCard(){let t=this._card,e=t?this._doc.floors.flatMap(x=>x.outdoor).find(x=>x.id===t.pool):void 0;if(!t||!e)return b;let n=this.isEditor,{kind:i,id:o}=lt(t.part),r=i==="joint"?e.pool?.joints?.find(x=>x.id===o):void 0,a=i==="dev"?this._doc.floors.flatMap(x=>x.furniture).find(x=>x.id===o):void 0,l=i==="port"?e.pool?.ports?.find(x=>x.id===o):void 0;if(!r&&!a&&!l)return b;let c=e.pool?.pipes??[],d=e.pool?.joints??[],u=this.partPorts(e,t.part),h=this.poolEnds(e).filter(x=>ye(x.node)!==t.part&&!x.used),p=d.filter(x=>x.kind==="wall"||x.kind==="floor"),f=x=>this.poolNodeLabel(e,x),_=x=>lt(x).port?this.portText(x):this.t("card_port"),g=x=>x.kind==="hole"?this.t(x.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,x.joint)}):this.t(x.kind==="valve"?"wall_run_valve":"wall_run_sight"),y=()=>{this._card=null,this._cardJoin=null},v=()=>r?[r.x,r.z]:a?[a.x,a.z]:l?[l.x,l.z]:null,w=u.map(x=>{let R=Xu(c,d,x),L=this._cardJoin?.port===x?this._cardJoin:null;return m`<div class="fp3d-pc-row ${R.length?"fp3d-on":""}">
        <b>${_(x)}</b>
        <div class="fp3d-pc-conns">
          ${R.map(C=>m`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...C.holes.map(E=>g({kind:"hole",joint:E.joint,dir:E.dir})),...C.fittings.map(E=>g({kind:E}))].map(E=>m`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${E}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${C.other?m`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,ye(C.other))}>${f(C.other)}</button>`:m`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?m`<span class="fp3d-pc-tools">
                    ${C.other?m`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,C)}>${this.t("card_reroute")}</button>`:b}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,C)}>${this.t("card_disconnect")}</button>
                  </span>`:b}
            </div>`)}
          ${n&&(!R.length||u.length===1)?L?this.renderJoinPicker(e,x,L,h,p,g):m`<button class="fp3d-btn ${R.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:x,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:b}
        </div>
      </div>`}),[k,S]=this.partStatus(e,t.part),$=v();return m`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${x=>x.target===x.currentTarget&&y()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${x=>x.key==="Escape"&&y()}>
        <div class="fp3d-wv-head">
          ${r&&n?m`<input
                class="fp3d-pc-name"
                .value=${r.name??""}
                placeholder=${this.jointLabel(e,r.id)}
                title=${this.t("joint_name")}
                @change=${x=>{let R=x.target.value.trim().slice(0,60);this.changePool(e.id,L=>{let C=L.joints?.find(E=>E.id===r.id);C&&(C.name=R||null)})}}
              />`:m`<b class="fp3d-pc-title">${f(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:k,b:S})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${y}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,u)}
          <div class="fp3d-pc-rows">${w}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${$?m`<button class="fp3d-btn" @click=${()=>{y(),this._wallView=null,this._tool="pool",this.showPoint($[0],$[1])}}>${this.t("card_show_plan")}</button>`:b}
          ${$&&!l?m`<button class="fp3d-btn" @click=${()=>{y(),this.pickWall($)}}>▦ ${this.t("card_show_wall")}</button>`:b}
          <span class="fp3d-wv-grow"></span>
          ${n?m`<button class="fp3d-btn fp3d-danger" @click=${()=>{y(),a?this.deletePoolDevice(a.id):l?this.deletePoolPort(e.id,l.id):r&&this.changePool(e.id,x=>{x.joints=(x.joints??[]).filter(R=>R.id!==r.id),x.pipes=(x.pipes??[]).filter(R=>ye(R.from)!==t.part&&ye(R.to)!==t.part)})}}>${this.t("delete")}</button>`:b}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,i,o,r){let a=h=>{let{kind:p,id:f}=lt(h);if(p==="port")return"pool";if(p==="dev")return"tech";let _=t.pool?.joints?.find(g=>g.id===f);return _?.kind==="wall"||_?.kind==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(h=>({g:h,items:i.filter(p=>a(p.node)===h)})).filter(h=>h.items.length),c=h=>this._cardJoin={...n,...h},d=h=>c({vias:[...n.vias,h]}),u=new Set(n.vias.flatMap(h=>h.kind==="hole"?[h.joint]:[]));return m`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((h,p)=>m`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>c({vias:n.vias.filter((f,_)=>_!==p)})}>${r(h)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?m`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>c({to:""})}>${this.poolNodeLabel(t,n.to)} <i>✕</i></button>`:m`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?b:m`<div class="fp3d-pc-steps">
            ${o.some(h=>!u.has(h.id))?m`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${o.filter(h=>!u.has(h.id)).map(h=>m`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(t,h.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:h.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:h.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:b}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:h,items:p})=>m`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${h}`)}</span>
                <div class="fp3d-pc-picks">${p.map(f=>m`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>c({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){let i=t.pool?.pipes??[],o=f=>i.some(_=>_.from===f||_.to===f),{kind:r,id:a}=lt(e),l=r==="joint"?t.pool?.joints?.find(f=>f.id===a):void 0,c=r==="dev"?this._doc.floors.flatMap(f=>f.furniture).find(f=>f.id===a):void 0,d={},u=b,h=l?.kind??(c?c.type:"port");h==="tee"?(Object.assign(d,{in:[20,60],out1:[180,60],out2:[100,130]}),u=z`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):h==="y"?(Object.assign(d,{in:[20,70],out1:[180,25],out2:[180,115]}),u=z`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):h==="wall"||h==="floor"?(Object.assign(d,{outside:[20,70],inside:[180,70]}),u=z`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):h==="pool_pump"?(Object.assign(d,{suction:[20,95],pressure:[110,10]}),u=z`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):h==="pool_filter"?(Object.assign(d,{pump:[20,40],return:[180,40],waste:[100,4]}),u=z`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):h==="pool_heat_pump"?(Object.assign(d,{in:[180,95],out:[180,45]}),u=z`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(d[""]=[180,70],u=z`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let p=h==="pool_filter"?[100,41]:h==="pool_pump"?[100,85]:[100,70];return m`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(f=>{let _=lt(f).port??"",g=d[_]??d[""]??[180,70],y=o(f);return z`<g class="fp3d-pc-stub ${y?"fp3d-on":""}" @click=${()=>this.isEditor&&!y&&(this._cardJoin={port:f,to:"",vias:[]})}>
          <line x1=${p[0]} y1=${p[1]} x2=${g[0]} y2=${g[1]} />
          <circle cx=${g[0]} cy=${g[1]} r="7" />
          <title>${_?this.portText(f):""}</title>
        </g>`})}
      ${u}
      ${n.map(f=>{let _=lt(f).port,g=d[_??""]??[180,70];return _?z`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,g[0]))} y=${g[1]<70?g[1]+20:g[1]-12}>${this.portText(f)}</text>`:b})}
    </svg>`}jointLabel(t,e){let n=t.pool?.joints??[],i=n.find(a=>a.id===e);if(!i)return this.t("pool_loose_end");let o=a=>a==="wall"||a==="floor"?"hole":a??"tee";if(i.name?.trim())return i.name.trim();let r=n.filter(a=>o(a.kind)===o(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:r.indexOf(i)+1})}`}poolEnds(t){let e=t.pool?.pipes??[],n=o=>e.some(r=>r.from===o||r.to===o),i=[];for(let o of t.pool?.ports??[])i.push({node:`port:${o.id}`,label:this.poolNodeLabel(t,`port:${o.id}`),used:!1});for(let o of this._doc.floors.flatMap(r=>r.furniture).filter(r=>Ht.includes(r.type)&&r.type!=="pool_valve")){let r=qe(o.type);for(let a of r.length?r.map(l=>`dev:${o.id}:${l}`):[`dev:${o.id}`])i.push({node:a,label:this.poolNodeLabel(t,a),used:r.length>0&&n(a)})}for(let o of t.pool?.joints??[])for(let r of qn(o.kind)){let a=`joint:${o.id}:${r}`;i.push({node:a,label:this.poolNodeLabel(t,a),used:n(a)})}return i}placeJointPlan(t,e,n,i){let o=this.floor;if(!o)return;let r=dt(this._doc,o,t),a=i?t.pool?.pipes?.find(d=>d.id===i):void 0;if(a){let d=le(a,r),u=null;for(let p=1;p<d.length;p++){let[f,_]=[d[p-1],d[p]],[g,y]=[_[0]-f[0],_[2]-f[2]],v=g*g+y*y,w=v>0?Math.max(0,Math.min(1,((n[0]-f[0])*g+(n[1]-f[2])*y)/v)):0,k=[f[0]+g*w,f[1]+(_[1]-f[1])*w,f[2]+y*w],S=Math.hypot(k[0]-n[0],k[2]-n[1]);(!u||S<u.d)&&(u={p:k,d:S})}let h=u&&ts(a,r,u.p,U("joint"),U("pipe"));if(h){this.changePool(t.id,p=>{p.joints=[...p.joints??[],{...h.joint,kind:e}],p.pipes=(p.pipes??[]).flatMap(f=>f.id===a.id?[{...h.first,to:`joint:${h.joint.id}:in`},{...h.second,from:`joint:${h.joint.id}:out1`}]:[f])});return}}let l=o.rooms.some(d=>d.points.length>=3&&K(n,d.points)),c=this.snap(n);this.changePool(t.id,d=>d.joints=[...d.joints??[],{id:U("joint"),kind:e,x:M(c[0]),z:M(c[1]),y:l?.5:-.3}])}poolNodePos(t,e){if(!e)return null;let n=this._doc.floors.find(o=>o.outdoor.some(r=>r.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let o=n&&dt(this._doc,n,t)(e);return o?[o.x,o.z]:null}if(e.startsWith("port:")){let o=t.pool?.ports?.find(r=>r.id===e.slice(5));return o?[o.x,o.z]:null}let i=this._doc.floors.flatMap(o=>o.furniture).find(o=>o.id===e.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(t,e){let{kind:n,id:i,port:o}=lt(e);if(!e)return this.t("pool_loose_end");if(o||n==="joint"){let c=n==="joint"?this.jointLabel(t,i):this.poolNodeLabel(t,`${n}:${i}`);return o?`${c} \xB7 ${this.portText(e)}`:c}if(e.startsWith("port:")){let c=t.pool?.ports??[],d=c.find(h=>h.id===e.slice(5));if(!d)return"?";let u=c.filter(h=>h.kind===d.kind);return`${this.t(`pool_port_${d.kind}`)}${u.length>1?` ${u.indexOf(d)+1}`:""}`}let r=this._doc.floors.flatMap(c=>c.furniture).filter(c=>Ht.includes(c.type)),a=r.find(c=>c.id===e.slice(4));if(!a)return"?";let l=r.filter(c=>c.type===a.type);return`${a.name||this.t(`furn_${a.type}`)}${l.length>1&&!a.name?` ${l.indexOf(a)+1}`:""}`}renderPoolPlan(t){let e=this.poolArea,n=t.furniture.filter(p=>Ht.includes(p.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},o=e?(e.pool?.pipes??[]).filter(p=>p.floor_id===t.id):[],r=o.map(p=>{let f=this.poolNodePos(e,p.from),_=this.poolNodePos(e,p.to);if((!f||!_)&&!p.heights)return b;let g=f?1:0,y=[...f?[f]:[],...p.points,..._?[_]:[]].map(C=>this.toScreen(C));if(y.length<2)return b;let v=p.id===this._pipeId,w=0;for(let C=1;C<y.length-1;C++)Math.hypot(y[C+1][0]-y[C][0],y[C+1][1]-y[C][1])>Math.hypot(y[w+1][0]-y[w][0],y[w+1][1]-y[w][1])&&(w=C);let[k,S]=y[w],[$,x]=y[w+1],R=Math.atan2(x-S,$-k)*180/Math.PI,L=y.map(C=>C.join(",")).join(" ");return z`<g data-pipe=${p.id}>
        <polyline class="fp3d-pipe-hit" points=${L} />
        <polyline class="fp3d-pipe ${v?"fp3d-pipe-sel":""}" points=${L} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(k+$)/2} ${(S+x)/2}) rotate(${R})`} />
        ${v&&this.isEditor?z`${y.slice(0,-1).map((C,E)=>z`<line class="fp3d-pipe-seg" data-pipe-seg=${`${p.id}:${E+1-g}`} x1=${C[0]} y1=${C[1]} x2=${y[E+1][0]} y2=${y[E+1][1]} />`)}
              ${p.points.map((C,E)=>{let[O,I]=this.toScreen(C);return z`<g class="fp3d-vertex" data-pipe-pt=${`${p.id}:${E}`}><circle cx=${O} cy=${I} r="14" class="fp3d-hit" /><circle cx=${O} cy=${I} r="5" /></g>`})}`:b}
      </g>`}),a=(p,f,_,g,y)=>{let[v,w]=this.toScreen(f);return z`<g class="fp3d-pool-node ${g}" data-pool-node=${p}><title>${y}</title><circle cx=${v} cy=${w} r="16" class="fp3d-hit" /><circle cx=${v} cy=${w} r="10" /><text x=${v} y=${w}>${_}</text></g>`},l=e?(e.pool?.ports??[]).map(p=>a(`port:${p.id}`,[p.x,p.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[p.kind],`fp3d-pool-port-${p.kind}`,this.poolNodeLabel(e,`port:${p.id}`))):[],c=n.map(p=>a(`dev:${p.id}`,[p.x,p.z],p.type==="pool_valve"?p.valve_open===!1?"\u2715":"":i[p.type],`fp3d-pool-dev ${p.type==="pool_valve"&&p.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${p.id}`):p.type)),d=b;if(e&&this._pipeDraft){let p=this._pipeDraft.extend?.at??this.poolNodePos(e,this._pipeDraft.from);if(p){let f=[p,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(_=>this.toScreen(_).join(",")).join(" ");d=z`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${f} />`}}let u=e?(e.pool?.joints??[]).map(p=>a(`joint:${p.id}`,[p.x,p.z],p.kind==="wall"||p.kind==="floor"?"\u25CE":p.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,p.id))):[],h=o.flatMap(p=>p.heights&&p.points.length?["from","to"].filter(f=>!p[f]).map(f=>{let[_,g]=this.toScreen(f==="to"?p.points[p.points.length-1]:p.points[0]);return z`<g class="fp3d-pipe-end" data-pipe-end=${`${p.id}|${f}`}><circle cx=${_} cy=${g} r="14" class="fp3d-hit" /><circle cx=${_} cy=${g} r="6" /></g>`}):[]);return z`<g class="fp3d-pool-plan">${r}${d}${u}${h}${l}${c}</g>`}renderPoolPanel(t){let e=t?.outdoor.filter(i=>i.type==="pool")??[],n=this.poolArea;return n?m`${e.length>1?m`<section>
            <div class="fp3d-seg">${e.map((i,o)=>m`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${o+1}</button>`)}</div>
          </section>`:b}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:m`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?m`<div class="fp3d-actions">${e.map((i,o)=>m`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${e.length>1?o+1:""}</button>`)}</div>`:b}
      </section>`}renderPoolTech(t){if(!this.pipeRules)return b;let e=this.isEditor,n=t.pool?.ports??[],i=t.pool?.pipes??[],o=this._doc.floors.flatMap(a=>a.furniture).filter(a=>Ht.includes(a.type)),r=i.find(a=>a.id===this._pipeId);return m`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!e} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(a=>m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolPort(a)}>+ ${this.t(`pool_port_${a}`)}</button>`)}
        </div>
        ${n.map(a=>m`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`port:${a.id}`)}>${this.poolNodeLabel(t,`port:${a.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(t,`port:${a.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${a.kind==="inlet"||a.kind==="skimmer"?m`<label class="fp3d-pool-depth" title=${this.t("pool_port_depth_hint")}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(a.depth??(a.kind==="inlet"?.3:0))} ?disabled=${!e} @change=${l=>{let c=Number(l.target.value.replace(",","."));Number.isFinite(c)&&this.change((d,u)=>{let h=u.outdoor.find(p=>p.id===t.id)?.pool?.ports?.find(p=>p.id===a.id);h&&(h.depth=Math.min(3,Math.max(0,M(c))))})}} />m</label
                >`:b}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolPort(t.id,a.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${Ht.filter(a=>a!=="pool_valve").map(a=>m`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolDevice(a)}>+ ${this.t(`furn_${a}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${o.map(a=>m`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`dev:${a.id}`)}>${this.poolNodeLabel(t,`dev:${a.id}`)}</button>
            <span class="fp3d-ports">${qe(a.type).map(l=>m`<i class=${i.some(c=>c.from===`dev:${a.id}:${l}`||c.to===`dev:${a.id}:${l}`)?"fp3d-on":""}>${this.t(`port_${l}`)}</i>`)}</span>
            ${a.type==="pool_filter"?m`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${l=>this.setPoolDevice(a.id,{variant:l.target.value==="top6"?null:l.target.value})}>
                    ${ju.map(l=>m`<option value=${l} ?selected=${(a.variant??"top6")===l}>${this.t(`valve_${l}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${l=>this.setPoolDevice(a.id,{valve_position:l.target.value})}>
                  ${td.map(l=>m`<option value=${l} ?selected=${(a.valve_position??"filter")===l}>${this.t(`valve_${l}`)}</option>`)}
                </select>`:a.type==="pool_heat_pump"?m`<select ?disabled=${!e} title=${this.t("hp_ports")} @change=${l=>this.setPoolDevice(a.id,{variant:l.target.value==="right"?null:l.target.value})}>
                    ${["right","left","back"].map(l=>m`<option value=${l} ?selected=${(a.variant??"right")===l}>${this.t("hp_ports")}: ${this.t(`hp_side_${l}`)}</option>`)}
                  </select>`:a.type==="pool_valve"?m`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${a.valve_open!==!1} ?disabled=${!e} @change=${l=>this.setPoolDevice(a.id,{valve_open:l.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:b}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(a.id)}>✕</button>
          </div>`)}
        ${(t.pool?.joints??[]).map(a=>m`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${a.id}`)}>${this.jointLabel(t,a.id)}</button>
            <span class="fp3d-ports">${qn(a.kind).map(l=>{let c=`joint:${a.id}:${l}`,d=i.some(u=>u.from===c||u.to===c||(a.kind??"tee")!=="wall"&&(a.kind??"tee")!=="floor"&&ye(u.from)===`joint:${a.id}`&&!lt(u.from).port&&l==="in");return m`<i class=${d?"fp3d-on":""} title=${this.portText(c)}>${this.portText(c)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,l=>{l.joints=(l.joints??[]).filter(c=>c.id!==a.id),l.pipes=(l.pipes??[]).filter(c=>ye(c.from)!==`joint:${a.id}`&&ye(c.to)!==`joint:${a.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!e} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(a=>m`<div class="fp3d-pool-row ${a.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=a.id}>${this.poolNodeLabel(t,a.from)} → ${this.poolNodeLabel(t,a.to)}</button>
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,l=>{let c=l.pipes?.find(d=>d.id===a.id);c&&([c.from,c.to,c.points]=[c.to,c.from,[...c.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,l=>l.pipes=(l.pipes??[]).filter(c=>c.id!==a.id))}>✕</button>
          </div>`)}
        ${r?m`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),r.height??.3,a=>this.changePool(t.id,l=>{let c=l.pipes?.find(d=>d.id===r.id);c&&(c.height=Math.min(10,Math.max(-5,M(a))))}),.05)}
            </div>`:b}
      </section>`}renderPoolShape(t){let e=this.isEditor,n=Mt(t.points),i=t.pool_shape,o=(l,c,d,u)=>i&&this.updateOutdoor({points:Ro(i,l,c,d,u)}),r=(n.x0+n.x1)/2,a=(n.z0+n.z1)/2;return m`${i==="round"?m`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let c=Math.max(.5,l)/2;o(r-c,a-c,r+c,a+c)},.01,1)}`:i==="oval"?m`${this.len(this.t("width"),n.x1-n.x0,l=>o(r-Math.max(1,l)/2,n.z0,r+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>o(n.x0,a-Math.max(1,l)/2,n.x1,a+Math.max(1,l)/2),.01,1)}`:b}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),Po(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,M(l)))}),.05,.4):b}
      ${this.len(this.t("pool_depth"),ur(t),l=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,M(l)))}),.05,.3)}
      ${t.above?b:this.len(this.t("pool_rim"),t.rim??.06,l=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,M(l)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!t.above&&this.floor&&!pr(this.floor,t)?m`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:b}`}get pipeRules(){return Af()}editorHost(){let t=this.hass;return{api:1,hass:()=>t,building:()=>this._doc,language:()=>t.language||"en",devices:()=>[],findDevice:()=>null,openings:()=>[],energy:()=>null,consumers:()=>[],canEdit:()=>this.isEditor,updateBuilding:e=>this.change(n=>e(n)),callService:(e,n,i)=>t.callService(e,n,i),newId:e=>U(e),refresh:()=>{this._moduleFieldMemo=null,this.requestUpdate()},plan:al}}_moduleFieldMemo=null;memoFields(t,e){let n=this._moduleFieldMemo,i=this.hass;if(n&&n.item===t&&n.doc===this._doc&&n.entities===i.entities&&n.lang===i.language)return n.fields;let o=e();return this._moduleFieldMemo={item:t,doc:this._doc,entities:i.entities,lang:i.language,fields:o},o}renderModuleFields(t){return this.hass?this.renderFields(this.memoFields(t,()=>Rf(this.editorHost(),t))):b}renderModuleRoomFields(t){let e=this.floor;return!this.hass||!e?b:this.renderFields(this.memoFields(t,()=>Ff(this.editorHost(),t,e)),!1)}renderModuleFurnitureFields(t){return this.hass?this.renderFields(this.memoFields(t,()=>If(this.editorHost(),t))):b}renderFields(t,e=!0){if(!t.length)return b;let n=this.isEditor,i=o=>{switch(o.kind){case"heading":return m`<h3>${o.text}</h3>`;case"text":return m`<p class="fp3d-sub fp3d-wide">${o.text}</p>`;case"entity":return this.entitySelect(o.label,o.value,o.auto,this.entityOptionsFor(o.filter),r=>o.set(r));case"select":return m`<label class="fp3d-field fp3d-wide"
            >${o.label}
            <select ?disabled=${!n} @change=${r=>o.set(r.target.value)}>
              ${o.options.map(r=>m`<option value=${r.id} ?selected=${r.id===o.value}>${r.label}</option>`)}
            </select></label
          >`;case"check":return m`<label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${o.value} ?disabled=${!n} @change=${r=>o.set(r.target.checked)} /> ${o.label}</label>`;case"button":return m`<button class="fp3d-btn ${o.primary?"fp3d-primary":""} fp3d-wide" ?disabled=${!n} title=${o.title??""} @click=${()=>o.onTap()}>${o.label}</button>`;case"lines":return Yl(o.value,!n,{label:o.label,placeholder:o.placeholder??this.t("lines_new"),add:this.t("lines_add"),remove:this.t("delete")},r=>o.set(r),!0)}};return e?m`<section>
      <div class="fp3d-form fp3d-links">${t.map(i)}</div>
    </section>`:t.map(i)}renderRooms(t){return z`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return z`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(ge(e.points));return z`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(It(e.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return b;let[n,i]=this.toScreen(t.points[e]),[o,r]=this.toScreen(t.points[(e+1)%t.points.length]);return z`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${r} />`}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return b;let[n,i]=this.toScreen([e.x,e.z]);return z`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1,o=this._hiddenItems,r=o.length?t.furniture.filter(a=>!o.includes(a.id)):t.furniture;return z`<g>${this.renderSelectionFrame(t,n)}${r.map(a=>{let l=n.includes(a.id),c=a.id===this._furnitureId&&!i,[d,u]=this.toScreen([a.x,a.z]),h=Math.min(a.w,a.d)*e>44,p=a.rotation*Math.PI/180,f=a.d/2+Math.max(.3,26/e),[_,g]=this.toScreen([a.x-Math.sin(p)*f,a.z+Math.cos(p)*f]),[y,v]=this.toScreen([a.x-Math.sin(p)*(a.d/2),a.z+Math.cos(p)*(a.d/2)]),w=Lt(a.type)&&!!a.entity&&a.entity!=="none"&&this.hass?.states[a.entity]?.state==="on";return z`<g data-furniture=${a.id} class=${`fp3d-furn${c||l?" fp3d-furn-sel":""}${w?" fp3d-furn-lit":""}${nn(a.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${d} ${u}) rotate(${a.rotation}) scale(${a.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-a.w/2} y=${-a.d/2} width=${a.w} height=${a.d} />
          <g class="fp3d-furn-sym">${yu(a.type,a.w,a.d)}</g>
          <line class="fp3d-furn-front" x1=${-a.w/2} y1=${a.d/2} x2=${a.w/2} y2=${a.d/2} />
        </g>
        ${h?z`<text x=${d} y=${u+4}>${Ft(this.hass,a.type)}</text>`:b}
      </g>
      ${c&&this.isEditor&&!a.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([k,S])=>{let[$,x]=this.toScreen([a.x+k*a.w*Math.cos(p)/2-S*a.d*Math.sin(p)/2,a.z+k*a.w*Math.sin(p)/2+S*a.d*Math.cos(p)/2]);return z`<g class="fp3d-resize" data-resize=${`${a.id}:${k}:${S}`}>
              <circle cx=${$} cy=${x} r="14" class="fp3d-hit" />
              <rect x=${$-5} y=${x-5} width="10" height="10" rx="2" />
            </g>`}):b}
      ${c?(()=>{let[k,S]=this.toScreen([a.x+Math.sin(p)*(a.d/2+18/e),a.z-Math.cos(p)*(a.d/2+18/e)]);return z`<text class="fp3d-dim" x=${k} y=${S+4}>${this.m(a.w,2)} × ${this.m(a.d,2)}</text>`})():b}
      ${c&&a.locked?z`<text class="fp3d-lock" x=${_} y=${g+5}>🔒</text>`:b}
      ${c&&this.isEditor&&!a.locked?z`<g class="fp3d-rotate" data-rotate=${a.id}>
            <line x1=${y} y1=${v} x2=${_} y2=${g} />
            <circle cx=${_} cy=${g} r="16" class="fp3d-hit" />
            <circle cx=${_} cy=${g} r="8" />
            <path d="M${_-4} ${g-1}a4 4 0 1 1 2 3.5" />
          </g>`:b}`})}</g>`}renderSelectionFrame(t,e){let n=this.drag,i=n?.kind==="marquee"?z`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[0]))} y=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:b;if(e.length<2)return i;let o=t.furniture.filter(u=>e.includes(u.id)).flatMap(u=>Qt(u));if(!o.length)return i;let[r,a]=this.toScreen([Math.min(...o.map(u=>u[0])),Math.min(...o.map(u=>u[1]))]),[l,c]=this.toScreen([Math.max(...o.map(u=>u[0])),Math.max(...o.map(u=>u[1]))]),d=!this._multi.length;return z`${i}<g class=${`fp3d-selframe${d?" fp3d-selframe-block":""}`}>
      <rect x=${r-6} y=${a-6} width=${l-r+12} height=${c-a+12} rx="6" />
      <text x=${r-4} y=${a-12}>${d?`\u25A3 ${this.t("block_title")} \xB7 ${e.length}`:this.t("multi_title",{n:e.length})}</text>
    </g>`}renderBlockForm(){let t=this.selection(),e=(this.floor?.furniture??[]).filter(r=>t.includes(r.id)),n=!this._multi.length&&!!e[0]?.group,i=e.every(r=>this.isFixedItem("furniture",r.id)),o=!i&&e.some(r=>this.isFixedItem("furniture",r.id));return m`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</h3></div>
      <p class="fp3d-sub">${this.t(n?"block_hint":"multi_hint")}</p>
      ${o?m`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:b}
      <div class="fp3d-block-parts">
        ${e.map(r=>m`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",r.id),this._single=!!r.group}}>${r.name||Ft(this.hass,r.type)}</button>`)}
      </div>
      ${this._doc.floors.length>1?m`<div class="fp3d-form">${this.renderItemFloor()}</div>`:b}
      <div class="fp3d-actions">
        ${n?m`<button class="fp3d-btn" @click=${()=>this.ungroupSelection()}>${this.t("block_break")}</button>`:m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" title=${Vt(this.t("rotate_left"),["Shift+R"])} @click=${()=>this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" title=${Vt(this.t("rotate_right"),["R"])} @click=${()=>this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        ${this.renderClipButtons()}
        <button class="fp3d-btn ${o?"fp3d-primary":""}" title=${Vt(this.t(i||o?"unfix":"fix"),["L"])} @click=${()=>this.lockSelection(!i&&!o)}>${i?`\u{1F513} ${this.t("unfix")}`:o?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" title=${Vt(this.t("delete"),["Del"])} @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`}renderMultiToggle(){return m`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${t=>this._multiMode=t.target.checked} /> ${this.t("multi_mode")}</label>`}renderOpenings(t,e){return z`<g>${t.openings.map(n=>{let i=_e(n,t.rooms,t.walls??[]);if(!i)return b;let{room:o,edge:r}=i,a=Ti(e,n,i),l=Jt(o,r,n.offset-n.width/2),c=Jt(o,r,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),u=(c[1]-l[1])/(n.width||1),h=Rt(o.points)>=0?1:-1,p=[-u*h,d*h],f=[.06,.06];a&&(f=a.wall.free||a.wall.roomLeft===o.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let _=(L,C)=>this.toScreen([L[0]+p[0]*C,L[1]+p[1]*C]),g=[_(l,f[0]+.01),_(c,f[0]+.01),_(c,-f[1]-.01),_(l,-f[1]-.01)],y=n.id===this._openingId,v=Ho(n,a?.wall.exterior??!1),w=n.type==="door"&&gr(v),k=`fp3d-open fp3d-open-${n.type}${w?" fp3d-open-front":""}${y?" fp3d-open-sel":""}`,S;if(n.type==="garage"){let L=_(l,f[0]-.04),C=_(c,f[0]-.04),E=_(l,f[0]+Math.min(2,n.height)),O=_(c,f[0]+Math.min(2,n.height));S=z`<line x1=${L[0]} y1=${L[1]} x2=${C[0]} y2=${C[1]} />
          ${y?z`<path class="fp3d-open-track" d="M${L[0]} ${L[1]}L${E[0]} ${E[1]}M${C[0]} ${C[1]}L${O[0]} ${O[1]}"><title>${this.t("help_legend_track")}</title></path>`:b}`}else if(n.type==="door"){let L=n.swing==="out",C=L?-f[1]:f[0],E=n.hinge==="left"==h>0,O=n.leaves===2,I=l,T=c,F=[],D=xd(n.width,v,E,n);if(D){let X=Q=>Q<=.02?l:Q>=n.width-.02?c:Jt(o,r,n.offset-n.width/2+Q);I=X(D.x0),T=X(D.x1),F=D.panels.map(([Q,j])=>[X(Q),X(j)])}let W=[(I[0]+T[0])/2,(I[1]+T[1])/2],H=(O?.5:1)*Math.hypot(T[0]-I[0],T[1]-I[1]),N=(f[0]-f[1])/2,q=F.map(([X,Q])=>{let j=_(X,N+.035),it=_(Q,N+.035),ut=_(X,N-.035),Nt=_(Q,N-.035);return z`<line class="fp3d-open-pane" x1=${j[0]} y1=${j[1]} x2=${it[0]} y2=${it[1]} /><line class="fp3d-open-pane" x1=${ut[0]} y1=${ut[1]} x2=${Nt[0]} y2=${Nt[1]} />`}),Y=(X,Q)=>{let[j,it]=_(X,C),[ut,Nt]=_(Q,C),pt=_(X,C+(L?-H:H)),Ie=H*this._view.scale,J=(pt[0]-j)*(Nt-it)-(pt[1]-it)*(ut-j);return z`<line class="fp3d-open-leaf" x1=${j} y1=${it} x2=${pt[0]} y2=${pt[1]} />${y?z`<path class="fp3d-open-swing" d="M${pt[0]} ${pt[1]}A${Ie} ${Ie} 0 0 ${J>0?1:0} ${ut} ${Nt}"><title>${this.t("help_legend_swing")}</title></path>`:b}`};S=z`${q}${v==="passage"?z`<line class="fp3d-open-passage" x1=${_(l,N)[0]} y1=${_(l,N)[1]} x2=${_(c,N)[0]} y2=${_(c,N)[1]} />`:v==="sliding"?z`<line x1=${_(I,C)[0]} y1=${_(I,C)[1]} x2=${_(T,C)[0]} y2=${_(T,C)[1]} />`:O?z`${Y(I,W)}${Y(T,W)}`:Y(E?I:T,E?T:I)}`}else{let L=(f[0]-f[1])/2,C=_(l,L+.035),E=_(c,L+.035),O=_(l,L-.035),I=_(c,L-.035),T=[(l[0]+c[0])/2,(l[1]+c[1])/2],F=_(T,f[0]),D=_(T,-f[1]);S=z`<line x1=${C[0]} y1=${C[1]} x2=${E[0]} y2=${E[1]} /><line x1=${O[0]} y1=${O[1]} x2=${I[0]} y2=${I[1]} />${n.leaves===2?z`<line x1=${F[0]} y1=${F[1]} x2=${D[0]} y2=${D[1]} />`:b}`}let $=_(l,(f[0]-f[1])/2),x=_(c,(f[0]-f[1])/2),R=b;if(y){let L=[l[0]-d*.08,l[1]-u*.08],C=[c[0]+d*.08,c[1]+u*.08],E=[_(L,f[0]+.1),_(C,f[0]+.1),_(C,-f[1]-.1),_(L,-f[1]-.1)];R=z`<polygon class="fp3d-open-ring" points=${E.map(O=>O.join(",")).join(" ")} />`}return z`<g data-opening=${n.id} class=${k}>
        <line class="fp3d-open-hit" x1=${$[0]} y1=${$[1]} x2=${x[0]} y2=${x[1]} />
        <polygon class="fp3d-open-gap" points=${g.map(L=>L.join(",")).join(" ")} />
        ${S} ${R}
      </g>`})}</g>`}renderPets(t){return!vt("fun_pets")||this._doc.settings.pets?.on===!1?b:z`<g>${nf(this._doc,t.id).map(e=>{let[n,i]=this.toScreen([e.x,e.z]);return z`<g data-pet=${e.id} class="fp3d-device fp3d-pet" transform="translate(${n} ${i})">
        <title>${e.name||this.t(`pet_kind_${e.kind}`)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${L0} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>`})}</g>`}renderDevices(t){return z`<g>${t.placements.map(e=>{let n=et(e.entity_id);if(!n)return b;let[i,o]=this.toScreen([e.x,e.z]),r=this.hass?.states[e.entity_id]?.state==="on",a=e.entity_id===this._deviceId,l=`fp3d-device${r?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return z`${n==="camera"?this.renderCameraWedge(e,a):b}<g data-device=${e.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${st(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Jn(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&e.locked?z`<text class="fp3d-lock" x=${i+16} y=${o-12}>🔒</text>`:b}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",i=t.fov??(n?360:90),o=t.reach??(n?3:4.5),r=(t.rotation??0)*Math.PI/180,a=(w,k)=>this.toScreen([t.x-Math.sin(r+w)*k,t.z+Math.cos(r+w)*k]),[l,c]=this.toScreen([t.x,t.z]),d=Math.min(i,359.9)*Math.PI/180/2,[u,h]=a(-d,o),[p,f]=a(d,o),_=o*this._view.scale,g=i>=360?"":`M${l} ${c}L${u} ${h}A${_} ${_} 0 ${d>Math.PI/2?1:0} 1 ${p} ${f}Z`,[y,v]=a(0,o);return z`<g class="fp3d-wedge ${e?"fp3d-wedge-sel":""}">
      ${i>=360?z`<circle cx=${l} cy=${c} r=${_} />`:z`<path d=${g} />`}
      ${e&&this.isEditor&&!t.locked?z`<g class="fp3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${c} x2=${y} y2=${v} />
            <circle cx=${y} cy=${v} r="16" class="fp3d-hit" />
            <circle cx=${y} cy=${v} r="8" />
            <path d="M${y-4} ${v-1}a4 4 0 1 1 2 3.5" />
          </g>`:b}
    </g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((r,a)=>{let l=e[(a+1)%n],[c,d]=this.toScreen(r),[u,h]=this.toScreen(l),p=Math.hypot(l[0]-r[0],l[1]-r[1]),f=(c+u)/2,_=(d+h)/2,[g,y]=this.toScreen(ge(e)),v=-(h-d),w=u-c,k=Math.hypot(v,w)||1;v/=k,w/=k,v*(f-g)+w*(_-y)<0&&(v=-v,w=-w);let S=Math.hypot(u-c,h-d);return z`
        ${S>50?Math.abs(v)>Math.abs(w)?z`<text class="fp3d-dim" style="text-anchor:${v>0?"start":"end"}" x=${f+v*13} y=${_+w*13+4}>${this.m(p,2)}</text>`:z`<text class="fp3d-dim" x=${f+v*16} y=${_+w*16+4}>${this.m(p,2)}</text>`:b}
        ${S>36?z`<g data-mid=${a} class="fp3d-mid"><circle cx=${f} cy=${_} r="14" class="fp3d-hit" /><circle cx=${f} cy=${_} r="6" /><path d="M${f-3} ${_}h6M${f} ${_-3}v6" /></g>`:b}
      `}),o=e.map((r,a)=>{let[l,c]=this.toScreen(r);return z`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return z`<g>${i}${o}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="freewall"){let[i,o]=this.toScreen(t.start),[r,a]=this.toScreen(t.end),l=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return z`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${o} x2=${r} y2=${a} />
        <text class="fp3d-dim" x=${(i+r)/2} y=${(o+a)/2-10}>${this.m(l,2)}</text>
      </g>`}if(t?.kind==="rect"){let[i,o]=this.toScreen(t.start),[r,a]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),c=Math.abs(t.end[1]-t.start[1]);return z`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,r)} y=${Math.min(o,a)} width=${Math.abs(r-i)} height=${Math.abs(a-o)} />
        <text class="fp3d-dim" x=${(i+r)/2} y=${Math.min(o,a)-8}>${this.m(l,2)} × ${this.m(c,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return b;let e=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=e.map(i=>this.toScreen(i));return z`<g pointer-events="none">
      ${n.length>1?z`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:b}
      ${n.slice(1).map((i,o)=>{let r=n[o];return Math.hypot(i[0]-r[0],i[1]-r[1])<30?b:z`<text class="fp3d-dim" x=${(r[0]+i[0])/2} y=${(r[1]+i[1])/2-6}>${this.m(Math.hypot(e[o+1][0]-e[o][0],e[o+1][1]-e[o][1]),2)}</text>`})}
      ${this._draft.map((i,o)=>{let[r,a]=this.toScreen(i);return z`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${r} cy=${a} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?z`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:b}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return z`<g pointer-events="none">
      ${t.x!==void 0?z`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:b}
      ${t.z!==void 0?z`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:b}
      ${t.point?z`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:b}
    </g>`}get unit(){return jr(this.hass,this._doc.settings.units)}m(t,e=2){return Ru(t,this.unit,n=>Ut(this.hass,n,e))}area(t){return Iu(Math.abs(t),this.unit,e=>Ut(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?Kn(t):String(M(t))}readLen(t){if(this.unit==="imperial")return Kr(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,i=.01,o){if(this.unit!=="imperial")return this.num(t,e,n,i,o);let r=this.typedEvents(a=>{let l=Kr(a,"imperial");l!==null&&Math.abs(l-e)>1e-9&&n(o!==void 0?Math.max(o,l):l)});return m`<label class="fp3d-field"
      >${zi(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${ol(this.typed,Kn(e))}
        ?disabled=${!this.isEditor}
        @focus=${r.focus}
        @input=${r.input}
        @change=${r.change}
        @keydown=${r.keydown}
        @blur=${r.blur}
    /></label>`}typed=new ws;typedEvents(t){let e=i=>i.target,n=(i,o)=>{let r=[this._furnitureId?this.selection().join(","):"",this._deviceId,this._openingId,this._wallId,this._outdoorId,this._roomId,this._vertex];this.mergeKey=["typed",o,...r].join("|"),this.mergeWithin=1/0;try{t(i)}finally{this.mergeKey=null,this.mergeWithin=void 0}};return{focus:i=>this.typed.focus(e(i)),input:i=>this.typed.input(e(i),e(i).value,n),change:i=>this.typed.change(e(i),e(i).value,n),keydown:i=>{i.key==="Enter"&&(this.typed.enter(e(i),e(i).value,n),this.requestUpdate())},blur:i=>{this.typed.blur(e(i)),this.requestUpdate()}}}num(t,e,n,i=.01,o){let r=this.typedEvents(a=>{let l=parseFloat(a.replace(",","."));Number.isFinite(l)&&l!==M(e)&&n(l)});return m`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??b}
        .value=${ol(this.typed,String(M(e)))}
        ?disabled=${!this.isEditor}
        @focus=${r.focus}
        @input=${r.input}
        @change=${r.change}
        @keydown=${r.keydown}
        @blur=${r.blur}
    /></label>`}rightPress=null;rightUp=-1e9;lastTap=null;doubleTap(t,e){let n=performance.now(),i=t.detail>=2||this.lastTap?.key===e&&n-this.lastTap.at<450;return this.lastTap=i?null:{key:e,at:n},i}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("home3d.sidePinned",t?"1":"0")}catch{}}setSideFolded(t){if(this._split&&!this._sidePinned){this._sideOpen=!t;return}this._sideMin=t;try{localStorage.setItem("home3d.sideMin",t?"1":"0")}catch{}}renderSideGrip(){if(this.narrow)return b;let t=n=>{this.sideDrag&&(this._sideWidth=Math.min(640,Math.max(280,Math.round(this.sideDrag.width+(this.sideDrag.x-n.clientX)))))},e=n=>{if(this.sideDrag){this.sideDrag=null,n.currentTarget.releasePointerCapture(n.pointerId);try{localStorage.setItem("home3d.sideWidth",String(this._sideWidth))}catch{}}};return m`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${n=>{this.sideDrag={x:n.clientX,width:this._sideWidth},n.currentTarget.setPointerCapture(n.pointerId),n.preventDefault()}}
      @pointermove=${t}
      @pointerup=${e}
      @pointercancel=${e}
    ></div>`}renderAside(t){let e=this._split&&!this._sidePinned&&!this.narrow;return!this.narrow&&(e?!this._sideOpen:this._sideMin)?m`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this.setSideFolded(!1)}>‹</button>
        ${this._furnitureId||this._deviceId||this._openingId||this._roomId?m`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this.setSideFolded(!1)}>⚙</button>`:b}
      </aside>`:e?m`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderSideGrip()}
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:m`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){if(this.narrow)return b;let e=m`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${()=>this.setSideFolded(!0)}>${this.t("side_close")} ›</button>`;return this._split?m`<div class="fp3d-pin-row">
      ${e}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`:m`<div class="fp3d-pin-row">${e}</div>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,i=this.isEditor,o=Object.values(this.hass?.areas??{}).sort((l,c)=>l.name.localeCompare(c.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&i)return m`${this.furnitureItem?m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t("back_to_library")}</button>
              ${this.renderFurnitureForm(this.furnitureItem)}`:b}
        ${this.renderFurnitureLibrary()}`;let r=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;if(r)return m`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${r}`;let a=this._tool==="opening"&&i&&t?m`<section>
            <h3>${this.t("opening_next_kind")}</h3>
            ${this.renderOpeningKinds(this._openingPreset,l=>this.pickOpeningKind(l))}
          </section>`:b;return n&&this._tool!=="measure"?m`${a}<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:m`
      ${a} ${i?b:m`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${t?this.t("floor_settings_of",{floor:t.name}):this.t("floors")}</h3>
        ${e.length?b:m`${i?m`<button class="fp3d-btn fp3d-primary" @click=${()=>this.addFloor()}>${this.t("first_floor_add")}</button>`:b}
              <p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${i&&t?m`<button class="fp3d-btn" aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
              ${this.t(this._doc.settings.lock_plan?"plan_unlock":"plan_lock")}
            </button>`:b}
        ${t?m`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${l=>this.updateFloor({name:l.target.value})}
              /></label>
              ${this.len(this.t("elevation"),t.elevation,l=>this.updateFloor({elevation:l}))}
              ${i?m`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${l=>this._shiftX=Number(l.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${l=>this._shiftZ=Number(l.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${t.start_view?m`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:b}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${l=>this._shiftAll=l.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:b}
              ${this.len(this.t("height"),t.height,l=>this.updateFloor({height:Math.max(1,l)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?m`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${l=>this.updateFloor({ha_floor:l.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(l=>l.floor_id===t.ha_floor||!e.some(c=>c.ha_floor===l.floor_id)).map(l=>m`<option value=${l.floor_id} ?selected=${l.floor_id===t.ha_floor}>${l.name}</option>`)}
                    </select></label
                  >`:b}
              ${i&&this.unplacedAreas(t).length?m`<p class="fp3d-sub fp3d-wide fp3d-area-import">
                    ${this.t("area_rooms_label")}
                    <button class="fp3d-link" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </p>`:b}
              ${i?m`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                    ${this.renderPasteButton()}
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${t.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                    <button class="fp3d-btn" title=${this.t("straighten_hint")} ?disabled=${!t.rooms.length} @click=${()=>this.straightenFloor()}>
                      ${this.t("straighten")}
                    </button>
                  </div>
                  ${this._notice?m`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:b}`:b}
            </div>`:b}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?m`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:t?m`${this.renderRoomList(t)} ${this.renderItemsList(t.furniture,!0)} ${this.renderUnplaced()}`:b}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():b}
      ${t&&i?this.renderBackgroundForm(t):b}
    `}moveRoom(t,e){this.change((n,i)=>{let o=i.rooms.findIndex(l=>l.id===t),r=o+e;if(o<0||r<0||r>=i.rooms.length)return;let[a]=i.rooms.splice(o,1);i.rooms.splice(r,0,a)})}renderRoomList(t){return t.rooms.length?m`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map((e,n)=>m`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${()=>this.selectItem("room",e.id)}>
              <span>${e.name}</span><span class="fp3d-muted">${this.area(It(e.points))}</span>
            </button>
            ${this.isEditor&&t.rooms.length>1?m`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${n===0} @click=${()=>this.moveRoom(e.id,-1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${n===t.rooms.length-1} @click=${()=>this.moveRoom(e.id,1)}>↓</button>`:b}
          </div>`)}
      </div>
    </section>`:b}renderItemsList(t,e){let n=this.floor;if(!n||!t.length)return b;let i=e?new Map(n.rooms.map(c=>[c.id,c.name])):null,o=e?Xo(n.rooms,t):null,r=new Map;if(o&&i)for(let[c,d]of o)for(let u of d)r.set(u.id,c?i.get(c)??"":"");let a=this._furnitureId?this.selection():[],l=t.map(c=>({id:c.id,name:c.name||Ft(this.hass,c.type),note:r.get(c.id),hidden:this._hiddenItems.includes(c.id),selected:a.includes(c.id)}));return m`<details class="fp3d-points fp3d-items">
      <summary>${this.t("items_list")} (${t.length})</summary>
      <fp3d-item-list
        .rows=${l}
        .texts=${{hide:this.t("item_hide"),show:this.t("item_show"),remove:this.t("delete")}}
        ?editable=${this.isEditor}
        @item-select=${c=>this.selectFromList(c.detail.id)}
        @item-hide=${c=>this.toggleItemHidden(c.detail.id)}
        @item-delete=${c=>{this.deleteFromList(c.detail.id)}}
      ></fp3d-item-list>
    </details>`}renderRoomOpenings(t){let e=(this.floor?.openings??[]).filter(n=>n.room_id===t.id);return e.length?m`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${e.length})</summary>
      <div class="fp3d-room-list">
        ${e.map(n=>m`<button class="fp3d-row" @click=${()=>(this.selectItem("opening",n.id),this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0,0))}>
            <span>${this.t(`preset_${vi(n)}`)}</span><span class="fp3d-muted">${this.m(n.width,2)}</span>
          </button>`)}
      </div>
    </details>`:b}renderRoomForm(t,e){let n=this.isEditor,i=dn(t.points),o=Mt(t.points);return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",t.id)}</div>
      ${this.renderResizeNote(t)}
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(t)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${r=>this.updateRoom({name:r.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${r=>this.updateRoom({aliases:zo(r.target.value)})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${r=>this.setArea(r.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(r=>m`<option value=${r.area_id} ?selected=${r.area_id===t.area_id}>${r.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${r=>this.updateRoom({floor_material:r.target.value})}>
            ${id.map(r=>m`<option value=${r} ?selected=${r===t.floor_material}>${this.t(`mat_${r}`)}</option>`)}
          </select></label
        >
        ${i?m`${this.len(this.t("x"),o.x0,r=>this.setRect("x",r))} ${this.len(this.t("z"),o.z0,r=>this.setRect("z",r))}
            ${this.len(this.t("width"),o.x1-o.x0,r=>this.setRect("w",r),.01,.05)}
            ${this.len(this.t("depth"),o.z1-o.z0,r=>this.setRect("d",r),.01,.05)}`:b}
      </div>
      ${this.renderEdgeHeights(t)}
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${zi(this.t("room_ceiling"),this.unit)}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            step="0.05"
            min="1"
            placeholder=${this.floor?this.lenValue(this.floor.height):""}
            .value=${t.ceiling_height!=null?this.lenValue(t.ceiling_height):""}
            ?disabled=${!n}
            @change=${r=>{let a=r.target.value.trim(),l=a===""?null:this.readLen(a);this.updateRoom({ceiling_height:l===null||l<=0?null:Math.min(30,Math.max(1,l))})}}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${t.start_view?m`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:b}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(It(t.points)),n:this.area(Eu(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{navigator.clipboard?.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderRoomClimate(t)} ${this.renderRoomLive(t)} ${this.renderRoomOpenings(t)}
      ${this.renderItemsList(this.floor?Xo(this.floor.rooms,this.floor.furniture).get(t.id)??[]:[],!1)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((r,a)=>m`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.len(this.t("x"),r[0],l=>this.setPoint(a,0,l))} ${this.len(this.t("z"),r[1],l=>this.setPoint(a,1,l))}
            ${n?m`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:b}
          </div>`)}
      </details>
      ${n?m`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" title=${Vt(this.t("duplicate"),["Ctrl+D"])} @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            ${this.renderPasteButton()}
            <button class="fp3d-btn fp3d-danger" title=${Vt(this.t("delete"),["Del"])} @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:b}
      ${this.renderModuleRoomFields(t)}
      ${this._spots?this.renderSpotForm(t):b}
      ${this._packages?m`<div class="fp3d-packages">
            ${xh.map(r=>m`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,r)}>
                <b>${this.t(`pkg_${r}`)}</b><span>${this.t(`pkg_${r}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:b}
    </section>`}applyPackage(t,e){if(!this.isEditor)return;let n=$h(t,e,()=>U("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=Mt(t.points),n=this.hass?se(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isEditor)return;let[n,i,o]=me[e.type],r=mr(t,e.rows,e.cols).map(([a,l])=>({id:U("furniture"),type:e.type,x:a,z:l,rotation:0,w:n,d:i,h:o,variant:null,entity:e.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...r)),this._spots=null,this._notice=this.t("spots_placed",{n:r.length})}renderSpotForm(t){let e=this._spots,n=mr(t,e.rows,e.cols).length,i=this.entityOptions(r=>/^(light|switch|input_boolean)\./.test(r)),o=r=>this._spots={...e,...r};return m`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${r=>o({type:r.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(r=>m`<option value=${r} ?selected=${r===e.type}>${this.t(`furn_${r}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),e.cols,r=>o({cols:Math.max(1,Math.min(12,Math.round(r)))}),1,1)}
      ${this.num(this.t("spots_rows"),e.rows,r=>o({rows:Math.max(1,Math.min(12,Math.round(r)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),e.entity,void 0,i,r=>o({entity:r==="none"?null:r}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(t)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}iconInput(t,e){let n=t?t.startsWith("mdi:")?t:`mdi:${t}`:"";return m`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${t??""} ?disabled=${!this.isEditor} @change=${i=>e(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?Xl(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):b}
      </span></label
    >`}markerSelect(t,e){return m`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isEditor} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${Nc.map(n=>m`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t,...e){let n=e.length?`${t}|${e.map(String).join("|")}`:String(t);return this.hassWatch.pause(()=>this.optionCache.get(this.rawHass,n,t))}planMemo=null;keptForPlan(t,e){let n=this.rawHass,i=Object.keys(n?.states??{}).length,o=this.planMemo;if((!o||o.doc!==this._doc||o.entities!==n?.entities||o.devices!==n?.devices||o.areas!==n?.areas||o.count!==i)&&(o=this.planMemo={doc:this._doc,entities:n?.entities,devices:n?.devices,areas:n?.areas,count:i,kept:new Map}),o.kept.has(t))return o.kept.get(t);let r=this.hassWatch.pause(e);return o.kept.set(t,r),r}entityOptionsFor(t){return this.hassWatch.pause(()=>this.optionCache.get(this.rawHass,t,t))}circuitSelect(t,e,n){let i=this.entityOptions(o=>this.isPowerSensor(o)).filter(o=>o.id!==e);return m`${this.entitySelect(this.t("energy_circuit"),t??"none",void 0,i,o=>n(o&&o!=="none"?o:null))}
      <p class="fp3d-sub fp3d-wide">${this.t("energy_circuit_hint")}</p>
      ${t?b:m`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("energy_circuit_unset")}</p>`}`}wireEnergySelect(t,e,n){let i=this.entityOptions(r=>r.startsWith("sensor.")&&this.hass?.states[r]?.attributes.device_class==="energy"),o=this.hass?gh(this.hass,e):null;return m`${this.entitySelect(this.t("energy_wire_sensor"),t,o,i,n)}
      <p class="fp3d-sub fp3d-wide">${this.t("energy_wire_sensor_hint")}</p>`}pickerArea(){let t=this.furnitureItem,e=t?this.roomAt([t.x,t.z])??this._roomId:this._roomId;return e&&this.floor?.rooms.find(n=>n.id===e)?.area_id||null}entitySelect(t,e,n,i,o,r=[]){let a=n===void 0?null:n?this.t("entity_auto",{name:st(this.hass,n)}):this.t("entity_auto_none"),l=[...a!==null?[{id:"__auto",label:a}]:[],{id:"none",label:this.t("entity_none")}];return m`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${l}
        .value=${e===null?a!==null?"__auto":"none":e}
        .prefer=${{area:this.pickerArea(),domains:r}}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isEditor}
        @change=${d=>{d.stopPropagation(),o(d.detail.value==="__auto"?null:d.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(t){let e=this.floor,n=e?_e(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let i=Ct(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return Ti(i.walls,t,n)?.wall.exterior??!1}renderSidelightFields(t){if(t.type!=="door")return b;let e=Ho(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return b;let n=this.isEditor,i=(o,r)=>m`<label class="fp3d-field"
      >${this.t(r)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${t[o]==null?"":String(t[o])}
        ?disabled=${!n}
        @change=${a=>{let l=Number(a.target.value);this.updateOpening({[o]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return e==="sidelight"?m`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!t.sidelight_hinge} ?disabled=${!n} @change=${o=>this.updateOpening({sidelight_hinge:o.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:m`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=kd(t.type),n=Ho({type:t.type,style:null},this.openingIsExterior(t)),i=t.style&&e.includes(t.style)?t.style:"";return m`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isEditor} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(o=>m`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningKinds(t,e){return m`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
      ${Object.keys(Lo).map(n=>m`<button class="fp3d-chip" aria-pressed=${n===t} @click=${i=>e(n,i)}>${this.t(`preset_${n}`)}</button>`)}
    </div>`}pickOpeningKind(t){this._openingPreset=t}openingPositionLabel(t){let e=this.floor,n=e?_e(t,e.rooms,e.walls??[]):null;if(!n)return this.t("opening_position");let i=Ph(n.room,n.edge,this._doc.settings.north??0);return this.t("opening_position_from",{corner:this.t(`compass_${i}`)})}renderOpeningForm(t){let e=this.isEditor,n=t.type==="window",i=t.type==="garage",o=v=>this.keptForPlan(`opening|${t.id}|${v}`,()=>{if(!this.hass)return null;let w=structuredClone(this._doc.floors);for(let k of w)for(let S of k.openings)S.id===t.id&&(S[v]=null);return Wd(this.hass,w).get(t.id)?.[v]??null}),r=v=>this.hass?.states[v]?.attributes.device_class,a=this.entityOptions(v=>v.startsWith("cover.")),l=i?this.entityOptions(v=>v.startsWith("cover.")||xi(v)):a,c=this.entityOptions(v=>/^(sensor|number|input_number)\./.test(v)&&Number.isFinite(Number(this.hass?.states[v]?.state))),d=v=>v.startsWith("binary_sensor.")&&["door","window","opening","garage_door",""].includes(r(v)??""),u=this.entityOptions(v=>d(v)||Gt(v)&&Er(this.hass?.states[v])!==null||i&&/^(switch|input_boolean)\./.test(v),i),h=this.entityOptions(v=>{let w=this.hass?.states[v];return v.startsWith("binary_sensor.")?typeof w?.attributes.window_state=="string":Gt(v)&&(Er(w)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${v} ${st(this.hass,v)}`))}),p=this.entityOptions(d),f=v=>{let w=v===1,k=w?t.tilt:t.tilt2??null,S=w?t.contact:t.contact2,$=(w?t.sensor:t.sensor2)??(k&&k!=="none"?"contact_tilt":"contact"),x=R=>this.updateOpening(w?{contact:R}:{contact2:R==="none"?null:R});return m`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${R=>{let L=R.target.value,C=L==="contact_tilt"?{}:w?{tilt:null}:{tilt2:null};this.updateOpening({...w?{sensor:L}:{sensor2:L},...C})}}
          >
            ${["contact","handle","contact_tilt"].map(R=>m`<option value=${R} ?selected=${R===$}>${this.t(`sensor_kind_${R}`)}</option>`)}
          </select></label
        >
        ${$==="handle"?this.entitySelect(this.t("handle_entity"),S,void 0,h,R=>x(R==="none"?w?"none":null:R)):this.entitySelect(this.t("contact_entity"),S,w?o("contact"):void 0,p,x)}
        ${$==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),k,void 0,u,R=>this.updateOpening(w?{tilt:R==="none"?null:R}:{tilt2:R==="none"?null:R})):b}
        ${w?m`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(R=>Gt(R)),R=>this.updateOpening({tilt_angle:R==="none"?null:R}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?m`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,R=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,R))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,R=>this.updateOpening({tilt_offset:R}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${R=>this.updateOpening({tilt_invert:R.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:b}`:b}`},_=vi(t),g=t.type==="door",y=this.openingFormMin?.id===t.id?this.openingFormMin.h:0;return m`<section style=${y?`min-height:${Math.round(y)}px`:""}>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${_}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?this.renderOpeningKinds(_,(v,w)=>{let S=w.currentTarget?.closest?.("section")?.getBoundingClientRect().height??0,$=this.openingFormMin?.id===t.id?this.openingFormMin.h:0;this.openingFormMin={id:t.id,h:Math.max($,S)},this.setOpeningPreset(t,v)}):b}
      ${e&&!i?m`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${g||n&&t.sill<.1?m`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:b}
          </div>`:b}
      <div class="fp3d-form">
        ${this.len(this.t("width"),t.width,v=>this.updateOpening({width:Math.max(.3,v)}),.01,.3)}
        ${this.len(this.openingPositionLabel(t),t.offset,v=>this.updateOpening({offset:Math.max(0,v)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,v=>this.updateOpening({sill:Math.max(0,v)}),.01,0):b}
        ${this.len(this.t("opening_height"),t.height,v=>this.updateOpening({height:Math.max(.3,v)}),.01,.3)}
        ${n&&this.isEditor?m`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${()=>{let v=this.floor?.height??2.5;this.updateOpening({width:1,height:.5,sill:Math.max(0,Math.round((v-.75)*100)/100)})}}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`:b}
        ${this.renderStyleSelect(t)}
        ${n?m`<label class="fp3d-field fp3d-wide" title=${this.t("sill_board_hint")}
              >${this.t("sill_board")}
              <select ?disabled=${!e} @change=${v=>this.updateOpening({sill_board:v.target.value||"auto"})}>
                ${Vc.map(v=>m`<option value=${v} ?selected=${(t.sill_board??"auto")===v}>${this.t(`sill_board_${v}`)}</option>`)}
              </select></label
            >`:b}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isEditor} @change=${v=>this.updateOpening({mark:v.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?b:m`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${v=>this.updateOpening({hinge:v.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||g?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,o("cover"),i?l:a,v=>this.updateOpening({cover:v})):b}
        ${i&&xi(t.cover)?m`<p class="fp3d-sub fp3d-wide">${this.t("garage_pulse_hint")}</p>`:b}
        ${(n||i||g)&&t.cover!=="none"&&(t.cover||o("cover"))?m`${xi(t.cover)?b:this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,c,v=>this.updateOpening({position:v==="none"?null:v}))}
              ${t.position&&!xi(t.cover)?m`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${v=>this.updateOpening({position_inverted:v.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:b}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${v=>this.updateOpening({confirm:v.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:b}
        ${n?m`${t.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:b}
              ${f(1)} ${t.leaves===2?m`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${f(2)}`:b}
              ${t.sill<=.01?m`${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(v=>v.startsWith("lock.")),v=>this.updateOpening({lock:v==="none"?null:v}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:b}`:m`${this.entitySelect(this.t(t.leaves===2?"contact_main":"contact_entity"),t.contact,o("contact"),u,v=>this.updateOpening({contact:v}))}
              ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,u,v=>this.updateOpening({contact2:v==="none"?null:v})):b}
              ${g?m`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${v=>this.updateOpening({shut:v.target.checked})} />
                    ${this.t("door_shut")}</label
                  >
                  <label class="fp3d-field" title=${this.t("door_angle_hint")}
                    >${this.t("door_angle")}
                    <select
                      ?disabled=${!e}
                      @change=${v=>{let w=Number(v.target.value);this.updateOpening({open_angle:w>0?w:null})}}
                    >
                      <option value="0" ?selected=${!t.open_angle}>${this.t("door_angle_default")}</option>
                      ${[15,30,45,60,90].map(v=>m`<option value=${v} ?selected=${t.open_angle===v}>${v}°</option>`)}
                      ${t.open_angle&&![15,30,45,60,90].includes(t.open_angle)?m`<option value=${t.open_angle} selected>${t.open_angle}°</option>`:b}
                    </select></label
                  >
                  ${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(v=>v.startsWith("lock.")),v=>this.updateOpening({lock:v==="none"?null:v}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:b}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||o("contact"))?m`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${v=>this.updateOpening({contact_invert:v.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:b}
        ${this.floor&&Tf(this._doc,this.floor,t)?m`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${t.well!==!1} ?disabled=${!e} @change=${v=>this.updateOpening({well:v.target.checked?void 0:!1})} />
                ${this.t("well")}</label
              >
              ${t.well!==!1?this.len(this.t("well_rim"),t.well_rim??0,v=>this.updateOpening({well_rim:Math.max(-.3,Math.min(1,v))||null}),.01,-.3):b}`:b}
        ${t.type==="window"?m`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${v=>this.updateOpening({rain_ignore:v.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:b}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?m`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:b}
    </section>`}renderFurnitureForm(t){if(this.selection().length>1)return this.renderBlockForm();let e=this.isEditor,n=vf({mirror:!Lt(t.type),strip:t.type==="led_strip",lift:Se(t)&&!!this.floor,floors:this._doc.floors.length>1});return m`<section>
      <div class="fp3d-pos-head">
        <div class="fp3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
        <div class="fp3d-form">${n.head.map(i=>this.furnitureField(t,i))}</div>
      </div>
      ${t.group?m`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:b}
      <div class="fp3d-form">${n.body.map(i=>this.furnitureField(t,i))}</div>
      ${this.renderColourRoles(t)}
      ${t.type==="stairs"?m`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:b}
      ${t.type==="stairs"?this.renderStairOptions(t):b}
      ${t.type==="stairs_u"?m`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:b}
      ${t.type==="stairwell"?m`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(i=>i.points.length>=3&&(Qu(Qt(t),i.points)||It(Br(i.points,Qt(t)))>.01))?m`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:b}`:b}
      ${t.type==="inverter"||t.type==="home_battery"?m`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!e} @change=${i=>this.updateFurniture({variant:i.target.value||null})}>
                ${(t.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(i=>m`<option value=${i} ?selected=${(t.variant??"")===i}>${this.t(`${t.type==="inverter"?"inverter":"battery"}_${i||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:b}
      ${t.type==="lamp_pendant"?m`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${i=>this.updateFurniture({variant:i.target.value||null})}>
                ${["","globe","cone","drum"].map(i=>m`<option value=${i} ?selected=${(t.variant??"")===i}>${this.t(`pendant_${i||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:b}
      ${Te(t.type)?this.renderFurnitureLinks(t):V0.has(t.type)?b:m`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`} ${fd.has(t.type)?this.renderGangsForm(t):b} ${_d.has(t.type)?this.renderTechForm(t):b} ${t.type==="parking"?this.renderParkingForm(t):b} ${t.type==="waste_bin"||t.type==="mailbox"?this.renderHouseholdForm(t):this.renderHouseholdExtras(t)}
      ${this.renderModuleFurnitureFields(t)}
      ${this.renderShowWhen(t)}
      ${this.renderItemActions(t.actions,t.entity&&t.entity!=="none"?t.entity:null,i=>this.updateFurniture({actions:i}))}
      ${/^pack:[^:]+\.vehicles:/.test(t.type)&&this.isEditor?m`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(t)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:b}
      ${this.rackOf(t)?this.renderRackFrameForm(t):b}
      ${this.renderRackElevation(t)}
      ${this.renderRackCardForm(t)}
      ${!e&&this.rackOf(t)?m`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>this.openRackSheet()}>▤ ${this.t("rack_edit")}</button></div>`:b}
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${Vt(this.t("rotate_left"),["Shift+R"])} @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" title=${Vt(this.t("rotate_right"),["R"])} @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(t)}>▦ ${this.t("wall_view")}</button>
            ${this.rackOf(t)?m`<button class="fp3d-btn" @click=${()=>this.openRackSheet()}>▤ ${this.t("rack_edit")}</button>`:b}
            ${t.entity&&t.entity!=="none"&&t.type!=="parking"?m`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(t)}>${this.t("as_device")}</button>`:b}
            ${this.renderClipButtons()}
            <button class="fp3d-btn fp3d-danger" title=${Vt(this.t("delete"),["Del"])} @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`:b}
    </section>`}furnitureField(t,e){let n=this.isEditor;switch(e){case"x":return this.len(this.t("x"),t.x,i=>this.updateFurniture({x:i}));case"z":return this.len(this.t("z"),t.z,i=>this.updateFurniture({z:i}));case"rotation":return this.num(this.t("rotation"),t.rotation,i=>this.updateFurniture({rotation:(i%360+360)%360}),1);case"w":return this.len(this.t("width"),t.w,i=>this.updateFurniture({w:Math.max(.01,i)}),.01,.01);case"d":return this.len(this.t("depth"),t.d,i=>this.updateFurniture({d:Math.max(.01,i)}),.01,.01);case"h":return this.len(this.t("height_m"),t.h,i=>this.updateFurniture({h:Math.max(.005,i)}),.01,0);case"mount":return m`${this.len(this.t("mount_height"),t.mount_y??Kt(this.floor,t),i=>this.updateFurniture({mount_y:Math.min(no,Math.max(0,i))}),.01,0)}
          ${t.mount_y!=null?m`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!n} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:b}`;case"mirror":return m`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
          ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!n} @change=${i=>this.updateFurniture({mirror:i.target.checked})} />
          ${this.t("furn_mirror")}</label
        >`;case"strip":return m`${this.num(this.t("strip_tilt"),t.tilt??0,i=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(i)))}),5)}
          ${t.upright?b:m`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"),t.rise??0,i=>this.updateFurniture({rise:Math.max(-80,Math.min(80,Math.round(i)))||void 0}),5)}</span>`}
          <label class="fp3d-check" title=${this.t("strip_upright_hint")}
            ><input type="checkbox" .checked=${!!t.upright} ?disabled=${!n} @change=${i=>this.updateFurniture({upright:i.target.checked})} />
            ${this.t("strip_upright")}</label
          >`;case"name":return m`<label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${t.name??""} ?disabled=${!n} placeholder=${this.t(`furn_${t.type}`)===`furn_${t.type}`?"":this.t(`furn_${t.type}`)} @change=${i=>this.updateFurniture({name:i.target.value.trim()||null})} />
        </label>`;case"show_name":return m`<label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${!!t.show_name&&!!t.name} ?disabled=${!n||!t.name} @change=${i=>this.updateFurniture({show_name:i.target.checked||void 0})} />
          ${this.t("show_name")}</label
        >`;case"aliases":return m`<label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${i=>this.updateFurniture({aliases:zo(i.target.value)})}
        /></label>`;case"type":return m`<label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!n} @change=${i=>this.retypeFurniture(i.target.value)}>
            ${this.typeChoices(t.type).map(i=>m`<option value=${i} ?selected=${i===t.type}>${this.t(`furn_${i}`)}</option>`)}
            ${(this.packs??[]).filter(i=>i.items.length).map(i=>m`<optgroup label=${fe(i,this.hass?.language??"de")}>
                  ${this.typeLabels(i).map((o,r)=>{let a=Dt(i.id,i.items[r].id);return m`<option value=${a} ?selected=${a===t.type}>${o}</option>`})}
                </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(i=>t.type.startsWith(`pack:${i.id}:`))?m`<option value=${t.type} selected>${Ft(this.hass,t.type)}</option>`:b}
          </select></label
        >`;case"floor":return this.renderItemFloor()}}renderItemFloor(){return m`<label class="fp3d-field fp3d-wide" title=${this.t("item_floor_hint")}
      >${this.t("floor")}
      <select ?disabled=${!this.isEditor} @change=${t=>this.moveSelectionToFloor(t.target.value)}>
        ${[...this._doc.floors].reverse().map(t=>m`<option value=${t.id} ?selected=${t.id===this._floorId}>${t.name}</option>`)}
      </select></label
    >`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=lh(this.hass,t),n=0,i=a=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===a),o=(a,l,c)=>{if(!c)return;let d=i(a);if(!d&&this.floor&&(this.addEnergyDevice(a),d=i(a)),!d||d[l]&&d[l]!=="none")return;let u=d.id;this.change(h=>{let p=h.floors.flatMap(f=>f.furniture).find(f=>f.id===u);p&&(p[l]=c)}),n++};o("meter","power",e.grid),o("inverter","power",e.solar),o("home_battery","power",e.battery),o("home_battery","soc",e.battery_soc);let r=ah(t);for(let a of["gas","water"])r[a]&&!this._doc.energy[a]&&(this.setEnergy({[a]:r[a]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isEditor,n=(g,y)=>this.hass?.states[g]?.attributes[y],i=this.entityOptions(g=>this.isPowerSensor(g)),o=this.entityOptions(g=>Gt(g)&&n(g,"device_class")==="battery"),r=this.entityOptions(g=>Gt(g)&&(n(g,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(g,"unit_of_measurement")??""))),a=this.entityOptions(g=>/^(binary_sensor|schedule|input_boolean|switch)\./.test(g)),l=g=>y=>this.setEnergy({[g]:y==="none"?null:y}),c=g=>this.entityOptions(y=>Gt(y)&&(n(y,"device_class")===g||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(y,"unit_of_measurement")??"")),g),d=this.hass?pn(this.hass,this._doc.floors):new Map,u=Ra(this._doc,g=>this.devicePower(g,d)),h=this.hass?dh(this.hass,this._doc,[],u):null,p=!!h&&(h.solar??0)<20,f=p&&h.grid!==null&&h.grid<-50,_=p&&h.battery!==null&&h.battery<-50&&(h.grid??0)<=0;return m`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${f?m`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:b}
      ${_?m`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:b}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,u.grid,i,l("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${g=>this.setEnergy({grid_invert:g.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,u.solar[0]??null,i,l("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,u.battery[0]??null,i,l("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${g=>this.setEnergy({battery_invert:g.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,u.soc[0]??null,o,l("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,i,l("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,r,l("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),t.gas??null,void 0,c("gas"),g=>this.setEnergy({gas:g==="none"?null:g}))}
        ${this.entitySelect(this.t("energy_water_meter"),t.water??null,void 0,c("water"),g=>this.setEnergy({water:g==="none"?null:g}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_cheap_rate"),t.cheap_rate??null,void 0,a,g=>this.setEnergy({cheap_rate:g==="none"?null:g}))}
        <label class="fp3d-field"
          >${this.t("energy_cheap_from")}
          <input type="time" .value=${t.cheap_from??""} ?disabled=${!e} @change=${g=>this.setEnergy({cheap_from:g.target.value||null})}
        /></label>
        <label class="fp3d-field"
          >${this.t("energy_cheap_to")}
          <input type="time" .value=${t.cheap_to??""} ?disabled=${!e} @change=${g=>this.setEnergy({cheap_to:g.target.value||null})}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("energy_cheap_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!e||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?m`<p class="fp3d-sub">${this._energyNote}</p>`:b}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(t){let e=t.elevation+t.height;if(!ha(this._doc).some(o=>Fp(o,e)&&Ap(o,t.elevation)))return b;let i={settings:this._doc.settings};return z`${[1.5,2].map(o=>Tp(i,t.elevation,o).map(([r,a])=>{let[l,c]=this.toScreen(r),[d,u]=this.toScreen(a);return z`<line class="fp3d-headroom" x1=${l} y1=${c} x2=${d} y2=${u} />
          <text class="fp3d-headroom-label" x=${(l+d)/2} y=${(c+u)/2-4}>${this.m(o,1)}</text>`}))}`}renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(r=>e.includes(r.split(".")[0])&&!t.includes(r),t.join(",")),i=r=>this.change(a=>a.settings.favorites=r.length?r:void 0),o=(r,a)=>{let l=[...t],[c]=l.splice(r,1);l.splice(Math.max(0,Math.min(l.length,r+a)),0,c),i(l)};return m`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?m` <span class="fp3d-lib-count">${t.length}</span>`:b}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((r,a)=>m`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${st(this.hass,r)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${a===0} @click=${()=>o(a,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${a===t.length-1} @click=${()=>o(a,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(t.filter(l=>l!==r))}>✕</button>
        </div>`)}
      ${t.length<40?m`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,r=>{r&&r!=="none"&&!t.includes(r)&&i([...t,r])})}
          </div>`:b}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let t=this._doc.settings.media_presets??[],e=i=>this.change(o=>o.settings.media_presets=i.length?i:void 0),n=(i,o)=>e(t.map((r,a)=>a===i?{...r,...o}:r));return m`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>m`<option value=${i}></option>`)}
      </datalist>
      ${t.map((i,o)=>m`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${r=>n(o,{label:r.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${i.type} @change=${r=>n(o,{type:r.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${i.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${r=>n(o,{content:r.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((r,a)=>a!==o))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<30?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:U("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:b}`}renderItemActions(t,e,n){let i=this.isEditor,o=(a,l)=>{let c=t?.[a];n(yh(t,a,l===null?null:{...c??{action:"default"},...l}))},r=a=>a==="navigate"?"/lovelace/garden":a==="url"?"https://":a==="perform_action"?"script.turn_on":e??"light.kitchen";return m`<h4>${this.t("item_actions")}</h4>
      <p class="fp3d-sub">${this.t("item_actions_hint")}</p>
      ${i&&!this.isHaAdmin?m`<p class="fp3d-sub">${this.t("item_action_perform_admin")}</p>`:b}
      ${Ta.map(a=>{let l=t?.[a]??null,c=l?.action??"default",d=c!=="default"&&c!=="none",u=!i||vh(l,this.isHaAdmin);return m`<div class="fp3d-form fp3d-item-action" data-gesture=${a}>
          <label class="fp3d-field fp3d-wide"
            >${this.t(`item_gesture_${a}`)}
            <select ?disabled=${!i} @change=${h=>{let p=h.target.value;o(a,p==="default"?null:{action:p,target:null,data:null})}}>
              ${_h.map(h=>m`<option value=${h} ?selected=${h===c} ?disabled=${!bh(h,l,this.isHaAdmin)}>${this.t(`item_action_${h}`)}</option>`)}
            </select></label
          >
          ${d?m`<label class="fp3d-field fp3d-wide"
                >${this.t(`item_target_${c}`)}
                <input type="text" maxlength="2000" .value=${l?.target??""} ?disabled=${u} placeholder=${r(c)} @change=${h=>o(a,{target:h.target.value.trim()||null})}
              /></label>`:b}
          ${c==="perform_action"?m`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="3"
                  spellcheck="false"
                  ?disabled=${u}
                  placeholder='{"entity_id": "script.movie_night"}'
                  .value=${l?.data?JSON.stringify(l.data,null,1):""}
                  @change=${h=>{let p=h.target;p.setCustomValidity("");try{o(a,{data:wh(p.value)})}catch{p.setCustomValidity(this.t("own_data_bad")),p.reportValidity()}}}
                ></textarea></label
              >`:b}
          ${d?m`<label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!l?.confirm} ?disabled=${u} @change=${h=>o(a,{confirm:h.target.checked||void 0})} />
                  ${this.t("item_action_confirm")}</label
                >
                ${l?.confirm?m`<label class="fp3d-field fp3d-wide"
                      >${this.t("item_action_confirm_text")}
                      <input type="text" maxlength="300" .value=${l.confirm_text??""} ?disabled=${u} placeholder=${this.t("item_action_confirm_placeholder")} @change=${h=>o(a,{confirm_text:h.target.value.trim()||null})}
                    /></label>`:b}`:b}
        </div>`})}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=o=>this.change(r=>r.settings.buttons=o.length?o:void 0),n=(o,r)=>e(t.map((a,l)=>l===o?{...a,...r}:a)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return m`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${t.map((o,r)=>m`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${a=>n(r,{label:a.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${a=>n(r,{action:a.target.value})}>
              ${Kc.map(a=>m`<option value=${a} ?selected=${a===o.action}>${this.t(`own_action_${a}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(o.icon??null,a=>n(r,{icon:a}))}
          ${o.action!=="fire_dom_event"?m`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${o.action}`)}
                <input type="text" .value=${o.target??""} placeholder=${i[o.action]} @change=${a=>n(r,{target:a.target.value.trim()||null})}
              /></label>`:b}
          ${o.action==="service"||o.action==="fire_dom_event"?m`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${o.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${o.data?JSON.stringify(o.data,null,1):""}
                  @change=${a=>{a.target.setCustomValidity("");let l=a.target.value.trim();if(!l)return n(r,{data:null});try{let c=JSON.parse(l);c&&typeof c=="object"&&!Array.isArray(c)&&n(r,{data:c})}catch{a.target.setCustomValidity(this.t("own_data_bad")),a.target.reportValidity()}}}
                ></textarea></label
              >`:b}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${r===0} @click=${()=>e([...t.slice(0,r-1),o,t[r-1],...t.slice(r+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((a,l)=>l!==r))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:U("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:b}`}paneView(){let e=this.renderRoot.querySelector("fp3d-view3d")?.currentView();if(!e)return null;let n=e.target;return{theta:M(e.theta),phi:M(e.phi),radius:M(e.radius),...n?{target:{x:M(n.x),y:M(n.y),z:M(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){this.tell(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){this.tell(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderDirectorTriggers(t,e){if(!this.hass)return b;let i=t.triggers??[],o=a=>this.change(l=>l.settings.director={...l.settings.director??{},triggers:a.length?a:null}),r=vt("camera_cockpit");return m`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${i.map((a,l)=>m`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"),a.entity||null,void 0,this.entityOptions(c=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(c)),c=>o(i.map((d,u)=>u===l?{...d,entity:c&&c!=="none"?c:""}:d).filter(d=>d.entity)))}
          ${this.entitySelect(this.t("director_doorbell_camera"),a.camera,void 0,this.entityOptions(c=>c.startsWith("camera.")&&e.includes(c),e.join(",")),c=>o(i.map((d,u)=>u===l?{...d,camera:c&&c!=="none"?c:null}:d)))}
          <button class="fp3d-btn" ?disabled=${!r} @click=${()=>o(i.filter((c,d)=>d!==l))}>✕ ${this.t("delete")}</button>
        </div>`)}
      ${i.length<20&&r?m`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"),null,void 0,this.entityOptions(a=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(a)),a=>{a&&a!=="none"&&o([...i,{entity:a,camera:null}])})}
          </div>`:b}
    </div>`}renderDirector(){let t=this.hass,e=this._doc.settings.director??{},n=u=>this.change(h=>h.settings.director={...h.settings.director??{},...u}),i=vt("camera_cockpit"),o=Mp(),r=[...new Set(this._doc.floors.flatMap(u=>u.placements.map(h=>h.entity_id)))],a=t?Ep(t):[],l=t?e.doorbell_entity??a[0]??null:null,c=t&&l?Pp(t,l,r):null,d=(u,h,p,f=!i)=>m`<label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${h} ?disabled=${f} @change=${_=>p(_.target.checked)} /> ${this.t(u)}</label
      >`;return m`<details class="fp3d-section">
      <summary>🎬 ${this.t("director")}</summary>
      <p class="fp3d-sub">${this.t("director_hint")}</p>
      ${i?b:m`<p class="fp3d-sub">🔒 ${this.t("pro_feature_camera_cockpit")}</p>`}
      <div class="fp3d-form">
        ${d("director_here",o,u=>{Sp(u),this.dispatchEvent(new CustomEvent("director-here",{bubbles:!0,composed:!0})),this.requestUpdate()})}
        <p class="fp3d-sub fp3d-wide">${this.t("director_here_hint")}</p>
        ${d("director_doorbell",!!e.doorbell,u=>n({doorbell:u}))}
        ${e.doorbell&&t?m`${this.entitySelect(this.t("director_doorbell_entity"),e.doorbell_entity??null,a[0]??null,this.entityOptions(u=>u.startsWith("event.")||u.startsWith("binary_sensor.")),u=>n({doorbell_entity:u==="none"?null:u}))}
            ${this.entitySelect(this.t("director_doorbell_camera"),e.doorbell_camera??null,c,this.entityOptions(u=>u.startsWith("camera.")&&r.includes(u),r.join(",")),u=>n({doorbell_camera:u==="none"?null:u}))}
            ${!a.length&&!e.doorbell_entity?m`<p class="fp3d-sub fp3d-wide">${this.t("director_no_doorbell")}</p>`:b}`:b}
        <label class="fp3d-field fp3d-wide"
          >${this.t("director_motion")}
          <select ?disabled=${!i} @change=${u=>n({motion:u.target.value})}>
            ${["off","person","all"].map(u=>m`<option value=${u} ?selected=${(e.motion??"off")===u}>${this.t(`director_motion_${u}`)}</option>`)}
          </select></label
        >
        ${d("director_appliances",!!e.appliances,u=>n({appliances:u}))}
        ${d("director_alerts",!!e.alerts,u=>n({alerts:u}))}
        ${this.renderDirectorTriggers(e,r)}
        ${d("director_live",!!e.live,u=>n({live:u}))}
        <p class="fp3d-sub fp3d-wide">${this.t("director_live_hint")}</p>
        ${this.num(this.t("director_hold"),e.hold??30,u=>n({hold:Math.min(600,Math.max(10,Math.round(u)))}),5,10)}
      </div>
      <p class="fp3d-sub">${this.t("director_back_hint")}</p>
    </details>`}editorsList=null;editorsAsked=!1;editorsMsg=null;renderEditors(){let t=this.hass;if(!t)return b;let e=i=>i.then(o=>{this.editorsList=o,this.editorsMsg=null}).catch(o=>{let r=o?.code;this.editorsMsg=this.t(r==="no_admin"?"editors_no_admin":"editors_failed")}).finally(()=>this.requestUpdate());this.editorsAsked||(this.editorsAsked=!0,e(bc(t)));let n=this.editorsList;return m`<div class="fp3d-form">
      <p class="fp3d-sub fp3d-wide">${this.t("editors_hint")}</p>
      ${n?n.users.map(i=>m`<label class="fp3d-check fp3d-wide"
              ><input
                type="checkbox"
                .checked=${i.editor}
                ?disabled=${i.editor&&Lf(n.users,i.id)}
                @change=${o=>{e(tr(t,Hf(n.users,i.id,o.target.checked)))}}
              />
              ${i.name||i.id}${i.is_admin?m` <span class="fp3d-sub">(${this.t("editors_admin")})</span>`:b}</label
            >`):m`<p class="fp3d-sub fp3d-wide">${this.t("loading")}</p>`}
      ${this.editorsMsg?m`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.editorsMsg}</p>`:b}
      ${n?.custom?m`<div class="fp3d-actions fp3d-wide"><button class="fp3d-btn" @click=${()=>{e(tr(t,null))}}>${this.t("editors_reset")}</button></div>`:b}
      ${n?this.renderTabletUsers(n.users):b}
      ${this.renderDemoSwitch()}
    </div>`}renderDemoSwitch(){let t=this._doc.settings.demo;return t===void 0?b:m`<h4 class="fp3d-wide">${this.t("demo_states")}</h4>
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${t} @change=${e=>this.setDemo(e.target.checked)} /> ${this.t("demo_states")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("demo_states_hint")}</p>`}setDemo(t){this.change(e=>e.settings.demo=t)}renderTabletUsers(t){let e=this._doc.settings.tablet_users??[];return m`<h4 class="fp3d-wide">${this.t("tablet_users")}</h4>
      <p class="fp3d-sub fp3d-wide">${this.t("tablet_users_hint")}</p>
      ${t.map(n=>m`<label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${e.includes(n.id)} @change=${i=>this.setTabletUser(n.id,i.target.checked)} />
          ${n.name||n.id}</label
        >`)}
      ${this.num(this.t("tablet_idle"),this._doc.settings.tablet_idle??Df,n=>this.setTabletIdle(n),10,0)}`}setTabletUser(t,e){this.change(n=>n.settings.tablet_users=Cf(n.settings.tablet_users,t,e))}setTabletIdle(t){this.change(e=>e.settings.tablet_idle=Math.min(86400,Math.max(0,Math.round(t))))}voicePipes=null;voicePipesAsked=!1;voiceSentences=null;voiceSentencesMsg=null;renderVoicePipeline(){let t=this.hass;if(!t)return b;this.voicePipesAsked||(this.voicePipesAsked=!0,gc(t).then(i=>{this.voiceSentences=i.sentences,this.requestUpdate()}).catch(()=>this.voiceSentences="off"),t.callWS({type:"assist_pipeline/pipeline/list"}).then(i=>{this.voicePipes=i.pipelines.map(o=>({id:o.id,name:o.name,stt:!!o.stt_engine})),this.requestUpdate()}).catch(()=>{}));let e=xp(),n=["distinct","all","off"];return m`<div class="fp3d-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_sentences")}
        <select
          ?disabled=${!this.isHaAdmin||this.voiceSentences===null}
          @change=${i=>{let o=i.target.value;this.voiceSentences=o,this.voiceSentencesMsg=null,_c(t,o).then(r=>{r.kept?.length&&(this.voiceSentencesMsg=this.t("voice_sentences_kept",{langs:r.kept.join(", ")})),this.requestUpdate()}).catch(()=>{this.voiceSentencesMsg=this.t("voice_sentences_failed"),this.requestUpdate()})}}
        >
          ${n.map(i=>m`<option value=${i} ?selected=${(this.voiceSentences??"off")===i}>${this.t(`voice_sentences_${i}`)}</option>`)}
        </select></label
      >
      ${this.voiceSentencesMsg?m`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.voiceSentencesMsg}</p>`:b}
      <p class="fp3d-sub fp3d-wide">${this.t("voice_sentences_hint")} ${this.t("voice_sentences_file")}</p>
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_pipeline")}
        <select
          @change=${i=>{$p(i.target.value||null),this.requestUpdate()}}
        >
          <option value="" ?selected=${!e}>${this.t("voice_pipeline_preferred")}</option>
          ${(this.voicePipes??[]).map(i=>m`<option value=${i.id} ?selected=${e===i.id} ?disabled=${!i.stt}>${i.name}${i.stt?"":` (${this.t("voice_pipeline_no_stt")})`}</option>`)}
        </select></label
      >
    </div>`}renderVoice(){let t=vp(),e=[...this.t("voice_examples").split("|"),...Pf(this.hass?.language??"en")];return m`<details class="fp3d-section">
      <summary>🎙️ ${this.t("voice")}</summary>
      <p class="fp3d-sub">${this.t("voice_hint")}</p>
      <p class="fp3d-sub"><b>${this.t("voice_understands")}</b></p>
      <ul class="fp3d-voice-list">
        ${e.map(n=>m`<li>${n}</li>`)}
      </ul>
      <div class="fp3d-form">
        <label class="fp3d-check fp3d-wide"
          ><input
            type="checkbox"
            .checked=${t}
            @change=${n=>{yp(n.target.checked),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0})),this.requestUpdate()}}
          />
          ${this.t("voice_here")}</label
        >
        <label class="fp3d-wide"
          >${this.t("screen_name")}
          <input
            type="text"
            .value=${wp()}
            placeholder=${this.t("screen_name_placeholder")}
            @change=${n=>{kp(n.target.value),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0}))}}
          />
        </label>
      </div>
      <p class="fp3d-sub">${this.t("screen_name_hint")}</p>
      ${this.renderVoicePipeline()}
      <p class="fp3d-sub">${this.t("voice_needs")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.dispatchEvent(new CustomEvent("mic-probe",{bubbles:!0,composed:!0}))}>${this.t("director_mic_test")}</button>
      </div>
      <p class="fp3d-sub">${this.t("director_mic_hint")}</p>
    </details>`}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let o=i.slice(7),r=this.entityOptions(l=>Gt(l)),a=l=>l.includes(o)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...r.filter(l=>a(l.id)),...r.filter(l=>!a(l.id))]},n=(i,o)=>{let r=structuredClone(this._doc);r.presence=r.presence.filter(a=>a.person!==i),o&&o!=="none"&&r.presence.push({person:i,sensor:o}),this.setDoc(r)};return m`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(i=>this.entitySelect(`${st(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(o=>o.person===i)?.sensor??null,void 0,e(i),o=>n(i,o))):m`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderShowWhen(t){let e=t.show_when??{},n=e.intervals??[],i=!this.isEditor,o=l=>{let c={...e,...l};this.updateFurniture({show_when:c.entity&&c.entity!=="none"||c.intervals?.length?c:null})},r=(l,c)=>o({intervals:n.map((d,u)=>u===l?Lm(d,c):d)}),a=(l,c,d,u)=>m`<label class="fp3d-field"
        >${l}
        <input type=${c} ?disabled=${i} .value=${d?c==="date"?`2028-${d}`:d:""} @change=${h=>{let p=h.target.value;u(p?c==="date"?p.slice(5):p:null)}}
      /></label>`;return m`<details class="fp3d-section" ?open=${!!t.show_when}>
      <summary>${this.t("show_when")}</summary>
      <div class="fp3d-form">
        ${this.entitySelect(this.t("show_when_entity"),e.entity??null,void 0,this.entityOptions(()=>!0),l=>o({entity:l==="none"?null:l}))}
        ${n.map((l,c)=>m`${a(this.t("show_from"),"date",l.from,d=>r(c,{from:d}))} ${a(this.t("show_to"),"date",l.to,d=>r(c,{to:d}))}
            ${a(this.t("show_start"),"time",l.start,d=>r(c,{start:d}))} ${a(this.t("show_end"),"time",l.end,d=>r(c,{end:d}))}
            <button class="fp3d-pin" title=${this.t("delete")} ?disabled=${i} @click=${()=>o({intervals:n.filter((d,u)=>u!==c)})}>✕</button>`)}
      </div>
      ${i||n.length>=12?b:m`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>o({intervals:[...n,{}]})}>+ ${this.t("show_add_interval")}</button></div>`}
      <p class="fp3d-sub">${this.t("show_when_hint")}</p>
    </details>`}renderStateLinks(t){return m`${this.entitySelect(this.t("furn_state_entity"),t.state_entity??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture(hd(t,e)))}
              ${t.state_entity&&t.state_entity!=="none"?m`${this.entitySelect(this.t("furn_state_entity2"),t.state_entity2??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture({state_entity2:e==="none"?null:e}))}
                    ${t.state_entity2&&t.state_entity2!=="none"?m`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isEditor} @change=${e=>this.updateFurniture({state_split:e.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${t.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${t.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:b}`:b}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderColourRoles(t){let e=Wh(t.type);if(!e.length)return b;let n=this.isEditor,i=(a,l)=>this.updateFurniture({colors:La(t.colors,a,l)}),o=(a,l)=>this.updateFurniture({materials:km(t.materials,a,l||null)}),r=a=>this.t(`material_${a}`);return m`<div class="fp3d-form">
      <h4 class="fp3d-lib-head fp3d-wide">${this.t("colours")}</h4>
      ${e.map(a=>{let l=Dh(t.colors,a);if(a==="paint")return this.renderPaint(t,l);let c=l?Ha.find(u=>u.hex===l):void 0,d=wm(t.materials,a);return m`<div class="fp3d-field fp3d-colour-role">
          <span>${this.t(`colour_role_${a}`)}</span>
          <span class="fp3d-colour-pick">
            <input type="color" class=${l?"":"fp3d-colour-unset"} aria-label=${this.t(`colour_role_${a}`)} .value=${l??"#808080"} ?disabled=${!n}
              @change=${u=>i(a,u.target.value)} />
            <select ?disabled=${!n} @change=${u=>i(a,u.target.value||null)}>
              <option value="" ?selected=${!l}>${this.t("colour_theme")}</option>
              ${l&&!c?m`<option value=${l} selected>${this.t("colour_own")}</option>`:b}
              ${Ha.map(u=>m`<option value=${u.hex} ?selected=${u===c}>${this.t(`colour_preset_${u.id}`)}</option>`)}
            </select>
            <select class="fp3d-material" aria-label=${this.t("material_of",{role:this.t(`colour_role_${a}`)})} ?disabled=${!n}
              @change=${u=>o(a,u.target.value)}>
              <option value="" ?selected=${!d}>${this.t("material_usual",{material:r(ym(a))})}</option>
              ${_l.map(u=>m`<option value=${u} ?selected=${u===d}>${r(u)}</option>`)}
            </select>
          </span>
        </div>`})}
      <p class="fp3d-sub fp3d-wide">${this.t("colours_hint")}</p>
    </div>`}renderPaint(t,e){let n=this.isEditor,i=this.t("colour_role_paint");return m`<div class="fp3d-field fp3d-colour-role fp3d-wide">
      <span>${i}</span>
      <span class="fp3d-paint">
        ${Lh.map(o=>{let r=this.t(`paint_${o.id}`);return m`<button type="button" class="fp3d-swatch" style=${`background:${o.hex}`} title=${r} aria-label=${r} aria-pressed=${e===o.hex?"true":"false"}
            ?disabled=${!n} @click=${()=>this.setPaint(t,o.hex)}></button>`})}
        <input type="text" class="fp3d-paint-hex" maxlength="7" placeholder="#rrggbb" aria-label=${this.t("paint_hex")} .value=${e??""} ?disabled=${!n}
          @change=${o=>this.setPaint(t,o.target.value)} />
        <input type="color" class=${e?"":"fp3d-colour-unset"} aria-label=${this.t("paint_hex")} .value=${e??"#808080"} ?disabled=${!n}
          @change=${o=>this.setPaint(t,o.target.value)} />
        ${e?m`<button type="button" ?disabled=${!n} @click=${()=>this.setPaint(t,"")}>${this.t("colour_theme")}</button>`:b}
      </span>
    </div>`}setPaint(t,e){let n=Ch(e);e.trim()&&!n||this.updateFurniture({colors:La(t.colors,"paint",n)})}setHousehold(t){let e=structuredClone(this._doc);e.settings.household={...e.settings.household??{},...t},this.setDoc(e)}renderHouseholdForm(t){let e=this.isEditor,n=vt("household"),i=b,o=(c,d,u,h,p)=>m`<label class="fp3d-field fp3d-wide"
        >${c}
        <select ?disabled=${!e} @change=${f=>p(f.target.value)}>
          ${u.map(f=>m`<option value=${f} ?selected=${f===d}>${this.t(h(f))}</option>`)}
        </select></label
      >`;if(t.type==="waste_bin"){let c=rp(t),d=t.bin_kind??"rest",[u,h]=dp(t),p=this.entityOptions(f=>f.startsWith("calendar.")||f.startsWith("sensor."));return m`<div class="fp3d-form fp3d-links">
        ${o(this.t("bin_shape"),c,ra,f=>`bin_shape_${f}`,f=>{let[_,g,y]=op[f];this.updateFurniture({variant:f==="bin240"?null:f,w:_,d:g,h:y})})}
        ${o(this.t("bin_kind"),d,ip,f=>`bin_kind_${f}`,f=>{let[_,g]=la(f,cp());this.updateFurniture({bin_kind:f,bin_color:_,bin_lid:g===_?null:g})})}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${u} ?disabled=${!e} @change=${f=>this.updateFurniture({bin_color:f.target.value})}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${h} ?disabled=${!e} @change=${f=>this.updateFurniture({bin_lid:f.target.value})}
        /></label>
        ${n?m`${this.entitySelect(this.t("bin_source"),t.bin_source??null,void 0,p,f=>this.updateFurniture({bin_source:f==="none"?null:f}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${t.bin_match??""} placeholder=${this.t(`bin_kind_${d}`)} ?disabled=${!e}
                  @change=${f=>this.updateFurniture({bin_match:f.target.value.trim()||null})} /></label>
              ${this.num(this.t("bin_from"),this._doc.settings.household?.bin_from??14,f=>this.setHousehold({bin_from:Math.max(0,Math.min(24,f))}),.5)}
              ${this.num(this.t("bin_until"),this._doc.settings.household?.bin_until??12,f=>this.setHousehold({bin_until:Math.max(0,Math.min(24,f))}),.5)}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_hint")}</p>
              ${this.entitySelect(this.t("bin_out"),t.bin_out??null,void 0,this.entityOptions(f=>/^(input_boolean|switch|binary_sensor)\./.test(f)),f=>this.updateFurniture({bin_out:f==="none"?null:f}))}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_out_hint")}</p>
              <label class="fp3d-check fp3d-wide"
                ><input type="checkbox" .checked=${!!this._doc.settings.household?.bin_next_only} ?disabled=${!e} @change=${f=>this.setHousehold({bin_next_only:f.target.checked||null})} />
                ${this.t("bin_next_only")}</label
              >
              <label class="fp3d-field"
                >${this.t("bin_days")}
                <input type="number" inputmode="numeric" min="0" max="60" step="1" placeholder=${this.t("bin_days_always")} .value=${this._doc.settings.household?.bin_days==null?"":String(this._doc.settings.household.bin_days)} ?disabled=${!e}
                  @change=${f=>{let _=parseInt(f.target.value,10);this.setHousehold({bin_days:Number.isFinite(_)?Math.max(0,Math.min(60,_)):null})}}
              /></label>
              <p class="fp3d-sub fp3d-wide">${this.t("bin_tags_hint")}</p>`:i}
      </div>`}let r=ap(t),a=this.entityOptions(c=>["binary_sensor.","input_boolean.","sensor.","counter.","input_number."].some(d=>c.startsWith(d))),l=this.entityOptions(c=>c.startsWith("binary_sensor."));return m`<div class="fp3d-form fp3d-links">
      ${o(this.t("mailbox_shape"),r,aa,c=>`mailbox_shape_${c}`,c=>{let[d,u,h]=sp[c];this.updateFurniture({variant:c==="wall"?null:c,w:d,d:u,h})})}
      ${n?m`${this.entitySelect(this.t("mailbox_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,a,c=>this.updateFurniture({entity:c??"none"}))}
            ${this.entitySelect(this.t("mailbox_door"),t.mailbox_door??null,void 0,l,c=>this.updateFurniture({mailbox_door:c==="none"?null:c}))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`:i}
    </div>`}renderHouseholdExtras(t){let e=t.type==="plant"||np(t.type),n=t.type==="washer"||t.type==="dryer"||t.type==="dishwasher",i=t.type==="fridge"||t.type==="fridge_smart",o=Te(t.type);if(!e&&!o)return b;if(!vt("household"))return b;let r=this.entityOptions(d=>d.startsWith("sensor.")),a=this.entityOptions(d=>d.startsWith("binary_sensor.")),l=this.entityOptions(d=>["sensor.","binary_sensor.","input_boolean.","input_datetime.","input_number."].some(u=>d.startsWith(u))),c=d=>d==="none"?null:d;return m`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("pro_name_household")}</b></p>
      ${e?m`${this.entitySelect(this.t("hh_moisture"),t.moisture??null,void 0,this.entityOptions(d=>d.startsWith("plant.")||d.startsWith("sensor.")),d=>this.updateFurniture({moisture:c(d)}))}
            ${this.num(this.t("hh_moisture_min"),t.moisture_min??20,d=>this.updateFurniture({moisture_min:Math.max(0,Math.min(100,Math.round(d)))}),1)}`:b}
      ${n?m`${this.entitySelect(this.t("hh_remaining"),t.remaining??null,void 0,r,d=>this.updateFurniture({remaining:c(d)}))}
            ${this.entitySelect(this.t("hh_door"),t.door_left??null,void 0,a,d=>this.updateFurniture({door_left:c(d)}))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`:b}
      ${i?m`${t.type==="fridge"?this.entitySelect(this.t("hh_fridge_door"),t.door_left??null,void 0,a,d=>this.updateFurniture({door_left:c(d)})):b}
            ${this.num(this.t("hh_door_alarm"),t.door_alarm??2,d=>this.updateFurniture({door_alarm:Math.max(.5,Math.min(120,d))}),.5)}`:b}
      ${o?m`${this.entitySelect(this.t("hh_service_entity"),t.service??null,void 0,l,d=>this.updateFurniture({service:c(d)}))}
            ${t.service&&t.service!=="none"?this.num(this.t("hh_service_min"),t.service_min??10,d=>this.updateFurniture({service_min:Math.max(0,d)}),1):b}
            ${t.service&&t.service!=="none"||t.service2&&t.service2!=="none"?this.entitySelect(this.t("hh_service2_entity"),t.service2??null,void 0,l,d=>this.updateFurniture({service2:c(d)})):b}
            ${t.service2&&t.service2!=="none"?this.num(this.t("hh_service2_min"),t.service2_min??10,d=>this.updateFurniture({service2_min:Math.max(0,d)}),1):b}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`:b}
    </div>`}renderAwningFields(t){let e=this.isEditor,n=this.entityOptions(r=>r.startsWith("sensor.")||r.startsWith("input_number.")||r.startsWith("number.")),i={arm:{w:3,d:2.5,y:2.3,pitch:null},drop:{w:2.4,d:1.2,y:2.3,pitch:20},vertical:{w:2,d:.2,y:2.3,pitch:null},pergola:{w:4,d:3.5,y:2.6,pitch:6},side:{w:3,d:.2,y:1.8,pitch:null}},o=t.variant??"arm";return m`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!e}
          @change=${r=>{let a=r.target.value,l=i[a];this.updateFurniture({variant:a==="arm"?null:a,w:l.w,d:l.d,mount_y:l.y,awning_pitch:l.pitch})}}
        >
          ${Object.keys(i).map(r=>m`<option value=${r} ?selected=${o===r}>${this.t(`awning_kind_${r}`)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t(`awning_kind_${o}_hint`)}</p>
      ${o==="vertical"||o==="side"?b:this.num(this.t("awning_pitch"),t.awning_pitch??12,r=>this.updateFurniture({awning_pitch:Math.max(0,Math.min(80,Math.round(r)))}),1)}
      ${this.num(this.t("awning_time"),t.awning_time??20,r=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(r)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,r=>this.updateFurniture({awning_position:r==="none"?null:r}))}
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${t.awning_valance!==!1} ?disabled=${!e} @change=${r=>this.updateFurniture({awning_valance:r.target.checked})} />
        ${this.t("awning_valance")}</label
      >
      <label class="fp3d-check fp3d-wide" title=${this.t("awning_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${r=>this.updateFurniture({awning_invert:r.target.checked})} />
        ${this.t("awning_invert")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`}renderMotionFields(t){let e=this.isEditor,n=this.entityOptions(o=>o.startsWith("sensor.")||o.startsWith("input_number.")||o.startsWith("number.")),i=t.variant==="left"||t.variant==="right"?t.variant:"both";return m`${Me(t.type)==="curtain"?m`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!e} @change=${o=>{let r=o.target.value;this.updateFurniture({variant:r==="both"?null:r})}}>
              ${["both","left","right"].map(o=>m`<option value=${o} ?selected=${i===o}>${this.t(`curtain_side_${o}`)}</option>`)}
            </select></label
          >`:b}
      ${this.num(this.t("motor_time"),t.awning_time??20,o=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(o)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,o=>this.updateFurniture({awning_position:o==="none"?null:o}))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${o=>this.updateFurniture({awning_invert:o.target.checked})} />
        ${this.t("awning_invert")}</label
      >`}renderTechForm(t){if(!this.hass)return b;let e=this.isEditor,n=t.type==="wifi_ap",i=["","wall"],o=l=>{let[c,d,u]=bd[`${t.type}:${l}`];this.updateFurniture({variant:l||null,w:c,d,h:u,mount_y:null})},r=this.entityOptions(l=>l.startsWith("sensor.")),a=this.entityOptions(l=>(n?/^(binary_sensor|sensor|device_tracker|switch|button|update)\./:/^(water_heater|climate|switch|input_boolean|sensor)\./).test(l),n);return m`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t("tech_mount")}
        <select ?disabled=${!e} @change=${l=>o(l.target.value)}>
          ${i.map(l=>m`<option value=${l} ?selected=${(t.variant??"")===l}>${this.t(`${t.type}_${l||"std"}`)}</option>`)}
        </select></label
      >
      ${this.entitySelect(this.t(n?"ap_status":"heater_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,a,l=>this.updateFurniture({entity:l&&l!=="none"?l:"none"}))}
      ${n?this.entitySelect(this.t("ap_clients_sensor"),t.clients??null,void 0,r,l=>this.updateFurniture({clients:l&&l!=="none"?l:null})):m`${this.entitySelect(this.t("heater_temp"),t.water_temp??null,void 0,r,l=>this.updateFurniture({water_temp:l&&l!=="none"?l:null}))}
            ${this.entitySelect(this.t("furn_power"),typeof t.power=="string"&&t.power!=="none"?t.power:null,void 0,this.entityOptions(l=>this.isPowerSensor(l)),l=>this.updateFurniture({power:l&&l!=="none"?l:"none"}))}`}
      <p class="fp3d-sub fp3d-wide">${this.t(n?"ap_hint":"heater_hint")}</p>
      <div class="fp3d-form">${this.markerSelect(t.marker??null,l=>this.updateFurniture({marker:l}))}${this.iconInput(t.icon,l=>this.updateFurniture({icon:l}))}</div>
    </div>`}renderGangsForm(t){if(!this.hass)return b;let e=this.isEditor,n=md(t),i=t.type==="wall_socket",o=this.entityOptions(d=>/^(light|switch|input_boolean|fan)\./.test(d)),r=this.entityOptions(d=>this.isPowerSensor(d)),a=d=>this.updateFurniture({gangs:d.length>1||d[0]?.entity||d[0]?.power?d:null}),l=(d,u)=>a(n.map((h,p)=>p===d?{...h,...u}:h)),c=d=>{let u=Array.from({length:d},(h,p)=>n[p]??{entity:null});this.updateFurniture({gangs:d>1||u[0].entity||u[0].power?u:null,w:gd(d)})};return m`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field"
        >${this.t(i?"gang_count_socket":"gang_count_switch")}
        <select ?disabled=${!e} @change=${d=>c(Number(d.target.value))}>
          ${Array.from({length:Oo},(d,u)=>u+1).map(d=>m`<option value=${d} ?selected=${n.length===d}>${d}</option>`)}
        </select></label
      >
      ${i?m`<label class="fp3d-field"
            >${this.t("socket_kind")}
            <select ?disabled=${!e} @change=${d=>this.updateFurniture({variant:d.target.value||null})}>
              ${["","outdoor"].map(d=>m`<option value=${d} ?selected=${(t.variant??"")===d}>${this.t(d?"socket_outdoor":"socket_indoor")}</option>`)}
            </select></label
          >`:b}
      ${n.map((d,u)=>m`${this.entitySelect(`${this.t(i?"gang_socket":"gang_switch")}${n.length>1?` ${u+1}`:""}`,d.entity,void 0,o,h=>l(u,{entity:h&&h!=="none"?h:null}))}
        ${i?this.entitySelect(`${this.t("furn_power")}${n.length>1?` ${u+1}`:""}`,d.power??null,void 0,r,h=>l(u,{power:h&&h!=="none"?h:null})):b}`)}
      <p class="fp3d-sub fp3d-wide">${this.t(i?"gang_socket_hint":"gang_switch_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${d=>this.updateFurniture({confirm:d.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <div class="fp3d-form">${this.markerSelect(t.marker??null,d=>this.updateFurniture({marker:d}))}${this.iconInput(t.icon,d=>this.updateFurniture({icon:d}))}</div>
    </div>`}renderFurnitureLinks(t){if(!this.hass)return b;let e=this.hass,n=u=>this.keptForPlan(`furniture|${t.id}|${u}`,()=>{let h=structuredClone(this._doc.floors);for(let p of h)for(let f of p.furniture)f.id===t.id&&(f[u]=null);return pn(e,h).get(t.id)?.[u]??null}),i=Vn(t.type),o=Lt(t.type),r=he(t.type),a=Im(t.type),l=this.entityOptions(Fm(e,t.type),t.type),c=this.entityOptions(u=>this.isPowerSensor(u)),d=t.type==="fridge_smart"?this.entityOptions(u=>u.startsWith("binary_sensor.")):[];return m`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?m`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(a.label),t.entity??null,n("entity"),l,u=>this.updateFurniture({entity:u}),a.domains)}
        ${t.type==="lamp_fan"?m`${this.entitySelect(this.t("fan_entity"),t.fan??null,void 0,this.entityOptions(u=>u.startsWith("fan.")),u=>this.updateFurniture({fan:u&&u!=="none"?u:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("fan_hint")}</p>`:b}
        ${r?m`${this.entitySelect(this.t("heat_sensor"),t.heat_sensor??null,void 0,this.entityOptions(u=>/^(binary_sensor|sensor|switch|input_boolean|number)\./.test(u)),u=>this.updateFurniture({heat_sensor:u&&u!=="none"?u:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`:b}
        ${bl(t.type)?m`${this.entitySelect(this.t("temp_sensor"),t.temp_sensor??null,Sm(e,{...t,temp_sensor:null}),this.entityOptions(u=>u.startsWith("sensor.")&&e.states[u]?.attributes.device_class==="temperature"||/^(climate|water_heater)\./.test(u)),u=>this.updateFurniture({temp_sensor:u}))}
              <p class="fp3d-sub fp3d-wide">${this.t("temp_sensor_hint")}</p>`:b}
        ${t.type==="awning"?this.renderAwningFields(t):Me(t.type)?this.renderMotionFields(t):b}
        ${!o&&!nn(t.type)&&!Vo(t.type)?this.renderStateLinks(t):b}
        ${o&&t.entity&&t.entity!=="none"?m`${this.entitySelect(this.t("furn_color_entity"),t.color_entity??null,void 0,this.entityOptions(u=>u.startsWith("light.")&&u!==t.entity,t.entity),u=>this.updateFurniture({color_entity:u==="none"?null:u}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:b}
        ${o?this.glowScaleField(t.glow_scale,u=>this.updateFurniture({glow_scale:u})):b}
        ${o&&t.entity&&t.entity!=="none"?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!t.only_color} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({only_color:u.target.checked?"#ffd400":null})} />
                ${this.t("furn_only_color")}</label
              >
              ${t.only_color?m`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${t.only_color} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({only_color:u.target.value})} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:b}`:b}
        ${Sl(t.type)?m`${this.entitySelect(this.t("furn_meter_reading"),t.extra??null,void 0,this.entityOptions(u=>u.startsWith("sensor.")&&(["gas","water","volume"].includes(String(e.states[u]?.attributes.device_class??""))||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(String(e.states[u]?.attributes.unit_of_measurement??"")))),u=>this.updateFurniture({extra:u==="none"?null:u}))}`:b}
        ${o||t.type==="grid_point"||Sl(t.type)?b:this.entitySelect(this.t(Et(t.type)==="meter"?"energy_grid":Et(t.type)==="inverter"?"energy_solar_sensor":Et(t.type)==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,n("power"),c,u=>this.updateFurniture({power:u}))}
        ${!o&&t.power&&t.power!=="none"&&!nn(t.type)?m`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${t.run_w?String(t.run_w):""}
                ?disabled=${!this.isEditor}
                @change=${u=>{let h=Number(u.target.value);this.updateFurniture({run_w:h>0?Math.min(5e3,Math.round(h)):null})}}
            /></label>`:b}
        ${!o&&t.power&&t.power!=="none"&&!nn(t.type)?this.circuitSelect(t.circuit??null,t.power,u=>this.updateFurniture({circuit:u})):b}
        ${!o&&t.power&&t.power!=="none"&&!nn(t.type)?this.wireEnergySelect(t.energy??null,t.power,u=>this.updateFurniture({energy:u})):b}
        ${vt("energy_pro")&&!o&&!["grid_point","meter","inverter","home_battery"].includes(Et(t.type)??t.type)?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({holo:u.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:vt("energy_pro")&&Et(t.type)==="inverter"?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${t.plant_card!==!1} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({plant_card:u.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${t.plant_card!==!1?m`${this.len(this.t("holo_right"),t.plant_right??0,u=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,M(u)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,u=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,M(u)))||void 0}),.25)}`:b}`:b}
      </div>
      ${Et(t.type)==="meter"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,c,u=>this.updateFurniture({export:u==="none"?null:u}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:b}
      ${Et(t.type)==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let u=(this._doc.settings.roof.strings??[]).filter(h=>h.inverter===t.id).map(h=>h.name);return m`<p class="fp3d-sub fp3d-wide">${u.length?this.t("inverter_strings",{names:u.join(", ")}):this.t("inverter_strings_none")}</p>`})():b}
      ${Et(t.type)==="home_battery"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(u=>Gt(u)&&(e.states[u]?.attributes.device_class==="battery"||e.states[u]?.attributes.unit_of_measurement==="%")),u=>this.updateFurniture({soc:u==="none"?null:u}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,c,u=>this.updateFurniture({charge:u==="none"?null:u}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:b}
      ${Et(t.type)==="wallbox"?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(u=>Pl(u)||Gt(u)),u=>this.updateFurniture({status:u==="none"?null:u}))}
          </div>`:b}
      ${!o&&!Sl(t.type)?this.entitySelect(this.t("furn_extra"),t.extra??null,void 0,this.entityOptions(u=>u.startsWith("sensor.")),u=>this.updateFurniture({extra:u==="none"?null:u})):b}
      ${!o||t.entity?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isEditor} @change=${u=>this.updateFurniture({confirm:u.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,u=>this.updateFurniture({marker:u}))}${this.iconInput(t.icon,u=>this.updateFurniture({icon:u}))}</div>`:b}
      ${oe(t.type)?m`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,jd(e,pn(e,this._doc.floors).get(t.id)?.entity??null,null),this.entityOptions(u=>Gt(u)),u=>this.updateFurniture({room_sensor:u}))}
          </div>`:b}
      ${t.type==="fridge_smart"?m`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,d,u=>this.updateFurniture({door_left:u}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,d,u=>this.updateFurniture({door_right:u}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:b}
      ${Vo(t.type)?this.renderPictureRules(t):b}
      <p class="fp3d-sub">${this.t(o?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":oe(t.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){let e=this.isEditor,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(v=>v.items.filter(w=>w.vehicle).map(w=>({id:Dt(v.id,w.id),label:`${jt(w,n)} \xB7 ${fe(v,n)}`}))),o=v=>v.startsWith("device_tracker.")?this.hass?.states[v]?.attributes.source_type==="router"?2:0:1,r=[...this.entityOptions(v=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(v))].sort((v,w)=>o(v.id)-o(w.id)),a=this.entityOptions(v=>/^(sensor|input_select|select|input_text)\./.test(v)),l=t.type_entity?this.hass?.states[t.type_entity]:void 0,c=Array.isArray(l?.attributes.options)?l.attributes.options:[],d=t.types??[],u=v=>this.updateFurniture({types:v}),h=(v,w)=>m`<select ?disabled=${!e} @change=${k=>w(k.target.value||null)}>
        <option value="" ?selected=${!v}>${this.t("parking_vehicle_none")}</option>
        ${i.map(k=>m`<option value=${k.id} ?selected=${k.id===v}>${k.label}</option>`)}
      </select>`,p=this.floor,f=p?.rooms.find(v=>v.points.length>=3&&K([t.x,t.z],v.points)),_=t.vehicle?ft(t.vehicle):void 0,g=_?_.size[2]*(t.scale??1):0,y=!!f&&!!p&&g>p.height+1e-6;return m`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,r,v=>this.updateFurniture({entity:v==="none"?null:v}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${h(t.vehicle??null,v=>this.updateFurniture({vehicle:v}))}</label>
        ${i.length?b:m`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),v=>this.updateFurniture({scale:Math.min(150,Math.max(30,v))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,a,v=>this.updateFurniture({type_entity:v==="none"?null:v}))}
        ${t.type_entity?m`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${d.map((v,w)=>m`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${v.state}
                    ?disabled=${!e}
                    @change=${k=>u(d.map((S,$)=>$===w?{...S,state:k.target.value}:S))}
                  />
                  ${h(v.vehicle,k=>u(d.map((S,$)=>$===w?{...S,vehicle:k??""}:S)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>u(d.filter((k,S)=>S!==w))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${c.map(v=>m`<option value=${v}></option>`)}</datalist>
              ${e?m`<button class="fp3d-btn" @click=${()=>u([...d,{state:c[d.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:b}
            </div>`:b}
      </div>
      ${y?m`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Ut(this.hass,g,2),room:Ut(this.hass,p.height,2)})}</p>`:b}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){if(!vt("auto_pro"))return b;if(!this.hass)return b;let e=this.hass,n=t.car??{},i=Bd(e,{entity:t.entity,car:{device:n.device}}),o=l=>this.updateFurniture({car:{...n,...l}}),r=this.entityOptions(l=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(l)),a=(l,c,d)=>this.entitySelect(this.t(c),n[l]??null,i[l],d,u=>o({[l]:u==="none"?"none":u}));return m`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),n.device??null,void 0,r,l=>o({device:l==="none"?null:l}))}
        ${a("soc","car_soc",this.entityOptions(l=>Gt(l)))}
        ${a("range","car_range",this.entityOptions(l=>Gt(l)))}
        ${a("charging","car_charging",this.entityOptions(l=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(l)))}
        ${a("plugged","car_plugged",this.entityOptions(l=>Pl(l)))}
        ${a("lock","car_lock",this.entityOptions(l=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(l)))}
        ${a("climate","car_climate",this.entityOptions(l=>/^(climate|switch|binary_sensor|input_boolean)\./.test(l)))}
        ${a("tracker","car_tracker",this.entityOptions(l=>l.startsWith("device_tracker.")))}
      </div>
    </section>`}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!t.includes(i.image)&&t.push(i.image);return t}renderPictureRules(t){let e=this.isEditor,n=t.pictures??[];if(!vt("screens"))return m`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")}</p>
      </div>`;let i=y=>this.updateFurniture({pictures:y}),o=this.entityOptions(()=>!0),r=y=>["string","number","boolean"].includes(typeof y),a=y=>Object.entries(this.hass?.states[y]?.attributes??{}).filter(([v,w])=>r(w)&&v!=="friendly_name"&&v!=="icon").map(([v])=>v),l=(y,v)=>{let w=this.hass?.states[y];return w?String((v?w.attributes[v]:w.state)??""):""},c=(y,v)=>{let w=this.hass?.states[y],k=!v&&Array.isArray(w?.attributes.options)?w.attributes.options:[];return k.length?k:[l(y,v)]},d=y=>`${y.entity}\0${y.attribute??""}`,u=[];n.forEach((y,v)=>{let w=u.find(k=>d(k)===d(y));w?w.rows.push(v):u.push({entity:y.entity,attribute:y.attribute??null,rows:[v]})});let h=(y,v)=>i(n.map((w,k)=>y.rows.includes(k)?{...w,...v}:w)),p=(y,v)=>i(n.map((w,k)=>k===y?{...w,...v}:w)),f=this.storedPictures(),_=this.entityOptions(y=>y.startsWith("camera.")),g=y=>y.image.startsWith("camera:")?y.image.slice(7):null;return m`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?m`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${y=>this.updateFurniture({screen_bg:y.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:b}
      ${u.map(y=>m`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${o}
            .value=${y.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${v=>{v.stopPropagation(),h(y,{entity:v.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${v=>{let w=v.target.value||null,k=l(y.entity,w);i(n.map((S,$)=>y.rows.includes($)?{...S,attribute:w,state:y.rows[0]===$?k:S.state}:S))}}
          >
            <option value="" ?selected=${!y.attribute}>${this.t("picture_state_of")}</option>
            ${a(y.entity).map(v=>m`<option value=${v} ?selected=${v===y.attribute}>${v}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(y.entity,y.attribute)||"\u2013"})}</span>
          ${y.rows.map(v=>{let w=n[v],k=!!this.hass&&Nd(this.hass,w);return m`<div class="fp3d-picture-row ${k?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${v}"
                placeholder=${this.t("picture_state")}
                .value=${w.state}
                ?disabled=${!e}
                @change=${S=>p(v,{state:S.target.value})}
              />
              <datalist id="fp3d-picture-states-${v}"><option value="*"></option>${c(y.entity,y.attribute).map(S=>m`<option value=${S}></option>`)}</datalist>
              ${this._images[w.image]?m`<img class="fp3d-picture-thumb" src=${this._images[w.image].url} alt="" /> `:b}
              ${g(w)&&this.hass?.states[g(w)]?.attributes.entity_picture?m`<img class="fp3d-picture-thumb" src=${String(this.hass.states[g(w)].attributes.entity_picture)} alt="" />`:b}
              <label class="fp3d-btn fp3d-picture-pick">
                ${w.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${S=>{this.uploadPicture(S,t,v)}} />
              </label>
              ${f.filter(S=>S!==w.image).length?m`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(S=>S!==w.image&&this._images[S]).map(S=>m`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>p(v,{image:S})}><img src=${this._images[S].url} alt="" /></button>`)}
                  </div>`:b}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(w.image)?w.image:""}
                ?disabled=${!e}
                @change=${S=>{let $=S.target.value.trim();$&&p(v,{image:$})}}
              />
              ${_.length?m`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${_}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${g(w)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${S=>{S.stopPropagation(),S.detail.value!=="none"?p(v,{image:`camera:${S.detail.value}`}):g(w)&&p(v,{image:""})}}
                  ></fp3d-entity-picker>`:b}
              <span class="fp3d-sub">${k?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>i(n.filter((S,$)=>$!==v))}>✕</button>
            </div>`})}
          ${e?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:y.entity,attribute:y.attribute,state:l(y.entity,y.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:b}
        </div>`)}
      ${e?m`<button class="fp3d-btn" @click=${()=>i([...n,{entity:o[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:b}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){let i=t.target,o=i.files?.[0];if(i.value="",!o)return;let r=await createImageBitmap(o),a=Math.min(1,512/Math.max(r.width,r.height)),l=document.createElement("canvas");l.width=Math.round(r.width*a),l.height=Math.round(r.height*a),l.getContext("2d").drawImage(r,0,0,l.width,l.height);let c=l.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),d=U("pic");await yo(this.hass,d,c,this.home),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let u=this.furnitureItem?.id===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:u.map((h,p)=>p===n?{...h,image:d}:h)})}libIndex=null;libraryEntries(t){let e=vt("fridge_smart")||vt("household")?["fridge_smart"]:[],n=`${t}|${Pc()}|${this.packs?.length??0}|${e.length}`;if(this.libIndex?.key===n)return this.libIndex.entries;let i=Yh({packs:this.packs??[],basics:Gh(e),language:t,basicName:o=>this.t(`furn_${o}`),basicNameEn:o=>Wt(El,`furn_${o}`),kindName:o=>this.t(`lib_kind_${o}`),size:$t});return this.libIndex={key:n,entries:i},i}libraryThumb=async t=>{let[e]=await Promise.all([Xi(),this.hass?en(this.hass,[t.type]):void 0]);if(wt(t.type)&&!Pt(t.type))return null;let[n,i,o]=t.size;return e.furniturePreview({type:t.type,w:n,d:i,h:o,variant:null,lamp:yi[t.type]??null},96,this.packs??[])};libUpdatesAsked=!1;refreshLibUpdates(){if(this.hass){if(this.libUpdatesAsking){this.libUpdatesAsked=!0;return}this.libUpdatesAsking=!0,gi(this.hass).then(t=>this._libUpdates=cf(t)).catch(()=>this._libUpdates=new Set).finally(()=>{this.libUpdatesAsking=!1,this.libUpdatesAsked&&(this.libUpdatesAsked=!1,this.refreshLibUpdates())})}}libUpdatesAsking=!1;async updateFromLibrary(t){if(this.hass){try{await wo(this.hass,t)}catch(e){this._notice=String(e?.message??e)}this.refreshLibUpdates()}}renderFurnitureLibrary(){let t=this.room,e=this.hass?.language??"en";return m`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${t?this.t("furniture_into",{room:t.name}):this.t("furniture_pick_room")}</p>
      ${this._placing?m`<div class="fp3d-placing" role="status">
            <span>${this.t("place_armed",{name:Ft(this.hass,this._placing.type)})}</span>
            <button class="fp3d-btn fp3d-primary" @click=${()=>this.placeArmedInMiddle()}>${t?this.t("place_middle_room",{room:t.name}):this.t("place_middle")}</button>
            <button class="fp3d-btn" @click=${()=>this.cancelPlacing()}>${this.t("cancel")}</button>
          </div>`:b}
      <fp3d-library
        .entries=${this.libraryEntries(e)}
        .language=${e}
        .roomHint=${t?qh(t.name):null}
        .admin=${this.isEditor}
        .t=${(n,i)=>this.t(n,i)}
        .thumb=${this.libraryThumb}
        .updates=${this._libUpdates}
        @library-update=${n=>{this.updateFromLibrary(n.detail.types)}}
        @library-add=${n=>this.addFurniture(n.detail.type,!!n.detail.mirror)}
        @library-preview=${n=>{n.detail.type&&n.detail.element?this.showPreview(n.detail.type,n.detail.element):this._preview=null}}
      ></fp3d-library>
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}async showPreview(t,e){let n=e.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...i};try{let[o]=await Promise.all([Xi(),this.hass?en(this.hass,[t]):void 0]),[r,a,l]=$t(t),c=o.furniturePreview({type:t,w:r,d:a,h:l,variant:null,lamp:yi[t]??null},180,this.packs??[]);this._preview?.type===t&&(this._preview={type:t,url:c,...i})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?m`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?m`<img src=${t.url} alt="" />`:m`<span class="fp3d-preview-wait"></span>`}
      <b>${Ft(this.hass,t.type)}</b>
    </div>`:b}renderDeviceForm(t){let e=this.isEditor,n=et(t.entity_id),i=n==="light",o=t.mount??"ceiling",r=n?Wo(n,this.floor?.height??2.5,i?o:null):1;return m`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Jn(n):""} />
        </svg>
        ${st(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?m`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>m`<option value=${a} ?selected=${a===o}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(t.glow_scale,a=>this.updateDevice({glow_scale:a}))}`:n==="camera"?m`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >${this.renderCameraModel(t)}`:b}
        ${this.len(this.t("x"),t.x,a=>this.updateDevice({x:a}))} ${this.len(this.t("z"),t.z,a=>this.updateDevice({z:a}))}
        ${this.len(this.t("marker_height"),t.y??r,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?m`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.len(this.t("camera_reach"),t.reach??(t.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),t.tilt??(t.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${t.cone!==!1} ?disabled=${!e} @change=${a=>this.updateDevice({cone:a.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${t.detect_pins!==!1} ?disabled=${!e} @change=${a=>this.updateDevice({detect_pins:a.target.checked?null:!1})} />
              ${this.t("camera_detect_pins")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(t.entity_id)}`:b}
        ${n&&Ad.has(n)?m`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:b}
        ${vt("energy_pro")&&si(this.hass,t.entity_id)?m`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!e} @change=${a=>this.updateDevice({holo:a.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:b}
        ${si(this.hass,t.entity_id)?this.circuitSelect(t.circuit??null,si(this.hass,t.entity_id),a=>this.updateDevice({circuit:a})):b}
        ${si(this.hass,t.entity_id)?this.wireEnergySelect(t.energy??null,si(this.hass,t.entity_id),a=>this.updateDevice({energy:a})):b}
        ${this.markerSelect(t.marker??null,a=>this.updateDevice({marker:a}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${t.name??""} ?disabled=${!e} maxlength="60" placeholder=${st(this.hass,t.entity_id)} @change=${a=>this.updateDevice({name:a.target.value.trim()||null})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!e} placeholder=${this.t("aliases_placeholder")} @change=${a=>this.updateDevice({aliases:zo(a.target.value)})}
        /></label>
        ${t.name?m`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${a=>this.updateDevice({show_name:a.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:b}
        ${this.iconInput(t.icon,a=>this.updateDevice({icon:a}))}
      </div>
      ${this.renderItemActions(t.actions,t.entity_id,a=>this.updateDevice({actions:a}))}
      ${e?m`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?m`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:b}
            ${this.renderAsFurniture(t)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:b}
    </section>`}renderDeviceList(t){let e=this.isEditor,n=this.hass,i=t.area_id?n?.areas?.[t.area_id]?.name:void 0,o=n?se(n,t.area_id).filter($=>ze(et($))):[],r=new Set([...this.floor?.placements.filter($=>K([$.x,$.z],t.points)).map($=>$.entity_id)??[],...this.floor?.furniture.filter($=>Lt($.type)&&$.entity&&K([$.x,$.z],t.points)).map($=>$.entity)??[]]),a=n?[...o,...[...r].filter($=>!o.includes($)&&Cn(n,$)&&ze(et($)))]:o,l=n?Wn(n,a):[],c=l.map($=>$.primary).filter($=>!r.has($)),d=this._deviceQuery.trim().toLowerCase(),u=$=>!d||st(n,$,i).toLowerCase().includes(d)||$.includes(d),h=this.floor?.placements.filter($=>et($.entity_id)==="light"&&($.mount??"ceiling")==="ceiling"&&K([$.x,$.z],t.points)).length,p=new Set(t.panel??[]),f=new Set(t.hidden??[]),_=new Set(t.no_state??[]),g=new Map;for(let $ of this._doc.floors)for(let x of[...$.placements.map(R=>[R.entity_id,R.x,R.z]),...$.furniture.filter(R=>Lt(R.type)&&R.entity).map(R=>[R.entity,R.x,R.z])]){let R=$.rooms.find(L=>K([x[1],x[2]],L.points));R&&R.id!==t.id&&g.set(x[0],R.name)}let y=($,x=!1,R=i,L=!1)=>{let C=r.has($),E=C?void 0:g.get($);return m`<div class="fp3d-row fp3d-dev-row ${x||L?"fp3d-dev-extra":""} ${f.has($)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${C?"":"fp3d-muted"}" ?disabled=${!C} @click=${()=>this.selectItem("device",$)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Jn(et($))} />
          </svg>
          <span>${st(n,$,R)}${E?m`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:E})}</small>`:b}</span>
        </button>
        ${e&&!x?m`<button
              class="fp3d-pin ${f.has($)?"fp3d-pin-on":""}"
              aria-pressed=${f.has($)}
              title=${this.t(f.has($)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:f.has($)?[...f].filter(O=>O!==$):[...f,$]})}
            >
              ${f.has($)?"\u{1F648}":"\u{1F441}"}
            </button>`:b}
        ${e&&!x&&!f.has($)?m`<button
              class="fp3d-pin ${_.has($)?"fp3d-pin-on":""}"
              aria-pressed=${_.has($)}
              title=${this.t(_.has($)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:_.has($)?[..._].filter(O=>O!==$):[..._,$]})}
            >
              ${_.has($)?"\u2205":"Aa"}
            </button>`:b}
        ${e&&!C?m`<button
              class="fp3d-pin ${p.has($)?"fp3d-pin-on":""}"
              aria-pressed=${p.has($)}
              title=${this.t(p.has($)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:p.has($)?[...p].filter(O=>O!==$):[...p,$]})}
            >
              ${p.has($)?"\u2605":"\u2606"}
            </button>`:b}
        ${e?C?m`<button class="fp3d-link" @click=${()=>this.removeDevice($)}>${this.t("devices_remove")}</button>`:m`<button class="fp3d-link" @click=${()=>this.placeDevices([$])}>${this.t("devices_place")}</button>`:b}
      </div>`},v=e?this._devSource:"area",w=$=>{this._devSource=$,this._deviceQuery=""},k=m`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${$=>this._deviceQuery=$.target.value}
    />`,S=async()=>{await this.ask(this.t("devices_place_all_confirm",{n:c.length}),this.t("ask_ok"),!1)&&this.placeDevices(c)};return m`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?m`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${v==="area"} @click=${()=>w("area")}>${this.t("devices_src_area")}${a.length?` (${l.length})`:""}</button>
            <button aria-pressed=${v==="other"} @click=${()=>w("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${v==="none"} @click=${()=>w("none")}>${this.t("devices_src_none")}</button>
          </div>`:b}
      ${v!=="area"?m`${k}${this.renderDeviceExtras(t,y,v)}`:t.area_id?a.length?m`${e&&(h??0)>=2?m`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:b}
              ${a.length>8?k:b}
              <div class="fp3d-room-list">
                ${l.map($=>{let x=$.others.filter(u),R=this._expanded.has($.primary)||!!d&&x.length>0;return!u($.primary)&&!x.length?b:m`${y($.primary)}
                  ${$.others.length?m`<button
                        class="fp3d-more"
                        @click=${()=>{let L=new Set(this._expanded);L.has($.primary)?L.delete($.primary):L.add($.primary),this._expanded=L}}
                      >
                        ${R?this.t("devices_less"):this.t("devices_more",{n:$.others.length})}
                      </button>`:b}
                  ${R?this.renderDeviceOthers(d?x:$.others,L=>y(L,!1,i,!0),f,e):b}`})}
              </div>
              ${e&&c.length>1?m`<button class="fp3d-link fp3d-place-all" @click=${S}>${this.t("devices_place_all_n",{n:c.length})}</button>`:b}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`:m`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceOthers(t,e,n,i){let r=t.every(l=>n.has(l)),a=()=>{let l=new Set(n);for(let c of t)r?l.delete(c):l.add(c);this.updateRoom({hidden:[...l]})};return m`${i&&t.length>=5?m`<button class="fp3d-link fp3d-dev-all" @click=${a}>
            ${this.t(r?"devices_show_all":"devices_hide_all",{n:t.length})}
          </button>`:b}
      ${t.slice(0,40).map(e)}
      ${t.length>40?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:t.length-40})}</p>`:b}`}renderDeviceExtras(t,e,n){let i=this.hass;if(!i)return b;let o=50,r=this._deviceQuery.trim().toLowerCase(),a=(d,u)=>!r||`${st(i,d,u)} ${d} ${u??""}`.toLowerCase().includes(r),l=d=>d>0?m`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:b;if(n==="other"){let d=0,u=0,h=zd(i,t.area_id).map(p=>{let f=p.ids.filter(g=>a(g,p.name)),_=f.slice(0,Math.max(0,o-d));return d+=_.length,u+=f.length-_.length,_.length?m`<div class="fp3d-dev-area">${p.name}</div>${_.map(g=>e(g,!1,p.name))}`:b});return d?m`<div class="fp3d-room-list">${h}</div>${l(u)}`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=Od(i).filter(d=>a(d));return c.length?m`<div class="fp3d-room-list">${c.slice(0,o).map(d=>e(d))}</div>${l(c.length-Math.min(c.length,o))}`:m`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomLive(t){let e=this.hass;if(!e)return b;let n=(r,a)=>{let l={...t.live??{},[r]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({live:c?null:l})},i=!!t.live&&Object.values(t.live).some(r=>r!=null),o=(r,a)=>{let l=xm(e,this.floor??null,{...t,live:null},r),c=r==="leak"?["moisture"]:["motion","occupancy","presence"],d=this.entityOptions(u=>u.startsWith("binary_sensor.")&&c.includes(String(e.states[u]?.attributes.device_class??"")),c.join(",")).map(u=>({...u,rank:re(e,u.id)===t.area_id?0:1})).sort((u,h)=>u.rank-h.rank).map(({id:u,label:h})=>({id:u,label:h}));return this.entitySelect(a,t.live?.[r]??null,l[0]??null,d,u=>n(r,u))};return m`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("room_live")}</summary>
      <div class="fp3d-form">${o("leak",this.t("room_live_leak"))} ${o("motion",this.t("room_live_motion"))}</div>
      <p class="fp3d-sub">${this.t("room_live_hint")}</p>
    </details>`}renderRoomClimate(t){let e=this.hass;if(!e)return b;let n=(r,a)=>{let l={...t.climate??{},[r]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!t.climate&&Object.values(t.climate).some(r=>r!=null),o=(r,a)=>{let l=wr[r],c=Hd(e,this.floor??null,{...t,climate:null},r),d=xr[r],u=this.entityOptions(h=>Gt(h)&&e.states[h]?.attributes.device_class===l||!!d&&h.startsWith("climate.")&&typeof e.states[h]?.attributes[d]=="number",l,d).map(h=>({...h,rank:(re(e,h.id)===t.area_id?0:1)+(kr(e,h.id)?0:2)})).sort((h,p)=>h.rank-p.rank).map(({id:h,label:p})=>({id:h,label:p}));return this.entitySelect(a,t.climate?.[r]??null,c[0]??null,u,h=>n(r,h))};return m`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(t){let e=t.background;return m`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?m`${this.len(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
              ${this.len(this.t("z"),e.z,n=>this.updateFloor({background:{...e,z:n}}))}
              ${this.len(this.t("background_width"),e.width,n=>this.updateFloor({background:{...e,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),e.rotation??0,n=>this.updateFloor({background:{...e,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isEditor?m`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?m`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:b}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?m`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:m`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${zi(this.t("bg_ruler_length"),this.unit)}
                            <input type=${this.unit==="imperial"?"text":"number"} min="0.01" step="0.01" .value=${this._bgRulerLen?this.lenValue(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=this.readLen(n.target.value)??0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:b}`:b}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(e.opacity)}
                  @change=${n=>this.updateFloor({background:{...e,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:b}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await nc(this.hass,this.home)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!await this.ask(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}),this.t("backup_restore"))||(await oc(this.hass,t.id,this.home),this._notice=this.t("backup_restored"),await this.loadHistory())}async storedImages(t,e){let n={};for(let i of Ed(t))try{n[i]=await Zs(this.hass,i,e)}catch{}return n}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await fc(this.hass),e=await this.storedImages(t.building,t.active),n=[];for(let r of t.homes??[])n.push(r.id===t.active?r:{...r,images:await this.storedImages(r.building,r.id)});let i=new Date().toISOString().slice(0,10),o={...t,...t.homes?{homes:n}:{},exported_at:new Date().toISOString(),images:e};br(`home-3d-${this.t("export_name_full")}-${i}.json`,JSON.stringify(o))}catch(t){await this.tell(this.t("backup_import_error",{error:String(t?.message??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{await this.tell(this.t("import_error_not_json"));return}if(i?.format!=="home3d-backup"||!i.building){await this.tell(this.t("backup_full_not_backup"));return}if(await this.ask(this.t("backup_full_confirm"),this.t("backup_restore"))){this._backupBusy=!0;try{let o=i.homes?.length?i.homes:null,r=o?o.map(d=>({home:d,images:d.images??(d.id===i.active?i.images??{}:{})})):[{images:i.images??{}}],a=null,l=0;for(let[d,u]of r.entries()){let h=u.home?{homes:[{id:u.home.id,name:u.home.name,building:u.home.building}],...d===r.length-1&&i.active?{active:i.active}:{}}:void 0;a=await mc(this.hass,u.home?null:i.building,i.packs??[],i.items,h,u.home?void 0:this.home);for(let[p,f]of Object.entries(u.images))try{await yo(this.hass,p,f,u.home?.id??a.home_id??this.home),l++}catch{}}if(!a)return;(!a.home_id||!this.home||a.home_id===this.home)&&(this.setDoc(Co(a.building)),this._floorId=a.building.floors[0]?.id??null,this.selectItem("room",null),this.fit()),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let c=a.skipped.length?` ${this.t("backup_full_skipped",{packs:a.skipped.map(d=>d.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:a.packs,pictures:l})+c}catch(o){let r=o??{};await this.tell(this.t("backup_import_error",{error:String(r.message??r.error?.message??r.code??r.error?.code??o)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);br(`home-3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(Md(this._doc,t),null,2))}async importPlan(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let i;try{i=$c(Sd(await n.text()))}catch(o){let r=o.message;await this.tell(r==="not_json"?this.t("import_error_not_json"):r==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:r}));return}await this.ask(this.t("backup_import_confirm"),this.t("ask_ok"))&&(await ic(this.hass,this.home).catch(()=>{}),this.setDoc(i),this._floorId=i.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){return new Date(t.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return m`<details
      class="fp3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?m`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?m`<div class="fp3d-room-list">
              ${this._history.map(t=>m`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}</span></span>
                  <button class="fp3d-link" ?disabled=${!this.isHaAdmin} title=${this.isHaAdmin?"":this.t("backup_admin_only")} @click=${()=>this.restoreFromHistory(t)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:m`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        ${this.isHaAdmin?m`<label class="fp3d-btn fp3d-upload"
              >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
            /></label>`:m`<button class="fp3d-btn" disabled title=${this.t("backup_admin_only")}>${this.t("backup_full_import")}</button>`}
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
      ${this.isHaAdmin?b:m`<p class="fp3d-sub">${this.t("backup_admin_only")}</p>`}
    </details>`}renderBackdrop(){let t=this._doc.settings.backdrop??{},e=o=>this.change(r=>r.settings.backdrop={...r.settings.backdrop??{},...o}),n=t.kind??"",i=(o,r,a,l)=>m`<label class="fp3d-field"
        >${this.t(o)}
        <input type="color" .value=${r??a} @change=${c=>e({[l]:c.target.value})} />
      </label>`;return m`<details class="fp3d-section">
      <summary>🖼 ${this.t("backdrop")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("backdrop_kind")}
          <select @change=${o=>e({kind:o.target.value||null})}>
            ${["","color","gradient","image"].map(o=>m`<option value=${o} ?selected=${n===o}>${this.t(`backdrop_${o||"look"}`)}</option>`)}
          </select></label
        >
        ${n==="color"||n==="gradient"?i(n==="gradient"?"backdrop_top":"backdrop_color",t.color,"#0b1426","color"):b}
        ${n==="gradient"?i("backdrop_bottom",t.color2,"#03060c","color2"):b}
        ${n==="image"?m`<label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_image_url")}
                <input type="text" placeholder="/local/hintergrund.jpg" .value=${t.image??""} @change=${o=>e({image:o.target.value.trim()||null})}
              /></label>
              <label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_dim")} (${Math.round((t.dim??.45)*100)} %)
                <input type="range" min="0" max="90" .value=${String(Math.round((t.dim??.45)*100))} @change=${o=>e({dim:Number(o.target.value)/100})}
              /></label>
              ${t.image&&!bp(t.image)?m`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.t("backdrop_image_bad")}</p>`:b}`:b}
      </div>
      <p class="fp3d-sub">${this.t("backdrop_hint")}</p>
    </details>`}renderTerrain(){let t=this._doc.settings.terrain??{},e=i=>{let o=structuredClone(this._doc);o.settings.terrain={...o.settings.terrain??{},...i},this.setDoc(o)},n=this._doc.floors.some(i=>i.elevation<-.3);return m`<details class="fp3d-section">
      <summary>⛰ ${this.t("terrain")}</summary>
      <p class="fp3d-sub">${this.t("terrain_hint")}</p>
      <div class="fp3d-form">
        ${this.len(this.t("terrain_level"),t.level??-.2,i=>e({level:Math.max(-20,Math.min(20,i))}),.05)}
        <label class="fp3d-check fp3d-wide" title=${this.t("terrain_earth_hint")}
          ><input type="checkbox" .checked=${t.earth!==!1} @change=${i=>e({earth:i.target.checked})} />
          ${this.t("terrain_earth")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t(n?"terrain_cellar_hint":"terrain_no_cellar_hint")}</p>
      ${t.level!=null?m`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>e({level:null})}>${this.t("terrain_reset")}</button></div>`:b}
    </details>`}setSettings(t){let e=structuredClone(this._doc);Object.assign(e.settings,t),this.setDoc(e)}renderHouseSettings(){let t=this._doc.settings,e=n=>this.setSettings(n);return m`<details class="fp3d-section">
      <summary>${this.t("settings_house")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),t.wall_exterior,n=>e({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("wall_interior"),t.wall_interior,n=>e({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("grid"),t.grid,n=>e({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${n=>{let i=n.target.value;e({units:i==="metric"||i==="imperial"?i:null})}}>
            <option value="auto" ?selected=${!t.units}>${this.t("units_auto",{unit:this.t(jr(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
            <option value="metric" ?selected=${t.units==="metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${t.units==="imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"),t.north,n=>e({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide" title=${this.t("editor_floor_hint")}
          >${this.t("editor_floor")}
          <select @change=${n=>e({editor_floor:n.target.value||null})}>
            <option value="" ?selected=${!t.editor_floor}>${this.t("editor_floor_auto")}</option>
            ${this._doc.floors.map(n=>m`<option value=${n.id} ?selected=${t.editor_floor===n.id}>${n.name}</option>`)}
          </select></label
        >
        ${this.entitySelect(this.t("hh_notes"),t.household?.notes??null,void 0,this.entityOptions(n=>/^(input_text|text|sensor)\./.test(n)),n=>this.setHousehold({notes:n==="none"?null:n}))}
        <p class="fp3d-sub fp3d-wide">${this.t("hh_notes_hint")}</p>
      </div>
      <p class="fp3d-sub">${this.t("north_hint")}</p>
    </details>`}renderRoofBasics(){let t=this._doc.settings,e=n=>this.setSettings(n);return m`<section>
      <h3>${this.t("roof_whole")}</h3>
      <p class="fp3d-sub">${this.t("roof_whole_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_basics")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):e({roof:{...t.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>m`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?m`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>e({roof:{...t.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${t.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${t.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:b}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):b}
        ${t.roof.type!=="none"?this.len(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):b}
      </div>
    </section>`}renderWeatherSettings(){let t=this._doc.settings,e=n=>this.setSettings(n);return m`<details class="fp3d-section">
      <summary>${this.t("settings_weather")}</summary>
      <div class="fp3d-form">
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,Ju(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):b}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${Yc.map(n=>{let i=t.weather_effects??rr;return m`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${o=>{let r=o.target.checked;e({weather_effects:r?[...new Set([...i,n])]:i.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.rain_warning!==!1} @change=${n=>e({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
        ${this.hass?m`${this.entitySelect(this.t("rain_entity"),t.rain_entity??null,void 0,this.entityOptions(n=>Zu(this.hass,n)),n=>e({rain_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`:b}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${t.alert_names!==!1} @change=${n=>e({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_unavailable_hint")}
          ><input type="checkbox" .checked=${!!t.alert_unavailable} @change=${n=>e({alert_unavailable:n.target.checked})} />
          ${this.t("alert_unavailable")}</label
        >
        ${this.hass?m`<p class="fp3d-sub fp3d-wide"><b>${this.t("effects")}</b> · ${this.t("effects_hint")}</p>
              ${Em(this.hass,t.effects,!this.isEditor,n=>e({effects:n}),"fp3d-field")}`:b}
        ${this.hass?m`${this.entitySelect(this.t("outage_entity"),t.outage_entity??null,void 0,this.entityOptions(n=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(n)),n=>e({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:b}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${t.sun_patches!==!1} @change=${n=>e({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_shadow_hint")}
          ><input type="checkbox" .checked=${t.sun_shadow!==!1} @change=${n=>e({sun_shadow:n.target.checked})} />
          ${this.t("sun_shadow")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("window_glow_hint")}
          ><input type="checkbox" .checked=${t.window_glow!==!1} @change=${n=>e({window_glow:n.target.checked})} />
          ${this.t("window_glow")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[Yt,Ke,zt`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr var(--fp3d-side-w, 320px);
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor:has(> .fp3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .fp3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .fp3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .fp3d-strip-hot {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(var(--fp3d-side-w, 340px), 60%);
        /* open over the 3D pane: above the toolbar too, so its buttons never sit on the sidebar's */
        z-index: 30;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .fp3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .fp3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-3d-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        /* nothing of the plan column reaches over the sidebar (its menus still hang down) */
        overflow-x: clip;
        display: grid;
        grid-template-rows: auto 1fr;
        /* the column never grows with a wide toolbar (that would push the plan under the sidebar) */
        grid-template-columns: minmax(0, 1fr);
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        position: relative;
        /* its menus open over the plan below */
        z-index: 20;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .fp3d-pick-tip {
        position: absolute;
        z-index: 5;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 8px 12px;
        border-radius: 10px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
        font-size: 13px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.45), 0 0 16px rgba(55, 224, 255, 0.45);
        cursor: pointer;
        animation: fp3d-tip-in 0.18s ease-out;
      }
      .fp3d-pick-tip::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -6px;
        margin-left: -6px;
        border: 6px solid transparent;
        border-top: 0;
        border-bottom-color: var(--fp3d-accent);
      }
      @keyframes fp3d-tip-in {
        from {
          opacity: 0;
          transform: translate(-50%, -4px);
        }
      }
      /* the tool row scrolls sideways when it is wider than the plan (it must never push into the sidebar) */
      .fp3d-toolbar > .fp3d-seg {
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .fp3d-toolbar > .fp3d-seg::-webkit-scrollbar {
        display: none;
      }
      .fp3d-toolbar > .fp3d-seg > button {
        flex: none;
      }
      .fp3d-warn {
        color: var(--fp3d-warm);
        font-size: 12.5px;
      }
      .fp3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-picture-group > select {
        min-width: 0;
      }
      .fp3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--fp3d-line) 40%, transparent);
      }
      .fp3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .fp3d-picture-row > .fp3d-sub,
      .fp3d-picture-row > .fp3d-picture-camera {
        grid-column: 1 / -1;
      }
      .fp3d-picture-row.fp3d-rule-hit {
        outline: 1px solid var(--fp3d-accent);
      }
      .fp3d-rule-now {
        grid-column: 1 / -1;
      }
      .fp3d-rule-hit {
        color: var(--fp3d-accent);
      }
      .fp3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        cursor: pointer;
      }
      .fp3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .fp3d-picture-reuse-btn:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .fp3d-picture-pick {
        justify-self: start;
      }
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .fp3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-stage-pair > .fp3d-canvas-wrap {
        flex: 1 1 var(--fp3d-split, 55%);
        min-width: 0;
      }
      .fp3d-split > .fp3d-canvas-wrap {
        flex: 0 0 var(--fp3d-split, 55%);
      }
      .fp3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--fp3d-line);
        touch-action: none;
      }
      .fp3d-split-handle:hover {
        background: var(--fp3d-accent);
      }
      .fp3d-editor-3d {
        position: relative;
        overflow: hidden;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--fp3d-line);
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-editor-3d fp3d-view3d {
        display: block;
        height: 100%;
      }
      /* folds the 3D pane away (the choice is remembered like the toolbar's "3D beside", #91) */
      .fp3d-3d-fold {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 3;
        min-height: 32px;
        padding: 4px 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: var(--fp3d-chrome);
        color: inherit;
        font: inherit;
        font-size: 12px;
        cursor: pointer;
      }
      .fp3d-3d-fold:hover,
      .fp3d-3d-fold:focus-visible {
        border-color: var(--fp3d-accent);
      }
      .fp3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .fp3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger, #ff6b7a);
      }
      .fp3d-narrow .fp3d-stage-pair.fp3d-split {
        flex-direction: column;
      }
      .fp3d-narrow .fp3d-split > .fp3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .fp3d-narrow .fp3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-place-ghost {
        fill: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 5 4;
        pointer-events: none;
      }
      .fp3d-placing {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 8px 0;
        padding: 8px 10px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 10px;
      }
      .fp3d-placing span {
        flex: 1 1 100%;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      /* the hint bar (#96): a readable strip on its own background, not a faint line on the grid */
      .fp3d-hint {
        position: absolute;
        left: 12px;
        bottom: 10px;
        max-width: calc(100% - 24px);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 7px 8px 7px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        font-size: 14px;
        line-height: 1.35;
        color: var(--fp3d-text);
        pointer-events: none;
      }
      .fp3d-hint-first {
        border-color: var(--fp3d-accent);
        font-weight: 600;
      }
      .fp3d-hint-help {
        flex: none;
        pointer-events: auto;
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        color: var(--fp3d-muted);
        background: none;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 3px 10px;
        cursor: pointer;
      }
      .fp3d-hint-help:hover {
        color: var(--fp3d-text);
        border-color: var(--fp3d-accent);
      }
      .fp3d-side-grip {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 8px;
        cursor: col-resize;
        touch-action: none;
        z-index: 2;
      }
      .fp3d-side-grip:hover {
        background: linear-gradient(90deg, rgba(55, 224, 255, 0.35), transparent);
      }
      .fp3d-side {
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      /* the grip's containing block; the overlay keeps its absolute position (#658: "position: relative" on
         every side bar made the unpinned bar a third grid cell, which pushed the plan and the 3D pane aside) */
      .fp3d-side:not(.fp3d-side-overlay) {
        position: relative;
        z-index: 7;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check.fp3d-indent {
        padding-left: 22px;
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      /* the background picture while it is edited: a dashed frame and a corner handle */
      .fp3d-bg-frame {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-bg-handle {
        fill: var(--fp3d-accent);
        stroke: #041018;
        stroke-width: 2;
        cursor: nwse-resize;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rack-elev summary {
        cursor: pointer;
        font-size: 13px;
        color: var(--fp3d-muted, #9aa6ba);
        margin: 6px 0;
      }
      /* the rack card's values (#120): one group per device, the value's kind, its entity and state */
      .fp3d-rack-card-group {
        border: 0;
        margin: 4px 0 8px;
        padding: 0;
        display: grid;
        gap: 4px;
      }
      .fp3d-rack-card-group legend {
        padding: 0;
        margin-bottom: 2px;
        font-size: 12px;
        font-weight: 600;
        color: var(--fp3d-text, #e6edf7);
      }
      .fp3d-rack-card-group small {
        opacity: 0.75;
      }
      .fp3d-rack-elev-box {
        max-height: 60vh;
        overflow: auto;
        border-radius: 8px;
      }
      .fp3d-rack-elev-pic {
        position: relative;
        width: fit-content;
        max-width: 100%;
        margin: 0 auto;
      }
      .fp3d-rack-elev-img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      .fp3d-rack-elev-tip {
        position: absolute;
      }
      .fp3d-furn-sym .fp3d-sym-swing {
        stroke-dasharray: 4 3;
        opacity: 0.8;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-wild polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-free-wall {
        cursor: grab;
      }
      .fp3d-vertex-no {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
      /* the opt-in reports: the exact JSON they send */
      /* the wall view: a room's wall from the front, furniture on it to slide along and up */
      .fp3d-wv-veil {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(3, 6, 12, 0.6);
      }
      .fp3d-wv {
        width: min(1100px, 100%);
        max-height: calc(100vh - 32px);
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        gap: 10px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-wv-head,
      .fp3d-wv-foot {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .fp3d-wv-foot .fp3d-field {
        width: 170px;
      }
      .fp3d-wv-grow {
        flex: 1;
      }
      .fp3d-pipe-end circle:not(.fp3d-hit) {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pipe-end {
        cursor: pointer;
      }
      .fp3d-pool-joint {
        fill: #8a929c;
        stroke: var(--fp3d-bg, #0b1220);
        stroke-width: 1.5;
        pointer-events: none;
      }
      .fp3d-wv-node circle {
        fill: rgba(55, 224, 255, 0.12);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-node text {
        fill: var(--fp3d-accent);
        font-size: 0.055px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-wv-hole-mark circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-dasharray: none;
        stroke-width: 0.02;
      }
      .fp3d-wv-hole-mark text {
        fill: var(--fp3d-warm);
      }
      .fp3d-pc-veil {
        z-index: 70;
      }
      .fp3d-pc {
        width: min(760px, 100%);
        max-height: calc(100vh - 32px);
        overflow: auto;
        display: grid;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-pc-title {
        font-size: 17px;
      }
      .fp3d-pc-name {
        font: inherit;
        font-size: 17px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        min-width: 0;
        flex: 1;
        max-width: 320px;
      }
      .fp3d-pc-body {
        display: grid;
        grid-template-columns: 220px minmax(0, 1fr);
        gap: 14px;
        align-items: start;
      }
      @media (max-width: 640px) {
        .fp3d-pc-body {
          grid-template-columns: 1fr;
        }
      }
      .fp3d-pc-draw {
        width: 100%;
        border-radius: 12px;
        background: rgba(120, 170, 255, 0.05);
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-body-shape {
        fill: #2a313a;
        stroke: #8a929c;
        stroke-width: 2;
      }
      .fp3d-pc-fan {
        fill: none;
        stroke: #8a929c;
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-wall {
        fill: rgba(120, 170, 255, 0.18);
        stroke: var(--fp3d-line);
      }
      .fp3d-pc-side {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
      }
      .fp3d-pc-stub line {
        stroke: #8a929c;
        stroke-width: 10;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-stub circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pc-stub {
        cursor: pointer;
      }
      .fp3d-pc-stub.fp3d-on line {
        stroke: #8a929c;
        stroke-dasharray: none;
      }
      .fp3d-pc-stub.fp3d-on circle {
        fill: var(--fp3d-accent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      .fp3d-pc-label {
        fill: var(--fp3d-text, #dfe7f5);
        font-size: 11px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-pc-rows {
        display: grid;
        gap: 8px;
      }
      .fp3d-pc-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px dashed var(--fp3d-line);
      }
      .fp3d-pc-row.fp3d-on {
        border-style: solid;
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-conns,
      .fp3d-pc-join {
        display: grid;
        gap: 6px;
      }
      .fp3d-pc-conn {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-tools {
        display: inline-flex;
        gap: 6px;
        margin-left: auto;
      }
      .fp3d-pc-chain {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-arrow {
        color: var(--fp3d-accent);
        font-weight: 800;
      }
      .fp3d-pc-tile {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.05);
        color: var(--fp3d-text);
      }
      button.fp3d-pc-tile {
        cursor: pointer;
      }
      .fp3d-pc-tile i {
        font-style: normal;
        opacity: 0.6;
        margin-left: 4px;
      }
      .fp3d-pc-start {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-pc-stop {
        border-color: #2f8cff;
      }
      .fp3d-pc-end {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-next {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-steps {
        display: grid;
        gap: 6px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-target {
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-join {
        padding: 10px;
        border-radius: 10px;
        background: rgba(120, 170, 255, 0.05);
      }
      .fp3d-pc-step {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-top: 4px;
      }
      .fp3d-pc-group {
        display: grid;
        gap: 4px;
      }
      .fp3d-pc-glabel {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-picks {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-pc-pick {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-pc-pick:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pc-pick.fp3d-on {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-hole {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        font-size: 13px;
      }
      .fp3d-pc-hole > span {
        min-width: 120px;
      }
      .fp3d-pc-via {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-open {
        border-style: dashed;
      }
      .fp3d-joint-name {
        flex: 1;
        min-width: 90px;
        font: inherit;
        font-size: 13px;
        padding: 3px 6px;
        border-radius: 6px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
      }
      .fp3d-ports {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 3px;
      }
      .fp3d-ports i {
        font-style: normal;
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-line);
        color: var(--fp3d-muted);
      }
      .fp3d-ports i.fp3d-on {
        border-style: solid;
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 4px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        padding: 3px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-accent);
        background: transparent;
        color: var(--fp3d-accent);
        cursor: pointer;
      }
      .fp3d-wv-node {
        pointer-events: none;
      }
      .fp3d-wv-joint {
        pointer-events: auto;
        cursor: move;
      }
      .fp3d-wv-run line {
        stroke: #8a929c;
        stroke-width: 0.05;
        stroke-linecap: round;
        cursor: pointer;
      }
      .fp3d-wv-run line.fp3d-wv-under {
        stroke: #5a616b;
        stroke-dasharray: 0.06 0.05;
      }
      .fp3d-wv-run-sel line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-runpt {
        fill: var(--fp3d-bg, #0b1220);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        cursor: move;
      }
      .fp3d-wv-runpt.fp3d-on {
        fill: var(--fp3d-accent);
      }
      .fp3d-wv-fitmode .fp3d-wv-run line {
        cursor: copy;
        stroke-width: 0.05 !important;
      }
      .fp3d-wv-fitmode .fp3d-wv-run line:hover {
        stroke: #ffb547 !important;
      }
      .fp3d-tech-step {
        border: 1px solid #ffb547;
        background: rgba(255, 181, 71, 0.1);
        border-radius: 10px;
        padding: 8px 10px;
        font-size: 12.5px;
        line-height: 1.35;
      }
      .fp3d-tech-step b {
        display: block;
        color: #ffb547;
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 2px;
      }
      .fp3d-tech-step.fp3d-done {
        border-color: #4dff9a;
        background: rgba(77, 255, 154, 0.08);
      }
      .fp3d-tech-step.fp3d-done b {
        color: #4dff9a;
      }
      .fp3d-wv-dry line {
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-erase {
        cursor: not-allowed;
      }
      .fp3d-wv-erase .fp3d-wv-run:hover line,
      .fp3d-wv-erase .fp3d-wv-valve:hover circle,
      .fp3d-wv-erase .fp3d-wv-sight:hover,
      .fp3d-wv-erase .fp3d-wv-joint:hover circle {
        stroke: #ff4d6d;
      }
      .fp3d-tech-step.fp3d-tech-erasing {
        border-color: #ff4d6d;
        background: rgba(255, 77, 109, 0.12);
      }
      .fp3d-tech-undo {
        justify-self: start;
      }
      .fp3d-tech-kit .fp3d-tech-pen {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .fp3d-tech-kit .fp3d-tech-pen button {
        display: grid;
        justify-items: center;
        gap: 2px;
        padding: 6px 2px;
        font-size: 0.82em;
        white-space: nowrap;
      }
      .fp3d-tech-feed {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .fp3d-tech-feed i {
        font-style: normal;
      }
      .fp3d-tech-feed small {
        margin-left: auto;
        color: #4dff9a;
      }
      .fp3d-tech-feed.fp3d-on {
        opacity: 0.75;
      }
      .fp3d-tech-ok {
        color: #4dff9a;
        font-weight: 600;
      }
      .fp3d-tech-issues {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-wv-end {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.02 0.015;
      }
      .fp3d-wv-valve circle {
        fill: #3c4148;
        stroke: #2f8cff;
        stroke-width: 0.012;
        cursor: grab;
      }
      .fp3d-wv-valve line {
        stroke: #2f8cff;
        stroke-width: 0.025;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fp3d-wv-shut circle {
        stroke: #ff5a6e;
      }
      .fp3d-wv-sight {
        fill: rgba(140, 220, 255, 0.55);
        stroke: #4a4f56;
        stroke-width: 0.012;
        cursor: pointer;
      }
      .fp3d-wv-stroke {
        stroke-dasharray: 0.08 0.05;
        opacity: 0.55;
      }
      .fp3d-tech-ask {
        display: grid;
        gap: 4px;
        padding: 8px;
        margin-bottom: 6px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
        background: rgba(91, 124, 255, 0.08);
      }
      .fp3d-tech-ask b {
        font-size: 12.5px;
      }
      .fp3d-wv-draft {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.05;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-wv-rubber {
        stroke-dasharray: 0.05 0.04;
        opacity: 0.5;
      }
      .fp3d-wv-drawing {
        cursor: crosshair;
      }
      .fp3d-wv-drawing .fp3d-wv-item {
        pointer-events: none;
      }
      .fp3d-wv-svg {
        width: 100%;
        height: min(62vh, 560px);
        touch-action: none;
        user-select: none;
        font-family: var(--fp3d-font);
      }
      .fp3d-wv-wall {
        fill: rgba(120, 170, 255, 0.06);
        stroke: var(--fp3d-soft);
        stroke-width: 0.015;
      }
      .fp3d-wv-grid {
        stroke: var(--fp3d-line);
        stroke-width: 0.006;
      }
      .fp3d-wv-scale {
        fill: var(--fp3d-muted);
        font-size: 0.09px;
        text-anchor: end;
      }
      .fp3d-wv-floor {
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-hole {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-muted);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-window {
        fill: rgba(55, 224, 255, 0.12);
      }
      .fp3d-wv-item {
        cursor: grab;
      }
      .fp3d-wv-item rect {
        fill: rgba(91, 124, 255, 0.28);
        stroke: var(--fp3d-soft);
        stroke-width: 0.012;
      }
      .fp3d-wv-item text {
        fill: var(--fp3d-text);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-open {
        width: 100%;
        justify-content: center;
        margin: 2px 0 10px;
      }
      .fp3d-wv-turn {
        display: inline-flex;
        align-items: end;
        gap: 6px;
      }
      .fp3d-wv-turn .fp3d-field {
        width: 76px;
      }
      .fp3d-wv-lift {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        margin: -46px 0 0 -22px;
        display: grid;
        justify-items: center;
        gap: 2px;
        cursor: ns-resize;
        touch-action: none;
        user-select: none;
      }
      .fp3d-wv-lift[hidden] {
        display: none;
      }
      .fp3d-wv-lift span {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 24px;
        font-weight: 800;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.55);
      }
      .fp3d-wv-lift b {
        font-size: 12px;
        color: var(--fp3d-warm);
        background: rgba(7, 11, 20, 0.85);
        padding: 1px 6px;
        border-radius: 8px;
      }
      .fp3d-wv-3d {
        display: block;
        width: 100%;
        height: min(62vh, 560px);
        border-radius: 12px;
        overflow: hidden;
      }
      .fp3d-wv-pic rect {
        fill: transparent;
        stroke: transparent;
      }
      .fp3d-wv-pic:hover rect {
        stroke: var(--fp3d-soft);
      }
      .fp3d-wv-body {
        display: flex;
        gap: 8px;
        min-height: 0;
      }
      .fp3d-wv-kit {
        flex: none;
        width: 236px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        overflow-y: auto;
        max-height: min(62vh, 560px);
      }
      .fp3d-wv-kit h4 {
        margin: 4px 0 0;
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-kit .fp3d-btn {
        justify-content: flex-start;
        text-align: left;
      }
      .fp3d-wv-cats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
      }
      .fp3d-wv-cat {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        line-height: 1.15;
      }
      .fp3d-wv-cat span {
        font-size: 15px;
        width: 18px;
        text-align: center;
        flex: none;
      }
      .fp3d-wv-cat.fp3d-on {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.14);
        color: #fff;
      }
      .fp3d-wv-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-wv-tile {
        display: grid;
        grid-template-rows: auto auto auto;
        justify-items: center;
        gap: 2px;
        padding: 6px 4px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        cursor: pointer;
        text-align: center;
      }
      .fp3d-wv-tile:hover {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.08);
      }
      .fp3d-wv-tile-pic {
        width: 72px;
        height: 60px;
        display: grid;
        place-items: center;
      }
      .fp3d-wv-tile-pic img {
        max-width: 72px;
        max-height: 60px;
      }
      .fp3d-wv-tile-pic i {
        width: 36px;
        height: 28px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-muted);
        opacity: 0.4;
      }
      .fp3d-wv-tile-name {
        font-size: 11.5px;
        font-weight: 600;
        line-height: 1.15;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .fp3d-wv-tile small {
        font-size: 10.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-tile small.fp3d-wv-fit {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-kit .fp3d-search {
        width: 100%;
        box-sizing: border-box;
      }
      .fp3d-wv-kit .fp3d-wv-pick {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        height: auto;
        min-height: 32px;
        line-height: 1.2;
        font-size: 12.5px;
      }
      .fp3d-wv-pick small {
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-wv-gapnote {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-setframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.05 0.03;
        pointer-events: none;
      }
      .fp3d-wv-setblock rect {
        stroke: #ffb547;
      }
      .fp3d-wv-setframe text {
        fill: var(--fp3d-accent);
        pointer-events: none;
      }
      .fp3d-wv-setblock text {
        fill: #ffb547;
      }
      .fp3d-wv-gap rect {
        fill: rgba(55, 224, 255, 0.1);
        stroke: var(--fp3d-accent);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
        pointer-events: none;
      }
      .fp3d-wv-gap text {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-handle {
        fill: var(--fp3d-accent);
        stroke: #06101c;
        stroke-width: 0.006;
        cursor: ew-resize;
      }
      .fp3d-wv-handle.fp3d-wv-ns {
        cursor: ns-resize;
      }
      .fp3d-wv-size {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-wv-fixnote {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-pool-depth {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pool-depth input {
        width: 58px;
        padding: 3px 5px;
      }
      .fp3d-wv-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 0.008;
        stroke-dasharray: 0.03 0.02;
        pointer-events: none;
      }
      @media (max-width: 700px) {
        .fp3d-wv-body {
          flex-direction: column;
        }
        .fp3d-wv-kit {
          width: auto;
          flex-direction: row;
          flex-wrap: wrap;
          max-height: none;
        }
      }
      .fp3d-wv-stage {
        flex: 1;
        min-width: 0;
        position: relative;
        min-height: 0;
        padding: 0 60px;
      }
      /* a group with a menu lets it hang out below (the others scroll sideways on a narrow screen) */
      .fp3d-seg.fp3d-seg-menu {
        overflow: visible;
        /* too narrow for a group: its buttons wrap (they never reach over the sidebar) */
        flex-wrap: wrap;
        max-width: 100%;
      }
      .fp3d-seg > button.fp3d-undo {
        font-size: 20px;
        line-height: 1;
        padding-inline: 12px;
      }
      .fp3d-menu-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-voice-list {
        margin: 0 0 8px;
        padding-left: 18px;
        font-size: 13px;
        color: var(--fp3d-muted);
        columns: 2;
        column-gap: 18px;
      }
      .fp3d-voice-list li {
        break-inside: avoid;
        margin: 2px 0;
      }
      .fp3d-seg-settings {
        margin-left: auto;
      }
      .fp3d-menu-right {
        right: 0;
        left: auto;
      }
      .fp3d-narrow .fp3d-settings-word {
        display: none;
      }
      .fp3d-help-btn {
        min-width: 34px;
        font-weight: 700;
      }
      .fp3d-help-overlay h4 {
        margin: 14px 0 6px;
        font-size: 13px;
        color: var(--fp3d-muted);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .fp3d-help-keys {
        display: grid;
        grid-template-columns: max-content 1fr;
        gap: 6px 14px;
        margin: 0;
        align-items: baseline;
      }
      .fp3d-help-keys dt {
        white-space: nowrap;
        color: var(--fp3d-muted);
      }
      .fp3d-help-keys dd {
        margin: 0;
      }
      .fp3d-help-overlay kbd {
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        color: var(--fp3d-text);
        padding: 1px 6px;
        border: 1px solid var(--fp3d-line);
        border-bottom-width: 2px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-help-legend {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
      }
      .fp3d-help-legend li {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .fp3d-help-mark {
        flex: none;
        width: 26px;
        height: 26px;
        fill: none;
        stroke-width: 1.6;
      }
      .fp3d-help-swing,
      .fp3d-help-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-help-sel {
        fill: rgba(55, 224, 255, 0.25);
        stroke: var(--fp3d-accent);
      }
      .fp3d-dialog-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-dialog {
        width: min(640px, 100%);
        max-height: calc(100% - 16px);
        overflow: auto;
        padding: 14px 18px 18px;
        border-radius: 18px;
        border: 1px solid var(--fp3d-accent, #22d3ee);
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(34, 211, 238, 0.2);
        outline: none;
      }
      .fp3d-dialog-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 6px;
      }
      .fp3d-dialog-head h3 {
        margin: 0;
      }
      .fp3d-dialog details.fp3d-section > summary {
        display: none;
      }
      .fp3d-dialog details.fp3d-section {
        border: 0;
        padding: 0;
        margin: 0;
      }
      .fp3d-narrow .fp3d-dialog-veil {
        padding: 0;
      }
      .fp3d-narrow .fp3d-dialog {
        width: 100%;
        max-height: 100%;
        border-radius: 0;
      }
      .fp3d-menu-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        z-index: 30;
        min-width: 230px;
        max-height: 70vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid, #0d1628);
        box-shadow: var(--fp3d-shadow);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-right {
        left: auto;
        right: 0;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        padding: 9px 12px;
        border-radius: 10px;
        color: var(--fp3d-text);
        background: none;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item:hover {
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-on {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-menu-icon {
        width: 22px;
        text-align: center;
      }
      .fp3d-menu-more {
        margin-left: auto;
        color: var(--fp3d-muted);
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-menu-label {
        color: var(--fp3d-muted);
        font-weight: 500;
      }
      .fp3d-menu-sep {
        height: 1px;
        margin: 4px 6px;
        background: var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-sub {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 2px 8px 8px 16px;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-chip {
        min-height: 30px;
        padding: 5px 11px;
        font-size: 0.92em;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-menu-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-wv-zoom {
        position: absolute;
        right: 64px;
        bottom: 6px;
        z-index: 1;
        display: flex;
        gap: 4px;
      }
      .fp3d-wv-zoom .fp3d-btn {
        min-width: 34px;
        padding: 4px 8px;
      }
      .fp3d-wv-side {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        display: grid;
        justify-items: center;
        gap: 2px;
        width: 54px;
        padding: 10px 0;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: rgba(14, 21, 38, 0.82);
        color: var(--fp3d-accent);
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
      }
      .fp3d-wv-side small {
        font-size: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-side:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-wv-left {
        left: 0;
      }
      .fp3d-wv-right {
        right: 0;
      }
      .fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.3);
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-pic.fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-dims line {
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-dims text {
        fill: var(--fp3d-warm);
        font-size: 0.11px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.035px;
      }
      .fp3d-wv-item text,
      .fp3d-wv-hole-label {
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.025px;
      }
      .fp3d-wv-hole-label {
        fill: var(--fp3d-muted);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-dims text.fp3d-wv-up {
        text-anchor: start;
      }
      .fp3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--fp3d-accent) 6%, transparent);
      }
      .fp3d-roof-floors {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 0 0 10px;
      }
      .fp3d-edge-box > summary {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 4px 10px;
        cursor: pointer;
      }
      .fp3d-edge-box > summary h4 {
        display: inline;
      }
      .fp3d-edge-box[open] > summary {
        margin-bottom: 6px;
      }
      .fp3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--fp3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
         a split point gets a line of its own below */
      .fp3d-edge-height {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-height > span:first-child {
        flex: 1 1 84px;
        min-width: 84px;
      }
      .fp3d-edge-height > .fp3d-field {
        flex: 1 1 90px;
        min-width: 0;
      }
      .fp3d-edge-height > .fp3d-muted {
        flex: 1 1 90px;
        align-self: center;
      }
      .fp3d-edge-height > .fp3d-btn {
        flex: 0 0 auto;
        white-space: nowrap;
        padding-left: 10px;
        padding-right: 10px;
      }
      .fp3d-edge-height > .fp3d-split-row {
        flex: 1 1 100%;
        display: flex;
        gap: 6px;
        align-items: end;
      }
      .fp3d-edge-height > .fp3d-split-row > .fp3d-field {
        flex: 1;
      }
      .fp3d-edge-on {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
      }
      .fp3d-edge-low b {
        color: var(--fp3d-accent);
      }
      .fp3d-wall-low {
        opacity: 0.55;
      }
      .fp3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .fp3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .fp3d-place-all {
        margin: 10px 0 0;
      }
      .fp3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .fp3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .fp3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .fp3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .fp3d-tool-energy .fp3d-roof-layer {
        opacity: 0.45;
      }
      .fp3d-tool-energy .fp3d-energy-item {
        pointer-events: auto;
      }
      /* the cables in the energy tool: faint automatic ways, solid laid ones */
      .fp3d-cable line {
        stroke: #ffd75a;
        stroke-width: 2;
        stroke-dasharray: 5 4;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-cable-bat line {
        stroke: #5dffb0;
      }
      .fp3d-cable-grid line {
        stroke: #4ff6ff;
      }
      .fp3d-cable-hit line {
        stroke-width: 12;
        opacity: 0;
        pointer-events: stroke;
        cursor: pointer;
      }
      .fp3d-cable-laid line {
        stroke-dasharray: none;
        opacity: 0.9;
      }
      .fp3d-cable-sel line {
        stroke-width: 2.5;
        opacity: 1;
        filter: drop-shadow(0 0 4px currentColor);
      }
      .fp3d-cable-sel .fp3d-cable-piece {
        stroke-width: 14;
        opacity: 0;
        pointer-events: stroke;
        cursor: copy;
      }
      .fp3d-cable .fp3d-vertex circle {
        pointer-events: auto;
      }
      .fp3d-energy-marker {
        cursor: move;
      }
      .fp3d-checklist .fp3d-chk {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 2px 0;
        padding: 6px 8px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
      }
      .fp3d-checklist .fp3d-chk:hover {
        background: rgba(127, 127, 127, 0.12);
      }
      .fp3d-checklist .fp3d-chk span {
        width: 18px;
        text-align: center;
        font-weight: 700;
      }
      .fp3d-chk-ok span {
        color: #59ff8c;
      }
      .fp3d-chk-todo span {
        color: #ffc633;
      }
      .fp3d-chk-opt {
        opacity: 0.75;
      }
      .fp3d-teaser-on {
        border-color: rgba(89, 255, 140, 0.5);
      }
      .fp3d-teaser {
        margin-top: 12px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
        background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
      }
      .fp3d-teaser-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .fp3d-teaser-soon {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0b1426;
        background: #ffd75a;
        border-radius: 999px;
        padding: 2px 8px;
        white-space: nowrap;
      }
      .fp3d-teaser img {
        display: block;
        width: 100%;
        border-radius: 10px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .fp3d-teaser ul {
        margin: 8px 0 4px;
        padding-left: 18px;
        font-size: 13px;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .fp3d-phone-hint {
        display: none;
      }
      @media ${We(Qs)} {
        .fp3d-phone-hint {
          position: absolute;
          top: 8px;
          left: 8px;
          /* the plan may be wider than the phone: stay on the screen */
          width: calc(min(100%, 100vw) - 16px);
          box-sizing: border-box;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 6px 6px 12px;
          border-radius: 12px;
          background: var(--fp3d-chrome-solid);
          border: 1px solid var(--fp3d-accent);
          font-size: 13px;
        }
      }
      .fp3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-holo-pt circle {
        stroke: #c9a4ff;
        cursor: grab;
      }
      .fp3d-holo-pt .fp3d-energy-name {
        fill: #c9a4ff;
      }
      .fp3d-energy-marker-sel circle {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--fp3d-accent) 25%, #0b1426);
      }
      .fp3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-energy-icon {
        font-size: 17px;
      }
      .fp3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .fp3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      /* roof fields over the floor plan (#89): an outline only, so the rooms under them stay readable */
      .fp3d-solar-dim polygon {
        fill: color-mix(in srgb, #1b3a8f 18%, transparent);
        stroke: color-mix(in srgb, #9fb8ff 45%, transparent);
        stroke-width: 1;
      }
      .fp3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-solar polygon.fp3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .fp3d-solar-pick polygon {
        cursor: pointer;
      }
      .fp3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .fp3d-roof-sel .fp3d-roof-ridge line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-tool-energy .fp3d-room,
      .fp3d-tool-energy [data-furniture],
      .fp3d-tool-energy [data-device],
      .fp3d-tool-energy [data-opening],
      .fp3d-tool-energy [data-free-wall],
      .fp3d-tool-energy [data-outdoor],
      .fp3d-tool-energy .fp3d-roof-layer,
      .fp3d-tool-roof .fp3d-room,
      .fp3d-tool-roof [data-furniture],
      .fp3d-tool-roof [data-device],
      .fp3d-tool-roof [data-opening],
      .fp3d-tool-roof [data-free-wall],
      .fp3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
      .fp3d-dev-area {
        margin: 10px 0 2px;
        color: var(--fp3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* the item's title and position fields stay at the top while the panel scrolls (#71); -12px = the side
         bar's top padding, so nothing shows above it */
      .fp3d-pos-head {
        position: sticky;
        top: -12px;
        z-index: 3;
        background: var(--fp3d-chrome-solid);
        padding: 4px 0 10px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pos-head h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
      }
      .fp3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-h3row h3 {
        margin-bottom: 0;
      }
      .fp3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .fp3d-pipe,
      .fp3d-pipe-hit {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-pipe {
        stroke: #37a8ff;
        stroke-width: 3;
        opacity: 0.85;
        pointer-events: none;
      }
      .fp3d-pipe-sel {
        stroke-width: 5;
        opacity: 1;
        filter: drop-shadow(0 0 4px #37a8ff);
      }
      .fp3d-pipe-draft {
        stroke-dasharray: 6 5;
      }
      .fp3d-pipe-hit {
        stroke: transparent;
        stroke-width: 16;
        cursor: pointer;
      }
      .fp3d-pipe-seg {
        stroke: transparent;
        stroke-width: 14;
        cursor: copy;
      }
      .fp3d-pipe-arrow {
        fill: #37a8ff;
        pointer-events: none;
      }
      .fp3d-pool-node {
        cursor: grab;
      }
      .fp3d-pool-node circle:not(.fp3d-hit) {
        fill: #0b1a2e;
        stroke: #37e0ff;
        stroke-width: 2;
      }
      .fp3d-pool-node.fp3d-pool-dev circle:not(.fp3d-hit) {
        stroke: #5b7cff;
      }
      .fp3d-pool-node.fp3d-pool-closed circle:not(.fp3d-hit) {
        stroke: #ff4d40;
      }
      .fp3d-pool-node text {
        fill: #e6f6ff;
        font-size: 10px;
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
      }
      .fp3d-conn {
        grid-template-columns: 1fr;
      }
      .fp3d-conn select {
        width: 100%;
      }
      .fp3d-pool-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        margin: 4px 0;
        font-size: 13px;
      }
      .fp3d-pool-row > span,
      .fp3d-pool-row > .fp3d-link {
        flex: 1;
        text-align: left;
      }
      .fp3d-pool-row-sel {
        background: rgba(55, 224, 255, 0.1);
        border-radius: 8px;
        box-shadow: inset 3px 0 0 var(--fp3d-accent);
        padding-left: 6px;
      }
      .fp3d-outdoor-type {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-outdoor-type select {
        min-height: 34px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line, rgba(160, 200, 255, 0.25));
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
      }
      .fp3d-fix[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-hint-fixed {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
      }
      .fp3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .fp3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-ctx-danger {
        color: var(--fp3d-danger, #ff6b7a) !important;
      }
      .fp3d-edge-hi {
        stroke: var(--fp3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--fp3d-accent));
      }
      .fp3d-room-id code {
        user-select: all;
        cursor: copy;
      }
      .fp3d-open .fp3d-open-hit {
        stroke: transparent;
        stroke-width: 26;
      }
      .fp3d-free-wall .fp3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .fp3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .fp3d-free-wall-sel .fp3d-free-wall-line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-draft-wall {
        stroke-width: 4;
      }
      .fp3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .fp3d-ext-teaser {
        display: grid;
        gap: 6px;
        margin: 12px 0;
        padding: 12px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(55, 224, 255, 0.08), rgba(91, 124, 255, 0.08));
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        /* a fixed grid: the chips keep their places whichever kind is picked (#63) */
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-presets .fp3d-chip {
        min-height: 40px;
        padding: 3px 4px;
        line-height: 1.2;
        overflow-wrap: anywhere;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-code {
        display: block;
        font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
        padding: 6px 8px;
        border-radius: 8px;
        background: rgba(127, 127, 127, 0.12);
        user-select: all;
        word-break: break-all;
      }
      .fp3d-shift {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .fp3d-shift input {
        width: 5.5em;
      }
      .fp3d-headroom {
        stroke: rgba(255, 214, 90, 0.55);
        stroke-width: 1;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-headroom-label {
        font-size: 10px;
        fill: rgba(255, 214, 90, 0.75);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-split-mark {
        stroke: rgba(55, 224, 255, 0.9);
        stroke-width: 2;
        pointer-events: none;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
        max-width: 100%;
        box-sizing: border-box;
      }
      .fp3d-icon-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-icon-row input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-icon-row ha-icon {
        --mdc-icon-size: 22px;
        color: var(--fp3d-accent);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
        width: 100%;
        min-width: 0;
        white-space: normal;
        overflow-wrap: anywhere;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-lib-toggle:hover {
        color: var(--fp3d-text);
      }
      .fp3d-lib-caret {
        width: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      /* furniture blocks and multi selections: a dashed frame with its name, the frame being drawn */
      .fp3d-selframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-selframe-block rect {
        stroke: #ffb547;
      }
      .fp3d-selframe text {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-selframe-block text {
        fill: #ffb547;
      }
      .fp3d-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        pointer-events: none;
      }
      .fp3d-block-parts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 6px 0 10px;
      }
      .fp3d-block-note {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
      }
      .fp3d-multi-toggle {
        margin-top: 8px;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open .fp3d-open-swing {
        pointer-events: stroke;
      }
      .fp3d-open-door line.fp3d-open-leaf {
        stroke-width: 2;
      }
      .fp3d-open-front line.fp3d-open-leaf {
        stroke-width: 3;
      }
      .fp3d-open-front path,
      .fp3d-open-door line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .fp3d-open-door line.fp3d-open-pane {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.35);
      }
      .fp3d-open-ring {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 5 3;
        pointer-events: none;
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-bg-rotate {
        cursor: grab;
      }
      .fp3d-bg-ruler line {
        stroke: #ffb020;
        stroke-width: 2.5;
        stroke-dasharray: 6 4;
      }
      .fp3d-bg-ruler circle {
        fill: #ffb020;
        stroke: #1a1000;
        stroke-width: 1.5;
      }
      .fp3d-own-button {
        padding: 10px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-own-button textarea {
        font: 12px/1.4 ui-monospace, monospace;
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: var(--fp3d-panel, #0d1424);
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .fp3d-dev-all {
        display: block;
        padding: 2px 26px 6px;
        font-size: 12px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-hidden .fp3d-dev-name {
        opacity: 0.45;
        text-decoration: line-through;
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-resize-note {
        margin: 0 0 10px;
        padding: 6px 10px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
      }
      .fp3d-resize-note p {
        margin: 4px 0;
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      /* an unplaced entity is dragged onto the plan (#83) */
      .fp3d-unplaced-row {
        cursor: grab;
      }
      .fp3d-unplaced-row .fp3d-dev-name {
        flex: 1;
        min-width: 0;
      }
      .fp3d-room-btn {
        flex: 1;
        min-width: 0;
        border-bottom: none;
        padding: 0;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-wedge path,
      .fp3d-wedge circle:not(.fp3d-hit) {
        fill: rgba(55, 224, 255, 0.12);
        stroke: rgba(55, 224, 255, 0.45);
        stroke-width: 1;
        pointer-events: none;
      }
      .fp3d-wedge-sel path,
      .fp3d-wedge-sel > circle {
        fill: rgba(55, 224, 255, 0.2);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wedge .fp3d-rotate circle {
        pointer-events: auto;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
      /* phones (#94): drawing is for a PC or tablet (the banner says so), but the plan keeps a usable height
         whatever the toolbar wraps to, and the toolbar packs tighter */
      @media ${We(Qs)} {
        .fp3d-editor.fp3d-narrow {
          grid-template-rows: auto auto;
        }
        .fp3d-narrow .fp3d-canvas-wrap {
          min-height: max(320px, 52vh);
        }
        .fp3d-toolbar {
          gap: 4px 6px;
          padding: 6px 8px;
        }
        .fp3d-toolbar .fp3d-seg > button,
        .fp3d-toolbar .fp3d-menu-wrap > button {
          padding: 6px 10px;
          font-size: 13.5px;
        }
        /* the floor menu and ⚙ share the first row; the tools, undo and the view buttons follow */
        .fp3d-toolbar > * {
          order: 2;
        }
        .fp3d-toolbar > .fp3d-seg-floor {
          order: 0;
        }
        .fp3d-toolbar > .fp3d-seg-settings {
          order: 1;
        }
      }
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Il);function N0(s,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i||1,r=Math.min(1,Math.max(0,((s[0]-t[0])*n+(s[1]-t[1])*i)/o));return Math.hypot(s[0]-t[0]-n*r,s[1]-t[1]-i*r)}function Nm(s){return s.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var El={language:"en"};function Gt(s){return/^(sensor|input_number|number)\./.test(s)}function Pl(s){return/^(binary_sensor|input_boolean)\./.test(s)}export{Il as Fp3dEditor};
