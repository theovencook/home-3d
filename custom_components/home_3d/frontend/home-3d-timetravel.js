var Un=new Map;var Kn=new Map;function jn(r){return r.startsWith("pack:")}var Gn={meter:"meter",consumer_unit:"meter",energy_monitor:"meter",inverter:"inverter",home_battery:"home_battery",power_station:"home_battery",ev_charger:"wallbox",solar_panel:"solar"};function be(r){if(r==="meter"||r==="inverter"||r==="home_battery"||r==="wallbox")return r;let t=ye(r),e=t?.family?Gn[t.family]??(/^ev_charger_/.test(t.family)?"wallbox":null):null;return e==="meter"&&(t.tags??[]).some(n=>/^(gas|water|wasser)$/i.test(n))?null:e}function ye(r){if(jn(r))return Kn.get(r)??Un.get(r)}var Yn={type:"none",pitch:35,overhang:.4},zo={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Yn}};var Zn=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var Qn=new Set([...Zn,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function $(r,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[i,s]=t[n],[a,l]=t[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(e=!e)}return e}var Xn=Math.PI/180;var Lo=Math.tan(30*Xn);var Zo=Math.PI/180;var tr=/^(binary_sensor|schedule|input_boolean|switch)\./;function er(r){return/off[\s_-]?peak|night|cheap|low|economy|e7|nacht|niedrig/i.test(r)}function nr(r,t,e){if(tr.test(e))return t?.state==="on";let n=t?.state;if(!n||n==="unavailable"||n==="unknown")return!1;let o=r.cheap_states??[];return o.length?o.some(i=>i.toLowerCase()===n.toLowerCase()):er(n)}function ve(r,t,e){let n=`${e??""}/kWh`,o=i=>{if(typeof i=="number")return Number.isFinite(i)?{value:i,unit:n}:null;let s=i&&i!=="none"?t[i]:void 0,a=Number(s?.state);return s&&s.state!==""&&Number.isFinite(a)?{value:a,unit:String(s.attributes.unit_of_measurement||n)}:null};if(r.price_mode==="split"){let i=r.rate_entity,s=!!i&&i!=="none"&&nr(r,t[i],i);return o(s?r.price_cheap:r.price_peak)}return r.tariff?o(r.tariff):o(r.price_fixed)}function At(r,t){return r===null?t:t===null?r:r+t}function rr(r,t){return(t.systems??[]).map(e=>{let n=e.battery_soc?Number(r.states[e.battery_soc]?.state):NaN,o=e.solar?E(r.states[e.solar]):null;return{id:e.id,name:e.name,inverter:e.inverter??null,grid:e.grid?E(r.states[e.grid],e.grid_invert):null,solar:o===null?null:Math.max(0,o),battery:e.battery?E(r.states[e.battery],e.battery_invert):null,soc:Number.isFinite(n)?n:null}})}function or(r){let t=new Map,e=new Set(r.map(n=>n.powerEntity));for(let n of r)n.circuit&&n.circuit!==n.powerEntity&&e.has(n.circuit)&&t.set(n.circuit,(t.get(n.circuit)??0)+n.power);return r.map(n=>Math.max(0,n.power-(t.get(n.powerEntity)??0)))}var lt=r=>r&&r!=="none"?r:null;function Tt(r,t=e=>lt(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let o of n.furniture){let i=t(o),s=be(o.type);if(s==="meter")e.grid??=i,e.gridExport??=lt(o.export);else if((s==="inverter"||s==="solar")&&i&&!e.solar.includes(i))e.solar.push(i);else if(s==="home_battery"){i&&!e.battery.includes(i)&&e.battery.push(i);let a=lt(o.charge);a&&!e.charge.includes(a)&&e.charge.push(a),(i||a)&&e.batteries.push({power:i,charge:a});let l=lt(o.soc);l&&!e.soc.includes(l)&&e.soc.push(l)}}return e}function E(r,t=!1){if(!r)return null;let e=Number(r.state);if(!Number.isFinite(e))return null;let n=e*ir(r.attributes.unit_of_measurement);return t?-n:n}function ir(r){switch(typeof r=="string"?r.trim():""){case"mW":return .001;case"kW":return 1e3;case"MW":return 1e6;case"GW":return 1e9;case"TW":return 1e12;default:return 1}}function we(r,t,e,n=Tt(t)){let o=t.energy,i=o.grid??n.grid,s=i?E(r.states[i],o.grid_invert):null;if(!o.grid&&n.gridExport){let g=Math.max(0,E(r.states[n.gridExport])??0);s=Math.max(0,s??0)-g}let a=o.solar?E(r.states[o.solar]):null;if(!o.solar&&n.solar.length){let g=n.solar.map(y=>E(r.states[y])).filter(y=>y!==null);a=g.length?g.reduce((y,b)=>y+b,0):null}let l=o.battery?E(r.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let g=n.batteries.map(y=>{if(y.charge){let b=y.power?Math.max(0,E(r.states[y.power])??0):0,x=Math.max(0,E(r.states[y.charge])??0);return b-x}return y.power?E(r.states[y.power],o.battery_invert):null}).filter(y=>y!==null);l=g.length?g.reduce((y,b)=>y+b,0):null}let c=(o.battery_soc?[o.battery_soc]:n.soc).map(g=>Number(r.states[g]?.state)).filter(g=>Number.isFinite(g)),d=rr(r,o);for(let g of d)s=At(s,g.grid),a=At(a,g.solar),l=At(l,g.battery),g.soc!==null&&c.push(g.soc);let f=c.length?c.reduce((g,y)=>g+y,0)/c.length:NaN,m=o.tariff?r.states[o.tariff]:void 0,h=Number(m?.state),p=o.consumption?E(r.states[o.consumption]):null;return p!==null?p=Math.max(0,p):s!==null||a!==null||l!==null?p=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):e.length&&(p=or(e).reduce((g,y)=>g+y,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(f)?f:null,tariff:o.rates_from==="sensors"?ve(o,r.states,r.config?.currency):m&&Number.isFinite(h)?{value:h,unit:String(m.attributes.unit_of_measurement??"")}:null,consumption:p,...d.length?{systems:d}:{}}}var sr=Symbol.for("home-3d.custom-elements");function Me(){let r=globalThis;return r[sr]??={defined:new Map,watching:!1}}function ke(){let r=globalThis.customElements;if(r){for(let[t,e]of Me().defined)if(e.registry!==r&&(e.registry=r,!r.get(t)))try{r.define(t,e.cls)}catch(n){console.warn(`Home 3D: could not define ${t} in the page's element registry`,n)}}}function ar(r,t){if(typeof document>"u")return;let e;try{e=document.createElement(r)}catch{return}if(Object.getPrototypeOf(e)===HTMLElement.prototype||e instanceof HTMLUnknownElement||!(e instanceof HTMLElement))return;let o=e.constructor;return o===t?void 0:o}function Se(r,t){ke();let e=globalThis.customElements;if(e.get(r))return!1;let n=Me(),o=ar(r,t);if(o){try{e.define(r,o),n.defined.set(r,{cls:o,registry:e})}catch(i){console.warn(`Home 3D: could not define ${r} in the page's element registry`,i)}return!1}return e.define(r,t),n.defined.set(r,{cls:t,registry:e}),n.watching||(n.watching=!0,e.whenDefined("home-assistant").then(ke)),!0}var ut=globalThis,ct=ut.ShadowRoot&&(ut.ShadyCSS===void 0||ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ft=Symbol(),Re=new WeakMap,Q=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ft)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ct&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Re.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Re.set(e,t))}return t}toString(){return this.cssText}},Ee=r=>new Q(typeof r=="string"?r:r+"",void 0,Ft),Pt=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new Q(e,r,Ft)},$e=(r,t)=>{if(ct)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=ut.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,r.appendChild(n)}},Ot=ct?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Ee(e)})(r):r;var{is:lr,defineProperty:ur,getOwnPropertyDescriptor:cr,getOwnPropertyNames:fr,getOwnPropertySymbols:dr,getPrototypeOf:pr}=Object,ft=globalThis,Ae=ft.trustedTypes,mr=Ae?Ae.emptyScript:"",hr=ft.reactiveElementPolyfillSupport,Y=(r,t)=>r,zt={toAttribute(r,t){switch(t){case Boolean:r=r?mr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Fe=(r,t)=>!lr(r,t),Te={attribute:!0,type:String,converter:zt,reflect:!1,useDefault:!1,hasChanged:Fe};Symbol.metadata??=Symbol("metadata"),ft.litPropertyMetadata??=new WeakMap;var T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Te){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&ur(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:i}=cr(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Te}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=pr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties,n=[...fr(e),...dr(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(Ot(o))}else t!==void 0&&e.push(Ot(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $e(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:zt).toAttribute(e,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:zt;this._$Em=o;let a=s.fromAttribute(e,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,e,n,o=!1,i){if(t!==void 0){let s=this.constructor;if(o===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Fe)(i,e)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,i]of n){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[Y("elementProperties")]=new Map,T[Y("finalized")]=new Map,hr?.({ReactiveElement:T}),(ft.reactiveElementVersions??=[]).push("2.1.2");var Lt=globalThis,Pe=r=>r,dt=Lt.trustedTypes,Oe=dt?dt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ve="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,De="?"+P,gr=`<${De}>`,C=document,X=()=>C.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",Wt=Array.isArray,br=r=>Wt(r)||typeof r?.[Symbol.iterator]=="function",It=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,Ie=/>/g,I=RegExp(`>|${It}(?:([^\\s"'>=/]+)(${It}*=${It}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ne=/'/g,Ce=/"/g,Le=/^(?:script|style|textarea|title)$/i,Bt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),v=Bt(1),We=Bt(2),Hi=Bt(3),H=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),He=new WeakMap,N=C.createTreeWalker(C,129);function Be(r,t){if(!Wt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oe!==void 0?Oe.createHTML(t):t}var yr=(r,t)=>{let e=r.length-1,n=[],o,i=t===2?"<svg>":t===3?"<math>":"",s=Z;for(let a=0;a<e;a++){let l=r[a],u,c,d=-1,f=0;for(;f<l.length&&(s.lastIndex=f,c=s.exec(l),c!==null);)f=s.lastIndex,s===Z?c[1]==="!--"?s=ze:c[1]!==void 0?s=Ie:c[2]!==void 0?(Le.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=I):c[3]!==void 0&&(s=I):s===I?c[0]===">"?(s=o??Z,d=-1):c[1]===void 0?d=-2:(d=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?I:c[3]==='"'?Ce:Ne):s===Ce||s===Ne?s=I:s===ze||s===Ie?s=Z:(s=I,o=void 0);let m=s===I&&r[a+1].startsWith("/>")?" ":"";i+=s===Z?l+gr:d>=0?(n.push(u),l.slice(0,d)+Ve+l.slice(d)+P+m):l+P+(d===-2?a:m)}return[Be(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},tt=class r{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let i=0,s=0,a=t.length-1,l=this.parts,[u,c]=yr(t,e);if(this.el=r.createElement(u,n),N.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=N.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Ve)){let f=c[s++],m=o.getAttribute(d).split(P),h=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:h[2],strings:m,ctor:h[1]==="."?Ct:h[1]==="?"?Ht:h[1]==="@"?Vt:B}),o.removeAttribute(d)}else d.startsWith(P)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(Le.test(o.tagName)){let d=o.textContent.split(P),f=d.length-1;if(f>0){o.textContent=dt?dt.emptyScript:"";for(let m=0;m<f;m++)o.append(d[m],X()),N.nextNode(),l.push({type:2,index:++i});o.append(d[f],X())}}}else if(o.nodeType===8)if(o.data===De)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(P,d+1))!==-1;)l.push({type:7,index:i}),d+=P.length-1}i++}}static createElement(t,e){let n=C.createElement("template");return n.innerHTML=t,n}};function W(r,t,e=r,n){if(t===H)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,i=J(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=W(r,o._$AS(r,t.values),o,n)),t}var Nt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??C).importNode(e,!0);N.currentNode=o;let i=N.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new et(i,i.nextSibling,this,t):l.type===1?u=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(u=new Dt(i,this,t)),this._$AV.push(u),l=n[++a]}s!==l?.index&&(i=N.nextNode(),s++)}return N.currentNode=C,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},et=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),J(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):br(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==w&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=tt.createElement(Be(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let i=new Nt(o,this),s=i.u(this.options);i.p(e),this.T(s),this._$AH=i}}_$AC(t){let e=He.get(t.strings);return e===void 0&&He.set(t.strings,e=new tt(t)),e}k(t){Wt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let i of t)o===e.length?e.push(n=new r(this.O(X()),this.O(X()),this,this.options)):n=e[o],n._$AI(i),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=Pe(t).nextSibling;Pe(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},B=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(t,e=this,n,o){let i=this.strings,s=!1;if(i===void 0)t=W(this,t,e,0),s=!J(t)||t!==this._$AH&&t!==H,s&&(this._$AH=t);else{let a=t,l,u;for(t=i[0],l=0;l<i.length-1;l++)u=W(this,a[n+l],e,l),u===H&&(u=this._$AH[l]),s||=!J(u)||u!==this._$AH[l],u===w?t=w:t!==w&&(t+=(u??"")+i[l+1]),this._$AH[l]=u}s&&!o&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ct=class extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}},Ht=class extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}},Vt=class extends B{constructor(t,e,n,o,i){super(t,e,n,o,i),this.type=5}_$AI(t,e=this){if((t=W(this,t,e,0)??w)===H)return;let n=this._$AH,o=t===w&&n!==w||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==w&&(n===w||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Dt=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};var _r=Lt.litHtmlPolyfillSupport;_r?.(tt,et),(Lt.litHtmlVersions??=[]).push("3.3.3");var Ue=(r,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let i=e?.renderBefore??null;n._$litPart$=o=new et(t.insertBefore(X(),i),i,void 0,e??{})}return o._$AI(r),o};var Ut=globalThis,O=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ue(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};O._$litElement$=!0,O.finalized=!0,Ut.litElementHydrateSupport?.({LitElement:O});var xr=Ut.litElementPolyfillSupport;xr?.({LitElement:O});(Ut.litElementVersions??=[]).push("4.2.2");var vr=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),wr=new Set(["power","plug","connectivity","running"]);function Ke(r){if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let t=r.entity_id.split(".")[0];if(t==="binary_sensor")return wr.has(String(r.attributes.device_class))?r.state==="off":r.state==="on";if(t==="input_boolean"||t==="switch")return r.state==="on";let e=Number(r.state);if(r.state!==""&&Number.isFinite(e))return r.attributes.unit_of_measurement==="V"&&e<100;let n=String(r.state).toLowerCase().trim();return vr.has(n)||n.startsWith("ob ")}function V(r,t,e=9e5){let n=r.mean.length;if(!n||t<r.start)return NaN;let o=(t-r.start)/r.step-.5,i=Math.floor(o);if(i<0)return r.mean[0];if(i>=n-1){let c=je(r,n-1);return c>=0&&t-(r.start+(c+.5)*r.step)<=e?r.mean[c]:NaN}let s=r.mean[i],a=r.mean[i+1],l=o-i;if(!Number.isNaN(s)&&!Number.isNaN(a))return s+(a-s)*l;let u=je(r,i);return u>=0&&t-(r.start+(u+.5)*r.step)<=e?r.mean[u]:NaN}function je(r,t){for(let e=t;e>=0;e--)if(!Number.isNaN(r.mean[e]))return e;return-1}function Ge(r,t,e=0){if(typeof t=="number"&&t>=0&&t<=6)return 10**-t;switch(typeof r=="string"?r:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(e)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(e)>=100?1:Math.abs(e)>=10?.1:.01}}function qe(r,t){if(!Number.isFinite(r))return"unknown";let e=t>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(t)))),o=(Math.round(r/t)*t).toFixed(e);return/^-0(\.0*)?$/.test(o)?o.slice(1):o}var kr=r=>typeof r=="string"?{s:r,a:null}:{s:String(r[0]),a:r[1]&&typeof r[1]=="object"?r[1]:null},z=r=>`${r.s}\0${r.a?JSON.stringify(r.a):""}`;function Ye(r){let t=[...r].sort((f,m)=>f.day_start-m.day_start),e=new Map,n=new Map,o=new Set,i=1/0,s=-1/0,a=null,l=!1,u=null;for(let f of t){i=Math.min(i,f.day_start*1e3),s=Math.max(s,f.end*1e3),f.oldest===null?l=!0:a=a===null?f.oldest*1e3:Math.min(a,f.oldest*1e3),u??=f.keep_days;for(let[m,h]of Object.entries(f.entities??{})){let p=e.get(m)??[],g=f.day_start*1e3,y=Math.min(h.t.length,h.v.length);for(let b=0;b<y;b++){let x=h.tab[h.v[b]];if(x===void 0)continue;let _=kr(x),M=z(_),R=p[p.length-1],q=g+h.t[b]*1e3;R&&(q<R.t||R.k===M)||p.push({t:q,v:_,k:M})}e.set(m,p)}for(let[m,h]of Object.entries(f.stats??{})){let p=n.get(m)??[];p.push({start:h.start*1e3,step:h.step*1e3,mean:h.mean}),n.set(m,p)}for(let m of f.missing??[])o.add(m)}let c=new Map;for(let[f,m]of e){if(!m.length)continue;let h=[],p=new Map,g=new Float64Array(m.length),y=new Uint32Array(m.length),b=new Float64Array(m.length);for(let x=0;x<m.length;x++){let _=p.get(m[x].k);_===void 0&&(_=h.length,h.push(m[x].v),p.set(m[x].k,_)),g[x]=m[x].t,y[x]=_,b[x]=x>0&&m[x-1].v.s===m[x].v.s?b[x-1]:m[x].t}c.set(f,{id:f,times:g,vals:y,values:h,since:b}),o.delete(f)}let d=new Map;for(let[f,m]of n){let h=m[0].step;if(!(h>0))continue;let p=Math.min(...m.map(x=>x.start)),g=Math.max(...m.map(x=>x.start+x.mean.length*x.step)),y=Math.max(0,Math.round((g-p)/h));if(!y)continue;let b=new Float32Array(y).fill(NaN);for(let x of m)x.mean.forEach((_,M)=>{let R=Math.round((x.start+M*x.step-p)/h);typeof _=="number"&&Number.isFinite(_)&&R>=0&&R<y&&(b[R]=_)});b.every(x=>Number.isNaN(x))||(d.set(f,{id:f,start:p,step:h,mean:b}),o.delete(f))}return{start:Number.isFinite(i)?i:0,end:Number.isFinite(s)?s:0,oldest:l?null:a,keepDays:u,tracks:c,series:d,missing:o}}function S(r,t){let e=0,n=r.length-1;if(n<0||r[0]>t)return-1;for(;e<n;){let o=e+n+1>>1;r[o]<=t?e=o:n=o-1}return e}var U=class{tracks;idx;t=-1/0;constructor(t){this.tracks=[...t.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(t){let e=t>=this.t;for(let n=0;n<this.tracks.length;n++){let o=this.tracks[n].times,i=this.idx[n];if(!e)i=S(o,t);else{let s=0;for(;i+1<o.length&&o[i+1]<=t&&s<8;)i++,s++;i+1<o.length&&o[i+1]<=t&&(i=S(o,t))}this.idx[n]=i}return this.t=t,this.idx}value(t){let e=this.idx[t];return e<0?null:this.tracks[t].values[this.tracks[t].vals[e]]}},Mr=new Set(["unavailable","unknown"]);function Kt(r,t=5*6e4,e=.6,n=10*6e4,o=-1/0){let i=new U(r);if(!i.tracks.length)return[];let s=Math.max(r.oldest??r.start,o),a=[],l=null;for(let u=s;u<=r.end;u+=t){i.at(u);let c=0;for(let f=0;f<i.tracks.length;f++){let m=i.value(f);(!m||Mr.has(m.s))&&c++}let d=c/i.tracks.length>=e;d&&l===null&&(l=u),!d&&l!==null&&(u-l>=n&&a.push([l,u]),l=null)}return l!==null&&r.end-l>=n&&a.push([l,r.end]),a}function Ze(r){for(let t=0;t<r.times.length;t++)r.since[t]=t>0&&r.values[r.vals[t-1]].s===r.values[r.vals[t]].s?r.since[t-1]:r.times[t]}function Sr(r,t){let e=[...r.values],n=new Map(e.map((u,c)=>[z(u),c])),o=t.values.map(u=>{let c=z(u),d=n.get(c);return d===void 0&&(d=e.length,e.push(u),n.set(c,d)),d}),i=t.times.length?t.times[0]:1/0,s=[],a=[];for(let u=0;u<r.times.length&&r.times[u]<i;u++)s.push(r.times[u]),a.push(r.vals[u]);for(let u=0;u<t.times.length;u++){let c=o[t.vals[u]];a.length&&a[a.length-1]===c||(s.push(t.times[u]),a.push(c))}let l={id:r.id,times:Float64Array.from(s),vals:Uint32Array.from(a),values:e,since:new Float64Array(s.length)};return(r.dropped||t.dropped)&&(l.dropped=Float64Array.from([...r.dropped??[],...t.dropped??[]]).sort()),Ze(l),l}function Rr(r,t){let e=r.step,n=Math.min(r.start,t.start),o=Math.max(r.start+r.mean.length*r.step,t.start+t.mean.length*t.step),i=Math.max(0,Math.round((o-n)/e)),s=new Float32Array(i).fill(NaN);for(let a of[r,t])for(let l=0;l<a.mean.length;l++){let u=Math.round((a.start+l*a.step-n)/e);!Number.isNaN(a.mean[l])&&u>=0&&u<i&&(s[u]=a.mean[l])}return{id:r.id,start:n,step:e,mean:s}}function Xe(r,t){let[e,n]=r.start<=t.start?[r,t]:[t,r],o=new Map;for(let l of new Set([...e.tracks.keys(),...n.tracks.keys()])){let u=e.tracks.get(l),c=n.tracks.get(l);o.set(l,u&&c?Sr(u,c):u??c)}let i=new Map;for(let l of new Set([...e.series.keys(),...n.series.keys()])){let u=e.series.get(l),c=n.series.get(l);i.set(l,u&&c?Rr(u,c):u??c)}let s=new Set([...e.missing,...n.missing].filter(l=>!o.has(l)&&!i.has(l))),a=e.oldest===null?null:e.oldest<e.end?e.oldest:n.oldest??n.start;return{start:e.start,end:Math.max(e.end,n.end),oldest:a,keepDays:n.keepDays??e.keepDays,tracks:o,series:i,missing:s}}function Je(r){let t=0;for(let e of r.tracks.values())t+=e.times.length;return t}function tn(r){let t=0;for(let e of r.tracks.values())t+=e.times.length*20+e.values.length*120;for(let e of r.series.values())t+=e.mean.length*4;return t}var en=3e5;function nn(r,t,e=6e4,n=5*6e4){let o=0;for(let i of t){let s=r.tracks.get(i);if(!s||s.times.length<3)continue;let a=s.times.length,l=h=>s.values[s.vals[h]].s,u=[],c=[],d=null;for(let h=0;h<a;h++){let p=u.length?u[u.length-1]:-1;if(p>=0&&d!==null&&l(p)==="off"&&l(h)==="on"&&h+1<a&&l(h+1)==="off"&&s.times[h+1]-s.times[h]<e&&s.times[h]-d<=n){c.push(s.times[h]),h++,o+=2;continue}if(p>=0&&s.vals[p]===s.vals[h]){o++;continue}p>=0&&l(p)==="on"&&l(h)!=="on"&&(d=s.times[h]),u.push(h)}if(u.length===a)continue;let f=Float64Array.from(u,h=>s.times[h]),m=Uint32Array.from(u,h=>s.vals[h]);s.times=f,s.vals=m,s.since=new Float64Array(u.length),c.length&&(s.dropped=Float64Array.from([...s.dropped??[],...c]).sort()),Ze(s)}return o}var Qe=new WeakMap;function Er(r){let t=Qe.get(r);return(!t||t.size!==r.values.length)&&(t=new Map(r.values.map((e,n)=>[z(e),n])),Qe.set(r,t)),t}function jt(r,t){let e=Er(r),n=r.times.length,o=n?r.times[n-1]:-1/0,i=n?r.vals[n-1]:-1,s=[],a=[];for(let f of t){if(f.t<o)continue;let m=z(f.v),h=e.get(m);h!==i&&(h===void 0&&(h=r.values.length,r.values.push(f.v),e.set(m,h)),s.push(f.t),a.push(h),o=f.t,i=h)}if(!s.length)return 0;let l=n+s.length,u=new Float64Array(l);u.set(r.times),u.set(s,n);let c=new Uint32Array(l);c.set(r.vals),c.set(a,n);let d=new Float64Array(l);d.set(r.since);for(let f=n;f<l;f++)d[f]=f>0&&r.values[c[f-1]].s===r.values[c[f]].s?d[f-1]:u[f];return r.times=u,r.vals=c,r.since=d,s.length}function rn(r,t){let e=-1;for(let o of t)Number.isFinite(o.value)&&o.t>=r.start&&(e=Math.max(e,Math.floor((o.t-r.start)/r.step)));if(e<0)return 0;if(e>=r.mean.length){let o=new Float32Array(e+1).fill(NaN);o.set(r.mean),r.mean=o}let n=0;for(let o of t){if(!Number.isFinite(o.value)||o.t<r.start)continue;let i=Math.floor((o.t-r.start)/r.step);Number.isNaN(r.mean[i])&&(r.mean[i]=o.value,n++)}return n}function on(r,t){let e={id:r,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return jt(e,t)?e:null}function sn(r,t){if(t<=r.start)return r;let e=new Map;for(let[i,s]of r.tracks){let a=Math.max(0,S(s.times,t));if(a===0){e.set(i,s);continue}let l={id:i,times:s.times.slice(a),vals:s.vals.slice(a),values:s.values,since:s.since.slice(a)};s.dropped&&(l.dropped=s.dropped.filter(u=>u>=t)),e.set(i,l)}let n=new Map;for(let[i,s]of r.series){let a=Math.max(0,Math.floor((t-s.start)/s.step));n.set(i,a?{id:i,start:s.start+a*s.step,step:s.step,mean:s.mean.slice(a)}:s)}let o=r.oldest!==null&&r.oldest>t?r.oldest:null;return{...r,start:t,oldest:o,tracks:e,series:n}}function an(r,t,e,n){let o={};for(let s of t){let a=r.series.get(s),l=r.tracks.get(s);if(!a&&!l)continue;let u=[];for(let c=Math.floor(e/3e5)*3e5;c<n;c+=3e5){let d=NaN;if(a){let f=Math.floor((c+15e4-a.start)/a.step);d=f>=0&&f<a.mean.length?a.mean[f]:NaN}else if(l){let f=S(l.times,c+15e4);d=f<0?NaN:Number(l.values[l.vals[f]].s)}Number.isFinite(d)&&u.push({start:c,mean:d})}u.length&&(o[s]=u)}return o}var D=null;function Gt(r){let t=r?.locale?.time_zone,e=r?.config?.time_zone;if(t!=="server"||!e)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),e}catch{return null}}function qt(r){D=r}var ln=new Map;function $r(r){let t=ln.get(r);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:r,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),ln.set(r,t)),t}function mt(r,t){let e=[0,0,0,0,0,0];for(let n of $r(t).formatToParts(r)){let o=Number(n.value);n.type==="year"?e[0]=o:n.type==="month"?e[1]=o-1:n.type==="day"?e[2]=o:n.type==="hour"?e[3]=o%24:n.type==="minute"?e[4]=o:n.type==="second"&&(e[5]=o)}return e}function pt(r,t){let[e,n,o,i,s,a]=mt(r,t),l=r-(r%1e3+1e3)%1e3;return Date.UTC(e,n,o,i,s,a)-l}function K(r,t=D){return t?mt(r,t)[3]:new Date(r).getHours()}function F(r,t=D){if(!t)return new Date(r).setHours(0,0,0,0);let[e,n,o]=mt(r,t),i=Date.UTC(e,n,o)-pt(r,t);return i=Date.UTC(e,n,o)-pt(i,t),i}function ht(r,t=D){return F(F(r,t)+27*36e5,t)}function gt(r,t=D){if(!t)return new Date(r).setMinutes(0,0,0);let[,,,,e,n]=mt(r,t);return r-(r%1e3+1e3)%1e3-(e*60+n)*1e3}function Qt(r,t,e,n=D){if(!n){let s=new Date(r);return s.setHours(t,e,0,0),s.getTime()}let o=F(r,n),i=o+(t*60+e)*6e4;return i-(pt(i,n)-pt(o,n))}function nt(r=D){return r?{timeZone:r}:{}}var bt={alarm:100,smoke:95,gas:95,co:95,water:90,outage:88,rain:70,door:50,lock:45,garage:40,camera:38,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},cn=new Set(["window","battery_full","pv_peak"]),yt=new Set(["alarm","smoke","gas","co","water","outage"]),Yt={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",outage:"safety",motion:"safety",camera:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},Ar=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),rt=new Set(["unavailable","unknown"]),L=new Set(["on","open","opening","tilted"]);function Tr(r){let t=K(r);return t>=23||t<5}function*ot(r){let t=null;for(let e=0;e<r.times.length;e++){let n=r.values[r.vals[e]].s;n!==t&&(yield{t:r.times[e],from:t,to:n}),t=n}}function j(r,t,e){let n=[],o=null;for(let i of ot(r)){let s=t.has(i.to);s&&o===null&&(o=i.t),!s&&o!==null&&(n.push([o,i.t]),o=null)}return o!==null&&n.push([o,e]),n}function Fr(r,t){let e=r.tracks.get(t);if(e){let i=[];for(let s=0;s<e.times.length;s++){let a=Number(e.values[e.vals[s]].s);Number.isFinite(a)&&i.push({t:e.times[s],w:a})}return i}let n=r.series.get(t);if(!n)return[];let o=[];for(let i=0;i<n.mean.length;i++){let s=n.start+(i+.5)*n.step,a=V(n,s);Number.isFinite(a)&&o.push({t:s,w:a})}return o}function Pr(r,t=10,e=5,n=20*6e4){let o=[],i=null;for(let s of r)i===null&&s.w>t?i=s.t:i!==null&&s.w<e&&(s.t-i>=n&&o.push(s.t),i=null);return o}function un(r,t,e,n,o=3e5){let i=Math.max(0,Math.ceil((n-e)/o)),s=new Float64Array(i).fill(NaN),a=r.series.get(t),l=r.tracks.get(t);for(let u=0;u<i;u++){let c=e+(u+.5)*o;if(a)s[u]=V(a,c);else if(l){let d=S(l.times,c);s[u]=d<0?NaN:Number(l.values[l.vals[d]].s)}}return s}function Or(r,t){let e=[],o=Math.floor(r.start/3e5)*3e5;for(let i of t.soc){let s=un(r,i,o,r.end),a=!1;s.forEach((l,u)=>{Number.isNaN(l)||(l<95?a=!0:l>=99&&a&&(a=!1,e.push({t:o+(u+.5)*3e5,kind:"battery_full",entity:i})))})}if(t.solar.length){let i=t.solar.map(c=>un(r,c,o,r.end)),s=i[0].length,a=-1,l={t:0,w:0},u=()=>{l.w>100&&e.push({t:l.t,kind:"pv_peak",entity:t.solar[0]}),l={t:0,w:0}};for(let c=0;c<s;c++){let d=o+(c+.5)*3e5,f=F(d);f!==a&&(a>=0&&u(),a=f);let m=0;for(let h of i)Number.isNaN(h[c])||(m+=Math.max(0,h[c]));m>l.w&&(l={t:d,w:m})}a>=0&&(r.end>=ht(a)||t.sunDown?.(r.end))&&u()}return e}function fn({timeline:r,roles:t,weather:e,night:n=Tr,energy:o=null,outage:i=null}){let s=[],a=(f,m,h)=>{f>=r.start&&f<=r.end&&s.push({t:f,kind:m,entity:h})},l=e?r.tracks.get(e):void 0,u=l?j(l,Ar,r.end):[];for(let[f,m]of t){if(m==="washer"){for(let p of Pr(Fr(r,f)))a(p,"washer",f);continue}let h=r.tracks.get(f);if(h){if(m==="window"||m==="window_more"){for(let[p,g]of j(h,L,r.end)){m==="window"&&p>r.start&&p>h.times[0]&&a(p,"window",f);for(let[y,b]of u)p<b&&y<g&&a(Math.max(p,y),"rain",f)}continue}for(let p of ot(h))if(p.from!==null)switch(m){case"door":L.has(p.to)&&!L.has(p.from)&&!rt.has(p.from)&&a(p.t,"door",f);break;case"garage":(p.to==="on"||p.to==="open"||p.to==="opening")&&(p.from==="off"||p.from==="closed"||p.from==="closing")&&a(p.t,"garage",f);break;case"lock":(p.to==="unlocked"||p.to==="open")&&(p.from==="locked"||p.from==="locking")&&a(p.t,"lock",f);break;case"alarm":p.to==="triggered"&&a(p.t,"alarm",f);break;case"smoke":case"gas":case"co":case"water":p.to==="on"&&p.from!=="on"&&!rt.has(p.from)&&a(p.t,m,f);break;case"motion":p.to==="on"&&p.from==="off"&&n(p.t)&&a(p.t,"motion",f);break;case"camera":p.to==="on"&&p.from!=="on"&&!rt.has(p.from)&&a(p.t,"camera",f);break;case"robot":p.to==="cleaning"&&p.from!=="cleaning"&&p.from!=="paused"?a(p.t,"robot_start",f):p.to==="docked"&&(p.from==="cleaning"||p.from==="returning"||p.from==="paused")&&a(p.t,"robot_done",f);break}}}if(o)for(let f of Or(r,o))a(f.t,f.kind,f.entity);let c=i?r.tracks.get(i.id):void 0;if(i&&c){let f=m=>Ke({entity_id:i.id,state:m,attributes:i.attributes});for(let m of ot(c))m.from!==null&&f(m.to)&&!f(m.from)&&a(m.t,"outage",i.id)}s.sort((f,m)=>f.t-m.t||bt[m.kind]-bt[f.kind]);let d=new Map;return s.filter(f=>{let m=`${f.kind}:${f.entity}`,h=d.get(m),p=f.kind==="motion"?30*6e4:5*6e4;return h!==void 0&&f.t-h<p?!1:(d.set(m,f.t),!0)})}function dn(r,t){let e=[];for(let n=r.length-1;n>=0;n--){let o=r[n];if(!t.has(Yt[o.kind]))continue;let i=gt(o.t),s=e[e.length-1];s&&s.hour===i?s.events.unshift(o):e.push({hour:i,events:[o]})}return e}function pn(r,t,e=14){let n=[];for(let o of r){let i=t(o.t),s=n[n.length-1];s&&i-s.x<e?(s.events.push(o),bt[o.kind]>bt[s.top.kind]&&(s.top=o,s.t=o.t)):n.push({x:i,t:o.t,top:o,events:[o]})}return n}var zr="home3d.time_format",_t={};function Ir(r){_t.pref=r==="12"||r==="24"?r:"auto"}function Nr(){if(_t.pref===void 0)try{Ir(localStorage.getItem(zr))}catch{_t.pref="auto"}return _t.pref??"auto"}function mn(r,t){let e=Nr();if(e!=="auto")return e==="12";let n=r?.time_format;if(n==="12"||n==="am_pm")return!0;if(n==="24"||n==="twenty_four")return!1;try{let o=n==="system"?void 0:(r?.language||t||void 0)?.replace("_","-");return new Intl.DateTimeFormat(o,{hour:"numeric"}).resolvedOptions().hourCycle?.startsWith("h12")??!1}catch{return!1}}function Zt(r){return{h12:mn(r?.locale,r?.language),language:r?.language}}function Cr(r){return r?{hour12:!0}:{hourCycle:"h23"}}var hn=new Map;function Hr(r,t,e){let n=r?.replace("_","-"),o=`${n}|${e}|${JSON.stringify(t)}`,i=hn.get(o);if(!i){try{i=new Intl.DateTimeFormat(n,e?{...t,timeZone:e}:t)}catch{i=new Intl.DateTimeFormat(void 0,t)}hn.set(o,i)}return i}function gn(r,t,e={}){if(!Number.isFinite(+r))return"\u2013";let n={hour:t.h12?"numeric":"2-digit",minute:"2-digit",...e.seconds?{second:"2-digit"}:{},...Cr(t.h12)};return Hr(t.language,n,e.timeZone).format(r)}var vt=[60,360,900,3600],Xt=[60,360,900,3600,14400],bn=360;function yn(r,t){return r==="low"||t?500:r==="high"?167:250}var xt=class{start;end;t;playing=!1;speed;speeds;constructor(t,e,n,o=bn,i=vt){this.start=t,this.end=e,this.speeds=i,this.t=Math.min(e,Math.max(t,n)),this.speed=i.includes(o)?o:bn}setRange(t,e,n=this.speeds){this.start=t,this.end=e,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(e,Math.max(t,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(t){this.t=Math.min(this.end,Math.max(this.start,t))}advance(t){if(!this.playing||!(t>0))return!1;let e=Math.min(this.end,this.t+t*this.speed),n=e!==this.t;return this.t=e,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let t=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(t+1)%this.speeds.length],this.speed}};function _n(r,t,e,n=3e4){if(e>0)return r.find(o=>o.t>t+n)??null;for(let o=r.length-1;o>=0;o--)if(r[o].t<t-n)return r[o];return null}function xn(r,t,e){let n=0,o=r.length;for(;n<o;){let s=n+o>>1;r[s].t<t?n=s+1:o=s}let i=n;for(;i<r.length&&r[i].t<=e;)i++;return n===0&&i===r.length?r:r.slice(n,i)}function Jt(r,t,e,n){if(!(e>t))return null;let o=0,i=r.length;for(;o<i;){let s=o+i>>1;r[s].t<=t?o=s+1:i=s}for(let s=o;s<r.length&&r[s].t<=e;s++)if(n(r[s]))return r[s];return null}function wt(r,t){let e=(r??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(e);if(n)return t-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let o=/^(\d{1,2}):(\d{2})$/.exec(e);if(!o||Number(o[1])>23||Number(o[2])>59)return null;let i=Qt(t,Number(o[1]),Number(o[2]));return i>t?Qt(i-864e5,Number(o[1]),Number(o[2])):i}var it={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},kt=r=>We`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,Vr=60,Dr=(r,t)=>r-t>=Vr,vn={alarm:"#ff3b4f",smoke:"#ff3b4f",outage:"#ffc83a",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",camera:"#e07aff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},Lr={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},te=class extends O{static properties={session:{attribute:!1},demo:{type:Boolean},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this.demo=!1,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=t=>{let e=this.session,n=t.composedPath()[0];if(!(!e?.playback||t.ctrlKey||t.metaKey||t.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n?.isContentEditable))if(t.key===" "){if(n?.tagName==="BUTTON")return;t.preventDefault(),e.toggle()}else(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),e.seek(e.playback.t+(t.key==="ArrowLeft"?-1:1)*(t.shiftKey?36e5:3e5)))};onEscape=t=>{t.key!=="Escape"||!this._sheet||(t.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let t of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(t)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let t=this.renderRoot.querySelector(".track");t&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(e=>{let n=Math.round(e[0]?.contentRect.width??0);n!==this._w&&(this._w=n)}),this.resize.observe(t)),this.onTick()}signature(){let t=this.session,e=t?.playback,n=this._sheet==="day"&&e?F(e.t):0;return`${t?.state}|${t?.error}|${Math.round((t?.progress??0)*20)}|${e?.playing}|${e?.speed}|${t?.events.length}|${t?.allEvents.length}|${t?.range}|${t?.maxDays}|${t?.loadingDay}|${t?.full}|${t?.version}|${t?.atNow}|${t?.follow}|${t?.stopImportant}|${n}`}onTick(){let t=this.signature();t!==this.sig&&(this.sig=t,this.requestUpdate());let e=this.session,n=e?.playback;if(!e||!n)return;let o=this.renderRoot.querySelector(".clock-time"),i=this.renderRoot.querySelector(".clock-ago");o&&(o.textContent=this.clockText(n.t)),i&&(i.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(t){let e=this.renderRoot.querySelector(".head");e&&(e.style.transform=`translateX(${t.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(t){let e=this.session;return!e||!this._w?0:(t-e.start)/(e.end-e.start)*this._w}tOf(t){let e=this.session;return e.start+Math.min(this._w,Math.max(0,t))/Math.max(1,this._w)*(e.end-e.start)}weekday(t){return new Date(t).toLocaleDateString(this.language,{weekday:"short",...nt()}).replace(/\.$/,"")}clockText(t){return`${this.weekday(t)} ${this.time(t)}`}agoText(t){let e=this.session,n=Math.round((e.end-t)/6e4);return n<1?e.t("tt_now"):e.t("tt_ago",{d:this.duration(n*6e4)})}duration(t){let e=this.session,n=Math.round(t/6e4),o=Math.floor(n/1440),i=Math.floor(n%1440/60),s=n%60;return o?`${e.t("tt_days",{n:o})}${i?` ${i} h`:""}`:i?`${i} h${s?` ${s} min`:""}`:`${s} min`}name(t){let e=this.session;return e.names.get(t)??e.opts.live.states[t]?.attributes.friendly_name??t}eventText(t){return this.session.t(`tt_ev_${t.kind}`,{name:this.name(t.entity)})}time(t){return gn(t,Zt(this.session?.opts.live),nt())}onDown(t){let e=this.session;!e?.playback||t.target.closest(".mark")||(t.currentTarget.setPointerCapture?.(t.pointerId),this.dragging=!0,this._label=null,e.pause(),this.scrub(t,!0))}onMove(t){this.dragging&&this.scrub(t,!1)}onUp(t){this.dragging&&(this.scrub(t,!0),this.dragging=!1)}scrub(t,e){let n=this.session,o=this.renderRoot.querySelector(".track"),i=t.clientX-o.getBoundingClientRect().left,s=Math.max(n.playback?.start??n.start,this.tOf(i));this.placeHead(this.xOf(s));let a=this.renderRoot.querySelector(".clock-time");a&&(a.textContent=this.clockText(s)),clearTimeout(this.scrubTimer);let l=n.opts.spec.low||n.opts.quality==="low"?160:70,u=performance.now();e||u-this.scrubAt>=l?(this.scrubAt=u,n.seek(s)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(s)},l)}markDown(t){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(t)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(t){if(this.held){this.held=!1;return}this.session?.seek(t.t,!0),this.showLabel(t,2500)}showLabel(t,e=4500){this._label={x:t.x,lines:t.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(t.events.length>4?[`+${t.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,e)}renderTrack(){let t=this.session,e=this._w;if(!e)return w;let n=t.range==="7d",o=p=>`${((p-t.start)/(t.end-t.start)*100).toFixed(3)}%`,i=(p,g,y,b)=>g>p?v`<i class=${y} style="left:${o(Math.max(p,t.start))};width:calc(${o(Math.min(g,t.end))} - ${o(Math.max(p,t.start))})">${b?v`<span>${b}</span>`:w}</i>`:w,s=t.timeline?.oldest??null,a=t.playback?.start??t.start,l=t.recorderStart,u=w;a>t.start+6e4&&(t.loadingDay!==null?u=i(t.start,a,"loading",t.t("tt_loading_day",{day:this.weekday(t.loadingDay+12*36e5)})):l!==null&&l>t.start?u=i(t.start,a,"nodata",t.t("tt_recorder_days",{n:t.timeline?.keepDays??0})):u=i(t.start,a,"nodata",t.full?t.t("tt_memory_full"):""));let c=n?e/(t.end-t.start)*36e5*3>=12?3:6:1,d=e>=640?3:6,f=[],m=gt(t.start);for(m<t.start&&(m+=36e5);m<=t.end;m+=36e5){let p=K(m);if(p%c)continue;let g=p===0,y=g?n?`${this.weekday(m)} ${new Date(m).toLocaleDateString(this.language,{day:"numeric",...nt()}).replace(/\.$/,"")}.`:this.weekday(m):!n&&p%d===0?this.time(m):"",b=y&&Dr(e,this.xOf(m))?y:"";f.push(v`<b class="tick ${g?"tick-day":y?"tick-major":""}" style="left:${o(m)}">${b?v`<span>${b}</span>`:w}</b>`)}let h=`${e}|${t.events.length}|${t.start}|${t.end}|${t.version}|${a}`;return h!==this.clusterSig&&(this.clusterSig=h,this.clusters=pn(t.shownEvents(),p=>this.xOf(p),e<500?18:14)),v`${t.nights.map(([p,g])=>i(p,g,"night"))} ${u} ${s!==null&&s>a?i(a,s,"nodata"):w}
      ${t.gaps.map(([p,g])=>i(p,g,"gap"))} ${f}
      ${this.clusters.map(p=>v`<button
          class="mark ${p.events.length>1?"mark-many":""}"
          style="left:${p.x.toFixed(1)}px;--c:${vn[p.top.kind]}"
          title=${p.events.map(g=>`${this.time(g.t)} ${this.eventText(g)}`).join(`
`)}
          aria-label=${`${this.time(p.t)} ${this.eventText(p.top)}`}
          @pointerdown=${()=>this.markDown(p)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${g=>g.preventDefault()}
          @click=${()=>this.markClick(p)}
        >
          ${p.events.length>1?v`<span>${p.events.length}</span>`:w}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(t.playback?.t??t.end).toFixed(1)}px)"></div>
      ${this._label?v`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(p=>v`<span>${p}</span>`)}</div>`:w}`}toggleSheet(t="events"){this._sheet=this._sheet===t||this._sheet&&t==="events"?null:t}toggleFilter(t){let e=new Set(this._filters);e.has(t)?e.delete(t):e.add(t),this._filters=e}where(t){return this.session.roomOf.get(t)?.name??""}renderEvents(){let t=this.session,e=t.t,n=["safety","openings","devices",...t.energy?["energy"]:[]],o=dn(t.shownEvents(!0).filter(s=>t.energy||Yt[s.kind]!=="energy"),this._filters),i=0;return v`<div class="filters">
        ${n.map(s=>v`<button class="fchip" aria-pressed=${this._filters.has(s)} @click=${()=>this.toggleFilter(s)}>${e(`tt_f_${s}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${t.follow} @change=${s=>t.setFollow(s.target.checked)} />${e("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${t.stopImportant} @change=${s=>t.setStopImportant(s.target.checked)} />${e("tt_stop")}</label>
      ${o.length?o.map(s=>i>=300?w:(i+=s.events.length,v`<h4>${this.clockText(s.hour)}</h4>
              ${s.events.map(a=>this.row(vn[a.kind],this.time(a.t),this.eventText(a),this.where(a.entity),()=>t.goTo(a)))}`)):v`<p class="none">${e("tt_no_events")}</p>`}`}row(t,e,n,o,i){return v`<button class="row" @click=${i}>
      <i style="background:${t}"></i><time>${e}</time><span>${n}${o?v`<small>${o}</small>`:w}</span>
    </button>`}awayText(t){let e=this.session.t,n=this.name(t.entity);switch(t.kind){case"alarm":case"appliance":return this.eventText({kind:t.event??"alarm",entity:t.entity});case"door":case"window":return e("tt_away_door",{name:n,n:t.count});case"motion":return e("tt_away_motion",{name:n,n:t.count});case"light_on":return e("tt_away_light",{name:n,d:this.duration(t.ms)});case"window_open":return e("tt_away_open",{name:n,d:this.duration(t.ms)})}}renderAway(){let t=this.session,e=t.t,n=t.playback;this.awayOffer?.version!==t.version&&(this.awayOffer={version:t.version,offer:t.awayOffer()});let o=this.awayOffer.offer,[i,s]=this._awayFrom??o??[t.lastClosed!==null&&t.lastClosed>=n.start?t.lastClosed:Math.max(n.start,t.end-3*36e5),t.end],a=`${t.version}|${i}|${s}`;this.awayCache?.key!==a&&(this.awayCache={key:a,rows:t.away(i,s)});let l=this.awayCache.rows,u=g=>this._awayFrom=g,c=(g,y)=>`${this.clockText(g)} \u2013 ${y>=t.end-6e4?e("tt_now"):this.clockText(y)}`,d=Zt(t.opts.live).h12,f=g=>{let y=g.currentTarget.closest(".when"),b=M=>y.querySelector(`[data-p="${M}"]`)?.value??"";if(b("h")==="")return;let x=d?Number(b("h"))%12+(b("p")==="pm"?12:0):Number(b("h")),_=wt(`${x}:${String(Number(b("m"))).padStart(2,"0")}`,t.end);_!==null&&u([Math.max(n.start,_),t.end])},m=g=>String(g).padStart(2,"0"),h=d?[12,...Array.from({length:11},(g,y)=>y+1)]:Array.from({length:24},(g,y)=>y),p=v`<span class="when" role="group" aria-label=${e("tt_away_since")}>
      <select data-p="h" aria-label=${e("time_hour")} @change=${f}>
        <option value="">–</option>${h.map(g=>v`<option value=${g}>${d?g:m(g)}</option>`)}
      </select
      >:<select data-p="m" aria-label=${e("time_minute")} @change=${f}>${Array.from({length:12},(g,y)=>v`<option value=${y*5}>${m(y*5)}</option>`)}</select>
      ${d?v`<select data-p="p" aria-label="AM/PM" @change=${f}><option value="am">AM</option><option value="pm">PM</option></select>`:w}
    </span>`;return v`<p class="since">${e("tt_away_since")}:</p>
      <div class="filters">
        ${t.lastClosed!==null&&t.lastClosed>=n.start?v`<button class="fchip" aria-pressed=${i===t.lastClosed} @click=${()=>u([t.lastClosed,t.end])}>${e("tt_away_last")}</button>`:w}
        ${o?v`<button class="fchip" aria-pressed=${i===o[0]&&s===o[1]} @click=${()=>u(o)}>${e("tt_away_quiet",{from:this.time(o[0]),to:this.time(o[1])})}</button>`:w}
        ${p}
      </div>
      <h4>${c(i,s)}</h4>
      ${l.length?l.slice(0,200).map(g=>this.row(Lr[g.kind],this.time(g.t),this.awayText(g),this.where(g.entity),()=>t.goTo(g))):v`<p class="none">${e("tt_away_none")}</p>`}`}renderDay(){let t=this.session,e=t.t,n=t.playback,o=F(n.t),i=t.daySummary(o),s=F(o-12*36e5),a=this._compare?t.daySummary(s):null;this._compare&&(!a||a.from>s+6e4)&&queueMicrotask(()=>t.ensureLoaded(s));let l=(_,M)=>_&&_.from>M+6e4?e("tt_day_partial",{time:this.time(_.from)}):"",u=(_,M=1)=>_.toLocaleString(this.language,{maximumFractionDigits:M,minimumFractionDigits:M}),c=_=>_>=6e4?`${u(_/36e5)} h`:"\u2013",d=_=>_&&_.tMin!==null&&_.tMax!==null?`${u(_.tMin)}\u2013${u(_.tMax)}\xB0`:"\u2013",f=_=>v`<td>${_?c(_.lightMs):"\u2013"}</td><td>${_?c(_.windowMs):"\u2013"}</td><td>${_?c(_.heatMs):"\u2013"}</td><td>${d(_)}</td>`,m=new Date(o).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...nt()}),h=_=>_?.energy??null,p=h(i),g=h(a),y=_=>_===void 0?"\u2013":`${u(_)} kWh`,b=_=>_==null?"\u2013":`${Math.round(_*100)} %`,x=this._compare?a?l(a,s):t.loadingDay!==null?e("tt_loading"):"":"";return v`<h4>${e("tt_day_title",{day:m})}</h4>
      ${l(i,o)?v`<p class="since">${l(i,o)}</p>`:w}
      ${x?v`<p class="since">${e("tt_day_before")}: ${x}</p>`:w}
      <div class="filters">
        <button class="fchip" @click=${()=>t.yesterday()}>⟲ ${e("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${e("tt_day_compare")}</button>
      </div>
      ${i&&(i.rooms.length||p)?v`${i.rooms.length?v`<table>
                  <thead>
                    <tr><th></th><th>${e("tt_day_light")}</th><th>${e("tt_day_window")}</th><th>${e("tt_day_heat")}</th><th>${e("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${i.rooms.map(_=>v`<tr><th>${_.name}</th>${f(_)}</tr>
                        ${a?v`<tr class="before"><th>${e("tt_day_before")}</th>${f(a.rooms.find(M=>M.roomId===_.roomId))}</tr>`:w}`)}
                  </tbody>
                </table>`:w}
            ${p?v`<div class="energy">
                  ${[["tt_day_pv",y(p.pv),y(g?.pv)],["tt_day_use",y(p.use),y(g?.use)],["tt_day_import",y(p.imp),y(g?.imp)],["tt_day_export",y(p.exp),y(g?.exp)],["tt_day_self",b(p.self),b(g?.self)]].map(([_,M,R])=>v`<span>${e(_)}</span><b>${M}</b>${a?v`<em>${R}</em>`:w}`)}
                </div>`:w}`:v`<p class="none">${e("tt_day_none")}</p>`}`}renderSheet(){let e=this.session.t,n=this._sheet,o=["events","away","day"];return v`<aside class="sheet" role="dialog" aria-label=${e("tt_sheet")}>
      <header>
        ${o.map(i=>v`<button class="tab" aria-pressed=${n===i} title=${i==="away"?e("tt_away_title"):w} @click=${()=>this._sheet=i}>${e(i==="events"?"tt_tab_events":i==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${e("tt_close")} aria-label=${e("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let t=this.session;if(!t)return w;let e=t.t,n=t.playback,o=t.state==="ready"&&!!n,i=t.state==="error"?t.error==="no_recorder"?e("tt_no_recorder"):t.error==="unknown_command"?e("tt_restart"):e("tt_error",{error:t.error??"?"}):null,s=n?3600/n.speed:10,a=Math.round((t.end-t.start)/6e4);return v`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${e("tt_badge")}${this.demo?v`<em class="demo" title=${e("demo_hint")}>${e("demo_chip")}</em>`:w}</span>
        ${o?v`<b class="clock-time"></b><span class="clock-ago"></span>`:v`<span class="clock-msg">${i??`${e("tt_loading")} ${Math.round(t.progress*100)} %`}</span>`}
      </div>
      ${this._toast?v`<div class="toast" role="alert">${e("tt_readonly")}</div>`:w}
      ${o&&this._sheet?this.renderSheet():w}
      <div class="bar">
        <button class="btn prev" ?disabled=${!o} title=${e("tt_prev")} aria-label=${e("tt_prev")} @click=${()=>t.step(-1)}>${kt(it.prev)}</button>
        <button class="btn play" ?disabled=${!o} title=${e(n?.playing?"tt_pause":"tt_play")} aria-label=${e(n?.playing?"tt_pause":"tt_play")} @click=${()=>t.toggle()}>
          ${kt(n?.playing?it.pause:it.play)}
        </button>
        <button class="btn next" ?disabled=${!o} title=${e("tt_next")} aria-label=${e("tt_next")} @click=${()=>t.step(1)}>${kt(it.next)}</button>
        <div
          class="track ${o?"":"track-wait"}"
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
          ${o?this.renderTrack():i?v`<em class="msg">${i}</em>`:v`<i class="progress" style="width:${Math.round(t.progress*100)}%"></i>`}
        </div>
        ${i?v`<button class="chip" @click=${()=>{t.load()}}>${e("tt_retry")}</button>`:w}
        <button class="chip range" ?disabled=${!o} title=${e("tt_range_hint")} aria-label=${e("tt_range_hint")} @click=${()=>t.setRange(t.range==="7d"?"24h":"7d")}>
          ${t.range==="7d"?e("tt_days",{n:t.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!o} aria-pressed=${!!this._sheet} title=${e("tt_sheet")} aria-label=${e("tt_sheet")} @click=${()=>this.toggleSheet()}>${kt(it.list)}</button>
        <button class="chip speed" ?disabled=${!o} title=${e("tt_speed",{s:s>=60?"1 min":s>=1?`${Math.round(s)} s`:`${s.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>t.nextSpeed()}>
          ${n?.speed??360}×
        </button>
        <button class="chip live ${t.atNow?"live-now":""}" title=${e("tt_live_hint")} @click=${()=>t.exit()}>
          <i></i>${t.atNow?`${e("tt_now_reached")} \xB7 ${e("tt_live")}`:e("tt_live")}
        </button>
      </div>`}static styles=Pt`
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
    .demo {
      margin-left: 8px;
      padding: 1px 7px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      font-style: normal;
      font-weight: 600;
      letter-spacing: 0.04em;
      color: var(--fp3d-text, #e6eefc);
      cursor: help;
      pointer-events: auto;
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
      /* a gutter at the end: the handle and the last label stay clear of the chip beside the track (#257) */
      margin: 0 12px 0 4px;
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
      display: inline-flex;
      align-items: center;
      gap: 2px;
      font-size: 12px;
      color-scheme: dark;
    }
    .when select {
      font: inherit;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      border-radius: 999px;
      padding: 3px 4px;
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
    /* phones and narrow cards: two rows, the track and the way back to the present on top, the buttons below (#257);
       the bar grows upwards from the bottom edge (the safe area included), never past it */
    @container fp3dtt ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
      .bar {
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        row-gap: 3px;
        height: auto;
        bottom: calc(8px + env(safe-area-inset-bottom, 0px));
        padding: 6px 8px;
      }
      /* the line break between the two rows */
      .bar::after {
        content: "";
        order: -1;
        flex: 1 0 100%;
        height: 0;
      }
      .track {
        order: -2;
        flex: 1 1 0;
        margin: 14px 4px 0 0;
      }
      .live {
        order: -1;
        margin-top: 14px;
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
  `};Se("fp3d-time-bar",te);var Wr=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:Ms,pending:Ss}=Wr;var Ur=new Map;function ee(r,t){return Ur.get(t)??Kr(r,t)}function Kr(r,t){let e=r.entities?.[t]?.device_id;return e?Object.values(r.entities??{}).filter(n=>n.device_id===e&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(r.states[n]?.attributes.device_class))):[]}var jr=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),Gr=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),qr=600,ne=r=>r.slice(0,r.indexOf("."));function Qr(r,t){let e=r.states[t];return!t.startsWith("sensor.")||!e||e.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(e.state))||e.state==="unavailable"||e.state==="unknown"}var wn=new Set(["geocoded_location","location"]),Yr=/location|address|geocoded|ssid|bssid|standort|adresse/i;function Zr(r,t){let e=r.states[t]?.attributes??{},n=r.entities?.[t]?.translation_key??"";return wn.has(String(e.device_class??""))||wn.has(n)||"latitude"in e||"longitude"in e?!0:Yr.test(`${t} ${String(e.friendly_name??"")} ${n}`)}function Sn(r){let t=new Set;for(let e of Object.values(r.states))if(e.entity_id.startsWith("person.")&&Array.isArray(e.attributes.device_trackers))for(let n of e.attributes.device_trackers)typeof n=="string"&&t.add(n);return t}function Xr(r,t=Sn(r)){let e=new Set;for(let n of t){let o=r.entities?.[n]?.device_id;o&&e.add(o)}return e}function re(r,t,e,n=qr){let o=new Set(t.presence.flatMap(b=>[b.person,b.sensor]).filter(b=>!!b)),i=Sn(r);for(let b of i)o.add(b);let s=Xr(r,i),a=new Set((e.cars??[]).filter(b=>b.startsWith("device_tracker.")&&!o.has(b)&&!!r.states[b])),l=new Set(t.floors.flatMap(b=>b.rooms.map(x=>x.area_id)).filter(b=>!!b)),u=[];for(let[b,x]of Object.entries(r.entities??{})){if(!x.area_id&&x.device_id){let _=r.devices?.[x.device_id];if(!_?.area_id||!l.has(_.area_id))continue}else if(!x.area_id||!l.has(x.area_id))continue;x.hidden||x.entity_category||!Gr.has(ne(b))||u.push(b)}let c=Object.keys(r.states).filter(b=>b.startsWith("weather.")),d=t.floors.flatMap(b=>b.placements.filter(x=>x.entity_id.startsWith("camera.")).flatMap(x=>ee(r,x.entity_id))),f=[...new Set([...a,...e.entities,...d,"sun.sun",...t.settings.weather_entity?[t.settings.weather_entity]:[],...t.settings.outage_entity?[t.settings.outage_entity]:[],...c.slice(0,1),...u])],m=[],h=f.filter(b=>{if(!b.includes(".")||!a.has(b)&&jr.has(ne(b))||o.has(b)||!r.states[b])return!1;if(a.has(b))return!0;let x=r.entities?.[b]?.device_id;return x&&s.has(x)||Zr(r,b)?(m.push(b),!1):!0}),p=h.slice(0,n),g=p.filter(b=>Qr(r,b)),y=new Set(g);return{entities:p.filter(b=>!y.has(b)),stats:g,overflow:h.slice(n),cars:p.filter(b=>a.has(b)),hidden:m}}var kn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},Jr=new Set(["front","front_glass","sidelight","sidelights"]),to=new Set(["washer","dryer","dishwasher"]);function Mn(r,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[i,s]=t[n],[a,l]=t[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(e=!e)}return e}function eo(r,t){if(t.type!=="door"||t.wall)return!1;if(t.style&&Jr.has(t.style))return!0;if(t.style)return!1;let e=r.rooms.find(d=>d.id===t.room_id);if(!e||e.points.length<3)return!1;let n=e.points[t.edge],o=e.points[(t.edge+1)%e.points.length];if(!n||!o)return!1;let i=Math.hypot(o[0]-n[0],o[1]-n[1]);if(i<1e-6)return!1;let s=(o[0]-n[0])/i,a=(o[1]-n[1])/i,l=[n[0]+s*t.offset,n[1]+a*t.offset],u=d=>[l[0]-a*d,l[1]+s*d],c=Mn(u(.3),e.points)?u(-.4):u(.4);return!r.rooms.some(d=>d.id!==e.id&&d.points.length>=3&&Mn(c,d.points))}function oe(r,t,e){let n=new Map,o=new Map(e.furniture);for(let i of t.floors)for(let s of i.furniture){if(!to.has(s.type))continue;let a=o.get(s.id)?.power,l=i.placements.find(c=>r.states[c.entity_id]?.attributes.device_class==="power"&&Math.hypot(c.x-s.x,c.z-s.z)<=1.2)?.entity_id,u=a??l;u&&!n.has(u)&&n.set(u,s)}return n}function Rn(r,t,e,n){let o=new Map,i=(a,l)=>{a&&n.has(a)&&!o.has(a)&&o.set(a,l)},s=new Map(e.openings);for(let a of t.floors)for(let l of a.openings){let u=s.get(l.id);if(u)if(l.type==="garage")for(let c of[u.contact,u.cover])i(c,"garage");else if(l.type==="door"){if(eo(a,l))for(let c of[u.contact,u.contact2])i(c,"door")}else[u.contact,u.tilt,u.contact2,u.tilt2].filter(d=>!!d&&n.has(d)).forEach((d,f)=>i(d,f?"window_more":"window"))}for(let a of oe(r,t,e).keys())i(a,"washer");for(let a of t.floors)for(let l of a.placements)if(l.entity_id.startsWith("camera."))for(let u of ee(r,l.entity_id))i(u,"camera");for(let a of n){if(o.has(a))continue;let l=ne(a),u=String(r.states[a]?.attributes.device_class??"");l==="lock"?i(a,"lock"):l==="alarm_control_panel"?i(a,"alarm"):l==="vacuum"?i(a,"robot"):l==="weather"?i(a,"weather"):l==="cover"&&(u==="garage"||u==="gate")?i(a,"garage"):l==="binary_sensor"&&(kn[u]?i(a,kn[u]):u==="garage_door"?i(a,"garage"):u==="motion"&&i(a,"motion"))}return o}var no={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function ro(r,t){if(r==="rgb_color")return Array.isArray(t)&&t.every(e=>typeof e=="number")?t.map(e=>Math.round(e)):null;if(typeof t!="number"||!Number.isFinite(t))return t;switch(r){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(t/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(t/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(t);case"volume_level":return Math.round(Math.round(t*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(t*10)/10;default:return t}}function oo(r){return r==="home"||r==="unavailable"||r==="unknown"?r:"not_home"}function ie(r){let t=r.entity_id.slice(0,r.entity_id.indexOf("."));if(t==="device_tracker")return{s:oo(r.state),a:null};let e=no[t];if(!e?.length)return{s:r.state,a:null};let n={};for(let o of e){let i=r.attributes[o];if(i==null)continue;let s=ro(o,i);s!=null&&(n[o]=s)}return{s:r.state,a:Object.keys(n).length?n:null}}var se=3e5,En=2e4,io=[6e4,se,15*6e4,36e5],so=(r,t)=>r.startsWith("sensor.")&&t.state!==""&&Number.isFinite(Number(t.state));function ao(r,t){let e=[];for(let n of r){let o=e[e.length-1];o&&Math.floor(o.t/t)===Math.floor(n.t/t)?e[e.length-1]=n:e.push(n);let i=e[e.length-2];i&&i.k===e[e.length-1].k&&e.pop()}return e}var Mt=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(t,e,n=Date.now()){this.ids=t,this.startStates=e,this.startedAt=n;for(let o of t)this.seen.set(o,e[o]),e[o]&&this.lastKey.set(o,z(ie(e[o])))}get pending(){return this.count}record(t,e){for(let n of this.ids){let o=t[n];if(o===this.seen.get(n)||(this.seen.set(n,o),!o))continue;let i=ie(o),s=z(i);if(this.lastKey.get(n)===s)continue;let a=this.rows.get(n),l=a?.[a.length-1],u=Date.parse(o.last_updated??o.last_changed??""),c=Math.max(Number.isFinite(u)?Math.min(e,u):e,l?.t??-1/0);if(l&&so(n,o)&&Math.floor(l.t/se)===Math.floor(c/se)){a[a.length-1]={t:c,v:i,k:s},this.lastKey.set(n,s);continue}this.lastKey.set(n,s),a?a.push({t:c,v:i,k:s}):this.rows.set(n,[{t:c,v:i,k:s}]),this.count++}this.count>En&&this.compact()}compact(){for(let t of io){let e=0;for(let[n,o]of this.rows){let i=ao(o,t);this.rows.set(n,i),e+=i.length}if(this.count=e,e<=En/2)return}}flush(t,e){let n=0,o=0;for(let i of this.ids){if(this.seeded.has(i)||t.tracks.has(i)||t.series.has(i))continue;this.seeded.add(i);let s=this.startStates[i],a=[...s?[{t:this.startedAt,v:ie(s)}]:[],...this.rows.get(i)??[]],l=on(i,a);this.rows.delete(i),l&&(t.tracks.set(i,l),t.missing.delete(i),o++,n+=l.times.length)}for(let[i,s]of this.rows){let a=t.tracks.get(i);if(a){n+=jt(a,s);continue}let l=t.series.get(i);l&&(n+=rn(l,s.map(u=>({t:u.t,value:Number(u.v.s)}))))}return this.rows=new Map,this.count=0,t.end=Math.max(t.end,e),{added:n,created:o}}};function $n(r,t,e){if(!(t.state==="opening"||t.state==="closing")||t.pos===null||!e||e.pos===null)return t.pos;let o=e.t-t.t;return!(o>0)||o>18e4||r<=t.t?t.pos:r>=e.t?e.pos:Math.round(t.pos+(e.pos-t.pos)*(r-t.t)/o)}var k=Math.PI/180;function St(r,t,e){let n=(e/864e5+24405875e-1-2451545)/36525,o=(280.46646+n*(36000.76983+n*3032e-7))%360,i=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(i*k)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*i*k)*(.019993-101e-6*n)+Math.sin(3*i*k)*289e-6,l=125.04-1934.136*n,u=o+a-.00569-.00478*Math.sin(l*k),d=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*k),f=Math.asin(Math.sin(d*k)*Math.sin(u*k)),m=Math.tan(d/2*k)**2,h=4/k*(m*Math.sin(2*o*k)-2*s*Math.sin(i*k)+4*s*m*Math.sin(i*k)*Math.cos(2*o*k)-.5*m*m*Math.sin(4*o*k)-1.25*s*s*Math.sin(2*i*k)),g=(((e/6e4%1440+1440)%1440+h+4*t)%1440+1440)%1440,y=(g/4<0?g/4+180:g/4-180)*k,b=r*k,x=Math.min(1,Math.max(-1,Math.sin(b)*Math.sin(f)+Math.cos(b)*Math.cos(f)*Math.cos(y))),_=Math.acos(x),M=90-_/k;M+=lo(M);let R=Math.cos(b)*Math.sin(_),q=180;if(Math.abs(R)>1e-9){let ge=Math.acos(Math.min(1,Math.max(-1,(Math.sin(b)*Math.cos(_)-Math.sin(f))/R)))/k;q=y>0?(ge+180)%360:(540-ge)%360}return{elevation:M,azimuth:q}}function lo(r){if(r>85)return 0;let t=Math.tan(r*k);return(r>5?58.1/t-.07/t**3+86e-6/t**5:r>-.575?1735+r*(-518.2+r*(103.4+r*(-12.79+r*.711))):-20.772/t)/3600}function ae(r,t,e){return St(r,t,e).elevation<-.833}function An(r,t,e,n,o=5*6e4){let i=[],s=null;for(let a=e;a<=n;a+=o){let l=ae(r,t,a);l&&s===null&&(s=a),!l&&s!==null&&(i.push([s,a]),s=null)}return s!==null&&i.push([s,n]),i}var ce=class extends Error{constructor(t){super(`Time travel is read-only: ${t}`),this.name="ReplayReadOnly"}},uo=new Set(["home_3d/building/get","home_3d/image/get","home_3d/packs/list","home_3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),co=new Set(["home_3d/building/subscribe"]),le={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},Tn=["person.","device_tracker."],ue=r=>r.slice(0,r.indexOf("."));function Rt(r,t){if(!t?.some(n=>n in r))return r;let e={...r};for(let n of t)delete e[n];return e}function st(r){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:r}})),new ce(r)}function fo(r,t){let e=r,n={...r,states:t};n.callService=(o,i)=>st(`${o}.${i}`),n.callWS=o=>uo.has(String(o.type))?r.callWS(o):st(String(o.type)),n.connection={subscribeMessage:(o,i)=>co.has(String(i.type))?r.connection.subscribeMessage(o,i):st(String(i.type))};for(let o of["callApi","callApiRaw"]){let i=e[o];typeof i=="function"&&(n[o]=(s,...a)=>String(s).toUpperCase()==="GET"?i.call(r,s,...a):st(`${s} ${String(a[0])}`))}for(let o of["sendWS","fetchWithAuth"])o in e&&(n[o]=()=>st(o));return n}var po=new Set(["light","switch","input_boolean","binary_sensor","fan"]),Et=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(t,e){this.timeline=t,this.cursor=new U(t),this.cursor.tracks.forEach((o,i)=>this.trackAt.set(o.id,i)),this.location=e.location??null,this.frozen=e.states??null;let n=new Set([...e.allowed??[]].filter(o=>o.startsWith("device_tracker.")));this.requested=[...new Set([...e.requested,...t.tracks.keys(),...t.series.keys()])].filter(o=>n.has(o)||!Tn.some(i=>o.startsWith(i)))}refresh(){let t=this.cursor.t;this.cursor=new U(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((e,n)=>this.trackAt.set(e.id,n)),Number.isFinite(t)&&this.cursor.at(t)}hassAt(t,e,n=!0){let o=this.frozen??=t.states,i=!1;if(!this.base){this.base={};for(let[l,u]of Object.entries(o))Tn.some(c=>l.startsWith(c))||(this.base[l]=l.startsWith("camera.")&&u.attributes.entity_picture?{...u,attributes:Rt(u.attributes,["entity_picture","access_token"])}:u);i=!0}this.sameContext(t)||(this.live=t,i=!0);let s=!n&&e>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(e),this.pulses=s?this.findPulses(s):[];let a=[];for(let l of this.requested){let u=this.slots.get(l),c=this.slot(l,e,o[l],u);c!==u&&(this.slots.set(l,c),a.push(l))}if(!i&&!a.length&&this.hass)return this.hass;if(i){this.states={...this.base};for(let l of this.requested){let u=this.slots.get(l);u&&(this.states[l]=u.obj)}}else{this.states={...this.states};for(let l of a)this.states[l]=this.slots.get(l).obj}return this.hass=fo(this.live,this.states),this.hass}findPulses(t){let e=[],n=this.cursor.idx;for(let o=0;o<n.length;o++){let i=t[o],s=n[o];if(i<0||s-i<2)continue;let a=this.cursor.tracks[o];if(!po.has(ue(a.id)))continue;let l=a.values[a.vals[i]].s;if(a.values[a.vals[s]].s===l){for(let u=i+1;u<s;u++)if(a.values[a.vals[u]].s!==l){e.push(a.id);break}}}return e}sameContext(t){let e=this.live;if(!e)return!1;if(e===t)return!0;let n=t;for(let o in n)if(o!=="states"&&n[o]!==e[o])return!1;for(let o in e)if(!(o in n))return!1;return!0}slot(t,e,n,o){let i=this.trackAt.get(t),s=this.timeline.series.get(t),a,l;if(t==="sun.sun"&&this.location){let u=St(this.location.lat,this.location.lon,e),c=Math.round(u.elevation*2)/2,d=Math.round(u.azimuth*2)/2,f=St(this.location.lat,this.location.lon,e+6e5).elevation>u.elevation;a=`${c}|${d}|${f}`,l=()=>({entity_id:t,state:u.elevation>-.833?"above_horizon":"below_horizon",attributes:{...Rt(n?.attributes??{},le.sun),elevation:c,azimuth:d,rising:f}})}else if(i!==void 0&&this.cursor.idx[i]>=0){let u=this.cursor.tracks[i],c=this.cursor.idx[i],d=u.values[u.vals[c]],f=t.startsWith("cover.")?this.coverPos(u,c,e):null;a=f===null?`${c}`:`${c}:${f}`,l=()=>{let m={...Rt(n?.attributes??{},le[ue(t)]),...d.a??{}};f!==null&&(m.current_position=f),t==="sun.sun"&&m.elevation===void 0&&Object.assign(m,{elevation:d.s==="above_horizon"?25:-12,azimuth:180});let h=u.since[c];return h>this.timeline.start?{entity_id:t,state:d.s,attributes:m,last_changed:new Date(h).toISOString()}:{entity_id:t,state:d.s,attributes:m}}}else if(s){let u=V(s,e),c=this.stepOf(t,s,n),d=qe(u,c);a=`n${d}`,l=()=>({entity_id:t,state:d,attributes:n?.attributes??{},last_changed:new Date(e).toISOString()})}else a="none",l=()=>({entity_id:t,state:"unknown",attributes:Rt(n?.attributes??{},le[ue(t)])});return o&&o.key===a&&o.attrs===n?.attributes?o:{key:a,attrs:n?.attributes,obj:l()}}coverPos(t,e,n){let o=t.values[t.vals[e]];if(o.s!=="opening"&&o.s!=="closing")return null;let i=a=>typeof a.a?.current_position=="number"?a.a.current_position:null,s=e+1<t.times.length?{t:t.times[e+1],pos:i(t.values[t.vals[e+1]])}:null;return $n(n,{t:t.times[e],state:o.s,pos:i(o)},s)}stepOf(t,e,n){let o=this.steps.get(t);if(o===void 0){let i=e.mean.find(s=>!Number.isNaN(s))??0;o=Ge(n?.attributes.unit_of_measurement,this.live?.entities?.[t]?.display_precision,i),this.steps.set(t,o)}return o}rows(t,e,n){let o={};for(let i of t){let s=this.timeline.tracks.get(i);if(!s)continue;let a=[];for(let l=Math.max(0,S(s.times,e));l<s.times.length&&s.times[l]<=n;l++)a.push({s:s.values[s.vals[l]].s,lu:s.times[l]/1e3});a.length&&(o[i]=a)}return o}};var Fn=new Set(["cleaning","paused","returning"]),mo=new Set(["","unknown","unavailable","none","null"]);function Pn(r,t,e){if(!r)return[];let n=u=>r.values[r.vals[u]].s,o=S(r.times,e);if(o<0||!Fn.has(n(o)))return[];let i=o;for(;i>0&&Fn.has(n(i-1));)i--;let s=r.times[i],a=[],l=u=>{let c=typeof u=="string"?u.trim():"";!mo.has(c.toLowerCase())&&a[a.length-1]!==c&&a.push(c)};if(t){let u=Math.max(0,S(t.times,s));for(t.times[u]<s-6e4&&u++;u<t.times.length&&t.times[u]<=e;u++)l(t.values[t.vals[u]].s)}else for(let u=i;u<=o;u++)l(r.values[r.vals[u]].a?.current_room);return a}var fe=r=>r.slice(0,r.indexOf("."));function ho(r,t){let e=r.entities?.[t];return e?e.area_id??(e.device_id?r.devices?.[e.device_id]?.area_id??null:null):null}function On(r,t,e){let n=[],o=new Map;for(let a of Object.keys(r.entities??{})){let l=ho(r,a);l&&o.set(l,[...o.get(l)??[],a])}let i=new Map(e.openings),s=new Map(e.furniture);for(let a of t.floors)for(let l of a.rooms){if(l.points.length<3)continue;let u=new Set(l.area_id?o.get(l.area_id)??[]:[]);for(let m of a.placements)$([m.x,m.z],l.points)&&u.add(m.entity_id);for(let m of a.furniture){let h=s.get(m.id);h?.entity&&$([m.x,m.z],l.points)&&u.add(h.entity)}let c=[];for(let m of a.openings){if(m.room_id!==l.id)continue;let h=i.get(m.id),p=h?[h.contact,h.tilt,h.contact2,h.tilt2].filter(g=>!!g):[];for(let g of p)u.add(g);p.length&&m.type!=="door"&&m.type!=="garage"&&c.push(p)}let d=[...u].filter(m=>!!r.states[m]),f=m=>r.states[m]?.attributes.device_class;n.push({floorId:a.id,roomId:l.id,name:l.name,lights:d.filter(m=>fe(m)==="light"),windows:c,climates:d.filter(m=>fe(m)==="climate"),temps:d.filter(m=>fe(m)==="sensor"&&f(m)==="temperature"),all:d})}return n}function zn(r){let t=new Map;for(let e of r)for(let n of e.all)t.has(n)||t.set(n,e);return t}var de=36e5;function at(r,t,e){let n=r.map(([i,s])=>[Math.max(i,t),Math.min(s,e)]).filter(([i,s])=>s>i);n.sort((i,s)=>i[0]-s[0]);let o=[];for(let i of n){let s=o[o.length-1];s&&i[0]<=s[1]?s[1]=Math.max(s[1],i[1]):o.push([i[0],i[1]])}return o}var $t=r=>r.reduce((t,[e,n])=>t+(n-e),0);function go(r,t,e){let n=[],o=null;for(let i=0;i<r.times.length;i++){let s=t(r.values[r.vals[i]]);s&&o===null&&(o=r.times[i]),!s&&o!==null&&(n.push([o,r.times[i]]),o=null)}return o!==null&&e>o&&n.push([o,e]),n}function Nn(r,t,e,n,o=2*de){let i=at(t.flatMap(l=>{let u=r.tracks.get(l);return u?j(u,L,r.end):[]}),e,n);if(!t.some(l=>r.tracks.has(l)))return[];let s=[],a=e;for(let[l,u]of i)l-a>=o&&s.push([a,l]),a=Math.max(a,u);return n-a>=o&&s.push([a,n]),s}function Cn(r){for(let t=r.length-1;t>=0;t--){let[e,n]=r[t],o=0;for(let i=e;i<n;i+=6e5){let s=K(i);s>=7&&s<22&&(o+=Math.min(6e5,n-i))}if(o>=de)return[e,n]}return null}var In=["alarm","door","window","window_open","light_on","motion","appliance"];function Hn(r){let{timeline:t,roles:e,events:n,from:o,to:i}=r,s=[],a=new Map,l=(c,d,f)=>{let m=`${c}:${d}`,h=a.get(m);if(h)h.count++,h.t=Math.min(h.t,f);else{let p={kind:c,entity:d,t:f,count:1,ms:0};a.set(m,p),s.push(p)}};for(let c of n)c.t<o||c.t>i||(yt.has(c.kind)||c.kind==="rain"?s.push({kind:"alarm",entity:c.entity,t:c.t,count:1,ms:0,event:c.kind}):c.kind==="door"||c.kind==="garage"||c.kind==="lock"?l("door",c.entity,c.t):c.kind==="window"?l("window",c.entity,c.t):(c.kind==="washer"||c.kind==="robot_done")&&s.push({kind:"appliance",entity:c.entity,t:c.t,count:1,ms:0,event:c.kind}));for(let c of r.motion){let d=t.tracks.get(c);if(d){for(let f of ot(d))f.from!==null&&f.t>=o&&f.t<=i&&f.to==="on"&&f.from!=="on"&&!rt.has(f.from)&&l("motion",c,f.t);if(d.dropped)for(let f of d.dropped)f>=o&&f<=i&&l("motion",c,f)}}let u=(c,d,f,m)=>{let h=at(f,o,i),p=$t(h);(p>=m||h.length&&h[h.length-1][1]>=i&&p>=6e4)&&s.push({kind:c,entity:d,t:h[0][0],count:h.length,ms:p})};for(let c of r.lights){let d=t.tracks.get(c);d&&u("light_on",c,j(d,bo,t.end),15*6e4)}for(let[c,d]of e){if(d!=="window"&&d!=="window_more")continue;let f=t.tracks.get(c);f&&u("window_open",c,j(f,L,t.end),30*6e4)}return s.sort((c,d)=>In.indexOf(c.kind)-In.indexOf(d.kind)||(c.kind==="light_on"||c.kind==="window_open"?d.ms-c.ms:c.t-d.t))}var bo=new Set(["on"]);function yo(r,t,e,n){let o=1/0,i=-1/0,s=r.series.get(t);if(s)for(let a=0;a<s.mean.length;a++){let l=s.start+(a+.5)*s.step,u=s.mean[a];l<e||l>n||Number.isNaN(u)||(o=Math.min(o,u),i=Math.max(i,u))}else{let a=r.tracks.get(t);if(a)for(let l=Math.max(0,S(a.times,e));l<a.times.length&&a.times[l]<=n;l++){let u=Number(a.values[a.vals[l]].s);Number.isFinite(u)&&(o=Math.min(o,u),i=Math.max(i,u))}}return Number.isFinite(o)?[o,i]:null}function Vn(r,t,e,n,o=null){let i=Math.min(n,r.end),s=[],a=(l,u)=>l.flatMap(c=>{let d=r.tracks.get(c);return d?go(d,u,r.end):[]});for(let l of t){let u=$t(at(a(l.lights,h=>h.s==="on"),e,i)),c=$t(at(a(l.windows.flat(),h=>L.has(h.s)),e,i)),d=$t(at(a(l.climates,h=>h.a?.hvac_action==="heating"),e,i)),f=null,m=null;for(let h of l.temps){let p=yo(r,h,e,i);p&&(f=f===null?p[0]:Math.min(f,p[0]),m=m===null?p[1]:Math.max(m,p[1]))}(u||c||d||f!==null)&&s.push({roomId:l.roomId,name:l.name,lightMs:u,windowMs:c,heatMs:d,tMin:f,tMax:m})}return{from:e,to:n,rooms:s,energy:o}}function _o(r,t,e){let n=r.series.get(t);if(n){let s=V(n,e);return Number.isFinite(s)?String(s):null}let o=r.tracks.get(t);if(!o)return null;let i=S(o.times,e);return i<0?null:o.values[o.vals[i]].s}function Dn(r,t,e,n,o,i){let s={};for(let a of o){let l=_o(r,a,i);l!==null&&(s[a]={entity_id:a,state:l,attributes:t[a]?.attributes??{}})}return we({states:s},e,[],n)}function Ln(r,t){let e=r.energy;return[...new Set([e.grid,e.solar,e.battery,e.battery_soc,e.consumption,...(e.systems??[]).flatMap(n=>[n.grid,n.solar,n.battery,n.battery_soc]),t.grid,t.gridExport,...t.solar,...t.battery,...t.charge,...t.soc].filter(n=>!!n))]}function Wn(r,t,e,n=3e5){let o=0,i=0,s=0,a=0,l=!1,u=n/de/1e3;for(let c=t+n/2;c<e;c+=n){let d=r(c);d.solar===null&&d.grid===null&&d.consumption===null||(l=!0,o+=Math.max(0,d.solar??0)*u,i+=Math.max(0,d.grid??0)*u,s+=Math.max(0,-(d.grid??0))*u,a+=Math.max(0,d.consumption??0)*u)}return l?{pv:o,imp:i,exp:s,use:a,self:a>0?Math.min(1,Math.max(0,1-i/a)):null}:null}var A=24*36e5,pe=150,me=250,xo=10*1024*1024,vo=6e4,wo=6e4,Bn=1e4;function G(r,t){try{return t!==void 0&&localStorage.setItem(`fp3d-tt-${r}`,t),localStorage.getItem(`fp3d-tt-${r}`)}catch{return null}}var he=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=G("follow")==="1";stopImportant=G("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{document.hidden||!this.playback?.playing||(this.last=performance.now(),this.schedule())};constructor(t){this.opts=t,this.live=t.live,this.startStates=t.live.states,this.quality=t.quality,this.low=t.spec.low,this.t=t.t,qt(Gt(t.live)),this.end=Date.now(),this.range=t.range==="7d"?"7d":"24h";let e=Number(G("closed"));this.lastClosed=Number.isFinite(e)&&e>0&&e<this.end?e:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(o,i,s)=>n.replayer?.rows(o,i,s)??{},listen:o=>n.listen(o),stats:(o,i,s)=>n.timeline?an(n.timeline,o,i,s):{},robotRooms:(o,i)=>n.timeline?Pn(n.timeline.tracks.get(o),i?n.timeline.tracks.get(i):void 0,n.replay.t):[],setQuality:(o,i)=>n.setQuality(o,i)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t()}get playing(){return!!this.playback?.playing}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*A}get recorderStart(){let t=this.timeline?.keepDays;return typeof t=="number"&&t>0?this.end-t*A:null}get atNow(){let t=this.playback;return!!t&&!t.playing&&t.t>=t.end-1e3&&Date.now()-t.end<12e4}get location(){let t=this.live.config;return typeof t?.latitude=="number"&&typeof t?.longitude=="number"?{lat:t.latitude,lon:t.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(t,e,n){let o=re(this.live,this.opts.building,this.opts.spec),i=Math.max(1,Math.ceil(o.entities.length/pe),Math.ceil(o.stats.length/me)),s=[];for(let a=0;a<i;a++){let l=o.entities.slice(a*pe,(a+1)*pe),u=o.stats.slice(a*me,(a+1)*me),c={type:"home_3d/timetravel/history",start_time:t/1e3,end_time:e/1e3,entity_ids:l,statistic_ids:u},d=o.cars.filter(f=>l.includes(f));if(d.length&&(c.car_trackers=d),s.push(await this.live.callWS(c)),this.disposed)return null;n?.((a+1)/i)}return Ye(s)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:t,spec:e}=this.opts,n=this.live,o=re(n,t,e),i;try{i=await this.fetchWindow(this.end-A,this.end,u=>{this.progress=u,this.notify()})}catch(u){if(this.disposed)return;let c=u;this.state="error",this.error=c?.code??c?.message??String(u),this.notify();return}if(!i)return;let s=t.presence.flatMap(u=>[u.sensor]).filter(u=>!!u);this.requested=[...o.entities,...o.stats,...o.overflow,...o.hidden,...s],this.cars=o.cars;let a=new Map(e.furniture);this.devices=e.energy?Tt(t,u=>a.get(u.id)?.power??null):null,this.energyIds=this.devices?Ln(t,this.devices):[],this.rooms=On(n,t,e),this.roomOf=zn(this.rooms);for(let[u,c]of oe(n,t,e))this.names.set(u,c.name||this.t(`furn_${c.type}`));this.setTimeline(i);let l=typeof this.opts.at=="number"?this.opts.at:wt(this.opts.at??null,this.end);this.playback=new xt(i.start,this.end,l??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?Xt:vt),this.liveLog=new Mt([...o.entities,...o.stats,...o.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(t){let{building:e,spec:n}=this.opts,o=this.live,i=new Set([...t.tracks.keys(),...t.series.keys()]);this.roles=Rn(o,e,n,i),Je(t)>en&&nn(t,this.motion()),this.timeline=t,this.version++,this.daySummaries.clear(),this.replayer=new Et(t,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[e.settings.weather_entity,...Object.keys(o.states).filter(s=>s.startsWith("weather."))].find(s=>!!s&&i.has(s))??null,this.findEvents(),this.gaps=Kt(t),this.gapsTo=t.end,this.updateNights()}findEvents(){let t=this.timeline;if(!t)return;let{building:e,spec:n}=this.opts,o=this.devices,i=o&&n.energy?{solar:e.energy.solar?[e.energy.solar]:o.solar,soc:e.energy.battery_soc?[e.energy.battery_soc]:o.soc,sunDown:l=>this.sunDown(l)}:null,s=e.settings.outage_entity,a=s&&this.live.states[s]?{id:s,attributes:this.live.states[s].attributes}:null;this.allEvents=fn({timeline:t,roles:this.roles,weather:this.weather,energy:i,outage:a}),this.events=this.allEvents.filter(l=>!cn.has(l.kind))}sunDown(t){let e=this.location;if(e)return ae(e.lat,e.lon,t);let n=this.timeline?.tracks.get("sun.sun"),o=n?S(n.times,t):-1;return!!n&&o>=0&&n.values[n.vals[o]].s==="below_horizon"}shownEvents(t=!1){let e=this.playback,n=t?this.allEvents:this.events;return e?xn(n,Math.max(e.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,t])=>t==="motion"||t==="camera").map(([t])=>t)}updateNights(){let t=this.location;this.nights=t?An(t.lat,t.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let t=this.timeline.start,e=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(t<=e+6e4)break;let n=this.recorderStart;if(n!==null&&t<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=t-A,this.notify();let o;try{o=await this.fetchWindow(t-A,t)}catch(l){console.warn("Home 3D: time travel could not load an older day",l);break}if(!o||this.disposed||!this.timeline)return;let i=Xe(o,this.timeline);this.setTimeline(i),tn(i)>xo&&(this.full=!0);let s=this.playback;if(!s)continue;s.setRange(Math.max(i.start,this.start),this.end);let a=!1;this.wanted!==null&&this.wanted>=s.start&&(s.seek(this.wanted),this.wanted=null,a=!0),this.apply(!0,a)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(t){let e=this.playback;if(t===this.range||!e||!this.timeline)return;this.range=t;let n=e.t;e.setRange(Math.max(this.timeline.start,this.start),this.end,t==="7d"?Xt:vt),this.updateNights(),e.t!==n?this.apply(!0):this.notify(),t==="7d"&&this.loadOlder()}sunNights(){let t=this.timeline?.tracks.get("sun.sun");if(!t)return[];let e=[],n=null;for(let o=0;o<t.times.length;o++){let i=t.values[t.vals[o]].s==="below_horizon";i&&n===null&&(n=t.times[o]),!i&&n!==null&&(e.push([n,t.times[o]]),n=null)}return n!==null&&e.push([n,this.end]),e}apply(t,e=t){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,e&&this.replay.seek++;let o=this.replayer.hassAt(this.live,n.t,t);this.replay.pulses=this.replayer.pulses,(o!==this.hass||t)&&(this.hass=o,this.opts.onChange()),this.notify()}setLive(t){this.live=t,qt(Gt(t));let e=Date.now();this.liveLog?.record(t.states,e);let n=this.playback,o=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&e-this.flushedAt>=wo||this.derivePending&&e-this.eventsAt>Bn)){let i=!n.playing&&n.t>=n.end-1e3;this.edge(e),i&&n.seek(n.end),this.replay.t=n.t,o=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(t,n.t)),o&&this.notify()}setQuality(t,e){let n=this.maxDays;this.quality=t,this.low=e;let o=this.playback;if(n===this.maxDays||!o||!this.timeline)return;let i=this.end-this.maxDays*A,s=this.timeline.start<i-6e4;if(s)this.setTimeline(sn(this.timeline,i)),this.full=!1,this.needFrom!==null&&this.needFrom<i&&(this.needFrom=null),this.wanted!==null&&this.wanted<i&&(this.wanted=null);else if(this.range!=="7d")return;let a=o.t;o.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),s||o.t!==a?this.apply(!0,o.t!==a):this.notify(),this.loadOlder()}play(){let t=this.playback;if(!t)return;let e=t.t>=t.end;t.play(),e&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(t,e=!1){this.playback&&(e&&this.pause(),this.wanted=null,this.playback.seek(t),this.last=performance.now(),this.apply(!0))}step(t){let e=this.playback;if(!e)return;let n=_n(this.shownEvents(),e.t,t);this.seek(n?n.t:t>0?e.end:e.start,!0)}goTo(t){this.seek(t.t,!0),this.focusOn(t.entity)}focusOn(t){this.replay.focus=t,this.replay.focusSeq++,this.notify()}yesterday(){let t=this.playback;if(!t)return;let e=t.t-A;e<t.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(e,t.start),!0),e<t.start&&this.olderRunning&&(this.wanted=e)}setFollow(t){this.follow=t,G("follow",t?"1":"0"),this.notify()}setStopImportant(t){this.stopImportant=t,G("stop",t?"1":"0"),this.notify()}nextSpeed(){this.playback?.nextSpeed(),this.notify()}awayOffer(){let t=this.timeline;return t?Cn(Nn(t,this.motion(),t.start,this.end)):null}away(t,e){let n=this.timeline;return n?Hn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(o=>o.startsWith("light.")),motion:this.motion(),from:t,to:e}):[]}ensureLoaded(t){let e=this.timeline;!e||e.start<=t+6e4||this.needFrom!==null&&this.needFrom<=t||t<this.end-this.maxDays*A-A||(this.needFrom=t,this.loadOlder())}daySummary(t){let e=this.timeline;if(!e||t+A<=e.start||t>e.end)return null;let n=`${t}|${this.version}`,o=this.daySummaries.get(n);if(!o){let i=ht(t),s=Math.max(t,e.start),a=Math.min(i,e.end),l=this.devices,u=this.energy&&l?Wn(c=>Dn(e,this.live.states,this.opts.building,l,this.energyIds,c),s,a):null;o=Vn(e,this.rooms,s,a,u),this.daySummaries.set(n,o)}return o}schedule(){clearTimeout(this.timer),this.timer=void 0;let t=this.playback;!t?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let e=performance.now(),n=Math.min(2e3,e-this.last);this.last=e;let o=t.t;if(t.end-t.t<=vo+n*t.speed&&this.edge(),t.advance(n)){let i=this.stopImportant&&t.speed>=900?Jt(this.allEvents,o,t.t,s=>yt.has(s.kind)):null;if(i){t.seek(i.t),t.pause(),this.apply(!0),this.focusOn(i.entity);return}if(this.apply(!1),this.follow&&e-this.followAt>2500){let s=Jt(this.events,o,t.t,()=>!0);s&&(this.followAt=e,this.focusOn(s.entity))}}t.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},yn(this.quality,this.low)))}edge(t=Date.now()){let e=this.playback,n=this.timeline;if(!e||!n||!this.liveLog||t-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:o,created:i}=this.liveLog.flush(n,t);this.flushedAt=t,this.end=t,e.setRange(Math.max(n.start,this.start),t),i&&this.replayer?.refresh(),(o||i)&&(this.derivePending=!0),this.derivePending&&(!e.playing||t-this.eventsAt>Bn)&&this.derive(t)}derive(t){let e=this.timeline;if(!e)return;this.derivePending=!1,this.eventsAt=t,this.findEvents();let n=Math.max(e.start,this.gapsTo-30*6e4),o=this.gaps.filter(([a])=>a<n).map(([a,l])=>[a,Math.min(l,n)]),i=Kt(e,void 0,void 0,void 0,n),s=o[o.length-1];s&&i.length&&s[1]>=n&&i[0][0]<=n&&(s[1]=i.shift()[1]),this.gaps=[...o,...i],this.gapsTo=e.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&G("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function Wa(r){return new he(r)}export{xo as MAX_BYTES,he as Session,Wa as startTimeTravel};
