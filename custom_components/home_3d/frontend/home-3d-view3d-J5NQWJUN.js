import{A as ms,C as Fe,D as et,E as gs,F as bs,G as vs,H as Oe,I as ys,L as Qt,M as ws,O as xs,Q as ks,S as _s,U as $s,V as Ss,W as Ms,X as Is,Y as Ts,Z as ko,a as en,b as yr,c as wr,g as os,i as is,j as rs,k as ue,l as yo,m as wt,n as mn,o as ss,p as wo,q as as,r as ls,s as ds,t as cs,u as xo,w as us,x as ps,y as hs,z as fs}from"./home-3d-chunk-64WFZ4EI.js";import{a as xr,b as kr,c as _r,d as $r,e as Er,f as Rr,g as Ar,h as zr,i as Hr,j as Dr}from"./home-3d-chunk-FNX7Y2ZP.js";import{c as dn,f as Tr,g as Pr,h as Jr,i as Xr,j as Zr,k as Qr,m as go,o as ts,p as bo,q as es}from"./home-3d-chunk-CWT3IHF2.js";import{c as Pi,e as Ei,f as Ri,g as Ai}from"./home-3d-chunk-JWOVMJRG.js";import{a as Si,b as Mi,c as Qn,d as Ii,e as Ti,g as vo}from"./home-3d-chunk-4KVEQELK.js";import{a as fn,b as ce,i as ns}from"./home-3d-chunk-T6CSZ7FD.js";import{a as Cr,b as Zt,c as Ce,d as Fr,e as un,f as fo,g as Or,h as Lr,i as Wr,j as Nr,k as at,l as Br,m as mo,n as Vr,o as qr,p as jt,q as jr,r as mt,s as pn,t as Kr}from"./home-3d-chunk-VQOQJZXG.js";import{B as ao,C as ar,D as de,F as lr,G as dr,H as cr,I as ln,J as ur,K as pr,L as lo,M as ze,N as co,O as uo,P as po,R as hr,S as He,T as fr,U as De,V as mr,W as gr,X as ho,Y as br,Z as vr,a as Ae,b as Zi,c as O,d as Qi,e as ro,f as tr,g as yt,i as le,k as Jt,l as qt,o as L,p as so,q as Q,r as er,s as an,t as nr,u as $t,v as or,w as ir,x as rr,y as Xt,z as sr}from"./home-3d-chunk-V7IOMEPG.js";import{c as Sr,d as Mr,e as cn,f as Ir}from"./home-3d-chunk-46T3S4P4.js";import{e as _,f as U}from"./home-3d-chunk-2WXCEISA.js";import{a as Ze,b as _i,c as Qe,d as g,e as Ft,f as $i,g as w,i as tn}from"./home-3d-chunk-RODTF4JQ.js";import{a as Ur,b as hn,c as Gr,e as Yr}from"./home-3d-chunk-O2ITJNNL.js";import{A as Ni,B as Te,C as Pe,D as Ee,E as Bi,F as Vi,H as qi,I as ji,J as oo,K as io,L as Ki,M as rn,N as sn,O as Ui,P as Gi,R as Yi,S as Ji,T as Ot,U as Re,V as J,W as Xi,a as to,c as Ie,e as zi,f as eo,g as nn,i as on,j as Hi,k as no,l as Di,m as Ci,n as nt,p as Fi,q as At,s as Oi,u as Li,v as ot,w as zt,x as Wi,z as vt}from"./home-3d-chunk-UBC6AEZR.js";import"./home-3d-chunk-IXKPQR33.js";var Le=class extends $r{constructor(t){if(super(t),this.it=w,t.type!==kr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===w||t==null)return this._t=void 0,this.it=t;if(t===$i)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Le.directiveName="unsafeHTML",Le.resultType=1;var Ps=_r(Le);async function Rs(r,t,n){let e=Jl(r,t,n);return!e||r.confirm&&!await n.confirm(r.confirm_text?.trim()||null)?!1:(await e(),!0)}function Jl(r,t,n){let e=r.target?.trim()??"";switch(r.action){case"perform_action":{let i=/^([a-z0-9_]+)\.([a-z0-9_]+)$/.exec(e);return i?()=>n.callService(i[1],i[2],{...r.data??{}}):null}case"navigate":return e?()=>n.navigate(e):null;case"url":return/^(https?:\/\/\S+|\/(?!\/)\S*)$/i.test(e)?()=>n.openUrl(e):null;case"toggle":case"more_info":case"camera":{let i=e||t;return i?r.action==="toggle"?()=>n.callService("homeassistant","toggle",{entity_id:i}):r.action==="more_info"?()=>n.moreInfo(i):()=>n.camera(i):null}default:return null}}var Xl=["tap","hold","double_tap"];function Es(r){return!!r&&Xl.some(t=>!!r[t]&&r[t].action!=="default")}function As(r,t,n){let e=new Map;for(let i of r){for(let o of i.placements)Es(o.actions)&&!e.has(o.entity_id)&&e.set(o.entity_id,{actions:o.actions,entity:o.entity_id});for(let o of i.furniture){if(!Es(o.actions))continue;let s=t(o.id)??`item:${o.id}`;e.has(s)||e.set(s,{actions:o.actions,entity:n(o)})}}return e}function bn(r,t){let n=r?.actions[t];return n&&n.action!=="default"?n:null}var gn=class{pending=null;wait;constructor(t=320){this.wait=t}tap(t,n,e,i){if(this.pending?.id===t){this.doubleTap(t);return}if(this.flush(),!n){e();return}let o=setTimeout(()=>{this.pending=null,e()},this.wait);this.pending={id:t,timer:o,single:e,double:i}}doubleTap(t){let n=this.pending;return!n||n.id!==t?!1:(clearTimeout(n.timer),this.pending=null,n.double(),!0)}flush(){let t=this.pending;t&&(clearTimeout(t.timer),this.pending=null,t.single())}cancel(){this.pending&&clearTimeout(this.pending.timer),this.pending=null}};var Zl={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function te(r,t){return t&&r.states[t]?t:Object.keys(r.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}function _o(r,t){let n=t?r.states[t]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;if(n.entity_id.startsWith("binary_sensor."))return n.state==="on"?.6:0;let e=Number(n.state);if(!Number.isFinite(e))return null;let o=String(n.attributes.unit_of_measurement??"").startsWith("in")?e*25.4:e;return o<=.1?0:Math.min(1,.3+o/10)}function zs(r,t,n){let e=t?r.states[t]:void 0;if(!e||e.state==="unavailable"||e.state==="unknown")return null;let i=Zl[e.state];if(!i)return null;let o=e.attributes,s=i.cloud??0;typeof o.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,o.cloud_coverage/100)));let a=i.wind??0;if(typeof o.wind_speed=="number"){let d=o.wind_speed_unit==="m/s"?o.wind_speed*3.6:o.wind_speed_unit==="mph"?o.wind_speed*1.609:o.wind_speed;a=Math.max(a,Math.min(1,d/60))}let l=_o(r,n);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:e.entity_id,condition:e.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:s,wind:a,lightning:!!i.lightning}}function Hs(r,t){let n=new Set(t??Wi);return{...r,rain:n.has("rain")?r.rain:0,snow:n.has("snow")?r.snow:0,fog:n.has("fog")?r.fog:0,cloud:n.has("clouds")?r.cloud:0,lightning:n.has("lightning")&&r.lightning,sky:n.has("sky")}}var Ql=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),td=new Set(["power","plug","connectivity","running"]);function vn(r){if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let t=r.entity_id.split(".")[0];if(t==="binary_sensor")return td.has(String(r.attributes.device_class))?r.state==="off":r.state==="on";if(t==="input_boolean"||t==="switch")return r.state==="on";let n=Number(r.state);if(r.state!==""&&Number.isFinite(n))return r.attributes.unit_of_measurement==="V"&&n<100;let e=String(r.state).toLowerCase().trim();return Ql.has(e)||e.startsWith("ob ")}function Mo(r){let t=At(r);if(!t)return!1;if(ed.test([t.id,...t.tags??[],...Object.values(t.name??{})].join(" ")))return!t.light||/plant|pflanz/i.test(t.id);if(t.light)return!1;let n=t.parts.filter(e=>e.color==="plant").length;return n>0&&n+t.parts.filter(e=>e.color==="pot").length>=t.parts.length/2}var ed=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var dt=["#3a3f47","#3a3f47"],ee=["#23262b","#23262b"],Pt=["#5a3b25","#5a3b25"],it=["#1f4fa8","#1f4fa8"],Kt=["#e3b616","#e3b616"],V=["#2f7d3b","#2f7d3b"],Ds={default:{rest:dt,bio:Pt,paper:it,plastic:Kt,glass:V,garden:V,recycling:Kt,other:dt},DE:{rest:ee,bio:Pt,paper:it,plastic:Kt,glass:V,garden:V,recycling:Kt},AT:{rest:dt,bio:Pt,paper:[dt[0],"#c0262d"],plastic:Kt,glass:V,garden:V},CH:{rest:["#d8d8d8","#d8d8d8"],bio:V,paper:it,plastic:dt,glass:V,garden:V},NL:{rest:dt,bio:V,paper:it,plastic:["#3a3f47","#e57a1f"],glass:V,garden:V},BE:{rest:dt,bio:V,paper:it,plastic:it,glass:V,garden:V},GB:{rest:ee,bio:["#3a3f47","#5a3b25"],paper:it,plastic:it,glass:ee,garden:Pt,recycling:it},US:{rest:ee,bio:V,paper:it,plastic:it,glass:it,garden:V,recycling:it},CA:{rest:ee,bio:V,paper:it,plastic:it,glass:it,garden:V,recycling:it},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:dt,bio:Pt,paper:[dt[0],"#e3b616"],plastic:[dt[0],"#e3b616"],recycling:[dt[0],"#e3b616"],glass:V,garden:V},IT:{rest:dt,bio:Pt,paper:it,plastic:Kt,glass:V,garden:V},ES:{rest:dt,bio:Pt,paper:it,plastic:Kt,glass:V,garden:V},PT:{rest:dt,bio:Pt,paper:it,plastic:Kt,glass:V,garden:V},DK:{rest:ee,bio:V,paper:it,plastic:dt,glass:V,garden:V},SE:{rest:ee,bio:Pt,paper:it,plastic:dt,glass:V,garden:V},NO:{rest:dt,bio:Pt,paper:it,plastic:dt,glass:V,garden:V},FI:{rest:dt,bio:Pt,paper:it,plastic:dt,glass:V,garden:V}},Os="DE";function Ls(r){Os=r}function Ws(r){let t=r?.config?.country;if(t)return t.toUpperCase();let n=(r?.language??"").split("-")[1];return n?n.toUpperCase():"DE"}function nd(r,t){return Ds[t]?.[r]??Ds.default[r]??dt}function Ns(r,t=Os){let n=nd(r.bin_kind??"rest",t),e=r.bin_color||n[0];return[e,r.bin_lid||(r.bin_color?e:n[1])]}var od={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function So(r,t,n){let e=` ${r.toLowerCase()} `;return n&&n.trim()?n.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&e.includes(i.trim())):t==="other"?!1:od[t].some(i=>e.includes(i))}function Io(r){let t=typeof r=="string"?r:r?.date??r?.dateTime;if(!t)return null;let n=/^(\d{4})-(\d{2})-(\d{2})$/.exec(t),e=n?new Date(Number(n[1]),Number(n[2])-1,Number(n[3])):new Date(t);return Number.isNaN(e.getTime())?null:new Date(e.getFullYear(),e.getMonth(),e.getDate())}function id(r){return r.map(t=>({day:Io(t.start),summary:String(t.summary??"")})).filter(t=>!!t.day).sort((t,n)=>t.day.getTime()-n.day.getTime())}function Bs(r){let t=new Set;for(let n of r.flatMap(e=>e.furniture))n.type==="waste_bin"&&typeof n.bin_source=="string"&&n.bin_source.startsWith("calendar.")&&t.add(n.bin_source);return[...t]}async function To(r,t,n=new Date,e=42){let i=new Map,o=r.callApi;if(!o)return i;let s=new Date(n.getFullYear(),n.getMonth(),n.getDate()),a=Vs(s,e);return await Promise.all(t.map(async l=>{try{let d=await o.call(r,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);i.set(l,id(Array.isArray(d)?d:[]))}catch{}})),i}var pe=r=>new Date(r.getFullYear(),r.getMonth(),r.getDate()),Vs=(r,t)=>new Date(r.getFullYear(),r.getMonth(),r.getDate()+t),yn=(r,t)=>Math.round((pe(t).getTime()-pe(r).getTime())/864e5);function $o(r,t,n={}){let e=n.from??14,i=n.until??12,o=t.getHours()+t.getMinutes()/60;return r===1&&o>=e||r===0&&o<i}function qs(r,t,n,e=new Date,i=3){let o=typeof r.bin_source=="string"&&r.bin_source!=="none"?r.bin_source:null;if(!o)return[];if(o.startsWith("calendar.")){let a=pe(e);return(n.get(o)??[]).filter(l=>l.day>=a&&So(l.summary,r.bin_kind??"rest",r.bin_match)).slice(0,i)}let s=Po(r,t,n,e);return s?[{day:s.day,summary:s.summary}]:[]}function Po(r,t,n,e=new Date,i={}){let o=typeof r.bin_source=="string"&&r.bin_source!=="none"?r.bin_source:null;if(!o)return null;let s=pe(e);if(o.startsWith("calendar.")){let c=(n.get(o)??[]).find(h=>h.day>=s&&So(h.summary,r.bin_kind??"rest",r.bin_match));if(!c)return null;let u=yn(s,c.day);if(u===0&&e.getHours()+e.getMinutes()/60>=(i.until??12)){let h=(n.get(o)??[]).find(f=>f.day>s&&So(f.summary,r.bin_kind??"rest",r.bin_match));if(h)return{days:yn(s,h.day),day:h.day,summary:h.summary,glow:$o(yn(s,h.day),e,i)}}return{days:u,day:c.day,summary:c.summary,glow:$o(u,e,i)}}let a=t.states[o];if(!a)return null;let l=ld(a,e);if(l===null||l<0)return null;let d=Vs(s,l);return{days:l,day:d,summary:String(a.attributes.friendly_name??""),glow:$o(l,e,i)}}function rd(r,t){let n=typeof r=="string"&&r!=="none"?r:null,e=n?t.states[n]:void 0;return!!e&&Ys.has(String(e.state).toLowerCase())}function xn(r,t){return rd(r.bin_out,t)}function sd(r){let t=r.bin_kerb;return t&&Number.isFinite(t.x)&&Number.isFinite(t.z)?[t.x,t.z]:null}function js(r,t,n){let e=sd(r);return e&&n?{at:e,kerb:!0,cue:null}:{at:[r.x,r.z],kerb:!1,cue:e&&t&&!n?e:null}}function Ks(r){return typeof r.bin_out=="string"&&/^(input_boolean|switch)\./.test(r.bin_out)}function Us(r,t=.3){let n=r.filter(a=>!a.icon),e=n.map((a,l)=>l),i=a=>e[a]===a?a:e[a]=i(e[a]);for(let a=0;a<n.length;a++)for(let l=a+1;l<n.length;l++){let d=n[a],c=n[l];d.floorId===c.floorId&&Math.hypot(d.x-c.x,d.z-c.z)<=d.r+c.r+t&&(e[i(l)]=i(a))}let o=new Map;n.forEach((a,l)=>o.set(i(l),[...o.get(i(l))??[],a]));let s=[];for(let a of o.values())a.sort((l,d)=>l.days-d.days||l.name.localeCompare(d.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,d)=>l+d.x,0)/a.length,z:a.reduce((l,d)=>l+d.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of r)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function Gs(r,t={}){let n=typeof t.ahead=="number"&&t.ahead>=0?t.ahead:null,e=r.length?Math.min(...r.map(i=>i.days)):0;return new Set(r.filter(i=>(n===null||i.days<=n)&&(!t.nextOnly||i.days===e)).map(i=>i.id))}function ad(r,t=new Date){let n=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(r),e=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(r),i,o,s;if(n)[i,o,s]=[Number(n[1]),Number(n[2]),Number(n[3])];else if(e){let l=Number(e[1]),d=Number(e[3]);e[2]==="/"&&d>12&&l<=12&&([l,d]=[d,l]),s=l,o=d;let c=e[4];i=c?c.length===2?2e3+Number(c):Number(c):t.getFullYear(),!c&&new Date(i,o-1,s)<pe(t)&&(i+=1)}else return null;if(o<1||o>12||s<1||s>31)return null;let a=new Date(i,o-1,s);return a.getMonth()===o-1?a:null}function ld(r,t=new Date){let n=r.attributes;if(typeof n.daysTo=="number")return n.daysTo;let e=String(r.state).trim();if(/^-?\d+(\.\d+)?$/.test(e))return Math.round(Number(e));let i=/^\d{4}-\d{2}-\d{2}T/.test(e)?Io(e):ad(e,t);if(i)return yn(t,i);let o=e.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(o))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(o))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(o)??/\bin\s+(\d+)/.exec(o);if(s)return Number(s[1]);let a=o.match(/\d+/g);return a?Number(a[a.length-1]):null}var Ys=new Set(["on","open","true","detected","home"]);function Cs(r){let t=r?.last_changed?Date.parse(r.last_changed):NaN;return Number.isFinite(t)?t:null}function Js(r,t,n=Date.now()){let e=typeof r.entity=="string"&&r.entity!=="none"?r.entity:null;if(!e)return!1;let i=t.states[e];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let o=typeof r.mailbox_door=="string"&&r.mailbox_door!=="none"?r.mailbox_door:null;if(!o){let l=Number(i.state);return Ys.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=Cs(i),a=Cs(t.states[o]);return s===null||n-s>7*864e5?!1:a===null||s>a+1e3}function Xs(r){return r.type==="waste_bin"?[r.bin_source??null,r.bin_out??null]:r.type==="mailbox"?[r.entity??null,r.mailbox_door??null]:ud(r)}var Zs=r=>{let t=r?Number(r.state):NaN;return Number.isFinite(t)?t:null};function Eo(r,t){let n=typeof r.moisture=="string"&&r.moisture!=="none"?r.moisture:null,e=n?t.states[n]:void 0;if(!n||!e)return!1;if(n.startsWith("plant.")){let o=e.attributes,s=String(o.problem??"").toLowerCase();return String(o.moisture_status??"").toLowerCase()==="low"||e.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let i=Zs(e);return i!==null&&i<(r.moisture_min??20)}function Ro(r,t=Date.now()){if(!r||r.state==="unavailable"||r.state==="unknown")return null;let n=String(r.state).trim(),e=String(r.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(n)){let s=Number(n),a=e==="s"?s/60:e==="h"?s*60:s;return Math.max(0,Math.round(a))}let i=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(n);if(i)return Number(i[1])*60+Number(i[2])+Math.round(Number(i[3]??0)/60);let o=Date.parse(n);return Number.isFinite(o)&&/\d{4}-\d{2}-\d{2}T/.test(n)?Math.max(0,Math.round((o-t)/6e4)):null}var dd=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function Ao(r){if(!r)return!1;let t=String(r.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return dd.has(t)}var cd=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function zo(r,t,n){let e=r?String(r.state).toLowerCase().replace(/\s+/g,"_"):null;if(e!==null&&cd.has(e))return!0;let i=!!r&&/^(switch|input_boolean|light)\./.test(r.entity_id),o=!!r&&!i&&e!==null&&(e==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(e));return t!==null&&t<=n&&!o}function Qs(r){return r>=60?`${Math.floor(r/60)}:${String(r%60).padStart(2,"0")} h`:`${r} min`}function Fs(r,t,n,e){let i=typeof r=="string"&&r!=="none"?r:null,o=i?n.states[i]:void 0;if(!i||!o||o.state==="unavailable"||o.state==="unknown")return!1;if(i.startsWith("binary_sensor.")||i.startsWith("input_boolean."))return o.state==="on";let s=Zs(o);if(s!==null)return s<=(t??10);let a=Io(o.state);return!!a&&a.getTime()<=pe(e).getTime()}function ta(r,t,n=new Date){let e=[];return Fs(r.service,r.service_min,t,n)&&e.push(r.service),r.service2!==r.service&&Fs(r.service2,r.service2_min,t,n)&&e.push(r.service2),e}var Ut=r=>[r.door_left,r.door_right].filter(t=>typeof t=="string"&&t!=="none"),ea=r=>!!r&&(r.state==="on"||r.state==="open");function kn(r,t,n=Date.now()){let e=(r.door_alarm??2)*6e4;for(let i of Ut(r)){let o=t.states[i];if(ea(o)&&o?.last_changed&&n-Date.parse(o.last_changed)>=e)return i}return null}function na(r,t,n=Date.now()){let e=null;for(let i of r)if(!(i.type!=="fridge"&&i.type!=="fridge_smart"))for(let o of Ut(i)){let s=t.states[o];if(!ea(s)||!s?.last_changed)continue;let a=Date.parse(s.last_changed)+(i.door_alarm??2)*6e4-n;a>0&&(e===null||a<e)&&(e=a)}return e}var wn=class{running=new Map;ended=new Map;update(t,n,e,i=Date.now()){let o=this.running.get(t);if(this.running.set(t,n),n)return this.ended.delete(t),!1;o===!0&&this.ended.set(t,i);let s=this.ended.get(t);return s===void 0?!1:i-s>12*36e5||e(s)?(this.ended.delete(t),!1):!0}};function ud(r){return[r.moisture??null,r.remaining??null,r.service??null,r.service2??null]}var pd=10*6e4;function he(r,t){let n=t?Date.parse(r.states[t]?.last_changed??""):NaN;return Number.isFinite(n)?n:void 0}function hd(r,t){let n=t.map(e=>he(r,e)).filter(e=>e!==void 0);return n.length?Math.max(...n):void 0}var fd=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),oa={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function Ho(r,t,n){let e=[];for(let c of t.floors)for(let u of c.rooms){let f=[...yt(r,u.area_id).filter(b=>{let y=b.startsWith("binary_sensor.")?oa[String(r.states[b]?.attributes.device_class)]:void 0;return!!y&&y!=="water"}),...un(r,c,u,"leak")];f.length&&e.push({floorId:c.id,roomId:u.id,sensors:f})}let i=Object.keys(r.states),o=t.settings.rain_warning===!1?null:te(r,n??t.settings.weather_entity),s=t.settings.outage_entity&&r.states[t.settings.outage_entity]?t.settings.outage_entity:null,a=t.floors.flatMap(c=>c.furniture.filter(u=>(u.type==="fridge"||u.type==="fridge_smart")&&Ut(u).length).map(u=>({floorId:c.id,roomId:c.rooms.find(h=>h.points.length>=3&&J([u.x,u.z],h.points))?.id??null,furnitureId:u.id,ids:Ut(u)}))),l=t.settings.rain_warning===!1?null:t.settings.rain_entity,d=l&&r.states[l]?l:null;return{rooms:e,alarms:i.filter(c=>c.startsWith("alarm_control_panel.")),weather:o,outage:s,rain:d,fridges:a}}function Do(r){return[...r.rooms.flatMap(t=>t.sensors),...r.alarms,...r.weather?[r.weather]:[],...r.outage?[r.outage]:[],...r.rain?[r.rain]:[],...(r.fridges??[]).flatMap(t=>t.ids)]}function ia(r,t,n,e){let i=[];for(let a of n.rooms)for(let l of a.sensors){let d=r.states[l];d?.state==="on"&&i.push({kind:oa[String(d.attributes.device_class)],entity:l,roomId:a.roomId,floorId:a.floorId,since:he(r,l)})}let o=n.rain?_o(r,n.rain):null;if(o!==null?o>0:!!n.weather&&fd.has(r.states[n.weather]?.state??""))for(let a of t.floors)for(let l of a.openings){if(l.type!=="window"||l.rain_ignore)continue;let d=e.get(l.id);if(!d)continue;let c=de(r,d,"window");if(c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5)continue;let u=hd(r,[d.contact,d.tilt,d.contact2,d.tilt2]);i.push({kind:"window_rain",entity:d.contact??d.tilt??d.contact2??l.id,roomId:l.room_id,floorId:a.id,since:u})}if(n.outage&&vn(r.states[n.outage])){let a=Number.isFinite(Number(r.states[n.outage]?.state));i.push({kind:"power_outage",entity:n.outage,roomId:null,floorId:null,since:a?void 0:he(r,n.outage)})}if(t.settings.alert_unavailable){let a=Date.now(),l=new Set;for(let d of t.floors)for(let c of d.openings){let u=e.get(c.id);if(u)for(let h of[u.contact,u.tilt,u.contact2,u.tilt2]){if(!h||l.has(h))continue;let f=r.states[h];if(!f||f.state!=="unavailable"&&f.state!=="unknown")continue;let b=Date.parse(f.last_changed??"");Number.isFinite(b)&&a-b<pd||(l.add(h),i.push({kind:"contact_unavailable",entity:h,roomId:c.room_id,floorId:d.id,since:Number.isFinite(b)?b:void 0}))}}}for(let a of n.fridges??[]){let l=t.floors.find(c=>c.id===a.floorId)?.furniture.find(c=>c.id===a.furnitureId),d=l?kn(l,r):null;d&&i.push({kind:"fridge_door",entity:d,roomId:a.roomId,floorId:a.floorId,since:he(r,d)})}for(let a of n.alarms){let l=r.states[a]?.state;l==="triggered"?i.push({kind:"alarm",entity:a,roomId:null,floorId:null,since:he(r,a)}):l==="pending"&&i.push({kind:"alarm_pending",entity:a,roomId:null,floorId:null,since:he(r,a)})}return i}function md(r){if(r.color)return r.color;switch(r.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function ra(r){return r.kind==="water"&&!r.color?Fr:md(r)}function We(r,t,n){let e=n.roomId?t.floors.flatMap(s=>s.rooms).find(s=>s.id===n.roomId):null;if(n.text!==void 0)return e?`${e.name} \xB7 ${n.text}`:n.text;let i=r?L(r,n.entity):n.entity,o=_(r,`alert_${n.kind}`,{name:i});return e?t.settings.alert_names===!1?`${e.name} \xB7 ${_(r,`alert_short_${n.kind}`)}`:`${e.name} \xB7 ${o}`:o}var gd=new Set(["smoke","co","gas","water","alarm","alarm_pending"]),sa=new Set(["smoke","gas","co","water","alarm","alarm_pending","window_rain","power_outage","fridge_door","contact_unavailable"]);function _n(r){return!gd.has(r)}var xt=r=>`${r.kind}:${r.entity}`,Co=r=>`${xt(r)}@${r.at}`;function aa(r,t){return t.since===void 0||t.since<=r.at}function la(r,t){let n=t.alert_snoozed??[],e=t.alert_ignored??[];if(!n.length&&!e.length)return r;let i=new Map(n.map(s=>[xt(s),s])),o=new Set(e.filter(s=>_n(s.kind)).map(xt));return r.filter(s=>{let a=xt(s);if(o.has(a))return!1;let l=i.get(a);return!l||!aa(l,s)})}function da(r,t){if(!r?.length)return[];let n=new Map(t.map(e=>[xt(e),e]));return r.filter(e=>{let i=n.get(xt(e));return!i||!aa(e,i)})}function ca(r,t,n,e){let i={kind:t.kind,entity:t.entity},o=xt(i),s=(r.alert_snoozed??[]).filter(l=>xt(l)!==o),a=(r.alert_ignored??[]).filter(l=>xt(l)!==o);return n&&_n(t.kind)?{alert_snoozed:s,alert_ignored:[...a,i]}:{alert_snoozed:[...s,{...i,at:Math.max(e,t.since??0)}],alert_ignored:a}}var Oo={red:[1,.25,.2],orange:[1,.65,.15],green:[.3,1,.5]},ua=4,pa=[.35,.4,.45],Fo=[{max:10,bars:["red",null,null,null]},{max:20,bars:["orange",null,null,null]},{max:25,bars:["green",null,null,null]},{max:40,bars:["green","orange",null,null]},{max:50,bars:["green","green",null,null]},{max:65,bars:["green","green","orange",null]},{max:75,bars:["green","green","green",null]},{max:90,bars:["green","green","green","orange"]},{max:1/0,bars:["green","green","green","green"]}];function ha(r){let t=Math.min(100,Math.max(0,r));return(Fo.find(n=>t<=n.max)??Fo[Fo.length-1]).bars}var $n={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function fa(r,t){let n=$n[r].stops;if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++){let[i,o]=n[e],[s,a]=n[e-1];if(t<=i){let l=(t-s)/(i-s);return[a[0]+(o[0]-a[0])*l,a[1]+(o[1]-a[1])*l,a[2]+(o[2]-a[2])*l]}}return n[n.length-1][1]}function ma(r,t,n){let e=new Map;for(let i of t.floors)for(let o of i.rooms){let s=qt(r,i,o,n);s!==null&&e.set(o.id,s)}return e}function ga(r){let t=$n[r].stops,n=t[0][0],e=t[t.length-1][0];return`linear-gradient(90deg, ${t.map(([i,o])=>`rgb(${o.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-n)/(e-n)*100)}%`).join(", ")})`}function ba(r){return r.startsWith("hh:")?r.slice(3).split("#")[0]||null:r.startsWith("detect:")?r.slice(7)||null:/^[a-z0-9_]+\.[a-z0-9_]+$/i.test(r)?r:null}var Mn=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Sn(r){return r&&r!=="none"?r:null}function fe(r,t){if(t.type!=="parking")return null;let n=Sn(t.entity);if(n){let o=r.states[n];if(!o||!Mn.has(o.state.toLowerCase()))return null}let e=t.vehicle??null,i=Sn(t.type_entity);if(i&&t.types?.length){let o=(r.states[i]?.state??"").trim().toLowerCase();if(o){let s=l=>l.trim().toLowerCase(),a=t.types.find(l=>s(l.state)===o)??t.types.find(l=>s(l.state)&&o.includes(s(l.state)));a&&(e=a.vehicle)}}return e&&At(e)?e:null}function Lo(r,t){let n=new Map;for(let e of t.floors)for(let i of e.furniture){let o=fe(r,i);o&&n.set(i.id,o)}return n}function va(r){return r.flatMap(t=>t.furniture.filter(n=>n.type==="parking").flatMap(n=>[Sn(n.entity),Sn(n.type_entity)])).filter(t=>!!t)}function ya(r,t){let n=At(t);if(!n)return null;let e=r.scale??1;return{id:`${r.id}:vehicle`,type:t,x:r.x,z:r.z,rotation:r.rotation,w:n.size[0]*e,d:n.size[1]*e,h:n.size[2]*e,variant:null,entity:null,power:null}}var Ne=1800*1e3,bd=new Set(["motion","occupancy","presence"]);function wa(r,t){return t.startsWith("binary_sensor.")&&bd.has(String(r.states[t]?.attributes.device_class))}function Be(r,t){let n=[],e=new Set,i=(o,s,a,l)=>{e.has(o)||(e.add(o),n.push({entity:o,floorId:s,x:a,z:l}))};for(let o of t.floors)for(let s of o.placements)if(wa(r,s.entity_id))i(s.entity_id,o.id,s.x,s.z);else if(O(s.entity_id)==="camera")for(let a of jt(r,s.entity_id))i(a,o.id,s.x,s.z);for(let o of t.floors)for(let s of o.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Ot(s.points);for(let d of yt(r,s.area_id))wa(r,d)&&i(d,o.id,a,l)}return n}function xa(r,t,n,e=Ne){let i=n-e,o=[];for(let[s,a]of Object.entries(r)){let l="";for(let d of a){let c=(d.lc??d.lu)*1e3;d.s==="on"&&l!=="on"&&c>=i&&c<=n&&o.push({entity:s,time:c}),l=d.s}}for(let s of t){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=n)||o.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||o.push({entity:s.entity,time:a})}return o.sort((s,a)=>s.time-a.time)}function ka(r,t,n,e=Ne){let i=new Map(r.map(s=>[s.entity,s])),o=[];for(let s of t){let a=i.get(s.entity);if(!a)continue;let l=o[o.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||o.push({...a,time:s.time,age:Math.min(1,Math.max(0,(n-s.time)/e))})}return o.slice(-40)}function In(r,t){return new Date(t).toLocaleTimeString(r.language,{hour:"2-digit",minute:"2-digit"})}var _a='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Du=Math.PI/180,me=r=>Math.min(1,Math.max(0,r)),Lt=(r,t,n)=>r.map((e,i)=>e+(t[i]-e)*n);var $a=.3;var Sa={top:[74,140,214],horizon:[178,208,234]},Ma={top:[148,155,164],horizon:[192,197,203]},Ia={top:[8,12,26],horizon:[24,32,54]},vd=[244,156,104],Ta=[186,190,195],yd=[88,112,70],wd=[226,231,238];function Pa(r,t){let n=t??{cloud:0,rain:0,snow:0,fog:0},e=r??90,i=me(n.cloud),o=me((e+6)/12),s=1-.32*me(n.rain),a=Lt(Sa.top,Ma.top,i).map(b=>b*s),l=Lt(Sa.horizon,Ma.horizon,i).map(b=>b*s),d=me(1-Math.abs(e-1)/7)*(1-i);l=Lt(l,vd,d*.85),a=Lt(a,[92,112,168],d*.4);let c=me(n.fog);a=Lt(a,Ta,c),l=Lt(l,Ta,c),a=Lt(Ia.top,a,o),l=Lt(Ia.horizon,l,o);let h=Lt(yd,wd,me(n.snow*1.25)).map(b=>b*($a+(1-$a)*o)),f=b=>b.map(y=>Math.round(y));return{top:f(a),horizon:f(l),ground:f(h)}}var Tn=r=>r.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Pn(r,t){let n=[],e=ze(r,t.floors),i=t.floors.length>1;for(let o of t.floors){let s=(c,u)=>o.rooms.find(h=>h.points.length>=3&&J([c,u],h.points))??null,a=(c,u)=>[s(c,u)?.name,i?o.name:null].filter(Boolean).join(" \xB7 ");for(let c of o.rooms){if(c.points.length<3)continue;let[u,h]=Ot(c.points);n.push({kind:"room",name:c.name,where:i?o.name:"",floorId:o.id,roomId:c.id,entity:null,icon:null,x:u,z:h,y:0})}let l=new Set,d=(c,u,h,f)=>{l.has(c)||!r.states[c]||(l.add(c),n.push({kind:"device",name:L(r,c),where:a(u,h),floorId:o.id,roomId:s(u,h)?.id??null,entity:c,icon:O(c),x:u,z:h,y:f}))};for(let c of o.placements)d(c.entity_id,c.x,c.z,c.y??sr(O(c.entity_id)??"sensor",o.height,c.mount));for(let c of o.furniture){let u=e.get(c.id),h=u?.entity??u?.power;h&&d(h,c.x,c.z,Math.min(o.height-.3,Math.max(.5,c.h)))}}return n}function Ea(r,t,n=8){let e=Tn(t).split(/\s+/).filter(Boolean);if(!e.length)return[];let i=r.filter(a=>{let l=Tn(`${a.name} ${a.where} ${a.entity??""}`);return e.every(d=>l.includes(d))}),o=Tn(t.trim()),s=a=>(Tn(a.name).startsWith(o)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,n)}var En=new Map;async function Wo(r,t){}async function Ra(r,t){for(let n of En.values())if(n.module.voice)try{let e=await n.module.voice(r,t);if(e)return e}catch(e){console.warn(`Home 3D: module ${n.id} failed on "${r}"`,e)}return null}function Aa(r){return oe(t=>t.scene?.(r))}function za(r){return oe(t=>t.cards?.(r))}function Ha(r){return oe(t=>t.alerts?.(r))}function Da(r){return oe(t=>t.watched?.(r))}function No(r,t){return oe(n=>n.roomSheets?.(r,t))}function Bo(r){return oe(t=>t.menuSheets?.(r))}function Ca(){return[...En.values()].filter(r=>!!r.module.settings).map(r=>r.id)}function Fa(r){return oe(t=>t.pools?.(r))}function ne(){return En.size>0}function oe(r){let t=[];for(let n of En.values())try{t.push(...r(n.module)??[])}catch(e){console.warn(`Home 3D: module ${n.id} failed`,e)}return t}function La(r,t,n){let e=r.filter(l=>Number.isFinite(l));if(e.length<2)return"";let i=Math.min(...e),s=Math.max(...e)-i||1,a=l=>Math.round(l*10)/10;return e.map((l,d)=>`${a(d/(e.length-1)*t)},${a(n-1-(l-i)/s*(n-2))}`).join(" ")}function Oa(r,t){if(!r.length)return[.25,.7,1];if(r.length===1)return r[0];let n=Math.min(1,Math.max(0,t))*(r.length-1),e=Math.min(r.length-2,Math.floor(n)),i=n-e,[o,s]=[r[e],r[e+1]];return[o[0]+(s[0]-o[0])*i,o[1]+(s[1]-o[1])*i,o[2]+(s[2]-o[2])*i]}function Wa(r){let t=[];for(let n of r){let e=n.points;if(e.length<2)continue;let i=[],o=0;for(let l=1;l<e.length;l++){let d=Math.hypot(e[l][0]-e[l-1][0],e[l][1]-e[l-1][1],e[l][2]-e[l-1][2]);i.push(d),o+=d}if(o<.01)continue;let s=n.colors.length===e.length,a=0;for(let l=1;l<e.length;l++){let d=i[l-1];if(d<.005)continue;let c=s?Oa([n.colors[l-1],n.colors[l]],.5):Oa(n.colors,(a+d/2)/o);t.push({floorId:n.floorId,a:[...e[l-1]],b:[...e[l]],dist:a,power:Math.max(0,n.flow),color:c,...n.width?{width:Math.min(3,Math.max(.5,n.width))}:{},...n.look==="pipe"?{pipe:!0}:{},...n.views==="house"?{house:!0}:n.views==="floor"?{floor:!0}:{}}),a+=d}}return t}function Na(r){return r&&[...r].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(r)?r:null}function Ba(r){return r&&r.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(r)?r:null}function Rn(r,t){return(r??[]).filter(n=>!t||!n.minor)}var xd=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],kd=[2200,2700,3200,4e3,5e3,6500],_d=4,$d=16,Sd=32,Md=128;function Id(r){let t=ro(r),n=s=>typeof s=="number"?s:null,e=n(r.attributes.current_position),i=n(r.attributes.current_tilt_position),o=r.state==="closed";return t.open||t.close?((e!==null?e<50:o)?t.open:!t.close)?{service:"open_cover",open:!0}:{service:"close_cover",open:!1}:t.position?e<50?{service:"set_cover_position",data:{position:100},open:!0}:{service:"set_cover_position",data:{position:0},open:!1}:t.tiltOpen||t.tiltClose?((i!==null?i<50:o)?t.tiltOpen:!t.tiltClose)?{service:"open_cover_tilt",open:!0}:{service:"close_cover_tilt",open:!1}:t.tiltPosition?i<50?{service:"set_cover_tilt_position",data:{tilt_position:100},open:!0}:{service:"set_cover_tilt_position",data:{tilt_position:0},open:!1}:null}function qo(r){return((r.attributes.supported_features??0)&_d)!==0&&typeof r.attributes.current_position=="number"}var Vo=class extends tn{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},noLook:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{O(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(t){let n=t.attributes.entity_picture,e=n?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return g`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${e?g`<img src=${e} alt=${L(this.hass,this.entity)} />`:g`<span class="qm-note">${at(this.hass,t)}</span>`}
      </button>
      ${this.noLook?w:g`<button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
            ${this.t("through_camera")}
          </button>`}`}t(t,n){return _(this.hass,t,n)}async ask(){return!this.confirmSwitch||await this.question(this.t("confirm_switch",{name:L(this.hass,this.entity)}))}async guarded(t){await this.ask()&&t()}question(t){return dn(t,{ok:this.t("action_confirm_ok"),cancel:this.t("cancel")})}call(t,n,e={}){Ae(this.hass,t,n,{entity_id:this.entity,...e},i=>this.t("service_failed",{error:i}))}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){mt(this,this.entity),this.close()}ring(t){let n=t.length;return t.map((e,i)=>{let o=i/n*Math.PI*2-Math.PI/2;return g`<div class="qm-at" style="left:${50+Math.cos(o)*39}%;top:${50+Math.sin(o)*39}%">${e}</div>`})}renderLight(t){let n=fn(t),e=t.state==="on",i=e&&typeof t.attributes.brightness=="number"?Math.round(t.attributes.brightness/2.55):e?100:0,o=n.color?xd.map(s=>g`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):n.temp?kd.map(s=>g`<button class="qm-swatch" style="background:${Td(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return g`<div class="qm-ring ${o.length?"":"qm-ring-small"}">
        ${this.ring(o)}
        <button class="qm-power ${e?"qm-on":""}" aria-pressed=${e} @click=${()=>{this.guarded(()=>this.call("light","toggle"))}}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${e?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${n.dim?g`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:w}`}renderCover(t){let n=typeof t.attributes.current_position=="number"?t.attributes.current_position:null,e=t.state==="opening"||t.state==="closing",i=qo(t),o=ro(t),s=Id(t),a=(u,h,f,b=!1)=>g`<button class="qm-swatch qm-slot ${b?"qm-slot-on":""}" aria-label=${h} @click=${f}>${u}</button>`,l=u=>n!==null&&Math.abs(n-u)<3,d=[...o.open?[a("\u25B2",this.t("cover_open"),()=>{this.guarded(()=>this.call("cover","open_cover"))},l(100))]:[],...i?[75,50].map(u=>a(`${u}`,`${u} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:u}))},l(u))):[],...o.close?[a("\u25BC",this.t("cover_close"),()=>{this.guarded(()=>this.call("cover","close_cover"))},l(0))]:[],...i?[25].map(u=>a(`${u}`,`${u} %`,()=>{this.guarded(()=>this.call("cover","set_cover_position",{position:u}))},l(u))):[],...o.stop?[a("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),e)]:[]],c=n===null?t.state==="closed"?100:0:100-n;return g`<div class="qm-ring">
        ${this.ring(d)}
        ${s||e&&o.stop?g`<button
          class="qm-power qm-blind ${c<100?"qm-on":""}"
          style="--closed:${c}%"
          aria-label=${e&&o.stop?this.t("cover_stop"):s.service.includes("tilt")?this.t(s.open?"cover_tilt_open":"cover_tilt_close"):s.open?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>e&&o.stop?this.call("cover","stop_cover"):void this.guarded(()=>this.call("cover",s.service,s.data))}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${n!==null?`${n} %`:at(this.hass,t)}</b>
        </button>`:w}
      </div>
      ${i?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(n??0)}
            aria-label=${this.t("position")}
            @change=${u=>this.call("cover","set_cover_position",{position:Number(u.target.value)})}
          />`:w}
      ${this.renderTilt(t)}`}renderTilt(t){let n=(t.attributes.supported_features??0)|0,e=typeof t.attributes.current_tilt_position=="number"?t.attributes.current_tilt_position:null;return n&Md&&e!==null?g`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${e} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(e)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:Qi(t)?g`<div class="qm-tilt-buttons">
        ${n&$d?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:w}
        ${n&Sd?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:w}
      </div>`:w}renderCar(t){let n=t.entities,e=(u,h,f,b={})=>Ae(this.hass,u,h,{entity_id:f,...b},y=>this.t("service_failed",{error:y})),i=n.lock,o=!!i&&i.startsWith("lock."),s=u=>/^(switch|input_boolean|fan|light)\./.test(u),a=n.climate,l=!!a&&a.startsWith("climate."),d=n.charging&&s(n.charging)?n.charging:null,c=[t.soc!==null?`${Math.round(t.soc)} %`:null,t.range!==null?`${Math.round(t.range)} ${t.rangeUnit}`:null,t.charging?`\u26A1 ${this.t("car_charging_short")}`:t.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return g`<p class="qm-car-line">${c||at(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${o||i&&s(i)?g`<button
              class="qm-swatch qm-slot ${t.locked?"qm-slot-on":""}"
              @click=${()=>t.locked?void this.question(this.t("car_unlock_confirm")).then(u=>u&&(o?e("lock","unlock",i):e("homeassistant","turn_off",i))):o?e("lock","lock",i):e("homeassistant","turn_on",i)}
            >
              ${t.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:w}
        ${a?g`<button class="qm-swatch qm-slot ${t.climateOn?"qm-slot-on":""}" @click=${()=>e(l?"climate":"homeassistant",t.climateOn?"turn_off":"turn_on",a)}>
              ${t.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:w}
        ${d?g`<button class="qm-swatch qm-slot ${t.charging?"qm-slot-on":""}" @click=${()=>e("homeassistant",t.charging?"turn_off":"turn_on",d)}>
              ${t.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:w}
        ${!o&&!a&&!d?g`<p class="qm-note">${this.t("car_no_controls")}</p>`:w}
      </div>`}renderMedia(t){let n=t.attributes,e=t.state==="playing",i=t.state==="off"||t.state==="standby",o=typeof n.volume_level=="number"?Math.round(n.volume_level*100):null,s=[n.media_title,n.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof n.entity_picture=="string"?n.entity_picture:null;return g`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${e?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":e?"media_pause":"media_play")}>
          <span>${i?"\u23FB":e?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?g`<p class="qm-media-title">${s}</p>`:w}
      ${o!==null?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(o)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:w}
      ${this.renderPlay(t)}`}renderPlay(t){let n=Array.isArray(t.attributes.source_list)?t.attributes.source_list.slice(0,10):[],e=this.presets??[];if(!n.length&&!e.length)return w;let i=t.attributes.source;return g`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${e.map(o=>g`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:o.type,media_content_id:o.content})}>
            ▶ ${o.label}
          </button>`)}
        ${n.map(o=>g`<button class="qm-chip ${o===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:o})}>${o}</button>`)}
      </div>`}renderDoorLock(t){let n=t.state==="locked"||t.state==="locking"||t.state==="jammed",e=L(this.hass,this.entity),i=async()=>{await this.question(this.t(n?"door_unlock_confirm":"door_lock_confirm",{name:e}))&&(this.call("lock",n?"unlock":"lock"),this.close())};return g`<p class="qm-car-line">${at(this.hass,t)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${n?"qm-slot-on":""}" @click=${i}>${n?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(t){let n=t.state==="on"||t.state==="unlocked"||t.state==="playing",e=t.entity_id.split(".")[0];return g`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${n?"qm-on":""}"
        aria-pressed=${n}
        @click=${()=>{this.guarded(()=>e==="lock"?this.call("lock",n?"lock":"unlock"):this.call("homeassistant","toggle"))}}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${at(this.hass,t)}</b>
      </button>
    </div>`}render(){let t=this.hass?.states[this.entity];if(!t)return w;let n=O(this.entity),e=this.car?this.renderCar(this.car):Q(t)?g`<p class="qm-note">${at(this.hass,t)}</p>`:this.doorLock&&n==="lock"?this.renderDoorLock(t):n==="light"?this.renderLight(t):n==="cover"?this.renderCover(t):n==="camera"?this.renderCamera(t):n==="media"?this.renderMedia(t):this.renderToggle(t);return g`<div class="qm" role="dialog" aria-label=${L(this.hass,this.entity)}>
      <div class="qm-title">${L(this.hass,this.entity)}</div>
      ${e}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[cn,Qe`
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
    `]};function Td(r){let t=Math.min(1,Math.max(0,(r-2200)/4300)),n=(e,i)=>Math.round(e+(i-e)*t);return`rgb(${n(255,200)},${n(170,225)},${n(80,255)})`}Ze("fp3d-quick-menu",Vo);var Pd=new URL(import.meta.url),Ed=new URL("./home-3d-3d.js?v=6f605c5b3474",Pd).href,Va;function An(){return Va??=import(Ed),Va}var jo;function qa(){let r=new URL("./home-3d-2d.js?v=96d2d48cd0ce",new URL(import.meta.url)).href;return jo??=import(r).catch(t=>{throw jo=void 0,t}),jo}function ja(r,t,n){return n?!0:r.show==="never"||t==="none"||t==="room"?!1:!!r.lamp||!!r.model}var zn=yr("home-3d-fun",()=>"b2e6a8c41561");var Ko=["nye","new_year","chinese_new_year","christmas_eve","christmas","boxing_day","twixmas","advent","bonfire","remembrance","valentines","pancake_day","mothers_day","easter","fathers_day","halloween"];function St(r){return`rgba(${r>>16&255}, ${r>>8&255}, ${r&255}, ${((r>>>24&255)/255).toFixed(2)})`}var Uo=St(1439174702),Ka=St(1308608845),Rd=St(864332287);function Ad(r){let t=r%19,n=Math.floor(r/100),e=r%100,i=Math.floor(n/4),o=n%4,s=Math.floor((n+8)/25),a=Math.floor((n-s+1)/3),l=(19*t+n-i-a+15)%30,d=Math.floor(e/4),c=e%4,u=(32+2*o+2*d-l-c)%7,h=Math.floor((t+11*l+22*u)/451),f=l+u-7*h+114;return[Math.floor(f/31),f%31+1]}function Hn(r,t){let[n,e]=Ad(r),i=new Date(Date.UTC(r,n-1,e-t));return[i.getUTCMonth()+1,i.getUTCDate()]}function Ya(r,t,n){return 1+(7-new Date(Date.UTC(r,t-1,1)).getUTCDay())%7+(n-1)*7}var zd=r=>Hn(r,47),Hd=r=>Hn(r,21),Dd=r=>[6,Ya(r,6,3)],Cd=r=>[11,Ya(r,11,2)],Ua={2025:[1,29],2026:[2,17],2027:[2,6],2028:[1,26],2029:[2,13],2030:[2,3],2031:[1,23],2032:[2,11],2033:[1,31],2034:[2,19],2035:[2,8]};function Fd(r){try{let t=new Intl.DateTimeFormat("en-u-ca-chinese",{month:"numeric",day:"numeric",timeZone:"Asia/Shanghai"});if(t.resolvedOptions().calendar!=="chinese")return null;for(let n=0;n<33;n++){let e=new Date(Date.UTC(r,0,19+n,4)),i=t.formatToParts(e);if(i.find(o=>o.type==="month")?.value==="1"&&i.find(o=>o.type==="day")?.value==="1")return[e.getUTCMonth()+1,e.getUTCDate()]}}catch{}return null}function Od(r){return Ua[r]??Fd(r)??Ua[2026]}function Ld(r,t){let n=(i,o)=>({from:[i,o],to:[i,o]}),e=i=>({from:i,to:i});switch(r){case"nye":return n(12,31);case"new_year":return n(1,1);case"christmas_eve":return n(12,24);case"christmas":return n(12,25);case"boxing_day":return n(12,26);case"twixmas":return{from:[12,27],to:[12,31]};case"advent":return{from:[12,1],to:[12,23]};case"bonfire":return n(11,5);case"remembrance":return e(Cd(t));case"valentines":return n(2,14);case"pancake_day":return e(zd(t));case"mothers_day":return e(Hd(t));case"easter":return{from:Hn(t,2),to:Hn(t,-1)};case"fathers_day":return e(Dd(t));case"halloween":return n(10,31);case"chinese_new_year":return e(Od(t))}}var Wd=[31,29,31,30,31,30,31,31,30,31,30,31];function Ga(r){let t=/^(\d\d)-(\d\d)$/.exec(r??"");if(!t)return null;let n=Number(t[1]),e=Number(t[2]);return n>=1&&n<=12&&e>=1&&e<=Wd[n-1]?[n,e]:null}function Nd(r,t,n){let e=n?.[r],i=Ga(e?.from);return e&&i?{from:i,to:Ga(e.to)??i,custom:!0}:{...Ld(r,t),custom:!1}}var ge=([r,t])=>r*100+t;function Bd(r,t,n,e,i){let{from:o,to:s}=Nd(r,t,i),a=n*100+e;return ge(o)<=ge(s)?a>=ge(o)&&a<=ge(s):a>=ge(o)||a<=ge(s)}function Vd(r,t,n){let e=1440-(t*60+n);return e>60?{key:"season_nye_hours",vars:{n:Math.ceil(e/60),year:r+1}}:{key:e===1?"season_nye_minute":"season_nye_minutes",vars:{n:e,year:r+1}}}function Ja(r,t,n,e,i,o){let s=(a,l)=>({id:r,effect:a,tint:l,key:`season_${r}`,vars:{}});switch(r){case"nye":return{...s(n>=20?"fireworks":"sparkles",Ka),...Vd(t,n,e)};case"new_year":return{...s("confetti",Ka),vars:{year:t}};case"christmas_eve":case"christmas":return s("snow_sleigh",Uo);case"boxing_day":return s("snow",Uo);case"twixmas":return s("snow_light",Rd);case"advent":return{...s("snow",Uo),vars:{n:Math.max(1,Math.round((Date.UTC(t,11,25)-Date.UTC(t,i-1,o))/864e5))}};case"bonfire":return s("fireworks",St(1308588570));case"remembrance":return s("poppies",St(1085276192));case"valentines":return s("hearts",St(1308570470));case"pancake_day":return s("pancakes",St(1307947073));case"mothers_day":return s("flowers",St(1308594119));case"easter":return s("easter",St(1303766156));case"fathers_day":return s("stars",St(1297073143));case"halloween":return s("halloween",St(1090484736));case"chinese_new_year":return s("lanterns",St(1087643695))}}function qd(r,t,n){let e=r.getFullYear(),i=r.getMonth()+1,o=r.getDate();for(let s of Ko)if(!(t?.[s]===!1||!Bd(s,e,i,o,n)))return Ja(s,e,r.getHours(),r.getMinutes(),i,o);return null}function jd(){try{let r=new URLSearchParams(location.search).get("fp3d_season");return Ko.includes(r??"")?r:null}catch{return null}}function Go(r,t=new Date,n){let e=jd();return e?r?.[e]===!1?null:Ja(e,t.getFullYear(),t.getHours(),t.getMinutes(),12,12):qd(t,r,n)}var Dn={online:"#2ecc71",warning:"#f5a623",offline:"#ff3b30"},Kd=new Set(["problem","safety","smoke","gas","carbon_monoxide","heat","moisture","tamper","battery"]),Ud=/\b(ob|lb|on battery|low battery|discharg\w*|overload\w*|replace|error|fault\w*|degraded|warning|alarm|update)\b/,Xa=/\b(off|offline|disconnected|down|stopped|not_home|away|unreachable|dead|lost|shutdown|halted|failed)\b/,Gd=/\b(ol|on|online|connected|up|running|home|ok|normal|idle|healthy|active|charging|charged|ready)\b/;function be(r){let t=[];for(let n of[r.entity,...r.links??[]])n&&!t.includes(n)&&t.push(n);return t}function Za(r){if(!r)return null;let t=String(r.state??"").toLowerCase();if(t==="unavailable")return"offline";if(t==="unknown"||t==="")return"warning";let n=r.entity_id.slice(0,r.entity_id.indexOf("."));if(n==="binary_sensor"){let i=Kd.has(String(r.attributes?.device_class??""));return t==="on"?i?"warning":"online":i?"online":"offline"}if(n==="update")return t==="on"?"warning":"online";if(n==="device_tracker"||n==="person")return t==="home"?"online":"offline";if(n==="switch"||n==="input_boolean"||n==="light"||n==="fan")return t==="on"?"online":"offline";if(Number.isFinite(Number(t)))return"online";let e=t.replace(/[_-]+/g," ");return Ud.test(e)?"warning":Xa.test(e)||Xa.test(t)?"offline":(Gd.test(e),"online")}function ie(r,t){let e=(t.links??[]).filter(s=>s&&s!==t.entity).map(s=>r.states[s]).filter(s=>!!s),i=e.filter(s=>s.state==="unavailable").length,o=e.some(s=>s.state!=="unavailable"&&Za(s)==="warning");if(t.entity){let s=Za(r.states[t.entity])??"offline";return s==="online"&&(i||o)?"warning":s}return e.length?i===e.length?"offline":i||o?"warning":"online":null}function Qa(r,t){let n=new Map;for(let e of t)for(let i of e.furniture){let o=i.rack?.slots;if(o?.length)for(let s of o){if(!s.entity&&!s.links?.length)continue;let a=ie(r,s);a&&n.set(`${i.id}/${s.id}`,a)}}return n}function tl(r,t){let n=t.slice(0,t.indexOf(".")),e=r.states[t],i=String(e?.attributes?.device_class??""),o=String(e?.attributes?.unit_of_measurement??""),s=`${t.slice(n.length+1)} ${r.entities?.[t]?.translation_key??""}`.toLowerCase();return n==="update"?"update":n==="button"?"button":n==="switch"?"switch":n==="device_tracker"?"status":n==="binary_sensor"?["connectivity","running","plug","power","problem"].includes(i)||/status|state|online|connected|running/.test(s)?"status":"other":n!=="sensor"?"other":/runtime/.test(s)||i==="duration"&&/battery/.test(s)?"runtime":i==="battery"||/battery|charge/.test(s)&&o==="%"?"battery":i==="temperature"?"temperature":i==="power"||o==="W"||o==="kW"?"power":i==="data_rate"||/\/s$/.test(o)||/throughput|bandwidth|download|upload|\b(rx|tx)\b|_(rx|tx)(_|$)|network_(in|out)|packets/.test(s)?"throughput":/uptime|last_boot|boot_time/.test(s)||i==="timestamp"&&/up|boot/.test(s)?"uptime":/cpu|processor/.test(s)?"cpu":/memory|\bram\b|swap/.test(s)?"memory":/disk|volume|storage|drive|pool|\bfs\b|used_space|free_space/.test(s)?"disk":/load/.test(s)?"load":/status|state/.test(s)||i==="enum"?"status":"other"}var el=8,ve="@hottest",re="@online";function nl(r,t){let n=new Set,e=[];for(let i of t)for(let o of be(i))n.has(o)||(n.add(o),e.push({id:o,kind:tl(r,o),slot:i}));return e}var Jo=(r,t)=>String(r.states[t]?.attributes?.unit_of_measurement??""),Yo=(r,t)=>Jo(r,t)==="%",Yd=(r,t)=>r.some(n=>n.slot===t&&(n.kind==="battery"||n.kind==="runtime"));function Jd(r,t,n=el){let e=nl(r,t),i=l=>e.filter(d=>d.kind===l),o=l=>Yd(e,l.slot),s=(l,...d)=>{for(let c of d){let u=l.find(c);if(u)return u.id}return null};return[s(i("load"),l=>o(l)&&Yo(r,l.id),l=>Yo(r,l.id)),s(i("battery"),o,()=>!0),s(i("runtime"),()=>!0),s(i("power"),l=>/poe/.test(l.id),o),i("temperature").length?ve:null,t.some(l=>ie(r,l)!==null)?re:null,s(i("disk"),l=>Yo(r,l.id)&&!/free/.test(l.id)),s(i("throughput"),l=>/wan|uplink|internet|external/.test(l.id),()=>!0)].filter(l=>!!l).slice(0,n)}var Cn=(r,t)=>{let n=r.states[t];if(!n||n.state===""||n.state==="unavailable"||n.state==="unknown")return null;let e=Number(n.state);return Number.isFinite(e)?e:null};function Fn(r,t,n){let e=nl(r,t),i=[...new Set(n??Jd(r,t))],o=[];for(let s of i){if(o.length>=el)break;if(s===ve){let a=e.filter(c=>c.kind==="temperature"),l=null;for(let c of a){let u=Cn(r,c.id);u!==null&&(!l||u>Cn(r,l.id))&&(l=c)}if(!a.length)continue;let d=l?Cn(r,l.id):null;o.push({key:s,kind:"temperature",slot:l?.slot.id??null,value:d,unit:l?Jo(r,l.id):"",text:d===null?"unavailable":String(r.states[l.id].state),ids:a.map(c=>c.id),agg:"max"})}else if(s===re){let a=t.map(d=>ie(r,d)).filter(d=>d!==null);if(!a.length)continue;let l=a.filter(d=>d==="online").length;o.push({key:s,kind:"status",slot:null,value:l,of:a.length,unit:"",text:`${l}/${a.length}`,ids:[],agg:"one"})}else{let a=e.find(d=>d.id===s);if(!a)continue;let l=Cn(r,s);o.push({key:s,kind:a.kind,slot:a.slot.id??null,value:l,unit:Jo(r,s),text:String(r.states[s]?.state??"unavailable"),ids:l===null?[]:[s],agg:"one"})}}return o}function ol(r,t){let n=new Map;for(let e of t.ids)for(let i of r?.[e]??[]){if(typeof i.mean!="number")continue;let o=typeof i.start=="number"?i.start:Date.parse(i.start),s=n.get(o);n.set(o,s===void 0?i.mean:Math.max(s,i.mean))}return[...n].sort((e,i)=>e[0]-i[0]).map(([,e])=>e)}async function il(r,t,n,e=Date.now()){try{return await r.callWS({type:"recorder/statistics_during_period",start_time:new Date(e-n).toISOString(),statistic_ids:[...t],period:"5minute",types:["mean"]})??{}}catch{return null}}function rl(r,t){let n=r.points,e=n[t],i=n[(t+1)%n.length],o=Math.hypot(i[0]-e[0],i[1]-e[1])||1,s=[(i[0]-e[0])/o,(i[1]-e[1])/o],a=[-s[1],s[0]],l=[(e[0]+i[0])/2,(e[1]+i[1])/2];J([l[0]+a[0]*.02,l[1]+a[1]*.02],n)||(a=[-a[0],-a[1]]);let d=[a[1],-a[0]];return{a:e,b:i,u:s,n:a,length:o,rightward:s[0]*d[0]+s[1]*d[1]>0}}function On(r,t){let n=t[0]-r.a[0],e=t[1]-r.a[1];return{s:n*r.u[0]+e*r.u[1],d:n*r.n[0]+e*r.n[1]}}function Xo(r,t,n){return[r.a[0]+r.u[0]*t+r.n[0]*n,r.a[1]+r.u[1]*t+r.n[1]*n]}var Xd=.45;function sl(r,t){let n=[];for(let e of t.openings){if(e.wall)continue;let i=t.rooms.find(a=>a.id===e.room_id);if(!i||e.edge>=i.points.length)continue;let{s:o,d:s}=On(r,hn(i,e.edge,e.offset));Math.abs(s)>.4||o<-.05||o>r.length+.05||n.push(Zd(e,o))}return n}function Zd(r,t){return{kind:"opening",id:r.id,s0:t-r.width/2,s1:t+r.width/2,y0:r.sill,y1:r.sill+r.height,d:0}}function al(r,t,n,e=Xd){let i=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let s=J([o.x,o.z],n.points),a=Re(o).map(f=>On(r,f)),l=Math.min(...a.map(f=>f.d)),d=Math.min(...a.map(f=>f.s)),c=Math.max(...a.map(f=>f.s)),u=On(r,[o.x,o.z]);if(!s&&u.d<=0||u.d<=0||l>e||l<-.3||c<.02||d>r.length-.02)continue;let h=ot(t,o);i.push({kind:"furniture",id:o.id,s0:d,s1:c,y0:h,y1:h+o.h,d:l})}return i}var ll=.3;function Ve(r,t){let n=r.from?t(r.from):null,e=r.to?t(r.to):null,i=r.height??ll,o=[];if(r.heights)n&&o.push([n.x,n.y,n.z]),r.points.forEach(([s,a],l)=>o.push([s,r.heights?.[l]??i,a])),e&&o.push([e.x,e.y,e.z]);else{if(!n||!e)return[];o.push([n.x,n.y,n.z],[n.x,i,n.z]);for(let[s,a]of r.points)o.push([s,i,a]);o.push([e.x,i,e.z],[e.x,e.y,e.z])}return o.filter((s,a)=>a===0||Zo(s,o[a-1])>.001)}function Zo(r,t){return Math.hypot(t[0]-r[0],t[1]-r[1],t[2]-r[2])}function Ln(r){let t=0;for(let n=1;n<r.length;n++)t+=Zo(r[n-1],r[n]);return t}function Wn(r,t){if(r.length<2)return null;let n=Math.max(0,t);for(let e=1;e<r.length;e++){let[i,o]=[r[e-1],r[e]],s=Zo(i,o);if(!(s<1e-6)){if(n<=s||e===r.length-1){let a=Math.min(1,n/s),l=[(o[0]-i[0])/s,(o[1]-i[1])/s,(o[2]-i[2])/s];return{p:[i[0]+(o[0]-i[0])*a,i[1]+(o[1]-i[1])*a,i[2]+(o[2]-i[2])*a],dir:l,seg:e-1}}n-=s}}return null}function se(r){let[t="",n="",e]=r.split(":");return{kind:t,id:n,port:e||null}}function Qd(r,t){let{w:n,d:e,h:i}=r;if(r.type==="pool_pump")return t==="suction"?[n*.5,i*.55,0]:t==="pressure"?[n*.05,i*.9,0]:null;if(r.type==="pool_filter"){let o=Math.min(n,e)/2;if(r.variant==="side6"){let l=o+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let s=i*.89,a=o*.45+.04;return t==="pump"?[-a,s,0]:t==="return"?[a,s,0]:t==="waste"?[0,s,-a]:null}if(r.type==="pool_heat_pump"){let o=r.variant==="left"||r.variant==="back"?r.variant:"right";if(t!=="in"&&t!=="out")return null;let s=t==="in"?i*.25:i*.45;return o==="back"?[t==="in"?-n*.15:n*.15,s,-e/2-.04]:[(o==="left"?-1:1)*(n/2+.04),s,-e*.2]}return null}function dl(r,t){let n=Qd(r,t);if(!n)return null;let e=r.rotation*Math.PI/180,[i,o]=[Math.cos(e),Math.sin(e)];return{x:r.x+n[0]*i-n[2]*o,y:n[1],z:r.z+n[0]*o+n[2]*i}}function qe(r,t){if(t==="outside"){if(r.kind==="floor")return{x:r.x,y:r.y-.3,z:r.z};if(r.kind==="wall"){let n=(r.depth??.3)+.05;return{x:r.x-(r.nx??0)*n,y:r.y,z:r.z-(r.nz??0)*n}}}return{x:r.x,y:r.y,z:r.z}}function ul(r){return r.flatMap(t=>(t.outdoor??[]).filter(n=>n.type==="pool"&&n.pool&&n.points.length>=3).map(n=>({floor:t,area:n})))}var Qo=[.25,.7,1],tc=900;function pl(r,t,n,e=i=>i){let i=[];for(let o of r){let s=e(Ve(o,n),o);if(s.length<2)continue;let a=t.get(o.id),l=a?.color??Qo,d=0;for(let c=1;c<s.length;c++){let[u,h]=[s[c-1],s[c]],f=Math.hypot(h[0]-u[0],h[1]-u[1],h[2]-u[2]);f<.01||(i.push({floorId:o.floor_id,a:u,b:h,dist:d,power:a?.active?tc:0,color:l}),d+=f)}}return i}function Nn(r,t,n){let e=n.pool??{},i=Ee(t,n);return o=>{let{kind:s,id:a,port:l}=se(o);if(s==="port"){let d=e.ports?.find(u=>u.id===a);if(!d)return null;let c=d.kind==="skimmer"?i-(d.depth??0):d.kind==="drain"?Pe(t,n)+.03:d.kind==="inlet"?i-(d.depth??.3):.02;return{x:d.x,z:d.z,y:c}}if(s==="joint"){let d=e.joints?.find(c=>c.id===a);return d?qe(d,l):null}if(s!=="dev")return null;for(let d of r.floors){let c=d.furniture.find(b=>b.id===a);if(!c||!Bi.includes(c.type))continue;let u=l?dl(c,l):null,h=d.elevation-t.elevation;if(u)return{...u,y:u.y+ot(d,c)+h};let f=c.type==="pool_filter"?c.h*.88:c.type==="pool_dosing"?.95:c.type==="pool_valve"?Vi:c.type==="pool_pump"?.2:.3;return{x:c.x,z:c.z,y:f+ot(d,c)+h}}return null}}function ti(r,t,n,e){let i=c=>{let{kind:u,id:h}=se(c);return u==="port"?n.pool?.ports?.find(f=>f.id===h)?.kind:void 0},o=c=>i(c)==="drain",s=c=>i(c)==="inlet"||i(c)==="skimmer",a=c=>{if(c.length<2)return c;let u=c[0],h=ei(n,[u[0],u[2]]);if(!h)return c;let f=[u[0]+h[0]*.35,u[1],u[2]+h[1]*.35],b=1;for(;b<c.length&&Math.hypot(c[b][0]-u[0],c[b][2]-u[2])<.01;)b++;let y=c.slice(b).map(v=>[...v]);for(let v=0;v<y.length-1;v++){let p=(y[v][0]-u[0])*h[0]+(y[v][2]-u[2])*h[1];if(p>=.349999)break;y[v][0]+=h[0]*(.35-p),y[v][2]+=h[1]*(.35-p)}let k=y[0]??c[c.length-1];return[u,f,[f[0],k[1],f[2]],...y]},l=c=>{if(c.length<2)return c;let u=c[0];if(!J([u[0],u[2]],n.points))return c;let h=Pe(e,n)-.15,f=c.findIndex((v,p)=>p>0&&Math.hypot(v[0]-u[0],v[2]-u[2])>.01);if(f<0)return c;let b=c[f],y=[b[0],b[2]];for(let v=0;v<n.points.length;v++){let p=n.points[v],$=n.points[(v+1)%n.points.length],P=ec([u[0],u[2]],[b[0],b[2]],p,$);P&&(y=P)}let k=Math.hypot(y[0]-u[0],y[1]-u[2])>1e-6?[y[0]+(y[0]-u[0])*.02,y[1]+(y[1]-u[2])*.02]:y;return[u,[u[0],h,u[2]],[k[0],h,k[1]],[k[0],b[1],k[1]],...c.slice(f)]},d=r;return t.from&&o(t.from)&&(d=l(d)),t.to&&o(t.to)&&(d=l([...d].reverse()).reverse()),t.from&&s(t.from)&&(d=a(d)),t.to&&s(t.to)&&(d=a([...d].reverse()).reverse()),d}function ei(r,t){let n=r.points;if(n.length<3)return null;let e=0;for(let o=0;o<n.length;o++){let s=n[o],a=n[(o+1)%n.length];e+=s[0]*a[1]-a[0]*s[1]}let i=null;for(let o=0;o<n.length;o++){let s=n[o],a=n[(o+1)%n.length],l=a[0]-s[0],d=a[1]-s[1],c=Math.hypot(l,d);if(c<1e-6)continue;let u=Math.max(0,Math.min(1,((t[0]-s[0])*l+(t[1]-s[1])*d)/(c*c))),h=Math.hypot(s[0]+l*u-t[0],s[1]+d*u-t[1]),f=e>0?[d/c+0,-l/c+0]:[-d/c+0,l/c+0];(!i||h<i.d)&&(i={d:h,n:f})}return i?i.n:null}function ec(r,t,n,e){let i=[t[0]-r[0],t[1]-r[1]],o=[e[0]-n[0],e[1]-n[1]],s=i[0]*o[1]-i[1]*o[0];if(Math.abs(s)<1e-9)return null;let a=((n[0]-r[0])*o[1]-(n[1]-r[1])*o[0])/s,l=((n[0]-r[0])*i[1]-(n[1]-r[1])*i[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[r[0]+i[0]*a,r[1]+i[1]*a]:null}var ht=r=>Math.round(r*1e3)/1e3;var hl=-.3;function fl(r,t,n,e,i){let o=[],s=[],a=k=>t(k),l=[],d=r.from,c=[];for(let k of r.vias){if(k.kind!=="hole"){c.push(k.kind);continue}let v=n.find(R=>R.id===k.joint),p=a(d);if(!v||!p)continue;let $=a(`joint:${v.id}:inside`),P=a(`joint:${v.id}:outside`),z=k.dir?k.dir==="out":Math.hypot(p.x-$.x,p.z-$.z)<=Math.hypot(p.x-P.x,p.z-P.z);l.push({a:d,b:`joint:${v.id}:${z?"inside":"outside"}`,fits:c}),c=[],d=`joint:${v.id}:${z?"outside":"inside"}`}let u=r.to;if(u.length>1){let k=a(d),v=u.map(a).filter(p=>!!p);if(k&&v.length===u.length){let p=v.reduce((W,E)=>W+E.x,0)/v.length,$=v.reduce((W,E)=>W+E.z,0)/v.length,P=Math.hypot(k.x-p,k.z-$)||1,z=Math.min(1,P/2)/P,R=k.y<0||v.some(W=>W.y<0),q={id:i("joint"),kind:"tee",x:ht(p+(k.x-p)*z),z:ht($+(k.z-$)*z),y:R?hl:ht(k.y)};s.push(q),l.push({a:d,b:`joint:${q.id}:in`,fits:c}),c=[],u.forEach((W,E)=>l.push({a:`joint:${q.id}:out${E+1}`,b:W,fits:[]})),u=[]}}u.length&&l.push({a:d,b:u[0],fits:c});let h=k=>{let{kind:v,id:p,port:$}=se(k),P=v==="joint"?s.find(z=>z.id===p):void 0;return P?qe(P,$):a(k)},f=k=>e(k)==="source",b=k=>e(k)==="sink",y=r.to.some(f)&&!f(r.from)||b(r.from)&&!r.to.some(b);for(let k of l){let v=h(k.a),p=h(k.b);if(!v||!p)continue;let $=nc(v,p,cl(k.a,n),cl(k.b,n)),P={id:i("pipe"),from:k.a,to:k.b,floor_id:r.floorId,points:$.map(R=>[R[0],R[2]]),heights:$.map(R=>R[1])},z=Ln(Ve(P,h));P.fittings=k.fits.map((R,q)=>({id:i("fit"),kind:R,at:ht(Math.min(z/2,.4+q*.25)),...R==="valve"?{open:!0}:{}})),y&&(P={...P,from:P.to,to:P.from,points:[...P.points].reverse(),heights:[...P.heights??[]].reverse(),fittings:P.fittings?.map(R=>({...R,at:ht(Math.max(0,z-R.at))}))}),o.push(P)}return{pipes:o,joints:s}}function cl(r,t){let{kind:n,id:e,port:i}=se(r),o=n==="joint"&&i==="outside"?t.find(s=>s.id===e):void 0;return o?.kind==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function nc(r,t,n=null,e=null){let i=r.y<0||t.y<0?hl:ht(Math.max(r.y,t.y)),o=[],[s,a]=[r.x,r.z];n&&([s,a]=[ht(s+n[0]*.5),ht(a+n[1]*.5)],o.push([s,ht(r.y),a]));let[l,d]=[t.x,t.z],c=[];return e&&([l,d]=[ht(l+e[0]*.5),ht(d+e[1]*.5)],c.push([l,ht(t.y),d])),o.push([ht(s),i,ht(a)]),Math.abs(l-s)>.01&&o.push([ht(l),i,ht(a)]),Math.abs(d-a)>.01&&o.push([ht(l),i,ht(d)]),o.push(...c),o.filter((u,h)=>h===0||Math.hypot(u[0]-o[h-1][0],u[1]-o[h-1][1],u[2]-o[h-1][2])>.001)}var oc=2e3;function ic(r){return Math.max(0,oc-r)}var rc=1e3;function ml(r,t){return t?ic(r):Math.max(0,rc-r)}function gl(r){return r>.5?Math.min(2.4,.6+Math.sqrt(r)/50):.6}function bl(r,t,n,e){let i=[];for(let o of t.floors){if(e&&o.id!==e)continue;let s=vt(o).map(a=>sc(r,t,o,a.id,n));s.length&&i.push({floorId:o.id,name:o.name,rooms:s})}return i}function sc(r,t,n,e,i){let o=vt(n).find(d=>d.id===e),s=new Set;for(let d of lr(r,yt(r,o.area_id)))O(d)==="light"&&s.add(d);for(let d of n.placements)O(d.entity_id)==="light"&&o.points.length>=3&&J([d.x,d.z],o.points)&&s.add(d.entity_id);let a=qt(r,n,o,"temperature"),l=i.filter(d=>!d.quiet&&(d.roomId===o.id||!d.roomId&&(!d.floorId||d.floorId===n.id)));return{floorId:n.id,roomId:o.id,name:o.name,lights:s.size,lightsOn:[...s].filter(d=>r.states[d]?.state==="on").length,temperature:a===null?null:`${U(r,Jt(r,a),1)} ${le(r)}`,alerts:l.map(d=>We(r,t,d))}}function vl(r,t){let n=[];return t.lights&&n.push(t.lightsOn?_(r,"sr_lights_on",{on:t.lightsOn,total:t.lights}):_(r,"sr_lights_off")),t.temperature&&n.push(t.temperature),n.push(...t.alerts),n.length?`${t.name}: ${n.join(", ")}`:t.name}function ye(r){return t=>{t.target!==t.currentTarget||t.key!=="Enter"&&t.key!==" "||(t.preventDefault(),r())}}function yl(r,t,n,e=12,i=180){let o=Math.max(i,t),s=Math.max(i*.5625,n),a={cols:1,tile:Math.min(o,s*16/9)};for(let l=1;l<=Math.max(1,r);l++){let d=Math.ceil(r/l),c=(o-e*(l-1))/l,u=(s-e*(d-1))/d*16/9,h=Math.min(c,u);(h>a.tile||l===1)&&(a={cols:l,tile:h})}if(a.tile<i){let l=Math.max(1,Math.floor((o+e)/(i+e)));return{cols:Math.min(l,Math.max(1,r)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}var ni=["top","bottom","left","right"],ac="bottom",oi="home3d.camera_wall_dock",wl=r=>ni.includes(r??"")?r:ac;function xl(r,t,n,e){let i=Math.max(1,n),o=Math.max(1,e);return[["top",t/o],["bottom",(o-t)/o],["left",r/i],["right",(i-r)/i]].reduce((a,l)=>l[1]<a[1]?l:a)[0]}function Bn(r){return on(r)&&/:(?:[a-z0-9_.-]*_)?3d_printer(?:_[a-z0-9_.-]*)?$/.test(r)}var lc=/(progress|percent|completion|fortschritt)/,dc=/(status|state|printing)/,cc=/(chamber|light|lamp|led)/;function ii(r,t){let n={status:null,progress:null,light:null,camera:null};if(!t||t==="none")return n;let e=r.entities?.[t]?.device_id,i=e&&r.entities?Object.values(r.entities).filter(u=>u.device_id===e).map(u=>u.entity_id):[t],o=u=>`${u} ${String(r.states[u]?.attributes.friendly_name??"")} ${r.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),s=u=>u.startsWith("sensor.")&&r.states[u]?.attributes.unit_of_measurement==="%",a=i.find(u=>s(u)&&lc.test(o(u)))??null,d=(/^(sensor|binary_sensor)\./.test(t)&&t!==a?t:null)??i.find(u=>(an(r.states[u])||u.startsWith("binary_sensor."))&&dc.test(o(u)))??null,c=i.filter(u=>u.startsWith("light."));return{status:d,progress:a,light:c.find(u=>/chamber/.test(o(u)))??c[0]??i.find(u=>u.startsWith("switch.")&&cc.test(o(u)))??null,camera:i.find(u=>u.startsWith("camera."))??null}}function kl(r,t){let n=ii(r,t),e=l=>l?r.states[l]:void 0,i=e(n.status),o=!!i&&(i.entity_id.startsWith("binary_sensor.")?i.state==="on":er(i.state)||/^paused?$/i.test(i.state)),s=Number(e(n.progress)?.state),a=o&&n.progress&&Number.isFinite(s)?Math.min(1,Math.max(0,s/100)):null;return{printing:o,progress:a,light:Xt(e(n.light)),camera:n.camera&&!Q(e(n.camera))?n.camera:null}}var uc=[.35,1,.55];function _l(r){let t=[];return r.printing&&t.push({part:"progress",color:uc,level:1,fill:Math.round((r.progress??0)*100)/100}),r.light&&t.push({part:"chamber",color:r.light.color,level:r.light.level}),t}function ri(r,t,n){let e=[...n.openings.values()].flatMap(M=>[M.cover,M.contact,M.tilt,M.contact2??null,M.tilt2??null,M.position??null,M.tiltAngle??null,M.lock??null]),i=jr(t),o=i.filter(M=>O(M)==="camera").flatMap(M=>jt(r,M)),s=i.map(M=>mn(r,M)),a=t.energy,l=t.presence.flatMap(M=>[M.person,M.sensor]),d=t.floors.flatMap(M=>M.rooms.flatMap(A=>yt(r,A.area_id).filter(lt=>O(lt)==="light"))),c=[...n.furniture.values()].flatMap(M=>[M.entity,M.power]),u=t.floors.flatMap(M=>M.furniture.flatMap(A=>[A.state_entity??null,A.state_entity2??null,A.color_entity??null,A.show_when?.entity??null])),h=t.floors.flatMap(M=>M.furniture.flatMap(A=>[A.door_left??null,A.door_right??null,A.soc??null,A.status??null,A.charge??null,A.export??null])),f=(t.settings.roof?.windows??[]).flatMap(M=>[M.cover,M.contact,M.tilt]).filter(M=>!!M&&M!=="none"),b=[...(t.settings.roof?.solar??[]).map(M=>M.entity),...(t.settings.roof?.strings??[]).map(M=>M.entity)].filter(M=>!!M&&M!=="none"),y=t.floors.flatMap(M=>M.furniture.filter(A=>A.type==="robot_vacuum").map(A=>De(r,n.furniture.get(A.id)?.entity??null,A.room_sensor))),k=t.floors.flatMap(M=>M.furniture.flatMap(A=>(A.pictures??[]).flatMap(lt=>[lt.entity,...lt.image.startsWith("camera:")?[lt.image.slice(7)]:[]]))),v=n.heat?t.floors.flatMap(M=>M.rooms.flatMap(A=>yt(r,A.area_id).filter(lt=>lt.startsWith("sensor.")))):[],p=[...va(t.floors),...fr(r,t.floors)],$=Be(r,t).map(M=>M.entity),P=[...t.floors.flatMap(M=>M.furniture.flatMap(Xs)),t.settings.household?.notes??null].filter(M=>!!M&&M!=="none"),z=te(r,n.weatherEntityId??t.settings.weather_entity),R=t.floors.flatMap(M=>M.furniture.filter(A=>Bn(A.type)).flatMap(A=>Object.values(ii(r,n.furniture.get(A.id)?.entity??null)))),q=t.floors.flatMap(M=>[...M.rooms.flatMap(A=>un(r,M,A,"motion")),...M.furniture.map(A=>Wr(r,A))]),W=t.floors.flatMap(M=>M.furniture.flatMap(A=>(A.rack?.slots??[]).flatMap(be))),E=[...i,...W,...R,...o,...e,...s,...c,...u,...h,...y,...f,...b,...k,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...(a.systems??[]).flatMap(M=>[M.grid,M.solar,M.battery,M.battery_soc]),...l,...d,...v,...n.warnings,...p,...$,...q,...P,z,"sun.sun"];return[...new Set(E.filter(M=>!!M))]}var Vn=r=>String(r).padStart(2,"0"),si=/^([01]\d|2[0-3]):[0-5]\d$/;function ai(r){return`${Vn(r.getHours())}:${Vn(r.getMinutes())}`}function pc(r,t,n){return t<=n?r>=t&&r<=n:r>=t||r<=n}function li(r,t,n){return t<=n?r>=t&&r<n:r>=t||r<n}function hc(r){return!!r.from==!!r.to&&!!r.start==!!r.end}function fc(r,t){if(!hc(r))return!1;let n=ai(t),i=!!r.start&&!!r.end&&r.start>r.end&&n<r.end?new Date(t.getFullYear(),t.getMonth(),t.getDate()-1):t,o=`${Vn(i.getMonth()+1)}-${Vn(i.getDate())}`;return r.from&&r.to&&!pc(o,r.from,r.to)?!1:!r.start||!r.end||li(n,r.start,r.end)}function mc(r,t,n){let e=r.show_when;if(!e)return!0;let i=e.entity;if(i&&i!=="none"&&(t[i]?.state??"unavailable")==="unavailable")return!1;let o=e.intervals??[];return!o.length||o.some(s=>fc(s,n))}function qn(r,t,n){return r.floors.flatMap(e=>e.furniture.filter(i=>!mc(i,t,n)).map(i=>i.id))}function $l(r,t,n){let e=new Set(qn(r,t,n));return e.size?{...r,floors:r.floors.map(i=>({...i,furniture:i.furniture.filter(o=>!e.has(o.id))}))}:r}function Sl(r){return r.floors.some(t=>t.furniture.some(n=>!!n.show_when?.intervals?.length))}var Ml=/^#[0-9a-f]{3,8}$/i;function gc(r){let t=(r??"").trim();return!t||/["'()\\\s]/.test(t)?null:/^(https?:\/\/|\/)/i.test(t)||/^data:image\//i.test(t)?t:null}function Il(r){if(!r||!r.kind)return null;let t=r.color&&Ml.test(r.color)?r.color:"#0b1426",n=r.color2&&Ml.test(r.color2)?r.color2:"#03060c";if(r.kind==="color")return t;if(r.kind==="gradient")return`linear-gradient(180deg, ${t}, ${n})`;let e=gc(r.image);if(!e)return null;let i=Math.min(.9,Math.max(0,r.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${i}), rgba(4, 8, 16, ${i})), url("${e}") center / cover no-repeat`}function bc(r){return{a:r.a,b:r.b,u:r.u,n:r.n,length:r.length,rightward:!0}}var di={walls(r,t,n){let e=r.floors.find(o=>o.id===t),i=e?.rooms.find(o=>o.id===n);return!e||!i||i.points.length<3?[]:i.points.map((o,s)=>{let a=rl(i,s),l=xs(e,i.id,a.a,a.b),d=[...al(a,e,i).map(c=>[c.s0,c.s1]),...sl(a,e).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?r.settings.wall_interior:r.settings.wall_exterior,taken:d}})},onWall(r,t,n){return Xo(bc(r),t,n)},freeSpot(r,t,n=.1){let e=o=>o>=n&&o+t<=r.length-n&&!r.taken.some(([s,a])=>o<a+.05&&o+t>s-.05),i=r.length/2-t/2;for(let o=0;o<=r.length;o+=.05){if(e(i-o))return Math.round((i-o)*100)/100;if(e(i+o))return Math.round((i+o)*100)/100}return null},nodeAt(r,t,n){let e=r.floors.find(a=>a.id===t),i=e?.outdoor.find(a=>a.id===n);if(!e||!i)return()=>null;let o=Nn(r,e,i),s=i.pool??{};return a=>{let{kind:l,id:d,port:c}=se(a),u=l==="joint"?(s.joints??[]).find(f=>f.id===d):void 0;if(u)return qe(u,c);let h=l==="port"?(s.ports??[]).find(f=>f.id===d):void 0;return h?o(a)??{x:h.x,y:.02,z:h.z}:o(a)}},connect(r,t,n,e,i,o){let s=r.floors.find(l=>l.id===t),a=s?.outdoor.find(l=>l.id===n);return!s||!a?{pipes:[],joints:[]}:fl({...e,floorId:t},di.nodeAt(r,t,n),a.pool?.joints??[],i,o)}};var pt=Math.PI/180,jn=-.833;function vc(r,t,n){let e=(r/864e5+24405875e-1-2451545)/36525,i=((280.46646+e*(36000.76983+e*3032e-7))%360+360)%360,o=357.52911+e*(35999.05029-1537e-7*e),s=.016708634-e*(42037e-9+1267e-10*e),a=Math.sin(o*pt)*(1.914602-e*(.004817+14e-6*e))+Math.sin(2*o*pt)*(.019993-101e-6*e)+Math.sin(3*o*pt)*289e-6,l=125.04-1934.136*e,d=i+a-.00569-.00478*Math.sin(l*pt),u=23+(26+(21.448-e*(46.815+e*(59e-5-e*.001813)))/60)/60+.00256*Math.cos(l*pt),h=Math.asin(Math.sin(u*pt)*Math.sin(d*pt)),f=Math.tan(u/2*pt)**2,b=4*(f*Math.sin(2*i*pt)-2*s*Math.sin(o*pt)+4*s*f*Math.sin(o*pt)*Math.cos(2*i*pt)-.5*f*f*Math.sin(4*i*pt)-1.25*s*s*Math.sin(2*o*pt))/pt,y=new Date(r),p=(((y.getUTCHours()*60+y.getUTCMinutes()+y.getUTCSeconds()/60+b+4*n)%1440+1440)%1440/4-180)*pt,$=t*pt,P=Math.sin($)*Math.sin(h)+Math.cos($)*Math.cos(h)*Math.cos(p),z=90-Math.acos(Math.min(1,Math.max(-1,P)))/pt;return{azimuth:(Math.atan2(Math.sin(p),Math.cos(p)*Math.sin($)-Math.tan(h)*Math.cos($))/pt+180+360)%360,elevation:z}}function Tl(r,t,n){let e=new Date(r);e.setHours(0,0,0,0);let i=e.getTime(),o=10*6e4,s=u=>({...vc(u,t,n),t:u}),a=[],l=null,d=null,c=s(i);for(let u=i+o;u<=i+24*36e5;u+=o){let h=s(u),f=h.elevation>jn,b=c.elevation>jn;if(f!==b){let y=c.t,k=h.t;for(let p=0;p<12;p++){let $=(y+k)/2;s($).elevation>jn===b?y=$:k=$}let v=s(Math.round((y+k)/2));f?(l??=v,a.push(v)):(d=v,a.push(v))}f&&a.push(h),c=h}return!l&&a.length&&s(i).elevation>jn&&a.unshift(s(i)),{points:a,rise:l,set:d}}function Pl(r,t,n){let e=r.cheap_rate;if(e&&e!=="none")return t[e]?.state==="on";let i=r.cheap_from,o=r.cheap_to;return!i||!o||!si.test(i)||!si.test(o)?null:li(ai(n),i,o)}var El=(r,t)=>t.startsWith("sensor.")&&r.states[t]?.attributes.device_class==="energy";function yc(r,t,n){if(n==="none")return null;if(n)return n;let e=t.replace(/^sensor\./,"").replace(/_?power$/,""),i=`sensor.${e}_energy`;if(El(r,i))return i;let o=r.entities?.[t]?.device_id;if(!o)return null;let s=Object.keys(r.states).filter(a=>El(r,a)&&r.entities?.[a]?.device_id===o);return s.length===1?s[0]:s.find(a=>a.startsWith(`sensor.${e}_`))??null}function Rl(r,t){let n=[];for(let e of t){let i=yc(r,e.powerEntity,e.energy);i&&n.push({key:e.powerEntity,id:e.id,floorId:e.floorId,x:e.x,z:e.z,energy:i,power:e.powerEntity})}return n}async function Al(r,t,n=new Date){let e=new Map,i=[...new Set(t.map(s=>s.energy).filter(s=>!!s))];if(!i.length)return e;let o=new Date(n);o.setHours(0,0,0,0);try{let s=await r.callWS({type:"recorder/statistics_during_period",start_time:o.toISOString(),statistic_ids:i,period:"5minute",types:["change"],units:{energy:"kWh"}});for(let a of t){if(!a.energy)continue;let l=s?.[a.energy]?.reduce((d,c)=>d+(c.change??0),0);l!==void 0&&e.set(a.key,l)}return e}catch{return null}}function zl(r){let t={solar:[],export:[],forecast:[]};for(let n of r?.energy_sources??[])if(n.type==="solar"){n.stat_energy_from&&t.solar.push(n.stat_energy_from);for(let e of n.config_entry_solar_forecast??[])t.forecast.push(e)}else if(n.type==="grid"){for(let e of n.flow_to??[])e.stat_energy_to&&t.export.push(e.stat_energy_to);n.stat_energy_to&&t.export.push(n.stat_energy_to)}return{solar:[...new Set(t.solar)],export:[...new Set(t.export)],forecast:[...new Set(t.forecast)]}}function Hl(r,t,n){if(!r||!t.length)return null;let e=new Date(n);e.setHours(0,0,0,0);let i=e.getTime(),o=new Date(i);o.setDate(o.getDate()+1);let s=o.getTime(),a=new Date(s);a.setDate(a.getDate()+1);let l=a.getTime(),d=new Array(24).fill(0),c=!1,u=null;for(let y of t)for(let[k,v]of Object.entries(r[y]?.wh_hours??{})){let p=Date.parse(k);!Number.isFinite(p)||typeof v!="number"||!Number.isFinite(v)||(p>=i&&p<s?(d[new Date(p).getHours()]+=Math.max(0,v),c=!0):p>=s&&p<l&&(u=(u??0)+Math.max(0,v)))}if(!c&&u===null)return null;let h=n.getHours(),f=1-(n.getMinutes()*60+n.getSeconds())/3600,b=d[h]*f;for(let y=h+1;y<24;y++)b+=d[y];return{rest:c?b/1e3:null,tomorrow:u===null?null:u/1e3,hours:d}}function Dl(r,t){let n=e=>42-(t>0?Math.min(e,t)/t*36:0);return r.map((e,i)=>`${i?"L":"M"}${((i+.5)/24*220).toFixed(1)} ${n(e).toFixed(1)}`).join(" ")}function Cl(r){let t=[];if(r.forecast&&(r.forecast.rest!==null&&t.push({key:"forecast_rest",kwh:r.forecast.rest}),r.forecast.tomorrow!==null&&t.push({key:"forecast_tomorrow",kwh:r.forecast.tomorrow})),r.produced!==null&&r.exported!==null&&r.produced>0){let n=Math.min(Math.max(0,r.exported),r.produced),e=r.produced-n;t.push({key:"self_use",self:e,exported:n,share:Math.round(e/r.produced*100)})}return t}function Mt(r,t,n,e){Ae(r,t,n,e,i=>_(r,"service_failed",{error:i}))}function Ol(r,t){return String(t&&r.states[t]?.attributes.unit_of_measurement||"m\xB3")}function Ll(r,t){return g`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${Ft`<polyline points=${La(r,120,22)} style=${`stroke:${t}`} />`}</svg>`}function xc(r,t,n){return(n==="m\xB3"||n==="m3")&&t<10?`${U(r,t*1e3,0)} l`:`${U(r,t,t<10?2:0)} ${n}`}var kc=2e4,_c=3e5,Wl=6*36e5,$c=12e4,Sc=600*1e3,Nl={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Mc='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',Ic='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>',Bl=()=>import("./home-3d-walk-II7UB6QB.js");function ci(r,t,n){return r.rooms.find(e=>e.points.length>=3&&J([t,n],e.points))?.id??null}function Tc(r,t){let n=t.action==="more_info"?t.target:t.data?.entity_id;return typeof n=="string"&&$t(r.states[n])}function Pc(r){try{return localStorage.getItem(r)==="1"}catch{return!1}}function Ec(r,t){try{localStorage.setItem(r,t?"1":"0")}catch{}}function Rc(){try{let r=JSON.parse(localStorage.getItem("home3d.tv_hidden")??"[]");return new Set(Array.isArray(r)?r.filter(t=>typeof t=="string"):[])}catch{return new Set}}function Vl(r){try{localStorage.setItem("home3d.tv_hidden",JSON.stringify([...r]))}catch{}}function ql(r,t){let n=s=>s&&s!=="none"?s:null,e=de(r,{cover:n(t.cover),contact:n(t.contact),tilt:n(t.tilt)},"window"),i=n(t.window)?r.states[n(t.window)]:void 0,o=e.open;if(i&&!Q(i)){let s=i.attributes.current_position;o=typeof s=="number"?Math.min(1,Math.max(0,s/100)):i.state==="open"||i.state==="opening"?1:0}return{open:o,tilt:e.tilt,cover:e.cover??0}}var ui=class extends tn{static properties={hass:{attribute:!1},building:{attribute:!1},canEdit:{attribute:!1},noSettings:{attribute:!1},home:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},clockLook:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},_realSky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},plan2d:{attribute:!1},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_bigTile:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_cheap:{state:!0},_wires:{state:!0},_wireKwh:{state:!0},_wireOpen:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_holoBig:{state:!0},_solarMore:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_popup:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_wallDock:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_rackView:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},_armLeft:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},_voice:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_phoneStage:{state:!0},_alerts:{state:!0},_dismissing:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},_gangMenu:{state:!0},householdCard:{attribute:!1},rackCards:{attribute:!1},_rackRows:{state:!0},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};rawHass;hassWatch=new gs({entityLists:!1});get hass(){let t=this.rawHass;return t&&this.hassWatch.recording?this.hassWatch.wrap(t):t}set hass(t){this.rawHass=t}infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;clockEvery=0;shownPlan=null;showTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;solarMoreLoading=!1;holoPress="";holoHoverOff=!1;holoBigTimer;holoFolded=new Set;mediaFolded=new Set;tvHidden=Rc();cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;popupTimer;throughWall=!1;live=null;thumbsSaved=null;resizeObs=null;unsubAsk=null;voiceTimer;binInfoTimer;rackOpen=new Set;rackSparkKey="";rackSparkAt=0;alertSrc=null;alertTimer;motionTimer;redTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;rackViewMemo=null;actionOwners=new Map;taps=new gn;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;season=null;seasonLoading=!1;seasonTimer;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];binSpots=new Map;binCues=[];printerCams=new Map;finished=new wn;appliances=new Map;directing=new ko;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this.clockLook=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this._realSky=null,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._bigTile=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._holoBig=!1,this._solarMore=null,this._swipe=null,this._menu=null,this._popup=null,this._through=null,this._wallBig=null,this._wallDock="bottom",this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._rackView=null,this._note=null;try{this.thumbsSaved=localStorage.getItem("home3d.thumbs_compact")}catch{this.thumbsSaved=null}this._thumbsCompact=Qn(this.thumbsSaved,!1),this._phoneStage=!1,this._armed=null,this._armLeft=0,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.plan2d=!1,this.clean=!1,this.cleanButton=!1,this.noSettings=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this._voice=null,this._micProbe=ys(),this._alerts=[],this._dismissing=null,this._household=[],this._hhFolded=Pc("home3d.hhFolded"),this._binInfo=null,this._gangMenu=null,this.householdCard=!0,this.rackCards=!0,this._rackRows=null,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("home3d.flows")==="1",this._holoShow=localStorage.getItem("home3d.holos")!=="0",this._wallDock=wl(localStorage.getItem(oi))}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let t=this.hass;this.unsubAsk||!t?.connection||!this.isConnected||(this.unsubAsk=Ei(t,n=>{this.onAsk(n)}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let t=this.unsubAsk;this.unsubAsk=null,t?.then(n=>n()).catch(()=>{})}keepTouch=t=>{t.stopPropagation()};onVisible=()=>{document.hidden||this.holoRefetch?.()};disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.wireTimer),clearInterval(this.meterTimer),this.meterTimer=void 0,clearTimeout(this.armTimer),this.wireKey="",this.meterKey="",document.removeEventListener("visibilitychange",this.onVisible),this.taps.cancel(),this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this.season?.dispose(),this.season=null,clearTimeout(this.seasonTimer),this.unlistenReplay?.(),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,clearTimeout(this.showTimer),this.showTimer=void 0,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearTimeout(this.motionTimer),this.motionTimer=void 0,clearTimeout(this.redTimer),this.redTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearTimeout(this.holoBigTimer),this.holoBigTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&Oe().catch(()=>this._micProbe=!1);let t=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",t,{passive:!0}),this.addEventListener("wheel",t,{passive:!0}),this.renderRoot.addEventListener("wheel",n=>{let e=n;if(!e.target?.closest?.(".fp3d-holo"))return;let i=this.renderRoot.querySelector("canvas");i&&(e.preventDefault(),i.dispatchEvent(new WheelEvent("wheel",e)))},{passive:!1}),this.start()}observeStage(){let t=this.renderRoot.querySelector(".fp3d-stage");!t||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(n=>{let e=n[0]?.contentRect.width??1e3,i=e<700,o=Mi(e);o!==this._phoneStage&&(this._phoneStage=o,this._thumbsCompact=Qn(this.thumbsSaved,o)),i!==this._narrowStage&&(this._narrowStage=i,this.scheduleThumbs())}),this.resizeObs.observe(t))}async start(){if(this.starting||this.viewer)return;this.starting=!0;let t=this.plan2d;try{let n=t?await qa():await An();if(!this.isConnected||t!==this.plan2d)return;let e=this.renderRoot.querySelector(".fp3d-stage");e.addEventListener("pointerdown",i=>{this._central&&!i.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=n.createViewer(e,{quality:this.quality,explode:this.explode,onRoomTap:(i,o)=>this.fire("room-tap",{floorId:i,roomId:o}),onFloorTap:i=>this.fire("floor-tap",{floorId:i}),floorInfo:i=>i.rooms.length===1?_(this.hass,"floor_rooms_one"):_(this.hass,"floor_rooms",{n:i.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(i,o,s)=>this.onDeviceTap(i,o,s),onRackTap:(i,o,s)=>this.showRackView(i,o,s),onDeviceHold:(i,o,s)=>this.onDeviceHold(i,o,s),onDeviceDoubleTap:i=>!this.ro&&this.taps.doubleTap(i),onRoomDoubleTap:(i,o)=>this.onRoomDoubleTap(i,o),onDeviceSwipe:(i,o,s,a,l)=>this.onDeviceSwipe(i,o,s,a,l),onFurnitureSelect:i=>this.fire("furniture-select",{id:i}),onFurnitureMove:(i,o,s)=>this.fire("furniture-move",{id:i,x:o,z:s}),onDeviceSelect:i=>this.fire("device-select",{id:i}),onDeviceMove:(i,o,s)=>this.fire("device-move",{id:i,x:o,z:s}),onStats:i=>{this.showStats&&(this._stats=i)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setDescription(this.sceneLabel=_(this.hass,t?"sr_plan":"sr_scene")),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((i,o,s,a,l,d)=>this.placeHolo(i,o,s,a,l,d)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...Ie()],eo()),this.hass&&Wo(this.hass,Ie()).then(()=>this.syncDevices(!0)),this.shownPacks=nn(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.viewPlan(this.building))),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.syncSeason(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(n){this._error=String(n)}finally{this.starting=!1,this.isConnected&&!this.viewer&&t!==this.plan2d&&this.start()}}switchViewer(){this.stopWalk(),this.pets?.dispose(),this.pets=null,this.petsFor=null,this.ghost?.dispose(),this.ghost=null,this._through=null,this._menu=null,this._popup=null,this.viewer?.dispose(),this.viewer=null,this.shownPacks=-1,this._thumbs=[],this.thumbsAt=0,this._error=null,this.start()}shouldUpdate(t){let n=t.get("hass"),e=this.rawHass;if(t.size!==1||!t.has("hass")||!n||!e||this.replay||this.hassWatch.matters(n,e))return!0;if(n.states!==e.states){if(this.watched.some(o=>n.states[o]!==e.states[o]))return!0;let i=this.building;if(i&&this.shownPlan?.from===i&&qn(i,e.states,new Date).join("|")!==this.shownPlan.hidden)return!0}return vs(this.renderRoot,bs["components/view3d.ts"],[[n,e]]),this.live?.el&&(this.live.el.hass=e),!1}performUpdate(){try{super.performUpdate()}finally{this.hassWatch.end()}}willUpdate(t){this.hassWatch.begin(!t.has("hass")),t.has("building")&&(Ni(this.building??null),qr(this.building)),t.has("hass")&&this.hass&&Ls(Ws(this.hass))}updated(t){(t.has("hass")||t.has("theme"))&&(this.toggleAttribute("light",Sr(this.effectiveTheme())),this.toggleAttribute("contrast",Mr(this.effectiveTheme()))),t.has("plan2d")&&t.get("plan2d")!==void 0&&this.switchViewer(),t.has("hass")&&this.live?.el&&(this.live.el.hass=this.rawHass),t.has("hass")&&this.watchAsk(),this._central&&(t.has("roomId")&&t.get("roomId")!==void 0||t.has("floorId")&&t.get("floorId")!==void 0)&&(this._central=!1);let n=this.viewer;if(!n)return;this._through&&(t.has("roomId")||t.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null);let e=!1,i=!1;if(n.batch(()=>{if(this.shownPacks!==nn()&&(this.shownPacks=nn(),n.setPacks([...Ie()],eo()),this.hass&&Wo(this.hass,Ie()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&n.setParked(Lo(this.hass,this.building)),i=!0),t.has("building")&&this.building){let a=JSON.stringify(this.startViewOf());e=this.shownStartView!==void 0&&this.shownStartView!==a,this.shownStartView=a,n.setStartView(this.startViewOf()),n.setBuilding(this.viewPlan(this.building))}(t.has("building")||t.has("packs")||t.has("petsOn"))&&this.syncPets(),(t.has("building")||t.has("packs")||t.has("ghostOn"))&&this.syncGhost(),(t.has("building")||t.has("ghostOn"))&&this.syncSeason(),t.has("startView")&&t.get("startView")!==void 0&&(n.setStartView(this.startViewOf()),this.floorId===null&&n.resetView()),(t.has("building")||t.has("theme")||t.has("floorThumbs")||t.has("packs"))&&this.scheduleThumbs();let o=["building","markerMode","heatMode","flows","alerts","dimmed"].some(a=>t.has(a))||this.markerMode==="room"&&t.has("roomId"),s=this.replayTicked&&!!this.replay;this.replayTicked=!1,(o||i||t.has("hass")||s)&&this.syncDevices(o||i,s&&(this.trail||this.detecting))}),e&&this.floorId===null&&n.resetView(),(t.has("hass")||t.has("director"))&&this.direct(),t.has("autoOrbit")&&n.setAutoOrbit(this.autoOrbit?.06:0),n.setFitMargin(this._phoneStage?Ii:Ti),(t.has("_thumbs")||t.has("_narrowStage"))&&n.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),t.has("plan2d")||t.has("hass")||!this.sceneLabel){let o=_(this.hass,this.plan2d?"sr_plan":"sr_scene");o!==this.sceneLabel&&n.setDescription(this.sceneLabel=o)}if(t.has("floorId")&&n.setFloor(this.floorId),t.has("roomId")&&(this.roomId||t.get("roomId"))&&n.selectRoom(this.roomId),t.has("wallMode")&&n.setWallMode(this.wallMode),t.has("keepView")&&n.setKeepView(this.keepView),t.has("angleLock")&&n.setAngleLock(this.angleLock),t.has("explode")&&n.setExplode(this.explode),t.has("keepRoof")&&n.setKeepRoof(this.keepRoof),t.has("hideRoof")&&n.setHideRoof(this.hideRoof),t.has("floorStack")&&n.setFloorStack(this.floorStack),t.has("hass")&&!t.has("theme")&&(this.theme==="theme"||this.theme==="auto")){let o=this.effectiveTheme();n.setTheme(o),o!==vo(this.theme,t.get("hass"))&&this.scheduleThumbs()}t.has("theme")&&(n.setTheme(this.effectiveTheme()),t.has("hass")||this.syncDevices(!0)),t.has("accent")&&n.setAccent(this.accent??null),t.has("surfaceGrab")&&n.setSurfaceGrab(this.surfaceGrab??null),t.has("furnishTypes")&&n.setFurnishTypes(this.furnishTypes??null),t.has("furnish")&&(n.setFurnishMode(this.furnish),this.syncDevices(!0)),t.has("selectedFurniture")&&n.selectFurniture(this.selectedFurniture),t.has("selectedSet")&&n.selectFurnitureSet(this.selectedSet??[]),t.has("selectedDevice")&&n.setSelectedDevice(this.selectedDevice),(t.has("trail")||t.has("replay"))&&this.watchTrail(),t.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(t.has("weather")||t.has("weatherEntityId"))&&this.syncDevices(!0),t.has("quality")&&t.get("quality")!==void 0&&(n.setQuality(this.quality),this._low=n.low,this.replay?.setQuality(this.quality,n.low)),t.has("showStats")&&n.setStats(this.showStats),t.has("building")&&(this.findIndex=null)}syncDevices(t,n=!1){if(this.hassWatch.recording)return this.hassWatch.pause(()=>this.syncDevices(t,n));let e=this.viewer,i=this.building;if(!e||!i||!this.hass)return;let o=this.hass,s=this.shownPlan?.plan,a=this.viewPlan(i);a!==s&&(e.setBuilding(a),t=!0),Sl(i)&&!this.replay&&(this.showTimer??=setTimeout(()=>{this.showTimer=void 0,this.syncDevices(!1)},60050-Date.now()%6e4)),(t||!this.openingLinks||this.linkedRegistry!==o.entities)&&(this.openingLinks=ao(o,a.floors),this.furnitureLinks=ze(o,a.floors),this.linkedRegistry=o.entities,this.findIndex=null,this.alertSrc=this.alerts?Ho(o,a,this.weatherEntityId):null,this.watchHousehold(o,a),this.watched=ri(o,a,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?Do(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),ne()&&(this.watched=[...new Set([...this.watched,...Da(this.sceneHost(o,a))])]),t=!0);let l=t||n,d=!l;if(!l){for(let m of this.watched)if(this.shownStates.get(m)!==o.states[m]&&(l=!0,!m.startsWith("sensor."))){d=!1;break}}let c=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!l)return;if(d&&!this.replay){let m=ml(performance.now()-this.lastSync,this._low);if(m>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},m);return}}this.lastSync=performance.now();let u=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(m=>[m,o.states[m]])),this.scene=ne()?Aa(this.sceneHost(o,a)):[];let h=ue(a,m=>this.furnitureLinks?.get(m.id)?.power??null),f=ss(o,a,h),b=this.now(),y=Br(o,a,b);if(clearTimeout(this.redTimer),this.redTimer=void 0,!this.replay){let m=fo(a).camera_seconds*1e3,x=Math.min(...y.filter(T=>T.motion).map(T=>Vr(o,T.id,m,b)??1/0));Number.isFinite(x)&&(this.redTimer=setTimeout(()=>this.syncDevices(!0),Math.max(50,x-b+20)))}let k=this.furnitureMarkers(o,a,new Set(y.map(m=>m.id)),new Set(f.map(m=>m.powerEntity)));f.push(...k.consumers),this.lastConsumers=f;let v=wo(o,a,f,h),p=new Map(f.filter(m=>m.id!==m.powerEntity).map(m=>[m.id,m.power]));this.confirmSet=ur(o,a.floors);let $=this.trail?this.trailNow(o,a):[],P=this.dimmed?[]:this.detectionPins(o,y);this.detecting=P.length>0;let z=new Set(a.floors.flatMap(m=>m.furniture.filter(x=>x.type==="parking"&&x.car&&fe(o,x)).map(x=>x.id)));e.setDevices([...[...y,...k.markers,...this.lockMarkers(o,a)].map(m=>{let x=m.show==="no_power"||"energyDevice"in m&&m.energyDevice||"standby"in m&&m.standby?null:p.get(m.id)??null,T={...m,power:x,powerText:x===null?void 0:X(o,x),effect:this.dimmed?!1:m.effect},B=m.ownName&&(m.showName||this.markerNames)?m.ownName:"",S=this.mediaCardUp(o,m.id)||!!m.furnitureId&&z.has(m.furnitureId);return{...T,pin:(this.plan2d?ja(T,this.markerMode,this.showPin(T)):this.showPin(T))&&!S,full:m.show==="always"||m.full===!0,caption:B}}),...((this.flows??this._flows)&&!this.dimmed&&v.grid!==null?[this.gridPin(o,a,v.grid)]:[]).filter(m=>!!m),...P,...$.map((m,x)=>({id:`trail:${x}`,floorId:m.floorId,roomId:null,x:m.x,z:m.z,y:.3+.4*$.slice(0,x).filter(T=>T.entity===m.entity).length,icon:_a,name:L(o,m.entity),text:In(o,m.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(a)]);for(let m of this.scene)m.kind==="marker"&&m.card&&m.furnitureId&&!k.targets.has(m.furnitureId)&&k.targets.set(m.furnitureId,`module:${m.id}`);e.setTrail($,this.replay?this.robotPaths(o,a):[]),this.actionOwners=As(a.floors,m=>k.targets.get(m),m=>{let x=this.furnitureLinks?.get(m.id)?.entity;return x&&x!=="none"?x:null});for(let m of a.floors)for(let x of m.furniture)!k.targets.has(x.id)&&this.actionOwners.has(`item:${x.id}`)&&k.targets.set(x.id,`item:${x.id}`);e.setPickTargets(k.targets,this.openingTargets()),e.setScreens(k.screens),e.setFridgeDoors(lo(o,a.floors)),e.setRackLeds(Qa(o,a.floors)),e.setAwnings(pr(o,a.floors)),e.setProjections(this.projectedCameras(o,a)),e.setRobots(this.robotInfos(o,a));let R=new Map;for(let m of a.settings.roof?.windows??[])R.set(m.id,ql(o,m));e.setRoofWindows(R),e.setParked(Lo(o,a)),e.setBinSpots(this.binSpots),e.setBinCues(this.binCues);let q=new Map(a.floors.flatMap(m=>m.openings.map(x=>[x.id,x.type]))),W=new Map([...this.openingLinks].map(([m,x])=>[m,de(o,x,q.get(m))]));e.setOpeningStates(W,c);let E=this.alertSrc?ia(o,a,this.alertSrc,this.openingLinks):[],M=this.alerts&&ne(),A=M?Ha(this.sceneHost(o,a)).map(m=>({kind:m.kind,entity:m.entity,roomId:m.roomId,floorId:m.floorId,text:m.text,color:m.color,quiet:!m.roomId})):[],lt=[...E,...A];this.alertSrc&&this.tidySnoozes(a,lt,M),this.setAlerts(la(lt,a.settings)),clearTimeout(this.fridgeTimer);let bt=this.replay?null:na(a.floors.flatMap(m=>m.furniture),o);bt!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),bt+500));let kt=[...y,...k.markers].map(m=>`${m.id}:${m.glow?`${m.glow.level.toFixed(1)}/${m.glow.color.map(x=>x.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...W].map(([m,x])=>`${m}:${x.open}:${x.cover===null?"-":x.cover.toFixed(1)}`).join(";");if(kt!==this.thumbSig){let m=this.thumbSig==="";this.thumbSig=kt,m||this.scheduleThumbs(1500)}let ct=a.floors.flatMap(m=>m.furniture.filter(x=>nt(x.type)==="home_battery").map(x=>({floorId:m.id,x:x.x,z:x.z})))[0]??(a.energy.battery?a.floors.flatMap(m=>m.placements.filter(x=>x.entity_id===a.energy.battery).map(x=>({floorId:m.id,x:x.x,z:x.z})))[0]:null),Wt=ps(o,a,v.solar),Z=a.settings.roof.hologram??zt,It=[...a.settings.roof.solar??[]].sort((m,x)=>x.rows*x.cols-m.rows*m.cols),Y=a.settings.roof.strings??[],Et=m=>(m.string?Y.find(x=>x.id===m.string)?.inverter:null)??null,H=Z.plant_floor?"all":"house",je=(m,x,T,B)=>{let S=go(a,m);if(!S)return null;let[D,K]=bo(S,m),j=m.u+D/2+x,st=m.v+K/2+T,ft=[S.o[0]+S.eu[0]*j+S.es[0]*st,S.o[1]+S.eu[1]*j+S.es[1]*st,S.o[2]+S.eu[2]*j+S.es[2]*st],Vt=S.wall?.floorId??(S.unbounded?a.floors.find(rt=>rt.elevation===Math.min(...a.floors.map(Tt=>Tt.elevation)))?.id??a.floors[0].id:[...a.floors].sort((rt,Tt)=>Tt.elevation-rt.elevation)[0].id);return{p:[ft[0]+S.n[0]*.05,ft[1]+S.n[1]*.05,ft[2]+S.n[2]*.05],n:[S.n[0],S.n[1],S.n[2]],floorId:Vt,size:B,roof:!0,views:H}},G=[],ut=[],we=v.grid!==null||v.battery!==null||v.solar!==null,xe=Z.place==="free"&&Number.isFinite(Z.x)&&Number.isFinite(Z.z),gt=v.solar!==null&&!xe?It.find(m=>m.id===Z.field)??It[0]:void 0,Ht=gt?Et(gt):null,Nt=!!gt&&!!Ht&&!It.some(m=>m.id!==gt.id&&Et(m)===Ht)&&Z.right===0&&Z.up===0,ke=(()=>{if(!Nt||!gt)return 0;let m=go(a,gt);return m?bo(m,gt)[0]/2+1.2:0})(),_e=gt?je(gt,Z.right+ke,Z.up,Z.size):null,Bt=this.devicePowers(o,a),$e=v.solar!==null?a.energy.solar?[a.energy.solar]:ue(a,m=>this.furnitureLinks?.get(m.id)?.power??null).solar:[];if(_e)G.push(_e),ut.push({kind:"main",name:_(o,"holo_title"),w:null,dayIds:$e,battery:null});else if(we&&xe){let m=0,x=0,T=0,B=1/0,S=a.floors[0];for(let st of a.floors){st.rooms.length&&(B=Math.min(B,st.elevation)),st.rooms.length&&(!S.rooms.length||st.elevation+st.height>S.elevation+S.height)&&(S=st);for(let ft of st.rooms)for(let[Vt,rt]of ft.points)m+=Vt,x+=rt,T++}T&&(m/=T,x/=T);let D=Z.x-m,K=Z.z-x,j=Math.hypot(D,K);G.push({p:[Z.x,(Number.isFinite(B)?B:0)+(Z.height??3),Z.z],n:j>.01?[D/j,0,K/j]:[1,0,0],floorId:S.id,size:Z.size,roof:!0,views:H}),ut.push({kind:"main",name:_(o,"holo_title"),w:null,dayIds:$e,battery:null})}else if(we&&a.floors.some(m=>m.rooms.length)){let m=-1/0,x=1/0,T=-1/0,B=0,S=a.floors[0];for(let D of a.floors){for(let K of D.rooms)for(let[j,st]of K.points)m=Math.max(m,j),x=Math.min(x,st),T=Math.max(T,st);D.rooms.length&&D.elevation+D.height>B&&(B=D.elevation+D.height,S=D)}G.push({p:[m+.6,B+.4,(x+T)/2],n:[1,0,0],floorId:S.id,size:Z.size,roof:!0,views:H}),ut.push({kind:"main",name:_(o,"holo_title"),w:null,dayIds:$e,battery:null})}if(v.solar!==null){let m=new Set;for(let x of a.floors)for(let T of x.furniture.filter(B=>nt(B.type)==="inverter")){if(T.plant_card===!1||m.has(T.id))continue;m.add(T.id);let B=It.filter(ft=>Et(ft)===T.id),S=(gt&&T.id===Ht?B.find(ft=>ft.id!==gt.id):null)??B[0],D=this.furnitureLinks?.get(T.id)?.power??null,K=S?je(S,T.plant_right??0,T.plant_up??0,Z.size*.85):null;if(!K||!D)continue;let j=x.furniture.filter(ft=>nt(ft.type)==="home_battery").sort((ft,Vt)=>Math.hypot(ft.x-T.x,ft.z-T.z)-Math.hypot(Vt.x-T.x,Vt.z-T.z))[0],st=j?.soc&&j.soc!=="none"?Number(o.states[j.soc]?.state):NaN;G.push(K),ut.push({kind:"plant",name:T.name||et(o,T.type),w:Math.max(0,wt(o.states[D])??0),dayIds:[D],battery:j?{soc:Number.isFinite(st)?st:null,w:Bt.get(j.id)??null}:null})}}let Ke=Z.device_house===!1?"floor":"all";for(let m of a.floors){for(let x of m.furniture){if(!x.holo)continue;let T=this.furnitureLinks?.get(x.id)?.power??null,B=f.find(D=>D.id===x.id);if(!T&&!B)continue;let S=m.elevation+ot(m,x)+x.h;G.push({p:[x.x,S+.1,x.z],n:[0,1,0],floorId:m.id,size:Z.size*.7,roof:!1,views:Ke,room:ci(m,x.x,x.z)}),ut.push({kind:"device",name:x.name||et(o,x.type),w:B?.power??(T?wt(o.states[T]):null),dayIds:T?[T]:[],battery:null})}for(let x of m.placements){if(!x.holo)continue;let T=mn(o,x.entity_id);if(!T)continue;let B=m.elevation+(x.y??.4)+.2;G.push({p:[x.x,B,x.z],n:[0,1,0],floorId:m.id,size:Z.size*.7,roof:!1,views:Ke,room:ci(m,x.x,x.z)}),ut.push({kind:"device",name:x.name||L(o,x.entity_id),w:wt(o.states[T]),dayIds:[T],battery:null})}}let _t=[];{let m=new Set,x=(a.settings.roof.hologram??zt).size,T=(S,D,K,j,st,ft,Vt=!1)=>{let rt=o.states[D];if(!rt||O(D)!=="media")return;if(m.has(D)){let Yt=_t.find(Zn=>Zn.id===D);Yt&&_t.push({...Yt,id:`${D}#${_t.filter(Zn=>Zn.id.startsWith(`${D}#`)).length+2}`,floorId:S.id,x:K,z:j,members:[D]});return}m.add(D);let Tt=this.ro?void 0:this.mediaGrace.get(D),bi=[rt.attributes.media_title,rt.attributes.app_name,rt.attributes.source].find(Yt=>typeof Yt=="string"&&!!Yt.trim())??"",Jn=Vt||rt.attributes.device_class==="tv",vi=Jn&&this.tvHidden.has(D),yi=!Q(rt)&&(rt.state==="playing"||rt.state==="paused"&&!!bi&&this.pausedRecently(rt)||rt.state==="on"&&!!rt.attributes.source);if(!yi&&Jn&&!Q(rt)){if(_t.push({id:D,floorId:S.id,x:K,z:j,level:0,playing:!1,members:[]}),vi)return;G.push({p:[K,S.elevation+st+.12,j],n:[0,1,0],floorId:S.id,size:x*.7,roof:!1,views:"all"}),ut.push({kind:"media",name:ft,w:null,dayIds:[],battery:null,media:{id:D,title:_(o,"state_off"),artist:"",picture:null,volume:0,playing:!1,tv:!0,off:rt.state==="off"||rt.state==="standby"}});return}if(!yi){Tt&&Tt.until>Date.now()?(_t.push({...Tt.source,playing:!1,level:0}),G.push(Tt.anchor),ut.push({...Tt.card,media:{...Tt.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Tt.until-Date.now()+100))):Q(rt)||(this.mediaGrace.delete(D),_t.push({id:D,floorId:S.id,x:K,z:j,level:0,playing:!1,members:[]}));return}let Xn=rt.state==="playing",Rt=rt.attributes,wi=typeof Rt.volume_level=="number"?Math.min(1,Math.max(0,Rt.volume_level)):.5,Gl=Array.isArray(Rt.group_members)?Rt.group_members.filter(Yt=>Yt!==D):[];_t.push({id:D,floorId:S.id,x:K,z:j,level:Xn?.3+.7*wi:0,playing:Xn,members:Gl});let Yl=bi||_(o,"holo_media_playing"),xi={p:[K,S.elevation+st+.12,j],n:[0,1,0],floorId:S.id,size:x*.7,roof:!1,views:"all"},ki={kind:"media",name:ft,w:null,dayIds:[],battery:null,media:{id:D,title:Yl,artist:typeof Rt.media_artist=="string"?Rt.media_artist:typeof Rt.media_album_name=="string"?Rt.media_album_name:"",picture:typeof Rt.entity_picture=="string"?Rt.entity_picture:null,volume:Math.round(wi*100),playing:Xn,...Jn?{tv:!0}:{}}};vi||(G.push(xi),ut.push(ki),this.ro||this.mediaGrace.set(D,{until:Date.now()+45e3,card:ki,source:_t[_t.length-1],anchor:xi}))},B=(S,D)=>{for(let K of S.furniture){if((K.entity!=null&&K.entity!=="none")!==D)continue;let j=this.furnitureLinks?.get(K.id)?.entity;j&&T(S,j,K.x,K.z,ot(S,K)+K.h,K.name||et(o,K.type),cr(K.type))}};for(let S of a.floors)B(S,!0);for(let S of a.floors)for(let D of S.placements)T(S,D.entity_id,D.x,D.z,D.y??1.1,D.name||L(o,D.entity_id));for(let S of a.floors)B(S,!1)}{let m=(a.settings.roof.hologram??zt).size;for(let x of a.floors)for(let T of x.furniture){if(T.type!=="parking"||!T.car)continue;let B=fe(o,T);if(!B)continue;let S=He(o,T);if(S.soc===null&&S.range===null&&S.locked===null&&S.climateOn===null)continue;let D=ya(T,B),K=ot(x,T)+(D?.h??1.6);G.push({p:[T.x,x.elevation+K+.25,T.z],n:[0,1,0],floorId:x.id,size:m*.7,roof:!1,views:"all"});let j=S.entities;ut.push({kind:"car",name:T.name||et(o,B),w:null,dayIds:[],battery:null,car:{spot:T.id,soc:S.soc,range:S.range,rangeUnit:S.rangeUnit,chargingW:S.chargingW,charging:S.charging,locked:S.locked,climateOn:S.climateOn,lock:j.lock,climate:j.climate,charge:j.charging&&/^(switch|input_boolean)\./.test(j.charging)?j.charging:null}})}}for(let{anchor:m,card:x}of this.rackHolos(o,a))G.push(m),ut.push(x);let Gt=this.scene.filter(m=>m.kind==="water").map(m=>({...m,level:this.dimmed?m.level*.4:m.level}));if(e.setPools(Gt),ne()){let m=(a.settings.roof.hologram??zt).size;for(let x of za(this.sceneHost(o,a))){let T=a.floors.find(S=>S.id===x.anchor.floorId);if(!T)continue;let B=null;if(x.anchor.areaId){let S=T.outdoor.find(st=>st.id===x.anchor.areaId);if(!S||S.points.length<3)continue;let[D,K]=Ot(S.points),j=S.type==="pool"?Ee(T,S):Te(T,D,K);B=[D,T.elevation+Math.max(j,0)+(S.above?.6:1.1),K]}else if(x.anchor.furnitureId){let S=T.furniture.find(D=>D.id===x.anchor.furnitureId);if(!S)continue;B=[S.x,T.elevation+ot(T,S)+S.h+.25,S.z]}B&&(G.push({p:B,n:[0,1,0],floorId:T.id,size:m*.7,roof:!1,views:"all"}),ut.push({kind:"module",name:x.title,w:null,dayIds:[],battery:null,module:x}))}for(let x of this.scene){if(x.kind!=="tag")continue;let T=a.floors.find(B=>B.id===x.floorId);T&&(G.push({p:[x.at[0],T.elevation+x.at[1],x.at[2]],n:[0,1,0],floorId:T.id,size:m*.75,roof:!1,views:x.views??"all"}),ut.push({kind:"bin",name:x.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:x.color??"#37e0ff",when:x.text,name:x.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}{let m=(a.settings.roof.hologram??zt).size;for(let x of Us(this.binHolos)){let T=a.floors.find(S=>S.id===x.floorId);if(!T)continue;G.push({p:[x.x,T.elevation+x.y+.04,x.z],n:[0,1,0],floorId:x.floorId,size:m*.75,roof:!1,views:"all"});let B=x.lines.map(S=>({color:S.color,when:S.when,name:S.name,soon:!!S.soon&&!S.out,out:!!S.out}));ut.push({kind:"bin",name:x.lines.map(S=>S.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:B,soon:B.some(S=>S.soon),icon:x.lines.length===1?x.lines[0].icon??null:null}})}}e.setSound(_t);let I=this._walk?this.walkRoomPts:null,N=G.map(m=>!this._walk||!!I&&J([m.p[0],m.p[2]],I)),tt=ut.filter((m,x)=>N[x]),Dt=!!(this.flows??this._flows)&&!this.dimmed,Ct=Dt&&!this._walk?Rl(o,f).filter(m=>a.floors.some(x=>x.id===m.floorId)):[];JSON.stringify(Ct)!==JSON.stringify(this._wires)&&(this._wires=Ct),this.holoCount=tt.length;let Kn=Ct.map(m=>({p:[m.x,a.floors.find(x=>x.id===m.floorId).elevation+.03,m.z],n:[0,1,0],floorId:m.floorId,size:1,roof:!1,views:"all",plan:!0}));e.setAnchors([...G.filter((m,x)=>N[x]),...Kn]),JSON.stringify(tt)!==JSON.stringify(this._holos)&&(this._holos=tt),this.watchRackSpark(),e.setSolarLevels(Wt&&!this.dimmed?us(a,Wt):new Map);let Se=m=>hs(m,v),Ue=Dt?as({building:a,consumers:f,summary:v,battery:ct??null,fieldPower:Wt,devicePower:this.devicePowers(o,a)}).map(m=>({floorId:m.floorId,a:m.a,b:m.b,dist:m.dist,power:m.power,color:fs(Se(m.kind)),dots:ms(Se(m.kind)),thick:gl(m.power)})):[],Ge=this.poolPipes(a),Ye=this.scene.filter(m=>m.kind==="line");e.setFlows(this.dimmed?Ue:[...Ue,...Ge.flows,...Wa(Ye)]),e.setPipes(Ge.tubes),e.setPatches(this.scene.filter(m=>m.kind==="patch").map(m=>({floorId:m.floorId,points:m.points,y:m.y,color:m.color,opacity:this.dimmed?m.opacity*.4:m.opacity,...m.glow?{glow:!0}:{}})));let Un=[],Gn=Pr("locate")&&Rr(a)?[...Un,...zr(o,a,new Set(Un.map(m=>m.id)))]:Un;e.setPersonLook(Er(a)==="pin"?"pin":"figure"),e.setPersons(Gn),this.lastPersons=Gn.map(m=>({floorId:m.floorId,roomId:m.roomId}));let Kl=Hr(o,a,this.openingLinks,Gn);e.setFloorInfo(new Map([...Kl].map(([m,x])=>[m,Dr(o,x)])));let Je=o.states["sun.sun"]?.attributes,Me=typeof Je?.elevation=="number"?Je.elevation:null;e.setSun(Me!==null&&typeof Je?.azimuth=="number"?{elevation:Me,azimuth:Je.azimuth}:null);let Xe=m=>_(o,m).charAt(0).toUpperCase();e.setSunPath(this.sunPathToday(o),[Xe("compass_n"),Xe("compass_e"),Xe("compass_s"),Xe("compass_w")]),(this.theme==="auto"||this.theme==="theme")&&e.setTheme(this.effectiveTheme());let pi=this.weather&&!this.dimmed?zs(o,te(o,this.weatherEntityId??a.settings.weather_entity),a.settings.rain_entity):null,ae=pi?Hs(pi,a.settings.weather_effects):null;this.cloud=ae?.cloud??0,this._sky=(Me===null?0:Math.min(1,Math.max(0,(Me+4)/16)))*(1-.45*this.cloud);let hi=this.effectiveTheme()==="realistic"?Pa(Me,ae):null;JSON.stringify(hi)!==JSON.stringify(this._realSky)&&(this._realSky=hi);let Ul=ae?ae.sky:(a.settings.weather_effects??["sky"]).includes("sky");e.setWeather(this.weather&&!this.dimmed?{...ae??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:Ul}:null),this.watchLightning(!!ae?.lightning),this.applyTint(),this.applyMotion();let Yn=Pl(a.energy,o.states,new Date(this.now()));Yn!==this._cheap&&(this._cheap=Yn);let fi=v.grid!==null||v.solar!==null||v.battery!==null||v.tariff!==null||Yn!==null?v:null;JSON.stringify(fi)!==JSON.stringify(this._energy)&&(this._energy=fi);let mi=f.some(m=>m.wallbox)?f.filter(m=>m.wallbox).reduce((m,x)=>m+x.power,0):null,gi=a.floors.flatMap(m=>m.furniture.filter(x=>nt(x.type)==="inverter")).map(m=>{let x=this.furnitureLinks?.get(m.id)?.power,T=x?wt(o.states[x]):null;return T===null?null:{name:m.name||et(o,m.type),w:Math.max(0,T)}}).filter(m=>!!m);JSON.stringify(gi)!==JSON.stringify(this._plants)&&(this._plants=gi),mi!==this._wallboxW&&(this._wallboxW=mi),this.watchSolarDay([...new Set(ut.flatMap(m=>m.dayIds))]),this.watchMeters(a.energy.gas??null,a.energy.water??null),this.watchWireKwh(Ct),u&&(this.syncMs=this.syncMs*.8+(performance.now()-u)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let t=this.replay;!t||!this.isConnected||(this.seenT=t.t,this.seenFocus=t.focusSeq,this.unlistenReplay=t.listen(()=>{this.replay===t&&(t.focusSeq!==this.seenFocus&&(this.seenFocus=t.focusSeq,t.focus&&this.showEntity(t.focus)),!(t.t===this.seenT&&t.seek===this.seenSeek)&&(t.pulses.length&&this.viewer?.flashDevices(t.pulses),this.seenT=t.t,!(t.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(t){let n=this.hass,e=this.building;if(!n||!e)return;let i=(this.findIndex??=Pn(n,e)).find(s=>s.entity===t);if(i){this.goTo(i);return}let o=n.entities?.[t]?.area_id??n.devices?.[n.entities?.[t]?.device_id??""]?.area_id??null;for(let s of e.floors){let a=s.openings.find(u=>{let h=this.openingLinks?.get(u.id);return!!h&&[h.contact,h.tilt,h.contact2,h.tilt2,h.cover].includes(t)}),l=s.rooms.find(u=>u.points.length>=3&&(a?u.id===a.room_id:!!o&&u.area_id===o));if(!l)continue;let[d,c]=Ot(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:t,icon:null,x:d,z:c,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let t=this.building,n=this.hass;if(!t||!n)return{entities:[],openings:[],furniture:[],low:this._low};let e=!this.openingLinks||this.linkedRegistry!==n.entities,i=e?ao(n,t.floors):this.openingLinks,o=e?ze(n,t.floors):this.furnitureLinks,s=Do(Ho(n,t,this.weatherEntityId)),a=ri(n,t,{openings:i,furniture:o,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=t.floors.flatMap(d=>d.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?hr(n,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker.")));return{entities:a,openings:[...i],furniture:[...o],low:this._low,cars:l,energy:!0,auto:!0}}showInfo(t,n,e){this._menu=null,this._popup=null,this._info={entity:t,x:n,y:e},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let t=this._info;if(!t||!this.hass)return w;let n=this.hass,e=n.states[t.entity],i=at(n,e),o=O(t.entity)==="light"&&e?.state==="on"&&i.endsWith("%")?`${_(n,"state_on")} \xB7 ${i}`:i,s=e?.last_changed?_(n,"tt_since",{time:In(n,Date.parse(e.last_changed))}):"";return g`<div class="fp3d-swipe fp3d-info" style="left:${t.x}px;top:${t.y}px">
      <span>${L(n,t.entity)}</span>
      <b>${s?`${o} \xB7 ${s}`:o}</b>
    </div>`}devicePowers(t,n){let e=new Map;for(let i of n.floors)for(let o of i.furniture){let s=nt(o.type);if(s!=="inverter"&&s!=="home_battery"&&s!=="solar")continue;let a=this.furnitureLinks?.get(o.id)?.power,l=nt(o.type)==="home_battery"&&o.charge&&o.charge!=="none"?wt(t.states[o.charge]):null,d=a?wt(t.states[a],nt(o.type)==="home_battery"&&n.energy.battery_invert&&l===null):null;d!==null&&l!==null?d=Math.max(0,d)-Math.max(0,l):d===null&&l!==null&&(d=-Math.max(0,l)),d!==null&&e.set(o.id,d)}return e}detectionPins(t,n){let e=[],i=new Set(this.building?.floors.flatMap(o=>o.placements.filter(s=>s.detect_pins===!1).map(s=>s.entity_id))??[]);for(let o of n){if(!o.model?.startsWith("camera")||i.has(o.id))continue;let s=this.now(),a=jt(t,o.id).filter(f=>{let b=t.states[f];return b?b.state==="on"?!0:b.state==="off"&&!!b.last_changed&&s-Date.parse(b.last_changed)<$c:!1}),l=new Map;for(let f of a){let b=mo(t,f);l.has(b)||l.set(b,f)}l.size>1&&l.delete("motion");let d=(o.rotation??0)*Math.PI/180,c=[-Math.sin(d),Math.cos(d)],u=o.model==="camera_ceiling",h=0;for(let[f,b]of l){let y=t.states[b],k=y?.last_changed?In(t,Date.parse(y.last_changed)):"";e.push({id:`detect:${b}`,floorId:o.floorId,roomId:o.roomId,x:o.x+(u?0:c[0]*1.1),z:o.z+(u?0:c[1]*1.1),y:1.4+.4*h++,icon:Nl[f]??Nl.motion,name:L(t,b),text:`${_(t,`detect_${f}`)}${k?` \xB7 ${k}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return e}gridPin(t,n,e){let i=ls(n);if(!i)return null;let o=Math.abs(e)<5,s=n.settings.outage_entity;return s&&vn(t.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Ic,name:_(t,"holo_grid"),text:_(t,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:Mc,name:_(t,"holo_grid"),text:o?X(t,0):`${_(t,e<0?"energy_grid_export":"energy_grid_import")} ${X(t,Math.abs(e))}`,active:!o,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(t,n){let e=[t,n].filter(s=>!!s),i=this.replay?"":e.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let o=async()=>{if(!this.hass||document.hidden)return;let s=await yo(this.hass,e);this.meterKey===i&&s&&(this._meters={gas:t?s.get(t)??null:null,water:n?s.get(n)??null:null})};o(),this.meterTimer=setInterval(()=>{o()},3e5)}holoCount=0;wireKey="";wireTimer;watchWireKwh(t){let n=this.replay?"":t.map(i=>`${i.key}=${i.energy??""}`).join(",");if(n===this.wireKey)return;if(this.wireKey=n,clearInterval(this.wireTimer),this.wireTimer=void 0,!n){this._wireKwh=null;return}let e=async(i=!1)=>{if(!this.hass||document.hidden&&!i)return;let o=await Al(this.hass,t);this.wireKey===n&&o&&(this._wireKwh=o)};e(!0),this.wireTimer=setInterval(()=>{e()},3e5)}placeWire(t,n,e,i){let o=this.renderRoot.querySelector(`.fp3d-wire[data-wire="${t}"]`);o&&(o.hidden!==!i&&(o.hidden=!i),i&&(o.style.transform=`translate(${n.toFixed(1)}px, ${e.toFixed(1)}px) translate(-50%, -50%)`))}renderWires(){if(!this._wires?.length)return w;let t=this.hass;return this._wires.map((n,e)=>{let i=this._wireKwh?.get(n.key),o=i===void 0?"\u2026":`${U(t,i,i<10?2:1)} kWh`,s=L(t,n.id),a=this._wireOpen===n.key;return g`<button
        class="fp3d-wire ${a?"fp3d-wire-open":""}"
        data-wire=${e}
        hidden
        aria-expanded=${a}
        aria-label=${`${s}: ${_(t,"wire_today")} ${o}`}
        @click=${l=>{l.stopPropagation(),this._wireOpen=a?null:n.key}}
      >
        <span class="fp3d-wire-tip" aria-hidden="true">${s}<span>${_(t,"wire_today")} <b>${o}</b></span></span>
      </button>`})}poolPipes(t){let n=[],e=[],i=new Map(this.scene.filter(o=>o.kind==="pipeflow").map(o=>[o.areaId,o.flows]));for(let{floor:o,area:s}of ul(t.floors)){let a=s.pool;if(!a.pipes?.length&&!a.joints?.length)continue;let l=a.ports??[],d=new Map(Object.entries(i.get(s.id)??{})),c=Nn(t,o,s),u=(h,f)=>ti(h,f,s,o);n.push(...pl(a.pipes??[],d,c,u));for(let h of l){if(h.kind!=="inlet")continue;let f=c(`port:${h.id}`),b=f&&ei(s,[f.x,f.z]);if(!f||!b)continue;let y=(a.pipes??[]).find(v=>v.to===`port:${h.id}`),k=y?d.get(y.id):void 0;e.push({floorId:o.id,points:[[f.x+b[0]*.03,f.y,f.z+b[1]*.03],[f.x-b[0]*.09,f.y,f.z-b[1]*.09]],radius:.035,water:k?.active?k.color:null,fittings:[]})}for(let h of a.joints??[]){if(h.kind!=="wall"&&h.kind!=="floor")continue;let f=c(`joint:${h.id}:inside`),b=c(`joint:${h.id}:outside`),y=h.kind==="floor"?.03:f.y;e.push({floorId:o.id,points:[[f.x,y,f.z],[b.x,b.y,b.z]],radius:.05,water:null,fittings:[]})}for(let h of a.pipes??[]){let f=ti(Ve(h,c),h,s,o);if(f.length<2)continue;let b=d.get(h.id),y=[],k=Ln(f);for(let[v,p]of[[h.from,.04],[h.to,k-.04]]){let $=v.startsWith("dev:")||v.startsWith("joint:")?Wn(f,p):null;$&&y.push({kind:"sleeve",p:$.p,dir:$.dir})}for(let v of h.fittings??[]){let p=Wn(f,v.at);p&&y.push({kind:v.kind,p:p.p,dir:p.dir,open:v.open!==!1})}e.push({floorId:h.floor_id,points:f,radius:.025,water:b?.active?b.color??Qo:null,fittings:y})}}return{flows:n,tubes:e}}watchSolarDay(t){let n=this.replay;if(n){clearInterval(this.holoTimer),this.holoTimer=void 0;let o=`tt|${t.join(",")}|${Math.floor(n.t/3e5)}`;if(o===this.holoIds)return;this.holoIds=o,this._rows=t.length?n.stats(t,new Date(n.t).setHours(0,0,0,0),n.t+1):null;return}let e=t.join(",");if(e===this.holoIds)return;if(this.holoIds=e,clearInterval(this.holoTimer),this.holoTimer=void 0,!t.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let o=await cs(this.hass,t);this.holoIds===e&&(this._rows=o)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoBoxes=[];holoSizes=new Map;placeHolo(t,n,e,i,o,s){if(t>=this.holoCount)return this.placeWire(t-this.holoCount,n,e,i);(!this.holoBoxes.length||t<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${t}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${t}"]`),d=this._holos[t]?.kind==="main";if(!a){d&&this._holoOn&&(this._holoOn=!1);return}d&&i!==this._holoOn&&(this._holoOn=i);let c=this._holos[t],u=(this.building?.settings.roof.hologram??zt).device_min_w??0;c?.kind==="device"&&u>0&&(c.w??0)<u&&(i=!1);let h=!i;if(a.hidden!==h&&(a.hidden=h),l&&l.hasAttribute("hidden")!==h&&l.toggleAttribute("hidden",h),!i)return;if(c?.kind==="bin"){let E=Math.max(.6,o*.8),M=!!c.bin?.icon&&o*.8<.62;a.classList.contains("fp3d-holo-far")!==M&&(a.classList.toggle("fp3d-holo-far",M),this.holoSizes.delete(t)),M&&(E=1);let A=this.holoSizes.get(t),lt=performance.now();(!A||lt-A.at>2e3)&&(A={w:a.offsetWidth||90,h:a.offsetHeight||40,at:lt},this.holoSizes.set(t,A));let bt=A.w*E,kt=A.h*E,ct=e;for(let Wt=0;Wt<6;Wt++){let Z=this.holoBoxes.find(It=>n-bt/2<It.x1+3&&n+bt/2>It.x0-3&&ct-kt<It.y1+3&&ct>It.y0-3);if(!Z)break;ct=Z.y0-4}this.holoBoxes.push({i:t,x0:n-bt/2,x1:n+bt/2,y0:ct-kt,y1:ct}),a.style.transform=`translate(${n.toFixed(1)}px, ${ct.toFixed(1)}px) scale(${E.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let f=o*.8,b=34*f,y=46*f,k=n+(s?b:-b),v=e-y,p=this.holoSizes.get(t),$=performance.now();(!p||$-p.at>2e3&&!(d&&this._holoBig))&&(p={w:a.offsetWidth||184,h:a.offsetHeight||90,at:$},this.holoSizes.set(t,p));let P=p.w*f,z=p.h*f,R=s?k:k-P,q=R+P;for(let E=0;E<6;E++){let M=this.holoBoxes.find(A=>R<A.x1+4&&q>A.x0-4&&v-z<A.y1+4&&v>A.y0-4);if(!M)break;v=M.y0-6}this.holoBoxes.push({i:t,x0:R,x1:q,y0:v-z,y1:v});let W=s||(this.building?.settings.roof.hologram??zt).mirror!==!1;if(a.style.transform=W?`translate(${k.toFixed(1)}px, ${v.toFixed(1)}px) scale(${(s?f:-f).toFixed(3)}, ${f.toFixed(3)}) translate(0, -100%)`:`translate(${R.toFixed(1)}px, ${v.toFixed(1)}px) scale(${f.toFixed(3)}) translate(0, -100%)`,l){let E=l.firstElementChild,M=l.lastElementChild;E?.setAttribute("x1",n.toFixed(1)),E?.setAttribute("y1",e.toFixed(1)),E?.setAttribute("x2",k.toFixed(1)),E?.setAttribute("y2",v.toFixed(1)),M?.setAttribute("cx",n.toFixed(1)),M?.setAttribute("cy",e.toFixed(1))}}renderHologram(){let t=this._energy,n=()=>this._holos.map((o,s)=>o.kind==="bin"?this.renderBinCard(o,s):o.kind==="rack"?this.renderRackCard(o,s):w);if(this.roomId&&!(this.building?.settings.roof.hologram??zt).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return n();let e=this.floorId===null||(this.building?.floors.length??0)<=1,i=!!t&&(t.solar!==null||t.grid!==null||t.battery!==null)&&e;return this._holos.map((o,s)=>o.kind==="module"?this.renderModuleCard(o,s):o.kind==="bin"?this.renderBinCard(o,s):o.kind==="rack"?this.renderRackCard(o,s):o.kind==="car"?this.renderCarCard(o,s):o.kind==="media"?this.renderMediaCard(o,s):o.kind==="device"?this.renderDeviceCard(o,s):i?this.renderHoloCard(o,s,t):w)}renderBinCard(t,n){let e=t.bin,i=e.lines.length===1?e.lines[0]:null,o=e.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return g`<div class="fp3d-holo fp3d-holo-bin ${e.soon?"":"fp3d-holo-later"} ${i?.out?"fp3d-holo-out":""} ${i?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="note" aria-label=${o} style="--bin:${e.lines[0].color}">
      ${e.icon?g`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${e.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:w}
      ${i?g`<div class="fp3d-holo-body"><b>${i.when}</b><span>${i.name}</span></div>`:g`<div class="fp3d-holo-body fp3d-holo-lines">
            ${e.lines.map(s=>g`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(t,n){let e=this.hass,i=b=>_(e,b),o=t.car,s=!this.mediaFolded.has(o.spot),a=()=>{this.mediaFolded.has(o.spot)?this.mediaFolded.delete(o.spot):this.mediaFolded.add(o.spot),this.requestUpdate()},l=(b,y,k)=>Mt(e,b,y,{entity_id:k}),d=(b,y)=>b.startsWith("climate.")?l("climate",y?"turn_on":"turn_off",b):l("homeassistant",y?"turn_on":"turn_off",b),c=async()=>{if(!o.lock)return;let b=o.lock.startsWith("lock.");if(o.locked){if(!await this.ask(i("car_unlock_confirm")))return;b?l("lock","unlock",o.lock):l("homeassistant","turn_off",o.lock)}else b?l("lock","lock",o.lock):l("homeassistant","turn_on",o.lock)},u=o.soc===null?"#37e0ff":o.soc>=50?"#4dff80":o.soc>=20?"#ffcc40":"#ff4d40",h=!!o.lock&&/^(lock|input_boolean|switch)\./.test(o.lock),f=!!o.climate&&/^(climate|switch|input_boolean)\./.test(o.climate);return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${t.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${s?"true":"false"} @click=${a} @keydown=${ye(a)}>
            <span>🚗 ${t.name}</span><span class="fp3d-holo-live">${o.charging?`\u26A1 ${i("car_charging_short")}`:o.locked===null?"":o.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${o.soc!==null?`${Math.round(o.soc)} %`:"\u2013"}</b>
            <span>${o.range!==null?`${U(e,o.range,0)} ${o.rangeUnit}`:""}${o.charging&&o.chargingW?` \xB7 ${X(e,o.chargingW)}`:""}</span>
          </div>
          ${o.soc!==null?g`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,o.soc))}%;background:${u}"></i></div>`:w}
          ${s&&!this.ro&&(h||f||o.charge)?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${h?g`<button title=${o.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${c}>${o.locked?"\u{1F512}":"\u{1F513}"}</button>`:w}
                ${f?g`<button class=${o.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>d(o.climate,!o.climateOn)}>❄</button>`:w}
                ${o.charge?g`<button class=${o.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>d(o.charge,!o.charging)}>⚡</button>`:w}
              </div>`:w}
        </div>
      </div>`}renderModuleCard(t,n){let e=t.module,i=!this.mediaFolded.has(e.id),o=()=>{this.mediaFolded.has(e.id)?this.mediaFolded.delete(e.id):this.mediaFolded.add(e.id),this.requestUpdate()},s=f=>f?`color:${f}`:"",a=this._low||this.clientWidth<600,l=Rn(e.rows,a),d=Rn(e.cells,a),c=e.chain?Rn(e.chain.items,a):[],u=e.spark&&e.spark.values.length>1&&!(a&&e.spark.minor)?e.spark:null,h=!!(e.chain||e.cells?.length||e.status);return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${h?"fp3d-holo-mod-wide":""} ${this.cardPing===e.id?"fp3d-holo-ping":""} ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${e.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${i?"true":"false"} @click=${o} @keydown=${ye(o)}><span>${e.icon} ${e.title}</span><span class="fp3d-holo-live" style=${s(e.liveColor)}>${e.live??""}</span></div>
          ${e.status?g`<div class="fp3d-holo-status" style=${e.status.color?`--st:${e.status.color}`:""}>
                ${e.status.icon?g`<i>${e.status.icon}</i>`:w}<b>${e.status.text}</b>${e.status.since?g`<span>${e.status.since}</span>`:w}
              </div>`:w}
          ${e.main?g`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(e.main.color)}>${e.main.text}</b><span>${e.main.sub??""}</span>
                ${e.main.side?g`<em style=${s(e.main.side.color)}><b>${e.main.side.text}</b>${e.main.side.sub?g`<small>${e.main.side.sub}</small>`:w}</em>`:w}
              </div>`:w}
          ${i&&c.length?g`<div class="fp3d-holo-chain">
                  ${c.map((f,b)=>g`${b?g`<s>→</s>`:w}<div><small>${f.label}</small><b style=${s(f.color)}>${f.value}</b></div>`)}
                </div>
                ${e.chain.note?g`<div class="fp3d-holo-chain-note" style=${s(e.chain.noteColor)}>${e.chain.note}</div>`:w}`:w}
          ${i?l.map(f=>g`<div class="fp3d-holo-mrow"><span>${f.label}</span><b style=${s(f.color)}>${f.value}</b>${f.at!==void 0?f.fill?g`<i class="fp3d-holo-mrow-fill"><s style="width:${f.at}%;background:${f.color??"#37e0ff"}"></s></i>`:g`<i><em style="left:${f.at}%;background:${f.color??"#37e0ff"};color:${f.color??"#37e0ff"}"></em></i>`:g`<i class="fp3d-holo-mrow-none"></i>`}</div>`):w}
          ${i&&d.length?g`<div class="fp3d-holo-cells">${d.map(f=>g`<div><small>${f.label}</small><b style=${s(f.color)}>${f.value}</b></div>`)}</div>`:w}
          ${i&&e.hint?g`<div class="fp3d-holo-hint" style=${e.hint.color?`--hint:${e.hint.color}`:""}>${e.hint.text}</div>`:w}
          ${i?(e.lines??[]).map(f=>g`<div class="fp3d-holo-mline">${f}</div>`):w}
          ${i&&u?g`${u.label?g`<div class="fp3d-holo-spark-label">${u.label}</div>`:w}${Ll(u.values,u.color??"#ffb347")}`:w}
          ${i&&e.chips?.length?g`<div class="fp3d-holo-chips">
                ${e.chips.map(f=>g`<div class="fp3d-holo-mline">${f.title}</div>
                    <div class="fp3d-holo-chip-row">${f.items.map(b=>g`<button class=${b.on?"fp3d-holo-on":""} title=${b.title??""} @click=${()=>b.onTap()}>${b.label}</button>`)}</div>`)}
              </div>`:w}
          ${i&&!this.ro&&e.buttons?.length?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${e.buttons.map(f=>g`<button class=${f.on?"fp3d-holo-on":""} title=${f.title??""} @click=${()=>f.onTap()}>${f.label}</button>`)}</div>`:w}
        </div>
      </div>`}serviceFailed(t,n){let e=n&&typeof n=="object"&&"message"in n?String(n.message):String(n);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${t}: ${e}`},bubbles:!0,composed:!0}))}renderMediaCard(t,n){let e=this.hass,i=$=>_(e,$),o=t.media,s=!this.mediaFolded.has(o.id),a=()=>{this.mediaFolded.has(o.id)?this.mediaFolded.delete(o.id):this.mediaFolded.add(o.id),this.requestUpdate()},l=($,P={})=>Mt(e,"media_player",$,{entity_id:o.id,...P}),d={down:$=>$.currentTarget.dataset.pressed=String($.pointerId),up:$=>P=>{let z=P.currentTarget;z.dataset.pressed===String(P.pointerId)&&(delete z.dataset.pressed,P.stopPropagation(),z.dataset.acted=String(Date.now()),$())},key:$=>P=>{let z=P.currentTarget;Date.now()-Number(z.dataset.acted??0)<700||(z.dataset.acted=String(Date.now()),$())}},c=e.states[o.id]?.attributes.supported_features,u=$=>typeof c!="number"||(c&$)!==0,h=this.mediaIntent.get(o.id);h&&(h.playing===o.playing||Date.now()-h.at>3e4)&&this.mediaIntent.delete(o.id);let f=this.mediaIntent.get(o.id)?.playing??o.playing,b=u(16384)||u(1),y=()=>{this.mediaIntent.set(o.id,{playing:!f,at:Date.now()}),this.requestUpdate(),l(f?"media_pause":u(16384)?"media_play":"media_play_pause")},k=this.mediaVolume.get(o.id);k&&(Math.abs(k.v-o.volume)<=2||Date.now()-k.at>3e4)&&this.mediaVolume.delete(o.id);let v=this.mediaVolume.get(o.id)?.v??o.volume,p=($,P)=>{this.mediaVolume.set(o.id,{v:$,at:Date.now()}),this.requestUpdate(),(P||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:$/100}))};return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="group" aria-label=${t.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" aria-expanded=${s?"true":"false"} @click=${a} @keydown=${ye(a)}><span>${o.tv?"\u25AD":"\u266A"} ${t.name}</span><span class="fp3d-holo-live">${o.off?i("state_off"):f?`\u25CF ${i("holo_media_playing")}`:o.tv?"":i("holo_media_paused")}</span>${o.tv&&!this.ro?g`<button class="fp3d-holo-hide" title=${i("tv_hide")} aria-label=${i("tv_hide")} @click=${$=>{$.stopPropagation(),this.hideTvCard(o.id)}} @keydown=${$=>$.stopPropagation()}>✕</button>`:w}</div>
        <div class="fp3d-holo-track">
          ${o.picture?g`<img class="fp3d-holo-cover" src=${o.picture} alt="" />`:g`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${o.title}</b>${o.artist?g`<span>${o.artist}</span>`:w}</div>
        </div>
        ${s&&!this.ro&&o.off?g`<div class="fp3d-holo-media-controls"><button aria-label=${i("tv_on")} title=${i("tv_on")} @click=${()=>l("turn_on")}>⏻</button></div>`:w}
        ${s&&!this.ro&&!o.off?g`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!u(16)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_previous_track"))} @click=${d.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${f?!u(1):!b} @pointerdown=${d.down} @pointerup=${d.up(y)} @click=${d.key(y)}>${f?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!u(32)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_next_track"))} @click=${d.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(v)}
                  aria-label=${i("volume")}
                  @input=${$=>p(Number($.target.value),!1)}
                  @change=${$=>p(Number($.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${v} %</span>
              </div>`:w}
      </div>
    </div>`}rackHolos(t,n){let e=[];if(!this.rackCards)return e;let i=(n.settings.roof.hologram??zt).size*.7;for(let o of n.floors)for(let s of o.furniture){let a=s.rack?.slots;if(!a?.length)continue;let l=Fn(t,a,s.rack?.card?.metrics);if(!l.length)continue;let d=o.elevation+ot(o,s)+s.h,c=Object.fromEntries(a.map(u=>[u.id,u.name||et(t,u.type)]));e.push({anchor:{p:[s.x,d+.15,s.z],n:[0,1,0],floorId:o.id,size:i,roof:!1,views:"all",room:ci(o,s.x,s.z)},card:{kind:"rack",name:s.name||et(t,s.type),w:null,dayIds:[],battery:null,rack:{id:s.id,values:l,names:c}}})}return e}spokenRacks(t,n){let e=[];for(let i of n.floors){let o=vt(i);for(let s of i.furniture){let a=s.rack?.slots;if(!a?.length)continue;let l=Fn(t,a,s.rack?.card?.metrics),d=Fn(t,a,[ve,re]).filter(u=>!l.some(h=>h.key===u.key)),c=o.find(u=>u.points.length>=3&&J([s.x,s.z],u.points));e.push({id:s.id,name:s.name||et(t,s.type),room:c?.name??"",names:Object.fromEntries(a.map(u=>[u.id,u.name||et(t,u.type)])),values:[...l,...d].map(u=>({key:u.key,kind:u.kind,slot:u.slot,label:this.rackValueLabel(u),text:this.rackValueText(u),value:u.value,of:u.of}))})}}return e}toggleRackCard(t){this.rackOpen.delete(t)||this.rackOpen.add(t),this.watchRackSpark(),this.requestUpdate()}rackSparkIds(){let t=this._holos.filter(n=>n.rack&&this.rackOpen.has(n.rack.id)).flatMap(n=>n.rack.values.flatMap(e=>e.ids));return[...new Set(t)]}watchRackSpark(){let t=this.rackSparkIds(),n=this.replay,e=n?`tt|${t.join(",")}|${Math.floor(n.t/3e5)}`:t.join(",");if(!(e===this.rackSparkKey&&(n||Date.now()-this.rackSparkAt<3e5))){if(this.rackSparkKey=e,!t.length){this._rackRows=null;return}if(n){this._rackRows=n.stats(t,n.t-Wl,n.t+1);return}!this.hass||globalThis.document?.hidden||(this.rackSparkAt=Date.now(),il(this.hass,t,Wl).then(i=>{this.rackSparkKey===e&&(this._rackRows=i)}))}}rackValueText(t){let n=this.hass;if(t.key===re)return t.text;if(t.value===null)return t.key===ve?"\u2013":at(n,n.states[t.key]);if(t.kind==="runtime"&&/^(s|min|h)$/.test(t.unit)){let i=t.value*(t.unit==="s"?.016666666666666666:t.unit==="h"?60:1);return i<120?`${Math.round(i)} min`:`${U(n,i/60,1)} h`}let e=Number.isInteger(t.value)?0:Math.abs(t.value)<10?2:1;return`${U(n,t.value,e)}${t.unit?` ${t.unit}`:""}`}rackValueLabel(t){let n=this.hass;return t.key===ve?_(n,"rack_card_hottest"):t.key===re?_(n,"rack_card_online"):t.kind==="other"?L(n,t.key):_(n,`rack_kind_${t.kind}`)}renderRackCard(t,n){let e=t.rack,i=this.rackOpen.has(e.id),o=e.values.find(u=>u.key===re),s=!!o&&o.value===o.of,a=e.values.filter(u=>u!==o),l=()=>this.toggleRackCard(e.id),d=u=>{u.key!=="Enter"&&u.key!==" "||(u.preventDefault(),l())},c=u=>{let h=ol(this._rackRows,u);return h.length>1?Ll(h,u.kind==="temperature"?"#ffb86b":u.kind==="battery"?"#4dff80":"#7fe8ff"):w};return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-rack ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-expanded=${i?"true":"false"} aria-label=${t.name} @click=${l} @keydown=${d}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head"><span>▤ ${t.name}</span>${o?g`<span class="fp3d-holo-live" style="color:${s?Dn.online:Dn.warning}" title=${this.rackValueLabel(o)}>● ${o.text}</span>`:w}</div>
          ${i?g`<div class="fp3d-rack-card-grid">
                ${a.map(u=>g`<div class="fp3d-rack-card-row">
                    <span>${this.rackValueLabel(u)}${u.slot?g`<small>${e.names[u.slot]??""}</small>`:w}</span><b>${this.rackValueText(u)}</b>
                    ${c(u)}
                  </div>`)}
              </div>`:g`<div class="fp3d-holo-cells">${a.slice(0,4).map(u=>g`<div><small>${this.rackValueLabel(u)}</small><b>${this.rackValueText(u)}</b></div>`)}</div>`}
        </div>
      </div>`}renderDeviceCard(t,n){let e=this.hass,i=d=>_(e,d),o=!this.holoFolded.has(n),s=this.dayOf(t),a=s&&s.curve.length>1?xo(s.curve,s.peak):null,l=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()};return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${o?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${n} hidden role="button" tabindex="0" aria-expanded=${o?"true":"false"} aria-label=${t.w===null?t.name:`${t.name}: ${X(e,t.w)}`} @click=${l} @keydown=${ye(l)}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${t.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${X(e,t.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${o&&s?g`<div class="fp3d-holo-sub">${i("holo_today")} <b>${U(e,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${X(e,s.peak)}</b></div>`:w}
        ${o&&a?Ft`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${n})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:w}
      </div>
    </div>`}dayOf(t){if(!this._rows||!t.dayIds.length)return null;let n=Object.fromEntries(t.dayIds.filter(e=>this._rows[e]).map(e=>[e,this._rows[e]]));return Object.keys(n).length?ds(n,new Date(this.now()),Object.fromEntries(Object.keys(n).map(e=>[e,this.hass?.states[e]?.attributes.unit_of_measurement]))):null}growHolo(t,n,e=!1){if(clearTimeout(this.holoBigTimer),this.holoBigTimer=void 0,t&&!this._holoBig){let i=this.renderRoot?.querySelector(`.fp3d-holo[data-holo="${n}"]`);i?.offsetWidth&&this.holoSizes.set(n,{w:i.offsetWidth,h:i.offsetHeight,at:performance.now()}),this.loadSolarMore()}t!==this._holoBig&&(this._holoBig=t),t&&e&&(this.holoBigTimer=setTimeout(()=>this.growHolo(!1,n),kc))}async loadSolarMore(){let t=this.hass;if(!(!t||this.replay||this.solarMoreLoading||this._solarMore&&Date.now()-this._solarMore.at<_c)){this.solarMoreLoading=!0;try{let n=zl(await t.callWS({type:"energy/get_prefs"}).catch(()=>null)),e=[...n.solar,...n.export],[i,o]=await Promise.all([n.forecast.length?t.callWS({type:"energy/solar_forecast"}).catch(()=>null):null,e.length?yo(t,e):null]);this._solarMore={at:Date.now(),prefs:n,forecast:i,change:o}}finally{this.solarMoreLoading=!1}}}solarMore(t){let n=this.replay?null:this._solarMore,e=s=>n?.change&&s.length?s.reduce((a,l)=>a+(n.change.get(l)??0),0):null,i=n?Hl(n.forecast,n.prefs.forecast,new Date(this.now())):null,o=(n?e(n.prefs.solar):null)??t?.kwh??null;return{forecast:i,produced:o,rows:Cl({forecast:i,produced:o,exported:n?e(n.prefs.export):null})}}renderHoloCard(t,n,e){let i=this.hass,o=E=>_(i,E),s=this.dayOf(t),a=t.kind==="main",l=a&&this._holoBig,d=l||!this.holoFolded.has(n),c=l&&e.solar!==null?this.solarMore(s):null,u=a&&e.grid!==null&&e.consumption!==null&&e.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,e.grid)/e.consumption)*100))):null,h=c?.forecast?.hours??null,f=Math.max(s?.peak??0,...h??[0]),b=s&&s.curve.length>1?xo(s.curve,f):null,y=h&&f>0?Dl(h,f):null,k=new Date(this.now()),v=(k.getHours()+k.getMinutes()/60)/24*220,p=()=>{this.holoFolded.has(n)?this.holoFolded.delete(n):this.holoFolded.add(n),this.requestUpdate()},$=()=>{if(!a)return p();let E=this.holoPress;if(this.holoPress="",E!=="mouse")return this.growHolo(!this._holoBig,n,!0);p(),this._holoBig&&(this.holoHoverOff=!0,this.growHolo(!1,n))},P=E=>{a&&E.pointerType==="mouse"&&!this.holoHoverOff&&this.growHolo(!0,n)},z=E=>{!a||E.pointerType!=="mouse"||(this.holoHoverOff=!1,this.growHolo(!1,n))},R=ye($),q=a?e.solar??e.consumption??0:t.w??0,W=a?e.battery!==null||e.soc!==null?{soc:e.soc,w:e.battery}:null:t.battery;return g`<svg class="fp3d-holo-link" data-holo=${n} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div
        class="fp3d-holo ${d?"":"fp3d-holo-min"} ${l?"fp3d-holo-grown":""} ${this._low?"fp3d-holo-plain":""}"
        data-holo=${n}
        hidden
        role="button"
        tabindex="0"
        aria-label=${`${t.name}: ${X(i,q)}`}
        aria-expanded=${String(a?l:d)}
        @click=${$}
        @keydown=${R}
        @pointerdown=${E=>this.holoPress=E.pointerType}
        @pointerenter=${P}
        @pointerleave=${z}
      >
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${t.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${o("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${X(i,q)}</b><span>${o(a&&e.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${d?g`${a&&this._plants.length>1?g`<div class="fp3d-holo-plants">${this._plants.map(E=>g`<span>${E.name}</span><b>${X(i,E.w)}</b>`)}</div>`:w}
              ${s?g`<div class="fp3d-holo-sub">${o("holo_today")} <b>${U(i,s.kwh,1)} kWh</b> · ${o("holo_peak")} <b>${X(i,s.peak)}</b></div>`:c?.produced!=null?g`<div class="fp3d-holo-sub">${o("holo_today")} <b>${U(i,c.produced,1)} kWh</b></div>`:w}
              ${b||y?Ft`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${n}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    ${y?Ft`<path class="fp3d-holo-fc" d="${y}" fill="none" stroke="#aee9ff" stroke-width="1.5" stroke-dasharray="3 3"/>`:w}
                    ${b?Ft`<path d="${b.area}" fill="url(#fp3dHoloG${n})"/>
                          <path d="${b.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                          <circle cx="${b.endX}" cy="${b.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>`:w}
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${v}" y1="2" x2="${v}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:w}
              ${y?g`<div class="fp3d-holo-legend"><span class="fp3d-holo-legend-act">${o("holo_actual")}</span><span class="fp3d-holo-legend-fc">${o("holo_forecast")}</span></div>`:w}
              ${c?.rows.length?g`<div class="fp3d-holo-more">
                    ${c.rows.map(E=>E.key==="self_use"?g`<div class="fp3d-holo-more-row"><span>${o("holo_self_use")}</span><b>${U(i,E.self,1)} kWh</b></div>
                            <div class="fp3d-holo-more-row"><span>${o("holo_exported")}</span><b>${U(i,E.exported,1)} kWh</b></div>
                            <div class="fp3d-holo-split" title="${E.share} %"><div style="width:${E.share}%"></div></div>`:g`<div class="fp3d-holo-more-row"><span>${o(E.key==="forecast_rest"?"holo_fc_rest":"holo_fc_tomorrow")}</span><b>${U(i,E.kwh,1)} kWh</b></div>`)}
                  </div>`:w}
              <div class="fp3d-holo-grid">
                ${W?g`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${o("holo_battery")}<br /><b>${W.soc!==null?`${Math.round(W.soc)} %`:X(i,Math.abs(W.w??0))}</b>
                      ${W.w!==null&&Math.abs(W.w)>=5?g`<span>${W.w<0?"\u25B2":"\u25BC"} ${X(i,Math.abs(W.w))}</span>`:w}
                    </div>`:w}
                ${a&&e.grid!==null?g`<div class="fp3d-holo-cell ${e.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${o("holo_grid")}<br /><b>${X(i,Math.abs(e.grid))}</b> <span>${Math.abs(e.grid)<5?"":o(e.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:w}
                ${a&&e.consumption!==null?g`<div class="fp3d-holo-cell fp3d-holo-house">${o("holo_house")}<br /><b>${X(i,e.consumption)}</b></div>`:w}
                ${a&&this._wallboxW!==null?g`<div class="fp3d-holo-cell fp3d-holo-wb">${o("holo_wallbox")}<br /><b>${X(i,this._wallboxW)}</b></div>`:w}
              </div>
              ${a&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?g`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?g`<span>🔥 ${o("holo_gas")} <b>${U(i,this._meters.gas,this._meters.gas<10?2:1)} ${Ol(i,this.building?.energy.gas)}</b></span>`:w}
                    ${this._meters.water!==null?g`<span>💧 ${o("holo_water")} <b>${xc(i,this._meters.water,Ol(i,this.building?.energy.water))}</b></span>`:w}
                    <span>${o("holo_today_short")}</span>
                  </div>`:w}
              ${u!==null?g`<div class="fp3d-holo-bar"><div style="width:${u}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${o("holo_autarky")}</span><b>${u} %</b></div>`:w}`:w}
      </div>
    </div>`}setAlerts(t){let n=t.map(s=>`${s.kind}:${s.entity}`),e=this.ro?[]:t.filter((s,a)=>!this.seenAlerts.has(n[a]));this.ro||(this.seenAlerts=new Set(n)),n.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=t);let i=t.some(s=>!s.quiet&&s.kind!=="water");if(i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!e.length)return;let o=this.directorSettings();if(o?.alerts){let s=e[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),o.hold??30)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(e[0])}tidySnoozes(t,n,e){if(this.ro||!this.mayEdit)return;let i=da(t.settings.alert_snoozed,n).filter(s=>e||sa.has(s.kind));if(!i.length)return;let o=new Set(i.map(Co));this.setPlanSettings({alert_snoozed:(t.settings.alert_snoozed??[]).filter(s=>!o.has(Co(s)))})}dismiss(t,n){let e=this.building;this._dismissing=null,!(!e||!this.mayEdit)&&(this.setPlanSettings(ca(e.settings,t,n,Date.now())),this.setAlerts(this._alerts.filter(i=>xt(i)!==xt(t))),this.applyTint())}directorSettings(){let t=this.building?.settings.director;return this.director&&!this.ro&&$s(t)?t:null}direct(){let t=this.directorSettings(),n=this.hass,e=this.building;if(!t||!n||!e){this.directorSrc&&(this.directing=new ko,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let i=Date.now(),o=t.hold??30,s=`${JSON.stringify(t)}|${e.floors.map(d=>d.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==n.entities||this.directorSrc.building!==e||this.directorSrc.sig!==s){let d=[...new Set(e.floors.flatMap(u=>u.placements.map(h=>h.entity_id)))],c=t.motion??"off";this.directorSrc={registry:n.entities,building:e,sig:s,bells:(t.doorbell?Ss(n,t.doorbell_entity):[]).map(u=>({id:u,camera:Ts(n,u,d,t.doorbell_camera)})),motion:c==="off"?[]:d.filter(u=>u.startsWith("camera.")).flatMap(u=>jt(n,u).filter(h=>c==="all"||mo(n,h)==="person").map(h=>({sensor:h,cam:u})))}}let a=[];for(let d of this.directorSrc.bells)this.directing.edge(d.id,n.states[d.id],(c,u)=>Ms(c,u,i))&&a.push({kind:"doorbell",key:`bell:${d.id}`,entity:d.id,camera:d.camera});for(let d of t.triggers??[])d.entity&&this.directing.edge(`trigger:${d.entity}`,n.states[d.entity],(c,u)=>Is(c,u,i))&&a.push({kind:"trigger",key:`trigger:${d.entity}`,entity:d.entity,camera:d.camera});for(let d of this.directorSrc.motion)this.directing.edge(d.sensor,n.states[d.sensor],(c,u)=>c?.state==="off"&&u?.state==="on")&&a.push({kind:"motion",key:`cam:${d.cam}`,entity:d.sensor,camera:d.cam});if(t.appliances){for(let[d,c]of this.appliances)this.directing.stopped(`app:${d}`,c.running,i)&&a.push({kind:"appliance",key:`app:${d}`,entity:d});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((d,c)=>l.indexOf(d.kind)-l.indexOf(c.kind));for(let d of a)if(this.directing.offer(d,i,o)){this.directorShow(()=>this.directorGo(d));break}}directorShow(t){let n=this.viewer;if(!n)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:n.getView()}),n.setAutoOrbit(0),t(),clearTimeout(this.directorTimer);let e=this.directing.current;e&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,e.until-Date.now())+50))}directorGo(t){let n=this.building;if(n){if(t.camera&&n.floors.some(e=>e.placements.some(i=>i.entity_id===t.camera))){let e=t.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(e),250)):this.lookThrough(e);return}if(t.kind==="appliance"){let e=this.appliances.get(t.key.slice(4));e&&this.goTo({kind:"device",name:"",where:"",floorId:e.floorId,roomId:null,entity:e.entity,icon:null,x:e.x,z:e.z,y:1});return}this.showEntity(t.entity)}}directorDue(){let t=this.directing.due(Date.now()),n=this.directorBack;t&&(this.directorBack=null,!(!t.back||!n)&&(this._through&&(this._through=null),this.floorId!==n.floorId&&this.fire("floor-tap",{floorId:n.floorId}),n.roomId?setTimeout(()=>this.fire("room-tap",{floorId:n.floorId,roomId:n.roomId}),60):this.roomId&&n.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:n.floorId,roomId:null}),60),setTimeout(()=>{this.viewer?.flyTo(n.view),this.viewer?.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(t){if(!t.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60)}onRoomDoubleTap(t,n){let e=this.building,i=this.hass,o=e?.floors.find(c=>c.id===t),s=o?vt(o).find(c=>c.id===n):void 0;if(!e||!i||!o||!s||this.ro)return;let a=new Set(yt(i,s.area_id).filter(c=>O(c)==="light"));for(let c of o.placements)O(c.entity_id)==="light"&&J([c.x,c.z],s.points)&&a.add(c.entity_id);for(let c of o.furniture){let u=this.furnitureLinks.get(c.id)?.entity;u&&oo(c.type)&&J([c.x,c.z],s.points)&&a.add(u)}let l=[...a].filter(c=>!this.confirmSet.has(c));if(!l.length)return;let d=l.some(c=>i.states[c]?.state==="on");Mt(i,"homeassistant",d?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:n,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(t){this.ro||(Mt(this.hass,t.split(".")[0],"turn_on",{entity_id:t}),this._sceneFired=t,setTimeout(()=>this._sceneFired=null,600))}applyMotion(){let t=this.viewer,n=this.building,e=this.hass;if(clearTimeout(this.motionTimer),this.motionTimer=void 0,!t||!n||!e)return;let i=this.now(),o=Or(e,n,i);t.setRoomGlow(o.rooms),o.next!==null&&!this.replay&&(this.motionTimer=setTimeout(()=>this.applyMotion(),Math.max(50,o.next-i+20)))}applyTint(){let t=this.viewer,n=this.building,e=this.hass;if(!t||!n||!e)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=ma(e,n,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([d,c])=>[d,fa(a,c)]))}let o=new Map;if(this.heatMode==="values")for(let a of n.floors)for(let l of vt(a)){let d=qt(e,a,l,"temperature"),c=qt(e,a,l,"humidity"),u=qt(e,a,l,"co2"),h=[d!==null?`${U(e,Jt(e,d),1)} ${le(e)}`:null,c!==null?`${U(e,c,0)} %`:null,u!==null?`${U(e,u,0)} ppm`:null].filter(f=>!!f);h.length&&o.set(l.id,h.join(" \xB7 "))}if(t.setRoomInfo(o),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let d=l.kind==="water"?1:a,c=ra(l).map(u=>u*d);if(l.roomId)i.set(l.roomId,c);else for(let u of n.floors)if(!l.floorId||u.id===l.floorId)for(let h of u.rooms)i.set(h.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(d=>d.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,t.setRoomTint(i))}furnitureMarkers(t,n,e,i){let o=[],s=[],a=new Map,l,d=new Map,c=new Set(e),u=[];this.binHolos=[],this.binSpots=new Map,this.binCues=[],this.printerCams.clear();let h=new Map(this.scene.filter(v=>v.kind==="glow").map(v=>[v.furnitureId,v]));for(let v of n.floors)for(let p of v.furniture){let $=this.furnitureLinks.get(p.id),P=this.stateFaces(t,p);if(P.length&&a.set(p.id,{color:P[0].color,level:P[0].level,faces:P}),oo(p.type)){let I=this.lampMarker(t,v,p,$?.entity??null);o.push(I);let N=p.type==="lamp_fan"&&p.fan&&p.fan!=="none"?p.fan:null;if(N&&!e.has(N)){e.add(N);let tt=t.states[N],Dt=p.rotation*Math.PI/180,Ct=Math.min(.45,p.w*.3);o.push({id:N,floorId:v.id,roomId:I.roomId,x:p.x+Math.cos(Dt)*Ct,z:p.z+Math.sin(Dt)*Ct,y:I.y,icon:p.icon?Zt(p.icon):Ce("fan"),name:L(t,N),text:tt&&uo(tt)>0&&typeof tt.attributes.percentage=="number"?`${Math.round(tt.attributes.percentage)} %`:tt?at(t,tt):"",active:tt?$t(tt):!1,unavailable:tt?Q(tt):!1,glow:null,furnitureId:p.id,show:p.marker??"always",fromFurniture:!0})}continue}if(Ui.has(p.type)){let I=this.techItem(t,v,p,a,e);I&&(o.push(I),d.set(p.id,I.id));continue}if(Ki.has(p.type)){let I=this.gangItem(t,v,p,s,a,i);I&&(o.push(I),d.set(p.id,I.id));continue}let z=h.get(p.id);z&&a.set(p.id,{color:z.color,level:z.level});let R=(p.type==="plant"||Mo(p.type))&&!!p.moisture&&p.moisture!=="none";if(p.type==="waste_bin"||p.type==="mailbox"||R){let I=this.householdState(t,v,p);I?.screen&&a.set(p.id,I.screen),I?.marker&&o.push(I.marker);let N=p.type==="waste_bin"?p.bin_source:p.type==="mailbox"?p.entity:p.moisture;if(typeof N=="string"&&N!=="none"&&d.set(p.id,`hh:${N}#${p.id}`),I?.item&&u.push(I.item),!R)continue}let q=ta(p,t);q.length&&!a.has(p.id)&&a.set(p.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let I of q){let N=p.name||et(t,p.type);u.push({icon:"wrench-outline",text:I===p.service?_(t,"hh_service",{name:N}):_(t,"hh_service2",{name:N,what:L(t,I)}),entity:I})}(p.type==="fridge"||p.type==="fridge_smart")&&kn(p,t)&&(a.set(p.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),u.push({icon:"fridge-alert-outline",text:_(t,"hh_fridge_open",{name:p.name||et(t,p.type)}),entity:Ut(p)[0]??null}));let E=p.type==="parking"&&!!p.car?He(t,p):null,M=p.type==="washer"||p.type==="dryer"||p.type==="dishwasher",A=nt(p.type)==="home_battery"?p.soc:nt(p.type)==="wallbox"?p.status:p.type==="parking"&&E?p.car?.device??E.entities.soc:M?p.remaining??null:null,lt=A&&A!=="none"?A:null,bt=nt(p.type)==="home_battery"?is(t,n,v.id,p,l??=wo(t,n,[],ue(n))):null;if(bt){let I=ha(bt.soc);a.set(p.id,{color:Oo.green,level:.9,faces:I.map((N,tt)=>({part:"charge",index:tt,of:ua,color:N?Oo[N]:pa,level:N?.9:.15}))})}let kt=p.extra&&p.extra!=="none"&&t.states[p.extra]?p.extra:null,ct=Nr(t,n,p),Wt=ct&&ct.sensor!==kt&&ct.sensor!==$?.entity?`${U(t,Jt(t,ct.celsius),0)} ${le(t)}`:"",Z=[kt?at(t,t.states[kt]):"",Wt].filter(Boolean).join(" \xB7 "),It=I=>Z?I?`${I} \xB7 ${Z}`:Z:I,Y=$??(lt||kt||ct?{entity:null,power:null}:void 0);if(!Y)continue;let Et=nt(p.type)==="home_battery"?lt??Y.entity??Y.power:Y.entity??Y.power??lt??kt;d.set(p.id,Et);let H=Y.entity?t.states[Y.entity]:void 0,je=nt(p.type)==="meter"?n.energy.grid_invert&&!p.export:nt(p.type)==="home_battery"?n.energy.battery_invert&&!p.charge:!1,G=Y.power?wt(t.states[Y.power],je):null,ut=nt(p.type)==="home_battery"&&p.charge&&p.charge!=="none"?p.charge:nt(p.type)==="meter"&&p.export&&p.export!=="none"?p.export:null,we=ut?wt(t.states[ut]):null;if(we!==null&&(G=Math.max(0,G??0)-Math.max(0,we)),Y.power&&G!==null&&rs(p.type)&&!i.has(Y.power)){i.add(Y.power);let I=p.circuit&&p.circuit!=="none"?p.circuit:void 0,N=p.energy??void 0;s.push({id:Et,powerEntity:Y.power,floorId:v.id,x:p.x,z:p.z,power:Math.max(0,G),wallbox:nt(p.type)==="wallbox"||void 0,circuit:I,...N?{energy:N}:{}})}let xe=typeof p.run_w=="number"&&p.run_w>0?p.run_w:10,gt=typeof p.run_w=="number"&&p.run_w>0&&G!==null&&G<=p.run_w,Ht=(G??0)>xe||H?.state==="on"||H?.state==="running"||an(H)&&$t(H);M&&this.appliances.set(p.id,{floorId:v.id,x:p.x,z:p.z,entity:Y.entity??Y.power??p.id,running:Ht});let Nt=null;if(M){let I=p.remaining&&p.remaining!=="none"?t.states[p.remaining]:void 0,N=Ro(I),tt=Ht||!Y.power&&!Y.entity&&(N??0)>0,Dt=Ut(p),Ct=Ue=>Dt.some(Ge=>{let Ye=t.states[Ge];return!!Ye?.last_changed&&Date.parse(Ye.last_changed)>Ue}),Kn=this.finished.update(p.id,tt,Ct),Se=p.name||(Y.entity?L(t,Y.entity):et(t,p.type));tt?(Ht||a.set(p.id,jl(p.type)),N!==null&&!zo(H,Y.power?G:null,xe)&&(Nt=_(t,"hh_left",{t:Qs(N)}),u.push({icon:"timer-outline",text:`${Se}: ${Nt}`,entity:p.remaining??Y.entity}))):(Ao(H)||Ao(I)||Kn)&&(Nt=_(t,"hh_done"),a.set(p.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),u.push({icon:"check-circle-outline",text:_(t,"hh_finished",{name:Se}),entity:Y.entity??Y.power}))}if(E&&fe(t,p)){let I=[];if(E.soc!==null){let N=E.soc>=50?[.3,1,.5]:E.soc>=20?[1,.8,.25]:[1,.3,.25];I.push({part:"band",color:N,level:E.charging?1:.6})}if(E.locked===!1&&I.push({part:"lights",color:[1,.42,.02],level:1}),E.climateOn){let N=E.entities.climate?t.states[E.entities.climate]:void 0,tt=!!N&&(N.attributes.hvac_action==="cooling"||N.state==="cool");I.push({part:"cabin",color:tt?[.45,.8,1]:[1,.55,.22],level:.35})}I.length&&a.set(`${p.id}:vehicle`,{color:I[0].color,level:I[0].level,faces:I})}if(ct?.kind==="radiator"){let I=H&&O(H.entity_id)==="climate"?H.attributes:null,N=so(t,p.heat_sensor)??(!!I&&$t(H)&&I.hvac_action!=="cooling");a.set(p.id,{color:ct.color,level:N?.9:.55,shade:!0})}else if(ct?.kind==="tank"){let I=fo(n),N=Lr(ct.celsius-.3*(I.tank_hot-I.tank_cold),I.tank_cold,I.tank_hot);a.set(p.id,{color:N,level:.8,shade:!0,faces:[{part:"strata",color:N,top:ct.color,level:.8}]})}else if(Oi(p.type)&&(H&&O(H.entity_id)==="climate"||p.heat_sensor)){let I=H&&O(H.entity_id)==="climate"?H.attributes:null;if(so(t,p.heat_sensor)??(!!I&&$t(H)&&I.hvac_action!=="cooling")){let tt=I&&typeof I.temperature=="number"&&typeof I.current_temperature=="number"?I.temperature-I.current_temperature:1;a.set(p.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,tt))})}else h.has(p.id)&&a.delete(p.id)}else if(p.type==="ac_unit"&&H&&O(H.entity_id)==="climate"){let I=ir(H);I&&a.set(p.id,I)}else if((p.type==="washer"||p.type==="dryer"||p.type==="dishwasher")&&Ht)a.set(p.id,jl(p.type));else if(p.type==="stove"||to(p.type)){let I=or(H,Ht);I>0&&a.set(p.id,{color:[1,.05,.01],level:I,faces:[{part:"burners",color:[1,.05,.01],level:I}]})}let ke=At(p.type),_e=!!ke&&!ke.light&&ke.parts.some(I=>I.glow);if(H&&_e&&O(H.entity_id)==="media"&&H.state==="playing"&&!ln(p.type)){let I=typeof H.attributes.volume_level=="number"?H.attributes.volume_level:.5;a.set(p.id,{color:po(H)??[.22,.88,1],level:.5+.5*I,ring:!0,plain:!0})}if(H&&ln(p.type)&&!to(p.type)&&!(Hi(p.type)&&O(H.entity_id)==="cover")){let I=O(H.entity_id)==="light"?Xt(H):null,N=O(H.entity_id)==="media"&&["playing","on","paused","idle"].includes(H.state),tt=O(H.entity_id)==="media"?po(H):I?I.color:$t(H)||N?[.22,.88,1]:null,Dt=O(H.entity_id)==="media"?H.attributes.entity_picture??null:null;tt&&a.set(p.id,{color:tt,level:H.state==="playing"?1:.6,picture:Dt,ring:Fi(p.type)||_e&&H.state==="playing"})}let Bt=Bn(p.type)?kl(t,Y.entity):null;if(Bt){let I=_l(Bt);I.length&&a.set(p.id,{color:I[0].color,level:I[0].level,faces:I}),Bt.camera&&this.printerCams.set(Et,Bt.camera)}let $e=Bt?.progress!=null?` \xB7 ${Math.round(Bt.progress*100)} %`:"";if(c.has(Et))continue;e.add(Et);let Ke=Y.entity?O(Y.entity):null,_t=v.rooms.find(I=>I.points.length>=3&&J([p.x,p.z],I.points)),Gt=H&&Ci(p.type)&&H.entity_id.startsWith("water_heater.")?Ac(t,H):null;o.push({id:Et,floorId:v.id,roomId:_t?.id??null,x:p.x,z:p.z,y:Hc(p)+ot(v,p),icon:p.icon?Zt(p.icon):Gt?Zt("water-boiler"):Ce(Ke??"switch"),name:p.name||(Y.entity?L(t,Y.entity):et(t,p.type)),ownName:p.name||void 0,showName:!!p.show_name,text:It(Nt??(E?this.carText(t,E,!!H&&!Mn.has(H.state.toLowerCase())):nt(p.type)==="home_battery"?this.batteryText(t,lt,G,bt&&!bt.own?bt.soc:null):nt(p.type)==="wallbox"?this.wallboxText(t,lt,G):nt(p.type)==="meter"?this.meterText(t,G):Gt?Gt.text:H?at(t,H)+$e:gt?_(t,"pin_standby"):G!==null?X(t,Math.max(0,G)):"")),active:Nt?!0:E?E.charging:Gt?Gt.on:H?$t(H):(G??0)>(typeof p.run_w=="number"&&p.run_w>0?p.run_w:5),unavailable:H?Q(H):!1,glow:null,furnitureId:p.id,energyDevice:nt(p.type)==="inverter"||nt(p.type)==="home_battery"||nt(p.type)==="wallbox"||nt(p.type)==="meter"||!!E||!!kt||!!ct,...gt?{standby:gt}:{},show:p.marker??(E||Nt?"always":void 0),fromFurniture:!0})}let f=n.settings.household;if(f?.bin_next_only||typeof f?.bin_days=="number"){let v=Gs(this.binHolos.filter(p=>!p.icon),{nextOnly:f.bin_next_only,ahead:f.bin_days});this.binHolos=this.binHolos.filter(p=>p.icon||v.has(p.id))}let b=n.settings.household?.notes,y=b&&b!=="none"?t.states[b]:void 0;if(y&&!Q(y)&&y.state.trim()){let v=y.state.split(/\s*(?:\||\n|;)\s*/).map(p=>p.trim()).filter(Boolean).slice(0,8);u.unshift(...v.map(p=>({icon:"pin-outline",text:p,entity:b})))}this._household=u.filter((v,p)=>u.findIndex($=>$.text===v.text)===p),this.cameraScreens=0;let k=lo(t,n.floors);for(let v of n.floors)for(let p of v.furniture){if(!p.pictures?.length||!ln(p.type)||p.type==="fridge_smart"&&k.get(p.id)?.right)continue;let $=p.pictures.find(R=>dr(t,R));if(!$)continue;let P=this.pictureUrl($.image),z=p.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];P&&a.set(p.id,{color:z,level:1,picture:P,plain:!0})}for(let v of h.values())v.top?a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"strata",color:v.color,top:v.top,level:v.level}]}):v.band&&a.set(v.furnitureId,{color:v.color,level:v.level,faces:[{part:"band",color:v.color,level:v.level}]});return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:o,consumers:s,screens:a,targets:d}}watchHousehold(t,n){let i=n.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox").length>0&&!this.replay,o=i?Bs(n.floors):[],s=o.join(",");if(!i){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let a=async()=>{o.length&&(this.pickups=await To(this.hass??t,o)),this.syncDevices(!0)};(s!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=s,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void a(),6e5),o.length&&To(t,o).then(l=>{this.pickups=l,this.syncDevices(!0)}))}gangItem(t,n,e,i,o,s){let a=rn(e),l=e.type==="wall_socket",d=[],c=0,u=0,h=null,f=!1;if(a.forEach((P,z)=>{let R=P.entity&&P.entity!=="none"?P.entity:null,q=P.power&&P.power!=="none"?P.power:null;if(!R&&!q)return;u++;let W=R?t.states[R]:void 0,E=q?wt(t.states[q]):null;if(q&&E!==null&&(h=(h??0)+Math.max(0,E),s.has(q)||(s.add(q),i.push({id:R??q,powerEntity:q,floorId:n.id,x:e.x,z:e.z,power:Math.max(0,E),circuit:e.circuit&&e.circuit!=="none"?e.circuit:void 0}))),W&&!Q(W)&&(f=!0),!(W?$t(W):(E??0)>5))return;c++;let A=W&&O(W.entity_id)==="light"?Xt(W):null;if(!l){d.push({part:"gang",index:z,of:a.length,color:A?A.color:[.22,.88,1],level:.5,accent:!A});return}let lt=A?A.color:[.35,1,.55];d.push({part:"gang",index:z,of:a.length,color:lt,level:E!==null?Math.min(1,.55+E/1500):.8})}),d.length&&o.set(e.id,{color:d[0].color,level:d[0].level,faces:d}),!u)return null;let b=sn(e),y=b[0]??null,k=y?t.states[y]:void 0,v=n.rooms.find(P=>P.points.length>=3&&J([e.x,e.z],P.points)),p=h,$=Yr(this.floorWalls(n),e,n.height,ot(n,e));return{id:`gangs:${e.id}`,floorId:n.id,roomId:v?.id??null,x:$.x,z:$.z,y:e.h+.2+$.y,icon:Zt(e.icon||(l?"power-socket-de":"light-switch")),name:e.name||(b.length===1&&y?L(t,y):et(t,e.type)),ownName:e.name||void 0,showName:!!e.show_name,text:u>1?`${c}/${u}${p!==null?` \xB7 ${X(t,p)}`:""}`:p!==null?X(t,p):k?at(t,k):"",active:c>0,unavailable:!!y&&!f,glow:null,power:p??void 0,furnitureId:e.id,show:e.marker??void 0,fromFurniture:!0}}techItem(t,n,e,i,o){let s=R=>typeof R=="string"&&R!=="none"?R:null,a=s(e.entity),l=a?t.states[a]:void 0,d=n.rooms.find(R=>R.points.length>=3&&J([e.x,e.z],R.points)),c={floorId:n.id,roomId:d?.id??null,x:e.x,z:e.z,ownName:e.name||void 0,showName:!!e.show_name,glow:null,furnitureId:e.id,fromFurniture:!0};if(e.type==="wifi_ap"){let R=s(e.clients),q=R?t.states[R]:void 0,W=q&&Number.isFinite(Number(q.state))?Math.round(Number(q.state)):null,E=a?co(l):q?co(q):null;if(E!==null){let A=E?[.25,.6,1]:[1,.25,.2];i.set(e.id,{color:A,level:.85,faces:[{part:"apring",color:A,level:.85}]})}let M=a??R;return!M||o.has(M)?null:(o.add(M),{...c,id:M,y:ot(n,e)-(e.variant==="wall"?-e.h-.2:.3),icon:Zt(e.icon||"access-point"),name:e.name||L(t,M),text:E===!1?_(t,"ap_offline"):W!==null?_(t,"ap_clients",{n:W}):l?at(t,l):"",active:E===!0,unavailable:E===!1,show:e.marker??(E===!1?"always":void 0),energyDevice:W!==null})}let u=l?O(l.entity_id):null,h=s(e.power),f=h?wt(t.states[h]):null,b=typeof e.run_w=="number"&&e.run_w>0?e.run_w:30,y=l?.attributes.hvac_action==="heating"||u==="switch"&&l?.state==="on"||(f??0)>b;(y||l&&!["off","unavailable","unknown"].includes(l.state))&&i.set(e.id,{color:[1,.45,.15],level:y?.9:.3,faces:[{part:"band",color:[1,.45,.15],level:y?.9:.3}]});let v=s(e.water_temp),p=v?t.states[v]:void 0,$=p&&Number.isFinite(Number(p.state))?Number(p.state):typeof l?.attributes.current_temperature=="number"?l.attributes.current_temperature:null,P=p?.attributes.unit_of_measurement??"\xB0C",z=a??v??h;return!z||o.has(z)?null:(o.add(z),{...c,id:z,y:ot(n,e)+e.h+.25,icon:Zt(e.icon||"water-boiler"),name:e.name||(a?L(t,a):et(t,e.type)),text:$!==null?`${U(t,Math.round($))} ${P}${y?" \xB7 \u{1F525}":""}`:l?at(t,l):"",active:y,unavailable:l?Q(l):!1,power:f??void 0,show:e.marker??void 0,energyDevice:$!==null})}floorWalls(t){let n=this.wallCache.get(t);if(!n){let e=this.building?.settings;n=Ur(t.rooms,{exterior:e?.wall_exterior??.24,interior:e?.wall_interior??.12},t.walls??[]).walls,this.wallCache.set(t,n)}return n}wallCache=new WeakMap;renderGangMenu(){let t=this._gangMenu,n=this.hass,e=t&&this.building?.floors.flatMap(s=>s.furniture).find(s=>s.id===t.furnitureId);if(!t||!n||!e)return w;let i=e.type==="wall_socket";return g`<div class="fp3d-menu-backdrop" @click=${()=>this._gangMenu=null}></div>
      <div class="fp3d-swipe fp3d-info fp3d-gang-menu" style="left:${t.x}px;top:${t.y}px">
        <span>${e.name||et(n,e.type)}</span>
        ${rn(e).map((s,a)=>{let l=s.entity&&s.entity!=="none"?s.entity:null,d=l?n.states[l]:void 0,c=s.power&&s.power!=="none"?wt(n.states[s.power]):null,u=`${i?"\u{1F50C}":"\u25AD"} ${a+1} \xB7 ${l?L(n,l):"\u2013"}`;return g`<button class="fp3d-chip ${d&&$t(d)?"fp3d-gang-on":""}" ?disabled=${!l||(d?Q(d):!0)}
            @click=${async()=>{!l||!await this.confirmFor(l)||pn(n,l)}}>${u}${d?g` <small>${at(n,d)}${c!==null?` \xB7 ${X(n,Math.max(0,c))}`:""}</small>`:w}</button>`})}
      </div>`}householdState(t,n,e){let i=l=>{let d=parseInt(l.slice(1),16);return[(d>>16&255)/255,(d>>8&255)/255,(d&255)/255]};if(e.type==="waste_bin"){let l=typeof e.bin_source=="string"&&e.bin_source!=="none"?e.bin_source:null,d=l?Po(e,t,this.pickups,new Date,{from:this.building?.settings.household?.bin_from,until:this.building?.settings.household?.bin_until}):null,c=this.furnish?null:js(e,!!d?.glow,xn(e,t));c?.kerb&&this.binSpots.set(e.id,c.at);let[u,h]=c?.at??[e.x,e.z];if(!d||!l)return null;let f=d.days===0?_(t,"bin_today"):d.days===1?_(t,"bin_tomorrow"):_(t,"bin_in_days",{n:d.days}),b=i(Ns(e)[1]),y=Math.max(...b),v=y-Math.min(...b)<.12?[.92,.95,1]:b.map(R=>Math.min(1,R/Math.max(.001,y)*1.05)),p=e.name||_(t,`bin_kind_${e.bin_kind??"rest"}`),$=xn(e,t),P=`#${v.map(R=>Math.round(R*255).toString(16).padStart(2,"0")).join("")}`,z=$?_(t,"bin_out_done"):f;return this.binHolos.push({id:e.id,floorId:n.id,x:u,z:h,y:ot(n,e)+e.h,r:Math.max(e.w,e.d)/2,name:p,color:P,when:z,soon:d.days<=1&&!$,days:d.days,out:$}),c?.cue&&this.binCues.push({floorId:n.id,from:[e.x,e.z],to:c.cue,skip:Math.max(e.w,e.d)/2+.1,color:P}),{item:d.days<=1?{icon:$?"check-circle-outline":"trash-can-outline",text:`${p}: ${z}`,entity:l,hot:d.glow&&!$}:void 0}}if(e.type!=="mailbox"){let l=Eo(e,t),d=[1,.55,.12],c=e.name||et(t,e.type);return l?(this.binHolos.push({id:e.id,floorId:n.id,x:e.x,z:e.z,y:ot(n,e)+e.h,r:Math.max(e.w,e.d)/2,name:c,color:"#ff8c1f",when:_(t,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:d,level:.9,faces:[{part:"band",color:d,level:.9}]},item:{icon:"watering-can-outline",text:_(t,"hh_plant",{name:c}),entity:e.moisture??null,hot:!0}}):null}let o=typeof e.entity=="string"&&e.entity!=="none"?e.entity:null;if(!o)return null;let s=Js(e,t),a=[1,.62,.15];return s&&this.binHolos.push({id:e.id,floorId:n.id,x:e.x,z:e.z,y:ot(n,e)+e.h,r:Math.max(e.w,e.d)/2,name:e.name||et(t,e.type),color:"#ffb547",when:_(t,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:e.name?`${e.name}: ${_(t,"mailbox_post")}`:_(t,"mailbox_post"),entity:o,hot:!0}:void 0}}robotPaths(t,n){let e=this.replay;if(!e)return[];let i=[];for(let o of n.floors){let s=o.rooms.filter(a=>a.points.length>=3);for(let a of o.furniture){if(!no(a.type))continue;let l=this.furnitureLinks?.get(a.id)?.entity??null;if(!l)continue;let d=e.robotRooms(l,De(t,l,a.room_sensor)),c=[];for(let u of d){let h=gr(t,s,u),f=h?Ot(h.points):null,b=c[c.length-1];f&&(!b||b[0]!==f[0]||b[1]!==f[1])&&c.push([f[0],f[1]])}c.length&&i.push({floorId:o.id,points:c})}}return i}trailNow(t,n){let e=this.now(),i=Be(t,n),o=this.replay?this.replay.rows(i.map(a=>a.entity),e-Ne,e):this.trailRows,s=i.map(a=>{let l=t.states[a.entity];return{entity:a.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return ka(i,xa(o,s,e),e)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,!this.trail||this.replay){this.trailRows={},this.syncDevices(!0);return}let t=async()=>{let n=this.hass,e=this.building;if(!n||!e||document.hidden)return;let i=Be(n,e).map(o=>o.entity);if(i.length){try{let o=await n.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Ne).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=o??{}}catch{this.trailRows={}}this.syncDevices(!0)}};t(),this.trailTimer=setInterval(()=>{t()},6e4)}projecting=!1;projectedCameras(t,n){let e=[];if(Tr()){let i=new Set(n.floors.flatMap(o=>o.placements.map(s=>s.entity_id)).filter(o=>O(o)==="camera"));for(let o of i){let s=t.states[o],a=s?.attributes.entity_picture;!a||Q(s)||e.push({id:o,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=e.length>0,e}watchCameras(t){t&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!t&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(t){if(/^https?:\/\//.test(t))return t;if(t.startsWith("camera:")){let n=this.hass.states[t.slice(7)],e=n?.attributes.entity_picture;return!e||Q(n)?null:(this.cameraScreens++,e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(t)?this.pictureUrls.get(t)??null:(this.pictureUrls.set(t,null),Ai(this.hass,t,this.home).then(n=>{this.pictureUrls.set(t,n),this.syncDevices(!0)},()=>{}),null)}robotObstacles(t,n){let e=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return t.furniture.filter(i=>{if(e.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||ot(t,i)>.12)return!1;let o=At(i.type);return o&&(o.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:J([i.x,i.z],n)||Re(i).some(s=>J(s,n))}).map(i=>Re(i))}robotInfos(t,n){let e=[];for(let i of n.floors)for(let o of i.furniture){if(!no(o.type))continue;let s=this.furnitureLinks.get(o.id)?.entity??null,a=s?t.states[s]?.state:void 0,l=nr(a)?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",d=o.rotation*Math.PI/180,c=on(o.type),u=o.d*(c?Di(At(o.type)):.14),h=[o.x-Math.sin(d)*u,o.z+Math.cos(d)*u],f=i.rooms.filter(v=>v.points.length>=3),y=(l==="cleaning"?mr(t,f,s,De(t,s,o.room_sensor)):null)??f.find(v=>J(h,v.points)),k=l==="cleaning"&&y?this.robotObstacles(i,y.points):[];e.push({id:o.id,floorId:i.id,rest:h,restHeading:-d,mode:l,room:y?.points??null,roomId:y?.id??null,obstacles:k,...c?{model:{type:o.type,w:o.w,d:o.d,h:o.h}}:{}})}return e}batteryText(t,n,e,i=null){let o=n?Number(t.states[n]?.state):Number.NaN,s=[];return Number.isFinite(o)?s.push(`${U(t,o,0)} %`):i!==null&&s.push(`${U(t,i,0)} % ${_(t,"battery_system_avg")}`),e!==null&&Math.abs(e)>=10&&s.push(`${e<0?"\u25B2":"\u25BC"} ${X(t,Math.abs(e))}`),s.join(" \xB7 ")}meterText(t,n){return n===null?"":Math.abs(n)<5?X(t,0):`${_(t,n<0?"energy_grid_export":"energy_grid_import")} ${X(t,Math.abs(n))}`}wallboxText(t,n,e){let i=n?t.states[n]:void 0,o=String(i?.state??"").toLowerCase(),s=(e??0)>50||/charg|laden|lädt/.test(o),a=i?.entity_id.startsWith("binary_sensor.")?o==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(o),l=s?_(t,"wallbox_charging"):a?_(t,"wallbox_plugged"):i&&!Q(i)&&!i.entity_id.startsWith("binary_sensor.")?at(t,i):"",d=e!==null&&e>50?X(t,e):"";return[l,d].filter(Boolean).join(" \xB7 ")}stateFaces(t,n){let e=[],i=n.state_entity&&n.state_entity!=="none"&&n.state_entity2&&n.state_entity2!=="none"?[[n.state_entity,n.state_split==="top_bottom"?"bottom":"left"],[n.state_entity2,n.state_split==="top_bottom"?"top":"right"]]:[[n.state_entity,"all"]];for(let[o,s]of i){if(!o||o==="none")continue;let a=t.states[o];if(!a||Q(a)||!($t(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let d=O(o)==="light"?Xt(a):null;e.push({part:s,color:d?d.color:[1,.71,.28],level:d?d.level:.85})}return e}carText(t,n,e){let i=s=>_(t,s);if(e||n.away!==null){let s=n.away?` \xB7 ${n.away}`:"";return`${i("car_away")}${s}`}let o=[];return n.soc!==null&&o.push(`${U(t,n.soc,0)} %`),n.range!==null&&o.push(`${U(t,n.range,0)} ${n.rangeUnit}`),n.charging?o.push(n.chargingW!==null?`\u26A1 ${X(t,n.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):n.plugged&&o.push("\u{1F50C}"),n.locked!==null&&o.push(n.locked?"\u{1F512}":"\u{1F513}"),o.join(" \xB7 ")}ceilingAt(t,n,e){let o=t.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&J([n,e],l.points))?.ceiling_height||t.height,s=this.building;if(!s||!Jr(s).some(l=>Xr(l,t.elevation+o)&&Zr(l,t.elevation)))return o;let a=Qr(s,n,e,t.elevation);return a===null?o:Math.max(.5,Math.min(o,a-t.elevation))}lampMarker(t,n,e,i){let o=i?t.states[i]:void 0,s=At(e.type),a=Xi[e.type]??s?.light??"floor",l=n.rooms.some(p=>p.points.length>=3&&J([e.x,e.z],p.points)),d=a==="strip"&&!l?Te(n,e.x,e.z)+(e.mount_y??0):e.mount_y!=null&&!s?e.mount_y:s||a==="wall"||a==="strip"?ot(n,e):a==="table"?io(n,e.x,e.z,e.h):a==="bollard"||a==="garden"?Te(n,e.x,e.z):0,c=n.rooms.find(p=>p.points.length>=3&&J([e.x,e.z],p.points)),u=this.ceilingAt(n,e.x,e.z),h=(s?s.mount==="ceiling":["ceiling","downlight","spot","panel","pendant","fan"].includes(a))&&e.mount_y==null,f=h?n.height-u:0,b=s&&h?Math.max(0,d-f):d,y=qi.has(e.type)&&e.mount_y!=null?Math.min(n.height,e.mount_y+ji(e.type,e.h)):Math.abs(f)>.01?u:void 0,k=y??n.height,v=s?s.mount==="ceiling"?Math.max(.5,b-.15):b+e.h+.2:{ceiling:k-.3,downlight:k-.25,spot:k-.35,panel:k-.25,pendant:Math.max(.6,k-e.h-.25),fan:Math.max(.6,k-e.h-.25),floor:b+e.h+.25,uplight:b+e.h+.25,table:b+e.h+.2,wall:b+e.h+.2,strip:e.upright?b+e.w+.15:Math.max(.3,b-.2),bollard:b+e.h+.25,garden:b+e.h+.25}[a];return{id:i??`lamp:${e.id}`,floorId:n.id,roomId:c?.id??null,x:e.x,z:e.z,y:v,icon:Ce("light"),name:e.name||(i?L(t,i):et(t,e.type)),text:o?at(t,o):"",active:o?$t(o):!1,unavailable:o?Q(o):!1,glow:o?Kr(rr(Xt(o,e.color_entity&&e.color_entity!=="none"?t.states[e.color_entity]:void 0),e.only_color),e.glow_scale):null,lamp:a,rotation:e.rotation,mirror:!!e.mirror,colors:e.colors,materials:e.materials,roll:e.tilt??0,upright:!!e.upright,rise:e.rise??0,fanSpeed:a==="fan"?uo(e.fan&&e.fan!=="none"?t.states[e.fan]:void 0):void 0,size:[e.w,e.d,e.h],base:b,top:y,pickable:!!i,furnitureId:e.id,pack:s?e.type:null,lightY:s?s.mount==="ceiling"?b:b+e.h*.85:void 0,effect:!!o&&o.state==="on"&&typeof o.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(o.attributes.effect.trim()),variant:e.variant,show:e.marker??void 0,fromFurniture:!0}}inOpenRoom(t){if(!this.roomId)return!1;if(t.roomId)return t.roomId===this.roomId;let n=this.building?.floors.find(i=>i.id===t.floorId),e=n?vt(n).find(i=>i.id===this.roomId):void 0;return!!e&&J([t.x,t.z],e.points)}showPin(t){if(this.furnish&&!t.fromFurniture)return!0;if(t.show==="never"||this.markerMode==="none")return!1;if(t.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(t);if(t.lamp||t.model)return!1;let n=O(t.id);return n==="light"?!1:t.fromFurniture?(t.power??0)>=1||n==="media"&&t.active||!!t.energyDevice&&!!t.text:!0}openingTargets(){let t=new Map;for(let[n,e]of this.openingLinks??[]){if(e.lock&&!e.cover||ar(e.cover)){t.set(n,`opening:${n}`);continue}let i=e.cover??e.contact??e.tilt;i&&t.set(n,i)}return t}scheduleThumbs(t=600){clearTimeout(this.thumbTimer);let n=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||n<2){this._thumbs=[];return}let e=Math.max(t,this.thumbsAt+(this._low?8e3:4e3)-Date.now()),i=()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}if(this.viewer.busy()){this.thumbTimer=setTimeout(i,300);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}};this.thumbTimer=setTimeout(i,e)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return w;let t=new Map(this.building.floors.map(o=>[o.id,o.name])),n=[...this._thumbs].sort((o,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===o.floorId)?.elevation??0)),e=this._thumbsCompact,i=()=>{this._thumbsCompact=!e,this.thumbsSaved=this._thumbsCompact?"1":"0";try{localStorage.setItem("home3d.thumbs_compact",this.thumbsSaved)}catch{}};return g`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${e?"fp3d-thumbs-compact":""}" aria-label=${_(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${_(this.hass,e?"thumbs_show":"thumbs_fold")} aria-label=${_(this.hass,e?"thumbs_show":"thumbs_fold")} @click=${i}>${e?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${_(this.hass,"all_floors")}</span>
      </button>
      ${n.map(o=>g`<button class="fp3d-thumb" aria-pressed=${this.floorId===o.floorId} @click=${()=>this.fire("floor-tap",{floorId:o.floorId})}>
          ${e?w:g`<img src=${o.url} alt="" />`}
          <span>${t.get(o.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(t,n,e){let i=this.ro?null:bn(this.actionOwners.get(t),"hold");if(i)return this.runOwnAction(i,this.actionOwners.get(t),n,e);if(t.startsWith("item:"))return;if(t.startsWith("opening:"))return this.onOpeningTap(t.slice(8),n,e,!0);if(t.startsWith("gangs:")){let s=this.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===t.slice(6)),a=s?sn(s):[];a.length===1?this.onDeviceHold(a[0],n,e):this.onDeviceTap(t,n,e);return}if(this.ro){this.onDeviceTap(t,n,e);return}if(this.hass&&this.building)for(let s of this.building.floors)for(let a of s.furniture){if(a.type!=="parking"||!a.car)continue;let l=He(this.hass,a);if([a.entity,a.car.device,...Object.values(l.entities)].filter(c=>!!c&&c!=="none").includes(t)){this._menu={entity:t,x:n,y:e,car:l};return}}if(ce(t)==="light"&&this.hass?.states[t])return this.openPopup(t,n,e);let o=ba(t);o?mt(this,o):this.onDeviceTap(t,n,e)}onDeviceSwipe(t,n,e,i,o){let s=this.hass?.states[t];if(this.ro)return!1;if(n==="start"){if(!s||Q(s)||this.confirmSet.has(t))return!1;let l=O(t);if(l==="light"&&fn(s).dim){let d=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:t,kind:"light",start:d,value:d,x:i,y:o},!0}if(l==="cover"&&qo(s)){let d=s.attributes.current_position;return this._swipe={entity:t,kind:"cover",start:d,value:d,x:i,y:o},!0}return!1}let a=this._swipe;if(!a||a.entity!==t)return!1;if(n==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-e/220*100)));l!==a.value&&(this._swipe={...a,value:l});let d=performance.now();d-this.swipeSent>350&&(this.swipeSent=d,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let t=this._swipe;!t||!this.hass||(t.kind==="light"?t.value<=0?Mt(this.hass,"light","turn_off",{entity_id:t.entity}):Mt(this.hass,"light","turn_on",{entity_id:t.entity,brightness_pct:t.value}):Mt(this.hass,"cover","set_cover_position",{entity_id:t.entity,position:t.value}))}goTo(t){if(this._find=null,t.kind==="room"){this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId});return}this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),setTimeout(()=>this.viewer?.focus(t.floorId,t.x,t.z,t.y,t.entity),120)}renderBinInfo(){let t=this._binInfo,n=this.hass,e=t&&this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===t.furnitureId);if(!t||!n||!e)return w;let i=qs(e,n,this.pickups),o=new Date;o.setHours(0,0,0,0);let s=c=>{let u=Math.round((c.getTime()-o.getTime())/864e5);return u===0?_(n,"bin_today"):u===1?_(n,"bin_tomorrow"):c.toLocaleDateString(n.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=e.name||_(n,`bin_kind_${e.bin_kind??"rest"}`),l=xn(e,n),d=c=>{c.stopPropagation(),typeof e.bin_out=="string"&&pn(n,e.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return g`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${t.x}px;top:${t.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${i.length?i.map(c=>g`<b>${s(c.day)}${c.summary&&c.summary!==a?g` <small>· ${c.summary}</small>`:w}</b>`):g`<b>${_(n,"bin_none")}</b>`}
      ${Ks(e)&&!this.ro?g`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${d}>${l?_(n,"bin_out_done"):_(n,"bin_out_mark")}</button>`:l?g`<small>${_(n,"bin_out_done")}</small>`:w}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||this.panelOpen)return w;let t=()=>{this._hhFolded=!this._hhFolded,Ec("home3d.hhFolded",this._hhFolded)};return g`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${t}>🏠 ${_(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?w:this._household.map(n=>g`<button class="fp3d-hh-row ${n.hot?"fp3d-hh-hot":""}" ?disabled=${!n.entity} @click=${()=>n.entity&&(this.ro?this.showInfo(n.entity,0,0):mt(this,n.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${n.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${n.text}</span>
            </button>`)}
    </div>`}sceneList=null;sceneLabel="";renderRoomList(){let t=this.hass,n=this.building;if(!t||!n||this._walk)return w;let e=this.sceneList;(!e||e.states!==t.states||e.building!==n||e.floorId!==this.floorId||e.alerts!==this._alerts)&&(this.sceneList={states:t.states,building:n,floorId:this.floorId,alerts:this._alerts,list:bl(t,n,this._alerts,this.floorId)});let i=this.sceneList.list;return i.length?g`<nav class="fp3d-sr-rooms" aria-label=${_(t,"sr_rooms")}>
      ${i.map(o=>g`<section aria-label=${o.name}>
          <ul>
            ${o.rooms.map(s=>g`<li><button type="button" @click=${()=>this.fire("room-tap",{floorId:s.floorId,roomId:s.roomId})}>${vl(t,s)}</button></li>`)}
          </ul>
        </section>`)}
    </nav>`:w}renderClock(){let t=this.clock;if(!t||t==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),w;let n=this.clockLook??ks,e=n.seconds?1e3:3e4;return this.clockTimer&&this.clockEvery!==e&&(clearInterval(this.clockTimer),this.clockTimer=void 0),this.clockEvery=e,this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),e),_s(t,{now:new Date(this.now()),lang:(this.hass.language||"en").replace("_","-"),timeZone:this.hass.config?.time_zone,locale:this.hass.locale},n)}renderAlerts(){let t=this.building;if(!this._alerts.length||!t)return w;let n=this._alerts.slice(0,3),e=this.mayEdit,i=o=>_(this.hass,o);return g`<div class="fp3d-alert-banner" role="alert">
      ${n.map(o=>{let s=xt(o),a=e&&this._dismissing===s;return g`<span class="fp3d-alert-item ${e?"fp3d-alert-dismissable":""}">
          <button class="fp3d-alert fp3d-alert-${o.kind}" title=${We(this.hass,t,o)} @click=${()=>this.jumpTo(o)}>${We(this.hass,t,o)}</button>
          ${e?g`<button class="fp3d-alert-x" title=${i("alert_dismiss")} aria-label=${i("alert_dismiss")} aria-expanded=${a?"true":"false"} @click=${()=>this._dismissing=a?null:s}>✕</button>`:w}
          ${a?g`<div class="fp3d-alert-menu" role="menu">
                <button role="menuitem" title=${i("alert_dismiss_now_hint")} @click=${()=>this.dismiss(o,!1)}>${i("alert_dismiss_now")}</button>
                ${_n(o.kind)?g`<button role="menuitem" title=${i("alert_dismiss_good_hint")} @click=${()=>this.dismiss(o,!0)}>${i("alert_dismiss_good")}</button>`:g`<small>${i("alert_dismiss_safety")}</small>`}
              </div>`:w}
        </span>`})}
      ${this._alerts.length>3?g`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:w}
    </div>`}renderScenes(){let t=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!t||!this.hass||this.ro)return w;let n=t.floors.flatMap(o=>vt(o)).find(o=>o.id===this.roomId),e=n?yt(this.hass,n.area_id).filter(o=>O(o)==="scene"||O(o)==="script").slice(0,6):[];if(!e.length)return w;let i=n?.area_id?this.hass.areas?.[n.area_id]?.name:void 0;return g`<div class="fp3d-scenes">
      ${e.map(o=>g`<button class="fp3d-chip" aria-pressed=${this._sceneFired===o} @click=${()=>this.runScene(o)}>${L(this.hass,o,i)}</button>`)}
    </div>`}async syncPets(){let t=this.building,n=this.viewer,e=t?.settings.pets?.on!==!1&&this.petsOn!==!1,i=e?t?.settings.pets?.list??[]:[],o=e&&!!t?.floors.some(s=>s.furniture.some(a=>/:aquarium(_large)?$/.test(a.type)));if(!n||!t||this.plan2d||!i.length&&!o){this.pets?.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==t&&(this.petsFor=t,this.pets.update(t,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[s,a,l]=await Promise.all([zn(),An(),Bl()]);if(!this.viewer||this.plan2d||this.pets)return;this.petsFor=this.building,this.pets=s.startPets({lib:a.funLib,FloorMap:l.FloorMap,viewer:this.viewer,building:this.building,pets:this.building?.settings.pets?.on!==!1&&this.petsOn!==!1?this.building?.settings.pets?.list??[]:[],night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon",base:(d,c)=>ot(d,c),surface:(d,c,u)=>io(d,c,u),closedDoors:()=>{let d=new Set,c=this.hass?.states??{};for(let u of this.building?.floors??[])for(let h of u.openings)h.type==="door"&&h.contact&&c[h.contact]?.state==="off"&&d.add(h.id);return d}})}catch(s){console.error("Home 3D: the pets failed to load",s)}finally{this.petsLoading=!1}}}async syncGhost(){let t=this.building,n=!!t&&t.settings.easter_eggs!==!1&&t.settings.halloween?.ghost!==!1&&this.ghostOn!==!1;if(!this.viewer||this.plan2d||!n){this.ghost?.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(t);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[e,i]=await Promise.all([zn(),An()]);if(!this.viewer||this.plan2d||this.ghost||!this.building)return;this.ghost=e.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>this.hass?.states["sun.sun"]?.state==="below_horizon"})}catch(e){console.error("Home 3D: the ghost failed to load",e)}finally{this.ghostLoading=!1}}}async syncSeason(){clearTimeout(this.seasonTimer);let t=this.building;if(!(!!t&&!!this.viewer&&t.settings.easter_eggs!==!1&&this.ghostOn!==!1&&!!Go(t.settings.seasons,void 0,t.settings.season_dates))){if(this.season?.dispose(),this.season=null,t&&this.viewer&&t.settings.easter_eggs!==!1){let e=new Date;this.seasonTimer=setTimeout(()=>{this.syncSeason()},new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,5).getTime()-e.getTime())}return}if(this.season){this.season.refresh();return}if(!this.seasonLoading){this.seasonLoading=!0;try{let e=await zn(),i=this.renderRoot.querySelector(".fp3d-stage");if(!this.viewer||this.season||!i)return;this.season=e.startSeason({host:i,now:()=>this.building?.settings.easter_eggs===!1||this.ghostOn===!1?null:Go(this.building?.settings.seasons,void 0,this.building?.settings.season_dates),text:(o,s)=>_(this.hass,o,s),low:()=>this._low})}catch(e){console.error("Home 3D: the seasonal theme failed to load",e)}finally{this.seasonLoading=!1}}}async startWalk(){let t=this.building,n=this.viewer;if(!t||!n||this._walk||this.plan2d)return;let e=t.floors.filter(u=>u.rooms.some(h=>h.points.length>=3)),o=(this.roomId?e.find(u=>u.rooms.some(h=>h.id===this.roomId)):void 0)??e.find(u=>u.id===this.floorId)??[...e].sort((u,h)=>Math.abs(u.elevation)-Math.abs(h.elevation))[0];if(!o)return;let s=await Bl();this._walk={room:null,hint:!0},await this.updateComplete;let a=this.renderRoot.querySelector(".fp3d-walk-surface");if(!a)return;n.setFloor(o.id,!1),n.setWallMode("auto");let l=new s.FloorMap(t,o),d=this.roomId?o.rooms.find(u=>u.id===this.roomId):void 0,c;if(d){let u=l.freeNear(Ot(d.points));c={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new s.WalkCamera(n,l,a,{start:c,onRoom:u=>{this.walkRoomPts=u?.points??null,this._walk&&(this._walk={...this._walk,room:u?.name??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let t=this.viewer;t&&(t.setWallMode(this.wallMode),t.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||this.plan2d||!this.building||!this.hass)return w;let t=o=>_(this.hass,o);if(!this._walk)return g`<button class="fp3d-walk-btn" title=${t("walk_start")} aria-label=${t("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span class="fp3d-walk-label">${t("walk_title")}</span>
      </button>`;let n=this._walk,e=null,i=(o,s)=>{if(!e)return;let a=44,l=o.clientX-e.cx,d=o.clientY-e.cy,c=Math.hypot(l,d);c>a&&([l,d]=[l/c*a,d/c*a]),s.firstElementChild.style.transform=`translate(${l}px, ${d}px)`,this.walker?.setStick({x:l/a,y:d/a})};return g`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${n.room??t("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${t("walk_end")}</button>
      </div>
      ${n.hint?g`<div class="fp3d-walk-hint">${t("walk_hint")}</div>`:w}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${o=>{let s=o.currentTarget,a=s.getBoundingClientRect();e={id:o.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(o.pointerId),i(o,s)}}
        @pointermove=${o=>i(o,o.currentTarget)}
        @pointerup=${o=>{e=null,o.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${o=>{e=null,o.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}openFind(){this._find="",this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-find input")?.focus())}closeFind(){this._find=null,this.updateComplete.then(()=>this.renderRoot.querySelector(".fp3d-find-btn")?.focus())}renderFind(){let t=this.building;if(!t||!this.hass)return w;if(this._find===null)return g`<button class="fp3d-find-btn" title=${_(this.hass,"find")} aria-label=${_(this.hass,"find")} @click=${()=>this.openFind()}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let n=Ea(this.findIndex??=Pn(this.hass,t),this._find);return g`<div class="fp3d-find">
      <input
        type="search"
        aria-label=${_(this.hass,"find")}
        placeholder=${_(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${e=>this._find=e.target.value}
        @keydown=${e=>{e.key==="Escape"&&this.closeFind(),e.key==="Enter"&&n[0]&&this.goTo(n[0])}}
      />
      <button class="fp3d-find-close" aria-label=${_(this.hass,"close")} @click=${()=>this.closeFind()}>✕</button>
      ${this._find.trim()?g`<div class="fp3d-find-list">
            ${n.length?n.map(e=>g`<button @click=${()=>this.goTo(e)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${e.icon?Cr(e.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${e.name}</b>${e.where?g`<small>${e.where}</small>`:w}</span>
                  </button>`):g`<p>${_(this.hass,"find_none")}</p>`}
          </div>`:w}
    </div>`}renderCentral(){let t=this.building,n=this.hass;if(!t||!n||!this.central||this._find!==null||this.ro)return w;let e=(p,$)=>_(n,p,$),i=g`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${e("central")}
      aria-label=${e("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this.disarm()}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let o=this.floorId?t.floors.find(p=>p.id===this.floorId):void 0,s=o?[o]:t.floors,a=s.flatMap(p=>ho(n,p).lights),l=s.flatMap(p=>ho(n,p).covers),d=a.filter(p=>n.states[p]?.state==="on").length,c=!o,u=(p,$,P,z)=>{if(z.length){if(c&&this._armed!==p){this.arm(p);return}this.disarm(),this.confirmForAll(z).then(R=>R&&Mt(n,$,P,{entity_id:z}))}},h=(p,$,P,z,R)=>g`<button class="fp3d-btn ${this._armed===p?"fp3d-central-armed":""}" ?disabled=${!R.length} aria-pressed=${this._armed===p?"true":w} @click=${()=>u(p,P,z,R)}>
        ${this._armed===p?e("central_confirm"):e($)}
      </button>`,f=p=>{let $=this._armed;return!$||!p.includes($)?w:g`<div class="fp3d-central-ask"><span>${e(`central_again_${$}`)}</span><b aria-hidden="true">${this._armLeft}</b><i aria-hidden="true"></i></div>`},b=p=>this._armed&&p.includes(this._armed)?"fp3d-central-row-armed":"",y=(t.settings.favorites??[]).filter(p=>n.states[p]),k=this.buttons??t.settings.buttons??[],v=ne()?Bo(this.sceneHost(n,t)):[];return g`${i}
      <div class="fp3d-central" role="dialog" aria-label=${e("central")}>
        <div class="fp3d-central-top">
          <b>${o?o.name:e("central_house")}</b>
          ${this.noSettings?w:g`<button class="fp3d-btn fp3d-central-gear" @click=${()=>{this._central=!1,this.openTab("open-settings","/home_3d#settings")}}>${e("settings")} ›</button>`}
        </div>
        ${v.length?g`<div class="fp3d-central-favs">
              ${v.map(p=>g`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:p.id,floorId:null,roomId:null}}}><span aria-hidden="true">${p.icon}</span> ${p.title}</button>`)}
            </div>`:w}
        <div class="fp3d-sr-only" role="status" aria-live="assertive">${this._armed?e(`central_again_${this._armed}`):""}</div>
        <div class="fp3d-central-row ${b(["lights_on","lights_off"])}">
          <span>${e("central_lights")}${a.length?g` <small>${d}/${a.length}</small>`:w}</span>
          ${h("lights_on","central_on","light","turn_on",a.filter(p=>n.states[p]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",a.filter(p=>n.states[p]?.state==="on"))}
          ${f(["lights_on","lights_off"])}
        </div>
        ${l.length?g`<div class="fp3d-central-row ${b(["covers_open","covers_close"])}">
              <span>${e("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
              ${f(["covers_open","covers_close"])}
            </div>`:w}
        <b>${e("central_favorites")}</b>
        ${y.length?g`<div class="fp3d-central-favs">
              ${y.map(p=>{let[$,P]=br(p),z=n.states[p],R=$==="homeassistant"&&z?.state==="on";return g`<button
                  class="fp3d-chip"
                  aria-pressed=${R||this._sceneFired===p}
                  ?disabled=${Q(z)}
                  @click=${()=>{Mt(n,$,P,{entity_id:p}),this._sceneFired=p,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${L(n,p)}
                </button>`})}
            </div>`:k.length?w:g`<p class="fp3d-central-hint">${e(this.mayEdit?"central_no_favorites":"central_no_favorites_viewer")}</p>`}
        ${k.length?g`<div class="fp3d-central-favs">
              ${k.map(p=>g`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Tc(n,p)}
                  @click=${$=>{vr(n,$.currentTarget,p,P=>_(n,"service_failed",{error:P})),p.action!=="service"&&(this._central=!1)}}
                >
                  ${p.icon?g`<ha-icon .icon=${p.icon.startsWith("mdi:")?p.icon:`mdi:${p.icon}`}></ha-icon>`:w}${p.label}
                </button>`)}
            </div>`:w}
      </div>`}mediaCardUp(t,n){let e=t.states[n];if(!e||O(n)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(n)?.until??0)>Date.now()&&Q(e))return!0;let i=[e.attributes.media_title,e.attributes.app_name,e.attributes.source].some(o=>typeof o=="string"&&!!o.trim());return!Q(e)&&(e.state==="playing"||e.state==="paused"&&i&&this.pausedRecently(e))}pausedRecently(t){let n=Date.parse(t.last_changed??"");if(!Number.isFinite(n))return!0;let e=n+Sc-Date.now();if(e<=0)return!1;let i=Date.now()+e+500;return(!this.pausedTimer||i<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=i,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},e+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return w;let t=_(this.hass,this.clean?"controls_show":"controls_hide");return g`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${t}
      aria-label=${t}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Ft`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Ft`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let t=this.hass;if(!this.voice||!t||this.ro||this._walk)return w;let n=this._voice,e=n?.phase==="wait"||n?.phase==="listen",i=_(t,"voice_button"),o=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return g`<button class="fp3d-mic ${n?.phase==="listen"?"fp3d-mic-on":""}" style="left:${o}px" title=${i} aria-label=${i} ?disabled=${e} @click=${()=>{this.onMic()}}>
        ${Ft`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${n?g`<div class="fp3d-mic-say ${n.phase==="error"?"fp3d-mic-err":""}" style="left:${o}px">${n.text}</div>`:w}`}sayVoice(t,n){this._voice={phase:t,text:n},clearTimeout(this.voiceTimer),(t==="done"||t==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,t==="error"?9e3:6e3))}async onAsk(t){let n=this.hass,e=this.building;if(!n||!e)return;let i=(this.screen??"").trim().toLowerCase();if(t.screen&&t.screen.trim().toLowerCase()!==i)return;if(t.show_rooms){(!t.admins_only||n.user?.is_admin)&&this.showRooms(e,t.show_rooms);return}let o=null;try{let s=await Oe();o=await this.handleSentence(n,e,s,t.text,t.speak),o===null&&this.sayVoice("error",_(n,"voice_none"))}catch(s){this.sayVoice("error",_(n,"voice_error",{msg:String(s?.message??s)}))}try{await Ri(n,t.ask_id,o??"",o!==null)}catch{}}async onMic(){let t=this.hass,n=this.building;if(!t||!n||this._voice?.phase==="wait"||this._voice?.phase==="listen")return;clearTimeout(this.voiceTimer);let e=(o,s)=>this.sayVoice(o,s);e("wait","\u2026"),this.tourToken++;let i;try{let o=window.AudioContext??window.webkitAudioContext;i=new o,i.resume()}catch{i=void 0}try{let o=await Oe(),s=await o.listenOnce(t,()=>e("listen",_(t,"voice_listen")),Qt(),i);if(!s){e("error",_(t,"voice_none"));return}if(await this.handleSentence(t,n,o,s,!0)!==null)return;e("wait",`\u201C${s}\u201D \u2026`);let a=await o.converse(t,s);e("done",a?`\u201C${s}\u201D \u2013 ${a}`:`\u201C${s}\u201D`)}catch(o){let s=o,a=s?.message==="no_pipeline"?"voice_no_pipeline":s?.message==="silent"?"voice_silent":s?.name==="NotAllowedError"||s?.name==="SecurityError"||!window.isSecureContext?"voice_denied":null;e("error",a?_(t,a):_(t,"voice_error",{msg:String(s?.message??s?.name??o)}))}}async handleSentence(t,n,e,i,o){let s=(y,k)=>this.sayVoice(y,k),{devices:a,items:l}=this.spokenDevices(t,n,e.SYNONYMS),d=e.showTarget(i,n,a,y=>y.area_id?t.areas?.[y.area_id]?.name:null);if(d){let y=d.kind==="house"?_(t,"all_floors"):d.kind==="cameras"?_(t,"camera_wall_title"):d.name;if(s("done",`\u201C${i}\u201D \u2192 ${y}`),this.directing.touch(Date.now()),d.kind==="cameras")this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}));else if(d.kind==="device"){let k=l.get(d.id);d.camera&&d.entity?this.lookThrough(d.entity):k&&this.goTo(k)}else d.kind==="house"?this.fire("floor-tap",{floorId:null}):d.kind==="floor"?this.fire("floor-tap",{floorId:d.floorId}):(this.floorId!==d.floorId&&this.fire("floor-tap",{floorId:d.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:d.floorId,roomId:d.roomId}),60));return _(t,"voice_showing",{name:y})}let c=this.spokenRacks(t,n),u=c.length?e.rackAnswer(i,c,(y,k)=>_(t,y,k)):null;if(u){s("done",`\u201C${i}\u201D \u2013 ${u.text}`),this.directing.touch(Date.now());let y=l.get(`furniture:${u.rackId}`);return y&&this.goTo(y),o&&e.speak(t,u.text,Qt()),u.text}let h=await t.callWS({type:"home_3d/locate/ask",text:i,language:t.language}).catch(()=>null);if(h)return s("done",`\u201C${i}\u201D \u2013 ${h.text}`),h.rooms.length&&(!h.admins_only||t.user?.is_admin)&&this.showRooms(n,h.rooms),o&&e.speak(t,h.text,Qt()),h.text;let f=this.moduleHost(t,n,e.SYNONYMS,y=>e.showTarget(y,n,a,k=>k.area_id?t.areas?.[k.area_id]?.name:null)),b=await Ra(i,f);if(b){s("done",b.text?`\u201C${i}\u201D \u2013 ${b.text}`:`\u201C${i}\u201D`),this.directing.touch(Date.now()),b.highlight?.length&&this.viewer?.flashDevices(b.highlight);let y=b.focus,k=b.spoken??b.text??"";if(b.tour?.length){let v=o&&b.speak!==!1?$=>e.speak(t,$,Qt()):null,p=b.spoken??b.text;return p&&v&&await v(p),this.runTour(b.tour,n,l,v),k}if(y?.roomId&&y.floorId)this.floorId!==y.floorId&&this.fire("floor-tap",{floorId:y.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:y.floorId,roomId:y.roomId}),60);else if(y?.floorId&&!y.entity&&!y.furnitureId)this.fire("floor-tap",{floorId:y.floorId});else if(y?.entity||y?.furnitureId){let v=l.get(y.entity??`furniture:${y.furnitureId}`);v&&this.goTo(v)}return b.text&&b.speak!==!1&&o&&e.speak(t,b.text,Qt()),k}return null}spokenDevices(t,n,e){let i=this.findIndex??=Pn(t,n),o=new Map(n.floors.flatMap(u=>vt(u).map(h=>[h.id,h.name]))),s=[],a=[],l=new Map;for(let u of i)u.kind==="device"&&u.entity&&l.set(u.entity,u);let d=new Set;for(let u of n.floors){let h=vt(u);for(let f of u.furniture){if(zc.has(f.type))continue;let b=this.furnitureLinks.get(f.id),y=b?.entity??b?.power??null,k=y??`furniture:${f.id}`,v=h.find(W=>W.points.length>=3&&J([f.x,f.z],W.points)),p=et(t,f.type),$=[f.name,...f.aliases??[],p,y?L(t,y):null,...e[f.type]??[]].filter(W=>!!W),P=f.name||(y?L(t,y):p);s.push({id:k,entity:y,name:P,names:$,room:v?.name??"",camera:!!y&&O(y)==="camera"});let z=(f.type==="plant"||Mo(f.type))&&!!f.moisture&&f.moisture!=="none",R=zo(b?.entity?t.states[b.entity]:void 0,b?.power?wt(t.states[b.power]):null,typeof f.run_w=="number"&&f.run_w>0?f.run_w:10),q=typeof f.remaining=="string"&&f.remaining!=="none"&&!R?Ro(t.states[f.remaining]):null;a.push({id:k,entity:y,name:P,names:$,room:v?.name??"",floorId:u.id,roomId:v?.id??null,power:b?.power??null,type:f.type,remaining:q,thirsty:z?Eo(f,t):null}),y?d.add(y):l.set(k,{kind:"device",name:P,where:"",floorId:u.id,roomId:v?.id??null,entity:null,icon:null,x:f.x,z:f.z,y:Math.min(u.height-.3,Math.max(.5,f.h))})}}let c=new Map(n.floors.flatMap(u=>u.placements.map(h=>[h.entity_id,h])));for(let[u,h]of l){if(d.has(u)||u.startsWith("furniture:"))continue;let f=h.roomId&&o.get(h.roomId)||"",b=c.get(u),y=[b?.name,...b?.aliases??[],h.name].filter(k=>!!k);s.push({id:u,entity:u,name:h.name,names:y,room:f,camera:O(u)==="camera"}),a.push({id:u,entity:u,name:h.name,names:y,room:f,floorId:h.floorId,roomId:h.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(t,n){let e=[];for(let i of n.floors)for(let o of i.openings){let s=this.openingLinks?.get(o.id)?.lock;if(!s)continue;let a=this.openingSpot(n,o.id,!0);if(!a)continue;let l=t.states[s];e.push({id:s,floorId:i.id,roomId:o.room_id,x:a.x,z:a.z,y:Math.min(a.y+.35,1.5),icon:Ce("lock"),name:L(t,s),text:l?at(t,l):"",active:!!l&&(l.state==="unlocked"||l.state==="open"||l.state==="unlocking"),unavailable:!l||Q(l),glow:null,full:!0,fromFurniture:!1})}return e}openingSpot(t,n,e=!1){for(let i of t.floors){let o=i.openings.find(v=>v.id===n);if(!o)continue;let s=Gr(o,i.rooms,i.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],d=a[(s.edge+1)%a.length],c=Math.hypot(d[0]-l[0],d[1]-l[1])||1,u=[(d[0]-l[0])/c,(d[1]-l[1])/c],f=Ji(a)>0?[-u[1],u[0]]:[u[1],-u[0]],b=o.offset;if(e){let v=u[0]*f[1]-u[1]*f[0]>0;b=o.offset-o.width/2+Gi(o,o.hinge==="left"===v)}let[y,k]=hn(s.room,s.edge,b);return{floorId:i.id,x:y+f[0]*.2,z:k+f[1]*.2,y:Math.max(.5,o.sill+o.height/2),theta:Math.atan2(f[0],f[1])}}return null}async showRooms(t,n){let e=n.map(l=>({roomId:l,floorId:t.floors.find(d=>d.rooms.some(c=>c.id===l))?.id})).filter(l=>!!l.floorId).slice(0,8);if(!e.length)return;let i=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let o=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};o?.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(d=>this.tourTimer=setTimeout(d,l));for(let[l,d]of e.entries()){if(i!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await a(150)),i!==this.tourToken))break;this.roomId!==d.roomId&&this.fire("room-tap",{floorId:d.floorId,roomId:d.roomId}),this.directing.touch(Date.now()),l<e.length-1&&await a(4e3)}o?.removeEventListener("pointerdown",s)}async runTour(t,n,e,i){let o=++this.tourToken;clearTimeout(this.tourTimer);let s=t.map(c=>{if(c.openingId){let h=this.openingSpot(n,c.openingId);return h?{...h,entity:null,say:c.say,inside:!0}:null}let u=e.get(c.entity??`furniture:${c.furnitureId}`);return u?{floorId:u.floorId,x:u.x,z:u.z,y:u.y,theta:void 0,entity:u.entity,say:c.say,inside:!1}:null}).filter(c=>!!c).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a?.addEventListener("pointerdown",l,{once:!0});let d=c=>new Promise(u=>this.tourTimer=setTimeout(u,c));for(let c of s){if(o!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await d(150)),o!==this.tourToken)||(this.viewer?.focus(c.floorId,c.x,c.z,c.y,c.entity,c.inside?{radius:3.2,phi:1.05,theta:c.theta}:void 0),await d(900),o!==this.tourToken))break;let u=c.say&&i?await i(c.say):!1;if(o!==this.tourToken)break;await d(u?1200:2600)}a?.removeEventListener("pointerdown",l)}spokenOpenings(t,n){let e=[],i=a=>_(t,a);for(let a of n.floors){let l=new Map(vt(a).map(d=>[d.id,d.name]));for(let d of a.openings){let c=this.openingLinks?.get(d.id);if(!c)continue;let u=d.type==="garage"?"garage":d.type==="door"?"door":"window",h=de(t,c,d.type),f=h.open>.02||h.open2>.02||d.type==="garage"&&(h.cover??0)>.02,b=!f&&(h.tilt>.02||h.tilt2>.02);for(let y of[c.contact,c.contact2,c.cover,c.tilt,c.tilt2])y&&y!=="none"&&e.push({id:d.id,entity:y,kind:u,name:i(`opening_${d.type}`),room:l.get(d.room_id)??"",floorId:a.id,roomId:d.room_id,open:f,tilted:b})}}let o=n.settings.roof?.windows??[],s=o.length?new Map(ts(n).map(a=>[a.key,a])):null;for(let a of o){let l=ql(t,a),d=l.open>.02,c=!d&&l.tilt>.02,u=[a.window,a.contact,a.cover,a.tilt].filter(k=>!!k&&k!=="none"),h=u.map(k=>tr(t,k)).filter(k=>!!k).map(k=>n.floors.flatMap(v=>v.rooms.filter(p=>p.area_id===k).map(p=>({floor:v,room:p})))).find(k=>k.length===1)?.[0],f=h?null:es(n,s?.get(a.face),a),b=h?.floor??f?.floor??n.floors[n.floors.length-1],y=h?.room??(f?b?.rooms.find(k=>k.id===f.roomId):void 0);for(let k of u)e.push({id:a.id,entity:k,kind:"roof_window",name:a.name||i("roof_window"),room:y?.name??"",floorId:b?.id??"",roomId:y?.id??null,open:d,tilted:c})}return e}sceneHost(t,n){return this.moduleHost(t,n,{},()=>null)}moduleHost(t,n,e,i){let o=null,s=()=>o??=this.spokenDevices(t,n,e).spoken,a={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>t.language||"en",devices:()=>s(),findDevice:l=>{let d=i(l);return d?.kind==="device"&&d.id?s().find(c=>c.id===d.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>this.mayEdit,updateBuilding:l=>this.changePlan(l),callService:(l,d,c)=>(this.hass&&Mt(this.hass,l,d,c??{}),Promise.resolve()),newId:l=>Yi(l),waterLevel:(l,d)=>{let c=this.building?.floors.find(h=>h.id===l),u=c?.outdoor.find(h=>h.id===d);return!c||!u||u.type!=="pool"?null:{y:Ee(c,u),floorY:Pe(c,u)}},groundAt:(l,d,c)=>{let u=this.building?.floors.find(h=>h.id===l);return u?Te(u,d,c):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:di,openings:()=>this.spokenOpenings(t,n),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>({id:l.id,entity:l.powerEntity,name:s().find(d=>d.entity===l.id||d.power===l.powerEntity)?.name??L(t,l.id),watts:l.power})).sort((l,d)=>d.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(t,n),cars:()=>this.spokenCars(t,n),pools:()=>Fa(a),weather:()=>te(t,this.weatherEntityId??n.settings.weather_entity),listen:async l=>{try{return(await(await Oe()).listenOnce(t,l,Qt())).trim()||null}catch{return null}},notify:l=>this.showNote(l),occupied:()=>this.occupiedRooms(t,n),speakers:()=>this.planSpeakers(t,n)};return a}showNote(t){this._note=t,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(t,n){let e=new Map;for(let i of this.lastPersons)i.roomId&&e.set(i.roomId,i);for(let i of n.floors)for(let o of i.rooms){if(e.has(o.id)||!o.area_id)continue;yt(t,o.area_id).some(a=>{let l=t.states[a];return a.startsWith("binary_sensor.")&&l?.state==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&e.set(o.id,{floorId:i.id,roomId:o.id})}return[...e.values()]}planSpeakers(t,n){let e=[],i=new Set;for(let o of n.floors){let s=(a,l)=>o.rooms.find(d=>d.points.length>=3&&J([a,l],d.points))?.id??null;for(let a of o.placements)!a.entity_id.startsWith("media_player.")||i.has(a.entity_id)||!t.states[a.entity_id]||(i.add(a.entity_id),e.push({entity:a.entity_id,name:L(t,a.entity_id),floorId:o.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of o.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||i.has(l)||!t.states[l]||(i.add(l),e.push({entity:l,name:L(t,l),floorId:o.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:ot(o,a)+a.h}))}}return e}roomSheets(t){let n=this.hass,e=this.building;if(!n||!e||this.ro||!ne())return[];let i=e.floors.find(o=>o.rooms.some(s=>s.id===t));return i?No(this.sceneHost(n,e),{floorId:i.id,roomId:t}).map(o=>({id:o.id,icon:o.icon,title:o.title})):[]}openRoomSheet(t,n){let e=this.building?.floors.find(i=>i.rooms.some(o=>o.id===t));this._sheet={id:n,floorId:e?.id??null,roomId:t}}currentSheet(t,n){let e=this._sheet;if(!e)return null;let i=this.sceneHost(t,n);return(e.roomId&&e.floorId?No(i,{floorId:e.floorId,roomId:e.roomId}):Bo(i)).find(s=>s.id===e.id)??null}renderSheet(){let t=this.hass,n=this.building;if(!t||!n||!this._sheet)return w;let e=this.currentSheet(t,n);if(!e)return w;let i=c=>_(t,c),o=this._sheet.roomId?n.floors.flatMap(c=>c.rooms).find(c=>c.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async c=>{s();try{await c()}catch(u){console.warn("Home 3D: module sheet failed",u)}},l=()=>{let u=this.renderRoot.querySelector(".fp3d-sheet-input")?.value.trim();u&&e.input&&a(()=>e.input.onSubmit(u))},d=async()=>{let c=this.renderRoot.querySelector(".fp3d-sheet-input");if(!c)return;c.placeholder=i("sheet_listening");let h=await this.sceneHost(t,n).listen?.(()=>c.placeholder=i("sheet_listening"));c.placeholder=e.input?.placeholder??"",h?c.value=h:this.showNote(i("sheet_mic_failed"))};return g`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${e.title}>
        <header>
          <b><span aria-hidden="true">${e.icon}</span> ${e.title}${o?` \xB7 ${o.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${i("close")} @click=${s}>✕</button>
        </header>
        ${e.choice?g`<div class="fp3d-sheet-choice">
              ${e.choice.options.map(c=>g`<button class="fp3d-chip" aria-pressed=${c.id===e.choice.value} @click=${()=>{e.choice.set(c.id),this.requestUpdate()}}>${c.label}</button>`)}
            </div>`:w}
        ${e.chips?.length?g`<div class="fp3d-sheet-chips">${e.chips.map(c=>g`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>c.onTap())}}>${c.label}</button>`)}</div>`:w}
        ${e.input?g`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${e.input.placeholder} @keydown=${c=>c.key==="Enter"&&l()} />
              ${e.input.mic?g`<button class="fp3d-btn fp3d-sheet-mic" title=${i("sheet_mic")} aria-label=${i("sheet_mic")} @click=${()=>{d()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:w}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${e.input.button}</button>
            </div>`:w}
        ${e.lines?.length?g`<div class="fp3d-sheet-lines">${e.lines.map(c=>g`<p>${c}</p>`)}</div>`:w}
        ${this.mayEdit&&Ca().length?g`<button class="fp3d-sheet-gear" @click=${()=>{s(),this.openTab("open-extensions","/home_3d")}}>${i("ext_module_settings")} ›</button>`:w}
      </div>`}viewPlan(t){let n=new Date(this.replay?.t??Date.now()),e=this.hass?qn(t,this.hass.states,n).join("|"):"";return(this.shownPlan?.from!==t||this.shownPlan.hidden!==e)&&(this.shownPlan={from:t,hidden:e,plan:e&&this.hass?$l(t,this.hass.states,n):t}),this.shownPlan.plan}get mayEdit(){return(this.canEdit??!!this.hass?.user?.is_admin)&&!this.ro}setPlanSettings(t){this.changePlan(n=>Object.assign(n.settings,t))}changePlan(t){let n=this.building;if(!n||!this.hass||!this.mayEdit||!this.dispatchEvent(new CustomEvent("plan-change",{detail:{change:t},cancelable:!0})))return;let e=structuredClone(n);t(e),this.building=e,Pi(this.hass,e,zi(e.recipes),this.home).catch(i=>this.serviceFailed("home_3d/building/save",i))}openTab(t,n){let e=new CustomEvent(t,{detail:{section:null,id:null},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&(history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}})))}showRackView(t,n,e=null){this._rackView={id:t,draw:n,slot:e}}closeRackView(){this._rackView=null}rackViewItem(){let t=this._rackView;return t?this.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===t.id):void 0}rackViewOf(){let t=this._rackView,n=this.rackViewItem();if(!t||!n)return null;let e=this.hass?.language??"en",i=n.name||et(this.hass,n.type),o=new Map((n.rack?.slots??[]).map(a=>[a.id,this.hass?ie(this.hass,a):null])),s=JSON.stringify([t.id,i,e,[...o]]);if(this.rackViewMemo?.key!==s||this.rackViewMemo.draw!==t.draw){let a=t.draw((l,d)=>l.name||Li(d,e),i,l=>o.get(l.id)??null);this.rackViewMemo={key:s,draw:t.draw,view:{...a,name:i}}}return this.rackViewMemo.view}tapRackDrawing(t){this._rackView&&t&&(this._rackView={...this._rackView,slot:t})}openRackEntity(t){mt(this,t)}renderRackDetail(t,n){let e=n.rack?.slots.find(l=>l.id===this._rackView?.slot);if(!e)return w;let i=l=>_(t,l),o=ie(t,e),s=be(e),a=e.name||et(t,e.type);return g`<section class="fp3d-rack-detail">
      <b>${o?g`<i class="fp3d-rack-led" style="background:${Dn[o]}"></i>`:w}${a}${o?g` · ${i(`rack_status_${o}`)}`:w}</b>
      ${s.length?s.map(l=>g`<button class="fp3d-rack-entity" @click=${()=>this.openRackEntity(l)}><span>${L(t,l)}</span><span>${at(t,t.states[l])}</span></button>`):g`<p>${i("rack_unlinked")}</p>`}
    </section>`}renderRackView(){let t=this.hass,n=t?this.rackViewOf():null,e=this.rackViewItem();if(!t||!n||!e)return w;let i=()=>this.closeRackView(),o=s=>this.tapRackDrawing(s.target?.closest?.("[data-slot]")?.getAttribute("data-slot")??null);return g`<div class="fp3d-sheet-backdrop" @click=${i}></div>
      <div class="fp3d-sheet fp3d-rack-view" role="dialog" aria-label=${n.name}>
        <header>
          <b>▤ ${n.name}</b>
          <button class="fp3d-sheet-x" aria-label=${_(t,"close")} @click=${i}>✕</button>
        </header>
        <p class="fp3d-rack-view-used">${_(t,"rack_front_view")} · ${_(t,"rack_used",{used:n.used,u:n.u})}</p>
        ${this.renderRackDetail(t,e)}
        <div class="fp3d-rack-view-box" @click=${o}>${Ps(n.svg)}</div>
      </div>`}renderNote(){return this._note?g`<div class="fp3d-note" role="status">${this._note}</div>`:w}spokenAlerts(t,n){let e=new Map(n.floors.flatMap(i=>vt(i).map(o=>[o.id,o.name])));return this._alerts.map(i=>({kind:i.kind,entity:i.entity,name:L(t,i.entity),...i.text?{text:i.text}:{},room:i.roomId?e.get(i.roomId)??null:null,floorId:i.floorId,roomId:i.roomId}))}spokenCars(t,n){let e=[];for(let i of n.floors)for(let o of i.furniture){if(o.type!=="parking"||!o.car)continue;let s=fe(t,o),a=He(t,o),l=a.entities.tracker?t.states[a.entities.tracker]:void 0,d=!!s&&!(l&&!Mn.has(l.state.toLowerCase()));e.push({name:o.name||(s?et(t,s):et(t,"car")),spot:o.id,floorId:i.id,present:d,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return e}renderSwipe(){let t=this._swipe;if(!t||!this.hass)return w;let n=t.kind==="light"&&t.value<=0;return g`<div class="fp3d-swipe" style="left:${t.x}px;top:${t.y}px">
      <span>${L(this.hass,t.entity)}</span>
      <b>${n?_(this.hass,"swipe_off"):`${t.value} %`}</b>
      <i><em style="height:${t.value}%"></em></i>
    </div>`}lookThrough(t){let n=this.viewer,e=this.building;if(!n||!e||this.ro||this.plan2d)return;let i=e.floors.find(s=>s.placements.some(a=>a.entity_id===t))?.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:t}:this._through={entity:t,back:n.getView()},this.watchCameras(!0);let o=this.floorId===i?0:300;o&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{this._through?.entity===t&&!this.viewer?.lookThrough(t)&&(this._through=null)},o)}endThrough(){let t=this._through;t&&(this._through=null,this.live?.id===t.entity&&(this.live=null),this.viewer?.flyTo(t.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}setWallDock(t){this._wallDock=t;try{localStorage.setItem(oi,t)}catch{}}wallDragDock=t=>{if(t.button!==0||t.target.closest("button"))return;let n=t.currentTarget;n.setPointerCapture?.(t.pointerId);let e=i=>{n.removeEventListener("pointerup",e),n.removeEventListener("pointercancel",e);let o=this.getBoundingClientRect();i.type==="pointerup"&&Math.hypot(i.clientX-t.clientX,i.clientY-t.clientY)>12&&this.setWallDock(xl(i.clientX-o.left,i.clientY-o.top,o.width,o.height))};n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e)};renderWallDock(){let t={top:"\u2580",bottom:"\u2584",left:"\u258C",right:"\u2590"};return g`<span class="fp3d-wall-dock" role="group" aria-label=${_(this.hass,"camera_dock")}>
      ${ni.map(n=>g`<button class="fp3d-chip" aria-pressed=${this._wallDock===n} title=${_(this.hass,`camera_dock_${n}`)} aria-label=${_(this.hass,`camera_dock_${n}`)} @click=${()=>this.setWallDock(n)}>${t[n]}</button>`)}
    </span>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return w;let t=this.hass,n=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))},e=[...new Set(this.building.floors.flatMap(c=>c.placements.map(u=>u.entity_id)).filter(c=>O(c)==="camera"))];this.watchCameras(!0);let i=c=>{let u=t.states[c],h=u?.attributes.entity_picture;return h&&u&&!Q(u)?h.startsWith("data:")?h:`${h}${h.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},o=c=>{let u=t.states[c];return g`${L(t,c)}${u?.state==="recording"?g` <b>● ${_(t,"state_recording")}</b>`:w}`},s=this._wallBig&&e.includes(this._wallBig)?this._wallBig:null;if(s){let c=i(s),u=this.liveFor(s),h=()=>{this.throughWall=!0,n(),this.lookThrough(s)};return g`<div class="fp3d-wall fp3d-wall-${this._wallDock}">
        <div class="fp3d-wall-head" title=${_(t,"camera_dock")} @pointerdown=${this.wallDragDock}>
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${_(t,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${o(s)}</span>
          <span class="fp3d-wall-tools">${this.renderWallDock()}<button class="fp3d-chip" @click=${h}>${_(t,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(c?g`<img src=${c} alt="" />`:g`<div class="fp3d-wall-none">${_(t,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:d}=yl(e.length,a?.clientWidth??this.clientWidth-48,a?.clientHeight??this.clientHeight-160);return g`<div class="fp3d-wall fp3d-wall-${this._wallDock}">
      <div class="fp3d-wall-head" title=${_(t,"camera_dock")} @pointerdown=${this.wallDragDock}>
        <span>${_(t,"camera_wall_title")} · ${e.length} <span class="fp3d-still">${_(t,"camera_still",{s:this._low?10:5})}</span></span>
        <span class="fp3d-wall-tools">${this.renderWallDock()}<button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button></span>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${d}px); grid-auto-rows: ${Math.round(d*9/16)}px">
        ${e.map(c=>{let u=i(c),h=jt(t,c).some(f=>t.states[f]?.state==="on");return g`<button class="fp3d-wall-cam ${h?"fp3d-wall-seen":""}" title=${_(t,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${u?g`<img src=${u} alt="" />`:g`<div class="fp3d-wall-none">${_(t,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${o(c)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(t){if(this.live?.id!==t){let n={id:t,el:null,failed:!1};this.live=n;let e=window;e.loadCardHelpers?e.loadCardHelpers().then(i=>{if(this.live!==n)return;let o=i.createCardElement({type:"picture-entity",entity:t,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});o.hass=this.hass,n.el=o,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}renderThrough(){let t=this._through;if(!t||!this.hass)return w;let n=this.hass.states[t.entity],e=n?.attributes.entity_picture,i=e&&!Q(n)?e.startsWith("data:")?e:`${e}${e.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,o=this.building?.settings.director?.live?this.liveFor(t.entity):null;return g`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${o?g`<div class="fp3d-through-img fp3d-through-live">${o}</div>`:i?g`<img class="fp3d-through-img" src=${i} alt="" />`:w}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${L(this.hass,t.entity)}</span>
        <span class="fp3d-still">${o?"\u25CF Live":_(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${_(this.hass,"through_blend")}
          @input=${s=>this._blend=Number(s.target.value)/100}
        />
        <button class="fp3d-chip" title=${_(this.hass,"through_full_hint")} @click=${()=>this.throughFull(t.entity)}>${en("expand")} ${_(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${_(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(t){let n=this.renderRoot.querySelector(".fp3d-through-img");n&&typeof n.requestFullscreen=="function"?n.requestFullscreen().catch(()=>mt(this,t)):mt(this,t)}hideTvCard(t){this.tvHidden.add(t),Vl(this.tvHidden),this.syncDevices(!0)}showTvCard(t){this.tvHidden.delete(t),Vl(this.tvHidden),this.syncDevices(!0)}openPopup(t,n,e,i=!1){clearTimeout(this.popupTimer),i||(this._menu=null),wr(os),this._popup={entity:t,x:n,y:e,hover:i}}onPinOver=t=>{if(t.pointerType!=="mouse"||this.ro)return;let n=t.target?.closest?.(".fp3d-dev[data-entity]"),e=n?.dataset.entity;!n||!e||ce(e)!=="camera"||this._popup&&!this._popup.hover||(clearTimeout(this.popupTimer),this.popupTimer=setTimeout(()=>{let i=this.renderRoot.querySelector(".fp3d-stage");if(!i||!this.hass?.states[e]||this._popup&&!this._popup.hover)return;let o=n.getBoundingClientRect(),s=i.getBoundingClientRect();this.openPopup(e,o.left+o.width/2-s.left,o.top-s.top,!0)},250))};onPinOut=t=>{if(t.pointerType!=="mouse")return;let n=t.target?.closest?.(".fp3d-dev[data-entity]");!n||n.contains(t.relatedTarget)||(clearTimeout(this.popupTimer),this._popup?.hover&&(this._popup=null))};renderPopup(){let t=this._popup;if(!t||!this.hass||this.ro)return w;let n=this.renderRoot.querySelector(".fp3d-stage"),e=ce(t.entity)==="camera",i=ns(t.x,t.y,e?320:252,e?t.hover?230:270:330,n?.clientWidth??800,n?.clientHeight??600);return g`${t.hover?w:g`<div class="fp3d-menu-backdrop" @click=${()=>this._popup=null}></div>`}
      <fp3d-device-popup
        style="left:${i.left}px;top:${i.top}px"
        mode=${t.hover?"hover":"card"}
        ?low=${this._low}
        ?noLook=${this.plan2d}
        .hass=${this.rawHass}
        .entity=${t.entity}
        @close=${()=>this._popup=null}
        @camera-look=${o=>{this._popup=null,this.lookThrough(o.detail.entity)}}
      ></fp3d-device-popup>`}renderMenu(){let t=this._menu;if(!t||!this.hass||this.ro)return w;let n=this.renderRoot.querySelector(".fp3d-stage"),e=n?.clientWidth??800,i=n?.clientHeight??600,o=Math.max(8,Math.min(e-240,t.x-116)),s=Math.max(8,Math.min(i-360,t.y-170));return g`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
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
      ></fp3d-quick-menu>`}moduleMarkers(t){let n=[];for(let e of this.scene){if(e.kind!=="marker")continue;let i=t.floors.find(c=>c.id===e.floorId),o=e.furnitureId?i?.furniture.find(c=>c.id===e.furnitureId):void 0;if(!i||!o&&!e.at)continue;let[s,a]=o?[o.x,o.z]:e.at,l=Ba(e.path),d=Na(e.emoji);n.push({id:`module:${e.id}`,floorId:i.id,roomId:i.rooms.find(c=>c.points.length>=3&&J([s,a],c.points))?.id??null,x:s,z:a,y:e.y??(o?ot(i,o)+o.h*.6:1.2),icon:d?`<span style="font-size:18px;line-height:1" aria-hidden="true">${d}</span>`:l?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${l}"/></svg>`:"",name:e.name,text:e.text??"",active:!!e.active&&!this.dimmed,unavailable:!1,glow:e.color&&e.active&&!this.dimmed?{color:e.color,level:1}:null,pin:!0,full:!0,...o?{furnitureId:o.id}:{}})}return n}openModuleCard(t){let n=this.scene.find(o=>o.kind==="marker"&&o.id===t);if(!n)return;if(n.sheet){this.openRoomSheet(n.sheet.roomId,n.sheet.id);return}n.card&&(this.mediaFolded.delete(n.card),this.cardPing=n.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let e=this.building?.floors.find(o=>o.id===n.floorId),i=e?.furniture.find(o=>o.id===n.furnitureId);e&&i&&this.viewer?.focus(e.id,i.x,i.z,ot(e,i)+i.h*.6,`module:${n.id}`)}onDeviceTap(t,n=0,e=0){if(this.tvHidden.has(t))return this.showTvCard(t);let i=this.ro?void 0:this.actionOwners.get(t);if(!i)return this.defaultTap(t,n,e);let o=bn(i,"double_tap");this.taps.tap(t,!!o,()=>{let s=bn(i,"tap");s?this.runOwnAction(s,i,n,e):this.defaultTap(t,n,e)},()=>o&&this.runOwnAction(o,i,n,e))}runOwnAction(t,n,e,i){let o=this.hass;o&&Rs(t,n.entity,{callService:(s,a,l)=>(Mt(o,s,a,l),Promise.resolve()),moreInfo:s=>mt(this,s),camera:s=>this._menu={entity:s,x:e,y:i},navigate:s=>{history.pushState(null,"",s),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}))},openUrl:s=>{window.open(s,"_blank","noopener,noreferrer")},confirm:s=>this.ask(s??_(o,"action_confirm_default",{name:n.entity?L(o,n.entity):_(o,"action_this_item")}))}).catch(s=>this.showNote(_(o,"action_failed",{error:s instanceof Error?s.message:String(s)})))}ask(t){return dn(t,{ok:_(this.hass,"action_confirm_ok"),cancel:_(this.hass,"cancel")})}async confirmFor(t){return!this.confirmSet.has(t)||await this.ask(_(this.hass,"confirm_switch",{name:L(this.hass,t)}))}arm(t){clearTimeout(this.armTimer);let n=Date.now()+3500;this._armed=t;let e=()=>{let i=n-Date.now();if(i<=0)return this.disarm();this._armLeft=Math.ceil(i/1e3),this.armTimer=setTimeout(e,i-(this._armLeft-1)*1e3+5)};e()}disarm(){clearTimeout(this.armTimer),this._armed=null,this._armLeft=0}confirmForAll(t){return xr(t,this.confirmSet,n=>L(this.hass,n),n=>this.ask(_(this.hass,"confirm_switch",{name:n})))}defaultTap(t,n=0,e=0){if(t.startsWith("item:")||t.startsWith("trail:")||t.startsWith("lamp:"))return;if(t.startsWith("module:"))return this.openModuleCard(t.slice(7));if(t.startsWith("opening:"))return this.onOpeningTap(t.slice(8),n,e,!1);if(t.startsWith("gangs:")){let s=t.slice(6),a=this.building?.floors.flatMap(c=>c.furniture).find(c=>c.id===s);if(!a)return;let l=sn(a);if(l.length===1)return this.onDeviceTap(l[0],n,e);if(l.length>1){this._gangMenu={furnitureId:s,x:n,y:e};return}let d=rn(a).find(c=>c.power&&c.power!=="none")?.power;d&&(this.ro?this.showInfo(d,n,e):mt(this,d));return}if(t.startsWith("hh:")){let[s,a]=t.slice(3).split("#");this.building?.floors.flatMap(d=>d.furniture).find(d=>d.id===a&&d.type==="waste_bin")?(this._binInfo={furnitureId:a,x:n,y:e},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(s,n,e):mt(this,s);return}if(this.ro){let s=this.building,a=s?s.energy.grid??ue(s,d=>this.furnitureLinks?.get(d.id)?.power??null).grid:null,l=t==="grid"?a:t.startsWith("detect:")?t.slice(7):t;l&&this.showInfo(l,n,e);return}if(t==="grid"){let s=this.building,a=s?s.energy.grid??ue(s,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null;a&&mt(this,a);return}if(t.startsWith("detect:")){mt(this,t.slice(7));return}let i=this.printerCams.get(t);if(i){this._menu={entity:i,x:n,y:e};return}if((ce(t)==="vacuum"||ce(t)==="camera")&&this.hass?.states[t])return this.openPopup(t,n,e);let o=O(t);if(o==="cover"||o==="camera"){this._menu={entity:t,x:n,y:e};return}o&&Zi.has(o)?this.confirmFor(t).then(s=>s&&pn(this.hass,t)):mt(this,t)}onOpeningTap(t,n,e,i){let o=this.openingLinks?.get(t);if(!o||!this.hass)return;if(o.lock&&!o.cover){this.ro?this.showInfo(o.lock,n,e):this._menu={entity:o.lock,x:n,y:e,doorLock:!0};return}let s=o.cover;if(!s)return;if(this.ro){this.showInfo(o.contact??s,n,e);return}if(i){mt(this,s);return}let a=this.hass.states[s];if(!a||Q(a)){mt(this,s);return}let[l]=s.split(".");this.confirmFor(s).then(d=>d&&Mt(this.hass,l,l==="switch"?"turn_on":"press",{entity_id:s}))}effectiveTheme(){return vo(this.theme,this.hass)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(t,n){this.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("home3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("home3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let t=this._energy;if(!t||this.roomId||!this.showEnergy)return w;let n=i=>_(this.hass,i),e=[];if(t.consumption!==null&&e.push({cls:"total",label:n("energy_consumption"),value:X(this.hass,t.consumption)}),t.grid!==null){let i=t.grid<0;e.push({cls:i?"export":"grid",label:n(i?"energy_grid_export":"energy_grid_import"),value:X(this.hass,Math.abs(t.grid))})}if(t.solar!==null&&e.push({cls:"solar",label:n("energy_solar"),value:X(this.hass,t.solar)}),t.battery!==null||t.soc!==null){let i=[t.battery!==null?X(this.hass,Math.abs(t.battery)):null,t.soc!==null?`${Math.round(t.soc)} %`:null].filter(Boolean);e.push({cls:"battery",label:n("energy_battery"),value:i.join(" \xB7 ")})}return t.tariff&&e.push({cls:"tariff",label:n("energy_tariff"),value:`${U(this.hass,t.tariff.value,3)} ${t.tariff.unit}`.trim()}),g`<div class="fp3d-energy" aria-live="off">
      ${this._cheap?g`<div class="fp3d-energy-item fp3d-energy-cheap" role="status"><span>${n("cheap_rate")}</span><b>${n("cheap_rate_now")}</b></div>`:w}
      ${this._holoOn?w:e.map(i=>g`<button type="button" class="fp3d-energy-item fp3d-energy-tile fp3d-energy-${i.cls}${this._bigTile===i.cls?" fp3d-energy-big":""}" aria-pressed=${this._bigTile===i.cls?"true":"false"} @click=${()=>this.toggleEnergyTile(i.cls)}>
                <span>${i.label}</span><b>${i.value}</b>
              </button>`)}
      ${this.flows!==null?w:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${n("flows_hint")} (${n(this._flows?"flow_on":"flow_off")})`} aria-label=${n("flows")} @click=${()=>this.toggleFlows()}>
        <span>${n("flows")}</span><b>${en("flow")}</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?w:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${n("holos_hint")} aria-label=${n("holos")} @click=${()=>this.toggleHolos()}>
        <span>${n("holos")}</span><b>${en("holo")}</b>
      </button>`}
    </div>`}toggleEnergyTile(t){this._bigTile=this._bigTile===t?null:t}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return w;let t=$n[this.heatMode],n=this.heatMode==="temperature",e=n?Jt(this.hass,t.stops[0][0]):t.stops[0][0],i=n?Jt(this.hass,t.stops[t.stops.length-1][0]):t.stops[t.stops.length-1][0],o=n?le(this.hass):t.unit,s=a=>_(this.hass,a);return g`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${ga(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${U(this.hass,e,0)} ${o}</span><span>${U(this.hass,i,0)} ${o}</span></span>
      ${this.heatValues.size?w:g`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(t){let n=t.config?.latitude,e=t.config?.longitude;if(typeof n!="number"||typeof e!="number")return null;let i=`${new Date().toDateString()},${n},${e}`;return this.sunPathKey!==i&&(this.sunPathKey=i,this.sunPathCache=Tl(Date.now(),n,e)),this.sunPathCache}skyColor(){if(this.effectiveTheme()==="realistic"&&this._realSky)return this._realSky.horizon;let t=Fe[this.effectiveTheme()]??Fe.neon,n=this._sky;return t.night[0].map((e,i)=>Math.round(e+(t.day[0][i]-e)*n))}watchLightning(t){if(!t){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let n=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),n()},5e3+Math.random()*9e3)};n()}render(){let t=this._sky,n=(d,c)=>`rgb(${d.map((u,h)=>Math.round(u+(c[h]-u)*t)).join(",")})`,e=Fe[this.effectiveTheme()]??Fe.neon,i=this.effectiveTheme()==="realistic"?this._realSky:null,o=d=>`rgb(${d.join(",")})`,s=Il(this.building?.settings.backdrop)??(i?`linear-gradient(180deg, ${o(i.top)} 0%, ${o(i.horizon)} 62%, ${o(i.ground)} 100%)`:null),l=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${n(e.night[0],e.day[0])};--fp3d-ground:${n(e.night[1],e.day[1])}${s?`;background:${s}`:""}`;return g`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      @pointerover=${this.onPinOver}
      @pointerout=${this.onPinOut}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${l}
    >
      ${this._error?g`<p class="fp3d-error">${this._error}</p>`:w} ${this.clean?w:this.renderEnergy()} ${this.renderHologram()} ${this.clean?w:this.renderWires()} ${this.clean?w:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?w:g`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?w:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderGangMenu()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderSheet()} ${this.renderRackView()} ${this.renderNote()}
      ${this.renderMenu()} ${this.renderPopup()} ${this.renderEye()} ${this.renderRoomList()}
      ${this.renderMic()}
      ${this.pivotMark&&!this._walk?g`<span class="fp3d-pivot" aria-hidden="true"></span>`:w}
      ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.rawHass} .building=${this.building} @close=${()=>(this._micProbe=!1,ws())}></fp3d-mic-probe>`:w}
      ${this.showStats&&this._stats?g`<span class="fp3d-stats"
            ><b>${this._stats.fps?_(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):_(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?g`(${this._stats.busy.map(d=>_(this.hass,`stats_busy_${d}`)).join(", ")})`:w} ·
            ${_(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${_(this.hass,this._stats.low?"stats_low":"stats_full",{r:U(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${U(this.hass,this.syncMs,1)} ms`:""}</span
          >`:w}
    </div>`}static styles=[cn,Ir,Qe`
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
      .fp3d-clock .fp3d-dial {
        width: 96px;
        height: 96px;
        align-self: center;
      }
      .fp3d-clock .fp3d-dial .s {
        stroke: var(--fp3d-accent);
      }
      /* Day (#260, V06): the dark box under dark text was unreadable; the clock takes the Day surface with dark text */
      :host([light]) .fp3d-clock {
        background: rgba(255, 255, 255, 0.88);
        color: #0f1c2e;
        box-shadow: 0 4px 14px rgba(20, 40, 80, 0.18);
      }
      :host([light]) .fp3d-clock span {
        color: #3d4d63;
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
      /* one cross: the field's own clear button goes, the close button stays (#259, V08) */
      .fp3d-find input::-webkit-search-cancel-button {
        -webkit-appearance: none;
        appearance: none;
        display: none;
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
      .fp3d-sheet-lines p {
        margin: 0;
        color: var(--fp3d-muted);
        font-size: 12px;
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
      /* docked to one edge of the view (#266), so the 3D view stays in sight beside it */
      .fp3d-wall-top {
        inset: 56px 12px auto 12px;
        height: min(40%, 380px);
      }
      .fp3d-wall-bottom {
        inset: auto 12px calc(var(--fp3d-bottom-inset, 0px) + 12px) 12px;
        height: min(40%, 380px);
      }
      .fp3d-wall-left {
        inset: 56px auto calc(var(--fp3d-bottom-inset, 0px) + 12px) 12px;
        width: min(42%, 520px);
      }
      .fp3d-wall-right {
        inset: 56px 12px calc(var(--fp3d-bottom-inset, 0px) + 12px) auto;
        width: min(42%, 520px);
      }
      .fp3d-wall-head {
        cursor: grab;
        touch-action: none;
        user-select: none;
        gap: 8px;
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
      .fp3d-wall-tools,
      .fp3d-wall-dock {
        display: flex;
        gap: 6px;
      }
      .fp3d-wall-dock .fp3d-chip[aria-pressed="true"] {
        color: var(--fp3d-accent);
        box-shadow: inset 0 0 0 1px var(--fp3d-accent);
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
      /* the TV card (#281): a mouse makes it larger while it hovers, like the solar card; it can be hidden */
      @media (hover: hover) and (pointer: fine) {
        .fp3d-holo-media:hover {
          z-index: 6;
        }
        .fp3d-holo-media:hover .fp3d-holo-body {
          scale: 1.22;
          transform-origin: 0 100%;
        }
      }
      .fp3d-holo-hide {
        margin-left: 6px;
        width: 22px;
        height: 22px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: rgba(8, 16, 34, 0.5);
        color: inherit;
        font-size: 11px;
        cursor: pointer;
        flex: none;
      }
      .fp3d-holo-hide:hover {
        background: rgba(8, 16, 34, 0.85);
      }
      @media (pointer: coarse) {
        .fp3d-holo-hide {
          width: 44px;
          height: 44px;
          margin: -11px -9px -11px 0;
        }
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
        /* the row stops before the Walk button in the corner instead of running under it (#259, V14) */
        .fp3d-stage:has(> .fp3d-walk-btn) .fp3d-energy {
          max-width: calc(100% - 20px - var(--fp3d-walk-right, 12px) - var(--fp3d-walk-w, 96px));
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
        /* the buttons (search, hide, star) fill the corner on the controls' side: the line keeps clear of them and wraps (#241) */
        max-width: calc(100% - 126px);
        text-align: right;
        text-wrap: balance;
      }
      .fp3d-side-right .fp3d-stats {
        right: 116px;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
      /* phones (#93): Walk as a 44 px symbol that stays above the energy cards; 44 px touch targets */
      @media ${_i(Si)} {
        .fp3d-stage {
          --fp3d-walk-w: 44px;
        }
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
    `]};Ze("fp3d-view3d",ui);function Ac(r,t){let n=t.attributes.current_temperature,e=typeof n=="number"&&Number.isFinite(n)?`${U(r,Math.round(n))} \xB0C`:"",i=!["off","unavailable","unknown"].includes(t.state);return{text:[at(r,t),e].filter(Boolean).join(" \xB7 "),on:i}}function X(r,t){return Math.abs(t)>=1e3?`${U(r,t/1e3,1)} kW`:`${Math.round(t)} W`}function jl(r){let t=[.3,.85,1];return r==="washer"||r==="dryer"?{color:t,level:.8,faces:[{part:"drum",color:t,level:.8}]}:{color:t,level:.8}}var zc=new Set(["rug","stairwell","grid_point","worktop"]);function Hc(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}export{ui as Fp3dView3d,Ac as waterHeaterText};
