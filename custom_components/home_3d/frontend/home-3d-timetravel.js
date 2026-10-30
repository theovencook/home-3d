var On=new Map;var Hn=new Map;function Cn(r){return r.startsWith("pack:")}var zn={meter:"meter",consumer_unit:"meter",energy_monitor:"meter",inverter:"inverter",home_battery:"home_battery",power_station:"home_battery",ev_charger:"wallbox",solar_panel:"solar"};function pt(r){if(r==="meter"||r==="inverter"||r==="home_battery"||r==="wallbox")return r;let e=Nn(r),t=e?.family?zn[e.family]??null:null;return t==="meter"&&(e.tags??[]).some(n=>/^(gas|water|wasser)$/i.test(n))?null:t}function Nn(r){if(Cn(r))return Hn.get(r)??On.get(r)}var Ln={type:"none",pitch:35,overhang:.4},hr={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Ln}};var Vn=new Set(["lamp_ceiling","lamp_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var In=new Set([...Vn,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function A(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[i,s]=e[n],[a,l]=e[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(t=!t)}return t}var Bn=Math.PI/180;var br=Math.tan(30*Bn);var Tr=Math.PI/180;function Un(r){let e=new Map,t=new Set(r.map(n=>n.powerEntity));for(let n of r)n.circuit&&n.circuit!==n.powerEntity&&t.has(n.circuit)&&e.set(n.circuit,(e.get(n.circuit)??0)+n.power);return r.map(n=>Math.max(0,n.power-(e.get(n.powerEntity)??0)))}var ae=r=>r&&r!=="none"?r:null;function Ae(r,e=t=>ae(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let o of n.furniture){let i=e(o),s=pt(o.type);if(s==="meter")t.grid??=i,t.gridExport??=ae(o.export);else if((s==="inverter"||s==="solar")&&i&&!t.solar.includes(i))t.solar.push(i);else if(s==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let a=ae(o.charge);a&&!t.charge.includes(a)&&t.charge.push(a),(i||a)&&t.batteries.push({power:i,charge:a});let l=ae(o.soc);l&&!t.soc.includes(l)&&t.soc.push(l)}}return t}function E(r,e=!1){if(!r)return null;let t=Number(r.state);if(!Number.isFinite(t))return null;let n=String(r.attributes.unit_of_measurement??"W"),o=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-o:o}function _t(r,e,t,n=Ae(e)){let o=e.energy,i=o.grid??n.grid,s=i?E(r.states[i],o.grid_invert):null;if(!o.grid&&n.gridExport){let d=Math.max(0,E(r.states[n.gridExport])??0);s=Math.max(0,s??0)-d}let a=o.solar?E(r.states[o.solar]):null;if(!o.solar&&n.solar.length){let d=n.solar.map(g=>E(r.states[g])).filter(g=>g!==null);a=d.length?d.reduce((g,k)=>g+k,0):null}let l=o.battery?E(r.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let d=n.batteries.map(g=>{if(g.charge){let k=g.power?Math.max(0,E(r.states[g.power])??0):0,_=Math.max(0,E(r.states[g.charge])??0);return k-_}return g.power?E(r.states[g.power],o.battery_invert):null}).filter(g=>g!==null);l=d.length?d.reduce((g,k)=>g+k,0):null}let u=(o.battery_soc?[o.battery_soc]:n.soc).map(d=>Number(r.states[d]?.state)).filter(d=>Number.isFinite(d)),m=u.length?u.reduce((d,g)=>d+g,0)/u.length:NaN,h=o.tariff?r.states[o.tariff]:void 0,p=Number(h?.state),f=o.consumption?E(r.states[o.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||a!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(f=Un(t).reduce((d,g)=>d+g,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(m)?m:null,tariff:h&&Number.isFinite(p)?{value:p,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:f}}var le=globalThis,ce=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),gt=new WeakMap,Y=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ce&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=gt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&gt.set(t,e))}return e}toString(){return this.cssText}},bt=r=>new Y(typeof r=="string"?r:r+"",void 0,Te),Ee=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new Y(t,r,Te)},wt=(r,e)=>{if(ce)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=le.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},Pe=ce?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return bt(t)})(r):r;var{is:Gn,defineProperty:Kn,getOwnPropertyDescriptor:jn,getOwnPropertyNames:qn,getOwnPropertySymbols:Yn,getPrototypeOf:Qn}=Object,ue=globalThis,yt=ue.trustedTypes,Zn=yt?yt.emptyScript:"",Xn=ue.reactiveElementPolyfillSupport,Q=(r,e)=>r,$e={toAttribute(r,e){switch(e){case Boolean:r=r?Zn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},kt=(r,e)=>!Gn(r,e),vt={attribute:!0,type:String,converter:$e,reflect:!1,useDefault:!1,hasChanged:kt};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;var P=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=vt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Kn(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:i}=jn(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??vt}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;let e=Qn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){let t=this.properties,n=[...qn(t),...Yn(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Pe(o))}else e!==void 0&&t.push(Pe(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:$e).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:$e;this._$Em=o;let a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??kt)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,i]of n){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[Q("elementProperties")]=new Map,P[Q("finalized")]=new Map,Xn?.({ReactiveElement:P}),(ue.reactiveElementVersions??=[]).push("2.1.2");var Ne=globalThis,xt=r=>r,he=Ne.trustedTypes,St=he?he.createPolicy("lit-html",{createHTML:r=>r}):void 0,Pt="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,$t="?"+F,Jn=`<${$t}>`,z=document,X=()=>z.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",We=Array.isArray,eo=r=>We(r)||typeof r?.[Symbol.iterator]=="function",Fe=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mt=/-->/g,Rt=/>/g,H=RegExp(`>|${Fe}(?:([^\\s"'>=/]+)(${Fe}*=${Fe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,Tt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,Ie=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),v=Ie(1),Dt=Ie(2),ii=Ie(3),N=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Et=new WeakMap,C=z.createTreeWalker(z,129);function Ot(r,e){if(!We(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(e):e}var to=(r,e)=>{let t=r.length-1,n=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=Z;for(let a=0;a<t;a++){let l=r[a],c,u,m=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===Z?u[1]==="!--"?s=Mt:u[1]!==void 0?s=Rt:u[2]!==void 0?(Ft.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=H):u[3]!==void 0&&(s=H):s===H?u[0]===">"?(s=o??Z,m=-1):u[1]===void 0?m=-2:(m=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?H:u[3]==='"'?Tt:At):s===Tt||s===At?s=H:s===Mt||s===Rt?s=Z:(s=H,o=void 0);let p=s===H&&r[a+1].startsWith("/>")?" ":"";i+=s===Z?l+Jn:m>=0?(n.push(c),l.slice(0,m)+Pt+l.slice(m)+F+p):l+F+(m===-2?a:p)}return[Ot(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ee=class r{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,u]=to(e,t);if(this.el=r.createElement(c,n),C.currentNode=this.el.content,t===2||t===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=C.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let m of o.getAttributeNames())if(m.endsWith(Pt)){let h=u[s++],p=o.getAttribute(m).split(F),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?Oe:f[1]==="?"?He:f[1]==="@"?Ce:B}),o.removeAttribute(m)}else m.startsWith(F)&&(l.push({type:6,index:i}),o.removeAttribute(m));if(Ft.test(o.tagName)){let m=o.textContent.split(F),h=m.length-1;if(h>0){o.textContent=he?he.emptyScript:"";for(let p=0;p<h;p++)o.append(m[p],X()),C.nextNode(),l.push({type:2,index:++i});o.append(m[h],X())}}}else if(o.nodeType===8)if(o.data===$t)l.push({type:2,index:i});else{let m=-1;for(;(m=o.data.indexOf(F,m+1))!==-1;)l.push({type:7,index:i}),m+=F.length-1}i++}}static createElement(e,t){let n=z.createElement("template");return n.innerHTML=e,n}};function V(r,e,t=r,n){if(e===N)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,i=J(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=V(r,o._$AS(r,e.values),o,n)),e}var De=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??z).importNode(t,!0);C.currentNode=o;let i=C.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new te(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new ze(i,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=C.nextNode(),s++)}return C.currentNode=z,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},te=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),J(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):eo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&J(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ee.createElement(Ot(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new De(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Et.get(e.strings);return t===void 0&&Et.set(e.strings,t=new ee(e)),t}k(e){We(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let i of e)o===t.length?t.push(n=new r(this.O(X()),this.O(X()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=xt(e).nextSibling;xt(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},B=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,o){let i=this.strings,s=!1;if(i===void 0)e=V(this,e,t,0),s=!J(e)||e!==this._$AH&&e!==N,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=V(this,a[n+l],t,l),c===N&&(c=this._$AH[l]),s||=!J(c)||c!==this._$AH[l],c===y?e=y:e!==y&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Oe=class extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},He=class extends B{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Ce=class extends B{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=V(this,e,t,0)??y)===N)return;let n=this._$AH,o=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ze=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}};var no=Ne.litHtmlPolyfillSupport;no?.(ee,te),(Ne.litHtmlVersions??=[]).push("3.3.3");var Ht=(r,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let i=t?.renderBefore??null;n._$litPart$=o=new te(e.insertBefore(X(),i),i,void 0,t??{})}return o._$AI(r),o};var Le=globalThis,D=class extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ht(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};D._$litElement$=!0,D.finalized=!0,Le.litElementHydrateSupport?.({LitElement:D});var oo=Le.litElementPolyfillSupport;oo?.({LitElement:D});(Le.litElementVersions??=[]).push("4.2.2");var ro=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),io=new Set(["power","plug","connectivity","running"]);function Ct(r){if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let e=r.entity_id.split(".")[0];if(e==="binary_sensor")return io.has(String(r.attributes.device_class))?r.state==="off":r.state==="on";if(e==="input_boolean"||e==="switch")return r.state==="on";let t=Number(r.state);if(r.state!==""&&Number.isFinite(t))return r.attributes.unit_of_measurement==="V"&&t<100;let n=String(r.state).toLowerCase().trim();return ro.has(n)||n.startsWith("ob ")}function W(r,e,t=9e5){let n=r.mean.length;if(!n||e<r.start)return NaN;let o=(e-r.start)/r.step-.5,i=Math.floor(o);if(i<0)return r.mean[0];if(i>=n-1){let u=zt(r,n-1);return u>=0&&e-(r.start+(u+.5)*r.step)<=t?r.mean[u]:NaN}let s=r.mean[i],a=r.mean[i+1],l=o-i;if(!Number.isNaN(s)&&!Number.isNaN(a))return s+(a-s)*l;let c=zt(r,i);return c>=0&&e-(r.start+(c+.5)*r.step)<=t?r.mean[c]:NaN}function zt(r,e){for(let t=e;t>=0;t--)if(!Number.isNaN(r.mean[t]))return t;return-1}function Nt(r,e,t=0){if(typeof e=="number"&&e>=0&&e<=6)return 10**-e;switch(typeof r=="string"?r:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(t)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(t)>=100?1:Math.abs(t)>=10?.1:.01}}function Wt(r,e){if(!Number.isFinite(r))return"unknown";let t=e>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(e)))),o=(Math.round(r/e)*e).toFixed(t);return/^-0(\.0*)?$/.test(o)?o.slice(1):o}var so=r=>typeof r=="string"?{s:r,a:null}:{s:String(r[0]),a:r[1]&&typeof r[1]=="object"?r[1]:null},O=r=>`${r.s}\0${r.a?JSON.stringify(r.a):""}`;function Lt(r){let e=[...r].sort((h,p)=>h.day_start-p.day_start),t=new Map,n=new Map,o=new Set,i=1/0,s=-1/0,a=null,l=!1,c=null;for(let h of e){i=Math.min(i,h.day_start*1e3),s=Math.max(s,h.end*1e3),h.oldest===null?l=!0:a=a===null?h.oldest*1e3:Math.min(a,h.oldest*1e3),c??=h.keep_days;for(let[p,f]of Object.entries(h.entities??{})){let d=t.get(p)??[],g=h.day_start*1e3,k=Math.min(f.t.length,f.v.length);for(let _=0;_<k;_++){let w=f.tab[f.v[_]];if(w===void 0)continue;let b=so(w),S=O(b),R=d[d.length-1],q=g+f.t[_]*1e3;R&&(q<R.t||R.k===S)||d.push({t:q,v:b,k:S})}t.set(p,d)}for(let[p,f]of Object.entries(h.stats??{})){let d=n.get(p)??[];d.push({start:f.start*1e3,step:f.step*1e3,mean:f.mean}),n.set(p,d)}for(let p of h.missing??[])o.add(p)}let u=new Map;for(let[h,p]of t){if(!p.length)continue;let f=[],d=new Map,g=new Float64Array(p.length),k=new Uint32Array(p.length),_=new Float64Array(p.length);for(let w=0;w<p.length;w++){let b=d.get(p[w].k);b===void 0&&(b=f.length,f.push(p[w].v),d.set(p[w].k,b)),g[w]=p[w].t,k[w]=b,_[w]=w>0&&p[w-1].v.s===p[w].v.s?_[w-1]:p[w].t}u.set(h,{id:h,times:g,vals:k,values:f,since:_}),o.delete(h)}let m=new Map;for(let[h,p]of n){let f=p[0].step;if(!(f>0))continue;let d=Math.min(...p.map(w=>w.start)),g=Math.max(...p.map(w=>w.start+w.mean.length*w.step)),k=Math.max(0,Math.round((g-d)/f));if(!k)continue;let _=new Float32Array(k).fill(NaN);for(let w of p)w.mean.forEach((b,S)=>{let R=Math.round((w.start+S*w.step-d)/f);typeof b=="number"&&Number.isFinite(b)&&R>=0&&R<k&&(_[R]=b)});_.every(w=>Number.isNaN(w))||(m.set(h,{id:h,start:d,step:f,mean:_}),o.delete(h))}return{start:Number.isFinite(i)?i:0,end:Number.isFinite(s)?s:0,oldest:l?null:a,keepDays:c,tracks:u,series:m,missing:o}}function M(r,e){let t=0,n=r.length-1;if(n<0||r[0]>e)return-1;for(;t<n;){let o=t+n+1>>1;r[o]<=e?t=o:n=o-1}return t}var U=class{tracks;idx;t=-1/0;constructor(e){this.tracks=[...e.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(e){let t=e>=this.t;for(let n=0;n<this.tracks.length;n++){let o=this.tracks[n].times,i=this.idx[n];if(!t)i=M(o,e);else{let s=0;for(;i+1<o.length&&o[i+1]<=e&&s<8;)i++,s++;i+1<o.length&&o[i+1]<=e&&(i=M(o,e))}this.idx[n]=i}return this.t=e,this.idx}value(e){let t=this.idx[e];return t<0?null:this.tracks[e].values[this.tracks[e].vals[t]]}},ao=new Set(["unavailable","unknown"]);function Ve(r,e=5*6e4,t=.6,n=10*6e4,o=-1/0){let i=new U(r);if(!i.tracks.length)return[];let s=Math.max(r.oldest??r.start,o),a=[],l=null;for(let c=s;c<=r.end;c+=e){i.at(c);let u=0;for(let h=0;h<i.tracks.length;h++){let p=i.value(h);(!p||ao.has(p.s))&&u++}let m=u/i.tracks.length>=t;m&&l===null&&(l=c),!m&&l!==null&&(c-l>=n&&a.push([l,c]),l=null)}return l!==null&&r.end-l>=n&&a.push([l,r.end]),a}function Vt(r){for(let e=0;e<r.times.length;e++)r.since[e]=e>0&&r.values[r.vals[e-1]].s===r.values[r.vals[e]].s?r.since[e-1]:r.times[e]}function lo(r,e){let t=[...r.values],n=new Map(t.map((c,u)=>[O(c),u])),o=e.values.map(c=>{let u=O(c),m=n.get(u);return m===void 0&&(m=t.length,t.push(c),n.set(u,m)),m}),i=e.times.length?e.times[0]:1/0,s=[],a=[];for(let c=0;c<r.times.length&&r.times[c]<i;c++)s.push(r.times[c]),a.push(r.vals[c]);for(let c=0;c<e.times.length;c++){let u=o[e.vals[c]];a.length&&a[a.length-1]===u||(s.push(e.times[c]),a.push(u))}let l={id:r.id,times:Float64Array.from(s),vals:Uint32Array.from(a),values:t,since:new Float64Array(s.length)};return(r.dropped||e.dropped)&&(l.dropped=Float64Array.from([...r.dropped??[],...e.dropped??[]]).sort()),Vt(l),l}function co(r,e){let t=r.step,n=Math.min(r.start,e.start),o=Math.max(r.start+r.mean.length*r.step,e.start+e.mean.length*e.step),i=Math.max(0,Math.round((o-n)/t)),s=new Float32Array(i).fill(NaN);for(let a of[r,e])for(let l=0;l<a.mean.length;l++){let c=Math.round((a.start+l*a.step-n)/t);!Number.isNaN(a.mean[l])&&c>=0&&c<i&&(s[c]=a.mean[l])}return{id:r.id,start:n,step:t,mean:s}}function Bt(r,e){let[t,n]=r.start<=e.start?[r,e]:[e,r],o=new Map;for(let l of new Set([...t.tracks.keys(),...n.tracks.keys()])){let c=t.tracks.get(l),u=n.tracks.get(l);o.set(l,c&&u?lo(c,u):c??u)}let i=new Map;for(let l of new Set([...t.series.keys(),...n.series.keys()])){let c=t.series.get(l),u=n.series.get(l);i.set(l,c&&u?co(c,u):c??u)}let s=new Set([...t.missing,...n.missing].filter(l=>!o.has(l)&&!i.has(l))),a=t.oldest===null?null:t.oldest<t.end?t.oldest:n.oldest??n.start;return{start:t.start,end:Math.max(t.end,n.end),oldest:a,keepDays:n.keepDays??t.keepDays,tracks:o,series:i,missing:s}}function Ut(r){let e=0;for(let t of r.tracks.values())e+=t.times.length;return e}function Gt(r){let e=0;for(let t of r.tracks.values())e+=t.times.length*20+t.values.length*120;for(let t of r.series.values())e+=t.mean.length*4;return e}var Kt=3e5;function jt(r,e,t=6e4,n=5*6e4){let o=0;for(let i of e){let s=r.tracks.get(i);if(!s||s.times.length<3)continue;let a=s.times.length,l=f=>s.values[s.vals[f]].s,c=[],u=[],m=null;for(let f=0;f<a;f++){let d=c.length?c[c.length-1]:-1;if(d>=0&&m!==null&&l(d)==="off"&&l(f)==="on"&&f+1<a&&l(f+1)==="off"&&s.times[f+1]-s.times[f]<t&&s.times[f]-m<=n){u.push(s.times[f]),f++,o+=2;continue}if(d>=0&&s.vals[d]===s.vals[f]){o++;continue}d>=0&&l(d)==="on"&&l(f)!=="on"&&(m=s.times[f]),c.push(f)}if(c.length===a)continue;let h=Float64Array.from(c,f=>s.times[f]),p=Uint32Array.from(c,f=>s.vals[f]);s.times=h,s.vals=p,s.since=new Float64Array(c.length),u.length&&(s.dropped=Float64Array.from([...s.dropped??[],...u]).sort()),Vt(s)}return o}var It=new WeakMap;function uo(r){let e=It.get(r);return(!e||e.size!==r.values.length)&&(e=new Map(r.values.map((t,n)=>[O(t),n])),It.set(r,e)),e}function Be(r,e){let t=uo(r),n=r.times.length,o=n?r.times[n-1]:-1/0,i=n?r.vals[n-1]:-1,s=[],a=[];for(let h of e){if(h.t<o)continue;let p=O(h.v),f=t.get(p);f!==i&&(f===void 0&&(f=r.values.length,r.values.push(h.v),t.set(p,f)),s.push(h.t),a.push(f),o=h.t,i=f)}if(!s.length)return 0;let l=n+s.length,c=new Float64Array(l);c.set(r.times),c.set(s,n);let u=new Uint32Array(l);u.set(r.vals),u.set(a,n);let m=new Float64Array(l);m.set(r.since);for(let h=n;h<l;h++)m[h]=h>0&&r.values[u[h-1]].s===r.values[u[h]].s?m[h-1]:c[h];return r.times=c,r.vals=u,r.since=m,s.length}function qt(r,e){let t=-1;for(let o of e)Number.isFinite(o.value)&&o.t>=r.start&&(t=Math.max(t,Math.floor((o.t-r.start)/r.step)));if(t<0)return 0;if(t>=r.mean.length){let o=new Float32Array(t+1).fill(NaN);o.set(r.mean),r.mean=o}let n=0;for(let o of e){if(!Number.isFinite(o.value)||o.t<r.start)continue;let i=Math.floor((o.t-r.start)/r.step);Number.isNaN(r.mean[i])&&(r.mean[i]=o.value,n++)}return n}function Yt(r,e){let t={id:r,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return Be(t,e)?t:null}function Qt(r,e){if(e<=r.start)return r;let t=new Map;for(let[i,s]of r.tracks){let a=Math.max(0,M(s.times,e));if(a===0){t.set(i,s);continue}let l={id:i,times:s.times.slice(a),vals:s.vals.slice(a),values:s.values,since:s.since.slice(a)};s.dropped&&(l.dropped=s.dropped.filter(c=>c>=e)),t.set(i,l)}let n=new Map;for(let[i,s]of r.series){let a=Math.max(0,Math.floor((e-s.start)/s.step));n.set(i,a?{id:i,start:s.start+a*s.step,step:s.step,mean:s.mean.slice(a)}:s)}let o=r.oldest!==null&&r.oldest>e?r.oldest:null;return{...r,start:e,oldest:o,tracks:t,series:n}}function Zt(r,e,t,n){let o={};for(let s of e){let a=r.series.get(s),l=r.tracks.get(s);if(!a&&!l)continue;let c=[];for(let u=Math.floor(t/3e5)*3e5;u<n;u+=3e5){let m=NaN;if(a){let h=Math.floor((u+15e4-a.start)/a.step);m=h>=0&&h<a.mean.length?a.mean[h]:NaN}else if(l){let h=M(l.times,u+15e4);m=h<0?NaN:Number(l.values[l.vals[h]].s)}Number.isFinite(m)&&c.push({start:u,mean:m})}c.length&&(o[s]=c)}return o}var I=null;function Ue(r){let e=r?.locale?.time_zone,t=r?.config?.time_zone;if(e!=="server"||!t)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}),t}catch{return null}}function Ge(r){I=r}var Xt=new Map;function ho(r){let e=Xt.get(r);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:r,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),Xt.set(r,e)),e}function pe(r,e){let t=[0,0,0,0,0,0];for(let n of ho(e).formatToParts(r)){let o=Number(n.value);n.type==="year"?t[0]=o:n.type==="month"?t[1]=o-1:n.type==="day"?t[2]=o:n.type==="hour"?t[3]=o%24:n.type==="minute"?t[4]=o:n.type==="second"&&(t[5]=o)}return t}function de(r,e){let[t,n,o,i,s,a]=pe(r,e),l=r-(r%1e3+1e3)%1e3;return Date.UTC(t,n,o,i,s,a)-l}function G(r,e=I){return e?pe(r,e)[3]:new Date(r).getHours()}function $(r,e=I){if(!e)return new Date(r).setHours(0,0,0,0);let[t,n,o]=pe(r,e),i=Date.UTC(t,n,o)-de(r,e);return i=Date.UTC(t,n,o)-de(i,e),i}function me(r,e=I){return $($(r,e)+27*36e5,e)}function fe(r,e=I){if(!e)return new Date(r).setMinutes(0,0,0);let[,,,,t,n]=pe(r,e);return r-(r%1e3+1e3)%1e3-(t*60+n)*1e3}function Ke(r,e,t,n=I){if(!n){let s=new Date(r);return s.setHours(e,t,0,0),s.getTime()}let o=$(r,n),i=o+(e*60+t)*6e4;return i-(de(i,n)-de(o,n))}function ne(r=I){return r?{timeZone:r}:{}}var _e={alarm:100,smoke:95,gas:95,co:95,water:90,outage:88,rain:70,door:50,lock:45,garage:40,camera:38,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},en=new Set(["window","battery_full","pv_peak"]),ge=new Set(["alarm","smoke","gas","co","water","outage"]),je={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",outage:"safety",motion:"safety",camera:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},po=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),L=new Set(["on","open","opening","tilted"]);function mo(r){let e=G(r);return e>=23||e<5}function*oe(r){let e=null;for(let t=0;t<r.times.length;t++){let n=r.values[r.vals[t]].s;n!==e&&(yield{t:r.times[t],from:e,to:n}),e=n}}function K(r,e,t){let n=[],o=null;for(let i of oe(r)){let s=e.has(i.to);s&&o===null&&(o=i.t),!s&&o!==null&&(n.push([o,i.t]),o=null)}return o!==null&&n.push([o,t]),n}function fo(r,e){let t=r.tracks.get(e);if(t){let i=[];for(let s=0;s<t.times.length;s++){let a=Number(t.values[t.vals[s]].s);Number.isFinite(a)&&i.push({t:t.times[s],w:a})}return i}let n=r.series.get(e);if(!n)return[];let o=[];for(let i=0;i<n.mean.length;i++){let s=n.start+(i+.5)*n.step,a=W(n,s);Number.isFinite(a)&&o.push({t:s,w:a})}return o}function _o(r,e=10,t=5,n=20*6e4){let o=[],i=null;for(let s of r)i===null&&s.w>e?i=s.t:i!==null&&s.w<t&&(s.t-i>=n&&o.push(s.t),i=null);return o}function Jt(r,e,t,n,o=3e5){let i=Math.max(0,Math.ceil((n-t)/o)),s=new Float64Array(i).fill(NaN),a=r.series.get(e),l=r.tracks.get(e);for(let c=0;c<i;c++){let u=t+(c+.5)*o;if(a)s[c]=W(a,u);else if(l){let m=M(l.times,u);s[c]=m<0?NaN:Number(l.values[l.vals[m]].s)}}return s}function go(r,e){let t=[],o=Math.floor(r.start/3e5)*3e5;for(let i of e.soc){let s=Jt(r,i,o,r.end),a=!1;s.forEach((l,c)=>{Number.isNaN(l)||(l<95?a=!0:l>=99&&a&&(a=!1,t.push({t:o+(c+.5)*3e5,kind:"battery_full",entity:i})))})}if(e.solar.length){let i=e.solar.map(u=>Jt(r,u,o,r.end)),s=i[0].length,a=-1,l={t:0,w:0},c=()=>{l.w>100&&t.push({t:l.t,kind:"pv_peak",entity:e.solar[0]}),l={t:0,w:0}};for(let u=0;u<s;u++){let m=o+(u+.5)*3e5,h=$(m);h!==a&&(a>=0&&c(),a=h);let p=0;for(let f of i)Number.isNaN(f[u])||(p+=Math.max(0,f[u]));p>l.w&&(l={t:m,w:p})}a>=0&&(r.end>=me(a)||e.sunDown?.(r.end))&&c()}return t}function tn({timeline:r,roles:e,weather:t,night:n=mo,energy:o=null,outage:i=null}){let s=[],a=(h,p,f)=>{h>=r.start&&h<=r.end&&s.push({t:h,kind:p,entity:f})},l=t?r.tracks.get(t):void 0,c=l?K(l,po,r.end):[];for(let[h,p]of e){if(p==="washer"){for(let d of _o(fo(r,h)))a(d,"washer",h);continue}let f=r.tracks.get(h);if(f){if(p==="window"||p==="window_more"){for(let[d,g]of K(f,L,r.end)){p==="window"&&d>r.start&&d>f.times[0]&&a(d,"window",h);for(let[k,_]of c)d<_&&k<g&&a(Math.max(d,k),"rain",h)}continue}for(let d of oe(f))if(d.from!==null)switch(p){case"door":L.has(d.to)&&!L.has(d.from)&&a(d.t,"door",h);break;case"garage":(d.to==="on"||d.to==="open"||d.to==="opening")&&(d.from==="off"||d.from==="closed"||d.from==="closing")&&a(d.t,"garage",h);break;case"lock":(d.to==="unlocked"||d.to==="open")&&(d.from==="locked"||d.from==="locking")&&a(d.t,"lock",h);break;case"alarm":d.to==="triggered"&&a(d.t,"alarm",h);break;case"smoke":case"gas":case"co":case"water":d.to==="on"&&d.from!=="on"&&a(d.t,p,h);break;case"motion":d.to==="on"&&d.from==="off"&&n(d.t)&&a(d.t,"motion",h);break;case"camera":d.to==="on"&&d.from!=="on"&&a(d.t,"camera",h);break;case"robot":d.to==="cleaning"&&d.from!=="cleaning"&&d.from!=="paused"?a(d.t,"robot_start",h):d.to==="docked"&&(d.from==="cleaning"||d.from==="returning"||d.from==="paused")&&a(d.t,"robot_done",h);break}}}if(o)for(let h of go(r,o))a(h.t,h.kind,h.entity);let u=i?r.tracks.get(i.id):void 0;if(i&&u){let h=p=>Ct({entity_id:i.id,state:p,attributes:i.attributes});for(let p of oe(u))p.from!==null&&h(p.to)&&!h(p.from)&&a(p.t,"outage",i.id)}s.sort((h,p)=>h.t-p.t||_e[p.kind]-_e[h.kind]);let m=new Map;return s.filter(h=>{let p=`${h.kind}:${h.entity}`,f=m.get(p),d=h.kind==="motion"?30*6e4:5*6e4;return f!==void 0&&h.t-f<d?!1:(m.set(p,h.t),!0)})}function nn(r,e){let t=[];for(let n=r.length-1;n>=0;n--){let o=r[n];if(!e.has(je[o.kind]))continue;let i=fe(o.t),s=t[t.length-1];s&&s.hour===i?s.events.unshift(o):t.push({hour:i,events:[o]})}return t}function on(r,e,t=14){let n=[];for(let o of r){let i=e(o.t),s=n[n.length-1];s&&i-s.x<t?(s.events.push(o),_e[o.kind]>_e[s.top.kind]&&(s.top=o,s.t=o.t)):n.push({x:i,t:o.t,top:o,events:[o]})}return n}var we=[60,360,900,3600],qe=[60,360,900,3600,14400],rn=360;function sn(r,e){return r==="low"||e?500:r==="high"?167:250}var be=class{start;end;t;playing=!1;speed;speeds;constructor(e,t,n,o=rn,i=we){this.start=e,this.end=t,this.speeds=i,this.t=Math.min(t,Math.max(e,n)),this.speed=i.includes(o)?o:rn}setRange(e,t,n=this.speeds){this.start=e,this.end=t,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(t,Math.max(e,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(e){this.t=Math.min(this.end,Math.max(this.start,e))}advance(e){if(!this.playing||!(e>0))return!1;let t=Math.min(this.end,this.t+e*this.speed),n=t!==this.t;return this.t=t,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let e=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(e+1)%this.speeds.length],this.speed}};function an(r,e,t,n=3e4){if(t>0)return r.find(o=>o.t>e+n)??null;for(let o=r.length-1;o>=0;o--)if(r[o].t<e-n)return r[o];return null}function ln(r,e,t){let n=0,o=r.length;for(;n<o;){let s=n+o>>1;r[s].t<e?n=s+1:o=s}let i=n;for(;i<r.length&&r[i].t<=t;)i++;return n===0&&i===r.length?r:r.slice(n,i)}function Ye(r,e,t,n){if(!(t>e))return null;let o=0,i=r.length;for(;o<i;){let s=o+i>>1;r[s].t<=e?o=s+1:i=s}for(let s=o;s<r.length&&r[s].t<=t;s++)if(n(r[s]))return r[s];return null}function ye(r,e){let t=(r??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(t);if(n)return e-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let o=/^(\d{1,2}):(\d{2})$/.exec(t);if(!o||Number(o[1])>23||Number(o[2])>59)return null;let i=Ke(e,Number(o[1]),Number(o[2]));return i>e?Ke(i-864e5,Number(o[1]),Number(o[2])):i}var re={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},ve=r=>Dt`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,cn={alarm:"#ff3b4f",smoke:"#ff3b4f",outage:"#ffc83a",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",camera:"#e07aff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},bo={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},Qe=class extends D{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=e=>{let t=this.session,n=e.composedPath()[0];if(!(!t?.playback||e.ctrlKey||e.metaKey||e.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n?.isContentEditable))if(e.key===" "){if(n?.tagName==="BUTTON")return;e.preventDefault(),t.toggle()}else(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),t.seek(t.playback.t+(e.key==="ArrowLeft"?-1:1)*(e.shiftKey?36e5:3e5)))};onEscape=e=>{e.key!=="Escape"||!this._sheet||(e.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),this.unlisten?.(),this.unlisten=null,this.listened=null,this.resize?.disconnect(),this.resize=null;for(let e of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(e)}updated(){this.session!==this.listened&&(this.unlisten?.(),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let e=this.renderRoot.querySelector(".track");e&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(t=>{let n=Math.round(t[0]?.contentRect.width??0);n!==this._w&&(this._w=n)}),this.resize.observe(e)),this.onTick()}signature(){let e=this.session,t=e?.playback,n=this._sheet==="day"&&t?$(t.t):0;return`${e?.state}|${e?.error}|${Math.round((e?.progress??0)*20)}|${t?.playing}|${t?.speed}|${e?.events.length}|${e?.allEvents.length}|${e?.range}|${e?.maxDays}|${e?.loadingDay}|${e?.full}|${e?.version}|${e?.atNow}|${e?.follow}|${e?.stopImportant}|${n}`}onTick(){let e=this.signature();e!==this.sig&&(this.sig=e,this.requestUpdate());let t=this.session,n=t?.playback;if(!t||!n)return;let o=this.renderRoot.querySelector(".clock-time"),i=this.renderRoot.querySelector(".clock-ago");o&&(o.textContent=this.clockText(n.t)),i&&(i.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(e){let t=this.renderRoot.querySelector(".head");t&&(t.style.transform=`translateX(${e.toFixed(1)}px)`)}get language(){return this.session?.opts.live.language??navigator.language}xOf(e){let t=this.session;return!t||!this._w?0:(e-t.start)/(t.end-t.start)*this._w}tOf(e){let t=this.session;return t.start+Math.min(this._w,Math.max(0,e))/Math.max(1,this._w)*(t.end-t.start)}weekday(e){return new Date(e).toLocaleDateString(this.language,{weekday:"short",...ne()}).replace(/\.$/,"")}clockText(e){return`${this.weekday(e)} ${this.time(e)}`}agoText(e){let t=this.session,n=Math.round((t.end-e)/6e4);return n<1?t.t("tt_now"):t.t("tt_ago",{d:this.duration(n*6e4)})}duration(e){let t=this.session,n=Math.round(e/6e4),o=Math.floor(n/1440),i=Math.floor(n%1440/60),s=n%60;return o?`${t.t("tt_days",{n:o})}${i?` ${i} h`:""}`:i?`${i} h${s?` ${s} min`:""}`:`${s} min`}name(e){let t=this.session;return t.names.get(e)??t.opts.live.states[e]?.attributes.friendly_name??e}eventText(e){return this.session.t(`tt_ev_${e.kind}`,{name:this.name(e.entity)})}time(e){return new Date(e).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...ne()})}onDown(e){let t=this.session;!t?.playback||e.target.closest(".mark")||(e.currentTarget.setPointerCapture?.(e.pointerId),this.dragging=!0,this._label=null,t.pause(),this.scrub(e,!0))}onMove(e){this.dragging&&this.scrub(e,!1)}onUp(e){this.dragging&&(this.scrub(e,!0),this.dragging=!1)}scrub(e,t){let n=this.session,o=this.renderRoot.querySelector(".track"),i=e.clientX-o.getBoundingClientRect().left,s=Math.max(n.playback?.start??n.start,this.tOf(i));this.placeHead(this.xOf(s));let a=this.renderRoot.querySelector(".clock-time");a&&(a.textContent=this.clockText(s)),clearTimeout(this.scrubTimer);let l=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();t||c-this.scrubAt>=l?(this.scrubAt=c,n.seek(s)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(s)},l)}markDown(e){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(e)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(e){if(this.held){this.held=!1;return}this.session?.seek(e.t,!0),this.showLabel(e,2500)}showLabel(e,t=4500){this._label={x:e.x,lines:e.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(e.events.length>4?[`+${e.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,t)}renderTrack(){let e=this.session,t=this._w;if(!t)return y;let n=e.range==="7d",o=d=>`${((d-e.start)/(e.end-e.start)*100).toFixed(3)}%`,i=(d,g,k,_)=>g>d?v`<i class=${k} style="left:${o(Math.max(d,e.start))};width:calc(${o(Math.min(g,e.end))} - ${o(Math.max(d,e.start))})">${_?v`<span>${_}</span>`:y}</i>`:y,s=e.timeline?.oldest??null,a=e.playback?.start??e.start,l=e.recorderStart,c=y;a>e.start+6e4&&(e.loadingDay!==null?c=i(e.start,a,"loading",e.t("tt_loading_day",{day:this.weekday(e.loadingDay+12*36e5)})):l!==null&&l>e.start?c=i(e.start,a,"nodata",e.t("tt_recorder_days",{n:e.timeline?.keepDays??0})):c=i(e.start,a,"nodata",e.full?e.t("tt_memory_full"):""));let u=n?t/(e.end-e.start)*36e5*3>=12?3:6:1,m=t>=640?3:6,h=[],p=fe(e.start);for(p<e.start&&(p+=36e5);p<=e.end;p+=36e5){let d=G(p);if(d%u)continue;let g=d===0,k=g?n?`${this.weekday(p)} ${new Date(p).toLocaleDateString(this.language,{day:"numeric",...ne()}).replace(/\.$/,"")}.`:this.weekday(p):!n&&d%m===0?this.time(p):"";h.push(v`<b class="tick ${g?"tick-day":k?"tick-major":""}" style="left:${o(p)}">${k?v`<span>${k}</span>`:y}</b>`)}let f=`${t}|${e.events.length}|${e.start}|${e.end}|${e.version}|${a}`;return f!==this.clusterSig&&(this.clusterSig=f,this.clusters=on(e.shownEvents(),d=>this.xOf(d),t<500?18:14)),v`${e.nights.map(([d,g])=>i(d,g,"night"))} ${c} ${s!==null&&s>a?i(a,s,"nodata"):y}
      ${e.gaps.map(([d,g])=>i(d,g,"gap"))} ${h}
      ${this.clusters.map(d=>v`<button
          class="mark ${d.events.length>1?"mark-many":""}"
          style="left:${d.x.toFixed(1)}px;--c:${cn[d.top.kind]}"
          title=${d.events.map(g=>`${this.time(g.t)} ${this.eventText(g)}`).join(`
`)}
          aria-label=${`${this.time(d.t)} ${this.eventText(d.top)}`}
          @pointerdown=${()=>this.markDown(d)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${g=>g.preventDefault()}
          @click=${()=>this.markClick(d)}
        >
          ${d.events.length>1?v`<span>${d.events.length}</span>`:y}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(e.playback?.t??e.end).toFixed(1)}px)"></div>
      ${this._label?v`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(d=>v`<span>${d}</span>`)}</div>`:y}`}toggleSheet(e="events"){this._sheet=this._sheet===e||this._sheet&&e==="events"?null:e}toggleFilter(e){let t=new Set(this._filters);t.has(e)?t.delete(e):t.add(e),this._filters=t}where(e){return this.session.roomOf.get(e)?.name??""}renderEvents(){let e=this.session,t=e.t,n=["safety","openings","devices",...e.energy?["energy"]:[]],o=nn(e.shownEvents(!0).filter(s=>e.energy||je[s.kind]!=="energy"),this._filters),i=0;return v`<div class="filters">
        ${n.map(s=>v`<button class="fchip" aria-pressed=${this._filters.has(s)} @click=${()=>this.toggleFilter(s)}>${t(`tt_f_${s}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${e.follow} @change=${s=>e.setFollow(s.target.checked)} />${t("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${e.stopImportant} @change=${s=>e.setStopImportant(s.target.checked)} />${t("tt_stop")}</label>
      ${o.length?o.map(s=>i>=300?y:(i+=s.events.length,v`<h4>${this.clockText(s.hour)}</h4>
              ${s.events.map(a=>this.row(cn[a.kind],this.time(a.t),this.eventText(a),this.where(a.entity),()=>e.goTo(a)))}`)):v`<p class="none">${t("tt_no_events")}</p>`}`}row(e,t,n,o,i){return v`<button class="row" @click=${i}>
      <i style="background:${e}"></i><time>${t}</time><span>${n}${o?v`<small>${o}</small>`:y}</span>
    </button>`}awayText(e){let t=this.session.t,n=this.name(e.entity);switch(e.kind){case"alarm":case"appliance":return this.eventText({kind:e.event??"alarm",entity:e.entity});case"door":case"window":return t("tt_away_door",{name:n,n:e.count});case"motion":return t("tt_away_motion",{name:n,n:e.count});case"light_on":return t("tt_away_light",{name:n,d:this.duration(e.ms)});case"window_open":return t("tt_away_open",{name:n,d:this.duration(e.ms)})}}renderAway(){let e=this.session,t=e.t,n=e.playback;this.awayOffer?.version!==e.version&&(this.awayOffer={version:e.version,offer:e.awayOffer()});let o=this.awayOffer.offer,[i,s]=this._awayFrom??o??[e.lastClosed!==null&&e.lastClosed>=n.start?e.lastClosed:Math.max(n.start,e.end-3*36e5),e.end],a=`${e.version}|${i}|${s}`;this.awayCache?.key!==a&&(this.awayCache={key:a,rows:e.away(i,s)});let l=this.awayCache.rows,c=h=>this._awayFrom=h,u=(h,p)=>`${this.clockText(h)} \u2013 ${p>=e.end-6e4?t("tt_now"):this.clockText(p)}`,m=h=>{let p=ye(h.target.value,e.end);p!==null&&c([Math.max(n.start,p),e.end])};return v`<p class="since">${t("tt_away_since")}:</p>
      <div class="filters">
        ${e.lastClosed!==null&&e.lastClosed>=n.start?v`<button class="fchip" aria-pressed=${i===e.lastClosed} @click=${()=>c([e.lastClosed,e.end])}>${t("tt_away_last")}</button>`:y}
        ${o?v`<button class="fchip" aria-pressed=${i===o[0]&&s===o[1]} @click=${()=>c(o)}>${t("tt_away_quiet",{from:this.time(o[0]),to:this.time(o[1])})}</button>`:y}
        <input class="when" type="time" aria-label=${t("tt_away_since")} @change=${m} />
      </div>
      <h4>${u(i,s)}</h4>
      ${l.length?l.slice(0,200).map(h=>this.row(bo[h.kind],this.time(h.t),this.awayText(h),this.where(h.entity),()=>e.goTo(h))):v`<p class="none">${t("tt_away_none")}</p>`}`}renderDay(){let e=this.session,t=e.t,n=e.playback,o=$(n.t),i=e.daySummary(o),s=$(o-12*36e5),a=this._compare?e.daySummary(s):null;this._compare&&(!a||a.from>s+6e4)&&queueMicrotask(()=>e.ensureLoaded(s));let l=(b,S)=>b&&b.from>S+6e4?t("tt_day_partial",{time:this.time(b.from)}):"",c=(b,S=1)=>b.toLocaleString(this.language,{maximumFractionDigits:S,minimumFractionDigits:S}),u=b=>b>=6e4?`${c(b/36e5)} h`:"\u2013",m=b=>b&&b.tMin!==null&&b.tMax!==null?`${c(b.tMin)}\u2013${c(b.tMax)}\xB0`:"\u2013",h=b=>v`<td>${b?u(b.lightMs):"\u2013"}</td><td>${b?u(b.windowMs):"\u2013"}</td><td>${b?u(b.heatMs):"\u2013"}</td><td>${m(b)}</td>`,p=new Date(o).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...ne()}),f=b=>b?.energy??null,d=f(i),g=f(a),k=b=>b===void 0?"\u2013":`${c(b)} kWh`,_=b=>b==null?"\u2013":`${Math.round(b*100)} %`,w=this._compare?a?l(a,s):e.loadingDay!==null?t("tt_loading"):"":"";return v`<h4>${t("tt_day_title",{day:p})}</h4>
      ${l(i,o)?v`<p class="since">${l(i,o)}</p>`:y}
      ${w?v`<p class="since">${t("tt_day_before")}: ${w}</p>`:y}
      <div class="filters">
        <button class="fchip" @click=${()=>e.yesterday()}>⟲ ${t("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${t("tt_day_compare")}</button>
      </div>
      ${i&&(i.rooms.length||d)?v`${i.rooms.length?v`<table>
                  <thead>
                    <tr><th></th><th>${t("tt_day_light")}</th><th>${t("tt_day_window")}</th><th>${t("tt_day_heat")}</th><th>${t("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${i.rooms.map(b=>v`<tr><th>${b.name}</th>${h(b)}</tr>
                        ${a?v`<tr class="before"><th>${t("tt_day_before")}</th>${h(a.rooms.find(S=>S.roomId===b.roomId))}</tr>`:y}`)}
                  </tbody>
                </table>`:y}
            ${d?v`<div class="energy">
                  ${[["tt_day_pv",k(d.pv),k(g?.pv)],["tt_day_use",k(d.use),k(g?.use)],["tt_day_import",k(d.imp),k(g?.imp)],["tt_day_export",k(d.exp),k(g?.exp)],["tt_day_self",_(d.self),_(g?.self)]].map(([b,S,R])=>v`<span>${t(b)}</span><b>${S}</b>${a?v`<em>${R}</em>`:y}`)}
                </div>`:y}`:v`<p class="none">${t("tt_day_none")}</p>`}`}renderSheet(){let t=this.session.t,n=this._sheet,o=["events","away","day"];return v`<aside class="sheet" role="dialog" aria-label=${t("tt_sheet")}>
      <header>
        ${o.map(i=>v`<button class="tab" aria-pressed=${n===i} title=${i==="away"?t("tt_away_title"):y} @click=${()=>this._sheet=i}>${t(i==="events"?"tt_tab_events":i==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${t("tt_close")} aria-label=${t("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let e=this.session;if(!e)return y;let t=e.t,n=e.playback,o=e.state==="ready"&&!!n,i=e.state==="error"?e.error==="not_unlocked"?t("tt_locked"):e.error==="no_recorder"?t("tt_no_recorder"):e.error==="unknown_command"?t("tt_restart"):t("tt_error",{error:e.error??"?"}):null,s=n?3600/n.speed:10,a=Math.round((e.end-e.start)/6e4);return v`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${t("tt_badge")}</span>
        ${o?v`<b class="clock-time"></b><span class="clock-ago"></span>`:v`<span class="clock-msg">${i??`${t("tt_loading")} ${Math.round(e.progress*100)} %`}</span>`}
      </div>
      ${this._toast?v`<div class="toast" role="alert">${t("tt_readonly")}</div>`:y}
      ${o&&this._sheet?this.renderSheet():y}
      <div class="bar">
        <button class="btn prev" ?disabled=${!o} title=${t("tt_prev")} aria-label=${t("tt_prev")} @click=${()=>e.step(-1)}>${ve(re.prev)}</button>
        <button class="btn play" ?disabled=${!o} title=${t(n?.playing?"tt_pause":"tt_play")} aria-label=${t(n?.playing?"tt_pause":"tt_play")} @click=${()=>e.toggle()}>
          ${ve(n?.playing?re.pause:re.play)}
        </button>
        <button class="btn next" ?disabled=${!o} title=${t("tt_next")} aria-label=${t("tt_next")} @click=${()=>e.step(1)}>${ve(re.next)}</button>
        <div
          class="track ${o?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${t("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${a}
          aria-valuenow=${n?Math.round((n.t-e.start)/6e4):a}
          @pointerdown=${l=>this.onDown(l)}
          @pointermove=${l=>this.onMove(l)}
          @pointerup=${l=>this.onUp(l)}
          @pointercancel=${l=>this.onUp(l)}
        >
          ${o?this.renderTrack():i?v`<em class="msg">${i}</em>`:v`<i class="progress" style="width:${Math.round(e.progress*100)}%"></i>`}
        </div>
        ${i&&e.error!=="not_unlocked"?v`<button class="chip" @click=${()=>{e.load()}}>${t("tt_retry")}</button>`:y}
        <button class="chip range" ?disabled=${!o} title=${t("tt_range_hint")} aria-label=${t("tt_range_hint")} @click=${()=>e.setRange(e.range==="7d"?"24h":"7d")}>
          ${e.range==="7d"?t("tt_days",{n:e.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!o} aria-pressed=${!!this._sheet} title=${t("tt_sheet")} aria-label=${t("tt_sheet")} @click=${()=>this.toggleSheet()}>${ve(re.list)}</button>
        <button class="chip speed" ?disabled=${!o} title=${t("tt_speed",{s:s>=60?"1 min":s>=1?`${Math.round(s)} s`:`${s.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>e.nextSpeed()}>
          ${n?.speed??360}×
        </button>
        <button class="chip live ${e.atNow?"live-now":""}" title=${t("tt_live_hint")} @click=${()=>e.exit()}>
          <i></i>${e.atNow?`${t("tt_now_reached")} \xB7 ${t("tt_live")}`:t("tt_live")}
        </button>
      </div>`}static styles=Ee`
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
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",Qe);var wo=globalThis.__fp3dLanguages??={extra:new Map,pending:new Map},{extra:Oi,pending:Hi}=wo;var vo=new Map;function Ze(r,e){return vo.get(e)??ko(r,e)}function ko(r,e){let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(r.states[n]?.attributes.device_class))):[]}var xo=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),So=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),Mo=600,Xe=r=>r.slice(0,r.indexOf("."));function Ro(r,e){let t=r.states[e];return!e.startsWith("sensor.")||!t||t.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(t.state))||t.state==="unavailable"||t.state==="unknown"}var un=new Set(["geocoded_location","location"]),Ao=/location|address|geocoded|ssid|bssid|standort|adresse/i;function To(r,e){let t=r.states[e]?.attributes??{},n=r.entities?.[e]?.translation_key??"";return un.has(String(t.device_class??""))||un.has(n)||"latitude"in t||"longitude"in t?!0:Ao.test(`${e} ${String(t.friendly_name??"")} ${n}`)}function pn(r){let e=new Set;for(let t of Object.values(r.states))if(t.entity_id.startsWith("person.")&&Array.isArray(t.attributes.device_trackers))for(let n of t.attributes.device_trackers)typeof n=="string"&&e.add(n);return e}function Eo(r,e=pn(r)){let t=new Set;for(let n of e){let o=r.entities?.[n]?.device_id;o&&t.add(o)}return t}function Je(r,e,t,n=Mo){let o=new Set(e.presence.flatMap(_=>[_.person,_.sensor]).filter(_=>!!_)),i=pn(r);for(let _ of i)o.add(_);let s=Eo(r,i),a=new Set((t.cars??[]).filter(_=>_.startsWith("device_tracker.")&&!o.has(_)&&!!r.states[_])),l=new Set(e.floors.flatMap(_=>_.rooms.map(w=>w.area_id)).filter(_=>!!_)),c=[];for(let[_,w]of Object.entries(r.entities??{})){if(!w.area_id&&w.device_id){let b=r.devices?.[w.device_id];if(!b?.area_id||!l.has(b.area_id))continue}else if(!w.area_id||!l.has(w.area_id))continue;w.hidden||w.entity_category||!So.has(Xe(_))||c.push(_)}let u=Object.keys(r.states).filter(_=>_.startsWith("weather.")),m=e.floors.flatMap(_=>_.placements.filter(w=>w.entity_id.startsWith("camera.")).flatMap(w=>Ze(r,w.entity_id))),h=[...new Set([...a,...t.entities,...m,"sun.sun",...e.settings.weather_entity?[e.settings.weather_entity]:[],...e.settings.outage_entity?[e.settings.outage_entity]:[],...u.slice(0,1),...c])],p=[],f=h.filter(_=>{if(!_.includes(".")||!a.has(_)&&xo.has(Xe(_))||o.has(_)||!r.states[_])return!1;if(a.has(_))return!0;let w=r.entities?.[_]?.device_id;return w&&s.has(w)||To(r,_)?(p.push(_),!1):!0}),d=f.slice(0,n),g=d.filter(_=>Ro(r,_)),k=new Set(g);return{entities:d.filter(_=>!k.has(_)),stats:g,overflow:f.slice(n),cars:d.filter(_=>a.has(_)),hidden:p}}var hn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},Po=new Set(["front","front_glass","sidelight","sidelights"]),$o=new Set(["washer","dryer","dishwasher"]);function dn(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[i,s]=e[n],[a,l]=e[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(t=!t)}return t}function Fo(r,e){if(e.type!=="door"||e.wall)return!1;if(e.style&&Po.has(e.style))return!0;if(e.style)return!1;let t=r.rooms.find(m=>m.id===e.room_id);if(!t||t.points.length<3)return!1;let n=t.points[e.edge],o=t.points[(e.edge+1)%t.points.length];if(!n||!o)return!1;let i=Math.hypot(o[0]-n[0],o[1]-n[1]);if(i<1e-6)return!1;let s=(o[0]-n[0])/i,a=(o[1]-n[1])/i,l=[n[0]+s*e.offset,n[1]+a*e.offset],c=m=>[l[0]-a*m,l[1]+s*m],u=dn(c(.3),t.points)?c(-.4):c(.4);return!r.rooms.some(m=>m.id!==t.id&&m.points.length>=3&&dn(u,m.points))}function et(r,e,t){let n=new Map,o=new Map(t.furniture);for(let i of e.floors)for(let s of i.furniture){if(!$o.has(s.type))continue;let a=o.get(s.id)?.power,l=i.placements.find(u=>r.states[u.entity_id]?.attributes.device_class==="power"&&Math.hypot(u.x-s.x,u.z-s.z)<=1.2)?.entity_id,c=a??l;c&&!n.has(c)&&n.set(c,s)}return n}function mn(r,e,t,n){let o=new Map,i=(a,l)=>{a&&n.has(a)&&!o.has(a)&&o.set(a,l)},s=new Map(t.openings);for(let a of e.floors)for(let l of a.openings){let c=s.get(l.id);if(c)if(l.type==="garage")for(let u of[c.contact,c.cover])i(u,"garage");else if(l.type==="door"){if(Fo(a,l))for(let u of[c.contact,c.contact2])i(u,"door")}else[c.contact,c.tilt,c.contact2,c.tilt2].filter(m=>!!m&&n.has(m)).forEach((m,h)=>i(m,h?"window_more":"window"))}for(let a of et(r,e,t).keys())i(a,"washer");for(let a of e.floors)for(let l of a.placements)if(l.entity_id.startsWith("camera."))for(let c of Ze(r,l.entity_id))i(c,"camera");for(let a of n){if(o.has(a))continue;let l=Xe(a),c=String(r.states[a]?.attributes.device_class??"");l==="lock"?i(a,"lock"):l==="alarm_control_panel"?i(a,"alarm"):l==="vacuum"?i(a,"robot"):l==="weather"?i(a,"weather"):l==="cover"&&(c==="garage"||c==="gate")?i(a,"garage"):l==="binary_sensor"&&(hn[c]?i(a,hn[c]):c==="garage_door"?i(a,"garage"):c==="motion"&&i(a,"motion"))}return o}var Do={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function Oo(r,e){if(r==="rgb_color")return Array.isArray(e)&&e.every(t=>typeof t=="number")?e.map(t=>Math.round(t)):null;if(typeof e!="number"||!Number.isFinite(e))return e;switch(r){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(e/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(e/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(e);case"volume_level":return Math.round(Math.round(e*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(e*10)/10;default:return e}}function Ho(r){return r==="home"||r==="unavailable"||r==="unknown"?r:"not_home"}function tt(r){let e=r.entity_id.slice(0,r.entity_id.indexOf("."));if(e==="device_tracker")return{s:Ho(r.state),a:null};let t=Do[e];if(!t?.length)return{s:r.state,a:null};let n={};for(let o of t){let i=r.attributes[o];if(i==null)continue;let s=Oo(o,i);s!=null&&(n[o]=s)}return{s:r.state,a:Object.keys(n).length?n:null}}var nt=3e5,fn=2e4,Co=[6e4,nt,15*6e4,36e5],zo=(r,e)=>r.startsWith("sensor.")&&e.state!==""&&Number.isFinite(Number(e.state));function No(r,e){let t=[];for(let n of r){let o=t[t.length-1];o&&Math.floor(o.t/e)===Math.floor(n.t/e)?t[t.length-1]=n:t.push(n);let i=t[t.length-2];i&&i.k===t[t.length-1].k&&t.pop()}return t}var ke=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(e,t,n=Date.now()){this.ids=e,this.startStates=t,this.startedAt=n;for(let o of e)this.seen.set(o,t[o]),t[o]&&this.lastKey.set(o,O(tt(t[o])))}get pending(){return this.count}record(e,t){for(let n of this.ids){let o=e[n];if(o===this.seen.get(n)||(this.seen.set(n,o),!o))continue;let i=tt(o),s=O(i);if(this.lastKey.get(n)===s)continue;let a=this.rows.get(n),l=a?.[a.length-1],c=Date.parse(o.last_updated??o.last_changed??""),u=Math.max(Number.isFinite(c)?Math.min(t,c):t,l?.t??-1/0);if(l&&zo(n,o)&&Math.floor(l.t/nt)===Math.floor(u/nt)){a[a.length-1]={t:u,v:i,k:s},this.lastKey.set(n,s);continue}this.lastKey.set(n,s),a?a.push({t:u,v:i,k:s}):this.rows.set(n,[{t:u,v:i,k:s}]),this.count++}this.count>fn&&this.compact()}compact(){for(let e of Co){let t=0;for(let[n,o]of this.rows){let i=No(o,e);this.rows.set(n,i),t+=i.length}if(this.count=t,t<=fn/2)return}}flush(e,t){let n=0,o=0;for(let i of this.ids){if(this.seeded.has(i)||e.tracks.has(i)||e.series.has(i))continue;this.seeded.add(i);let s=this.startStates[i],a=[...s?[{t:this.startedAt,v:tt(s)}]:[],...this.rows.get(i)??[]],l=Yt(i,a);this.rows.delete(i),l&&(e.tracks.set(i,l),e.missing.delete(i),o++,n+=l.times.length)}for(let[i,s]of this.rows){let a=e.tracks.get(i);if(a){n+=Be(a,s);continue}let l=e.series.get(i);l&&(n+=qt(l,s.map(c=>({t:c.t,value:Number(c.v.s)}))))}return this.rows=new Map,this.count=0,e.end=Math.max(e.end,t),{added:n,created:o}}};function _n(r,e,t){if(!(e.state==="opening"||e.state==="closing")||e.pos===null||!t||t.pos===null)return e.pos;let o=t.t-e.t;return!(o>0)||o>18e4||r<=e.t?e.pos:r>=t.t?t.pos:Math.round(e.pos+(t.pos-e.pos)*(r-e.t)/o)}var x=Math.PI/180;function xe(r,e,t){let n=(t/864e5+24405875e-1-2451545)/36525,o=(280.46646+n*(36000.76983+n*3032e-7))%360,i=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(i*x)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*i*x)*(.019993-101e-6*n)+Math.sin(3*i*x)*289e-6,l=125.04-1934.136*n,c=o+a-.00569-.00478*Math.sin(l*x),m=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*x),h=Math.asin(Math.sin(m*x)*Math.sin(c*x)),p=Math.tan(m/2*x)**2,f=4/x*(p*Math.sin(2*o*x)-2*s*Math.sin(i*x)+4*s*p*Math.sin(i*x)*Math.cos(2*o*x)-.5*p*p*Math.sin(4*o*x)-1.25*s*s*Math.sin(2*i*x)),g=(((t/6e4%1440+1440)%1440+f+4*e)%1440+1440)%1440,k=(g/4<0?g/4+180:g/4-180)*x,_=r*x,w=Math.min(1,Math.max(-1,Math.sin(_)*Math.sin(h)+Math.cos(_)*Math.cos(h)*Math.cos(k))),b=Math.acos(w),S=90-b/x;S+=Wo(S);let R=Math.cos(_)*Math.sin(b),q=180;if(Math.abs(R)>1e-9){let dt=Math.acos(Math.min(1,Math.max(-1,(Math.sin(_)*Math.cos(b)-Math.sin(h))/R)))/x;q=k>0?(dt+180)%360:(540-dt)%360}return{elevation:S,azimuth:q}}function Wo(r){if(r>85)return 0;let e=Math.tan(r*x);return(r>5?58.1/e-.07/e**3+86e-6/e**5:r>-.575?1735+r*(-518.2+r*(103.4+r*(-12.79+r*.711))):-20.772/e)/3600}function ot(r,e,t){return xe(r,e,t).elevation<-.833}function gn(r,e,t,n,o=5*6e4){let i=[],s=null;for(let a=t;a<=n;a+=o){let l=ot(r,e,a);l&&s===null&&(s=a),!l&&s!==null&&(i.push([s,a]),s=null)}return s!==null&&i.push([s,n]),i}var st=class extends Error{constructor(e){super(`Time travel is read-only: ${e}`),this.name="ReplayReadOnly"}},Io=new Set(["home_3d/building/get","home_3d/image/get","home_3d/packs/list","home_3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Lo=new Set(["home_3d/building/subscribe"]),rt={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},bn=["person.","device_tracker."],it=r=>r.slice(0,r.indexOf("."));function Se(r,e){if(!e?.some(n=>n in r))return r;let t={...r};for(let n of e)delete t[n];return t}function ie(r){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:r}})),new st(r)}function Vo(r,e){let t=r,n={...r,states:e};n.callService=(o,i)=>ie(`${o}.${i}`),n.callWS=o=>Io.has(String(o.type))?r.callWS(o):ie(String(o.type)),n.connection={subscribeMessage:(o,i)=>Lo.has(String(i.type))?r.connection.subscribeMessage(o,i):ie(String(i.type))};for(let o of["callApi","callApiRaw"]){let i=t[o];typeof i=="function"&&(n[o]=(s,...a)=>String(s).toUpperCase()==="GET"?i.call(r,s,...a):ie(`${s} ${String(a[0])}`))}for(let o of["sendWS","fetchWithAuth"])o in t&&(n[o]=()=>ie(o));return n}var Bo=new Set(["light","switch","input_boolean","binary_sensor","fan"]),Me=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(e,t){this.timeline=e,this.cursor=new U(e),this.cursor.tracks.forEach((o,i)=>this.trackAt.set(o.id,i)),this.location=t.location??null,this.frozen=t.states??null;let n=new Set([...t.allowed??[]].filter(o=>o.startsWith("device_tracker.")));this.requested=[...new Set([...t.requested,...e.tracks.keys(),...e.series.keys()])].filter(o=>n.has(o)||!bn.some(i=>o.startsWith(i)))}refresh(){let e=this.cursor.t;this.cursor=new U(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((t,n)=>this.trackAt.set(t.id,n)),Number.isFinite(e)&&this.cursor.at(e)}hassAt(e,t,n=!0){let o=this.frozen??=e.states,i=!1;if(!this.base){this.base={};for(let[l,c]of Object.entries(o))bn.some(u=>l.startsWith(u))||(this.base[l]=l.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:Se(c.attributes,["entity_picture","access_token"])}:c);i=!0}this.sameContext(e)||(this.live=e,i=!0);let s=!n&&t>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(t),this.pulses=s?this.findPulses(s):[];let a=[];for(let l of this.requested){let c=this.slots.get(l),u=this.slot(l,t,o[l],c);u!==c&&(this.slots.set(l,u),a.push(l))}if(!i&&!a.length&&this.hass)return this.hass;if(i){this.states={...this.base};for(let l of this.requested){let c=this.slots.get(l);c&&(this.states[l]=c.obj)}}else{this.states={...this.states};for(let l of a)this.states[l]=this.slots.get(l).obj}return this.hass=Vo(this.live,this.states),this.hass}findPulses(e){let t=[],n=this.cursor.idx;for(let o=0;o<n.length;o++){let i=e[o],s=n[o];if(i<0||s-i<2)continue;let a=this.cursor.tracks[o];if(!Bo.has(it(a.id)))continue;let l=a.values[a.vals[i]].s;if(a.values[a.vals[s]].s===l){for(let c=i+1;c<s;c++)if(a.values[a.vals[c]].s!==l){t.push(a.id);break}}}return t}sameContext(e){let t=this.live;if(!t)return!1;if(t===e)return!0;let n=e;for(let o in n)if(o!=="states"&&n[o]!==t[o])return!1;for(let o in t)if(!(o in n))return!1;return!0}slot(e,t,n,o){let i=this.trackAt.get(e),s=this.timeline.series.get(e),a,l;if(e==="sun.sun"&&this.location){let c=xe(this.location.lat,this.location.lon,t),u=Math.round(c.elevation*2)/2,m=Math.round(c.azimuth*2)/2,h=xe(this.location.lat,this.location.lon,t+6e5).elevation>c.elevation;a=`${u}|${m}|${h}`,l=()=>({entity_id:e,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...Se(n?.attributes??{},rt.sun),elevation:u,azimuth:m,rising:h}})}else if(i!==void 0&&this.cursor.idx[i]>=0){let c=this.cursor.tracks[i],u=this.cursor.idx[i],m=c.values[c.vals[u]],h=e.startsWith("cover.")?this.coverPos(c,u,t):null;a=h===null?`${u}`:`${u}:${h}`,l=()=>{let p={...Se(n?.attributes??{},rt[it(e)]),...m.a??{}};h!==null&&(p.current_position=h),e==="sun.sun"&&p.elevation===void 0&&Object.assign(p,{elevation:m.s==="above_horizon"?25:-12,azimuth:180});let f=c.since[u];return f>this.timeline.start?{entity_id:e,state:m.s,attributes:p,last_changed:new Date(f).toISOString()}:{entity_id:e,state:m.s,attributes:p}}}else if(s){let c=W(s,t),u=this.stepOf(e,s,n),m=Wt(c,u);a=`n${m}`,l=()=>({entity_id:e,state:m,attributes:n?.attributes??{},last_changed:new Date(t).toISOString()})}else a="none",l=()=>({entity_id:e,state:"unknown",attributes:Se(n?.attributes??{},rt[it(e)])});return o&&o.key===a&&o.attrs===n?.attributes?o:{key:a,attrs:n?.attributes,obj:l()}}coverPos(e,t,n){let o=e.values[e.vals[t]];if(o.s!=="opening"&&o.s!=="closing")return null;let i=a=>typeof a.a?.current_position=="number"?a.a.current_position:null,s=t+1<e.times.length?{t:e.times[t+1],pos:i(e.values[e.vals[t+1]])}:null;return _n(n,{t:e.times[t],state:o.s,pos:i(o)},s)}stepOf(e,t,n){let o=this.steps.get(e);if(o===void 0){let i=t.mean.find(s=>!Number.isNaN(s))??0;o=Nt(n?.attributes.unit_of_measurement,this.live?.entities?.[e]?.display_precision,i),this.steps.set(e,o)}return o}rows(e,t,n){let o={};for(let i of e){let s=this.timeline.tracks.get(i);if(!s)continue;let a=[];for(let l=Math.max(0,M(s.times,t));l<s.times.length&&s.times[l]<=n;l++)a.push({s:s.values[s.vals[l]].s,lu:s.times[l]/1e3});a.length&&(o[i]=a)}return o}};var wn=new Set(["cleaning","paused","returning"]),Uo=new Set(["","unknown","unavailable","none","null"]);function yn(r,e,t){if(!r)return[];let n=c=>r.values[r.vals[c]].s,o=M(r.times,t);if(o<0||!wn.has(n(o)))return[];let i=o;for(;i>0&&wn.has(n(i-1));)i--;let s=r.times[i],a=[],l=c=>{let u=typeof c=="string"?c.trim():"";!Uo.has(u.toLowerCase())&&a[a.length-1]!==u&&a.push(u)};if(e){let c=Math.max(0,M(e.times,s));for(e.times[c]<s-6e4&&c++;c<e.times.length&&e.times[c]<=t;c++)l(e.values[e.vals[c]].s)}else for(let c=i;c<=o;c++)l(r.values[r.vals[c]].a?.current_room);return a}var at=r=>r.slice(0,r.indexOf("."));function Go(r,e){let t=r.entities?.[e];return t?t.area_id??(t.device_id?r.devices?.[t.device_id]?.area_id??null:null):null}function vn(r,e,t){let n=[],o=new Map;for(let a of Object.keys(r.entities??{})){let l=Go(r,a);l&&o.set(l,[...o.get(l)??[],a])}let i=new Map(t.openings),s=new Map(t.furniture);for(let a of e.floors)for(let l of a.rooms){if(l.points.length<3)continue;let c=new Set(l.area_id?o.get(l.area_id)??[]:[]);for(let p of a.placements)A([p.x,p.z],l.points)&&c.add(p.entity_id);for(let p of a.furniture){let f=s.get(p.id);f?.entity&&A([p.x,p.z],l.points)&&c.add(f.entity)}let u=[];for(let p of a.openings){if(p.room_id!==l.id)continue;let f=i.get(p.id),d=f?[f.contact,f.tilt,f.contact2,f.tilt2].filter(g=>!!g):[];for(let g of d)c.add(g);d.length&&p.type!=="door"&&p.type!=="garage"&&u.push(d)}let m=[...c].filter(p=>!!r.states[p]),h=p=>r.states[p]?.attributes.device_class;n.push({floorId:a.id,roomId:l.id,name:l.name,lights:m.filter(p=>at(p)==="light"),windows:u,climates:m.filter(p=>at(p)==="climate"),temps:m.filter(p=>at(p)==="sensor"&&h(p)==="temperature"),all:m})}return n}function kn(r){let e=new Map;for(let t of r)for(let n of t.all)e.has(n)||e.set(n,t);return e}var lt=36e5;function se(r,e,t){let n=r.map(([i,s])=>[Math.max(i,e),Math.min(s,t)]).filter(([i,s])=>s>i);n.sort((i,s)=>i[0]-s[0]);let o=[];for(let i of n){let s=o[o.length-1];s&&i[0]<=s[1]?s[1]=Math.max(s[1],i[1]):o.push([i[0],i[1]])}return o}var Re=r=>r.reduce((e,[t,n])=>e+(n-t),0);function Ko(r,e,t){let n=[],o=null;for(let i=0;i<r.times.length;i++){let s=e(r.values[r.vals[i]]);s&&o===null&&(o=r.times[i]),!s&&o!==null&&(n.push([o,r.times[i]]),o=null)}return o!==null&&t>o&&n.push([o,t]),n}function Sn(r,e,t,n,o=2*lt){let i=se(e.flatMap(l=>{let c=r.tracks.get(l);return c?K(c,L,r.end):[]}),t,n);if(!e.some(l=>r.tracks.has(l)))return[];let s=[],a=t;for(let[l,c]of i)l-a>=o&&s.push([a,l]),a=Math.max(a,c);return n-a>=o&&s.push([a,n]),s}function Mn(r){for(let e=r.length-1;e>=0;e--){let[t,n]=r[e],o=0;for(let i=t;i<n;i+=6e5){let s=G(i);s>=7&&s<22&&(o+=Math.min(6e5,n-i))}if(o>=lt)return[t,n]}return null}var xn=["alarm","door","window","window_open","light_on","motion","appliance"];function Rn(r){let{timeline:e,roles:t,events:n,from:o,to:i}=r,s=[],a=new Map,l=(u,m,h)=>{let p=`${u}:${m}`,f=a.get(p);if(f)f.count++,f.t=Math.min(f.t,h);else{let d={kind:u,entity:m,t:h,count:1,ms:0};a.set(p,d),s.push(d)}};for(let u of n)u.t<o||u.t>i||(ge.has(u.kind)||u.kind==="rain"?s.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?l("door",u.entity,u.t):u.kind==="window"?l("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&s.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of r.motion){let m=e.tracks.get(u);if(m){for(let h of oe(m))h.from!==null&&h.t>=o&&h.t<=i&&h.to==="on"&&h.from!=="on"&&l("motion",u,h.t);if(m.dropped)for(let h of m.dropped)h>=o&&h<=i&&l("motion",u,h)}}let c=(u,m,h,p)=>{let f=se(h,o,i),d=Re(f);(d>=p||f.length&&f[f.length-1][1]>=i&&d>=6e4)&&s.push({kind:u,entity:m,t:f[0][0],count:f.length,ms:d})};for(let u of r.lights){let m=e.tracks.get(u);m&&c("light_on",u,K(m,jo,e.end),15*6e4)}for(let[u,m]of t){if(m!=="window"&&m!=="window_more")continue;let h=e.tracks.get(u);h&&c("window_open",u,K(h,L,e.end),30*6e4)}return s.sort((u,m)=>xn.indexOf(u.kind)-xn.indexOf(m.kind)||(u.kind==="light_on"||u.kind==="window_open"?m.ms-u.ms:u.t-m.t))}var jo=new Set(["on"]);function qo(r,e,t,n){let o=1/0,i=-1/0,s=r.series.get(e);if(s)for(let a=0;a<s.mean.length;a++){let l=s.start+(a+.5)*s.step,c=s.mean[a];l<t||l>n||Number.isNaN(c)||(o=Math.min(o,c),i=Math.max(i,c))}else{let a=r.tracks.get(e);if(a)for(let l=Math.max(0,M(a.times,t));l<a.times.length&&a.times[l]<=n;l++){let c=Number(a.values[a.vals[l]].s);Number.isFinite(c)&&(o=Math.min(o,c),i=Math.max(i,c))}}return Number.isFinite(o)?[o,i]:null}function An(r,e,t,n,o=null){let i=Math.min(n,r.end),s=[],a=(l,c)=>l.flatMap(u=>{let m=r.tracks.get(u);return m?Ko(m,c,r.end):[]});for(let l of e){let c=Re(se(a(l.lights,f=>f.s==="on"),t,i)),u=Re(se(a(l.windows.flat(),f=>L.has(f.s)),t,i)),m=Re(se(a(l.climates,f=>f.a?.hvac_action==="heating"),t,i)),h=null,p=null;for(let f of l.temps){let d=qo(r,f,t,i);d&&(h=h===null?d[0]:Math.min(h,d[0]),p=p===null?d[1]:Math.max(p,d[1]))}(c||u||m||h!==null)&&s.push({roomId:l.roomId,name:l.name,lightMs:c,windowMs:u,heatMs:m,tMin:h,tMax:p})}return{from:t,to:n,rooms:s,energy:o}}function Yo(r,e,t){let n=r.series.get(e);if(n){let s=W(n,t);return Number.isFinite(s)?String(s):null}let o=r.tracks.get(e);if(!o)return null;let i=M(o.times,t);return i<0?null:o.values[o.vals[i]].s}function Tn(r,e,t,n,o,i){let s={};for(let a of o){let l=Yo(r,a,i);l!==null&&(s[a]={entity_id:a,state:l,attributes:e[a]?.attributes??{}})}return _t({states:s},t,[],n)}function En(r,e){let t=r.energy;return[...new Set([t.grid,t.solar,t.battery,t.battery_soc,t.consumption,e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...e.soc].filter(n=>!!n))]}function Pn(r,e,t,n=3e5){let o=0,i=0,s=0,a=0,l=!1,c=n/lt/1e3;for(let u=e+n/2;u<t;u+=n){let m=r(u);m.solar===null&&m.grid===null&&m.consumption===null||(l=!0,o+=Math.max(0,m.solar??0)*c,i+=Math.max(0,m.grid??0)*c,s+=Math.max(0,-(m.grid??0))*c,a+=Math.max(0,m.consumption??0)*c)}return l?{pv:o,imp:i,exp:s,use:a,self:a>0?Math.min(1,Math.max(0,1-i/a)):null}:null}var Qo={tt_range_hint:"Zeitraum: 24 Stunden oder mehrere Tage",tt_days:"{n} T",tt_loading_day:"lade {day} \u2026",tt_recorder_days:"Recorder: {n} Tage",tt_memory_full:"Speichergrenze erreicht",tt_now_reached:"Gegenwart erreicht",tt_sheet:"Ereignisse, Zusammenfassungen",tt_tab_events:"Ereignisse",tt_tab_away:"Weg",tt_tab_day:"Tag",tt_close:"Schlie\xDFen",tt_f_safety:"Sicherheit",tt_f_openings:"T\xFCren & Fenster",tt_f_devices:"Ger\xE4te",tt_f_energy:"Energie",tt_follow:"Kamera folgt Ereignissen",tt_stop:"Bei wichtigen Ereignissen anhalten",tt_no_events:"Keine Ereignisse",tt_ev_window:"{name} ge\xF6ffnet",tt_ev_battery_full:"Speicher voll: {name}",tt_ev_pv_peak:"H\xF6chste PV-Leistung des Tages",tt_away_title:"W\xE4hrend du weg warst",tt_away_since:"Seit",tt_away_last:"seit der letzten Zeitreise",tt_away_quiet:"ruhig {from}\u2013{to}",tt_away_none:"Nichts passiert \u2013 alles ruhig.",tt_away_door:"{name}: {n}\xD7 ge\xF6ffnet",tt_away_motion:"Bewegung {name}: {n}\xD7",tt_away_light:"{name} brannte {d}",tt_away_open:"{name} stand {d} offen",tt_day_title:"Tages\xFCbersicht {day}",tt_day_light:"Licht",tt_day_window:"Fenster",tt_day_heat:"Heizen",tt_day_temp:"Temp.",tt_day_pv:"PV",tt_day_import:"Netzbezug",tt_day_export:"Einspeisung",tt_day_use:"Verbrauch",tt_day_self:"Autarkie",tt_day_compare:"Mit dem Vortag vergleichen",tt_day_before:"Vortag",tt_day_none:"F\xFCr diesen Tag gibt es noch keine Werte.",tt_day_partial:"unvollst\xE4ndig (ab {time})",tt_yesterday:"Gestern um diese Zeit"},$n={tt_range_hint:"Range: 24 hours or several days",tt_days:"{n} d",tt_loading_day:"loading {day} \u2026",tt_recorder_days:"Recorder: {n} days",tt_memory_full:"Memory limit reached",tt_now_reached:"Present reached",tt_sheet:"Events, summaries",tt_tab_events:"Events",tt_tab_away:"Away",tt_tab_day:"Day",tt_close:"Close",tt_f_safety:"Safety",tt_f_openings:"Doors & windows",tt_f_devices:"Devices",tt_f_energy:"Energy",tt_follow:"Camera follows events",tt_stop:"Stop at important events",tt_no_events:"No events",tt_ev_window:"{name} opened",tt_ev_battery_full:"Battery full: {name}",tt_ev_pv_peak:"Highest solar power of the day",tt_away_title:"While you were away",tt_away_since:"Since",tt_away_last:"since the last time travel",tt_away_quiet:"quiet {from}\u2013{to}",tt_away_none:"Nothing happened \u2013 all quiet.",tt_away_door:"{name}: opened {n}\xD7",tt_away_motion:"Motion {name}: {n}\xD7",tt_away_light:"{name} was on for {d}",tt_away_open:"{name} stood open for {d}",tt_day_title:"Day summary {day}",tt_day_light:"Light",tt_day_window:"Window",tt_day_heat:"Heating",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Grid import",tt_day_export:"Export",tt_day_use:"Consumption",tt_day_self:"Self-sufficiency",tt_day_compare:"Compare with the day before",tt_day_before:"Day before",tt_day_none:"There are no values for this day yet.",tt_day_partial:"incomplete (from {time})",tt_yesterday:"Yesterday at this time"};function Fn(r,e){return(t,n={})=>{let o=r(t,n);if(o!==t)return o;let s=((e()??"").startsWith("de")?Qo:$n)[t]??$n[t]??t;for(let[a,l]of Object.entries(n))s=s.replace(`{${a}}`,String(l));return s}}var T=24*36e5,ct=150,ut=250,Zo=10*1024*1024,Xo=6e4,Jo=6e4,Dn=1e4;function j(r,e){try{return e!==void 0&&localStorage.setItem(`fp3d-tt-${r}`,e),localStorage.getItem(`fp3d-tt-${r}`)}catch{return null}}var ht=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=j("follow")==="1";stopImportant=j("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{document.hidden||!this.playback?.playing||(this.last=performance.now(),this.schedule())};constructor(e){this.opts=e,this.live=e.live,this.startStates=e.live.states,this.quality=e.quality,this.low=e.spec.low,this.t=Fn(e.t,()=>this.live.language),Ge(Ue(e.live)),this.end=Date.now(),this.range=e.range==="7d"?"7d":"24h";let t=Number(j("closed"));this.lastClosed=Number.isFinite(t)&&t>0&&t<this.end?t:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(o,i,s)=>n.replayer?.rows(o,i,s)??{},listen:o=>n.listen(o),stats:(o,i,s)=>n.timeline?Zt(n.timeline,o,i,s):{},robotRooms:(o,i)=>n.timeline?yn(n.timeline.tracks.get(o),i?n.timeline.tracks.get(i):void 0,n.replay.t):[],setQuality:(o,i)=>n.setQuality(o,i)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(let e of this.listeners)e()}get playing(){return!!this.playback?.playing}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*T}get recorderStart(){let e=this.timeline?.keepDays;return typeof e=="number"&&e>0?this.end-e*T:null}get atNow(){let e=this.playback;return!!e&&!e.playing&&e.t>=e.end-1e3&&Date.now()-e.end<12e4}get location(){let e=this.live.config;return typeof e?.latitude=="number"&&typeof e?.longitude=="number"?{lat:e.latitude,lon:e.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(e,t,n){let o=Je(this.live,this.opts.building,this.opts.spec),i=Math.max(1,Math.ceil(o.entities.length/ct),Math.ceil(o.stats.length/ut)),s=[];for(let a=0;a<i;a++){let l=o.entities.slice(a*ct,(a+1)*ct),c=o.stats.slice(a*ut,(a+1)*ut),u={type:"home_3d/timetravel/history",start_time:e/1e3,end_time:t/1e3,entity_ids:l,statistic_ids:c},m=o.cars.filter(h=>l.includes(h));if(m.length&&(u.car_trackers=m),s.push(await this.live.callWS(u)),this.disposed)return null;n?.((a+1)/i)}return Lt(s)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:e,spec:t}=this.opts,n=this.live,o=Je(n,e,t),i;try{i=await this.fetchWindow(this.end-T,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=u?.code??u?.message??String(c),this.notify();return}if(!i)return;let s=e.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...o.entities,...o.stats,...o.overflow,...o.hidden,...s],this.cars=o.cars;let a=new Map(t.furniture);this.devices=t.energy?Ae(e,c=>a.get(c.id)?.power??null):null,this.energyIds=this.devices?En(e,this.devices):[],this.rooms=vn(n,e,t),this.roomOf=kn(this.rooms);for(let[c,u]of et(n,e,t))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(i);let l=typeof this.opts.at=="number"?this.opts.at:ye(this.opts.at??null,this.end);this.playback=new be(i.start,this.end,l??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?qe:we),this.liveLog=new ke([...o.entities,...o.stats,...o.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(e){let{building:t,spec:n}=this.opts,o=this.live,i=new Set([...e.tracks.keys(),...e.series.keys()]);this.roles=mn(o,t,n,i),Ut(e)>Kt&&jt(e,this.motion()),this.timeline=e,this.version++,this.daySummaries.clear(),this.replayer=new Me(e,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[t.settings.weather_entity,...Object.keys(o.states).filter(s=>s.startsWith("weather."))].find(s=>!!s&&i.has(s))??null,this.findEvents(),this.gaps=Ve(e),this.gapsTo=e.end,this.updateNights()}findEvents(){let e=this.timeline;if(!e)return;let{building:t,spec:n}=this.opts,o=this.devices,i=o&&n.energy?{solar:t.energy.solar?[t.energy.solar]:o.solar,soc:t.energy.battery_soc?[t.energy.battery_soc]:o.soc,sunDown:l=>this.sunDown(l)}:null,s=t.settings.outage_entity,a=s&&this.live.states[s]?{id:s,attributes:this.live.states[s].attributes}:null;this.allEvents=tn({timeline:e,roles:this.roles,weather:this.weather,energy:i,outage:a}),this.events=this.allEvents.filter(l=>!en.has(l.kind))}sunDown(e){let t=this.location;if(t)return ot(t.lat,t.lon,e);let n=this.timeline?.tracks.get("sun.sun"),o=n?M(n.times,e):-1;return!!n&&o>=0&&n.values[n.vals[o]].s==="below_horizon"}shownEvents(e=!1){let t=this.playback,n=e?this.allEvents:this.events;return t?ln(n,Math.max(t.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,e])=>e==="motion"||e==="camera").map(([e])=>e)}updateNights(){let e=this.location;this.nights=e?gn(e.lat,e.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let e=this.timeline.start,t=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(e<=t+6e4)break;let n=this.recorderStart;if(n!==null&&e<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=e-T,this.notify();let o;try{o=await this.fetchWindow(e-T,e)}catch(l){console.warn("Home 3D: time travel could not load an older day",l);break}if(!o||this.disposed||!this.timeline)return;let i=Bt(o,this.timeline);this.setTimeline(i),Gt(i)>Zo&&(this.full=!0);let s=this.playback;if(!s)continue;s.setRange(Math.max(i.start,this.start),this.end);let a=!1;this.wanted!==null&&this.wanted>=s.start&&(s.seek(this.wanted),this.wanted=null,a=!0),this.apply(!0,a)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(e){let t=this.playback;if(e===this.range||!t||!this.timeline)return;this.range=e;let n=t.t;t.setRange(Math.max(this.timeline.start,this.start),this.end,e==="7d"?qe:we),this.updateNights(),t.t!==n?this.apply(!0):this.notify(),e==="7d"&&this.loadOlder()}sunNights(){let e=this.timeline?.tracks.get("sun.sun");if(!e)return[];let t=[],n=null;for(let o=0;o<e.times.length;o++){let i=e.values[e.vals[o]].s==="below_horizon";i&&n===null&&(n=e.times[o]),!i&&n!==null&&(t.push([n,e.times[o]]),n=null)}return n!==null&&t.push([n,this.end]),t}apply(e,t=e){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,t&&this.replay.seek++;let o=this.replayer.hassAt(this.live,n.t,e);this.replay.pulses=this.replayer.pulses,(o!==this.hass||e)&&(this.hass=o,this.opts.onChange()),this.notify()}setLive(e){this.live=e,Ge(Ue(e));let t=Date.now();this.liveLog?.record(e.states,t);let n=this.playback,o=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&t-this.flushedAt>=Jo||this.derivePending&&t-this.eventsAt>Dn)){let i=!n.playing&&n.t>=n.end-1e3;this.edge(t),i&&n.seek(n.end),this.replay.t=n.t,o=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(e,n.t)),o&&this.notify()}setQuality(e,t){let n=this.maxDays;this.quality=e,this.low=t;let o=this.playback;if(n===this.maxDays||!o||!this.timeline)return;let i=this.end-this.maxDays*T,s=this.timeline.start<i-6e4;if(s)this.setTimeline(Qt(this.timeline,i)),this.full=!1,this.needFrom!==null&&this.needFrom<i&&(this.needFrom=null),this.wanted!==null&&this.wanted<i&&(this.wanted=null);else if(this.range!=="7d")return;let a=o.t;o.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),s||o.t!==a?this.apply(!0,o.t!==a):this.notify(),this.loadOlder()}play(){let e=this.playback;if(!e)return;let t=e.t>=e.end;e.play(),t&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){this.playback?.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){this.playback?.playing?this.pause():this.play()}seek(e,t=!1){this.playback&&(t&&this.pause(),this.wanted=null,this.playback.seek(e),this.last=performance.now(),this.apply(!0))}step(e){let t=this.playback;if(!t)return;let n=an(this.shownEvents(),t.t,e);this.seek(n?n.t:e>0?t.end:t.start,!0)}goTo(e){this.seek(e.t,!0),this.focusOn(e.entity)}focusOn(e){this.replay.focus=e,this.replay.focusSeq++,this.notify()}yesterday(){let e=this.playback;if(!e)return;let t=e.t-T;t<e.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(t,e.start),!0),t<e.start&&this.olderRunning&&(this.wanted=t)}setFollow(e){this.follow=e,j("follow",e?"1":"0"),this.notify()}setStopImportant(e){this.stopImportant=e,j("stop",e?"1":"0"),this.notify()}nextSpeed(){this.playback?.nextSpeed(),this.notify()}awayOffer(){let e=this.timeline;return e?Mn(Sn(e,this.motion(),e.start,this.end)):null}away(e,t){let n=this.timeline;return n?Rn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(o=>o.startsWith("light.")),motion:this.motion(),from:e,to:t}):[]}ensureLoaded(e){let t=this.timeline;!t||t.start<=e+6e4||this.needFrom!==null&&this.needFrom<=e||e<this.end-this.maxDays*T-T||(this.needFrom=e,this.loadOlder())}daySummary(e){let t=this.timeline;if(!t||e+T<=t.start||e>t.end)return null;let n=`${e}|${this.version}`,o=this.daySummaries.get(n);if(!o){let i=me(e),s=Math.max(e,t.start),a=Math.min(i,t.end),l=this.devices,c=this.energy&&l?Pn(u=>Tn(t,this.live.states,this.opts.building,l,this.energyIds,u),s,a):null;o=An(t,this.rooms,s,a,c),this.daySummaries.set(n,o)}return o}schedule(){clearTimeout(this.timer),this.timer=void 0;let e=this.playback;!e?.playing||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let t=performance.now(),n=Math.min(2e3,t-this.last);this.last=t;let o=e.t;if(e.end-e.t<=Xo+n*e.speed&&this.edge(),e.advance(n)){let i=this.stopImportant&&e.speed>=900?Ye(this.allEvents,o,e.t,s=>ge.has(s.kind)):null;if(i){e.seek(i.t),e.pause(),this.apply(!0),this.focusOn(i.entity);return}if(this.apply(!1),this.follow&&t-this.followAt>2500){let s=Ye(this.events,o,e.t,()=>!0);s&&(this.followAt=t,this.focusOn(s.entity))}}e.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},sn(this.quality,this.low)))}edge(e=Date.now()){let t=this.playback,n=this.timeline;if(!t||!n||!this.liveLog||e-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:o,created:i}=this.liveLog.flush(n,e);this.flushedAt=e,this.end=e,t.setRange(Math.max(n.start,this.start),e),i&&this.replayer?.refresh(),(o||i)&&(this.derivePending=!0),this.derivePending&&(!t.playing||e-this.eventsAt>Dn)&&this.derive(e)}derive(e){let t=this.timeline;if(!t)return;this.derivePending=!1,this.eventsAt=e,this.findEvents();let n=Math.max(t.start,this.gapsTo-30*6e4),o=this.gaps.filter(([a])=>a<n).map(([a,l])=>[a,Math.min(l,n)]),i=Ve(t,void 0,void 0,void 0,n),s=o[o.length-1];s&&i.length&&s[1]>=n&&i[0][0]<=n&&(s[1]=i.shift()[1]),this.gaps=[...o,...i],this.gapsTo=t.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&j("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function Us(r){return new ht(r)}export{Zo as MAX_BYTES,ht as Session,Us as startTimeTravel};
