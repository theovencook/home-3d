var Cn=new Map;var Hn=new Map;function Dn(o){return o.startsWith("pack:")}var Ln={meter:"meter",consumer_unit:"meter",energy_monitor:"meter",inverter:"inverter",home_battery:"home_battery",power_station:"home_battery",ev_charger:"wallbox",solar_panel:"solar"};function me(o){if(o==="meter"||o==="inverter"||o==="home_battery"||o==="wallbox")return o;let t=Wn(o),e=t?.family?Ln[t.family]??null:null;return e==="meter"&&(t.tags??[]).some(n=>/^(gas|water|wasser)$/i.test(n))?null:e}function Wn(o){if(Dn(o))return Hn.get(o)??Cn.get(o)}var Kn={type:"none",pitch:35,overhang:.4},yr={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Kn}};var Gn=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var Un=new Set([...Gn,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function E(o,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[i,s]=t[n],[a,l]=t[r];s>o[1]!=l>o[1]&&o[0]<(a-i)*(o[1]-s)/(l-s)+i&&(e=!e)}return e}var jn=Math.PI/180;var Sr=Math.tan(30*jn);var Ir=Math.PI/180;function Qn(o){let t=new Map,e=new Set(o.map(n=>n.powerEntity));for(let n of o)n.circuit&&n.circuit!==n.powerEntity&&e.has(n.circuit)&&t.set(n.circuit,(t.get(n.circuit)??0)+n.power);return o.map(n=>Math.max(0,n.power-(t.get(n.powerEntity)??0)))}var lt=o=>o&&o!=="none"?o:null;function $t(o,t=e=>lt(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=t(r),s=me(r.type);if(s==="meter")e.grid??=i,e.gridExport??=lt(r.export);else if((s==="inverter"||s==="solar")&&i&&!e.solar.includes(i))e.solar.push(i);else if(s==="home_battery"){i&&!e.battery.includes(i)&&e.battery.push(i);let a=lt(r.charge);a&&!e.charge.includes(a)&&e.charge.push(a),(i||a)&&e.batteries.push({power:i,charge:a});let l=lt(r.soc);l&&!e.soc.includes(l)&&e.soc.push(l)}}return e}function A(o,t=!1){if(!o)return null;let e=Number(o.state);if(!Number.isFinite(e))return null;let n=e*Yn(o.attributes.unit_of_measurement);return t?-n:n}function Yn(o){switch(typeof o=="string"?o.trim():""){case"mW":return .001;case"kW":return 1e3;case"MW":return 1e6;case"GW":return 1e9;case"TW":return 1e12;default:return 1}}function be(o,t,e,n=$t(t)){let r=t.energy,i=r.grid??n.grid,s=i?A(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let f=Math.max(0,A(o.states[n.gridExport])??0);s=Math.max(0,s??0)-f}let a=r.solar?A(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let f=n.solar.map(b=>A(o.states[b])).filter(b=>b!==null);a=f.length?f.reduce((b,w)=>b+w,0):null}let l=r.battery?A(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let f=n.batteries.map(b=>{if(b.charge){let w=b.power?Math.max(0,A(o.states[b.power])??0):0,g=Math.max(0,A(o.states[b.charge])??0);return w-g}return b.power?A(o.states[b.power],r.battery_invert):null}).filter(b=>b!==null);l=f.length?f.reduce((b,w)=>b+w,0):null}let c=(r.battery_soc?[r.battery_soc]:n.soc).map(f=>Number(o.states[f]?.state)).filter(f=>Number.isFinite(f)),m=c.length?c.reduce((f,b)=>f+b,0)/c.length:NaN,d=r.tariff?o.states[r.tariff]:void 0,p=Number(d?.state),h=r.consumption?A(o.states[r.consumption]):null;return h!==null?h=Math.max(0,h):s!==null||a!==null||l!==null?h=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):e.length&&(h=Qn(e).reduce((f,b)=>f+b,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(m)?m:null,tariff:d&&Number.isFinite(p)?{value:p,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:h}}var Zn=Symbol.for("home-3d.custom-elements");function _e(){let o=globalThis;return o[Zn]??={defined:new Map,watching:!1}}function ye(){let o=globalThis.customElements;if(o){for(let[t,e]of _e().defined)if(e.registry!==o&&(e.registry=o,!o.get(t)))try{o.define(t,e.cls)}catch(n){console.warn(`Home 3D: could not define ${t} in the page's element registry`,n)}}}function xe(o,t){ye();let e=globalThis.customElements;if(e.get(o))return!1;e.define(o,t);let n=_e();return n.defined.set(o,{cls:t,registry:e}),n.watching||(n.watching=!0,e.whenDefined("home-assistant").then(ye)),!0}var ut=globalThis,ct=ut.ShadowRoot&&(ut.ShadyCSS===void 0||ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),ve=new WeakMap,Q=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ct&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=ve.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ve.set(e,t))}return t}toString(){return this.cssText}},we=o=>new Q(typeof o=="string"?o:o+"",void 0,At),Tt=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((n,r,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new Q(e,o,At)},ke=(o,t)=>{if(ct)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),r=ut.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=e.cssText,o.appendChild(n)}},Pt=ct?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return we(e)})(o):o;var{is:Xn,defineProperty:Jn,getOwnPropertyDescriptor:to,getOwnPropertyNames:eo,getOwnPropertySymbols:no,getPrototypeOf:oo}=Object,dt=globalThis,Me=dt.trustedTypes,ro=Me?Me.emptyScript:"",io=dt.reactiveElementPolyfillSupport,Y=(o,t)=>o,zt={toAttribute(o,t){switch(t){case Boolean:o=o?ro:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Re=(o,t)=>!Xn(o,t),Se={attribute:!0,type:String,converter:zt,reflect:!1,useDefault:!1,hasChanged:Re};Symbol.metadata??=Symbol("metadata"),dt.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Se){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(t,n,e);r!==void 0&&Jn(this.prototype,t,r)}}static getPropertyDescriptor(t,e,n){let{get:r,set:i}=to(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:r,set(s){let a=r?.call(this);i?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Se}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=oo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties,n=[...eo(e),...no(e)];for(let r of n)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,r]of e)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let r=this._$Eu(e,n);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let r of n)e.unshift(Pt(r))}else t!==void 0&&e.push(Pt(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:zt).toAttribute(e,n.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){let n=this.constructor,r=n._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=n.getPropertyOptions(r),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:zt;this._$Em=r;let a=s.fromAttribute(e,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,n,r=!1,i){if(t!==void 0){let s=this.constructor;if(r===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Re)(i,e)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:r,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[r,i]of n){let{wrapped:s}=i,a=this[r];s!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[Y("elementProperties")]=new Map,T[Y("finalized")]=new Map,io?.({ReactiveElement:T}),(dt.reactiveElementVersions??=[]).push("2.1.2");var Ht=globalThis,Ee=o=>o,ft=Ht.trustedTypes,$e=ft?ft.createPolicy("lit-html",{createHTML:o=>o}):void 0,Oe="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Ie="?"+z,so=`<${Ie}>`,V=document,X=()=>V.createComment(""),J=o=>o===null||typeof o!="object"&&typeof o!="function",Dt=Array.isArray,ao=o=>Dt(o)||typeof o?.[Symbol.iterator]=="function",Ft=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,Te=/>/g,I=RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pe=/'/g,ze=/"/g,Ne=/^(?:script|style|textarea|title)$/i,Lt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),v=Lt(1),Ve=Lt(2),hi=Lt(3),C=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Fe=new WeakMap,N=V.createTreeWalker(V,129);function Ce(o,t){if(!Dt(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return $e!==void 0?$e.createHTML(t):t}var lo=(o,t)=>{let e=o.length-1,n=[],r,i=t===2?"<svg>":t===3?"<math>":"",s=Z;for(let a=0;a<e;a++){let l=o[a],u,c,m=-1,d=0;for(;d<l.length&&(s.lastIndex=d,c=s.exec(l),c!==null);)d=s.lastIndex,s===Z?c[1]==="!--"?s=Ae:c[1]!==void 0?s=Te:c[2]!==void 0?(Ne.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=I):c[3]!==void 0&&(s=I):s===I?c[0]===">"?(s=r??Z,m=-1):c[1]===void 0?m=-2:(m=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?I:c[3]==='"'?ze:Pe):s===ze||s===Pe?s=I:s===Ae||s===Te?s=Z:(s=I,r=void 0);let p=s===I&&o[a+1].startsWith("/>")?" ":"";i+=s===Z?l+so:m>=0?(n.push(u),l.slice(0,m)+Oe+l.slice(m)+z+p):l+z+(m===-2?a:p)}return[Ce(o,i+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},tt=class o{constructor({strings:t,_$litType$:e},n){let r;this.parts=[];let i=0,s=0,a=t.length-1,l=this.parts,[u,c]=lo(t,e);if(this.el=o.createElement(u,n),N.currentNode=this.el.content,e===2||e===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(r=N.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let m of r.getAttributeNames())if(m.endsWith(Oe)){let d=c[s++],p=r.getAttribute(m).split(z),h=/([.?@])?(.*)/.exec(d);l.push({type:1,index:i,name:h[2],strings:p,ctor:h[1]==="."?It:h[1]==="?"?Nt:h[1]==="@"?Vt:B}),r.removeAttribute(m)}else m.startsWith(z)&&(l.push({type:6,index:i}),r.removeAttribute(m));if(Ne.test(r.tagName)){let m=r.textContent.split(z),d=m.length-1;if(d>0){r.textContent=ft?ft.emptyScript:"";for(let p=0;p<d;p++)r.append(m[p],X()),N.nextNode(),l.push({type:2,index:++i});r.append(m[d],X())}}}else if(r.nodeType===8)if(r.data===Ie)l.push({type:2,index:i});else{let m=-1;for(;(m=r.data.indexOf(z,m+1))!==-1;)l.push({type:7,index:i}),m+=z.length-1}i++}}static createElement(t,e){let n=V.createElement("template");return n.innerHTML=t,n}};function W(o,t,e=o,n){if(t===C)return t;let r=n!==void 0?e._$Co?.[n]:e._$Cl,i=J(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,e,n)),n!==void 0?(e._$Co??=[])[n]=r:e._$Cl=r),r!==void 0&&(t=W(o,r._$AS(o,t.values),r,n)),t}var Ot=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,r=(t?.creationScope??V).importNode(e,!0);N.currentNode=r;let i=N.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new et(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new Ct(i,this,t)),this._$AV.push(u),l=n[++a]}s!==l?.index&&(i=N.nextNode(),s++)}return N.currentNode=V,r}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},et=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),J(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ao(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=tt.createElement(Ce(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(e);else{let i=new Ot(r,this),s=i.u(this.options);i.p(e),this.T(s),this._$AH=i}}_$AC(t){let e=Fe.get(t.strings);return e===void 0&&Fe.set(t.strings,e=new tt(t)),e}k(t){Dt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,r=0;for(let i of t)r===e.length?e.push(n=new o(this.O(X()),this.O(X()),this,this.options)):n=e[r],n._$AI(i),r++;r<e.length&&(this._$AR(n&&n._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Ee(t).nextSibling;Ee(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},B=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(t,e=this,n,r){let i=this.strings,s=!1;if(i===void 0)t=W(this,t,e,0),s=!J(t)||t!==this._$AH&&t!==C,s&&(this._$AH=t);else{let a=t,l,u;for(t=i[0],l=0;l<i.length-1;l++)u=W(this,a[n+l],e,l),u===C&&(u=this._$AH[l]),s||=!J(u)||u!==this._$AH[l],u===x?t=x:t!==x&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}s&&!r&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},It=class extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},Nt=class extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},Vt=class extends B{constructor(t,e,n,r,i){super(t,e,n,r,i),this.type=5}_$AI(t,e=this){if((t=W(this,t,e,0)??x)===C)return;let n=this._$AH,r=t===x&&n!==x||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ct=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};var uo=Ht.litHtmlPolyfillSupport;uo?.(tt,et),(Ht.litHtmlVersions??=[]).push("3.3.3");var He=(o,t,e)=>{let n=e?.renderBefore??t,r=n._$litPart$;if(r===void 0){let i=e?.renderBefore??null;n._$litPart$=r=new et(t.insertBefore(X(),i),i,void 0,e??{})}return r._$AI(o),r};var Wt=globalThis,F=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=He(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};F._$litElement$=!0,F.finalized=!0,Wt.litElementHydrateSupport?.({LitElement:F});var co=Wt.litElementPolyfillSupport;co?.({LitElement:F});(Wt.litElementVersions??=[]).push("4.2.2");var fo=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),po=new Set(["power","plug","connectivity","running"]);function De(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let t=o.entity_id.split(".")[0];if(t==="binary_sensor")return po.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(t==="input_boolean"||t==="switch")return o.state==="on";let e=Number(o.state);if(o.state!==""&&Number.isFinite(e))return o.attributes.unit_of_measurement==="V"&&e<100;let n=String(o.state).toLowerCase().trim();return fo.has(n)||n.startsWith("ob ")}function H(o,t,e=9e5){let n=o.mean.length;if(!n||t<o.start)return NaN;let r=(t-o.start)/o.step-.5,i=Math.floor(r);if(i<0)return o.mean[0];if(i>=n-1){let c=Le(o,n-1);return c>=0&&t-(o.start+(c+.5)*o.step)<=e?o.mean[c]:NaN}let s=o.mean[i],a=o.mean[i+1],l=r-i;if(!Number.isNaN(s)&&!Number.isNaN(a))return s+(a-s)*l;let u=Le(o,i);return u>=0&&t-(o.start+(u+.5)*o.step)<=e?o.mean[u]:NaN}function Le(o,t){for(let e=t;e>=0;e--)if(!Number.isNaN(o.mean[e]))return e;return-1}function We(o,t,e=0){if(typeof t=="number"&&t>=0&&t<=6)return 10**-t;switch(typeof o=="string"?o:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(e)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(e)>=100?1:Math.abs(e)>=10?.1:.01}}function Be(o,t){if(!Number.isFinite(o))return"unknown";let e=t>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(t)))),r=(Math.round(o/t)*t).toFixed(e);return/^-0(\.0*)?$/.test(r)?r.slice(1):r}var mo=o=>typeof o=="string"?{s:o,a:null}:{s:String(o[0]),a:o[1]&&typeof o[1]=="object"?o[1]:null},O=o=>`${o.s}\0${o.a?JSON.stringify(o.a):""}`;function Ke(o){let t=[...o].sort((d,p)=>d.day_start-p.day_start),e=new Map,n=new Map,r=new Set,i=1/0,s=-1/0,a=null,l=!1,u=null;for(let d of t){i=Math.min(i,d.day_start*1e3),s=Math.max(s,d.end*1e3),d.oldest===null?l=!0:a=a===null?d.oldest*1e3:Math.min(a,d.oldest*1e3),u??=d.keep_days;for(let[p,h]of Object.entries(d.entities??{})){let f=e.get(p)??[],b=d.day_start*1e3,w=Math.min(h.t.length,h.v.length);for(let g=0;g<w;g++){let _=h.tab[h.v[g]];if(_===void 0)continue;let y=mo(_),M=O(y),R=f[f.length-1],q=b+h.t[g]*1e3;R&&(q<R.t||R.k===M)||f.push({t:q,v:y,k:M})}e.set(p,f)}for(let[p,h]of Object.entries(d.stats??{})){let f=n.get(p)??[];f.push({start:h.start*1e3,step:h.step*1e3,mean:h.mean}),n.set(p,f)}for(let p of d.missing??[])r.add(p)}let c=new Map;for(let[d,p]of e){if(!p.length)continue;let h=[],f=new Map,b=new Float64Array(p.length),w=new Uint32Array(p.length),g=new Float64Array(p.length);for(let _=0;_<p.length;_++){let y=f.get(p[_].k);y===void 0&&(y=h.length,h.push(p[_].v),f.set(p[_].k,y)),b[_]=p[_].t,w[_]=y,g[_]=_>0&&p[_-1].v.s===p[_].v.s?g[_-1]:p[_].t}c.set(d,{id:d,times:b,vals:w,values:h,since:g}),r.delete(d)}let m=new Map;for(let[d,p]of n){let h=p[0].step;if(!(h>0))continue;let f=Math.min(...p.map(_=>_.start)),b=Math.max(...p.map(_=>_.start+_.mean.length*_.step)),w=Math.max(0,Math.round((b-f)/h));if(!w)continue;let g=new Float32Array(w).fill(NaN);for(let _ of p)_.mean.forEach((y,M)=>{let R=Math.round((_.start+M*_.step-f)/h);typeof y=="number"&&Number.isFinite(y)&&R>=0&&R<w&&(g[R]=y)});g.every(_=>Number.isNaN(_))||(m.set(d,{id:d,start:f,step:h,mean:g}),r.delete(d))}return{start:Number.isFinite(i)?i:0,end:Number.isFinite(s)?s:0,oldest:l?null:a,keepDays:u,tracks:c,series:m,missing:r}}function S(o,t){let e=0,n=o.length-1;if(n<0||o[0]>t)return-1;for(;e<n;){let r=e+n+1>>1;o[r]<=t?e=r:n=r-1}return e}var U=class{tracks;idx;t=-1/0;constructor(t){this.tracks=[...t.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(t){let e=t>=this.t;for(let n=0;n<this.tracks.length;n++){let r=this.tracks[n].times,i=this.idx[n];if(!e)i=S(r,t);else{let s=0;for(;i+1<r.length&&r[i+1]<=t&&s<8;)i++,s++;i+1<r.length&&r[i+1]<=t&&(i=S(r,t))}this.idx[n]=i}return this.t=t,this.idx}value(t){let e=this.idx[t];return e<0?null:this.tracks[t].values[this.tracks[t].vals[e]]}},ho=new Set(["unavailable","unknown"]);function Bt(o,t=5*6e4,e=.6,n=10*6e4,r=-1/0){let i=new U(o);if(!i.tracks.length)return[];let s=Math.max(o.oldest??o.start,r),a=[],l=null;for(let u=s;u<=o.end;u+=t){i.at(u);let c=0;for(let d=0;d<i.tracks.length;d++){let p=i.value(d);(!p||ho.has(p.s))&&c++}let m=c/i.tracks.length>=e;m&&l===null&&(l=u),!m&&l!==null&&(u-l>=n&&a.push([l,u]),l=null)}return l!==null&&o.end-l>=n&&a.push([l,o.end]),a}function Ge(o){for(let t=0;t<o.times.length;t++)o.since[t]=t>0&&o.values[o.vals[t-1]].s===o.values[o.vals[t]].s?o.since[t-1]:o.times[t]}function go(o,t){let e=[...o.values],n=new Map(e.map((u,c)=>[O(u),c])),r=t.values.map(u=>{let c=O(u),m=n.get(c);return m===void 0&&(m=e.length,e.push(u),n.set(c,m)),m}),i=t.times.length?t.times[0]:1/0,s=[],a=[];for(let u=0;u<o.times.length&&o.times[u]<i;u++)s.push(o.times[u]),a.push(o.vals[u]);for(let u=0;u<t.times.length;u++){let c=r[t.vals[u]];a.length&&a[a.length-1]===c||(s.push(t.times[u]),a.push(c))}let l={id:o.id,times:Float64Array.from(s),vals:Uint32Array.from(a),values:e,since:new Float64Array(s.length)};return(o.dropped||t.dropped)&&(l.dropped=Float64Array.from([...o.dropped??[],...t.dropped??[]]).sort()),Ge(l),l}function bo(o,t){let e=o.step,n=Math.min(o.start,t.start),r=Math.max(o.start+o.mean.length*o.step,t.start+t.mean.length*t.step),i=Math.max(0,Math.round((r-n)/e)),s=new Float32Array(i).fill(NaN);for(let a of[o,t])for(let l=0;l<a.mean.length;l++){let u=Math.round((a.start+l*a.step-n)/e);!Number.isNaN(a.mean[l])&&u>=0&&u<i&&(s[u]=a.mean[l])}return{id:o.id,start:n,step:e,mean:s}}function je(o,t){let[e,n]=o.start<=t.start?[o,t]:[t,o],r=new Map;for(let l of new Set([...e.tracks.keys(),...n.tracks.keys()])){let u=e.tracks.get(l),c=n.tracks.get(l);r.set(l,u&&c?go(u,c):u??c)}let i=new Map;for(let l of new Set([...e.series.keys(),...n.series.keys()])){let u=e.series.get(l),c=n.series.get(l);i.set(l,u&&c?bo(u,c):u??c)}let s=new Set([...e.missing,...n.missing].filter(l=>!r.has(l)&&!i.has(l))),a=e.oldest===null?null:e.oldest<e.end?e.oldest:n.oldest??n.start;return{start:e.start,end:Math.max(e.end,n.end),oldest:a,keepDays:n.keepDays??e.keepDays,tracks:r,series:i,missing:s}}function qe(o){let t=0;for(let e of o.tracks.values())t+=e.times.length;return t}function Qe(o){let t=0;for(let e of o.tracks.values())t+=e.times.length*20+e.values.length*120;for(let e of o.series.values())t+=e.mean.length*4;return t}var Ye=3e5;function Ze(o,t,e=6e4,n=5*6e4){let r=0;for(let i of t){let s=o.tracks.get(i);if(!s||s.times.length<3)continue;let a=s.times.length,l=h=>s.values[s.vals[h]].s,u=[],c=[],m=null;for(let h=0;h<a;h++){let f=u.length?u[u.length-1]:-1;if(f>=0&&m!==null&&l(f)==="off"&&l(h)==="on"&&h+1<a&&l(h+1)==="off"&&s.times[h+1]-s.times[h]<e&&s.times[h]-m<=n){c.push(s.times[h]),h++,r+=2;continue}if(f>=0&&s.vals[f]===s.vals[h]){r++;continue}f>=0&&l(f)==="on"&&l(h)!=="on"&&(m=s.times[h]),u.push(h)}if(u.length===a)continue;let d=Float64Array.from(u,h=>s.times[h]),p=Uint32Array.from(u,h=>s.vals[h]);s.times=d,s.vals=p,s.since=new Float64Array(u.length),c.length&&(s.dropped=Float64Array.from([...s.dropped??[],...c]).sort()),Ge(s)}return r}var Ue=new WeakMap;function yo(o){let t=Ue.get(o);return(!t||t.size!==o.values.length)&&(t=new Map(o.values.map((e,n)=>[O(e),n])),Ue.set(o,t)),t}function Ut(o,t){let e=yo(o),n=o.times.length,r=n?o.times[n-1]:-1/0,i=n?o.vals[n-1]:-1,s=[],a=[];for(let d of t){if(d.t<r)continue;let p=O(d.v),h=e.get(p);h!==i&&(h===void 0&&(h=o.values.length,o.values.push(d.v),e.set(p,h)),s.push(d.t),a.push(h),r=d.t,i=h)}if(!s.length)return 0;let l=n+s.length,u=new Float64Array(l);u.set(o.times),u.set(s,n);let c=new Uint32Array(l);c.set(o.vals),c.set(a,n);let m=new Float64Array(l);m.set(o.since);for(let d=n;d<l;d++)m[d]=d>0&&o.values[c[d-1]].s===o.values[c[d]].s?m[d-1]:u[d];return o.times=u,o.vals=c,o.since=m,s.length}function Xe(o,t){let e=-1;for(let r of t)Number.isFinite(r.value)&&r.t>=o.start&&(e=Math.max(e,Math.floor((r.t-o.start)/o.step)));if(e<0)return 0;if(e>=o.mean.length){let r=new Float32Array(e+1).fill(NaN);r.set(o.mean),o.mean=r}let n=0;for(let r of t){if(!Number.isFinite(r.value)||r.t<o.start)continue;let i=Math.floor((r.t-o.start)/o.step);Number.isNaN(o.mean[i])&&(o.mean[i]=r.value,n++)}return n}function Je(o,t){let e={id:o,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return Ut(e,t)?e:null}function tn(o,t){if(t<=o.start)return o;let e=new Map;for(let[i,s]of o.tracks){let a=Math.max(0,S(s.times,t));if(a===0){e.set(i,s);continue}let l={id:i,times:s.times.slice(a),vals:s.vals.slice(a),values:s.values,since:s.since.slice(a)};s.dropped&&(l.dropped=s.dropped.filter(u=>u>=t)),e.set(i,l)}let n=new Map;for(let[i,s]of o.series){let a=Math.max(0,Math.floor((t-s.start)/s.step));n.set(i,a?{id:i,start:s.start+a*s.step,step:s.step,mean:s.mean.slice(a)}:s)}let r=o.oldest!==null&&o.oldest>t?o.oldest:null;return{...o,start:t,oldest:r,tracks:e,series:n}}function en(o,t,e,n){let r={};for(let s of t){let a=o.series.get(s),l=o.tracks.get(s);if(!a&&!l)continue;let u=[];for(let c=Math.floor(e/3e5)*3e5;c<n;c+=3e5){let m=NaN;if(a){let d=Math.floor((c+15e4-a.start)/a.step);m=d>=0&&d<a.mean.length?a.mean[d]:NaN}else if(l){let d=S(l.times,c+15e4);m=d<0?NaN:Number(l.values[l.vals[d]].s)}Number.isFinite(m)&&u.push({start:c,mean:m})}u.length&&(r[s]=u)}return r}var D=null;function Kt(o){let t=o?.locale?.time_zone,e=o?.config?.time_zone;if(t!=="server"||!e)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),e}catch{return null}}function Gt(o){D=o}var nn=new Map;function _o(o){let t=nn.get(o);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),nn.set(o,t)),t}function mt(o,t){let e=[0,0,0,0,0,0];for(let n of _o(t).formatToParts(o)){let r=Number(n.value);n.type==="year"?e[0]=r:n.type==="month"?e[1]=r-1:n.type==="day"?e[2]=r:n.type==="hour"?e[3]=r%24:n.type==="minute"?e[4]=r:n.type==="second"&&(e[5]=r)}return e}function pt(o,t){let[e,n,r,i,s,a]=mt(o,t),l=o-(o%1e3+1e3)%1e3;return Date.UTC(e,n,r,i,s,a)-l}function K(o,t=D){return t?mt(o,t)[3]:new Date(o).getHours()}function P(o,t=D){if(!t)return new Date(o).setHours(0,0,0,0);let[e,n,r]=mt(o,t),i=Date.UTC(e,n,r)-pt(o,t);return i=Date.UTC(e,n,r)-pt(i,t),i}function ht(o,t=D){return P(P(o,t)+27*36e5,t)}function gt(o,t=D){if(!t)return new Date(o).setMinutes(0,0,0);let[,,,,e,n]=mt(o,t);return o-(o%1e3+1e3)%1e3-(e*60+n)*1e3}function jt(o,t,e,n=D){if(!n){let s=new Date(o);return s.setHours(t,e,0,0),s.getTime()}let r=P(o,n),i=r+(t*60+e)*6e4;return i-(pt(i,n)-pt(r,n))}function nt(o=D){return o?{timeZone:o}:{}}var bt={alarm:100,smoke:95,gas:95,co:95,water:90,outage:88,rain:70,door:50,lock:45,garage:40,camera:38,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},rn=new Set(["window","battery_full","pv_peak"]),yt=new Set(["alarm","smoke","gas","co","water","outage"]),qt={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",outage:"safety",motion:"safety",camera:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},xo=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),ot=new Set(["unavailable","unknown"]),L=new Set(["on","open","opening","tilted"]);function vo(o){let t=K(o);return t>=23||t<5}function*rt(o){let t=null;for(let e=0;e<o.times.length;e++){let n=o.values[o.vals[e]].s;n!==t&&(yield{t:o.times[e],from:t,to:n}),t=n}}function G(o,t,e){let n=[],r=null;for(let i of rt(o)){let s=t.has(i.to);s&&r===null&&(r=i.t),!s&&r!==null&&(n.push([r,i.t]),r=null)}return r!==null&&n.push([r,e]),n}function wo(o,t){let e=o.tracks.get(t);if(e){let i=[];for(let s=0;s<e.times.length;s++){let a=Number(e.values[e.vals[s]].s);Number.isFinite(a)&&i.push({t:e.times[s],w:a})}return i}let n=o.series.get(t);if(!n)return[];let r=[];for(let i=0;i<n.mean.length;i++){let s=n.start+(i+.5)*n.step,a=H(n,s);Number.isFinite(a)&&r.push({t:s,w:a})}return r}function ko(o,t=10,e=5,n=20*6e4){let r=[],i=null;for(let s of o)i===null&&s.w>t?i=s.t:i!==null&&s.w<e&&(s.t-i>=n&&r.push(s.t),i=null);return r}function on(o,t,e,n,r=3e5){let i=Math.max(0,Math.ceil((n-e)/r)),s=new Float64Array(i).fill(NaN),a=o.series.get(t),l=o.tracks.get(t);for(let u=0;u<i;u++){let c=e+(u+.5)*r;if(a)s[u]=H(a,c);else if(l){let m=S(l.times,c);s[u]=m<0?NaN:Number(l.values[l.vals[m]].s)}}return s}function Mo(o,t){let e=[],r=Math.floor(o.start/3e5)*3e5;for(let i of t.soc){let s=on(o,i,r,o.end),a=!1;s.forEach((l,u)=>{Number.isNaN(l)||(l<95?a=!0:l>=99&&a&&(a=!1,e.push({t:r+(u+.5)*3e5,kind:"battery_full",entity:i})))})}if(t.solar.length){let i=t.solar.map(c=>on(o,c,r,o.end)),s=i[0].length,a=-1,l={t:0,w:0},u=()=>{l.w>100&&e.push({t:l.t,kind:"pv_peak",entity:t.solar[0]}),l={t:0,w:0}};for(let c=0;c<s;c++){let m=r+(c+.5)*3e5,d=P(m);d!==a&&(a>=0&&u(),a=d);let p=0;for(let h of i)Number.isNaN(h[c])||(p+=Math.max(0,h[c]));p>l.w&&(l={t:m,w:p})}a>=0&&(o.end>=ht(a)||t.sunDown?.(o.end))&&u()}return e}function sn({timeline:o,roles:t,weather:e,night:n=vo,energy:r=null,outage:i=null}){let s=[],a=(d,p,h)=>{d>=o.start&&d<=o.end&&s.push({t:d,kind:p,entity:h})},l=e?o.tracks.get(e):void 0,u=l?G(l,xo,o.end):[];for(let[d,p]of t){if(p==="washer"){for(let f of ko(wo(o,d)))a(f,"washer",d);continue}let h=o.tracks.get(d);if(h){if(p==="window"||p==="window_more"){for(let[f,b]of G(h,L,o.end)){p==="window"&&f>o.start&&f>h.times[0]&&a(f,"window",d);for(let[w,g]of u)f<g&&w<b&&a(Math.max(f,w),"rain",d)}continue}for(let f of rt(h))if(f.from!==null)switch(p){case"door":L.has(f.to)&&!L.has(f.from)&&!ot.has(f.from)&&a(f.t,"door",d);break;case"garage":(f.to==="on"||f.to==="open"||f.to==="opening")&&(f.from==="off"||f.from==="closed"||f.from==="closing")&&a(f.t,"garage",d);break;case"lock":(f.to==="unlocked"||f.to==="open")&&(f.from==="locked"||f.from==="locking")&&a(f.t,"lock",d);break;case"alarm":f.to==="triggered"&&a(f.t,"alarm",d);break;case"smoke":case"gas":case"co":case"water":f.to==="on"&&f.from!=="on"&&!ot.has(f.from)&&a(f.t,p,d);break;case"motion":f.to==="on"&&f.from==="off"&&n(f.t)&&a(f.t,"motion",d);break;case"camera":f.to==="on"&&f.from!=="on"&&!ot.has(f.from)&&a(f.t,"camera",d);break;case"robot":f.to==="cleaning"&&f.from!=="cleaning"&&f.from!=="paused"?a(f.t,"robot_start",d):f.to==="docked"&&(f.from==="cleaning"||f.from==="returning"||f.from==="paused")&&a(f.t,"robot_done",d);break}}}if(r)for(let d of Mo(o,r))a(d.t,d.kind,d.entity);let c=i?o.tracks.get(i.id):void 0;if(i&&c){let d=p=>De({entity_id:i.id,state:p,attributes:i.attributes});for(let p of rt(c))p.from!==null&&d(p.to)&&!d(p.from)&&a(p.t,"outage",i.id)}s.sort((d,p)=>d.t-p.t||bt[p.kind]-bt[d.kind]);let m=new Map;return s.filter(d=>{let p=`${d.kind}:${d.entity}`,h=m.get(p),f=d.kind==="motion"?30*6e4:5*6e4;return h!==void 0&&d.t-h<f?!1:(m.set(p,d.t),!0)})}function an(o,t){let e=[];for(let n=o.length-1;n>=0;n--){let r=o[n];if(!t.has(qt[r.kind]))continue;let i=gt(r.t),s=e[e.length-1];s&&s.hour===i?s.events.unshift(r):e.push({hour:i,events:[r]})}return e}function ln(o,t,e=14){let n=[];for(let r of o){let i=t(r.t),s=n[n.length-1];s&&i-s.x<e?(s.events.push(r),bt[r.kind]>bt[s.top.kind]&&(s.top=r,s.t=r.t)):n.push({x:i,t:r.t,top:r,events:[r]})}return n}var xt=[60,360,900,3600],Qt=[60,360,900,3600,14400],un=360;function cn(o,t){return o==="low"||t?500:o==="high"?167:250}var _t=class{start;end;t;playing=!1;speed;speeds;constructor(t,e,n,r=un,i=xt){this.start=t,this.end=e,this.speeds=i,this.t=Math.min(e,Math.max(t,n)),this.speed=i.includes(r)?r:un}setRange(t,e,n=this.speeds){this.start=t,this.end=e,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(e,Math.max(t,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(t){this.t=Math.min(this.end,Math.max(this.start,t))}advance(t){if(!this.playing||!(t>0))return!1;let e=Math.min(this.end,this.t+t*this.speed),n=e!==this.t;return this.t=e,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let t=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(t+1)%this.speeds.length],this.speed}};function dn(o,t,e,n=3e4){if(e>0)return o.find(r=>r.t>t+n)??null;for(let r=o.length-1;r>=0;r--)if(o[r].t<t-n)return o[r];return null}function fn(o,t,e){let n=0,r=o.length;for(;n<r;){let s=n+r>>1;o[s].t<t?n=s+1:r=s}let i=n;for(;i<o.length&&o[i].t<=e;)i++;return n===0&&i===o.length?o:o.slice(n,i)}function Yt(o,t,e,n){if(!(e>t))return null;let r=0,i=o.length;for(;r<i;){let s=r+i>>1;o[s].t<=t?r=s+1:i=s}for(let s=r;s<o.length&&o[s].t<=e;s++)if(n(o[s]))return o[s];return null}function vt(o,t){let e=(o??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(e);if(n)return t-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let r=/^(\d{1,2}):(\d{2})$/.exec(e);if(!r||Number(r[1])>23||Number(r[2])>59)return null;let i=jt(t,Number(r[1]),Number(r[2]));return i>t?jt(i-864e5,Number(r[1]),Number(r[2])):i}var it={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},wt=o=>Ve`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,pn={alarm:"#ff3b4f",smoke:"#ff3b4f",outage:"#ffc83a",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",camera:"#e07aff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},So={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},Zt=class extends F{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=t=>{let e=this.session,n=t.composedPath()[0];if(!(!e?.playback||t.ctrlKey||t.metaKey||t.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n?.isContentEditable))if(t.key===" "){if(n?.tagName==="BUTTON")return;t.preventDefault(),e.toggle()}else(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),e.seek(e.playback.t+(t.key==="ArrowLeft"?-1:1)*(t.shiftKey?36e5:3e5)))};onEscape=t=>{t.key!=="Escape"||!this._sheet||(t.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let t of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(t)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let t=this.renderRoot.querySelector(".track");t&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(e=>{let n=Math.round(e[0]?.contentRect.width??0);n!==this._w&&(this._w=n)}),this.resize.observe(t)),this.onTick()}signature(){let t=this.session,e=t?.playback,n=this._sheet==="day"&&e?P(e.t):0;return`${t?.state}|${t?.error}|${Math.round((t?.progress??0)*20)}|${e?.playing}|${e?.speed}|${t?.events.length}|${t?.allEvents.length}|${t?.range}|${t?.maxDays}|${t?.loadingDay}|${t?.full}|${t?.version}|${t?.atNow}|${t?.follow}|${t?.stopImportant}|${n}`}onTick(){let t=this.signature();t!==this.sig&&(this.sig=t,this.requestUpdate());let e=this.session,n=e?.playback;if(!e||!n)return;let r=this.renderRoot.querySelector(".clock-time"),i=this.renderRoot.querySelector(".clock-ago");r&&(r.textContent=this.clockText(n.t)),i&&(i.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(t){let e=this.renderRoot.querySelector(".head");e&&(e.style.transform=`translateX(${t.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(t){let e=this.session;return!e||!this._w?0:(t-e.start)/(e.end-e.start)*this._w}tOf(t){let e=this.session;return e.start+Math.min(this._w,Math.max(0,t))/Math.max(1,this._w)*(e.end-e.start)}weekday(t){return new Date(t).toLocaleDateString(this.language,{weekday:"short",...nt()}).replace(/\.$/,"")}clockText(t){return`${this.weekday(t)} ${this.time(t)}`}agoText(t){let e=this.session,n=Math.round((e.end-t)/6e4);return n<1?e.t("tt_now"):e.t("tt_ago",{d:this.duration(n*6e4)})}duration(t){let e=this.session,n=Math.round(t/6e4),r=Math.floor(n/1440),i=Math.floor(n%1440/60),s=n%60;return r?`${e.t("tt_days",{n:r})}${i?` ${i} h`:""}`:i?`${i} h${s?` ${s} min`:""}`:`${s} min`}name(t){let e=this.session;return e.names.get(t)??e.opts.live.states[t]?.attributes.friendly_name??t}eventText(t){return this.session.t(`tt_ev_${t.kind}`,{name:this.name(t.entity)})}time(t){return new Date(t).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...nt()})}onDown(t){let e=this.session;!e?.playback||t.target.closest(".mark")||(t.currentTarget.setPointerCapture?.(t.pointerId),this.dragging=!0,this._label=null,e.pause(),this.scrub(t,!0))}onMove(t){this.dragging&&this.scrub(t,!1)}onUp(t){this.dragging&&(this.scrub(t,!0),this.dragging=!1)}scrub(t,e){let n=this.session,r=this.renderRoot.querySelector(".track"),i=t.clientX-r.getBoundingClientRect().left,s=Math.max(n.playback?.start??n.start,this.tOf(i));this.placeHead(this.xOf(s));let a=this.renderRoot.querySelector(".clock-time");a&&(a.textContent=this.clockText(s)),clearTimeout(this.scrubTimer);let l=n.opts.spec.low||n.opts.quality==="low"?160:70,u=performance.now();e||u-this.scrubAt>=l?(this.scrubAt=u,n.seek(s)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(s)},l)}markDown(t){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(t)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(t){if(this.held){this.held=!1;return}this.session?.seek(t.t,!0),this.showLabel(t,2500)}showLabel(t,e=4500){this._label={x:t.x,lines:t.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(t.events.length>4?[`+${t.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,e)}renderTrack(){let t=this.session,e=this._w;if(!e)return x;let n=t.range==="7d",r=f=>`${((f-t.start)/(t.end-t.start)*100).toFixed(3)}%`,i=(f,b,w,g)=>b>f?v`<i class=${w} style="left:${r(Math.max(f,t.start))};width:calc(${r(Math.min(b,t.end))} - ${r(Math.max(f,t.start))})">${g?v`<span>${g}</span>`:x}</i>`:x,s=t.timeline?.oldest??null,a=t.playback?.start??t.start,l=t.recorderStart,u=x;a>t.start+6e4&&(t.loadingDay!==null?u=i(t.start,a,"loading",t.t("tt_loading_day",{day:this.weekday(t.loadingDay+12*36e5)})):l!==null&&l>t.start?u=i(t.start,a,"nodata",t.t("tt_recorder_days",{n:t.timeline?.keepDays??0})):u=i(t.start,a,"nodata",t.full?t.t("tt_memory_full"):""));let c=n?e/(t.end-t.start)*36e5*3>=12?3:6:1,m=e>=640?3:6,d=[],p=gt(t.start);for(p<t.start&&(p+=36e5);p<=t.end;p+=36e5){let f=K(p);if(f%c)continue;let b=f===0,w=b?n?`${this.weekday(p)} ${new Date(p).toLocaleDateString(this.language,{day:"numeric",...nt()}).replace(/\.$/,"")}.`:this.weekday(p):!n&&f%m===0?this.time(p):"";d.push(v`<b class="tick ${b?"tick-day":w?"tick-major":""}" style="left:${r(p)}">${w?v`<span>${w}</span>`:x}</b>`)}let h=`${e}|${t.events.length}|${t.start}|${t.end}|${t.version}|${a}`;return h!==this.clusterSig&&(this.clusterSig=h,this.clusters=ln(t.shownEvents(),f=>this.xOf(f),e<500?18:14)),v`${t.nights.map(([f,b])=>i(f,b,"night"))} ${u} ${s!==null&&s>a?i(a,s,"nodata"):x}
      ${t.gaps.map(([f,b])=>i(f,b,"gap"))} ${d}
      ${this.clusters.map(f=>v`<button
          class="mark ${f.events.length>1?"mark-many":""}"
          style="left:${f.x.toFixed(1)}px;--c:${pn[f.top.kind]}"
          title=${f.events.map(b=>`${this.time(b.t)} ${this.eventText(b)}`).join(`
`)}
          aria-label=${`${this.time(f.t)} ${this.eventText(f.top)}`}
          @pointerdown=${()=>this.markDown(f)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${b=>b.preventDefault()}
          @click=${()=>this.markClick(f)}
        >
          ${f.events.length>1?v`<span>${f.events.length}</span>`:x}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(t.playback?.t??t.end).toFixed(1)}px)"></div>
      ${this._label?v`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(f=>v`<span>${f}</span>`)}</div>`:x}`}toggleSheet(t="events"){this._sheet=this._sheet===t||this._sheet&&t==="events"?null:t}toggleFilter(t){let e=new Set(this._filters);e.has(t)?e.delete(t):e.add(t),this._filters=e}where(t){return this.session.roomOf.get(t)?.name??""}renderEvents(){let t=this.session,e=t.t,n=["safety","openings","devices",...t.energy?["energy"]:[]],r=an(t.shownEvents(!0).filter(s=>t.energy||qt[s.kind]!=="energy"),this._filters),i=0;return v`<div class="filters">
        ${n.map(s=>v`<button class="fchip" aria-pressed=${this._filters.has(s)} @click=${()=>this.toggleFilter(s)}>${e(`tt_f_${s}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${t.follow} @change=${s=>t.setFollow(s.target.checked)} />${e("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${t.stopImportant} @change=${s=>t.setStopImportant(s.target.checked)} />${e("tt_stop")}</label>
      ${r.length?r.map(s=>i>=300?x:(i+=s.events.length,v`<h4>${this.clockText(s.hour)}</h4>
              ${s.events.map(a=>this.row(pn[a.kind],this.time(a.t),this.eventText(a),this.where(a.entity),()=>t.goTo(a)))}`)):v`<p class="none">${e("tt_no_events")}</p>`}`}row(t,e,n,r,i){return v`<button class="row" @click=${i}>
      <i style="background:${t}"></i><time>${e}</time><span>${n}${r?v`<small>${r}</small>`:x}</span>
    </button>`}awayText(t){let e=this.session.t,n=this.name(t.entity);switch(t.kind){case"alarm":case"appliance":return this.eventText({kind:t.event??"alarm",entity:t.entity});case"door":case"window":return e("tt_away_door",{name:n,n:t.count});case"motion":return e("tt_away_motion",{name:n,n:t.count});case"light_on":return e("tt_away_light",{name:n,d:this.duration(t.ms)});case"window_open":return e("tt_away_open",{name:n,d:this.duration(t.ms)})}}renderAway(){let t=this.session,e=t.t,n=t.playback;this.awayOffer?.version!==t.version&&(this.awayOffer={version:t.version,offer:t.awayOffer()});let r=this.awayOffer.offer,[i,s]=this._awayFrom??r??[t.lastClosed!==null&&t.lastClosed>=n.start?t.lastClosed:Math.max(n.start,t.end-3*36e5),t.end],a=`${t.version}|${i}|${s}`;this.awayCache?.key!==a&&(this.awayCache={key:a,rows:t.away(i,s)});let l=this.awayCache.rows,u=d=>this._awayFrom=d,c=(d,p)=>`${this.clockText(d)} \u2013 ${p>=t.end-6e4?e("tt_now"):this.clockText(p)}`,m=d=>{let p=vt(d.target.value,t.end);p!==null&&u([Math.max(n.start,p),t.end])};return v`<p class="since">${e("tt_away_since")}:</p>
      <div class="filters">
        ${t.lastClosed!==null&&t.lastClosed>=n.start?v`<button class="fchip" aria-pressed=${i===t.lastClosed} @click=${()=>u([t.lastClosed,t.end])}>${e("tt_away_last")}</button>`:x}
        ${r?v`<button class="fchip" aria-pressed=${i===r[0]&&s===r[1]} @click=${()=>u(r)}>${e("tt_away_quiet",{from:this.time(r[0]),to:this.time(r[1])})}</button>`:x}
        <input class="when" type="time" aria-label=${e("tt_away_since")} @change=${m} />
      </div>
      <h4>${c(i,s)}</h4>
      ${l.length?l.slice(0,200).map(d=>this.row(So[d.kind],this.time(d.t),this.awayText(d),this.where(d.entity),()=>t.goTo(d))):v`<p class="none">${e("tt_away_none")}</p>`}`}renderDay(){let t=this.session,e=t.t,n=t.playback,r=P(n.t),i=t.daySummary(r),s=P(r-12*36e5),a=this._compare?t.daySummary(s):null;this._compare&&(!a||a.from>s+6e4)&&queueMicrotask(()=>t.ensureLoaded(s));let l=(y,M)=>y&&y.from>M+6e4?e("tt_day_partial",{time:this.time(y.from)}):"",u=(y,M=1)=>y.toLocaleString(this.language,{maximumFractionDigits:M,minimumFractionDigits:M}),c=y=>y>=6e4?`${u(y/36e5)} h`:"\u2013",m=y=>y&&y.tMin!==null&&y.tMax!==null?`${u(y.tMin)}\u2013${u(y.tMax)}\xB0`:"\u2013",d=y=>v`<td>${y?c(y.lightMs):"\u2013"}</td><td>${y?c(y.windowMs):"\u2013"}</td><td>${y?c(y.heatMs):"\u2013"}</td><td>${m(y)}</td>`,p=new Date(r).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...nt()}),h=y=>y?.energy??null,f=h(i),b=h(a),w=y=>y===void 0?"\u2013":`${u(y)} kWh`,g=y=>y==null?"\u2013":`${Math.round(y*100)} %`,_=this._compare?a?l(a,s):t.loadingDay!==null?e("tt_loading"):"":"";return v`<h4>${e("tt_day_title",{day:p})}</h4>
      ${l(i,r)?v`<p class="since">${l(i,r)}</p>`:x}
      ${_?v`<p class="since">${e("tt_day_before")}: ${_}</p>`:x}
      <div class="filters">
        <button class="fchip" @click=${()=>t.yesterday()}>⟲ ${e("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${e("tt_day_compare")}</button>
      </div>
      ${i&&(i.rooms.length||f)?v`${i.rooms.length?v`<table>
                  <thead>
                    <tr><th></th><th>${e("tt_day_light")}</th><th>${e("tt_day_window")}</th><th>${e("tt_day_heat")}</th><th>${e("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${i.rooms.map(y=>v`<tr><th>${y.name}</th>${d(y)}</tr>
                        ${a?v`<tr class="before"><th>${e("tt_day_before")}</th>${d(a.rooms.find(M=>M.roomId===y.roomId))}</tr>`:x}`)}
                  </tbody>
                </table>`:x}
            ${f?v`<div class="energy">
                  ${[["tt_day_pv",w(f.pv),w(b?.pv)],["tt_day_use",w(f.use),w(b?.use)],["tt_day_import",w(f.imp),w(b?.imp)],["tt_day_export",w(f.exp),w(b?.exp)],["tt_day_self",g(f.self),g(b?.self)]].map(([y,M,R])=>v`<span>${e(y)}</span><b>${M}</b>${a?v`<em>${R}</em>`:x}`)}
                </div>`:x}`:v`<p class="none">${e("tt_day_none")}</p>`}`}renderSheet(){let e=this.session.t,n=this._sheet,r=["events","away","day"];return v`<aside class="sheet" role="dialog" aria-label=${e("tt_sheet")}>
      <header>
        ${r.map(i=>v`<button class="tab" aria-pressed=${n===i} title=${i==="away"?e("tt_away_title"):x} @click=${()=>this._sheet=i}>${e(i==="events"?"tt_tab_events":i==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${e("tt_close")} aria-label=${e("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let t=this.session;if(!t)return x;let e=t.t,n=t.playback,r=t.state==="ready"&&!!n,i=t.state==="error"?t.error==="no_recorder"?e("tt_no_recorder"):t.error==="unknown_command"?e("tt_restart"):e("tt_error",{error:t.error??"?"}):null,s=n?3600/n.speed:10,a=Math.round((t.end-t.start)/6e4);return v`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${e("tt_badge")}</span>
        ${r?v`<b class="clock-time"></b><span class="clock-ago"></span>`:v`<span class="clock-msg">${i??`${e("tt_loading")} ${Math.round(t.progress*100)} %`}</span>`}
      </div>
      ${this._toast?v`<div class="toast" role="alert">${e("tt_readonly")}</div>`:x}
      ${r&&this._sheet?this.renderSheet():x}
      <div class="bar">
        <button class="btn prev" ?disabled=${!r} title=${e("tt_prev")} aria-label=${e("tt_prev")} @click=${()=>t.step(-1)}>${wt(it.prev)}</button>
        <button class="btn play" ?disabled=${!r} title=${e(n?.playing?"tt_pause":"tt_play")} aria-label=${e(n?.playing?"tt_pause":"tt_play")} @click=${()=>t.toggle()}>
          ${wt(n?.playing?it.pause:it.play)}
        </button>
        <button class="btn next" ?disabled=${!r} title=${e("tt_next")} aria-label=${e("tt_next")} @click=${()=>t.step(1)}>${wt(it.next)}</button>
        <div
          class="track ${r?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${e("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${a}
          aria-valuenow=${n?Math.round((n.t-t.start)/6e4):a}
          @pointerdown=${l=>this.onDown(l)}
          @pointermove=${l=>this.onMove(l)}
          @pointerup=${l=>this.onUp(l)}
          @pointercancel=${l=>this.onUp(l)}
        >
          ${r?this.renderTrack():i?v`<em class="msg">${i}</em>`:v`<i class="progress" style="width:${Math.round(t.progress*100)}%"></i>`}
        </div>
        ${i?v`<button class="chip" @click=${()=>{t.load()}}>${e("tt_retry")}</button>`:x}
        <button class="chip range" ?disabled=${!r} title=${e("tt_range_hint")} aria-label=${e("tt_range_hint")} @click=${()=>t.setRange(t.range==="7d"?"24h":"7d")}>
          ${t.range==="7d"?e("tt_days",{n:t.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!r} aria-pressed=${!!this._sheet} title=${e("tt_sheet")} aria-label=${e("tt_sheet")} @click=${()=>this.toggleSheet()}>${wt(it.list)}</button>
        <button class="chip speed" ?disabled=${!r} title=${e("tt_speed",{s:s>=60?"1 min":s>=1?`${Math.round(s)} s`:`${s.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>t.nextSpeed()}>
          ${n?.speed??360}×
        </button>
        <button class="chip live ${t.atNow?"live-now":""}" title=${e("tt_live_hint")} @click=${()=>t.exit()}>
          <i></i>${t.atNow?`${e("tt_now_reached")} \xB7 ${e("tt_live")}`:e("tt_live")}
        </button>
      </div>`}static styles=Tt`
    :host {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
      container-type: size;
      container-name: fp3dtt;
      font-family: var(--fp3d-font, system-ui, sans-serif);
      color: var(--fp3d-text, #e6eefc);
      --tt: #ffb020;
    }
    .frame {
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 3px var(--tt);
      border-radius: inherit;
    }
    .clock {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      justify-items: center;
      gap: 1px;
      padding: 6px 16px 7px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      white-space: nowrap;
      max-width: calc(100% - 260px);
    }
    .badge {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--tt);
    }
    .clock-time {
      font-family: var(--fp3d-title-font, inherit);
      font-size: 24px;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }
    .clock-ago,
    .clock-msg {
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: normal;
      text-align: center;
    }
    .toast,
    .label {
      position: absolute;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      z-index: 3;
      padding: 7px 12px;
      border-radius: 10px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      font-size: 13px;
    }
    .toast {
      left: 50%;
      transform: translateX(-50%);
      color: var(--tt);
      font-weight: 600;
    }
    .label {
      /* above its marker on the track, kept within the track */
      bottom: calc(100% + 12px);
      left: clamp(0px, calc(var(--x) - 120px), calc(100% - 240px));
      width: 240px;
      box-sizing: border-box;
      display: grid;
      gap: 3px;
      pointer-events: none;
    }
    .bar {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 8px;
      height: calc(var(--fp3d-tt-h, 64px) - 16px);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      touch-action: none;
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .btn {
      flex: none;
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 10px;
      background: transparent;
    }
    .btn:hover:not(:disabled),
    .sheet-btn[aria-pressed="true"] {
      background: rgba(255, 255, 255, 0.07);
    }
    .sheet-btn[aria-pressed="true"] {
      color: var(--tt);
    }
    .play {
      background: var(--tt);
      color: #1a1200;
    }
    .play:hover:not(:disabled) {
      background: var(--tt);
      filter: brightness(1.1);
    }
    .chip {
      flex: none;
      height: 32px;
      padding: 0 11px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 13px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .live {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-color: var(--fp3d-accent, #37e0ff);
    }
    .live i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ff3b4f;
    }
    .live-now {
      background: var(--fp3d-accent, #37e0ff);
      color: #04121c;
    }
    .track {
      position: relative;
      flex: 1;
      min-width: 0;
      height: 34px;
      margin: 0 4px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      outline-offset: 2px;
    }
    .track-wait {
      cursor: default;
      overflow: hidden;
    }
    .track i {
      position: absolute;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
    .track i span {
      position: absolute;
      left: 4px;
      bottom: 2px;
      font-size: 10px;
      font-style: normal;
      white-space: nowrap;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .night {
      background: rgba(40, 60, 140, 0.35);
    }
    .nodata {
      background: rgba(140, 150, 170, 0.28);
    }
    .loading {
      background: repeating-linear-gradient(135deg, rgba(255, 176, 32, 0.22) 0 6px, transparent 6px 12px);
    }
    .loading span {
      color: var(--tt) !important;
    }
    .gap {
      background: repeating-linear-gradient(135deg, rgba(160, 170, 190, 0.32) 0 4px, transparent 4px 8px);
    }
    .progress {
      left: 0;
      background: rgba(255, 176, 32, 0.4);
      transition: width 0.2s;
    }
    .msg {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 12px;
      font-style: normal;
      color: var(--fp3d-muted, #8a9bb8);
      overflow: hidden;
    }
    .tick {
      position: absolute;
      top: 0;
      width: 1px;
      height: 5px;
      background: rgba(200, 215, 240, 0.28);
      pointer-events: none;
    }
    .tick-major {
      height: 9px;
      background: rgba(200, 215, 240, 0.5);
    }
    .tick-day {
      height: 100%;
      background: rgba(255, 176, 32, 0.45);
    }
    .tick span {
      position: absolute;
      left: 3px;
      top: 22px;
      font-size: 10px;
      line-height: 11px;
      font-weight: 500;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: nowrap;
    }
    .tick-day span {
      color: var(--tt);
      font-weight: 700;
    }
    .mark {
      position: absolute;
      top: 6px;
      width: 14px;
      height: 14px;
      margin-left: -7px;
      padding: 0;
      border-radius: 50%;
      border: 2px solid var(--fp3d-chrome-solid, #0f1729);
      background: var(--c);
      box-shadow: 0 0 0 1px var(--c);
      z-index: 1;
    }
    .mark-many {
      width: 18px;
      height: 18px;
      margin-left: -9px;
      top: 4px;
    }
    .mark span {
      display: block;
      font-size: 9px;
      font-weight: 800;
      line-height: 14px;
      color: #0a0f1c;
    }
    .head {
      position: absolute;
      left: -1px;
      top: -5px;
      bottom: -5px;
      width: 3px;
      border-radius: 2px;
      background: var(--tt);
      box-shadow: 0 0 6px var(--tt);
      pointer-events: none;
      z-index: 2;
      will-change: transform;
    }
    .head::after {
      content: "";
      position: absolute;
      left: -5px;
      bottom: -6px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: var(--tt);
    }
    .sheet {
      position: absolute;
      top: 78px;
      right: 8px;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      width: min(380px, calc(100% - 16px));
      box-sizing: border-box;
      display: grid;
      grid-template-rows: auto 1fr;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      z-index: 2;
      font-size: 13px;
      overflow: hidden;
    }
    .sheet header {
      display: flex;
      gap: 4px;
      padding: 8px 8px 6px;
      border-bottom: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .tab {
      flex: 1 1 auto;
      min-width: 0;
      padding: 6px 8px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tab[aria-pressed="true"] {
      background: rgba(255, 176, 32, 0.18);
      color: var(--tt);
    }
    .x {
      flex: none;
      width: 30px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 18px;
    }
    .body {
      overflow-y: auto;
      padding: 8px 10px 12px;
      overscroll-behavior: contain;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 6px;
    }
    .fchip {
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 12px;
    }
    .fchip[aria-pressed="true"] {
      border-color: var(--tt);
      background: rgba(255, 176, 32, 0.14);
    }
    .when {
      font: inherit;
      font-size: 12px;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      border-radius: 999px;
      padding: 3px 8px;
      color-scheme: dark;
    }
    .opt {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      margin: 2px 0;
    }
    .since {
      margin: 0 0 4px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .sheet h4 {
      margin: 10px 0 4px;
      font-size: 12px;
      font-weight: 700;
      color: var(--tt);
    }
    .row {
      display: grid;
      grid-template-columns: 10px 44px 1fr;
      align-items: start;
      gap: 6px;
      width: 100%;
      padding: 5px 4px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      text-align: left;
      font-size: 13px;
    }
    .row:hover {
      background: rgba(255, 255, 255, 0.06);
    }
    .row i {
      width: 8px;
      height: 8px;
      margin-top: 5px;
      border-radius: 50%;
    }
    .row time {
      font-variant-numeric: tabular-nums;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .row small {
      display: block;
      font-size: 11px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .none {
      color: var(--fp3d-muted, #8a9bb8);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      font-variant-numeric: tabular-nums;
    }
    th,
    td {
      padding: 4px 3px;
      text-align: right;
      white-space: nowrap;
    }
    th:first-child {
      text-align: left;
      max-width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    thead th {
      font-weight: 600;
      color: var(--fp3d-muted, #8a9bb8);
    }
    tbody tr:not(.before) {
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .before {
      color: var(--fp3d-muted, #8a9bb8);
      font-size: 11px;
    }
    .before th {
      font-weight: 400;
      padding-left: 10px;
    }
    .energy {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 4px 12px;
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      font-variant-numeric: tabular-nums;
    }
    .energy b {
      text-align: right;
    }
    .energy em {
      font-style: normal;
      text-align: right;
      color: var(--fp3d-muted, #8a9bb8);
    }
    /* phones and narrow cards: the track on a row of its own above the buttons */
    @container fp3dtt ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
      .bar {
        flex-wrap: wrap;
        align-content: center;
        row-gap: 6px;
        padding: 6px 8px;
      }
      .track {
        order: -1;
        flex: 1 0 100%;
        margin: 14px 0 0;
      }
      .live {
        margin-left: auto;
      }
      .chip {
        padding: 0 9px;
      }
      .clock {
        top: 8px;
        padding: 4px 12px 5px;
        max-width: calc(100% - 120px);
      }
      .clock-time {
        font-size: 19px;
      }
      .sheet {
        top: 64px;
      }
    }
    @media (pointer: coarse) {
      .btn,
      .x {
        min-width: 44px;
        min-height: 44px;
      }
      .chip,
      .track {
        min-height: 44px;
      }
    }
  `};xe("fp3d-time-bar",Zt);var Ro=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:Ki,pending:Gi}=Ro;var $o=new Map;function Xt(o,t){return $o.get(t)??Ao(o,t)}function Ao(o,t){let e=o.entities?.[t]?.device_id;return e?Object.values(o.entities??{}).filter(n=>n.device_id===e&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}var To=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),Po=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),zo=600,Jt=o=>o.slice(0,o.indexOf("."));function Fo(o,t){let e=o.states[t];return!t.startsWith("sensor.")||!e||e.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(e.state))||e.state==="unavailable"||e.state==="unknown"}var mn=new Set(["geocoded_location","location"]),Oo=/location|address|geocoded|ssid|bssid|standort|adresse/i;function Io(o,t){let e=o.states[t]?.attributes??{},n=o.entities?.[t]?.translation_key??"";return mn.has(String(e.device_class??""))||mn.has(n)||"latitude"in e||"longitude"in e?!0:Oo.test(`${t} ${String(e.friendly_name??"")} ${n}`)}function bn(o){let t=new Set;for(let e of Object.values(o.states))if(e.entity_id.startsWith("person.")&&Array.isArray(e.attributes.device_trackers))for(let n of e.attributes.device_trackers)typeof n=="string"&&t.add(n);return t}function No(o,t=bn(o)){let e=new Set;for(let n of t){let r=o.entities?.[n]?.device_id;r&&e.add(r)}return e}function te(o,t,e,n=zo){let r=new Set(t.presence.flatMap(g=>[g.person,g.sensor]).filter(g=>!!g)),i=bn(o);for(let g of i)r.add(g);let s=No(o,i),a=new Set((e.cars??[]).filter(g=>g.startsWith("device_tracker.")&&!r.has(g)&&!!o.states[g])),l=new Set(t.floors.flatMap(g=>g.rooms.map(_=>_.area_id)).filter(g=>!!g)),u=[];for(let[g,_]of Object.entries(o.entities??{})){if(!_.area_id&&_.device_id){let y=o.devices?.[_.device_id];if(!y?.area_id||!l.has(y.area_id))continue}else if(!_.area_id||!l.has(_.area_id))continue;_.hidden||_.entity_category||!Po.has(Jt(g))||u.push(g)}let c=Object.keys(o.states).filter(g=>g.startsWith("weather.")),m=t.floors.flatMap(g=>g.placements.filter(_=>_.entity_id.startsWith("camera.")).flatMap(_=>Xt(o,_.entity_id))),d=[...new Set([...a,...e.entities,...m,"sun.sun",...t.settings.weather_entity?[t.settings.weather_entity]:[],...t.settings.outage_entity?[t.settings.outage_entity]:[],...c.slice(0,1),...u])],p=[],h=d.filter(g=>{if(!g.includes(".")||!a.has(g)&&To.has(Jt(g))||r.has(g)||!o.states[g])return!1;if(a.has(g))return!0;let _=o.entities?.[g]?.device_id;return _&&s.has(_)||Io(o,g)?(p.push(g),!1):!0}),f=h.slice(0,n),b=f.filter(g=>Fo(o,g)),w=new Set(b);return{entities:f.filter(g=>!w.has(g)),stats:b,overflow:h.slice(n),cars:f.filter(g=>a.has(g)),hidden:p}}var hn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},Vo=new Set(["front","front_glass","sidelight","sidelights"]),Co=new Set(["washer","dryer","dishwasher"]);function gn(o,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[i,s]=t[n],[a,l]=t[r];s>o[1]!=l>o[1]&&o[0]<(a-i)*(o[1]-s)/(l-s)+i&&(e=!e)}return e}function Ho(o,t){if(t.type!=="door"||t.wall)return!1;if(t.style&&Vo.has(t.style))return!0;if(t.style)return!1;let e=o.rooms.find(m=>m.id===t.room_id);if(!e||e.points.length<3)return!1;let n=e.points[t.edge],r=e.points[(t.edge+1)%e.points.length];if(!n||!r)return!1;let i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(i<1e-6)return!1;let s=(r[0]-n[0])/i,a=(r[1]-n[1])/i,l=[n[0]+s*t.offset,n[1]+a*t.offset],u=m=>[l[0]-a*m,l[1]+s*m],c=gn(u(.3),e.points)?u(-.4):u(.4);return!o.rooms.some(m=>m.id!==e.id&&m.points.length>=3&&gn(c,m.points))}function ee(o,t,e){let n=new Map,r=new Map(e.furniture);for(let i of t.floors)for(let s of i.furniture){if(!Co.has(s.type))continue;let a=r.get(s.id)?.power,l=i.placements.find(c=>o.states[c.entity_id]?.attributes.device_class==="power"&&Math.hypot(c.x-s.x,c.z-s.z)<=1.2)?.entity_id,u=a??l;u&&!n.has(u)&&n.set(u,s)}return n}function yn(o,t,e,n){let r=new Map,i=(a,l)=>{a&&n.has(a)&&!r.has(a)&&r.set(a,l)},s=new Map(e.openings);for(let a of t.floors)for(let l of a.openings){let u=s.get(l.id);if(u)if(l.type==="garage")for(let c of[u.contact,u.cover])i(c,"garage");else if(l.type==="door"){if(Ho(a,l))for(let c of[u.contact,u.contact2])i(c,"door")}else[u.contact,u.tilt,u.contact2,u.tilt2].filter(m=>!!m&&n.has(m)).forEach((m,d)=>i(m,d?"window_more":"window"))}for(let a of ee(o,t,e).keys())i(a,"washer");for(let a of t.floors)for(let l of a.placements)if(l.entity_id.startsWith("camera."))for(let u of Xt(o,l.entity_id))i(u,"camera");for(let a of n){if(r.has(a))continue;let l=Jt(a),u=String(o.states[a]?.attributes.device_class??"");l==="lock"?i(a,"lock"):l==="alarm_control_panel"?i(a,"alarm"):l==="vacuum"?i(a,"robot"):l==="weather"?i(a,"weather"):l==="cover"&&(u==="garage"||u==="gate")?i(a,"garage"):l==="binary_sensor"&&(hn[u]?i(a,hn[u]):u==="garage_door"?i(a,"garage"):u==="motion"&&i(a,"motion"))}return r}var Do={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function Lo(o,t){if(o==="rgb_color")return Array.isArray(t)&&t.every(e=>typeof e=="number")?t.map(e=>Math.round(e)):null;if(typeof t!="number"||!Number.isFinite(t))return t;switch(o){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(t/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(t/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(t);case"volume_level":return Math.round(Math.round(t*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(t*10)/10;default:return t}}function Wo(o){return o==="home"||o==="unavailable"||o==="unknown"?o:"not_home"}function ne(o){let t=o.entity_id.slice(0,o.entity_id.indexOf("."));if(t==="device_tracker")return{s:Wo(o.state),a:null};let e=Do[t];if(!e?.length)return{s:o.state,a:null};let n={};for(let r of e){let i=o.attributes[r];if(i==null)continue;let s=Lo(r,i);s!=null&&(n[r]=s)}return{s:o.state,a:Object.keys(n).length?n:null}}var oe=3e5,_n=2e4,Bo=[6e4,oe,15*6e4,36e5],Uo=(o,t)=>o.startsWith("sensor.")&&t.state!==""&&Number.isFinite(Number(t.state));function Ko(o,t){let e=[];for(let n of o){let r=e[e.length-1];r&&Math.floor(r.t/t)===Math.floor(n.t/t)?e[e.length-1]=n:e.push(n);let i=e[e.length-2];i&&i.k===e[e.length-1].k&&e.pop()}return e}var kt=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(t,e,n=Date.now()){this.ids=t,this.startStates=e,this.startedAt=n;for(let r of t)this.seen.set(r,e[r]),e[r]&&this.lastKey.set(r,O(ne(e[r])))}get pending(){return this.count}record(t,e){for(let n of this.ids){let r=t[n];if(r===this.seen.get(n)||(this.seen.set(n,r),!r))continue;let i=ne(r),s=O(i);if(this.lastKey.get(n)===s)continue;let a=this.rows.get(n),l=a?.[a.length-1],u=Date.parse(r.last_updated??r.last_changed??""),c=Math.max(Number.isFinite(u)?Math.min(e,u):e,l?.t??-1/0);if(l&&Uo(n,r)&&Math.floor(l.t/oe)===Math.floor(c/oe)){a[a.length-1]={t:c,v:i,k:s},this.lastKey.set(n,s);continue}this.lastKey.set(n,s),a?a.push({t:c,v:i,k:s}):this.rows.set(n,[{t:c,v:i,k:s}]),this.count++}this.count>_n&&this.compact()}compact(){for(let t of Bo){let e=0;for(let[n,r]of this.rows){let i=Ko(r,t);this.rows.set(n,i),e+=i.length}if(this.count=e,e<=_n/2)return}}flush(t,e){let n=0,r=0;for(let i of this.ids){if(this.seeded.has(i)||t.tracks.has(i)||t.series.has(i))continue;this.seeded.add(i);let s=this.startStates[i],a=[...s?[{t:this.startedAt,v:ne(s)}]:[],...this.rows.get(i)??[]],l=Je(i,a);this.rows.delete(i),l&&(t.tracks.set(i,l),t.missing.delete(i),r++,n+=l.times.length)}for(let[i,s]of this.rows){let a=t.tracks.get(i);if(a){n+=Ut(a,s);continue}let l=t.series.get(i);l&&(n+=Xe(l,s.map(u=>({t:u.t,value:Number(u.v.s)}))))}return this.rows=new Map,this.count=0,t.end=Math.max(t.end,e),{added:n,created:r}}};function xn(o,t,e){if(!(t.state==="opening"||t.state==="closing")||t.pos===null||!e||e.pos===null)return t.pos;let r=e.t-t.t;return!(r>0)||r>18e4||o<=t.t?t.pos:o>=e.t?e.pos:Math.round(t.pos+(e.pos-t.pos)*(o-t.t)/r)}var k=Math.PI/180;function Mt(o,t,e){let n=(e/864e5+24405875e-1-2451545)/36525,r=(280.46646+n*(36000.76983+n*3032e-7))%360,i=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(i*k)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*i*k)*(.019993-101e-6*n)+Math.sin(3*i*k)*289e-6,l=125.04-1934.136*n,u=r+a-.00569-.00478*Math.sin(l*k),m=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*k),d=Math.asin(Math.sin(m*k)*Math.sin(u*k)),p=Math.tan(m/2*k)**2,h=4/k*(p*Math.sin(2*r*k)-2*s*Math.sin(i*k)+4*s*p*Math.sin(i*k)*Math.cos(2*r*k)-.5*p*p*Math.sin(4*r*k)-1.25*s*s*Math.sin(2*i*k)),b=(((e/6e4%1440+1440)%1440+h+4*t)%1440+1440)%1440,w=(b/4<0?b/4+180:b/4-180)*k,g=o*k,_=Math.min(1,Math.max(-1,Math.sin(g)*Math.sin(d)+Math.cos(g)*Math.cos(d)*Math.cos(w))),y=Math.acos(_),M=90-y/k;M+=Go(M);let R=Math.cos(g)*Math.sin(y),q=180;if(Math.abs(R)>1e-9){let pe=Math.acos(Math.min(1,Math.max(-1,(Math.sin(g)*Math.cos(y)-Math.sin(d))/R)))/k;q=w>0?(pe+180)%360:(540-pe)%360}return{elevation:M,azimuth:q}}function Go(o){if(o>85)return 0;let t=Math.tan(o*k);return(o>5?58.1/t-.07/t**3+86e-6/t**5:o>-.575?1735+o*(-518.2+o*(103.4+o*(-12.79+o*.711))):-20.772/t)/3600}function re(o,t,e){return Mt(o,t,e).elevation<-.833}function vn(o,t,e,n,r=5*6e4){let i=[],s=null;for(let a=e;a<=n;a+=r){let l=re(o,t,a);l&&s===null&&(s=a),!l&&s!==null&&(i.push([s,a]),s=null)}return s!==null&&i.push([s,n]),i}var ae=class extends Error{constructor(t){super(`Time travel is read-only: ${t}`),this.name="ReplayReadOnly"}},jo=new Set(["home_3d/building/get","home_3d/image/get","home_3d/packs/list","home_3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),qo=new Set(["home_3d/building/subscribe"]),ie={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},wn=["person.","device_tracker."],se=o=>o.slice(0,o.indexOf("."));function St(o,t){if(!t?.some(n=>n in o))return o;let e={...o};for(let n of t)delete e[n];return e}function st(o){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:o}})),new ae(o)}function Qo(o,t){let e=o,n={...o,states:t};n.callService=(r,i)=>st(`${r}.${i}`),n.callWS=r=>jo.has(String(r.type))?o.callWS(r):st(String(r.type)),n.connection={subscribeMessage:(r,i)=>qo.has(String(i.type))?o.connection.subscribeMessage(r,i):st(String(i.type))};for(let r of["callApi","callApiRaw"]){let i=e[r];typeof i=="function"&&(n[r]=(s,...a)=>String(s).toUpperCase()==="GET"?i.call(o,s,...a):st(`${s} ${String(a[0])}`))}for(let r of["sendWS","fetchWithAuth"])r in e&&(n[r]=()=>st(r));return n}var Yo=new Set(["light","switch","input_boolean","binary_sensor","fan"]),Rt=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(t,e){this.timeline=t,this.cursor=new U(t),this.cursor.tracks.forEach((r,i)=>this.trackAt.set(r.id,i)),this.location=e.location??null,this.frozen=e.states??null;let n=new Set([...e.allowed??[]].filter(r=>r.startsWith("device_tracker.")));this.requested=[...new Set([...e.requested,...t.tracks.keys(),...t.series.keys()])].filter(r=>n.has(r)||!wn.some(i=>r.startsWith(i)))}refresh(){let t=this.cursor.t;this.cursor=new U(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((e,n)=>this.trackAt.set(e.id,n)),Number.isFinite(t)&&this.cursor.at(t)}hassAt(t,e,n=!0){let r=this.frozen??=t.states,i=!1;if(!this.base){this.base={};for(let[l,u]of Object.entries(r))wn.some(c=>l.startsWith(c))||(this.base[l]=l.startsWith("camera.")&&u.attributes.entity_picture?{...u,attributes:St(u.attributes,["entity_picture","access_token"])}:u);i=!0}this.sameContext(t)||(this.live=t,i=!0);let s=!n&&e>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(e),this.pulses=s?this.findPulses(s):[];let a=[];for(let l of this.requested){let u=this.slots.get(l),c=this.slot(l,e,r[l],u);c!==u&&(this.slots.set(l,c),a.push(l))}if(!i&&!a.length&&this.hass)return this.hass;if(i){this.states={...this.base};for(let l of this.requested){let u=this.slots.get(l);u&&(this.states[l]=u.obj)}}else{this.states={...this.states};for(let l of a)this.states[l]=this.slots.get(l).obj}return this.hass=Qo(this.live,this.states),this.hass}findPulses(t){let e=[],n=this.cursor.idx;for(let r=0;r<n.length;r++){let i=t[r],s=n[r];if(i<0||s-i<2)continue;let a=this.cursor.tracks[r];if(!Yo.has(se(a.id)))continue;let l=a.values[a.vals[i]].s;if(a.values[a.vals[s]].s===l){for(let u=i+1;u<s;u++)if(a.values[a.vals[u]].s!==l){e.push(a.id);break}}}return e}sameContext(t){let e=this.live;if(!e)return!1;if(e===t)return!0;let n=t;for(let r in n)if(r!=="states"&&n[r]!==e[r])return!1;for(let r in e)if(!(r in n))return!1;return!0}slot(t,e,n,r){let i=this.trackAt.get(t),s=this.timeline.series.get(t),a,l;if(t==="sun.sun"&&this.location){let u=Mt(this.location.lat,this.location.lon,e),c=Math.round(u.elevation*2)/2,m=Math.round(u.azimuth*2)/2,d=Mt(this.location.lat,this.location.lon,e+6e5).elevation>u.elevation;a=`${c}|${m}|${d}`,l=()=>({entity_id:t,state:u.elevation>-.833?"above_horizon":"below_horizon",attributes:{...St(n?.attributes??{},ie.sun),elevation:c,azimuth:m,rising:d}})}else if(i!==void 0&&this.cursor.idx[i]>=0){let u=this.cursor.tracks[i],c=this.cursor.idx[i],m=u.values[u.vals[c]],d=t.startsWith("cover.")?this.coverPos(u,c,e):null;a=d===null?`${c}`:`${c}:${d}`,l=()=>{let p={...St(n?.attributes??{},ie[se(t)]),...m.a??{}};d!==null&&(p.current_position=d),t==="sun.sun"&&p.elevation===void 0&&Object.assign(p,{elevation:m.s==="above_horizon"?25:-12,azimuth:180});let h=u.since[c];return h>this.timeline.start?{entity_id:t,state:m.s,attributes:p,last_changed:new Date(h).toISOString()}:{entity_id:t,state:m.s,attributes:p}}}else if(s){let u=H(s,e),c=this.stepOf(t,s,n),m=Be(u,c);a=`n${m}`,l=()=>({entity_id:t,state:m,attributes:n?.attributes??{},last_changed:new Date(e).toISOString()})}else a="none",l=()=>({entity_id:t,state:"unknown",attributes:St(n?.attributes??{},ie[se(t)])});return r&&r.key===a&&r.attrs===n?.attributes?r:{key:a,attrs:n?.attributes,obj:l()}}coverPos(t,e,n){let r=t.values[t.vals[e]];if(r.s!=="opening"&&r.s!=="closing")return null;let i=a=>typeof a.a?.current_position=="number"?a.a.current_position:null,s=e+1<t.times.length?{t:t.times[e+1],pos:i(t.values[t.vals[e+1]])}:null;return xn(n,{t:t.times[e],state:r.s,pos:i(r)},s)}stepOf(t,e,n){let r=this.steps.get(t);if(r===void 0){let i=e.mean.find(s=>!Number.isNaN(s))??0;r=We(n?.attributes.unit_of_measurement,this.live?.entities?.[t]?.display_precision,i),this.steps.set(t,r)}return r}rows(t,e,n){let r={};for(let i of t){let s=this.timeline.tracks.get(i);if(!s)continue;let a=[];for(let l=Math.max(0,S(s.times,e));l<s.times.length&&s.times[l]<=n;l++)a.push({s:s.values[s.vals[l]].s,lu:s.times[l]/1e3});a.length&&(r[i]=a)}return r}};var kn=new Set(["cleaning","paused","returning"]),Zo=new Set(["","unknown","unavailable","none","null"]);function Mn(o,t,e){if(!o)return[];let n=u=>o.values[o.vals[u]].s,r=S(o.times,e);if(r<0||!kn.has(n(r)))return[];let i=r;for(;i>0&&kn.has(n(i-1));)i--;let s=o.times[i],a=[],l=u=>{let c=typeof u=="string"?u.trim():"";!Zo.has(c.toLowerCase())&&a[a.length-1]!==c&&a.push(c)};if(t){let u=Math.max(0,S(t.times,s));for(t.times[u]<s-6e4&&u++;u<t.times.length&&t.times[u]<=e;u++)l(t.values[t.vals[u]].s)}else for(let u=i;u<=r;u++)l(o.values[o.vals[u]].a?.current_room);return a}var le=o=>o.slice(0,o.indexOf("."));function Xo(o,t){let e=o.entities?.[t];return e?e.area_id??(e.device_id?o.devices?.[e.device_id]?.area_id??null:null):null}function Sn(o,t,e){let n=[],r=new Map;for(let a of Object.keys(o.entities??{})){let l=Xo(o,a);l&&r.set(l,[...r.get(l)??[],a])}let i=new Map(e.openings),s=new Map(e.furniture);for(let a of t.floors)for(let l of a.rooms){if(l.points.length<3)continue;let u=new Set(l.area_id?r.get(l.area_id)??[]:[]);for(let p of a.placements)E([p.x,p.z],l.points)&&u.add(p.entity_id);for(let p of a.furniture){let h=s.get(p.id);h?.entity&&E([p.x,p.z],l.points)&&u.add(h.entity)}let c=[];for(let p of a.openings){if(p.room_id!==l.id)continue;let h=i.get(p.id),f=h?[h.contact,h.tilt,h.contact2,h.tilt2].filter(b=>!!b):[];for(let b of f)u.add(b);f.length&&p.type!=="door"&&p.type!=="garage"&&c.push(f)}let m=[...u].filter(p=>!!o.states[p]),d=p=>o.states[p]?.attributes.device_class;n.push({floorId:a.id,roomId:l.id,name:l.name,lights:m.filter(p=>le(p)==="light"),windows:c,climates:m.filter(p=>le(p)==="climate"),temps:m.filter(p=>le(p)==="sensor"&&d(p)==="temperature"),all:m})}return n}function Rn(o){let t=new Map;for(let e of o)for(let n of e.all)t.has(n)||t.set(n,e);return t}var ue=36e5;function at(o,t,e){let n=o.map(([i,s])=>[Math.max(i,t),Math.min(s,e)]).filter(([i,s])=>s>i);n.sort((i,s)=>i[0]-s[0]);let r=[];for(let i of n){let s=r[r.length-1];s&&i[0]<=s[1]?s[1]=Math.max(s[1],i[1]):r.push([i[0],i[1]])}return r}var Et=o=>o.reduce((t,[e,n])=>t+(n-e),0);function Jo(o,t,e){let n=[],r=null;for(let i=0;i<o.times.length;i++){let s=t(o.values[o.vals[i]]);s&&r===null&&(r=o.times[i]),!s&&r!==null&&(n.push([r,o.times[i]]),r=null)}return r!==null&&e>r&&n.push([r,e]),n}function $n(o,t,e,n,r=2*ue){let i=at(t.flatMap(l=>{let u=o.tracks.get(l);return u?G(u,L,o.end):[]}),e,n);if(!t.some(l=>o.tracks.has(l)))return[];let s=[],a=e;for(let[l,u]of i)l-a>=r&&s.push([a,l]),a=Math.max(a,u);return n-a>=r&&s.push([a,n]),s}function An(o){for(let t=o.length-1;t>=0;t--){let[e,n]=o[t],r=0;for(let i=e;i<n;i+=6e5){let s=K(i);s>=7&&s<22&&(r+=Math.min(6e5,n-i))}if(r>=ue)return[e,n]}return null}var En=["alarm","door","window","window_open","light_on","motion","appliance"];function Tn(o){let{timeline:t,roles:e,events:n,from:r,to:i}=o,s=[],a=new Map,l=(c,m,d)=>{let p=`${c}:${m}`,h=a.get(p);if(h)h.count++,h.t=Math.min(h.t,d);else{let f={kind:c,entity:m,t:d,count:1,ms:0};a.set(p,f),s.push(f)}};for(let c of n)c.t<r||c.t>i||(yt.has(c.kind)||c.kind==="rain"?s.push({kind:"alarm",entity:c.entity,t:c.t,count:1,ms:0,event:c.kind}):c.kind==="door"||c.kind==="garage"||c.kind==="lock"?l("door",c.entity,c.t):c.kind==="window"?l("window",c.entity,c.t):(c.kind==="washer"||c.kind==="robot_done")&&s.push({kind:"appliance",entity:c.entity,t:c.t,count:1,ms:0,event:c.kind}));for(let c of o.motion){let m=t.tracks.get(c);if(m){for(let d of rt(m))d.from!==null&&d.t>=r&&d.t<=i&&d.to==="on"&&d.from!=="on"&&!ot.has(d.from)&&l("motion",c,d.t);if(m.dropped)for(let d of m.dropped)d>=r&&d<=i&&l("motion",c,d)}}let u=(c,m,d,p)=>{let h=at(d,r,i),f=Et(h);(f>=p||h.length&&h[h.length-1][1]>=i&&f>=6e4)&&s.push({kind:c,entity:m,t:h[0][0],count:h.length,ms:f})};for(let c of o.lights){let m=t.tracks.get(c);m&&u("light_on",c,G(m,tr,t.end),15*6e4)}for(let[c,m]of e){if(m!=="window"&&m!=="window_more")continue;let d=t.tracks.get(c);d&&u("window_open",c,G(d,L,t.end),30*6e4)}return s.sort((c,m)=>En.indexOf(c.kind)-En.indexOf(m.kind)||(c.kind==="light_on"||c.kind==="window_open"?m.ms-c.ms:c.t-m.t))}var tr=new Set(["on"]);function er(o,t,e,n){let r=1/0,i=-1/0,s=o.series.get(t);if(s)for(let a=0;a<s.mean.length;a++){let l=s.start+(a+.5)*s.step,u=s.mean[a];l<e||l>n||Number.isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u))}else{let a=o.tracks.get(t);if(a)for(let l=Math.max(0,S(a.times,e));l<a.times.length&&a.times[l]<=n;l++){let u=Number(a.values[a.vals[l]].s);Number.isFinite(u)&&(r=Math.min(r,u),i=Math.max(i,u))}}return Number.isFinite(r)?[r,i]:null}function Pn(o,t,e,n,r=null){let i=Math.min(n,o.end),s=[],a=(l,u)=>l.flatMap(c=>{let m=o.tracks.get(c);return m?Jo(m,u,o.end):[]});for(let l of t){let u=Et(at(a(l.lights,h=>h.s==="on"),e,i)),c=Et(at(a(l.windows.flat(),h=>L.has(h.s)),e,i)),m=Et(at(a(l.climates,h=>h.a?.hvac_action==="heating"),e,i)),d=null,p=null;for(let h of l.temps){let f=er(o,h,e,i);f&&(d=d===null?f[0]:Math.min(d,f[0]),p=p===null?f[1]:Math.max(p,f[1]))}(u||c||m||d!==null)&&s.push({roomId:l.roomId,name:l.name,lightMs:u,windowMs:c,heatMs:m,tMin:d,tMax:p})}return{from:e,to:n,rooms:s,energy:r}}function nr(o,t,e){let n=o.series.get(t);if(n){let s=H(n,e);return Number.isFinite(s)?String(s):null}let r=o.tracks.get(t);if(!r)return null;let i=S(r.times,e);return i<0?null:r.values[r.vals[i]].s}function zn(o,t,e,n,r,i){let s={};for(let a of r){let l=nr(o,a,i);l!==null&&(s[a]={entity_id:a,state:l,attributes:t[a]?.attributes??{}})}return be({states:s},e,[],n)}function Fn(o,t){let e=o.energy;return[...new Set([e.grid,e.solar,e.battery,e.battery_soc,e.consumption,t.grid,t.gridExport,...t.solar,...t.battery,...t.charge,...t.soc].filter(n=>!!n))]}function On(o,t,e,n=3e5){let r=0,i=0,s=0,a=0,l=!1,u=n/ue/1e3;for(let c=t+n/2;c<e;c+=n){let m=o(c);m.solar===null&&m.grid===null&&m.consumption===null||(l=!0,r+=Math.max(0,m.solar??0)*u,i+=Math.max(0,m.grid??0)*u,s+=Math.max(0,-(m.grid??0))*u,a+=Math.max(0,m.consumption??0)*u)}return l?{pv:r,imp:i,exp:s,use:a,self:a>0?Math.min(1,Math.max(0,1-i/a)):null}:null}var or={tt_range_hint:"Zeitraum: 24 Stunden oder mehrere Tage",tt_days:"{n} T",tt_loading_day:"lade {day} \u2026",tt_recorder_days:"Recorder: {n} Tage",tt_memory_full:"Speichergrenze erreicht",tt_now_reached:"Gegenwart erreicht",tt_sheet:"Ereignisse, Zusammenfassungen",tt_tab_events:"Ereignisse",tt_tab_away:"Weg",tt_tab_day:"Tag",tt_close:"Schlie\xDFen",tt_f_safety:"Sicherheit",tt_f_openings:"T\xFCren & Fenster",tt_f_devices:"Ger\xE4te",tt_f_energy:"Energie",tt_follow:"Kamera folgt Ereignissen",tt_stop:"Bei wichtigen Ereignissen anhalten",tt_no_events:"Keine Ereignisse",tt_ev_window:"{name} ge\xF6ffnet",tt_ev_battery_full:"Speicher voll: {name}",tt_ev_pv_peak:"H\xF6chste PV-Leistung des Tages",tt_away_title:"W\xE4hrend du weg warst",tt_away_since:"Seit",tt_away_last:"seit der letzten Zeitreise",tt_away_quiet:"ruhig {from}\u2013{to}",tt_away_none:"Nichts passiert \u2013 alles ruhig.",tt_away_door:"{name}: {n}\xD7 ge\xF6ffnet",tt_away_motion:"Bewegung {name}: {n}\xD7",tt_away_light:"{name} brannte {d}",tt_away_open:"{name} stand {d} offen",tt_day_title:"Tages\xFCbersicht {day}",tt_day_light:"Licht",tt_day_window:"Fenster",tt_day_heat:"Heizen",tt_day_temp:"Temp.",tt_day_pv:"PV",tt_day_import:"Netzbezug",tt_day_export:"Einspeisung",tt_day_use:"Verbrauch",tt_day_self:"Autarkie",tt_day_compare:"Mit dem Vortag vergleichen",tt_day_before:"Vortag",tt_day_none:"F\xFCr diesen Tag gibt es noch keine Werte.",tt_day_partial:"unvollst\xE4ndig (ab {time})",tt_yesterday:"Gestern um diese Zeit"},In={tt_range_hint:"Range: 24 hours or several days",tt_days:"{n} d",tt_loading_day:"loading {day} \u2026",tt_recorder_days:"Recorder: {n} days",tt_memory_full:"Memory limit reached",tt_now_reached:"Present reached",tt_sheet:"Events, summaries",tt_tab_events:"Events",tt_tab_away:"Away",tt_tab_day:"Day",tt_close:"Close",tt_f_safety:"Safety",tt_f_openings:"Doors & windows",tt_f_devices:"Devices",tt_f_energy:"Energy",tt_follow:"Camera follows events",tt_stop:"Stop at important events",tt_no_events:"No events",tt_ev_window:"{name} opened",tt_ev_battery_full:"Battery full: {name}",tt_ev_pv_peak:"Highest solar power of the day",tt_away_title:"While you were away",tt_away_since:"Since",tt_away_last:"since the last time travel",tt_away_quiet:"quiet {from}\u2013{to}",tt_away_none:"Nothing happened \u2013 all quiet.",tt_away_door:"{name}: opened {n}\xD7",tt_away_motion:"Motion {name}: {n}\xD7",tt_away_light:"{name} was on for {d}",tt_away_open:"{name} stood open for {d}",tt_day_title:"Day summary {day}",tt_day_light:"Light",tt_day_window:"Window",tt_day_heat:"Heating",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Grid import",tt_day_export:"Export",tt_day_use:"Consumption",tt_day_self:"Self-sufficiency",tt_day_compare:"Compare with the day before",tt_day_before:"Day before",tt_day_none:"There are no values for this day yet.",tt_day_partial:"incomplete (from {time})",tt_yesterday:"Yesterday at this time"};function Nn(o,t){return(e,n={})=>{let r=o(e,n);if(r!==e)return r;let s=((t()??"").startsWith("de")?or:In)[e]??In[e]??e;for(let[a,l]of Object.entries(n))s=s.replace(`{${a}}`,String(l));return s}}var $=24*36e5,ce=150,de=250,rr=10*1024*1024,ir=6e4,sr=6e4,Vn=1e4;function j(o,t){try{return t!==void 0&&localStorage.setItem(`fp3d-tt-${o}`,t),localStorage.getItem(`fp3d-tt-${o}`)}catch{return null}}var fe=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=j("follow")==="1";stopImportant=j("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{document.hidden||!this.playback?.playing||(this.last=performance.now(),this.schedule())};constructor(t){this.opts=t,this.live=t.live,this.startStates=t.live.states,this.quality=t.quality,this.low=t.spec.low,this.t=Nn(t.t,()=>this.live.language),Gt(Kt(t.live)),this.end=Date.now(),this.range=t.range==="7d"?"7d":"24h";let e=Number(j("closed"));this.lastClosed=Number.isFinite(e)&&e>0&&e<this.end?e:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(r,i,s)=>n.replayer?.rows(r,i,s)??{},listen:r=>n.listen(r),stats:(r,i,s)=>n.timeline?en(n.timeline,r,i,s):{},robotRooms:(r,i)=>n.timeline?Mn(n.timeline.tracks.get(r),i?n.timeline.tracks.get(i):void 0,n.replay.t):[],setQuality:(r,i)=>n.setQuality(r,i)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t()}get playing(){return!!this.playback?.playing}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*$}get recorderStart(){let t=this.timeline?.keepDays;return typeof t=="number"&&t>0?this.end-t*$:null}get atNow(){let t=this.playback;return!!t&&!t.playing&&t.t>=t.end-1e3&&Date.now()-t.end<12e4}get location(){let t=this.live.config;return typeof t?.latitude=="number"&&typeof t?.longitude=="number"?{lat:t.latitude,lon:t.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(t,e,n){let r=te(this.live,this.opts.building,this.opts.spec),i=Math.max(1,Math.ceil(r.entities.length/ce),Math.ceil(r.stats.length/de)),s=[];for(let a=0;a<i;a++){let l=r.entities.slice(a*ce,(a+1)*ce),u=r.stats.slice(a*de,(a+1)*de),c={type:"home_3d/timetravel/history",start_time:t/1e3,end_time:e/1e3,entity_ids:l,statistic_ids:u},m=r.cars.filter(d=>l.includes(d));if(m.length&&(c.car_trackers=m),s.push(await this.live.callWS(c)),this.disposed)return null;n?.((a+1)/i)}return Ke(s)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:t,spec:e}=this.opts,n=this.live,r=te(n,t,e),i;try{i=await this.fetchWindow(this.end-$,this.end,u=>{this.progress=u,this.notify()})}catch(u){if(this.disposed)return;let c=u;this.state="error",this.error=c?.code??c?.message??String(u),this.notify();return}if(!i)return;let s=t.presence.flatMap(u=>[u.sensor]).filter(u=>!!u);this.requested=[...r.entities,...r.stats,...r.overflow,...r.hidden,...s],this.cars=r.cars;let a=new Map(e.furniture);this.devices=e.energy?$t(t,u=>a.get(u.id)?.power??null):null,this.energyIds=this.devices?Fn(t,this.devices):[],this.rooms=Sn(n,t,e),this.roomOf=Rn(this.rooms);for(let[u,c]of ee(n,t,e))this.names.set(u,c.name||this.t(`furn_${c.type}`));this.setTimeline(i);let l=typeof this.opts.at=="number"?this.opts.at:vt(this.opts.at??null,this.end);this.playback=new _t(i.start,this.end,l??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?Qt:xt),this.liveLog=new kt([...r.entities,...r.stats,...r.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(t){let{building:e,spec:n}=this.opts,r=this.live,i=new Set([...t.tracks.keys(),...t.series.keys()]);this.roles=yn(r,e,n,i),qe(t)>Ye&&Ze(t,this.motion()),this.timeline=t,this.version++,this.daySummaries.clear(),this.replayer=new Rt(t,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[e.settings.weather_entity,...Object.keys(r.states).filter(s=>s.startsWith("weather."))].find(s=>!!s&&i.has(s))??null,this.findEvents(),this.gaps=Bt(t),this.gapsTo=t.end,this.updateNights()}findEvents(){let t=this.timeline;if(!t)return;let{building:e,spec:n}=this.opts,r=this.devices,i=r&&n.energy?{solar:e.energy.solar?[e.energy.solar]:r.solar,soc:e.energy.battery_soc?[e.energy.battery_soc]:r.soc,sunDown:l=>this.sunDown(l)}:null,s=e.settings.outage_entity,a=s&&this.live.states[s]?{id:s,attributes:this.live.states[s].attributes}:null;this.allEvents=sn({timeline:t,roles:this.roles,weather:this.weather,energy:i,outage:a}),this.events=this.allEvents.filter(l=>!rn.has(l.kind))}sunDown(t){let e=this.location;if(e)return re(e.lat,e.lon,t);let n=this.timeline?.tracks.get("sun.sun"),r=n?S(n.times,t):-1;return!!n&&r>=0&&n.values[n.vals[r]].s==="below_horizon"}shownEvents(t=!1){let e=this.playback,n=t?this.allEvents:this.events;return e?fn(n,Math.max(e.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,t])=>t==="motion"||t==="camera").map(([t])=>t)}updateNights(){let t=this.location;this.nights=t?vn(t.lat,t.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let t=this.timeline.start,e=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(t<=e+6e4)break;let n=this.recorderStart;if(n!==null&&t<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=t-$,this.notify();let r;try{r=await this.fetchWindow(t-$,t)}catch(l){console.warn("Home 3D: time travel could not load an older day",l);break}if(!r||this.disposed||!this.timeline)return;let i=je(r,this.timeline);this.setTimeline(i),Qe(i)>rr&&(this.full=!0);let s=this.playback;if(!s)continue;s.setRange(Math.max(i.start,this.start),this.end);let a=!1;this.wanted!==null&&this.wanted>=s.start&&(s.seek(this.wanted),this.wanted=null,a=!0),this.apply(!0,a)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(t){let e=this.playback;if(t===this.range||!e||!this.timeline)return;this.range=t;let n=e.t;e.setRange(Math.max(this.timeline.start,this.start),this.end,t==="7d"?Qt:xt),this.updateNights(),e.t!==n?this.apply(!0):this.notify(),t==="7d"&&this.loadOlder()}sunNights(){let t=this.timeline?.tracks.get("sun.sun");if(!t)return[];let e=[],n=null;for(let r=0;r<t.times.length;r++){let i=t.values[t.vals[r]].s==="below_horizon";i&&n===null&&(n=t.times[r]),!i&&n!==null&&(e.push([n,t.times[r]]),n=null)}return n!==null&&e.push([n,this.end]),e}apply(t,e=t){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,e&&this.replay.seek++;let r=this.replayer.hassAt(this.live,n.t,t);this.replay.pulses=this.replayer.pulses,(r!==this.hass||t)&&(this.hass=r,this.opts.onChange()),this.notify()}setLive(t){this.live=t,Gt(Kt(t));let e=Date.now();this.liveLog?.record(t.states,e);let n=this.playback,r=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&e-this.flushedAt>=sr||this.derivePending&&e-this.eventsAt>Vn)){let i=!n.playing&&n.t>=n.end-1e3;this.edge(e),i&&n.seek(n.end),this.replay.t=n.t,r=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(t,n.t)),r&&this.notify()}setQuality(t,e){let n=this.maxDays;this.quality=t,this.low=e;let r=this.playback;if(n===this.maxDays||!r||!this.timeline)return;let i=this.end-this.maxDays*$,s=this.timeline.start<i-6e4;if(s)this.setTimeline(tn(this.timeline,i)),this.full=!1,this.needFrom!==null&&this.needFrom<i&&(this.needFrom=null),this.wanted!==null&&this.wanted<i&&(this.wanted=null);else if(this.range!=="7d")return;let a=r.t;r.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),s||r.t!==a?this.apply(!0,r.t!==a):this.notify(),this.loadOlder()}play(){let t=this.playback;if(!t)return;let e=t.t>=t.end;t.play(),e&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(t,e=!1){this.playback&&(e&&this.pause(),this.wanted=null,this.playback.seek(t),this.last=performance.now(),this.apply(!0))}step(t){let e=this.playback;if(!e)return;let n=dn(this.shownEvents(),e.t,t);this.seek(n?n.t:t>0?e.end:e.start,!0)}goTo(t){this.seek(t.t,!0),this.focusOn(t.entity)}focusOn(t){this.replay.focus=t,this.replay.focusSeq++,this.notify()}yesterday(){let t=this.playback;if(!t)return;let e=t.t-$;e<t.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(e,t.start),!0),e<t.start&&this.olderRunning&&(this.wanted=e)}setFollow(t){this.follow=t,j("follow",t?"1":"0"),this.notify()}setStopImportant(t){this.stopImportant=t,j("stop",t?"1":"0"),this.notify()}nextSpeed(){this.playback?.nextSpeed(),this.notify()}awayOffer(){let t=this.timeline;return t?An($n(t,this.motion(),t.start,this.end)):null}away(t,e){let n=this.timeline;return n?Tn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(r=>r.startsWith("light.")),motion:this.motion(),from:t,to:e}):[]}ensureLoaded(t){let e=this.timeline;!e||e.start<=t+6e4||this.needFrom!==null&&this.needFrom<=t||t<this.end-this.maxDays*$-$||(this.needFrom=t,this.loadOlder())}daySummary(t){let e=this.timeline;if(!e||t+$<=e.start||t>e.end)return null;let n=`${t}|${this.version}`,r=this.daySummaries.get(n);if(!r){let i=ht(t),s=Math.max(t,e.start),a=Math.min(i,e.end),l=this.devices,u=this.energy&&l?On(c=>zn(e,this.live.states,this.opts.building,l,this.energyIds,c),s,a):null;r=Pn(e,this.rooms,s,a,u),this.daySummaries.set(n,r)}return r}schedule(){clearTimeout(this.timer),this.timer=void 0;let t=this.playback;!t?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let e=performance.now(),n=Math.min(2e3,e-this.last);this.last=e;let r=t.t;if(t.end-t.t<=ir+n*t.speed&&this.edge(),t.advance(n)){let i=this.stopImportant&&t.speed>=900?Yt(this.allEvents,r,t.t,s=>yt.has(s.kind)):null;if(i){t.seek(i.t),t.pause(),this.apply(!0),this.focusOn(i.entity);return}if(this.apply(!1),this.follow&&e-this.followAt>2500){let s=Yt(this.events,r,t.t,()=>!0);s&&(this.followAt=e,this.focusOn(s.entity))}}t.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},cn(this.quality,this.low)))}edge(t=Date.now()){let e=this.playback,n=this.timeline;if(!e||!n||!this.liveLog||t-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:r,created:i}=this.liveLog.flush(n,t);this.flushedAt=t,this.end=t,e.setRange(Math.max(n.start,this.start),t),i&&this.replayer?.refresh(),(r||i)&&(this.derivePending=!0),this.derivePending&&(!e.playing||t-this.eventsAt>Vn)&&this.derive(t)}derive(t){let e=this.timeline;if(!e)return;this.derivePending=!1,this.eventsAt=t,this.findEvents();let n=Math.max(e.start,this.gapsTo-30*6e4),r=this.gaps.filter(([a])=>a<n).map(([a,l])=>[a,Math.min(l,n)]),i=Bt(e,void 0,void 0,void 0,n),s=r[r.length-1];s&&i.length&&s[1]>=n&&i[0][0]<=n&&(s[1]=i.shift()[1]),this.gaps=[...r,...i],this.gapsTo=e.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&j("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function sa(o){return new fe(o)}export{rr as MAX_BYTES,fe as Session,sa as startTimeTravel};
