import{$ as ae,$a as vr,Aa as er,Ab as Fr,Ba as nr,Bb as Or,C as zi,Ca as or,Cb as Dr,D as L,Da as ir,Db as Lr,E as Hi,Ea as Qe,Eb as Wr,F as Ci,Fa as rr,Fb as Nr,G as xt,Gb as io,I as re,Ia as k,Ib as Vr,J as Fi,Ja as K,Jb as Br,K as Bt,Kb as qr,L as se,La as sr,Lb as jr,M as O,Ma as ar,Mb as Kr,N as Kn,Na as lr,O as J,Oa as dr,P as Oi,Pa as cr,Pb as Ee,Q as Ye,Qa as ur,Qb as ro,R as Di,Ra as pr,S as wt,Sa as hr,T as Li,Ta as fr,U as Wi,Ua as jt,Ub as Y,V as Ni,Va as Te,Vb as Ur,W as qt,Wa as mr,Wb as Gr,X as Vi,Xa as tn,Xb as Jr,Ya as gr,Yb as Ae,Z as Un,Za as Qn,Zb as Yr,_ as Bi,_a as br,a as oi,ab as yr,ac as Kt,b as qe,ba as qi,bb as wr,bc as Xr,c as m,ca as Xe,cb as nt,d as Tt,da as ji,db as xr,dc as Zr,e as ii,ea as Ki,eb as to,f as w,fa as Gn,fb as kr,g as je,ga as $e,gb as _r,gc as Qr,h as ri,ha as Jn,hb as Ft,hc as ts,i as si,ia as Yn,ib as $r,ic as es,j as Wn,ja as Xn,jb as gt,jc as ns,k as ai,kb as en,kc as os,l as li,la as Ui,lb as Sr,lc as so,ma as Se,mb as Pr,na as Gi,nb as Er,o as di,oa as Me,ob as Ar,pa as Ji,pb as Rr,q as ci,qa as Yi,qb as eo,r as ui,ra as Zn,rb as zr,s as pi,sa as Xi,sb as no,ta as Zi,tb as Hr,ua as Qi,va as Ze,vb as Cr,wb as Pe,xb as oo,ya as Ie,yb as vt,za as tr,zb as on}from"./home-3d-chunk-UFUQ6ZBE.js";import{$ as Tr,A as ki,B as we,C as xe,D as ke,E as _i,F as $i,H as Si,I as Mi,J as qn,K as jn,L as Ii,M as Ge,N as Je,O as Ti,P as Pi,R as Ei,S as Ai,T as Pt,U as _e,V as G,W as Ri,X as Mr,Y as nn,Z as Ir,a as Nn,c as ie,e as hi,f as Vn,g as Ke,h as Ue,i as fi,j as Bn,k as mi,l as gi,m as tt,o as bi,p as $t,r as vi,t as yi,u as wi,v as X,w as St,x as xi,z as Mt}from"./home-3d-chunk-GZUPIXZV.js";var Re=class extends or{constructor(t){if(super(t),this.it=w,t.type!==er.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===w||t==null)return this._t=void 0,this.it=t;if(t===ii)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Re.directiveName="unsafeHTML",Re.resultType=1;var is=nr(Re);function rs(r,t,n,e,i=!1){let o=a=>{let s=a?.value.trim();!a||!s||(a.value="",e([...r,s]))};return m`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${n.label}>
    ${n.label}
    ${r.map((a,s)=>m`<div class="fp3d-lines-row">
        <span>${a}</span>
        <button type="button" title=${n.remove} aria-label=${`${n.remove}: ${a}`} ?disabled=${t} @click=${()=>e(r.filter((l,c)=>c!==s))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${n.placeholder}
        aria-label=${n.placeholder}
        ?disabled=${t}
        @keydown=${a=>{a.key==="Enter"&&(a.preventDefault(),o(a.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${t} @click=${a=>o(a.currentTarget.previousElementSibling)}>
        ${n.add}
      </button>
    </div>
  </div>`}async function as(r,t,n){let e=ml(r,t,n);return!e||r.confirm&&!await n.confirm(r.confirm_text?.trim()||null)?!1:(await e(),!0)}function ml(r,t,n){let e=r.target?.trim()??"";switch(r.action){case"perform_action":{let i=/^([a-z0-9_]+)\.([a-z0-9_]+)$/.exec(e);return i?()=>n.callService(i[1],i[2],{...r.data??{}}):null}case"navigate":return e?()=>n.navigate(e):null;case"url":return/^(https?:\/\/\S+|\/(?!\/)\S*)$/i.test(e)?()=>n.openUrl(e):null;case"toggle":case"more_info":case"camera":{let i=e||t;return i?r.action==="toggle"?()=>n.callService("homeassistant","toggle",{entity_id:i}):r.action==="more_info"?()=>n.moreInfo(i):()=>n.camera(i):null}default:return null}}var gl=["tap","hold","double_tap"];function ss(r){return!!r&&gl.some(t=>!!r[t]&&r[t].action!=="default")}function ls(r,t,n){let e=new Map;for(let i of r){for(let o of i.placements)ss(o.actions)&&!e.has(o.entity_id)&&e.set(o.entity_id,{actions:o.actions,entity:o.entity_id});for(let o of i.furniture){if(!ss(o.actions))continue;let a=t(o.id)??`item:${o.id}`;e.has(a)||e.set(a,{actions:o.actions,entity:n(o)})}}return e}function sn(r,t){let n=r?.actions[t];return n&&n.action!=="default"?n:null}var rn=class{pending=null;wait;constructor(t=320){this.wait=t}tap(t,n,e,i){if(this.pending?.id===t){this.doubleTap(t);return}if(this.flush(),!n){e();return}let o=setTimeout(()=>{this.pending=null,e()},this.wait);this.pending={id:t,timer:o,single:e,double:i}}doubleTap(t){let n=this.pending;return!n||n.id!==t?!1:(clearTimeout(n.timer),this.pending=null,n.double(),!0)}flush(){let t=this.pending;t&&(clearTimeout(t.timer),this.pending=null,t.single())}cancel(){this.pending&&clearTimeout(this.pending.timer),this.pending=null}};var bl=[["radiator_cold","effects_radiator_cold"],["radiator_hot","effects_radiator_hot"],["tank_cold","effects_tank_cold"],["tank_hot","effects_tank_hot"]];function ds(r,t,n,e,i="fp3d-set-field"){let o=t??{},a=(d,u)=>{let h={...o,[d]:u};for(let f of Object.keys(h))(h[f]===null||h[f]===void 0)&&delete h[f];e(Object.keys(h).length?h:null)},s=re(r),l=(d,u,h,f,v)=>m`<label class=${i}
      >${u}
      <input
        type="number"
        step=${v}
        placeholder=${String(Math.round(h(gr[d])))}
        .value=${typeof o[d]=="number"?String(Math.round(h(o[d])*10)/10):""}
        ?disabled=${n}
        @change=${y=>{let b=y.target.value.trim(),p=Number(b);a(d,b===""||!Number.isFinite(p)?null:f(p))}}
    /></label>`,c=d=>d;return m`${l("motion_seconds",k(r,"effects_motion_seconds"),c,d=>Math.max(0,Math.min(3600,Math.round(d))),5)}
  ${l("camera_seconds",k(r,"effects_camera_seconds"),c,d=>Math.max(0,Math.min(3600,Math.round(d))),5)}
  ${bl.map(([d,u])=>l(d,`${k(r,u)} (${s})`,h=>Bt(r,h),h=>Math.max(-20,Math.min(100,Fi(h,s))),1))}`}var vl={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Ut(r,t){return t&&r.states[t]?t:Object.keys(r.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}function ao(r,t){let n=t?r.states[t]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;if(n.entity_id.startsWith("binary_sensor."))return n.state==="on"?.6:0;let e=Number(n.state);if(!Number.isFinite(e))return null;let o=String(n.attributes.unit_of_measurement??"").startsWith("in")?e*25.4:e;return o<=.1?0:Math.min(1,.3+o/10)}function cs(r,t,n){let e=t?r.states[t]:void 0;if(!e||e.state==="unavailable"||e.state==="unknown")return null;let i=vl[e.state];if(!i)return null;let o=e.attributes,a=i.cloud??0;typeof o.cloud_coverage=="number"&&(a=Math.min(1,Math.max(0,o.cloud_coverage/100)));let s=i.wind??0;if(typeof o.wind_speed=="number"){let c=o.wind_speed_unit==="m/s"?o.wind_speed*3.6:o.wind_speed_unit==="mph"?o.wind_speed*1.609:o.wind_speed;s=Math.max(s,Math.min(1,c/60))}let l=ao(r,n);return l!==null&&l>0&&(a=Math.max(a,.85)),{entity:e.entity_id,condition:e.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:a,wind:s,lightning:!!i.lightning}}function us(r,t){let n=new Set(t??xi);return{...r,rain:n.has("rain")?r.rain:0,snow:n.has("snow")?r.snow:0,fog:n.has("fog")?r.fog:0,cloud:n.has("clouds")?r.cloud:0,lightning:n.has("lightning")&&r.lightning,sky:n.has("sky")}}var yl=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),wl=new Set(["power","plug","connectivity","running"]);function an(r){if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let t=r.entity_id.split(".")[0];if(t==="binary_sensor")return wl.has(String(r.attributes.device_class))?r.state==="off":r.state==="on";if(t==="input_boolean"||t==="switch")return r.state==="on";let n=Number(r.state);if(r.state!==""&&Number.isFinite(n))return r.attributes.unit_of_measurement==="V"&&n<100;let e=String(r.state).toLowerCase().trim();return yl.has(e)||e.startsWith("ob ")}function uo(r){let t=$t(r);if(!t)return!1;if(xl.test([t.id,...t.tags??[],...Object.values(t.name??{})].join(" ")))return!t.light||/plant|pflanz/i.test(t.id);if(t.light)return!1;let n=t.parts.filter(e=>e.color==="plant").length;return n>0&&n+t.parts.filter(e=>e.color==="pot").length>=t.parts.length/2}var xl=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var it=["#3a3f47","#3a3f47"],Gt=["#23262b","#23262b"],kt=["#5a3b25","#5a3b25"],Z=["#1f4fa8","#1f4fa8"],Ot=["#e3b616","#e3b616"],V=["#2f7d3b","#2f7d3b"],ps={default:{rest:it,bio:kt,paper:Z,plastic:Ot,glass:V,garden:V,recycling:Ot,other:it},DE:{rest:Gt,bio:kt,paper:Z,plastic:Ot,glass:V,garden:V,recycling:Ot},AT:{rest:it,bio:kt,paper:[it[0],"#c0262d"],plastic:Ot,glass:V,garden:V},CH:{rest:["#d8d8d8","#d8d8d8"],bio:V,paper:Z,plastic:it,glass:V,garden:V},NL:{rest:it,bio:V,paper:Z,plastic:["#3a3f47","#e57a1f"],glass:V,garden:V},BE:{rest:it,bio:V,paper:Z,plastic:Z,glass:V,garden:V},GB:{rest:Gt,bio:["#3a3f47","#5a3b25"],paper:Z,plastic:Z,glass:Gt,garden:kt,recycling:Z},US:{rest:Gt,bio:V,paper:Z,plastic:Z,glass:Z,garden:V,recycling:Z},CA:{rest:Gt,bio:V,paper:Z,plastic:Z,glass:Z,garden:V,recycling:Z},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:it,bio:kt,paper:[it[0],"#e3b616"],plastic:[it[0],"#e3b616"],recycling:[it[0],"#e3b616"],glass:V,garden:V},IT:{rest:it,bio:kt,paper:Z,plastic:Ot,glass:V,garden:V},ES:{rest:it,bio:kt,paper:Z,plastic:Ot,glass:V,garden:V},PT:{rest:it,bio:kt,paper:Z,plastic:Ot,glass:V,garden:V},DK:{rest:Gt,bio:V,paper:Z,plastic:it,glass:V,garden:V},SE:{rest:Gt,bio:kt,paper:Z,plastic:it,glass:V,garden:V},NO:{rest:it,bio:kt,paper:Z,plastic:it,glass:V,garden:V},FI:{rest:it,bio:kt,paper:Z,plastic:it,glass:V,garden:V}},ms="DE";function gs(r){ms=r}function bs(r){let t=r?.config?.country;if(t)return t.toUpperCase();let n=(r?.language??"").split("-")[1];return n?n.toUpperCase():"DE"}function kl(r,t){return ps[t]?.[r]??ps.default[r]??it}function vs(r,t=ms){let n=kl(r.bin_kind??"rest",t),e=r.bin_color||n[0];return[e,r.bin_lid||(r.bin_color?e:n[1])]}var _l={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function co(r,t,n){let e=` ${r.toLowerCase()} `;return n&&n.trim()?n.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&e.includes(i.trim())):t==="other"?!1:_l[t].some(i=>e.includes(i))}function po(r){let t=typeof r=="string"?r:r?.date??r?.dateTime;if(!t)return null;let n=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t),e=n?new Date(Number(n[1]),Number(n[2])-1,Number(n[3])):new Date(t);return Number.isNaN(e.getTime())?null:new Date(e.getFullYear(),e.getMonth(),e.getDate())}function $l(r){return r.map(t=>({day:po(t.start),summary:String(t.summary??"")})).filter(t=>!!t.day).sort((t,n)=>t.day.getTime()-n.day.getTime())}function ys(r){let t=new Set;for(let n of r.flatMap(e=>e.furniture))n.type==="waste_bin"&&typeof n.bin_source=="string"&&n.bin_source.startsWith("calendar.")&&t.add(n.bin_source);return[...t]}async function ho(r,t,n=new Date,e=42){let i=new Map,o=r.callApi;if(!o)return i;let a=new Date(n.getFullYear(),n.getMonth(),n.getDate()),s=ws(a,e);return await Promise.all(t.map(async l=>{try{let c=await o.call(r,"GET",`calendars/${l}?start=${encodeURIComponent(a.toISOString())}&end=${encodeURIComponent(s.toISOString())}`);i.set(l,$l(Array.isArray(c)?c:[]))}catch{}})),i}var le=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate()),ws=(r,t)=>new Date(r.getFullYear(),r.getMonth(),r.getDate()+t),ln=(r,t)=>Math.round((le(t).getTime()-le(r).getTime())/864e5);function lo(r,t,n={}){let e=n.from??14,i=n.until??12,o=t.getHours()+t.getMinutes()/60;return r===1&&o>=e||r===0&&o<i}function xs(r,t,n,e=new Date,i=3){let o=typeof r.bin_source=="string"&&r.bin_source!=="none"?r.bin_source:null;if(!o)return[];if(o.startsWith("calendar.")){let s=le(e);return(n.get(o)??[]).filter(l=>l.day>=s&&co(l.summary,r.bin_kind??"rest",r.bin_match)).slice(0,i)}let a=fo(r,t,n,e);return a?[{day:a.day,summary:a.summary}]:[]}function fo(r,t,n,e=new Date,i={}){let o=typeof r.bin_source=="string"&&r.bin_source!=="none"?r.bin_source:null;if(!o)return null;let a=le(e);if(o.startsWith("calendar.")){let d=(n.get(o)??[]).find(h=>h.day>=a&&co(h.summary,r.bin_kind??"rest",r.bin_match));if(!d)return null;let u=ln(a,d.day);if(u===0&&e.getHours()+e.getMinutes()/60>=(i.until??12)){let h=(n.get(o)??[]).find(f=>f.day>a&&co(f.summary,r.bin_kind??"rest",r.bin_match));if(h)return{days:ln(a,h.day),day:h.day,summary:h.summary,glow:lo(ln(a,h.day),e,i)}}return{days:u,day:d.day,summary:d.summary,glow:lo(u,e,i)}}let s=t.states[o];if(!s)return null;let l=Tl(s,e);if(l===null||l<0)return null;let c=ws(a,l);return{days:l,day:c,summary:String(s.attributes.friendly_name??""),glow:lo(l,e,i)}}function Sl(r,t){let n=typeof r=="string"&&r!=="none"?r:null,e=n?t.states[n]:void 0;return!!e&&Ms.has(String(e.state).toLowerCase())}function cn(r,t){return Sl(r.bin_out,t)}function Ml(r){let t=r.bin_kerb;return t&&Number.isFinite(t.x)&&Number.isFinite(t.z)?[t.x,t.z]:null}function ks(r,t,n){let e=Ml(r);return e&&n?{at:e,kerb:!0,cue:null}:{at:[r.x,r.z],kerb:!1,cue:e&&t&&!n?e:null}}function _s(r){return typeof r.bin_out=="string"&&/^(input_boolean|switch)\./.test(r.bin_out)}function $s(r,t=.3){let n=r.filter(s=>!s.icon),e=n.map((s,l)=>l),i=s=>e[s]===s?s:e[s]=i(e[s]);for(let s=0;s<n.length;s++)for(let l=s+1;l<n.length;l++){let c=n[s],d=n[l];c.floorId===d.floorId&&Math.hypot(c.x-d.x,c.z-d.z)<=c.r+d.r+t&&(e[i(l)]=i(s))}let o=new Map;n.forEach((s,l)=>o.set(i(l),[...o.get(i(l))??[],s]));let a=[];for(let s of o.values())s.sort((l,c)=>l.days-c.days||l.name.localeCompare(c.name)),a.push({floorId:s[0].floorId,x:s.reduce((l,c)=>l+c.x,0)/s.length,z:s.reduce((l,c)=>l+c.z,0)/s.length,y:Math.max(...s.map(l=>l.y)),lines:s});for(let s of r)s.icon&&a.push({floorId:s.floorId,x:s.x,z:s.z,y:s.y,lines:[s]});return a}function Ss(r,t={}){let n=typeof t.ahead=="number"&&t.ahead>=0?t.ahead:null,e=r.length?Math.min(...r.map(i=>i.days)):0;return new Set(r.filter(i=>(n===null||i.days<=n)&&(!t.nextOnly||i.days===e)).map(i=>i.id))}function Il(r,t=new Date){let n=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(r),e=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(r),i,o,a;if(n)[i,o,a]=[Number(n[1]),Number(n[2]),Number(n[3])];else if(e){let l=Number(e[1]),c=Number(e[3]);e[2]==="/"&&c>12&&l<=12&&([l,c]=[c,l]),a=l,o=c;let d=e[4];i=d?d.length===2?2e3+Number(d):Number(d):t.getFullYear(),!d&&new Date(i,o-1,a)<le(t)&&(i+=1)}else return null;if(o<1||o>12||a<1||a>31)return null;let s=new Date(i,o-1,a);return s.getMonth()===o-1?s:null}function Tl(r,t=new Date){let n=r.attributes;if(typeof n.daysTo=="number")return n.daysTo;let e=String(r.state).trim();if(/^-?\d+(\.\d+)?$/.test(e))return Math.round(Number(e));let i=/^\d{4}-\d{2}-\d{2}T/.test(e)?po(e):Il(e,t);if(i)return ln(t,i);let o=e.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(o))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(o))return 1;let a=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(o)??/\bin\s+(\d+)/.exec(o);if(a)return Number(a[1]);let s=o.match(/\d+/g);return s?Number(s[s.length-1]):null}var Ms=new Set(["on","open","true","detected","home"]);function hs(r){let t=r?.last_changed?Date.parse(r.last_changed):NaN;return Number.isFinite(t)?t:null}function Is(r,t,n=Date.now()){let e=typeof r.entity=="string"&&r.entity!=="none"?r.entity:null;if(!e)return!1;let i=t.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let o=typeof r.mailbox_door=="string"&&r.mailbox_door!=="none"?r.mailbox_door:null;if(!o){let l=Number(i.state);return Ms.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let a=hs(i),s=hs(t.states[o]);return a===null||n-a>7*864e5?!1:s===null||a>s+1e3}function Ts(r){return r.type==="waste_bin"?[r.bin_source??null,r.bin_out??null]:r.type==="mailbox"?[r.entity??null,r.mailbox_door??null]:Al(r)}var Ps=r=>{let t=r?Number(r.state):NaN;return Number.isFinite(t)?t:null};function mo(r,t){let n=typeof r.moisture=="string"&&r.moisture!=="none"?r.moisture:null,e=n?t.states[n]:void 0;if(!n||!e)return!1;if(n.startsWith("plant.")){let o=e.attributes,a=String(o.problem??"").toLowerCase();return String(o.moisture_status??"").toLowerCase()==="low"||e.state==="problem"&&a.includes("moisture")&&!a.includes("high")}let i=Ps(e);return i!==null&&i<(r.moisture_min??20)}function go(r,t=Date.now()){if(!r||r.state==="unavailable"||r.state==="unknown")return null;let n=String(r.state).trim(),e=String(r.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(n)){let a=Number(n),s=e==="s"?a/60:e==="h"?a*60:a;return Math.max(0,Math.round(s))}let i=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(n);if(i)return Number(i[1])*60+Number(i[2])+Math.round(Number(i[3]??0)/60);let o=Date.parse(n);return Number.isFinite(o)&&/\d{4}-\d{2}-\d{2}T/.test(n)?Math.max(0,Math.round((o-t)/6e4)):null}var Pl=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function bo(r){if(!r)return!1;let t=String(r.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Pl.has(t)}var El=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function vo(r,t,n){let e=r?String(r.state).toLowerCase().replace(/\s+/g,"_"):null;if(e!==null&&El.has(e))return!0;let i=!!r&&/^(switch|input_boolean|light)\./.test(r.entity_id),o=!!r&&!i&&e!==null&&(e==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(e));return t!==null&&t<=n&&!o}function Es(r){return r>=60?`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")} h`:`${r} min`}function fs(r,t,n,e){let i=typeof r=="string"&&r!=="none"?r:null,o=i?n.states[i]:void 0;if(!i||!o||o.state==="unavailable"||o.state==="unknown")return!1;if(i.startsWith("binary_sensor.")||i.startsWith("input_boolean."))return o.state==="on";let a=Ps(o);if(a!==null)return a<=(t??10);let s=po(o.state);return!!s&&s.getTime()<=le(e).getTime()}function As(r,t,n=new Date){let e=[];return fs(r.service,r.service_min,t,n)&&e.push(r.service),r.service2!==r.service&&fs(r.service2,r.service2_min,t,n)&&e.push(r.service2),e}var Dt=r=>[r.door_left,r.door_right].filter(t=>typeof t=="string"&&t!=="none"),Rs=r=>!!r&&(r.state==="on"||r.state==="open");function un(r,t,n=Date.now()){let e=(r.door_alarm??2)*6e4;for(let i of Dt(r)){let o=t.states[i];if(Rs(o)&&o?.last_changed&&n-Date.parse(o.last_changed)>=e)return i}return null}function zs(r,t,n=Date.now()){let e=null;for(let i of r)if(!(i.type!=="fridge"&&i.type!=="fridge_smart"))for(let o of Dt(i)){let a=t.states[o];if(!Rs(a)||!a?.last_changed)continue;let s=Date.parse(a.last_changed)+(i.door_alarm??2)*6e4-n;s>0&&(e===null||s<e)&&(e=s)}return e}var dn=class{running=new Map;ended=new Map;update(t,n,e,i=Date.now()){let o=this.running.get(t);if(this.running.set(t,n),n)return this.ended.delete(t),!1;o===!0&&this.ended.set(t,i);let a=this.ended.get(t);return a===void 0?!1:i-a>12*36e5||e(a)?(this.ended.delete(t),!1):!0}};function Al(r){return[r.moisture??null,r.remaining??null,r.service??null,r.service2??null]}var Rl=10*6e4;function de(r,t){let n=t?Date.parse(r.states[t]?.last_changed??""):NaN;return Number.isFinite(n)?n:void 0}function zl(r,t){let n=t.map(e=>de(r,e)).filter(e=>e!==void 0);return n.length?Math.max(...n):void 0}var Hl=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Hs={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function yo(r,t,n){let e=[];for(let d of t.floors)for(let u of d.rooms){let f=[...xt(r,u.area_id).filter(v=>{let y=v.startsWith("binary_sensor.")?Hs[String(r.states[v]?.attributes.device_class)]:void 0;return!!y&&y!=="water"}),...tn(r,d,u,"leak")];f.length&&e.push({floorId:d.id,roomId:u.id,sensors:f})}let i=Object.keys(r.states),o=t.settings.rain_warning===!1?null:Ut(r,n??t.settings.weather_entity),a=t.settings.outage_entity&&r.states[t.settings.outage_entity]?t.settings.outage_entity:null,s=t.floors.flatMap(d=>d.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&Dt(u).length).map(u=>({floorId:d.id,roomId:d.rooms.find(h=>h.points.length>=3&&G([u.x,u.z],h.points))?.id??null,furnitureId:u.id,ids:Dt(u)}))),l=t.settings.rain_warning===!1?null:t.settings.rain_entity,c=l&&r.states[l]?l:null;return{rooms:e,alarms:i.filter(d=>d.startsWith("alarm_control_panel.")),weather:o,outage:a,rain:c,fridges:s}}function wo(r){return[...r.rooms.flatMap(t=>t.sensors),...r.alarms,...r.weather?[r.weather]:[],...r.outage?[r.outage]:[],...r.rain?[r.rain]:[],...(r.fridges??[]).flatMap(t=>t.ids)]}function Cs(r,t,n,e){let i=[];for(let s of n.rooms)for(let l of s.sensors){let c=r.states[l];c?.state==="on"&&i.push({kind:Hs[String(c.attributes.device_class)],entity:l,roomId:s.roomId,floorId:s.floorId,since:de(r,l)})}let o=n.rain?ao(r,n.rain):null;if(o!==null?o>0:!!n.weather&&Hl.has(r.states[n.weather]?.state??""))for(let s of t.floors)for(let l of s.openings){if(l.type!=="window"||l.rain_ignore)continue;let c=e.get(l.id);if(!c)continue;let d=ae(r,c,"window");if(d.open<.5&&d.tilt<.5&&d.open2<.5&&d.tilt2<.5)continue;let u=zl(r,[c.contact,c.tilt,c.contact2,c.tilt2]);i.push({kind:"window_rain",entity:c.contact??c.tilt??c.contact2??l.id,roomId:l.room_id,floorId:s.id,since:u})}if(n.outage&&an(r.states[n.outage])){let s=Number.isFinite(Number(r.states[n.outage]?.state));i.push({kind:"power_outage",entity:n.outage,roomId:null,floorId:null,since:s?void 0:de(r,n.outage)})}if(t.settings.alert_unavailable){let s=Date.now(),l=new Set;for(let c of t.floors)for(let d of c.openings){let u=e.get(d.id);if(u)for(let h of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!h||l.has(h))continue;let f=r.states[h];if(!f||f.state!=="unavailable"&&f.state!=="unknown")continue;let v=Date.parse(f.last_changed??"");Number.isFinite(v)&&s-v<Rl||(l.add(h),i.push({kind:"contact_unavailable",entity:h,roomId:d.room_id,floorId:c.id,since:Number.isFinite(v)?v:void 0}))}}}for(let s of n.fridges??[]){let l=t.floors.find(d=>d.id===s.floorId)?.furniture.find(d=>d.id===s.furnitureId),c=l?un(l,r):null;c&&i.push({kind:"fridge_door",entity:c,roomId:s.roomId,floorId:s.floorId,since:de(r,c)})}for(let s of n.alarms){let l=r.states[s]?.state;l==="triggered"?i.push({kind:"alarm",entity:s,roomId:null,floorId:null,since:de(r,s)}):l==="pending"&&i.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null,since:de(r,s)})}return i}function Cl(r){if(r.color)return r.color;switch(r.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function Fs(r){return r.kind==="water"&&!r.color?mr:Cl(r)}function xo(r,t,n){let e=n.roomId?t.floors.flatMap(a=>a.rooms).find(a=>a.id===n.roomId):null;if(n.text!==void 0)return e?`${e.name} \xB7 ${n.text}`:n.text;let i=r?O(r,n.entity):n.entity,o=k(r,`alert_${n.kind}`,{name:i});return e?t.settings.alert_names===!1?`${e.name} \xB7 ${k(r,`alert_short_${n.kind}`)}`:`${e.name} \xB7 ${o}`:o}var Fl=new Set(["smoke","co","gas","water","alarm","alarm_pending"]),pn=new Set(["smoke","gas","co","water","alarm","alarm_pending","window_rain","power_outage","fridge_door","contact_unavailable"]);function hn(r){return!Fl.has(r)}var ht=r=>`${r.kind}:${r.entity}`,ko=r=>`${ht(r)}@${r.at}`;function Os(r,t){return t.since===void 0||t.since<=r.at}function Ds(r,t){let n=t.alert_snoozed??[],e=t.alert_ignored??[];if(!n.length&&!e.length)return r;let i=new Map(n.map(a=>[ht(a),a])),o=new Set(e.filter(a=>hn(a.kind)).map(ht));return r.filter(a=>{let s=ht(a);if(o.has(s))return!1;let l=i.get(s);return!l||!Os(l,a)})}function Ls(r,t){if(!r?.length)return[];let n=new Map(t.map(e=>[ht(e),e]));return r.filter(e=>{let i=n.get(ht(e));return!i||!Os(e,i)})}function Ws(r,t,n,e){let i={kind:t.kind,entity:t.entity},o=ht(i),a=(r.alert_snoozed??[]).filter(l=>ht(l)!==o),s=(r.alert_ignored??[]).filter(l=>ht(l)!==o);return n&&hn(t.kind)?{alert_snoozed:a,alert_ignored:[...s,i]}:{alert_snoozed:[...a,{...i,at:Math.max(e,t.since??0)}],alert_ignored:s}}function Ns(r,t){return(r??[]).filter(n=>ht(n)!==ht(t))}function Ol(r,t){return`${pn.has(t.kind)?k(r,`alert_short_${t.kind}`):t.kind} \xB7 ${r?O(r,t.entity):t.entity}`}function Vs(r,t,n,e){return t?.length?m`<div class="fp3d-ignored">
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
    <b>${k(r,"alert_ignored")}</b>
    <p>${k(r,"alert_ignored_hint")}</p>
    ${t.map(i=>m`<div class="fp3d-ignored-row" data-key=${ht(i)}>
        <span title=${i.entity}>${Ol(r,i)}</span>
        <button ?disabled=${n} @click=${()=>e(i)}>${k(r,"alert_restore")}</button>
      </div>`)}
  </div>`:w}var fn={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Bs(r,t){let n=fn[r].stops;if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++){let[i,o]=n[e],[a,s]=n[e-1];if(t<=i){let l=(t-a)/(i-a);return[s[0]+(o[0]-s[0])*l,s[1]+(o[1]-s[1])*l,s[2]+(o[2]-s[2])*l]}}return n[n.length-1][1]}function qs(r,t,n){let e=new Map;for(let i of t.floors)for(let o of i.rooms){let a=se(r,i,o,n);a!==null&&e.set(o.id,a)}return e}function js(r){let t=fn[r].stops,n=t[0][0],e=t[t.length-1][0];return`linear-gradient(90deg, ${t.map(([i,o])=>`rgb(${o.map(a=>Math.round(a*255)).join(",")}) ${Math.round((i-n)/(e-n)*100)}%`).join(", ")})`}function Ks(r){return r.startsWith("hh:")?r.slice(3).split("#")[0]||null:r.startsWith("detect:")?r.slice(7)||null:/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(r)?r:null}var gn=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function mn(r){return r&&r!=="none"?r:null}function ce(r,t){if(t.type!=="parking")return null;let n=mn(t.entity);if(n){let o=r.states[n];if(!o||!gn.has(o.state.toLowerCase()))return null}let e=t.vehicle??null,i=mn(t.type_entity);if(i&&t.types?.length){let o=(r.states[i]?.state??"").trim().toLowerCase();if(o){let a=l=>l.trim().toLowerCase(),s=t.types.find(l=>a(l.state)===o)??t.types.find(l=>a(l.state)&&o.includes(a(l.state)));s&&(e=s.vehicle)}}return e&&$t(e)?e:null}function _o(r,t){let n=new Map;for(let e of t.floors)for(let i of e.furniture){let o=ce(r,i);o&&n.set(i.id,o)}return n}function Us(r){return r.flatMap(t=>t.furniture.filter(n=>n.type==="parking").flatMap(n=>[mn(n.entity),mn(n.type_entity)])).filter(t=>!!t)}function Gs(r,t){let n=$t(t);if(!n)return null;let e=r.scale??1;return{id:`${r.id}:vehicle`,type:t,x:r.x,z:r.z,rotation:r.rotation,w:n.size[0]*e,d:n.size[1]*e,h:n.size[2]*e,variant:null,entity:null,power:null}}var ze=1800*1e3,Dl=new Set(["motion","occupancy","presence"]);function Js(r,t){return t.startsWith("binary_sensor.")&&Dl.has(String(r.states[t]?.attributes.device_class))}function He(r,t){let n=[],e=new Set,i=(o,a,s,l)=>{e.has(o)||(e.add(o),n.push({entity:o,floorId:a,x:s,z:l}))};for(let o of t.floors)for(let a of o.placements)if(Js(r,a.entity_id))i(a.entity_id,o.id,a.x,a.z);else if(L(a.entity_id)==="camera")for(let s of Ft(r,a.entity_id))i(s,o.id,a.x,a.z);for(let o of t.floors)for(let a of o.rooms){if(!a.area_id||a.points.length<3)continue;let[s,l]=Pt(a.points);for(let c of xt(r,a.area_id))Js(r,c)&&i(c,o.id,s,l)}return n}function Ys(r,t,n,e=ze){let i=n-e,o=[];for(let[a,s]of Object.entries(r)){let l="";for(let c of s){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=i&&d<=n&&o.push({entity:a,time:d}),l=c.s}}for(let a of t){let s=a.lastChanged??NaN;a.state!=="on"||!(s>=i&&s<=n)||o.some(l=>l.entity===a.entity&&Math.abs(l.time-s)<2e3)||o.push({entity:a.entity,time:s})}return o.sort((a,s)=>a.time-s.time)}function Xs(r,t,n,e=ze){let i=new Map(r.map(a=>[a.entity,a])),o=[];for(let a of t){let s=i.get(a.entity);if(!s)continue;let l=o[o.length-1];l&&l.entity===a.entity&&a.time-l.time<6e4||o.push({...s,time:a.time,age:Math.min(1,Math.max(0,(n-a.time)/e))})}return o.slice(-40)}function bn(r,t){return new Date(t).toLocaleTimeString(r.language,{hour:"2-digit",minute:"2-digit"})}var Zs='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Mc=Math.PI/180,ue=r=>Math.min(1,Math.max(0,r)),Et=(r,t,n)=>r.map((e,i)=>e+(t[i]-e)*n);var Qs={top:[74,140,214],horizon:[178,208,234]},ta={top:[148,155,164],horizon:[192,197,203]},ea={top:[8,12,26],horizon:[24,32,54]},Ll=[244,156,104],na=[186,190,195],Wl=[88,112,70],Nl=[226,231,238];function oa(r,t){let n=t??{cloud:0,rain:0,snow:0,fog:0},e=r??90,i=ue(n.cloud),o=ue((e+6)/12),a=1-.32*ue(n.rain),s=Et(Qs.top,ta.top,i).map(v=>v*a),l=Et(Qs.horizon,ta.horizon,i).map(v=>v*a),c=ue(1-Math.abs(e-1)/7)*(1-i);l=Et(l,Ll,c*.85),s=Et(s,[92,112,168],c*.4);let d=ue(n.fog);s=Et(s,na,d),l=Et(l,na,d),s=Et(ea.top,s,o),l=Et(ea.horizon,l,o);let h=Et(Wl,Nl,ue(n.snow*1.25)).map(v=>v*(.15+.85*o)),f=v=>v.map(y=>Math.round(y));return{top:f(s),horizon:f(l),ground:f(h)}}var vn=r=>r.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function yn(r,t){let n=[],e=$e(r,t.floors),i=t.floors.length>1;for(let o of t.floors){let a=(d,u)=>o.rooms.find(h=>h.points.length>=3&&G([d,u],h.points))??null,s=(d,u)=>[a(d,u)?.name,i?o.name:null].filter(Boolean).join(" \xB7 ");for(let d of o.rooms){if(d.points.length<3)continue;let[u,h]=Pt(d.points);n.push({kind:"room",name:d.name,where:i?o.name:"",floorId:o.id,roomId:d.id,entity:null,icon:null,x:u,z:h,y:0})}let l=new Set,c=(d,u,h,f)=>{l.has(d)||!r.states[d]||(l.add(d),n.push({kind:"device",name:O(r,d),where:s(u,h),floorId:o.id,roomId:a(u,h)?.id??null,entity:d,icon:L(d),x:u,z:h,y:f}))};for(let d of o.placements)c(d.entity_id,d.x,d.z,d.y??Vi(L(d.entity_id)??"sensor",o.height,d.mount));for(let d of o.furniture){let u=e.get(d.id),h=u?.entity??u?.power;h&&c(h,d.x,d.z,Math.min(o.height-.3,Math.max(.5,d.h)))}}return n}function ia(r,t,n=8){let e=vn(t).split(/\s+/).filter(Boolean);if(!e.length)return[];let i=r.filter(s=>{let l=vn(`${s.name} ${s.where} ${s.entity??""}`);return e.every(c=>l.includes(c))}),o=vn(t.trim()),a=s=>(vn(s.name).startsWith(o)?0:2)+(s.kind==="room"?0:1);return i.sort((s,l)=>a(s)-a(l)||s.name.localeCompare(l.name)).slice(0,n)}var Ce=new Map;async function $o(r,t){}async function ra(r,t){for(let n of Ce.values())if(n.module.voice)try{let e=await n.module.voice(r,t);if(e)return e}catch(e){console.warn(`Home 3D: module ${n.id} failed on "${r}"`,e)}return null}function sa(r){return Yt(t=>t.scene?.(r))}function aa(r){return Yt(t=>t.cards?.(r))}function la(r){return Yt(t=>t.alerts?.(r))}function da(r){return Yt(t=>t.watched?.(r))}function So(r,t){return Yt(n=>n.roomSheets?.(r,t))}function Mo(r){return Yt(t=>t.menuSheets?.(r))}function Io(){return[...Ce.values()].filter(r=>!!r.module.settings).map(r=>r.id)}function ca(r,t){let n=Ce.get(r);if(!n?.module.settings)return[];try{return n.module.settings(t)??[]}catch(e){return console.warn(`Home 3D: module ${n.id} failed`,e),[]}}function ua(r){return Yt(t=>t.pools?.(r))}function Jt(){return Ce.size>0}function Yt(r){let t=[];for(let n of Ce.values())try{t.push(...r(n.module)??[])}catch(e){console.warn(`Home 3D: module ${n.id} failed`,e)}return t}function ha(r,t,n){let e=r.filter(l=>Number.isFinite(l));if(e.length<2)return"";let i=Math.min(...e),a=Math.max(...e)-i||1,s=l=>Math.round(l*10)/10;return e.map((l,c)=>`${s(c/(e.length-1)*t)},${s(n-1-(l-i)/a*(n-2))}`).join(" ")}function pa(r,t){if(!r.length)return[.25,.7,1];if(r.length===1)return r[0];let n=Math.min(1,Math.max(0,t))*(r.length-1),e=Math.min(r.length-2,Math.floor(n)),i=n-e,[o,a]=[r[e],r[e+1]];return[o[0]+(a[0]-o[0])*i,o[1]+(a[1]-o[1])*i,o[2]+(a[2]-o[2])*i]}function fa(r){let t=[];for(let n of r){let e=n.points;if(e.length<2)continue;let i=[],o=0;for(let l=1;l<e.length;l++){let c=Math.hypot(e[l][0]-e[l-1][0],e[l][1]-e[l-1][1],e[l][2]-e[l-1][2]);i.push(c),o+=c}if(o<.01)continue;let a=n.colors.length===e.length,s=0;for(let l=1;l<e.length;l++){let c=i[l-1];if(c<.005)continue;let d=a?pa([n.colors[l-1],n.colors[l]],.5):pa(n.colors,(s+c/2)/o);t.push({floorId:n.floorId,a:[...e[l-1]],b:[...e[l]],dist:s,power:Math.max(0,n.flow),color:d,...n.width?{width:Math.min(3,Math.max(.5,n.width))}:{},...n.look==="pipe"?{pipe:!0}:{},...n.views==="house"?{house:!0}:n.views==="floor"?{floor:!0}:{}}),s+=c}}return t}function ma(r){return r&&[...r].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(r)?r:null}function ga(r){return r&&r.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(r)?r:null}function wn(r,t){return(r??[]).filter(n=>!t||!n.minor)}var Vl=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Bl=[2200,2700,3200,4e3,5e3,6500],ql=["hs","rgb","rgbw","rgbww","xy"],jl=4,Kl=16,Ul=32,Gl=128;function Po(r){let t=r.attributes.supported_color_modes??[],n=t.some(e=>ql.includes(e));return{dim:t.some(e=>e!=="onoff"),color:n,temp:t.includes("color_temp")}}function Eo(r){return((r.attributes.supported_features??0)&jl)!==0&&typeof r.attributes.current_position=="number"}var To=class extends je{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},noLook:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{L(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(t){let n=t.attributes.entity_picture,e=n?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return m`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${e?m`<img src=${e} alt=${O(this.hass,this.entity)} />`:m`<span class="qm-note">${nt(this.hass,t)}</span>`}
      </button>
      ${this.noLook?w:m`<button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
            ${this.t("through_camera")}
          </button>`}`}t(t,n){return k(this.hass,t,n)}async ask(){return!this.confirmSwitch||await this.question(this.t("confirm_switch",{name:O(this.hass,this.entity)}))}async guarded(t){await this.ask()&&t()}question(t){return Ze(t,{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")})}call(t,n,e={}){Ie(this.hass,t,n,{entity_id:this.entity,...e},i=>this.t("service_failed",{error:i}))}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){gt(this,this.entity),this.close()}ring(t){let n=t.length;return t.map((e,i)=>{let o=i/n*Math.PI*2-Math.PI/2;return m`<div class="qm-at" style="left:${50+Math.cos(o)*39}%;top:${50+Math.sin(o)*39}%">${e}</div>`})}renderLight(t){let n=Po(t),e=t.state==="on",i=e&&typeof t.attributes.brightness=="number"?Math.round(t.attributes.brightness/2.55):e?100:0,o=n.color?Vl.map(a=>m`<button class="qm-swatch" style="background:rgb(${a.join(",")})" aria-label=${`RGB ${a.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:a})}></button>`):n.temp?Bl.map(a=>m`<button class="qm-swatch" style="background:${Jl(a)}" aria-label=${`${a} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:a})}></button>`):[];return m`<div class="qm-ring ${o.length?"":"qm-ring-small"}">
        ${this.ring(o)}
        <button class="qm-power ${e?"qm-on":""}" aria-pressed=${e} @click=${()=>{this.guarded(()=>this.call("light","toggle"))}}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${e?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${n.dim?m`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${a=>this.call("light","turn_on",{brightness_pct:Number(a.target.value)})}
          />`:w}`}renderCover(t){let n=typeof t.attributes.current_position=="number"?t.attributes.current_position:null,e=t.state==="opening"||t.state==="closing",i=Eo(t),o=(c,d,u,h=!1)=>m`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${d} @click=${u}>${c}</button>`,a=c=>n!==null&&Math.abs(n-c)<3,s=[o("\u25B2",this.t("cover_open"),()=>{this.guarded(()=>this.call("cover","open_cover"))},a(100)),...i?[75,50].map(c=>o(`${c}`,`${c} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:c}))},a(c))):[],o("\u25BC",this.t("cover_close"),()=>{this.guarded(()=>this.call("cover","close_cover"))},a(0)),...i?[25].map(c=>o(`${c}`,`${c} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:c}))},a(c))):[],o("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),e)],l=n===null?t.state==="closed"?100:0:100-n;return m`<div class="qm-ring">
        ${this.ring(s)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${e?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>e?this.call("cover","stop_cover"):void this.guarded(()=>this.call("cover",l>50?"open_cover":"close_cover"))}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${n!==null?`${n} %`:nt(this.hass,t)}</b>
        </button>
      </div>
      ${i?m`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(n??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:w}
      ${this.renderTilt(t)}`}renderTilt(t){let n=(t.attributes.supported_features??0)|0,e=typeof t.attributes.current_tilt_position=="number"?t.attributes.current_tilt_position:null;return n&Gl&&e!==null?m`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${e} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(e)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:Hi(t)?m`<div class="qm-tilt-buttons">
        ${n&Kl?m`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:w}
        ${n&Ul?m`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:w}
      </div>`:w}renderCar(t){let n=t.entities,e=(u,h,f,v={})=>Ie(this.hass,u,h,{entity_id:f,...v},y=>this.t("service_failed",{error:y})),i=n.lock,o=!!i&&i.startsWith("lock."),a=u=>/^(switch|input_boolean|fan|light)\./.test(u),s=n.climate,l=!!s&&s.startsWith("climate."),c=n.charging&&a(n.charging)?n.charging:null,d=[t.soc!==null?`${Math.round(t.soc)} %`:null,t.range!==null?`${Math.round(t.range)} ${t.rangeUnit}`:null,t.charging?`\u26A1 ${this.t("car_charging_short")}`:t.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return m`<p class="qm-car-line">${d||nt(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${o||i&&a(i)?m`<button
              class="qm-swatch qm-slot ${t.locked?"qm-slot-on":""}"
              @click=${()=>t.locked?void this.question(this.t("car_unlock_confirm")).then(u=>u&&(o?e("lock","unlock",i):e("homeassistant","turn_off",i))):o?e("lock","lock",i):e("homeassistant","turn_on",i)}
            >
              ${t.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:w}
        ${s?m`<button class="qm-swatch qm-slot ${t.climateOn?"qm-slot-on":""}" @click=${()=>e(l?"climate":"homeassistant",t.climateOn?"turn_off":"turn_on",s)}>
              ${t.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:w}
        ${c?m`<button class="qm-swatch qm-slot ${t.charging?"qm-slot-on":""}" @click=${()=>e("homeassistant",t.charging?"turn_off":"turn_on",c)}>
              ${t.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:w}
        ${!o&&!s&&!c?m`<p class="qm-note">${this.t("car_no_controls")}</p>`:w}
      </div>`}renderMedia(t){let n=t.attributes,e=t.state==="playing",i=t.state==="off"||t.state==="standby",o=typeof n.volume_level=="number"?Math.round(n.volume_level*100):null,a=[n.media_title,n.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),s=typeof n.entity_picture=="string"?n.entity_picture:null;return m`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${e?"qm-on":""}" aria-label=${this.t("play_pause")} style=${s?`background-image:url(${s})`:""} @click=${()=>this.call("media_player",i?"turn_on":e?"media_pause":"media_play")}>
          <span>${i?"\u23FB":e?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${a?m`<p class="qm-media-title">${a}</p>`:w}
      ${o!==null?m`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(o)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:w}
      ${this.renderPlay(t)}`}renderPlay(t){let n=Array.isArray(t.attributes.source_list)?t.attributes.source_list.slice(0,10):[],e=this.presets??[];if(!n.length&&!e.length)return w;let i=t.attributes.source;return m`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${e.map(o=>m`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:o.type,media_content_id:o.content})}>
            ▶ ${o.label}
          </button>`)}
        ${n.map(o=>m`<button class="qm-chip ${o===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:o})}>${o}</button>`)}
      </div>`}renderDoorLock(t){let n=t.state==="locked"||t.state==="locking"||t.state==="jammed",e=O(this.hass,this.entity),i=async()=>{await this.question(this.t(n?"door_unlock_confirm":"door_lock_confirm",{name:e}))&&(this.call("lock",n?"unlock":"lock"),this.close())};return m`<p class="qm-car-line">${nt(this.hass,t)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${n?"qm-slot-on":""}" @click=${i}>${n?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(t){let n=t.state==="on"||t.state==="unlocked"||t.state==="playing",e=t.entity_id.split(".")[0];return m`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${n?"qm-on":""}"
        aria-pressed=${n}
        @click=${()=>{this.guarded(()=>e==="lock"?this.call("lock",n?"lock":"unlock"):this.call("homeassistant","toggle"))}}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${nt(this.hass,t)}</b>
      </button>
    </div>`}render(){let t=this.hass?.states[this.entity];if(!t)return w;let n=L(this.entity),e=this.car?this.renderCar(this.car):J(t)?m`<p class="qm-note">${nt(this.hass,t)}</p>`:this.doorLock&&n==="lock"?this.renderDoorLock(t):n==="light"?this.renderLight(t):n==="cover"?this.renderCover(t):n==="camera"?this.renderCamera(t):n==="media"?this.renderMedia(t):this.renderToggle(t);return m`<div class="qm" role="dialog" aria-label=${O(this.hass,this.entity)}>
      <div class="qm-title">${O(this.hass,this.entity)}</div>
      ${e}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Qe,qe`
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
    `]};function Jl(r){let t=Math.min(1,Math.max(0,(r-2200)/4300)),n=(e,i)=>Math.round(e+(i-e)*t);return`rgb(${n(255,200)},${n(170,225)},${n(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",To);var Yl=new URL(import.meta.url),Xl=new URL("./home-3d-3d.js?v=3f2244e39823",Yl).href,ba;function xn(){return ba??=import(Xl),ba}var Ao;function va(){let r=new URL("./home-3d-2d.js?v=dda8b34eae37",new URL(import.meta.url)).href;return Ao??=import(r).catch(t=>{throw Ao=void 0,t}),Ao}function ya(r,t,n){return n?!0:r.show==="never"||t==="none"||t==="room"?!1:!!r.lamp||!!r.model}var Ro=Qi("home-3d-fun",()=>"a8b8cd0bb894");var kn={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"},Zl=new Set(["problem","safety","smoke","gas","carbon_monoxide","heat","moisture","tamper","battery"]),Ql=/\b(ob|lb|on battery|low battery|discharg\w*|overload\w*|replace|error|fault\w*|degraded|warning|alarm|update)\b/,wa=/\b(off|offline|disconnected|down|stopped|not_home|away|unreachable|dead|lost|shutdown|halted|failed)\b/,td=/\b(ol|on|online|connected|up|running|home|ok|normal|idle|healthy|active|charging|charged|ready)\b/;function pe(r){let t=[];for(let n of[r.entity,...r.links??[]])n&&!t.includes(n)&&t.push(n);return t}function xa(r){if(!r)return null;let t=String(r.state??"").toLowerCase();if(t==="unavailable")return"offline";if(t==="unknown"||t==="")return"warning";let n=r.entity_id.slice(0,r.entity_id.indexOf("."));if(n==="binary_sensor"){let i=Zl.has(String(r.attributes?.device_class??""));return t==="on"?i?"warning":"online":i?"online":"offline"}if(n==="update")return t==="on"?"warning":"online";if(n==="device_tracker"||n==="person")return t==="home"?"online":"offline";if(n==="switch"||n==="input_boolean"||n==="light"||n==="fan")return t==="on"?"online":"offline";if(Number.isFinite(Number(t)))return"online";let e=t.replace(/[_-]+/g," ");return Ql.test(e)?"warning":wa.test(e)||wa.test(t)?"offline":(td.test(e),"online")}function Xt(r,t){let e=(t.links??[]).filter(a=>a&&a!==t.entity).map(a=>r.states[a]).filter(a=>!!a),i=e.filter(a=>a.state==="unavailable").length,o=e.some(a=>a.state!=="unavailable"&&xa(a)==="warning");if(t.entity){let a=xa(r.states[t.entity])??"offline";return a==="online"&&(i||o)?"warning":a}return e.length?i===e.length?"offline":i||o?"warning":"online":null}function ka(r,t){let n=new Map;for(let e of t)for(let i of e.furniture){let o=i.rack?.slots;if(o?.length)for(let a of o){if(!a.entity&&!a.links?.length)continue;let s=Xt(r,a);s&&n.set(`${i.id}/${a.id}`,s)}}return n}function _a(r,t){let n=t.slice(0,t.indexOf(".")),e=r.states[t],i=String(e?.attributes?.device_class??""),o=String(e?.attributes?.unit_of_measurement??""),a=`${t.slice(n.length+1)} ${r.entities?.[t]?.translation_key??""}`.toLowerCase();return n==="update"?"update":n==="button"?"button":n==="switch"?"switch":n==="device_tracker"?"status":n==="binary_sensor"?["connectivity","running","plug","power","problem"].includes(i)||/status|state|online|connected|running/.test(a)?"status":"other":n!=="sensor"?"other":/runtime/.test(a)||i==="duration"&&/battery/.test(a)?"runtime":i==="battery"||/battery|charge/.test(a)&&o==="%"?"battery":i==="temperature"?"temperature":i==="power"||o==="W"||o==="kW"?"power":i==="data_rate"||/\/s$/.test(o)||/throughput|bandwidth|download|upload|\b(rx|tx)\b|_(rx|tx)(_|$)|network_(in|out)|packets/.test(a)?"throughput":/uptime|last_boot|boot_time/.test(a)||i==="timestamp"&&/up|boot/.test(a)?"uptime":/cpu|processor/.test(a)?"cpu":/memory|\bram\b|swap/.test(a)?"memory":/disk|volume|storage|drive|pool|\bfs\b|used_space|free_space/.test(a)?"disk":/load/.test(a)?"load":/status|state/.test(a)||i==="enum"?"status":"other"}var $a=8,he="@hottest",Zt="@online";function Sa(r,t){let n=new Set,e=[];for(let i of t)for(let o of pe(i))n.has(o)||(n.add(o),e.push({id:o,kind:_a(r,o),slot:i}));return e}var Ho=(r,t)=>String(r.states[t]?.attributes?.unit_of_measurement??""),zo=(r,t)=>Ho(r,t)==="%",ed=(r,t)=>r.some(n=>n.slot===t&&(n.kind==="battery"||n.kind==="runtime"));function nd(r,t,n=$a){let e=Sa(r,t),i=l=>e.filter(c=>c.kind===l),o=l=>ed(e,l.slot),a=(l,...c)=>{for(let d of c){let u=l.find(d);if(u)return u.id}return null};return[a(i("load"),l=>o(l)&&zo(r,l.id),l=>zo(r,l.id)),a(i("battery"),o,()=>!0),a(i("runtime"),()=>!0),a(i("power"),l=>/poe/.test(l.id),o),i("temperature").length?he:null,t.some(l=>Xt(r,l)!==null)?Zt:null,a(i("disk"),l=>zo(r,l.id)&&!/free/.test(l.id)),a(i("throughput"),l=>/wan|uplink|internet|external/.test(l.id),()=>!0)].filter(l=>!!l).slice(0,n)}var _n=(r,t)=>{let n=r.states[t];if(!n||n.state===""||n.state==="unavailable"||n.state==="unknown")return null;let e=Number(n.state);return Number.isFinite(e)?e:null};function $n(r,t,n){let e=Sa(r,t),i=[...new Set(n??nd(r,t))],o=[];for(let a of i){if(o.length>=$a)break;if(a===he){let s=e.filter(d=>d.kind==="temperature"),l=null;for(let d of s){let u=_n(r,d.id);u!==null&&(!l||u>_n(r,l.id))&&(l=d)}if(!s.length)continue;let c=l?_n(r,l.id):null;o.push({key:a,kind:"temperature",slot:l?.slot.id??null,value:c,unit:l?Ho(r,l.id):"",text:c===null?"unavailable":String(r.states[l.id].state),ids:s.map(d=>d.id),agg:"max"})}else if(a===Zt){let s=t.map(c=>Xt(r,c)).filter(c=>c!==null);if(!s.length)continue;let l=s.filter(c=>c==="online").length;o.push({key:a,kind:"status",slot:null,value:l,of:s.length,unit:"",text:`${l}/${s.length}`,ids:[],agg:"one"})}else{let s=e.find(c=>c.id===a);if(!s)continue;let l=_n(r,a);o.push({key:a,kind:s.kind,slot:s.slot.id??null,value:l,unit:Ho(r,a),text:String(r.states[a]?.state??"unavailable"),ids:l===null?[]:[a],agg:"one"})}}return o}function Ma(r,t){let n=new Map;for(let e of t.ids)for(let i of r?.[e]??[]){if(typeof i.mean!="number")continue;let o=typeof i.start=="number"?i.start:Date.parse(i.start),a=n.get(o);n.set(o,a===void 0?i.mean:Math.max(a,i.mean))}return[...n].sort((e,i)=>e[0]-i[0]).map(([,e])=>e)}async function Ia(r,t,n,e=Date.now()){try{return await r.callWS({type:"recorder/statistics_during_period",start_time:new Date(e-n).toISOString(),statistic_ids:[...t],period:"5minute",types:["mean"]})??{}}catch{return null}}function Ta(r,t){let n=r.points,e=n[t],i=n[(t+1)%n.length],o=Math.hypot(i[0]-e[0],i[1]-e[1])||1,a=[(i[0]-e[0])/o,(i[1]-e[1])/o],s=[-a[1],a[0]],l=[(e[0]+i[0])/2,(e[1]+i[1])/2];G([l[0]+s[0]*.02,l[1]+s[1]*.02],n)||(s=[-s[0],-s[1]]);let c=[s[1],-s[0]];return{a:e,b:i,u:a,n:s,length:o,rightward:a[0]*c[0]+a[1]*c[1]>0}}function Sn(r,t){let n=t[0]-r.a[0],e=t[1]-r.a[1];return{s:n*r.u[0]+e*r.u[1],d:n*r.n[0]+e*r.n[1]}}function Co(r,t,n){return[r.a[0]+r.u[0]*t+r.n[0]*n,r.a[1]+r.u[1]*t+r.n[1]*n]}var od=.45;function Pa(r,t){let n=[];for(let e of t.openings){if(e.wall)continue;let i=t.rooms.find(s=>s.id===e.room_id);if(!i||e.edge>=i.points.length)continue;let{s:o,d:a}=Sn(r,nn(i,e.edge,e.offset));Math.abs(a)>.4||o<-.05||o>r.length+.05||n.push(id(e,o))}return n}function id(r,t){return{kind:"opening",id:r.id,s0:t-r.width/2,s1:t+r.width/2,y0:r.sill,y1:r.sill+r.height,d:0}}function Ea(r,t,n,e=od){let i=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let a=G([o.x,o.z],n.points),s=_e(o).map(f=>Sn(r,f)),l=Math.min(...s.map(f=>f.d)),c=Math.min(...s.map(f=>f.s)),d=Math.max(...s.map(f=>f.s)),u=Sn(r,[o.x,o.z]);if(!a&&u.d<=0||u.d<=0||l>e||l<-.3||d<.02||c>r.length-.02)continue;let h=X(t,o);i.push({kind:"furniture",id:o.id,s0:c,s1:d,y0:h,y1:h+o.h,d:l})}return i}var Aa=.3;function Fe(r,t){let n=r.from?t(r.from):null,e=r.to?t(r.to):null,i=r.height??Aa,o=[];if(r.heights)n&&o.push([n.x,n.y,n.z]),r.points.forEach(([a,s],l)=>o.push([a,r.heights?.[l]??i,s])),e&&o.push([e.x,e.y,e.z]);else{if(!n||!e)return[];o.push([n.x,n.y,n.z],[n.x,i,n.z]);for(let[a,s]of r.points)o.push([a,i,s]);o.push([e.x,i,e.z],[e.x,e.y,e.z])}return o.filter((a,s)=>s===0||Fo(a,o[s-1])>.001)}function Fo(r,t){return Math.hypot(t[0]-r[0],t[1]-r[1],t[2]-r[2])}function Mn(r){let t=0;for(let n=1;n<r.length;n++)t+=Fo(r[n-1],r[n]);return t}function In(r,t){if(r.length<2)return null;let n=Math.max(0,t);for(let e=1;e<r.length;e++){let[i,o]=[r[e-1],r[e]],a=Fo(i,o);if(!(a<1e-6)){if(n<=a||e===r.length-1){let s=Math.min(1,n/a),l=[(o[0]-i[0])/a,(o[1]-i[1])/a,(o[2]-i[2])/a];return{p:[i[0]+(o[0]-i[0])*s,i[1]+(o[1]-i[1])*s,i[2]+(o[2]-i[2])*s],dir:l,seg:e-1}}n-=a}}return null}function Qt(r){let[t="",n="",e]=r.split(":");return{kind:t,id:n,port:e||null}}function rd(r,t){let{w:n,d:e,h:i}=r;if(r.type==="pool_pump")return t==="suction"?[n*.5,i*.55,0]:t==="pressure"?[n*.05,i*.9,0]:null;if(r.type==="pool_filter"){let o=Math.min(n,e)/2;if(r.variant==="side6"){let l=o+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let a=i*.89,s=o*.45+.04;return t==="pump"?[-s,a,0]:t==="return"?[s,a,0]:t==="waste"?[0,a,-s]:null}if(r.type==="pool_heat_pump"){let o=r.variant==="left"||r.variant==="back"?r.variant:"right";if(t!=="in"&&t!=="out")return null;let a=t==="in"?i*.25:i*.45;return o==="back"?[t==="in"?-n*.15:n*.15,a,-e/2-.04]:[(o==="left"?-1:1)*(n/2+.04),a,-e*.2]}return null}function Ra(r,t){let n=rd(r,t);if(!n)return null;let e=r.rotation*Math.PI/180,[i,o]=[Math.cos(e),Math.sin(e)];return{x:r.x+n[0]*i-n[2]*o,y:n[1],z:r.z+n[0]*o+n[2]*i}}function Oe(r,t){if(t==="outside"){if(r.kind==="floor")return{x:r.x,y:r.y-.3,z:r.z};if(r.kind==="wall"){let n=(r.depth??.3)+.05;return{x:r.x-(r.nx??0)*n,y:r.y,z:r.z-(r.nz??0)*n}}}return{x:r.x,y:r.y,z:r.z}}function Ha(r){return r.flatMap(t=>(t.outdoor??[]).filter(n=>n.type==="pool"&&n.pool&&n.points.length>=3).map(n=>({floor:t,area:n})))}var Oo=[.25,.7,1],sd=900;function Ca(r,t,n,e=i=>i){let i=[];for(let o of r){let a=e(Fe(o,n),o);if(a.length<2)continue;let s=t.get(o.id),l=s?.color??Oo,c=0;for(let d=1;d<a.length;d++){let[u,h]=[a[d-1],a[d]],f=Math.hypot(h[0]-u[0],h[1]-u[1],h[2]-u[2]);f<.01||(i.push({floorId:o.floor_id,a:u,b:h,dist:c,power:s?.active?sd:0,color:l}),c+=f)}}return i}function Tn(r,t,n){let e=n.pool??{},i=ke(t,n);return o=>{let{kind:a,id:s,port:l}=Qt(o);if(a==="port"){let c=e.ports?.find(u=>u.id===s);if(!c)return null;let d=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?xe(t,n)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(a==="joint"){let c=e.joints?.find(d=>d.id===s);return c?Oe(c,l):null}if(a!=="dev")return null;for(let c of r.floors){let d=c.furniture.find(v=>v.id===s);if(!d||!_i.includes(d.type))continue;let u=l?Ra(d,l):null,h=c.elevation-t.elevation;if(u)return{...u,y:u.y+X(c,d)+h};let f=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?$i:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:f+X(c,d)+h}}return null}}function Do(r,t,n,e){let i=d=>{let{kind:u,id:h}=Qt(d);return u==="port"?n.pool?.ports?.find(f=>f.id===h)?.kind:void 0},o=d=>i(d)==="drain",a=d=>i(d)==="inlet"||i(d)==="skimmer",s=d=>{if(d.length<2)return d;let u=d[0],h=Lo(n,[u[0],u[2]]);if(!h)return d;let f=[u[0]+h[0]*.35,u[1],u[2]+h[1]*.35],v=1;for(;v<d.length&&Math.hypot(d[v][0]-u[0],d[v][2]-u[2])<.01;)v++;let y=d.slice(v).map(p=>[...p]);for(let p=0;p<y.length-1;p++){let _=(y[p][0]-u[0])*h[0]+(y[p][2]-u[2])*h[1];if(_>=.349999)break;y[p][0]+=h[0]*(.35-_),y[p][2]+=h[1]*(.35-_)}let b=y[0]??d[d.length-1];return[u,f,[f[0],b[1],f[2]],...y]},l=d=>{if(d.length<2)return d;let u=d[0];if(!G([u[0],u[2]],n.points))return d;let h=xe(e,n)-.15,f=d.findIndex((p,_)=>_>0&&Math.hypot(p[0]-u[0],p[2]-u[2])>.01);if(f<0)return d;let v=d[f],y=[v[0],v[2]];for(let p=0;p<n.points.length;p++){let _=n.points[p],$=n.points[(p+1)%n.points.length],P=ad([u[0],u[2]],[v[0],v[2]],_,$);P&&(y=P)}let b=Math.hypot(y[0]-u[0],y[1]-u[2])>1e-6?[y[0]+(y[0]-u[0])*.02,y[1]+(y[1]-u[2])*.02]:y;return[u,[u[0],h,u[2]],[b[0],h,b[1]],[b[0],v[1],b[1]],...d.slice(f)]},c=r;return t.from&&o(t.from)&&(c=l(c)),t.to&&o(t.to)&&(c=l([...c].reverse()).reverse()),t.from&&a(t.from)&&(c=s(c)),t.to&&a(t.to)&&(c=s([...c].reverse()).reverse()),c}function Lo(r,t){let n=r.points;if(n.length<3)return null;let e=0;for(let o=0;o<n.length;o++){let a=n[o],s=n[(o+1)%n.length];e+=a[0]*s[1]-s[0]*a[1]}let i=null;for(let o=0;o<n.length;o++){let a=n[o],s=n[(o+1)%n.length],l=s[0]-a[0],c=s[1]-a[1],d=Math.hypot(l,c);if(d<1e-6)continue;let u=Math.max(0,Math.min(1,((t[0]-a[0])*l+(t[1]-a[1])*c)/(d*d))),h=Math.hypot(a[0]+l*u-t[0],a[1]+c*u-t[1]),f=e>0?[c/d+0,-l/d+0]:[-c/d+0,l/d+0];(!i||h<i.d)&&(i={d:h,n:f})}return i?i.n:null}function ad(r,t,n,e){let i=[t[0]-r[0],t[1]-r[1]],o=[e[0]-n[0],e[1]-n[1]],a=i[0]*o[1]-i[1]*o[0];if(Math.abs(a)<1e-9)return null;let s=((n[0]-r[0])*o[1]-(n[1]-r[1])*o[0])/a,l=((n[0]-r[0])*i[1]-(n[1]-r[1])*i[0])/a;return s>=0&&s<=1&&l>=0&&l<=1?[r[0]+i[0]*s,r[1]+i[1]*s]:null}var pt=r=>Math.round(r*1e3)/1e3;var Fa=-.3;function Oa(r,t,n,e,i){let o=[],a=[],s=b=>t(b),l=[],c=r.from,d=[];for(let b of r.vias){if(b.kind!=="hole"){d.push(b.kind);continue}let p=n.find(H=>H.id===b.joint),_=s(c);if(!p||!_)continue;let $=s(`joint:${p.id}:inside`),P=s(`joint:${p.id}:outside`),D=b.dir?b.dir==="out":Math.hypot(_.x-$.x,_.z-$.z)<=Math.hypot(_.x-P.x,_.z-P.z);l.push({a:c,b:`joint:${p.id}:${D?"inside":"outside"}`,fits:d}),d=[],c=`joint:${p.id}:${D?"outside":"inside"}`}let u=r.to;if(u.length>1){let b=s(c),p=u.map(s).filter(_=>!!_);if(b&&p.length===u.length){let _=p.reduce((R,E)=>R+E.x,0)/p.length,$=p.reduce((R,E)=>R+E.z,0)/p.length,P=Math.hypot(b.x-_,b.z-$)||1,D=Math.min(1,P/2)/P,H=b.y<0||p.some(R=>R.y<0),B={id:i("joint"),kind:"tee",x:pt(_+(b.x-_)*D),z:pt($+(b.z-$)*D),y:H?Fa:pt(b.y)};a.push(B),l.push({a:c,b:`joint:${B.id}:in`,fits:d}),d=[],u.forEach((R,E)=>l.push({a:`joint:${B.id}:out${E+1}`,b:R,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let h=b=>{let{kind:p,id:_,port:$}=Qt(b),P=p==="joint"?a.find(D=>D.id===_):void 0;return P?Oe(P,$):s(b)},f=b=>e(b)==="source",v=b=>e(b)==="sink",y=r.to.some(f)&&!f(r.from)||v(r.from)&&!r.to.some(v);for(let b of l){let p=h(b.a),_=h(b.b);if(!p||!_)continue;let $=ld(p,_,za(b.a,n),za(b.b,n)),P={id:i("pipe"),from:b.a,to:b.b,floor_id:r.floorId,points:$.map(H=>[H[0],H[2]]),heights:$.map(H=>H[1])},D=Mn(Fe(P,h));P.fittings=b.fits.map((H,B)=>({id:i("fit"),kind:H,at:pt(Math.min(D/2,.4+B*.25)),...H==="valve"?{open:!0}:{}})),y&&(P={...P,from:P.to,to:P.from,points:[...P.points].reverse(),heights:[...P.heights??[]].reverse(),fittings:P.fittings?.map(H=>({...H,at:pt(Math.max(0,D-H.at))}))}),o.push(P)}return{pipes:o,joints:a}}function za(r,t){let{kind:n,id:e,port:i}=Qt(r),o=n==="joint"&&i==="outside"?t.find(a=>a.id===e):void 0;return o?.kind==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function ld(r,t,n=null,e=null){let i=r.y<0||t.y<0?Fa:pt(Math.max(r.y,t.y)),o=[],[a,s]=[r.x,r.z];n&&([a,s]=[pt(a+n[0]*.5),pt(s+n[1]*.5)],o.push([a,pt(r.y),s]));let[l,c]=[t.x,t.z],d=[];return e&&([l,c]=[pt(l+e[0]*.5),pt(c+e[1]*.5)],d.push([l,pt(t.y),c])),o.push([pt(a),i,pt(s)]),Math.abs(l-a)>.01&&o.push([pt(l),i,pt(s)]),Math.abs(c-s)>.01&&o.push([pt(l),i,pt(c)]),o.push(...d),o.filter((u,h)=>h===0||Math.hypot(u[0]-o[h-1][0],u[1]-o[h-1][1],u[2]-o[h-1][2])>.001)}var dd=2e3;function cd(r){return Math.max(0,dd-r)}var ud=1e3;function Da(r,t){return t?cd(r):Math.max(0,ud-r)}function La(r){return r>.5?Math.min(2.4,.6+Math.sqrt(r)/50):.6}function fe(r){return t=>{t.target!==t.currentTarget||t.key!=="Enter"&&t.key!==" "||(t.preventDefault(),r())}}function Wa(r,t,n,e=12,i=180){let o=Math.max(i,t),a=Math.max(i*.5625,n),s={cols:1,tile:Math.min(o,a*16/9)};for(let l=1;l<=Math.max(1,r);l++){let c=Math.ceil(r/l),d=(o-e*(l-1))/l,u=(a-e*(c-1))/c*16/9,h=Math.min(d,u);(h>s.tile||l===1)&&(s={cols:l,tile:h})}if(s.tile<i){let l=Math.max(1,Math.floor((o+e)/(i+e)));return{cols:Math.min(l,Math.max(1,r)),tile:i}}return{cols:s.cols,tile:Math.floor(s.tile)}}function Pn(r){return Ue(r)&&/:(?:[a-z0-9_.-]*_)?3d_printer(?:_[a-z0-9_.-]*)?$/.test(r)}var pd=/(progress|percent|completion|fortschritt)/,hd=/(status|state|printing)/,fd=/(chamber|light|lamp|led)/;function Wo(r,t){let n={status:null,progress:null,light:null,camera:null};if(!t||t==="none")return n;let e=r.entities?.[t]?.device_id,i=e&&r.entities?Object.values(r.entities).filter(u=>u.device_id===e).map(u=>u.entity_id):[t],o=u=>`${u} ${String(r.states[u]?.attributes.friendly_name??"")} ${r.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),a=u=>u.startsWith("sensor.")&&r.states[u]?.attributes.unit_of_measurement==="%",s=i.find(u=>a(u)&&pd.test(o(u)))??null,c=(/^(sensor|binary_sensor)\./.test(t)&&t!==s?t:null)??i.find(u=>(Ye(r.states[u])||u.startsWith("binary_sensor."))&&hd.test(o(u)))??null,d=i.filter(u=>u.startsWith("light."));return{status:c,progress:s,light:d.find(u=>/chamber/.test(o(u)))??d[0]??i.find(u=>u.startsWith("switch.")&&fd.test(o(u)))??null,camera:i.find(u=>u.startsWith("camera."))??null}}function Na(r,t){let n=Wo(r,t),e=l=>l?r.states[l]:void 0,i=e(n.status),o=!!i&&(i.entity_id.startsWith("binary_sensor.")?i.state==="on":Oi(i.state)||/^paused?$/i.test(i.state)),a=Number(e(n.progress)?.state),s=o&&n.progress&&Number.isFinite(a)?Math.min(1,Math.max(0,a/100)):null;return{printing:o,progress:s,light:qt(e(n.light)),camera:n.camera&&!J(e(n.camera))?n.camera:null}}var md=[.35,1,.55];function Va(r){let t=[];return r.printing&&t.push({part:"progress",color:md,level:1,fill:Math.round((r.progress??0)*100)/100}),r.light&&t.push({part:"chamber",color:r.light.color,level:r.light.level}),t}function No(r,t,n){let e=[...n.openings.values()].flatMap(M=>[M.cover,M.contact,M.tilt,M.contact2??null,M.tilt2??null,M.position??null,M.tiltAngle??null,M.lock??null]),i=$r(t),o=i.filter(M=>L(M)==="camera").flatMap(M=>Ft(r,M)),a=i.map(M=>on(r,M)),s=t.energy,l=t.presence.flatMap(M=>[M.person,M.sensor]),c=t.floors.flatMap(M=>M.rooms.flatMap(A=>xt(r,A.area_id).filter(et=>L(et)==="light"))),d=[...n.furniture.values()].flatMap(M=>[M.entity,M.power]),u=t.floors.flatMap(M=>M.furniture.flatMap(A=>[A.state_entity??null,A.state_entity2??null,A.color_entity??null,A.show_when?.entity??null])),h=t.floors.flatMap(M=>M.furniture.flatMap(A=>[A.door_left??null,A.door_right??null,A.soc??null,A.status??null,A.charge??null,A.export??null])),f=(t.settings.roof?.windows??[]).flatMap(M=>[M.cover,M.contact,M.tilt]).filter(M=>!!M&&M!=="none"),v=[...(t.settings.roof?.solar??[]).map(M=>M.entity),...(t.settings.roof?.strings??[]).map(M=>M.entity)].filter(M=>!!M&&M!=="none"),y=t.floors.flatMap(M=>M.furniture.filter(A=>A.type==="robot_vacuum").map(A=>Me(r,n.furniture.get(A.id)?.entity??null,A.room_sensor))),b=t.floors.flatMap(M=>M.furniture.flatMap(A=>(A.pictures??[]).flatMap(et=>[et.entity,...et.image.startsWith("camera:")?[et.image.slice(7)]:[]]))),p=n.heat?t.floors.flatMap(M=>M.rooms.flatMap(A=>xt(r,A.area_id).filter(et=>et.startsWith("sensor.")))):[],_=[...Us(t.floors),...Gi(r,t.floors)],$=He(r,t).map(M=>M.entity),P=[...t.floors.flatMap(M=>M.furniture.flatMap(Ts)),t.settings.household?.notes??null].filter(M=>!!M&&M!=="none"),D=Ut(r,n.weatherEntityId??t.settings.weather_entity),H=t.floors.flatMap(M=>M.furniture.filter(A=>Pn(A.type)).flatMap(A=>Object.values(Wo(r,n.furniture.get(A.id)?.entity??null)))),B=t.floors.flatMap(M=>[...M.rooms.flatMap(A=>tn(r,M,A,"motion")),...M.furniture.map(A=>yr(r,A))]),R=t.floors.flatMap(M=>M.furniture.flatMap(A=>(A.rack?.slots??[]).flatMap(pe))),E=[...i,...R,...H,...o,...e,...a,...d,...u,...h,...y,...f,...v,...b,s.grid,s.solar,s.battery,s.battery_soc,s.consumption,s.tariff,...l,...c,...p,...n.warnings,..._,...$,...B,...P,D,"sun.sun"];return[...new Set(E.filter(M=>!!M))]}var En=r=>String(r).padStart(2,"0"),Vo=/^([01]\d|2[0-3]):[0-5]\d$/;function Bo(r){return`${En(r.getHours())}:${En(r.getMinutes())}`}function gd(r,t,n){return t<=n?r>=t&&r<=n:r>=t||r<=n}function qo(r,t,n){return t<=n?r>=t&&r<n:r>=t||r<n}function bd(r){return!!r.from==!!r.to&&!!r.start==!!r.end}function vd(r,t){if(!bd(r))return!1;let n=Bo(t),i=!!r.start&&!!r.end&&r.start>r.end&&n<r.end?new Date(t.getFullYear(),t.getMonth(),t.getDate()-1):t,o=`${En(i.getMonth()+1)}-${En(i.getDate())}`;return r.from&&r.to&&!gd(o,r.from,r.to)?!1:!r.start||!r.end||qo(n,r.start,r.end)}function yd(r,t,n){let e=r.show_when;if(!e)return!0;let i=e.entity;if(i&&i!=="none"&&(t[i]?.state??"unavailable")==="unavailable")return!1;let o=e.intervals??[];return!o.length||o.some(a=>vd(a,n))}function An(r,t,n){return r.floors.flatMap(e=>e.furniture.filter(i=>!yd(i,t,n)).map(i=>i.id))}function Ba(r,t,n){let e=new Set(An(r,t,n));return e.size?{...r,floors:r.floors.map(i=>({...i,furniture:i.furniture.filter(o=>!e.has(o.id))}))}:r}function qa(r){return r.floors.some(t=>t.furniture.some(n=>!!n.show_when?.intervals?.length))}var ja=/^#[0-9a-f]{3,8}$/i;function wd(r){let t=(r??"").trim();return!t||/["'()\\\s]/.test(t)?null:/^(https?:\/\/|\/)/i.test(t)||/^data:image\//i.test(t)?t:null}function Ka(r){if(!r||!r.kind)return null;let t=r.color&&ja.test(r.color)?r.color:"#0b1426",n=r.color2&&ja.test(r.color2)?r.color2:"#03060c";if(r.kind==="color")return t;if(r.kind==="gradient")return`linear-gradient(180deg, ${t}, ${n})`;let e=wd(r.image);if(!e)return null;let i=Math.min(.9,Math.max(0,r.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${i}), rgba(4, 8, 16, ${i})), url("${e}") center / cover no-repeat`}function xd(r){return{a:r.a,b:r.b,u:r.u,n:r.n,length:r.length,rightward:!0}}var jo={walls(r,t,n){let e=r.floors.find(o=>o.id===t),i=e?.rooms.find(o=>o.id===n);return!e||!i||i.points.length<3?[]:i.points.map((o,a)=>{let s=Ta(i,a),l=Zr(e,i.id,s.a,s.b),c=[...Ea(s,e,i).map(d=>[d.s0,d.s1]),...Pa(s,e).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:a,a:s.a,b:s.b,u:s.u,n:s.n,length:s.length,shared:l,thickness:l?r.settings.wall_interior:r.settings.wall_exterior,taken:c}})},onWall(r,t,n){return Co(xd(r),t,n)},freeSpot(r,t,n=.1){let e=o=>o>=n&&o+t<=r.length-n&&!r.taken.some(([a,s])=>o<s+.05&&o+t>a-.05),i=r.length/2-t/2;for(let o=0;o<=r.length;o+=.05){if(e(i-o))return Math.round((i-o)*100)/100;if(e(i+o))return Math.round((i+o)*100)/100}return null},nodeAt(r,t,n){let e=r.floors.find(s=>s.id===t),i=e?.outdoor.find(s=>s.id===n);if(!e||!i)return()=>null;let o=Tn(r,e,i),a=i.pool??{};return s=>{let{kind:l,id:c,port:d}=Qt(s),u=l==="joint"?(a.joints??[]).find(f=>f.id===c):void 0;if(u)return Oe(u,d);let h=l==="port"?(a.ports??[]).find(f=>f.id===c):void 0;return h?o(s)??{x:h.x,y:.02,z:h.z}:o(s)}},connect(r,t,n,e,i,o){let a=r.floors.find(l=>l.id===t),s=a?.outdoor.find(l=>l.id===n);return!a||!s?{pipes:[],joints:[]}:Oa({...e,floorId:t},jo.nodeAt(r,t,n),s.pool?.joints??[],i,o)}};var at=Math.PI/180,Rn=-.833;function kd(r,t,n){let e=(r/864e5+24405875e-1-2451545)/36525,i=((280.46646+e*(36000.76983+e*3032e-7))%360+360)%360,o=357.52911+e*(35999.05029-1537e-7*e),a=.016708634-e*(42037e-9+1267e-10*e),s=Math.sin(o*at)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*o*at)*(.019993-101e-6*e)+Math.sin(3*o*at)*289e-6,l=125.04-1934.136*e,c=i+s-.00569-.00478*Math.sin(l*at),u=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(l*at),h=Math.asin(Math.sin(u*at)*Math.sin(c*at)),f=Math.tan(u/2*at)**2,v=4*(f*Math.sin(2*i*at)-2*a*Math.sin(o*at)+4*a*f*Math.sin(o*at)*Math.cos(2*i*at)-.5*f*f*Math.sin(4*i*at)-1.25*a*a*Math.sin(2*o*at))/at,y=new Date(r),_=(((y.getUTCHours()*60+y.getUTCMinutes()+y.getUTCSeconds()/60+v+4*n)%1440+1440)%1440/4-180)*at,$=t*at,P=Math.sin($)*Math.sin(h)+Math.cos($)*Math.cos(h)*Math.cos(_),D=90-Math.acos(Math.min(1,Math.max(-1,P)))/at;return{azimuth:(Math.atan2(Math.sin(_),Math.cos(_)*Math.sin($)-Math.tan(h)*Math.cos($))/at+180+360)%360,elevation:D}}function Ua(r,t,n){let e=new Date(r);e.setHours(0,0,0,0);let i=e.getTime(),o=10*6e4,a=u=>({...kd(u,t,n),t:u}),s=[],l=null,c=null,d=a(i);for(let u=i+o;u<=i+24*36e5;u+=o){let h=a(u),f=h.elevation>Rn,v=d.elevation>Rn;if(f!==v){let y=d.t,b=h.t;for(let _=0;_<12;_++){let $=(y+b)/2;a($).elevation>Rn===v?y=$:b=$}let p=a(Math.round((y+b)/2));f?(l??=p,s.push(p)):(c=p,s.push(p))}f&&s.push(h),d=h}return!l&&s.length&&a(i).elevation>Rn&&s.unshift(a(i)),{points:s,rise:l,set:c}}function Ga(r,t,n){let e=r.cheap_rate;if(e&&e!=="none")return t[e]?.state==="on";let i=r.cheap_from,o=r.cheap_to;return!i||!o||!Vo.test(i)||!Vo.test(o)?null:qo(Bo(n),i,o)}var Ja=(r,t)=>t.startsWith("sensor.")&&r.states[t]?.attributes.device_class==="energy";function _d(r,t,n){if(n==="none")return null;if(n)return n;let e=t.replace(/^sensor\./,"").replace(/_?power$/,""),i=`sensor.${e}_energy`;if(Ja(r,i))return i;let o=r.entities?.[t]?.device_id;if(!o)return null;let a=Object.keys(r.states).filter(s=>Ja(r,s)&&r.entities?.[s]?.device_id===o);return a.length===1?a[0]:a.find(s=>s.startsWith(`sensor.${e}_`))??null}function Ya(r,t){let n=[];for(let e of t){let i=_d(r,e.powerEntity,e.energy);i&&n.push({key:e.powerEntity,id:e.id,floorId:e.floorId,x:e.x,z:e.z,energy:i,power:e.powerEntity})}return n}async function Xa(r,t,n=new Date){let e=new Map,i=[...new Set(t.map(a=>a.energy).filter(a=>!!a))];if(!i.length)return e;let o=new Date(n);o.setHours(0,0,0,0);try{let a=await r.callWS({type:"recorder/statistics_during_period",start_time:o.toISOString(),statistic_ids:i,period:"5minute",types:["change"],units:{energy:"kWh"}});for(let s of t){if(!s.energy)continue;let l=a?.[s.energy]?.reduce((c,d)=>c+(d.change??0),0);l!==void 0&&e.set(s.key,l)}return e}catch{return null}}function Za(r){let t={solar:[],export:[],forecast:[]};for(let n of r?.energy_sources??[])if(n.type==="solar"){n.stat_energy_from&&t.solar.push(n.stat_energy_from);for(let e of n.config_entry_solar_forecast??[])t.forecast.push(e)}else if(n.type==="grid"){for(let e of n.flow_to??[])e.stat_energy_to&&t.export.push(e.stat_energy_to);n.stat_energy_to&&t.export.push(n.stat_energy_to)}return{solar:[...new Set(t.solar)],export:[...new Set(t.export)],forecast:[...new Set(t.forecast)]}}function Qa(r,t,n){if(!r||!t.length)return null;let e=new Date(n);e.setHours(0,0,0,0);let i=e.getTime(),o=new Date(i);o.setDate(o.getDate()+1);let a=o.getTime(),s=new Date(a);s.setDate(s.getDate()+1);let l=s.getTime(),c=new Array(24).fill(0),d=!1,u=null;for(let y of t)for(let[b,p]of Object.entries(r[y]?.wh_hours??{})){let _=Date.parse(b);!Number.isFinite(_)||typeof p!="number"||!Number.isFinite(p)||(_>=i&&_<a?(c[new Date(_).getHours()]+=Math.max(0,p),d=!0):_>=a&&_<l&&(u=(u??0)+Math.max(0,p)))}if(!d&&u===null)return null;let h=n.getHours(),f=1-(n.getMinutes()*60+n.getSeconds())/3600,v=c[h]*f;for(let y=h+1;y<24;y++)v+=c[y];return{rest:d?v/1e3:null,tomorrow:u===null?null:u/1e3,hours:c}}function tl(r,t){let n=e=>42-(t>0?Math.min(e,t)/t*36:0);return r.map((e,i)=>`${i?"L":"M"}${((i+.5)/24*220).toFixed(1)} ${n(e).toFixed(1)}`).join(" ")}function el(r){let t=[];if(r.forecast&&(r.forecast.rest!==null&&t.push({key:"forecast_rest",kwh:r.forecast.rest}),r.forecast.tomorrow!==null&&t.push({key:"forecast_tomorrow",kwh:r.forecast.tomorrow})),r.produced!==null&&r.exported!==null&&r.produced>0){let n=Math.min(Math.max(0,r.exported),r.produced),e=r.produced-n;t.push({key:"self_use",self:e,exported:n,share:Math.round(e/r.produced*100)})}return t}function te(r,t,n,e){Ie(r,t,n,e,i=>k(r,"service_failed",{error:i}))}function ol(r,t){return String(t&&r.states[t]?.attributes.unit_of_measurement||"m\xB3")}function il(r,t){return m`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${Tt`<polyline points=${ha(r,120,22)} style=${`stroke:${t}`} />`}</svg>`}function Sd(r,t,n){return(n==="m\xB3"||n==="m3")&&t<10?`${K(r,t*1e3,0)} l`:`${K(r,t,t<10?2:0)} ${n}`}var Md=2e4,Id=3e5,rl=6*36e5,Td=12e4,Pd=600*1e3,sl={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Ed='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',Ad='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>',al=()=>import("./home-3d-walk-Z455F3FZ.js");function Ko(r,t,n){return r.rooms.find(e=>e.points.length>=3&&G([t,n],e.points))?.id??null}function Rd(r,t){let n=t.action==="more_info"?t.target:t.data?.entity_id;return typeof n=="string"&&wt(r.states[n])}function zd(r){try{return localStorage.getItem(r)==="1"}catch{return!1}}function Hd(r,t){try{localStorage.setItem(r,t?"1":"0")}catch{}}function ll(r,t){let n=a=>a&&a!=="none"?a:null,e=ae(r,{cover:n(t.cover),contact:n(t.contact),tilt:n(t.tilt)},"window"),i=n(t.window)?r.states[n(t.window)]:void 0,o=e.open;if(i&&!J(i)){let a=i.attributes.current_position;o=typeof a=="number"?Math.min(1,Math.max(0,a/100)):i.state==="open"||i.state==="opening"?1:0}return{open:o,tilt:e.tilt,cover:e.cover??0}}var Uo=class extends je{static properties={hass:{attribute:!1},building:{attribute:!1},canEdit:{attribute:!1},noSettings:{attribute:!1},home:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},_realSky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},plan2d:{attribute:!1},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_bigTile:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_cheap:{state:!0},_wires:{state:!0},_wireKwh:{state:!0},_wireOpen:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_holoBig:{state:!0},_solarMore:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_settingsOpen:{state:!0},_rackView:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},_voice:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_phoneStage:{state:!0},_alerts:{state:!0},_dismissing:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},rackCards:{attribute:!1},_rackRows:{state:!0},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};rawHass;hassWatch=new Ur({entityLists:!1});get hass(){let t=this.rawHass;return t&&this.hassWatch.recording?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;shownPlan=null;showTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;solarMoreLoading=!1;holoPress="";holoHoverOff=!1;holoBigTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;thumbsSaved=null;resizeObs=null;unsubAsk=null;voiceTimer;binInfoTimer;rackOpen=new Set;rackSparkKey="";rackSparkAt=0;alertSrc=null;alertTimer;motionTimer;redTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;rackViewMemo=null;actionOwners=new Map;taps=new rn;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];binSpots=new Map;binCues=[];printerCams=new Map;finished=new dn;appliances=new Map;directing=new so;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this._realSky=null,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._bigTile=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._holoBig=!1,this._solarMore=null,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._rackView=null,this._note=null;try{this.thumbsSaved=localStorage.getItem("home3d.thumbs_compact")}catch{this.thumbsSaved=null}this._thumbsCompact=Wn(this.thumbsSaved,!1),this._phoneStage=!1,this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.plan2d=!1,this.clean=!1,this.cleanButton=!1,this.noSettings=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this._voice=null,this._micProbe=Yr(),this._alerts=[],this._dismissing=null,this._household=[],this._hhFolded=zd("home3d.hhFolded"),this._binInfo=null,this._gangMenu=null,this.householdCard=!0,this.rackCards=!0,this._rackRows=null,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("home3d.flows")==="1",this._holoShow=localStorage.getItem("home3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let t=this.hass;this.unsubAsk||!t?.connection||!this.isConnected||(this.unsubAsk=ci(t,n=>{this.onAsk(n)}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let t=this.unsubAsk;this.unsubAsk=null,t?.then(n=>n()).catch(()=>{})}keepTouch=t=>{t.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.wireTimer),this.wireKey="",document.removeEventListener("visibilitychange",this.onVisible),this.taps.cancel(),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,clearTimeout(this.showTimer),this.showTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearTimeout(this.motionTimer),this.motionTimer=void 0,clearTimeout(this.redTimer),this.redTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearTimeout(this.holoBigTimer),this.holoBigTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&Ae().catch(()=>this._micProbe=!1);let t=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",t,{passive:!0}),this.addEventListener("wheel",t,{passive:!0}),this.renderRoot.addEventListener("wheel",n=>{let e=n;if(!e.target?.closest?.(".fp3d-holo"))return;let i=this.renderRoot.querySelector("canvas");i&&(e.preventDefault(),i.dispatchEvent(new WheelEvent("wheel",e)))},{passive:!1}),this.start()}observeStage(){let t=this.renderRoot.querySelector(".fp3d-stage");!t||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(n=>{let e=n[0]?.contentRect.width??1e3,i=e<700,o=si(e);o!==this._phoneStage&&(this._phoneStage=o,this._thumbsCompact=Wn(this.thumbsSaved,o)),i!==this._narrowStage&&(this._narrowStage=i,this.scheduleThumbs())}),this.resizeObs.observe(t))}async start(){if(this.starting||this.viewer)return;this.starting=!0;let t=this.plan2d;try{let n=t?await va():await xn();if(!this.isConnected||t!==this.plan2d)return;let e=this.renderRoot.querySelector(".fp3d-stage");e.addEventListener("pointerdown",i=>{this._central&&!i.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=n.createViewer(e,{quality:this.quality,explode:this.explode,onRoomTap:(i,o)=>this.fire("room-tap",{floorId:i,roomId:o}),onFloorTap:i=>this.fire("floor-tap",{floorId:i}),floorInfo:i=>i.rooms.length===1?k(this.hass,"floor_rooms_one"):k(this.hass,"floor_rooms",{n:i.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(i,o,a)=>this.onDeviceTap(i,o,a),onRackTap:(i,o,a)=>this.showRackView(i,o,a),onDeviceHold:(i,o,a)=>this.onDeviceHold(i,o,a),onDeviceDoubleTap:i=>!this.ro&&this.taps.doubleTap(i),onRoomDoubleTap:(i,o)=>this.onRoomDoubleTap(i,o),onDeviceSwipe:(i,o,a,s,l)=>this.onDeviceSwipe(i,o,a,s,l),onFurnitureSelect:i=>this.fire("furniture-select",{id:i}),onFurnitureMove:(i,o,a)=>this.fire("furniture-move",{id:i,x:o,z:a}),onDeviceSelect:i=>this.fire("device-select",{id:i}),onDeviceMove:(i,o,a)=>this.fire("device-move",{id:i,x:o,z:a}),onStats:i=>{this.showStats&&(this._stats=i)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((i,o,a,s,l,c)=>this.placeHolo(i,o,a,s,l,c)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...ie()],Vn()),this.hass&&$o(this.hass,ie()).then(()=>this.syncDevices(!0)),this.shownPacks=Ke(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.viewPlan(this.building))),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(n){this._error=String(n)}finally{this.starting=!1,this.isConnected&&!this.viewer&&t!==this.plan2d&&this.start()}}switchViewer(){this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this._through=null,this._menu=null,this.viewer?.dispose(),this.viewer=null,this.shownPacks=-1,this._thumbs=[],this.thumbsAt=0,this._error=null,this.start()}shouldUpdate(t){let n=t.get("hass"),e=this.rawHass;if(t.size!==1||!t.has("hass")||!n||!e||this.replay||this.hassWatch.matters(n,e))return!0;if(n.states!==e.states){if(this.watched.some(o=>n.states[o]!==e.states[o]))return!0;let i=this.building;if(i&&this.shownPlan?.from===i&&An(i,e.states,new Date).join("|")!==this.shownPlan.hidden)return!0}return Jr(this.renderRoot,Gr["components/view3d.ts"],[[n,e]]),this.live?.el&&(this.live.el.hass=e),!1}performUpdate(){try{super.performUpdate()}finally{this.hassWatch.end()}}willUpdate(t){this.hassWatch.begin(!t.has("hass")),t.has("building")&&(ki(this.building??null),_r(this.building)),t.has("hass")&&this.hass&&gs(bs(this.hass))}updated(t){(t.has("hass")||t.has("theme"))&&this.toggleAttribute("light",ir(this.effectiveTheme())),t.has("plan2d")&&t.get("plan2d")!==void 0&&this.switchViewer(),t.has("hass")&&this.live?.el&&(this.live.el.hass=this.rawHass),t.has("hass")&&this.watchAsk(),this._central&&(t.has("roomId")&&t.get("roomId")!==void 0||t.has("floorId")&&t.get("floorId")!==void 0)&&(this._central=!1);let n=this.viewer;if(!n)return;this._through&&(t.has("roomId")||t.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null);let e=!1,i=!1;if(n.batch(()=>{if(this.shownPacks!==Ke()&&(this.shownPacks=Ke(),n.setPacks([...ie()],Vn()),this.hass&&$o(this.hass,ie()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&n.setParked(_o(this.hass,this.building)),i=!0),t.has("building")&&this.building){let s=JSON.stringify(this.startViewOf());e=this.shownStartView!==void 0&&this.shownStartView!==s,this.shownStartView=s,n.setStartView(this.startViewOf()),n.setBuilding(this.viewPlan(this.building))}(t.has("building")||t.has("packs")||t.has("petsOn"))&&this.syncPets(),(t.has("building")||t.has("packs")||t.has("ghostOn"))&&this.syncGhost(),t.has("startView")&&t.get("startView")!==void 0&&(n.setStartView(this.startViewOf()),this.floorId===null&&n.resetView()),(t.has("building")||t.has("theme")||t.has("floorThumbs")||t.has("packs"))&&this.scheduleThumbs();let o=["building","markerMode","heatMode","flows","alerts","dimmed"].some(s=>t.has(s))||this.markerMode==="room"&&t.has("roomId"),a=this.replayTicked&&!!this.replay;this.replayTicked=!1,(o||i||t.has("hass")||a)&&this.syncDevices(o||i,a&&(this.trail||this.detecting))}),e&&this.floorId===null&&n.resetView(),(t.has("hass")||t.has("director"))&&this.direct(),t.has("autoOrbit")&&n.setAutoOrbit(this.autoOrbit?.06:0),n.setFitMargin(this._phoneStage?ai:li),(t.has("_thumbs")||t.has("_narrowStage"))&&n.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),t.has("floorId")&&n.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&n.selectRoom(this.roomId),t.has("wallMode")&&n.setWallMode(this.wallMode),t.has("keepView")&&n.setKeepView(this.keepView),t.has("angleLock")&&n.setAngleLock(this.angleLock),t.has("explode")&&n.setExplode(this.explode),t.has("keepRoof")&&n.setKeepRoof(this.keepRoof),t.has("hideRoof")&&n.setHideRoof(this.hideRoof),t.has("floorStack")&&n.setFloorStack(this.floorStack),t.has("hass")&&!t.has("theme")&&(this.theme==="theme"||this.theme==="auto")){let o=this.effectiveTheme();n.setTheme(o),o!==ro(this.theme,t.get("hass"))&&this.scheduleThumbs()}t.has("theme")&&(n.setTheme(this.effectiveTheme()),t.has("hass")||this.syncDevices(!0)),t.has("accent")&&n.setAccent(this.accent??null),t.has("surfaceGrab")&&n.setSurfaceGrab(this.surfaceGrab??null),t.has("furnishTypes")&&n.setFurnishTypes(this.furnishTypes??null),t.has("furnish")&&(n.setFurnishMode(this.furnish),this.syncDevices(!0)),t.has("selectedFurniture")&&n.selectFurniture(this.selectedFurniture),t.has("selectedSet")&&n.selectFurnitureSet(this.selectedSet??[]),t.has("selectedDevice")&&n.setSelectedDevice(this.selectedDevice),(t.has("trail")||t.has("replay"))&&this.watchTrail(),t.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(t.has("weather")||t.has("weatherEntityId"))&&this.syncDevices(!0),t.has("quality")&&t.get("quality")!==void 0&&(n.setQuality(this.quality),this._low=n.low,this.replay?.setQuality(this.quality,n.low)),t.has("showStats")&&n.setStats(this.showStats),t.has("building")&&(this.findIndex=null)}syncDevices(t,n=!1){if(this.hassWatch.recording)return this.hassWatch.pause(()=>this.syncDevices(t,n));let e=this.viewer,i=this.building;if(!e||!i||!this.hass)return;let o=this.hass,a=this.shownPlan?.plan,s=this.viewPlan(i);s!==a&&(e.setBuilding(s),t=!0),qa(i)&&!this.replay&&(this.showTimer??=setTimeout(()=>{this.showTimer=void 0,this.syncDevices(!1)},60050-Date.now()%6e4)),(t||!this.openingLinks||this.linkedRegistry!==o.entities)&&(this.openingLinks=Un(o,s.floors),this.furnitureLinks=$e(o,s.floors),this.linkedRegistry=o.entities,this.findIndex=null,this.alertSrc=this.alerts?yo(o,s,this.weatherEntityId):null,this.watchHousehold(o,s),this.watched=No(o,s,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?wo(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Jt()&&(this.watched=[...new Set([...this.watched,...da(this.sceneHost(o,s))])]),t=!0);let l=t||n,c=!l;if(!l){for(let g of this.watched)if(this.shownStates.get(g)!==o.states[g]&&(l=!0,!g.startsWith("sensor."))){c=!1;break}}let d=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!l)return;if(c&&!this.replay){let g=Da(performance.now()-this.lastSync,this._low);if(g>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},g);return}}this.lastSync=performance.now();let u=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(g=>[g,o.states[g]])),this.scene=Jt()?sa(this.sceneHost(o,s)):[];let h=Pe(s,g=>this.furnitureLinks?.get(g.id)?.power??null),f=Fr(o,s,h),v=this.now(),y=xr(o,s,v);if(clearTimeout(this.redTimer),this.redTimer=void 0,!this.replay){let g=Qn(s).camera_seconds*1e3,x=Math.min(...y.filter(T=>T.motion).map(T=>kr(o,T.id,g,v)??1/0));Number.isFinite(x)&&(this.redTimer=setTimeout(()=>this.syncDevices(!0),Math.max(50,x-v+20)))}let b=this.furnitureMarkers(o,s,new Set(y.map(g=>g.id)),new Set(f.map(g=>g.powerEntity)));f.push(...b.consumers),this.lastConsumers=f;let p=Or(o,s,f,h),_=new Map(f.filter(g=>g.id!==g.powerEntity).map(g=>[g.id,g.power]));this.confirmSet=ji(o,s.floors);let $=this.trail?this.trailNow(o,s):[],P=this.dimmed?[]:this.detectionPins(o,y);this.detecting=P.length>0;let D=new Set(s.floors.flatMap(g=>g.furniture.filter(x=>x.type==="parking"&&x.car&&ce(o,x)).map(x=>x.id)));e.setDevices([...[...y,...b.markers,...this.lockMarkers(o,s)].map(g=>{let x=g.show==="no_power"||"energyDevice"in g&&g.energyDevice||"standby"in g&&g.standby?null:_.get(g.id)??null,T={...g,power:x,powerText:x===null?void 0:U(o,x),effect:this.dimmed?!1:g.effect},W=g.ownName&&(g.showName||this.markerNames)?g.ownName:"",S=this.mediaCardUp(o,g.id)||!!g.furnitureId&&D.has(g.furnitureId);return{...T,pin:(this.plan2d?ya(T,this.markerMode,this.showPin(T)):this.showPin(T))&&!S,full:g.show==="always"||g.full===!0,caption:W}}),...((this.flows??this._flows)&&!this.dimmed&&p.grid!==null?[this.gridPin(o,s,p.grid)]:[]).filter(g=>!!g),...P,...$.map((g,x)=>({id:`trail:${x}`,floorId:g.floorId,roomId:null,x:g.x,z:g.z,y:.3+.4*$.slice(0,x).filter(T=>T.entity===g.entity).length,icon:Zs,name:O(o,g.entity),text:bn(o,g.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(s)]);for(let g of this.scene)g.kind==="marker"&&g.card&&g.furnitureId&&!b.targets.has(g.furnitureId)&&b.targets.set(g.furnitureId,`module:${g.id}`);e.setTrail($,this.replay?this.robotPaths(o,s):[]),this.actionOwners=ls(s.floors,g=>b.targets.get(g),g=>{let x=this.furnitureLinks?.get(g.id)?.entity;return x&&x!=="none"?x:null});for(let g of s.floors)for(let x of g.furniture)!b.targets.has(x.id)&&this.actionOwners.has(`item:${x.id}`)&&b.targets.set(x.id,`item:${x.id}`);e.setPickTargets(b.targets,this.openingTargets()),e.setScreens(b.screens),e.setFridgeDoors(Gn(o,s.floors)),e.setRackLeds(ka(o,s.floors)),e.setAwnings(Ki(o,s.floors)),e.setProjections(this.projectedCameras(o,s)),e.setRobots(this.robotInfos(o,s));let H=new Map;for(let g of s.settings.roof?.windows??[])H.set(g.id,ll(o,g));e.setRoofWindows(H),e.setParked(_o(o,s)),e.setBinSpots(this.binSpots),e.setBinCues(this.binCues);let B=new Map(s.floors.flatMap(g=>g.openings.map(x=>[x.id,x.type]))),R=new Map([...this.openingLinks].map(([g,x])=>[g,ae(o,x,B.get(g))]));e.setOpeningStates(R,d);let E=this.alertSrc?Cs(o,s,this.alertSrc,this.openingLinks):[],M=this.alerts&&Jt(),A=M?la(this.sceneHost(o,s)).map(g=>({kind:g.kind,entity:g.entity,roomId:g.roomId,floorId:g.floorId,text:g.text,color:g.color,quiet:!g.roomId})):[],et=[...E,...A];this.alertSrc&&this.tidySnoozes(s,et,M),this.setAlerts(Ds(et,s.settings)),clearTimeout(this.fridgeTimer);let st=this.replay?null:zs(s.floors.flatMap(g=>g.furniture),o);st!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),st+500));let Lt=[...y,...b.markers].map(g=>`${g.id}:${g.glow?`${g.glow.level.toFixed(1)}/${g.glow.color.map(x=>x.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...R].map(([g,x])=>`${g}:${x.open}:${x.cover===null?"-":x.cover.toFixed(1)}`).join(";");if(Lt!==this.thumbSig){let g=this.thumbSig==="";this.thumbSig=Lt,g||this.scheduleThumbs(1500)}let yt=s.floors.flatMap(g=>g.furniture.filter(x=>tt(x.type)==="home_battery").map(x=>({floorId:g.id,x:x.x,z:x.z})))[0]??(s.energy.battery?s.floors.flatMap(g=>g.placements.filter(x=>x.entity_id===s.energy.battery).map(x=>({floorId:g.id,x:x.x,z:x.z})))[0]:null),At=Br(o,s,p.solar),z=s.settings.roof.hologram??St,ft=[...s.settings.roof.solar??[]].sort((g,x)=>x.rows*x.cols-g.rows*g.cols),C=s.settings.roof.strings??[],me=g=>(g.string?C.find(x=>x.id===g.string)?.inverter:null)??null,lt=z.plant_floor?"all":"house",ge=(g,x,T,W)=>{let S=eo(s,g);if(!S)return null;let[F,j]=no(S,g),q=g.u+F/2+x,ot=g.v+j/2+T,mt=[S.o[0]+S.eu[0]*q+S.es[0]*ot,S.o[1]+S.eu[1]*q+S.es[1]*ot,S.o[2]+S.eu[2]*q+S.es[2]*ot],rt=S.wall?.floorId??(S.unbounded?s.floors.find(bt=>bt.elevation===Math.min(...s.floors.map(oe=>oe.elevation)))?.id??s.floors[0].id:[...s.floors].sort((bt,oe)=>oe.elevation-bt.elevation)[0].id);return{p:[mt[0]+S.n[0]*.05,mt[1]+S.n[1]*.05,mt[2]+S.n[2]*.05],n:[S.n[0],S.n[1],S.n[2]],floorId:rt,size:W,roof:!0,views:lt}},dt=[],ct=[],ee=p.grid!==null||p.battery!==null||p.solar!==null,Rt=z.place==="free"&&Number.isFinite(z.x)&&Number.isFinite(z.z),ut=p.solar!==null&&!Rt?ft.find(g=>g.id===z.field)??ft[0]:void 0,Wt=ut?me(ut):null,De=!!ut&&!!Wt&&!ft.some(g=>g.id!==ut.id&&me(g)===Wt)&&z.right===0&&z.up===0,zt=(()=>{if(!De||!ut)return 0;let g=eo(s,ut);return g?no(g,ut)[0]/2+1.2:0})(),Le=ut?ge(ut,z.right+zt,z.up,z.size):null,zn=this.devicePowers(o,s),be=p.solar!==null?s.energy.solar?[s.energy.solar]:Pe(s,g=>this.furnitureLinks?.get(g.id)?.power??null).solar:[];if(Le)dt.push(Le),ct.push({kind:"main",name:k(o,"holo_title"),w:null,dayIds:be,battery:null});else if(ee&&Rt){let g=0,x=0,T=0,W=1/0,S=s.floors[0];for(let ot of s.floors){ot.rooms.length&&(W=Math.min(W,ot.elevation)),ot.rooms.length&&(!S.rooms.length||ot.elevation+ot.height>S.elevation+S.height)&&(S=ot);for(let mt of ot.rooms)for(let[rt,bt]of mt.points)g+=rt,x+=bt,T++}T&&(g/=T,x/=T);let F=z.x-g,j=z.z-x,q=Math.hypot(F,j);dt.push({p:[z.x,(Number.isFinite(W)?W:0)+(z.height??3),z.z],n:q>.01?[F/q,0,j/q]:[1,0,0],floorId:S.id,size:z.size,roof:!0,views:lt}),ct.push({kind:"main",name:k(o,"holo_title"),w:null,dayIds:be,battery:null})}else if(ee&&s.floors.some(g=>g.rooms.length)){let g=-1/0,x=1/0,T=-1/0,W=0,S=s.floors[0];for(let F of s.floors){for(let j of F.rooms)for(let[q,ot]of j.points)g=Math.max(g,q),x=Math.min(x,ot),T=Math.max(T,ot);F.rooms.length&&F.elevation+F.height>W&&(W=F.elevation+F.height,S=F)}dt.push({p:[g+.6,W+.4,(x+T)/2],n:[1,0,0],floorId:S.id,size:z.size,roof:!0,views:lt}),ct.push({kind:"main",name:k(o,"holo_title"),w:null,dayIds:be,battery:null})}if(p.solar!==null){let g=new Set;for(let x of s.floors)for(let T of x.furniture.filter(W=>tt(W.type)==="inverter")){if(T.plant_card===!1||g.has(T.id))continue;g.add(T.id);let W=ft.filter(mt=>me(mt)===T.id),S=(ut&&T.id===Wt?W.find(mt=>mt.id!==ut.id):null)??W[0],F=this.furnitureLinks?.get(T.id)?.power??null,j=S?ge(S,T.plant_right??0,T.plant_up??0,z.size*.85):null;if(!j||!F)continue;let q=x.furniture.filter(mt=>tt(mt.type)==="home_battery").sort((mt,rt)=>Math.hypot(mt.x-T.x,mt.z-T.z)-Math.hypot(rt.x-T.x,rt.z-T.z))[0],ot=q?.soc&&q.soc!=="none"?Number(o.states[q.soc]?.state):NaN;dt.push(j),ct.push({kind:"plant",name:T.name||Y(o,T.type),w:Math.max(0,vt(o.states[F])??0),dayIds:[F],battery:q?{soc:Number.isFinite(ot)?ot:null,w:zn.get(q.id)??null}:null})}}let Ht=z.device_house===!1?"floor":"all";for(let g of s.floors){for(let x of g.furniture){if(!x.holo)continue;let T=this.furnitureLinks?.get(x.id)?.power??null,W=f.find(F=>F.id===x.id);if(!T&&!W)continue;let S=g.elevation+X(g,x)+x.h;dt.push({p:[x.x,S+.1,x.z],n:[0,1,0],floorId:g.id,size:z.size*.7,roof:!1,views:Ht,room:Ko(g,x.x,x.z)}),ct.push({kind:"device",name:x.name||Y(o,x.type),w:W?.power??(T?vt(o.states[T]):null),dayIds:T?[T]:[],battery:null})}for(let x of g.placements){if(!x.holo)continue;let T=on(o,x.entity_id);if(!T)continue;let W=g.elevation+(x.y??.4)+.2;dt.push({p:[x.x,W,x.z],n:[0,1,0],floorId:g.id,size:z.size*.7,roof:!1,views:Ht,room:Ko(g,x.x,x.z)}),ct.push({kind:"device",name:x.name||O(o,x.entity_id),w:vt(o.states[T]),dayIds:[T],battery:null})}}let I=[];{let g=new Set,x=(s.settings.roof.hologram??St).size,T=(S,F,j,q,ot,mt)=>{let rt=o.states[F];if(!rt||L(F)!=="media")return;if(g.has(F)){let Vt=I.find(Ln=>Ln.id===F);Vt&&I.push({...Vt,id:`${F}#${I.filter(Ln=>Ln.id.startsWith(`${F}#`)).length+2}`,floorId:S.id,x:j,z:q,members:[F]});return}g.add(F);let bt=this.ro?void 0:this.mediaGrace.get(F),oe=[rt.attributes.media_title,rt.attributes.app_name,rt.attributes.source].find(Vt=>typeof Vt=="string"&&!!Vt.trim())??"";if(!(!J(rt)&&(rt.state==="playing"||rt.state==="paused"&&!!oe&&this.pausedRecently(rt)||rt.state==="on"&&!!rt.attributes.source))){bt&&bt.until>Date.now()?(I.push({...bt.source,playing:!1,level:0}),dt.push(bt.anchor),ct.push({...bt.card,media:{...bt.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,bt.until-Date.now()+100))):J(rt)||(this.mediaGrace.delete(F),I.push({id:F,floorId:S.id,x:j,z:q,level:0,playing:!1,members:[]}));return}let Dn=rt.state==="playing",_t=rt.attributes,ti=typeof _t.volume_level=="number"?Math.min(1,Math.max(0,_t.volume_level)):.5,hl=Array.isArray(_t.group_members)?_t.group_members.filter(Vt=>Vt!==F):[];I.push({id:F,floorId:S.id,x:j,z:q,level:Dn?.3+.7*ti:0,playing:Dn,members:hl});let fl=oe||k(o,"holo_media_playing"),ei={p:[j,S.elevation+ot+.12,q],n:[0,1,0],floorId:S.id,size:x*.7,roof:!1,views:"all"},ni={kind:"media",name:mt,w:null,dayIds:[],battery:null,media:{id:F,title:fl,artist:typeof _t.media_artist=="string"?_t.media_artist:typeof _t.media_album_name=="string"?_t.media_album_name:"",picture:typeof _t.entity_picture=="string"?_t.entity_picture:null,volume:Math.round(ti*100),playing:Dn}};dt.push(ei),ct.push(ni),this.ro||this.mediaGrace.set(F,{until:Date.now()+45e3,card:ni,source:I[I.length-1],anchor:ei})},W=(S,F)=>{for(let j of S.furniture){if((j.entity!=null&&j.entity!=="none")!==F)continue;let q=this.furnitureLinks?.get(j.id)?.entity;q&&T(S,q,j.x,j.z,X(S,j)+j.h,j.name||Y(o,j.type))}};for(let S of s.floors)W(S,!0);for(let S of s.floors)for(let F of S.placements)T(S,F.entity_id,F.x,F.z,F.y??1.1,F.name||O(o,F.entity_id));for(let S of s.floors)W(S,!1)}{let g=(s.settings.roof.hologram??St).size;for(let x of s.floors)for(let T of x.furniture){if(T.type!=="parking"||!T.car)continue;let W=ce(o,T);if(!W)continue;let S=Se(o,T);if(S.soc===null&&S.range===null&&S.locked===null&&S.climateOn===null)continue;let F=Gs(T,W),j=X(x,T)+(F?.h??1.6);dt.push({p:[T.x,x.elevation+j+.25,T.z],n:[0,1,0],floorId:x.id,size:g*.7,roof:!1,views:"all"});let q=S.entities;ct.push({kind:"car",name:T.name||Y(o,W),w:null,dayIds:[],battery:null,car:{spot:T.id,soc:S.soc,range:S.range,rangeUnit:S.rangeUnit,chargingW:S.chargingW,charging:S.charging,locked:S.locked,climateOn:S.climateOn,lock:q.lock,climate:q.climate,charge:q.charging&&/^(switch|input_boolean)\./.test(q.charging)?q.charging:null}})}}for(let{anchor:g,card:x}of this.rackHolos(o,s))dt.push(g),ct.push(x);let N=this.scene.filter(g=>g.kind==="water").map(g=>({...g,level:this.dimmed?g.level*.4:g.level}));if(e.setPools(N),Jt()){let g=(s.settings.roof.hologram??St).size;for(let x of aa(this.sceneHost(o,s))){let T=s.floors.find(S=>S.id===x.anchor.floorId);if(!T)continue;let W=null;if(x.anchor.areaId){let S=T.outdoor.find(ot=>ot.id===x.anchor.areaId);if(!S||S.points.length<3)continue;let[F,j]=Pt(S.points),q=S.type==="pool"?ke(T,S):we(T,F,j);W=[F,T.elevation+Math.max(q,0)+(S.above?.6:1.1),j]}else if(x.anchor.furnitureId){let S=T.furniture.find(F=>F.id===x.anchor.furnitureId);if(!S)continue;W=[S.x,T.elevation+X(T,S)+S.h+.25,S.z]}W&&(dt.push({p:W,n:[0,1,0],floorId:T.id,size:g*.7,roof:!1,views:"all"}),ct.push({kind:"module",name:x.title,w:null,dayIds:[],battery:null,module:x}))}for(let x of this.scene){if(x.kind!=="tag")continue;let T=s.floors.find(W=>W.id===x.floorId);T&&(dt.push({p:[x.at[0],T.elevation+x.at[1],x.at[2]],n:[0,1,0],floorId:T.id,size:g*.75,roof:!1,views:x.views??"all"}),ct.push({kind:"bin",name:x.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:x.color??"#37e0ff",when:x.text,name:x.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}{let g=(s.settings.roof.hologram??St).size;for(let x of $s(this.binHolos)){let T=s.floors.find(S=>S.id===x.floorId);if(!T)continue;dt.push({p:[x.x,T.elevation+x.y+.04,x.z],n:[0,1,0],floorId:x.floorId,size:g*.75,roof:!1,views:"all"});let W=x.lines.map(S=>({color:S.color,when:S.when,name:S.name,soon:!!S.soon&&!S.out,out:!!S.out}));ct.push({kind:"bin",name:x.lines.map(S=>S.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:W,soon:W.some(S=>S.soon),icon:x.lines.length===1?x.lines[0].icon??null:null}})}}e.setSound(I);let Q=this._walk?this.walkRoomPts:null,It=dt.map(g=>!this._walk||!!Q&&G([g.p[0],g.p[2]],Q)),Ct=ct.filter((g,x)=>It[x]),We=!!(this.flows??this._flows)&&!this.dimmed,Nt=We&&!this._walk?Ya(o,f).filter(g=>s.floors.some(x=>x.id===g.floorId)):[];JSON.stringify(Nt)!==JSON.stringify(this._wires)&&(this._wires=Nt),this.holoCount=Ct.length;let Hn=Nt.map(g=>({p:[g.x,s.floors.find(x=>x.id===g.floorId).elevation+.03,g.z],n:[0,1,0],floorId:g.floorId,size:1,roof:!1,views:"all",plan:!0}));e.setAnchors([...dt.filter((g,x)=>It[x]),...Hn]),JSON.stringify(Ct)!==JSON.stringify(this._holos)&&(this._holos=Ct),this.watchRackSpark(),e.setSolarLevels(At&&!this.dimmed?Vr(s,At):new Map);let Ne=g=>qr(g,p),ve=We?Dr({building:s,consumers:f,summary:p,battery:yt??null,fieldPower:At,devicePower:this.devicePowers(o,s)}).map(g=>({floorId:g.floorId,a:g.a,b:g.b,dist:g.dist,power:g.power,color:jr(Ne(g.kind)),dots:Kr(Ne(g.kind)),thick:La(g.power)})):[],Go=this.poolPipes(s),cl=this.scene.filter(g=>g.kind==="line");e.setFlows(this.dimmed?ve:[...ve,...Go.flows,...fa(cl)]),e.setPipes(Go.tubes),e.setPatches(this.scene.filter(g=>g.kind==="patch").map(g=>({floorId:g.floorId,points:g.points,y:g.y,color:g.color,opacity:this.dimmed?g.opacity*.4:g.opacity,...g.glow?{glow:!0}:{}})));let Cn=[],Fn=ar("locate")&&dr(s)?[...Cn,...ur(o,s,new Set(Cn.map(g=>g.id)))]:Cn;e.setPersonLook(lr(s)==="pin"?"pin":"figure"),e.setPersons(Fn),this.lastPersons=Fn.map(g=>({floorId:g.floorId,roomId:g.roomId}));let ul=pr(o,s,this.openingLinks,Fn);e.setFloorInfo(new Map([...ul].map(([g,x])=>[g,hr(o,x)])));let Ve=o.states["sun.sun"]?.attributes,ye=typeof Ve?.elevation=="number"?Ve.elevation:null;e.setSun(ye!==null&&typeof Ve?.azimuth=="number"?{elevation:ye,azimuth:Ve.azimuth}:null);let Be=g=>k(o,g).charAt(0).toUpperCase();e.setSunPath(this.sunPathToday(o),[Be("compass_n"),Be("compass_e"),Be("compass_s"),Be("compass_w")]),(this.theme==="auto"||this.theme==="theme")&&e.setTheme(this.effectiveTheme());let Jo=this.weather&&!this.dimmed?cs(o,Ut(o,this.weatherEntityId??s.settings.weather_entity),s.settings.rain_entity):null,ne=Jo?us(Jo,s.settings.weather_effects):null;this.cloud=ne?.cloud??0,this._sky=(ye===null?0:Math.min(1,Math.max(0,(ye+4)/16)))*(1-.45*this.cloud);let Yo=this.effectiveTheme()==="realistic"?oa(ye,ne):null;JSON.stringify(Yo)!==JSON.stringify(this._realSky)&&(this._realSky=Yo);let pl=ne?ne.sky:(s.settings.weather_effects??["sky"]).includes("sky");e.setWeather(this.weather&&!this.dimmed?{...ne??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:pl}:null),this.watchLightning(!!ne?.lightning),this.applyTint(),this.applyMotion();let On=Ga(s.energy,o.states,new Date(this.now()));On!==this._cheap&&(this._cheap=On);let Xo=p.grid!==null||p.solar!==null||p.battery!==null||p.tariff!==null||On!==null?p:null;JSON.stringify(Xo)!==JSON.stringify(this._energy)&&(this._energy=Xo);let Zo=f.some(g=>g.wallbox)?f.filter(g=>g.wallbox).reduce((g,x)=>g+x.power,0):null,Qo=s.floors.flatMap(g=>g.furniture.filter(x=>tt(x.type)==="inverter")).map(g=>{let x=this.furnitureLinks?.get(g.id)?.power,T=x?vt(o.states[x]):null;return T===null?null:{name:g.name||Y(o,g.type),w:Math.max(0,T)}}).filter(g=>!!g);JSON.stringify(Qo)!==JSON.stringify(this._plants)&&(this._plants=Qo),Zo!==this._wallboxW&&(this._wallboxW=Zo),this.watchSolarDay([...new Set(ct.flatMap(g=>g.dayIds))]),this.watchMeters(s.energy.gas??null,s.energy.water??null),this.watchWireKwh(Nt),u&&(this.syncMs=this.syncMs*.8+(performance.now()-u)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let t=this.replay;!t||!this.isConnected||(this.seenT=t.t,this.seenFocus=t.focusSeq,this.unlistenReplay=t.listen(()=>{this.replay===t&&(t.focusSeq!==this.seenFocus&&(this.seenFocus=t.focusSeq,t.focus&&this.showEntity(t.focus)),!(t.t===this.seenT&&t.seek===this.seenSeek)&&(t.pulses.length&&this.viewer?.flashDevices(t.pulses),this.seenT=t.t,!(t.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(t){let n=this.hass,e=this.building;if(!n||!e)return;let i=(this.findIndex??=yn(n,e)).find(a=>a.entity===t);if(i){this.goTo(i);return}let o=n.entities?.[t]?.area_id??n.devices?.[n.entities?.[t]?.device_id??""]?.area_id??null;for(let a of e.floors){let s=a.openings.find(u=>{let h=this.openingLinks?.get(u.id);return!!h&&[h.contact,h.tilt,h.contact2,h.tilt2,h.cover].includes(t)}),l=a.rooms.find(u=>u.points.length>=3&&(s?u.id===s.room_id:!!o&&u.area_id===o));if(!l)continue;let[c,d]=Pt(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:a.id,roomId:l.id,entity:t,icon:null,x:c,z:d,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let t=this.building,n=this.hass;if(!t||!n)return{entities:[],openings:[],furniture:[],low:this._low};let e=!this.openingLinks||this.linkedRegistry!==n.entities,i=e?Un(n,t.floors):this.openingLinks,o=e?$e(n,t.floors):this.furnitureLinks,a=wo(yo(n,t,this.weatherEntityId)),s=No(n,t,{openings:i,furniture:o,heat:!0,warnings:a,weatherEntityId:this.weatherEntityId}),l=t.floors.flatMap(c=>c.furniture.filter(d=>d.type==="parking").flatMap(d=>[typeof d.entity=="string"?d.entity:null,d.car?Ui(n,d).tracker:null]).filter(d=>!!d&&d.startsWith("device_tracker.")));return{entities:s,openings:[...i],furniture:[...o],low:this._low,cars:l,energy:!0,auto:!0}}showInfo(t,n,e){this._menu=null,this._info={entity:t,x:n,y:e},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let t=this._info;if(!t||!this.hass)return w;let n=this.hass,e=n.states[t.entity],i=nt(n,e),o=L(t.entity)==="light"&&e?.state==="on"&&i.endsWith("%")?`${k(n,"state_on")} \xB7 ${i}`:i,a=e?.last_changed?k(n,"tt_since",{time:bn(n,Date.parse(e.last_changed))}):"";return m`<div class="fp3d-swipe fp3d-info" style="left:${t.x}px;top:${t.y}px">
      <span>${O(n,t.entity)}</span>
      <b>${a?`${o} \xB7 ${a}`:o}</b>
    </div>`}devicePowers(t,n){let e=new Map;for(let i of n.floors)for(let o of i.furniture){let a=tt(o.type);if(a!=="inverter"&&a!=="home_battery"&&a!=="solar")continue;let s=this.furnitureLinks?.get(o.id)?.power,l=tt(o.type)==="home_battery"&&o.charge&&o.charge!=="none"?vt(t.states[o.charge]):null,c=s?vt(t.states[s],tt(o.type)==="home_battery"&&n.energy.battery_invert&&l===null):null;c!==null&&l!==null?c=Math.max(0,c)-Math.max(0,l):c===null&&l!==null&&(c=-Math.max(0,l)),c!==null&&e.set(o.id,c)}return e}detectionPins(t,n){let e=[],i=new Set(this.building?.floors.flatMap(o=>o.placements.filter(a=>a.detect_pins===!1).map(a=>a.entity_id))??[]);for(let o of n){if(!o.model?.startsWith("camera")||i.has(o.id))continue;let a=this.now(),s=Ft(t,o.id).filter(f=>{let v=t.states[f];return v?v.state==="on"?!0:v.state==="off"&&!!v.last_changed&&a-Date.parse(v.last_changed)<Td:!1}),l=new Map;for(let f of s){let v=to(t,f);l.has(v)||l.set(v,f)}l.size>1&&l.delete("motion");let c=(o.rotation??0)*Math.PI/180,d=[-Math.sin(c),Math.cos(c)],u=o.model==="camera_ceiling",h=0;for(let[f,v]of l){let y=t.states[v],b=y?.last_changed?bn(t,Date.parse(y.last_changed)):"";e.push({id:`detect:${v}`,floorId:o.floorId,roomId:o.roomId,x:o.x+(u?0:d[0]*1.1),z:o.z+(u?0:d[1]*1.1),y:1.4+.4*h++,icon:sl[f]??sl.motion,name:O(t,v),text:`${k(t,`detect_${f}`)}${b?` \xB7 ${b}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return e}gridPin(t,n,e){let i=Lr(n);if(!i)return null;let o=Math.abs(e)<5,a=n.settings.outage_entity;return a&&an(t.states[a])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Ad,name:k(t,"holo_grid"),text:k(t,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Ed,name:k(t,"holo_grid"),text:o?U(t,0):`${k(t,e<0?"energy_grid_export":"energy_grid_import")} ${U(t,Math.abs(e))}`,active:!o,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(t,n){let e=[t,n].filter(a=>!!a),i=this.replay?"":e.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let o=async()=>{if(!this.hass||document.hidden)return;let a=await oo(this.hass,e);this.meterKey===i&&a&&(this._meters={gas:t?a.get(t)??null:null,water:n?a.get(n)??null:null})};o(),this.meterTimer=setInterval(()=>{o()},3e5)}holoCount=0;wireKey="";wireTimer;watchWireKwh(t){let n=this.replay?"":t.map(i=>`${i.key}=${i.energy??""}`).join(",");if(n===this.wireKey)return;if(this.wireKey=n,clearInterval(this.wireTimer),this.wireTimer=void 0,!n){this._wireKwh=null;return}let e=async(i=!1)=>{if(!this.hass||document.hidden&&!i)return;let o=await Xa(this.hass,t);this.wireKey===n&&o&&(this._wireKwh=o)};e(!0),this.wireTimer=setInterval(()=>{e()},3e5)}placeWire(t,n,e,i){let o=this.renderRoot.querySelector(`.fp3d-wire[data-wire="${t}"]`);o&&(o.hidden!==!i&&(o.hidden=!i),i&&(o.style.transform=`translate(${n.toFixed(1)}px, ${e.toFixed(1)}px) translate(-50%, -50%)`))}renderWires(){if(!this._wires?.length)return w;let t=this.hass;return this._wires.map((n,e)=>{let i=this._wireKwh?.get(n.key),o=i===void 0?"\u2026":`${K(t,i,i<10?2:1)} kWh`,a=O(t,n.id),s=this._wireOpen===n.key;return m`<button
        class="fp3d-wire ${s?"fp3d-wire-open":""}"
        data-wire=${e}
        hidden
        aria-expanded=${s}
        aria-label=${`${a}: ${k(t,"wire_today")} ${o}`}
        @click=${l=>{l.stopPropagation(),this._wireOpen=s?null:n.key}}
      >
        <span class="fp3d-wire-tip" aria-hidden="true">${a}<span>${k(t,"wire_today")} <b>${o}</b></span></span>
      </button>`})}poolPipes(t){let n=[],e=[],i=new Map(this.scene.filter(o=>o.kind==="pipeflow").map(o=>[o.areaId,o.flows]));for(let{floor:o,area:a}of Ha(t.floors)){let s=a.pool;if(!s.pipes?.length&&!s.joints?.length)continue;let l=s.ports??[],c=new Map(Object.entries(i.get(a.id)??{})),d=Tn(t,o,a),u=(h,f)=>Do(h,f,a,o);n.push(...Ca(s.pipes??[],c,d,u));for(let h of l){if(h.kind!=="inlet")continue;let f=d(`port:${h.id}`),v=f&&Lo(a,[f.x,f.z]);if(!f||!v)continue;let y=(s.pipes??[]).find(p=>p.to===`port:${h.id}`),b=y?c.get(y.id):void 0;e.push({floorId:o.id,points:[[f.x+v[0]*.03,f.y,f.z+v[1]*.03],[f.x-v[0]*.09,f.y,f.z-v[1]*.09]],radius:.035,water:b?.active?b.color:null,fittings:[]})}for(let h of s.joints??[]){if(h.kind!=="wall"&&h.kind!=="floor")continue;let f=d(`joint:${h.id}:inside`),v=d(`joint:${h.id}:outside`),y=h.kind==="floor"?.03:f.y;e.push({floorId:o.id,points:[[f.x,y,f.z],[v.x,v.y,v.z]],radius:.05,water:null,fittings:[]})}for(let h of s.pipes??[]){let f=Do(Fe(h,d),h,a,o);if(f.length<2)continue;let v=c.get(h.id),y=[],b=Mn(f);for(let[p,_]of[[h.from,.04],[h.to,b-.04]]){let $=p.startsWith("dev:")||p.startsWith("joint:")?In(f,_):null;$&&y.push({kind:"sleeve",p:$.p,dir:$.dir})}for(let p of h.fittings??[]){let _=In(f,p.at);_&&y.push({kind:p.kind,p:_.p,dir:_.dir,open:p.open!==!1})}e.push({floorId:h.floor_id,points:f,radius:.025,water:v?.active?v.color??Oo:null,fittings:y})}}return{flows:n,tubes:e}}watchSolarDay(t){let n=this.replay;if(n){clearInterval(this.holoTimer),this.holoTimer=void 0;let o=`tt|${t.join(",")}|${Math.floor(n.t/3e5)}`;if(o===this.holoIds)return;this.holoIds=o,this._rows=t.length?n.stats(t,new Date(n.t).setHours(0,0,0,0),n.t+1):null;return}let e=t.join(",");if(e===this.holoIds)return;if(this.holoIds=e,clearInterval(this.holoTimer),this.holoTimer=void 0,!t.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let o=await Nr(this.hass,t);this.holoIds===e&&(this._rows=o)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoBoxes=[];holoSizes=new Map;placeHolo(t,n,e,i,o,a){if(t>=this.holoCount)return this.placeWire(t-this.holoCount,n,e,i);(!this.holoBoxes.length||t<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let s=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${t}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${t}"]`),c=this._holos[t]?.kind==="main";if(!s){c&&this._holoOn&&(this._holoOn=!1);return}c&&i!==this._holoOn&&(this._holoOn=i);let d=this._holos[t],u=(this.building?.settings.roof.hologram??St).device_min_w??0;d?.kind==="device"&&u>0&&(d.w??0)<u&&(i=!1);let h=!i;if(s.hidden!==h&&(s.hidden=h),l&&l.hasAttribute("hidden")!==h&&l.toggleAttribute("hidden",h),!i)return;if(d?.kind==="bin"){let E=Math.max(.6,o*.8),M=!!d.bin?.icon&&o*.8<.62;s.classList.contains("fp3d-holo-far")!==M&&(s.classList.toggle("fp3d-holo-far",M),this.holoSizes.delete(t)),M&&(E=1);let A=this.holoSizes.get(t),et=performance.now();(!A||et-A.at>2e3)&&(A={w:s.offsetWidth||90,h:s.offsetHeight||40,at:et},this.holoSizes.set(t,A));let st=A.w*E,Lt=A.h*E,yt=e;for(let At=0;At<6;At++){let z=this.holoBoxes.find(ft=>n-st/2<ft.x1+3&&n+st/2>ft.x0-3&&yt-Lt<ft.y1+3&&yt>ft.y0-3);if(!z)break;yt=z.y0-4}this.holoBoxes.push({i:t,x0:n-st/2,x1:n+st/2,y0:yt-Lt,y1:yt}),s.style.transform=`translate(${n.toFixed(1)}px, ${yt.toFixed(1)}px) scale(${E.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let f=o*.8,v=34*f,y=46*f,b=n+(a?v:-v),p=e-y,_=this.holoSizes.get(t),$=performance.now();(!_||$-_.at>2e3&&!(c&&this._holoBig))&&(_={w:s.offsetWidth||184,h:s.offsetHeight||90,at:$},this.holoSizes.set(t,_));let P=_.w*f,D=_.h*f,H=a?b:b-P,B=H+P;for(let E=0;E<6;E++){let M=this.holoBoxes.find(A=>H<A.x1+4&&B>A.x0-4&&p-D<A.y1+4&&p>A.y0-4);if(!M)break;p=M.y0-6}this.holoBoxes.push({i:t,x0:H,x1:B,y0:p-D,y1:p});let R=a||(this.building?.settings.roof.hologram??St).mirror!==!1;if(s.style.transform=R?`translate(${b.toFixed(1)}px, ${p.toFixed(1)}px) scale(${(a?f:-f).toFixed(3)}, ${f.toFixed(3)}) translate(0, -100%)`:`translate(${H.toFixed(1)}px, ${p.toFixed(1)}px) scale(${f.toFixed(3)}) translate(0, -100%)`,l){let E=l.firstElementChild,M=l.lastElementChild;E?.setAttribute("x1",n.toFixed(1)),E?.setAttribute("y1",e.toFixed(1)),E?.setAttribute("x2",b.toFixed(1)),E?.setAttribute("y2",p.toFixed(1)),M?.setAttribute("cx",n.toFixed(1)),M?.setAttribute("cy",e.toFixed(1))}}renderHologram(){let t=this._energy,n=()=>this._holos.map((o,a)=>o.kind==="bin"?this.renderBinCard(o,a):o.kind==="rack"?this.renderRackCard(o,a):w);if(this.roomId&&!(this.building?.settings.roof.hologram??St).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return n();let e=this.floorId===null||(this.building?.floors.length??0)<=1,i=!!t&&(t.solar!==null||t.grid!==null||t.battery!==null)&&e;return this._holos.map((o,a)=>o.kind==="module"?this.renderModuleCard(o,a):o.kind==="bin"?this.renderBinCard(o,a):o.kind==="rack"?this.renderRackCard(o,a):o.kind==="car"?this.renderCarCard(o,a):o.kind==="media"?this.renderMediaCard(o,a):o.kind==="device"?this.renderDeviceCard(o,a):i?this.renderHoloCard(o,a,t):w)}renderBinCard(t,n){let e=t.bin,i=e.lines.length===1?e.lines[0]:null,o=e.lines.map(a=>`${a.name}: ${a.when}`).join(", ");return m`<div class="fp3d-holo fp3d-holo-bin ${e.soon?"":"fp3d-holo-later"} ${i?.out?"fp3d-holo-out":""} ${i?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="note" aria-label=${o} style="--bin:${e.lines[0].color}">
      ${e.icon?m`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${e.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:w}
      ${i?m`<div class="fp3d-holo-body"><b>${i.when}</b><span>${i.name}</span></div>`:m`<div class="fp3d-holo-body fp3d-holo-lines">
            ${e.lines.map(a=>m`<div class="fp3d-holo-line ${a.soon?"":"fp3d-holo-line-later"} ${a.out?"fp3d-holo-line-out":""}" style="--bin:${a.color}"><b>${a.when}</b><span>${a.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(t,n){let e=this.hass,i=v=>k(e,v),o=t.car,a=!this.mediaFolded.has(o.spot),s=()=>{this.mediaFolded.has(o.spot)?this.mediaFolded.delete(o.spot):this.mediaFolded.add(o.spot),this.requestUpdate()},l=(v,y,b)=>te(e,v,y,{entity_id:b}),c=(v,y)=>v.startsWith("climate.")?l("climate",y?"turn_on":"turn_off",v):l("homeassistant",y?"turn_on":"turn_off",v),d=async()=>{if(!o.lock)return;let v=o.lock.startsWith("lock.");if(o.locked){if(!await this.ask(i("car_unlock_confirm")))return;v?l("lock","unlock",o.lock):l("homeassistant","turn_off",o.lock)}else v?l("lock","lock",o.lock):l("homeassistant","turn_on",o.lock)},u=o.soc===null?"#37e0ff":o.soc>=50?"#4dff80":o.soc>=20?"#ffcc40":"#ff4d40",h=!!o.lock&&/^(lock|input_boolean|switch)\./.test(o.lock),f=!!o.climate&&/^(climate|switch|input_boolean)\./.test(o.climate);return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${t.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${a?"true":"false"} @click=${s} @keydown=${fe(s)}>
            <span>🚗 ${t.name}</span><span class="fp3d-holo-live">${o.charging?`\u26A1 ${i("car_charging_short")}`:o.locked===null?"":o.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${o.soc!==null?`${Math.round(o.soc)} %`:"\u2013"}</b>
            <span>${o.range!==null?`${K(e,o.range,0)} ${o.rangeUnit}`:""}${o.charging&&o.chargingW?` \xB7 ${U(e,o.chargingW)}`:""}</span>
          </div>
          ${o.soc!==null?m`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,o.soc))}%;background:${u}"></i></div>`:w}
          ${a&&!this.ro&&(h||f||o.charge)?m`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${h?m`<button title=${o.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${d}>${o.locked?"\u{1F512}":"\u{1F513}"}</button>`:w}
                ${f?m`<button class=${o.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>c(o.climate,!o.climateOn)}>❄</button>`:w}
                ${o.charge?m`<button class=${o.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>c(o.charge,!o.charging)}>⚡</button>`:w}
              </div>`:w}
        </div>
      </div>`}renderModuleCard(t,n){let e=t.module,i=!this.mediaFolded.has(e.id),o=()=>{this.mediaFolded.has(e.id)?this.mediaFolded.delete(e.id):this.mediaFolded.add(e.id),this.requestUpdate()},a=f=>f?`color:${f}`:"",s=this._low||this.clientWidth<600,l=wn(e.rows,s),c=wn(e.cells,s),d=e.chain?wn(e.chain.items,s):[],u=e.spark&&e.spark.values.length>1&&!(s&&e.spark.minor)?e.spark:null,h=!!(e.chain||e.cells?.length||e.status);return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${h?"fp3d-holo-mod-wide":""} ${this.cardPing===e.id?"fp3d-holo-ping":""} ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${e.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${i?"true":"false"} @click=${o} @keydown=${fe(o)}><span>${e.icon} ${e.title}</span><span class="fp3d-holo-live" style=${a(e.liveColor)}>${e.live??""}</span></div>
          ${e.status?m`<div class="fp3d-holo-status" style=${e.status.color?`--st:${e.status.color}`:""}>
                ${e.status.icon?m`<i>${e.status.icon}</i>`:w}<b>${e.status.text}</b>${e.status.since?m`<span>${e.status.since}</span>`:w}
              </div>`:w}
          ${e.main?m`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${a(e.main.color)}>${e.main.text}</b><span>${e.main.sub??""}</span>
                ${e.main.side?m`<em style=${a(e.main.side.color)}><b>${e.main.side.text}</b>${e.main.side.sub?m`<small>${e.main.side.sub}</small>`:w}</em>`:w}
              </div>`:w}
          ${i&&d.length?m`<div class="fp3d-holo-chain">
                  ${d.map((f,v)=>m`${v?m`<s>→</s>`:w}<div><small>${f.label}</small><b style=${a(f.color)}>${f.value}</b></div>`)}
                </div>
                ${e.chain.note?m`<div class="fp3d-holo-chain-note" style=${a(e.chain.noteColor)}>${e.chain.note}</div>`:w}`:w}
          ${i?l.map(f=>m`<div class="fp3d-holo-mrow"><span>${f.label}</span><b style=${a(f.color)}>${f.value}</b>${f.at!==void 0?f.fill?m`<i class="fp3d-holo-mrow-fill"><s style="width:${f.at}%;background:${f.color??"#37e0ff"}"></s></i>`:m`<i><em style="left:${f.at}%;background:${f.color??"#37e0ff"};color:${f.color??"#37e0ff"}"></em></i>`:m`<i class="fp3d-holo-mrow-none"></i>`}</div>`):w}
          ${i&&c.length?m`<div class="fp3d-holo-cells">${c.map(f=>m`<div><small>${f.label}</small><b style=${a(f.color)}>${f.value}</b></div>`)}</div>`:w}
          ${i&&e.hint?m`<div class="fp3d-holo-hint" style=${e.hint.color?`--hint:${e.hint.color}`:""}>${e.hint.text}</div>`:w}
          ${i?(e.lines??[]).map(f=>m`<div class="fp3d-holo-mline">${f}</div>`):w}
          ${i&&u?m`${u.label?m`<div class="fp3d-holo-spark-label">${u.label}</div>`:w}${il(u.values,u.color??"#ffb347")}`:w}
          ${i&&e.chips?.length?m`<div class="fp3d-holo-chips">
                ${e.chips.map(f=>m`<div class="fp3d-holo-mline">${f.title}</div>
                    <div class="fp3d-holo-chip-row">${f.items.map(v=>m`<button class=${v.on?"fp3d-holo-on":""} title=${v.title??""} @click=${()=>v.onTap()}>${v.label}</button>`)}</div>`)}
              </div>`:w}
          ${i&&!this.ro&&e.buttons?.length?m`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${e.buttons.map(f=>m`<button class=${f.on?"fp3d-holo-on":""} title=${f.title??""} @click=${()=>f.onTap()}>${f.label}</button>`)}</div>`:w}
        </div>
      </div>`}serviceFailed(t,n){let e=n&&typeof n=="object"&&"message"in n?String(n.message):String(n);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${t}: ${e}`},bubbles:!0,composed:!0}))}renderMediaCard(t,n){let e=this.hass,i=$=>k(e,$),o=t.media,a=!this.mediaFolded.has(o.id),s=()=>{this.mediaFolded.has(o.id)?this.mediaFolded.delete(o.id):this.mediaFolded.add(o.id),this.requestUpdate()},l=($,P={})=>{Promise.resolve(e.callService("media_player",$,{entity_id:o.id,...P})).catch(D=>this.serviceFailed(`media_player.${$}`,D))},c={down:$=>$.currentTarget.dataset.pressed=String($.pointerId),up:$=>P=>{let D=P.currentTarget;D.dataset.pressed===String(P.pointerId)&&(delete D.dataset.pressed,P.stopPropagation(),D.dataset.acted=String(Date.now()),$())},key:$=>P=>{let D=P.currentTarget;Date.now()-Number(D.dataset.acted??0)<700||(D.dataset.acted=String(Date.now()),$())}},d=e.states[o.id]?.attributes.supported_features,u=$=>typeof d!="number"||(d&$)!==0,h=this.mediaIntent.get(o.id);h&&(h.playing===o.playing||Date.now()-h.at>3e4)&&this.mediaIntent.delete(o.id);let f=this.mediaIntent.get(o.id)?.playing??o.playing,v=u(16384)||u(1),y=()=>{this.mediaIntent.set(o.id,{playing:!f,at:Date.now()}),this.requestUpdate(),l(f?"media_pause":u(16384)?"media_play":"media_play_pause")},b=this.mediaVolume.get(o.id);b&&(Math.abs(b.v-o.volume)<=2||Date.now()-b.at>3e4)&&this.mediaVolume.delete(o.id);let p=this.mediaVolume.get(o.id)?.v??o.volume,_=($,P)=>{this.mediaVolume.set(o.id,{v:$,at:Date.now()}),this.requestUpdate(),(P||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:$/100}))};return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${t.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${a?"true":"false"} @click=${s} @keydown=${fe(s)}><span>♪ ${t.name}</span><span class="fp3d-holo-live">${f?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${o.picture?m`<img class="fp3d-holo-cover" src=${o.picture} alt="" />`:m`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${o.title}</b>${o.artist?m`<span>${o.artist}</span>`:w}</div>
        </div>
        ${a&&!this.ro?m`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!u(16)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_previous_track"))} @click=${c.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${f?!u(1):!v} @pointerdown=${c.down} @pointerup=${c.up(y)} @click=${c.key(y)}>${f?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!u(32)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_next_track"))} @click=${c.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(p)}
                  aria-label=${i("volume")}
                  @input=${$=>_(Number($.target.value),!1)}
                  @change=${$=>_(Number($.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${p} %</span>
              </div>`:w}
      </div>
    </div>`}rackHolos(t,n){let e=[];if(!this.rackCards)return e;let i=(n.settings.roof.hologram??St).size*.7;for(let o of n.floors)for(let a of o.furniture){let s=a.rack?.slots;if(!s?.length)continue;let l=$n(t,s,a.rack?.card?.metrics);if(!l.length)continue;let c=o.elevation+X(o,a)+a.h,d=Object.fromEntries(s.map(u=>[u.id,u.name||Y(t,u.type)]));e.push({anchor:{p:[a.x,c+.15,a.z],n:[0,1,0],floorId:o.id,size:i,roof:!1,views:"all",room:Ko(o,a.x,a.z)},card:{kind:"rack",name:a.name||Y(t,a.type),w:null,dayIds:[],battery:null,rack:{id:a.id,values:l,names:d}}})}return e}spokenRacks(t,n){let e=[];for(let i of n.floors){let o=Mt(i);for(let a of i.furniture){let s=a.rack?.slots;if(!s?.length)continue;let l=$n(t,s,a.rack?.card?.metrics),c=$n(t,s,[he,Zt]).filter(u=>!l.some(h=>h.key===u.key)),d=o.find(u=>u.points.length>=3&&G([a.x,a.z],u.points));e.push({id:a.id,name:a.name||Y(t,a.type),room:d?.name??"",names:Object.fromEntries(s.map(u=>[u.id,u.name||Y(t,u.type)])),values:[...l,...c].map(u=>({key:u.key,kind:u.kind,slot:u.slot,label:this.rackValueLabel(u),text:this.rackValueText(u),value:u.value,of:u.of}))})}}return e}toggleRackCard(t){this.rackOpen.delete(t)||this.rackOpen.add(t),this.watchRackSpark(),this.requestUpdate()}rackSparkIds(){let t=this._holos.filter(n=>n.rack&&this.rackOpen.has(n.rack.id)).flatMap(n=>n.rack.values.flatMap(e=>e.ids));return[...new Set(t)]}watchRackSpark(){let t=this.rackSparkIds(),n=this.replay,e=n?`tt|${t.join(",")}|${Math.floor(n.t/3e5)}`:t.join(",");if(!(e===this.rackSparkKey&&(n||Date.now()-this.rackSparkAt<3e5))){if(this.rackSparkKey=e,!t.length){this._rackRows=null;return}if(n){this._rackRows=n.stats(t,n.t-rl,n.t+1);return}!this.hass||globalThis.document?.hidden||(this.rackSparkAt=Date.now(),Ia(this.hass,t,rl).then(i=>{this.rackSparkKey===e&&(this._rackRows=i)}))}}rackValueText(t){let n=this.hass;if(t.key===Zt)return t.text;if(t.value===null)return t.key===he?"\u2013":nt(n,n.states[t.key]);if(t.kind==="runtime"&&/^(s|min|h)$/.test(t.unit)){let i=t.value*(t.unit==="s"?.016666666666666666:t.unit==="h"?60:1);return i<120?`${Math.round(i)} min`:`${K(n,i/60,1)} h`}let e=Number.isInteger(t.value)?0:Math.abs(t.value)<10?2:1;return`${K(n,t.value,e)}${t.unit?` ${t.unit}`:""}`}rackValueLabel(t){let n=this.hass;return t.key===he?k(n,"rack_card_hottest"):t.key===Zt?k(n,"rack_card_online"):t.kind==="other"?O(n,t.key):k(n,`rack_kind_${t.kind}`)}renderRackCard(t,n){let e=t.rack,i=this.rackOpen.has(e.id),o=e.values.find(u=>u.key===Zt),a=!!o&&o.value===o.of,s=e.values.filter(u=>u!==o),l=()=>this.toggleRackCard(e.id),c=u=>{u.key!=="Enter"&&u.key!==" "||(u.preventDefault(),l())},d=u=>{let h=Ma(this._rackRows,u);return h.length>1?il(h,u.kind==="temperature"?"#ffb86b":u.kind==="battery"?"#4dff80":"#7fe8ff"):w};return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-rack ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-expanded=${i?"true":"false"} aria-label=${t.name} @click=${l} @keydown=${c}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head"><span>▤ ${t.name}</span>${o?m`<span class="fp3d-holo-live" style="color:${a?kn.online:kn.warning}" title=${this.rackValueLabel(o)}>● ${o.text}</span>`:w}</div>
          ${i?m`<div class="fp3d-rack-card-grid">
                ${s.map(u=>m`<div class="fp3d-rack-card-row">
                    <span>${this.rackValueLabel(u)}${u.slot?m`<small>${e.names[u.slot]??""}</small>`:w}</span><b>${this.rackValueText(u)}</b>
                    ${d(u)}
                  </div>`)}
              </div>`:m`<div class="fp3d-holo-cells">${s.slice(0,4).map(u=>m`<div><small>${this.rackValueLabel(u)}</small><b>${this.rackValueText(u)}</b></div>`)}</div>`}
        </div>
      </div>`}renderDeviceCard(t,n){let e=this.hass,i=c=>k(e,c),o=!this.holoFolded.has(n),a=this.dayOf(t),s=a&&a.curve.length>1?io(a.curve,a.peak):null,l=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()};return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${o?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-expanded=${o?"true":"false"} aria-label=${t.w===null?t.name:`${t.name}: ${U(e,t.w)}`} @click=${l} @keydown=${fe(l)}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${t.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${U(e,t.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${o&&a?m`<div class="fp3d-holo-sub">${i("holo_today")} <b>${K(e,a.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${U(e,a.peak)}</b></div>`:w}
        ${o&&s?Tt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${s.area}" fill="url(#fp3dHoloG${n})"/>
              <path d="${s.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${s.endX}" cy="${s.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:w}
      </div>
    </div>`}dayOf(t){if(!this._rows||!t.dayIds.length)return null;let n=Object.fromEntries(t.dayIds.filter(e=>this._rows[e]).map(e=>[e,this._rows[e]]));return Object.keys(n).length?Wr(n,new Date(this.now()),Object.fromEntries(Object.keys(n).map(e=>[e,this.hass?.states[e]?.attributes.unit_of_measurement]))):null}growHolo(t,n,e=!1){if(clearTimeout(this.holoBigTimer),this.holoBigTimer=void 0,t&&!this._holoBig){let i=this.renderRoot?.querySelector(`.fp3d-holo[data-holo="${n}"]`);i?.offsetWidth&&this.holoSizes.set(n,{w:i.offsetWidth,h:i.offsetHeight,at:performance.now()}),this.loadSolarMore()}t!==this._holoBig&&(this._holoBig=t),t&&e&&(this.holoBigTimer=setTimeout(()=>this.growHolo(!1,n),Md))}async loadSolarMore(){let t=this.hass;if(!(!t||this.replay||this.solarMoreLoading||this._solarMore&&Date.now()-this._solarMore.at<Id)){this.solarMoreLoading=!0;try{let n=Za(await t.callWS({type:"energy/get_prefs"}).catch(()=>null)),e=[...n.solar,...n.export],[i,o]=await Promise.all([n.forecast.length?t.callWS({type:"energy/solar_forecast"}).catch(()=>null):null,e.length?oo(t,e):null]);this._solarMore={at:Date.now(),prefs:n,forecast:i,change:o}}finally{this.solarMoreLoading=!1}}}solarMore(t){let n=this.replay?null:this._solarMore,e=a=>n?.change&&a.length?a.reduce((s,l)=>s+(n.change.get(l)??0),0):null,i=n?Qa(n.forecast,n.prefs.forecast,new Date(this.now())):null,o=(n?e(n.prefs.solar):null)??t?.kwh??null;return{forecast:i,produced:o,rows:el({forecast:i,produced:o,exported:n?e(n.prefs.export):null})}}renderHoloCard(t,n,e){let i=this.hass,o=E=>k(i,E),a=this.dayOf(t),s=t.kind==="main",l=s&&this._holoBig,c=l||!this.holoFolded.has(n),d=l&&e.solar!==null?this.solarMore(a):null,u=s&&e.grid!==null&&e.consumption!==null&&e.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,e.grid)/e.consumption)*100))):null,h=d?.forecast?.hours??null,f=Math.max(a?.peak??0,...h??[0]),v=a&&a.curve.length>1?io(a.curve,f):null,y=h&&f>0?tl(h,f):null,b=new Date(this.now()),p=(b.getHours()+b.getMinutes()/60)/24*220,_=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()},$=()=>{if(!s)return _();let E=this.holoPress;if(this.holoPress="",E!=="mouse")return this.growHolo(!this._holoBig,n,!0);_(),this._holoBig&&(this.holoHoverOff=!0,this.growHolo(!1,n))},P=E=>{s&&E.pointerType==="mouse"&&!this.holoHoverOff&&this.growHolo(!0,n)},D=E=>{!s||E.pointerType!=="mouse"||(this.holoHoverOff=!1,this.growHolo(!1,n))},H=fe($),B=s?e.solar??e.consumption??0:t.w??0,R=s?e.battery!==null||e.soc!==null?{soc:e.soc,w:e.battery}:null:t.battery;return m`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div
        class="fp3d-holo ${c?"":"fp3d-holo-min"} ${l?"fp3d-holo-grown":""} ${this._low?"fp3d-holo-plain":""}"
        data-holo=${n}
        hidden
        role="button"
        tabindex="0"
        aria-label=${`${t.name}: ${U(i,B)}`}
        aria-expanded=${String(s?l:c)}
        @click=${$}
        @keydown=${H}
        @pointerdown=${E=>this.holoPress=E.pointerType}
        @pointerenter=${P}
        @pointerleave=${D}
      >
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${t.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${o("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${U(i,B)}</b><span>${o(s&&e.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${c?m`${s&&this._plants.length>1?m`<div class="fp3d-holo-plants">${this._plants.map(E=>m`<span>${E.name}</span><b>${U(i,E.w)}</b>`)}</div>`:w}
              ${a?m`<div class="fp3d-holo-sub">${o("holo_today")} <b>${K(i,a.kwh,1)} kWh</b> · ${o("holo_peak")} <b>${U(i,a.peak)}</b></div>`:d?.produced!=null?m`<div class="fp3d-holo-sub">${o("holo_today")} <b>${K(i,d.produced,1)} kWh</b></div>`:w}
              ${v||y?Tt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    ${y?Tt`<path class="fp3d-holo-fc" d="${y}" fill="none" stroke="#aee9ff" stroke-width="1.5" stroke-dasharray="3 3"/>`:w}
                    ${v?Tt`<path d="${v.area}" fill="url(#fp3dHoloG${n})"/>
                          <path d="${v.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                          <circle cx="${v.endX}" cy="${v.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>`:w}
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:w}
              ${y?m`<div class="fp3d-holo-legend"><span class="fp3d-holo-legend-act">${o("holo_actual")}</span><span class="fp3d-holo-legend-fc">${o("holo_forecast")}</span></div>`:w}
              ${d?.rows.length?m`<div class="fp3d-holo-more">
                    ${d.rows.map(E=>E.key==="self_use"?m`<div class="fp3d-holo-more-row"><span>${o("holo_self_use")}</span><b>${K(i,E.self,1)} kWh</b></div>
                            <div class="fp3d-holo-more-row"><span>${o("holo_exported")}</span><b>${K(i,E.exported,1)} kWh</b></div>
                            <div class="fp3d-holo-split" title="${E.share} %"><div style="width:${E.share}%"></div></div>`:m`<div class="fp3d-holo-more-row"><span>${o(E.key==="forecast_rest"?"holo_fc_rest":"holo_fc_tomorrow")}</span><b>${K(i,E.kwh,1)} kWh</b></div>`)}
                  </div>`:w}
              <div class="fp3d-holo-grid">
                ${R?m`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${o("holo_battery")}<br /><b>${R.soc!==null?`${Math.round(R.soc)} %`:U(i,Math.abs(R.w??0))}</b>
                      ${R.w!==null&&Math.abs(R.w)>=5?m`<span>${R.w<0?"\u25B2":"\u25BC"} ${U(i,Math.abs(R.w))}</span>`:w}
                    </div>`:w}
                ${s&&e.grid!==null?m`<div class="fp3d-holo-cell ${e.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${o("holo_grid")}<br /><b>${U(i,Math.abs(e.grid))}</b> <span>${Math.abs(e.grid)<5?"":o(e.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:w}
                ${s&&e.consumption!==null?m`<div class="fp3d-holo-cell fp3d-holo-house">${o("holo_house")}<br /><b>${U(i,e.consumption)}</b></div>`:w}
                ${s&&this._wallboxW!==null?m`<div class="fp3d-holo-cell fp3d-holo-wb">${o("holo_wallbox")}<br /><b>${U(i,this._wallboxW)}</b></div>`:w}
              </div>
              ${s&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?m`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?m`<span>🔥 ${o("holo_gas")} <b>${K(i,this._meters.gas,this._meters.gas<10?2:1)} ${ol(i,this.building?.energy.gas)}</b></span>`:w}
                    ${this._meters.water!==null?m`<span>💧 ${o("holo_water")} <b>${Sd(i,this._meters.water,ol(i,this.building?.energy.water))}</b></span>`:w}
                    <span>${o("holo_today_short")}</span>
                  </div>`:w}
              ${u!==null?m`<div class="fp3d-holo-bar"><div style="width:${u}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${o("holo_autarky")}</span><b>${u} %</b></div>`:w}`:w}
      </div>
    </div>`}setAlerts(t){let n=t.map(a=>`${a.kind}:${a.entity}`),e=this.ro?[]:t.filter((a,s)=>!this.seenAlerts.has(n[s]));this.ro||(this.seenAlerts=new Set(n)),n.join()!==this._alerts.map(a=>`${a.kind}:${a.entity}`).join()&&(this._alerts=t);let i=t.some(a=>!a.quiet&&a.kind!=="water");if(i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!e.length)return;let o=this.directorSettings();if(o?.alerts){let a=e[0];if(this.directing.offer({kind:"alert",key:`alert:${a.kind}:${a.entity}`,entity:a.entity},Date.now(),o.hold??30)){this.directorShow(()=>this.jumpTo(a));return}}this.alertJump&&this.jumpTo(e[0])}tidySnoozes(t,n,e){if(this.ro||!this.mayEdit)return;let i=Ls(t.settings.alert_snoozed,n).filter(a=>e||pn.has(a.kind));if(!i.length)return;let o=new Set(i.map(ko));this.setPlanSettings({alert_snoozed:(t.settings.alert_snoozed??[]).filter(a=>!o.has(ko(a)))})}dismiss(t,n){let e=this.building;this._dismissing=null,!(!e||!this.mayEdit)&&(this.setPlanSettings(Ws(e.settings,t,n,Date.now())),this.setAlerts(this._alerts.filter(i=>ht(i)!==ht(t))),this.applyTint())}directorSettings(){let t=this.building?.settings.director;return this.director&&!this.ro&&Qr(t)?t:null}direct(){let t=this.directorSettings(),n=this.hass,e=this.building;if(!t||!n||!e){this.directorSrc&&(this.directing=new so,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let i=Date.now(),o=t.hold??30,a=`${JSON.stringify(t)}|${e.floors.map(c=>c.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==n.entities||this.directorSrc.building!==e||this.directorSrc.sig!==a){let c=[...new Set(e.floors.flatMap(u=>u.placements.map(h=>h.entity_id)))],d=t.motion??"off";this.directorSrc={registry:n.entities,building:e,sig:a,bells:(t.doorbell?ts(n,t.doorbell_entity):[]).map(u=>({id:u,camera:os(n,u,c,t.doorbell_camera)})),motion:d==="off"?[]:c.filter(u=>u.startsWith("camera.")).flatMap(u=>Ft(n,u).filter(h=>d==="all"||to(n,h)==="person").map(h=>({sensor:h,cam:u})))}}let s=[];for(let c of this.directorSrc.bells)this.directing.edge(c.id,n.states[c.id],(d,u)=>es(d,u,i))&&s.push({kind:"doorbell",key:`bell:${c.id}`,entity:c.id,camera:c.camera});for(let c of t.triggers??[])c.entity&&this.directing.edge(`trigger:${c.entity}`,n.states[c.entity],(d,u)=>ns(d,u,i))&&s.push({kind:"trigger",key:`trigger:${c.entity}`,entity:c.entity,camera:c.camera});for(let c of this.directorSrc.motion)this.directing.edge(c.sensor,n.states[c.sensor],(d,u)=>d?.state==="off"&&u?.state==="on")&&s.push({kind:"motion",key:`cam:${c.cam}`,entity:c.sensor,camera:c.cam});if(t.appliances){for(let[c,d]of this.appliances)this.directing.stopped(`app:${c}`,d.running,i)&&s.push({kind:"appliance",key:`app:${c}`,entity:c});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];s.sort((c,d)=>l.indexOf(c.kind)-l.indexOf(d.kind));for(let c of s)if(this.directing.offer(c,i,o)){this.directorShow(()=>this.directorGo(c));break}}directorShow(t){let n=this.viewer;if(!n)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:n.getView()}),n.setAutoOrbit(0),t(),clearTimeout(this.directorTimer);let e=this.directing.current;e&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,e.until-Date.now())+50))}directorGo(t){let n=this.building;if(n){if(t.camera&&n.floors.some(e=>e.placements.some(i=>i.entity_id===t.camera))){let e=t.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(e),250)):this.lookThrough(e);return}if(t.kind==="appliance"){let e=this.appliances.get(t.key.slice(4));e&&this.goTo({kind:"device",name:"",where:"",floorId:e.floorId,roomId:null,entity:e.entity,icon:null,x:e.x,z:e.z,y:1});return}this.showEntity(t.entity)}}directorDue(){let t=this.directing.due(Date.now()),n=this.directorBack;t&&(this.directorBack=null,!(!t.back||!n)&&(this._through&&(this._through=null),this.floorId!==n.floorId&&this.fire("floor-tap",{floorId:n.floorId}),n.roomId?setTimeout(()=>this.fire("room-tap",{floorId:n.floorId,roomId:n.roomId}),60):this.roomId&&n.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:n.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(n.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(t){if(!t.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60)}onRoomDoubleTap(t,n){let e=this.building,i=this.hass,o=e?.floors.find(d=>d.id===t),a=o?Mt(o).find(d=>d.id===n):void 0;if(!e||!i||!o||!a||this.ro)return;let s=new Set(xt(i,a.area_id).filter(d=>L(d)==="light"));for(let d of o.placements)L(d.entity_id)==="light"&&G([d.x,d.z],a.points)&&s.add(d.entity_id);for(let d of o.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&qn(d.type)&&G([d.x,d.z],a.points)&&s.add(u)}let l=[...s].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>i.states[d]?.state==="on");te(i,"homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:n,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(t){this.ro||(te(this.hass,t.split(".")[0],"turn_on",{entity_id:t}),this._sceneFired=t,setTimeout(()=>this._sceneFired=null,600))}applyMotion(){let t=this.viewer,n=this.building,e=this.hass;if(clearTimeout(this.motionTimer),this.motionTimer=void 0,!t||!n||!e)return;let i=this.now(),o=br(e,n,i);t.setRoomGlow(o.rooms),o.next!==null&&!this.replay&&(this.motionTimer=setTimeout(()=>this.applyMotion(),Math.max(50,o.next-i+20)))}applyTint(){let t=this.viewer,n=this.building,e=this.hass;if(!t||!n||!e)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let s=this.heatMode,l=qs(e,n,s);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([c,d])=>[c,Bs(s,d)]))}let o=new Map;if(this.heatMode==="values")for(let s of n.floors)for(let l of Mt(s)){let c=se(e,s,l,"temperature"),d=se(e,s,l,"humidity"),u=se(e,s,l,"co2"),h=[c!==null?`${K(e,Bt(e,c),1)} ${re(e)}`:null,d!==null?`${K(e,d,0)} %`:null,u!==null?`${K(e,u,0)} ppm`:null].filter(f=>!!f);h.length&&o.set(l.id,h.join(" \xB7 "))}if(t.setRoomInfo(o),this._alerts.length){i??=new Map;let s=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let c=l.kind==="water"?1:s,d=Fs(l).map(u=>u*c);if(l.roomId)i.set(l.roomId,d);else for(let u of n.floors)if(!l.floorId||u.id===l.floorId)for(let h of u.rooms)i.set(h.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let a=i?[...i].map(([s,l])=>`${s}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";a!==this.tintSig&&(this.tintSig=a,t.setRoomTint(i))}furnitureMarkers(t,n,e,i){let o=[],a=[],s=new Map,l=new Map,c=new Set(e),d=[];this.binHolos=[],this.binSpots=new Map,this.binCues=[],this.printerCams.clear();let u=new Map(this.scene.filter(b=>b.kind==="glow").map(b=>[b.furnitureId,b]));for(let b of n.floors)for(let p of b.furniture){let _=this.furnitureLinks.get(p.id),$=this.stateFaces(t,p);if($.length&&s.set(p.id,{color:$[0].color,level:$[0].level,faces:$}),qn(p.type)){let I=this.lampMarker(t,b,p,_?.entity??null);o.push(I);let N=p.type==="lamp_fan"&&p.fan&&p.fan!=="none"?p.fan:null;if(N&&!e.has(N)){e.add(N);let Q=t.states[N],It=p.rotation*Math.PI/180,Ct=Math.min(.45,p.w*.3);o.push({id:N,floorId:b.id,roomId:I.roomId,x:p.x+Math.cos(It)*Ct,z:p.z+Math.sin(It)*Ct,y:I.y,icon:p.icon?jt(p.icon):Te("fan"),name:O(t,N),text:Q&&Yn(Q)>0&&typeof Q.attributes.percentage=="number"?`${Math.round(Q.attributes.percentage)} %`:Q?nt(t,Q):"",active:Q?wt(Q):!1,unavailable:Q?J(Q):!1,glow:null,furnitureId:p.id,show:p.marker??"always",fromFurniture:!0})}continue}if(Ti.has(p.type)){let I=this.techItem(t,b,p,s,e);I&&(o.push(I),l.set(p.id,I.id));continue}if(Ii.has(p.type)){let I=this.gangItem(t,b,p,a,s,i);I&&(o.push(I),l.set(p.id,I.id));continue}let P=u.get(p.id);P&&s.set(p.id,{color:P.color,level:P.level});let D=(p.type==="plant"||uo(p.type))&&!!p.moisture&&p.moisture!=="none";if(p.type==="waste_bin"||p.type==="mailbox"||D){let I=this.householdState(t,b,p);I?.screen&&s.set(p.id,I.screen),I?.marker&&o.push(I.marker);let N=p.type==="waste_bin"?p.bin_source:p.type==="mailbox"?p.entity:p.moisture;if(typeof N=="string"&&N!=="none"&&l.set(p.id,`hh:${N}#${p.id}`),I?.item&&d.push(I.item),!D)continue}let H=As(p,t);H.length&&!s.has(p.id)&&s.set(p.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let I of H){let N=p.name||Y(t,p.type);d.push({icon:"wrench-outline",text:I===p.service?k(t,"hh_service",{name:N}):k(t,"hh_service2",{name:N,what:O(t,I)}),entity:I})}(p.type==="fridge"||p.type==="fridge_smart")&&un(p,t)&&(s.set(p.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),d.push({icon:"fridge-alert-outline",text:k(t,"hh_fridge_open",{name:p.name||Y(t,p.type)}),entity:Dt(p)[0]??null}));let R=p.type==="parking"&&!!p.car?Se(t,p):null,E=p.type==="washer"||p.type==="dryer"||p.type==="dishwasher",M=tt(p.type)==="home_battery"?p.soc:tt(p.type)==="wallbox"?p.status:p.type==="parking"&&R?p.car?.device??R.entities.soc:E?p.remaining??null:null,A=M&&M!=="none"?M:null,et=p.extra&&p.extra!=="none"&&t.states[p.extra]?p.extra:null,st=wr(t,n,p),Lt=st&&st.sensor!==et&&st.sensor!==_?.entity?`${K(t,Bt(t,st.celsius),0)} ${re(t)}`:"",yt=[et?nt(t,t.states[et]):"",Lt].filter(Boolean).join(" \xB7 "),At=I=>yt?I?`${I} \xB7 ${yt}`:yt:I,z=_??(A||et||st?{entity:null,power:null}:void 0);if(!z)continue;let ft=tt(p.type)==="home_battery"?A??z.entity??z.power:z.entity??z.power??A??et;l.set(p.id,ft);let C=z.entity?t.states[z.entity]:void 0,me=tt(p.type)==="meter"?n.energy.grid_invert&&!p.export:tt(p.type)==="home_battery"?n.energy.battery_invert&&!p.charge:!1,lt=z.power?vt(t.states[z.power],me):null,ge=tt(p.type)==="home_battery"&&p.charge&&p.charge!=="none"?p.charge:tt(p.type)==="meter"&&p.export&&p.export!=="none"?p.export:null,dt=ge?vt(t.states[ge]):null;if(dt!==null&&(lt=Math.max(0,lt??0)-Math.max(0,dt)),z.power&&lt!==null&&Cr(p.type)&&!i.has(z.power)){i.add(z.power);let I=p.circuit&&p.circuit!=="none"?p.circuit:void 0,N=p.energy??void 0;a.push({id:ft,powerEntity:z.power,floorId:b.id,x:p.x,z:p.z,power:Math.max(0,lt),wallbox:tt(p.type)==="wallbox"||void 0,circuit:I,...N?{energy:N}:{}})}let ct=typeof p.run_w=="number"&&p.run_w>0?p.run_w:10,ee=typeof p.run_w=="number"&&p.run_w>0&&lt!==null&&lt<=p.run_w,Rt=(lt??0)>ct||C?.state==="on"||C?.state==="running"||Ye(C)&&wt(C);E&&this.appliances.set(p.id,{floorId:b.id,x:p.x,z:p.z,entity:z.entity??z.power??p.id,running:Rt});let ut=null;if(E){let I=p.remaining&&p.remaining!=="none"?t.states[p.remaining]:void 0,N=go(I),Q=Rt||!z.power&&!z.entity&&(N??0)>0,It=Dt(p),Ct=Hn=>It.some(Ne=>{let ve=t.states[Ne];return!!ve?.last_changed&&Date.parse(ve.last_changed)>Hn}),We=this.finished.update(p.id,Q,Ct),Nt=p.name||(z.entity?O(t,z.entity):Y(t,p.type));Q?(Rt||s.set(p.id,dl(p.type)),N!==null&&!vo(C,z.power?lt:null,ct)&&(ut=k(t,"hh_left",{t:Es(N)}),d.push({icon:"timer-outline",text:`${Nt}: ${ut}`,entity:p.remaining??z.entity}))):(bo(C)||bo(I)||We)&&(ut=k(t,"hh_done"),s.set(p.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),d.push({icon:"check-circle-outline",text:k(t,"hh_finished",{name:Nt}),entity:z.entity??z.power}))}if(R&&ce(t,p)){let I=[];if(R.soc!==null){let N=R.soc>=50?[.3,1,.5]:R.soc>=20?[1,.8,.25]:[1,.3,.25];I.push({part:"band",color:N,level:R.charging?1:.6})}if(R.locked===!1&&I.push({part:"lights",color:[1,.42,.02],level:1}),R.climateOn){let N=R.entities.climate?t.states[R.entities.climate]:void 0,Q=!!N&&(N.attributes.hvac_action==="cooling"||N.state==="cool");I.push({part:"cabin",color:Q?[.45,.8,1]:[1,.55,.22],level:.35})}I.length&&s.set(`${p.id}:vehicle`,{color:I[0].color,level:I[0].level,faces:I})}if(st?.kind==="radiator"){let I=C&&L(C.entity_id)==="climate"?C.attributes:null,N=Kn(t,p.heat_sensor)??(!!I&&wt(C)&&I.hvac_action!=="cooling");s.set(p.id,{color:st.color,level:N?.9:.55,shade:!0})}else if(st?.kind==="tank"){let I=Qn(n),N=vr(st.celsius-.3*(I.tank_hot-I.tank_cold),I.tank_cold,I.tank_hot);s.set(p.id,{color:N,level:.8,shade:!0,faces:[{part:"strata",color:N,top:st.color,level:.8}]})}else if(vi(p.type)&&(C&&L(C.entity_id)==="climate"||p.heat_sensor)){let I=C&&L(C.entity_id)==="climate"?C.attributes:null;if(Kn(t,p.heat_sensor)??(!!I&&wt(C)&&I.hvac_action!=="cooling")){let Q=I&&typeof I.temperature=="number"&&typeof I.current_temperature=="number"?I.temperature-I.current_temperature:1;s.set(p.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,Q))})}else u.has(p.id)&&s.delete(p.id)}else if(p.type==="ac_unit"&&C&&L(C.entity_id)==="climate"){let I=Wi(C);I&&s.set(p.id,I)}else if((p.type==="washer"||p.type==="dryer"||p.type==="dishwasher")&&Rt)s.set(p.id,dl(p.type));else if(p.type==="stove"||Nn(p.type)){let I=Li(C,Rt);I>0&&s.set(p.id,{color:[1,.05,.01],level:I,faces:[{part:"burners",color:[1,.05,.01],level:I}]})}let Wt=$t(p.type),De=!!Wt&&!Wt.light&&Wt.parts.some(I=>I.glow);if(C&&De&&L(C.entity_id)==="media"&&C.state==="playing"&&!Xe(p.type)){let I=typeof C.attributes.volume_level=="number"?C.attributes.volume_level:.5;s.set(p.id,{color:Xn(C)??[.22,.88,1],level:.5+.5*I,ring:!0,plain:!0})}if(C&&Xe(p.type)&&!Nn(p.type)&&!(fi(p.type)&&L(C.entity_id)==="cover")){let I=L(C.entity_id)==="light"?qt(C):null,N=L(C.entity_id)==="media"&&["playing","on","paused","idle"].includes(C.state),Q=L(C.entity_id)==="media"?Xn(C):I?I.color:wt(C)||N?[.22,.88,1]:null,It=L(C.entity_id)==="media"?C.attributes.entity_picture??null:null;Q&&s.set(p.id,{color:Q,level:C.state==="playing"?1:.6,picture:It,ring:bi(p.type)||De&&C.state==="playing"})}let zt=Pn(p.type)?Na(t,z.entity):null;if(zt){let I=Va(zt);I.length&&s.set(p.id,{color:I[0].color,level:I[0].level,faces:I}),zt.camera&&this.printerCams.set(ft,zt.camera)}let Le=zt?.progress!=null?` \xB7 ${Math.round(zt.progress*100)} %`:"";if(c.has(ft))continue;e.add(ft);let zn=z.entity?L(z.entity):null,be=b.rooms.find(I=>I.points.length>=3&&G([p.x,p.z],I.points)),Ht=C&&gi(p.type)&&C.entity_id.startsWith("water_heater.")?Cd(t,C):null;o.push({id:ft,floorId:b.id,roomId:be?.id??null,x:p.x,z:p.z,y:Od(p)+X(b,p),icon:p.icon?jt(p.icon):Ht?jt("water-boiler"):Te(zn??"switch"),name:p.name||(z.entity?O(t,z.entity):Y(t,p.type)),ownName:p.name||void 0,showName:!!p.show_name,text:At(ut??(R?this.carText(t,R,!!C&&!gn.has(C.state.toLowerCase())):tt(p.type)==="home_battery"?this.batteryText(t,A,lt):tt(p.type)==="wallbox"?this.wallboxText(t,A,lt):tt(p.type)==="meter"?this.meterText(t,lt):Ht?Ht.text:C?nt(t,C)+Le:ee?k(t,"pin_standby"):lt!==null?U(t,Math.max(0,lt)):"")),active:ut?!0:R?R.charging:Ht?Ht.on:C?wt(C):(lt??0)>(typeof p.run_w=="number"&&p.run_w>0?p.run_w:5),unavailable:C?J(C):!1,glow:null,furnitureId:p.id,energyDevice:tt(p.type)==="inverter"||tt(p.type)==="home_battery"||tt(p.type)==="wallbox"||tt(p.type)==="meter"||!!R||!!et||!!st,...ee?{standby:ee}:{},show:p.marker??(R||ut?"always":void 0),fromFurniture:!0})}let h=n.settings.household;if(h?.bin_next_only||typeof h?.bin_days=="number"){let b=Ss(this.binHolos.filter(p=>!p.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(p=>p.icon||b.has(p.id))}let f=n.settings.household?.notes,v=f&&f!=="none"?t.states[f]:void 0;if(v&&!J(v)&&v.state.trim()){let b=v.state.split(/\s*(?:\||\n|;)\s*/).map(p=>p.trim()).filter(Boolean).slice(0,8);d.unshift(...b.map(p=>({icon:"pin-outline",text:p,entity:f})))}this._household=d.filter((b,p)=>d.findIndex(_=>_.text===b.text)===p),this.cameraScreens=0;let y=Gn(t,n.floors);for(let b of n.floors)for(let p of b.furniture){if(!p.pictures?.length||!Xe(p.type)||p.type==="fridge_smart"&&y.get(p.id)?.right)continue;let _=p.pictures.find(D=>qi(t,D));if(!_)continue;let $=this.pictureUrl(_.image),P=p.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];$&&s.set(p.id,{color:P,level:1,picture:$,plain:!0})}for(let b of u.values())b.top?s.set(b.furnitureId,{color:b.color,level:b.level,faces:[{part:"strata",color:b.color,top:b.top,level:b.level}]}):b.band&&s.set(b.furnitureId,{color:b.color,level:b.level,faces:[{part:"band",color:b.color,level:b.level}]});return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:o,consumers:a,screens:s,targets:l}}watchHousehold(t,n){let i=n.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox").length>0&&!this.replay,o=i?ys(n.floors):[],a=o.join(",");if(!i){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let s=async()=>{o.length&&(this.pickups=await ho(this.hass??t,o)),this.syncDevices(!0)};(a!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=a,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void s(),6e5),o.length&&ho(t,o).then(l=>{this.pickups=l,this.syncDevices(!0)}))}gangItem(t,n,e,i,o,a){let s=Ge(e),l=e.type==="wall_socket",c=[],d=0,u=0,h=null,f=!1;if(s.forEach((P,D)=>{let H=P.entity&&P.entity!=="none"?P.entity:null,B=P.power&&P.power!=="none"?P.power:null;if(!H&&!B)return;u++;let R=H?t.states[H]:void 0,E=B?vt(t.states[B]):null;if(B&&E!==null&&(h=(h??0)+Math.max(0,E),a.has(B)||(a.add(B),i.push({id:H??B,powerEntity:B,floorId:n.id,x:e.x,z:e.z,power:Math.max(0,E),circuit:e.circuit&&e.circuit!=="none"?e.circuit:void 0}))),R&&!J(R)&&(f=!0),!(R?wt(R):(E??0)>5))return;d++;let A=R&&L(R.entity_id)==="light"?qt(R):null;if(!l){c.push({part:"gang",index:D,of:s.length,color:A?A.color:[.22,.88,1],level:.5,accent:!A});return}let et=A?A.color:[.35,1,.55];c.push({part:"gang",index:D,of:s.length,color:et,level:E!==null?Math.min(1,.55+E/1500):.8})}),c.length&&o.set(e.id,{color:c[0].color,level:c[0].level,faces:c}),!u)return null;let v=Je(e),y=v[0]??null,b=y?t.states[y]:void 0,p=n.rooms.find(P=>P.points.length>=3&&G([e.x,e.z],P.points)),_=h,$=Tr(this.floorWalls(n),e,n.height,X(n,e));return{id:`gangs:${e.id}`,floorId:n.id,roomId:p?.id??null,x:$.x,z:$.z,y:e.h+.2+$.y,icon:jt(e.icon||(l?"power-socket-de":"light-switch")),name:e.name||(v.length===1&&y?O(t,y):Y(t,e.type)),ownName:e.name||void 0,showName:!!e.show_name,text:u>1?`${d}/${u}${_!==null?` \xB7 ${U(t,_)}`:""}`:_!==null?U(t,_):b?nt(t,b):"",active:d>0,unavailable:!!y&&!f,glow:null,power:_??void 0,furnitureId:e.id,show:e.marker??void 0,fromFurniture:!0}}techItem(t,n,e,i,o){let a=H=>typeof H=="string"&&H!=="none"?H:null,s=a(e.entity),l=s?t.states[s]:void 0,c=n.rooms.find(H=>H.points.length>=3&&G([e.x,e.z],H.points)),d={floorId:n.id,roomId:c?.id??null,x:e.x,z:e.z,ownName:e.name||void 0,showName:!!e.show_name,glow:null,furnitureId:e.id,fromFurniture:!0};if(e.type==="wifi_ap"){let H=a(e.clients),B=H?t.states[H]:void 0,R=B&&Number.isFinite(Number(B.state))?Math.round(Number(B.state)):null,E=s?Jn(l):B?Jn(B):null;if(E!==null){let A=E?[.25,.6,1]:[1,.25,.2];i.set(e.id,{color:A,level:.85,faces:[{part:"apring",color:A,level:.85}]})}let M=s??H;return!M||o.has(M)?null:(o.add(M),{...d,id:M,y:X(n,e)-(e.variant==="wall"?-e.h-.2:.3),icon:jt(e.icon||"access-point"),name:e.name||O(t,M),text:E===!1?k(t,"ap_offline"):R!==null?k(t,"ap_clients",{n:R}):l?nt(t,l):"",active:E===!0,unavailable:E===!1,show:e.marker??(E===!1?"always":void 0),energyDevice:R!==null})}let u=l?L(l.entity_id):null,h=a(e.power),f=h?vt(t.states[h]):null,v=typeof e.run_w=="number"&&e.run_w>0?e.run_w:30,y=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(f??0)>v;(y||l&&!["off","unavailable","unknown"].includes(l.state))&&i.set(e.id,{color:[1,.45,.15],level:y?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:y?.9:.3}]});let p=a(e.water_temp),_=p?t.states[p]:void 0,$=_&&Number.isFinite(Number(_.state))?Number(_.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,P=_?.attributes.unit_of_measurement??"\xB0C",D=s??p??h;return!D||o.has(D)?null:(o.add(D),{...d,id:D,y:X(n,e)+e.h+.25,icon:jt(e.icon||"water-boiler"),name:e.name||(s?O(t,s):Y(t,e.type)),text:$!==null?`${K(t,Math.round($))} ${P}${y?" \xB7 \u{1F525}":""}`:l?nt(t,l):"",active:y,unavailable:l?J(l):!1,power:f??void 0,show:e.marker??void 0,energyDevice:$!==null})}floorWalls(t){let n=this.wallCache.get(t);if(!n){let e=this.building?.settings;n=Mr(t.rooms,{exterior:e?.wall_exterior??.24,interior:e?.wall_interior??.12},t.walls??[]).walls,this.wallCache.set(t,n)}return n}wallCache=new WeakMap;renderGangMenu(){let t=this._gangMenu,n=this.hass,e=t&&this.building?.floors.flatMap(a=>a.furniture).find(a=>a.id===t.furnitureId);if(!t||!n||!e)return w;let i=e.type==="wall_socket";return m`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${t.x}px;top:${t.y}px">
        <span>${e.name||Y(n,e.type)}</span>
        ${Ge(e).map((a,s)=>{let l=a.entity&&a.entity!=="none"?a.entity:null,c=l?n.states[l]:void 0,d=a.power&&a.power!=="none"?vt(n.states[a.power]):null,u=`${i?"\u{1F50C}":"\u25AD"} ${s+1} \xB7 ${l?O(n,l):"\u2013"}`;return m`<button class="fp3d-chip ${c&&wt(c)?"fp3d-gang-on":""}" ?disabled=${!l||(c?J(c):!0)}
            @click=${async()=>{!l||!await this.confirmFor(l)||en(n,l)}}>${u}${c?m` <small>${nt(n,c)}${d!==null?` \xB7 ${U(n,Math.max(0,d))}`:""}</small>`:w}</button>`})}
      </div>`}householdState(t,n,e){let i=l=>{let c=parseInt(l.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]};if(e.type==="waste_bin"){let l=typeof e.bin_source=="string"&&e.bin_source!=="none"?e.bin_source:null,c=l?fo(e,t,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until}):null,d=this.furnish?null:ks(e,!!c?.glow,cn(e,t));d?.kerb&&this.binSpots.set(e.id,d.at);let[u,h]=d?.at??[e.x,e.z];if(!c||!l)return null;let f=c.days===0?k(t,"bin_today"):c.days===1?k(t,"bin_tomorrow"):k(t,"bin_in_days",{n:c.days}),v=i(vs(e)[1]),y=Math.max(...v),p=y-Math.min(...v)<.12?[.92,.95,1]:v.map(H=>Math.min(1,H/Math.max(.001,y)*1.05)),_=e.name||k(t,`bin_kind_${e.bin_kind??"rest"}`),$=cn(e,t),P=`#${p.map(H=>Math.round(H*255).toString(16).padStart(2,"0")).join("")}`,D=$?k(t,"bin_out_done"):f;return this.binHolos.push({id:e.id,floorId:n.id,x:u,z:h,y:X(n,e)+e.h,r:Math.max(e.w,e.d)/2,name:_,color:P,when:D,soon:c.days<=1&&!$,days:c.days,out:$}),d?.cue&&this.binCues.push({floorId:n.id,from:[e.x,e.z],to:d.cue,skip:Math.max(e.w,e.d)/2+.1,color:P}),{item:c.days<=1?{icon:$?"check-circle-outline":"trash-can-outline",text:`${_}: ${D}`,entity:l,hot:c.glow&&!$}:void 0}}if(e.type!=="mailbox"){let l=mo(e,t),c=[1,.55,.12],d=e.name||Y(t,e.type);return l?(this.binHolos.push({id:e.id,floorId:n.id,x:e.x,z:e.z,y:X(n,e)+e.h,r:Math.max(e.w,e.d)/2,name:d,color:"#ff8c1f",when:k(t,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:c,level:.9,faces:[{part:"band",color:c,level:.9}]},item:{icon:"watering-can-outline",text:k(t,"hh_plant",{name:d}),entity:e.moisture??null,hot:!0}}):null}let o=typeof e.entity=="string"&&e.entity!=="none"?e.entity:null;if(!o)return null;let a=Is(e,t),s=[1,.62,.15];return a&&this.binHolos.push({id:e.id,floorId:n.id,x:e.x,z:e.z,y:X(n,e)+e.h,r:Math.max(e.w,e.d)/2,name:e.name||Y(t,e.type),color:"#ffb547",when:k(t,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:a?{color:s,level:1,faces:[{part:"top",color:s,level:1},{part:"band",color:s,level:.8}]}:void 0,item:a?{icon:"email-alert-outline",text:e.name?`${e.name}: ${k(t,"mailbox_post")}`:k(t,"mailbox_post"),entity:o,hot:!0}:void 0}}robotPaths(t,n){let e=this.replay;if(!e)return[];let i=[];for(let o of n.floors){let a=o.rooms.filter(s=>s.points.length>=3);for(let s of o.furniture){if(!Bn(s.type))continue;let l=this.furnitureLinks?.get(s.id)?.entity??null;if(!l)continue;let c=e.robotRooms(l,Me(t,l,s.room_sensor)),d=[];for(let u of c){let h=Yi(t,a,u),f=h?Pt(h.points):null,v=d[d.length-1];f&&(!v||v[0]!==f[0]||v[1]!==f[1])&&d.push([f[0],f[1]])}d.length&&i.push({floorId:o.id,points:d})}}return i}trailNow(t,n){let e=this.now(),i=He(t,n),o=this.replay?this.replay.rows(i.map(s=>s.entity),e-ze,e):this.trailRows,a=i.map(s=>{let l=t.states[s.entity];return{entity:s.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return Xs(i,Ys(o,a,e),e)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,!this.trail||this.replay){this.trailRows={},this.syncDevices(!0);return}let t=async()=>{let n=this.hass,e=this.building;if(!n||!e||document.hidden)return;let i=He(n,e).map(o=>o.entity);if(i.length){try{let o=await n.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-ze).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=o??{}}catch{this.trailRows={}}this.syncDevices(!0)}};t(),this.trailTimer=setInterval(()=>{t()},6e4)}projecting=!1;projectedCameras(t,n){let e=[];if(sr()){let i=new Set(n.floors.flatMap(o=>o.placements.map(a=>a.entity_id)).filter(o=>L(o)==="camera"));for(let o of i){let a=t.states[o],s=a?.attributes.entity_picture;!s||J(a)||e.push({id:o,url:s.startsWith("data:")?s:`${s}${s.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=e.length>0,e}watchCameras(t){t&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!t&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(t){if(/^https?:\/\//.test(t))return t;if(t.startsWith("camera:")){let n=this.hass.states[t.slice(7)],e=n?.attributes.entity_picture;return!e||J(n)?null:(this.cameraScreens++,e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(t)?this.pictureUrls.get(t)??null:(this.pictureUrls.set(t,null),pi(this.hass,t,this.home).then(n=>{this.pictureUrls.set(t,n),this.syncDevices(!0)},()=>{}),null)}robotObstacles(t,n){let e=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return t.furniture.filter(i=>{if(e.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||X(t,i)>.12)return!1;let o=$t(i.type);return o&&(o.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:G([i.x,i.z],n)||_e(i).some(a=>G(a,n))}).map(i=>_e(i))}robotInfos(t,n){let e=[];for(let i of n.floors)for(let o of i.furniture){if(!Bn(o.type))continue;let a=this.furnitureLinks.get(o.id)?.entity??null,s=a?t.states[a]?.state:void 0,l=Di(s)?"cleaning":s==="returning"?"returning":s==="error"?"error":s==="docked"||!s?"docked":"idle",c=o.rotation*Math.PI/180,d=Ue(o.type),u=o.d*(d?mi($t(o.type)):.14),h=[o.x-Math.sin(c)*u,o.z+Math.cos(c)*u],f=i.rooms.filter(p=>p.points.length>=3),y=(l==="cleaning"?Ji(t,f,a,Me(t,a,o.room_sensor)):null)??f.find(p=>G(h,p.points)),b=l==="cleaning"&&y?this.robotObstacles(i,y.points):[];e.push({id:o.id,floorId:i.id,rest:h,restHeading:-c,mode:l,room:y?.points??null,roomId:y?.id??null,obstacles:b,...d?{model:{type:o.type,w:o.w,d:o.d,h:o.h}}:{}})}return e}batteryText(t,n,e){let i=n?Number(t.states[n]?.state):Number.NaN,o=[];return Number.isFinite(i)&&o.push(`${K(t,i,0)} %`),e!==null&&Math.abs(e)>=10&&o.push(`${e<0?"\u25B2":"\u25BC"} ${U(t,Math.abs(e))}`),o.join(" \xB7 ")}meterText(t,n){return n===null?"":Math.abs(n)<5?U(t,0):`${k(t,n<0?"energy_grid_export":"energy_grid_import")} ${U(t,Math.abs(n))}`}wallboxText(t,n,e){let i=n?t.states[n]:void 0,o=String(i?.state??"").toLowerCase(),a=(e??0)>50||/charg|laden|lädt/.test(o),s=i?.entity_id.startsWith("binary_sensor.")?o==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(o),l=a?k(t,"wallbox_charging"):s?k(t,"wallbox_plugged"):i&&!J(i)&&!i.entity_id.startsWith("binary_sensor.")?nt(t,i):"",c=e!==null&&e>50?U(t,e):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(t,n){let e=[],i=n.state_entity&&n.state_entity!=="none"&&n.state_entity2&&n.state_entity2!=="none"?[[n.state_entity,n.state_split==="top_bottom"?"bottom":"left"],[n.state_entity2,n.state_split==="top_bottom"?"top":"right"]]:[[n.state_entity,"all"]];for(let[o,a]of i){if(!o||o==="none")continue;let s=t.states[o];if(!s||J(s)||!(wt(s)||s.state==="home"||s.state==="occupied"||s.state==="on"))continue;let c=L(o)==="light"?qt(s):null;e.push({part:a,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return e}carText(t,n,e){let i=a=>k(t,a);if(e||n.away!==null){let a=n.away?` \xB7 ${n.away}`:"";return`${i("car_away")}${a}`}let o=[];return n.soc!==null&&o.push(`${K(t,n.soc,0)} %`),n.range!==null&&o.push(`${K(t,n.range,0)} ${n.rangeUnit}`),n.charging?o.push(n.chargingW!==null?`\u26A1 ${U(t,n.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):n.plugged&&o.push("\u{1F50C}"),n.locked!==null&&o.push(n.locked?"\u{1F512}":"\u{1F513}"),o.join(" \xB7 ")}ceilingAt(t,n,e){let o=t.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&G([n,e],l.points))?.ceiling_height||t.height,a=this.building;if(!a||!Pr(a).some(l=>Er(l,t.elevation+o)&&Ar(l,t.elevation)))return o;let s=Rr(a,n,e,t.elevation);return s===null?o:Math.max(.5,Math.min(o,s-t.elevation))}lampMarker(t,n,e,i){let o=i?t.states[i]:void 0,a=$t(e.type),s=Ri[e.type]??a?.light??"floor",l=n.rooms.some(_=>_.points.length>=3&&G([e.x,e.z],_.points)),c=s==="strip"&&!l?we(n,e.x,e.z)+(e.mount_y??0):e.mount_y!=null&&!a?e.mount_y:a||s==="wall"||s==="strip"?X(n,e):s==="table"?jn(n,e.x,e.z,e.h):s==="bollard"||s==="garden"?we(n,e.x,e.z):0,d=n.rooms.find(_=>_.points.length>=3&&G([e.x,e.z],_.points)),u=this.ceilingAt(n,e.x,e.z),h=(a?a.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(s))&&e.mount_y==null,f=h?n.height-u:0,v=a&&h?Math.max(0,c-f):c,y=Si.has(e.type)&&e.mount_y!=null?Math.min(n.height,e.mount_y+Mi(e.type,e.h)):Math.abs(f)>.01?u:void 0,b=y??n.height,p=a?a.mount==="ceiling"?Math.max(.5,v-.15):v+e.h+.2:{ceiling:b-.3,downlight:b-.25,spot:b-.35,panel:b-.25,pendant:Math.max(.6,b-e.h-.25),fan:Math.max(.6,b-e.h-.25),floor:v+e.h+.25,uplight:v+e.h+.25,table:v+e.h+.2,wall:v+e.h+.2,strip:e.upright?v+e.w+.15:Math.max(.3,v-.2),bollard:v+e.h+.25,garden:v+e.h+.25}[s];return{id:i??`lamp:${e.id}`,floorId:n.id,roomId:d?.id??null,x:e.x,z:e.z,y:p,icon:Te("light"),name:e.name||(i?O(t,i):Y(t,e.type)),text:o?nt(t,o):"",active:o?wt(o):!1,unavailable:o?J(o):!1,glow:o?Sr(Ni(qt(o,e.color_entity&&e.color_entity!=="none"?t.states[e.color_entity]:void 0),e.only_color),e.glow_scale):null,lamp:s,rotation:e.rotation,mirror:!!e.mirror,colors:e.colors,materials:e.materials,roll:e.tilt??0,upright:!!e.upright,rise:e.rise??0,fanSpeed:s==="fan"?Yn(e.fan&&e.fan!=="none"?t.states[e.fan]:void 0):void 0,size:[e.w,e.d,e.h],base:v,top:y,pickable:!!i,furnitureId:e.id,pack:a?e.type:null,lightY:a?a.mount==="ceiling"?v:v+e.h*.85:void 0,effect:!!o&&o.state==="on"&&typeof o.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(o.attributes.effect.trim()),variant:e.variant,show:e.marker??void 0,fromFurniture:!0}}inOpenRoom(t){if(!this.roomId)return!1;if(t.roomId)return t.roomId===this.roomId;let n=this.building?.floors.find(i=>i.id===t.floorId),e=n?Mt(n).find(i=>i.id===this.roomId):void 0;return!!e&&G([t.x,t.z],e.points)}showPin(t){if(this.furnish&&!t.fromFurniture)return!0;if(t.show==="never"||this.markerMode==="none")return!1;if(t.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(t);if(t.lamp||t.model)return!1;let n=L(t.id);return n==="light"?!1:t.fromFurniture?(t.power??0)>=1||n==="media"&&t.active||!!t.energyDevice&&!!t.text:!0}openingTargets(){let t=new Map;for(let[n,e]of this.openingLinks??[]){if(e.lock&&!e.cover||Bi(e.cover)){t.set(n,`opening:${n}`);continue}let i=e.cover??e.contact??e.tilt;i&&t.set(n,i)}return t}scheduleThumbs(t=600){clearTimeout(this.thumbTimer);let n=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||n<2){this._thumbs=[];return}let e=Math.max(t,this.thumbsAt+(this._low?8e3:4e3)-Date.now()),i=()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}if(this.viewer.busy()){this.thumbTimer=setTimeout(i,300);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}};this.thumbTimer=setTimeout(i,e)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return w;let t=new Map(this.building.floors.map(o=>[o.id,o.name])),n=[...this._thumbs].sort((o,a)=>(this.building.floors.find(s=>s.id===a.floorId)?.elevation??0)-(this.building.floors.find(s=>s.id===o.floorId)?.elevation??0)),e=this._thumbsCompact,i=()=>{this._thumbsCompact=!e,this.thumbsSaved=this._thumbsCompact?"1":"0";try{localStorage.setItem("home3d.thumbs_compact",this.thumbsSaved)}catch{}};return m`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${e?"fp3d-thumbs-compact":""}" aria-label=${k(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${k(this.hass,e?"thumbs_show":"thumbs_fold")} aria-label=${k(this.hass,e?"thumbs_show":"thumbs_fold")} @click=${i}>${e?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${k(this.hass,"all_floors")}</span>
      </button>
      ${n.map(o=>m`<button class="fp3d-thumb" aria-pressed=${this.floorId===o.floorId} @click=${()=>this.fire("floor-tap",{floorId:o.floorId})}>
          ${e?w:m`<img src=${o.url} alt="" />`}
          <span>${t.get(o.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(t,n,e){let i=this.ro?null:sn(this.actionOwners.get(t),"hold");if(i)return this.runOwnAction(i,this.actionOwners.get(t),n,e);if(t.startsWith("item:"))return;if(t.startsWith("opening:"))return this.onOpeningTap(t.slice(8),n,e,!0);if(t.startsWith("gangs:")){let a=this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===t.slice(6)),s=a?Je(a):[];s.length===1?this.onDeviceHold(s[0],n,e):this.onDeviceTap(t,n,e);return}if(this.ro){this.onDeviceTap(t,n,e);return}if(this.hass&&this.building)for(let a of this.building.floors)for(let s of a.furniture){if(s.type!=="parking"||!s.car)continue;let l=Se(this.hass,s);if([s.entity,s.car.device,...Object.values(l.entities)].filter(d=>!!d&&d!=="none").includes(t)){this._menu={entity:t,x:n,y:e,car:l};return}}let o=Ks(t);o?gt(this,o):this.onDeviceTap(t,n,e)}onDeviceSwipe(t,n,e,i,o){let a=this.hass?.states[t];if(this.ro)return!1;if(n==="start"){if(!a||J(a)||this.confirmSet.has(t))return!1;let l=L(t);if(l==="light"&&Po(a).dim){let c=a.state==="on"?typeof a.attributes.brightness=="number"?Math.round(a.attributes.brightness/2.55):100:0;return this._swipe={entity:t,kind:"light",start:c,value:c,x:i,y:o},!0}if(l==="cover"&&Eo(a)){let c=a.attributes.current_position;return this._swipe={entity:t,kind:"cover",start:c,value:c,x:i,y:o},!0}return!1}let s=this._swipe;if(!s||s.entity!==t)return!1;if(n==="move"){let l=Math.round(Math.min(100,Math.max(0,s.start-e/220*100)));l!==s.value&&(this._swipe={...s,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let t=this._swipe;!t||!this.hass||(t.kind==="light"?t.value<=0?te(this.hass,"light","turn_off",{entity_id:t.entity}):te(this.hass,"light","turn_on",{entity_id:t.entity,brightness_pct:t.value}):te(this.hass,"cover","set_cover_position",{entity_id:t.entity,position:t.value}))}goTo(t){if(this._find=null,t.kind==="room"){this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId});return}this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),setTimeout(()=>this.viewer?.focus(t.floorId,t.x,t.z,t.y,t.entity),120)}renderBinInfo(){let t=this._binInfo,n=this.hass,e=t&&this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===t.furnitureId);if(!t||!n||!e)return w;let i=xs(e,n,this.pickups),o=new Date;o.setHours(0,0,0,0);let a=d=>{let u=Math.round((d.getTime()-o.getTime())/864e5);return u===0?k(n,"bin_today"):u===1?k(n,"bin_tomorrow"):d.toLocaleDateString(n.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},s=e.name||k(n,`bin_kind_${e.bin_kind??"rest"}`),l=cn(e,n),c=d=>{d.stopPropagation(),typeof e.bin_out=="string"&&en(n,e.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return m`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${t.x}px;top:${t.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${s}</span>
      ${i.length?i.map(d=>m`<b>${a(d.day)}${d.summary&&d.summary!==s?m` <small>· ${d.summary}</small>`:w}</b>`):m`<b>${k(n,"bin_none")}</b>`}
      ${_s(e)&&!this.ro?m`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${c}>${l?k(n,"bin_out_done"):k(n,"bin_out_mark")}</button>`:l?m`<small>${k(n,"bin_out_done")}</small>`:w}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||this.panelOpen)return w;let t=()=>{this._hhFolded=!this._hhFolded,Hd("home3d.hhFolded",this._hhFolded)};return m`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${t}>🏠 ${k(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?w:this._household.map(n=>m`<button class="fp3d-hh-row ${n.hot?"fp3d-hh-hot":""}" ?disabled=${!n.entity} @click=${()=>n.entity&&(this.ro?this.showInfo(n.entity,0,0):gt(this,n.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${n.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${n.text}</span>
            </button>`)}
    </div>`}renderClock(){let t=this.clock;if(!t||t==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),w;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let n=new Date(this.now()),e=(this.hass.language||"en").replace("_","-"),i=this.hass.config?.time_zone,o=a=>{try{return n.toLocaleString(e,i?{...a,timeZone:i}:a)}catch{return n.toLocaleString(e,a)}};return m`<div class="fp3d-clock fp3d-clock-${t}" aria-hidden="true"><b>${o({hour:"2-digit",minute:"2-digit"})}</b><span>${o({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let t=this.building;if(!this._alerts.length||!t)return w;let n=this._alerts.slice(0,3),e=this.mayEdit,i=o=>k(this.hass,o);return m`<div class="fp3d-alert-banner" role="alert">
      ${n.map(o=>{let a=ht(o),s=e&&this._dismissing===a;return m`<span class="fp3d-alert-item ${e?"fp3d-alert-dismissable":""}">
          <button class="fp3d-alert fp3d-alert-${o.kind}" title=${xo(this.hass,t,o)} @click=${()=>this.jumpTo(o)}>${xo(this.hass,t,o)}</button>
          ${e?m`<button class="fp3d-alert-x" title=${i("alert_dismiss")} aria-label=${i("alert_dismiss")} aria-expanded=${s?"true":"false"} @click=${()=>this._dismissing=s?null:a}>✕</button>`:w}
          ${s?m`<div class="fp3d-alert-menu" role="menu">
                <button role="menuitem" title=${i("alert_dismiss_now_hint")} @click=${()=>this.dismiss(o,!1)}>${i("alert_dismiss_now")}</button>
                ${hn(o.kind)?m`<button role="menuitem" title=${i("alert_dismiss_good_hint")} @click=${()=>this.dismiss(o,!0)}>${i("alert_dismiss_good")}</button>`:m`<small>${i("alert_dismiss_safety")}</small>`}
              </div>`:w}
        </span>`})}
      ${this._alerts.length>3?m`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:w}
    </div>`}renderScenes(){let t=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!t||!this.hass||this.ro)return w;let n=t.floors.flatMap(o=>Mt(o)).find(o=>o.id===this.roomId),e=n?xt(this.hass,n.area_id).filter(o=>L(o)==="scene"||L(o)==="script").slice(0,6):[];if(!e.length)return w;let i=n?.area_id?this.hass.areas?.[n.area_id]?.name:void 0;return m`<div class="fp3d-scenes">
      ${e.map(o=>m`<button class="fp3d-chip" aria-pressed=${this._sceneFired===o} @click=${()=>this.runScene(o)}>${O(this.hass,o,i)}</button>`)}
    </div>`}async syncPets(){let t=this.building,n=this.viewer,e=t?.settings.pets?.on!==!1&&this.petsOn!==!1,i=e?t?.settings.pets?.list??[]:[],o=e&&!!t?.floors.some(a=>a.furniture.some(s=>/:aquarium(_large)?$/.test(s.type)));if(!n||!t||this.plan2d||!i.length&&!o){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==t&&(this.petsFor=t,this.pets.update(t,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[a,s,l]=await Promise.all([Ro(),xn(),al()]);if(!this.viewer||this.plan2d||this.pets)return;this.petsFor=this.building,this.pets=a.startPets({lib:s.funLib,FloorMap:l.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(c,d)=>X(c,d),surface:(c,d,u)=>jn(c,d,u),closedDoors:()=>{let c=new Set,d=this.hass?.states??{};for(let u of this.building?.floors??[])for(let h of u.openings)h.type==="door"&&h.contact&&d[h.contact]?.state==="off"&&c.add(h.id);return c}})}catch(a){console.error("Home 3D: the pets failed to load",a)}finally{this.petsLoading=!1}}}async syncGhost(){let t=this.building,n=!!t&&t.settings.easter_eggs!==!1&&t.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||this.plan2d||!n){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(t);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[e,i]=await Promise.all([Ro(),xn()]);if(!this.viewer||this.plan2d||this.ghost||!this.building)return;this.ghost=e.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(e){console.error("Home 3D: the ghost failed to load",e)}finally{this.ghostLoading=!1}}}async startWalk(){let t=this.building,n=this.viewer;if(!t||!n||this._walk||this.plan2d)return;let e=t.floors.filter(u=>u.rooms.some(h=>h.points.length>=3)),o=(this.roomId?e.find(u=>u.rooms.some(h=>h.id===this.roomId)):void 0)??e.find(u=>u.id===this.floorId)??[...e].sort((u,h)=>Math.abs(u.elevation)-Math.abs(h.elevation))[0];if(!o)return;let a=await al();this._walk={room:null,hint:!0},await this.updateComplete;let s=this.renderRoot.querySelector(".fp3d-walk-surface");if(!s)return;n.setFloor(o.id,!1),n.setWallMode("auto");let l=new a.FloorMap(t,o),c=this.roomId?o.rooms.find(u=>u.id===this.roomId):void 0,d;if(c){let u=l.freeNear(Pt(c.points));d={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new a.WalkCamera(n,l,s,{start:d,onRoom:u=>{this.walkRoomPts=u?.points??null,this._walk&&(this._walk={...this._walk,room:u?.name??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let t=this.viewer;t&&(t.setWallMode(this.wallMode),t.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||this.plan2d||!this.building||!this.hass)return w;let t=o=>k(this.hass,o);if(!this._walk)return m`<button class="fp3d-walk-btn" title=${t("walk_start")} aria-label=${t("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span class="fp3d-walk-label">${t("walk_title")}</span>
      </button>`;let n=this._walk,e=null,i=(o,a)=>{if(!e)return;let s=44,l=o.clientX-e.cx,c=o.clientY-e.cy,d=Math.hypot(l,c);d>s&&([l,c]=[l/d*s,c/d*s]),a.firstElementChild.style.transform=`translate(${l}px, ${c}px)`,this.walker?.setStick({x:l/s,y:c/s})};return m`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${n.room??t("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${t("walk_end")}</button>
      </div>
      ${n.hint?m`<div class="fp3d-walk-hint">${t("walk_hint")}</div>`:w}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${o=>{let a=o.currentTarget,s=a.getBoundingClientRect();e={id:o.pointerId,cx:s.left+s.width/2,cy:s.top+s.height/2},a.setPointerCapture(o.pointerId),i(o,a)}}
        @pointermove=${o=>i(o,o.currentTarget)}
        @pointerup=${o=>{e=null,o.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${o=>{e=null,o.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let t=this.building;if(!t||!this.hass)return w;if(this._find===null)return m`<button class="fp3d-find-btn" title=${k(this.hass,"find")} aria-label=${k(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let n=ia(this.findIndex??=yn(this.hass,t),this._find);return m`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${k(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${e=>this._find=e.target.value}
        @keydown=${e=>{e.key==="Escape"&&(this._find=null),e.key==="Enter"&&n[0]&&this.goTo(n[0])}}
      />
      <button class="fp3d-find-close" aria-label=${k(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?m`<div class="fp3d-find-list">
            ${n.length?n.map(e=>m`<button @click=${()=>this.goTo(e)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${e.icon?fr(e.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${e.name}</b>${e.where?m`<small>${e.where}</small>`:w}</span>
                  </button>`):m`<p>${k(this.hass,"find_none")}</p>`}
          </div>`:w}
    </div>`}renderCentral(){let t=this.building,n=this.hass;if(!t||!n||!this.central||this._find!==null||this.ro)return w;let e=(b,p)=>k(n,b,p),i=m`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${e("central")}
      aria-label=${e("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let o=this.floorId?t.floors.find(b=>b.id===this.floorId):void 0,a=o?[o]:t.floors,s=a.flatMap(b=>Zn(n,b).lights),l=a.flatMap(b=>Zn(n,b).covers),c=s.filter(b=>n.states[b]?.state==="on").length,d=!o,u=(b,p,_,$)=>{if($.length){if(d&&this._armed!==b){this._armed=b,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,this.confirmForAll($).then(P=>P&&n.callService(p,_,{entity_id:$}))}},h=(b,p,_,$,P)=>m`<button class="fp3d-btn ${this._armed===b?"fp3d-central-armed":""}" ?disabled=${!P.length} @click=${()=>u(b,_,$,P)}>
        ${this._armed===b?e("central_sure"):e(p)}
      </button>`,f=(t.settings.favorites??[]).filter(b=>n.states[b]),v=this.buttons??t.settings.buttons??[],y=Jt()?Mo(this.sceneHost(n,t)):[];return m`${i}
      <div class="fp3d-central" role="dialog" aria-label=${e("central")}>
        <div class="fp3d-central-top">
          <b>${o?o.name:e("central_house")}</b>
          ${this.noSettings?w:m`<button class="fp3d-btn fp3d-central-gear" title=${e("view_settings")} aria-label=${e("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${e("view_settings")}</button>`}
        </div>
        ${y.length?m`<div class="fp3d-central-favs">
              ${y.map(b=>m`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:b.id,floorId:null,roomId:null}}}><span aria-hidden="true">${b.icon}</span> ${b.title}</button>`)}
            </div>`:w}
        <div class="fp3d-central-row">
          <span>${e("central_lights")}${s.length?m` <small>${c}/${s.length}</small>`:w}</span>
          ${h("lights_on","central_on","light","turn_on",s.filter(b=>n.states[b]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",s.filter(b=>n.states[b]?.state==="on"))}
        </div>
        ${l.length?m`<div class="fp3d-central-row">
              <span>${e("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
            </div>`:w}
        <b>${e("central_favorites")}</b>
        ${f.length?m`<div class="fp3d-central-favs">
              ${f.map(b=>{let[p,_]=Xi(b),$=n.states[b],P=p==="homeassistant"&&$?.state==="on";return m`<button
                  class="fp3d-chip"
                  aria-pressed=${P||this._sceneFired===b}
                  ?disabled=${J($)}
                  @click=${()=>{te(n,p,_,{entity_id:b}),this._sceneFired=b,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${O(n,b)}
                </button>`})}
            </div>`:v.length?w:m`<p class="fp3d-central-hint">${e("central_no_favorites")}</p>`}
        ${v.length?m`<div class="fp3d-central-favs">
              ${v.map(b=>m`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Rd(n,b)}
                  @click=${p=>{Zi(n,p.currentTarget,b),b.action!=="service"&&(this._central=!1)}}
                >
                  ${b.icon?m`<ha-icon .icon=${b.icon.startsWith("mdi:")?b.icon:`mdi:${b.icon}`}></ha-icon>`:w}${b.label}
                </button>`)}
            </div>`:w}
      </div>`}mediaCardUp(t,n){let e=t.states[n];if(!e||L(n)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(n)?.until??0)>Date.now()&&J(e))return!0;let i=[e.attributes.media_title,e.attributes.app_name,e.attributes.source].some(o=>typeof o=="string"&&!!o.trim());return!J(e)&&(e.state==="playing"||e.state==="paused"&&i&&this.pausedRecently(e))}pausedRecently(t){let n=Date.parse(t.last_changed??"");if(!Number.isFinite(n))return!0;let e=n+Pd-Date.now();if(e<=0)return!1;let i=Date.now()+e+500;return(!this.pausedTimer||i<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=i,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},e+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return w;let t=k(this.hass,this.clean?"controls_show":"controls_hide");return m`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${t}
      aria-label=${t}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Tt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Tt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let t=this.hass;if(!this.voice||!t||this.ro||this._walk)return w;let n=this._voice,e=n?.phase==="wait"||n?.phase==="listen",i=k(t,"voice_button"),o=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return m`<button class="fp3d-mic ${n?.phase==="listen"?"fp3d-mic-on":""}" style="left:${o}px" title=${i} aria-label=${i} ?disabled=${e} @click=${()=>{this.onMic()}}>
        ${Tt`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${n?m`<div class="fp3d-mic-say ${n.phase==="error"?"fp3d-mic-err":""}" style="left:${o}px">${n.text}</div>`:w}`}sayVoice(t,n){this._voice={phase:t,text:n},clearTimeout(this.voiceTimer),(t==="done"||t==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,t==="error"?9e3:6e3))}async onAsk(t){let n=this.hass,e=this.building;if(!n||!e)return;let i=(this.screen??"").trim().toLowerCase();if(t.screen&&t.screen.trim().toLowerCase()!==i)return;if(t.show_rooms){(!t.admins_only||n.user?.is_admin)&&this.showRooms(e,t.show_rooms);return}let o=null;try{let a=await Ae();o=await this.handleSentence(n,e,a,t.text,t.speak),o===null&&this.sayVoice("error",k(n,"voice_none"))}catch(a){this.sayVoice("error",k(n,"voice_error",{msg:String(a?.message??a)}))}try{await ui(n,t.ask_id,o??"",o!==null)}catch{}}async onMic(){let t=this.hass,n=this.building;if(!t||!n||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let e=(o,a)=>this.sayVoice(o,a);e("wait","\u2026"),this.tourToken++;let i;try{let o=window.AudioContext??window.webkitAudioContext;i=new o,i.resume()}catch{i=void 0}try{let o=await Ae(),a=await o.listenOnce(t,()=>e("listen",k(t,"voice_listen")),Kt(),i);if(!a){e("error",k(t,"voice_none"));return}if(await this.handleSentence(t,n,o,a,!0)!==null)return;e("wait",`\u201C${a}\u201D \u2026`);let s=await o.converse(t,a);e("done",s?`\u201C${a}\u201D \u2013 ${s}`:`\u201C${a}\u201D`)}catch(o){let a=o,s=a?.message==="no_pipeline"?"voice_no_pipeline":a?.message==="silent"?"voice_silent":a?.name==="NotAllowedError"||a?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;e("error",s?k(t,s):k(t,"voice_error",{msg:String(a?.message??a?.name??o)}))}}async handleSentence(t,n,e,i,o){let a=(y,b)=>this.sayVoice(y,b),{devices:s,items:l}=this.spokenDevices(t,n,e.SYNONYMS),c=e.showTarget(i,n,s,y=>y.area_id?t.areas?.[y.area_id]?.name:null);if(c){let y=c.kind==="house"?k(t,"all_floors"):c.kind==="cameras"?k(t,"camera_wall_title"):c.name;if(a("done",`\u201C${i}\u201D \u2192 ${y}`),this.directing.touch(Date.now()),c.kind==="cameras")this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}));else if(c.kind==="device"){let b=l.get(c.id);c.camera&&c.entity?this.lookThrough(c.entity):b&&this.goTo(b)}else c.kind==="house"?this.fire("floor-tap",{floorId:null}):c.kind==="floor"?this.fire("floor-tap",{floorId:c.floorId}):(this.floorId!==c.floorId&&this.fire("floor-tap",{floorId:c.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),60));return k(t,"voice_showing",{name:y})}let d=this.spokenRacks(t,n),u=d.length?e.rackAnswer(i,d,(y,b)=>k(t,y,b)):null;if(u){a("done",`\u201C${i}\u201D \u2013 ${u.text}`),this.directing.touch(Date.now());let y=l.get(`furniture:${u.rackId}`);return y&&this.goTo(y),o&&e.speak(t,u.text,Kt()),u.text}let h=await t.callWS({type:"home_3d/locate/ask",text:i,language:t.language}).catch(()=>null);if(h)return a("done",`\u201C${i}\u201D \u2013 ${h.text}`),h.rooms.length&&(!h.admins_only||t.user?.is_admin)&&this.showRooms(n,h.rooms),o&&e.speak(t,h.text,Kt()),h.text;let f=this.moduleHost(t,n,e.SYNONYMS,y=>e.showTarget(y,n,s,b=>b.area_id?t.areas?.[b.area_id]?.name:null)),v=await ra(i,f);if(v){a("done",v.text?`\u201C${i}\u201D \u2013 ${v.text}`:`\u201C${i}\u201D`),this.directing.touch(Date.now()),v.highlight?.length&&this.viewer?.flashDevices(v.highlight);let y=v.focus,b=v.spoken??v.text??"";if(v.tour?.length){let p=o&&v.speak!==!1?$=>e.speak(t,$,Kt()):null,_=v.spoken??v.text;return _&&p&&await p(_),this.runTour(v.tour,n,l,p),b}if(y?.roomId&&y.floorId)this.floorId!==y.floorId&&this.fire("floor-tap",{floorId:y.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:y.floorId,roomId:y.roomId}),60);else if(y?.floorId&&!y.entity&&!y.furnitureId)this.fire("floor-tap",{floorId:y.floorId});else if(y?.entity||y?.furnitureId){let p=l.get(y.entity??`furniture:${y.furnitureId}`);p&&this.goTo(p)}return v.text&&v.speak!==!1&&o&&e.speak(t,v.text,Kt()),b}return null}spokenDevices(t,n,e){let i=this.findIndex??=yn(t,n),o=new Map(n.floors.flatMap(u=>Mt(u).map(h=>[h.id,h.name]))),a=[],s=[],l=new Map;for(let u of i)u.kind==="device"&&u.entity&&l.set(u.entity,u);let c=new Set;for(let u of n.floors){let h=Mt(u);for(let f of u.furniture){if(Fd.has(f.type))continue;let v=this.furnitureLinks.get(f.id),y=v?.entity??v?.power??null,b=y??`furniture:${f.id}`,p=h.find(R=>R.points.length>=3&&G([f.x,f.z],R.points)),_=Y(t,f.type),$=[f.name,...f.aliases??[],_,y?O(t,y):null,...e[f.type]??[]].filter(R=>!!R),P=f.name||(y?O(t,y):_);a.push({id:b,entity:y,name:P,names:$,room:p?.name??"",camera:!!y&&L(y)==="camera"});let D=(f.type==="plant"||uo(f.type))&&!!f.moisture&&f.moisture!=="none",H=vo(v?.entity?t.states[v.entity]:void 0,v?.power?vt(t.states[v.power]):null,typeof f.run_w=="number"&&f.run_w>0?f.run_w:10),B=typeof f.remaining=="string"&&f.remaining!=="none"&&!H?go(t.states[f.remaining]):null;s.push({id:b,entity:y,name:P,names:$,room:p?.name??"",floorId:u.id,roomId:p?.id??null,power:v?.power??null,type:f.type,remaining:B,thirsty:D?mo(f,t):null}),y?c.add(y):l.set(b,{kind:"device",name:P,where:"",floorId:u.id,roomId:p?.id??null,entity:null,icon:null,x:f.x,z:f.z,y:Math.min(u.height-.3,Math.max(.5,f.h))})}}let d=new Map(n.floors.flatMap(u=>u.placements.map(h=>[h.entity_id,h])));for(let[u,h]of l){if(c.has(u)||u.startsWith("furniture:"))continue;let f=h.roomId&&o.get(h.roomId)||"",v=d.get(u),y=[v?.name,...v?.aliases??[],h.name].filter(b=>!!b);a.push({id:u,entity:u,name:h.name,names:y,room:f,camera:L(u)==="camera"}),s.push({id:u,entity:u,name:h.name,names:y,room:f,floorId:h.floorId,roomId:h.roomId,power:null,type:"device"})}return{devices:a,items:l,spoken:s}}lockMarkers(t,n){let e=[];for(let i of n.floors)for(let o of i.openings){let a=this.openingLinks?.get(o.id)?.lock;if(!a)continue;let s=this.openingSpot(n,o.id,!0);if(!s)continue;let l=t.states[a];e.push({id:a,floorId:i.id,roomId:o.room_id,x:s.x,z:s.z,y:Math.min(s.y+.35,1.5),icon:Te("lock"),name:O(t,a),text:l?nt(t,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||J(l),glow:null,full:!0,fromFurniture:!1})}return e}openingSpot(t,n,e=!1){for(let i of t.floors){let o=i.openings.find(p=>p.id===n);if(!o)continue;let a=Ir(o,i.rooms,i.walls??[]);if(!a)return null;let s=a.room.points,l=s[a.edge],c=s[(a.edge+1)%s.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[(c[0]-l[0])/d,(c[1]-l[1])/d],f=Ai(s)>0?[-u[1],u[0]]:[u[1],-u[0]],v=o.offset;if(e){let p=u[0]*f[1]-u[1]*f[0]>0;v=o.offset-o.width/2+Pi(o,o.hinge==="left"===p)}let[y,b]=nn(a.room,a.edge,v);return{floorId:i.id,x:y+f[0]*.2,z:b+f[1]*.2,y:Math.max(.5,o.sill+o.height/2),theta:Math.atan2(f[0],f[1])}}return null}async showRooms(t,n){let e=n.map(l=>({roomId:l,floorId:t.floors.find(c=>c.rooms.some(d=>d.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!e.length)return;let i=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let o=this.renderRoot.querySelector(".fp3d-stage"),a=()=>{this.tourToken++,clearTimeout(this.tourTimer)};o?.addEventListener("pointerdown",a,{once:!0});let s=l=>new Promise(c=>this.tourTimer=setTimeout(c,l));for(let[l,c]of e.entries()){if(i!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await s(150)),i!==this.tourToken))break;this.roomId!==c.roomId&&this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),this.directing.touch(Date.now()),l<e.length-1&&await s(4e3)}o?.removeEventListener("pointerdown",a)}async runTour(t,n,e,i){let o=++this.tourToken;clearTimeout(this.tourTimer);let a=t.map(d=>{if(d.openingId){let h=this.openingSpot(n,d.openingId);return h?{...h,entity:null,say:d.say,inside:!0}:null}let u=e.get(d.entity??`furniture:${d.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!a.length)return;let s=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};s?.addEventListener("pointerdown",l,{once:!0});let c=d=>new Promise(u=>this.tourTimer=setTimeout(u,d));for(let d of a){if(o!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await c(150)),o!==this.tourToken)||(this.viewer?.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await c(900),o!==this.tourToken))break;let u=d.say&&i?await i(d.say):!1;if(o!==this.tourToken)break;await c(u?1200:2600)}s?.removeEventListener("pointerdown",l)}spokenOpenings(t,n){let e=[],i=s=>k(t,s);for(let s of n.floors){let l=new Map(Mt(s).map(c=>[c.id,c.name]));for(let c of s.openings){let d=this.openingLinks?.get(c.id);if(!d)continue;let u=c.type==="garage"?"garage":c.type==="door"?"door":"window",h=ae(t,d,c.type),f=h.open>.02||h.open2>.02||c.type==="garage"&&(h.cover??0)>.02,v=!f&&(h.tilt>.02||h.tilt2>.02);for(let y of[d.contact,d.contact2,d.cover,d.tilt,d.tilt2])y&&y!=="none"&&e.push({id:c.id,entity:y,kind:u,name:i(`opening_${c.type}`),room:l.get(c.room_id)??"",floorId:s.id,roomId:c.room_id,open:f,tilted:v})}}let o=n.settings.roof?.windows??[],a=o.length?new Map(zr(n).map(s=>[s.key,s])):null;for(let s of o){let l=ll(t,s),c=l.open>.02,d=!c&&l.tilt>.02,u=[s.window,s.contact,s.cover,s.tilt].filter(b=>!!b&&b!=="none"),h=u.map(b=>Ci(t,b)).filter(b=>!!b).map(b=>n.floors.flatMap(p=>p.rooms.filter(_=>_.area_id===b).map(_=>({floor:p,room:_})))).find(b=>b.length===1)?.[0],f=h?null:Hr(n,a?.get(s.face),s),v=h?.floor??f?.floor??n.floors[n.floors.length-1],y=h?.room??(f?v?.rooms.find(b=>b.id===f.roomId):void 0);for(let b of u)e.push({id:s.id,entity:b,kind:"roof_window",name:s.name||i("roof_window"),room:y?.name??"",floorId:v?.id??"",roomId:y?.id??null,open:c,tilted:d})}return e}sceneHost(t,n){return this.moduleHost(t,n,{},()=>null)}moduleHost(t,n,e,i){let o=null,a=()=>o??=this.spokenDevices(t,n,e).spoken,s={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>t.language||"en",devices:()=>a(),findDevice:l=>{let c=i(l);return c?.kind==="device"&&c.id?a().find(d=>d.id===c.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>this.mayEdit,updateBuilding:l=>this.changePlan(l),callService:(l,c,d)=>this.hass?this.hass.callService(l,c,d):Promise.resolve(),newId:l=>Ei(l),waterLevel:(l,c)=>{let d=this.building?.floors.find(h=>h.id===l),u=d?.outdoor.find(h=>h.id===c);return!d||!u||u.type!=="pool"?null:{y:ke(d,u),floorY:xe(d,u)}},groundAt:(l,c,d)=>{let u=this.building?.floors.find(h=>h.id===l);return u?we(u,c,d):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:jo,openings:()=>this.spokenOpenings(t,n),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:a().find(c=>c.entity===l.id||c.power===l.powerEntity)?.name??O(t,l.id),watts:l.power})).sort((l,c)=>c.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(t,n),cars:()=>this.spokenCars(t,n),pools:()=>ua(s),weather:()=>Ut(t,this.weatherEntityId??n.settings.weather_entity),listen:async l=>{try{return(await(await Ae()).listenOnce(t,l,Kt())).trim()||null}catch{return null}},notify:l=>this.showNote(l),occupied:()=>this.occupiedRooms(t,n),speakers:()=>this.planSpeakers(t,n)};return s}showNote(t){this._note=t,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(t,n){let e=new Map;for(let i of this.lastPersons)i.roomId&&e.set(i.roomId,i);for(let i of n.floors)for(let o of i.rooms){if(e.has(o.id)||!o.area_id)continue;xt(t,o.area_id).some(s=>{let l=t.states[s];return s.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&e.set(o.id,{floorId:i.id,roomId:o.id})}return[...e.values()]}planSpeakers(t,n){let e=[],i=new Set;for(let o of n.floors){let a=(s,l)=>o.rooms.find(c=>c.points.length>=3&&G([s,l],c.points))?.id??null;for(let s of o.placements)!s.entity_id.startsWith("media_player.")||i.has(s.entity_id)||!t.states[s.entity_id]||(i.add(s.entity_id),e.push({entity:s.entity_id,name:O(t,s.entity_id),floorId:o.id,roomId:a(s.x,s.z),at:[s.x,s.z],top:s.y??1.1}));for(let s of o.furniture){let l=s.entity;!l||!l.startsWith("media_player.")||i.has(l)||!t.states[l]||(i.add(l),e.push({entity:l,name:O(t,l),floorId:o.id,roomId:a(s.x,s.z),furnitureId:s.id,at:[s.x,s.z],top:X(o,s)+s.h}))}}return e}roomSheets(t){let n=this.hass,e=this.building;if(!n||!e||this.ro||!Jt())return[];let i=e.floors.find(o=>o.rooms.some(a=>a.id===t));return i?So(this.sceneHost(n,e),{floorId:i.id,roomId:t}).map(o=>({id:o.id,icon:o.icon,title:o.title})):[]}openRoomSheet(t,n){let e=this.building?.floors.find(i=>i.rooms.some(o=>o.id===t));this._sheet={id:n,floorId:e?.id??null,roomId:t}}currentSheet(t,n){let e=this._sheet;if(!e)return null;let i=this.sceneHost(t,n);return(e.roomId&&e.floorId?So(i,{floorId:e.floorId,roomId:e.roomId}):Mo(i)).find(a=>a.id===e.id)??null}renderSheet(){let t=this.hass,n=this.building;if(!t||!n||!this._sheet)return w;let e=this.currentSheet(t,n);if(!e)return w;let i=d=>k(t,d),o=this._sheet.roomId?n.floors.flatMap(d=>d.rooms).find(d=>d.id===this._sheet.roomId):void 0,a=()=>this._sheet=null,s=async d=>{a();try{await d()}catch(u){console.warn("Home 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&e.input&&s(()=>e.input.onSubmit(u))},c=async()=>{let d=this.renderRoot.querySelector(".fp3d-sheet-input");if(!d)return;d.placeholder=i("sheet_listening");let h=await this.sceneHost(t,n).listen?.(()=>d.placeholder=i("sheet_listening"));d.placeholder=e.input?.placeholder??"",h?d.value=h:this.showNote(i("sheet_mic_failed"))};return m`<div class="fp3d-sheet-backdrop" @click=${a}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${e.title}>
        <header>
          <b><span aria-hidden="true">${e.icon}</span> ${e.title}${o?` \xB7 ${o.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${i("close")} @click=${a}>✕</button>
        </header>
        ${e.choice?m`<div class="fp3d-sheet-choice">
              ${e.choice.options.map(d=>m`<button class="fp3d-chip" aria-pressed=${d.id===e.choice.value} @click=${()=>{e.choice.set(d.id),this.requestUpdate()}}>${d.label}</button>`)}
            </div>`:w}
        ${e.chips?.length?m`<div class="fp3d-sheet-chips">${e.chips.map(d=>m`<button class="fp3d-sheet-chip" @click=${()=>{s(()=>d.onTap())}}>${d.label}</button>`)}</div>`:w}
        ${e.input?m`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${e.input.placeholder} @keydown=${d=>d.key==="Enter"&&l()} />
              ${e.input.mic?m`<button class="fp3d-btn fp3d-sheet-mic" title=${i("sheet_mic")} aria-label=${i("sheet_mic")} @click=${()=>{c()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:w}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${e.input.button}</button>
            </div>`:w}
        ${e.lines?.length?m`<div class="fp3d-sheet-lines">${e.lines.map(d=>m`<p>${d}</p>`)}</div>`:w}
        ${this.mayEdit&&Io().length?m`<button class="fp3d-sheet-gear" @click=${()=>{a(),this._settingsOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-set-module")?.scrollIntoView({block:"start"}))}}>⚙ ${i("view_settings")}</button>`:w}
      </div>`}viewPlan(t){let n=new Date(this.replay?.t??Date.now()),e=this.hass?An(t,this.hass.states,n).join("|"):"";return(this.shownPlan?.from!==t||this.shownPlan.hidden!==e)&&(this.shownPlan={from:t,hidden:e,plan:e&&this.hass?Ba(t,this.hass.states,n):t}),this.shownPlan.plan}get mayEdit(){return(this.canEdit??!!this.hass?.user?.is_admin)&&!this.ro}setPlanSettings(t){this.changePlan(n=>Object.assign(n.settings,t))}changePlan(t){let n=this.building;if(!n||!this.hass||!this.mayEdit||!this.dispatchEvent(new CustomEvent("plan-change",{detail:{change:t},cancelable:!0})))return;let e=structuredClone(n);t(e),this.building=e,di(this.hass,e,hi(e.recipes),this.home).catch(i=>this.serviceFailed("home_3d/building/save",i))}openSettings(){this._settingsOpen=!0}showRackView(t,n,e=null){this._rackView={id:t,draw:n,slot:e}}closeRackView(){this._rackView=null}rackViewItem(){let t=this._rackView;return t?this.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===t.id):void 0}rackViewOf(){let t=this._rackView,n=this.rackViewItem();if(!t||!n)return null;let e=this.hass?.language??"en",i=n.name||Y(this.hass,n.type),o=new Map((n.rack?.slots??[]).map(s=>[s.id,this.hass?Xt(this.hass,s):null])),a=JSON.stringify([t.id,i,e,[...o]]);if(this.rackViewMemo?.key!==a||this.rackViewMemo.draw!==t.draw){let s=t.draw((l,c)=>l.name||yi(c,e),i,l=>o.get(l.id)??null);this.rackViewMemo={key:a,draw:t.draw,view:{...s,name:i}}}return this.rackViewMemo.view}tapRackDrawing(t){this._rackView&&t&&(this._rackView={...this._rackView,slot:t})}openRackEntity(t){gt(this,t)}renderRackDetail(t,n){let e=n.rack?.slots.find(l=>l.id===this._rackView?.slot);if(!e)return w;let i=l=>k(t,l),o=Xt(t,e),a=pe(e),s=e.name||Y(t,e.type);return m`<section class="fp3d-rack-detail">
      <b>${o?m`<i class="fp3d-rack-led" style="background:${kn[o]}"></i>`:w}${s}${o?m` · ${i(`rack_status_${o}`)}`:w}</b>
      ${a.length?a.map(l=>m`<button class="fp3d-rack-entity" @click=${()=>this.openRackEntity(l)}><span>${O(t,l)}</span><span>${nt(t,t.states[l])}</span></button>`):m`<p>${i("rack_unlinked")}</p>`}
    </section>`}renderRackView(){let t=this.hass,n=t?this.rackViewOf():null,e=this.rackViewItem();if(!t||!n||!e)return w;let i=()=>this.closeRackView(),o=a=>this.tapRackDrawing(a.target?.closest?.("[data-slot]")?.getAttribute("data-slot")??null);return m`<div class="fp3d-sheet-backdrop" @click=${i}></div>
      <div class="fp3d-sheet fp3d-rack-view" role="dialog" aria-label=${n.name}>
        <header>
          <b>▤ ${n.name}</b>
          <button class="fp3d-sheet-x" aria-label=${k(t,"close")} @click=${i}>✕</button>
        </header>
        <p class="fp3d-rack-view-used">${k(t,"rack_front_view")} · ${k(t,"rack_used",{used:n.used,u:n.u})}</p>
        ${this.renderRackDetail(t,e)}
        <div class="fp3d-rack-view-box" @click=${o}>${is(n.svg)}</div>
      </div>`}renderSettings(){let t=this.hass,n=this.building;if(!t||!n||!this._settingsOpen)return w;let e=d=>k(t,d),i=this.mayEdit,o=n.settings,a=(d,u,h,f)=>m`<label class="fp3d-set-check" title=${f?e(f):""}
        ><input type="checkbox" .checked=${u} ?disabled=${!i} @change=${v=>this.setPlanSettings(h(v.target.checked))} /> ${e(d)}</label
      >`,s=this.sceneHost(t,n),l=ie(),c=Io().map(d=>{let u=ca(d,s);if(!u.length||u[0].kind==="heading")return u;let h=l.find(v=>v.id===d);return[{kind:"heading",text:h?wi(h,t.language??"en").replace(/^(Modul|Module):\s*/i,""):d},...u]}).filter(d=>d.length);return m`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${e("view_settings")}>
        <header>
          <b>⚙ ${e("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${e("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${i?w:m`<p class="fp3d-set-note">${e("view_settings_admin")}</p>`}
        <h4>${e("view_settings_look")}</h4>
        ${a("sun_shadow",o.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${a("window_glow",o.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${a("sun_patches",o.sun_patches!==!1,d=>({sun_patches:d}))}
        <h4>${e("view_settings_alerts")}</h4>
        ${a("rain_warning",o.rain_warning!==!1,d=>({rain_warning:d}))}
        ${a("alert_unavailable",!!o.alert_unavailable,d=>({alert_unavailable:d}))}
        ${a("alert_names",o.alert_names!==!1,d=>({alert_names:d}))}
        ${Vs(t,o.alert_ignored,!i,d=>this.setPlanSettings({alert_ignored:Ns(o.alert_ignored,d)}))}
        <h4 title=${e("effects_hint")}>${e("effects")}</h4>
        ${ds(t,o.effects,!i,d=>this.setPlanSettings({effects:d}))}
        ${c.map(d=>m`<div class="fp3d-set-module">${d.map(u=>this.renderViewField(t,u,i))}</div>`)}
        <p class="fp3d-set-note">${e("view_settings_more")}</p>
        <button
          class="fp3d-btn"
          @click=${()=>{this._settingsOpen=!1;let d=new CustomEvent("open-settings",{detail:{section:null,id:null},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(d)&&(history.pushState(null,"","/home_3d#settings"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}})))}}
        >
          ⚙ ${e("all_settings")} ›
        </button>
      </div>`}renderViewField(t,n,e){switch(n.kind){case"heading":return m`<h4>${n.text}</h4>`;case"text":return m`<p class="fp3d-set-note">${n.text}</p>`;case"check":return m`<label class="fp3d-set-check"><input type="checkbox" .checked=${n.value} ?disabled=${!e} @change=${i=>n.set(i.target.checked)} /> ${n.label}</label>`;case"select":return m`<label class="fp3d-set-field"
          >${n.label}
          <select ?disabled=${!e} @change=${i=>n.set(i.target.value)}>
            ${n.options.map(i=>m`<option value=${i.id} ?selected=${i.id===n.value}>${i.label}</option>`)}
          </select></label
        >`;case"entity":{let i=Object.keys(t.states).filter(o=>n.filter(o)).sort((o,a)=>O(t,o).localeCompare(O(t,a)));return m`<label class="fp3d-set-field"
          >${n.label}
          <select ?disabled=${!e} @change=${o=>{let a=o.target.value;n.set(a===""?null:a)}}>
            <option value="" ?selected=${!n.value}>${n.auto?k(t,"entity_auto",{name:O(t,n.auto)}):"\u2014"}</option>
            ${i.map(o=>m`<option value=${o} ?selected=${o===n.value}>${O(t,o)}</option>`)}
          </select></label
        >`}case"lines":return rs(n.value,!e,{label:n.label,placeholder:n.placeholder??k(t,"lines_new"),add:k(t,"lines_add"),remove:k(t,"delete")},i=>n.set(i));case"button":return m`<button class="fp3d-btn ${n.primary?"fp3d-primary":""}" ?disabled=${!e} title=${n.title??""} @click=${()=>n.onTap()}>${n.label}</button>`}}renderNote(){return this._note?m`<div class="fp3d-note" role="status">${this._note}</div>`:w}spokenAlerts(t,n){let e=new Map(n.floors.flatMap(i=>Mt(i).map(o=>[o.id,o.name])));return this._alerts.map(i=>({kind:i.kind,entity:i.entity,name:O(t,i.entity),...i.text?{text:i.text}:{},room:i.roomId?e.get(i.roomId)??null:null,floorId:i.floorId,roomId:i.roomId}))}spokenCars(t,n){let e=[];for(let i of n.floors)for(let o of i.furniture){if(o.type!=="parking"||!o.car)continue;let a=ce(t,o),s=Se(t,o),l=s.entities.tracker?t.states[s.entities.tracker]:void 0,c=!!a&&!(l&&!gn.has(l.state.toLowerCase()));e.push({name:o.name||(a?Y(t,a):Y(t,"car")),spot:o.id,floorId:i.id,present:c,away:s.away,soc:s.soc,range:s.range,rangeUnit:s.rangeUnit,charging:s.charging,chargingW:s.chargingW,plugged:s.plugged,locked:s.locked})}return e}renderSwipe(){let t=this._swipe;if(!t||!this.hass)return w;let n=t.kind==="light"&&t.value<=0;return m`<div class="fp3d-swipe" style="left:${t.x}px;top:${t.y}px">
      <span>${O(this.hass,t.entity)}</span>
      <b>${n?k(this.hass,"swipe_off"):`${t.value} %`}</b>
      <i><em style="height:${t.value}%"></em></i>
    </div>`}lookThrough(t){let n=this.viewer,e=this.building;if(!n||!e||this.ro||this.plan2d)return;let i=e.floors.find(a=>a.placements.some(s=>s.entity_id===t))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:t}:this._through={entity:t,back:n.getView()},this.watchCameras(!0);let o=this.floorId===i?0:300;o&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===t&&!this.viewer?.lookThrough(t)&&(this._through=null)},o)}endThrough(){let t=this._through;t&&(this._through=null,this.live?.id===t.entity&&(this.live=null),this.viewer?.flyTo(t.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return w;let t=this.hass,n=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))},e=[...new Set(this.building.floors.flatMap(d=>d.placements.map(u=>u.entity_id)).filter(d=>L(d)==="camera"))];this.watchCameras(!0);let i=d=>{let u=t.states[d],h=u?.attributes.entity_picture;return h&&u&&!J(u)?h.startsWith("data:")?h:`${h}${h.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},o=d=>{let u=t.states[d];return m`${O(t,d)}${u?.state==="recording"?m` <b>● ${k(t,"state_recording")}</b>`:w}`},a=this._wallBig&&e.includes(this._wallBig)?this._wallBig:null;if(a){let d=i(a),u=this.liveFor(a),h=()=>{this.throughWall=!0,n(),this.lookThrough(a)};return m`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${k(t,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${o(a)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${h}>${k(t,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(d?m`<img src=${d} alt="" />`:m`<div class="fp3d-wall-none">${k(t,"state_unavailable")}</div>`)}</div>
      </div>`}let s=this.renderRoot.querySelector(".fp3d-wall-grid");s||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:c}=Wa(e.length,s?.clientWidth??this.clientWidth-48,s?.clientHeight??this.clientHeight-160);return m`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${k(t,"camera_wall_title")} · ${e.length} <span class="fp3d-still">${k(t,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${c}px); grid-auto-rows: ${Math.round(c*9/16)}px">
        ${e.map(d=>{let u=i(d),h=Ft(t,d).some(f=>t.states[f]?.state==="on");return m`<button class="fp3d-wall-cam ${h?"fp3d-wall-seen":""}" title=${k(t,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${u?m`<img src=${u} alt="" />`:m`<div class="fp3d-wall-none">${k(t,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${o(d)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(t){if(this.live?.id!==t){let n={id:t,el:null,failed:!1};this.live=n;let e=window;e.loadCardHelpers?e.loadCardHelpers().then(i=>{if(this.live!==n)return;let o=i.createCardElement({type:"picture-entity",entity:t,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});o.hass=this.hass,n.el=o,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}renderThrough(){let t=this._through;if(!t||!this.hass)return w;let n=this.hass.states[t.entity],e=n?.attributes.entity_picture,i=e&&!J(n)?e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,o=this.building?.settings.director?.live?this.liveFor(t.entity):null;return m`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${o?m`<div class="fp3d-through-img fp3d-through-live">${o}</div>`:i?m`<img class="fp3d-through-img" src=${i} alt="" />`:w}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${O(this.hass,t.entity)}</span>
        <span class="fp3d-still">${o?"\u25CF Live":k(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${k(this.hass,"through_blend")}
          @input=${a=>this._blend=Number(a.target.value)/100}
        />
        <button class="fp3d-chip" title=${k(this.hass,"through_full_hint")} @click=${()=>this.throughFull(t.entity)}>⛶ ${k(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${k(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(t){let n=this.renderRoot.querySelector(".fp3d-through-img");n&&typeof n.requestFullscreen=="function"?n.requestFullscreen().catch(()=>gt(this,t)):gt(this,t)}renderMenu(){let t=this._menu;if(!t||!this.hass||this.ro)return w;let n=this.renderRoot.querySelector(".fp3d-stage"),e=n?.clientWidth??800,i=n?.clientHeight??600,o=Math.max(8,Math.min(e-240,t.x-116)),a=Math.max(8,Math.min(i-360,t.y-170));return m`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${o}px;top:${a}px"
        ?low=${this._low}
        .hass=${this.rawHass}
        .entity=${t.entity}
        .car=${t.car??null}
        ?doorLock=${!!t.doorLock}
        .presets=${this.building?.settings.media_presets??[]}
        ?confirmSwitch=${this.confirmSet.has(t.entity)}
        ?noLook=${this.plan2d}
        @close=${()=>this._menu=null}
        @camera-look=${s=>this.lookThrough(s.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(t){let n=[];for(let e of this.scene){if(e.kind!=="marker")continue;let i=t.floors.find(d=>d.id===e.floorId),o=e.furnitureId?i?.furniture.find(d=>d.id===e.furnitureId):void 0;if(!i||!o&&!e.at)continue;let[a,s]=o?[o.x,o.z]:e.at,l=ga(e.path),c=ma(e.emoji);n.push({id:`module:${e.id}`,floorId:i.id,roomId:i.rooms.find(d=>d.points.length>=3&&G([a,s],d.points))?.id??null,x:a,z:s,y:e.y??(o?X(i,o)+o.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:e.name,text:e.text??"",active:!!e.active&&!this.dimmed,unavailable:!1,glow:e.color&&e.active&&!this.dimmed?{color:e.color,level:1}:null,pin:!0,full:!0,...o?{furnitureId:o.id}:{}})}return n}openModuleCard(t){let n=this.scene.find(o=>o.kind==="marker"&&o.id===t);if(!n)return;if(n.sheet){this.openRoomSheet(n.sheet.roomId,n.sheet.id);return}n.card&&(this.mediaFolded.delete(n.card),this.cardPing=n.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let e=this.building?.floors.find(o=>o.id===n.floorId),i=e?.furniture.find(o=>o.id===n.furnitureId);e&&i&&this.viewer?.focus(e.id,i.x,i.z,X(e,i)+i.h*.6,`module:${n.id}`)}onDeviceTap(t,n=0,e=0){let i=this.ro?void 0:this.actionOwners.get(t);if(!i)return this.defaultTap(t,n,e);let o=sn(i,"double_tap");this.taps.tap(t,!!o,()=>{let a=sn(i,"tap");a?this.runOwnAction(a,i,n,e):this.defaultTap(t,n,e)},()=>o&&this.runOwnAction(o,i,n,e))}runOwnAction(t,n,e,i){let o=this.hass;o&&as(t,n.entity,{callService:(a,s,l)=>o.callService(a,s,l),moreInfo:a=>gt(this,a),camera:a=>this._menu={entity:a,x:e,y:i},navigate:a=>{history.pushState(null,"",a),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))},openUrl:a=>{window.open(a,"_blank","noopener,noreferrer")},confirm:a=>this.ask(a??k(o,"action_confirm_default",{name:n.entity?O(o,n.entity):k(o,"action_this_item")}))}).catch(a=>this.showNote(k(o,"action_failed",{error:a instanceof Error?a.message:String(a)})))}ask(t){return Ze(t,{ok:k(this.hass,"action_confirm_ok"),cancel:k(this.hass,"cancel")})}async confirmFor(t){return!this.confirmSet.has(t)||await this.ask(k(this.hass,"confirm_switch",{name:O(this.hass,t)}))}confirmForAll(t){return tr(t,this.confirmSet,n=>O(this.hass,n),n=>this.ask(k(this.hass,"confirm_switch",{name:n})))}defaultTap(t,n=0,e=0){if(t.startsWith("item:")||t.startsWith("trail:")||t.startsWith("lamp:"))return;if(t.startsWith("module:"))return this.openModuleCard(t.slice(7));if(t.startsWith("opening:"))return this.onOpeningTap(t.slice(8),n,e,!1);if(t.startsWith("gangs:")){let a=t.slice(6),s=this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===a);if(!s)return;let l=Je(s);if(l.length===1)return this.onDeviceTap(l[0],n,e);if(l.length>1){this._gangMenu={furnitureId:a,x:n,y:e};return}let c=Ge(s).find(d=>d.power&&d.power!=="none")?.power;c&&(this.ro?this.showInfo(c,n,e):gt(this,c));return}if(t.startsWith("hh:")){let[a,s]=t.slice(3).split("#");this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===s&&c.type==="waste_bin")?(this._binInfo={furnitureId:s,x:n,y:e},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(a,n,e):gt(this,a);return}if(this.ro){let a=this.building,s=a?a.energy.grid??Pe(a,c=>this.furnitureLinks?.get(c.id)?.power??null).grid:null,l=t==="grid"?s:t.startsWith("detect:")?t.slice(7):t;l&&this.showInfo(l,n,e);return}if(t==="grid"){let a=this.building,s=a?a.energy.grid??Pe(a,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null;s&&gt(this,s);return}if(t.startsWith("detect:")){gt(this,t.slice(7));return}let i=this.printerCams.get(t);if(i){this._menu={entity:i,x:n,y:e};return}let o=L(t);if(o==="cover"||o==="camera"){this._menu={entity:t,x:n,y:e};return}o&&zi.has(o)?this.confirmFor(t).then(a=>a&&en(this.hass,t)):gt(this,t)}onOpeningTap(t,n,e,i){let o=this.openingLinks?.get(t);if(!o||!this.hass)return;if(o.lock&&!o.cover){this.ro?this.showInfo(o.lock,n,e):this._menu={entity:o.lock,x:n,y:e,doorLock:!0};return}let a=o.cover;if(!a)return;if(this.ro){this.showInfo(o.contact??a,n,e);return}if(i){gt(this,a);return}let s=this.hass.states[a];if(!s||J(s)){gt(this,a);return}let[l]=a.split(".");this.confirmFor(a).then(c=>c&&this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:a}))}effectiveTheme(){return ro(this.theme,this.hass)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(t,n){this.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("home3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("home3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let t=this._energy;if(!t||this.roomId||!this.showEnergy)return w;let n=i=>k(this.hass,i),e=[];if(t.consumption!==null&&e.push({cls:"total",label:n("energy_consumption"),value:U(this.hass,t.consumption)}),t.grid!==null){let i=t.grid<0;e.push({cls:i?"export":"grid",label:n(i?"energy_grid_export":"energy_grid_import"),value:U(this.hass,Math.abs(t.grid))})}if(t.solar!==null&&e.push({cls:"solar",label:n("energy_solar"),value:U(this.hass,t.solar)}),t.battery!==null||t.soc!==null){let i=[t.battery!==null?U(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);e.push({cls:"battery",label:n("energy_battery"),value:i.join(" \xB7 ")})}return t.tariff&&e.push({cls:"tariff",label:n("energy_tariff"),value:`${K(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),m`<div class="fp3d-energy" aria-live="off">
      ${this._cheap?m`<div class="fp3d-energy-item fp3d-energy-cheap" role="status"><span>${n("cheap_rate")}</span><b>${n("cheap_rate_now")}</b></div>`:w}
      ${this._holoOn?w:e.map(i=>m`<button type="button" class="fp3d-energy-item fp3d-energy-tile fp3d-energy-${i.cls}${this._bigTile===i.cls?" fp3d-energy-big":""}" aria-pressed=${this._bigTile===i.cls?"true":"false"} @click=${()=>this.toggleEnergyTile(i.cls)}>
                <span>${i.label}</span><b>${i.value}</b>
              </button>`)}
      ${this.flows!==null?w:m`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${n("flows_hint")} (${n(this._flows?"flow_on":"flow_off")})`} aria-label=${n("flows")} @click=${()=>this.toggleFlows()}>
        <span>${n("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?w:m`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${n("holos_hint")} aria-label=${n("holos")} @click=${()=>this.toggleHolos()}>
        <span>${n("holos")}</span><b>◫</b>
      </button>`}
    </div>`}toggleEnergyTile(t){this._bigTile=this._bigTile===t?null:t}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return w;let t=fn[this.heatMode],n=this.heatMode==="temperature",e=n?Bt(this.hass,t.stops[0][0]):t.stops[0][0],i=n?Bt(this.hass,t.stops[t.stops.length-1][0]):t.stops[t.stops.length-1][0],o=n?re(this.hass):t.unit,a=s=>k(this.hass,s);return m`<div class="fp3d-legend">
      <b>${a(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${js(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${K(this.hass,e,0)} ${o}</span><span>${K(this.hass,i,0)} ${o}</span></span>
      ${this.heatValues.size?w:m`<span class="fp3d-legend-none">${a("heat_none_found")}</span>`}
    </div>`}sunPathToday(t){let n=t.config?.latitude,e=t.config?.longitude;if(typeof n!="number"||typeof e!="number")return null;let i=`${new Date().toDateString()},${n},${e}`;return this.sunPathKey!==i&&(this.sunPathKey=i,this.sunPathCache=Ua(Date.now(),n,e)),this.sunPathCache}skyColor(){if(this.effectiveTheme()==="realistic"&&this._realSky)return this._realSky.horizon;let t=Ee[this.effectiveTheme()]??Ee.neon,n=this._sky;return t.night[0].map((e,i)=>Math.round(e+(t.day[0][i]-e)*n))}watchLightning(t){if(!t){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let n=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),n()},5e3+Math.random()*9e3)};n()}render(){let t=this._sky,n=(c,d)=>`rgb(${c.map((u,h)=>Math.round(u+(d[h]-u)*t)).join(",")})`,e=Ee[this.effectiveTheme()]??Ee.neon,i=this.effectiveTheme()==="realistic"?this._realSky:null,o=c=>`rgb(${c.join(",")})`,a=Ka(this.building?.settings.backdrop)??(i?`linear-gradient(180deg, ${o(i.top)} 0%, ${o(i.horizon)} 62%, ${o(i.ground)} 100%)`:null),l=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${n(e.night[0],e.day[0])};--fp3d-ground:${n(e.night[1],e.day[1])}${a?`;background:${a}`:""}`;return m`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${l}
    >
      ${this._error?m`<p class="fp3d-error">${this._error}</p>`:w} ${this.clean?w:this.renderEnergy()} ${this.renderHologram()} ${this.clean?w:this.renderWires()} ${this.clean?w:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?w:m`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?w:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderSettings()} ${this.renderRackView()} ${this.renderNote()}
      ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this.pivotMark&&!this._walk?m`<span class="fp3d-pivot" aria-hidden="true"></span>`:w}
      ${this._micProbe&&this.hass?m`<fp3d-mic-probe .hass=${this.rawHass} .building=${this.building} @close=${()=>(this._micProbe=!1,Xr())}></fp3d-mic-probe>`:w}
      ${this.showStats&&this._stats?m`<span class="fp3d-stats"
            ><b>${this._stats.fps?k(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):k(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?m`(${this._stats.busy.map(c=>k(this.hass,`stats_busy_${c}`)).join(", ")})`:w} ·
            ${k(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${k(this.hass,this._stats.low?"stats_low":"stats_full",{r:K(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${K(this.hass,this.syncMs,1)} ms`:""}</span
          >`:w}
    </div>`}static styles=[Qe,rr,qe`
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
      @media ${oi(ri)} {
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Uo);function Cd(r,t){let n=t.attributes.current_temperature,e=typeof n=="number"&&Number.isFinite(n)?`${K(r,Math.round(n))} \xB0C`:"",i=!["off","unavailable","unknown"].includes(t.state);return{text:[nt(r,t),e].filter(Boolean).join(" \xB7 "),on:i}}function U(r,t){return Math.abs(t)>=1e3?`${K(r,t/1e3,1)} kW`:`${Math.round(t)} W`}function dl(r){let t=[.3,.85,1];return r==="washer"||r==="dryer"?{color:t,level:.8,faces:[{part:"drum",color:t,level:.8}]}:{color:t,level:.8}}var Fd=new Set(["rug","stairwell","grid_point","worktop"]);function Od(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}export{Uo as Fp3dView3d,Cd as waterHeaterText};
