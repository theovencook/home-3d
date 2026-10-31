import{$ as Bi,$a as Te,$b as Jr,Aa as tn,Bb as Dr,Cb as Pe,Da as nr,Db as ro,Ea as or,Eb as wt,F as $e,Fa as ir,Fb as sn,G as Hi,Ga as rr,Gb as Lr,H as L,Ha as sr,Hb as Wr,I as Ci,Ia as ar,Ib as Nr,J as Fi,Ja as en,Jb as Vr,K as yt,Ka as lr,Kb as Br,Lb as qr,M as Dt,Mb as so,N as Oi,O as At,Oa as _,Ob as jr,P as Lt,Pa as j,Pb as Kr,Q as D,Qb as Ur,R as Gn,Ra as dr,Rb as Gr,S as Y,Sa as cr,Sb as Yr,T as Di,Ta as ur,U as Ze,Ua as pr,V as Li,Va as hr,Vb as Ee,W as kt,Wa as fr,Wb as ao,X as Wi,Xa as mr,Y as Ni,Ya as gr,Z as Vi,Za as br,_ as Ut,_a as Gt,_b as J,a as je,ab as vr,ac as Xr,b as ii,ba as Yn,bb as nn,bc as Zr,c as Ke,ca as qi,cb as yr,cc as Ae,d as m,da as ae,db as eo,dc as Qr,e as Pt,eb as wr,f as ri,fa as ji,fb as xr,g as x,ga as Ki,gb as kr,gc as Yt,h as Ue,ha as Qe,hb as _r,hc as ts,i as si,ia as Ui,ib as nt,j as ai,ja as Gi,jb as $r,jc as es,k as Vn,ka as Jn,kb as no,l as li,la as Se,lb as Sr,m as di,ma as Xn,mb as Mr,mc as ns,na as Zn,nb as Wt,nc as os,oa as Qn,ob as Ir,oc as is,pb as gt,pc as rs,qa as Yi,qb as on,qc as ss,r as ci,ra as Me,rb as Tr,rc as lo,sa as Ji,sb as Rr,t as ui,ta as Ie,tb as zr,u as pi,ua as Xi,ub as Hr,v as hi,va as Zi,vb as Cr,wa as to,wb as oo,xa as Qi,xb as Fr,ya as tr,yb as io,za as er,zb as Or}from"./home-3d-chunk-GWMHMVZE.js";import{$ as Ar,A as _i,B as we,C as xe,D as ke,E as $i,F as Si,H as Mi,I as Ii,J as Kn,K as Un,L as Ti,M as Je,N as Xe,O as Pi,P as Ei,R as Ai,S as Ri,T as Et,U as _e,V as K,W as zi,X as Pr,Y as rn,Z as Er,a as Bn,c as se,e as fi,f as qn,g as Ge,h as Ye,i as mi,j as jn,k as gi,l as bi,m as tt,o as vi,p as Mt,r as yi,t as wi,u as xi,v as X,w as It,x as ki,z as vt}from"./home-3d-chunk-A24XFX3G.js";var Re=class extends rr{constructor(t){if(super(t),this.it=x,t.type!==or.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===x||t==null)return this._t=void 0,this.it=t;if(t===ri)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Re.directiveName="unsafeHTML",Re.resultType=1;var as=ir(Re);function ls(r,t,e,n,i=!1){let o=s=>{let a=s?.value.trim();!s||!a||(s.value="",n([...r,a]))};return m`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${e.label}>
    ${e.label}
    ${r.map((s,a)=>m`<div class="fp3d-lines-row">
        <span>${s}</span>
        <button type="button" title=${e.remove} aria-label=${`${e.remove}: ${s}`} ?disabled=${t} @click=${()=>n(r.filter((l,c)=>c!==a))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${e.placeholder}
        aria-label=${e.placeholder}
        ?disabled=${t}
        @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),o(s.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${t} @click=${s=>o(s.currentTarget.previousElementSibling)}>
        ${e.add}
      </button>
    </div>
  </div>`}async function cs(r,t,e){let n=xl(r,t,e);return!n||r.confirm&&!await e.confirm(r.confirm_text?.trim()||null)?!1:(await n(),!0)}function xl(r,t,e){let n=r.target?.trim()??"";switch(r.action){case"perform_action":{let i=/^([a-z0-9_]+)\.([a-z0-9_]+)$/.exec(n);return i?()=>e.callService(i[1],i[2],{...r.data??{}}):null}case"navigate":return n?()=>e.navigate(n):null;case"url":return/^(https?:\/\/\S+|\/(?!\/)\S*)$/i.test(n)?()=>e.openUrl(n):null;case"toggle":case"more_info":case"camera":{let i=n||t;return i?r.action==="toggle"?()=>e.callService("homeassistant","toggle",{entity_id:i}):r.action==="more_info"?()=>e.moreInfo(i):()=>e.camera(i):null}default:return null}}var kl=["tap","hold","double_tap"];function ds(r){return!!r&&kl.some(t=>!!r[t]&&r[t].action!=="default")}function us(r,t,e){let n=new Map;for(let i of r){for(let o of i.placements)ds(o.actions)&&!n.has(o.entity_id)&&n.set(o.entity_id,{actions:o.actions,entity:o.entity_id});for(let o of i.furniture){if(!ds(o.actions))continue;let s=t(o.id)??`item:${o.id}`;n.has(s)||n.set(s,{actions:o.actions,entity:e(o)})}}return n}function ln(r,t){let e=r?.actions[t];return e&&e.action!=="default"?e:null}var an=class{pending=null;wait;constructor(t=320){this.wait=t}tap(t,e,n,i){if(this.pending?.id===t){this.doubleTap(t);return}if(this.flush(),!e){n();return}let o=setTimeout(()=>{this.pending=null,n()},this.wait);this.pending={id:t,timer:o,single:n,double:i}}doubleTap(t){let e=this.pending;return!e||e.id!==t?!1:(clearTimeout(e.timer),this.pending=null,e.double(),!0)}flush(){let t=this.pending;t&&(clearTimeout(t.timer),this.pending=null,t.single())}cancel(){this.pending&&clearTimeout(this.pending.timer),this.pending=null}};var _l=[["radiator_cold","effects_radiator_cold"],["radiator_hot","effects_radiator_hot"],["tank_cold","effects_tank_cold"],["tank_hot","effects_tank_hot"]];function ps(r,t,e,n,i="fp3d-set-field"){let o=t??{},s=(d,u)=>{let h={...o,[d]:u};for(let f of Object.keys(h))(h[f]===null||h[f]===void 0)&&delete h[f];n(Object.keys(h).length?h:null)},a=Dt(r),l=(d,u,h,f,b)=>m`<label class=${i}
      >${u}
      <input
        type="number"
        step=${b}
        placeholder=${String(Math.round(h(yr[d])))}
        .value=${typeof o[d]=="number"?String(Math.round(h(o[d])*10)/10):""}
        ?disabled=${e}
        @change=${y=>{let v=y.target.value.trim(),p=Number(v);s(d,v===""||!Number.isFinite(p)?null:f(p))}}
    /></label>`,c=d=>d;return m`${l("motion_seconds",_(r,"effects_motion_seconds"),c,d=>Math.max(0,Math.min(3600,Math.round(d))),5)}
  ${l("camera_seconds",_(r,"effects_camera_seconds"),c,d=>Math.max(0,Math.min(3600,Math.round(d))),5)}
  ${_l.map(([d,u])=>l(d,`${_(r,u)} (${a})`,h=>At(r,h),h=>Math.max(-20,Math.min(100,Oi(h,a))),1))}`}var $l={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Jt(r,t){return t&&r.states[t]?t:Object.keys(r.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function co(r,t){let e=t?r.states[t]:void 0;if(!e||e.state==="unavailable"||e.state==="unknown")return null;if(e.entity_id.startsWith("binary_sensor."))return e.state==="on"?.6:0;let n=Number(e.state);if(!Number.isFinite(n))return null;let o=String(e.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return o<=.1?0:Math.min(1,.3+o/10)}function hs(r,t,e){let n=t?r.states[t]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let i=$l[n.state];if(!i)return null;let o=n.attributes,s=i.cloud??0;typeof o.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,o.cloud_coverage/100)));let a=i.wind??0;if(typeof o.wind_speed=="number"){let c=o.wind_speed_unit==="m/s"?o.wind_speed*3.6:o.wind_speed_unit==="mph"?o.wind_speed*1.609:o.wind_speed;a=Math.max(a,Math.min(1,c/60))}let l=co(r,e);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:n.entity_id,condition:n.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:s,wind:a,lightning:!!i.lightning}}function fs(r,t){let e=new Set(t??ki);return{...r,rain:e.has("rain")?r.rain:0,snow:e.has("snow")?r.snow:0,fog:e.has("fog")?r.fog:0,cloud:e.has("clouds")?r.cloud:0,lightning:e.has("lightning")&&r.lightning,sky:e.has("sky")}}var Sl=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),Ml=new Set(["power","plug","connectivity","running"]);function dn(r){if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let t=r.entity_id.split(".")[0];if(t==="binary_sensor")return Ml.has(String(r.attributes.device_class))?r.state==="off":r.state==="on";if(t==="input_boolean"||t==="switch")return r.state==="on";let e=Number(r.state);if(r.state!==""&&Number.isFinite(e))return r.attributes.unit_of_measurement==="V"&&e<100;let n=String(r.state).toLowerCase().trim();return Sl.has(n)||n.startsWith("ob ")}function ho(r){let t=Mt(r);if(!t)return!1;if(Il.test([t.id,...t.tags??[],...Object.values(t.name??{})].join(" ")))return!t.light||/plant|pflanz/i.test(t.id);if(t.light)return!1;let e=t.parts.filter(n=>n.color==="plant").length;return e>0&&e+t.parts.filter(n=>n.color==="pot").length>=t.parts.length/2}var Il=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var it=["#3a3f47","#3a3f47"],Xt=["#23262b","#23262b"],$t=["#5a3b25","#5a3b25"],Z=["#1f4fa8","#1f4fa8"],Nt=["#e3b616","#e3b616"],V=["#2f7d3b","#2f7d3b"],ms={default:{rest:it,bio:$t,paper:Z,plastic:Nt,glass:V,garden:V,recycling:Nt,other:it},DE:{rest:Xt,bio:$t,paper:Z,plastic:Nt,glass:V,garden:V,recycling:Nt},AT:{rest:it,bio:$t,paper:[it[0],"#c0262d"],plastic:Nt,glass:V,garden:V},CH:{rest:["#d8d8d8","#d8d8d8"],bio:V,paper:Z,plastic:it,glass:V,garden:V},NL:{rest:it,bio:V,paper:Z,plastic:["#3a3f47","#e57a1f"],glass:V,garden:V},BE:{rest:it,bio:V,paper:Z,plastic:Z,glass:V,garden:V},GB:{rest:Xt,bio:["#3a3f47","#5a3b25"],paper:Z,plastic:Z,glass:Xt,garden:$t,recycling:Z},US:{rest:Xt,bio:V,paper:Z,plastic:Z,glass:Z,garden:V,recycling:Z},CA:{rest:Xt,bio:V,paper:Z,plastic:Z,glass:Z,garden:V,recycling:Z},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:it,bio:$t,paper:[it[0],"#e3b616"],plastic:[it[0],"#e3b616"],recycling:[it[0],"#e3b616"],glass:V,garden:V},IT:{rest:it,bio:$t,paper:Z,plastic:Nt,glass:V,garden:V},ES:{rest:it,bio:$t,paper:Z,plastic:Nt,glass:V,garden:V},PT:{rest:it,bio:$t,paper:Z,plastic:Nt,glass:V,garden:V},DK:{rest:Xt,bio:V,paper:Z,plastic:it,glass:V,garden:V},SE:{rest:Xt,bio:$t,paper:Z,plastic:it,glass:V,garden:V},NO:{rest:it,bio:$t,paper:Z,plastic:it,glass:V,garden:V},FI:{rest:it,bio:$t,paper:Z,plastic:it,glass:V,garden:V}},vs="DE";function ys(r){vs=r}function ws(r){let t=r?.config?.country;if(t)return t.toUpperCase();let e=(r?.language??"").split("-")[1];return e?e.toUpperCase():"DE"}function Tl(r,t){return ms[t]?.[r]??ms.default[r]??it}function xs(r,t=vs){let e=Tl(r.bin_kind??"rest",t),n=r.bin_color||e[0];return[n,r.bin_lid||(r.bin_color?n:e[1])]}var Pl={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function po(r,t,e){let n=` ${r.toLowerCase()} `;return e&&e.trim()?e.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&n.includes(i.trim())):t==="other"?!1:Pl[t].some(i=>n.includes(i))}function fo(r){let t=typeof r=="string"?r:r?.date??r?.dateTime;if(!t)return null;let e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t),n=e?new Date(Number(e[1]),Number(e[2])-1,Number(e[3])):new Date(t);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function El(r){return r.map(t=>({day:fo(t.start),summary:String(t.summary??"")})).filter(t=>!!t.day).sort((t,e)=>t.day.getTime()-e.day.getTime())}function ks(r){let t=new Set;for(let e of r.flatMap(n=>n.furniture))e.type==="waste_bin"&&typeof e.bin_source=="string"&&e.bin_source.startsWith("calendar.")&&t.add(e.bin_source);return[...t]}async function mo(r,t,e=new Date,n=42){let i=new Map,o=r.callApi;if(!o)return i;let s=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=_s(s,n);return await Promise.all(t.map(async l=>{try{let c=await o.call(r,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);i.set(l,El(Array.isArray(c)?c:[]))}catch{}})),i}var le=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate()),_s=(r,t)=>new Date(r.getFullYear(),r.getMonth(),r.getDate()+t),cn=(r,t)=>Math.round((le(t).getTime()-le(r).getTime())/864e5);function uo(r,t,e={}){let n=e.from??14,i=e.until??12,o=t.getHours()+t.getMinutes()/60;return r===1&&o>=n||r===0&&o<i}function $s(r,t,e,n=new Date,i=3){let o=typeof r.bin_source=="string"&&r.bin_source!=="none"?r.bin_source:null;if(!o)return[];if(o.startsWith("calendar.")){let a=le(n);return(e.get(o)??[]).filter(l=>l.day>=a&&po(l.summary,r.bin_kind??"rest",r.bin_match)).slice(0,i)}let s=go(r,t,e,n);return s?[{day:s.day,summary:s.summary}]:[]}function go(r,t,e,n=new Date,i={}){let o=typeof r.bin_source=="string"&&r.bin_source!=="none"?r.bin_source:null;if(!o)return null;let s=le(n);if(o.startsWith("calendar.")){let d=(e.get(o)??[]).find(h=>h.day>=s&&po(h.summary,r.bin_kind??"rest",r.bin_match));if(!d)return null;let u=cn(s,d.day);if(u===0&&n.getHours()+n.getMinutes()/60>=(i.until??12)){let h=(e.get(o)??[]).find(f=>f.day>s&&po(f.summary,r.bin_kind??"rest",r.bin_match));if(h)return{days:cn(s,h.day),day:h.day,summary:h.summary,glow:uo(cn(s,h.day),n,i)}}return{days:u,day:d.day,summary:d.summary,glow:uo(u,n,i)}}let a=t.states[o];if(!a)return null;let l=Hl(a,n);if(l===null||l<0)return null;let c=_s(s,l);return{days:l,day:c,summary:String(a.attributes.friendly_name??""),glow:uo(l,n,i)}}function Al(r,t){let e=typeof r=="string"&&r!=="none"?r:null,n=e?t.states[e]:void 0;return!!n&&Ps.has(String(n.state).toLowerCase())}function pn(r,t){return Al(r.bin_out,t)}function Rl(r){let t=r.bin_kerb;return t&&Number.isFinite(t.x)&&Number.isFinite(t.z)?[t.x,t.z]:null}function Ss(r,t,e){let n=Rl(r);return n&&e?{at:n,kerb:!0,cue:null}:{at:[r.x,r.z],kerb:!1,cue:n&&t&&!e?n:null}}function Ms(r){return typeof r.bin_out=="string"&&/^(input_boolean|switch)\./.test(r.bin_out)}function Is(r,t=.3){let e=r.filter(a=>!a.icon),n=e.map((a,l)=>l),i=a=>n[a]===a?a:n[a]=i(n[a]);for(let a=0;a<e.length;a++)for(let l=a+1;l<e.length;l++){let c=e[a],d=e[l];c.floorId===d.floorId&&Math.hypot(c.x-d.x,c.z-d.z)<=c.r+d.r+t&&(n[i(l)]=i(a))}let o=new Map;e.forEach((a,l)=>o.set(i(l),[...o.get(i(l))??[],a]));let s=[];for(let a of o.values())a.sort((l,c)=>l.days-c.days||l.name.localeCompare(c.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,c)=>l+c.x,0)/a.length,z:a.reduce((l,c)=>l+c.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of r)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function Ts(r,t={}){let e=typeof t.ahead=="number"&&t.ahead>=0?t.ahead:null,n=r.length?Math.min(...r.map(i=>i.days)):0;return new Set(r.filter(i=>(e===null||i.days<=e)&&(!t.nextOnly||i.days===n)).map(i=>i.id))}function zl(r,t=new Date){let e=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(r),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(r),i,o,s;if(e)[i,o,s]=[Number(e[1]),Number(e[2]),Number(e[3])];else if(n){let l=Number(n[1]),c=Number(n[3]);n[2]==="/"&&c>12&&l<=12&&([l,c]=[c,l]),s=l,o=c;let d=n[4];i=d?d.length===2?2e3+Number(d):Number(d):t.getFullYear(),!d&&new Date(i,o-1,s)<le(t)&&(i+=1)}else return null;if(o<1||o>12||s<1||s>31)return null;let a=new Date(i,o-1,s);return a.getMonth()===o-1?a:null}function Hl(r,t=new Date){let e=r.attributes;if(typeof e.daysTo=="number")return e.daysTo;let n=String(r.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let i=/^\d{4}-\d{2}-\d{2}T/.test(n)?fo(n):zl(n,t);if(i)return cn(t,i);let o=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(o))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(o))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(o)??/\bin\s+(\d+)/.exec(o);if(s)return Number(s[1]);let a=o.match(/\d+/g);return a?Number(a[a.length-1]):null}var Ps=new Set(["on","open","true","detected","home"]);function gs(r){let t=r?.last_changed?Date.parse(r.last_changed):NaN;return Number.isFinite(t)?t:null}function Es(r,t,e=Date.now()){let n=typeof r.entity=="string"&&r.entity!=="none"?r.entity:null;if(!n)return!1;let i=t.states[n];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let o=typeof r.mailbox_door=="string"&&r.mailbox_door!=="none"?r.mailbox_door:null;if(!o){let l=Number(i.state);return Ps.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=gs(i),a=gs(t.states[o]);return s===null||e-s>7*864e5?!1:a===null||s>a+1e3}function As(r){return r.type==="waste_bin"?[r.bin_source??null,r.bin_out??null]:r.type==="mailbox"?[r.entity??null,r.mailbox_door??null]:Ol(r)}var Rs=r=>{let t=r?Number(r.state):NaN;return Number.isFinite(t)?t:null};function bo(r,t){let e=typeof r.moisture=="string"&&r.moisture!=="none"?r.moisture:null,n=e?t.states[e]:void 0;if(!e||!n)return!1;if(e.startsWith("plant.")){let o=n.attributes,s=String(o.problem??"").toLowerCase();return String(o.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let i=Rs(n);return i!==null&&i<(r.moisture_min??20)}function vo(r,t=Date.now()){if(!r||r.state==="unavailable"||r.state==="unknown")return null;let e=String(r.state).trim(),n=String(r.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(e)){let s=Number(e),a=n==="s"?s/60:n==="h"?s*60:s;return Math.max(0,Math.round(a))}let i=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(e);if(i)return Number(i[1])*60+Number(i[2])+Math.round(Number(i[3]??0)/60);let o=Date.parse(e);return Number.isFinite(o)&&/\d{4}-\d{2}-\d{2}T/.test(e)?Math.max(0,Math.round((o-t)/6e4)):null}var Cl=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function yo(r){if(!r)return!1;let t=String(r.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Cl.has(t)}var Fl=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function wo(r,t,e){let n=r?String(r.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&Fl.has(n))return!0;let i=!!r&&/^(switch|input_boolean|light)\./.test(r.entity_id),o=!!r&&!i&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return t!==null&&t<=e&&!o}function zs(r){return r>=60?`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")} h`:`${r} min`}function bs(r,t,e,n){let i=typeof r=="string"&&r!=="none"?r:null,o=i?e.states[i]:void 0;if(!i||!o||o.state==="unavailable"||o.state==="unknown")return!1;if(i.startsWith("binary_sensor.")||i.startsWith("input_boolean."))return o.state==="on";let s=Rs(o);if(s!==null)return s<=(t??10);let a=fo(o.state);return!!a&&a.getTime()<=le(n).getTime()}function Hs(r,t,e=new Date){let n=[];return bs(r.service,r.service_min,t,e)&&n.push(r.service),r.service2!==r.service&&bs(r.service2,r.service2_min,t,e)&&n.push(r.service2),n}var Vt=r=>[r.door_left,r.door_right].filter(t=>typeof t=="string"&&t!=="none"),Cs=r=>!!r&&(r.state==="on"||r.state==="open");function hn(r,t,e=Date.now()){let n=(r.door_alarm??2)*6e4;for(let i of Vt(r)){let o=t.states[i];if(Cs(o)&&o?.last_changed&&e-Date.parse(o.last_changed)>=n)return i}return null}function Fs(r,t,e=Date.now()){let n=null;for(let i of r)if(!(i.type!=="fridge"&&i.type!=="fridge_smart"))for(let o of Vt(i)){let s=t.states[o];if(!Cs(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(i.door_alarm??2)*6e4-e;a>0&&(n===null||a<n)&&(n=a)}return n}var un=class{running=new Map;ended=new Map;update(t,e,n,i=Date.now()){let o=this.running.get(t);if(this.running.set(t,e),e)return this.ended.delete(t),!1;o===!0&&this.ended.set(t,i);let s=this.ended.get(t);return s===void 0?!1:i-s>12*36e5||n(s)?(this.ended.delete(t),!1):!0}};function Ol(r){return[r.moisture??null,r.remaining??null,r.service??null,r.service2??null]}var Dl=10*6e4;function de(r,t){let e=t?Date.parse(r.states[t]?.last_changed??""):NaN;return Number.isFinite(e)?e:void 0}function Ll(r,t){let e=t.map(n=>de(r,n)).filter(n=>n!==void 0);return e.length?Math.max(...e):void 0}var Wl=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Os={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function xo(r,t,e){let n=[];for(let d of t.floors)for(let u of d.rooms){let f=[...yt(r,u.area_id).filter(b=>{let y=b.startsWith("binary_sensor.")?Os[String(r.states[b]?.attributes.device_class)]:void 0;return!!y&&y!=="water"}),...nn(r,d,u,"leak")];f.length&&n.push({floorId:d.id,roomId:u.id,sensors:f})}let i=Object.keys(r.states),o=t.settings.rain_warning===!1?null:Jt(r,e??t.settings.weather_entity),s=t.settings.outage_entity&&r.states[t.settings.outage_entity]?t.settings.outage_entity:null,a=t.floors.flatMap(d=>d.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&Vt(u).length).map(u=>({floorId:d.id,roomId:d.rooms.find(h=>h.points.length>=3&&K([u.x,u.z],h.points))?.id??null,furnitureId:u.id,ids:Vt(u)}))),l=t.settings.rain_warning===!1?null:t.settings.rain_entity,c=l&&r.states[l]?l:null;return{rooms:n,alarms:i.filter(d=>d.startsWith("alarm_control_panel.")),weather:o,outage:s,rain:c,fridges:a}}function ko(r){return[...r.rooms.flatMap(t=>t.sensors),...r.alarms,...r.weather?[r.weather]:[],...r.outage?[r.outage]:[],...r.rain?[r.rain]:[],...(r.fridges??[]).flatMap(t=>t.ids)]}function Ds(r,t,e,n){let i=[];for(let a of e.rooms)for(let l of a.sensors){let c=r.states[l];c?.state==="on"&&i.push({kind:Os[String(c.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId,since:de(r,l)})}let o=e.rain?co(r,e.rain):null;if(o!==null?o>0:!!e.weather&&Wl.has(r.states[e.weather]?.state??""))for(let a of t.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let c=n.get(l.id);if(!c)continue;let d=ae(r,c,"window");if(d.open<.5&&d.tilt<.5&&d.open2<.5&&d.tilt2<.5)continue;let u=Ll(r,[c.contact,c.tilt,c.contact2,c.tilt2]);i.push({kind:"window_rain",entity:c.contact??c.tilt??c.contact2??l.id,roomId:l.room_id,floorId:a.id,since:u})}if(e.outage&&dn(r.states[e.outage])){let a=Number.isFinite(Number(r.states[e.outage]?.state));i.push({kind:"power_outage",entity:e.outage,roomId:null,floorId:null,since:a?void 0:de(r,e.outage)})}if(t.settings.alert_unavailable){let a=Date.now(),l=new Set;for(let c of t.floors)for(let d of c.openings){let u=n.get(d.id);if(u)for(let h of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!h||l.has(h))continue;let f=r.states[h];if(!f||f.state!=="unavailable"&&f.state!=="unknown")continue;let b=Date.parse(f.last_changed??"");Number.isFinite(b)&&a-b<Dl||(l.add(h),i.push({kind:"contact_unavailable",entity:h,roomId:d.room_id,floorId:c.id,since:Number.isFinite(b)?b:void 0}))}}}for(let a of e.fridges??[]){let l=t.floors.find(d=>d.id===a.floorId)?.furniture.find(d=>d.id===a.furnitureId),c=l?hn(l,r):null;c&&i.push({kind:"fridge_door",entity:c,roomId:a.roomId,floorId:a.floorId,since:de(r,c)})}for(let a of e.alarms){let l=r.states[a]?.state;l==="triggered"?i.push({kind:"alarm",entity:a,roomId:null,floorId:null,since:de(r,a)}):l==="pending"&&i.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null,since:de(r,a)})}return i}function Nl(r){if(r.color)return r.color;switch(r.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function Ls(r){return r.kind==="water"&&!r.color?vr:Nl(r)}function ze(r,t,e){let n=e.roomId?t.floors.flatMap(s=>s.rooms).find(s=>s.id===e.roomId):null;if(e.text!==void 0)return n?`${n.name} \xB7 ${e.text}`:e.text;let i=r?D(r,e.entity):e.entity,o=_(r,`alert_${e.kind}`,{name:i});return n?t.settings.alert_names===!1?`${n.name} \xB7 ${_(r,`alert_short_${e.kind}`)}`:`${n.name} \xB7 ${o}`:o}var Vl=new Set(["smoke","co","gas","water","alarm","alarm_pending"]),fn=new Set(["smoke","gas","co","water","alarm","alarm_pending","window_rain","power_outage","fridge_door","contact_unavailable"]);function mn(r){return!Vl.has(r)}var ht=r=>`${r.kind}:${r.entity}`,_o=r=>`${ht(r)}@${r.at}`;function Ws(r,t){return t.since===void 0||t.since<=r.at}function Ns(r,t){let e=t.alert_snoozed??[],n=t.alert_ignored??[];if(!e.length&&!n.length)return r;let i=new Map(e.map(s=>[ht(s),s])),o=new Set(n.filter(s=>mn(s.kind)).map(ht));return r.filter(s=>{let a=ht(s);if(o.has(a))return!1;let l=i.get(a);return!l||!Ws(l,s)})}function Vs(r,t){if(!r?.length)return[];let e=new Map(t.map(n=>[ht(n),n]));return r.filter(n=>{let i=e.get(ht(n));return!i||!Ws(n,i)})}function Bs(r,t,e,n){let i={kind:t.kind,entity:t.entity},o=ht(i),s=(r.alert_snoozed??[]).filter(l=>ht(l)!==o),a=(r.alert_ignored??[]).filter(l=>ht(l)!==o);return e&&mn(t.kind)?{alert_snoozed:s,alert_ignored:[...a,i]}:{alert_snoozed:[...s,{...i,at:Math.max(n,t.since??0)}],alert_ignored:a}}function qs(r,t){return(r??[]).filter(e=>ht(e)!==ht(t))}function Bl(r,t){return`${fn.has(t.kind)?_(r,`alert_short_${t.kind}`):t.kind} \xB7 ${r?D(r,t.entity):t.entity}`}function js(r,t,e,n){return t?.length?m`<div class="fp3d-ignored">
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
    <b>${_(r,"alert_ignored")}</b>
    <p>${_(r,"alert_ignored_hint")}</p>
    ${t.map(i=>m`<div class="fp3d-ignored-row" data-key=${ht(i)}>
        <span title=${i.entity}>${Bl(r,i)}</span>
        <button ?disabled=${e} @click=${()=>n(i)}>${_(r,"alert_restore")}</button>
      </div>`)}
  </div>`:x}var gn={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Ks(r,t){let e=gn[r].stops;if(t<=e[0][0])return e[0][1];for(let n=1;n<e.length;n++){let[i,o]=e[n],[s,a]=e[n-1];if(t<=i){let l=(t-s)/(i-s);return[a[0]+(o[0]-a[0])*l,a[1]+(o[1]-a[1])*l,a[2]+(o[2]-a[2])*l]}}return e[e.length-1][1]}function Us(r,t,e){let n=new Map;for(let i of t.floors)for(let o of i.rooms){let s=Lt(r,i,o,e);s!==null&&n.set(o.id,s)}return n}function Gs(r){let t=gn[r].stops,e=t[0][0],n=t[t.length-1][0];return`linear-gradient(90deg, ${t.map(([i,o])=>`rgb(${o.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-e)/(n-e)*100)}%`).join(", ")})`}function Ys(r){return r.startsWith("hh:")?r.slice(3).split("#")[0]||null:r.startsWith("detect:")?r.slice(7)||null:/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(r)?r:null}var vn=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function bn(r){return r&&r!=="none"?r:null}function ce(r,t){if(t.type!=="parking")return null;let e=bn(t.entity);if(e){let o=r.states[e];if(!o||!vn.has(o.state.toLowerCase()))return null}let n=t.vehicle??null,i=bn(t.type_entity);if(i&&t.types?.length){let o=(r.states[i]?.state??"").trim().toLowerCase();if(o){let s=l=>l.trim().toLowerCase(),a=t.types.find(l=>s(l.state)===o)??t.types.find(l=>s(l.state)&&o.includes(s(l.state)));a&&(n=a.vehicle)}}return n&&Mt(n)?n:null}function $o(r,t){let e=new Map;for(let n of t.floors)for(let i of n.furniture){let o=ce(r,i);o&&e.set(i.id,o)}return e}function Js(r){return r.flatMap(t=>t.furniture.filter(e=>e.type==="parking").flatMap(e=>[bn(e.entity),bn(e.type_entity)])).filter(t=>!!t)}function Xs(r,t){let e=Mt(t);if(!e)return null;let n=r.scale??1;return{id:`${r.id}:vehicle`,type:t,x:r.x,z:r.z,rotation:r.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}var He=1800*1e3,ql=new Set(["motion","occupancy","presence"]);function Zs(r,t){return t.startsWith("binary_sensor.")&&ql.has(String(r.states[t]?.attributes.device_class))}function Ce(r,t){let e=[],n=new Set,i=(o,s,a,l)=>{n.has(o)||(n.add(o),e.push({entity:o,floorId:s,x:a,z:l}))};for(let o of t.floors)for(let s of o.placements)if(Zs(r,s.entity_id))i(s.entity_id,o.id,s.x,s.z);else if(L(s.entity_id)==="camera")for(let a of Wt(r,s.entity_id))i(a,o.id,s.x,s.z);for(let o of t.floors)for(let s of o.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Et(s.points);for(let c of yt(r,s.area_id))Zs(r,c)&&i(c,o.id,a,l)}return e}function Qs(r,t,e,n=He){let i=e-n,o=[];for(let[s,a]of Object.entries(r)){let l="";for(let c of a){let d=(c.lc??c.lu)*1e3;c.s==="on"&&l!=="on"&&d>=i&&d<=e&&o.push({entity:s,time:d}),l=c.s}}for(let s of t){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=e)||o.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||o.push({entity:s.entity,time:a})}return o.sort((s,a)=>s.time-a.time)}function ta(r,t,e,n=He){let i=new Map(r.map(s=>[s.entity,s])),o=[];for(let s of t){let a=i.get(s.entity);if(!a)continue;let l=o[o.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||o.push({...a,time:s.time,age:Math.min(1,Math.max(0,(e-s.time)/n))})}return o.slice(-40)}function yn(r,t){return new Date(t).toLocaleTimeString(r.language,{hour:"2-digit",minute:"2-digit"})}var ea='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var zc=Math.PI/180,ue=r=>Math.min(1,Math.max(0,r)),Rt=(r,t,e)=>r.map((n,i)=>n+(t[i]-n)*e);var na=.3;var oa={top:[74,140,214],horizon:[178,208,234]},ia={top:[148,155,164],horizon:[192,197,203]},ra={top:[8,12,26],horizon:[24,32,54]},jl=[244,156,104],sa=[186,190,195],Kl=[88,112,70],Ul=[226,231,238];function aa(r,t){let e=t??{cloud:0,rain:0,snow:0,fog:0},n=r??90,i=ue(e.cloud),o=ue((n+6)/12),s=1-.32*ue(e.rain),a=Rt(oa.top,ia.top,i).map(b=>b*s),l=Rt(oa.horizon,ia.horizon,i).map(b=>b*s),c=ue(1-Math.abs(n-1)/7)*(1-i);l=Rt(l,jl,c*.85),a=Rt(a,[92,112,168],c*.4);let d=ue(e.fog);a=Rt(a,sa,d),l=Rt(l,sa,d),a=Rt(ra.top,a,o),l=Rt(ra.horizon,l,o);let h=Rt(Kl,Ul,ue(e.snow*1.25)).map(b=>b*(na+(1-na)*o)),f=b=>b.map(y=>Math.round(y));return{top:f(a),horizon:f(l),ground:f(h)}}var wn=r=>r.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function xn(r,t){let e=[],n=Se(r,t.floors),i=t.floors.length>1;for(let o of t.floors){let s=(d,u)=>o.rooms.find(h=>h.points.length>=3&&K([d,u],h.points))??null,a=(d,u)=>[s(d,u)?.name,i?o.name:null].filter(Boolean).join(" \xB7 ");for(let d of o.rooms){if(d.points.length<3)continue;let[u,h]=Et(d.points);e.push({kind:"room",name:d.name,where:i?o.name:"",floorId:o.id,roomId:d.id,entity:null,icon:null,x:u,z:h,y:0})}let l=new Set,c=(d,u,h,f)=>{l.has(d)||!r.states[d]||(l.add(d),e.push({kind:"device",name:D(r,d),where:a(u,h),floorId:o.id,roomId:s(u,h)?.id??null,entity:d,icon:L(d),x:u,z:h,y:f}))};for(let d of o.placements)c(d.entity_id,d.x,d.z,d.y??Bi(L(d.entity_id)??"sensor",o.height,d.mount));for(let d of o.furniture){let u=n.get(d.id),h=u?.entity??u?.power;h&&c(h,d.x,d.z,Math.min(o.height-.3,Math.max(.5,d.h)))}}return e}function la(r,t,e=8){let n=wn(t).split(/\s+/).filter(Boolean);if(!n.length)return[];let i=r.filter(a=>{let l=wn(`${a.name} ${a.where} ${a.entity??""}`);return n.every(c=>l.includes(c))}),o=wn(t.trim()),s=a=>(wn(a.name).startsWith(o)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,e)}var Fe=new Map;async function So(r,t){}async function da(r,t){for(let e of Fe.values())if(e.module.voice)try{let n=await e.module.voice(r,t);if(n)return n}catch(n){console.warn(`Home 3D: module ${e.id} failed on "${r}"`,n)}return null}function ca(r){return Qt(t=>t.scene?.(r))}function ua(r){return Qt(t=>t.cards?.(r))}function pa(r){return Qt(t=>t.alerts?.(r))}function ha(r){return Qt(t=>t.watched?.(r))}function Mo(r,t){return Qt(e=>e.roomSheets?.(r,t))}function Io(r){return Qt(t=>t.menuSheets?.(r))}function To(){return[...Fe.values()].filter(r=>!!r.module.settings).map(r=>r.id)}function fa(r,t){let e=Fe.get(r);if(!e?.module.settings)return[];try{return e.module.settings(t)??[]}catch(n){return console.warn(`Home 3D: module ${e.id} failed`,n),[]}}function ma(r){return Qt(t=>t.pools?.(r))}function Zt(){return Fe.size>0}function Qt(r){let t=[];for(let e of Fe.values())try{t.push(...r(e.module)??[])}catch(n){console.warn(`Home 3D: module ${e.id} failed`,n)}return t}function ba(r,t,e){let n=r.filter(l=>Number.isFinite(l));if(n.length<2)return"";let i=Math.min(...n),s=Math.max(...n)-i||1,a=l=>Math.round(l*10)/10;return n.map((l,c)=>`${a(c/(n.length-1)*t)},${a(e-1-(l-i)/s*(e-2))}`).join(" ")}function ga(r,t){if(!r.length)return[.25,.7,1];if(r.length===1)return r[0];let e=Math.min(1,Math.max(0,t))*(r.length-1),n=Math.min(r.length-2,Math.floor(e)),i=e-n,[o,s]=[r[n],r[n+1]];return[o[0]+(s[0]-o[0])*i,o[1]+(s[1]-o[1])*i,o[2]+(s[2]-o[2])*i]}function va(r){let t=[];for(let e of r){let n=e.points;if(n.length<2)continue;let i=[],o=0;for(let l=1;l<n.length;l++){let c=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);i.push(c),o+=c}if(o<.01)continue;let s=e.colors.length===n.length,a=0;for(let l=1;l<n.length;l++){let c=i[l-1];if(c<.005)continue;let d=s?ga([e.colors[l-1],e.colors[l]],.5):ga(e.colors,(a+c/2)/o);t.push({floorId:e.floorId,a:[...n[l-1]],b:[...n[l]],dist:a,power:Math.max(0,e.flow),color:d,...e.width?{width:Math.min(3,Math.max(.5,e.width))}:{},...e.look==="pipe"?{pipe:!0}:{},...e.views==="house"?{house:!0}:e.views==="floor"?{floor:!0}:{}}),a+=c}}return t}function ya(r){return r&&[...r].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(r)?r:null}function wa(r){return r&&r.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(r)?r:null}function kn(r,t){return(r??[]).filter(e=>!t||!e.minor)}var Gl=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Yl=[2200,2700,3200,4e3,5e3,6500],Jl=["hs","rgb","rgbw","rgbww","xy"],Xl=4,Zl=16,Ql=32,td=128;function Eo(r){let t=r.attributes.supported_color_modes??[],e=t.some(n=>Jl.includes(n));return{dim:t.some(n=>n!=="onoff"),color:e,temp:t.includes("color_temp")}}function Ao(r){return((r.attributes.supported_features??0)&Xl)!==0&&typeof r.attributes.current_position=="number"}var Po=class extends Ue{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},noLook:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{L(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(t){let e=t.attributes.entity_picture,n=e?e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return m`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?m`<img src=${n} alt=${D(this.hass,this.entity)} />`:m`<span class="qm-note">${nt(this.hass,t)}</span>`}
      </button>
      ${this.noLook?x:m`<button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
            ${this.t("through_camera")}
          </button>`}`}t(t,e){return _(this.hass,t,e)}async ask(){return!this.confirmSwitch||await this.question(this.t("confirm_switch",{name:D(this.hass,this.entity)}))}async guarded(t){await this.ask()&&t()}question(t){return tn(t,{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")})}call(t,e,n={}){$e(this.hass,t,e,{entity_id:this.entity,...n},i=>this.t("service_failed",{error:i}))}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){gt(this,this.entity),this.close()}ring(t){let e=t.length;return t.map((n,i)=>{let o=i/e*Math.PI*2-Math.PI/2;return m`<div class="qm-at" style="left:${50+Math.cos(o)*39}%;top:${50+Math.sin(o)*39}%">${n}</div>`})}renderLight(t){let e=Eo(t),n=t.state==="on",i=n&&typeof t.attributes.brightness=="number"?Math.round(t.attributes.brightness/2.55):n?100:0,o=e.color?Gl.map(s=>m`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):e.temp?Yl.map(s=>m`<button class="qm-swatch" style="background:${ed(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return m`<div class="qm-ring ${o.length?"":"qm-ring-small"}">
        ${this.ring(o)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>{this.guarded(()=>this.call("light","toggle"))}}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${e.dim?m`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:x}`}renderCover(t){let e=typeof t.attributes.current_position=="number"?t.attributes.current_position:null,n=t.state==="opening"||t.state==="closing",i=Ao(t),o=(c,d,u,h=!1)=>m`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${d} @click=${u}>${c}</button>`,s=c=>e!==null&&Math.abs(e-c)<3,a=[o("\u25B2",this.t("cover_open"),()=>{this.guarded(()=>this.call("cover","open_cover"))},s(100)),...i?[75,50].map(c=>o(`${c}`,`${c} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:c}))},s(c))):[],o("\u25BC",this.t("cover_close"),()=>{this.guarded(()=>this.call("cover","close_cover"))},s(0)),...i?[25].map(c=>o(`${c}`,`${c} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:c}))},s(c))):[],o("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=e===null?t.state==="closed"?100:0:100-e;return m`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):void this.guarded(()=>this.call("cover",l>50?"open_cover":"close_cover"))}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${e!==null?`${e} %`:nt(this.hass,t)}</b>
        </button>
      </div>
      ${i?m`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(e??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:x}
      ${this.renderTilt(t)}`}renderTilt(t){let e=(t.attributes.supported_features??0)|0,n=typeof t.attributes.current_tilt_position=="number"?t.attributes.current_tilt_position:null;return e&td&&n!==null?m`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:Ci(t)?m`<div class="qm-tilt-buttons">
        ${e&Zl?m`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:x}
        ${e&Ql?m`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:x}
      </div>`:x}renderCar(t){let e=t.entities,n=(u,h,f,b={})=>$e(this.hass,u,h,{entity_id:f,...b},y=>this.t("service_failed",{error:y})),i=e.lock,o=!!i&&i.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=e.climate,l=!!a&&a.startsWith("climate."),c=e.charging&&s(e.charging)?e.charging:null,d=[t.soc!==null?`${Math.round(t.soc)} %`:null,t.range!==null?`${Math.round(t.range)} ${t.rangeUnit}`:null,t.charging?`\u26A1 ${this.t("car_charging_short")}`:t.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return m`<p class="qm-car-line">${d||nt(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${o||i&&s(i)?m`<button
              class="qm-swatch qm-slot ${t.locked?"qm-slot-on":""}"
              @click=${()=>t.locked?void this.question(this.t("car_unlock_confirm")).then(u=>u&&(o?n("lock","unlock",i):n("homeassistant","turn_off",i))):o?n("lock","lock",i):n("homeassistant","turn_on",i)}
            >
              ${t.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:x}
        ${a?m`<button class="qm-swatch qm-slot ${t.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",t.climateOn?"turn_off":"turn_on",a)}>
              ${t.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:x}
        ${c?m`<button class="qm-swatch qm-slot ${t.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",t.charging?"turn_off":"turn_on",c)}>
              ${t.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:x}
        ${!o&&!a&&!c?m`<p class="qm-note">${this.t("car_no_controls")}</p>`:x}
      </div>`}renderMedia(t){let e=t.attributes,n=t.state==="playing",i=t.state==="off"||t.state==="standby",o=typeof e.volume_level=="number"?Math.round(e.volume_level*100):null,s=[e.media_title,e.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof e.entity_picture=="string"?e.entity_picture:null;return m`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":n?"media_pause":"media_play")}>
          <span>${i?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?m`<p class="qm-media-title">${s}</p>`:x}
      ${o!==null?m`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(o)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:x}
      ${this.renderPlay(t)}`}renderPlay(t){let e=Array.isArray(t.attributes.source_list)?t.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!e.length&&!n.length)return x;let i=t.attributes.source;return m`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(o=>m`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:o.type,media_content_id:o.content})}>
            ▶ ${o.label}
          </button>`)}
        ${e.map(o=>m`<button class="qm-chip ${o===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:o})}>${o}</button>`)}
      </div>`}renderDoorLock(t){let e=t.state==="locked"||t.state==="locking"||t.state==="jammed",n=D(this.hass,this.entity),i=async()=>{await this.question(this.t(e?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",e?"unlock":"lock"),this.close())};return m`<p class="qm-car-line">${nt(this.hass,t)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${e?"qm-slot-on":""}" @click=${i}>${e?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(t){let e=t.state==="on"||t.state==="unlocked"||t.state==="playing",n=t.entity_id.split(".")[0];return m`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${e?"qm-on":""}"
        aria-pressed=${e}
        @click=${()=>{this.guarded(()=>n==="lock"?this.call("lock",e?"lock":"unlock"):this.call("homeassistant","toggle"))}}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${nt(this.hass,t)}</b>
      </button>
    </div>`}render(){let t=this.hass?.states[this.entity];if(!t)return x;let e=L(this.entity),n=this.car?this.renderCar(this.car):Y(t)?m`<p class="qm-note">${nt(this.hass,t)}</p>`:this.doorLock&&e==="lock"?this.renderDoorLock(t):e==="light"?this.renderLight(t):e==="cover"?this.renderCover(t):e==="camera"?this.renderCamera(t):e==="media"?this.renderMedia(t):this.renderToggle(t);return m`<div class="qm" role="dialog" aria-label=${D(this.hass,this.entity)}>
      <div class="qm-title">${D(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[en,Ke`
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
    `]};function ed(r){let t=Math.min(1,Math.max(0,(r-2200)/4300)),e=(n,i)=>Math.round(n+(i-n)*t);return`rgb(${e(255,200)},${e(170,225)},${e(80,255)})`}je("fp3d-quick-menu",Po);var nd=new URL(import.meta.url),od=new URL("./home-3d-3d.js?v=0f5a77f7082b",nd).href,xa;function _n(){return xa??=import(od),xa}var Ro;function ka(){let r=new URL("./home-3d-2d.js?v=3d2c5206b4c8",new URL(import.meta.url)).href;return Ro??=import(r).catch(t=>{throw Ro=void 0,t}),Ro}function _a(r,t,e){return e?!0:r.show==="never"||t==="none"||t==="room"?!1:!!r.lamp||!!r.model}var zo=er("home-3d-fun",()=>"0b9b6c0deb20");var $n={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"},id=new Set(["problem","safety","smoke","gas","carbon_monoxide","heat","moisture","tamper","battery"]),rd=/\b(ob|lb|on battery|low battery|discharg\w*|overload\w*|replace|error|fault\w*|degraded|warning|alarm|update)\b/,$a=/\b(off|offline|disconnected|down|stopped|not_home|away|unreachable|dead|lost|shutdown|halted|failed)\b/,sd=/\b(ol|on|online|connected|up|running|home|ok|normal|idle|healthy|active|charging|charged|ready)\b/;function pe(r){let t=[];for(let e of[r.entity,...r.links??[]])e&&!t.includes(e)&&t.push(e);return t}function Sa(r){if(!r)return null;let t=String(r.state??"").toLowerCase();if(t==="unavailable")return"offline";if(t==="unknown"||t==="")return"warning";let e=r.entity_id.slice(0,r.entity_id.indexOf("."));if(e==="binary_sensor"){let i=id.has(String(r.attributes?.device_class??""));return t==="on"?i?"warning":"online":i?"online":"offline"}if(e==="update")return t==="on"?"warning":"online";if(e==="device_tracker"||e==="person")return t==="home"?"online":"offline";if(e==="switch"||e==="input_boolean"||e==="light"||e==="fan")return t==="on"?"online":"offline";if(Number.isFinite(Number(t)))return"online";let n=t.replace(/[_-]+/g," ");return rd.test(n)?"warning":$a.test(n)||$a.test(t)?"offline":(sd.test(n),"online")}function te(r,t){let n=(t.links??[]).filter(s=>s&&s!==t.entity).map(s=>r.states[s]).filter(s=>!!s),i=n.filter(s=>s.state==="unavailable").length,o=n.some(s=>s.state!=="unavailable"&&Sa(s)==="warning");if(t.entity){let s=Sa(r.states[t.entity])??"offline";return s==="online"&&(i||o)?"warning":s}return n.length?i===n.length?"offline":i||o?"warning":"online":null}function Ma(r,t){let e=new Map;for(let n of t)for(let i of n.furniture){let o=i.rack?.slots;if(o?.length)for(let s of o){if(!s.entity&&!s.links?.length)continue;let a=te(r,s);a&&e.set(`${i.id}/${s.id}`,a)}}return e}function Ia(r,t){let e=t.slice(0,t.indexOf(".")),n=r.states[t],i=String(n?.attributes?.device_class??""),o=String(n?.attributes?.unit_of_measurement??""),s=`${t.slice(e.length+1)} ${r.entities?.[t]?.translation_key??""}`.toLowerCase();return e==="update"?"update":e==="button"?"button":e==="switch"?"switch":e==="device_tracker"?"status":e==="binary_sensor"?["connectivity","running","plug","power","problem"].includes(i)||/status|state|online|connected|running/.test(s)?"status":"other":e!=="sensor"?"other":/runtime/.test(s)||i==="duration"&&/battery/.test(s)?"runtime":i==="battery"||/battery|charge/.test(s)&&o==="%"?"battery":i==="temperature"?"temperature":i==="power"||o==="W"||o==="kW"?"power":i==="data_rate"||/\/s$/.test(o)||/throughput|bandwidth|download|upload|\b(rx|tx)\b|_(rx|tx)(_|$)|network_(in|out)|packets/.test(s)?"throughput":/uptime|last_boot|boot_time/.test(s)||i==="timestamp"&&/up|boot/.test(s)?"uptime":/cpu|processor/.test(s)?"cpu":/memory|\bram\b|swap/.test(s)?"memory":/disk|volume|storage|drive|pool|\bfs\b|used_space|free_space/.test(s)?"disk":/load/.test(s)?"load":/status|state/.test(s)||i==="enum"?"status":"other"}var Ta=8,he="@hottest",ee="@online";function Pa(r,t){let e=new Set,n=[];for(let i of t)for(let o of pe(i))e.has(o)||(e.add(o),n.push({id:o,kind:Ia(r,o),slot:i}));return n}var Co=(r,t)=>String(r.states[t]?.attributes?.unit_of_measurement??""),Ho=(r,t)=>Co(r,t)==="%",ad=(r,t)=>r.some(e=>e.slot===t&&(e.kind==="battery"||e.kind==="runtime"));function ld(r,t,e=Ta){let n=Pa(r,t),i=l=>n.filter(c=>c.kind===l),o=l=>ad(n,l.slot),s=(l,...c)=>{for(let d of c){let u=l.find(d);if(u)return u.id}return null};return[s(i("load"),l=>o(l)&&Ho(r,l.id),l=>Ho(r,l.id)),s(i("battery"),o,()=>!0),s(i("runtime"),()=>!0),s(i("power"),l=>/poe/.test(l.id),o),i("temperature").length?he:null,t.some(l=>te(r,l)!==null)?ee:null,s(i("disk"),l=>Ho(r,l.id)&&!/free/.test(l.id)),s(i("throughput"),l=>/wan|uplink|internet|external/.test(l.id),()=>!0)].filter(l=>!!l).slice(0,e)}var Sn=(r,t)=>{let e=r.states[t];if(!e||e.state===""||e.state==="unavailable"||e.state==="unknown")return null;let n=Number(e.state);return Number.isFinite(n)?n:null};function Mn(r,t,e){let n=Pa(r,t),i=[...new Set(e??ld(r,t))],o=[];for(let s of i){if(o.length>=Ta)break;if(s===he){let a=n.filter(d=>d.kind==="temperature"),l=null;for(let d of a){let u=Sn(r,d.id);u!==null&&(!l||u>Sn(r,l.id))&&(l=d)}if(!a.length)continue;let c=l?Sn(r,l.id):null;o.push({key:s,kind:"temperature",slot:l?.slot.id??null,value:c,unit:l?Co(r,l.id):"",text:c===null?"unavailable":String(r.states[l.id].state),ids:a.map(d=>d.id),agg:"max"})}else if(s===ee){let a=t.map(c=>te(r,c)).filter(c=>c!==null);if(!a.length)continue;let l=a.filter(c=>c==="online").length;o.push({key:s,kind:"status",slot:null,value:l,of:a.length,unit:"",text:`${l}/${a.length}`,ids:[],agg:"one"})}else{let a=n.find(c=>c.id===s);if(!a)continue;let l=Sn(r,s);o.push({key:s,kind:a.kind,slot:a.slot.id??null,value:l,unit:Co(r,s),text:String(r.states[s]?.state??"unavailable"),ids:l===null?[]:[s],agg:"one"})}}return o}function Ea(r,t){let e=new Map;for(let n of t.ids)for(let i of r?.[n]??[]){if(typeof i.mean!="number")continue;let o=typeof i.start=="number"?i.start:Date.parse(i.start),s=e.get(o);e.set(o,s===void 0?i.mean:Math.max(s,i.mean))}return[...e].sort((n,i)=>n[0]-i[0]).map(([,n])=>n)}async function Aa(r,t,e,n=Date.now()){try{return await r.callWS({type:"recorder/statistics_during_period",start_time:new Date(n-e).toISOString(),statistic_ids:[...t],period:"5minute",types:["mean"]})??{}}catch{return null}}function Ra(r,t){let e=r.points,n=e[t],i=e[(t+1)%e.length],o=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/o,(i[1]-n[1])/o],a=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];K([l[0]+a[0]*.02,l[1]+a[1]*.02],e)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:n,b:i,u:s,n:a,length:o,rightward:s[0]*c[0]+s[1]*c[1]>0}}function In(r,t){let e=t[0]-r.a[0],n=t[1]-r.a[1];return{s:e*r.u[0]+n*r.u[1],d:e*r.n[0]+n*r.n[1]}}function Fo(r,t,e){return[r.a[0]+r.u[0]*t+r.n[0]*e,r.a[1]+r.u[1]*t+r.n[1]*e]}var dd=.45;function za(r,t){let e=[];for(let n of t.openings){if(n.wall)continue;let i=t.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:o,d:s}=In(r,rn(i,n.edge,n.offset));Math.abs(s)>.4||o<-.05||o>r.length+.05||e.push(cd(n,o))}return e}function cd(r,t){return{kind:"opening",id:r.id,s0:t-r.width/2,s1:t+r.width/2,y0:r.sill,y1:r.sill+r.height,d:0}}function Ha(r,t,e,n=dd){let i=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let s=K([o.x,o.z],e.points),a=_e(o).map(f=>In(r,f)),l=Math.min(...a.map(f=>f.d)),c=Math.min(...a.map(f=>f.s)),d=Math.max(...a.map(f=>f.s)),u=In(r,[o.x,o.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||d<.02||c>r.length-.02)continue;let h=X(t,o);i.push({kind:"furniture",id:o.id,s0:c,s1:d,y0:h,y1:h+o.h,d:l})}return i}var Ca=.3;function Oe(r,t){let e=r.from?t(r.from):null,n=r.to?t(r.to):null,i=r.height??Ca,o=[];if(r.heights)e&&o.push([e.x,e.y,e.z]),r.points.forEach(([s,a],l)=>o.push([s,r.heights?.[l]??i,a])),n&&o.push([n.x,n.y,n.z]);else{if(!e||!n)return[];o.push([e.x,e.y,e.z],[e.x,i,e.z]);for(let[s,a]of r.points)o.push([s,i,a]);o.push([n.x,i,n.z],[n.x,n.y,n.z])}return o.filter((s,a)=>a===0||Oo(s,o[a-1])>.001)}function Oo(r,t){return Math.hypot(t[0]-r[0],t[1]-r[1],t[2]-r[2])}function Tn(r){let t=0;for(let e=1;e<r.length;e++)t+=Oo(r[e-1],r[e]);return t}function Pn(r,t){if(r.length<2)return null;let e=Math.max(0,t);for(let n=1;n<r.length;n++){let[i,o]=[r[n-1],r[n]],s=Oo(i,o);if(!(s<1e-6)){if(e<=s||n===r.length-1){let a=Math.min(1,e/s),l=[(o[0]-i[0])/s,(o[1]-i[1])/s,(o[2]-i[2])/s];return{p:[i[0]+(o[0]-i[0])*a,i[1]+(o[1]-i[1])*a,i[2]+(o[2]-i[2])*a],dir:l,seg:n-1}}e-=s}}return null}function ne(r){let[t="",e="",n]=r.split(":");return{kind:t,id:e,port:n||null}}function ud(r,t){let{w:e,d:n,h:i}=r;if(r.type==="pool_pump")return t==="suction"?[e*.5,i*.55,0]:t==="pressure"?[e*.05,i*.9,0]:null;if(r.type==="pool_filter"){let o=Math.min(e,n)/2;if(r.variant==="side6"){let l=o+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let s=i*.89,a=o*.45+.04;return t==="pump"?[-a,s,0]:t==="return"?[a,s,0]:t==="waste"?[0,s,-a]:null}if(r.type==="pool_heat_pump"){let o=r.variant==="left"||r.variant==="back"?r.variant:"right";if(t!=="in"&&t!=="out")return null;let s=t==="in"?i*.25:i*.45;return o==="back"?[t==="in"?-e*.15:e*.15,s,-n/2-.04]:[(o==="left"?-1:1)*(e/2+.04),s,-n*.2]}return null}function Fa(r,t){let e=ud(r,t);if(!e)return null;let n=r.rotation*Math.PI/180,[i,o]=[Math.cos(n),Math.sin(n)];return{x:r.x+e[0]*i-e[2]*o,y:e[1],z:r.z+e[0]*o+e[2]*i}}function De(r,t){if(t==="outside"){if(r.kind==="floor")return{x:r.x,y:r.y-.3,z:r.z};if(r.kind==="wall"){let e=(r.depth??.3)+.05;return{x:r.x-(r.nx??0)*e,y:r.y,z:r.z-(r.nz??0)*e}}}return{x:r.x,y:r.y,z:r.z}}function Da(r){return r.flatMap(t=>(t.outdoor??[]).filter(e=>e.type==="pool"&&e.pool&&e.points.length>=3).map(e=>({floor:t,area:e})))}var Do=[.25,.7,1],pd=900;function La(r,t,e,n=i=>i){let i=[];for(let o of r){let s=n(Oe(o,e),o);if(s.length<2)continue;let a=t.get(o.id),l=a?.color??Do,c=0;for(let d=1;d<s.length;d++){let[u,h]=[s[d-1],s[d]],f=Math.hypot(h[0]-u[0],h[1]-u[1],h[2]-u[2]);f<.01||(i.push({floorId:o.floor_id,a:u,b:h,dist:c,power:a?.active?pd:0,color:l}),c+=f)}}return i}function En(r,t,e){let n=e.pool??{},i=ke(t,e);return o=>{let{kind:s,id:a,port:l}=ne(o);if(s==="port"){let c=n.ports?.find(u=>u.id===a);if(!c)return null;let d=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?xe(t,e)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:d}}if(s==="joint"){let c=n.joints?.find(d=>d.id===a);return c?De(c,l):null}if(s!=="dev")return null;for(let c of r.floors){let d=c.furniture.find(b=>b.id===a);if(!d||!$i.includes(d.type))continue;let u=l?Fa(d,l):null,h=c.elevation-t.elevation;if(u)return{...u,y:u.y+X(c,d)+h};let f=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?Si:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:f+X(c,d)+h}}return null}}function Lo(r,t,e,n){let i=d=>{let{kind:u,id:h}=ne(d);return u==="port"?e.pool?.ports?.find(f=>f.id===h)?.kind:void 0},o=d=>i(d)==="drain",s=d=>i(d)==="inlet"||i(d)==="skimmer",a=d=>{if(d.length<2)return d;let u=d[0],h=Wo(e,[u[0],u[2]]);if(!h)return d;let f=[u[0]+h[0]*.35,u[1],u[2]+h[1]*.35],b=1;for(;b<d.length&&Math.hypot(d[b][0]-u[0],d[b][2]-u[2])<.01;)b++;let y=d.slice(b).map(p=>[...p]);for(let p=0;p<y.length-1;p++){let w=(y[p][0]-u[0])*h[0]+(y[p][2]-u[2])*h[1];if(w>=.349999)break;y[p][0]+=h[0]*(.35-w),y[p][2]+=h[1]*(.35-w)}let v=y[0]??d[d.length-1];return[u,f,[f[0],v[1],f[2]],...y]},l=d=>{if(d.length<2)return d;let u=d[0];if(!K([u[0],u[2]],e.points))return d;let h=xe(n,e)-.15,f=d.findIndex((p,w)=>w>0&&Math.hypot(p[0]-u[0],p[2]-u[2])>.01);if(f<0)return d;let b=d[f],y=[b[0],b[2]];for(let p=0;p<e.points.length;p++){let w=e.points[p],$=e.points[(p+1)%e.points.length],P=hd([u[0],u[2]],[b[0],b[2]],w,$);P&&(y=P)}let v=Math.hypot(y[0]-u[0],y[1]-u[2])>1e-6?[y[0]+(y[0]-u[0])*.02,y[1]+(y[1]-u[2])*.02]:y;return[u,[u[0],h,u[2]],[v[0],h,v[1]],[v[0],b[1],v[1]],...d.slice(f)]},c=r;return t.from&&o(t.from)&&(c=l(c)),t.to&&o(t.to)&&(c=l([...c].reverse()).reverse()),t.from&&s(t.from)&&(c=a(c)),t.to&&s(t.to)&&(c=a([...c].reverse()).reverse()),c}function Wo(r,t){let e=r.points;if(e.length<3)return null;let n=0;for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length];n+=s[0]*a[1]-a[0]*s[1]}let i=null;for(let o=0;o<e.length;o++){let s=e[o],a=e[(o+1)%e.length],l=a[0]-s[0],c=a[1]-s[1],d=Math.hypot(l,c);if(d<1e-6)continue;let u=Math.max(0,Math.min(1,((t[0]-s[0])*l+(t[1]-s[1])*c)/(d*d))),h=Math.hypot(s[0]+l*u-t[0],s[1]+c*u-t[1]),f=n>0?[c/d+0,-l/d+0]:[-c/d+0,l/d+0];(!i||h<i.d)&&(i={d:h,n:f})}return i?i.n:null}function hd(r,t,e,n){let i=[t[0]-r[0],t[1]-r[1]],o=[n[0]-e[0],n[1]-e[1]],s=i[0]*o[1]-i[1]*o[0];if(Math.abs(s)<1e-9)return null;let a=((e[0]-r[0])*o[1]-(e[1]-r[1])*o[0])/s,l=((e[0]-r[0])*i[1]-(e[1]-r[1])*i[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[r[0]+i[0]*a,r[1]+i[1]*a]:null}var pt=r=>Math.round(r*1e3)/1e3;var Wa=-.3;function Na(r,t,e,n,i){let o=[],s=[],a=v=>t(v),l=[],c=r.from,d=[];for(let v of r.vias){if(v.kind!=="hole"){d.push(v.kind);continue}let p=e.find(R=>R.id===v.joint),w=a(c);if(!p||!w)continue;let $=a(`joint:${p.id}:inside`),P=a(`joint:${p.id}:outside`),H=v.dir?v.dir==="out":Math.hypot(w.x-$.x,w.z-$.z)<=Math.hypot(w.x-P.x,w.z-P.z);l.push({a:c,b:`joint:${p.id}:${H?"inside":"outside"}`,fits:d}),d=[],c=`joint:${p.id}:${H?"outside":"inside"}`}let u=r.to;if(u.length>1){let v=a(c),p=u.map(a).filter(w=>!!w);if(v&&p.length===u.length){let w=p.reduce((z,E)=>z+E.x,0)/p.length,$=p.reduce((z,E)=>z+E.z,0)/p.length,P=Math.hypot(v.x-w,v.z-$)||1,H=Math.min(1,P/2)/P,R=v.y<0||p.some(z=>z.y<0),B={id:i("joint"),kind:"tee",x:pt(w+(v.x-w)*H),z:pt($+(v.z-$)*H),y:R?Wa:pt(v.y)};s.push(B),l.push({a:c,b:`joint:${B.id}:in`,fits:d}),d=[],u.forEach((z,E)=>l.push({a:`joint:${B.id}:out${E+1}`,b:z,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let h=v=>{let{kind:p,id:w,port:$}=ne(v),P=p==="joint"?s.find(H=>H.id===w):void 0;return P?De(P,$):a(v)},f=v=>n(v)==="source",b=v=>n(v)==="sink",y=r.to.some(f)&&!f(r.from)||b(r.from)&&!r.to.some(b);for(let v of l){let p=h(v.a),w=h(v.b);if(!p||!w)continue;let $=fd(p,w,Oa(v.a,e),Oa(v.b,e)),P={id:i("pipe"),from:v.a,to:v.b,floor_id:r.floorId,points:$.map(R=>[R[0],R[2]]),heights:$.map(R=>R[1])},H=Tn(Oe(P,h));P.fittings=v.fits.map((R,B)=>({id:i("fit"),kind:R,at:pt(Math.min(H/2,.4+B*.25)),...R==="valve"?{open:!0}:{}})),y&&(P={...P,from:P.to,to:P.from,points:[...P.points].reverse(),heights:[...P.heights??[]].reverse(),fittings:P.fittings?.map(R=>({...R,at:pt(Math.max(0,H-R.at))}))}),o.push(P)}return{pipes:o,joints:s}}function Oa(r,t){let{kind:e,id:n,port:i}=ne(r),o=e==="joint"&&i==="outside"?t.find(s=>s.id===n):void 0;return o?.kind==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function fd(r,t,e=null,n=null){let i=r.y<0||t.y<0?Wa:pt(Math.max(r.y,t.y)),o=[],[s,a]=[r.x,r.z];e&&([s,a]=[pt(s+e[0]*.5),pt(a+e[1]*.5)],o.push([s,pt(r.y),a]));let[l,c]=[t.x,t.z],d=[];return n&&([l,c]=[pt(l+n[0]*.5),pt(c+n[1]*.5)],d.push([l,pt(t.y),c])),o.push([pt(s),i,pt(a)]),Math.abs(l-s)>.01&&o.push([pt(l),i,pt(a)]),Math.abs(c-a)>.01&&o.push([pt(l),i,pt(c)]),o.push(...d),o.filter((u,h)=>h===0||Math.hypot(u[0]-o[h-1][0],u[1]-o[h-1][1],u[2]-o[h-1][2])>.001)}var md=2e3;function gd(r){return Math.max(0,md-r)}var bd=1e3;function Va(r,t){return t?gd(r):Math.max(0,bd-r)}function Ba(r){return r>.5?Math.min(2.4,.6+Math.sqrt(r)/50):.6}function qa(r,t,e,n){let i=[];for(let o of t.floors){if(n&&o.id!==n)continue;let s=vt(o).map(a=>vd(r,t,o,a.id,e));s.length&&i.push({floorId:o.id,name:o.name,rooms:s})}return i}function vd(r,t,e,n,i){let o=vt(e).find(c=>c.id===n),s=new Set;for(let c of ji(r,yt(r,o.area_id)))L(c)==="light"&&s.add(c);for(let c of e.placements)L(c.entity_id)==="light"&&o.points.length>=3&&K([c.x,c.z],o.points)&&s.add(c.entity_id);let a=Lt(r,e,o,"temperature"),l=i.filter(c=>!c.quiet&&(c.roomId===o.id||!c.roomId&&(!c.floorId||c.floorId===e.id)));return{floorId:e.id,roomId:o.id,name:o.name,lights:s.size,lightsOn:[...s].filter(c=>r.states[c]?.state==="on").length,temperature:a===null?null:`${j(r,At(r,a),1)} ${Dt(r)}`,alerts:l.map(c=>ze(r,t,c))}}function ja(r,t){let e=[];return t.lights&&e.push(t.lightsOn?_(r,"sr_lights_on",{on:t.lightsOn,total:t.lights}):_(r,"sr_lights_off")),t.temperature&&e.push(t.temperature),e.push(...t.alerts),e.length?`${t.name}: ${e.join(", ")}`:t.name}function fe(r){return t=>{t.target!==t.currentTarget||t.key!=="Enter"&&t.key!==" "||(t.preventDefault(),r())}}function Ka(r,t,e,n=12,i=180){let o=Math.max(i,t),s=Math.max(i*.5625,e),a={cols:1,tile:Math.min(o,s*16/9)};for(let l=1;l<=Math.max(1,r);l++){let c=Math.ceil(r/l),d=(o-n*(l-1))/l,u=(s-n*(c-1))/c*16/9,h=Math.min(d,u);(h>a.tile||l===1)&&(a={cols:l,tile:h})}if(a.tile<i){let l=Math.max(1,Math.floor((o+n)/(i+n)));return{cols:Math.min(l,Math.max(1,r)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}function An(r){return Ye(r)&&/:(?:[a-z0-9_.-]*_)?3d_printer(?:_[a-z0-9_.-]*)?$/.test(r)}var yd=/(progress|percent|completion|fortschritt)/,wd=/(status|state|printing)/,xd=/(chamber|light|lamp|led)/;function No(r,t){let e={status:null,progress:null,light:null,camera:null};if(!t||t==="none")return e;let n=r.entities?.[t]?.device_id,i=n&&r.entities?Object.values(r.entities).filter(u=>u.device_id===n).map(u=>u.entity_id):[t],o=u=>`${u} ${String(r.states[u]?.attributes.friendly_name??"")} ${r.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),s=u=>u.startsWith("sensor.")&&r.states[u]?.attributes.unit_of_measurement==="%",a=i.find(u=>s(u)&&yd.test(o(u)))??null,c=(/^(sensor|binary_sensor)\./.test(t)&&t!==a?t:null)??i.find(u=>(Ze(r.states[u])||u.startsWith("binary_sensor."))&&wd.test(o(u)))??null,d=i.filter(u=>u.startsWith("light."));return{status:c,progress:a,light:d.find(u=>/chamber/.test(o(u)))??d[0]??i.find(u=>u.startsWith("switch.")&&xd.test(o(u)))??null,camera:i.find(u=>u.startsWith("camera."))??null}}function Ua(r,t){let e=No(r,t),n=l=>l?r.states[l]:void 0,i=n(e.status),o=!!i&&(i.entity_id.startsWith("binary_sensor.")?i.state==="on":Di(i.state)||/^paused?$/i.test(i.state)),s=Number(n(e.progress)?.state),a=o&&e.progress&&Number.isFinite(s)?Math.min(1,Math.max(0,s/100)):null;return{printing:o,progress:a,light:Ut(n(e.light)),camera:e.camera&&!Y(n(e.camera))?e.camera:null}}var kd=[.35,1,.55];function Ga(r){let t=[];return r.printing&&t.push({part:"progress",color:kd,level:1,fill:Math.round((r.progress??0)*100)/100}),r.light&&t.push({part:"chamber",color:r.light.color,level:r.light.level}),t}function Vo(r,t,e){let n=[...e.openings.values()].flatMap(M=>[M.cover,M.contact,M.tilt,M.contact2??null,M.tilt2??null,M.position??null,M.tiltAngle??null,M.lock??null]),i=Ir(t),o=i.filter(M=>L(M)==="camera").flatMap(M=>Wt(r,M)),s=i.map(M=>sn(r,M)),a=t.energy,l=t.presence.flatMap(M=>[M.person,M.sensor]),c=t.floors.flatMap(M=>M.rooms.flatMap(A=>yt(r,A.area_id).filter(et=>L(et)==="light"))),d=[...e.furniture.values()].flatMap(M=>[M.entity,M.power]),u=t.floors.flatMap(M=>M.furniture.flatMap(A=>[A.state_entity??null,A.state_entity2??null,A.color_entity??null,A.show_when?.entity??null])),h=t.floors.flatMap(M=>M.furniture.flatMap(A=>[A.door_left??null,A.door_right??null,A.soc??null,A.status??null,A.charge??null,A.export??null])),f=(t.settings.roof?.windows??[]).flatMap(M=>[M.cover,M.contact,M.tilt]).filter(M=>!!M&&M!=="none"),b=[...(t.settings.roof?.solar??[]).map(M=>M.entity),...(t.settings.roof?.strings??[]).map(M=>M.entity)].filter(M=>!!M&&M!=="none"),y=t.floors.flatMap(M=>M.furniture.filter(A=>A.type==="robot_vacuum").map(A=>Ie(r,e.furniture.get(A.id)?.entity??null,A.room_sensor))),v=t.floors.flatMap(M=>M.furniture.flatMap(A=>(A.pictures??[]).flatMap(et=>[et.entity,...et.image.startsWith("camera:")?[et.image.slice(7)]:[]]))),p=e.heat?t.floors.flatMap(M=>M.rooms.flatMap(A=>yt(r,A.area_id).filter(et=>et.startsWith("sensor.")))):[],w=[...Js(t.floors),...Ji(r,t.floors)],$=Ce(r,t).map(M=>M.entity),P=[...t.floors.flatMap(M=>M.furniture.flatMap(As)),t.settings.household?.notes??null].filter(M=>!!M&&M!=="none"),H=Jt(r,e.weatherEntityId??t.settings.weather_entity),R=t.floors.flatMap(M=>M.furniture.filter(A=>An(A.type)).flatMap(A=>Object.values(No(r,e.furniture.get(A.id)?.entity??null)))),B=t.floors.flatMap(M=>[...M.rooms.flatMap(A=>nn(r,M,A,"motion")),...M.furniture.map(A=>kr(r,A))]),z=t.floors.flatMap(M=>M.furniture.flatMap(A=>(A.rack?.slots??[]).flatMap(pe))),E=[...i,...z,...R,...o,...n,...s,...d,...u,...h,...y,...f,...b,...v,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...c,...p,...e.warnings,...w,...$,...B,...P,H,"sun.sun"];return[...new Set(E.filter(M=>!!M))]}var Rn=r=>String(r).padStart(2,"0"),Bo=/^([01]\d|2[0-3]):[0-5]\d$/;function qo(r){return`${Rn(r.getHours())}:${Rn(r.getMinutes())}`}function _d(r,t,e){return t<=e?r>=t&&r<=e:r>=t||r<=e}function jo(r,t,e){return t<=e?r>=t&&r<e:r>=t||r<e}function $d(r){return!!r.from==!!r.to&&!!r.start==!!r.end}function Sd(r,t){if(!$d(r))return!1;let e=qo(t),i=!!r.start&&!!r.end&&r.start>r.end&&e<r.end?new Date(t.getFullYear(),t.getMonth(),t.getDate()-1):t,o=`${Rn(i.getMonth()+1)}-${Rn(i.getDate())}`;return r.from&&r.to&&!_d(o,r.from,r.to)?!1:!r.start||!r.end||jo(e,r.start,r.end)}function Md(r,t,e){let n=r.show_when;if(!n)return!0;let i=n.entity;if(i&&i!=="none"&&(t[i]?.state??"unavailable")==="unavailable")return!1;let o=n.intervals??[];return!o.length||o.some(s=>Sd(s,e))}function zn(r,t,e){return r.floors.flatMap(n=>n.furniture.filter(i=>!Md(i,t,e)).map(i=>i.id))}function Ya(r,t,e){let n=new Set(zn(r,t,e));return n.size?{...r,floors:r.floors.map(i=>({...i,furniture:i.furniture.filter(o=>!n.has(o.id))}))}:r}function Ja(r){return r.floors.some(t=>t.furniture.some(e=>!!e.show_when?.intervals?.length))}var Xa=/^#[0-9a-f]{3,8}$/i;function Id(r){let t=(r??"").trim();return!t||/["'()\\\s]/.test(t)?null:/^(https?:\/\/|\/)/i.test(t)||/^data:image\//i.test(t)?t:null}function Za(r){if(!r||!r.kind)return null;let t=r.color&&Xa.test(r.color)?r.color:"#0b1426",e=r.color2&&Xa.test(r.color2)?r.color2:"#03060c";if(r.kind==="color")return t;if(r.kind==="gradient")return`linear-gradient(180deg, ${t}, ${e})`;let n=Id(r.image);if(!n)return null;let i=Math.min(.9,Math.max(0,r.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${i}), rgba(4, 8, 16, ${i})), url("${n}") center / cover no-repeat`}function Td(r){return{a:r.a,b:r.b,u:r.u,n:r.n,length:r.length,rightward:!0}}var Ko={walls(r,t,e){let n=r.floors.find(o=>o.id===t),i=n?.rooms.find(o=>o.id===e);return!n||!i||i.points.length<3?[]:i.points.map((o,s)=>{let a=Ra(i,s),l=es(n,i.id,a.a,a.b),c=[...Ha(a,n,i).map(d=>[d.s0,d.s1]),...za(a,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?r.settings.wall_interior:r.settings.wall_exterior,taken:c}})},onWall(r,t,e){return Fo(Td(r),t,e)},freeSpot(r,t,e=.1){let n=o=>o>=e&&o+t<=r.length-e&&!r.taken.some(([s,a])=>o<a+.05&&o+t>s-.05),i=r.length/2-t/2;for(let o=0;o<=r.length;o+=.05){if(n(i-o))return Math.round((i-o)*100)/100;if(n(i+o))return Math.round((i+o)*100)/100}return null},nodeAt(r,t,e){let n=r.floors.find(a=>a.id===t),i=n?.outdoor.find(a=>a.id===e);if(!n||!i)return()=>null;let o=En(r,n,i),s=i.pool??{};return a=>{let{kind:l,id:c,port:d}=ne(a),u=l==="joint"?(s.joints??[]).find(f=>f.id===c):void 0;if(u)return De(u,d);let h=l==="port"?(s.ports??[]).find(f=>f.id===c):void 0;return h?o(a)??{x:h.x,y:.02,z:h.z}:o(a)}},connect(r,t,e,n,i,o){let s=r.floors.find(l=>l.id===t),a=s?.outdoor.find(l=>l.id===e);return!s||!a?{pipes:[],joints:[]}:Na({...n,floorId:t},Ko.nodeAt(r,t,e),a.pool?.joints??[],i,o)}};var at=Math.PI/180,Hn=-.833;function Pd(r,t,e){let n=(r/864e5+24405875e-1-2451545)/36525,i=((280.46646+n*(36000.76983+n*3032e-7))%360+360)%360,o=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(o*at)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*o*at)*(.019993-101e-6*n)+Math.sin(3*o*at)*289e-6,l=125.04-1934.136*n,c=i+a-.00569-.00478*Math.sin(l*at),u=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*at),h=Math.asin(Math.sin(u*at)*Math.sin(c*at)),f=Math.tan(u/2*at)**2,b=4*(f*Math.sin(2*i*at)-2*s*Math.sin(o*at)+4*s*f*Math.sin(o*at)*Math.cos(2*i*at)-.5*f*f*Math.sin(4*i*at)-1.25*s*s*Math.sin(2*o*at))/at,y=new Date(r),w=(((y.getUTCHours()*60+y.getUTCMinutes()+y.getUTCSeconds()/60+b+4*e)%1440+1440)%1440/4-180)*at,$=t*at,P=Math.sin($)*Math.sin(h)+Math.cos($)*Math.cos(h)*Math.cos(w),H=90-Math.acos(Math.min(1,Math.max(-1,P)))/at;return{azimuth:(Math.atan2(Math.sin(w),Math.cos(w)*Math.sin($)-Math.tan(h)*Math.cos($))/at+180+360)%360,elevation:H}}function Qa(r,t,e){let n=new Date(r);n.setHours(0,0,0,0);let i=n.getTime(),o=10*6e4,s=u=>({...Pd(u,t,e),t:u}),a=[],l=null,c=null,d=s(i);for(let u=i+o;u<=i+24*36e5;u+=o){let h=s(u),f=h.elevation>Hn,b=d.elevation>Hn;if(f!==b){let y=d.t,v=h.t;for(let w=0;w<12;w++){let $=(y+v)/2;s($).elevation>Hn===b?y=$:v=$}let p=s(Math.round((y+v)/2));f?(l??=p,a.push(p)):(c=p,a.push(p))}f&&a.push(h),d=h}return!l&&a.length&&s(i).elevation>Hn&&a.unshift(s(i)),{points:a,rise:l,set:c}}function tl(r,t,e){let n=r.cheap_rate;if(n&&n!=="none")return t[n]?.state==="on";let i=r.cheap_from,o=r.cheap_to;return!i||!o||!Bo.test(i)||!Bo.test(o)?null:jo(qo(e),i,o)}var el=(r,t)=>t.startsWith("sensor.")&&r.states[t]?.attributes.device_class==="energy";function Ed(r,t,e){if(e==="none")return null;if(e)return e;let n=t.replace(/^sensor\./,"").replace(/_?power$/,""),i=`sensor.${n}_energy`;if(el(r,i))return i;let o=r.entities?.[t]?.device_id;if(!o)return null;let s=Object.keys(r.states).filter(a=>el(r,a)&&r.entities?.[a]?.device_id===o);return s.length===1?s[0]:s.find(a=>a.startsWith(`sensor.${n}_`))??null}function nl(r,t){let e=[];for(let n of t){let i=Ed(r,n.powerEntity,n.energy);i&&e.push({key:n.powerEntity,id:n.id,floorId:n.floorId,x:n.x,z:n.z,energy:i,power:n.powerEntity})}return e}async function ol(r,t,e=new Date){let n=new Map,i=[...new Set(t.map(s=>s.energy).filter(s=>!!s))];if(!i.length)return n;let o=new Date(e);o.setHours(0,0,0,0);try{let s=await r.callWS({type:"recorder/statistics_during_period",start_time:o.toISOString(),statistic_ids:i,period:"5minute",types:["change"],units:{energy:"kWh"}});for(let a of t){if(!a.energy)continue;let l=s?.[a.energy]?.reduce((c,d)=>c+(d.change??0),0);l!==void 0&&n.set(a.key,l)}return n}catch{return null}}function il(r){let t={solar:[],export:[],forecast:[]};for(let e of r?.energy_sources??[])if(e.type==="solar"){e.stat_energy_from&&t.solar.push(e.stat_energy_from);for(let n of e.config_entry_solar_forecast??[])t.forecast.push(n)}else if(e.type==="grid"){for(let n of e.flow_to??[])n.stat_energy_to&&t.export.push(n.stat_energy_to);e.stat_energy_to&&t.export.push(e.stat_energy_to)}return{solar:[...new Set(t.solar)],export:[...new Set(t.export)],forecast:[...new Set(t.forecast)]}}function rl(r,t,e){if(!r||!t.length)return null;let n=new Date(e);n.setHours(0,0,0,0);let i=n.getTime(),o=new Date(i);o.setDate(o.getDate()+1);let s=o.getTime(),a=new Date(s);a.setDate(a.getDate()+1);let l=a.getTime(),c=new Array(24).fill(0),d=!1,u=null;for(let y of t)for(let[v,p]of Object.entries(r[y]?.wh_hours??{})){let w=Date.parse(v);!Number.isFinite(w)||typeof p!="number"||!Number.isFinite(p)||(w>=i&&w<s?(c[new Date(w).getHours()]+=Math.max(0,p),d=!0):w>=s&&w<l&&(u=(u??0)+Math.max(0,p)))}if(!d&&u===null)return null;let h=e.getHours(),f=1-(e.getMinutes()*60+e.getSeconds())/3600,b=c[h]*f;for(let y=h+1;y<24;y++)b+=c[y];return{rest:d?b/1e3:null,tomorrow:u===null?null:u/1e3,hours:c}}function sl(r,t){let e=n=>42-(t>0?Math.min(n,t)/t*36:0);return r.map((n,i)=>`${i?"L":"M"}${((i+.5)/24*220).toFixed(1)} ${e(n).toFixed(1)}`).join(" ")}function al(r){let t=[];if(r.forecast&&(r.forecast.rest!==null&&t.push({key:"forecast_rest",kwh:r.forecast.rest}),r.forecast.tomorrow!==null&&t.push({key:"forecast_tomorrow",kwh:r.forecast.tomorrow})),r.produced!==null&&r.exported!==null&&r.produced>0){let e=Math.min(Math.max(0,r.exported),r.produced),n=r.produced-e;t.push({key:"self_use",self:n,exported:e,share:Math.round(n/r.produced*100)})}return t}function _t(r,t,e,n){$e(r,t,e,n,i=>_(r,"service_failed",{error:i}))}function dl(r,t){return String(t&&r.states[t]?.attributes.unit_of_measurement||"m\xB3")}function cl(r,t){return m`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${Pt`<polyline points=${ba(r,120,22)} style=${`stroke:${t}`} />`}</svg>`}function Rd(r,t,e){return(e==="m\xB3"||e==="m3")&&t<10?`${j(r,t*1e3,0)} l`:`${j(r,t,t<10?2:0)} ${e}`}var zd=2e4,Hd=3e5,ul=6*36e5,Cd=12e4,Fd=600*1e3,pl={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Od='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',Dd='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>',hl=()=>import("./home-3d-walk-L6CZCYVN.js");function Uo(r,t,e){return r.rooms.find(n=>n.points.length>=3&&K([t,e],n.points))?.id??null}function Ld(r,t){let e=t.action==="more_info"?t.target:t.data?.entity_id;return typeof e=="string"&&kt(r.states[e])}function Wd(r){try{return localStorage.getItem(r)==="1"}catch{return!1}}function Nd(r,t){try{localStorage.setItem(r,t?"1":"0")}catch{}}function fl(r,t){let e=s=>s&&s!=="none"?s:null,n=ae(r,{cover:e(t.cover),contact:e(t.contact),tilt:e(t.tilt)},"window"),i=e(t.window)?r.states[e(t.window)]:void 0,o=n.open;if(i&&!Y(i)){let s=i.attributes.current_position;o=typeof s=="number"?Math.min(1,Math.max(0,s/100)):i.state==="open"||i.state==="opening"?1:0}return{open:o,tilt:n.tilt,cover:n.cover??0}}var Go=class extends Ue{static properties={hass:{attribute:!1},building:{attribute:!1},canEdit:{attribute:!1},noSettings:{attribute:!1},home:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},_realSky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},plan2d:{attribute:!1},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_bigTile:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_cheap:{state:!0},_wires:{state:!0},_wireKwh:{state:!0},_wireOpen:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_holoBig:{state:!0},_solarMore:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_settingsOpen:{state:!0},_rackView:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},_armLeft:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},_voice:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_phoneStage:{state:!0},_alerts:{state:!0},_dismissing:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},rackCards:{attribute:!1},_rackRows:{state:!0},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};rawHass;hassWatch=new Jr({entityLists:!1});get hass(){let t=this.rawHass;return t&&this.hassWatch.recording?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;shownPlan=null;showTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;solarMoreLoading=!1;holoPress="";holoHoverOff=!1;holoBigTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;thumbsSaved=null;resizeObs=null;unsubAsk=null;voiceTimer;binInfoTimer;rackOpen=new Set;rackSparkKey="";rackSparkAt=0;alertSrc=null;alertTimer;motionTimer;redTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;rackViewMemo=null;actionOwners=new Map;taps=new an;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];binSpots=new Map;binCues=[];printerCams=new Map;finished=new un;appliances=new Map;directing=new lo;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this._realSky=null,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._bigTile=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._holoBig=!1,this._solarMore=null,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._rackView=null,this._note=null;try{this.thumbsSaved=localStorage.getItem("home3d.thumbs_compact")}catch{this.thumbsSaved=null}this._thumbsCompact=Vn(this.thumbsSaved,!1),this._phoneStage=!1,this._armed=null,this._armLeft=0,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.plan2d=!1,this.clean=!1,this.cleanButton=!1,this.noSettings=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this._voice=null,this._micProbe=Qr(),this._alerts=[],this._dismissing=null,this._household=[],this._hhFolded=Wd("home3d.hhFolded"),this._binInfo=null,this._gangMenu=null,this.householdCard=!0,this.rackCards=!0,this._rackRows=null,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("home3d.flows")==="1",this._holoShow=localStorage.getItem("home3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let t=this.hass;this.unsubAsk||!t?.connection||!this.isConnected||(this.unsubAsk=ui(t,e=>{this.onAsk(e)}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let t=this.unsubAsk;this.unsubAsk=null,t?.then(e=>e()).catch(()=>{})}keepTouch=t=>{t.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.wireTimer),clearInterval(this.meterTimer),this.meterTimer=void 0,clearTimeout(this.armTimer),this.wireKey="",this.meterKey="",document.removeEventListener("visibilitychange",this.onVisible),this.taps.cancel(),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,clearTimeout(this.showTimer),this.showTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearTimeout(this.motionTimer),this.motionTimer=void 0,clearTimeout(this.redTimer),this.redTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearTimeout(this.holoBigTimer),this.holoBigTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&Ae().catch(()=>this._micProbe=!1);let t=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",t,{passive:!0}),this.addEventListener("wheel",t,{passive:!0}),this.renderRoot.addEventListener("wheel",e=>{let n=e;if(!n.target?.closest?.(".fp3d-holo"))return;let i=this.renderRoot.querySelector("canvas");i&&(n.preventDefault(),i.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let t=this.renderRoot.querySelector(".fp3d-stage");!t||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(e=>{let n=e[0]?.contentRect.width??1e3,i=n<700,o=ai(n);o!==this._phoneStage&&(this._phoneStage=o,this._thumbsCompact=Vn(this.thumbsSaved,o)),i!==this._narrowStage&&(this._narrowStage=i,this.scheduleThumbs())}),this.resizeObs.observe(t))}async start(){if(this.starting||this.viewer)return;this.starting=!0;let t=this.plan2d;try{let e=t?await ka():await _n();if(!this.isConnected||t!==this.plan2d)return;let n=this.renderRoot.querySelector(".fp3d-stage");n.addEventListener("pointerdown",i=>{this._central&&!i.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=e.createViewer(n,{quality:this.quality,explode:this.explode,onRoomTap:(i,o)=>this.fire("room-tap",{floorId:i,roomId:o}),onFloorTap:i=>this.fire("floor-tap",{floorId:i}),floorInfo:i=>i.rooms.length===1?_(this.hass,"floor_rooms_one"):_(this.hass,"floor_rooms",{n:i.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(i,o,s)=>this.onDeviceTap(i,o,s),onRackTap:(i,o,s)=>this.showRackView(i,o,s),onDeviceHold:(i,o,s)=>this.onDeviceHold(i,o,s),onDeviceDoubleTap:i=>!this.ro&&this.taps.doubleTap(i),onRoomDoubleTap:(i,o)=>this.onRoomDoubleTap(i,o),onDeviceSwipe:(i,o,s,a,l)=>this.onDeviceSwipe(i,o,s,a,l),onFurnitureSelect:i=>this.fire("furniture-select",{id:i}),onFurnitureMove:(i,o,s)=>this.fire("furniture-move",{id:i,x:o,z:s}),onDeviceSelect:i=>this.fire("device-select",{id:i}),onDeviceMove:(i,o,s)=>this.fire("device-move",{id:i,x:o,z:s}),onStats:i=>{this.showStats&&(this._stats=i)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setDescription(this.sceneLabel=_(this.hass,t?"sr_plan":"sr_scene")),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((i,o,s,a,l,c)=>this.placeHolo(i,o,s,a,l,c)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...se()],qn()),this.hass&&So(this.hass,se()).then(()=>this.syncDevices(!0)),this.shownPacks=Ge(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.viewPlan(this.building))),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1,this.isConnected&&!this.viewer&&t!==this.plan2d&&this.start()}}switchViewer(){this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this._through=null,this._menu=null,this.viewer?.dispose(),this.viewer=null,this.shownPacks=-1,this._thumbs=[],this.thumbsAt=0,this._error=null,this.start()}shouldUpdate(t){let e=t.get("hass"),n=this.rawHass;if(t.size!==1||!t.has("hass")||!e||!n||this.replay||this.hassWatch.matters(e,n))return!0;if(e.states!==n.states){if(this.watched.some(o=>e.states[o]!==n.states[o]))return!0;let i=this.building;if(i&&this.shownPlan?.from===i&&zn(i,n.states,new Date).join("|")!==this.shownPlan.hidden)return!0}return Zr(this.renderRoot,Xr["components/view3d.ts"],[[e,n]]),this.live?.el&&(this.live.el.hass=n),!1}performUpdate(){try{super.performUpdate()}finally{this.hassWatch.end()}}willUpdate(t){this.hassWatch.begin(!t.has("hass")),t.has("building")&&(_i(this.building??null),Mr(this.building)),t.has("hass")&&this.hass&&ys(ws(this.hass))}updated(t){(t.has("hass")||t.has("theme"))&&(this.toggleAttribute("light",sr(this.effectiveTheme())),this.toggleAttribute("contrast",ar(this.effectiveTheme()))),t.has("plan2d")&&t.get("plan2d")!==void 0&&this.switchViewer(),t.has("hass")&&this.live?.el&&(this.live.el.hass=this.rawHass),t.has("hass")&&this.watchAsk(),this._central&&(t.has("roomId")&&t.get("roomId")!==void 0||t.has("floorId")&&t.get("floorId")!==void 0)&&(this._central=!1);let e=this.viewer;if(!e)return;this._through&&(t.has("roomId")||t.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null);let n=!1,i=!1;if(e.batch(()=>{if(this.shownPacks!==Ge()&&(this.shownPacks=Ge(),e.setPacks([...se()],qn()),this.hass&&So(this.hass,se()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&e.setParked($o(this.hass,this.building)),i=!0),t.has("building")&&this.building){let a=JSON.stringify(this.startViewOf());n=this.shownStartView!==void 0&&this.shownStartView!==a,this.shownStartView=a,e.setStartView(this.startViewOf()),e.setBuilding(this.viewPlan(this.building))}(t.has("building")||t.has("packs")||t.has("petsOn"))&&this.syncPets(),(t.has("building")||t.has("packs")||t.has("ghostOn"))&&this.syncGhost(),t.has("startView")&&t.get("startView")!==void 0&&(e.setStartView(this.startViewOf()),this.floorId===null&&e.resetView()),(t.has("building")||t.has("theme")||t.has("floorThumbs")||t.has("packs"))&&this.scheduleThumbs();let o=["building","markerMode","heatMode","flows","alerts","dimmed"].some(a=>t.has(a))||this.markerMode==="room"&&t.has("roomId"),s=this.replayTicked&&!!this.replay;this.replayTicked=!1,(o||i||t.has("hass")||s)&&this.syncDevices(o||i,s&&(this.trail||this.detecting))}),n&&this.floorId===null&&e.resetView(),(t.has("hass")||t.has("director"))&&this.direct(),t.has("autoOrbit")&&e.setAutoOrbit(this.autoOrbit?.06:0),e.setFitMargin(this._phoneStage?li:di),(t.has("_thumbs")||t.has("_narrowStage"))&&e.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),t.has("plan2d")||t.has("hass")||!this.sceneLabel){let o=_(this.hass,this.plan2d?"sr_plan":"sr_scene");o!==this.sceneLabel&&e.setDescription(this.sceneLabel=o)}if(t.has("floorId")&&e.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&e.selectRoom(this.roomId),t.has("wallMode")&&e.setWallMode(this.wallMode),t.has("keepView")&&e.setKeepView(this.keepView),t.has("angleLock")&&e.setAngleLock(this.angleLock),t.has("explode")&&e.setExplode(this.explode),t.has("keepRoof")&&e.setKeepRoof(this.keepRoof),t.has("hideRoof")&&e.setHideRoof(this.hideRoof),t.has("floorStack")&&e.setFloorStack(this.floorStack),t.has("hass")&&!t.has("theme")&&(this.theme==="theme"||this.theme==="auto")){let o=this.effectiveTheme();e.setTheme(o),o!==ao(this.theme,t.get("hass"))&&this.scheduleThumbs()}t.has("theme")&&(e.setTheme(this.effectiveTheme()),t.has("hass")||this.syncDevices(!0)),t.has("accent")&&e.setAccent(this.accent??null),t.has("surfaceGrab")&&e.setSurfaceGrab(this.surfaceGrab??null),t.has("furnishTypes")&&e.setFurnishTypes(this.furnishTypes??null),t.has("furnish")&&(e.setFurnishMode(this.furnish),this.syncDevices(!0)),t.has("selectedFurniture")&&e.selectFurniture(this.selectedFurniture),t.has("selectedSet")&&e.selectFurnitureSet(this.selectedSet??[]),t.has("selectedDevice")&&e.setSelectedDevice(this.selectedDevice),(t.has("trail")||t.has("replay"))&&this.watchTrail(),t.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(t.has("weather")||t.has("weatherEntityId"))&&this.syncDevices(!0),t.has("quality")&&t.get("quality")!==void 0&&(e.setQuality(this.quality),this._low=e.low,this.replay?.setQuality(this.quality,e.low)),t.has("showStats")&&e.setStats(this.showStats),t.has("building")&&(this.findIndex=null)}syncDevices(t,e=!1){if(this.hassWatch.recording)return this.hassWatch.pause(()=>this.syncDevices(t,e));let n=this.viewer,i=this.building;if(!n||!i||!this.hass)return;let o=this.hass,s=this.shownPlan?.plan,a=this.viewPlan(i);a!==s&&(n.setBuilding(a),t=!0),Ja(i)&&!this.replay&&(this.showTimer??=setTimeout(()=>{this.showTimer=void 0,this.syncDevices(!1)},60050-Date.now()%6e4)),(t||!this.openingLinks||this.linkedRegistry!==o.entities)&&(this.openingLinks=Yn(o,a.floors),this.furnitureLinks=Se(o,a.floors),this.linkedRegistry=o.entities,this.findIndex=null,this.alertSrc=this.alerts?xo(o,a,this.weatherEntityId):null,this.watchHousehold(o,a),this.watched=Vo(o,a,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?ko(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Zt()&&(this.watched=[...new Set([...this.watched,...ha(this.sceneHost(o,a))])]),t=!0);let l=t||e,c=!l;if(!l){for(let g of this.watched)if(this.shownStates.get(g)!==o.states[g]&&(l=!0,!g.startsWith("sensor."))){c=!1;break}}let d=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!l)return;if(c&&!this.replay){let g=Va(performance.now()-this.lastSync,this._low);if(g>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},g);return}}this.lastSync=performance.now();let u=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(g=>[g,o.states[g]])),this.scene=Zt()?ca(this.sceneHost(o,a)):[];let h=Pe(a,g=>this.furnitureLinks?.get(g.id)?.power??null),f=Lr(o,a,h),b=this.now(),y=$r(o,a,b);if(clearTimeout(this.redTimer),this.redTimer=void 0,!this.replay){let g=eo(a).camera_seconds*1e3,k=Math.min(...y.filter(T=>T.motion).map(T=>Sr(o,T.id,g,b)??1/0));Number.isFinite(k)&&(this.redTimer=setTimeout(()=>this.syncDevices(!0),Math.max(50,k-b+20)))}let v=this.furnitureMarkers(o,a,new Set(y.map(g=>g.id)),new Set(f.map(g=>g.powerEntity)));f.push(...v.consumers),this.lastConsumers=f;let p=Wr(o,a,f,h),w=new Map(f.filter(g=>g.id!==g.powerEntity).map(g=>[g.id,g.power]));this.confirmSet=Ui(o,a.floors);let $=this.trail?this.trailNow(o,a):[],P=this.dimmed?[]:this.detectionPins(o,y);this.detecting=P.length>0;let H=new Set(a.floors.flatMap(g=>g.furniture.filter(k=>k.type==="parking"&&k.car&&ce(o,k)).map(k=>k.id)));n.setDevices([...[...y,...v.markers,...this.lockMarkers(o,a)].map(g=>{let k=g.show==="no_power"||"energyDevice"in g&&g.energyDevice||"standby"in g&&g.standby?null:w.get(g.id)??null,T={...g,power:k,powerText:k===null?void 0:G(o,k),effect:this.dimmed?!1:g.effect},W=g.ownName&&(g.showName||this.markerNames)?g.ownName:"",S=this.mediaCardUp(o,g.id)||!!g.furnitureId&&H.has(g.furnitureId);return{...T,pin:(this.plan2d?_a(T,this.markerMode,this.showPin(T)):this.showPin(T))&&!S,full:g.show==="always"||g.full===!0,caption:W}}),...((this.flows??this._flows)&&!this.dimmed&&p.grid!==null?[this.gridPin(o,a,p.grid)]:[]).filter(g=>!!g),...P,...$.map((g,k)=>({id:`trail:${k}`,floorId:g.floorId,roomId:null,x:g.x,z:g.z,y:.3+.4*$.slice(0,k).filter(T=>T.entity===g.entity).length,icon:ea,name:D(o,g.entity),text:yn(o,g.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(a)]);for(let g of this.scene)g.kind==="marker"&&g.card&&g.furnitureId&&!v.targets.has(g.furnitureId)&&v.targets.set(g.furnitureId,`module:${g.id}`);n.setTrail($,this.replay?this.robotPaths(o,a):[]),this.actionOwners=us(a.floors,g=>v.targets.get(g),g=>{let k=this.furnitureLinks?.get(g.id)?.entity;return k&&k!=="none"?k:null});for(let g of a.floors)for(let k of g.furniture)!v.targets.has(k.id)&&this.actionOwners.has(`item:${k.id}`)&&v.targets.set(k.id,`item:${k.id}`);n.setPickTargets(v.targets,this.openingTargets()),n.setScreens(v.screens),n.setFridgeDoors(Jn(o,a.floors)),n.setRackLeds(Ma(o,a.floors)),n.setAwnings(Gi(o,a.floors)),n.setProjections(this.projectedCameras(o,a)),n.setRobots(this.robotInfos(o,a));let R=new Map;for(let g of a.settings.roof?.windows??[])R.set(g.id,fl(o,g));n.setRoofWindows(R),n.setParked($o(o,a)),n.setBinSpots(this.binSpots),n.setBinCues(this.binCues);let B=new Map(a.floors.flatMap(g=>g.openings.map(k=>[k.id,k.type]))),z=new Map([...this.openingLinks].map(([g,k])=>[g,ae(o,k,B.get(g))]));n.setOpeningStates(z,d);let E=this.alertSrc?Ds(o,a,this.alertSrc,this.openingLinks):[],M=this.alerts&&Zt(),A=M?pa(this.sceneHost(o,a)).map(g=>({kind:g.kind,entity:g.entity,roomId:g.roomId,floorId:g.floorId,text:g.text,color:g.color,quiet:!g.roomId})):[],et=[...E,...A];this.alertSrc&&this.tidySnoozes(a,et,M),this.setAlerts(Ns(et,a.settings)),clearTimeout(this.fridgeTimer);let st=this.replay?null:Fs(a.floors.flatMap(g=>g.furniture),o);st!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),st+500));let Bt=[...y,...v.markers].map(g=>`${g.id}:${g.glow?`${g.glow.level.toFixed(1)}/${g.glow.color.map(k=>k.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...z].map(([g,k])=>`${g}:${k.open}:${k.cover===null?"-":k.cover.toFixed(1)}`).join(";");if(Bt!==this.thumbSig){let g=this.thumbSig==="";this.thumbSig=Bt,g||this.scheduleThumbs(1500)}let xt=a.floors.flatMap(g=>g.furniture.filter(k=>tt(k.type)==="home_battery").map(k=>({floorId:g.id,x:k.x,z:k.z})))[0]??(a.energy.battery?a.floors.flatMap(g=>g.placements.filter(k=>k.entity_id===a.energy.battery).map(k=>({floorId:g.id,x:k.x,z:k.z})))[0]:null),zt=Kr(o,a,p.solar),C=a.settings.roof.hologram??It,ft=[...a.settings.roof.solar??[]].sort((g,k)=>k.rows*k.cols-g.rows*g.cols),F=a.settings.roof.strings??[],me=g=>(g.string?F.find(k=>k.id===g.string)?.inverter:null)??null,lt=C.plant_floor?"all":"house",ge=(g,k,T,W)=>{let S=oo(a,g);if(!S)return null;let[O,U]=io(S,g),q=g.u+O/2+k,ot=g.v+U/2+T,mt=[S.o[0]+S.eu[0]*q+S.es[0]*ot,S.o[1]+S.eu[1]*q+S.es[1]*ot,S.o[2]+S.eu[2]*q+S.es[2]*ot],rt=S.wall?.floorId??(S.unbounded?a.floors.find(bt=>bt.elevation===Math.min(...a.floors.map(re=>re.elevation)))?.id??a.floors[0].id:[...a.floors].sort((bt,re)=>re.elevation-bt.elevation)[0].id);return{p:[mt[0]+S.n[0]*.05,mt[1]+S.n[1]*.05,mt[2]+S.n[2]*.05],n:[S.n[0],S.n[1],S.n[2]],floorId:rt,size:W,roof:!0,views:lt}},dt=[],ct=[],oe=p.grid!==null||p.battery!==null||p.solar!==null,Ht=C.place==="free"&&Number.isFinite(C.x)&&Number.isFinite(C.z),ut=p.solar!==null&&!Ht?ft.find(g=>g.id===C.field)??ft[0]:void 0,qt=ut?me(ut):null,Le=!!ut&&!!qt&&!ft.some(g=>g.id!==ut.id&&me(g)===qt)&&C.right===0&&C.up===0,Ct=(()=>{if(!Le||!ut)return 0;let g=oo(a,ut);return g?io(g,ut)[0]/2+1.2:0})(),We=ut?ge(ut,C.right+Ct,C.up,C.size):null,Cn=this.devicePowers(o,a),be=p.solar!==null?a.energy.solar?[a.energy.solar]:Pe(a,g=>this.furnitureLinks?.get(g.id)?.power??null).solar:[];if(We)dt.push(We),ct.push({kind:"main",name:_(o,"holo_title"),w:null,dayIds:be,battery:null});else if(oe&&Ht){let g=0,k=0,T=0,W=1/0,S=a.floors[0];for(let ot of a.floors){ot.rooms.length&&(W=Math.min(W,ot.elevation)),ot.rooms.length&&(!S.rooms.length||ot.elevation+ot.height>S.elevation+S.height)&&(S=ot);for(let mt of ot.rooms)for(let[rt,bt]of mt.points)g+=rt,k+=bt,T++}T&&(g/=T,k/=T);let O=C.x-g,U=C.z-k,q=Math.hypot(O,U);dt.push({p:[C.x,(Number.isFinite(W)?W:0)+(C.height??3),C.z],n:q>.01?[O/q,0,U/q]:[1,0,0],floorId:S.id,size:C.size,roof:!0,views:lt}),ct.push({kind:"main",name:_(o,"holo_title"),w:null,dayIds:be,battery:null})}else if(oe&&a.floors.some(g=>g.rooms.length)){let g=-1/0,k=1/0,T=-1/0,W=0,S=a.floors[0];for(let O of a.floors){for(let U of O.rooms)for(let[q,ot]of U.points)g=Math.max(g,q),k=Math.min(k,ot),T=Math.max(T,ot);O.rooms.length&&O.elevation+O.height>W&&(W=O.elevation+O.height,S=O)}dt.push({p:[g+.6,W+.4,(k+T)/2],n:[1,0,0],floorId:S.id,size:C.size,roof:!0,views:lt}),ct.push({kind:"main",name:_(o,"holo_title"),w:null,dayIds:be,battery:null})}if(p.solar!==null){let g=new Set;for(let k of a.floors)for(let T of k.furniture.filter(W=>tt(W.type)==="inverter")){if(T.plant_card===!1||g.has(T.id))continue;g.add(T.id);let W=ft.filter(mt=>me(mt)===T.id),S=(ut&&T.id===qt?W.find(mt=>mt.id!==ut.id):null)??W[0],O=this.furnitureLinks?.get(T.id)?.power??null,U=S?ge(S,T.plant_right??0,T.plant_up??0,C.size*.85):null;if(!U||!O)continue;let q=k.furniture.filter(mt=>tt(mt.type)==="home_battery").sort((mt,rt)=>Math.hypot(mt.x-T.x,mt.z-T.z)-Math.hypot(rt.x-T.x,rt.z-T.z))[0],ot=q?.soc&&q.soc!=="none"?Number(o.states[q.soc]?.state):NaN;dt.push(U),ct.push({kind:"plant",name:T.name||J(o,T.type),w:Math.max(0,wt(o.states[O])??0),dayIds:[O],battery:q?{soc:Number.isFinite(ot)?ot:null,w:Cn.get(q.id)??null}:null})}}let Ft=C.device_house===!1?"floor":"all";for(let g of a.floors){for(let k of g.furniture){if(!k.holo)continue;let T=this.furnitureLinks?.get(k.id)?.power??null,W=f.find(O=>O.id===k.id);if(!T&&!W)continue;let S=g.elevation+X(g,k)+k.h;dt.push({p:[k.x,S+.1,k.z],n:[0,1,0],floorId:g.id,size:C.size*.7,roof:!1,views:Ft,room:Uo(g,k.x,k.z)}),ct.push({kind:"device",name:k.name||J(o,k.type),w:W?.power??(T?wt(o.states[T]):null),dayIds:T?[T]:[],battery:null})}for(let k of g.placements){if(!k.holo)continue;let T=sn(o,k.entity_id);if(!T)continue;let W=g.elevation+(k.y??.4)+.2;dt.push({p:[k.x,W,k.z],n:[0,1,0],floorId:g.id,size:C.size*.7,roof:!1,views:Ft,room:Uo(g,k.x,k.z)}),ct.push({kind:"device",name:k.name||D(o,k.entity_id),w:wt(o.states[T]),dayIds:[T],battery:null})}}let I=[];{let g=new Set,k=(a.settings.roof.hologram??It).size,T=(S,O,U,q,ot,mt)=>{let rt=o.states[O];if(!rt||L(O)!=="media")return;if(g.has(O)){let Kt=I.find(Nn=>Nn.id===O);Kt&&I.push({...Kt,id:`${O}#${I.filter(Nn=>Nn.id.startsWith(`${O}#`)).length+2}`,floorId:S.id,x:U,z:q,members:[O]});return}g.add(O);let bt=this.ro?void 0:this.mediaGrace.get(O),re=[rt.attributes.media_title,rt.attributes.app_name,rt.attributes.source].find(Kt=>typeof Kt=="string"&&!!Kt.trim())??"";if(!(!Y(rt)&&(rt.state==="playing"||rt.state==="paused"&&!!re&&this.pausedRecently(rt)||rt.state==="on"&&!!rt.attributes.source))){bt&&bt.until>Date.now()?(I.push({...bt.source,playing:!1,level:0}),dt.push(bt.anchor),ct.push({...bt.card,media:{...bt.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,bt.until-Date.now()+100))):Y(rt)||(this.mediaGrace.delete(O),I.push({id:O,floorId:S.id,x:U,z:q,level:0,playing:!1,members:[]}));return}let Wn=rt.state==="playing",St=rt.attributes,ei=typeof St.volume_level=="number"?Math.min(1,Math.max(0,St.volume_level)):.5,yl=Array.isArray(St.group_members)?St.group_members.filter(Kt=>Kt!==O):[];I.push({id:O,floorId:S.id,x:U,z:q,level:Wn?.3+.7*ei:0,playing:Wn,members:yl});let wl=re||_(o,"holo_media_playing"),ni={p:[U,S.elevation+ot+.12,q],n:[0,1,0],floorId:S.id,size:k*.7,roof:!1,views:"all"},oi={kind:"media",name:mt,w:null,dayIds:[],battery:null,media:{id:O,title:wl,artist:typeof St.media_artist=="string"?St.media_artist:typeof St.media_album_name=="string"?St.media_album_name:"",picture:typeof St.entity_picture=="string"?St.entity_picture:null,volume:Math.round(ei*100),playing:Wn}};dt.push(ni),ct.push(oi),this.ro||this.mediaGrace.set(O,{until:Date.now()+45e3,card:oi,source:I[I.length-1],anchor:ni})},W=(S,O)=>{for(let U of S.furniture){if((U.entity!=null&&U.entity!=="none")!==O)continue;let q=this.furnitureLinks?.get(U.id)?.entity;q&&T(S,q,U.x,U.z,X(S,U)+U.h,U.name||J(o,U.type))}};for(let S of a.floors)W(S,!0);for(let S of a.floors)for(let O of S.placements)T(S,O.entity_id,O.x,O.z,O.y??1.1,O.name||D(o,O.entity_id));for(let S of a.floors)W(S,!1)}{let g=(a.settings.roof.hologram??It).size;for(let k of a.floors)for(let T of k.furniture){if(T.type!=="parking"||!T.car)continue;let W=ce(o,T);if(!W)continue;let S=Me(o,T);if(S.soc===null&&S.range===null&&S.locked===null&&S.climateOn===null)continue;let O=Xs(T,W),U=X(k,T)+(O?.h??1.6);dt.push({p:[T.x,k.elevation+U+.25,T.z],n:[0,1,0],floorId:k.id,size:g*.7,roof:!1,views:"all"});let q=S.entities;ct.push({kind:"car",name:T.name||J(o,W),w:null,dayIds:[],battery:null,car:{spot:T.id,soc:S.soc,range:S.range,rangeUnit:S.rangeUnit,chargingW:S.chargingW,charging:S.charging,locked:S.locked,climateOn:S.climateOn,lock:q.lock,climate:q.climate,charge:q.charging&&/^(switch|input_boolean)\./.test(q.charging)?q.charging:null}})}}for(let{anchor:g,card:k}of this.rackHolos(o,a))dt.push(g),ct.push(k);let N=this.scene.filter(g=>g.kind==="water").map(g=>({...g,level:this.dimmed?g.level*.4:g.level}));if(n.setPools(N),Zt()){let g=(a.settings.roof.hologram??It).size;for(let k of ua(this.sceneHost(o,a))){let T=a.floors.find(S=>S.id===k.anchor.floorId);if(!T)continue;let W=null;if(k.anchor.areaId){let S=T.outdoor.find(ot=>ot.id===k.anchor.areaId);if(!S||S.points.length<3)continue;let[O,U]=Et(S.points),q=S.type==="pool"?ke(T,S):we(T,O,U);W=[O,T.elevation+Math.max(q,0)+(S.above?.6:1.1),U]}else if(k.anchor.furnitureId){let S=T.furniture.find(O=>O.id===k.anchor.furnitureId);if(!S)continue;W=[S.x,T.elevation+X(T,S)+S.h+.25,S.z]}W&&(dt.push({p:W,n:[0,1,0],floorId:T.id,size:g*.7,roof:!1,views:"all"}),ct.push({kind:"module",name:k.title,w:null,dayIds:[],battery:null,module:k}))}for(let k of this.scene){if(k.kind!=="tag")continue;let T=a.floors.find(W=>W.id===k.floorId);T&&(dt.push({p:[k.at[0],T.elevation+k.at[1],k.at[2]],n:[0,1,0],floorId:T.id,size:g*.75,roof:!1,views:k.views??"all"}),ct.push({kind:"bin",name:k.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:k.color??"#37e0ff",when:k.text,name:k.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}{let g=(a.settings.roof.hologram??It).size;for(let k of Is(this.binHolos)){let T=a.floors.find(S=>S.id===k.floorId);if(!T)continue;dt.push({p:[k.x,T.elevation+k.y+.04,k.z],n:[0,1,0],floorId:k.floorId,size:g*.75,roof:!1,views:"all"});let W=k.lines.map(S=>({color:S.color,when:S.when,name:S.name,soon:!!S.soon&&!S.out,out:!!S.out}));ct.push({kind:"bin",name:k.lines.map(S=>S.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:W,soon:W.some(S=>S.soon),icon:k.lines.length===1?k.lines[0].icon??null:null}})}}n.setSound(I);let Q=this._walk?this.walkRoomPts:null,Tt=dt.map(g=>!this._walk||!!Q&&K([g.p[0],g.p[2]],Q)),Ot=ct.filter((g,k)=>Tt[k]),Ne=!!(this.flows??this._flows)&&!this.dimmed,jt=Ne&&!this._walk?nl(o,f).filter(g=>a.floors.some(k=>k.id===g.floorId)):[];JSON.stringify(jt)!==JSON.stringify(this._wires)&&(this._wires=jt),this.holoCount=Ot.length;let Fn=jt.map(g=>({p:[g.x,a.floors.find(k=>k.id===g.floorId).elevation+.03,g.z],n:[0,1,0],floorId:g.floorId,size:1,roof:!1,views:"all",plan:!0}));n.setAnchors([...dt.filter((g,k)=>Tt[k]),...Fn]),JSON.stringify(Ot)!==JSON.stringify(this._holos)&&(this._holos=Ot),this.watchRackSpark(),n.setSolarLevels(zt&&!this.dimmed?jr(a,zt):new Map);let Ve=g=>Ur(g,p),ve=Ne?Nr({building:a,consumers:f,summary:p,battery:xt??null,fieldPower:zt,devicePower:this.devicePowers(o,a)}).map(g=>({floorId:g.floorId,a:g.a,b:g.b,dist:g.dist,power:g.power,color:Gr(Ve(g.kind)),dots:Yr(Ve(g.kind)),thick:Ba(g.power)})):[],Yo=this.poolPipes(a),gl=this.scene.filter(g=>g.kind==="line");n.setFlows(this.dimmed?ve:[...ve,...Yo.flows,...va(gl)]),n.setPipes(Yo.tubes),n.setPatches(this.scene.filter(g=>g.kind==="patch").map(g=>({floorId:g.floorId,points:g.points,y:g.y,color:g.color,opacity:this.dimmed?g.opacity*.4:g.opacity,...g.glow?{glow:!0}:{}})));let On=[],Dn=cr("locate")&&pr(a)?[...On,...fr(o,a,new Set(On.map(g=>g.id)))]:On;n.setPersonLook(ur(a)==="pin"?"pin":"figure"),n.setPersons(Dn),this.lastPersons=Dn.map(g=>({floorId:g.floorId,roomId:g.roomId}));let bl=mr(o,a,this.openingLinks,Dn);n.setFloorInfo(new Map([...bl].map(([g,k])=>[g,gr(o,k)])));let Be=o.states["sun.sun"]?.attributes,ye=typeof Be?.elevation=="number"?Be.elevation:null;n.setSun(ye!==null&&typeof Be?.azimuth=="number"?{elevation:ye,azimuth:Be.azimuth}:null);let qe=g=>_(o,g).charAt(0).toUpperCase();n.setSunPath(this.sunPathToday(o),[qe("compass_n"),qe("compass_e"),qe("compass_s"),qe("compass_w")]),(this.theme==="auto"||this.theme==="theme")&&n.setTheme(this.effectiveTheme());let Jo=this.weather&&!this.dimmed?hs(o,Jt(o,this.weatherEntityId??a.settings.weather_entity),a.settings.rain_entity):null,ie=Jo?fs(Jo,a.settings.weather_effects):null;this.cloud=ie?.cloud??0,this._sky=(ye===null?0:Math.min(1,Math.max(0,(ye+4)/16)))*(1-.45*this.cloud);let Xo=this.effectiveTheme()==="realistic"?aa(ye,ie):null;JSON.stringify(Xo)!==JSON.stringify(this._realSky)&&(this._realSky=Xo);let vl=ie?ie.sky:(a.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed?{...ie??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:vl}:null),this.watchLightning(!!ie?.lightning),this.applyTint(),this.applyMotion();let Ln=tl(a.energy,o.states,new Date(this.now()));Ln!==this._cheap&&(this._cheap=Ln);let Zo=p.grid!==null||p.solar!==null||p.battery!==null||p.tariff!==null||Ln!==null?p:null;JSON.stringify(Zo)!==JSON.stringify(this._energy)&&(this._energy=Zo);let Qo=f.some(g=>g.wallbox)?f.filter(g=>g.wallbox).reduce((g,k)=>g+k.power,0):null,ti=a.floors.flatMap(g=>g.furniture.filter(k=>tt(k.type)==="inverter")).map(g=>{let k=this.furnitureLinks?.get(g.id)?.power,T=k?wt(o.states[k]):null;return T===null?null:{name:g.name||J(o,g.type),w:Math.max(0,T)}}).filter(g=>!!g);JSON.stringify(ti)!==JSON.stringify(this._plants)&&(this._plants=ti),Qo!==this._wallboxW&&(this._wallboxW=Qo),this.watchSolarDay([...new Set(ct.flatMap(g=>g.dayIds))]),this.watchMeters(a.energy.gas??null,a.energy.water??null),this.watchWireKwh(jt),u&&(this.syncMs=this.syncMs*.8+(performance.now()-u)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let t=this.replay;!t||!this.isConnected||(this.seenT=t.t,this.seenFocus=t.focusSeq,this.unlistenReplay=t.listen(()=>{this.replay===t&&(t.focusSeq!==this.seenFocus&&(this.seenFocus=t.focusSeq,t.focus&&this.showEntity(t.focus)),!(t.t===this.seenT&&t.seek===this.seenSeek)&&(t.pulses.length&&this.viewer?.flashDevices(t.pulses),this.seenT=t.t,!(t.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(t){let e=this.hass,n=this.building;if(!e||!n)return;let i=(this.findIndex??=xn(e,n)).find(s=>s.entity===t);if(i){this.goTo(i);return}let o=e.entities?.[t]?.area_id??e.devices?.[e.entities?.[t]?.device_id??""]?.area_id??null;for(let s of n.floors){let a=s.openings.find(u=>{let h=this.openingLinks?.get(u.id);return!!h&&[h.contact,h.tilt,h.contact2,h.tilt2,h.cover].includes(t)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!o&&u.area_id===o));if(!l)continue;let[c,d]=Et(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:t,icon:null,x:c,z:d,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let t=this.building,e=this.hass;if(!t||!e)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==e.entities,i=n?Yn(e,t.floors):this.openingLinks,o=n?Se(e,t.floors):this.furnitureLinks,s=ko(xo(e,t,this.weatherEntityId)),a=Vo(e,t,{openings:i,furniture:o,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=t.floors.flatMap(c=>c.furniture.filter(d=>d.type==="parking").flatMap(d=>[typeof d.entity=="string"?d.entity:null,d.car?Yi(e,d).tracker:null]).filter(d=>!!d&&d.startsWith("device_tracker.")));return{entities:a,openings:[...i],furniture:[...o],low:this._low,cars:l,energy:!0,auto:!0}}showInfo(t,e,n){this._menu=null,this._info={entity:t,x:e,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let t=this._info;if(!t||!this.hass)return x;let e=this.hass,n=e.states[t.entity],i=nt(e,n),o=L(t.entity)==="light"&&n?.state==="on"&&i.endsWith("%")?`${_(e,"state_on")} \xB7 ${i}`:i,s=n?.last_changed?_(e,"tt_since",{time:yn(e,Date.parse(n.last_changed))}):"";return m`<div class="fp3d-swipe fp3d-info" style="left:${t.x}px;top:${t.y}px">
      <span>${D(e,t.entity)}</span>
      <b>${s?`${o} \xB7 ${s}`:o}</b>
    </div>`}devicePowers(t,e){let n=new Map;for(let i of e.floors)for(let o of i.furniture){let s=tt(o.type);if(s!=="inverter"&&s!=="home_battery"&&s!=="solar")continue;let a=this.furnitureLinks?.get(o.id)?.power,l=tt(o.type)==="home_battery"&&o.charge&&o.charge!=="none"?wt(t.states[o.charge]):null,c=a?wt(t.states[a],tt(o.type)==="home_battery"&&e.energy.battery_invert&&l===null):null;c!==null&&l!==null?c=Math.max(0,c)-Math.max(0,l):c===null&&l!==null&&(c=-Math.max(0,l)),c!==null&&n.set(o.id,c)}return n}detectionPins(t,e){let n=[],i=new Set(this.building?.floors.flatMap(o=>o.placements.filter(s=>s.detect_pins===!1).map(s=>s.entity_id))??[]);for(let o of e){if(!o.model?.startsWith("camera")||i.has(o.id))continue;let s=this.now(),a=Wt(t,o.id).filter(f=>{let b=t.states[f];return b?b.state==="on"?!0:b.state==="off"&&!!b.last_changed&&s-Date.parse(b.last_changed)<Cd:!1}),l=new Map;for(let f of a){let b=no(t,f);l.has(b)||l.set(b,f)}l.size>1&&l.delete("motion");let c=(o.rotation??0)*Math.PI/180,d=[-Math.sin(c),Math.cos(c)],u=o.model==="camera_ceiling",h=0;for(let[f,b]of l){let y=t.states[b],v=y?.last_changed?yn(t,Date.parse(y.last_changed)):"";n.push({id:`detect:${b}`,floorId:o.floorId,roomId:o.roomId,x:o.x+(u?0:d[0]*1.1),z:o.z+(u?0:d[1]*1.1),y:1.4+.4*h++,icon:pl[f]??pl.motion,name:D(t,b),text:`${_(t,`detect_${f}`)}${v?` \xB7 ${v}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(t,e,n){let i=Vr(e);if(!i)return null;let o=Math.abs(n)<5,s=e.settings.outage_entity;return s&&dn(t.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Dd,name:_(t,"holo_grid"),text:_(t,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Od,name:_(t,"holo_grid"),text:o?G(t,0):`${_(t,n<0?"energy_grid_export":"energy_grid_import")} ${G(t,Math.abs(n))}`,active:!o,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(t,e){let n=[t,e].filter(s=>!!s),i=this.replay?"":n.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let o=async()=>{if(!this.hass||document.hidden)return;let s=await ro(this.hass,n);this.meterKey===i&&s&&(this._meters={gas:t?s.get(t)??null:null,water:e?s.get(e)??null:null})};o(),this.meterTimer=setInterval(()=>{o()},3e5)}holoCount=0;wireKey="";wireTimer;watchWireKwh(t){let e=this.replay?"":t.map(i=>`${i.key}=${i.energy??""}`).join(",");if(e===this.wireKey)return;if(this.wireKey=e,clearInterval(this.wireTimer),this.wireTimer=void 0,!e){this._wireKwh=null;return}let n=async(i=!1)=>{if(!this.hass||document.hidden&&!i)return;let o=await ol(this.hass,t);this.wireKey===e&&o&&(this._wireKwh=o)};n(!0),this.wireTimer=setInterval(()=>{n()},3e5)}placeWire(t,e,n,i){let o=this.renderRoot.querySelector(`.fp3d-wire[data-wire="${t}"]`);o&&(o.hidden!==!i&&(o.hidden=!i),i&&(o.style.transform=`translate(${e.toFixed(1)}px, ${n.toFixed(1)}px) translate(-50%, -50%)`))}renderWires(){if(!this._wires?.length)return x;let t=this.hass;return this._wires.map((e,n)=>{let i=this._wireKwh?.get(e.key),o=i===void 0?"\u2026":`${j(t,i,i<10?2:1)} kWh`,s=D(t,e.id),a=this._wireOpen===e.key;return m`<button
        class="fp3d-wire ${a?"fp3d-wire-open":""}"
        data-wire=${n}
        hidden
        aria-expanded=${a}
        aria-label=${`${s}: ${_(t,"wire_today")} ${o}`}
        @click=${l=>{l.stopPropagation(),this._wireOpen=a?null:e.key}}
      >
        <span class="fp3d-wire-tip" aria-hidden="true">${s}<span>${_(t,"wire_today")} <b>${o}</b></span></span>
      </button>`})}poolPipes(t){let e=[],n=[],i=new Map(this.scene.filter(o=>o.kind==="pipeflow").map(o=>[o.areaId,o.flows]));for(let{floor:o,area:s}of Da(t.floors)){let a=s.pool;if(!a.pipes?.length&&!a.joints?.length)continue;let l=a.ports??[],c=new Map(Object.entries(i.get(s.id)??{})),d=En(t,o,s),u=(h,f)=>Lo(h,f,s,o);e.push(...La(a.pipes??[],c,d,u));for(let h of l){if(h.kind!=="inlet")continue;let f=d(`port:${h.id}`),b=f&&Wo(s,[f.x,f.z]);if(!f||!b)continue;let y=(a.pipes??[]).find(p=>p.to===`port:${h.id}`),v=y?c.get(y.id):void 0;n.push({floorId:o.id,points:[[f.x+b[0]*.03,f.y,f.z+b[1]*.03],[f.x-b[0]*.09,f.y,f.z-b[1]*.09]],radius:.035,water:v?.active?v.color:null,fittings:[]})}for(let h of a.joints??[]){if(h.kind!=="wall"&&h.kind!=="floor")continue;let f=d(`joint:${h.id}:inside`),b=d(`joint:${h.id}:outside`),y=h.kind==="floor"?.03:f.y;n.push({floorId:o.id,points:[[f.x,y,f.z],[b.x,b.y,b.z]],radius:.05,water:null,fittings:[]})}for(let h of a.pipes??[]){let f=Lo(Oe(h,d),h,s,o);if(f.length<2)continue;let b=c.get(h.id),y=[],v=Tn(f);for(let[p,w]of[[h.from,.04],[h.to,v-.04]]){let $=p.startsWith("dev:")||p.startsWith("joint:")?Pn(f,w):null;$&&y.push({kind:"sleeve",p:$.p,dir:$.dir})}for(let p of h.fittings??[]){let w=Pn(f,p.at);w&&y.push({kind:p.kind,p:w.p,dir:w.dir,open:p.open!==!1})}n.push({floorId:h.floor_id,points:f,radius:.025,water:b?.active?b.color??Do:null,fittings:y})}}return{flows:e,tubes:n}}watchSolarDay(t){let e=this.replay;if(e){clearInterval(this.holoTimer),this.holoTimer=void 0;let o=`tt|${t.join(",")}|${Math.floor(e.t/3e5)}`;if(o===this.holoIds)return;this.holoIds=o,this._rows=t.length?e.stats(t,new Date(e.t).setHours(0,0,0,0),e.t+1):null;return}let n=t.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!t.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let o=await qr(this.hass,t);this.holoIds===n&&(this._rows=o)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoBoxes=[];holoSizes=new Map;placeHolo(t,e,n,i,o,s){if(t>=this.holoCount)return this.placeWire(t-this.holoCount,e,n,i);(!this.holoBoxes.length||t<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${t}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${t}"]`),c=this._holos[t]?.kind==="main";if(!a){c&&this._holoOn&&(this._holoOn=!1);return}c&&i!==this._holoOn&&(this._holoOn=i);let d=this._holos[t],u=(this.building?.settings.roof.hologram??It).device_min_w??0;d?.kind==="device"&&u>0&&(d.w??0)<u&&(i=!1);let h=!i;if(a.hidden!==h&&(a.hidden=h),l&&l.hasAttribute("hidden")!==h&&l.toggleAttribute("hidden",h),!i)return;if(d?.kind==="bin"){let E=Math.max(.6,o*.8),M=!!d.bin?.icon&&o*.8<.62;a.classList.contains("fp3d-holo-far")!==M&&(a.classList.toggle("fp3d-holo-far",M),this.holoSizes.delete(t)),M&&(E=1);let A=this.holoSizes.get(t),et=performance.now();(!A||et-A.at>2e3)&&(A={w:a.offsetWidth||90,h:a.offsetHeight||40,at:et},this.holoSizes.set(t,A));let st=A.w*E,Bt=A.h*E,xt=n;for(let zt=0;zt<6;zt++){let C=this.holoBoxes.find(ft=>e-st/2<ft.x1+3&&e+st/2>ft.x0-3&&xt-Bt<ft.y1+3&&xt>ft.y0-3);if(!C)break;xt=C.y0-4}this.holoBoxes.push({i:t,x0:e-st/2,x1:e+st/2,y0:xt-Bt,y1:xt}),a.style.transform=`translate(${e.toFixed(1)}px, ${xt.toFixed(1)}px) scale(${E.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let f=o*.8,b=34*f,y=46*f,v=e+(s?b:-b),p=n-y,w=this.holoSizes.get(t),$=performance.now();(!w||$-w.at>2e3&&!(c&&this._holoBig))&&(w={w:a.offsetWidth||184,h:a.offsetHeight||90,at:$},this.holoSizes.set(t,w));let P=w.w*f,H=w.h*f,R=s?v:v-P,B=R+P;for(let E=0;E<6;E++){let M=this.holoBoxes.find(A=>R<A.x1+4&&B>A.x0-4&&p-H<A.y1+4&&p>A.y0-4);if(!M)break;p=M.y0-6}this.holoBoxes.push({i:t,x0:R,x1:B,y0:p-H,y1:p});let z=s||(this.building?.settings.roof.hologram??It).mirror!==!1;if(a.style.transform=z?`translate(${v.toFixed(1)}px, ${p.toFixed(1)}px) scale(${(s?f:-f).toFixed(3)}, ${f.toFixed(3)}) translate(0, -100%)`:`translate(${R.toFixed(1)}px, ${p.toFixed(1)}px) scale(${f.toFixed(3)}) translate(0, -100%)`,l){let E=l.firstElementChild,M=l.lastElementChild;E?.setAttribute("x1",e.toFixed(1)),E?.setAttribute("y1",n.toFixed(1)),E?.setAttribute("x2",v.toFixed(1)),E?.setAttribute("y2",p.toFixed(1)),M?.setAttribute("cx",e.toFixed(1)),M?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let t=this._energy,e=()=>this._holos.map((o,s)=>o.kind==="bin"?this.renderBinCard(o,s):o.kind==="rack"?this.renderRackCard(o,s):x);if(this.roomId&&!(this.building?.settings.roof.hologram??It).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return e();let n=this.floorId===null||(this.building?.floors.length??0)<=1,i=!!t&&(t.solar!==null||t.grid!==null||t.battery!==null)&&n;return this._holos.map((o,s)=>o.kind==="module"?this.renderModuleCard(o,s):o.kind==="bin"?this.renderBinCard(o,s):o.kind==="rack"?this.renderRackCard(o,s):o.kind==="car"?this.renderCarCard(o,s):o.kind==="media"?this.renderMediaCard(o,s):o.kind==="device"?this.renderDeviceCard(o,s):i?this.renderHoloCard(o,s,t):x)}renderBinCard(t,e){let n=t.bin,i=n.lines.length===1?n.lines[0]:null,o=n.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return m`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${i?.out?"fp3d-holo-out":""} ${i?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${e} hidden role="note" aria-label=${o} style="--bin:${n.lines[0].color}">
      ${n.icon?m`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:x}
      ${i?m`<div class="fp3d-holo-body"><b>${i.when}</b><span>${i.name}</span></div>`:m`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(s=>m`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(t,e){let n=this.hass,i=b=>_(n,b),o=t.car,s=!this.mediaFolded.has(o.spot),a=()=>{this.mediaFolded.has(o.spot)?this.mediaFolded.delete(o.spot):this.mediaFolded.add(o.spot),this.requestUpdate()},l=(b,y,v)=>_t(n,b,y,{entity_id:v}),c=(b,y)=>b.startsWith("climate.")?l("climate",y?"turn_on":"turn_off",b):l("homeassistant",y?"turn_on":"turn_off",b),d=async()=>{if(!o.lock)return;let b=o.lock.startsWith("lock.");if(o.locked){if(!await this.ask(i("car_unlock_confirm")))return;b?l("lock","unlock",o.lock):l("homeassistant","turn_off",o.lock)}else b?l("lock","lock",o.lock):l("homeassistant","turn_on",o.lock)},u=o.soc===null?"#37e0ff":o.soc>=50?"#4dff80":o.soc>=20?"#ffcc40":"#ff4d40",h=!!o.lock&&/^(lock|input_boolean|switch)\./.test(o.lock),f=!!o.climate&&/^(climate|switch|input_boolean)\./.test(o.climate);return m`<svg class="fp3d-holo-link" data-holo=${e} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${e} hidden role="group" aria-label=${t.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${s?"true":"false"} @click=${a} @keydown=${fe(a)}>
            <span>🚗 ${t.name}</span><span class="fp3d-holo-live">${o.charging?`\u26A1 ${i("car_charging_short")}`:o.locked===null?"":o.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${o.soc!==null?`${Math.round(o.soc)} %`:"\u2013"}</b>
            <span>${o.range!==null?`${j(n,o.range,0)} ${o.rangeUnit}`:""}${o.charging&&o.chargingW?` \xB7 ${G(n,o.chargingW)}`:""}</span>
          </div>
          ${o.soc!==null?m`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,o.soc))}%;background:${u}"></i></div>`:x}
          ${s&&!this.ro&&(h||f||o.charge)?m`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${h?m`<button title=${o.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${d}>${o.locked?"\u{1F512}":"\u{1F513}"}</button>`:x}
                ${f?m`<button class=${o.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>c(o.climate,!o.climateOn)}>❄</button>`:x}
                ${o.charge?m`<button class=${o.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>c(o.charge,!o.charging)}>⚡</button>`:x}
              </div>`:x}
        </div>
      </div>`}renderModuleCard(t,e){let n=t.module,i=!this.mediaFolded.has(n.id),o=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},s=f=>f?`color:${f}`:"",a=this._low||this.clientWidth<600,l=kn(n.rows,a),c=kn(n.cells,a),d=n.chain?kn(n.chain.items,a):[],u=n.spark&&n.spark.values.length>1&&!(a&&n.spark.minor)?n.spark:null,h=!!(n.chain||n.cells?.length||n.status);return m`<svg class="fp3d-holo-link" data-holo=${e} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${h?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${e} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${i?"true":"false"} @click=${o} @keydown=${fe(o)}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${s(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?m`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?m`<i>${n.status.icon}</i>`:x}<b>${n.status.text}</b>${n.status.since?m`<span>${n.status.since}</span>`:x}
              </div>`:x}
          ${n.main?m`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?m`<em style=${s(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?m`<small>${n.main.side.sub}</small>`:x}</em>`:x}
              </div>`:x}
          ${i&&d.length?m`<div class="fp3d-holo-chain">
                  ${d.map((f,b)=>m`${b?m`<s>→</s>`:x}<div><small>${f.label}</small><b style=${s(f.color)}>${f.value}</b></div>`)}
                </div>
                ${n.chain.note?m`<div class="fp3d-holo-chain-note" style=${s(n.chain.noteColor)}>${n.chain.note}</div>`:x}`:x}
          ${i?l.map(f=>m`<div class="fp3d-holo-mrow"><span>${f.label}</span><b style=${s(f.color)}>${f.value}</b>${f.at!==void 0?f.fill?m`<i class="fp3d-holo-mrow-fill"><s style="width:${f.at}%;background:${f.color??"#37e0ff"}"></s></i>`:m`<i><em style="left:${f.at}%;background:${f.color??"#37e0ff"};color:${f.color??"#37e0ff"}"></em></i>`:m`<i class="fp3d-holo-mrow-none"></i>`}</div>`):x}
          ${i&&c.length?m`<div class="fp3d-holo-cells">${c.map(f=>m`<div><small>${f.label}</small><b style=${s(f.color)}>${f.value}</b></div>`)}</div>`:x}
          ${i&&n.hint?m`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:x}
          ${i?(n.lines??[]).map(f=>m`<div class="fp3d-holo-mline">${f}</div>`):x}
          ${i&&u?m`${u.label?m`<div class="fp3d-holo-spark-label">${u.label}</div>`:x}${cl(u.values,u.color??"#ffb347")}`:x}
          ${i&&n.chips?.length?m`<div class="fp3d-holo-chips">
                ${n.chips.map(f=>m`<div class="fp3d-holo-mline">${f.title}</div>
                    <div class="fp3d-holo-chip-row">${f.items.map(b=>m`<button class=${b.on?"fp3d-holo-on":""} title=${b.title??""} @click=${()=>b.onTap()}>${b.label}</button>`)}</div>`)}
              </div>`:x}
          ${i&&!this.ro&&n.buttons?.length?m`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(f=>m`<button class=${f.on?"fp3d-holo-on":""} title=${f.title??""} @click=${()=>f.onTap()}>${f.label}</button>`)}</div>`:x}
        </div>
      </div>`}serviceFailed(t,e){let n=e&&typeof e=="object"&&"message"in e?String(e.message):String(e);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${t}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(t,e){let n=this.hass,i=$=>_(n,$),o=t.media,s=!this.mediaFolded.has(o.id),a=()=>{this.mediaFolded.has(o.id)?this.mediaFolded.delete(o.id):this.mediaFolded.add(o.id),this.requestUpdate()},l=($,P={})=>_t(n,"media_player",$,{entity_id:o.id,...P}),c={down:$=>$.currentTarget.dataset.pressed=String($.pointerId),up:$=>P=>{let H=P.currentTarget;H.dataset.pressed===String(P.pointerId)&&(delete H.dataset.pressed,P.stopPropagation(),H.dataset.acted=String(Date.now()),$())},key:$=>P=>{let H=P.currentTarget;Date.now()-Number(H.dataset.acted??0)<700||(H.dataset.acted=String(Date.now()),$())}},d=n.states[o.id]?.attributes.supported_features,u=$=>typeof d!="number"||(d&$)!==0,h=this.mediaIntent.get(o.id);h&&(h.playing===o.playing||Date.now()-h.at>3e4)&&this.mediaIntent.delete(o.id);let f=this.mediaIntent.get(o.id)?.playing??o.playing,b=u(16384)||u(1),y=()=>{this.mediaIntent.set(o.id,{playing:!f,at:Date.now()}),this.requestUpdate(),l(f?"media_pause":u(16384)?"media_play":"media_play_pause")},v=this.mediaVolume.get(o.id);v&&(Math.abs(v.v-o.volume)<=2||Date.now()-v.at>3e4)&&this.mediaVolume.delete(o.id);let p=this.mediaVolume.get(o.id)?.v??o.volume,w=($,P)=>{this.mediaVolume.set(o.id,{v:$,at:Date.now()}),this.requestUpdate(),(P||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:$/100}))};return m`<svg class="fp3d-holo-link" data-holo=${e} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${e} hidden role="group" aria-label=${t.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${s?"true":"false"} @click=${a} @keydown=${fe(a)}><span>♪ ${t.name}</span><span class="fp3d-holo-live">${f?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${o.picture?m`<img class="fp3d-holo-cover" src=${o.picture} alt="" />`:m`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${o.title}</b>${o.artist?m`<span>${o.artist}</span>`:x}</div>
        </div>
        ${s&&!this.ro?m`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!u(16)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_previous_track"))} @click=${c.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${f?!u(1):!b} @pointerdown=${c.down} @pointerup=${c.up(y)} @click=${c.key(y)}>${f?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!u(32)} @pointerdown=${c.down} @pointerup=${c.up(()=>l("media_next_track"))} @click=${c.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(p)}
                  aria-label=${i("volume")}
                  @input=${$=>w(Number($.target.value),!1)}
                  @change=${$=>w(Number($.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${p} %</span>
              </div>`:x}
      </div>
    </div>`}rackHolos(t,e){let n=[];if(!this.rackCards)return n;let i=(e.settings.roof.hologram??It).size*.7;for(let o of e.floors)for(let s of o.furniture){let a=s.rack?.slots;if(!a?.length)continue;let l=Mn(t,a,s.rack?.card?.metrics);if(!l.length)continue;let c=o.elevation+X(o,s)+s.h,d=Object.fromEntries(a.map(u=>[u.id,u.name||J(t,u.type)]));n.push({anchor:{p:[s.x,c+.15,s.z],n:[0,1,0],floorId:o.id,size:i,roof:!1,views:"all",room:Uo(o,s.x,s.z)},card:{kind:"rack",name:s.name||J(t,s.type),w:null,dayIds:[],battery:null,rack:{id:s.id,values:l,names:d}}})}return n}spokenRacks(t,e){let n=[];for(let i of e.floors){let o=vt(i);for(let s of i.furniture){let a=s.rack?.slots;if(!a?.length)continue;let l=Mn(t,a,s.rack?.card?.metrics),c=Mn(t,a,[he,ee]).filter(u=>!l.some(h=>h.key===u.key)),d=o.find(u=>u.points.length>=3&&K([s.x,s.z],u.points));n.push({id:s.id,name:s.name||J(t,s.type),room:d?.name??"",names:Object.fromEntries(a.map(u=>[u.id,u.name||J(t,u.type)])),values:[...l,...c].map(u=>({key:u.key,kind:u.kind,slot:u.slot,label:this.rackValueLabel(u),text:this.rackValueText(u),value:u.value,of:u.of}))})}}return n}toggleRackCard(t){this.rackOpen.delete(t)||this.rackOpen.add(t),this.watchRackSpark(),this.requestUpdate()}rackSparkIds(){let t=this._holos.filter(e=>e.rack&&this.rackOpen.has(e.rack.id)).flatMap(e=>e.rack.values.flatMap(n=>n.ids));return[...new Set(t)]}watchRackSpark(){let t=this.rackSparkIds(),e=this.replay,n=e?`tt|${t.join(",")}|${Math.floor(e.t/3e5)}`:t.join(",");if(!(n===this.rackSparkKey&&(e||Date.now()-this.rackSparkAt<3e5))){if(this.rackSparkKey=n,!t.length){this._rackRows=null;return}if(e){this._rackRows=e.stats(t,e.t-ul,e.t+1);return}!this.hass||globalThis.document?.hidden||(this.rackSparkAt=Date.now(),Aa(this.hass,t,ul).then(i=>{this.rackSparkKey===n&&(this._rackRows=i)}))}}rackValueText(t){let e=this.hass;if(t.key===ee)return t.text;if(t.value===null)return t.key===he?"\u2013":nt(e,e.states[t.key]);if(t.kind==="runtime"&&/^(s|min|h)$/.test(t.unit)){let i=t.value*(t.unit==="s"?.016666666666666666:t.unit==="h"?60:1);return i<120?`${Math.round(i)} min`:`${j(e,i/60,1)} h`}let n=Number.isInteger(t.value)?0:Math.abs(t.value)<10?2:1;return`${j(e,t.value,n)}${t.unit?` ${t.unit}`:""}`}rackValueLabel(t){let e=this.hass;return t.key===he?_(e,"rack_card_hottest"):t.key===ee?_(e,"rack_card_online"):t.kind==="other"?D(e,t.key):_(e,`rack_kind_${t.kind}`)}renderRackCard(t,e){let n=t.rack,i=this.rackOpen.has(n.id),o=n.values.find(u=>u.key===ee),s=!!o&&o.value===o.of,a=n.values.filter(u=>u!==o),l=()=>this.toggleRackCard(n.id),c=u=>{u.key!=="Enter"&&u.key!==" "||(u.preventDefault(),l())},d=u=>{let h=Ea(this._rackRows,u);return h.length>1?cl(h,u.kind==="temperature"?"#ffb86b":u.kind==="battery"?"#4dff80":"#7fe8ff"):x};return m`<svg class="fp3d-holo-link" data-holo=${e} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-rack ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${e} hidden role="button" tabindex="0" aria-expanded=${i?"true":"false"} aria-label=${t.name} @click=${l} @keydown=${c}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head"><span>▤ ${t.name}</span>${o?m`<span class="fp3d-holo-live" style="color:${s?$n.online:$n.warning}" title=${this.rackValueLabel(o)}>● ${o.text}</span>`:x}</div>
          ${i?m`<div class="fp3d-rack-card-grid">
                ${a.map(u=>m`<div class="fp3d-rack-card-row">
                    <span>${this.rackValueLabel(u)}${u.slot?m`<small>${n.names[u.slot]??""}</small>`:x}</span><b>${this.rackValueText(u)}</b>
                    ${d(u)}
                  </div>`)}
              </div>`:m`<div class="fp3d-holo-cells">${a.slice(0,4).map(u=>m`<div><small>${this.rackValueLabel(u)}</small><b>${this.rackValueText(u)}</b></div>`)}</div>`}
        </div>
      </div>`}renderDeviceCard(t,e){let n=this.hass,i=c=>_(n,c),o=!this.holoFolded.has(e),s=this.dayOf(t),a=s&&s.curve.length>1?so(s.curve,s.peak):null,l=()=>{this.holoFolded.has(e)?this.holoFolded.delete(e):this.holoFolded.add(e),this.requestUpdate()};return m`<svg class="fp3d-holo-link" data-holo=${e} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${o?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${e} hidden role="button" tabindex="0" aria-expanded=${o?"true":"false"} aria-label=${t.w===null?t.name:`${t.name}: ${G(n,t.w)}`} @click=${l} @keydown=${fe(l)}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${t.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${G(n,t.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${o&&s?m`<div class="fp3d-holo-sub">${i("holo_today")} <b>${j(n,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${G(n,s.peak)}</b></div>`:x}
        ${o&&a?Pt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${e}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${e})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:x}
      </div>
    </div>`}dayOf(t){if(!this._rows||!t.dayIds.length)return null;let e=Object.fromEntries(t.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(e).length?Br(e,new Date(this.now()),Object.fromEntries(Object.keys(e).map(n=>[n,this.hass?.states[n]?.attributes.unit_of_measurement]))):null}growHolo(t,e,n=!1){if(clearTimeout(this.holoBigTimer),this.holoBigTimer=void 0,t&&!this._holoBig){let i=this.renderRoot?.querySelector(`.fp3d-holo[data-holo="${e}"]`);i?.offsetWidth&&this.holoSizes.set(e,{w:i.offsetWidth,h:i.offsetHeight,at:performance.now()}),this.loadSolarMore()}t!==this._holoBig&&(this._holoBig=t),t&&n&&(this.holoBigTimer=setTimeout(()=>this.growHolo(!1,e),zd))}async loadSolarMore(){let t=this.hass;if(!(!t||this.replay||this.solarMoreLoading||this._solarMore&&Date.now()-this._solarMore.at<Hd)){this.solarMoreLoading=!0;try{let e=il(await t.callWS({type:"energy/get_prefs"}).catch(()=>null)),n=[...e.solar,...e.export],[i,o]=await Promise.all([e.forecast.length?t.callWS({type:"energy/solar_forecast"}).catch(()=>null):null,n.length?ro(t,n):null]);this._solarMore={at:Date.now(),prefs:e,forecast:i,change:o}}finally{this.solarMoreLoading=!1}}}solarMore(t){let e=this.replay?null:this._solarMore,n=s=>e?.change&&s.length?s.reduce((a,l)=>a+(e.change.get(l)??0),0):null,i=e?rl(e.forecast,e.prefs.forecast,new Date(this.now())):null,o=(e?n(e.prefs.solar):null)??t?.kwh??null;return{forecast:i,produced:o,rows:al({forecast:i,produced:o,exported:e?n(e.prefs.export):null})}}renderHoloCard(t,e,n){let i=this.hass,o=E=>_(i,E),s=this.dayOf(t),a=t.kind==="main",l=a&&this._holoBig,c=l||!this.holoFolded.has(e),d=l&&n.solar!==null?this.solarMore(s):null,u=a&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,h=d?.forecast?.hours??null,f=Math.max(s?.peak??0,...h??[0]),b=s&&s.curve.length>1?so(s.curve,f):null,y=h&&f>0?sl(h,f):null,v=new Date(this.now()),p=(v.getHours()+v.getMinutes()/60)/24*220,w=()=>{this.holoFolded.has(e)?this.holoFolded.delete(e):this.holoFolded.add(e),this.requestUpdate()},$=()=>{if(!a)return w();let E=this.holoPress;if(this.holoPress="",E!=="mouse")return this.growHolo(!this._holoBig,e,!0);w(),this._holoBig&&(this.holoHoverOff=!0,this.growHolo(!1,e))},P=E=>{a&&E.pointerType==="mouse"&&!this.holoHoverOff&&this.growHolo(!0,e)},H=E=>{!a||E.pointerType!=="mouse"||(this.holoHoverOff=!1,this.growHolo(!1,e))},R=fe($),B=a?n.solar??n.consumption??0:t.w??0,z=a?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:t.battery;return m`<svg class="fp3d-holo-link" data-holo=${e} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div
        class="fp3d-holo ${c?"":"fp3d-holo-min"} ${l?"fp3d-holo-grown":""} ${this._low?"fp3d-holo-plain":""}"
        data-holo=${e}
        hidden
        role="button"
        tabindex="0"
        aria-label=${`${t.name}: ${G(i,B)}`}
        aria-expanded=${String(a?l:c)}
        @click=${$}
        @keydown=${R}
        @pointerdown=${E=>this.holoPress=E.pointerType}
        @pointerenter=${P}
        @pointerleave=${H}
      >
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${t.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${o("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${G(i,B)}</b><span>${o(a&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${c?m`${a&&this._plants.length>1?m`<div class="fp3d-holo-plants">${this._plants.map(E=>m`<span>${E.name}</span><b>${G(i,E.w)}</b>`)}</div>`:x}
              ${s?m`<div class="fp3d-holo-sub">${o("holo_today")} <b>${j(i,s.kwh,1)} kWh</b> · ${o("holo_peak")} <b>${G(i,s.peak)}</b></div>`:d?.produced!=null?m`<div class="fp3d-holo-sub">${o("holo_today")} <b>${j(i,d.produced,1)} kWh</b></div>`:x}
              ${b||y?Pt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${e}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    ${y?Pt`<path class="fp3d-holo-fc" d="${y}" fill="none" stroke="#aee9ff" stroke-width="1.5" stroke-dasharray="3 3"/>`:x}
                    ${b?Pt`<path d="${b.area}" fill="url(#fp3dHoloG${e})"/>
                          <path d="${b.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                          <circle cx="${b.endX}" cy="${b.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>`:x}
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:x}
              ${y?m`<div class="fp3d-holo-legend"><span class="fp3d-holo-legend-act">${o("holo_actual")}</span><span class="fp3d-holo-legend-fc">${o("holo_forecast")}</span></div>`:x}
              ${d?.rows.length?m`<div class="fp3d-holo-more">
                    ${d.rows.map(E=>E.key==="self_use"?m`<div class="fp3d-holo-more-row"><span>${o("holo_self_use")}</span><b>${j(i,E.self,1)} kWh</b></div>
                            <div class="fp3d-holo-more-row"><span>${o("holo_exported")}</span><b>${j(i,E.exported,1)} kWh</b></div>
                            <div class="fp3d-holo-split" title="${E.share} %"><div style="width:${E.share}%"></div></div>`:m`<div class="fp3d-holo-more-row"><span>${o(E.key==="forecast_rest"?"holo_fc_rest":"holo_fc_tomorrow")}</span><b>${j(i,E.kwh,1)} kWh</b></div>`)}
                  </div>`:x}
              <div class="fp3d-holo-grid">
                ${z?m`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${o("holo_battery")}<br /><b>${z.soc!==null?`${Math.round(z.soc)} %`:G(i,Math.abs(z.w??0))}</b>
                      ${z.w!==null&&Math.abs(z.w)>=5?m`<span>${z.w<0?"\u25B2":"\u25BC"} ${G(i,Math.abs(z.w))}</span>`:x}
                    </div>`:x}
                ${a&&n.grid!==null?m`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${o("holo_grid")}<br /><b>${G(i,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":o(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:x}
                ${a&&n.consumption!==null?m`<div class="fp3d-holo-cell fp3d-holo-house">${o("holo_house")}<br /><b>${G(i,n.consumption)}</b></div>`:x}
                ${a&&this._wallboxW!==null?m`<div class="fp3d-holo-cell fp3d-holo-wb">${o("holo_wallbox")}<br /><b>${G(i,this._wallboxW)}</b></div>`:x}
              </div>
              ${a&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?m`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?m`<span>🔥 ${o("holo_gas")} <b>${j(i,this._meters.gas,this._meters.gas<10?2:1)} ${dl(i,this.building?.energy.gas)}</b></span>`:x}
                    ${this._meters.water!==null?m`<span>💧 ${o("holo_water")} <b>${Rd(i,this._meters.water,dl(i,this.building?.energy.water))}</b></span>`:x}
                    <span>${o("holo_today_short")}</span>
                  </div>`:x}
              ${u!==null?m`<div class="fp3d-holo-bar"><div style="width:${u}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${o("holo_autarky")}</span><b>${u} %</b></div>`:x}`:x}
      </div>
    </div>`}setAlerts(t){let e=t.map(s=>`${s.kind}:${s.entity}`),n=this.ro?[]:t.filter((s,a)=>!this.seenAlerts.has(e[a]));this.ro||(this.seenAlerts=new Set(e)),e.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=t);let i=t.some(s=>!s.quiet&&s.kind!=="water");if(i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let o=this.directorSettings();if(o?.alerts){let s=n[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),o.hold??30)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(n[0])}tidySnoozes(t,e,n){if(this.ro||!this.mayEdit)return;let i=Vs(t.settings.alert_snoozed,e).filter(s=>n||fn.has(s.kind));if(!i.length)return;let o=new Set(i.map(_o));this.setPlanSettings({alert_snoozed:(t.settings.alert_snoozed??[]).filter(s=>!o.has(_o(s)))})}dismiss(t,e){let n=this.building;this._dismissing=null,!(!n||!this.mayEdit)&&(this.setPlanSettings(Bs(n.settings,t,e,Date.now())),this.setAlerts(this._alerts.filter(i=>ht(i)!==ht(t))),this.applyTint())}directorSettings(){let t=this.building?.settings.director;return this.director&&!this.ro&&ns(t)?t:null}direct(){let t=this.directorSettings(),e=this.hass,n=this.building;if(!t||!e||!n){this.directorSrc&&(this.directing=new lo,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let i=Date.now(),o=t.hold??30,s=`${JSON.stringify(t)}|${n.floors.map(c=>c.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==e.entities||this.directorSrc.building!==n||this.directorSrc.sig!==s){let c=[...new Set(n.floors.flatMap(u=>u.placements.map(h=>h.entity_id)))],d=t.motion??"off";this.directorSrc={registry:e.entities,building:n,sig:s,bells:(t.doorbell?os(e,t.doorbell_entity):[]).map(u=>({id:u,camera:ss(e,u,c,t.doorbell_camera)})),motion:d==="off"?[]:c.filter(u=>u.startsWith("camera.")).flatMap(u=>Wt(e,u).filter(h=>d==="all"||no(e,h)==="person").map(h=>({sensor:h,cam:u})))}}let a=[];for(let c of this.directorSrc.bells)this.directing.edge(c.id,e.states[c.id],(d,u)=>is(d,u,i))&&a.push({kind:"doorbell",key:`bell:${c.id}`,entity:c.id,camera:c.camera});for(let c of t.triggers??[])c.entity&&this.directing.edge(`trigger:${c.entity}`,e.states[c.entity],(d,u)=>rs(d,u,i))&&a.push({kind:"trigger",key:`trigger:${c.entity}`,entity:c.entity,camera:c.camera});for(let c of this.directorSrc.motion)this.directing.edge(c.sensor,e.states[c.sensor],(d,u)=>d?.state==="off"&&u?.state==="on")&&a.push({kind:"motion",key:`cam:${c.cam}`,entity:c.sensor,camera:c.cam});if(t.appliances){for(let[c,d]of this.appliances)this.directing.stopped(`app:${c}`,d.running,i)&&a.push({kind:"appliance",key:`app:${c}`,entity:c});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((c,d)=>l.indexOf(c.kind)-l.indexOf(d.kind));for(let c of a)if(this.directing.offer(c,i,o)){this.directorShow(()=>this.directorGo(c));break}}directorShow(t){let e=this.viewer;if(!e)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:e.getView()}),e.setAutoOrbit(0),t(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(t){let e=this.building;if(e){if(t.camera&&e.floors.some(n=>n.placements.some(i=>i.entity_id===t.camera))){let n=t.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(t.kind==="appliance"){let n=this.appliances.get(t.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(t.entity)}}directorDue(){let t=this.directing.due(Date.now()),e=this.directorBack;t&&(this.directorBack=null,!(!t.back||!e)&&(this._through&&(this._through=null),this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId?setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60):this.roomId&&e.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(e.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(t){if(!t.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60)}onRoomDoubleTap(t,e){let n=this.building,i=this.hass,o=n?.floors.find(d=>d.id===t),s=o?vt(o).find(d=>d.id===e):void 0;if(!n||!i||!o||!s||this.ro)return;let a=new Set(yt(i,s.area_id).filter(d=>L(d)==="light"));for(let d of o.placements)L(d.entity_id)==="light"&&K([d.x,d.z],s.points)&&a.add(d.entity_id);for(let d of o.furniture){let u=this.furnitureLinks.get(d.id)?.entity;u&&Kn(d.type)&&K([d.x,d.z],s.points)&&a.add(u)}let l=[...a].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let c=l.some(d=>i.states[d]?.state==="on");_t(i,"homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:e,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(t){this.ro||(_t(this.hass,t.split(".")[0],"turn_on",{entity_id:t}),this._sceneFired=t,setTimeout(()=>this._sceneFired=null,600))}applyMotion(){let t=this.viewer,e=this.building,n=this.hass;if(clearTimeout(this.motionTimer),this.motionTimer=void 0,!t||!e||!n)return;let i=this.now(),o=wr(n,e,i);t.setRoomGlow(o.rooms),o.next!==null&&!this.replay&&(this.motionTimer=setTimeout(()=>this.applyMotion(),Math.max(50,o.next-i+20)))}applyTint(){let t=this.viewer,e=this.building,n=this.hass;if(!t||!e||!n)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=Us(n,e,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([c,d])=>[c,Ks(a,d)]))}let o=new Map;if(this.heatMode==="values")for(let a of e.floors)for(let l of vt(a)){let c=Lt(n,a,l,"temperature"),d=Lt(n,a,l,"humidity"),u=Lt(n,a,l,"co2"),h=[c!==null?`${j(n,At(n,c),1)} ${Dt(n)}`:null,d!==null?`${j(n,d,0)} %`:null,u!==null?`${j(n,u,0)} ppm`:null].filter(f=>!!f);h.length&&o.set(l.id,h.join(" \xB7 "))}if(t.setRoomInfo(o),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let c=l.kind==="water"?1:a,d=Ls(l).map(u=>u*c);if(l.roomId)i.set(l.roomId,d);else for(let u of e.floors)if(!l.floorId||u.id===l.floorId)for(let h of u.rooms)i.set(h.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,t.setRoomTint(i))}furnitureMarkers(t,e,n,i){let o=[],s=[],a=new Map,l=new Map,c=new Set(n),d=[];this.binHolos=[],this.binSpots=new Map,this.binCues=[],this.printerCams.clear();let u=new Map(this.scene.filter(v=>v.kind==="glow").map(v=>[v.furnitureId,v]));for(let v of e.floors)for(let p of v.furniture){let w=this.furnitureLinks.get(p.id),$=this.stateFaces(t,p);if($.length&&a.set(p.id,{color:$[0].color,level:$[0].level,faces:$}),Kn(p.type)){let I=this.lampMarker(t,v,p,w?.entity??null);o.push(I);let N=p.type==="lamp_fan"&&p.fan&&p.fan!=="none"?p.fan:null;if(N&&!n.has(N)){n.add(N);let Q=t.states[N],Tt=p.rotation*Math.PI/180,Ot=Math.min(.45,p.w*.3);o.push({id:N,floorId:v.id,roomId:I.roomId,x:p.x+Math.cos(Tt)*Ot,z:p.z+Math.sin(Tt)*Ot,y:I.y,icon:p.icon?Gt(p.icon):Te("fan"),name:D(t,N),text:Q&&Zn(Q)>0&&typeof Q.attributes.percentage=="number"?`${Math.round(Q.attributes.percentage)} %`:Q?nt(t,Q):"",active:Q?kt(Q):!1,unavailable:Q?Y(Q):!1,glow:null,furnitureId:p.id,show:p.marker??"always",fromFurniture:!0})}continue}if(Pi.has(p.type)){let I=this.techItem(t,v,p,a,n);I&&(o.push(I),l.set(p.id,I.id));continue}if(Ti.has(p.type)){let I=this.gangItem(t,v,p,s,a,i);I&&(o.push(I),l.set(p.id,I.id));continue}let P=u.get(p.id);P&&a.set(p.id,{color:P.color,level:P.level});let H=(p.type==="plant"||ho(p.type))&&!!p.moisture&&p.moisture!=="none";if(p.type==="waste_bin"||p.type==="mailbox"||H){let I=this.householdState(t,v,p);I?.screen&&a.set(p.id,I.screen),I?.marker&&o.push(I.marker);let N=p.type==="waste_bin"?p.bin_source:p.type==="mailbox"?p.entity:p.moisture;if(typeof N=="string"&&N!=="none"&&l.set(p.id,`hh:${N}#${p.id}`),I?.item&&d.push(I.item),!H)continue}let R=Hs(p,t);R.length&&!a.has(p.id)&&a.set(p.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let I of R){let N=p.name||J(t,p.type);d.push({icon:"wrench-outline",text:I===p.service?_(t,"hh_service",{name:N}):_(t,"hh_service2",{name:N,what:D(t,I)}),entity:I})}(p.type==="fridge"||p.type==="fridge_smart")&&hn(p,t)&&(a.set(p.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),d.push({icon:"fridge-alert-outline",text:_(t,"hh_fridge_open",{name:p.name||J(t,p.type)}),entity:Vt(p)[0]??null}));let z=p.type==="parking"&&!!p.car?Me(t,p):null,E=p.type==="washer"||p.type==="dryer"||p.type==="dishwasher",M=tt(p.type)==="home_battery"?p.soc:tt(p.type)==="wallbox"?p.status:p.type==="parking"&&z?p.car?.device??z.entities.soc:E?p.remaining??null:null,A=M&&M!=="none"?M:null,et=p.extra&&p.extra!=="none"&&t.states[p.extra]?p.extra:null,st=_r(t,e,p),Bt=st&&st.sensor!==et&&st.sensor!==w?.entity?`${j(t,At(t,st.celsius),0)} ${Dt(t)}`:"",xt=[et?nt(t,t.states[et]):"",Bt].filter(Boolean).join(" \xB7 "),zt=I=>xt?I?`${I} \xB7 ${xt}`:xt:I,C=w??(A||et||st?{entity:null,power:null}:void 0);if(!C)continue;let ft=tt(p.type)==="home_battery"?A??C.entity??C.power:C.entity??C.power??A??et;l.set(p.id,ft);let F=C.entity?t.states[C.entity]:void 0,me=tt(p.type)==="meter"?e.energy.grid_invert&&!p.export:tt(p.type)==="home_battery"?e.energy.battery_invert&&!p.charge:!1,lt=C.power?wt(t.states[C.power],me):null,ge=tt(p.type)==="home_battery"&&p.charge&&p.charge!=="none"?p.charge:tt(p.type)==="meter"&&p.export&&p.export!=="none"?p.export:null,dt=ge?wt(t.states[ge]):null;if(dt!==null&&(lt=Math.max(0,lt??0)-Math.max(0,dt)),C.power&&lt!==null&&Dr(p.type)&&!i.has(C.power)){i.add(C.power);let I=p.circuit&&p.circuit!=="none"?p.circuit:void 0,N=p.energy??void 0;s.push({id:ft,powerEntity:C.power,floorId:v.id,x:p.x,z:p.z,power:Math.max(0,lt),wallbox:tt(p.type)==="wallbox"||void 0,circuit:I,...N?{energy:N}:{}})}let ct=typeof p.run_w=="number"&&p.run_w>0?p.run_w:10,oe=typeof p.run_w=="number"&&p.run_w>0&&lt!==null&&lt<=p.run_w,Ht=(lt??0)>ct||F?.state==="on"||F?.state==="running"||Ze(F)&&kt(F);E&&this.appliances.set(p.id,{floorId:v.id,x:p.x,z:p.z,entity:C.entity??C.power??p.id,running:Ht});let ut=null;if(E){let I=p.remaining&&p.remaining!=="none"?t.states[p.remaining]:void 0,N=vo(I),Q=Ht||!C.power&&!C.entity&&(N??0)>0,Tt=Vt(p),Ot=Fn=>Tt.some(Ve=>{let ve=t.states[Ve];return!!ve?.last_changed&&Date.parse(ve.last_changed)>Fn}),Ne=this.finished.update(p.id,Q,Ot),jt=p.name||(C.entity?D(t,C.entity):J(t,p.type));Q?(Ht||a.set(p.id,ml(p.type)),N!==null&&!wo(F,C.power?lt:null,ct)&&(ut=_(t,"hh_left",{t:zs(N)}),d.push({icon:"timer-outline",text:`${jt}: ${ut}`,entity:p.remaining??C.entity}))):(yo(F)||yo(I)||Ne)&&(ut=_(t,"hh_done"),a.set(p.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),d.push({icon:"check-circle-outline",text:_(t,"hh_finished",{name:jt}),entity:C.entity??C.power}))}if(z&&ce(t,p)){let I=[];if(z.soc!==null){let N=z.soc>=50?[.3,1,.5]:z.soc>=20?[1,.8,.25]:[1,.3,.25];I.push({part:"band",color:N,level:z.charging?1:.6})}if(z.locked===!1&&I.push({part:"lights",color:[1,.42,.02],level:1}),z.climateOn){let N=z.entities.climate?t.states[z.entities.climate]:void 0,Q=!!N&&(N.attributes.hvac_action==="cooling"||N.state==="cool");I.push({part:"cabin",color:Q?[.45,.8,1]:[1,.55,.22],level:.35})}I.length&&a.set(`${p.id}:vehicle`,{color:I[0].color,level:I[0].level,faces:I})}if(st?.kind==="radiator"){let I=F&&L(F.entity_id)==="climate"?F.attributes:null,N=Gn(t,p.heat_sensor)??(!!I&&kt(F)&&I.hvac_action!=="cooling");a.set(p.id,{color:st.color,level:N?.9:.55,shade:!0})}else if(st?.kind==="tank"){let I=eo(e),N=xr(st.celsius-.3*(I.tank_hot-I.tank_cold),I.tank_cold,I.tank_hot);a.set(p.id,{color:N,level:.8,shade:!0,faces:[{part:"strata",color:N,top:st.color,level:.8}]})}else if(yi(p.type)&&(F&&L(F.entity_id)==="climate"||p.heat_sensor)){let I=F&&L(F.entity_id)==="climate"?F.attributes:null;if(Gn(t,p.heat_sensor)??(!!I&&kt(F)&&I.hvac_action!=="cooling")){let Q=I&&typeof I.temperature=="number"&&typeof I.current_temperature=="number"?I.temperature-I.current_temperature:1;a.set(p.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,Q))})}else u.has(p.id)&&a.delete(p.id)}else if(p.type==="ac_unit"&&F&&L(F.entity_id)==="climate"){let I=Ni(F);I&&a.set(p.id,I)}else if((p.type==="washer"||p.type==="dryer"||p.type==="dishwasher")&&Ht)a.set(p.id,ml(p.type));else if(p.type==="stove"||Bn(p.type)){let I=Wi(F,Ht);I>0&&a.set(p.id,{color:[1,.05,.01],level:I,faces:[{part:"burners",color:[1,.05,.01],level:I}]})}let qt=Mt(p.type),Le=!!qt&&!qt.light&&qt.parts.some(I=>I.glow);if(F&&Le&&L(F.entity_id)==="media"&&F.state==="playing"&&!Qe(p.type)){let I=typeof F.attributes.volume_level=="number"?F.attributes.volume_level:.5;a.set(p.id,{color:Qn(F)??[.22,.88,1],level:.5+.5*I,ring:!0,plain:!0})}if(F&&Qe(p.type)&&!Bn(p.type)&&!(mi(p.type)&&L(F.entity_id)==="cover")){let I=L(F.entity_id)==="light"?Ut(F):null,N=L(F.entity_id)==="media"&&["playing","on","paused","idle"].includes(F.state),Q=L(F.entity_id)==="media"?Qn(F):I?I.color:kt(F)||N?[.22,.88,1]:null,Tt=L(F.entity_id)==="media"?F.attributes.entity_picture??null:null;Q&&a.set(p.id,{color:Q,level:F.state==="playing"?1:.6,picture:Tt,ring:vi(p.type)||Le&&F.state==="playing"})}let Ct=An(p.type)?Ua(t,C.entity):null;if(Ct){let I=Ga(Ct);I.length&&a.set(p.id,{color:I[0].color,level:I[0].level,faces:I}),Ct.camera&&this.printerCams.set(ft,Ct.camera)}let We=Ct?.progress!=null?` \xB7 ${Math.round(Ct.progress*100)} %`:"";if(c.has(ft))continue;n.add(ft);let Cn=C.entity?L(C.entity):null,be=v.rooms.find(I=>I.points.length>=3&&K([p.x,p.z],I.points)),Ft=F&&bi(p.type)&&F.entity_id.startsWith("water_heater.")?Vd(t,F):null;o.push({id:ft,floorId:v.id,roomId:be?.id??null,x:p.x,z:p.z,y:qd(p)+X(v,p),icon:p.icon?Gt(p.icon):Ft?Gt("water-boiler"):Te(Cn??"switch"),name:p.name||(C.entity?D(t,C.entity):J(t,p.type)),ownName:p.name||void 0,showName:!!p.show_name,text:zt(ut??(z?this.carText(t,z,!!F&&!vn.has(F.state.toLowerCase())):tt(p.type)==="home_battery"?this.batteryText(t,A,lt):tt(p.type)==="wallbox"?this.wallboxText(t,A,lt):tt(p.type)==="meter"?this.meterText(t,lt):Ft?Ft.text:F?nt(t,F)+We:oe?_(t,"pin_standby"):lt!==null?G(t,Math.max(0,lt)):"")),active:ut?!0:z?z.charging:Ft?Ft.on:F?kt(F):(lt??0)>(typeof p.run_w=="number"&&p.run_w>0?p.run_w:5),unavailable:F?Y(F):!1,glow:null,furnitureId:p.id,energyDevice:tt(p.type)==="inverter"||tt(p.type)==="home_battery"||tt(p.type)==="wallbox"||tt(p.type)==="meter"||!!z||!!et||!!st,...oe?{standby:oe}:{},show:p.marker??(z||ut?"always":void 0),fromFurniture:!0})}let h=e.settings.household;if(h?.bin_next_only||typeof h?.bin_days=="number"){let v=Ts(this.binHolos.filter(p=>!p.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(p=>p.icon||v.has(p.id))}let f=e.settings.household?.notes,b=f&&f!=="none"?t.states[f]:void 0;if(b&&!Y(b)&&b.state.trim()){let v=b.state.split(/\s*(?:\||\n|;)\s*/).map(p=>p.trim()).filter(Boolean).slice(0,8);d.unshift(...v.map(p=>({icon:"pin-outline",text:p,entity:f})))}this._household=d.filter((v,p)=>d.findIndex(w=>w.text===v.text)===p),this.cameraScreens=0;let y=Jn(t,e.floors);for(let v of e.floors)for(let p of v.furniture){if(!p.pictures?.length||!Qe(p.type)||p.type==="fridge_smart"&&y.get(p.id)?.right)continue;let w=p.pictures.find(H=>Ki(t,H));if(!w)continue;let $=this.pictureUrl(w.image),P=p.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];$&&a.set(p.id,{color:P,level:1,picture:$,plain:!0})}for(let v of u.values())v.top?a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"strata",color:v.color,top:v.top,level:v.level}]}):v.band&&a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"band",color:v.color,level:v.level}]});return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:o,consumers:s,screens:a,targets:l}}watchHousehold(t,e){let i=e.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox").length>0&&!this.replay,o=i?ks(e.floors):[],s=o.join(",");if(!i){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let a=async()=>{o.length&&(this.pickups=await mo(this.hass??t,o)),this.syncDevices(!0)};(s!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=s,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void a(),6e5),o.length&&mo(t,o).then(l=>{this.pickups=l,this.syncDevices(!0)}))}gangItem(t,e,n,i,o,s){let a=Je(n),l=n.type==="wall_socket",c=[],d=0,u=0,h=null,f=!1;if(a.forEach((P,H)=>{let R=P.entity&&P.entity!=="none"?P.entity:null,B=P.power&&P.power!=="none"?P.power:null;if(!R&&!B)return;u++;let z=R?t.states[R]:void 0,E=B?wt(t.states[B]):null;if(B&&E!==null&&(h=(h??0)+Math.max(0,E),s.has(B)||(s.add(B),i.push({id:R??B,powerEntity:B,floorId:e.id,x:n.x,z:n.z,power:Math.max(0,E),circuit:n.circuit&&n.circuit!=="none"?n.circuit:void 0}))),z&&!Y(z)&&(f=!0),!(z?kt(z):(E??0)>5))return;d++;let A=z&&L(z.entity_id)==="light"?Ut(z):null;if(!l){c.push({part:"gang",index:H,of:a.length,color:A?A.color:[.22,.88,1],level:.5,accent:!A});return}let et=A?A.color:[.35,1,.55];c.push({part:"gang",index:H,of:a.length,color:et,level:E!==null?Math.min(1,.55+E/1500):.8})}),c.length&&o.set(n.id,{color:c[0].color,level:c[0].level,faces:c}),!u)return null;let b=Xe(n),y=b[0]??null,v=y?t.states[y]:void 0,p=e.rooms.find(P=>P.points.length>=3&&K([n.x,n.z],P.points)),w=h,$=Ar(this.floorWalls(e),n,e.height,X(e,n));return{id:`gangs:${n.id}`,floorId:e.id,roomId:p?.id??null,x:$.x,z:$.z,y:n.h+.2+$.y,icon:Gt(n.icon||(l?"power-socket-de":"light-switch")),name:n.name||(b.length===1&&y?D(t,y):J(t,n.type)),ownName:n.name||void 0,showName:!!n.show_name,text:u>1?`${d}/${u}${w!==null?` \xB7 ${G(t,w)}`:""}`:w!==null?G(t,w):v?nt(t,v):"",active:d>0,unavailable:!!y&&!f,glow:null,power:w??void 0,furnitureId:n.id,show:n.marker??void 0,fromFurniture:!0}}techItem(t,e,n,i,o){let s=R=>typeof R=="string"&&R!=="none"?R:null,a=s(n.entity),l=a?t.states[a]:void 0,c=e.rooms.find(R=>R.points.length>=3&&K([n.x,n.z],R.points)),d={floorId:e.id,roomId:c?.id??null,x:n.x,z:n.z,ownName:n.name||void 0,showName:!!n.show_name,glow:null,furnitureId:n.id,fromFurniture:!0};if(n.type==="wifi_ap"){let R=s(n.clients),B=R?t.states[R]:void 0,z=B&&Number.isFinite(Number(B.state))?Math.round(Number(B.state)):null,E=a?Xn(l):B?Xn(B):null;if(E!==null){let A=E?[.25,.6,1]:[1,.25,.2];i.set(n.id,{color:A,level:.85,faces:[{part:"apring",color:A,level:.85}]})}let M=a??R;return!M||o.has(M)?null:(o.add(M),{...d,id:M,y:X(e,n)-(n.variant==="wall"?-n.h-.2:.3),icon:Gt(n.icon||"access-point"),name:n.name||D(t,M),text:E===!1?_(t,"ap_offline"):z!==null?_(t,"ap_clients",{n:z}):l?nt(t,l):"",active:E===!0,unavailable:E===!1,show:n.marker??(E===!1?"always":void 0),energyDevice:z!==null})}let u=l?L(l.entity_id):null,h=s(n.power),f=h?wt(t.states[h]):null,b=typeof n.run_w=="number"&&n.run_w>0?n.run_w:30,y=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(f??0)>b;(y||l&&!["off","unavailable","unknown"].includes(l.state))&&i.set(n.id,{color:[1,.45,.15],level:y?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:y?.9:.3}]});let p=s(n.water_temp),w=p?t.states[p]:void 0,$=w&&Number.isFinite(Number(w.state))?Number(w.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,P=w?.attributes.unit_of_measurement??"\xB0C",H=a??p??h;return!H||o.has(H)?null:(o.add(H),{...d,id:H,y:X(e,n)+n.h+.25,icon:Gt(n.icon||"water-boiler"),name:n.name||(a?D(t,a):J(t,n.type)),text:$!==null?`${j(t,Math.round($))} ${P}${y?" \xB7 \u{1F525}":""}`:l?nt(t,l):"",active:y,unavailable:l?Y(l):!1,power:f??void 0,show:n.marker??void 0,energyDevice:$!==null})}floorWalls(t){let e=this.wallCache.get(t);if(!e){let n=this.building?.settings;e=Pr(t.rooms,{exterior:n?.wall_exterior??.24,interior:n?.wall_interior??.12},t.walls??[]).walls,this.wallCache.set(t,e)}return e}wallCache=new WeakMap;renderGangMenu(){let t=this._gangMenu,e=this.hass,n=t&&this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===t.furnitureId);if(!t||!e||!n)return x;let i=n.type==="wall_socket";return m`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${t.x}px;top:${t.y}px">
        <span>${n.name||J(e,n.type)}</span>
        ${Je(n).map((s,a)=>{let l=s.entity&&s.entity!=="none"?s.entity:null,c=l?e.states[l]:void 0,d=s.power&&s.power!=="none"?wt(e.states[s.power]):null,u=`${i?"\u{1F50C}":"\u25AD"} ${a+1} \xB7 ${l?D(e,l):"\u2013"}`;return m`<button class="fp3d-chip ${c&&kt(c)?"fp3d-gang-on":""}" ?disabled=${!l||(c?Y(c):!0)}
            @click=${async()=>{!l||!await this.confirmFor(l)||on(e,l)}}>${u}${c?m` <small>${nt(e,c)}${d!==null?` \xB7 ${G(e,Math.max(0,d))}`:""}</small>`:x}</button>`})}
      </div>`}householdState(t,e,n){let i=l=>{let c=parseInt(l.slice(1),16);return[(c>>16&255)/255,(c>>8&255)/255,(c&255)/255]};if(n.type==="waste_bin"){let l=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null,c=l?go(n,t,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until}):null,d=this.furnish?null:Ss(n,!!c?.glow,pn(n,t));d?.kerb&&this.binSpots.set(n.id,d.at);let[u,h]=d?.at??[n.x,n.z];if(!c||!l)return null;let f=c.days===0?_(t,"bin_today"):c.days===1?_(t,"bin_tomorrow"):_(t,"bin_in_days",{n:c.days}),b=i(xs(n)[1]),y=Math.max(...b),p=y-Math.min(...b)<.12?[.92,.95,1]:b.map(R=>Math.min(1,R/Math.max(.001,y)*1.05)),w=n.name||_(t,`bin_kind_${n.bin_kind??"rest"}`),$=pn(n,t),P=`#${p.map(R=>Math.round(R*255).toString(16).padStart(2,"0")).join("")}`,H=$?_(t,"bin_out_done"):f;return this.binHolos.push({id:n.id,floorId:e.id,x:u,z:h,y:X(e,n)+n.h,r:Math.max(n.w,n.d)/2,name:w,color:P,when:H,soon:c.days<=1&&!$,days:c.days,out:$}),d?.cue&&this.binCues.push({floorId:e.id,from:[n.x,n.z],to:d.cue,skip:Math.max(n.w,n.d)/2+.1,color:P}),{item:c.days<=1?{icon:$?"check-circle-outline":"trash-can-outline",text:`${w}: ${H}`,entity:l,hot:c.glow&&!$}:void 0}}if(n.type!=="mailbox"){let l=bo(n,t),c=[1,.55,.12],d=n.name||J(t,n.type);return l?(this.binHolos.push({id:n.id,floorId:e.id,x:n.x,z:n.z,y:X(e,n)+n.h,r:Math.max(n.w,n.d)/2,name:d,color:"#ff8c1f",when:_(t,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:c,level:.9,faces:[{part:"band",color:c,level:.9}]},item:{icon:"watering-can-outline",text:_(t,"hh_plant",{name:d}),entity:n.moisture??null,hot:!0}}):null}let o=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!o)return null;let s=Es(n,t),a=[1,.62,.15];return s&&this.binHolos.push({id:n.id,floorId:e.id,x:n.x,z:n.z,y:X(e,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||J(t,n.type),color:"#ffb547",when:_(t,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:n.name?`${n.name}: ${_(t,"mailbox_post")}`:_(t,"mailbox_post"),entity:o,hot:!0}:void 0}}robotPaths(t,e){let n=this.replay;if(!n)return[];let i=[];for(let o of e.floors){let s=o.rooms.filter(a=>a.points.length>=3);for(let a of o.furniture){if(!jn(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let c=n.robotRooms(l,Ie(t,l,a.room_sensor)),d=[];for(let u of c){let h=Zi(t,s,u),f=h?Et(h.points):null,b=d[d.length-1];f&&(!b||b[0]!==f[0]||b[1]!==f[1])&&d.push([f[0],f[1]])}d.length&&i.push({floorId:o.id,points:d})}}return i}trailNow(t,e){let n=this.now(),i=Ce(t,e),o=this.replay?this.replay.rows(i.map(a=>a.entity),n-He,n):this.trailRows,s=i.map(a=>{let l=t.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return ta(i,Qs(o,s,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,!this.trail||this.replay){this.trailRows={},this.syncDevices(!0);return}let t=async()=>{let e=this.hass,n=this.building;if(!e||!n||document.hidden)return;let i=Ce(e,n).map(o=>o.entity);if(i.length){try{let o=await e.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-He).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=o??{}}catch{this.trailRows={}}this.syncDevices(!0)}};t(),this.trailTimer=setInterval(()=>{t()},6e4)}projecting=!1;projectedCameras(t,e){let n=[];if(dr()){let i=new Set(e.floors.flatMap(o=>o.placements.map(s=>s.entity_id)).filter(o=>L(o)==="camera"));for(let o of i){let s=t.states[o],a=s?.attributes.entity_picture;!a||Y(s)||n.push({id:o,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(t){t&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!t&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(t){if(/^https?:\/\//.test(t))return t;if(t.startsWith("camera:")){let e=this.hass.states[t.slice(7)],n=e?.attributes.entity_picture;return!n||Y(e)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(t)?this.pictureUrls.get(t)??null:(this.pictureUrls.set(t,null),hi(this.hass,t,this.home).then(e=>{this.pictureUrls.set(t,e),this.syncDevices(!0)},()=>{}),null)}robotObstacles(t,e){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return t.furniture.filter(i=>{if(n.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||X(t,i)>.12)return!1;let o=Mt(i.type);return o&&(o.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:K([i.x,i.z],e)||_e(i).some(s=>K(s,e))}).map(i=>_e(i))}robotInfos(t,e){let n=[];for(let i of e.floors)for(let o of i.furniture){if(!jn(o.type))continue;let s=this.furnitureLinks.get(o.id)?.entity??null,a=s?t.states[s]?.state:void 0,l=Li(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=o.rotation*Math.PI/180,d=Ye(o.type),u=o.d*(d?gi(Mt(o.type)):.14),h=[o.x-Math.sin(c)*u,o.z+Math.cos(c)*u],f=i.rooms.filter(p=>p.points.length>=3),y=(l==="cleaning"?Xi(t,f,s,Ie(t,s,o.room_sensor)):null)??f.find(p=>K(h,p.points)),v=l==="cleaning"&&y?this.robotObstacles(i,y.points):[];n.push({id:o.id,floorId:i.id,rest:h,restHeading:-c,mode:l,room:y?.points??null,roomId:y?.id??null,obstacles:v,...d?{model:{type:o.type,w:o.w,d:o.d,h:o.h}}:{}})}return n}batteryText(t,e,n){let i=e?Number(t.states[e]?.state):Number.NaN,o=[];return Number.isFinite(i)&&o.push(`${j(t,i,0)} %`),n!==null&&Math.abs(n)>=10&&o.push(`${n<0?"\u25B2":"\u25BC"} ${G(t,Math.abs(n))}`),o.join(" \xB7 ")}meterText(t,e){return e===null?"":Math.abs(e)<5?G(t,0):`${_(t,e<0?"energy_grid_export":"energy_grid_import")} ${G(t,Math.abs(e))}`}wallboxText(t,e,n){let i=e?t.states[e]:void 0,o=String(i?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(o),a=i?.entity_id.startsWith("binary_sensor.")?o==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(o),l=s?_(t,"wallbox_charging"):a?_(t,"wallbox_plugged"):i&&!Y(i)&&!i.entity_id.startsWith("binary_sensor.")?nt(t,i):"",c=n!==null&&n>50?G(t,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(t,e){let n=[],i=e.state_entity&&e.state_entity!=="none"&&e.state_entity2&&e.state_entity2!=="none"?[[e.state_entity,e.state_split==="top_bottom"?"bottom":"left"],[e.state_entity2,e.state_split==="top_bottom"?"top":"right"]]:[[e.state_entity,"all"]];for(let[o,s]of i){if(!o||o==="none")continue;let a=t.states[o];if(!a||Y(a)||!(kt(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=L(o)==="light"?Ut(a):null;n.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return n}carText(t,e,n){let i=s=>_(t,s);if(n||e.away!==null){let s=e.away?` \xB7 ${e.away}`:"";return`${i("car_away")}${s}`}let o=[];return e.soc!==null&&o.push(`${j(t,e.soc,0)} %`),e.range!==null&&o.push(`${j(t,e.range,0)} ${e.rangeUnit}`),e.charging?o.push(e.chargingW!==null?`\u26A1 ${G(t,e.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):e.plugged&&o.push("\u{1F50C}"),e.locked!==null&&o.push(e.locked?"\u{1F512}":"\u{1F513}"),o.join(" \xB7 ")}ceilingAt(t,e,n){let o=t.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&K([e,n],l.points))?.ceiling_height||t.height,s=this.building;if(!s||!Rr(s).some(l=>zr(l,t.elevation+o)&&Hr(l,t.elevation)))return o;let a=Cr(s,e,n,t.elevation);return a===null?o:Math.max(.5,Math.min(o,a-t.elevation))}lampMarker(t,e,n,i){let o=i?t.states[i]:void 0,s=Mt(n.type),a=zi[n.type]??s?.light??"floor",l=e.rooms.some(w=>w.points.length>=3&&K([n.x,n.z],w.points)),c=a==="strip"&&!l?we(e,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?X(e,n):a==="table"?Un(e,n.x,n.z,n.h):a==="bollard"||a==="garden"?we(e,n.x,n.z):0,d=e.rooms.find(w=>w.points.length>=3&&K([n.x,n.z],w.points)),u=this.ceilingAt(e,n.x,n.z),h=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(a))&&n.mount_y==null,f=h?e.height-u:0,b=s&&h?Math.max(0,c-f):c,y=Mi.has(n.type)&&n.mount_y!=null?Math.min(e.height,n.mount_y+Ii(n.type,n.h)):Math.abs(f)>.01?u:void 0,v=y??e.height,p=s?s.mount==="ceiling"?Math.max(.5,b-.15):b+n.h+.2:{ceiling:v-.3,downlight:v-.25,spot:v-.35,panel:v-.25,pendant:Math.max(.6,v-n.h-.25),fan:Math.max(.6,v-n.h-.25),floor:b+n.h+.25,uplight:b+n.h+.25,table:b+n.h+.2,wall:b+n.h+.2,strip:n.upright?b+n.w+.15:Math.max(.3,b-.2),bollard:b+n.h+.25,garden:b+n.h+.25}[a];return{id:i??`lamp:${n.id}`,floorId:e.id,roomId:d?.id??null,x:n.x,z:n.z,y:p,icon:Te("light"),name:n.name||(i?D(t,i):J(t,n.type)),text:o?nt(t,o):"",active:o?kt(o):!1,unavailable:o?Y(o):!1,glow:o?Tr(Vi(Ut(o,n.color_entity&&n.color_entity!=="none"?t.states[n.color_entity]:void 0),n.only_color),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,colors:n.colors,materials:n.materials,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,fanSpeed:a==="fan"?Zn(n.fan&&n.fan!=="none"?t.states[n.fan]:void 0):void 0,size:[n.w,n.d,n.h],base:b,top:y,pickable:!!i,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?b:b+n.h*.85:void 0,effect:!!o&&o.state==="on"&&typeof o.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(o.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(t){if(!this.roomId)return!1;if(t.roomId)return t.roomId===this.roomId;let e=this.building?.floors.find(i=>i.id===t.floorId),n=e?vt(e).find(i=>i.id===this.roomId):void 0;return!!n&&K([t.x,t.z],n.points)}showPin(t){if(this.furnish&&!t.fromFurniture)return!0;if(t.show==="never"||this.markerMode==="none")return!1;if(t.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(t);if(t.lamp||t.model)return!1;let e=L(t.id);return e==="light"?!1:t.fromFurniture?(t.power??0)>=1||e==="media"&&t.active||!!t.energyDevice&&!!t.text:!0}openingTargets(){let t=new Map;for(let[e,n]of this.openingLinks??[]){if(n.lock&&!n.cover||qi(n.cover)){t.set(e,`opening:${e}`);continue}let i=n.cover??n.contact??n.tilt;i&&t.set(e,i)}return t}scheduleThumbs(t=600){clearTimeout(this.thumbTimer);let e=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||e<2){this._thumbs=[];return}let n=Math.max(t,this.thumbsAt+(this._low?8e3:4e3)-Date.now()),i=()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}if(this.viewer.busy()){this.thumbTimer=setTimeout(i,300);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}};this.thumbTimer=setTimeout(i,n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return x;let t=new Map(this.building.floors.map(o=>[o.id,o.name])),e=[...this._thumbs].sort((o,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===o.floorId)?.elevation??0)),n=this._thumbsCompact,i=()=>{this._thumbsCompact=!n,this.thumbsSaved=this._thumbsCompact?"1":"0";try{localStorage.setItem("home3d.thumbs_compact",this.thumbsSaved)}catch{}};return m`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${_(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${_(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${_(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${i}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${_(this.hass,"all_floors")}</span>
      </button>
      ${e.map(o=>m`<button class="fp3d-thumb" aria-pressed=${this.floorId===o.floorId} @click=${()=>this.fire("floor-tap",{floorId:o.floorId})}>
          ${n?x:m`<img src=${o.url} alt="" />`}
          <span>${t.get(o.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(t,e,n){let i=this.ro?null:ln(this.actionOwners.get(t),"hold");if(i)return this.runOwnAction(i,this.actionOwners.get(t),e,n);if(t.startsWith("item:"))return;if(t.startsWith("opening:"))return this.onOpeningTap(t.slice(8),e,n,!0);if(t.startsWith("gangs:")){let s=this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===t.slice(6)),a=s?Xe(s):[];a.length===1?this.onDeviceHold(a[0],e,n):this.onDeviceTap(t,e,n);return}if(this.ro){this.onDeviceTap(t,e,n);return}if(this.hass&&this.building)for(let s of this.building.floors)for(let a of s.furniture){if(a.type!=="parking"||!a.car)continue;let l=Me(this.hass,a);if([a.entity,a.car.device,...Object.values(l.entities)].filter(d=>!!d&&d!=="none").includes(t)){this._menu={entity:t,x:e,y:n,car:l};return}}let o=Ys(t);o?gt(this,o):this.onDeviceTap(t,e,n)}onDeviceSwipe(t,e,n,i,o){let s=this.hass?.states[t];if(this.ro)return!1;if(e==="start"){if(!s||Y(s)||this.confirmSet.has(t))return!1;let l=L(t);if(l==="light"&&Eo(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:t,kind:"light",start:c,value:c,x:i,y:o},!0}if(l==="cover"&&Ao(s)){let c=s.attributes.current_position;return this._swipe={entity:t,kind:"cover",start:c,value:c,x:i,y:o},!0}return!1}let a=this._swipe;if(!a||a.entity!==t)return!1;if(e==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let t=this._swipe;!t||!this.hass||(t.kind==="light"?t.value<=0?_t(this.hass,"light","turn_off",{entity_id:t.entity}):_t(this.hass,"light","turn_on",{entity_id:t.entity,brightness_pct:t.value}):_t(this.hass,"cover","set_cover_position",{entity_id:t.entity,position:t.value}))}goTo(t){if(this._find=null,t.kind==="room"){this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId});return}this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),setTimeout(()=>this.viewer?.focus(t.floorId,t.x,t.z,t.y,t.entity),120)}renderBinInfo(){let t=this._binInfo,e=this.hass,n=t&&this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===t.furnitureId);if(!t||!e||!n)return x;let i=$s(n,e,this.pickups),o=new Date;o.setHours(0,0,0,0);let s=d=>{let u=Math.round((d.getTime()-o.getTime())/864e5);return u===0?_(e,"bin_today"):u===1?_(e,"bin_tomorrow"):d.toLocaleDateString(e.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=n.name||_(e,`bin_kind_${n.bin_kind??"rest"}`),l=pn(n,e),c=d=>{d.stopPropagation(),typeof n.bin_out=="string"&&on(e,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return m`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${t.x}px;top:${t.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${i.length?i.map(d=>m`<b>${s(d.day)}${d.summary&&d.summary!==a?m` <small>· ${d.summary}</small>`:x}</b>`):m`<b>${_(e,"bin_none")}</b>`}
      ${Ms(n)&&!this.ro?m`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${c}>${l?_(e,"bin_out_done"):_(e,"bin_out_mark")}</button>`:l?m`<small>${_(e,"bin_out_done")}</small>`:x}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||this.panelOpen)return x;let t=()=>{this._hhFolded=!this._hhFolded,Nd("home3d.hhFolded",this._hhFolded)};return m`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${t}>🏠 ${_(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?x:this._household.map(e=>m`<button class="fp3d-hh-row ${e.hot?"fp3d-hh-hot":""}" ?disabled=${!e.entity} @click=${()=>e.entity&&(this.ro?this.showInfo(e.entity,0,0):gt(this,e.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${e.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${e.text}</span>
            </button>`)}
    </div>`}sceneList=null;sceneLabel="";renderRoomList(){let t=this.hass,e=this.building;if(!t||!e||this._walk)return x;let n=this.sceneList;(!n||n.states!==t.states||n.building!==e||n.floorId!==this.floorId||n.alerts!==this._alerts)&&(this.sceneList={states:t.states,building:e,floorId:this.floorId,alerts:this._alerts,list:qa(t,e,this._alerts,this.floorId)});let i=this.sceneList.list;return i.length?m`<nav class="fp3d-sr-rooms" aria-label=${_(t,"sr_rooms")}>
      ${i.map(o=>m`<section aria-label=${o.name}>
          <ul>
            ${o.rooms.map(s=>m`<li><button type="button" @click=${()=>this.fire("room-tap",{floorId:s.floorId,roomId:s.roomId})}>${ja(t,s)}</button></li>`)}
          </ul>
        </section>`)}
    </nav>`:x}renderClock(){let t=this.clock;if(!t||t==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),x;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let e=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),i=this.hass.config?.time_zone,o=s=>{try{return e.toLocaleString(n,i?{...s,timeZone:i}:s)}catch{return e.toLocaleString(n,s)}};return m`<div class="fp3d-clock fp3d-clock-${t}" aria-hidden="true"><b>${o({hour:"2-digit",minute:"2-digit"})}</b><span>${o({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let t=this.building;if(!this._alerts.length||!t)return x;let e=this._alerts.slice(0,3),n=this.mayEdit,i=o=>_(this.hass,o);return m`<div class="fp3d-alert-banner" role="alert">
      ${e.map(o=>{let s=ht(o),a=n&&this._dismissing===s;return m`<span class="fp3d-alert-item ${n?"fp3d-alert-dismissable":""}">
          <button class="fp3d-alert fp3d-alert-${o.kind}" title=${ze(this.hass,t,o)} @click=${()=>this.jumpTo(o)}>${ze(this.hass,t,o)}</button>
          ${n?m`<button class="fp3d-alert-x" title=${i("alert_dismiss")} aria-label=${i("alert_dismiss")} aria-expanded=${a?"true":"false"} @click=${()=>this._dismissing=a?null:s}>✕</button>`:x}
          ${a?m`<div class="fp3d-alert-menu" role="menu">
                <button role="menuitem" title=${i("alert_dismiss_now_hint")} @click=${()=>this.dismiss(o,!1)}>${i("alert_dismiss_now")}</button>
                ${mn(o.kind)?m`<button role="menuitem" title=${i("alert_dismiss_good_hint")} @click=${()=>this.dismiss(o,!0)}>${i("alert_dismiss_good")}</button>`:m`<small>${i("alert_dismiss_safety")}</small>`}
              </div>`:x}
        </span>`})}
      ${this._alerts.length>3?m`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:x}
    </div>`}renderScenes(){let t=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!t||!this.hass||this.ro)return x;let e=t.floors.flatMap(o=>vt(o)).find(o=>o.id===this.roomId),n=e?yt(this.hass,e.area_id).filter(o=>L(o)==="scene"||L(o)==="script").slice(0,6):[];if(!n.length)return x;let i=e?.area_id?this.hass.areas?.[e.area_id]?.name:void 0;return m`<div class="fp3d-scenes">
      ${n.map(o=>m`<button class="fp3d-chip" aria-pressed=${this._sceneFired===o} @click=${()=>this.runScene(o)}>${D(this.hass,o,i)}</button>`)}
    </div>`}async syncPets(){let t=this.building,e=this.viewer,n=t?.settings.pets?.on!==!1&&this.petsOn!==!1,i=n?t?.settings.pets?.list??[]:[],o=n&&!!t?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!e||!t||this.plan2d||!i.length&&!o){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==t&&(this.petsFor=t,this.pets.update(t,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a,l]=await Promise.all([zo(),_n(),hl()]);if(!this.viewer||this.plan2d||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:l.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(c,d)=>X(c,d),surface:(c,d,u)=>Un(c,d,u),closedDoors:()=>{let c=new Set,d=this.hass?.states??{};for(let u of this.building?.floors??[])for(let h of u.openings)h.type==="door"&&h.contact&&d[h.contact]?.state==="off"&&c.add(h.id);return c}})}catch(s){console.error("Home 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let t=this.building,e=!!t&&t.settings.easter_eggs!==!1&&t.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||this.plan2d||!e){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(t);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[n,i]=await Promise.all([zo(),_n()]);if(!this.viewer||this.plan2d||this.ghost||!this.building)return;this.ghost=n.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(n){console.error("Home 3D: the ghost failed to load",n)}finally{this.ghostLoading=!1}}}async startWalk(){let t=this.building,e=this.viewer;if(!t||!e||this._walk||this.plan2d)return;let n=t.floors.filter(u=>u.rooms.some(h=>h.points.length>=3)),o=(this.roomId?n.find(u=>u.rooms.some(h=>h.id===this.roomId)):void 0)??n.find(u=>u.id===this.floorId)??[...n].sort((u,h)=>Math.abs(u.elevation)-Math.abs(h.elevation))[0];if(!o)return;let s=await hl();this._walk={room:null,hint:!0},await this.updateComplete;let a=this.renderRoot.querySelector(".fp3d-walk-surface");if(!a)return;e.setFloor(o.id,!1),e.setWallMode("auto");let l=new s.FloorMap(t,o),c=this.roomId?o.rooms.find(u=>u.id===this.roomId):void 0,d;if(c){let u=l.freeNear(Et(c.points));d={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new s.WalkCamera(e,l,a,{start:d,onRoom:u=>{this.walkRoomPts=u?.points??null,this._walk&&(this._walk={...this._walk,room:u?.name??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let t=this.viewer;t&&(t.setWallMode(this.wallMode),t.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||this.plan2d||!this.building||!this.hass)return x;let t=o=>_(this.hass,o);if(!this._walk)return m`<button class="fp3d-walk-btn" title=${t("walk_start")} aria-label=${t("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span class="fp3d-walk-label">${t("walk_title")}</span>
      </button>`;let e=this._walk,n=null,i=(o,s)=>{if(!n)return;let a=44,l=o.clientX-n.cx,c=o.clientY-n.cy,d=Math.hypot(l,c);d>a&&([l,c]=[l/d*a,c/d*a]),s.firstElementChild.style.transform=`translate(${l}px, ${c}px)`,this.walker?.setStick({x:l/a,y:c/a})};return m`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${e.room??t("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${t("walk_end")}</button>
      </div>
      ${e.hint?m`<div class="fp3d-walk-hint">${t("walk_hint")}</div>`:x}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${o=>{let s=o.currentTarget,a=s.getBoundingClientRect();n={id:o.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(o.pointerId),i(o,s)}}
        @pointermove=${o=>i(o,o.currentTarget)}
        @pointerup=${o=>{n=null,o.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${o=>{n=null,o.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let t=this.building;if(!t||!this.hass)return x;if(this._find===null)return m`<button class="fp3d-find-btn" title=${_(this.hass,"find")} aria-label=${_(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let e=la(this.findIndex??=xn(this.hass,t),this._find);return m`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${_(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&e[0]&&this.goTo(e[0])}}
      />
      <button class="fp3d-find-close" aria-label=${_(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?m`<div class="fp3d-find-list">
            ${e.length?e.map(n=>m`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?br(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?m`<small>${n.where}</small>`:x}</span>
                  </button>`):m`<p>${_(this.hass,"find_none")}</p>`}
          </div>`:x}
    </div>`}renderCentral(){let t=this.building,e=this.hass;if(!t||!e||!this.central||this._find!==null||this.ro)return x;let n=(w,$)=>_(e,w,$),i=m`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this.disarm()}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let o=this.floorId?t.floors.find(w=>w.id===this.floorId):void 0,s=o?[o]:t.floors,a=s.flatMap(w=>to(e,w).lights),l=s.flatMap(w=>to(e,w).covers),c=a.filter(w=>e.states[w]?.state==="on").length,d=!o,u=(w,$,P,H)=>{if(H.length){if(d&&this._armed!==w){this.arm(w);return}this.disarm(),this.confirmForAll(H).then(R=>R&&_t(e,$,P,{entity_id:H}))}},h=(w,$,P,H,R)=>m`<button class="fp3d-btn ${this._armed===w?"fp3d-central-armed":""}" ?disabled=${!R.length} aria-pressed=${this._armed===w?"true":x} @click=${()=>u(w,P,H,R)}>
        ${this._armed===w?n("central_confirm"):n($)}
      </button>`,f=w=>{let $=this._armed;return!$||!w.includes($)?x:m`<div class="fp3d-central-ask"><span>${n(`central_again_${$}`)}</span><b aria-hidden="true">${this._armLeft}</b><i aria-hidden="true"></i></div>`},b=w=>this._armed&&w.includes(this._armed)?"fp3d-central-row-armed":"",y=(t.settings.favorites??[]).filter(w=>e.states[w]),v=this.buttons??t.settings.buttons??[],p=Zt()?Io(this.sceneHost(e,t)):[];return m`${i}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <div class="fp3d-central-top">
          <b>${o?o.name:n("central_house")}</b>
          ${this.noSettings?x:m`<button class="fp3d-btn fp3d-central-gear" title=${n("view_settings")} aria-label=${n("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${n("view_settings")}</button>`}
        </div>
        ${p.length?m`<div class="fp3d-central-favs">
              ${p.map(w=>m`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:w.id,floorId:null,roomId:null}}}><span aria-hidden="true">${w.icon}</span> ${w.title}</button>`)}
            </div>`:x}
        <div class="fp3d-sr-only" role="status" aria-live="assertive">${this._armed?n(`central_again_${this._armed}`):""}</div>
        <div class="fp3d-central-row ${b(["lights_on","lights_off"])}">
          <span>${n("central_lights")}${a.length?m` <small>${c}/${a.length}</small>`:x}</span>
          ${h("lights_on","central_on","light","turn_on",a.filter(w=>e.states[w]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",a.filter(w=>e.states[w]?.state==="on"))}
          ${f(["lights_on","lights_off"])}
        </div>
        ${l.length?m`<div class="fp3d-central-row ${b(["covers_open","covers_close"])}">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
              ${f(["covers_open","covers_close"])}
            </div>`:x}
        <b>${n("central_favorites")}</b>
        ${y.length?m`<div class="fp3d-central-favs">
              ${y.map(w=>{let[$,P]=Qi(w),H=e.states[w],R=$==="homeassistant"&&H?.state==="on";return m`<button
                  class="fp3d-chip"
                  aria-pressed=${R||this._sceneFired===w}
                  ?disabled=${Y(H)}
                  @click=${()=>{_t(e,$,P,{entity_id:w}),this._sceneFired=w,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${D(e,w)}
                </button>`})}
            </div>`:v.length?x:m`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${v.length?m`<div class="fp3d-central-favs">
              ${v.map(w=>m`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Ld(e,w)}
                  @click=${$=>{tr(e,$.currentTarget,w,P=>_(e,"service_failed",{error:P})),w.action!=="service"&&(this._central=!1)}}
                >
                  ${w.icon?m`<ha-icon .icon=${w.icon.startsWith("mdi:")?w.icon:`mdi:${w.icon}`}></ha-icon>`:x}${w.label}
                </button>`)}
            </div>`:x}
      </div>`}mediaCardUp(t,e){let n=t.states[e];if(!n||L(e)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(e)?.until??0)>Date.now()&&Y(n))return!0;let i=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(o=>typeof o=="string"&&!!o.trim());return!Y(n)&&(n.state==="playing"||n.state==="paused"&&i&&this.pausedRecently(n))}pausedRecently(t){let e=Date.parse(t.last_changed??"");if(!Number.isFinite(e))return!0;let n=e+Fd-Date.now();if(n<=0)return!1;let i=Date.now()+n+500;return(!this.pausedTimer||i<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=i,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},n+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return x;let t=_(this.hass,this.clean?"controls_show":"controls_hide");return m`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${t}
      aria-label=${t}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Pt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Pt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let t=this.hass;if(!this.voice||!t||this.ro||this._walk)return x;let e=this._voice,n=e?.phase==="wait"||e?.phase==="listen",i=_(t,"voice_button"),o=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return m`<button class="fp3d-mic ${e?.phase==="listen"?"fp3d-mic-on":""}" style="left:${o}px" title=${i} aria-label=${i} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${Pt`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${e?m`<div class="fp3d-mic-say ${e.phase==="error"?"fp3d-mic-err":""}" style="left:${o}px">${e.text}</div>`:x}`}sayVoice(t,e){this._voice={phase:t,text:e},clearTimeout(this.voiceTimer),(t==="done"||t==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,t==="error"?9e3:6e3))}async onAsk(t){let e=this.hass,n=this.building;if(!e||!n)return;let i=(this.screen??"").trim().toLowerCase();if(t.screen&&t.screen.trim().toLowerCase()!==i)return;if(t.show_rooms){(!t.admins_only||e.user?.is_admin)&&this.showRooms(n,t.show_rooms);return}let o=null;try{let s=await Ae();o=await this.handleSentence(e,n,s,t.text,t.speak),o===null&&this.sayVoice("error",_(e,"voice_none"))}catch(s){this.sayVoice("error",_(e,"voice_error",{msg:String(s?.message??s)}))}try{await pi(e,t.ask_id,o??"",o!==null)}catch{}}async onMic(){let t=this.hass,e=this.building;if(!t||!e||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let n=(o,s)=>this.sayVoice(o,s);n("wait","\u2026"),this.tourToken++;let i;try{let o=window.AudioContext??window.webkitAudioContext;i=new o,i.resume()}catch{i=void 0}try{let o=await Ae(),s=await o.listenOnce(t,()=>n("listen",_(t,"voice_listen")),Yt(),i);if(!s){n("error",_(t,"voice_none"));return}if(await this.handleSentence(t,e,o,s,!0)!==null)return;n("wait",`\u201C${s}\u201D \u2026`);let a=await o.converse(t,s);n("done",a?`\u201C${s}\u201D \u2013 ${a}`:`\u201C${s}\u201D`)}catch(o){let s=o,a=s?.message==="no_pipeline"?"voice_no_pipeline":s?.message==="silent"?"voice_silent":s?.name==="NotAllowedError"||s?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",a?_(t,a):_(t,"voice_error",{msg:String(s?.message??s?.name??o)}))}}async handleSentence(t,e,n,i,o){let s=(y,v)=>this.sayVoice(y,v),{devices:a,items:l}=this.spokenDevices(t,e,n.SYNONYMS),c=n.showTarget(i,e,a,y=>y.area_id?t.areas?.[y.area_id]?.name:null);if(c){let y=c.kind==="house"?_(t,"all_floors"):c.kind==="cameras"?_(t,"camera_wall_title"):c.name;if(s("done",`\u201C${i}\u201D \u2192 ${y}`),this.directing.touch(Date.now()),c.kind==="cameras")this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}));else if(c.kind==="device"){let v=l.get(c.id);c.camera&&c.entity?this.lookThrough(c.entity):v&&this.goTo(v)}else c.kind==="house"?this.fire("floor-tap",{floorId:null}):c.kind==="floor"?this.fire("floor-tap",{floorId:c.floorId}):(this.floorId!==c.floorId&&this.fire("floor-tap",{floorId:c.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),60));return _(t,"voice_showing",{name:y})}let d=this.spokenRacks(t,e),u=d.length?n.rackAnswer(i,d,(y,v)=>_(t,y,v)):null;if(u){s("done",`\u201C${i}\u201D \u2013 ${u.text}`),this.directing.touch(Date.now());let y=l.get(`furniture:${u.rackId}`);return y&&this.goTo(y),o&&n.speak(t,u.text,Yt()),u.text}let h=await t.callWS({type:"home_3d/locate/ask",text:i,language:t.language}).catch(()=>null);if(h)return s("done",`\u201C${i}\u201D \u2013 ${h.text}`),h.rooms.length&&(!h.admins_only||t.user?.is_admin)&&this.showRooms(e,h.rooms),o&&n.speak(t,h.text,Yt()),h.text;let f=this.moduleHost(t,e,n.SYNONYMS,y=>n.showTarget(y,e,a,v=>v.area_id?t.areas?.[v.area_id]?.name:null)),b=await da(i,f);if(b){s("done",b.text?`\u201C${i}\u201D \u2013 ${b.text}`:`\u201C${i}\u201D`),this.directing.touch(Date.now()),b.highlight?.length&&this.viewer?.flashDevices(b.highlight);let y=b.focus,v=b.spoken??b.text??"";if(b.tour?.length){let p=o&&b.speak!==!1?$=>n.speak(t,$,Yt()):null,w=b.spoken??b.text;return w&&p&&await p(w),this.runTour(b.tour,e,l,p),v}if(y?.roomId&&y.floorId)this.floorId!==y.floorId&&this.fire("floor-tap",{floorId:y.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:y.floorId,roomId:y.roomId}),60);else if(y?.floorId&&!y.entity&&!y.furnitureId)this.fire("floor-tap",{floorId:y.floorId});else if(y?.entity||y?.furnitureId){let p=l.get(y.entity??`furniture:${y.furnitureId}`);p&&this.goTo(p)}return b.text&&b.speak!==!1&&o&&n.speak(t,b.text,Yt()),v}return null}spokenDevices(t,e,n){let i=this.findIndex??=xn(t,e),o=new Map(e.floors.flatMap(u=>vt(u).map(h=>[h.id,h.name]))),s=[],a=[],l=new Map;for(let u of i)u.kind==="device"&&u.entity&&l.set(u.entity,u);let c=new Set;for(let u of e.floors){let h=vt(u);for(let f of u.furniture){if(Bd.has(f.type))continue;let b=this.furnitureLinks.get(f.id),y=b?.entity??b?.power??null,v=y??`furniture:${f.id}`,p=h.find(z=>z.points.length>=3&&K([f.x,f.z],z.points)),w=J(t,f.type),$=[f.name,...f.aliases??[],w,y?D(t,y):null,...n[f.type]??[]].filter(z=>!!z),P=f.name||(y?D(t,y):w);s.push({id:v,entity:y,name:P,names:$,room:p?.name??"",camera:!!y&&L(y)==="camera"});let H=(f.type==="plant"||ho(f.type))&&!!f.moisture&&f.moisture!=="none",R=wo(b?.entity?t.states[b.entity]:void 0,b?.power?wt(t.states[b.power]):null,typeof f.run_w=="number"&&f.run_w>0?f.run_w:10),B=typeof f.remaining=="string"&&f.remaining!=="none"&&!R?vo(t.states[f.remaining]):null;a.push({id:v,entity:y,name:P,names:$,room:p?.name??"",floorId:u.id,roomId:p?.id??null,power:b?.power??null,type:f.type,remaining:B,thirsty:H?bo(f,t):null}),y?c.add(y):l.set(v,{kind:"device",name:P,where:"",floorId:u.id,roomId:p?.id??null,entity:null,icon:null,x:f.x,z:f.z,y:Math.min(u.height-.3,Math.max(.5,f.h))})}}let d=new Map(e.floors.flatMap(u=>u.placements.map(h=>[h.entity_id,h])));for(let[u,h]of l){if(c.has(u)||u.startsWith("furniture:"))continue;let f=h.roomId&&o.get(h.roomId)||"",b=d.get(u),y=[b?.name,...b?.aliases??[],h.name].filter(v=>!!v);s.push({id:u,entity:u,name:h.name,names:y,room:f,camera:L(u)==="camera"}),a.push({id:u,entity:u,name:h.name,names:y,room:f,floorId:h.floorId,roomId:h.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(t,e){let n=[];for(let i of e.floors)for(let o of i.openings){let s=this.openingLinks?.get(o.id)?.lock;if(!s)continue;let a=this.openingSpot(e,o.id,!0);if(!a)continue;let l=t.states[s];n.push({id:s,floorId:i.id,roomId:o.room_id,x:a.x,z:a.z,y:Math.min(a.y+.35,1.5),icon:Te("lock"),name:D(t,s),text:l?nt(t,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||Y(l),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(t,e,n=!1){for(let i of t.floors){let o=i.openings.find(p=>p.id===e);if(!o)continue;let s=Er(o,i.rooms,i.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],c=a[(s.edge+1)%a.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,u=[(c[0]-l[0])/d,(c[1]-l[1])/d],f=Ri(a)>0?[-u[1],u[0]]:[u[1],-u[0]],b=o.offset;if(n){let p=u[0]*f[1]-u[1]*f[0]>0;b=o.offset-o.width/2+Ei(o,o.hinge==="left"===p)}let[y,v]=rn(s.room,s.edge,b);return{floorId:i.id,x:y+f[0]*.2,z:v+f[1]*.2,y:Math.max(.5,o.sill+o.height/2),theta:Math.atan2(f[0],f[1])}}return null}async showRooms(t,e){let n=e.map(l=>({roomId:l,floorId:t.floors.find(c=>c.rooms.some(d=>d.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!n.length)return;let i=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let o=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};o?.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(c=>this.tourTimer=setTimeout(c,l));for(let[l,c]of n.entries()){if(i!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await a(150)),i!==this.tourToken))break;this.roomId!==c.roomId&&this.fire("room-tap",{floorId:c.floorId,roomId:c.roomId}),this.directing.touch(Date.now()),l<n.length-1&&await a(4e3)}o?.removeEventListener("pointerdown",s)}async runTour(t,e,n,i){let o=++this.tourToken;clearTimeout(this.tourTimer);let s=t.map(d=>{if(d.openingId){let h=this.openingSpot(e,d.openingId);return h?{...h,entity:null,say:d.say,inside:!0}:null}let u=n.get(d.entity??`furniture:${d.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a?.addEventListener("pointerdown",l,{once:!0});let c=d=>new Promise(u=>this.tourTimer=setTimeout(u,d));for(let d of s){if(o!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await c(150)),o!==this.tourToken)||(this.viewer?.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await c(900),o!==this.tourToken))break;let u=d.say&&i?await i(d.say):!1;if(o!==this.tourToken)break;await c(u?1200:2600)}a?.removeEventListener("pointerdown",l)}spokenOpenings(t,e){let n=[],i=a=>_(t,a);for(let a of e.floors){let l=new Map(vt(a).map(c=>[c.id,c.name]));for(let c of a.openings){let d=this.openingLinks?.get(c.id);if(!d)continue;let u=c.type==="garage"?"garage":c.type==="door"?"door":"window",h=ae(t,d,c.type),f=h.open>.02||h.open2>.02||c.type==="garage"&&(h.cover??0)>.02,b=!f&&(h.tilt>.02||h.tilt2>.02);for(let y of[d.contact,d.contact2,d.cover,d.tilt,d.tilt2])y&&y!=="none"&&n.push({id:c.id,entity:y,kind:u,name:i(`opening_${c.type}`),room:l.get(c.room_id)??"",floorId:a.id,roomId:c.room_id,open:f,tilted:b})}}let o=e.settings.roof?.windows??[],s=o.length?new Map(Fr(e).map(a=>[a.key,a])):null;for(let a of o){let l=fl(t,a),c=l.open>.02,d=!c&&l.tilt>.02,u=[a.window,a.contact,a.cover,a.tilt].filter(v=>!!v&&v!=="none"),h=u.map(v=>Fi(t,v)).filter(v=>!!v).map(v=>e.floors.flatMap(p=>p.rooms.filter(w=>w.area_id===v).map(w=>({floor:p,room:w})))).find(v=>v.length===1)?.[0],f=h?null:Or(e,s?.get(a.face),a),b=h?.floor??f?.floor??e.floors[e.floors.length-1],y=h?.room??(f?b?.rooms.find(v=>v.id===f.roomId):void 0);for(let v of u)n.push({id:a.id,entity:v,kind:"roof_window",name:a.name||i("roof_window"),room:y?.name??"",floorId:b?.id??"",roomId:y?.id??null,open:c,tilted:d})}return n}sceneHost(t,e){return this.moduleHost(t,e,{},()=>null)}moduleHost(t,e,n,i){let o=null,s=()=>o??=this.spokenDevices(t,e,n).spoken,a={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>t.language||"en",devices:()=>s(),findDevice:l=>{let c=i(l);return c?.kind==="device"&&c.id?s().find(d=>d.id===c.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>this.mayEdit,updateBuilding:l=>this.changePlan(l),callService:(l,c,d)=>(this.hass&&_t(this.hass,l,c,d??{}),Promise.resolve()),newId:l=>Ai(l),waterLevel:(l,c)=>{let d=this.building?.floors.find(h=>h.id===l),u=d?.outdoor.find(h=>h.id===c);return!d||!u||u.type!=="pool"?null:{y:ke(d,u),floorY:xe(d,u)}},groundAt:(l,c,d)=>{let u=this.building?.floors.find(h=>h.id===l);return u?we(u,c,d):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:Ko,openings:()=>this.spokenOpenings(t,e),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:s().find(c=>c.entity===l.id||c.power===l.powerEntity)?.name??D(t,l.id),watts:l.power})).sort((l,c)=>c.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(t,e),cars:()=>this.spokenCars(t,e),pools:()=>ma(a),weather:()=>Jt(t,this.weatherEntityId??e.settings.weather_entity),listen:async l=>{try{return(await(await Ae()).listenOnce(t,l,Yt())).trim()||null}catch{return null}},notify:l=>this.showNote(l),occupied:()=>this.occupiedRooms(t,e),speakers:()=>this.planSpeakers(t,e)};return a}showNote(t){this._note=t,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(t,e){let n=new Map;for(let i of this.lastPersons)i.roomId&&n.set(i.roomId,i);for(let i of e.floors)for(let o of i.rooms){if(n.has(o.id)||!o.area_id)continue;yt(t,o.area_id).some(a=>{let l=t.states[a];return a.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&n.set(o.id,{floorId:i.id,roomId:o.id})}return[...n.values()]}planSpeakers(t,e){let n=[],i=new Set;for(let o of e.floors){let s=(a,l)=>o.rooms.find(c=>c.points.length>=3&&K([a,l],c.points))?.id??null;for(let a of o.placements)!a.entity_id.startsWith("media_player.")||i.has(a.entity_id)||!t.states[a.entity_id]||(i.add(a.entity_id),n.push({entity:a.entity_id,name:D(t,a.entity_id),floorId:o.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of o.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||i.has(l)||!t.states[l]||(i.add(l),n.push({entity:l,name:D(t,l),floorId:o.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:X(o,a)+a.h}))}}return n}roomSheets(t){let e=this.hass,n=this.building;if(!e||!n||this.ro||!Zt())return[];let i=n.floors.find(o=>o.rooms.some(s=>s.id===t));return i?Mo(this.sceneHost(e,n),{floorId:i.id,roomId:t}).map(o=>({id:o.id,icon:o.icon,title:o.title})):[]}openRoomSheet(t,e){let n=this.building?.floors.find(i=>i.rooms.some(o=>o.id===t));this._sheet={id:e,floorId:n?.id??null,roomId:t}}currentSheet(t,e){let n=this._sheet;if(!n)return null;let i=this.sceneHost(t,e);return(n.roomId&&n.floorId?Mo(i,{floorId:n.floorId,roomId:n.roomId}):Io(i)).find(s=>s.id===n.id)??null}renderSheet(){let t=this.hass,e=this.building;if(!t||!e||!this._sheet)return x;let n=this.currentSheet(t,e);if(!n)return x;let i=d=>_(t,d),o=this._sheet.roomId?e.floors.flatMap(d=>d.rooms).find(d=>d.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async d=>{s();try{await d()}catch(u){console.warn("Home 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&n.input&&a(()=>n.input.onSubmit(u))},c=async()=>{let d=this.renderRoot.querySelector(".fp3d-sheet-input");if(!d)return;d.placeholder=i("sheet_listening");let h=await this.sceneHost(t,e).listen?.(()=>d.placeholder=i("sheet_listening"));d.placeholder=n.input?.placeholder??"",h?d.value=h:this.showNote(i("sheet_mic_failed"))};return m`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${n.title}>
        <header>
          <b><span aria-hidden="true">${n.icon}</span> ${n.title}${o?` \xB7 ${o.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${i("close")} @click=${s}>✕</button>
        </header>
        ${n.choice?m`<div class="fp3d-sheet-choice">
              ${n.choice.options.map(d=>m`<button class="fp3d-chip" aria-pressed=${d.id===n.choice.value} @click=${()=>{n.choice.set(d.id),this.requestUpdate()}}>${d.label}</button>`)}
            </div>`:x}
        ${n.chips?.length?m`<div class="fp3d-sheet-chips">${n.chips.map(d=>m`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>d.onTap())}}>${d.label}</button>`)}</div>`:x}
        ${n.input?m`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${n.input.placeholder} @keydown=${d=>d.key==="Enter"&&l()} />
              ${n.input.mic?m`<button class="fp3d-btn fp3d-sheet-mic" title=${i("sheet_mic")} aria-label=${i("sheet_mic")} @click=${()=>{c()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:x}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${n.input.button}</button>
            </div>`:x}
        ${n.lines?.length?m`<div class="fp3d-sheet-lines">${n.lines.map(d=>m`<p>${d}</p>`)}</div>`:x}
        ${this.mayEdit&&To().length?m`<button class="fp3d-sheet-gear" @click=${()=>{s(),this._settingsOpen=!0,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-set-module")?.scrollIntoView({block:"start"}))}}>⚙ ${i("view_settings")}</button>`:x}
      </div>`}viewPlan(t){let e=new Date(this.replay?.t??Date.now()),n=this.hass?zn(t,this.hass.states,e).join("|"):"";return(this.shownPlan?.from!==t||this.shownPlan.hidden!==n)&&(this.shownPlan={from:t,hidden:n,plan:n&&this.hass?Ya(t,this.hass.states,e):t}),this.shownPlan.plan}get mayEdit(){return(this.canEdit??!!this.hass?.user?.is_admin)&&!this.ro}setPlanSettings(t){this.changePlan(e=>Object.assign(e.settings,t))}changePlan(t){let e=this.building;if(!e||!this.hass||!this.mayEdit||!this.dispatchEvent(new CustomEvent("plan-change",{detail:{change:t},cancelable:!0})))return;let n=structuredClone(e);t(n),this.building=n,ci(this.hass,n,fi(n.recipes),this.home).catch(i=>this.serviceFailed("home_3d/building/save",i))}openSettings(){this._settingsOpen=!0}showRackView(t,e,n=null){this._rackView={id:t,draw:e,slot:n}}closeRackView(){this._rackView=null}rackViewItem(){let t=this._rackView;return t?this.building?.floors.flatMap(e=>e.furniture).find(e=>e.id===t.id):void 0}rackViewOf(){let t=this._rackView,e=this.rackViewItem();if(!t||!e)return null;let n=this.hass?.language??"en",i=e.name||J(this.hass,e.type),o=new Map((e.rack?.slots??[]).map(a=>[a.id,this.hass?te(this.hass,a):null])),s=JSON.stringify([t.id,i,n,[...o]]);if(this.rackViewMemo?.key!==s||this.rackViewMemo.draw!==t.draw){let a=t.draw((l,c)=>l.name||wi(c,n),i,l=>o.get(l.id)??null);this.rackViewMemo={key:s,draw:t.draw,view:{...a,name:i}}}return this.rackViewMemo.view}tapRackDrawing(t){this._rackView&&t&&(this._rackView={...this._rackView,slot:t})}openRackEntity(t){gt(this,t)}renderRackDetail(t,e){let n=e.rack?.slots.find(l=>l.id===this._rackView?.slot);if(!n)return x;let i=l=>_(t,l),o=te(t,n),s=pe(n),a=n.name||J(t,n.type);return m`<section class="fp3d-rack-detail">
      <b>${o?m`<i class="fp3d-rack-led" style="background:${$n[o]}"></i>`:x}${a}${o?m` · ${i(`rack_status_${o}`)}`:x}</b>
      ${s.length?s.map(l=>m`<button class="fp3d-rack-entity" @click=${()=>this.openRackEntity(l)}><span>${D(t,l)}</span><span>${nt(t,t.states[l])}</span></button>`):m`<p>${i("rack_unlinked")}</p>`}
    </section>`}renderRackView(){let t=this.hass,e=t?this.rackViewOf():null,n=this.rackViewItem();if(!t||!e||!n)return x;let i=()=>this.closeRackView(),o=s=>this.tapRackDrawing(s.target?.closest?.("[data-slot]")?.getAttribute("data-slot")??null);return m`<div class="fp3d-sheet-backdrop" @click=${i}></div>
      <div class="fp3d-sheet fp3d-rack-view" role="dialog" aria-label=${e.name}>
        <header>
          <b>▤ ${e.name}</b>
          <button class="fp3d-sheet-x" aria-label=${_(t,"close")} @click=${i}>✕</button>
        </header>
        <p class="fp3d-rack-view-used">${_(t,"rack_front_view")} · ${_(t,"rack_used",{used:e.used,u:e.u})}</p>
        ${this.renderRackDetail(t,n)}
        <div class="fp3d-rack-view-box" @click=${o}>${as(e.svg)}</div>
      </div>`}renderSettings(){let t=this.hass,e=this.building;if(!t||!e||!this._settingsOpen)return x;let n=d=>_(t,d),i=this.mayEdit,o=e.settings,s=(d,u,h,f)=>m`<label class="fp3d-set-check" title=${f?n(f):""}
        ><input type="checkbox" .checked=${u} ?disabled=${!i} @change=${b=>this.setPlanSettings(h(b.target.checked))} /> ${n(d)}</label
      >`,a=this.sceneHost(t,e),l=se(),c=To().map(d=>{let u=fa(d,a);if(!u.length||u[0].kind==="heading")return u;let h=l.find(b=>b.id===d);return[{kind:"heading",text:h?xi(h,t.language??"en").replace(/^(Modul|Module):\s*/i,""):d},...u]}).filter(d=>d.length);return m`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${n("view_settings")}>
        <header>
          <b>⚙ ${n("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${n("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${i?x:m`<p class="fp3d-set-note">${n("view_settings_admin")}</p>`}
        <h4>${n("view_settings_look")}</h4>
        ${s("sun_shadow",o.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${s("window_glow",o.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${s("sun_patches",o.sun_patches!==!1,d=>({sun_patches:d}))}
        <h4>${n("view_settings_alerts")}</h4>
        ${s("rain_warning",o.rain_warning!==!1,d=>({rain_warning:d}))}
        ${s("alert_unavailable",!!o.alert_unavailable,d=>({alert_unavailable:d}))}
        ${s("alert_names",o.alert_names!==!1,d=>({alert_names:d}))}
        ${js(t,o.alert_ignored,!i,d=>this.setPlanSettings({alert_ignored:qs(o.alert_ignored,d)}))}
        <h4 title=${n("effects_hint")}>${n("effects")}</h4>
        ${ps(t,o.effects,!i,d=>this.setPlanSettings({effects:d}))}
        ${c.map(d=>m`<div class="fp3d-set-module">${d.map(u=>this.renderViewField(t,u,i))}</div>`)}
        <p class="fp3d-set-note">${n("view_settings_more")}</p>
        <button
          class="fp3d-btn"
          @click=${()=>{this._settingsOpen=!1;let d=new CustomEvent("open-settings",{detail:{section:null,id:null},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(d)&&(history.pushState(null,"","/home_3d#settings"),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}})))}}
        >
          ⚙ ${n("all_settings")} ›
        </button>
      </div>`}renderViewField(t,e,n){switch(e.kind){case"heading":return m`<h4>${e.text}</h4>`;case"text":return m`<p class="fp3d-set-note">${e.text}</p>`;case"check":return m`<label class="fp3d-set-check"><input type="checkbox" .checked=${e.value} ?disabled=${!n} @change=${i=>e.set(i.target.checked)} /> ${e.label}</label>`;case"select":return m`<label class="fp3d-set-field"
          >${e.label}
          <select ?disabled=${!n} @change=${i=>e.set(i.target.value)}>
            ${e.options.map(i=>m`<option value=${i.id} ?selected=${i.id===e.value}>${i.label}</option>`)}
          </select></label
        >`;case"entity":{let i=Object.keys(t.states).filter(o=>e.filter(o)).sort((o,s)=>D(t,o).localeCompare(D(t,s)));return m`<label class="fp3d-set-field"
          >${e.label}
          <select ?disabled=${!n} @change=${o=>{let s=o.target.value;e.set(s===""?null:s)}}>
            <option value="" ?selected=${!e.value}>${e.auto?_(t,"entity_auto",{name:D(t,e.auto)}):"\u2014"}</option>
            ${i.map(o=>m`<option value=${o} ?selected=${o===e.value}>${D(t,o)}</option>`)}
          </select></label
        >`}case"lines":return ls(e.value,!n,{label:e.label,placeholder:e.placeholder??_(t,"lines_new"),add:_(t,"lines_add"),remove:_(t,"delete")},i=>e.set(i));case"button":return m`<button class="fp3d-btn ${e.primary?"fp3d-primary":""}" ?disabled=${!n} title=${e.title??""} @click=${()=>e.onTap()}>${e.label}</button>`}}renderNote(){return this._note?m`<div class="fp3d-note" role="status">${this._note}</div>`:x}spokenAlerts(t,e){let n=new Map(e.floors.flatMap(i=>vt(i).map(o=>[o.id,o.name])));return this._alerts.map(i=>({kind:i.kind,entity:i.entity,name:D(t,i.entity),...i.text?{text:i.text}:{},room:i.roomId?n.get(i.roomId)??null:null,floorId:i.floorId,roomId:i.roomId}))}spokenCars(t,e){let n=[];for(let i of e.floors)for(let o of i.furniture){if(o.type!=="parking"||!o.car)continue;let s=ce(t,o),a=Me(t,o),l=a.entities.tracker?t.states[a.entities.tracker]:void 0,c=!!s&&!(l&&!vn.has(l.state.toLowerCase()));n.push({name:o.name||(s?J(t,s):J(t,"car")),spot:o.id,floorId:i.id,present:c,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return n}renderSwipe(){let t=this._swipe;if(!t||!this.hass)return x;let e=t.kind==="light"&&t.value<=0;return m`<div class="fp3d-swipe" style="left:${t.x}px;top:${t.y}px">
      <span>${D(this.hass,t.entity)}</span>
      <b>${e?_(this.hass,"swipe_off"):`${t.value} %`}</b>
      <i><em style="height:${t.value}%"></em></i>
    </div>`}lookThrough(t){let e=this.viewer,n=this.building;if(!e||!n||this.ro||this.plan2d)return;let i=n.floors.find(s=>s.placements.some(a=>a.entity_id===t))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:t}:this._through={entity:t,back:e.getView()},this.watchCameras(!0);let o=this.floorId===i?0:300;o&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===t&&!this.viewer?.lookThrough(t)&&(this._through=null)},o)}endThrough(){let t=this._through;t&&(this._through=null,this.live?.id===t.entity&&(this.live=null),this.viewer?.flyTo(t.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return x;let t=this.hass,e=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))},n=[...new Set(this.building.floors.flatMap(d=>d.placements.map(u=>u.entity_id)).filter(d=>L(d)==="camera"))];this.watchCameras(!0);let i=d=>{let u=t.states[d],h=u?.attributes.entity_picture;return h&&u&&!Y(u)?h.startsWith("data:")?h:`${h}${h.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},o=d=>{let u=t.states[d];return m`${D(t,d)}${u?.state==="recording"?m` <b>● ${_(t,"state_recording")}</b>`:x}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let d=i(s),u=this.liveFor(s),h=()=>{this.throughWall=!0,e(),this.lookThrough(s)};return m`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${_(t,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${o(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${h}>${_(t,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${e}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(d?m`<img src=${d} alt="" />`:m`<div class="fp3d-wall-none">${_(t,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:c}=Ka(n.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return m`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${_(t,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${_(t,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${e}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${c}px); grid-auto-rows: ${Math.round(c*9/16)}px">
        ${n.map(d=>{let u=i(d),h=Wt(t,d).some(f=>t.states[f]?.state==="on");return m`<button class="fp3d-wall-cam ${h?"fp3d-wall-seen":""}" title=${_(t,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${u?m`<img src=${u} alt="" />`:m`<div class="fp3d-wall-none">${_(t,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${o(d)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(t){if(this.live?.id!==t){let e={id:t,el:null,failed:!1};this.live=e;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(i=>{if(this.live!==e)return;let o=i.createCardElement({type:"picture-entity",entity:t,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});o.hass=this.hass,e.el=o,this.requestUpdate()}).catch(()=>{e.failed=!0,this.requestUpdate()}):e.failed=!0}return this.live.el}renderThrough(){let t=this._through;if(!t||!this.hass)return x;let e=this.hass.states[t.entity],n=e?.attributes.entity_picture,i=n&&!Y(e)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,o=this.building?.settings.director?.live?this.liveFor(t.entity):null;return m`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${o?m`<div class="fp3d-through-img fp3d-through-live">${o}</div>`:i?m`<img class="fp3d-through-img" src=${i} alt="" />`:x}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${D(this.hass,t.entity)}</span>
        <span class="fp3d-still">${o?"\u25CF Live":_(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${_(this.hass,"through_blend")}
          @input=${s=>this._blend=Number(s.target.value)/100}
        />
        <button class="fp3d-chip" title=${_(this.hass,"through_full_hint")} @click=${()=>this.throughFull(t.entity)}>⛶ ${_(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${_(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(t){let e=this.renderRoot.querySelector(".fp3d-through-img");e&&typeof e.requestFullscreen=="function"?e.requestFullscreen().catch(()=>gt(this,t)):gt(this,t)}renderMenu(){let t=this._menu;if(!t||!this.hass||this.ro)return x;let e=this.renderRoot.querySelector(".fp3d-stage"),n=e?.clientWidth??800,i=e?.clientHeight??600,o=Math.max(8,Math.min(n-240,t.x-116)),s=Math.max(8,Math.min(i-360,t.y-170));return m`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${o}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.rawHass}
        .entity=${t.entity}
        .car=${t.car??null}
        ?doorLock=${!!t.doorLock}
        .presets=${this.building?.settings.media_presets??[]}
        ?confirmSwitch=${this.confirmSet.has(t.entity)}
        ?noLook=${this.plan2d}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(t){let e=[];for(let n of this.scene){if(n.kind!=="marker")continue;let i=t.floors.find(d=>d.id===n.floorId),o=n.furnitureId?i?.furniture.find(d=>d.id===n.furnitureId):void 0;if(!i||!o&&!n.at)continue;let[s,a]=o?[o.x,o.z]:n.at,l=wa(n.path),c=ya(n.emoji);e.push({id:`module:${n.id}`,floorId:i.id,roomId:i.rooms.find(d=>d.points.length>=3&&K([s,a],d.points))?.id??null,x:s,z:a,y:n.y??(o?X(i,o)+o.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:n.name,text:n.text??"",active:!!n.active&&!this.dimmed,unavailable:!1,glow:n.color&&n.active&&!this.dimmed?{color:n.color,level:1}:null,pin:!0,full:!0,...o?{furnitureId:o.id}:{}})}return e}openModuleCard(t){let e=this.scene.find(o=>o.kind==="marker"&&o.id===t);if(!e)return;if(e.sheet){this.openRoomSheet(e.sheet.roomId,e.sheet.id);return}e.card&&(this.mediaFolded.delete(e.card),this.cardPing=e.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=this.building?.floors.find(o=>o.id===e.floorId),i=n?.furniture.find(o=>o.id===e.furnitureId);n&&i&&this.viewer?.focus(n.id,i.x,i.z,X(n,i)+i.h*.6,`module:${e.id}`)}onDeviceTap(t,e=0,n=0){let i=this.ro?void 0:this.actionOwners.get(t);if(!i)return this.defaultTap(t,e,n);let o=ln(i,"double_tap");this.taps.tap(t,!!o,()=>{let s=ln(i,"tap");s?this.runOwnAction(s,i,e,n):this.defaultTap(t,e,n)},()=>o&&this.runOwnAction(o,i,e,n))}runOwnAction(t,e,n,i){let o=this.hass;o&&cs(t,e.entity,{callService:(s,a,l)=>(_t(o,s,a,l),Promise.resolve()),moreInfo:s=>gt(this,s),camera:s=>this._menu={entity:s,x:n,y:i},navigate:s=>{history.pushState(null,"",s),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))},openUrl:s=>{window.open(s,"_blank","noopener,noreferrer")},confirm:s=>this.ask(s??_(o,"action_confirm_default",{name:e.entity?D(o,e.entity):_(o,"action_this_item")}))}).catch(s=>this.showNote(_(o,"action_failed",{error:s instanceof Error?s.message:String(s)})))}ask(t){return tn(t,{ok:_(this.hass,"action_confirm_ok"),cancel:_(this.hass,"cancel")})}async confirmFor(t){return!this.confirmSet.has(t)||await this.ask(_(this.hass,"confirm_switch",{name:D(this.hass,t)}))}arm(t){clearTimeout(this.armTimer);let e=Date.now()+3500;this._armed=t;let n=()=>{let i=e-Date.now();if(i<=0)return this.disarm();this._armLeft=Math.ceil(i/1e3),this.armTimer=setTimeout(n,i-(this._armLeft-1)*1e3+5)};n()}disarm(){clearTimeout(this.armTimer),this._armed=null,this._armLeft=0}confirmForAll(t){return nr(t,this.confirmSet,e=>D(this.hass,e),e=>this.ask(_(this.hass,"confirm_switch",{name:e})))}defaultTap(t,e=0,n=0){if(t.startsWith("item:")||t.startsWith("trail:")||t.startsWith("lamp:"))return;if(t.startsWith("module:"))return this.openModuleCard(t.slice(7));if(t.startsWith("opening:"))return this.onOpeningTap(t.slice(8),e,n,!1);if(t.startsWith("gangs:")){let s=t.slice(6),a=this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===s);if(!a)return;let l=Xe(a);if(l.length===1)return this.onDeviceTap(l[0],e,n);if(l.length>1){this._gangMenu={furnitureId:s,x:e,y:n};return}let c=Je(a).find(d=>d.power&&d.power!=="none")?.power;c&&(this.ro?this.showInfo(c,e,n):gt(this,c));return}if(t.startsWith("hh:")){let[s,a]=t.slice(3).split("#");this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===a&&c.type==="waste_bin")?(this._binInfo={furnitureId:a,x:e,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(s,e,n):gt(this,s);return}if(this.ro){let s=this.building,a=s?s.energy.grid??Pe(s,c=>this.furnitureLinks?.get(c.id)?.power??null).grid:null,l=t==="grid"?a:t.startsWith("detect:")?t.slice(7):t;l&&this.showInfo(l,e,n);return}if(t==="grid"){let s=this.building,a=s?s.energy.grid??Pe(s,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null;a&&gt(this,a);return}if(t.startsWith("detect:")){gt(this,t.slice(7));return}let i=this.printerCams.get(t);if(i){this._menu={entity:i,x:e,y:n};return}let o=L(t);if(o==="cover"||o==="camera"){this._menu={entity:t,x:e,y:n};return}o&&Hi.has(o)?this.confirmFor(t).then(s=>s&&on(this.hass,t)):gt(this,t)}onOpeningTap(t,e,n,i){let o=this.openingLinks?.get(t);if(!o||!this.hass)return;if(o.lock&&!o.cover){this.ro?this.showInfo(o.lock,e,n):this._menu={entity:o.lock,x:e,y:n,doorLock:!0};return}let s=o.cover;if(!s)return;if(this.ro){this.showInfo(o.contact??s,e,n);return}if(i){gt(this,s);return}let a=this.hass.states[s];if(!a||Y(a)){gt(this,s);return}let[l]=s.split(".");this.confirmFor(s).then(c=>c&&_t(this.hass,l,l==="switch"?"turn_on":"press",{entity_id:s}))}effectiveTheme(){return ao(this.theme,this.hass)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("home3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("home3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let t=this._energy;if(!t||this.roomId||!this.showEnergy)return x;let e=i=>_(this.hass,i),n=[];if(t.consumption!==null&&n.push({cls:"total",label:e("energy_consumption"),value:G(this.hass,t.consumption)}),t.grid!==null){let i=t.grid<0;n.push({cls:i?"export":"grid",label:e(i?"energy_grid_export":"energy_grid_import"),value:G(this.hass,Math.abs(t.grid))})}if(t.solar!==null&&n.push({cls:"solar",label:e("energy_solar"),value:G(this.hass,t.solar)}),t.battery!==null||t.soc!==null){let i=[t.battery!==null?G(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:e("energy_battery"),value:i.join(" \xB7 ")})}return t.tariff&&n.push({cls:"tariff",label:e("energy_tariff"),value:`${j(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),m`<div class="fp3d-energy" aria-live="off">
      ${this._cheap?m`<div class="fp3d-energy-item fp3d-energy-cheap" role="status"><span>${e("cheap_rate")}</span><b>${e("cheap_rate_now")}</b></div>`:x}
      ${this._holoOn?x:n.map(i=>m`<button type="button" class="fp3d-energy-item fp3d-energy-tile fp3d-energy-${i.cls}${this._bigTile===i.cls?" fp3d-energy-big":""}" aria-pressed=${this._bigTile===i.cls?"true":"false"} @click=${()=>this.toggleEnergyTile(i.cls)}>
                <span>${i.label}</span><b>${i.value}</b>
              </button>`)}
      ${this.flows!==null?x:m`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${e("flows_hint")} (${e(this._flows?"flow_on":"flow_off")})`} aria-label=${e("flows")} @click=${()=>this.toggleFlows()}>
        <span>${e("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?x:m`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${e("holos_hint")} aria-label=${e("holos")} @click=${()=>this.toggleHolos()}>
        <span>${e("holos")}</span><b>◫</b>
      </button>`}
    </div>`}toggleEnergyTile(t){this._bigTile=this._bigTile===t?null:t}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return x;let t=gn[this.heatMode],e=this.heatMode==="temperature",n=e?At(this.hass,t.stops[0][0]):t.stops[0][0],i=e?At(this.hass,t.stops[t.stops.length-1][0]):t.stops[t.stops.length-1][0],o=e?Dt(this.hass):t.unit,s=a=>_(this.hass,a);return m`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Gs(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${j(this.hass,n,0)} ${o}</span><span>${j(this.hass,i,0)} ${o}</span></span>
      ${this.heatValues.size?x:m`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(t){let e=t.config?.latitude,n=t.config?.longitude;if(typeof e!="number"||typeof n!="number")return null;let i=`${new Date().toDateString()},${e},${n}`;return this.sunPathKey!==i&&(this.sunPathKey=i,this.sunPathCache=Qa(Date.now(),e,n)),this.sunPathCache}skyColor(){if(this.effectiveTheme()==="realistic"&&this._realSky)return this._realSky.horizon;let t=Ee[this.effectiveTheme()]??Ee.neon,e=this._sky;return t.night[0].map((n,i)=>Math.round(n+(t.day[0][i]-n)*e))}watchLightning(t){if(!t){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let e=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),e()},5e3+Math.random()*9e3)};e()}render(){let t=this._sky,e=(c,d)=>`rgb(${c.map((u,h)=>Math.round(u+(d[h]-u)*t)).join(",")})`,n=Ee[this.effectiveTheme()]??Ee.neon,i=this.effectiveTheme()==="realistic"?this._realSky:null,o=c=>`rgb(${c.join(",")})`,s=Za(this.building?.settings.backdrop)??(i?`linear-gradient(180deg, ${o(i.top)} 0%, ${o(i.horizon)} 62%, ${o(i.ground)} 100%)`:null),l=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${e(n.night[0],n.day[0])};--fp3d-ground:${e(n.night[1],n.day[1])}${s?`;background:${s}`:""}`;return m`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${l}
    >
      ${this._error?m`<p class="fp3d-error">${this._error}</p>`:x} ${this.clean?x:this.renderEnergy()} ${this.renderHologram()} ${this.clean?x:this.renderWires()} ${this.clean?x:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?x:m`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?x:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderSettings()} ${this.renderRackView()} ${this.renderNote()}
      ${this.renderMenu()} ${this.renderEye()} ${this.renderRoomList()}
      ${this.renderMic()}
      ${this.pivotMark&&!this._walk?m`<span class="fp3d-pivot" aria-hidden="true"></span>`:x}
      ${this._micProbe&&this.hass?m`<fp3d-mic-probe .hass=${this.rawHass} .building=${this.building} @close=${()=>(this._micProbe=!1,ts())}></fp3d-mic-probe>`:x}
      ${this.showStats&&this._stats?m`<span class="fp3d-stats"
            ><b>${this._stats.fps?_(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):_(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?m`(${this._stats.busy.map(c=>_(this.hass,`stats_busy_${c}`)).join(", ")})`:x} ·
            ${_(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${_(this.hass,this._stats.low?"stats_low":"stats_full",{r:j(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${j(this.hass,this.syncMs,1)} ms`:""}</span
          >`:x}
    </div>`}static styles=[en,lr,Ke`
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
      .fp3d-canvas:focus-visible {
        outline: 2px solid var(--fp3d-accent, #37e0ff);
        outline-offset: -3px;
      }
      /* the rooms as text (#195): hidden until the keyboard reaches them, then a small panel at the top left */
      .fp3d-sr-rooms {
        position: absolute;
        left: 12px;
        top: 12px;
        z-index: 7;
        max-height: calc(100% - 24px);
        max-width: min(420px, calc(100% - 24px));
        overflow: auto;
        padding: 6px;
        border-radius: 10px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text, #e6f0ff);
      }
      .fp3d-sr-rooms:not(:focus-within) {
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
      }
      .fp3d-sr-rooms ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .fp3d-sr-rooms button {
        display: block;
        width: 100%;
        min-height: 36px;
        padding: 4px 10px;
        border: 0;
        border-radius: 6px;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-sr-rooms button:focus-visible {
        outline: 2px solid var(--fp3d-accent, #37e0ff);
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
        font-weight: 700;
      }
      /* the armed row (#209): it cannot be missed, and it says what the next tap does, with a bar that runs out */
      .fp3d-central-row-armed {
        padding: 6px;
        margin: -6px;
        border-radius: 12px;
        background: color-mix(in srgb, #ff8a3d 22%, transparent);
        outline: 2px solid #ff8a3d;
      }
      .fp3d-central-ask {
        grid-column: 1 / -1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding-bottom: 6px;
        font-weight: 700;
        font-size: 13px;
      }
      .fp3d-central-ask b {
        min-width: 1.6em;
        padding: 1px 6px;
        border-radius: 999px;
        background: #ff8a3d;
        color: #1a0d00;
        text-align: center;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-central-ask i {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 3px;
        border-radius: 2px;
        background: #ff8a3d;
        transform-origin: left;
        animation: fp3d-ask-run 3.5s linear forwards;
      }
      @keyframes fp3d-ask-run {
        from {
          transform: scaleX(1);
        }
        to {
          transform: scaleX(0);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-central-ask i {
          animation: none;
        }
      }
      .fp3d-sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip-path: inset(50%);
        white-space: nowrap;
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
        /* clear of the pin it belongs to (#207): the dot sits above the pin's top edge (half a pin is 12 px times
           the symbol size, 7 px more with the coarse-pointer padding), so a tap on the pin never lands on the dot */
        margin-top: calc(-12px * var(--fp3d-pin-k, 1) - 18px);
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
        /* a larger target for fingers, 4 px round: it ends above the pin (#207) */
        content: "";
        position: absolute;
        inset: -4px;
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
        /* a notch more solid so names read over bright neon edges (#88); the scheme's own glass, so the text reads on it in
           the light and high contrast chrome too (#216) */
        background: color-mix(in srgb, var(--fp3d-chrome-solid) 92%, transparent);
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
      @media ${ii(si)} {
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
    `]};je("fp3d-view3d",Go);function Vd(r,t){let e=t.attributes.current_temperature,n=typeof e=="number"&&Number.isFinite(e)?`${j(r,Math.round(e))} \xB0C`:"",i=!["off","unavailable","unknown"].includes(t.state);return{text:[nt(r,t),n].filter(Boolean).join(" \xB7 "),on:i}}function G(r,t){return Math.abs(t)>=1e3?`${j(r,t/1e3,1)} kW`:`${Math.round(t)} W`}function ml(r){let t=[.3,.85,1];return r==="washer"||r==="dryer"?{color:t,level:.8,faces:[{part:"drum",color:t,level:.8}]}:{color:t,level:.8}}var Bd=new Set(["rug","stairwell","grid_point","worktop"]);function qd(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}export{Go as Fp3dView3d,Vd as waterHeaterText};
